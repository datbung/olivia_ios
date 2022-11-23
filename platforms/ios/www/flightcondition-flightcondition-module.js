(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcondition-flightcondition-module"],{

/***/ "./src/app/flightcondition/flightcondition.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/flightcondition/flightcondition.module.ts ***!
  \***********************************************************/
/*! exports provided: FlightconditionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightconditionPageModule", function() { return FlightconditionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcondition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcondition.page */ "./src/app/flightcondition/flightcondition.page.ts");







const routes = [
    {
        path: '',
        component: _flightcondition_page__WEBPACK_IMPORTED_MODULE_6__["FlightconditionPage"]
    }
];
let FlightconditionPageModule = class FlightconditionPageModule {
};
FlightconditionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcondition_page__WEBPACK_IMPORTED_MODULE_6__["FlightconditionPage"]]
    })
], FlightconditionPageModule);



/***/ }),

/***/ "./src/app/flightcondition/flightcondition.page.html":
/*!***********************************************************!*\
  !*** ./src/app/flightcondition/flightcondition.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Điều kiện vé</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content>\n      <div class=\"flight-condition-content\">\n          <div *ngIf=\"departTicketCondition\" >\n              <div class=\"text-title m-bottom-4\">\n                  {{ departtitle }}\n              </div>\n              <div class=\"text-condition\">\n                <div class=\"div-text-note m-bottom-8\">Hoàn/hủy vé: {{ departTicketCondition.ticketRefund}}</div>\n                <div class=\"div-text-note m-bottom-8\">Đổi tên hành khách: {{ departTicketCondition.changeInfoPax}}</div>\n                <div class=\"div-text-note m-bottom-8\">Đổi ngày bay/giờ bay: {{ departTicketCondition.changeDepartTime}}</div>\n                <div class=\"div-text-note m-bottom-8\">Đổi chặng bay: {{ departTicketCondition.changeSegment}}</div>\n                <div class=\"div-text-note m-bottom-8\">Chọn chỗ trước: {{ departTicketCondition.seat}}</div>\n                <div class=\"div-text-note m-bottom-8\">Nâng hạng vé: {{ departTicketCondition.upgradeTicket}}</div>\n              </div>\n          </div>\n\n          <div *ngIf=\"returnTicketCondition\" class=\"m-top-16\">\n            <div class=\"text-title m-bottom-4\">\n                {{ returntitle }}\n            </div>\n            <div class=\"text-condition\">\n                <div class=\"div-text-note m-bottom-8\">Hoàn/hủy vé: {{ returnTicketCondition.ticketRefund}}</div>\n                <div class=\"div-text-note m-bottom-8\">Đổi tên hành khách: {{ returnTicketCondition.changeInfoPax}}</div>\n                <div class=\"div-text-note m-bottom-8\">Đổi ngày bay/giờ bay: {{ returnTicketCondition.changeDepartTime}}</div>\n                <div class=\"div-text-note m-bottom-8\">Đổi chặng bay: {{ returnTicketCondition.changeSegment}}</div>\n                <div class=\"div-text-note m-bottom-8\">Chọn chỗ trước: {{ returnTicketCondition.seat}}</div>\n                <div class=\"div-text-note m-bottom-8\">Nâng hạng vé: {{ returnTicketCondition.upgradeTicket}}</div>\n            </div>\n        </div>\n        <div class=\"div-border-bottom\" *ngIf=\"departTicketCondition || returnTicketCondition\"></div>\n        <div class=\"div-text-note text-bold m-bottom-8\">Lưu ý:</div>\n        <div class=\"div-text-note m-bottom-8\">\n          - Toàn bộ hành trình và điều kiện vé sẽ không còn hiệu lực trong trường hợp quý khách <span class=\"text-bold\">không thanh toán đúng thời gian và quy định của chúng tôi.</span>\n        </div>\n        <div class=\"div-text-note m-bottom-8\">\n          - Qúy khách vui lòng kiểm tra tất cả hành trình và thông tin cần thiết được gửi trong email để đảm bảo chuyến đi được như ý.\n        </div>\n        <div class=\"div-text-note \">\n          - Mọi chi phí thay đổi theo quy định của Hãng Hàng Không và phí dịch vụ sẽ không được hoàn trả trong mọi trường hợp.\n        </div>\n        \n      </div>\n  </ion-content>\n  <ion-footer>\n    <div class=\"div-footer d-flex-footer\">\n      <div class=\"div-button\">\n        <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Đặt chuyến bay</button>\n      </div>\n    </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/flightcondition/flightcondition.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/flightcondition/flightcondition.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 11px;\n}\n\n.button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  border-radius: 4px !important;\n  width: 91.5% !important;\n  margin: 12px 16px !important;\n}\n\n.flight-condition-content {\n  padding: 16px;\n}\n\n.flight-condition-content .text-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222222;\n  line-height: 22px;\n}\n\n.flight-condition-content .text-condition {\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n}\n\n.flight-condition-content .div-border-bottom {\n  margin-top: 10px;\n  margin-bottom: 8px;\n  border-bottom: solid 0.5px #cdcdcd;\n}\n\n.flight-condition-content .div-text-note {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 1.3;\n  color: #222222;\n  letter-spacing: -0.4px;\n}\n\n.flight-condition-content .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRjb25kaXRpb24vZmxpZ2h0Y29uZGl0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0Y29uZGl0aW9uL2ZsaWdodGNvbmRpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBRVEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUNFUjs7QURBQTtFQUNJLGFBQUE7QUNHSjs7QURESTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0dSOztBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNFUjs7QURDSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQ0NSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNBUjs7QURHSTtFQUNJLGlCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRjb25kaXRpb24vZmxpZ2h0Y29uZGl0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtaGVhZGVyLXRpdGxle1xuICAgIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuLmJ1dHRvblxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDkxLjUlICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTJweCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuLmZsaWdodC1jb25kaXRpb24tY29udGVudHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLnRleHQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIH1cblxuICAgIC50ZXh0LWNvbmRpdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB9XG5cbiAgICAuZGl2LWJvcmRlci1ib3R0b217XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICB9XG5cbiAgICAuZGl2LXRleHQtbm90ZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB9XG5cbiAgICAudGV4dC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDExcHg7XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTEuNSUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMnB4IDE2cHggIWltcG9ydGFudDtcbn1cblxuLmZsaWdodC1jb25kaXRpb24tY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmxpZ2h0LWNvbmRpdGlvbi1jb250ZW50IC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG4uZmxpZ2h0LWNvbmRpdGlvbi1jb250ZW50IC50ZXh0LWNvbmRpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZmxpZ2h0LWNvbmRpdGlvbi1jb250ZW50IC5kaXYtYm9yZGVyLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbn1cbi5mbGlnaHQtY29uZGl0aW9uLWNvbnRlbnQgLmRpdi10ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmZsaWdodC1jb25kaXRpb24tY29udGVudCAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightcondition/flightcondition.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/flightcondition/flightcondition.page.ts ***!
  \*********************************************************/
/*! exports provided: FlightconditionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightconditionPage", function() { return FlightconditionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");









let FlightconditionPage = class FlightconditionPage {
    constructor(platform, navCtrl, modalCtrl, valueGlobal, searchhotel, gf, actionsheetCtrl, pickerController, zone, _flightService, formBuilder, storage, alertCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.valueGlobal = valueGlobal;
        this.searchhotel = searchhotel;
        this.gf = gf;
        this.actionsheetCtrl = actionsheetCtrl;
        this.pickerController = pickerController;
        this.zone = zone;
        this._flightService = _flightService;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        if (this._flightService.itemFlightCache.departConditions && this._flightService.itemFlightCache.departConditions.length > 1) {
            this.departCondition = this._flightService.itemFlightCache.departConditions[1].content;
            this.departtitle = "Chiều đi " + this._flightService.itemFlightCache.departCode + " - " + this._flightService.itemFlightCache.returnCode;
        }
        else if (this._flightService.itemFlightCache.departConditions && this._flightService.itemFlightCache.departConditions.length > 0) {
            this.departCondition = this._flightService.itemFlightCache.departConditions[0].content;
            this.departtitle = "Chiều đi " + this._flightService.itemFlightCache.departCode + " - " + this._flightService.itemFlightCache.returnCode;
        }
        if (this._flightService.itemFlightCache.returnConditions && this._flightService.itemFlightCache.returnConditions.length > 1) {
            this.returnCondition = this._flightService.itemFlightCache.returnConditions[1].content;
            this.returntitle = "Chiều về " + this._flightService.itemFlightCache.returnCode + " - " + this._flightService.itemFlightCache.departCode;
        }
        else if (this._flightService.itemFlightCache.returnConditions && this._flightService.itemFlightCache.returnConditions.length > 0) {
            this.returnCondition = this._flightService.itemFlightCache.returnConditions[0].content;
            this.returntitle = "Chiều về " + this._flightService.itemFlightCache.returnCode + " - " + this._flightService.itemFlightCache.departCode;
        }
        if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.ticketCondition) {
            this.departTicketCondition = this._flightService.itemFlightCache.departFlight.ticketCondition;
            this.departtitle = "Chiều đi " + this._flightService.itemFlightCache.departCode + " - " + this._flightService.itemFlightCache.returnCode;
        }
        if (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.ticketCondition) {
            this.returnTicketCondition = this._flightService.itemFlightCache.returnFlight.ticketCondition;
            this.returntitle = "Chiều về " + this._flightService.itemFlightCache.returnCode + " - " + this._flightService.itemFlightCache.departCode;
        }
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/flightaddservice');
    }
    confirm() {
        var se = this;
        if (se._flightService.itemFlightCache.backtochoiceseat) {
            se.showAlertChoiceSeat();
        }
        else {
            se.navCtrl.navigateForward('/flightadddetails');
        }
    }
    showAlertChoiceSeat() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let msg = 'Vui lòng chọn lại ghế ngồi!';
            let alert = yield se.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-choiceseat",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            se._flightService.itemFlightCache.backtochoiceseat = true;
                            se._flightService.itemFlightReChoiceSeat.emit(1);
                            se.navCtrl.navigateBack('flightaddservice');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
FlightconditionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightcondition',
        template: __webpack_require__(/*! ./flightcondition.page.html */ "./src/app/flightcondition/flightcondition.page.html"),
        styles: [__webpack_require__(/*! ./flightcondition.page.scss */ "./src/app/flightcondition/flightcondition.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_5__["flightService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], FlightconditionPage);



/***/ })

}]);
//# sourceMappingURL=flightcondition-flightcondition-module.js.map