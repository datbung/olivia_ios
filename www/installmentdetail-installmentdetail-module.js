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

<<<<<<< HEAD
module.exports = ".installment-detail-header {\n  padding-top: calc(env(safe-area-inset-top) + 4px);\n}\n.installment-detail-header .text-center {\n  text-align: center;\n}\n.installment-detail-header .align-self-center {\n  align-self: center;\n}\n.installment-detail-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-detail-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-detail-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-detail-content {\n  line-height: 1.4rem;\n  padding: 16px;\n}\n.installment-detail-content .text-sub {\n  padding-left: 16px;\n}\n.installment-detail-content .p-top-4 {\n  padding-top: 4px;\n}\n.installment-detail-content .p-top-8 {\n  padding-top: 8px;\n}\n.installment-detail-content .p-top-16 {\n  padding-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvaW5zdGFsbG1lbnRkZXRhaWwvaW5zdGFsbG1lbnRkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9pbnN0YWxsbWVudGRldGFpbC9pbnN0YWxsbWVudGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpREFBQTtBQ0FKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FEQ0k7RUFDSSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLFFBQUE7QUNJcEQ7QURGUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0laO0FEREk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dSO0FEQ0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUNFSjtBREFJO0VBQ0ksa0JBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBREFJO0VBQ0ksZ0JBQUE7QUNFUjtBREFJO0VBQ0ksaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbGxtZW50ZGV0YWlsL2luc3RhbGxtZW50ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0YWxsbWVudC1kZXRhaWwtaGVhZGVyXHJcbntcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDRweCk7XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFsaWduLXNlbGYtY2VudGVye1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYtZ29iYWNre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7dG9wOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbWctZ29iYWNre1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmluc3RhbGxtZW50LWRldGFpbC1jb250ZW50e1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgLnRleHQtc3Vie1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC00e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtOHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTE2e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgfVxyXG59IiwiLmluc3RhbGxtZW50LWRldGFpbC1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA0cHgpO1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1oZWFkZXIgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1oZWFkZXIgLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1oZWFkZXIgLmRpdi1nb2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIHRvcDogMHB4O1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1oZWFkZXIgLmRpdi1nb2JhY2sgLmltZy1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1oZWFkZXIgLnRpdGxlLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnN0YWxsbWVudC1kZXRhaWwtY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWNvbnRlbnQgLnRleHQtc3ViIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1jb250ZW50IC5wLXRvcC00IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtY29udGVudCAucC10b3AtOCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWNvbnRlbnQgLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59Il19 */"
=======
module.exports = ".installment-detail-header {\n  padding-top: calc(env(safe-area-inset-top) + 4px);\n}\n.installment-detail-header .text-center {\n  text-align: center;\n}\n.installment-detail-header .align-self-center {\n  align-self: center;\n}\n.installment-detail-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-detail-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-detail-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-detail-content {\n  line-height: 1.4rem;\n  padding: 16px;\n}\n.installment-detail-content .text-sub {\n  padding-left: 16px;\n}\n.installment-detail-content .p-top-4 {\n  padding-top: 4px;\n}\n.installment-detail-content .p-top-8 {\n  padding-top: 8px;\n}\n.installment-detail-content .p-top-16 {\n  padding-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2luc3RhbGxtZW50ZGV0YWlsL2luc3RhbGxtZW50ZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5zdGFsbG1lbnRkZXRhaWwvaW5zdGFsbG1lbnRkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaURBQUE7QUNBSjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBRENJO0VBQ0ksa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxRQUFBO0FDSXBEO0FERlE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJWjtBRERJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHUjtBRENBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0FDRUo7QURBSTtFQUNJLGtCQUFBO0FDRVI7QURBSTtFQUNJLGdCQUFBO0FDRVI7QURBSTtFQUNJLGdCQUFBO0FDRVI7QURBSTtFQUNJLGlCQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9pbnN0YWxsbWVudGRldGFpbC9pbnN0YWxsbWVudGRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdGFsbG1lbnQtZGV0YWlsLWhlYWRlclxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA0cHgpO1xyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hbGlnbi1zZWxmLWNlbnRlcntcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWdvYmFja3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiA0OHB4O3dpZHRoOiA0OHB4O3RvcDogMHB4O1xyXG5cclxuICAgICAgICAuaW1nLWdvYmFja3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMTRweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnN0YWxsbWVudC1kZXRhaWwtY29udGVudHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjRyZW07XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIC50ZXh0LXN1YntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtNHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTh7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIH1cclxufSIsIi5pbnN0YWxsbWVudC1kZXRhaWwtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNHB4KTtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtaGVhZGVyIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtaGVhZGVyIC5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtaGVhZGVyIC5kaXYtZ29iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB0b3A6IDBweDtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtaGVhZGVyIC5kaXYtZ29iYWNrIC5pbWctZ29iYWNrIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtaGVhZGVyIC50aXRsZS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5zdGFsbG1lbnQtZGV0YWlsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMS40cmVtO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1jb250ZW50IC50ZXh0LXN1YiB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1kZXRhaWwtY29udGVudCAucC10b3AtNCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uaW5zdGFsbG1lbnQtZGV0YWlsLWNvbnRlbnQgLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmluc3RhbGxtZW50LWRldGFpbC1jb250ZW50IC5wLXRvcC0xNiB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufSJdfQ== */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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