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

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0;\n}\n\n.header-text {\n  text-align: center;\n  align-self: center;\n  text-align: left;\n}\n\n.cls-deal .img {\n  max-width: 100%;\n  border: 0;\n  height: auto;\n  border-radius: 6px;\n}\n\np {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.p-5 {\n  padding: 5px 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n::ng-deep .img-item {\n  margin-bottom: 10px;\n}\n\n::ng-deep .divcss {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.slide2 {\n  min-width: 272px;\n  height: 206px;\n  box-shadow: 2px 3px 3px 0px #dedede;\n}\n\n.slide2 .img {\n  border-radius: 6px;\n}\n\n.hotel-name {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: -0.13px;\n}\n\n.cls-deal {\n  padding-left: 0px !important;\n  position: relative;\n  margin-bottom: 40px;\n  overflow: unset;\n}\n\n.cls-deal:first-child .grad1 {\n  position: absolute;\n  width: 100%;\n  height: 86px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 0px;\n  opacity: 0.25;\n  border-radius: 6px;\n}\n\n.cls-deal:first-child .float-infoicon {\n  position: absolute;\n  left: 0px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.cls-deal:first-child .float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 48px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 56px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.cls-deal .float-promo {\n  position: absolute;\n  top: 19px;\n  left: -4px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n}\n\n.float-promo-description {\n  margin: 0;\n  width: 100%;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cls-deal .float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n\n.cls-deal .float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 8px;\n}\n\n.div-topsale {\n  height: 20px;\n  border-radius: 4px;\n  background-color: #e52822;\n  padding: 3px 4px 5px 4px;\n  font-size: 10px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.69px;\n  color: #fff;\n  width: 100px;\n  text-align: center;\n  margin-right: 6px;\n}\n\n.text-topsale {\n  color: #e52822;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n  font-weight: 100;\n  margin-top: 3px;\n}\n\n.btn-topsale {\n  color: #ffffff;\n  background-color: #e52822;\n  border-radius: 4px;\n  font-weight: bold;\n  letter-spacing: -0.29px;\n  font-size: 11px;\n  padding: 4px 10px;\n  height: 23px;\n}\n\n.cls-row-review {\n  padding: 12px 0px 10px 0px;\n}\n\n.cls-reviewpoint {\n  padding-left: 40px;\n  top: 2px;\n  font-size: 14px;\n  width: 150px;\n  max-width: 150px;\n  position: absolute;\n}\n\n.div-like {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n  right: -15px;\n  top: -8px;\n}\n\n.div-share {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n  right: 30px;\n  top: -8px;\n}\n\n.cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: #26bed6;\n  padding-top: 2px;\n  font-size: 10px;\n  top: 16px !important;\n  left: 68% !important;\n}\n\n.text-empty {\n  text-align: center;\n  color: #828282;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.34px;\n}\n\n.div-button-empty {\n  margin: 16px;\n}\n\n.m-left-8 {\n  margin-left: 8px;\n}\n\n.btn-change-search {\n  border-radius: 4px !important;\n  border: solid 1px #f59233;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  line-height: 1.5;\n  color: #f59233;\n  width: 100%;\n  background: #fff;\n}\n\n.btn-clear-search {\n  border-radius: 4px !important;\n  border: solid 1px #f59233;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: #fff;\n  background: #f59233;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL3RvcGRlYWxsaXN0L3RvcGRlYWxsaXN0LnNjc3MiLCJzcmMvYXBwL3RvcGRlYWxsaXN0L3RvcGRlYWxsaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDQVI7O0FERUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURDSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRU47O0FEQUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDR1I7O0FEREk7RUFDRSxjQUFBO0FDSU47O0FERkk7RUFDRSxhQUFBO0FDS047O0FESEk7RUFDRSxXQUFBO0FDTU47O0FERlE7RUFFSSxtQkFBQTtBQ0laOztBRERRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0daOztBREFJO0VBRUksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0VSOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNHUjs7QURBSTtFQUVFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FDRU47O0FEQUk7RUFDSSxrQkFBQTtBQ0dSOztBRERJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNJUjs7QURESTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNJUjs7QURETTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0RUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0lSOztBRERNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNJUjs7QURGTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ0tSOztBREZNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDS1I7O0FERk07RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNLUjs7QURBTTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dSOztBREFNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURBTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNHUjs7QURBTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NSOztBREVNO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NSOztBRENNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREFJO0VBQ0ksMEJBQUE7QUNHUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RSOztBREdJO0VBQ0Usa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsU0FBQTtBQ0tsRjs7QURISTtFQUNFLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBbUIsV0FBQTtFQUFZLFNBQUE7QUNXakY7O0FEUkU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxvQkFBQTtFQUNBLG9CQUFBO0FDVU47O0FEUEU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1VKOztBRFBFO0VBQ0UsWUFBQTtBQ1VKOztBRE5BO0VBQ0ksZ0JBQUE7QUNTSjs7QUROQTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvdG9wZGVhbGxpc3QvdG9wZGVhbGxpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnRleHQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXRleHR7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmNscy1kZWFsIC5pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIC5wLTV7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgfVxyXG4gICAgLmQtZmxleHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5kaXYtd2lkdGgtMTAwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcHtcclxuICAgICAgIFxyXG4gICAgICAgIC5pbWctaXRlbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXZjc3N7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltZy1ibG9nXHJcbiAgICB7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5mbG9hdC1pbmZve1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgIH1cclxuICAgIC8vc3R5bGUgdG9wZGVhbFxyXG4gICAgLnNsaWRlMlxyXG4gICAge1xyXG4gICAgICBtaW4td2lkdGg6IDI3MnB4O1xyXG4gICAgICBoZWlnaHQ6IDIwNnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwcHggI2RlZGVkZTtcclxuICAgIH1cclxuICAgIC5zbGlkZTIgLmltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAuaG90ZWwtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xzLWRlYWx7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBvdmVyZmxvdzogdW5zZXQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZDEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NnB4OyAvLyBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7IC8vIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAvXHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgYm90dG9tOjRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDhweCA4cHggOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb25oZWFydHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1OXB4O1xyXG4gICAgICAgIGxlZnQ6IDQ4cHg7XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZmxvYXQtaW5mb2ljb25oZWFydHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1OXB4O1xyXG4gICAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNscy1kZWFsIC5mbG9hdC1wcm9tb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxOXB4O1xyXG4gICAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDhweCAwcHggMTJweDtcclxuICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIH1cclxuICAgICAgLmZsb2F0LXByb21vLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNscy1kZWFsIC5mbG9hdC1wcm9tbzphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM4NTFmMWM7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jbHMtZGVhbCAuZmxvYXQtaW5mb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuZGl2LXRvcHNhbGV7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA0cHggNXB4IDRweDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8vc3R5bGUgdG9wc2FsZTI0aFxyXG4gICAgICAudGV4dC10b3BzYWxle1xyXG4gICAgICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLXRvcHNhbGV7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgIH1cclxuICAgIC5jbHMtcm93LXJldmlld3tcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweCAxMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5jbHMtcm93LXZpZXd0b3BzYWxle1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgLy9ib3JkZXItdG9wOiBzb2xpZCAxcHggI2JkYmRiZDtcclxuICAgICAgICAvL3BhZGRpbmc6IDNweCAwO1xyXG4gICAgfVxyXG4gICAgLmNscy1yZXZpZXdwb2ludHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5kaXYtbGlrZXtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDhweDt3aWR0aDogNDhweDthbGlnbi1zZWxmOiBjZW50ZXI7cmlnaHQ6IC0xNXB4O3RvcDogLThweDtcclxuICAgIH1cclxuICAgIC5kaXYtc2hhcmV7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7YWxpZ24tc2VsZjogY2VudGVyO3JpZ2h0OiAzMHB4O3RvcDogLThweDtcclxuICAgIH1cclxuXHJcbiAgLmNscy1iYWRnZS1maWx0ZXIge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICAgdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDY4JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtZW1wdHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICB9XHJcblxyXG4gIC5kaXYtYnV0dG9uLWVtcHR5e1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG59XHJcblxyXG5cclxuLm0tbGVmdC04e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmJ0bi1jaGFuZ2Utc2VhcmNoe1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICNmNTkyMzM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJ0bi1jbGVhci1zZWFyY2h7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNTkyMzM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jbHMtZGVhbCAuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnAtNSB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5pbWctaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46Om5nLWRlZXAgLmRpdmNzcyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5pbWctYmxvZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMTE7XG59XG5cbi5zbGlkZTIge1xuICBtaW4td2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IDIwNnB4O1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwcHggI2RlZGVkZTtcbn1cblxuLnNsaWRlMiAuaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEzcHg7XG59XG5cbi5jbHMtZGVhbCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgb3ZlcmZsb3c6IHVuc2V0O1xufVxuXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmdyYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDBweDtcbiAgb3BhY2l0eTogMC4yNTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm9pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDhweCA4cHg7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb25oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1OXB4O1xuICBsZWZ0OiA0OHB4O1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMHB4IDhweCA4cHggOHB4O1xufVxuXG4uZmxvYXQtaW5mb2ljb25oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1OXB4O1xuICBsZWZ0OiA1NnB4O1xuICB6LWluZGV4OiAxMTtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMHB4IDhweCA4cHggOHB4O1xufVxuXG4uY2xzLWRlYWwgLmZsb2F0LXByb21vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG4gIGxlZnQ6IC00cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1heC13aWR0aDogOTUlO1xuICBoZWlnaHQ6IDIycHg7XG4gIHBhZGRpbmc6IDNweCA4cHggMHB4IDEycHg7XG59XG5cbi5mbG9hdC1wcm9tby1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmNscy1kZWFsIC5mbG9hdC1wcm9tbzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAyMnB4O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzg1MWYxYztcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNscy1kZWFsIC5mbG9hdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDhweDtcbn1cblxuLmRpdi10b3BzYWxlIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG4gIHBhZGRpbmc6IDNweCA0cHggNXB4IDRweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi50ZXh0LXRvcHNhbGUge1xuICBjb2xvcjogI2U1MjgyMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uYnRuLXRvcHNhbGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLmNscy1yb3ctcmV2aWV3IHtcbiAgcGFkZGluZzogMTJweCAwcHggMTBweCAwcHg7XG59XG5cbi5jbHMtcmV2aWV3cG9pbnQge1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHRvcDogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWxpa2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcmlnaHQ6IC0xNXB4O1xuICB0b3A6IC04cHg7XG59XG5cbi5kaXYtc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcmlnaHQ6IDMwcHg7XG4gIHRvcDogLThweDtcbn1cblxuLmNscy1iYWRnZS1maWx0ZXIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0b3A6IDE2cHggIWltcG9ydGFudDtcbiAgbGVmdDogNjglICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLmRpdi1idXR0b24tZW1wdHkge1xuICBtYXJnaW46IDE2cHg7XG59XG5cbi5tLWxlZnQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5idG4tY2hhbmdlLXNlYXJjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2Y1OTIzMztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5idG4tY2xlYXItc2VhcmNoIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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
                    se.slideData1.push(item);
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
            se.slideData = JSON.parse(body);
            se.storage.set('listtopdealdefault', se.slideData);
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
                    se.slideData1.push(item);
                    listLoadTopSale.push(item);
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