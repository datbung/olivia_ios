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

module.exports = ".cusimgreview-header .header-col {\n  text-align: center;\n  height: 56px;\n}\n.cusimgreview-header .a-center {\n  align-self: center;\n}\n.cusimgreview-header .div-back {\n  position: absolute;\n  height: 32px;\n  width: 32px;\n  left: 6px;\n  top: 12px;\n}\n.cusimgreview-header .div-header-title {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 10px;\n}\n.cusimgreview-header .text-hotelname {\n  font-size: 11px;\n  font-weight: 300;\n}\n.cusimgreview-content .p-16 {\n  padding: 16px;\n}\n.cusimgreview-content .p-top-16 {\n  padding-top: 16px;\n}\n.cusimgreview-content .img-item {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.cusimgreview-content .div-item {\n  position: relative;\n}\n.cusimgreview-content .div-item .div-img-cover {\n  height: 48px;\n  width: 100%;\n  position: absolute;\n  margin-right: 16px;\n  background-image: linear-gradient(to top, #000000, rgba(0, 0, 0, 0));\n  opacity: 0.3;\n  bottom: 3px;\n}\n.cusimgreview-content .div-item .div-text-over {\n  width: 100%;\n  position: absolute;\n  margin-right: 16px;\n  bottom: 16px;\n  height: 20px;\n  color: #fff;\n  text-align: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jdXNpbWdyZXZpZXcvY3VzaW1ncmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY3VzaW1ncmV2aWV3L2N1c2ltZ3Jldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNGUjtBRElJO0VBQ0ksa0JBQUE7QUNGUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDSFI7QURLSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSFI7QURLSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0hSO0FEUUk7RUFDSSxhQUFBO0FDTFI7QURPSTtFQUNJLGlCQUFBO0FDTFI7QURPSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDTFI7QURRSTtFQUNJLGtCQUFBO0FDTlI7QURRUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9FQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNOWjtBRFFRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDUFoiLCJmaWxlIjoic3JjL2FwcC9jdXNpbWdyZXZpZXcvY3VzaW1ncmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmN1c2ltZ3Jldmlldy1oZWFkZXJ7XG5cbiAgICAuaGVhZGVyLWNvbHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgfVxuICAgIC5hLWNlbnRlcntcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAvL21hcmdpbi10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICB9XG4gICAgLmRpdi1iYWNre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGxlZnQ6IDZweDtcbiAgICAgICAgdG9wOiAxMnB4O1xuICAgIH1cbiAgICAuZGl2LWhlYWRlci10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC50ZXh0LWhvdGVsbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbn1cblxuLmN1c2ltZ3Jldmlldy1jb250ZW50e1xuICAgIC5wLTE2e1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgICAucC10b3AtMTZ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIH1cbiAgICAuaW1nLWl0ZW17XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgXG4gICAgLmRpdi1pdGVte1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmRpdi1pbWctY292ZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAsIHJnYmEoMCwgMCwgMCwgMCkpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgYm90dG9tOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi10ZXh0LW92ZXJ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgLy9mb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmN1c2ltZ3Jldmlldy1oZWFkZXIgLmhlYWRlci1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTZweDtcbn1cbi5jdXNpbWdyZXZpZXctaGVhZGVyIC5hLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5jdXNpbWdyZXZpZXctaGVhZGVyIC5kaXYtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgbGVmdDogNnB4O1xuICB0b3A6IDEycHg7XG59XG4uY3VzaW1ncmV2aWV3LWhlYWRlciAuZGl2LWhlYWRlci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuLmN1c2ltZ3Jldmlldy1oZWFkZXIgLnRleHQtaG90ZWxuYW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uY3VzaW1ncmV2aWV3LWNvbnRlbnQgLnAtMTYge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmN1c2ltZ3Jldmlldy1jb250ZW50IC5wLXRvcC0xNiB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLmN1c2ltZ3Jldmlldy1jb250ZW50IC5pbWctaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5jdXNpbWdyZXZpZXctY29udGVudCAuZGl2LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY3VzaW1ncmV2aWV3LWNvbnRlbnQgLmRpdi1pdGVtIC5kaXYtaW1nLWNvdmVyIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMDAwMDAsIHJnYmEoMCwgMCwgMCwgMCkpO1xuICBvcGFjaXR5OiAwLjM7XG4gIGJvdHRvbTogM3B4O1xufVxuLmN1c2ltZ3Jldmlldy1jb250ZW50IC5kaXYtaXRlbSAuZGl2LXRleHQtb3ZlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgYm90dG9tOiAxNnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNnB4O1xufSJdfQ== */"

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