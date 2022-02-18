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

module.exports = "<ion-header class=\"combocarpaymentbrackdown-header\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div  class=\"align-self-center\" >\n          <div class=\"div-goback\" (click)=\"goback()\" >\n              <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"title-header\"><label class=\"text-title\">Chi tiết combo</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"combocarpaymentbrackdown-content\">\n  <div padding>\n    <div class=\"carcombo-hotel\">\n      <div class=\"img-hotel\">\n        <img class=\"img-hotel-avatar\" *ngIf=\"roomObj.Images\" [src]=\"roomObj.Images\" />\n        <img class=\"img-hotel-avatar\" *ngIf=\"!roomObj.Images\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\" />\n      </div>\n  \n      <div class=\"info-hotel\">\n        <!-- Tên -->\n        <div class=\"name-hotel f-bold\">\n          <ion-label>{{objectDetail.titlecombo}}</ion-label>\n        </div>\n        <!-- Địa chỉ -->\n        <div class=\"div-address p-top-13\">\n          <!-- img-local -->\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/iocnsearch/ic_location.svg\">\n          </div>\n          <!-- address -->\n          <div class=\"text-address text-thin\">\n            <ion-label>{{objectDetail.Address}}</ion-label>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n    \n    <div class=\"div-room-name\">\n      <div class=\"text-room-name\">{{objectDetail.nameroom}}</div>\n      <div class=\"text-mealtype-chargefee\">{{objectDetail.breakfast}}</div>\n      <div class=\"text-mealtype-chargefee\" *ngIf=\"mealtypePromotion\">{{mealtypePromotion}}</div>\n      <!-- <div class=\"text-mealtype-chargefee\" *ngIf=\"objectDetail.RoomPriceDiffUnit >0\">+ {{objectDetail.RoomPriceDiffUnit}} VND/người</div> -->\n    </div>\n  \n    <div class=\"surcharge-fee-detail\">\n      <div class=\"adult-fee\">\n        <div class=\"div-text-fee\">\n          <div class=\"text-fee\">1 người lớn</div>\n          <div class=\"text-fee-price\">{{PriceDiffUnitAdult}} đ</div>\n        </div>\n        <div class=\"div-text-fee\" *ngIf='RoomPriceDiffUnit'>\n          <div class=\"f-12\">Phụ thu phòng: + {{RoomPriceDiffUnit}} đ</div>\n        </div>\n\n        <div class=\"div-text-fee\" *ngIf='TicketDifferenceFeeUnit && TicketDifferenceFeeUnit != 0'>\n          <div class=\"f-12\" *ngIf=\"TicketDifferenceFeeUnit.indexOf('-') == -1\">Phụ thu vé xe: + {{TicketDifferenceFeeUnit}} đ</div>\n          <div class=\"f-12\" *ngIf=\"TicketDifferenceFeeUnit.indexOf('-') != -1\">Phụ thu vé xe: {{TicketDifferenceFeeUnit}} đ</div>\n        </div>\n\n        <div class=\"div-text-fee\" *ngIf=\"surchargedepunit\">\n          <div class=\"f-12\">Phụ thu đón/trả chiều đi: + {{surchargedepunit}} đ</div>\n        </div>\n\n        <div class=\"div-text-fee\" *ngIf=\"surchargeretunit\">\n          <div class=\"f-12\">Phụ thu đón/trả chiều về: + {{surchargeretunit}} đ</div>\n        </div>\n\n        <div class=\"div-text-fee\" *ngIf=\"diff_feedepunit\">\n          <div class=\"f-12\">Phụ thu chọn chỗ ngồi chiều đi: + {{diff_feedepunit}} đ</div>\n        </div>\n        \n        <div class=\"div-text-fee\" *ngIf=\"diff_feeretunit\">\n          <div class=\"f-12\">Phụ thu chọn chỗ ngồi chiều về: + {{diff_feeretunit}} đ</div>\n        </div>\n        <div class=\"div-text-fee\" *ngIf=\"extrabedprice\">\n          <div class=\"f-12\">{{extrabeddisplay}}: + {{extrabedprice}} đ</div>\n        </div>\n      </div>\n      <div class=\"child-fee\" *ngIf=\"childrendisplay\">\n        <div class=\"div-text-fee\">\n          <div class=\"text-fee\">1 trẻ em</div>\n          <div class=\"text-fee-price\">{{ChildDiffUnit}} đ</div>\n        </div>\n        <div class=\"div-text-fee\" *ngIf=\"TicketDifferenceFeeUnit\">\n          <!-- <div class=\"f-12\">Phụ thu vé xe: + {{TicketDifferenceFeeUnit}} đ</div> -->\n          <div class=\"f-12\" *ngIf=\"TicketDifferenceFeeUnit.indexOf('-') == -1\">Phụ thu vé xe: + {{TicketDifferenceFeeUnit}} đ</div>\n          <div class=\"f-12\" *ngIf=\"TicketDifferenceFeeUnit.indexOf('-') != -1\">Phụ thu vé xe: {{TicketDifferenceFeeUnit}} đ</div>\n        </div>\n        <div class=\"div-text-fee\" *ngIf=\"extrabedchildprice\">\n          <div class=\"f-12\">{{extrabedchilddisplay}}: + {{extrabedchildprice}} đ</div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"border-bottom\"></div>\n    <div class=\"total-price\">\n      <div class=\"text-pax\">{{objectDetail.paxtitle}}</div>\n      <div class=\"text-price-total\">{{objectDetail.PriceAvgPlusTAStr}} đ</div>\n    </div>\n    \n  </div>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/combocarpaymentbreakdown/combocarpaymentbreakdown.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".combocarpaymentbrackdown-header .text-center {\n  text-align: center;\n}\n.combocarpaymentbrackdown-header .align-self-center {\n  align-self: center;\n}\n.combocarpaymentbrackdown-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.combocarpaymentbrackdown-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.combocarpaymentbrackdown-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel {\n  position: relative;\n  display: flex;\n  height: auto;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .img-hotel-avatar {\n  min-width: 104px;\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n  float: left;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel {\n  position: relative;\n  padding-left: 8px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address {\n  padding-top: 13px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .div-location {\n  position: absolute;\n  margin-top: -2px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .img-location {\n  height: 12px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .text-address {\n  position: relative;\n  line-height: 16px;\n  padding-left: 12px;\n  font-size: 14px;\n  color: #4f4f4f;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .name-hotel {\n  font-size: 18px;\n  -webkit-columns: #000000;\n     -moz-columns: #000000;\n          columns: #000000;\n  font-weight: 600;\n}\n.combocarpaymentbrackdown-content .f-12 {\n  font-size: 12px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .border-bottom {\n  border-bottom: solid 0.5px #cdcdcd;\n  margin: 16px 0 8px 0;\n}\n.combocarpaymentbrackdown-content .div-room-name {\n  margin: 16px 0;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .div-room-name .text-mealtype-chargefee {\n  font-size: 12px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail {\n  font-weight: 300;\n  margin-bottom: 16px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .adult-fee {\n  margin-bottom: 16px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee {\n  display: flex;\n  letter-spacing: -0.4px;\n  line-height: 20px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee {\n  width: 40%;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee-price {\n  width: 60%;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n  text-align: right;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee-extra {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n.combocarpaymentbrackdown-content .total-price {\n  display: flex;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .total-price .text-pax {\n  letter-spacing: -0.4px;\n  width: 100%;\n  align-self: center;\n}\n.combocarpaymentbrackdown-content .total-price .text-price-total {\n  text-align: right;\n  font-size: 24px;\n  letter-spacing: -0.69px;\n  font-weight: 600;\n  color: #26bed6;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2NvbWJvY2FycGF5bWVudGJyZWFrZG93bi9jb21ib2NhcnBheW1lbnRicmVha2Rvd24ucGFnZS5zY3NzIiwic3JjL2FwcC9jb21ib2NhcnBheW1lbnRicmVha2Rvd24vY29tYm9jYXJwYXltZW50YnJlYWtkb3duLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksUUFBQTtBQ0dwRDtBRERRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR1o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRVI7QURJSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNEUjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNEWjtBRElRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FESVk7RUFDSSxpQkFBQTtBQ0ZoQjtBRElnQjtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNGcEI7QURJZ0I7RUFDSSxZQUFBO0FDRnBCO0FESWdCO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGcEI7QURPUTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7RUFDQSxnQkFBQTtBQ0xaO0FEUUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFFJO0VBQ0ksa0NBQUE7RUFDQSxvQkFBQTtBQ05SO0FEUVE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ05aO0FEUVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNOaEI7QURVUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNSWjtBRFVZO0VBQ0ksbUJBQUE7QUNSaEI7QURXWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDVGhCO0FEV2dCO0VBQ0ksVUFBQTtBQ1RwQjtBRFdnQjtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNUcEI7QURXZ0I7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7QUNUcEI7QURlUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ2JaO0FEZVk7RUFDSSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2JoQjtBRGdCWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ2RoQiIsImZpbGUiOiJzcmMvYXBwL2NvbWJvY2FycGF5bWVudGJyZWFrZG93bi9jb21ib2NhcnBheW1lbnRicmVha2Rvd24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1oZWFkZXJ7XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFsaWduLXNlbGYtY2VudGVye1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYtZ29iYWNre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7dG9wOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbWctZ29iYWNre1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50e1xyXG4gICAgXHJcbiAgICAuY2FyY29tYm8taG90ZWx7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICAuaW1nLWhvdGVsLWF2YXRhcntcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLWhvdGVse1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxuICAgICAgICAgICAgLmRpdi1hZGRyZXNze1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTNweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuZGl2LWxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltZy1sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dC1hZGRyZXNze1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubmFtZS1ob3RlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmYtMTJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLWJvdHRvbXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAwIDhweCAwO1xyXG4gICAgfVxyXG4gICAgICAgIC5kaXYtcm9vbS1uYW1le1xyXG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgICAgICAgICAgIC50ZXh0LW1lYWx0eXBlLWNoYXJnZWZlZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdXJjaGFyZ2UtZmVlLWRldGFpbHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAgICAgICAgIC5hZHVsdC1mZWV7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LXRleHQtZmVle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dC1mZWV7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0LWZlZS1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0LWZlZS1leHRyYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG90YWwtcHJpY2V7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gICAgICAgICAgICAudGV4dC1wYXh7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0LXByaWNlLXRvdGFse1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbn0iLCIuY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWhlYWRlciAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWhlYWRlciAuYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWhlYWRlciAuZGl2LWdvYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiAwcHg7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWhlYWRlciAuZGl2LWdvYmFjayAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5jYXJjb21iby1ob3RlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5jYXJjb21iby1ob3RlbCAuaW1nLWhvdGVsLWF2YXRhciB7XG4gIG1pbi13aWR0aDogMTA0cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIC5pbmZvLWhvdGVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwgLmRpdi1hZGRyZXNzIHtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIC5pbmZvLWhvdGVsIC5kaXYtYWRkcmVzcyAuZGl2LWxvY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3MgLmltZy1sb2NhdGlvbiB7XG4gIGhlaWdodDogMTJweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwgLmRpdi1hZGRyZXNzIC50ZXh0LWFkZHJlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIC5uYW1lLWhvdGVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2x1bW5zOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5mLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbiAgbWFyZ2luOiAxNnB4IDAgOHB4IDA7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmRpdi1yb29tLW5hbWUge1xuICBtYXJnaW46IDE2cHggMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuZGl2LXJvb20tbmFtZSAudGV4dC1tZWFsdHlwZS1jaGFyZ2VmZWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLnN1cmNoYXJnZS1mZWUtZGV0YWlsIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuc3VyY2hhcmdlLWZlZS1kZXRhaWwgLmFkdWx0LWZlZSB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLnN1cmNoYXJnZS1mZWUtZGV0YWlsIC5kaXYtdGV4dC1mZWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuc3VyY2hhcmdlLWZlZS1kZXRhaWwgLmRpdi10ZXh0LWZlZSAudGV4dC1mZWUge1xuICB3aWR0aDogNDAlO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5zdXJjaGFyZ2UtZmVlLWRldGFpbCAuZGl2LXRleHQtZmVlIC50ZXh0LWZlZS1wcmljZSB7XG4gIHdpZHRoOiA2MCU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5zdXJjaGFyZ2UtZmVlLWRldGFpbCAuZGl2LXRleHQtZmVlIC50ZXh0LWZlZS1leHRyYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLnRvdGFsLXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAudG90YWwtcHJpY2UgLnRleHQtcGF4IHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAudG90YWwtcHJpY2UgLnRleHQtcHJpY2UtdG90YWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

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




let CombocarpaymentbreakdownPage = class CombocarpaymentbreakdownPage {
    constructor(activityService, navCtrl) {
        this.activityService = activityService;
        this.navCtrl = navCtrl;
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], CombocarpaymentbreakdownPage);



/***/ })

}]);
//# sourceMappingURL=combocarpaymentbreakdown-combocarpaymentbreakdown-module.js.map