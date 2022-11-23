(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combocarpaymentbreakdown-combocarpaymentbreakdown-module"],{

/***/ "./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CombocarpaymentbreakdownPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombocarpaymentbreakdownPageModule", function() { return CombocarpaymentbreakdownPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _combocarpaymentbreakdown_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combocarpaymentbreakdown.page */ "./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.ts");







const routes = [
    {
        path: '',
        component: _combocarpaymentbreakdown_page__WEBPACK_IMPORTED_MODULE_6__["CombocarpaymentbreakdownPage"]
    }
];
let CombocarpaymentbreakdownPageModule = class CombocarpaymentbreakdownPageModule {
};
CombocarpaymentbreakdownPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_combocarpaymentbreakdown_page__WEBPACK_IMPORTED_MODULE_6__["CombocarpaymentbreakdownPage"]]
    })
], CombocarpaymentbreakdownPageModule);



/***/ }),

/***/ "./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"combocarpaymentbrackdown-header\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div  class=\"align-self-center\" >\n          <div class=\"div-goback\" (click)=\"goback()\" >\n              <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"title-header\"><label class=\"text-title\">Chi tiết combo</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"combocarpaymentbrackdown-content\">\n  <div padding>\n    <div class=\"carcombo-hotel\">\n      <div class=\"img-hotel\">\n        <img class=\"img-hotel-avatar\" *ngIf=\"roomObj.Images\" [src]=\"roomObj.Images\" />\n        <img class=\"img-hotel-avatar\" *ngIf=\"!roomObj.Images\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\" />\n      </div>\n  \n      <div class=\"info-hotel\">\n        <!-- Tên -->\n        <div class=\"name-hotel f-bold\">\n          <ion-label>{{objectDetail.titlecombo}}</ion-label>\n        </div>\n        <!-- Địa chỉ -->\n        <div class=\"div-address p-top-13\">\n          <!-- img-local -->\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/iocnsearch/ic_location.svg\">\n          </div>\n          <!-- address -->\n          <div class=\"text-address text-thin\">\n            <ion-label>{{objectDetail.Address}}</ion-label>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n    \n    <div class=\"div-room-name\">\n      <div class=\"text-room-name\">{{objectDetail.nameroom}}</div>\n      <div class=\"text-mealtype-chargefee\">{{objectDetail.breakfast}}</div>\n      <div class=\"text-mealtype-chargefee\" *ngIf=\"mealtypePromotion\">{{mealtypePromotion}}</div>\n      <!-- <div class=\"text-mealtype-chargefee\" *ngIf=\"objectDetail.RoomPriceDiffUnit >0\">+ {{objectDetail.RoomPriceDiffUnit}} VND/người</div> -->\n    </div>\n  \n    <div class=\"surcharge-fee-detail\">\n      <div class=\"adult-fee\">\n        <div class=\"div-text-fee\">\n          <div class=\"text-fee\">1 người lớn</div>\n          <div class=\"text-fee-price\">{{PriceDiffUnitAdult}} đ</div>\n        </div>\n        <div class=\"div-text-fee\" *ngIf='RoomPriceDiffUnit'>\n          <div class=\"f-12\">Phụ thu phòng: + {{RoomPriceDiffUnit}} đ</div>\n        </div>\n\n        <div class=\"div-text-fee\" *ngIf='TicketDifferenceFeeUnit && TicketDifferenceFeeUnit != 0'>\n          <div class=\"f-12\" *ngIf=\"TicketDifferenceFeeUnit.indexOf('-') == -1\">Phụ thu vé xe: + {{TicketDifferenceFeeUnit}} đ</div>\n          <div class=\"f-12\" *ngIf=\"TicketDifferenceFeeUnit.indexOf('-') != -1\">Phụ thu vé xe: {{TicketDifferenceFeeUnit}} đ</div>\n        </div>\n\n        <div class=\"div-text-fee\" *ngIf=\"surchargedepunit\">\n          <div class=\"f-12\">Phụ thu đón/trả chiều đi: + {{surchargedepunit}} đ</div>\n        </div>\n\n        <div class=\"div-text-fee\" *ngIf=\"surchargeretunit\">\n          <div class=\"f-12\">Phụ thu đón/trả chiều về: + {{surchargeretunit}} đ</div>\n        </div>\n\n        <div class=\"div-text-fee\" *ngIf=\"diff_feedepunit\">\n          <div class=\"f-12\">Phụ thu chọn chỗ ngồi chiều đi: + {{diff_feedepunit}} đ</div>\n        </div>\n        \n        <div class=\"div-text-fee\" *ngIf=\"diff_feeretunit\">\n          <div class=\"f-12\">Phụ thu chọn chỗ ngồi chiều về: + {{diff_feeretunit}} đ</div>\n        </div>\n        <div class=\"div-text-fee\" *ngIf=\"extrabedprice\">\n          <div class=\"f-12\">{{extrabeddisplay}}: + {{extrabedprice}} đ</div>\n        </div>\n      </div>\n      <div class=\"child-fee\" *ngIf=\"childrendisplay\">\n        <div class=\"div-text-fee\">\n          <div class=\"text-fee\">1 trẻ em</div>\n          <div class=\"text-fee-price\">{{ChildDiffUnit}} đ</div>\n        </div>\n        <div class=\"div-text-fee\" *ngIf=\"TicketDifferenceFeeUnit\">\n          <!-- <div class=\"f-12\">Phụ thu vé xe: + {{TicketDifferenceFeeUnit}} đ</div> -->\n          <div class=\"f-12\" *ngIf=\"TicketDifferenceFeeUnit.indexOf('-') == -1\">Phụ thu vé xe: + {{TicketDifferenceFeeUnit}} đ</div>\n          <div class=\"f-12\" *ngIf=\"TicketDifferenceFeeUnit.indexOf('-') != -1\">Phụ thu vé xe: {{TicketDifferenceFeeUnit}} đ</div>\n        </div>\n        <div class=\"div-text-fee\" *ngIf=\"extrabedchildprice\">\n          <div class=\"f-12\">{{extrabedchilddisplay}}: + {{extrabedchildprice}} đ</div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"border-bottom\"></div>\n    <div class=\"div-voucher-apply\" *ngIf=\"bookcombo.promoCode\">\n      <div class=\"width-200\" *ngIf=\"bookcombo.promoCode\"><span class=\"text-normal\">Ưu đãi (</span><span class=\"text-code\">{{bookcombo.promoCode}}</span><span class=\"text-normal\">)</span> </div>\n      <div class=\"width-100 text-normal text-right text-pax\" *ngIf=\"bookcombo.discountpromo\">-{{gf.convertNumberToString(bookcombo.discountpromo)}}đ</div>\n    </div>\n    <div class=\"total-price\">\n      <div class=\"text-pax\">{{objectDetail.paxtitle}}</div>\n      <div class=\"text-price-total\">{{objectDetail.PriceAvgPlusTAStr}} đ</div>\n    </div>\n    \n  </div>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".combocarpaymentbrackdown-header .text-center {\n  text-align: center;\n}\n.combocarpaymentbrackdown-header .align-self-center {\n  align-self: center;\n}\n.combocarpaymentbrackdown-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.combocarpaymentbrackdown-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.combocarpaymentbrackdown-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel {\n  position: relative;\n  display: flex;\n  height: auto;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .img-hotel-avatar {\n  min-width: 104px;\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n  float: left;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel {\n  position: relative;\n  padding-left: 8px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address {\n  padding-top: 13px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .div-location {\n  position: absolute;\n  margin-top: -2px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .img-location {\n  height: 12px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .text-address {\n  position: relative;\n  line-height: 16px;\n  padding-left: 12px;\n  font-size: 14px;\n  color: #4f4f4f;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .name-hotel {\n  font-size: 18px;\n  -moz-columns: #000000;\n       columns: #000000;\n  font-weight: 600;\n}\n.combocarpaymentbrackdown-content .f-12 {\n  font-size: 12px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .border-bottom {\n  border-bottom: solid 0.5px #cdcdcd;\n  margin: 16px 0 8px 0;\n}\n.combocarpaymentbrackdown-content .div-room-name {\n  margin: 16px 0;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .div-room-name .text-mealtype-chargefee {\n  font-size: 12px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail {\n  font-weight: 300;\n  margin-bottom: 16px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .adult-fee {\n  margin-bottom: 16px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee {\n  display: flex;\n  letter-spacing: -0.4px;\n  line-height: 20px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee {\n  width: 40%;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee-price {\n  width: 60%;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n  text-align: right;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee-extra {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n.combocarpaymentbrackdown-content .total-price {\n  display: flex;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .total-price .text-pax {\n  letter-spacing: -0.4px;\n  width: 100%;\n  align-self: center;\n}\n.combocarpaymentbrackdown-content .total-price .text-price-total {\n  text-align: right;\n  font-size: 24px;\n  letter-spacing: -0.69px;\n  font-weight: 600;\n  color: #26bed6;\n  width: 100%;\n}\n.combocarpaymentbrackdown-content .div-voucher-apply {\n  display: flex;\n  margin: 14px 0 12px 0;\n}\n.combocarpaymentbrackdown-content .div-voucher-apply .width-100 {\n  width: 100%;\n}\n.combocarpaymentbrackdown-content .div-voucher-apply .width-200 {\n  width: 200%;\n}\n.combocarpaymentbrackdown-content .div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.combocarpaymentbrackdown-content .div-voucher-apply .text-code {\n  font-size: 14px;\n  color: #f79321;\n}\n.combocarpaymentbrackdown-content .div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.combocarpaymentbrackdown-content .div-voucher-apply .text-strike {\n  text-decoration: line-through;\n  text-align: right;\n}\n.combocarpaymentbrackdown-content .div-voucher-apply .text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jb21ib2NhcnBheW1lbnRicmVha2Rvd24vY29tYm9jYXJwYXltZW50YnJlYWtkb3duLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tYm9jYXJwYXltZW50YnJlYWtkb3duL2NvbWJvY2FycGF5bWVudGJyZWFrZG93bi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLFFBQUE7QUNHcEQ7QUREUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0daO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VSO0FESUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRFI7QURHUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDRFo7QURJUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNGWjtBRElZO0VBQ0ksaUJBQUE7QUNGaEI7QURJZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDRnBCO0FESWdCO0VBQ0ksWUFBQTtBQ0ZwQjtBRElnQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRnBCO0FET1E7RUFDSSxlQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLGdCQUFBO0FDTFo7QURRSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ05SO0FEUUk7RUFDSSxrQ0FBQTtFQUNBLG9CQUFBO0FDTlI7QURRUTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDTlo7QURRWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ05oQjtBRFVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ1JaO0FEVVk7RUFDSSxtQkFBQTtBQ1JoQjtBRFdZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNUaEI7QURXZ0I7RUFDSSxVQUFBO0FDVHBCO0FEV2dCO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ1RwQjtBRFdnQjtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQ1RwQjtBRGVRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDYlo7QURlWTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDYmhCO0FEZ0JZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDZGhCO0FEaUJRO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FDZlo7QURpQlk7RUFDRSxXQUFBO0FDZmQ7QURpQlk7RUFDSSxXQUFBO0FDZmhCO0FEa0JZO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNoQmQ7QURrQlk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2hCZDtBRG1CWTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDakJkO0FEb0JZO0VBQ0UsNkJBQUE7RUFDQyxpQkFBQTtBQ2xCZjtBRHFCWTtFQUNJLGlCQUFBO0FDbkJoQiIsImZpbGUiOiJzcmMvYXBwL2NvbWJvY2FycGF5bWVudGJyZWFrZG93bi9jb21ib2NhcnBheW1lbnRicmVha2Rvd24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1oZWFkZXJ7XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFsaWduLXNlbGYtY2VudGVye1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYtZ29iYWNre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7dG9wOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbWctZ29iYWNre1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50e1xyXG4gICAgXHJcbiAgICAuY2FyY29tYm8taG90ZWx7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICAuaW1nLWhvdGVsLWF2YXRhcntcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLWhvdGVse1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxuICAgICAgICAgICAgLmRpdi1hZGRyZXNze1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZGl2LWxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltZy1sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dC1hZGRyZXNze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubmFtZS1ob3RlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmYtMTJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLWJvdHRvbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAwIDhweCAwO1xyXG4gICAgfVxyXG4gICAgICAgIC5kaXYtcm9vbS1uYW1le1xyXG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgICAgICAgICAgIC50ZXh0LW1lYWx0eXBlLWNoYXJnZWZlZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdXJjaGFyZ2UtZmVlLWRldGFpbHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAgICAgICAgIC5hZHVsdC1mZWV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LXRleHQtZmVle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dC1mZWV7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0LWZlZS1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0LWZlZS1leHRyYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG90YWwtcHJpY2V7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gICAgICAgICAgICAudGV4dC1wYXh7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0LXByaWNlLXRvdGFse1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtdm91Y2hlci1hcHBseSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTRweCAwIDEycHggMDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAud2lkdGgtMTAwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAud2lkdGgtMjAwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAudGV4dC1ub3JtYWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzNmM2IzYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1jb2RlIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmNzkzMjE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAudGV4dC1ub3JtYWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzNmM2IzYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC50ZXh0LXN0cmlrZSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxufSIsIi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC5kaXYtZ29iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB0b3A6IDBweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC5kaXYtZ29iYWNrIC5pbWctZ29iYWNrIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC50aXRsZS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIC5pbWctaG90ZWwtYXZhdGFyIHtcbiAgbWluLXdpZHRoOiAxMDRweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3Mge1xuICBwYWRkaW5nLXRvcDogMTNweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwgLmRpdi1hZGRyZXNzIC5kaXYtbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIC5pbmZvLWhvdGVsIC5kaXYtYWRkcmVzcyAuaW1nLWxvY2F0aW9uIHtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3MgLnRleHQtYWRkcmVzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuY2FyY29tYm8taG90ZWwgLm5hbWUtaG90ZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbHVtbnM6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmYtMTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICBtYXJnaW46IDE2cHggMCA4cHggMDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuZGl2LXJvb20tbmFtZSB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5kaXYtcm9vbS1uYW1lIC50ZXh0LW1lYWx0eXBlLWNoYXJnZWZlZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuc3VyY2hhcmdlLWZlZS1kZXRhaWwge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5zdXJjaGFyZ2UtZmVlLWRldGFpbCAuYWR1bHQtZmVlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuc3VyY2hhcmdlLWZlZS1kZXRhaWwgLmRpdi10ZXh0LWZlZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5zdXJjaGFyZ2UtZmVlLWRldGFpbCAuZGl2LXRleHQtZmVlIC50ZXh0LWZlZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLnN1cmNoYXJnZS1mZWUtZGV0YWlsIC5kaXYtdGV4dC1mZWUgLnRleHQtZmVlLXByaWNlIHtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLnN1cmNoYXJnZS1mZWUtZGV0YWlsIC5kaXYtdGV4dC1mZWUgLnRleHQtZmVlLWV4dHJhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAudG90YWwtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC50b3RhbC1wcmljZSAudGV4dC1wYXgge1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC50b3RhbC1wcmljZSAudGV4dC1wcmljZS10b3RhbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmRpdi12b3VjaGVyLWFwcGx5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNHB4IDAgMTJweCAwO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5kaXYtdm91Y2hlci1hcHBseSAud2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmRpdi12b3VjaGVyLWFwcGx5IC53aWR0aC0yMDAge1xuICB3aWR0aDogMjAwJTtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuZGl2LXZvdWNoZXItYXBwbHkgLnRleHQtbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzNmM2IzYjtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuZGl2LXZvdWNoZXItYXBwbHkgLnRleHQtY29kZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmNzkzMjE7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzZjNiM2I7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LXN0cmlrZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuZGl2LXZvdWNoZXItYXBwbHkgLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.ts ***!
  \***************************************************************************/
/*! exports provided: CombocarpaymentbreakdownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombocarpaymentbreakdownPage", function() { return CombocarpaymentbreakdownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");





let CombocarpaymentbreakdownPage = class CombocarpaymentbreakdownPage {
    constructor(activityService, navCtrl, bookcombo) {
        this.activityService = activityService;
        this.navCtrl = navCtrl;
        this.bookcombo = bookcombo;
        this.totalRoomOtherFee = 0;
        this.PriceDiffUnitAdult = 0;
        var se = this;
        se.objectDetail = activityService.objCarComboPaymentBreakDown.objectDetail;
        if (se.objectDetail) {
            console.log(se.objectDetail);
            se.totalRoomOtherFee = se.objectDetail.totalAdultExtrabed +
                se.objectDetail.ChildOtherFeeTotal +
                se.objectDetail.AdultOtherFee;
            se.PriceDiffUnitAdult = (Math.round(se.objectDetail.elementMealtype.priceDiffUnit) * 1 + Math.round(se.objectDetail.pricedepart) * 1 + Math.round(se.objectDetail.pricereturn) * 1 + Math.round(se.objectDetail.roomPriceSale) * 1).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            if (se.totalRoomOtherFee > 0) {
                se.totalRoomOtherFee = Math.round(se.totalRoomOtherFee).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            }
            if (se.objectDetail.room && se.objectDetail.room.length > 0) {
                se.roomObj = se.objectDetail.room[0].Rooms[0];
                if (se.roomObj.Images.indexOf('https') == -1) {
                    se.roomObj.Images = "https://" + se.roomObj.Images;
                }
            }
            if (se.objectDetail.elementMealtype.priceDiffUnit) {
                se.RoomPriceDiffUnit = Math.round(se.objectDetail.elementMealtype.priceDiffUnit).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            }
            if (se.objectDetail.TicketDifferenceFeeUnit) {
                se.TicketDifferenceFeeUnit = Math.round(se.objectDetail.TicketDifferenceFeeUnit).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            }
            se.PriceAvgPlusTAStr = se.objectDetail.PriceAvgPlusTAStr.toLocaleString().replace(/\,/g, '.');
            se.ChildDiffUnit = 0;
            if (se.objectDetail.childsTicketFee) {
                se.ChildDiffUnit += se.objectDetail.childsTicketFee.replace(/\,/g, '').replace(/\./g, '') * 1;
                se.ChildDiffUnit = se.ChildDiffUnit.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
                se.childsTicketFee = Math.round(se.objectDetail.childsTicketFee).toLocaleString().replace(/\,/g, '.');
            }
            if (se.objectDetail.surchargedepd > 0 || se.objectDetail.surchargedept > 0) {
                se.surchargedepunit = (Math.round(se.objectDetail.surchargedepd) * 1 + Math.round(se.objectDetail.surchargedept) * 1) / se.objectDetail.adults;
                se.surchargedepunit = se.surchargedepunit.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            }
            if (se.objectDetail.surchargeretd > 0 || se.objectDetail.surchargerett > 0) {
                se.surchargeretunit = (Math.round(se.objectDetail.surchargeretd) * 1 + Math.round(se.objectDetail.surchargerett) * 1) / se.objectDetail.adults;
                se.surchargeretunit = se.surchargeretunit.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            }
            if (se.objectDetail.diff_feedep) {
                se.diff_feedepunit = Math.round(se.objectDetail.diff_feedep) / se.objectDetail.adults;
                se.diff_feedepunit = se.diff_feedepunit.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            }
            if (se.objectDetail.diff_feeret) {
                se.diff_feeretunit = Math.round(se.objectDetail.diff_feeret) / se.objectDetail.adults;
                se.diff_feeretunit = se.diff_feeretunit.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            }
            if (se.objectDetail.childrendisplay) {
                se.childrendisplay = se.objectDetail.childrendisplay;
            }
            if (se.objectDetail.JsonSurchargeFee.SurchargeFee && se.objectDetail.JsonSurchargeFee.SurchargeFee.length > 0) {
                if (se.objectDetail.JsonSurchargeFee.SurchargeFee[0].PassengerType == 1) {
                    se.extrabedchilddisplay = se.objectDetail.JsonSurchargeFee.SurchargeFee[0].Text;
                    se.extrabedchildprice = se.objectDetail.JsonSurchargeFee.SurchargeFee[0].PriceFormat;
                    if (se.ChildDiffUnit) {
                        se.ChildDiffUnit = se.ChildDiffUnit.replace(/\,/g, '').replace(/\./g, '') * 1;
                    }
                    se.ChildDiffUnit += Math.round(se.objectDetail.JsonSurchargeFee.SurchargeFee[0].Price) * 1;
                    se.ChildDiffUnit = se.ChildDiffUnit.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
                }
                else {
                    se.extrabeddisplay = se.objectDetail.JsonSurchargeFee.SurchargeFee[0].Text;
                    se.extrabedprice = se.objectDetail.JsonSurchargeFee.SurchargeFee[0].PriceFormat;
                }
            }
            if (se.objectDetail.elementMealtype && se.objectDetail.elementMealtype.PromotionInclusions && se.objectDetail.elementMealtype.PromotionInclusions.length > 0) {
                se.mealtypePromotion = se.objectDetail.elementMealtype.PromotionInclusions[0];
            }
        }
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
};
CombocarpaymentbreakdownPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-combocarpaymentbreakdown',
        template: __webpack_require__(/*! ./combocarpaymentbreakdown.page.html */ "./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.html"),
        styles: [__webpack_require__(/*! ./combocarpaymentbreakdown.page.scss */ "./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["Bookcombo"]])
], CombocarpaymentbreakdownPage);



/***/ })

}]);
//# sourceMappingURL=combocarpaymentbreakdown-combocarpaymentbreakdown-module.js.map