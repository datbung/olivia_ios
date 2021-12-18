(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodreview-foodreview-module"],{

/***/ "./src/app/foodreview/foodreview.module.ts":
/*!*************************************************!*\
  !*** ./src/app/foodreview/foodreview.module.ts ***!
  \*************************************************/
/*! exports provided: FoodreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodreviewPageModule", function() { return FoodreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodreview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodreview.page */ "./src/app/foodreview/foodreview.page.ts");







const routes = [
    {
        path: '',
        component: _foodreview_page__WEBPACK_IMPORTED_MODULE_6__["FoodreviewPage"]
    }
];
let FoodreviewPageModule = class FoodreviewPageModule {
};
FoodreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodreview_page__WEBPACK_IMPORTED_MODULE_6__["FoodreviewPage"]]
    })
], FoodreviewPageModule);



/***/ }),

/***/ "./src/app/foodreview/foodreview.page.html":
/*!*************************************************!*\
  !*** ./src/app/foodreview/foodreview.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"foodreview-header\">\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center;display: flex\">\n          <div class=\"title-header\">\n            <label class=\"text-title\" *ngIf=\"!order.isDinner\">Đánh giá bữa trưa</label>\n            <label class=\"text-title\" *ngIf=\"order.isDinner\">Đánh giá nguyên liệu bữa tối</label>\n          </div>\n              <div class=\"div-close\" (click)=\"goback()\">\n                  <img class=\"img-close\" src=\"./assets/ic_close.svg\" >\n              </div>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div-section-menu\">\n      <div class=\"div-menu-item\" *ngIf=\"(menus.length >0 && loaddatadone) else loadsk\">\n          <div class=\"menu-item\" *ngFor=\"let menu of menus; let idx = index\">\n            <div [ngClass]=\"menu.allowReview  && !menu.hasreview && !menu.remove ? 'd-flex' : 'd-flex cls-not-allowreview'\">\n                <div class=\"div-left\">\n                    <div class=\"text-day\" *ngIf=\"idx==0\">Thứ 2</div>\n                    <div class=\"text-day\" *ngIf=\"idx==1\">Thứ 3</div>\n                    <div class=\"text-day\" *ngIf=\"idx==2\">Thứ 4</div>\n                    <div class=\"text-day\" *ngIf=\"idx==3\">Thứ 5</div>\n                    <div class=\"text-day\" *ngIf=\"idx==4\">Thứ 6</div>\n  \n                    <div class=\"text-sub-day\" *ngIf=\"idx==0\">{{textmon}}</div>\n                    <div class=\"text-sub-day\" *ngIf=\"idx==1\">{{texttue}}</div>\n                    <div class=\"text-sub-day\" *ngIf=\"idx==2\">{{textwed}}</div>\n                    <div class=\"text-sub-day\" *ngIf=\"idx==3\">{{textthu}}</div>\n                    <div class=\"text-sub-day\" *ngIf=\"idx==4\">{{textfri}}</div>\n                  </div>\n                  <div *ngIf=\"!menu.isdayoff else dayoff\">\n                    <div class=\"div-right\">\n                      <div *ngFor=\"let item of menu.mainmenu\">\n                        <!-- <div [ngClass]=\"idx1==0 ? 'text-forecipe-1' : ( (idx1 ==1 || idx1 ==2) ? 'text-forecipe-2' : 'text-forecipe-3'  ) \">{{item.name}}</div> -->\n                        <div class=\"text-forecipe-1\">{{item.name}}</div>\n                      </div>\n    \n                      <div *ngFor=\"let item1 of menu.submenu\">\n                          <div class=\"text-forecipe-2\">{{item1.name}}</div>\n                      </div>\n    \n                      <div *ngFor=\"let item2 of menu.othermenu\">\n                          <div class=\"text-forecipe-3\">{{item2.name}}</div>\n                      </div>\n\n                      <div *ngIf=\"menu.restaurentName\" class=\"restaurent-name\">{{ menu.restaurentName }}</div>\n                    </div>\n                  </div>\n\n                  <ng-template #dayoff>\n                    <div class=\"div-right div-just-center\">\n                      <div class=\"text-forecipe-1\">Nghỉ</div>\n                    </div>\n                  </ng-template>                </div>\n            <div class=\"text-review\" *ngIf=\"(menu && menu.hasreview) else hasnotreview\"  (click)=\"reviewMenu(menu,idx+2)\">Cám ơn bạn đã đánh giá</div>\n            <ng-template #hasnotreview>\n              <div *ngIf=\"menu.allowReview\">\n                <button ion-button round outline class=\"button btn-review\" (click)=\"reviewMenu(menu,idx+2)\">Viết đánh giá</button>\n              </div>\n            </ng-template>\n\n            <div [ngClass]=\"idx == menus.length-1 ? '' : 'div-line'\"></div>\n          </div>\n  \n        \n        </div>\n\n        <ng-template #loadsk>\n          <div class=\"menu-item\" *ngFor=\"let menu of itemsks; let idx = index\">\n              <div class=\"d-flex\">\n                    <ion-skeleton-text animated class=\"text-menu\" style=\"width: 80px;height: 80px;border-radius: 80px;margin-right: 16px\">\n                    </ion-skeleton-text>\n\n                    <div class=\"div-right\">\n                        <ion-skeleton-text animated style=\"width: 200px;height: 16px; margin-top: 4px\">\n                          </ion-skeleton-text>\n\n                          <ion-skeleton-text animated style=\"width: 180px;height: 16px;margin-top: 4px\">\n                            </ion-skeleton-text>\n\n                            <ion-skeleton-text animated style=\"width: 160px;height: 16px;margin-top: 4px\">\n                              </ion-skeleton-text>\n\n                              <ion-skeleton-text animated style=\"width: 100px;height: 16px;margin-top: 4px\">\n                                </ion-skeleton-text>\n\n                                <ion-skeleton-text animated style=\"width: 100px;height: 16px;margin-top: 4px\">\n                                  </ion-skeleton-text>\n                    </div>\n              </div>\n              <ion-skeleton-text animated style=\"width: 100%;height: 32px; margin-top: 8px\">\n                </ion-skeleton-text>\n  \n              <div [ngClass]=\"idx == menus.length-1 ? '' : 'div-line'\"></div>\n            </div>\n      </ng-template>\n  </div>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/foodreview/foodreview.page.scss":
/*!*************************************************!*\
  !*** ./src/app/foodreview/foodreview.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foodreview-header .title-header {\n  padding-top: 12px;\n  font-size: 20px;\n  font-weight: bold;\n  padding-left: 40px;\n  width: 100%;\n}\n.foodreview-header .div-close {\n  width: 12%;\n}\n.div-section-menu .div-menu-item .menu-item {\n  margin-top: 16px;\n}\n.div-section-menu .div-menu-item .menu-item .div-just-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-section-menu .div-menu-item .d-flex {\n  display: flex;\n  align-items: center;\n}\n.div-section-menu .div-menu-item .div-img-menu {\n  width: 100%;\n  height: 184px;\n  position: relative;\n}\n.div-section-menu .div-menu-item .div-img-menu .img-menu {\n  height: 184px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px 4px 0 0;\n  position: absolute;\n}\n.div-section-menu .p-l-0 {\n  padding-left: 0px !important;\n  width: 32px !important;\n}\n.div-section-menu .p-r-0 {\n  padding-left: 0 !important;\n  width: 28px !important;\n}\n.div-section-menu .text-menu {\n  font-size: 36px;\n  font-weight: 600;\n  letter-spacing: -0.25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-section-menu .text-arrow {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.25px;\n  margin: 0 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-section-menu .text-week {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n  padding-left: 16px;\n  width: 60px;\n  padding-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.div-section-menu .div-left {\n  display: flex;\n  flex-direction: column;\n  background: #26bed6;\n  border-radius: 80px;\n  color: #fff;\n  width: 80px;\n  height: 80px;\n  margin-right: 16px;\n  justify-content: center;\n  text-align: center;\n}\n.div-section-menu .div-left .text-day {\n  font-size: 18px;\n  font-weight: 300;\n}\n.div-section-menu .div-left .text-sub-day {\n  padding-top: 4px;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-section-menu .div-right .text-forecipe-1 {\n  color: #000;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 21px;\n}\n.div-section-menu .div-right .text-forecipe-2 {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 21px;\n}\n.div-section-menu .div-right .text-forecipe-3 {\n  color: #828282;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 21px;\n}\n.div-section-menu .div-right .restaurent-name {\n  color: #828282;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 21px;\n}\n.div-section-menu .div-line {\n  border-bottom: solid 1px #f2f2f2;\n  margin: 16px 0;\n}\n.div-section-menu .text-review {\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  color: #000;\n  font-weight: 300;\n  padding-top: 8px;\n}\n.cls-not-allowreview {\n  opacity: 0.5;\n}\n.d-flex {\n  display: flex;\n  position: relative;\n}\n.btn-review {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 100%;\n  height: 34px !important;\n  font-size: 16px !important;\n  margin: 0;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZm9vZHJldmlldy9mb29kcmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZHJldmlldy9mb29kcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRFI7QURHSTtFQUNJLFVBQUE7QUNEUjtBRE9RO0VBQ0ksZ0JBQUE7QUNKWjtBRE1ZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNKaEI7QURPUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0xaO0FET1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTFo7QURPWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNMaEI7QURVSTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7QUNSUjtBRFVJO0VBQ0ksMEJBQUE7RUFDQSxzQkFBQTtBQ1JSO0FEVUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDVFI7QURXSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDVFI7QURZSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ1ZSO0FEYUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDWFI7QURhUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ1haO0FEYVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1haO0FEZ0JRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZFo7QURnQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2RaO0FEZ0JRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZFo7QURnQlE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNkWjtBRGlCSTtFQUNJLGdDQUFBO0VBQ0EsY0FBQTtBQ2ZSO0FEaUJJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2ZSO0FEa0JBO0VBQ0ksWUFBQTtBQ2ZKO0FEaUJBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDZEo7QURpQkE7RUFFUSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDZlIiLCJmaWxlIjoic3JjL2FwcC9mb29kcmV2aWV3L2Zvb2RyZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb29kcmV2aWV3LWhlYWRlcntcclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5kaXYtY2xvc2V7XHJcbiAgICAgICAgd2lkdGg6IDEyJTtcclxuICAgIH1cclxufVxyXG5cclxuLmRpdi1zZWN0aW9uLW1lbnV7XHJcbiAgICAuZGl2LW1lbnUtaXRlbXtcclxuICAgICAgICAubWVudS1pdGVte1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRpdi1qdXN0LWNlbnRlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmQtZmxleHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1pbWctbWVudXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTg0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5pbWctbWVudXtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTg0cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC5wLWwtMHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucC1yLTB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDI4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50ZXh0LW1lbnV7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtYXJyb3d7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnRleHQtd2Vla3tcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1sZWZ0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC50ZXh0LWRheXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1zdWItZGF5e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5kaXYtcmlnaHR7XHJcbiAgICAgICAgLnRleHQtZm9yZWNpcGUtMXtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWZvcmVjaXBlLTJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWZvcmVjaXBlLTN7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmVzdGF1cmVudC1uYW1le1xyXG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGl2LWxpbmV7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMmYyZjI7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yZXZpZXd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG59XHJcbi5jbHMtbm90LWFsbG93cmV2aWV3e1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5kLWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYnRuLXJldmlld1xyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfSIsIi5mb29kcmV2aWV3LWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9vZHJldmlldy1oZWFkZXIgLmRpdi1jbG9zZSB7XG4gIHdpZHRoOiAxMiU7XG59XG5cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtbWVudS1pdGVtIC5tZW51LWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLmRpdi1tZW51LWl0ZW0gLm1lbnUtaXRlbSAuZGl2LWp1c3QtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LW1lbnUtaXRlbSAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtbWVudS1pdGVtIC5kaXYtaW1nLW1lbnUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLmRpdi1tZW51LWl0ZW0gLmRpdi1pbWctbWVudSAuaW1nLW1lbnUge1xuICBoZWlnaHQ6IDE4NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAucC1sLTAge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLnAtci0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAudGV4dC1tZW51IHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAudGV4dC1hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI1cHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC50ZXh0LXdlZWsge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICMyNmJlZDY7XG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LWxlZnQgLnRleHQtZGF5IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLmRpdi1sZWZ0IC50ZXh0LXN1Yi1kYXkge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LXJpZ2h0IC50ZXh0LWZvcmVjaXBlLTEge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtcmlnaHQgLnRleHQtZm9yZWNpcGUtMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LXJpZ2h0IC50ZXh0LWZvcmVjaXBlLTMge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtcmlnaHQgLnJlc3RhdXJlbnQtbmFtZSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLmRpdi1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMmYyZjI7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLnRleHQtcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5jbHMtbm90LWFsbG93cmV2aWV3IHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuLXJldmlldyB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foodreview/foodreview.page.ts":
/*!***********************************************!*\
  !*** ./src/app/foodreview/foodreview.page.ts ***!
  \***********************************************/
/*! exports provided: FoodreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodreviewPage", function() { return FoodreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _foodreviewdetail_foodreviewdetail_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../foodreviewdetail/foodreviewdetail.page */ "./src/app/foodreviewdetail/foodreviewdetail.page.ts");












let FoodreviewPage = class FoodreviewPage {
    constructor(zone, camera, navCtrl, file, imagePicker, storage, _foodService, modalCtrl) {
        this.zone = zone;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.file = file;
        this.imagePicker = imagePicker;
        this.storage = storage;
        this._foodService = _foodService;
        this.modalCtrl = modalCtrl;
        this.star1Active = 0;
        this.imageResponse = [];
        this.reviews = [];
        this.loaddatadone = false;
        this.itemsks = [1, 2, 3, 4, 5];
        this.arrbkgday = [];
        this.order = _foodService.itemOrder;
        this.orderdetail = _foodService.itemOrderBookingDetail;
        if (_foodService.itemOrderBookingDetail.applyFor) {
            this.arrbkgday = _foodService.itemOrderBookingDetail.applyFor.split('|');
        }
        this.storage.get('jti').then((uid) => {
            if (uid) {
                this.memberid = uid;
                this.loadReview();
                this.textmon = moment__WEBPACK_IMPORTED_MODULE_10__(this.orderdetail.startDate).format("DD.MM");
                this.texttue = moment__WEBPACK_IMPORTED_MODULE_10__(moment__WEBPACK_IMPORTED_MODULE_10__(this.orderdetail.startDate).add('days', 1)).format("DD.MM");
                this.textwed = moment__WEBPACK_IMPORTED_MODULE_10__(moment__WEBPACK_IMPORTED_MODULE_10__(this.orderdetail.startDate).add('days', 2)).format("DD.MM");
                this.textthu = moment__WEBPACK_IMPORTED_MODULE_10__(moment__WEBPACK_IMPORTED_MODULE_10__(this.orderdetail.startDate).add('days', 3)).format("DD.MM");
                this.textfri = moment__WEBPACK_IMPORTED_MODULE_10__(moment__WEBPACK_IMPORTED_MODULE_10__(this.orderdetail.startDate).add('days', 4)).format("DD.MM");
            }
            else {
                this.reviews = [];
            }
        });
        this.loadmenu();
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    loadReview() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + "/api/FOReview/GetReviewBookingMember?bookingCode=" + se.order.bookingCode + "&comboId=" + se.orderdetail.comboId,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                token: "584f470f-7a45-4793-a136-0084fadea81c",
                memberId: se.memberid
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (body) {
                se.loaddatadone = true;
                var result = JSON.parse(body);
                if (result.response) {
                    se.reviews = result.response;
                    let dayofweek = 2;
                    se.menus.forEach(element => {
                        let itemhasreview = se.reviews.filter((el) => {
                            return dayofweek == el.weekdayId;
                        });
                        if (itemhasreview && itemhasreview.length > 0) {
                            element.hasreview = true;
                            element.reviewed = itemhasreview[0];
                        }
                        else {
                            element.hasreview = false;
                        }
                        dayofweek++;
                    });
                }
            }
        });
    }
    checkAllowReviewMenu(menu, indexDayofWeek) {
        var se = this, menuremove = false;
        if (this.arrbkgday && this.arrbkgday.length > 0) {
            menuremove = this.arrbkgday[indexDayofWeek] == "0";
        }
        let menustartdate = moment__WEBPACK_IMPORTED_MODULE_10__(se.orderdetail.startDate).add(indexDayofWeek, 'days');
        let timediffhours = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_10__(menustartdate), 'hours');
        let timediffdays = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_10__(se.orderdetail.endDate), 'days');
        let paid = (se.order.status == 3) ? true : false;
        se.order.paid = paid;
        if (se.orderdetail.isDinner) {
            menu.allowReview = (timediffhours >= 18 && paid && !menuremove) ? true : false;
            menu.titlemenu = "Nguyên liệu tối thứ " + (indexDayofWeek * 1 + 2) + ", " + moment__WEBPACK_IMPORTED_MODULE_10__(se.orderdetail.startDate).add(indexDayofWeek, 'days').format("DD.MM");
        }
        else {
            menu.allowReview = (timediffhours >= 11 && paid && !menuremove) ? true : false;
            menu.titlemenu = "Bữa trưa thứ " + (indexDayofWeek * 1 + 2) + ", " + moment__WEBPACK_IMPORTED_MODULE_10__(se.orderdetail.startDate).add(indexDayofWeek, 'days').format("DD.MM");
        }
    }
    loadmenu() {
        var se = this;
        se.menus = [];
        se.menuoff = [];
        let arrremove = se.orderdetail.applyFor.split('|');
        if (se.orderdetail.menus[0]) {
            se.orderdetail.menus[0].hasreview = false;
            se.checkAllowReviewMenu(se.orderdetail.menus[0], 0);
            se.orderdetail.menus[0].remove = !arrremove[0];
            if (se.orderdetail.menus[0].restaurentName && se.orderdetail.menus[0].restaurentName.indexOf('<br/>')) {
                se.orderdetail.menus[0].restaurentName = se.orderdetail.menus[0].restaurentName.replace('<br/>', '');
            }
            se.menus.push(se.orderdetail.menus[0]);
        }
        else {
            se.menus.push({ id: 1, isdayoff: true });
        }
        if (se.orderdetail.menus[1]) {
            se.orderdetail.menus[1].hasreview = false;
            se.checkAllowReviewMenu(se.orderdetail.menus[1], 1);
            se.orderdetail.menus[1].remove = !arrremove[1];
            if (se.orderdetail.menus[1].restaurentName && se.orderdetail.menus[1].restaurentName.indexOf('<br/>')) {
                se.orderdetail.menus[1].restaurentName = se.orderdetail.menus[1].restaurentName.replace('<br/>', '');
            }
            se.menus.push(se.orderdetail.menus[1]);
        }
        else {
            se.menus.push({ id: 2, isdayoff: true });
        }
        if (se.orderdetail.menus[2]) {
            se.orderdetail.menus[2].hasreview = false;
            se.checkAllowReviewMenu(se.orderdetail.menus[2], 2);
            se.orderdetail.menus[2].remove = !arrremove[2];
            if (se.orderdetail.menus[2].restaurentName && se.orderdetail.menus[2].restaurentName.indexOf('<br/>')) {
                se.orderdetail.menus[2].restaurentName = se.orderdetail.menus[2].restaurentName.replace('<br/>', '');
            }
            se.menus.push(se.orderdetail.menus[2]);
        }
        else {
            se.menus.push({ id: 3, isdayoff: true });
        }
        if (se.orderdetail.menus[3]) {
            se.orderdetail.menus[3].hasreview = false;
            se.checkAllowReviewMenu(se.orderdetail.menus[3], 3);
            se.orderdetail.menus[3].remove = !arrremove[3];
            if (se.orderdetail.menus[3].restaurentName && se.orderdetail.menus[3].restaurentName.indexOf('<br/>')) {
                se.orderdetail.menus[3].restaurentName = se.orderdetail.menus[3].restaurentName.replace('<br/>', '');
            }
            se.menus.push(se.orderdetail.menus[3]);
        }
        else {
            se.menus.push({ id: 4, isdayoff: true });
        }
        if (se.orderdetail.menus[4]) {
            se.orderdetail.menus[4].hasreview = false;
            se.checkAllowReviewMenu(se.orderdetail.menus[4], 4);
            se.orderdetail.menus[4].remove = !arrremove[4];
            if (se.orderdetail.menus[4].restaurentName && se.orderdetail.menus[4].restaurentName.indexOf('<br/>')) {
                se.orderdetail.menus[4].restaurentName = se.orderdetail.menus[4].restaurentName.replace('<br/>', '');
            }
            se.menus.push(se.orderdetail.menus[4]);
        }
        else {
            se.menus.push({ id: 5, isdayoff: true });
        }
        if (se.menus && se.menus.length > 0) {
            se.menus.forEach(mn => {
                se.orderMenu(mn);
            });
        }
    }
    orderMenu(menu) {
        this.zone.run(() => {
            menu.mainmenu = [];
            menu.submenu = [];
            menu.othermenu = [];
            if (menu.forecipe && menu.forecipe.length > 0) {
                menu.forecipe.forEach(element => {
                    if (element.type == 5) {
                        menu.mainmenu.push(element);
                    }
                    if (element.type == 4 || element.type == 7 || element.type == 6) {
                        menu.submenu.push(element);
                    }
                    if (element.type == 3 || element.type == 8) {
                        menu.othermenu.push(element);
                    }
                });
            }
        });
    }
    clickStar1(idx) {
        this.zone.run(() => {
            this.star1Active = idx;
        });
    }
    addImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getImages();
        });
    }
    getImages() {
        var se = this;
        const options = {
            quality: 76,
            sourceType: se.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: se.camera.DestinationType.FILE_URI,
            encodingType: se.camera.EncodingType.JPEG,
            mediaType: se.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true,
            correctOrientation: true,
        };
        this.imageResponse = [];
        this.imagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                let filename, path;
                se.base64Image = results[i];
                path = results[i].substring(0, results[i].lastIndexOf('/') + 1);
                filename = results[i].substring(results[i].lastIndexOf('/') + 1);
                let index = filename.indexOf('?');
                if (index > -1) {
                    filename = filename.substring(0, index);
                }
                se.file.readAsDataURL(path, filename).then(base64 => {
                    var item = { img: base64, filename: filename };
                    this.imageResponse.push(item);
                });
            }
        }, (err) => {
            alert(err);
        });
    }
    sendFeedBack() {
    }
    reviewMenu(menu, dayofweek) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            menu.dayofweek = dayofweek;
            se._foodService.itemFoodReview = menu;
            const modal = yield se.modalCtrl.create({
                component: _foodreviewdetail_foodreviewdetail_page__WEBPACK_IMPORTED_MODULE_11__["FoodreviewdetailPage"],
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    se.zone.run(() => {
                        menu.hasreview = true;
                    });
                    se.loadReview();
                }
            });
        });
    }
};
FoodreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-foodreview',
        template: __webpack_require__(/*! ./foodreview.page.html */ "./src/app/foodreview/foodreview.page.html"),
        styles: [__webpack_require__(/*! ./foodreview.page.scss */ "./src/app/foodreview/foodreview.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__["ImagePicker"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_8__["foodService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], FoodreviewPage);



/***/ })

}]);
//# sourceMappingURL=foodreview-foodreview-module.js.map