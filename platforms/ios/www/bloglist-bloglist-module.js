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

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 10px;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.cls-row-width {\n  width: 100%;\n}\n\n.label-item-search {\n  padding: 8px 0px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\n.img-like {\n  margin-left: -5px;\n  margin: 12px;\n  position: absolute;\n  top: -8px;\n  left: -14px;\n  z-index: 999;\n}\n\n.img-share {\n  z-index: 999;\n  width: 18px;\n  position: absolute;\n  margin: 12px;\n  top: -8px;\n}\n\n.row-bloglist {\n  margin-left: 10px;\n  margin-left: 16px;\n  line-height: 15px;\n  padding-top: 5px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.text-item-title {\n  padding: 8px 16px 0px 16px;\n  margin: 0;\n  font-size: 16px;\n  color: #333333;\n  letter-spacing: -0.13px;\n}\n\n.div-img-header {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n}\n\n.div-img-header .img-header {\n  height: 48px;\n  padding: 8px;\n  margin-top: 0px;\n  margin-left: -8px;\n}\n\n.div-img-header .w-36 {\n  width: 36px;\n}\n\n.div-right {\n  right: 0;\n  top: 4px;\n}\n\n.result-search-blog {\n  padding: 20px 16px 0 16px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.cls-row-width {\n  padding: 0 0 20px 0;\n}\n\n.cls-row-width-first {\n  padding: 16px 0 20px 0;\n}\n\n.label-item-blog {\n  font-size: 16px;\n  color: #333333;\n}\n\n.img-search-blog {\n  width: 16px;\n  padding-top: 4px;\n}\n\n.p-left-6 {\n  padding-left: 6px;\n}\n\n.glass-bloglist {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n  bottom: 0px;\n  left: 0px;\n}\n\n.img-close {\n  right: -6px;\n}\n\np {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n::ng-deep img {\n  max-width: 100%;\n  border: 0;\n  height: auto;\n}\n\n::ng-deep .img-item {\n  margin-bottom: 10px;\n}\n\n::ng-deep .divcss {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n::ng-deep .input-search-blog .sc-ion-searchbar-ios-h {\n  text-align: left;\n  background: #fff;\n  -webkit-padding-start: 0;\n  padding-inline-start: 0;\n  --background: var(--ion-overlay-background-color,#fff);\n  padding-top: 0;\n  font-size: 16px;\n  margin-left: 36px;\n}\n\n::ng-deep .input-search-blog .searchbar-input.sc-ion-searchbar-ios {\n  -webkit-padding-start: 0 !important;\n  padding-inline-start: 0 !important;\n  -webkit-padding-end: 0;\n  padding-inline-end: 0;\n  background: #fff;\n}\n\n::ng-deep .searchbar-clear-button.sc-ion-searchbar-ios {\n  display: none !important;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n::ng-deep .done1-combo-css .alert-button-group.sc-ion-alert-md {\n  flex-wrap: nowrap;\n}\n\n::ng-deep .done1-combo-css .alert-button-inner.sc-ion-alert-md {\n  justify-content: center;\n}\n\n::ng-deep .done1-combo-css .alert-button.sc-ion-alert-md {\n  padding-right: 0;\n  width: 100%;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Jsb2dsaXN0L2Jsb2dsaXN0LnNjc3MiLCJzcmMvYXBwL2Jsb2dsaXN0L2Jsb2dsaXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURHSTtFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNBUjs7QURHSTtFQUNJLFdBQUE7QUNBUjs7QURFSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ1I7O0FERUk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NSOztBRENJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDRVI7O0FEQ0k7RUFDSSxpQkFBQTtFQUFzQixpQkFBQTtFQUN0QixpQkFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxVQUFBO0FDSVI7O0FERkk7RUFDSSwwQkFBQTtFQUEyQixTQUFBO0VBQzNCLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNNUjs7QURKSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ09SOztBRExRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNPWjs7QURMUTtFQUNJLFdBQUE7QUNPWjs7QURKSTtFQUNJLFFBQUE7RUFDQSxRQUFBO0FDT1I7O0FESkk7RUFDSSx5QkFBQTtBQ09SOztBRExJO0VBQ0ksVUFBQTtBQ1FSOztBRE5JO0VBQ0ksbUJBQUE7QUNTUjs7QURQSTtFQUNJLHNCQUFBO0FDVVI7O0FEUkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1dSOztBRFRJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDWVI7O0FEVkk7RUFDSSxpQkFBQTtBQ2FSOztBRFhJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDY1I7O0FEWkk7RUFDSSxXQUFBO0FDZVI7O0FEYkk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDZ0JSOztBRGJRO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDZ0JaOztBRGJRO0VBRUksbUJBQUE7QUNjWjs7QURYUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNhWjs7QURKUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0RBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTVo7O0FESFE7RUFDSSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDS1o7O0FERlE7RUFDSSx3QkFBQTtBQ0laOztBRERRO0VBQ0ksOEJBQUE7QUNHWjs7QUREWTtFQUNJLDhGQUFBO0VBQ0EsNkJBQUE7RUFFQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7R0FBQSxnQ0FBQTtPQUFBLDRCQUFBO0FDRWhCOztBRENZO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNDWjs7QURDWTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtBQ0NaOztBRENZO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ0NaOztBRENZO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0NBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDQ1o7O0FEQ1k7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUNDWjs7QURDWTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FDQ2hCOztBREVZO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FoQjs7QURHWTtFQUNBLGlCQUFBO0FDRFo7O0FER1k7RUFDQSx1QkFBQTtBQ0RaOztBREdZO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dsaXN0L2Jsb2dsaXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGV4dC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgIH1cblxuICAgIC5pbWctYmxvZ1xuICAgIHsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweFxuICAgIH1cbiAgICAuZmxvYXQtaW5mb3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDExO1xuICAgIH1cblxuICAgIC5jbHMtcm93LXdpZHRoe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmxhYmVsLWl0ZW0tc2VhcmNoe1xuICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5pbWctbGlrZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgIGxlZnQ6IC0xNHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuICAgIC5pbWctc2hhcmV7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICB0b3A6IC04cHg7XG4gICAgfVxuXG4gICAgLnJvdy1ibG9nbGlzdHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gICAgLm5vLXBhZGRpbmd7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG4gICAgLnRleHQtaXRlbS10aXRsZXtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHggMHB4IDE2cHg7bWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xuICAgIH1cbiAgICAuZGl2LWltZy1oZWFkZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgICAgIC5pbWctaGVhZGVye1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4OyBcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi04cHhcbiAgICAgICAgfVxuICAgICAgICAudy0zNntcbiAgICAgICAgICAgIHdpZHRoOjM2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdi1yaWdodHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDo0cHg7XG4gICAgfVxuXG4gICAgLnJlc3VsdC1zZWFyY2gtYmxvZ3tcbiAgICAgICAgcGFkZGluZzogMjBweCAxNnB4IDAgMTZweDtcbiAgICB9XG4gICAgLm5vLXBhZGRpbmd7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG4gICAgLmNscy1yb3ctd2lkdGh7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4gICAgfVxuICAgIC5jbHMtcm93LXdpZHRoLWZpcnN0e1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMjBweCAwO1xuICAgIH1cbiAgICAubGFiZWwtaXRlbS1ibG9ne1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cbiAgICAuaW1nLXNlYXJjaC1ibG9ne1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICB9XG4gICAgLnAtbGVmdC02e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICB9XG4gICAgLmdsYXNzLWJsb2dsaXN0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgIH1cbiAgICAuaW1nLWNsb3Nle1xuICAgICAgICByaWdodDogLTZweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gICAgOjpuZy1kZWVwe1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlIDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuIFxuICAgICAgICAuaW1nLWl0ZW1cbiAgICAgICAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICB9XG4gICAgICAgIC5kaXZjc3N7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgfVxuICAgICAgICAvLyAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCB7XG4gICAgICAgIC8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gICAgICAgIC8vICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgLy8gICAgIG1hcmdpbi1sZWZ0OjM2cHg7XG4gICAgICAgIC8vICAgICAvL2NvbG9yOiM4MjgyODI7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLmlucHV0LXNlYXJjaC1ibG9nIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oe1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MzZweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmlucHV0LXNlYXJjaC1ibG9nIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICAgICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNscy1hbGVydC1zaG93bW9yZSB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWR7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWR7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgICBcbiAgICB9IiwiLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLWJsb2cge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5mbG9hdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHotaW5kZXg6IDExO1xufVxuXG4uY2xzLXJvdy13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGFiZWwtaXRlbS1zZWFyY2gge1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWctbGlrZSB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW46IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICBsZWZ0OiAtMTRweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uaW1nLXNoYXJlIHtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMThweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDEycHg7XG4gIHRvcDogLThweDtcbn1cblxuLnJvdy1ibG9nbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRleHQtaXRlbS10aXRsZSB7XG4gIHBhZGRpbmc6IDhweCAxNnB4IDBweCAxNnB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xufVxuXG4uZGl2LWltZy1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5kaXYtaW1nLWhlYWRlciAuaW1nLWhlYWRlciB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuLmRpdi1pbWctaGVhZGVyIC53LTM2IHtcbiAgd2lkdGg6IDM2cHg7XG59XG5cbi5kaXYtcmlnaHQge1xuICByaWdodDogMDtcbiAgdG9wOiA0cHg7XG59XG5cbi5yZXN1bHQtc2VhcmNoLWJsb2cge1xuICBwYWRkaW5nOiAyMHB4IDE2cHggMCAxNnB4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jbHMtcm93LXdpZHRoIHtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbn1cblxuLmNscy1yb3ctd2lkdGgtZmlyc3Qge1xuICBwYWRkaW5nOiAxNnB4IDAgMjBweCAwO1xufVxuXG4ubGFiZWwtaXRlbS1ibG9nIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmltZy1zZWFyY2gtYmxvZyB7XG4gIHdpZHRoOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4ucC1sZWZ0LTYge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cblxuLmdsYXNzLWJsb2dsaXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xufVxuXG4uaW1nLWNsb3NlIHtcbiAgcmlnaHQ6IC02cHg7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG46Om5nLWRlZXAgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGhlaWdodDogYXV0bztcbn1cbjo6bmctZGVlcCAuaW1nLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuOjpuZy1kZWVwIC5kaXZjc3Mge1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuOjpuZy1kZWVwIC5pbnB1dC1zZWFyY2gtYmxvZyAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogMDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG46Om5nLWRlZXAgLmlucHV0LXNlYXJjaC1ibG9nIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuOjpuZy1kZWVwIC5zZWFyY2hiYXItY2xlYXItYnV0dG9uLnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjo6bmctZGVlcCAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG46Om5nLWRlZXAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1tZCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59Il19 */"

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