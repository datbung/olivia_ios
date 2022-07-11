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

<<<<<<< HEAD
module.exports = ".header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 3px;\n  text-align: center;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 0;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 104px !important;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .badge.badge-ios {\n  background-color: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 40px;\n  height: 48px;\n}\n\n.text-empty {\n  color: #828282;\n}\n\n.img-heart {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 13px;\n  margin-top: 13px;\n  width: 16px;\n  height: 16px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n}\n\n.p-top-dealtype {\n  top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  position: absolute;\n  max-width: 50%;\n}\n\n.ico-gift {\n  color: #e52822;\n}\n\n.p-top-dealtype-6 {\n  top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  position: absolute;\n  max-width: 50%;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 18px;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 16px;\n}\n\n.p-top-minprice {\n  bottom: 0;\n  font-size: 12px;\n  position: absolute;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  top: 10px;\n  padding-right: 0;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 104px;\n  position: absolute;\n}\n\n.badge-ios {\n  background-color: #26bed6;\n  font-size: 12px;\n}\n\n.btn-header {\n  margin-right: 15px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.toolbar-title {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: auto !important;\n  text-overflow: unset !important;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 0;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotelmood {\n    max-width: 188px;\n    left: 12px;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n  }\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  border-radius: 6px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n.col-description-hotellist {\n  position: relative;\n  left: 112px;\n  width: 68%;\n}\n\n.m-top-5 {\n  margin-top: 5px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n  margin-bottom: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  line-height: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  font-size: 10px;\n  color: #26bed6;\n  background: #ffffff;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n\n.fix-height-104 {\n  height: 104px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: -1px;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 71%;\n  }\n}\n\n.cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: #26bed6;\n  padding-top: 2px;\n  font-size: 10px;\n  top: 16px !important;\n  left: 68% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvaG90ZWwtbGlzdC1tb29kL2hvdGVsLWxpc3QtbW9vZC5zY3NzIiwic3JjL2FwcC9ob3RlbC1saXN0LW1vb2QvaG90ZWwtbGlzdC1tb29kLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDSjs7QURDRTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURERTtFQUVFLGtCQUFBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDR047O0FEREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7RUFJQSxZQUFBO0FDSUo7O0FERkU7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRERFO0VBRUUsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDSUo7O0FERkU7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0VBbUNKLGNBQUE7RUFxRUEsY0FBQTtFQUVBLGtCQUFBO0VBa0VBLGtCQUFBO0FDcEtGOztBREpFO0VBQ0UsMkJBQUE7QUNNSjs7QURKRTtFQUNFLHlCQUFB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QUNBLFdBQUE7QUNjTjs7QURaSTtFQUNFLGlCQUFBO0FDZU47O0FEWkk7RUFDRTtJQUNFLFVBQUE7RUNlTjs7RURiSTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNnQk47O0VEZEk7SUFDRSxlQUFBO0VDaUJOO0FBQ0Y7O0FEZEk7RUFDRTtJQUNFLFVBQUE7RUNnQk47QUFDRjs7QURkSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0VBQ0Esb0JBQUE7QUNlTiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsLWxpc3QtbW9vZC9ob3RlbC1saXN0LW1vb2Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuaGVhZGVyLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyLWljb257XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50ZXh0LXRpdGxlXG4gIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAudGV4dC1uYW1lXG4gIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC50ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgLmJhZGdlLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgfVxuICAuaW1nLXJhZGl1c1xuICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnRleHQtbmFtZXJvb21cbiAge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgIFxuICB9IFxuICAudGV4dC1jb21ib1xuICB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgfVxuICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgfVxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgXG5cbiAgLmlvbi10aHVtYm5haWx7XG4gICAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuICB9XG4gIC5iYWRnZS5iYWRnZS1pb3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmxhYmVsLWJhZGdle1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgfVxuXG4gIC5pdGVtLWJsb2Nre1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgfVxuICAvKmNzcyBjaG8gaW9zKi9cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuICAuaXRlbS1pb3MgLnRyYW5zYm94IHsgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cbi5pdGVtLWlvcyAudHJhbnNib3gxIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxMnB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4gIH1cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4gIC5pdGVtLWlvcyAudHJhbnNib3gyIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxM3B4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4gIH1cbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLml0ZW0taW9zIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgbWFyZ2luOjAgMTFweDtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xuICB9XG5cbiAgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbiAgfVxuXG4gIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmxhYmVsLWlvcyB7XG4gICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4gIH1cbiAgLypjc3MgY2hvIGlvcyovXG5cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gY8OzIHJhdGluZyAmIGxvY2F0aW9uXG4gIC5pdGVtLW1kIC50cmFuc2JveCB7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206IDE4cHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4uaXRlbS1tZCAudHJhbnNib3gxIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxMnB4O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4gIH1cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4gIC5pdGVtLW1kIC50cmFuc2JveDIgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEzcHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbiAgfVxuXG4gIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICAuaXRlbS1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIG1hcmdpbjowIDExcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbiAgfVxuICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gIH1cbiAgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAubGFiZWwtbWQge1xuICAgIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xuICB9XG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgXG4gIC5wcmljZS5jb2x7XG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xuICB9XG4gIFxufVxuLmJ0bi1jbGVhci1maWx0ZXJ7XG4gIGJvcmRlcjpub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW57XG4gIGNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cbi5idG4tZmlsdGVyLWFnYWluLW5vZmlsdGVye1xuICBib3JkZXI6bm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDQwcHg7XG4gIGhlaWdodDogNDhweDtcbn1cbi50ZXh0LWVtcHR5e1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5pbWctaGVhcnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAtNHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNscy1pbWctY29udGVudHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4uY2xzLWljb24tY29udGVudHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5sYWJlbC1wcmljZS1sb2dpbntcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHQtbG9naW57XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG4gIC50cmFuc2JveF8wIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA0cHg7XG4gIH1cbiAgcCxoMntcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnJvdy1pdGVtLWhvdGVsbGlzdHtcbiAgICBtYXJnaW46IDE2cHg7XG4gIH1cblxuICAucC10b3AtZGVhbHR5cGV7XG4gICAgdG9wOjA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gIH1cbiAgLmljby1naWZ0e1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICB9XG4gIC5wLXRvcC1kZWFsdHlwZS02e1xuICAgIHRvcDowO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG4gIC5sYWJlbC1taW5wcmljZXtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC5sYWJlbC1taW5wcmljZVRBe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgfVxuICAubGFiZWwtZGVhbHByaWNle1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIH1cbiAgLnAtdG9wLW1pbnByaWNle1xuICAgIGJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5wLXRvcC04e1xuICAgIHRvcDo4cHg7XG4gIH1cbiAgLnAtdG9wLTEwe1xuICAgIHRvcDoxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIH1cbiAgLnAtdG9wLTE4e1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICB9XG4gIC5oLWxpbmV7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIC5jb2wtaW1nLWhvdGVsbGlzdHtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuYmFkZ2UtaW9ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5idG4taGVhZGVye1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtjb2xvcjogIzRmNGY0ZjtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO1xuICB9XG4gIC50b29sYmFyLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxuICAudG9vbGJhci10aXRsZS1tZCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAgICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbG1vb2R7XG4gICAgICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICB9XG4gICAgICAucC10b3AtMTB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA6aG9zdHtcbiAgICAgIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbiAgICB9XG4gICAgaW9uLWJhZGdle1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAubGFiZWwtYmFkZ2V7XG4gICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIDo6bmctZGVlcHtcbiAgICAgIC5pbmZpbml0ZS1sb2FkaW5nLXRleHR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAvL3NrZWxldG9uLXN0eWxlXG4gICAgICBpb24tc2tlbGV0b24tdGV4dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbC1pbWctaG90ZWxsaXN0LXNre1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtbmFtZS1za1xuICAgICAge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuICAgICAgLnAtc2t7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5sYXN0LXJvdy1za3tcbiAgICAgICAgcGFkZGluZy10b3A6IDUycHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgIH1cbiAgICAgIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2t7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6MTZweDtcbiAgICAgIH1cbiAgICAgIC5oLWxpbmUtc2t7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICAgICAgICBtYXJnaW46IDAgMTZweCAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiAxMTJweDtcbiAgICAgIHdpZHRoOiA2OCU7XG4gICAgfVxuICAgIC5tLXRvcC01e1xuICAgICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgfVxuICAgIC5tLXRvcC0xMHtcbiAgICAgIG1hcmdpbi10b3A6NnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbToxMnB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICB9XG4gICAgLnNwLWl0ZW0tc3R5bGV7XG4gICAgICBwYWRkaW5nOjNweCA1cHg7XG4gICAgICBib3JkZXI6c29saWQgMC41cHggIzI2YmVkNjtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIH1cbiAgICAuZml4LWhlaWdodC0xMDR7XG4gICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgIH1cbiAgICAubGFzdC1yb3d7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206LTFweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jbHMtbGluZWhlaWdodHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIH1cbiAgICAgIFxuICAgIEBtZWRpYSAobWluLXdpZHRoOjMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgfVxuICAgICAgLnAtdG9wLTEwe1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtbG9naW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDo0MTRweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbiAgICAgICAgd2lkdGg6NzElO1xuICAgICAgfVxuICAgIH1cbiAgICAuY2xzLWJhZGdlLWZpbHRlciB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICAgdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiA2OCUgIWltcG9ydGFudDtcbiAgfSIsIi5oZWFkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWljb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5iYWRnZS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG5cbi5pbWctcmFkaXVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgZmxleC1iYXNpczogMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi50ZXh0LW5hbWVyb29tIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGV4dC1jb21ibyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypjc3MgY2hvIGlvcyovXG4gIC8qY3NzIGNobyBpb3MqL1xuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW9uLXRodW1ibmFpbCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYmFkZ2UuYmFkZ2UtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1iYWRnZSB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tYmxvY2sge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTNweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICBtYXJnaW46IDAgMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtaW9zIHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDE4cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIG1hcmdpbjogMCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnByaWNlLmNvbCB7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcbn1cblxuLmJ0bi1jbGVhci1maWx0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2FpbiB7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2Fpbi1ub2ZpbHRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDQwcHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtZW1wdHkge1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmltZy1oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAtNHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY2xzLWltZy1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5jbHMtaWNvbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxhYmVsLXByaWNlLWxvZ2luIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRyYW5zYm94XzAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNHB4O1xufVxuXG5wLCBoMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJvdy1pdGVtLWhvdGVsbGlzdCB7XG4gIG1hcmdpbjogMTZweDtcbn1cblxuLnAtdG9wLWRlYWx0eXBlIHtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmljby1naWZ0IHtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG5cbi5wLXRvcC1kZWFsdHlwZS02IHtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmxhYmVsLW1pbnByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmxhYmVsLW1pbnByaWNlVEEge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzgyODI4MjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuXG4ubGFiZWwtZGVhbHByaWNlIHtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnAtdG9wLW1pbnByaWNlIHtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnAtdG9wLTgge1xuICB0b3A6IDhweDtcbn1cblxuLnAtdG9wLTEwIHtcbiAgdG9wOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ucC10b3AtMTgge1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cblxuLmgtbGluZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW46IDAgMTZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29sLWltZy1ob3RlbGxpc3Qge1xuICBoZWlnaHQ6IDEwNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYWRnZS1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5idG4taGVhZGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4udG9vbGJhci10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbG1vb2Qge1xuICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxuXG4gIC5wLXRvcC0xMCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cbjpob3N0IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xufVxuXG5pb24tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5sYWJlbC1iYWRnZSB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjo6bmctZGVlcCAuaW5maW5pdGUtbG9hZGluZy10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLmNvbC1pbWctaG90ZWxsaXN0LXNrIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAudGV4dC1uYW1lLXNrIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAucC1zayB7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAubGFzdC1yb3ctc2sge1xuICBwYWRkaW5nLXRvcDogNTJweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuOjpuZy1kZWVwIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5oLWxpbmUtc2sge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTEycHg7XG4gIHdpZHRoOiA2OCU7XG59XG5cbi5tLXRvcC01IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubS10b3AtMTAge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5cbi5zcC1pdGVtLXN0eWxlIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjMjZiZWQ2O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZml4LWhlaWdodC0xMDQge1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4ubGFzdC1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xzLWxpbmVoZWlnaHQge1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cblxuICAucC10b3AtMTAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC50ZXh0LWxvZ2luIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgICB3aWR0aDogNzElO1xuICB9XG59XG4uY2xzLWJhZGdlLWZpbHRlciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRvcDogMTZweCAhaW1wb3J0YW50O1xuICBsZWZ0OiA2OCUgIWltcG9ydGFudDtcbn0iXX0= */"
=======
module.exports = ".header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 3px;\n  text-align: center;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 0;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 104px !important;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .badge.badge-ios {\n  background-color: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 40px;\n  height: 48px;\n}\n\n.text-empty {\n  color: #828282;\n}\n\n.img-heart {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 13px;\n  margin-top: 13px;\n  width: 16px;\n  height: 16px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n}\n\n.p-top-dealtype {\n  top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  position: absolute;\n  max-width: 50%;\n}\n\n.ico-gift {\n  color: #e52822;\n}\n\n.p-top-dealtype-6 {\n  top: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  position: absolute;\n  max-width: 50%;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 18px;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 16px;\n}\n\n.p-top-minprice {\n  bottom: 0;\n  font-size: 12px;\n  position: absolute;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  top: 10px;\n  padding-right: 0;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 104px;\n  position: absolute;\n}\n\n.badge-ios {\n  background-color: #26bed6;\n  font-size: 12px;\n}\n\n.btn-header {\n  margin-right: 15px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n}\n\n.toolbar-title {\n  display: block;\n  width: 100%;\n  white-space: nowrap;\n  overflow: auto !important;\n  text-overflow: unset !important;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 0;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotelmood {\n    max-width: 188px;\n    left: 12px;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n  }\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  border-radius: 6px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n.col-description-hotellist {\n  position: relative;\n  left: 112px;\n  width: 68%;\n}\n\n.m-top-5 {\n  margin-top: 5px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n  margin-bottom: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  line-height: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  font-size: 10px;\n  color: #26bed6;\n  background: #ffffff;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n\n.fix-height-104 {\n  height: 104px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: -1px;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 71%;\n  }\n}\n\n.cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: #26bed6;\n  padding-top: 2px;\n  font-size: 10px;\n  top: 16px !important;\n  left: 68% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2hvdGVsLWxpc3QtbW9vZC9ob3RlbC1saXN0LW1vb2Quc2NzcyIsInNyYy9hcHAvaG90ZWwtbGlzdC1tb29kL2hvdGVsLWxpc3QtbW9vZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0U7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEQ0U7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDR0o7O0FEREU7RUFFRSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0dOOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFHQSxhQUFBO0VBSUEsWUFBQTtBQ0lKOztBREZFO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURERTtFQUVFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0lKOztBREZFO0VBRUksa0JBQUE7RUFDQSxrQkFBQTtFQW1DSixjQUFBO0VBcUVBLGNBQUE7RUFFQSxrQkFBQTtFQWtFQSxrQkFBQTtBQ3BLRjs7QURKRTtFQUNFLDJCQUFBO0FDTUo7O0FESkU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNNSjs7QURK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RUFDRSxpQkFBQTtBQ2VOOztBRFpJO0VBQ0U7SUFDRSxVQUFBO0VDZU47O0VEYkk7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDZ0JOOztFRGRJO0lBQ0UsZUFBQTtFQ2lCTjtBQUNGOztBRGRJO0VBQ0U7SUFDRSxVQUFBO0VDZ0JOO0FBQ0Y7O0FEZEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxvQkFBQTtFQUNBLG9CQUFBO0FDZU4iLCJmaWxlIjoic3JjL2FwcC9ob3RlbC1saXN0LW1vb2QvaG90ZWwtbGlzdC1tb29kLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmhlYWRlci10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1pY29ue1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudGV4dC10aXRsZVxuICB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnRleHQtbmFtZVxuICB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAudGV4dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIC5iYWRnZS1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gIH1cbiAgLmltZy1yYWRpdXNcbiAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAxMDRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb2wge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC50ZXh0LW5hbWVyb29tXG4gIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICBcbiAgfSBcbiAgLnRleHQtY29tYm9cbiAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gIH1cbiAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIFxuXG4gIC5pb24tdGh1bWJuYWlse1xuICAgIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbiAgfVxuICAuYmFkZ2UuYmFkZ2UtaW9ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5sYWJlbC1iYWRnZXtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIH1cblxuICAuaXRlbS1ibG9ja3tcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4taGVpZ2h0OiA0LjRyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cbiAgLypjc3MgY2hvIGlvcyovXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cbiAgLml0ZW0taW9zIC50cmFuc2JveCB7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206IDE2cHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4uaXRlbS1pb3MgLnRyYW5zYm94MSB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTJweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuICB9XG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xuICAuaXRlbS1pb3MgLnRyYW5zYm94MiB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTNweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuICB9XG4gIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuIC5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5pdGVtLWlvcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIG1hcmdpbjowIDExcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbiAgfVxuXG4gIC5pdGVtLWlvcyBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gIH1cblxuICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5sYWJlbC1pb3Mge1xuICAgIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xuICB9XG4gIC8qY3NzIGNobyBpb3MqL1xuXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuICAuaXRlbS1tZCAudHJhbnNib3ggeyBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOiAxOHB4O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4vL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyBsb2NhdGlvblxuLml0ZW0tbWQgLnRyYW5zYm94MSB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTJweDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuICB9XG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xuICAuaXRlbS1tZCAudHJhbnNib3gyIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxM3B4O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4gIH1cblxuICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgLml0ZW0tbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICBtYXJnaW46MCAxMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG4gIH1cbiAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xuICB9XG4gIC5pdGVtLW1kIC5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmxhYmVsLW1kIHtcbiAgICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbiAgfVxuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIFxuICAucHJpY2UuY29se1xuICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcbiAgfVxuICBcbn1cbi5idG4tY2xlYXItZmlsdGVye1xuICBib3JkZXI6bm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5idG4tZmlsdGVyLWFnYWlue1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAgI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uYnRuLWZpbHRlci1hZ2Fpbi1ub2ZpbHRlcntcbiAgYm9yZGVyOm5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCA0MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4udGV4dC1lbXB0eXtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uaW1nLWhlYXJ0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTRweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5jbHMtaW1nLWNvbnRlbnR7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmNscy1pY29uLWNvbnRlbnR7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubGFiZWwtcHJpY2UtbG9naW57XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50ZXh0LWxvZ2lue1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cblxuICAudHJhbnNib3hfMCB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNHB4O1xuICB9XG4gIHAsaDJ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5yb3ctaXRlbS1ob3RlbGxpc3R7XG4gICAgbWFyZ2luOiAxNnB4O1xuICB9XG5cbiAgLnAtdG9wLWRlYWx0eXBle1xuICAgIHRvcDowO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG4gIC5pY28tZ2lmdHtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgfVxuICAucC10b3AtZGVhbHR5cGUtNntcbiAgICB0b3A6MDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgfVxuICAubGFiZWwtbWlucHJpY2V7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICAubGFiZWwtbWlucHJpY2VUQXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gIH1cbiAgLmxhYmVsLWRlYWxwcmljZXtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB9XG4gIC5wLXRvcC1taW5wcmljZXtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAucC10b3AtOHtcbiAgICB0b3A6OHB4O1xuICB9XG4gIC5wLXRvcC0xMHtcbiAgICB0b3A6MTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gIC5wLXRvcC0xOHtcbiAgICBwYWRkaW5nLXRvcDogMThweDtcbiAgfVxuICAuaC1saW5le1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAuY29sLWltZy1ob3RlbGxpc3R7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLmJhZGdlLWlvc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuYnRuLWhlYWRlcntcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7Y29sb3I6ICM0ZjRmNGY7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTtcbiAgfVxuICAudG9vbGJhci10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOjMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxtb29ke1xuICAgICAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgfVxuICAgICAgLnAtdG9wLTEwe1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgOmhvc3R7XG4gICAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG4gICAgfVxuICAgIGlvbi1iYWRnZXtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG4gICAgLmxhYmVsLWJhZGdle1xuICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICA6Om5nLWRlZXB7XG4gICAgICAuaW5maW5pdGUtbG9hZGluZy10ZXh0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLy9za2VsZXRvbi1zdHlsZVxuICAgICAgaW9uLXNrZWxldG9uLXRleHR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb2wtaW1nLWhvdGVsbGlzdC1za3tcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LW5hbWUtc2tcbiAgICAgIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgIH1cbiAgICAgIC5wLXNre1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAubGFzdC1yb3ctc2t7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICB9XG4gICAgICAucm93LWl0ZW0taG90ZWxsaXN0LXNre1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOjE2cHg7XG4gICAgICB9XG4gICAgICAuaC1saW5lLXNre1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogMTEycHg7XG4gICAgICB3aWR0aDogNjglO1xuICAgIH1cbiAgICAubS10b3AtNXtcbiAgICAgIG1hcmdpbi10b3A6NXB4O1xuICAgIH1cbiAgICAubS10b3AtMTB7XG4gICAgICBtYXJnaW4tdG9wOjZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206MTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5zcC1pdGVtLXN0eWxle1xuICAgICAgcGFkZGluZzozcHggNXB4O1xuICAgICAgYm9yZGVyOnNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gICAgLmZpeC1oZWlnaHQtMTA0e1xuICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICB9XG4gICAgLmxhc3Qtcm93e1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOi0xcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY2xzLWxpbmVoZWlnaHR7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICB9XG4gICAgICBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gICAgICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIH1cbiAgICAgIC5wLXRvcC0xMHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWxvZ2lue1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4gICAgICAgIHdpZHRoOjcxJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNscy1iYWRnZS1maWx0ZXIge1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICAgIHRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgbGVmdDogNjglICFpbXBvcnRhbnQ7XG4gIH0iLCIuaGVhZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYmFkZ2UtbWQge1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uaW1nLXJhZGl1cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDRweCAhaW1wb3J0YW50O1xufVxuXG4uY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4udGV4dC1uYW1lcm9vbSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRleHQtY29tYm8ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qY3NzIGNobyBpb3MqL1xuICAvKmNzcyBjaG8gaW9zKi9cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICAvKmNzcyBjaG8gYW5kcm9pZCovXG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmlvbi10aHVtYm5haWwge1xuICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmJhZGdlLmJhZGdlLWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtYmFkZ2Uge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWJsb2NrIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiA0LjRyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTJweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWlvcyB7XG4gIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICBtYXJnaW46IDAgMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5wcmljZS5jb2wge1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG59XG5cbi5idG4tY2xlYXItZmlsdGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW4ge1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCA0MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWVtcHR5IHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5pbWctaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTRweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNscy1pbWctY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uY2xzLWljb24tY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5sYWJlbC1wcmljZS1sb2dpbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtbG9naW4ge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50cmFuc2JveF8wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbn1cblxucCwgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5yb3ctaXRlbS1ob3RlbGxpc3Qge1xuICBtYXJnaW46IDE2cHg7XG59XG5cbi5wLXRvcC1kZWFsdHlwZSB7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5pY28tZ2lmdCB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4ucC10b3AtZGVhbHR5cGUtNiB7XG4gIHRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5sYWJlbC1taW5wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cbi5sYWJlbC1taW5wcmljZVRBIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmxhYmVsLWRlYWxwcmljZSB7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5wLXRvcC1taW5wcmljZSB7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wLXRvcC04IHtcbiAgdG9wOiA4cHg7XG59XG5cbi5wLXRvcC0xMCB7XG4gIHRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLnAtdG9wLTE4IHtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG5cbi5oLWxpbmUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNvbC1pbWctaG90ZWxsaXN0IHtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFkZ2UtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYnRuLWhlYWRlciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnRvb2xiYXItdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxtb29kIHtcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cblxuICAucC10b3AtMTAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG46aG9zdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbn1cblxuaW9uLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubGFiZWwtYmFkZ2Uge1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46Om5nLWRlZXAgLmluZmluaXRlLWxvYWRpbmctdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46Om5nLWRlZXAgaW9uLXNrZWxldG9uLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuOjpuZy1kZWVwIC5jb2wtaW1nLWhvdGVsbGlzdC1zayB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG46Om5nLWRlZXAgLnRleHQtbmFtZS1zayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IDE4cHg7XG59XG46Om5nLWRlZXAgLnAtc2sge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLmxhc3Qtcm93LXNrIHtcbiAgcGFkZGluZy10b3A6IDUycHg7XG4gIGhlaWdodDogMTdweDtcbn1cbjo6bmctZGVlcCAucm93LWl0ZW0taG90ZWxsaXN0LXNrIHtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbjo6bmctZGVlcCAuaC1saW5lLXNrIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gIG1hcmdpbjogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDExMnB4O1xuICB3aWR0aDogNjglO1xufVxuXG4ubS10b3AtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm0tdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4uc3AtaXRlbS1zdHlsZSB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmZpeC1oZWlnaHQtMTA0IHtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmxhc3Qtcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNscy1saW5laGVpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG5cbiAgLnAtdG9wLTEwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAudGV4dC1sb2dpbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gICAgd2lkdGg6IDcxJTtcbiAgfVxufVxuLmNscy1iYWRnZS1maWx0ZXIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0b3A6IDE2cHggIWltcG9ydGFudDtcbiAgbGVmdDogNjglICFpbXBvcnRhbnQ7XG59Il19 */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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