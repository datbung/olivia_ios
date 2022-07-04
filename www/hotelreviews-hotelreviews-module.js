(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hotelreviews-hotelreviews-module"],{

/***/ "./src/app/hotelreviews/hotelreviews.html":
/*!************************************************!*\
  !*** ./src/app/hotelreviews/hotelreviews.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the HotelreviewsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row style=\"padding-top:11px;\">\n    <ion-col style=\"text-align: center\">\n      <div style=\"align-self: center\" >\n        <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n          <img class=\"header-img-twoline\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div><label class=\"text-title\">Đánh giá của khách hàng</label></div>\n        <div *ngIf=\"fromhotel\"><label style=\"font-size: 11px;color: #828282\">{{Name}}</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content class=\"hotel-review-page\">\n  <div *ngIf=\"loaddatadone else loadsk\" class=\"m-bottom-40\">\n  <div class=\"div-avg-reviews\">\n    <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint>9 && AvgPoint<=10 && numHotelReviews >0\">\n      <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n      <div class=\"cls-ml6\">\n          <div  class=\"text-point\">Tuyệt vời</div>\n          <div class=\"num-review\">\n              {{numHotelReviews}} đánh giá\n          </div>\n      </div>\n    </div>\n    <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint>8 && AvgPoint<=9 && numHotelReviews >0\">\n      <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n      <div class=\"cls-ml6\">\n          <div  class=\"text-point\">Rất tốt</div>\n          <div class=\"num-review\">\n              {{numHotelReviews}} đánh giá\n          </div>\n      </div>\n    </div>\n   \n    \n    <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint>7 && AvgPoint<=8 && numHotelReviews >0\">\n      <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n      <div class=\"cls-ml6\">\n          <div  class=\"text-point\">Khá tốt</div>\n          <div class=\"num-review\">\n              {{numHotelReviews}} đánh giá\n          </div>\n      </div>\n    </div>\n    <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint>5 && AvgPoint<=7 && numHotelReviews >0\">\n      <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n      <div class=\"cls-ml6\">\n          <div  class=\"text-point\">Tạm được</div>\n          <div class=\"num-review\">\n              {{numHotelReviews}} đánh giá\n          </div>\n      </div>\n    </div>\n    <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint<=5 && numHotelReviews >0\">\n      <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n      <div class=\"cls-ml\">\n          <div  class=\"text-point\">Không tốt</div>\n          <div class=\"num-review\">\n              {{numHotelReviews}} đánh giá\n          </div>\n      </div>\n    </div>\n    <div  *ngIf=\"arrimgreview && arrimgreview.length>0\" class=\"innerreview1\" style=\"overflow-x: auto\">\n      <div *ngFor=\"let review of arrimgreview;let i = index\" style=\"position: relative;\">\n    \n        <img class=\"img2\" *ngIf=\"review && review.imageUrl\"\n          src={{review.imageUrl}} />\n          <div *ngIf=\"i>1\"  class=\"cls-divback\"></div>\n            <div *ngIf=\"i>1\" (click)=\"seemoreimgrv()\" class=\"text-seemore\">\n              Xem thêm {{countimgrv}} hình\n            </div>\n            \n      </div>\n    </div>\n  </div>\n  <div class=\"mt25 div-hotelreview \"  *ngFor=\"let msg of arrHotelReviews; let idx = index\">\n    <div *ngIf=\"msg.ReviewPoint>9 && msg.ReviewPoint<=10 && numHotelReviews >0\" class=\"pos-relative\">\n      <div class=\"div-review\">\n        <ion-badge class=\"cls-ionbadgerw\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n        <div class=\"cls-ml8\">Tuyệt vời\n        </div>\n      </div>\n    </div>\n      <div *ngIf=\"msg.ReviewPoint>8 && msg.ReviewPoint<=9 && numHotelReviews >0\">\n        <div class=\"div-review\">\n          <ion-badge class=\"cls-ionbadgerw\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n          <div class=\"cls-ml8\">Rất tốt\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"msg.ReviewPoint>7 && msg.ReviewPoint<=8 && numHotelReviews >0\">\n        <div class=\"div-review\">\n          <ion-badge class=\"cls-ionbadgerw\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n          <div class=\"cls-ml8\">Khá tốt\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"msg.ReviewPoint>5 && msg.ReviewPoint<=7 && numHotelReviews >0\">\n        <div class=\"div-review\">\n          <ion-badge class=\"cls-ionbadgerw\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n          <div class=\"cls-ml8\">Tạm được\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"msg.ReviewPoint<=5 && numHotelReviews >0\">\n        <div class=\"div-review\">\n          <ion-badge class=\"cls-ionbadgerw\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n          <div class=\"cls-ml8\">Không tốt\n          </div>\n        </div>\n      </div>\n    <div class=\"cls-textreview\">\n      <label  text-wrap>\n        {{msg.BestFeature}}\n      </label>\n    </div>\n    \n    <div *ngIf=\"msg.ReviewImages && msg.ReviewImages.length>0\" class=\"innerreview\" style=\"overflow-x: auto\">\n      <div *ngFor=\"let review of msg.ReviewImages;let i = index\" style=\"position: relative;\">\n        <img (click)=\"imgreview(msg.ReviewImages,i,msg.CustomerName,msg.DateStayed)\" class=\"img1\"\n          src={{review.ImageUrl}} />\n      </div>\n    </div>\n\n    <div class=\"date-review\">\n      <div><label class=\"text-date-reviews\" text-wrap>{{msg.DateStayed}}</label></div>\n      <div><label class=\"text-date-reviews\" text-wrap>{{msg.CustomerName}}</label></div>\n    </div>\n  </div>\n</div>\n  <ng-template #loadsk>\n    <div class=\"div-avg-reviews\">\n      <div *ngFor=\"let item of reviewsk\">\n        <div  *ngIf=\"AvgPoint>9 && AvgPoint<=10 && numHotelReviews >0\">\n          <div style=\"display: flex\">\n              <ion-skeleton-text  animated style=\"width:20%;margin: 16px 0;height: 40px;border-radius: 10px;\" ion-badge-border-radius></ion-skeleton-text>\n              <div style=\"width: 100%;margin-top: 12px;margin-left: 8px;\">\n                <ion-skeleton-text animated style=\"width:20%;height: 16px;\" ></ion-skeleton-text>\n                <ion-skeleton-text animated style=\"width:20%;height: 16px;margin-top: 8px\" ></ion-skeleton-text>\n              </div>\n          </div>\n          <div style=\"display: flex;\">\n            <ion-skeleton-text animated style=\"width:100%;height: 104px;border-radius: 4px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width:100%;height: 104px;margin-left: 8px; border-radius: 4px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width:100%;height: 104px;margin-left: 8px; border-radius: 4px;\"></ion-skeleton-text>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</ion-content>"

/***/ }),

/***/ "./src/app/hotelreviews/hotelreviews.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/hotelreviews/hotelreviews.module.ts ***!
  \*****************************************************/
/*! exports provided: HotelReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelReviewsPageModule", function() { return HotelReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hotelreviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotelreviews */ "./src/app/hotelreviews/hotelreviews.ts");







let HotelReviewsPageModule = class HotelReviewsPageModule {
};
HotelReviewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hotelreviews__WEBPACK_IMPORTED_MODULE_6__["HotelReviewsPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _hotelreviews__WEBPACK_IMPORTED_MODULE_6__["HotelReviewsPage"]
                }
            ])
        ],
    })
], HotelReviewsPageModule);



/***/ }),

/***/ "./src/app/hotelreviews/hotelreviews.scss":
/*!************************************************!*\
  !*** ./src/app/hotelreviews/hotelreviews.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.m-bottom-40 {\n  margin-bottom: 40px;\n}\n\n.hotel-review-page {\n  margin-bottom: 40px;\n}\n\n.hotel-review-page .innerreview {\n  margin-top: 3px;\n  margin-left: -8px;\n}\n\n.hotel-review-page .innerreview div {\n  display: table-cell;\n}\n\n.hotel-review-page .img1 {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  width: 104px;\n  height: 104px;\n  margin-left: 5px;\n  max-width: initial;\n  border-radius: 4px;\n}\n\n.hotel-review-page .text-review {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .review-point {\n  color: #26bed6;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n}\n\n.hotel-review-page .text-customer-name {\n  color: #828282;\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n\n.hotel-review-page .text-bestfeature {\n  margin: 0;\n  font-weight: 300;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .row-padding {\n  margin: 0px 16px;\n  padding: 0;\n}\n\n.hotel-review-page .p-top-19 {\n  padding-top: 19px;\n}\n\n.hotel-review-page .p-top-5 {\n  padding-top: 5px;\n}\n\n.hotel-review-page .p-top-10 {\n  padding-top: 10px;\n}\n\n.hotel-review-page .cls-ionbadge {\n  width: 49px;\n  height: 32px;\n  border-radius: 6px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  padding: 6px 0px 6px 0px;\n  background: #A0C246;\n}\n\n.hotel-review-page .cls-ml16 {\n  margin-left: 16px;\n}\n\n.hotel-review-page .cls-ml6 {\n  margin-left: 6px;\n}\n\n.hotel-review-page .cls-ml8 {\n  margin-left: 8px;\n  align-self: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.hotel-review-page .text-titlereview {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.hotel-review-page .cls-textreview {\n  margin-top: 6px;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .cls-ionbadgerw {\n  width: 43px;\n  height: 24px;\n  border-radius: 6px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  background: #A0C246;\n}\n\n.hotel-review-page .mt25 {\n  margin-top: 25px;\n  padding: 0 16px;\n  position: relative;\n}\n\n.hotel-review-page .div-cinout {\n  height: 68px;\n  background-color: #f2f2f2;\n  padding: 20px 8px 8px 8px;\n}\n\n.hotel-review-page .cls-gridcinout {\n  margin-top: -12px;\n  padding: 8px;\n}\n\n.hotel-review-page .text-seemore {\n  position: absolute;\n  top: 35px;\n  left: 30px;\n  width: 66px;\n  height: 32px;\n  font-family: Helvetica;\n  font-size: 12px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.52;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.hotel-review-page .innerreview1 {\n  height: 100%;\n  margin-top: 16px;\n  margin-left: -8px;\n}\n\n.hotel-review-page .innerreview1 div {\n  display: table-cell;\n}\n\n.hotel-review-page .img2 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 104px;\n  height: 104px;\n  margin-left: 8px;\n  border-radius: 4px;\n}\n\n.hotel-review-page .div-review {\n  display: flex;\n  margin-top: 11px;\n  line-height: 30px;\n}\n\n.hotel-review-page .lh-normal {\n  line-height: inherit !important;\n}\n\n.hotel-review-page .text-point {\n  color: #26bed6;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.hotel-review-page .num-review {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n\n.hotel-review-page .div-avg-reviews {\n  padding: 16px 16px 0 16px;\n}\n\n.hotel-review-page .text-date-reviews {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.4px;\n  font-weight: 200;\n  padding-top: 6px;\n  line-height: 15px;\n}\n\n.text-date-reviews {\n  color: #828282;\n  font-size: 12px;\n  font-weight: 200;\n  letter-spacing: -0.34px;\n}\n\n.cls-textreview {\n  margin-top: 6px;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n}\n\n.div-hotelreview .pos-relative {\n  position: relative;\n}\n\n.div-hotelreview .date-review {\n  position: absolute;\n  top: 0;\n  right: 16px;\n  line-height: 12px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvaG90ZWxyZXZpZXdzL2hvdGVscmV2aWV3cy5zY3NzIiwic3JjL2FwcC9ob3RlbHJldmlld3MvaG90ZWxyZXZpZXdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQUc7RUFDRyxtQkFBQTtBQ0dOOztBREZNO0VBQ0UsZUFBQTtFQUNFLGlCQUFBO0FDSVY7O0FESFU7RUFDRSxtQkFBQTtBQ0taOztBREZRO0VBQ0UsK0JBQUE7S0FBQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSVY7O0FERk07RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUNJUjs7QURGTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0lSOztBREZNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0lSOztBREZNO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDSVI7O0FERk07RUFDQSxnQkFBQTtFQUFpQixVQUFBO0FDS3ZCOztBREhNO0VBQ0EsaUJBQUE7QUNLTjs7QURITTtFQUNBLGdCQUFBO0FDS047O0FESE07RUFDQSxpQkFBQTtBQ0tOOztBREZNO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDR1Y7O0FERE07RUFFSSxpQkFBQTtBQ0VWOztBREFNO0VBRUksZ0JBQUE7QUNDVjs7QURDTTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0FWOztBREVNO0VBRUksaUJBQUE7RUFDQSxlQUFBO0FDRFY7O0FER007RUFFSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0ZWOztBRElNO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0hWOztBREtNO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKVjs7QURNTTtFQUVJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDTFY7O0FET007RUFFSSxpQkFBQTtFQUNBLFlBQUE7QUNOVjs7QURRTTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTlY7O0FEUU07RUFDRSxZQUFBO0VBSUEsZ0JBQUE7RUFDQSxpQkFBQTtBQ1RSOztBREtRO0VBQ0UsbUJBQUE7QUNIVjs7QURRTTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNOUjs7QURRTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTlI7O0FEUUk7RUFDRSwrQkFBQTtBQ05OOztBRFFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ05SOztBRFFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ05SOztBRFFJO0VBQ0UseUJBQUE7QUNOTjs7QURRSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOTjs7QURTRztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ05KOztBRFFBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFVFO0VBQ0ksa0JBQUE7QUNQTjs7QURTSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUE4iLCJmaWxlIjoic3JjL2FwcC9ob3RlbHJldmlld3MvaG90ZWxyZXZpZXdzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC10aXRsZXtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tLWJvdHRvbS00MHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbiAgIC5ob3RlbC1yZXZpZXctcGFnZXtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAuaW5uZXJyZXZpZXd7XG4gICAgICAgIG1hcmdpbi10b3A6M3B4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgIGRpdntcbiAgICAgICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmltZzEge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtcmV2aWV3e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICB9XG4gICAgICAucmV2aWV3LXBvaW50e1xuICAgICAgICBjb2xvcjojMjZiZWQ2O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICB9XG4gICAgICAudGV4dC1jdXN0b21lci1uYW1le1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyAgICBcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1iZXN0ZmVhdHVyZXtcbiAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgIH1cbiAgICAgIC5yb3ctcGFkZGluZ3tcbiAgICAgIG1hcmdpbjogMHB4IDE2cHg7cGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIC5wLXRvcC0xOXtcbiAgICAgIHBhZGRpbmctdG9wOjE5cHg7XG4gICAgICB9XG4gICAgICAucC10b3AtNXtcbiAgICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICAgIH1cbiAgICAgIC5wLXRvcC0xMHtcbiAgICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgICB9XG5cbiAgICAgIC5jbHMtaW9uYmFkZ2VcbiAgICAgIHtcbiAgICAgICAgICB3aWR0aDogNDlweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogNnB4IDBweCA2cHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNBMEMyNDY7XG4gICAgICB9XG4gICAgICAuY2xzLW1sMTZcbiAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIH1cbiAgICAgIC5jbHMtbWw2XG4gICAgICB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIH1cbiAgICAgIC5jbHMtbWw4XG4gICAgICB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LXRpdGxlcmV2aWV3XG4gICAgICB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4XG4gICAgICB9XG4gICAgICAuY2xzLXRleHRyZXZpZXdcbiAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgfVxuICAgICAgLmNscy1pb25iYWRnZXJ3XG4gICAgICB7XG4gICAgICAgICAgd2lkdGg6IDQzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNBMEMyNDY7XG4gICAgICB9XG4gICAgICAubXQyNVxuICAgICAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5kaXYtY2lub3V0XG4gICAgICB7XG4gICAgICAgICAgaGVpZ2h0OiA2OHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgcGFkZGluZzogMjBweCA4cHggOHB4IDhweDtcbiAgICAgIH1cbiAgICAgIC5jbHMtZ3JpZGNpbm91dFxuICAgICAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LXNlZW1vcmUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDM1cHg7XG4gICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICB3aWR0aDogNjZweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjUyO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB9XG4gICAgICAuaW5uZXJyZXZpZXcxe1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpdntcbiAgICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgICB9XG4gICAgICAuaW1nMiB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTA0cHg7XG4gICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweFxuICAgICAgfVxuICAgICAgLmRpdi1yZXZpZXd7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICAubGgtbm9ybWFse1xuICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgfVxuICAgIC50ZXh0LXBvaW50e1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAubnVtLXJldmlldyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICAgIC5kaXYtYXZnLXJldmlld3N7XG4gICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxNnB4O1xuICAgIH1cbiAgICAudGV4dC1kYXRlLXJldmlld3N7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgcGFkZGluZy10b3A6IDZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIH1cbiAgIH0gXG4gICAudGV4dC1kYXRlLXJldmlld3Mge1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmNscy10ZXh0cmV2aWV3e1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvL2ZvbnQtZmFtaWx5OiBTRkNvbXBhY3REaXNwbGF5O1xuICAgIC8vZm9udC13ZWlnaHQ6IDIwMDtcbn1cbi5kaXYtaG90ZWxyZXZpZXd7XG4gIC5wb3MtcmVsYXRpdmV7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5kYXRlLXJldmlld3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIFxufSIsIi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm0tYm90dG9tLTQwIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmhvdGVsLXJldmlldy1wYWdlIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuaW5uZXJyZXZpZXcge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5pbm5lcnJldmlldyBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5pbWcxIHtcbiAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAudGV4dC1yZXZpZXcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnJldmlldy1wb2ludCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAudGV4dC1jdXN0b21lci1uYW1lIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnRleHQtYmVzdGZlYXR1cmUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAucm93LXBhZGRpbmcge1xuICBtYXJnaW46IDBweCAxNnB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5wLXRvcC0xOSB7XG4gIHBhZGRpbmctdG9wOiAxOXB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5wLXRvcC01IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAucC10b3AtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuY2xzLWlvbmJhZGdlIHtcbiAgd2lkdGg6IDQ5cHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiA2cHggMHB4IDZweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNBMEMyNDY7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmNscy1tbDE2IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmNscy1tbDYge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5jbHMtbWw4IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnRleHQtdGl0bGVyZXZpZXcge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5jbHMtdGV4dHJldmlldyB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmNscy1pb25iYWRnZXJ3IHtcbiAgd2lkdGg6IDQzcHg7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjQTBDMjQ2O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5tdDI1IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmRpdi1jaW5vdXQge1xuICBoZWlnaHQ6IDY4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDIwcHggOHB4IDhweCA4cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmNscy1ncmlkY2lub3V0IHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAudGV4dC1zZWVtb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1cHg7XG4gIGxlZnQ6IDMwcHg7XG4gIHdpZHRoOiA2NnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjUyO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuaW5uZXJyZXZpZXcxIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuaW5uZXJyZXZpZXcxIGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmltZzIge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmRpdi1yZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAubGgtbm9ybWFsIHtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAudGV4dC1wb2ludCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLm51bS1yZXZpZXcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5kaXYtYXZnLXJldmlld3Mge1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxNnB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC50ZXh0LWRhdGUtcmV2aWV3cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4udGV4dC1kYXRlLXJldmlld3Mge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLmNscy10ZXh0cmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXYtaG90ZWxyZXZpZXcgLnBvcy1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtaG90ZWxyZXZpZXcgLmRhdGUtcmV2aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/hotelreviews/hotelreviews.ts":
/*!**********************************************!*\
  !*** ./src/app/hotelreviews/hotelreviews.ts ***!
  \**********************************************/
/*! exports provided: HotelReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelReviewsPage", function() { return HotelReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hotelreviewsimage_hotelreviewsimage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../hotelreviewsimage/hotelreviewsimage */ "./src/app/hotelreviewsimage/hotelreviewsimage.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");












let HotelReviewsPage = class HotelReviewsPage {
    constructor(platform, navCtrl, gf, activatedRoute, zone, searchhotel, modalCtrl, storage, _foodservice) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this._foodservice = _foodservice;
        this.arrHotelReviews = [];
        this.numHotelReviews = 0;
        this.reviewsk = [1, 2, 3, 4, 5];
        this.loaddatadone = false;
        this.fromhotel = true;
        this.HotelID = this.activatedRoute.snapshot.paramMap.get('id');
        setTimeout(() => {
            this.loaddatadone = true;
        }, 500);
        if (_foodservice.objFoodReview) {
            if (_foodservice.listimagereview && _foodservice.listimagereview.length > 0) {
                this.countimgrv = _foodservice.listimagereview.length;
                this.pushAllImageReviews(_foodservice.listimagereview);
            }
            this.numHotelReviews = _foodservice.objFoodReview.listFoodReview.length;
            this.AvgPoint = _foodservice.objFoodReview.AvgPoint;
            this.fromhotel = false;
            let listreview = _foodservice.objFoodReview.listFoodReview;
            for (let index = 0; index < listreview.length; index++) {
                listreview[index].DateStayed = listreview[index].reviewDate;
                listreview[index].ReviewPoint = listreview[index].reviewPoint + listreview[index].deliveryPoint;
                listreview[index].BestFeature = listreview[index].bestFeature;
                listreview[index].CustomerName = listreview[index].customerName;
                listreview[index].ReviewImages = listreview[index].foreviewImage;
                listreview[index].ReviewImages.forEach(element => {
                    element.ImageUrl = element.imageUrl;
                });
                if (listreview[index].DateStayed.indexOf('-') == -1) {
                    listreview[index].DateStayed = moment__WEBPACK_IMPORTED_MODULE_3__(listreview[index].DateStayed).format('DD-MM-YYYY');
                }
                listreview[index].ReviewPoint = Math.round(listreview[index].ReviewPoint * 100) / 100;
                this.arrHotelReviews.push(listreview[index]);
            }
        }
        else {
            this.storage.get('hotelimagereviews_' + this.HotelID).then((data) => {
                if (!data) {
                    this.loadHotelImageReviews();
                }
                else {
                    this.countimgrv = data.length;
                    this.pushAllImageReviews(data);
                }
            });
            this.storage.get('hoteldetail_' + this.HotelID).then((data) => {
                if (data) {
                    this.zone.run(() => {
                        this.Name = data.Name;
                        this.HotelReviews = data.HotelReviews;
                        for (let index = 0; index < this.HotelReviews.length; index++) {
                            if (this.HotelReviews[index].DateStayed.indexOf('-') == -1) {
                                this.HotelReviews[index].DateStayed = moment__WEBPACK_IMPORTED_MODULE_3__(this.HotelReviews[index].DateStayed).format('DD-MM-YYYY');
                            }
                            this.HotelReviews[index].ReviewPoint = Math.round(this.HotelReviews[index].ReviewPoint * 100) / 100;
                            this.arrHotelReviews.push(this.HotelReviews[index]);
                        }
                        this.numHotelReviews = data.NumOfReview;
                        this.AvgPoint = data.AvgPoint;
                        if (this.AvgPoint.toString().length == 1) {
                            this.AvgPoint = this.AvgPoint + ".0";
                        }
                        this.sortdate();
                    });
                }
                else {
                    this.getdata();
                }
            });
        }
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.navigateBack('/hoteldetail/' + this.HotelID);
            });
        });
        gf.googleAnalytion('hotelreviews', 'load', '');
    }
    ngOnInit() {
    }
    goback() {
        if (this.fromhotel) {
            this.navCtrl.navigateBack('/hoteldetail/' + this.HotelID);
        }
        else {
            this.navCtrl.back();
        }
    }
    getdata() {
        var se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + "/mhoteldetail/" + this.HotelID;
        var options = {
            method: 'POST',
            url: url,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "hotelreviews",
                    func: "getdata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "hotelreviews";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                se.zone.run(() => {
                    se.Name = jsondata.Name;
                    se.HotelReviews = jsondata.HotelReviews;
                    for (let index = 0; index < se.HotelReviews.length; index++) {
                        se.HotelReviews[index].DateStayed = moment__WEBPACK_IMPORTED_MODULE_3__(se.HotelReviews[index].DateStayed).format('DD-MM-YYYY');
                        se.HotelReviews[index].ReviewPoint = Math.round(se.HotelReviews[index].ReviewPoint * 100) / 100;
                        se.arrHotelReviews.push(se.HotelReviews[index]);
                    }
                    se.numHotelReviews = se.HotelReviews.length;
                    se.AvgPoint = jsondata.AvgPoint;
                    se.sortdate();
                });
            }
        });
    }
    sortdate() {
        var se = this;
        if (se.arrHotelReviews && se.arrHotelReviews.length > 0) {
            se.zone.run(() => se.arrHotelReviews.sort(function (a, b) {
                let direction = 1;
                if (moment__WEBPACK_IMPORTED_MODULE_3__(a['DateSort']).diff(moment__WEBPACK_IMPORTED_MODULE_3__(b['DateSort']), 'days') > 0) {
                    return -1 * direction;
                }
                else {
                    return 1 * direction;
                }
            }));
        }
    }
    ;
    imgreview(arrimgreview, indeximgreview, CustomerName, DateStayed) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.searchhotel.arrimgreview = arrimgreview;
            this.searchhotel.indexreviewimg = indeximgreview;
            this.searchhotel.cusnamereview = CustomerName;
            this.searchhotel.datereview = DateStayed;
            const modal = yield this.modalCtrl.create({
                component: _hotelreviewsimage_hotelreviewsimage__WEBPACK_IMPORTED_MODULE_8__["HotelreviewsimagePage"],
            });
            modal.present();
        });
    }
    loadHotelImageReviews() {
        var se = this;
        if (this.HotelID) {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetHotelImageReviews?hotelid=' + this.searchhotel.hotelID;
            this.gf.RequestApi('GET', url, {}, {}, 'hoteldetail', 'GetHotelImageReviews').then((data) => {
                if (data.data) {
                    this.storage.set('hotelimagereviews_' + this.HotelID, data.data);
                    this.pushAllImageReviews(data.data);
                }
            });
        }
    }
    pushAllImageReviews(data) {
        var se = this;
        se.arrimgreview = [];
        for (let i = 0; i < 3; i++) {
            se.arrimgreview.push(data[i]);
        }
        if (data.length > 3) {
            se.countimgrv = data.length - 3;
        }
    }
    seemoreimgrv() {
        if (!this._foodservice.objFoodReview) {
            this.searchhotel.hotelID = this.HotelID;
            this.searchhotel.hotelName = this.Name;
        }
        this.navCtrl.navigateForward('/cusimgreview');
    }
};
HotelReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hotelreviews',
        template: __webpack_require__(/*! ./hotelreviews.html */ "./src/app/hotelreviews/hotelreviews.html"),
        styles: [__webpack_require__(/*! ./hotelreviews.scss */ "./src/app/hotelreviews/hotelreviews.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_11__["foodService"]])
], HotelReviewsPage);



/***/ })

}]);
//# sourceMappingURL=hotelreviews-hotelreviews-module.js.map