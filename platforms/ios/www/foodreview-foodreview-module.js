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

module.exports = "<ion-header class=\"foodreview-header\">\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center;display: flex\">\n          <div class=\"title-header\">\n            <label class=\"text-title\" *ngIf=\"!order.isDinner\">Đánh giá bữa trưa</label>\n            <label class=\"text-title\" *ngIf=\"order.isDinner\">Đánh giá nguyên liệu bữa tối</label>\n          </div>\n              <div class=\"div-close\" (click)=\"goback()\">\n                  <img class=\"header-img-close\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n              </div>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div-section-menu\">\n      <div class=\"div-menu-item\" *ngIf=\"(menus.length >0 && loaddatadone) else loadsk\">\n          <div class=\"menu-item\" *ngFor=\"let menu of menus; let idx = index\">\n            <div [ngClass]=\"menu.allowReview  && !menu.hasreview && !menu.remove ? 'd-flex' : 'd-flex cls-not-allowreview'\">\n                <div class=\"div-left\">\n                    <div class=\"text-day\" *ngIf=\"idx==0\">Thứ 2</div>\n                    <div class=\"text-day\" *ngIf=\"idx==1\">Thứ 3</div>\n                    <div class=\"text-day\" *ngIf=\"idx==2\">Thứ 4</div>\n                    <div class=\"text-day\" *ngIf=\"idx==3\">Thứ 5</div>\n                    <div class=\"text-day\" *ngIf=\"idx==4\">Thứ 6</div>\n  \n                    <div class=\"text-sub-day\" *ngIf=\"idx==0\">{{textmon}}</div>\n                    <div class=\"text-sub-day\" *ngIf=\"idx==1\">{{texttue}}</div>\n                    <div class=\"text-sub-day\" *ngIf=\"idx==2\">{{textwed}}</div>\n                    <div class=\"text-sub-day\" *ngIf=\"idx==3\">{{textthu}}</div>\n                    <div class=\"text-sub-day\" *ngIf=\"idx==4\">{{textfri}}</div>\n                  </div>\n                  <div *ngIf=\"!menu.isdayoff else dayoff\">\n                    <div class=\"div-right\">\n                      <div *ngFor=\"let item of menu.mainmenu\">\n                        <!-- <div [ngClass]=\"idx1==0 ? 'text-forecipe-1' : ( (idx1 ==1 || idx1 ==2) ? 'text-forecipe-2' : 'text-forecipe-3'  ) \">{{item.name}}</div> -->\n                        <div class=\"text-forecipe-1\">{{item.name}}</div>\n                      </div>\n    \n                      <div *ngFor=\"let item1 of menu.submenu\">\n                          <div class=\"text-forecipe-2\">{{item1.name}}</div>\n                      </div>\n    \n                      <div *ngFor=\"let item2 of menu.othermenu\">\n                          <div class=\"text-forecipe-3\">{{item2.name}}</div>\n                      </div>\n\n                      <div *ngIf=\"menu.restaurentName\" class=\"restaurent-name\">{{ menu.restaurentName }}</div>\n                    </div>\n                  </div>\n\n                  <ng-template #dayoff>\n                    <div class=\"div-right div-just-center\">\n                      <div class=\"text-forecipe-1\">Nghỉ</div>\n                    </div>\n                  </ng-template>                </div>\n            <div class=\"text-review\" *ngIf=\"(menu && menu.hasreview) else hasnotreview\"  (click)=\"reviewMenu(menu,idx+2)\">Cám ơn bạn đã đánh giá</div>\n            <ng-template #hasnotreview>\n              <div *ngIf=\"menu.allowReview\">\n                <button ion-button round outline class=\"button btn-review\" (click)=\"reviewMenu(menu,idx+2)\">Viết đánh giá</button>\n              </div>\n            </ng-template>\n\n            <div [ngClass]=\"idx == menus.length-1 ? '' : 'div-line'\"></div>\n          </div>\n  \n        \n        </div>\n\n        <ng-template #loadsk>\n          <div class=\"menu-item\" *ngFor=\"let menu of itemsks; let idx = index\">\n              <div class=\"d-flex\">\n                    <ion-skeleton-text animated class=\"text-menu\" style=\"width: 80px;height: 80px;border-radius: 80px;margin-right: 16px\">\n                    </ion-skeleton-text>\n\n                    <div class=\"div-right\">\n                        <ion-skeleton-text animated style=\"width: 200px;height: 16px; margin-top: 4px\">\n                          </ion-skeleton-text>\n\n                          <ion-skeleton-text animated style=\"width: 180px;height: 16px;margin-top: 4px\">\n                            </ion-skeleton-text>\n\n                            <ion-skeleton-text animated style=\"width: 160px;height: 16px;margin-top: 4px\">\n                              </ion-skeleton-text>\n\n                              <ion-skeleton-text animated style=\"width: 100px;height: 16px;margin-top: 4px\">\n                                </ion-skeleton-text>\n\n                                <ion-skeleton-text animated style=\"width: 100px;height: 16px;margin-top: 4px\">\n                                  </ion-skeleton-text>\n                    </div>\n              </div>\n              <ion-skeleton-text animated style=\"width: 100%;height: 32px; margin-top: 8px\">\n                </ion-skeleton-text>\n  \n              <div [ngClass]=\"idx == menus.length-1 ? '' : 'div-line'\"></div>\n            </div>\n      </ng-template>\n  </div>\n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/foodreview/foodreview.page.scss":
/*!*************************************************!*\
  !*** ./src/app/foodreview/foodreview.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foodreview-header .title-header {\n  padding-top: 12px;\n  font-size: 20px;\n  font-weight: bold;\n  padding-left: 40px;\n  width: 100%;\n}\n.foodreview-header .div-close {\n  width: 12%;\n}\n.div-section-menu .div-menu-item .menu-item {\n  margin-top: 16px;\n}\n.div-section-menu .div-menu-item .menu-item .div-just-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-section-menu .div-menu-item .d-flex {\n  display: flex;\n  align-items: center;\n}\n.div-section-menu .div-menu-item .div-img-menu {\n  width: 100%;\n  height: 184px;\n  position: relative;\n}\n.div-section-menu .div-menu-item .div-img-menu .img-menu {\n  height: 184px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px 4px 0 0;\n  position: absolute;\n}\n.div-section-menu .p-l-0 {\n  padding-left: 0px !important;\n  width: 32px !important;\n}\n.div-section-menu .p-r-0 {\n  padding-left: 0 !important;\n  width: 28px !important;\n}\n.div-section-menu .text-menu {\n  font-size: 36px;\n  font-weight: 600;\n  letter-spacing: -0.25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-section-menu .text-arrow {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.25px;\n  margin: 0 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-section-menu .text-week {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n  padding-left: 16px;\n  width: 60px;\n  padding-bottom: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n.div-section-menu .div-left {\n  display: flex;\n  flex-direction: column;\n  background: #26bed6;\n  border-radius: 80px;\n  color: #fff;\n  width: 80px;\n  height: 80px;\n  margin-right: 16px;\n  justify-content: center;\n  text-align: center;\n}\n.div-section-menu .div-left .text-day {\n  font-size: 18px;\n  font-weight: 300;\n}\n.div-section-menu .div-left .text-sub-day {\n  padding-top: 4px;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-section-menu .div-right .text-forecipe-1 {\n  color: #000;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 21px;\n}\n.div-section-menu .div-right .text-forecipe-2 {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 21px;\n}\n.div-section-menu .div-right .text-forecipe-3 {\n  color: #828282;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 21px;\n}\n.div-section-menu .div-right .restaurent-name {\n  color: #828282;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 21px;\n}\n.div-section-menu .div-line {\n  border-bottom: solid 1px #f2f2f2;\n  margin: 16px 0;\n}\n.div-section-menu .text-review {\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  color: #000;\n  font-weight: 300;\n  padding-top: 8px;\n}\n.cls-not-allowreview {\n  opacity: 0.5;\n}\n.d-flex {\n  display: flex;\n  position: relative;\n}\n.btn-review {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 100%;\n  height: 34px !important;\n  font-size: 16px !important;\n  margin: 0;\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2RyZXZpZXcvZm9vZHJldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RyZXZpZXcvZm9vZHJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RSO0FER0k7RUFDSSxVQUFBO0FDRFI7QURPUTtFQUNJLGdCQUFBO0FDSlo7QURNWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDSmhCO0FET1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNMWjtBRE9RO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0xaO0FET1k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDTGhCO0FEVUk7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0FDUlI7QURVSTtFQUNJLDBCQUFBO0VBQ0Esc0JBQUE7QUNSUjtBRFVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBRUEsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1RSO0FEV0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1RSO0FEWUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNWUjtBRGFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ1hSO0FEYVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNYWjtBRGFRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNYWjtBRGdCUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2RaO0FEZ0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNkWjtBRGdCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2RaO0FEZ0JRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDZFo7QURpQkk7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7QUNmUjtBRGlCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNmUjtBRGtCQTtFQUNJLFlBQUE7QUNmSjtBRGlCQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ2RKO0FEaUJBO0VBRVEscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ2ZSIiwiZmlsZSI6InNyYy9hcHAvZm9vZHJldmlldy9mb29kcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9vZHJldmlldy1oZWFkZXJ7XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGl2LWNsb3Nle1xyXG4gICAgICAgIHdpZHRoOiAxMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXYtc2VjdGlvbi1tZW51e1xyXG4gICAgLmRpdi1tZW51LWl0ZW17XHJcbiAgICAgICAgLm1lbnUtaXRlbXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXYtanVzdC1jZW50ZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kLWZsZXh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtaW1nLW1lbnV7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4NHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuaW1nLW1lbnV7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4NHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAucC1sLTB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnAtci0we1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGV4dC1tZW51e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LWFycm93e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC50ZXh0LXdlZWt7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtbGVmdHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI2YmVkNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAudGV4dC1kYXl7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtc3ViLWRheXtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAuZGl2LXJpZ2h0e1xyXG4gICAgICAgIC50ZXh0LWZvcmVjaXBlLTF7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1mb3JlY2lwZS0ye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1mb3JlY2lwZS0ze1xyXG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlc3RhdXJlbnQtbmFtZXtcclxuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpdi1saW5le1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjJmMmYyO1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmV2aWV3e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIH1cclxufVxyXG4uY2xzLW5vdC1hbGxvd3Jldmlld3tcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG4uZC1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJ0bi1yZXZpZXdcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH0iLCIuZm9vZHJldmlldy1oZWFkZXIgLnRpdGxlLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvb2RyZXZpZXctaGVhZGVyIC5kaXYtY2xvc2Uge1xuICB3aWR0aDogMTIlO1xufVxuXG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LW1lbnUtaXRlbSAubWVudS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtbWVudS1pdGVtIC5tZW51LWl0ZW0gLmRpdi1qdXN0LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLmRpdi1tZW51LWl0ZW0gLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LW1lbnUtaXRlbSAuZGl2LWltZy1tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTg0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtbWVudS1pdGVtIC5kaXYtaW1nLW1lbnUgLmltZy1tZW51IHtcbiAgaGVpZ2h0OiAxODRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLnAtbC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDMycHggIWltcG9ydGFudDtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5wLXItMCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMjhweCAhaW1wb3J0YW50O1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLnRleHQtbWVudSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLnRleHQtYXJyb3cge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xuICBtYXJnaW46IDAgMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAudGV4dC13ZWVrIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLmRpdi1sZWZ0IC50ZXh0LWRheSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtbGVmdCAudGV4dC1zdWItZGF5IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLmRpdi1yaWdodCAudGV4dC1mb3JlY2lwZS0xIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LXJpZ2h0IC50ZXh0LWZvcmVjaXBlLTIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuLmRpdi1zZWN0aW9uLW1lbnUgLmRpdi1yaWdodCAudGV4dC1mb3JlY2lwZS0zIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG4uZGl2LXNlY3Rpb24tbWVudSAuZGl2LXJpZ2h0IC5yZXN0YXVyZW50LW5hbWUge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC5kaXYtbGluZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjJmMmYyO1xuICBtYXJnaW46IDE2cHggMDtcbn1cbi5kaXYtc2VjdGlvbi1tZW51IC50ZXh0LXJldmlldyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4uY2xzLW5vdC1hbGxvd3JldmlldyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bi1yZXZpZXcge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59Il19 */"

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