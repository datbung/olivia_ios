(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topdeallist-topdeallist-module"],{

/***/ "./src/app/topdeallist/topdeallist.html":
/*!**********************************************!*\
  !*** ./src/app/topdeallist/topdeallist.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n        <ion-row>\r\n          <ion-col size=\"2\" class=\"header-text header-icon\" (click)=\"goback()\">\r\n              <img style=\"height: 48px; padding: 6px; padding-top: 12px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n          </ion-col>\r\n          <ion-col size=\"8\" class=\"header-text\">\r\n              <ion-title class=\"text-title\">\r\n                  Combo du lịch\r\n              </ion-title>\r\n          </ion-col>\r\n          <ion-col size=\"2\" (click)=\"showFilterTopdeal()\" style=\"text-align: right;\">\r\n            <img style=\"height: 48px; padding: 13px; padding-top: 18px; padding-right: 10px;\"  src=\"./assets/imgs/ic_filter_b.svg\" />\r\n            <ion-badge *ngIf=\"enableFilterTopdeal\" class=\"cls-badge-filter\">{{enableFilterTopdeal}}</ion-badge>\r\n          </ion-col>\r\n        </ion-row>\r\n    </ion-header>\r\n    <ion-content>\r\n            <div *ngIf=\"loaddatadone else loadskeleton\">\r\n                <div class=\"innerdeals1 slide2-scroll\" style=\"overflow-x: auto;overflow-y: hidden\" padding *ngIf=\"(slideData1 && slideData1.length >0) else emptydata\">\r\n                    <div class=\"cls-deal\" *ngFor=\"let slide of slideData1\">\r\n                      <img class=\"slide2 img\" [src]=\"slide.imageUrl\" (click)=\"itemclickht(slide)\" >\r\n                      <div class=\"float-promo\">\r\n                        <p *ngIf=\"slide.priceshow\" class=\"float-promo-description\">{{slide.description}} | {{slide.priceshow}} triệu/<span *ngIf=\"slide.priceFor!=0\">khách</span><span *ngIf=\"slide.priceFor==0\">phòng</span></p>\r\n                        <p *ngIf=\"!slide.priceshow\" class=\"float-promo-description\">{{slide.description}}</p>\r\n                      </div>\r\n\r\n                      <h2 class=\"hotel-name\" style=\"margin-top: 4px;margin-bottom: 0;\" (click)=\"itemclickht(slide)\" >\r\n                            {{slide.name}}\r\n                        </h2>\r\n                        <img *ngIf=\"slide.rating!=0\" src={{slide.rating}} (click)=\"itemclickht(slide)\" >\r\n                        <ion-row class=\"cls-row-viewtopsale\" >\r\n                            <ion-col class=\"p-5 d-flex\">\r\n                                <!-- <button ion-button round class=\"btn-topsale\">Đang bán chạy</button> -->\r\n                                <!-- <div class=\"div-topsale\">Đang bán chạy</div> -->\r\n                                <ion-label *ngIf=\"slide.topsale24Total > 2\" class=\"text-topsale\">Đã bán {{ slide.topsale24Total }} phòng trong 24h qua</ion-label>\r\n                                <ion-label *ngIf=\"slide.textRandomSale\" class=\"text-topsale\"> {{ slide.textRandomSale }}</ion-label>\r\n                            </ion-col>\r\n                            <ion-col size=\"2\" class=\"p-5\">\r\n                              <div class=\"div-share\" (click)=\"share(slide.url)\">\r\n                                <img  style=\"width:48px;height:48px;padding: 15px\" src=\"./assets/imgs/ic_share_black.svg\">\r\n                              </div>\r\n                              <div class=\"div-like\" >\r\n                                <img *ngIf=\"!slide.Liked\" class=\"img-heart\" (click)=\"likeItem(slide.id)\" src=\"./assets/imgs/heart-empty-black.svg\" style=\"width:48px;height:48px;padding: 15px\">\r\n                                <img *ngIf=\"slide.Liked\" class=\"img-heart\" (click)=\"unlikeItem(slide.id)\" src=\"./assets/imgs/heart-red.svg\" style=\"width:48px;height:48px;padding: 15px\">\r\n                              </div>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </div>\r\n                  </div>\r\n                  <ng-template #emptydata>\r\n                    <div style=\"text-align: center;margin-top: 10px\">\r\n                      <img src=\"./assets/imgs/empty.svg\">\r\n                      <div class=\"text-empty m-top-8\">Vui lòng chọn lại điều kiện tìm kiếm.</div>\r\n                      <div class=\"div-button-empty d-flex\">\r\n                          <div class=\"div-width-100\">\r\n                            <button ion-button round (click)=\"reFilter()\" class=\"button btn-change-search\" clear>Lọc lại</button>\r\n                          </div>\r\n                          <div class=\"div-width-100 m-left-8\" *ngIf=\"enableFilterTopdeal\">\r\n                            <button ion-button round (click)=\"clearFilter()\" class=\"button btn-clear-search\" clear>Xóa lọc</button>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n              <div padding=\"\" *ngIf=\"!isConnected\" style=\"text-align: center;margin-top: 10px\">\r\n                  <img src=\"./assets/imgs/empty.svg\">\r\n                  <div *ngIf=\"!isConnected\">\r\n                    <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <ng-template #loadskeleton>\r\n              <div style=\"margin-top:30px\">\r\n                <ion-list lines=\"none\" *ngFor=\"let item of blogtripssk\" >\r\n                  <div >\r\n                    <ion-item style=\"--inner-padding-end: 16px\">\r\n                        <ion-skeleton-text animated style=\"width: 100%;margin: 0;border-radius: 5px;\r\n                        width: 100% !important;\r\n                        height: 180px !important;\r\n                        object-fit: cover\" ></ion-skeleton-text>\r\n                    </ion-item>\r\n                      <ion-row>\r\n                        <ion-col style=\"padding:0\">\r\n                            <ion-skeleton-text animated style=\"width: 75%;margin: 16px 16px 0 16px;height: 16px;\"></ion-skeleton-text>\r\n                        </ion-col>\r\n                        </ion-row>\r\n                      \r\n                    <ion-row>\r\n                        <ion-col style=\"padding:0\">\r\n                          <ion-skeleton-text animated style=\"width: 91%;margin: 0;margin: 16px 16px 0 16px;height: 16px\"></ion-skeleton-text>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </div>\r\n                </ion-list>\r\n              </div>\r\n            </ng-template>\r\n      <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"slideData1.length < slideData.length\">\r\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"\">\r\n        </ion-infinite-scroll-content>\r\n      </ion-infinite-scroll>\r\n    </ion-content>"

/***/ }),

/***/ "./src/app/topdeallist/topdeallist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/topdeallist/topdeallist.module.ts ***!
  \***************************************************/
/*! exports provided: TopDealListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopDealListPageModule", function() { return TopDealListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _topdeallist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topdeallist */ "./src/app/topdeallist/topdeallist.ts");







let TopDealListPageModule = class TopDealListPageModule {
};
TopDealListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _topdeallist__WEBPACK_IMPORTED_MODULE_6__["TopDealListPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
                    path: '',
                    component: _topdeallist__WEBPACK_IMPORTED_MODULE_6__["TopDealListPage"]
                }]),
        ],
    })
], TopDealListPageModule);



/***/ }),

/***/ "./src/app/topdeallist/topdeallist.scss":
/*!**********************************************!*\
  !*** ./src/app/topdeallist/topdeallist.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0;\n}\n\n.header-text {\n  text-align: center;\n  align-self: center;\n  text-align: left;\n}\n\n.cls-deal .img {\n  width: 100%;\n  border: 0;\n  height: auto;\n  border-radius: 6px;\n}\n\np {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.p-5 {\n  padding: 5px 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n::ng-deep .img-item {\n  margin-bottom: 10px;\n}\n\n::ng-deep .divcss {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.slide2 {\n  min-width: 272px;\n  height: 206px;\n  box-shadow: 2px 3px 3px 0px #dedede;\n}\n\n.slide2 .img {\n  border-radius: 6px;\n}\n\n.hotel-name {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: -0.13px;\n}\n\n.cls-deal {\n  padding-left: 0px !important;\n  position: relative;\n  margin-bottom: 40px;\n  overflow: unset;\n}\n\n.cls-deal:first-child .grad1 {\n  position: absolute;\n  width: 100%;\n  height: 86px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 0px;\n  opacity: 0.25;\n  border-radius: 6px;\n}\n\n.cls-deal:first-child .float-infoicon {\n  position: absolute;\n  left: 0px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.cls-deal:first-child .float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 48px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 56px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.cls-deal .float-promo {\n  position: absolute;\n  top: 19px;\n  left: -4px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n}\n\n.float-promo-description {\n  margin: 0;\n  width: 100%;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cls-deal .float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n\n.cls-deal .float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 8px;\n}\n\n.div-topsale {\n  height: 20px;\n  border-radius: 4px;\n  background-color: #e52822;\n  padding: 3px 4px 5px 4px;\n  font-size: 10px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.69px;\n  color: #fff;\n  width: 100px;\n  text-align: center;\n  margin-right: 6px;\n}\n\n.text-topsale {\n  color: #e52822;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n  font-weight: 100;\n  margin-top: 3px;\n}\n\n.btn-topsale {\n  color: #ffffff;\n  background-color: #e52822;\n  border-radius: 4px;\n  font-weight: bold;\n  letter-spacing: -0.29px;\n  font-size: 11px;\n  padding: 4px 10px;\n  height: 23px;\n}\n\n.cls-row-review {\n  padding: 12px 0px 10px 0px;\n}\n\n.cls-reviewpoint {\n  padding-left: 40px;\n  top: 2px;\n  font-size: 14px;\n  width: 150px;\n  max-width: 150px;\n  position: absolute;\n}\n\n.div-like {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n  right: -15px;\n  top: -8px;\n}\n\n.div-share {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n  right: 30px;\n  top: -8px;\n}\n\n.cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: #26bed6;\n  padding-top: 2px;\n  font-size: 10px;\n  top: 16px !important;\n  left: 68% !important;\n}\n\n.text-empty {\n  text-align: center;\n  color: #828282;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.34px;\n}\n\n.div-button-empty {\n  margin: 16px;\n}\n\n.m-left-8 {\n  margin-left: 8px;\n}\n\n.btn-change-search {\n  border-radius: 4px !important;\n  border: solid 1px #f59233;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  line-height: 1.5;\n  color: #f59233;\n  width: 100%;\n  background: #fff;\n}\n\n.btn-clear-search {\n  border-radius: 4px !important;\n  border: solid 1px #f59233;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: #fff;\n  background: #f59233;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvdG9wZGVhbGxpc3QvdG9wZGVhbGxpc3Quc2NzcyIsInNyYy9hcHAvdG9wZGVhbGxpc3QvdG9wZGVhbGxpc3Quc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURFSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NOOztBRENJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFTjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURESTtFQUNFLGNBQUE7QUNJTjs7QURGSTtFQUNFLGFBQUE7QUNLTjs7QURISTtFQUNFLFdBQUE7QUNNTjs7QURGUTtFQUVJLG1CQUFBO0FDSVo7O0FERFE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDR1o7O0FEQUk7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0dSOztBREFJO0VBRUUsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUNFTjs7QURBSTtFQUNJLGtCQUFBO0FDR1I7O0FEREk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0lSOztBRERJO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0lSOztBRERNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRFQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDSVI7O0FERE07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ0lSOztBREZNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDS1I7O0FERk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNLUjs7QURGTTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0tSOztBREFNO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR1I7O0FEQU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0dSOztBREFNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0dSOztBREFNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FERU07RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQ007RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRVI7O0FEQUk7RUFDSSwwQkFBQTtBQ0dSOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FER0k7RUFDRSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxTQUFBO0FDS2xGOztBREhJO0VBQ0Usa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixXQUFBO0VBQVksU0FBQTtBQ1dqRjs7QURSRTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0VBQ0Esb0JBQUE7QUNVTjs7QURQRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDVUo7O0FEUEU7RUFDRSxZQUFBO0FDVUo7O0FETkE7RUFDSSxnQkFBQTtBQ1NKOztBRE5BO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURQQTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC90b3BkZWFsbGlzdC90b3BkZWFsbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAudGV4dC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItdGV4dHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWRlYWwgLmltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICAucC01e1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIH1cclxuICAgIC5kLWZsZXh7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXdpZHRoLTEwMHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXB7XHJcbiAgICAgICBcclxuICAgICAgICAuaW1nLWl0ZW1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2Y3Nze1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbWctYmxvZ1xyXG4gICAgeyBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICAuZmxvYXQtaW5mb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDE2cHg7XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICB9XHJcbiAgICAvL3N0eWxlIHRvcGRlYWxcclxuICAgIC5zbGlkZTJcclxuICAgIHtcclxuICAgICAgbWluLXdpZHRoOiAyNzJweDtcclxuICAgICAgaGVpZ2h0OiAyMDZweDtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMHB4ICNkZWRlZGU7XHJcbiAgICB9XHJcbiAgICAuc2xpZGUyIC5pbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG4gICAgLmhvdGVsLW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy1kZWFse1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHVuc2V0O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmdyYWQxIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODZweDsgLy8gRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzIC9cclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpOyAvLyBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgL1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGJvdHRvbTo0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm9pY29ue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcclxuICAgICAgfVxyXG4gICAgICAuY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm9pY29uaGVhcnR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNTlweDtcclxuICAgICAgICBsZWZ0OiA0OHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggOHB4IDhweCA4cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmZsb2F0LWluZm9pY29uaGVhcnR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNTlweDtcclxuICAgICAgICBsZWZ0OiA1NnB4O1xyXG4gICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggOHB4IDhweCA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jbHMtZGVhbCAuZmxvYXQtcHJvbW97XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTlweDtcclxuICAgICAgICBsZWZ0OiAtNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA4cHggMHB4IDEycHg7XHJcbiAgICAgICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcbiAgICAgIC5mbG9hdC1wcm9tby1kZXNjcmlwdGlvbntcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jbHMtZGVhbCAuZmxvYXQtcHJvbW86YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjODUxZjFjO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuY2xzLWRlYWwgLmZsb2F0LWluZm97XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgLmRpdi10b3BzYWxle1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcclxuICAgICAgICBwYWRkaW5nOiAzcHggNHB4IDVweCA0cHg7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgfVxyXG4gICAgICAvL3N0eWxlIHRvcHNhbGUyNGhcclxuICAgICAgLnRleHQtdG9wc2FsZXtcclxuICAgICAgICBjb2xvcjogI2U1MjgyMjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi10b3BzYWxle1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICB9XHJcbiAgICAuY2xzLXJvdy1yZXZpZXd7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAwcHggMTBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2xzLXJvdy12aWV3dG9wc2FsZXtcclxuICAgICAgICAvL2JvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYmRiZGJkO1xyXG4gICAgICAgIC8vYm9yZGVyLXRvcDogc29saWQgMXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgLy9wYWRkaW5nOiAzcHggMDtcclxuICAgIH1cclxuICAgIC5jbHMtcmV2aWV3cG9pbnR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAuZGl2LWxpa2V7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7YWxpZ24tc2VsZjogY2VudGVyO3JpZ2h0OiAtMTVweDt0b3A6IC04cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXNoYXJle1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiA0OHB4O3dpZHRoOiA0OHB4O2FsaWduLXNlbGY6IGNlbnRlcjtyaWdodDogMzBweDt0b3A6IC04cHg7XHJcbiAgICB9XHJcblxyXG4gIC5jbHMtYmFkZ2UtZmlsdGVyIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICAgIHRvcDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiA2OCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0LWVtcHR5e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgfVxyXG5cclxuICAuZGl2LWJ1dHRvbi1lbXB0eXtcclxuICAgIG1hcmdpbjogMTZweDtcclxufVxyXG5cclxuXHJcbi5tLWxlZnQtOHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5idG4tY2hhbmdlLXNlYXJjaHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2Y1OTIzMztcclxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjZjU5MjMzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5idG4tY2xlYXItc2VhcmNoe1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2xzLWRlYWwgLmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnAtNSB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5pbWctaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46Om5nLWRlZXAgLmRpdmNzcyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pbWctYmxvZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMTE7XG59XG5cbi5zbGlkZTIge1xuICBtaW4td2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IDIwNnB4O1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwcHggI2RlZGVkZTtcbn1cblxuLnNsaWRlMiAuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEzcHg7XG59XG5cbi5jbHMtZGVhbCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgb3ZlcmZsb3c6IHVuc2V0O1xufVxuXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmdyYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDBweDtcbiAgb3BhY2l0eTogMC4yNTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDhweCA4cHg7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb25oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1OXB4O1xuICBsZWZ0OiA0OHB4O1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMHB4IDhweCA4cHggOHB4O1xufVxuXG4uZmxvYXQtaW5mb2ljb25oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1OXB4O1xuICBsZWZ0OiA1NnB4O1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMHB4IDhweCA4cHggOHB4O1xufVxuXG4uY2xzLWRlYWwgLmZsb2F0LXByb21vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG4gIGxlZnQ6IC00cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1heC13aWR0aDogOTUlO1xuICBoZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDNweCA4cHggMHB4IDEycHg7XG59XG5cbi5mbG9hdC1wcm9tby1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNscy1kZWFsIC5mbG9hdC1wcm9tbzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAyMnB4O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzg1MWYxYztcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNscy1kZWFsIC5mbG9hdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDhweDtcbn1cblxuLmRpdi10b3BzYWxlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG4gIHBhZGRpbmc6IDNweCA0cHggNXB4IDRweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi50ZXh0LXRvcHNhbGUge1xuICBjb2xvcjogI2U1MjgyMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uYnRuLXRvcHNhbGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLmNscy1yb3ctcmV2aWV3IHtcbiAgcGFkZGluZzogMTJweCAwcHggMTBweCAwcHg7XG59XG5cbi5jbHMtcmV2aWV3cG9pbnQge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHRvcDogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWxpa2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcmlnaHQ6IC0xNXB4O1xuICB0b3A6IC04cHg7XG59XG5cbi5kaXYtc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRvcDogLThweDtcbn1cblxuLmNscy1iYWRnZS1maWx0ZXIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0b3A6IDE2cHggIWltcG9ydGFudDtcbiAgbGVmdDogNjglICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLmRpdi1idXR0b24tZW1wdHkge1xuICBtYXJnaW46IDE2cHg7XG59XG5cbi5tLWxlZnQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5idG4tY2hhbmdlLXNlYXJjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2Y1OTIzMztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5idG4tY2xlYXItc2VhcmNoIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/topdeallist/topdeallist.ts":
/*!********************************************!*\
  !*** ./src/app/topdeallist/topdeallist.ts ***!
  \********************************************/
/*! exports provided: TopDealListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopDealListPage", function() { return TopDealListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _topdealfilter_topdealfilter_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../topdealfilter/topdealfilter.page */ "./src/app/topdealfilter/topdealfilter.page.ts");
/* harmony import */ var _providers_topDealService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/topDealService */ "./src/app/providers/topDealService.ts");














let TopDealListPage = class TopDealListPage {
    constructor(searchhotel, networkProvider, valueGlobal, storage, platform, navCtrl, value, gf, activatedRoute, zone, socialSharing, loadingCtrl, modalCtrl, topDealService) {
        this.searchhotel = searchhotel;
        this.networkProvider = networkProvider;
        this.valueGlobal = valueGlobal;
        this.storage = storage;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.value = value;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.topDealService = topDealService;
        this.istextblog = false;
        this.isConnected = true;
        this.page = 1;
        this.ischeckloadmore = false;
        this.regionnamesuggest = "";
        this.memberid = "";
        this.slideData = [];
        this.totalItem = 0;
        this.showloadmore = true;
        this.pagesize = 10;
        this.ischeck = false;
        this.sl = 0;
        this.slideData1 = [];
        this.listItems = [];
        this.listRamdomSale = ['Ưu đãi bí mật', 'Giá tốt trong ngày'];
        this.listLikeItems = [];
        this.blogtripssk = [1, 2, 3, 4, 5];
        this.loaddatadone = false;
        this.enableFilterTopdeal = 0;
        this.intervalTrip = setInterval(() => {
            this.storage.remove('listtopdealdefault');
        }, 60 * 1000);
        if (this.topDealService.objectFilter && this.topDealService.objectFilter.selectedRegion && this.topDealService.objectFilter.selectedRegion.length > 0) {
            zone.run(() => {
                this.enableFilterTopdeal = 1;
            });
        }
    }
    ngOnInit() {
        var se = this;
        se.topDealService.itemCountFilter.pipe().subscribe((data) => {
            if (data) {
                se.zone.run(() => {
                    se.enableFilterTopdeal = 1;
                    se.loaddatadone = false;
                });
                setTimeout(() => {
                    se.page = 1;
                    se.slideData = [];
                    se.slideData1 = [];
                    se.slideData = se.topDealService.listDataFilter;
                    se.loadHotelDeal();
                    se.loaddatadone = true;
                }, 300);
            }
        });
        se.topDealService.itemClearFilter.pipe().subscribe((data) => {
            if (data) {
                se.zone.run(() => {
                    se.enableFilterTopdeal = 0;
                });
                se.topDealService.objectFilter = null;
                se.page = 1;
                se.slideData = [];
                se.slideData1 = [];
                se.slideData = se.topDealService.listAllData;
                se.loadHotelDeal();
                se.loaddatadone = true;
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loadder = yield this.loadingCtrl.create({
                duration: 300
            });
            loadder.present();
        });
    }
    loadHotelDeal() {
        var se = this;
        if (se.slideData.length > 0) {
            se.totalItem = se.slideData.length;
        }
        se.showloadmore = se.slideData.length == se.totalItem ? false : true;
        var chuoi = "";
        se.zone.run(() => {
            for (let i = 0; i < se.pagesize; i++) {
                if (se.slideData && se.slideData[i] && se.slideData[i].images[0]) {
                    var res = se.slideData[i].images[0].url.substring(0, 4);
                    if (res != "http") {
                        se.slideData[i].images[0].url = 'https:' + se.slideData[i].images[0].url;
                    }
                    var minPrice = se.slideData[i].minPrice.toLocaleString();
                    chuoi = "";
                    var name = se.slideData[i].name.split('|');
                    for (let x = 1; x < name.length; x++) {
                        if (x == name.length - 1) {
                            chuoi = chuoi + name[x];
                        }
                        else {
                            chuoi = chuoi + name[x] + "|";
                        }
                    }
                    switch (se.slideData[i].rating) {
                        case 50:
                            se.slideData[i].rating = "./assets/star/ic_star_5.svg";
                            break;
                        case 45:
                            se.slideData[i].rating = "./assets/star/ic_star_4.5.svg";
                            break;
                        case 40:
                            se.slideData[i].rating = "./assets/star/ic_star_4.svg";
                            break;
                        case 35:
                            se.slideData[i].rating = "./assets/star/ic_star_3.5.svg";
                            break;
                        case 30:
                            se.slideData[i].rating = "./assets/star/ic_star_3.svg";
                            break;
                        case 25:
                            se.slideData[i].rating = "./assets/star/ic_star_2.5.svg";
                            break;
                        case 20:
                            se.slideData[i].rating = "./assets/star/ic_star_2.svg";
                            break;
                        case 15:
                            se.slideData[i].rating = "./assets/star/ic_star_1.5.svg";
                            break;
                        case 10:
                            se.slideData[i].rating = "./assets/star/ic_star.svg";
                            break;
                        case 5:
                            se.slideData[i].rating = "./assets/star/ic_star_0.5.svg";
                            break;
                        default:
                            break;
                    }
                    var item = { ischecked: 0, id: se.slideData[i].id, name: name[0], imageUrl: se.slideData[i].images[0].url, regionId: se.slideData[i].regionId, regionName: se.slideData[i].regionName, minPrice: minPrice, description: chuoi, rating: se.slideData[i].rating, priceshow: se.slideData[i].minPrice / 1000 >= 1000 ? (se.slideData[i].minPrice / 1000).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(',', '.') : 0, topsale24Total: 0, Liked: false, url: se.slideData[i].url, priceFor: se.slideData[i].priceFor };
                    if (!se.gf.checkExistsItemInArray(se.slideData1, item, 'trip')) {
                        se.slideData1.push(item);
                    }
                }
            }
        });
        se.loadTopSale24h(se.slideData1);
        se.sl = se.slideData1.length;
        se.ischeck = true;
    }
    getHoteldeal() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/TopDeals?pageIndex=' + se.page + '&pageSize=200' + (se.memberid ? '&memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getHoteldeal",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getHoteldeal";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
            }
            ;
            let data = JSON.parse(body);
            if (data && data.length > 0) {
                se.slideData = data;
                se.storage.set('listtopdealdefault', se.slideData);
            }
            se.loadHotelDeal();
            if (se.myloader) {
                se.myloader.dismiss();
            }
            se.loaddatadone = true;
            if (se._infiniteScroll) {
                se._infiniteScroll.target.complete();
            }
        });
    }
    loadTopSale24h(listData) {
        var se = this;
        listData.forEach(element => {
            let strurl = _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/TopSale24hByHotel?hotelId=' + element.id;
            var options = {
                method: 'GET',
                url: strurl,
                headers: {
                    apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                    apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U',
                },
                timeout: 180000, maxAttempts: 5, retryDelay: 2000,
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (error) {
                    error.page = "topdeallist";
                    error.func = "loaddata";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                }
                if (response.statusCode == 200) {
                    var res = JSON.parse(body);
                    se.zone.run(() => {
                        element.topsale24Total = res.total;
                        if (res.total < 2) {
                            var randomText = se.listRamdomSale[Math.floor(Math.random() * se.listRamdomSale.length)];
                            element.textRandomSale = randomText;
                        }
                    });
                }
            });
        });
    }
    getHotelDealPaging() {
        var se = this;
        se.showloadmore = se.slideData1.length == se.slideData.length ? false : true;
        let start = se.slideData1.length;
        var chuoi = "";
        var listLoadTopSale = [];
        se.zone.run(() => {
            for (let i = start; i < start + se.pagesize; i++) {
                if (se.slideData[i] && se.slideData[i].images[0]) {
                    var res = se.slideData[i].images[0].url.substring(0, 4);
                    if (res != "http") {
                        se.slideData[i].images[0].url = 'https:' + se.slideData[i].images[0].url;
                    }
                    var minPrice = se.slideData[i].minPrice ? se.slideData[i].minPrice.toLocaleString() : '';
                    chuoi = "";
                    var name = se.slideData[i].name.split('|');
                    for (let x = 1; x < name.length; x++) {
                        if (x == name.length - 1) {
                            chuoi = chuoi + name[x];
                        }
                        else {
                            chuoi = chuoi + name[x] + "|";
                        }
                    }
                    switch (se.slideData[i].rating) {
                        case 50:
                            se.slideData[i].rating = "./assets/star/ic_star_5.svg";
                            break;
                        case 45:
                            se.slideData[i].rating = "./assets/star/ic_star_4.5.svg";
                            break;
                        case 40:
                            se.slideData[i].rating = "./assets/star/ic_star_4.svg";
                            break;
                        case 35:
                            se.slideData[i].rating = "./assets/star/ic_star_3.5.svg";
                            break;
                        case 30:
                            se.slideData[i].rating = "./assets/star/ic_star_3.svg";
                            break;
                        case 25:
                            se.slideData[i].rating = "./assets/star/ic_star_2.5.svg";
                            break;
                        case 20:
                            se.slideData[i].rating = "./assets/star/ic_star_2.svg";
                            break;
                        case 15:
                            se.slideData[i].rating = "./assets/star/ic_star_1.5.svg";
                            break;
                        case 10:
                            se.slideData[i].rating = "./assets/star/ic_star.svg";
                            break;
                        case 5:
                            se.slideData[i].rating = "./assets/star/ic_star_0.5.svg";
                            break;
                        default:
                            break;
                    }
                    var item = { ischecked: 0, id: se.slideData[i].id, name: name[0], imageUrl: se.slideData[i].images[0].url, regionName: se.slideData[i].regionName, minPrice: minPrice, description: chuoi, rating: se.slideData[i].rating, priceshow: se.slideData[i].minPrice / 1000 >= 1000 ? (se.slideData[i].minPrice / 1000).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(',', '.') : 0, topsale24Total: 0, Liked: false, url: se.slideData[i].url, priceFor: se.slideData[i].priceFor };
                    if (!se.gf.checkExistsItemInArray(se.slideData1, item, 'trip')) {
                        se.slideData1.push(item);
                        listLoadTopSale.push(item);
                    }
                }
            }
            se.loadTopSale24h(listLoadTopSale);
            se.sl = se.slideData1.length;
            se.ischeck = true;
            setTimeout(() => {
                if (se.myloader) {
                    se.myloader.dismiss();
                }
            }, 500);
            if (se._infiniteScroll) {
                se._infiniteScroll.target.complete();
            }
        });
    }
    checkExistsItemInArray(arrays, item, type) {
        var res = false;
        if (type == 1 || type == 3 || type == 2) {
            res = arrays.some(r => r.id == item.id);
        }
        if (type == 4) {
            res = arrays.some(r => r.Id == item.Id);
        }
        return res;
    }
    bindItemLike(listLike) {
        var se = this;
        se.listItems.forEach(element => {
            var itemlikemap = listLike.filter((item) => { return item.id == element.id; });
            if (itemlikemap && itemlikemap.length > 0) {
                se.zone.run(() => {
                    element.Like = true;
                });
            }
            else {
                se.zone.run(() => {
                    element.Like = false;
                });
            }
        });
    }
    likeItem(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.reloadDataLike(id);
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteHotel',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'postman-token': '9fd84263-7323-0848-1711-8022616e1815',
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: { hotelId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "topdeallist",
                            func: "likeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "topdeallist";
                        error.func = "likeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (se.valueGlobal.dealid) {
                        se.getHotelLike();
                        se.valueGlobal.dealid = '';
                    }
                });
            }
            else {
                se.valueGlobal.dealid = id;
                se.navCtrl.navigateForward('/login');
            }
        });
        se.gf.googleAnalytion('hoteldetail', 'likeitem', '');
    }
    unlikeItem(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.reloadDataLike(id);
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteHotelByUser',
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
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "topdeallist",
                            func: "unlikeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "topdeallist";
                        error.func = "unlikeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    ;
                });
            }
            else {
                se.navCtrl.navigateForward('/login');
            }
        });
        se.gf.googleAnalytion('hoteldetail', 'unlikeitem', '');
    }
    share(url) {
        this.socialSharing.share(null, null, null, url).then(() => {
        }).catch(() => {
        });
    }
    goback() {
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    doInfinite(infiniteScroll) {
        this.zone.run(() => {
            if (this.ischeck == true) {
                this.page = this.page + 1;
                this._infiniteScroll = infiniteScroll;
                this.getHotelDealPaging();
            }
        });
    }
    ionViewDidEnter() {
        this.searchhotel.backPage = "topdeallist";
        this.searchhotel.backPage = "topdeallist";
        this.storage.get('auth_token').then((data) => {
            if (data) {
                if (this.valueGlobal.dealid) {
                    this.likeItem(this.valueGlobal.dealid);
                }
                else {
                    this.getHotelLike();
                }
            }
        });
        this.storage.get('username').then(username => {
            this.username = username;
        });
        this.storage.get('jti').then((uid) => {
            this.memberid = uid;
        });
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
            this.getHotelLike();
            this.storage.get('listtopdealdefault').then((data) => {
                if (data && data.length > 0) {
                    setTimeout(() => {
                        this.slideData = data;
                        this.getHotelDealPaging();
                        this.loaddatadone = true;
                    }, 300);
                }
                else {
                    this.getHoteldeal();
                }
            });
        }
        else {
            this.isConnected = false;
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        }
    }
    getHotelLike() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = { method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: { 'postman-token': '89692e55-6555-1572-db28-4becc311f0ba',
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "topdeallist",
                            func: "getHotelLike",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "topdeallist";
                        error.func = "getHotelLike";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    ;
                    se.zone.run(() => {
                        var result = JSON.parse(body);
                        if (!result.error) {
                            se.listLikeItems = JSON.parse(body);
                            se.bindHotelLike();
                        }
                    });
                });
            }
        });
    }
    bindHotelLike() {
        var se = this;
        if (se.slideData1 && se.slideData1.length > 0) {
            se.slideData1.forEach(item => {
                if (se.listLikeItems.indexOf(item.id) != -1) {
                    item.Liked = true;
                }
                else {
                    item.Liked = false;
                }
            });
        }
    }
    reloadDataLike(id) {
        var se = this;
        if (se.slideData1 && se.slideData1.length > 0) {
            se.slideData1.forEach(item => {
                if (item.id == id) {
                    item.Liked = !item.Liked;
                }
            });
        }
    }
    itemclickht(msg) {
        if (!this.isConnected) {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            return;
        }
        this.searchhotel.hotelID = msg.id;
        this.searchhotel.rootPage = "topdeallist";
        var item = {};
        item.adult = this.searchhotel.adult;
        item.child = this.searchhotel.child;
        item.arrchild = this.searchhotel.arrchild;
        item.roomnumber = this.searchhotel.roomnumber;
        if (msg.imageUrl) {
            item.Avatar = (msg.imageUrl.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + msg.imageUrl : msg.imageUrl;
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
        item.id = msg.id;
        item.name = msg.name;
        item.isType = 0;
        this.gf.setCacheSearch(item, 0);
        this.searchhotel.hotelID = item.id;
        this.valueGlobal.logingoback = '/hoteldetail/' + item.id;
        this.navCtrl.navigateForward('/hoteldetail/' + item.id);
    }
    showFilterTopdeal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (!se.loaddatadone) {
                se.gf.showToastWarning('Đang tải dữ liệu. Xin vui lòng đợi trong giây lát!');
                return;
            }
            const key = 'regionName';
            let unique;
            if (se.topDealService.listAllData && se.topDealService.listAllData.length > 0) {
                let items = se.topDealService.listAllData.map(item => [item[key], item]);
                if (items && items.length > 0) {
                    unique = [...new Map(items).values()];
                }
            }
            else {
                let items = se.slideData.map(item => [item[key], item]);
                unique = [...new Map(items).values()];
                se.topDealService.listAllData = [...se.slideData];
            }
            se.topDealService.listRegion = unique;
            se.topDealService.listData = [...se.topDealService.listAllData];
            se.topDealService.listSlideData = [...se.slideData];
            const modal = yield this.modalCtrl.create({
                component: _topdealfilter_topdealfilter_page__WEBPACK_IMPORTED_MODULE_12__["TopdealfilterPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data) {
                }
            });
        });
    }
    clearFilter() {
        var se = this;
        se.zone.run(() => {
            se.enableFilterTopdeal = 0;
        });
        se.slideData = [];
        se.slideData1 = [];
        se.slideData = se.topDealService.listAllData;
        se.loadHotelDeal();
        se.loaddatadone = true;
        se.topDealService.objectFilter = null;
    }
    reFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const key = 'regionName';
            let unique;
            se.topDealService.objectFilter = null;
            if (se.topDealService.listAllData && se.topDealService.listAllData.length > 0) {
                let items = se.topDealService.listAllData.map(item => [item[key], item]);
                if (items && items.length > 0) {
                    unique = [...new Map(items).values()];
                }
            }
            else {
                let items = se.slideData.map(item => [item[key], item]);
                unique = [...new Map(items).values()];
                se.topDealService.listAllData = [...se.slideData];
            }
            se.topDealService.listRegion = unique;
            se.topDealService.listData = [...se.topDealService.listAllData];
            const modal = yield this.modalCtrl.create({
                component: _topdealfilter_topdealfilter_page__WEBPACK_IMPORTED_MODULE_12__["TopdealfilterPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data) {
                }
            });
        });
    }
};
TopDealListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topdeallist',
        template: __webpack_require__(/*! ./topdeallist.html */ "./src/app/topdeallist/topdeallist.html"),
        styles: [__webpack_require__(/*! ./topdeallist.scss */ "./src/app/topdeallist/topdeallist.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_book_service__WEBPACK_IMPORTED_MODULE_9__["SearchHotel"], _network_provider_service__WEBPACK_IMPORTED_MODULE_11__["NetworkProvider"], _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_topDealService__WEBPACK_IMPORTED_MODULE_13__["topDealService"]])
], TopDealListPage);



/***/ })

}]);
//# sourceMappingURL=topdeallist-topdeallist-module.js.map