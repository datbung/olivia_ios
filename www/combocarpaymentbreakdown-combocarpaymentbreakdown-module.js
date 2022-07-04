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

module.exports = ".combocarpaymentbrackdown-header .text-center {\n  text-align: center;\n}\n.combocarpaymentbrackdown-header .align-self-center {\n  align-self: center;\n}\n.combocarpaymentbrackdown-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.combocarpaymentbrackdown-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.combocarpaymentbrackdown-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel {\n  position: relative;\n  display: flex;\n  height: auto;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .img-hotel-avatar {\n  min-width: 104px;\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n  float: left;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel {\n  position: relative;\n  padding-left: 8px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address {\n  padding-top: 13px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .div-location {\n  position: absolute;\n  margin-top: -2px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .img-location {\n  height: 12px;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .info-hotel .div-address .text-address {\n  position: relative;\n  line-height: 16px;\n  padding-left: 12px;\n  font-size: 14px;\n  color: #4f4f4f;\n}\n.combocarpaymentbrackdown-content .carcombo-hotel .name-hotel {\n  font-size: 18px;\n  -webkit-columns: #000000;\n     -moz-columns: #000000;\n          columns: #000000;\n  font-weight: 600;\n}\n.combocarpaymentbrackdown-content .f-12 {\n  font-size: 12px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .border-bottom {\n  border-bottom: solid 0.5px #cdcdcd;\n  margin: 16px 0 8px 0;\n}\n.combocarpaymentbrackdown-content .div-room-name {\n  margin: 16px 0;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .div-room-name .text-mealtype-chargefee {\n  font-size: 12px;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail {\n  font-weight: 300;\n  margin-bottom: 16px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .adult-fee {\n  margin-bottom: 16px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee {\n  display: flex;\n  letter-spacing: -0.4px;\n  line-height: 20px;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee {\n  width: 40%;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee-price {\n  width: 60%;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n  text-align: right;\n}\n.combocarpaymentbrackdown-content .surcharge-fee-detail .div-text-fee .text-fee-extra {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n.combocarpaymentbrackdown-content .total-price {\n  display: flex;\n  font-weight: 300;\n}\n.combocarpaymentbrackdown-content .total-price .text-pax {\n  letter-spacing: -0.4px;\n  width: 100%;\n  align-self: center;\n}\n.combocarpaymentbrackdown-content .total-price .text-price-total {\n  text-align: right;\n  font-size: 24px;\n  letter-spacing: -0.69px;\n  font-weight: 600;\n  color: #26bed6;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvY29tYm9jYXJwYXltZW50YnJlYWtkb3duL2NvbWJvY2FycGF5bWVudGJyZWFrZG93bi5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbWJvY2FycGF5bWVudGJyZWFrZG93bi9jb21ib2NhcnBheW1lbnRicmVha2Rvd24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxRQUFBO0FDR3BEO0FERFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFUjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0RSO0FER1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0RaO0FESVE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDRlo7QURJWTtFQUNJLGlCQUFBO0FDRmhCO0FESWdCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0ZwQjtBRElnQjtFQUNJLFlBQUE7QUNGcEI7QURJZ0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZwQjtBRE9RO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLGdCQUFBO0FDTFo7QURRSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ05SO0FEUUk7RUFDSSxrQ0FBQTtFQUNBLG9CQUFBO0FDTlI7QURRUTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDTlo7QURRWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ05oQjtBRFVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ1JaO0FEVVk7RUFDSSxtQkFBQTtBQ1JoQjtBRFdZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNUaEI7QURXZ0I7RUFDSSxVQUFBO0FDVHBCO0FEV2dCO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ1RwQjtBRFdnQjtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQ1RwQjtBRGVRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDYlo7QURlWTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDYmhCO0FEZ0JZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDZGhCIiwiZmlsZSI6InNyYy9hcHAvY29tYm9jYXJwYXltZW50YnJlYWtkb3duL2NvbWJvY2FycGF5bWVudGJyZWFrZG93bi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWhlYWRlcntcclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tc2VsZi1jZW50ZXJ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdi1nb2JhY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDhweDt3aWR0aDogNDhweDt0b3A6IDBweDtcclxuXHJcbiAgICAgICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE0cHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnR7XHJcbiAgICBcclxuICAgIC5jYXJjb21iby1ob3RlbHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgIC5pbWctaG90ZWwtYXZhdGFye1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm8taG90ZWx7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gICAgICAgICAgICAuZGl2LWFkZHJlc3N7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5kaXYtbG9jYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nLWxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0LWFkZHJlc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYW1lLWhvdGVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICAgICAgY29sdW1uczogIzAwMDAwMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZi0xMntcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICAgIC5ib3JkZXItYm90dG9te1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDAgOHB4IDA7XHJcbiAgICB9XHJcbiAgICAgICAgLmRpdi1yb29tLW5hbWV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAgICAgICAgICAgLnRleHQtbWVhbHR5cGUtY2hhcmdlZmVle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1cmNoYXJnZS1mZWUtZGV0YWlse1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgLmFkdWx0LWZlZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kaXYtdGV4dC1mZWV7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0LWZlZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQtZmVlLXByaWNle1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQtZmVlLWV4dHJhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b3RhbC1wcmljZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgICAgICAgICAgIC50ZXh0LXBheHtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQtcHJpY2UtdG90YWx7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxufSIsIi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC5kaXYtZ29iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB0b3A6IDBweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC5kaXYtZ29iYWNrIC5pbWctZ29iYWNrIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24taGVhZGVyIC50aXRsZS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIC5pbWctaG90ZWwtYXZhdGFyIHtcbiAgbWluLXdpZHRoOiAxMDRweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3Mge1xuICBwYWRkaW5nLXRvcDogMTNweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwgLmRpdi1hZGRyZXNzIC5kaXYtbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmNhcmNvbWJvLWhvdGVsIC5pbmZvLWhvdGVsIC5kaXYtYWRkcmVzcyAuaW1nLWxvY2F0aW9uIHtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3MgLnRleHQtYWRkcmVzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuY2FyY29tYm8taG90ZWwgLm5hbWUtaG90ZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbHVtbnM6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmYtMTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICBtYXJnaW46IDE2cHggMCA4cHggMDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuZGl2LXJvb20tbmFtZSB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5kaXYtcm9vbS1uYW1lIC50ZXh0LW1lYWx0eXBlLWNoYXJnZWZlZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuc3VyY2hhcmdlLWZlZS1kZXRhaWwge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5zdXJjaGFyZ2UtZmVlLWRldGFpbCAuYWR1bHQtZmVlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAuc3VyY2hhcmdlLWZlZS1kZXRhaWwgLmRpdi10ZXh0LWZlZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC5zdXJjaGFyZ2UtZmVlLWRldGFpbCAuZGl2LXRleHQtZmVlIC50ZXh0LWZlZSB7XG4gIHdpZHRoOiA0MCU7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLnN1cmNoYXJnZS1mZWUtZGV0YWlsIC5kaXYtdGV4dC1mZWUgLnRleHQtZmVlLXByaWNlIHtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY29tYm9jYXJwYXltZW50YnJhY2tkb3duLWNvbnRlbnQgLnN1cmNoYXJnZS1mZWUtZGV0YWlsIC5kaXYtdGV4dC1mZWUgLnRleHQtZmVlLWV4dHJhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5jb21ib2NhcnBheW1lbnRicmFja2Rvd24tY29udGVudCAudG90YWwtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC50b3RhbC1wcmljZSAudGV4dC1wYXgge1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmNvbWJvY2FycGF5bWVudGJyYWNrZG93bi1jb250ZW50IC50b3RhbC1wcmljZSAudGV4dC1wcmljZS10b3RhbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

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