(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]
    }
];
let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"likepage-header\">\n  <!-- <ion-toolbar>\n  <ion-title style=\"text-align: center;font-size: 20px;font-weight: bold\">Khách sạn yêu thích</ion-title>\n</ion-toolbar> -->\n    <ion-row>\n      <ion-col class=\"header-title\"><label>Yêu thích</label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-segment [(ngModel)]=\"tablike\" class=\"div-segment\" mode=\"md\">\n        <ion-segment-button (click)=\"Selecthotel()\" class=\"segment-header\" value=\"hotellike\" mode=\"md\">\n          Khách sạn\n        </ion-segment-button>\n        <ion-segment-button (click)=\"Selectblog()\" class=\"segment-header\" value=\"bloglike\" mode=\"md\">\n          Bài viết\n        </ion-segment-button>\n        <ion-segment-button (click)=\"SelectPlace()\" class=\"segment-header\" value=\"placelike\" mode=\"md\">\n          Trải nghiệm\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"activeTabTrip == 1\">\n    <ion-list *ngIf=\"ishide && isConnected\">\n      <div class=\"card-background-detailpage\">\n        <div *ngFor=\"let msg of json1; let i = index\">\n          <div class=\"row-item-hotellist\">\n            <!-- left image region-->\n            <div class=\"col-img-hotellist\">\n                <img  class=\"img-radius\" src={{msg.Avatar}} style=\"position:relative\" (click)=\"itemSelected(msg)\">\n                <div *ngIf=\"msg.Liked\" class=\"img-heart\" (click)=\"unlikeItem(msg.HotelId)\">\n                  <img src=\"./assets/imgs/heart-red.svg\" class=\"cls-img-content\" >\n                </div>\n                <div *ngIf=\"!msg.Liked\" class=\"img-heart\" (click)=\"likeItem(msg.HotelId)\">\n                  <img src=\"./assets/imgs/heart-empty.svg\" class=\"cls-img-content\" >\n                </div>\n                <div *ngIf=\"msg.PromotionDescriptionSubstring\" class=\"transbox_0\">\n                    {{msg.PromotionDescriptionSubstring}}\n                  </div>\n            </div>\n            <!-- right content region -->\n            <div class=\"col-description-hotellist\">\n                <div  class=\"fix-height-123\">\n                    <div (click)=\"itemSelected(msg)\" >\n                    <h2 class=\"text-name\" >{{msg.Name}}\n                    </h2>\n                    <p>\n                        <img *ngIf=\"msg.Rating!=0\" src={{msg.Rating}}>\n                    </p>\n                    <p *ngIf=\"msg.SubLocation\" class=\"text\">\n                      <img style=\"height:10px\" src=\"./assets/ic_hoteldetail/group.svg\">\n                      <label style=\"color: #4f4f4f;margin-left: 5px\"> {{msg.SubLocation}}\n                      </label>\n                    </p>\n                    <div *ngIf=\"msg.AvgPoint>0\">\n                      <ion-row *ngIf=\"msg.AvgPoint>9 && msg.AvgPoint<=10\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Tuyệt vời\n                        </p>\n                      </ion-row>\n                      <ion-row *ngIf=\"msg.AvgPoint>8 && msg.AvgPoint<=9\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Rất tốt\n                        </p>\n                      </ion-row>\n                      <ion-row *ngIf=\"msg.AvgPoint>7 && msg.AvgPoint<=8\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Khá tốt\n                        </p>\n                      </ion-row>\n                      <ion-row *ngIf=\"msg.AvgPoint>5 && msg.AvgPoint<=7\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Tạm được\n                        </p>\n                      </ion-row>\n                      <ion-row *ngIf=\"msg.AvgPoint<=5\" class=\"m-top-5\">\n                        <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                        <p class=\"label-badge\">Không tốt\n                        </p>\n                      </ion-row>\n                  </div>\n                </div>\n                  <div class=\"m-top-10\">\n                    <div *ngFor=\"let itemstyle of msg.StyleTag; let idx = index\">\n                      <div *ngIf=\"idx <2\" class=\"sp-item-style\">{{itemstyle.Name}}</div>\n                    </div>\n                  </div>\n                  <!-- last row -->\n                  <div class=\"last-row\">\n                      <div *ngIf=\"loginuser\" >\n                        <div *ngIf=\"msg.DealType\"   [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                            <div style=\"font-weight: bold\">\n                              <div *ngIf=\"msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype\">\n                                <img src=\"./assets/ic_combo.svg\">\n                                <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                              </div>\n                              <div *ngIf=\"!msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype-6\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                </div>\n                              <div  *ngIf=\"msg.DealPrice\" text-right class=\"p-top-10  price\">\n                                <label *ngIf=\"msg.DealPrice!=0\" class=\"label-dealprice\">{{ msg.DealPrice }} đ</label>\n                              </div>\n                              <div  *ngIf=\"!msg.DealPrice\" text-right class=\"p-top-10 price\">\n                                <ion-icon class=\"ico-gift\" name=\"gift\"></ion-icon>\n                                <label *ngIf=\"!msg.DealPrice\" class=\"label-dealprice\">Giá ưu đãi!</label>\n                              </div>\n                            </div>\n                          </div>\n                          <div *ngIf=\"!msg.DealType\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                            <div text-right *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr && msg.MinPriceTAStr && msg.MinPriceOTAStr!=msg.MinPriceTAStr && msg.MinPriceTAStr!=0 && msg.MinPriceOTAStr<msg.MinPriceTAStr && loginuser\" class=\"label-minpriceTA\">{{msg.MinPriceTAStr}} đ</div>\n                            <div >\n                              <div col-7 class=\"text-nameroom\" text-left class=\"p-top-minprice\">\n                                <label >{{msg.RoomNameSubString}}</label>\n                              </div>\n                              <div col-5 text-right class=\"p-top-10 price\">\n                                <div>\n                                    <label *ngIf=\"msg.HasCheckPrice && msg.MinPriceOTAStr\" class=\"label-minprice\">{{msg.MinPriceOTAStr}} đ</label>\n                                    <label *ngIf=\"msg.HasCheckPrice && !msg.MinPriceOTAStr\" class=\"label-minprice\">Hết phòng</label>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                          <div *ngIf=\"!loginuser\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\" (click)=\"goToLogin()\">\n                              <div *ngIf=\"msg.DealType\">\n                                  <div>\n                                      <div>\n                                          <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                      </div>\n                                    </div>\n                              </div>\n                            <div *ngIf=\"!msg.DealType\">\n                              <div>\n                                  <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                              </div>\n                            </div>\n                          </div>\n                    </div>\n                    \n                  </div>\n            </div>\n          </div>\n          <p class=\"h-line\"></p>\n        </div>\n\n      </div>\n    </ion-list>\n    <div *ngIf=\"!ishide && loginuser\" style=\"text-align: center\">\n      <ion-item-group  *ngFor=\"let item of itemsSkeleton\">\n          <ion-row class=\"row-item-hotellist-sk\">\n              <ion-col size=\"4\" class=\"col-img-hotellist-sk\" >\n                  <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px\"></ion-skeleton-text>\n              </ion-col>\n              <ion-col size=\"8\" class=\"col-description-hotellist-sk\" style=\"line-height: 18px;padding-top: 0\">\n                  <div style=\"height: 100%\">\n                    <h2 class=\"text-name-sk\" >\n                        <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                    </h2>\n                    <p class=\"p-sk\">\n                        <ion-skeleton-text animated style=\"width: 50%;margin: 0\"></ion-skeleton-text>\n                    </p>\n                    <div class=\"last-row-sk\">\n                        <ion-skeleton-text animated style=\"width: 100%;margin: 0\"></ion-skeleton-text>\n                    </div>\n                  </div>\n                </ion-col>\n          </ion-row>\n          <p class=\"h-line-sk\"></p>\n      </ion-item-group>\n    </div>\n    <div *ngIf=\"nodata==true || !isConnected\" style=\"text-align: center;margin-top: 10px\">\n        <img src=\"./assets/imgs/empty.svg\">\n        <div *ngIf=\"!isConnected\">\n          <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\n        </div>\n    \n        <div *ngIf=\"!istext && isConnected\">\n          <p class=\"text-empty\">Không có khách sạn yêu thích!</p>\n        </div>\n    \n        <div *ngIf=\"istext && isConnected\">\n          <div class=\"text-trip-empty\">\n            <label>Đăng nhập để xem khách sạn đã yêu thích.</label>\n          </div>\n          <div class=\"button-trip-empty\">\n            <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"goToLogin()\">Đăng nhập ngay</button>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div *ngIf=\"activeTabTrip == 2\">\n    <div *ngIf=\"arrblog && arrblog.length >0\">\n    <ion-list style=\"margin-top: -15px\" lines=\"none\"  >\n      <div style=\"margin-top: 15px\" *ngFor=\"let item of arrblog\">\n        <ion-item style=\"--inner-padding-end: 16px\">\n          <img (click)=\"itemblogclick(item)\" class=\"img-blog\"\n            src={{item.avatar}}>\n        </ion-item>\n          <p class=\"p-title\">\n            {{item.title}}\n          </p>\n        <ion-row style=\"margin-top: -5px;margin-left: 10px;\">\n          <ion-col size=\"9\">\n            <label (click)=\"itemblogclick(item)\" style=\"margin:0\" style=\"color: #828282;font-size: 12px\">{{item.date}}</label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img (click)=\"share(item)\" style=\"width: 20px\" src=\"./assets/imgs/ic_share_black.svg\">\n\n          </ion-col>\n          <ion-col size=\"1\">\n            <img class=\"img-heart\" *ngIf=\"!item.Like\" (click)=\"likeItemblog(item.id)\" src=\"./assets/imgs/heart-empty-black.svg\"\n            style=\"width:18px;height:18px\">\n          <img class=\"img-heart\"  style=\"width:18px;height:18px\" *ngIf=\"item.Like\" (click)=\"unlikeItemblog(item.id)\" src=\"./assets/imgs/heart-red.svg\">\n\n          </ion-col>\n        </ion-row>\n        <!-- <div>\n            <label style=\"margin:0\" style=\"color: #828282;font-size: 12px;margin-left: -5px\">2 tiếng trước</label>\n            <div style=\"text-align: right\">\n                <img (click)=\"share()\" style=\"width: 20px\" src=\"./assets/imgs/ic_share_black.svg\">\n                <img *ngIf=\"Liked\" (click)=\"likeItem()\" src=\"./assets/imgs/heart-empty-black.svg\"\n                style=\"width:20px;height:20px;margin-top: 10px\">\n              <ion-icon *ngIf=\"!Liked\" style=\"width:20px;height:20px\" (click)=\"unlikeItem()\" name=\"heart\" color=\"danger\">    </ion-icon>\n            </div>\n        </div> -->\n      </div>\n    </ion-list>\n  </div>\n    <div *ngIf=\"nodatablog==true || !isConnected\" style=\"text-align: center;margin-top: 10px\">\n        <img src=\"./assets/imgs/empty.svg\">\n        <div *ngIf=\"!isConnected\">\n          <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\n        </div>\n    \n        <div *ngIf=\"!istextblog && isConnected\">\n          <p class=\"text-empty\">Không có bài viết yêu thích!</p>\n        </div>\n    \n        <div *ngIf=\"istextblog && isConnected\">\n          <div class=\"text-trip-empty\">\n            <label>Đăng nhập để xem bài viết đã yêu thích.</label>\n          </div>\n          <div class=\"button-trip-empty\">\n            <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"goToLogin()\">Đăng nhập ngay</button>\n          </div>\n        </div>\n      </div>\n  </div>\n\n  <div *ngIf=\"activeTabTrip == 3\" class=\"div-place\">\n    <div *ngIf=\"arrplace && arrplace.length >0\">\n        <ion-list class=\"list-search-item\">\n          <div [ngClass]=\"idx > 0 ? 'p-bottom-16 p-top-16' : 'p-bottom-16'\" *ngFor=\"let slide of arrplace; let idx = index\" >\n              <div class=\"div-image-like\">\n                  <img class=\"img-list-item\" *ngIf=\"slide.avatar\" [src]=\"slide.avatar\" (click)=\"itemListSearchClick(slide)\"/>\n                  <img class=\"img-list-item\" *ngIf=\"!slide.avatar\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\" (click)=\"itemListSearchClick(slide)\"/>\n                  <div class=\"div-like\" >\n                  </div>\n                  <div class=\"div-img-heart\">\n                    <img class=\"img-heart\" *ngIf=\"slide && !slide.liked\" src=\"./assets/imgs/ic_heart_w.svg\" (click)=\"likePlace(slide)\">\n                    <img class=\"img-heart\" *ngIf=\"slide && slide.liked\" src=\"./assets/imgs/ic_heart_red.svg\" (click)=\"unlikePlace(slide)\">\n                  </div>\n                  <div class=\"div-text-like\" *ngIf=\"slide.totalLike >0\">{{slide.totalLike}}</div>\n              </div>\n\n            <div class=\"info-search-item\">\n              <!-- Tên -->\n              <div class=\"name-search-item\"  (click)=\"itemListSearchClick(slide)\">{{slide.name}}</div>\n              <!-- highlight -->\n              <div *ngIf=\"slide.introText\" class=\"text-hightLight m-8\"  (click)=\"itemListSearchClick(slide)\">{{slide.introText}}</div>\n              <div *ngIf=\"!slide.introText\" class=\"text-hightLight m-8\"  (click)=\"itemListSearchClick(slide)\">{{slide.hightLight}}</div>\n              <!-- km & address -->\n              <div class=\"div-likeandshare\">\n                <div>\n                  <!-- <div *ngIf=\"slide.totalDistance > 0\"><span class=\"text-item-regular\" (click)=\"itemListSearchClick(slide)\">{{ slide.totalDistance }} km | {{ slide.shortAdress }}</span></div> -->\n                  <div *ngIf=\"slide\"><span class=\"text-item-regular\" (click)=\"itemListSearchClick(slide)\">{{ slide.address }}</span></div>\n                  \n                </div>\n                <div *ngIf=\"slide.workingHoursDisplay\" class=\"text-hidden\" (click)=\"itemListSearchClick(slide)\">\n                  <span class=\"text-item-regular \">{{ slide.workingHoursDisplay }}</span>\n                </div>\n              </div>\n            </div>\n        </div>\n      \n      </ion-list>\n    </div>\n    \n    <div *ngIf=\"nodataplace==true || !isConnected\" style=\"text-align: center;margin-top: 10px\">\n      <img src=\"./assets/imgs/empty.svg\">\n      <div *ngIf=\"!isConnected\">\n        <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\n      </div>\n  \n      <div *ngIf=\"!istextplace && isConnected\">\n        <p class=\"text-empty\">Không có trải nghiệm yêu thích!</p>\n      </div>\n  \n      <div *ngIf=\"istextplace && isConnected\">\n        <div class=\"text-trip-empty\">\n          <label>Đăng nhập để xem trải nghiệm đã yêu thích.</label>\n        </div>\n        <div class=\"button-trip-empty\">\n          <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"goToLogin()\">Đăng nhập ngay</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".likepage-header .segment-header {\n  text-transform: none;\n  min-height: 36px;\n  font-size: 17px;\n}\n\n::ng-deep .sc-ion-segment-ios-hion-toolbar:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ::ng-deep ion-toolbar .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked {\n  border: solid 1px #26bed6 !important;\n}\n\n::ng-deep .sc-ion-segment-ios-hion-toolbar:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ::ng-deep ion-toolbar .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button {\n  border: solid 1px #26bed6 !important;\n  color: #828282 !important;\n}\n\n::ng-deep .sc-ion-segment-ios-h {\n  margin: 0 16px;\n}\n\n::ng-deep ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button {\n  max-width: none;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n::ng-deep .segment-button-layout-icon-top ion-activatable ion-activatable-instant {\n  color: #828282 !important;\n}\n\n.header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 17px;\n  text-align: left;\n  letter-spacing: -0.4px;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 4px;\n  letter-spacing: -0.34px;\n}\n\n.text-trip-empty {\n  text-align: center;\n  color: #bdbdbd;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 123px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page badge.badge-ios {\n  --background: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page label {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 40px;\n  height: 48px;\n}\n\n.text-empty {\n  color: #828282;\n  text-align: center;\n}\n\n.img-heart {\n  position: absolute;\n  top: 7px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 13px;\n  margin-top: 3px;\n  width: 16px;\n  height: 16px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 10px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n  line-height: 16px;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 123px;\n}\n\n.p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  max-width: 53%;\n}\n\n.p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 18px;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 16px;\n}\n\n.p-top-minprice {\n  top: 10px;\n  font-size: 12px;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  position: absolute;\n  right: 8px;\n  bottom: 0;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 123px;\n  position: absolute;\n}\n\n.col-description-hotellist {\n  position: relative;\n  margin-top: 13px;\n  left: 112px;\n  width: 70%;\n}\n\n.btn-header {\n  margin-right: 15px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n.btn-trip-empty {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 90%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n  margin-top: 16px;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .text-right-hotellike {\n    left: 12px;\n    max-width: 188px;\n  }\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  margin-top: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.ios.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated.segment-button-checked {\n  color: white !important;\n  font-size: 17px;\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\n.p-title {\n  font-size: 16px;\n  letter-spacing: -0.13px;\n  padding: 8px 16px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n::ng-deep ion-badge {\n  border-radius: 6px;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 73%;\n  }\n}\n\n.fix-height-123 {\n  height: 123px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: 0;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n  margin-bottom: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  line-height: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  font-size: 10px;\n  color: #26bed6;\n  background: #ffffff;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n\n.div-place .list-search-item {\n  padding: 14px 16px 16px 16px;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n  z-index: 9999;\n  margin-bottom: 0;\n}\n\n.div-place .p-bottom-16 {\n  padding-bottom: 16px;\n}\n\n.div-place .p-top-16 {\n  padding-top: 16px;\n}\n\n.div-place .m-8 {\n  margin: 4px 0;\n}\n\n.div-place .name-search-item {\n  text-align: left;\n  font-size: 18px;\n  color: #003c71;\n  font-weight: bold;\n  line-height: 20px;\n  letter-spacing: -0.34px;\n  overflow: hidden;\n  -webkit-line-clamp: 1;\n  display: -webkit-box;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n  max-height: 21px;\n  max-width: 100%;\n}\n\n.div-place .text-hightLight {\n  font-size: 14px;\n  letter-spacing: -0.34px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 35px;\n  text-align: left;\n  max-width: 100%;\n}\n\n.div-place .text-item-regular {\n  font-size: 12px;\n  color: #828282;\n  max-width: 100%;\n  -webkit-line-clamp: 1;\n  display: -webkit-box;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n  line-height: 16px;\n  overflow: hidden;\n  max-height: 16px;\n}\n\n.div-place .div-likeandshare {\n  bottom: 0;\n  line-height: 12px;\n  text-align: left;\n}\n\n.div-place .text-hidden {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-width: 230px;\n}\n\n.div-place .div-img-spot {\n  position: absolute;\n  padding: 2px 6px;\n  background: #eee;\n  opacity: 0.75;\n  border-radius: 4px;\n  right: -38px;\n  top: -12px;\n  margin: 10px;\n}\n\n.div-place .img-spot {\n  width: 14px;\n  height: 16px;\n  opacity: 0.75;\n}\n\n.div-place .img-list-item {\n  width: 100%;\n  height: 208px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  z-index: 13;\n  position: relative;\n}\n\n.div-place .div-image-like {\n  position: relative;\n  padding-bottom: 4px;\n}\n\n.div-place .div-image-like .div-like {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  background-color: #222222;\n  opacity: 0.4;\n  width: 56px;\n  height: 24px;\n  border-radius: 2px;\n  z-index: 15;\n  color: white;\n  text-align: center;\n}\n\n.div-place .div-image-like .div-img-heart {\n  position: absolute;\n  top: -4px;\n  left: 26px;\n  z-index: 16;\n  width: 32px;\n}\n\n.div-place .div-image-like .div-img-heart .img-heart {\n  width: 14px;\n}\n\n.div-place .div-image-like .div-text-like {\n  position: absolute;\n  top: 20px;\n  left: 46px;\n  color: white;\n  z-index: 16;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRE9FO0VBQ0ksb0NBQUE7QUNKTjs7QURRRTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7QUNOTjs7QURRRTtFQUNFLGNBQUE7QUNOSjs7QURRRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURRRTtFQUNFLHlCQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEUUU7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QUNOSjs7QURRRTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUlBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFBZ0MsdUNBQUE7RUFDaEMsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDUko7O0FEV0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDUko7O0FEVUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNQSjs7QURVRTtFQUVFLGtCQUFBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ1JOOztBRFVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFHQSxhQUFBO0VBSUEsWUFBQTtBQ1BKOztBRFNFO0VBRUUsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURVRTtFQUVFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxl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QSxlQUFBO0FDUko7O0FEVUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFBZ0MsNEJBQUE7RUFDaEMsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDUkY7O0FEVUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFVBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUFnQyx1Q0FBQTtFQUNoQyxnQkFBQTtBQ1BGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDUEY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNQRjs7QURTQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUdBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDVEY7O0FEV0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDVEo7O0FEV0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNUUjs7QURXSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1RSOztBRFdRO0VBQ0ksV0FBQTtBQ1RaOztBRFlJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWtlcGFnZS1oZWFkZXJ7XHJcbiAgLnNlZ21lbnQtaGVhZGVye1xyXG4gICAgLy9jb2xvcjojODI4MjgyIDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbWluLWhlaWdodDogMzZweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIC8vYm9yZGVyOiBzb2xpZCAxcHggIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4vLy9zdHlsZSBpb3NcclxuOjpuZy1kZWVwe1xyXG4gIC5zYy1pb24tc2VnbWVudC1pb3MtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLCBpb24tdG9vbGJhciAuc2MtaW9uLXNlZ21lbnQtaW9zLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAuc2MtaW9uLXNlZ21lbnQtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24sIGlvbi10b29sYmFyIC5zYy1pb24tc2VnbWVudC1pb3MtaDpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b257XHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNjLWlvbi1zZWdtZW50LWlvcy1oIHtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuICBpb24tdG9vbGJhciAuc2MtaW9uLXNlZ21lbnQtaW9zLWguc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgbWF4LXdpZHRoOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgfVxyXG4gIC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AgaW9uLWFjdGl2YXRhYmxlIGlvbi1hY3RpdmF0YWJsZS1pbnN0YW50e1xyXG4gICAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmhlYWRlci10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICAudGV4dC10aXRsZVxyXG4gIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4XHJcbiAgfVxyXG4gIC50ZXh0LW5hbWVcclxuICB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDEgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IDE3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIC8vbWF4LXdpZHRoOiAyMTZweDtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luLXRvcDo0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICB9XHJcbiAgLnRleHQtdHJpcC1lbXB0eXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gIH1cclxuXHJcbiAgLmltZy1yYWRpdXNcclxuICB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTIzcHggIWltcG9ydGFudDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIC5jb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxcHg7XHJcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XHJcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbiAgLnRleHQtbmFtZXJvb21cclxuICB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgXHJcbiAgfSBcclxuICAudGV4dC1jb21ib1xyXG4gIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogI2U1MjgyMjtcclxuICB9XHJcbiAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH1cclxuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAuaW9uLXRodW1ibmFpbHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgYmFkZ2UuYmFkZ2UtaW9ze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjc5MjIxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICB9XHJcblxyXG4gIC5pdGVtLWJsb2Nre1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1pbi1oZWlnaHQ6IDQuNHJlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICB9XHJcbiAgLypjc3MgY2hvIGlvcyovXHJcbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxyXG4gIC5pdGVtLWlvcyAudHJhbnNib3ggeyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9sZWZ0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xyXG59XHJcbi8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXHJcbi5pdGVtLWlvcyAudHJhbnNib3gxIHsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL2xlZnQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGJvdHRvbToxMnB4O1xyXG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcclxuICB9XHJcbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXHJcbiAgLml0ZW0taW9zIC50cmFuc2JveDIgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgYm90dG9tOjEzcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xyXG4gIH1cclxuICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaXRlbS1pb3Mge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xyXG4gICAgbWFyZ2luOjAgMTFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XHJcbiAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5sYWJlbC1pb3Mge1xyXG4gICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XHJcbiAgfVxyXG4gIC8qY3NzIGNobyBpb3MqL1xyXG5cclxuICAvKmNzcyBjaG8gYW5kcm9pZCovXHJcbiAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxyXG4gIC5pdGVtLW1kIC50cmFuc2JveCB7IFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL2xlZnQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGJvdHRvbTogMThweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XHJcbn1cclxuLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgbG9jYXRpb25cclxuLml0ZW0tbWQgLnRyYW5zYm94MSB7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9sZWZ0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBib3R0b206MTJweDtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XHJcbiAgfVxyXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xyXG4gIC5pdGVtLW1kIC50cmFuc2JveDIgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgYm90dG9tOjEzcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tbWQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xyXG4gICAgbWFyZ2luOjAgMTFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgfVxyXG4gIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xyXG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xyXG4gIH1cclxuICAuaXRlbS1tZCAuaXRlbS1pbm5lciB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIC5sYWJlbC1tZCB7XHJcbiAgICBtYXJnaW46IDExcHggMHB4IDExcHggMDtcclxuICB9XHJcbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xyXG4gIFxyXG4gIC5wcmljZS5jb2x7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XHJcbiAgfVxyXG4gIFxyXG59XHJcbi5idG4tY2xlYXItZmlsdGVye1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4uYnRuLWZpbHRlci1hZ2FpbntcclxuICBjb2xvcjogI0Y3OTIyMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogICNGNzkyMjE7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG4uYnRuLWZpbHRlci1hZ2Fpbi1ub2ZpbHRlcntcclxuICBib3JkZXI6bm9uZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHggNDBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLnRleHQtZW1wdHl7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbWctaGVhcnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogN3B4O1xyXG4gIGxlZnQ6IC00cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5jbHMtaW1nLWNvbnRlbnR7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG4uY2xzLWljb24tY29udGVudHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmxhYmVsLXByaWNlLWxvZ2lue1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udC1ib2xke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50ZXh0LWxvZ2lue1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ubGFiZWwtYmFkZ2V7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbiAgLnRyYW5zYm94XzAgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcclxuICB9XHJcbiAgcCxoMntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAucm93LWl0ZW0taG90ZWxsaXN0e1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMjNweDtcclxuICB9XHJcblxyXG4gIC5wLXRvcC1kZWFsdHlwZXtcclxuICAgIHRvcDo5cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNlNTI4MjI7XHJcbiAgICBtYXgtd2lkdGg6IDUzJTtcclxuICB9XHJcbiAgLnAtdG9wLWRlYWx0eXBlLTZ7XHJcbiAgICB0b3A6NXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gIH1cclxuICAubGFiZWwtbWlucHJpY2V7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIH1cclxuICAubGFiZWwtbWlucHJpY2VUQXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gIH1cclxuICAubGFiZWwtZGVhbHByaWNle1xyXG4gICAgY29sb3I6ICNlNTI4MjI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbiAgLnAtdG9wLW1pbnByaWNle1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBcclxuICB9XHJcbiAgLnAtdG9wLTh7XHJcbiAgICB0b3A6OHB4O1xyXG4gIH1cclxuICAucC10b3AtMTB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogOHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gIH1cclxuICAucC10b3AtMTh7XHJcbiAgICBwYWRkaW5nLXRvcDogMThweDtcclxuICB9XHJcbiAgLmgtbGluZXtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5jb2wtaW1nLWhvdGVsbGlzdHtcclxuICAgIC8vaGVpZ2h0OiAxMDlweDtcclxuICAgIGhlaWdodDogMTIzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxuICAgIGxlZnQ6IDExMnB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbi8vICAgaW9uLWJhZGdle1xyXG4vLyAgICAgLS1iYWNrZ3JvdW5kOiAjMjZiZWQ2O1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgIH1cclxuICAuYnRuLWhlYWRlcntcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtjb2xvcjogIzRmNGY0ZjtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLXRyaXAtZW1wdHl7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNzkyMjE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XHJcbiAgLnRleHQtcmlnaHQtaG90ZWxsaWtle1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgICAgbWF4LXdpZHRoOiAxODhweDtcclxuICB9XHJcblxyXG59XHJcbi5pbWctYmxvZ1xyXG57IFxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5mbG9hdC1pbmZve1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogMTZweDtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG5cclxuLmlvcy5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50Lmh5ZHJhdGVkLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG46aG9zdHtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XHJcbn1cclxuLnAtdGl0bGV7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEzcHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcHtcclxuICAuaW5maW5pdGUtbG9hZGluZy10ZXh0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLy9za2VsZXRvbi1zdHlsZVxyXG4gIGlvbi1za2VsZXRvbi10ZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb2wtaW1nLWhvdGVsbGlzdC1za3tcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcbiAgLnRleHQtbmFtZS1za1xyXG4gIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGhlaWdodDogMThweDtcclxuICB9XHJcbiAgLnAtc2t7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgLmxhc3Qtcm93LXNre1xyXG4gICAgcGFkZGluZy10b3A6IDUycHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgfVxyXG4gIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2t7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDoxNnB4O1xyXG4gIH1cclxuICAuaC1saW5lLXNre1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XHJcbiAgICBtYXJnaW46IDAgMTZweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICBpb24tYmFkZ2V7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XHJcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxuICAucC10b3AtMTB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgfVxyXG4gIC50ZXh0LWxvZ2lue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xyXG4gICAgd2lkdGg6NzMlO1xyXG4gIH1cclxufVxyXG5cclxuLmZpeC1oZWlnaHQtMTIze1xyXG4gIGhlaWdodDogMTIzcHg7XHJcbn1cclxuLmxhc3Qtcm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206MDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2xzLWxpbmVoZWlnaHR7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi5tLXRvcC0xMHtcclxuICBtYXJnaW4tdG9wOjZweDtcclxuICBtYXJnaW4tYm90dG9tOjEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG4uc3AtaXRlbS1zdHlsZXtcclxuICBwYWRkaW5nOjNweCA1cHg7XHJcbiAgYm9yZGVyOnNvbGlkIDAuNXB4ICMyNmJlZDY7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uZGl2LXBsYWNle1xyXG5cclxuICAubGlzdC1zZWFyY2gtaXRlbXtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnAtYm90dG9tLTE2e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIC5wLXRvcC0xNntcclxuICAgIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgfVxyXG4gIC5tLTh7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG59XHJcblxyXG4gIC5uYW1lLXNlYXJjaC1pdGVte1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqLyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgbWF4LWhlaWdodDogMjFweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnRleHQtaGlnaHRMaWdodHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xyXG4gICAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqLyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4udGV4dC1pdGVtLXJlZ3VsYXJ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1heC1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuLmRpdi1saWtlYW5kc2hhcmV7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnRleHQtaGlkZGVue1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcclxuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDIzMHB4O1xyXG59XHJcbi5kaXYtaW1nLXNwb3R7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBvcGFjaXR5OiAwLjc1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICByaWdodDogLTM4cHg7XHJcbiAgdG9wOiAtMTJweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmltZy1zcG90e1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBvcGFjaXR5OiAwLjc1O1xyXG59XHJcbi5pbWctbGlzdC1pdGVte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjA4cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy9mbG9hdDogbGVmdDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgei1pbmRleDogMTM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAgLmRpdi1pbWFnZS1saWtle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuXHJcbiAgICAuZGl2LWxpa2V7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgei1pbmRleDogMTU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYtaW1nLWhlYXJ0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC00cHg7XHJcbiAgICAgICAgbGVmdDogMjZweDtcclxuICAgICAgICB6LWluZGV4OiAxNjtcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuXHJcbiAgICAgICAgLmltZy1oZWFydHtcclxuICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpdi10ZXh0LWxpa2V7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICBsZWZ0OiA0NnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB6LWluZGV4OiAxNjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLmxpa2VwYWdlLWhlYWRlciAuc2VnbWVudC1oZWFkZXIge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbWluLWhlaWdodDogMzZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG46Om5nLWRlZXAgLnNjLWlvbi1zZWdtZW50LWlvcy1oaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQsIDo6bmctZGVlcCBpb24tdG9vbGJhciAuc2MtaW9uLXNlZ21lbnQtaW9zLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1zZWdtZW50LWlvcy1oaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uLCA6Om5nLWRlZXAgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWdtZW50LWlvcy1oOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlcjogc29saWQgMXB4ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuc2MtaW9uLXNlZ21lbnQtaW9zLWgge1xuICBtYXJnaW46IDAgMTZweDtcbn1cbjo6bmctZGVlcCBpb24tdG9vbGJhciAuc2MtaW9uLXNlZ21lbnQtaW9zLWguc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24ge1xuICBtYXgtd2lkdGg6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG46Om5nLWRlZXAgLnNlZ21lbnQtYnV0dG9uLWxheW91dC1pY29uLXRvcCBpb24tYWN0aXZhdGFibGUgaW9uLWFjdGl2YXRhYmxlLWluc3RhbnQge1xuICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMTdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4udGV4dC10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLmltZy1yYWRpdXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTIzcHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgZmxleC1iYXNpczogMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi50ZXh0LW5hbWVyb29tIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGV4dC1jb21ibyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypjc3MgY2hvIGlvcyovXG4gIC8qY3NzIGNobyBpb3MqL1xuICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW9uLXRodW1ibmFpbCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBiYWRnZS5iYWRnZS1pb3Mge1xuICAtLWJhY2tncm91bmQ6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBsYWJlbCB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tYmxvY2sge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTNweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICBtYXJnaW46IDAgMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGFiZWwtaW9zIHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDE4cHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIG1hcmdpbjogMCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnByaWNlLmNvbCB7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDVweDtcbn1cblxuLmJ0bi1jbGVhci1maWx0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2FpbiB7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYnRuLWZpbHRlci1hZ2Fpbi1ub2ZpbHRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDQwcHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtZW1wdHkge1xuICBjb2xvcjogIzgyODI4MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLWhlYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbiAgbGVmdDogLTRweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNscy1pbWctY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5jbHMtaWNvbi1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmxhYmVsLXByaWNlLWxvZ2luIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmxhYmVsLWJhZGdlIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRyYW5zYm94XzAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNHB4O1xufVxuXG5wLCBoMiB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi5yb3ctaXRlbS1ob3RlbGxpc3Qge1xuICBtYXJnaW46IDE2cHg7XG4gIGhlaWdodDogMTIzcHg7XG59XG5cbi5wLXRvcC1kZWFsdHlwZSB7XG4gIHRvcDogOXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbiAgbWF4LXdpZHRoOiA1MyU7XG59XG5cbi5wLXRvcC1kZWFsdHlwZS02IHtcbiAgdG9wOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4ubGFiZWwtbWlucHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4ubGFiZWwtbWlucHJpY2VUQSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5sYWJlbC1kZWFscHJpY2Uge1xuICBjb2xvcjogI2U1MjgyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucC10b3AtbWlucHJpY2Uge1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnAtdG9wLTgge1xuICB0b3A6IDhweDtcbn1cblxuLnAtdG9wLTEwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICBib3R0b206IDA7XG59XG5cbi5wLXRvcC0xOCB7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xufVxuXG4uaC1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb2wtaW1nLWhvdGVsbGlzdCB7XG4gIGhlaWdodDogMTIzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIGxlZnQ6IDExMnB4O1xuICB3aWR0aDogNzAlO1xufVxuXG4uYnRuLWhlYWRlciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbn1cblxuLmJ0bi10cmlwLWVtcHR5IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAudGV4dC1yaWdodC1ob3RlbGxpa2Uge1xuICAgIGxlZnQ6IDEycHg7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgfVxufVxuLmltZy1ibG9nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZmxvYXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxNnB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmlvcy5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50Lmh5ZHJhdGVkLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG46aG9zdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbn1cblxuLnAtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuOjpuZy1kZWVwIC5pbmZpbml0ZS1sb2FkaW5nLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAuY29sLWltZy1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuOjpuZy1kZWVwIC50ZXh0LW5hbWUtc2sge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuOjpuZy1kZWVwIC5wLXNrIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luOiAwO1xufVxuOjpuZy1kZWVwIC5sYXN0LXJvdy1zayB7XG4gIHBhZGRpbmctdG9wOiA1MnB4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG46Om5nLWRlZXAgLnJvdy1pdGVtLWhvdGVsbGlzdC1zayB7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG46Om5nLWRlZXAgLmgtbGluZS1zayB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW46IDAgMTZweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjU7XG59XG46Om5nLWRlZXAgaW9uLWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxuXG4gIC5wLXRvcC0xMCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnRleHQtbG9naW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICAgIHdpZHRoOiA3MyU7XG4gIH1cbn1cbi5maXgtaGVpZ2h0LTEyMyB7XG4gIGhlaWdodDogMTIzcHg7XG59XG5cbi5sYXN0LXJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbHMtbGluZWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4ubS10b3AtMTAge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5cbi5zcC1pdGVtLXN0eWxlIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjMjZiZWQ2O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZGl2LXBsYWNlIC5saXN0LXNlYXJjaC1pdGVtIHtcbiAgcGFkZGluZzogMTRweCAxNnB4IDE2cHggMTZweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZGl2LXBsYWNlIC5wLWJvdHRvbS0xNiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLmRpdi1wbGFjZSAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5kaXYtcGxhY2UgLm0tOCB7XG4gIG1hcmdpbjogNHB4IDA7XG59XG4uZGl2LXBsYWNlIC5uYW1lLXNlYXJjaC1pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBtYXgtaGVpZ2h0OiAyMXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uZGl2LXBsYWNlIC50ZXh0LWhpZ2h0TGlnaHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uZGl2LXBsYWNlIC50ZXh0LWl0ZW0tcmVndWxhciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMTZweDtcbn1cbi5kaXYtcGxhY2UgLmRpdi1saWtlYW5kc2hhcmUge1xuICBib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpdi1wbGFjZSAudGV4dC1oaWRkZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDIzMHB4O1xufVxuLmRpdi1wbGFjZSAuZGl2LWltZy1zcG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAycHggNnB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBvcGFjaXR5OiAwLjc1O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHJpZ2h0OiAtMzhweDtcbiAgdG9wOiAtMTJweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmRpdi1wbGFjZSAuaW1nLXNwb3Qge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvcGFjaXR5OiAwLjc1O1xufVxuLmRpdi1wbGFjZSAuaW1nLWxpc3QtaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwOHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiAxMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1wbGFjZSAuZGl2LWltYWdlLWxpa2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG4uZGl2LXBsYWNlIC5kaXYtaW1hZ2UtbGlrZSAuZGl2LWxpa2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgb3BhY2l0eTogMC40O1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHotaW5kZXg6IDE1O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXYtcGxhY2UgLmRpdi1pbWFnZS1saWtlIC5kaXYtaW1nLWhlYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIGxlZnQ6IDI2cHg7XG4gIHotaW5kZXg6IDE2O1xuICB3aWR0aDogMzJweDtcbn1cbi5kaXYtcGxhY2UgLmRpdi1pbWFnZS1saWtlIC5kaXYtaW1nLWhlYXJ0IC5pbWctaGVhcnQge1xuICB3aWR0aDogMTRweDtcbn1cbi5kaXYtcGxhY2UgLmRpdi1pbWFnZS1saWtlIC5kaXYtdGV4dC1saWtlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDQ2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













let Tab2Page = class Tab2Page {
    constructor(platform, navCtrl, storage, zone, searchhotel, gf, valueGlobal, network, loadingCtrl, socialSharing, networkProvider, router, modalCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.gf = gf;
        this.valueGlobal = valueGlobal;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.networkProvider = networkProvider;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.ishide = false;
        this.json1 = [];
        this.jsontemp = [];
        this.itemsSkeleton = [1, 2, 3, 4, 5];
        this.nodata = false;
        this.nodatablog = false;
        this.dataList = [];
        this.listhotels = "";
        this.listhotelIdInternal = "";
        this.jsonhtprice = [];
        this.istext = false;
        this.istextblog = false;
        this.activeTabTrip = 1;
        this.tablike = "hotellike";
        this.arrblog = [];
        this.nodataplace = false;
        this.istextplace = false;
        this.handleSplashScreen();
    }
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }
        this.gf.googleAnalytion('hotel-like', 'Search', '');
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
    ionViewWillEnter() {
        this.valueGlobal.logingoback = '/app/tabs/tab2';
        if (document.querySelector(".tabbar")) {
            document.querySelector(".tabbar")['style'].display = 'flex';
        }
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.loginuser = auth_token;
            }
            else {
                this.loginuser = null;
            }
        });
        this.nodata = false;
        this.json1 = [];
        this.istext = false;
        this.istextblog = false;
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
            setTimeout(() => {
                this.getlisthotellike(0);
            }, 100);
            this.arrblog = [];
            this.getblog();
            this.getPlace();
        }
        else {
            this.isConnected = false;
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        }
    }
    ionViewWillLeave() {
        this.zone.run(() => {
            clearInterval(this.intervalID);
        });
    }
    ionViewDidEnter() {
    }
    itemSelected(item) {
        if (!this.networkProvider.isOnline()) {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            return;
        }
        let id1 = { detailId: item.HotelId };
        this.searchhotel.hotelID = item.HotelId;
        this.searchhotel.rootPage = "likepage";
        this.navCtrl.navigateForward('/hoteldetail/' + item.HotelId);
    }
    unlikeItem(id) {
        if (!this.networkProvider.isOnline()) {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            return;
        }
        var se = this;
        se.jsontemp = se.json1;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                for (let i = 0; i < se.json1.length; i++) {
                    if (se.json1[i].HotelId == id) {
                        se.json1[i].Liked = false;
                        break;
                    }
                }
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: { hotelId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "unlikeitem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    ;
                });
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
    getlisthotellike(value) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.loginuser = auth_token;
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (error) {
                        if (se.myloader) {
                            se.myloader.dismiss();
                        }
                        error.page = "hotellike";
                        error.func = "getlisthotellike";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    ;
                    var arr = JSON.parse(body);
                    if (arr && arr.length > 0) {
                        var chuoi = "";
                        for (let i = 0; i < arr.length; i++) {
                            if (i == arr.length - 1) {
                                chuoi = chuoi + arr[i];
                            }
                            else {
                                chuoi = chuoi + arr[i] + ",";
                            }
                        }
                        se.zone.run(() => {
                            if (chuoi) {
                                se.postdata(chuoi);
                            }
                            else {
                                se.nodata = true;
                                if (se.myloader) {
                                    se.myloader.dismiss();
                                }
                                if (value == 0) {
                                    se.getblog();
                                }
                            }
                        });
                    }
                    else {
                        se.zone.run(() => {
                            se.ishide = true;
                            se.nodata = true;
                        });
                        if (se.myloader) {
                            se.myloader.dismiss();
                        }
                    }
                });
            }
            else {
                se.zone.run(() => {
                    se.ishide = true;
                    se.nodata = true;
                    se.istext = true;
                    se.nodatablog = true;
                    se.istextblog = true;
                    se.arrblog = [];
                });
                if (se.myloader) {
                    se.myloader.dismiss();
                }
            }
        });
        setTimeout(() => {
            if (se.myloader) {
                se.myloader.dismiss();
            }
        }, 1000);
    }
    postdata(chuoi) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlGet + '/hotelslist?hotelIds=' + chuoi + '&version=2',
            timeout: 100000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
            if (error) {
                error.page = "hotellike";
                error.func = "postdata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            var json = JSON.parse(body);
            se.dataList = json.List;
            se.pushdata();
            se.listhotels = "";
            se.listhotelIdInternal = "";
            for (let i = 0; i < se.dataList.length; i++) {
                if (i == se.dataList.length - 1) {
                    if (se.dataList[i].EANCode != "") {
                        se.listhotels = se.listhotels + se.dataList[i].EANCode;
                    }
                    se.listhotelIdInternal = se.listhotelIdInternal + se.dataList[i].HotelId;
                }
                else {
                    if (se.dataList[i].EANCode != "") {
                        se.listhotels = se.listhotels + se.dataList[i].EANCode + ",";
                    }
                    se.listhotelIdInternal = se.listhotelIdInternal + se.dataList[i].HotelId + ",";
                }
            }
            se.getHotelprice();
        });
    }
    pushdata() {
        var se = this;
        this.json1 = [];
        se.zone.run(() => {
            for (let index = 0; index < se.dataList.length; index++) {
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
                        se.dataList[index].Rating = "./assets/star/ic_star_5.png";
                        break;
                    case 45:
                        se.dataList[index].Rating = "./assets/star/ic_star_4.5.png";
                        break;
                    case 40:
                        se.dataList[index].Rating = "./assets/star/ic_star_4.png";
                        break;
                    case 35:
                        se.dataList[index].Rating = "./assets/star/ic_star_3.5.png";
                        break;
                    case 30:
                        se.dataList[index].Rating = "./assets/star/ic_star_3.png";
                        break;
                    case 25:
                        se.dataList[index].Rating = "./assets/star/ic_star_2.5.png";
                        break;
                    case 20:
                        se.dataList[index].Rating = "./assets/star/ic_star_2.png";
                        break;
                    case 15:
                        se.dataList[index].Rating = "./assets/star/ic_star_1.5.png";
                        break;
                    case 10:
                        se.dataList[index].Rating = "./assets/star/ic_star.png";
                        break;
                    case 5:
                        se.dataList[index].Rating = "./assets/star/ic_star_0.5.png";
                        break;
                    default:
                        break;
                }
                var item;
                if (se.dataList[index].DealType) {
                    if (se.dataList[index].Address) {
                        item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: se.dataList[index].Address, Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, Liked: true, StyleTag: se.dataList[index].StyleTag };
                    }
                    else {
                        item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: '', Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, Liked: true, StyleTag: se.dataList[index].StyleTag };
                    }
                }
                else {
                    if (se.dataList[index].Address) {
                        item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: se.dataList[index].Address, Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : se.dataList[index].MaxPrice.toLocaleString().replace("VND", "").trim(), PromotionDescriptionSubstring: "", MinPriceTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : se.dataList[index].MaxPrice.toLocaleString().replace("VND", "").trim(), Liked: true, StyleTag: se.dataList[index].StyleTag };
                    }
                    else {
                        item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: '', Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : se.dataList[index].MaxPrice.toLocaleString().replace("VND", "").trim(), PromotionDescriptionSubstring: "", MinPriceTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : se.dataList[index].MaxPrice.toLocaleString().replace("VND", "").trim(), Liked: true, StyleTag: se.dataList[index].StyleTag };
                    }
                }
                se.json1.push(item);
            }
            se.ishide = true;
        });
    }
    getHotelprice() {
        var se = this;
        if (!se.searchhotel.CheckInDate) {
            se.cin = new Date();
            var rescin = se.cin.setTime(se.cin.getTime() + (7 * 24 * 60 * 60 * 1000));
            var datein = new Date(rescin);
            se.cin = moment__WEBPACK_IMPORTED_MODULE_11__(datein).format('YYYY-MM-DD');
            se.datecin = new Date(rescin);
            se.cout = new Date();
            var res = se.cout.setTime(se.cout.getTime() + (8 * 24 * 60 * 60 * 1000));
            var date = new Date(res);
            se.cout = moment__WEBPACK_IMPORTED_MODULE_11__(date).format('YYYY-MM-DD');
            se.datecout = new Date(res);
        }
        var options;
        var form = {
            RoomNumber: '1',
            IsLeadingPrice: '',
            ReferenceClient: '',
            Supplier: 'IVIVU',
            CheckInDate: se.searchhotel.CheckInDate ? se.searchhotel.CheckInDate : se.cin,
            CheckOutDate: se.searchhotel.CheckOutDate ? se.searchhotel.CheckOutDate : se.cout,
            CountryID: '',
            CityID: '',
            NationalityID: '',
            'RoomsRequest[0][RoomIndex]': '0',
            'RoomsRequest[0][Adults][value]': se.searchhotel.adult ? se.searchhotel.adult : '2',
            'RoomsRequest[0][Child][value]': se.searchhotel.child ? se.searchhotel.child : '0',
            StatusMethod: '2',
            'CityCode': '',
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
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelsSearchPriceAjax',
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
            headers: {},
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
            if (error) {
                error.page = "hotellike";
                error.func = "getHotelprice";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            if (response.statusCode != 200) {
                var objError = {
                    page: "hotellike",
                    func: "getHotelprice",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            se.zone.run(() => {
                se.jsonhtprice = [];
                se.jsonhtprice1 = JSON.parse(body);
                if (se.jsonhtprice1.HotelListResponse) {
                    se.jsonhtprice1 = se.jsonhtprice1.HotelListResponse.HotelList.HotelSummary;
                    for (var i = 0; i < se.jsonhtprice1.length; i++) {
                        let itemprice = se.jsonhtprice1[i];
                        se.jsonhtprice.push(itemprice);
                    }
                    se.zone.run(() => se.fillDataPrice());
                    se.ishide = true;
                }
            });
        });
    }
    fillDataPrice() {
        for (let index = 0; index < this.dataList.length; index++) {
            for (let i = 0; i < this.jsonhtprice.length; i++) {
                this.json1[index].HasCheckPrice = true;
                if (this.json1[index] && this.json1[index].HotelId == this.jsonhtprice[i].HotelId) {
                    this.json1[index].MinPriceOTAStr = this.jsonhtprice[i].MinPriceOTAStr;
                    this.json1[index].MinPriceTAStr = this.jsonhtprice[i].MinPriceTAStr;
                    this.json1[index].RoomNameSubString = this.jsonhtprice[i].RoomNameSubString;
                    this.json1[index].PromotionDescription = this.jsonhtprice[i].PromotionDescription;
                    this.json1[index].PromotionDescriptionSubstring = this.jsonhtprice[i].PromotionDescriptionSubstring;
                }
            }
        }
    }
    gologin() {
        this.navCtrl.navigateForward('login');
    }
    goToLogin() {
        this.storage.remove('auth_token');
        this.storage.remove('email');
        this.storage.remove('username');
        this.storage.remove('jti');
        this.storage.remove('listblogtripdefault');
        this.navCtrl.navigateForward('login');
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.subscription = this.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["NavigationEnd"] && (event.url === '/' || event.url === '/tabs/tab2' || event.url === '/app/tabs/tab2')) {
                    this.onEnter();
                }
            });
        });
    }
    Selectblog() {
        this.json1 = [];
        this.getlisthotellike(1);
        this.getPlace();
        this.activeTabTrip = 2;
    }
    Selecthotel() {
        this.getblog();
        this.getPlace();
        this.activeTabTrip = 1;
    }
    SelectPlace() {
        this.getlisthotellike(1);
        this.getblog();
        this.activeTabTrip = 3;
    }
    getblog() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteBlogByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (error) {
                        if (se.myloader) {
                            se.myloader.dismiss();
                        }
                        error.page = "hotellike";
                        error.func = "getblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    se.zone.run(() => {
                        se.arrblog = JSON.parse(body);
                        if (se.arrblog.length > 0) {
                            se.nodatablog = false;
                            for (let index = 0; index < se.arrblog.length; index++) {
                                se.arrblog[index].date = moment__WEBPACK_IMPORTED_MODULE_11__(se.arrblog[index].date).format('HH:ss DD/MM/YYYY');
                                se.arrblog[index].Like = true;
                            }
                        }
                        else {
                            se.arrblog = [];
                            se.nodatablog = true;
                            if (se.myloader) {
                                se.myloader.dismiss();
                            }
                        }
                    });
                });
            }
            else {
                se.arrblog = [];
                this.nodatablog = true;
                this.istextblog = true;
                if (se.myloader) {
                    se.myloader.dismiss();
                }
            }
        });
        setTimeout(() => {
            if (se.myloader) {
                se.myloader.dismiss();
            }
        }, 1000);
    }
    share(item) {
        this.socialSharing.share(null, null, null, item.url).then(() => {
        }).catch(() => {
        });
    }
    unlikeItemblog(item) {
        if (!this.networkProvider.isOnline()) {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            return;
        }
        var se = this;
        se.jsontemp = se.json1;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.bindItemUnLike(item);
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteBlogByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: { postId: item },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "unlikeitemblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    ;
                });
            }
        });
    }
    itemblogclick(item) {
        this.valueGlobal.urlblog = item.url;
        this.navCtrl.navigateForward('/blog/' + item.id);
        this.gf.googleAnalytion('blog', 'Search', '');
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.json1 = [];
            this.nodata = false;
            this.istext = false;
            this.istextblog = false;
            this.ishide = false;
            this.getlisthotellike(0);
            this.getblog();
        });
    }
    likeItem(id) {
        if (!this.networkProvider.isOnline()) {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            return;
        }
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                for (let i = 0; i < se.json1.length; i++) {
                    if (se.json1[i].HotelId == id) {
                        se.json1[i].Liked = true;
                        break;
                    }
                }
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteHotel',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: { hotelId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "likeitem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    ;
                });
            }
        });
    }
    likeItemblog(item) {
        if (!this.networkProvider.isOnline()) {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            return;
        }
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.bindItemLike(item);
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteBlog',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: { postId: item },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "unlikeitemblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    ;
                });
            }
        });
    }
    bindItemUnLike(id) {
        for (let i = 0; i < this.arrblog.length; i++) {
            if (this.arrblog[i].id == id) {
                this.arrblog[i].Like = false;
                break;
            }
        }
    }
    bindItemLike(id) {
        for (let i = 0; i < this.arrblog.length; i++) {
            if (this.arrblog[i].id == id) {
                this.arrblog[i].Like = true;
                break;
            }
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.myloader = yield this.loadingCtrl.create({});
            this.myloader.present();
        });
    }
    getPlace() {
        var se = this;
        se.getPlaceLikeByUser().then(data => {
            if (data && data.length > 0) {
                let ids = data.join(',');
                let urlApi = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Data/GetPlace?IdPlaces=' + ids + '&paging.pageNumber=0&paging.pageSize=500';
                se.gf.RequestApi('GET', urlApi, {}, {}, 'ExperienceSearch', 'loadDataAfterSearchItem').then((data) => {
                    if (data && data.data.length > 0) {
                        se.nodataplace = false;
                        se.zone.run(() => {
                            se.arrplace = data.data;
                            se.arrplace.forEach(element => {
                                element.liked = true;
                                if (element.workingHours.length > 0) {
                                    element.workingHoursDisplay = '';
                                    element.workingHours.forEach(elementsub => {
                                        if (!element.workingHoursDisplay) {
                                            element.workingHoursDisplay = elementsub.name + ' | ' + elementsub.timeFrom + '-' + elementsub.timeTo;
                                        }
                                        else {
                                            element.workingHoursDisplay += " , " + elementsub.name + ' | ' + elementsub.timeFrom + '-' + elementsub.timeTo;
                                        }
                                    });
                                }
                            });
                        });
                    }
                });
            }
            else {
                se.arrplace = [];
                se.nodataplace = true;
                if (se.myloader) {
                    se.myloader.dismiss();
                }
            }
        });
    }
    getPlaceLikeByUser() {
        var se = this;
        return new Promise((resolve, reject) => {
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        method: 'GET',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Data/GetPlaceUserLike',
                        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                        headers: {
                            'cache-control': 'no-cache',
                            'content-type': 'application/json',
                            authorization: text
                        }
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                        if (error) {
                            if (se.myloader) {
                                se.myloader.dismiss();
                            }
                            error.page = "hotellike";
                            error.func = "getPlaceLikeByUser";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                            throw new Error(error);
                        }
                        se.zone.run(() => {
                            var ids = 0;
                            if (body) {
                                ids = JSON.parse(body);
                            }
                            resolve(ids);
                        });
                    });
                }
                else {
                    se.arrplace = [];
                    this.nodataplace = true;
                    this.istextplace = true;
                    if (se.myloader) {
                        se.myloader.dismiss();
                    }
                    resolve([]);
                }
            });
        });
    }
    itemListSearchClick(item, listsearchdisplay) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
        });
    }
    unlikePlace(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var header = { authorization: text };
                var body = item.id;
                let urlLikePlace = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Data/UnLikePlace';
                se.gf.RequestApi('POST', urlLikePlace, header, body, 'ExperienceSearch', 'unlikePlace').then((data) => {
                    se.zone.run(() => {
                        item.liked = false;
                    });
                });
            }
        });
    }
    likePlace(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var header = { authorization: text };
                var body = item.id;
                let urlLikePlace = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Data/LikePlace';
                se.gf.RequestApi('POST', urlLikePlace, header, body, 'ExperienceSearch', 'likePlace').then((data) => {
                    se.zone.run(() => {
                        item.liked = true;
                    });
                });
            }
        });
    }
};
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["SearchHotel"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["ValueGlobal"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_8__["Network"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_9__["NetworkProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map