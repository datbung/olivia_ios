(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bloglist-bloglist-module"],{

/***/ "./src/app/bloglist/bloglist.html":
/*!****************************************!*\
  !*** ./src/app/bloglist/bloglist.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;margin-bottom: 10px;\">\n          <div style=\"align-self: center\" >\n            <div class=\"div-img-header\"(click)=\"goback()\">\n              <img class=\"img-header\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n            <div *ngIf=\"!searchblog\" style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">{{regionnamesuggest}}</label></div>\n            <div *ngIf=\"searchblog\">\n              <form action=\".\">\n                <ion-searchbar #inputSearchBlog style=\"text-align: left;\n                background: #fff;\n                -webkit-padding-start: 0;\n                padding-inline-start: 0;\n                --background: var(--ion-overlay-background-color,#fff);\n                padding-top: 12px;\n                font-size: 16px;width: 100%;\n                padding-right: 0;\n                margin-left:48px;height: 48px;max-width: 270px;\"\n                autocomplete=\"on\" autocorrect=\"true\"\n                debounce=\"500\"\n                class=\"input-search-blog\" placeholder=\"Tìm bài viết\" searchIcon=\"false\" ([ngModel])=\"textsearch\" (ionClear)=\"cancelInput()\" (ionChange)=\"clickSearch($event)\" \n                ></ion-searchbar>\n              </form>\n            </div>\n            <div *ngIf=\"!searchblog\" class=\"div-img-header div-right\" (click)=\"clickSearchBlog()\">\n              <img class=\"img-header w-36\" src=\"./assets/imgs/ic_search.svg\" >\n            </div>\n            <div *ngIf=\"searchblog\" class=\"div-img-header img-close div-right\" (click)=\"clickCancel()\">\n                <img class=\"img-header\" src=\"./assets/ic_close.svg\" >\n            </div>\n          </div>\n      </ion-col>\n      </ion-row>\n</ion-header>\n\n<ion-content class=\"div-content-container\">\n  <!-- Vùng search result -->\n  <div class=\"result-search-blog\" *ngIf=\"filterblog && items && items.length >0\">\n      <div *ngFor=\"let item of items; let i = index\">\n          <ion-row class='cls-row-width' (click)=\"itemSearchBlogClick(item,i)\" *ngIf=\"item.show\">\n            <ion-col size=\"0.8\" class=\"no-padding\">\n                <img class=\"img-search-blog\" src=\"./assets/imgs/frame.svg\" *ngIf=\"item.type == 2\">\n                <img class=\"img-search-blog\" src=\"./assets/imgs/newspaper.svg\" *ngIf=\"item.type == 1\">\n            </ion-col>\n            <ion-col text-left class=\"no-padding p-left-6\">\n              <ion-label *ngIf=\"item.title\" class=\"label-item-blog\">\n               {{item.title}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n  </div>\n  <!-- Vùng item bloglist -->\n  <div *ngIf=\"!filterblog || (items && items.length == 0)\">\n    <div style=\"padding: 16px 0\" *ngIf=\"loaddatadone\">\n      <ion-list lines=\"none\" *ngFor=\"let item of blogtrips\" >\n        <div >\n          <ion-item style=\"--inner-padding-end: 16px\">\n            <img (click)=\"itemblogclick(item)\" class=\"img-blog\"\n              src={{item.avatar}}>\n          </ion-item>\n            <p class=\"text-item-title\" style=\"padding: 8px 16px 0px 16px;margin: 0;\" (click)=\"itemblogclick(item)\">\n              {{item.title}}\n            </p>\n        \n          <ion-row class=\"row-bloglist\">\n              <ion-col size=\"9\" class=\"no-padding\">\n                <label (click)=\"itemblogclick(item)\" style=\"margin:0\"\n                  style=\"color: #828282;font-size: 12px\">{{item.date}}</label>\n              </ion-col>\n              <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;right: 46px\"\n                (click)=\"share(item.url)\">\n                <img style=\"width:48px;height:48px;padding: 15px\" src=\"./assets/imgs/ic_share_black.svg\">\n              </div>\n              <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;right: 0\">\n                <img *ngIf=\"!item.Like\" class=\"img-heart\" (click)=\"likeItemblog(item.id)\"\n                  src=\"./assets/imgs/heart-empty-black.svg\" style=\"width:48px;height:48px;padding: 16px\">\n                <img *ngIf=\"item.Like\" class=\"img-heart\" (click)=\"unlikeItemblog(item.id)\" src=\"./assets/imgs/heart-red.svg\"\n                  style=\"width:48px;height:48px;padding: 16px\">\n              </div>\n            </ion-row>\n        </div>\n      </ion-list>\n      <div padding=\"\" *ngIf=\"!isConnected\" style=\"text-align: center;margin-top: 10px\">\n          <img src=\"./assets/imgs/empty.svg\">\n          <div *ngIf=\"!isConnected\">\n            <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\n          </div>\n        </div>\n    </div>\n    <div *ngIf=\"!loaddatadone\" style=\"margin-top:32px\">\n        <ion-list lines=\"none\" *ngFor=\"let item of blogtripssk\" >\n          <div >\n            <ion-item style=\"--inner-padding-end: 16px\">\n              <!-- <img (click)=\"itemblogclick(item)\" class=\"img-blog\"\n                src={{item.avatar}}> -->\n                <ion-skeleton-text animated style=\"width: 100%;margin: 0;border-radius: 5px;\n                width: 100% !important;\n                height: 180px !important;\n                object-fit: cover\" ></ion-skeleton-text>\n            </ion-item>\n              <!-- <p style=\"padding: 8px 16px 0px 16px;margin: 0;\" (click)=\"itemblogclick(item)\">\n                {{item.title}}\n              </p> -->\n              <ion-row>\n                <ion-col style=\"padding:0\">\n                    <ion-skeleton-text animated style=\"width: 75%;margin: 16px 16px 0 16px;height: 16px;\"></ion-skeleton-text>\n                </ion-col>\n                </ion-row>\n              \n            <ion-row>\n                <ion-col style=\"padding:0\">\n                  <ion-skeleton-text animated style=\"width: 91%;margin: 0;margin: 16px 16px 0 16px;height: 16px\"></ion-skeleton-text>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-list>\n      </div>\n    <div class=\"div-cover\"></div>\n    \n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/bloglist/bloglist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bloglist/bloglist.module.ts ***!
  \*********************************************/
/*! exports provided: BlogListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListPageModule", function() { return BlogListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bloglist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bloglist */ "./src/app/bloglist/bloglist.ts");







let BlogListPageModule = class BlogListPageModule {
};
BlogListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _bloglist__WEBPACK_IMPORTED_MODULE_6__["BlogListPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
                    path: '',
                    component: _bloglist__WEBPACK_IMPORTED_MODULE_6__["BlogListPage"]
                }]),
        ],
    })
], BlogListPageModule);



/***/ }),

/***/ "./src/app/bloglist/bloglist.scss":
/*!****************************************!*\
  !*** ./src/app/bloglist/bloglist.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 10px;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.cls-row-width {\n  width: 100%;\n}\n\n.label-item-search {\n  padding: 8px 0px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\n.img-like {\n  margin-left: -5px;\n  margin: 12px;\n  position: absolute;\n  top: -8px;\n  left: -14px;\n  z-index: 999;\n}\n\n.img-share {\n  z-index: 999;\n  width: 18px;\n  position: absolute;\n  margin: 12px;\n  top: -8px;\n}\n\n.row-bloglist {\n  margin-left: 10px;\n  margin-left: 16px;\n  line-height: 15px;\n  padding-top: 5px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.text-item-title {\n  padding: 8px 16px 0px 16px;\n  margin: 0;\n  font-size: 16px;\n  color: #333333;\n  letter-spacing: -0.13px;\n}\n\n.div-img-header {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n}\n\n.div-img-header .img-header {\n  height: 48px;\n  padding: 8px;\n  margin-top: 0px;\n  margin-left: -8px;\n}\n\n.div-img-header .w-36 {\n  width: 36px;\n}\n\n.div-right {\n  right: 0;\n  top: 4px;\n}\n\n.result-search-blog {\n  padding: 20px 16px 0 16px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.cls-row-width {\n  padding: 0 0 20px 0;\n}\n\n.cls-row-width-first {\n  padding: 16px 0 20px 0;\n}\n\n.label-item-blog {\n  font-size: 16px;\n  color: #333333;\n}\n\n.img-search-blog {\n  width: 16px;\n  padding-top: 4px;\n}\n\n.p-left-6 {\n  padding-left: 6px;\n}\n\n.glass-bloglist {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n  bottom: 0px;\n  left: 0px;\n}\n\n.img-close {\n  right: -6px;\n}\n\np {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n::ng-deep img {\n  max-width: 100%;\n  border: 0;\n  height: auto;\n}\n\n::ng-deep .img-item {\n  margin-bottom: 10px;\n}\n\n::ng-deep .divcss {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n::ng-deep .input-search-blog .sc-ion-searchbar-ios-h {\n  text-align: left;\n  background: #fff;\n  -webkit-padding-start: 0;\n  padding-inline-start: 0;\n  --background: var(--ion-overlay-background-color,#fff);\n  padding-top: 0;\n  font-size: 16px;\n  margin-left: 36px;\n}\n\n::ng-deep .input-search-blog .searchbar-input.sc-ion-searchbar-ios {\n  -webkit-padding-start: 0 !important;\n  padding-inline-start: 0 !important;\n  -webkit-padding-end: 0;\n  padding-inline-end: 0;\n  background: #fff;\n}\n\n::ng-deep .searchbar-clear-button.sc-ion-searchbar-ios {\n  display: none !important;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n::ng-deep .done1-combo-css .alert-button-group.sc-ion-alert-md {\n  flex-wrap: nowrap;\n}\n\n::ng-deep .done1-combo-css .alert-button-inner.sc-ion-alert-md {\n  justify-content: center;\n}\n\n::ng-deep .done1-combo-css .alert-button.sc-ion-alert-md {\n  padding-right: 0;\n  width: 100%;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Jsb2dsaXN0L2Jsb2dsaXN0LnNjc3MiLCJzcmMvYXBwL2Jsb2dsaXN0L2Jsb2dsaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURHSTtFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBUjs7QURHSTtFQUNJLFdBQUE7QUNBUjs7QURFSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NSOztBRENJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDRVI7O0FEQ0k7RUFDSSxpQkFBQTtFQUFzQixpQkFBQTtFQUN0QixpQkFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxVQUFBO0FDSVI7O0FERkk7RUFDSSwwQkFBQTtFQUEyQixTQUFBO0VBQzNCLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNNUjs7QURKSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ09SOztBRExRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNPWjs7QURMUTtFQUNJLFdBQUE7QUNPWjs7QURKSTtFQUNJLFFBQUE7RUFDQSxRQUFBO0FDT1I7O0FESkk7RUFDSSx5QkFBQTtBQ09SOztBRExJO0VBQ0ksVUFBQTtBQ1FSOztBRE5JO0VBQ0ksbUJBQUE7QUNTUjs7QURQSTtFQUNJLHNCQUFBO0FDVVI7O0FEUkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1dSOztBRFRJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDWVI7O0FEVkk7RUFDSSxpQkFBQTtBQ2FSOztBRFhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDY1I7O0FEWkk7RUFDSSxXQUFBO0FDZVI7O0FEYkk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDZ0JSOztBRGJRO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDZ0JaOztBRGJRO0VBRUksbUJBQUE7QUNjWjs7QURYUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNhWjs7QURKUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0RBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTVo7O0FESFE7RUFDSSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDS1o7O0FERlE7RUFDSSx3QkFBQTtBQ0laOztBRERRO0VBQ0ksOEJBQUE7QUNHWjs7QUREWTtFQUNJLDhGQUFBO0VBQ0EsNkJBQUE7RUFFQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7S0FBQSxpQ0FBQTtNQUFBLGdDQUFBO1VBQUEsNEJBQUE7QUNFaEI7O0FEQ1k7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0NaOztBRENZO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FDQ1o7O0FEQ1k7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDQ1o7O0FEQ1k7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNDWjs7QURDWTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQ0NaOztBRENZO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUNDaEI7O0FERVk7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDQWhCOztBREdZO0VBQ0EsaUJBQUE7QUNEWjs7QURHWTtFQUNBLHVCQUFBO0FDRFo7O0FER1k7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvYmxvZ2xpc3QvYmxvZ2xpc3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgfVxuXG4gICAgLmltZy1ibG9nXG4gICAgeyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XG4gICAgfVxuICAgIC5mbG9hdC1pbmZve1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgei1pbmRleDogMTE7XG4gICAgfVxuXG4gICAgLmNscy1yb3ctd2lkdGh7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubGFiZWwtaXRlbS1zZWFyY2h7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLmltZy1saWtle1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLThweDtcbiAgICAgICAgbGVmdDogLTE0cHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICB9XG4gICAgLmltZy1zaGFyZXtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW46IDEycHg7XG4gICAgICAgIHRvcDogLThweDtcbiAgICB9XG5cbiAgICAucm93LWJsb2dsaXN0e1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDsgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgICAubm8tcGFkZGluZ3tcbiAgICAgICAgcGFkZGluZzowO1xuICAgIH1cbiAgICAudGV4dC1pdGVtLXRpdGxle1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweCAwcHggMTZweDttYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjEzcHg7XG4gICAgfVxuICAgIC5kaXYtaW1nLWhlYWRlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgICAgICAgLmltZy1oZWFkZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LThweFxuICAgICAgICB9XG4gICAgICAgIC53LTM2e1xuICAgICAgICAgICAgd2lkdGg6MzZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGl2LXJpZ2h0e1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOjRweDtcbiAgICB9XG5cbiAgICAucmVzdWx0LXNlYXJjaC1ibG9ne1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDE2cHggMCAxNnB4O1xuICAgIH1cbiAgICAubm8tcGFkZGluZ3tcbiAgICAgICAgcGFkZGluZzowO1xuICAgIH1cbiAgICAuY2xzLXJvdy13aWR0aHtcbiAgICAgICAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgICB9XG4gICAgLmNscy1yb3ctd2lkdGgtZmlyc3R7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMCAyMHB4IDA7XG4gICAgfVxuICAgIC5sYWJlbC1pdGVtLWJsb2d7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuICAgIC5pbWctc2VhcmNoLWJsb2d7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIH1cbiAgICAucC1sZWZ0LTZ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgIH1cbiAgICAuZ2xhc3MtYmxvZ2xpc3Qge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgfVxuICAgIC5pbWctY2xvc2V7XG4gICAgICAgIHJpZ2h0OiAtNnB4O1xuICAgIH1cbiAgICBwe1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbiAgICA6Om5nLWRlZXB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gXG4gICAgICAgIC5pbWctaXRlbVxuICAgICAgICB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgIH1cbiAgICAgICAgLmRpdmNzc3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICB9XG4gICAgICAgIC8vIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIHtcbiAgICAgICAgLy8gICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgICAgICAgLy8gICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAvLyAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAvLyAgICAgbWFyZ2luLWxlZnQ6MzZweDtcbiAgICAgICAgLy8gICAgIC8vY29sb3I6IzgyODI4MjtcbiAgICAgICAgLy8gfVxuICAgICAgICAuaW5wdXQtc2VhcmNoLWJsb2cgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWh7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDozNnB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuaW5wdXQtc2VhcmNoLWJsb2cgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gICAgICAgICAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZCB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgIH0iLCIudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbWctYmxvZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMTE7XG59XG5cbi5jbHMtcm93LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbC1pdGVtLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltZy1saWtlIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbjogMTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC04cHg7XG4gIGxlZnQ6IC0xNHB4O1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5pbWctc2hhcmUge1xuICB6LWluZGV4OiA5OTk7XG4gIHdpZHRoOiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMTJweDtcbiAgdG9wOiAtOHB4O1xufVxuXG4ucm93LWJsb2dsaXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGV4dC1pdGVtLXRpdGxlIHtcbiAgcGFkZGluZzogOHB4IDE2cHggMHB4IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEzcHg7XG59XG5cbi5kaXYtaW1nLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmRpdi1pbWctaGVhZGVyIC5pbWctaGVhZGVyIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG4uZGl2LWltZy1oZWFkZXIgLnctMzYge1xuICB3aWR0aDogMzZweDtcbn1cblxuLmRpdi1yaWdodCB7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDRweDtcbn1cblxuLnJlc3VsdC1zZWFyY2gtYmxvZyB7XG4gIHBhZGRpbmc6IDIwcHggMTZweCAwIDE2cHg7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNscy1yb3ctd2lkdGgge1xuICBwYWRkaW5nOiAwIDAgMjBweCAwO1xufVxuXG4uY2xzLXJvdy13aWR0aC1maXJzdCB7XG4gIHBhZGRpbmc6IDE2cHggMCAyMHB4IDA7XG59XG5cbi5sYWJlbC1pdGVtLWJsb2cge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uaW1nLXNlYXJjaC1ibG9nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5wLWxlZnQtNiB7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuXG4uZ2xhc3MtYmxvZ2xpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbi5pbWctY2xvc2Uge1xuICByaWdodDogLTZweDtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbjo6bmctZGVlcCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuOjpuZy1kZWVwIC5pbWctaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46Om5nLWRlZXAgLmRpdmNzcyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG46Om5nLWRlZXAgLmlucHV0LXNlYXJjaC1ibG9nIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cbjo6bmctZGVlcCAuaW5wdXQtc2VhcmNoLWJsb2cgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG46Om5nLWRlZXAgLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuOjpuZy1kZWVwIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWQge1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbjo6bmctZGVlcCAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bloglist/bloglist.ts":
/*!**************************************!*\
  !*** ./src/app/bloglist/bloglist.ts ***!
  \**************************************/
/*! exports provided: BlogListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListPage", function() { return BlogListPage; });
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
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_13__);














let BlogListPage = class BlogListPage {
    constructor(searchhotel, networkProvider, loadingCtrl, valueGlobal, storage, platform, navCtrl, value, gf, activatedRoute, zone, socialSharing, keyboard) {
        this.searchhotel = searchhotel;
        this.networkProvider = networkProvider;
        this.loadingCtrl = loadingCtrl;
        this.valueGlobal = valueGlobal;
        this.storage = storage;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.value = value;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.socialSharing = socialSharing;
        this.keyboard = keyboard;
        this.blogtrips = [];
        this.arrbloglike = [];
        this.istextblog = false;
        this.isConnected = true;
        this.page = 1;
        this.ischeckloadmore = false;
        this.filterblog = false;
        this.items = [];
        this.loadblogslug = false;
        this.ischecksearchbar = false;
        this.regionnamesuggest = "";
        this.loaddatadone = false;
        this.blogtripssk = [1, 2, 3, 4, 5];
        this.searchblog = false;
        this.searchhotel.backPage = "bloglist";
        storage.get('username').then(username => {
            this.username = username;
        });
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
            this.getbloglike(0);
        }
        else {
            this.isConnected = false;
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        }
    }
    ;
    keyEvent(e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
            if (e.srcElement.tagName === "INPUT") {
                e.preventDefault();
                let listitem = this.items.filter((item) => { return item.show; });
                if (listitem && listitem.length > 0) {
                    this.gf.setParams(this.items.filter((item) => { return item.show; }), 'listsearchblog');
                    this.gf.setParams(this.input.value, 'searchblogtext');
                    this.gf.setParams(null, 'itemslug');
                    this.keyboard.hide();
                    setTimeout(() => {
                        this.navCtrl.navigateForward('/searchblog');
                    }, 300);
                }
            }
        }
    }
    ;
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                if (this.valueGlobal.blogid) {
                    this.likeItemblog(this.valueGlobal.blogid);
                }
                else {
                    setTimeout(() => {
                        this.getbloglike(1);
                    }, 300);
                }
            }
        });
    }
    presentLoadingData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.myloader = yield this.loadingCtrl.create({
                duration: 300
            });
            this.myloader.present();
        });
    }
    getblogtrips() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GeBlogByTripLatestOfUser' + '?pageIndex=' + this.page + '&pageSize=10',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "getblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    se.zone.run(() => {
                        if (body && body.length > 0) {
                            var data = JSON.parse(body);
                            var listBlogtemp = data.items;
                            if (listBlogtemp && listBlogtemp.length > 0) {
                                se.regionname = data.regionName;
                                se.regionnamesuggest = "Vi Vu " + data.regionName;
                                if (se.arrbloglike.length > 0) {
                                    var itemblog;
                                    for (let i = 0; i < listBlogtemp.length; i++) {
                                        listBlogtemp[i].date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].date).format('HH:ss DD/MM/YYYY');
                                        itemblog = { avatar: listBlogtemp[i].avatar, date: listBlogtemp[i].date, id: listBlogtemp[i].id, title: listBlogtemp[i].title, url: listBlogtemp[i].url, Like: false };
                                        for (let j = 0; j < se.arrbloglike.length; j++) {
                                            if (se.arrbloglike[j].id == listBlogtemp[i].id) {
                                                itemblog = { avatar: listBlogtemp[i].avatar, date: listBlogtemp[i].date, id: listBlogtemp[i].id, title: listBlogtemp[i].title, url: listBlogtemp[i].url, Like: true };
                                                break;
                                            }
                                        }
                                        if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
                                            se.blogtrips.push(itemblog);
                                        }
                                    }
                                }
                                else {
                                    for (let i = 0; i < listBlogtemp.length; i++) {
                                        listBlogtemp[i].date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].date).format('HH:ss DD/MM/YYYY');
                                        itemblog = { avatar: listBlogtemp[i].avatar, date: listBlogtemp[i].date, id: listBlogtemp[i].id, title: listBlogtemp[i].title, url: listBlogtemp[i].url, Like: false };
                                        if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
                                            se.blogtrips.push(itemblog);
                                        }
                                    }
                                }
                                se.zone.run(() => {
                                    se.loaddatadone = true;
                                });
                                if (se._infiniteScroll) {
                                    se._infiniteScroll.target.complete();
                                }
                            }
                        }
                    });
                });
            }
            else {
            }
        });
    }
    getbloglike(value) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteBlogByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "bloglist";
                        error.func = "getbloglike";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    se.zone.run(() => {
                        se.arrbloglike = JSON.parse(body);
                        if (JSON.parse(body).msg) {
                            se.arrbloglike = [];
                        }
                        if (value == 0) {
                            let loadtype = se.gf.getParams('seemoreblog');
                            if (loadtype == 1) {
                                se.getblogtrips();
                            }
                            else {
                                se.getNewsBlog();
                            }
                        }
                        else {
                            se.bindItemLike(se.arrbloglike);
                        }
                    });
                });
            }
            else {
                this.getNewsBlog();
            }
        });
    }
    getNewsBlog() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlBlog + '/GetNewsBlog' + '?pageIndex=' + this.page + '&pageSize=10',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getNewsBlog",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getNewsBlog";
                error.param = JSON.stringify(options),
                    _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
            }
            se.zone.run(() => {
                var listBlogtemp = JSON.parse(body);
                se.regionnamesuggest = "Cẩm nang du lịch";
                for (let i = 0; i < listBlogtemp.length; i++) {
                    listBlogtemp[i].Date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].Date).format('DD/MM/YYYY');
                }
                if (se.arrbloglike && se.arrbloglike.length > 0) {
                    var itemblog;
                    for (let i = 0; i < listBlogtemp.length; i++) {
                        itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: false };
                        for (let j = 0; j < se.arrbloglike.length; j++) {
                            if (se.arrbloglike[j].id == listBlogtemp[i].id) {
                                itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: true };
                                break;
                            }
                        }
                        if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
                            se.blogtrips.push(itemblog);
                        }
                    }
                }
                else {
                    for (let i = 0; i < listBlogtemp.length; i++) {
                        itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: false };
                        if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
                            se.blogtrips.push(itemblog);
                        }
                    }
                }
            });
            se.zone.run(() => {
                se.loaddatadone = true;
            });
            if (se._infiniteScroll) {
                se._infiniteScroll.target.complete();
            }
        });
    }
    bindItemLike(listLike) {
        var se = this;
        se.blogtrips.forEach(element => {
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
    share(url) {
        this.socialSharing.share(null, null, null, url).then(() => {
        }).catch(() => {
        });
    }
    goback() {
        if (!jquery__WEBPACK_IMPORTED_MODULE_13__('.searchbar-input').val()) {
            if (this.searchhotel.rootPage == "topdeallist") {
                this.navCtrl.navigateBack('/topdeallist');
                this.searchhotel.rootPage = "";
            }
            else {
                this.navCtrl.navigateBack(['/app/tabs/tab1']);
            }
        }
        else {
            this.input.value = '';
            this.filterblog = false;
            this.searchblog = false;
            this.loaddatadone = true;
            jquery__WEBPACK_IMPORTED_MODULE_13__('.div-cover').removeClass('glass-bloglist');
        }
    }
    itemblogclick(item) {
        this.valueGlobal.urlblog = item.url;
        this.navCtrl.navigateForward('/blog/' + item.id);
        this.gf.googleAnalytion('blog', 'Search', '');
    }
    doInfinite(infiniteScroll) {
        var se = this;
        setTimeout(() => {
            se.page = se.page + 1;
            this._infiniteScroll = infiniteScroll;
            if (!se.loadblogslug) {
                se.getbloglike(0);
            }
            else {
                se.loadBlogSlug();
            }
        }, 10);
    }
    ionViewWillEnter() {
    }
    likeItemblog(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.getbloglikelocal(id);
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteBlog',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hotel-list",
                            func: "likeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hotel-list";
                        error.func = "likeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (se.valueGlobal.blogid) {
                        se.getbloglike(1);
                        se.valueGlobal.blogid = '';
                    }
                });
            }
            else {
                se.valueGlobal.blogid = id;
                se.valueGlobal.logingoback = 'bloglist';
                se.navCtrl.navigateForward('/login');
            }
        });
    }
    unlikeItemblog(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.getbloglikelocal(id);
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteBlogByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "blog",
                            func: "unlikeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "blog";
                        error.func = "unlikeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    ;
                    se.zone.run(() => se.getbloglike(1));
                    console.log(body);
                });
            }
            else {
                this.navCtrl.navigateForward('/login');
            }
        });
    }
    getbloglikelocal(id) {
        this.zone.run(() => {
            for (let i = 0; i < this.blogtrips.length; i++) {
                if (this.blogtrips[i].id == id) {
                    this.blogtrips[i].Like = true;
                    break;
                }
            }
        });
    }
    ungetbloglikelocal(id) {
        this.zone.run(() => {
            for (let i = 0; i < this.blogtrips.length; i++) {
                if (this.blogtrips[i].id == id) {
                    this.blogtrips[i].Like = false;
                    break;
                }
            }
        });
    }
    change() {
        this.ischecksearchbar = !this.ischecksearchbar;
    }
    iconcancel() {
        this.ischecksearchbar = !this.ischecksearchbar;
    }
    clickSearchBlog() {
        this.searchblog = !this.searchblog;
        this.filterblog = true;
        setTimeout(() => {
            if (this.input) {
                this.input.setFocus();
            }
        }, 100);
        jquery__WEBPACK_IMPORTED_MODULE_13__('.div-cover').addClass('glass-bloglist');
    }
    clickCancel() {
        if (!jquery__WEBPACK_IMPORTED_MODULE_13__('.searchbar-input').val()) {
            this.searchblog = !this.searchblog;
            this.filterblog = false;
            console.log(this.blogtrips);
            setTimeout(() => {
                if (this.input) {
                    this.input.setFocus();
                }
            }, 100);
            jquery__WEBPACK_IMPORTED_MODULE_13__('.div-cover').removeClass('glass-bloglist');
        }
        else {
            this.input.value = '';
            if (this.blogtrips && this.blogtrips.length > 0) {
                this.loaddatadone = true;
            }
        }
    }
    cancelInput() {
        this.filterblog = false;
        this.input.value = '';
        this.items = [];
        jquery__WEBPACK_IMPORTED_MODULE_13__('.div-cover').removeClass('glass-bloglist');
    }
    clickSearch(ev) {
        var se = this;
        if (ev.detail.value) {
            se.filterblog = true;
            const val = ev.detail.value;
            let loadtype = se.gf.getParams('seemoreblog');
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/api/Data/SearchBlog?keyword=' + val + (se.regionname ? (" " + se.regionname) : "");
            se.gf.RequestApi('GET', url, {}, {}, 'bloglist', 'clickSearch').then((data) => {
                if (data && data.length > 0) {
                    if (se.items.length == 0) {
                        data.forEach(element => {
                            element.show = true;
                        });
                        se.items.push(...data);
                    }
                    else {
                        se.items.forEach(e => {
                            e.show = false;
                        });
                        data.forEach(element => {
                            let check = se.items.filter((i) => { return i.id == element.id; });
                            if (check && check.length == 0) {
                                element.show = true;
                                se.items.push(element);
                            }
                            else {
                                check[0].show = true;
                            }
                        });
                    }
                }
            });
        }
        else {
            se.filterblog = false;
            se.items.forEach(element => {
                element.show = false;
            });
        }
    }
    itemSearchBlogClick(item, index) {
        var se = this;
        if (item) {
            se.loaddatadone = false;
            se.gf.setParams(null, 'itemslug');
            if (item.type == 1) {
                se.navCtrl.navigateForward('/blog/' + item.objectId);
            }
            else {
                se.loadblogslug = true;
                se.regionCode = item.slug;
                se.filterblog = false;
                se.searchblog = false;
                se.items = [];
                se.blogtrips = [];
                se.regionnamesuggest = item.title;
                se.loadBlogSlug();
            }
        }
        se.gf.googleAnalytion("searchblog", "Search", "");
    }
    loadBlogSlug() {
        var se = this;
        var options = {
            method: 'GET',
            url: 'https://svc3.ivivu.com/GetBlogByCategorySlug',
            qs: { slug: se.regionCode,
                pageindex: se.page,
                pagesize: 10
            },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            se.zone.run(() => {
                if (body && body.length > 0) {
                    var data = JSON.parse(body);
                    if (data && data.length > 0) {
                        var listBlogtemp = data;
                        if (listBlogtemp && listBlogtemp.length > 0) {
                            if (se.arrbloglike.length > 0) {
                                var itemblog;
                                for (let i = 0; i < listBlogtemp.length; i++) {
                                    listBlogtemp[i].Date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].Date).format('HH:ss DD/MM/YYYY');
                                    itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: false };
                                    for (let j = 0; j < se.arrbloglike.length; j++) {
                                        if (se.arrbloglike[j].id == listBlogtemp[i].id) {
                                            itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: true };
                                            break;
                                        }
                                    }
                                    if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
                                        se.blogtrips.push(itemblog);
                                    }
                                }
                            }
                            else {
                                for (let i = 0; i < listBlogtemp.length; i++) {
                                    listBlogtemp[i].Date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].Date).format('HH:ss DD/MM/YYYY');
                                    itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: false };
                                    if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
                                        se.blogtrips.push(itemblog);
                                    }
                                }
                            }
                            se.zone.run(() => {
                                se.loaddatadone = true;
                            });
                            if (se._infiniteScroll) {
                                se._infiniteScroll.target.complete();
                            }
                        }
                    }
                    else {
                        if (se._infiniteScroll) {
                            se._infiniteScroll.target.complete();
                        }
                    }
                }
            });
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputSearchBlog'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BlogListPage.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], BlogListPage.prototype, "keyEvent", null);
BlogListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bloglist',
        template: __webpack_require__(/*! ./bloglist.html */ "./src/app/bloglist/bloglist.html"),
        styles: [__webpack_require__(/*! ./bloglist.scss */ "./src/app/bloglist/bloglist.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_book_service__WEBPACK_IMPORTED_MODULE_9__["SearchHotel"], _network_provider_service__WEBPACK_IMPORTED_MODULE_11__["NetworkProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Keyboard"]])
], BlogListPage);



/***/ })

}]);
//# sourceMappingURL=bloglist-bloglist-module.js.map