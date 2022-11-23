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

module.exports = ".text-title {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.m-bottom-40 {\n  margin-bottom: 40px;\n}\n\n.hotel-review-page {\n  margin-bottom: 40px;\n}\n\n.hotel-review-page .innerreview {\n  margin-top: 3px;\n  margin-left: -8px;\n}\n\n.hotel-review-page .innerreview div {\n  display: table-cell;\n}\n\n.hotel-review-page .img1 {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  width: 104px;\n  height: 104px;\n  margin-left: 5px;\n  max-width: initial;\n  border-radius: 4px;\n}\n\n.hotel-review-page .text-review {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .review-point {\n  color: #26bed6;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n}\n\n.hotel-review-page .text-customer-name {\n  color: #828282;\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n\n.hotel-review-page .text-bestfeature {\n  margin: 0;\n  font-weight: 300;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .row-padding {\n  margin: 0px 16px;\n  padding: 0;\n}\n\n.hotel-review-page .p-top-19 {\n  padding-top: 19px;\n}\n\n.hotel-review-page .p-top-5 {\n  padding-top: 5px;\n}\n\n.hotel-review-page .p-top-10 {\n  padding-top: 10px;\n}\n\n.hotel-review-page .cls-ionbadge {\n  width: 49px;\n  height: 32px;\n  border-radius: 6px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  padding: 6px 0px 6px 0px;\n  background: #A0C246;\n}\n\n.hotel-review-page .cls-ml16 {\n  margin-left: 16px;\n}\n\n.hotel-review-page .cls-ml6 {\n  margin-left: 6px;\n}\n\n.hotel-review-page .cls-ml8 {\n  margin-left: 8px;\n  align-self: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.hotel-review-page .text-titlereview {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.hotel-review-page .cls-textreview {\n  margin-top: 6px;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .cls-ionbadgerw {\n  width: 43px;\n  height: 24px;\n  border-radius: 6px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  background: #A0C246;\n}\n\n.hotel-review-page .mt25 {\n  margin-top: 25px;\n  padding: 0 16px;\n  position: relative;\n}\n\n.hotel-review-page .div-cinout {\n  height: 68px;\n  background-color: #f2f2f2;\n  padding: 20px 8px 8px 8px;\n}\n\n.hotel-review-page .cls-gridcinout {\n  margin-top: -12px;\n  padding: 8px;\n}\n\n.hotel-review-page .text-seemore {\n  position: absolute;\n  top: 35px;\n  left: 30px;\n  width: 66px;\n  height: 32px;\n  font-family: Helvetica;\n  font-size: 12px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.52;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.hotel-review-page .innerreview1 {\n  height: 100%;\n  margin-top: 16px;\n  margin-left: -8px;\n}\n\n.hotel-review-page .innerreview1 div {\n  display: table-cell;\n}\n\n.hotel-review-page .img2 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 104px;\n  height: 104px;\n  margin-left: 8px;\n  border-radius: 4px;\n}\n\n.hotel-review-page .div-review {\n  display: flex;\n  margin-top: 11px;\n  line-height: 30px;\n}\n\n.hotel-review-page .lh-normal {\n  line-height: inherit !important;\n}\n\n.hotel-review-page .text-point {\n  color: #26bed6;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.hotel-review-page .num-review {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n\n.hotel-review-page .div-avg-reviews {\n  padding: 16px 16px 0 16px;\n}\n\n.hotel-review-page .text-date-reviews {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.4px;\n  font-weight: 200;\n  padding-top: 6px;\n  line-height: 15px;\n}\n\n.text-date-reviews {\n  color: #828282;\n  font-size: 12px;\n  font-weight: 200;\n  letter-spacing: -0.34px;\n}\n\n.cls-textreview {\n  margin-top: 6px;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n}\n\n.div-hotelreview .pos-relative {\n  position: relative;\n}\n\n.div-hotelreview .date-review {\n  position: absolute;\n  top: 0;\n  right: 16px;\n  line-height: 12px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9ob3RlbHJldmlld3MvaG90ZWxyZXZpZXdzLnNjc3MiLCJzcmMvYXBwL2hvdGVscmV2aWV3cy9ob3RlbHJldmlld3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRjs7QURBRztFQUNHLG1CQUFBO0FDR047O0FERk07RUFDRSxlQUFBO0VBQ0UsaUJBQUE7QUNJVjs7QURIVTtFQUNFLG1CQUFBO0FDS1o7O0FERlE7RUFDRSwrQkFBQTtLQUFBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJVjs7QURGTTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0lSOztBREZNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDSVI7O0FERk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDSVI7O0FERk07RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNJUjs7QURGTTtFQUNBLGdCQUFBO0VBQWlCLFVBQUE7QUNLdkI7O0FESE07RUFDQSxpQkFBQTtBQ0tOOztBREhNO0VBQ0EsZ0JBQUE7QUNLTjs7QURITTtFQUNBLGlCQUFBO0FDS047O0FERk07RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNHVjs7QURETTtFQUVJLGlCQUFBO0FDRVY7O0FEQU07RUFFSSxnQkFBQTtBQ0NWOztBRENNO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQVY7O0FERU07RUFFSSxpQkFBQTtFQUNBLGVBQUE7QUNEVjs7QURHTTtFQUVJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDRlY7O0FESU07RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSFY7O0FES007RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pWOztBRE1NO0VBRUksWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNMVjs7QURPTTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtBQ05WOztBRFFNO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNOVjs7QURRTTtFQUNFLFlBQUE7RUFJQSxnQkFBQTtFQUNBLGlCQUFBO0FDVFI7O0FES1E7RUFDRSxtQkFBQTtBQ0hWOztBRFFNO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ05SOztBRFFNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOUjs7QURRSTtFQUNFLCtCQUFBO0FDTk47O0FEUUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTlI7O0FEUUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTlI7O0FEUUk7RUFDRSx5QkFBQTtBQ05OOztBRFFJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ05OOztBRFNHO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTko7O0FEUUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDTEo7O0FEVUU7RUFDSSxrQkFBQTtBQ1BOOztBRFNJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNQTiIsImZpbGUiOiJzcmMvYXBwL2hvdGVscmV2aWV3cy9ob3RlbHJldmlld3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXRpdGxle1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm0tYm90dG9tLTQwe1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuICAgLmhvdGVsLXJldmlldy1wYWdle1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgIC5pbm5lcnJldmlld3tcbiAgICAgICAgbWFyZ2luLXRvcDozcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgICAgICAgZGl2e1xuICAgICAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaW1nMSB7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTA0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1yZXZpZXd7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgIH1cbiAgICAgIC5yZXZpZXctcG9pbnR7XG4gICAgICAgIGNvbG9yOiMyNmJlZDY7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWN1c3RvbWVyLW5hbWV7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7ICAgIFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWJlc3RmZWF0dXJle1xuICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgfVxuICAgICAgLnJvdy1wYWRkaW5ne1xuICAgICAgbWFyZ2luOiAwcHggMTZweDtwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgLnAtdG9wLTE5e1xuICAgICAgcGFkZGluZy10b3A6MTlweDtcbiAgICAgIH1cbiAgICAgIC5wLXRvcC01e1xuICAgICAgcGFkZGluZy10b3A6NXB4O1xuICAgICAgfVxuICAgICAgLnAtdG9wLTEwe1xuICAgICAgcGFkZGluZy10b3A6MTBweDtcbiAgICAgIH1cblxuICAgICAgLmNscy1pb25iYWRnZVxuICAgICAge1xuICAgICAgICAgIHdpZHRoOiA0OXB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMHB4IDZweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0EwQzI0NjtcbiAgICAgIH1cbiAgICAgIC5jbHMtbWwxNlxuICAgICAge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgICAgLmNscy1tbDZcbiAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgfVxuICAgICAgLmNscy1tbDhcbiAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgICAgLnRleHQtdGl0bGVyZXZpZXdcbiAgICAgIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHhcbiAgICAgIH1cbiAgICAgIC5jbHMtdGV4dHJldmlld1xuICAgICAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICB9XG4gICAgICAuY2xzLWlvbmJhZGdlcndcbiAgICAgIHtcbiAgICAgICAgICB3aWR0aDogNDNweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0EwQzI0NjtcbiAgICAgIH1cbiAgICAgIC5tdDI1XG4gICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmRpdi1jaW5vdXRcbiAgICAgIHtcbiAgICAgICAgICBoZWlnaHQ6IDY4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDhweCA4cHggOHB4O1xuICAgICAgfVxuICAgICAgLmNscy1ncmlkY2lub3V0XG4gICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtc2VlbW9yZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMzVweDtcbiAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICAgIC5pbm5lcnJldmlldzF7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGl2e1xuICAgICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgIH1cbiAgICAgIC5pbWcyIHtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XG4gICAgICB9XG4gICAgICAuZGl2LXJldmlld3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC5saC1ub3JtYWx7XG4gICAgICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB9XG4gICAgLnRleHQtcG9pbnR7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5udW0tcmV2aWV3IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgLmRpdi1hdmctcmV2aWV3c3tcbiAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XG4gICAgfVxuICAgIC50ZXh0LWRhdGUtcmV2aWV3c3tcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgfVxuICAgfSBcbiAgIC50ZXh0LWRhdGUtcmV2aWV3cyB7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY2xzLXRleHRyZXZpZXd7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vZm9udC1mYW1pbHk6IFNGQ29tcGFjdERpc3BsYXk7XG4gICAgLy9mb250LXdlaWdodDogMjAwO1xufVxuLmRpdi1ob3RlbHJldmlld3tcbiAgLnBvcy1yZWxhdGl2ZXtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLmRhdGUtcmV2aWV3e1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgXG59IiwiLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubS1ib3R0b20tNDAge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uaG90ZWwtcmV2aWV3LXBhZ2Uge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5pbm5lcnJldmlldyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmlubmVycmV2aWV3IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmltZzEge1xuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC50ZXh0LXJldmlldyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAucmV2aWV3LXBvaW50IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC50ZXh0LWN1c3RvbWVyLW5hbWUge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAudGV4dC1iZXN0ZmVhdHVyZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5yb3ctcGFkZGluZyB7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG4gIHBhZGRpbmc6IDA7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnAtdG9wLTE5IHtcbiAgcGFkZGluZy10b3A6IDE5cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnAtdG9wLTUge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5wLXRvcC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5jbHMtaW9uYmFkZ2Uge1xuICB3aWR0aDogNDlweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCAwcHggNnB4IDBweDtcbiAgYmFja2dyb3VuZDogI0EwQzI0Njtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuY2xzLW1sMTYge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuY2xzLW1sNiB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmNscy1tbDgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAudGV4dC10aXRsZXJldmlldyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmNscy10ZXh0cmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuY2xzLWlvbmJhZGdlcncge1xuICB3aWR0aDogNDNweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNBMEMyNDY7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLm10MjUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuZGl2LWNpbm91dCB7XG4gIGhlaWdodDogNjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMjBweCA4cHggOHB4IDhweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuY2xzLWdyaWRjaW5vdXQge1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC50ZXh0LXNlZW1vcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzVweDtcbiAgbGVmdDogMzBweDtcbiAgd2lkdGg6IDY2cHg7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTI7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5pbm5lcnJldmlldzEge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5pbm5lcnJldmlldzEgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuaW1nMiB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuZGl2LXJldmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5saC1ub3JtYWwge1xuICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC50ZXh0LXBvaW50IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAubnVtLXJldmlldyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmRpdi1hdmctcmV2aWV3cyB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnRleHQtZGF0ZS1yZXZpZXdzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi50ZXh0LWRhdGUtcmV2aWV3cyB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uY2xzLXRleHRyZXZpZXcge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdi1ob3RlbHJldmlldyAucG9zLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1ob3RlbHJldmlldyAuZGF0ZS1yZXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

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