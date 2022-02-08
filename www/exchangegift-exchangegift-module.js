(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exchangegift-exchangegift-module"],{

/***/ "./src/app/exchangegift/exchangegift.html":
/*!************************************************!*\
  !*** ./src/app/exchangegift/exchangegift.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content padding>\r\n    <ion-row>\r\n        <ion-col class=\"no-padding\">\r\n            <div class=\"div-icon-close\" (click)=\"close()\"><ion-icon name=\"close\" ></ion-icon></div>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        \r\n        <div class=\"exchangegift-content\" *ngIf=\"record && userInfoData\">\r\n            <div><label class=\"item-title\">Đổi {{record.title}} - {{record.unitPoint| number:\"1.0\"}} điểm</label></div>\r\n            <div>Sau khi quy đổi, quý khách còn {{(userInfoData.point - record.unitPoint) | number:\"1.0\"}} điểm.</div>\r\n            <div>\r\n                <ion-row>\r\n                    <ion-list radio-group name=\"case\" class=\"list-location\" [(ngModel)]=\"location\">\r\n                        <ion-row>\r\n                            <ion-col class=\"no-padding\" (click)=\"radioCheck(1)\">\r\n                                <ion-radio value=\"1\" class=\"rd-location\" (click)=\"radioCheck(1)\"></ion-radio>\r\n                                <label class=\"rd-text\">Nhận tại văn phòng iVIVU</label>\r\n                                <div class=\"div-ivivu-office\" *ngIf=\"optCheck == 1\">\r\n                                        <div class=\"title-band\">Quý khách vui lòng đến một trong những địa điểm sau để nhận quà:\r\n                                            <div class=\"office-brand\"><span class=\"office-title\">Văn phòng tại Tp. Hồ Chí Minh:</span> Lầu 2, tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3. Tp.HCM.</div>\r\n                                            <div>Thời gian làm việc</div>\r\n                                            <div>\r\n                                                <div class=\"time-office\">Thứ 2 - Thứ 7: từ 07h30 đến 21h00</div>\r\n                                                <div  class=\"time-office\">CN: từ 07h30 đến 20h00</div>\r\n                                            </div>\r\n        \r\n                                            <div class=\"office-brand\"><span class=\"office-title\">Văn phòng tại Tp. Hà Nội:</span> Tầng 1, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội</div>\r\n                                            <div>Thời gian làm việc</div>\r\n                                            <div class=\"time-office\">Thứ 2 - Thứ 6: từ 09h30 đến 17h00</div>\r\n        \r\n                                            <div class=\"office-brand\"><span class=\"office-title\">Văn phòng tại Tp. Cần Thơ:</span> 166B Trần Hưng Đạo, P. An Nghiệp, Quận Ninh Kiều, Tp. Cần Thơ</div>\r\n                                            <div>Thời gian làm việc</div>\r\n                                            <div>\r\n                                                <div class=\"time-office\">Thứ 2 - Thứ 7: từ 07h30 đến 21h00</div>\r\n                                                <div class=\"time-office\">CN: từ 07h30 đến 20h00</div>\r\n                                            </div>\r\n        \r\n                                            <div class=\"office-brand\"><span class=\"office-title\">Văn phòng tại Tp. Đà Nẵng:</span> Lầu 2, PGT Tower, 220 Nguyễn Hữu Thọ, Quận Hải Châu, Tp. Đà Nẵng</div>\r\n                                            Thời gian làm việc\r\n                                            <div class=\"time-office\">Thứ 2 - Thứ 6: từ 08h00 đến 17h00</div>\r\n                                        </div>\r\n                                    </div>\r\n                            </ion-col>\r\n                            \r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <hr style=\"width:100%\">\r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <ion-col  class=\"no-padding\" (click)=\"radioCheck(2)\">\r\n                                <ion-radio value=\"2\" class=\"rd-location\" (click)=\"radioCheck(2)\"></ion-radio>\r\n                                <label class=\"rd-text\">Giao tới địa chỉ của bạn</label>\r\n                                <div class=\"div-customer-address\" *ngIf=\"optCheck == 2\">\r\n                                        <!-- Họ tên -->\r\n                                        <ion-row>\r\n                                            <ion-col col-3 class=\"input-label\">Họ tên</ion-col>\r\n                                            <ion-col col-9><ion-input id=\"ipName\" class=\"exchange-input\" [ngClass]=\"!nameValidate ? 'validate-error' : ''\" placeholder=\"Nhập họ tên...\" [(ngModel)]=\"customerName\"></ion-input></ion-col>\r\n                                        </ion-row>\r\n                                        <!-- Số di động -->\r\n                                        <ion-row>\r\n                                            <ion-col col-3 class=\"input-label\">Số di động</ion-col>\r\n                                            <ion-col col-9><ion-input id=\"ipMobile\" class=\"exchange-input\" [ngClass]=\"!mobileValidate ? 'validate-error' : ''\" placeholder=\"Nhập số di động...\" [(ngModel)]=\"customerMobile\"></ion-input></ion-col>\r\n                                        </ion-row>\r\n                                        <!-- Địa chỉ -->\r\n                                        <ion-row>\r\n                                            <ion-col col-3 class=\"input-label\">Địa chỉ</ion-col>\r\n                                            <ion-col col-9><ion-textarea id=\"ipAddress\" class=\"exchange-input\" [ngClass]=\"!addressValidate ? 'validate-error' : ''\" placeholder=\"Nhập địa chỉ...\" [(ngModel)]=\"customerAddress\"></ion-textarea></ion-col>\r\n                                        </ion-row>\r\n                                    </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-list>\r\n                </ion-row>\r\n            </div>\r\n        </div>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col class=\"no-padding\">\r\n            <button ion-button round outline class=\"button btn-cancel\" (click)=\"close()\" >Hủy</button>\r\n        </ion-col>\r\n        <ion-col class=\"no-padding\">\r\n            <button ion-button round outline class=\"button btn-exchange\" [disabled]=\"!optCheck\" (click)=\"exchange()\" >Đổi quà ngay</button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/exchangegift/exchangegift.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/exchangegift/exchangegift.module.ts ***!
  \*****************************************************/
/*! exports provided: ExchangeGiftPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeGiftPageModule", function() { return ExchangeGiftPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _exchangegift__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exchangegift */ "./src/app/exchangegift/exchangegift.ts");







let ExchangeGiftPageModule = class ExchangeGiftPageModule {
};
ExchangeGiftPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _exchangegift__WEBPACK_IMPORTED_MODULE_6__["ExchangeGiftPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _exchangegift__WEBPACK_IMPORTED_MODULE_6__["ExchangeGiftPage"]
                }
            ])
        ],
    })
], ExchangeGiftPageModule);



/***/ }),

/***/ "./src/app/exchangegift/exchangegift.scss":
/*!************************************************!*\
  !*** ./src/app/exchangegift/exchangegift.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".exchangegift-content {\n  padding: 0;\n  width: 100%;\n}\n\n.div-icon-close {\n  float: right;\n  opacity: 0.6;\n  font-size: 24px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.radio-checked {\n  border-color: #26bed6 !important;\n}\n\n.radio-inner {\n  left: 2px;\n  top: 2px;\n  border-radius: 50%;\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background-color: #26bed6 !important;\n}\n\n.radio-icon {\n  top: 3px !important;\n}\n\n.item-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: #003c71;\n}\n\n.list-location {\n  width: 100%;\n}\n\n.office-brand {\n  padding-top: 16px;\n}\n\n.title-band {\n  padding: 8px 0px 0px 0px;\n}\n\n.office-title {\n  font-weight: 500;\n  font-style: italic;\n}\n\n.time-office {\n  padding-left: 16px;\n}\n\n.btn-cancel, .btn-exchange {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 98%;\n  height: 44px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.exchange-input {\n  border: solid 1px #cdcdcd;\n  border-radius: 5px;\n}\n\n.input-label {\n  align-self: center;\n  color: #848484;\n}\n\n.validate-error {\n  border: solid 1px red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2V4Y2hhbmdlZ2lmdC9leGNoYW5nZWdpZnQuc2NzcyIsInNyYy9hcHAvZXhjaGFuZ2VnaWZ0L2V4Y2hhbmdlZ2lmdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNBUjs7QURFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NSOztBRENJO0VBQ0ksVUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0NBQUE7QUNHUjs7QURESTtFQUNJLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNJUjs7QURGSTtFQUNJLG1CQUFBO0FDS1I7O0FESEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTVI7O0FESkk7RUFDSSxXQUFBO0FDT1I7O0FETEk7RUFDSSxpQkFBQTtBQ1FSOztBRE5JO0VBQ0ksd0JBQUE7QUNTUjs7QURQSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNVUjs7QURSSTtFQUNJLGtCQUFBO0FDV1I7O0FEUkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNXUjs7QURUSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNZUjs7QURWSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ2FSOztBRFhJO0VBQ0kscUJBQUE7QUNjUiIsImZpbGUiOiJzcmMvYXBwL2V4Y2hhbmdlZ2lmdC9leGNoYW5nZWdpZnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmV4Y2hhbmdlZ2lmdC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGl2LWljb24tY2xvc2V7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAubm8tcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnJhZGlvLWNoZWNrZWQge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJhZGlvLWlubmVyIHtcclxuICAgICAgICBsZWZ0OiAycHg7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yYWRpby1pY29ue1xyXG4gICAgICAgIHRvcDozcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pdGVtLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgfVxyXG4gICAgLmxpc3QtbG9jYXRpb257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAub2ZmaWNlLWJyYW5ke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLWJhbmR7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDBweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm9mZmljZS10aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIH1cclxuICAgIC50aW1lLW9mZmljZXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jYW5jZWwsIC5idG4tZXhjaGFuZ2V7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmIDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmV4Y2hhbmdlLWlucHV0e1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjZGNkY2Q7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWxhYmVse1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzg0ODQ4NDtcclxuICAgIH1cclxuICAgIC52YWxpZGF0ZS1lcnJvcntcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICIsIi5leGNoYW5nZWdpZnQtY29udGVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LWljb24tY2xvc2Uge1xuICBmbG9hdDogcmlnaHQ7XG4gIG9wYWNpdHk6IDAuNjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yYWRpby1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5yYWRpby1pbm5lciB7XG4gIGxlZnQ6IDJweDtcbiAgdG9wOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xufVxuXG4ucmFkaW8taWNvbiB7XG4gIHRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmxpc3QtbG9jYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm9mZmljZS1icmFuZCB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4udGl0bGUtYmFuZCB7XG4gIHBhZGRpbmc6IDhweCAwcHggMHB4IDBweDtcbn1cblxuLm9mZmljZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLnRpbWUtb2ZmaWNlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4uYnRuLWNhbmNlbCwgLmJ0bi1leGNoYW5nZSB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogNDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4Y2hhbmdlLWlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjODQ4NDg0O1xufVxuXG4udmFsaWRhdGUtZXJyb3Ige1xuICBib3JkZXI6IHNvbGlkIDFweCByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/exchangegift/exchangegift.ts":
/*!**********************************************!*\
  !*** ./src/app/exchangegift/exchangegift.ts ***!
  \**********************************************/
/*! exports provided: ExchangeGiftPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeGiftPage", function() { return ExchangeGiftPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");







let ExchangeGiftPage = class ExchangeGiftPage {
    constructor(platform, navCtrl, toastCtrl, zone, storage, alertCtrl, renderer, gf) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.renderer = renderer;
        this.gf = gf;
        this.optCheck = 0;
        this.nameValidate = true;
        this.mobileValidate = true;
        this.addressValidate = true;
        let self = this;
        let params = self.gf.getParams('exchangegift');
        if (params && params.userinfo) {
            self.loadData(params.record, params.userinfo);
        }
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.navigateBack('/showmore');
            });
        });
        gf.googleAnalytion('exchangegift', 'load', '');
    }
    ngOnInit() {
    }
    loadData(rc, uinfo) {
        var se = this;
        se.record = rc;
        se.userInfoData = uinfo;
    }
    close() {
        this.navCtrl.navigateBack('/showmore');
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
    radioCheck(val) {
        this.zone.run(() => {
            this.optCheck = val;
            var itemRadioButton = document.getElementsByClassName('radio-icon');
            if (val == 1) {
                itemRadioButton[0].classList.add('radio-checked');
                itemRadioButton[1].classList.remove('radio-checked');
                itemRadioButton[0].nextElementSibling.setAttribute('aria-checked', 'true');
                itemRadioButton[1].nextElementSibling.setAttribute('aria-checked', 'false');
            }
            else {
                itemRadioButton[1].classList.add('radio-checked');
                itemRadioButton[0].classList.remove('radio-checked');
                itemRadioButton[1].nextElementSibling.setAttribute('aria-checked', 'true');
                itemRadioButton[0].nextElementSibling.setAttribute('aria-checked', 'false');
            }
        });
    }
    filterPhone(phone) {
        var pattern = new RegExp("0[9|8|1|7|3|5]([0-9]|\s|-|\.){8,12}");
        return pattern.test(phone);
    }
    exchange() {
        if (document.getElementById('ipName') && !this.customerName) {
            this.nameValidate = false;
            this.setInputFocus("ipName");
            return;
        }
        else if (this.customerName) {
            this.nameValidate = true;
        }
        if (document.getElementById('ipMobile') && !this.filterPhone(this.customerMobile)) {
            this.mobileValidate = false;
            this.setInputFocus("ipMobile");
            return;
        }
        else if (this.filterPhone(this.customerMobile)) {
            this.mobileValidate = true;
        }
        if (document.getElementById('ipAddress') && !this.customerAddress) {
            this.addressValidate = false;
            this.setInputFocus("ipAddress");
            return;
        }
        else if (this.customerAddress) {
            this.addressValidate = true;
        }
        if (this.record) {
            var obj = {
                "redeemInfo": {
                    "itemId": this.record.id,
                    "itemType": this.record.rewardTypeId,
                    "pickupType": this.optCheck,
                    "point": this.record.unitPoint,
                    "fullname": this.optCheck == 2 ? this.customerName : "",
                    "phone": this.optCheck == 2 ? this.customerMobile : "",
                    "address": this.optCheck == 2 ? this.customerAddress : ""
                }
            };
            var se = this;
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        method: 'POST',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + "/api/Dashboard/RedeemItem",
                        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json-patch+json',
                            authorization: text
                        },
                        body: JSON.stringify(obj),
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                        if (error) {
                            error.page = "exchangegift";
                            error.func = "exchange";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                            throw new Error(error);
                        }
                        ;
                        if (response.statusCode != 200) {
                            var objError = {
                                page: "exchangegift",
                                func: "exchange",
                                message: response.statusMessage,
                                content: response.body,
                                param: JSON.stringify(options)
                            };
                            _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                        }
                        if (response.statusCode == 200) {
                            var htmlstr = "<div class='ct-1'>Chúc mừng quý khách Phạm Đức Anh đã đổi quà tặng thành công.</div>";
                            htmlstr += "<div class='ct-2'>Thời gian dự kiến nhận được quà từ 3 - 5 ngày làm việc (trừ thứ 7, chủ nhật & lễ Tết).</div>";
                            htmlstr += "<div class='ct-3'>Nếu cần sự hỗ trợ vui lòng liên hệ với iVIVU.com qua email tc@ivivu.com hoặc số tổng đài sau:</div>";
                            htmlstr += "<div class='ct-4'>Hồ Chí Minh: 1900 1870</div>";
                            htmlstr += "<div class='ct-5'>Hà Nội: 1900 2045</div>";
                            htmlstr += "<div class='ct-6'>Cần Thơ: 1900 2087</div>";
                            htmlstr += "<div class='ct-7'>Đà Nẵng: (023) 6710 9566</div>";
                            se.presentAlert('', htmlstr, text);
                        }
                    });
                }
            });
        }
    }
    setInputFocus(name) {
        const element = document.getElementById(name);
        this.renderer.invokeElementMethod(element, 'focus', []);
    }
    presentAlert(title, msg, token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
            alert.dismiss(() => {
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + "/api/account/reloadTokenClaims",
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json-patch+json',
                        authorization: token
                    },
                    body: {},
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (error) {
                        error.page = "reloadTokenClaims";
                        error.func = "exchange";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "reloadTokenClaims",
                            func: "exchange",
                            message: response.statusMessage,
                            content: response.body,
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                });
                this.navCtrl.navigateBack('/showmore');
            });
        });
    }
};
ExchangeGiftPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exchangegift',
        template: __webpack_require__(/*! ./exchangegift.html */ "./src/app/exchangegift/exchangegift.html"),
        styles: [__webpack_require__(/*! ./exchangegift.scss */ "./src/app/exchangegift/exchangegift.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"]])
], ExchangeGiftPage);



/***/ })

}]);
//# sourceMappingURL=exchangegift-exchangegift-module.js.map