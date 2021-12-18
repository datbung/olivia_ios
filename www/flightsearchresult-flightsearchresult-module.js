(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightsearchresult-flightsearchresult-module"],{

/***/ "./src/app/flightsearchresult/flightsearchresult.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flightsearchresult/flightsearchresult.module.ts ***!
  \*****************************************************************/
/*! exports provided: FlightsearchresultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsearchresultPageModule", function() { return FlightsearchresultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightsearchresult_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightsearchresult.page */ "./src/app/flightsearchresult/flightsearchresult.page.ts");







const routes = [
    {
        path: '',
        component: _flightsearchresult_page__WEBPACK_IMPORTED_MODULE_6__["FlightsearchresultPage"]
    }
];
let FlightsearchresultPageModule = class FlightsearchresultPageModule {
};
FlightsearchresultPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightsearchresult_page__WEBPACK_IMPORTED_MODULE_6__["FlightsearchresultPage"]]
    })
], FlightsearchresultPageModule);



/***/ }),

/***/ "./src/app/flightsearchresult/flightsearchresult.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/flightsearchresult/flightsearchresult.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightsearchresult-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div class=\"div-header-title\" *ngIf=\"step==2 else returntitle\" (click)=\"showChangeInfo()\">\n          <div class=\"div-title\">{{ title }}</div>\n          <div class=\"div-subtitle\">{{ subtitle }} <span class=\"arrow-down\"><img class=\"img-down\" src=\"./assets/ic_flight/icon_down_header.svg\"></span></div>\n        </div>\n        <ng-template #returntitle>\n          <div class=\"div-header-title\" (click)=\"showChangeInfo()\">\n            <div class=\"div-title\">{{ titlereturn }}</div>\n            <div class=\"div-subtitle\">{{ subtitlereturn }} <span class=\"arrow-down\"><img class=\"img-down\" src=\"./assets/ic_flight/icon_down_header.svg\"></span></div>\n          </div>\n        </ng-template>\n        \n        <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" #scrollArea>\n  <ion-progress-bar style=\"color: #003c71;height: 2px;\" *ngIf=\"!loadpricedone\" [value]=\"progressbarloading\" [buffer]=\"progressbarbuffer\"></ion-progress-bar>\n  <div class=\"flightsearchresult-content\">\n    \n    <div *ngIf=\"!loadpricedone else hasprice\" class=\"div-load-price\">\n      <div class=\"text-loading\">Đang tìm chuyến bay tốt nhất</div>\n      <ion-skeleton-text animated style=\"width: 160px;height: 22px;margin-bottom: 10px;border-radius: 16px;\"></ion-skeleton-text>\n\n          <div [ngClass]=\"idx == loadsk.length-1 ? 'div-item-flight-other':'div-item-flight-other m-b-8'\"  *ngFor=\"let itemsk of loadsk; let idx = index\" style=\"height: 80px\">\n            <div class=\"div-first d-flex\">\n              <div >\n                <ion-skeleton-text animated style=\"width: 150px;height: 22px;margin-bottom: 8px;border-radius: 16px;\"></ion-skeleton-text>\n                  <div class=\"d-flex\">\n                    <ion-skeleton-text animated style=\"width: 16px;height: 16px; border-radius: 16px;margin-right: 8px\"></ion-skeleton-text>\n\n                    <ion-skeleton-text animated style=\"width: 150px;height: 16px; border-radius: 16px;\"></ion-skeleton-text>\n                  </div>\n                </div>\n            </div>\n\n            <div class=\"div-second d-flex p-top-8\" style=\"margin-top: 0\">\n              <div class=\"div-button\">\n                <ion-skeleton-text animated style=\"width: 100px;height: 30px;top: -28px\"></ion-skeleton-text>\n              </div>\n            </div>\n        </div>\n\n        <ion-skeleton-text animated style=\"width: 160px;height: 22px;margin-bottom: 10px; margin-top: 24px;border-radius: 16px;\"></ion-skeleton-text>\n        <div [ngClass]=\"idx == loadsk.length-1 ? 'div-item-flight-other':'div-item-flight-other m-b-8'\"  *ngFor=\"let itemsk of loadsk; let idx = index\" style=\"height: 80px\">\n          <div class=\"div-first d-flex\">\n            <div >\n              <ion-skeleton-text animated style=\"width: 150px;height: 22px;margin-bottom: 8px;border-radius: 16px;\"></ion-skeleton-text>\n                <div class=\"d-flex\">\n                  <ion-skeleton-text animated style=\"width: 16px;height: 16px; border-radius: 16px;margin-right: 8px\"></ion-skeleton-text>\n\n                  <ion-skeleton-text animated style=\"width: 150px;height: 16px; border-radius: 16px;\"></ion-skeleton-text>\n                </div>\n              </div>\n          </div>\n\n          <div class=\"div-second d-flex p-top-8\" style=\"margin-top: 0\">\n            <div class=\"div-button\">\n              <ion-skeleton-text animated style=\"width: 100px;height: 30px;top: -28px\"></ion-skeleton-text>\n            </div>\n          </div>\n      </div>\n\n    </div>\n    \n    <ng-template #hasprice>\n      <!-- Chuyến đi -->\n      <div *ngIf=\"step == 2 else returnFlight\">\n\n        <div *ngIf=\"(sortairline && !buttoniVIVUSelected) else nosortdepart\">\n\n          <div *ngIf=\"enableFlightFilter else nodepartFilter\">\n         \n            <div class=\"d-flex\" *ngIf=\"(count >=1 || stoprequest) && (listDepartFilter && listDepartFilter.length >0)\">\n              <div *ngIf=\"!textsort\" class=\"div-title-content p-bottom-8 div-width-150\" >Chọn chuyến bay đi</div>\n              <div *ngIf=\"textsort\" class=\"div-title-content p-bottom-8 div-width-150\" >{{textsort}}</div>\n              <div class=\"text-refresh m-top-4 div-width-100\" (click)=\"doRefresh()\">Cập nhật giá</div>\n            </div>\n  \n            <div [ngClass]=\"!textsort ? 'div-best-choice' : ''\" *ngIf=\"(listDepartFilter && listDepartFilter.length >0 && (count >=1 || stoprequest) ) else nodepartFilterEmpty\">\n              <div [ngClass]=\"idx == listDepartFilter.length-1 ? 'div-item-flight':'div-item-flight m-b-8'\"  *ngFor=\"let item of listDepartFilter; let idx = index\">\n                  <div class=\"div-first d-flex\"  >\n                    <div (click)=\"select(1,item)\">\n                        <div class=\"d-flex\">\n                          <div class=\"div-time\">{{item.departTimeDisplay}}</div>\n                          <div class=\"div-flight-time\">{{item.flightTimeDisplay}}</div>\n                          <div class=\"div-time\">{{item.landingTimeDisplay}}</div>\n                        </div>\n    \n                        <div class=\"div-split\">\n                            <img src=\"./assets/ic_flight/icon_flight_line.svg\">\n                        </div>\n                        \n                        <div class=\"d-flex\">\n                          <div class=\"div-departcode\">\n                              {{item.from}}\n                          </div>\n                          <div class=\"div-flight-time m-0-16\" *ngIf=\"item.stops == 0 else transitflight\">\n                              Bay thẳng\n                          </div>\n                          <ng-template #transitflight>\n                            <div class=\"div-flight-time m-0-16\">{{item.stops}} Chặng dừng</div>\n                          </ng-template>\n  \n                          <div class=\"div-departcode\" *ngIf=\"item.stops == 0 else multidepart\">\n                            {{item.to}}\n                          </div>\n                          <ng-template #multidepart>\n                            <div class=\"div-departcode\">\n                              {{item.details[item.details.length-1].to}}\n                            </div>\n                            \n                          </ng-template>\n                        </div>\n                      </div>\n                    <div class=\"div-flight-price\">\n                      <div class=\"div-text-promo\" *ngIf=\"item.promotions && item.promotions.length>0\" (click)=\"showPromo(item)\">\n                        {{item.promotions[0].promotionNote}}\n                      </div>\n                      <div class=\"flight-before-discount\" *ngIf=\"item.priceBeforeDiscount\">Giá trước KM <span class=\"text-discount\">{{item.priceBeforeDiscount}}</span></div>\n                      <div [ngClass]=\"item.priceBeforeDiscount ? 'flight-price fp-discount' : 'flight-price'\">{{item.priceDisplay}}</div>\n                    </div>\n                    \n                  </div>\n        \n                  <div [ngClass]=\"item.operatedBy ? 'div-second d-flex p-top-8 m-top-6' : 'div-second d-flex p-top-8' \">\n                   \n                    <div class=\"div-logo\"  (click)=\"select(1,item)\">\n                      <img class=\"img-logo logo-vj\" *ngIf=\"item.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                      <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                      <img class=\"img-logo logo-vna\" *ngIf=\"item.airlineCode == 'VietnamAirlines' && !item.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                      <img class=\"img-logo logo-vna\" *ngIf=\"item.operatedBy && item.urlLogo\" [src]=\"item.urlLogo\">\n                      <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                    </div>\n        \n                    <div class=\"flight-type p-l-8 d-flex\"  (click)=\"select(1,item)\">\n                      <div>{{item.ticketType}}</div>\n                    </div>\n\n                    <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && (!item.ticketCondition.luggageSigned || (item.addon && !item.addon.powerSupply)) && (item.airlineCode == 'VietJetAir' || item.airlineCode == 'BambooAirways') \">\n                      <img class=\"img-detail\" src=\"./assets/ic_flight/ic_lug_add.svg\">\n                    </div>\n                      <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && item.ticketCondition.luggageSigned\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 20\" src=\"./assets/ic_flight/case20.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 23\" src=\"./assets/ic_flight/case23.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 30\" src=\"./assets/ic_flight/case30.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 32\" src=\"./assets/ic_flight/case32.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 15\" src=\"./assets/ic_flight/case15.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 40\" src=\"./assets/ic_flight/case40.svg\">\n                      </div>\n                      <div class=\"icon-detail\" *ngIf=\"item && item.addon && item.addon.powerSupply\">\n                        <img class=\"img-detail\" src=\"./assets/ic_flight/ic_charge_tealish.svg\">\n                      </div>\n\n                    <div class=\"p-l-4\"  (click)=\"showFlightDetail(item, 1)\">\n                      <img class=\"img-down ic-down\" src=\"./assets/ic_flight/icon_down.svg\">\n                    </div>\n    \n                    <div [ngClass]=\" (item.operatedBy || item.priceBeforeDiscount) ? 'div-button top-0' : 'div-button' \"  (click)=\"select(1,item)\">\n                      <button ion-button round class=\"button btn-select\" clear>\n                        Chọn\n                      </button>\n                    </div>\n                  </div>\n  \n                  <div *ngIf=\"item.operatedBy\" class=\"text-operatedBy\">{{item.operatedBy}}</div>\n                \n              </div>\n            </div>\n            <ng-template #nodepartFilterEmpty> \n              <div class=\"div-text-center\" *ngIf=\"(!listDepartFilter || (listDepartFilter && listDepartFilter.length ==0))\">\n                <div class=\"p-top-60 m-bottom-24\">\n                  <img src=\"./assets/ic_flight/icon_notfound.svg\" >\n                </div>\n  \n                <div class=\"text-title-empty\">Không có chuyến bay</div>\n                <div class=\"text-empty m-top-8\">Vui lòng chọn ngày khác hoặc đổi lại tìm kiếm</div>\n                <div class=\"div-button-empty d-flex\">\n                    <div class=\"div-width-100\">\n                      <button ion-button round (click)=\"showChangeInfo()\" class=\"button btn-change-search\" clear>Đổi tìm kiếm</button>\n                    </div>\n                    <div class=\"div-width-100 m-left-8\" *ngIf=\"enableFlightFilter\">\n                      <button ion-button round (click)=\"clearSearchFilter()\" class=\"button btn-change-date\" clear>Xóa lọc</button>\n                    </div>\n                </div>\n            </div>\n            </ng-template>\n              \n          </div>\n\n          <ng-template #nodepartFilter>\n            <div class=\"d-flex\" *ngIf=\"(count >=1 || stoprequest) && (listDepart && listDepart.length >0)\">\n              <div *ngIf=\"!textsort\" class=\"div-title-content p-bottom-8 div-width-150\" >Chọn chuyến bay đi</div>\n              <div *ngIf=\"textsort\" class=\"div-title-content p-bottom-8 div-width-150\" >{{textsort}}</div>\n              <div class=\"text-refresh m-top-4 div-width-100\" (click)=\"doRefresh()\">Cập nhật giá</div>\n            </div>\n  \n            <div [ngClass]=\"!textsort ? 'div-best-choice' : ''\" *ngIf=\"(listDepart && listDepart.length >0 && (count >=1 || stoprequest) ) else nodepartEmpty\">\n              <div [ngClass]=\"idx == listDepart.length-1 ? 'div-item-flight':'div-item-flight m-b-8'\"  *ngFor=\"let item of listDepart; let idx = index\">\n                  <div class=\"div-first d-flex\" >\n                    <div  (click)=\"select(1,item)\">\n                        <div class=\"d-flex\">\n                          <div class=\"div-time\">{{item.departTimeDisplay}}</div>\n                          <div class=\"div-flight-time\">{{item.flightTimeDisplay}}</div>\n                          <div class=\"div-time\">{{item.landingTimeDisplay}}</div>\n                        </div>\n    \n                        <div class=\"div-split\">\n                            <img src=\"./assets/ic_flight/icon_flight_line.svg\">\n                        </div>\n                        \n                        <div class=\"d-flex\">\n                          <div class=\"div-departcode\">\n                              {{item.from}}\n                          </div>\n                          <div class=\"div-flight-time m-0-16\" *ngIf=\"item.stops == 0 else transitflight\">\n                              Bay thẳng\n                          </div>\n                          <ng-template #transitflight>\n                            <div class=\"div-flight-time m-0-16\">{{item.stops}} Chặng dừng</div>\n                          </ng-template>\n  \n                          <div class=\"div-departcode\" *ngIf=\"item.stops == 0 else multidepart\">\n                            {{item.to}}\n                          </div>\n                          <ng-template #multidepart>\n                            <div class=\"div-departcode\">\n                              {{item.details[item.details.length-1].to}}\n                            </div>\n                            \n                          </ng-template>\n                        </div>\n                      </div>\n                    <div class=\"div-flight-price\">\n                      <div class=\"div-text-promo\" *ngIf=\"item.promotions && item.promotions.length>0\" (click)=\"showPromo(item)\">\n                        {{item.promotions[0].promotionNote}}\n                      </div>\n                      <div class=\"flight-before-discount\" *ngIf=\"item.priceBeforeDiscount\">Giá trước KM <span class=\"text-discount\">{{item.priceBeforeDiscount}}</span></div>\n                      <div [ngClass]=\"item.priceBeforeDiscount ? 'flight-price fp-discount' : 'flight-price'\">{{item.priceDisplay}}</div>\n                    </div>\n                    \n                  </div>\n        \n                  <div [ngClass]=\"item.operatedBy ? 'div-second d-flex p-top-8 m-top-6' : 'div-second d-flex p-top-8' \">\n                   \n                    <div class=\"div-logo\"  (click)=\"select(1,item)\">\n                      <img class=\"img-logo logo-vj\" *ngIf=\"item.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                      <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                      <img class=\"img-logo logo-vna\" *ngIf=\"item.airlineCode == 'VietnamAirlines' && !item.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                      <img class=\"img-logo logo-vna\" *ngIf=\"item.operatedBy && item.urlLogo\" [src]=\"item.urlLogo\">\n                      <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                    </div>\n        \n                    <div class=\"flight-type p-l-8 d-flex\"  (click)=\"select(1,item)\">\n                      <div>{{item.ticketType}}</div>\n                    </div>\n\n                    <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && (!item.ticketCondition.luggageSigned || (item.addon && !item.addon.powerSupply) || !item.addon) && (item.airlineCode == 'VietJetAir' || item.airlineCode == 'BambooAirways') \">\n                      <img class=\"img-detail\" src=\"./assets/ic_flight/ic_lug_add.svg\">\n                    </div>\n                      <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && item.ticketCondition.luggageSigned\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 20\" src=\"./assets/ic_flight/case20.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 23\" src=\"./assets/ic_flight/case23.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 30\" src=\"./assets/ic_flight/case30.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 32\" src=\"./assets/ic_flight/case32.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 15\" src=\"./assets/ic_flight/case15.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 40\" src=\"./assets/ic_flight/case40.svg\">\n                      </div>\n                      <div class=\"icon-detail\" *ngIf=\"item && item.addon && item.addon.powerSupply\">\n                        <img class=\"img-detail\" src=\"./assets/ic_flight/ic_charge_tealish.svg\">\n                      </div>\n                      \n                    <div class=\"p-l-4\"  (click)=\"showFlightDetail(item, 1)\">\n                      <img class=\"img-down ic-down\" src=\"./assets/ic_flight/icon_down.svg\">\n                    </div>\n    \n                    <div [ngClass]=\"(item.operatedBy || item.priceBeforeDiscount) ? 'div-button top-0' : 'div-button' \"  (click)=\"select(1,item)\">\n                      <button ion-button round class=\"button btn-select\" clear>\n                        Chọn\n                      </button>\n                    </div>\n                  </div>\n  \n                  <div *ngIf=\"item.operatedBy\" class=\"text-operatedBy\">{{item.operatedBy}}</div>\n                \n                </div>\n              </div>\n              <ng-template #nodepartEmpty> \n                <div class=\"div-text-center\" *ngIf=\"(!listDepart || (listDepart && listDepart.length ==0))\">\n                  <div class=\"p-top-60 m-bottom-24\">\n                    <img src=\"./assets/ic_flight/icon_notfound.svg\" >\n                  </div>\n    \n                  <div class=\"text-title-empty\">Không có chuyến bay</div>\n                  <div class=\"text-empty m-top-8\">Vui lòng chọn ngày khác hoặc đổi lại tìm kiếm</div>\n                  <div class=\"div-button-empty d-flex\">\n                      <div class=\"div-width-100\">\n                        <button ion-button round (click)=\"showChangeInfo()\" class=\"button btn-change-search\" clear>Đổi tìm kiếm</button>\n                      </div>\n                      <div class=\"div-width-100 m-left-8\" *ngIf=\"enableFlightFilter\">\n                        <button ion-button round (click)=\"clearSearchFilter()\" class=\"button btn-change-date\" clear>Xóa lọc</button>\n                      </div>\n                  </div>\n                </div>\n              </ng-template>\n\n          </ng-template>\n          \n        </div>\n\n        <ng-template #nosortdepart>\n          <div class=\"d-flex\" *ngIf=\"(bestpricedepart && bestpricedepart.length >0 && (count >=1 || stoprequest) )\">\n            <div class=\"div-title-content p-bottom-8 div-width-150\" >Lựa chọn tốt nhất</div>\n            <div class=\"text-refresh m-top-4 div-width-100\"  (click)=\"doRefresh()\">Cập nhật giá</div>\n          </div>\n          <div class=\"div-best-choice\" *ngIf=\"(bestpricedepart && bestpricedepart.length >0 && (count >=1 || stoprequest) )\">\n            <div [ngClass]=\"idx == bestpricedepart.length-1 ? 'div-item-flight': (idx == 0 ? 'div-item-flight m-b-8 bp-firstitem' : 'div-item-flight m-b-8') \"  *ngFor=\"let item of bestpricedepart; let idx = index\">\n                <div class=\"div-first d-flex\"  >\n                  <div (click)=\"select(1,item)\">\n                      <div class=\"d-flex\">\n                        <div class=\"div-time\">{{item.departTimeDisplay}}</div>\n                        <div class=\"div-flight-time\">{{item.flightTimeDisplay}}</div>\n                        <div class=\"div-time\">{{item.landingTimeDisplay}}</div>\n                      </div>\n  \n                      <div class=\"div-split\">\n                          <img src=\"./assets/ic_flight/icon_flight_line.svg\">\n                      </div>\n                      \n                      <div class=\"d-flex\">\n                        <div class=\"div-departcode\">\n                            {{item.from}}\n                        </div>\n                        <div class=\"div-flight-time m-0-16\" *ngIf=\"item.stops == 0 else transitflight\">\n                            Bay thẳng\n                        </div>\n                        <ng-template #transitflight>\n                          <div class=\"div-flight-time m-0-16\">{{item.stops}} Chặng dừng</div>\n                        </ng-template>\n\n                        <div class=\"div-departcode\" *ngIf=\"item.stops == 0 else multidepart\">\n                          {{item.to}}\n                        </div>\n                        <ng-template #multidepart>\n                          <div class=\"div-departcode\">\n                            {{item.details[item.details.length-1].to}}\n                          </div>\n                          \n                        </ng-template>\n                      </div>\n                    </div>\n                  <div class=\"div-flight-price\">\n                    <div class=\"div-text-promo\" *ngIf=\"item.promotions && item.promotions.length>0\" (click)=\"showPromo(item)\">\n                      {{item.promotions[0].promotionNote}}\n                    </div>\n                    <div class=\"flight-before-discount\" *ngIf=\"item.priceBeforeDiscount\">Giá trước KM <span class=\"text-discount\">{{item.priceBeforeDiscount}}</span></div>\n                    <div [ngClass]=\"item.priceBeforeDiscount ? 'flight-price fp-discount' : 'flight-price'\">{{item.priceDisplay}}</div>\n                  </div>\n                  \n                </div>\n      \n                <div [ngClass]=\"item.operatedBy ? 'div-second d-flex p-top-8 m-top-6' : 'div-second d-flex p-top-8' \">\n                 \n                  <div class=\"div-logo\"  (click)=\"select(1,item)\">\n                    <img class=\"img-logo logo-vj\" *ngIf=\"item.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                    <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                    <img class=\"img-logo logo-vna\" *ngIf=\"item.airlineCode == 'VietnamAirlines' && !item.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                    <img class=\"img-logo logo-vna\" *ngIf=\"item.operatedBy && item.urlLogo\" [src]=\"item.urlLogo\">\n                    <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                  </div>\n      \n                  <div class=\"flight-type p-l-8 d-flex\"  (click)=\"select(1,item)\">\n                      <div>{{item.ticketType}}</div>\n                      \n                  </div>\n                  <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && (!item.ticketCondition.luggageSigned || (item.addon && !item.addon.powerSupply)  || !item.addon) && (item.airlineCode == 'VietJetAir' || item.airlineCode == 'BambooAirways') \">\n                    <img class=\"img-detail\" src=\"./assets/ic_flight/ic_lug_add.svg\">\n                  </div>\n                    <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && item.ticketCondition.luggageSigned\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 20\" src=\"./assets/ic_flight/case20.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 23\" src=\"./assets/ic_flight/case23.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 30\" src=\"./assets/ic_flight/case30.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 32\" src=\"./assets/ic_flight/case32.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 15\" src=\"./assets/ic_flight/case15.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 40\" src=\"./assets/ic_flight/case40.svg\">\n                    </div>\n                    <div class=\"icon-detail\" *ngIf=\"item && item.addon && item.addon.powerSupply\">\n                      <img class=\"img-detail\" src=\"./assets/ic_flight/ic_charge_tealish.svg\">\n                    </div>\n                    \n\n                  <div class=\"p-l-4\"  (click)=\"showFlightDetail(item, 1)\">\n                    <img class=\"img-down ic-down\" src=\"./assets/ic_flight/icon_down.svg\">\n                  </div>\n  \n                  <div [ngClass]=\"(item.operatedBy || item.priceBeforeDiscount) ? 'div-button top-0' : 'div-button' \"  (click)=\"select(1,item)\">\n                    <button ion-button round class=\"button btn-select\" clear>\n                      Chọn\n                    </button>\n                  </div>\n                </div>\n                <div *ngIf=\"item.operatedBy\" class=\"text-operatedBy\">{{item.operatedBy}}</div>\n            </div>\n          </div>\n\n          <div class=\"div-text-center\" *ngIf=\"(!bestpricedepart || (bestpricedepart && bestpricedepart.length ==0))\">\n            <div class=\"p-top-60 m-bottom-24\">\n              <img src=\"./assets/ic_flight/icon_notfound.svg\" >\n            </div>\n\n            <div class=\"text-title-empty\">Không có chuyến bay</div>\n            <div class=\"text-empty m-top-8\">Vui lòng chọn ngày khác hoặc đổi lại tìm kiếm</div>\n            <div class=\"div-button-empty d-flex\">\n                <div class=\"div-width-100\">\n                  <button ion-button round (click)=\"showChangeInfo()\" class=\"button btn-change-search\" clear>Đổi tìm kiếm</button>\n                </div>\n                <div class=\"div-width-100 m-left-8\" *ngIf=\"!enableFlightFilter\">\n                  <button ion-button round (click)=\"showChangeDate()\" class=\"button btn-change-date\" clear>Đổi ngày</button>\n                </div>\n                <div class=\"div-width-100 m-left-8\" *ngIf=\"enableFlightFilter\">\n                  <button ion-button round (click)=\"clearSearchFilter()\" class=\"button btn-change-date\" clear>Xóa lọc</button>\n                </div>\n            </div>\n          </div>\n\n          <div class=\"div-other-choice-title div-title-content p-bottom-8 p-top-32 d-flex\" *ngIf=\"(otherpricedepart && otherpricedepart.length >0)\">\n            <div class=\"\">Các lựa chọn khác</div>\n            <div class=\"text-other-choice p-l-8\">({{ otherpricedepart.length }} lựa chọn khác)</div>\n          </div>\n          <div class=\"div-other-choice\" *ngIf=\"(otherpricedepart && otherpricedepart.length >0) else nodatabestpricedepartother\">\n            <div [ngClass]=\"dx == otherpricedepart.length-1? 'div-item-flight-other':'div-item-flight-other m-b-8'\" *ngFor=\"let itemother of otherpricedepart; let idx = index\">\n                <div class=\"div-first d-flex\"  >\n                    <div (click)=\"select(1,itemother)\">\n                      <div class=\"d-flex\">\n                        <div class=\"div-time\">{{itemother.departTimeDisplay}}</div>\n                        <div class=\"div-flight-time\">{{itemother.flightTimeDisplay}}</div>\n                        <div class=\"div-time\">{{itemother.landingTimeDisplay}}</div>\n                      </div>\n\n                      <div class=\"div-split\">\n                          <img src=\"./assets/ic_flight/icon_flight_line.svg\">\n                      </div>\n                      \n                      <div class=\"d-flex\">\n                        <div class=\"div-departcode\">\n                            {{itemother.from}}\n                        </div>\n                        <div class=\"div-flight-time m-0-16\" *ngIf=\"itemother.stops == 0 else transitflight\">\n                            Bay thẳng\n                        </div>\n                        <ng-template #transitflight>\n                          <div class=\"div-flight-time m-0-16\">{{itemother.stops}} Chặng dừng</div>\n                        </ng-template>\n\n                        <div class=\"div-departcode\" *ngIf=\"itemother.stops == 0 else multidepart\">\n                          {{itemother.to}}\n                        </div>\n                        <ng-template #multidepart>\n                          <div class=\"div-departcode\">\n                            {{itemother.details[itemother.details.length-1].to}}\n                          </div>\n                          \n                        </ng-template>\n                      </div>\n                    </div>\n                  <div class=\"div-flight-price\">\n                    <div class=\"div-text-promo\" *ngIf=\"itemother.promotions && itemother.promotions.length>0\" (click)=\"showPromo(itemother)\">\n                      {{itemother.promotions[0].promotionNote}}\n                    </div>\n                    <div class=\"flight-before-discount\" *ngIf=\"itemother.priceBeforeDiscount\">Giá trước KM <span class=\"text-discount\">{{itemother.priceBeforeDiscount}}</span></div>\n                    <div [ngClass]=\"itemother.priceBeforeDiscount ? 'flight-price fp-discount' : 'flight-price'\">{{itemother.priceDisplay}}</div>\n                  </div>\n                </div>\n      \n                <div [ngClass]=\"itemother.operatedBy ? 'div-second d-flex p-top-8 m-top-6' : 'div-second d-flex p-top-8' \">\n              \n                  <div class=\"div-logo\" (click)=\"select(1,itemother)\">\n                    <img class=\"img-logo logo-vj\" *ngIf=\"itemother.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                    <img class=\"img-logo\" *ngIf=\"itemother.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                    <img class=\"img-logo logo-vna\" *ngIf=\"itemother.airlineCode == 'VietnamAirlines' && !itemother.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                    <img class=\"img-logo logo-vna\" *ngIf=\"itemother.operatedBy && itemother.urlLogo\" [src]=\"itemother.urlLogo\">\n                    <img class=\"img-logo\" *ngIf=\"itemother.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                  </div>\n      \n                  <div class=\"flight-type p-l-8 d-flex\" (click)=\"select(1,itemother)\">\n                    <div>{{itemother.ticketType}}</div>\n                    \n                  </div>\n\n                  <div class=\"icon-detail\" *ngIf=\"itemother && itemother.ticketCondition && (!itemother.ticketCondition.luggageSigned || (itemother.addon && !itemother.addon.powerSupply)  || !itemother.addon) && (itemother.airlineCode == 'VietJetAir' || itemother.airlineCode == 'BambooAirways') \">\n                    <img class=\"img-detail\" src=\"./assets/ic_flight/ic_lug_add.svg\">\n                  </div>\n                      <div class=\"icon-detail\" *ngIf=\"itemother && itemother.ticketCondition && itemother.ticketCondition.luggageSigned\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 20\" src=\"./assets/ic_flight/case20.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 23\" src=\"./assets/ic_flight/case23.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 30\" src=\"./assets/ic_flight/case30.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 32\" src=\"./assets/ic_flight/case32.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 15\" src=\"./assets/ic_flight/case15.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 40\" src=\"./assets/ic_flight/case40.svg\">\n                      </div>\n                      <div class=\"icon-detail\" *ngIf=\"itemother && itemother.addon && itemother.addon.powerSupply\">\n                        <img class=\"img-detail\" src=\"./assets/ic_flight/ic_charge_tealish.svg\">\n                      </div>\n                      \n\n                  <div class=\"p-l-4\" (click)=\"showFlightDetail(itemother, 1)\">\n                    <img class=\"img-down ic-down\" src=\"./assets/ic_flight/icon_down.svg\">\n                  </div>\n                  <div [ngClass]=\"(itemother.operatedBy || itemother.priceBeforeDiscount) ? 'div-button top-0' : 'div-button' \" (click)=\"select(1,itemother)\">\n                    <button ion-button round class=\"button btn-select\" clear>\n                      Chọn\n                    </button>\n                  </div>\n                  </div>\n                  <div *ngIf=\"itemother.operatedBy\" class=\"text-operatedBy\">{{itemother.operatedBy}}</div>\n              </div>\n            </div>\n\n          \n        </ng-template>\n\n      </div>\n\n      <!-- Chuyến về -->\n    <ng-template #returnFlight>\n      <div class=\"div-depart-flight-choice d-flex\">\n        <div class=\"div-icon-flight v-align-center\">\n            <img src=\"./assets/ic_flight/flight_cin.svg\">\n        </div>\n        <div class=\"div-flight-info\">\n            <div class=\"div-time-and-price\">{{departFlight.timeDisplay}}   ·  {{departFlight.priceDisplay}}</div>\n            <div class=\"div-code\">{{departFlight.airlineCode}}   ·  {{departFlight.from}} - {{departFlight.to}}</div>\n        </div>\n        <div class=\"div-text-change v-align-center\" (click)=\"goback()\">Thay đổi</div>\n      </div>\n      <div *ngIf=\"(sortairline && !buttoniVIVUSelected) else nosortreturn\">\n\n        <div *ngIf=\"enableFlightFilterReturn else noreturnFilter\">\n       \n          <div class=\"d-flex\" *ngIf=\"(count >=1 || stoprequest) && (listReturnFilter && listReturnFilter.length >0)\">\n            <div *ngIf=\"!textsort\" class=\"div-title-content p-bottom-8 m-top-54 div-width-150\" >Chọn chuyến bay về</div>\n            <div *ngIf=\"textsort\" class=\"div-title-content p-bottom-8 m-top-54 div-width-150\" >{{textsort}}</div>\n            <div class=\"text-refresh m-top-58 div-width-100\" (click)=\"doRefresh()\">Cập nhật giá</div>\n          </div>\n\n          <div [ngClass]=\"!textsort ? 'div-best-choice' : ''\" *ngIf=\"(listReturnFilter && listReturnFilter.length >0 && (count >=1 || stoprequest) ) else noreturnFilterEmpty\">\n            <div [ngClass]=\"idx == listReturnFilter.length-1 ? 'div-item-flight':'div-item-flight m-b-8'\"  *ngFor=\"let item of listReturnFilter; let idx = index\">\n                <div class=\"div-first d-flex\"  >\n                  <div (click)=\"select(2,item)\">\n                      <div class=\"d-flex\">\n                        <div class=\"div-time\">{{item.departTimeDisplay}}</div>\n                        <div class=\"div-flight-time\">{{item.flightTimeDisplay}}</div>\n                        <div class=\"div-time\">{{item.landingTimeDisplay}}</div>\n                      </div>\n  \n                      <div class=\"div-split\">\n                          <img src=\"./assets/ic_flight/icon_flight_line.svg\">\n                      </div>\n                      \n                      <div class=\"d-flex\">\n                        <div class=\"div-departcode\">\n                            {{item.from}}\n                        </div>\n                        <div class=\"div-flight-time m-0-16\" *ngIf=\"item.stops == 0 else transitflight\">\n                            Bay thẳng\n                        </div>\n                        <ng-template #transitflight>\n                          <div class=\"div-flight-time m-0-16\">{{item.stops}} Chặng dừng</div>\n                        </ng-template>\n\n                        <div class=\"div-departcode\" *ngIf=\"item.stops == 0 else multidepart\">\n                          {{item.to}}\n                        </div>\n                        <ng-template #multidepart>\n                          <div class=\"div-departcode\">\n                            {{item.details[item.details.length-1].to}}\n                          </div>\n                          \n                        </ng-template>\n                      </div>\n                    </div>\n                  <div class=\"div-flight-price\">\n                    <div class=\"div-text-promo\" *ngIf=\"item.promotions && item.promotions.length>0\" (click)=\"showPromo(item)\">\n                      {{item.promotions[0].promotionNote}}\n                    </div>\n                    <div class=\"flight-before-discount\" *ngIf=\"item.priceBeforeDiscount\">Giá trước KM <span class=\"text-discount\">{{item.priceBeforeDiscount}}</span></div>\n                    <div [ngClass]=\"item.priceBeforeDiscount ? 'flight-price fp-discount' : 'flight-price'\">{{item.priceDisplay}}</div>\n                  </div>\n                  \n                </div>\n      \n                <div [ngClass]=\"item.operatedBy ? 'div-second d-flex p-top-8 m-top-6' : 'div-second d-flex p-top-8' \">\n                 \n                  <div class=\"div-logo\"  (click)=\"select(2,item)\">\n                    <img class=\"img-logo logo-vj\" *ngIf=\"item.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                    <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                    <img class=\"img-logo logo-vna\" *ngIf=\"item.airlineCode == 'VietnamAirlines' && !item.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                    <img class=\"img-logo logo-vna\" *ngIf=\"item.operatedBy && item.urlLogo\" [src]=\"item.urlLogo\">\n                    <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                  </div>\n      \n                  <div class=\"flight-type p-l-8 d-flex\"  (click)=\"select(2,item)\">\n                    <div>{{item.ticketType}}</div>\n                  </div>\n\n                  <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && (!item.ticketCondition.luggageSigned || (item.addon && !item.addon.powerSupply)  || !item.addon) && (item.airlineCode == 'VietJetAir' || item.airlineCode == 'BambooAirways') \">\n                    <img class=\"img-detail\" src=\"./assets/ic_flight/ic_lug_add.svg\">\n                  </div>\n                    <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && item.ticketCondition.luggageSigned\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 20\" src=\"./assets/ic_flight/case20.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 23\" src=\"./assets/ic_flight/case23.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 30\" src=\"./assets/ic_flight/case30.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 32\" src=\"./assets/ic_flight/case32.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 15\" src=\"./assets/ic_flight/case15.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 40\" src=\"./assets/ic_flight/case40.svg\">\n                    </div>\n                    <div class=\"icon-detail\" *ngIf=\"item && item.addon && item.addon.powerSupply\">\n                      <img class=\"img-detail\" src=\"./assets/ic_flight/ic_charge_tealish.svg\">\n                    </div>\n                    \n                  <div class=\"p-l-4\"  (click)=\"showFlightDetail(item, 2)\">\n                    <img class=\"img-down ic-down\" src=\"./assets/ic_flight/icon_down.svg\">\n                  </div>\n  \n                  <div [ngClass]=\"(item.operatedBy || item.priceBeforeDiscount) ? 'div-button top-0' : 'div-button' \"  (click)=\"select(2,item)\">\n                    <button ion-button round class=\"button btn-select\" clear>\n                      Chọn\n                    </button>\n                  </div>\n                </div>\n\n                <div *ngIf=\"item.operatedBy\" class=\"text-operatedBy\">{{item.operatedBy}}</div>\n              \n            </div>\n          </div>\n          <ng-template #noreturnFilterEmpty> \n            <div class=\"div-text-center\" *ngIf=\"(!listReturnFilter || (listReturnFilter && listReturnFilter.length ==0))\">\n              <div class=\"p-top-60 m-bottom-24\">\n                <img src=\"./assets/ic_flight/icon_notfound.svg\" >\n              </div>\n\n              <div class=\"text-title-empty\">Không có chuyến bay</div>\n              <div class=\"text-empty m-top-8\">Vui lòng chọn ngày khác hoặc đổi lại tìm kiếm</div>\n              <div class=\"div-button-empty d-flex\">\n                  <div class=\"div-width-100\">\n                    <button ion-button round (click)=\"showChangeInfo()\" class=\"button btn-change-search\" clear>Đổi tìm kiếm</button>\n                  </div>\n                  <div class=\"div-width-100 m-left-8\" *ngIf=\"enableFlightFilterReturn\">\n                    <button ion-button round (click)=\"clearSearchFilter()\" class=\"button btn-change-date\" clear>Xóa lọc</button>\n                  </div>\n              </div>\n          </div>\n          </ng-template>\n            \n        </div>\n\n        <ng-template #noreturnFilter>\n          <div class=\"d-flex\" *ngIf=\"(count >=1 || stoprequest) && (listReturn && listReturn.length >0)\">\n            <div *ngIf=\"!textsort\" class=\"div-title-content p-bottom-8 m-top-54 div-width-150\" >Chọn chuyến bay về</div>\n            <div *ngIf=\"textsort\" class=\"div-title-content p-bottom-8 m-top-54 div-width-150\" >{{textsort}}</div>\n            <div class=\"text-refresh m-top-58 div-width-100\" (click)=\"doRefresh()\">Cập nhật giá</div>\n          </div>\n\n          <div [ngClass]=\"!textsort ? 'div-best-choice' : ''\" *ngIf=\"(listReturn && listReturn.length >0 && (count >=1 || stoprequest) ) else noreturnEmpty\">\n            <div [ngClass]=\"idx == listReturn.length-1 ? 'div-item-flight':'div-item-flight m-b-8'\"  *ngFor=\"let item of listReturn; let idx = index\">\n                <div class=\"div-first d-flex\"  >\n                  <div (click)=\"select(2,item)\">\n                      <div class=\"d-flex\">\n                        <div class=\"div-time\">{{item.departTimeDisplay}}</div>\n                        <div class=\"div-flight-time\">{{item.flightTimeDisplay}}</div>\n                        <div class=\"div-time\">{{item.landingTimeDisplay}}</div>\n                      </div>\n  \n                      <div class=\"div-split\">\n                          <img src=\"./assets/ic_flight/icon_flight_line.svg\">\n                      </div>\n                      \n                      <div class=\"d-flex\">\n                        <div class=\"div-departcode\">\n                            {{item.from}}\n                        </div>\n                        <div class=\"div-flight-time m-0-16\" *ngIf=\"item.stops == 0 else transitflight\">\n                            Bay thẳng\n                        </div>\n                        <ng-template #transitflight>\n                          <div class=\"div-flight-time m-0-16\">{{item.stops}} Chặng dừng</div>\n                        </ng-template>\n\n                        <div class=\"div-departcode\" *ngIf=\"item.stops == 0 else multidepart\">\n                          {{item.to}}\n                        </div>\n                        <ng-template #multidepart>\n                          <div class=\"div-departcode\">\n                            {{item.details[item.details.length-1].to}}\n                          </div>\n                          \n                        </ng-template>\n                      </div>\n                    </div>\n                  <div class=\"div-flight-price\">\n                    <div class=\"div-text-promo\" *ngIf=\"item.promotions && item.promotions.length>0\" (click)=\"showPromo(item)\">\n                      {{item.promotions[0].promotionNote}}\n                    </div>\n                    <div class=\"flight-before-discount\" *ngIf=\"item.priceBeforeDiscount\">Giá trước KM <span class=\"text-discount\">{{item.priceBeforeDiscount}}</span></div>\n                    <div [ngClass]=\"item.priceBeforeDiscount ? 'flight-price fp-discount' : 'flight-price'\">{{item.priceDisplay}}</div>\n                  </div>\n                  \n                </div>\n      \n                <div [ngClass]=\"item.operatedBy ? 'div-second d-flex p-top-8 m-top-6' : 'div-second d-flex p-top-8' \">\n                 \n                  <div class=\"div-logo\"  (click)=\"select(2,item)\">\n                    <img class=\"img-logo logo-vj\" *ngIf=\"item.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                    <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                    <img class=\"img-logo logo-vna\" *ngIf=\"item.airlineCode == 'VietnamAirlines' && !item.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                    <img class=\"img-logo logo-vna\" *ngIf=\"item.operatedBy && item.urlLogo\" [src]=\"item.urlLogo\">\n                    <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                  </div>\n      \n                  <div class=\"flight-type p-l-8 d-flex\"  (click)=\"select(2,item)\">\n                    <div>{{item.ticketType}}</div>\n                   \n                  </div>\n\n                  <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && (!item.ticketCondition.luggageSigned || (item.addon && !item.addon.powerSupply)  || !item.addon) && (item.airlineCode == 'VietJetAir' || item.airlineCode == 'BambooAirways') \">\n                    <img class=\"img-detail\" src=\"./assets/ic_flight/ic_lug_add.svg\">\n                  </div>\n                    <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && item.ticketCondition.luggageSigned\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 20\" src=\"./assets/ic_flight/case20.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 23\" src=\"./assets/ic_flight/case23.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 30\" src=\"./assets/ic_flight/case30.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 32\" src=\"./assets/ic_flight/case32.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 15\" src=\"./assets/ic_flight/case15.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 40\" src=\"./assets/ic_flight/case40.svg\">\n                    </div>\n                    <div class=\"icon-detail\" *ngIf=\"item && item.addon && item.addon.powerSupply\">\n                      <img class=\"img-detail\" src=\"./assets/ic_flight/ic_charge_tealish.svg\">\n                    </div>\n                    \n                  <div class=\"p-l-4\"  (click)=\"showFlightDetail(item, 2)\">\n                    <img class=\"img-down ic-down\" src=\"./assets/ic_flight/icon_down.svg\">\n                  </div>\n  \n                  <div [ngClass]=\"(item.operatedBy || item.priceBeforeDiscount) ? 'div-button top-0' : 'div-button' \"  (click)=\"select(2,item)\">\n                    <button ion-button round class=\"button btn-select\" clear>\n                      Chọn\n                    </button>\n                  </div>\n                </div>\n\n                <div *ngIf=\"item.operatedBy\" class=\"text-operatedBy\">{{item.operatedBy}}</div>\n              \n              </div>\n            </div>\n            <ng-template #noreturnEmpty> \n              <div class=\"div-text-center\" *ngIf=\"(!listReturn || (listReturn && listReturn.length ==0))\">\n                <div class=\"p-top-60 m-bottom-24\">\n                  <img src=\"./assets/ic_flight/icon_notfound.svg\" >\n                </div>\n  \n                <div class=\"text-title-empty\">Không có chuyến bay</div>\n                <div class=\"text-empty m-top-8\">Vui lòng chọn ngày khác hoặc đổi lại tìm kiếm</div>\n                <div class=\"div-button-empty d-flex\">\n                    <div class=\"div-width-100\">\n                      <button ion-button round (click)=\"showChangeInfo()\" class=\"button btn-change-search\" clear>Đổi tìm kiếm</button>\n                    </div>\n                    <div class=\"div-width-100 m-left-8\" *ngIf=\"enableFlightFilterReturn\">\n                      <button ion-button round (click)=\"clearSearchFilter()\" class=\"button btn-change-date\" clear>Xóa lọc</button>\n                    </div>\n                </div>\n              </div>\n            </ng-template>\n\n        </ng-template>\n        \n      </div>\n\n      <ng-template #nosortreturn>\n        <div class=\"d-flex\" *ngIf=\"(bestpricereturn && bestpricereturn.length >0 && (count >=1 || stoprequest) )\">\n          <div class=\"div-title-content p-bottom-8 m-top-54 div-width-150\" >Lựa chọn tốt nhất</div>\n          <div class=\"text-refresh m-top-58 div-width-100\"  (click)=\"doRefresh()\">Cập nhật giá</div>\n        </div>\n        <div class=\"div-best-choice\" *ngIf=\"(bestpricereturn && bestpricereturn.length >0 && (count >=1 || stoprequest) )\">\n          <div [ngClass]=\"idx == bestpricereturn.length-1 ? 'div-item-flight':(idx == 0 ? 'div-item-flight m-b-8 bp-firstitem' : 'div-item-flight m-b-8')\"  *ngFor=\"let item of bestpricereturn; let idx = index\">\n              <div class=\"div-first d-flex\"  >\n                <div (click)=\"select(2,item)\">\n                    <div class=\"d-flex\">\n                      <div class=\"div-time\">{{item.departTimeDisplay}}</div>\n                      <div class=\"div-flight-time\">{{item.flightTimeDisplay}}</div>\n                      <div class=\"div-time\">{{item.landingTimeDisplay}}</div>\n                    </div>\n\n                    <div class=\"div-split\">\n                        <img src=\"./assets/ic_flight/icon_flight_line.svg\">\n                    </div>\n                    \n                    <div class=\"d-flex\">\n                      <div class=\"div-departcode\">\n                          {{item.from}}\n                      </div>\n                      <div class=\"div-flight-time m-0-16\" *ngIf=\"item.stops == 0 else transitflight\">\n                          Bay thẳng\n                      </div>\n                      <ng-template #transitflight>\n                        <div class=\"div-flight-time m-0-16\">{{item.stops}} Chặng dừng</div>\n                      </ng-template>\n\n                      <div class=\"div-departcode\" *ngIf=\"item.stops == 0 else multidepart\">\n                        {{item.to}}\n                      </div>\n                      <ng-template #multidepart>\n                        <div class=\"div-departcode\">\n                          {{item.details[item.details.length-1].to}}\n                        </div>\n                        \n                      </ng-template>\n                    </div>\n                  </div>\n                <div class=\"div-flight-price\">\n                  <div class=\"div-text-promo\" *ngIf=\"item.promotions && item.promotions.length>0\" (click)=\"showPromo(item)\">\n                    {{item.promotions[0].promotionNote}}\n                  </div>\n                  <div class=\"flight-before-discount\" *ngIf=\"item.priceBeforeDiscount\">Giá trước KM <span class=\"text-discount\">{{item.priceBeforeDiscount}}</span></div>\n                  <div [ngClass]=\"item.priceBeforeDiscount ? 'flight-price fp-discount' : 'flight-price'\">{{item.priceDisplay}}</div>\n                </div>\n                \n              </div>\n    \n              <div [ngClass]=\"item.operatedBy ? 'div-second d-flex p-top-8 m-top-6' : 'div-second d-flex p-top-8' \">\n               \n                <div class=\"div-logo\"  (click)=\"select(2,item)\">\n                  <img class=\"img-logo logo-vj\" *ngIf=\"item.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                  <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                  <img class=\"img-logo logo-vna\" *ngIf=\"item.airlineCode == 'VietnamAirlines' && !item.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                  <img class=\"img-logo logo-vna\" *ngIf=\"item.operatedBy && item.urlLogo\" [src]=\"item.urlLogo\">\n                  <img class=\"img-logo\" *ngIf=\"item.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                </div>\n    \n                <div class=\"flight-type p-l-8 d-flex\"  (click)=\"select(2,item)\">\n                    <div>{{item.ticketType}}</div>\n                </div>\n\n                <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && (!item.ticketCondition.luggageSigned || (item.addon && !item.addon.powerSupply)  || !item.addon) && (item.airlineCode == 'VietJetAir' || item.airlineCode == 'BambooAirways') \">\n                  <img class=\"img-detail\" src=\"./assets/ic_flight/ic_lug_add.svg\">\n                </div>\n                  <div class=\"icon-detail\" *ngIf=\"item && item.ticketCondition && item.ticketCondition.luggageSigned\">\n                    <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 20\" src=\"./assets/ic_flight/case20.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 23\" src=\"./assets/ic_flight/case23.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 30\" src=\"./assets/ic_flight/case30.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 32\" src=\"./assets/ic_flight/case32.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 15\" src=\"./assets/ic_flight/case15.svg\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"item.ticketCondition.luggageSigned == 40\" src=\"./assets/ic_flight/case40.svg\">\n                  </div>\n                  <div class=\"icon-detail\" *ngIf=\"item && item.addon && item.addon.powerSupply\">\n                    <img class=\"img-detail\" src=\"./assets/ic_flight/ic_charge_tealish.svg\">\n                  </div>\n\n                <div class=\"p-l-4\"  (click)=\"showFlightDetail(item, 2)\">\n                  <img class=\"img-down ic-down\" src=\"./assets/ic_flight/icon_down.svg\">\n                </div>\n\n                <div [ngClass]=\"(item.operatedBy || item.priceBeforeDiscount) ? 'div-button top-0' : 'div-button' \"  (click)=\"select(2,item)\">\n                  <button ion-button round class=\"button btn-select\" clear>\n                    Chọn\n                  </button>\n                </div>\n              </div>\n              <div *ngIf=\"item.operatedBy\" class=\"text-operatedBy\">{{item.operatedBy}}</div>\n          </div>\n        </div>\n\n        <div class=\"div-text-center\" *ngIf=\"(!bestpricereturn || (bestpricereturn && bestpricereturn.length ==0))\">\n          <div class=\"p-top-60 m-bottom-24\">\n            <img src=\"./assets/ic_flight/icon_notfound.svg\" >\n          </div>\n\n          <div class=\"text-title-empty\">Không có chuyến bay</div>\n          <div class=\"text-empty m-top-8\">Vui lòng chọn ngày khác hoặc đổi lại tìm kiếm</div>\n          <div class=\"div-button-empty d-flex\">\n              <div class=\"div-width-100\">\n                <button ion-button round (click)=\"showChangeInfo()\" class=\"button btn-change-search\" clear>Đổi tìm kiếm</button>\n              </div>\n              <div class=\"div-width-100 m-left-8\" *ngIf=\"!enableFlightFilterReturn\">\n                <button ion-button round (click)=\"showChangeDate()\" class=\"button btn-change-date\" clear>Đổi ngày</button>\n              </div>\n              <div class=\"div-width-100 m-left-8\" *ngIf=\"enableFlightFilterReturn\">\n                <button ion-button round (click)=\"clearSearchFilter()\" class=\"button btn-change-date\" clear>Xóa lọc</button>\n              </div>\n          </div>\n        </div>\n\n        <div class=\"div-other-choice-title div-title-content p-bottom-8 p-top-32 d-flex\" *ngIf=\"(otherpricereturn && otherpricereturn.length >0)\">\n          <div class=\"\">Các lựa chọn khác</div>\n          <div class=\"text-other-choice p-l-8\">({{ otherpricereturn.length }} lựa chọn khác)</div>\n        </div>\n        <div class=\"div-other-choice\" *ngIf=\"(otherpricereturn && otherpricereturn.length >0) else nodataotherpricereturn\">\n          <div [ngClass]=\"dx == otherpricereturn.length-1? 'div-item-flight-other':'div-item-flight-other m-b-8'\" *ngFor=\"let itemother of otherpricereturn; let idx = index\">\n              <div class=\"div-first d-flex\"  >\n                  <div (click)=\"select(2,itemother)\">\n                    <div class=\"d-flex\">\n                      <div class=\"div-time\">{{itemother.departTimeDisplay}}</div>\n                      <div class=\"div-flight-time\">{{itemother.flightTimeDisplay}}</div>\n                      <div class=\"div-time\">{{itemother.landingTimeDisplay}}</div>\n                    </div>\n\n                    <div class=\"div-split\">\n                        <img src=\"./assets/ic_flight/icon_flight_line.svg\">\n                    </div>\n                    \n                    <div class=\"d-flex\">\n                      <div class=\"div-departcode\">\n                          {{itemother.from}}\n                      </div>\n                      <div class=\"div-flight-time m-0-16\" *ngIf=\"itemother.stops == 0 else transitflight\">\n                          Bay thẳng\n                      </div>\n                      <ng-template #transitflight>\n                        <div class=\"div-flight-time m-0-16\">{{itemother.stops}} Chặng dừng</div>\n                      </ng-template>\n\n                      <div class=\"div-departcode\" *ngIf=\"itemother.stops == 0 else multidepart\">\n                        {{itemother.to}}\n                      </div>\n                      <ng-template #multidepart>\n                        <div class=\"div-departcode\">\n                          {{itemother.details[itemother.details.length-1].to}}\n                        </div>\n                        \n                      </ng-template>\n                    </div>\n                  </div>\n                <div class=\"div-flight-price\">\n                  <div class=\"div-text-promo\" *ngIf=\"itemother.promotions && itemother.promotions.length>0\" (click)=\"showPromo(itemother)\">\n                    {{itemother.promotions[0].promotionNote}}\n                  </div>\n                  <div class=\"flight-before-discount\" *ngIf=\"itemother.priceBeforeDiscount\">Giá trước KM <span class=\"text-discount\">{{itemother.priceBeforeDiscount}}</span></div>\n                  <div [ngClass]=\"itemother.priceBeforeDiscount ? 'flight-price fp-discount' : 'flight-price'\">{{itemother.priceDisplay}}</div>\n                </div>\n              </div>\n    \n              <div [ngClass]=\"itemother.operatedBy ? 'div-second d-flex p-top-8 m-top-6' : 'div-second d-flex p-top-8' \">\n            \n                <div class=\"div-logo\" (click)=\"select(2,itemother)\">\n                  <img class=\"img-logo logo-vj\" *ngIf=\"itemother.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                  <img class=\"img-logo\" *ngIf=\"itemother.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                  <img class=\"img-logo logo-vna\" *ngIf=\"itemother.airlineCode == 'VietnamAirlines' && !itemother.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                  <img class=\"img-logo logo-vna\" *ngIf=\"itemother.operatedBy && itemother.urlLogo\" [src]=\"itemother.urlLogo\">\n                  <img class=\"img-logo\" *ngIf=\"itemother.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                </div>\n    \n                <div class=\"flight-type p-l-8 d-flex\" (click)=\"select(2,itemother)\">\n                  <div>{{itemother.ticketType}}</div>\n                 \n                </div>\n\n                <div class=\"icon-detail\" *ngIf=\"itemother && itemother.ticketCondition && (!itemother.ticketCondition.luggageSigned || (itemother.addon && !itemother.addon.powerSupply)  || !itemother.addon) && (itemother.airlineCode == 'VietJetAir' || itemother.airlineCode == 'BambooAirways') \">\n                  <img class=\"img-detail\" src=\"./assets/ic_flight/ic_lug_add.svg\">\n                </div>\n                    <div class=\"icon-detail\" *ngIf=\"itemother && itemother.ticketCondition && itemother.ticketCondition.luggageSigned\">\n                      <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 20\" src=\"./assets/ic_flight/case20.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 23\" src=\"./assets/ic_flight/case23.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 30\" src=\"./assets/ic_flight/case30.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 32\" src=\"./assets/ic_flight/case32.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 15\" src=\"./assets/ic_flight/case15.svg\">\n                        <img class=\"img-detail m-top-3\" *ngIf=\"itemother.ticketCondition.luggageSigned == 40\" src=\"./assets/ic_flight/case40.svg\">\n                    </div>\n                    <div class=\"icon-detail\" *ngIf=\"itemother && itemother.addon && itemother.addon.powerSupply\">\n                      <img class=\"img-detail\" src=\"./assets/ic_flight/ic_charge_tealish.svg\">\n                    </div>\n                    \n\n                <div class=\"p-l-4\" (click)=\"showFlightDetail(itemother, 2)\">\n                  <img class=\"img-down ic-down\" src=\"./assets/ic_flight/icon_down.svg\">\n                </div>\n                <div [ngClass]=\"(itemother.operatedBy || itemother.priceBeforeDiscount) ? 'div-button top-0' : 'div-button' \" (click)=\"select(2,itemother)\">\n                  <button ion-button round class=\"button btn-select\" clear>\n                    Chọn\n                  </button>\n                </div>\n                </div>\n                <div *ngIf=\"itemother.operatedBy\" class=\"text-operatedBy\">{{itemother.operatedBy}}</div>\n            </div>\n          </div>\n\n        \n        </ng-template>\n      \n      </ng-template>\n    </ng-template>\n  </div>\n  \n</ion-content>\n<ion-footer>\n  <ion-row class=\"div-footer-filtersort\">\n      <ion-col style=\"align-self: center;\" (click)=\"openSortFlight()\">\n          <div class=\"p-left-24\">\n              <img src=\"./assets/imgs/ic_sort.svg\">\n              <ion-label class=\"text-sort-and-filter\">Sắp xếp</ion-label>\n              <img src=\"./assets/ic_flight/icon_action_check_circle_tealish.svg\" *ngIf=\"sortairline\" class=\"chk-order\">\n              \n          </div>\n          <div class=\"div-split\"></div>\n      </ion-col>\n      <ion-col (click)=\"openFilterFlight()\">\n              <div class=\"flightdeparture-button-filter\">\n                  <img class=\"img-filter\" src=\"./assets/imgs/ic_filter.svg\">\n                  <ion-badge class=\"cls-badge-filter\" *ngIf=\"(step==2 && enableFlightFilter) else badgestep3\">{{enableFlightFilter}}</ion-badge>\n                  <ng-template #badgestep3>\n                    <ion-badge *ngIf=\"step==3 && enableFlightFilterReturn\" class=\"cls-badge-filter\">{{enableFlightFilterReturn}}</ion-badge>\n                  </ng-template>\n                  \n                  <ion-label class=\"text-sort-and-filter label-filter\" >Lọc</ion-label>\n              </div>\n              <div class=\"div-split\"></div>\n      </ion-col>\n      <!-- <ion-col size=\"4.5\" (click)=\"openFlightSelectTimePriority()\">\n        <div class=\"div-time-priority\">\n          <img class=\"img-time-priority\" src=\"./assets/ic_flight/ic_clock_tealish.svg\">\n          <ion-label class=\"text-time-priority\">Giờ ưu tiên</ion-label>\n        </div>\n\n      </ion-col> -->\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightsearchresult/flightsearchresult.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/flightsearchresult/flightsearchresult.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.p-l-8 {\n  padding-left: 8px;\n}\n\n.m-b-8 {\n  margin-bottom: 8px;\n}\n\n.m-0-16 {\n  margin: 0 24px !important;\n}\n\n.p-top-60 {\n  padding-top: 60px;\n}\n\n.m-top-54 {\n  margin-top: 54px;\n}\n\n.m-top-58 {\n  margin-top: 58px;\n}\n\n.p-left-24 {\n  padding-left: 24px;\n}\n\n.text-refresh {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n  text-align: right;\n}\n\n.flightsearchresult-header .col-header {\n  text-align: center;\n  height: 56px;\n  margin-top: 14px;\n}\n\n.flightsearchresult-header .col-header .div-goback {\n  height: 48px;\n  width: 48px;\n  z-index: 2;\n}\n\n.flightsearchresult-header .col-header .div-goback .header-img-back {\n  width: 36px;\n  margin-top: 6px;\n}\n\n.flightsearchresult-header .col-header .div-header-title {\n  width: 100%;\n  z-index: 0;\n  position: absolute;\n}\n\n.flightsearchresult-header .col-header .div-header-title .div-title {\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.6;\n  letter-spacing: -0.45px;\n}\n\n.flightsearchresult-header .col-header .div-header-title .div-subtitle {\n  font-size: 11px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.82;\n  letter-spacing: -0.31px;\n}\n\n.flightsearchresult-header .col-header .arrow-down {\n  padding-left: 6px;\n}\n\n.flightsearchresult-header .col-header .arrow-down .img-down {\n  position: absolute;\n  top: 26px;\n}\n\n.flightsearchresult-header .col-header .div-quick-back {\n  font-size: 32px;\n  position: absolute;\n  right: 2px;\n  color: #bdbdbd;\n  letter-spacing: -3.5px;\n  top: 0px;\n  padding: 0 16px;\n}\n\n.flightsearchresult-content {\n  padding: 16px;\n  background: #f2f2f2;\n}\n\n.flightsearchresult-content .text-loading {\n  font-size: 14px;\n  font-weight: 500;\n  color: #26bed6;\n  letter-spacing: -0.34px;\n  margin-bottom: 16px;\n  text-align: left;\n}\n\n.flightsearchresult-content .p-bottom-8 {\n  padding-bottom: 8px;\n}\n\n.flightsearchresult-content .p-top-32 {\n  padding-top: 32px;\n}\n\n.flightsearchresult-content .div-width-100 {\n  width: 100%;\n}\n\n.flightsearchresult-content .div-width-150 {\n  width: 150%;\n}\n\n.flightsearchresult-content .text-other-choice {\n  font-size: 14px;\n  color: #828282;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  line-height: 16px;\n}\n\n.flightsearchresult-content .div-best-choice .bp-firstitem {\n  border: solid 2px #e52822 !important;\n}\n\n.flightsearchresult-content .div-best-choice .bp-firstitem .div-text-promo {\n  top: -14px !important;\n  right: -10px !important;\n}\n\n.flightsearchresult-content .div-best-choice .div-item-flight {\n  border: solid 0.3px #e52822;\n}\n\n.flightsearchresult-content .div-best-choice .div-text-promo {\n  top: -13px !important;\n  right: -9px !important;\n}\n\n.flightsearchresult-content .div-text-center {\n  text-align: center;\n  align-self: center;\n  margin: -16px;\n  background: #fff;\n  height: 100%;\n  padding: 0 16px;\n}\n\n.flightsearchresult-content .div-text-center .text-title-empty {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #222222;\n}\n\n.flightsearchresult-content .div-text-center .text-empty {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #828282;\n}\n\n.flightsearchresult-content .div-text-center .div-button-empty {\n  margin-top: 16px;\n}\n\n.flightsearchresult-content .div-text-center .m-left-8 {\n  margin-left: 8px;\n}\n\n.flightsearchresult-content .div-text-center .btn-change-search {\n  border-radius: 4px !important;\n  border: solid 1px #f59233;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  line-height: 1.5;\n  color: #f59233;\n  width: 100%;\n  background: #fff;\n}\n\n.flightsearchresult-content .div-text-center .btn-change-date {\n  border-radius: 4px !important;\n  border: solid 1px #f59233;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: #fff;\n  background: #f59233;\n  width: 100%;\n}\n\n.flightsearchresult-content .div-load-price {\n  text-align: center;\n  align-self: center;\n  color: #828282;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.flightsearchresult-content .div-title-content {\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  top: 60px;\n}\n\n.flightsearchresult-content .div-text-promo {\n  position: absolute;\n  top: -12px;\n  right: -8px;\n  font-size: 12px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #ffffff;\n  border-radius: 0 0px 0 4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 112px;\n  background: #9fc43a;\n  padding: 2px 16px;\n  text-align: center;\n}\n\n.flightsearchresult-content .promo-other {\n  top: -12px !important;\n  right: -12px !important;\n}\n\n.flightsearchresult-content .div-item-flight, .flightsearchresult-content .div-item-flight-other {\n  width: 100%;\n  height: 110px;\n  border-radius: 4px;\n  box-shadow: 0 0 8px 0 rgba(38, 190, 214, 0.2);\n  background-color: #fff;\n  padding: 12px 8px 12px 8px;\n}\n\n.flightsearchresult-content .div-item-flight .div-logo, .flightsearchresult-content .div-item-flight-other .div-logo {\n  height: 21px;\n}\n\n.flightsearchresult-content .div-item-flight .div-logo .img-logo, .flightsearchresult-content .div-item-flight-other .div-logo .img-logo {\n  height: 21px;\n}\n\n.flightsearchresult-content .div-item-flight .div-logo .logo-vna, .flightsearchresult-content .div-item-flight-other .div-logo .logo-vna {\n  height: 16px !important;\n}\n\n.flightsearchresult-content .div-item-flight .ic-down, .flightsearchresult-content .div-item-flight-other .ic-down {\n  width: 24px;\n  height: 24px;\n}\n\n.flightsearchresult-content .div-item-flight .div-flight-time, .flightsearchresult-content .div-item-flight-other .div-flight-time {\n  font-size: 10px !important;\n  letter-spacing: -0.69px !important;\n  color: #828282 !important;\n  width: 70px;\n  text-align: center;\n  padding-left: 0 !important;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 16px;\n}\n\n.flightsearchresult-content .div-item-flight .div-split, .flightsearchresult-content .div-item-flight-other .div-split {\n  height: 3px;\n  margin-bottom: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.flightsearchresult-content .div-item-flight .flight-type, .flightsearchresult-content .div-item-flight-other .flight-type {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #494b55;\n  margin-top: 3px;\n  max-width: 104px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.flightsearchresult-content .div-item-flight .text-operatedBy, .flightsearchresult-content .div-item-flight-other .text-operatedBy {\n  font-size: 10px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  position: relative;\n  bottom: 14px;\n}\n\n.flightsearchresult-content .div-item-flight .m-top-6, .flightsearchresult-content .div-item-flight-other .m-top-6 {\n  margin-top: 6px !important;\n}\n\n.flightsearchresult-content .div-item-flight .top-0, .flightsearchresult-content .div-item-flight-other .top-0 {\n  top: 0px !important;\n}\n\n.flightsearchresult-content .div-item-flight .icon-detail, .flightsearchresult-content .div-item-flight-other .icon-detail {\n  display: flex;\n  flex-direction: column;\n}\n\n.flightsearchresult-content .div-item-flight .icon-detail .img-detail, .flightsearchresult-content .div-item-flight-other .icon-detail .img-detail {\n  margin-left: 4px;\n  margin-top: 2px;\n  width: 16px;\n}\n\n.flightsearchresult-content .div-item-flight .icon-detail .m-top-3, .flightsearchresult-content .div-item-flight-other .icon-detail .m-top-3 {\n  margin-top: 3px !important;\n}\n\n.flightsearchresult-content .div-item-flight .div-first, .flightsearchresult-content .div-item-flight-other .div-first {\n  position: relative;\n}\n\n.flightsearchresult-content .div-item-flight .div-first .div-departcode, .flightsearchresult-content .div-item-flight-other .div-first .div-departcode {\n  width: 33px;\n  height: 14px;\n  border-radius: 12px;\n  background-color: #f3f3f3;\n  font-size: 10px;\n  letter-spacing: 0.12px;\n  color: #828282;\n  text-align: center;\n}\n\n.flightsearchresult-content .div-item-flight .div-first .flight-price, .flightsearchresult-content .div-item-flight-other .div-first .flight-price {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n}\n\n.flightsearchresult-content .div-item-flight .div-time, .flightsearchresult-content .div-item-flight-other .div-time {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n}\n\n.flightsearchresult-content .div-item-flight .div-flight-time, .flightsearchresult-content .div-item-flight-other .div-flight-time {\n  font-size: 16px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n  padding-left: 8px;\n}\n\n.flightsearchresult-content .div-item-flight .div-flight-price, .flightsearchresult-content .div-item-flight-other .div-flight-price {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.flightsearchresult-content .div-item-flight .div-flight-price .flight-before-discount, .flightsearchresult-content .div-item-flight-other .div-flight-price .flight-before-discount {\n  font-size: 11px;\n  color: #828282;\n  right: 0;\n  position: absolute;\n  top: 18px;\n}\n\n.flightsearchresult-content .div-item-flight .div-flight-price .flight-before-discount .text-discount, .flightsearchresult-content .div-item-flight-other .div-flight-price .flight-before-discount .text-discount {\n  font-size: 12px;\n  color: #e52822;\n  text-decoration: line-through;\n}\n\n.flightsearchresult-content .div-item-flight .div-flight-price .fp-discount, .flightsearchresult-content .div-item-flight-other .div-flight-price .fp-discount {\n  color: var(--ion-color-primary);\n  font-size: 15px;\n  bottom: -10px;\n}\n\n.flightsearchresult-content .div-item-flight .div-second, .flightsearchresult-content .div-item-flight-other .div-second {\n  margin-top: 12px;\n  position: relative;\n}\n\n.flightsearchresult-content .div-item-flight .div-second .div-button, .flightsearchresult-content .div-item-flight-other .div-second .div-button {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: -6px;\n}\n\n.flightsearchresult-content .div-item-flight .div-second .div-button .btn-select, .flightsearchresult-content .div-item-flight-other .div-second .div-button .btn-select {\n  width: 80px !important;\n  height: 29px !important;\n  color: #ffffff;\n  background: #f79221;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n}\n\n.flightsearchresult-content .div-item-flight-other {\n  border: none !important;\n}\n\n.flightsearchresult-content .p-l-4 {\n  padding-left: 4px;\n  padding: 0 6px 6px;\n}\n\n.div-footer-filtersort {\n  background: #fff;\n}\n\n.div-footer-filtersort .img-filter {\n  position: absolute;\n  top: 0px;\n  padding-left: 40px;\n}\n\n.div-footer-filtersort .label-filter {\n  top: 17px !important;\n  position: absolute;\n  left: 50%;\n  z-index: 9;\n}\n\n.div-footer-filtersort .text-sort-and-filter {\n  top: 22px;\n  position: absolute;\n  font-size: 14px;\n  font-weight: 100;\n  letter-spacing: -0.4px;\n}\n\n.div-footer-filtersort .div-split {\n  position: absolute;\n  height: 20px;\n  border-right: solid 1px #ccc;\n  top: 20px;\n  padding-left: 99%;\n}\n\n.div-footer-filtersort .flightdeparture-button-filter {\n  position: relative;\n}\n\n.div-footer-filtersort .cls-badge-filter {\n  top: 8px !important;\n  left: 40% !important;\n}\n\n.div-footer-filtersort .cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: #26bed6;\n  padding-top: 2px;\n  font-size: 10px;\n}\n\n.div-footer-filtersort .chk-order {\n  position: absolute;\n  left: 136px;\n  top: 22px;\n}\n\n.div-depart-flight-choice {\n  height: 54px;\n  background-color: #f9f9f9;\n  margin: -16px -16px 16px -16px;\n  padding: 0 16px;\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n}\n\n.div-depart-flight-choice .div-icon-flight {\n  width: 18px;\n  margin-right: 12px;\n  width: 12%;\n}\n\n.div-depart-flight-choice .div-flight-info {\n  width: 150%;\n  margin-top: 10px;\n}\n\n.div-depart-flight-choice .div-time-and-price {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.36px;\n  color: #333333;\n}\n\n.div-depart-flight-choice .div-code {\n  font-size: 10px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.54px;\n  color: #828282;\n}\n\n.div-depart-flight-choice .div-text-change {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n  text-align: right;\n  width: 50%;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.float-enabled {\n  position: fixed;\n  top: calc(env(safe-area-inset-top) + 70px) !important;\n  background: #fff;\n  width: 100%;\n  margin-left: -16px;\n  padding-left: 16px;\n  z-index: 99;\n  transition: top 0.5s ease-out;\n  padding-top: 8px !important;\n}\n\n.float-depart-choice {\n  top: calc(env(safe-area-inset-top) + 70px) !important;\n}\n\n.top-114 {\n  top: calc(env(safe-area-inset-top) + 114px) !important;\n}\n\n.top-124 {\n  top: calc(env(safe-area-inset-top) + 124px) !important;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .action-sheet-container.sc-ion-action-sheet-ios, ::ng-deep .action-sheets-flightsearchresult-fitler .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .action-sheet-group.sc-ion-action-sheet-ios, ::ng-deep .action-sheets-flightsearchresult-fitler .action-sheet-group.sc-ion-action-sheet-ios {\n  margin: 0;\n  border-radius: 0;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .action-sheet-button.sc-ion-action-sheet-ios, ::ng-deep .action-sheets-flightsearchresult-fitler .action-sheet-button.sc-ion-action-sheet-ios {\n  padding: 0;\n  border-bottom: solid 0.5px #f2f2f2;\n  margin-left: 16px;\n  margin-right: 16px !important;\n  width: 92%;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .sc-ion-action-sheet-ios.selected, ::ng-deep .action-sheets-flightsearchresult-fitler .sc-ion-action-sheet-ios.selected {\n  background-image: url('ic_check.svg');\n  background-repeat: no-repeat;\n  background-position: right;\n  width: 92%;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .sc-ion-action-sheet-md.selected, ::ng-deep .action-sheets-flightsearchresult-fitler .sc-ion-action-sheet-md.selected {\n  background-image: url('ic_check.svg');\n  background-repeat: no-repeat;\n  background-position: right;\n  width: 100%;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .action-sheet-title.sc-ion-action-sheet-ios, ::ng-deep .action-sheets-flightsearchresult-fitler .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 18px;\n  color: #000000;\n  line-height: 27px;\n  letter-spacing: -0.51px;\n  font-weight: 600;\n  text-align: left;\n  padding-left: 16px;\n}\n\n::ng-deep .cls-border-bottom .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  border-bottom: solid 0.5px #f2f2f2;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .action-sheet-button-inner.sc-ion-action-sheet-ios, ::ng-deep .action-sheets-flightsearchresult-fitler .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  width: 100%;\n  height: 100%;\n  color: black;\n  font-size: 14px;\n  justify-content: left;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .action-sheet-button.sc-ion-action-sheet-ios, ::ng-deep .action-sheets-flightsearchresult-fitler .action-sheet-button.sc-ion-action-sheet-ios {\n  padding: 0;\n  border-bottom: solid 0.5px #f2f2f2;\n  margin-left: 16px;\n  margin-right: 16px !important;\n  width: 92%;\n  height: 56px;\n}\n\n::ng-deep .action-sheets-flightsearchresult-sort .action-sheet-selected.sc-ion-action-sheet-ios, ::ng-deep .action-sheets-flightsearchresult-fitler .action-sheet-selected.sc-ion-action-sheet-ios {\n  background-image: url('ic_check.svg');\n  background-repeat: no-repeat;\n  background-position: right;\n  width: 92%;\n}\n\n::ng-deep .cls-alert-refreshPrice.alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block !important;\n}\n\n::ng-deep .alert-button-group.sc-ion-alert-ios.cls-alert-refreshPrice button:first-child {\n  display: block !important;\n}\n\n::ng-deep .btn-filter .sc-ion-action-sheet-ios {\n  border: solid 1px #ec971f;\n  border-radius: 4px;\n  text-align: center;\n  color: #ec971f;\n  height: 42px !important;\n}\n\n::ng-deep .btn-filter .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: center;\n  color: #ec971f;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n::ng-deep ion-modal {\n  transform: none !important;\n  -webkit-transform: none !important;\n}\n\n@media (min-height: 812px) and (max-height: 1024px) {\n  ::ng-deep .action-sheets-flightsearchresult-sort .alert-button-group.sc-ion-alert-ios, ::ng-deep .action-sheets-flightsearchresult-fitler .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 30px;\n  }\n}\n\n::ng-deep .ion-page {\n  overflow-y: hidden;\n}\n\n::ng-deep .sc-ion-alert-ios-h.cls-alert-searchresult {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-searchresult .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block !important;\n}\n\n::ng-deep .sc-ion-alert-ios-h.cls-alert-searchresult {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-searchresult .alert-wrapper.sc-ion-alert-ios {\n  width: 80% !important;\n  min-width: 80% !important;\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex;\n  flex-direction: column;\n  width: var(--width);\n  min-width: var(--min-width);\n  max-width: var(--max-width);\n  height: var(--height);\n  min-height: var(--min-height);\n  max-height: var(--max-height);\n  background: var(--background);\n  contain: content;\n  opacity: 0;\n  z-index: 10;\n}\n\n::ng-deep .cls-alert-searchresult .alert-button-group.sc-ion-alert-ios {\n  display: flex !important;\n  flex-direction: row !important;\n  width: 100% !important;\n  flex-wrap: nowrap !important;\n  font-size: 14px !important;\n  margin-bottom: 0px !important;\n  font-size: 14px !important;\n}\n\n::ng-deep .cls-alert-searchresult .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  border-right: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n\n::ng-deep .action-sheets-flight-promo .action-sheet-title.sc-ion-action-sheet-md {\n  font-size: 16px;\n  font-weight: bold;\n  color: #333333;\n  height: 48px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n::ng-deep .action-sheets-flight-promo .action-sheet-button-inner.sc-ion-action-sheet-md {\n  line-height: 1.4;\n  letter-spacing: normal;\n  color: #333333;\n  font-size: 14px;\n}\n\n::ng-deep .action-sheets-flight-promo .action-sheet-button.ion-activatable.sc-ion-action-sheet-md {\n  padding-bottom: 16px;\n  min-height: 114px;\n}\n\n@media (min-width: 412px) and (max-width: 420px) {\n  ::ng-deep .action-sheets-flight-promo .action-sheet-button.ion-activatable.sc-ion-action-sheet-md {\n    padding-bottom: calc( env(safe-area-inset-bottom) + 16px) !important;\n  }\n  ::ng-deep .action-sheets-flight-promo .div-close-promo {\n    bottom: calc( env(safe-area-inset-bottom) + 134px) !important;\n  }\n  ::ng-deep .action-sheets-flight-promo.height-194 .action-sheet-button.ion-activatable.sc-ion-action-sheet-md {\n    padding-bottom: calc( env(safe-area-inset-bottom) + 16px) !important;\n    min-height: 194px !important;\n  }\n  ::ng-deep .action-sheets-flight-promo.height-194 .div-close-promo {\n    bottom: calc( env(safe-area-inset-bottom) + 214px) !important;\n  }\n}\n\n::ng-deep .action-sheets-flight-promo ion-backdrop {\n  opacity: 0.5 !important;\n  background-color: #222222;\n}\n\n::ng-deep .action-sheets-flight-promo .div-close-promo {\n  position: absolute;\n  z-index: 9;\n  right: 16px;\n  bottom: 170px;\n}\n\n.action-sheets-flight-promo .div-close-promo {\n  position: absolute;\n  z-index: 9;\n  right: 16px;\n  bottom: 170px;\n}\n\n.div-time-priority .img-time-priority {\n  position: absolute;\n  left: 0px;\n}\n\n.div-time-priority .text-time-priority {\n  position: absolute;\n  top: 20px;\n  left: 40px;\n}\n\n.top-15 {\n  top: 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZmxpZ2h0c2VhcmNocmVzdWx0L2ZsaWdodHNlYXJjaHJlc3VsdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodHNlYXJjaHJlc3VsdC9mbGlnaHRzZWFyY2hyZXN1bHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7QUNLSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FERkE7RUFDSSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDT0o7O0FESkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ09SOztBRExRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDT1o7O0FETFk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ09oQjs7QURIUTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNLWjs7QURKWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTWhCOztBREpZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNNaEI7O0FERlE7RUFDSSxpQkFBQTtBQ0laOztBREZZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDSWhCOztBREFRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDRVo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjs7QURFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFSTtFQUNJLG1CQUFBO0FDQVI7O0FERUk7RUFDSSxpQkFBQTtBQ0FSOztBREVJO0VBQ0ksV0FBQTtBQ0FSOztBREVJO0VBQ0ksV0FBQTtBQ0FSOztBREVJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0FSOztBREtRO0VBQ0ksb0NBQUE7QUNIWjs7QURLWTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7QUNIaEI7O0FET1E7RUFDSSwyQkFBQTtBQ0xaOztBRFFRO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtBQ05aOztBRFVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUlI7O0FEVVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNSaEI7O0FEVVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNSaEI7O0FEV1k7RUFDSSxnQkFBQTtBQ1RoQjs7QURhWTtFQUNJLGdCQUFBO0FDWGhCOztBRGNZO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNaaEI7O0FEY1k7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1poQjs7QURnQkk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ2RSOztBRGdCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNkUjs7QURpQkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZlI7O0FEa0JJO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQ2hCUjs7QURtQkk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDakJSOztBRG1CUTtFQUNJLFlBQUE7QUNqQlo7O0FEbUJZO0VBQ0ksWUFBQTtBQ2pCaEI7O0FEb0JZO0VBQ0ksdUJBQUE7QUNsQmhCOztBRHNCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDcEJaOztBRHVCUTtFQUNJLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0FDdEJaOztBRHdCUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDdEJaOztBRHdCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdkJaOztBRDJCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDekJaOztBRDJCUTtFQUNJLDBCQUFBO0FDekJaOztBRDJCUTtFQUNJLG1CQUFBO0FDekJaOztBRDJCUTtFQUdJLGFBQUE7RUFDQSxzQkFBQTtBQzNCWjs7QUQ4Qlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDNUJoQjs7QUQ4Qlk7RUFDSSwwQkFBQTtBQzVCaEI7O0FEZ0NRO0VBQ0ksa0JBQUE7QUM5Qlo7O0FEZ0NXO0VBQ0ssV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBRUEsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDL0JoQjs7QURtQ1k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2pDaEI7O0FEcUNRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDbkNaOztBRHNDUTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDckNaOztBRHVDUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDckNaOztBRHVDWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ3JDaEI7O0FEdUNnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUNyQ3BCOztBRDJDWTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUN6Q2hCOztBRDRDUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUMxQ1o7O0FEOENZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDNUNoQjs7QUQ4Q2dCO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFFQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQzlDcEI7O0FEcURJO0VBQ0ksdUJBQUE7QUNuRFI7O0FEcURJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ25EUjs7QUR1REE7RUFDSSxnQkFBQTtBQ3BESjs7QURxREk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ25ETjs7QURxREk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNuRE47O0FEcURJO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNuRFI7O0FEc0RJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNwRFI7O0FEdURJO0VBQ0ksa0JBQUE7QUNyRFI7O0FEeURJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQ3ZEUjs7QUQwREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN4RFI7O0FEMERJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ3hEUjs7QUQ2REU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUMxREo7O0FENERJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQzFEUjs7QUQ0REk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUMxRFI7O0FENERJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUMxRFI7O0FENkRJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUMzRFI7O0FENkRJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDM0RSOztBRDhERTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDM0ROOztBRDhERTtFQUNFLGVBQUE7RUFDQSxxREFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtBQzVESjs7QUQrREU7RUFDRSxxREFBQTtBQzVESjs7QUQ4REU7RUFDSSxzREFBQTtBQzNETjs7QUQ2REU7RUFDSSxzREFBQTtBQzFETjs7QUQ4REk7RUFDSSxVQUFBO0FDM0RSOztBRDhESTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQzVEUjs7QUQrREk7RUFDSSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQzdEUjs7QUQrREk7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FDN0RSOztBRCtESTtFQUNFLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUM3RE47O0FEZ0VJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNGLGtCQUFBO0FDOURKOztBRGlFSTtFQUNJLGtDQUFBO0FDL0RSOztBRGtFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ2hFUjs7QURrRUk7RUFDSSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNoRVI7O0FEa0VJO0VBQ0kscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQ2hFUjs7QURtRUk7RUFDSSx5QkFBQTtBQ2pFUjs7QURvRUk7RUFDSSx5QkFBQTtBQ2xFUjs7QURxRUk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNuRVI7O0FEc0VNO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDcEVSOztBRHVFSTtFQUNJLDBCQUFBO0VBQ0Esa0NBQUE7QUNyRVI7O0FEd0VJO0VBQ0k7SUFDRSxtQkFBQTtFQ3RFUjtBQUNGOztBRHdFTTtFQUNFLGtCQUFBO0FDdEVSOztBRDJFSTtFQUNJLDhGQUFBO0VBQ0EsNkJBQUE7RUFFQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7S0FBQSxpQ0FBQTtNQUFBLGdDQUFBO1VBQUEsNEJBQUE7QUMxRVI7O0FEK0VJO0VBQ00seUJBQUE7QUM3RVY7O0FEK0VNO0VBQ0ksc0RBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUM3RVY7O0FEZ0ZNO0VBQ00scUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBRUEsMkJBQUE7RUFDQSwyQkFBQTtFQUVBLGFBQUE7RUFFQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQy9FWjs7QURrRlE7RUFDSSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQ2hGWjs7QURtRlE7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBRUEseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSxtRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDakZaOztBRG9GUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2xGWjs7QURxRlE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNuRlo7O0FEc0ZRO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQ3BGWjs7QUR1RlE7RUFDSTtJQUNJLG9FQUFBO0VDckZkO0VEd0ZVO0lBQ0ksNkRBQUE7RUN0RmQ7RUR5RlU7SUFDSSxvRUFBQTtJQUNBLDRCQUFBO0VDdkZkO0VEeUZVO0lBQ0ksNkRBQUE7RUN2RmQ7QUFDRjs7QUR5RlE7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0FDdkZaOztBRDBGUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDeEZaOztBRDJGQTtFQUNZLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDeEZaOztBRDZGWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQzFGaEI7O0FENkZZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQzNGaEI7O0FEK0ZRO0VBQ0ksb0JBQUE7QUM1RloiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRzZWFyY2hyZXN1bHQvZmxpZ2h0c2VhcmNocmVzdWx0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5wLWwtOHtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5tLWItOHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubS0wLTE2e1xuICAgIG1hcmdpbjogMCAyNHB4ICFpbXBvcnRhbnQ7XG59XG4ucC10b3AtNjB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG59XG5cbi5tLXRvcC01NHtcbiAgICBtYXJnaW4tdG9wOiA1NHB4O1xufVxuXG4ubS10b3AtNTh7XG4gICAgbWFyZ2luLXRvcDogNThweDtcbn1cbi5wLWxlZnQtMjR7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuLnRleHQtcmVmcmVzaHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtaGVhZGVye1xuICAgIC5jb2wtaGVhZGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcblxuICAgICAgICAuZGl2LWdvYmFja3tcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICAgICAgLmhlYWRlci1pbWctYmFja3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LWhlYWRlci10aXRsZXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIC5kaXYtdGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGl2LXN1YnRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44MjtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAuYXJyb3ctZG93bntcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuXG4gICAgICAgICAgICAuaW1nLWRvd257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMjZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYtcXVpY2stYmFja3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMy41cHg7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBcbiAgICAudGV4dC1sb2FkaW5ne1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLnAtYm90dG9tLTh7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgfVxuICAgIC5wLXRvcC0zMntcbiAgICAgICAgcGFkZGluZy10b3A6IDMycHg7XG4gICAgfVxuICAgIC5kaXYtd2lkdGgtMTAwe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmRpdi13aWR0aC0xNTB7XG4gICAgICAgIHdpZHRoOiAxNTAlO1xuICAgIH1cbiAgICAudGV4dC1vdGhlci1jaG9pY2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgLmRpdi1iZXN0LWNob2ljZXtcblxuICAgICAgICAuYnAtZmlyc3RpdGVte1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggI2U1MjgyMiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAuZGl2LXRleHQtcHJvbW97XG4gICAgICAgICAgICAgICAgdG9wOiAtMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi1pdGVtLWZsaWdodHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC4zcHggI2U1MjgyMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYtdGV4dC1wcm9tb3tcbiAgICAgICAgICAgIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHJpZ2h0OiAtOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LXRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAtMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgICAgICAgICAgIC50ZXh0LXRpdGxlLWVtcHR5e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHQtZW1wdHl7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdi1idXR0b24tZW1wdHl7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAubS1sZWZ0LTh7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ0bi1jaGFuZ2Utc2VhcmNoe1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNTkyMzM7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5idG4tY2hhbmdlLWRhdGV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2Y1OTIzMztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtbG9hZC1wcmljZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuZGl2LXRpdGxlLWNvbnRlbnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgdG9wOiA2MHB4O1xuICAgIH1cblxuICAgIC5kaXYtdGV4dC1wcm9tb3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICByaWdodDogLThweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDBweCAwIDRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHdpZHRoOiAxMTJweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzlmYzQzYTtcbiAgICAgICAgcGFkZGluZzogMnB4IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJvbW8tb3RoZXJ7XG4gICAgICAgIHRvcDogLTEycHggIWltcG9ydGFudDtcbiAgICAgICAgcmlnaHQ6IC0xMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRpdi1pdGVtLWZsaWdodCwuZGl2LWl0ZW0tZmxpZ2h0LW90aGVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzOCwgMTkwLCAyMTQsIDAuMik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4IDEycHggOHB4O1xuXG4gICAgICAgIC5kaXYtbG9nb3tcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcblxuICAgICAgICAgICAgLmltZy1sb2dve1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28tdm5he1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmljLWRvd257XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYtZmxpZ2h0LXRpbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtc3BsaXR7XG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZsaWdodC10eXBle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzQ5NGI1NTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcblxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDRweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC50ZXh0LW9wZXJhdGVkQnl7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5tLXRvcC02e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7IFxuICAgICAgICB9XG4gICAgICAgIC50b3AtMHtcbiAgICAgICAgICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24tZGV0YWlse1xuICAgICAgICAgICAgLy9wYWRkaW5nLWxlZnQ6IDhweDtcblxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAvL2p1c3RpZnktY29udGVudDogZW5kO1xuXG4gICAgICAgICAgICAuaW1nLWRldGFpbHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tLXRvcC0ze1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi1maXJzdHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAuZGl2LWRlcGFydGNvZGV7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMzcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcblxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgfVxuICAgICAgICAgXG5cbiAgICAgICAgICAgIC5mbGlnaHQtcHJpY2V7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDk0YjU1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi10aW1le1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0OTRiNTU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LWZsaWdodC10aW1le1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDk0YjU1O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1mbGlnaHQtcHJpY2V7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAgIC5mbGlnaHQtYmVmb3JlLWRpc2NvdW50e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxOHB4O1xuXG4gICAgICAgICAgICAgICAgLnRleHQtZGlzY291bnR7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNTI4MjI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mcC1kaXNjb3VudHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXYtc2Vjb25ke1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICBcblxuICAgICAgICAgICAgLmRpdi1idXR0b257XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIHRvcDogLTZweDtcblxuICAgICAgICAgICAgICAgIC5idG4tc2VsZWN0e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI5cHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVye1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnAtbC00e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgcGFkZGluZzogMCA2cHggNnB4O1xuICAgIH1cbn1cblxuLmRpdi1mb290ZXItZmlsdGVyc29ydHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC5pbWctZmlsdGVye1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxuICAgIC5sYWJlbC1maWx0ZXJ7XG4gICAgICB0b3A6IDE3cHggIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHotaW5kZXg6IDk7XG4gICAgfVxuICAgIC50ZXh0LXNvcnQtYW5kLWZpbHRlcntcbiAgICAgICAgdG9wOiAyMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB9XG5cbiAgICAuZGl2LXNwbGl0e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDk5JTtcbiAgICB9XG5cbiAgICAuZmxpZ2h0ZGVwYXJ0dXJlLWJ1dHRvbi1maWx0ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBcbiAgICB9XG4gICAgLmNscy1iYWRnZS1maWx0ZXJ7XG4gICAgICAgIHRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDQwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jbHMtYmFkZ2UtZmlsdGVyIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gICAgLmNoay1vcmRlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMzZweDtcbiAgICAgICAgdG9wOiAyMnB4O1xuICAgICAgfVxuICB9XG4gIFxuXG4gIC5kaXYtZGVwYXJ0LWZsaWdodC1jaG9pY2V7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWFyZ2luOiAtMTZweCAtMTZweCAxNnB4IC0xNnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG5cbiAgICAuZGl2LWljb24tZmxpZ2h0e1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICB3aWR0aDogMTIlO1xuICAgIH1cbiAgICAuZGl2LWZsaWdodC1pbmZve1xuICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmRpdi10aW1lLWFuZC1wcmljZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuXG4gICAgLmRpdi1jb2Rle1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuICAgIC5kaXYtdGV4dC1jaGFuZ2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gIH1cbiAgLnYtYWxpZ24tY2VudGVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5mbG9hdC1lbmFibGVke1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNzBweCkgIWltcG9ydGFudDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgei1pbmRleDogOTk7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuNXMgZWFzZS1vdXQ7XG4gICAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmZsb2F0LWRlcGFydC1jaG9pY2V7XG4gICAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDcwcHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRvcC0xMTR7XG4gICAgICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTE0cHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRvcC0xMjR7XG4gICAgICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTI0cHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIDo6bmctZGVlcHtcbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcywgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VhcmNocmVzdWx0LWZpdGxlciAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtZml0bGVyIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcywgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VhcmNocmVzdWx0LWZpdGxlciAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogOTIlO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Muc2VsZWN0ZWQsIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1maXRsZXIgLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19jaGVjay5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiA5MiU7XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1zb3J0IC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLnNlbGVjdGVkLCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtZml0bGVyIC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfY2hlY2suc3ZnJyk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtZml0bGVyIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIH1cbiAgIFxuICAgIC5jbHMtYm9yZGVyLWJvdHRvbSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgICB9XG5cbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcywgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VhcmNocmVzdWx0LWZpdGxlciAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1zb3J0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtZml0bGVyIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1zb3J0IC5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MsIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1maXRsZXIgLmFjdGlvbi1zaGVldC1zZWxlY3RlZC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19jaGVjay5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiA5MiU7XG4gICAgfVxuICAgIFxuICAgIC5jbHMtYWxlcnQtcmVmcmVzaFByaWNlLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MuY2xzLWFsZXJ0LXJlZnJlc2hQcmljZSBidXR0b246Zmlyc3QtY2hpbGR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmJ0bi1maWx0ZXIgLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWM5NzFmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNlYzk3MWY7XG4gICAgICAgIGhlaWdodDogNDJweCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuYnRuLWZpbHRlciAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZWM5NzFmO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgaW9uLW1vZGFseyBcbiAgICAgICAgdHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDsgXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOm5vbmUgIWltcG9ydGFudDsgXG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4taGVpZ2h0OjgxMnB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xuICAgICAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MsIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1maXRsZXIgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9ze1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pb24tcGFnZXtcbiAgICAgICAgb3ZlcmZsb3cteTpoaWRkZW47XG4gICAgfVxuXG4gICAgLy8vc3R5bGVcblxuICAgIC5zYy1pb24tYWxlcnQtaW9zLWguY2xzLWFsZXJ0LXNlYXJjaHJlc3VsdCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xuICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICBcbiAgIFxuICAgIC5jbHMtYWxlcnQtc2VhcmNocmVzdWx0IC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1zZWFyY2hyZXN1bHQgIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmNscy1hbGVydC1zZWFyY2hyZXN1bHQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICAgICAgICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICAgICAgICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCk7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgICAgICAgICAgY29udGFpbjogY29udGVudDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbHMtYWxlcnQtc2VhcmNocmVzdWx0IC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbHMtYWxlcnQtc2VhcmNocmVzdWx0IC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAgICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC1tcy1mbGV4OiAxIDEgYXV0byAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvICAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MCUgICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHggICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vIC5hY3Rpb24tc2hlZXQtYnV0dG9uLmlvbi1hY3RpdmF0YWJsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOjQxMnB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgICAgICAgICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1wcm9tbyAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5pb24tYWN0aXZhdGFibGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMTZweCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vIC5kaXYtY2xvc2UtcHJvbW97XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAxMzRweCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vLmhlaWdodC0xOTQgLmFjdGlvbi1zaGVldC1idXR0b24uaW9uLWFjdGl2YXRhYmxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDE2cHgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTk0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1wcm9tby5oZWlnaHQtMTk0IC5kaXYtY2xvc2UtcHJvbW97XG4gICAgICAgICAgICAgICAgYm90dG9tOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAyMTRweCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtcHJvbW8gaW9uLWJhY2tkcm9we1xuICAgICAgICAgICAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vIC5kaXYtY2xvc2UtcHJvbW97XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3R0b206IDE3MHB4O1xuICAgICAgICB9XG59XG4uYWN0aW9uLXNoZWV0cy1mbGlnaHQtcHJvbW8gLmRpdi1jbG9zZS1wcm9tb3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDk7XG4gICAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICAgIGJvdHRvbTogMTcwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LXRpbWUtcHJpb3JpdHl7XG5cbiAgICAgICAgICAgIC5pbWctdGltZS1wcmlvcml0eXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLnRleHQtdGltZS1wcmlvcml0eXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLTE1e1xuICAgICAgICAgICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnAtbC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5tLWItOCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm0tMC0xNiB7XG4gIG1hcmdpbjogMCAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wLXRvcC02MCB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4ubS10b3AtNTQge1xuICBtYXJnaW4tdG9wOiA1NHB4O1xufVxuXG4ubS10b3AtNTgge1xuICBtYXJnaW4tdG9wOiA1OHB4O1xufVxuXG4ucC1sZWZ0LTI0IHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4udGV4dC1yZWZyZXNoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZmxpZ2h0c2VhcmNocmVzdWx0LWhlYWRlciAuY29sLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1oZWFkZXIgLmNvbC1oZWFkZXIgLmRpdi1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB6LWluZGV4OiAyO1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1oZWFkZXIgLmNvbC1oZWFkZXIgLmRpdi1nb2JhY2sgLmhlYWRlci1pbWctYmFjayB7XG4gIHdpZHRoOiAzNnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWhlYWRlciAuY29sLWhlYWRlciAuZGl2LWhlYWRlci10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWhlYWRlciAuY29sLWhlYWRlciAuZGl2LWhlYWRlci10aXRsZSAuZGl2LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDVweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtaGVhZGVyIC5jb2wtaGVhZGVyIC5kaXYtaGVhZGVyLXRpdGxlIC5kaXYtc3VidGl0bGUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjgyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzFweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtaGVhZGVyIC5jb2wtaGVhZGVyIC5hcnJvdy1kb3duIHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWhlYWRlciAuY29sLWhlYWRlciAuYXJyb3ctZG93biAuaW1nLWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjZweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtaGVhZGVyIC5jb2wtaGVhZGVyIC5kaXYtcXVpY2stYmFjayB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnB4O1xuICBjb2xvcjogI2JkYmRiZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0zLjVweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAudGV4dC1sb2FkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLnAtYm90dG9tLTgge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5wLXRvcC0zMiB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi13aWR0aC0xNTAge1xuICB3aWR0aDogMTUwJTtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAudGV4dC1vdGhlci1jaG9pY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtYmVzdC1jaG9pY2UgLmJwLWZpcnN0aXRlbSB7XG4gIGJvcmRlcjogc29saWQgMnB4ICNlNTI4MjIgIWltcG9ydGFudDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWJlc3QtY2hvaWNlIC5icC1maXJzdGl0ZW0gLmRpdi10ZXh0LXByb21vIHtcbiAgdG9wOiAtMTRweCAhaW1wb3J0YW50O1xuICByaWdodDogLTEwcHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWJlc3QtY2hvaWNlIC5kaXYtaXRlbS1mbGlnaHQge1xuICBib3JkZXI6IHNvbGlkIDAuM3B4ICNlNTI4MjI7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1iZXN0LWNob2ljZSAuZGl2LXRleHQtcHJvbW8ge1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAtOXB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi10ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IC0xNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LXRleHQtY2VudGVyIC50ZXh0LXRpdGxlLWVtcHR5IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi10ZXh0LWNlbnRlciAudGV4dC1lbXB0eSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi10ZXh0LWNlbnRlciAuZGl2LWJ1dHRvbi1lbXB0eSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi10ZXh0LWNlbnRlciAubS1sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtdGV4dC1jZW50ZXIgLmJ0bi1jaGFuZ2Utc2VhcmNoIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZjU5MjMzO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LXRleHQtY2VudGVyIC5idG4tY2hhbmdlLWRhdGUge1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2Y1OTIzMztcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNmNTkyMzM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtbG9hZC1wcmljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjb2xvcjogIzgyODI4MjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LXRpdGxlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRvcDogNjBweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LXRleHQtcHJvbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEycHg7XG4gIHJpZ2h0OiAtOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMHB4IDAgNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDExMnB4O1xuICBiYWNrZ3JvdW5kOiAjOWZjNDNhO1xuICBwYWRkaW5nOiAycHggMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5wcm9tby1vdGhlciB7XG4gIHRvcDogLTEycHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IC0xMnB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodCwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzOCwgMTkwLCAyMTQsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEycHggOHB4IDEycHggOHB4O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1sb2dvLCAuZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodC1vdGhlciAuZGl2LWxvZ28ge1xuICBoZWlnaHQ6IDIxcHg7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LWxvZ28gLmltZy1sb2dvLCAuZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodC1vdGhlciAuZGl2LWxvZ28gLmltZy1sb2dvIHtcbiAgaGVpZ2h0OiAyMXB4O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1sb2dvIC5sb2dvLXZuYSwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmRpdi1sb2dvIC5sb2dvLXZuYSB7XG4gIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLmljLWRvd24sIC5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIC5pYy1kb3duIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtZmxpZ2h0LXRpbWUsIC5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIC5kaXYtZmxpZ2h0LXRpbWUge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDAgMTZweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtc3BsaXQsIC5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIC5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5mbGlnaHQtdHlwZSwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmZsaWdodC10eXBlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjNDk0YjU1O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1heC13aWR0aDogMTA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLnRleHQtb3BlcmF0ZWRCeSwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLnRleHQtb3BlcmF0ZWRCeSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDE0cHg7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodCAubS10b3AtNiwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLm0tdG9wLTYge1xuICBtYXJnaW4tdG9wOiA2cHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC50b3AtMCwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLnRvcC0wIHtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5pY29uLWRldGFpbCwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmljb24tZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5pY29uLWRldGFpbCAuaW1nLWRldGFpbCwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmljb24tZGV0YWlsIC5pbWctZGV0YWlsIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICB3aWR0aDogMTZweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5pY29uLWRldGFpbCAubS10b3AtMywgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmljb24tZGV0YWlsIC5tLXRvcC0zIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LWZpcnN0LCAuZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodC1vdGhlciAuZGl2LWZpcnN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1maXJzdCAuZGl2LWRlcGFydGNvZGUsIC5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIC5kaXYtZmlyc3QgLmRpdi1kZXBhcnRjb2RlIHtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1maXJzdCAuZmxpZ2h0LXByaWNlLCAuZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodC1vdGhlciAuZGl2LWZpcnN0IC5mbGlnaHQtcHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICM0OTRiNTU7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LXRpbWUsIC5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIC5kaXYtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjNDk0YjU1O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1mbGlnaHQtdGltZSwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmRpdi1mbGlnaHQtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjNDk0YjU1O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtZmxpZ2h0LXByaWNlLCAuZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodC1vdGhlciAuZGl2LWZsaWdodC1wcmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LWZsaWdodC1wcmljZSAuZmxpZ2h0LWJlZm9yZS1kaXNjb3VudCwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmRpdi1mbGlnaHQtcHJpY2UgLmZsaWdodC1iZWZvcmUtZGlzY291bnQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LWZsaWdodC1wcmljZSAuZmxpZ2h0LWJlZm9yZS1kaXNjb3VudCAudGV4dC1kaXNjb3VudCwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmRpdi1mbGlnaHQtcHJpY2UgLmZsaWdodC1iZWZvcmUtZGlzY291bnQgLnRleHQtZGlzY291bnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZTUyODIyO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtZmxpZ2h0LXByaWNlIC5mcC1kaXNjb3VudCwgLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQtb3RoZXIgLmRpdi1mbGlnaHQtcHJpY2UgLmZwLWRpc2NvdW50IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3R0b206IC0xMHB4O1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1zZWNvbmQsIC5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIC5kaXYtc2Vjb25kIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsaWdodHNlYXJjaHJlc3VsdC1jb250ZW50IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1zZWNvbmQgLmRpdi1idXR0b24sIC5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIC5kaXYtc2Vjb25kIC5kaXYtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogLTZweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtc2Vjb25kIC5kaXYtYnV0dG9uIC5idG4tc2VsZWN0LCAuZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLmRpdi1pdGVtLWZsaWdodC1vdGhlciAuZGl2LXNlY29uZCAuZGl2LWJ1dHRvbiAuYnRuLXNlbGVjdCB7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbn1cbi5mbGlnaHRzZWFyY2hyZXN1bHQtY29udGVudCAuZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0c2VhcmNocmVzdWx0LWNvbnRlbnQgLnAtbC00IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmc6IDAgNnB4IDZweDtcbn1cblxuLmRpdi1mb290ZXItZmlsdGVyc29ydCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZGl2LWZvb3Rlci1maWx0ZXJzb3J0IC5pbWctZmlsdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLmRpdi1mb290ZXItZmlsdGVyc29ydCAubGFiZWwtZmlsdGVyIHtcbiAgdG9wOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB6LWluZGV4OiA5O1xufVxuLmRpdi1mb290ZXItZmlsdGVyc29ydCAudGV4dC1zb3J0LWFuZC1maWx0ZXIge1xuICB0b3A6IDIycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmRpdi1mb290ZXItZmlsdGVyc29ydCAuZGl2LXNwbGl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjY2M7XG4gIHRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiA5OSU7XG59XG4uZGl2LWZvb3Rlci1maWx0ZXJzb3J0IC5mbGlnaHRkZXBhcnR1cmUtYnV0dG9uLWZpbHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZm9vdGVyLWZpbHRlcnNvcnQgLmNscy1iYWRnZS1maWx0ZXIge1xuICB0b3A6IDhweCAhaW1wb3J0YW50O1xuICBsZWZ0OiA0MCUgIWltcG9ydGFudDtcbn1cbi5kaXYtZm9vdGVyLWZpbHRlcnNvcnQgLmNscy1iYWRnZS1maWx0ZXIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmRpdi1mb290ZXItZmlsdGVyc29ydCAuY2hrLW9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMzZweDtcbiAgdG9wOiAyMnB4O1xufVxuXG4uZGl2LWRlcGFydC1mbGlnaHQtY2hvaWNlIHtcbiAgaGVpZ2h0OiA1NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtYXJnaW46IC0xNnB4IC0xNnB4IDE2cHggLTE2cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG4uZGl2LWRlcGFydC1mbGlnaHQtY2hvaWNlIC5kaXYtaWNvbi1mbGlnaHQge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTIlO1xufVxuLmRpdi1kZXBhcnQtZmxpZ2h0LWNob2ljZSAuZGl2LWZsaWdodC1pbmZvIHtcbiAgd2lkdGg6IDE1MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZGl2LWRlcGFydC1mbGlnaHQtY2hvaWNlIC5kaXYtdGltZS1hbmQtcHJpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kaXYtZGVwYXJ0LWZsaWdodC1jaG9pY2UgLmRpdi1jb2RlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjU0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1kZXBhcnQtZmxpZ2h0LWNob2ljZSAuZGl2LXRleHQtY2hhbmdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogNTAlO1xufVxuXG4udi1hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsb2F0LWVuYWJsZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA3MHB4KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHotaW5kZXg6IDk5O1xuICB0cmFuc2l0aW9uOiB0b3AgMC41cyBlYXNlLW91dDtcbiAgcGFkZGluZy10b3A6IDhweCAhaW1wb3J0YW50O1xufVxuXG4uZmxvYXQtZGVwYXJ0LWNob2ljZSB7XG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA3MHB4KSAhaW1wb3J0YW50O1xufVxuXG4udG9wLTExNCB7XG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxMTRweCkgIWltcG9ydGFudDtcbn1cblxuLnRvcC0xMjQge1xuICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTI0cHgpICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcywgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1maXRsZXIgLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1zb3J0IC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MsIDo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtZml0bGVyIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VhcmNocmVzdWx0LXNvcnQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MsIDo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtZml0bGVyIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTIlO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1zb3J0IC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy5zZWxlY3RlZCwgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1maXRsZXIgLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfY2hlY2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgd2lkdGg6IDkyJTtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC5zZWxlY3RlZCwgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1maXRsZXIgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19jaGVjay5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLCA6Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VhcmNocmVzdWx0LWZpdGxlciAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG46Om5nLWRlZXAgLmNscy1ib3JkZXItYm90dG9tIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtc29ydCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcywgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1maXRsZXIgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1zb3J0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLCA6Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VhcmNocmVzdWx0LWZpdGxlciAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNmMmYyZjI7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDkyJTtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1zb3J0IC5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MsIDo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWFyY2hyZXN1bHQtZml0bGVyIC5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19jaGVjay5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB3aWR0aDogOTIlO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtcmVmcmVzaFByaWNlLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zLmNscy1hbGVydC1yZWZyZXNoUHJpY2UgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYnRuLWZpbHRlciAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZWM5NzFmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlYzk3MWY7XG4gIGhlaWdodDogNDJweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5idG4tZmlsdGVyIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZWM5NzFmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOjpuZy1kZWVwIGlvbi1tb2RhbCB7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtaW4taGVpZ2h0OiA4MTJweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDI0cHgpIHtcbiAgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1zb3J0IC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcywgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlYXJjaHJlc3VsdC1maXRsZXIgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmlvbi1wYWdlIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuOjpuZy1kZWVwIC5zYy1pb24tYWxlcnQtaW9zLWguY2xzLWFsZXJ0LXNlYXJjaHJlc3VsdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2VhcmNocmVzdWx0IC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zYy1pb24tYWxlcnQtaW9zLWguY2xzLWFsZXJ0LXNlYXJjaHJlc3VsdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zZWFyY2hyZXN1bHQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCk7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KTtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICBjb250YWluOiBjb250ZW50O1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxMDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNlYXJjaHJlc3VsdCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiBub3dyYXAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNlYXJjaHJlc3VsdCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtcHJvbW8gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vIC5hY3Rpb24tc2hlZXQtYnV0dG9uLmlvbi1hY3RpdmF0YWJsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDExNHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1wcm9tbyAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5pb24tYWN0aXZhdGFibGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDE2cHgpICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1wcm9tbyAuZGl2LWNsb3NlLXByb21vIHtcbiAgICBib3R0b206IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDEzNHB4KSAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtcHJvbW8uaGVpZ2h0LTE5NCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5pb24tYWN0aXZhdGFibGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDE2cHgpICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMTk0cHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LXByb21vLmhlaWdodC0xOTQgLmRpdi1jbG9zZS1wcm9tbyB7XG4gICAgYm90dG9tOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAyMTRweCkgIWltcG9ydGFudDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1wcm9tbyBpb24tYmFja2Ryb3Age1xuICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtcHJvbW8gLmRpdi1jbG9zZS1wcm9tbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogMTcwcHg7XG59XG5cbi5hY3Rpb24tc2hlZXRzLWZsaWdodC1wcm9tbyAuZGl2LWNsb3NlLXByb21vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICByaWdodDogMTZweDtcbiAgYm90dG9tOiAxNzBweDtcbn1cblxuLmRpdi10aW1lLXByaW9yaXR5IC5pbWctdGltZS1wcmlvcml0eSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xufVxuLmRpdi10aW1lLXByaW9yaXR5IC50ZXh0LXRpbWUtcHJpb3JpdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogNDBweDtcbn1cblxuLnRvcC0xNSB7XG4gIHRvcDogMTVweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightsearchresult/flightsearchresult.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/flightsearchresult/flightsearchresult.page.ts ***!
  \***************************************************************/
/*! exports provided: FlightsearchresultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsearchresultPage", function() { return FlightsearchresultPage; });
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
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _flightsearchfilter_flightsearchfilter_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../flightsearchfilter/flightsearchfilter.page */ "./src/app/flightsearchfilter/flightsearchfilter.page.ts");
/* harmony import */ var _flightdetail_flightdetail_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../flightdetail/flightdetail.page */ "./src/app/flightdetail/flightdetail.page.ts");
/* harmony import */ var _flightchangeinfo_flightchangeinfo_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../flightchangeinfo/flightchangeinfo.page */ "./src/app/flightchangeinfo/flightchangeinfo.page.ts");
/* harmony import */ var _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../flightquickback/flightquickback.page */ "./src/app/flightquickback/flightquickback.page.ts");
/* harmony import */ var _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../providers/CustomAnimations */ "./src/app/providers/CustomAnimations.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _flightselecttimepriority_flightselecttimepriority_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../flightselecttimepriority/flightselecttimepriority.page */ "./src/app/flightselecttimepriority/flightselecttimepriority.page.ts");




















let FlightsearchresultPage = class FlightsearchresultPage {
    constructor(navCtrl, gf, modalCtrl, toastCtrl, zone, imageLoader, storage, actionsheetCtrl, valueGlobal, searchhotel, _flightService, alertCtrl, pickerCtrl, fb) {
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
        this.pickerCtrl = pickerCtrl;
        this.fb = fb;
        this.loadpricedone = false;
        this.title = "";
        this.subtitle = "";
        this.sortairline = true;
        this.step = 2;
        this.arrFilterAirline = [];
        this.count = 0;
        this.stoprequest = false;
        this.listDepartConditions = [];
        this.listReturnConditions = [];
        this.canselect = true;
        this.listDepartAirlines = [];
        this.listReturnAirlines = [];
        this.listDepartNoFilter = [];
        this.listReturnNoFilter = [];
        this.listDepartTimeRange = [];
        this.listDepartLandingTimeRange = [];
        this.listReturnTimeRange = [];
        this.listReturnLandingTimeRange = [];
        this.listDepartTicketClass = [];
        this.ecoTicketClassName = "Phổ thông";
        this.bussinessTicketClassName = "Thương gia";
        this.firstTicketClassName = "Hạng nhất";
        this.promoTicketClassName = "Tiết kiệm";
        this.flexTicketClassName = "Linh hoạt";
        this.listReturnTicketClass = [];
        this.listDepartStops = [];
        this.listReturnStops = [];
        this.loadsk = [1, 2, 3];
        this.listDepartAirlinesReturn = [];
        this.listReturnAirlinesReturn = [];
        this.listDepartNoFilterReturn = [];
        this.listReturnNoFilterReturn = [];
        this.listDepartTimeRangeReturn = [];
        this.listDepartLandingTimeRangeReturn = [];
        this.listReturnTimeRangeReturn = [];
        this.listReturnLandingTimeRangeReturn = [];
        this.listDepartTicketClassReturn = [];
        this.listReturnTicketClassReturn = [];
        this.listDepartStopsReturn = [];
        this.listReturnStopsReturn = [];
        this.progressbarloading = 0.5;
        this.progressbarbuffer = 0.75;
        this.jti = '';
        this.allowSearch = true;
        this.allowSearchReturn = true;
        this.buttoniVIVUSelected = true;
        this.textsort = "iVIVU đề xuất";
        this.showlowestprice = false;
        this.countdaydisplay = 0;
        this.roundtriptext = "khứ hồi/khách";
        this.listDepartFacility = [];
        this.listReturnFacility = [];
        this.allowclickcalendar = true;
        this.VJSaverTicket = ['E1_Eco', 'A_Eco'];
        this.scrollSearchFlight = (event) => {
            var se = this;
            let el = document.getElementsByClassName('div-other-choice-title');
            let el1 = document.getElementsByClassName('div-depart-flight-choice');
            if (el.length > 0) {
                if (event.detail.scrollTop > 448) {
                    if (se.step == 2) {
                        if (!el[0].classList.contains("float-enabled")) {
                            el[0].classList.add('float-enabled');
                        }
                    }
                    else {
                        if (!el[0].classList.contains("float-enabled")) {
                            el[0].classList.add('float-enabled');
                            el[0].classList.add('top-124');
                        }
                    }
                }
                else {
                    el[0].classList.remove('float-enabled');
                    el[0].classList.remove('top-124');
                }
            }
        };
        this.step = 2;
        clearInterval(this.intervalFlightTicket);
        if (_flightService.objSearch) {
            let obj = _flightService.objSearch;
            let key = "";
            storage.get('timedepartpriorityconfig').then((data) => {
                if (data) {
                    this.timedepartpriorityconfig = data;
                    obj.timeDepartPriority = data;
                }
            });
            storage.get('timereturnpriorityconfig').then((data) => {
                if (data) {
                    this.timereturnpriorityconfig = data;
                    obj.timeReturnPriority = data;
                }
            });
            if (!obj.itemSameCity) {
                key = 'listflight_' + obj.departDate + '_' + obj.returnDate + '_' + obj.departCode + '_' + obj.arrivalCode + '_' + obj.adult + '_' + obj.child + '_' + obj.infant;
                storage.get(key).then((data) => {
                    if (data) {
                        this.loadFlightData(obj, false);
                    }
                    else {
                        this.loadFlightData(obj, false);
                    }
                });
            }
            else {
                key = 'listflight_' + obj.departDate + '_' + obj.returnDate + '_' + obj.departCity + '_' + obj.returnCity + '_' + obj.adult + '_' + obj.child + '_' + obj.infant;
                storage.get(key).then((data) => {
                    if (data) {
                        let objsamecity = obj.itemDepartSameCity ? obj.itemDepartSameCity : obj.itemReturnSameCity;
                    }
                    else {
                        if (!obj.itemSameCity) {
                            this.loadFlightData(obj, false);
                        }
                        else {
                            let objsamecity = obj.itemDepartSameCity ? obj.itemDepartSameCity : obj.itemReturnSameCity;
                            this.loadFlightDataSameCity(obj, objsamecity);
                        }
                    }
                });
            }
            this.title = obj.title;
            this.subtitle = obj.subtitle;
            this.titlereturn = obj.titleReturn;
            this.subtitlereturn = obj.subtitleReturn;
        }
        this.storage.get('flightfilterobject').then((data) => {
            if (data) {
                this._flightService.objectFilter = data;
            }
        });
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
            }
        });
        this.gf.googleAnalytionCustom('Searched', { 'Origination City': _flightService.itemFlightCache.departCity,
            'Destination City': _flightService.itemFlightCache.returnCity,
            'Departure Date': _flightService.itemFlightCache.checkInDate, 'Return Date': _flightService.itemFlightCache.checkOutDate, 'Number of Passengers': _flightService.itemFlightCache.pax });
        let se = this;
        se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_SEARCHED, { 'fb_content_type': 'flight', 'fb_content_id': se._flightService.itemFlightCache.departCode + "_" + se._flightService.itemFlightCache.returnCode,
            'origin_airport': se._flightService.itemFlightCache.departCode,
            'destination_airport': se._flightService.itemFlightCache.returnCode,
            'departing_departure_date': se._flightService.itemFlightCache.checkInDate, 'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate, 'num_adults': se._flightService.itemFlightCache.adult, 'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0, 'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0, 'fb_value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0), 'fb_currency': "VND",
            'value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0), 'currency': "VND" }, se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToFloat(se._flightService.itemFlightCache.totalPrice) : 0);
        let flightItem = se._flightService.itemFlightCache;
    }
    ngOnInit() {
        this.zone.run(() => {
            this.stoprequest = false;
            setTimeout(() => {
                this.stoprequest = true;
                this.loadpricedone = true;
            }, 50 * 1000);
        });
        this._flightService.itemFlightFilterChange.pipe().subscribe((data) => {
            if (data) {
                this.zone.run(() => {
                    this.enableFlightFilter = 1;
                });
            }
            else {
                this.zone.run(() => {
                    this.enableFlightFilter = 0;
                });
            }
        });
        this._flightService.itemFlightFilterChangeReturn.pipe().subscribe((data) => {
            if (data) {
                this.zone.run(() => {
                    this.enableFlightFilterReturn = 1;
                });
            }
            else {
                this.zone.run(() => {
                    this.enableFlightFilterReturn = 0;
                });
            }
        });
        this._flightService.itemChangeTicketFlight.pipe().subscribe((data) => {
            if (data) {
                let obj = this._flightService.objSearch;
                this.step = this._flightService.itemFlightCache.step;
                this.zone.run(() => {
                    this.resetValue();
                });
                this.loadFlightData(obj, true);
            }
        });
    }
    goback() {
        this.stoprequest = true;
        if (this.step == 3) {
            this.zone.run(() => {
                this.step = 2;
                this._flightService.itemFlightCache.step = 2;
                this._flightService.itemFlightCache.departFlight = null;
                this._flightService.itemFlightCache.returnFlight = null;
                if (this._flightService.objectFilter) {
                    this.filterItem();
                }
            });
        }
        else {
            this._flightService.itemTabFlightActive.emit(true);
            this._flightService.itemFlightReloadInfo.emit(1);
            this.valueGlobal.backValue = "homeflight";
            this.navCtrl.navigateBack('/tabs/tab1');
        }
    }
    checkRoundTripInDay(item) {
        var se = this, res = false;
        return new Promise((resolve, reject) => {
            let departTime = moment__WEBPACK_IMPORTED_MODULE_8__(se._flightService.itemFlightCache.departFlight.landingTime);
            let departTimeReturn = moment__WEBPACK_IMPORTED_MODULE_8__(item.departTime);
            if (se._flightService.itemFlightCache.departFlight && item && departTimeReturn.diff(departTime, 'minutes') < 180) {
                resolve(true);
            }
            resolve(false);
        });
    }
    showAlert(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-searchresult",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    select(type, item) {
        var se = this;
        se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_VIEWED_CONTENT, { 'fb_content_type': 'flight', 'fb_content_id': item.fromPlaceCode + "_" + item.toPlaceCode + "_" + item.flightNumber,
            'origin_airport': item.fromPlaceCode,
            'fb_destination_airport': item.toPlaceCode,
            'departing_departure_date': se._flightService.itemFlightCache.checkInDate, 'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate, 'num_adults': se._flightService.itemFlightCache.adult, 'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0, 'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0, 'fb_value': item.totalPrice, 'fb_currency': "VND", 'value': item.totalPrice, 'currency': "VND",
        }, se.gf.convertNumberToFloat(item.totalPrice));
        let flightItem = se._flightService.itemFlightCache;
        if (type == 1) {
            item.departTimeDisplayFull = se._flightService.itemFlightCache.checkInDisplay;
            se._flightService.itemFlightCache.departFlight = item;
            se.departFlight = item;
            if (se._flightService.objSearch.roundTrip) {
                se._flightService.itemFlightCache.step = 3;
                if (se._flightService.objectFilter) {
                    se.filterItem();
                }
                se.zone.run(() => {
                    se.step = 3;
                    se.content.scrollToTop(300);
                });
            }
            else {
                se._flightService.itemFlightCache.returnFlight = null;
                if (se.canselect) {
                    se.choiceTicket(type, item);
                }
                se._flightService.itemFlightCache.hasChoiceLuggage = false;
                se._flightService.itemFlightCache.departLuggage = [];
                se._flightService.itemFlightCache.returnLuggage = [];
            }
        }
        else {
            if (se._flightService.objSearch.roundTrip) {
                se.checkRoundTripInDay(item).then((data) => {
                    if (data) {
                        se.showAlert('Để thuận tiện, bạn nên chọn chuyến bay về có giờ khởi hành cách thời điểm chuyến bay đi hạ cánh ít nhất 3 tiếng');
                        return;
                    }
                    else {
                        item.returnTimeDisplayFull = se._flightService.itemFlightCache.returnTimeDisplay;
                        se._flightService.itemFlightCache.returnFlight = se._flightService.objSearch.roundTrip ? item : null;
                        if (se.canselect) {
                            se.choiceTicket(type, item);
                        }
                        se._flightService.itemFlightCache.hasChoiceLuggage = false;
                        se._flightService.itemFlightCache.departLuggage = [];
                        se._flightService.itemFlightCache.returnLuggage = [];
                    }
                });
            }
            else {
                se._flightService.itemFlightCache.returnFlight = se._flightService.objSearch.roundTrip ? item : null;
                if (se.canselect) {
                    se.choiceTicket(type, item);
                }
                se._flightService.itemFlightCache.hasChoiceLuggage = false;
                se._flightService.itemFlightCache.departLuggage = [];
                se._flightService.itemFlightCache.returnLuggage = [];
            }
        }
    }
    choiceTicket(type, item) {
        var se = this;
        se.gf.showLoading();
        se.selectTicket().then((data) => {
            se.canselect = true;
            se.gf.hideLoading();
            if (data && data.id) {
                se._flightService.itemFlightCache.dataBooking = data.detail;
                se._flightService.itemFlightCache.reservationId = data.id;
                se._flightService.itemFlightCache.step = 3;
                se.storage.get("itemFlightCache").then((data) => {
                    if (data) {
                        se.storage.remove("itemFlightCache").then(() => {
                            se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                        });
                    }
                    else {
                        se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                    }
                });
                se._flightService.itemFlightReloadInfo.emit(1);
                se._flightService.itemFlightCache.departSeatChoice = [];
                se._flightService.itemFlightCache.returnSeatChoice = [];
                se._flightService.itemFlightCache.listdepartseatselected = "";
                se._flightService.itemFlightCache.listreturnseatselected = "";
                se._flightService.itemFlightCache.departSeatChoiceAmout = 0;
                se._flightService.itemFlightCache.returnSeatChoiceAmout = 0;
                se.clearServiceInfo();
                se.getSummaryBooking(data).then((dataBooking) => {
                    if (dataBooking && dataBooking.hotelIds) {
                        se.getHotelCity(dataBooking.hotelIds).then((dataHotelCity) => {
                            if (dataHotelCity && dataHotelCity.List) {
                                if (dataBooking && dataBooking.rateKey) {
                                    se.getHotelCityPrice(dataBooking.rateKey).then((dataHotelCityPrice) => {
                                        if (dataHotelCityPrice && dataHotelCityPrice.HotelListResponse && dataHotelCityPrice.HotelListResponse.HotelList && dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary && dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary.length > 0) {
                                            let arrHotelPrice = [], arrHotelDetail = [], arrHotel = [];
                                            se.mapHotelInfo(dataHotelCity, dataHotelCityPrice, arrHotelPrice, arrHotelDetail, arrHotel).then((data) => {
                                                se._flightService.itemFlightCache.itemsFlightCityHotel = [...data];
                                                se._flightService.itemCheckHotelCity.emit([...data]);
                                            });
                                        }
                                        else {
                                            se._flightService.itemCheckHotelCity.emit(0);
                                        }
                                    });
                                }
                            }
                            else {
                                se._flightService.itemCheckHotelCity.emit(0);
                            }
                        });
                    }
                    else {
                        se._flightService.itemCheckHotelCity.emit(0);
                    }
                    se.gf.hideLoading();
                });
                se.navCtrl.navigateForward('/flightaddservice');
                se.stoprequest = true;
            }
            else {
                se.showAlertRefreshPrice('Vé máy bay bạn chọn hiện không còn. Vui lòng chọn lại!');
            }
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
    getHotelCity(ids) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlGet + "/hotelslist?hotelids=" + ids + "&page=1&pageSize=15",
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
            };
            requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
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
            requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
                if (error) {
                    error.page = "flightsearchresult";
                    error.func = "HotelSearchReqContractMultiHotel";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
            });
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
            requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
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
    clearServiceInfo() {
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
        this._flightService.itemFlightCache.isnewmodelseat = false;
        this._flightService.itemFlightCache.isnewmodelreturnseat = false;
        this._flightService.itemFlightCache.DICHUNGParam = null;
        this._flightService.itemFlightCache.departDCPlace = null;
        this._flightService.itemFlightCache.returnDCPlace = null;
        this._flightService.itemFlightCache.isblocktextDepart = false;
        this._flightService.itemFlightCache.isblocktextReturn = false;
        this._flightService.itemFlightCache.promotionCode = "";
        this._flightService.itemFlightCache.discount = 0;
        this._flightService.itemFlightCache.hasvoucher = false;
    }
    showAlertRefreshPrice(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let alert = yield this.alertCtrl.create({
                message: msg,
                header: 'Giá đã được cập nhật',
                cssClass: "cls-alert-refreshPrice",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            se.zone.run(() => {
                                se.resetValue();
                            });
                            se.loadFlightData(se._flightService.objSearch, true);
                            clearInterval(se.intervalFlightTicket);
                            if (se.actionsheetCtrl) {
                                se.actionsheetCtrl.dismiss();
                            }
                            if (se.modalCtrl) {
                                se.modalCtrl.dismiss();
                            }
                            if (se.pickerCtrl) {
                                se.pickerCtrl.dismiss();
                            }
                            se.navCtrl.navigateBack('/flightsearchresult');
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    selectTicket() {
        var se = this;
        se.canselect = false;
        return new Promise((resolve, reject) => {
            let obj = se._flightService.objSearch;
            let objdepart = se._flightService.itemFlightCache.departFlight;
            let objreturn = obj.roundTrip ? se._flightService.itemFlightCache.returnFlight : null;
            let flighttype = obj.roundTrip ? 2 : 1;
            let selectFlightURL = "";
            if (obj.roundTrip) {
                selectFlightURL = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + 'gate/apiv1/InitBooking?token=Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09&from=' + obj.departCode + '&to=' + obj.arrivalCode + '&departdate=' + obj.departDate + '&returndate=' + obj.returnDate + '&adult=' + obj.adult + '&child=' + obj.child + '&infant=' + obj.infant + '&flighttype=' + flighttype;
                selectFlightURL += '&departFlightId=' + objdepart.id + '&returnFlightId=' + objreturn.id + '&departTicketType=' + objdepart.ticketType + '&returnTicketType=' + objreturn.ticketType + '&Source=6&memberId=' + se.jti;
            }
            else {
                selectFlightURL = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + 'gate/apiv1/InitBooking?token=Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09&from=' + obj.departCode + '&to=' + obj.arrivalCode + '&departdate=' + obj.departDate + '&returndate=' + obj.returnDate + '&adult=' + obj.adult + '&child=' + obj.child + '&infant=' + obj.infant + '&flighttype=' + flighttype;
                selectFlightURL += '&departFlightId=' + objdepart.id + "&returnFlightId=''&departTicketType=" + objdepart.ticketType + "&returnTicketType=''" + '&Source=6&memberId=' + se.jti;
            }
            var options = {
                method: 'POST',
                url: selectFlightURL,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
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
                    if (jsondata.error) {
                        resolve(false);
                    }
                    else {
                        resolve(jsondata);
                    }
                }
            });
        });
    }
    clearFilter() {
        this._flightService.objectFilter = {};
        this._flightService.objectFilter.departTimeRange = [];
        this._flightService.objectFilter.returnTimeRange = [];
        this._flightService.objectFilter.airlineSelected = [];
        this._flightService.objectFilter.classSelected = [];
        this._flightService.objectFilter.stopSelected = [];
        this._flightService.objectFilter.facilitySelected = [];
        this._flightService.objectFilter.minprice = 0;
        this._flightService.objectFilter.maxprice = 15000000;
        this._flightService.objectFilterReturn = {};
        this._flightService.objectFilterReturn.departTimeRangeReturn = [];
        this._flightService.objectFilterReturn.returnTimeRangeReturn = [];
        this._flightService.objectFilterReturn.airlineSelectedReturn = [];
        this._flightService.objectFilterReturn.classSelectedReturn = [];
        this._flightService.objectFilterReturn.stopSelectedReturn = [];
        this._flightService.objectFilterReturn.facilitySelectedReturn = [];
        this._flightService.objectFilterReturn.minpriceReturn = 0;
        this._flightService.objectFilterReturn.maxpriceReturn = 15000000;
    }
    clearSearchFilter() {
        this._flightService.objectFilter = {};
        this._flightService.objectFilter.departTimeRange = [];
        this._flightService.objectFilter.returnTimeRange = [];
        this._flightService.objectFilter.airlineSelected = [];
        this._flightService.objectFilter.classSelected = [];
        this._flightService.objectFilter.stopSelected = [];
        this._flightService.objectFilter.facilitySelected = [];
        this._flightService.objectFilter.minprice = 0;
        this._flightService.objectFilter.maxprice = 15000000;
        this._flightService.objectFilterReturn = {};
        this._flightService.objectFilterReturn.departTimeRangeReturn = [];
        this._flightService.objectFilterReturn.returnTimeRangeReturn = [];
        this._flightService.objectFilterReturn.airlineSelectedReturn = [];
        this._flightService.objectFilterReturn.classSelectedReturn = [];
        this._flightService.objectFilterReturn.stopSelectedReturn = [];
        this._flightService.objectFilterReturn.facilitySelectedReturn = [];
        this._flightService.objectFilterReturn.minpriceReturn = 0;
        this._flightService.objectFilterReturn.maxpriceReturn = 15000000;
        if (this.step == 2) {
            let listdepart = this._flightService.listAllFlightDepart;
            this.bestpricedepart = [...listdepart].splice(0, 3);
            this.otherpricedepart = [...listdepart].splice(3, listdepart.length);
            if (this.enableFlightFilter) {
                this.listDepartFilter = [...listdepart];
            }
            this._flightService.itemFlightFilterChange.emit(0);
        }
        else {
            let listreturn = this._flightService.listAllFlightReturn;
            this.bestpricereturn = [...listreturn].splice(0, 3);
            this.otherpricereturn = [...listreturn].splice(3, listreturn.length);
            if (this.enableFlightFilterReturn) {
                this.listReturnFilter = [...listreturn];
            }
            this._flightService.itemFlightFilterChangeReturn.emit(0);
        }
        if (this.sortairline && !this.buttoniVIVUSelected) {
            this.excuteSort();
        }
        this.storage.remove('flightfilterobject');
    }
    checkLoadCacheData(obj, hascache) {
        var se = this;
        se.stoprequest = true;
        return new Promise((resolve, reject) => {
            let objjson = {
                "requestFrom": {
                    "fromPlace": obj.departCode,
                    "toPlace": obj.arrivalCode,
                    "departDate": moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(obj.departDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    "returnDate": moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(obj.departDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    "adult": obj.adult,
                    "child": obj.child,
                    "infant": obj.infant ? obj.infant : 0,
                    "timeIndayRecomment": obj.timeDepartPriority ? obj.timeDepartPriority : "09:00",
                    "version": "2.0",
                    "roundTrip": obj.roundTrip
                },
                "requestTo": {
                    "fromPlace": obj.arrivalCode,
                    "toPlace": obj.departCode,
                    "departDate": moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(obj.returnDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    "returnDate": moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(obj.returnDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    "adult": obj.adult,
                    "child": obj.child,
                    "infant": obj.infant ? obj.infant : 0,
                    "timeIndayRecomment": obj.timeReturnPriority ? obj.timeReturnPriority : "15:00",
                    "version": "2.0",
                    "roundTrip": obj.roundTrip
                },
                "roundTrip": obj.roundTrip,
                "noCache": se._flightService.bookingSuccess ? true : (hascache ? hascache : false)
            };
            var options = {
                'method': 'POST',
                'url': _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + 'gate/apiv1/GetSessionFlight',
                'headers': {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(objjson)
            };
            requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                if (body) {
                    resolve(JSON.parse(body));
                }
            });
        });
    }
    loadFlightCacheDataByAirline(obj, type) {
        var se = this;
        if (type == "depart") {
            se.allowSearch = false;
        }
        else {
            se.allowSearchReturn = false;
        }
        let urlfindflightincache = type == "depart" ? _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetFlightDepart" : _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetFlightReturn";
        let objbody = {
            "fromPlace": type == 'depart' ? obj.departCode : obj.arrivalCode,
            "toPlace": type == 'depart' ? obj.arrivalCode : obj.departCode,
            "departDate": type == 'depart' ? moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(obj.departDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS") : moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(obj.returnDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
            "returnDate": type == 'depart' ? moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(obj.departDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS") : moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(obj.returnDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
            "adult": obj.adult,
            "child": obj.child,
            "infant": obj.infant ? obj.infant : 0,
            "sources": obj.source,
            "timeIndayRecomment": type == "depart" ? (obj.timeDepartPriority ? obj.timeDepartPriority : "09:00") : obj.timeReturnPriority ? obj.timeReturnPriority : "15:00",
            "version": "2.0",
            "roundTrip": obj.roundTrip
        };
        var options = {
            method: "POST",
            url: urlfindflightincache,
            body: JSON.stringify(objbody),
            headers: {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
            let objError = {
                page: "flightsearchresult",
                func: "findflightincache",
                message: response.statusMessage,
                content: response.body,
                type: "warning",
                param: JSON.stringify(options)
            };
            if (error) {
                error.page = "flightsearchresult";
                error.func = "findflightincache";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            else {
                let result = JSON.parse(body);
                if (type == "depart") {
                    se.allowSearch = true;
                }
                else {
                    se.allowSearchReturn = true;
                }
                if (result) {
                    if (result.data && result.data.length > 0) {
                        result.data.forEach(element => {
                            se.loadmultidata(element.flights, type);
                            se.loadConditions(element.conditions, type);
                        });
                    }
                    if (!result.stop && !se.stoprequest && type == 'depart' && se.allowSearch) {
                        obj.source = result.sources;
                        setTimeout(() => {
                            se.zone.run(() => {
                                obj.source = result.sources;
                            });
                            se.loadFlightCacheDataByAirline(obj, 'depart');
                        }, 1000);
                        obj.countretry++;
                    }
                    else if (!result.stop && !se.stoprequest && type == 'return' && se.allowSearchReturn) {
                        obj.source = result.sources;
                        setTimeout(() => {
                            se.zone.run(() => {
                                obj.source = result.sources;
                            });
                            se.loadFlightCacheDataByAirline(obj, 'return');
                        }, 1000);
                        obj.countretry++;
                    }
                }
            }
        });
    }
    loadConditions(conditions, type) {
        var se = this;
        if (type == 'depart') {
            if (se.listDepartConditions && se.listDepartConditions.length > 0) {
                se.listDepartConditions = [...se.listDepartConditions, ...conditions];
            }
            else {
                se.listDepartConditions = [...conditions];
            }
        }
        else {
            if (se.listReturnConditions && se.listReturnConditions.length > 0) {
                se.listReturnConditions = [...se.listReturnConditions, ...conditions];
            }
            else {
                se.listReturnConditions = [...conditions];
            }
        }
    }
    loadFlightData(obj, hascache) {
        var se = this;
        setTimeout(() => {
            se.zone.run(() => {
                se.progressbarloading += 0.05;
                se.progressbarbuffer += 0.05;
            });
        }, 500);
        se.intervalProgressbar = setInterval(() => {
            se.zone.run(() => {
                se.progressbarloading += 0.02;
                se.progressbarbuffer += 0.02;
            });
        }, 1000);
        setTimeout(() => {
            this.stoprequest = true;
            this.loadpricedone = true;
        }, 50 * 1000);
        se.checkLoadCacheData(obj, hascache).then(data => {
            if (data) {
                obj.countretry = 0;
                obj.source = data;
                se.listDepartConditions = [];
                se.listReturnConditions = [];
                se.stoprequest = false;
                se.loadFlightCacheDataByAirline(Object.assign({}, obj), 'depart');
                setTimeout(() => {
                    se.loadFlightCacheDataByAirline(Object.assign({}, obj), 'return');
                }, 1000);
            }
        });
        se._flightService.itemFlightCache.itemsFlightCityHotel = [];
        se._flightService.itemFlightCache.HotelCityMealtypeSelected = null;
        se._flightService.itemFlightCache.objHotelCitySelected = null;
    }
    loadFlightDataSameCity(obj, objsamecity) {
        var se = this;
        se.count = 0;
        objsamecity.Items.forEach(element => {
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        method: 'GET',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + "/get-flight-for-olivia?apiToken=3b760e5dcf038878925b5613c32615ea3&departDate=" + moment__WEBPACK_IMPORTED_MODULE_8__(obj.departDate).format("YYYY-MM-DD") + '&returnDate=' + moment__WEBPACK_IMPORTED_MODULE_8__(obj.returnDate).format("YYYY-MM-DD") + '&departCode=' + (obj.itemDepartSameCity ? element.Code : obj.departCode) + '&arrivalCode=' + (obj.itemReturnSameCity ? element.Code : obj.arrivalCode) + '&adult=' + obj.adult + '&child=' + obj.child + '&infant=' + obj.infant + '&FlagInt=false',
                        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                        headers: {
                            apiToken: '3b760e5dcf038878925b5613c32615ea3',
                        }
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
                        let objError = {
                            page: "flightsearchresult",
                            func: "getdata",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        if (error) {
                            error.page = "flightsearchresult";
                            error.func = "loaddata";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                        }
                        if (response.statusCode == 200) {
                            let jsondata = JSON.parse(body);
                        }
                    });
                }
            });
        });
    }
    loadmultidata(data, type) {
        var se = this;
        let jsondata = data;
        se.zone.run(() => {
            se.count++;
            if (type == 'depart') {
                if (!se.listDepart || (se.listDepart && se.listDepart.length == 0)) {
                    se.listDepart = jsondata;
                }
                else {
                    if (se.listDepart && se.listDepart.length > 0) {
                        se.listDepart = [...se.listDepart, ...jsondata];
                    }
                }
            }
            if (type == 'return') {
                if (!se.listReturn || (se.listReturn && se.listReturn.length == 0)) {
                    se.listReturn = jsondata;
                }
                else {
                    if (se.listReturn && se.listReturn.length > 0) {
                        se.listReturn = [...se.listReturn, ...jsondata];
                    }
                }
            }
            if (se.listDepart && se.listDepart.length > 0) {
                se.listDepart.forEach(element => {
                    let priceFlightAdult = 0;
                    let priceFlightChild = 0;
                    let priceFlightInfant = 0;
                    element.timeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(element.departTime).format("HH:mm") + " - " + moment__WEBPACK_IMPORTED_MODULE_8__(element.landingTime).format("HH:mm");
                    let hours = Math.floor(element.flightDuration / 60);
                    let minutes = element.flightDuration * 1 - (hours * 60);
                    if (hours < 10) {
                        hours = hours != 0 ? "0" + hours : "0";
                    }
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                    element.departTimeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(element.departTime).format("HH:mm");
                    element.landingTimeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(element.landingTime).format("HH:mm");
                    element.flightTimeDisplay = hours + "h" + minutes;
                    element.flightTimeDetailDisplay = hours + "h" + minutes + "m";
                    if (element.details[0].from.length > 3) {
                        element.from = element.details[0].from.split(',')[1].trim();
                    }
                    else {
                        element.from = element.details[0].from;
                    }
                    if (element.details[0].to.length > 3) {
                        element.to = element.details[0].to.split(',')[1].trim();
                    }
                    else {
                        element.to = element.details[0].to;
                    }
                    element.priceSummaries.forEach(e => {
                        if (e.passengerType == 0) {
                            priceFlightAdult += e.price;
                        }
                        if (e.passengerType == 1) {
                            priceFlightChild += e.price;
                        }
                        if (e.passengerType == 2) {
                            priceFlightInfant += e.price;
                        }
                    });
                    element.priceorder = element.priceAvg;
                    if (element.airlineCode.indexOf("VietnamAirlines") != -1) {
                        if (se.listDepartAirlines.length == 0 || !se.gf.checkExistsItemInArray(se.listDepartAirlines, "VietnamAirlines", "filtername")) {
                            se.listDepartAirlines.push("VietnamAirlines");
                        }
                    }
                    else if (element.airlineCode.indexOf("BambooAirways") != -1) {
                        if (se.listDepartAirlines.length == 0 || !se.gf.checkExistsItemInArray(se.listDepartAirlines, "BambooAirways", "filtername")) {
                            se.listDepartAirlines.push("BambooAirways");
                        }
                    }
                    else if (element.airlineCode.indexOf("VietJetAir") != -1) {
                        if (se.listDepartAirlines.length == 0 || !se.gf.checkExistsItemInArray(se.listDepartAirlines, "VietJetAir", "filtername")) {
                            se.listDepartAirlines.push("VietJetAir");
                        }
                    }
                    else if (element.airlineCode.indexOf("JetStar") != -1) {
                        if (se.listDepartAirlines.length == 0 || !se.gf.checkExistsItemInArray(se.listDepartAirlines, "JetStar", "filtername")) {
                            se.listDepartAirlines.push("JetStar");
                        }
                    }
                    let time = moment__WEBPACK_IMPORTED_MODULE_8__(element.departTime).format("HH:mm:ss");
                    let timerange = time ? se.gf.convertStringToNumber(time) : -1;
                    if (timerange >= 0 && timerange <= 60000 && se.listDepartTimeRange.indexOf(1) == -1) {
                        se.listDepartTimeRange.push(1);
                    }
                    else if (timerange >= 60000 && timerange <= 120000 && se.listDepartTimeRange.indexOf(2) == -1) {
                        se.listDepartTimeRange.push(2);
                    }
                    else if (timerange >= 120000 && timerange <= 180000 && se.listDepartTimeRange.indexOf(3) == -1) {
                        se.listDepartTimeRange.push(3);
                    }
                    else if (timerange >= 180000 && timerange <= 240000 && se.listDepartTimeRange.indexOf(4) == -1) {
                        se.listDepartTimeRange.push(4);
                    }
                    let timeReturn = moment__WEBPACK_IMPORTED_MODULE_8__(element.landingTime).format("HH:mm:ss");
                    let timeRangeReturn = time ? se.gf.convertStringToNumber(timeReturn) : -1;
                    if (timeRangeReturn >= 0 && timeRangeReturn <= 60000 && se.listDepartLandingTimeRange.indexOf(1) == -1) {
                        se.listDepartLandingTimeRange.push(1);
                    }
                    else if (timeRangeReturn >= 60000 && timeRangeReturn <= 120000 && se.listDepartLandingTimeRange.indexOf(2) == -1) {
                        se.listDepartLandingTimeRange.push(2);
                    }
                    else if (timeRangeReturn >= 120000 && timeRangeReturn <= 180000 && se.listDepartLandingTimeRange.indexOf(3) == -1) {
                        se.listDepartLandingTimeRange.push(3);
                    }
                    else if (timeRangeReturn >= 180000 && timeRangeReturn <= 240000 && se.listDepartLandingTimeRange.indexOf(4) == -1) {
                        se.listDepartLandingTimeRange.push(4);
                    }
                    if (((element.ticketClass == se.ecoTicketClassName && element.airlineCode != 'VietJetAir') || (element.airlineCode == 'VietJetAir' && element.ticketType == "Eco" && se.VJSaverTicket.indexOf(element.details[0].ticketType) == -1)) && se.listDepartTicketClass.indexOf(1) == -1) {
                        se.listDepartTicketClass.push(1);
                    }
                    else if (element.ticketClass == se.bussinessTicketClassName && se.listDepartTicketClass.indexOf(2) == -1) {
                        se.listDepartTicketClass.push(2);
                    }
                    else if (((element.ticketClass == se.flexTicketClassName && element.airlineCode != 'VietJetAir') || (element.airlineCode != 'VietJetAir' && element.ticketType == se.flexTicketClassName && se.VJSaverTicket.indexOf(element.details[0].ticketType) == -1)) && se.listDepartTicketClass.indexOf(3) == -1) {
                        se.listDepartTicketClass.push(3);
                    }
                    else if ((element.ticketClass == se.promoTicketClassName || (element.airlineCode == 'VietJetAir' && element.ticketType == "Eco" && se.VJSaverTicket.indexOf(element.details[0].ticketType) != -1)) && se.listDepartTicketClass.indexOf(4) == -1) {
                        se.listDepartTicketClass.push(4);
                    }
                    if (element.stops == 0 && se.listDepartStops.indexOf(1) == -1) {
                        se.listDepartStops.push(1);
                    }
                    else if (element.stops == 1 && se.listDepartStops.indexOf(2) == -1) {
                        se.listDepartStops.push(2);
                    }
                    else if (element.stops == 2 && se.listDepartStops.indexOf(3) == -1) {
                        se.listDepartStops.push(3);
                    }
                    else if (element.stops == 3 && se.listDepartStops.indexOf(4) == -1) {
                        se.listDepartStops.push(4);
                    }
                    if (element.ticketCondition && element.ticketCondition.isTicketRefund && se.listDepartFacility.indexOf(1) == -1) {
                        se.listDepartFacility.push(1);
                    }
                    else if (element.promotions && element.promotions.length > 0 && se.listDepartFacility.indexOf(2) == -1) {
                        se.listDepartFacility.push(2);
                    }
                    else if (element.ticketCondition && element.ticketCondition.luggageSigned && se.listDepartFacility.indexOf(3) == -1) {
                        se.listDepartFacility.push(3);
                    }
                    else if (element.ticketCondition && element.ticketCondition.priorityCI && se.listDepartFacility.indexOf(4) == -1) {
                        se.listDepartFacility.push(4);
                    }
                    element.priceAdult = priceFlightAdult;
                    element.priceChild = priceFlightChild;
                    element.priceInfant = priceFlightInfant;
                    element.priceDisplay = se.gf.convertNumberToString(element.totalPrice) + " đ";
                    if (!element.priceBeforeDiscount && element.totalDiscount) {
                        element.priceBeforeDiscount = element.totalPrice + element.totalDiscount;
                        element.priceBeforeDiscount = se.gf.convertNumberToString(element.priceBeforeDiscount);
                    }
                    let ar_time = element.departTime.toString().split('T')[1];
                    let Hour = ar_time.toString().split(':')[0];
                    let Minute = ar_time.toString().split(':')[1];
                    let kq = Hour * 60 + Number(Minute);
                    element.rangeTime = kq;
                    if (element.operatedBy && element.urlLogo.indexOf('content/img') == -1) {
                        element.urlLogo = "https://www.ivivu.com/ve-may-bay/content/img/brands/w100/" + element.urlLogo;
                    }
                });
                se._flightService.itemFlightCache.listDepartAirlines = se.listDepartAirlines;
                se._flightService.itemFlightCache.listDepartTimeRange = se.listDepartTimeRange;
                se._flightService.itemFlightCache.listDepartLandingTimeRange = se.listDepartLandingTimeRange;
                se._flightService.itemFlightCache.listDepartTicketClass = se.listDepartTicketClass;
                se._flightService.itemFlightCache.listDepartStops = se.listDepartStops;
                se._flightService.itemFlightCache.listDepartFacility = se.listDepartFacility;
                se.sortFlights('priceorder', se.listDepart);
            }
            if (se.listReturn && se.listReturn.length > 0) {
                se.listReturn.forEach(element => {
                    element.timeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(element.departTime).format("HH:mm") + " - " + moment__WEBPACK_IMPORTED_MODULE_8__(element.landingTime).format("HH:mm");
                    let hours = Math.floor(element.flightDuration / 60);
                    let minutes = element.flightDuration * 1 - (hours * 60);
                    if (hours < 10) {
                        hours = hours != 0 ? "0" + hours : "0";
                    }
                    if (minutes < 10) {
                        minutes = "0" + minutes;
                    }
                    element.departTimeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(element.departTime).format("HH:mm");
                    element.landingTimeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(element.landingTime).format("HH:mm");
                    element.flightTimeDisplay = hours + "h" + minutes;
                    element.flightTimeDetailDisplay = hours + "h" + minutes + "m";
                    if (element.details[0].from.length > 3) {
                        element.from = element.details[0].from.split(',')[1].trim();
                    }
                    else {
                        element.from = element.details[0].from;
                    }
                    if (element.details[0].to.length > 3) {
                        element.to = element.details[0].to.split(',')[1].trim();
                    }
                    else {
                        element.to = element.details[0].to;
                    }
                    let priceFlightAdult = 0;
                    let priceFlightChild = 0;
                    let priceFlightInfant = 0;
                    element.priceSummaries.forEach(e => {
                        if (e.passengerType == 0) {
                            priceFlightAdult += e.price;
                        }
                        if (e.passengerType == 1) {
                            priceFlightChild += e.price;
                        }
                        if (e.passengerType == 2) {
                            priceFlightInfant += e.price;
                        }
                    });
                    element.priceorder = element.priceAvg;
                    if (element.airlineCode.indexOf("VietnamAirlines") != -1) {
                        if (se.listReturnAirlinesReturn.length == 0 || !se.gf.checkExistsItemInArray(se.listReturnAirlinesReturn, "VietnamAirlines", "filtername")) {
                            se.listReturnAirlinesReturn.push("VietnamAirlines");
                        }
                    }
                    else if (element.airlineCode.indexOf("BambooAirways") != -1) {
                        if (se.listReturnAirlinesReturn.length == 0 || !se.gf.checkExistsItemInArray(se.listReturnAirlinesReturn, "BambooAirways", "filtername")) {
                            se.listReturnAirlinesReturn.push("BambooAirways");
                        }
                    }
                    else if (element.airlineCode.indexOf("VietJetAir") != -1) {
                        if (se.listReturnAirlinesReturn.length == 0 || !se.gf.checkExistsItemInArray(se.listReturnAirlinesReturn, "VietJetAir", "filtername")) {
                            se.listReturnAirlinesReturn.push("VietJetAir");
                        }
                    }
                    else if (element.airlineCode.indexOf("JetStar") != -1) {
                        if (se.listReturnAirlinesReturn.length == 0 || !se.gf.checkExistsItemInArray(se.listReturnAirlinesReturn, "JetStar", "filtername")) {
                            se.listReturnAirlinesReturn.push("JetStar");
                        }
                    }
                    let time = moment__WEBPACK_IMPORTED_MODULE_8__(element.departTime).format("HH:mm:ss");
                    let timerange = time ? se.gf.convertStringToNumber(time) : -1;
                    if (timerange >= 0 && timerange <= 60000 && se.listReturnTimeRangeReturn.indexOf(1) == -1) {
                        se.listReturnTimeRangeReturn.push(1);
                    }
                    else if (timerange >= 60000 && timerange <= 120000 && se.listReturnTimeRangeReturn.indexOf(2) == -1) {
                        se.listReturnTimeRangeReturn.push(2);
                    }
                    else if (timerange >= 120000 && timerange <= 180000 && se.listReturnTimeRangeReturn.indexOf(3) == -1) {
                        se.listReturnTimeRangeReturn.push(3);
                    }
                    else if (timerange >= 180000 && timerange <= 240000 && se.listReturnTimeRangeReturn.indexOf(4) == -1) {
                        se.listReturnTimeRangeReturn.push(4);
                    }
                    let timeReturn = moment__WEBPACK_IMPORTED_MODULE_8__(element.landingTime).format("HH:mm:ss");
                    let timeRangeReturn = time ? se.gf.convertStringToNumber(timeReturn) : -1;
                    if (timeRangeReturn >= 0 && timeRangeReturn <= 60000 && se.listReturnLandingTimeRangeReturn.indexOf(1) == -1) {
                        se.listReturnLandingTimeRangeReturn.push(1);
                    }
                    else if (timeRangeReturn >= 60000 && timeRangeReturn <= 120000 && se.listReturnLandingTimeRangeReturn.indexOf(2) == -1) {
                        se.listReturnLandingTimeRangeReturn.push(2);
                    }
                    else if (timeRangeReturn >= 120000 && timeRangeReturn <= 180000 && se.listReturnLandingTimeRangeReturn.indexOf(3) == -1) {
                        se.listReturnLandingTimeRangeReturn.push(3);
                    }
                    else if (timeRangeReturn >= 180000 && timeRangeReturn <= 240000 && se.listReturnLandingTimeRangeReturn.indexOf(4) == -1) {
                        se.listReturnLandingTimeRangeReturn.push(4);
                    }
                    if (((element.ticketClass == se.ecoTicketClassName && element.airlineCode != 'VietJetAir') || (element.airlineCode == 'VietJetAir' && element.ticketType == "Eco" && se.VJSaverTicket.indexOf(element.details[0].ticketType) == -1)) && se.listReturnTicketClassReturn.indexOf(1) == -1) {
                        se.listReturnTicketClassReturn.push(1);
                    }
                    else if (element.ticketClass == se.bussinessTicketClassName && se.listReturnTicketClassReturn.indexOf(2) == -1) {
                        se.listReturnTicketClassReturn.push(2);
                    }
                    else if (((element.ticketClass == se.flexTicketClassName && element.airlineCode != 'VietJetAir') || (element.airlineCode != 'VietJetAir' && element.ticketClass == se.flexTicketClassName && se.VJSaverTicket.indexOf(element.details[0].ticketType) == -1)) && se.listReturnTicketClassReturn.indexOf(3) == -1) {
                        se.listReturnTicketClassReturn.push(3);
                    }
                    else if (element.ticketClass == se.promoTicketClassName || (element.airlineCode == 'VietJetAir' && element.ticketType == "Eco" && se.VJSaverTicket.indexOf(element.details[0].ticketType) != -1) && se.listReturnTicketClassReturn.indexOf(4) == -1) {
                        se.listReturnTicketClassReturn.push(4);
                    }
                    if (element.stops == 0 && se.listReturnStopsReturn.indexOf(1) == -1) {
                        se.listReturnStopsReturn.push(1);
                    }
                    else if (element.stops == 1 && se.listReturnStopsReturn.indexOf(2) == -1) {
                        se.listReturnStopsReturn.push(2);
                    }
                    else if (element.stops == 2 && se.listReturnStopsReturn.indexOf(3) == -1) {
                        se.listReturnStopsReturn.push(3);
                    }
                    else if (element.stops == 3 && se.listReturnStopsReturn.indexOf(4) == -1) {
                        se.listReturnStopsReturn.push(4);
                    }
                    if (element.ticketCondition && element.ticketCondition.isTicketRefund && se.listReturnFacility.indexOf(1) == -1) {
                        se.listReturnFacility.push(1);
                    }
                    else if (element.promotions && element.promotions.length > 0 && se.listReturnFacility.indexOf(2) == -1) {
                        se.listReturnFacility.push(2);
                    }
                    else if (element.ticketCondition && element.ticketCondition.luggageSigned && se.listReturnFacility.indexOf(3) == -1) {
                        se.listReturnFacility.push(3);
                    }
                    else if (element.ticketCondition && element.ticketCondition.priorityCI && se.listReturnFacility.indexOf(4) == -1) {
                        se.listReturnFacility.push(4);
                    }
                    element.priceAdult = priceFlightAdult;
                    element.priceChild = priceFlightChild;
                    element.priceInfant = priceFlightInfant;
                    element.priceDisplay = se.gf.convertNumberToString(element.totalPrice) + " đ";
                    if (!element.priceBeforeDiscount && element.totalDiscount) {
                        element.priceBeforeDiscount = element.totalPrice + element.totalDiscount;
                        element.priceBeforeDiscount = se.gf.convertNumberToString(element.priceBeforeDiscount);
                    }
                    let ar_time = element.departTime.toString().split('T')[1];
                    let Hour = ar_time.toString().split(':')[0];
                    let Minute = ar_time.toString().split(':')[1];
                    let kq = Hour * 60 + Number(Minute);
                    element.rangeTimeReturn = kq;
                    if (element.operatedBy && element.urlLogo.indexOf('content/img') == -1) {
                        element.urlLogo = "https://www.ivivu.com/ve-may-bay/content/img/brands/w100/" + element.urlLogo;
                    }
                });
                se._flightService.itemFlightCache.listReturnAirlinesReturn = se.listReturnAirlinesReturn;
                se._flightService.itemFlightCache.listReturnTimeRangeReturn = se.listReturnTimeRangeReturn;
                se._flightService.itemFlightCache.listReturnLandingTimeRangeReturn = se.listReturnLandingTimeRangeReturn;
                se._flightService.itemFlightCache.listReturnTicketClassReturn = se.listReturnTicketClassReturn;
                se._flightService.itemFlightCache.listReturnStopsReturn = se.listReturnStopsReturn;
                se._flightService.itemFlightCache.listReturnFacility = se.listReturnFacility;
                se.sortFlights('priceorder', se.listReturn);
            }
            if (se.listDepart && se.listDepart.length > 0) {
                se.listDepartNoFilter = [...se.listDepart];
            }
            if (se.listReturn && se.listReturn.length > 0) {
                se.listReturnNoFilter = [...se.listReturn];
            }
            if (se._flightService.objectFilter &&
                (se._flightService.objectFilter.minprice * 1 != 0
                    || se._flightService.objectFilter.maxprice * 1 != 15000000
                    || se._flightService.objectFilter.departTimeRange.length > 0
                    || se._flightService.objectFilter.returnTimeRange.length > 0
                    || se._flightService.objectFilter.airlineSelected.length > 0
                    || se._flightService.objectFilter.classSelected.length > 0
                    || se._flightService.objectFilter.stopSelected.length > 0
                    || se._flightService.objectFilter.facilitySelected.length > 0)) {
                se.filterItem().then(() => {
                    setTimeout(() => {
                        if ((se.listDepart && se.listDepart.length == 0) || (se.listReturn && se.listReturn.length == 0)) {
                        }
                        else {
                            if (se.listDepartFilter && se.listDepartFilter.length > 0) {
                                se.bestpricedepart = se.listDepartFilter.length >= 2 ? [...se.listDepartFilter].splice(0, 2) : [...se.listDepartFilter];
                                if (se.listDepartFilter.length > 2) {
                                    let listotherpricedepart = [...se.listDepartFilter].splice(2, se.listDepartFilter.length);
                                    se.sortFlightsByPrice(listotherpricedepart).then((data) => {
                                        se.bestpricedepart = [...se.bestpricedepart, data.splice(0, 1)[0]];
                                        let listotherpricedepartmustreorder = [...data];
                                        se.sortFlights("priceorder", listotherpricedepartmustreorder);
                                        se.otherpricedepart = [...listotherpricedepartmustreorder];
                                    });
                                }
                                else {
                                    se.otherpricedepart = [];
                                }
                            }
                            if (se.listReturnFilter && se.listReturnFilter.length > 0) {
                                se.bestpricereturn = se.listReturnFilter.length >= 2 ? [...se.listReturnFilter].splice(0, 2) : [...se.listReturnFilter];
                                if (se.listReturnFilter.length > 2) {
                                    let listotherpricereturn = [...se.listReturnFilter].splice(2, se.listReturnFilter.length);
                                    se.sortFlightsByPrice(listotherpricereturn).then((data) => {
                                        se.bestpricereturn = [...se.bestpricereturn, data.splice(0, 1)[0]];
                                        let listotherpricereturnmustreorder = [...data];
                                        se.sortFlights("priceorder", listotherpricereturnmustreorder);
                                        se.otherpricereturn = [...listotherpricereturnmustreorder];
                                    });
                                }
                                else {
                                    se.otherpricereturn = [];
                                }
                            }
                            setTimeout(() => {
                                if (se.listDepartFilter && se.listDepartFilter.length > 0) {
                                    se.loadpricedone = true;
                                }
                                se.zone.run(() => {
                                    se.progressbarloading = 1;
                                    se.progressbarbuffer = 1;
                                });
                            }, 100);
                        }
                    }, 50);
                    if (se.count >= 1) {
                        setTimeout(() => {
                            if (se.listDepartFilter && se.listDepartFilter.length > 0) {
                                se.bestpricedepart = se.listDepartFilter.length >= 2 ? [...se.listDepartFilter].splice(0, 2) : [...se.listDepartFilter];
                                if (se.listDepartFilter.length > 2) {
                                    let listotherpricedepart = [...se.listDepartFilter].splice(2, se.listDepartFilter.length);
                                    se.sortFlightsByPrice(listotherpricedepart).then((data) => {
                                        se.bestpricedepart = [...se.bestpricedepart, data.splice(0, 1)[0]];
                                        let listotherpricedepartmustreorder = [...data];
                                        se.sortFlights("priceorder", listotherpricedepartmustreorder);
                                        se.otherpricedepart = [...listotherpricedepartmustreorder];
                                    });
                                }
                                else {
                                    se.otherpricedepart = [];
                                }
                            }
                            if (se.listReturnFilter && se.listReturnFilter.length > 0) {
                                se.bestpricereturn = se.listReturnFilter.length >= 2 ? [...se.listReturnFilter].splice(0, 2) : [...se.listReturnFilter];
                                if (se.listReturnFilter.length > 2) {
                                    let listotherpricereturn = [...se.listReturnFilter].splice(2, se.listReturnFilter.length);
                                    se.sortFlightsByPrice(listotherpricereturn).then((data) => {
                                        se.bestpricereturn = [...se.bestpricereturn, listotherpricereturn.splice(0, 1)[0]];
                                        let listotherpricereturnmustreorder = [...listotherpricereturn];
                                        se.sortFlights("priceorder", listotherpricereturnmustreorder);
                                        se.otherpricereturn = [...listotherpricereturnmustreorder];
                                    });
                                }
                                else {
                                    se.otherpricereturn = [];
                                }
                            }
                            if (se.listDepartFilter && se.listDepartFilter.length > 0) {
                                se.loadpricedone = true;
                                se.zone.run(() => {
                                    se.progressbarloading = 1;
                                    se.progressbarbuffer = 1;
                                });
                            }
                        }, 150);
                    }
                });
            }
            else {
                setTimeout(() => {
                    if ((se.listDepart && se.listDepart.length == 0) || (se.listReturn && se.listReturn.length == 0)) {
                    }
                    else {
                        if (se.listDepart && se.listDepart.length > 0) {
                            se.bestpricedepart = se.listDepart.length >= 2 ? [...se.listDepart].splice(0, 2) : [...se.listDepart];
                            if (se.listDepart.length > 2) {
                                let listotherpricedepart = [...se.listDepart].splice(2, se.listDepart.length);
                                se.sortFlightsByPrice(listotherpricedepart).then((data) => {
                                    se.bestpricedepart = [...se.bestpricedepart, data.splice(0, 1)[0]];
                                    let listotherpricedepartmustreorder = [...listotherpricedepart];
                                    se.sortFlights("priceorder", listotherpricedepartmustreorder);
                                    se.otherpricedepart = [...listotherpricedepartmustreorder];
                                });
                            }
                            else {
                                se.otherpricedepart = [];
                            }
                        }
                        if (se.listReturn && se.listReturn.length > 0) {
                            se.bestpricereturn = se.listReturn.length >= 2 ? [...se.listReturn].splice(0, 2) : [...se.listReturn];
                            if (se.listReturn.length > 2) {
                                let listotherpricereturn = [...se.listReturn].splice(2, se.listReturn.length);
                                se.sortFlightsByPrice(listotherpricereturn).then((data) => {
                                    se.bestpricereturn = [...se.bestpricereturn, data.splice(0, 1)[0]];
                                    let listotherpricereturnmustreorder = [...data];
                                    se.sortFlights("priceorder", listotherpricereturnmustreorder);
                                    se.otherpricereturn = [...listotherpricereturnmustreorder];
                                });
                            }
                            else {
                                se.otherpricereturn = [];
                            }
                        }
                        if (se.listDepart && se.listDepart.length > 0) {
                            se.loadpricedone = true;
                        }
                        se.zone.run(() => {
                            se.progressbarloading = 1;
                            se.progressbarbuffer = 1;
                        });
                    }
                }, 50);
                if (se.count >= 1) {
                    setTimeout(() => {
                        if (se.listDepart && se.listDepart.length > 0) {
                            se.bestpricedepart = se.listDepart.length >= 2 ? [...se.listDepart].splice(0, 2) : [...se.listDepart];
                            let listotherpricedepart = [...se.listDepart].splice(2, se.listDepart.length);
                            se.sortFlightsByPrice(listotherpricedepart).then((data) => {
                                se.bestpricedepart = [...se.bestpricedepart, data.splice(0, 1)[0]];
                                let listotherpricedepartmustreorder = [...data];
                                se.sortFlights("priceorder", listotherpricedepartmustreorder);
                                se.otherpricedepart = [...listotherpricedepartmustreorder];
                            });
                        }
                        if (se.listReturn && se.listReturn.length > 0) {
                            se.bestpricereturn = [...se.listReturn].splice(0, 2);
                            let listotherpricereturn = se.listReturn.length >= 2 ? [...se.listReturn].splice(2, se.listReturn.length) : [...se.listReturn];
                            se.sortFlightsByPrice(listotherpricereturn).then((data) => {
                                se.bestpricereturn = [...se.bestpricereturn, data.splice(0, 1)[0]];
                                let listotherpricereturnmustreorder = [...data];
                                se.sortFlights("priceorder", listotherpricereturnmustreorder);
                                se.otherpricereturn = [...listotherpricereturnmustreorder];
                            });
                        }
                    }, 150);
                    if (se.listDepart && se.listDepart.length > 0) {
                        se.loadpricedone = true;
                    }
                }
            }
        });
    }
    sort(property, listsort) {
        var se = this;
        if (listsort && listsort.flights.length > 0) {
            se.zone.run(() => listsort.flights.sort(function (a, b) {
                let direction = -1;
                if (property == "priceorder") {
                    if (a[property] * 1 < b[property] * 1) {
                        return 1 * direction;
                    }
                    else if (a[property] * 1 > b[property] * 1) {
                        return -1 * direction;
                    }
                    else if (a[property] * 1 == b[property] * 1 && a["rangeTime"] && b["rangeTime"]) {
                        if (a["rangeTime"] >= 600 && a["rangeTime"] <= 720) {
                            return 1 * direction;
                        }
                        else if (b["rangeTime"] >= 600 && b["rangeTime"] <= 720) {
                            return -1 * direction;
                        }
                        else {
                            return 1 * direction;
                        }
                    }
                    else if (a[property] * 1 == b[property] * 1 && a["rangeTimeReturn"] && b["rangeTimeReturn"]) {
                        if (a["rangeTimeReturn"] >= 840 && a["rangeTimeReturn"] <= 1020) {
                            return 1 * direction;
                        }
                        else if (b["rangeTimeReturn"] >= 840 && b["rangeTimeReturn"] <= 1020) {
                            return -1 * direction;
                        }
                        else {
                            return 1 * direction;
                        }
                    }
                }
            }));
        }
    }
    ;
    sortFlights(property, listsort) {
        var se = this;
        if (listsort && listsort.length > 0) {
            se.zone.run(() => listsort.sort(function (a, b) {
                let direction = -1;
                if (property == "priceorder") {
                    if (a[property] * 1 < b[property] * 1) {
                        return 1 * direction;
                    }
                    else if (a[property] * 1 > b[property] * 1) {
                        return -1 * direction;
                    }
                }
            }));
        }
    }
    ;
    sortFlightsByPriceOrder(listsort) {
        var se = this;
        if (listsort && listsort.length > 0) {
            se.zone.run(() => listsort.sort(function (a, b) {
                let direction = -1;
                if (a['priceorder'] == b['priceorder']) {
                    if (a['sortpriceorder'] * 1 < b['sortpriceorder'] * 1) {
                        return 1 * direction;
                    }
                    else if (a['sortpriceorder'] * 1 > b['sortpriceorder'] * 1) {
                        return -1 * direction;
                    }
                }
            }));
        }
    }
    sortFlightsByPrice(listsort) {
        var se = this;
        return new Promise((resolve, reject) => {
            if (listsort && listsort.length > 0) {
                se.zone.run(() => listsort.sort(function (a, b) {
                    let direction = -1;
                    if (a['totalPrice'] == b['totalPrice']) {
                        if (a['sortpriceorder'] * 1 < b['sortpriceorder'] * 1) {
                            return 1 * direction;
                        }
                        else if (a['sortpriceorder'] * 1 > b['sortpriceorder'] * 1) {
                            return -1 * direction;
                        }
                    }
                    else {
                        return a['totalPrice'] * 1 - b['totalPrice'] * 1;
                    }
                }));
            }
            resolve(listsort);
        });
    }
    sortFlightsByTime(listsort, type) {
        var se = this;
        let columntime = type == 1 ? 'rangeTime' : 'rangeTimeReturn';
        if (listsort && listsort.length > 0) {
            se.zone.run(() => listsort.sort(function (a, b) {
                let direction = -1;
                if (a['priceorder'] == b['priceorder']) {
                    if (a[columntime] * 1 < b[columntime] * 1) {
                        return 1 * direction;
                    }
                    else if (a[columntime] * 1 > b[columntime] * 1) {
                        return -1 * direction;
                    }
                }
            }));
        }
    }
    checkvalueDepart(list) {
        if (list && list.length > 0) {
            var Hour;
            var Minute;
            var kq;
            var good = [];
            var medium = [];
            var other = [];
            for (let i = 0; i < list.length; i++) {
                let ar_time = list[i].departTime.toString().split('T')[1];
                Hour = ar_time.toString().split(':')[0];
                Minute = ar_time.toString().split(':')[1];
                kq = Hour * 60 + Number(Minute);
                list[i].rangeTime = kq;
                if (kq >= 360 && kq <= 840) {
                    list[i].sortpriceorder = 1;
                    good.push(list[i]);
                }
                else {
                    list[i].sortpriceorder = 3;
                    other.push(list[i]);
                }
            }
            if (good.length > 0) {
                this.sortFlightsByTime(good, 1);
                let otherlist = [...good.splice(3, good.length), ...other];
                this.sortFlights('priceorder', otherlist);
                this.listDepart = [...good.splice(0, 3), ...otherlist];
            }
            else {
                this.sortFlightsByTime(other, 1);
                this.listDepart = [...other];
            }
            if (this.listDepart.length == 0) {
                this.listDepart = other;
            }
        }
        return [...this.listDepart];
    }
    checkReturnList(list) {
        if (list && list.length > 0) {
            var Hour;
            var Minute;
            var kq;
            var good = [];
            var medium = [];
            var other = [];
            for (let i = 0; i < list.length; i++) {
                let ar_time = list[i].departTime.toString().split('T')[1];
                Hour = ar_time.toString().split(':')[0];
                Minute = ar_time.toString().split(':')[1];
                kq = Hour * 60 + Number(Minute);
                if (kq >= 600 && kq < 1200) {
                    list[i].sortpriceorder = 1;
                    good.push(list[i]);
                }
                else {
                    list[i].sortpriceorder = 3;
                    other.push(list[i]);
                }
            }
            if (good.length > 0) {
                this.sortFlightsByTime(good, 2);
                let otherlist = [...good.splice(3, good.length), ...other];
                this.sortFlights('priceorder', otherlist);
                this.listReturn = [...good.splice(0, 3), ...otherlist];
            }
            else {
                this.sortFlightsByTime(other, 2);
                this.listReturn = [...other];
            }
            if (this.listReturn.length == 0) {
                this.listReturn = other;
            }
        }
        return [...this.listReturn];
    }
    sortAirline(type) {
        this.sortairline = (this.buttonMinPriceSelected || this.buttonMinTimeDepartSelected || this.buttonMaxTimeDepartSelected || this.buttonMinTimeReturnSelected || this.buttonMaxTimeReturnSelected || this.buttoniVIVUSelected);
        this.sortByAirline(type);
    }
    sortByAirline(property) {
        var se = this;
        se.column = property;
        if (se.enableFlightFilter) {
            if (se._flightService.listflightDepartFilter && se._flightService.listflightDepartFilter.length > 0) {
                se.zone.run(() => se._flightService.listflightDepartFilter.sort(function (a, b) {
                    let direction = -1;
                    if (property == "priceup") {
                        let col = 'totalPrice';
                        if (a[col] * 1 < b[col] * 1) {
                            return 1 * direction;
                        }
                        else if (a[col] * 1 > b[col] * 1) {
                            return -1 * direction;
                        }
                    }
                    else {
                        let direction = (property == "sortByTimeDepartEarly" || property == "sortByTimeLandingEarly") ? -1 : 1;
                        let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                        if (a[columnname] < b[columnname]) {
                            return 1 * direction;
                        }
                        else if (a[columnname] > b[columnname]) {
                            return -1 * direction;
                        }
                    }
                }));
                if (se.listDepartFilter && se.listDepartFilter.length > 0) {
                    se.zone.run(() => se.listDepartFilter.sort(function (a, b) {
                        let direction = -1;
                        if (property == "priceup") {
                            let col = 'totalPrice';
                            if (a[col] * 1 < b[col] * 1) {
                                return 1 * direction;
                            }
                            else if (a[col] * 1 > b[col] * 1) {
                                return -1 * direction;
                            }
                        }
                        else {
                            let direction = (property == "sortByTimeDepartEarly" || property == "sortByTimeLandingEarly") ? -1 : 1;
                            let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                            if (a[columnname] < b[columnname]) {
                                return 1 * direction;
                            }
                            else if (a[columnname] > b[columnname]) {
                                return -1 * direction;
                            }
                        }
                    }));
                }
            }
            else {
                se.listDepartFilter = [];
            }
        }
        else {
            if (se.listDepart && se.listDepart.length > 0 && property) {
                se.zone.run(() => se.listDepart.sort(function (a, b) {
                    let direction = -1;
                    if (property == "priceup") {
                        let col = 'totalPrice';
                        if (a[col] * 1 < b[col] * 1) {
                            return 1 * direction;
                        }
                        else if (a[col] * 1 > b[col] * 1) {
                            return -1 * direction;
                        }
                    }
                    else {
                        let direction = (property == "sortByTimeDepartEarly" || property == "sortByTimeLandingEarly") ? -1 : 1;
                        let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                        if (a[columnname] < b[columnname]) {
                            return 1 * direction;
                        }
                        else if (a[columnname] > b[columnname]) {
                            return -1 * direction;
                        }
                    }
                }));
            }
        }
        if (se.enableFlightFilterReturn) {
            if (se._flightService.listflightReturnFilter && se._flightService.listflightReturnFilter.length > 0) {
                se.zone.run(() => se._flightService.listflightReturnFilter.sort(function (a, b) {
                    let direction = -1;
                    if (property == "priceup") {
                        let col = 'totalPrice';
                        if (a[col] * 1 < b[col] * 1) {
                            return 1 * direction;
                        }
                        else if (a[col] * 1 > b[col] * 1) {
                            return -1 * direction;
                        }
                    }
                    else {
                        let direction = (property == "sortByTimeDepartEarly" || property == "sortByTimeLandingEarly") ? -1 : 1;
                        let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                        if (a[columnname] < b[columnname]) {
                            return 1 * direction;
                        }
                        else if (a[columnname] > b[columnname]) {
                            return -1 * direction;
                        }
                    }
                }));
                if (se.listReturnFilter && se.listReturnFilter.length > 0) {
                    se.zone.run(() => se.listReturnFilter.sort(function (a, b) {
                        let direction = -1;
                        if (property == "priceup") {
                            let col = 'totalPrice';
                            if (a[col] * 1 < b[col] * 1) {
                                return 1 * direction;
                            }
                            else if (a[col] * 1 > b[col] * 1) {
                                return -1 * direction;
                            }
                        }
                        else {
                            let direction = (property == "sortByTimeDepartEarly" || property == "sortByTimeLandingEarly") ? -1 : 1;
                            let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                            if (a[columnname] < b[columnname]) {
                                return 1 * direction;
                            }
                            else if (a[columnname] > b[columnname]) {
                                return -1 * direction;
                            }
                        }
                    }));
                }
            }
            else {
                se.listReturnFilter = [];
            }
        }
        else {
            if (se.listReturn && se.listReturn.length > 0 && property) {
                se.zone.run(() => se.listReturn.sort(function (a, b) {
                    let direction = -1;
                    if (property == "priceup") {
                        let col = 'totalPrice';
                        if (a[col] * 1 < b[col] * 1) {
                            return 1 * direction;
                        }
                        else if (a[col] * 1 > b[col] * 1) {
                            return -1 * direction;
                        }
                    }
                    else {
                        let direction = (property == "sortByTimeDepartEarly" || property == "sortByTimeLandingEarly") ? -1 : 1;
                        let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                        if (a[columnname] < b[columnname]) {
                            return 1 * direction;
                        }
                        else if (a[columnname] > b[columnname]) {
                            return -1 * direction;
                        }
                    }
                }));
            }
        }
        setTimeout(() => {
            if (se.enableFlightFilter) {
                if (se._flightService.listflightDepartFilter && se._flightService.listflightDepartFilter.length > 0) {
                    se.listDepartFilter = [...se._flightService.listflightDepartFilter];
                }
            }
            else {
                if (se.listDepart && se.listDepart.length > 0) {
                    se.listDepart = [...se.listDepart];
                }
            }
            if (se.enableFlightFilterReturn) {
                if (se._flightService.listflightReturnFilter && se._flightService.listflightReturnFilter.length > 0) {
                    if (se._flightService.listflightReturnFilter && se._flightService.listflightReturnFilter.length > 0) {
                        se.listReturnFilter = [...se._flightService.listflightReturnFilter];
                    }
                }
            }
            else {
                if (se.listReturn && se.listReturn.length > 0) {
                    se.listReturn = [...se.listReturn];
                }
            }
        }, 200);
    }
    ;
    openSortFlight() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.loadpricedone) {
                this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
                return;
            }
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: 'action-sheets-flightsearchresult-sort',
                buttons: [
                    {
                        text: "iVIVU đề xuất",
                        cssClass: "btn-iVIVU cls-border-bottom",
                        handler: () => {
                            this.buttoniVIVUSelected = !this.buttoniVIVUSelected;
                            this.textsort = this.buttoniVIVUSelected ? "iVIVU đề xuất" : "";
                            this.buttoniVIVUSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-minprice > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-minprice > span").removeClass('selected');
                            this.buttonMinPriceSelected = false;
                            this.buttonMinTimeDepartSelected = false;
                            this.buttonMaxTimeDepartSelected = false;
                            this.buttonMinTimeReturnSelected = false;
                            this.buttonMaxTimeReturnSelected = false;
                            if (this.buttonMinPriceSelected) {
                                this.buttonMinPriceSelected = !this.buttonMinPriceSelected;
                                this.sortAirline("priceup");
                            }
                            else if (this.buttonMinTimeDepartSelected) {
                                this.buttonMinTimeDepartSelected = !this.buttonMinTimeDepartSelected;
                                this.sortAirline("sortByTimeDepartEarly");
                            }
                            else if (this.buttonMaxTimeDepartSelected) {
                                this.buttonMaxTimeDepartSelected = !this.buttonMaxTimeDepartSelected;
                                this.sortAirline("sortByTimeDepartLately");
                            }
                            else if (this.buttonMinTimeReturnSelected) {
                                this.buttonMinTimeReturnSelected = !this.buttonMinTimeReturnSelected;
                                this.sortAirline("sortByTimeLandingEarly");
                            }
                            else if (this.buttonMaxTimeDepartSelected) {
                                this.buttonMaxTimeDepartSelected = !this.buttonMaxTimeDepartSelected;
                                this.sortAirline("sortByTimeLandingLately");
                            }
                            this.sortairline = this.buttoniVIVUSelected;
                            if (this.enableFlightFilter || this.enableFlightFilterReturn) {
                                this.filterFlight();
                            }
                        }
                    },
                    {
                        text: "Giá thấp nhất",
                        cssClass: "btn-minprice cls-border-bottom",
                        handler: () => {
                            this.buttonMinPriceSelected = !this.buttonMinPriceSelected;
                            this.textsort = this.buttonMinPriceSelected ? "Giá thấp nhất" : "";
                            this.buttonMinPriceSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-minprice > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-minprice > span").removeClass('selected');
                            this.buttonMinTimeDepartSelected = false;
                            this.buttonMaxTimeDepartSelected = false;
                            this.buttonMinTimeReturnSelected = false;
                            this.buttonMaxTimeReturnSelected = false;
                            this.buttoniVIVUSelected = !this.buttonMinPriceSelected;
                            this.sortAirline("priceup");
                        }
                    },
                    {
                        text: "Cất cánh sớm nhất",
                        cssClass: "btn-mintimedepart cls-border-bottom",
                        handler: () => {
                            this.buttonMinTimeDepartSelected = !this.buttonMinTimeDepartSelected;
                            this.textsort = this.buttonMinTimeDepartSelected ? "Cất cánh sớm nhất" : "";
                            this.buttonMinTimeDepartSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-mintimedepart > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-mintimedepart > span").removeClass('selected');
                            this.buttonMinPriceSelected = false;
                            this.buttonMaxTimeDepartSelected = false;
                            this.buttonMinTimeReturnSelected = false;
                            this.buttonMaxTimeReturnSelected = false;
                            this.buttoniVIVUSelected = !this.buttonMinTimeDepartSelected;
                            this.sortAirline("sortByTimeDepartEarly");
                        }
                    },
                    {
                        text: "Cất cánh muộn nhất",
                        cssClass: "btn-maxtimedepart cls-border-bottom",
                        handler: () => {
                            this.buttonMaxTimeDepartSelected = !this.buttonMaxTimeDepartSelected;
                            this.textsort = this.buttonMaxTimeDepartSelected ? "Cất cánh muộn nhất" : "";
                            this.buttonMaxTimeDepartSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-JetStar > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-JetStar > span").removeClass('selected');
                            this.buttonMinPriceSelected = false;
                            this.buttonMinTimeDepartSelected = false;
                            this.buttonMinTimeReturnSelected = false;
                            this.buttonMaxTimeReturnSelected = false;
                            this.buttoniVIVUSelected = !this.buttonMaxTimeDepartSelected;
                            this.sortAirline("sortByTimeDepartLately");
                        }
                    },
                    {
                        text: "Hạ cánh sớm nhất",
                        cssClass: "btn-mintimereturn cls-border-bottom",
                        handler: () => {
                            this.buttonMinTimeReturnSelected = !this.buttonMinTimeReturnSelected;
                            this.textsort = this.buttonMinTimeReturnSelected ? "Hạ cánh sớm nhất" : "";
                            this.buttonMinTimeReturnSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-mintimereturn > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-mintimereturn > span").removeClass('selected');
                            this.buttonMinPriceSelected = false;
                            this.buttonMinTimeDepartSelected = false;
                            this.buttonMaxTimeDepartSelected = false;
                            this.buttonMaxTimeReturnSelected = false;
                            this.buttoniVIVUSelected = !this.buttonMinTimeReturnSelected;
                            this.sortAirline("sortByTimeLandingEarly");
                        }
                    },
                    {
                        text: "Hạ cánh muộn nhất",
                        cssClass: "btn-maxtimereturn cls-border-bottom",
                        handler: () => {
                            this.buttonMaxTimeReturnSelected = !this.buttonMaxTimeReturnSelected;
                            this.textsort = this.buttonMaxTimeReturnSelected ? "Hạ cánh muộn nhất" : "";
                            this.buttonMaxTimeReturnSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-maxtimereturn > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-maxtimereturn > span").removeClass('selected');
                            this.buttonMinPriceSelected = false;
                            this.buttonMinTimeDepartSelected = false;
                            this.buttonMaxTimeDepartSelected = false;
                            this.buttonMinTimeReturnSelected = false;
                            this.buttoniVIVUSelected = !this.buttonMaxTimeReturnSelected;
                            this.sortAirline("sortByTimeLandingLately");
                        }
                    },
                ],
            });
            this.buttonMinPriceSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-minprice > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-minprice > span").removeClass('selected');
            this.buttonMinTimeDepartSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-mintimedepart > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-mintimedepart > span").removeClass('selected');
            this.buttonMaxTimeDepartSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-maxtimedepart > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-maxtimedepart > span").removeClass('selected');
            this.buttonMinTimeReturnSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-mintimereturn > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-mintimereturn > span").removeClass('selected');
            this.buttonMaxTimeReturnSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-maxtimereturn > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-maxtimereturn > span").removeClass('selected');
            this.buttoniVIVUSelected ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-iVIVU > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-iVIVU > span").removeClass('selected');
            this.sortairline = this.buttoniVIVUSelected ? this.buttoniVIVUSelected : this.sortairline;
            actionSheet.present();
        });
    }
    filterAirline(arrAirline) {
        var se = this;
        if (arrAirline && arrAirline.length > 0) {
            let strAirline = "";
            arrAirline.forEach(element => {
                strAirline += (strAirline != "") ? ("," + element) : element;
            });
            se.listdepartflightdisplay = [];
            se.listreturnflightdisplay = [];
            se.zone.run(() => {
                se.departfi.forEach(f => {
                    if (strAirline.indexOf(f.airlineCode) != -1) {
                        se.listdepartflightdisplay.push(f);
                    }
                });
                se.returnfi.forEach(f => {
                    if (strAirline.indexOf(f.airlineCode) != -1) {
                        se.listreturnflightdisplay.push(f);
                    }
                });
                se.bestpricedepart = [...se.listdepartflightdisplay].splice(0, 3);
                se.otherpricedepart = [...se.listdepartflightdisplay].splice(3, se.departfi.length);
                se.bestpricereturn = [...se.listreturnflightdisplay].splice(0, 3);
                se.otherpricereturn = [...se.listreturnflightdisplay].splice(3, se.returnfi.length);
            });
        }
        else {
            se.listdepartflightdisplay = [];
            se.zone.run(() => {
                se.departfi.forEach(f => {
                    se.listdepartflightdisplay.push(f);
                });
                se.returnfi.forEach(f => {
                    se.listreturnflightdisplay.push(f);
                });
                se.bestpricedepart = [...se.listdepartflightdisplay].splice(0, 3);
                se.otherpricedepart = [...se.listdepartflightdisplay].splice(3, se.departfi.length);
                se.bestpricereturn = [...se.listreturnflightdisplay].splice(0, 3);
                se.otherpricereturn = [...se.listreturnflightdisplay].splice(3, se.returnfi.length);
            });
        }
        if (se.column) {
            se.sortByAirline(se.column);
        }
    }
    openFilterFlight() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.loadpricedone) {
                this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
                return;
            }
            this._flightService.itemFlightCache.step = this.step;
            this._flightService.listAllFlightDepart = this.listDepartNoFilter;
            if (this.listReturnNoFilter && this.listReturnNoFilter.length > 0) {
                this._flightService.listAllFlightReturn = this.listReturnNoFilter;
                this._flightService.listAllFlight = [...this.listDepartNoFilter, ...this.listReturnNoFilter];
            }
            else {
                this._flightService.listAllFlight = [...this.listDepartNoFilter];
            }
            const modal = yield this.modalCtrl.create({
                component: _flightsearchfilter_flightsearchfilter_page__WEBPACK_IMPORTED_MODULE_13__["FlightsearchfilterPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data) {
                    if (this._flightService.objectFilter) {
                        this.storage.get('flightfilterobject').then((data) => {
                            if (data) {
                                this.storage.remove('flightfilterobject').then(() => {
                                    this.storage.set('flightfilterobject', this._flightService.objectFilter);
                                });
                            }
                            else {
                                this.storage.set('flightfilterobject', this._flightService.objectFilter);
                            }
                        });
                        this.filterFlight();
                    }
                    else {
                        if (this._flightService.objSearch) {
                            let obj = this._flightService.objSearch;
                            this.resetValue();
                            this.loadFlightData(obj, true);
                            this.title = obj.title;
                            this.subtitle = obj.subtitle;
                        }
                    }
                }
            });
        });
    }
    excuteSort() {
        var se = this;
        let type = '';
        if (se.buttonMinPriceSelected) {
            type = "priceup";
        }
        else if (se.buttonMinTimeDepartSelected) {
            type = 'sortByTimeDepartEarly';
        }
        else if (se.buttonMaxTimeDepartSelected) {
            type = 'sortByTimeDepartLately';
        }
        else if (se.buttonMinTimeReturnSelected) {
            type = 'sortByTimeLandingEarly';
        }
        else if (se.buttonMaxTimeReturnSelected) {
            type = 'sortByTimeLandingLately';
        }
        se.sortByAirline(type);
    }
    filterFlight() {
        var se = this;
        var se = this;
        if (se.step == 2) {
            let listdepart = se._flightService.listflightDepartFilter;
            if (listdepart && listdepart.length > 0) {
                se.sortFlights('priceorder', listdepart);
                if (se.sortairline) {
                    se.checkSortFlight();
                }
                if (se.sortairline && !se.buttoniVIVUSelected) {
                    se.listDepartFilter = listdepart;
                    se.excuteSort();
                }
                if (listdepart && listdepart.length > 0) {
                    se.bestpricedepart = listdepart.length >= 2 ? [...listdepart].splice(0, 2) : [...listdepart];
                    if (listdepart.length > 2) {
                        let listotherpricedepart = [...listdepart].splice(2, listdepart.length);
                        se.sortFlightsByPrice(listotherpricedepart).then((data) => {
                            se.bestpricedepart = [...se.bestpricedepart, data.splice(0, 1)[0]];
                            let listotherpricedepartmustreorder = [...data];
                            se.sortFlights("priceorder", listotherpricedepartmustreorder);
                            se.otherpricedepart = [...listotherpricedepartmustreorder];
                        });
                    }
                    else {
                        se.otherpricedepart = [];
                    }
                }
            }
            else {
                if (se.sortairline && !se.buttoniVIVUSelected) {
                    se.listDepartFilter = [];
                }
                else {
                    se.bestpricedepart = [];
                    se.otherpricedepart = [];
                }
            }
        }
        else {
            let listreturn = se._flightService.listflightReturnFilter;
            if (listreturn && listreturn.length > 0) {
                se.sortFlights('price', listreturn);
                if (se.sortairline) {
                    se.checkSortFlight();
                }
                if (se.sortairline && !se.buttoniVIVUSelected) {
                    se.listReturnFilter = listreturn;
                    se.excuteSort();
                }
                if (listreturn && listreturn.length > 0) {
                    se.bestpricereturn = listreturn.length >= 2 ? [...listreturn].splice(0, 2) : [...listreturn];
                    if (listreturn.length > 2) {
                        let listotherpricereturn = [...listreturn].splice(2, listreturn.length);
                        se.sortFlightsByPrice(listotherpricereturn).then((data) => {
                            se.bestpricereturn = [...se.bestpricereturn, data.splice(0, 1)[0]];
                            let listotherpricereturnmustreorder = [...data];
                            se.sortFlights("priceorder", listotherpricereturnmustreorder);
                            se.otherpricereturn = [...listotherpricereturnmustreorder];
                        });
                    }
                    else {
                        se.otherpricereturn = [];
                    }
                }
            }
            else {
                if (se.sortairline && !se.buttoniVIVUSelected) {
                    se.listReturnFilter = [];
                }
                else {
                    se.bestpricereturn = [];
                    se.otherpricereturn = [];
                }
            }
        }
    }
    checkSortFlight() {
        if (this.buttonMinPriceSelected) {
            this.sortAirline("priceup");
        }
        else if (this.buttonMinTimeDepartSelected) {
            this.sortAirline("sortByTimeDepartEarly");
        }
        else if (this.buttonMaxTimeDepartSelected) {
            this.sortAirline("sortByTimeDepartLately");
        }
        else if (this.buttonMinTimeReturnSelected) {
            this.sortAirline("sortByTimeLandingEarly");
        }
        else if (this.buttonMaxTimeDepartSelected) {
            this.sortAirline("sortByTimeLandingLately");
        }
    }
    filterByListFlight(list, type) {
        var se = this;
        var listFilter = [];
        if (type == 'depart') {
            let filterPrice = list;
            if (se._flightService.objectFilter && se._flightService.objectFilter.minprice && se._flightService.objectFilter.maxprice) {
                filterPrice = list.filter((filterpriceitem) => {
                    return filterpriceitem.totalPrice * 1 >= se._flightService.objectFilter.minprice * 1 && filterpriceitem.totalPrice * 1 <= se._flightService.objectFilter.maxprice * 1;
                });
            }
            listFilter = [...filterPrice];
            if (se._flightService.objectFilter.departTimeRange && se._flightService.objectFilter.departTimeRange.length > 0) {
                let filterDepart = listFilter.filter((filterdepartitem) => {
                    let time = moment__WEBPACK_IMPORTED_MODULE_8__(filterdepartitem.departTime).format("HH:mm:ss");
                    let timerange = time ? se.gf.convertStringToNumber(time) : -1;
                    let strFilter;
                    if (se._flightService.objectFilter.departTimeRange.indexOf(1) != -1) {
                        strFilter = timerange >= 0 && timerange <= 60000;
                    }
                    if (se._flightService.objectFilter.departTimeRange.indexOf(2) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 60000 && timerange <= 120000) : timerange >= 60000 && timerange <= 120000;
                    }
                    if (se._flightService.objectFilter.departTimeRange.indexOf(3) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 120000 && timerange <= 180000) : timerange >= 120000 && timerange <= 180000;
                    }
                    if (se._flightService.objectFilter.departTimeRange.indexOf(4) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 180000 && timerange <= 240000) : timerange >= 180000 && timerange <= 240000;
                    }
                    return strFilter;
                });
                listFilter = [...filterDepart];
            }
            if (se._flightService.objectFilter.returnTimeRange && se._flightService.objectFilter.returnTimeRange.length > 0) {
                let filterReturn = listFilter.filter((filterreturnitem) => {
                    let time = moment__WEBPACK_IMPORTED_MODULE_8__(filterreturnitem.landingTime).format("HH:mm:ss");
                    let timerange = time ? se.gf.convertStringToNumber(time) : -1;
                    let strFilter;
                    if (se._flightService.objectFilter.returnTimeRange.indexOf(1) != -1) {
                        strFilter = timerange >= 0 && timerange <= 60000;
                    }
                    if (se._flightService.objectFilter.returnTimeRange.indexOf(2) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 60000 && timerange <= 120000) : timerange >= 60000 && timerange <= 120000;
                    }
                    if (se._flightService.objectFilter.returnTimeRange.indexOf(3) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 120000 && timerange <= 180000) : timerange >= 120000 && timerange <= 180000;
                    }
                    if (se._flightService.objectFilter.returnTimeRange.indexOf(4) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 180000 && timerange <= 240000) : timerange >= 180000 && timerange <= 240000;
                    }
                    return strFilter;
                });
                listFilter = [...filterReturn];
            }
            if (se._flightService.objectFilter.airlineSelected && se._flightService.objectFilter.airlineSelected.length > 0) {
                let filterAirline = listFilter.filter((filterairlineitem) => {
                    let str;
                    if (type == 'depart') {
                        if (se._flightService.objectFilter.airlineSelected.indexOf(1) != -1 && se.listDepartAirlines.indexOf("VietnamAirlines") != -1) {
                            str = filterairlineitem.airlineCode == "VietnamAirlines";
                        }
                        if (se._flightService.objectFilter.airlineSelected.indexOf(2) != -1 && se.listDepartAirlines.indexOf("BambooAirways") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "BambooAirways") : filterairlineitem.airlineCode == "BambooAirways";
                        }
                        if (se._flightService.objectFilter.airlineSelected.indexOf(3) != -1 && se.listDepartAirlines.indexOf("JetStar") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "JetStar") : filterairlineitem.airlineCode == "JetStar";
                        }
                        if (se._flightService.objectFilter.airlineSelected.indexOf(4) != -1 && se.listDepartAirlines.indexOf("VietJetAir") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "VietJetAir") : filterairlineitem.airlineCode == "VietJetAir";
                        }
                        if (se._flightService.objectFilter.airlineSelected.indexOf(5) != -1 && se.listDepartAirlines.indexOf("AirAsia") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "AirAsia") : filterairlineitem.airlineCode == "AirAsia";
                        }
                    }
                    else {
                        if (se._flightService.objectFilter.airlineSelected.indexOf(1) != -1 && se.listReturnAirlines.indexOf("VietnamAirlines") != -1) {
                            str = filterairlineitem.airlineCode == "VietnamAirlines";
                        }
                        if (se._flightService.objectFilter.airlineSelected.indexOf(2) != -1 && se.listReturnAirlines.indexOf("BambooAirways") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "BambooAirways") : filterairlineitem.airlineCode == "BambooAirways";
                        }
                        if (se._flightService.objectFilter.airlineSelected.indexOf(3) != -1 && se.listReturnAirlines.indexOf("JetStar") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "JetStar") : filterairlineitem.airlineCode == "JetStar";
                        }
                        if (se._flightService.objectFilter.airlineSelected.indexOf(4) != -1 && se.listReturnAirlines.indexOf("VietJetAir") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "VietJetAir") : filterairlineitem.airlineCode == "VietJetAir";
                        }
                        if (se._flightService.objectFilter.airlineSelected.indexOf(5) != -1 && se.listReturnAirlines.indexOf("AirAsia") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "AirAsia") : filterairlineitem.airlineCode == "AirAsia";
                        }
                    }
                    return str;
                });
                listFilter = [...filterAirline];
            }
            if (se._flightService.objectFilter.classSelected && se._flightService.objectFilter.classSelected.length > 0) {
                let filterclass = listFilter.filter((filterclassitem) => {
                    let str;
                    if (se._flightService.objectFilter.classSelected.indexOf(1) != -1) {
                        str = ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Phổ thông") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1));
                    }
                    if (se._flightService.objectFilter.classSelected.indexOf(2) != -1) {
                        str = str ? (str || filterclassitem.ticketClass == "Thương gia") : filterclassitem.ticketClass == "Thương gia";
                    }
                    if (se._flightService.objectFilter.classSelected.indexOf(3) != -1) {
                        str = str ? (str || ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Linh hoạt") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Deluxe" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1))) : ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Linh hoạt") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Deluxe" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1));
                    }
                    if (se._flightService.objectFilter.classSelected.indexOf(4) != -1) {
                        str = str ? (str || ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Tiết kiệm") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) != -1))) : ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Tiết kiệm") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) != -1));
                    }
                    return str;
                });
                listFilter = [...filterclass];
            }
            if (se._flightService.objectFilter.stopSelected && se._flightService.objectFilter.stopSelected.length > 0) {
                let filterclass = listFilter.filter((filterstopitem) => {
                    let stop = filterstopitem.stops * 1 + 1;
                    return se._flightService.objectFilter.stopSelected.indexOf(stop) != -1 ? true : false;
                });
                listFilter = [...filterclass];
            }
            if (se._flightService.objectFilter.facilitySelected && se._flightService.objectFilter.facilitySelected.length > 0) {
                let filterfac = listFilter.filter((filterfacility) => {
                    let str;
                    if (filterfacility.ticketCondition) {
                        if (se._flightService.objectFilter.facilitySelected.indexOf(1) != -1) {
                            str = filterfacility.ticketCondition.isTicketRefund;
                        }
                        if (se._flightService.objectFilter.facilitySelected.indexOf(2) != -1) {
                            str = str ? (str || (filterfacility.promotions && filterfacility.promotions.length > 0)) : (filterfacility.promotions && filterfacility.promotions.length > 0);
                        }
                        if (se._flightService.objectFilter.facilitySelected.indexOf(3) != -1) {
                            str = str ? (str || (filterfacility.ticketCondition.baggageHanded || filterfacility.ticketCondition.luggageSigned)) : (filterfacility.ticketCondition.baggageHanded || filterfacility.ticketCondition.luggageSigned);
                        }
                        if (se._flightService.objectFilter.facilitySelected.indexOf(4) != -1) {
                            str = str ? (str || (filterfacility.ticketCondition && filterfacility.ticketCondition.priorityCI)) : (filterfacility.ticketCondition && filterfacility.ticketCondition.priorityCI);
                        }
                    }
                    return str;
                });
                listFilter = [...filterfac];
            }
            list = listFilter;
        }
        else {
            let filterPrice = list;
            if (se._flightService.objectFilterReturn && se._flightService.objectFilterReturn.minprice && se._flightService.objectFilterReturn.maxprice) {
                filterPrice = list.filter((filterpriceitem) => {
                    return filterpriceitem.totalPrice * 1 >= se._flightService.objectFilterReturn.minprice * 1 && filterpriceitem.totalPrice * 1 <= se._flightService.objectFilterReturn.maxprice * 1;
                });
            }
            listFilter = [...filterPrice];
            if (se._flightService.objectFilterReturn.departTimeRangeReturn && se._flightService.objectFilterReturn.departTimeRangeReturn.length > 0) {
                let filterDepart = listFilter.filter((filterdepartitem) => {
                    let time = moment__WEBPACK_IMPORTED_MODULE_8__(filterdepartitem.departTime).format("HH:mm:ss");
                    let timerange = time ? se.gf.convertStringToNumber(time) : -1;
                    let strFilter;
                    if (se._flightService.objectFilterReturn.departTimeRangeReturn.indexOf(1) != -1) {
                        strFilter = timerange >= 0 && timerange <= 60000;
                    }
                    if (se._flightService.objectFilterReturn.departTimeRangeReturn.indexOf(2) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 60000 && timerange <= 120000) : timerange >= 60000 && timerange <= 120000;
                    }
                    if (se._flightService.objectFilterReturn.departTimeRangeReturn.indexOf(3) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 120000 && timerange <= 180000) : timerange >= 120000 && timerange <= 180000;
                    }
                    if (se._flightService.objectFilterReturn.departTimeRangeReturn.indexOf(4) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 180000 && timerange <= 240000) : timerange >= 180000 && timerange <= 240000;
                    }
                    return strFilter;
                });
                listFilter = [...filterDepart];
            }
            if (se._flightService.objectFilterReturn.returnTimeRangeReturn && se._flightService.objectFilterReturn.returnTimeRangeReturn.length > 0) {
                let filterReturn = listFilter.filter((filterreturnitem) => {
                    let time = moment__WEBPACK_IMPORTED_MODULE_8__(filterreturnitem.landingTime).format("HH:mm:ss");
                    let timerange = time ? se.gf.convertStringToNumber(time) : -1;
                    let strFilter;
                    if (se._flightService.objectFilterReturn.returnTimeRangeReturn.indexOf(1) != -1) {
                        strFilter = timerange >= 0 && timerange <= 60000;
                    }
                    if (se._flightService.objectFilterReturn.returnTimeRangeReturn.indexOf(2) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 60000 && timerange <= 120000) : timerange >= 60000 && timerange <= 120000;
                    }
                    if (se._flightService.objectFilterReturn.returnTimeRangeReturn.indexOf(3) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 120000 && timerange <= 180000) : timerange >= 120000 && timerange <= 180000;
                    }
                    if (se._flightService.objectFilterReturn.returnTimeRangeReturn.indexOf(4) != -1) {
                        strFilter = strFilter ? (strFilter || timerange >= 180000 && timerange <= 240000) : timerange >= 180000 && timerange <= 240000;
                    }
                    return strFilter;
                });
                listFilter = [...filterReturn];
            }
            if (se._flightService.objectFilterReturn.airlineSelectedReturn && se._flightService.objectFilterReturn.airlineSelectedReturn.length > 0) {
                let filterAirline = listFilter.filter((filterairlineitem) => {
                    let str;
                    if (type == 'depart') {
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(1) != -1 && se.listDepartAirlines.indexOf("VietnamAirlines") != -1) {
                            str = filterairlineitem.airlineCode == "VietnamAirlines";
                        }
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(2) != -1 && se.listDepartAirlines.indexOf("BambooAirways") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "BambooAirways") : filterairlineitem.airlineCode == "BambooAirways";
                        }
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(3) != -1 && se.listDepartAirlines.indexOf("JetStar") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "JetStar") : filterairlineitem.airlineCode == "JetStar";
                        }
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(4) != -1 && se.listDepartAirlines.indexOf("VietJetAir") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "VietJetAir") : filterairlineitem.airlineCode == "VietJetAir";
                        }
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(5) != -1 && se.listDepartAirlines.indexOf("AirAsia") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "AirAsia") : filterairlineitem.airlineCode == "AirAsia";
                        }
                    }
                    else {
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(1) != -1 && se.listReturnAirlinesReturn.indexOf("VietnamAirlines") != -1) {
                            str = filterairlineitem.airlineCode == "VietnamAirlines";
                        }
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(2) != -1 && se.listReturnAirlinesReturn.indexOf("BambooAirways") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "BambooAirways") : filterairlineitem.airlineCode == "BambooAirways";
                        }
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(3) != -1 && se.listReturnAirlinesReturn.indexOf("JetStar") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "JetStar") : filterairlineitem.airlineCode == "JetStar";
                        }
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(4) != -1 && se.listReturnAirlinesReturn.indexOf("VietJetAir") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "VietJetAir") : filterairlineitem.airlineCode == "VietJetAir";
                        }
                        if (se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(5) != -1 && se.listReturnAirlinesReturn.indexOf("AirAsia") != -1) {
                            str = str ? (str || filterairlineitem.airlineCode == "AirAsia") : filterairlineitem.airlineCode == "AirAsia";
                        }
                    }
                    return str;
                });
                listFilter = [...filterAirline];
            }
            if (se._flightService.objectFilterReturn.classSelectedReturn && se._flightService.objectFilterReturn.classSelectedReturn.length > 0) {
                let filterclass = listFilter.filter((filterclassitem) => {
                    let str;
                    if (se._flightService.objectFilterReturn.classSelectedReturn.indexOf(1) != -1) {
                        str = ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Phổ thông") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1));
                    }
                    if (se._flightService.objectFilterReturn.classSelectedReturn.indexOf(2) != -1) {
                        str = str ? (str || filterclassitem.ticketClass == "Thương gia") : filterclassitem.ticketClass == "Thương gia";
                    }
                    if (se._flightService.objectFilterReturn.classSelectedReturn.indexOf(3) != -1) {
                        str = str ? (str || ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Linh hoạt") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Deluxe" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1))) : ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Linh hoạt") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Deluxe" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1));
                    }
                    if (se._flightService.objectFilterReturn.classSelectedReturn.indexOf(4) != -1) {
                        str = str ? (str || ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Tiết kiệm") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) != -1))) : ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Tiết kiệm") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) != -1));
                    }
                    return str;
                });
                listFilter = [...filterclass];
            }
            if (se._flightService.objectFilterReturn.stopSelectedReturn && se._flightService.objectFilterReturn.stopSelectedReturn.length > 0) {
                let filterclass = listFilter.filter((filterstopitem) => {
                    let stop = filterstopitem.stops * 1 + 1;
                    return se._flightService.objectFilterReturn.stopSelectedReturn.indexOf(stop) != -1 ? true : false;
                });
                listFilter = [...filterclass];
            }
            if (se._flightService.objectFilterReturn.facilitySelectedReturn && se._flightService.objectFilterReturn.facilitySelectedReturn.length > 0) {
                let filterfac = listFilter.filter((filterfacility) => {
                    let str;
                    if (filterfacility.ticketCondition) {
                        if (se._flightService.objectFilterReturn.facilitySelectedReturn.indexOf(1) != -1) {
                            str = filterfacility.ticketCondition.isTicketRefund;
                        }
                        if (se._flightService.objectFilterReturn.facilitySelectedReturn.indexOf(2) != -1) {
                            str = str ? (str || (filterfacility.promotions && filterfacility.promotions.length > 0)) : (filterfacility.promotions && filterfacility.promotions.length > 0);
                        }
                        if (se._flightService.objectFilterReturn.facilitySelectedReturn.indexOf(3) != -1) {
                            str = str ? (str || (filterfacility.ticketCondition.baggageHanded || filterfacility.ticketCondition.luggageSigned)) : (filterfacility.ticketCondition.baggageHanded || filterfacility.ticketCondition.luggageSigned);
                        }
                        if (se._flightService.objectFilterReturn.facilitySelectedReturn.indexOf(4) != -1) {
                            str = str ? (str || (filterfacility.ticketCondition && filterfacility.ticketCondition.priorityCI)) : (filterfacility.ticketCondition && filterfacility.ticketCondition.priorityCI);
                        }
                    }
                    return str;
                });
                listFilter = [...filterfac];
            }
            list = listFilter;
        }
        return list;
    }
    filterItem() {
        var se = this;
        return new Promise((resolve, reject) => {
            if ((se.listDepart && se.listDepart.length > 0) || (se.listReturn && se.listReturn.length > 0)) {
                const totalItemBeforeFilter = (se.listDepart ? se.listDepart.length : 0) + (se.listReturn ? se.listReturn.length : 0);
                const totalItemDepartBeforeFilter = (se.listDepart ? se.listDepart.length : 0);
                const totalItemReturnBeforeFilter = (se.listReturn ? se.listReturn.length : 0);
                se.zone.run(() => {
                    if (se._flightService.objectFilter &&
                        (se._flightService.objectFilter.minprice * 1 != 0
                            || se._flightService.objectFilter.maxprice * 1 != 15000000
                            || se._flightService.objectFilter.departTimeRange.length > 0
                            || se._flightService.objectFilter.returnTimeRange.length > 0
                            || se._flightService.objectFilter.airlineSelected.length > 0
                            || se._flightService.objectFilter.classSelected.length > 0
                            || se._flightService.objectFilter.stopSelected.length > 0
                            || se._flightService.objectFilter.facilitySelected.length > 0)) {
                        if (se.listDepart && se.listDepart.length > 0) {
                            se.listDepartFilter = se.filterByListFlight([...se.listDepart], 'depart');
                        }
                    }
                    else {
                        se.listDepartFilter = se.listDepart;
                    }
                    if (se._flightService.objectFilterReturn &&
                        (se._flightService.objectFilterReturn.minprice * 1 != 0
                            || se._flightService.objectFilterReturn.maxprice * 1 != 15000000
                            || se._flightService.objectFilterReturn.departTimeRange.length > 0
                            || se._flightService.objectFilterReturn.returnTimeRange.length > 0
                            || se._flightService.objectFilterReturn.airlineSelected.length > 0
                            || se._flightService.objectFilterReturn.classSelected.length > 0
                            || se._flightService.objectFilterReturn.stopSelected.length > 0
                            || se._flightService.objectFilterReturn.facilitySelected.length > 0)) {
                        if (se.listReturn && se.listReturn.length > 0) {
                            se.listReturnFilter = se.filterByListFlight([...se.listReturn], 'return');
                        }
                    }
                    else {
                        se.listReturnFilter = se.listReturn;
                    }
                    let totalItemAfterFilter = (se.listDepartFilter ? se.listDepartFilter.length : 0) + (se.listReturnFilter ? se.listReturnFilter.length : 0);
                    let totalItemDepartAfterFilter = (se.listDepartFilter ? se.listDepartFilter.length : 0);
                    let totalItemReturnAfterFilter = (se.listReturnFilter ? se.listReturnFilter.length : 0);
                    if (se.step == 2) {
                        se.enableFlightFilter = (totalItemDepartAfterFilter != totalItemDepartBeforeFilter) ? 1 : 0;
                    }
                    else {
                        se.enableFlightFilterReturn = (totalItemReturnAfterFilter != totalItemReturnBeforeFilter) ? 1 : 0;
                    }
                });
            }
            resolve(true);
        });
    }
    showFlightDetail(item, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se._flightService.itemFlightCache.step = this.step;
            if (!se.loadpricedone) {
                se.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
                return;
            }
            se._flightService.itemFlightCache.itemFlight = item;
            const modal = yield se.modalCtrl.create({
                component: _flightdetail_flightdetail_page__WEBPACK_IMPORTED_MODULE_14__["FlightdetailPage"],
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data) {
                    se.select(type, item);
                }
            });
        });
    }
    showChangeInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (!se.loadpricedone) {
                se.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
                return;
            }
            setTimeout(() => {
                se._flightService.itemAllFlightCount.emit((this.listDepart ? this.listDepart.length : 0) + (this.listReturn ? this.listReturn.length : 0));
            }, 350);
            const modal = yield se.modalCtrl.create({
                component: _flightchangeinfo_flightchangeinfo_page__WEBPACK_IMPORTED_MODULE_15__["FlightchangeinfoPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: "modal-flight-change-info",
                enterAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_17__["CustomAnimations"].iosCustomEnterAnimation,
                leaveAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_17__["CustomAnimations"].iosCustomLeaveAnimation,
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data) {
                    let obj = se._flightService.objSearch;
                    se.resetValue();
                    se.title = obj.title;
                    se.subtitle = obj.subtitle;
                    se.titlereturn = obj.titleReturn;
                    se.subtitlereturn = obj.subtitleReturn;
                    se.storage.get('flightfilterobject').then((data) => {
                        if (data) {
                            se._flightService.objectFilter = data;
                        }
                    });
                    se.loadFlightData(obj, true);
                }
            });
        });
    }
    resetValue() {
        var se = this;
        se.zone.run(() => {
            se.loadpricedone = false;
            se.listDepart = [];
            se.listReturn = [];
            se.departfi = [];
            se.returnfi = [];
            se.title = "";
            se.subtitle = "";
            se.bestpricedepart = [];
            se.otherpricedepart = [];
            se.sortairline = false;
            se.step = 2;
            se.bestpricereturn = [];
            se.otherpricereturn = [];
            se.buttonVASelected = false;
            se.airlinename = false;
            se.arrFilterAirline = [];
            se.buttonVJSelected = false;
            se.buttonJSSelected = false;
            se.buttonBASelected = false;
            se.listdepartflightdisplay = [];
            se.listreturnflightdisplay = [];
            se.buttonMinPriceSelected = false;
            se.buttonMinTimeSelected = false;
            se.buttonMaxTimeSelected = false;
            se.buttonMinTimeDepartSelected = false;
            se.buttonMaxTimeDepartSelected = false;
            se.buttonMinTimeReturnSelected = false;
            se.buttonMaxTimeReturnSelected = false;
            se.titlereturn = "";
            se.subtitlereturn = "";
            se.count = 0;
            se.stoprequest = false;
            se.listDepartConditions = [];
            se.listReturnConditions = [];
            se.enableFlightFilter = false;
            se.canselect = true;
            se.listDepartAirlines = [];
            se.listReturnAirlines = [];
            se.listDepartNoFilter = [];
            se.listReturnNoFilter = [];
            se.listDepartFilter = [];
            se.listReturnFilter = [];
            se.listDepartTimeRange = [];
            se.listDepartLandingTimeRange = [];
            se.listReturnTimeRange = [];
            se.listReturnLandingTimeRange = [];
            se.listDepartTicketClass = [];
            se.ecoTicketClassName = "Phổ thông";
            se.bussinessTicketClassName = "Thương gia";
            se.firstTicketClassName = "Hạng nhất";
            se.listReturnTicketClass = [];
            se.listDepartStops = [];
            se.listReturnStops = [];
            se.listDepartFacility = [];
            se.listReturnFacility = [];
            se.departFlight = null;
            se._flightService.itemFlightCache.itemFlight = null;
            se._flightService.itemFlightCache.departFlight = null;
            se._flightService.itemFlightCache.returnFlight = null;
            se._flightService.itemFlightCache.step = 2;
            if (se._flightService && se._flightService.objSearch) {
                let obj = se._flightService.objSearch;
                se.title = obj.title;
                se.subtitle = obj.subtitle;
                se.titlereturn = obj.titleReturn;
                se.subtitlereturn = obj.subtitleReturn;
            }
            se.buttoniVIVUSelected = true;
            se.sortairline = true;
        });
    }
    showQuickBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_16__["FlightquickbackPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                enterAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_17__["CustomAnimations"].iosCustomEnterAnimation,
                leaveAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_17__["CustomAnimations"].iosCustomLeaveAnimation,
                cssClass: "modal-flight-quick-back",
            });
            modal.present();
        });
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if ((this._flightService.itemFlightCache.roundTrip && (jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass("endSelection") || jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass("startSelection"))) || (!this._flightService.itemFlightCache.roundTrip && jquery__WEBPACK_IMPORTED_MODULE_4__(obj).hasClass('on-selected'))) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    let objsearch = this._flightService.objSearch;
                    if (objsearch.roundTrip) {
                        this.roundtriptext = "khứ hồi/khách";
                        if (jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass('endSelection')) {
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                            }
                            else {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected > p')[0].textContent;
                            }
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                            }
                            else {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn > p')[0].innerText;
                            }
                            objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                            objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_4__(obj).closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        }
                        else {
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                            }
                            else {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__(obj)[0].children[0].textContent;
                            }
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                            }
                            else {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn > p')[0].innerText;
                            }
                            objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__(obj).closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                            objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.endSelection').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        }
                    }
                    else {
                        this.roundtriptext = "một chiều/khách";
                        if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected > p')[0].textContent;
                        }
                        tday = fday;
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        objTextMonthEndDate = objTextMonthStartDate;
                    }
                    if (objTextMonthEndDate &&
                        objTextMonthEndDate.length > 0 &&
                        objTextMonthStartDate &&
                        objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.trim().split(",")[0];
                        yearstartdate = objTextMonthStartDate.trim().split(",")[1];
                        monthenddate = objTextMonthEndDate.trim().split(",")[0];
                        yearenddate = objTextMonthEndDate.trim().split(",")[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(fromdate, "days");
                        this.countdaydisplay = diffday + 1;
                        var se = this;
                        let allowseach = (diffday >= 0 ? true : false);
                        if (fromdate && todate && allowseach) {
                            setTimeout(() => {
                                se.modalCtrl.dismiss({ from: fromdate, to: todate });
                            }, 300);
                        }
                    }
                }
            }
        });
    }
    showChangeDate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.gf.hideStatusBar();
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            let fromdate = new Date(this._flightService.itemFlightCache.checkInDate);
            let todate = new Date(this._flightService.itemFlightCache.checkOutDate);
            this.checkInDisplayMonth = this.getDayOfWeek(fromdate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format("MM");
            this.checkOutDisplayMonth = this.getDayOfWeek(todate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(todate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(todate).format("MM");
            let key = "listHotDealCalendar_" + this._flightService.objSearch.departCode + "_" + this._flightService.objSearch.returnCode;
            this.storage.get(key).then((data) => {
                if (!data) {
                    this.loadCalendarPrice();
                }
            });
            let countday = moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(fromdate), 'days');
            this.countdaydisplay = this._flightService.itemFlightCache.roundTrip ? (countday + 1) : 1;
            let _daysConfig = [];
            for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
                _daysConfig.push({
                    date: this.valueGlobal.listlunar[j].date,
                    subTitle: moment__WEBPACK_IMPORTED_MODULE_8__(this.valueGlobal.listlunar[j].date).format("DD/MM") + ': ' + this.valueGlobal.listlunar[j].name,
                    cssClass: 'lunarcalendar'
                });
            }
            var options;
            if (this._flightService.itemFlightCache.roundTrip) {
                options = {
                    pickMode: "range",
                    title: "Chọn ngày",
                    monthFormat: " M, YYYY",
                    weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    closeLabel: "",
                    doneLabel: "",
                    step: 0,
                    defaultScrollTo: fromdate,
                    defaultDateRange: { from: fromdate, to: todate },
                    daysConfig: _daysConfig
                };
            }
            else {
                options = {
                    pickMode: "single",
                    title: "Chọn ngày",
                    monthFormat: " M, YYYY",
                    weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    closeLabel: "",
                    doneLabel: "",
                    step: 0,
                    defaultScrollTo: fromdate,
                    defaultDate: fromdate,
                    daysConfig: _daysConfig
                };
            }
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModal"],
                cssClass: 'flight-calendar-custom',
                animated: true,
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                this.allowclickcalendar = true;
                let key = "listHotDealCalendar_" + this._flightService.itemFlightCache.departCode + "_" + this._flightService.itemFlightCache.returnCode;
                this.storage.get(key).then((data) => {
                    if (data) {
                        if (this._flightService.itemFlightCache.roundTrip) {
                            this.renderCalenderPrice(1, data.departs, data.arrivals);
                        }
                        else {
                            this.renderCalenderPrice(2, data.departs, null);
                        }
                    }
                });
                this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=end]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_close.svg' ></div>");
                    if (this.countdaydisplay > 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'>${this.countdaydisplay} ngày <img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'><img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
                    }
                    if (this._flightService.itemFlightCache.roundTrip) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${this.checkInDisplayMonth} </div></div> <div class='div-width-100'><div class='text-date-normal p-l-8'>Ngày về</div> <div class='text-flight-datetime p-l-8 border-left' *ngIf='flighttype=='twoway''>${this.checkOutDisplayMonth} </div></div></div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${this.checkInDisplayMonth} </div></div> </div>`);
                    }
                    if (this.showlowestprice) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' [(ngModel)]="showlowestprice" checked></ion-toggle></div> </div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' [(ngModel)]="showlowestprice" ></ion-toggle></div> </div>`);
                    }
                    var container = document.querySelector(".button-show-lowest-price");
                    container.addEventListener("touchend", (e) => {
                        this.showLowestPrice(e);
                    }, false);
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title').length > 0) {
                        for (let index = 0; index < jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title').length; index++) {
                            const elementMonthTitle = jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title')[index];
                            elementMonthTitle.textContent = 'Tháng' + elementMonthTitle.textContent;
                        }
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .header-img-close').click((e => this.closecalendar()));
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".days-btn").click(e => this.clickedElement(e));
                    if (this.showlowestprice) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                    }
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__('.div-calendar-cincout')) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.div-calendar-cincout').click(e => this.showCalendarCinCout());
                    }
                    let divmonth = jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box');
                    if (divmonth && divmonth.length > 0) {
                        for (let index = 0; index < divmonth.length; index++) {
                            const em = divmonth[index];
                            let divsmall = jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id + ' small');
                            if (divsmall && divsmall.length > 0) {
                                jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id).append("<div class='div-month-text-small'></div>");
                                for (let i = 0; i < divsmall.length; i++) {
                                    const es = divsmall[i];
                                    jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id + ' .div-month-text-small').append("<div class='sm-" + em.id + '-' + i + "'></div>");
                                    jquery__WEBPACK_IMPORTED_MODULE_4__('.sm-' + em.id + '-' + i).append(es);
                                }
                            }
                        }
                    }
                }, 10);
            });
            var se = this;
            const event = yield this.myCalendar.onDidDismiss();
            const date = event.data;
            if (event.data) {
                const from = date.from;
                const to = date.to;
                let objday = se.getDayOfWeek(from);
                let objdayreturn = se.getDayOfWeek(to);
                let obj = se._flightService.objSearch;
                se.zone.run(() => {
                    se._flightService.itemFlightCache.checkInDate = date.from;
                    se._flightService.itemFlightCache.checkOutDate = date.to;
                    se._flightService.itemFlightCache.checkInDisplayMonth = moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("MM");
                    se._flightService.itemFlightCache.checkOutDisplayMonth = moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("MM");
                    se._flightService.itemFlightCache.departTimeDisplay = objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("DD.MM");
                    se._flightService.itemFlightCache.returnTimeDisplay = objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("DD.MM");
                    se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("DD-MM-YYYY");
                    se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("DD-MM-YYYY");
                    se._flightService.itemFlightCache.departPaymentTitleDisplay = objday.daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("DD-MM") + " · " + se._flightService.itemFlightCache.departCode + " - " + se._flightService.itemFlightCache.returnCode + " · ";
                    se._flightService.itemFlightCache.returnPaymentTitleDisplay = objdayreturn.daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("DD-MM") + " · " + se._flightService.itemFlightCache.returnCode + " - " + se._flightService.itemFlightCache.departCode + " · ";
                    se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(date.from).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("MM");
                    se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(date.to).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("MM");
                    se._flightService.itemFlightCache.checkInDisplaysort = se.getDayOfWeek(date.from).daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("MM");
                    se._flightService.itemFlightCache.checkOutDisplaysort = se.getDayOfWeek(date.to).daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("MM");
                    se.checkInDisplayMonth = se.getDayOfWeek(date.from).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("MM");
                    se.checkOutDisplayMonth = se.getDayOfWeek(date.to).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("MM");
                    se.storage.get("itemFlightCache").then((data) => {
                        if (data) {
                            se.storage.remove("itemFlightCache").then(() => {
                                se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                            });
                        }
                        else {
                            se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                        }
                    });
                    obj.subtitle = objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.from).format("DD-M-YYYY") + " · " + (se._flightService.itemFlightCache.adult + se._flightService.itemFlightCache.child + (se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0)) + " khách";
                    obj.subtitlereturn = objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(date.to).format("DD-M-YYYY") + " · " + (se._flightService.itemFlightCache.adult + se._flightService.itemFlightCache.child + (se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0)) + " khách";
                    obj.departDate = date.from;
                    obj.returnDate = date.to;
                });
                se.resetValue();
                se.loadFlightData(obj, true);
            }
        });
    }
    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }
    getDayOfWeek(date) {
        let d = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('dddd');
        let dayname = '', daynameshort = '';
        switch (d) {
            case "Monday":
                dayname = "Thứ 2";
                daynameshort = "T2";
                break;
            case "Tuesday":
                dayname = "Thứ 3";
                daynameshort = "T3";
                break;
            case "Wednesday":
                dayname = "Thứ 4";
                daynameshort = "T4";
                break;
            case "Thursday":
                dayname = "Thứ 5";
                daynameshort = "T5";
                break;
            case "Friday":
                dayname = "Thứ 6";
                daynameshort = "T6";
                break;
            case "Saturday":
                dayname = "Thứ 7";
                daynameshort = "T7";
                break;
            default:
                dayname = "Chủ nhật";
                daynameshort = "CN";
                break;
        }
        return { dayname: dayname, daynameshort: daynameshort };
    }
    doRefresh(event) {
        if (!this.loadpricedone) {
            this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
            return;
        }
        let obj = this._flightService.objSearch;
        this.zone.run(() => {
            this.resetValue();
        });
        this.loadFlightData(obj, true);
    }
    closecalendar() {
        this.modalCtrl.dismiss();
    }
    showLowestPrice(event) {
        setTimeout(() => {
            let obj = this._flightService.objSearch;
            this.showlowestprice = event.target.checked;
            if (obj.departCode && obj.arrivalCode) {
                if (this.showlowestprice) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                }
            }
            else {
                this.gf.showToastWarning('Vui lòng chọn điểm khởi hành và điểm đến trước khi xem lịch giá rẻ.');
            }
        }, 100);
    }
    loadCalendarPrice() {
        let obj = this._flightService.objSearch;
        if (obj.departCode && obj.arrivalCode) {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetHotDealCalendar?fromplace=" + obj.departCode + "&toplace=" + obj.arrivalCode + "&getincache=false";
            this.gf.RequestApi("GET", url, {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            }, {}, "homeflight", "showCalendarPrice").then((data) => {
                if (data) {
                    let key = "listHotDealCalendar_" + obj.departCode + "_" + obj.arrivalCode;
                    this.storage.set(key, data);
                    if (data && data.departs && data.departs.length > 0) {
                        if (obj.roundTrip) {
                            this.renderCalenderPrice(1, data.departs, data.arrivals);
                        }
                        else {
                            this.renderCalenderPrice(2, data.departs, null);
                        }
                    }
                }
            });
        }
    }
    renderCalenderPrice(type, departs, arrivals) {
        var se = this;
        let obj = se._flightService.objSearch;
        try {
            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box').length > 0) {
                let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(obj.returnDate).diff(obj.departDate, "days");
                for (let index = 0; index < jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box').length; index++) {
                    const elementMonth = jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box')[index];
                    let objtextmonth = elementMonth.children[0].textContent.replace('Tháng ', '');
                    let monthstartdate = objtextmonth.trim().split(",")[0];
                    let yearstartdate = objtextmonth.trim().split(",")[1];
                    let textmonth = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(yearstartdate, monthstartdate - 1, 1)).format('YYYY-MM');
                    if (objtextmonth && objtextmonth.length > 0) {
                        let listdepartinmonth = departs.filter((item) => { return moment__WEBPACK_IMPORTED_MODULE_8__(item.departTime).format('YYYY-MM') == textmonth; });
                        let listreturninmonth;
                        if (obj.roundTrip) {
                            listreturninmonth = arrivals.filter((item) => { return moment__WEBPACK_IMPORTED_MODULE_8__(item.departTime).format('YYYY-MM') == textmonth; });
                        }
                        let listdayinmonth = elementMonth.children[1].children[0].children[0].children;
                        if (listdayinmonth && listdayinmonth.length > 0) {
                            for (let j = 0; j < listdayinmonth.length; j++) {
                                const elementday = listdayinmonth[j];
                                if (elementday && elementday.textContent) {
                                    let fday = elementday.textContent;
                                    let fromdate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(yearstartdate, monthstartdate - 1, fday)).format('YYYY-MM-DD');
                                    let todate = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).add(diffday, 'days').format('YYYY-MM-DD');
                                    if (fromdate) {
                                        if (type == 1) {
                                            let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                                            let minreturnvalue = Math.min(...listreturninmonth.map(o => o.price));
                                            let minvalue = mindepartvalue + minreturnvalue;
                                            let pricefromdate = 0;
                                            let itemfromdate = listdepartinmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == fromdate; });
                                            if (itemfromdate && itemfromdate.length > 0) {
                                                pricefromdate = itemfromdate[0].price;
                                            }
                                            let pricetodate = 0;
                                            let itemtodate = listreturninmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == todate; });
                                            if (itemtodate && itemtodate.length > 0) {
                                                pricetodate = itemtodate[0].price;
                                            }
                                            if (pricefromdate && pricetodate) {
                                                let totalpriceitem = pricefromdate + pricetodate;
                                                let totalprice = (totalpriceitem) / 1000 >= 1000 ? se.gf.convertNumberToString(Math.round(totalpriceitem / 1000)) : Math.round((totalpriceitem / 1000));
                                                totalprice = totalprice + "K";
                                                if (minvalue == totalpriceitem) {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled min-price'>${totalprice}</span>`);
                                                }
                                                else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled'>${totalprice}</span>`);
                                                }
                                            }
                                        }
                                        else {
                                            let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                                            let minvalue = mindepartvalue;
                                            let pricefromdate = 0;
                                            let itemfromdate = listdepartinmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == fromdate; });
                                            if (itemfromdate && itemfromdate.length > 0) {
                                                pricefromdate = itemfromdate[0].price;
                                            }
                                            let totalprice = pricefromdate / 1000 >= 1000 ? se.gf.convertNumberToString(Math.round(pricefromdate / 1000)) : Math.round(pricefromdate / 1000);
                                            totalprice = totalprice + "K";
                                            if (pricefromdate) {
                                                if (minvalue == pricefromdate) {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled min-price'>${totalprice}</span>`);
                                                }
                                                else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled'>${totalprice}</span>`);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.showlowestprice) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                }
            }
        }
        catch (error) {
            console.log('Lỗi jquery khi show lịch giá rẻ: ' + error);
        }
    }
    showCalendarCinCout() {
        var se = this;
        if (jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').hasClass('calendar-visible')) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').removeClass('calendar-visible').addClass('calendar-disabled');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').removeClass('calendar-disabled').addClass('calendar-visible');
        }
    }
    showPromo(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: item.promotions[0].promotionContent.length >= 380 ? 'action-sheets-flight-promo height-194' : 'action-sheets-flight-promo',
                header: item.promotions[0].promotionNote,
                animated: false,
                mode: 'md',
                buttons: [
                    {
                        text: item.promotions[0].promotionContent
                    }
                ],
            });
            actionSheet.present();
            jquery__WEBPACK_IMPORTED_MODULE_4__('.action-sheets-flight-promo').append("<div class='div-close-promo'><img src='./assets/ic_close_w.svg'></div>");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-close-promo').click(() => {
                actionSheet.dismiss();
                jquery__WEBPACK_IMPORTED_MODULE_4__('.div-close-promo')[0].style.display = 'none';
            });
        });
    }
    openFlightSelectTimePriority() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (!se.loadpricedone) {
                se.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
                return;
            }
            setTimeout(() => {
                se._flightService.itemAllFlightCount.emit(this.listDepart.length + this.listReturn.length);
            }, 350);
            const modal = yield se.modalCtrl.create({
                component: _flightselecttimepriority_flightselecttimepriority_page__WEBPACK_IMPORTED_MODULE_19__["FlightselecttimepriorityPage"],
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data) {
                    let obj = this._flightService.objSearch;
                    if (obj) {
                        obj.timeDepartPriority = data.data.timeDepartPriority;
                        obj.timeReturnPriority = data.data.timeReturnPriority;
                        this.zone.run(() => {
                            this.resetValue();
                        });
                        this.loadFlightData(obj, true);
                    }
                }
            });
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollArea'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], FlightsearchresultPage.prototype, "content", void 0);
FlightsearchresultPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightsearchresult',
        template: __webpack_require__(/*! ./flightsearchresult.page.html */ "./src/app/flightsearchresult/flightsearchresult.page.html"),
        styles: [__webpack_require__(/*! ./flightsearchresult.page.scss */ "./src/app/flightsearchresult/flightsearchresult.page.scss")]
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
        _providers_flightService__WEBPACK_IMPORTED_MODULE_11__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_18__["Facebook"]])
], FlightsearchresultPage);



/***/ })

}]);
//# sourceMappingURL=flightsearchresult-flightsearchresult-module.js.map