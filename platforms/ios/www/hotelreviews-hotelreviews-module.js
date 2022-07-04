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

module.exports = ".text-title {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.m-bottom-40 {\n  margin-bottom: 40px;\n}\n\n.hotel-review-page {\n  margin-bottom: 40px;\n}\n\n.hotel-review-page .innerreview {\n  margin-top: 3px;\n  margin-left: -8px;\n}\n\n.hotel-review-page .innerreview div {\n  display: table-cell;\n}\n\n.hotel-review-page .img1 {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  width: 104px;\n  height: 104px;\n  margin-left: 5px;\n  max-width: initial;\n  border-radius: 4px;\n}\n\n.hotel-review-page .text-review {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .review-point {\n  color: #26bed6;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n}\n\n.hotel-review-page .text-customer-name {\n  color: #828282;\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n\n.hotel-review-page .text-bestfeature {\n  margin: 0;\n  font-weight: 300;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .row-padding {\n  margin: 0px 16px;\n  padding: 0;\n}\n\n.hotel-review-page .p-top-19 {\n  padding-top: 19px;\n}\n\n.hotel-review-page .p-top-5 {\n  padding-top: 5px;\n}\n\n.hotel-review-page .p-top-10 {\n  padding-top: 10px;\n}\n\n.hotel-review-page .cls-ionbadge {\n  width: 49px;\n  height: 32px;\n  border-radius: 6px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  padding: 6px 0px 6px 0px;\n  background: #A0C246;\n}\n\n.hotel-review-page .cls-ml16 {\n  margin-left: 16px;\n}\n\n.hotel-review-page .cls-ml6 {\n  margin-left: 6px;\n}\n\n.hotel-review-page .cls-ml8 {\n  margin-left: 8px;\n  align-self: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.hotel-review-page .text-titlereview {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.hotel-review-page .cls-textreview {\n  margin-top: 6px;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.hotel-review-page .cls-ionbadgerw {\n  width: 43px;\n  height: 24px;\n  border-radius: 6px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  background: #A0C246;\n}\n\n.hotel-review-page .mt25 {\n  margin-top: 25px;\n  padding: 0 16px;\n  position: relative;\n}\n\n.hotel-review-page .div-cinout {\n  height: 68px;\n  background-color: #f2f2f2;\n  padding: 20px 8px 8px 8px;\n}\n\n.hotel-review-page .cls-gridcinout {\n  margin-top: -12px;\n  padding: 8px;\n}\n\n.hotel-review-page .text-seemore {\n  position: absolute;\n  top: 35px;\n  left: 30px;\n  width: 66px;\n  height: 32px;\n  font-family: Helvetica;\n  font-size: 12px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.52;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.hotel-review-page .innerreview1 {\n  height: 100%;\n  margin-top: 16px;\n  margin-left: -8px;\n}\n\n.hotel-review-page .innerreview1 div {\n  display: table-cell;\n}\n\n.hotel-review-page .img2 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 104px;\n  height: 104px;\n  margin-left: 8px;\n  border-radius: 4px;\n}\n\n.hotel-review-page .div-review {\n  display: flex;\n  margin-top: 11px;\n  line-height: 30px;\n}\n\n.hotel-review-page .lh-normal {\n  line-height: inherit !important;\n}\n\n.hotel-review-page .text-point {\n  color: #26bed6;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.hotel-review-page .num-review {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n\n.hotel-review-page .div-avg-reviews {\n  padding: 16px 16px 0 16px;\n}\n\n.hotel-review-page .text-date-reviews {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.4px;\n  font-weight: 200;\n  padding-top: 6px;\n  line-height: 15px;\n}\n\n.text-date-reviews {\n  color: #828282;\n  font-size: 12px;\n  font-weight: 200;\n  letter-spacing: -0.34px;\n}\n\n.cls-textreview {\n  margin-top: 6px;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n}\n\n.div-hotelreview .pos-relative {\n  position: relative;\n}\n\n.div-hotelreview .date-review {\n  position: absolute;\n  top: 0;\n  right: 16px;\n  line-height: 12px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2hvdGVscmV2aWV3cy9ob3RlbHJldmlld3Muc2NzcyIsInNyYy9hcHAvaG90ZWxyZXZpZXdzL2hvdGVscmV2aWV3cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBREFHO0VBQ0csbUJBQUE7QUNHTjs7QURGTTtFQUNFLGVBQUE7RUFDRSxpQkFBQTtBQ0lWOztBREhVO0VBQ0UsbUJBQUE7QUNLWjs7QURGUTtFQUNFLCtCQUFBO0tBQUEsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0lWOztBREZNO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FDSVI7O0FERk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNJUjs7QURGTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNJUjs7QURGTTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0lSOztBREZNO0VBQ0EsZ0JBQUE7RUFBaUIsVUFBQTtBQ0t2Qjs7QURITTtFQUNBLGlCQUFBO0FDS047O0FESE07RUFDQSxnQkFBQTtBQ0tOOztBREhNO0VBQ0EsaUJBQUE7QUNLTjs7QURGTTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0dWOztBRERNO0VBRUksaUJBQUE7QUNFVjs7QURBTTtFQUVJLGdCQUFBO0FDQ1Y7O0FEQ007RUFFSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNBVjs7QURFTTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtBQ0RWOztBREdNO0VBRUksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNGVjs7QURJTTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNIVjs7QURLTTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSlY7O0FETU07RUFFSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0xWOztBRE9NO0VBRUksaUJBQUE7RUFDQSxZQUFBO0FDTlY7O0FEUU07RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ05WOztBRFFNO0VBQ0UsWUFBQTtFQUlBLGdCQUFBO0VBQ0EsaUJBQUE7QUNUUjs7QURLUTtFQUNFLG1CQUFBO0FDSFY7O0FEUU07RUFDRSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTlI7O0FEUU07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ05SOztBRFFJO0VBQ0UsK0JBQUE7QUNOTjs7QURRSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOUjs7QURRSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNOUjs7QURRSTtFQUNFLHlCQUFBO0FDTk47O0FEUUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDTk47O0FEU0c7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNOSjs7QURRQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNMSjs7QURVRTtFQUNJLGtCQUFBO0FDUE47O0FEU0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BOIiwiZmlsZSI6InNyYy9hcHAvaG90ZWxyZXZpZXdzL2hvdGVscmV2aWV3cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubS1ib3R0b20tNDB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4gICAuaG90ZWwtcmV2aWV3LXBhZ2V7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgLmlubmVycmV2aWV3e1xuICAgICAgICBtYXJnaW4tdG9wOjNweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLThweDtcbiAgICAgICAgICBkaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pbWcxIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICAgICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LXJldmlld3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgfVxuICAgICAgLnJldmlldy1wb2ludHtcbiAgICAgICAgY29sb3I6IzI2YmVkNjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgfVxuICAgICAgLnRleHQtY3VzdG9tZXItbmFtZXtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgICAgXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtYmVzdGZlYXR1cmV7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICB9XG4gICAgICAucm93LXBhZGRpbmd7XG4gICAgICBtYXJnaW46IDBweCAxNnB4O3BhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgICAucC10b3AtMTl7XG4gICAgICBwYWRkaW5nLXRvcDoxOXB4O1xuICAgICAgfVxuICAgICAgLnAtdG9wLTV7XG4gICAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgICB9XG4gICAgICAucC10b3AtMTB7XG4gICAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgICAgfVxuXG4gICAgICAuY2xzLWlvbmJhZGdlXG4gICAgICB7XG4gICAgICAgICAgd2lkdGg6IDQ5cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCAwcHggNnB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQTBDMjQ2O1xuICAgICAgfVxuICAgICAgLmNscy1tbDE2XG4gICAgICB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICB9XG4gICAgICAuY2xzLW1sNlxuICAgICAge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICB9XG4gICAgICAuY2xzLW1sOFxuICAgICAge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICAudGV4dC10aXRsZXJldmlld1xuICAgICAge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweFxuICAgICAgfVxuICAgICAgLmNscy10ZXh0cmV2aWV3XG4gICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgIH1cbiAgICAgIC5jbHMtaW9uYmFkZ2Vyd1xuICAgICAge1xuICAgICAgICAgIHdpZHRoOiA0M3B4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjQTBDMjQ2O1xuICAgICAgfVxuICAgICAgLm10MjVcbiAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuZGl2LWNpbm91dFxuICAgICAge1xuICAgICAgICAgIGhlaWdodDogNjhweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggOHB4IDhweCA4cHg7XG4gICAgICB9XG4gICAgICAuY2xzLWdyaWRjaW5vdXRcbiAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1zZWVtb3JlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41MjtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgfVxuICAgICAgLmlubmVycmV2aWV3MXtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXZ7XG4gICAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgfVxuICAgICAgLmltZzIge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcbiAgICAgIH1cbiAgICAgIC5kaXYtcmV2aWV3e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLmxoLW5vcm1hbHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgICAudGV4dC1wb2ludHtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLm51bS1yZXZpZXcge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgICAuZGl2LWF2Zy1yZXZpZXdze1xuICAgICAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcbiAgICB9XG4gICAgLnRleHQtZGF0ZS1yZXZpZXdze1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB9XG4gICB9IFxuICAgLnRleHQtZGF0ZS1yZXZpZXdzIHtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5jbHMtdGV4dHJldmlld3tcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy9mb250LWZhbWlseTogU0ZDb21wYWN0RGlzcGxheTtcbiAgICAvL2ZvbnQtd2VpZ2h0OiAyMDA7XG59XG4uZGl2LWhvdGVscmV2aWV3e1xuICAucG9zLXJlbGF0aXZle1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAuZGF0ZS1yZXZpZXd7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICBcbn0iLCIudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tLWJvdHRvbS00MCB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5ob3RlbC1yZXZpZXctcGFnZSB7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmlubmVycmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuaW5uZXJyZXZpZXcgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuaW1nMSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnRleHQtcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5yZXZpZXctcG9pbnQge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnRleHQtY3VzdG9tZXItbmFtZSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC50ZXh0LWJlc3RmZWF0dXJlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnJvdy1wYWRkaW5nIHtcbiAgbWFyZ2luOiAwcHggMTZweDtcbiAgcGFkZGluZzogMDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAucC10b3AtMTkge1xuICBwYWRkaW5nLXRvcDogMTlweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAucC10b3AtNSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnAtdG9wLTEwIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmNscy1pb25iYWRnZSB7XG4gIHdpZHRoOiA0OXB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDBweCA2cHggMHB4O1xuICBiYWNrZ3JvdW5kOiAjQTBDMjQ2O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5jbHMtbWwxNiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5jbHMtbWw2IHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuY2xzLW1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC50ZXh0LXRpdGxlcmV2aWV3IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuY2xzLXRleHRyZXZpZXcge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5jbHMtaW9uYmFkZ2VydyB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0EwQzI0Njtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAubXQyNSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5kaXYtY2lub3V0IHtcbiAgaGVpZ2h0OiA2OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAyMHB4IDhweCA4cHggOHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5jbHMtZ3JpZGNpbm91dCB7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnRleHQtc2VlbW9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNXB4O1xuICBsZWZ0OiAzMHB4O1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41MjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmlubmVycmV2aWV3MSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmlubmVycmV2aWV3MSBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5pbWcyIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5kaXYtcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLmxoLW5vcm1hbCB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG59XG4uaG90ZWwtcmV2aWV3LXBhZ2UgLnRleHQtcG9pbnQge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmhvdGVsLXJldmlldy1wYWdlIC5udW0tcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAuZGl2LWF2Zy1yZXZpZXdzIHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcbn1cbi5ob3RlbC1yZXZpZXctcGFnZSAudGV4dC1kYXRlLXJldmlld3Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLnRleHQtZGF0ZS1yZXZpZXdzIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG5cbi5jbHMtdGV4dHJldmlldyB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGl2LWhvdGVscmV2aWV3IC5wb3MtcmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWhvdGVscmV2aWV3IC5kYXRlLXJldmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

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