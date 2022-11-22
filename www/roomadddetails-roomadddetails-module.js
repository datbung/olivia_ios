(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roomadddetails-roomadddetails-module"],{

/***/ "./src/app/roomadddetails/roomadddetails.html":
/*!****************************************************!*\
  !*** ./src/app/roomadddetails/roomadddetails.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center;height: 48px;\">\n          <div style=\"align-self: center\" >\n            <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\"  (click)=\"goback()\">\n                <!-- <ion-icon (click)=\"goback()\" color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n                <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n            \n            <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thông tin khách</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div *ngIf=\"ischeckpayment\" style=\"text-align: center\">\n      <img  src=\"./assets/step/step_2.svg\">\n  </div>\n\n<div *ngIf=\"!ischeckpayment\" style=\"text-align: center\">\n  <img src=\"./assets/step/fc_step_2.svg\">\n  </div>\n\n<div style=\"margin-top: 10px\">\n  <ion-label class=\"text\">\n    Khách nhận phòng\n  </ion-label>\n</div>\n<div style=\"margin-left: -5px\">\n  <ion-row >\n      <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n              <ion-label class=\"cls-label\" position=\"stacked\">Họ Tên</ion-label>\n              <ion-input class=\"label-input\" [(ngModel)]=\"hoten\" type=\"text\" (ionInput)=\"inputFocus($event)\" (ionBlur)=\"inputLostFocus(null)\" (ionFocus)=\"inputOnFocus(null, 9)\" required></ion-input>\n          </ion-item>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item style=\"--padding-start: 0px\">\n        <ion-label class=\"cls-label\" position=\"stacked\">Điện thoại</ion-label>\n        <ion-input class=\"label-input\" [(ngModel)]=\"phone\" maxlength=10 type=\"tel\" required></ion-input>\n\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"!validemail\">\n    <ion-col size=\"12\">\n      <ion-item style=\"--padding-start: 0px\">\n        <ion-label class=\"cls-label\" position=\"stacked\">Email</ion-label>\n        <ion-input class=\"label-input\" [(ngModel)]=\"_email\" type=\"email\" required></ion-input>\n\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row *ngIf=\"arrbed.length>1\" style=\"margin-left: 15px;margin-top: 10px;\" radio-group>\n    <ion-col *ngFor=\"let item of arrbed; let itemindex = index\" color=\"xanh\" col-6>\n\n      <ion-radio value={{item.text}} class=\"rd-departure\" (click)=\"itemrd(item.text,itemindex)\"\n        checked=\"{{item.ischeck}}\"></ion-radio>\n      <label class=\"rd-text\">{{item.text}}</label>\n\n    </ion-col>\n\n  </ion-row> -->\n</div>\n<div class=\"div-title-other-request\">\n  <ion-label class=\"text\">\n    Thông tin yêu cầu khác\n  </ion-label>\n</div>\n    <ion-row>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px;margin-left: -5px;\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Yêu cầu khác</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"note\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n<ion-row *ngIf=\"!Roomif.ExcludeVAT\" style=\"margin-top: 10px\">\n  <ion-checkbox (ionChange)=\"edit(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n  <ion-label style=\"margin: 4px 10px\">Xuất hóa đơn điện tử</ion-label>\n</ion-row>\n\n<div *ngIf=\"ischeck && !Roomif.ExcludeVAT\">\n    <ion-row style=\"margin-left: -5px\">\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-label\" position=\"stacked\">Tên công ty</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"companyname\" type=\"text\" (ionInput)=\"textChange()\" required></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-label\" position=\"stacked\">Địa chỉ</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-label\" position=\"stacked\">Mã số thuế</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div style=\"margin-left: 5px;margin-top: 10px\">\n      <ion-checkbox (ionChange)=\"showNameMail($event)\" [checked]=\"ishideNameMail\" class=\"ion-checkbox\" color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n    </div>\n    <div *ngIf=\"!ishideNameMail\">\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-label\" position=\"stacked\">Họ tên</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-label\" position=\"stacked\">Email nhận HĐ</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </div>\n</div>\n</ion-content>\n<ion-footer>\n  <div class='div-close-paxhint' *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\" (click)=\"hidePaxHint()\"><img src='./assets/ic_close_b.svg'></div>\n  <div class=\"div-pax-hint\" *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\">\n                  \n    <div *ngFor=\"let itempax of listpaxhint\" class=\"d-flex m-bottom-16\" (click)=\"selectPaxHint(itempax)\">\n        <div class=\"icon-pax\">\n                <img src=\"./assets/ic_flight/icon-pax.svg\">\n        </div>\n        <div class=\"text-pax-hint\">\n            {{itempax.fullName}}\n        </div>\n    </div>\n    \n  </div>\n  \n  <div *ngIf=\" (priceshow>0||ischeckbtn==true)\" style=\"background-color: #ffffff; text-align: center;\">\n    <div *ngIf=\"showInstallmentButton else hideInstallmentButton\" class=\"div-button-flex\">\n      <button  (click)=\"installment()\" ion-button round outline class=\"button button-installment\">Trả góp <br><p class=\"text-sub\">chỉ từ {{installmentPriceStr}}</p></button>\n      <button (click)=\"next()\" ion-button round outline class=\"button button-payment\">Thanh toán ngay</button>\n    </div>\n    <ng-template #hideInstallmentButton>\n      <button (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n    </ng-template>\n  </div>\n  <div *ngIf=\"priceshow==0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next1()\" ion-button round outline class=\"button button2\">Hoàn thành đặt phòng</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roomadddetails/roomadddetails.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/roomadddetails/roomadddetails.module.ts ***!
  \*********************************************************/
/*! exports provided: RoomadddetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomadddetailsPageModule", function() { return RoomadddetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roomadddetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roomadddetails */ "./src/app/roomadddetails/roomadddetails.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let RoomadddetailsPageModule = class RoomadddetailsPageModule {
};
RoomadddetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roomadddetails__WEBPACK_IMPORTED_MODULE_5__["RoomadddetailsPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roomadddetails__WEBPACK_IMPORTED_MODULE_5__["RoomadddetailsPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RoomadddetailsPageModule);



/***/ }),

/***/ "./src/app/roomadddetails/roomadddetails.scss":
/*!****************************************************!*\
  !*** ./src/app/roomadddetails/roomadddetails.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button4 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 30%;\n  font-size: 12px;\n}\n\n.button-payment {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n\n.button-installment {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin-right: 8px;\n  padding: 0;\n  text-align: center !important;\n}\n\n.list-departure {\n  margin: 0;\n  display: inline-flex;\n}\n\n.rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n\n.radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n\n.radio-md .radio-checked {\n  border-color: #26bed6;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.cls-label {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-name {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-input {\n  font-size: 16px;\n  font-weight: 300;\n  color: #222222;\n}\n\n.label-input-order {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.div-title-other-request {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222222;\n  padding-top: 30px;\n}\n\n.div-title-export-order {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222222;\n  padding-top: 12px;\n}\n\n.text-sub {\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.36px;\n  text-align: center !important;\n}\n\n.div-button-flex {\n  display: flex;\n  width: 100%;\n  margin: 0 8px;\n}\n\n.label-input {\n  font-size: 16px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yb29tYWRkZGV0YWlscy9yb29tYWRkZGV0YWlscy5zY3NzIiwic3JjL2FwcC9yb29tYWRkZGV0YWlscy9yb29tYWRkZGV0YWlscy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNDUjs7QURDSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNDUjs7QURDSTtFQUVFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ0NOOztBRENJO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0FDRVI7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VSOztBRENJO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0VSOztBREFJO0VBQ0kscUJBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNJUjs7QURGTTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJUjs7QURETTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJUjs7QURGSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNLTjs7QURISTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNNTjs7QURISTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ01OOztBREpJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDT047O0FESEk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ01OOztBREpJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDT047O0FETEk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNRTjs7QUROSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1NOIiwiZmlsZSI6InNyYy9hcHAvcm9vbWFkZGRldGFpbHMvcm9vbWFkZGRldGFpbHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAudGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9IFxuICAgIC5idXR0b240XG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5idXR0b24tcGF5bWVudFxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIH0gXG4gICAgLmJ1dHRvbi1pbnN0YWxsbWVudFxuICAgIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBjb2xvcjogI2ZmOTUwMDtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH0gXG4gICAgLmxpc3QtZGVwYXJ0dXJle1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cblxuICAgIC5yZC1kZXBhcnR1cmUgLnJhZGlvLWljb257XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgfVxuICAgXG4gICAgLnJhZGlvLW1kIC5yYWRpby1pbm5lcntcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgfVxuICAgIC5yYWRpby1tZCAucmFkaW8tY2hlY2tlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICB9XG4gICAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICAgIH0gIFxuICAgICAgLmNscy1sYWJlbFxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgfVxuXG4gICAgICAubGFiZWwtbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG4gICAgLmxhYmVsLWlucHV0e1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cbiAgICAubGFiZWwtaW5wdXQtb3JkZXJ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuXG4gICAgLmRpdi10aXRsZS1vdGhlci1yZXF1ZXN0e1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgfVxuICAgIC5kaXYtdGl0bGUtZXhwb3J0LW9yZGVye1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgXG4gICAgLnRleHQtc3Vie1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGl2LWJ1dHRvbi1mbGV4e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICB9XG4gICAgLmxhYmVsLWlucHV0e1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLmlvbi1jaGVja2JveHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luOiAtMnB4O1xuICAgIH0iLCIudGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJ1dHRvbjQge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMzAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5idXR0b24tcGF5bWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLmJ1dHRvbi1pbnN0YWxsbWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZGVwYXJ0dXJlIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnJkLWRlcGFydHVyZSAucmFkaW8taWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5yYWRpby1tZCAucmFkaW8taW5uZXIge1xuICBsZWZ0OiAxcHg7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbn1cblxuLnJhZGlvLW1kIC5yYWRpby1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uY2xzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmxhYmVsLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4ubGFiZWwtaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4ubGFiZWwtaW5wdXQtb3JkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZGl2LXRpdGxlLW90aGVyLXJlcXVlc3Qge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmRpdi10aXRsZS1leHBvcnQtb3JkZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnRleHQtc3ViIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogLTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roomadddetails/roomadddetails.ts":
/*!**************************************************!*\
  !*** ./src/app/roomadddetails/roomadddetails.ts ***!
  \**************************************************/
/*! exports provided: RoomadddetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomadddetailsPage", function() { return RoomadddetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../confirmemail/confirmemail.page */ "./src/app/confirmemail/confirmemail.page.ts");












let RoomadddetailsPage = class RoomadddetailsPage {
    constructor(platform, navCtrl, zone, bookcombo, toastCtrl, Roomif, storage, loadingCtrl, booking, gf, keyboard, activityService, alertCtrl, modalCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.bookcombo = bookcombo;
        this.toastCtrl = toastCtrl;
        this.Roomif = Roomif;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.booking = booking;
        this.gf = gf;
        this.keyboard = keyboard;
        this.activityService = activityService;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.phone = "";
        this.validemail = true;
        this.isKeyboardHide = true;
        this.checkchangeemail = false;
        this.ishideNameMail = true;
        this.inputtext = false;
        this.listPaxSuggestByMemberId = [];
        this.listpaxhint = [];
        this.hidepaxhint = false;
        this.ischeckpayment = Roomif.ischeckpayment;
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
                this.phone = infocus.phone;
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
        this.note = Roomif.notetotal;
        this.room = this.Roomif.arrroom;
        this.jsonroom = Roomif.jsonroom;
        this.ischeckpoint = this.Roomif.ischeckpoint;
        if (this.ischeckpoint == true || this.Roomif.promocode) {
            if (this.Roomif.priceshow == "0") {
                this.priceshow = this.Roomif.priceshow;
            }
            else if (this.Roomif.priceshow) {
                this.priceshow = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
            }
            else {
                this.priceshow = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
            }
        }
        else {
            this.ischeckbtn = true;
        }
        if (Roomif.ischeck) {
            this.ischeck = Roomif.ischeck;
        }
        var priceBooking = "";
        if (this.Roomif.priceshow) {
            priceBooking = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
        }
        else if (this.booking.cost) {
            priceBooking = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
        }
        this.showInstallmentButton = (priceBooking * 1 >= 3000000 && this.Roomif.payment == 'AL') ? true : false;
        this.getInstallment(priceBooking * 1);
        this.zone.run(() => {
            let priceinstallment = Math.round(priceBooking * 1 / 12 * 1.05);
            this.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.') + "đ/tháng";
        });
        this.GetUserInfo();
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetListNameHotel?memberid=' + jti, {}, {}, 'flightadddetails', 'GetListName').then((data) => {
                    if (data && data.length > 0) {
                        this.listPaxSuggestByMemberId = [...data];
                    }
                });
            }
        });
    }
    ngOnInit() {
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
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
    ionViewWillEnter() {
        this.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
        });
    }
    next() {
        this.checkchangeemail = false;
        this.Roomif.notetotal = "";
        this.gf.googleAnalytion('roomadddetails', 'add_payment_info', '');
        if (this.hoten) {
            this.hoten = this.hoten.trim();
            var checktext = this.hasWhiteSpace(this.hoten);
            if (!checktext) {
                this.presentToastHo();
                return;
            }
        }
        else {
            this.presentToastHo();
            return;
        }
        this.clearClonePage('page-roompaymentselect');
        this.Roomif.order = "";
        if (this.ischeck) {
            if (this.phonenumber(this.phone)) {
                if (!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)) {
                    this.presentToastEmail();
                    this.validemail = false;
                    return;
                }
                else if (this._email) {
                    var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                    if (checkappleemail) {
                        this.checkchangeemail = true;
                        this.showConfirmEmail(0);
                    }
                }
                this.booking.CEmail = this._email;
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
                    this.Roomif.phone = this.phone;
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
                    this.Roomif.notetotal = this.note;
                    this.Roomif.ischeck = this.ischeck;
                    this.storage.set("email", this._email);
                    if (!this.checkchangeemail) {
                        if (this.Roomif.payment == 'AL') {
                            this.navCtrl.navigateForward("roompaymentselect");
                        }
                        else {
                            this.paymentnotAL();
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
            if (this.phonenumber(this.phone)) {
                if (!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)) {
                    this.presentToastEmail();
                    this.validemail = false;
                    return;
                }
                else if (this._email) {
                    var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                    if (checkappleemail) {
                        this.checkchangeemail = true;
                        this.showConfirmEmail(0);
                    }
                }
                this.booking.CEmail = this._email;
                this.Roomif.hoten = this.hoten;
                this.Roomif.phone = this.phone;
                this.Roomif.notetotal = this.note;
                this.Roomif.ischeck = this.ischeck;
                this.clearClonePage('page-roompaymentselect');
                this.Roomif.notetotal = this.note;
                this.storage.set("email", this._email);
                if (!this.checkchangeemail) {
                    if (this.Roomif.payment == 'AL') {
                        this.navCtrl.navigateForward("roompaymentselect");
                    }
                    else {
                        this.paymentnotAL();
                    }
                }
            }
            else {
                this.presentToastPhone();
            }
        }
    }
    next1() {
        this.checkchangeemail = false;
        this.Roomif.notetotal = "";
        if (this.hoten) {
            this.hoten = this.hoten.trim();
            var checktext = this.hasWhiteSpace(this.hoten);
            if (!checktext) {
                this.presentToastHo();
                return;
            }
        }
        else {
            this.presentToastHo();
            return;
        }
        this.Roomif.order = "";
        this.clearClonePage('page-roompaymentdoneean');
        if (this.ischeck) {
            if (this.phonenumber(this.phone)) {
                if (!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)) {
                    this.presentToastEmail();
                    this.validemail = false;
                    return;
                }
                else if (this._email) {
                    var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                    if (checkappleemail) {
                        this.checkchangeemail = true;
                        this.showConfirmEmail(1);
                    }
                }
                this.booking.CEmail = this._email;
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
                    this.Roomif.phone = this.phone;
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
                    this.Roomif.notetotal = this.note;
                    this.Roomif.ischeck = this.ischeck;
                    this.storage.set("email", this._email);
                    if (!this.checkchangeemail) {
                        this.pushdata();
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
            if (this.phonenumber(this.phone)) {
                this.Roomif.hoten = this.hoten;
                this.Roomif.phone = this.phone;
                this.Roomif.notetotal = this.note;
                this.Roomif.ischeck = this.ischeck;
                this.clearClonePage('page-roompaymentdoneean');
                this.Roomif.notetotal = this.note;
                if (!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)) {
                    this.presentToastEmail();
                    this.validemail = false;
                    return;
                }
                else if (this._email) {
                    this.booking.CEmail = this._email;
                    var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                    if (checkappleemail) {
                        this.checkchangeemail = true;
                        this.showConfirmEmail(1);
                    }
                    else {
                        this.pushdata();
                    }
                }
            }
            else {
                this.presentToastPhone();
            }
        }
    }
    pushdata() {
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
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'content-type': 'application/json'
            },
            body: {
                RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
                CName: se.Roomif.hoten,
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
                PenaltyDescription: se.Roomif.textcancel,
                companycontactname: se.Roomif.nameOrder
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roomadddetails",
                    func: "next",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roomadddetails";
                error.func = "next";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                if (body.error == 0) {
                    var id = body.code;
                    var total = se.Roomif.pricepoint;
                    var ischeck = '1';
                    se.clearClonePage('page-roompaymentdoneean');
                    se.loader.dismiss();
                    var priceBooking = "";
                    if (se.Roomif.priceshow) {
                        priceBooking = se.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
                    }
                    else if (se.booking.cost) {
                        priceBooking = se.booking.cost.replace(/\./g, '').replace(/\,/g, '');
                    }
                    if (priceBooking) {
                        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + priceBooking + '&orderCode=' + body.code + '&buyerPhone=' + se.Roomif.phone + '&memberId=' + se.jti;
                        se.gf.CreateUrl(url);
                    }
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
                error.page = "roomadddetails";
                error.func = "pushdata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentdoneean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentdoneean";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_8___default()(au.auth_token);
                            se.storage.remove('point');
                            se.storage.set('point', decoded.point);
                            se.navCtrl.navigateForward('/hoteldetail/' + this.booking.HotelId);
                        });
                    }
                });
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
    presentToastHo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập họ tên",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastTen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập tên",
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
    ionViewDidLoad() {
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
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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
    goback() {
        this.navCtrl.navigateBack('roomdetailreview');
    }
    paymentnotAL() {
        this.presentLoading();
        var se = this;
        se.jsonroom.RoomClasses = se.room;
        se.timestamp = Date.now();
        if (se.booking.CEmail) {
            var Invoice = 0;
            if (se.Roomif.order) {
                Invoice = 1;
            }
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
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
                    paymentMethod: '51',
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
                    PenaltyDescription: se.Roomif.textcancel,
                    companycontactname: this.Roomif.nameOrder
                },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roomadddetails",
                        func: "next",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roomadddetails";
                    error.func = "next";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                }
                ;
                if (body.error == 0) {
                    var code = body.code;
                    var stt = body.bookingStatus;
                    var priceBooking = "";
                    if (se.Roomif.priceshow) {
                        priceBooking = se.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
                    }
                    else if (se.booking.cost) {
                        priceBooking = se.booking.cost.replace(/\./g, '').replace(/\,/g, '');
                    }
                    if (priceBooking) {
                        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + priceBooking + '&orderCode=' + body.code + '&buyerPhone=' + se.Roomif.phone + '&memberId=' + se.jti;
                        se.gf.CreateUrl(url);
                    }
                    se.navCtrl.navigateForward('/roompaymentdone/' + code + '/' + se.Roomif.payment);
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
            });
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
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }
    getInstallment(price) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/getInstallmentInfo',
            qs: {
                amount: price.toString()
            },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            var rs = JSON.parse(body);
            se.activityService.objBankInStallment = rs;
        });
    }
    checkInput() {
        this.checkchangeemail = false;
        var se = this, res = true;
        if (se.hoten) {
            se.hoten = se.hoten.trim();
            var checktext = se.hasWhiteSpace(se.hoten);
            if (!checktext) {
                se.presentToastHo();
                res = false;
            }
            else if (!se.hoten) {
                se.presentToastHo();
                res = false;
            }
            else if (!se.validateEmail(se._email) || !se._email || !se.gf.checkUnicodeCharactor(this._email)) {
                se.presentToastEmail();
                se.validemail = false;
                res = false;
            }
            else if (!se.phone || !se.phonenumber(se.phone)) {
                se.presentToastPhone();
                res = false;
            }
            else if (se.ischeck && !(se.companyname && se.address && se.tax)) {
                se.presentToastOrder();
                res = false;
            }
        }
        else if (!se.hoten) {
            se.presentToastHo();
            res = false;
        }
        else if (!se.validateEmail(se._email) || !se._email || !se.gf.checkUnicodeCharactor(this._email)) {
            se.presentToastEmail();
            se.validemail = false;
            res = false;
        }
        else if (!se.phone || !se.phonenumber(se.phone)) {
            se.presentToastPhone();
            res = false;
        }
        else if (se.ischeck && !(se.companyname && se.address && se.tax)) {
            se.presentToastOrder();
            res = false;
        }
        else if (this._email) {
            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
            if (checkappleemail) {
                this.checkchangeemail = true;
                this.showConfirmEmail(2);
            }
        }
        if (res) {
            if (se._email) {
                se.booking.CEmail = se._email;
            }
            if (se.ischeck) {
                if (se.companyname && se.address && se.tax) {
                    se.Roomif.hoten = se.hoten;
                    se.Roomif.phone = se.phone;
                    se.Roomif.companyname = se.companyname;
                    se.Roomif.address = se.address;
                    se.Roomif.tax = se.tax;
                    se.Roomif.notetotal = se.note;
                    se.Roomif.addressorder = se._email;
                    se.Roomif.nameOrder = se.hoten;
                    if (!se.ishideNameMail) {
                        se.Roomif.addressorder = se.emailhddt;
                        se.Roomif.nameOrder = se.hotenhddt;
                    }
                    se.Roomif.order = se.companyname + "," + se.address + "," + se.tax + "," + se.addressorder;
                    se.Roomif.notetotal = se.note;
                    se.Roomif.ischeck = se.ischeck;
                }
            }
            else {
                se.Roomif.hoten = se.hoten;
                se.Roomif.phone = se.phone;
                se.Roomif.notetotal = se.note;
                se.Roomif.ischeck = se.ischeck;
                se.Roomif.notetotal = se.note;
            }
        }
        return res;
    }
    installment() {
        var se = this;
        if (!se.checkInput()) {
            return;
        }
        if (!se.activityService.objBankInStallment) {
            se.presentToastWarning("Đang tính giá trả góp, xin quý khách vui lòng đợi trong giây lát!");
            return;
        }
        let checkappleemail = (se._email.includes("appleid") || se._email.includes('vivumember.info'));
        if (!checkappleemail) {
            se.navCtrl.navigateForward('/installmentpayment');
        }
        else {
            this.showConfirmEmail(2);
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
    showConfirmEmail(input) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Đổi email',
                        role: 'OK',
                        handler: () => {
                            this.showChangeEmail(input);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showChangeEmail(input) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const modal = yield se.modalCtrl.create({
                component: _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_10__["ConfirmemailPage"],
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
                        if (input == 0) {
                            if (se.Roomif.payment == 'AL') {
                                se.navCtrl.navigateForward("roompaymentselect");
                            }
                            else {
                                se.paymentnotAL();
                            }
                        }
                        else if (input == 1) {
                            se.pushdata();
                        }
                        else if (input == 2) {
                            se.navCtrl.navigateForward('/installmentpayment');
                        }
                    }
                }
            });
        });
    }
    showNameMail(ev) {
        this.ishideNameMail = ev.detail.checked;
    }
    textChange() {
    }
    updateHintPaxName(value, listpaxhint) {
        var se = this;
        let arraypax = [];
        se.listpaxhint = [];
        for (let index = 0; index < listpaxhint.length; index++) {
            const element = listpaxhint[index];
            if (element.fullName && value && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                arraypax.push(element);
            }
        }
        se.listpaxhint = [...arraypax];
    }
    inputFocus(event) {
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
                se.updateHintPaxName(event.target.value, se.listPaxSuggestByMemberId);
            }
        });
    }
    inputLostFocus(item) {
        var se = this;
        setTimeout(() => {
            se.zone.run(() => {
                se.inputtext = false;
                if (se.hidepaxhint) {
                    item.hidePaxHint = true;
                    se.hidepaxhint = false;
                }
            });
        }, 400);
    }
    createHintPaxName(item, listpaxhint) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.listpaxhint = [...listpaxhint];
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
RoomadddetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-roomadddetails',
        template: __webpack_require__(/*! ./roomadddetails.html */ "./src/app/roomadddetails/roomadddetails.html"),
        providers: [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"]],
        styles: [__webpack_require__(/*! ./roomadddetails.scss */ "./src/app/roomadddetails/roomadddetails.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], RoomadddetailsPage);



/***/ })

}]);
//# sourceMappingURL=roomadddetails-roomadddetails-module.js.map