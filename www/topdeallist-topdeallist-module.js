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

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0;\n}\n\n.header-text {\n  text-align: center;\n  align-self: center;\n  text-align: left;\n}\n\n.cls-deal .img {\n  width: 100%;\n  border: 0;\n  height: auto;\n  border-radius: 6px;\n}\n\np {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.p-5 {\n  padding: 5px 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n::ng-deep .img-item {\n  margin-bottom: 10px;\n}\n\n::ng-deep .divcss {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.slide2 {\n  min-width: 272px;\n  height: 206px;\n  box-shadow: 2px 3px 3px 0px #dedede;\n}\n\n.slide2 .img {\n  border-radius: 6px;\n}\n\n.hotel-name {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: -0.13px;\n}\n\n.cls-deal {\n  padding-left: 0px !important;\n  position: relative;\n  margin-bottom: 40px;\n  overflow: unset;\n}\n\n.cls-deal:first-child .grad1 {\n  position: absolute;\n  width: 100%;\n  height: 86px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 0px;\n  opacity: 0.25;\n  border-radius: 6px;\n}\n\n.cls-deal:first-child .float-infoicon {\n  position: absolute;\n  left: 0px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.cls-deal:first-child .float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 48px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 56px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n\n.cls-deal .float-promo {\n  position: absolute;\n  top: 19px;\n  left: -4px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n}\n\n.float-promo-description {\n  margin: 0;\n  width: 100%;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.cls-deal .float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n\n.cls-deal .float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 8px;\n}\n\n.div-topsale {\n  height: 20px;\n  border-radius: 4px;\n  background-color: #e52822;\n  padding: 3px 4px 5px 4px;\n  font-size: 10px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.69px;\n  color: #fff;\n  width: 100px;\n  text-align: center;\n  margin-right: 6px;\n}\n\n.text-topsale {\n  color: #e52822;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n  font-weight: 100;\n  margin-top: 3px;\n}\n\n.btn-topsale {\n  color: #ffffff;\n  background-color: #e52822;\n  border-radius: 4px;\n  font-weight: bold;\n  letter-spacing: -0.29px;\n  font-size: 11px;\n  padding: 4px 10px;\n  height: 23px;\n}\n\n.cls-row-review {\n  padding: 12px 0px 10px 0px;\n}\n\n.cls-reviewpoint {\n  padding-left: 40px;\n  top: 2px;\n  font-size: 14px;\n  width: 150px;\n  max-width: 150px;\n  position: absolute;\n}\n\n.div-like {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n  right: -15px;\n  top: -8px;\n}\n\n.div-share {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n  right: 30px;\n  top: -8px;\n}\n\n.cls-badge-filter {\n  width: 12px;\n  height: 12px;\n  color: #26bed6;\n  padding-top: 2px;\n  font-size: 10px;\n  top: 16px !important;\n  left: 68% !important;\n}\n\n.text-empty {\n  text-align: center;\n  color: #828282;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.34px;\n}\n\n.div-button-empty {\n  margin: 16px;\n}\n\n.m-left-8 {\n  margin-left: 8px;\n}\n\n.btn-change-search {\n  border-radius: 4px !important;\n  border: solid 1px #f59233;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  line-height: 1.5;\n  color: #f59233;\n  width: 100%;\n  background: #fff;\n}\n\n.btn-clear-search {\n  border-radius: 4px !important;\n  border: solid 1px #f59233;\n  font-size: 18px !important;\n  font-weight: 600 !important;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: normal;\n  color: #fff;\n  background: #f59233;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC90b3BkZWFsbGlzdC90b3BkZWFsbGlzdC5zY3NzIiwic3JjL2FwcC90b3BkZWFsbGlzdC90b3BkZWFsbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVJO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ047O0FEQ0k7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0VOOztBREFJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ0dSOztBRERJO0VBQ0UsY0FBQTtBQ0lOOztBREZJO0VBQ0UsYUFBQTtBQ0tOOztBREhJO0VBQ0UsV0FBQTtBQ01OOztBREZRO0VBRUksbUJBQUE7QUNJWjs7QUREUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNHWjs7QURBSTtFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNFUjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDR1I7O0FEQUk7RUFFRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtBQ0VOOztBREFJO0VBQ0ksa0JBQUE7QUNHUjs7QURESTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDSVI7O0FEREk7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSVI7O0FERE07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNJUjs7QURETTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDSVI7O0FERk07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNLUjs7QURGTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ0tSOztBREZNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDS1I7O0FEQU07RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURBTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDR1I7O0FEQU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDR1I7O0FEQU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDUjs7QURFTTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDUjs7QURDTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNFUjs7QURBSTtFQUNJLDBCQUFBO0FDR1I7O0FESUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURHSTtFQUNFLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFNBQUE7QUNLbEY7O0FESEk7RUFDRSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLFdBQUE7RUFBWSxTQUFBO0FDV2pGOztBRFJFO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxvQkFBQTtBQ1VOOztBRFBFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNVSjs7QURQRTtFQUNFLFlBQUE7QUNVSjs7QUROQTtFQUNJLGdCQUFBO0FDU0o7O0FETkE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3RvcGRlYWxsaXN0L3RvcGRlYWxsaXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC50ZXh0LXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci10ZXh0e1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5jbHMtZGVhbCAuaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIC5wLTV7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgfVxyXG4gICAgLmQtZmxleHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5kaXYtd2lkdGgtMTAwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcHtcclxuICAgICAgIFxyXG4gICAgICAgIC5pbWctaXRlbVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXZjc3N7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltZy1ibG9nXHJcbiAgICB7IFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5mbG9hdC1pbmZve1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGVmdDogMTZweDtcclxuICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgIH1cclxuICAgIC8vc3R5bGUgdG9wZGVhbFxyXG4gICAgLnNsaWRlMlxyXG4gICAge1xyXG4gICAgICBtaW4td2lkdGg6IDI3MnB4O1xyXG4gICAgICBoZWlnaHQ6IDIwNnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwcHggI2RlZGVkZTtcclxuICAgIH1cclxuICAgIC5zbGlkZTIgLmltZ3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAuaG90ZWwtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xzLWRlYWx7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBvdmVyZmxvdzogdW5zZXQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZDEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4NnB4OyAvLyBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgL1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7IC8vIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAvXHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgYm90dG9tOjRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDhweCA4cHggOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb25oZWFydHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1OXB4O1xyXG4gICAgICAgIGxlZnQ6IDQ4cHg7XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZmxvYXQtaW5mb2ljb25oZWFydHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1OXB4O1xyXG4gICAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNscy1kZWFsIC5mbG9hdC1wcm9tb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxOXB4O1xyXG4gICAgICAgIGxlZnQ6IC00cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDhweCAwcHggMTJweDtcclxuICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIH1cclxuICAgICAgLmZsb2F0LXByb21vLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmNscy1kZWFsIC5mbG9hdC1wcm9tbzphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDIycHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM4NTFmMWM7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5jbHMtZGVhbCAuZmxvYXQtaW5mb3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuZGl2LXRvcHNhbGV7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCA0cHggNXB4IDRweDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8vc3R5bGUgdG9wc2FsZTI0aFxyXG4gICAgICAudGV4dC10b3BzYWxle1xyXG4gICAgICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgfVxyXG4gICAgICAuYnRuLXRvcHNhbGV7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI5cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgIH1cclxuICAgIC5jbHMtcm93LXJldmlld3tcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweCAxMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5jbHMtcm93LXZpZXd0b3BzYWxle1xyXG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgLy9ib3JkZXItdG9wOiBzb2xpZCAxcHggI2JkYmRiZDtcclxuICAgICAgICAvL3BhZGRpbmc6IDNweCAwO1xyXG4gICAgfVxyXG4gICAgLmNscy1yZXZpZXdwb2ludHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5kaXYtbGlrZXtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDhweDt3aWR0aDogNDhweDthbGlnbi1zZWxmOiBjZW50ZXI7cmlnaHQ6IC0xNXB4O3RvcDogLThweDtcclxuICAgIH1cclxuICAgIC5kaXYtc2hhcmV7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7YWxpZ24tc2VsZjogY2VudGVyO3JpZ2h0OiAzMHB4O3RvcDogLThweDtcclxuICAgIH1cclxuXHJcbiAgLmNscy1iYWRnZS1maWx0ZXIge1xyXG4gICAgICB3aWR0aDogMTJweDtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICAgdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDY4JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtZW1wdHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICB9XHJcblxyXG4gIC5kaXYtYnV0dG9uLWVtcHR5e1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG59XHJcblxyXG5cclxuLm0tbGVmdC04e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmJ0bi1jaGFuZ2Utc2VhcmNoe1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICNmNTkyMzM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmJ0bi1jbGVhci1zZWFyY2h7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNTkyMzM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jbHMtZGVhbCAuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ucC01IHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmltZy1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjo6bmctZGVlcCAuZGl2Y3NzIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmltZy1ibG9nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZmxvYXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxNnB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLnNsaWRlMiB7XG4gIG1pbi13aWR0aDogMjcycHg7XG4gIGhlaWdodDogMjA2cHg7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDBweCAjZGVkZWRlO1xufVxuXG4uc2xpZGUyIC5pbWcge1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcbn1cblxuLmNscy1kZWFsIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBvdmVyZmxvdzogdW5zZXQ7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwLjI1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcbn1cblxuLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5mbG9hdC1pbmZvaWNvbmhlYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDU5cHg7XG4gIGxlZnQ6IDQ4cHg7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDhweCA4cHg7XG59XG5cbi5mbG9hdC1pbmZvaWNvbmhlYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDU5cHg7XG4gIGxlZnQ6IDU2cHg7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDhweCA4cHg7XG59XG5cbi5jbHMtZGVhbCAuZmxvYXQtcHJvbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTlweDtcbiAgbGVmdDogLTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZzogM3B4IDhweCAwcHggMTJweDtcbn1cblxuLmZsb2F0LXByb21vLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2xzLWRlYWwgLmZsb2F0LXByb21vOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDIycHg7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjODUxZjFjO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY2xzLWRlYWwgLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogOHB4O1xufVxuXG4uZGl2LXRvcHNhbGUge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgcGFkZGluZzogM3B4IDRweCA1cHggNHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnRleHQtdG9wc2FsZSB7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5idG4tdG9wc2FsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjlweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuXG4uY2xzLXJvdy1yZXZpZXcge1xuICBwYWRkaW5nOiAxMnB4IDBweCAxMHB4IDBweDtcbn1cblxuLmNscy1yZXZpZXdwb2ludCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kaXYtbGlrZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICByaWdodDogLTE1cHg7XG4gIHRvcDogLThweDtcbn1cblxuLmRpdi1zaGFyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICByaWdodDogMzBweDtcbiAgdG9wOiAtOHB4O1xufVxuXG4uY2xzLWJhZGdlLWZpbHRlciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBwYWRkaW5nLXRvcDogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRvcDogMTZweCAhaW1wb3J0YW50O1xuICBsZWZ0OiA2OCUgIWltcG9ydGFudDtcbn1cblxuLnRleHQtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uZGl2LWJ1dHRvbi1lbXB0eSB7XG4gIG1hcmdpbjogMTZweDtcbn1cblxuLm0tbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJ0bi1jaGFuZ2Utc2VhcmNoIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZjU5MjMzO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmJ0bi1jbGVhci1zZWFyY2gge1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2Y1OTIzMztcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNmNTkyMzM7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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