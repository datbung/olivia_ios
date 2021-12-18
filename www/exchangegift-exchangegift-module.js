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

module.exports = ".exchangegift-content {\n  padding: 0;\n  width: 100%;\n}\n\n.div-icon-close {\n  float: right;\n  opacity: 0.6;\n  font-size: 24px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.radio-checked {\n  border-color: #26bed6 !important;\n}\n\n.radio-inner {\n  left: 2px;\n  top: 2px;\n  border-radius: 50%;\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background-color: #26bed6 !important;\n}\n\n.radio-icon {\n  top: 3px !important;\n}\n\n.item-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: #003c71;\n}\n\n.list-location {\n  width: 100%;\n}\n\n.office-brand {\n  padding-top: 16px;\n}\n\n.title-band {\n  padding: 8px 0px 0px 0px;\n}\n\n.office-title {\n  font-weight: 500;\n  font-style: italic;\n}\n\n.time-office {\n  padding-left: 16px;\n}\n\n.btn-cancel, .btn-exchange {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 98%;\n  height: 44px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.exchange-input {\n  border: solid 1px #cdcdcd;\n  border-radius: 5px;\n}\n\n.input-label {\n  align-self: center;\n  color: #848484;\n}\n\n.validate-error {\n  border: solid 1px red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZXhjaGFuZ2VnaWZ0L2V4Y2hhbmdlZ2lmdC5zY3NzIiwic3JjL2FwcC9leGNoYW5nZWdpZnQvZXhjaGFuZ2VnaWZ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQ0FSOztBREVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQ0k7RUFDSSxVQUFBO0FDRVI7O0FEQUk7RUFDSSxnQ0FBQTtBQ0dSOztBRERJO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ0lSOztBREZJO0VBQ0ksbUJBQUE7QUNLUjs7QURISTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNNUjs7QURKSTtFQUNJLFdBQUE7QUNPUjs7QURMSTtFQUNJLGlCQUFBO0FDUVI7O0FETkk7RUFDSSx3QkFBQTtBQ1NSOztBRFBJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ1VSOztBRFJJO0VBQ0ksa0JBQUE7QUNXUjs7QURSSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1dSOztBRFRJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQ1lSOztBRFZJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDYVI7O0FEWEk7RUFDSSxxQkFBQTtBQ2NSIiwiZmlsZSI6InNyYy9hcHAvZXhjaGFuZ2VnaWZ0L2V4Y2hhbmdlZ2lmdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuZXhjaGFuZ2VnaWZ0LWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5kaXYtaWNvbi1jbG9zZXtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAucmFkaW8tY2hlY2tlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucmFkaW8taW5uZXIge1xyXG4gICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJhZGlvLWljb257XHJcbiAgICAgICAgdG9wOjNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICB9XHJcbiAgICAubGlzdC1sb2NhdGlvbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5vZmZpY2UtYnJhbmR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtYmFuZHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAub2ZmaWNlLXRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgfVxyXG4gICAgLnRpbWUtb2ZmaWNle1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNhbmNlbCwgLmJ0bi1leGNoYW5nZXtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmNzkyMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuZXhjaGFuZ2UtaW5wdXR7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NkY2RjZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtbGFiZWx7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjODQ4NDg0O1xyXG4gICAgfVxyXG4gICAgLnZhbGlkYXRlLWVycm9ye1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IHJlZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgIiwiLmV4Y2hhbmdlZ2lmdC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXYtaWNvbi1jbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgb3BhY2l0eTogMC42O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnJhZGlvLWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbn1cblxuLnJhZGlvLWlubmVyIHtcbiAgbGVmdDogMnB4O1xuICB0b3A6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5yYWRpby1pY29uIHtcbiAgdG9wOiAzcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4ubGlzdC1sb2NhdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub2ZmaWNlLWJyYW5kIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi50aXRsZS1iYW5kIHtcbiAgcGFkZGluZzogOHB4IDBweCAwcHggMHB4O1xufVxuXG4ub2ZmaWNlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4udGltZS1vZmZpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5idG4tY2FuY2VsLCAuYnRuLWV4Y2hhbmdlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA0NHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZXhjaGFuZ2UtaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2RjZGNkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbnB1dC1sYWJlbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgY29sb3I6ICM4NDg0ODQ7XG59XG5cbi52YWxpZGF0ZS1lcnJvciB7XG4gIGJvcmRlcjogc29saWQgMXB4IHJlZDtcbn0iXX0= */"

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