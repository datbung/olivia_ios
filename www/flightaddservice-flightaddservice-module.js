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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightaddservice_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddservicePage"]]
    })
], FlightaddservicePageModule);



/***/ }),

/***/ "./src/app/flightaddservice/flightaddservice.page.html":
/*!*************************************************************!*\
  !*** ./src/app/flightaddservice/flightaddservice.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Dịch vụ cộng thêm</div>\n          </div>\n\n          <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n        </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content class=\"flight-add-service-content\">\n    <div class=\"p-16\">\n        <!-- Chọn hành lý -->\n        <div class=\"div-item-service div-luggage\" *ngIf=\"(departLuggage && departLuggage.length >0) || (returnLuggage && returnLuggage.length >0) || (departConditionInfo && departConditionInfo.baggageHanded ) || (returnConditionInfo && returnConditionInfo.baggageHanded ) \">\n\n            <div class=\"d-flex m-bottom-6\">\n                <div class=\"div-icon p-right-12\">\n                    <img class=\"img-icon\" src=\"./assets/ic_flight/ic_luggage.svg\">\n                </div>\n                <div class=\"div-title\">Thông tin hành lý</div>\n            </div>\n\n            <div class=\"div-desc\" *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded ) || (returnConditionInfo && returnConditionInfo.baggageHanded )\">\n    \n                <div class=\"div-sub-title m-bottom-6\">Xách tay</div>\n\n                <div *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded && departConditionInfo.baggageHanded.length <10) || (returnConditionInfo && returnConditionInfo.baggageHanded && returnConditionInfo.baggageHanded.length <10)\" class=\"d-flex\">\n                   \n                    <div class=\"text-desc m-bottom-6 p-right-4\" *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded && departConditionInfo.baggageHanded.length <10) else havenotdepartluggage\">Chiều đi: <span class=\"text-bold\">{{ departConditionInfo.baggageHanded }}/1 khách.</span></div>\n                   \n\n                    <div *ngIf=\"(returnConditionInfo && returnConditionInfo.baggageHanded && returnConditionInfo.baggageHanded.length <10) else havenotreturnluggage\">\n                        <div class=\"text-desc\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.baggageHanded }}/1 khách.</span></div>\n                    </div>\n                   \n                </div>\n                \n            </div>\n            <div *ngIf=\"(departLuggage && departLuggage.length >0) || (returnLuggage && returnLuggage.length >0) \">\n                <div class=\"div-sub-title m-top-16 m-bottom-6 d-flex\">\n                    <div class=\"div-width-100\">Ký gửi</div>\n                    <div class=\"div-width-100 text-change\" *ngIf=\"!showbuttonluggage\" (click)=\"buyLuggage()\">Thay đổi</div>\n                    \n                </div>\n                \n                <div class=\"div-desc\" *ngIf=\"(showbuttonluggage &&  !( (departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) || (returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4))) else departluggageinclude\">\n                    Mua ngay, tiết kiệm đến 40% so với mua tại quầy\n                </div>\n                <div class=\"d-flex\">\n                    <ng-template #departluggageinclude >\n                        <div class=\"d-flex\">\n                            <div *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && !hasdepartluggage) else nodepartlugsign\"  class=\"div-width-100\">\n                                <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                            </div>\n                            <div *ngIf=\"!(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) && !hasdepartluggage && showbuttonluggage\"  class=\"div-width-100\">\n                                <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">Không có.</span></div>\n                            </div>\n\n                            <div [ngClass]=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) ?  'div-width-100 ' : 'div-width-100'\" *ngIf=\"!showbuttonluggage && (departLuggage && departLuggage.length >0) && hasdepartluggage\">\n                                <div class=\"text-desc m-bottom-6\">Chiều đi</div>\n                                <div class=\"div-desc\" *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && hasdepartluggage)\"><span class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                                <div *ngFor=\"let itemlug of departLuggage\">\n                                    <div *ngIf=\"itemlug.quantity >0\" class=\"div-desc\">\n                                        {{ itemlug.quantity}} x <span class=\"text-bold\">{{itemlug.weight}} kg</span>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && roundtrip && !hasreturnluggage) else noreturnlugsign\" class=\"div-width-100\">\n                                <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                            </div>\n                            <div *ngIf=\"!(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) && !hasreturnluggage && showbuttonluggage && roundtrip\" class=\"div-width-100\">\n                                <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">Không có.</span></div>\n                            </div>\n\n                            <div [ngClass]=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4)? 'div-width-100 ' : 'div-width-100'\" *ngIf=\"!showbuttonluggage && (returnLuggage && returnLuggage.length >0) && hasreturnluggage && roundtrip\">\n                                <div class=\"text-desc m-bottom-6\">Chiều về</div>\n                                <div class=\"div-desc\" *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && hasreturnluggage)\"><span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                                <div *ngFor=\"let itemlug of returnLuggage\">\n                                    <div *ngIf=\"itemlug.quantity >0\"  class=\"div-desc\">\n                                        {{ itemlug.quantity}} x <span class=\"text-bold\">{{itemlug.weight}} kg</span>\n                                    </div>\n                                </div>\n                                \n                            </div>\n\n                        </div>\n                        \n                    </ng-template>\n                </div>\n              \n    \n                <div class=\"div-right m-top-16\" (click)=\"buyLuggage()\" *ngIf=\"showbuttonluggage else showluggage\">\n                    <div class=\"div-button\">\n                        Thêm hành lý <img class=\"p-left-10\" src=\"../../assets/ic_flight/vector_orange.svg\">\n                    </div>\n                </div>\n              \n            </div>\n\n            <div *ngIf=\"((departConditionInfo &&departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 ) || (returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) )&& !(departLuggage && departLuggage.length >0) && !(returnLuggage && returnLuggage.length >0)\">\n                <div class=\"div-sub-title m-top-16 m-bottom-6\">\n                    <div class=\"div-width-100\">Ký gửi</div>\n                </div>\n                 <div class=\"d-flex m-top-6\">\n                        <div *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) else nodepartlugsign\">\n                            <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                        </div>\n                        <div *ngIf=\"!(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) && !hasdepartluggage\">\n                            <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">Không có.</span></div>\n                        </div>\n\n                        <div *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && roundtrip) else noreturnlugsign\">\n                            <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n                        </div>\n                        <div *ngIf=\"!(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) && !hasreturnluggage && roundtrip\">\n                            <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">Không có.</span></div>\n                        </div>\n                </div>\n            </div>\n            \n        </div>\n        <!-- Chọn chỗ ngồi -->\n        <div class=\"div-item-service div-seat m-top-16\" *ngIf=\"allowchoiceseat\">\n            <div class=\"d-flex m-bottom-6\">\n                <div class=\"div-icon p-right-12\">\n                    <img class=\"img-icon img-seat\" src=\"./assets/ic_flight/ic_seat.svg\">\n                </div>\n                <div class=\"div-title div-width-100\">Chọn chỗ ngồi</div>\n                <div class=\"div-width-100 text-change\" *ngIf=\"listdepartseatselected || listreturnseatselected\" (click)=\"buySeat()\">Thay đổi</div>\n            </div>\n\n            <div class=\"div-desc\" *ngIf=\"(!listdepartseatselected && !listreturnseatselected) && allowchoiceseat\">\n                Chọn trước chỗ đẹp cho chuyến đi thoải mái\n            </div>\n\n            <div class=\"div-right m-top-16\" (click)=\"buySeat()\" *ngIf=\"((!listdepartseatselected && !listreturnseatselected) && allowchoiceseat) else hadchosedseat\">\n                <div class=\"div-button\">\n                    Chọn chỗ ngồi<img class=\"p-left-10\" src=\"../../assets/ic_flight/vector_orange.svg\">\n                </div>\n            </div>\n            <ng-template #hadchosedseat>\n                <div class=\"d-flex m-top-6\">\n                    <div class=\"div-width-100\">\n                        <div class=\"text-desc m-bottom-6\">Chiều đi</div>\n                        <div class=\"text-bold\" *ngIf=\"hasdepartseat && listdepartseatselected\">\n                            {{listdepartseatselected}}\n                        </div>\n                        <div class=\"text-bold\" *ngIf=\"hasdepartseat && !listdepartseatselected\">\n                            Chưa chọn\n                        </div>\n                        <div class=\"text-bold\" *ngIf=\"!hasdepartseat\">\n                            Không cho chọn ghế\n                        </div>\n                    </div>\n                    <div class=\"div-width-100\" *ngIf=\"roundtrip\">\n                        <div class=\"text-desc m-bottom-6\">Chiều về</div>\n                        <div class=\"text-bold\"  *ngIf=\"hasreturnseat && listreturnseatselected\">\n                            {{listreturnseatselected}}\n                        </div>\n                        <div class=\"text-bold\" *ngIf=\"hasreturnseat && !listreturnseatselected\">\n                            Chưa chọn\n                        </div>\n                        <div class=\"text-bold\" *ngIf=\"!hasreturnseat && roundtrip\">\n                            Không cho chọn ghế\n                        </div>\n                    </div>\n                </div>\n            </ng-template>\n        </div>\n        <div *ngIf=\"(loadHotelCityDone || (_flightService.itemFlightCache.itemsFlightCityHotel && _flightService.itemFlightCache.itemsFlightCityHotel.length >0)) else loadinghotelcity\">\n            <div class=\"div-hotel-city\" *ngIf=\"_flightService.itemFlightCache.itemsFlightCityHotel && _flightService.itemFlightCache.itemsFlightCityHotel.length >0\">\n                <div class=\"div-wrap-slide\">\n                    <div class=\"div-slide-item\" *ngFor=\"let item of _flightService.itemFlightCache.itemsFlightCityHotel; let idx = index\">\n                          <app-hotelcityitem [item]=\"item\" [index]=\"idx\" [itemlen]=\"_flightService.itemFlightCache.itemsFlightCityHotel.length\"></app-hotelcityitem>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <ng-template #loadinghotelcity>\n            <div class=\"div-item-service m-top-16\">\n                <div class=\" d-flex\">\n                    <ion-skeleton-text animated class=\"text-menu\" style=\"height: 16px; margin: 0 8px;\"></ion-skeleton-text>\n                </div>\n                <div class=\"text-quantity m-8\">\n                        <div class=\"d-flex \">\n                            <div><ion-skeleton-text class=\"div-100\" animated  style=\"height: 76px; width: 59px\"></ion-skeleton-text></div>\n                            <div class=\"div-width-100 m-left-12\">\n                                <ion-skeleton-text class=\"div-hotelname\" animated  style=\"height: 16px;width: 100%;margin-top: 8px\"></ion-skeleton-text>\n                                <ion-skeleton-text class=\"div-point\" animated  style=\"height: 16px;width: 50%;margin-top: 8px\"></ion-skeleton-text>\n                                <ion-skeleton-text class=\"div-address\" animated  style=\"height: 16px;width: 75%;margin-top: 8px\"></ion-skeleton-text>\n                            </div>\n                        </div>\n                        <ion-skeleton-text class=\"text-room-name\" animated  style=\"height: 32px;width: 100%;margin-top: 16px\"></ion-skeleton-text>\n                        <ion-skeleton-text class=\"text-price\" animated  style=\"height: 32px;width: 100%;margin-top: 16px\"></ion-skeleton-text>\n                </div>\n            </div>\n        </ng-template>\n        \n             <!-- thêm đưa đón -->\n             <div *ngIf=\"_flightService.itemFlightCache.isAirportFirst || _flightService.itemFlightCache.isAirportSecond\" class=\"div-item-service div-seat m-top-16\" >\n                <div class=\"d-flex m-bottom-6\">\n                    <div class=\"div-icon p-right-12\">\n                        <img class=\"img-icon img-seat\" src=\"./assets/ic_flight/car.svg\">\n                    </div>\n                    <div class=\"div-title div-width-100\">Thêm đưa đón</div>\n                    <div class=\"div-width-100 text-change\" *ngIf=\"listDiChung\" (click)=\"addDichung(1)\">Thay đổi</div>\n                </div>\n    \n                <div *ngIf=\"!listDiChung\" class=\"div-desc\">\n                    Đặt trước đưa đón cho chuyến đi thêm nhẹ nhàng\n                </div>\n    \n                <div class=\"div-right m-top-16\" *ngIf=\"!listDiChung else haddichung\" (click)=\"addDichung(0)\" >\n                    <div class=\"div-button\">\n                        Thêm đưa đón<img class=\"p-left-10\" src=\"../../assets/ic_flight/vector_orange.svg\">\n                    </div>\n                </div>\n                <ng-template #haddichung>\n                    <div class=\"d-flex m-top-6\">\n                        <div *ngIf=\"_flightService.itemFlightCache.departCity && listDiChung.PhaseGo\" class=\"div-width-100\">\n                            <div class=\"text-desc m-bottom-6\">Tại {{_flightService.itemFlightCache.departCity}}</div>\n                            <div>\n                                <span class=\"text-place\">\n                                    Đi: <span class=\"text-place bold\">\n                                        {{listDiChung.PhaseGo.pickUpTime.text}} → {{listDiChung.PhaseGo.dropOffTime.text}}\n                                    </span>\n                                </span>\n                            </div>\n    \n                            <div *ngIf=\"listDiChung.PhaseGo_RoundTrip\">\n                                <span class=\"text-place\">\n                                    Về: <span class=\"text-place bold\">\n                                        {{listDiChung.PhaseGo_RoundTrip.pickUpTime.text}} → {{listDiChung.PhaseGo_RoundTrip.dropOffTime.text}}\n                                    </span>\n                                </span>\n                            </div>\n                        </div>\n                        <div *ngIf=\"_flightService.itemFlightCache.returnCity && listDiChung.PhaseReturn\"  class=\"div-width-100\">\n                            <div  class=\"text-desc m-bottom-6\">Tại {{_flightService.itemFlightCache.returnCity}}</div>\n                            <div *ngIf=\"listDiChung.PhaseReturn\">\n                                <span class=\"text-place\">\n                                    Đi: <span class=\"text-place bold\">\n                                       {{listDiChung.PhaseReturn.pickUpTime.text}} → {{listDiChung.PhaseReturn.dropOffTime.text}}\n                                    </span>\n                                </span>\n                            </div>\n    \n                            <div *ngIf=\"listDiChung.PhaseReturn_RoundTrip\">\n                                <span class=\"text-place\">\n                                    Về: <span class=\"text-place bold\">\n                                        {{listDiChung.PhaseReturn_RoundTrip.pickUpTime.text}} → {{listDiChung.PhaseReturn_RoundTrip.dropOffTime.text}}\n                                    </span>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                </ng-template>\n            </div>\n             <!-- thêm bao hiem -->\n        <div *ngIf=\"returnFlight\">\n            <div *ngIf=\"_flightService.itemFlightCache.dataBooking.fromPlace.internal!=0 && _flightService.itemFlightCache.dataBooking.toPlace.internal!=0 && priceCathay && checkAddCathayTime() && !isExtenal && !departFlight.stops && !returnFlight.stops\" class=\"div-item-service div-seat m-top-16\">\n                <div class=\"d-flex m-bottom-6\"> \n                    <div class=\"div-icon p-right-12\">\n                        <img class=\"img-icon img-seat\" src=\"./assets/logo/logo_1.svg\">\n                    </div>\n                    <div (click)=\"showinfoCathay()\" class=\"div-title div-width-100\">Bảo hiểm trễ chuyến</div>\n                  </div>\n                <div  class=\"div-desc font-weight-600\">\n                    Quyền lợi trễ chuyến bay từ 350.000vnđ/lần. Yêu cầu bồi thường trực tuyến nhanh chóng tức thời <u  class=\"text-seen\" (click)=\"noteCathay()\">Xem quy định</u> \n                </div>\n                <div class=\"d-flex\">\n                    <span class=\"price-total\">{{gf.numberToCurrency(priceCathay, '.')}} <span class=\"price-vnd m-top-3\">VND</span></span>\n                    <div>\n                        <ion-toggle (ionChange)=\"toggleCathay($event)\" class=\"ion-toggle\" mode='ios' ></ion-toggle>\n                    </div>\n                \n                  </div>\n             \n            </div>\n        </div>\n        <div *ngIf=\"!returnFlight\">\n            <div *ngIf=\"_flightService.itemFlightCache.dataBooking.fromPlace.internal!=0 && priceCathay && checkAddCathayTime() && !isExtenal && !departFlight.stops\" class=\"div-item-service div-seat m-top-16\">\n                <div class=\"d-flex m-bottom-6\"> \n                    <div class=\"div-icon p-right-12\">\n                        <img class=\"img-icon img-seat\" src=\"./assets/logo/logo_1.svg\">\n                    </div>\n                    <div (click)=\"showinfoCathay()\" class=\"div-title div-width-100\">Bảo hiểm trễ chuyến</div>\n                  </div>\n                <div  class=\"div-desc font-weight-600\">\n                    Quyền lợi trễ chuyến bay từ 350.000vnđ/lần. Yêu cầu bồi thường trực tuyến nhanh chóng tức thời <u (click)=\"noteCathay()\" class=\"text-seen\">Xem quy định</u> \n                </div>\n                <div class=\"d-flex\">\n                    <span class=\"price-total\">{{gf.numberToCurrency(priceCathay, '.')}} <span class=\"price-vnd m-top-3\">VND</span></span>\n                    <div>\n                        <ion-toggle (ionChange)=\"toggleCathay($event)\" class=\"ion-toggle\" mode='ios' ></ion-toggle>\n                    </div>\n                \n                  </div>\n             \n            </div>\n        </div>\n      \n        <div class=\"div-split\" *ngIf=\"(departLuggage && departLuggage.length >0) || (returnLuggage && returnLuggage.length >0) || ((!listdepartseatselected && !listreturnseatselected) && allowchoiceseat) || (departConditionInfo && departConditionInfo.baggageHanded ) || (returnConditionInfo && returnConditionInfo.baggageHanded )\"></div>\n\n        <div class=\"div-flight-info\">\n            <div class=\"flight-depart-return div-sub-title\">\n                {{departdisplay}} <span class=\"div-flight-inout\">\n                    <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"roundtrip else oneway\">\n                    <ng-template #oneway>\n                        <img class=\"img-flight-inout div-oneway\" src=\"./assets/imgs/ic_arrow_right.svg\">\n                    </ng-template>\n                </span> {{returndisplay}}\n            </div>\n\n            <div class=\"div-sub-title m-top-16 m-bottom-8\"  *ngIf=\"departFlight\">\n                {{departtimedisplay}}\n            </div>\n\n            <div class=\"div-flight-detail d-flex\" *ngIf=\"departFlight\">\n                <div class=\"div-logo\">\n                    <img class=\"logo-vj\" *ngIf=\"departFlight.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                    <img *ngIf=\"departFlight.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                    <img class=\"logo-vna\" *ngIf=\"departFlight.airlineCode == 'VietnamAirlines' && !departFlight.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                    <img class=\"img-logo\" *ngIf=\"departFlight.operatedBy && departFlight.urlLogo\" [src]=\"departFlight.urlLogo\">\n                    <img *ngIf=\"departFlight.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                </div>\n                <div class=\"div-airline-name\">\n                    <div class=\"text-airline\">{{departFlight.airline}}</div>\n                    <div class=\"text-sub-airline\">\n                        <div *ngIf=\"!departFlight.stops else overstop\">{{ departFlight.ticketType }} - Bay thẳng</div>\n                        <ng-template #overstop>Chặng dừng</ng-template>\n                    </div>\n\n                    <div *ngIf=\"departFlight.operatedBy\" class=\"text-operatedBy\">{{departFlight.operatedBy}}</div>\n                </div>\n\n                <div class=\"div-flight-time\">\n                    <div class=\"div-time d-flex\">\n                        <div class=\"depart-time\">{{departtime_depart}}</div>\n                        <img class=\"img-arrow\" src=\"./assets/imgs/ic_arrow_right.svg\">\n                        <div class=\"landing-time\">{{landingtime_depart}}</div>\n                    </div>\n\n                    <div class=\"div-location d-flex\">\n                        {{departlocationdisplay}}\n                    </div>\n                </div>\n                \n            </div>\n\n            <div class=\"div-flight-condition d-flex\" *ngIf=\"departConditionInfo\">\n                <div class=\"div-width-150 d-flex\">\n                    <div class=\"div-icon\" *ngIf=\"((departConditionInfo && (!departConditionInfo.ticketRefund || departConditionInfo.ticketRefund.indexOf('Không') != -1 )) || !departConditionInfo ) else departIconRefund\">\n                        <img class=\"img-info\" src=\"./assets/ic_flight/icon_info_gray.svg\">\n                    </div>\n                    <ng-template #departIconRefund>\n                        <div class=\"div-icon\">\n                            <img class=\"img-info\" src=\"./assets/ic_flight/icon_action_check_circle.svg\">\n                        </div>\n                    </ng-template>\n                    <!-- <div class=\"div-text-refund\" >{{ departConditionInfo.ticketRefund}}</div> -->\n                    <div class=\"div-text-refund\" *ngIf=\"( (departConditionInfo && (!departConditionInfo.ticketRefund || departConditionInfo.ticketRefund.indexOf('Không') != -1)) || !departConditionInfo ) else returnrefund\">Không hoàn huỷ</div>\n                    <ng-template #returnrefund>\n                        <div class=\"div-text-refund\" >Có thể hoàn huỷ</div>\n                    </ng-template>\n                </div>\n                <div class=\"div-width-150 d-flex\">\n                    <div class=\"div-icon\" *ngIf=\"((departConditionInfo && departConditionInfo.changeDepartTime.indexOf('Không') != -1 ) || !departConditionInfo ) else departIconChangeDepartTime\">\n                       <img src=\"./assets/ic_flight/icon_info_gray.svg\">\n                    </div>\n                    <ng-template #departIconChangeDepartTime>\n                        <div class=\"div-icon\">\n                            <img class=\"img-info\" src=\"./assets/ic_flight/icon_action_check_circle.svg\">\n                        </div>\n                    </ng-template>\n                    <!-- <div [ngClass]=\"( (departConditionInfo && departConditionInfo.changeDepartTime.indexOf('Không') != -1) || !departConditionInfo) ? 'div-text-changeflight not-allow': 'div-text-refund'\" >{{ departConditionInfo.changeDepartTime}}</div> -->\n                    <div class=\"div-text-changeflight not-allow\" *ngIf=\"((departConditionInfo && departConditionInfo.changeDepartTime.indexOf('Không') != -1 ) || !departConditionInfo ) else departChangeDepartTime\">Không đổi lịch bay</div>\n                    <ng-template #departChangeDepartTime>\n                        <div class=\"div-text-changeflight\" >Có thể đổi lịch bay</div>\n                    </ng-template>\n                </div>\n            </div>\n\n\n            <div class=\"div-sub-title m-top-16 m-bottom-8\" *ngIf=\"returnFlight\">\n                {{returntimedisplay}}\n            </div>\n\n            <div class=\"div-flight-detail d-flex\" *ngIf=\"returnFlight\">\n                <div class=\"div-logo\">\n                    <img class=\"logo-vj\" *ngIf=\"returnFlight.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                    <img *ngIf=\"returnFlight.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                    <img class=\"logo-vna\" *ngIf=\"returnFlight.airlineCode == 'VietnamAirlines' && !returnFlight.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                    <!-- <img *ngIf=\"returnFlight.airlineCode == 'VietnamAirlines' && returnFlight.operatedBy\" src=\"./assets/ic_airticket/ic_pacific.png\"> -->\n                    <img class=\"img-logo\" *ngIf=\"returnFlight.operatedBy && returnFlight.urlLogo\" [src]=\"returnFlight.urlLogo\">\n                    <img *ngIf=\"returnFlight.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                </div>\n                <div class=\"div-airline-name\">\n                    <div class=\"text-airline\">{{returnFlight.airline}}</div>\n                    <div class=\"text-sub-airline\">\n                        <div *ngIf=\"!returnFlight.stops else overstop\">{{ returnFlight.ticketType }} - Bay thẳng</div>\n                        <ng-template #overstop>Chặng dừng</ng-template>\n                    </div>\n\n                    <div *ngIf=\"returnFlight.operatedBy\" class=\"text-operatedBy\">{{returnFlight.operatedBy}}</div>\n                </div>\n\n                <div class=\"div-flight-time\">\n                    <div class=\"div-time d-flex\">\n                        <div class=\"depart-time\">{{departtime_return}}</div>\n                        <img class=\"img-arrow\" src=\"./assets/imgs/ic_arrow_right.svg\">\n                        <div class=\"landing-time\">{{landingtime_return}}</div>\n                    </div>\n\n                    <div class=\"div-location d-flex\">\n                        {{returnlocationdisplay}}\n                    </div>\n                </div>\n                \n            </div>\n\n            <div class=\"div-flight-condition d-flex\" *ngIf=\"returnFlight && returnConditionInfo\">\n                <div class=\"div-width-150 d-flex\">\n                    <div class=\"div-icon\" *ngIf=\"( (returnConditionInfo && (!returnConditionInfo.ticketRefund || returnConditionInfo.ticketRefund.indexOf('Không') != -1) ) || !returnConditionInfo ) else returnIconRefund\">\n                        <img class=\"img-info\" src=\"./assets/ic_flight/icon_info_gray.svg\">\n                    </div>\n                    <ng-template #returnIconRefund>\n                        <div class=\"div-icon\">\n                            <img class=\"img-info\" src=\"./assets/ic_flight/icon_action_check_circle.svg\">\n                        </div>\n                    </ng-template>\n                    <!-- <div class=\"div-text-refund\" > {{ returnConditionInfo.ticketRefund }}</div> -->\n                    <div class=\"div-text-refund\" *ngIf=\"( (returnConditionInfo && (!returnConditionInfo.ticketRefund || returnConditionInfo.ticketRefund.indexOf('Không') != -1)) || !returnConditionInfo ) else returnrefund\">Không hoàn huỷ</div>\n                    <ng-template #returnrefund>\n                        <div class=\"div-text-refund\" >Có thể hoàn huỷ</div>\n                    </ng-template>\n                </div>\n                <div class=\"div-width-150 d-flex\">\n                    <div class=\"div-icon\" *ngIf=\"( (returnConditionInfo && returnConditionInfo.changeDepartTime.indexOf('Không') != -1) || !returnConditionInfo) else returnIconChangeDepartTime\">\n                        <img src=\"./assets/ic_flight/icon_info_gray.svg\">\n                    </div>\n                    <ng-template #returnIconChangeDepartTime>\n                        <div class=\"div-icon\">\n                            <img src=\"./assets/ic_flight/icon_action_check_circle.svg\">\n                        </div>\n                    </ng-template>\n                    \n                    <div class=\"div-text-changeflight not-allow\" *ngIf=\"( (returnConditionInfo && returnConditionInfo.changeDepartTime.indexOf('Không') != -1) || !returnConditionInfo) else returnChangeDepartTime\">Không đổi lịch bay</div>\n                    <ng-template #returnChangeDepartTime>\n                        <div class=\"div-text-changeflight\" >Có thể đổi lịch bay</div>\n                    </ng-template> \n                    <!-- <div [ngClass]=\"( (returnConditionInfo && returnConditionInfo.changeDepartTime.indexOf('Không') != -1) || !returnConditionInfo) ? 'div-text-changeflight not-allow': 'div-text-refund'\" >{{ returnConditionInfo.changeDepartTime}}</div>-->\n                </div>\n                \n            </div>\n        </div>\n        <!-- <div (click)=\"showdiscount()\" *ngIf=\"!ischeck\" class=\"div-promotion\">\n            <ion-row >\n                <label *ngIf=\"!promocode\" class=\"depart-title\" >Nhập mã giảm giá</label>\n                <label *ngIf=\"promocode\" class=\"depart-title\" >{{textpromotion}}</label>\n        </ion-row>\n        <ion-row> \n            <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n            <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n        </ion-row>\n         </div> -->\n         <div  class=\"div-promotion-active\">\n            <ion-row style=\"margin-left: -5px\">\n                <ion-col  size=\"8.5\">\n                  <ion-item class=\"ion-item\">\n                    <ion-input   placeholder=\"Nhập mã giảm giá\"  (ionInput)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\"  class=\"none\"  ></ion-input>\n                  \n                  </ion-item>\n                </ion-col>\n                <ion-col  size=\"3.5\" class=\"text-right cls-col\">\n                    <button *ngIf=\"!promotionCode\" (click)=\"promofunc()\" ion-button round outline class=\"button btnnone\">Áp dụng</button>\n                    <button *ngIf=\"promotionCode\"  ion-button round outline class=\"button btnnonesuccess\"><span>\n                        <ion-icon name=\"checkmark\"></ion-icon>\n                    </span></button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-label *ngIf=\"ischeckerror==1 && msg\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n                <ion-label *ngIf=\"ischeckerror==0 && msg\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n              </ion-row>\n         </div>\n        <div class=\"div-condition d-flex\" (click)=\"showCondition()\">\n            <div class=\"div-width-100\">Chi tiết điều kiện vé</div>\n            <div class=\"div-width-100 text-right\">\n                <img class=\"img-arrow\" src=\"./assets/imgs/ic_arrow.svg\">\n            </div>\n            \n        </div>\n    </div>\n  </ion-content>\n\n  <ion-footer>\n    <div class=\"div-footer d-flex-footer\">\n        <div class=\"d-flex-footer div-width-100\">\n            <div class=\"div-total\" (click)=\"showPriceDetail()\">\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ adult }} người lớn, {{ child }} trẻ em\n                </div>\n                <div class=\"text-total\" >{{totalPriceDisplay}}đ\n                  <sup>\n                    <img src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                 </div>\n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Đặt chuyến bay</button>\n              </div>\n        </div>\n    </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/flightaddservice/flightaddservice.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/flightaddservice/flightaddservice.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.p-left-4 {\n  padding-left: 4px;\n}\n\n.flight-add-service-content .p-16 {\n  padding: 16px;\n}\n\n.flight-add-service-content .p-right-12 {\n  padding-right: 12px;\n}\n\n.flight-add-service-content .p-right-4 {\n  padding-right: 4px;\n}\n\n.flight-add-service-content .m-bottom-6 {\n  margin-bottom: 6px;\n}\n\n.flight-add-service-content .m-top-6 {\n  margin-top: 6px;\n}\n\n.flight-add-service-content .m-top-16 {\n  margin-top: 16px;\n}\n\n.flight-add-service-content .m-bottom-8 {\n  margin-bottom: 8px;\n}\n\n.flight-add-service-content .p-left-10 {\n  padding-left: 10px;\n}\n\n.flight-add-service-content .m-left-12 {\n  margin-left: 12px;\n}\n\n.flight-add-service-content .m-8 {\n  margin: 0 8px;\n  margin-top: 16px;\n}\n\n.flight-add-service-content .text-center {\n  text-align: center;\n}\n\n.flight-add-service-content .div-item-service, .flight-add-service-content .div-item-seat, .flight-add-service-content .div-item-meal {\n  border-radius: 4px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);\n  padding: 10px 8px;\n}\n\n.flight-add-service-content .img-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.flight-add-service-content .img-seat {\n  width: 48px !important;\n}\n\n.flight-add-service-content .div-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #222222;\n}\n\n.flight-add-service-content .div-sub-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n\n.flight-add-service-content .div-width-100 {\n  width: 100%;\n}\n\n.flight-add-service-content .div-width-150 {\n  width: 150%;\n}\n\n.flight-add-service-content .text-change {\n  text-align: right;\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  font-weight: 600;\n  align-self: center;\n}\n\n.flight-add-service-content .div-desc {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.flight-add-service-content .text-bold {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n\n.flight-add-service-content .div-right .div-button {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  border: solid 0.5px #f59233;\n  color: #f59233;\n  margin-left: 51%;\n  height: 36px;\n  border-radius: 4px;\n  text-align: center;\n  padding: 5px;\n}\n\n.flight-add-service-content .div-split {\n  height: 8px;\n  background-color: #f2f2f2;\n  margin: 16px -16px;\n}\n\n.flight-add-service-content .div-logo {\n  width: 40px;\n  height: 34px;\n}\n\n.flight-add-service-content .div-logo .logo-vna {\n  height: 11px !important;\n}\n\n.flight-add-service-content .img-detail {\n  width: 16px;\n}\n\n.flight-add-service-content .text-operatedBy {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  position: relative;\n  margin-top: 4px;\n}\n\n.flight-add-service-content .div-airline-name {\n  padding-left: 14px;\n  width: 188px;\n}\n\n.flight-add-service-content .div-airline-name .text-airline {\n  line-height: 17px;\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n  margin-bottom: 4px;\n  max-width: 170px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.flight-add-service-content .div-airline-name .text-sub-airline {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 16px;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.flight-add-service-content .div-flight-time .div-time {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.28px;\n  color: #222222;\n  justify-content: space-between;\n  text-align: center;\n  margin-bottom: 2px;\n}\n\n.flight-add-service-content .div-flight-time .div-location {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  text-align: center;\n}\n\n.flight-add-service-content .div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n\n.flight-add-service-content .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -8px;\n}\n\n.flight-add-service-content .div-oneway {\n  width: 12px !important;\n  margin-left: 10px !important;\n  margin-top: 1px !important;\n}\n\n.flight-add-service-content .text-desc {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  color: #000000;\n}\n\n.flight-add-service-content .div-condition {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  border-bottom: solid 0.5px #cdcdcd;\n  font-size: 14px;\n  font-weight: 100;\n}\n\n.flight-add-service-content .div-condition .img-arrow {\n  width: 16px;\n}\n\n.flight-add-service-content .div-flight-condition {\n  margin: 0 -16px;\n  padding: 10px 16px;\n  background: #f2f2f2;\n  margin-top: 16px;\n}\n\n.flight-add-service-content .img-info {\n  width: 14px;\n  height: 14px;\n}\n\n.flight-add-service-content .div-text-refund {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #828282;\n}\n\n.flight-add-service-content .div-text-changeflight {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #9fc43a;\n}\n\n.flight-add-service-content .div-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 4px;\n  margin-top: -2px;\n}\n\n.flight-add-service-content .not-allow {\n  color: #828282 !important;\n}\n\n.flight-add-service-content .text-sub {\n  color: #828282 !important;\n  font-size: 12px !important;\n  letter-spacing: -0.8px !important;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide {\n  overflow-x: auto;\n  overflow-y: hidden;\n  width: 105%;\n  position: relative;\n  margin-bottom: 16px;\n  margin-left: -16px;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item {\n  display: table-cell;\n  margin-left: 8px;\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 284px;\n  padding-left: 16px;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item:first-child {\n  padding-left: 16px !important;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item:last-child {\n  margin-right: 0px !important;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n  padding: 0;\n}\n\n.d-flex-footer {\n  display: flex;\n  width: 100%;\n}\n\n.text-place {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #333333;\n  font-weight: bold;\n}\n\n.div-promotion {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  font-weight: 300;\n}\n\n.div-promotion {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.div-promotion-active {\n  padding-bottom: 16px;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  font-weight: 300;\n}\n\n.ion-item {\n  --padding-start: 0px ;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.cls-col {\n  align-self: flex-end;\n}\n\n.btnnone {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  height: 30px !important;\n  margin: 0 5px;\n}\n\n.btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 25px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n  margin: 0 5px;\n}\n\n.price-total {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n  margin-top: 3px;\n}\n\n.ion-toggle {\n  position: absolute;\n  right: 28px;\n}\n\n.price-vnd {\n  font-size: 12px;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n  margin-top: 3px;\n}\n\n.img-info-cathay {\n  margin-left: 4px;\n  position: absolute;\n  margin-top: 6px;\n}\n\n.text-click {\n  color: #00c1de;\n}\n\n.text-seen {\n  color: #f58220;\n}\n\n.font-weight-600 {\n  font-weight: 600 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0YWRkc2VydmljZS9mbGlnaHRhZGRzZXJ2aWNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0YWRkc2VydmljZS9mbGlnaHRhZGRzZXJ2aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREVJO0VBQ0ksYUFBQTtBQ0NSOztBRENJO0VBQ0ksbUJBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksZUFBQTtBQ0NSOztBRENJO0VBQ0ksZ0JBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7QUNDUjs7QURDSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBQ0NSOztBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBUjs7QURFSTtFQUNJLHNCQUFBO0FDQVI7O0FERUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNEUjs7QURLSTtFQUNJLFdBQUE7QUNIUjs7QURLSTtFQUNJLFdBQUE7QUNIUjs7QURLSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hSOztBREtJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDSFI7O0FES0k7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUNIUjs7QURPUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNOWjs7QURVSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDUlI7O0FEV0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1RSOztBRFdRO0VBQ0ksdUJBQUE7QUNUWjs7QURZSTtFQUNJLFdBQUE7QUNWUjs7QURZSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVlI7O0FEWUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNWUjs7QURZUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNYWjs7QURhUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWFo7O0FEaUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFFQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNoQlo7O0FEa0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2hCWjs7QURvQkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNsQlI7O0FEb0JRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDbEJWOztBRHFCTTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ25CUjs7QURzQk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNwQlI7O0FEdUJNO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNyQlI7O0FEdUJRO0VBQ0ksV0FBQTtBQ3JCWjs7QUR5Qk07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDdkJSOztBRDBCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDeEJaOztBRDJCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDekJaOztBRDRCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDMUJaOztBRDRCUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzFCWjs7QUQ2QlE7RUFDSSx5QkFBQTtBQzNCWjs7QUQ2QlE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUMzQlo7O0FEaUNZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUMvQmhCOztBRGlDb0I7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQy9CeEI7O0FEbUNvQjtFQUNJLDZCQUFBO0FDakN4Qjs7QURtQ29CO0VBQ0ksNEJBQUE7QUNqQ3hCOztBRDBDQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDdkNKOztBRHlDSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ3ZDUjs7QUR5Q1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN2Q1o7O0FEMENRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN4Q1o7O0FENENJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDMUNSOztBRDZDSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQzVDUjs7QURnREE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQzdDSjs7QUQrQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUM1Q0o7O0FEOENBO0VBQ0ksZUFBQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDM0NSOztBRDZDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUMxQ0o7O0FENENFO0VBQ0UsZUFBQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDekNSOztBRDJDRTtFQUNFLG9CQUFBO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN4Q1I7O0FEMENFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3ZDSjs7QUR5Q0U7RUFFQSxxQkFBQTtBQ3ZDRjs7QUR5Q0E7RUFFSSxpQkFBQTtBQ3ZDSjs7QUR5Q0E7RUFFRSxvQkFBQTtBQ3ZDRjs7QUR5Q0E7RUFFSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQ3ZDSjs7QUR5Q0E7RUFFSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUN2Q0o7O0FEeUNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUN0Q0o7O0FEd0NBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDckNKOztBRHdDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ3JDSjs7QUR1Q0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3BDSjs7QURzQ0E7RUFDSSxjQUFBO0FDbkNKOztBRHFDQTtFQUNJLGNBQUE7QUNsQ0o7O0FEb0NFO0VBQ0UsMkJBQUE7QUNqQ0oiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRhZGRzZXJ2aWNlL2ZsaWdodGFkZHNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xufVxuLnAtbGVmdC00e1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50e1xuXG4gICAgLnAtMTZ7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5wLXJpZ2h0LTEye1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgICAucC1yaWdodC00e1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5tLWJvdHRvbS02e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxuICAgIC5tLXRvcC02e1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICAgIC5tLXRvcC0xNntcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgLm0tYm90dG9tLTh7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgLnAtbGVmdC0xMHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICAubS1sZWZ0LTEye1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICB9XG4gICAgLm0tOHtcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5kaXYtaXRlbS1zZXJ2aWNlLCAuZGl2LWl0ZW0tc2VhdCwgLmRpdi1pdGVtLW1lYWx7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgICAgcGFkZGluZzogMTBweCA4cHg7XG4gICAgfVxuXG4gICAgLmltZy1pY29ue1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgIH1cbiAgICAuaW1nLXNlYXR7XG4gICAgICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXYtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cblxuICAgIC5kaXYtc3ViLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcblxuICAgICAgICBcbiAgICB9XG4gICAgLmRpdi13aWR0aC0xMDB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuZGl2LXdpZHRoLTE1MHtcbiAgICAgICAgd2lkdGg6IDE1MCU7XG4gICAgfVxuICAgIC50ZXh0LWNoYW5nZXtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIC5kaXYtZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgLnRleHQtYm9sZHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRpdi1yaWdodHtcblxuICAgICAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI2Y1OTIzMztcbiAgICAgICAgICAgIGNvbG9yOiAjZjU5MjMzO1xuXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNTElO1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1zcGxpdHtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcbiAgICB9XG5cbiAgICAuZGl2LWxvZ297XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG5cbiAgICAgICAgLmxvZ28tdm5he1xuICAgICAgICAgICAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmltZy1kZXRhaWx7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgIH1cbiAgICAudGV4dC1vcGVyYXRlZEJ5e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbiAgICAuZGl2LWFpcmxpbmUtbmFtZXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgICAgICB3aWR0aDogMTg4cHg7XG5cbiAgICAgICAgLnRleHQtYWlybGluZXtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfSAgIFxuICAgICAgICAudGV4dC1zdWItYWlybGluZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LWZsaWdodC10aW1le1xuXG4gICAgICAgIC5kaXYtdGltZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG5cbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWxvY2F0aW9ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtZmxpZ2h0LWlub3V0e1xuICAgICAgICBwYWRkaW5nOiAwcHggMThweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5pbWctZmxpZ2h0LWlub3V0e1xuICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5kaXYtb25ld2F5e1xuICAgICAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcHggIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLnRleHQtZGVzY3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cblxuICAgICAgLmRpdi1jb25kaXRpb257XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuXG4gICAgICAgIC5pbWctYXJyb3d7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGl2LWZsaWdodC1jb25kaXRpb257XG4gICAgICAgIG1hcmdpbjogMCAtMTZweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmltZy1pbmZve1xuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LXRleHQtcmVmdW5ke1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LXRleHQtY2hhbmdlZmxpZ2h0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM5ZmM0M2E7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1pY29ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3QtYWxsb3d7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXN1YntcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC44cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmRpdi1ob3RlbC1jaXR5e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZGl2LXdyYXAtc2xpZGV7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwNSU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5kaXYtc2xpZGUtaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGl2LXNsaWRlLWl0ZW06Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZGl2LXNsaWRlLWl0ZW06bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufVxuXG5cbi5kaXYtZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAuZGl2LXRvdGFse1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG4gICAgICAgIC50ZXh0LXN1Yi10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLmQtZmxleC1mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0LXBsYWNlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXYtcHJvbW90aW9ue1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5kZXBhcnQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgLmRpdi1wcm9tb3Rpb257XG4gICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmRpdi1wcm9tb3Rpb24tYWN0aXZle1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmRlcGFydC10aXRsZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICAuaW9uLWl0ZW1cbntcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHhcbn1cbi50ZXh0LXJpZ2h0XG57XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2xzLWNvbFxue1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5idG5ub25lXG57XG4gICAgY29sb3I6ICNGNzkyMjE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDVweDtcbn1cbi5idG5ub25lc3VjY2Vzc1xue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xuICAgIGNvbG9yOiAjNDQ3YTAwO1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG4ucHJpY2UtdG90YWx7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmlvbi10b2dnbGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyOHB4O1xufVxuXG4ucHJpY2Utdm5ke1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS40NTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbi5pbWctaW5mby1jYXRoYXl7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnRleHQtY2xpY2t7XG4gICAgY29sb3I6ICMwMGMxZGU7XG59XG4udGV4dC1zZWVue1xuICAgIGNvbG9yOiAjZjU4MjIwO1xuICB9XG4gIC5mb250LXdlaWdodC02MDB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbn1cblxuLnAtbGVmdC00IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAucC0xNiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnAtcmlnaHQtMTIge1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5wLXJpZ2h0LTQge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLm0tYm90dG9tLTYge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLm0tdG9wLTYge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLm0tdG9wLTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAubS1ib3R0b20tOCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAucC1sZWZ0LTEwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5tLWxlZnQtMTIge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAubS04IHtcbiAgbWFyZ2luOiAwIDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1pdGVtLXNlcnZpY2UsIC5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWl0ZW0tc2VhdCwgLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtaXRlbS1tZWFsIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBwYWRkaW5nOiAxMHB4IDhweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuaW1nLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5pbWctc2VhdCB7XG4gIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LXdpZHRoLTE1MCB7XG4gIHdpZHRoOiAxNTAlO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC50ZXh0LWNoYW5nZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnRleHQtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1yaWdodCAuZGl2LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggI2Y1OTIzMztcbiAgY29sb3I6ICNmNTkyMzM7XG4gIG1hcmdpbi1sZWZ0OiA1MSU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LXNwbGl0IHtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWxvZ28ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtbG9nbyAubG9nby12bmEge1xuICBoZWlnaHQ6IDExcHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuaW1nLWRldGFpbCB7XG4gIHdpZHRoOiAxNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC50ZXh0LW9wZXJhdGVkQnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtYWlybGluZS1uYW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICB3aWR0aDogMTg4cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1haXJsaW5lLW5hbWUgLnRleHQtYWlybGluZSB7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIG1heC13aWR0aDogMTcwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtYWlybGluZS1uYW1lIC50ZXh0LXN1Yi1haXJsaW5lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtZmxpZ2h0LXRpbWUgLmRpdi10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtZmxpZ2h0LXRpbWUgLmRpdi1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtZmxpZ2h0LWlub3V0IHtcbiAgcGFkZGluZzogMHB4IDE4cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWZsaWdodC1pbm91dCAuaW1nLWZsaWdodC1pbm91dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtOHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtb25ld2F5IHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnRleHQtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1jb25kaXRpb24ge1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWNvbmRpdGlvbiAuaW1nLWFycm93IHtcbiAgd2lkdGg6IDE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1mbGlnaHQtY29uZGl0aW9uIHtcbiAgbWFyZ2luOiAwIC0xNnB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmltZy1pbmZvIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LXRleHQtcmVmdW5kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LXRleHQtY2hhbmdlZmxpZ2h0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzlmYzQzYTtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLm5vdC1hbGxvdyB7XG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnRleHQtc3ViIHtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWhvdGVsLWNpdHkgLmRpdi13cmFwLXNsaWRlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aWR0aDogMTA1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1ob3RlbC1jaXR5IC5kaXYtd3JhcC1zbGlkZSAuZGl2LXNsaWRlLWl0ZW0ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyODRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtaG90ZWwtY2l0eSAuZGl2LXdyYXAtc2xpZGUgLmRpdi1zbGlkZS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1ob3RlbC1jaXR5IC5kaXYtd3JhcC1zbGlkZSAuZGl2LXNsaWRlLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIHtcbiAgd2lkdGg6IDIxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtc3ViLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZC1mbGV4LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC1wbGFjZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2LXByb21vdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGVwYXJ0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmRpdi1wcm9tb3Rpb24ge1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdi1wcm9tb3Rpb24tYWN0aXZlIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlcGFydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4IDtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNscy1jb2wge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmJ0bm5vbmUge1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4uYnRubm9uZXN1Y2Nlc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xuICBjb2xvcjogIzQ0N2EwMDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLnByaWNlLXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmlvbi10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyOHB4O1xufVxuXG4ucHJpY2Utdm5kIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uaW1nLWluZm8tY2F0aGF5IHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi50ZXh0LWNsaWNrIHtcbiAgY29sb3I6ICMwMGMxZGU7XG59XG5cbi50ZXh0LXNlZW4ge1xuICBjb2xvcjogI2Y1ODIyMDtcbn1cblxuLmZvbnQtd2VpZ2h0LTYwMCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _flightpricedetail_flightpricedetail_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../flightpricedetail/flightpricedetail.page */ "./src/app/flightpricedetail/flightpricedetail.page.ts");
/* harmony import */ var _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../flightquickback/flightquickback.page */ "./src/app/flightquickback/flightquickback.page.ts");
/* harmony import */ var _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/CustomAnimations */ "./src/app/providers/CustomAnimations.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");















let FlightaddservicePage = class FlightaddservicePage {
    constructor(navCtrl, gf, modalCtrl, toastCtrl, zone, imageLoader, storage, actionsheetCtrl, valueGlobal, searchhotel, _flightService, alertCtrl, sanitizer) {
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
                this.departtime_depart = moment__WEBPACK_IMPORTED_MODULE_7__(this.departFlight.departTime).format("HH:mm");
                this.landingtime_depart = moment__WEBPACK_IMPORTED_MODULE_7__(this.departFlight.landingTime).format("HH:mm");
                this.departlocationdisplay = this._flightService.itemFlightCache.departCode + " · " + this.departFlight.flightTimeDetailDisplay + " · " + this._flightService.itemFlightCache.returnCode;
                this.departtimedisplay = this._flightService.itemFlightCache.departTimeDisplay + ", " + moment__WEBPACK_IMPORTED_MODULE_7__(this.departFlight.departTime).format("YYYY");
            }
            if (this.returnFlight) {
                this.departtime_return = moment__WEBPACK_IMPORTED_MODULE_7__(this.returnFlight.departTime).format("HH:mm");
                this.landingtime_return = moment__WEBPACK_IMPORTED_MODULE_7__(this.returnFlight.landingTime).format("HH:mm");
                this.returnlocationdisplay = this._flightService.itemFlightCache.returnCode + " · " + this.returnFlight.flightTimeDetailDisplay + " · " + this._flightService.itemFlightCache.departCode;
                this.returntimedisplay = this._flightService.itemFlightCache.returnTimeDisplay + ", " + moment__WEBPACK_IMPORTED_MODULE_7__(this.returnFlight.departTime).format("YYYY");
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
                        this.AddHotelCity(data.id);
                    }
                });
            }
            else {
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
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetPriceCathay?roundtrip=' + this.roundtrip + '&pax=' + this._flightService.itemFlightCache.pax + '',
            timeout: 180000, maxAttempts: 5, retryDelay: 20000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
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
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/ancillaryOptions?token=3b760e5dcf038878925b5613c32615ea3&reservationId=" + id + "&airline=" + code,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
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
                    _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
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
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/ancillaryOptions?token=3b760e5dcf038878925b5613c32615ea3&reservationId=" + id + "&airline=" + code + "&type=return",
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
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
                    _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
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
            let urlSeatMap = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId=" + id + "&airline=" + departairlines;
            se.getSeatMaps(urlSeatMap, departairlines, 3);
        }
        else {
            let urlSeatMapDepart = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId=" + id + "&airline=" + departairlines;
            se.getSeatMaps(urlSeatMapDepart, departairlines, 1);
            let urlSeatMapReturn = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId=" + id + "&airline=" + returnairlines;
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
        requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
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
                                        let fakeitem = { name: 'noname', type: -1, show: false };
                                        itemnormal.push(fakeitem);
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
                                        let fakeitem = { name: 'noname', type: -1, show: false };
                                        itemnormal.push(fakeitem);
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
                component: _flightpricedetail_flightpricedetail_page__WEBPACK_IMPORTED_MODULE_11__["FlightpricedetailPage"],
            });
            modal.present();
        });
    }
    confirm() {
        var se = this;
        if (!(se.loadHotelCityDone || (se._flightService.itemFlightCache.itemsFlightCityHotel && se._flightService.itemFlightCache.itemsFlightCityHotel.length > 0))) {
            se.gf.showToastWarning('Đang tải dữ liệu. Xin vui lòng đợi trong giây lát!');
            return;
        }
        if (se._flightService.itemFlightCache.backtochoiceseat) {
            if (!se.checkseat) {
                se.showAlertChoiceSeat();
            }
            else {
                se._flightService.itemFlightCache.backtochoiceseat = false;
                se.updatePassengerInfo().then((data) => {
                    if (!data.error) {
                        se.gf.hideLoading();
                        se._flightService.itemFlightCache.pnr = data;
                        se.navCtrl.navigateForward('/flightpaymentselect');
                    }
                    else {
                        se.gf.showToastWarning(data.error);
                        se.gf.hideLoading();
                    }
                });
            }
        }
        else {
            se._flightService.itemFlightCache.promotionCode = se.promotionCode;
            se._flightService.itemFlightCache.discount = se.discountpromo;
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
                component: _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_12__["FlightquickbackPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                enterAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_13__["CustomAnimations"].iosCustomEnterAnimation,
                leaveAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_13__["CustomAnimations"].iosCustomLeaveAnimation,
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetDetailTicketAirBus?airlineCode=" + item.airlineCode + "&ticketType=" + item.ticketType + "&airbusCode=" + item.aircraft + "&flightNumber=" + item.flightNumber + "&fromPlace=" + (item.fromPlaceCode ? item.fromPlaceCode : item.from) + "&toPlace=" + (item.toPlaceCode ? item.toPlaceCode : item.to),
                    timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                    headers: {
                        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                        'Content-Type': 'application/json; charset=utf-8'
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
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
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
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
                    "ancillaryJson": (objAncilary.length > 0 ? JSON.stringify(objAncilary) : ""),
                    "ancillaryReturnJson": (objAncilaryReturn.length > 0 ? JSON.stringify(objAncilaryReturn) : "")
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
                    "ancillaryJson": (objAncilary.length > 0 ? JSON.stringify(objAncilary) : ""),
                    "ancillaryReturnJson": (objAncilaryReturn.length > 0 ? JSON.stringify(objAncilaryReturn) : "")
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
                this._flightService.itemFlightCache.DICHUNGParam.User = { email: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.emailDC, phone: data.phone, fullName: data.ho + " " + data.ten };
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
                };
                if (se._flightService.itemFlightCache.pnr && se._flightService.itemFlightCache.pnr.resNo && se._flightService.itemFlightCache.hasvoucher && se._flightService.itemFlightCache.promotionCode) {
                    objPass.voucher = {};
                    objPass.voucher.keepCurrentVoucher = true;
                }
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PassengerSave/" + data.reservationId,
                    timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                    headers: {
                        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify(objPass)
                };
                se.options = options;
                requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
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
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
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
            _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, result);
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
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + "/mhoteldetail/" + item.HotelId;
        var se = this;
        var options = {
            method: 'POST',
            url: url,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "hoteldetail",
                    func: "loaddata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "hoteldetail";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
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
    promofunc() {
        var se = this;
        if (se.promocode) {
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/data/validpromocode',
                headers: {
                    'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: { code: se.promocode, totalAmount: se._flightService.itemFlightCache.totalPrice },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                se.zone.run(() => {
                    var json = body;
                    se.promotionCode = "";
                    if (json.error == 0) {
                        se.msg = json.msg;
                        se.ischeckerror = 0;
                        se.discountpromo = json.data.discount;
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
        let flightDT = this.parseDatetime(moment__WEBPACK_IMPORTED_MODULE_7__(this.departFlight.departTime).format("DD-MM-YYYY"), this.departFlight.departTimeDisplay);
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
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAirportDiChung?airportCode_First=' + this._flightService.itemFlightCache.departCode + '&airportCode_Second=' + this._flightService.itemFlightCache.returnCode + '&internal_AirporFirst=' + se._flightService.itemFlightCache.dataBooking.fromPlace.internal + '&internal_AirporSecond=' + se._flightService.itemFlightCache.dataBooking.toPlace.internal + '',
            timeout: 180000, maxAttempts: 5, retryDelay: 20000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                se._flightService.itemFlightCache.isAirportFirst = jsondata.data.isAirportFirst;
                se._flightService.itemFlightCache.isAirportSecond = jsondata.data.isAirportSecond;
            }
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
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["SearchHotel"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_9__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]])
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

module.exports = ".p-l-8 {\n  padding-left: 8px;\n}\n\n.p-left-8 {\n  padding-left: 8px;\n}\n\n.p-left-4 {\n  padding-left: 4px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-flex .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n}\n\n.m-l-4 {\n  margin-left: 4px;\n}\n\n.max-width-180 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 180px;\n}\n\n.m-top-2 {\n  margin-top: 2px;\n}\n\n.m-top-4 {\n  margin-top: 4px;\n}\n\n.m-l-12 {\n  padding-left: 12px;\n}\n\n.f-bold {\n  font-weight: bold;\n}\n\n.view-row {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.auto-width {\n  width: auto !important;\n}\n\n.max-width-200 {\n  max-width: 200px;\n}\n\n.div-content-hotel-city-item {\n  width: 284px;\n  min-height: 329px;\n  margin-top: 19px;\n  padding: 19px 0 8px;\n  border-radius: 4px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  background-color: #feeec7;\n}\n\n.div-content-hotel-city-item .div-icon {\n  padding-left: 9px;\n}\n\n.div-content-hotel-city-item .div-hotel-item-info {\n  margin-top: 49px;\n}\n\n.div-content-hotel-city-item .div-row-title {\n  height: 21px;\n  font-size: 18px;\n  text-align: left;\n  color: #003c71;\n}\n\n.div-content-hotel-city-item .v-align-center {\n  align-items: center;\n}\n\n.div-content-hotel-city-item .text-sub {\n  font-size: 12px;\n  color: #828282;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  margin-bottom: 8px;\n}\n\n.div-content-hotel-city-item .div-img-hotel {\n  min-width: 59px;\n  width: 66px;\n  height: 76px;\n  position: relative;\n}\n\n.div-content-hotel-city-item .img-item {\n  height: 76px !important;\n  width: 59px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n}\n\n.div-content-hotel-city-item img-loader > img {\n  height: 76px;\n  width: 59px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n}\n\n.div-content-hotel-city-item .no-img-background {\n  background: #bdbdbd;\n}\n\n.div-content-hotel-city-item .div-content-right {\n  margin-left: 12px;\n}\n\n.div-content-hotel-city-item .float-promo-hotel {\n  position: absolute;\n  top: 70px;\n  left: 10px;\n  background-color: #9fc43a;\n  color: #fff;\n  font-size: 14px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 8px;\n  z-index: 11;\n  letter-spacing: -0.9px;\n}\n\n.div-content-hotel-city-item .float-promo-hotel:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 6px solid #5b721b;\n  border-left: 6px solid transparent;\n  border-bottom: none;\n}\n\n.div-content-hotel-city-item .text-catname {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin: 8px 0;\n}\n\n.div-content-hotel-city-item .div-point {\n  position: relative;\n  padding-bottom: 8px;\n}\n\n.div-content-hotel-city-item .div-point .d-flex {\n  display: flex;\n}\n\n.div-content-hotel-city-item .div-point .d-flex .text-recommend {\n  padding-left: 8px;\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .div-badge {\n  width: 32px;\n  height: 17px;\n  border-radius: 6px;\n  background-color: #a0c245;\n  color: #fff;\n  text-align: center;\n  padding-top: 1px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-content-hotel-city-item .div-point .div-text-point {\n  padding-left: 8px;\n}\n\n.div-content-hotel-city-item .div-point .text-point {\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .p-bottom-12 {\n  padding-bottom: 12px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef {\n  display: flex;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-avatar .img-chef {\n  width: 48px;\n  height: 48px;\n  -o-object-fit: fill;\n     object-fit: fill;\n  border-radius: 48px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n  justify-content: center;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .chef-name {\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .chef-office {\n  font-size: 12px;\n  color: #828282;\n  line-height: 21px;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .text-restanrant-name {\n  font-size: 12px;\n  color: #828282;\n  line-height: 14px;\n  letter-spacing: -0.24px;\n  font-weight: 600;\n}\n\n.div-content-hotel-city-item .div-price {\n  display: flex;\n  width: 100%;\n}\n\n.div-content-hotel-city-item .div-price .hot-deal {\n  width: 100%;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  line-height: 20px;\n  color: #e52822;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.div-content-hotel-city-item .div-price .text-price {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: right;\n  font-size: 27px;\n  letter-spacing: -0.27px;\n  color: #26bed6;\n  font-weight: 600;\n  padding-right: 8px;\n}\n\n.div-content-hotel-city-item .div-price .text-price .s-text {\n  font-size: 12px;\n  letter-spacing: -0.36px;\n  color: #26bed6;\n}\n\n.div-content-hotel-city-item .div-price .text-price .text-sub-price {\n  font-size: 13px;\n  line-height: 18px;\n  color: #4f4f4f;\n  text-align: right;\n  margin-bottom: -6px;\n  font-weight: 300;\n}\n\n.div-content-hotel-city-item .cls-badge {\n  color: #ffffff;\n  border-radius: 12px;\n  background-color: #9fc43a;\n  font-size: 14px;\n  text-align: center;\n  line-height: 10px;\n  letter-spacing: -0.4px;\n  padding-top: 5px;\n  min-width: 28px;\n}\n\n.div-content-hotel-city-item .text-reviews {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  text-align: left;\n  color: #333333;\n}\n\n.div-content-hotel-city-item .div-hotel-address {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: -0.34px;\n  text-align: left;\n  color: #828282;\n  padding-top: 4px;\n}\n\n.div-content-hotel-city-item .div-hotel-address .img-location {\n  width: 13px;\n  height: 13px;\n  margin-left: -2px;\n}\n\n.div-content-hotel-city-item .div-hotel-address .text-hidden {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.div-content-hotel-city-item .div-hotel-room {\n  flex-grow: 0;\n  margin: 7px 0 4px;\n  padding: 9px 15px;\n  background-color: #fff7e3;\n}\n\n.div-content-hotel-city-item .div-hotel-room .div-pax {\n  margin: 0 0 3px;\n  font-family: Helvetica;\n  font-size: 13px;\n  line-height: 1.45;\n  text-align: left;\n  color: #333333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 298px;\n  white-space: nowrap;\n}\n\n.div-content-hotel-city-item .div-hotel-room .link-change-room {\n  text-decoration: underline;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #f79321;\n  z-index: 8;\n  padding: 10px 0;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show {\n  width: 100%;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .price-original {\n  height: 21px;\n  font-size: 14px;\n  line-height: 1.45;\n  text-align: left;\n  color: #e32b2c;\n  text-decoration: line-through;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .price-total {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.45;\n  text-align: left;\n  color: var(--ion-color-primary);\n  margin-top: -6px;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .subfix {\n  font-size: 12px;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n}\n\n.div-content-hotel-city-item .div-price .div-button {\n  padding-right: 13px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvaG90ZWxjaXR5aXRlbS9ob3RlbGNpdHlpdGVtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG90ZWxjaXR5aXRlbS9ob3RlbGNpdHlpdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0FDQVI7O0FERUk7RUFDSSxpQkFBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7QUNFUjs7QURBSTtFQUNJLGFBQUE7QUNHUjs7QURGUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0laOztBREFJO0VBQ0ksZ0JBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSVI7O0FERkk7RUFDSSxlQUFBO0FDS1I7O0FESEk7RUFDSSxlQUFBO0FDTVI7O0FESkk7RUFDSSxrQkFBQTtBQ09SOztBRExJO0VBQ0ksaUJBQUE7QUNRUjs7QURMSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNRUjs7QUROSTtFQUNJLHNCQUFBO0FDU1I7O0FEUEk7RUFDSSxnQkFBQTtBQ1VSOztBRFJJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtBQ1dSOztBRFRRO0VBQ0ksaUJBQUE7QUNXWjs7QURSUTtFQUNJLGdCQUFBO0FDVVo7O0FEUlE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1VaOztBRFBRO0VBQ0ksbUJBQUE7QUNTWjs7QUROUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDUVo7O0FETlk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1FoQjs7QUROWTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNRaEI7O0FETlk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ1FoQjs7QUROWTtFQUNJLG1CQUFBO0FDUWhCOztBRExZO0VBQ0ksaUJBQUE7QUNPaEI7O0FETFk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNPaEI7O0FETFk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ09oQjs7QURMWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ09oQjs7QURKWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNNaEI7O0FETGdCO0VBQ0ksYUFBQTtBQ09wQjs7QURMb0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ094Qjs7QURKZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ01wQjs7QURIZ0I7RUFDSSxpQkFBQTtBQ0twQjs7QURGZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNJcEI7O0FERmdCO0VBQ0ksb0JBQUE7QUNJcEI7O0FERGdCO0VBQ0ksYUFBQTtBQ0dwQjs7QURBd0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ0U1Qjs7QURDb0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDQ3hCOztBREN3QjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDQzVCOztBREN3QjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQzVCOztBREN3QjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDQzVCOztBRFFZO0VBRUksYUFBQTtFQUNBLFdBQUE7QUNQaEI7O0FEU2dCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDUHBCOztBRFNnQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDUnBCOztBRFVvQjtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNSeEI7O0FEVW9CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1J4Qjs7QURjWTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1poQjs7QURjYztFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDWmhCOztBRGVjO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2JoQjs7QURlZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDYnBCOztBRGdCZ0I7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNkcEI7O0FEa0JjO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ2hCaEI7O0FEa0JpQjtFQUNHLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDakJwQjs7QURvQmlCO0VBQ0csMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNsQnBCOztBRHdCZ0I7RUFDSSxXQUFBO0FDdEJwQjs7QUR1Qm9CO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FDckJ4Qjs7QUR3Qm9CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUN0QnhCOztBRHlCb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ3ZCeEI7O0FEMEJnQjtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUN4QnBCIiwiZmlsZSI6InNyYy9hcHAvaG90ZWxjaXR5aXRlbS9ob3RlbGNpdHlpdGVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnAtbC04e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgLnAtbGVmdC04e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgLnAtbGVmdC00e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgfVxyXG4gICAgLmQtZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5kaXYtc3RhcntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm0tbC00e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB9XHJcbiAgICAubWF4LXdpZHRoLTE4MHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgIH1cclxuICAgIC5tLXRvcC0ye1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5tLXRvcC00e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5tLWwtMTJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmYtYm9sZHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAudmlldy1yb3d7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmF1dG8td2lkdGh7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5tYXgtd2lkdGgtMjAwe1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVte1xyXG4gICAgICAgIHdpZHRoOiAyODRweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMjlweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxOXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE5cHggMCA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xyXG5cclxuICAgICAgICAuZGl2LWljb257XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdi1ob3RlbC1pdGVtLWluZm97XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQ5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtcm93LXRpdGxle1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudi1hbGlnbi1jZW50ZXJ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dC1zdWJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLmRpdi1pbWctaG90ZWx7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDU5cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTlweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nLWxvYWRlciA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTlweDtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uby1pbWctYmFja2dyb3VuZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kaXYtY29udGVudC1yaWdodHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mbG9hdC1wcm9tby1ob3RlbHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZjNDNhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC45cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxvYXQtcHJvbW8taG90ZWw6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgIzViNzIxYjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtY2F0bmFtZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuZGl2LXBvaW50e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgIC5kLWZsZXh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LXJlY29tbWVuZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGl2LWJhZGdle1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYzI0NTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmRpdi10ZXh0LXBvaW50e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAudGV4dC1wb2ludHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucC1ib3R0b20tMTJ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5kaXYtY2hlZntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWYtYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW1nLWNoZWZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVmLWRlc2N7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlZi1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hlZi1vZmZpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0LXJlc3RhbnJhbnQtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kaXYtcHJpY2V7XHJcbiAgICAgICAgICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAuaG90LWRlYWx7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQtcHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zLXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1zdWItcHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuY2xzLWJhZGdle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYzQzYTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50ZXh0LXJldmlld3N7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5kaXYtaG90ZWwtYWRkcmVzc3tcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZy1sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHQtaGlkZGVue1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5kaXYtaG90ZWwtcm9vbXtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDAgNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2UzO1xyXG5cclxuICAgICAgICAgICAgICAgICAuZGl2LXBheHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI5OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAubGluay1jaGFuZ2Utcm9vbXtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNzkzMjE7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogODtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmRpdi1wcmljZXtcclxuXHJcbiAgICAgICAgICAgICAgICAuZGl2LXByaWNlLXNob3d7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaWNlLW9yaWdpbmFse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTMyYjJjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZS10b3RhbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc3ViZml4e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kaXYtYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICIsIi5wLWwtOCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ucC1sZWZ0LTgge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnAtbGVmdC00IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmQtZmxleCAuZGl2LXN0YXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubS1sLTQge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ubWF4LXdpZHRoLTE4MCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXgtd2lkdGg6IDE4MHB4O1xufVxuXG4ubS10b3AtMiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLm0tdG9wLTQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5tLWwtMTIge1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG59XG5cbi5mLWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZpZXctcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRvLXdpZHRoIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1heC13aWR0aC0yMDAge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIHtcbiAgd2lkdGg6IDI4NHB4O1xuICBtaW4taGVpZ2h0OiAzMjlweDtcbiAgbWFyZ2luLXRvcDogMTlweDtcbiAgcGFkZGluZzogMTlweCAwIDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWVlYzc7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogOXB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWhvdGVsLWl0ZW0taW5mbyB7XG4gIG1hcmdpbi10b3A6IDQ5cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcm93LXRpdGxlIHtcbiAgaGVpZ2h0OiAyMXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAudi1hbGlnbi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAudGV4dC1zdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1pbWctaG90ZWwge1xuICBtaW4td2lkdGg6IDU5cHg7XG4gIHdpZHRoOiA2NnB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmltZy1pdGVtIHtcbiAgaGVpZ2h0OiA3NnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1OXB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIGltZy1sb2FkZXIgPiBpbWcge1xuICBoZWlnaHQ6IDc2cHg7XG4gIHdpZHRoOiA1OXB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAubm8taW1nLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWNvbnRlbnQtcmlnaHQge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmZsb2F0LXByb21vLWhvdGVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwcHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmM0M2E7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1heC13aWR0aDogOTUlO1xuICBoZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIHotaW5kZXg6IDExO1xuICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZmxvYXQtcHJvbW8taG90ZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM1YjcyMWI7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC50ZXh0LWNhdG5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDhweCAwO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kLWZsZXggLnRleHQtcmVjb21tZW5kIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZGl2LWJhZGdlIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjMjQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmRpdi10ZXh0LXBvaW50IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLnRleHQtcG9pbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLnAtYm90dG9tLTEyIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmRpdi1jaGVmIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtYXZhdGFyIC5pbWctY2hlZiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmRpdi1jaGVmIC5jaGVmLWRlc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmRpdi1jaGVmIC5jaGVmLWRlc2MgLmNoZWYtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1kZXNjIC5jaGVmLW9mZmljZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtZGVzYyAudGV4dC1yZXN0YW5yYW50LW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAuaG90LWRlYWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC50ZXh0LXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDI3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yN3B4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC50ZXh0LXByaWNlIC5zLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAudGV4dC1wcmljZSAudGV4dC1zdWItcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5jbHMtYmFkZ2Uge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmYzQzYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBtaW4td2lkdGg6IDI4cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC50ZXh0LXJldmlld3Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWhvdGVsLWFkZHJlc3Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzgyODI4MjtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1ob3RlbC1hZGRyZXNzIC5pbWctbG9jYXRpb24ge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBtYXJnaW4tbGVmdDogLTJweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1ob3RlbC1hZGRyZXNzIC50ZXh0LWhpZGRlbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWhvdGVsLXJvb20ge1xuICBmbGV4LWdyb3c6IDA7XG4gIG1hcmdpbjogN3B4IDAgNHB4O1xuICBwYWRkaW5nOiA5cHggMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlMztcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1ob3RlbC1yb29tIC5kaXYtcGF4IHtcbiAgbWFyZ2luOiAwIDAgM3B4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMzMzMztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogMjk4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaG90ZWwtcm9vbSAubGluay1jaGFuZ2Utcm9vbSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICBjb2xvcjogI2Y3OTMyMTtcbiAgei1pbmRleDogODtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC5kaXYtcHJpY2Utc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC5kaXYtcHJpY2Utc2hvdyAucHJpY2Utb3JpZ2luYWwge1xuICBoZWlnaHQ6IDIxcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZTMyYjJjO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAuZGl2LXByaWNlLXNob3cgLnByaWNlLXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi10b3A6IC02cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLmRpdi1wcmljZS1zaG93IC5zdWJmaXgge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC5kaXYtYnV0dG9uIHtcbiAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59Il19 */"

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