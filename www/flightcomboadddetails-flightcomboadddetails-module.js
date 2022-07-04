(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcomboadddetails-flightcomboadddetails-module"],{

/***/ "./src/app/flightcomboadddetails/flightcomboadddetails.html":
/*!******************************************************************!*\
  !*** ./src/app/flightcomboadddetails/flightcomboadddetails.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\r\n    <ion-row>\r\n      <ion-col style=\"text-align: center;height: 48px;\">\r\n        <div style=\"align-self: center\">\r\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\r\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\r\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\r\n          </div>\r\n          <div  *ngIf=\"activeStep == 1\" style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label>Thông tin hành khách</label></div>\r\n          <div  *ngIf=\"activeStep != 1\" style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label>Thông tin liên hệ</label></div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding>\r\n  <div class=\"div-img-step\">\r\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_2.svg\">\r\n  </div>\r\n  <div *ngIf=\"activeStep == 1 else stepUserInfo\">\r\n    <div *ngFor=\"let m of arradult;let i=index\">\r\n      <div class=\"d-flex m-top-16'\">\r\n        <div class=\"text-adult\">\r\n          {{m.text}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"d-flex\">\r\n        <div [ngClass]=\"(m.errorGender || m.errorInfo)? 'div-left cls-error' : 'div-left'\" (click)=\"selectAdultGender(m)\" (blur)=\"checkInput(m, 1, true)\">\r\n          <div [ngClass]=\"!m.genderdisplay ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\r\n            <ion-label class=\"sub-label\">Danh xưng</ion-label>\r\n          </div>\r\n          <div class=\"text-gender\" *ngIf=\"m.genderdisplay\">{{m.genderdisplay}}</div>\r\n          <div [ngClass]=\"(m.errorGender || m.errorInfo)? 'div-icon-down cls-error' : 'div-icon-down'\">\r\n            <img *ngIf=\"!(m.errorGender || m.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\r\n            <img *ngIf=\"(m.errorGender || m.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\r\n        </div>\r\n        </div>\r\n        <div [ngClass]=\"(m.errorName || m.errorSubName || m.errorInfo) ? 'div-right cls-error' : 'div-right'\">\r\n          <ion-label\r\n            [ngClass]=\"!m.hoten ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\r\n            Họ và tên đầy đủ</ion-label>\r\n          <ion-input class=\"cls-input-custom\" type=\"text\"  [(ngModel)]=\"m.hoten\" required  (ionBlur)=\"inputLostFocus(m, true)\" (ionInput)=\"inputFocus(m, $event)\" (ionFocus)=\"inputOnFocus(m, 2)\">\r\n          </ion-input>\r\n\r\n          <div class=\"text-right\" *ngIf=\"m.genderdisplay && m.hoten\" (click)= \"editPaxInfo(m, 1)\">Xóa</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-top-6\">\r\n        <ion-label class=\"text-sub-name\">Điền đầy đủ Họ tên như trên giấy tờ tùy thân dùng để thực hiện chuyến bay</ion-label>\r\n    </div>\r\n      <div *ngIf=\"showLotusPoint && !m.airlineMemberCode\" class=\"text-lotus-point\" (click)=\"openLotusPointSave(m)\">Nhập thẻ bông sen vàng <img class=\"img-vector\" src=\"./assets/imgs/vector.svg\" /></div>\r\n      <div *ngIf=\"showLotusPoint && m.airlineMemberCode\" class=\"text-lotus-code\" (click)=\"openLotusPointSave(m)\">Thẻ bông sen vàng: {{ m.airlineMemberCode }}</div>\r\n\r\n      <!-- show error -->\r\n      <div class=\"div-showerror m-top-16\"  *ngIf=\"!inputtext\">\r\n        <div class=\"d-flex cls-error\" *ngIf=\"m.textErrorInfo\">\r\n          <div class=\"div-icon-error\">\r\n              <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n          </div>\r\n          <div class=\"div-text-error m-left-8\">\r\n              {{ m.textErrorInfo }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"m.errorTextGender\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-8\">\r\n                {{ m.errorTextGender }}\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"m.errorTextName\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-8\">\r\n                {{ m.errorTextName }}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"m.hoten && !m.errorTextName && m.errorTextSubName\">\r\n          <div class=\"div-icon-error\">\r\n              <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n          </div>\r\n          <div class=\"div-text-error m-left-8\">\r\n              {{ m.errorTextSubName }}\r\n          </div>\r\n      </div>\r\n\r\n      </div>\r\n      <div class=\"div-split\"></div>\r\n    </div>\r\n    <!-- trẻ em -->\r\n    <div *ngIf=\"arrchild && arrchild.length >0\">\r\n      <div *ngFor=\"let itemChild of arrchild; let idxc = index\">\r\n        <div class=\"d-flex\">\r\n          <div class=\"div-width-300\">\r\n            <div class=\"div-sub-title \">{{itemChild.text}} {{itemChild.iddisplay}}</div>\r\n          </div>\r\n        \r\n        </div>\r\n\r\n        <div class=\"d-flex\">\r\n          <div [ngClass]=\"(itemChild.errorGender || itemChild.errorInfo)? 'div-left cls-error' : 'div-left '\" (click)=\"selectGender(itemChild)\"  (blur)=\"checkInput(itemChild, 1, false)\">\r\n            <div [ngClass]=\"!itemChild.genderdisplay ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\r\n              <ion-label class=\"sub-label\">Danh xưng</ion-label>\r\n            </div>\r\n            <div class=\"text-gender\" *ngIf=\"itemChild.genderdisplay\">{{itemChild.genderdisplay}}</div>\r\n              <div [ngClass]=\"(itemChild.errorGender || itemChild.errorInfo )? 'div-icon-down cls-error' : 'div-icon-down'\">\r\n                <img *ngIf=\"!(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\r\n                <img *ngIf=\"(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\r\n              </div>\r\n          </div>\r\n          <div [ngClass]=\"(itemChild.errorName || itemChild.errorSubName || itemChild.errorInfo) ? 'div-right cls-error' : 'div-right'\">\r\n            <ion-label\r\n              [ngClass]=\"!itemChild.hoten ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\r\n              Họ và tên đầy đủ</ion-label>\r\n            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"itemChild.hoten\"\r\n              type=\"text\" (ionBlur)=\"inputLostFocus(itemChild, false)\" (ionInput)=\"inputFocus(itemChild, $event)\" (ionFocus)=\"inputOnFocus(itemChild, 2)\" required></ion-input>\r\n\r\n              <div class=\"text-right\" *ngIf=\"itemChild.genderdisplay && itemChild.hoten\" (click)= \"editPaxInfo(itemChild, 2)\">Xóa</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"p-top-6\">\r\n          <ion-label class=\"text-sub-name\">Điền đầy đủ Họ tên như trên giấy tờ tùy thân dùng để thực hiện chuyến bay</ion-label>\r\n      </div>\r\n        <div class=\"d-flex m-top-8\">\r\n          <div class=\"div-left no-border\"></div>\r\n          <div [ngClass]=\"((itemChild.errorTextBirthday || itemChild.errorBirthday1) || (itemChild.errorInfo && !itemChild.BirthDay)) ? 'div-right cls-error' : 'div-right'\">\r\n            <ion-label class=\"sub-label m-bottom-6\" position=\"floating\">Sinh ngày</ion-label>\r\n            <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" displayFormat=\"DD/MM/YYYY\" pickerFormat=\"DD MM YYYY\" class=\"cls-iondatetime\" \r\n              [(ngModel)]=\"itemChild.BirthDay\" (ionChange)=\"checkInput(itemChild, 3, false)\" required></ion-datetime>\r\n              <div [ngClass]=\"(itemChild.BirthDay || itemChild.errorInfo )? 'div-icon-down cls-error' : 'div-icon-down'\">\r\n                  <img *ngIf=\"!(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\r\n                  <img *ngIf=\"(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <!-- show error -->\r\n      <div class=\"div-showerror m-top-16\" *ngIf=\"!inputtext\">\r\n        <div class=\"d-flex cls-error\" *ngIf=\"itemChild.textErrorInfo\">\r\n          <div class=\"div-icon-error\">\r\n              <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n          </div>\r\n          <div class=\"div-text-error m-left-8\">\r\n              {{ itemChild.textErrorInfo }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.errorTextGender\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\"  src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-8\">\r\n                {{ itemChild.errorTextGender }}\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.errorTextName\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-8\">\r\n                {{ itemChild.errorTextName }}\r\n            </div>\r\n        </div>\r\n\r\n   \r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.errorTextBirthday\">\r\n          <div class=\"div-icon-error\">\r\n              <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n          </div>\r\n          <div class=\"div-text-error m-left-8\">\r\n              {{ itemChild.errorTextBirthday }}\r\n          </div>\r\n      </div>\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.hoten && !itemChild.errorTextName && itemChild.errorTextSubName\">\r\n          <div class=\"div-icon-error\">\r\n              <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n          </div>\r\n          <div class=\"div-text-error m-left-8\">\r\n              {{ itemChild.errorTextSubName }}\r\n          </div>\r\n      </div>\r\n\r\n      </div>\r\n        <div class=\"div-split\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #stepUserInfo>\r\n\r\n    <div class=\"div-user-info\">\r\n      <div [ngClass]=\" ( (hasinput && !hoten) || hoteninvalid)? 'm-bottom-12 cls-error': 'm-bottom-12' \">\r\n        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\r\n          <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Họ tên</ion-label>\r\n          <ion-input [(ngModel)]=\"hoten\" type=\"text\" (ionInput)=\"inputFocus(null, $event)\" (ionBlur)=\"inputLostFocus(null)\" (ionFocus)=\"inputOnFocus(null, 9)\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div [ngClass]=\" ( (hasinput && !phone) || sodienthoaiinvalid)? 'm-bottom-12 cls-error': 'm-bottom-12' \">\r\n        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\r\n          <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Số điện thoại</ion-label>\r\n          <ion-input [(ngModel)]=\"phone\" maxlength=11 required (ionBlur)=\"checkInputUserInfo(2)\" (ionFocus)=\"inputOnFocus(null, 10)\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div [ngClass]=\" ( (hasinput && !_email) || emailinvalid)? 'm-bottom-12 cls-error': 'm-bottom-12' \">\r\n        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\r\n          <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Email</ion-label>\r\n          <ion-input [(ngModel)]=\"_email\" type=\"email\" (ionBlur)=\"checkInputUserInfo(3)\" (ionFocus)=\"inputOnFocus(null, 11)\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n      <ion-row style=\"margin-top: 20px\">\r\n        <ion-checkbox [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\r\n        <ion-label class=\"label-input\" style=\"margin: 1px 10px\">Xuất hóa đơn điện tử</ion-label>\r\n    </ion-row>\r\n\r\n      <div *ngIf=\"ischeck\">\r\n        <ion-row style=\"margin-left: -5px\">\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"--padding-start: 0px\">\r\n              <ion-label class=\"label-input-order\" position=\"floating\">Tên công ty</ion-label>\r\n              <ion-input class=\"label-input\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"--padding-start: 0px\">\r\n              <ion-label class=\"label-input-order\" position=\"floating\">Địa chỉ</ion-label>\r\n              <ion-input class=\"label-input\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"--padding-start: 0px\">\r\n              <ion-label class=\"label-input-order\" position=\"floating\">Mã số thuế</ion-label>\r\n              <ion-input class=\"label-input\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div style=\"margin-left: 5px;margin-top: 10px\">\r\n          <ion-checkbox (ionChange)=\"showNameMail($event)\" [checked]=\"ishideNameMail\" class=\"ion-checkbox\" color=\"secondary\"></ion-checkbox>\r\n          <ion-label class=\"label-input\" >Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\r\n        </div>\r\n        <div *ngIf=\"!ishideNameMail\">\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"--padding-start: 0px\">\r\n              <ion-label class=\"cls-label\" position=\"floating\">Họ tên</ion-label>\r\n              <ion-input class=\"label-input\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"--padding-start: 0px\">\r\n              <ion-label class=\"cls-label\" position=\"floating\">Email nhận HĐ</ion-label>\r\n              <ion-input class=\"label-input\" [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </div>\r\n      </div>\r\n      <div class=\"div-showerror m-bottom-12\">\r\n        <div class=\"d-flex cls-error \" *ngIf=\"hasinput && !hoten\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-q0\">\r\n                Vui lòng nhập họ tên.\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hoten && hoteninvalid\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-10\">\r\n                Họ tên không hợp lệ. Vui lòng kiểm tra lại!\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hoten && subnameinvalid\">\r\n          <div class=\"div-icon-error\">\r\n              <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n          </div>\r\n          <div class=\"div-text-error m-left-8\">\r\n            Không nằm trong danh sách họ phổ biến. Vui lòng kiểm tra lại!\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hasinput && !phone\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-10\">\r\n                Vui lòng nhập số điện thoại.\r\n            </div>\r\n        </div>\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"phone && sodienthoaiinvalid\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-10\">\r\n                Số điện thoại không hợp lệ. Vui lòng kiểm tra lại!\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hasinput && !_email\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-10\">\r\n                Vui lòng nhập email.\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"_email && emailinvalid\">\r\n            <div class=\"div-icon-error\">\r\n                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\r\n            </div>\r\n            <div class=\"div-text-error m-left-28\">\r\n                Định dạng địa chỉ email không hợp lệ. Vui lòng kiểm tra lại!\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    </div>\r\n  </ng-template>\r\n</ion-content>\r\n<ion-footer>\r\n  <div class='div-close-paxhint' *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\" (click)=\"hidePaxHint()\"><img src='./assets/ic_close_b.svg'></div>\r\n  <div class=\"div-pax-hint\" *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\">\r\n                  \r\n    <div *ngFor=\"let itempax of listpaxhint\" class=\"d-flex m-bottom-16\" (click)=\"selectPaxHint(itempax)\">\r\n        <div class=\"icon-pax\">\r\n                <img src=\"./assets/ic_flight/icon-pax.svg\">\r\n        </div>\r\n        <div class=\"text-pax-hint\">\r\n            {{itempax.fullName}}\r\n        </div>\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n  <div class=\"div-footer d-flex-footer\">\r\n    <div class=\"d-flex-footer div-width-100\">\r\n      <div (click)=\"showComboDetail()\" class=\"div-total\" *ngIf=\"PriceAvgPlusTAStr\">\r\n        <div  class=\"d-flex-footer text-sub-total\">\r\n          {{ adult }} người lớn, {{ child }} trẻ em\r\n        </div>\r\n        <div class=\"text-total\">{{PriceAvgPlusTAStr}}đ\r\n          <sup><img  class=\"img-paymentbreakdown\" src=\"../../assets/ic_hoteldetail/ic_info.svg\" /></sup>\r\n        </div>\r\n      </div>\r\n      <div class=\"div-button\">\r\n        <button *ngIf=\"activeStep==1\" (click)=\"next()\" ion-button round outline class=\"button button-done\">Thông tin\r\n          liên hệ <span><img class=\"img-arrow\" src=\"./assets/imgs/ic_next.svg\"></span> </button>\r\n        <button *ngIf=\"activeStep==2\" (click)=\"next()\" ion-button round outline class=\"button button-done\">Thanh\r\n          toán<span><img class=\"img-arrow\" src=\"./assets/imgs/ic_next.svg\"></span> </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcomboadddetails/flightcomboadddetails.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/flightcomboadddetails/flightcomboadddetails.module.ts ***!
  \***********************************************************************/
/*! exports provided: FlightComboAddDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComboAddDetailsPageModule", function() { return FlightComboAddDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _flightcomboadddetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcomboadddetails */ "./src/app/flightcomboadddetails/flightcomboadddetails.ts");







let FlightComboAddDetailsPageModule = class FlightComboAddDetailsPageModule {
};
FlightComboAddDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _flightcomboadddetails__WEBPACK_IMPORTED_MODULE_6__["FlightComboAddDetailsPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _flightcomboadddetails__WEBPACK_IMPORTED_MODULE_6__["FlightComboAddDetailsPage"]
                }
            ])
        ],
    })
], FlightComboAddDetailsPageModule);



/***/ }),

/***/ "./src/app/flightcomboadddetails/flightcomboadddetails.scss":
/*!******************************************************************!*\
  !*** ./src/app/flightcomboadddetails/flightcomboadddetails.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.text-sub {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n\n.radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n\n.radio-md .radio-checked {\n  border-color: #26bed6;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n}\n\n.text-title {\n  font-size: 10px;\n  color: #bdbdbd;\n}\n\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.text-name .text-green {\n  color: #26bed6;\n}\n\n.cls-label {\n  color: #828282;\n  font-size: 12px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.text-adult {\n  font-size: 14px;\n  font-weight: bold;\n  width: 300px;\n}\n\n.text-right {\n  text-align: right;\n  color: #26bed6;\n  font-weight: 300;\n  position: absolute;\n  top: 8px;\n  right: 0;\n  z-index: 99;\n}\n\n.div-split {\n  height: 8px;\n  background-color: #f2f2f2;\n  margin: 16px -16px;\n}\n\n.div-img-step {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.div-title {\n  line-height: 22px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.div-sub-title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n}\n\n.div-left {\n  width: 120px;\n  margin-right: 16px;\n  border-bottom: solid 0.2px #cdcdcd;\n  position: relative;\n}\n\n.sub-label {\n  font-size: 10px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.f-12 {\n  font-size: 12px !important;\n}\n\n.label-absolute {\n  position: absolute;\n  top: 16px;\n}\n\n.cls-gender-transition {\n  top: 0px;\n  transition: top 0.1s ease-out;\n}\n\n.div-right {\n  width: 100%;\n  position: relative;\n}\n\n.div-split {\n  height: 8px;\n  background-color: #f2f2f2;\n  margin: 16px -16px;\n}\n\n.div-login {\n  padding: 10px 16px;\n  background: rgba(242, 242, 242, 0.5);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  margin: 0 -16px;\n  margin-top: -16px;\n  margin-bottom: 16px;\n}\n\n.div-login .text-login {\n  color: #26bed6;\n}\n\n.text-gender {\n  letter-spacing: -0.34px;\n  margin-top: 27px;\n  font-weight: 300;\n  color: #222222;\n}\n\n.text-bold {\n  font-weight: 600 !important;\n}\n\n.div-icon-down {\n  position: absolute;\n  right: 0;\n  bottom: 3px;\n}\n\n.cls-input-custom {\n  margin-top: 21px;\n  border-bottom: 0.2px solid #cdcdcd;\n}\n\n.no-border {\n  border-bottom: none !important;\n}\n\n.div-img-step {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n::ng-deep .cls-input-custom .native-input.sc-ion-input-ios {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n}\n\n::ng-deep .text-bold .sc-ion-action-sheet-md {\n  font-weight: 600 !important;\n}\n\n::ng-deep .action-sheets-flightselectgender .action-sheet-title.sc-ion-action-sheet-md {\n  font-weight: bold;\n  color: #000;\n}\n\n::ng-deep .action-sheets-flightselectgender .action-sheet-button-inner.sc-ion-action-sheet-md {\n  border-top: none !important;\n}\n\n::ng-deep .sc-ion-action-sheet-md-h.sc-ion-action-sheet-md-s.md.action-sheets-flightselectgender {\n  position: absolute;\n}\n\n::ng-deep .cls-input-custom .native-input.sc-ion-input-md {\n  padding: 0;\n  line-height: 24px;\n  font-size: 14px;\n  font-weight: 300;\n  color: #222222;\n}\n\n::ng-deep .cls-error .cls-input-custom .native-input.sc-ion-input-md {\n  color: #e52822 !important;\n}\n\n::ng-deep .sc-ion-loading-ios-h {\n  --max-width: 290px !important;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  height: 44px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  border-radius: 4px !important;\n  width: 175px;\n  padding: 0px;\n}\n\n.d-flex-footer {\n  display: flex;\n  width: 100%;\n}\n\n.img {\n  width: 8px;\n  margin-left: 10px;\n}\n\n.img-arrow {\n  position: absolute;\n  top: 27px;\n  margin-left: 5px;\n}\n\n.img-paymentbreakdown {\n  top: -5px;\n}\n\n.mt-top {\n  margin-top: 10px;\n}\n\n.mt-bottom {\n  margin-bottom: 10px;\n}\n\n.text-lotus-point {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #26bed6;\n  margin-top: 8px;\n  margin-bottom: -8px;\n}\n\n.text-lotus-code {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  margin-top: 8px;\n  margin-bottom: -8px;\n}\n\n.img-vector {\n  position: absolute;\n  margin-left: 8px;\n  margin-top: 7px;\n}\n\n.cls-iondatetime {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n  margin-top: 4px;\n  border-bottom: solid 0.2px #cdcdcd;\n  padding-top: 16px;\n  margin-top: -16px;\n}\n\n.cls-error {\n  color: #e52822;\n  font-size: 14px;\n}\n\n.cls-error ion-input {\n  color: #e52822 !important;\n}\n\n.cls-error ion-datetime {\n  color: #e52822 !important;\n}\n\n.cls-error ion-searchbar {\n  color: #e52822 !important;\n}\n\n.cls-error ion-item {\n  --border-color: #e52822 !important;\n}\n\n.cls-error .cls-input-custom {\n  border-bottom: 0.2px solid #e52822;\n}\n\n.cls-error .cls-iondatetime, .cls-error .cls-datetofbirth, .cls-error .border-bottom {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.border-bottom.cls-error {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.div-left.cls-error {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.div-showerror .div-icon-error {\n  display: flex;\n}\n\n.div-showerror .div-icon-error .img-error {\n  margin: 0;\n  padding: 0;\n  width: 21px;\n  height: 34px;\n}\n\n.div-showerror .width-40 {\n  width: 40px;\n}\n\n.div-showerror .div-text-error {\n  padding-top: 2px;\n  width: 317px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.div-showerror .m-left-8 {\n  margin-left: 8px;\n}\n\n.div-showerror .m-left-10 {\n  margin-left: 10px;\n}\n\n.m-left-28 {\n  margin-left: 28px;\n}\n\n.label-name {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.label-input-order {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.p-top-6 {\n  padding-top: 6px;\n}\n\n.text-sub-name {\n  font-size: 12px;\n  text-align: left;\n  color: #828282;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0Y29tYm9hZGRkZXRhaWxzL2ZsaWdodGNvbWJvYWRkZGV0YWlscy5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib2FkZGRldGFpbHMvZmxpZ2h0Y29tYm9hZGRkZXRhaWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBRU0sbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDQ047O0FEQ0U7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VOOztBRENFO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VOOztBREFFO0VBQ0kscUJBQUE7QUNHTjs7QURERTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERFO0VBRUksZUFBQTtFQUNBLGNBQUE7QUNHTjs7QURERTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNJTjs7QURGSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQ0lOOztBREhNO0VBRUUsY0FBQTtBQ0lSOztBRERJO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNHUjs7QURESTtFQUNJLGFBQUE7QUNJUjs7QURGSTtFQUVFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNJTjs7QURGSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNJTjs7QURERTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSU47O0FERE07RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDSVY7O0FERE07RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lWOztBRERNO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNJVjs7QURETTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNJVjs7QURGTTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNLVjs7QURITTtFQUNJLDBCQUFBO0FDTVY7O0FESk07RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNPVjs7QURKTTtFQUNJLFFBQUE7RUFDQSw2QkFBQTtBQ09WOztBRExNO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDUVY7O0FETE07RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1FWOztBRExNO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1FWOztBRExVO0VBQ0ksY0FBQTtBQ09kOztBREhNO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ01WOztBREpNO0VBQ0ksMkJBQUE7QUNPVjs7QURMTTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNRVjs7QUROTTtFQUNJLGdCQUFBO0VBQ0Esa0NBQUE7QUNTVjs7QURQTTtFQUNJLDhCQUFBO0FDVVY7O0FEUk07RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDV1Y7O0FEUlU7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDV2Q7O0FEUlU7RUFDSSwyQkFBQTtBQ1VkOztBRFBVO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDU2Q7O0FETlU7RUFDTSwyQkFBQTtBQ1FoQjs7QUREUTtFQUNJLGtCQUFBO0FDR1o7O0FEQ1U7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ2Q7O0FERVU7RUFDRSx5QkFBQTtBQ0FaOztBREVRO0VBQ0ksNkJBQUE7QUNBWjs7QURHTTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQVY7O0FERVU7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNBZDs7QURFYztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FsQjs7QURHYztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRGxCOztBREtVO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDSGQ7O0FETVU7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0xkOztBRFFNO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNMVjs7QURPTTtFQUVBLFVBQUE7RUFDQSxpQkFBQTtBQ0xOOztBRE9FO0VBRUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNMTjs7QURPRTtFQUNJLFNBQUE7QUNKTjs7QURNRTtFQUNJLGdCQUFBO0FDSE47O0FES0U7RUFDSSxtQkFBQTtBQ0ZOOztBREtFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQVcsaUJBQUE7RUFBa0IsZUFBQTtFQUFnQixlQUFBO0VBQWdCLGtDQUFBO0VBQW1DLGlCQUFBO0VBQWtCLGlCQUFBO0FDTXRIOztBREpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNPSjs7QURESTtFQUNJLHlCQUFBO0FDR1I7O0FEQUk7RUFDSSx5QkFBQTtBQ0VSOztBRENJO0VBQ0kseUJBQUE7QUNDUjs7QURFSTtFQUNJLGtDQUFBO0FDQVI7O0FER0k7RUFDSSxrQ0FBQTtBQ0RSOztBRElJO0VBQ0ksNkNBQUE7QUNGUjs7QURNQTtFQUNJLDZDQUFBO0FDSEo7O0FES0E7RUFDSSw2Q0FBQTtBQ0ZKOztBRE1JO0VBR0ksYUFBQTtBQ0xSOztBRE1RO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0paOztBRFFJO0VBQ0ksV0FBQTtBQ05SOztBRFFJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNOUjs7QURTSTtFQUNJLGdCQUFBO0FDUFI7O0FEVUk7RUFDSSxpQkFBQTtBQ1JSOztBRFlBO0VBQ0ksaUJBQUE7QUNUSjs7QURZQTtFQUNNLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNUTjs7QURXQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1JKOztBRFVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDUEo7O0FEU0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTko7O0FEUUE7RUFDSSxnQkFBQTtBQ0xKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29tYm9hZGRkZXRhaWxzL2ZsaWdodGNvbWJvYWRkZGV0YWlscy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGV4dC1zdWJ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5idXR0b24yXHJcbiAge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gIH0gXHJcbiAgLnJkLWRlcGFydHVyZSAucmFkaW8taWNvbntcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICB9XHJcbiBcclxuICAucmFkaW8tbWQgLnJhZGlvLWlubmVye1xyXG4gICAgICBsZWZ0OiAxcHg7XHJcbiAgICAgIHRvcDogMXB4O1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICB9XHJcbiAgLnJhZGlvLW1kIC5yYWRpby1jaGVja2VkIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xyXG4gIH1cclxuICAuaW9uLWl0ZW1cclxuICB7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDBweDtcclxuICB9XHJcbiAgLnRleHQtdGl0bGVcclxuICB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgfVxyXG4gIC50b3RhbC1wcmljZXtcclxuICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAudGV4dC1uYW1lXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIC50ZXh0LWdyZWVuXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xzLWxhYmVsXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4XHJcbiAgICB9XHJcbiAgICAuZC1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1hZHVsdFxyXG4gICAge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gIH1cclxuXHJcbiAgLmRpdi1zcGxpdHtcclxuICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcclxuICB9XHJcblxyXG4gICAgICAuZGl2LWltZy1zdGVwe1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZGl2LXRpdGxle1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5kaXYtc3ViLXRpdGxle1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5kaXYtbGVmdHtcclxuICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLnN1Yi1sYWJlbHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgfVxyXG4gICAgICAuZi0xMntcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5sYWJlbC1hYnNvbHV0ZXtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY2xzLWdlbmRlci10cmFuc2l0aW9ue1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcclxuICAgICAgfVxyXG4gICAgICAuZGl2LXJpZ2h0e1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRpdi1zcGxpdHtcclxuICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZGl2LWxvZ2lue1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIC0xNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIFxyXG4gIFxyXG4gICAgICAgICAgLnRleHQtbG9naW57XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnRleHQtZ2VuZGVye1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJvbGR7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmRpdi1pY29uLWRvd257XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtaW5wdXQtY3VzdG9te1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkIHJnYigyMDUsIDIwNSwgMjA1KTtcclxuICAgICAgfVxyXG4gICAgICAubm8tYm9yZGVye1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5kaXYtaW1nLXN0ZXB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIDo6bmctZGVlcHtcclxuICAgICAgICAgIC5jbHMtaW5wdXQtY3VzdG9tIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvc3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAudGV4dC1ib2xkIC5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXIgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXIgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VsZWN0Z2VuZGVye1xyXG4gICAgICAgIC8vICAgICAgIG1hcmdpbi1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtaC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLXMubWQuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vc3R5bGUgYW5kcm9pZFxyXG4gICAgICAgICAgLmNscy1pbnB1dC1jdXN0b20gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWR7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY2xzLWVycm9yIC5jbHMtaW5wdXQtY3VzdG9tIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1ke1xyXG4gICAgICAgICAgICBjb2xvcjogICNlNTI4MjIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjLWlvbi1sb2FkaW5nLWlvcy1oe1xyXG4gICAgICAgICAgICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRpdi1mb290ZXJ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgXHJcbiAgICAgICAgICAuZGl2LXRvdGFse1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgXHJcbiAgICAgICAgICAgICAgLnRleHQtc3ViLXRvdGFse1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAgICAgLnRleHQtdG90YWx7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgICAuZGl2LWJ1dHRvbntcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmJ1dHRvblxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGNzkyMjE7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICB9IFxyXG4gICAgICB9XHJcbiAgICAgIC5kLWZsZXgtZm9vdGVye1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWdcclxuICB7XHJcbiAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAuaW1nLWFycm93XHJcbiAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjdweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLmltZy1wYXltZW50YnJlYWtkb3due1xyXG4gICAgICB0b3A6IC01cHg7XHJcbiAgfVxyXG4gIC5tdC10b3B7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5tdC1ib3R0b217XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1sb3R1cy1wb2ludHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuLnRleHQtbG90dXMtY29kZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbn1cclxuLmltZy12ZWN0b3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG4uY2xzLWlvbmRhdGV0aW1le1xyXG4gICAgcGFkZGluZzogMDtsaW5lLWhlaWdodDogMjhweDtmb250LXNpemU6IDE0cHg7bWFyZ2luLXRvcDogNHB4O2JvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7cGFkZGluZy10b3A6IDE2cHg7bWFyZ2luLXRvcDogLTE2cHg7XHJcbn1cclxuLmNscy1lcnJvcntcclxuICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIC8vIGlvbi1sYWJlbCwgLnN1Yi1sYWJlbCwgLnRleHQtZ2VuZGVyIHtcclxuICAgIC8vICAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlvbi1pbnB1dHtcclxuICAgICAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1kYXRldGltZXtcclxuICAgICAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zZWFyY2hiYXJ7XHJcbiAgICAgICAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xzLWlucHV0LWN1c3RvbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbHMtaW9uZGF0ZXRpbWUsIC5jbHMtZGF0ZXRvZmJpcnRoLCAuYm9yZGVyLWJvdHRvbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLmNscy1lcnJvcntcclxuICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcclxufVxyXG4uZGl2LWxlZnQuY2xzLWVycm9ye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGl2LXNob3dlcnJvcntcclxuICAgIC5kaXYtaWNvbi1lcnJvcntcclxuICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmltZy1lcnJvcntcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMjFweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAud2lkdGgtNDB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXRleHQtZXJyb3J7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgICB3aWR0aDogMzE3cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tLWxlZnQtOHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tLWxlZnQtMTB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4ubS1sZWZ0LTI4e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbn0gXHJcblxyXG4ubGFiZWwtbmFtZXtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBjb2xvcjogIzgyODI4MjtcclxufVxyXG4ubGFiZWwtaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICAuaW9uLWNoZWNrYm94e1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW46IC0ycHg7XHJcbiAgfVxyXG4ubGFiZWwtaW5wdXQtb3JkZXJ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuLnAtdG9wLTZ7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG59XHJcbi50ZXh0LXN1Yi1uYW1le1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG59IiwiLnRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1zdWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5yZC1kZXBhcnR1cmUgLnJhZGlvLWljb24ge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4ucmFkaW8tbWQgLnJhZGlvLWlubmVyIHtcbiAgbGVmdDogMXB4O1xuICB0b3A6IDFweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG59XG5cbi5yYWRpby1tZCAucmFkaW8tY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tbWluLWhlaWdodDogMHB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLmNscy1sYWJlbCB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGV4dC1hZHVsdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW46IDE2cHggLTE2cHg7XG59XG5cbi5kaXYtaW1nLXN0ZXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5kaXYtdGl0bGUge1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZGl2LXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5kaXYtbGVmdCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdWItbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZi0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWwtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbn1cblxuLmNscy1nZW5kZXItdHJhbnNpdGlvbiB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcbn1cblxuLmRpdi1yaWdodCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4O1xufVxuXG4uZGl2LWxvZ2luIHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAwIC0xNnB4O1xuICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5kaXYtbG9naW4gLnRleHQtbG9naW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtZ2VuZGVyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWljb24tZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogM3B4O1xufVxuXG4uY2xzLWlucHV0LWN1c3RvbSB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNjZGNkY2Q7XG59XG5cbi5uby1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtaW1nLXN0ZXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbjo6bmctZGVlcCAuY2xzLWlucHV0LWN1c3RvbSAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3Mge1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC50ZXh0LWJvbGQgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VsZWN0Z2VuZGVyIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXIgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtcy5tZC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlbGVjdGdlbmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbjo6bmctZGVlcCAuY2xzLWlucHV0LWN1c3RvbSAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuOjpuZy1kZWVwIC5jbHMtZXJyb3IgLmNscy1pbnB1dC1jdXN0b20gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zYy1pb24tbG9hZGluZy1pb3MtaCB7XG4gIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCB7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXN1Yi10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWZvb3RlciAuZGl2LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE3NXB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5kLWZsZXgtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWcge1xuICB3aWR0aDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmltZy1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyN3B4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW1nLXBheW1lbnRicmVha2Rvd24ge1xuICB0b3A6IC01cHg7XG59XG5cbi5tdC10b3Age1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubXQtYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRleHQtbG90dXMtcG9pbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLnRleHQtbG90dXMtY29kZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufVxuXG4uaW1nLXZlY3RvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uY2xzLWlvbmRhdGV0aW1lIHtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG59XG5cbi5jbHMtZXJyb3Ige1xuICBjb2xvcjogI2U1MjgyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNscy1lcnJvciBpb24taW5wdXQge1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuLmNscy1lcnJvciBpb24tZGF0ZXRpbWUge1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuLmNscy1lcnJvciBpb24tc2VhcmNoYmFyIHtcbiAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbn1cbi5jbHMtZXJyb3IgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuLmNscy1lcnJvciAuY2xzLWlucHV0LWN1c3RvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjI7XG59XG4uY2xzLWVycm9yIC5jbHMtaW9uZGF0ZXRpbWUsIC5jbHMtZXJyb3IgLmNscy1kYXRldG9mYmlydGgsIC5jbHMtZXJyb3IgLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLmNscy1lcnJvciB7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcbn1cblxuLmRpdi1sZWZ0LmNscy1lcnJvciB7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcbn1cblxuLmRpdi1zaG93ZXJyb3IgLmRpdi1pY29uLWVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtc2hvd2Vycm9yIC5kaXYtaWNvbi1lcnJvciAuaW1nLWVycm9yIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuLmRpdi1zaG93ZXJyb3IgLndpZHRoLTQwIHtcbiAgd2lkdGg6IDQwcHg7XG59XG4uZGl2LXNob3dlcnJvciAuZGl2LXRleHQtZXJyb3Ige1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICB3aWR0aDogMzE3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpdi1zaG93ZXJyb3IgLm0tbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5kaXYtc2hvd2Vycm9yIC5tLWxlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm0tbGVmdC0yOCB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuXG4ubGFiZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59XG5cbi5sYWJlbC1pbnB1dC1vcmRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5wLXRvcC02IHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuLnRleHQtc3ViLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightcomboadddetails/flightcomboadddetails.ts":
/*!****************************************************************!*\
  !*** ./src/app/flightcomboadddetails/flightcomboadddetails.ts ***!
  \****************************************************************/
/*! exports provided: FlightComboAddDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComboAddDetailsPage", function() { return FlightComboAddDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _flightpointsave_flightpointsave_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../flightpointsave/flightpointsave.page */ "./src/app/flightpointsave/flightpointsave.page.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../confirmemail/confirmemail.page */ "./src/app/confirmemail/confirmemail.page.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
















let FlightComboAddDetailsPage = class FlightComboAddDetailsPage {
    constructor(platform, toastCtrl, valueGlobal, navCtrl, zone, searchhotel, booking, bookcombo, storage, alertCtrl, value, modalCtrl, gf, loadingCtrl, Roomif, actionsheetCtrl, fb, bizTravelService) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.booking = booking;
        this.bookcombo = bookcombo;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.value = value;
        this.modalCtrl = modalCtrl;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.Roomif = Roomif;
        this.actionsheetCtrl = actionsheetCtrl;
        this.fb = fb;
        this.bizTravelService = bizTravelService;
        this.ischecklugage = false;
        this.showLuggage = false;
        this.arrlugage = [];
        this.arradult = [];
        this.airLineLuggageDepart = [];
        this.airLineLuggageReturn = [];
        this.arrchild = [];
        this.validemail = true;
        this.checkchangeemail = false;
        this.activeStep = 1;
        this.child = 0;
        this.showLotusPoint = false;
        this.departLuggage = [];
        this.returnLuggage = [];
        this.hasinput = false;
        this.ishideNameMail = true;
        this.inputtext = false;
        this.listPaxSuggestByMemberId = [];
        this.listpaxhint = [];
        this.hidepaxhint = false;
        var id = 1;
        let num = 1;
        this.objectFlight = this.gf.getParams('flightcombo');
        this.showLotusPoint = ((this.objectFlight.FlightBooking.departFlight && this.objectFlight.FlightBooking.departFlight.AirlineCode.indexOf('VietnamAirlines') != -1) || (this.objectFlight.FlightBooking.returnFlight && this.objectFlight.FlightBooking.returnFlight.AirlineCode.indexOf('VietnamAirlines') != -1)) ? true : false;
        this.PriceAvgPlusTAStr = this.objectFlight.HotelBooking.TotalPrices;
        this.PriceAvgPlusTA = this.objectFlight.HotelBooking.TotalPrices;
        this.PriceAvgPlusTAOld = this.objectFlight.HotelBooking.TotalPrices;
        this.PriceAvgPlusTAStr = this.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.airLineLuggageDepart = this.objectFlight.airLineLuggageDepart;
        this.airLineLuggageReturn = this.objectFlight.airLineLuggageReturn;
        let number;
        var item;
        for (let i = 0; i < searchhotel.adult; i++) {
            number = i + 1;
            item = { id: id, text: "Người lớn " + number + "", PassengerType: 0, FirstName: "", LastName: "", BirthDay: null, Gender: null, Baggage: 0, ReturnBaggage: 0, hoten: "", genderdisplay: "", airlineMemberCode: "", iddisplay: i + 1 };
            this.arradult.push(item);
            id++;
        }
        this.adult = searchhotel.adult;
        if (searchhotel.arrchild) {
            id = 0;
            this.child = searchhotel.arrchild.length;
            for (let i = 0; i < searchhotel.arrchild.length; i++) {
                if (Number(searchhotel.arrchild[i].numage) >= 12) {
                    number = i + 1;
                    item = { id: id, text: "Người lớn " + number + "", PassengerType: 0, FirstName: "", LastName: "", BirthDay: null, Gender: null, Baggage: 0, ReturnBaggage: 0, hoten: "", genderdisplay: "", isChild: true, iddisplay: i + 1 };
                    this.arrchild.push(item);
                    id++;
                }
                if (searchhotel.arrchild[i].numage == "<1") {
                    item = { id: id, text: "Trẻ em", PassengerType: 2, FirstName: "", LastName: "", BirthDay: null, Gender: null, Baggage: 0, ReturnBaggage: 0, hoten: "", genderdisplay: "", isChild: true, iddisplay: i + 1 };
                    this.arrchild.push(item);
                    id++;
                }
                else if (Number(searchhotel.arrchild[i].numage) < 2) {
                    item = { id: id, text: "Trẻ sơ sinh", PassengerType: 2, FirstName: "", LastName: "", BirthDay: null, Gender: null, Baggage: 0, ReturnBaggage: 0, hoten: "", genderdisplay: "", isChild: true, iddisplay: i + 1, isinfant: true };
                    this.arrchild.push(item);
                    id++;
                }
                else if (Number(searchhotel.arrchild[i].numage) < 12 && Number(searchhotel.arrchild[i].numage) >= 2) {
                    item = { id: id, text: "Trẻ em", PassengerType: 1, FirstName: "", LastName: "", BirthDay: null, Gender: null, Baggage: 0, ReturnBaggage: 0, hoten: "", genderdisplay: "", isChild: true, iddisplay: i + 1 };
                    this.arrchild.push(item);
                    id++;
                }
            }
        }
        this.storage.get('infocus').then(infocus => {
            var item;
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
            else {
                if (this.bookcombo.hoten) {
                    this.hoten = this.bookcombo.hoten;
                }
                if (this.bookcombo.phone) {
                    this.phone = this.bookcombo.phone;
                }
            }
            this.arradult[0].hoten = this.hoten;
            this.storage.get('infoPassengerscombo').then(data => {
                if (data) {
                    this.zone.run(() => {
                        if (data.adult && data.adult.length > 0) {
                            for (let index = 0; index < this.arradult.length; index++) {
                                const element = this.arradult[index];
                                const elementcache = data.adult[index];
                                if (elementcache) {
                                    element.id = elementcache.id;
                                    element.Gender = elementcache.Gender;
                                    element.FirstName = elementcache.FirstName;
                                    element.LastName = elementcache.LastName;
                                    element.hoten = elementcache.hoten;
                                    element.genderdisplay = elementcache.genderdisplay;
                                    element.airlineMemberCode = elementcache.airlineMemberCode;
                                    if (element.Gender) {
                                        this.checkInput(element, 1, true);
                                    }
                                    if (element.hoten) {
                                        this.checkInput(element, 2, true);
                                    }
                                }
                            }
                        }
                        if (data.child && data.child.length > 0) {
                            for (let index = 0; index < this.arrchild.length; index++) {
                                const element = this.arrchild[index];
                                const elementcache = data.child[index];
                                if (elementcache) {
                                    element.id = elementcache.id;
                                    element.Gender = elementcache.Gender;
                                    element.FirstName = elementcache.FirstName;
                                    element.LastName = elementcache.LastName;
                                    element.hoten = elementcache.hoten;
                                    element.BirthDay = elementcache.BirthDay;
                                    element.genderdisplay = elementcache.genderdisplay;
                                    if (element.Gender) {
                                        this.checkInput(element, 1, false);
                                    }
                                    if (element.hoten) {
                                        this.checkInput(element, 2, false);
                                    }
                                    if (element.dateofbirth) {
                                        this.checkInput(element, 3, false);
                                    }
                                }
                            }
                        }
                    });
                }
            });
            for (let i = 0; i < this.arradult.length; i++) {
                if (this.arradult[i].PassengerType != 2) {
                    var item1 = { id: this.arradult[i].id, text: "Ký gửi khách " + num + "", weight: 0, amount: 0, amountstr: 0, weightreturn: 0, amountreturn: 0, amountreturnstr: 0, index: 0, indexreturn: 0 };
                    this.arrlugage.push(item1);
                    num++;
                }
            }
            for (let i = 0; i < this.arrchild.length; i++) {
                if (this.arrchild[i].PassengerType != 2) {
                    var item1 = { id: this.arrchild[i].id, text: "Ký gửi khách " + num + "", weight: 0, amount: 0, amountstr: 0, weightreturn: 0, amountreturn: 0, amountreturnstr: 0, index: 0, indexreturn: 0 };
                    this.arrlugage.push(item1);
                    num++;
                }
            }
        });
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
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
            }
        });
        this.GetUserInfo();
        let se = this;
        se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, { 'fb_content_type': 'hotel', 'fb_content_id': se.bookcombo.HotelCode ? se.bookcombo.HotelCode : se.booking.code, 'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.PriceAvgPlusTAStr), 'fb_currency': 'VND',
            'checkin_date': se.searchhotel.CheckInDate, 'checkout_date ': se.searchhotel.CheckOutDate, 'num_adults': se.searchhotel.adult, 'num_children': (se.searchhotel.child ? se.searchhotel.child : 0), 'price': se.PriceAvgPlusTAStr, 'value': se.gf.convertNumberToDouble(se.PriceAvgPlusTAStr), 'currency': 'VND' }, se.gf.convertNumberToFloat(se.PriceAvgPlusTAStr));
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetListNameHotel?memberid=' + jti, {}, {}, 'flightadddetails', 'GetListName').then((data) => {
                    if (data && data.length > 0) {
                        for (let index = 0; index < data.length; index++) {
                            const element = data[index];
                            let checkAdult = true;
                            if (element.dateOfBirth) {
                                checkAdult = moment__WEBPACK_IMPORTED_MODULE_9__(this.cin).diff(element.dateOfBirth, 'months') > 144;
                            }
                            element.isChild = !checkAdult;
                        }
                        this.listPaxSuggestByMemberId = [...data];
                    }
                });
            }
        });
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.ischeck = false;
                                var corpInfomations = data.corpInfomations[0];
                                if (corpInfomations) {
                                    se.companyname = corpInfomations.legalName;
                                    se.address = corpInfomations.address;
                                    se.tax = corpInfomations.taxCode;
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
                                    se.ischeck = true;
                                }
                                else {
                                    se.ischeck = false;
                                }
                            });
                        }
                    }
                });
            }
        });
    }
    ngOnInit() {
    }
    goback() {
        if (this.activeStep == 1) {
            this.storage.set('infoPassengerscombo', { adult: this.arradult, child: this.arrchild });
            this.bookcombo.hoten = this.hoten;
            this.bookcombo.phone = this.phone;
            this.navCtrl.back();
        }
        else {
            this.activeStep = 1;
        }
    }
    buyLuggage() {
        this.zone.run(() => {
            this.showLuggage = !this.showLuggage;
            if (this.showLuggage) {
                this.objectFlight.HotelBooking.TotalPrices = this.PriceAvgPlusTA;
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTA.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
            else {
                this.objectFlight.HotelBooking.TotalPrices = this.PriceAvgPlusTAOld;
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTAOld.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
        });
    }
    minusluggedepart(weight, index) {
        this.zone.run(() => {
            if (weight != 0) {
                var priceold = this.arrlugage[index].amount;
                if (this.arrlugage[index].index != 0) {
                    this.arrlugage[index].weight = this.airLineLuggageDepart[this.arrlugage[index].index - 1].Weight;
                    this.arrlugage[index].amount = this.airLineLuggageDepart[this.arrlugage[index].index - 1].Amount;
                    this.arrlugage[index].key = this.airLineLuggageDepart[this.arrlugage[index].index - 1].purchaseKey;
                    this.arrlugage[index].amountstr = this.airLineLuggageDepart[this.arrlugage[index].index - 1].Amount.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    this.arrlugage[index].index = this.arrlugage[index].index - 1;
                }
                else {
                    this.arrlugage[index].weight = 0;
                    this.arrlugage[index].amount = 0;
                    this.arrlugage[index].amountstr = "0";
                    this.arrlugage[index].key = "";
                }
                this.PriceAvgPlusTA = Number(this.PriceAvgPlusTA) + Number(this.arrlugage[index].amount) - priceold;
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTA.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
        });
    }
    addluggedepart(weight, index) {
        this.zone.run(() => {
            var priceold = this.arrlugage[index].amount;
            if (weight == 0) {
                this.arrlugage[index].weight = this.airLineLuggageDepart[0].Weight;
                this.arrlugage[index].amount = this.airLineLuggageDepart[0].Amount;
                this.arrlugage[index].key = this.airLineLuggageDepart[0].purchaseKey;
                this.arrlugage[index].amountstr = this.airLineLuggageDepart[0].Amount.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                this.PriceAvgPlusTA = Number(this.PriceAvgPlusTA) + Number(this.arrlugage[index].amount) - priceold;
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTA.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
            else {
                if (this.arrlugage[index].index < this.airLineLuggageDepart.length - 1) {
                    this.arrlugage[index].weight = this.airLineLuggageDepart[this.arrlugage[index].index + 1].Weight;
                    this.arrlugage[index].amount = this.airLineLuggageDepart[this.arrlugage[index].index + 1].Amount;
                    this.arrlugage[index].key = this.airLineLuggageDepart[this.arrlugage[index].index + 1].purchaseKey;
                    this.arrlugage[index].amountstr = this.airLineLuggageDepart[this.arrlugage[index].index + 1].Amount.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    this.arrlugage[index].index = this.arrlugage[index].index + 1;
                    this.PriceAvgPlusTA = Number(this.PriceAvgPlusTA) + Number(this.arrlugage[index].amount) - priceold;
                    this.PriceAvgPlusTAStr = this.PriceAvgPlusTA.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                }
            }
        });
    }
    minusluggereturn(weight, index) {
        this.zone.run(() => {
            if (weight != 0) {
                var priceold = this.arrlugage[index].amountreturn;
                if (this.arrlugage[index].indexreturn != 0) {
                    this.arrlugage[index].weightreturn = this.airLineLuggageReturn[this.arrlugage[index].indexreturn - 1].Weight;
                    this.arrlugage[index].amountreturn = this.airLineLuggageReturn[this.arrlugage[index].indexreturn - 1].Amount;
                    this.arrlugage[index].keyreturn = this.airLineLuggageReturn[this.arrlugage[index].indexreturn - 1].purchaseKey;
                    this.arrlugage[index].amountreturnstr = this.airLineLuggageReturn[this.arrlugage[index].indexreturn - 1].Amount.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    this.arrlugage[index].indexreturn = this.arrlugage[index].indexreturn - 1;
                }
                else {
                    this.arrlugage[index].weightreturn = 0;
                    this.arrlugage[index].amountreturn = 0;
                    this.arrlugage[index].amountreturnstr = "0";
                    this.arrlugage[index].keyreturn = "";
                }
                this.PriceAvgPlusTA = Number(this.PriceAvgPlusTA) + Number(this.arrlugage[index].amountreturn) - priceold;
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTA.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
        });
    }
    addluggereturn(weight, index) {
        this.zone.run(() => {
            var priceold = this.arrlugage[index].amountreturn;
            if (weight == 0) {
                this.arrlugage[index].weightreturn = this.airLineLuggageReturn[0].Weight;
                this.arrlugage[index].amountreturn = this.airLineLuggageReturn[0].Amount;
                this.arrlugage[index].keyreturn = this.airLineLuggageReturn[0].purchaseKey;
                this.arrlugage[index].amountreturnstr = this.airLineLuggageReturn[0].Amount.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                this.PriceAvgPlusTA = Number(this.PriceAvgPlusTA) + Number(this.arrlugage[index].amountreturn) - priceold;
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTA.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
            else {
                if (this.arrlugage[index].indexreturn < this.airLineLuggageReturn.length - 1) {
                    this.arrlugage[index].weightreturn = this.airLineLuggageReturn[this.arrlugage[index].indexreturn + 1].Weight;
                    this.arrlugage[index].amountreturn = this.airLineLuggageReturn[this.arrlugage[index].indexreturn + 1].Amount;
                    this.arrlugage[index].keyreturn = this.airLineLuggageReturn[this.arrlugage[index].indexreturn + 1].purchaseKey;
                    this.arrlugage[index].amountreturnstr = this.airLineLuggageReturn[this.arrlugage[index].indexreturn + 1].Amount.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    this.arrlugage[index].indexreturn = this.arrlugage[index].indexreturn + 1;
                    this.PriceAvgPlusTA = Number(this.PriceAvgPlusTA) + Number(this.arrlugage[index].amountreturn) - priceold;
                    this.PriceAvgPlusTAStr = this.PriceAvgPlusTA.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                }
            }
        });
    }
    next() {
        this.hasinput = false;
        if (this.activeStep == 1) {
            var co = 0;
            for (let i = 0; i < this.arradult.length; i++) {
                this.arradult[i].errorName = false;
                this.arradult[i].errorGender = false;
                this.arradult[i].errorBirthday = false;
                this.arradult[i].errorInfo = false;
                this.arradult[i].errorTextName = '';
                this.arradult[i].errorTextGender = '';
                this.arradult[i].errorTextBirthday = '';
                this.arradult[i].textErrorInfo = '';
                if (!this.arradult[i].Gender && !this.arradult[i].hoten && !this.arradult[i].BirthDay) {
                    this.arradult[i].errorInfo = true;
                    this.arradult[i].textErrorInfo = "Vui lòng nhập thông tin Người lớn " + (i + 1);
                    co = 5;
                    break;
                }
                if (!this.arradult[i].Gender) {
                    co = 3;
                    this.arradult[i].errorGender = true;
                    this.arradult[i].errorTextGender = 'Vui lòng nhập giới tính Người lớn ' + (i + 1);
                    break;
                }
                if (!this.arradult[i].hoten) {
                    co = 1;
                    this.arradult[i].errorName = true;
                    this.arradult[i].errorTextName = 'Vui lòng nhập tên Người lớn ' + (i + 1);
                    break;
                }
                var checktext = this.hasWhiteSpace(this.arradult[i].hoten.trimEnd().trimStart());
                if (!checktext || !this.validateNameNotContainNumber(this.arradult[i].hoten) || !this.validateNameNotContainExceptionChar(this.arradult[i].hoten)) {
                    co = 1;
                    this.arradult[i].errorName = true;
                    this.arradult[i].errorTextName = "Họ và tên Người lớn " + (i + 1) + " không hợp lệ. Vui lòng kiểm tra lại!";
                    break;
                }
                if (this.arradult[i].PassengerType != 0) {
                    if (!this.arradult[i].BirthDay) {
                        co = 2;
                        this.arradult[i].errorBirthday = true;
                        this.arradult[i].errorTextBirthday = 'Vui lòng nhập ngày sinh Người lớn ' + (i + 1);
                        break;
                    }
                }
            }
            for (let i = 0; i < this.arrchild.length; i++) {
                this.arrchild[i].errorName = false;
                this.arrchild[i].errorGender = false;
                this.arrchild[i].errorBirthday = false;
                this.arrchild[i].errorBirthday1 = false;
                this.arrchild[i].errorInfo = false;
                this.arrchild[i].errorTextName = '';
                this.arrchild[i].errorTextGender = '';
                this.arrchild[i].errorTextBirthday = '';
                this.arrchild[i].errorTextInfo = '';
                if (!this.arrchild[i].Gender && !this.arrchild[i].hoten && !this.arrchild[i].BirthDay) {
                    this.arrchild[i].errorInfo = true;
                    this.arrchild[i].textErrorInfo = "Vui lòng nhập thông tin " + (this.arrchild[i].isChild ? (this.arrchild[i].PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + " " + (i + 1);
                    co = 5;
                    break;
                }
                if (!this.arrchild[i].Gender) {
                    co = 3;
                    this.arrchild[i].errorGender = true;
                    this.arrchild[i].errorTextGender = 'Vui lòng nhập giới tính ' + (this.arrchild[i].isChild ? (this.arrchild[i].PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + ' ' + (i + 1);
                    break;
                }
                if (!this.arrchild[i].hoten) {
                    co = 1;
                    this.arrchild[i].errorName = true;
                    this.arrchild[i].errorTextName = 'Vui lòng nhập tên ' + (this.arrchild[i].isChild ? (this.arrchild[i].PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + '' + (i + 1);
                    break;
                }
                var checktext = this.hasWhiteSpace(this.arrchild[i].hoten.trimEnd().trimStart());
                if (!checktext || !this.validateNameNotContainNumber(this.arrchild[i].hoten) || !this.validateNameNotContainExceptionChar(this.arrchild[i].hoten)) {
                    co = 1;
                    this.arrchild[i].errorName = true;
                    this.arrchild[i].errorTextName = "Họ và tên Trẻ em " + (i + 1) + " không hợp lệ. Vui lòng kiểm tra lại!";
                    break;
                }
                if (this.arrchild[i].PassengerType != 0) {
                    if (!this.arrchild[i].BirthDay) {
                        co = 2;
                        this.arrchild[i].errorBirthday = true;
                        this.arrchild[i].errorTextBirthday = 'Vui lòng nhập ngày sinh ' + (this.arrchild[i].isChild ? (this.arrchild[i].PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + '' + (i + 1);
                        break;
                    }
                }
                let departdate = moment__WEBPACK_IMPORTED_MODULE_9__(this.searchhotel.CheckInDate).format('YYYY-MM-DD');
                let departdatestring = moment__WEBPACK_IMPORTED_MODULE_9__(this.searchhotel.CheckInDate).format('DD-MM-YYYY');
                if (moment__WEBPACK_IMPORTED_MODULE_9__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(this.arrchild[i].BirthDay), 'days') < 14) {
                    if (this.arrchild[i].PassengerType == 1) {
                        this.arrchild[i].errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ em lớn hơn hoặc bằng 2 tuổi so với ngày khởi hành " + departdatestring;
                        this.arrchild[i].errorBirthday = true;
                        this.arrchild[i].errorBirthday1 = true;
                        co = 4;
                        break;
                    }
                    if (this.arrchild[i].PassengerType == 2) {
                        this.arrchild[i].errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ sơ sinh lớn hơn 14 ngày tuổi so với ngày khởi hành " + departdatestring;
                        this.arrchild[i].errorBirthday = true;
                        this.arrchild[i].errorBirthday1 = true;
                        co = 4;
                        break;
                    }
                }
                if (this.arrchild[i].PassengerType == 1) {
                    if (moment__WEBPACK_IMPORTED_MODULE_9__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(this.arrchild[i].BirthDay), 'months') >= 144) {
                        this.arrchild[i].errorBirthday = true;
                        this.arrchild[i].errorBirthday1 = true;
                        this.arrchild[i].errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ em không được lớn hơn 12 tuổi so với ngày khởi hành " + departdatestring;
                        co = 2;
                        break;
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_9__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(this.arrchild[i].BirthDay), 'months') < 24) {
                        this.arrchild[i].errorBirthday = true;
                        this.arrchild[i].errorBirthday1 = true;
                        this.arrchild[i].errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ em không được nhỏ hơn 2 tuổi so với ngày khởi hành " + departdatestring;
                        co = 2;
                        break;
                    }
                }
                if (this.arrchild[i].PassengerType == 2) {
                    if (moment__WEBPACK_IMPORTED_MODULE_9__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(this.arrchild[i].BirthDay), 'months') >= 24) {
                        this.arrchild[i].errorBirthday = true;
                        this.arrchild[i].errorBirthday1 = true;
                        this.arrchild[i].errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ sơ sinh không được lớn hơn 2 tuổi so với ngày khởi hành " + departdatestring;
                        co = 2;
                        break;
                    }
                }
            }
            if (co == 0) {
                var se = this;
                var se = this;
                let itempax = [...se.arradult];
                if (se.arrchild && se.arrchild.length > 0) {
                    itempax = [...itempax, ...se.arrchild];
                }
                se.checkDuplicateItem(itempax).then((itemcheck) => {
                    if (itemcheck && itemcheck.length > 0) {
                        se.searchhotel.duplicateItem = itemcheck;
                        se.showAlertDuplicateName();
                        return;
                    }
                    else {
                        se.checkValidName(itempax).then((itemcheckname) => {
                            if (itemcheckname) {
                                se.showAlertInvalidName(itemcheckname);
                                return;
                            }
                            else {
                                se.checkValidFirstNameAndSubName(itempax).then((itemname) => {
                                    if (itemname) {
                                        se.showAlertInvalidFirtNameAndLastName(itemname);
                                        return;
                                    }
                                    else {
                                        se.checkValidDuplicateFirstNameAndSubName(itempax).then((itemdup) => {
                                            if (itemdup) {
                                                se.showAlertDuplicateFirtNameAndLastName(itemdup);
                                                return;
                                            }
                                            else {
                                                se.checkInValidSubNameBeforeNextStep(itempax).then((iteminvalid) => {
                                                    if (!iteminvalid) {
                                                        se.activeStep = 2;
                                                    }
                                                    else {
                                                        se.showAlertInvalidSubName(iteminvalid);
                                                        return;
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }
        else {
            this.gonextstep();
        }
    }
    gonextstep() {
        this.emailinvalid = false;
        this.hoteninvalid = false;
        this.sodienthoaiinvalid = false;
        this.hasinput = true;
        if (this.hoten) {
            if (!this.validateNameNotContainNumber(this.hoten)) {
                this.hoteninvalid = true;
                return;
            }
            var checktext = this.hasWhiteSpace(this.hoten);
            if (checktext) {
                if (this.phone) {
                    if (this.gf.checkPhoneInValidFormat(this.phone)) {
                        this.sodienthoaiinvalid = true;
                        return;
                    }
                }
                else {
                    return;
                }
            }
            else {
                this.hoteninvalid = true;
                return;
            }
        }
        else {
            this.hoteninvalid = true;
            return;
        }
        if (this._email && (!this.validateEmail(this._email) || !this.gf.checkUnicodeCharactor(this._email) || this.gf.checkEmailInvalidFormat(this._email))) {
            this.emailinvalid = true;
            return;
        }
        let checkappleemail = (this._email.includes("appleid") || this._email.includes("vivumember.info"));
        if (checkappleemail) {
            this.checkchangeemail = true;
            this.showConfirmEmail();
            return;
        }
        if (this.ischeck) {
            if (this.companyname && this.address && this.tax) {
                this.Roomif.companyname = this.companyname;
                this.Roomif.address = this.address;
                this.Roomif.tax = this.tax;
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
                this.Roomif.ischeck = this.ischeck;
                this.objectFlight.HotelBooking.CompName = this.companyname;
                this.objectFlight.HotelBooking.CompAddress = this.address;
                this.objectFlight.HotelBooking.CompTaxCode = this.tax;
                this.objectFlight.HotelBooking.CompanyContactEmail = this.Roomif.addressorder;
                this.objectFlight.HotelBooking.CompanyContactName = this.Roomif.nameOrder;
                this.objectFlight.HotelBooking.IsInvoice = 1;
            }
            else {
                this.presentToastOrder();
                return;
            }
        }
        this.departLuggage = this.objectFlight.airLineLuggageDepart;
        this.returnLuggage = this.objectFlight.airLineLuggageReturn;
        let departluggage = [], returnluggage = [];
        if (this.departLuggage && this.departLuggage.length > 0) {
            const dl = this.departLuggage.filter((item) => { return item.quantity > 0; });
            if (dl && dl.length > 0) {
                dl.forEach(element => {
                    element.quantitycheck = element.quantity;
                    departluggage.push(element);
                });
            }
        }
        if (this.returnLuggage && this.returnLuggage.length > 0) {
            const dl = this.returnLuggage.filter((item) => { return item.quantity > 0; });
            if (dl && dl.length > 0) {
                dl.forEach(element => {
                    element.quantitycheck = element.quantity;
                    returnluggage.push(element);
                });
            }
        }
        for (let i = 0; i < this.arradult.length; i++) {
            if (departluggage && departluggage.length > 0) {
                if (departluggage && departluggage.length == 1) {
                    if (departluggage[0].quantitycheck > 0) {
                        this.arradult[i].Baggage = departluggage[0].Weight;
                        if (departluggage[0].AirLineCode == "VN") {
                            this.arradult[i].AncillaryJson = JSON.stringify([{ Name: "Depart baggage", Type: "Baggage", Key: departluggage[0].purchaseKey, Value: `${departluggage[0].Weight}`, price: departluggage[0].Amount, title: `${departluggage[0].Weight}`, netPrice: departluggage[0].NetPrice }]);
                        }
                        else {
                            this.arradult[i].AncillaryJson = JSON.stringify([{ Name: "Depart baggage", Type: "Baggage", Key: departluggage[0].purchaseKey, Value: `${departluggage[0].Weight}`, price: departluggage[0].Amount }]);
                        }
                        departluggage[0].quantitycheck--;
                    }
                }
                else if (departluggage && departluggage.length > 1) {
                    var dl1;
                    if (i > 0 && departluggage[i - 1] && departluggage[i - 1].quantitycheck > 0) {
                        dl1 = departluggage[i - 1];
                    }
                    else {
                        dl1 = departluggage[i];
                    }
                    if (dl1) {
                        this.arradult[i].Baggage = dl1.Weight;
                        if (dl1.AirLineCode == "VN") {
                            this.arradult[i].AncillaryJson = JSON.stringify([{ Name: "Depart baggage", Type: "Baggage", Key: dl1.purchaseKey, Value: `${dl1.Weight}`, price: dl1.Amount, title: `${dl1.Weight}`, netPrice: dl1.NetPrice }]);
                        }
                        else {
                            this.arradult[i].AncillaryJson = JSON.stringify([{ Name: "Depart baggage", Type: "Baggage", Key: dl1.purchaseKey, Value: `${dl1.Weight}`, price: dl1.Amount }]);
                        }
                        dl1.quantitycheck--;
                    }
                }
            }
            if (returnluggage && returnluggage.length > 0) {
                if (returnluggage && returnluggage.length == 1) {
                    if (returnluggage[0].quantitycheck > 0) {
                        this.arradult[i].ReturnBaggage = returnluggage[0].Weight;
                        if (returnluggage[0].AirLineCode == "VN") {
                            this.arradult[i].AncillaryReturnJson = JSON.stringify([{ Name: "Return baggage", Type: "Baggage", Key: returnluggage[0].purchaseKey, Value: `${returnluggage[0].Weight}`, price: returnluggage[0].Amount, title: `${returnluggage[0].Weight}`, netPrice: returnluggage[0].NetPrice }]);
                        }
                        else {
                            this.arradult[i].AncillaryReturnJson = JSON.stringify([{ Name: "Return baggage", Type: "Baggage", Key: returnluggage[0].purchaseKey, Value: `${returnluggage[0].Weight}`, price: returnluggage[0].Amount }]);
                        }
                        returnluggage[0].quantitycheck--;
                    }
                }
                else if (returnluggage && returnluggage.length > 1) {
                    var rl1;
                    if (i > 0 && returnluggage[i - 1] && returnluggage[i - 1].quantitycheck > 0) {
                        rl1 = returnluggage[i - 1];
                    }
                    else {
                        rl1 = returnluggage[i];
                    }
                    if (rl1) {
                        this.arradult[i].ReturnBaggage = rl1.Weight;
                        if (rl1.AirLineCode == "VN") {
                            this.arradult[i].AncillaryReturnJson = JSON.stringify([{ Name: "Return baggage", Type: "Baggage", Key: rl1.purchaseKey, Value: `${rl1.Weight}`, price: rl1.Amount, title: `${rl1.Weight}`, netPrice: rl1.NetPrice }]);
                        }
                        else {
                            this.arradult[i].AncillaryReturnJson = JSON.stringify([{ Name: "Return baggage", Type: "Baggage", Key: rl1.purchaseKey, Value: `${rl1.Weight}`, price: rl1.Amount }]);
                        }
                        rl1.quantitycheck--;
                    }
                }
            }
        }
        if (this.arrchild.length > 0) {
            for (let i = 0; i < this.arrchild.length; i++) {
                departluggage = departluggage.filter((item) => { return item.quantitycheck > 0; });
                returnluggage = returnluggage.filter((item) => { return item.quantitycheck > 0; });
                if (departluggage && departluggage.length > 0) {
                    if (this.arrchild[i].PassengerType != 2) {
                        if (departluggage && departluggage.length == 1) {
                            if (departluggage[0].quantitycheck > 0) {
                                this.arrchild[i].Baggage = departluggage[0].Weight;
                                if (departluggage[0].AirLineCode == "VN") {
                                    this.arrchild[i].AncillaryJson = JSON.stringify([{ Name: "Depart baggage", Type: "Baggage", Key: departluggage[0].purchaseKey, Value: `${departluggage[0].Weight}`, price: departluggage[0].Amount, title: `${departluggage[0].Weight}`, netPrice: departluggage[0].NetPrice }]);
                                }
                                else {
                                    this.arrchild[i].AncillaryJson = JSON.stringify([{ Name: "Depart baggage", Type: "Baggage", Key: departluggage[0].purchaseKey, Value: `${departluggage[0].Weight}`, price: departluggage[0].Amount }]);
                                }
                                departluggage[0].quantitycheck--;
                            }
                        }
                        else if (departluggage && departluggage.length > 1) {
                            var dl1;
                            if (i > 0 && departluggage[i - 1] && departluggage[i - 1].quantitycheck > 0) {
                                dl1 = departluggage[i - 1];
                            }
                            else {
                                dl1 = departluggage[i];
                            }
                            if (dl1) {
                                this.arrchild[i].Baggage = dl1.Weight;
                                if (dl1.AirLineCode == "VN") {
                                    this.arrchild[i].AncillaryJson = JSON.stringify([{ Name: "Depart baggage", Type: "Baggage", Key: dl1.purchaseKey, Value: `${dl1.Weight}`, price: dl1.Amount, title: `${dl1.Weight}`, netPrice: dl1.NetPrice }]);
                                }
                                else {
                                    this.arrchild[i].AncillaryJson = JSON.stringify([{ Name: "Depart baggage", Type: "Baggage", Key: dl1.purchaseKey, Value: `${dl1.Weight}`, price: dl1.Amount }]);
                                }
                                dl1.quantitycheck--;
                            }
                        }
                    }
                }
                if (returnluggage && returnluggage.length > 0) {
                    if (this.arrchild[i].PassengerType != 2) {
                        if (returnluggage && returnluggage.length == 1) {
                            if (returnluggage[0].quantitycheck > 0) {
                                this.arrchild[i].ReturnBaggage = returnluggage[0].Weight;
                                if (returnluggage[0].AirLineCode == "VN") {
                                    this.arrchild[i].AncillaryReturnJson = JSON.stringify([{ Name: "Return baggage", Type: "Baggage", Key: returnluggage[0].purchaseKey, Value: `${returnluggage[0].Weight}`, price: returnluggage[0].Amount, title: `${returnluggage[0].Weight}`, netPrice: returnluggage[0].NetPrice }]);
                                }
                                else {
                                    this.arrchild[i].AncillaryReturnJson = JSON.stringify([{ Name: "Return baggage", Type: "Baggage", Key: returnluggage[0].purchaseKey, Value: `${returnluggage[0].Weight}`, price: returnluggage[0].Amount }]);
                                }
                                returnluggage[0].quantitycheck--;
                            }
                        }
                        else if (returnluggage && returnluggage.length > 1) {
                            var rl1;
                            if (i > 0 && returnluggage[i - 1] && returnluggage[i - 1].quantitycheck > 0) {
                                rl1 = returnluggage[i - 1];
                            }
                            else {
                                rl1 = returnluggage[i];
                            }
                            if (rl1) {
                                this.arrchild[i].ReturnBaggage = rl1.Weight;
                                if (rl1.AirLineCode == "VN") {
                                    this.arrchild[i].AncillaryReturnJson = JSON.stringify([{ Name: "Return baggage", Type: "Baggage", Key: rl1.purchaseKey, Value: `${rl1.Weight}`, price: rl1.Amount, title: `${rl1.Weight}`, netPrice: rl1.NetPrice }]);
                                }
                                else {
                                    this.arrchild[i].AncillaryReturnJson = JSON.stringify([{ Name: "Return baggage", Type: "Baggage", Key: rl1.purchaseKey, Value: `${rl1.Weight}`, price: rl1.Amount }]);
                                }
                                rl1.quantitycheck--;
                            }
                        }
                    }
                }
            }
        }
        this.objectFlight.HotelBooking.TotalPrices = this.PriceAvgPlusTAOld;
        this.bookcombo.totalprice = this.PriceAvgPlusTAOld;
        if (this.bookcombo.ischeckbtnpromo) {
            this.objectFlight.HotelBooking.TotalPrices = Number(this.objectFlight.HotelBooking.TotalPrices) + Number(this.bookcombo.discountpromo);
        }
        this.objectFlight.HotelBooking.TotalPrices = Number(this.objectFlight.HotelBooking.TotalPrices).toFixed(0);
        var arrPassengers = [];
        for (let i = 0; i < this.arradult.length; i++) {
            var item;
            var texthoten = this.arradult[i].hoten.split(' ');
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
                item = { PassengerType: this.arradult[i].PassengerType, FirstName: name, LastName: texthoten[0], BirthDay: this.arradult[i].BirthDay, Gender: this.arradult[i].Gender, Baggage: this.arradult[i].Baggage, ReturnBaggage: this.arradult[i].ReturnBaggage, AncillaryJson: this.arradult[i].AncillaryJson, AncillaryReturnJson: this.arradult[i].AncillaryReturnJson, AirlineMemberCode: (this.showLotusPoint && this.arradult[i].airlineMemberCode) ? this.arradult[i].airlineMemberCode : "" };
            }
            else if (texthoten.length > 1) {
                item = { PassengerType: this.arradult[i].PassengerType, FirstName: texthoten[1], LastName: texthoten[0], BirthDay: this.arradult[i].BirthDay, Gender: this.arradult[i].Gender, Baggage: this.arradult[i].Baggage, ReturnBaggage: this.arradult[i].ReturnBaggage, AncillaryJson: this.arradult[i].AncillaryJson, AncillaryReturnJson: this.arradult[i].AncillaryReturnJson, AirlineMemberCode: (this.showLotusPoint && this.arradult[i].airlineMemberCode) ? this.arradult[i].airlineMemberCode : "" };
            }
            else if (texthoten.length == 1) {
                item = { PassengerType: this.arradult[i].PassengerType, FirstName: "", LastName: texthoten[0], BirthDay: this.arradult[i].BirthDay, Gender: this.arradult[i].Gender, Baggage: this.arradult[i].Baggage, ReturnBaggage: this.arradult[i].ReturnBaggage, AncillaryJson: this.arradult[i].AncillaryJson, AncillaryReturnJson: this.arradult[i].AncillaryReturnJson, AirlineMemberCode: (this.showLotusPoint && this.arradult[i].airlineMemberCode) ? this.arradult[i].airlineMemberCode : "" };
            }
            arrPassengers.push(item);
        }
        for (let i = 0; i < this.arrchild.length; i++) {
            var item;
            var texthoten = this.arrchild[i].hoten.split(' ');
            if (this.arrchild[i].BirthDay) {
                this.arrchild[i].BirthDay = moment__WEBPACK_IMPORTED_MODULE_9__(this.arrchild[i].BirthDay).format('YYYY-MM-DD');
            }
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
                item = { PassengerType: this.arrchild[i].PassengerType, FirstName: name, LastName: texthoten[0], BirthDay: this.arrchild[i].BirthDay, Gender: this.arrchild[i].Gender, Baggage: this.arrchild[i].Baggage, ReturnBaggage: this.arrchild[i].ReturnBaggage, AncillaryJson: this.arrchild[i].AncillaryJson, AncillaryReturnJson: this.arrchild[i].AncillaryReturnJson };
            }
            else if (texthoten.length > 1) {
                item = { PassengerType: this.arrchild[i].PassengerType, FirstName: texthoten[1], LastName: texthoten[0], BirthDay: this.arrchild[i].BirthDay, Gender: this.arrchild[i].Gender, Baggage: this.arrchild[i].Baggage, ReturnBaggage: this.arrchild[i].ReturnBaggage, AncillaryJson: this.arrchild[i].AncillaryJson, AncillaryReturnJson: this.arrchild[i].AncillaryReturnJson };
            }
            else if (texthoten.length == 1) {
                item = { PassengerType: this.arrchild[i].PassengerType, FirstName: "", LastName: texthoten[0], BirthDay: this.arrchild[i].BirthDay, Gender: this.arrchild[i].Gender, Baggage: this.arrchild[i].Baggage, ReturnBaggage: this.arrchild[i].ReturnBaggage, AncillaryJson: this.arrchild[i].AncillaryJson, AncillaryReturnJson: this.arrchild[i].AncillaryReturnJson };
            }
            arrPassengers.push(item);
        }
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
            this.ho = texthoten[0];
            this.ten = name;
        }
        else if (texthoten.length > 1) {
            this.ho = texthoten[0];
            this.ten = texthoten[1];
        }
        else if (texthoten.length == 1) {
            this.ho = texthoten[0];
            this.ten = "";
        }
        var Contact = { FirstName: this.ten, LastName: this.ho, Email: this._email, MobileNumber: this.phone };
        var Passengers = { Passengers: arrPassengers, Contact: Contact, UserToken: '', NoteCorp: '' };
        this.objectFlight.FlightBooking.passengerModel = Passengers;
        this.objectFlight.HotelBooking.CName = this.hoten ? this.hoten.trim() : "";
        this.objectFlight.HotelBooking.CEmail = this._email;
        this.objectFlight.HotelBooking.CPhone = this.phone;
        this.objectFlight.HotelBooking.LeadingName = this.hoten ? this.hoten.trim() : "";
        this.objectFlight.HotelBooking.LeadingEmail = this._email;
        this.objectFlight.HotelBooking.LeadingPhone = this.phone;
        this.objectFlight.HotelBooking.CTitle = "Ms";
        this.objectFlight.HotelBooking.LeadingNationality = 0;
        var search = { FlightBooking: this.objectFlight.FlightBooking, HotelBooking: this.objectFlight.HotelBooking, ResId: this.objectFlight.ResId };
        this.objectFlight.FlightBooking.adults = this.arradult;
        this.objectFlight.FlightBooking.childs = this.arrchild;
        this.gf.setParams(this.objectFlight, 'flightcombo');
        this.storage.set('infoPassengerscombo', { adult: this.arradult, child: this.arrchild });
        this.bookcombo.hoten = this.hoten;
        this.bookcombo.phone = this.phone;
        this.presentLoading();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboBooking',
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": jquery__WEBPACK_IMPORTED_MODULE_10__["param"](search)
        };
        var se = this;
        jquery__WEBPACK_IMPORTED_MODULE_10__["ajax"](settings).done(function (response) {
            if (response.Error) {
                if (se.loader) {
                    se.loader.dismiss();
                }
                var error = {
                    page: "flightcomboadddetails",
                    func: "CreateComboBooking",
                    message: response.Error,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(settings)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                alert("Rất tiếc giá vé máy bay đã thay đổi, vui lòng chọn lại");
                se.navCtrl.back();
            }
            else {
                if (response.flyBookingCode) {
                    se.Roomif.ischeckpaymentCard = true;
                    se.bookcombo.bookingcode = response.Code;
                    se.bookcombo.FlightCode = response.flyBookingCode;
                    if (se.objectFlight.HotelBooking.SupplierName != "VINPEARL" && se.objectFlight.HotelBooking.SupplierName != "SERI") {
                        if (se.objectFlight.HotelBooking.SupplierName == "B2B") {
                            se.Roomif.payment = 'RQ';
                            se.Roomif.ischeckpaymentCard = true;
                            se.Roomif.ischeckpaymentLater = false;
                            se.gf.holdflight(se.bookcombo.FlightCode, se.bookcombo.iddepart, se.bookcombo.idreturn).then(datafly => {
                                se.gf.createTransactionCombo(se.bookcombo.bookingcode, se.bookcombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                                    if (se.loader) {
                                        se.loader.dismiss();
                                    }
                                    if (data) {
                                        if (se.bizTravelService.isCompany) {
                                            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=2&source=app&amount=' + se.bookcombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookcombo.bookingcode + '&buyerPhone=' + se.phone + '&memberId=' + se.jti;
                                            se.gf.CreateUrl(url);
                                        }
                                        se.gf.createFlightTransactionCombo(se.bookcombo.FlightCode);
                                        se.navCtrl.navigateForward('/flightcombopaymentdone/RQ');
                                    }
                                    else {
                                        alert('Gặp sự cố, vui lòng thử lại sau');
                                    }
                                });
                            });
                            return;
                        }
                        var options = {
                            method: 'GET',
                            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
                            qs: {
                                token: '3b760e5dcf038878925b5613c32615ea3',
                                hotelcode: se.booking.HotelId,
                                roomcode: se.objectFlight.HotelBooking.RoomId,
                                checkin: se.searchhotel.CheckInDate,
                                checkout: se.searchhotel.CheckOutDate,
                                totalroom: se.objectFlight.HotelBooking.TotalRoom
                            },
                            headers: {}
                        };
                        requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response3, body) {
                            if (response3.statusCode != 200) {
                                var objError = {
                                    page: "hoteldetail",
                                    func: "book",
                                    message: response3.statusMessage,
                                    content: response3.body,
                                    type: "warning",
                                    param: JSON.stringify(options)
                                };
                                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response3);
                            }
                            if (error) {
                                error.page = "hoteldetail";
                                error.func = "book";
                                error.param = JSON.stringify(options);
                                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response3);
                                throw new Error(error);
                            }
                            ;
                            var rs = JSON.parse(body);
                            se.PriceAvgPlusTAStr = se.PriceAvgPlusTAStr.toLocaleString().replace(/\./g, '').replace(/\,/g, '');
                            if (se.PriceAvgPlusTAStr > 0) {
                                if (rs.Msg == "AL") {
                                    var optionsfly = {
                                        'method': 'GET',
                                        'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + 'gate/apiv1/checkAllowPayment/' + se.bookcombo.FlightCode + '',
                                        'headers': {
                                            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                                            'Content-Type': 'application/json; charset=utf-8'
                                        }
                                    };
                                    requestretry__WEBPACK_IMPORTED_MODULE_8__(optionsfly, function (error, response) {
                                        if (error)
                                            throw new Error(error);
                                        var jsonfly = JSON.parse(response.body);
                                        var blockPaymentCard = jsonfly.response.blockPaymentCard;
                                        var blockPaymentLate = jsonfly.response.blockPaymentLate;
                                        se.Roomif.payment = rs.Msg;
                                        se.Roomif.ischeckpaymentCard = blockPaymentCard;
                                        se.Roomif.ischeckpaymentLater = blockPaymentLate;
                                        se.bookcombo.DepartATCode = "";
                                        se.bookcombo.ReturnATCode = "";
                                        if (se.loader) {
                                            se.loader.dismiss();
                                        }
                                        se.navCtrl.navigateForward('/flightcombopayment');
                                    });
                                }
                                else {
                                    se.Roomif.payment = rs.Msg;
                                    se.Roomif.ischeckpaymentCard = true;
                                    se.Roomif.ischeckpaymentLater = false;
                                    se.gf.holdflight(se.bookcombo.FlightCode, se.bookcombo.iddepart, se.bookcombo.idreturn).then(datafly => {
                                        se.gf.createTransactionCombo(se.bookcombo.bookingcode, se.bookcombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                                            if (se.loader) {
                                                se.loader.dismiss();
                                            }
                                            if (data) {
                                                if (se.bizTravelService.isCompany) {
                                                    let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=2&source=app&amount=' + se.bookcombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookcombo.bookingcode + '&buyerPhone=' + se.phone + '&memberId=' + se.jti;
                                                    se.gf.CreateUrl(url);
                                                }
                                                se.gf.createFlightTransactionCombo(se.bookcombo.FlightCode);
                                                se.navCtrl.navigateForward('/flightcombopaymentdone/RQ');
                                            }
                                            else {
                                                alert('Gặp sự cố, vui lòng thử lại sau');
                                            }
                                        });
                                    });
                                }
                            }
                            else {
                                var options = {
                                    'method': 'POST',
                                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + se.bookcombo.bookingcode + '&paymentMethod=51',
                                    'headers': {}
                                };
                                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response) {
                                    if (error)
                                        throw new Error(error);
                                    var options_2 = {
                                        'method': 'GET',
                                        'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/get-pnr-flight?reservationNo=' + se.bookcombo.FlightCode + '&cacheDepartId=' + se.bookcombo.iddepart + '&cacheReturnId=' + se.bookcombo.idreturn + '',
                                        'headers': {}
                                    };
                                    requestretry__WEBPACK_IMPORTED_MODULE_8__(options_2, function (error2, response2) {
                                        if (error2)
                                            throw new Error(error2);
                                        var obj = JSON.parse(response2.body);
                                        var depcode = "";
                                        var retcode = "";
                                        if (obj.length > 0) {
                                            var objAll = obj.filter((item) => { return item.name == "All"; });
                                            var objDepart = obj.filter((item) => { return item.name == "Depart"; });
                                            var objReturn = obj.filter((item) => { return item.name == "Return"; });
                                            if (objAll && objAll.length > 0) {
                                                depcode = objAll[0].value;
                                                retcode = objAll[0].value;
                                            }
                                            if (objDepart && objDepart.length > 0) {
                                                depcode = objDepart[0].value;
                                            }
                                            if (objReturn && objReturn.length > 0) {
                                                retcode = objReturn[0].value;
                                            }
                                        }
                                        se.gf.createTransactionCombo(se.bookcombo.bookingcode, se.bookcombo.FlightCode, depcode, retcode).then(data => {
                                            if (se.loader) {
                                                se.loader.dismiss();
                                            }
                                            if (data) {
                                                if (se.bizTravelService.isCompany) {
                                                    let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + se.bookcombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookcombo.bookingcode + '&buyerPhone=' + se.phone + '&memberId=' + se.jti;
                                                    se.gf.CreateUrl(url);
                                                }
                                                se.navCtrl.navigateForward('/flightcombodoneprepay/' + se.bookcombo.bookingcode + '/' + se.PriceAvgPlusTAStr + '/' + 1);
                                            }
                                            else {
                                                alert('Gặp sự cố, vui lòng thử lại');
                                            }
                                        });
                                    });
                                });
                            }
                        });
                    }
                    else {
                        se.PriceAvgPlusTAStr = se.PriceAvgPlusTAStr.toLocaleString().replace(/\./g, '').replace(/\,/g, '');
                        if (se.PriceAvgPlusTAStr > 0) {
                            var optionsfly = {
                                'method': 'GET',
                                'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + 'gate/apiv1/checkAllowPayment/' + se.bookcombo.FlightCode + '',
                                'headers': {
                                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                                    'Content-Type': 'application/json; charset=utf-8'
                                }
                            };
                            requestretry__WEBPACK_IMPORTED_MODULE_8__(optionsfly, function (error, response) {
                                if (error)
                                    throw new Error(error);
                                var jsonfly = JSON.parse(response.body);
                                var blockPaymentCard = jsonfly.response.blockPaymentCard;
                                var blockPaymentLate = jsonfly.response.blockPaymentLate;
                                se.Roomif.payment = "AL";
                                se.Roomif.ischeckpaymentCard = blockPaymentCard;
                                se.Roomif.ischeckpaymentLater = blockPaymentLate;
                                se.bookcombo.DepartATCode = "";
                                se.bookcombo.ReturnATCode = "";
                                if (se.loader) {
                                    se.loader.dismiss();
                                }
                                se.navCtrl.navigateForward('/flightcombopayment');
                            });
                        }
                        else {
                            var options1 = {
                                'method': 'POST',
                                'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + se.bookcombo.bookingcode + '&paymentMethod=51',
                                'headers': {}
                            };
                            requestretry__WEBPACK_IMPORTED_MODULE_8__(options1, function (error, response) {
                                if (error)
                                    throw new Error(error);
                                var options_2 = {
                                    'method': 'GET',
                                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/get-pnr-flight?reservationNo=' + se.bookcombo.FlightCode + '&cacheDepartId=' + se.bookcombo.iddepart + '&cacheReturnId=' + se.bookcombo.idreturn + '',
                                    'headers': {}
                                };
                                requestretry__WEBPACK_IMPORTED_MODULE_8__(options_2, function (error2, response2) {
                                    if (error2)
                                        throw new Error(error2);
                                    var obj = JSON.parse(response2.body);
                                    var depcode = "";
                                    var retcode = "";
                                    if (obj.length > 0) {
                                        var objAll = obj.filter((item) => { return item.name == "All"; });
                                        var objDepart = obj.filter((item) => { return item.name == "Depart"; });
                                        var objReturn = obj.filter((item) => { return item.name == "Return"; });
                                        if (objAll && objAll.length > 0) {
                                            depcode = objAll[0].value;
                                            retcode = objAll[0].value;
                                        }
                                        if (objDepart && objDepart.length > 0) {
                                            depcode = objDepart[0].value;
                                        }
                                        if (objReturn && objReturn.length > 0) {
                                            retcode = objReturn[0].value;
                                        }
                                    }
                                    se.gf.createTransactionCombo(se.bookcombo.bookingcode, se.bookcombo.FlightCode, depcode, retcode).then(data => {
                                        if (data) {
                                            if (se.loader) {
                                                se.loader.dismiss();
                                            }
                                            if (se.bizTravelService.isCompany) {
                                                let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + se.bookcombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookcombo.bookingcode + '&buyerPhone=' + se.phone + '&memberId=' + se.jti;
                                                se.gf.CreateUrl(url);
                                            }
                                            se.navCtrl.navigateForward('/flightcombodoneprepay/' + se.bookcombo.bookingcode + '/' + se.PriceAvgPlusTAStr + '/' + 1);
                                        }
                                        else {
                                            if (se.loader) {
                                                se.loader.dismiss();
                                            }
                                            alert('Gặp sự cố, vui lòng thử lại');
                                        }
                                    });
                                });
                            });
                        }
                    }
                }
                else {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    alert("Rất tiếc giá vé máy bay đã thay đổi, vui lòng chọn lại");
                    se.navCtrl.back();
                }
            }
        });
    }
    itemrdmale(index, value) {
        if (value == 0) {
            this.arradult[index].Gender = 1;
        }
        else {
            this.arrchild[index].Gender = 1;
        }
    }
    itemrdfemale(index, value) {
        if (value == 0) {
            this.arradult[index].Gender = 2;
        }
        else {
            this.arrchild[index].Gender = 2;
        }
    }
    presentToast1() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập đầy đủ họ tên liên hệ",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập đầy đủ họ tên hành khách",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastPhoneNull() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập số điện thoại",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastPhone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Số điện thoại phải 10 số",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastBirthDay() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập ngày sinh của trẻ em",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastGender() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng chọn quý danh",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                message: "Đang giữ vé máy bay với hãng hàng không, xin vui lòng không tắt ứng dụng!"
            });
            this.loader.present();
        });
    }
    phonenumber(inputtxt) {
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
    textchangehoten() {
        this.zone.run(() => {
            this.arradult[0].hoten = this.hoten;
        });
    }
    next1() {
        this.navCtrl.navigateForward('/flightcombopaymentdone');
    }
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
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
    showConfirmEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Đổi email',
                        role: 'OK',
                        handler: () => {
                            this.showChangeEmail();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showChangeEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const modal = yield this.modalCtrl.create({
                component: _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_11__["ConfirmemailPage"],
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
                        se.objectFlight.HotelBooking.CEmail = data.data.email;
                        se.gonextstep();
                    }
                }
            });
        });
    }
    postapi() {
        this.presentLoading();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboBooking',
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": jquery__WEBPACK_IMPORTED_MODULE_10__["param"](this.search)
        };
        var se = this;
        jquery__WEBPACK_IMPORTED_MODULE_10__["ajax"](settings).done(function (response) {
            if (response.Error) {
                se.loader.dismiss();
                var error = {
                    page: "flightcomboadddetails",
                    func: "CreateComboBooking",
                    message: response.Error,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(settings)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                alert("Rất tiếc giá vé máy bay đã thay đổi, vui lòng chọn lại");
                se.navCtrl.back();
            }
            else {
                if (response.flyBookingCode) {
                    se.Roomif.ischeckpaymentCard = true;
                    se.bookcombo.bookingcode = response.Code;
                    se.bookcombo.FlightCode = response.flyBookingCode;
                    var options = {
                        method: 'GET',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
                        qs: {
                            token: '3b760e5dcf038878925b5613c32615ea3',
                            hotelcode: se.booking.HotelId,
                            roomcode: se.objectFlight.HotelBooking.RoomId,
                            checkin: se.searchhotel.CheckInDate,
                            checkout: se.searchhotel.CheckOutDate,
                            totalroom: se.objectFlight.HotelBooking.TotalRoom
                        },
                        headers: {}
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response3, body) {
                        if (response3.statusCode != 200) {
                            var objError = {
                                page: "hoteldetail",
                                func: "book",
                                message: response3.statusMessage,
                                content: response3.body,
                                type: "warning",
                                param: JSON.stringify(options)
                            };
                            _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response3);
                        }
                        if (error) {
                            error.page = "hoteldetail";
                            error.func = "book";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response3);
                            throw new Error(error);
                        }
                        ;
                        var rs = JSON.parse(body);
                        se.PriceAvgPlusTAStr = se.PriceAvgPlusTAStr.toLocaleString().replace(/\./g, '').replace(/\,/g, '');
                        if (se.PriceAvgPlusTAStr > 0) {
                            if (rs.Msg == "AL") {
                                var optionsfly = {
                                    'method': 'GET',
                                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + 'gate/apiv1/checkAllowPayment/' + se.bookcombo.FlightCode + '',
                                    'headers': {
                                        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                                        'Content-Type': 'application/json; charset=utf-8'
                                    }
                                };
                                requestretry__WEBPACK_IMPORTED_MODULE_8__(optionsfly, function (error, response) {
                                    if (error)
                                        throw new Error(error);
                                    var jsonfly = JSON.parse(response.body);
                                    var blockPaymentCard = jsonfly.response.blockPaymentCard;
                                    var blockPaymentLate = jsonfly.response.blockPaymentLate;
                                    se.Roomif.payment = rs.Msg;
                                    se.Roomif.ischeckpaymentCard = blockPaymentCard;
                                    se.Roomif.ischeckpaymentLater = blockPaymentLate;
                                    se.bookcombo.DepartATCode = "";
                                    se.bookcombo.ReturnATCode = "";
                                    if (se.loader) {
                                        se.loader.dismiss();
                                    }
                                    se.navCtrl.navigateForward('/flightcombopayment');
                                });
                            }
                            else {
                                se.Roomif.payment = rs.Msg;
                                se.Roomif.ischeckpaymentCard = true;
                                se.Roomif.ischeckpaymentLater = false;
                                if (se.loader) {
                                    se.loader.dismiss();
                                }
                                se.navCtrl.navigateForward('/flightcombopayment');
                            }
                        }
                        else {
                            var options = {
                                'method': 'POST',
                                'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + se.bookcombo.bookingcode + '&paymentMethod=51',
                                'headers': {}
                            };
                            requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response) {
                                if (error)
                                    throw new Error(error);
                                var options_2 = {
                                    'method': 'GET',
                                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/get-pnr-flight?reservationNo=' + se.bookcombo.FlightCode + '&cacheDepartId=' + se.bookcombo.iddepart + '&cacheReturnId=' + se.bookcombo.idreturn + '',
                                    'headers': {}
                                };
                                requestretry__WEBPACK_IMPORTED_MODULE_8__(options_2, function (error2, response2) {
                                    if (error2)
                                        throw new Error(error2);
                                    if (se.loader) {
                                        se.loader.dismiss();
                                    }
                                    var obj = JSON.parse(response2.body);
                                    var depcode = "";
                                    var retcode = "";
                                    if (obj.length > 0) {
                                        var objAll = obj.filter((item) => { return item.name == "All"; });
                                        var objDepart = obj.filter((item) => { return item.name == "Depart"; });
                                        var objReturn = obj.filter((item) => { return item.name == "Return"; });
                                        if (objAll && objAll.length > 0) {
                                            depcode = objAll[0].value;
                                            retcode = objAll[0].value;
                                        }
                                        if (objDepart && objDepart.length > 0) {
                                            depcode = objDepart[0].value;
                                        }
                                        if (objReturn && objReturn.length > 0) {
                                            retcode = objReturn[0].value;
                                        }
                                    }
                                    se.gf.createTransactionCombo(se.bookcombo.bookingcode, se.bookcombo.FlightCode, depcode, retcode).then(data => {
                                        if (data) {
                                            se.navCtrl.navigateForward('/flightcombodoneprepay/' + se.bookcombo.bookingcode + '/' + se.PriceAvgPlusTAStr + '/' + 1);
                                        }
                                        else {
                                            alert('Gặp sự cố, vui lòng thử lại');
                                        }
                                    });
                                });
                            });
                        }
                    });
                }
                else {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    alert("Rất tiếc giá vé máy bay đã thay đổi, vui lòng chọn lại");
                    se.navCtrl.back();
                }
            }
        });
    }
    selectAdultGender(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: 'action-sheets-flightselectgender',
                mode: 'md',
                header: 'Danh xưng',
                buttons: [
                    {
                        text: "Anh",
                        cssClass: item.genderdisplay == "Anh" ? 'text-bold' : '',
                        handler: () => {
                            item.genderdisplay = 'Anh';
                            item.Gender = 1;
                        }
                    },
                    {
                        text: "Chị",
                        cssClass: item.genderdisplay == "Chị" ? 'text-bold' : '',
                        handler: () => {
                            item.genderdisplay = 'Chị';
                            item.Gender = 2;
                        }
                    }
                ],
            });
            actionSheet.present();
            actionSheet.onDidDismiss().then((data) => {
                this.checkInput(item, 1, true);
            });
        });
    }
    selectGender(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: 'action-sheets-flightselectgender',
                mode: 'md',
                header: 'Danh xưng',
                buttons: [
                    {
                        text: "Bé trai",
                        cssClass: item.genderdisplay == "Bé trai" ? 'text-bold' : '',
                        handler: () => {
                            item.genderdisplay = 'Bé trai';
                            item.Gender = 1;
                        }
                    },
                    {
                        text: "Bé gái",
                        cssClass: item.genderdisplay == "Bé gái" ? 'text-bold' : '',
                        handler: () => {
                            item.genderdisplay = 'Bé gái';
                            item.Gender = 2;
                        }
                    }
                ],
            });
            actionSheet.present();
            actionSheet.onDidDismiss().then((data) => {
                this.checkInput(item, 1, false);
            });
        });
    }
    showComboDetail() {
        var se = this;
        console.log(se);
        if (this.showLuggage) {
            this.bookcombo.Luggage = this.PriceAvgPlusTA - this.PriceAvgPlusTAOld;
        }
        else {
            this.bookcombo.Luggage = 0;
        }
        se.navCtrl.navigateForward("/flightcombopaymentbreakdown");
    }
    openLotusPointSave(itemAdult) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.bookcombo.airlineMemberCode = itemAdult.airlineMemberCode;
            const modal = yield this.modalCtrl.create({
                component: _flightpointsave_flightpointsave_page__WEBPACK_IMPORTED_MODULE_1__["FlightpointsavePage"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data && data.data.code) {
                    itemAdult.airlineMemberCode = data.data.code;
                }
            });
        });
    }
    checkInput(inputcheck, type, isadult) {
        var se = this;
        if (isadult) {
            if (type == 1) {
                if (!inputcheck.genderdisplay && !inputcheck.hoten) {
                    inputcheck.errorInfo = true;
                    inputcheck.textErrorInfo = "Vui lòng nhập thông tin Người lớn " + (inputcheck.iddisplay);
                    return;
                }
                else {
                    inputcheck.errorInfo = false;
                    inputcheck.textErrorInfo = "";
                }
                if (!inputcheck.genderdisplay) {
                    inputcheck.errorGender = !inputcheck.errorGender;
                    inputcheck.errorTextGender = "Vui lòng nhập danh xưng Người lớn " + (inputcheck.iddisplay);
                    return;
                }
                else {
                    inputcheck.errorGender = false;
                    inputcheck.errorTextGender = "";
                    inputcheck.errorInfo = false;
                    inputcheck.errorTextInfo = "";
                }
            }
            if (type == 2) {
                if (!inputcheck.hoten) {
                    inputcheck.errorName = !inputcheck.errorName;
                    inputcheck.errorTextName = "Vui lòng nhập họ tên Người lớn " + (inputcheck.iddisplay);
                    return;
                }
                else if (inputcheck.hoten) {
                    var checktext = se.hasWhiteSpace(inputcheck.hoten.trim());
                    if (!checktext || !se.validateNameNotContainNumber(inputcheck.hoten.trim()) || !se.validateNameNotContainExceptionChar(inputcheck.hoten.trim())) {
                        inputcheck.errorName = !inputcheck.errorName;
                        inputcheck.errorTextName = "Họ và tên Người lớn " + (inputcheck.iddisplay) + " không hợp lệ. Vui lòng kiểm tra lại!";
                        return;
                    }
                    else {
                        inputcheck.errorName = false;
                        inputcheck.errorTextName = "";
                        inputcheck.errorInfo = false;
                        inputcheck.errorTextInfo = "";
                    }
                    se.checkValidSubName(inputcheck.hoten).then((datacheck) => {
                        if (!datacheck) {
                            inputcheck.errorSubName = true;
                            inputcheck.errorTextSubName = "Không nằm trong danh sách họ phổ biến. Vui lòng kiểm tra lại!";
                        }
                        else {
                            inputcheck.errorSubName = false;
                            inputcheck.errorTextSubName = "";
                        }
                    });
                }
            }
        }
        else {
            if (type == 1) {
                if (!inputcheck.genderdisplay && !inputcheck.hoten) {
                    inputcheck.errorInfo = true;
                    inputcheck.textErrorInfo = "Vui lòng nhập thông tin Trẻ em " + (inputcheck.iddisplay);
                    return;
                }
                else {
                    inputcheck.errorInfo = false;
                    inputcheck.textErrorInfo = "";
                }
                if (!inputcheck.genderdisplay) {
                    inputcheck.errorGender = !inputcheck.errorGender;
                    inputcheck.errorTextGender = "Vui lòng nhập danh xưng Trẻ em  " + inputcheck.iddisplay;
                    return;
                }
                else {
                    inputcheck.errorGender = false;
                    inputcheck.errorTextGender = "";
                }
            }
            if (type == 2) {
                if (!inputcheck.hoten) {
                    inputcheck.errorName = !inputcheck.errorName;
                    inputcheck.errorTextName = "Vui lòng nhập họ tên " + (inputcheck.isChild ? (inputcheck.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + "  " + inputcheck.iddisplay;
                    return;
                }
                else if (inputcheck.hoten) {
                    var checktext = se.hasWhiteSpace(inputcheck.hoten.trim());
                    if (!checktext || !se.validateNameNotContainNumber(inputcheck.hoten.trim()) || !se.validateNameNotContainExceptionChar(inputcheck.hoten.trim())) {
                        inputcheck.errorName = !inputcheck.errorName;
                        inputcheck.errorTextName = "Họ và tên " + (inputcheck.isChild ? (inputcheck.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + " " + (inputcheck.iddisplay) + " không hợp lệ. Vui lòng kiểm tra lại!";
                        return;
                    }
                    else {
                        inputcheck.errorName = false;
                        inputcheck.errorTextName = "";
                        inputcheck.errorInfo = false;
                        inputcheck.errorTextInfo = "";
                        inputcheck.textErrorInfo = "";
                    }
                    se.checkValidSubName(inputcheck.hoten).then((datacheck) => {
                        if (!datacheck) {
                            inputcheck.errorSubName = true;
                            inputcheck.errorTextSubName = "Không nằm trong danh sách họ phổ biến. Vui lòng kiểm tra lại!";
                        }
                        else {
                            inputcheck.errorSubName = false;
                            inputcheck.errorTextSubName = "";
                        }
                    });
                }
            }
            if (type == 3) {
                if (!inputcheck.BirthDay) {
                    inputcheck.errorDateofbirth = true;
                    inputcheck.errorTextBirthday = "Vui lòng nhập ngày sinh " + (inputcheck.isChild ? (inputcheck.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + "";
                    return;
                }
                else {
                    inputcheck.errorDateofbirth = false;
                    inputcheck.errorTextBirthday = "";
                }
                if (inputcheck.BirthDay) {
                    let departdate = moment__WEBPACK_IMPORTED_MODULE_9__(this.searchhotel.CheckOutDate).format('YYYY-MM-DD');
                    let departdatestring = moment__WEBPACK_IMPORTED_MODULE_9__(this.searchhotel.CheckOutDate).format('DD-MM-YYYY');
                    if (moment__WEBPACK_IMPORTED_MODULE_9__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(inputcheck.BirthDay).format('YYYY-MM-DD'), 'days') < 14) {
                        if (inputcheck.PassengerType == 1) {
                            inputcheck.errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ em lớn hơn hoặc bằng 2 tuổi so với ngày về " + departdatestring;
                        }
                        else if (inputcheck.PassengerType == 2) {
                            inputcheck.errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ sơ sinh lớn hơn 14 ngày tuổi so với ngày về " + departdatestring;
                        }
                        inputcheck.errorBirthday = true;
                        inputcheck.errorBirthday1 = true;
                        return;
                    }
                    else {
                        inputcheck.errorBirthday = false;
                        inputcheck.errorBirthday1 = false;
                        inputcheck.errorTextBirthday = "";
                    }
                    if (inputcheck.PassengerType == 1) {
                        if (moment__WEBPACK_IMPORTED_MODULE_9__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(inputcheck.BirthDay).format('YYYY-MM-DD'), 'months') >= 144) {
                            inputcheck.errorBirthday = true;
                            inputcheck.errorBirthday1 = true;
                            inputcheck.errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ em không được lớn hơn 12 tuổi so với ngày về " + departdatestring;
                            return;
                        }
                        else {
                            inputcheck.errorBirthday = false;
                            inputcheck.errorBirthday1 = false;
                            inputcheck.errorTextBirthday = "";
                        }
                        if (moment__WEBPACK_IMPORTED_MODULE_9__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(inputcheck.BirthDay).format('YYYY-MM-DD'), 'months') < 24) {
                            inputcheck.errorBirthday = true;
                            inputcheck.errorBirthday1 = true;
                            inputcheck.errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ em không được nhỏ hơn 2 tuổi so với ngày về " + departdatestring;
                            return;
                        }
                        else {
                            inputcheck.errorBirthday = false;
                            inputcheck.errorBirthday1 = false;
                            inputcheck.errorTextBirthday = "";
                        }
                    }
                    if (inputcheck.PassengerType == 2) {
                        if (moment__WEBPACK_IMPORTED_MODULE_9__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(inputcheck.BirthDay).format('YYYY-MM-DD'), 'months') >= 24) {
                            inputcheck.errorBirthday = true;
                            inputcheck.errorBirthday1 = true;
                            inputcheck.errorTextBirthday = "Vui lòng nhập ngày sinh Trẻ sơ sinh không được lớn hơn 2 tuổi so với ngày về " + departdatestring;
                            return;
                        }
                        else {
                            inputcheck.errorBirthday = false;
                            inputcheck.errorBirthday1 = false;
                            inputcheck.errorTextBirthday = "";
                        }
                    }
                }
            }
        }
    }
    validateNameNotContainNumber(name) {
        var re = /^([^0-9]*)$/;
        return re.test(String(name).toLowerCase());
    }
    validateNameNotContainExceptionChar(name) {
        let re = /^(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971\u0972\u097B-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8B\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C6F\u2C71-\u2C7D\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FC3\uA000-\uA48C\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA65F\uA662-\uA66E\uA67F-\uA697\uA717-\uA71F\uA722-\uA788\uA78B\uA78C\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA90A-\uA925\uA930-\uA946\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1E\uDF30-\uDF4A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F\uDD00-\uDD15\uDD20-\uDD39\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33]|\uD808[\uDC00-\uDF6E]|\uD809[\uDC00-\uDC62]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD87E[\uDC00-\uDE1D])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0523\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0621-\u065E\u0660-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0901-\u0939\u093C-\u094D\u0950-\u0954\u0958-\u0963\u0966-\u096F\u0971\u0972\u097B-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC\u0EDD\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F8B\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u1099\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19A9\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BAA\u1BAE-\u1BB9\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1D00-\u1DE6\u1DFE-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u2094\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C6F\u2C71-\u2C7D\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FC3\uA000-\uA48C\uA500-\uA60C\uA610-\uA62B\uA640-\uA65F\uA662-\uA66F\uA67C\uA67D\uA67F-\uA697\uA717-\uA71F\uA722-\uA788\uA78B\uA78C\uA7FB-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA900-\uA92D\uA930-\uA953\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1E\uDF30-\uDF4A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F\uDD00-\uDD15\uDD20-\uDD39\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F]|\uD808[\uDC00-\uDF6E]|\uD809[\uDC00-\uDC62]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF])*$/;
        let str = name.toLowerCase().replace(/ /g, '');
        return re.test(String(str));
    }
    checkDuplicateItem(listpax) {
        var se = this, res = false;
        return new Promise((resolve, reject) => {
            resolve(se.getArrayDuplicate(listpax));
        });
    }
    getArrayDuplicate(listpax) {
        let arrres = [];
        return new Promise((resolve, reject) => {
            for (let index = 0; index < listpax.length; index++) {
                const element = listpax[index];
                let itemdup = listpax.filter((i, indexp) => i.hoten.trimEnd().trimStart().toLowerCase() == element.hoten.trimEnd().trimStart().toLowerCase() && i.indexp != index);
                if (itemdup && itemdup.length > 1) {
                    let arrdup = listpax.filter((i) => i.hoten.trimEnd().trimStart().toLowerCase() == itemdup[0].hoten.trimEnd().trimStart().toLowerCase());
                    if (arrres.length == 0) {
                        arrres.push({ list: [...arrdup] });
                    }
                    else {
                        let checkvalid = true;
                        for (let index = 0; index < arrres.length; index++) {
                            const element = arrres[index];
                            if (this.checkExistsItemInArray(element.list, arrdup[0])) {
                                checkvalid = false;
                            }
                        }
                        if (checkvalid) {
                            arrres.push({ list: [...arrdup] });
                        }
                    }
                }
            }
            resolve(arrres);
        });
    }
    checkValidName(listpax) {
        var se = this, res = false, arrItem = [];
        return new Promise((resolve, reject) => {
            for (let index = 0; index < listpax.length; index++) {
                const element = listpax[index];
                let iteminvalid = listpax.filter((item) => { return item.byPassCheckRegularName ? false : item.hoten.trimEnd().trimStart().split(' ').length < 3; });
                if (iteminvalid && iteminvalid.length > 0) {
                    resolve(iteminvalid);
                }
            }
            resolve(res);
        });
    }
    checkValidSubName(subname) {
        var se = this, res = false;
        return new Promise((resolve, reject) => {
            let iteminvalid = se.gf.getListSubName().filter((sn) => { return ((sn.value.indexOf(subname.split(' ')[0].toLowerCase()) != -1) || (sn.rawValue.indexOf(subname.split(' ')[0].toLowerCase()) != -1)); });
            if (iteminvalid && iteminvalid.length > 0) {
                resolve(iteminvalid[0]);
            }
            resolve(res);
        });
    }
    checkInputUserInfo(type) {
        var se = this;
        se.hasinput = true;
        if (type == 1) {
            if (!se.hoten || !se.hasWhiteSpace(se.hoten) || !se.validateNameNotContainNumber(se.hoten) || !se.validateNameNotContainExceptionChar(se.hoten)) {
                se.hoteninvalid = true;
            }
            else {
                se.hoteninvalid = false;
            }
            se.checkValidSubName(se.hoten).then((check) => {
                if (!check) {
                    se.subnameinvalid = true;
                }
                else {
                    se.subnameinvalid = false;
                }
            });
        }
        if (type == 2) {
            if (se.gf.checkPhoneInValidFormat(se.phone)) {
                se.sodienthoaiinvalid = true;
            }
            else {
                se.sodienthoaiinvalid = false;
            }
        }
        if (type == 3) {
            let strcheck = se._email;
            if (se._email.indexOf('@') != -1) {
                strcheck = se._email.split('@')[1];
            }
            if (se.gf.checkEmailInvalidFormat(strcheck) || !se.validateEmail(se._email) || !se.gf.checkUnicodeCharactor(se._email)) {
                se.emailinvalid = true;
            }
            else {
                se.emailinvalid = false;
            }
        }
    }
    showAlertDuplicateName() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            var arrdup = this.searchhotel.duplicateItem;
            let strmsg = '';
            arrdup.forEach(element => {
                for (let index = 0; index < element.list.length; index++) {
                    const itemlist = element.list[index];
                    if (index == 0) {
                        strmsg += 'Tên ' + (itemlist.isChild ? (itemlist.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + itemlist.iddisplay + ' và ';
                    }
                    else {
                        strmsg += (itemlist.isChild ? (itemlist.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + itemlist.iddisplay + (index < element.list.length - 1 ? ' và ' : '');
                    }
                }
                strmsg += " <span class='cls-error'>" + element.list[0].hoten + '</span> trùng nhau.';
            });
            strmsg += ' Có khả năng quý khách đã nhập nhầm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            let alert = yield this.alertCtrl.create({
                header: 'Tên hành khách trùng nhau',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.activeStep = 2;
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            se.searchhotel.duplicateName = null;
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertInvalidName(iteminvalid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = '';
            if (iteminvalid.length < 2) {
                let element = iteminvalid[0];
                strmsg = 'Tên ' + (element.isChild ? (element.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + element.iddisplay + " <span class='cls-error'>" + element.hoten + '</span> chỉ có 2 chữ. Có khả năng quý khách đã nhập thiếu tên đệm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            }
            else {
                for (let index = 0; index < iteminvalid.length; index++) {
                    const element = iteminvalid[index];
                    strmsg += 'Tên ' + (element.isChild ? (element.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + element.iddisplay + " <span class='cls-error'>" + element.hoten + '</span>' + (index < iteminvalid.length - 1 ? ', ' : ' ');
                }
                strmsg += " chỉ có 2 chữ. Có khả năng quý khách đã nhập thiếu tên đệm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.";
            }
            let alert = yield this.alertCtrl.create({
                header: 'Họ tên hành khách chỉ có 2 chữ',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.activeStep = 2;
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            se.searchhotel.duplicateName = null;
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertInvalidFirstName(iteminvalid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = 'Tên ' + (iteminvalid.isChild ? (iteminvalid.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + iteminvalid.iddisplay + " <span class='cls-error'>" + iteminvalid.name + '</span> chỉ có 2 chữ. Có khả năng quý khách đã nhập thiếu tên đệm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            let alert = yield this.alertCtrl.create({
                header: 'Họ tên hành khách chỉ có 2 chữ',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.activeStep = 2;
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            se.searchhotel.duplicateName = null;
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    checkInValidSubNameBeforeNextStep(listpax) {
        var se = this, res = false;
        return new Promise((resolve, reject) => {
            listpax.filter((itempax) => {
                let itemValueInvalid = se.gf.getListSubName().filter((sn) => { return sn.value.indexOf(itempax.hoten.split(' ')[0].toLowerCase()) != -1; });
                let itemRawValueInvalid = se.gf.getListSubName().filter((sn) => { return sn.rawValue.indexOf(itempax.hoten.split(' ')[0].toLowerCase()) != -1; });
                if (itemValueInvalid.length == 0 && itemRawValueInvalid.length == 0) {
                    res = itempax;
                }
            });
            resolve(res);
        });
    }
    showAlertInvalidSubName(iteminvalid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = 'Họ của ' + (iteminvalid.isChild ? (!iteminvalid.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ') + iteminvalid.id + " <span class='cls-error'>" + iteminvalid.hoten + '</span> không nằm trong danh sách họ phổ biến. Có khả năng quý khách đã nhập sai.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            let alert = yield this.alertCtrl.create({
                header: 'Họ không nằm trong danh sách họ phổ biến',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.activeStep = 2;
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    checkExistsItemInArray(arrays, item) {
        var res = false;
        res = arrays.some(r => r.hoten == item.hoten);
        return res;
    }
    checkValidFirstNameAndSubName(listpax) {
        var se = this, res = false, arrItem = [];
        return new Promise((resolve, reject) => {
            for (let index = 0; index < listpax.length; index++) {
                const element = listpax[index];
                let iteminvalid = listpax.filter((item) => { return item.hoten.trim().split(' ').length >= 5; });
                if (iteminvalid && iteminvalid.length > 0) {
                    resolve(iteminvalid);
                }
            }
            resolve(res);
        });
    }
    checkValidDuplicateFirstNameAndSubName(listpax) {
        var se = this, res = false, arrItem = [];
        return new Promise((resolve, reject) => {
            for (let index = 0; index < listpax.length; index++) {
                const element = listpax[index];
                let arrname = se.gf.convertFontVNI(element.hoten).trim().split(' ');
                if (arrname && arrname.length > 1) {
                    let samename = arrname.filter((v, i, a) => a.findIndex(t => (t === v)) !== i);
                    if (samename && samename.length > 0) {
                        resolve(element);
                    }
                }
            }
            resolve(res);
        });
    }
    showAlertInvalidFirtNameAndLastName(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = '';
            if (item.length < 2) {
                let element = item[0];
                strmsg += 'Tên ' + (element.isChild ? (element.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ');
                strmsg += " <span class='cls-error'>" + element.hoten + '</span>';
            }
            else {
                for (let index = 0; index < item.length; index++) {
                    const element = item[index];
                    strmsg += 'Tên ' + (element.isChild ? (element.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ') + " <span class='cls-error'>" + element.hoten + '</span>' + (index < item.length - 1 ? ', ' : ' ');
                }
            }
            strmsg += " chứa nhiều hơn 4 chữ cái. Có khả năng quý khách đã nhập nhầm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.";
            let alert = yield this.alertCtrl.create({
                header: 'Tên nhiều hơn 4 chữ cái',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.activeStep = 2;
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertDuplicateFirtNameAndLastName(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = '';
            strmsg += 'Tên ' + (item.isChild ? (item.PassengerType == 1 ? 'Trẻ em ' : 'Trẻ sơ sinh ') : 'Người lớn ');
            strmsg += " <span class='cls-error'>" + item.hoten + '</span> chứa nhiều hơn 1 chữ cái trùng nhau.';
            strmsg += ' Có khả năng quý khách đã nhập nhầm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            let alert = yield this.alertCtrl.create({
                header: 'Chữ cái trùng nhau',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.activeStep = 2;
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showNameMail(ev) {
        this.ishideNameMail = ev.detail.checked;
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
    inputFocus(item, event) {
        var se = this;
        if (!se.inputtext) {
            if (item && !item.hidePaxHint) {
                if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                    se.inputtext = true;
                    se.updateHintPaxName(item, se.gf.convertFontVNI(event.target.value), se.listPaxSuggestByMemberId);
                }
            }
            else if (!se.hidepaxhint && se.activeStep == 2) {
                if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                    se.inputtext = true;
                    se.updateHintPaxNameStep2(item, se.gf.convertFontVNI(event.target.value), se.listPaxSuggestByMemberId);
                }
            }
        }
        else if (event && se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
            if (se.activeStep == 1) {
                if (event.target.value) {
                    se.checkInput(item, 2, !item.isChild);
                }
                se.inputtext = true;
                se.updateHintPaxName(item, se.gf.convertFontVNI(event.target.value), se.listPaxSuggestByMemberId);
            }
            else {
                se.inputtext = true;
                se.updateHintPaxNameStep2(item, se.gf.convertFontVNI(event.target.value), se.listPaxSuggestByMemberId);
            }
        }
    }
    inputLostFocus(item, isadult) {
        var se = this;
        setTimeout(() => {
            se.inputtext = false;
            if (se.activeStep == 1) {
                se.checkInput(item, 2, isadult);
            }
            else {
                se.checkInputUserInfo(1);
            }
            if (se.hidepaxhint) {
                if (item) {
                    item.hidePaxHint = true;
                }
                se.hidepaxhint = false;
            }
        }, 400);
    }
    createHintPaxName(item, listpaxhint) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let arraypax = [];
            if (item) {
                se.currentSelectPax = item;
            }
            for (let index = 0; index < listpaxhint.length; index++) {
                const element = listpaxhint[index];
                if (!item.isChild && !element.isChild) {
                    if (item && !item.genderdisplay || (item && item.Gender && item.Gender == element.gender)) {
                        arraypax.push(element);
                    }
                }
                else if (item.isChild && element.isChild) {
                    if (item && !item.genderdisplay || (item && item.Gender && item.Gender == element.gender)) {
                        arraypax.push(element);
                    }
                }
            }
            se.listpaxhint = [...arraypax];
        });
    }
    updateHintPaxName(item, value, listpaxhint) {
        var se = this;
        let arraypax = [];
        se.listpaxhint = [];
        if (item) {
            se.currentSelectPax = item;
            for (let index = 0; index < listpaxhint.length; index++) {
                const element = listpaxhint[index];
                if (!item.isChild && !element.isChild && value && element.fullName && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                    if (!item.genderdisplay || (item.Gender && item.Gender == element.gender)) {
                        arraypax.push(element);
                    }
                }
                else if (item.isChild && element.isChild && value && element.fullName && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                    if (!item.genderdisplay || (item.Gender && item.Gender == element.gender)) {
                        arraypax.push(element);
                    }
                }
            }
        }
        se.listpaxhint = [...arraypax];
    }
    updateHintPaxNameStep2(item, value, listpaxhint) {
        var se = this;
        let arraypax = [];
        for (let index = 0; index < listpaxhint.length; index++) {
            const element = listpaxhint[index];
            if (value && element.fullName && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                arraypax.push(element);
            }
        }
        se.listpaxhint = [...arraypax];
    }
    selectPaxHint(paxhint) {
        var se = this;
        if (paxhint) {
            if (se.currentSelectPax && se.activeStep == 1) {
                se.currentSelectPax.hoten = paxhint.fullName ? paxhint.fullName : se.currentSelectPax.hoten;
                se.currentSelectPax.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.currentSelectPax.phone;
                if (!se.currentSelectPax.isChild) {
                    se.currentSelectPax.genderdisplay = paxhint.gender == 1 ? 'Anh' : 'Chị';
                    se.currentSelectPax.Gender = paxhint.gender;
                }
                else {
                    se.currentSelectPax.genderdisplay = paxhint.gender == 1 ? 'Bé trai' : 'Bé gái';
                    se.currentSelectPax.Gender = paxhint.gender ? paxhint.gender : 1;
                }
                if (paxhint.dateOfBirth) {
                    se.currentSelectPax.BirthDay = paxhint.dateOfBirth;
                    se.currentSelectPax.errorDateofbirth = false;
                    se.currentSelectPax.textErrorDateofbirth = '';
                }
                se.showLotusPoint && paxhint.airlineMemberCode ? paxhint.airlineMemberCode : "";
                se.currentSelectPax.byPassCheckRegularName = true;
                se.currentSelectPax.errorName = false;
                se.currentSelectPax.errorGender = false;
                se.currentSelectPax.errorInfo = false;
                se.currentSelectPax.errorTextName = '';
                se.currentSelectPax.errorTextGender = '';
                se.currentSelectPax.errorTextSubName = '';
                se.currentSelectPax.textErrorInfo = '';
            }
            else {
                se.hoten = paxhint.fullName ? paxhint.fullName : se.hoten;
                se.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.phone;
            }
        }
    }
    hidePaxHint() {
        this.hidepaxhint = true;
    }
    editPaxInfo(item, idx) {
        var se = this;
        se.zone.run(() => {
            item.byPassCheckRegularName = false;
            if (item && idx == 1) {
                item.genderdisplay = '';
                item.hoten = '';
                item.airlineMemberCode = '';
                item.errorName = false;
                item.errorInfo = true;
                item.textErrorInfo = "Vui lòng nhập thông tin Người lớn " + item.id;
            }
            else if (item && idx == 2) {
                item.genderdisplay = '';
                item.hoten = '';
                item.BirthDay = '';
                item.airlineMemberCode = '';
                item.errorName = false;
                item.errorInfo = true;
                item.textErrorInfo = "Vui lòng nhập thông tin " + (!item.isinfant ? "Trẻ em" : "Em bé") + " " + item.iddisplay;
            }
        });
    }
    inputOnFocus(item, type) {
        var se = this;
        if (se.activeStep == 2 && se.hasinput) {
            se.hasinput = false;
        }
        se.clearError(item, type);
        if ((type == 2 && !item.hoten) || (type == 9 && !se.hoten)) {
            if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                se.inputtext = true;
                if (type == 2) {
                    se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                }
                else {
                    se.createHintPaxNameStep2(item, se.listPaxSuggestByMemberId);
                }
            }
            else {
                se.storage.get('listpaxcache').then((data) => {
                    if (data) {
                        se.inputtext = true;
                        if (type == 2) {
                            se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                        }
                        else {
                            se.createHintPaxNameStep2(item, se.listPaxSuggestByMemberId);
                        }
                    }
                });
            }
        }
    }
    createHintPaxNameStep2(item, listpaxhint) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let arraypax = [];
            for (let index = 0; index < listpaxhint.length; index++) {
                const element = listpaxhint[index];
                if (!element.isChild) {
                    arraypax.push(element);
                }
            }
            se.listpaxhint = [...arraypax];
        });
    }
    clearError(item, typeInput) {
        var se = this;
        if (typeInput == 1) {
            item.errorGender = false;
            item.errorTextGender = '';
        }
        if (typeInput == 2) {
            item.errorName = false;
            item.errorSubName = false;
            item.errorTextName = '';
            item.errorTextSubName = '';
            item.errorInfo = false;
            item.textErrorInfo = '';
        }
        if (typeInput == 3) {
            item.errorDateofbirth = false;
            item.errorTextBirthday = '';
        }
        if (typeInput == 9) {
            se.hoteninvalid = false;
            se.subnameinvalid = false;
        }
        if (typeInput == 10) {
            se.sodienthoaiinvalid = false;
        }
        if (typeInput == 11) {
            se.emailinvalid = false;
        }
    }
};
FlightComboAddDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-flightcomboadddetails',
        template: __webpack_require__(/*! ./flightcomboadddetails.html */ "./src/app/flightcomboadddetails/flightcomboadddetails.html"),
        styles: [__webpack_require__(/*! ./flightcomboadddetails.scss */ "./src/app/flightcomboadddetails/flightcomboadddetails.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Bookcombo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__["Facebook"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_13__["BizTravelService"]])
], FlightComboAddDetailsPage);



/***/ }),

/***/ "./src/app/providers/bizTravelService.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/bizTravelService.ts ***!
  \***********************************************/
/*! exports provided: BizTravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizTravelService", function() { return BizTravelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BizTravelService = class BizTravelService {
    constructor() {
        this.bizAccount = {
            taxCode: '',
            legalName: '',
            address: '',
            phone: '',
            balanceAvaiable: 0,
            balanceAvailableStr: '0',
            phoneOtp: '',
            supporter: null
        };
        this.accountBizTravelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
};
BizTravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BizTravelService);



/***/ })

}]);
//# sourceMappingURL=flightcomboadddetails-flightcomboadddetails-module.js.map