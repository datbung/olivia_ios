(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightaddservice-flightaddservice-module"],{

/***/ "./src/app/flightaddservice/flightaddservice.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/flightaddservice/flightaddservice.module.ts ***!
  \*************************************************************/
/*! exports provided: FlightaddservicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaddservicePageModule", function() { return FlightaddservicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightaddservice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightaddservice.page */ "./src/app/flightaddservice/flightaddservice.page.ts");
/* harmony import */ var _hotelcityitem_hotelcityitem_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hotelcityitem/hotelcityitem.module */ "./src/app/hotelcityitem/hotelcityitem.module.ts");
/* harmony import */ var _voucher_voucherslide_voucherslide_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../voucher/voucherslide/voucherslide.module */ "./src/app/voucher/voucherslide/voucherslide.module.ts");









const routes = [
    {
        path: '',
        component: _flightaddservice_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddservicePage"]
    }
];
let FlightaddservicePageModule = class FlightaddservicePageModule {
};
FlightaddservicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _hotelcityitem_hotelcityitem_module__WEBPACK_IMPORTED_MODULE_7__["HotelCityItemPageModule"],
            _voucher_voucherslide_voucherslide_module__WEBPACK_IMPORTED_MODULE_8__["VoucherSlidePageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightaddservice_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddservicePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightaddservicePageModule);



/***/ }),

/***/ "./src/app/flightaddservice/flightaddservice.page.html":
/*!*************************************************************!*\
  !*** ./src/app/flightaddservice/flightaddservice.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Dịch vụ cộng thêm</div>\n          </div>\n\n          <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n        </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content class=\"flight-add-service-content\">\n    <div class=\"p-16\">\n        <!-- Chọn hành lý -->\n        <div class=\"div-item-service div-luggage\" *ngIf=\"(departLuggage && departLuggage.length >0) || (returnLuggage && returnLuggage.length >0) || (departConditionInfo && departConditionInfo.baggageHanded ) || (returnConditionInfo && returnConditionInfo.baggageHanded ) \">\n\n            <div class=\"d-flex m-bottom-6\">\n                <div class=\"div-icon p-right-12\">\n                    <img class=\"img-icon\" src=\"./assets/ic_flight/ic_luggage.svg\">\n                </div>\n                <div class=\"div-title\">Thông tin hành lý</div>\n            </div>\n\n            <div class=\"div-desc\" *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded ) || (returnConditionInfo && returnConditionInfo.baggageHanded )\">\n    \n                <div class=\"div-sub-title m-bottom-6\">Xách tay</div>\n\n                <div *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded && departConditionInfo.baggageHanded.length <10) || (returnConditionInfo && returnConditionInfo.baggageHanded && returnConditionInfo.baggageHanded.length <10)\" class=\"d-flex\">\n                   \n                    <div class=\"text-desc m-bottom-6 p-right-4\" *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded && departConditionInfo.baggageHanded.length <10) else havenotdepartluggage\">Chiều đi: <span class=\"text-bold\">{{ departConditionInfo.baggageHanded }}/1 khách.</span></div>\n                   \n\n                    <div *ngIf=\"(returnConditionInfo && returnConditionInfo.baggageHanded && returnConditionInfo.baggageHanded.length <10) else havenotreturnluggage\">\n                        <div class=\"text-desc\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.baggageHanded }}/1 khách.</span></div>\n                    </div>\n                   \n                </div>\n                \n            </div>\n            <div *ngIf=\"(departLuggage && departLuggage.length >0) || (returnLuggage && returnLuggage.length >0) \">\n                <div class=\"div-sub-title m-top-16 m-bottom-6 d-flex\">\n                    <div class=\"div-width-100\">Ký gửi</div>\n                    <div class=\"div-width-100 text-change\" *ngIf=\"!showbuttonluggage\" (click)=\"buyLuggage()\">Thay đổi</div>\n                    \n                </div>\n                \n                <div class=\"div-desc\" *ngIf=\"(showbuttonluggage &&  !( (departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) || (returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4))) else departluggageinclude\">\n                    Mua ngay, tiết kiệm đến 40% so với mua tại quầy\n                </div>\n                <div class=\"d-flex\">\n                    <ng-template #departluggageinclude >\n                        <div class=\"d-flex\">\n                            <div *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && !hasdepartluggage) else nodepartlugsign\"  class=\"div-width-100\">\n                                <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                            </div>\n                            <div *ngIf=\"!(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) && !hasdepartluggage && showbuttonluggage\"  class=\"div-width-100\">\n                                <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">Không có.</span></div>\n                            </div>\n\n                            <div [ngClass]=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) ?  'div-width-100 ' : 'div-width-100'\" *ngIf=\"!showbuttonluggage && (departLuggage && departLuggage.length >0) && hasdepartluggage\">\n                                <div class=\"text-desc m-bottom-6\">Chiều đi</div>\n                                <div class=\"div-desc\" *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && hasdepartluggage)\"><span class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                                <div *ngFor=\"let itemlug of departLuggage\">\n                                    <div *ngIf=\"itemlug.quantity >0\" class=\"div-desc\">\n                                        {{ itemlug.quantity}} x <span class=\"text-bold\">{{itemlug.weight}} kg</span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && roundtrip && !hasreturnluggage) else noreturnlugsign\" class=\"div-width-100\">\n                                <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                            </div>\n                            <div *ngIf=\"!(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) && !hasreturnluggage && showbuttonluggage && roundtrip\" class=\"div-width-100\">\n                                <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">Không có.</span></div>\n                            </div>\n\n                            <div [ngClass]=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4)? 'div-width-100 ' : 'div-width-100'\" *ngIf=\"!showbuttonluggage && (returnLuggage && returnLuggage.length >0) && hasreturnluggage && roundtrip\">\n                                <div class=\"text-desc m-bottom-6\">Chiều về</div>\n                                <div class=\"div-desc\" *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && hasreturnluggage)\"><span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                                <div *ngFor=\"let itemlug of returnLuggage\">\n                                    <div *ngIf=\"itemlug.quantity >0\"  class=\"div-desc\">\n                                        {{ itemlug.quantity}} x <span class=\"text-bold\">{{itemlug.weight}} kg</span>\n                                    </div>\n                                </div>\n                                \n                            </div>\n\n                        </div>\n                        \n                    </ng-template>\n                </div>\n              \n    \n                <div class=\"div-right m-top-16\" (click)=\"buyLuggage()\" *ngIf=\"showbuttonluggage else showluggage\">\n                    <div class=\"div-button\">\n                        Thêm hành lý <img class=\"p-left-10\" src=\"../../assets/ic_flight/vector_orange.svg\">\n                    </div>\n                </div>\n              \n            </div>\n\n            <div *ngIf=\"((departConditionInfo &&departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 ) || (returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) )&& !(departLuggage && departLuggage.length >0) && !(returnLuggage && returnLuggage.length >0)\">\n                <div class=\"div-sub-title m-top-16 m-bottom-6\">\n                    <div class=\"div-width-100\">Ký gửi</div>\n                </div>\n                 <div class=\"d-flex m-top-6\">\n                        <div *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) else nodepartlugsign\">\n                            <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                        </div>\n                        <div *ngIf=\"!(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) && !hasdepartluggage\">\n                            <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">Không có.</span></div>\n                        </div>\n\n                        <div *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && roundtrip) else noreturnlugsign\">\n                            <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                        </div>\n                        <div *ngIf=\"!(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) && !hasreturnluggage && roundtrip\">\n                            <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">Không có.</span></div>\n                        </div>\n                </div>\n            </div>\n            \n        </div>\n        <!-- Chọn chỗ ngồi -->\n        <div class=\"div-item-service div-seat m-top-16\" *ngIf=\"allowchoiceseat\">\n            <div class=\"d-flex m-bottom-6\">\n                <div class=\"div-icon p-right-12\">\n                    <img class=\"img-icon img-seat\" src=\"./assets/ic_flight/ic_seat.svg\">\n                </div>\n                <div class=\"div-title div-width-100\">Chọn chỗ ngồi</div>\n                <div class=\"div-width-100 text-change\" *ngIf=\"listdepartseatselected || listreturnseatselected\" (click)=\"buySeat()\">Thay đổi</div>\n            </div>\n\n            <div class=\"div-desc\" *ngIf=\"(!listdepartseatselected && !listreturnseatselected) && allowchoiceseat\">\n                Chọn trước chỗ đẹp cho chuyến đi thoải mái\n            </div>\n\n            <div class=\"div-right m-top-16\" (click)=\"buySeat()\" *ngIf=\"((!listdepartseatselected && !listreturnseatselected) && allowchoiceseat) else hadchosedseat\">\n                <div class=\"div-button\">\n                    Chọn chỗ ngồi<img class=\"p-left-10\" src=\"../../assets/ic_flight/vector_orange.svg\">\n                </div>\n            </div>\n            <ng-template #hadchosedseat>\n                <div class=\"d-flex m-top-6\">\n                    <div class=\"div-width-100\">\n                        <div class=\"text-desc m-bottom-6\">Chiều đi</div>\n                        <div class=\"text-bold\" *ngIf=\"hasdepartseat && listdepartseatselected\">\n                            {{listdepartseatselected}}\n                        </div>\n                        <div class=\"text-bold\" *ngIf=\"hasdepartseat && !listdepartseatselected\">\n                            Chưa chọn\n                        </div>\n                        <div class=\"text-bold\" *ngIf=\"!hasdepartseat\">\n                            Không cho chọn ghế\n                        </div>\n                    </div>\n                    <div class=\"div-width-100\" *ngIf=\"roundtrip\">\n                        <div class=\"text-desc m-bottom-6\">Chiều về</div>\n                        <div class=\"text-bold\"  *ngIf=\"hasreturnseat && listreturnseatselected\">\n                            {{listreturnseatselected}}\n                        </div>\n                        <div class=\"text-bold\" *ngIf=\"hasreturnseat && !listreturnseatselected\">\n                            Chưa chọn\n                        </div>\n                        <div class=\"text-bold\" *ngIf=\"!hasreturnseat && roundtrip\">\n                            Không cho chọn ghế\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </div>\n        <div *ngIf=\"(loadHotelCityDone || (_flightService.itemFlightCache.itemsFlightCityHotel && _flightService.itemFlightCache.itemsFlightCityHotel.length >0)) else loadinghotelcity\">\n            <div class=\"div-hotel-city\" *ngIf=\"_flightService.itemFlightCache.itemsFlightCityHotel && _flightService.itemFlightCache.itemsFlightCityHotel.length >0\">\n                <div class=\"div-wrap-slide\">\n                    <div class=\"div-slide-item\" *ngFor=\"let item of _flightService.itemFlightCache.itemsFlightCityHotel; let idx = index\">\n                          <app-hotelcityitem [item]=\"item\" [index]=\"idx\" [itemlen]=\"_flightService.itemFlightCache.itemsFlightCityHotel.length\"></app-hotelcityitem>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <ng-template #loadinghotelcity>\n            <div class=\"div-item-service m-top-16\">\n                <div class=\" d-flex\">\n                    <ion-skeleton-text animated class=\"text-menu\" style=\"height: 16px; margin: 0 8px;\"></ion-skeleton-text>\n                </div>\n                <div class=\"text-quantity m-8\">\n                        <div class=\"d-flex \">\n                            <div><ion-skeleton-text class=\"div-100\" animated  style=\"height: 76px; width: 59px\"></ion-skeleton-text></div>\n                            <div class=\"div-width-100 m-left-12\">\n                                <ion-skeleton-text class=\"div-hotelname\" animated  style=\"height: 16px;width: 100%;margin-top: 8px\"></ion-skeleton-text>\n                                <ion-skeleton-text class=\"div-point\" animated  style=\"height: 16px;width: 50%;margin-top: 8px\"></ion-skeleton-text>\n                                <ion-skeleton-text class=\"div-address\" animated  style=\"height: 16px;width: 75%;margin-top: 8px\"></ion-skeleton-text>\n                            </div>\n                        </div>\n                        <ion-skeleton-text class=\"text-room-name\" animated  style=\"height: 32px;width: 100%;margin-top: 16px\"></ion-skeleton-text>\n                        <ion-skeleton-text class=\"text-price\" animated  style=\"height: 32px;width: 100%;margin-top: 16px\"></ion-skeleton-text>\n                </div>\n            </div>\n        </ng-template>\n        \n             <!-- thêm đưa đón -->\n             <div *ngIf=\"_flightService.itemFlightCache.isAirportFirst || _flightService.itemFlightCache.isAirportSecond\" class=\"div-item-service div-seat m-top-16\" >\n                <div class=\"d-flex m-bottom-6\">\n                    <div class=\"div-icon p-right-12\">\n                        <img class=\"img-icon img-seat\" src=\"./assets/ic_flight/car.svg\">\n                    </div>\n                    <div class=\"div-title div-width-100\">Thêm đưa đón</div>\n                    <div class=\"div-width-100 text-change\" *ngIf=\"listDiChung\" (click)=\"addDichung(1)\">Thay đổi</div>\n                </div>\n    \n                <div *ngIf=\"!listDiChung\" class=\"div-desc\">\n                    Đặt trước đưa đón cho chuyến đi thêm nhẹ nhàng\n                </div>\n    \n                <div class=\"div-right m-top-16\" *ngIf=\"!listDiChung else haddichung\" (click)=\"addDichung(0)\" >\n                    <div class=\"div-button\">\n                        Thêm đưa đón<img class=\"p-left-10\" src=\"../../assets/ic_flight/vector_orange.svg\">\n                    </div>\n                </div>\n                <ng-template #haddichung>\n                    <div class=\"d-flex m-top-6\">\n                        <div *ngIf=\"_flightService.itemFlightCache.departCity && listDiChung.PhaseGo\" class=\"div-width-100\">\n                            <div class=\"text-desc m-bottom-6\">Tại {{_flightService.itemFlightCache.departCity}}</div>\n                            <div>\n                                <span class=\"text-place\">\n                                    Đi: <span class=\"text-place bold\">\n                                        {{listDiChung.PhaseGo.pickUpTime.text}} → {{listDiChung.PhaseGo.dropOffTime.text}}\n                                    </span>\n                                </span>\n                            </div>\n    \n                            <div *ngIf=\"listDiChung.PhaseGo_RoundTrip\">\n                                <span class=\"text-place\">\n                                    Về: <span class=\"text-place bold\">\n                                        {{listDiChung.PhaseGo_RoundTrip.pickUpTime.text}} → {{listDiChung.PhaseGo_RoundTrip.dropOffTime.text}}\n                                    </span>\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"_flightService.itemFlightCache.returnCity && listDiChung.PhaseReturn\"  class=\"div-width-100\">\n                            <div  class=\"text-desc m-bottom-6\">Tại {{_flightService.itemFlightCache.returnCity}}</div>\n                            <div *ngIf=\"listDiChung.PhaseReturn\">\n                                <span class=\"text-place\">\n                                    Đi: <span class=\"text-place bold\">\n                                       {{listDiChung.PhaseReturn.pickUpTime.text}} → {{listDiChung.PhaseReturn.dropOffTime.text}}\n                                    </span>\n                                </span>\n                            </div>\n    \n                            <div *ngIf=\"listDiChung.PhaseReturn_RoundTrip\">\n                                <span class=\"text-place\">\n                                    Về: <span class=\"text-place bold\">\n                                        {{listDiChung.PhaseReturn_RoundTrip.pickUpTime.text}} → {{listDiChung.PhaseReturn_RoundTrip.dropOffTime.text}}\n                                    </span>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </div>\n             <!-- thêm bao hiem -->\n        <div *ngIf=\"returnFlight\">\n            <div *ngIf=\"_flightService.itemFlightCache.dataBooking.fromPlace.internal!=0 && _flightService.itemFlightCache.dataBooking.toPlace.internal!=0 && priceCathay && checkAddCathayTime() && !isExtenal && !departFlight.stops && !returnFlight.stops\" class=\"div-item-service div-seat m-top-16\">\n                <div class=\"d-flex m-bottom-6\"> \n                    <div class=\"div-icon p-right-12\">\n                        <img class=\"img-icon img-seat\" src=\"./assets/logo/logo_1.svg\">\n                    </div>\n                    <div (click)=\"showinfoCathay()\" class=\"div-title div-width-100\">Bảo hiểm trễ chuyến</div>\n                  </div>\n                <div  class=\"div-desc font-weight-600\">\n                    Quyền lợi trễ chuyến bay từ 350.000vnđ/lần. Yêu cầu bồi thường trực tuyến nhanh chóng tức thời <u  class=\"text-seen\" (click)=\"noteCathay()\">Xem quy định</u> \n                </div>\n                <div *ngIf=\"isShowPromoCathay\" class=\"div-show-promocathay\" (click)=\"openLinkPromoCathay()\">\n                    Mua liền tay - Trúng ngay Voucher <img class=\"p-left-10\" src=\"../../assets/ic_flight/vector_orange.svg\">\n                </div>\n                <div class=\"d-flex\">\n                    <span class=\"price-total\">{{gf.numberToCurrency(priceCathay, '.')}} <span class=\"price-vnd m-top-3\">VND</span></span>\n                    <div>\n                        <ion-toggle (ionChange)=\"toggleCathay($event)\" class=\"ion-toggle\" mode='ios' ></ion-toggle>\n                    </div>\n                \n                  </div>\n             \n            </div>\n        </div>\n        <div *ngIf=\"!returnFlight\">\n            <div *ngIf=\"_flightService.itemFlightCache.dataBooking.fromPlace.internal!=0 && priceCathay && checkAddCathayTime() && !isExtenal && !departFlight.stops\" class=\"div-item-service div-seat m-top-16\">\n                <div class=\"d-flex m-bottom-6\"> \n                    <div class=\"div-icon p-right-12\">\n                        <img class=\"img-icon img-seat\" src=\"./assets/logo/logo_1.svg\">\n                    </div>\n                    <div (click)=\"showinfoCathay()\" class=\"div-title div-width-100\">Bảo hiểm trễ chuyến</div>\n                  </div>\n                <div  class=\"div-desc font-weight-600\">\n                    Quyền lợi trễ chuyến bay từ 350.000vnđ/lần. Yêu cầu bồi thường trực tuyến nhanh chóng tức thời <u (click)=\"noteCathay()\" class=\"text-seen\">Xem quy định</u> \n                </div>\n                <div *ngIf=\"isShowPromoCathay\" class=\"div-show-promocathay\" (click)=\"openLinkPromoCathay()\">\n                    Mua liền tay - Trúng ngay Voucher <img class=\"p-left-10\" src=\"../../assets/ic_flight/vector_orange.svg\">\n                </div>\n                <div class=\"d-flex\">\n                    <span class=\"price-total\">{{gf.numberToCurrency(priceCathay, '.')}} <span class=\"price-vnd m-top-3\">VND</span></span>\n                    <div>\n                        <ion-toggle (ionChange)=\"toggleCathay($event)\" class=\"ion-toggle\" mode='ios' ></ion-toggle>\n                    </div>\n                \n                  </div>\n             \n            </div>\n        </div>\n      \n        <div class=\"div-split\" *ngIf=\"(departLuggage && departLuggage.length >0) || (returnLuggage && returnLuggage.length >0) || ((!listdepartseatselected && !listreturnseatselected) && allowchoiceseat) || (departConditionInfo && departConditionInfo.baggageHanded ) || (returnConditionInfo && returnConditionInfo.baggageHanded )\"></div>\n\n        <div class=\"div-flight-info\">\n            <div class=\"flight-depart-return div-sub-title\">\n                {{departdisplay}} <span class=\"div-flight-inout\">\n                    <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"roundtrip else oneway\">\n                    <ng-template #oneway>\n                        <img class=\"img-flight-inout div-oneway\" src=\"./assets/imgs/ic_arrow_right.svg\">\n                    </ng-template>\n                </span> {{returndisplay}}\n            </div>\n\n            <div class=\"div-sub-title m-top-16 m-bottom-8\"  *ngIf=\"departFlight\">\n                {{departtimedisplay}}\n            </div>\n\n            <div class=\"div-flight-detail d-flex\" *ngIf=\"departFlight\">\n                <div class=\"div-logo\">\n                    <img class=\"logo-vj\" *ngIf=\"departFlight.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                    <img *ngIf=\"departFlight.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                    <img class=\"logo-vna\" *ngIf=\"departFlight.airlineCode == 'VietnamAirlines' && !departFlight.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                    <img class=\"img-logo\" *ngIf=\"departFlight.operatedBy && departFlight.urlLogo\" [src]=\"departFlight.urlLogo\">\n                    <img *ngIf=\"departFlight.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                </div>\n                <div class=\"div-airline-name\">\n                    <div class=\"text-airline\">{{departFlight.airline}}</div>\n                    <div class=\"text-sub-airline\">\n                        <div *ngIf=\"!departFlight.stops else overstop\">{{ departFlight.ticketType }} - Bay thẳng</div>\n                        <ng-template #overstop>Chặng dừng</ng-template>\n                    </div>\n\n                    <div *ngIf=\"departFlight.operatedBy\" class=\"text-operatedBy\">{{departFlight.operatedBy}}</div>\n                </div>\n\n                <div class=\"div-flight-time\">\n                    <div class=\"div-time d-flex\">\n                        <div class=\"depart-time\">{{departtime_depart}}</div>\n                        <img class=\"img-arrow\" src=\"./assets/imgs/ic_arrow_right.svg\">\n                        <div class=\"landing-time\">{{landingtime_depart}}</div>\n                    </div>\n\n                    <div class=\"div-location d-flex\">\n                        {{departlocationdisplay}}\n                    </div>\n                </div>\n                \n            </div>\n\n            <div class=\"div-flight-condition d-flex\" *ngIf=\"departConditionInfo\">\n                <div class=\"div-width-150 d-flex\">\n                    <div class=\"div-icon\" *ngIf=\"((departConditionInfo && (!departConditionInfo.ticketRefund || departConditionInfo.ticketRefund.indexOf('Không') != -1 )) || !departConditionInfo ) else departIconRefund\">\n                        <img class=\"img-info\" src=\"./assets/ic_flight/icon_info_gray.svg\">\n                    </div>\n                    <ng-template #departIconRefund>\n                        <div class=\"div-icon\">\n                            <img class=\"img-info\" src=\"./assets/ic_flight/icon_action_check_circle.svg\">\n                        </div>\n                    </ng-template>\n                    <!-- <div class=\"div-text-refund\" >{{ departConditionInfo.ticketRefund}}</div> -->\n                    <div class=\"div-text-refund\" *ngIf=\"( (departConditionInfo && (!departConditionInfo.ticketRefund || departConditionInfo.ticketRefund.indexOf('Không') != -1)) || !departConditionInfo ) else returnrefund\">Không hoàn huỷ</div>\n                    <ng-template #returnrefund>\n                        <div class=\"div-text-refund\" >Có thể hoàn huỷ</div>\n                    </ng-template>\n                </div>\n                <div class=\"div-width-150 d-flex\">\n                    <div class=\"div-icon\" *ngIf=\"((departConditionInfo && departConditionInfo.changeDepartTime.indexOf('Không') != -1 ) || !departConditionInfo ) else departIconChangeDepartTime\">\n                       <img src=\"./assets/ic_flight/icon_info_gray.svg\">\n                    </div>\n                    <ng-template #departIconChangeDepartTime>\n                        <div class=\"div-icon\">\n                            <img class=\"img-info\" src=\"./assets/ic_flight/icon_action_check_circle.svg\">\n                        </div>\n                    </ng-template>\n                    <!-- <div [ngClass]=\"( (departConditionInfo && departConditionInfo.changeDepartTime.indexOf('Không') != -1) || !departConditionInfo) ? 'div-text-changeflight not-allow': 'div-text-refund'\" >{{ departConditionInfo.changeDepartTime}}</div> -->\n                    <div class=\"div-text-changeflight not-allow\" *ngIf=\"((departConditionInfo && departConditionInfo.changeDepartTime.indexOf('Không') != -1 ) || !departConditionInfo ) else departChangeDepartTime\">Không đổi lịch bay</div>\n                    <ng-template #departChangeDepartTime>\n                        <div class=\"div-text-changeflight\" >Có thể đổi lịch bay</div>\n                    </ng-template>\n                </div>\n            </div>\n\n\n            <div class=\"div-sub-title m-top-16 m-bottom-8\" *ngIf=\"returnFlight\">\n                {{returntimedisplay}}\n            </div>\n\n            <div class=\"div-flight-detail d-flex\" *ngIf=\"returnFlight\">\n                <div class=\"div-logo\">\n                    <img class=\"logo-vj\" *ngIf=\"returnFlight.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                    <img *ngIf=\"returnFlight.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                    <img class=\"logo-vna\" *ngIf=\"returnFlight.airlineCode == 'VietnamAirlines' && !returnFlight.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                    <!-- <img *ngIf=\"returnFlight.airlineCode == 'VietnamAirlines' && returnFlight.operatedBy\" src=\"./assets/ic_airticket/ic_pacific.png\"> -->\n                    <img class=\"img-logo\" *ngIf=\"returnFlight.operatedBy && returnFlight.urlLogo\" [src]=\"returnFlight.urlLogo\">\n                    <img *ngIf=\"returnFlight.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                </div>\n                <div class=\"div-airline-name\">\n                    <div class=\"text-airline\">{{returnFlight.airline}}</div>\n                    <div class=\"text-sub-airline\">\n                        <div *ngIf=\"!returnFlight.stops else overstop\">{{ returnFlight.ticketType }} - Bay thẳng</div>\n                        <ng-template #overstop>Chặng dừng</ng-template>\n                    </div>\n\n                    <div *ngIf=\"returnFlight.operatedBy\" class=\"text-operatedBy\">{{returnFlight.operatedBy}}</div>\n                </div>\n\n                <div class=\"div-flight-time\">\n                    <div class=\"div-time d-flex\">\n                        <div class=\"depart-time\">{{departtime_return}}</div>\n                        <img class=\"img-arrow\" src=\"./assets/imgs/ic_arrow_right.svg\">\n                        <div class=\"landing-time\">{{landingtime_return}}</div>\n                    </div>\n\n                    <div class=\"div-location d-flex\">\n                        {{returnlocationdisplay}}\n                    </div>\n                </div>\n                \n            </div>\n\n            <div class=\"div-flight-condition d-flex\" *ngIf=\"returnFlight && returnConditionInfo\">\n                <div class=\"div-width-150 d-flex\">\n                    <div class=\"div-icon\" *ngIf=\"( (returnConditionInfo && (!returnConditionInfo.ticketRefund || returnConditionInfo.ticketRefund.indexOf('Không') != -1) ) || !returnConditionInfo ) else returnIconRefund\">\n                        <img class=\"img-info\" src=\"./assets/ic_flight/icon_info_gray.svg\">\n                    </div>\n                    <ng-template #returnIconRefund>\n                        <div class=\"div-icon\">\n                            <img class=\"img-info\" src=\"./assets/ic_flight/icon_action_check_circle.svg\">\n                        </div>\n                    </ng-template>\n                    <!-- <div class=\"div-text-refund\" > {{ returnConditionInfo.ticketRefund }}</div> -->\n                    <div class=\"div-text-refund\" *ngIf=\"( (returnConditionInfo && (!returnConditionInfo.ticketRefund || returnConditionInfo.ticketRefund.indexOf('Không') != -1)) || !returnConditionInfo ) else returnrefund\">Không hoàn huỷ</div>\n                    <ng-template #returnrefund>\n                        <div class=\"div-text-refund\" >Có thể hoàn huỷ</div>\n                    </ng-template>\n                </div>\n                <div class=\"div-width-150 d-flex\">\n                    <div class=\"div-icon\" *ngIf=\"( (returnConditionInfo && returnConditionInfo.changeDepartTime.indexOf('Không') != -1) || !returnConditionInfo) else returnIconChangeDepartTime\">\n                        <img src=\"./assets/ic_flight/icon_info_gray.svg\">\n                    </div>\n                    <ng-template #returnIconChangeDepartTime>\n                        <div class=\"div-icon\">\n                            <img src=\"./assets/ic_flight/icon_action_check_circle.svg\">\n                        </div>\n                    </ng-template>\n                    \n                    <div class=\"div-text-changeflight not-allow\" *ngIf=\"( (returnConditionInfo && returnConditionInfo.changeDepartTime.indexOf('Không') != -1) || !returnConditionInfo) else returnChangeDepartTime\">Không đổi lịch bay</div>\n                    <ng-template #returnChangeDepartTime>\n                        <div class=\"div-text-changeflight\" >Có thể đổi lịch bay</div>\n                    </ng-template> \n                    <!-- <div [ngClass]=\"( (returnConditionInfo && returnConditionInfo.changeDepartTime.indexOf('Không') != -1) || !returnConditionInfo) ? 'div-text-changeflight not-allow': 'div-text-refund'\" >{{ returnConditionInfo.changeDepartTime}}</div>-->\n                </div>\n                \n            </div>\n        </div>\n        <!-- <div (click)=\"showdiscount()\" *ngIf=\"!ischeck\" class=\"div-promotion\">\n            <ion-row >\n                <label *ngIf=\"!promocode\" class=\"depart-title\" >iVIVU Voucher | Mobile Gift</label>\n                <label *ngIf=\"promocode\" class=\"depart-title\" >{{textpromotion}}</label>\n        </ion-row>\n        <ion-row> \n            <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n            <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n        </ion-row>\n         </div> -->\n         <div  class=\"div-promotion-active\">\n            <!-- <ion-row style=\"margin-left: -5px\">\n                <ion-col  size=\"8.5\">\n                  <ion-item class=\"ion-item\">\n                    <ion-input   placeholder=\"iVIVU Voucher | Mobile Gift\"  (ionInput)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\"  class=\"none\"  ></ion-input>\n                  \n                  </ion-item>\n                </ion-col>\n                <ion-col  size=\"3.5\" class=\"text-right cls-col\">\n                    <button *ngIf=\"!promotionCode\" (click)=\"promofunc()\" ion-button round outline class=\"button btnnone\">Áp dụng</button>\n                    <button *ngIf=\"promotionCode\"  ion-button round outline class=\"button btnnonesuccess\"><span>\n                        <ion-icon name=\"checkmark\"></ion-icon>\n                    </span></button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-label *ngIf=\"ischeckerror==1 && msg\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n                <ion-label *ngIf=\"ischeckerror==0 && msg\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n              </ion-row> -->\n              <div class=\"div-flex align-center\" (click)=\"showdiscount()\" *ngIf=\"!promocode\">\n                <div class=\"div-icon\"><img class=\"icon-point\" src=\"./assets/ic_voucher/ticket_tealish.svg\"/></div>\n                <div class=\"div-text-center\">\n                  <div class=\"width-100\">Nhập mã giảm giá <span class=\"text-sub\">(iVIVU Voucher, MGift..)</span></div>\n                </div>\n                <div class=\"div-button width-10\"><img src=\"./assets/ic_ordersupport/next.svg\"></div>\n              </div>\n              <div class=\"div-voucher-apply\" *ngIf=\"promocode\" (click)=\"showdiscount()\">\n                <div class=\"width-200\">\n                  <span class=\"text-normal\">Ưu đãi (</span>\n                  <!-- <span class=\"text-code\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed \">{{_voucherService.selectVoucher.code}}</span> -->\n                  <span class=\"text-code\" *ngIf=\"promocode\">{{promocode}}</span>\n                  <span class=\"text-normal\">)</span> \n                </div>\n                <!-- <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed \">{{gf.convertNumberToString(_voucherService.selectVoucher.rewardsItem.price)}}đ</div> -->\n                <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"promocode\">{{gf.convertNumberToString(discountpromo)}}đ</div>\n              </div>\n              <ion-row> \n                <ion-label *ngIf=\"ischeckerror==1&& msg\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n                <ion-label *ngIf=\"ischeckerror==0&& msg\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n              </ion-row>\n              <app-voucherslide></app-voucherslide>\n         </div>\n        <div class=\"div-condition d-flex\" (click)=\"showCondition()\">\n            <div class=\"div-width-100\">Chi tiết điều kiện vé</div>\n            <div class=\"div-width-100 text-right\">\n                <img class=\"img-arrow\" src=\"./assets/imgs/ic_arrow.svg\">\n            </div>\n            \n        </div>\n    </div>\n  </ion-content>\n\n  <ion-footer>\n    <div class=\"div-footer d-flex-footer\">\n        <div class=\"d-flex-footer div-width-100\">\n            <div class=\"div-total\" (click)=\"showPriceDetail()\">\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ adult }} người lớn, {{ child }} trẻ em\n                </div>\n                <div class=\"text-total\" >{{totalPriceDisplay}}đ\n                  <sup>\n                    <img src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                 </div>\n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Đặt chuyến bay</button>\n              </div>\n        </div>\n    </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/flightaddservice/flightaddservice.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/flightaddservice/flightaddservice.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.p-left-4 {\n  padding-left: 4px;\n}\n\n.flight-add-service-content .p-16 {\n  padding: 16px;\n}\n\n.flight-add-service-content .p-right-12 {\n  padding-right: 12px;\n}\n\n.flight-add-service-content .p-right-4 {\n  padding-right: 4px;\n}\n\n.flight-add-service-content .m-bottom-6 {\n  margin-bottom: 6px;\n}\n\n.flight-add-service-content .m-top-6 {\n  margin-top: 6px;\n}\n\n.flight-add-service-content .m-top-16 {\n  margin-top: 16px;\n}\n\n.flight-add-service-content .m-bottom-8 {\n  margin-bottom: 8px;\n}\n\n.flight-add-service-content .p-left-10 {\n  padding-left: 10px;\n}\n\n.flight-add-service-content .m-left-12 {\n  margin-left: 12px;\n}\n\n.flight-add-service-content .m-8 {\n  margin: 0 8px;\n  margin-top: 16px;\n}\n\n.flight-add-service-content .text-center {\n  text-align: center;\n}\n\n.flight-add-service-content .div-item-service, .flight-add-service-content .div-item-seat, .flight-add-service-content .div-item-meal {\n  border-radius: 4px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);\n  padding: 10px 8px;\n}\n\n.flight-add-service-content .img-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.flight-add-service-content .img-seat {\n  width: 48px !important;\n}\n\n.flight-add-service-content .div-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #222222;\n}\n\n.flight-add-service-content .div-sub-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n\n.flight-add-service-content .div-width-100 {\n  width: 100%;\n}\n\n.flight-add-service-content .div-width-150 {\n  width: 150%;\n}\n\n.flight-add-service-content .text-change {\n  text-align: right;\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  font-weight: 600;\n  align-self: center;\n}\n\n.flight-add-service-content .div-desc {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.flight-add-service-content .text-bold {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n\n.flight-add-service-content .div-right .div-button {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  border: solid 0.5px #f59233;\n  color: #f59233;\n  margin-left: 51%;\n  height: 36px;\n  border-radius: 4px;\n  text-align: center;\n  padding: 5px;\n}\n\n.flight-add-service-content .div-split {\n  height: 8px;\n  background-color: #f2f2f2;\n  margin: 16px -16px;\n}\n\n.flight-add-service-content .div-logo {\n  width: 40px;\n  height: 34px;\n}\n\n.flight-add-service-content .div-logo .logo-vna {\n  height: 11px !important;\n}\n\n.flight-add-service-content .img-detail {\n  width: 16px;\n}\n\n.flight-add-service-content .text-operatedBy {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  position: relative;\n  margin-top: 4px;\n}\n\n.flight-add-service-content .div-airline-name {\n  padding-left: 14px;\n  width: 188px;\n}\n\n.flight-add-service-content .div-airline-name .text-airline {\n  line-height: 17px;\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n  margin-bottom: 4px;\n  max-width: 170px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.flight-add-service-content .div-airline-name .text-sub-airline {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 16px;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.flight-add-service-content .div-flight-time .div-time {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.28px;\n  color: #222222;\n  justify-content: space-between;\n  text-align: center;\n  margin-bottom: 2px;\n}\n\n.flight-add-service-content .div-flight-time .div-location {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  text-align: center;\n}\n\n.flight-add-service-content .div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n\n.flight-add-service-content .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -8px;\n}\n\n.flight-add-service-content .div-oneway {\n  width: 12px !important;\n  margin-left: 10px !important;\n  margin-top: 1px !important;\n}\n\n.flight-add-service-content .text-desc {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  color: #000000;\n}\n\n.flight-add-service-content .div-condition {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  border-bottom: solid 0.5px #cdcdcd;\n  font-size: 14px;\n  font-weight: 100;\n}\n\n.flight-add-service-content .div-condition .img-arrow {\n  width: 16px;\n}\n\n.flight-add-service-content .div-flight-condition {\n  margin: 0 -16px;\n  padding: 10px 16px;\n  background: #f2f2f2;\n  margin-top: 16px;\n}\n\n.flight-add-service-content .img-info {\n  width: 14px;\n  height: 14px;\n}\n\n.flight-add-service-content .div-text-refund {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #828282;\n}\n\n.flight-add-service-content .div-text-changeflight {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #9fc43a;\n}\n\n.flight-add-service-content .div-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 4px;\n  margin-top: -2px;\n}\n\n.flight-add-service-content .not-allow {\n  color: #828282 !important;\n}\n\n.flight-add-service-content .text-sub {\n  color: #828282 !important;\n  font-size: 12px !important;\n  letter-spacing: -0.8px !important;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide {\n  overflow-x: auto;\n  overflow-y: hidden;\n  width: 105%;\n  position: relative;\n  margin-bottom: 16px;\n  margin-left: -16px;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item {\n  display: table-cell;\n  margin-left: 8px;\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 284px;\n  padding-left: 16px;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item:first-child {\n  padding-left: 16px !important;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item:last-child {\n  margin-right: 0px !important;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n  padding: 0;\n}\n\n.d-flex-footer {\n  display: flex;\n  width: 100%;\n}\n\n.text-place {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #333333;\n  font-weight: bold;\n}\n\n.div-promotion {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  font-weight: 300;\n}\n\n.div-promotion {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.div-promotion-active {\n  padding-bottom: 16px;\n  padding-top: 16px;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.div-promotion-active .div-flex {\n  display: flex;\n  align-items: center;\n}\n\n.div-promotion-active .m-width-280 {\n  min-width: 280px;\n}\n\n.div-promotion-active .text-right {\n  text-align: right;\n}\n\n.div-promotion-active .width-10 {\n  width: 10% !important;\n}\n\n.div-promotion-active .width-100 {\n  width: 100%;\n}\n\n.div-promotion-active .width-150 {\n  width: 150%;\n}\n\n.div-promotion-active .div-icon {\n  display: flex;\n  align-items: center;\n  width: 16px;\n}\n\n.div-promotion-active .div-text-center {\n  margin-right: 5px;\n  padding-left: 5px;\n  width: 85%;\n  display: flex;\n  font-size: 14px;\n  text-align: left;\n  color: #3f3b3b;\n}\n\n.div-promotion-active .div-text-center .text-sub {\n  color: #868998;\n}\n\n.div-promotion-active .div-text-center .text-point {\n  font-size: 14px;\n  font-weight: 500;\n  text-align: right;\n  color: #868998;\n}\n\n.div-promotion-active .div-button {\n  text-align: right;\n  width: 15%;\n  height: 24px;\n}\n\n.div-promotion-active .div-button ion-toggle.toggle-icon.toggle-inner {\n  width: 24px;\n}\n\n.div-promotion-active .div-line {\n  margin: 14px 0 18px 0;\n  border-bottom: solid 1px #f2f2f2;\n}\n\n.div-promotion-active .div-voucher-apply {\n  display: flex;\n  margin: 0 0 6px 0;\n}\n\n.div-promotion-active .div-voucher-apply .width-100 {\n  width: 100%;\n}\n\n.div-promotion-active .div-voucher-apply .width-200 {\n  width: 200%;\n}\n\n.div-promotion-active .div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n\n.div-promotion-active .div-voucher-apply .text-code {\n  font-size: 14px;\n  color: #f79321;\n}\n\n.div-promotion-active .div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n\n.div-promotion-active .div-voucher-apply .text-strike {\n  text-decoration: line-through;\n  text-align: right;\n}\n\n.div-promotion-active .div-voucher-apply .text-right {\n  text-align: right;\n}\n\n.div-promotion-active .align-center {\n  display: flex;\n  align-items: center;\n}\n\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  font-weight: 300;\n}\n\n.ion-item {\n  --padding-start: 0px ;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.cls-col {\n  align-self: flex-end;\n}\n\n.btnnone {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  height: 30px !important;\n  margin: 0 5px;\n}\n\n.btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 25px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n  margin: 0 5px;\n}\n\n.price-total {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n  margin-top: 3px;\n}\n\n.ion-toggle {\n  position: absolute;\n  right: 28px;\n}\n\n.price-vnd {\n  font-size: 12px;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n  margin-top: 3px;\n}\n\n.img-info-cathay {\n  margin-left: 4px;\n  position: absolute;\n  margin-top: 6px;\n}\n\n.text-click {\n  color: #00c1de;\n}\n\n.text-seen {\n  color: #f58220;\n}\n\n.font-weight-600 {\n  font-weight: 600 !important;\n}\n\n.div-show-promocathay {\n  padding: 10px;\n  background: #feeec7;\n  color: #f59233;\n  font-size: 16px;\n  font-weight: 600;\n  margin: 10px 0;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRhZGRzZXJ2aWNlL2ZsaWdodGFkZHNlcnZpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRhZGRzZXJ2aWNlL2ZsaWdodGFkZHNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksMkJBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FERUk7RUFDSSxhQUFBO0FDQ1I7O0FEQ0k7RUFDSSxtQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxlQUFBO0FDQ1I7O0FEQ0k7RUFDSSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxpQkFBQTtBQ0NSOztBRENJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FDQ1I7O0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FSOztBREVJO0VBQ0ksc0JBQUE7QUNBUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREtJO0VBQ0ksV0FBQTtBQ0hSOztBREtJO0VBQ0ksV0FBQTtBQ0hSOztBREtJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSFI7O0FES0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNIUjs7QURLSTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBQ0hSOztBRE9RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ05aOztBRFVJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNSUjs7QURXSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDVFI7O0FEV1E7RUFDSSx1QkFBQTtBQ1RaOztBRFlJO0VBQ0ksV0FBQTtBQ1ZSOztBRFlJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNWUjs7QURZSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ1ZSOztBRFlRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1haOztBRGFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNYWjs7QURpQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUVBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2hCWjs7QURrQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDaEJaOztBRG9CSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2xCUjs7QURvQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNsQlY7O0FEcUJNO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDbkJSOztBRHNCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3BCUjs7QUR1Qk07RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3JCUjs7QUR1QlE7RUFDSSxXQUFBO0FDckJaOztBRHlCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUN2QlI7O0FEMEJRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUN4Qlo7O0FEMkJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUN6Qlo7O0FENEJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUMxQlo7O0FENEJRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDMUJaOztBRDZCUTtFQUNJLHlCQUFBO0FDM0JaOztBRDZCUTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQzNCWjs7QURpQ1k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQy9CaEI7O0FEaUNvQjtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDL0J4Qjs7QURtQ29CO0VBQ0ksNkJBQUE7QUNqQ3hCOztBRG1Db0I7RUFDSSw0QkFBQTtBQ2pDeEI7O0FEMENBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUN2Q0o7O0FEeUNJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDdkNSOztBRHlDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3ZDWjs7QUQwQ1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3hDWjs7QUQ0Q0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUMxQ1I7O0FENkNJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDNUNSOztBRGdEQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDN0NKOztBRCtDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQzVDSjs7QUQ4Q0E7RUFDSSxlQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUMzQ1I7O0FENkNFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzFDSjs7QUQ0Q0U7RUFDRSxlQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN6Q1I7O0FEMkNFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDeENSOztBRDBDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ3hDWjs7QUQwQ1E7RUFDSSxnQkFBQTtBQ3hDWjs7QUQwQ1U7RUFDRSxpQkFBQTtBQ3hDWjs7QUQwQ1U7RUFDRSxxQkFBQTtBQ3hDWjs7QUQwQ1U7RUFDRSxXQUFBO0FDeENaOztBRDBDVTtFQUNFLFdBQUE7QUN4Q1o7O0FEMkNVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ3pDWjs7QUQ0Q1U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDMUNaOztBRDRDWTtFQUNFLGNBQUE7QUMxQ2Q7O0FENkNZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDM0NkOztBRGdEVTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUM5Q1o7O0FEZ0RZO0VBQ0UsV0FBQTtBQzlDZDs7QURrRFU7RUFDRSxxQkFBQTtFQUNBLGdDQUFBO0FDaERaOztBRG9EUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQ2xEWjs7QURvRFk7RUFDRSxXQUFBO0FDbERkOztBRG9EWTtFQUNJLFdBQUE7QUNsRGhCOztBRHFEWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDbkRkOztBRHFEWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDbkRkOztBRHNEWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDcERkOztBRHVEWTtFQUNFLDZCQUFBO0VBQ0MsaUJBQUE7QUNyRGY7O0FEd0RZO0VBQ0UsaUJBQUE7QUN0RGQ7O0FEMERVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDeERaOztBRDJERTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN4REo7O0FEMERFO0VBRUEscUJBQUE7QUN4REY7O0FEMERBO0VBRUksaUJBQUE7QUN4REo7O0FEMERBO0VBRUUsb0JBQUE7QUN4REY7O0FEMERBO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUN4REo7O0FEMERBO0VBRUksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDeERKOztBRDBEQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDdkRKOztBRHlEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ3RESjs7QUR5REE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUN0REo7O0FEd0RBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNyREo7O0FEdURBO0VBQ0ksY0FBQTtBQ3BESjs7QURzREE7RUFDSSxjQUFBO0FDbkRKOztBRHFERTtFQUNFLDJCQUFBO0FDbERKOztBRHFEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNsREoiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRhZGRzZXJ2aWNlL2ZsaWdodGFkZHNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xufVxuLnAtbGVmdC00e1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50e1xuXG4gICAgLnAtMTZ7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5wLXJpZ2h0LTEye1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICAucC1yaWdodC00e1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5tLWJvdHRvbS02e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuICAgIC5tLXRvcC02e1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICAgIC5tLXRvcC0xNntcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgLm0tYm90dG9tLTh7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgLnAtbGVmdC0xMHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAubS1sZWZ0LTEye1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG4gICAgLm0tOHtcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5kaXYtaXRlbS1zZXJ2aWNlLCAuZGl2LWl0ZW0tc2VhdCwgLmRpdi1pdGVtLW1lYWx7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgfVxuXG4gICAgLmltZy1pY29ue1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgICAuaW1nLXNlYXR7XG4gICAgICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXYtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cblxuICAgIC5kaXYtc3ViLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcblxuICAgICAgICBcbiAgICB9XG4gICAgLmRpdi13aWR0aC0xMDB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuZGl2LXdpZHRoLTE1MHtcbiAgICAgICAgd2lkdGg6IDE1MCU7XG4gICAgfVxuICAgIC50ZXh0LWNoYW5nZXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIC5kaXYtZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgLnRleHQtYm9sZHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRpdi1yaWdodHtcblxuICAgICAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI2Y1OTIzMztcbiAgICAgICAgICAgIGNvbG9yOiAjZjU5MjMzO1xuXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTElO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1zcGxpdHtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcbiAgICB9XG5cbiAgICAuZGl2LWxvZ297XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG5cbiAgICAgICAgLmxvZ28tdm5he1xuICAgICAgICAgICAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmltZy1kZXRhaWx7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgIH1cbiAgICAudGV4dC1vcGVyYXRlZEJ5e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbiAgICAuZGl2LWFpcmxpbmUtbmFtZXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgICAgICB3aWR0aDogMTg4cHg7XG5cbiAgICAgICAgLnRleHQtYWlybGluZXtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfSAgIFxuICAgICAgICAudGV4dC1zdWItYWlybGluZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LWZsaWdodC10aW1le1xuXG4gICAgICAgIC5kaXYtdGltZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG5cbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWxvY2F0aW9ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtZmxpZ2h0LWlub3V0e1xuICAgICAgICBwYWRkaW5nOiAwcHggMThweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5pbWctZmxpZ2h0LWlub3V0e1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kaXYtb25ld2F5e1xuICAgICAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLnRleHQtZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cblxuICAgICAgLmRpdi1jb25kaXRpb257XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuXG4gICAgICAgIC5pbWctYXJyb3d7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGl2LWZsaWdodC1jb25kaXRpb257XG4gICAgICAgIG1hcmdpbjogMCAtMTZweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmltZy1pbmZve1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LXRleHQtcmVmdW5ke1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LXRleHQtY2hhbmdlZmxpZ2h0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM5ZmM0M2E7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1pY29ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3QtYWxsb3d7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXN1YntcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC44cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmRpdi1ob3RlbC1jaXR5e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZGl2LXdyYXAtc2xpZGV7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwNSU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5kaXYtc2xpZGUtaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGl2LXNsaWRlLWl0ZW06Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGl2LXNsaWRlLWl0ZW06bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufVxuXG5cbi5kaXYtZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAuZGl2LXRvdGFse1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG4gICAgICAgIC50ZXh0LXN1Yi10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLmQtZmxleC1mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0LXBsYWNlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXYtcHJvbW90aW9ue1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5kZXBhcnQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgLmRpdi1wcm9tb3Rpb257XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmRpdi1wcm9tb3Rpb24tYWN0aXZle1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgLmRpdi1mbGV4e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm0td2lkdGgtMjgwe1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyODBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtcmlnaHQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53aWR0aC0xMCB7XG4gICAgICAgICAgICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53aWR0aC0xMDAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53aWR0aC0xNTAge1xuICAgICAgICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5kaXYtaWNvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpdi10ZXh0LWNlbnRlcntcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogIzNmM2IzYjtcbiAgICAgICAgICBcbiAgICAgICAgICAgIC50ZXh0LXN1YiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODY4OTk4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgLnRleHQtcG9pbnQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICBjb2xvcjogIzg2ODk5ODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLXRvZ2dsZS50b2dnbGUtaWNvbi50b2dnbGUtaW5uZXIge1xuICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAuZGl2LWxpbmUge1xuICAgICAgICAgICAgbWFyZ2luOiAxNHB4IDAgMThweCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMmYyZjI7XG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgLmRpdi12b3VjaGVyLWFwcGx5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA2cHggMDtcbiAgICAgICAgICBcbiAgICAgICAgICAgIC53aWR0aC0xMDAge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53aWR0aC0yMDAge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAudGV4dC1ub3JtYWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjM2YzYjNiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQtY29kZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmNzkzMjE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAudGV4dC1ub3JtYWwge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjM2YzYjNiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgLnRleHQtc3RyaWtlIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIC50ZXh0LXJpZ2h0IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5hbGlnbi1jZW50ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICB9XG4gIC5kZXBhcnQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgLmlvbi1pdGVtXG57XG4gIC0tcGFkZGluZy1zdGFydDogMHB4XG59XG4udGV4dC1yaWdodFxue1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNscy1jb2xcbntcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uYnRubm9uZVxue1xuICAgIGNvbG9yOiAjRjc5MjIxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG4uYnRubm9uZXN1Y2Nlc3NcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzQ0N2EwMDtcbiAgICBjb2xvcjogIzQ0N2EwMDtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuLnByaWNlLXRvdGFse1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMS40NTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbi5pb24tdG9nZ2xle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjhweDtcbn1cblxuLnByaWNlLXZuZHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG4uaW1nLWluZm8tY2F0aGF5e1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi50ZXh0LWNsaWNre1xuICAgIGNvbG9yOiAjMDBjMWRlO1xufVxuLnRleHQtc2VlbntcbiAgICBjb2xvcjogI2Y1ODIyMDtcbiAgfVxuICAuZm9udC13ZWlnaHQtNjAwe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLmRpdi1zaG93LXByb21vY2F0aGF5IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZWVlYzc7XG4gICAgY29sb3I6ICNmNTkyMzM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuIiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xufVxuXG4ucC1sZWZ0LTQge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5wLTE2IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAucC1yaWdodC0xMiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnAtcmlnaHQtNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAubS1ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAubS10b3AtNiB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAubS10b3AtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5tLWJvdHRvbS04IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5wLWxlZnQtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLm0tbGVmdC0xMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5tLTgge1xuICBtYXJnaW46IDAgOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWl0ZW0tc2VydmljZSwgLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtaXRlbS1zZWF0LCAuZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1pdGVtLW1lYWwge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHBhZGRpbmc6IDEwcHggOHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5pbWctaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmltZy1zZWF0IHtcbiAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtd2lkdGgtMTUwIHtcbiAgd2lkdGg6IDE1MCU7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnRleHQtY2hhbmdlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAudGV4dC1ib2xkIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LXJpZ2h0IC5kaXYtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjZjU5MjMzO1xuICBjb2xvcjogI2Y1OTIzMztcbiAgbWFyZ2luLWxlZnQ6IDUxJTtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtbG9nbyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1sb2dvIC5sb2dvLXZuYSB7XG4gIGhlaWdodDogMTFweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5pbWctZGV0YWlsIHtcbiAgd2lkdGg6IDE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnRleHQtb3BlcmF0ZWRCeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1haXJsaW5lLW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHdpZHRoOiAxODhweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWFpcmxpbmUtbmFtZSAudGV4dC1haXJsaW5lIHtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgbWF4LXdpZHRoOiAxNzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1haXJsaW5lLW5hbWUgLnRleHQtc3ViLWFpcmxpbmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1mbGlnaHQtdGltZSAuZGl2LXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1mbGlnaHQtdGltZSAuZGl2LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1mbGlnaHQtaW5vdXQge1xuICBwYWRkaW5nOiAwcHggMThweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtZmxpZ2h0LWlub3V0IC5pbWctZmxpZ2h0LWlub3V0IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC04cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1vbmV3YXkge1xuICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAudGV4dC1kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWNvbmRpdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtY29uZGl0aW9uIC5pbWctYXJyb3cge1xuICB3aWR0aDogMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWZsaWdodC1jb25kaXRpb24ge1xuICBtYXJnaW46IDAgLTE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuaW1nLWluZm8ge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtdGV4dC1yZWZ1bmQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtdGV4dC1jaGFuZ2VmbGlnaHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjOWZjNDNhO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAubm90LWFsbG93IHtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAudGV4dC1zdWIge1xuICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtaG90ZWwtY2l0eSAuZGl2LXdyYXAtc2xpZGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHdpZHRoOiAxMDUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWhvdGVsLWNpdHkgLmRpdi13cmFwLXNsaWRlIC5kaXYtc2xpZGUtaXRlbSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDI4NHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1ob3RlbC1jaXR5IC5kaXYtd3JhcC1zbGlkZSAuZGl2LXNsaWRlLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWhvdGVsLWNpdHkgLmRpdi13cmFwLXNsaWRlIC5kaXYtc2xpZGUtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwge1xuICB3aWR0aDogMjEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC1zdWItdG90YWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpdi1mb290ZXIgLmRpdi1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kLWZsZXgtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LXBsYWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXYtcHJvbW90aW9uIHtcbiAgcGFkZGluZzogMTZweCAwO1xuICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kZXBhcnQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZGl2LXByb21vdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGl2LXByb21vdGlvbi1hY3RpdmUge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSAuZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC5tLXdpZHRoLTI4MCB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG59XG4uZGl2LXByb21vdGlvbi1hY3RpdmUgLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSAud2lkdGgtMTAge1xuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XG59XG4uZGl2LXByb21vdGlvbi1hY3RpdmUgLndpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC53aWR0aC0xNTAge1xuICB3aWR0aDogMTUwJTtcbn1cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSAuZGl2LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTZweDtcbn1cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSAuZGl2LXRleHQtY2VudGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogODUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjM2YzYjNiO1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC5kaXYtdGV4dC1jZW50ZXIgLnRleHQtc3ViIHtcbiAgY29sb3I6ICM4Njg5OTg7XG59XG4uZGl2LXByb21vdGlvbi1hY3RpdmUgLmRpdi10ZXh0LWNlbnRlciAudGV4dC1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjODY4OTk4O1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC5kaXYtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjRweDtcbn1cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSAuZGl2LWJ1dHRvbiBpb24tdG9nZ2xlLnRvZ2dsZS1pY29uLnRvZ2dsZS1pbm5lciB7XG4gIHdpZHRoOiAyNHB4O1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC5kaXYtbGluZSB7XG4gIG1hcmdpbjogMTRweCAwIDE4cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMmYyZjI7XG59XG4uZGl2LXByb21vdGlvbi1hY3RpdmUgLmRpdi12b3VjaGVyLWFwcGx5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDAgNnB4IDA7XG59XG4uZGl2LXByb21vdGlvbi1hY3RpdmUgLmRpdi12b3VjaGVyLWFwcGx5IC53aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSAuZGl2LXZvdWNoZXItYXBwbHkgLndpZHRoLTIwMCB7XG4gIHdpZHRoOiAyMDAlO1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM2YzYjNiO1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1jb2RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y3OTMyMTtcbn1cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSAuZGl2LXZvdWNoZXItYXBwbHkgLnRleHQtbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzNmM2IzYjtcbn1cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSAuZGl2LXZvdWNoZXItYXBwbHkgLnRleHQtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIC5hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVwYXJ0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2xzLWNvbCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uYnRubm9uZSB7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5idG5ub25lc3VjY2VzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICM0NDdhMDA7XG4gIGNvbG9yOiAjNDQ3YTAwO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ucHJpY2UtdG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uaW9uLXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI4cHg7XG59XG5cbi5wcmljZS12bmQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5pbWctaW5mby1jYXRoYXkge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnRleHQtY2xpY2sge1xuICBjb2xvcjogIzAwYzFkZTtcbn1cblxuLnRleHQtc2VlbiB7XG4gIGNvbG9yOiAjZjU4MjIwO1xufVxuXG4uZm9udC13ZWlnaHQtNjAwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXNob3ctcHJvbW9jYXRoYXkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmVlZWM3O1xuICBjb2xvcjogI2Y1OTIzMztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightaddservice/flightaddservice.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/flightaddservice/flightaddservice.page.ts ***!
  \***********************************************************/
/*! exports provided: FlightaddservicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaddservicePage", function() { return FlightaddservicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _flightpricedetail_flightpricedetail_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../flightpricedetail/flightpricedetail.page */ "./src/app/flightpricedetail/flightpricedetail.page.ts");
/* harmony import */ var _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../flightquickback/flightquickback.page */ "./src/app/flightquickback/flightquickback.page.ts");
/* harmony import */ var _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../providers/CustomAnimations */ "./src/app/providers/CustomAnimations.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../adddiscount/adddiscount.page */ "./src/app/adddiscount/adddiscount.page.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");



















let FlightaddservicePage = class FlightaddservicePage {
    constructor(navCtrl, gf, modalCtrl, toastCtrl, zone, imageLoader, storage, actionsheetCtrl, valueGlobal, searchhotel, _flightService, alertCtrl, sanitizer, safariViewController, _voucherService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.imageLoader = imageLoader;
        this.storage = storage;
        this.actionsheetCtrl = actionsheetCtrl;
        this.valueGlobal = valueGlobal;
        this.searchhotel = searchhotel;
        this._flightService = _flightService;
        this.alertCtrl = alertCtrl;
        this.sanitizer = sanitizer;
        this.safariViewController = safariViewController;
        this._voucherService = _voucherService;
        this.hasdepartluggage = false;
        this.hasreturnluggage = false;
        this.showbuttonluggage = true;
        this.departLuggage = [];
        this.returnLuggage = [];
        this.listdepartseatselected = "";
        this.listreturnseatselected = "";
        this.allowchoiceseat = false;
        this.roundtrip = true;
        this.chkchangeflight = true;
        this.hadchoiceluggage = false;
        this.hasdepartseat = false;
        this.hasreturnseat = false;
        this.checkseat = false;
        this.ischeckVN = true;
        this.itemsFlightCityHotel = [];
        this.itemsFlightCityHotelDetail = [];
        this.listDiChung = "";
        this.isDiChung = false;
        this.loadHotelCityDone = false;
        this.discountpromo = 0;
        this.promocode = "";
        this.ischeckerror = 0;
        this.promotionCode = "";
        this.priceCathay = 0;
        this.ischeckShowDC = 0;
        this.dateShowCathay = '2022-09-30';
        this.isShowPromoCathay = false;
        if (this._flightService.itemFlightCache) {
            this.roundtrip = this._flightService.itemFlightCache.roundTrip;
            this.adult = this._flightService.itemFlightCache.adult;
            this.child = this._flightService.itemFlightCache.child * 1 + (this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0) * 1;
            this.departdisplay = this._flightService.itemFlightCache.departCity;
            this.returndisplay = this._flightService.itemFlightCache.returnCity;
            this.departtimedisplay = this._flightService.itemFlightCache.departTimeDisplay;
            this.returntimedisplay = this._flightService.itemFlightCache.returnTimeDisplay;
            this.departFlight = this._flightService.itemFlightCache.departFlight;
            this.returnFlight = this._flightService.itemFlightCache.returnFlight;
            if (this.departFlight) {
                this.departtime_depart = moment__WEBPACK_IMPORTED_MODULE_8__(this.departFlight.departTime).format("HH:mm");
                this.landingtime_depart = moment__WEBPACK_IMPORTED_MODULE_8__(this.departFlight.landingTime).format("HH:mm");
                this.departlocationdisplay = this._flightService.itemFlightCache.departCode + " · " + this.departFlight.flightTimeDetailDisplay + " · " + this._flightService.itemFlightCache.returnCode;
                this.departtimedisplay = this._flightService.itemFlightCache.departTimeDisplay + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.departFlight.departTime).format("YYYY");
            }
            if (this.returnFlight) {
                this.departtime_return = moment__WEBPACK_IMPORTED_MODULE_8__(this.returnFlight.departTime).format("HH:mm");
                this.landingtime_return = moment__WEBPACK_IMPORTED_MODULE_8__(this.returnFlight.landingTime).format("HH:mm");
                this.returnlocationdisplay = this._flightService.itemFlightCache.returnCode + " · " + this.returnFlight.flightTimeDetailDisplay + " · " + this._flightService.itemFlightCache.departCode;
                this.returntimedisplay = this._flightService.itemFlightCache.returnTimeDisplay + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.returnFlight.departTime).format("YYYY");
            }
            this.isExtenal = _flightService.itemFlightCache.isExtenal;
            this.getpriceCathay();
            this.getCheckAirportDiChung();
            if (this.departFlight && this.departFlight.ticketCondition) {
                this.departConditionInfo = this.departFlight.ticketCondition;
            }
            else {
                this.getDetailTicket(this.departFlight).then((data) => {
                    if (data && data.ticketCondition) {
                        this.departConditionInfo = data.ticketCondition;
                    }
                });
            }
            if (this.returnFlight && this.returnFlight.ticketCondition) {
                this.returnConditionInfo = this.returnFlight.ticketCondition;
            }
            else {
                if (this.returnFlight) {
                    this.getDetailTicket(this.returnFlight).then((data) => {
                        if (data && data.ticketCondition) {
                            this.returnConditionInfo = data.ticketCondition;
                        }
                    });
                }
            }
            this.getSummaryBooking(this._flightService.itemFlightCache.dataTicket).then((dataBooking) => {
                if (dataBooking && dataBooking.hotelIds) {
                    this.getHotelCity(dataBooking.hotelIds).then((dataHotelCity) => {
                        if (dataHotelCity && dataHotelCity.List) {
                            if (dataBooking && dataBooking.rateKey) {
                                this.getHotelCityPrice(dataBooking.rateKey).then((dataHotelCityPrice) => {
                                    if (dataHotelCityPrice && dataHotelCityPrice.HotelListResponse && dataHotelCityPrice.HotelListResponse.HotelList && dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary && dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary.length > 0) {
                                        let arrHotelPrice = [], arrHotelDetail = [], arrHotel = [];
                                        this.mapHotelInfo(dataHotelCity, dataHotelCityPrice, arrHotelPrice, arrHotelDetail, arrHotel).then((data) => {
                                            this._flightService.itemFlightCache.itemsFlightCityHotel = [...data];
                                            this.loadHotelCity([...data]);
                                        });
                                    }
                                    else {
                                        this.loadHotelCityDone = true;
                                    }
                                });
                            }
                        }
                        else {
                            this.loadHotelCityDone = true;
                        }
                    });
                }
                else {
                    this.loadHotelCityDone = true;
                }
                this.gf.hideLoading();
            });
            this.checkLuggage();
            if (this._flightService.itemFlightCache.listdepartseatselected) {
                this.listdepartseatselected = this._flightService.itemFlightCache.listdepartseatselected;
            }
            if (this._flightService.itemFlightCache.listreturnseatselected) {
                this.listreturnseatselected = this._flightService.itemFlightCache.listreturnseatselected;
            }
            if (this._flightService.itemFlightCache.DICHUNGParam) {
                this.listDiChung = this._flightService.itemFlightCache.DICHUNGParam;
            }
            this.totalPriceAll(0);
            if (!(this._flightService.itemFlightCache.jsonSeats && ((this._flightService.itemFlightCache.jsonSeats.departSeats && this._flightService.itemFlightCache.jsonSeats.departSeats.length > 0) || (this._flightService.itemFlightCache.jsonSeats.returnSeats && this._flightService.itemFlightCache.jsonSeats.returnSeats.length > 0)))) {
                this.getSeatMap(this._flightService.itemFlightCache.reservationId);
            }
            else {
                this.allowchoiceseat = true;
            }
            if (this._flightService.objSearch.roundTrip && !this._flightService.itemFlightCache.hasChoiceLuggage) {
                if ((this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airLineLuggage.length == 0
                    && this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airLineLuggage.length == 0)
                    || ((!this._flightService.itemFlightCache.departLuggage || (this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length == 0))
                        && (!this._flightService.itemFlightCache.returnLuggage || (this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length == 0)))) {
                    if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "BambooAirways") {
                        this.getLuggage(this._flightService.itemFlightCache.reservationId, "BB", true).then((check) => {
                            if (check) {
                                this.callCheckLuggage();
                            }
                        });
                    }
                    else if (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airlineCode == "BambooAirways") {
                        this.getLuggage(this._flightService.itemFlightCache.reservationId, "BB", false).then((check) => {
                            if (check) {
                                this.callCheckLuggage();
                            }
                        });
                    }
                    if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "VietJetAir") {
                        this.getLuggage(this._flightService.itemFlightCache.reservationId, "VJ", true).then((check) => {
                            if (check) {
                                this.callCheckLuggage();
                            }
                        });
                    }
                    else if (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airlineCode == "VietJetAir") {
                        this.getLuggage(this._flightService.itemFlightCache.reservationId, "VJ", false).then((check) => {
                            if (check) {
                                if (this.returnLuggage && this.returnLuggage.length > 0 && this.checkLuggageZeroAmount(this.returnLuggage)) {
                                    setTimeout(() => {
                                        let itemdefault = this.checkLuggageZeroAmount(this.returnLuggage);
                                        itemdefault.quantity = (this._flightService.itemFlightCache.adult * 1 + this._flightService.itemFlightCache.child * 1);
                                        this._flightService.itemFlightCache.hasChoiceLuggage = true;
                                        this.showbuttonluggage = true;
                                        this.checkLuggageZero(2);
                                    }, 350);
                                }
                            }
                        });
                    }
                    if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "VietnamAirlines") {
                        this.ischeckVN = false;
                        this.getLuggage(this._flightService.itemFlightCache.reservationId, "VN", true).then((check) => {
                            if (check) {
                                this.callCheckLuggage();
                            }
                        });
                    }
                    if (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airlineCode == "VietnamAirlines") {
                        this.ischeckVN = false;
                        if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode != "VietnamAirlines") {
                            this.getLuggage(this._flightService.itemFlightCache.reservationId, "VN", false).then((check) => {
                                if (check) {
                                    this.callCheckLuggage();
                                }
                            });
                        }
                        else {
                            this.getLuggageVN(this._flightService.itemFlightCache.reservationId, "VN", false).then((check) => {
                                if (check) {
                                    this.callCheckLuggage();
                                }
                            });
                        }
                    }
                }
            }
            else {
                if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airLineLuggage.length == 0 && this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length == 0) {
                    if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "BambooAirways") {
                        this.getLuggage(this._flightService.itemFlightCache.reservationId, "BB", true);
                    }
                    else if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "VietJetAir") {
                        this.getLuggage(this._flightService.itemFlightCache.reservationId, "VJ", true).then((check) => {
                            if (check) {
                                this.callCheckLuggage();
                            }
                        });
                    }
                    else if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "VietnamAirlines") {
                        this.getLuggage(this._flightService.itemFlightCache.reservationId, "VN", true);
                    }
                }
                else if (this._flightService.itemFlightCache.hasChoiceLuggage && ((this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length > 0) || (this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length > 0))) {
                    this.showbuttonluggage = !this._flightService.itemFlightCache.hasChoiceLuggage;
                }
            }
            this.isShowPromoCathay = moment__WEBPACK_IMPORTED_MODULE_8__(this.dateShowCathay).diff(moment__WEBPACK_IMPORTED_MODULE_8__(moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD'))) >= 0;
            this.storage.get('jti').then(jti => {
                if (jti) {
                    this.jti = jti;
                }
            });
        }
    }
    ngOnInit() {
        this._flightService.itemFlightLuggagePriceChange.pipe().subscribe((data) => {
            if (data) {
                this._flightService.itemFlightCache.hasChoiceLuggage = true;
                this.totalPriceAll(0);
            }
        });
        this._flightService.itemFlightSeatPriceChange.pipe().subscribe((data) => {
            if (data) {
                this.totalPriceAll(0);
            }
        });
        this._flightService.itemFlightReChoiceSeat.pipe().subscribe((data) => {
            if (data) {
                this.allowchoiceseat = false;
                this.checkseat = true;
                this.loadHotelCityDone = true;
                this.clearSeatChoice();
                this.getSeatMap(this._flightService.itemFlightCache.reservationId);
            }
        });
        this._flightService.itemResetCheckSeat.pipe().subscribe((data) => {
            if (data) {
                this.checkseat = false;
            }
        });
        this._flightService.itemCheckHotelCity.pipe().subscribe((data) => {
            if (data) {
                this.loadHotelCity(data);
            }
            else {
                this.loadHotelCityDone = true;
            }
        });
        this._flightService.itemHotelCityChange.pipe().subscribe((data) => {
            if (data) {
                this.checkChangeRoom(data);
            }
        });
        this._flightService.itemTranferChange.pipe().subscribe((data) => {
            if (data) {
                this.totalPriceAll(0);
            }
        });
        this._flightService.itemHotelCityAddHotel.pipe().subscribe((data) => {
            if (data.id && data.value) {
                this.clearOtherSelectedItem(data.id).then((check) => {
                    if (check) {
                        if (this.checkEmptyHotelCity && this._flightService.itemFlightCache.pnr && this._flightService.itemFlightCache.pnr.resNo && this._flightService.itemFlightCache.itemsFlightCityHotel && this._flightService.itemFlightCache.itemsFlightCityHotel.length > 0) {
                            this.checkEmptyHotelCity = false;
                        }
                        this.AddHotelCity(data.id);
                    }
                });
            }
            else {
                if (this._flightService.itemFlightCache.pnr && this._flightService.itemFlightCache.pnr.resNo && this._flightService.itemFlightCache.itemsFlightCityHotel && this._flightService.itemFlightCache.itemsFlightCityHotel.length > 0) {
                    this.checkEmptyHotelCity = true;
                }
                if (this._flightService.itemFlightCache.objHotelCitySelected && data.id == this._flightService.itemFlightCache.objHotelCitySelected.HotelId) {
                    this._flightService.itemFlightCache.objHotelCitySelected = null;
                }
                this.totalPriceAll(0);
            }
        });
        this._flightService.itemHotelCityAddHotelFromDetail.pipe().subscribe((data) => {
            if (data.id && data.value) {
                this.AddSelectedItem(data.id).then((check) => {
                    if (check) {
                        this.AddHotelCity(data.id);
                    }
                });
            }
        });
        this._voucherService.getObservable().subscribe((itemVoucher) => {
            if (itemVoucher) {
                if (this.promocode && this.promocode != itemVoucher.code && !this.itemVoucher) {
                    this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
                    this.gf.showAlertMessageOnly(`Mã voucher ${this.promocode} đang được sử dụng. Quý khách vui lòng kiểm tra lại.`);
                    return;
                }
                let databkg = this._flightService.itemFlightCache.dataSummaryBooking;
                let itemflightcache = this._flightService.itemFlightCache;
                if (databkg && itemflightcache.promotionCode && itemflightcache.pnr && itemflightcache.pnr.resNo && itemflightcache.hasvoucher && itemflightcache.hasvoucher != this.promotionCode) {
                    this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
                    this.showAlertPromoCode();
                    return;
                }
                this.zone.run(() => {
                    if (itemVoucher.claimed) {
                        this.itemVoucher = itemVoucher;
                        this.promocode = itemVoucher.code;
                        this.promotionCode = itemVoucher.code;
                        this.discountpromo = itemVoucher.rewardsItem.price;
                    }
                    else {
                        this.itemVoucher = null;
                        this.promocode = "";
                        this.promotionCode = "";
                        this.discountpromo = 0;
                    }
                    this.totalPriceAll(0);
                });
                this.modalCtrl.dismiss();
            }
        });
        this._voucherService.getObservableClearVoucherAfterPaymentDone().subscribe((check) => {
            if (check) {
                this.itemVoucher = null;
                this.promocode = "";
                this.promotionCode = "";
                this.discountpromo = 0;
                this._flightService.itemFlightCache.hasvoucher = false;
                this.totalPriceAll(0);
            }
        });
    }
    showdiscount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.promocode = "";
            this.promotionCode = "";
            this.discountpromo = 0;
            this.itemVoucher = null;
            this._voucherService.isFlightPage = true;
            this.msg = "";
            this._voucherService.openFrom = 'flightaddservice';
            const modal = yield this.modalCtrl.create({
                component: _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_16__["AdddiscountPage"],
            });
            modal.present();
            if (this._voucherService.selectVoucher && this._voucherService.selectVoucher.claimed) {
                this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                this._voucherService.selectVoucher = null;
            }
            this.totalPriceAll(0);
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    let vc = data.data;
                    if (vc.applyFor && vc.applyFor != 'flight') {
                        this.gf.showAlertMessageOnly(`Mã giảm giá chỉ áp dụng cho đơn hàng ${vc.applyFor == 'flight' ? 'vé máy bay' : 'khách sạn'}. Quý khách vui lòng chọn lại mã khác!`);
                        this._voucherService.rollbackSelectedVoucher.emit(vc);
                        return;
                    }
                    else {
                        this._voucherService.isFlightPage = false;
                        this.zone.run(() => {
                            if (data.data.promocode) {
                                jquery__WEBPACK_IMPORTED_MODULE_4__('.div-point').addClass('div-disabled');
                                this.promocode = data.data.promocode;
                                this.promofunc(data.data);
                            }
                        });
                    }
                }
            });
        });
    }
    clearSeatChoice() {
        this.listdepartseatselected = '';
        this.listreturnseatselected = '';
        this._flightService.itemFlightCache.departSeatChoice = [];
        this._flightService.itemFlightCache.returnSeatChoice = [];
        this._flightService.itemFlightCache.listdepartseatselected = '';
        this._flightService.itemFlightCache.listreturnseatselected = '';
        this._flightService.itemFlightCache.departSeatChoiceAmout = 0;
        this._flightService.itemFlightCache.returnSeatChoiceAmout = 0;
        this._flightService.itemFlightCache.listSeatNormal.forEach(element => {
            if (element.itemsLeft && element.itemsLeft.length > 0) {
                element.itemsLeft.forEach(elementLeft => {
                    if (elementLeft.booked) {
                        elementLeft.booked = false;
                    }
                });
            }
            if (element.elementRight && element.elementRight.length > 0) {
                element.itemsRight.forEach(elementRight => {
                    if (elementRight.booked) {
                        elementRight.booked = false;
                    }
                });
            }
        });
        this.totalPriceAll(0);
    }
    callCheckLuggage() {
        if (this.departLuggage && this.departLuggage.length > 0 && this.checkLuggageZeroAmount(this.departLuggage)) {
            setTimeout(() => {
                let itemdefault = this.checkLuggageZeroAmount(this.departLuggage);
                itemdefault.quantity = (this._flightService.itemFlightCache.adult * 1 + this._flightService.itemFlightCache.child * 1);
                this._flightService.itemFlightCache.hasChoiceLuggage = true;
                this.showbuttonluggage = true;
                this.checkLuggageZero(1);
            }, 350);
        }
        if (this.returnLuggage && this.returnLuggage.length > 0 && this.checkLuggageZeroAmount(this.returnLuggage)) {
            setTimeout(() => {
                let itemdefault = this.checkLuggageZeroAmount(this.returnLuggage);
                itemdefault.quantity = (this._flightService.itemFlightCache.adult * 1 + this._flightService.itemFlightCache.child * 1);
                this._flightService.itemFlightCache.hasChoiceLuggage = true;
                this.showbuttonluggage = true;
                this.checkLuggageZero(2);
            }, 350);
        }
    }
    checkLuggage() {
        if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airLineLuggage && this._flightService.itemFlightCache.departFlight.airLineLuggage.length > 0) {
            this.departLuggage = this._flightService.itemFlightCache.departFlight.airLineLuggage;
            let chocieDepartLuggage = this.departLuggage.filter(element => {
                return element.quantity;
            });
            if (chocieDepartLuggage && chocieDepartLuggage.length > 0) {
                this.zone.run(() => {
                    this.hasdepartluggage = true;
                    this.showbuttonluggage = false;
                });
            }
            else {
                this.zone.run(() => {
                    this.hasdepartluggage = false;
                    this.showbuttonluggage = true;
                });
            }
        }
        if (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airLineLuggage && this._flightService.itemFlightCache.returnFlight.airLineLuggage.length > 0) {
            this.returnLuggage = this._flightService.itemFlightCache.returnFlight.airLineLuggage;
            let chocieReturnLuggage = this.returnLuggage.filter(element => {
                return element.quantity;
            });
            if (chocieReturnLuggage && chocieReturnLuggage.length > 0) {
                this.zone.run(() => {
                    this.hasreturnluggage = true;
                    this.showbuttonluggage = false;
                });
            }
            else {
                this.zone.run(() => {
                    this.hasreturnluggage = false;
                    this.showbuttonluggage = true;
                });
            }
        }
        if (this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length > 0) {
            this.departLuggage = this._flightService.itemFlightCache.departLuggage;
            let chocieDepartLuggage = this.departLuggage.filter(element => {
                return element.quantity;
            });
            if (chocieDepartLuggage && chocieDepartLuggage.length > 0) {
                this.zone.run(() => {
                    this.hasdepartluggage = true;
                    this.showbuttonluggage = false;
                });
            }
            else {
                this.zone.run(() => {
                    this.hasdepartluggage = false;
                    this.showbuttonluggage = true;
                });
            }
        }
        if (this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length > 0) {
            this.returnLuggage = this._flightService.itemFlightCache.returnLuggage;
            let chocieReturnLuggage = this.returnLuggage.filter(element => {
                return element.quantity;
            });
            if (chocieReturnLuggage && chocieReturnLuggage.length > 0) {
                this.zone.run(() => {
                    this.hasreturnluggage = true;
                    this.showbuttonluggage = false;
                });
            }
            else {
                this.zone.run(() => {
                    this.hasreturnluggage = false;
                    this.showbuttonluggage = true;
                });
            }
        }
    }
    checkLuggageZero(type) {
        if (type == 1 && this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length > 0) {
            this.departLuggage = this._flightService.itemFlightCache.departLuggage;
            let chocieDepartLuggage = this.departLuggage.filter(element => {
                return element.quantity;
            });
            if (chocieDepartLuggage && chocieDepartLuggage.length > 0) {
                this.zone.run(() => {
                    this.hasdepartluggage = true;
                    this.showbuttonluggage = false;
                });
            }
            else {
                this.zone.run(() => {
                    this.hasdepartluggage = false;
                    this.showbuttonluggage = true;
                });
            }
        }
        else if (type == 2 && this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length > 0) {
            this.returnLuggage = this._flightService.itemFlightCache.returnLuggage;
            let chocieReturnLuggage = this.returnLuggage.filter(element => {
                return element.quantity;
            });
            if (chocieReturnLuggage && chocieReturnLuggage.length > 0) {
                this.zone.run(() => {
                    this.hasreturnluggage = true;
                    this.showbuttonluggage = false;
                });
            }
            else {
                this.zone.run(() => {
                    this.hasreturnluggage = false;
                    this.showbuttonluggage = true;
                });
            }
        }
    }
    getpriceCathay() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetPriceCathay?roundtrip=' + this.roundtrip + '&pax=' + this._flightService.itemFlightCache.pax + '',
            timeout: 180000, maxAttempts: 5, retryDelay: 20000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
            let objError = {
                page: "flightsearchresult",
                func: "selectTicket",
                message: response.statusMessage,
                content: response.body,
                type: "warning",
                param: JSON.stringify(options)
            };
            if (error) {
                error.page = "flightsearchresult";
                error.func = "selectTicket";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                se.priceCathay = jsondata.priceCathay;
                se._flightService.itemFlightCache.InsuranceType = 0;
                se._flightService.itemFlightCache.priceCathay = 0;
            }
        });
    }
    getLuggage(id, code, isdepart) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/ancillaryOptions?token=3b760e5dcf038878925b5613c32615ea3&reservationId=" + id + "&airline=" + code,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                let objError = {
                    page: "flightsearchresult",
                    func: "selectTicket",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                if (error) {
                    error.page = "flightsearchresult";
                    error.func = "selectTicket";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                }
                if (response.statusCode == 200) {
                    let jsondata = JSON.parse(body);
                    se.zone.run(() => {
                        if (isdepart) {
                            if (jsondata.baggage && jsondata.baggage && jsondata.baggage.length > 0 && se._flightService.itemFlightCache.departFlight) {
                                se._flightService.itemFlightCache.departLuggage = jsondata.baggage.length > 0 ? jsondata.baggage : [];
                                se.departLuggage = se._flightService.itemFlightCache.departLuggage;
                            }
                            if (jsondata.baggageReturn && jsondata.baggageReturn.length > 0 && se._flightService.itemFlightCache.returnFlight) {
                                se._flightService.itemFlightCache.returnLuggage = jsondata.baggageReturn.length > 0 ? jsondata.baggageReturn : [];
                                se.returnLuggage = se._flightService.itemFlightCache.returnLuggage;
                            }
                        }
                        else {
                            if (jsondata.baggage && jsondata.baggage && jsondata.baggage.length > 0 && se._flightService.itemFlightCache.returnFlight) {
                                se._flightService.itemFlightCache.returnLuggage = jsondata.baggage.length > 0 ? jsondata.baggage : [];
                                se.returnLuggage = se._flightService.itemFlightCache.returnLuggage;
                            }
                        }
                        if (code == 'VN') {
                            se.ischeckVN = true;
                        }
                        se.showbuttonluggage = true;
                        resolve(true);
                    });
                }
                else {
                    if (code == 'VN') {
                        se.ischeckVN = true;
                    }
                    resolve(false);
                }
            });
        });
    }
    getLuggageVN(id, code, isdepart) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/ancillaryOptions?token=3b760e5dcf038878925b5613c32615ea3&reservationId=" + id + "&airline=" + code + "&type=return",
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                let objError = {
                    page: "flightsearchresult",
                    func: "selectTicket",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                if (error) {
                    error.page = "flightsearchresult";
                    error.func = "selectTicket";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                }
                if (response.statusCode == 200) {
                    let jsondata = JSON.parse(body);
                    se.zone.run(() => {
                        if (isdepart) {
                            if (jsondata.baggage && jsondata.baggage && jsondata.baggage.length > 0 && se._flightService.itemFlightCache.departFlight) {
                                se._flightService.itemFlightCache.departLuggage = jsondata.baggage.length > 0 ? jsondata.baggage : [];
                                se.departLuggage = se._flightService.itemFlightCache.departLuggage;
                            }
                            if (jsondata.baggageReturn && jsondata.baggageReturn.length > 0 && se._flightService.itemFlightCache.returnFlight) {
                                se._flightService.itemFlightCache.returnLuggage = jsondata.baggageReturn.length > 0 ? jsondata.baggageReturn : [];
                                se.returnLuggage = se._flightService.itemFlightCache.returnLuggage;
                            }
                        }
                        else {
                            if (jsondata.baggage && jsondata.baggage && jsondata.baggage.length > 0 && se._flightService.itemFlightCache.returnFlight) {
                                se._flightService.itemFlightCache.returnLuggage = jsondata.baggage.length > 0 ? jsondata.baggage : [];
                                se.returnLuggage = se._flightService.itemFlightCache.returnLuggage;
                            }
                        }
                        if (code == 'VN') {
                            se.ischeckVN = true;
                        }
                        se.showbuttonluggage = true;
                        resolve(true);
                    });
                }
                else {
                    if (code == 'VN') {
                        se.ischeckVN = true;
                    }
                    resolve(false);
                }
            });
        });
    }
    checkLuggageZeroAmount(list) {
        let items = list.filter((item) => { return item.amount == 0 && item.weight > 0; });
        return items && items.length > 0 ? items[0] : false;
    }
    totalPriceAll(mealtype) {
        this.zone.run(() => {
            this.checkLuggage();
            if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.totalPrice) {
                let totalprice = this._flightService.itemFlightCache.departFlight.totalPrice + (this._flightService.itemFlightCache.returnFlight ? this._flightService.itemFlightCache.returnFlight.totalPrice : 0);
                let departluggageprice = 0, returnluggageprice = 0;
                departluggageprice = this._flightService.itemFlightCache.departFlight.airLineLuggage.reduce((total, b) => { return total + (b.quantity * b.amount); }, 0);
                if (this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length > 0) {
                    departluggageprice += this._flightService.itemFlightCache.departLuggage.reduce((total, b) => { return total + (b.quantity * b.amount); }, 0);
                }
                returnluggageprice = this._flightService.itemFlightCache.returnFlight ? this._flightService.itemFlightCache.returnFlight.airLineLuggage.reduce((total, b) => { return total + (b.quantity * b.amount); }, 0) : 0;
                if (this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length > 0) {
                    returnluggageprice += this._flightService.itemFlightCache.returnLuggage.reduce((total, b) => { return total + (b.quantity * b.amount); }, 0);
                }
                if (departluggageprice > 0) {
                    this.hasdepartluggage = true;
                    this.showbuttonluggage = false;
                    totalprice += departluggageprice;
                }
                if (returnluggageprice > 0) {
                    this.hasreturnluggage = true;
                    this.showbuttonluggage = false;
                    totalprice += returnluggageprice;
                }
                if (this._flightService.itemFlightCache.departSeatChoiceAmout) {
                    totalprice += this._flightService.itemFlightCache.departSeatChoiceAmout;
                }
                if (this._flightService.itemFlightCache.returnSeatChoiceAmout) {
                    totalprice += this._flightService.itemFlightCache.returnSeatChoiceAmout;
                }
                if (this._flightService.itemFlightCache.DICHUNGParam) {
                    totalprice += this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo;
                    totalprice += this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn;
                }
                if (this.promotionCode && this.discountpromo > 0) {
                    totalprice = totalprice - this.discountpromo;
                }
                if (this.isCathay) {
                    totalprice = totalprice + this.priceCathay;
                }
                this.listdepartseatselected = this._flightService.itemFlightCache.listdepartseatselected;
                if (this._flightService.itemFlightCache.listdepartseatselected) {
                    this.hasdepartseat = true;
                }
                this.listreturnseatselected = this._flightService.itemFlightCache.listreturnseatselected;
                if (this._flightService.itemFlightCache.listreturnseatselected) {
                    this.hasreturnseat = true;
                }
                this.listDiChung = this._flightService.itemFlightCache.DICHUNGParam;
                if (this._flightService.itemFlightCache.DICHUNGParam) {
                    this.isDiChung = true;
                }
                if (mealtype) {
                    totalprice += mealtype.PriceAvgPlusOTA;
                }
                else if (this._flightService.itemFlightCache.HotelCityMealtypeSelected && this._flightService.itemFlightCache.itemsFlightCityHotel.length > 0) {
                    let check = false;
                    for (let index = 0; index < this._flightService.itemFlightCache.itemsFlightCityHotel.length; index++) {
                        const element = this._flightService.itemFlightCache.itemsFlightCityHotel[index];
                        if (element.checkaddhotel) {
                            check = true;
                        }
                    }
                    if (check) {
                        totalprice += this._flightService.itemFlightCache.HotelCityMealtypeSelected.PriceAvgPlusOTA;
                    }
                }
                if (this.promotionCode && this.discountpromo > 0) {
                    this._flightService.itemFlightCache.totalPriceBeforeApplyVoucher = totalprice + this.discountpromo;
                }
                if (totalprice * 1 < 0) {
                    totalprice = 0;
                }
                this.totalPriceDisplay = this.gf.convertNumberToString(totalprice);
                this._flightService.itemFlightCache.totalPrice = totalprice;
                this._flightService.itemFlightCache.totalPriceDisplay = this.totalPriceDisplay;
            }
        });
    }
    getSeatMap(id) {
        var se = this;
        let departairlines = se._flightService.itemFlightCache.departFlight.airline;
        let returnairlines = se._flightService.itemFlightCache.returnFlight ? se._flightService.itemFlightCache.returnFlight.airline : "";
        if (departairlines == returnairlines || !se._flightService.objSearch.roundTrip) {
            let urlSeatMap = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId=" + id + "&airline=" + departairlines;
            se.getSeatMaps(urlSeatMap, departairlines, 3);
        }
        else {
            let urlSeatMapDepart = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId=" + id + "&airline=" + departairlines;
            se.getSeatMaps(urlSeatMapDepart, departairlines, 1);
            let urlSeatMapReturn = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId=" + id + "&airline=" + returnairlines;
            se.getSeatMaps(urlSeatMapReturn, returnairlines, 2);
        }
    }
    getSeatMaps(url, airlineCode, indexdepart) {
        var se = this;
        var options = {
            method: 'GET',
            url: url,
            timeout: 180000, maxAttempts: 5, retryDelay: 20000,
            headers: {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
            let objError = {
                page: "flightsearchresult",
                func: "selectTicket",
                message: response.statusMessage,
                content: response.body,
                type: "warning",
                param: JSON.stringify(options)
            };
            if (error) {
                error.page = "flightsearchresult";
                error.func = "selectTicket";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                se._flightService.itemFlightCache.jsonSeats = jsondata;
                if (airlineCode == "BambooAirways") {
                    if (jsondata.departSeats && jsondata.departSeats.length > 0) {
                        se.hasdepartseat = true;
                        se.allowchoiceseat = true;
                        let data = jsondata.departSeats[0];
                        let listSeatNameLeft = [], listSeatNameRight = [], listSeatNormal = [];
                        let listrows = [];
                        let listSeatName = data.deckDetails.cabinDetails.internalSeatConfigurationList;
                        if (data && data.deckDetails && data.deckDetails.cabinDetails) {
                            se._flightService.itemFlightCache.departSeats = data;
                            if (data.deckDetails.cabinDetails.compartmentDetails && data.deckDetails.cabinDetails.compartmentDetails.length > 0) {
                                if (data.smtCode.indexOf('787') != -1) {
                                    for (let index = 0; index < data.deckDetails.cabinDetails.compartmentDetails.length; index++) {
                                        let elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[index];
                                        let compartmentdetail = elementCompartmentDetails;
                                        for (let index = 0; index < compartmentdetail.rows.length; index++) {
                                            let itemLeft = [], itemRight = [], itemnormal = [], rowseat = compartmentdetail.rows[index];
                                            for (let index = 0; index < elementCompartmentDetails.seatConfigurationMap.length; index++) {
                                                if (elementCompartmentDetails.seatConfigurationMap[index] == -1) {
                                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                                    itemnormal.push(fakeitem);
                                                }
                                                else {
                                                    let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                                    const element = rowseat.seatOptions[idx];
                                                    element.show = true;
                                                    element.amount = element.seatAssignMentFee.amount;
                                                    element.netPrice = element.seatAssignMentFee.netPrice;
                                                    element.name = element.seatNumber;
                                                    element.type = 1;
                                                    if (element.seatQualifiers.seatFront) {
                                                        element.type = 2;
                                                    }
                                                    if (element.seatQualifiers.emergencyExit) {
                                                        element.type = 3;
                                                    }
                                                    if (element.controlAttribute != "Available") {
                                                        if (!element.seatQualifiers.emergencyExit) {
                                                            element.type = 5;
                                                        }
                                                    }
                                                    itemnormal.push(element);
                                                }
                                            }
                                            let itemnm = { itemsNormal: itemnormal, row: rowseat.rowIndex };
                                            listrows.push(itemnm);
                                        }
                                    }
                                }
                                else {
                                    for (let index = 0; index < data.deckDetails.cabinDetails.compartmentDetails.length; index++) {
                                        const elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[index];
                                        let seatdetail = elementCompartmentDetails.seatConfigurationList;
                                        let listSeatName = elementCompartmentDetails.internalSeatConfigurationList;
                                        let dataSeat = elementCompartmentDetails.seatDetails;
                                        let numofcolumnleft = Math.floor(elementCompartmentDetails.seatConfigurationMap.length / 2), numofcolumnright = Math.ceil(elementCompartmentDetails.seatConfigurationMap.length / 2);
                                        let firstleftidx = elementCompartmentDetails.seatConfigurationMap[0];
                                        let endrightidx = elementCompartmentDetails.seatConfigurationMap[elementCompartmentDetails.seatConfigurationMap.length - 1];
                                        if (listSeatName && listSeatName.length > 0) {
                                            for (let index = 0; index < numofcolumnleft; index++) {
                                                const element = listSeatName[index];
                                                listSeatNameLeft.push(element);
                                            }
                                            for (let index = numofcolumnright; index < listSeatName.length; index++) {
                                                const element = listSeatName[index];
                                                listSeatNameRight.push(element);
                                            }
                                        }
                                        let compartmentdetail = elementCompartmentDetails;
                                        for (let index = 0; index < compartmentdetail.rows.length; index++) {
                                            let itemLeft = [], itemRight = [], itemnormal, rowseat = compartmentdetail.rows[index];
                                            for (let index = 0; index < numofcolumnleft; index++) {
                                                if (elementCompartmentDetails.seatConfigurationMap[index] == -1) {
                                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                                    itemLeft.push(fakeitem);
                                                }
                                                else {
                                                    let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                                    const element = rowseat.seatOptions[idx];
                                                    element.show = true;
                                                    element.amount = element.seatAssignMentFee.amount;
                                                    element.netPrice = element.seatAssignMentFee.netPrice;
                                                    element.name = element.seatNumber;
                                                    element.type = 1;
                                                    if (element.seatQualifiers.seatFront) {
                                                        element.type = 2;
                                                    }
                                                    if (element.seatQualifiers.emergencyExit) {
                                                        element.type = 3;
                                                    }
                                                    if (element.controlAttribute != "Available") {
                                                        if (!element.seatQualifiers.emergencyExit) {
                                                            element.type = 5;
                                                        }
                                                    }
                                                    itemLeft.push(element);
                                                }
                                            }
                                            for (let index = numofcolumnright; index < elementCompartmentDetails.seatConfigurationMap.length; index++) {
                                                if (elementCompartmentDetails.seatConfigurationMap[index] == -1) {
                                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                                    itemRight.push(fakeitem);
                                                }
                                                else {
                                                    let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                                    const element = rowseat.seatOptions[idx];
                                                    element.show = true;
                                                    element.amount = element.seatAssignMentFee.amount;
                                                    element.netPrice = element.seatAssignMentFee.netPrice;
                                                    element.name = element.seatNumber;
                                                    element.type = 1;
                                                    if (element.seatQualifiers.seatFront) {
                                                        element.type = 2;
                                                    }
                                                    if (element.seatQualifiers.emergencyExit) {
                                                        element.type = 3;
                                                    }
                                                    if (element.controlAttribute != "Available") {
                                                        if (!element.seatQualifiers.emergencyExit) {
                                                            element.type = 5;
                                                        }
                                                    }
                                                    itemRight.push(element);
                                                }
                                            }
                                            itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: rowseat.rowIndex };
                                            listSeatNormal.push(itemnormal);
                                        }
                                    }
                                }
                            }
                        }
                        if (indexdepart == 1 || indexdepart == 3) {
                            if (data.smtCode.indexOf('787') != -1) {
                                se._flightService.itemFlightCache.listSeatName = listSeatName;
                                se._flightService.itemFlightCache.listSeatNormal = listrows;
                                se._flightService.itemFlightCache.isnewmodelseat = true;
                            }
                            else {
                                se._flightService.itemFlightCache.isnewmodelseat = false;
                                se._flightService.itemFlightCache.listSeatNameLeft = listSeatNameLeft;
                                se._flightService.itemFlightCache.listSeatNameRight = listSeatNameRight;
                                se._flightService.itemFlightCache.listSeatNormal = listSeatNormal;
                            }
                        }
                    }
                    else {
                        se.hasdepartseat = false;
                    }
                    if (jsondata.returnSeats && jsondata.returnSeats.length > 0) {
                        se.hasreturnseat = true;
                        se.allowchoiceseat = true;
                        let data = jsondata.returnSeats[0];
                        let listReturnSeatNameLeft = [], listReturnSeatNameRight = [], listReturnSeatNormal = [];
                        let listrows = [];
                        let listSeatName = data.deckDetails.cabinDetails.internalSeatConfigurationList;
                        if (data && data.deckDetails && data.deckDetails.cabinDetails) {
                            se._flightService.itemFlightCache.returnSeats = data;
                            if (data.deckDetails.cabinDetails.compartmentDetails && data.deckDetails.cabinDetails.compartmentDetails.length > 0) {
                                let elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[0];
                                if (data.smtCode.indexOf('787') != -1) {
                                    for (let index = 0; index < data.deckDetails.cabinDetails.compartmentDetails.length; index++) {
                                        let elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[index];
                                        let compartmentdetail = elementCompartmentDetails;
                                        for (let index = 0; index < compartmentdetail.rows.length; index++) {
                                            let itemLeft = [], itemRight = [], itemnormal = [], rowseat = compartmentdetail.rows[index];
                                            for (let index = 0; index < elementCompartmentDetails.seatConfigurationMap.length; index++) {
                                                if (elementCompartmentDetails.seatConfigurationMap[index] == -1) {
                                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                                    itemnormal.push(fakeitem);
                                                }
                                                else {
                                                    let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                                    const element = rowseat.seatOptions[idx];
                                                    element.show = true;
                                                    element.amount = element.seatAssignMentFee.amount;
                                                    element.netPrice = element.seatAssignMentFee.netPrice;
                                                    element.name = element.seatNumber;
                                                    element.type = 1;
                                                    if (element.seatQualifiers.seatFront) {
                                                        element.type = 2;
                                                    }
                                                    if (element.seatQualifiers.emergencyExit) {
                                                        element.type = 3;
                                                    }
                                                    if (element.controlAttribute != "Available") {
                                                        if (!element.seatQualifiers.emergencyExit) {
                                                            element.type = 5;
                                                        }
                                                    }
                                                    itemnormal.push(element);
                                                }
                                            }
                                            let itemnm = { itemsNormal: itemnormal, row: rowseat.rowIndex };
                                            listrows.push(itemnm);
                                        }
                                    }
                                }
                                else {
                                    for (let index = 0; index < data.deckDetails.cabinDetails.compartmentDetails.length; index++) {
                                        const elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[index];
                                        let seatdetail = elementCompartmentDetails.seatConfigurationList;
                                        let listSeatName = elementCompartmentDetails.internalSeatConfigurationList;
                                        let dataSeat = elementCompartmentDetails.seatDetails;
                                        let numofcolumnleft = Math.floor(elementCompartmentDetails.seatConfigurationMap.length / 2), numofcolumnright = Math.ceil(elementCompartmentDetails.seatConfigurationMap.length / 2);
                                        let firstleftidx = elementCompartmentDetails.seatConfigurationMap[0];
                                        let endrightidx = elementCompartmentDetails.seatConfigurationMap[elementCompartmentDetails.seatConfigurationMap.length - 1];
                                        if (listSeatName && listSeatName.length > 0) {
                                            for (let index = 0; index < numofcolumnleft; index++) {
                                                const element = listSeatName[index];
                                                listReturnSeatNameLeft.push(element);
                                            }
                                            for (let index = numofcolumnright; index < listSeatName.length; index++) {
                                                const element = listSeatName[index];
                                                listReturnSeatNameRight.push(element);
                                            }
                                        }
                                        let compartmentdetail = elementCompartmentDetails;
                                        for (let index = 0; index < compartmentdetail.rows.length; index++) {
                                            let itemLeft = [], itemRight = [], itemnormal, rowseat = compartmentdetail.rows[index];
                                            for (let index = 0; index < numofcolumnleft; index++) {
                                                if (elementCompartmentDetails.seatConfigurationMap[index] == -1) {
                                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                                    itemLeft.push(fakeitem);
                                                }
                                                else {
                                                    let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                                    const element = rowseat.seatOptions[idx];
                                                    element.show = true;
                                                    element.amount = element.seatAssignMentFee.amount;
                                                    element.name = element.seatNumber;
                                                    element.type = 1;
                                                    if (element.seatQualifiers.seatFront) {
                                                        element.type = 2;
                                                    }
                                                    if (element.seatQualifiers.emergencyExit) {
                                                        element.type = 3;
                                                    }
                                                    if (element.controlAttribute != "Available") {
                                                        if (!element.seatQualifiers.emergencyExit) {
                                                            element.type = 5;
                                                        }
                                                    }
                                                    itemLeft.push(element);
                                                }
                                            }
                                            for (let index = numofcolumnright; index < elementCompartmentDetails.seatConfigurationMap.length; index++) {
                                                if (elementCompartmentDetails.seatConfigurationMap[index] == -1) {
                                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                                    itemRight.push(fakeitem);
                                                }
                                                else {
                                                    let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                                    const element = rowseat.seatOptions[idx];
                                                    element.show = true;
                                                    element.amount = element.seatAssignMentFee.amount;
                                                    element.netPrice = element.seatAssignMentFee.netPrice;
                                                    element.name = element.seatNumber;
                                                    element.type = 1;
                                                    if (element.seatQualifiers.seatFront) {
                                                        element.type = 2;
                                                    }
                                                    if (element.seatQualifiers.emergencyExit) {
                                                        element.type = 3;
                                                    }
                                                    if (element.controlAttribute != "Available") {
                                                        if (!element.seatQualifiers.emergencyExit) {
                                                            element.type = 5;
                                                        }
                                                    }
                                                    if (element.seatQualifiers.emergencyExit) {
                                                        element.type = 5;
                                                    }
                                                    itemRight.push(element);
                                                }
                                            }
                                            itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: rowseat.rowIndex };
                                            listReturnSeatNormal.push(itemnormal);
                                        }
                                    }
                                }
                            }
                        }
                        if (indexdepart == 2 || indexdepart == 3) {
                            if (data.smtCode.indexOf('787') != -1) {
                                se._flightService.itemFlightCache.listReturnSeatName = listSeatName;
                                se._flightService.itemFlightCache.listReturnSeatNormal = listrows;
                                se._flightService.itemFlightCache.isnewmodelreturnseat = true;
                            }
                            else {
                                se._flightService.itemFlightCache.isnewmodelreturnseat = false;
                                se._flightService.itemFlightCache.listReturnSeatNameLeft = listReturnSeatNameLeft;
                                se._flightService.itemFlightCache.listReturnSeatNameRight = listReturnSeatNameRight;
                                se._flightService.itemFlightCache.listReturnSeatNormal = listReturnSeatNormal;
                            }
                        }
                    }
                    else {
                        se.hasreturnseat = false;
                    }
                }
                else if (airlineCode == "VietnamAirlines") {
                    if (jsondata.departSeats && jsondata.departSeats.length > 0) {
                        se.hasdepartseat = true;
                        se.allowchoiceseat = true;
                        let data = jsondata.departSeats[0];
                        let listSeatNameLeft = [], listSeatNameRight = [], listSeatNormal = [], itemLeft = [], itemRight = [], itemnormal;
                        let itemfirstrow = data.cabin.row[0];
                        let numofcolumnleft = itemfirstrow.seat.length / 2, numofcolumnright = itemfirstrow.seat.length / 2;
                        let listrows = [];
                        let listSeatName = [];
                        for (let index = 0; index < data.cabin.column.length; index++) {
                            let colname = data.cabin.column[index].column1;
                            listSeatName.push(colname);
                        }
                        if (data.equipment.indexOf('787') != -1 || data.equipment.indexOf('350') != -1) {
                            for (let index = 0; index < data.cabin.row.length; index++) {
                                let cabinRows = data.cabin.row[index];
                                let cabinRowDetail = cabinRows;
                                let itemLeft = [], itemRight = [], itemnormal = [], rowseat = cabinRowDetail.seat;
                                if (rowseat && rowseat.length == 0) {
                                    continue;
                                }
                                for (let index = 0; index < data.cabin.column.length; index++) {
                                    if (index == 3 || index == 6) {
                                        if (!(data.equipment.indexOf('350') != -1 && data.cabin.column.length == 4)) {
                                            let fakeitem = { name: 'noname', type: -1, show: false };
                                            itemnormal.push(fakeitem);
                                        }
                                    }
                                    const element = cabinRowDetail.seat[index];
                                    if (!element) {
                                        continue;
                                    }
                                    element.show = true;
                                    element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                                    element.name = cabinRowDetail.rowNumber + element.number;
                                    element.type = 1;
                                    element.row = cabinRowDetail.rowNumber;
                                    if (se.checkSeatTypeVNA(element.facilities) == 'front') {
                                        element.type = 2;
                                    }
                                    if (element.exitRowInd == 'true') {
                                        element.type = 3;
                                    }
                                    if (element.occupiedInd == 'true') {
                                        element.type = 6;
                                    }
                                    if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {
                                        element.type = 5;
                                    }
                                    itemnormal.push(element);
                                }
                                let itemnm = { itemsNormal: itemnormal, row: cabinRowDetail.rowNumber };
                                listrows.push(itemnm);
                            }
                        }
                        else {
                            for (let index = 0; index < numofcolumnleft; index++) {
                                let seatname = itemfirstrow.seat[index].number;
                                listSeatNameLeft.push(seatname);
                            }
                            for (let index = numofcolumnleft; index < itemfirstrow.seat.length; index++) {
                                let seatname = itemfirstrow.seat[index].number;
                                listSeatNameRight.push(seatname);
                            }
                            data.cabin.row.sort((a, b) => {
                                a.rowNumber < b.rowNumber ? -1 : 1;
                            });
                            for (let index = 0; index < data.cabin.row.length; index++) {
                                let itemLeft = [], itemRight = [], itemnormal;
                                const elementRow = data.cabin.row[index];
                                if (elementRow.seat.length == 4) {
                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                    itemLeft.push(fakeitem);
                                }
                                numofcolumnleft = elementRow.seat.length / 2;
                                numofcolumnright = elementRow.seat.length / 2;
                                for (let index = 0; index < numofcolumnleft; index++) {
                                    const element = elementRow.seat[index];
                                    element.show = true;
                                    element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                                    element.name = elementRow.rowNumber + element.number;
                                    element.type = 1;
                                    if (se.checkSeatTypeVNA(element.facilities) == 'front') {
                                        element.type = 2;
                                    }
                                    if (element.exitRowInd == 'true') {
                                        element.type = 3;
                                    }
                                    if (element.occupiedInd == 'true') {
                                        element.type = 6;
                                    }
                                    if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {
                                        element.type = 5;
                                    }
                                    itemLeft.push(element);
                                }
                                for (let index = numofcolumnright; index < elementRow.seat.length; index++) {
                                    const element = elementRow.seat[index];
                                    if (!element) {
                                        continue;
                                    }
                                    element.show = true;
                                    element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                                    element.name = elementRow.rowNumber + element.number;
                                    element.type = 1;
                                    if (se.checkSeatTypeVNA(element.facilities) == 'front') {
                                        element.type = 2;
                                    }
                                    if (element.exitRowInd == 'true') {
                                        element.type = 3;
                                    }
                                    if (element.occupiedInd == 'true') {
                                        element.type = 6;
                                    }
                                    if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {
                                        element.type = 5;
                                    }
                                    itemRight.push(element);
                                }
                                if (elementRow.seat.length == 4 && itemRight.length == 2) {
                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                    itemRight.push(fakeitem);
                                }
                                itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: elementRow.rowNumber };
                                listSeatNormal.push(itemnormal);
                            }
                        }
                        if (indexdepart == 1 || indexdepart == 3) {
                            if (data.equipment.indexOf('787') != -1 || data.equipment.indexOf('350') != -1) {
                                se._flightService.itemFlightCache.listSeatName = listSeatName;
                                se._flightService.itemFlightCache.listSeatNormal = listrows;
                                se._flightService.itemFlightCache.isnewmodelseat = true;
                            }
                            else {
                                se._flightService.itemFlightCache.isnewmodelseat = false;
                                se._flightService.itemFlightCache.listSeatNameLeft = listSeatNameLeft;
                                se._flightService.itemFlightCache.listSeatNameRight = listSeatNameRight;
                                se._flightService.itemFlightCache.listSeatNormal = listSeatNormal;
                            }
                        }
                    }
                    else {
                        se.hasdepartseat = false;
                    }
                    if (jsondata.returnSeats && jsondata.returnSeats.length > 0) {
                        se.hasreturnseat = true;
                        se.allowchoiceseat = true;
                        let data = jsondata.returnSeats[0];
                        let listReturnSeatNameLeft = [], listReturnSeatNameRight = [], listReturnSeatNormal = [], itemnormal;
                        let itemfirstrow = data.cabin.row[0];
                        let numofcolumnleft = itemfirstrow.seat.length / 2, numofcolumnright = itemfirstrow.seat.length / 2;
                        let listrows = [];
                        let listSeatName = [];
                        if (data.equipment.indexOf('787') != -1 || data.equipment.indexOf('350') != -1) {
                            for (let index = 0; index < data.cabin.column.length; index++) {
                                let colname = data.cabin.column[index].column1;
                                listSeatName.push(colname);
                            }
                            for (let index = 0; index < data.cabin.row.length; index++) {
                                let cabinRows = data.cabin.row[index];
                                let cabinRowDetail = cabinRows;
                                let itemLeft = [], itemRight = [], itemnormal = [], rowseat = cabinRowDetail.seat;
                                if (rowseat && rowseat.length == 0) {
                                    continue;
                                }
                                for (let index = 0; index < data.cabin.column.length; index++) {
                                    if (index == 3 || index == 6) {
                                        if (!(data.equipment.indexOf('350') != -1 && data.cabin.column.length == 4)) {
                                            let fakeitem = { name: 'noname', type: -1, show: false };
                                            itemnormal.push(fakeitem);
                                        }
                                    }
                                    const element = cabinRowDetail.seat[index];
                                    if (!element) {
                                        continue;
                                    }
                                    element.show = true;
                                    element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                                    element.name = cabinRowDetail.rowNumber + element.number;
                                    element.type = 1;
                                    element.row = cabinRowDetail.rowNumber;
                                    if (se.checkSeatTypeVNA(element.facilities) == 'front') {
                                        element.type = 2;
                                    }
                                    if (element.exitRowInd == 'true') {
                                        element.type = 3;
                                    }
                                    if (element.occupiedInd == 'true') {
                                        element.type = 6;
                                    }
                                    if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {
                                        element.type = 5;
                                    }
                                    itemnormal.push(element);
                                }
                                let itemnm = { itemsNormal: itemnormal, row: cabinRowDetail.rowNumber };
                                listrows.push(itemnm);
                            }
                        }
                        else {
                            for (let index = 0; index < numofcolumnleft; index++) {
                                let seatname = itemfirstrow.seat[index].number;
                                listReturnSeatNameLeft.push(seatname);
                            }
                            for (let index = numofcolumnleft; index < itemfirstrow.seat.length; index++) {
                                let seatname = itemfirstrow.seat[index].number;
                                listReturnSeatNameRight.push(seatname);
                            }
                            data.cabin.row.sort((a, b) => {
                                a.rowNumber < b.rowNumber ? -1 : 1;
                            });
                            for (let index = 0; index < data.cabin.row.length; index++) {
                                let itemLeft = [], itemRight = [], itemnormal;
                                const elementRow = data.cabin.row[index];
                                if (elementRow.seat && elementRow.seat.length == 0) {
                                    continue;
                                }
                                if (elementRow.seat.length == 4) {
                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                    itemLeft.push(fakeitem);
                                }
                                numofcolumnleft = elementRow.seat.length / 2;
                                numofcolumnright = elementRow.seat.length / 2;
                                for (let index = 0; index < numofcolumnleft; index++) {
                                    const element = elementRow.seat[index];
                                    element.show = true;
                                    element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                                    element.name = elementRow.rowNumber + element.number;
                                    element.type = 1;
                                    if (se.checkSeatTypeVNA(element.facilities) == 'front') {
                                        element.type = 2;
                                    }
                                    if (element.exitRowInd == 'true') {
                                        element.type = 3;
                                    }
                                    if (element.occupiedInd == 'true') {
                                        element.type = 6;
                                    }
                                    if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {
                                        element.type = 5;
                                    }
                                    itemLeft.push(element);
                                }
                                for (let index = numofcolumnright; index < elementRow.seat.length; index++) {
                                    const element = elementRow.seat[index];
                                    if (!element) {
                                        continue;
                                    }
                                    element.show = true;
                                    element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                                    element.name = elementRow.rowNumber + element.number;
                                    element.type = 1;
                                    if (se.checkSeatTypeVNA(element.facilities) == 'front') {
                                        element.type = 2;
                                    }
                                    if (element.exitRowInd == 'true') {
                                        element.type = 3;
                                    }
                                    if (element.occupiedInd == 'true') {
                                        element.type = 6;
                                    }
                                    if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {
                                        element.type = 5;
                                    }
                                    itemRight.push(element);
                                }
                                if (elementRow.seat.length == 4 && itemRight.length == 2) {
                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                    itemRight.push(fakeitem);
                                }
                                itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: elementRow.rowNumber };
                                listReturnSeatNormal.push(itemnormal);
                            }
                        }
                        if (indexdepart == 2 || indexdepart == 3) {
                            if (data.equipment.indexOf('787') != -1 || data.equipment.indexOf('350') != -1) {
                                se._flightService.itemFlightCache.listReturnSeatName = listSeatName;
                                se._flightService.itemFlightCache.listReturnSeatNormal = listrows;
                                se._flightService.itemFlightCache.isnewmodelreturnseat = true;
                            }
                            else {
                                se._flightService.itemFlightCache.listReturnSeatNameLeft = listReturnSeatNameLeft;
                                se._flightService.itemFlightCache.listReturnSeatNameRight = listReturnSeatNameRight;
                                se._flightService.itemFlightCache.listReturnSeatNormal = listReturnSeatNormal;
                            }
                        }
                    }
                    else {
                        se.hasreturnseat = false;
                    }
                }
                else {
                    if (jsondata.departSeats && jsondata.departSeats.length > 0) {
                        se.hasdepartseat = true;
                        se.allowchoiceseat = true;
                        let data = jsondata.departSeats[0];
                        let listSeatNameLeft = [], listSeatNameRight = [], listSeatNormal = [], itemLeft = [], itemRight = [], itemnormal;
                        let itemfirstrow = data.rows[0];
                        let numofcolumnleft = itemfirstrow.seatOptions.length / 2, numofcolumnright = itemfirstrow.seatOptions.length / 2;
                        let maxseatlen = Math.max(...data.rows.map((item) => { return item.seatOptions.length; }));
                        let listrows = [];
                        let listSeatName = [];
                        if (maxseatlen == 9) {
                            for (let index = 0; index < data.rows.length; index++) {
                                let itemnormal = [];
                                const elementRow = data.rows[index];
                                listSeatName = ['A', 'B', 'C', '-1', 'D', 'F', 'G', '-1', 'H', 'J', 'K'];
                                for (let indexCol = 0; indexCol < listSeatName.length; indexCol++) {
                                    const elementSeatName = listSeatName[indexCol];
                                    let elementseat = elementRow.seatOptions.filter(c => c.seatMapCell.seatIdentifier == elementSeatName);
                                    if (elementseat && elementseat.length > 0) {
                                        let element = elementseat[0];
                                        element.show = true;
                                        element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                                        element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                                        element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                                        element.type = 1;
                                        if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {
                                            element.type = 2;
                                        }
                                        if (element.seatMapCell.seatQualifiers.emergencyExit) {
                                            element.type = 3;
                                        }
                                        if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                                            element.type = 6;
                                        }
                                        if (!element.selectionValidity.available) {
                                            if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                                                element.type = 5;
                                            }
                                        }
                                        itemnormal.push(element);
                                    }
                                    else {
                                        let fakeitem = { name: 'noname', type: -2, show: false };
                                        itemnormal.push(fakeitem);
                                    }
                                }
                                let itemnm = { itemsNormal: itemnormal, row: elementRow.rowNumber };
                                listrows.push(itemnm);
                            }
                        }
                        else {
                            for (let index = 0; index < numofcolumnleft; index++) {
                                let seatname = itemfirstrow.seatOptions[index].seatMapCell.seatIdentifier;
                                listSeatNameLeft.push(seatname);
                            }
                            for (let index = numofcolumnleft; index < itemfirstrow.seatOptions.length; index++) {
                                let seatname = itemfirstrow.seatOptions[index].seatMapCell.seatIdentifier;
                                listSeatNameRight.push(seatname);
                            }
                            data.rows.sort((a, b) => {
                                a.rowNumber < b.rowNumber ? -1 : 1;
                            });
                            for (let index = 0; index < data.rows.length; index++) {
                                let itemLeft = [], itemRight = [], itemnormal;
                                const elementRow = data.rows[index];
                                if (elementRow.seatOptions.length == 4) {
                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                    itemLeft.push(fakeitem);
                                }
                                numofcolumnleft = elementRow.seatOptions.length / 2;
                                numofcolumnright = elementRow.seatOptions.length / 2;
                                for (let index = 0; index < numofcolumnleft; index++) {
                                    const element = elementRow.seatOptions[index];
                                    element.show = true;
                                    element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                                    element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                                    element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                                    element.type = 1;
                                    if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {
                                        element.type = 2;
                                    }
                                    if (element.seatMapCell.seatQualifiers.emergencyExit) {
                                        element.type = 3;
                                    }
                                    if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                                        element.type = 6;
                                    }
                                    if (!element.selectionValidity.available) {
                                        if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                                            element.type = 5;
                                        }
                                    }
                                    itemLeft.push(element);
                                }
                                for (let index = numofcolumnright; index < elementRow.seatOptions.length; index++) {
                                    const element = elementRow.seatOptions[index];
                                    element.show = true;
                                    element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                                    element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                                    element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                                    element.type = 1;
                                    if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {
                                        element.type = 2;
                                    }
                                    if (element.seatMapCell.seatQualifiers.emergencyExit) {
                                        element.type = 3;
                                    }
                                    if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                                        element.type = 6;
                                    }
                                    if (!element.selectionValidity.available) {
                                        if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                                            element.type = 5;
                                        }
                                    }
                                    itemRight.push(element);
                                }
                                if (elementRow.seatOptions.length == 4 && itemRight.length == 2) {
                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                    itemRight.push(fakeitem);
                                }
                                itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: elementRow.rowNumber };
                                listSeatNormal.push(itemnormal);
                            }
                        }
                        if (indexdepart == 1 || indexdepart == 3) {
                            if (maxseatlen == 9) {
                                se._flightService.itemFlightCache.listSeatName = listSeatName;
                                se._flightService.itemFlightCache.listSeatNormal = listrows;
                                se._flightService.itemFlightCache.isnewmodelseat = true;
                            }
                            else {
                                se._flightService.itemFlightCache.listSeatNameLeft = listSeatNameLeft;
                                se._flightService.itemFlightCache.listSeatNameRight = listSeatNameRight;
                                se._flightService.itemFlightCache.listSeatNormal = listSeatNormal;
                            }
                        }
                    }
                    else {
                        se.hasdepartseat = false;
                    }
                    if (jsondata.returnSeats && jsondata.returnSeats.length > 0) {
                        se.hasreturnseat = true;
                        se.allowchoiceseat = true;
                        let data = jsondata.returnSeats[0];
                        let listReturnSeatNameLeft = [], listReturnSeatNameRight = [], listReturnSeatNormal = [], itemnormal;
                        let listSeatNameLeft = [], listSeatNameRight = [], listSeatNormal = [], itemLeft = [], itemRight = [];
                        let itemfirstrow = data.rows[0];
                        let numofcolumnleft = itemfirstrow.seatOptions.length / 2, numofcolumnright = itemfirstrow.seatOptions.length / 2;
                        let maxseatlen = Math.max(...data.rows.map((item) => { return item.seatOptions.length; }));
                        let listrows = [];
                        let listSeatName = [];
                        if (maxseatlen == 9) {
                            for (let index = 0; index < data.rows.length; index++) {
                                let itemnormal = [];
                                const elementRow = data.rows[index];
                                listSeatName = ['A', 'B', 'C', '-1', 'D', 'F', 'G', '-1', 'H', 'J', 'K'];
                                for (let indexCol = 0; indexCol < listSeatName.length; indexCol++) {
                                    const elementSeatName = listSeatName[indexCol];
                                    let elementseat = elementRow.seatOptions.filter(c => c.seatMapCell.seatIdentifier == elementSeatName);
                                    if (elementseat && elementseat.length > 0) {
                                        let element = elementseat[0];
                                        element.show = true;
                                        element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                                        element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                                        element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                                        element.type = 1;
                                        if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {
                                            element.type = 2;
                                        }
                                        if (element.seatMapCell.seatQualifiers.emergencyExit) {
                                            element.type = 3;
                                        }
                                        if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                                            element.type = 6;
                                        }
                                        if (!element.selectionValidity.available) {
                                            if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                                                element.type = 5;
                                            }
                                        }
                                        itemnormal.push(element);
                                    }
                                    else {
                                        let fakeitem = { name: 'noname', type: -2, show: false };
                                        itemnormal.push(fakeitem);
                                    }
                                }
                                let itemnm = { itemsNormal: itemnormal, row: elementRow.rowNumber };
                                listrows.push(itemnm);
                            }
                        }
                        else {
                            for (let index = 0; index < numofcolumnleft; index++) {
                                let seatname = itemfirstrow.seatOptions[index].seatMapCell.seatIdentifier;
                                listReturnSeatNameLeft.push(seatname);
                            }
                            for (let index = numofcolumnleft; index < itemfirstrow.seatOptions.length; index++) {
                                let seatname = itemfirstrow.seatOptions[index].seatMapCell.seatIdentifier;
                                listReturnSeatNameRight.push(seatname);
                            }
                            data.rows.sort((a, b) => {
                                a.rowNumber < b.rowNumber ? -1 : 1;
                            });
                            for (let index = 0; index < data.rows.length; index++) {
                                let itemLeft = [], itemRight = [], itemnormal;
                                const elementRow = data.rows[index];
                                if (elementRow.seatOptions.length == 4) {
                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                    itemLeft.push(fakeitem);
                                }
                                numofcolumnleft = elementRow.seatOptions.length / 2;
                                numofcolumnright = elementRow.seatOptions.length / 2;
                                for (let index = 0; index < numofcolumnleft; index++) {
                                    const element = elementRow.seatOptions[index];
                                    element.show = true;
                                    element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                                    element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                                    element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                                    element.type = 1;
                                    if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {
                                        element.type = 2;
                                    }
                                    if (element.seatMapCell.seatQualifiers.emergencyExit) {
                                        element.type = 3;
                                    }
                                    if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                                        element.type = 6;
                                    }
                                    if (!element.selectionValidity.available) {
                                        if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                                            element.type = 5;
                                        }
                                    }
                                    itemLeft.push(element);
                                }
                                for (let index = numofcolumnright; index < elementRow.seatOptions.length; index++) {
                                    const element = elementRow.seatOptions[index];
                                    element.show = true;
                                    element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                                    element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                                    element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                                    element.type = 1;
                                    if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {
                                        element.type = 2;
                                    }
                                    if (element.seatMapCell.seatQualifiers.emergencyExit) {
                                        element.type = 3;
                                    }
                                    if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                                        element.type = 6;
                                    }
                                    if (!element.selectionValidity.available) {
                                        if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                                            element.type = 5;
                                        }
                                    }
                                    itemRight.push(element);
                                }
                                if (elementRow.seatOptions.length == 4 && itemRight.length == 2) {
                                    let fakeitem = { name: 'noname', type: -1, show: false };
                                    itemRight.push(fakeitem);
                                }
                                itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: elementRow.rowNumber };
                                listReturnSeatNormal.push(itemnormal);
                            }
                        }
                        if (indexdepart == 2 || indexdepart == 3) {
                            if (maxseatlen == 9) {
                                se._flightService.itemFlightCache.listReturnSeatName = listSeatName;
                                se._flightService.itemFlightCache.listReturnSeatNormal = listrows;
                                se._flightService.itemFlightCache.isnewmodelreturnseat = true;
                            }
                            else {
                                se._flightService.itemFlightCache.listReturnSeatNameLeft = listReturnSeatNameLeft;
                                se._flightService.itemFlightCache.listReturnSeatNameRight = listReturnSeatNameRight;
                                se._flightService.itemFlightCache.listReturnSeatNormal = listReturnSeatNormal;
                            }
                        }
                    }
                    else {
                        se.hasreturnseat = false;
                    }
                }
            }
        });
    }
    goback() {
        this._flightService.itemFlightCache.jsonSeats = null;
        this._flightService.itemFlightCache.listdepartseatselected = "";
        this._flightService.itemFlightCache.listreturnseatselected = "";
        this._flightService.itemFlightCache.departLuggage = [];
        this._flightService.itemFlightCache.returnLuggage = [];
        this._flightService.itemFlightCache.hasChoiceLuggage = false;
        this._flightService.itemFlightCache.listSeatNormal = [];
        this._flightService.itemFlightCache.listReturnSeatNormal = [];
        this._flightService.itemFlightCache.departConditionInfo = null;
        this._flightService.itemFlightCache.returnConditionInfo = null;
        this._flightService.itemFlightCache.departSeatChoiceAmout = 0;
        this._flightService.itemFlightCache.returnSeatChoiceAmout = 0;
        this.hasdepartluggage = false;
        this.hasreturnluggage = false;
        this.showbuttonluggage = true;
        this.hasreturnseat = true;
        this.hasdepartseat = true;
        this._flightService.itemFlightCache.isnewmodelseat = false;
        this._flightService.itemFlightCache.isnewmodelreturnseat = false;
        this._flightService.itemFlightCache.backtochoiceseat = false;
        this._flightService.itemFlightCache.hasvoucher = false;
        this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
        this._voucherService.selectVoucher = null;
        this.checkEmptyHotelCity = false;
        this.navCtrl.navigateBack('/flightsearchresult');
    }
    buyLuggage() {
        this.navCtrl.navigateForward('/flightaddluggage');
    }
    buySeat() {
        this.navCtrl.navigateForward('/flightaddseat');
    }
    addMeal() {
        this.navCtrl.navigateForward('/flightaddmeal');
    }
    showPriceDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._flightService.itemFlightCache.promotionCode = this.promotionCode;
            this._flightService.itemFlightCache.discount = this.discountpromo;
            const modal = yield this.modalCtrl.create({
                component: _flightpricedetail_flightpricedetail_page__WEBPACK_IMPORTED_MODULE_12__["FlightpricedetailPage"],
            });
            modal.present();
        });
    }
    showAlertPromoCode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let msg = `Mã voucher ${se._flightService.itemFlightCache.hasvoucher} đang dùng cho đơn hàng ${se._flightService.itemFlightCache.pnr.resNo} Vui lòng chọn lại vé nếu quý khách muốn tiếp tục thay đổi`;
            let alert = yield se.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-choiceseat",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            alert.dismiss();
                            this.goback();
                        }
                    },
                    {
                        text: 'Hủy',
                        role: 'Cancel',
                        handler: () => {
                            se.promocode = se._flightService.itemFlightCache.hasvoucher;
                            se.promotionCode = se._flightService.itemFlightCache.hasvoucher;
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    confirm() {
        var se = this;
        if (!(se.loadHotelCityDone || (se._flightService.itemFlightCache.itemsFlightCityHotel && se._flightService.itemFlightCache.itemsFlightCityHotel.length > 0))) {
            se.gf.showToastWarning('Đang tải dữ liệu. Xin vui lòng đợi trong giây lát!');
            return;
        }
        if (se.checkEmptyHotelCity) {
            se.showAlertChoiceHotelCity();
            return;
        }
        if (se._voucherService.selectVoucher && se._voucherService.selectVoucher.claimed) {
            se._flightService.itemFlightCache.promotionCode = se._voucherService.selectVoucher.code;
            se._flightService.itemFlightCache.discount = se._voucherService.selectVoucher.rewardsItem.price;
        }
        else {
            se._flightService.itemFlightCache.promotionCode = se.promotionCode;
            se._flightService.itemFlightCache.discount = se.discountpromo;
        }
        if (se._flightService.itemFlightCache.backtochoiceseat) {
            if (!se.checkseat) {
                se.showAlertChoiceSeat();
            }
            else {
                se._flightService.itemFlightCache.backtochoiceseat = false;
                se.updatePassengerInfo().then((data) => {
                    if (!data.error) {
                        se._flightService.itemFlightCache.pnr = data;
                        if (se._flightService.itemFlightCache.totalPrice == 0) {
                            let itemcache = se._flightService.itemFlightCache;
                            itemcache.ischeckpayment = 0;
                            this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                                if (check) {
                                    var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + (itemcache.pnr.bookingCode ? itemcache.pnr.bookingCode : itemcache.pnr.resNo) + '&memberId=' + se.jti + '&rememberToken=&buyerPhone=' + itemcache.phone + '&version=2';
                                    se.gf.CreatePayoo(url).then((data) => {
                                        se.gf.hideLoading();
                                        if (data.success) {
                                            se._flightService.itemFlightCache.ischeckpayment = 1;
                                            se.navCtrl.navigateForward('flightpaymentdone/' + (se._flightService.itemFlightCache.pnr.bookingCode ? se._flightService.itemFlightCache.pnr.bookingCode : se._flightService.itemFlightCache.pnr.resNo) + '/' + moment__WEBPACK_IMPORTED_MODULE_8__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD') + '/' + moment__WEBPACK_IMPORTED_MODULE_8__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD'));
                                        }
                                        else {
                                            se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                                            se.gf.hideLoading();
                                        }
                                    });
                                }
                                else {
                                    se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                                    se.gf.hideLoading();
                                }
                            });
                        }
                        else {
                            se.gf.hideLoading();
                            se.navCtrl.navigateForward('/flightpaymentselect');
                        }
                    }
                    else {
                        se.gf.showToastWarning(data.error);
                        se.gf.hideLoading();
                    }
                });
            }
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
                            this.allowchoiceseat = false;
                            this.checkseat = true;
                            this.clearSeatChoice();
                            this.getSeatMap(this._flightService.itemFlightCache.reservationId);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showCondition() {
        var se = this;
        if (se._flightService.itemFlightCache.backtochoiceseat && se.checkseat) {
            se._flightService.itemFlightCache.backtochoiceseat = false;
        }
        se.navCtrl.navigateForward('/flightcondition');
    }
    showQuickBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_13__["FlightquickbackPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                enterAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_14__["CustomAnimations"].iosCustomEnterAnimation,
                leaveAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_14__["CustomAnimations"].iosCustomLeaveAnimation,
                cssClass: "modal-flight-quick-back",
            });
            modal.present();
        });
    }
    checkChange() {
        this.chkchangeflight = true;
    }
    getDetailTicket(item) {
        var se = this;
        return new Promise((resolve, reject) => {
            if (item) {
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetDetailTicketAirBus?airlineCode=" + item.airlineCode + "&ticketType=" + item.ticketType + "&airbusCode=" + item.aircraft + "&flightNumber=" + item.flightNumber + "&fromPlace=" + (item.fromPlaceCode ? item.fromPlaceCode : item.from) + "&toPlace=" + (item.toPlaceCode ? item.toPlaceCode : item.to) + "&departDate=" + moment__WEBPACK_IMPORTED_MODULE_8__(item.departTime).format("MM-DD-YYYY") + "&bookingDate=" + moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format("MM-DD-YYYY"),
                    timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                    headers: {
                        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                    let objError = {
                        page: "flightsearchresult",
                        func: "selectTicket",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    if (error) {
                        error.page = "flightsearchresult";
                        error.func = "selectTicket";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (response.statusCode == 200) {
                        let result = JSON.parse(body);
                        resolve(result);
                    }
                });
            }
            else {
                resolve(false);
            }
        });
    }
    updatePassengerInfo() {
        var se = this;
        se.gf.showLoadingWithMsg('Đang tiến hành giữ vé');
        try {
            let data = se._flightService.itemFlightCache;
            var ho = '', ten = '';
            let objhoten = se.splitFullName(data.adults[0].name, ho, ten);
            ho = objhoten.firstname;
            ten = objhoten.lastname;
            let listpassenger = [];
            let departluggage = [], returnluggage = [], departAirlineCode = data.departFlight.airlineCode, returnAirlineCode = data.returnFlight ? data.returnFlight.airlineCode : "";
            if (data.departFlight && data.departFlight.airLineLuggage && data.departFlight.airLineLuggage.length > 0) {
                const dl = data.departFlight.airLineLuggage.filter((item) => { return item.quantity > 0; });
                if (dl && dl.length > 0) {
                    dl.forEach(element => {
                        element.quantitycheck = element.quantity;
                        departluggage.push(element);
                    });
                }
            }
            if (data.departLuggage && data.departLuggage.length > 0) {
                const dl = data.departLuggage.filter((item) => { return item.quantity > 0; });
                if (dl && dl.length > 0) {
                    dl.forEach(element => {
                        element.quantitycheck = element.quantity;
                        departluggage.push(element);
                    });
                }
            }
            if (data.returnFlight && data.returnFlight.airLineLuggage && data.returnFlight.airLineLuggage.length > 0) {
                const rl = data.returnFlight.airLineLuggage.filter((item) => { return item.quantity > 0; });
                if (rl && rl.length > 0) {
                    rl.forEach(element => {
                        element.quantitycheck = element.quantity;
                        returnluggage.push(element);
                    });
                }
            }
            if (data.returnLuggage && data.returnLuggage.length > 0) {
                const rl = data.returnLuggage.filter((item) => { return item.quantity > 0; });
                if (rl && rl.length > 0) {
                    rl.forEach(element => {
                        element.quantitycheck = element.quantity;
                        returnluggage.push(element);
                    });
                }
            }
            for (let index = 0; index < data.adults.length; index++) {
                const element = data.adults[index];
                var ho1 = '', ten1 = '';
                let objhoten1 = se.splitFullName(element.name, ho1, ten1);
                ho1 = objhoten1.firstname;
                ten1 = objhoten1.lastname;
                let objAncilary = [], objAncilaryReturn = [];
                let departluggageweight = 0, returnluggageweight = 0;
                if (departluggage && departluggage.length > 0) {
                    let objLuggage;
                    if (departluggage && departluggage.length == 1) {
                        if (departluggage[0].quantitycheck > 0) {
                            if (departAirlineCode == "JetStar") {
                                objLuggage = {
                                    Name: departluggage[0].title,
                                    Type: "Baggage",
                                    Value: departluggage[0].weight,
                                    price: departluggage[0].amount,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            else if (departAirlineCode == "VietnamAirlines") {
                                let obj = JSON.parse(departluggage[0].purchaseKey);
                                obj.NameId = "1.1";
                                objLuggage = {
                                    Name: departluggage[0].title,
                                    Type: "Baggage",
                                    Key: JSON.stringify(obj),
                                    Value: departluggage[0].weight,
                                    price: departluggage[0].amount,
                                    netPrice: departluggage[0].netPrice,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            else {
                                objLuggage = {
                                    Name: departluggage[0].title,
                                    Type: "Baggage",
                                    Key: departluggage[0].purchaseKey,
                                    Value: departluggage[0].weight,
                                    price: departluggage[0].amount,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            if (index == 0) {
                                objAncilary.push(objLuggage);
                                departluggageweight = departluggage[0].weight;
                            }
                            else if (departluggage[0].quantitycheck >= 1) {
                                objAncilary.push(objLuggage);
                                departluggageweight = departluggage[0].weight;
                            }
                            departluggage[0].quantitycheck--;
                        }
                    }
                    else if (departluggage && departluggage.length > 1) {
                        var dl1;
                        if (index > 0 && departluggage[index - 1] && departluggage[index - 1].quantitycheck > 0) {
                            dl1 = departluggage[index - 1];
                        }
                        else {
                            dl1 = departluggage[index];
                        }
                        if (dl1) {
                            if (departAirlineCode == "JetStar") {
                                objLuggage = {
                                    Name: dl1.title,
                                    Type: "Baggage",
                                    Value: dl1.weight,
                                    price: dl1.amount,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            else if (departAirlineCode == "VietnamAirlines") {
                                let obj = JSON.parse(dl1.purchaseKey);
                                obj.NameId = "1.1";
                                objLuggage = {
                                    Name: dl1.title,
                                    Type: "Baggage",
                                    Key: JSON.stringify(obj),
                                    Value: dl1.weight,
                                    price: dl1.amount,
                                    netPrice: dl1.netPrice,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            else {
                                objLuggage = {
                                    Name: dl1.title,
                                    Type: "Baggage",
                                    Key: dl1.purchaseKey,
                                    Value: dl1.weight,
                                    price: dl1.amount,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            objAncilary.push(objLuggage);
                            departluggageweight = dl1.weight;
                            dl1.quantitycheck--;
                        }
                    }
                }
                if (returnluggage && returnluggage.length > 0) {
                    let objReturnLuggage1;
                    if (returnluggage && returnluggage.length == 1 && returnluggage[0].quantitycheck > 0) {
                        if (returnAirlineCode && returnAirlineCode == "JetStar") {
                            objReturnLuggage1 = {
                                Name: returnluggage[0].title,
                                Type: "Baggage",
                                Value: returnluggage[0].weight,
                                price: returnluggage[0].amount,
                                flightNumber: data.returnFlight.flightNumber
                            };
                        }
                        else if (returnAirlineCode == "VietnamAirlines") {
                            let obj = JSON.parse(returnluggage[0].purchaseKey);
                            obj.NameId = "1.1";
                            objReturnLuggage1 = {
                                Name: returnluggage[0].title,
                                Type: "Baggage",
                                Key: JSON.stringify(obj),
                                Value: returnluggage[0].weight,
                                price: returnluggage[0].amount,
                                netPrice: returnluggage[0].netPrice,
                                flightNumber: data.returnFlight.flightNumber
                            };
                        }
                        else {
                            objReturnLuggage1 = {
                                Name: returnluggage[0].title,
                                Type: "Baggage",
                                Key: returnluggage[0].purchaseKey,
                                Value: returnluggage[0].weight,
                                price: returnluggage[0].amount,
                                flightNumber: data.returnFlight.flightNumber
                            };
                        }
                        if (index == 0) {
                            objAncilaryReturn.push(objReturnLuggage1);
                            returnluggageweight = returnluggage[0].weight;
                        }
                        else if (returnluggage[0].quantitycheck >= 1) {
                            objAncilaryReturn.push(objReturnLuggage1);
                            returnluggageweight = returnluggage[0].weight;
                        }
                        returnluggage[0].quantitycheck--;
                    }
                    else if (returnluggage && returnluggage.length > 1) {
                        var rl1;
                        if (index > 0 && returnluggage[index - 1] && returnluggage[index - 1].quantitycheck > 0) {
                            rl1 = returnluggage[index - 1];
                        }
                        else {
                            rl1 = returnluggage[index];
                        }
                        if (rl1) {
                            if (returnAirlineCode && returnAirlineCode == "JetStar") {
                                objReturnLuggage1 = {
                                    Name: rl1.title,
                                    Type: "Baggage",
                                    Value: rl1.weight,
                                    price: rl1.amount,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            else if (returnAirlineCode == "VietnamAirlines") {
                                let obj = JSON.parse(rl1.purchaseKey);
                                obj.NameId = "1.1";
                                objReturnLuggage1 = {
                                    Name: rl1.title,
                                    Type: "Baggage",
                                    Key: JSON.stringify(obj),
                                    Value: rl1.weight,
                                    price: rl1.amount,
                                    netPrice: rl1.netPrice,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            else {
                                objReturnLuggage1 = {
                                    Name: rl1.title,
                                    Type: "Baggage",
                                    Key: rl1.purchaseKey,
                                    Value: rl1.weight,
                                    price: rl1.amount,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            objAncilaryReturn.push(objReturnLuggage1);
                            returnluggageweight = rl1.weight;
                            rl1.quantitycheck--;
                        }
                    }
                }
                let objSeat;
                if (data.departSeatChoice && data.departSeatChoice.length > 0) {
                    if (data.departSeatChoice.length == 1 && !data.departSeatChoice[0].choosed) {
                        let seat = data.departSeatChoice[0];
                        let stop = data.departFlight.stops;
                        if (departAirlineCode == 'VietnamAirlines') {
                            let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                            objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: index + 1 };
                        }
                        else {
                            objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, PaxIndex: index + 1 };
                        }
                        objAncilary.push(objSeat);
                        data.departSeatChoice[0].choosed = true;
                    }
                    else {
                        let seat = data.departSeatChoice[index];
                        if (seat) {
                            let stop = data.departFlight.stops;
                            if (departAirlineCode == 'VietnamAirlines') {
                                let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                                objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: index + 1 };
                            }
                            else {
                                objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, PaxIndex: index + 1 };
                            }
                            objAncilary.push(objSeat);
                            data.departSeatChoice[index].choosed = true;
                        }
                    }
                }
                let objSeatReturn;
                if (data.returnSeatChoice && data.returnSeatChoice.length > 0) {
                    if (data.returnSeatChoice.length == 1 && !data.returnSeatChoice[0].choosed) {
                        let seatreturn = data.returnSeatChoice[0];
                        let stopreturn = data.returnFlight.stops;
                        if (returnAirlineCode == 'VietnamAirlines') {
                            let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                            objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: index + 1 };
                        }
                        else {
                            objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, PaxIndex: index + 1 };
                        }
                        objAncilaryReturn.push(objSeatReturn);
                        data.returnSeatChoice[0].choosed = true;
                    }
                    else {
                        let seatreturn = data.returnSeatChoice[index];
                        if (seatreturn) {
                            let stopreturn = data.returnFlight.stops;
                            if (returnAirlineCode == 'VietnamAirlines') {
                                let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                                objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: index + 1 };
                            }
                            else {
                                objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, PaxIndex: index + 1 };
                            }
                            objAncilaryReturn.push(objSeatReturn);
                            data.returnSeatChoice[index].choosed = true;
                        }
                    }
                }
                let objTransfer;
                if (this._flightService.itemFlightCache.DICHUNGParam && this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo) {
                    objTransfer = { Type: "Transfer", price: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo, netPrice: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo, title: "1" };
                    if (index == 0) {
                        objAncilary.push(objTransfer);
                    }
                }
                if (this._flightService.itemFlightCache.DICHUNGParam && this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn) {
                    objTransfer = { Type: "Transfer", price: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn, netPrice: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn, title: "1" };
                    if (index == 0) {
                        objAncilaryReturn.push(objTransfer);
                    }
                }
                element.ancillaryJson = (objAncilary.length > 0 ? JSON.stringify(objAncilary) : "");
                element.ancillaryReturnJson = (objAncilaryReturn.length > 0 ? JSON.stringify(objAncilaryReturn) : "");
                console.log(element.ancillaryJson);
                console.log(element.ancillaryReturnJson);
                listpassenger.push({
                    "passengerType": 0,
                    "gender": element.gender,
                    "firstName": ten1,
                    "lastName": ho1,
                    "mobileNumber": "",
                    "baggage": departluggageweight,
                    "returnBaggage": returnluggageweight,
                    "birthDay": "",
                    "email": "",
                    "passportNumber": "",
                    "passportExpired": "",
                    "nationality": "",
                    "destinationCity": "",
                    "destinationPostal": "",
                    "destinationStreet": "",
                    "passportIssueCountry": "",
                    "airlineMemberCode": (data.showLotusPoint && element.airlineMemberCode) ? element.airlineMemberCode : "",
                    "departMealPlan": "",
                    "returnMealPlan": "",
                    "adultIndex": index,
                    "ancillaryJson": element.ancillaryJson,
                    "ancillaryReturnJson": element.ancillaryReturnJson
                });
            }
            let adultindex = 0;
            for (let index = 0; index < data.childs.length; index++) {
                const element = data.childs[index];
                let objAncilary = [], objAncilaryReturn = [];
                let departluggageweight = 0, returnluggageweight = 0;
                departluggage = departluggage.filter((item) => { return item.quantitycheck > 0; });
                returnluggage = returnluggage.filter((item) => { return item.quantitycheck > 0; });
                if (!element.isInfant) {
                    if (departluggage && departluggage.length > 0) {
                        let objLuggage;
                        if (departluggage && departluggage.length == 1) {
                            if (departluggage[0].quantitycheck > 0) {
                                if (departAirlineCode == "JetStar") {
                                    objLuggage = {
                                        Name: departluggage[0].title,
                                        Type: "Baggage",
                                        Value: departluggage[0].weight,
                                        price: departluggage[0].amount,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                else if (departAirlineCode == "VietnamAirlines") {
                                    let obj = JSON.parse(departluggage[0].purchaseKey);
                                    obj.NameId = "1.1";
                                    objLuggage = {
                                        Name: departluggage[0].title,
                                        Type: "Baggage",
                                        Key: JSON.stringify(obj),
                                        Value: departluggage[0].weight,
                                        price: departluggage[0].amount,
                                        netPrice: departluggage[0].netPrice,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                else {
                                    objLuggage = {
                                        Name: departluggage[0].title,
                                        Type: "Baggage",
                                        Key: departluggage[0].purchaseKey,
                                        Value: departluggage[0].weight,
                                        price: departluggage[0].amount,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                if (index == 0) {
                                    objAncilary.push(objLuggage);
                                    departluggageweight = departluggage[0].weight;
                                }
                                else if (departluggage[0].quantitycheck >= 1) {
                                    objAncilary.push(objLuggage);
                                    departluggageweight = departluggage[0].weight;
                                }
                                departluggage[0].quantitycheck--;
                            }
                        }
                        else if (departluggage && departluggage.length > 1) {
                            var dlc;
                            if (index > 0 && departluggage[index - 1] && departluggage[index - 1].quantitycheck > 0) {
                                dlc = departluggage[index - 1];
                            }
                            else {
                                dlc = departluggage[index];
                            }
                            if (dlc) {
                                if (departAirlineCode == "JetStar") {
                                    objLuggage = {
                                        Name: dlc.title,
                                        Type: "Baggage",
                                        Value: dlc.weight,
                                        price: dlc.amount,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                else if (departAirlineCode == "VietnamAirlines") {
                                    let obj = JSON.parse(dlc.purchaseKey);
                                    obj.NameId = "1.1";
                                    objLuggage = {
                                        Name: dlc.title,
                                        Type: "Baggage",
                                        Key: JSON.stringify(obj),
                                        Value: dlc.weight,
                                        price: dlc.amount,
                                        netPrice: dlc.netPrice,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                else {
                                    objLuggage = {
                                        Name: dlc.title,
                                        Type: "Baggage",
                                        Key: dlc.purchaseKey,
                                        Value: dlc.weight,
                                        price: dlc.amount,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                objAncilary.push(objLuggage);
                                departluggageweight = dlc.weight;
                                dlc.quantitycheck--;
                            }
                        }
                    }
                    if (returnluggage && returnluggage.length > 0) {
                        let objReturnLuggage1;
                        if (returnluggage && returnluggage.length == 1 && returnluggage[0].quantitycheck > 0) {
                            if (returnAirlineCode && returnAirlineCode == "JetStar") {
                                objReturnLuggage1 = {
                                    Name: returnluggage[0].title,
                                    Type: "Baggage",
                                    Value: returnluggage[0].weight,
                                    price: returnluggage[0].amount,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            else if (returnAirlineCode == "VietnamAirlines") {
                                let obj = JSON.parse(returnluggage[0].purchaseKey);
                                obj.NameId = "1.1";
                                objReturnLuggage1 = {
                                    Name: returnluggage[0].title,
                                    Type: "Baggage",
                                    Key: JSON.stringify(obj),
                                    Value: returnluggage[0].weight,
                                    price: returnluggage[0].amount,
                                    netPrice: returnluggage[0].netPrice,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            else {
                                objReturnLuggage1 = {
                                    Name: returnluggage[0].title,
                                    Type: "Baggage",
                                    Key: returnluggage[0].purchaseKey,
                                    Value: returnluggage[0].weight,
                                    price: returnluggage[0].amount,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            if (index == 0) {
                                objAncilaryReturn.push(objReturnLuggage1);
                                returnluggageweight = returnluggage[0].weight;
                            }
                            else if (returnluggage[0].quantitycheck >= 1) {
                                objAncilaryReturn.push(objReturnLuggage1);
                                returnluggageweight = returnluggage[0].weight;
                            }
                            returnluggage[0].quantitycheck--;
                        }
                        else if (returnluggage && returnluggage.length > 1) {
                            var rlc;
                            if (index > 0 && returnluggage[index - 1] && returnluggage[index - 1].quantitycheck > 0) {
                                rlc = returnluggage[index - 1];
                            }
                            else {
                                rlc = returnluggage[index];
                            }
                            if (rlc) {
                                if (returnAirlineCode && returnAirlineCode == "JetStar") {
                                    objReturnLuggage1 = {
                                        Name: rlc.title,
                                        Type: "Baggage",
                                        Value: rlc.weight,
                                        price: rlc.amount,
                                        flightNumber: data.returnFlight.flightNumber
                                    };
                                }
                                else if (returnAirlineCode == "VietnamAirlines") {
                                    let obj = JSON.parse(rlc.purchaseKey);
                                    obj.NameId = "1.1";
                                    objReturnLuggage1 = {
                                        Name: rlc.title,
                                        Type: "Baggage",
                                        Key: JSON.stringify(obj),
                                        Value: rlc.weight,
                                        price: rlc.amount,
                                        netPrice: rlc.netPrice,
                                        flightNumber: data.returnFlight.flightNumber
                                    };
                                }
                                else {
                                    objReturnLuggage1 = {
                                        Name: rlc.title,
                                        Type: "Baggage",
                                        Key: rlc.purchaseKey,
                                        Value: rlc.weight,
                                        price: rlc.amount,
                                        flightNumber: data.returnFlight.flightNumber
                                    };
                                }
                                objAncilaryReturn.push(objReturnLuggage1);
                                returnluggageweight = rlc.weight;
                                rlc.quantitycheck--;
                            }
                        }
                    }
                }
                var ho1 = '', ten1 = '';
                let objhoten1 = se.splitFullName(element.name, ho1, ten1);
                ho1 = objhoten1.firstname;
                ten1 = objhoten1.lastname;
                let indexseat = index + data.adults.length;
                if (!element.isInfant) {
                    let objSeat;
                    if (data.departSeatChoice && data.departSeatChoice.length > 0) {
                        if (data.departSeatChoice.length == 1) {
                            if (data.departSeatChoice[indexseat] && !data.departSeatChoice[indexseat].choosed) {
                                let seat = data.departSeatChoice[indexseat];
                                let stop = data.departFlight.stops;
                                if (departAirlineCode == 'VietnamAirlines') {
                                    let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                                    objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: indexseat + 1 };
                                }
                                else {
                                    objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, PaxIndex: indexseat + 1 };
                                }
                                objAncilary.push(objSeat);
                            }
                        }
                        else {
                            if (data.departSeatChoice[indexseat] && !data.departSeatChoice[indexseat].choosed) {
                                let seat = data.departSeatChoice[indexseat];
                                if (seat) {
                                    let stop = data.departFlight.stops;
                                    if (departAirlineCode == 'VietnamAirlines') {
                                        let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                                        objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: indexseat + 1 };
                                    }
                                    else {
                                        objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, PaxIndex: indexseat + 1 };
                                    }
                                    objAncilary.push(objSeat);
                                }
                            }
                        }
                    }
                    let objSeatReturn;
                    if (data.returnSeatChoice && data.returnSeatChoice.length > 0) {
                        if (data.returnSeatChoice.length == 1) {
                            if (data.returnSeatChoice[indexseat] && !data.returnSeatChoice[indexseat].choosed) {
                                let seatreturn = data.returnSeatChoice[indexseat];
                                let stopreturn = data.returnFlight.stops;
                                if (returnAirlineCode == 'VietnamAirlines') {
                                    let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                                    objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: indexseat + 1 };
                                }
                                else {
                                    objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, PaxIndex: indexseat + 1 };
                                }
                                objAncilaryReturn.push(objSeatReturn);
                            }
                        }
                        else {
                            if (data.returnSeatChoice[indexseat] && !data.returnSeatChoice[indexseat].choosed) {
                                let seatreturn = data.returnSeatChoice[indexseat];
                                if (seatreturn) {
                                    let stopreturn = data.returnFlight.stops;
                                    if (returnAirlineCode == 'VietnamAirlines') {
                                        let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                                        objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: indexseat + 1 };
                                    }
                                    else {
                                        objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, PaxIndex: indexseat + 1 };
                                    }
                                    objAncilaryReturn.push(objSeatReturn);
                                }
                            }
                        }
                    }
                }
                element.ancillaryJson = (objAncilary.length > 0 ? JSON.stringify(objAncilary) : "");
                element.ancillaryReturnJson = (objAncilaryReturn.length > 0 ? JSON.stringify(objAncilaryReturn) : "");
                if (element.isInfant) {
                    adultindex++;
                }
                listpassenger.push({
                    "passengerType": element.isInfant ? 2 : 1,
                    "gender": element.gender,
                    "firstName": ten1,
                    "lastName": ho1,
                    "mobileNumber": "",
                    "baggage": departluggageweight ? departluggageweight : "",
                    "returnBaggage": returnluggageweight ? returnluggageweight : "",
                    "birthDay": element.dateofbirth,
                    "email": "",
                    "passportNumber": "",
                    "passportExpired": "",
                    "nationality": "",
                    "destinationCity": "",
                    "destinationPostal": "",
                    "destinationStreet": "",
                    "passportIssueCountry": "",
                    "airlineMemberCode": "",
                    "departMealPlan": "",
                    "returnMealPlan": "",
                    "adultIndex": element.isInfant ? adultindex - 1 : 0,
                    "ancillaryJson": element.ancillaryJson,
                    "ancillaryReturnJson": element.ancillaryReturnJson
                });
            }
            let firstnamecontact = '', lastnamecontact = '';
            let objcontact = se.splitFullName(data.hoten ? data.hoten : data.adults[0].name, firstnamecontact, lastnamecontact);
            firstnamecontact = objcontact.firstname;
            lastnamecontact = objcontact.lastname;
            data.ho = firstnamecontact;
            data.ten = lastnamecontact;
            var bookingJsonData;
            if (this._flightService.itemFlightCache.DICHUNGParam) {
                this._flightService.itemFlightCache.DICHUNGParam.User = { email: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.emailDC, phone: data.phone, fullName: data.ho + " " + data.ten };
                listpassenger[0].DICHUNGParam = this._flightService.itemFlightCache.DICHUNGParam;
                var AirTicketObj = [];
                let AirTicketItem = { PromotionNote: "", AirlineName: "" };
                let JsonItem = JSON.stringify(listpassenger[0].DICHUNGParam);
                AirTicketItem.PromotionNote = JsonItem;
                AirTicketItem.AirlineName = "APIDICHUNG";
                AirTicketObj.push(AirTicketItem);
                let Json = JSON.stringify(AirTicketObj);
                bookingJsonData = Json;
            }
            return new Promise((resolve, reject) => {
                let objPass;
                objPass = {
                    "contact": {
                        "gender": "1",
                        "firstName": lastnamecontact,
                        "lastName": firstnamecontact,
                        "mobileNumber": data.phone,
                        "email": data.email,
                        "address": "",
                        "phoneNumber": data.phone,
                    },
                    "passengers": listpassenger,
                    "userToken": "",
                    "noteCorp": "",
                    "compName": data.companyname,
                    "compAddress": data.address,
                    "compTaxCode": data.tax,
                    "receiverAddress": "",
                    "isInvoice": data.Invoice,
                    "isHoldTicket": false,
                    "departFlightId": data.departFlight ? data.departFlight.id : "",
                    "returnFlightId": data.returnFlight ? data.returnFlight.id : "",
                    "voucher": { voucherCode: se._flightService.itemFlightCache.promotionCode ? se._flightService.itemFlightCache.promotionCode : "" },
                    "hotelAddon": se._flightService.itemFlightCache.objHotelCitySelected ? se._flightService.itemFlightCache.objHotelCitySelected : "",
                    "bookingJsonData": bookingJsonData,
                    "InsuranceType": se._flightService.itemFlightCache.InsuranceType
                };
                if (se._flightService.itemFlightCache.pnr && se._flightService.itemFlightCache.pnr.resNo && se._flightService.itemFlightCache.hasvoucher && se._flightService.itemFlightCache.promotionCode) {
                    objPass.voucher = {};
                    objPass.voucher.keepCurrentVoucher = true;
                    objPass.voucher.voucherCode = se._flightService.itemFlightCache.promotionCode ? se._flightService.itemFlightCache.promotionCode : "";
                }
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PassengerSave/" + data.reservationId,
                    timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                    headers: {
                        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify(objPass)
                };
                se.options = options;
                console.log(options);
                requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                    let objError = {
                        page: "flightaddservice",
                        func: "updatePassengerInfo",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    if (error) {
                        error.page = "flightaddservice";
                        error.func = "updatePassengerInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (response.statusCode == 200) {
                        let result = JSON.parse(body);
                        console.log(result);
                        resolve(result);
                    }
                });
            });
        }
        catch (e) {
            se.gf.hideLoading();
            let result = e.message;
            console.log(result);
            let objError = {
                page: "flightaddservice",
                func: "updatePassengerInfo",
                message: "exception",
                content: result,
                type: "warning",
                param: JSON.stringify(se.options)
            };
            _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, result);
            se.gf.showAlertErrorMessage();
        }
    }
    splitFullName(strHoten, ho, ten) {
        let textfullname = strHoten.split(' ');
        let name = '';
        if (textfullname.length > 2) {
            for (let i = 1; i < textfullname.length; i++) {
                if (i == 1) {
                    name += textfullname[i];
                }
                else {
                    name += ' ' + textfullname[i];
                }
            }
            ho = textfullname[0];
            ten = name;
        }
        else if (textfullname.length > 1) {
            ho = textfullname[0];
            ten = textfullname[1];
        }
        else if (textfullname.length == 1) {
            ho = textfullname[0];
            ten = "";
        }
        return { firstname: ho, lastname: ten };
    }
    checkSeatTypeVNA(facs) {
        let fac = facs.filter(item => item.detail == 'FrontOfCabin').length;
        if (fac > 0) {
            return 'front';
        }
    }
    loadHotelCity(data) {
        var se = this;
        se.zone.run(() => {
            se.loadHotelCityDone = (data && data.length > 0) ? false : true;
            se._flightService.itemFlightCache.itemsFlightCityHotel = data;
            se._flightService.itemFlightCache.itemsFlightCityHotel.forEach(item => {
                if (item && item.Rating) {
                    switch (item.Rating) {
                        case 50:
                            item.RatingStar = "../../assets/star/ic_star_5.svg";
                            break;
                        case 45:
                            item.RatingStar = "../../assets/star/ic_star_4.5.svg";
                            break;
                        case 40:
                            item.RatingStar = "../../assets/star/ic_star_4.svg";
                            break;
                        case 35:
                            item.RatingStar = "../../assets/star/ic_star_3.5.svg";
                            break;
                        case 30:
                            item.RatingStar = "../../assets/star/ic_star_3.svg";
                            break;
                        case 25:
                            item.RatingStar = "../../assets/star/ic_star_2.5.svg";
                            break;
                        case 20:
                            item.RatingStar = "../../assets/star/ic_star_2.svg";
                            break;
                        case 15:
                            item.RatingStar = "../../assets/star/ic_star_1.5.svg";
                            break;
                        case 10:
                            item.RatingStar = "../../assets/star/ic_star_1.svg";
                            break;
                        case 5:
                            item.RatingStar = "../../assets/star/ic_star_0.5.svg";
                            break;
                        default:
                            break;
                    }
                }
                let link = "https://maps.google.com/maps?q=" + item.HotelName + "&hl=es;z=14&amp&output=embed";
                item.linkGoogleMap = se.sanitizer.bypassSecurityTrustResourceUrl(link);
                if (item.Avatar && item.Avatar.indexOf('http') == -1) {
                    item.Avatar = 'https:' + item.Avatar;
                }
                if (item.dataPrice && item.hotelDetail) {
                    item.hotelDetail.RoomClasses[0].selected = true;
                    item.PaxAndRoomInfo = item.hotelDetail.SummaryFilter + ", " + item.hotelDetail.RoomClasses[0].TotalRoom + " · " + item.dataPrice.mealName;
                    item.roomName = item.dataPrice.roomName;
                    item.priceDiff = (item.dataPrice.lowRateOta * item.hotelDetail.TotalNight) - item.hotelDetail.RoomClasses[0].MealTypeRates[0].PriceAvgPlusOTA;
                    item.priceOriginal = item.dataPrice.lowRateOta * item.hotelDetail.TotalNight;
                    item.priceOriginalDisplay = se.gf.convertNumberToString(item.priceOriginal);
                    item.pricePromo = se.gf.convertNumberToString(item.hotelDetail.RoomClasses[0].MealTypeRates[0].PriceAvgPlusOTA);
                    item.priceTotal = item.hotelDetail.RoomClasses[0].MealTypeRates[0].PriceAvgPlusOTA;
                    item.SummaryFilter = item.hotelDetail.SummaryFilter;
                    item.hotelDetail.RoomClasses.forEach(roomClass => {
                        roomClass.MealTypeRates[0].PriceDiffUpgradeDisplay = se.gf.convertNumberToString(roomClass.MealTypeRates[0].PriceAvgPlusOTA);
                    });
                }
            });
            se.zone.run(() => se._flightService.itemFlightCache.itemsFlightCityHotel.sort(function (a, b) {
                if (a.dataPrice && b.dataPrice) {
                    return a.dataPrice.lowRate - b.dataPrice.lowRate;
                }
            }));
            se.loadHotelCityDone = true;
        });
        let itemhoteldetail = se._flightService.itemFlightCache.itemsFlightCityHotel[0];
        this._flightService.itemFlightCache.objectHotelCity = itemhoteldetail.hotelDetail.RoomClasses[0];
        se.loadDataHotelDetail(itemhoteldetail);
    }
    loadDataHotelDetail(item) {
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPost + "/mhoteldetail/" + item.HotelId;
        var se = this;
        var options = {
            method: 'POST',
            url: url,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "hoteldetail",
                    func: "loaddata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "hoteldetail";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                item.defaultHotelData = jsondata;
            }
        });
    }
    checkChangeRoom(data) {
        let se = this;
        if (data && se.searchhotel.hotelCityId) {
            let objchangeroom = se._flightService.itemFlightCache.itemsFlightCityHotel.filter((item) => { return item.HotelId == se.searchhotel.hotelCityId; });
            if (objchangeroom && objchangeroom.length > 0) {
                objchangeroom[0].hotelDetail.RoomClasses.forEach(element => {
                    if (element.ClassID == data.ClassID) {
                        element.selected = true;
                        element.MealTypeRates[0].selected = true;
                        se._flightService.itemFlightCache.HotelCityMealtypeSelected = element.MealTypeRates[0];
                        se.zone.run(() => {
                            objchangeroom[0].priceDiff = (objchangeroom[0].dataPrice.lowRateOta * objchangeroom[0].hotelDetail.TotalNight) - element.MealTypeRates[0].PriceAvgPlusOTA;
                            objchangeroom[0].pricePromo = se.gf.convertNumberToString(element.MealTypeRates[0].PriceAvgPlusOTA);
                            objchangeroom[0].priceTotal = element.MealTypeRates[0].PriceAvgPlusOTA;
                        });
                        se.AddHotelCity(objchangeroom[0].HotelId);
                    }
                    else {
                        element.selected = false;
                    }
                });
            }
        }
    }
    AddHotelCity(id) {
        let se = this;
        let objHotelCity = se._flightService.itemFlightCache.itemsFlightCityHotel.filter((item) => { return item.HotelId == id; });
        if (objHotelCity && objHotelCity.length > 0) {
            let el = objHotelCity[0].hotelDetail.RoomClasses.filter((r) => { return r.selected; });
            if (el && el.length > 0) {
                let room = el[0];
                let mealtype = room.MealTypeRates[0];
                if (mealtype) {
                    let objHotelCitySelected = {
                        source: '6',
                        HotelId: objHotelCity[0].HotelId,
                        TotalRoom: room.TotalRoom,
                        TotalPrices: mealtype.PriceAvgPlusOTA,
                        RoomStatus: mealtype.Status,
                        BreakfastInclude: mealtype.Code,
                        BreakfastIncludeName: mealtype.Name,
                        PaymentMethod: "",
                        BookingStatus: "",
                        TravPaxPrices: mealtype.PriceAvgPlusNet,
                        Office: "",
                        RoomName: mealtype.RoomName,
                        RoomPrices: mealtype.PriceAvgPlusOTA,
                        RoomId: mealtype.RoomId,
                        MealTypeNote: mealtype.PromotionInclusions && mealtype.PromotionInclusions.length > 0 ? mealtype.PromotionInclusions.join(',') : '',
                        PromotionNote: mealtype.PromotionNote,
                        HotelCheckDetailTokenVinHms: mealtype.HotelCheckDetailTokenVinHms,
                        HotelCheckPriceTokenSMD: mealtype.HotelCheckPriceTokenSMD,
                        HotelCheckDetailTokenInternal: mealtype.Supplier == 'SERI' && mealtype.HotelCheckDetailTokenInternal ? mealtype.HotelCheckDetailTokenInternal : "",
                        Supplier: mealtype.IsHoliday ? "Holiday" : mealtype.Supplier,
                        AllomentBreak: mealtype.AllomentBreak,
                        IsPromotionAllotment: mealtype.IsPromotionAllotment,
                        NoteForSupp: mealtype.NoteForSupplier,
                        Avatar: objHotelCity[0].Avatar,
                        HotelName: objHotelCity[0].HotelName,
                        RatingStar: objHotelCity[0].RatingStar,
                        SummaryFilter: objHotelCity[0].SummaryFilter,
                        RoomPriceStr: mealtype.PriceAvgPlusOTAStr,
                        Address: objHotelCity[0].Address,
                        Location: objHotelCity[0].Lat + ',' + objHotelCity[0].Lon
                    };
                    se._flightService.itemFlightCache.returnDCPlace = null;
                    se._flightService.itemFlightCache.objHotelCitySelected = objHotelCitySelected;
                    se._flightService.itemFlightCache.HotelCityMealtypeSelected = mealtype;
                    se.totalPriceAll(mealtype);
                }
            }
        }
    }
    clearOtherSelectedItem(id) {
        return new Promise((resolve, reject) => {
            for (let index = 0; index < this._flightService.itemFlightCache.itemsFlightCityHotel.length; index++) {
                const element = this._flightService.itemFlightCache.itemsFlightCityHotel[index];
                if (element.HotelId != id) {
                    element.checkaddhotel = false;
                }
                if (index == this._flightService.itemFlightCache.itemsFlightCityHotel.length - 1) {
                    resolve(true);
                }
            }
        });
    }
    AddSelectedItem(id) {
        return new Promise((resolve, reject) => {
            for (let index = 0; index < this._flightService.itemFlightCache.itemsFlightCityHotel.length; index++) {
                const element = this._flightService.itemFlightCache.itemsFlightCityHotel[index];
                if (element.HotelId == id) {
                    element.checkaddhotel = true;
                }
                else {
                    element.checkaddhotel = false;
                }
                if (index == this._flightService.itemFlightCache.itemsFlightCityHotel.length - 1) {
                    resolve(true);
                }
            }
        });
    }
    checkHotelCityBeforeAddDetail() {
        var se = this;
        let objHotelCity = se._flightService.itemFlightCache.itemsFlightCityHotel.filter((hc) => { return hc.checkaddhotel; });
        if (objHotelCity && objHotelCity.length > 0) {
            se.AddHotelCity(objHotelCity[0].HotelId);
        }
    }
    addDichung(stt) {
        if (stt == 0) {
            this._flightService.itemTranferChange.emit(true);
            this._flightService.itemFlightCache.departDCPlace = null;
            this._flightService.itemFlightCache.returnDCPlace = null;
            this.navCtrl.navigateForward('/flightdcpickaddress');
        }
        else {
            this.navCtrl.navigateBack('/flightdcdetail/' + this._flightService.itemFlightCache.isblocktextDepart + '/' + this._flightService.itemFlightCache.isblocktextReturn);
        }
    }
    promofunc(vc) {
        var se = this;
        if (se.promocode) {
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/data/validpromocode',
                headers: {
                    'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: { bookingCode: 'VMB', code: se.promocode, totalAmount: se._flightService.itemFlightCache.totalPrice, comboDetailId: 0, couponData: (vc.applyFor && vc.applyFor == 'flight') ? { flight: {
                            "tickets": this._flightService.itemFlightCache.roundTrip ? [
                                {
                                    "flightNumber": se._flightService.itemFlightCache.departFlight.flightNumber,
                                    "airLineCode": se._flightService.itemFlightCache.departFlight.airlineCode,
                                    "departTime": se._flightService.itemFlightCache.departFlight.departTime,
                                    "landingTime": se._flightService.itemFlightCache.departFlight.landingTime,
                                    "flightDuration": se._flightService.itemFlightCache.departFlight.flightDuration,
                                    "fromPlaceCode": se._flightService.itemFlightCache.departFlight.fromPlaceCode,
                                    "toPlaceCode": se._flightService.itemFlightCache.departFlight.toPlaceCode,
                                    "stops": se._flightService.itemFlightCache.departFlight.stops,
                                    "ticketClass": se._flightService.itemFlightCache.departFlight.ticketClass,
                                    "fareBasis": se._flightService.itemFlightCache.departFlight.fareBasis,
                                    "jsonObject": ""
                                },
                                {
                                    "flightNumber": se._flightService.itemFlightCache.returnFlight.flightNumber,
                                    "airLineCode": se._flightService.itemFlightCache.returnFlight.airlineCode,
                                    "departTime": se._flightService.itemFlightCache.returnFlight.departTime,
                                    "landingTime": se._flightService.itemFlightCache.returnFlight.landingTime,
                                    "flightDuration": se._flightService.itemFlightCache.returnFlight.flightDuration,
                                    "fromPlaceCode": se._flightService.itemFlightCache.returnFlight.fromPlaceCode,
                                    "toPlaceCode": se._flightService.itemFlightCache.returnFlight.toPlaceCode,
                                    "stops": se._flightService.itemFlightCache.returnFlight.stops,
                                    "ticketClass": se._flightService.itemFlightCache.returnFlight.ticketClass,
                                    "fareBasis": se._flightService.itemFlightCache.returnFlight.fareBasis,
                                    "jsonObject": ""
                                }
                            ] :
                                [
                                    {
                                        "flightNumber": se._flightService.itemFlightCache.departFlight.flightNumber,
                                        "airLineCode": se._flightService.itemFlightCache.departFlight.airlineCode,
                                        "departTime": se._flightService.itemFlightCache.departFlight.departTime,
                                        "landingTime": se._flightService.itemFlightCache.departFlight.landingTime,
                                        "flightDuration": se._flightService.itemFlightCache.departFlight.flightDuration,
                                        "fromPlaceCode": se._flightService.itemFlightCache.departFlight.fromPlaceCode,
                                        "toPlaceCode": se._flightService.itemFlightCache.departFlight.toPlaceCode,
                                        "stops": se._flightService.itemFlightCache.departFlight.stops,
                                        "ticketClass": se._flightService.itemFlightCache.departFlight.ticketClass,
                                        "fareBasis": se._flightService.itemFlightCache.departFlight.fareBasis,
                                        "jsonObject": ""
                                    }
                                ],
                            "totalAdult": se._flightService.itemFlightCache.adult,
                            "totalChild": se._flightService.itemFlightCache.child,
                            "totalInfant": se._flightService.itemFlightCache.infant,
                        } } : '' },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                se.zone.run(() => {
                    var json = body;
                    se.promotionCode = "";
                    if (json.error == 0) {
                        se.msg = json.msg;
                        se.ischeckerror = 0;
                        se.discountpromo = json.data.orginDiscount ? json.data.orginDiscount : json.data.discount;
                        se.promotionCode = se.promocode;
                        se.totalPriceAll(0);
                    }
                    else if (json.error == 1) {
                        se.msg = json.msg;
                        se.discountpromo = 0;
                        se.ischeckerror = 1;
                    }
                    else if (json.error == 2) {
                        se.msg = json.msg;
                        se.discountpromo = 0;
                        se.ischeckerror = 1;
                    }
                    else if (json.error == 3) {
                        se.msg = json.msg;
                        se.discountpromo = 0;
                        se.ischeckerror = 1;
                    }
                    else {
                        se.msg = json.msg;
                        se.discountpromo = 0;
                        se.ischeckerror = 1;
                    }
                });
            });
        }
    }
    textchange() {
        this.discountpromo = 0;
        this.ischeckerror = 0;
        this.msg = "";
        this.promotionCode = "";
        this.totalPriceAll(0);
    }
    showinfoCathay() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.alert = yield this.alertCtrl.create({
                header: 'Bảo hiểm trễ chuyến',
                message: 'Gói Bảo hiểm trễ chuyến được thiết kế để bảo vệ cho những chi phí chuyến bay phát sinh giúp bạn và gia đình yên tâm trên mọi hành trình, giảm bớt những rủi ro. <u >Xem quy chế</u>',
                buttons: [
                    {
                        text: 'OK',
                        cssClass: "btn-ok",
                        handler: () => {
                        }
                    }
                ]
            });
            const utag = document.querySelector('u');
            if (utag) {
                utag.setAttribute('style', 'color: #00c1de;');
                utag.addEventListener("click", (e) => {
                    this.noteCathay();
                });
            }
            this.alert.present();
        });
    }
    noteCathay() {
        this.navCtrl.navigateForward('/insurrancenote');
    }
    toggleCathay(ev) {
        this.isCathay = ev.detail.checked;
        if (this.isCathay) {
            this._flightService.itemFlightCache.priceCathay = this.priceCathay;
            if (this.roundtrip) {
                this._flightService.itemFlightCache.InsuranceType = 3;
            }
            else {
                this._flightService.itemFlightCache.InsuranceType = 2;
            }
        }
        else {
            this._flightService.itemFlightCache.InsuranceType = 0;
            this._flightService.itemFlightCache.priceCathay = 0;
        }
        this.totalPriceAll(0);
    }
    checkAddCathayTime() {
        let now = new Date();
        let flightDT = this.parseDatetime(moment__WEBPACK_IMPORTED_MODULE_8__(this.departFlight.departTime).format("DD-MM-YYYY"), this.departFlight.departTimeDisplay);
        let hours = (flightDT - now) / 36e5;
        return hours > 6 ? true : false;
    }
    parseDatetime(date, time) {
        let dateObj = date.split("-");
        let dtStr = dateObj[1] + "/" + dateObj[0] + "/" + dateObj[2] + " " + time;
        return new Date(dtStr);
    }
    getCheckAirportDiChung() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAirportDiChung?airportCode_First=' + this._flightService.itemFlightCache.departCode + '&airportCode_Second=' + this._flightService.itemFlightCache.returnCode + '&internal_AirporFirst=' + se._flightService.itemFlightCache.dataBooking.fromPlace.internal +
                '&internal_AirporSecond=' + se._flightService.itemFlightCache.dataBooking.toPlace.internal + '&firstDepartTime=' + this.departFlight.departTime + '&secondDepartTime=' + (this.returnFlight ? this.returnFlight.departTime : ''),
            timeout: 180000, maxAttempts: 5, retryDelay: 20000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
            let objError = {
                page: "flightsearchresult",
                func: "selectTicket",
                message: response.statusMessage,
                content: response.body,
                type: "warning",
                param: JSON.stringify(options)
            };
            if (error) {
                error.page = "flightsearchresult";
                error.func = "selectTicket";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                se._flightService.itemFlightCache.isAirportFirst = jsondata.data.isAirportFirst;
                se._flightService.itemFlightCache.isAirportSecond = jsondata.data.isAirportSecond;
            }
        });
    }
    openLinkPromoCathay() {
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: 'https://www.ivivu.com/blog/2022/06/mua-bao-hiem-cathay-o-ivivu-trung-ngay-voucher-du-lich-xin/',
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#23BFD8'
                })
                    .subscribe((result) => {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    getSummaryBooking(data) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.resNo + "?" + new Date().getTime() + "&stepBooking=service",
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                if (error) {
                    error.page = "flightpaymentselect";
                    error.func = "getSummaryBooking";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
            });
        });
    }
    getHotelCity(ids) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlGet + "/hotelslist?hotelids=" + ids + "&page=1&pageSize=15",
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
            };
            requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                if (error) {
                    error.page = "flightsearchresult";
                    error.func = "hotelslist";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
            });
        });
    }
    getHotelCityPrice(key) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + "/api/contracting/HotelSearchReqContractMultiHotel",
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                body: JSON.stringify({ cacheKey: key }),
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                if (error) {
                    error.page = "flightsearchresult";
                    error.func = "HotelSearchReqContractMultiHotel";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
                else {
                    resolve(false);
                }
            });
        });
    }
    mapHotelInfo(dataHotelCity, dataHotelCityPrice, arrHotelPrice, arrHotelDetail, arrHotel) {
        return new Promise((resolve, reject) => {
            for (let index = 0; index < dataHotelCity.List.length; index++) {
                const elementHotel = dataHotelCity.List[index];
                let objhoteldetailmap = dataHotelCityPrice.HotelDetailData.filter((itemdetail) => { return itemdetail.HotelID == elementHotel.HotelId; });
                if (objhoteldetailmap && objhoteldetailmap.length > 0) {
                    elementHotel.hotelDetail = objhoteldetailmap[0];
                    let objhotelmap = dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary.filter((item) => { return item.HotelId == elementHotel.HotelId; });
                    if (objhotelmap && objhotelmap.length > 0) {
                        elementHotel.dataPrice = objhotelmap[0];
                        arrHotel.push(elementHotel);
                    }
                }
            }
            resolve(arrHotel);
        });
    }
    showAlertChoiceHotelCity() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let msg = 'Không thể tạo lại đơn hàng cũ.Vui lòng chọn lại vé khác!';
            let alert = yield se.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-choiceseat",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            this.goback();
                        }
                    },
                    {
                        text: 'Huỷ',
                        role: 'Cancel',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
FlightaddservicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightaddservice',
        template: __webpack_require__(/*! ./flightaddservice.page.html */ "./src/app/flightaddservice/flightaddservice.page.html"),
        styles: [__webpack_require__(/*! ./flightaddservice.page.scss */ "./src/app/flightaddservice/flightaddservice.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["ImageLoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["SearchHotel"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_10__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"],
        _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_17__["SafariViewController"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_18__["voucherService"]])
], FlightaddservicePage);



/***/ }),

/***/ "./src/app/hotelcityitem/hotelcityitem.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/hotelcityitem/hotelcityitem.module.ts ***!
  \*******************************************************/
/*! exports provided: HotelCityItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelCityItemPageModule", function() { return HotelCityItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hotelcityitem_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotelcityitem.page */ "./src/app/hotelcityitem/hotelcityitem.page.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");







let HotelCityItemPageModule = class HotelCityItemPageModule {
};
HotelCityItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]
        ],
        declarations: [_hotelcityitem_page__WEBPACK_IMPORTED_MODULE_5__["HotelCityItemPage"]],
        exports: [_hotelcityitem_page__WEBPACK_IMPORTED_MODULE_5__["HotelCityItemPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HotelCityItemPageModule);



/***/ }),

/***/ "./src/app/hotelcityitem/hotelcityitem.page.html":
/*!*******************************************************!*\
  !*** ./src/app/hotelcityitem/hotelcityitem.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "          <div [ngClass]=\"index == itemlen-1  ? 'div-content-hotel-city-item auto-width' : 'div-content-hotel-city-item' \" >\r\n              <div class=\"div-row-title view-row\"  (click)=\"itemHotelCityClick(item)\">\r\n                  <div class=\"div-icon\"><img src=\"../../assets/ic_flight/hotel.svg\"/></div>\r\n                  <div class=\"div-title-text p-left-4\">Ưu đãi giới hạn đặc biệt</div>\r\n              </div>\r\n\r\n              <div class=\"float-promo-hotel\"  (click)=\"itemHotelCityClick(item)\">\r\n                <div>Giá phòng đã áp dụng mã KM đặt kèm VMB</div>\r\n              </div>\r\n\r\n              <div class=\"div-hotel-item-info\"  (click)=\"itemHotelCityClick(item)\"> \r\n                  <div class=\"view-row m-l-12\">\r\n                    <div class=\"div-img-hotel\">\r\n                      <img class=\"img-item\" [src]=\"item.Avatar\" backgroundSize=\"cover\" spinner=\"true\" />\r\n                    </div>\r\n                    <div [ngClass]=\"index == itemlen-1  ? 'div-content-right v-align-center' : 'div-content-right v-align-center max-width-200' \">\r\n                        <div class=\"div-hotel-name\">\r\n                          <span>{{item.HotelName}} \r\n                            <span class=\"m-l-4 max-width-180\">\r\n                               <img *ngIf=\"item.RatingStar\" src=\"{{item.RatingStar}}\"/>\r\n                            </span> \r\n                          </span>\r\n                        </div>\r\n                        <div class=\"div-hotel-point v-align-center m-top-2\">\r\n                            <div *ngIf=\"item.Point>0\" class=\"view-row v-align-center\">\r\n                                <div class=\"m-top-5\">\r\n                                  <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{item.Point}}</ion-badge>\r\n                                </div>\r\n                                <div *ngIf=\"item.ReviewCount\" class=\"text-reviews m-l-4\">{{item.ReviewCount}} đánh giá</div>\r\n                              </div>\r\n                             \r\n                        </div>\r\n      \r\n                        <div class=\"div-hotel-address view-row\">\r\n                            <img class=\"img-location\" src=\"../../assets/imgs/location.svg\" />\r\n                            <div class=\"m-l-4 text-hidden\">{{item.Address}}</div>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                 \r\n                </div>\r\n\r\n                <div class=\"div-hotel-room\">\r\n                  <div *ngIf=\"item.hotelDetail && item.hotelDetail.RoomClasses  && item.hotelDetail.RoomClasses.length >0\">\r\n                      <div *ngFor=\"let itemRoomClass of item.hotelDetail.RoomClasses; let idx = index\">\r\n                          <div *ngIf=\"itemRoomClass.selected\">\r\n                            <div class=\"div-pax\">{{item.hotelDetail.SummaryFilter}} , {{itemRoomClass.TotalRoom}} phòng</div>\r\n                            <div class=\"div-room-name\">\r\n                              <span class=\"f-bold\">{{itemRoomClass.ClassName}} · <a class=\"link-change-room\" (click)=\"changeRoom(item)\">Đổi phòng</a> </span>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                 \r\n              </div>\r\n\r\n              <div class=\"div-price  m-l-12 m-top-4\">\r\n                  <div class=\"view-row\">\r\n                      <div class=\"div-price-show\">\r\n                          <div class=\"price-original\" >\r\n                            <span *ngIf=\"item.priceOriginalDisplay && item.priceOriginal > item.priceTotal\">{{item.priceOriginalDisplay}} VND</span>\r\n                            \r\n                          </div>\r\n                          <div class=\"price-total\" *ngIf=\"item.pricePromo\">{{item.pricePromo}} <span class=\"subfix\">VND</span></div>\r\n                      </div>\r\n                      <div class=\"div-button\">\r\n                          <ion-toggle style='--handle-height: 24px' class='button-add-hotel' mode='ios' [(ngModel)]=\"item.checkaddhotel\" checked itemid=\"{{item.HotelId}}\" (ionChange)=\"addHotelCityPrice($event)\"></ion-toggle>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n         \r\n          \r\n     "

/***/ }),

/***/ "./src/app/hotelcityitem/hotelcityitem.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/hotelcityitem/hotelcityitem.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p-l-8 {\n  padding-left: 8px;\n}\n\n.p-left-8 {\n  padding-left: 8px;\n}\n\n.p-left-4 {\n  padding-left: 4px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-flex .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n}\n\n.m-l-4 {\n  margin-left: 4px;\n}\n\n.max-width-180 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 180px;\n}\n\n.m-top-2 {\n  margin-top: 2px;\n}\n\n.m-top-4 {\n  margin-top: 4px;\n}\n\n.m-l-12 {\n  padding-left: 12px;\n}\n\n.f-bold {\n  font-weight: bold;\n}\n\n.view-row {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.auto-width {\n  width: auto !important;\n}\n\n.max-width-200 {\n  max-width: 200px;\n}\n\n.div-content-hotel-city-item {\n  width: 284px;\n  min-height: 329px;\n  margin-top: 19px;\n  padding: 19px 0 8px;\n  border-radius: 4px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  background-color: #feeec7;\n}\n\n.div-content-hotel-city-item .div-icon {\n  padding-left: 9px;\n}\n\n.div-content-hotel-city-item .div-hotel-item-info {\n  margin-top: 49px;\n}\n\n.div-content-hotel-city-item .div-row-title {\n  height: 21px;\n  font-size: 18px;\n  text-align: left;\n  color: #003c71;\n}\n\n.div-content-hotel-city-item .v-align-center {\n  align-items: center;\n}\n\n.div-content-hotel-city-item .text-sub {\n  font-size: 12px;\n  color: #828282;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  margin-bottom: 8px;\n}\n\n.div-content-hotel-city-item .div-img-hotel {\n  min-width: 59px;\n  width: 66px;\n  height: 76px;\n  position: relative;\n}\n\n.div-content-hotel-city-item .img-item {\n  height: 76px !important;\n  width: 59px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n}\n\n.div-content-hotel-city-item img-loader > img {\n  height: 76px;\n  width: 59px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n}\n\n.div-content-hotel-city-item .no-img-background {\n  background: #bdbdbd;\n}\n\n.div-content-hotel-city-item .div-content-right {\n  margin-left: 12px;\n}\n\n.div-content-hotel-city-item .float-promo-hotel {\n  position: absolute;\n  top: 70px;\n  left: 10px;\n  background-color: #9fc43a;\n  color: #fff;\n  font-size: 14px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 8px;\n  z-index: 11;\n  letter-spacing: -0.9px;\n}\n\n.div-content-hotel-city-item .float-promo-hotel:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 6px solid #5b721b;\n  border-left: 6px solid transparent;\n  border-bottom: none;\n}\n\n.div-content-hotel-city-item .text-catname {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin: 8px 0;\n}\n\n.div-content-hotel-city-item .div-point {\n  position: relative;\n  padding-bottom: 8px;\n}\n\n.div-content-hotel-city-item .div-point .d-flex {\n  display: flex;\n}\n\n.div-content-hotel-city-item .div-point .d-flex .text-recommend {\n  padding-left: 8px;\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .div-badge {\n  width: 32px;\n  height: 17px;\n  border-radius: 6px;\n  background-color: #a0c245;\n  color: #fff;\n  text-align: center;\n  padding-top: 1px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-content-hotel-city-item .div-point .div-text-point {\n  padding-left: 8px;\n}\n\n.div-content-hotel-city-item .div-point .text-point {\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .p-bottom-12 {\n  padding-bottom: 12px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef {\n  display: flex;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-avatar .img-chef {\n  width: 48px;\n  height: 48px;\n  -o-object-fit: fill;\n     object-fit: fill;\n  border-radius: 48px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n  justify-content: center;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .chef-name {\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .chef-office {\n  font-size: 12px;\n  color: #828282;\n  line-height: 21px;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .text-restanrant-name {\n  font-size: 12px;\n  color: #828282;\n  line-height: 14px;\n  letter-spacing: -0.24px;\n  font-weight: 600;\n}\n\n.div-content-hotel-city-item .div-price {\n  display: flex;\n  width: 100%;\n}\n\n.div-content-hotel-city-item .div-price .hot-deal {\n  width: 100%;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  line-height: 20px;\n  color: #e52822;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.div-content-hotel-city-item .div-price .text-price {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: right;\n  font-size: 27px;\n  letter-spacing: -0.27px;\n  color: #26bed6;\n  font-weight: 600;\n  padding-right: 8px;\n}\n\n.div-content-hotel-city-item .div-price .text-price .s-text {\n  font-size: 12px;\n  letter-spacing: -0.36px;\n  color: #26bed6;\n}\n\n.div-content-hotel-city-item .div-price .text-price .text-sub-price {\n  font-size: 13px;\n  line-height: 18px;\n  color: #4f4f4f;\n  text-align: right;\n  margin-bottom: -6px;\n  font-weight: 300;\n}\n\n.div-content-hotel-city-item .cls-badge {\n  color: #ffffff;\n  border-radius: 12px;\n  background-color: #9fc43a;\n  font-size: 14px;\n  text-align: center;\n  line-height: 10px;\n  letter-spacing: -0.4px;\n  padding-top: 5px;\n  min-width: 28px;\n}\n\n.div-content-hotel-city-item .text-reviews {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  text-align: left;\n  color: #333333;\n}\n\n.div-content-hotel-city-item .div-hotel-address {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: -0.34px;\n  text-align: left;\n  color: #828282;\n  padding-top: 4px;\n}\n\n.div-content-hotel-city-item .div-hotel-address .img-location {\n  width: 13px;\n  height: 13px;\n  margin-left: -2px;\n}\n\n.div-content-hotel-city-item .div-hotel-address .text-hidden {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.div-content-hotel-city-item .div-hotel-room {\n  flex-grow: 0;\n  margin: 7px 0 4px;\n  padding: 9px 15px;\n  background-color: #fff7e3;\n}\n\n.div-content-hotel-city-item .div-hotel-room .div-pax {\n  margin: 0 0 3px;\n  font-family: Helvetica;\n  font-size: 13px;\n  line-height: 1.45;\n  text-align: left;\n  color: #333333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 298px;\n  white-space: nowrap;\n}\n\n.div-content-hotel-city-item .div-hotel-room .link-change-room {\n  text-decoration: underline;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #f79321;\n  z-index: 8;\n  padding: 10px 0;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show {\n  width: 100%;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .price-original {\n  height: 21px;\n  font-size: 14px;\n  line-height: 1.45;\n  text-align: left;\n  color: #e32b2c;\n  text-decoration: line-through;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .price-total {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.45;\n  text-align: left;\n  color: var(--ion-color-primary);\n  margin-top: -6px;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .subfix {\n  font-size: 12px;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n}\n\n.div-content-hotel-city-item .div-price .div-button {\n  padding-right: 13px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9ob3RlbGNpdHlpdGVtL2hvdGVsY2l0eWl0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9ob3RlbGNpdHlpdGVtL2hvdGVsY2l0eWl0ZW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7QUNBUjs7QURFSTtFQUNJLGlCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxpQkFBQTtBQ0VSOztBREFJO0VBQ0ksYUFBQTtBQ0dSOztBREZRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSVo7O0FEQUk7RUFDSSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNJUjs7QURGSTtFQUNJLGVBQUE7QUNLUjs7QURISTtFQUNJLGVBQUE7QUNNUjs7QURKSTtFQUNJLGtCQUFBO0FDT1I7O0FETEk7RUFDSSxpQkFBQTtBQ1FSOztBRExJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1FSOztBRE5JO0VBQ0ksc0JBQUE7QUNTUjs7QURQSTtFQUNJLGdCQUFBO0FDVVI7O0FEUkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0FDV1I7O0FEVFE7RUFDSSxpQkFBQTtBQ1daOztBRFJRO0VBQ0ksZ0JBQUE7QUNVWjs7QURSUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVVo7O0FEUFE7RUFDSSxtQkFBQTtBQ1NaOztBRE5RO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNRWjs7QUROWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUWhCOztBRE5ZO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ1FoQjs7QUROWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDUWhCOztBRE5ZO0VBQ0ksbUJBQUE7QUNRaEI7O0FETFk7RUFDSSxpQkFBQTtBQ09oQjs7QURMWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQ09oQjs7QURMWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDT2hCOztBRExZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDT2hCOztBREpZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ01oQjs7QURMZ0I7RUFDSSxhQUFBO0FDT3BCOztBRExvQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDT3hCOztBREpnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTXBCOztBREhnQjtFQUNJLGlCQUFBO0FDS3BCOztBREZnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0lwQjs7QURGZ0I7RUFDSSxvQkFBQTtBQ0lwQjs7QUREZ0I7RUFDSSxhQUFBO0FDR3BCOztBREF3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtFQUNBLG1CQUFBO0FDRTVCOztBRENvQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNDeEI7O0FEQ3dCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNDNUI7O0FEQ3dCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDNUI7O0FEQ3dCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDNUI7O0FEUVk7RUFFSSxhQUFBO0VBQ0EsV0FBQTtBQ1BoQjs7QURTZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNQcEI7O0FEU2dCO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNScEI7O0FEVW9CO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1J4Qjs7QURVb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUnhCOztBRGNZO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDWmhCOztBRGNjO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNaaEI7O0FEZWM7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDYmhCOztBRGVnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNicEI7O0FEZ0JnQjtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2RwQjs7QURrQmM7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDaEJoQjs7QURrQmlCO0VBQ0csZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNqQnBCOztBRG9CaUI7RUFDRywwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2xCcEI7O0FEd0JnQjtFQUNJLFdBQUE7QUN0QnBCOztBRHVCb0I7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUNyQnhCOztBRHdCb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ3RCeEI7O0FEeUJvQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDdkJ4Qjs7QUQwQmdCO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQ3hCcEIiLCJmaWxlIjoic3JjL2FwcC9ob3RlbGNpdHlpdGVtL2hvdGVsY2l0eWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAucC1sLTh7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAucC1sZWZ0LTh7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAucC1sZWZ0LTR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICB9XHJcbiAgICAuZC1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmRpdi1zdGFye1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubS1sLTR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIH1cclxuICAgIC5tYXgtd2lkdGgtMTgwe1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgfVxyXG4gICAgLm0tdG9wLTJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gICAgLm0tdG9wLTR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgfVxyXG4gICAgLm0tbC0xMntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZi1ib2xke1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC52aWV3LXJvd3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYXV0by13aWR0aHtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLm1heC13aWR0aC0yMDB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICAgIC5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW17XHJcbiAgICAgICAgd2lkdGg6IDI4NHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMyOXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTlweCAwIDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWVlYzc7XHJcblxyXG4gICAgICAgIC5kaXYtaWNvbntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA5cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGl2LWhvdGVsLWl0ZW0taW5mb3tcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1yb3ctdGl0bGV7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwM2M3MTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC52LWFsaWduLWNlbnRlcntcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LXN1YntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGl2LWltZy1ob3RlbHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTlweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWctaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWctbG9hZGVyID4gaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1OXB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5vLWltZy1iYWNrZ3JvdW5ke1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2JkYmRiZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRpdi1jb250ZW50LXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsb2F0LXByb21vLWhvdGVse1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmM0M2E7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjlweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbG9hdC1wcm9tby1ob3RlbDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMjJweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjNWI3MjFiO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1jYXRuYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5kaXYtcG9pbnR7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgLmQtZmxleHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQtcmVjb21tZW5ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kaXYtYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjMjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuZGl2LXRleHQtcG9pbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC50ZXh0LXBvaW50e1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wLWJvdHRvbS0xMntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmRpdi1jaGVme1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY2hlZi1hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbWctY2hlZntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWYtZGVzY3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVmLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVmLW9mZmljZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtcmVzdGFucmFudC1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRpdi1wcmljZXtcclxuICAgICAgICAgICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5ob3QtZGVhbHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNTI4MjI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dC1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjdweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnMtdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LXN1Yi1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC5jbHMtYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZjNDNhO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjhweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRleHQtcmV2aWV3c3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmRpdi1ob3RlbC1hZGRyZXNze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW1nLWxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dC1oaWRkZW57XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmRpdi1ob3RlbC1yb29te1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMCA0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA5cHggMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZTM7XHJcblxyXG4gICAgICAgICAgICAgICAgIC5kaXYtcGF4e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjk4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIC5saW5rLWNoYW5nZS1yb29te1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y3OTMyMTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZGl2LXByaWNle1xyXG5cclxuICAgICAgICAgICAgICAgIC5kaXYtcHJpY2Utc2hvd3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAucHJpY2Utb3JpZ2luYWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlMzJiMmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLXRvdGFse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJmaXh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRpdi1idXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIiwiLnAtbC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5wLWxlZnQtOCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ucC1sZWZ0LTQge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZC1mbGV4IC5kaXYtc3RhciB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tLWwtNCB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5tYXgtd2lkdGgtMTgwIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1heC13aWR0aDogMTgwcHg7XG59XG5cbi5tLXRvcC0yIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubS10b3AtNCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLm0tbC0xMiB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbn1cblxuLmYtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udmlldy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmF1dG8td2lkdGgge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWF4LXdpZHRoLTIwMCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0ge1xuICB3aWR0aDogMjg0cHg7XG4gIG1pbi1oZWlnaHQ6IDMyOXB4O1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBwYWRkaW5nOiAxOXB4IDAgOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWVjNztcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaG90ZWwtaXRlbS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogNDlweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1yb3ctdGl0bGUge1xuICBoZWlnaHQ6IDIxcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC52LWFsaWduLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC50ZXh0LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWltZy1ob3RlbCB7XG4gIG1pbi13aWR0aDogNTlweDtcbiAgd2lkdGg6IDY2cHg7XG4gIGhlaWdodDogNzZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuaW1nLWl0ZW0ge1xuICBoZWlnaHQ6IDc2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDU5cHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gaW1nLWxvYWRlciA+IGltZyB7XG4gIGhlaWdodDogNzZweDtcbiAgd2lkdGg6IDU5cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5uby1pbWctYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtY29udGVudC1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZmxvYXQtcHJvbW8taG90ZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzBweDtcbiAgbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmYzQzYTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgei1pbmRleDogMTE7XG4gIGxldHRlci1zcGFjaW5nOiAtMC45cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5mbG9hdC1wcm9tby1ob3RlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAyMnB4O1xuICBib3JkZXItdG9wOiA2cHggc29saWQgIzViNzIxYjtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLnRleHQtY2F0bmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmQtZmxleCAudGV4dC1yZWNvbW1lbmQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kaXYtYmFkZ2Uge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGMyNDU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZGl2LXRleHQtcG9pbnQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAudGV4dC1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAucC1ib3R0b20tMTIge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZGl2LWNoZWYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1hdmF0YXIgLmltZy1jaGVmIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtZGVzYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtZGVzYyAuY2hlZi1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmRpdi1jaGVmIC5jaGVmLWRlc2MgLmNoZWYtb2ZmaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1kZXNjIC50ZXh0LXJlc3RhbnJhbnQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC5ob3QtZGVhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLnRleHQtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI3cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLnRleHQtcHJpY2UgLnMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC50ZXh0LXByaWNlIC50ZXh0LXN1Yi1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmNscy1iYWRnZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZjNDNhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG1pbi13aWR0aDogMjhweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLnRleHQtcmV2aWV3cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaG90ZWwtYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWhvdGVsLWFkZHJlc3MgLmltZy1sb2NhdGlvbiB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWhvdGVsLWFkZHJlc3MgLnRleHQtaGlkZGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaG90ZWwtcm9vbSB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgbWFyZ2luOiA3cHggMCA0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2UzO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWhvdGVsLXJvb20gLmRpdi1wYXgge1xuICBtYXJnaW46IDAgMCAzcHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAyOThweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1ob3RlbC1yb29tIC5saW5rLWNoYW5nZS1yb29tIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIGNvbG9yOiAjZjc5MzIxO1xuICB6LWluZGV4OiA4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLmRpdi1wcmljZS1zaG93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLmRpdi1wcmljZS1zaG93IC5wcmljZS1vcmlnaW5hbCB7XG4gIGhlaWdodDogMjFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNlMzJiMmM7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC5kaXYtcHJpY2Utc2hvdyAucHJpY2UtdG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLXRvcDogLTZweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAuZGl2LXByaWNlLXNob3cgLnN1YmZpeCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLmRpdi1idXR0b24ge1xuICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hotelcityitem/hotelcityitem.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/hotelcityitem/hotelcityitem.page.ts ***!
  \*****************************************************/
/*! exports provided: HotelCityItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelCityItemPage", function() { return HotelCityItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");










let HotelCityItemPage = class HotelCityItemPage {
    constructor(navCtrl, gf, imageLoaderConfig, _searchhotel, sanitizer, _flightService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.imageLoaderConfig = imageLoaderConfig;
        this._searchhotel = _searchhotel;
        this.sanitizer = sanitizer;
        this._flightService = _flightService;
        var se = this;
    }
    itemHotelCityClick(item) {
        if (item && item.defaultHotelData) {
            this.showHotelCityDetail(item.defaultHotelData);
        }
        else {
            this.loadDataHotelDetail(item);
        }
    }
    loadDataHotelDetail(item) {
        var se = this;
        se.gf.showLoading();
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + "/mhoteldetail/" + item.HotelId;
        var options = {
            method: 'POST',
            url: url,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "hoteldetail",
                    func: "loaddata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "hoteldetail";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                item.defaultHotelData = jsondata;
                se.showHotelCityDetail(item.defaultHotelData);
            }
            se.gf.hideLoading();
        });
    }
    showHotelCityDetail(data) {
        var se = this;
        if (data && data.Rating) {
            switch (data.Rating) {
                case 50:
                    data.RatingStar = "../../assets/star/ic_star_5.svg";
                    break;
                case 45:
                    data.RatingStar = "../../assets/star/ic_star_4.5.svg";
                    break;
                case 40:
                    data.RatingStar = "../../assets/star/ic_star_4.svg";
                    break;
                case 35:
                    data.RatingStar = "../../assets/star/ic_star_3.5.svg";
                    break;
                case 30:
                    data.RatingStar = "../../assets/star/ic_star_3.svg";
                    break;
                case 25:
                    data.RatingStar = "../../assets/star/ic_star_2.5.svg";
                    break;
                case 20:
                    data.RatingStar = "../../assets/star/ic_star_2.svg";
                    break;
                case 15:
                    data.RatingStar = "../../assets/star/ic_star_1.5.svg";
                    break;
                case 10:
                    data.RatingStar = "../../assets/star/ic_star_1.svg";
                    break;
                case 5:
                    data.RatingStar = "../../assets/star/ic_star_0.5.svg";
                    break;
                default:
                    break;
            }
        }
        let link = "https://maps.google.com/maps?q=" + data.Code + "&hl=es;z=14&amp&output=embed";
        data.linkGoogleMap = se.sanitizer.bypassSecurityTrustResourceUrl(link);
        se._searchhotel.itemHotelCityDetail = data;
        se.navCtrl.navigateForward('/hotelcityitemdetail');
    }
    changeRoom(item) {
        this._flightService.itemHotelCityChangeRoom.emit(1);
        setTimeout(() => {
            item.checkaddhotel = true;
            let objselect = item.hotelDetail.RoomClasses.filter((item) => { return item.selected; });
            if (objselect && objselect.length == 0) {
                item.hotelDetail.RoomClasses[0].selected = true;
            }
            this._searchhotel.listHotelCityRoomUpgrade = item.hotelDetail.RoomClasses;
            this._searchhotel.hotelCityId = item.HotelId;
            this.navCtrl.navigateForward('/hotelcityroomupgrade');
        }, 50);
    }
    addHotelCityPrice(e) {
        if (e.currentTarget.checked) {
            this._flightService.itemHotelCityAddHotel.emit({ id: e.currentTarget.itemid, value: true });
        }
        else {
            this._flightService.itemHotelCityAddHotel.emit({ id: e.currentTarget.itemid, value: false });
            this._flightService.itemFlightCache.returnDCPlace = null;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HotelCityItemPage.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HotelCityItemPage.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HotelCityItemPage.prototype, "itemlen", void 0);
HotelCityItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hotelcityitem',
        template: __webpack_require__(/*! ./hotelcityitem.page.html */ "./src/app/hotelcityitem/hotelcityitem.page.html"),
        styles: [__webpack_require__(/*! ./hotelcityitem.page.scss */ "./src/app/hotelcityitem/hotelcityitem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_4__["ImageLoaderConfigService"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_7__["SearchHotel"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_9__["flightService"]])
], HotelCityItemPage);



/***/ })

}]);
//# sourceMappingURL=flightaddservice-flightaddservice-module.js.map