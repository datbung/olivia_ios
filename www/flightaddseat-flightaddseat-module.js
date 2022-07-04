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

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Chọn chỗ ngồi</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-segment [(ngModel)]=\"tabseat\" class=\"div-segment\"  mode=\"md\">\n          <ion-segment-button (click)=\"SelectTab(1)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"1\" >\n            Chiều đi\n            </ion-segment-button>\n            <ion-segment-button (click)=\"SelectTab(2)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"2\" *ngIf=\"roundtrip\">\n            Chiều về\n            </ion-segment-button>\n          </ion-segment>\n      </ion-row>\n  </ion-header>\n\n  <ion-content #scrollFlightAddSeat>\n    <div class=\"content-flightaddseat\" >\n\n        <ion-slides #slideTab (ionSlideDidChange)=\"slidetabchange()\" [options]=\"slideOpts\">\n            <!-- Chiều đi -->\n            <ion-slide style=\"display: block;\" *ngIf=\"(listSeatNormal && listSeatNormal.length>0) else departSeatFixed\">\n                <div>\n                    <div class=\"d-flex m-top-4\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-green\"></div>\n                            <div class=\"div-text\">Ghế thường</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-tealish\"></div>\n                            <div class=\"div-text \">Ghế phía trước</div>\n                        </div>\n                    </div>\n            \n                    <div class=\"d-flex m-top-16\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-blue\"></div>\n                            <div class=\"div-text\">Ghế gần lối thoát hiểm</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-red\"></div>\n                            <div class=\"div-text\">Ghế đặc biệt</div>\n                        </div>\n                    </div>\n            \n                    <div class=\"d-flex m-top-16\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-gray\"></div>\n                            <div class=\"div-text\">Ghế đã được chọn</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-orange\"></div>\n                            <div class=\"div-text\">Ghế đang chọn</div>\n                        </div>\n                    </div>\n        \n                    <div class=\"text-title\">\n                        BUỒNG LÁI\n                    </div>\n                    \n                </div>\n                \n                    <div class=\"text-exit\">Lối ra</div>\n                    <div *ngIf=\"!departnewmodel\">\n                        <div class=\"div-seat m-top-21\" >\n        \n                            <div class=\"d-flex justify-content-between lh-25\">\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatNameLeft; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\">\n                                        {{item}}\n                                    </div>\n                                </div>\n                                <div class=\"div-number-center\"></div>\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatNameRight; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\">\n                                        {{item}}\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            \n                            <div class=\"div-ahead\">\n            \n                                <div class=\"d-flex justify-content-between\" *ngFor=\"let itemnormal of listSeatNormal; let idx =index\">\n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemnormal.itemsLeft; let idx1 =index\"  (click)=\"choiceSeat(itemseat,1)\">\n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1\">\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                    </div>\n    \n                                    <div class=\"div-number-center\">{{itemnormal.row}}</div>\n    \n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemnormal.itemsRight; let idx1 =index\" (click)=\"choiceSeat(itemseat,1)\">\n                                        \n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1\">\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                </div>\n            \n                            </div>\n                        </div>\n                    </div>\n                \n\n                    \n                    <div *ngIf=\"departnewmodel\">\n                        <div class=\"div-seat m-top-21\" >\n                            <div class=\"d-flex justify-content-between lh-25\">\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name  m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatName; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\" *ngIf=\"item != '-1'\">\n                                        {{item}}\n                                    </div>\n                                    <div class=\"div-seat-icon text-seat seat-disabled\" *ngIf=\"item == '-1'\"></div>\n                                </div>\n                              \n                            </div>\n    \n                            <div class=\"div-ahead\">\n            \n                                <div class=\"d-flex justify-content-between\" *ngFor=\"let itemnormal of listSeatNormal; let idx =index\">\n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemnormal.itemsNormal; let idx1 =index\"  (click)=\"choiceSeat(itemseat,1)\">\n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon new-seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1 && idx !=  3 && idx != 7\">\n                                            <div class=\"seat-icon div-number-center\" *ngIf=\"itemseat.type == -1 && (idx1 ==  3 || idx1 == 7)\">{{itemnormal.row}}</div>\n\n                                            <img class=\"seat-icon new-seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -2 && idx !=  3 && idx != 7\">\n                                            <div class=\"seat-icon div-number-center\" *ngIf=\"itemseat.type == -2 && (idx1 ==  3 || idx1 == 7)\">{{itemnormal.row}}</div>\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                       \n                                    </div>\n                                    \n    \n                                </div>\n            \n                            </div>\n                        </div>\n                    </div>\n        \n\n            </ion-slide>\n            <ng-template #departSeatFixed>\n                <ion-slide style=\"display: block;\">\n                    <div class=\"div-empty text-center\">\n                        <img class=\"img-empty-seat\" src=\"./assets/ic_flight/flight_empty_seat.svg\">\n                    </div>\n                    <div class=\"div-text-empty m-top-24  text-center\">Chuyến bay chưa hỗ trợ chọn ghế</div>\n                </ion-slide>\n            </ng-template>\n\n            <!-- Chiều về -->\n            <ion-slide style=\"display: block;\" *ngIf=\"(listReturnSeatNormal && listReturnSeatNormal.length>0 && roundtrip) else returnSeatFixed\">\n                <div>\n                    <div class=\"d-flex m-top-4\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-green\"></div>\n                            <div class=\"div-text\">Ghế thường</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-tealish\"></div>\n                            <div class=\"div-text \">Ghế phía trước</div>\n                        </div>\n                    </div>\n            \n                    <div class=\"d-flex m-top-16\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-blue\"></div>\n                            <div class=\"div-text\">Ghế gần lối thoát hiểm</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-red\"></div>\n                            <div class=\"div-text\">Ghế đặc biệt</div>\n                        </div>\n                    </div>\n            \n                    <div class=\"d-flex m-top-16\">\n                        <div class=\"div-width-120 d-flex\">\n                            <div class=\"div-rectangle cls-gray\"></div>\n                            <div class=\"div-text\">Ghế đã được chọn</div>\n                        </div>\n                        <div class=\"div-width-100 d-flex m-left-14\">\n                            <div class=\"div-rectangle cls-orange\"></div>\n                            <div class=\"div-text\">Ghế đang chọn</div>\n                        </div>\n                    </div>\n        \n                    <div class=\"text-title\">\n                        BUỒNG LÁI\n                    </div>\n                    \n                </div>\n                \n        \n                <div>\n                    <div class=\"text-exit\">Lối ra</div>\n                    \n                    <div *ngIf=\"!returnnewmodel\">\n                        <div class=\"div-seat m-top-21\">\n        \n                            <div class=\"d-flex justify-content-between lh-25\">\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatNameLeft; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\">\n                                        {{item}}\n                                    </div>\n                                </div>\n                                <div class=\"div-number-center\"></div>\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name m-left-14':'div-seat-name'\" *ngFor=\"let item of listSeatNameRight; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\">\n                                        {{item}}\n                                    </div>\n                                </div>\n                            </div>\n                            \n                            \n                            <div class=\"div-ahead\">\n                               \n                                <div class=\"d-flex justify-content-between\" *ngFor=\"let itemReturnnormal of listReturnSeatNormal; let idx =index\">\n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemReturnnormal.itemsLeft; let idx1 =index\"  (click)=\"choiceSeat(itemseat,2)\">\n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1\">\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                    </div>\n    \n                                    <div class=\"div-number-center\">{{itemReturnnormal.row}}</div>\n    \n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemReturnnormal.itemsRight; let idx1 =index\" (click)=\"choiceSeat(itemseat,2)\">\n                                        \n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1\">\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                </div>\n            \n                            </div>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"returnnewmodel\">\n                        <div class=\"div-seat m-top-21\" >\n                            <div class=\"d-flex justify-content-between lh-25\">\n                                <div [ngClass]=\"idx1 >0 ? 'div-seat-name  m-left-14':'div-seat-name'\" *ngFor=\"let item of listReturnSeatName; let idx1 =index\">\n                                    <div class=\"div-seat-icon text-seat\" *ngIf=\"item != '-1'\">\n                                        {{item}}\n                                    </div>\n                                    <div class=\"div-seat-icon text-seat seat-disabled\" *ngIf=\"item == '-1'\"></div>\n                                </div>\n                              \n                            </div>\n    \n                            <div class=\"div-ahead\">\n            \n                                <div class=\"d-flex justify-content-between\" *ngFor=\"let itemReturnnormal of listReturnSeatNormal; let idx =index\">\n                                    <div [ngClass]=\"idx1 >0 ? 'div-seat-item m-left-14':'div-seat-item'\" *ngFor=\"let itemseat of itemReturnnormal.itemsNormal; let idx1 =index\"  (click)=\"choiceSeat(itemseat,2)\">\n                                        <div class=\"div-seat-icon\" *ngIf=\"!itemseat.booked else seatbooked\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_blue.svg\" *ngIf=\" itemseat.type == 2\" >\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_green.svg\" *ngIf=\" itemseat.type == 1\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_navi.svg\" *ngIf=\" itemseat.type == 3\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_red.svg\" *ngIf=\" itemseat.type == 4\">\n                                            <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == 5 || itemseat.type == 6\">\n                                            <img class=\"seat-icon new-seat-disabled\" src=\"./assets/ic_flight/icon_seat_gray.svg\" *ngIf=\" itemseat.type == -1 && idx !=  3 && idx != 7\">\n                                            <div class=\"seat-icon div-number-center\" *ngIf=\"itemseat.type == -1 && (idx1 ==  3 || idx1 == 7)\">{{itemReturnnormal.row}}</div>\n                                        </div>\n                                        <ng-template #seatbooked>\n                                            <div class=\"div-seat-icon\">\n                                                <img class=\"seat-icon\" src=\"./assets/ic_flight/icon_seat_orange.svg\">\n                                            </div>\n                                        </ng-template>\n                                       \n                                    </div>\n                                    \n    \n                                </div>\n            \n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </ion-slide>\n            <ng-template #returnSeatFixed>\n                <ion-slide style=\"display: block;\" *ngIf=\"roundtrip\">\n                    <div class=\"div-empty text-center\">\n                        <img class=\"img-empty-seat\" src=\"./assets/ic_flight/flight_empty_seat.svg\">\n                    </div>\n                    <div class=\"div-text-empty m-top-24  text-center\">Chuyến bay chưa hỗ trợ chọn ghế</div>\n                </ion-slide>\n            </ng-template>\n        </ion-slides>\n        \n    </div>\n  </ion-content>\n\n  <ion-footer>\n    <div class=\"div-footer d-flex-footer\">\n        <div *ngIf=\"(tabseat == 1 && (listSeatNormal && listSeatNormal.length>0))\" class=\"d-flex-footer div-width-100\">\n            <div class=\"div-total\" >\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ listdepartseatselected }}\n                </div>\n                <div class=\"text-total\"  *ngIf=\"listdepartseatselected else havenotchoiceyet\">{{totalpricedisplay}} \n                \n                </div>\n                <ng-template #havenotchoiceyet>\n                    <div class=\"text-havenotchoice-seat\">\n                        Chưa chọn ghế\n                    </div>\n                </ng-template>\n                \n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm(1)\" ion-button round outline class=\"button button-done\">Xác nhận</button>\n              </div>\n        </div>\n        <div *ngIf=\"(tabseat == 2 && (listReturnSeatNormal && listReturnSeatNormal.length>0))\" class=\"d-flex-footer div-width-100\">\n            <div class=\"div-total\">\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ listreturnseatselected }}\n                </div>\n                <div class=\"text-total\" *ngIf=\"listreturnseatselected else havenotchoicereturn\">{{totalreturnpricedisplay}} \n              \n              </div>\n              <ng-template #havenotchoicereturn>\n                <div class=\"text-havenotchoice-seat\">\n                    Chưa chọn ghế\n                </div>\n                </ng-template>\n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm(2)\" ion-button round outline class=\"button button-done\">Xác nhận</button>\n              </div>\n        </div>\n            \n        <!-- </ng-template> -->\n      \n    </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/flightaddseat/flightaddseat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flightaddseat/flightaddseat.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 12px !important;\n}\n\n.col-header {\n  height: 44px !important;\n  padding: 5px 0;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.seat-disabled {\n  visibility: hidden !important;\n}\n\n.new-seat-disabled {\n  display: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.div-text-empty {\n  font-size: 14px;\n  font-weight: 100;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #828282;\n}\n\n.div-empty {\n  margin-top: 124px;\n}\n\n.content-flightaddseat {\n  padding: 16px;\n}\n\n.content-flightaddseat .m-top-16 {\n  margin-top: 16px;\n}\n\n.content-flightaddseat .m-top-21 {\n  margin-top: 21px;\n}\n\n.content-flightaddseat .m-left-14 {\n  margin-left: 14px;\n}\n\n.content-flightaddseat .div-width-120 {\n  width: 120%;\n}\n\n.content-flightaddseat .div-rectangle {\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n}\n\n.content-flightaddseat .div-text {\n  height: 17px;\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  margin-left: 8px;\n  line-height: 12px;\n  letter-spacing: -0.4px;\n}\n\n.content-flightaddseat .cls-green {\n  background: #a0c245;\n}\n\n.content-flightaddseat .cls-tealish {\n  background: #26bed6;\n}\n\n.content-flightaddseat .cls-blue {\n  background: #003c71;\n}\n\n.content-flightaddseat .cls-red {\n  background: #e52822;\n}\n\n.content-flightaddseat .cls-gray {\n  background: #bdbdbd;\n}\n\n.content-flightaddseat .cls-orange {\n  background: #f59233;\n}\n\n.content-flightaddseat .text-title {\n  text-align: center;\n  height: 20px;\n  font-size: 17px;\n  font-weight: 600;\n  color: #828282;\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\n\n.content-flightaddseat .text-exit {\n  height: 14px;\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n  text-align: left;\n}\n\n.content-flightaddseat .div-seat-item {\n  width: 36px;\n  height: 30px;\n  margin-bottom: 20px;\n}\n\n.content-flightaddseat .div-seat-item .seat-icon {\n  width: 36px;\n  height: 30px;\n}\n\n.content-flightaddseat .lh-25 {\n  line-height: 25px;\n}\n\n.content-flightaddseat .div-seat-name {\n  height: 17px;\n  width: 36px;\n}\n\n.content-flightaddseat .div-seat-name .div-seat-icon {\n  text-align: center;\n}\n\n.content-flightaddseat .div-seat-name .text-seat {\n  font-size: 14px;\n  font-weight: 100;\n  color: #828282;\n  line-height: 17px;\n}\n\n.content-flightaddseat .div-number-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 100;\n  color: #828282;\n  width: 51px;\n  text-align: center;\n  height: 30px;\n}\n\n.content-flightaddseat .justify-content-between {\n  justify-content: space-between;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n  position: relative;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .text-havenotchoice-seat {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  color: #333333;\n  position: absolute;\n  bottom: 10px;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n\n.d-flex-footer {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0YWRkc2VhdC9mbGlnaHRhZGRzZWF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0YWRkc2VhdC9mbGlnaHRhZGRzZWF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QURGQTtFQUNJLDZCQUFBO0FDS0o7O0FESEE7RUFDSSxhQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtBQ09KOztBRExBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksYUFBQTtBQ1VKOztBRFJJO0VBQ0ksZ0JBQUE7QUNVUjs7QURSSTtFQUNJLGdCQUFBO0FDVVI7O0FEUEk7RUFDSSxpQkFBQTtBQ1NSOztBREhJO0VBQ0ksV0FBQTtBQ0tSOztBRERJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNHUjs7QURBSTtFQUNJLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxtQkFBQTtBQ0VSOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURBSTtFQUNJLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxtQkFBQTtBQ0VSOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FERUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRFI7O0FER1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RaOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURPSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDTFI7O0FET1E7RUFDSSxrQkFBQTtBQ0xaOztBRE9RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTFo7O0FEU0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDUFI7O0FEVUk7RUFDSSw4QkFBQTtBQ1JSOztBRGFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNWSjs7QURZSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVlI7O0FEWVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNWWjs7QURhUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDWFo7O0FEZUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNiUjs7QURnQkk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNkUjs7QURpQkk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ2hCUjs7QURvQkE7RUFDSSxhQUFBO0FDakJKIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0YWRkc2VhdC9mbGlnaHRhZGRzZWF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtaGVhZGVyLXRpdGxle1xuICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uY29sLWhlYWRlcntcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbn1cbi5kaXYtd2lkdGgtMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNlYXQtZGlzYWJsZWR7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG4ubmV3LXNlYXQtZGlzYWJsZWR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LXRleHQtZW1wdHkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LWVtcHR5e1xuICAgIG1hcmdpbi10b3A6IDEyNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLm0tdG9wLTE2e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgICAubS10b3AtMjF7XG4gICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgfVxuXG4gICAgLm0tbGVmdC0xNHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgfVxuXG4gICBcblxuICAgIFxuICAgIC5kaXYtd2lkdGgtMTIwe1xuICAgICAgICB3aWR0aDogMTIwJTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmRpdi1yZWN0YW5nbGV7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgLmRpdi10ZXh0e1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIH1cblxuICAgIC5jbHMtZ3JlZW57XG4gICAgICAgIGJhY2tncm91bmQ6ICNhMGMyNDU7XG4gICAgfVxuICAgIC5jbHMtdGVhbGlzaHtcbiAgICAgICAgYmFja2dyb3VuZDogIzI2YmVkNjtcbiAgICB9XG4gICAgLmNscy1ibHVle1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAzYzcxO1xuICAgIH1cbiAgICAuY2xzLXJlZHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U1MjgyMjtcbiAgICB9XG4gICAgLmNscy1ncmF5e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xuICAgIH1cbiAgICAuY2xzLW9yYW5nZXtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1OTIzMztcbiAgICB9XG5cbiAgICAudGV4dC10aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAudGV4dC1leGl0e1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmRpdi1zZWF0LWl0ZW17XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgLnNlYXQtaWNvbntcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuICAgIC5saC0yNXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgfVxuXG4gICAgLmRpdi1zZWF0LW5hbWV7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG5cbiAgICAgICAgLmRpdi1zZWF0LWljb257XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtc2VhdHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1udW1iZXItY2VudGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgd2lkdGg6IDUxcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cblxuICAgIC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbn1cblxuXG4uZGl2LWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgLmRpdi10b3RhbHtcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC50ZXh0LXN1Yi10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0LWhhdmVub3RjaG9pY2Utc2VhdHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmRpdi1idXR0b257XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmJ1dHRvblxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgfSBcbn1cblxuLmQtZmxleC1mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xufVxuXG4uY29sLWhlYWRlciB7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXQtZGlzYWJsZWQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm5ldy1zZWF0LWRpc2FibGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2LXRleHQtZW1wdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZGl2LWVtcHR5IHtcbiAgbWFyZ2luLXRvcDogMTI0cHg7XG59XG5cbi5jb250ZW50LWZsaWdodGFkZHNlYXQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAubS10b3AtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAubS10b3AtMjEge1xuICBtYXJnaW4tdG9wOiAyMXB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAubS1sZWZ0LTE0IHtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtd2lkdGgtMTIwIHtcbiAgd2lkdGg6IDEyMCU7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtcmVjdGFuZ2xlIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LXRleHQge1xuICBoZWlnaHQ6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuY2xzLWdyZWVuIHtcbiAgYmFja2dyb3VuZDogI2EwYzI0NTtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmNscy10ZWFsaXNoIHtcbiAgYmFja2dyb3VuZDogIzI2YmVkNjtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmNscy1ibHVlIHtcbiAgYmFja2dyb3VuZDogIzAwM2M3MTtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmNscy1yZWQge1xuICBiYWNrZ3JvdW5kOiAjZTUyODIyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuY2xzLWdyYXkge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuY2xzLW9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNmNTkyMzM7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC50ZXh0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLnRleHQtZXhpdCB7XG4gIGhlaWdodDogMTRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzgyODI4MjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi1zZWF0LWl0ZW0ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LXNlYXQtaXRlbSAuc2VhdC1pY29uIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmxoLTI1IHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtc2VhdC1uYW1lIHtcbiAgaGVpZ2h0OiAxN3B4O1xuICB3aWR0aDogMzZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi1zZWF0LW5hbWUgLmRpdi1zZWF0LWljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtc2VhdC1uYW1lIC50ZXh0LXNlYXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi1udW1iZXItY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHdpZHRoOiA1MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCB7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtc3ViLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtZm9vdGVyIC50ZXh0LWhhdmVub3RjaG9pY2Utc2VhdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

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
        this.listSeatNormal.sort((a, b) => {
            a.row < b.row ? -1 : 1;
        });
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
        if (seat.type == -1 || seat.type == -2) {
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