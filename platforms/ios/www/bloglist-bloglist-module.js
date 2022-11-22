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

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 10px;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.cls-row-width {\n  width: 100%;\n}\n\n.label-item-search {\n  padding: 8px 0px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\n.img-like {\n  margin-left: -5px;\n  margin: 12px;\n  position: absolute;\n  top: -8px;\n  left: -14px;\n  z-index: 999;\n}\n\n.img-share {\n  z-index: 999;\n  width: 18px;\n  position: absolute;\n  margin: 12px;\n  top: -8px;\n}\n\n.row-bloglist {\n  margin-left: 10px;\n  margin-left: 16px;\n  line-height: 15px;\n  padding-top: 5px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.text-item-title {\n  padding: 8px 16px 0px 16px;\n  margin: 0;\n  font-size: 16px;\n  color: #333333;\n  letter-spacing: -0.13px;\n}\n\n.div-img-header {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n}\n\n.div-img-header .img-header {\n  height: 48px;\n  padding: 8px;\n  margin-top: 0px;\n  margin-left: -8px;\n}\n\n.div-img-header .w-36 {\n  width: 36px;\n}\n\n.div-right {\n  right: 0;\n  top: 4px;\n}\n\n.result-search-blog {\n  padding: 20px 16px 0 16px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.cls-row-width {\n  padding: 0 0 20px 0;\n}\n\n.cls-row-width-first {\n  padding: 16px 0 20px 0;\n}\n\n.label-item-blog {\n  font-size: 16px;\n  color: #333333;\n}\n\n.img-search-blog {\n  width: 16px;\n  padding-top: 4px;\n}\n\n.p-left-6 {\n  padding-left: 6px;\n}\n\n.glass-bloglist {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n  bottom: 0px;\n  left: 0px;\n}\n\n.img-close {\n  right: -6px;\n}\n\np {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n::ng-deep img {\n  max-width: 100%;\n  border: 0;\n  height: auto;\n}\n\n::ng-deep .img-item {\n  margin-bottom: 10px;\n}\n\n::ng-deep .divcss {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n::ng-deep .input-search-blog .sc-ion-searchbar-ios-h {\n  text-align: left;\n  background: #fff;\n  -webkit-padding-start: 0;\n  padding-inline-start: 0;\n  --background: var(--ion-overlay-background-color,#fff);\n  padding-top: 0;\n  font-size: 16px;\n  margin-left: 36px;\n}\n\n::ng-deep .input-search-blog .searchbar-input.sc-ion-searchbar-ios {\n  -webkit-padding-start: 0 !important;\n  padding-inline-start: 0 !important;\n  -webkit-padding-end: 0;\n  padding-inline-end: 0;\n  background: #fff;\n}\n\n::ng-deep .searchbar-clear-button.sc-ion-searchbar-ios {\n  display: none !important;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n::ng-deep .done1-combo-css .alert-button-group.sc-ion-alert-md {\n  flex-wrap: nowrap;\n}\n\n::ng-deep .done1-combo-css .alert-button-inner.sc-ion-alert-md {\n  justify-content: center;\n}\n\n::ng-deep .done1-combo-css .alert-button.sc-ion-alert-md {\n  padding-right: 0;\n  width: 100%;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9ibG9nbGlzdC9ibG9nbGlzdC5zY3NzIiwic3JjL2FwcC9ibG9nbGlzdC9ibG9nbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQVI7O0FER0k7RUFFSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNEUjs7QURHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQVI7O0FER0k7RUFDSSxXQUFBO0FDQVI7O0FERUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDUjs7QURDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0VSOztBRENJO0VBQ0ksaUJBQUE7RUFBc0IsaUJBQUE7RUFDdEIsaUJBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksVUFBQTtBQ0lSOztBREZJO0VBQ0ksMEJBQUE7RUFBMkIsU0FBQTtFQUMzQixlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDTVI7O0FESkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNPUjs7QURMUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDT1o7O0FETFE7RUFDSSxXQUFBO0FDT1o7O0FESkk7RUFDSSxRQUFBO0VBQ0EsUUFBQTtBQ09SOztBREpJO0VBQ0kseUJBQUE7QUNPUjs7QURMSTtFQUNJLFVBQUE7QUNRUjs7QUROSTtFQUNJLG1CQUFBO0FDU1I7O0FEUEk7RUFDSSxzQkFBQTtBQ1VSOztBRFJJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNXUjs7QURUSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ1lSOztBRFZJO0VBQ0ksaUJBQUE7QUNhUjs7QURYSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ2NSOztBRFpJO0VBQ0ksV0FBQTtBQ2VSOztBRGJJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ2dCUjs7QURiUTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ2dCWjs7QURiUTtFQUVJLG1CQUFBO0FDY1o7O0FEWFE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDYVo7O0FESlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNEQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ01aOztBREhRO0VBQ0ksbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0taOztBREZRO0VBQ0ksd0JBQUE7QUNJWjs7QUREUTtFQUNJLDhCQUFBO0FDR1o7O0FERFk7RUFDSSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0dBQUEsZ0NBQUE7T0FBQSw0QkFBQTtBQ0VoQjs7QURDWTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDQ1o7O0FEQ1k7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUNDWjs7QURDWTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUNDWjs7QURDWTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0NaOztBRENZO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FDQ1o7O0FEQ1k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0NoQjs7QURFWTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNBaEI7O0FER1k7RUFDQSxpQkFBQTtBQ0RaOztBREdZO0VBQ0EsdUJBQUE7QUNEWjs7QURHWTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDRFoiLCJmaWxlIjoic3JjL2FwcC9ibG9nbGlzdC9ibG9nbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRleHQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICB9XG5cbiAgICAuaW1nLWJsb2dcbiAgICB7IFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTgwcHggIWltcG9ydGFudDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICB9XG4gICAgLmZsb2F0LWluZm97XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxMTtcbiAgICB9XG5cbiAgICAuY2xzLXJvdy13aWR0aHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5sYWJlbC1pdGVtLXNlYXJjaHtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAuaW1nLWxpa2V7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICBtYXJnaW46IDEycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtOHB4O1xuICAgICAgICBsZWZ0OiAtMTRweDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgIH1cbiAgICAuaW1nLXNoYXJle1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgdG9wOiAtOHB4O1xuICAgIH1cblxuICAgIC5yb3ctYmxvZ2xpc3R7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgfVxuICAgIC5uby1wYWRkaW5ne1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuICAgIC50ZXh0LWl0ZW0tdGl0bGV7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4IDBweCAxNnB4O21hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcbiAgICB9XG4gICAgLmRpdi1pbWctaGVhZGVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICAgICAgICAuaW1nLWhlYWRlcntcbiAgICAgICAgICAgIGhlaWdodDogNDhweDsgXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotOHB4XG4gICAgICAgIH1cbiAgICAgICAgLnctMzZ7XG4gICAgICAgICAgICB3aWR0aDozNnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kaXYtcmlnaHR7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6NHB4O1xuICAgIH1cblxuICAgIC5yZXN1bHQtc2VhcmNoLWJsb2d7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTZweCAwIDE2cHg7XG4gICAgfVxuICAgIC5uby1wYWRkaW5ne1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuICAgIC5jbHMtcm93LXdpZHRoe1xuICAgICAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xuICAgIH1cbiAgICAuY2xzLXJvdy13aWR0aC1maXJzdHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDIwcHggMDtcbiAgICB9XG4gICAgLmxhYmVsLWl0ZW0tYmxvZ3tcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICB9XG4gICAgLmltZy1zZWFyY2gtYmxvZ3tcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgfVxuICAgIC5wLWxlZnQtNntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgfVxuICAgIC5nbGFzcy1ibG9nbGlzdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICB9XG4gICAgLmltZy1jbG9zZXtcbiAgICAgICAgcmlnaHQ6IC02cHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICAgIDo6bmctZGVlcHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cbiBcbiAgICAgICAgLmltZy1pdGVtXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgfVxuICAgICAgICAuZGl2Y3Nze1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgge1xuICAgICAgICAvLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xuICAgICAgICAvLyAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIC8vICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDozNnB4O1xuICAgICAgICAvLyAgICAgLy9jb2xvcjojODI4MjgyO1xuICAgICAgICAvLyB9XG4gICAgICAgIC5pbnB1dC1zZWFyY2gtYmxvZyAuc2MtaW9uLXNlYXJjaGJhci1pb3MtaHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM2cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5pbnB1dC1zZWFyY2gtYmxvZyAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgICAgICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaGJhci1jbGVhci1idXR0b24uc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jbHMtYWxlcnQtc2hvd21vcmUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1ke1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1ke1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgfSIsIi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy1ibG9nIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZmxvYXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxNnB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmNscy1yb3ctd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhYmVsLWl0ZW0tc2VhcmNoIHtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1nLWxpa2Uge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgbGVmdDogLTE0cHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmltZy1zaGFyZSB7XG4gIHotaW5kZXg6IDk5OTtcbiAgd2lkdGg6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAxMnB4O1xuICB0b3A6IC04cHg7XG59XG5cbi5yb3ctYmxvZ2xpc3Qge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50ZXh0LWl0ZW0tdGl0bGUge1xuICBwYWRkaW5nOiA4cHggMTZweCAwcHggMTZweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcbn1cblxuLmRpdi1pbWctaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZGl2LWltZy1oZWFkZXIgLmltZy1oZWFkZXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi5kaXYtaW1nLWhlYWRlciAudy0zNiB7XG4gIHdpZHRoOiAzNnB4O1xufVxuXG4uZGl2LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNHB4O1xufVxuXG4ucmVzdWx0LXNlYXJjaC1ibG9nIHtcbiAgcGFkZGluZzogMjBweCAxNnB4IDAgMTZweDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xzLXJvdy13aWR0aCB7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG59XG5cbi5jbHMtcm93LXdpZHRoLWZpcnN0IHtcbiAgcGFkZGluZzogMTZweCAwIDIwcHggMDtcbn1cblxuLmxhYmVsLWl0ZW0tYmxvZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5pbWctc2VhcmNoLWJsb2cge1xuICB3aWR0aDogMTZweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnAtbGVmdC02IHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5nbGFzcy1ibG9nbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLmltZy1jbG9zZSB7XG4gIHJpZ2h0OiAtNnB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuOjpuZy1kZWVwIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG46Om5nLWRlZXAgLmltZy1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjo6bmctZGVlcCAuZGl2Y3NzIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbjo6bmctZGVlcCAuaW5wdXQtc2VhcmNoLWJsb2cgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuOjpuZy1kZWVwIC5pbnB1dC1zZWFyY2gtYmxvZyAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbjo6bmctZGVlcCAuc2VhcmNoYmFyLWNsZWFyLWJ1dHRvbi5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG46Om5nLWRlZXAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuOjpuZy1kZWVwIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSJdfQ== */"

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