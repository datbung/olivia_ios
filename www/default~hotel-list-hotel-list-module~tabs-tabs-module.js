(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~hotel-list-hotel-list-module~tabs-tabs-module"],{

/***/ "./src/app/hotel-list/hotel-list.html":
/*!********************************************!*\
  !*** ./src/app/hotel-list/hotel-list.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\" style=\"position: absolute;\" (click)=\"goback()\">\n      <img style=\"height: 48px; padding: 8px;margin-left: -2px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n    </ion-buttons>\n\n    <ion-title class=\"text-title\" (click)=\"changeinfo()\">\n        {{name}}\n        <div><label class=\"text-hr\">{{cindisplayhr}} - {{coutdisplayhr}} | {{guest}} khách</label></div>\n      </ion-title>\n\n    <ion-buttons slot=\"primary\" (click)=\"showFilterAndSort()\">\n        <button ion-button icon-only class=\"btn-header\">\n            <img style=\"margin-left: 8px;\" src=\"./assets/imgs/ic_filter_b.svg\" >\n            <ion-badge *ngIf=\"searchhotel.hasSortHotelList\" class=\"cls-badge-filter\">{{searchhotel.hasSortHotelList}}</ion-badge>\n          </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list *ngIf=\"ishide==true\">\n        <div class=\"card-background-detailpage\">\n          <div *ngFor=\"let msg of json1; let i = index\">\n            <div *ngIf=\"!ischeckAL\" class=\"row-item-hotellist\">\n              <!-- left image region-->\n              <div class=\"col-img-hotellist\">\n                <!-- <ion-thumbnail> -->\n                  <img  class=\"img-radius\" [src]=\"msg.Avatar\" style=\"position:relative\" (click)=\"itemSelected(msg)\">\n                <!-- </ion-thumbnail> -->\n                  \n                  <div *ngIf=\"msg.Liked\" class=\"img-heart\" (click)=\"unlikeItem(msg.HotelId)\">\n                    <img src=\"./assets/imgs/heart-red.svg\" class=\"cls-img-content\" >\n                  </div>\n                  <div *ngIf=\"!msg.Liked\" class=\"img-heart\" (click)=\"likeItem(msg.HotelId)\">\n                    <img src=\"./assets/imgs/heart-empty.svg\" class=\"cls-img-content\" >\n                  </div>\n                  <div *ngIf=\"msg.PromotionDescriptionSubstring\" class=\"transbox_0\">\n                      {{msg.PromotionDescriptionSubstring}}\n                    </div>\n              </div>\n              <!-- right content region -->\n              <div class=\"col-description-hotellist\">\n                  <div  class=\"fix-height-123\">\n                      <div (click)=\"itemSelected(msg)\" >\n                      <h2 class=\"text-name\" >{{msg.Name}}\n                      </h2>\n                      <p>\n                          <img *ngIf=\"msg.Rating!=0\" src={{msg.Rating}}>\n                      </p>\n                      <p *ngIf=\"msg.SubLocation\" class=\"text\">\n                        <img style=\"height:10px\" src=\"./assets/ic_hoteldetail/group.svg\">\n                        <label style=\"color: #4f4f4f;margin-left: 5px\"> {{msg.SubLocation}}\n                        </label>\n                      </p>\n                      <div *ngIf=\"msg.AvgPoint>0\">\n                        <ion-row *ngIf=\"msg.AvgPoint>9 && msg.AvgPoint<=10\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Tuyệt vời\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>8 && msg.AvgPoint<=9\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Rất tốt\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>7 && msg.AvgPoint<=8\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Khá tốt\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>5 && msg.AvgPoint<=7\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Tạm được\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint<=5\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Không tốt\n                          </p>\n                        </ion-row>\n                    </div>\n                  </div>\n                    <div class=\"m-top-10\">\n                      <div *ngFor=\"let itemstyle of msg.StyleTag; let idx = index\" [ngClass]=\"(msg.StyleTag.length >=2 && ((msg.StyleTag[0].ID == 1 && msg.StyleTag[1].ID == 5) || (msg.StyleTag[0].ID == 5 && msg.StyleTag[1].ID == 1))) ? 'm-width-49' : ''\">\n                          <div *ngIf=\"idx < 2\" [ngClass]=\"idx == 1 ? 'sp-item-style m-right-0' : 'sp-item-style'\">{{itemstyle.Name}}</div>\n                      </div>\n                      \n                    </div>\n                    \n                    <div class=\"last-row\">\n                        <div *ngIf=\"loginuser || msg.IsShowPrice == 1\" >\n                          <div *ngIf=\"msg.DealType\"   [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                              <div style=\"font-weight: bold\">\n                                <div *ngIf=\"msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                </div>\n\n                                <div *ngIf=\"!msg.DealPrice && !msg.MinPriceOTAStr\" class=\"text-combo\" text-left class=\"p-top-dealtype\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                </div>\n                                <div *ngIf=\"!msg.DealPrice && msg.MinPriceOTAStr\" text-left class=\"p-top-minprice\">\n                                  <label >{{msg.RoomNameSubString}}</label>\n                                </div>\n                               \n                                <div  *ngIf=\"msg.DealPrice\" text-right class=\"p-top-10  price\">\n                                  <label *ngIf=\"msg.DealPrice!=0 && msg.HasCheckPrice\" class=\"label-dealprice\">{{ msg.DealPrice }} đ</label>\n                                </div>\n                                <div  *ngIf=\"!msg.DealPrice && msg.HasCheckPrice && msg.MinPriceOTAStr\" text-right class=\"p-top-10  price\">\n                                  <label *ngIf=\"!msg.DealPrice && msg.MinPriceOTAStr && msg.HasCheckPrice\" class=\"label-minprice\">{{ msg.MinPriceOTAStr }} đ</label>\n                                </div>\n                                <div  *ngIf=\"!msg.DealPrice && msg.HasCheckPrice && !msg.MinPriceOTAStr\" text-right class=\"have-not-dealprice\">\n                                  <label *ngIf=\"msg.HasCheckPrice && !msg.DealPrice\" class=\"label-dealprice\">Giá ưu đãi</label>\n                                </div>\n                              </div>\n                            </div>\n                            <div *ngIf=\"!msg.DealType\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                              <div text-right *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr && msg.MinPriceTAStr && msg.MinPriceOTAStr!=msg.MinPriceTAStr && msg.MinPriceTAStr!=0 && msg.MinPriceOTAStr<msg.MinPriceTAStr && loginuser\" class=\"label-minpriceTA\">{{msg.MinPriceTAStr}} đ</div>\n                              <div >\n                                <div col-7 class=\"text-nameroom\" text-left class=\"p-top-minprice\">\n                                  <label >{{msg.RoomNameSubString}}</label>\n                                </div>\n                                <div col-5 text-right class=\"p-top-10 price\">\n                                  <div>\n                                      <label *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr\" class=\"label-minprice\">{{msg.MinPriceOTAStr}} đ</label>\n                                      <label *ngIf=\"msg.HasCheckPrice && !msg.MinPriceOTAStr\" class=\"label-minprice\">Hết phòng</label>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                            <div *ngIf=\"!loginuser && (!msg.IsShowPrice || msg.IsShowPrice == 2)\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\" (click)=\"goToLogin()\">\n                                <div *ngIf=\"msg.DealType\">\n                                    <div>\n                                        <div>\n                                            <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                        </div>\n                                      </div>\n                                </div>\n                              <div *ngIf=\"!msg.DealType\">\n                                <div>\n                                    <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      \n                    </div>\n              </div>\n              <p  class=\"h-line\"></p>\n            </div>\n\n            <div *ngIf=\"ischeckAL && msg.HasCheckPrice && msg.MinPriceOTAStr && loadpricedone\" class=\"row-item-hotellist\">\n              <!-- left image region-->\n              <div class=\"col-img-hotellist\">\n                <!-- <ion-thumbnail> -->\n                  <img  class=\"img-radius\" src={{msg.Avatar}} style=\"position:relative\" (click)=\"itemSelected(msg)\">\n                <!-- </ion-thumbnail> -->\n                  \n                  <div *ngIf=\"msg.Liked\" class=\"img-heart\" (click)=\"unlikeItem(msg.HotelId)\">\n                    <img src=\"./assets/imgs/heart-red.svg\" class=\"cls-img-content\" >\n                  </div>\n                  <div *ngIf=\"!msg.Liked\" class=\"img-heart\" (click)=\"likeItem(msg.HotelId)\">\n                    <img src=\"./assets/imgs/heart-empty.svg\" class=\"cls-img-content\" >\n                  </div>\n                  <div *ngIf=\"msg.PromotionDescriptionSubstring\" class=\"transbox_0\">\n                      {{msg.PromotionDescriptionSubstring}}\n                    </div>\n              </div>\n              <!-- right content region -->\n              <div class=\"col-description-hotellist\">\n                  <div  class=\"fix-height-123\">\n                      <div (click)=\"itemSelected(msg)\" >\n                      <h2 class=\"text-name\" >{{msg.Name}}\n                      </h2>\n                      <p>\n                          <img *ngIf=\"msg.Rating!=0\" src={{msg.Rating}}>\n                      </p>\n                      <p *ngIf=\"msg.SubLocation\" class=\"text\">\n                        <img style=\"height:10px\" src=\"./assets/ic_hoteldetail/group.svg\">\n                        <label style=\"color: #4f4f4f;margin-left: 5px\"> {{msg.SubLocation}}\n                        </label>\n                      </p>\n                      <div *ngIf=\"msg.AvgPoint>0\">\n                        <ion-row *ngIf=\"msg.AvgPoint>9 && msg.AvgPoint<=10\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Tuyệt vời\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>8 && msg.AvgPoint<=9\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Rất tốt\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>7 && msg.AvgPoint<=8\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Khá tốt\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>5 && msg.AvgPoint<=7\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Tạm được\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint<=5\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Không tốt\n                          </p>\n                        </ion-row>\n                    </div>\n                  </div>\n                    <div class=\"m-top-10\">\n                      <div *ngFor=\"let itemstyle of msg.StyleTag; let idx = index\" [ngClass]=\"(msg.StyleTag.length >=2 && ((msg.StyleTag[0].ID == 1 && msg.StyleTag[1].ID == 5) || (msg.StyleTag[0].ID == 5 && msg.StyleTag[1].ID == 1))) ? 'm-width-49' : ''\">\n                          <div *ngIf=\"idx < 2\" [ngClass]=\"idx == 1 ? 'sp-item-style m-right-0' : 'sp-item-style'\">{{itemstyle.Name}}</div>\n                      </div>\n                      \n                    </div>\n                    \n                    <div class=\"last-row\">\n                        <div *ngIf=\"loginuser || msg.IsShowPrice == 1\" >\n                          <div *ngIf=\"msg.DealType\"   [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                              <div style=\"font-weight: bold\">\n                                <div *ngIf=\"msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                </div>\n\n                                <div *ngIf=\"!msg.DealPrice && !msg.MinPriceOTAStr\" class=\"text-combo\" text-left class=\"p-top-dealtype\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                </div>\n                                <div *ngIf=\"!msg.DealPrice && msg.MinPriceOTAStr\" text-left class=\"p-top-minprice\">\n                                  <label >{{msg.RoomNameSubString}}</label>\n                                </div>\n                               \n                                <div  *ngIf=\"msg.DealPrice\" text-right class=\"p-top-10  price\">\n                                  <label *ngIf=\"msg.DealPrice!=0 && msg.HasCheckPrice\" class=\"label-dealprice\">{{ msg.DealPrice }} đ</label>\n                                </div>\n                                <div  *ngIf=\"!msg.DealPrice && msg.HasCheckPrice && msg.MinPriceOTAStr\" text-right class=\"p-top-10  price\">\n                                  <label *ngIf=\"!msg.DealPrice && msg.MinPriceOTAStr && msg.HasCheckPrice\" class=\"label-minprice\">{{ msg.MinPriceOTAStr }} đ</label>\n                                </div>\n                                <div  *ngIf=\"!msg.DealPrice && msg.HasCheckPrice && !msg.MinPriceOTAStr\" text-right class=\"have-not-dealprice\">\n                                  <label *ngIf=\"msg.HasCheckPrice && !msg.DealPrice\" class=\"label-dealprice\">Giá ưu đãi</label>\n                                </div>\n                              </div>\n                            </div>\n                            <div *ngIf=\"!msg.DealType\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                              <div text-right *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr && msg.MinPriceTAStr && msg.MinPriceOTAStr!=msg.MinPriceTAStr && msg.MinPriceTAStr!=0 && msg.MinPriceOTAStr<msg.MinPriceTAStr && loginuser\" class=\"label-minpriceTA\">{{msg.MinPriceTAStr}} đ</div>\n                              <div >\n                                <div col-7 class=\"text-nameroom\" text-left class=\"p-top-minprice\">\n                                  <label >{{msg.RoomNameSubString}}</label>\n                                </div>\n                                <div col-5 text-right class=\"p-top-10 price\">\n                                  <div>\n                                      <label *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr\" class=\"label-minprice\">{{msg.MinPriceOTAStr}} đ</label>\n                                      <label *ngIf=\"msg.HasCheckPrice && !msg.MinPriceOTAStr\" class=\"label-minprice\">Hết phòng</label>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                            <div *ngIf=\"!loginuser && (!msg.IsShowPrice || msg.IsShowPrice == 2)\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\" (click)=\"goToLogin()\">\n                                <div *ngIf=\"msg.DealType\">\n                                    <div>\n                                        <div>\n                                            <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                        </div>\n                                      </div>\n                                </div>\n                              <div *ngIf=\"!msg.DealType\">\n                                <div>\n                                    <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      \n                    </div>\n              </div>\n              <p  class=\"h-line\"></p>\n            </div>\n            <div *ngIf=\"ischeckAL && !loadpricedone\" style=\"text-align: center\">\n              <ion-item-group  *ngFor=\"let item of itemsSkeleton\">\n                  <ion-row class=\"row-item-hotellist-sk\">\n                      <ion-col size=\"4\" class=\"col-img-hotellist-sk\" >\n                          <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px\"></ion-skeleton-text>\n                      </ion-col>\n                      <ion-col size=\"8\" class=\"col-description-hotellist-sk\" style=\"line-height: 18px;padding-top: 0\">\n                          <div style=\"height: 100%\">\n                            <h2 class=\"text-name-sk\" >\n                                <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                            </h2>\n                            <p class=\"p-sk\">\n                                <ion-skeleton-text animated style=\"width: 50%;margin: 0\"></ion-skeleton-text>\n                            </p>\n                            <div class=\"last-row-sk\">\n                                <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                            </div>\n                          </div>\n                        </ion-col>\n                  </ion-row>\n                  <p class=\"h-line-sk\"></p>\n              </ion-item-group>\n            </div>\n          \n          </div>\n        </div>\n  </ion-list>\n\n  \n  <div *ngIf=\"ishide==false\" style=\"text-align: center\">\n    <ion-item-group  *ngFor=\"let item of itemsSkeleton\">\n        <ion-row class=\"row-item-hotellist-sk\">\n            <ion-col size=\"4\" class=\"col-img-hotellist-sk\" >\n                <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"8\" class=\"col-description-hotellist-sk\" style=\"line-height: 18px;padding-top: 0\">\n                <div style=\"height: 100%\">\n                  <h2 class=\"text-name-sk\" >\n                      <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                  </h2>\n                  <p class=\"p-sk\">\n                      <ion-skeleton-text animated style=\"width: 50%;margin: 0\"></ion-skeleton-text>\n                  </p>\n                  <div class=\"last-row-sk\">\n                      <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                  </div>\n                </div>\n              </ion-col>\n        </ion-row>\n        <p class=\"h-line-sk\"></p>\n    </ion-item-group>\n  </div>\n  <div *ngIf=\"nodata\" style=\"text-align: center;margin-top: 10px\">\n    <img src=\"./assets/imgs/empty.svg\">\n    <div style=\"padding:0 16px; text-align: center\">\n      <p class=\"text-empty\" style=\"text-align: center\">Không tìm thấy kết quả tìm kiếm. Vui lòng chọn lại!</p>\n    </div>\n    <div>\n      <ion-row *ngIf=\"hasfilter==true && hassortfilter==false\">\n        <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-left\" (click)=\"filterAgain()\">Lọc lại</button></ion-col>\n        <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-right\" (click)=\"clearFilter()\">Xóa lọc</button></ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"hasfilter==false && hassortfilter==false\">\n        <button ion-button round outline class=\"button btn-filter-again-nofilter\" (click)=\"searchAgain()\">Tìm kiếm lại</button>\n      </ion-row>\n      <ion-row *ngIf=\"hassortfilter==true\">\n        <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-left\" (click)=\"sortAndFilterAgain()\">Lọc lại</button></ion-col>\n        <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-right\" (click)=\"clearSortAndFilter()\">Xóa lọc</button></ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"page < totalPage\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/hotel-list/hotel-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/hotel-list/hotel-list.module.ts ***!
  \*************************************************/
/*! exports provided: HotelListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListPageModule", function() { return HotelListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hotel_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotel-list */ "./src/app/hotel-list/hotel-list.ts");







let HotelListPageModule = class HotelListPageModule {
};
HotelListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hotel_list__WEBPACK_IMPORTED_MODULE_6__["HotelListPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _hotel_list__WEBPACK_IMPORTED_MODULE_6__["HotelListPage"]
                }
            ])
        ],
    })
], HotelListPageModule);



/***/ }),

/***/ "./src/app/hotel-list/hotel-list.scss":
/*!********************************************!*\
  !*** ./src/app/hotel-list/hotel-list.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  text-align: center;\n  padding: 0px;\n  margin-left: -6px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 0;\n}\n\np {\n  line-height: 16px;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 17px;\n  text-align: left;\n  letter-spacing: -0.4px;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 4px;\n  letter-spacing: -0.34px;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 123px !important;\n  --border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .badge.badge-ios {\n  background-color: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.m-left {\n  margin-left: 11px;\n}\n\n.m-right {\n  margin-right: 11px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 94%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 16px;\n  height: 48px;\n  margin-top: 16px;\n}\n\n.text-empty {\n  color: #828282;\n}\n\n.img-heart {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 13px;\n  margin-top: 13px;\n  width: 16px;\n  height: 16px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 132px;\n}\n\n.p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  max-width: 53%;\n}\n\n.p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  letter-spacing: -0.51px;\n  font-size: 18px;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 8px;\n  top: -16px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  letter-spacing: -0.51px;\n  font-size: 18px;\n}\n\n.p-top-minprice {\n  top: 10px;\n  font-size: 12px;\n  max-width: 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  position: absolute;\n  right: 8px;\n  width: 100%;\n  bottom: -1px;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  opacity: 0.5;\n  margin-top: 12px;\n}\n\n.col-img-hotellist {\n  height: 123px;\n  position: absolute;\n}\n\n.badge-ios {\n  background-color: #26bed6;\n  font-size: 12px;\n}\n\n.btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n.ico-gift {\n  height: 16px;\n  position: absolute;\n  right: 90px;\n  top: 6px;\n  color: #e52822;\n}\n\n.col-description-hotellist {\n  position: relative;\n  margin-top: 13px;\n  left: 112px;\n  width: 70%;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 73%;\n  }\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  border-radius: 6px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n.m-top-5 {\n  margin-top: 5px;\n}\n\n.m-top-10 {\n  margin-top: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  color: #26bed6;\n  background: #ffffff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-height: 17px;\n}\n\n.fix-height-123 {\n  height: 123px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: 0;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n  margin-bottom: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  line-height: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  font-size: 10px;\n  color: #26bed6;\n  background: #ffffff;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n\n.m-right-0 {\n  margin-right: 0;\n}\n\n.m-width-49 {\n  max-width: 49%;\n}\n\n.m-width-49 .sp-item-style {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.div-title-header {\n  margin-top: env(safe-area-inset-top);\n}\n\n.div-title-header .img-back {\n  height: 48px;\n  padding: 8px;\n  position: absolute;\n  left: 0px;\n  top: -2px;\n  z-index: 99;\n}\n\n.div-title-header .img-filter {\n  position: absolute;\n  right: 0;\n  top: -2px;\n  height: 48px;\n  padding: 16px;\n  z-index: 99;\n}\n\n.have-not-dealprice {\n  bottom: -2px;\n  position: absolute;\n  right: 8px;\n}\n\n.text-change {\n  font-size: 12px;\n  color: #26bed6;\n  text-decoration: underline;\n}\n\n.text-hr {\n  font-size: 11px;\n  color: #222222;\n  font-weight: 500;\n}\n\n.cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: transparent !important;\n  padding-top: 2px;\n  font-size: 10px;\n  top: 8px !important;\n  right: 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9ob3RlbC1saXN0L2hvdGVsLWxpc3Quc2NzcyIsInNyYy9hcHAvaG90ZWwtbGlzdC9ob3RlbC1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUU7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQUo7O0FERUU7RUFDRSxpQkFBQTtBQ0NKOztBRENFO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBSUEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUFnQyx1Q0FBQTtFQUNoQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQUo7O0FERUU7RUFFRSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0FOOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFHQSxhQUFBO0VBSUEsWUFBQTtBQ0NKOztBRENFO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUVFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUU7RUFD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c3QvaG90ZWwtbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgLmhlYWRlci10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1pY29ue1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICB9XG4gIC50ZXh0LXRpdGxlXG4gIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBwe1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG4gIC50ZXh0LW5hbWVcbiAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDEgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAgIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDE3cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIC8vbWF4LXdpZHRoOiAyMTZweDtcbiAgfVxuICAudGV4dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICB9XG4gIC5iYWRnZS1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gIH1cbiAgLmltZy1yYWRpdXNcbiAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAxMjNweCAhaW1wb3J0YW50O1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICAuY29sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAudGV4dC1uYW1lcm9vbVxuICB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgXG4gIH0gXG4gIC50ZXh0LWNvbWJvXG4gIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICB9XG4gIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICB9XG4gIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcblxuICAuaW9uLXRodW1ibmFpbHtcbiAgICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJhZGdlLmJhZGdlLWlvc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubGFiZWwtYmFkZ2V7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG5cbiAgLml0ZW0tYmxvY2t7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogNC40cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG4gIC8qY3NzIGNobyBpb3MqL1xuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gY8OzIHJhdGluZyAmIGxvY2F0aW9uXG4gIC5pdGVtLWlvcyAudHJhbnNib3ggeyBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4vL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyBsb2NhdGlvblxuLml0ZW0taW9zIC50cmFuc2JveDEgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEycHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbiAgfVxuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcbiAgLml0ZW0taW9zIC50cmFuc2JveDIgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEzcHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbiAgfVxuICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaXRlbS1pb3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICBtYXJnaW46MCAxMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG4gIH1cblxuICAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xuICB9XG5cbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAubGFiZWwtaW9zIHtcbiAgICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbiAgfVxuICAvKmNzcyBjaG8gaW9zKi9cblxuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cbiAgLml0ZW0tbWQgLnRyYW5zYm94IHsgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbTogMThweDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cbi5pdGVtLW1kIC50cmFuc2JveDEgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEycHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbiAgfVxuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcbiAgLml0ZW0tbWQgLnRyYW5zYm94MiB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTNweDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuICB9XG5cbiAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIC5pdGVtLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgbWFyZ2luOjAgMTFweDtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xuICB9XG4gIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbiAgfVxuICAuaXRlbS1tZCAuaXRlbS1pbm5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5sYWJlbC1tZCB7XG4gICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4gIH1cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICBcbiAgLnByaWNlLmNvbHtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG4gIH1cbiAgXG59XG4ubS1sZWZ0e1xuICBtYXJnaW4tbGVmdDogMTFweDtcbn1cbi5tLXJpZ2h0e1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG4uYnRuLWNsZWFyLWZpbHRlcntcbiAgYm9yZGVyOm5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDk0JTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2FpbntcbiAgY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo0OHB4O1xufVxuLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXJ7XG4gIGJvcmRlcjpub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLnRleHQtZW1wdHl7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmltZy1oZWFydHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC00cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY2xzLWltZy1jb250ZW50e1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5jbHMtaWNvbi1jb250ZW50e1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmxhYmVsLXByaWNlLWxvZ2lue1xuICBjb2xvcjogIzI2YmVkNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnQtYm9sZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGV4dC1sb2dpbntcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbiAgLnRyYW5zYm94XzAgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbiAgfVxuICBwLGgye1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAucm93LWl0ZW0taG90ZWxsaXN0e1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBoZWlnaHQ6IDEzMnB4O1xuICB9XG5cbiAgLnAtdG9wLWRlYWx0eXBle1xuICAgIHRvcDo5cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgICBtYXgtd2lkdGg6IDUzJTtcbiAgfVxuICAucC10b3AtZGVhbHR5cGUtNntcbiAgICB0b3A6NXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gIH1cbiAgLmxhYmVsLW1pbnByaWNle1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICBmb250LXNpemU6MThweDtcbiAgfVxuICAubGFiZWwtbWlucHJpY2VUQXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgdG9wOiAtMTZweDtcbiAgfVxuICAubGFiZWwtZGVhbHByaWNle1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICBmb250LXNpemU6MThweDtcbiAgfVxuICAucC10b3AtbWlucHJpY2V7XG4gICAgdG9wOjEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAucC10b3AtOHtcbiAgICB0b3A6OHB4O1xuICB9XG4gIC5wLXRvcC0xMHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IC0xcHg7XG4gIH1cbiAgLnAtdG9wLTE4e1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICB9XG4gIC5oLWxpbmV7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gIH1cbiAgLmNvbC1pbWctaG90ZWxsaXN0e1xuICAgIC8vaGVpZ2h0OiAxMDlweDtcbiAgICBoZWlnaHQ6IDEyM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuYmFkZ2UtaW9ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5idG4taGVhZGVye1xuICAgIHdpZHRoOiA0OHB4O2NvbG9yOiAjNGY0ZjRmO2JhY2tncm91bmQtY29sb3I6ICNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO2JveC1zaGFkb3c6IG5vbmU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbi5pY28tZ2lmdHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5MHB4O1xuICB0b3A6IDZweDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG4uY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBsZWZ0OiAxMTJweDtcbiAgd2lkdGg6IDcwJTtcbn1cbiAgXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAgICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICB9XG4gICAgICAucC10b3AtMTB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1sb2dpbntcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOjQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuICAgICAgICB3aWR0aDo3MyU7XG4gICAgICB9XG4gICAgfVxuICAgIDpob3N0e1xuICAgICAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xuICAgIH1cbiAgICBpb24tYmFkZ2V7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuICAgIC5sYWJlbC1iYWRnZXtcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgOjpuZy1kZWVwe1xuICAgICAgLmluZmluaXRlLWxvYWRpbmctdGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC8vc2tlbGV0b24tc3R5bGVcbiAgICAgIGlvbi1za2VsZXRvbi10ZXh0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY29sLWltZy1ob3RlbGxpc3Qtc2t7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1uYW1lLXNrXG4gICAgICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgICAucC1za3tcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmxhc3Qtcm93LXNre1xuICAgICAgICBwYWRkaW5nLXRvcDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgfVxuICAgICAgLnJvdy1pdGVtLWhvdGVsbGlzdC1za3tcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDoxNnB4O1xuICAgICAgfVxuICAgICAgLmgtbGluZS1za3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgICAgIG1hcmdpbjogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm0tdG9wLTV7XG4gICAgICBtYXJnaW4tdG9wOjVweDtcbiAgICB9XG4gICAgLm0tdG9wLTEwe1xuICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIH1cbiAgICAuc3AtaXRlbS1zdHlsZXtcbiAgICAgIHBhZGRpbmc6M3B4IDVweDtcbiAgICAgIGJvcmRlcjpzb2xpZCAwLjVweCAjMjZiZWQ2O1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG1heC1oZWlnaHQ6IDE3cHg7XG4gICAgfVxuICAgIC5maXgtaGVpZ2h0LTEyM3tcbiAgICAgIGhlaWdodDogMTIzcHg7XG4gICAgfVxuICAgIC5sYXN0LXJvd3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTowO1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmNscy1saW5laGVpZ2h0e1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgfVxuXG4gICAgLm0tdG9wLTEwe1xuICAgICAgbWFyZ2luLXRvcDo2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOjEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAuc3AtaXRlbS1zdHlsZXtcbiAgICAgIHBhZGRpbmc6M3B4IDVweDtcbiAgICAgIGJvcmRlcjpzb2xpZCAwLjVweCAjMjZiZWQ2O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuXG4gICAgLm0tcmlnaHQtMHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgLm0td2lkdGgtNDl7XG4gICAgICBtYXgtd2lkdGg6IDQ5JTtcbiAgICAgIFxuICAgICAgLnNwLWl0ZW0tc3R5bGV7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtdGl0bGUtaGVhZGVye1xuICAgICAgbWFyZ2luLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgICAgLmltZy1iYWNre1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7IHBhZGRpbmc6IDhweDtwb3NpdGlvbjogYWJzb2x1dGU7bGVmdDogMHB4O3RvcDogLTJweDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICB9XG4gICAgICAuaW1nLWZpbHRlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAwO3RvcDogLTJweDtoZWlnaHQ6IDQ4cHg7cGFkZGluZzogMTZweDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICB9XG4gICAgfVxuICAgIC5oYXZlLW5vdC1kZWFscHJpY2V7XG4gICAgICAvL2JvdHRvbTogMHB4O1xuICAgICAgYm90dG9tOiAtMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDhweDtcbiAgICB9XG4udGV4dC1jaGFuZ2VcbntcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4udGV4dC1oclxue1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2xzLWJhZGdlLWZpbHRlciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG5cbiAgdG9wOiA4cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufSIsIi5oZWFkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWljb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uYmFkZ2UtbWQge1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uaW1nLXJhZGl1cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMjNweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgZmxleC1iYXNpczogMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi50ZXh0LW5hbWVyb29tIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGV4dC1jb21ibyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypjc3MgY2hvIGlvcyovXG4gIC8qY3NzIGNobyBpb3MqL1xuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW9uLXRodW1ibmFpbCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYmFkZ2UuYmFkZ2UtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1iYWRnZSB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tYmxvY2sge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTNweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICBtYXJnaW46IDAgMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtaW9zIHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDE4cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIG1hcmdpbjogMCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnByaWNlLmNvbCB7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcbn1cblxuLm0tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xufVxuXG4ubS1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuLmJ0bi1jbGVhci1maWx0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDk0JTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2FpbiB7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50ZXh0LWVtcHR5IHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5pbWctaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTRweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNscy1pbWctY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uY2xzLWljb24tY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5sYWJlbC1wcmljZS1sb2dpbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtbG9naW4ge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50cmFuc2JveF8wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbn1cblxucCwgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5yb3ctaXRlbS1ob3RlbGxpc3Qge1xuICBtYXJnaW46IDE2cHg7XG4gIGhlaWdodDogMTMycHg7XG59XG5cbi5wLXRvcC1kZWFsdHlwZSB7XG4gIHRvcDogOXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbiAgbWF4LXdpZHRoOiA1MyU7XG59XG5cbi5wLXRvcC1kZWFsdHlwZS02IHtcbiAgdG9wOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4ubGFiZWwtbWlucHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5sYWJlbC1taW5wcmljZVRBIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgdG9wOiAtMTZweDtcbn1cblxuLmxhYmVsLWRlYWxwcmljZSB7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnAtdG9wLW1pbnByaWNlIHtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1heC13aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnAtdG9wLTgge1xuICB0b3A6IDhweDtcbn1cblxuLnAtdG9wLTEwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtMXB4O1xufVxuXG4ucC10b3AtMTgge1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cblxuLmgtbGluZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBvcGFjaXR5OiAwLjU7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5jb2wtaW1nLWhvdGVsbGlzdCB7XG4gIGhlaWdodDogMTIzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJhZGdlLWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi1oZWFkZXIge1xuICB3aWR0aDogNDhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaWNvLWdpZnQge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDkwcHg7XG4gIHRvcDogNnB4O1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGxlZnQ6IDExMnB4O1xuICB3aWR0aDogNzAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5wLXRvcC0xMCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnRleHQtbG9naW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICAgIHdpZHRoOiA3MyU7XG4gIH1cbn1cbjpob3N0IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xufVxuXG5pb24tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5sYWJlbC1iYWRnZSB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjo6bmctZGVlcCAuaW5maW5pdGUtbG9hZGluZy10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLmNvbC1pbWctaG90ZWxsaXN0LXNrIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAudGV4dC1uYW1lLXNrIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAucC1zayB7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAubGFzdC1yb3ctc2sge1xuICBwYWRkaW5nLXRvcDogNTJweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuOjpuZy1kZWVwIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5oLWxpbmUtc2sge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubS10b3AtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm0tdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNwLWl0ZW0tc3R5bGUge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWF4LWhlaWdodDogMTdweDtcbn1cblxuLmZpeC1oZWlnaHQtMTIzIHtcbiAgaGVpZ2h0OiAxMjNweDtcbn1cblxuLmxhc3Qtcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNscy1saW5laGVpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5tLXRvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnNwLWl0ZW0tc3R5bGUge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5tLXJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5tLXdpZHRoLTQ5IHtcbiAgbWF4LXdpZHRoOiA0OSU7XG59XG4ubS13aWR0aC00OSAuc3AtaXRlbS1zdHlsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGl2LXRpdGxlLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbn1cbi5kaXYtdGl0bGUtaGVhZGVyIC5pbWctYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtMnB4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5kaXYtdGl0bGUtaGVhZGVyIC5pbWctZmlsdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAtMnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uaGF2ZS1ub3QtZGVhbHByaWNlIHtcbiAgYm90dG9tOiAtMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG59XG5cbi50ZXh0LWNoYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udGV4dC1ociB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jbHMtYmFkZ2UtZmlsdGVyIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdG9wOiA4cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hotel-list/hotel-list.ts":
/*!******************************************!*\
  !*** ./src/app/hotel-list/hotel-list.ts ***!
  \******************************************/
/*! exports provided: HotelListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListPage", function() { return HotelListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_hotel_filter_and_sort_search_hotel_filter_and_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search-hotel-filter-and-sort/search-hotel-filter-and-sort */ "./src/app/search-hotel-filter-and-sort/search-hotel-filter-and-sort.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
















let HotelListPage = class HotelListPage {
    constructor(platform, navCtrl, zone, authService, bookcombo, value, searchhotel, modalCtrl, events, router, booking, loadingCtrl, storage, valueGlobal, alertCtrl, gf, activeRoute, fcm, nativePageTransitions, activityService, fb) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.authService = authService;
        this.bookcombo = bookcombo;
        this.value = value;
        this.searchhotel = searchhotel;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.router = router;
        this.booking = booking;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.valueGlobal = valueGlobal;
        this.alertCtrl = alertCtrl;
        this.gf = gf;
        this.activeRoute = activeRoute;
        this.fcm = fcm;
        this.nativePageTransitions = nativePageTransitions;
        this.activityService = activityService;
        this.fb = fb;
        this.json = [];
        this.json1 = [];
        this.dataListLike = [];
        this.itemsSkeleton = [1, 2, 3, 4, 5];
        this.ishide = false;
        this.nodata = false;
        this.num = 0;
        this.len = 30;
        this.co = 0;
        this.listhotels = "";
        this.listhotelIdInternal = "";
        this.hasfilter = false;
        this.hasfilteragain = false;
        this.hassortfilter = false;
        this.jsonhtprice = [];
        this.listHotelPrice = [];
        this.page = 1;
        this.totalData = 0;
        this.totalPage = 0;
        this.perPage = 10;
        this.listSort = [];
        this.sortOnly = true;
        this.isDesc = false;
        this.column = 'MinPriceOTAStr';
        this.liked = false;
        this.loginuser = null;
        this.loadpricedone = false;
        this.cindisplayhr = "14/04";
        this.coutdisplayhr = "16/04";
        this.guest = 2;
        this.ischeckAL = false;
        this.name = searchhotel.gbmsg ? (searchhotel.gbmsg.regionName ? searchhotel.gbmsg.regionName : searchhotel.gbmsg.regionName) : authService.region;
        if (this.searchhotel.isRecent == 1) {
            this.name = authService.region;
        }
        this.ischeckAL = this.searchhotel.ischeckAL;
        this.loadpricedone = false;
        setTimeout(() => {
            this.loaddata(authService, searchhotel, 0);
            this.activityService.firstloadhotelist = true;
        }, 500);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            yield se.onEnter();
            se.subscription = se.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"] && (event.url === 'searchhotelfilterandsort' || event.url === 'searchhotelfilterandsort' || event.url === 'searchhotelfilteragain' || event.url === '/hotellist/true' || event.url === '/app/tabs/hotellist/true')) {
                    se.onEnter();
                }
            });
            se.searchhotel.changeInfoHotelList.pipe().subscribe((data) => {
                if (data) {
                    var item = {};
                    item.adult = this.searchhotel.adult;
                    item.child = this.searchhotel.child;
                    item.arrchild = this.searchhotel.arrchild;
                    item.roomnumber = this.searchhotel.roomnumber;
                    item.imageUrl = this.searchhotel.objRecent.imageUrl;
                    var checkInDate = new Date(this.searchhotel.CheckInDate);
                    var checkOutDate = new Date(this.searchhotel.CheckOutDate);
                    item.CheckInDate = this.searchhotel.CheckInDate;
                    item.CheckOutDate = this.searchhotel.CheckOutDate;
                    item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_13__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_13__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_13__(checkInDate).format('YYYY');
                    item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_13__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_13__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_13__(checkOutDate).format('YYYY');
                    item.id = this.searchhotel.objRecent.id;
                    item.name = this.searchhotel.objRecent.name;
                    item.isType = this.searchhotel.objRecent.isType;
                    this.datecin = new Date(this.searchhotel.CheckInDate);
                    this.datecout = new Date(this.searchhotel.CheckOutDate);
                    this.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_13__(this.datecin).format('DD/MM');
                    this.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_13__(this.datecout).format('DD/MM');
                    this.guest = this.searchhotel.child + this.searchhotel.adult;
                    this.gf.setCacheSearch(item, 1);
                    se.doRefresh();
                }
            });
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    handleSplashScreen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.platform.ready();
            }
            catch (error) {
                console.error('Platform initialization bug');
            }
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.style.opacity = '0';
                setTimeout(() => { splash.remove(); }, 300);
            }
        });
    }
    loaddata(authService, searchhotel, isloadmore) {
        if (!isloadmore) {
            this.ishide = false;
        }
        var id = searchhotel.gbmsg ? (searchhotel.gbmsg.regionId ? searchhotel.gbmsg.regionId : searchhotel.gbmsg.regionId) : authService.regionid;
        if (this.searchhotel.isRecent == 1) {
            id = authService.regionid;
            this.name = this.authService.region;
        }
        var strurl = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlGet + '/hotelslist?regionId=' + id + '&page=' + this.page + '&pageSize=200&version=2' + (this.memberid ? '&memberid=' + this.memberid : '');
        if (searchhotel.chuoi) {
            if (searchhotel.minprice) {
                this.minprice = searchhotel.minprice.replace(/\./g, '').replace(/\,/g, '');
                this.maxprice = searchhotel.maxprice.replace(/\./g, '').replace(/\,/g, '');
                strurl += '&minprice=' + this.minprice;
                strurl += '&maxprice=' + this.maxprice;
            }
            else {
                this.minprice = null;
                this.maxprice = null;
            }
            if (searchhotel.review > 0) {
                strurl += '&reviewpoint=' + searchhotel.review;
            }
            if (searchhotel.star.length > 0) {
                for (let j = 0; j < this.searchhotel.star.length; j++) {
                    if (j == 0) {
                        strurl += '&stars=' + this.searchhotel.star[j] * 10;
                    }
                    else {
                        strurl += ',' + this.searchhotel.star[j] * 10;
                    }
                }
            }
        }
        this.hassortfilter = false;
        if (searchhotel.location) {
            strurl += "&location=" + searchhotel.location;
            this.searchhotel.arrlocalcheck = searchhotel.location.split(',');
            this.hassortfilter = true;
        }
        if (searchhotel.facsearch) {
            strurl += "&facsearch=" + searchhotel.facsearch;
            this.searchhotel.arrfacilitycheck = searchhotel.facsearch.split(',');
            this.hassortfilter = true;
        }
        if (searchhotel.tagIds) {
            strurl += "&tagIds=" + searchhotel.tagIds;
            this.searchhotel.arrstylecheck = searchhotel.tagIds.split(',');
            this.hassortfilter = true;
        }
        if (searchhotel.classIds) {
            strurl += "&classIds=" + searchhotel.classIds;
            this.searchhotel.arrhoteltypecheck = searchhotel.classIds.split(',');
            this.hassortfilter = true;
        }
        this.loadpricedone = false;
        var se = this;
        var options = {
            method: 'GET',
            url: strurl,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "hotellist",
                    func: "loaddata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "hotellist";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                var lst = JSON.parse(body);
                se.totalData = lst.Total;
                se.totalPage = se.totalData / 10;
                if (searchhotel.chuoi) {
                    se.jsontemp = lst;
                    if (searchhotel.minprice) {
                        se.minprice = searchhotel.minprice.replace(/\./g, '').replace(/\,/g, '');
                        se.maxprice = searchhotel.maxprice.replace(/\./g, '').replace(/\,/g, '');
                        se.hasfilter = true;
                    }
                    if (searchhotel.review > 0 || searchhotel.star.length > 0) {
                        se.hasfilter = true;
                    }
                    if (!se.dataList) {
                        se.dataList = [];
                    }
                    for (let i = 0; i < lst.List.length; i++) {
                        let item = lst.List[i];
                        if (searchhotel.minprice) {
                            if (item.MinPrice && se.minprice * 1 < se.clearSubFix(item.MinPrice) * 1 && se.clearSubFix(item.MinPrice) * 1 < se.maxprice * 1) {
                                se.dataList.push(item);
                            }
                            else if (item.MaxPrice && se.minprice * 1 < se.clearSubFix(item.MaxPrice) * 1 && se.clearSubFix(item.MaxPrice) * 1 < se.maxprice * 1) {
                                se.dataList.push(item);
                            }
                        }
                        else {
                            se.dataList.push(item);
                        }
                    }
                    se.listhotels = "";
                    se.listhotelIdInternal = "";
                    for (let i = 0; i < lst.List.length; i++) {
                        if (i == lst.List.length - 1) {
                            if (lst.List[i].EANCode != "") {
                                se.listhotels = se.listhotels + lst.List[i].EANCode;
                            }
                            se.listhotelIdInternal = se.listhotelIdInternal + lst.List[i].HotelId;
                        }
                        else {
                            if (lst.List[i].EANCode != "") {
                                se.listhotels = se.listhotels + lst.List[i].EANCode + ",";
                            }
                            se.listhotelIdInternal = se.listhotelIdInternal + lst.List[i].HotelId + ",";
                        }
                    }
                    se.pushdata(0, se.dataList.length, isloadmore);
                }
                else {
                    se.hasfilter = false;
                    se.listhotels = "";
                    se.listhotelIdInternal = "";
                    var lst = JSON.parse(body);
                    if (!se.dataList) {
                        se.dataList = [];
                    }
                    for (let i = 0; i < lst.List.length; i++) {
                        let item = lst.List[i];
                        se.dataList.push(item);
                    }
                    se.length = se.dataList.length;
                    for (let i = 0; i < lst.List.length; i++) {
                        if (i == lst.List.length - 1) {
                            if (lst.List[i].EANCode != "") {
                                se.listhotels = se.listhotels + lst.List[i].EANCode;
                            }
                            se.listhotelIdInternal = se.listhotelIdInternal + lst.List[i].HotelId;
                        }
                        else {
                            if (lst.List[i].EANCode != "") {
                                se.listhotels = se.listhotels + lst.List[i].EANCode + ",";
                            }
                            se.listhotelIdInternal = se.listhotelIdInternal + lst.List[i].HotelId + ",";
                        }
                    }
                    if (se.listhotels.lastIndexOf(',') == se.listhotels.length - 1) {
                        se.listhotels = se.listhotels.substring(0, se.listhotels.length - 2);
                    }
                    se.pushdata(0, se.dataList.length, isloadmore);
                }
            }
            else if (response.statusCode == 400) {
                error.page = "hotel-list";
                error.func = "loaddata";
                error.status = response.statusCode;
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
            }
        });
        se.gf.googleAnalytion(se.searchhotel.gbmsg ? (se.searchhotel.gbmsg.regionCode ? se.searchhotel.gbmsg.regionCode : se.searchhotel.gbmsg.regionCode) : se.authService.regioncode, 'screen_view', {});
    }
    sort(property) {
        this.column = property;
        var s = this;
        this.zone.run(() => this.json1.sort(function (a, b) {
            if (property == "MinPriceOTAStr") {
                let direction = s.isDesc ? 1 : -1;
                if (a["DealType"] || b["DealType"]) {
                    if (a["DealPrice"] && b["DealPrice"] && a["DealPrice"] != 0 && s.clearSubFix(b["DealPrice"]) * 1 != 0 && s.clearSubFix(a["DealPrice"]) * 1 < s.clearSubFix(b["DealPrice"]) * 1) {
                        return -1 * direction;
                    }
                    else if (a["DealPrice"] && b["DealPrice"] && a["DealPrice"] != 0 && s.clearSubFix(b["DealPrice"]) * 1 != 0 && s.clearSubFix(a["DealPrice"]) * 1 > s.clearSubFix(b["DealPrice"]) * 1) {
                        return 1 * direction;
                    }
                }
                else {
                    if (a[property] && b[property]) {
                        if (s.clearSubFix(a[property]) * 1 < s.clearSubFix(b[property]) * 1) {
                            return -2 * direction;
                        }
                        else if (s.clearSubFix(a[property]) * 1 > s.clearSubFix(b[property]) * 1) {
                            return 2 * direction;
                        }
                        else {
                            return -3 * direction;
                        }
                    }
                }
            }
            else {
                let direction = -1;
                if (s.clearSubFix(a[property]) * 1 < s.clearSubFix(b[property]) * 1) {
                    return -1 * direction;
                }
                else if (s.clearSubFix(a[property]) * 1 > s.clearSubFix(b[property]) * 1) {
                    return 1 * direction;
                }
                else {
                    return 0;
                }
            }
        }));
    }
    ;
    clearSubFix(value) {
        let re1 = /\./gi;
        let re2 = /\,/gi;
        let re3 = /\đ/gi;
        return value ? value.toLocaleString().replace(re1, '').replace(re2, '').replace("đ", '').replace("VND", '').trim() : 0;
    }
    checkHotelStar(item) {
        let res = false;
        for (let j = 0; j < this.searchhotel.star.length; j++) {
            if (this.searchhotel.star[j] * 10 == item.Rating) {
                var co = this.checkvalue(item.HotelId);
                if (co == 0) {
                    res = true;
                }
            }
        }
        return res;
    }
    checkMinPrice(item) {
        let res = false;
        if (item) {
            if (item.DealType) {
                if (this.minprice * 1 <= item.DealPrice && item.DealPrice <= this.maxprice * 1) {
                    var co = this.checkvalue(item.HotelId);
                    if (co == 0) {
                        res = true;
                    }
                }
            }
            else {
                var co = this.checkvalue(item.HotelId);
                if (co == 0) {
                    res = true;
                }
            }
        }
        return res;
    }
    checkvalue(id) {
        var co = 0;
        if (id) {
            for (let i = 0; i < this.json.length; i++) {
                if (id == this.json[i].HotelId) {
                    co = 1;
                    break;
                }
            }
        }
        return co;
    }
    checkExistsItem(id) {
        var co = 0;
        if (id) {
            for (let i = 0; i < this.json1.length; i++) {
                if (id == this.json1[i].HotelId) {
                    co = 1;
                    break;
                }
            }
        }
        return co;
    }
    checkExistsPriceItem(id) {
        var co = 0;
        var se = this;
        if (id) {
            for (let i = 0; i < se.listHotelPrice.length; i++) {
                if (id == se.listHotelPrice[i].HotelId) {
                    co = 1;
                    break;
                }
            }
        }
        return co;
    }
    checkItemLiked(id) {
        var co = 0;
        if (id) {
            for (let i = 0; i < this.dataListLike.length; i++) {
                if (this.dataListLike.indexOf(id) != -1) {
                    co = 1;
                    break;
                }
            }
        }
        return co;
    }
    getHotelprice(isloadmore) {
        var se = this;
        var options;
        var form = {
            RoomNumber: se.searchhotel.roomnumber ? se.searchhotel.roomnumber : 1,
            IsLeadingPrice: '',
            ReferenceClient: '',
            Supplier: 'IVIVU',
            CheckInDate: se.searchhotel.CheckInDate,
            CheckOutDate: se.searchhotel.CheckOutDate,
            CountryID: '',
            CityID: '',
            NationalityID: '',
            'RoomsRequest[0][RoomIndex]': '0',
            'RoomsRequest[0][Adults][value]': se.searchhotel.adult,
            'RoomsRequest[0][Child][value]': se.searchhotel.child,
            StatusMethod: '2',
            'CityCode': se.authService.region,
            CountryCode: 'VN',
            NoCache: 'false',
            SearchType: '2',
            HotelIds: se.listhotels,
            HotelIdInternal: se.listhotelIdInternal
        };
        if (this.searchhotel.arrchild) {
            for (var i = 0; i < this.searchhotel.arrchild.length; i++) {
                form["RoomsRequest[0][AgeChilds][" + i + "][value]"] = +this.searchhotel.arrchild[i].numage;
            }
        }
        options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelsSearchPriceAjax',
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
            headers: {},
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (error) {
                error.page = "hotellist";
                error.func = "getHotelprice";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
            }
            ;
            if (response.statusCode != 200) {
                var objError = {
                    page: "hotellist",
                    func: "getHotelprice",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
            }
            se.zone.run(() => {
                if (se.page == 1) {
                    se.jsonhtprice = [];
                    se.listHotelPrice = [];
                }
                se.jsonhtprice1 = JSON.parse(body);
                if (se.jsonhtprice1.HotelListResponse) {
                    se.jsonhtprice1 = se.jsonhtprice1.HotelListResponse.HotelList.HotelSummary;
                    for (var i = 0; i < se.jsonhtprice1.length; i++) {
                        let itemprice = se.jsonhtprice1[i];
                        if (se.ischeckAL) {
                            if (itemprice.availableNo != 0) {
                                se.listHotelPrice.push(itemprice);
                            }
                        }
                        else {
                            se.listHotelPrice.push(itemprice);
                        }
                        if (se.searchhotel.minprice) {
                            if (se.minprice < itemprice.lowRateOta && itemprice.lowRateOta < se.maxprice) {
                                se.jsonhtprice.push(itemprice);
                            }
                        }
                        else {
                            se.jsonhtprice.push(itemprice);
                        }
                    }
                    se.fillDataPrice().then((data) => {
                        if (se.json1 && se.json1.length > 0) {
                            data.forEach(element => {
                                if (!se.checkExistsItemInArray(se.json1, element, '')) {
                                    se.json1.push(element);
                                }
                            });
                        }
                        else {
                            se.json1 = data;
                        }
                        setTimeout(() => {
                            se.zone.run(() => {
                                se.json1.forEach(element => {
                                    if (!se.checkExistsPriceItem(element.HotelId)) {
                                        element.MinPriceOTAStr = "";
                                    }
                                    if (se.minprice && (!se.checkItemPrice(se.jsonhtprice, element))
                                        && !(se.minprice * 1 < se.clearSubFix(element.MinPriceTAStr) * 1 && se.clearSubFix(element.MinPriceTAStr) * 1 < se.maxprice * 1)) {
                                        se.removeItemPrice(se.json1, element);
                                    }
                                });
                                se.json1.forEach(element => {
                                    var itemPriceCheck = se.jsonhtprice.filter((item) => { return item.HotelId == element.HotelId; });
                                    if (se.minprice && !(se.minprice * 1 < se.clearSubFix(element.MinPriceTAStr ? element.MinPriceTAStr : element.MinPrice0TAStr) * 1 && se.clearSubFix(element.MinPriceTAStr ? element.MinPriceTAStr : element.MinPrice0TAStr) * 1 < se.maxprice * 1)) {
                                        se.removeItemPrice(se.json1, element);
                                    }
                                    if (se.minprice && itemPriceCheck && itemPriceCheck.length > 0
                                        && (se.minprice * 1 < se.clearSubFix(element.MinPriceTAStr ? element.MinPriceTAStr : element.MinPrice0TAStr) * 1 && se.clearSubFix(element.MinPriceTAStr ? element.MinPriceTAStr : element.MinPrice0TAStr) * 1 < se.maxprice * 1)
                                        && !(se.minprice < itemPriceCheck[0].lowRateOta && itemPriceCheck[0].lowRateOta < se.maxprice)) {
                                        se.removeItemPrice(se.json1, element);
                                    }
                                });
                            });
                            se.ishide = true;
                            se.loadpricedone = true;
                            se.nodata = se.json1.length == 0;
                        }, 200);
                    });
                    setTimeout(() => {
                        se.ishide = true;
                        se.loadpricedone = true;
                    }, 1200);
                }
                else {
                    if (!isloadmore) {
                        se.ishide = true;
                        se.nodata = se.json1.length == 0;
                        se.json1.forEach(element => {
                            element.HasCheckPrice = true;
                        });
                    }
                    se.loadpricedone = true;
                }
                setTimeout(() => {
                    if (se.json1.length > 0 && se.json1.length < 6 && se.page * 5 < se.totalData) {
                        se.page += 1;
                        se.loaddata(se.authService, se.searchhotel, false);
                    }
                    else {
                        se.nodata = se.json1.length == 0;
                    }
                }, 10);
                if (se.ischeckAL) {
                    setTimeout(() => {
                        for (let i = 0; i < se.json1.length; i++) {
                            const element = se.json1[i];
                            if (se.ischeckAL) {
                                if (element.MinPriceOTAStr && element.HasCheckPrice) {
                                    se.nodata = false;
                                    break;
                                }
                            }
                            else {
                                se.nodata = false;
                                break;
                            }
                        }
                        let itemsprice = se.json1.some(item => item.MinPriceOTAStr && item.HasCheckPrice);
                        se.nodata = !itemsprice;
                        if (se.nodata) {
                            se.json1 = [];
                        }
                    }, 1200);
                }
            });
        });
    }
    checkExistsItemInArray(arrays, item, type) {
        var res = false;
        res = arrays.some(r => r.HotelId == item.HotelId);
        return res;
    }
    checkItemPrice(array, item) {
        return array.find((itemPrice) => {
            return item.HotelId == itemPrice.HotelId;
        });
    }
    removeItemPrice(array, itemcheck) {
        array.forEach((item, index) => {
            if (item.HotelId == itemcheck.HotelId)
                array.splice(index, 1);
        });
    }
    executeSort() {
        if (this.searchhotel.sortOrder) {
            if (this.searchhotel.sortOrder == "1") {
                this.isDesc = true;
                this.sort("MinPriceOTAStr");
            }
            if (this.searchhotel.sortOrder == "2") {
                this.isDesc = false;
                this.sort("MinPriceOTAStr");
            }
            if (this.searchhotel.sortOrder == "3") {
                this.isDesc = true;
                this.sort("AvgPoint");
            }
        }
    }
    fillDataPrice() {
        var se = this;
        return new Promise((resolve, reject) => {
            se.zone.run(() => {
                for (let index = 0; index < se.json1.length; index++) {
                    if (se.json1[index].HasCheckPrice)
                        continue;
                    se.json1[index].HasCheckPrice = true;
                    for (let i = 0; i < se.listHotelPrice.length; i++) {
                        if (se.json1[index] && se.json1[index].HotelId == se.listHotelPrice[i].HotelId) {
                            se.json1[index].MinPriceOTAStr = se.listHotelPrice[i].MinPriceOTAStr;
                            se.json1[index].MinPriceTAStr = se.listHotelPrice[i].MinPriceTAStr;
                            se.json1[index].RoomNameSubString = se.listHotelPrice[i].RoomNameSubString.replace('...', '');
                            se.json1[index].PromotionDescription = se.listHotelPrice[i].PromotionDescription;
                            se.json1[index].PromotionDescriptionSubstring = se.listHotelPrice[i].PromotionDescriptionSubstring;
                            se.json1[index].hasPrice = true;
                        }
                    }
                }
                let arrid = se.json1.filter((item) => { return item.hasPrice; }).map(x => x.HotelId);
                if (arrid && arrid.length > 0) {
                    var arr = se.json1.filter((item) => { return arrid.indexOf(item.HotelId) == -1; });
                    if (arr && arr.length > 0) {
                        arr.forEach(element => {
                            if (element.DealType) {
                                element.DealPrice = 0;
                            }
                            else {
                                element.MinPriceOTAStr = 0;
                            }
                        });
                    }
                }
                if (se.ischeckAL) {
                    let jsontemp = se.json1;
                    let json2 = [];
                    for (let i = 0; i < jsontemp.length; i++) {
                        const element = jsontemp[i];
                        if (element.DealType) {
                            if (element.DealPrice && element.HasCheckPrice && element.MinPriceOTAStr) {
                                json2.push(element);
                            }
                        }
                        else {
                            if (element.HasCheckPrice && element.MinPriceOTAStr) {
                                json2.push(element);
                            }
                        }
                    }
                    resolve(json2);
                }
                else {
                    resolve(se.json1);
                }
            });
        });
    }
    pushdata(num, len, isloadmore) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hotel-list",
                            func: "pushdata",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hotel-list";
                        error.func = "pushdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                se.dataListLike = JSON.parse(body);
                                se.executePushData().then(() => {
                                    se.getHotelprice(isloadmore);
                                });
                            });
                        }
                        else {
                        }
                    }
                });
            }
            else {
                se.executePushData().then(() => {
                    se.getHotelprice(isloadmore);
                });
            }
        });
    }
    executePushData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            return new Promise((resolve, reject) => {
                if (!se.dataList) {
                    se.dataList = [];
                }
                for (let index = 0; index < se.dataList.length; index++) {
                    let itemlike = false;
                    if (se.dataListLike.length > 0) {
                        itemlike = se.checkItemLiked(se.dataList[index].HotelId) == 1 ? true : false;
                    }
                    var co = se.checkExistsItem(se.dataList[index].HotelId);
                    if (co == 1) {
                        continue;
                    }
                    if (se.dataList[index].Avatar) {
                        se.dataList[index].Avatar = (se.dataList[index].Avatar.toLocaleString().trim().indexOf("http") != -1) ? se.dataList[index].Avatar : 'https:' + se.dataList[index].Avatar;
                    }
                    else {
                        se.dataList[index].Avatar = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png";
                    }
                    if (se.dataList[index].DealType) {
                        if (se.dataList[index].DealPrice) {
                            se.dataList[index].DealPrice = se.dataList[index].DealPrice.toLocaleString();
                        }
                    }
                    switch (se.dataList[index].Rating) {
                        case 50:
                            se.dataList[index].Rating = "./assets/star/ic_star_5.svg";
                            break;
                        case 45:
                            se.dataList[index].Rating = "./assets/star/ic_star_4.5.svg";
                            break;
                        case 40:
                            se.dataList[index].Rating = "./assets/star/ic_star_4.svg";
                            break;
                        case 35:
                            se.dataList[index].Rating = "./assets/star/ic_star_3.5.svg";
                            break;
                        case 30:
                            se.dataList[index].Rating = "./assets/star/ic_star_3.svg";
                            break;
                        case 25:
                            se.dataList[index].Rating = "./assets/star/ic_star_2.5.svg";
                            break;
                        case 20:
                            se.dataList[index].Rating = "./assets/star/ic_star_2.svg";
                            break;
                        case 15:
                            se.dataList[index].Rating = "./assets/star/ic_star_1.5.svg";
                            break;
                        case 10:
                            se.dataList[index].Rating = "./assets/star/ic_star_1.svg";
                            break;
                        case 5:
                            se.dataList[index].Rating = "./assets/star/ic_star_0.5.svg";
                            break;
                        default:
                            break;
                    }
                    var item;
                    if (se.dataList[index].DealType) {
                        if (se.dataList[index].Address) {
                            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice ? se.dataList[index].DealPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: se.dataList[index].Address, Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, Liked: itemlike, HasCheckPrice: false, StyleTag: se.dataList[index].StyleTag, IsShowPrice: se.dataList[index].IsShowPrice };
                        }
                        else {
                            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice ? se.dataList[index].DealPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: '', Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, Liked: itemlike, HasCheckPrice: false, StyleTag: se.dataList[index].StyleTag, IsShowPrice: se.dataList[index].IsShowPrice };
                        }
                    }
                    else {
                        if (se.dataList[index].Address) {
                            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, SubLocation: se.dataList[index].Address, Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : "", PromotionDescriptionSubstring: "", MinPriceTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : "", Liked: itemlike, HasCheckPrice: false, StyleTag: se.dataList[index].StyleTag, IsShowPrice: se.dataList[index].IsShowPrice };
                        }
                        else {
                            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, SubLocation: '', Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : "", PromotionDescriptionSubstring: "", MinPriceTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : "", Liked: itemlike, HasCheckPrice: false, StyleTag: se.dataList[index].StyleTag, IsShowPrice: se.dataList[index].IsShowPrice };
                        }
                    }
                    if (item.AvgPoint == "10.0") {
                        item.AvgPoint = "10";
                    }
                    se.json1.push(item);
                    se.nodata = false;
                }
                if (se._infiniteScroll) {
                    se._infiniteScroll.target.complete();
                }
                se.storage.get('auth_token').then(auth_token => {
                    if (!auth_token) {
                        for (let i = 0; i < se.json1.length; i++) {
                            se.json1[i].Like = false;
                        }
                    }
                });
                se.ishide = true;
                return resolve(se.json1);
            });
        });
    }
    seemap() {
        var id1 = { name: this.name, code: this.code };
    }
    filter() {
        var id1 = { name: this.name, code: this.code };
        this.router.navigateByUrl('/searchhotel');
    }
    presentLoadingnavi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                message: "",
                duration: 10
            });
            loader.present();
        });
    }
    itemSelected(msg) {
        this.searchhotel.hotelID = msg.HotelId;
        this.value.flag = 1;
        this.value.arrhotellist = this.json1;
        this.searchhotel.rootPage = "listpage";
        this.booking.HotelId = null;
        this.valueGlobal.logingoback = '/hoteldetail/' + msg.HotelId;
        var item = {};
        item.adult = this.searchhotel.adult;
        item.child = this.searchhotel.child;
        item.arrchild = this.searchhotel.arrchild;
        item.roomnumber = this.searchhotel.roomnumber;
        if (msg.Avatar) {
            item.Avatar = (msg.Avatar.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + msg.Avatar : msg.Avatar;
        }
        else {
            item.Avatar = 'https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x110.jpg';
        }
        var checkInDate = new Date(this.searchhotel.CheckInDate);
        var checkOutDate = new Date(this.searchhotel.CheckOutDate);
        item.CheckInDate = this.searchhotel.CheckInDate;
        item.CheckOutDate = this.searchhotel.CheckOutDate;
        item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_13__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_13__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_13__(checkInDate).format('YYYY');
        item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_13__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_13__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_13__(checkOutDate).format('YYYY');
        item.id = msg.HotelId;
        item.name = msg.Name;
        item.isType = 0;
        this.gf.setCacheSearch(item, 0);
        setTimeout(() => {
            this.navCtrl.navigateForward('/hoteldetail/' + msg.HotelId);
        }, 10);
    }
    doInfinite(infiniteScroll) {
        this.zone.run(() => {
            if (this.ishide == true) {
                if (this.co == 0 && this.loadpricedone) {
                    this.page = this.page + 1;
                    this.loaddata(this.authService, this.searchhotel, 1);
                    this._infiniteScroll = infiniteScroll;
                }
                else {
                    infiniteScroll.target.complete();
                }
            }
            else {
                infiniteScroll.target.complete();
            }
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
        });
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.datecin = new Date(this.searchhotel.CheckInDate);
            this.datecout = new Date(this.searchhotel.CheckOutDate);
            this.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_13__(this.datecin).format('DD/MM');
            this.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_13__(this.datecout).format('DD/MM');
            this.guest = this.searchhotel.child + this.searchhotel.adult;
            this.storage.get('auth_token').then(auth_token => {
                this.loginuser = auth_token;
            });
            this.storage.get('jti').then((uid) => {
                this.memberid = uid;
            });
            this.hasfilteragain = this.activeRoute.snapshot.paramMap.get('filteragain') == "true" ? true : false;
            if (this.hasfilteragain) {
                this.ishide = false;
                this.nodata = false;
                this.json1 = [];
                this.dataList = [];
                this.listHotelPrice = [];
                this.page = 1;
                this.name = this.searchhotel.gbmsg ? (this.searchhotel.gbmsg.regionName ? this.searchhotel.gbmsg.regionName : this.searchhotel.gbmsg.regionName) : this.authService.region;
                this.loaddata(this.authService, this.searchhotel, 1);
                if (this.hotelId && this.loginuser) {
                    this.likeItem(this.hotelId);
                }
                this.hasfilteragain = false;
            }
            this.rebuildFilter();
            this.gf.setActivatedTab(1);
        });
    }
    rebuildFilter() {
        if (this.searchhotel.location) {
            this.searchhotel.arrlocalcheck = this.searchhotel.location.split(',');
            this.hassortfilter = true;
        }
        if (this.searchhotel.facsearch) {
            this.searchhotel.arrfacilitycheck = this.searchhotel.facsearch.split(',');
            this.hassortfilter = true;
        }
        if (this.searchhotel.tagIds) {
            this.searchhotel.arrstylecheck = this.searchhotel.tagIds.split(',');
            this.hassortfilter = true;
        }
        if (this.searchhotel.classIds) {
            this.searchhotel.arrhoteltypecheck = this.searchhotel.classIds.split(',');
            this.hassortfilter = true;
        }
        if (this.searchhotel.minprice) {
            this.minprice = this.searchhotel.minprice.replace(/\./g, '').replace(/\,/g, '');
            this.maxprice = this.searchhotel.maxprice.replace(/\./g, '').replace(/\,/g, '');
        }
        else {
            this.minprice = null;
            this.maxprice = null;
        }
    }
    ionViewWillLeave() {
        this.searchhotel.arrlocalcheck = [];
    }
    goback() {
        this.navCtrl.navigateBack('/app/tabs/tab1');
    }
    filterAgain() {
        this.router.navigateByUrl('/searchhotelfilteragain');
    }
    clearFilter() {
        this.zone.run(() => {
            this.searchhotel.minprice = null;
            this.searchhotel.maxprice = null;
            this.searchhotel.star = [];
            this.searchhotel.review = 0;
            this.searchhotel.chuoi = "";
            this.searchhotel.recent = null;
            this.loadpricedone = false;
            this.nodata = false;
            this.json1 = [];
            this.dataList = [];
            this.page = 1;
            this.searchhotel.ischeckAL = false;
            this.ischeckAL = false;
            this.loaddata(this.authService, this.searchhotel, 0);
            this.hasfilteragain = false;
            this.clearSortAndFilter();
        });
    }
    searchAgain() {
        this.router.navigateByUrl('/');
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _search_hotel_filter_and_sort_search_hotel_filter_and_sort__WEBPACK_IMPORTED_MODULE_10__["SearchHotelFilterAndSortPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data == 'close') {
                    return;
                }
                this.zone.run(() => {
                    this.ishide = false;
                    this.loadpricedone = false;
                    this.nodata = false;
                    this.json1 = [];
                    this.dataList = [];
                    this.page = 1;
                    this.ischeckAL = this.searchhotel.ischeckAL;
                    this.name = this.searchhotel.gbmsg ? (this.searchhotel.gbmsg.regionName ? this.searchhotel.gbmsg.regionName : this.searchhotel.gbmsg.regionName) : this.authService.region;
                    this.loaddata(this.authService, this.searchhotel, 0);
                    this.hasfilteragain = false;
                });
            });
        });
    }
    showFilterAndSort() {
        this.presentModal();
        if (this.searchhotel.gbitem) {
            if (this.searchhotel.gbitem.regionName) {
                this.authService.region = this.searchhotel.gbitem.regionName;
            }
            if (this.searchhotel.gbitem.regionId) {
                this.authService.regionid = this.searchhotel.gbitem.regionId;
            }
            if (this.searchhotel.gbitem.regionCode) {
                this.authService.regioncode = this.searchhotel.gbitem.regionCode;
            }
        }
    }
    goToLogin() {
        this.valueGlobal.logingoback = "/hotellist/true";
        this.navCtrl.navigateForward('/login');
    }
    likeItem(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteHotel',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { hotelId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hotel-list",
                            func: "likeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hotel-list";
                        error.func = "likeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                    }
                    ;
                    se.hotelId = '';
                    if (se.json1.length > 0) {
                        se.zone.run(() => se.setItemLikeStatus(id));
                    }
                });
            }
            else {
                this.hotelId = id;
                this.router.navigateByUrl('/login');
            }
        });
    }
    unlikeItem(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { hotelId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hotel-list",
                            func: "unlikeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hotel-list";
                        error.func = "unlikeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (se.json1.length > 0) {
                        se.zone.run(() => se.setItemLikeStatus(id));
                    }
                    console.log(body);
                });
            }
            else {
                this.router.navigateByUrl('/login');
            }
        });
    }
    setItemLikeStatus(id) {
        this.json1.forEach(el => {
            if (el.HotelId == id) {
                el.Liked = !el.Liked;
            }
        });
    }
    ionViewWillEnter() {
    }
    goToLogout() {
        this.storage.get('auth_token').then(id_token => {
            if (id_token !== null) {
                this.storage.remove('auth_token');
                this.storage.remove('mail');
                this.storage.remove('username');
                this.storage.remove('jti');
                this.storage.remove('userInfoData');
                this.storage.remove('userRewardData');
                this.storage.remove('point');
                this.storage.remove('listblogtripdefault');
                this.fcm.getToken().then(token => {
                    this.gf.DeleteTokenOfUser(token, id_token, this.gf.getAppVersion());
                });
                this.router.navigateByUrl('/login');
            }
        });
    }
    reloadDataLike() {
        var se = this;
        if (se.json1 && se.json1.length > 0) {
            se.json1.forEach(item => {
                if (item.Liked && se.dataListLike.indexOf(item.HotelId) == -1) {
                    item.Liked = !item.Liked;
                }
            });
        }
    }
    sortAndFilterAgain() {
        this.presentModal();
        if (this.searchhotel.gbitem) {
            if (this.searchhotel.gbitem.regionName) {
                this.authService.region = this.searchhotel.gbitem.regionName;
            }
            if (this.searchhotel.gbitem.regionId) {
                this.authService.regionid = this.searchhotel.gbitem.regionId;
            }
            if (this.searchhotel.gbitem.regionCode) {
                this.authService.regioncode = this.searchhotel.gbitem.regionCode;
            }
        }
    }
    clearSortAndFilter() {
        this.zone.run(() => {
            this.searchhotel.meal1check = false;
            this.searchhotel.meal2check = false;
            this.searchhotel.meal3check = false;
            this.searchhotel.local0check = false;
            this.searchhotel.local1check = false;
            this.searchhotel.local2check = false;
            this.searchhotel.local3check = false;
            this.searchhotel.local4check = false;
            this.searchhotel.local5check = false;
            this.searchhotel.local6check = false;
            this.searchhotel.local7check = false;
            this.searchhotel.local8check = false;
            this.searchhotel.local9check = false;
            this.searchhotel.local10check = false;
            this.searchhotel.local11check = false;
            this.searchhotel.local12check = false;
            this.searchhotel.local13check = false;
            this.searchhotel.local14check = false;
            this.searchhotel.local15check = false;
            this.searchhotel.local16check = false;
            this.searchhotel.local17check = false;
            this.searchhotel.local18check = false;
            this.searchhotel.local19check = false;
            this.searchhotel.facility0check = false;
            this.searchhotel.facility1check = false;
            this.searchhotel.facility2check = false;
            this.searchhotel.facility3check = false;
            this.searchhotel.facility4check = false;
            this.searchhotel.facility5check = false;
            this.searchhotel.facility6check = false;
            this.searchhotel.facility7check = false;
            this.searchhotel.facility8check = false;
            this.searchhotel.facility9check = false;
            this.searchhotel.style0check = false;
            this.searchhotel.style1check = false;
            this.searchhotel.style2check = false;
            this.searchhotel.style3check = false;
            this.searchhotel.style4check = false;
            this.searchhotel.style5check = false;
            this.searchhotel.style6check = false;
            this.searchhotel.style7check = false;
            this.searchhotel.style8check = false;
            this.searchhotel.style9check = false;
            this.searchhotel.hoteltype0check = false;
            this.searchhotel.hoteltype1check = false;
            this.searchhotel.hoteltype2check = false;
            this.searchhotel.hoteltype3check = false;
            this.searchhotel.hoteltype4check = false;
            this.searchhotel.hoteltype5check = false;
            this.searchhotel.hoteltype6check = false;
            this.searchhotel.hoteltype7check = false;
            this.searchhotel.hoteltype8check = false;
            this.searchhotel.hoteltype9check = false;
            this.searchhotel.sortOrder = null;
            this.searchhotel.location = null;
            this.searchhotel.facsearch = null;
            this.searchhotel.tagIds = null;
            this.searchhotel.classIds = null;
            this.searchhotel.star = [];
            this.searchhotel.minprice = null;
            this.searchhotel.maxprice = null;
            this.searchhotel.review = null;
            this.searchhotel.location = "";
            this.searchhotel.facsearch = "";
            this.searchhotel.tagIds = "";
            this.searchhotel.classIds = "";
            this.searchhotel.arrfacilitycheck = [];
            this.searchhotel.arrhoteltypecheck = [];
            this.searchhotel.arrlocalcheck = [];
            this.searchhotel.arrstylecheck = [];
            this.searchhotel.arrtrademarkcheck = [];
            this.searchhotel.hasSortHotelList = "";
        });
        this.zone.run(() => {
            this.searchhotel.minprice = null;
            this.searchhotel.maxprice = null;
            this.searchhotel.star = [];
            this.searchhotel.review = 0;
            this.searchhotel.chuoi = "";
            this.searchhotel.recent = null;
            this.loadpricedone = false;
            this.nodata = false;
            this.json1 = [];
            this.dataList = [];
            this.page = 1;
            this.searchhotel.ischeckAL = false;
            this.ischeckAL = false;
            this.loaddata(this.authService, this.searchhotel, 0);
            this.hasfilteragain = false;
        });
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alertController = document.querySelector('ion-alert-controller');
            yield alertController.componentOnReady();
            const alert = yield alertController.create({
                message: "Phiên đăng nhập hết hạn. Nhấn OK để về trang đăng nhập hoặc nhấn Cancel để về màn hình chính.",
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('listblogtripdefault');
                            this.navCtrl.navigateBack('/tabs/tab1');
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('listblogtripdefault');
                            this.router.navigateByUrl('/login');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    changeinfo() {
        this.searchhotel.changeInfoFromPage = 'hotellist';
        this.valueGlobal.dayhot = [];
        this.valueGlobal.notSuggestDaily = [];
        this.valueGlobal.notSuggestDailyCB = [];
        this.navCtrl.navigateForward('/popupinfobkg');
    }
    doRefresh() {
        this.loadpricedone = false;
        this.nodata = false;
        this.json1 = [];
        this.dataList = [];
        this.listHotelPrice = [];
        this.page = 1;
        this.searchhotel.ischeckAL = false;
        this.ischeckAL = false;
        this.loaddata(this.authService, this.searchhotel, 0);
    }
    loadUserDataLike() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hotel-list",
                            func: "pushdata",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hotel-list";
                        error.func = "pushdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                se.dataListLike = JSON.parse(body);
                                se.reloadDataLike();
                            });
                        }
                        else {
                        }
                    }
                });
            }
        });
    }
};
HotelListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-hotel-list',
        template: __webpack_require__(/*! ./hotel-list.html */ "./src/app/hotel-list/hotel-list.html"),
        styles: [__webpack_require__(/*! ./hotel-list.scss */ "./src/app/hotel-list/hotel-list.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"],
        _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_12__["NativePageTransitions"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["ActivityService"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_14__["Facebook"]])
], HotelListPage);



/***/ })

}]);
//# sourceMappingURL=default~hotel-list-hotel-list-module~tabs-tabs-module.js.map