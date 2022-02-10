(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightaddseat-flightaddseat-module"],{

/***/ "./src/app/flightaddseat/flightaddseat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flightaddseat/flightaddseat.module.ts ***!
  \*******************************************************/
/*! exports provided: FlightaddseatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaddseatPageModule", function() { return FlightaddseatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightaddseat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightaddseat.page */ "./src/app/flightaddseat/flightaddseat.page.ts");







let FlightaddseatPageModule = class FlightaddseatPageModule {
};
FlightaddseatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _flightaddseat_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddseatPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _flightaddseat_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddseatPage"]
                }]),
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightaddseatPageModule);



/***/ }),

/***/ "./src/app/flightaddseat/flightaddseat.page.html":
/*!*******************************************************!*\
  !*** ./src/app/flightaddseat/flightaddseat.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Chọn chỗ ngồi</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-segment [(ngModel)]=\"tabseat\" class=\"div-segment\"  mode=\"md\">\n          <ion-segment-button (click)=\"SelectTab(1)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"1\" >\n            Chiều đi\n            </ion-segment-button>\n            <ion-segment-button (click)=\"SelectTab(2)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"2\" *ngIf=\"roundtrip\">\n            Chiều về\n            </ion-segment-button>\n          </ion-segment>\n      </ion-row>\n  </ion-header>\n\n  <ion-content #scrollFlightAddSeat>\n    <div class=\"content-flightaddseat\" >\n\n        <ion-slides #slideTab (ionSlideDidChange)=\"slidetabchange()\" [options]=\"slideOpts\">\n            <!-- Chiều đi -->\n            <ion-slide style=\"display: block;\" *ngIf=\"(listSeatNormal && listSeatNormal.length>0) else departSeatFixed\">\n                <div>\n                    <div class=\"d-flex m-top-4\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-green\"></div>\n                            <div class=\"div-text\">Ghế thường</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-tealish\"></div>\n                            <div class=\"div-text \">Ghế phía trước</div>\n                        </div>\n                    </div>\n            \n                    <div class=\"d-flex m-top-16\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-blue\"></div>\n                            <div class=\"div-text\">Ghế gần lối thoát hiểm</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-red\"></div>\n                            <div class=\"div-text\">Ghế đặc biệt</div>\n                        </div>\n                    </div>\n            \n                    <div class=\"d-flex m-top-16\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-gray\"></div>\n                            <div class=\"div-text\">Ghế đã được chọn</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-orange\"></div>\n                            <div class=\"div-text\">Ghế đang chọn</div>\n                        </div>\n                    </div>\n        \n                    <div class=\"text-title\">\n                        BUỒNG LÁI\n                    </div>\n                    \n                </div>\n                \n                    <div class=\"text-exit\">Lối ra</div>\n                    <div *ngIf=\"!departnewmodel\">\n                        <div class=\"div-seat m-top-21\" >\n        \n                            <div class=\"d-flex justify-content-between lh-25\">\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatNameLeft; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\">\n                                        {{item}}\n                                    </div>\n                                </div>\n                                <div class=\"div-number-center\"></div>\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatNameRight; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\">\n                                        {{item}}\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            \n                            <div class=\"div-ahead\">\n            \n                                <div class=\"d-flex justify-content-between\" *ngFor=\"let itemnormal of listSeatNormal; let idx =index\">\n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemnormal.itemsLeft; let idx1 =index\"  (click)=\"choiceSeat(itemseat,1)\">\n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1\">\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                    </div>\n    \n                                    <div class=\"div-number-center\">{{itemnormal.row}}</div>\n    \n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemnormal.itemsRight; let idx1 =index\" (click)=\"choiceSeat(itemseat,1)\">\n                                        \n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1\">\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                </div>\n            \n                            </div>\n                        </div>\n                    </div>\n                \n\n                    \n                    <div *ngIf=\"departnewmodel\">\n                        <div class=\"div-seat m-top-21\" >\n                            <div class=\"d-flex justify-content-between lh-25\">\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name  m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatName; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\" *ngIf=\"item != '-1'\">\n                                        {{item}}\n                                    </div>\n                                    <div class=\"div-seat-icon text-seat seat-disabled\" *ngIf=\"item == '-1'\"></div>\n                                </div>\n                              \n                            </div>\n    \n                            <div class=\"div-ahead\">\n            \n                                <div class=\"d-flex justify-content-between\" *ngFor=\"let itemnormal of listSeatNormal; let idx =index\">\n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemnormal.itemsNormal; let idx1 =index\"  (click)=\"choiceSeat(itemseat,1)\">\n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon new-seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1 && idx !=  3 && idx != 7\">\n                                            <div class=\"seat-icon div-number-center\" *ngIf=\"itemseat.type == -1 && (idx1 ==  3 || idx1 == 7)\">{{itemnormal.row}}</div>\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                       \n                                    </div>\n                                    \n    \n                                </div>\n            \n                            </div>\n                        </div>\n                    </div>\n        \n\n            </ion-slide>\n            <ng-template #departSeatFixed>\n                <ion-slide style=\"display: block;\">\n                    <div class=\"div-empty text-center\">\n                        <img class=\"img-empty-seat\" src=\"./assets/ic_flight/flight_empty_seat.svg\">\n                    </div>\n                    <div class=\"div-text-empty m-top-24  text-center\">Chuyến bay chưa hỗ trợ chọn ghế</div>\n                </ion-slide>\n            </ng-template>\n\n            <!-- Chiều về -->\n            <ion-slide style=\"display: block;\" *ngIf=\"(listReturnSeatNormal && listReturnSeatNormal.length>0 && roundtrip) else returnSeatFixed\">\n                <div>\n                    <div class=\"d-flex m-top-4\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-green\"></div>\n                            <div class=\"div-text\">Ghế thường</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-tealish\"></div>\n                            <div class=\"div-text \">Ghế phía trước</div>\n                        </div>\n                    </div>\n            \n                    <div class=\"d-flex m-top-16\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-blue\"></div>\n                            <div class=\"div-text\">Ghế gần lối thoát hiểm</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-red\"></div>\n                            <div class=\"div-text\">Ghế đặc biệt</div>\n                        </div>\n                    </div>\n            \n                    <div class=\"d-flex m-top-16\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-gray\"></div>\n                            <div class=\"div-text\">Ghế đã được chọn</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-orange\"></div>\n                            <div class=\"div-text\">Ghế đang chọn</div>\n                        </div>\n                    </div>\n        \n                    <div class=\"text-title\">\n                        BUỒNG LÁI\n                    </div>\n                    \n                </div>\n                \n        \n                <div>\n                    <div class=\"text-exit\">Lối ra</div>\n                    \n                    <div *ngIf=\"!returnnewmodel\">\n                        <div class=\"div-seat m-top-21\">\n        \n                            <div class=\"d-flex justify-content-between lh-25\">\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatNameLeft; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\">\n                                        {{item}}\n                                    </div>\n                                </div>\n                                <div class=\"div-number-center\"></div>\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatNameRight; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\">\n                                        {{item}}\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            \n                            <div class=\"div-ahead\">\n                               \n                                <div class=\"d-flex justify-content-between\" *ngFor=\"let itemReturnnormal of listReturnSeatNormal; let idx =index\">\n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemReturnnormal.itemsLeft; let idx1 =index\"  (click)=\"choiceSeat(itemseat,2)\">\n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1\">\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                    </div>\n    \n                                    <div class=\"div-number-center\">{{itemReturnnormal.row}}</div>\n    \n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemReturnnormal.itemsRight; let idx1 =index\" (click)=\"choiceSeat(itemseat,2)\">\n                                        \n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1\">\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                </div>\n            \n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"returnnewmodel\">\n                        <div class=\"div-seat m-top-21\" >\n                            <div class=\"d-flex justify-content-between lh-25\">\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name  m-left-14':'div-seat-name'\" *ngFor=\"let item of listReturnSeatName; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\" *ngIf=\"item != '-1'\">\n                                        {{item}}\n                                    </div>\n                                    <div class=\"div-seat-icon text-seat seat-disabled\" *ngIf=\"item == '-1'\"></div>\n                                </div>\n                              \n                            </div>\n    \n                            <div class=\"div-ahead\">\n            \n                                <div class=\"d-flex justify-content-between\" *ngFor=\"let itemReturnnormal of listReturnSeatNormal; let idx =index\">\n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemReturnnormal.itemsNormal; let idx1 =index\"  (click)=\"choiceSeat(itemseat,2)\">\n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon new-seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1 && idx !=  3 && idx != 7\">\n                                            <div class=\"seat-icon div-number-center\" *ngIf=\"itemseat.type == -1 && (idx1 ==  3 || idx1 == 7)\">{{itemReturnnormal.row}}</div>\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                       \n                                    </div>\n                                    \n    \n                                </div>\n            \n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </ion-slide>\n            <ng-template #returnSeatFixed>\n                <ion-slide style=\"display: block;\" *ngIf=\"roundtrip\">\n                    <div class=\"div-empty text-center\">\n                        <img class=\"img-empty-seat\" src=\"./assets/ic_flight/flight_empty_seat.svg\">\n                    </div>\n                    <div class=\"div-text-empty m-top-24  text-center\">Chuyến bay chưa hỗ trợ chọn ghế</div>\n                </ion-slide>\n            </ng-template>\n        </ion-slides>\n        \n    </div>\n  </ion-content>\n\n  <ion-footer>\n    <div class=\"div-footer d-flex-footer\">\n        <div *ngIf=\"(tabseat == 1 && (listSeatNormal && listSeatNormal.length>0))\" class=\"d-flex-footer div-width-100\">\n            <div class=\"div-total\" >\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ listdepartseatselected }}\n                </div>\n                <div class=\"text-total\"  *ngIf=\"listdepartseatselected else havenotchoiceyet\">{{totalpricedisplay}} \n                \n                </div>\n                <ng-template #havenotchoiceyet>\n                    <div class=\"text-havenotchoice-seat\">\n                        Chưa chọn ghế\n                    </div>\n                </ng-template>\n                \n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm(1)\" ion-button round outline class=\"button button-done\">Xác nhận</button>\n              </div>\n        </div>\n        <div *ngIf=\"(tabseat == 2 && (listReturnSeatNormal && listReturnSeatNormal.length>0))\" class=\"d-flex-footer div-width-100\">\n            <div class=\"div-total\">\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ listreturnseatselected }}\n                </div>\n                <div class=\"text-total\" *ngIf=\"listreturnseatselected else havenotchoicereturn\">{{totalreturnpricedisplay}} \n              \n              </div>\n              <ng-template #havenotchoicereturn>\n                <div class=\"text-havenotchoice-seat\">\n                    Chưa chọn ghế\n                </div>\n                </ng-template>\n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm(2)\" ion-button round outline class=\"button button-done\">Xác nhận</button>\n              </div>\n        </div>\n            \n        <!-- </ng-template> -->\n      \n    </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/flightaddseat/flightaddseat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flightaddseat/flightaddseat.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 12px !important;\n}\n\n.col-header {\n  height: 44px !important;\n  padding: 5px 0;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.seat-disabled {\n  visibility: hidden !important;\n}\n\n.new-seat-disabled {\n  display: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.div-text-empty {\n  font-size: 14px;\n  font-weight: 100;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #828282;\n}\n\n.div-empty {\n  margin-top: 124px;\n}\n\n.content-flightaddseat {\n  padding: 16px;\n}\n\n.content-flightaddseat .m-top-16 {\n  margin-top: 16px;\n}\n\n.content-flightaddseat .m-top-21 {\n  margin-top: 21px;\n}\n\n.content-flightaddseat .m-left-14 {\n  margin-left: 14px;\n}\n\n.content-flightaddseat .div-width-120 {\n  width: 120%;\n}\n\n.content-flightaddseat .div-rectangle {\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n}\n\n.content-flightaddseat .div-text {\n  height: 17px;\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  margin-left: 8px;\n  line-height: 12px;\n  letter-spacing: -0.4px;\n}\n\n.content-flightaddseat .cls-green {\n  background: #a0c245;\n}\n\n.content-flightaddseat .cls-tealish {\n  background: #26bed6;\n}\n\n.content-flightaddseat .cls-blue {\n  background: #003c71;\n}\n\n.content-flightaddseat .cls-red {\n  background: #e52822;\n}\n\n.content-flightaddseat .cls-gray {\n  background: #bdbdbd;\n}\n\n.content-flightaddseat .cls-orange {\n  background: #f59233;\n}\n\n.content-flightaddseat .text-title {\n  text-align: center;\n  height: 20px;\n  font-size: 17px;\n  font-weight: 600;\n  color: #828282;\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\n\n.content-flightaddseat .text-exit {\n  height: 14px;\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n  text-align: left;\n}\n\n.content-flightaddseat .div-seat-item {\n  width: 36px;\n  height: 30px;\n  margin-bottom: 20px;\n}\n\n.content-flightaddseat .div-seat-item .seat-icon {\n  width: 36px;\n  height: 30px;\n}\n\n.content-flightaddseat .lh-25 {\n  line-height: 25px;\n}\n\n.content-flightaddseat .div-seat-name {\n  height: 17px;\n  width: 36px;\n}\n\n.content-flightaddseat .div-seat-name .div-seat-icon {\n  text-align: center;\n}\n\n.content-flightaddseat .div-seat-name .text-seat {\n  font-size: 14px;\n  font-weight: 100;\n  color: #828282;\n  line-height: 17px;\n}\n\n.content-flightaddseat .div-number-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 100;\n  color: #828282;\n  width: 51px;\n  text-align: center;\n  height: 30px;\n}\n\n.content-flightaddseat .justify-content-between {\n  justify-content: space-between;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n  position: relative;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .text-havenotchoice-seat {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  color: #333333;\n  position: absolute;\n  bottom: 10px;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n\n.d-flex-footer {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodGFkZHNlYXQvZmxpZ2h0YWRkc2VhdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGFkZHNlYXQvZmxpZ2h0YWRkc2VhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKOztBREFBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0FDSUo7O0FERkE7RUFDSSw2QkFBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7QUNPSjs7QURMQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7QUNTSjs7QURQQTtFQUNJLGFBQUE7QUNVSjs7QURSSTtFQUNJLGdCQUFBO0FDVVI7O0FEUkk7RUFDSSxnQkFBQTtBQ1VSOztBRFBJO0VBQ0ksaUJBQUE7QUNTUjs7QURISTtFQUNJLFdBQUE7QUNLUjs7QURESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURESTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDR1I7O0FEQUk7RUFDSSxtQkFBQTtBQ0VSOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURBSTtFQUNJLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxtQkFBQTtBQ0VSOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURBSTtFQUNJLG1CQUFBO0FDRVI7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NSOztBREVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0RSOztBREdRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNEWjs7QURNSTtFQUNJLGlCQUFBO0FDSlI7O0FET0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0xSOztBRE9RO0VBQ0ksa0JBQUE7QUNMWjs7QURPUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0xaOztBRFNJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1BSOztBRFVJO0VBQ0ksOEJBQUE7QUNSUjs7QURhQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVko7O0FEWUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZSOztBRFlRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVlo7O0FEYVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1haOztBRGVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDYlI7O0FEZ0JJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDZFI7O0FEaUJJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNoQlI7O0FEb0JBO0VBQ0ksYUFBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGFkZHNlYXQvZmxpZ2h0YWRkc2VhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWhlYWRlci10aXRsZXtcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xufVxuLmNvbC1oZWFkZXJ7XG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNXB4IDA7XG59XG4uZGl2LXdpZHRoLTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zZWF0LWRpc2FibGVke1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuLm5ldy1zZWF0LWRpc2FibGVke1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi10ZXh0LWVtcHR5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1lbXB0eXtcbiAgICBtYXJnaW4tdG9wOiAxMjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXR7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5tLXRvcC0xNntcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgLm0tdG9wLTIxe1xuICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgIH1cblxuICAgIC5tLWxlZnQtMTR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgIH1cblxuICAgXG5cbiAgICBcbiAgICAuZGl2LXdpZHRoLTEyMHtcbiAgICAgICAgd2lkdGg6IDEyMCU7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5kaXYtcmVjdGFuZ2xle1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5kaXYtdGV4dHtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB9XG5cbiAgICAuY2xzLWdyZWVue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYTBjMjQ1O1xuICAgIH1cbiAgICAuY2xzLXRlYWxpc2h7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNmJlZDY7XG4gICAgfVxuICAgIC5jbHMtYmx1ZXtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwM2M3MTtcbiAgICB9XG4gICAgLmNscy1yZWR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNTI4MjI7XG4gICAgfVxuICAgIC5jbHMtZ3JheXtcbiAgICAgICAgYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgICB9XG4gICAgLmNscy1vcmFuZ2V7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNTkyMzM7XG4gICAgfVxuXG4gICAgLnRleHQtdGl0bGV7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnRleHQtZXhpdHtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC5kaXYtc2VhdC1pdGVte1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIC5zZWF0LWljb257XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cbiAgICAubGgtMjV7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIH1cblxuICAgIC5kaXYtc2VhdC1uYW1le1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuXG4gICAgICAgIC5kaXYtc2VhdC1pY29ue1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXNlYXR7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtbnVtYmVyLWNlbnRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIHdpZHRoOiA1MXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAuanVzdGlmeS1jb250ZW50LWJldHdlZW57XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG59XG5cblxuLmRpdi1mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcblxuICAgIC5kaXYtdG90YWx7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAudGV4dC1zdWItdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC1oYXZlbm90Y2hvaWNlLXNlYXR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIH0gXG59XG5cbi5kLWZsZXgtZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1oZWFkZXIge1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWF0LWRpc2FibGVkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5uZXctc2VhdC1kaXNhYmxlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdi10ZXh0LWVtcHR5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi1lbXB0eSB7XG4gIG1hcmdpbi10b3A6IDEyNHB4O1xufVxuXG4uY29udGVudC1mbGlnaHRhZGRzZWF0IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLm0tdG9wLTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLm0tdG9wLTIxIHtcbiAgbWFyZ2luLXRvcDogMjFweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLm0tbGVmdC0xNCB7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LXdpZHRoLTEyMCB7XG4gIHdpZHRoOiAxMjAlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LXJlY3RhbmdsZSB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi10ZXh0IHtcbiAgaGVpZ2h0OiAxN3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmNscy1ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICNhMGMyNDU7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5jbHMtdGVhbGlzaCB7XG4gIGJhY2tncm91bmQ6ICMyNmJlZDY7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5jbHMtYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDNjNzE7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5jbHMtcmVkIHtcbiAgYmFja2dyb3VuZDogI2U1MjgyMjtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmNscy1ncmF5IHtcbiAgYmFja2dyb3VuZDogI2JkYmRiZDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmNscy1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAudGV4dC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC50ZXh0LWV4aXQge1xuICBoZWlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtc2VhdC1pdGVtIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi1zZWF0LWl0ZW0gLnNlYXQtaWNvbiB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5saC0yNSB7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LXNlYXQtbmFtZSB7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDM2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtc2VhdC1uYW1lIC5kaXYtc2VhdC1pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LXNlYXQtbmFtZSAudGV4dC1zZWF0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtbnVtYmVyLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xuICB3aWR0aDogNTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwge1xuICB3aWR0aDogMjEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXN1Yi10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWZvb3RlciAudGV4dC1oYXZlbm90Y2hvaWNlLXNlYXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightaddseat/flightaddseat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightaddseat/flightaddseat.page.ts ***!
  \*****************************************************/
/*! exports provided: FlightaddseatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaddseatPage", function() { return FlightaddseatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");







let FlightaddseatPage = class FlightaddseatPage {
    constructor(platform, navCtrl, modalCtrl, valueGlobal, searchhotel, gf, actionsheetCtrl, pickerController, zone, _flightService) {
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
        this.slideOpts = {
            loop: false,
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10,
            zoom: {
                toggle: false
            }
        };
        this.tabseat = 1;
        this.adults = 2;
        this.child = 0;
        this.room = 1;
        this.arrchild = [];
        this.ischeckadults = true;
        this.ischeckchild = false;
        this.ischeckroom = false;
        this.showpopupfromrequestcombo = false;
        this.departSeat = [];
        this.returnSeat = [];
        this.quantitydisplay = "Chưa chọn";
        this.quantityreturndisplay = "Chưa chọn";
        this.totalprice = 0;
        this.totalquantity = 0;
        this.totaldepartquantity = 0;
        this.totalreturnquantity = 0;
        this.totalpricedisplay = "0đ";
        this.totalreturnpricedisplay = "0đ";
        this.listdepartseatselected = "";
        this.listreturnseatselected = "";
        this.listSeatNameLeft = ['A', 'B', 'C'];
        this.listSeatNameRight = ['D', 'E', 'F'];
        this.totalreturnprice = 0;
        this.listSeatNormal = [];
        this.listReturnSeatNormal = [];
        this.departSeatChoice = [];
        this.returnSeatChoice = [];
        this.departnewmodel = false;
        this.returnnewmodel = false;
        this.listSeatRollback = [];
        this.listReturnSeatRollback = [];
        this.departSeatTemp = [];
        this.returnSeatTemp = [];
        this.roundtrip = this._flightService.itemFlightCache.roundTrip;
        if (this._flightService.itemFlightCache.isnewmodelseat || this._flightService.itemFlightCache.isnewmodelreturnseat) {
            if (this._flightService.itemFlightCache.isnewmodelseat) {
                this.departnewmodel = true;
                this.listSeatName = this._flightService.itemFlightCache.listSeatName;
                if (this.listSeatName && this.listSeatName.indexOf('-1') == -1) {
                    this.listSeatName.splice(3, 0, '-1');
                    this.listSeatName.splice(7, 0, '-1');
                }
            }
            this.listSeatNormal = this._flightService.itemFlightCache.listSeatNormal;
            if (this._flightService.itemFlightCache.isnewmodelreturnseat) {
                this.listReturnSeatName = this._flightService.itemFlightCache.listReturnSeatName;
                if (this.listReturnSeatName && this.listReturnSeatName.indexOf('-1') == -1) {
                    this.listReturnSeatName.splice(3, 0, '-1');
                    this.listReturnSeatName.splice(7, 0, '-1');
                }
                this.returnnewmodel = true;
            }
            this.listReturnSeatNormal = this._flightService.itemFlightCache.listReturnSeatNormal;
        }
        else if ((this._flightService.itemFlightCache.listSeatNormal && this._flightService.itemFlightCache.listSeatNormal.length > 0) || (this._flightService.itemFlightCache.listReturnSeatNormal && this._flightService.itemFlightCache.listReturnSeatNormal.length > 0)) {
            this.listSeatNormal = this._flightService.itemFlightCache.listSeatNormal;
            this.listReturnSeatNormal = this._flightService.itemFlightCache.listReturnSeatNormal;
        }
        if (this._flightService.itemFlightCache.listdepartseatselected || this._flightService.itemFlightCache.listreturnseatselected) {
            this.totalquantity = this._flightService.itemFlightCache.departSeatChoice.length;
            this.totalreturnprice = this._flightService.itemFlightCache.returnSeatChoice.length;
            this.departSeatChoice = [...this._flightService.itemFlightCache.departSeatChoice];
            this.returnSeatChoice = [...this._flightService.itemFlightCache.returnSeatChoice];
            if (this.departSeatChoice && this.departSeatChoice.length > 0) {
                this.haschoiceseat = true;
            }
            if (this.returnSeatChoice && this.returnSeatChoice.length > 0) {
                this.haschoiceseatreturn = true;
            }
            this.listdepartseatselected = this._flightService.itemFlightCache.listdepartseatselected;
            this.listreturnseatselected = this._flightService.itemFlightCache.listreturnseatselected;
            this.totalprice = this._flightService.itemFlightCache.departSeatChoiceAmout;
            this.totalreturnprice = this._flightService.itemFlightCache.returnSeatChoiceAmout;
            this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
            this.totalreturnpricedisplay = this.gf.convertNumberToString(this.totalreturnprice) + "đ";
        }
    }
    ngOnInit() {
        this._flightService.itemFlightReChoiceSeat.pipe().subscribe((data) => {
            if (data) {
                if (this.departSeatChoice && this.departSeatChoice.length > 0) {
                    this.departSeatChoice.forEach((s) => {
                        s.booked = false;
                    });
                    this.departSeatChoice = [];
                    this.listdepartseatselected = "";
                }
                if (this.returnSeatChoice && this.returnSeatChoice.length > 0) {
                    this.returnSeatChoice.forEach((s) => {
                        s.booked = false;
                    });
                    this.returnSeatChoice = [];
                    this.listreturnseatselected = "";
                }
                this.totalprice = 0;
                this.totalreturnprice = 0;
                this.totalpricedisplay = "0đ";
                this.totalreturnpricedisplay = "0đ";
            }
        });
    }
    goback() {
        this.departSeatChoice = this._flightService.itemFlightCache.departSeatChoice;
        this.listdepartseatselected = this._flightService.itemFlightCache.listdepartseatselected;
        this.totalprice = this._flightService.itemFlightCache.departSeatChoiceAmout;
        this.returnSeatChoice = this._flightService.itemFlightCache.returnSeatChoice;
        this.listreturnseatselected = this._flightService.itemFlightCache.listreturnseatselected;
        this.totalreturnprice = this._flightService.itemFlightCache.returnSeatChoiceAmout;
        if (this.listSeatRollback && this.listSeatRollback.length > 0) {
            this.listSeatRollback.forEach((item) => {
                if (this._flightService.itemFlightCache.listdepartseatselected && this._flightService.itemFlightCache.listdepartseatselected.indexOf(item.name) != -1) {
                    item.booked = true;
                }
            });
        }
        if (this.departSeatTemp && this.departSeatTemp.length > 0) {
            this.departSeatTemp.forEach((item) => {
                if (this._flightService.itemFlightCache.listdepartseatselected && this._flightService.itemFlightCache.listdepartseatselected.indexOf(item.name) == -1) {
                    item.booked = false;
                }
                else if (!this._flightService.itemFlightCache.listdepartseatselected && (!this.departSeatChoice || this.departSeatChoice.length == 0)) {
                    item.booked = false;
                }
            });
        }
        if (this.listReturnSeatRollback && this.listReturnSeatRollback.length > 0) {
            this.listReturnSeatRollback.forEach((item) => {
                if (this._flightService.itemFlightCache.listreturnseatselected && this._flightService.itemFlightCache.listreturnseatselected.indexOf(item.name) != -1) {
                    item.booked = true;
                }
            });
        }
        if (this.returnSeatTemp && this.returnSeatTemp.length > 0) {
            this.returnSeatTemp.forEach((item) => {
                if (this._flightService.itemFlightCache.listreturnseatselected && this._flightService.itemFlightCache.listreturnseatselected.indexOf(item.name) == -1) {
                    item.booked = false;
                }
                else if (!this._flightService.itemFlightCache.listreturnseatselected && (!this.returnSeatChoice || this.returnSeatChoice.length == 0)) {
                    item.booked = false;
                }
            });
        }
        if (!this.haschoiceseat) {
            if (this.departSeatChoice && this.departSeatChoice.length > 0) {
                this.departSeatChoice.forEach((s) => {
                    s.booked = false;
                });
                this.departSeatChoice = [];
                this.listdepartseatselected = "";
            }
        }
        if (this.departSeatChoice && this.departSeatChoice.length > 0) {
            this.departSeatChoice.forEach((s) => {
                if (this._flightService.itemFlightCache.listdepartseatselected.indexOf(s.name) == -1) {
                    s.booked = false;
                }
            });
        }
        if (!this.haschoiceseatreturn) {
            if (this.returnSeatChoice && this.returnSeatChoice.length > 0) {
                this.returnSeatChoice.forEach((s) => {
                    s.booked = false;
                });
                this.returnSeatChoice = [];
                this.listreturnseatselected = "";
            }
        }
        if (this.returnSeatChoice && this.returnSeatChoice.length > 0) {
            this.returnSeatChoice.forEach((s) => {
                if (this._flightService.itemFlightCache.listreturnseatselected.indexOf(s.name) == -1) {
                    s.booked = false;
                }
            });
        }
        this.navCtrl.navigateBack('/flightaddservice');
    }
    plusroom(item, isdepart) {
        this.zone.run(() => {
            let maxseat = (this._flightService.itemFlightCache.pax - (this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0));
            if (this.totalquantity < maxseat) {
                item.quantity++;
                this.totalquantity++;
                this.totalprice += item.quantity * item.amount;
                this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
                if (isdepart) {
                    this.totaldepartquantity++;
                    this.quantitydisplay = this.totaldepartquantity + " kiện";
                }
                else {
                    this.totalreturnquantity++;
                    this.quantityreturndisplay = this.totalreturnquantity + " kiện";
                }
            }
            else {
                this.gf.showToastWarning("Số chỗ ngồi không được vượt quá số khách. Xin vui lòng kiểm tra lại!");
            }
        });
    }
    minusroom(item, isdepart) {
        this.zone.run(() => {
            if (item.quantity >= 1) {
                this.totalprice -= item.quantity * item.amount;
                this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
                if (isdepart) {
                    this.totaldepartquantity--;
                    this.quantitydisplay = this.totaldepartquantity > 0 ? (this.totaldepartquantity + " kiện") : "Chưa chọn";
                }
                else {
                    this.totalreturnquantity--;
                    this.quantityreturndisplay = this.totalreturnquantity > 0 ? (this.totalreturnquantity + " kiện") : "Chưa chọn";
                }
                item.quantity--;
                this.totalquantity--;
            }
        });
    }
    confirm() {
        this._flightService.itemFlightCache.departSeatChoice = [...this.departSeatChoice];
        this._flightService.itemFlightCache.returnSeatChoice = [...this.returnSeatChoice];
        this._flightService.itemFlightCache.listdepartseatselected = this.listdepartseatselected;
        this._flightService.itemFlightCache.listreturnseatselected = this.listreturnseatselected;
        this._flightService.itemFlightCache.departSeatChoiceAmout = this.totalprice;
        this._flightService.itemFlightCache.returnSeatChoiceAmout = this.totalreturnprice;
        this._flightService.itemFlightCache.listSeatNormal = this.listSeatNormal;
        this._flightService.itemFlightCache.listReturnSeatNormal = this.listReturnSeatNormal;
        this._flightService.itemFlightSeatPriceChange.emit(true);
        if (this.departSeatChoice && this.departSeatChoice.length > 0) {
            this.haschoiceseat = true;
        }
        if (this.returnSeatChoice && this.returnSeatChoice.length > 0) {
            this.haschoiceseatreturn = true;
        }
        if (this.tabseat == 1 && this.listReturnSeatNormal && this.listReturnSeatNormal.length > 0) {
            this.SelectTab(2);
        }
        else {
            this.navCtrl.navigateBack('/flightaddservice');
        }
    }
    choiceSeat(seat, tabindex) {
        let airlinecode = (tabindex == 1 ? this._flightService.itemFlightCache.departFlight.airlineCode : this._flightService.itemFlightCache.returnFlight.airlineCode);
        let seatname = seat.name.substring(0, seat.name.length - 1);
        if (seat.type == 5) {
            this.gf.showToastWarning('Ghế đã được chọn. Vui lòng chọn ghế khác!');
            return;
        }
        if (seat.type == 3 && this._flightService.itemFlightCache.infant) {
            this.gf.showToastWarning('Ghế hạn chế khi có trẻ nhỏ đi cùng. Vui lòng chọn ghế khác!');
            return;
        }
        if (seat.type == 3) {
            this.gf.showToastWarning('Ghế hạn chế. Vui lòng chọn ghế khác!');
            return;
        }
        if (seat.type == 6) {
            this.gf.showToastWarning('Ghế hạn chế. Vui lòng chọn ghế khác!');
            return;
        }
        if (seat.type == -1) {
            return;
        }
        this.zone.run(() => {
            if (!seat.booked) {
                if (this.checkPax()) {
                    seat.booked = true;
                    if (tabindex == 1) {
                        this.listdepartseatselected += this.listdepartseatselected.length == 0 ? seat.name : (", " + seat.name);
                    }
                    else {
                        this.listreturnseatselected += this.listreturnseatselected.length == 0 ? seat.name : (", " + seat.name);
                    }
                    if (tabindex == 1) {
                        this.departSeatTemp.push(seat);
                        this.totalprice += seat.amount;
                        this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
                        this.departSeatChoice.push(seat);
                    }
                    else {
                        this.returnSeatTemp.push(seat);
                        this.totalreturnprice += seat.amount;
                        this.totalreturnpricedisplay = this.gf.convertNumberToString(this.totalreturnprice) + "đ";
                        this.returnSeatChoice.push(seat);
                    }
                }
            }
            else {
                seat.booked = false;
                let textreplace = ", " + seat.name;
                if (this.listdepartseatselected.indexOf(textreplace) != -1 || this.listreturnseatselected.indexOf(textreplace) != -1) {
                    if (tabindex == 1) {
                        this.listdepartseatselected = this.listdepartseatselected.replace(textreplace, "");
                    }
                    else {
                        this.listreturnseatselected = this.listreturnseatselected.replace(textreplace, "");
                    }
                }
                if (this.listdepartseatselected.indexOf(seat.name + ", ") != -1 || this.listreturnseatselected.indexOf(seat.name + ", ") != -1) {
                    if (tabindex == 1) {
                        this.listdepartseatselected = this.listdepartseatselected.replace(seat.name + ", ", "");
                    }
                    else {
                        this.listreturnseatselected = this.listreturnseatselected.replace(seat.name + ", ", "");
                    }
                }
                if (this.listdepartseatselected.indexOf(seat.name) != -1 || this.listreturnseatselected.indexOf(seat.name) != -1) {
                    if (tabindex == 1) {
                        this.listdepartseatselected = this.listdepartseatselected.replace(seat.name, "");
                    }
                    else {
                        this.listreturnseatselected = this.listreturnseatselected.replace(seat.name, "");
                    }
                }
                if (tabindex == 1) {
                    this.listSeatRollback.push(seat);
                    this.totalprice -= seat.amount;
                    this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
                    this.gf.removeItemInArrayByName(this.departSeatChoice, seat);
                }
                else {
                    this.listReturnSeatRollback.push(seat);
                    this.totalreturnprice -= seat.amount;
                    this.totalreturnpricedisplay = this.gf.convertNumberToString(this.totalreturnprice) + "đ";
                    this.gf.removeItemInArrayByName(this.returnSeatChoice, seat);
                }
            }
        });
    }
    slidetabchange() {
        this.sliderTab.getActiveIndex().then(index => {
            this.tabseat = index + 1;
        });
        this.contentFlightAddSeat.scrollToTop(200);
    }
    SelectTab(tabindex) {
        this.tabseat = tabindex;
        this.sliderTab.slideTo(tabindex - 1);
        this.contentFlightAddSeat.scrollToTop(200);
    }
    checkPax() {
        let maxseat = (this._flightService.itemFlightCache.pax - (this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0));
        if (this.departSeatChoice.length == maxseat && this.tabseat == 1) {
            if (this._flightService.itemFlightCache.infant) {
                this.gf.showToastWarning("Không chọn ghế cho em bé. Vui lòng kiểm tra lại!");
            }
            else {
                this.gf.showToastWarning("Số ghế không được vượt quá số khách. Vui lòng kiểm tra lại!");
            }
            return false;
        }
        if (this.returnSeatChoice.length == maxseat && this.tabseat == 2) {
            if (this._flightService.itemFlightCache.infant) {
                this.gf.showToastWarning("Không chọn ghế cho em bé. Vui lòng kiểm tra lại!");
            }
            else {
                this.gf.showToastWarning("Số ghế không được vượt quá số khách. Vui lòng kiểm tra lại!");
            }
            return false;
        }
        return true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideTab'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], FlightaddseatPage.prototype, "sliderTab", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollFlightAddSeat'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], FlightaddseatPage.prototype, "contentFlightAddSeat", void 0);
FlightaddseatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightaddseat',
        template: __webpack_require__(/*! ./flightaddseat.page.html */ "./src/app/flightaddseat/flightaddseat.page.html"),
        styles: [__webpack_require__(/*! ./flightaddseat.page.scss */ "./src/app/flightaddseat/flightaddseat.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_5__["flightService"]])
], FlightaddseatPage);



/***/ })

}]);
//# sourceMappingURL=flightaddseat-flightaddseat-module.js.map