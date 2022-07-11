(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combolist-combolist-module"],{

/***/ "./src/app/combolist/combolist.html":
/*!******************************************!*\
  !*** ./src/app/combolist/combolist.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  \n      <ion-row>\n        <!-- <ion-col size=\"2\" class=\"header-text header-icon\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </ion-col> -->\n        <!-- <ion-col size=\"8\" class=\"header-text\"> -->\n            <div (click)=\"goback()\" style=\"z-index: 999;\">\n                <img style=\"height: 48px; padding: 8px;\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n            <div class=\"text-title\">\n                Danh sách combo\n            </div>\n        <!-- </ion-col> -->\n      </ion-row>\n\n  </ion-header>\n  <ion-content>\n    <ion-list *ngIf=\"ishide==true\">\n        <div class=\"card-background-detailpage\">\n            <div *ngFor=\"let msg of json1; let i = index\">\n              <div class=\"row-item-hotellist\">\n                <!-- left image region-->\n                <div class=\"col-img-hotellist\">\n                    <img  class=\"img-radius\" src={{msg.Avatar}} style=\"position:relative\" (click)=\"itemSelected(msg.HotelId,msg.Name)\">\n                    <div *ngIf=\"msg.Liked\" class=\"img-heart\" (click)=\"unlikeItem(msg.HotelId)\">\n                      <ion-icon name=\"heart\" color=\"danger\" class=\"cls-icon-content\" ></ion-icon>\n                    </div>\n                    <div *ngIf=\"!msg.Liked\" class=\"img-heart\" (click)=\"likeItem(msg.HotelId)\">\n                      <img src=\"./assets/imgs/heart-empty.svg\" style=\"width:14px;height:14px\" class=\"cls-img-content\" >\n                    </div>\n                    <div *ngIf=\"msg.PromotionDescriptionSubstring\" class=\"transbox_0\">\n                        {{msg.PromotionDescriptionSubstring}}\n                      </div>\n                </div>\n                <!-- right content region -->\n                <div class=\"col-description-hotellist\">\n                    <div  class=\"fix-height-104\">\n                        <div (click)=\"itemSelected(msg.HotelId,msg.Name)\" >\n                        <h2 class=\"text-name\" >{{msg.Name}}\n                        </h2>\n                        <p>\n                            <img *ngIf=\"msg.Rating!=0\" src={{msg.Rating}}>\n                        </p>\n                        <p *ngIf=\"msg.SubLocation\" class=\"text\">\n                          <img style=\"height:10px\" src=\"./assets/ic_hoteldetail/group.svg\">\n                          <label style=\"color: #4f4f4f;margin-left: 5px\"> {{msg.SubLocation}}\n                          </label>\n                        </p>\n                        <div *ngIf=\"msg.AvgPoint>0\">\n                          <ion-row *ngIf=\"msg.AvgPoint>9 && msg.AvgPoint<=10\" class=\"m-top-5\">\n                            <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                            <p class=\"label-badge\">Tuyệt vời\n                            </p>\n                          </ion-row>\n                          <ion-row *ngIf=\"msg.AvgPoint>8 && msg.AvgPoint<=9\" class=\"m-top-5\">\n                            <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                            <p class=\"label-badge\">Rất tốt\n                            </p>\n                          </ion-row>\n                          <ion-row *ngIf=\"msg.AvgPoint>7 && msg.AvgPoint<=8\" class=\"m-top-5\">\n                            <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                            <p class=\"label-badge\">Khá tốt\n                            </p>\n                          </ion-row>\n                          <ion-row *ngIf=\"msg.AvgPoint>5 && msg.AvgPoint<=7\" class=\"m-top-5\">\n                            <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                            <p class=\"label-badge\">Tạm được\n                            </p>\n                          </ion-row>\n                          <ion-row *ngIf=\"msg.AvgPoint<=5\" class=\"m-top-5\">\n                            <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                            <p class=\"label-badge\">Không tốt\n                            </p>\n                          </ion-row>\n                      </div>\n                    </div>\n                      <!-- <div class=\"m-top-10\"><span *ngFor=\"let itemstyle in msg.StyleTag\" class=\"sp-item-style\">{{itemstyle.Name}}</span></div> -->\n                      \n                      <div class=\"last-row\">\n                          <div *ngIf=\"loginuser\" >\n                            <div *ngIf=\"msg.DealType\"   [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                                <div style=\"font-weight: bold\">\n                                  <div *ngIf=\"msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype\">\n                                    <img src=\"./assets/ic_combo.svg\">\n                                    <label class=\"cls-lineheight\">{{msg.DealType.split('|')[0]}}</label>\n                                  </div>\n                                  <div *ngIf=\"!msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype-6\">\n                                      <img src=\"./assets/ic_combo.svg\">\n                                      <label class=\"cls-lineheight\">{{msg.DealType.split('|')[0]}}</label>\n                                    </div>\n                                  <div  *ngIf=\"msg.DealPrice\" text-right class=\"p-top-10  price\">\n                                    <label *ngIf=\"msg.DealPrice!=0\" class=\"label-dealprice\">{{ msg.DealPrice }} đ</label>\n                                  </div>\n                                  <div  *ngIf=\"!msg.DealPrice\" text-right class=\"price\" style=\"top:4px\">\n                                    <ion-icon class=\"ico-gift\" name=\"gift\"></ion-icon>\n                                    <label *ngIf=\"!msg.DealPrice\" class=\"label-nondealprice\">Giá ưu đãi!</label>\n                                  </div>\n                                </div>\n                              </div>\n                              <div *ngIf=\"!msg.DealType\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                                <div text-right *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr && msg.MinPriceTAStr && msg.MinPriceOTAStr!=msg.MinPriceTAStr && msg.MinPriceTAStr!=0 && msg.MinPriceOTAStr<msg.MinPriceTAStr && loginuser\" class=\"label-minpriceTA\">{{msg.MinPriceTAStr}} đ</div>\n                                <div >\n                                  <div col-7 class=\"text-nameroom\" text-left class=\"p-top-minprice\">\n                                    <label >{{msg.RoomNameSubString}}</label>\n                                  </div>\n                                  <div col-5 text-right class=\"p-top-10 price\">\n                                    <div>\n                                        <label *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr\" class=\"label-minprice\">{{msg.MinPriceOTAStr}} đ</label>\n                                        <label *ngIf=\"msg.HasCheckPrice && !msg.MinPriceOTAStr\" class=\"label-minprice\">Hết phòng</label>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                              <div *ngIf=\"!loginuser\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\" (click)=\"goToLogin()\">\n                                  <div *ngIf=\"msg.DealType\">\n                                      <div>\n                                          <div>\n                                              <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                          </div>\n                                        </div>\n                                  </div>\n                                <div *ngIf=\"!msg.DealType\">\n                                  <div>\n                                      <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                  </div>\n                                </div>\n                              </div>\n                        </div>\n                        \n                      </div>\n                </div>\n              </div>\n              <p class=\"h-line\"></p>\n            </div>\n          </div>\n    </ion-list>\n  \n    <div *ngIf=\"ishide==false\" style=\"text-align: center;margin-top: 10px\">\n        <ion-item-group  *ngFor=\"let item of itemsSkeleton\">\n            <ion-row class=\"row-item-hotellist-sk\">\n                <ion-col size=\"4\" class=\"col-img-hotellist-sk\" >\n                    <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px\"></ion-skeleton-text>\n                </ion-col>\n                <ion-col size=\"8\" class=\"col-description-hotellist-sk\" style=\"line-height: 18px;padding-top: 0\">\n                    <div style=\"height: 100%\">\n                      <h2 class=\"text-name-sk\" >\n                          <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                      </h2>\n                      <p class=\"p-sk\">\n                          <ion-skeleton-text animated style=\"width: 50%;margin: 0\"></ion-skeleton-text>\n                      </p>\n                      <div class=\"last-row-sk\">\n                          <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                      </div>\n                    </div>\n                  </ion-col>\n            </ion-row>\n            <p class=\"h-line-sk\"></p>\n        </ion-item-group>\n    </div>\n    <div *ngIf=\"nodata==true\" style=\"text-align: center;margin-top: 10px\">\n      <img src=\"./assets/imgs/empty.svg\">\n      <div style=\"padding:0 16px\">\n        <p class=\"text-empty\">Không tìm thấy kết quả tìm kiếm. Vui lòng nhập lại!</p>\n      </div>\n      <div>\n        <ion-row *ngIf=\"hasfilter==true && hassortfilter==false\">\n          <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-left\" (click)=\"filterAgain()\">Lọc lại</button></ion-col>\n          <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-right\" (click)=\"clearFilter()\">Xóa lọc</button></ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"hasfilter==false && hassortfilter==false\">\n          <button ion-button round outline class=\"button btn-filter-again-nofilter\" (click)=\"searchAgain()\">Tìm kiếm lại</button>\n        </ion-row>\n        <ion-row *ngIf=\"hassortfilter==true\">\n          <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-left\" (click)=\"sortAndFilterAgain()\">Lọc lại</button></ion-col>\n          <ion-col col-6><button ion-button round outline class=\"button btn-clear-filter m-right\" (click)=\"clearSortAndFilter()\">Xóa lọc</button></ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"json1.length < json.length\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>"

/***/ }),

/***/ "./src/app/combolist/combolist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/combolist/combolist.module.ts ***!
  \***********************************************/
/*! exports provided: ComboListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboListPageModule", function() { return ComboListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _combolist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combolist */ "./src/app/combolist/combolist.ts");







let ComboListPageModule = class ComboListPageModule {
};
ComboListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _combolist__WEBPACK_IMPORTED_MODULE_6__["ComboListPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _combolist__WEBPACK_IMPORTED_MODULE_6__["ComboListPage"]
                }
            ])
        ],
    })
], ComboListPageModule);



/***/ }),

/***/ "./src/app/combolist/combolist.scss":
/*!******************************************!*\
  !*** ./src/app/combolist/combolist.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  text-align: center;\n  padding: 0px;\n  margin-left: -6px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  height: 48px;\n  padding-top: 12px;\n}\n\np {\n  line-height: 1;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 17px;\n  text-align: left;\n  letter-spacing: -0.4px;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 4px;\n  letter-spacing: -0.34px;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 104px !important;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .badge.badge-ios {\n  background-color: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.m-left {\n  margin-left: 11px;\n}\n\n.m-right {\n  margin-right: 11px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 94%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 16px;\n  height: 48px;\n  margin-top: 16px;\n}\n\n.text-empty {\n  color: #828282;\n}\n\n.img-heart {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 104px;\n}\n\n.p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  max-width: 53%;\n}\n\n.p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n}\n\n.p-top-minprice {\n  top: 10px;\n  font-size: 12px;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  position: absolute;\n  right: 8px;\n  width: 100%;\n  bottom: 0;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 104px;\n  position: absolute;\n}\n\n.badge-ios {\n  background-color: #26bed6;\n  font-size: 12px;\n}\n\n.btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n.ico-gift {\n  height: 16px;\n  position: absolute;\n  right: 90px;\n  top: 6px;\n  color: #e52822;\n}\n\n.col-description-hotellist {\n  position: relative;\n  margin-top: 13px;\n  left: 112px;\n  width: 69%;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 71%;\n  }\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  border-radius: 6px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n.m-top-5 {\n  margin-top: 5px;\n}\n\n.m-top-10 {\n  margin-top: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  color: #26bed6;\n  background: #ffffff;\n}\n\n.fix-height-104 {\n  height: 104px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: 0;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvY29tYm9saXN0L2NvbWJvbGlzdC5zY3NzIiwic3JjL2FwcC9jb21ib2xpc3QvY29tYm9saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0U7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGNBQUE7QUNDSjs7QURDRTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUlBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFBZ0MsdUNBQUE7RUFDaEMsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDREo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREVFO0VBRUUsa0JBQUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7QUNBTjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUlBLFlBQUE7QUNDSjs7QURDRTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFFRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FK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RSxhQUFBO0FDU047O0FEUEk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNVTjs7QURSSTtFQUNFLGlCQUFBO0FDV04iLCJmaWxlIjoic3JjL2FwcC9jb21ib2xpc3QvY29tYm9saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmhlYWRlci10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmhlYWRlci1pY29ue1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICB9XG4gIC50ZXh0LXRpdGxlXG4gIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogNDhweDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgfVxuXG4gIHB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgLnRleHQtbmFtZVxuICB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gICAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqLyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogMTdweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgLy9tYXgtd2lkdGg6IDIxNnB4O1xuICB9XG4gIC50ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLXRvcDo0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIH1cbiAgLmJhZGdlLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgfVxuICAuaW1nLXJhZGl1c1xuICB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbiAgLnRleHQtbmFtZXJvb21cbiAge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgIFxuICB9IFxuICAudGV4dC1jb21ib1xuICB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgfVxuICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgfVxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgXG5cbiAgLmlvbi10aHVtYm5haWx7XG4gICAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuICB9XG4gIC5iYWRnZS5iYWRnZS1pb3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmxhYmVsLWJhZGdle1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgfVxuXG4gIC5pdGVtLWJsb2Nre1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgfVxuICAvKmNzcyBjaG8gaW9zKi9cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuICAuaXRlbS1pb3MgLnRyYW5zYm94IHsgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cbi5pdGVtLWlvcyAudHJhbnNib3gxIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxMnB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4gIH1cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4gIC5pdGVtLWlvcyAudHJhbnNib3gyIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxM3B4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4gIH1cbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLml0ZW0taW9zIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgbWFyZ2luOjAgMTFweDtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xuICB9XG5cbiAgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbiAgfVxuXG4gIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmxhYmVsLWlvcyB7XG4gICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4gIH1cbiAgLypjc3MgY2hvIGlvcyovXG5cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gY8OzIHJhdGluZyAmIGxvY2F0aW9uXG4gIC5pdGVtLW1kIC50cmFuc2JveCB7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206IDE4cHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4uaXRlbS1tZCAudHJhbnNib3gxIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxMnB4O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4gIH1cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4gIC5pdGVtLW1kIC50cmFuc2JveDIgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEzcHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbiAgfVxuXG4gIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cblxuICAuaXRlbS1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIG1hcmdpbjowIDExcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbiAgfVxuICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gIH1cbiAgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAubGFiZWwtbWQge1xuICAgIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xuICB9XG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgXG4gIC5wcmljZS5jb2x7XG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xuICB9XG4gIFxufVxuLm0tbGVmdHtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG4ubS1yaWdodHtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuLmJ0bi1jbGVhci1maWx0ZXJ7XG4gIGJvcmRlcjpub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5NCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW57XG4gIGNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6NDhweDtcbn1cbi5idG4tZmlsdGVyLWFnYWluLW5vZmlsdGVye1xuICBib3JkZXI6bm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi50ZXh0LWVtcHR5e1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5pbWctaGVhcnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAtNHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmNscy1pbWctY29udGVudHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uY2xzLWljb24tY29udGVudHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5sYWJlbC1wcmljZS1sb2dpbntcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50LWJvbGR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRleHQtbG9naW57XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuXG4gIC50cmFuc2JveF8wIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA0cHg7XG4gIH1cbiAgcCxoMntcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnJvdy1pdGVtLWhvdGVsbGlzdHtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgfVxuXG4gIC5wLXRvcC1kZWFsdHlwZXtcbiAgICB0b3A6OXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gICAgbWF4LXdpZHRoOiA1MyU7XG4gIH1cbiAgLnAtdG9wLWRlYWx0eXBlLTZ7XG4gICAgdG9wOjVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICB9XG4gIC5sYWJlbC1taW5wcmljZXtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLmxhYmVsLW1pbnByaWNlVEF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICB9XG4gIC5sYWJlbC1kZWFscHJpY2V7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5wLXRvcC1taW5wcmljZXtcbiAgICB0b3A6MTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG4gIH1cbiAgLnAtdG9wLTh7XG4gICAgdG9wOjhweDtcbiAgfVxuICAucC10b3AtMTB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIC5wLXRvcC0xOHtcbiAgICBwYWRkaW5nLXRvcDogMThweDtcbiAgfVxuICAuaC1saW5le1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAuY29sLWltZy1ob3RlbGxpc3R7XG4gICAgLy9oZWlnaHQ6IDEwOXB4O1xuICAgIGhlaWdodDogMTA0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5iYWRnZS1pb3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmJ0bi1oZWFkZXJ7XG4gICAgd2lkdGg6IDQ4cHg7Y29sb3I6ICM0ZjRmNGY7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIH1cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuLmljby1naWZ0e1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDkwcHg7XG4gIHRvcDogNnB4O1xuICBjb2xvcjogI2U1MjgyMjtcbn1cbi5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGxlZnQ6IDExMnB4O1xuICB3aWR0aDogNjklO1xufVxuICBcbiAgICBAbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gICAgICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgIH1cbiAgICAgIC5wLXRvcC0xMHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWxvZ2lue1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4gICAgICAgIHdpZHRoOjcxJTtcbiAgICAgIH1cbiAgICB9XG4gICAgOmhvc3R7XG4gICAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG4gICAgfVxuICAgIGlvbi1iYWRnZXtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG4gICAgLmxhYmVsLWJhZGdle1xuICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICA6Om5nLWRlZXB7XG4gICAgICAuaW5maW5pdGUtbG9hZGluZy10ZXh0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLy9za2VsZXRvbi1zdHlsZVxuICAgICAgaW9uLXNrZWxldG9uLXRleHR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb2wtaW1nLWhvdGVsbGlzdC1za3tcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LW5hbWUtc2tcbiAgICAgIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgIH1cbiAgICAgIC5wLXNre1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG4gICAgICAubGFzdC1yb3ctc2t7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICB9XG4gICAgICAucm93LWl0ZW0taG90ZWxsaXN0LXNre1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOjE2cHg7XG4gICAgICB9XG4gICAgICAuaC1saW5lLXNre1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgIH1cbiAgICAubS10b3AtNXtcbiAgICAgIG1hcmdpbi10b3A6NXB4O1xuICAgIH1cbiAgICAubS10b3AtMTB7XG4gICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgfVxuICAgIC5zcC1pdGVtLXN0eWxle1xuICAgICAgcGFkZGluZzozcHggNXB4O1xuICAgICAgYm9yZGVyOnNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgfVxuICAgIC5maXgtaGVpZ2h0LTEwNHtcbiAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgfVxuICAgIC5sYXN0LXJvd3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTowO1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmNscy1saW5laGVpZ2h0e1xuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgfVxuLy8gICAudGV4dC1uYW1lXG4vLyAgIHtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICB9XG4vLyAgIC50ZXh0e1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgIH1cbi8vICAgLmJhZGdlLW1kIHtcbi8vICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4vLyAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbi8vICAgfVxuLy8gICAuaW1nLXJhZGl1c1xuLy8gICB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICAgICAgd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgICBoZWlnaHQ6IDEwNHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vICAgLmNvbCB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgICBtaW4taGVpZ2h0OiAxcHg7XG4vLyAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuLy8gICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuLy8gICAgIGZsZXgtYmFzaXM6IDA7XG4vLyAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbi8vICAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbi8vICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbi8vICAgICBmbGV4LWdyb3c6IDE7XG4vLyAgIH1cbi8vICAgLnRleHQtbmFtZXJvb21cbi8vICAge1xuLy8gICAgIHdpZHRoOiAxNjBweDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgIFxuLy8gICB9IFxuLy8gICAudGV4dC1jb21ib1xuLy8gICB7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgICBjb2xvcjogI2U1MjgyMjtcbi8vICAgfVxuLy8gICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbi8vICAgICB3aWR0aDogMTA0cHg7XG4vLyAgICAgaGVpZ2h0OiAxMDRweDtcbi8vICAgfVxuLy8gICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuXG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgXG5cbi8vICAgLmlvbi10aHVtYm5haWx7XG4vLyAgICAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuLy8gICB9XG4vLyAgIC5iYWRnZS5iYWRnZS1pb3N7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgIH1cbi8vICAgLmxhYmVsLWJhZGdle1xuLy8gICAgIGNvbG9yOiAjMjIyMjIyO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICBmb250LXdlaWdodDo0MDA7XG4vLyAgICAgbWFyZ2luLWxlZnQ6IDNweDtcbi8vICAgfVxuXG4vLyAgIC5pdGVtLWJsb2Nre1xuLy8gICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuLy8gICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgICB3aWR0aDogYXV0bztcbi8vICAgICBwYWRkaW5nOiA1cHggMDtcbi8vICAgfVxuLy8gICAvKmNzcyBjaG8gaW9zKi9cbi8vICAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuLy8gICAuaXRlbS1pb3MgLnRyYW5zYm94IHsgXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIC8vbGVmdDogMTZweDtcbi8vICAgICB3aWR0aDogMTA0cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICAgIGJvdHRvbTogMTZweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuLy8gfVxuLy8gLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cbi8vIC5pdGVtLWlvcyAudHJhbnNib3gxIHsgXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIC8vbGVmdDogMTZweDtcbi8vICAgICB3aWR0aDogMTA0cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICAgIGJvdHRvbToxMnB4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4vLyAgIH1cbi8vICAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4vLyAgIC5pdGVtLWlvcyAudHJhbnNib3gyIHsgXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIC8vbGVmdDogMTZweDtcbi8vICAgICB3aWR0aDogMTA0cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICAgIGJvdHRvbToxM3B4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4vLyAgIH1cbi8vICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuLy8gICB9XG4vLyAgLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vICAgLml0ZW0taW9zIHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwO1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBmb250LXNpemU6IDEuN3JlbTtcbi8vICAgICBjb2xvcjogIzIyMjIyMjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4vLyAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4vLyAgICAgbWFyZ2luOjAgMTFweDtcbi8vICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xuLy8gICB9XG5cbi8vICAgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuLy8gICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbi8vICAgfVxuXG4vLyAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4vLyAgIH1cbi8vICAgLmxhYmVsLWlvcyB7XG4vLyAgICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4vLyAgIH1cbi8vICAgLypjc3MgY2hvIGlvcyovXG5cbi8vICAgLypjc3MgY2hvIGFuZHJvaWQqL1xuLy8gICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gY8OzIHJhdGluZyAmIGxvY2F0aW9uXG4vLyAgIC5pdGVtLW1kIC50cmFuc2JveCB7IFxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAvL2xlZnQ6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDEwNHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbi8vICAgICBib3R0b206IDE4cHg7XG4vLyAgICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbi8vIH1cbi8vIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4vLyAuaXRlbS1tZCAudHJhbnNib3gxIHsgXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIC8vbGVmdDogMTZweDtcbi8vICAgICB3aWR0aDogMTA0cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICAgIGJvdHRvbToxMnB4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4vLyAgIH1cbi8vICAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4vLyAgIC5pdGVtLW1kIC50cmFuc2JveDIgeyBcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLy9sZWZ0OiAxNnB4O1xuLy8gICAgIHdpZHRoOiAxMDRweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgICAgYm90dG9tOjEzcHg7XG4vLyAgICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbi8vICAgfVxuXG4vLyAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4vLyAgIH1cblxuLy8gICAuaXRlbS1tZCB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMDtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgZm9udC1zaXplOiAxLjdyZW07XG4vLyAgICAgY29sb3I6ICMyMjIyMjI7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuLy8gICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuLy8gICAgIG1hcmdpbjowIDExcHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbi8vICAgfVxuLy8gICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbi8vICAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4vLyAgIH1cbi8vICAgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbi8vICAgfVxuLy8gICAubGFiZWwtbWQge1xuLy8gICAgIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xuLy8gICB9XG4vLyAgIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgXG4vLyAgIC5wcmljZS5jb2x7XG4vLyAgICAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xuLy8gICB9XG4gIFxuLy8gfVxuLy8gLm0tbGVmdHtcbi8vICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4vLyB9XG4vLyAubS1yaWdodHtcbi8vICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuLy8gfVxuLy8gLmJ0bi1jbGVhci1maWx0ZXJ7XG4vLyAgIGJvcmRlcjpub25lO1xuLy8gICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbi8vICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBmb250LXNpemU6IDE3cHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDQ4cHg7XG4vLyB9XG5cbi8vIC5idG4tZmlsdGVyLWFnYWlue1xuLy8gICBjb2xvcjogI0Y3OTIyMTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbi8vICAgYm9yZGVyLWNvbG9yOiAgI0Y3OTIyMTtcbi8vICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgZm9udC1zaXplOiAxN3B4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OjQ4cHg7XG4vLyB9XG4vLyAuYnRuLWZpbHRlci1hZ2Fpbi1ub2ZpbHRlcntcbi8vICAgYm9yZGVyOm5vbmU7XG4vLyAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBmb250LXNpemU6IDE3cHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBtYXJnaW46IDBweCAxNnB4O1xuLy8gICBoZWlnaHQ6IDQ4cHg7XG4vLyAgIG1hcmdpbi10b3A6IDE2cHg7XG4vLyB9XG4vLyAudGV4dC1lbXB0eXtcbi8vICAgY29sb3I6ICM4MjgyODI7XG4vLyB9XG4vLyAuaW1nLWhlYXJ0e1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogLTRweDtcbi8vICAgbGVmdDogLTRweDtcbi8vICAgd2lkdGg6IDUwcHg7XG4vLyAgIGhlaWdodDogNTBweDtcbi8vIH1cbi8vIC5jbHMtaW1nLWNvbnRlbnR7XG4vLyAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gfVxuLy8gLmNscy1pY29uLWNvbnRlbnR7XG4vLyAgIHBhZGRpbmctbGVmdDogMjBweDtcbi8vICAgcGFkZGluZy10b3A6IDIwcHg7XG4vLyB9XG4vLyAubGFiZWwtcHJpY2UtbG9naW57XG4vLyAgIGNvbG9yOiAjMjZiZWQ2O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyB9XG4vLyAudC1ib2xke1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vIH1cbi8vIC50ZXh0LWxvZ2lue1xuLy8gICBmb250LXNpemU6IDEzcHg7XG4vLyB9XG5cblxuLy8gICAudHJhbnNib3hfMCB7IFxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTA0cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNHB4O1xuLy8gICB9XG4vLyAgIHAsaDJ7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICB9XG4vLyAgIC5yb3ctaXRlbS1ob3RlbGxpc3R7XG4vLyAgICAgcGFkZGluZzogMTFweCAxMXB4IDhweCAxMXB4O1xuLy8gICB9XG5cbi8vICAgLnAtdG9wLWRlYWx0eXBle1xuLy8gICAgIHRvcDo5cHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgICBjb2xvcjogI2U1MjgyMjtcbi8vICAgfVxuLy8gICAucC10b3AtZGVhbHR5cGUtNntcbi8vICAgICB0b3A6NXB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgICAgY29sb3I6ICNlNTI4MjI7XG4vLyAgIH1cbi8vICAgLmxhYmVsLW1pbnByaWNle1xuLy8gICAgIGNvbG9yOiAjMjZiZWQ2O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICB9XG4vLyAgIC5sYWJlbC1taW5wcmljZVRBe1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbi8vICAgICBjb2xvcjogIzgyODI4Mjtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgcmlnaHQ6IDVweDtcbi8vICAgfVxuLy8gICAubGFiZWwtZGVhbHByaWNle1xuLy8gICAgIGNvbG9yOiAjZTUyODIyO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4vLyAgIH1cbi8vICAgLnAtdG9wLW1pbnByaWNle1xuLy8gICAgIHRvcDoxMHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgfVxuLy8gICAucC10b3AtOHtcbi8vICAgICB0b3A6OHB4O1xuLy8gICB9XG4vLyAgIC5wLXRvcC0xMHtcbi8vICAgICB0b3A6MTBweDtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuLy8gICB9XG4vLyAgIC5wLXRvcC0xOHtcbi8vICAgICBwYWRkaW5nLXRvcDogMThweDtcbi8vICAgfVxuLy8gICAuaC1saW5le1xuLy8gICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuLy8gICAgIG1hcmdpbjogMCAxNnB4O1xuLy8gICAgIHBhZGRpbmctdG9wOiA4cHg7XG4vLyAgICAgb3BhY2l0eTogMC41O1xuLy8gICB9XG4vLyAgIC5jb2wtaW1nLWhvdGVsbGlzdHtcbi8vICAgICBoZWlnaHQ6IDEwOXB4O1xuLy8gICB9XG4vLyAgIC5iYWRnZS1pb3N7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgIH1cbi8vICAgLmJ0bi1oZWFkZXJ7XG4vLyAgICAgd2lkdGg6IDQ4cHg7Y29sb3I6ICM0ZjRmNGY7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTtcbi8vICAgICBoZWlnaHQ6IDQ4cHg7XG4vLyAgIH1cbi8vICAgaW1nIHtcbi8vICAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgIH1cbiAgXG4vLyAgICAgQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuLy8gICAgICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4vLyAgICAgICAgIG1heC13aWR0aDogMTg4cHg7XG4vLyAgICAgICAgIGxlZnQ6IDEycHg7XG4vLyAgICAgICB9XG4vLyAgICAgICAucC10b3AtMTB7XG4vLyAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbi8vICAgICAgICAgZm9udC1zaXplOjE0cHg7XG4vLyAgICAgICB9XG4vLyAgICAgICAudGV4dC1sb2dpbntcbi8vICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbiAgXG4vLyAgICAgOmhvc3R7XG4vLyAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG4vLyAgICAgfVxuLy8gICAgIGlvbi1iYWRnZXtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbi8vICAgICB9XG4vLyAgICAgLmxhYmVsLWJhZGdle1xuLy8gICAgICAgcGFkZGluZy10b3A6IDJweDtcbi8vICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuLy8gICAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIH1cbi8vICAgICA6Om5nLWRlZXB7XG4vLyAgICAgICAuaW5maW5pdGUtbG9hZGluZy10ZXh0e1xuLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgfVxuLy8gICAgICAgLy9za2VsZXRvbi1zdHlsZVxuLy8gICAgICAgaW9uLXNrZWxldG9uLXRleHR7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICB9XG4gICAgICBcbi8vICAgICAgIC5jb2wtaW1nLWhvdGVsbGlzdC1za3tcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4vLyAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuLy8gICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbi8vICAgICAgIH1cbi8vICAgICAgIC50ZXh0LW5hbWUtc2tcbi8vICAgICAgIHtcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgICAgICAgIGhlaWdodDogMThweDtcbi8vICAgICAgIH1cbi8vICAgICAgIC5wLXNre1xuLy8gICAgICAgICBoZWlnaHQ6IDE2cHg7XG4vLyAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICB9XG4vLyAgICAgICAubGFzdC1yb3ctc2t7XG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiA1MnB4O1xuLy8gICAgICAgICBoZWlnaHQ6IDE3cHg7XG4vLyAgICAgICB9XG4vLyAgICAgICAucm93LWl0ZW0taG90ZWxsaXN0LXNre1xuLy8gICAgICAgICBwYWRkaW5nOiA4cHg7XG4vLyAgICAgICAgIHBhZGRpbmctdG9wOjE2cHg7XG4vLyAgICAgICB9XG4vLyAgICAgICAuaC1saW5lLXNre1xuLy8gICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbi8vICAgICAgICAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbi8vICAgICAgICAgb3BhY2l0eTogMC41O1xuLy8gICAgICAgfVxuLy8gICAgIH0iLCIuaGVhZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uYmFkZ2UtbWQge1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uaW1nLXJhZGl1cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDRweCAhaW1wb3J0YW50O1xufVxuXG4uY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4udGV4dC1uYW1lcm9vbSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRleHQtY29tYm8ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qY3NzIGNobyBpb3MqL1xuICAvKmNzcyBjaG8gaW9zKi9cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICAvKmNzcyBjaG8gYW5kcm9pZCovXG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmlvbi10aHVtYm5haWwge1xuICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmJhZGdlLmJhZGdlLWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtYmFkZ2Uge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWJsb2NrIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiA0LjRyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTJweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWlvcyB7XG4gIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICBtYXJnaW46IDAgMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5wcmljZS5jb2wge1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG59XG5cbi5tLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMTFweDtcbn1cblxuLm0tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cbi5idG4tY2xlYXItZmlsdGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5NCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW4ge1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5idG4tZmlsdGVyLWFnYWluLW5vZmlsdGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4udGV4dC1lbXB0eSB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uaW1nLWhlYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC00cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jbHMtaW1nLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmNscy1pY29uLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubGFiZWwtcHJpY2UtbG9naW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0LWxvZ2luIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udHJhbnNib3hfMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA0cHg7XG59XG5cbnAsIGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucm93LWl0ZW0taG90ZWxsaXN0IHtcbiAgbWFyZ2luOiAxNnB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4ucC10b3AtZGVhbHR5cGUge1xuICB0b3A6IDlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIG1heC13aWR0aDogNTMlO1xufVxuXG4ucC10b3AtZGVhbHR5cGUtNiB7XG4gIHRvcDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmxhYmVsLW1pbnByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubGFiZWwtbWlucHJpY2VUQSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5sYWJlbC1kZWFscHJpY2Uge1xuICBjb2xvcjogI2U1MjgyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wLXRvcC1taW5wcmljZSB7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucC10b3AtOCB7XG4gIHRvcDogOHB4O1xufVxuXG4ucC10b3AtMTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG59XG5cbi5wLXRvcC0xOCB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuXG4uaC1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb2wtaW1nLWhvdGVsbGlzdCB7XG4gIGhlaWdodDogMTA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJhZGdlLWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi1oZWFkZXIge1xuICB3aWR0aDogNDhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaWNvLWdpZnQge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDkwcHg7XG4gIHRvcDogNnB4O1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGxlZnQ6IDExMnB4O1xuICB3aWR0aDogNjklO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5wLXRvcC0xMCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnRleHQtbG9naW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICAgIHdpZHRoOiA3MSU7XG4gIH1cbn1cbjpob3N0IHtcbiAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xufVxuXG5pb24tYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5sYWJlbC1iYWRnZSB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjo6bmctZGVlcCAuaW5maW5pdGUtbG9hZGluZy10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLmNvbC1pbWctaG90ZWxsaXN0LXNrIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAudGV4dC1uYW1lLXNrIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAucC1zayB7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAubGFzdC1yb3ctc2sge1xuICBwYWRkaW5nLXRvcDogNTJweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuOjpuZy1kZWVwIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5oLWxpbmUtc2sge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubS10b3AtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm0tdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNwLWl0ZW0tc3R5bGUge1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uZml4LWhlaWdodC0xMDQge1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4ubGFzdC1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xzLWxpbmVoZWlnaHQge1xuICBsaW5lLWhlaWdodDogMTRweDtcbn0iXX0= */"
=======
module.exports = ".header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  text-align: center;\n  padding: 0px;\n  margin-left: -6px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  height: 48px;\n  padding-top: 12px;\n}\n\np {\n  line-height: 1;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 17px;\n  text-align: left;\n  letter-spacing: -0.4px;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 4px;\n  letter-spacing: -0.34px;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 104px !important;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .badge.badge-ios {\n  background-color: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.m-left {\n  margin-left: 11px;\n}\n\n.m-right {\n  margin-right: 11px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 94%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 16px;\n  height: 48px;\n  margin-top: 16px;\n}\n\n.text-empty {\n  color: #828282;\n}\n\n.img-heart {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 104px;\n}\n\n.p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  max-width: 53%;\n}\n\n.p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n}\n\n.p-top-minprice {\n  top: 10px;\n  font-size: 12px;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  position: absolute;\n  right: 8px;\n  width: 100%;\n  bottom: 0;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 104px;\n  position: absolute;\n}\n\n.badge-ios {\n  background-color: #26bed6;\n  font-size: 12px;\n}\n\n.btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n.ico-gift {\n  height: 16px;\n  position: absolute;\n  right: 90px;\n  top: 6px;\n  color: #e52822;\n}\n\n.col-description-hotellist {\n  position: relative;\n  margin-top: 13px;\n  left: 112px;\n  width: 69%;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 71%;\n  }\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  border-radius: 6px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n.m-top-5 {\n  margin-top: 5px;\n}\n\n.m-top-10 {\n  margin-top: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  color: #26bed6;\n  background: #ffffff;\n}\n\n.fix-height-104 {\n  height: 104px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: 0;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2NvbWJvbGlzdC9jb21ib2xpc3Quc2NzcyIsInNyYy9hcHAvY29tYm9saXN0L2NvbWJvbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENFO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FEQ0U7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFJQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQWdDLHVDQUFBO0VBQ2hDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURFRTtFQUVFLGtCQUFBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FDQU47O0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7RUFJQSxZQUFBO0FDQ0o7O0FEQ0U7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBRUUsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURFRTtFQUNFLFlBQUE7RUFD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Q0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDVU47O0FEUkk7RUFDRSxpQkFBQTtBQ1dOIiwiZmlsZSI6InNyYy9hcHAvY29tYm9saXN0L2NvbWJvbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5oZWFkZXItdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG4gIC5oZWFkZXItaWNvbntcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcbiAgfVxuICAudGV4dC10aXRsZVxuICB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gIH1cblxuICBwe1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIC50ZXh0LW5hbWVcbiAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDEgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAgIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xuICAgIG1heC1oZWlnaHQ6IDE3cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIC8vbWF4LXdpZHRoOiAyMTZweDtcbiAgfVxuICAudGV4dHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICB9XG4gIC5iYWRnZS1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gIH1cbiAgLmltZy1yYWRpdXNcbiAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICAgICAgaGVpZ2h0OiAxMDRweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jb2wge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC50ZXh0LW5hbWVyb29tXG4gIHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICBcbiAgfSBcbiAgLnRleHQtY29tYm9cbiAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gIH1cbiAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cbiAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIFxuXG4gIC5pb24tdGh1bWJuYWlse1xuICAgIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbiAgfVxuICAuYmFkZ2UuYmFkZ2UtaW9ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5sYWJlbC1iYWRnZXtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIH1cblxuICAuaXRlbS1ibG9ja3tcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtaW4taGVpZ2h0OiA0LjRyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cbiAgLypjc3MgY2hvIGlvcyovXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cbiAgLml0ZW0taW9zIC50cmFuc2JveCB7IFxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206IDE2cHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4uaXRlbS1pb3MgLnRyYW5zYm94MSB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTJweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuICB9XG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xuICAuaXRlbS1pb3MgLnRyYW5zYm94MiB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTNweDtcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuICB9XG4gIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuIC5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5pdGVtLWlvcyB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgIG1hcmdpbjowIDExcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbiAgfVxuXG4gIC5pdGVtLWlvcyBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gIH1cblxuICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5sYWJlbC1pb3Mge1xuICAgIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xuICB9XG4gIC8qY3NzIGNobyBpb3MqL1xuXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuICAuaXRlbS1tZCAudHJhbnNib3ggeyBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOiAxOHB4O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4vL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyBsb2NhdGlvblxuLml0ZW0tbWQgLnRyYW5zYm94MSB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTJweDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuICB9XG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xuICAuaXRlbS1tZCAudHJhbnNib3gyIHsgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbToxM3B4O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4gIH1cblxuICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG5cbiAgLml0ZW0tbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICBtYXJnaW46MCAxMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG4gIH1cbiAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xuICB9XG4gIC5pdGVtLW1kIC5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmxhYmVsLW1kIHtcbiAgICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbiAgfVxuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIFxuICAucHJpY2UuY29se1xuICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcbiAgfVxuICBcbn1cbi5tLWxlZnR7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xufVxuLm0tcmlnaHR7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cbi5idG4tY2xlYXItZmlsdGVye1xuICBib3JkZXI6bm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogOTQlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5idG4tZmlsdGVyLWFnYWlue1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAgI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjQ4cHg7XG59XG4uYnRuLWZpbHRlci1hZ2Fpbi1ub2ZpbHRlcntcbiAgYm9yZGVyOm5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4udGV4dC1lbXB0eXtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uaW1nLWhlYXJ0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTRweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5jbHMtaW1nLWNvbnRlbnR7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNscy1pY29uLWNvbnRlbnR7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubGFiZWwtcHJpY2UtbG9naW57XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udC1ib2xke1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50ZXh0LWxvZ2lue1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cblxuICAudHJhbnNib3hfMCB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbTogMDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNHB4O1xuICB9XG4gIHAsaDJ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5yb3ctaXRlbS1ob3RlbGxpc3R7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGhlaWdodDogMTA0cHg7XG4gIH1cblxuICAucC10b3AtZGVhbHR5cGV7XG4gICAgdG9wOjlweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICAgIG1heC13aWR0aDogNTMlO1xuICB9XG4gIC5wLXRvcC1kZWFsdHlwZS02e1xuICAgIHRvcDo1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgfVxuICAubGFiZWwtbWlucHJpY2V7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5sYWJlbC1taW5wcmljZVRBe1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgfVxuICAubGFiZWwtZGVhbHByaWNle1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAucC10b3AtbWlucHJpY2V7XG4gICAgdG9wOjEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIFxuICB9XG4gIC5wLXRvcC04e1xuICAgIHRvcDo4cHg7XG4gIH1cbiAgLnAtdG9wLTEwe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICAucC10b3AtMTh7XG4gICAgcGFkZGluZy10b3A6IDE4cHg7XG4gIH1cbiAgLmgtbGluZXtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgLmNvbC1pbWctaG90ZWxsaXN0e1xuICAgIC8vaGVpZ2h0OiAxMDlweDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuYmFkZ2UtaW9ze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5idG4taGVhZGVye1xuICAgIHdpZHRoOiA0OHB4O2NvbG9yOiAjNGY0ZjRmO2JhY2tncm91bmQtY29sb3I6ICNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO2JveC1zaGFkb3c6IG5vbmU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbi5pY28tZ2lmdHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5MHB4O1xuICB0b3A6IDZweDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG4uY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBsZWZ0OiAxMTJweDtcbiAgd2lkdGg6IDY5JTtcbn1cbiAgXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAgICAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICB9XG4gICAgICAucC10b3AtMTB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1sb2dpbntcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOjQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuICAgICAgICB3aWR0aDo3MSU7XG4gICAgICB9XG4gICAgfVxuICAgIDpob3N0e1xuICAgICAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xuICAgIH1cbiAgICBpb24tYmFkZ2V7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgfVxuICAgIC5sYWJlbC1iYWRnZXtcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgOjpuZy1kZWVwe1xuICAgICAgLmluZmluaXRlLWxvYWRpbmctdGV4dHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC8vc2tlbGV0b24tc3R5bGVcbiAgICAgIGlvbi1za2VsZXRvbi10ZXh0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY29sLWltZy1ob3RlbGxpc3Qtc2t7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1uYW1lLXNrXG4gICAgICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgICAucC1za3tcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmxhc3Qtcm93LXNre1xuICAgICAgICBwYWRkaW5nLXRvcDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgfVxuICAgICAgLnJvdy1pdGVtLWhvdGVsbGlzdC1za3tcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDoxNnB4O1xuICAgICAgfVxuICAgICAgLmgtbGluZS1za3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgICAgIG1hcmdpbjogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm0tdG9wLTV7XG4gICAgICBtYXJnaW4tdG9wOjVweDtcbiAgICB9XG4gICAgLm0tdG9wLTEwe1xuICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIH1cbiAgICAuc3AtaXRlbS1zdHlsZXtcbiAgICAgIHBhZGRpbmc6M3B4IDVweDtcbiAgICAgIGJvcmRlcjpzb2xpZCAwLjVweCAjMjZiZWQ2O1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIH1cbiAgICAuZml4LWhlaWdodC0xMDR7XG4gICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgIH1cbiAgICAubGFzdC1yb3d7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206MDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5jbHMtbGluZWhlaWdodHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIH1cbi8vICAgLnRleHQtbmFtZVxuLy8gICB7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgfVxuLy8gICAudGV4dHtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICB9XG4vLyAgIC5iYWRnZS1tZCB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuLy8gICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4vLyAgIH1cbi8vICAgLmltZy1yYWRpdXNcbi8vICAge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgICAgIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuLy8gICAgICAgaGVpZ2h0OiAxMDRweCAhaW1wb3J0YW50O1xuLy8gICB9XG4vLyAgIC5jb2wge1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgbWluLWhlaWdodDogMXB4O1xuLy8gICAgIC13ZWJraXQtZmxleC1iYXNpczogMDtcbi8vICAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbi8vICAgICBmbGV4LWJhc2lzOiAwO1xuLy8gICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4vLyAgICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4vLyAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4vLyAgICAgZmxleC1ncm93OiAxO1xuLy8gICB9XG4vLyAgIC50ZXh0LW5hbWVyb29tXG4vLyAgIHtcbi8vICAgICB3aWR0aDogMTYwcHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICBcbi8vICAgfSBcbi8vICAgLnRleHQtY29tYm9cbi8vICAge1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgICAgY29sb3I6ICNlNTI4MjI7XG4vLyAgIH1cbi8vICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4vLyAgICAgd2lkdGg6IDEwNHB4O1xuLy8gICAgIGhlaWdodDogMTA0cHg7XG4vLyAgIH1cbi8vICAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuLy8gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIFxuXG4vLyAgIC5pb24tdGh1bWJuYWlse1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbi8vICAgfVxuLy8gICAuYmFkZ2UuYmFkZ2UtaW9ze1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICB9XG4vLyAgIC5sYWJlbC1iYWRnZXtcbi8vICAgICBjb2xvcjogIzIyMjIyMjtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgZm9udC13ZWlnaHQ6NDAwO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4vLyAgIH1cblxuLy8gICAuaXRlbS1ibG9ja3tcbi8vICAgICBwYWRkaW5nOiAwO1xuLy8gICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbi8vICAgICBtaW4taGVpZ2h0OiA0LjRyZW07XG4vLyAgICAgYm9yZGVyOiAwO1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4vLyAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgICAgd2lkdGg6IGF1dG87XG4vLyAgICAgcGFkZGluZzogNXB4IDA7XG4vLyAgIH1cbi8vICAgLypjc3MgY2hvIGlvcyovXG4vLyAgIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cbi8vICAgLml0ZW0taW9zIC50cmFuc2JveCB7IFxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAvL2xlZnQ6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDEwNHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbi8vICAgICBib3R0b206IDE2cHg7XG4vLyAgICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbi8vIH1cbi8vIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4vLyAuaXRlbS1pb3MgLnRyYW5zYm94MSB7IFxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAvL2xlZnQ6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDEwNHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbi8vICAgICBib3R0b206MTJweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuLy8gICB9XG4vLyAgIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xuLy8gICAuaXRlbS1pb3MgLnRyYW5zYm94MiB7IFxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAvL2xlZnQ6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDEwNHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbi8vICAgICBib3R0b206MTNweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuLy8gICB9XG4vLyAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbi8vICAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbi8vICAgfVxuLy8gIC5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbi8vICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuLy8gICB9XG4vLyAgIC5pdGVtLWlvcyB7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMDtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgZm9udC1zaXplOiAxLjdyZW07XG4vLyAgICAgY29sb3I6ICMyMjIyMjI7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuLy8gICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuLy8gICAgIG1hcmdpbjowIDExcHg7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbi8vICAgfVxuXG4vLyAgIC5pdGVtLWlvcyBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbi8vICAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4vLyAgIH1cblxuLy8gICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4vLyAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuLy8gICB9XG4vLyAgIC5sYWJlbC1pb3Mge1xuLy8gICAgIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xuLy8gICB9XG4vLyAgIC8qY3NzIGNobyBpb3MqL1xuXG4vLyAgIC8qY3NzIGNobyBhbmRyb2lkKi9cbi8vICAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuLy8gICAuaXRlbS1tZCAudHJhbnNib3ggeyBcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLy9sZWZ0OiAxNnB4O1xuLy8gICAgIHdpZHRoOiAxMDRweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgICAgYm90dG9tOiAxOHB4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4vLyB9XG4vLyAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyBsb2NhdGlvblxuLy8gLml0ZW0tbWQgLnRyYW5zYm94MSB7IFxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAvL2xlZnQ6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDEwNHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbi8vICAgICBib3R0b206MTJweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuLy8gICB9XG4vLyAgIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xuLy8gICAuaXRlbS1tZCAudHJhbnNib3gyIHsgXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIC8vbGVmdDogMTZweDtcbi8vICAgICB3aWR0aDogMTA0cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICAgIGJvdHRvbToxM3B4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4vLyAgIH1cblxuLy8gICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbi8vICAgICBib3JkZXItYm90dG9tOiBub25lO1xuLy8gICB9XG5cbi8vICAgLml0ZW0tbWQge1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDA7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuLy8gICAgIGNvbG9yOiAjMjIyMjIyO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbi8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbi8vICAgICBtYXJnaW46MCAxMXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG4vLyAgIH1cbi8vICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4vLyAgICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xuLy8gICB9XG4vLyAgIC5pdGVtLW1kIC5pdGVtLWlubmVyIHtcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4vLyAgIH1cbi8vICAgLmxhYmVsLW1kIHtcbi8vICAgICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbi8vICAgfVxuLy8gICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIFxuLy8gICAucHJpY2UuY29se1xuLy8gICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcbi8vICAgfVxuICBcbi8vIH1cbi8vIC5tLWxlZnR7XG4vLyAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuLy8gfVxuLy8gLm0tcmlnaHR7XG4vLyAgIG1hcmdpbi1yaWdodDogMTFweDtcbi8vIH1cbi8vIC5idG4tY2xlYXItZmlsdGVye1xuLy8gICBib3JkZXI6bm9uZTtcbi8vICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuLy8gICBmbG9hdDogbGVmdDtcbi8vICAgZm9udC1zaXplOiAxN3B4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA0OHB4O1xuLy8gfVxuXG4vLyAuYnRuLWZpbHRlci1hZ2Fpbntcbi8vICAgY29sb3I6ICNGNzkyMjE7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4vLyAgIGJvcmRlci1jb2xvcjogICNGNzkyMjE7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGZvbnQtc2l6ZTogMTdweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDo0OHB4O1xuLy8gfVxuLy8gLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXJ7XG4vLyAgIGJvcmRlcjpub25lO1xuLy8gICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbi8vICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgZm9udC1zaXplOiAxN3B4O1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgbWFyZ2luOiAwcHggMTZweDtcbi8vICAgaGVpZ2h0OiA0OHB4O1xuLy8gICBtYXJnaW4tdG9wOiAxNnB4O1xuLy8gfVxuLy8gLnRleHQtZW1wdHl7XG4vLyAgIGNvbG9yOiAjODI4MjgyO1xuLy8gfVxuLy8gLmltZy1oZWFydHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IC00cHg7XG4vLyAgIGxlZnQ6IC00cHg7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyB9XG4vLyAuY2xzLWltZy1jb250ZW50e1xuLy8gICBtYXJnaW4tbGVmdDogMjBweDtcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vIH1cbi8vIC5jbHMtaWNvbi1jb250ZW50e1xuLy8gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4vLyAgIHBhZGRpbmctdG9wOiAyMHB4O1xuLy8gfVxuLy8gLmxhYmVsLXByaWNlLWxvZ2lue1xuLy8gICBjb2xvcjogIzI2YmVkNjtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuLy8gLnQtYm9sZHtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4vLyAudGV4dC1sb2dpbntcbi8vICAgZm9udC1zaXplOiAxM3B4O1xuLy8gfVxuXG5cbi8vICAgLnRyYW5zYm94XzAgeyBcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEwNHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbi8vICAgICBib3R0b206IDA7XG4vLyAgICAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbi8vICAgfVxuLy8gICBwLGgye1xuLy8gICAgIG1hcmdpbjogMDtcbi8vICAgfVxuLy8gICAucm93LWl0ZW0taG90ZWxsaXN0e1xuLy8gICAgIHBhZGRpbmc6IDExcHggMTFweCA4cHggMTFweDtcbi8vICAgfVxuXG4vLyAgIC5wLXRvcC1kZWFsdHlwZXtcbi8vICAgICB0b3A6OXB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgICAgY29sb3I6ICNlNTI4MjI7XG4vLyAgIH1cbi8vICAgLnAtdG9wLWRlYWx0eXBlLTZ7XG4vLyAgICAgdG9wOjVweDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAgIGNvbG9yOiAjZTUyODIyO1xuLy8gICB9XG4vLyAgIC5sYWJlbC1taW5wcmljZXtcbi8vICAgICBjb2xvcjogIzI2YmVkNjtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgfVxuLy8gICAubGFiZWwtbWlucHJpY2VUQXtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4vLyAgICAgY29sb3I6ICM4MjgyODI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHJpZ2h0OiA1cHg7XG4vLyAgIH1cbi8vICAgLmxhYmVsLWRlYWxwcmljZXtcbi8vICAgICBjb2xvcjogI2U1MjgyMjtcbi8vICAgICBmb250LXdlaWdodDogYm9sZFxuLy8gICB9XG4vLyAgIC5wLXRvcC1taW5wcmljZXtcbi8vICAgICB0b3A6MTBweDtcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgIH1cbi8vICAgLnAtdG9wLTh7XG4vLyAgICAgdG9wOjhweDtcbi8vICAgfVxuLy8gICAucC10b3AtMTB7XG4vLyAgICAgdG9wOjEwcHg7XG4vLyAgICAgcGFkZGluZy1yaWdodDogMDtcbi8vICAgfVxuLy8gICAucC10b3AtMTh7XG4vLyAgICAgcGFkZGluZy10b3A6IDE4cHg7XG4vLyAgIH1cbi8vICAgLmgtbGluZXtcbi8vICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbi8vICAgICBtYXJnaW46IDAgMTZweDtcbi8vICAgICBwYWRkaW5nLXRvcDogOHB4O1xuLy8gICAgIG9wYWNpdHk6IDAuNTtcbi8vICAgfVxuLy8gICAuY29sLWltZy1ob3RlbGxpc3R7XG4vLyAgICAgaGVpZ2h0OiAxMDlweDtcbi8vICAgfVxuLy8gICAuYmFkZ2UtaW9ze1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICB9XG4vLyAgIC5idG4taGVhZGVye1xuLy8gICAgIHdpZHRoOiA0OHB4O2NvbG9yOiAjNGY0ZjRmO2JhY2tncm91bmQtY29sb3I6ICNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO2JveC1zaGFkb3c6IG5vbmU7XG4vLyAgICAgaGVpZ2h0OiA0OHB4O1xuLy8gICB9XG4vLyAgIGltZyB7XG4vLyAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4vLyAgICAgYm9yZGVyOiAwO1xuLy8gICB9XG4gIFxuLy8gICAgIEBtZWRpYSAobWluLXdpZHRoOjMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbi8vICAgICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuLy8gICAgICAgICBtYXgtd2lkdGg6IDE4OHB4O1xuLy8gICAgICAgICBsZWZ0OiAxMnB4O1xuLy8gICAgICAgfVxuLy8gICAgICAgLnAtdG9wLTEwe1xuLy8gICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4vLyAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuLy8gICAgICAgfVxuLy8gICAgICAgLnRleHQtbG9naW57XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICAgIH1cbi8vICAgICB9XG4gIFxuLy8gICAgIDpob3N0e1xuLy8gICAgICAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xuLy8gICAgIH1cbi8vICAgICBpb24tYmFkZ2V7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4vLyAgICAgfVxuLy8gICAgIC5sYWJlbC1iYWRnZXtcbi8vICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4vLyAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbi8vICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB9XG4vLyAgICAgOjpuZy1kZWVwe1xuLy8gICAgICAgLmluZmluaXRlLWxvYWRpbmctdGV4dHtcbi8vICAgICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICAgIH1cbi8vICAgICAgIC8vc2tlbGV0b24tc3R5bGVcbi8vICAgICAgIGlvbi1za2VsZXRvbi10ZXh0e1xuLy8gICAgICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgfVxuICAgICAgXG4vLyAgICAgICAuY29sLWltZy1ob3RlbGxpc3Qtc2t7XG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbi8vICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4vLyAgICAgICB9XG4vLyAgICAgICAudGV4dC1uYW1lLXNrXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAgICAgICBoZWlnaHQ6IDE4cHg7XG4vLyAgICAgICB9XG4vLyAgICAgICAucC1za3tcbi8vICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuLy8gICAgICAgICBwYWRkaW5nOiA4cHggMDtcbi8vICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgfVxuLy8gICAgICAgLmxhc3Qtcm93LXNre1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDogNTJweDtcbi8vICAgICAgICAgaGVpZ2h0OiAxN3B4O1xuLy8gICAgICAgfVxuLy8gICAgICAgLnJvdy1pdGVtLWhvdGVsbGlzdC1za3tcbi8vICAgICAgICAgcGFkZGluZzogOHB4O1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDoxNnB4O1xuLy8gICAgICAgfVxuLy8gICAgICAgLmgtbGluZS1za3tcbi8vICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4vLyAgICAgICAgIG1hcmdpbjogMCAxNnB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIG9wYWNpdHk6IDAuNTtcbi8vICAgICAgIH1cbi8vICAgICB9IiwiLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tbGVmdDogLTZweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDEgIWltcG9ydGFudDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLmJhZGdlLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cblxuLmltZy1yYWRpdXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTA0cHggIWltcG9ydGFudDtcbn1cblxuLmNvbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMXB4O1xuICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnRleHQtbmFtZXJvb20ge1xuICB3aWR0aDogMTYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZXh0LWNvbWJvIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKmNzcyBjaG8gaW9zKi9cbiAgLypjc3MgY2hvIGlvcyovXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pb24tdGh1bWJuYWlsIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5iYWRnZS5iYWRnZS1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWJhZGdlIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1ibG9jayB7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogNC40cmVtO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTZweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIG1hcmdpbjogMCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMThweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTJweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAudHJhbnNib3gyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTNweDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtbWQge1xuICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAucHJpY2UuY29sIHtcbiAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xufVxuXG4ubS1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG5cbi5tLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4uYnRuLWNsZWFyLWZpbHRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogOTQlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5idG4tZmlsdGVyLWFnYWluIHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2Fpbi1ub2ZpbHRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRleHQtZW1wdHkge1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmltZy1oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAtNHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uY2xzLWltZy1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jbHMtaWNvbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxhYmVsLXByaWNlLWxvZ2luIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRyYW5zYm94XzAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNHB4O1xufVxuXG5wLCBoMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJvdy1pdGVtLWhvdGVsbGlzdCB7XG4gIG1hcmdpbjogMTZweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLnAtdG9wLWRlYWx0eXBlIHtcbiAgdG9wOiA5cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBtYXgtd2lkdGg6IDUzJTtcbn1cblxuLnAtdG9wLWRlYWx0eXBlLTYge1xuICB0b3A6IDVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG5cbi5sYWJlbC1taW5wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmxhYmVsLW1pbnByaWNlVEEge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzgyODI4MjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuXG4ubGFiZWwtZGVhbHByaWNlIHtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucC10b3AtbWlucHJpY2Uge1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnAtdG9wLTgge1xuICB0b3A6IDhweDtcbn1cblxuLnAtdG9wLTEwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xufVxuXG4ucC10b3AtMTgge1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cblxuLmgtbGluZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW46IDAgMTZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29sLWltZy1ob3RlbGxpc3Qge1xuICBoZWlnaHQ6IDEwNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5iYWRnZS1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5idG4taGVhZGVyIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLmljby1naWZ0IHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5MHB4O1xuICB0b3A6IDZweDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG5cbi5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBsZWZ0OiAxMTJweDtcbiAgd2lkdGg6IDY5JTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cblxuICAucC10b3AtMTAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC50ZXh0LWxvZ2luIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgICB3aWR0aDogNzElO1xuICB9XG59XG46aG9zdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbn1cblxuaW9uLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ubGFiZWwtYmFkZ2Uge1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46Om5nLWRlZXAgLmluZmluaXRlLWxvYWRpbmctdGV4dCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46Om5nLWRlZXAgaW9uLXNrZWxldG9uLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuOjpuZy1kZWVwIC5jb2wtaW1nLWhvdGVsbGlzdC1zayB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG46Om5nLWRlZXAgLnRleHQtbmFtZS1zayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBoZWlnaHQ6IDE4cHg7XG59XG46Om5nLWRlZXAgLnAtc2sge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLmxhc3Qtcm93LXNrIHtcbiAgcGFkZGluZy10b3A6IDUycHg7XG4gIGhlaWdodDogMTdweDtcbn1cbjo6bmctZGVlcCAucm93LWl0ZW0taG90ZWxsaXN0LXNrIHtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbjo6bmctZGVlcCAuaC1saW5lLXNrIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gIG1hcmdpbjogMCAxNnB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLm0tdG9wLTUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tLXRvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zcC1pdGVtLXN0eWxlIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjMjZiZWQ2O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmZpeC1oZWlnaHQtMTA0IHtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmxhc3Qtcm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNscy1saW5laGVpZ2h0IHtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG59Il19 */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/combolist/combolist.ts":
/*!****************************************!*\
  !*** ./src/app/combolist/combolist.ts ***!
  \****************************************/
/*! exports provided: ComboListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboListPage", function() { return ComboListPage; });
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
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");















let ComboListPage = class ComboListPage {
    constructor(platform, navCtrl, zone, authService, bookcombo, value, searchhotel, modalCtrl, events, router, booking, loadingCtrl, storage, valueGlobal, alertCtrl, gf, activeRoute, fcm, _mytripservice, _flightService) {
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
        this._mytripservice = _mytripservice;
        this._flightService = _flightService;
        this.json = [];
        this.json1 = [];
        this.dataList = [];
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
        this.name = searchhotel.gbmsg ? (searchhotel.gbmsg.regionName ? searchhotel.gbmsg.regionName : searchhotel.gbmsg.regionName) : authService.region;
        storage.get('auth_token').then(auth_token => {
            this.loginuser = auth_token;
        });
        storage.get('jti').then((uid) => {
            this.memberid = uid;
        });
        this.loadpricedone = false;
        setTimeout(() => {
            this.loaddata();
        }, 50);
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            yield se.onEnter();
            se.subscription = se.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"] && (event.url == '/app/tabs/tab3')) {
                    se.onEnter();
                }
            });
        });
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.gf.setActivatedTab(3);
        });
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
    loaddata() {
        var se = this;
        var strurl = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/TopDeals?pageIndex=' + se.page + '&pageSize=200' + (se.memberid ? '?memberid=' + se.memberid : '');
        var options = {
            method: 'POST',
            url: strurl,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "combolist",
                    func: "loaddata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "combolist";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                var lst = JSON.parse(body);
                se.totalData = lst.length;
                se.totalPage = se.totalData / 10;
                for (let i = 0; i < lst.length; i++) {
                    se.dataList.push(lst[i]);
                }
                se.pushdata(se.json1.length, lst.length);
            }
        });
    }
    clearSubFix(value) {
        let re1 = /\./gi;
        let re2 = /\,/gi;
        let re3 = /\đ/gi;
        return value.toLocaleString().replace(re1, '').replace(re2, '').replace("đ", '').replace("VND", '').trim();
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
                    var co = this.checkvalue(item.id);
                    if (co == 0) {
                        res = true;
                    }
                }
            }
            else {
                var co = this.checkvalue(item.id);
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
                if (id == this.json[i].id) {
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
                if (id == this.json1[i].id) {
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
                if (id == se.listHotelPrice[i].id) {
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
    pushdata(num, len) {
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
                            page: "combolist",
                            func: "pushdata",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "combolist";
                        error.func = "pushdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                se.dataListLike = JSON.parse(body);
                                se.executePushData(false);
                            });
                        }
                        else {
                        }
                    }
                });
            }
            else {
                se.executePushData(false);
            }
        });
    }
    executePushData(isloadmore) {
        var se = this;
        if (!se.dataList) {
            se.dataList = [];
        }
        for (let index = 0; index < se.dataList.length; index++) {
            let itemlike = false;
            if (se.dataListLike.length > 0) {
                itemlike = se.checkItemLiked(se.dataList[index].id) == 1 ? true : false;
            }
            var co = se.checkExistsItem(se.dataList[index].id);
            if (co == 1) {
                continue;
            }
            if (se.dataList[index].images[0]) {
                se.dataList[index].Avatar = (se.dataList[index].images[0].url.toLocaleString().trim().indexOf("http") != -1) ? se.dataList[index].images[0].url : 'https:' + se.dataList[index].images[0].url;
            }
            else {
                se.dataList[index].Avatar = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png";
            }
            if (se.dataList[index].minPrice) {
                se.dataList[index].minPrice = se.dataList[index].minPrice.toLocaleString();
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
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].name, AvgPoint: se.dataList[index].point, DealPrice: se.dataList[index].minPrice ? se.dataList[index].minPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(',', '.').replace(',', '.') : se.dataList[index].minPrice, DealType: se.dataList[index].description, SubLocation: se.dataList[index].address, Rating: se.dataList[index].rating, HotelId: se.dataList[index].id, Liked: itemlike, HasCheckPrice: false };
            se.json1.push(item);
        }
        se.listhotels = "";
        se.listhotelIdInternal = "";
        for (let i = 0; i < se.dataList.length; i++) {
            if (i == se.dataList.length - 1) {
                if (se.dataList[i].EANCode && se.dataList[i].EANCode != "") {
                    se.listhotels = se.listhotels + se.dataList[i].EANCode;
                }
                se.listhotelIdInternal = se.listhotelIdInternal + se.dataList[i].id;
            }
            else {
                if (se.dataList[i].EANCode && se.dataList[i].EANCode != "") {
                    se.listhotels = se.listhotels + se.dataList[i].EANCode + ",";
                }
                se.listhotelIdInternal = se.listhotelIdInternal + se.dataList[i].id + ",";
            }
        }
        se.zone.run(() => {
            se.ishide = true;
        });
        if (se._infiniteScroll) {
            se._infiniteScroll.target.complete();
        }
        se.getHotelprice();
    }
    getHotelprice() {
        var se = this;
        var options;
        var form = {
            RoomNumber: '1',
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
                se.jsonhtprice1 = JSON.parse(body);
                if (se.jsonhtprice1.HotelListResponse) {
                    se.jsonhtprice1 = se.jsonhtprice1.HotelListResponse.HotelList.HotelSummary;
                    for (var i = 0; i < se.jsonhtprice1.length; i++) {
                        let itemprice = se.jsonhtprice1[i];
                        se.listHotelPrice.push(itemprice);
                        se.jsonhtprice.push(itemprice);
                    }
                    setTimeout(() => {
                        se.zone.run(() => se.fillDataPrice());
                        se.loadpricedone = true;
                    }, 100);
                    se.ishide = true;
                }
                else {
                    se.loadpricedone = true;
                }
            });
        });
    }
    fillDataPrice() {
        var se = this;
        for (let index = 0; index < se.json1.length; index++) {
            se.json1[index].HasCheckPrice = true;
            for (let i = 0; i < se.listHotelPrice.length; i++) {
                if (se.json1[index] && se.json1[index].HotelId == se.listHotelPrice[i].HotelId) {
                    se.json1[index].MinPriceOTAStr = se.listHotelPrice[i].MinPriceOTAStr;
                    se.json1[index].MinPriceTAStr = se.listHotelPrice[i].MinPriceTAStr;
                    se.json1[index].RoomNameSubString = se.listHotelPrice[i].RoomNameSubString;
                    se.json1[index].PromotionDescription = se.listHotelPrice[i].PromotionDescription;
                    se.json1[index].PromotionDescriptionSubstring = se.listHotelPrice[i].PromotionDescriptionSubstring;
                }
            }
        }
    }
    filter() {
        var id1 = { name: this.name, code: this.code };
        this.navCtrl.navigateForward('/searchhotel');
    }
    presentLoadingnavi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                message: "",
                duration: 1000
            });
            loader.present();
        });
    }
    itemSelected(id) {
        this.presentLoadingnavi();
        let id1 = { detailId: id };
        this.searchhotel.hotelID = id;
        this.value.flag = 1;
        this.value.arrhotellist = this.json1;
        this.searchhotel.rootPage = "combolist";
        this.booking.HotelId = null;
        this.navCtrl.navigateForward('/hoteldetail/' + id);
    }
    doInfinite(infiniteScroll) {
        this.zone.run(() => {
            if (this.ishide == true) {
                if (this.co == 0 && this.loadpricedone) {
                    this.page = this.page + 1;
                    this.executePushData(true);
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
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }
    }
    goback() {
        if (this.searchhotel.fromPage == 'order') {
            if (this._mytripservice.rootPage == "homeflight") {
                this.valueGlobal.backValue = "homeflight";
                this._mytripservice.orderPageState.emit(1);
                this._flightService.itemTabFlightActive.emit(true);
                setTimeout(() => {
                    this._flightService.itemMenuFlightClick.emit(2);
                }, 200);
                this._mytripservice.backfrompage = "";
                this.navCtrl.navigateBack('/tabs/tab1');
            }
            else if (this._mytripservice.rootPage == 'homehotel') {
                this.navCtrl.navigateBack('app/tabs/tab3');
            }
            else if (this._mytripservice.rootPage == 'homefood') {
                this.navCtrl.navigateForward('/homefood');
            }
            else {
                this.navCtrl.back();
            }
        }
        else {
            this.navCtrl.navigateBack('app/tabs/tab1');
        }
    }
    filterAgain() {
        this.navCtrl.navigateForward('/searchhotelfilteragain');
    }
    clearFilter() {
        this.presentLoadingnavi();
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
            this.loaddata();
            this.hasfilteragain = false;
        });
    }
    searchAgain() {
        this.navCtrl.navigateForward('/app/tabs/tab1');
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
                this.zone.run(() => {
                    this.ishide = false;
                    this.loadpricedone = false;
                    this.nodata = false;
                    this.json1 = [];
                    this.dataList = [];
                    this.page = 1;
                    this.name = this.searchhotel.gbmsg ? (this.searchhotel.gbmsg.regionName ? this.searchhotel.gbmsg.regionName : this.searchhotel.gbmsg.regionName) : this.authService.region;
                    this.loaddata();
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
                            page: "combolist",
                            func: "likeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "combolist";
                        error.func = "likeItem";
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
                            page: "combolist",
                            func: "unlikeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "combolist";
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
                this.navCtrl.navigateForward('/login');
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
                this.fcm.getToken().then(token => {
                    this.gf.DeleteTokenOfUser(token, id_token, this.gf.getAppVersion());
                });
                this.navCtrl.navigateForward('/login');
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
            this.loaddata();
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
                            this.navCtrl.navigateForward('/tabs/tab1');
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
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
ComboListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-combolist',
        template: __webpack_require__(/*! ./combolist.html */ "./src/app/combolist/combolist.html"),
        styles: [__webpack_require__(/*! ./combolist.scss */ "./src/app/combolist/combolist.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_12__["MytripService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_13__["flightService"]])
], ComboListPage);



/***/ }),

/***/ "./src/app/providers/mytrip-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/mytrip-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MytripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripService", function() { return MytripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MytripService = class MytripService {
    constructor() {
        this.mylistOrders = [];
        this.orderPageState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemEnableHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalHistoryFoodCountText = "";
    }
};
MytripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MytripService);



/***/ })

}]);
//# sourceMappingURL=combolist-combolist-module.js.map