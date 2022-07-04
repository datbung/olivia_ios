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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 11px;\n}\n\n.button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  border-radius: 4px !important;\n  width: 91.5% !important;\n  margin: 12px 16px !important;\n}\n\n.flight-condition-content {\n  padding: 16px;\n}\n\n.flight-condition-content .text-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222222;\n  line-height: 22px;\n}\n\n.flight-condition-content .text-condition {\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n}\n\n.flight-condition-content .div-border-bottom {\n  margin-top: 10px;\n  margin-bottom: 8px;\n  border-bottom: solid 0.5px #cdcdcd;\n}\n\n.flight-condition-content .div-text-note {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 1.3;\n  color: #222222;\n  letter-spacing: -0.4px;\n}\n\n.flight-condition-content .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0Y29uZGl0aW9uL2ZsaWdodGNvbmRpdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGNvbmRpdGlvbi9mbGlnaHRjb25kaXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUVRLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FDRVI7O0FEQUE7RUFDSSxhQUFBO0FDR0o7O0FEREk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDRVI7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUNDUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDQVI7O0FER0k7RUFDSSxpQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29uZGl0aW9uL2ZsaWdodGNvbmRpdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWhlYWRlci10aXRsZXtcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcbn1cbi5idXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA5MS41JSAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEycHggMTZweCAhaW1wb3J0YW50O1xuICAgIH1cbi5mbGlnaHQtY29uZGl0aW9uLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB9XG5cbiAgICAudGV4dC1jb25kaXRpb257XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfVxuXG4gICAgLmRpdi1ib3JkZXItYm90dG9te1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gICAgfVxuXG4gICAgLmRpdi10ZXh0LW5vdGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfVxuXG4gICAgLnRleHQtYm9sZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDkxLjUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTJweCAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mbGlnaHQtY29uZGl0aW9uLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmZsaWdodC1jb25kaXRpb24tY29udGVudCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLmZsaWdodC1jb25kaXRpb24tY29udGVudCAudGV4dC1jb25kaXRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmZsaWdodC1jb25kaXRpb24tY29udGVudCAuZGl2LWJvcmRlci1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG59XG4uZmxpZ2h0LWNvbmRpdGlvbi1jb250ZW50IC5kaXYtdGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5mbGlnaHQtY29uZGl0aW9uLWNvbnRlbnQgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

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