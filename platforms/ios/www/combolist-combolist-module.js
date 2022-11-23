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

module.exports = ".header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  text-align: center;\n  padding: 0px;\n  margin-left: -6px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  height: 48px;\n  padding-top: 12px;\n}\n\np {\n  line-height: 1;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 17px;\n  text-align: left;\n  letter-spacing: -0.4px;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 4px;\n  letter-spacing: -0.34px;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 104px !important;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .badge.badge-ios {\n  background-color: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.m-left {\n  margin-left: 11px;\n}\n\n.m-right {\n  margin-right: 11px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 94%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 16px;\n  height: 48px;\n  margin-top: 16px;\n}\n\n.text-empty {\n  color: #828282;\n}\n\n.img-heart {\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 20px;\n  margin-top: 20px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 20px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 104px;\n}\n\n.p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  max-width: 53%;\n}\n\n.p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n}\n\n.p-top-minprice {\n  top: 10px;\n  font-size: 12px;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  position: absolute;\n  right: 8px;\n  width: 100%;\n  bottom: 0;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 104px;\n  position: absolute;\n}\n\n.badge-ios {\n  background-color: #26bed6;\n  font-size: 12px;\n}\n\n.btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n.ico-gift {\n  height: 16px;\n  position: absolute;\n  right: 90px;\n  top: 6px;\n  color: #e52822;\n}\n\n.col-description-hotellist {\n  position: relative;\n  margin-top: 13px;\n  left: 112px;\n  width: 69%;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 71%;\n  }\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  border-radius: 6px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n.m-top-5 {\n  margin-top: 5px;\n}\n\n.m-top-10 {\n  margin-top: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  color: #26bed6;\n  background: #ffffff;\n}\n\n.fix-height-104 {\n  height: 104px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: 0;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jb21ib2xpc3QvY29tYm9saXN0LnNjc3MiLCJzcmMvYXBwL2NvbWJvbGlzdC9jb21ib2xpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0NKOztBRENFO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBSUEsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUFnQyx1Q0FBQTtFQUNoQyxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQUo7O0FERUU7RUFFRSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0FOOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFHQSxhQUFBO0VBSUEsWUFBQTtBQ0NKOztBRENFO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFRTtFQUVFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFB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STtFQUNFLGFBQUE7QUNTTjs7QURQSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1VOOztBRFJJO0VBQ0UsaUJBQUE7QUNXTiIsImZpbGUiOiJzcmMvYXBwL2NvbWJvbGlzdC9jb21ib2xpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuaGVhZGVyLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAuaGVhZGVyLWljb257XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gIH1cbiAgLnRleHQtdGl0bGVcbiAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICB9XG5cbiAgcHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICAudGV4dC1uYW1lXG4gIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAxN3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAvL21heC13aWR0aDogMjE2cHg7XG4gIH1cbiAgLnRleHR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tdG9wOjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgfVxuICAuYmFkZ2UtbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICB9XG4gIC5pbWctcmFkaXVzXG4gIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTA0cHggIWltcG9ydGFudDtcbiAgfVxuICAuY29sIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAudGV4dC1uYW1lcm9vbVxuICB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgXG4gIH0gXG4gIC50ZXh0LWNvbWJvXG4gIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiAjZTUyODIyO1xuICB9XG4gIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICB9XG4gIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG5cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcblxuICAuaW9uLXRodW1ibmFpbHtcbiAgICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmJhZGdlLmJhZGdlLWlvc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubGFiZWwtYmFkZ2V7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG5cbiAgLml0ZW0tYmxvY2t7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogNC40cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG4gIC8qY3NzIGNobyBpb3MqL1xuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gY8OzIHJhdGluZyAmIGxvY2F0aW9uXG4gIC5pdGVtLWlvcyAudHJhbnNib3ggeyBcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOiAxNnB4O1xuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4vL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyBsb2NhdGlvblxuLml0ZW0taW9zIC50cmFuc2JveDEgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEycHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbiAgfVxuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcbiAgLml0ZW0taW9zIC50cmFuc2JveDIgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEzcHg7XG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbiAgfVxuICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuaXRlbS1pb3Mge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICBtYXJnaW46MCAxMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG4gIH1cblxuICAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xuICB9XG5cbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgfVxuICAubGFiZWwtaW9zIHtcbiAgICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbiAgfVxuICAvKmNzcyBjaG8gaW9zKi9cblxuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cbiAgLml0ZW0tbWQgLnRyYW5zYm94IHsgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vbGVmdDogMTZweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGJvdHRvbTogMThweDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cbi5pdGVtLW1kIC50cmFuc2JveDEgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy9sZWZ0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgYm90dG9tOjEycHg7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbiAgfVxuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcbiAgLml0ZW0tbWQgLnRyYW5zYm94MiB7IFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvL2xlZnQ6IDE2cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206MTNweDtcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuICB9XG5cbiAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIC5pdGVtLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgbWFyZ2luOjAgMTFweDtcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xuICB9XG4gIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbiAgfVxuICAuaXRlbS1tZCAuaXRlbS1pbm5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICB9XG4gIC5sYWJlbC1tZCB7XG4gICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4gIH1cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICBcbiAgLnByaWNlLmNvbHtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG4gIH1cbiAgXG59XG4ubS1sZWZ0e1xuICBtYXJnaW4tbGVmdDogMTFweDtcbn1cbi5tLXJpZ2h0e1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG4uYnRuLWNsZWFyLWZpbHRlcntcbiAgYm9yZGVyOm5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDk0JTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2FpbntcbiAgY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDo0OHB4O1xufVxuLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXJ7XG4gIGJvcmRlcjpub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLnRleHQtZW1wdHl7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmltZy1oZWFydHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IC00cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uY2xzLWltZy1jb250ZW50e1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jbHMtaWNvbi1jb250ZW50e1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmxhYmVsLXByaWNlLWxvZ2lue1xuICBjb2xvcjogIzI2YmVkNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnQtYm9sZHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGV4dC1sb2dpbntcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5cbiAgLnRyYW5zYm94XzAgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBib3R0b206IDA7XG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbiAgfVxuICBwLGgye1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAucm93LWl0ZW0taG90ZWxsaXN0e1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBoZWlnaHQ6IDEwNHB4O1xuICB9XG5cbiAgLnAtdG9wLWRlYWx0eXBle1xuICAgIHRvcDo5cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgICBtYXgtd2lkdGg6IDUzJTtcbiAgfVxuICAucC10b3AtZGVhbHR5cGUtNntcbiAgICB0b3A6NXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY29sb3I6ICNlNTI4MjI7XG4gIH1cbiAgLmxhYmVsLW1pbnByaWNle1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICAubGFiZWwtbWlucHJpY2VUQXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gIH1cbiAgLmxhYmVsLWRlYWxwcmljZXtcbiAgICBjb2xvcjogI2U1MjgyMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLnAtdG9wLW1pbnByaWNle1xuICAgIHRvcDoxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBcbiAgfVxuICAucC10b3AtOHtcbiAgICB0b3A6OHB4O1xuICB9XG4gIC5wLXRvcC0xMHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gIH1cbiAgLnAtdG9wLTE4e1xuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICB9XG4gIC5oLWxpbmV7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIC5jb2wtaW1nLWhvdGVsbGlzdHtcbiAgICAvL2hlaWdodDogMTA5cHg7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgLmJhZGdlLWlvc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuYnRuLWhlYWRlcntcbiAgICB3aWR0aDogNDhweDtjb2xvcjogIzRmNGY0ZjtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO1xuICAgIGhlaWdodDogNDhweDtcbiAgfVxuICBpbWcge1xuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4uaWNvLWdpZnR7XG4gIGhlaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOTBweDtcbiAgdG9wOiA2cHg7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgbGVmdDogMTEycHg7XG4gIHdpZHRoOiA2OSU7XG59XG4gIFxuICAgIEBtZWRpYSAobWluLXdpZHRoOjMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgfVxuICAgICAgLnAtdG9wLTEwe1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtbG9naW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDo0MTRweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbiAgICAgICAgd2lkdGg6NzElO1xuICAgICAgfVxuICAgIH1cbiAgICA6aG9zdHtcbiAgICAgIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbiAgICB9XG4gICAgaW9uLWJhZGdle1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAubGFiZWwtYmFkZ2V7XG4gICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIDo6bmctZGVlcHtcbiAgICAgIC5pbmZpbml0ZS1sb2FkaW5nLXRleHR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAvL3NrZWxldG9uLXN0eWxlXG4gICAgICBpb24tc2tlbGV0b24tdGV4dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbC1pbWctaG90ZWxsaXN0LXNre1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtbmFtZS1za1xuICAgICAge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuICAgICAgLnAtc2t7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5sYXN0LXJvdy1za3tcbiAgICAgICAgcGFkZGluZy10b3A6IDUycHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgIH1cbiAgICAgIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2t7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6MTZweDtcbiAgICAgIH1cbiAgICAgIC5oLWxpbmUtc2t7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICAgICAgICBtYXJnaW46IDAgMTZweCAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG4gICAgfVxuICAgIC5tLXRvcC01e1xuICAgICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgfVxuICAgIC5tLXRvcC0xMHtcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB9XG4gICAgLnNwLWl0ZW0tc3R5bGV7XG4gICAgICBwYWRkaW5nOjNweCA1cHg7XG4gICAgICBib3JkZXI6c29saWQgMC41cHggIzI2YmVkNjtcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB9XG4gICAgLmZpeC1oZWlnaHQtMTA0e1xuICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICB9XG4gICAgLmxhc3Qtcm93e1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOjA7XG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuY2xzLWxpbmVoZWlnaHR7XG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICB9XG4vLyAgIC50ZXh0LW5hbWVcbi8vICAge1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4vLyAgIH1cbi8vICAgLnRleHR7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgfVxuLy8gICAuYmFkZ2UtbWQge1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuLy8gICB9XG4vLyAgIC5pbWctcmFkaXVzXG4vLyAgIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgICAgICB3aWR0aDogMTA0cHggIWltcG9ydGFudDtcbi8vICAgICAgIGhlaWdodDogMTA0cHggIWltcG9ydGFudDtcbi8vICAgfVxuLy8gICAuY29sIHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIG1pbi1oZWlnaHQ6IDFweDtcbi8vICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4vLyAgICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4vLyAgICAgZmxleC1iYXNpczogMDtcbi8vICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuLy8gICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuLy8gICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuLy8gICAgIGZsZXgtZ3JvdzogMTtcbi8vICAgfVxuLy8gICAudGV4dC1uYW1lcm9vbVxuLy8gICB7XG4vLyAgICAgd2lkdGg6IDE2MHB4O1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgXG4vLyAgIH0gXG4vLyAgIC50ZXh0LWNvbWJvXG4vLyAgIHtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAgIGNvbG9yOiAjZTUyODIyO1xuLy8gICB9XG4vLyAgIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuLy8gICAgIHdpZHRoOiAxMDRweDtcbi8vICAgICBoZWlnaHQ6IDEwNHB4O1xuLy8gICB9XG4vLyAgIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG5cbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBcblxuLy8gICAuaW9uLXRodW1ibmFpbHtcbi8vICAgICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vICAgLmJhZGdlLmJhZGdlLWlvc3tcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgfVxuLy8gICAubGFiZWwtYmFkZ2V7XG4vLyAgICAgY29sb3I6ICMyMjIyMjI7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OjQwMDtcbi8vICAgICBtYXJnaW4tbGVmdDogM3B4O1xuLy8gICB9XG5cbi8vICAgLml0ZW0tYmxvY2t7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4vLyAgICAgbWluLWhlaWdodDogNC40cmVtO1xuLy8gICAgIGJvcmRlcjogMDtcbi8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuLy8gICAgIHdpZHRoOiBhdXRvO1xuLy8gICAgIHBhZGRpbmc6IDVweCAwO1xuLy8gICB9XG4vLyAgIC8qY3NzIGNobyBpb3MqL1xuLy8gICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gY8OzIHJhdGluZyAmIGxvY2F0aW9uXG4vLyAgIC5pdGVtLWlvcyAudHJhbnNib3ggeyBcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLy9sZWZ0OiAxNnB4O1xuLy8gICAgIHdpZHRoOiAxMDRweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgICAgYm90dG9tOiAxNnB4O1xuLy8gICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG4vLyB9XG4vLyAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyBsb2NhdGlvblxuLy8gLml0ZW0taW9zIC50cmFuc2JveDEgeyBcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLy9sZWZ0OiAxNnB4O1xuLy8gICAgIHdpZHRoOiAxMDRweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgICAgYm90dG9tOjEycHg7XG4vLyAgICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbi8vICAgfVxuLy8gICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcbi8vICAgLml0ZW0taW9zIC50cmFuc2JveDIgeyBcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLy9sZWZ0OiAxNnB4O1xuLy8gICAgIHdpZHRoOiAxMDRweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgICAgYm90dG9tOjEzcHg7XG4vLyAgICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbi8vICAgfVxuLy8gICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4vLyAgIH1cbi8vICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4vLyAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbi8vICAgfVxuLy8gICAuaXRlbS1pb3Mge1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDA7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuLy8gICAgIGNvbG9yOiAjMjIyMjIyO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4vLyAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbi8vICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbi8vICAgICBtYXJnaW46MCAxMXB4O1xuLy8gICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG4vLyAgIH1cblxuLy8gICAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4vLyAgICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xuLy8gICB9XG5cbi8vICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbi8vICAgfVxuLy8gICAubGFiZWwtaW9zIHtcbi8vICAgICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcbi8vICAgfVxuLy8gICAvKmNzcyBjaG8gaW9zKi9cblxuLy8gICAvKmNzcyBjaG8gYW5kcm9pZCovXG4vLyAgIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cbi8vICAgLml0ZW0tbWQgLnRyYW5zYm94IHsgXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIC8vbGVmdDogMTZweDtcbi8vICAgICB3aWR0aDogMTA0cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuLy8gICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICBjb2xvcjogI2ZmZmZmZjtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuLy8gICAgIGJvdHRvbTogMThweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuLy8gfVxuLy8gLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cbi8vIC5pdGVtLW1kIC50cmFuc2JveDEgeyBcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgLy9sZWZ0OiAxNnB4O1xuLy8gICAgIHdpZHRoOiAxMDRweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgICAgYm90dG9tOjEycHg7XG4vLyAgICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcbi8vICAgfVxuLy8gICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcbi8vICAgLml0ZW0tbWQgLnRyYW5zYm94MiB7IFxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAvL2xlZnQ6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDEwNHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbi8vICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbi8vICAgICBib3R0b206MTNweDtcbi8vICAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuLy8gICB9XG5cbi8vICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbi8vICAgfVxuXG4vLyAgIC5pdGVtLW1kIHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwO1xuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICBmb250LXNpemU6IDEuN3JlbTtcbi8vICAgICBjb2xvcjogIzIyMjIyMjtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4vLyAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4vLyAgICAgbWFyZ2luOjAgMTFweDtcbi8vICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xuLy8gICB9XG4vLyAgIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuLy8gICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbi8vICAgfVxuLy8gICAuaXRlbS1tZCAuaXRlbS1pbm5lciB7XG4vLyAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuLy8gICB9XG4vLyAgIC5sYWJlbC1tZCB7XG4vLyAgICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4vLyAgIH1cbi8vICAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICBcbi8vICAgLnByaWNlLmNvbHtcbi8vICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG4vLyAgIH1cbiAgXG4vLyB9XG4vLyAubS1sZWZ0e1xuLy8gICBtYXJnaW4tbGVmdDogMTFweDtcbi8vIH1cbi8vIC5tLXJpZ2h0e1xuLy8gICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4vLyB9XG4vLyAuYnRuLWNsZWFyLWZpbHRlcntcbi8vICAgYm9yZGVyOm5vbmU7XG4vLyAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbi8vICAgZmxvYXQ6IGxlZnQ7XG4vLyAgIGZvbnQtc2l6ZTogMTdweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogNDhweDtcbi8vIH1cblxuLy8gLmJ0bi1maWx0ZXItYWdhaW57XG4vLyAgIGNvbG9yOiAjRjc5MjIxO1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuLy8gICBib3JkZXItY29sb3I6ICAjRjc5MjIxO1xuLy8gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBmb250LXNpemU6IDE3cHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6NDhweDtcbi8vIH1cbi8vIC5idG4tZmlsdGVyLWFnYWluLW5vZmlsdGVye1xuLy8gICBib3JkZXI6bm9uZTtcbi8vICAgY29sb3I6ICNmZmZmZmY7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4vLyAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuLy8gICBmbG9hdDogcmlnaHQ7XG4vLyAgIGZvbnQtc2l6ZTogMTdweDtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIG1hcmdpbjogMHB4IDE2cHg7XG4vLyAgIGhlaWdodDogNDhweDtcbi8vICAgbWFyZ2luLXRvcDogMTZweDtcbi8vIH1cbi8vIC50ZXh0LWVtcHR5e1xuLy8gICBjb2xvcjogIzgyODI4Mjtcbi8vIH1cbi8vIC5pbWctaGVhcnR7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiAtNHB4O1xuLy8gICBsZWZ0OiAtNHB4O1xuLy8gICB3aWR0aDogNTBweDtcbi8vICAgaGVpZ2h0OiA1MHB4O1xuLy8gfVxuLy8gLmNscy1pbWctY29udGVudHtcbi8vICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyB9XG4vLyAuY2xzLWljb24tY29udGVudHtcbi8vICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMjBweDtcbi8vIH1cbi8vIC5sYWJlbC1wcmljZS1sb2dpbntcbi8vICAgY29sb3I6ICMyNmJlZDY7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cbi8vIC50LWJvbGR7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuLy8gLnRleHQtbG9naW57XG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcbi8vIH1cblxuXG4vLyAgIC50cmFuc2JveF8wIHsgXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMDRweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4vLyAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA0cHg7XG4vLyAgIH1cbi8vICAgcCxoMntcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgIH1cbi8vICAgLnJvdy1pdGVtLWhvdGVsbGlzdHtcbi8vICAgICBwYWRkaW5nOiAxMXB4IDExcHggOHB4IDExcHg7XG4vLyAgIH1cblxuLy8gICAucC10b3AtZGVhbHR5cGV7XG4vLyAgICAgdG9wOjlweDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuLy8gICAgIGNvbG9yOiAjZTUyODIyO1xuLy8gICB9XG4vLyAgIC5wLXRvcC1kZWFsdHlwZS02e1xuLy8gICAgIHRvcDo1cHg7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgICBjb2xvcjogI2U1MjgyMjtcbi8vICAgfVxuLy8gICAubGFiZWwtbWlucHJpY2V7XG4vLyAgICAgY29sb3I6ICMyNmJlZDY7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIH1cbi8vICAgLmxhYmVsLW1pbnByaWNlVEF7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuLy8gICAgIGNvbG9yOiAjODI4MjgyO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICByaWdodDogNXB4O1xuLy8gICB9XG4vLyAgIC5sYWJlbC1kZWFscHJpY2V7XG4vLyAgICAgY29sb3I6ICNlNTI4MjI7XG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbi8vICAgfVxuLy8gICAucC10b3AtbWlucHJpY2V7XG4vLyAgICAgdG9wOjEwcHg7XG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICB9XG4vLyAgIC5wLXRvcC04e1xuLy8gICAgIHRvcDo4cHg7XG4vLyAgIH1cbi8vICAgLnAtdG9wLTEwe1xuLy8gICAgIHRvcDoxMHB4O1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4vLyAgIH1cbi8vICAgLnAtdG9wLTE4e1xuLy8gICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuLy8gICB9XG4vLyAgIC5oLWxpbmV7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4vLyAgICAgbWFyZ2luOiAwIDE2cHg7XG4vLyAgICAgcGFkZGluZy10b3A6IDhweDtcbi8vICAgICBvcGFjaXR5OiAwLjU7XG4vLyAgIH1cbi8vICAgLmNvbC1pbWctaG90ZWxsaXN0e1xuLy8gICAgIGhlaWdodDogMTA5cHg7XG4vLyAgIH1cbi8vICAgLmJhZGdlLWlvc3tcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgfVxuLy8gICAuYnRuLWhlYWRlcntcbi8vICAgICB3aWR0aDogNDhweDtjb2xvcjogIzRmNGY0ZjtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO1xuLy8gICAgIGhlaWdodDogNDhweDtcbi8vICAgfVxuLy8gICBpbWcge1xuLy8gICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuLy8gICAgIGJvcmRlcjogMDtcbi8vICAgfVxuICBcbi8vICAgICBAbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4vLyAgICAgICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcbi8vICAgICAgICAgbWF4LXdpZHRoOiAxODhweDtcbi8vICAgICAgICAgbGVmdDogMTJweDtcbi8vICAgICAgIH1cbi8vICAgICAgIC5wLXRvcC0xMHtcbi8vICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuLy8gICAgICAgICBmb250LXNpemU6MTRweDtcbi8vICAgICAgIH1cbi8vICAgICAgIC50ZXh0LWxvZ2lue1xuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgICB9XG4vLyAgICAgfVxuICBcbi8vICAgICA6aG9zdHtcbi8vICAgICAgIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbi8vICAgICB9XG4vLyAgICAgaW9uLWJhZGdle1xuLy8gICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuLy8gICAgIH1cbi8vICAgICAubGFiZWwtYmFkZ2V7XG4vLyAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuLy8gICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4vLyAgICAgICBmb250LXNpemU6IDEycHg7XG4vLyAgICAgfVxuLy8gICAgIDo6bmctZGVlcHtcbi8vICAgICAgIC5pbmZpbml0ZS1sb2FkaW5nLXRleHR7XG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4vLyAgICAgICB9XG4vLyAgICAgICAvL3NrZWxldG9uLXN0eWxlXG4vLyAgICAgICBpb24tc2tlbGV0b24tdGV4dHtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgIH1cbiAgICAgIFxuLy8gICAgICAgLmNvbC1pbWctaG90ZWxsaXN0LXNre1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDogMDtcbi8vICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4vLyAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuLy8gICAgICAgfVxuLy8gICAgICAgLnRleHQtbmFtZS1za1xuLy8gICAgICAge1xuLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbi8vICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbi8vICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuLy8gICAgICAgfVxuLy8gICAgICAgLnAtc2t7XG4vLyAgICAgICAgIGhlaWdodDogMTZweDtcbi8vICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4vLyAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgIH1cbi8vICAgICAgIC5sYXN0LXJvdy1za3tcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDUycHg7XG4vLyAgICAgICAgIGhlaWdodDogMTdweDtcbi8vICAgICAgIH1cbi8vICAgICAgIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2t7XG4vLyAgICAgICAgIHBhZGRpbmc6IDhweDtcbi8vICAgICAgICAgcGFkZGluZy10b3A6MTZweDtcbi8vICAgICAgIH1cbi8vICAgICAgIC5oLWxpbmUtc2t7XG4vLyAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuLy8gICAgICAgICBtYXJnaW46IDAgMTZweCAhaW1wb3J0YW50O1xuLy8gICAgICAgICBvcGFjaXR5OiAwLjU7XG4vLyAgICAgICB9XG4vLyAgICAgfSIsIi5oZWFkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWljb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG5cbi5iYWRnZS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG5cbi5pbWctcmFkaXVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgZmxleC1iYXNpczogMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi50ZXh0LW5hbWVyb29tIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGV4dC1jb21ibyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypjc3MgY2hvIGlvcyovXG4gIC8qY3NzIGNobyBpb3MqL1xuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW9uLXRodW1ibmFpbCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuYmFkZ2UuYmFkZ2UtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1iYWRnZSB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tYmxvY2sge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTNweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICBtYXJnaW46IDAgMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtaW9zIHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDE4cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIG1hcmdpbjogMCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnByaWNlLmNvbCB7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcbn1cblxuLm0tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xufVxuXG4ubS1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn1cblxuLmJ0bi1jbGVhci1maWx0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDk0JTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2FpbiB7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50ZXh0LWVtcHR5IHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5pbWctaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgbGVmdDogLTRweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNscy1pbWctY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2xzLWljb24tY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5sYWJlbC1wcmljZS1sb2dpbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtbG9naW4ge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50cmFuc2JveF8wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbn1cblxucCwgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5yb3ctaXRlbS1ob3RlbGxpc3Qge1xuICBtYXJnaW46IDE2cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5wLXRvcC1kZWFsdHlwZSB7XG4gIHRvcDogOXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbiAgbWF4LXdpZHRoOiA1MyU7XG59XG5cbi5wLXRvcC1kZWFsdHlwZS02IHtcbiAgdG9wOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4ubGFiZWwtbWlucHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5sYWJlbC1taW5wcmljZVRBIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLmxhYmVsLWRlYWxwcmljZSB7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLnAtdG9wLW1pbnByaWNlIHtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wLXRvcC04IHtcbiAgdG9wOiA4cHg7XG59XG5cbi5wLXRvcC0xMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn1cblxuLnAtdG9wLTE4IHtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG5cbi5oLWxpbmUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNvbC1pbWctaG90ZWxsaXN0IHtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFkZ2UtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYnRuLWhlYWRlciB7XG4gIHdpZHRoOiA0OHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG59XG5cbi5pY28tZ2lmdCB7XG4gIGhlaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOTBweDtcbiAgdG9wOiA2cHg7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgbGVmdDogMTEycHg7XG4gIHdpZHRoOiA2OSU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG5cbiAgLnAtdG9wLTEwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAudGV4dC1sb2dpbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gICAgd2lkdGg6IDcxJTtcbiAgfVxufVxuOmhvc3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG59XG5cbmlvbi1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmxhYmVsLWJhZGdlIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOjpuZy1kZWVwIC5pbmZpbml0ZS1sb2FkaW5nLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAuY29sLWltZy1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuOjpuZy1kZWVwIC50ZXh0LW5hbWUtc2sge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuOjpuZy1kZWVwIC5wLXNrIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luOiAwO1xufVxuOjpuZy1kZWVwIC5sYXN0LXJvdy1zayB7XG4gIHBhZGRpbmctdG9wOiA1MnB4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG46Om5nLWRlZXAgLnJvdy1pdGVtLWhvdGVsbGlzdC1zayB7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG46Om5nLWRlZXAgLmgtbGluZS1zayB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW46IDAgMTZweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5tLXRvcC01IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubS10b3AtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3AtaXRlbS1zdHlsZSB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5maXgtaGVpZ2h0LTEwNCB7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5sYXN0LXJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbHMtbGluZWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufSJdfQ== */"

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