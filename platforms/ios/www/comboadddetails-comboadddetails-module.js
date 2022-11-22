(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comboadddetails-comboadddetails-module"],{

/***/ "./src/app/comboadddetails/comboadddetails.html":
/*!******************************************************!*\
  !*** ./src/app/comboadddetails/comboadddetails.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thông tin\n              khách</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"./assets/step/step_2.svg\">\n  <div style=\"margin-top: 10px\">\n    <ion-label class=\"text\">\n      Khách nhận phòng\n    </ion-label>\n  </div>\n  <div style=\"margin-left: -5px\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-label\" position=\"floating\">Họ Tên</ion-label>\n          <ion-input [(ngModel)]=\"hoten\" type=\"text\" (ionInput)=\"inputFocus($event)\" (ionBlur)=\"inputLostFocus(null)\" (ionFocus)=\"inputOnFocus(null, 9)\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-label\" position=\"stacked\">Điện thoại</ion-label>\n          <ion-input [(ngModel)]=\"phone\" maxlength=10 type=\"tel\" required></ion-input>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!validemail\">\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-label\" position=\"stacked\">Email</ion-label>\n          <ion-input [(ngModel)]=\"email\" type=\"email\" required></ion-input>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div style=\"margin-top: 32px\">\n    <ion-label class=\"text\">\n      Yêu cầu khác\n    </ion-label>\n      <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"--padding-start: 0px;margin-left: -5px;\">\n              <ion-label class=\"cls-label\" position=\"stacked\">Thông tin yêu cầu khác</ion-label>\n              <ion-input  [(ngModel)]=\"note\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n    </div>\n    <ion-row style=\"margin-top: 20px\">\n      <ion-checkbox (ionChange)=\"edit(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" style=\"margin: 1px 10px\">Xuất hóa đơn điện tử</ion-label>\n  </ion-row>\n    <div *ngIf=\"ischeck\">\n      <ion-row style=\"margin-left: -5px\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"stacked\">Tên công ty</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"stacked\">Địa chỉ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"stacked\">Mã số thuế</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div style=\"margin-left: 5px;margin-top: 10px\">\n        <ion-checkbox (ionChange)=\"showNameMail($event)\" [checked]=\"ishideNameMail\" class=\"ion-checkbox\" color=\"secondary\"></ion-checkbox>\n        <ion-label class=\"label-input\" >Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n      </div>\n      <div *ngIf=\"!ishideNameMail\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Họ tên</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Email nhận HĐ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </div>\n    </div>\n\n</ion-content>\n<ion-footer>\n  <div class='div-close-paxhint' *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\" (click)=\"hidePaxHint()\"><img src='./assets/ic_close_b.svg'></div>\n  <div class=\"div-pax-hint\" *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\">\n                  \n    <div *ngFor=\"let itempax of listpaxhint\" class=\"d-flex m-bottom-16\" (click)=\"selectPaxHint(itempax)\">\n        <div class=\"icon-pax\">\n                <img src=\"./assets/ic_flight/icon-pax.svg\">\n        </div>\n        <div class=\"text-pax-hint\">\n            {{itempax.fullName}}\n        </div>\n    </div>\n    \n  </div>\n  \n  <div *ngIf=\"priceshow>0||ischeckbtn==true\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n  </div>\n  <div *ngIf=\"priceshow==0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next1()\" ion-button round outline class=\"button button2\">Hoàn thành đặt phòng</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/comboadddetails/comboadddetails.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/comboadddetails/comboadddetails.module.ts ***!
  \***********************************************************/
/*! exports provided: ComboadddetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboadddetailsPageModule", function() { return ComboadddetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _comboadddetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comboadddetails */ "./src/app/comboadddetails/comboadddetails.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let ComboadddetailsPageModule = class ComboadddetailsPageModule {
};
ComboadddetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _comboadddetails__WEBPACK_IMPORTED_MODULE_5__["ComboadddetailsPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _comboadddetails__WEBPACK_IMPORTED_MODULE_5__["ComboadddetailsPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], ComboadddetailsPageModule);



/***/ }),

/***/ "./src/app/comboadddetails/comboadddetails.scss":
/*!******************************************************!*\
  !*** ./src/app/comboadddetails/comboadddetails.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button4 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 30%;\n  font-size: 12px;\n}\n\n.list-departure {\n  margin: 0;\n  display: inline-flex;\n}\n\n.rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n\n.radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n\n.radio-md .radio-checked {\n  border-color: #26bed6;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.cls-label {\n  color: #828282;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jb21ib2FkZGRldGFpbHMvY29tYm9hZGRkZXRhaWxzLnNjc3MiLCJzcmMvYXBwL2NvbWJvYWRkZGV0YWlscy9jb21ib2FkZGRldGFpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NSOztBRENJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDQ1I7O0FEQ0k7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxTQUFBO0VBQ0Esb0JBQUE7QUNDUjs7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ1I7O0FERUk7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ1I7O0FEQ0k7RUFDSSxxQkFBQTtBQ0VSOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERNO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNHViIsImZpbGUiOiJzcmMvYXBwL2NvbWJvYWRkZGV0YWlscy9jb21ib2FkZGRldGFpbHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAudGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9IFxuICAgIC5idXR0b240XG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuIFxuICAgIC5saXN0LWRlcGFydHVyZXtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG5cbiAgICAucmQtZGVwYXJ0dXJlIC5yYWRpby1pY29ue1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgIH1cbiAgIFxuICAgIC5yYWRpby1tZCAucmFkaW8taW5uZXJ7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgIH1cbiAgICAucmFkaW8tbWQgLnJhZGlvLWNoZWNrZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgfVxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgICB9IFxuICAgICAgLmNscy1sYWJlbFxuICAgICAge1xuICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH0gXG4gICAgICBcblxuIiwiLnRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5idXR0b240IHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGlzdC1kZXBhcnR1cmUge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ucmQtZGVwYXJ0dXJlIC5yYWRpby1pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuLnJhZGlvLW1kIC5yYWRpby1pbm5lciB7XG4gIGxlZnQ6IDFweDtcbiAgdG9wOiAxcHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xufVxuXG4ucmFkaW8tbWQgLnJhZGlvLWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5jbHMtbGFiZWwge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/comboadddetails/comboadddetails.ts":
/*!****************************************************!*\
  !*** ./src/app/comboadddetails/comboadddetails.ts ***!
  \****************************************************/
/*! exports provided: ComboadddetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboadddetailsPage", function() { return ComboadddetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirmemail/confirmemail.page */ "./src/app/confirmemail/confirmemail.page.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");













let ComboadddetailsPage = class ComboadddetailsPage {
    constructor(platform, navCtrl, zone, toastCtrl, Roomif, storage, loadingCtrl, booking, gf, Bookcombo, alertCtrl, modalCtrl, fb, searchhotel, bizTravelService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.Roomif = Roomif;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.booking = booking;
        this.gf = gf;
        this.Bookcombo = Bookcombo;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this.searchhotel = searchhotel;
        this.bizTravelService = bizTravelService;
        this.phone = "";
        this.validemail = true;
        this.checkchangeemail = false;
        this.ishideNameMail = true;
        this.inputtext = false;
        this.listPaxSuggestByMemberId = [];
        this.listpaxhint = [];
        this.hidepaxhint = false;
        this.ischeckpayment = Roomif.ischeckpayment;
        this.totalAdult = Bookcombo.totalAdult;
        this.listcars = this.gf.getParams('carscombo');
        this.storage.get('email').then(email => {
            if (email) {
                this.email = email;
                var checkappleemail = (this.email.includes("appleid") || this.email.includes('vivumember.info'));
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
        this.storage.get('email').then(email => {
            if (email) {
                this._email = email;
                var checkappleemail = this._email.includes("appleid");
                if (checkappleemail) {
                    this.validemail = false;
                }
            }
            else {
                this.validemail = false;
            }
        });
        this.note = Roomif.notetotal;
        this.room = this.Roomif.arrroom;
        this.jsonroom = Roomif.jsonroom;
        this.ischeckpoint = this.Roomif.ischeckpoint;
        if (this.ischeckpoint == true) {
            if (this.listcars.HotelBooking.TotalPrices == "0") {
                this.priceshow = 0;
            }
            else {
                this.priceshow = 1;
            }
        }
        else {
            this.ischeckbtn = true;
            if (this.Roomif.promocode) {
                if (this.listcars.HotelBooking.TotalPrices == "0") {
                    this.priceshow = 0;
                    this.ischeckbtn = false;
                }
                else {
                    this.priceshow = 1;
                }
            }
            else {
                this.priceshow = 1;
            }
        }
        if (Roomif.ischeck) {
            this.ischeck = Roomif.ischeck;
        }
        this.GetUserInfo();
        let se = this;
        se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, { 'fb_content_type': 'hotel', 'fb_content_id': se.Bookcombo.HotelCode ? se.Bookcombo.HotelCode : se.booking.code, 'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.listcars.HotelBooking.TotalPrices), 'fb_currency': 'VND',
            'checkin_date': se.listcars.HotelBooking.CheckInDate, 'checkout_date ': se.listcars.HotelBooking.CheckOutDate, 'num_adults': se.listcars.HotelBooking.Adult, 'num_children': (se.listcars.HotelBooking.Child ? se.listcars.HotelBooking.Child : 0), 'value': se.gf.convertNumberToDouble(se.listcars.HotelBooking.TotalPrices), 'currency': 'VND' }, se.gf.convertNumberToFloat(se.listcars.HotelBooking.TotalPrices));
        this.storage.get('jti').then(jti => {
            if (jti) {
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
    insertbooking() {
        var se = this;
        var form = this.listcars;
        form.HotelBooking.PaymentMethod = "51";
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboTransferBooking',
            headers: {},
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            var obj = JSON.parse(body);
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDComboTransfer',
                headers: {},
                form: {
                    BookingCode: obj.Code,
                    DepartATCode: obj.TransferReserveCode.DepartReserveCode,
                    ReturnATCode: obj.TransferReserveCode.ReturnReserveCode,
                    FromPlaceCode: se.listcars.TransferBooking.fromPlaceCode
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                se.loader.dismiss();
                var json = JSON.parse(body);
                if (json.Error == 0) {
                    var ischeck = '1';
                    se.Roomif.priceshowtt = '0';
                    var total = 0;
                    se.loader.dismiss();
                    if (se.bizTravelService.isCompany) {
                        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + se.listcars.HotelBooking.TotalPrices.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + obj.Code + '&buyerPhone=' + se.phone + '&memberId=' + se.jti;
                        se.gf.CreateUrl(url);
                    }
                    if (se.Roomif.payment == "AL") {
                        se.navCtrl.navigateForward('/combodoneprepay/' + obj.Code + '/' + total + '/' + ischeck);
                    }
                    else {
                        se.navCtrl.navigateForward('/combodone/' + obj.Code);
                    }
                }
            });
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
                if (this.companyname && this.address && this.tax) {
                    this.companyname = this.companyname.trim();
                    this.address = this.address.trim();
                    this.tax = this.tax.trim();
                }
                else {
                    this.presentToastOrder();
                    return;
                }
                if (!this.validateEmail(this.email) || !this.email || !this.gf.checkUnicodeCharactor(this.email)) {
                    this.presentToastEmail();
                    this.validemail = false;
                    return;
                }
                else if (this.email) {
                    var checkappleemail = (this.email.includes("appleid") || this.email.includes('vivumember.info'));
                    if (checkappleemail) {
                        this.checkchangeemail = true;
                        this.showConfirmEmail();
                    }
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
                    this.listcars.HotelBooking.Note = this.note;
                    this.listcars.HotelBooking.CompName = this.companyname;
                    this.listcars.HotelBooking.CompAddress = this.address;
                    this.listcars.HotelBooking.CompTaxCode = this.tax;
                    this.listcars.HotelBooking.CAddress = this.addressorder;
                    this.listcars.HotelBooking.CompanyContactEmail = this.Roomif.addressorder;
                    this.listcars.HotelBooking.CompanyContactName = this.Roomif.nameOrder;
                    this.listcars.HotelBooking.IsInvoice = 1;
                    this.storage.set("email", this.email);
                    if (this.checkchangeemail) {
                        return;
                    }
                    if (this.priceshow > 0) {
                        if (this.Roomif.payment == "AL") {
                            this.Roomif.bookingCode = "";
                            this.navCtrl.navigateForward("combopayment");
                        }
                        else {
                            this.postapibook();
                        }
                    }
                    else {
                        this.postapibook();
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
                if (!this.validateEmail(this.email) || !this.email || !this.gf.checkUnicodeCharactor(this.email)) {
                    this.presentToastEmail();
                    this.validemail = false;
                    return;
                }
                else if (this.email) {
                    var checkappleemail = (this.email.includes("appleid") || this.email.includes('vivumember.info'));
                    if (checkappleemail) {
                        this.checkchangeemail = true;
                        this.showConfirmEmail();
                    }
                }
                this.Roomif.hoten = this.hoten;
                this.Roomif.phone = this.phone;
                this.Roomif.notetotal = this.note;
                this.Roomif.ischeck = this.ischeck;
                this.clearClonePage('page-roompaymentselect');
                this.Roomif.notetotal = this.note;
                this.listcars.HotelBooking.Note = this.note;
                this.storage.set("email", this.email);
                if (!this.checkchangeemail) {
                    if (this.priceshow > 0) {
                        if (this.Roomif.payment == "AL") {
                            this.Roomif.bookingCode = "";
                            this.navCtrl.navigateForward("combopayment");
                        }
                        else {
                            this.postapibook();
                        }
                    }
                    else {
                        this.postapibook();
                    }
                }
            }
            else {
                this.presentToastPhone();
            }
        }
    }
    postapibook1() {
        var se = this;
        se.presentLoading();
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/reserve-transfer-seat',
            headers: {
                apikey: 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
                apisecret: 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
            },
            body: {
                trip_code: this.listcars.TransferBooking.departTransfer.TransferNumber,
                seats: this.totalAdult,
                customer_phone: this.phone,
                customer_name: this.hoten,
                customer_email: 'tc@ivivu.com',
                coupon: "",
                pickup_id: this.listcars.TransferBooking.departTransfer.PickupPlaceCode,
                pickup: this.listcars.TransferBooking.departTransfer.PickupPlaceName,
                drop_off_id: this.listcars.TransferBooking.departTransfer.DropoffPlaceCode,
                drop_off: this.listcars.TransferBooking.departTransfer.DropoffPlaceName
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (body.status == 0) {
                var json = body.data;
                if (json.length > 0) {
                }
                else {
                    se.loader.dismiss();
                    alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
                }
            }
            else {
                se.loader.dismiss();
                alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
            }
        });
    }
    postapibook() {
        var se = this;
        se.presentLoading();
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/booking',
            headers: {
                apikey: 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
                apisecret: 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
            },
            body: {
                departParams: {
                    trip_code: this.listcars.TransferBooking.departTransfer.TransferNumber,
                    total_seats: this.Bookcombo.totalseatsdep,
                    total_price: this.Bookcombo.pricedep,
                    code: '',
                    dropoff_place: this.listcars.TransferBooking.departTransfer.DropoffPlaceName,
                    pickup_place: this.listcars.TransferBooking.departTransfer.PickupPlaceName
                },
                returnParams: {
                    trip_code: this.listcars.TransferBooking.returnTransfer.TransferNumber,
                    total_seats: this.Bookcombo.totalseatsret,
                    total_price: this.Bookcombo.priceret,
                    code: '',
                    pickup_place: this.listcars.TransferBooking.returnTransfer.PickupPlaceName,
                    dropoff_place: this.listcars.TransferBooking.returnTransfer.DropoffPlaceName
                },
                customer_phone: this.phone,
                customer_name: this.hoten,
                customer_email: 'tc@ivivu.com',
                pay_status: 0
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (body.status == 0) {
                var json = body.data;
                if (json.length > 0) {
                    se.listcars.TransferBooking.departTransfer.ReservedTickets = JSON.stringify(json[0].data.reserve_Tickets);
                    se.listcars.TransferBooking.returnTransfer.ReservedTickets = JSON.stringify(json[1].data.reserve_Tickets);
                    var Seatsde = json[0].data.seats;
                    var Seatsre = json[1].data.seats;
                    var seatstextde = "";
                    var seatstextre = "";
                    for (let i = 0; i < Seatsde.length; i++) {
                        if (i == Seatsde.length - 1) {
                            seatstextde = seatstextde + Seatsde[i].seat_code;
                        }
                        else {
                            seatstextde = seatstextde + Seatsde[i].seat_code + ',';
                        }
                    }
                    for (let i = 0; i < Seatsre.length; i++) {
                        if (i == Seatsre.length - 1) {
                            seatstextre = seatstextre + Seatsre[i].seat_code;
                        }
                        else {
                            seatstextre = seatstextre + Seatsre[i].seat_code + ',';
                        }
                    }
                    se.listcars.TransferBooking.departTransfer.Seats = seatstextde;
                    se.listcars.TransferBooking.returnTransfer.Seats = seatstextre;
                    var textfullname = se.hoten.split(' ');
                    var FirstName;
                    var LastName;
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
                        FirstName = textfullname[0];
                        LastName = name;
                    }
                    else if (textfullname.length > 1) {
                        FirstName = textfullname[0];
                        LastName = textfullname[1];
                    }
                    else if (textfullname.length == 1) {
                        FirstName = textfullname[0];
                        LastName = "";
                    }
                    se.listcars.TransferBooking.passengerInfo.FirstName = FirstName;
                    se.listcars.TransferBooking.passengerInfo.LastName = LastName;
                    se.listcars.TransferBooking.passengerInfo.Email = se.email;
                    se.listcars.TransferBooking.passengerInfo.MobileNumber = se.phone;
                    se.listcars.HotelBooking.CName = se.hoten;
                    se.listcars.HotelBooking.CPhone = se.phone;
                    se.listcars.HotelBooking.LeadingName = se.hoten;
                    se.listcars.HotelBooking.LeadingEmail = se.email;
                    se.listcars.HotelBooking.LeadingPhone = se.phone;
                    se.insertbooking();
                }
                else {
                    se.loader.dismiss();
                    alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
                }
            }
            else {
                se.loader.dismiss();
                alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
            }
        });
    }
    next1() {
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
                    this.listcars.HotelBooking.Note = this.note;
                    this.listcars.HotelBooking.CompName = this.companyname;
                    this.listcars.HotelBooking.CompAddress = this.address;
                    this.listcars.HotelBooking.CompTaxCode = this.tax;
                    this.listcars.HotelBooking.CAddress = this.addressorder;
                    this.listcars.HotelBooking.CompanyContactEmail = this.Roomif.addressorder;
                    this.listcars.HotelBooking.CompanyContactName = this.Roomif.nameOrder;
                    this.listcars.HotelBooking.IsInvoice = 1;
                    this.storage.set("email", this.email);
                    if (this.checkchangeemail) {
                        return;
                    }
                    if (this.priceshow > 0) {
                        if (this.Roomif.payment == "AL") {
                            this.Roomif.bookingCode = "";
                            this.navCtrl.navigateForward("combopayment");
                        }
                        else {
                            this.postapibook();
                        }
                    }
                    else {
                        this.postapibook();
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
                if (!this.validateEmail(this.email) || !this.email || !this.gf.checkUnicodeCharactor(this.email)) {
                    this.presentToastEmail();
                    this.validemail = false;
                    return;
                }
                else if (this.email) {
                    var checkappleemail = (this.email.includes("appleid") || this.email.includes('vivumember.info'));
                    if (checkappleemail) {
                        this.checkchangeemail = true;
                        this.showConfirmEmail();
                    }
                }
                this.Roomif.hoten = this.hoten;
                this.Roomif.phone = this.phone;
                this.Roomif.notetotal = this.note;
                this.Roomif.ischeck = this.ischeck;
                this.clearClonePage('page-roompaymentdoneean');
                this.Roomif.notetotal = this.note;
                this.listcars.HotelBooking.Note = this.note;
                this.storage.set("email", this.email);
                if (this.checkchangeemail) {
                    return;
                }
                if (this.priceshow > 0) {
                    if (this.Roomif.payment == "AL") {
                        this.Roomif.bookingCode = "";
                        this.navCtrl.navigateForward("combopayment");
                    }
                    else {
                        this.postapibook();
                    }
                }
                else {
                    this.postapibook();
                }
            }
            else {
                this.presentToastPhone();
            }
        }
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
                message: "Số điện thoại không hợp lệ. Xin vui lòng nhập lại.",
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
    goback() {
        this.navCtrl.back();
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
            if (this.loader) {
                this.loader.dismiss();
            }
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
                component: _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_8__["ConfirmemailPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data && data.data.email) {
                    if (data.data.email) {
                        se.storage.set("email", data.data.email);
                        se.storage.set("saveemail", data.data.email);
                        se.email = data.data.email;
                        se.listcars.HotelBooking.CEmail = data.data.email;
                        if (se.priceshow > 0) {
                            if (this.Roomif.payment == "AL") {
                                this.Roomif.bookingCode = "";
                                this.navCtrl.navigateForward("combopayment");
                            }
                            else {
                                this.postapibook();
                            }
                        }
                        else {
                            se.postapibook();
                        }
                    }
                }
            });
        });
    }
    showNameMail(ev) {
        this.ishideNameMail = ev.detail.checked;
    }
    inputFocus(event) {
        var se = this;
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
    }
    inputLostFocus(item) {
        var se = this;
        setTimeout(() => {
            se.inputtext = false;
            if (se.hidepaxhint) {
                if (item) {
                    item.hidePaxHint = true;
                }
                se.hidepaxhint = false;
            }
        }, 400);
    }
    updateHintPaxName(value, listpaxhint) {
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
    createHintPaxName(value, listpaxhint) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let arraypax = [];
            for (let index = 0; index < listpaxhint.length; index++) {
                const element = listpaxhint[index];
                if (value && element.fullName && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                    arraypax.push(element);
                }
            }
            se.listpaxhint = [...arraypax];
        });
    }
    selectPaxHint(paxhint) {
        var se = this;
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
ComboadddetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-comboadddetails',
        template: __webpack_require__(/*! ./comboadddetails.html */ "./src/app/comboadddetails/comboadddetails.html"),
        styles: [__webpack_require__(/*! ./comboadddetails.scss */ "./src/app/comboadddetails/comboadddetails.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_10__["BizTravelService"]])
], ComboadddetailsPage);



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
//# sourceMappingURL=comboadddetails-comboadddetails-module.js.map