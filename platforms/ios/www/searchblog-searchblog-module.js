(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchblog-searchblog-module"],{

/***/ "./src/app/searchblog/searchblog.module.ts":
/*!*************************************************!*\
  !*** ./src/app/searchblog/searchblog.module.ts ***!
  \*************************************************/
/*! exports provided: SearchBlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBlogPageModule", function() { return SearchBlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchblog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchblog.page */ "./src/app/searchblog/searchblog.page.ts");







const routes = [
    {
        path: '',
        component: _searchblog_page__WEBPACK_IMPORTED_MODULE_6__["SearchBlogPage"]
    }
];
let SearchBlogPageModule = class SearchBlogPageModule {
};
SearchBlogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_searchblog_page__WEBPACK_IMPORTED_MODULE_6__["SearchBlogPage"]]
    })
], SearchBlogPageModule);



/***/ }),

/***/ "./src/app/searchblog/searchblog.page.html":
/*!*************************************************!*\
  !*** ./src/app/searchblog/searchblog.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;margin-bottom: 10px;\">\n        <div style=\"align-self: center\" >\n          <div class=\"div-img-header\"(click)=\"goback()\">\n            <img class=\"img-header\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div *ngIf=\"!searchblog\" style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">{{regionnamesuggest}}</label></div>\n          <div *ngIf=\"searchblog\">\n            <form action=\".\">\n              <ion-searchbar #inputSearchBlog style=\"text-align: left;\n              background: #fff;\n              -webkit-padding-start: 0;\n              padding-inline-start: 0;\n              --background: var(--ion-overlay-background-color,#fff);\n              font-size: 16px;width: 88%;\n              padding-right: 0;\n              margin-left:48px;height: 48px; display: table;padding: 0px;padding-top: 5px;\"\n              debounce=\"500\"\n              inputmode=\"text\"\n              type=\"text\"\n              class=\"input-search-blog\" placeholder=\"Tìm bài viết\" searchIcon=\"false\" ([ngModel])=\"textsearch\" (ionClear)=\"cancelInput()\" (ionInput)=\"clickSearch($event)\" \n              ></ion-searchbar>\n            </form>\n          </div>\n          <div *ngIf=\"!searchblog\" class=\"div-img-header div-right\" (click)=\"clickSearchBlog()\">\n            <img class=\"img-header w-36\" src=\"./assets/imgs/ic_search.svg\" >\n          </div>\n          <div *ngIf=\"searchblog\" class=\"div-img-header div-right\" (click)=\"clickCancel()\">\n              <img class=\"img-header img-close \" src=\"./assets/ic_close.svg\" >\n          </div>\n        </div>\n    </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content class=\"div-content-container\" #scrollArea>\n<!-- Vùng search result -->\n<div class=\"result-search-blog\" *ngIf=\"filterblog && items && items.length >0\">\n    <div *ngFor=\"let item of items; let i = index\">\n        <ion-row class='cls-row-width' (click)=\"itemSearchBlogClick(item,i)\" *ngIf=\"item.show\">\n          <ion-col size=\"0.8\" class=\"no-padding\">\n              <img class=\"img-search-blog\" src=\"./assets/imgs/frame.svg\" *ngIf=\"item.type == 2\">\n              <img class=\"img-search-blog\" src=\"./assets/imgs/newspaper.svg\" *ngIf=\"item.type == 1\">\n          </ion-col>\n          <ion-col text-left class=\"no-padding p-left-6\">\n            <ion-label *ngIf=\"item.title\" class=\"label-item-blog\">\n             {{item.title}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n</div>\n<!-- Vùng item slug -->\n<div *ngIf=\"loadblogslug && blogslugs && blogslugs.length >0\">\n  <div style=\"padding: 16px\" *ngIf=\"loaddatadone\">\n    <div class=\"div-item-blog\" *ngFor=\"let item of blogslugs\" >\n      <div>\n        <div>\n          <img (click)=\"itemblogclick(item)\" class=\"img-blog\" src={{item.avatar}}>\n        </div>\n          <p class=\"text-item-title\" (click)=\"itemblogclick(item)\" >\n            {{item.title}}\n          </p>\n         \n        <ion-row class=\"row-bloglist\">\n            <ion-col size=\"9\" class=\"no-padding\">\n              <label (click)=\"itemblogclick(item)\" style=\"margin:0\"\n                style=\"color: #828282;font-size: 12px\">{{item.date}}</label>\n            </ion-col>\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;right: 46px\"\n              (click)=\"share(item.url)\">\n              <img style=\"width:48px;height:48px;padding: 15px\" src=\"./assets/imgs/ic_share_black.svg\">\n            </div>\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;right: 0\">\n              <img *ngIf=\"!item.Like\" class=\"img-heart\" (click)=\"likeItemblog(item.id)\"\n                src=\"./assets/imgs/heart-empty-black.svg\" style=\"width:48px;height:48px;padding: 16px\">\n              <img *ngIf=\"item.Like\" class=\"img-heart\" (click)=\"unlikeItemblog(item.id)\" src=\"./assets/imgs/heart-red.svg\"\n                style=\"width:48px;height:48px;padding: 16px\">\n            </div>\n          </ion-row>\n      </div>\n    </div>\n    \n    <div padding=\"\" *ngIf=\"!isConnected\" style=\"text-align: center;margin-top: 10px\">\n        <img src=\"./assets/imgs/empty.svg\">\n        <div *ngIf=\"!isConnected\">\n          <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\n        </div>\n      </div>\n  </div>\n  \n</div>\n<!-- Vùng item bloglist -->\n<div *ngIf=\"(!filterblog || (items && items.length == 0) ) && !loadblogslug\">\n  <div style=\"padding: 16px\" *ngIf=\"loaddatadone\">\n    <div class=\"div-item-blog\" *ngFor=\"let item of blogtrips\" >\n      <div >\n        <div>\n          <img (click)=\"itemblogclick(item)\" class=\"img-blog\" *ngIf=\"!item.itemslug\" src={{item.avatar}}>\n          <div *ngIf=\"item.itemslug\" (click)=\"itemblogclick(item)\" >\n            <ion-grid class=\"no-padding grid-item-blog\">\n              <ion-col class=\"no-padding fix-col-height\">\n                <img class=\"img-slug av-1\" src= \"{{ item.avatar1 }}\">\n              </ion-col>\n              <ion-col class=\"no-padding p-left-4 fix-col-height\">\n                <ion-row class=\"no-padding\"><img class=\"img-slug av-2\" src=\"{{ item.avatar2 }}\"></ion-row>\n                <ion-row class=\"no-padding p-top-4\"><img class=\"img-slug av-3\" src=\"{{ item.avatar3 }}\"></ion-row>\n              </ion-col>\n            </ion-grid>\n          </div>\n        </div>\n          <p class=\"text-item-title\" (click)=\"itemblogclick(item)\" >\n            {{item.title}}\n          </p>\n          <div class=\"text-item-totalblog\" (click)=\"itemblogclick(item)\" *ngIf=\"item.itemslug && item.totalPost >0\" >\n            {{item.totalPost}} bài viết\n          </div>\n      \n        <ion-row class=\"row-bloglist\" *ngIf=\"!item.itemslug\">\n            <ion-col size=\"9\" class=\"no-padding\">\n              <label (click)=\"itemblogclick(item)\" style=\"margin:0\"\n                style=\"color: #828282;font-size: 12px\">{{item.date}}</label>\n            </ion-col>\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;right: 46px\"\n              (click)=\"share(item.url)\">\n              <img style=\"width:48px;height:48px;padding: 15px\" src=\"./assets/imgs/ic_share_black.svg\">\n            </div>\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;right: 0\">\n              <img *ngIf=\"!item.Like\" class=\"img-heart\" (click)=\"likeItemblog(item.id)\"\n                src=\"./assets/imgs/heart-empty-black.svg\" style=\"width:48px;height:48px;padding: 16px\">\n              <img *ngIf=\"item.Like\" class=\"img-heart\" (click)=\"unlikeItemblog(item.id)\" src=\"./assets/imgs/heart-red.svg\"\n                style=\"width:48px;height:48px;padding: 16px\">\n            </div>\n          </ion-row>\n      </div>\n    </div>\n    <div padding=\"\" *ngIf=\"!isConnected\" style=\"text-align: center;margin-top: 10px\">\n        <img src=\"./assets/imgs/empty.svg\">\n        <div *ngIf=\"!isConnected\">\n          <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\n        </div>\n      </div>\n  </div>\n  <div class=\"div-cover\"></div>\n</div>\n<div *ngIf=\"!loaddatadone\" style=\"margin-top:32px\">\n    <ion-list lines=\"none\" *ngFor=\"let item of blogtripssk\" >\n      <div >\n        <ion-item style=\"--inner-padding-end: 16px\">\n            <ion-skeleton-text animated style=\"width: 100%;margin: 0;border-radius: 5px;\n            width: 100% !important;\n            height: 180px !important;\n            object-fit: cover\" ></ion-skeleton-text>\n        </ion-item>\n          <ion-row>\n            <ion-col style=\"padding:0\">\n                <ion-skeleton-text animated style=\"width: 75%;margin: 16px 16px 0 16px;height: 16px;\"></ion-skeleton-text>\n            </ion-col>\n            </ion-row>\n          \n        <ion-row>\n            <ion-col style=\"padding:0\">\n              <ion-skeleton-text animated style=\"width: 91%;margin: 0;margin: 16px 16px 0 16px;height: 16px\"></ion-skeleton-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list>\n  </div>\n<ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" >\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>"

/***/ }),

/***/ "./src/app/searchblog/searchblog.page.scss":
/*!*************************************************!*\
  !*** ./src/app/searchblog/searchblog.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-item-blog {\n  display: flex;\n}\n\n.img-slug {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.img-blog {\n  border-radius: 5px;\n  width: 100% !important;\n  height: 180px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-top: 10px;\n}\n\n.av-1 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 180px;\n  border-radius: 6px 0 0 6px;\n}\n\n.av-2 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 88px;\n  border-radius: 0 6px 0 0;\n}\n\n.av-3 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 88px;\n  border-radius: 0 0 6px 0;\n}\n\n.p-left-4 {\n  padding-left: 4px !important;\n}\n\n.p-top-4 {\n  padding-top: 4px !important;\n}\n\n.fix-col-height {\n  height: 180px;\n}\n\n.float-info {\n  position: absolute;\n  bottom: 10px;\n  left: 16px;\n  z-index: 11;\n}\n\n.cls-row-width {\n  width: 100%;\n}\n\n.label-item-search {\n  padding: 8px 0px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\n.img-like {\n  margin-left: -5px;\n  margin: 12px;\n  position: absolute;\n  top: -8px;\n  left: -14px;\n  z-index: 999;\n}\n\n.img-share {\n  z-index: 999;\n  width: 18px;\n  position: absolute;\n  margin: 12px;\n  top: -8px;\n}\n\n.row-bloglist {\n  padding-top: 5px;\n  line-height: 15px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.text-item-title {\n  padding-top: 8px;\n  margin: 0;\n  font-size: 16px;\n  color: #333333;\n  letter-spacing: -0.13px;\n  line-height: 20px;\n}\n\n.text-item-totalblog {\n  padding-top: 5px;\n  font-size: 12px;\n  color: #828282;\n  line-height: 14px;\n}\n\n.div-item-blog {\n  padding-top: 30px;\n}\n\n.div-item-blog:first-child {\n  padding-top: 0;\n}\n\n.div-img-header {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  align-self: center;\n}\n\n.div-img-header .img-header {\n  height: 48px;\n  padding: 8px;\n  margin-top: 0px;\n  margin-left: -8px;\n}\n\n.div-img-header .w-36 {\n  width: 36px;\n}\n\n.div-right {\n  right: 0;\n  top: 4px;\n  background: #ffffff;\n}\n\n.result-search-blog {\n  padding: 20px 16px 0 16px;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.cls-row-width {\n  padding: 0 0 20px 0;\n}\n\n.cls-row-width-first {\n  padding: 16px 0 20px 0;\n}\n\n.label-item-blog {\n  font-size: 16px;\n  color: #333333;\n}\n\n.img-search-blog {\n  width: 16px;\n  padding-top: 4px;\n}\n\n.p-left-6 {\n  padding-left: 6px;\n}\n\n.glass-bloglist {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n  bottom: 0px;\n  left: 0px;\n}\n\n.img-close {\n  margin-right: -6px;\n}\n\n::ng-deep img {\n  max-width: 100%;\n  border: 0;\n  height: auto;\n}\n\n::ng-deep p {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n::ng-deep .img-item {\n  margin-bottom: 10px;\n}\n\n::ng-deep .divcss {\n  line-height: 1.5;\n  text-align: justify;\n}\n\n::ng-deep .input-search-blog .sc-ion-searchbar-ios-h {\n  text-align: left;\n  background: #fff;\n  -webkit-padding-start: 0;\n  padding-inline-start: 0;\n  --background: var(--ion-overlay-background-color,#fff);\n  padding-top: 0;\n  font-size: 16px;\n  margin-left: 36px;\n}\n\n::ng-deep .input-search-blog .searchbar-input.sc-ion-searchbar-ios {\n  -webkit-padding-start: 0 !important;\n  padding-inline-start: 0 !important;\n  -webkit-padding-end: 0;\n  padding-inline-end: 0;\n  background: #fff;\n  max-width: 260px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3NlYXJjaGJsb2cvc2VhcmNoYmxvZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaGJsb2cvc2VhcmNoYmxvZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxhQUFBO0FDQ1I7O0FEQ0k7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0FDRVI7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURBSTtFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtBQ0VSOztBREFJO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7QUNHUjs7QURESTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDSVI7O0FERkk7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQ0tSOztBREZJO0VBQ0ksNEJBQUE7QUNLUjs7QURGSTtFQUNJLDJCQUFBO0FDS1I7O0FESEk7RUFDSSxhQUFBO0FDTVI7O0FESkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ09SOztBREpJO0VBQ0ksV0FBQTtBQ09SOztBRExJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNRUjs7QURMSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUVI7O0FETkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNTUjs7QUROSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNTUjs7QURQSTtFQUNJLFVBQUE7QUNVUjs7QURSSTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ1dSOztBRFRJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDWVI7O0FEVkk7RUFDSSxpQkFBQTtBQ2FSOztBRFhJO0VBQ0ksY0FBQTtBQ2NSOztBRFpJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDZVI7O0FEYlE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2VaOztBRGJRO0VBQ0ksV0FBQTtBQ2VaOztBRFpJO0VBQ0ksUUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ2VSOztBRFpJO0VBQ0kseUJBQUE7QUNlUjs7QURiSTtFQUNJLFVBQUE7QUNnQlI7O0FEZEk7RUFDSSxtQkFBQTtBQ2lCUjs7QURmSTtFQUNJLHNCQUFBO0FDa0JSOztBRGhCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDbUJSOztBRGpCSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ29CUjs7QURsQkk7RUFDSSxpQkFBQTtBQ3FCUjs7QURuQkk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNzQlI7O0FEcEJJO0VBQ0ksa0JBQUE7QUN1QlI7O0FEbEJRO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcUJaOztBRG5CUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNxQlo7O0FEbkJRO0VBRUksbUJBQUE7QUNvQlo7O0FEakJRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ21CWjs7QURoQlE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNEQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2tCWjs7QURmUTtFQUNJLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2dCWiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGJsb2cvc2VhcmNoYmxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmdyaWQtaXRlbS1ibG9ne1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuaW1nLXNsdWd7XG4gICAgICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gICAgfVxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgfVxuXG4gICAgLmltZy1ibG9nXG4gICAgeyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDE4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XG4gICAgfVxuICAgIC5hdi0xe1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCAwIDAgNnB4O1xuICAgIH1cbiAgICAuYXYtMntcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDg4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNnB4IDAgMDtcbiAgICB9XG4gICAgLmF2LTN7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDA7XG4gICAgfVxuXG4gICAgLnAtbGVmdC00e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wLXRvcC00e1xuICAgICAgICBwYWRkaW5nLXRvcDo0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmZpeC1jb2wtaGVpZ2h0e1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIH1cbiAgICAuZmxvYXQtaW5mb3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDExO1xuICAgIH1cblxuICAgIC5jbHMtcm93LXdpZHRoe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmxhYmVsLWl0ZW0tc2VhcmNoe1xuICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5pbWctbGlrZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC04cHg7XG4gICAgICAgIGxlZnQ6IC0xNHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuICAgIC5pbWctc2hhcmV7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICB0b3A6IC04cHg7XG4gICAgfVxuXG4gICAgLnJvdy1ibG9nbGlzdHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5uby1wYWRkaW5ne1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuICAgIC50ZXh0LWl0ZW0tdGl0bGV7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC50ZXh0LWl0ZW0tdG90YWxibG9ne1xuICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgbGluZS1oZWlnaHQ6MTRweDtcbiAgICB9XG4gICAgLmRpdi1pdGVtLWJsb2d7XG4gICAgICAgIHBhZGRpbmctdG9wOjMwcHg7XG4gICAgfVxuICAgIC5kaXYtaXRlbS1ibG9nOmZpcnN0LWNoaWxke1xuICAgICAgICBwYWRkaW5nLXRvcDowO1xuICAgIH1cbiAgICAuZGl2LWltZy1oZWFkZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuXG4gICAgICAgIC5pbWctaGVhZGVye1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4OyBcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi04cHhcbiAgICAgICAgfVxuICAgICAgICAudy0zNntcbiAgICAgICAgICAgIHdpZHRoOjM2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdi1yaWdodHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDo0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgfVxuXG4gICAgLnJlc3VsdC1zZWFyY2gtYmxvZ3tcbiAgICAgICAgcGFkZGluZzogMjBweCAxNnB4IDAgMTZweDtcbiAgICB9XG4gICAgLm5vLXBhZGRpbmd7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG4gICAgLmNscy1yb3ctd2lkdGh7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4gICAgfVxuICAgIC5jbHMtcm93LXdpZHRoLWZpcnN0e1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgMjBweCAwO1xuICAgIH1cbiAgICAubGFiZWwtaXRlbS1ibG9ne1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cbiAgICAuaW1nLXNlYXJjaC1ibG9ne1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICB9XG4gICAgLnAtbGVmdC02e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICB9XG4gICAgLmdsYXNzLWJsb2dsaXN0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgIH1cbiAgICAuaW1nLWNsb3Nle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC02cHg7XG4gICAgICAgIC8vYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXB7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCUgO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLWl0ZW1cbiAgICAgICAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICB9XG4gICAgICAgIC5kaXZjc3N7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmlucHV0LXNlYXJjaC1ibG9nIC5zYy1pb24tc2VhcmNoYmFyLWlvcy1oe1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MzZweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmlucHV0LXNlYXJjaC1ibG9nIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICAgICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgICAgICAgIG1heC13aWR0aDogMjYwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgfSIsIi5ncmlkLWl0ZW0tYmxvZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWctc2x1ZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbWctYmxvZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxODBweCAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmF2LTEge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAwIDAgNnB4O1xufVxuXG4uYXYtMiB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4OHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDZweCAwIDA7XG59XG5cbi5hdi0zIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggMDtcbn1cblxuLnAtbGVmdC00IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcbn1cblxuLnAtdG9wLTQge1xuICBwYWRkaW5nLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maXgtY29sLWhlaWdodCB7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbi5mbG9hdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHotaW5kZXg6IDExO1xufVxuXG4uY2xzLXJvdy13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGFiZWwtaXRlbS1zZWFyY2gge1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWctbGlrZSB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW46IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICBsZWZ0OiAtMTRweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uaW1nLXNoYXJlIHtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMThweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDEycHg7XG4gIHRvcDogLThweDtcbn1cblxuLnJvdy1ibG9nbGlzdCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50ZXh0LWl0ZW0tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnRleHQtaXRlbS10b3RhbGJsb2cge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cblxuLmRpdi1pdGVtLWJsb2cge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmRpdi1pdGVtLWJsb2c6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmRpdi1pbWctaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZGl2LWltZy1oZWFkZXIgLmltZy1oZWFkZXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi5kaXYtaW1nLWhlYWRlciAudy0zNiB7XG4gIHdpZHRoOiAzNnB4O1xufVxuXG4uZGl2LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ucmVzdWx0LXNlYXJjaC1ibG9nIHtcbiAgcGFkZGluZzogMjBweCAxNnB4IDAgMTZweDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xzLXJvdy13aWR0aCB7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG59XG5cbi5jbHMtcm93LXdpZHRoLWZpcnN0IHtcbiAgcGFkZGluZzogMTZweCAwIDIwcHggMDtcbn1cblxuLmxhYmVsLWl0ZW0tYmxvZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5pbWctc2VhcmNoLWJsb2cge1xuICB3aWR0aDogMTZweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnAtbGVmdC02IHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5nbGFzcy1ibG9nbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLmltZy1jbG9zZSB7XG4gIG1hcmdpbi1yaWdodDogLTZweDtcbn1cblxuOjpuZy1kZWVwIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG46Om5nLWRlZXAgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG46Om5nLWRlZXAgLmltZy1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjo6bmctZGVlcCAuZGl2Y3NzIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbjo6bmctZGVlcCAuaW5wdXQtc2VhcmNoLWJsb2cgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuOjpuZy1kZWVwIC5pbnB1dC1zZWFyY2gtYmxvZyAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWF4LXdpZHRoOiAyNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59Il19 */"

/***/ }),

/***/ "./src/app/searchblog/searchblog.page.ts":
/*!***********************************************!*\
  !*** ./src/app/searchblog/searchblog.page.ts ***!
  \***********************************************/
/*! exports provided: SearchBlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBlogPage", function() { return SearchBlogPage; });
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














let SearchBlogPage = class SearchBlogPage {
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
        this.blogslugs = [];
        this.papesearch = 1;
        this.ischecksearchbar = false;
        this.regionnamesuggest = "";
        this.loaddatadone = false;
        this.blogtripssk = [1, 2, 3, 4, 5];
        this.searchblog = false;
        this.gf.googleAnalytion("searchblog", "Search", "");
    }
    ;
    keyEvent(e) {
        var code = e.keyCode || e.which;
        if (code === 13) {
            if (e.srcElement.tagName === "INPUT") {
                e.preventDefault();
                let listblogsearch = this.items.filter((item) => { return item.show; });
                if (listblogsearch && listblogsearch.length > 0) {
                    this.zone.run(() => {
                        this.filterblog = false;
                        this.blogslugs = [];
                        this.blogtrips = [];
                        this.loadblogslug = false;
                        this.loaddatadone = false;
                        this.papesearch = 1;
                        this.gf.setParams(null, 'itemslug');
                    });
                    setTimeout(() => {
                        this.loadDataBlog(listblogsearch);
                    }, 500);
                }
            }
        }
    }
    ;
    ngOnInit() {
    }
    ionViewDidEnter() {
    }
    goback() {
        if (this.loadblogslug) {
            if (this.blogtrips.length == 0) {
                this.navCtrl.back();
            }
            else {
                this.loadblogslug = false;
                this.filterblog = false;
                this.regionnamesuggest = 'Cẩm nang du lịch';
            }
        }
        else {
            this.navCtrl.back();
        }
    }
    itemblogclick(item) {
        var se = this;
        se.zone.run(() => {
            se.loaddatadone = false;
        });
        if (item.itemslug) {
            se.loadblogslug = true;
            se.regionCode = item.slug;
            se.filterblog = false;
            se.searchblog = false;
            se.blogslugs = [];
            se.loadBlogSlug(se.regionCode, 10);
        }
        else {
            se.valueGlobal.urlblog = item.url;
            se.valueGlobal.backValue = "searchblog";
            se.navCtrl.navigateForward('/blog/' + item.id);
        }
    }
    ionViewWillLeave() {
    }
    ionViewWillEnter() {
        if (this.blogslugs.length > 0 || this.blogtrips.length > 0) {
            this.loaddatadone = true;
        }
        this.searchhotel.backPage = "bloglist";
        this.storage.get('username').then(username => {
            this.username = username;
        });
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
            if (this.gf.getParams('itemslug')) {
                let item = this.gf.getParams('itemslug');
                this.regionnamesuggest = item.title;
                this.loadblogslug = true;
                this.regionCode = item.slug;
                this.filterblog = false;
                this.searchblog = false;
                this.blogslugs = [];
                this.loadBlogSlug(this.regionCode, 10);
            }
            else if (this.gf.getParams('listsearchblog')) {
                let listblogsearch = this.gf.getParams('listsearchblog');
                this.searchblog = true;
                if (listblogsearch && listblogsearch.length > 0) {
                    setTimeout(() => {
                        this.loadDataBlog(listblogsearch);
                    }, 500);
                }
                let val = this.gf.getParams('searchblogtext');
                this.textsearch = val;
                this.filterblog = true;
                setTimeout(() => {
                    if (this.input) {
                        this.input.value = val;
                    }
                }, 500);
            }
        }
        else {
            this.isConnected = false;
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        }
    }
    loadDataBlog(listItem) {
        var se = this;
        se.loadblogslug = false;
        se.loaddatadone = false;
        se.getbloglike().then(() => {
            listItem.forEach(element => {
                if (element.slug) {
                    se.bindItemSlug(element);
                }
                else {
                    se.bindItemBlog(element, false);
                }
            });
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
        if (!this.searchblog) {
            this.filterblog = false;
            this.textsearch = '';
            this.items = [];
            jquery__WEBPACK_IMPORTED_MODULE_13__('.div-cover').removeClass('glass-bloglist');
        }
        else {
            this.filterblog = true;
            setTimeout(() => {
                if (this.input) {
                    this.input.setFocus();
                }
            }, 100);
            jquery__WEBPACK_IMPORTED_MODULE_13__('.div-cover').addClass('glass-bloglist');
        }
    }
    clickCancel() {
        if (!this.input.value) {
            this.searchblog = !this.searchblog;
            this.filterblog = false;
            setTimeout(() => {
                if (this.input) {
                    this.input.setFocus();
                }
            }, 100);
            jquery__WEBPACK_IMPORTED_MODULE_13__('.div-cover').removeClass('glass-bloglist');
        }
        else {
            this.input.value = '';
            this.filterblog = false;
            jquery__WEBPACK_IMPORTED_MODULE_13__('.div-cover').removeClass('glass-bloglist');
            if (this.blogtrips && this.blogtrips.length > 0) {
                this.loaddatadone = true;
            }
        }
    }
    cancelInput() {
        this.filterblog = false;
        this.textsearch = '';
        this.items = [];
    }
    clickSearch(ev) {
        var se = this;
        se.page = 1;
        if (ev.detail.data) {
            se.filterblog = true;
            const val = se.input.value;
            let loadtype = se.gf.getParams('seemoreblog');
            se.gf.setParams(val, 'searchblogtext');
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/api/Data/SearchBlog?keyword=' + val + (se.regionname ? (+' ' + se.regionname) : '');
            se.gf.RequestApi('GET', url, {}, {}, 'searchblog', 'clickSearch').then((data) => {
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
                        se.content.scrollToTop(500);
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
            se.gf.setParams(null, 'itemslug');
            if (item.type == 1) {
                se.navCtrl.navigateForward('/blog/' + item.objectId);
            }
            else {
                se.zone.run(() => {
                    se.loadblogslug = true;
                    se.regionCode = item.slug;
                    se.filterblog = false;
                    se.searchblog = false;
                    se.loaddatadone = false;
                    se.items = [];
                    se.blogslugs = [];
                    se.regionnamesuggest = item.title;
                });
                se.loadBlogSlug(se.regionCode, 10);
            }
        }
    }
    loadBlogSlug(regioncode, pagesize) {
        var se = this;
        var options = {
            method: 'GET',
            url: 'https://svc3.ivivu.com/GetBlogByCategorySlug',
            qs: { slug: regioncode,
                pageindex: se.page,
                pagesize: pagesize
            },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            se.zone.run(() => {
                if (body && body.length > 0) {
                    var data = JSON.parse(body);
                    if (data.length > 0) {
                        var listBlogtemp = data;
                        if (listBlogtemp && listBlogtemp.length > 0) {
                            se.getbloglike().then(() => {
                                se.bindItemBlog(listBlogtemp, true);
                            });
                            if (se._infiniteScroll) {
                                se._infiniteScroll.target.complete();
                            }
                        }
                    }
                    else {
                        se.loaddatadone = true;
                        if (se._infiniteScroll) {
                            se._infiniteScroll.target.complete();
                        }
                    }
                }
            });
        });
    }
    bindItemBlog(listBlogtemp, loadlist) {
        var se = this;
        if (loadlist) {
            if (se.arrbloglike.length > 0) {
                var itemblog;
                for (let i = 0; i < listBlogtemp.length; i++) {
                    listBlogtemp[i].Date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].Date).format('HH:ss DD/MM/YYYY');
                    itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: false, itemslug: false };
                    for (let j = 0; j < se.arrbloglike.length; j++) {
                        if (se.arrbloglike[j].id == listBlogtemp[i].id) {
                            itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: true, itemslug: false };
                            break;
                        }
                    }
                    if (!se.gf.checkExistsItemInArray(se.blogslugs, itemblog, 'blog')) {
                        se.blogslugs.push(itemblog);
                    }
                }
            }
            else {
                for (let i = 0; i < listBlogtemp.length; i++) {
                    listBlogtemp[i].Date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].Date).format('HH:ss DD/MM/YYYY');
                    itemblog = { avatar: listBlogtemp[i].Avatar, date: listBlogtemp[i].Date, id: listBlogtemp[i].id, title: listBlogtemp[i].Title, url: listBlogtemp[i].Url, Like: false };
                    if (!se.gf.checkExistsItemInArray(se.blogslugs, itemblog, 'blog')) {
                        se.blogslugs.push(itemblog);
                    }
                }
            }
        }
        else {
            if (se.arrbloglike.length > 0) {
                var itemblog;
                listBlogtemp.date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp.created).format('HH:ss DD/MM/YYYY');
                let av = (listBlogtemp.avatars && listBlogtemp.avatars.length > 0) ? listBlogtemp.avatars[0] : 'https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-328x180.png';
                itemblog = { avatar: av, date: listBlogtemp.date, id: listBlogtemp.objectId, title: listBlogtemp.title, url: 'https://www.ivivu.com/blog/?p=' + listBlogtemp.objectId, Like: false, itemslug: false };
                for (let j = 0; j < se.arrbloglike.length; j++) {
                    if (se.arrbloglike[j].id == listBlogtemp.objectId) {
                        itemblog = { avatar: av, date: listBlogtemp.date, id: listBlogtemp.objectId, title: listBlogtemp.title, url: 'https://www.ivivu.com/blog/?p=' + listBlogtemp.objectId, Like: true, itemslug: false };
                        break;
                    }
                }
                if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
                    se.blogtrips.push(itemblog);
                }
            }
            else {
                listBlogtemp.date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp.created).format('HH:ss DD/MM/YYYY');
                let av = (listBlogtemp.avatars && listBlogtemp.avatars.length > 0) ? listBlogtemp.avatars[0] : 'https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-328x180.png';
                itemblog = { avatar: av, date: listBlogtemp.date, id: listBlogtemp.objectId, title: listBlogtemp.title, url: 'https://www.ivivu.com/blog/?p=' + listBlogtemp.objectId, Like: false, itemslug: false };
                if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
                    se.blogtrips.push(itemblog);
                }
            }
        }
        setTimeout(() => {
            se.loaddatadone = true;
            if (se.keyboard.isVisible) {
                se.keyboard.hide();
            }
        }, 200);
    }
    bindItemSlug(itemSlug) {
        var se = this;
        var itemblog;
        se.regionnamesuggest = itemSlug.title;
        itemSlug.date = moment__WEBPACK_IMPORTED_MODULE_7__(itemSlug.created).format('HH:ss DD/MM/YYYY');
        if (itemSlug.slug == 'du-lich-tu-tuc-da-lat') {
            let lenimage = itemSlug.avatars.length;
            itemblog = { avatar: null, date: itemSlug.date, id: itemSlug.objectId ? itemSlug.objectId : itemSlug.Id, title: itemSlug.title, url: 'https://www.ivivu.com/blog/?p=' + itemSlug.objectId, Like: false, avatar1: itemSlug.avatars[lenimage - 1], avatar2: itemSlug.avatars[lenimage - 2], avatar3: itemSlug.avatars[0], itemslug: true, slug: itemSlug.slug, totalPost: itemSlug.totalPost };
        }
        else {
            itemblog = { avatar: null, date: itemSlug.date, id: itemSlug.objectId ? itemSlug.objectId : itemSlug.Id, title: itemSlug.title, url: 'https://www.ivivu.com/blog/?p=' + itemSlug.objectId, Like: false, avatar1: itemSlug.avatars[0], avatar2: itemSlug.avatars[1], avatar3: itemSlug.avatars[2], itemslug: true, slug: itemSlug.slug, totalPost: itemSlug.totalPost };
        }
        if (!se.gf.checkExistsItemInArray(se.blogtrips, itemblog, 'blog')) {
            se.blogtrips.push(itemblog);
        }
        se.loaddatadone = true;
        if (se.keyboard.isVisible) {
            se.keyboard.hide();
        }
    }
    share(url) {
        this.socialSharing.share(null, null, null, url).then(() => {
        }).catch(() => {
        });
    }
    likeItemblog(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.getbloglikelocal(id, 1);
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
                });
            }
            else {
                se.navCtrl.navigateForward('/login');
            }
        });
    }
    unlikeItemblog(id) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.getbloglikelocal(id, 0);
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
                    se.zone.run(() => se.getbloglike());
                });
            }
            else {
                this.navCtrl.navigateForward('/login');
            }
        });
    }
    getbloglikelocal(id, value) {
        this.zone.run(() => {
            for (let i = 0; i < this.blogtrips.length; i++) {
                if (this.blogtrips[i].id == id) {
                    if (value == 1) {
                        this.blogtrips[i].Like = true;
                    }
                    else {
                        this.blogtrips[i].Like = false;
                    }
                    break;
                }
            }
            for (let i = 0; i < this.blogslugs.length; i++) {
                if (this.blogslugs[i].id == id) {
                    if (value == 1) {
                        this.blogslugs[i].Like = true;
                    }
                    else {
                        this.blogslugs[i].Like = false;
                    }
                    break;
                }
            }
        });
    }
    getbloglike() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            return new Promise((resolve, reject) => {
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
                                se.arrbloglike = [];
                                resolve(se.arrbloglike);
                            }
                            se.zone.run(() => {
                                se.arrbloglike = JSON.parse(body);
                                if (JSON.parse(body).msg) {
                                    se.arrbloglike = [];
                                }
                                resolve(se.arrbloglike);
                            });
                        });
                    }
                    else {
                        se.arrbloglike = [];
                        resolve(se.arrbloglike);
                    }
                });
            });
        });
    }
    doInfinite(infiniteScroll) {
        var se = this;
        se._infiniteScroll = infiniteScroll;
        if (se.loadblogslug) {
            setTimeout(() => {
                se.page = se.page + 1;
                se.loadBlogSlug(se.regionCode, 10);
            }, 10);
        }
        else {
            se.loadSearchBlogPaging();
        }
    }
    loadSearchBlogPaging() {
        var se = this;
        se.papesearch += 1;
        let val = se.gf.getParams('searchblogtext');
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/api/Data/SearchBlog?keyword=' + val + "&pageIndex=" + se.papesearch + "&pageSize=10&viewModel=true";
        se.gf.RequestApi('GET', url, {}, {}, 'bloglist', 'clickSearch').then((data) => {
            if (data && data.length > 0) {
                se.getbloglike().then(() => {
                    data.forEach(element => {
                        if (element.slug) {
                            se.bindItemSlug(element);
                        }
                        else {
                            se.bindItemBlog(element, false);
                        }
                    });
                    if (se._infiniteScroll) {
                        se._infiniteScroll.target.complete();
                    }
                });
            }
            else {
                if (se._infiniteScroll) {
                    se._infiniteScroll.target.complete();
                }
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputSearchBlog'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchBlogPage.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollArea'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], SearchBlogPage.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SearchBlogPage.prototype, "keyEvent", null);
SearchBlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchblog',
        template: __webpack_require__(/*! ./searchblog.page.html */ "./src/app/searchblog/searchblog.page.html"),
        styles: [__webpack_require__(/*! ./searchblog.page.scss */ "./src/app/searchblog/searchblog.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_book_service__WEBPACK_IMPORTED_MODULE_9__["SearchHotel"], _network_provider_service__WEBPACK_IMPORTED_MODULE_11__["NetworkProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Keyboard"]])
], SearchBlogPage);



/***/ })

}]);
//# sourceMappingURL=searchblog-searchblog-module.js.map