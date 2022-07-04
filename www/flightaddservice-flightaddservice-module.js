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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.p-left-4 {\n  padding-left: 4px;\n}\n\n.flight-add-service-content .p-16 {\n  padding: 16px;\n}\n\n.flight-add-service-content .p-right-12 {\n  padding-right: 12px;\n}\n\n.flight-add-service-content .p-right-4 {\n  padding-right: 4px;\n}\n\n.flight-add-service-content .m-bottom-6 {\n  margin-bottom: 6px;\n}\n\n.flight-add-service-content .m-top-6 {\n  margin-top: 6px;\n}\n\n.flight-add-service-content .m-top-16 {\n  margin-top: 16px;\n}\n\n.flight-add-service-content .m-bottom-8 {\n  margin-bottom: 8px;\n}\n\n.flight-add-service-content .p-left-10 {\n  padding-left: 10px;\n}\n\n.flight-add-service-content .m-left-12 {\n  margin-left: 12px;\n}\n\n.flight-add-service-content .m-8 {\n  margin: 0 8px;\n  margin-top: 16px;\n}\n\n.flight-add-service-content .text-center {\n  text-align: center;\n}\n\n.flight-add-service-content .div-item-service, .flight-add-service-content .div-item-seat, .flight-add-service-content .div-item-meal {\n  border-radius: 4px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);\n  padding: 10px 8px;\n}\n\n.flight-add-service-content .img-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.flight-add-service-content .img-seat {\n  width: 48px !important;\n}\n\n.flight-add-service-content .div-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #222222;\n}\n\n.flight-add-service-content .div-sub-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n\n.flight-add-service-content .div-width-100 {\n  width: 100%;\n}\n\n.flight-add-service-content .div-width-150 {\n  width: 150%;\n}\n\n.flight-add-service-content .text-change {\n  text-align: right;\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  font-weight: 600;\n  align-self: center;\n}\n\n.flight-add-service-content .div-desc {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.flight-add-service-content .text-bold {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n\n.flight-add-service-content .div-right .div-button {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  border: solid 0.5px #f59233;\n  color: #f59233;\n  margin-left: 51%;\n  height: 36px;\n  border-radius: 4px;\n  text-align: center;\n  padding: 5px;\n}\n\n.flight-add-service-content .div-split {\n  height: 8px;\n  background-color: #f2f2f2;\n  margin: 16px -16px;\n}\n\n.flight-add-service-content .div-logo {\n  width: 40px;\n  height: 34px;\n}\n\n.flight-add-service-content .div-logo .logo-vna {\n  height: 11px !important;\n}\n\n.flight-add-service-content .img-detail {\n  width: 16px;\n}\n\n.flight-add-service-content .text-operatedBy {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  position: relative;\n  margin-top: 4px;\n}\n\n.flight-add-service-content .div-airline-name {\n  padding-left: 14px;\n  width: 188px;\n}\n\n.flight-add-service-content .div-airline-name .text-airline {\n  line-height: 17px;\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n  margin-bottom: 4px;\n  max-width: 170px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.flight-add-service-content .div-airline-name .text-sub-airline {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 16px;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.flight-add-service-content .div-flight-time .div-time {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 17px;\n  letter-spacing: -0.28px;\n  color: #222222;\n  justify-content: space-between;\n  text-align: center;\n  margin-bottom: 2px;\n}\n\n.flight-add-service-content .div-flight-time .div-location {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  text-align: center;\n}\n\n.flight-add-service-content .div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n\n.flight-add-service-content .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -8px;\n}\n\n.flight-add-service-content .div-oneway {\n  width: 12px !important;\n  margin-left: 10px !important;\n  margin-top: 1px !important;\n}\n\n.flight-add-service-content .text-desc {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  color: #000000;\n}\n\n.flight-add-service-content .div-condition {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  border-bottom: solid 0.5px #cdcdcd;\n  font-size: 14px;\n  font-weight: 100;\n}\n\n.flight-add-service-content .div-condition .img-arrow {\n  width: 16px;\n}\n\n.flight-add-service-content .div-flight-condition {\n  margin: 0 -16px;\n  padding: 10px 16px;\n  background: #f2f2f2;\n  margin-top: 16px;\n}\n\n.flight-add-service-content .img-info {\n  width: 14px;\n  height: 14px;\n}\n\n.flight-add-service-content .div-text-refund {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #828282;\n}\n\n.flight-add-service-content .div-text-changeflight {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #9fc43a;\n}\n\n.flight-add-service-content .div-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 4px;\n  margin-top: -2px;\n}\n\n.flight-add-service-content .not-allow {\n  color: #828282 !important;\n}\n\n.flight-add-service-content .text-sub {\n  color: #828282 !important;\n  font-size: 12px !important;\n  letter-spacing: -0.8px !important;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide {\n  overflow-x: auto;\n  overflow-y: hidden;\n  width: 105%;\n  position: relative;\n  margin-bottom: 16px;\n  margin-left: -16px;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item {\n  display: table-cell;\n  margin-left: 8px;\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 284px;\n  padding-left: 16px;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item:first-child {\n  padding-left: 16px !important;\n}\n\n.flight-add-service-content .div-hotel-city .div-wrap-slide .div-slide-item:last-child {\n  margin-right: 0px !important;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n  padding: 0;\n}\n\n.d-flex-footer {\n  display: flex;\n  width: 100%;\n}\n\n.text-place {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #333333;\n  font-weight: bold;\n}\n\n.div-promotion {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  font-weight: 300;\n}\n\n.div-promotion {\n  padding: 16px 0;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.div-promotion-active {\n  padding-bottom: 16px;\n  border-top: solid 0.5px #cdcdcd;\n  margin-top: 16px;\n  font-size: 14px;\n}\n\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  font-weight: 300;\n}\n\n.ion-item {\n  --padding-start: 0px ;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.cls-col {\n  align-self: flex-end;\n}\n\n.btnnone {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  height: 30px !important;\n  margin: 0 5px;\n}\n\n.btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 25px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n  margin: 0 5px;\n}\n\n.price-total {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n  margin-top: 3px;\n}\n\n.ion-toggle {\n  position: absolute;\n  right: 28px;\n}\n\n.price-vnd {\n  font-size: 12px;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n  margin-top: 3px;\n}\n\n.img-info-cathay {\n  margin-left: 4px;\n  position: absolute;\n  margin-top: 6px;\n}\n\n.text-click {\n  color: #00c1de;\n}\n\n.text-seen {\n  color: #f58220;\n}\n\n.font-weight-600 {\n  font-weight: 600 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGFkZHNlcnZpY2UvZmxpZ2h0YWRkc2VydmljZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGFkZHNlcnZpY2UvZmxpZ2h0YWRkc2VydmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURFSTtFQUNJLGFBQUE7QUNDUjs7QURDSTtFQUNJLG1CQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURDSTtFQUNJLGVBQUE7QUNDUjs7QURDSTtFQUNJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNDUjs7QURDSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQVI7O0FERUk7RUFDSSxzQkFBQTtBQ0FSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNBUjs7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDRFI7O0FES0k7RUFDSSxXQUFBO0FDSFI7O0FES0k7RUFDSSxXQUFBO0FDSFI7O0FES0k7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNIUjs7QURLSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0hSOztBREtJO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FDSFI7O0FET1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTlo7O0FEVUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1JSOztBRFdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNUUjs7QURXUTtFQUNJLHVCQUFBO0FDVFo7O0FEWUk7RUFDSSxXQUFBO0FDVlI7O0FEWUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1ZSOztBRFlJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDVlI7O0FEWVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDWFo7O0FEYVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1haOztBRGlCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBRUEsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDaEJaOztBRGtCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNoQlo7O0FEb0JJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDbEJSOztBRG9CUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ2xCVjs7QURxQk07RUFDRSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNuQlI7O0FEc0JNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcEJSOztBRHVCTTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDckJSOztBRHVCUTtFQUNJLFdBQUE7QUNyQlo7O0FEeUJNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3ZCUjs7QUQwQlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3hCWjs7QUQyQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ3pCWjs7QUQ0QlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQzFCWjs7QUQ0QlE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUMxQlo7O0FENkJRO0VBQ0kseUJBQUE7QUMzQlo7O0FENkJRO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0FDM0JaOztBRGlDWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDL0JoQjs7QURpQ29CO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMvQnhCOztBRG1Db0I7RUFDSSw2QkFBQTtBQ2pDeEI7O0FEbUNvQjtFQUNJLDRCQUFBO0FDakN4Qjs7QUQwQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3ZDSjs7QUR5Q0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUN2Q1I7O0FEeUNRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDdkNaOztBRDBDUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDeENaOztBRDRDSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQzFDUjs7QUQ2Q0k7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUM1Q1I7O0FEZ0RBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUM3Q0o7O0FEK0NBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDNUNKOztBRDhDQTtFQUNJLGVBQUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQzNDUjs7QUQ2Q0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDMUNKOztBRDRDRTtFQUNFLGVBQUE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3pDUjs7QUQyQ0U7RUFDRSxvQkFBQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDeENSOztBRDBDRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN2Q0o7O0FEeUNFO0VBRUEscUJBQUE7QUN2Q0Y7O0FEeUNBO0VBRUksaUJBQUE7QUN2Q0o7O0FEeUNBO0VBRUUsb0JBQUE7QUN2Q0Y7O0FEeUNBO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUN2Q0o7O0FEeUNBO0VBRUksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDdkNKOztBRHlDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDdENKOztBRHdDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ3JDSjs7QUR3Q0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNyQ0o7O0FEdUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNwQ0o7O0FEc0NBO0VBQ0ksY0FBQTtBQ25DSjs7QURxQ0E7RUFDSSxjQUFBO0FDbENKOztBRG9DRTtFQUNFLDJCQUFBO0FDakNKIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0YWRkc2VydmljZS9mbGlnaHRhZGRzZXJ2aWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbn1cbi5wLWxlZnQtNHtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudHtcblxuICAgIC5wLTE2e1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgICAucC1yaWdodC0xMntcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICB9XG4gICAgLnAtcmlnaHQtNHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIH1cbiAgICAubS1ib3R0b20tNntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIH1cbiAgICAubS10b3AtNntcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbiAgICAubS10b3AtMTZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5tLWJvdHRvbS04e1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5wLWxlZnQtMTB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgLm0tbGVmdC0xMntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuICAgIC5tLTh7XG4gICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZGl2LWl0ZW0tc2VydmljZSwgLmRpdi1pdGVtLXNlYXQsIC5kaXYtaXRlbS1tZWFse1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgIH1cblxuICAgIC5pbWctaWNvbntcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICB9XG4gICAgLmltZy1zZWF0e1xuICAgICAgICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGl2LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG5cbiAgICAuZGl2LXN1Yi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG5cbiAgICAgICAgXG4gICAgfVxuICAgIC5kaXYtd2lkdGgtMTAwe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmRpdi13aWR0aC0xNTB7XG4gICAgICAgIHdpZHRoOiAxNTAlO1xuICAgIH1cbiAgICAudGV4dC1jaGFuZ2V7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgICAuZGl2LWRlc2N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICAgIC50ZXh0LWJvbGR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXYtcmlnaHR7XG5cbiAgICAgICAgLmRpdi1idXR0b257XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNmNTkyMzM7XG4gICAgICAgICAgICBjb2xvcjogI2Y1OTIzMztcblxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDUxJTtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtc3BsaXR7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBtYXJnaW46IDE2cHggLTE2cHg7XG4gICAgfVxuXG4gICAgLmRpdi1sb2dve1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuXG4gICAgICAgIC5sb2dvLXZuYXtcbiAgICAgICAgICAgIGhlaWdodDogMTFweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbWctZGV0YWlse1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICB9XG4gICAgLnRleHQtb3BlcmF0ZWRCeXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG4gICAgLmRpdi1haXJsaW5lLW5hbWV7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICAgICAgd2lkdGg6IDE4OHB4O1xuXG4gICAgICAgIC50ZXh0LWFpcmxpbmV7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcblxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNzBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH0gICBcbiAgICAgICAgLnRleHQtc3ViLWFpcmxpbmV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1mbGlnaHQtdGltZXtcblxuICAgICAgICAuZGl2LXRpbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1sb2NhdGlvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LWZsaWdodC1pbm91dHtcbiAgICAgICAgcGFkZGluZzogMHB4IDE4cHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuaW1nLWZsaWdodC1pbm91dHtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZGl2LW9uZXdheXtcbiAgICAgICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC50ZXh0LWRlc2N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICB9XG5cbiAgICAgIC5kaXYtY29uZGl0aW9ue1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcblxuICAgICAgICAuaW1nLWFycm93e1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRpdi1mbGlnaHQtY29uZGl0aW9ue1xuICAgICAgICBtYXJnaW46IDAgLTE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWctaW5mb3tcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi10ZXh0LXJlZnVuZHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi10ZXh0LWNoYW5nZWZsaWdodHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOWZjNDNhO1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtaWNvbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm90LWFsbG93e1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1zdWJ7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5kaXYtaG90ZWwtY2l0eXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmRpdi13cmFwLXNsaWRle1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAuZGl2LXNsaWRlLWl0ZW17XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyODRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRpdi1zbGlkZS1pdGVtOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRpdi1zbGlkZS1pdGVtOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn1cblxuXG4uZGl2LWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgLmRpdi10b3RhbHtcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgICAgICAudGV4dC1zdWItdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5kLWZsZXgtZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGV4dC1wbGFjZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGl2LXByb21vdGlvbntcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuZGVwYXJ0LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIC5kaXYtcHJvbW90aW9ue1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5kaXYtcHJvbW90aW9uLWFjdGl2ZXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5kZXBhcnQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbiAgLmlvbi1pdGVtXG57XG4gIC0tcGFkZGluZy1zdGFydDogMHB4XG59XG4udGV4dC1yaWdodFxue1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNscy1jb2xcbntcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uYnRubm9uZVxue1xuICAgIGNvbG9yOiAjRjc5MjIxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG4uYnRubm9uZXN1Y2Nlc3NcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzQ0N2EwMDtcbiAgICBjb2xvcjogIzQ0N2EwMDtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuLnByaWNlLXRvdGFse1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMS40NTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbi5pb24tdG9nZ2xle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjhweDtcbn1cblxuLnByaWNlLXZuZHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG4uaW1nLWluZm8tY2F0aGF5e1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi50ZXh0LWNsaWNre1xuICAgIGNvbG9yOiAjMDBjMWRlO1xufVxuLnRleHQtc2VlbntcbiAgICBjb2xvcjogI2Y1ODIyMDtcbiAgfVxuICAuZm9udC13ZWlnaHQtNjAwe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wLWxlZnQtNCB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnAtMTYge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5wLXJpZ2h0LTEyIHtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAucC1yaWdodC00IHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5tLWJvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5tLXRvcC02IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5tLXRvcC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLm0tYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnAtbGVmdC0xMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAubS1sZWZ0LTEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLm0tOCB7XG4gIG1hcmdpbjogMCA4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtaXRlbS1zZXJ2aWNlLCAuZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1pdGVtLXNlYXQsIC5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWl0ZW0tbWVhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgcGFkZGluZzogMTBweCA4cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmltZy1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuaW1nLXNlYXQge1xuICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi13aWR0aC0xNTAge1xuICB3aWR0aDogMTUwJTtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAudGV4dC1jaGFuZ2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC50ZXh0LWJvbGQge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtcmlnaHQgLmRpdi1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNmNTkyMzM7XG4gIGNvbG9yOiAjZjU5MjMzO1xuICBtYXJnaW4tbGVmdDogNTElO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW46IDE2cHggLTE2cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1sb2dvIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzRweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWxvZ28gLmxvZ28tdm5hIHtcbiAgaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmltZy1kZXRhaWwge1xuICB3aWR0aDogMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAudGV4dC1vcGVyYXRlZEJ5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWFpcmxpbmUtbmFtZSB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgd2lkdGg6IDE4OHB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtYWlybGluZS1uYW1lIC50ZXh0LWFpcmxpbmUge1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBtYXgtd2lkdGg6IDE3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWFpcmxpbmUtbmFtZSAudGV4dC1zdWItYWlybGluZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWZsaWdodC10aW1lIC5kaXYtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWZsaWdodC10aW1lIC5kaXYtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWZsaWdodC1pbm91dCB7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1mbGlnaHQtaW5vdXQgLmltZy1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLThweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LW9uZXdheSB7XG4gIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC50ZXh0LWRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtY29uZGl0aW9uIHtcbiAgcGFkZGluZzogMTZweCAwO1xuICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1jb25kaXRpb24gLmltZy1hcnJvdyB7XG4gIHdpZHRoOiAxNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtZmxpZ2h0LWNvbmRpdGlvbiB7XG4gIG1hcmdpbjogMCAtMTZweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5pbWctaW5mbyB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi10ZXh0LXJlZnVuZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi10ZXh0LWNoYW5nZWZsaWdodCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM5ZmM0M2E7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5ub3QtYWxsb3cge1xuICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC50ZXh0LXN1YiB7XG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuOHB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWFkZC1zZXJ2aWNlLWNvbnRlbnQgLmRpdi1ob3RlbC1jaXR5IC5kaXYtd3JhcC1zbGlkZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgd2lkdGg6IDEwNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtaG90ZWwtY2l0eSAuZGl2LXdyYXAtc2xpZGUgLmRpdi1zbGlkZS1pdGVtIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjg0cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5mbGlnaHQtYWRkLXNlcnZpY2UtY29udGVudCAuZGl2LWhvdGVsLWNpdHkgLmRpdi13cmFwLXNsaWRlIC5kaXYtc2xpZGUtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMTZweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1hZGQtc2VydmljZS1jb250ZW50IC5kaXYtaG90ZWwtY2l0eSAuZGl2LXdyYXAtc2xpZGUgLmRpdi1zbGlkZS1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCB7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXN1Yi10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWZvb3RlciAuZGl2LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmQtZmxleC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtcGxhY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdi1wcm9tb3Rpb24ge1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRlcGFydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5kaXYtcHJvbW90aW9uIHtcbiAgcGFkZGluZzogMTZweCAwO1xuICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXYtcHJvbW90aW9uLWFjdGl2ZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kZXBhcnQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweCA7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jbHMtY29sIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5idG5ub25lIHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmJ0bm5vbmVzdWNjZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzQ0N2EwMDtcbiAgY29sb3I6ICM0NDdhMDA7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5wcmljZS10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5pb24tdG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjhweDtcbn1cblxuLnByaWNlLXZuZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmltZy1pbmZvLWNhdGhheSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4udGV4dC1jbGljayB7XG4gIGNvbG9yOiAjMDBjMWRlO1xufVxuXG4udGV4dC1zZWVuIHtcbiAgY29sb3I6ICNmNTgyMjA7XG59XG5cbi5mb250LXdlaWdodC02MDAge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59Il19 */"

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
                        if (data.equipment.indexOf('787') != -1) {
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
                            if (data.equipment.indexOf('787') != -1) {
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
                        if (data.equipment.indexOf('787') != -1) {
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
                            if (data.equipment.indexOf('787') != -1) {
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

module.exports = ".p-l-8 {\n  padding-left: 8px;\n}\n\n.p-left-8 {\n  padding-left: 8px;\n}\n\n.p-left-4 {\n  padding-left: 4px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-flex .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n}\n\n.m-l-4 {\n  margin-left: 4px;\n}\n\n.max-width-180 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 180px;\n}\n\n.m-top-2 {\n  margin-top: 2px;\n}\n\n.m-top-4 {\n  margin-top: 4px;\n}\n\n.m-l-12 {\n  padding-left: 12px;\n}\n\n.f-bold {\n  font-weight: bold;\n}\n\n.view-row {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.auto-width {\n  width: auto !important;\n}\n\n.max-width-200 {\n  max-width: 200px;\n}\n\n.div-content-hotel-city-item {\n  width: 284px;\n  min-height: 329px;\n  margin-top: 19px;\n  padding: 19px 0 8px;\n  border-radius: 4px;\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  background-color: #feeec7;\n}\n\n.div-content-hotel-city-item .div-icon {\n  padding-left: 9px;\n}\n\n.div-content-hotel-city-item .div-hotel-item-info {\n  margin-top: 49px;\n}\n\n.div-content-hotel-city-item .div-row-title {\n  height: 21px;\n  font-size: 18px;\n  text-align: left;\n  color: #003c71;\n}\n\n.div-content-hotel-city-item .v-align-center {\n  align-items: center;\n}\n\n.div-content-hotel-city-item .text-sub {\n  font-size: 12px;\n  color: #828282;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n  margin-bottom: 8px;\n}\n\n.div-content-hotel-city-item .div-img-hotel {\n  min-width: 59px;\n  width: 66px;\n  height: 76px;\n  position: relative;\n}\n\n.div-content-hotel-city-item .img-item {\n  height: 76px !important;\n  width: 59px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n}\n\n.div-content-hotel-city-item img-loader > img {\n  height: 76px;\n  width: 59px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n}\n\n.div-content-hotel-city-item .no-img-background {\n  background: #bdbdbd;\n}\n\n.div-content-hotel-city-item .div-content-right {\n  margin-left: 12px;\n}\n\n.div-content-hotel-city-item .float-promo-hotel {\n  position: absolute;\n  top: 70px;\n  left: 10px;\n  background-color: #9fc43a;\n  color: #fff;\n  font-size: 14px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 8px;\n  z-index: 11;\n  letter-spacing: -0.9px;\n}\n\n.div-content-hotel-city-item .float-promo-hotel:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 6px solid #5b721b;\n  border-left: 6px solid transparent;\n  border-bottom: none;\n}\n\n.div-content-hotel-city-item .text-catname {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin: 8px 0;\n}\n\n.div-content-hotel-city-item .div-point {\n  position: relative;\n  padding-bottom: 8px;\n}\n\n.div-content-hotel-city-item .div-point .d-flex {\n  display: flex;\n}\n\n.div-content-hotel-city-item .div-point .d-flex .text-recommend {\n  padding-left: 8px;\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .div-badge {\n  width: 32px;\n  height: 17px;\n  border-radius: 6px;\n  background-color: #a0c245;\n  color: #fff;\n  text-align: center;\n  padding-top: 1px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-content-hotel-city-item .div-point .div-text-point {\n  padding-left: 8px;\n}\n\n.div-content-hotel-city-item .div-point .text-point {\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .p-bottom-12 {\n  padding-bottom: 12px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef {\n  display: flex;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-avatar .img-chef {\n  width: 48px;\n  height: 48px;\n  -o-object-fit: fill;\n     object-fit: fill;\n  border-radius: 48px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n  justify-content: center;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .chef-name {\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .chef-office {\n  font-size: 12px;\n  color: #828282;\n  line-height: 21px;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n\n.div-content-hotel-city-item .div-point .div-chef .chef-desc .text-restanrant-name {\n  font-size: 12px;\n  color: #828282;\n  line-height: 14px;\n  letter-spacing: -0.24px;\n  font-weight: 600;\n}\n\n.div-content-hotel-city-item .div-price {\n  display: flex;\n  width: 100%;\n}\n\n.div-content-hotel-city-item .div-price .hot-deal {\n  width: 100%;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  line-height: 20px;\n  color: #e52822;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.div-content-hotel-city-item .div-price .text-price {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: right;\n  font-size: 27px;\n  letter-spacing: -0.27px;\n  color: #26bed6;\n  font-weight: 600;\n  padding-right: 8px;\n}\n\n.div-content-hotel-city-item .div-price .text-price .s-text {\n  font-size: 12px;\n  letter-spacing: -0.36px;\n  color: #26bed6;\n}\n\n.div-content-hotel-city-item .div-price .text-price .text-sub-price {\n  font-size: 13px;\n  line-height: 18px;\n  color: #4f4f4f;\n  text-align: right;\n  margin-bottom: -6px;\n  font-weight: 300;\n}\n\n.div-content-hotel-city-item .cls-badge {\n  color: #ffffff;\n  border-radius: 12px;\n  background-color: #9fc43a;\n  font-size: 14px;\n  text-align: center;\n  line-height: 10px;\n  letter-spacing: -0.4px;\n  padding-top: 5px;\n  min-width: 28px;\n}\n\n.div-content-hotel-city-item .text-reviews {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  text-align: left;\n  color: #333333;\n}\n\n.div-content-hotel-city-item .div-hotel-address {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: -0.34px;\n  text-align: left;\n  color: #828282;\n  padding-top: 4px;\n}\n\n.div-content-hotel-city-item .div-hotel-address .img-location {\n  width: 13px;\n  height: 13px;\n  margin-left: -2px;\n}\n\n.div-content-hotel-city-item .div-hotel-address .text-hidden {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.div-content-hotel-city-item .div-hotel-room {\n  flex-grow: 0;\n  margin: 7px 0 4px;\n  padding: 9px 15px;\n  background-color: #fff7e3;\n}\n\n.div-content-hotel-city-item .div-hotel-room .div-pax {\n  margin: 0 0 3px;\n  font-family: Helvetica;\n  font-size: 13px;\n  line-height: 1.45;\n  text-align: left;\n  color: #333333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 298px;\n  white-space: nowrap;\n}\n\n.div-content-hotel-city-item .div-hotel-room .link-change-room {\n  text-decoration: underline;\n  font-size: 13px;\n  line-height: 1.45;\n  color: #f79321;\n  z-index: 8;\n  padding: 10px 0;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show {\n  width: 100%;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .price-original {\n  height: 21px;\n  font-size: 14px;\n  line-height: 1.45;\n  text-align: left;\n  color: #e32b2c;\n  text-decoration: line-through;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .price-total {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.45;\n  text-align: left;\n  color: var(--ion-color-primary);\n  margin-top: -6px;\n}\n\n.div-content-hotel-city-item .div-price .div-price-show .subfix {\n  font-size: 12px;\n  line-height: 1.45;\n  color: var(--ion-color-primary);\n}\n\n.div-content-hotel-city-item .div-price .div-button {\n  padding-right: 13px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2hvdGVsY2l0eWl0ZW0vaG90ZWxjaXR5aXRlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvdGVsY2l0eWl0ZW0vaG90ZWxjaXR5aXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQ0FSOztBREVJO0VBQ0ksaUJBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0FDRVI7O0FEQUk7RUFDSSxhQUFBO0FDR1I7O0FERlE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNJWjs7QURBSTtFQUNJLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0lSOztBREZJO0VBQ0ksZUFBQTtBQ0tSOztBREhJO0VBQ0ksZUFBQTtBQ01SOztBREpJO0VBQ0ksa0JBQUE7QUNPUjs7QURMSTtFQUNJLGlCQUFBO0FDUVI7O0FETEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUVI7O0FETkk7RUFDSSxzQkFBQTtBQ1NSOztBRFBJO0VBQ0ksZ0JBQUE7QUNVUjs7QURSSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7QUNXUjs7QURUUTtFQUNJLGlCQUFBO0FDV1o7O0FEUlE7RUFDSSxnQkFBQTtBQ1VaOztBRFJRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNVWjs7QURQUTtFQUNJLG1CQUFBO0FDU1o7O0FETlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ1FaOztBRE5ZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNRaEI7O0FETlk7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDUWhCOztBRE5ZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNRaEI7O0FETlk7RUFDSSxtQkFBQTtBQ1FoQjs7QURMWTtFQUNJLGlCQUFBO0FDT2hCOztBRExZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDT2hCOztBRExZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNPaEI7O0FETFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNPaEI7O0FESlk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDTWhCOztBRExnQjtFQUNJLGFBQUE7QUNPcEI7O0FETG9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNPeEI7O0FESmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNNcEI7O0FESGdCO0VBQ0ksaUJBQUE7QUNLcEI7O0FERmdCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDSXBCOztBREZnQjtFQUNJLG9CQUFBO0FDSXBCOztBRERnQjtFQUNJLGFBQUE7QUNHcEI7O0FEQXdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtLQUFBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFNUI7O0FEQ29CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0N4Qjs7QURDd0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0M1Qjs7QURDd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0M1Qjs7QURDd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0M1Qjs7QURRWTtFQUVJLGFBQUE7RUFDQSxXQUFBO0FDUGhCOztBRFNnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ1BwQjs7QURTZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1JwQjs7QURVb0I7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDUnhCOztBRFVvQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNSeEI7O0FEY1k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNaaEI7O0FEY2M7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1poQjs7QURlYztFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNiaEI7O0FEZWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ2JwQjs7QURnQmdCO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZHBCOztBRGtCYztFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNoQmhCOztBRGtCaUI7RUFDRyxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pCcEI7O0FEb0JpQjtFQUNHLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDbEJwQjs7QUR3QmdCO0VBQ0ksV0FBQTtBQ3RCcEI7O0FEdUJvQjtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ3JCeEI7O0FEd0JvQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDdEJ4Qjs7QUR5Qm9CO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUN2QnhCOztBRDBCZ0I7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FDeEJwQiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsY2l0eWl0ZW0vaG90ZWxjaXR5aXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5wLWwtOHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5wLWxlZnQtOHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5wLWxlZnQtNHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIH1cclxuICAgIC5kLWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuZGl2LXN0YXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tLWwtNHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgfVxyXG4gICAgLm1heC13aWR0aC0xODB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICB9XHJcbiAgICAubS10b3AtMntcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICAubS10b3AtNHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICB9XHJcbiAgICAubS1sLTEye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgIH1cclxuICAgIC5mLWJvbGR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZXctcm93e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5hdXRvLXdpZHRoe1xyXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWF4LXdpZHRoLTIwMHtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbXtcclxuICAgICAgICB3aWR0aDogMjg0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzI5cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTlweDtcclxuICAgICAgICBwYWRkaW5nOiAxOXB4IDAgOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWVjNztcclxuXHJcbiAgICAgICAgLmRpdi1pY29ue1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDlweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXYtaG90ZWwtaXRlbS1pbmZve1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0OXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LXJvdy10aXRsZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnYtYWxpZ24tY2VudGVye1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtc3Vie1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kaXYtaW1nLWhvdGVse1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1OXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY2cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc2cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZy1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU5cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy1sb2FkZXIgPiBpbWcge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU5cHg7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubm8taW1nLWJhY2tncm91bmR7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LWNvbnRlbnQtcmlnaHR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxvYXQtcHJvbW8taG90ZWx7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYzQzYTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsb2F0LXByb21vLWhvdGVsOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM1YjcyMWI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LWNhdG5hbWV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmRpdi1wb2ludHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAuZC1mbGV4e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1yZWNvbW1lbmR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRpdi1iYWRnZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGMyNDU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5kaXYtdGV4dC1wb2ludHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnRleHQtcG9pbnR7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnAtYm90dG9tLTEye1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuZGl2LWNoZWZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVmLWF2YXRhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1jaGVme1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hlZi1kZXNje1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWYtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWYtb2ZmaWNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGV4dC1yZXN0YW5yYW50LW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LXByaWNle1xyXG4gICAgICAgICAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmhvdC1kZWFse1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U1MjgyMjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0LXByaWNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAucy10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRleHQtc3ViLXByaWNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC02cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLmNscy1iYWRnZXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmM0M2E7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGV4dC1yZXZpZXdze1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZGl2LWhvdGVsLWFkZHJlc3N7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbWctbG9jYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0LWhpZGRlbntcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZGl2LWhvdGVsLXJvb217XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAwIDRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDlweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdlMztcclxuXHJcbiAgICAgICAgICAgICAgICAgLmRpdi1wYXh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyOThweDtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgLmxpbmstY2hhbmdlLXJvb217XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjc5MzIxO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5kaXYtcHJpY2V7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRpdi1wcmljZS1zaG93e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZS1vcmlnaW5hbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2UzMmIyYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucHJpY2UtdG90YWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YmZpeHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGl2LWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAiLCIucC1sLTgge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnAtbGVmdC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5wLWxlZnQtNCB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kLWZsZXggLmRpdi1zdGFyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm0tbC00IHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm1heC13aWR0aC0xODAge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWF4LXdpZHRoOiAxODBweDtcbn1cblxuLm0tdG9wLTIge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tLXRvcC00IHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ubS1sLTEyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG4uZi1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi52aWV3LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXV0by13aWR0aCB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXgtd2lkdGgtMjAwIHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSB7XG4gIHdpZHRoOiAyODRweDtcbiAgbWluLWhlaWdodDogMzI5cHg7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIHBhZGRpbmc6IDE5cHggMCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDlweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1ob3RlbC1pdGVtLWluZm8ge1xuICBtYXJnaW4tdG9wOiA0OXB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXJvdy10aXRsZSB7XG4gIGhlaWdodDogMjFweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLnYtYWxpZ24tY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLnRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaW1nLWhvdGVsIHtcbiAgbWluLXdpZHRoOiA1OXB4O1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA3NnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5pbWctaXRlbSB7XG4gIGhlaWdodDogNzZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNTlweCAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSBpbWctbG9hZGVyID4gaW1nIHtcbiAgaGVpZ2h0OiA3NnB4O1xuICB3aWR0aDogNTlweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLm5vLWltZy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI2JkYmRiZDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1jb250ZW50LXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5mbG9hdC1wcm9tby1ob3RlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MHB4O1xuICBsZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZjNDNhO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICB6LWluZGV4OiAxMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjlweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmZsb2F0LXByb21vLWhvdGVsOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDIycHg7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCAjNWI3MjFiO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAudGV4dC1jYXRuYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZC1mbGV4IC50ZXh0LXJlY29tbWVuZCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmRpdi1iYWRnZSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYzI0NTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kaXYtdGV4dC1wb2ludCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC50ZXh0LXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5wLWJvdHRvbS0xMiB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kaXYtY2hlZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmRpdi1jaGVmIC5jaGVmLWF2YXRhciAuaW1nLWNoZWYge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBvYmplY3QtZml0OiBmaWxsO1xuICBib3JkZXItcmFkaXVzOiA0OHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1kZXNjIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1kZXNjIC5jaGVmLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtZGVzYyAuY2hlZi1vZmZpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcG9pbnQgLmRpdi1jaGVmIC5jaGVmLWRlc2MgLnRleHQtcmVzdGFucmFudC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLmhvdC1kZWFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2U1MjgyMjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAudGV4dC1wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjdweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAudGV4dC1wcmljZSAucy10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLnRleHQtcHJpY2UgLnRleHQtc3ViLXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuY2xzLWJhZGdlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZmM0M2E7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWluLXdpZHRoOiAyOHB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAudGV4dC1yZXZpZXdzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1ob3RlbC1hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaG90ZWwtYWRkcmVzcyAuaW1nLWxvY2F0aW9uIHtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaG90ZWwtYWRkcmVzcyAudGV4dC1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1ob3RlbC1yb29tIHtcbiAgZmxleC1ncm93OiAwO1xuICBtYXJnaW46IDdweCAwIDRweDtcbiAgcGFkZGluZzogOXB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY3ZTM7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtaG90ZWwtcm9vbSAuZGl2LXBheCB7XG4gIG1hcmdpbjogMCAwIDNweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IDI5OHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LWhvdGVsLXJvb20gLmxpbmstY2hhbmdlLXJvb20ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgY29sb3I6ICNmNzkzMjE7XG4gIHotaW5kZXg6IDg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAuZGl2LXByaWNlLXNob3cge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAuZGl2LXByaWNlLXNob3cgLnByaWNlLW9yaWdpbmFsIHtcbiAgaGVpZ2h0OiAyMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2UzMmIyYztcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uZGl2LWNvbnRlbnQtaG90ZWwtY2l0eS1pdGVtIC5kaXYtcHJpY2UgLmRpdi1wcmljZS1zaG93IC5wcmljZS10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuLmRpdi1jb250ZW50LWhvdGVsLWNpdHktaXRlbSAuZGl2LXByaWNlIC5kaXYtcHJpY2Utc2hvdyAuc3ViZml4IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5kaXYtY29udGVudC1ob3RlbC1jaXR5LWl0ZW0gLmRpdi1wcmljZSAuZGl2LWJ1dHRvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufSJdfQ== */"

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