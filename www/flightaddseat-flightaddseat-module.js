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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 12px !important;\n}\n\n.col-header {\n  height: 44px !important;\n  padding: 5px 0;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.seat-disabled {\n  visibility: hidden !important;\n}\n\n.new-seat-disabled {\n  display: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.div-text-empty {\n  font-size: 14px;\n  font-weight: 100;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #828282;\n}\n\n.div-empty {\n  margin-top: 124px;\n}\n\n.content-flightaddseat {\n  padding: 16px;\n}\n\n.content-flightaddseat .m-top-16 {\n  margin-top: 16px;\n}\n\n.content-flightaddseat .m-top-21 {\n  margin-top: 21px;\n}\n\n.content-flightaddseat .m-left-14 {\n  margin-left: 14px;\n}\n\n.content-flightaddseat .div-width-120 {\n  width: 120%;\n}\n\n.content-flightaddseat .div-rectangle {\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n}\n\n.content-flightaddseat .div-text {\n  height: 17px;\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  margin-left: 8px;\n  line-height: 12px;\n  letter-spacing: -0.4px;\n}\n\n.content-flightaddseat .cls-green {\n  background: #a0c245;\n}\n\n.content-flightaddseat .cls-tealish {\n  background: #26bed6;\n}\n\n.content-flightaddseat .cls-blue {\n  background: #003c71;\n}\n\n.content-flightaddseat .cls-red {\n  background: #e52822;\n}\n\n.content-flightaddseat .cls-gray {\n  background: #bdbdbd;\n}\n\n.content-flightaddseat .cls-orange {\n  background: #f59233;\n}\n\n.content-flightaddseat .text-title {\n  text-align: center;\n  height: 20px;\n  font-size: 17px;\n  font-weight: 600;\n  color: #828282;\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\n\n.content-flightaddseat .text-exit {\n  height: 14px;\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n  text-align: left;\n}\n\n.content-flightaddseat .div-seat-item {\n  width: 36px;\n  height: 30px;\n  margin-bottom: 20px;\n}\n\n.content-flightaddseat .div-seat-item .seat-icon {\n  width: 36px;\n  height: 30px;\n}\n\n.content-flightaddseat .lh-25 {\n  line-height: 25px;\n}\n\n.content-flightaddseat .div-seat-name {\n  height: 17px;\n  width: 36px;\n}\n\n.content-flightaddseat .div-seat-name .div-seat-icon {\n  text-align: center;\n}\n\n.content-flightaddseat .div-seat-name .text-seat {\n  font-size: 14px;\n  font-weight: 100;\n  color: #828282;\n  line-height: 17px;\n}\n\n.content-flightaddseat .div-number-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 100;\n  color: #828282;\n  width: 51px;\n  text-align: center;\n  height: 30px;\n}\n\n.content-flightaddseat .justify-content-between {\n  justify-content: space-between;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n  position: relative;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .text-havenotchoice-seat {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  color: #333333;\n  position: absolute;\n  bottom: 10px;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n\n.d-flex-footer {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRhZGRzZWF0L2ZsaWdodGFkZHNlYXQucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRhZGRzZWF0L2ZsaWdodGFkZHNlYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBREZBO0VBQ0ksNkJBQUE7QUNLSjs7QURIQTtFQUNJLGFBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0FDT0o7O0FETEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNRSjs7QUROQTtFQUNJLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSxhQUFBO0FDVUo7O0FEUkk7RUFDSSxnQkFBQTtBQ1VSOztBRFJJO0VBQ0ksZ0JBQUE7QUNVUjs7QURQSTtFQUNJLGlCQUFBO0FDU1I7O0FESEk7RUFDSSxXQUFBO0FDS1I7O0FEREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR1I7O0FEREk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0dSOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURBSTtFQUNJLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxtQkFBQTtBQ0VSOztBREFJO0VBQ0ksbUJBQUE7QUNFUjs7QURBSTtFQUNJLG1CQUFBO0FDRVI7O0FEQUk7RUFDSSxtQkFBQTtBQ0VSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRFo7O0FETUk7RUFDSSxpQkFBQTtBQ0pSOztBRE9JO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNMUjs7QURPUTtFQUNJLGtCQUFBO0FDTFo7O0FET1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNMWjs7QURTSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNQUjs7QURVSTtFQUNJLDhCQUFBO0FDUlI7O0FEYUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1ZKOztBRFlJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNWUjs7QURZUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1ZaOztBRGFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNYWjs7QURlSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2JSOztBRGdCSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ2RSOztBRGlCSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDaEJSOztBRG9CQTtFQUNJLGFBQUE7QUNqQkoiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRhZGRzZWF0L2ZsaWdodGFkZHNlYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1oZWFkZXItdGl0bGV7XG4gICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbn1cbi5jb2wtaGVhZGVye1xuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuLmRpdi13aWR0aC0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2VhdC1kaXNhYmxlZHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbi5uZXctc2VhdC1kaXNhYmxlZHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXYtdGV4dC1lbXB0eSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtZW1wdHl7XG4gICAgbWFyZ2luLXRvcDogMTI0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0e1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAubS10b3AtMTZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5tLXRvcC0yMXtcbiAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICB9XG5cbiAgICAubS1sZWZ0LTE0e1xuICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICB9XG5cbiAgIFxuXG4gICAgXG4gICAgLmRpdi13aWR0aC0xMjB7XG4gICAgICAgIHdpZHRoOiAxMjAlO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAuZGl2LXJlY3RhbmdsZXtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbiAgICAuZGl2LXRleHR7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfVxuXG4gICAgLmNscy1ncmVlbntcbiAgICAgICAgYmFja2dyb3VuZDogI2EwYzI0NTtcbiAgICB9XG4gICAgLmNscy10ZWFsaXNoe1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAuY2xzLWJsdWV7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDNjNzE7XG4gICAgfVxuICAgIC5jbHMtcmVke1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTUyODIyO1xuICAgIH1cbiAgICAuY2xzLWdyYXl7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gICAgfVxuICAgIC5jbHMtb3Jhbmdle1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICAgIH1cblxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWV4aXR7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICAuZGl2LXNlYXQtaXRlbXtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAuc2VhdC1pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG4gICAgLmxoLTI1e1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICB9XG5cbiAgICAuZGl2LXNlYXQtbmFtZXtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICB3aWR0aDogMzZweDtcblxuICAgICAgICAuZGl2LXNlYXQtaWNvbntcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1zZWF0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LW51bWJlci1jZW50ZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB3aWR0aDogNTFweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLmp1c3RpZnktY29udGVudC1iZXR3ZWVue1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxufVxuXG5cbi5kaXYtZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAuZGl2LXRvdGFse1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLnRleHQtc3ViLXRvdGFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LXRvdGFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQtaGF2ZW5vdGNob2ljZS1zZWF0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICB9IFxufVxuXG4uZC1mbGV4LWZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhdC1kaXNhYmxlZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubmV3LXNlYXQtZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXYtdGV4dC1lbXB0eSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtZW1wdHkge1xuICBtYXJnaW4tdG9wOiAxMjRweDtcbn1cblxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5tLXRvcC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5tLXRvcC0yMSB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5tLWxlZnQtMTQge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi13aWR0aC0xMjAge1xuICB3aWR0aDogMTIwJTtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi1yZWN0YW5nbGUge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtdGV4dCB7XG4gIGhlaWdodDogMTdweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5jbHMtZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjYTBjMjQ1O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuY2xzLXRlYWxpc2gge1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuY2xzLWJsdWUge1xuICBiYWNrZ3JvdW5kOiAjMDAzYzcxO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuY2xzLXJlZCB7XG4gIGJhY2tncm91bmQ6ICNlNTI4MjI7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5jbHMtZ3JheSB7XG4gIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5jbHMtb3JhbmdlIHtcbiAgYmFja2dyb3VuZDogI2Y1OTIzMztcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLnRleHQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAudGV4dC1leGl0IHtcbiAgaGVpZ2h0OiAxNHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LXNlYXQtaXRlbSB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRzZWF0IC5kaXYtc2VhdC1pdGVtIC5zZWF0LWljb24ge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAubGgtMjUge1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi1zZWF0LW5hbWUge1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAzNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LXNlYXQtbmFtZSAuZGl2LXNlYXQtaWNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LWZsaWdodGFkZHNlYXQgLmRpdi1zZWF0LW5hbWUgLnRleHQtc2VhdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuZGl2LW51bWJlci1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzgyODI4MjtcbiAgd2lkdGg6IDUxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkc2VhdCAuanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIHtcbiAgd2lkdGg6IDIxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC1zdWItdG90YWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpdi1mb290ZXIgLnRleHQtaGF2ZW5vdGNob2ljZS1zZWF0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn1cblxuLmQtZmxleC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"

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
                if (this.listReturnSeatName && this.listReturnSeatName.indexOf('-1') == -1 && this.listReturnSeatName.length > 4) {
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