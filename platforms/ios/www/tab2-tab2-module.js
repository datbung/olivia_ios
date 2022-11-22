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

module.exports = ".likepage-header .segment-header {\n  text-transform: none;\n  min-height: 36px;\n  font-size: 17px;\n}\n\n::ng-deep .sc-ion-segment-ios-hion-toolbar:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ::ng-deep ion-toolbar .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked {\n  border: solid 1px #26bed6 !important;\n}\n\n::ng-deep .sc-ion-segment-ios-hion-toolbar:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ::ng-deep ion-toolbar .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button {\n  border: solid 1px #26bed6 !important;\n  color: #828282 !important;\n}\n\n::ng-deep .sc-ion-segment-ios-h {\n  margin: 0 16px;\n}\n\n::ng-deep ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button {\n  max-width: none;\n  font-size: 14px;\n  line-height: 22px;\n}\n\n::ng-deep .segment-button-layout-icon-top ion-activatable ion-activatable-instant {\n  color: #828282 !important;\n}\n\n.header-text {\n  text-align: center;\n  align-self: center;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 17px;\n  text-align: left;\n  letter-spacing: -0.4px;\n}\n\n.text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 4px;\n  letter-spacing: -0.34px;\n}\n\n.text-trip-empty {\n  text-align: center;\n  color: #bdbdbd;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 123px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.col {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n}\n\n.text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page badge.badge-ios {\n  --background: #F79221;\n  font-size: 12px;\n}\n\n.card-background-page label {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 18px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.btn-clear-filter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: left;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again {\n  color: #F79221;\n  background-color: #ffffff;\n  border-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 90%;\n  height: 48px;\n}\n\n.btn-filter-again-nofilter {\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  text-transform: none;\n  float: right;\n  font-size: 17px;\n  width: 100%;\n  margin: 0px 40px;\n  height: 48px;\n}\n\n.text-empty {\n  color: #828282;\n  text-align: center;\n}\n\n.img-heart {\n  position: absolute;\n  top: 7px;\n  left: -4px;\n  width: 50px;\n  height: 50px;\n}\n\n.cls-img-content {\n  margin-left: 13px;\n  margin-top: 3px;\n  width: 16px;\n  height: 16px;\n}\n\n.cls-icon-content {\n  padding-left: 20px;\n  padding-top: 10px;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n.t-bold {\n  font-weight: bold;\n}\n\n.text-login {\n  font-size: 13px;\n}\n\n.label-badge {\n  padding-top: 2px;\n  padding-left: 6px;\n  font-size: 12px;\n}\n\n.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\np, h2 {\n  margin: 0;\n  line-height: 16px;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 123px;\n}\n\n.p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  max-width: 53%;\n}\n\n.p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 18px;\n}\n\n.label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 16px;\n}\n\n.p-top-minprice {\n  top: 10px;\n  font-size: 12px;\n}\n\n.p-top-8 {\n  top: 8px;\n}\n\n.p-top-10 {\n  position: absolute;\n  right: 8px;\n  bottom: 0;\n}\n\n.p-top-18 {\n  padding-top: 18px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-img-hotellist {\n  height: 123px;\n  position: absolute;\n}\n\n.col-description-hotellist {\n  position: relative;\n  margin-top: 13px;\n  left: 112px;\n  width: 70%;\n}\n\n.btn-header {\n  margin-right: 15px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n}\n\nimg {\n  max-width: none !important;\n  border: 0;\n}\n\n.btn-trip-empty {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 90%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n  margin-top: 16px;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .text-right-hotellike {\n    left: 12px;\n    max-width: 188px;\n  }\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  margin-top: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.ios.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated.segment-button-checked {\n  color: white !important;\n  font-size: 17px;\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\n.p-title {\n  font-size: 16px;\n  letter-spacing: -0.13px;\n  padding: 8px 16px;\n}\n\n::ng-deep .infinite-loading-text {\n  display: none;\n}\n\n::ng-deep ion-skeleton-text {\n  width: 100%;\n  margin: 0;\n}\n\n::ng-deep .col-img-hotellist-sk {\n  padding-top: 0;\n  padding-left: 8px;\n  line-height: 18px;\n}\n\n::ng-deep .text-name-sk {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 18px;\n}\n\n::ng-deep .p-sk {\n  height: 16px;\n  padding: 8px 0;\n  margin: 0;\n}\n\n::ng-deep .last-row-sk {\n  padding-top: 52px;\n  height: 17px;\n}\n\n::ng-deep .row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n::ng-deep .h-line-sk {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px !important;\n  opacity: 0.5;\n}\n\n::ng-deep ion-badge {\n  border-radius: 6px;\n}\n\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-description-hotellist {\n    width: 65%;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n    font-size: 14px;\n  }\n\n  .text-login {\n    font-size: 12px;\n  }\n}\n\n@media (min-width: 414px) and (max-width: 420px) {\n  .col-description-hotellist {\n    width: 73%;\n  }\n}\n\n.fix-height-123 {\n  height: 123px;\n}\n\n.last-row {\n  position: absolute;\n  bottom: 0;\n  line-height: 10px;\n  width: 100%;\n}\n\n.cls-lineheight {\n  line-height: 14px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n  margin-bottom: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  line-height: 10px;\n}\n\n.sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  font-size: 10px;\n  color: #26bed6;\n  background: #ffffff;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n\n.div-place .list-search-item {\n  padding: 14px 16px 16px 16px;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n  z-index: 9999;\n  margin-bottom: 0;\n}\n\n.div-place .p-bottom-16 {\n  padding-bottom: 16px;\n}\n\n.div-place .p-top-16 {\n  padding-top: 16px;\n}\n\n.div-place .m-8 {\n  margin: 4px 0;\n}\n\n.div-place .name-search-item {\n  text-align: left;\n  font-size: 18px;\n  color: #003c71;\n  font-weight: bold;\n  line-height: 20px;\n  letter-spacing: -0.34px;\n  overflow: hidden;\n  -webkit-line-clamp: 1;\n  display: -webkit-box;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n  max-height: 21px;\n  max-width: 100%;\n}\n\n.div-place .text-hightLight {\n  font-size: 14px;\n  letter-spacing: -0.34px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 2 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 35px;\n  text-align: left;\n  max-width: 100%;\n}\n\n.div-place .text-item-regular {\n  font-size: 12px;\n  color: #828282;\n  max-width: 100%;\n  -webkit-line-clamp: 1;\n  display: -webkit-box;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n  line-height: 16px;\n  overflow: hidden;\n  max-height: 16px;\n}\n\n.div-place .div-likeandshare {\n  bottom: 0;\n  line-height: 12px;\n  text-align: left;\n}\n\n.div-place .text-hidden {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-width: 230px;\n}\n\n.div-place .div-img-spot {\n  position: absolute;\n  padding: 2px 6px;\n  background: #eee;\n  opacity: 0.75;\n  border-radius: 4px;\n  right: -38px;\n  top: -12px;\n  margin: 10px;\n}\n\n.div-place .img-spot {\n  width: 14px;\n  height: 16px;\n  opacity: 0.75;\n}\n\n.div-place .img-list-item {\n  width: 100%;\n  height: 208px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  z-index: 13;\n  position: relative;\n}\n\n.div-place .div-image-like {\n  position: relative;\n  padding-bottom: 4px;\n}\n\n.div-place .div-image-like .div-like {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  background-color: #222222;\n  opacity: 0.4;\n  width: 56px;\n  height: 24px;\n  border-radius: 2px;\n  z-index: 15;\n  color: white;\n  text-align: center;\n}\n\n.div-place .div-image-like .div-img-heart {\n  position: absolute;\n  top: -4px;\n  left: 26px;\n  z-index: 16;\n  width: 32px;\n}\n\n.div-place .div-image-like .div-img-heart .img-heart {\n  width: 14px;\n}\n\n.div-place .div-image-like .div-text-like {\n  position: absolute;\n  top: 20px;\n  left: 46px;\n  color: white;\n  z-index: 16;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIiwic3JjL2FwcC90YWIyL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBRUUsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNESjs7QURPRTtFQUNJLG9DQUFBO0FDSk47O0FEUUU7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0FDTk47O0FEUUU7RUFDRSxjQUFBO0FDTko7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTko7O0FEUUU7RUFDRSx5QkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ05KOztBRFFFO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDTko7O0FEUUU7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFJQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQWdDLHVDQUFBO0VBQ2hDLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1JKOztBRFdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ1JKOztBRFVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUU7RUFFRSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNSTjs7QURVRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUlBLFlBQUE7QUNQSjs7QURTRTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUU7RUFFRSxnQkFBQTtFQUNB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QUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1JKOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQWdDLDRCQUFBO0VBQ2hDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFVBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURVQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFBZ0MsdUNBQUE7RUFDaEMsZ0JBQUE7QUNQRjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1BGOztBRFNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUEY7O0FEU0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFHQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFdFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ1RKOztBRFdJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVFI7O0FEV0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNUUjs7QURXUTtFQUNJLFdBQUE7QUNUWjs7QURZSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlrZXBhZ2UtaGVhZGVye1xyXG4gIC5zZWdtZW50LWhlYWRlcntcclxuICAgIC8vY29sb3I6IzgyODI4MiA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAvL2JvcmRlcjogc29saWQgMXB4ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLy8vc3R5bGUgaW9zXHJcbjo6bmctZGVlcHtcclxuICAuc2MtaW9uLXNlZ21lbnQtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZCwgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWdtZW50LWlvcy1oOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICB9XHJcbiAgXHJcbiAgLnNjLWlvbi1zZWdtZW50LWlvcy1oaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uLCBpb24tdG9vbGJhciAuc2MtaW9uLXNlZ21lbnQtaW9zLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zYy1pb24tc2VnbWVudC1pb3MtaCB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcbiAgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWdtZW50LWlvcy1oLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIG1heC13aWR0aDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuICAuc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wIGlvbi1hY3RpdmF0YWJsZSBpb24tYWN0aXZhdGFibGUtaW5zdGFudHtcclxuICAgIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5oZWFkZXItdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB9XHJcbiAgLnRleHQtdGl0bGVcclxuICB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweFxyXG4gIH1cclxuICAudGV4dC1uYW1lXHJcbiAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLy8gdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xyXG4gICAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqLyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxN3B4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAvL21heC13aWR0aDogMjE2cHg7XHJcbiAgfVxyXG4gIC50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG1hcmdpbi10b3A6NHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgfVxyXG4gIC50ZXh0LXRyaXAtZW1wdHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI2JkYmRiZDtcclxuICB9XHJcblxyXG4gIC5pbWctcmFkaXVzXHJcbiAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDEyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICAuY29sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xyXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG4gIC50ZXh0LW5hbWVyb29tXHJcbiAge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgIFxyXG4gIH0gXHJcbiAgLnRleHQtY29tYm9cclxuICB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNlNTI4MjI7XHJcbiAgfVxyXG4gIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICB9XHJcbiAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgLmlvbi10aHVtYm5haWx7XHJcbiAgICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGJhZGdlLmJhZGdlLWlvc3tcclxuICAgIC0tYmFja2dyb3VuZDogI0Y3OTIyMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgbGFiZWx7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1ibG9ja3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtaW4taGVpZ2h0OiA0LjRyZW07XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgfVxyXG4gIC8qY3NzIGNobyBpb3MqL1xyXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cclxuICAuaXRlbS1pb3MgLnRyYW5zYm94IHsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcclxufVxyXG4vL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyBsb2NhdGlvblxyXG4uaXRlbS1pb3MgLnRyYW5zYm94MSB7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9sZWZ0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBib3R0b206MTJweDtcclxuICAgIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XHJcbiAgfVxyXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xyXG4gIC5pdGVtLWlvcyAudHJhbnNib3gyIHsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL2xlZnQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGJvdHRvbToxM3B4O1xyXG4gICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcclxuICB9XHJcbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLml0ZW0taW9zIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcclxuICAgIG1hcmdpbjowIDExcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xyXG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubGFiZWwtaW9zIHtcclxuICAgIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xyXG4gIH1cclxuICAvKmNzcyBjaG8gaW9zKi9cclxuXHJcbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xyXG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBjw7MgcmF0aW5nICYgbG9jYXRpb25cclxuICAuaXRlbS1tZCAudHJhbnNib3ggeyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy9sZWZ0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBib3R0b206IDE4cHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xyXG59XHJcbi8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXHJcbi5pdGVtLW1kIC50cmFuc2JveDEgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgYm90dG9tOjEycHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xyXG4gIH1cclxuICAvL1N0eWxlIGNobyBjbGFzcyBwcm9tb3Rpb24gS2jDtG5nIGPDsyByYXRpbmdcclxuICAuaXRlbS1tZCAudHJhbnNib3gyIHsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvL2xlZnQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGJvdHRvbToxM3B4O1xyXG4gICAgcGFkZGluZzogNHB4IDEycHggM3B4IDVweDtcclxuICB9XHJcblxyXG4gIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5pdGVtLW1kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcclxuICAgIG1hcmdpbjowIDExcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xyXG4gIH1cclxuICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcclxuICAgIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxuICB9XHJcbiAgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubGFiZWwtbWQge1xyXG4gICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XHJcbiAgfVxyXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cclxuICBcclxuICAucHJpY2UuY29se1xyXG4gICAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xyXG4gIH1cclxuICBcclxufVxyXG4uYnRuLWNsZWFyLWZpbHRlcntcclxuICBib3JkZXI6bm9uZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG5cclxuLmJ0bi1maWx0ZXItYWdhaW57XHJcbiAgY29sb3I6ICNGNzkyMjE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXItY29sb3I6ICAjRjc5MjIxO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXJ7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4IDQwcHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcbi50ZXh0LWVtcHR5e1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW1nLWhlYXJ0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDdweDtcclxuICBsZWZ0OiAtNHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uY2xzLWltZy1jb250ZW50e1xyXG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuLmNscy1pY29uLWNvbnRlbnR7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5sYWJlbC1wcmljZS1sb2dpbntcclxuICBjb2xvcjogIzI2YmVkNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnQtYm9sZHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGV4dC1sb2dpbntcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmxhYmVsLWJhZGdle1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4gIC50cmFuc2JveF8wIHsgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA0cHg7XHJcbiAgfVxyXG4gIHAsaDJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbiAgLnJvdy1pdGVtLWhvdGVsbGlzdHtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIGhlaWdodDogMTIzcHg7XHJcbiAgfVxyXG5cclxuICAucC10b3AtZGVhbHR5cGV7XHJcbiAgICB0b3A6OXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgbWF4LXdpZHRoOiA1MyU7XHJcbiAgfVxyXG4gIC5wLXRvcC1kZWFsdHlwZS02e1xyXG4gICAgdG9wOjVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogI2U1MjgyMjtcclxuICB9XHJcbiAgLmxhYmVsLW1pbnByaWNle1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcbiAgLmxhYmVsLW1pbnByaWNlVEF7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmxhYmVsLWRlYWxwcmljZXtcclxuICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG4gIC5wLXRvcC1taW5wcmljZXtcclxuICAgIHRvcDoxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIC5wLXRvcC04e1xyXG4gICAgdG9wOjhweDtcclxuICB9XHJcbiAgLnAtdG9wLTEwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICAgIGJvdHRvbTogMDtcclxuICB9XHJcbiAgLnAtdG9wLTE4e1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgfVxyXG4gIC5oLWxpbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAuY29sLWltZy1ob3RlbGxpc3R7XHJcbiAgICAvL2hlaWdodDogMTA5cHg7XHJcbiAgICBoZWlnaHQ6IDEyM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICBsZWZ0OiAxMTJweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG4vLyAgIGlvbi1iYWRnZXtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogIzI2YmVkNjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICB9XHJcbiAgLmJ0bi1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7Y29sb3I6ICM0ZjRmNGY7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi10cmlwLWVtcHR5e1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xyXG4gIC50ZXh0LXJpZ2h0LWhvdGVsbGlrZXtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICAgIG1heC13aWR0aDogMTg4cHg7XHJcbiAgfVxyXG5cclxufVxyXG4uaW1nLWJsb2dcclxueyBcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG4uZmxvYXQtaW5mb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgei1pbmRleDogMTE7XHJcbn1cclxuXHJcbi5pb3Muc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuOmhvc3R7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xyXG59XHJcbi5wLXRpdGxle1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXB7XHJcbiAgLmluZmluaXRlLWxvYWRpbmctdGV4dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8vc2tlbGV0b24tc3R5bGVcclxuICBpb24tc2tlbGV0b24tdGV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAuY29sLWltZy1ob3RlbGxpc3Qtc2t7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG4gIC50ZXh0LW5hbWUtc2tcclxuICB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG4gIC5wLXNre1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5sYXN0LXJvdy1za3tcclxuICAgIHBhZGRpbmctdG9wOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gIH1cclxuICAucm93LWl0ZW0taG90ZWxsaXN0LXNre1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6MTZweDtcclxuICB9XHJcbiAgLmgtbGluZS1za3tcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xyXG4gICAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgaW9uLWJhZGdle1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xyXG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICB9XHJcbiAgLnAtdG9wLTEwe1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gIH1cclxuICAudGV4dC1sb2dpbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcclxuICAgIHdpZHRoOjczJTtcclxuICB9XHJcbn1cclxuXHJcbi5maXgtaGVpZ2h0LTEyM3tcclxuICBoZWlnaHQ6IDEyM3B4O1xyXG59XHJcbi5sYXN0LXJvd3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOjA7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNscy1saW5laGVpZ2h0e1xyXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG59XHJcblxyXG4ubS10b3AtMTB7XHJcbiAgbWFyZ2luLXRvcDo2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbToxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuLnNwLWl0ZW0tc3R5bGV7XHJcbiAgcGFkZGluZzozcHggNXB4O1xyXG4gIGJvcmRlcjpzb2xpZCAwLjVweCAjMjZiZWQ2O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogIzI2YmVkNjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmRpdi1wbGFjZXtcclxuXHJcbiAgLmxpc3Qtc2VhcmNoLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHggMTZweCAxNnB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIC5wLWJvdHRvbS0xNntcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gIH1cclxuICAucC10b3AtMTZ7XHJcbiAgICBwYWRkaW5nLXRvcDoxNnB4O1xyXG4gIH1cclxuICAubS04e1xyXG4gICAgbWFyZ2luOiA0cHggMDtcclxufVxyXG5cclxuICAubmFtZS1zZWFyY2gtaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwM2M3MTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG1heC1oZWlnaHQ6IDIxcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC50ZXh0LWhpZ2h0TGlnaHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMiAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcclxuICAgIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi8gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRleHQtaXRlbS1yZWd1bGFye1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcblxyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXgtaGVpZ2h0OiAxNnB4O1xyXG59XHJcbi5kaXYtbGlrZWFuZHNoYXJle1xyXG4gIGJvdHRvbTogMDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi50ZXh0LWhpZGRlbntcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XHJcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqLyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAyMzBweDtcclxufVxyXG4uZGl2LWltZy1zcG90e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgb3BhY2l0eTogMC43NTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcmlnaHQ6IC0zOHB4O1xyXG4gIHRvcDogLTEycHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5pbWctc3BvdHtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgb3BhY2l0eTogMC43NTtcclxufVxyXG4uaW1nLWxpc3QtaXRlbXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwOHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHotaW5kZXg6IDEzO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4gIC5kaXYtaW1hZ2UtbGlrZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcblxyXG4gICAgLmRpdi1saWtle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDE2cHg7XHJcbiAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDE1O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWltZy1oZWFydHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtNHB4O1xyXG4gICAgICAgIGxlZnQ6IDI2cHg7XHJcbiAgICAgICAgei1pbmRleDogMTY7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcblxyXG4gICAgICAgIC5pbWctaGVhcnR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYtdGV4dC1saWtle1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgbGVmdDogNDZweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgei1pbmRleDogMTY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi5saWtlcGFnZS1oZWFkZXIgLnNlZ21lbnQtaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuOjpuZy1kZWVwIC5zYy1pb24tc2VnbWVudC1pb3MtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkLCA6Om5nLWRlZXAgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWdtZW50LWlvcy1oOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzI2YmVkNiAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zYy1pb24tc2VnbWVudC1pb3MtaGlvbi10b29sYmFyOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbiwgOjpuZy1kZWVwIGlvbi10b29sYmFyIC5zYy1pb24tc2VnbWVudC1pb3MtaDpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24ge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1zZWdtZW50LWlvcy1oIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG46Om5nLWRlZXAgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWdtZW50LWlvcy1oLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuOjpuZy1kZWVwIC5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AgaW9uLWFjdGl2YXRhYmxlIGlvbi1hY3RpdmF0YWJsZS1pbnN0YW50IHtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDEgIWltcG9ydGFudDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLnRleHQtdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5pbWctcmFkaXVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEyM3B4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4udGV4dC1uYW1lcm9vbSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRleHQtY29tYm8ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qY3NzIGNobyBpb3MqL1xuICAvKmNzcyBjaG8gaW9zKi9cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xuICAvKmNzcyBjaG8gYW5kcm9pZCovXG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmlvbi10aHVtYm5haWwge1xuICBsaW5lLWhlaWdodDogMC41ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgYmFkZ2UuYmFkZ2UtaW9zIHtcbiAgLS1iYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgbGFiZWwge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWJsb2NrIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiA0LjRyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMTJweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWlvcyB7XG4gIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxM3B4O1xuICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICBtYXJnaW46IDAgMTFweDtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5wcmljZS5jb2wge1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG59XG5cbi5idG4tY2xlYXItZmlsdGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW4ge1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJ0bi1maWx0ZXItYWdhaW4tbm9maWx0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCA0MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWVtcHR5IHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZy1oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG4gIGxlZnQ6IC00cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jbHMtaW1nLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uY2xzLWljb24tY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5sYWJlbC1wcmljZS1sb2dpbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtbG9naW4ge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5sYWJlbC1iYWRnZSB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50cmFuc2JveF8wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbn1cblxucCwgaDIge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4ucm93LWl0ZW0taG90ZWxsaXN0IHtcbiAgbWFyZ2luOiAxNnB4O1xuICBoZWlnaHQ6IDEyM3B4O1xufVxuXG4ucC10b3AtZGVhbHR5cGUge1xuICB0b3A6IDlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIG1heC13aWR0aDogNTMlO1xufVxuXG4ucC10b3AtZGVhbHR5cGUtNiB7XG4gIHRvcDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmxhYmVsLW1pbnByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLmxhYmVsLW1pbnByaWNlVEEge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogIzgyODI4MjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuXG4ubGFiZWwtZGVhbHByaWNlIHtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnAtdG9wLW1pbnByaWNlIHtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wLXRvcC04IHtcbiAgdG9wOiA4cHg7XG59XG5cbi5wLXRvcC0xMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgYm90dG9tOiAwO1xufVxuXG4ucC10b3AtMTgge1xuICBwYWRkaW5nLXRvcDogMThweDtcbn1cblxuLmgtbGluZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW46IDAgMTZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29sLWltZy1ob3RlbGxpc3Qge1xuICBoZWlnaHQ6IDEyM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBsZWZ0OiAxMTJweDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmJ0bi1oZWFkZXIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG59XG5cbi5idG4tdHJpcC1lbXB0eSB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLnRleHQtcmlnaHQtaG90ZWxsaWtlIHtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIG1heC13aWR0aDogMTg4cHg7XG4gIH1cbn1cbi5pbWctYmxvZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMTE7XG59XG5cbi5pb3Muc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuOmhvc3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG59XG5cbi5wLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG5cbjo6bmctZGVlcCAuaW5maW5pdGUtbG9hZGluZy10ZXh0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCBpb24tc2tlbGV0b24tdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLmNvbC1pbWctaG90ZWxsaXN0LXNrIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAudGV4dC1uYW1lLXNrIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGhlaWdodDogMThweDtcbn1cbjo6bmctZGVlcCAucC1zayB7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAubGFzdC1yb3ctc2sge1xuICBwYWRkaW5nLXRvcDogNTJweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuOjpuZy1kZWVwIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5oLWxpbmUtc2sge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luOiAwIDE2cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC41O1xufVxuOjpuZy1kZWVwIGlvbi1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cblxuICAucC10b3AtMTAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC50ZXh0LWxvZ2luIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgICB3aWR0aDogNzMlO1xuICB9XG59XG4uZml4LWhlaWdodC0xMjMge1xuICBoZWlnaHQ6IDEyM3B4O1xufVxuXG4ubGFzdC1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xzLWxpbmVoZWlnaHQge1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cblxuLm0tdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4uc3AtaXRlbS1zdHlsZSB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmRpdi1wbGFjZSAubGlzdC1zZWFyY2gtaXRlbSB7XG4gIHBhZGRpbmc6IDE0cHggMTZweCAxNnB4IDE2cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB6LWluZGV4OiA5OTk5O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmRpdi1wbGFjZSAucC1ib3R0b20tMTYge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbi5kaXYtcGxhY2UgLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uZGl2LXBsYWNlIC5tLTgge1xuICBtYXJnaW46IDRweCAwO1xufVxuLmRpdi1wbGFjZSAubmFtZS1zZWFyY2gtaXRlbSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgbWF4LWhlaWdodDogMjFweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmRpdi1wbGFjZSAudGV4dC1oaWdodExpZ2h0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLmRpdi1wbGFjZSAudGV4dC1pdGVtLXJlZ3VsYXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDE2cHg7XG59XG4uZGl2LXBsYWNlIC5kaXYtbGlrZWFuZHNoYXJlIHtcbiAgYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtcGxhY2UgLnRleHQtaGlkZGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWwgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyMzBweDtcbn1cbi5kaXYtcGxhY2UgLmRpdi1pbWctc3BvdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICByaWdodDogLTM4cHg7XG4gIHRvcDogLTEycHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5kaXYtcGxhY2UgLmltZy1zcG90IHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTZweDtcbiAgb3BhY2l0eTogMC43NTtcbn1cbi5kaXYtcGxhY2UgLmltZy1saXN0LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMDhweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgei1pbmRleDogMTM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtcGxhY2UgLmRpdi1pbWFnZS1saWtlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuLmRpdi1wbGFjZSAuZGl2LWltYWdlLWxpa2UgLmRpdi1saWtlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIG9wYWNpdHk6IDAuNDtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB6LWluZGV4OiAxNTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LXBsYWNlIC5kaXYtaW1hZ2UtbGlrZSAuZGl2LWltZy1oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICBsZWZ0OiAyNnB4O1xuICB6LWluZGV4OiAxNjtcbiAgd2lkdGg6IDMycHg7XG59XG4uZGl2LXBsYWNlIC5kaXYtaW1hZ2UtbGlrZSAuZGl2LWltZy1oZWFydCAuaW1nLWhlYXJ0IHtcbiAgd2lkdGg6IDE0cHg7XG59XG4uZGl2LXBsYWNlIC5kaXYtaW1hZ2UtbGlrZSAuZGl2LXRleHQtbGlrZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiA0NnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE2O1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"

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
    itemSelected(msg) {
        if (!this.networkProvider.isOnline()) {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            return;
        }
        this.searchhotel.hotelID = msg.HotelId;
        this.searchhotel.rootPage = "likepage";
        var item = {};
        item.adult = this.searchhotel.adult ? this.searchhotel.adult : 2;
        item.child = this.searchhotel.child ? this.searchhotel.child : 0;
        item.arrchild = this.searchhotel.arrchild;
        item.roomnumber = this.searchhotel.roomnumber ? this.searchhotel.roomnumber : 1;
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
        item.checkInDate = moment__WEBPACK_IMPORTED_MODULE_11__(checkInDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_11__(checkInDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(checkInDate).format('YYYY');
        item.checkOutDate = moment__WEBPACK_IMPORTED_MODULE_11__(checkOutDate).format('DD') + ' ' + 'tháng' + ' ' + moment__WEBPACK_IMPORTED_MODULE_11__(checkOutDate).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(checkOutDate).format('YYYY');
        item.id = msg.HotelId;
        item.name = msg.Name;
        item.isType = 0;
        this.gf.setCacheSearch(item, 0);
        this.navCtrl.navigateForward('/hoteldetail/' + msg.HotelId);
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