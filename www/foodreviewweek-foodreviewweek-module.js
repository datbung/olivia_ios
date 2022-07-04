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

module.exports = ".foodreviewweek-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n  padding-left: 40px;\n  width: 100%;\n}\n.foodreviewweek-header .div-close {\n  width: 12%;\n}\n.foodreviewweek-content {\n  padding: 16px;\n}\n.foodreviewweek-content .content-title {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #000000;\n}\n.foodreviewweek-content .content-text {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.foodreviewweek-content .d-flex {\n  display: flex;\n  position: relative;\n}\n.foodreviewweek-content .d-flex .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n}\n.foodreviewweek-content .p-top-8 {\n  padding-top: 8px;\n}\n.foodreviewweek-content .food-review .text-review {\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  color: #000000;\n  font-weight: 300;\n}\n.foodreviewweek-content .food-review .star1 {\n  margin-left: 0 !important;\n}\n.foodreviewweek-content .food-review .div-star {\n  padding-top: 3px;\n}\n.foodreviewweek-content .food-review .div-star .cls-star {\n  margin-left: 5px;\n  width: 19px;\n  height: 23px;\n}\n.foodreviewweek-content .food-review .div-star .img-star {\n  width: 19px;\n  height: 23px;\n}\n.foodreviewweek-content .d-flex {\n  display: flex;\n}\n.foodreviewweek-content .p-top-10 {\n  padding-top: 10px;\n}\n.foodreviewweek-content .p-top-4 {\n  padding-top: 4px;\n}\n.foodreviewweek-content .ip-comment {\n  border: solid 0.5px #bdbdbd;\n  border-radius: 4px;\n}\n.foodreviewweek-content .div-addimage {\n  padding-top: 16px;\n  display: flex;\n  justify-content: center;\n}\n.foodreviewweek-content .div-addimage .div-wrap-button {\n  position: relative;\n}\n.foodreviewweek-content .div-addimage .div-wrap-button .btn-addimage {\n  font-size: 14px !important;\n  color: #003c71;\n  background-color: transparent;\n  border: solid 0.5px #003c71;\n  width: 120px;\n  height: 34px !important;\n  padding: 0;\n  margin: 0;\n  border-radius: 4px;\n  padding-left: 20px;\n}\n.foodreviewweek-content .div-addimage .div-wrap-button .img-plus {\n  position: absolute;\n  top: 4px;\n  left: 10px;\n  width: 24px;\n}\n.foodreviewweek-content .img-review {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: initial;\n  height: 80px;\n  width: 80px;\n}\n.foodreviewweek-content .img-close-review {\n  position: absolute;\n  margin-left: -24px;\n  margin-top: 4px;\n}\n.m-l-5 {\n  margin-left: 5px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 94%;\n  height: 48px;\n  font-size: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZm9vZHJldmlld3dlZWsvZm9vZHJldmlld3dlZWsucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kcmV2aWV3d2Vlay9mb29kcmV2aWV3d2Vlay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FSO0FERUk7RUFDSSxVQUFBO0FDQVI7QURJQTtFQUNJLGFBQUE7QUNESjtBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDRFI7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRFo7QURJSTtFQUNJLGdCQUFBO0FDRlI7QURNUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSlo7QURNUTtFQUNJLHlCQUFBO0FDSlo7QURNUTtFQUNJLGdCQUFBO0FDSlo7QURNWTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNKaEI7QURNWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSmhCO0FEU0k7RUFDSSxhQUFBO0FDUFI7QURTSTtFQUNJLGlCQUFBO0FDUFI7QURTSTtFQUNJLGdCQUFBO0FDUFI7QURTSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7QUNQUjtBRFVJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNSUjtBRFVRO0VBQ0ksa0JBQUE7QUNSWjtBRFVZO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1JoQjtBRFVZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNSaEI7QURhSTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWFI7QURjSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDWlI7QURpQkE7RUFDSSxnQkFBQTtBQ2RKO0FEaUJBO0VBRVEscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDZlIiLCJmaWxlIjoic3JjL2FwcC9mb29kcmV2aWV3d2Vlay9mb29kcmV2aWV3d2Vlay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vZHJldmlld3dlZWstaGVhZGVye1xyXG4gICAgLnRpdGxlLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGl2LWNsb3Nle1xyXG4gICAgICAgIHdpZHRoOiAxMiU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb29kcmV2aWV3d2Vlay1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAuY29udGVudC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5jb250ZW50LXRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5kLWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC5kaXYtc3RhcntcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucC10b3AtOHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb2QtcmV2aWV3e1xyXG5cclxuICAgICAgICAudGV4dC1yZXZpZXd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhcjF7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtc3RhcntcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuXHJcbiAgICAgICAgICAgIC5jbHMtc3RhcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1nLXN0YXJ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcblxyXG4gICAgLmQtZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTEwe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5pcC1jb21tZW50e1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1hZGRpbWFnZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAuZGl2LXdyYXAtYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAuYnRuLWFkZGltYWdle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwM2M3MTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjMDAzYzcxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbWctcGx1c3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmltZy1yZXZpZXcge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW1nLWNsb3NlLXJldmlld3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5tLWwtNXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9IiwiLmZvb2RyZXZpZXd3ZWVrLWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mb29kcmV2aWV3d2Vlay1oZWFkZXIgLmRpdi1jbG9zZSB7XG4gIHdpZHRoOiAxMiU7XG59XG5cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5jb250ZW50LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuY29udGVudC10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZC1mbGV4IC5kaXYtc3RhciB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAucC10b3AtOCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZm9vZC1yZXZpZXcgLnRleHQtcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZm9vZC1yZXZpZXcgLnN0YXIxIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5mb29kLXJldmlldyAuZGl2LXN0YXIge1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmZvb2QtcmV2aWV3IC5kaXYtc3RhciAuY2xzLXN0YXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmZvb2QtcmV2aWV3IC5kaXYtc3RhciAuaW1nLXN0YXIge1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAucC10b3AtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5wLXRvcC00IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5mb29kcmV2aWV3d2Vlay1jb250ZW50IC5pcC1jb21tZW50IHtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZGl2LWFkZGltYWdlIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmRpdi1hZGRpbWFnZSAuZGl2LXdyYXAtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb2RyZXZpZXd3ZWVrLWNvbnRlbnQgLmRpdi1hZGRpbWFnZSAuZGl2LXdyYXAtYnV0dG9uIC5idG4tYWRkaW1hZ2Uge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMwMDNjNzE7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuZGl2LWFkZGltYWdlIC5kaXYtd3JhcC1idXR0b24gLmltZy1wbHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogMTBweDtcbiAgd2lkdGg6IDI0cHg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuaW1nLXJldmlldyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG59XG4uZm9vZHJldmlld3dlZWstY29udGVudCAuaW1nLWNsb3NlLXJldmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5tLWwtNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDk0JTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn0iXX0= */"

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