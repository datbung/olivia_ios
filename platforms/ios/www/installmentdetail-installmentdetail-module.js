(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["installmentdetail-installmentdetail-module"],{

/***/ "./src/app/installmentdetail/installmentdetail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/installmentdetail/installmentdetail.module.ts ***!
  \***************************************************************/
/*! exports provided: InstallmentdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentdetailPageModule", function() { return InstallmentdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _installmentdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installmentdetail.page */ "./src/app/installmentdetail/installmentdetail.page.ts");







const routes = [
    {
        path: '',
        component: _installmentdetail_page__WEBPACK_IMPORTED_MODULE_6__["InstallmentdetailPage"]
    }
];
let InstallmentdetailPageModule = class InstallmentdetailPageModule {
};
InstallmentdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_installmentdetail_page__WEBPACK_IMPORTED_MODULE_6__["InstallmentdetailPage"]]
    })
], InstallmentdetailPageModule);



/***/ }),

/***/ "./src/app/installmentdetail/installmentdetail.page.html":
/*!***************************************************************!*\
  !*** ./src/app/installmentdetail/installmentdetail.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"installment-detail-header\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div  class=\"align-self-center\" >\n          <div class=\"div-goback\" (click)=\"goback()\" >\n              <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"title-header\"><label class=\"text-title\">Chính sách trả góp</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"installment-detail-content\">\n    <div>Chương trình áp dụng dành cho CHỦ THẺ TÍN DỤNG QUỐC TẾ CÁ NHÂN - Credit Card</div>\n    <div class=\"p-top-8\">Thẻ tín dụng là tất cả các thẻ có logo Master card/VISA/JCB...và không có chữ Repaid/Debit/ATM/MST/Tên công ty</div>\n\n    <div class=\"p-top-16\">1. QUY ĐỊNH CHUNG</div>\n    <div class=\"text-sub p-top-4\">1.1. Giao dịch trả góp chỉ được thực hiện cho chủ thẻ tín dụng Quốc tế được phát hành bởi các Ngân hàng có hỗ trợ trả góp tại iVIVU.com;</div>\n    <div class=\"text-sub p-top-4\">1.2. Giá trị thanh toán thẻ từ 3.000.000 VNĐ trở lên sau khi đã trừ các giảm giá (nếu có);</div>\n    <div class=\"text-sub p-top-4\">1.3. Thời gian trả góp: dựa theo ngân hàng phát hành thẻ</div>\n    <div class=\"text-sub p-top-4\">1.4. Không giới hạn số lần đăng ký trả góp;</div>\n    <div class=\"text-sub p-top-4\">1.5. Chủ thẻ không được huỷ giao dịch trả góp sau khi giao dịch đã chuyển sang trả góp;</div>\n    <div class=\"text-sub p-top-4\">1.6. Không áp dụng cho Thẻ phụ, Thẻ doanh nghiệp;</div>\n    <div class=\"text-sub p-top-4\">1.7. Số tiền giao dịch sẽ được chia thành những khoản trả góp đều nhau dựa theo kì hạn trả góp đã chọn, được liệt kê cùng với các giao dịch bằng thẻ vào bảng sao kê hàng tháng. Khách hàng sẽ thanh toán các khoản này theo phương thức và thời hạn thanh toán thông thường của thẻ tín dụng. Khoản tiền phải trả góp sẽ được hiển thị trên bảng sao kê hàng tháng.</div>\n\n    <div class=\"p-top-16\">2. CÁC TRƯỜNG HỢP KHÔNG ĐƯỢC ĐĂNG KÝ DỊCH VỤ TRẢ GÓP</div>\n    <div class=\"text-sub p-top-4\">2.1. Tài khoản thẻ tín dụng của Chủ thẻ đang trong tình trạng chậm thanh toán;</div>\n    <div class=\"text-sub p-top-4\">2.2. Hiệu lực còn lại của Thẻ tín dụng ít hơn thời hạn đăng ký trả góp;</div>\n    <div class=\"text-sub p-top-4\">2.3. Chủ thẻ vi phạm các Điều khoản & Điều kiện phát hành và sử dụng thẻ tín dụng quốc tế của ngân hàng phát hành;</div>\n    <div class=\"text-sub p-top-4\">2.4. Giao dịch đăng ký trả góp được thực hiện tại ĐVCNT không hợp tác triển khai Dịch vụ thanh toán trả góp lãi suất 0% bằng Thẻ Quốc tế với Ngân lượng hoặc Thẻ được phát hành bởi Ngân hàng không có hỗ trợ trả góp;</div>\n    <div class=\"text-sub p-top-4\">2.5. Giá trị giao dịch đăng ký trả góp nhỏ hơn số tiền tối thiểu/giao dịch theo quy định của từng ngân hàng có hỗ trợ trả góp;</div>\n    <div class=\"text-sub p-top-4\">2.6. Giao dịch trả góp đã lên sao kê.</div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/installmentdetail/installmentdetail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/installmentdetail/installmentdetail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".installment-detail-header {\n  padding-top: calc(env(safe-area-inset-top) + 4px);\n}\n.installment-detail-header .text-center {\n  text-align: center;\n}\n.installment-detail-header .align-self-center {\n  align-self: center;\n}\n.installment-detail-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-detail-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-detail-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-detail-content {\n  line-height: 1.4rem;\n  padding: 16px;\n}\n.installment-detail-content .text-sub {\n  padding-left: 16px;\n}\n.installment-detail-content .p-top-4 {\n  padding-top: 4px;\n}\n.installment-detail-content .p-top-8 {\n  padding-top: 8px;\n}\n.installment-detail-content .p-top-16 {\n  padding-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9pbnN0YWxsbWVudGRldGFpbC9pbnN0YWxsbWVudGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2luc3RhbGxtZW50ZGV0YWlsL2luc3RhbGxtZW50ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlEQUFBO0FDQUo7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0FDQ1I7QURDSTtFQUNJLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksUUFBQTtBQ0lwRDtBREZRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSVo7QURESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR1I7QURDQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBQ0VKO0FEQUk7RUFDSSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSxpQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvaW5zdGFsbG1lbnRkZXRhaWwvaW5zdGFsbG1lbnRkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhbGxtZW50LWRldGFpbC1oZWFkZXJcclxue1xyXG4gICAgcGFkZGluZy10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNHB4KTtcclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tc2VsZi1jZW50ZXJ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdi1nb2JhY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDhweDt3aWR0aDogNDhweDt0b3A6IDBweDtcclxuXHJcbiAgICAgICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE0cHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5zdGFsbG1lbnQtZGV0YWlsLWNvbnRlbnR7XHJcbiAgICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAudGV4dC1zdWJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC04e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMTZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB9XHJcbn0iLCIuaW5zdGFsbG1lbnQtZGV0YWlsLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDRweCk7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWhlYWRlciAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWhlYWRlciAuYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWhlYWRlciAuZGl2LWdvYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiAwcHg7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWhlYWRlciAuZGl2LWdvYmFjayAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluc3RhbGxtZW50LWRldGFpbC1jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtY29udGVudCAudGV4dC1zdWIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWNvbnRlbnQgLnAtdG9wLTQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1jb250ZW50IC5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtY29udGVudCAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/installmentdetail/installmentdetail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/installmentdetail/installmentdetail.page.ts ***!
  \*************************************************************/
/*! exports provided: InstallmentdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentdetailPage", function() { return InstallmentdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let InstallmentdetailPage = class InstallmentdetailPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
            if (document.getElementsByClassName("homefood-footer")[1]) {
                document.getElementsByClassName("homefood-footer")[0]['style'].display = 'none';
                document.getElementsByClassName("homefood-footer")[1]['style'].display = 'none';
            }
        }, 200);
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
};
InstallmentdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-installmentdetail',
        template: __webpack_require__(/*! ./installmentdetail.page.html */ "./src/app/installmentdetail/installmentdetail.page.html"),
        styles: [__webpack_require__(/*! ./installmentdetail.page.scss */ "./src/app/installmentdetail/installmentdetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], InstallmentdetailPage);



/***/ })

}]);
//# sourceMappingURL=installmentdetail-installmentdetail-module.js.map