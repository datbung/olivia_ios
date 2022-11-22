(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hotel-list-mood-hotel-list-mood-module"],{

/***/ "./src/app/hotel-list-mood/hotel-list-mood.html":
/*!******************************************************!*\
  !*** ./src/app/hotel-list-mood/hotel-list-mood.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-row style=\"padding-top: 11px\">\n    <ion-col size=\"2\" class=\"header-text header-icon\" (click)=\"goback()\">\n        <!-- <ion-icon color=\"dark-tint\" style=\"font-size: 2em\" name=\"arrow-back\" class=\"card-title\">\n        </ion-icon> -->\n        <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n    </ion-col>\n    <ion-col size=\"8\" class=\"header-text\">\n        <ion-title class=\"text-title\">\n          {{title}}\n          </ion-title>\n    </ion-col>\n    <ion-col *ngIf=\"ishide\" size=\"2\">\n      <img (click)=\"showFilter()\" style=\"height: 48px; padding: 13px; padding-top: 18px; padding-right: 10px;\"\n        src=\"./assets/imgs/ic_filter_b.svg\" />\n      <ion-badge class=\"cls-badge-filter\"></ion-badge>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content>\n   \n  <ion-list *ngIf=\"ishide==true\">\n      <div class=\"card-background-detailpage\">\n        <div *ngFor=\"let msg of json1; let i = index\">\n          <div class=\"row-item-hotellist\">\n            <!-- left image region-->\n            <div class=\"col-img-hotellist\">\n                <img  class=\"img-radius\" src={{msg.Avatar}} style=\"position:relative\" (click)=\"itemSelected(msg)\">\n                <div *ngIf=\"msg.Liked\" class=\"img-heart\" (click)=\"unlikeItem(msg.HotelId)\">\n                  <img src=\"./assets/imgs/heart-red.svg\" class=\"cls-img-content\" >\n                </div>\n                <div *ngIf=\"!msg.Liked\" class=\"img-heart\" (click)=\"likeItem(msg.HotelId)\">\n                  <img src=\"./assets/imgs/heart-empty.svg\" class=\"cls-img-content\" >\n                </div>\n                <div *ngIf=\"msg.PromotionDescriptionSubstring\" class=\"transbox_0\">\n                    {{msg.PromotionDescriptionSubstring}}\n                  </div>\n            </div>\n            <!-- right content region -->\n            <div class=\"col-description-hotellist\">\n                <div  class=\"fix-height-104\">\n                    <div (click)=\"itemSelected(msg)\" >\n                    <h2 class=\"text-name\" >{{msg.Name}}\n                    </h2>\n                    <p>\n                        <img *ngIf=\"msg.Rating!=0\" src={{msg.Rating}}>\n                    </p>\n                    <p *ngIf=\"msg.SubLocation\" class=\"text\">\n                      <img style=\"height:10px\" src=\"./assets/ic_hoteldetail/group.svg\">\n                      <label style=\"color: #4f4f4f;margin-left: 5px\"> {{msg.SubLocation}}\n                      </label>\n                    </p>\n                    <div *ngIf=\"msg.AvgPoint>0\">\n                      <ion-row *ngIf=\"msg.AvgPoint>9 && msg.AvgPoint<=10\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Tuyệt vời\n                        </p>\n                      </ion-row>\n                      <ion-row *ngIf=\"msg.AvgPoint>8 && msg.AvgPoint<=9\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Rất tốt\n                        </p>\n                      </ion-row>\n                      <ion-row *ngIf=\"msg.AvgPoint>7 && msg.AvgPoint<=8\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Khá tốt\n                        </p>\n                      </ion-row>\n                      <ion-row *ngIf=\"msg.AvgPoint>5 && msg.AvgPoint<=7\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Tạm được\n                        </p>\n                      </ion-row>\n                      <ion-row *ngIf=\"msg.AvgPoint<=5\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Không tốt\n                        </p>\n                      </ion-row>\n                  </div>\n                </div>\n                  <!-- <div class=\"m-top-10\">\n                    <div *ngFor=\"let itemstyle of msg.StyleTag; let idx = index\">\n                        <div *ngIf=\"idx < 2\" class=\"sp-item-style\">{{itemstyle.Name}}</div>\n                    </div>\n                    \n                  </div> -->\n                  <!-- last row -->\n                  <div class=\"last-row\">\n                      <div *ngIf=\"loginuser || msg.IsShowPrice == 1\" >\n                        <div *ngIf=\"msg.dealType\"   [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                            <div style=\"font-weight: bold\">\n                              <div *ngIf=\"msg.dealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype\">\n                                <img src=\"./assets/ic_combo.svg\">\n                                <label class=\"cls-lineheight\">{{msg.dealType}}</label>\n                              </div>\n                              <div *ngIf=\"!msg.dealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype-6\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.dealType}}</label>\n                                </div>\n                              <div  *ngIf=\"msg.dealPrice\" text-right class=\"p-top-10  price\">\n                                <label *ngIf=\"msg.dealPrice!=0\" class=\"label-dealprice\">{{ msg.dealPrice }} đ</label>\n                              </div>\n                              <div  *ngIf=\"!msg.dealPrice\" text-right class=\"p-top-10 price\">\n                                <ion-icon class=\"ico-gift\" name=\"gift\"></ion-icon>\n                                <label *ngIf=\"!msg.dealPrice\" class=\"label-dealprice\">Giá ưu đãi!</label>\n                              </div>\n                            </div>\n                          </div>\n                          <div *ngIf=\"!msg.dealType\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                            <div text-right *ngIf=\"msg.MinPriceOTAStr && msg.MinPriceTAStr && msg.MinPriceOTAStr!=msg.MinPriceTAStr && msg.MinPriceTAStr!=0 && msg.MinPriceOTAStr<msg.MinPriceTAStr && loginuser\" class=\"label-minpriceTA\">{{msg.MinPriceTAStr}} đ</div>\n                            <div >\n                              <div col-7 class=\"text-nameroom\" text-left class=\"p-top-minprice\">\n                                <label >{{msg.RoomNameSubString}}</label>\n                              </div>\n                              <div col-5 text-right class=\"p-top-10 price\">\n                                <div>\n                                    <label *ngIf=\"loadpricedone && msg.MinPriceOTAStr\" class=\"label-minprice\">{{msg.MinPriceOTAStr}} đ</label>\n                                    <label *ngIf=\"loadpricedone && !msg.MinPriceOTAStr\" class=\"label-minprice\">Hết phòng</label>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                          <div *ngIf=\"!loginuser && (!msg.IsShowPrice || msg.IsShowPrice == 2)\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\" (click)=\"goToLogin()\">\n                              <div *ngIf=\"msg.dealType\">\n                                  <div>\n                                      <div>\n                                          <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                      </div>\n                                    </div>\n                              </div>\n                            <div *ngIf=\"!msg.dealType\">\n                              <div>\n                                  <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                              </div>\n                            </div>\n                          </div>\n                    </div>\n                    \n                  </div>\n            </div>\n          </div>\n          <p class=\"h-line\"></p>\n        </div>\n      \n      </div>\n  </ion-list>\n\n  <!-- <div *ngIf=\"ishide==false\" style=\"text-align: center;margin-top: 10px\">\n    <img src=\"./assets/imgs/placeholder.svg\">\n  </div> -->\n  <div *ngIf=\"ishide==false\" style=\"text-align: center;margin-top: 10px\">\n    <ion-item-group  *ngFor=\"let item of itemsSkeleton\">\n        <ion-row class=\"row-item-hotellist-sk\">\n            <ion-col size=\"4\" class=\"col-img-hotellist-sk\" >\n                <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col size=\"8\" class=\"col-description-hotellist-sk\" style=\"line-height: 18px;padding-top: 0\">\n                <div style=\"height: 100%\">\n                  <h2 class=\"text-name-sk\" >\n                      <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                  </h2>\n                  <p class=\"p-sk\">\n                      <ion-skeleton-text animated style=\"width: 50%;margin: 0\"></ion-skeleton-text>\n                  </p>\n                  <div class=\"last-row-sk\">\n                      <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                  </div>\n                </div>\n              </ion-col>\n        </ion-row>\n        <p class=\"h-line-sk\"></p>\n    </ion-item-group>\n  </div>\n  <!-- <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/hotel-list-mood/hotel-list-mood.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/hotel-list-mood/hotel-list-mood.module.ts ***!
  \***********************************************************/
/*! exports provided: HotelListMoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListMoodPageModule", function() { return HotelListMoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hotel_list_mood__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotel-list-mood */ "./src/app/hotel-list-mood/hotel-list-mood.ts");







let HotelListMoodPageModule = class HotelListMoodPageModule {
};
HotelListMoodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hotel_list_mood__WEBPACK_IMPORTED_MODULE_6__["HotelListMoodPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _hotel_list_mood__WEBPACK_IMPORTED_MODULE_6__["HotelListMoodPage"]
                }
            ])
        ],
    })
], HotelListMoodPageModule);



/***/ }),

/***/ "./src/app/hotel-list-mood/hotel-list-mood.scss":
/*!******************************************************!*\
  !*** ./src/app/hotel-list-mood/hotel-list-mood.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 3px;\n  text-align: center;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 0;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 104px !important;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .badge.badge-ios {\n  background-color: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 40px;\n  height: 48px;\n}\n\n.text-empty {\n  color: #828282;\n}\n\n.img-heart {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 13px;\n  margin-top: 13px;\n  width: 16px;\n  height: 16px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n}\n\n.p-top-dealtype {\n  top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  position: absolute;\n  max-width: 50%;\n}\n\n.ico-gift {\n  color: #e52822;\n}\n\n.p-top-dealtype-6 {\n  top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  position: absolute;\n  max-width: 50%;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 18px;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 16px;\n}\n\n.p-top-minprice {\n  bottom: 0;\n  font-size: 12px;\n  position: absolute;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  top: 10px;\n  padding-right: 0;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 104px;\n  position: absolute;\n}\n\n.badge-ios {\n  background-color: #26bed6;\n  font-size: 12px;\n}\n\n.btn-header {\n  margin-right: 15px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.toolbar-title {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: auto !important;\n  text-overflow: unset !important;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 0;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotelmood {\n    max-width: 188px;\n    left: 12px;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n  }\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  border-radius: 6px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n.col-description-hotellist {\n  position: relative;\n  left: 112px;\n  width: 68%;\n}\n\n.m-top-5 {\n  margin-top: 5px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n  margin-bottom: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  line-height: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  font-size: 10px;\n  color: #26bed6;\n  background: #ffffff;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n\n.fix-height-104 {\n  height: 104px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: -1px;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 71%;\n  }\n}\n\n.cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: #26bed6;\n  padding-top: 2px;\n  font-size: 10px;\n  top: 16px !important;\n  left: 68% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9ob3RlbC1saXN0LW1vb2QvaG90ZWwtbGlzdC1tb29kLnNjc3MiLCJzcmMvYXBwL2hvdGVsLWxpc3QtbW9vZC9ob3RlbC1saXN0LW1vb2Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENFO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENFO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0dKOztBRERFO0VBRUUsa0JBQUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUNHTjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUlBLFlBQUE7QUNJSjs7QURGRTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSUo7O0FEREU7RUFFRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNJSjs7QURGRTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFtQ0osY0FBQTtFQXFFQSxjQUFBO0VBRUEsa0JBQUE7RUFrRUEsa0JBQUE7QUNwS0Y7O0FESkU7RUFDRSwyQkFBQTtBQ01KOztBREpFO0VBQ0Us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QUFBO0VBQ0EsV0FBQTtBQ2NOOztBRFpJO0VBQ0UsaUJBQUE7QUNlTjs7QURaSTtFQUNFO0lBQ0UsVUFBQTtFQ2VOOztFRGJJO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQ2dCTjs7RURkSTtJQUNFLGVBQUE7RUNpQk47QUFDRjs7QURkSTtFQUNFO0lBQ0UsVUFBQTtFQ2dCTjtBQUNGOztBRGRJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxvQkFBQTtBQ2VOIiwiZmlsZSI6InNyYy9hcHAvaG90ZWwtbGlzdC1tb29kL2hvdGVsLWxpc3QtbW9vZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5oZWFkZXItdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5oZWFkZXItaWNvbntcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRleHQtdGl0bGVcbiAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC50ZXh0LW5hbWVcbiAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLnRleHR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAuYmFkZ2UtbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICB9XG4gIC5pbWctcmFkaXVzXG4gIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTA0cHggIWltcG9ydGFudDtcbiAgfVxuICAuY29sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAudGV4dC1uYW1lcm9vbVxuICB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgXG4gIH0gXG4gIC50ZXh0LWNvbWJvXG4gIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICB9XG4gIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICB9XG4gIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcblxuICAuaW9uLXRodW1ibmFpbHtcbiAgICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJhZGdlLmJhZGdlLWlvc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubGFiZWwtYmFkZ2V7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG5cbiAgLml0ZW0tYmxvY2t7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogNC40cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG4gIC8qY3NzIGNobyBpb3MqL1xuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gY8OzIHJhdGluZyAmIGxvY2F0aW9uXG4gIC5pdGVtLWlvcyAudHJhbnNib3ggeyBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4vL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyBsb2NhdGlvblxuLml0ZW0taW9zIC50cmFuc2JveDEgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEycHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbiAgfVxuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcbiAgLml0ZW0taW9zIC50cmFuc2JveDIgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEzcHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbiAgfVxuICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaXRlbS1pb3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICBtYXJnaW46MCAxMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG4gIH1cblxuICAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xuICB9XG5cbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAubGFiZWwtaW9zIHtcbiAgICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbiAgfVxuICAvKmNzcyBjaG8gaW9zKi9cblxuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cbiAgLml0ZW0tbWQgLnRyYW5zYm94IHsgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbTogMThweDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cbi5pdGVtLW1kIC50cmFuc2JveDEgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEycHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbiAgfVxuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcbiAgLml0ZW0tbWQgLnRyYW5zYm94MiB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTNweDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuICB9XG5cbiAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIC5pdGVtLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgbWFyZ2luOjAgMTFweDtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xuICB9XG4gIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbiAgfVxuICAuaXRlbS1tZCAuaXRlbS1pbm5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5sYWJlbC1tZCB7XG4gICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4gIH1cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICBcbiAgLnByaWNlLmNvbHtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG4gIH1cbiAgXG59XG4uYnRuLWNsZWFyLWZpbHRlcntcbiAgYm9yZGVyOm5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2FpbntcbiAgY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXJ7XG4gIGJvcmRlcjpub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggNDBweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLnRleHQtZW1wdHl7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmltZy1oZWFydHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC00cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY2xzLWltZy1jb250ZW50e1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5jbHMtaWNvbi1jb250ZW50e1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmxhYmVsLXByaWNlLWxvZ2lue1xuICBjb2xvcjogIzI2YmVkNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnQtYm9sZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGV4dC1sb2dpbntcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbiAgLnRyYW5zYm94XzAgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbiAgfVxuICBwLGgye1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAucm93LWl0ZW0taG90ZWxsaXN0e1xuICAgIG1hcmdpbjogMTZweDtcbiAgfVxuXG4gIC5wLXRvcC1kZWFsdHlwZXtcbiAgICB0b3A6MDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuICAuaWNvLWdpZnR7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gIH1cbiAgLnAtdG9wLWRlYWx0eXBlLTZ7XG4gICAgdG9wOjA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbiAgLmxhYmVsLW1pbnByaWNle1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLmxhYmVsLW1pbnByaWNlVEF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICB9XG4gIC5sYWJlbC1kZWFscHJpY2V7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxuICAucC10b3AtbWlucHJpY2V7XG4gICAgYm90dG9tOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLnAtdG9wLTh7XG4gICAgdG9wOjhweDtcbiAgfVxuICAucC10b3AtMTB7XG4gICAgdG9wOjEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICAucC10b3AtMTh7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG4gIH1cbiAgLmgtbGluZXtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgLmNvbC1pbWctaG90ZWxsaXN0e1xuICAgIGhlaWdodDogMTA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5iYWRnZS1pb3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmJ0bi1oZWFkZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O2NvbG9yOiAjNGY0ZjRmO2JhY2tncm91bmQtY29sb3I6ICNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO2JveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgLnRvb2xiYXItdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICB0ZXh0LW92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG4gIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gICAgICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbW9vZHtcbiAgICAgICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICAgICAgbGVmdDogMTJweDtcbiAgICAgIH1cbiAgICAgIC5wLXRvcC0xMHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIDpob3N0e1xuICAgICAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xuICAgIH1cbiAgICBpb24tYmFkZ2V7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuICAgIC5sYWJlbC1iYWRnZXtcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgXG4gICAgOjpuZy1kZWVwe1xuICAgICAgLmluZmluaXRlLWxvYWRpbmctdGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC8vc2tlbGV0b24tc3R5bGVcbiAgICAgIGlvbi1za2VsZXRvbi10ZXh0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY29sLWltZy1ob3RlbGxpc3Qtc2t7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1uYW1lLXNrXG4gICAgICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgICAucC1za3tcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmxhc3Qtcm93LXNre1xuICAgICAgICBwYWRkaW5nLXRvcDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgfVxuICAgICAgLnJvdy1pdGVtLWhvdGVsbGlzdC1za3tcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDoxNnB4O1xuICAgICAgfVxuICAgICAgLmgtbGluZS1za3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgICAgIG1hcmdpbjogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IDExMnB4O1xuICAgICAgd2lkdGg6IDY4JTtcbiAgICB9XG4gICAgLm0tdG9wLTV7XG4gICAgICBtYXJnaW4tdG9wOjVweDtcbiAgICB9XG4gICAgLm0tdG9wLTEwe1xuICAgICAgbWFyZ2luLXRvcDo2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOjEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAuc3AtaXRlbS1zdHlsZXtcbiAgICAgIHBhZGRpbmc6M3B4IDVweDtcbiAgICAgIGJvcmRlcjpzb2xpZCAwLjVweCAjMjZiZWQ2O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgfVxuICAgIC5maXgtaGVpZ2h0LTEwNHtcbiAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgfVxuICAgIC5sYXN0LXJvd3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTotMXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmNscy1saW5laGVpZ2h0e1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgfVxuICAgICAgXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAgICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICB9XG4gICAgICAucC10b3AtMTB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1sb2dpbntcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOjQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuICAgICAgICB3aWR0aDo3MSU7XG4gICAgICB9XG4gICAgfVxuICAgIC5jbHMtYmFkZ2UtZmlsdGVyIHtcbiAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgICB0b3A6IDE2cHggIWltcG9ydGFudDtcbiAgICAgIGxlZnQ6IDY4JSAhaW1wb3J0YW50O1xuICB9IiwiLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJhZGdlLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cblxuLmltZy1yYWRpdXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTA0cHggIWltcG9ydGFudDtcbn1cblxuLmNvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMXB4O1xuICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRleHQtbmFtZXJvb20ge1xuICB3aWR0aDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZXh0LWNvbWJvIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKmNzcyBjaG8gaW9zKi9cbiAgLypjc3MgY2hvIGlvcyovXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pb24tdGh1bWJuYWlsIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5iYWRnZS5iYWRnZS1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWJhZGdlIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1ibG9jayB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogNC40cmVtO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIG1hcmdpbjogMCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMThweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTJweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTNweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtbWQge1xuICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAucHJpY2UuY29sIHtcbiAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xufVxuXG4uYnRuLWNsZWFyLWZpbHRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5idG4tZmlsdGVyLWFnYWluIHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5idG4tZmlsdGVyLWFnYWluLW5vZmlsdGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggNDBweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1lbXB0eSB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uaW1nLWhlYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC00cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jbHMtaW1nLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmNscy1pY29uLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubGFiZWwtcHJpY2UtbG9naW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0LWxvZ2luIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udHJhbnNib3hfMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA0cHg7XG59XG5cbnAsIGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucm93LWl0ZW0taG90ZWxsaXN0IHtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG4ucC10b3AtZGVhbHR5cGUge1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4uaWNvLWdpZnQge1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLnAtdG9wLWRlYWx0eXBlLTYge1xuICB0b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4ubGFiZWwtbWlucHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubGFiZWwtbWlucHJpY2VUQSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5sYWJlbC1kZWFscHJpY2Uge1xuICBjb2xvcjogI2U1MjgyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucC10b3AtbWlucHJpY2Uge1xuICBib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucC10b3AtOCB7XG4gIHRvcDogOHB4O1xufVxuXG4ucC10b3AtMTAge1xuICB0b3A6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5wLXRvcC0xOCB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuXG4uaC1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb2wtaW1nLWhvdGVsbGlzdCB7XG4gIGhlaWdodDogMTA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJhZGdlLWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi1oZWFkZXIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50b29sYmFyLXRpdGxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICB0ZXh0LW92ZXJmbG93OiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbW9vZCB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG5cbiAgLnAtdG9wLTEwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuOmhvc3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG59XG5cbmlvbi1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxhYmVsLWJhZGdlIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOjpuZy1kZWVwIC5pbmZpbml0ZS1sb2FkaW5nLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAuY29sLWltZy1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuOjpuZy1kZWVwIC50ZXh0LW5hbWUtc2sge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuOjpuZy1kZWVwIC5wLXNrIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luOiAwO1xufVxuOjpuZy1kZWVwIC5sYXN0LXJvdy1zayB7XG4gIHBhZGRpbmctdG9wOiA1MnB4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG46Om5nLWRlZXAgLnJvdy1pdGVtLWhvdGVsbGlzdC1zayB7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG46Om5nLWRlZXAgLmgtbGluZS1zayB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW46IDAgMTZweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAxMTJweDtcbiAgd2lkdGg6IDY4JTtcbn1cblxuLm0tdG9wLTUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tLXRvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnNwLWl0ZW0tc3R5bGUge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5maXgtaGVpZ2h0LTEwNCB7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5sYXN0LXJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbHMtbGluZWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5wLXRvcC0xMCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnRleHQtbG9naW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICAgIHdpZHRoOiA3MSU7XG4gIH1cbn1cbi5jbHMtYmFkZ2UtZmlsdGVyIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDY4JSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hotel-list-mood/hotel-list-mood.ts":
/*!****************************************************!*\
  !*** ./src/app/hotel-list-mood/hotel-list-mood.ts ***!
  \****************************************************/
/*! exports provided: HotelListMoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelListMoodPage", function() { return HotelListMoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_moodService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/moodService */ "./src/app/providers/moodService.ts");
/* harmony import */ var _hotellistmoodfilter_hotellistmoodfilter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../hotellistmoodfilter/hotellistmoodfilter.page */ "./src/app/hotellistmoodfilter/hotellistmoodfilter.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");















let HotelListMoodPage = class HotelListMoodPage {
    constructor(platform, navCtrl, zone, authService, value, storage, searchhotel, alertCtrl, gf, activeRoute, loadingCtrl, router, fcm, modalCtrl, moodService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.authService = authService;
        this.value = value;
        this.storage = storage;
        this.searchhotel = searchhotel;
        this.alertCtrl = alertCtrl;
        this.gf = gf;
        this.activeRoute = activeRoute;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.fcm = fcm;
        this.modalCtrl = modalCtrl;
        this.moodService = moodService;
        this.json = [];
        this.json1 = [];
        this.ishide = false;
        this.num = 0;
        this.len = 10;
        this.co = 0;
        this.listhotels = "";
        this.listhotelIdInternal = "";
        this.dataListLike = [];
        this.dataList = [];
        this.listHotelPrice = [];
        this.title = "";
        this.loadpricedone = false;
        this.page = 1;
        this.itemsSkeleton = [1, 2, 3, 4, 5];
        storage.get('auth_token').then(auth_token => {
            this.loginuser = auth_token;
        });
        storage.get('jti').then((uid) => {
            this.memberid = uid;
        });
        this.loadpricedone = false;
        if (value.flagreview == 1) {
            this.ishide = true;
            if (value.arrhotellist) {
                this.json1 = value.arrhotellist;
            }
        }
        else {
            this.cin = new Date();
            this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(this.cin).format('YYYY-MM-DD');
            this.cout = new Date();
            var rescout = this.cout.setTime(this.cout.getTime() + (1 * 24 * 60 * 60 * 1000));
            var datecout = new Date(rescout);
            this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(datecout).format('YYYY-MM-DD');
        }
        this.moodService.listAllData = [];
        this.platform.ready().then(() => {
            document.addEventListener("backbutton", () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.goback();
            }));
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
        });
    }
    ionViewDidEnter() {
        var se = this;
        this.id = this.activeRoute.snapshot.paramMap.get('id');
        this.title = this.activeRoute.snapshot.paramMap.get('title');
        this.gf.setParams({ moodid: this.id, title: this.title }, 'hotellistmood');
        se.onEnter();
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = this.activeRoute.snapshot.paramMap.get('id');
            this.title = this.activeRoute.snapshot.paramMap.get('title');
            this.gf.setParams({ moodid: this.id, title: this.title }, 'hotellistmood');
            this.storage.get('auth_token').then(auth_token => {
                this.loginuser = auth_token;
            });
            this.getdata();
            if (this.hotelId) {
                this.storage.get('auth_token').then(auth_token => {
                    if (auth_token) {
                        this.likeItem(this.hotelId);
                    }
                });
            }
        });
    }
    getdata() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/HotelByMoodId' + '?pageIndex=' + this.page + '&pageSize=1000&version=2' + (this.memberid ? '&memberid=' + this.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            },
            body: se.id,
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "hotel-list-mood",
                    func: "getdata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "hotel-list-mood";
                error.func = "getdata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
            }
            se.zone.run(() => {
                if (body && body.length > 0) {
                    se.json = [];
                    se.dataList = [];
                    se.json1 = [];
                    let jsonData = body;
                    se.listhotels = "";
                    se.listhotelIdInternal = "";
                    if (se.searchhotel.selectedRegion.length > 0) {
                        for (let i = 0; i < jsonData.length; i++) {
                            const element = jsonData[i];
                            for (let j = 0; j < se.searchhotel.selectedRegion.length; j++) {
                                if (element.regionId == se.searchhotel.selectedRegion[j]) {
                                    se.json.push(element);
                                }
                            }
                        }
                    }
                    else {
                        se.json = body;
                    }
                    for (let i = 0; i < se.json.length; i++) {
                        let item = se.json[i];
                        se.dataList.push(item);
                        if (i == se.json.length - 1) {
                            if (se.json[i].eanCode != "") {
                                se.listhotels = se.listhotels + se.json[i].eanCode;
                            }
                            se.listhotelIdInternal = se.listhotelIdInternal + se.json[i].id;
                        }
                        else {
                            if (se.json[i].eanCode != "") {
                                se.listhotels = se.listhotels + se.json[i].eanCode + ",";
                            }
                            se.listhotelIdInternal = se.listhotelIdInternal + se.json[i].id + ",";
                        }
                    }
                    se.pushdatanew();
                    se.getHotelprice();
                }
                else if (body.length == 0) {
                    se._infiniteScroll.target.complete();
                }
            });
        });
        var moodcode = '';
        if (se.id == 1039) {
            moodcode = "nghi-he";
        }
        if (se.id == 1040) {
            moodcode = "doi-nhom";
        }
        if (se.id == 1002) {
            moodcode = "lang-man";
        }
        if (se.id == 1005) {
            moodcode = "tron-goi";
        }
        se.gf.googleAnalytion("mood-" + moodcode, "screen_view", {});
    }
    getHotelprice() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelsSearchPriceAjax',
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
            headers: {},
            form: {
                RoomNumber: '1',
                IsLeadingPrice: '',
                ReferenceClient: '',
                Supplier: 'IVIVU',
                CheckInDate: se.cin,
                CheckOutDate: se.cout,
                CountryID: '',
                CityID: '',
                NationalityID: '',
                'RoomsRequest[0][RoomIndex]': '0',
                'RoomsRequest[0][Adults][value]': '2',
                'RoomsRequest[0][Child][value]': '0',
                StatusMethod: '2',
                CountryCode: 'VN',
                NoCache: 'false',
                SearchType: '2',
                HotelIds: se.listhotels,
                HotelIdInternal: se.listhotelIdInternal
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "hotel-list-mood",
                    func: "getHotelprice",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "hotel-list-mood";
                error.fucn = "getHotelprice";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
            }
            se.zone.run(() => {
                se.jsonhtprice = JSON.parse(body);
                if (se.jsonhtprice.HotelListResponse) {
                    se.jsonhtprice = se.jsonhtprice.HotelListResponse.HotelList.HotelSummary;
                    se.length = se.json.length;
                    for (var i = 0; i < se.jsonhtprice.length; i++) {
                        let itemprice = se.jsonhtprice[i];
                        se.listHotelPrice.push(itemprice);
                    }
                    setTimeout(() => {
                        se.zone.run(() => se.fillDataPrice());
                    }, 100);
                    setTimeout(() => {
                        se.zone.run(() => {
                            se.json1.forEach(element => {
                                if (!se.checkExistsPriceItem(element.HotelId)) {
                                    element.MinPriceOTAStr = "";
                                }
                            });
                        });
                        se.loadpricedone = true;
                    }, 200);
                }
            });
        });
    }
    fillDataPrice() {
        var se = this;
        for (let index = 0; index < se.json1.length; index++) {
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
    }
    pushdatanew() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hotel-list",
                            func: "pushdatanew",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hotel-list-mood";
                        error.func = "pushdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                se.dataListLike = JSON.parse(body);
                                se.executePushData();
                            });
                        }
                        else {
                        }
                    }
                });
            }
            else {
                se.executePushData();
                for (let i = 0; i < se.json1.length; i++) {
                    se.json1[i].Liked = false;
                }
            }
        });
    }
    executePushData() {
        var se = this;
        for (let index = 0; index < se.dataList.length; index++) {
            let itemlike = false;
            if (se.dataListLike.length > 0) {
                itemlike = se.checkItemLiked(se.dataList[index].id) == 1 ? true : false;
            }
            var co = se.checkExistsItem(se.dataList[index].id);
            if (co == 1) {
                se.bindItemLike(se.dataList[index], itemlike);
                continue;
            }
            if (se.dataList[index].avatar) {
                se.dataList[index].avatar = (se.dataList[index].avatar.toLocaleString().trim().indexOf("http") != -1) ? se.dataList[index].avatar : 'https:' + se.dataList[index].avatar;
            }
            else {
                se.dataList[index].avatar = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png";
            }
            if (se.dataList[index].DealType) {
                if (se.dataList[index].DealPrice) {
                    se.dataList[index].DealPrice = se.dataList[index].DealPrice.toLocaleString();
                }
            }
            switch (se.dataList[index].rating) {
                case 50:
                    se.dataList[index].rating = "./assets/star/ic_star_5.svg";
                    break;
                case 45:
                    se.dataList[index].rating = "./assets/star/ic_star_4.5.svg";
                    break;
                case 40:
                    se.dataList[index].rating = "./assets/star/ic_star_4.svg";
                    break;
                case 35:
                    se.dataList[index].rating = "./assets/star/ic_star_3.5.svg";
                    break;
                case 30:
                    se.dataList[index].rating = "./assets/star/ic_star_3.svg";
                    break;
                case 25:
                    se.dataList[index].rating = "./assets/star/ic_star_2.5.svg";
                    break;
                case 20:
                    se.dataList[index].rating = "./assets/star/ic_star_2.svg";
                    break;
                case 15:
                    se.dataList[index].rating = "./assets/star/ic_star_1.5.svg";
                    break;
                case 10:
                    se.dataList[index].rating = "./assets/star/ic_star_1.svg";
                    break;
                case 5:
                    se.dataList[index].rating = "./assets/star/ic_star_0.5.svg";
                    break;
                default:
                    break;
            }
            var item;
            if (se.dataList[index].DealType) {
                if (se.dataList[index].subLocation[0]) {
                    item = { Avatar: se.dataList[index].avatar, Name: se.dataList[index].name, AvgPoint: se.dataList[index].avgPoint, dealPrice: se.dataList[index].dealPrice ? se.dataList[index].dealPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : se.dataList[index].dealPrice, dealType: se.dataList[index].dealType, SubLocation: se.dataList[index].subLocation[0].name, Rating: se.dataList[index].rating, HotelId: se.dataList[index].id, Liked: itemlike, IsShowPrice: se.dataList[index] ? se.dataList[index].isShowPrice : 0, regionName: this.dataList[index].regionName, regionId: this.dataList[index].regionId };
                }
                else {
                    item = { Avatar: se.dataList[index].avatar, Name: se.dataList[index].name, AvgPoint: se.dataList[index].avgPoint, dealPrice: se.dataList[index].dealPrice ? se.dataList[index].dealPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : se.dataList[index].dealPrice, dealType: se.dataList[index].dealType, SubLocation: '', Rating: se.dataList[index].rating, HotelId: se.dataList[index].id, Liked: itemlike, IsShowPrice: se.dataList[index] ? se.dataList[index].isShowPrice : 0, regionName: this.dataList[index].regionName, regionId: this.dataList[index].regionId };
                }
            }
            else {
                if (se.dataList[index].subLocation[0]) {
                    item = { Avatar: se.dataList[index].avatar, Name: se.dataList[index].name, AvgPoint: se.dataList[index].avgPoint, dealPrice: se.dataList[index].dealPrice ? se.dataList[index].dealPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : se.dataList[index].dealPrice, dealType: se.dataList[index].dealType, SubLocation: se.dataList[index].subLocation[0].name, Rating: se.dataList[index].rating, HotelId: se.dataList[index].id, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPriceOTAStr, PromotionDescriptionSubstring: "", Liked: itemlike, IsShowPrice: se.dataList[index] ? se.dataList[index].isShowPrice : 0, regionName: this.dataList[index].regionName, regionId: this.dataList[index].regionId };
                }
                else {
                    item = { Avatar: se.dataList[index].avatar, Name: se.dataList[index].name, AvgPoint: se.dataList[index].avgPoint, dealPrice: se.dataList[index].dealPrice ? se.dataList[index].dealPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : se.dataList[index].dealPrice, dealType: se.dataList[index].dealType, SubLocation: '', Rating: se.dataList[index].rating, HotelId: se.dataList[index].id, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPriceOTAStr, PromotionDescriptionSubstring: "", Liked: itemlike, IsShowPrice: se.dataList[index] ? se.dataList[index].isShowPrice : 0, regionName: this.dataList[index].regionName, regionId: this.dataList[index].regionId };
                }
            }
            if (item.AvgPoint.toString().length == 1) {
                item.AvgPoint = item.AvgPoint.toString() + ".0";
            }
            se.json1.push(item);
        }
        se.ishide = true;
        if (this._infiniteScroll) {
            this._infiniteScroll.target.complete();
        }
    }
    bindItemLike(item, like) {
        var se = this;
        se.json1.forEach((element) => {
            if (element.HotelId == item.id)
                se.zone.run(() => {
                    element.Liked = like;
                });
        });
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
    pushdata(num, len) {
        var se = this;
        for (let index = num; index < len; index++) {
            if (this.json[index].avatar) {
                this.json[index].avatar = (this.json[index].avatar.toLocaleString().trim().indexOf("http") != -1) ? this.json[index].avatar : 'http:' + this.json[index].avatar;
            }
            else {
                this.json[index].avatar = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png";
            }
            if (this.json[index].dealType) {
                this.json[index].dealPrice = this.json[index].dealPrice.toLocaleString();
            }
            switch (this.json[index].rating) {
                case 50:
                    this.json[index].rating = "./assets/star/ic_star_5.svg";
                    break;
                case 45:
                    this.json[index].rating = "./assets/star/ic_star_4.5.svg";
                    break;
                case 40:
                    this.json[index].rating = "./assets/star/ic_star_4.svg";
                    break;
                case 35:
                    this.json[index].rating = "./assets/star/ic_star_3.5.svg";
                    break;
                case 30:
                    this.json[index].rating = "./assets/star/ic_star_3.svg";
                    break;
                case 25:
                    this.json[index].rating = "./assets/star/ic_star_2.5.svg";
                    break;
                case 20:
                    this.json[index].rating = "./assets/star/ic_star_2.svg";
                    break;
                case 15:
                    this.json[index].rating = "./assets/star/ic_star_1.5.svg";
                    break;
                case 10:
                    this.json[index].rating = "./assets/star/ic_star_1.svg";
                    break;
                case 5:
                    this.json[index].rating = "./assets/star/ic_star_0.5.svg";
                    break;
                default:
                    break;
            }
            var item;
            if (this.json[index].dealType) {
                if (this.json[index].subLocation[0]) {
                    item = { Avatar: this.json[index].avatar, Name: this.json[index].name, AvgPoint: this.json[index].avgPoint, dealPrice: this.json[index].dealPrice, dealType: this.json[index].dealType, SubLocation: this.json[index].subLocation[0].name, Rating: this.json[index].rating, HotelId: this.json[index].id };
                }
                else {
                    item = { Avatar: this.json[index].avatar, Name: this.json[index].name, AvgPoint: this.json[index].avgPoint, dealPrice: this.json[index].dealPrice, dealType: this.json[index].dealType, SubLocation: '', Rating: this.json[index].rating, HotelId: this.json[index].id };
                }
            }
            else {
                var flag = 0;
                for (let i = 0; i < this.jsonhtprice.length; i++) {
                    if (this.jsonhtprice[i].HotelId == this.json[index].id) {
                        if (this.json[index].subLocation[0]) {
                            item = { Avatar: this.json[index].avatar, Name: this.json[index].name, AvgPoint: this.json[index].avgPoint, dealPrice: this.json[index].dealPrice, dealType: this.json[index].dealType, SubLocation: this.json[index].subLocation[0].name, Rating: this.json[index].rating, HotelId: this.json[index].id, RoomNameSubString: this.jsonhtprice[i].RoomNameSubString, MinPriceOTAStr: this.jsonhtprice[i].MinPriceOTAStr, PromotionDescriptionSubstring: this.jsonhtprice[i].PromotionDescriptionSubstring };
                        }
                        else {
                            item = { Avatar: this.json[index].avatar, Name: this.json[index].name, AvgPoint: this.json[index].avgPoint, dealPrice: this.json[index].dealPrice, dealType: this.json[index].dealType, SubLocation: '', Rating: this.json[index].rating, HotelId: this.json[index].id, RoomNameSubString: this.jsonhtprice[i].RoomNameSubString, MinPriceOTAStr: this.jsonhtprice[i].MinPriceOTAStr, PromotionDescriptionSubstring: this.jsonhtprice[i].PromotionDescriptionSubstring };
                        }
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {
                    if (this.json[index].SubLocation) {
                        item = { Avatar: this.json[index].avatar, Name: this.json[index].name, AvgPoint: this.json[index].avgPoint, dealPrice: this.json[index].dealPrice, dealType: this.json[index].dealType, SubLocation: this.json[index].subLocation[0].name, Rating: this.json[index].rating, HotelId: this.json[index].id };
                    }
                    else {
                        item = { Avatar: this.json[index].avatar, Name: this.json[index].name, AvgPoint: this.json[index].avgPoint, dealPrice: this.json[index].dealPrice, dealType: this.json[index].dealType, SubLocation: '', Rating: this.json[index].rating, HotelId: this.json[index].id };
                    }
                }
            }
            se.json1.push(item);
        }
        se.ishide = true;
        se.loadpricedone = true;
    }
    seemap() {
        this.presentLoadingnavi();
        var id1 = { name: this.name, code: this.code };
        this.navCtrl.navigateForward('MapPage/name' + this.name + "/code" + this.code);
    }
    filter() {
        var id1 = { name: this.name, code: this.code };
    }
    itemSelected(msg) {
        var se = this;
        se.searchhotel.hotelID = msg.HotelId;
        se.searchhotel.rootPage = "listmood";
        se.gf.setParams(msg.HotelId, 'hotellistmoodselected');
        this.gf.setParams({ moodid: this.id, title: this.title }, 'hotellistmood');
        this.value.logingoback = '/app/tabs/hoteldetail/' + msg.HotelId;
        var item = {};
        item.adult = this.searchhotel.adult;
        item.child = this.searchhotel.child;
        item.arrchild = this.searchhotel.arrchild;
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
        item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkInDate).format('YYYY');
        item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_7__(checkOutDate).format('YYYY');
        item.id = msg.HotelId;
        item.name = msg.Name;
        item.isType = 0;
        this.gf.setCacheSearch(item, 1);
        setTimeout(() => {
            this.navCtrl.navigateForward('/hoteldetail/' + msg.HotelId);
        }, 10);
    }
    doInfinite(infiniteScroll) {
        if (this.ishide == true) {
            var se = this;
            setTimeout(() => {
                se.page = se.page + 1;
                se.getdata();
                se._infiniteScroll = infiniteScroll;
            }, 10);
        }
        else {
            infiniteScroll.target.complete();
        }
    }
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }
    }
    goback() {
        this.value.flagreview = 0;
        this.searchhotel.selectedRegion = [];
        this.navCtrl.navigateBack('/');
    }
    goToLogin() {
        this.navCtrl.navigateForward('/login');
    }
    likeItem(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteHotel',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { hotelId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hotel-list-mood",
                            func: "likeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hotel-list-mood";
                        error.func = "likeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (se.json1.length > 0) {
                        se.zone.run(() => se.setItemLikeStatus(id));
                    }
                    se.hotelId = '';
                });
            }
            else {
                this.hotelId = id;
                this.navCtrl.navigateForward('/login');
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { hotelId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hotel-list-mood",
                            func: "unlikeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hotel-list-mood";
                        error.fucn = "unlikeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (se.json1.length > 0) {
                        se.zone.run(() => se.setItemLikeStatus(id));
                    }
                    console.log(body);
                });
            }
            else {
                this.navCtrl.navigateBack('/login');
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
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.loginuser = auth_token;
            }
            else {
                if (se.json1.length > 0) {
                    for (let i = 0; i < se.json1.length; i++) {
                        se.json1[i].Liked = false;
                    }
                }
            }
        });
        se.gf.setActivatedTab(1);
    }
    goToLogout() {
        this.storage.get('auth_token').then(id_token => {
            if (id_token !== null) {
                this.storage.remove('auth_token');
                this.storage.remove('mail');
                this.storage.remove('username');
                this.storage.remove('listblogtripdefault');
                this.storage.remove('point');
                this.fcm.getToken().then(token => {
                    this.gf.DeleteTokenOfUser(token, id_token, this.gf.getAppVersion());
                });
                this.navCtrl.navigateBack('/login');
            }
        });
    }
    reloadDataLike() {
        var se = this;
        if (se.json1 && se.json1.length > 0) {
            se.json1.forEach(item => {
            });
        }
    }
    sortAndFilterAgain() {
        this.navCtrl.navigateBack('/searchhotelfilterandsort');
    }
    clearSortAndFilter() {
        this.presentLoadingnavi();
        this.searchhotel.minprice = null;
        this.searchhotel.maxprice = null;
        this.searchhotel.star = [];
        this.searchhotel.review = 0;
        this.searchhotel.chuoi = "";
        this.searchhotel.recent = null;
        this.searchhotel.adult = 2;
        this.searchhotel.child = 0;
        this.searchhotel.roomnumber = 1;
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
        this.navCtrl.navigateBack('/hotellistmood/false');
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alertController = document.querySelector('ion-alert-controller');
            yield alertController.componentOnReady();
            let alert = yield alertController.create({
                message: "Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.",
                buttons: [{
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
                            this.navCtrl.navigateForward('/login');
                        }
                    },
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
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
        });
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
    showFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const key = 'regionName';
            let unique;
            if (se.moodService.listAllData && se.moodService.listAllData.length > 0) {
                let items = se.moodService.listAllData.map(item => [item[key], item]);
                if (items && items.length > 0) {
                    unique = [...new Map(items).values()];
                }
            }
            else {
                let items = se.json1.map(item => [item[key], item]);
                unique = [...new Map(items).values()];
                se.moodService.listAllData = [...se.json1];
            }
            console.log(unique);
            se.moodService.listRegion = unique;
            se.moodService.listData = [...se.moodService.listAllData];
            se.moodService.listSlideData = [...se.json1];
            const modal = yield this.modalCtrl.create({
                component: _hotellistmoodfilter_hotellistmoodfilter_page__WEBPACK_IMPORTED_MODULE_2__["HotellistmoodfilterPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data.stt == 1) {
                    this.ishide = false;
                    this.getdata();
                }
            });
        });
    }
};
HotelListMoodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hotel-list-mood',
        template: __webpack_require__(/*! ./hotel-list-mood.html */ "./src/app/hotel-list-mood/hotel-list-mood.html"),
        styles: [__webpack_require__(/*! ./hotel-list-mood.scss */ "./src/app/hotel-list-mood/hotel-list-mood.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_11__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_13__["FCM"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _providers_moodService__WEBPACK_IMPORTED_MODULE_1__["moodService"]])
], HotelListMoodPage);



/***/ })

}]);
//# sourceMappingURL=hotel-list-mood-hotel-list-mood-module.js.map