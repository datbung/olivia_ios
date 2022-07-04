(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordersupport-ordersupport-module"],{

/***/ "./src/app/ordersupport/ordersupport.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ordersupport/ordersupport.module.ts ***!
  \*****************************************************/
/*! exports provided: OrdersupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersupportPageModule", function() { return OrdersupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordersupport_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordersupport.page */ "./src/app/ordersupport/ordersupport.page.ts");







const routes = [
    {
        path: '',
        component: _ordersupport_page__WEBPACK_IMPORTED_MODULE_6__["OrdersupportPage"]
    }
];
let OrdersupportPageModule = class OrdersupportPageModule {
};
OrdersupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ordersupport_page__WEBPACK_IMPORTED_MODULE_6__["OrdersupportPage"]]
    })
], OrdersupportPageModule);



/***/ }),

/***/ "./src/app/ordersupport/ordersupport.page.html":
/*!*****************************************************!*\
  !*** ./src/app/ordersupport/ordersupport.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Yêu cầu hỗ trợ</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<div class=\"text-1 margin-top-27\">\n  Đội ngũ chăm sóc khách hàng IVIVU\n</div>\n<div class=\"text-2 margin-top-8\">\n  Chúng tôi sẽ phản hồi quý khách trong vòng 60 phút trong thời gian làm việc (7:30-21:00)\n</div>\n<div class=\"text-request margin-top-23\">\n  Yêu cầu\n</div>\n<div class=\"margin-top-6 div-request\">\n  <ion-item class=\"ion-item\" >\n    <ion-label style=\"display:none\">Chọn yêu cầu</ion-label>\n    <ion-select (ionChange)=\"getValue($event)\" cancelText=\"Hủy\" okText=\"Ok\" class=\"text-request\" placeholder=\"- Chọn thông tin cần thay đổi -\">\n      <!-- <ion-select-option value=\"none\" disabled>- Chọn thông tin cần thay đổi -</ion-select-option> -->\n      <ion-select-option value=\"Thay đổi đơn hàng\">Thay đổi đơn hàng</ion-select-option>\n      <ion-select-option value=\"Hủy đơn hàng\">Hủy đơn hàng</ion-select-option>\n      <ion-select-option value=\"Đặt thêm dịch vụ\">Đặt thêm dịch vụ</ion-select-option>\n      <ion-select-option *ngIf=\"stt==1\" value=\"Sử dụng giá trị bảo lưu\">Sử dụng giá trị bảo lưu</ion-select-option>\n      <ion-select-option value=\"Khác\">Khác</ion-select-option>\n    </ion-select>\n  </ion-item>\n</div>\n<div class=\"text-request margin-top-19\">\n  Nội dung hỗ trợ\n</div>\n<div class=\"margin-top-9 div-note\">\n  <ion-textarea [(ngModel)]=\"note\" class=\"text-request\"></ion-textarea>\n</div>\n\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Gửi yêu cầu<span class=\"margin-left-5\"><img class=\"img\" src=\"./assets/imgs/ic_next.svg\"></span></button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/ordersupport/ordersupport.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ordersupport/ordersupport.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-1 {\n  color: #00c1de;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.text-2 {\n  font-size: 14px;\n  line-height: 1.4;\n  letter-spacing: -0.28px;\n  color: #333;\n}\n\n.text-request {\n  font-size: 14px;\n  letter-spacing: -0.28px;\n  color: #333;\n  line-height: 1.5;\n}\n\n.div-request {\n  border-radius: 4px;\n  border: solid 1px #e9eaec;\n  background-color: #fff;\n}\n\n.margin-top-27 {\n  margin-top: 27px;\n}\n\n.margin-top-8 {\n  margin-top: 8px;\n}\n\n.margin-top-23 {\n  margin-top: 23px;\n}\n\n.margin-top-6 {\n  margin-top: 6px;\n}\n\n.margin-top-9 {\n  margin-top: 9px;\n}\n\n.margin-top-19 {\n  margin-top: 19px;\n}\n\n.margin-left-5 {\n  margin-left: 5px;\n}\n\n.div-request .ion-item {\n  --padding-start: 0px;\n  --min-height: 44px !important;\n}\n\n.div-note {\n  border-radius: 4px;\n  border: solid 1px #e9eaec;\n  background-color: #fff;\n  height: 100px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  margin: 8px 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL29yZGVyc3VwcG9ydC9vcmRlcnN1cHBvcnQucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlcnN1cHBvcnQvb3JkZXJzdXBwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0FDTUo7O0FESkE7RUFDSSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBRE5BO0VBQ0ksZUFBQTtBQ1NKOztBRFBBO0VBQ0ksZ0JBQUE7QUNVSjs7QURSQTtFQUNJLGdCQUFBO0FDV0o7O0FEVEE7RUFDSSxvQkFBQTtFQUNBLDZCQUFBO0FDWUo7O0FEVkE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDYUo7O0FEWEE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXJzdXBwb3J0L29yZGVyc3VwcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC0xe1xuICAgIGNvbG9yOiAjMDBjMWRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnRleHQtMntcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMzMzM7XG59XG4udGV4dC1yZXF1ZXN0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsaW5lLWhlaWdodDogMS41O1xufVxuLmRpdi1yZXF1ZXN0e1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZTllYWVjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubWFyZ2luLXRvcC0yN3tcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xufVxuLm1hcmdpbi10b3AtOHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubWFyZ2luLXRvcC0yM3tcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xufVxuLm1hcmdpbi10b3AtNntcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ubWFyZ2luLXRvcC05e1xuICAgIG1hcmdpbi10b3A6IDlweDtcbn1cbi5tYXJnaW4tdG9wLTE5e1xuICAgIG1hcmdpbi10b3A6IDE5cHg7XG59XG4ubWFyZ2luLWxlZnQtNXtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmRpdi1yZXF1ZXN0IC5pb24taXRlbXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLW1pbi1oZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbn1cbi5kaXYtbm90ZXtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2U5ZWFlYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMTAwcHg7XG59XG4uYnV0dG9uMlxue1xuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xufVxuXG5cblxuIiwiLnRleHQtMSB7XG4gIGNvbG9yOiAjMDBjMWRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZXh0LTIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRleHQtcmVxdWVzdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uZGl2LXJlcXVlc3Qge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlOWVhZWM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tYXJnaW4tdG9wLTI3IHtcbiAgbWFyZ2luLXRvcDogMjdweDtcbn1cblxuLm1hcmdpbi10b3AtOCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1hcmdpbi10b3AtMjMge1xuICBtYXJnaW4tdG9wOiAyM3B4O1xufVxuXG4ubWFyZ2luLXRvcC02IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubWFyZ2luLXRvcC05IHtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG4ubWFyZ2luLXRvcC0xOSB7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG59XG5cbi5tYXJnaW4tbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmRpdi1yZXF1ZXN0IC5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLW1pbi1oZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1ub3RlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZTllYWVjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ordersupport/ordersupport.page.ts":
/*!***************************************************!*\
  !*** ./src/app/ordersupport/ordersupport.page.ts ***!
  \***************************************************/
/*! exports provided: OrdersupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersupportPage", function() { return OrdersupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");








let OrdersupportPage = class OrdersupportPage {
    constructor(navCtrl, storage, loadingCtrl, activityService, activatedRoute) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.activityService = activityService;
        this.activatedRoute = activatedRoute;
        this.booking_id = "";
        this.note = "";
        this.booking_id = this.activityService.objPaymentMytrip.trip.booking_id;
        this.cus_email = this.activityService.objPaymentMytrip.trip.cus_email;
        this.cus_name = this.activityService.objPaymentMytrip.trip.cus_name;
        this.cus_phone = this.activityService.objPaymentMytrip.trip.cus_phone;
    }
    ngOnInit() {
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
    }
    goback() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        const ionSelects = document.querySelectorAll('ion-select');
        ionSelects.forEach((ionSelect) => {
            const selectIconInner = ionSelect.shadowRoot.querySelector('.select-icon');
            const selectTextInner = ionSelect.shadowRoot.querySelector('.select-text');
            const selectTextPlace = ionSelect.shadowRoot.querySelector('.select-placeholder');
            if (selectIconInner) {
                selectIconInner.setAttribute('style', ' position: absolute;right: 12px;top:13px');
            }
            if (selectTextPlace) {
                selectTextInner.setAttribute('style', '   opacity: 1;position: absolute;top:13px;  font-size: 14px !important;   letter-spacing: -0.28px !important;     color: #333 !important;  line-height: 1.5 !important');
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    next() {
        var se = this;
        if (!this.requestType) {
            alert('Vui lòng chọn thông tin cần thay đổi');
            return;
        }
        if (!this.note) {
            alert('Vui lòng nhập nội dung cần hỗ trợ');
            return;
        }
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.presentLoading();
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/app/CRMOldApis/CreateSupportRequest',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json'
                    },
                    body: {
                        bookingCode: this.booking_id,
                        customerEmail: this.cus_email,
                        customerName: this.cus_name,
                        customerPhone: this.cus_phone,
                        requestContent: this.note,
                        requestType: this.requestType,
                        sourceRequest: "App"
                    },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                    if (body.error == 0) {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        se.navCtrl.navigateBack(['/ordersupportdone']);
                    }
                });
            }
        });
    }
    getValue(event) {
        this.requestType = event.detail.value;
    }
};
OrdersupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordersupport',
        template: __webpack_require__(/*! ./ordersupport.page.html */ "./src/app/ordersupport/ordersupport.page.html"),
        styles: [__webpack_require__(/*! ./ordersupport.page.scss */ "./src/app/ordersupport/ordersupport.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], OrdersupportPage);



/***/ })

}]);
//# sourceMappingURL=ordersupport-ordersupport-module.js.map