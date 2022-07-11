(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cusimgreview-cusimgreview-module"],{

/***/ "./src/app/cusimgreview/cusimgreview.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cusimgreview/cusimgreview.module.ts ***!
  \*****************************************************/
/*! exports provided: CusimgreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusimgreviewPageModule", function() { return CusimgreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cusimgreview_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cusimgreview.page */ "./src/app/cusimgreview/cusimgreview.page.ts");








const routes = [
    {
        path: '',
        component: _cusimgreview_page__WEBPACK_IMPORTED_MODULE_7__["CusimgreviewPage"]
    }
];
let CusimgreviewPageModule = class CusimgreviewPageModule {
};
CusimgreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["IonicImageLoader"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cusimgreview_page__WEBPACK_IMPORTED_MODULE_7__["CusimgreviewPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], CusimgreviewPageModule);



/***/ }),

/***/ "./src/app/cusimgreview/cusimgreview.page.html":
/*!*****************************************************!*\
  !*** ./src/app/cusimgreview/cusimgreview.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"cusimgreview-header\">\n  <ion-row>\n    <ion-col class=\"header-col\">\n      <div class=\"a-center\">\n        <div class=\"div-back\"(click)=\"goback()\">\n          <img class=\"img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        \n        <div class=\"div-header-title\">\n          <div><label class=\"text-title\">Ảnh từ khách hàng</label></div>\n          <div><label class=\"text-hotelname\" *ngIf=\"fromhotel\">{{hotelName}}</label></div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content class=\"cusimgreview-content\">\n  <div *ngIf=\"loaddatadone else loadskeleton\" class=\"p-16\">\n    <div *ngFor=\"let item of listImages; let idx = index\" [ngClass]=\"idx == 0 ? '' : 'p-top-16'\">\n      <div class=\"div-item\">\n        <!-- <img class=\"img-item\" src=\"{{item.imageUrl}}\" /> -->\n        <img-loader class=\"img-item\" src=\"{{item.imageUrl}}\" useImg [spinner]=\"true\"></img-loader>\n        <div class=\"div-img-cover\"></div>\n        <div *ngIf=\"item.description && fromhotel\" class=\"div-text-over\">{{item.description}}</div>\n      </div>\n      \n    </div>\n  </div>\n\n  <ng-template #loadskeleton>\n    <div style=\"margin-top:30px\">\n      <ion-list lines=\"none\" *ngFor=\"let item of listsk\" >\n        <div >\n          <ion-item style=\"--inner-padding-end: 16px\">\n            <!-- <img (click)=\"itemblogclick(item)\" class=\"img-blog\"\n              src={{item.avatar}}> -->\n              <ion-skeleton-text animated style=\"width: 100%;margin: 0;\n              width: 100% !important;\n              height: 192px !important;\n              object-fit: cover\" ></ion-skeleton-text>\n          </ion-item>\n        </div>\n      </ion-list>\n    </div>\n  </ng-template>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cusimgreview/cusimgreview.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/cusimgreview/cusimgreview.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".cusimgreview-header .header-col {\n  text-align: center;\n  height: 56px;\n}\n.cusimgreview-header .a-center {\n  align-self: center;\n}\n.cusimgreview-header .div-back {\n  position: absolute;\n  height: 32px;\n  width: 32px;\n  left: 6px;\n  top: 12px;\n}\n.cusimgreview-header .div-header-title {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 10px;\n}\n.cusimgreview-header .text-hotelname {\n  font-size: 11px;\n  font-weight: 300;\n}\n.cusimgreview-content .p-16 {\n  padding: 16px;\n}\n.cusimgreview-content .p-top-16 {\n  padding-top: 16px;\n}\n.cusimgreview-content .img-item {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.cusimgreview-content .div-item {\n  position: relative;\n}\n.cusimgreview-content .div-item .div-img-cover {\n  height: 48px;\n  width: 100%;\n  position: absolute;\n  margin-right: 16px;\n  background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));\n  opacity: 0.3;\n  bottom: 3px;\n}\n.cusimgreview-content .div-item .div-text-over {\n  width: 100%;\n  position: absolute;\n  margin-right: 16px;\n  bottom: 16px;\n  height: 20px;\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvY3VzaW1ncmV2aWV3L2N1c2ltZ3Jldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2N1c2ltZ3Jldmlldy9jdXNpbWdyZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDRlI7QURJSTtFQUNJLGtCQUFBO0FDRlI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0hSO0FES0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0hSO0FES0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRFFJO0VBQ0ksYUFBQTtBQ0xSO0FET0k7RUFDSSxpQkFBQTtBQ0xSO0FET0k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0xSO0FEUUk7RUFDSSxrQkFBQTtBQ05SO0FEUVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvRUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTlo7QURRUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1BaIiwiZmlsZSI6InNyYy9hcHAvY3VzaW1ncmV2aWV3L2N1c2ltZ3Jldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jdXNpbWdyZXZpZXctaGVhZGVye1xuXG4gICAgLmhlYWRlci1jb2x7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgIH1cbiAgICAuYS1jZW50ZXJ7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgLy9tYXJnaW4tdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgfVxuICAgIC5kaXYtYmFja3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBsZWZ0OiA2cHg7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICB9XG4gICAgLmRpdi1oZWFkZXItdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAudGV4dC1ob3RlbG5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG59XG5cbi5jdXNpbWdyZXZpZXctY29udGVudHtcbiAgICAucC0xNntcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG4gICAgLnAtdG9wLTE2e1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICB9XG4gICAgLmltZy1pdGVte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIFxuICAgIC5kaXYtaXRlbXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5kaXYtaW1nLWNvdmVye1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwMDAwLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgIGJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtdGV4dC1vdmVye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIC8vZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5jdXNpbWdyZXZpZXctaGVhZGVyIC5oZWFkZXItY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDU2cHg7XG59XG4uY3VzaW1ncmV2aWV3LWhlYWRlciAuYS1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY3VzaW1ncmV2aWV3LWhlYWRlciAuZGl2LWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGxlZnQ6IDZweDtcbiAgdG9wOiAxMnB4O1xufVxuLmN1c2ltZ3Jldmlldy1oZWFkZXIgLmRpdi1oZWFkZXItdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cbi5jdXNpbWdyZXZpZXctaGVhZGVyIC50ZXh0LWhvdGVsbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmN1c2ltZ3Jldmlldy1jb250ZW50IC5wLTE2IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jdXNpbWdyZXZpZXctY29udGVudCAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5jdXNpbWdyZXZpZXctY29udGVudCAuaW1nLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY3VzaW1ncmV2aWV3LWNvbnRlbnQgLmRpdi1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmN1c2ltZ3Jldmlldy1jb250ZW50IC5kaXYtaXRlbSAuZGl2LWltZy1jb3ZlciB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDAwMDAwLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgb3BhY2l0eTogMC4zO1xuICBib3R0b206IDNweDtcbn1cbi5jdXNpbWdyZXZpZXctY29udGVudCAuZGl2LWl0ZW0gLmRpdi10ZXh0LW92ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn0iXX0= */"
=======
module.exports = ".cusimgreview-header .header-col {\n  text-align: center;\n  height: 56px;\n}\n.cusimgreview-header .a-center {\n  align-self: center;\n}\n.cusimgreview-header .div-back {\n  position: absolute;\n  height: 32px;\n  width: 32px;\n  left: 6px;\n  top: 12px;\n}\n.cusimgreview-header .div-header-title {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 10px;\n}\n.cusimgreview-header .text-hotelname {\n  font-size: 11px;\n  font-weight: 300;\n}\n.cusimgreview-content .p-16 {\n  padding: 16px;\n}\n.cusimgreview-content .p-top-16 {\n  padding-top: 16px;\n}\n.cusimgreview-content .img-item {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.cusimgreview-content .div-item {\n  position: relative;\n}\n.cusimgreview-content .div-item .div-img-cover {\n  height: 48px;\n  width: 100%;\n  position: absolute;\n  margin-right: 16px;\n  background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));\n  opacity: 0.3;\n  bottom: 3px;\n}\n.cusimgreview-content .div-item .div-text-over {\n  width: 100%;\n  position: absolute;\n  margin-right: 16px;\n  bottom: 16px;\n  height: 20px;\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2N1c2ltZ3Jldmlldy9jdXNpbWdyZXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9jdXNpbWdyZXZpZXcvY3VzaW1ncmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FESUk7RUFDSSxrQkFBQTtBQ0ZSO0FES0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNIUjtBREtJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNIUjtBREtJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSFI7QURRSTtFQUNJLGFBQUE7QUNMUjtBRE9JO0VBQ0ksaUJBQUE7QUNMUjtBRE9JO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNMUjtBRFFJO0VBQ0ksa0JBQUE7QUNOUjtBRFFRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0VBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ05aO0FEUVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNQWiIsImZpbGUiOiJzcmMvYXBwL2N1c2ltZ3Jldmlldy9jdXNpbWdyZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY3VzaW1ncmV2aWV3LWhlYWRlcntcblxuICAgIC5oZWFkZXItY29se1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNTZweDtcbiAgICB9XG4gICAgLmEtY2VudGVye1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIC8vbWFyZ2luLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIH1cbiAgICAuZGl2LWJhY2t7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgbGVmdDogNnB4O1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgfVxuICAgIC5kaXYtaGVhZGVyLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICB9XG4gICAgLnRleHQtaG90ZWxuYW1le1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxufVxuXG4uY3VzaW1ncmV2aWV3LWNvbnRlbnR7XG4gICAgLnAtMTZ7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5wLXRvcC0xNntcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5pbWctaXRlbXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICBcbiAgICAuZGl2LWl0ZW17XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuZGl2LWltZy1jb3ZlcntcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMDAwMCwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXRleHQtb3ZlcntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAvL2ZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuY3VzaW1ncmV2aWV3LWhlYWRlciAuaGVhZGVyLWNvbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuLmN1c2ltZ3Jldmlldy1oZWFkZXIgLmEtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmN1c2ltZ3Jldmlldy1oZWFkZXIgLmRpdi1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDMycHg7XG4gIHdpZHRoOiAzMnB4O1xuICBsZWZ0OiA2cHg7XG4gIHRvcDogMTJweDtcbn1cbi5jdXNpbWdyZXZpZXctaGVhZGVyIC5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG4uY3VzaW1ncmV2aWV3LWhlYWRlciAudGV4dC1ob3RlbG5hbWUge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jdXNpbWdyZXZpZXctY29udGVudCAucC0xNiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY3VzaW1ncmV2aWV3LWNvbnRlbnQgLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uY3VzaW1ncmV2aWV3LWNvbnRlbnQgLmltZy1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmN1c2ltZ3Jldmlldy1jb250ZW50IC5kaXYtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jdXNpbWdyZXZpZXctY29udGVudCAuZGl2LWl0ZW0gLmRpdi1pbWctY292ZXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMDAwMCwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIG9wYWNpdHk6IDAuMztcbiAgYm90dG9tOiAzcHg7XG59XG4uY3VzaW1ncmV2aWV3LWNvbnRlbnQgLmRpdi1pdGVtIC5kaXYtdGV4dC1vdmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBib3R0b206IDE2cHg7XG4gIGhlaWdodDogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE2cHg7XG59Il19 */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/cusimgreview/cusimgreview.page.ts":
/*!***************************************************!*\
  !*** ./src/app/cusimgreview/cusimgreview.page.ts ***!
  \***************************************************/
/*! exports provided: CusimgreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusimgreviewPage", function() { return CusimgreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");







let CusimgreviewPage = class CusimgreviewPage {
    constructor(navCtrl, searchhotel, gf, storage, _foodservice, zone) {
        this.navCtrl = navCtrl;
        this.searchhotel = searchhotel;
        this.gf = gf;
        this.storage = storage;
        this._foodservice = _foodservice;
        this.zone = zone;
        this.listsk = [1, 2, 3, 4, 5];
        this.listImages = [];
        this.listImagesTemp = [];
        this.loaddatadone = false;
        this.fromhotel = true;
        this.totalItem = 10;
        this.indexItem = 5;
        var se = this;
        setTimeout(() => {
            se.loaddatadone = true;
        }, 600);
        if (_foodservice.listimagereview && _foodservice.listimagereview.length > 0) {
            se.listImages = _foodservice.listimagereview;
            for (let index = 0; index < se.listImages.length; index++) {
                const element = se.listImages[index];
                if (element.imageUrl.toLocaleString().trim().indexOf("vertical") != -1) {
                    element.imageUrl = element.imageUrl.replace("800x600", "600x800");
                }
            }
            se.fromhotel = false;
        }
        else {
            se.storage.get('hotelimagereviews_' + se.searchhotel.hotelID).then((data) => {
                if (data) {
                    for (let index = 0; index < 5; index++) {
                        const element = data[index];
                        se.listImages.push(element);
                    }
                    se.listImagesTemp = data;
                    for (let index = 0; index < se.listImages.length; index++) {
                        const element = se.listImages[index];
                        if (element.imageUrl.toLocaleString().trim().indexOf("vertical") != -1) {
                            element.imageUrl = element.imageUrl.replace("800x600", "600x800");
                        }
                    }
                    se.fromhotel = true;
                    se.hotelName = searchhotel.hotelName;
                }
            });
        }
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    doInfinite(infiniteScroll) {
        this.zone.run(() => {
            if (this.totalItem < this.listImagesTemp.length - 1) {
                for (let index = this.indexItem; index < this.totalItem; index++) {
                    const element = this.listImagesTemp[index];
                    this.listImages.push(element);
                }
                this.indexItem = this.indexItem + 5;
                this.totalItem = this.totalItem + 5;
                infiniteScroll.target.complete();
            }
            else {
                infiniteScroll.target.complete();
            }
        });
    }
};
CusimgreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cusimgreview',
        template: __webpack_require__(/*! ./cusimgreview.page.html */ "./src/app/cusimgreview/cusimgreview.page.html"),
        styles: [__webpack_require__(/*! ./cusimgreview.page.scss */ "./src/app/cusimgreview/cusimgreview.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_6__["foodService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], CusimgreviewPage);



/***/ })

}]);
//# sourceMappingURL=cusimgreview-cusimgreview-module.js.map