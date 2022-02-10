(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~hotel-list-hotel-list-module~tabs-tabs-module"],{

/***/ "./src/app/hotel-list/hotel-list.html":
/*!********************************************!*\
  !*** ./src/app/hotel-list/hotel-list.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"secondary\" style=\"position: absolute;\" (click)=\"goback()\">\n      <img style=\"height: 48px; padding: 8px;margin-left: -2px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n    </ion-buttons>\n\n    <ion-title class=\"text-title\" (click)=\"changeinfo()\">\n        {{name}}\n        <div><label class=\"text-hr\">{{cindisplayhr}} - {{coutdisplayhr}} | {{guest}} khách</label></div>\n      </ion-title>\n\n    <ion-buttons slot=\"primary\" (click)=\"showFilterAndSort()\">\n        <button ion-button icon-only class=\"btn-header\">\n            <img style=\"margin-left: 8px;\" src=\"./assets/imgs/ic_filter_b.svg\" >\n            <ion-badge *ngIf=\"searchhotel.hasSortHotelList\" class=\"cls-badge-filter\">{{searchhotel.hasSortHotelList}}</ion-badge>\n          </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list *ngIf=\"ishide==true\">\n        <div class=\"card-background-detailpage\">\n          <div *ngFor=\"let msg of json1; let i = index\">\n            <div class=\"row-item-hotellist\">\n              <!-- left image region-->\n              <div class=\"col-img-hotellist\">\n                <!-- <ion-thumbnail> -->\n                  <img  class=\"img-radius\" src={{msg.Avatar}} style=\"position:relative\" (click)=\"itemSelected(msg)\">\n                <!-- </ion-thumbnail> -->\n                  \n                  <div *ngIf=\"msg.Liked\" class=\"img-heart\" (click)=\"unlikeItem(msg.HotelId)\">\n                    <img src=\"./assets/imgs/heart-red.svg\" class=\"cls-img-content\" >\n                  </div>\n                  <div *ngIf=\"!msg.Liked\" class=\"img-heart\" (click)=\"likeItem(msg.HotelId)\">\n                    <img src=\"./assets/imgs/heart-empty.svg\" class=\"cls-img-content\" >\n                  </div>\n                  <div *ngIf=\"msg.PromotionDescriptionSubstring\" class=\"transbox_0\">\n                      {{msg.PromotionDescriptionSubstring}}\n                    </div>\n              </div>\n              <!-- right content region -->\n              <div class=\"col-description-hotellist\">\n                  <div  class=\"fix-height-123\">\n                      <div (click)=\"itemSelected(msg)\" >\n                      <h2 class=\"text-name\" >{{msg.Name}}\n                      </h2>\n                      <p>\n                          <img *ngIf=\"msg.Rating!=0\" src={{msg.Rating}}>\n                      </p>\n                      <p *ngIf=\"msg.SubLocation\" class=\"text\">\n                        <img style=\"height:10px\" src=\"./assets/ic_hoteldetail/group.svg\">\n                        <label style=\"color: #4f4f4f;margin-left: 5px\"> {{msg.SubLocation}}\n                        </label>\n                      </p>\n                      <div *ngIf=\"msg.AvgPoint>0\">\n                        <ion-row *ngIf=\"msg.AvgPoint>9 && msg.AvgPoint<=10\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Tuyệt vời\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>8 && msg.AvgPoint<=9\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Rất tốt\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>7 && msg.AvgPoint<=8\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Khá tốt\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>5 && msg.AvgPoint<=7\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Tạm được\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint<=5\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Không tốt\n                          </p>\n                        </ion-row>\n                    </div>\n                  </div>\n                    <div class=\"m-top-10\">\n                      <div *ngFor=\"let itemstyle of msg.StyleTag; let idx = index\" [ngClass]=\"(msg.StyleTag.length >=2 && ((msg.StyleTag[0].ID == 1 && msg.StyleTag[1].ID == 5) || (msg.StyleTag[0].ID == 5 && msg.StyleTag[1].ID == 1))) ? 'm-width-49' : ''\">\n                          <div *ngIf=\"idx < 2\" [ngClass]=\"idx == 1 ? 'sp-item-style m-right-0' : 'sp-item-style'\">{{itemstyle.Name}}</div>\n                      </div>\n                      \n                    </div>\n                    \n                    <div class=\"last-row\">\n                        <div *ngIf=\"loginuser || msg.IsShowPrice == 1\" >\n                          <div *ngIf=\"msg.DealType\"   [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                              <div style=\"font-weight: bold\">\n                                <div *ngIf=\"msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                </div>\n\n                                <div *ngIf=\"!msg.DealPrice && !msg.MinPriceOTAStr\" class=\"text-combo\" text-left class=\"p-top-dealtype\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                </div>\n                                <div *ngIf=\"!msg.DealPrice && msg.MinPriceOTAStr\" text-left class=\"p-top-minprice\">\n                                  <label >{{msg.RoomNameSubString}}</label>\n                                </div>\n                               \n                                <div  *ngIf=\"msg.DealPrice\" text-right class=\"p-top-10  price\">\n                                  <label *ngIf=\"msg.DealPrice!=0 && msg.HasCheckPrice\" class=\"label-dealprice\">{{ msg.DealPrice }} đ</label>\n                                </div>\n                                <div  *ngIf=\"!msg.DealPrice && msg.HasCheckPrice && msg.MinPriceOTAStr\" text-right class=\"p-top-10  price\">\n                                  <label *ngIf=\"!msg.DealPrice && msg.MinPriceOTAStr && msg.HasCheckPrice\" class=\"label-minprice\">{{ msg.MinPriceOTAStr }} đ</label>\n                                </div>\n                                <div  *ngIf=\"!msg.DealPrice && msg.HasCheckPrice && !msg.MinPriceOTAStr\" text-right class=\"have-not-dealprice\">\n                                  <label *ngIf=\"msg.HasCheckPrice && !msg.DealPrice\" class=\"label-dealprice\">Giá ưu đãi</label>\n                                </div>\n                              </div>\n                            </div>\n                            <div *ngIf=\"!msg.DealType\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                              <div text-right *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr && msg.MinPriceTAStr && msg.MinPriceOTAStr!=msg.MinPriceTAStr && msg.MinPriceTAStr!=0 && msg.MinPriceOTAStr<msg.MinPriceTAStr && loginuser\" class=\"label-minpriceTA\">{{msg.MinPriceTAStr}} đ</div>\n                              <div >\n                                <div col-7 class=\"text-nameroom\" text-left class=\"p-top-minprice\">\n                                  <label >{{msg.RoomNameSubString}}</label>\n                                </div>\n                                <div col-5 text-right class=\"p-top-10 price\">\n                                  <div>\n                                      <label *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr\" class=\"label-minprice\">{{msg.MinPriceOTAStr}} đ</label>\n                                      <label *ngIf=\"msg.HasCheckPrice && !msg.MinPriceOTAStr\" class=\"label-minprice\">Hết phòng</label>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                            <div *ngIf=\"!loginuser && (!msg.IsShowPrice || msg.IsShowPrice == 2)\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\" (click)=\"goToLogin()\">\n                                <div *ngIf=\"msg.DealType\">\n                                    <div>\n                                        <div>\n                                            <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                        </div>\n                                      </div>\n                                </div>\n                              <div *ngIf=\"!msg.DealType\">\n                                <div>\n                                    <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      \n                    </div>\n              </div>\n            </div>\n            <p class=\"h-line\"></p>\n          </div>\n        </div>\n  </ion-list>\n\n  \n  <div *ngIf=\"ishide==false\" style=\"text-align: center\">\n    <ion-item-group  *ngFor=\"let item of itemsSkeleton\">\n        <ion-row class=\"row-item-hotellist-sk\">\n            <ion-col size=\"4\" class=\"col-img-hotellist-sk\" >\n                <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"8\" class=\"col-description-hotellist-sk\" style=\"line-height: 18px;padding-top: 0\">\n                <div style=\"height: 100%\">\n                  <h2 class=\"text-name-sk\" >\n                      <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                  </h2>\n                  <p class=\"p-sk\">\n                      <ion-skeleton-text animated style=\"width: 50%;margin: 0\"></ion-skeleton-text>\n                  </p>\n                  <div class=\"last-row-sk\">\n                      <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                  </div>\n                </div>\n              </ion-col>\n        </ion-row>\n        <p class=\"h-line-sk\"></p>\n    </ion-item-group>\n  </div>\n  <div *ngIf=\"nodata\" style=\"text-align: center;margin-top: 10px\">\n    <img src=\"./assets/imgs/empty.svg\">\n    <div style=\"padding:0 16px; text-align: center\">\n      <p class=\"text-empty\" style=\"text-align: center\">Không tìm thấy kết quả tìm kiếm. Vui lòng chọn lại!</p>\n    </div>\n    <div>\n      <ion-row *ngIf=\"hasfilter==true && hassortfilter==false\">\n        <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-left\" (click)=\"filterAgain()\">Lọc lại</button></ion-col>\n        <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-right\" (click)=\"clearFilter()\">Xóa lọc</button></ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"hasfilter==false && hassortfilter==false\">\n        <button ion-button round outline class=\"button btn-filter-again-nofilter\" (click)=\"searchAgain()\">Tìm kiếm lại</button>\n      </ion-row>\n      <ion-row *ngIf=\"hassortfilter==true\">\n        <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-left\" (click)=\"sortAndFilterAgain()\">Lọc lại</button></ion-col>\n        <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-right\" (click)=\"clearSortAndFilter()\">Xóa lọc</button></ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"page < totalPage\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>"

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

module.exports = ".header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  text-align: center;\n  padding: 0px;\n  margin-left: -6px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 0;\n}\n\np {\n  line-height: 16px;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 17px;\n  text-align: left;\n  letter-spacing: -0.4px;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 4px;\n  letter-spacing: -0.34px;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 123px !important;\n  --border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .badge.badge-ios {\n  background-color: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.m-left {\n  margin-left: 11px;\n}\n\n.m-right {\n  margin-right: 11px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 94%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 16px;\n  height: 48px;\n  margin-top: 16px;\n}\n\n.text-empty {\n  color: #828282;\n}\n\n.img-heart {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 13px;\n  margin-top: 13px;\n  width: 16px;\n  height: 16px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 123px;\n}\n\n.p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  max-width: 53%;\n}\n\n.p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  letter-spacing: -0.51px;\n  font-size: 18px;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 8px;\n  top: -16px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  letter-spacing: -0.51px;\n  font-size: 18px;\n}\n\n.p-top-minprice {\n  top: 10px;\n  font-size: 12px;\n  max-width: 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  position: absolute;\n  right: 8px;\n  width: 100%;\n  bottom: -1px;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 123px;\n  position: absolute;\n}\n\n.badge-ios {\n  background-color: #26bed6;\n  font-size: 12px;\n}\n\n.btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n.ico-gift {\n  height: 16px;\n  position: absolute;\n  right: 90px;\n  top: 6px;\n  color: #e52822;\n}\n\n.col-description-hotellist {\n  position: relative;\n  margin-top: 13px;\n  left: 112px;\n  width: 70%;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 73%;\n  }\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  border-radius: 6px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n.m-top-5 {\n  margin-top: 5px;\n}\n\n.m-top-10 {\n  margin-top: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  color: #26bed6;\n  background: #ffffff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-height: 17px;\n}\n\n.fix-height-123 {\n  height: 123px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: 0;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n  margin-bottom: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  line-height: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  font-size: 10px;\n  color: #26bed6;\n  background: #ffffff;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n\n.m-right-0 {\n  margin-right: 0;\n}\n\n.m-width-49 {\n  max-width: 49%;\n}\n\n.m-width-49 .sp-item-style {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.div-title-header {\n  margin-top: env(safe-area-inset-top);\n}\n\n.div-title-header .img-back {\n  height: 48px;\n  padding: 8px;\n  position: absolute;\n  left: 0px;\n  top: -2px;\n  z-index: 99;\n}\n\n.div-title-header .img-filter {\n  position: absolute;\n  right: 0;\n  top: -2px;\n  height: 48px;\n  padding: 16px;\n  z-index: 99;\n}\n\n.have-not-dealprice {\n  bottom: -2px;\n  position: absolute;\n  right: 8px;\n}\n\n.text-change {\n  font-size: 12px;\n  color: #26bed6;\n  text-decoration: underline;\n}\n\n.text-hr {\n  font-size: 11px;\n  color: #222222;\n  font-weight: 500;\n}\n\n.cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: transparent !important;\n  padding-top: 2px;\n  font-size: 10px;\n  top: 8px !important;\n  right: 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2hvdGVsLWxpc3QvaG90ZWwtbGlzdC5zY3NzIiwic3JjL2FwcC9ob3RlbC1saXN0L2hvdGVsLWxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFRTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNBSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0o7O0FEQ0U7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFJQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQWdDLHVDQUFBO0VBQ2hDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFRTtFQUVFLGtCQUFBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDQU47O0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7RUFJQSxZQUFBO0FDQ0o7O0FEQ0U7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBRUUsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxh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c2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIC5oZWFkZXItdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5oZWFkZXItaWNvbntcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcbiAgfVxuICAudGV4dC10aXRsZVxuICB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgcHtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuICAudGV4dC1uYW1lXG4gIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAvL21heC13aWR0aDogMjE2cHg7XG4gIH1cbiAgLnRleHR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tdG9wOjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgfVxuICAuYmFkZ2UtbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICB9XG4gIC5pbWctcmFkaXVzXG4gIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTIzcHggIWltcG9ydGFudDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgLmNvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnRleHQtbmFtZXJvb21cbiAge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgIFxuICB9IFxuICAudGV4dC1jb21ib1xuICB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgfVxuICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgfVxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgXG5cbiAgLmlvbi10aHVtYm5haWx7XG4gICAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuICB9XG4gIC5iYWRnZS5iYWRnZS1pb3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmxhYmVsLWJhZGdle1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgfVxuXG4gIC5pdGVtLWJsb2Nre1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgfVxuICAvKmNzcyBjaG8gaW9zKi9cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuICAuaXRlbS1pb3MgLnRyYW5zYm94IHsgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cbi5pdGVtLWlvcyAudHJhbnNib3gxIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxMnB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4gIH1cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4gIC5pdGVtLWlvcyAudHJhbnNib3gyIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxM3B4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4gIH1cbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLml0ZW0taW9zIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgbWFyZ2luOjAgMTFweDtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xuICB9XG5cbiAgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbiAgfVxuXG4gIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmxhYmVsLWlvcyB7XG4gICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4gIH1cbiAgLypjc3MgY2hvIGlvcyovXG5cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gY8OzIHJhdGluZyAmIGxvY2F0aW9uXG4gIC5pdGVtLW1kIC50cmFuc2JveCB7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206IDE4cHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4uaXRlbS1tZCAudHJhbnNib3gxIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxMnB4O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4gIH1cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4gIC5pdGVtLW1kIC50cmFuc2JveDIgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEzcHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbiAgfVxuXG4gIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICAuaXRlbS1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIG1hcmdpbjowIDExcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbiAgfVxuICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gIH1cbiAgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAubGFiZWwtbWQge1xuICAgIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xuICB9XG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgXG4gIC5wcmljZS5jb2x7XG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xuICB9XG4gIFxufVxuLm0tbGVmdHtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG4ubS1yaWdodHtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuLmJ0bi1jbGVhci1maWx0ZXJ7XG4gIGJvcmRlcjpub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5NCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW57XG4gIGNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6NDhweDtcbn1cbi5idG4tZmlsdGVyLWFnYWluLW5vZmlsdGVye1xuICBib3JkZXI6bm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi50ZXh0LWVtcHR5e1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5pbWctaGVhcnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAtNHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNscy1pbWctY29udGVudHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4uY2xzLWljb24tY29udGVudHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5sYWJlbC1wcmljZS1sb2dpbntcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHQtbG9naW57XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG4gIC50cmFuc2JveF8wIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA0cHg7XG4gIH1cbiAgcCxoMntcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnJvdy1pdGVtLWhvdGVsbGlzdHtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgaGVpZ2h0OiAxMjNweDtcbiAgfVxuXG4gIC5wLXRvcC1kZWFsdHlwZXtcbiAgICB0b3A6OXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gICAgbWF4LXdpZHRoOiA1MyU7XG4gIH1cbiAgLnAtdG9wLWRlYWx0eXBlLTZ7XG4gICAgdG9wOjVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICB9XG4gIC5sYWJlbC1taW5wcmljZXtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gIH1cbiAgLmxhYmVsLW1pbnByaWNlVEF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOHB4O1xuICAgIHRvcDogLTE2cHg7XG4gIH1cbiAgLmxhYmVsLWRlYWxwcmljZXtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gIH1cbiAgLnAtdG9wLW1pbnByaWNle1xuICAgIHRvcDoxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbiAgLnAtdG9wLTh7XG4gICAgdG9wOjhweDtcbiAgfVxuICAucC10b3AtMTB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAtMXB4O1xuICB9XG4gIC5wLXRvcC0xOHtcbiAgICBwYWRkaW5nLXRvcDogMThweDtcbiAgfVxuICAuaC1saW5le1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAuY29sLWltZy1ob3RlbGxpc3R7XG4gICAgLy9oZWlnaHQ6IDEwOXB4O1xuICAgIGhlaWdodDogMTIzcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5iYWRnZS1pb3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmJ0bi1oZWFkZXJ7XG4gICAgd2lkdGg6IDQ4cHg7Y29sb3I6ICM0ZjRmNGY7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuLmljby1naWZ0e1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDkwcHg7XG4gIHRvcDogNnB4O1xuICBjb2xvcjogI2U1MjgyMjtcbn1cbi5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGxlZnQ6IDExMnB4O1xuICB3aWR0aDogNzAlO1xufVxuICBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gICAgICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIH1cbiAgICAgIC5wLXRvcC0xMHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWxvZ2lue1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4gICAgICAgIHdpZHRoOjczJTtcbiAgICAgIH1cbiAgICB9XG4gICAgOmhvc3R7XG4gICAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG4gICAgfVxuICAgIGlvbi1iYWRnZXtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG4gICAgLmxhYmVsLWJhZGdle1xuICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICA6Om5nLWRlZXB7XG4gICAgICAuaW5maW5pdGUtbG9hZGluZy10ZXh0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLy9za2VsZXRvbi1zdHlsZVxuICAgICAgaW9uLXNrZWxldG9uLXRleHR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb2wtaW1nLWhvdGVsbGlzdC1za3tcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LW5hbWUtc2tcbiAgICAgIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgIH1cbiAgICAgIC5wLXNre1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAubGFzdC1yb3ctc2t7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICB9XG4gICAgICAucm93LWl0ZW0taG90ZWxsaXN0LXNre1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOjE2cHg7XG4gICAgICB9XG4gICAgICAuaC1saW5lLXNre1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgIH1cbiAgICAubS10b3AtNXtcbiAgICAgIG1hcmdpbi10b3A6NXB4O1xuICAgIH1cbiAgICAubS10b3AtMTB7XG4gICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgfVxuICAgIC5zcC1pdGVtLXN0eWxle1xuICAgICAgcGFkZGluZzozcHggNXB4O1xuICAgICAgYm9yZGVyOnNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgbWF4LWhlaWdodDogMTdweDtcbiAgICB9XG4gICAgLmZpeC1oZWlnaHQtMTIze1xuICAgICAgaGVpZ2h0OiAxMjNweDtcbiAgICB9XG4gICAgLmxhc3Qtcm93e1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOjA7XG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY2xzLWxpbmVoZWlnaHR7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICB9XG5cbiAgICAubS10b3AtMTB7XG4gICAgICBtYXJnaW4tdG9wOjZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206MTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5zcC1pdGVtLXN0eWxle1xuICAgICAgcGFkZGluZzozcHggNXB4O1xuICAgICAgYm9yZGVyOnNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG5cbiAgICAubS1yaWdodC0we1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAubS13aWR0aC00OXtcbiAgICAgIG1heC13aWR0aDogNDklO1xuICAgICAgXG4gICAgICAuc3AtaXRlbS1zdHlsZXtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi10aXRsZS1oZWFkZXJ7XG4gICAgICBtYXJnaW4tdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgICAuaW1nLWJhY2t7XG4gICAgICAgIGhlaWdodDogNDhweDsgcGFkZGluZzogOHB4O3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OiAwcHg7dG9wOiAtMnB4O1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgIH1cbiAgICAgIC5pbWctZmlsdGVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDA7dG9wOiAtMnB4O2hlaWdodDogNDhweDtwYWRkaW5nOiAxNnB4O1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmhhdmUtbm90LWRlYWxwcmljZXtcbiAgICAgIC8vYm90dG9tOiAwcHg7XG4gICAgICBib3R0b206IC0ycHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogOHB4O1xuICAgIH1cbi50ZXh0LWNoYW5nZVxue1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi50ZXh0LWhyXG57XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jbHMtYmFkZ2UtZmlsdGVyIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcblxuICB0b3A6IDhweCAhaW1wb3J0YW50O1xuICByaWdodDogNHB4ICFpbXBvcnRhbnQ7XG59IiwiLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tbGVmdDogLTZweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG5cbi5iYWRnZS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG5cbi5pbWctcmFkaXVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEyM3B4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMXB4O1xuICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRleHQtbmFtZXJvb20ge1xuICB3aWR0aDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZXh0LWNvbWJvIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKmNzcyBjaG8gaW9zKi9cbiAgLypjc3MgY2hvIGlvcyovXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pb24tdGh1bWJuYWlsIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5iYWRnZS5iYWRnZS1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWJhZGdlIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1ibG9jayB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogNC40cmVtO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIG1hcmdpbjogMCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMThweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTJweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTNweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtbWQge1xuICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAucHJpY2UuY29sIHtcbiAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xufVxuXG4ubS1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG5cbi5tLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4uYnRuLWNsZWFyLWZpbHRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogOTQlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5idG4tZmlsdGVyLWFnYWluIHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2Fpbi1ub2ZpbHRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRleHQtZW1wdHkge1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmltZy1oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAtNHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY2xzLWltZy1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5jbHMtaWNvbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxhYmVsLXByaWNlLWxvZ2luIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRyYW5zYm94XzAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNHB4O1xufVxuXG5wLCBoMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJvdy1pdGVtLWhvdGVsbGlzdCB7XG4gIG1hcmdpbjogMTZweDtcbiAgaGVpZ2h0OiAxMjNweDtcbn1cblxuLnAtdG9wLWRlYWx0eXBlIHtcbiAgdG9wOiA5cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBtYXgtd2lkdGg6IDUzJTtcbn1cblxuLnAtdG9wLWRlYWx0eXBlLTYge1xuICB0b3A6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG5cbi5sYWJlbC1taW5wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmxhYmVsLW1pbnByaWNlVEEge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzgyODI4MjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICB0b3A6IC0xNnB4O1xufVxuXG4ubGFiZWwtZGVhbHByaWNlIHtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucC10b3AtbWlucHJpY2Uge1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ucC10b3AtOCB7XG4gIHRvcDogOHB4O1xufVxuXG4ucC10b3AtMTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IC0xcHg7XG59XG5cbi5wLXRvcC0xOCB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuXG4uaC1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb2wtaW1nLWhvdGVsbGlzdCB7XG4gIGhlaWdodDogMTIzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJhZGdlLWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi1oZWFkZXIge1xuICB3aWR0aDogNDhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaWNvLWdpZnQge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDkwcHg7XG4gIHRvcDogNnB4O1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGxlZnQ6IDExMnB4O1xuICB3aWR0aDogNzAlO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5wLXRvcC0xMCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnRleHQtbG9naW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICAgIHdpZHRoOiA3MyU7XG4gIH1cbn1cbjpob3N0IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xufVxuXG5pb24tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5sYWJlbC1iYWRnZSB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjo6bmctZGVlcCAuaW5maW5pdGUtbG9hZGluZy10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLmNvbC1pbWctaG90ZWxsaXN0LXNrIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAudGV4dC1uYW1lLXNrIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAucC1zayB7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAubGFzdC1yb3ctc2sge1xuICBwYWRkaW5nLXRvcDogNTJweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuOjpuZy1kZWVwIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5oLWxpbmUtc2sge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubS10b3AtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm0tdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNwLWl0ZW0tc3R5bGUge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWF4LWhlaWdodDogMTdweDtcbn1cblxuLmZpeC1oZWlnaHQtMTIzIHtcbiAgaGVpZ2h0OiAxMjNweDtcbn1cblxuLmxhc3Qtcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNscy1saW5laGVpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5tLXRvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnNwLWl0ZW0tc3R5bGUge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5tLXJpZ2h0LTAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5tLXdpZHRoLTQ5IHtcbiAgbWF4LXdpZHRoOiA0OSU7XG59XG4ubS13aWR0aC00OSAuc3AtaXRlbS1zdHlsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGl2LXRpdGxlLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbn1cbi5kaXYtdGl0bGUtaGVhZGVyIC5pbWctYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAtMnB4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5kaXYtdGl0bGUtaGVhZGVyIC5pbWctZmlsdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAtMnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4uaGF2ZS1ub3QtZGVhbHByaWNlIHtcbiAgYm90dG9tOiAtMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG59XG5cbi50ZXh0LWNoYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udGV4dC1ociB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jbHMtYmFkZ2UtZmlsdGVyIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdG9wOiA4cHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDRweCAhaW1wb3J0YW50O1xufSJdfQ== */"

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
                    this.gf.setCacheSearch(item, 1);
                    se.doRefresh();
                }
            });
        });
    }
    ngOnDestroy() {
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
                se.jsonhtprice = [];
                se.listHotelPrice = [];
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
                        se.json1 = data;
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
                if (se.nodata) {
                    se.json1 = [];
                }
            });
        });
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
                    se.json1[index].HasCheckPrice = true;
                    for (let i = 0; i < se.listHotelPrice.length; i++) {
                        if (se.json1[index] && se.json1[index].HotelId == se.listHotelPrice[i].HotelId) {
                            se.json1[index].MinPriceOTAStr = se.listHotelPrice[i].MinPriceOTAStr;
                            se.json1[index].MinPriceTAStr = se.listHotelPrice[i].MinPriceTAStr;
                            se.json1[index].RoomNameSubString = se.listHotelPrice[i].RoomNameSubString.replace('...', '');
                            se.json1[index].PromotionDescription = se.listHotelPrice[i].PromotionDescription;
                            se.json1[index].PromotionDescriptionSubstring = se.listHotelPrice[i].PromotionDescriptionSubstring;
                        }
                    }
                }
                var arrid = se.listHotelPrice.map(x => x.HotelId);
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
                    se.json1 = [];
                    for (let i = 0; i < jsontemp.length; i++) {
                        const element = jsontemp[i];
                        if (element.DealType) {
                            if (element.DealPrice && element.HasCheckPrice && element.MinPriceOTAStr) {
                                se.json1.push(element);
                            }
                        }
                        else {
                            if (element.HasCheckPrice && element.MinPriceOTAStr) {
                                se.json1.push(element);
                            }
                        }
                    }
                }
                resolve(se.json1);
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
            yield se.onEnter();
            se.subscription = se.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"] && (event.url === 'searchhotelfilterandsort' || event.url === 'searchhotelfilteragain' || event.url === '/hotellist/true' || event.url === '/app/tabs/hotellist/true')) {
                    se.onEnter();
                    setTimeout(() => {
                        se.onEnter();
                    }, 500);
                }
            });
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
        this.valueGlobal.logingoback = "/hotellist/false";
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