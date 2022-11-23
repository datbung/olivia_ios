(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodreviewweek-foodreviewweek-module"],{

/***/ "./src/app/foodreviewweek/foodreviewweek.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/foodreviewweek/foodreviewweek.module.ts ***!
  \*********************************************************/
/*! exports provided: FoodreviewweekPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodreviewweekPageModule", function() { return FoodreviewweekPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodreviewweek_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodreviewweek.page */ "./src/app/foodreviewweek/foodreviewweek.page.ts");







const routes = [
    {
        path: '',
        component: _foodreviewweek_page__WEBPACK_IMPORTED_MODULE_6__["FoodreviewweekPage"]
    }
];
let FoodreviewweekPageModule = class FoodreviewweekPageModule {
};
FoodreviewweekPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodreviewweek_page__WEBPACK_IMPORTED_MODULE_6__["FoodreviewweekPage"]]
    })
], FoodreviewweekPageModule);



/***/ }),

/***/ "./src/app/foodreviewweek/foodreviewweek.page.html":
/*!*********************************************************!*\
  !*** ./src/app/foodreviewweek/foodreviewweek.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"foodreviewweek-header\">\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center;height: 48px;\">\n          <div style=\"align-self: center;display: flex\">\n            <div class=\"title-header\">\n              <label class=\"text-title\">Đánh giá {{title}}</label></div>\n                <div class=\"div-close\" (click)=\"closeModal()\">\n                    <img class=\"header-img-close\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n                </div>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"foodreviewweek-content\">\n  <div class=\"content-title\">\n    Cảm ơn quý khách đã sử dụng dịch vụ của iVIVU\n  </div>\n  <div class=\"content-text p-top-8\">Xin Quý khách góp ý để iVIVU cải thiện chất lượng dịch vụ hơn nữa.</div>\n  <div class=\"d-flex  p-top-8\">\n    <div class=\"content-title\" *ngIf=\"combodetail\">{{combodetail.name}}</div>\n    <div class=\"div-star\">\n      <img *ngIf=\"combodetail && combodetail.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\n      <img *ngIf=\"combodetail && combodetail.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\n      <img *ngIf=\"combodetail && combodetail.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\n    </div>\n</div>\n\n  <div class=\"food-review  p-top-8\">\n    <div class=\"text-review\">Nhận xét bữa ăn</div>\n    <div class=\"div-star d-flex\">\n      <div class=\"star1 cls-star\" (click)=\"clickStar(1)\">\n          <img class=\"img-star\" *ngIf=\"star1Active ==0 || star1Active<1\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\" star1Active >=1 && star1Active<=5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n\n      <div class=\"star2 cls-star\" (click)=\"clickStar(2)\">\n          <img class=\"img-star\" *ngIf=\"star1Active<2\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\" star1Active >=2 && star1Active<=5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n\n      <div class=\"star3 cls-star\" (click)=\"clickStar(3)\">\n          <img class=\"img-star\" *ngIf=\"star1Active<3\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\" star1Active >=3 && star1Active<=5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n\n      <div class=\"star4 cls-star\" (click)=\"clickStar(4)\">\n          <img class=\"img-star\" *ngIf=\"star1Active<4\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\" star1Active >=4 && star1Active<=5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n\n      <div class=\"star5 cls-star\" (click)=\"clickStar(5)\">\n          <img class=\"img-star\" *ngIf=\"star1Active<5\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\" star1Active ==5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n        \n    </div>\n\n    <div class=\"text-review p-top-10\">Nhận xét nhân viên giao</div>\n    <div class=\"div-star d-flex\">\n      <div class=\"star1 cls-star\" (click)=\"clickStarShiper(1)\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive ==0 || star1ShiperActive<1\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive >=1 && star1ShiperActive<=5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n\n      <div class=\"star2 cls-star\" (click)=\"clickStarShiper(2)\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive <2\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive >=2 && star1ShiperActive<=5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n\n      <div class=\"star3 cls-star\" (click)=\"clickStarShiper(3)\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive <3\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive >=3 && star1ShiperActive<=5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n\n      <div class=\"star4 cls-star\" (click)=\"clickStarShiper(4)\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive <4\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive >=4 && star1ShiperActive<=5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n\n      <div class=\"star5 cls-star\" (click)=\"clickStarShiper(5)\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive <5\" src=\"./assets/imgs/star_fb.svg\">\n          <img class=\"img-star\" *ngIf=\"star1ShiperActive ==5\" src=\"./assets/imgs/star_active_fb.svg\">\n      </div>\n        \n    </div>\n\n\n    <div class=\"text-review p-top-10\">Chia sẻ cảm nhận</div>\n    <div class=\"div-comment p-top-4\">\n        <ion-textarea style=\"border: solid 0.5px #bdbdbd;border-radius: 4px;\" class=\"ip-comment\" maxlength=300 [(ngModel)]=\"Description\"\n        class=\"cls-text-comment\"></ion-textarea>\n    </div>\n\n    <div class=\"div-addimage\">\n      <div class=\"div-wrap-button\" *ngIf=\"!order.hasreview\">\n          <button (click)=\"addImage()\" class=\"button btn-addimage\">Thêm ảnh</button>\n          <img (click)=\"addImage()\" class=\"img-plus\" src=\"./assets/imgs/ic_plus.svg\">\n          \n      </div>\n        \n    </div>\n    <div style=\"height: 200px;margin-left: -5px;margin-top: 10px;\">\n      <label *ngFor=\"let img of imageReview; let idx= index\" >\n        <img [ngClass]=\"idx == 0 ? 'img-review' : 'img-review m-l-5'\" src={{img.img}}>\n        <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-review\" (click) = \"clearImg(idx)\" *ngIf=\"!order.hasreview\">\n      </label> \n      \n    </div>\n  </div>\n</div>\n</ion-content>\n<ion-footer *ngIf=\"!order.hasreview\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n      <button (click)=\"sendFeedBack()\" ion-button round outline class=\"button button2\">Gửi đánh giá</button>\n    </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/foodreviewweek/foodreviewweek.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/foodreviewweek/foodreviewweek.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foodreviewweek-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n  padding-left: 40px;\n  width: 100%;\n}\n.foodreviewweek-header .div-close {\n  width: 12%;\n}\n.foodreviewweek-content {\n  padding: 16px;\n}\n.foodreviewweek-content .content-title {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #000000;\n}\n.foodreviewweek-content .content-text {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.foodreviewweek-content .d-flex {\n  display: flex;\n  position: relative;\n}\n.foodreviewweek-content .d-flex .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n}\n.foodreviewweek-content .p-top-8 {\n  padding-top: 8px;\n}\n.foodreviewweek-content .food-review .text-review {\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  color: #000000;\n  font-weight: 300;\n}\n.foodreviewweek-content .food-review .star1 {\n  margin-left: 0 !important;\n}\n.foodreviewweek-content .food-review .div-star {\n  padding-top: 3px;\n}\n.foodreviewweek-content .food-review .div-star .cls-star {\n  margin-left: 5px;\n  width: 19px;\n  height: 23px;\n}\n.foodreviewweek-content .food-review .div-star .img-star {\n  width: 19px;\n  height: 23px;\n}\n.foodreviewweek-content .d-flex {\n  display: flex;\n}\n.foodreviewweek-content .p-top-10 {\n  padding-top: 10px;\n}\n.foodreviewweek-content .p-top-4 {\n  padding-top: 4px;\n}\n.foodreviewweek-content .ip-comment {\n  border: solid 0.5px #bdbdbd;\n  border-radius: 4px;\n}\n.foodreviewweek-content .div-addimage {\n  padding-top: 16px;\n  display: flex;\n  justify-content: center;\n}\n.foodreviewweek-content .div-addimage .div-wrap-button {\n  position: relative;\n}\n.foodreviewweek-content .div-addimage .div-wrap-button .btn-addimage {\n  font-size: 14px !important;\n  color: #003c71;\n  background-color: transparent;\n  border: solid 0.5px #003c71;\n  width: 120px;\n  height: 34px !important;\n  padding: 0;\n  margin: 0;\n  border-radius: 4px;\n  padding-left: 20px;\n}\n.foodreviewweek-content .div-addimage .div-wrap-button .img-plus {\n  position: absolute;\n  top: 4px;\n  left: 10px;\n  width: 24px;\n}\n.foodreviewweek-content .img-review {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: initial;\n  height: 80px;\n  width: 80px;\n}\n.foodreviewweek-content .img-close-review {\n  position: absolute;\n  margin-left: -24px;\n  margin-top: 4px;\n}\n.m-l-5 {\n  margin-left: 5px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 94%;\n  height: 48px;\n  font-size: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kcmV2aWV3d2Vlay9mb29kcmV2aWV3d2Vlay5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RyZXZpZXd3ZWVrL2Zvb2RyZXZpZXd3ZWVrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7QUNBUjtBRElBO0VBQ0ksYUFBQTtBQ0RKO0FER0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNEUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRFI7QURHSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER1E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRElJO0VBQ0ksZ0JBQUE7QUNGUjtBRE1RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNKWjtBRE1RO0VBQ0kseUJBQUE7QUNKWjtBRE1RO0VBQ0ksZ0JBQUE7QUNKWjtBRE1ZO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0poQjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKaEI7QURTSTtFQUNJLGFBQUE7QUNQUjtBRFNJO0VBQ0ksaUJBQUE7QUNQUjtBRFNJO0VBQ0ksZ0JBQUE7QUNQUjtBRFNJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEVUk7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ1JSO0FEVVE7RUFDSSxrQkFBQTtBQ1JaO0FEVVk7RUFDSSwwQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUmhCO0FEVVk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ1JoQjtBRGFJO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNYUjtBRGNJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNaUjtBRGlCQTtFQUNJLGdCQUFBO0FDZEo7QURpQkE7RUFFUSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNmUiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RyZXZpZXd3ZWVrL2Zvb2RyZXZpZXd3ZWVrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kcmV2aWV3d2Vlay1oZWFkZXJ7XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5kaXYtY2xvc2V7XHJcbiAgICAgICAgd2lkdGg6IDEyJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIC5jb250ZW50LXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQtdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgLmQtZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLmRpdi1zdGFye1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wLXRvcC04e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuZm9vZC1yZXZpZXd7XHJcblxyXG4gICAgICAgIC50ZXh0LXJldmlld3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdGFyMXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1zdGFye1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG5cclxuICAgICAgICAgICAgLmNscy1zdGFye1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWctc3RhcntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuXHJcbiAgICAuZC1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMTB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtNHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgfVxyXG4gICAgLmlwLWNvbW1lbnR7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWFkZGltYWdle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5kaXYtd3JhcC1idXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5idG4tYWRkaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICMwMDNjNzE7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZy1wbHVze1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW1nLXJldmlldyB7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5pbWctY2xvc2UtcmV2aWV3e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLm0tbC01e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIH0iLCIuZm9vZHJldmlld3dlZWstaGVhZGVyIC50aXRsZS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZvb2RyZXZpZXd3ZWVrLWhlYWRlciAuZGl2LWNsb3NlIHtcbiAgd2lkdGg6IDEyJTtcbn1cblxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmNvbnRlbnQtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5jb250ZW50LXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5kLWZsZXggLmRpdi1zdGFyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5mb29kLXJldmlldyAudGV4dC1yZXZpZXcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5mb29kLXJldmlldyAuc3RhcjEge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmZvb2QtcmV2aWV3IC5kaXYtc3RhciB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZm9vZC1yZXZpZXcgLmRpdi1zdGFyIC5jbHMtc3RhciB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDIzcHg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZm9vZC1yZXZpZXcgLmRpdi1zdGFyIC5pbWctc3RhciB7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDIzcHg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5wLXRvcC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLnAtdG9wLTQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmlwLWNvbW1lbnQge1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5kaXYtYWRkaW1hZ2Uge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZGl2LWFkZGltYWdlIC5kaXYtd3JhcC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZGl2LWFkZGltYWdlIC5kaXYtd3JhcC1idXR0b24gLmJ0bi1hZGRpbWFnZSB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwM2M3MTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgMC41cHggIzAwM2M3MTtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5kaXYtYWRkaW1hZ2UgLmRpdi13cmFwLWJ1dHRvbiAuaW1nLXBsdXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMjRweDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5pbWctcmV2aWV3IHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5pbWctY2xvc2UtcmV2aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTI0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLm0tbC01IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ1dHRvbjIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTQlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/foodreviewweek/foodreviewweek.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/foodreviewweek/foodreviewweek.page.ts ***!
  \*******************************************************/
/*! exports provided: FoodreviewweekPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodreviewweekPage", function() { return FoodreviewweekPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_14__);















let FoodreviewweekPage = class FoodreviewweekPage {
    constructor(zone, camera, navCtrl, file, imagePicker, storage, _foodService, modalCtrl, loadingCtrl, httpClient, sanitizer, gf) {
        this.zone = zone;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.file = file;
        this.imagePicker = imagePicker;
        this.storage = storage;
        this._foodService = _foodService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.gf = gf;
        this.star1Active = 0;
        this.imageResponse = [];
        this.reviews = [];
        this.loaddatadone = false;
        this.itemsks = [1, 2, 3, 4, 5];
        this.star1ShiperActive = 0;
        this.dataImage = [];
        this.imageReview = [];
        this.order = _foodService.itemOrderDetail;
        this.order.hasreview = false;
        this.orderdetail = _foodService.itemOrderBookingDetail;
        this.combodetail = this.orderdetail.combo.category;
        this.storage.get('jti').then((uid) => {
            if (uid) {
                this.memberid = uid;
                this.loadReview();
            }
            else {
                this.reviews = [];
            }
        });
        this.storage.get('infocus').then(infocus => {
            if (infocus) {
                if (infocus.ho && infocus.ten) {
                    this.hoten = infocus.ho + ' ' + infocus.ten;
                }
                else {
                    if (infocus.ho) {
                        this.hoten = infocus.ho;
                    }
                    else if (infocus.ten) {
                        this.hoten = infocus.ten;
                    }
                    else {
                        this.storage.get('email').then(email => {
                            if (email) {
                                this.hoten = email;
                            }
                            else if (infocus.phone) {
                                this.phone = infocus.phone;
                            }
                        });
                    }
                }
                if (infocus.phone) {
                    this.phone = infocus.phone;
                }
            }
        });
        if (this.orderdetail && this.orderdetail.combo.categoryId < 25) {
            this.title = "bữa trưa";
        }
        else {
            this.title = "bữa tối";
        }
    }
    ngOnInit() {
        setTimeout(() => {
            document.querySelectorAll('textarea').forEach(function (node) {
                var minHeight = parseInt(getComputedStyle(node).minHeight) || node.clientHeight;
                node.style.overflow = 'hidden';
                node.onchange = node.oninput = function () {
                    node.style.height = 'auto';
                    node.style.height = (node.scrollHeight + 24) + "px";
                };
            });
        }, 300);
    }
    goback() {
        this.navCtrl.back();
    }
    loadReview() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_11__["C"].urls.baseUrl.urlFood + "/api/FOReview/GetReviewBookingMember?bookingCode=" + se.order.bookingCode + "&comboId=" + se.orderdetail.comboId,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                token: "584f470f-7a45-4793-a136-0084fadea81c",
                memberId: se.memberid
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_14__(options, function (error, response, body) {
            if (body) {
                se.loaddatadone = true;
                var result = JSON.parse(body);
                if (result.response) {
                    se.reviews = result.response;
                }
            }
        });
    }
    checkAllowReviewMenu(menu, indexDayofWeek) {
        var se = this;
        let menustartdate = moment__WEBPACK_IMPORTED_MODULE_12__(se.order.startDate).add(indexDayofWeek, 'days');
        let timediffhours = moment__WEBPACK_IMPORTED_MODULE_12__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_12__(menustartdate), 'hours');
        menu.allowReview = timediffhours > 13 ? true : false;
        menu.titlemenu = "Bữa trưa thứ " + (indexDayofWeek * 1 + 2) + ", " + moment__WEBPACK_IMPORTED_MODULE_12__(se.order.startDate).add(indexDayofWeek, 'days').format("DD.MM");
    }
    clickStar1(idx) {
        this.zone.run(() => {
            this.star1Active = idx;
        });
    }
    closeModal() {
        this.navCtrl.back();
    }
    clickStar(idx) {
        this.zone.run(() => {
            this.star1Active = idx;
        });
    }
    clickStarShiper(idx) {
        this.zone.run(() => {
            this.star1ShiperActive = idx;
        });
    }
    addImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.getImages();
        });
    }
    sendFeedBack() {
        var se = this;
        var itemMenu = se._foodService.itemFoodReview;
        var itemDetail = se._foodService.itemOrderBookingDetail;
        var itemOrder = se._foodService.itemOrderDetail;
        var form = new form_data__WEBPACK_IMPORTED_MODULE_8__();
        const foreviewImage = [];
        form.append("file_length", se.dataImage.length);
        for (let index = 0; index < se.dataImage.length; index++) {
            const image = se.dataImage[index];
            const reviewImage = { description: image.filename, flag: "1", imageUrl: "", order: 0, id: 0, reviewId: 0 };
            foreviewImage.push(reviewImage);
        }
        if (se.dataImage && se.dataImage.length > 0) {
            for (let index = 0; index < se.dataImage.length; index++) {
                const element = se.dataImage[index];
                form.append('files_' + index, element.file, element.filename);
            }
        }
        var formObj = {
            "id": 0,
            "comboId": itemDetail.comboId,
            "bookingId": itemOrder.id,
            "weekdayId": 0,
            "bestFeature": se.Description,
            "customerName": se.hoten,
            "replyReview": "",
            "reviewPoint": se.star1Active,
            "deliveryPoint": se.star1ShiperActive,
            "reviewDate": new Date(),
            "memberId": se.memberid,
            "status": 2,
            "foreviewImage": foreviewImage,
            "Source": 1
        };
        let obj = JSON.stringify(formObj);
        console.log(obj);
        form.append("body", obj);
        if (form) {
            se.presentLoading();
            var options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({ 'token': "584f470f-7a45-4793-a136-0084fadea81c" })
            };
            let urlApi = _providers_constants__WEBPACK_IMPORTED_MODULE_11__["C"].urls.baseUrl.urlFood + '/api/FOReview/Create';
            se.httpClient.post(urlApi, form, options).subscribe((res) => {
                if (res.status == 1) {
                    se.navCtrl.back();
                    se._foodService.menuFooterClick.emit(2);
                    se._foodService.itemRefreshTripHistoryAfterReview.emit(1);
                }
                if (se.loader) {
                    se.loader.dismiss();
                }
            });
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                duration: 3000
            });
            this.loader.present();
        });
    }
    getImages() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            this.imagePicker.getPictures(options).then((results) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const imageFiles = yield se.gf.getMultipleFiles(results);
                imageFiles.forEach(file => {
                    se.dataImage.push({ file: file, filename: file.name });
                });
                for (var i = 0; i < results.length; i++) {
                    let filename = '', path;
                    se.base64Image = results[i];
                    path = results[i].substring(0, results[i].lastIndexOf('/') + 1);
                    filename = results[i].substring(results[i].lastIndexOf('/') + 1);
                    let idx = filename.indexOf('?');
                    if (idx > -1) {
                        filename = filename.substring(0, idx);
                    }
                    se.file.readAsDataURL(path, filename).then(base64 => {
                        var item = { img: base64, filename: filename };
                        se.imageReview.push(item);
                    }).catch((error) => {
                        alert(error);
                    });
                }
            }), (err) => {
                alert(err);
            });
        });
    }
    clearImg(idx) {
        this.zone.run(() => {
            this.dataImage.splice(idx, 1);
            this.imageReview.splice(idx, 1);
        });
    }
};
FoodreviewweekPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-foodreviewweek',
        template: __webpack_require__(/*! ./foodreviewweek.page.html */ "./src/app/foodreviewweek/foodreviewweek.page.html"),
        styles: [__webpack_require__(/*! ./foodreviewweek.page.scss */ "./src/app/foodreviewweek/foodreviewweek.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_1__["ImagePicker"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_13__["foodService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"]])
], FoodreviewweekPage);



/***/ })

}]);
//# sourceMappingURL=foodreviewweek-foodreviewweek-module.js.map