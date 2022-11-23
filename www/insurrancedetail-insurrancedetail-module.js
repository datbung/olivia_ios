(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insurrancedetail-insurrancedetail-module"],{

/***/ "./src/app/insurrancebankselect/insurrancebankselect.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/insurrancebankselect/insurrancebankselect.module.ts ***!
  \*********************************************************************/
/*! exports provided: InsurranceBankSelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurranceBankSelectPageModule", function() { return InsurranceBankSelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insurrancebankselect_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insurrancebankselect.page */ "./src/app/insurrancebankselect/insurrancebankselect.page.ts");






let InsurranceBankSelectPageModule = class InsurranceBankSelectPageModule {
};
InsurranceBankSelectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_insurrancebankselect_page__WEBPACK_IMPORTED_MODULE_5__["InsurranceBankSelectPage"]],
        exports: [_insurrancebankselect_page__WEBPACK_IMPORTED_MODULE_5__["InsurranceBankSelectPage"]]
    })
], InsurranceBankSelectPageModule);



/***/ }),

/***/ "./src/app/insurrancebankselect/insurrancebankselect.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/insurrancebankselect/insurrancebankselect.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-select cancelText=\"Đóng\" interface=\"action-sheet\" placeholder=\"Chọn ngân hàng\" class=\"bank-select\" (ionChange)=\"selectBank($event)\" class=\"action-sheet-select-bank\" required\nstyle=\"border-bottom: solid 0.5px #bdbdbd;\nfont-size: 14px;padding-left: 0;\"\n>\n    <ion-select-option  value=\"29|Ngân hàng TMCP Đại Chúng Việt Nam (PVcomBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-00.png\">\n        Ngân hàng TMCP Đại Chúng Việt Nam (PVcomBank)</ion-select-option>\n        <ion-select-option  value=\"1|Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-01.jpg\">\n          Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)</ion-select-option>\n          <ion-select-option  value=\"10|Ngân hàng TMCP Hàng Hải Việt Nam (Maritime Bank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-02.jpg\">\n            Ngân hàng TMCP Hàng Hải Việt Nam (Maritime Bank)</ion-select-option>      \n            <ion-select-option  value=\"12|Ngân hàng TMCP Sài Gòn – Hà Nội (SHB)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-03.jpg\">\n              Ngân hàng TMCP Sài Gòn – Hà Nội (SHB)</ion-select-option>\n              <ion-select-option  value=\"3|Ngân hàng TMCP Tiên Phong (TPBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-04.png\">\n                Ngân hàng TMCP Tiên Phong (TPBank)</ion-select-option>\n                <ion-select-option  value=\"11|Ngân hàng TMCP Xuất Nhập khẩu Việt Nam (Eximbank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-05.jpg\">\n                  Ngân hàng TMCP Xuất Nhập khẩu Việt Nam (Eximbank)</ion-select-option>\n                  <ion-select-option  value=\"20|Ngân hàng TMCP Đông Nam Á (SeABank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-06.jpg\">\n                    Ngân hàng TMCP Đông Nam Á (SeABank)</ion-select-option>\n                    <ion-select-option  value=\"7|Ngân hàng TMCP Phát triển TPHCM (HDBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-07.jpg\">\n                      Ngân hàng TMCP Phát triển TPHCM (HDBank)</ion-select-option>\n                      <ion-select-option  value=\"6|Ngân hàng TMCP Đông Á (DongABank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-08.jpg\">\n                        Ngân hàng TMCP Đông Á (DongABank)</ion-select-option>\n                        <ion-select-option  value=\"16|Ngân hàng TMCP Sài Gòn Thương Tín (SacomBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-09.jpg\">\n                          Ngân hàng TMCP Sài Gòn Thương Tín (SacomBank)</ion-select-option>\n                          <ion-select-option  value=\"18|Ngân hàng Thương mại TNHH một thành viên Đại Dương (OceanBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-10.jpg\">\n                            Ngân hàng Thương mại TNHH một thành viên Đại Dương (OceanBank)</ion-select-option>\n                            <ion-select-option  value=\"8|Ngân hàng TMCP Quân Đội (MB)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-11.jpg\">\n                              Ngân hàng TMCP Quân Đội (MB)</ion-select-option>\n                              <ion-select-option  value=\"25|Ngân hàng TMCP Sài Gòn (SCB)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-12.jpg\">\n                                Ngân hàng TMCP Sài Gòn (SCB)</ion-select-option>\n                                <ion-select-option  value=\"15|Ngân hàng TMCP An Bình (ABBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-13.jpg\">\n                                  Ngân hàng TMCP An Bình (ABBank)</ion-select-option>\n                                  <ion-select-option  value=\"14|Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-14.jpg\">\n                                    Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank)</ion-select-option>\n                                    <ion-select-option  value=\"5|Ngân hàng TMCP Quốc Tế Việt Nam (VIB)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-15.jpg\">\n                                      Ngân hàng TMCP Quốc Tế Việt Nam (VIB)</ion-select-option>\n                                      <ion-select-option  value=\"4|Ngân hàng TMCP Công Thương Việt Nam (VietInBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-16.jpg\">\n                                        Ngân hàng TMCP Công Thương Việt Nam (VietInBank)</ion-select-option>\n                                        <ion-select-option  value=\"22|Ngân hàng TMCP Bắc Á (Bac A Bank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-17.jpg\">\n                                          Ngân hàng TMCP Bắc Á (Bac A Bank)</ion-select-option>\n                                          <ion-select-option  value=\"19|Ngân hàng Đầu tư và Phát triển Việt Nam (BIDV)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-18.jpg\">\n                                            Ngân hàng Đầu tư và Phát triển Việt Nam (BIDV)</ion-select-option>\n                                            <ion-select-option  value=\"17|Ngân hàng TMCP Nam Á (Nam A Bank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-19.jpg\">\n                                              Ngân hàng TMCP Nam Á (Nam A Bank)</ion-select-option>\n                                              <ion-select-option  value=\"9|Ngân hàng TMCP Việt Á (Viet A Bank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-20.jpg\">\n                                                Ngân hàng TMCP Việt Á (Viet A Bank)</ion-select-option>\n                                                <ion-select-option  value=\"23|Ngân hàng TMCP Quốc Dân (NCB)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-21.jpg\">\n                                                  Ngân hàng TMCP Quốc Dân (NCB)</ion-select-option>\n                                                  <ion-select-option  value=\"2|Ngân hàng TMCP Kỹ Thương Việt Nam (TeachcomBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/Bank-Icons-22.jpg\">\n                                                    Ngân hàng TMCP Kỹ Thương Việt Nam (TeachcomBank)</ion-select-option>\n                                                    <ion-select-option  value=\"28|Ngân hàng TMCP Việt Nam Thương Tín (DongABank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/bank_28.png\">\n                                                      Ngân hàng TMCP Việt Nam Thương Tín (DongABank)</ion-select-option>\n                                                      <ion-select-option  value=\"21|Union Pay\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/bank_21.png\">\n                                                        Union Pay</ion-select-option>\n                                                        <ion-select-option  value=\"30|Ngân hàng TMCP Bản Việt (VietCapitalBank)\" > <img class=\"img-bank\" src=\"./assets/ic_bankonepay/bank_30.png\">\n                                                          Ngân hàng TMCP Bản Việt (VietCapitalBank)</ion-select-option>\n\n\n</ion-select>\n"

/***/ }),

/***/ "./src/app/insurrancebankselect/insurrancebankselect.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/insurrancebankselect/insurrancebankselect.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .action-sheet-cancel.sc-ion-action-sheet-ios {\n  background-color: #ff9500;\n  color: #ffffff !important;\n  width: 91%;\n  font-size: 18px;\n  margin: 8px 16px;\n  text-align: center;\n  border-radius: 4px;\n}\n::ng-deep .action-sheet-cancel.sc-ion-action-sheet-ios .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: center;\n}\n::ng-deep .action-sheet-group::-webkit-scrollbar {\n  width: 1em;\n  display: block !important;\n}\n::ng-deep .action-sheet-group::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n::ng-deep .action-sheet-group::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey;\n}\n::ng-deep .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 18px;\n  color: black;\n  font-weight: bold;\n}\n::ng-deep .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n}\n::ng-deep .action-sheet-group.sc-ion-action-sheet-ios:last-child .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 18px;\n}\n::ng-deep .action-sheet-title.sc-ion-action-sheet-ios {\n  text-align: left;\n  font-size: 18px;\n  color: #222222;\n  font-weight: bold;\n}\n::ng-deep .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: left;\n}\n::ng-deep .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  color: #828282;\n  height: 60px;\n  text-align: left;\n}\n::ng-deep .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: flex-start;\n}\n::ng-deep .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 18px;\n  font-weight: bold;\n}\n::ng-deep .action-sheet-group.sc-ion-action-sheet-ios {\n  border-radius: 0;\n  margin-bottom: 0;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9pbnN1cnJhbmNlYmFua3NlbGVjdC9pbnN1cnJhbmNlYmFua3NlbGVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2luc3VycmFuY2ViYW5rc2VsZWN0L2luc3VycmFuY2ViYW5rc2VsZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSx1QkFBQTtBQ0NaO0FERUk7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUNBUjtBREdJO0VBQ0ksb0RBQUE7QUNEUjtBRElJO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtBQ0ZSO0FES0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSFI7QURNSTtFQUNJLFVBQUE7QUNKUjtBRE1JO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FDSlI7QURLUTtFQUNJLGVBQUE7QUNIWjtBRE9JO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTFI7QURPSTtFQUNJLHFCQUFBO0FDTFI7QURPSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTFI7QURRSTtFQUNJLDJCQUFBO0FDTlI7QURRSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ05SO0FEUUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvaW5zdXJyYW5jZWJhbmtzZWxlY3QvaW5zdXJyYW5jZWJhbmtzZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwe1xyXG4gICAgLmFjdGlvbi1zaGVldC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA5MSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldC1ncm91cDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAxZW07XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFjdGlvbi1zaGVldC1ncm91cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3Rpb24tc2hlZXQtZ3JvdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JleTtcclxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC8vc3R5bGUgY2hvIGlvc1xyXG4gICAgLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAvL2NvbG9yOiNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxufSIsIjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0LWNhbmNlbC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MSU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiA4cHggMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0LWdyb3VwOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxZW07XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1ncm91cDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXQtZ3JvdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZXk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/insurrancebankselect/insurrancebankselect.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/insurrancebankselect/insurrancebankselect.page.ts ***!
  \*******************************************************************/
/*! exports provided: InsurranceBankSelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurranceBankSelectPage", function() { return InsurranceBankSelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");



let InsurranceBankSelectPage = class InsurranceBankSelectPage {
    constructor(gf, activityService) {
        this.gf = gf;
        this.activityService = activityService;
    }
    selectBank(ev) {
        this.activityService.bank = {};
        if (ev) {
            this.activityService.bank.id = ev.detail.value.split('|')[0];
            this.activityService.bank.name = ev.detail.value.split('|')[1];
            this.activityService.bank.bankSelected = ev.detail.value.split('|')[0];
            this.activityService.currentArticle.emit(ev);
        }
    }
};
InsurranceBankSelectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insurrancebankselect',
        template: __webpack_require__(/*! ./insurrancebankselect.page.html */ "./src/app/insurrancebankselect/insurrancebankselect.page.html"),
        styles: [__webpack_require__(/*! ./insurrancebankselect.page.scss */ "./src/app/insurrancebankselect/insurrancebankselect.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["GlobalFunction"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["ActivityService"]])
], InsurranceBankSelectPage);



/***/ }),

/***/ "./src/app/insurrancedetail/insurrancedetail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/insurrancedetail/insurrancedetail.module.ts ***!
  \*************************************************************/
/*! exports provided: InsurrancedetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurrancedetailPageModule", function() { return InsurrancedetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insurrancedetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurrancedetail.page */ "./src/app/insurrancedetail/insurrancedetail.page.ts");
/* harmony import */ var _insurrancebankselect_insurrancebankselect_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../insurrancebankselect/insurrancebankselect.module */ "./src/app/insurrancebankselect/insurrancebankselect.module.ts");








const routes = [
    {
        path: '',
        component: _insurrancedetail_page__WEBPACK_IMPORTED_MODULE_6__["InsurrancedetailPage"]
    }
];
let InsurrancedetailPageModule = class InsurrancedetailPageModule {
};
InsurrancedetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _insurrancebankselect_insurrancebankselect_module__WEBPACK_IMPORTED_MODULE_7__["InsurranceBankSelectPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_insurrancedetail_page__WEBPACK_IMPORTED_MODULE_6__["InsurrancedetailPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], InsurrancedetailPageModule);



/***/ }),

/***/ "./src/app/insurrancedetail/insurrancedetail.page.html":
/*!*************************************************************!*\
  !*** ./src/app/insurrancedetail/insurrancedetail.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"insurrance-header\">\n  <ion-toolbar class=\"header-toolbar\">\n    <ion-row>\n      <ion-col class=\"header-col\">\n        <div class=\"as-center\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div *ngIf=\"item\" class=\"header-title\"><label style=\"font-size: 18px\">Bảo hiểm {{item.insurance_code}}</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"insurrance-page\">\n  <div>\n    <ion-label *ngIf=\" (type==1 || type==3) else returnFlight\" class=\"text\">\n      Chiều đi | {{ flightNumberDisplay}} | {{ departCodeDisplay}}\n    </ion-label>\n    <ng-template #returnFlight>\n        <ion-label class=\"text\">\n            Chiều về | {{ flightNumberDisplay}} | {{ arrivalCodeDisplay}}\n          </ion-label>\n    </ng-template>\n  </div>\n  <!-- Giờ bay (trễ chuyến)-->\n  <div *ngIf=\"(type == 1 || type ==2) else cancelFlight\">\n      <div class=\"mtop\">\n          <ion-label class=\"text-small\">\n            Giờ bay dự kiến\n          </ion-label>\n          <div class=\"m-top-8 div-datetime\">\n            <img src=\"./assets/iocnsearch/ic_checkin.svg\">\n           <div class=\"ip-expecteddate\"><label class=\"ip-padding\">{{expecteddate}}</label></div>\n           <div class=\"ip-expectedtime\"><label class=\"ip-padding\">{{expectedtime}}</label></div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"mtop\">\n          <ion-label class=\"text-small\">\n            Giờ bay thực tế\n          </ion-label>\n          <div class=\"m-top-8 div-datetime\">\n            <img src=\"./assets/iocnsearch/ic_checkin.svg\">\n            <div class=\"ip-expecteddate\" (click)=\"openPickupCalendar()\"><label class=\"ip-padding\">{{realdate}}</label></div>\n            <div class=\"ip-expectedtime ip-realtime\"><ion-datetime class=\"input-datetime\" displayFormat=\"HH:mm\" [(value)]=\"realtime\"required (ionChange)=\"changeFlightTime($event)\"></ion-datetime></div>\n          </div>\n        </div>\n        <hr class=\"hr-margin\">\n        <!-- Đổi mã chuyến bay -->\n        <div class=\"m-top-10 div-relative\">\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"checkChangeFlight\"></ion-checkbox>\n          <ion-label class=\"div-changeflight-label\" (click)=\"changeFlight()\">Đổi mã chuyến bay</ion-label>\n          <ion-item class=\"ion-item\" *ngIf=\"checkChangeFlight\">\n              <ion-input #ipFlightNumber [(ngModel)]=\"flightNumber\" type=\"text\" required></ion-input>\n          </ion-item>\n        </div>\n    \n  </div>\n  <!-- Hủy chuyến bay -->\n  <ng-template #cancelFlight>\n      <div class=\"mtop\">\n        <ion-label class=\"text-small\">\n          Giờ bay dự kiến\n        </ion-label>\n        <div class=\"m-top-8 div-datetime\">\n          <img src=\"./assets/iocnsearch/ic_checkin.svg\">\n        <div class=\"ip-expecteddate\"><label class=\"ip-padding\">{{expecteddate}}</label></div>\n        <div class=\"ip-expectedtime\"><label class=\"ip-padding\">{{expectedtime}}</label></div>\n        </div>\n      </div>\n      <div class=\"cancel-flight text-normal\"> \n        Chuyến bay bị hủy bởi hãng hàng không\n      </div>\n  </ng-template>\n  \n  \n\n  <div class=\"div-insurrance-info\">\n    <div class=\"customer-label\">\n        <ion-label>Người nhận bảo hiểm</ion-label>\n    </div>\n    <div class=\"div-customer-info\">\n        <img class=\"img-people\" src=\"./assets/imgs/ic_people.svg\">\n        <div class=\"customer-info\" *ngIf=\"item && !isChildren\"><label>{{item.customer_name}} | {{item.customer_id}} | {{item.customer_dob}}</label></div>\n        <div class=\"customer-info\" *ngIf=\"item && isChildren\"><label>{{item.customer_name}} | {{item.customer_dob}}</label></div>\n    </div>\n    <div *ngIf=\"isChildren\" class=\"p-top-16\">\n      <ion-row>\n        <ion-col size=\"4\" class=\"no-padding\">\n          <ion-label class=\"ip-label\" position=\"floating\">Quan hệ</ion-label>\n            <ion-select class=\"cls-item-select\" cancelText=\"Thoát\" interface=\"action-sheet\" (ionChange)=\"selectedRelation($event, i)\">\n                <ion-select-option value=\"Con\" selected>Con</ion-select-option>\n                <ion-select-option value=\"Khác\">Khác</ion-select-option>\n            </ion-select>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf=\"!isChildren\">\n      <div class=\"phone-info\">\n        <ion-item class=\"ion-item\">\n          <ion-label class=\"ip-label\" position=\"floating\">Điện thoại</ion-label>\n          <ion-input #ipPhone [(ngModel)]=\"phone\" maxlength=10 type=\"tel\" required></ion-input>\n        </ion-item>\n      </div>\n      <div class=\"email-info\">\n            <ion-item class=\"ion-item\">\n              <ion-label class=\"ip-label\" position=\"floating\">Email</ion-label>\n              <ion-input #ipEmail [(ngModel)]=\"email\" type=\"text\" required></ion-input>\n            </ion-item>\n      </div>\n    </div>\n    <div *ngIf='isChildren' class=\"p-top-32\">\n      <div class=\"customer-label\">\n        <ion-label>Người được ủy quyền</ion-label>\n    </div>\n      <div class=\"name-info\">\n        <ion-item class=\"ion-item\">\n          <ion-label class=\"ip-label\" position=\"floating\">Họ tên</ion-label>\n          <ion-input #ipName [(ngModel)]=\"name\" type=\"text\" required (ionInput)=\"inputAdultName($event)\"></ion-input>\n        </ion-item>\n      </div>\n      <div class=\"cmnd-info\">\n            <ion-item class=\"ion-item\">\n              <ion-label class=\"ip-label\" position=\"floating\">CMND/Hộ chiếu</ion-label>\n              <ion-input #ipCMND [(ngModel)]=\"identityno\" type=\"number\" required></ion-input>\n            </ion-item>\n      </div>\n      <div class=\"phone-info\">\n        <ion-item class=\"ion-item\">\n          <ion-label class=\"ip-label\" position=\"floating\">Điện thoại</ion-label>\n          <ion-input #ipPhone [(ngModel)]=\"phone\" maxlength=10 type=\"tel\" required></ion-input>\n        </ion-item>\n      </div>\n      <div class=\"email-info\">\n            <ion-item class=\"ion-item\">\n              <ion-label class=\"ip-label\" position=\"floating\">Email</ion-label>\n              <ion-input #ipEmail [(ngModel)]=\"email\" type=\"text\" required></ion-input>\n            </ion-item>\n      </div>\n    </div>\n    \n   \n\n    <div class=\"div-child-info\" *ngIf=\"childlist && childlist.length >0\">\n      <!-- <div *ngFor=\"let child of childlist; let i = index\"  [ngClass]=\"i == 0 ? 'row-item-child show ' : 'row-item-child hidden'\"> -->\n        <div *ngFor=\"let child of childlist; let i = index\"  class=\"row-item-child hidden\">\n        <div class=\"child-label\">Trẻ {{ i+1 }}</div>\n          <ion-row class=\"item-child-{{i+1}}\">\n            <ion-col class=\"no-padding\">\n              <ion-row>\n                  <ion-col size=\"8\" class=\"col-left\">\n                      <ion-label class=\"ip-label\" position=\"floating\">Họ tên trẻ em</ion-label>\n                      <ion-select class=\"cls-item-select item-child-select-{{i}}\" cancelText=\"Thoát\" interface=\"action-sheet\" (ionChange)=\"selectedChildren($event, i)\">\n                          <ion-select-option class=\"action-sheet-insurrance-detail item-children-{{i}}\" *ngFor=\"let children of childlist\" value=\"{{children.id}}|{{children.name}}|{{children.birth}}\" name=\"{{children.name}}\">{{children.name}}</ion-select-option>\n                      </ion-select>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                      <ion-label class=\"ip-label\" position=\"floating\">Quan hệ</ion-label>\n                      <ion-select class=\"cls-item-select\" cancelText=\"Thoát\" interface=\"action-sheet\" (ionChange)=\"selectedRelation($event, i)\">\n                          <ion-select-option value=\"Con\" selected>Con</ion-select-option>\n                          <ion-select-option value=\"Khác\">Khác</ion-select-option>\n                      </ion-select>\n                  </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col class=\"no-padding\">\n                    <div class=\"ip-label div-dob\">Ngày sinh</div>\n                    <div>\n                      <ion-label *ngIf=\"i==0\">{{child1Dob}}</ion-label>\n                      <ion-label *ngIf=\"i==1\">{{child2Dob}}</ion-label>\n                      <ion-label *ngIf=\"i==2\">{{child3Dob}}</ion-label>\n                      <ion-label *ngIf=\"i==3\">{{child4Dob}}</ion-label>\n                      <ion-label *ngIf=\"i==4\">{{child5Dob}}</ion-label>\n                    </div>\n                    <hr class=\"hr-margin\">\n                </ion-col>\n              </ion-row>\n              \n            </ion-col>\n           \n\n          </ion-row>\n          \n      </div>\n      <div class=\"div-add-child\" (click)=\"addChildInfo()\" *ngIf=\"countchild <= childlist.length-1\">\n          <img class=\"img-add-child\" src=\"./assets/imgs/icon_content_add.svg\">\n          <div class=\"text-add-child\"><ion-label >Thêm trẻ em đi kèm</ion-label></div>\n      </div>\n    </div>\n  </div>\n\n  \n\n  <div class=\"div-text-payment\">\n    <ion-label class=\"text\">\n      Hình thức thanh toán\n    </ion-label>\n  </div>\n  <ion-radio-group>\n    <div class=\"m-8\">\n      <!-- <ion-item class=\"ion-item\" > -->\n        <ion-radio mode=\"md\" (ionSelect)=\"itemrd()\" class=\"rd-bank\">\n        </ion-radio>\n        <label class=\"label-rd\" *ngIf=\"!ischeck\">Chuyển khoản ngân hàng</label>\n        <label class=\"label-rd rd-selected\" *ngIf=\"ischeck\">Chuyển khoản ngân hàng</label>\n      <!-- </ion-item> -->\n      <div *ngIf=\"ischeck\">\n            <div *ngIf=\"showTransferInfo\">\n              <app-insurrancebankselect id=\"ipbanktransferselected\"></app-insurrancebankselect>\n              <ion-item class=\"ion-item\">\n                <ion-label position=\"floating\" class=\"text-info\" >Chi nhánh</ion-label>\n                <ion-input #ipTransferBranch type=\"text\" required [(ngModel)]=\"bankTransferBranch\"></ion-input>\n              </ion-item>\n              <ion-item class=\"ion-item\">\n                <ion-label position=\"floating\" class=\"text-info\" >Tên chủ tài khoản</ion-label>\n                <ion-input #ipAccountName type=\"text\" required [(ngModel)]=\"bankAccountName\" (ionInput)=\"inputBankAccountName($event)\"></ion-input>\n              </ion-item>\n              <ion-item class=\"ion-item\">\n                <ion-label position=\"floating\" class=\"text-info\" >Số tài khoản</ion-label>\n                <ion-input #ipAccountNumber type=\"number\" required [(ngModel)]=\"bankAccountNumber\"></ion-input>\n              </ion-item>\n          </div>\n      </div>\n     \n    </div>\n    <div class=\"m-8\">\n      <!-- <ion-item class=\"ion-item\"> -->\n        <ion-radio mode=\"md\" (ionSelect)=\"itemrdinbank()\" class=\"rd-bank\">\n        </ion-radio>\n        <label class=\"label-rd\" *ngIf=\"ischeck\" >Nhận tại ngân hàng</label>\n        <label class=\"label-rd rd-selected\" *ngIf=\"!ischeck\">Nhận tại ngân hàng</label>\n      <!-- </ion-item> -->\n      <div *ngIf=\"!ischeck\">\n          <div *ngIf=\"showReceiveInfo\">\n            <app-insurrancebankselect id=\"ipbankreceiveselected\"></app-insurrancebankselect>\n            <ion-item class=\"ion-item\">\n              <ion-label position=\"floating\" class=\"text-info\">Chi nhánh</ion-label>\n              <ion-input #ipReceiveBranch type=\"text\" required [(ngModel)]=\"bankReceiveBranch\"></ion-input>\n            </ion-item>\n\n            <ion-item class=\"ion-item\">\n              <ion-label position=\"floating\" class=\"text-info\">Tỉnh/ thành</ion-label>\n              <ion-input #ipProvince type=\"text\" required [(ngModel)]=\"province\"></ion-input>\n            </ion-item>\n          </div>\n      </div>\n      \n    </div>\n  </ion-radio-group>\n  <!-- -------------------Hình ảnh bổ sung -->\n  <div class=\"div-upload-image\">\n    <ion-label class=\"text\">\n      Hình ảnh bổ sung\n    </ion-label>\n    <div class=\"m-top-15\">\n\n      <div class=\"div-item-selectimage\">\n          <div class=\"div-item-selectimage-label\">\n              <ion-label>\n                  Thẻ lên tàu bay:\n              </ion-label>\n          </div>\n          <div class=\"div-item-selectimage-chip\" (click)=\"getImages(1, 1 , -1)\">\n            <ion-chip  class=\"ionchip\">\n              <img src=\"./assets/imgs/loadimg.svg\" />\n              <ion-label class=\"loadimg\">Tải hình</ion-label>\n            </ion-chip>\n            <!-- <input type=\"file\" id=\"fileBoarding\" name='files[]' accept=\"image/*\" class=\"input-boarding-pass\" multiple=\"multiple\" upload=\"uploadImage($event,1)\" capture/> -->\n          </div>\n        <div *ngIf=\"imageResponse.length>0&&imageResponse.length<2\" class=\"cls-image-response\"  >\n          <div *ngFor=\"let img of imageResponse; let idx= index\" class=\"div-img-boarding-only\">\n              <img [src]=\"img.img\"  class=\"img-boardingpass-only\">\n              <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImg(1)\">\n          </div>\n        </div>\n        <div *ngIf=\"imageResponse.length>0&&imageResponse.length>=2\" class=\"cls-image-response\" >\n            <div  class=\"div-img-boarding\">\n                 <label *ngFor=\"let img of imageResponse; let idx= index\" >\n                  <img [src]=\"img.img\"  class=\"img-boardingpass-many\">\n                  <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImg(1,idx)\">\n              </label> \n            </div>\n        </div>\n      </div>\n\n      <div class=\"m-top-10 div-item-selectimage\">\n          <div class=\"div-item-selectimage-label\">\n              <ion-label *ngIf=\"!isChildren else divChildGKS\">\n                  CMND/hộ chiếu:\n              </ion-label>\n              <ng-template #divChildGKS>\n                <ion-label >\n                  Giấy khai sinh:\n                </ion-label>\n              </ng-template>\n          </div>\n          <div class=\"div-item-selectimage-chip\">\n              <ion-chip class=\"ionchip\" (click)=\"getImages(2, 1, -1)\">\n                  <img src=\"./assets/imgs/loadimg.svg\" />\n                  <ion-label class=\"loadimg\">Tải hình</ion-label>\n                </ion-chip>\n                <!-- <input type=\"file\" accept=\"image/*, application/pdf\" class=\"input-boarding-pass\" multiple=\"multiple\" (change)=\"uploadImage($event,2)\" /> -->\n          </div>\n        <div *ngIf=\"imageResponseCMND && imageResponseCMND.length >0 && imageResponseCMND.length <2\" class=\"cls-image-response\"  >\n            <div *ngFor=\"let img of imageResponseCMND\" class=\"div-img-boarding-only\">\n                <img [src]=\"img.img\"  class=\"img-boardingpass-only\">\n                <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImg(2)\">\n            </div>\n        </div>\n        <div *ngIf=\"imageResponseCMND && imageResponseCMND.length>=2\" class=\"cls-image-response\"  >\n            <div class=\"div-img-boarding\">\n              <label *ngFor=\"let img of imageResponseCMND; let idx= index\">\n                <img [src]=\"img.img\"  class=\"img-boardingpass-many\">\n                <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImg(2,idx)\">\n              </label>\n            </div>\n              \n        </div>\n      </div>\n\n      <div class=\"m-top-10 div-item-selectimage\">\n          <div class=\"div-item-selectimage-label\">\n              <ion-label class=\"fix-width-103\" *ngIf=\"!isChildren else divChildOther\">\n                  Giấy tờ khác:\n                </ion-label>\n                <ng-template #divChildOther>\n                  <ion-label class=\"fix-width-103\">\n                    Giấy ủy quyền:\n                  </ion-label>\n                </ng-template>\n          </div>\n          <div class=\"div-item-selectimage-chip\">\n              <ion-chip class=\"ionchip\" (click)=\"getImages(3, 1, -1)\">\n                  <img src=\"./assets/imgs/loadimg.svg\" />\n                  <ion-label class=\"loadimg\">Tải hình</ion-label>\n                </ion-chip>\n                <!-- <input type=\"file\" accept=\"image/*, application/pdf\" class=\"input-boarding-pass\" multiple=\"multiple\" (change)=\"uploadImage($event,3)\" /> -->\n            </div>\n          <div *ngIf=\"imageResponseGKS && imageResponseGKS.length >0 && imageResponseGKS.length <2\" class=\"cls-image-response\"  >\n              <div *ngFor=\"let img of imageResponseGKS\" class=\"div-img-boarding-only\">\n                  <img [src]=\"img.img\"  class=\"img-boardingpass-only\">\n                  <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImg(3)\">\n              </div>\n                \n          </div>\n          <div *ngIf=\"imageResponseGKS && imageResponseGKS.length>=2\" class=\"cls-image-response\"  >\n              <div class=\"div-img-boarding\">\n                <label *ngFor=\"let img of imageResponseGKS; let idx= index\">\n                  <img [src]=\"img.img\"  class=\"img-boardingpass-many\">\n                  <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImg(3,idx)\">\n                </label>\n              </div>\n          </div>\n        </div>\n\n    </div>\n     <!-- Trẻ em -->\n     <div class=\"m-top-24\" *ngIf=\"childlist && childlist.length >0\">\n        <!-- <div *ngFor=\"let child of childlist; let i = index\"  [ngClass]=\"i == 0 ? 'row-item-child show ' : 'row-item-child hidden'\"> -->\n          <div *ngFor=\"let child of childlist; let i = index\"  class=\"row-item-child hidden\">\n          <div class=\"item-child-{{i+1}}\">\n            <ion-label class=\"text\">\n                Trẻ {{ i+1 }} | {{child.name}}\n            </ion-label>\n            <div class=\"div-item-selectimage m-top-15\">\n                <div class=\"div-item-selectimage-label\">\n                    <ion-label>\n                        Thẻ lên tàu bay:\n                    </ion-label>\n                </div>\n                <div class=\"div-item-selectimage-chip\">\n                  <ion-chip  class=\"ionchip\" (click)=\"getImages(1, 2, i+1)\">\n                    <img src=\"./assets/imgs/loadimg.svg\" />\n                    <ion-label class=\"loadimg\">Tải hình</ion-label>\n                  </ion-chip>\n                  <!-- <input type=\"file\" accept=\"image/*, application/pdf\" class=\"input-boarding-pass\" multiple=\"multiple\" (change)=\"uploadImageChild($event, 1, i+1)\"/> -->\n                </div>\n                <div *ngIf=\"i==0\">\n                    <div *ngIf=\"child1ImageResponse.length>0&&child1ImageResponse.length<2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child1ImageResponse; let idx= index\" class=\"div-img-boarding-only\">\n                            <img [src]=\"img.img\"  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(1, i+1)\">\n                        </div>\n                          \n                      </div>\n                      <div *ngIf=\"child1ImageResponse.length>0&&child1ImageResponse.length>=2\" class=\"cls-image-response\" >\n                          <div  class=\"div-img-boarding\">\n                              <label *ngFor=\"let img of child1ImageResponse; let idx= index\" >\n                                <img [src]=\"img.img\"  class=\"img-boardingpass-many\">\n                                <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(1, i+1,idx)\">\n                            </label> \n                                \n                          </div>\n                      </div>\n                </div>\n\n                <div *ngIf=\"i==1\">\n                    <div *ngIf=\"child2ImageResponse.length>0&&child2ImageResponse.length<2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child2ImageResponse; let idx= index\" class=\"div-img-boarding-only\">\n                            <img [src]=\"img.img\"  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(1, i+1)\">\n                        </div>\n                          \n                      </div>\n                      <div *ngIf=\"child2ImageResponse.length>0&&child2ImageResponse.length>=2\" class=\"cls-image-response\" >\n                          <div  class=\"div-img-boarding\">\n                              <label *ngFor=\"let img of child2ImageResponse; let idx= index\" >\n                                <img [src]=\"img.img\"  class=\"img-boardingpass-many\">\n                                <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(1, i+1,idx)\">\n                            </label> \n                                \n                          </div>\n                      </div>\n                </div>\n\n                <div *ngIf=\"i==2\">\n                    <div *ngIf=\"child3ImageResponse.length>0&&child3ImageResponse.length<2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child3ImageResponse; let idx= index\" class=\"div-img-boarding-only\">\n                            <img [src]=\"img.img\"  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(1, i+1)\">\n                        </div>\n                          \n                      </div>\n                      <div *ngIf=\"child3ImageResponse.length>0&&child3ImageResponse.length>=2\" class=\"cls-image-response\" >\n                          <div  class=\"div-img-boarding\">\n                              <label *ngFor=\"let img of child3ImageResponse; let idx= index\" >\n                                <img [src]=\"img.img\"  class=\"img-boardingpass-many\">\n                                <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(1, i+1,idx)\">\n                            </label> \n                                \n                          </div>\n                      </div>\n                </div>\n\n                <div *ngIf=\"i==3\">\n                    <div *ngIf=\"child4ImageResponse.length>0&&child4ImageResponse.length<2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child4ImageResponse; let idx= index\" class=\"div-img-boarding-only\">\n                            <img [src]=\"img.img\"  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(1, i+1)\">\n                        </div>\n                          \n                      </div>\n                      <div *ngIf=\"child4ImageResponse.length>0&&child4ImageResponse.length>=2\" class=\"cls-image-response\" >\n                          <div  class=\"div-img-boarding\">\n                              <label *ngFor=\"let img of child4ImageResponse; let idx= index\" >\n                                <img [src]=\"img.img\"  class=\"img-boardingpass-many\">\n                                <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(1, i+1,idx)\">\n                            </label> \n                                \n                          </div>\n                      </div>\n                </div>\n\n                <div *ngIf=\"i==4\">\n                    <div *ngIf=\"child5ImageResponse.length>0&&child5ImageResponse.length<2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child5ImageResponse; let idx= index\" class=\"div-img-boarding-only\">\n                            <img [src]=\"img.img\"  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(1, i+1)\">\n                        </div>\n                          \n                      </div>\n                      <div *ngIf=\"child5ImageResponse.length>0&&child5ImageResponse.length>=2\" class=\"cls-image-response\" >\n                          <div  class=\"div-img-boarding\">\n                              <label *ngFor=\"let img of child5ImageResponse; let idx= index\" >\n                                <img [src]=\"img.img\"  class=\"img-boardingpass-many\">\n                                <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(1, i+1,idx)\">\n                            </label> \n                                \n                          </div>\n                      </div>\n                </div>\n                \n              </div>\n\n              <div class=\"div-item-selectimage m-top-10\">\n                  <div class=\"div-item-selectimage-label\">\n                      <ion-label>\n                          Giấy khai sinh:\n                        </ion-label>\n                  </div>\n                  <div class=\"div-item-selectimage-chip\">\n                    <ion-chip class=\"ionchip p-left-15\"  (click)=\"getImages(2, 2, i+1)\">\n                      <img src=\"./assets/imgs/loadimg.svg\" />\n                      <ion-label class=\"loadimg\">Tải hình</ion-label>\n                    </ion-chip>\n                    <!-- <input type=\"file\" accept=\"image/*, application/pdf\" class=\"input-boarding-pass\" (change)=\"uploadImageChild($event,2, i+1)\"/> -->\n                  </div>\n                <div *ngIf=\"i==0\">\n                    <div *ngIf=\"child1ImageResponseGKS.length>0 && child1ImageResponseGKS.length<2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child1ImageResponseGKS\" class=\"div-img-boarding-only\">\n                            <img src={{img.img}}  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(2, i+1)\">\n                        </div>\n                          \n                    </div>\n      \n                    <div *ngIf=\"child1ImageResponseGKS.length>0 && child1ImageResponseGKS.length >= 2\" class=\"cls-image-response\"  >\n                        <div  class=\"div-img-boarding-many\">\n                          <label *ngFor=\"let img of child1ImageResponseGKS ; let idx= index\" >\n                            <img src={{img.img}}  class=\"img-boardingpass-many\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(2, i+1, idx)\">\n                          </label>\n                        </div>\n                          \n                    </div>\n                </div>\n\n                <div *ngIf=\"i==1\">\n                    <div *ngIf=\"child2ImageResponseGKS.length>0 && child2ImageResponseGKS.length <2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child2ImageResponseGKS\" class=\"div-img-boarding-only\">\n                            <img src={{img.img}}  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(2, i+1)\">\n                        </div>\n                          \n                    </div>\n      \n                    <div *ngIf=\"child2ImageResponseGKS.length>0 && child2ImageResponseGKS.length >= 2\" class=\"cls-image-response\"  >\n                        <div class=\"div-img-boarding-many\">\n                          <label  *ngFor=\"let img of child2ImageResponseGKS ; let idx= index\">\n                            <img src={{img.img}}  class=\"img-boardingpass-many\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(2, i+1, idx)\">\n                          </label>\n                        </div>\n                          \n                    </div>\n                </div>\n\n                <div *ngIf=\"i==2\">\n                    <div *ngIf=\"child3ImageResponseGKS.length>0 && child3ImageResponseGKS.length <2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child3ImageResponseGKS\" class=\"div-img-boarding-only\">\n                            <img src={{img.img}}  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(2, i+1)\">\n                        </div>\n                          \n                    </div>\n      \n                    <div *ngIf=\"child3ImageResponseGKS.length>0 && child3ImageResponseGKS.length >= 2\" class=\"cls-image-response\"  >\n                        <div class=\"div-img-boarding-many\">\n                          <label  *ngFor=\"let img of child3ImageResponseGKS ; let idx= index\">\n                            <img src={{img.img}}  class=\"img-boardingpass-many\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(2, i+1, idx)\">\n                          </label>\n                        </div>\n                          \n                    </div>\n                </div>\n\n                <div *ngIf=\"i==3\">\n                    <div *ngIf=\"child4ImageResponseGKS.length>0 && child4ImageResponseGKS.length <2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child4ImageResponseGKS\" class=\"div-img-boarding-only\">\n                            <img src={{img.img}}  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(2, i+1)\">\n                        </div>\n                          \n                    </div>\n      \n                    <div *ngIf=\"child4ImageResponseGKS.length>0 && child4ImageResponseGKS.length >= 2\" class=\"cls-image-response\"  >\n                        <div class=\"div-img-boarding-many\">\n                          <label *ngFor=\"let img of child4ImageResponseGKS ; let idx= index\">\n                            <img src={{img.img}}  class=\"img-boardingpass-many\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(2, i+1, idx)\">\n                          </label>\n                        </div>\n                          \n                    </div>\n                </div>\n\n                <div *ngIf=\"i==4\">\n                    <div *ngIf=\"child5ImageResponseGKS.length>0 && child5ImageResponseGKS.length <2\" class=\"cls-image-response\"  >\n                        <div *ngFor=\"let img of child5ImageResponseGKS\" class=\"div-img-boarding-only\">\n                            <img src={{img.img}}  class=\"img-boardingpass-only\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(2, i+1)\">\n                        </div>\n                          \n                    </div>\n      \n                    <div *ngIf=\"child5ImageResponseGKS.length>0 && child5ImageResponseGKS.length >= 2\" class=\"cls-image-response\"  >\n                        <div class=\"div-img-boarding-many\">\n                          <label *ngFor=\"let img of child5ImageResponseGKS ; let idx= index\">\n                            <img src={{img.img}}  class=\"img-boardingpass-many\">\n                            <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(2, i+1, idx)\">\n                          </label>\n                        </div>\n                          \n                    </div>\n                </div>\n              </div>\n\n              <div class=\"div-item-selectimage m-top-10\">\n                <div class=\"div-item-selectimage-label\">\n                    <ion-label>\n                        Giấy tờ khác:\n                      </ion-label>\n                </div>\n                <div class=\"div-item-selectimage-chip\">\n                  <ion-chip class=\"ionchip p-left-15\"  (click)=\"getImages(3, 2, i+1)\">\n                    <img src=\"./assets/imgs/loadimg.svg\" />\n                    <ion-label class=\"loadimg\">Tải hình</ion-label>\n                  </ion-chip>\n                  <!-- <input type=\"file\" accept=\"image/*, application/pdf\" class=\"input-boarding-pass\" (change)=\"uploadImageChild($event,2, i+1)\"/> -->\n                </div>\n              <div *ngIf=\"i==0\">\n                  <div *ngIf=\"child1ImageResponseOther.length>0 && child1ImageResponseOther.length<2\" class=\"cls-image-response\"  >\n                      <div *ngFor=\"let img of child1ImageResponseOther\" class=\"div-img-boarding-only\">\n                          <img src={{img.img}}  class=\"img-boardingpass-only\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(3, i+1)\">\n                      </div>\n                        \n                  </div>\n    \n                  <div *ngIf=\"child1ImageResponseOther.length>0 && child1ImageResponseOther.length >= 2\" class=\"cls-image-response\"  >\n                      <div  class=\"div-img-boarding-many\">\n                        <label *ngFor=\"let img of child1ImageResponseOther ; let idx= index\" >\n                          <img src={{img.img}}  class=\"img-boardingpass-many\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(3, i+1, idx)\">\n                        </label>\n                      </div>\n                        \n                  </div>\n              </div>\n\n              <div *ngIf=\"i==1\">\n                  <div *ngIf=\"child2ImageResponseOther.length>0 && child2ImageResponseOther.length <2\" class=\"cls-image-response\"  >\n                      <div *ngFor=\"let img of child2ImageResponseOther\" class=\"div-img-boarding-only\">\n                          <img src={{img.img}}  class=\"img-boardingpass-only\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(3, i+1)\">\n                      </div>\n                        \n                  </div>\n    \n                  <div *ngIf=\"child2ImageResponseOther.length>0 && child2ImageResponseOther.length >= 2\" class=\"cls-image-response\"  >\n                      <div class=\"div-img-boarding-many\">\n                        <label  *ngFor=\"let img of child2ImageResponseOther ; let idx= index\">\n                          <img src={{img.img}}  class=\"img-boardingpass-many\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(3, i+1, idx)\">\n                        </label>\n                      </div>\n                        \n                  </div>\n              </div>\n\n              <div *ngIf=\"i==2\">\n                  <div *ngIf=\"child3ImageResponseOther.length>0 && child3ImageResponseOther.length <2\" class=\"cls-image-response\"  >\n                      <div *ngFor=\"let img of child3ImageResponseOther\" class=\"div-img-boarding-only\">\n                          <img src={{img.img}}  class=\"img-boardingpass-only\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(3, i+1)\">\n                      </div>\n                        \n                  </div>\n    \n                  <div *ngIf=\"child3ImageResponseOther.length>0 && child3ImageResponseOther.length >= 2\" class=\"cls-image-response\"  >\n                      <div class=\"div-img-boarding-many\">\n                        <label  *ngFor=\"let img of child3ImageResponseOther ; let idx= index\">\n                          <img src={{img.img}}  class=\"img-boardingpass-many\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(3, i+1, idx)\">\n                        </label>\n                      </div>\n                        \n                  </div>\n              </div>\n\n              <div *ngIf=\"i==3\">\n                  <div *ngIf=\"child4ImageResponseOther.length>0 && child4ImageResponseOther.length <2\" class=\"cls-image-response\"  >\n                      <div *ngFor=\"let img of child4ImageResponseOther\" class=\"div-img-boarding-only\">\n                          <img src={{img.img}}  class=\"img-boardingpass-only\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(3, i+1)\">\n                      </div>\n                        \n                  </div>\n    \n                  <div *ngIf=\"child4ImageResponseOther.length>0 && child4ImageResponseOther.length >= 2\" class=\"cls-image-response\"  >\n                      <div class=\"div-img-boarding-many\">\n                        <label *ngFor=\"let img of child4ImageResponseOther ; let idx= index\">\n                          <img src={{img.img}}  class=\"img-boardingpass-many\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(3, i+1, idx)\">\n                        </label>\n                      </div>\n                        \n                  </div>\n              </div>\n\n              <div *ngIf=\"i==4\">\n                  <div *ngIf=\"child5ImageResponseOther.length>0 && child5ImageResponseOther.length <2\" class=\"cls-image-response\"  >\n                      <div *ngFor=\"let img of child5ImageResponseOther\" class=\"div-img-boarding-only\">\n                          <img src={{img.img}}  class=\"img-boardingpass-only\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-only\" (click) = \"clearImgChild(3, i+1)\">\n                      </div>\n                        \n                  </div>\n    \n                  <div *ngIf=\"child5ImageResponseOther.length>0 && child5ImageResponseOther.length >= 2\" class=\"cls-image-response\"  >\n                      <div class=\"div-img-boarding-many\">\n                        <label *ngFor=\"let img of child5ImageResponseOther ; let idx= index\">\n                          <img src={{img.img}}  class=\"img-boardingpass-many\">\n                          <img src=\"../../assets/imgs/close_img.svg\" class=\"img-close-boardingpass-many\" (click) = \"clearImgChild(3, i+1, idx)\">\n                        </label>\n                      </div>\n                        \n                  </div>\n              </div>\n              \n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-top-24\">\n    <p class=\"text-note\">\n      Bảo hiểm Cathay sẽ thông báo kết quả bồi thường đến Quý khách trong vòng 3 ngày làm việc\n    </p>\n  </div>\n</ion-content>\n<ion-footer class=\"insurrance-page-footer\" >\n    <!-- <div class=\"div-button-footer\" >\n        <button (click)=\"test()\" ion-button round outline class=\"button button2\">Test</button>\n    </div> -->\n    <div class=\"div-button-footer\" >\n        <button (click)=\"next()\" ion-button round outline class=\"button button2\">Yêu cầu bồi thường bảo hiểm</button>\n    </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/insurrancedetail/insurrancedetail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/insurrancedetail/insurrancedetail.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".insurrance-header .header-toolbar {\n  min-height: 0px;\n  text-align: center;\n}\n.insurrance-header .header-title {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.insurrance-header .header-col {\n  text-align: center;\n  height: 48px;\n}\n.insurrance-header .as-center {\n  align-self: center;\n}\n.insurrance-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 8px;\n}\n.insurrance-header .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -7px;\n  margin-left: -14px;\n}\n.insurrance-page .text {\n  font-size: 18px;\n  font-weight: bold;\n}\n.insurrance-page .text-small {\n  font-size: 12px;\n  color: #828282;\n}\n.insurrance-page .text-normal {\n  font-size: 14px;\n}\n.insurrance-page .mtop {\n  margin-top: 8px;\n}\n.insurrance-page .m-top-10 {\n  margin-top: 10px;\n}\n.insurrance-page .p-left-15 {\n  padding-left: 15px;\n}\n.insurrance-page .m-left-2 {\n  margin-left: 2px;\n}\n.insurrance-page .m-8 {\n  margin: 8px 0;\n  margin-top: 16px;\n}\n.insurrance-page .m-top-16 {\n  margin-top: 16px;\n}\n.insurrance-page .label-rd {\n  margin-left: 28px;\n}\n.insurrance-page .rd-selected {\n  color: #26bed6;\n}\n.insurrance-page .text-time {\n  font-size: 14px;\n  margin-left: 16px;\n}\n.insurrance-page hr {\n  background-color: #bdbdbd;\n}\n.insurrance-page .ion-item {\n  --min-height: 0px;\n  --padding-start: 0px;\n}\n.insurrance-page .text-info {\n  color: #828282;\n  font-size: 12px;\n}\n.insurrance-page .ionchip {\n  border-radius: 4px;\n  width: 130px;\n  height: 34px;\n  margin: 5px 0;\n}\n.insurrance-page .loadimg {\n  color: #003c71;\n  margin-left: 19px;\n}\n.insurrance-page .cls-image-response {\n  margin-left: -5px;\n  margin-top: 10px;\n}\n.insurrance-page .div-datetime {\n  position: relative;\n}\n.insurrance-page .input-datetime {\n  width: 100%;\n  position: absolute;\n  top: -10px;\n}\n.insurrance-page .ip-expecteddate {\n  position: absolute;\n  left: 20px;\n  width: 120px;\n  top: 0;\n}\n.insurrance-page .ip-expectedtime {\n  position: absolute;\n  width: 75px;\n  top: 0;\n  left: 129px;\n}\n.insurrance-page .ip-realtime {\n  left: 123px !important;\n}\n.insurrance-page .ip-padding {\n  padding: 10px;\n}\n.insurrance-page .hr-margin {\n  margin: 6px 0;\n}\n.insurrance-page .m-top-10 {\n  margin-top: 10px;\n}\n.insurrance-page .m-top-15 {\n  margin-top: 15px;\n}\n.insurrance-page .fix-width-103 {\n  min-width: 103px;\n}\n.insurrance-page .no-padding {\n  padding: 0;\n}\n.insurrance-page .p-top-16 {\n  padding-top: 16px;\n}\n.insurrance-page .p-top-32 {\n  padding-top: 32px;\n}\n.insurrance-page .div-relative {\n  position: relative;\n}\n.insurrance-page .div-changeflight-label {\n  position: absolute;\n  left: 32px;\n}\n.insurrance-page .row-item-child.show {\n  display: block;\n}\n.insurrance-page .row-item-child.hidden {\n  display: none;\n}\n.insurrance-page .div-item-selectimage {\n  position: relative;\n}\n.insurrance-page .div-item-selectimage-label {\n  width: 108px;\n  height: 40px;\n}\n.insurrance-page .div-item-selectimage-chip {\n  position: absolute;\n  left: 108px;\n  top: -10px;\n}\n.insurrance-page .cancel-flight {\n  padding-top: 8px;\n}\n.insurrance-page .div-insurrance-info {\n  padding-top: 30px;\n  font-size: 14px;\n}\n.insurrance-page .div-insurrance-info .no-padding {\n  padding: 0;\n}\n.insurrance-page .div-insurrance-info .ip-label {\n  font-size: 12px;\n  color: #4f4f4f;\n}\n.insurrance-page .div-insurrance-info .customer-label {\n  font-size: 18px;\n  font-weight: bold;\n}\n.insurrance-page .div-insurrance-info .customer-info {\n  padding-top: 11px;\n}\n.insurrance-page .div-insurrance-info .div-customer-info {\n  font-size: 14px;\n  position: relative;\n  padding-top: 11px;\n}\n.insurrance-page .div-insurrance-info .div-customer-info .customer-info {\n  position: absolute;\n  left: 32px;\n  top: 0;\n  padding-top: 13px;\n}\n.insurrance-page .div-insurrance-info .div-customer-info .img-people {\n  width: 18px;\n}\n.insurrance-page .div-insurrance-info .cls-item-select {\n  --padding-start:0;\n  --padding-bottom: 4px;\n  --padding-top: 2px;\n  border-bottom: solid 0.5px #bdbdbd;\n}\n.insurrance-page .div-insurrance-info .child-label {\n  font-size: 16px;\n  font-weight: bold;\n  padding-top: 20px;\n}\n.insurrance-page .div-insurrance-info .col-left {\n  padding-left: 0;\n  padding-right: 23px;\n}\n.insurrance-page .div-insurrance-info .div-dob {\n  padding-top: 14px;\n  padding-bottom: 2px;\n}\n.insurrance-page .div-text-payment {\n  padding-top: 64px;\n}\n.insurrance-page .div-add-child {\n  float: right;\n  color: #26bed6;\n  font-size: 14px;\n  padding-top: 16px;\n  position: relative;\n}\n.insurrance-page .div-add-child .img-add-child {\n  position: absolute;\n  right: 136px;\n  top: 12px;\n}\n.insurrance-page .div-add-child .text-add-child {\n  right: 0;\n  top: 0;\n}\n.insurrance-page .input-boarding-pass {\n  opacity: 0;\n  position: absolute;\n  left: 4px;\n  height: 40px;\n  width: 130px;\n}\n.insurrance-page .m-top-24 {\n  margin-top: 24px;\n}\n.insurrance-page .text-note {\n  font-size: 14px;\n  color: #4f4f4f;\n}\n.insurrance-page .div-upload-image {\n  margin-top: 30px;\n}\n.insurrance-page .div-upload-image ion-label {\n  font-size: 14px;\n}\n.insurrance-page .div-upload-image .div-img-boarding-only {\n  max-width: initial;\n  height: 80px;\n  width: 80px;\n  margin-left: 126px;\n  position: relative;\n}\n.insurrance-page .div-upload-image .img-close-boardingpass-only {\n  position: absolute;\n  left: 58px;\n  top: 4px;\n}\n.insurrance-page .div-upload-image .img-close-boardingpass-many {\n  position: absolute;\n  margin-left: -24px;\n  margin-top: 4px;\n}\n.insurrance-page .div-upload-image .img-boardingpass-only {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  left: 126px;\n}\n.insurrance-page .div-upload-image .img-boardingpass-many {\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: initial;\n  height: 80px;\n  width: 80px;\n  margin-left: 5px;\n}\n@media (min-width: 320px) and (max-width: 360px) {\n  .insurrance-page .div-img-boarding-only {\n    margin-left: 108px !important;\n  }\n}\n.insurrance-page .rd-bank {\n  position: absolute;\n  --color-checked:#26bed6;\n}\n.insurrance-page .rd-bank .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n.insurrance-page .p-8 {\n  padding: 8px 0;\n}\n.insurrance-page-footer .div-button-footer {\n  text-align: center;\n  background: #ffffff;\n}\n.insurrance-page-footer .div-button-footer .button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  font-size: 17px !important;\n  border-radius: 4px;\n}\n::ng-deep ion-select.required-field {\n  border-bottom: solid 2px #e52822 !important;\n}\n::ng-deep .action-sheet-cancel.sc-ion-action-sheet-ios {\n  background-color: #ff9500;\n  color: #ffffff !important;\n  width: 91%;\n  font-size: 18px;\n  margin: 8px 16px;\n  text-align: center;\n  border-radius: 4px;\n}\n::ng-deep .action-sheet-cancel.sc-ion-action-sheet-ios .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: center;\n}\n::ng-deep .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n}\n::ng-deep .action-sheet-group.sc-ion-action-sheet-ios {\n  border-radius: 0;\n  margin: 0;\n  border-top: none;\n}\n::ng-deep .action-sheet-title.sc-ion-action-sheet-ios {\n  text-align: left;\n  font-size: 18px;\n  color: #222222;\n  font-weight: bold;\n}\n::ng-deep .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: left;\n}\n::ng-deep .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  color: #828282;\n  height: 60px;\n  text-align: left;\n}\n::ng-deep .action-sheet-insurrance-detail .action-sheet-button-inner.sc-ion-action-sheet-md {\n  justify-content: flex-start;\n  border-top: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9pbnN1cnJhbmNlZGV0YWlsL2luc3VycmFuY2VkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9pbnN1cnJhbmNlZGV0YWlsL2luc3VycmFuY2VkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQVI7QURFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQ0FSO0FERUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREtJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRlI7QURJSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRlI7QURJSTtFQUNJLGVBQUE7QUNGUjtBRElJO0VBRUksZUFBQTtBQ0hSO0FES0k7RUFDSSxnQkFBQTtBQ0hSO0FES0k7RUFDSSxrQkFBQTtBQ0hSO0FES0k7RUFDSSxnQkFBQTtBQ0hSO0FES0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBREtJO0VBQ0ksZ0JBQUE7QUNIUjtBREtJO0VBQ0ksaUJBQUE7QUNIUjtBREtJO0VBQ0ksY0FBQTtBQ0hSO0FES0k7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNKUjtBRE1JO0VBQ0kseUJBQUE7QUNKUjtBRE1JO0VBR0UsaUJBQUE7RUFDQSxvQkFBQTtBQ05OO0FEUUk7RUFFSSxjQUFBO0VBQ0EsZUFBQTtBQ1BSO0FEU0k7RUFFSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1JSO0FEVUk7RUFFSSxjQUFBO0VBQ0EsaUJBQUE7QUNUUjtBRFdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ1RSO0FEWUk7RUFDSSxrQkFBQTtBQ1ZSO0FEWUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDVlI7QURZSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0FDVlI7QURZSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDVlI7QURZSTtFQUNJLHNCQUFBO0FDVlI7QURZSTtFQUNJLGFBQUE7QUNWUjtBRFlJO0VBQ0ksYUFBQTtBQ1ZSO0FEWUk7RUFDSSxnQkFBQTtBQ1ZSO0FEWUk7RUFDSSxnQkFBQTtBQ1ZSO0FEWUk7RUFDSSxnQkFBQTtBQ1ZSO0FEWUk7RUFDSSxVQUFBO0FDVlI7QURZSTtFQUNJLGlCQUFBO0FDVlI7QURZSTtFQUNJLGlCQUFBO0FDVlI7QURhSTtFQUNJLGtCQUFBO0FDWFI7QURhSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ1hSO0FEYUk7RUFDSSxjQUFBO0FDWFI7QURhSTtFQUNJLGFBQUE7QUNYUjtBRGNJO0VBQ0ksa0JBQUE7QUNaUjtBRGNJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNaUjtBRGNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1pSO0FEY0k7RUFDSSxnQkFBQTtBQ1pSO0FEZUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNiUjtBRGVRO0VBQ0ksVUFBQTtBQ2JaO0FEZVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ2JaO0FEZVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNiWjtBRGVRO0VBQ0ksaUJBQUE7QUNiWjtBRGlCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDZlo7QURpQlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsaUJBQUE7QUNmaEI7QURpQlk7RUFDSSxXQUFBO0FDZmhCO0FEbUJRO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUNqQlo7QURtQlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ2pCWjtBRG1CUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ2pCWjtBRG1CUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNqQlo7QURxQkk7RUFDSSxpQkFBQTtBQ25CUjtBRHNCSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNwQlI7QURzQlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDcEJaO0FEc0JRO0VBQ0ksUUFBQTtFQUNBLE1BQUE7QUNwQlo7QUR3Qkk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUN0QlI7QUR3Qkk7RUFDSSxnQkFBQTtBQ3RCUjtBRHdCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDdEJSO0FEeUJJO0VBQ0ksZ0JBQUE7QUN2QlI7QUR5QlE7RUFDSSxlQUFBO0FDdkJaO0FEeUJRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUN2Qlo7QUR5QlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDdkJaO0FEeUJRO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUN2Qlo7QUR5QlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxXQUFBO0FDdkJaO0FEeUJRO0VBQ0ksb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3ZCWjtBRDJCSTtFQUNJO0lBQ0ksNkJBQUE7RUN6QlY7QUFDRjtBRDJCSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUN6QlI7QUQ0Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzFCUjtBRDRCSTtFQUNJLGNBQUE7QUMxQlI7QURnQ0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDN0JSO0FEK0JRO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUM5Qlo7QURzQ0k7RUFDSSwyQ0FBQTtBQ25DUjtBRHVDSTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3JDUjtBRHNDUTtFQUNJLHVCQUFBO0FDcENaO0FEdUNJO0VBQ0ksVUFBQTtBQ3JDUjtBRHVDSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtBQ3JDUjtBRHVDSTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDckNSO0FEdUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDckNSO0FEdUNJO0VBQ0kscUJBQUE7QUNyQ1I7QUR1Q0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3JDUjtBRHdDSTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7QUN0Q1IiLCJmaWxlIjoic3JjL2FwcC9pbnN1cnJhbmNlZGV0YWlsL2luc3VycmFuY2VkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3VycmFuY2UtaGVhZGVye1xyXG4gICAgLmhlYWRlci10b29sYmFye1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWNvbHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLmFzLWNlbnRlcntcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWdvYmFja3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDotMTRweFxyXG4gICAgfVxyXG59XHJcblxyXG4uaW5zdXJyYW5jZS1wYWdle1xyXG4gICAgLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgICB9XHJcbiAgICAudGV4dC1zbWFsbHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1ub3JtYWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm10b3BcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAubS10b3AtMTB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5wLWxlZnQtMTV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm0tbGVmdC0ye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICB9XHJcbiAgICAubS04e1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICAgIC5tLXRvcC0xNntcclxuICAgICAgICBtYXJnaW4tdG9wOjE2cHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtcmR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAucmQtc2VsZWN0ZWR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aW1lXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgaHJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICAgIH1cclxuICAgIC5pb24taXRlbVxyXG4gICAge1xyXG4gICAgICAvLy0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICAgIC0tbWluLWhlaWdodDogMHB4O1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIH1cclxuICAgIC50ZXh0LWluZm9cclxuICAgIHtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBmb250LXNpemU6IDEycHhcclxuICAgIH1cclxuICAgIC5pb25jaGlwXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgIH1cclxuICAgIC5sb2FkaW1nXHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICB9XHJcbiAgICAuY2xzLWltYWdlLXJlc3BvbnNle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXYtZGF0ZXRpbWV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWRhdGV0aW1le1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLmlwLWV4cGVjdGVkZGF0ZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmlwLWV4cGVjdGVkdGltZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDEyOXB4O1xyXG4gICAgfVxyXG4gICAgLmlwLXJlYWx0aW1le1xyXG4gICAgICAgIGxlZnQ6IDEyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaXAtcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmhyLW1hcmdpbntcclxuICAgICAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgfVxyXG4gICAgLm0tdG9wLTEwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIH1cclxuICAgIC5tLXRvcC0xNXtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICB9XHJcbiAgICAuZml4LXdpZHRoLTEwM3tcclxuICAgICAgICBtaW4td2lkdGg6MTAzcHg7XHJcbiAgICB9XHJcbiAgICAubm8tcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTE2e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMzJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MzJweDtcclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8gc3R5bGUgZGl2XHJcbiAgICAuZGl2LXJlbGF0aXZle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5kaXYtY2hhbmdlZmxpZ2h0LWxhYmVse1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnJvdy1pdGVtLWNoaWxkLnNob3d7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucm93LWl0ZW0tY2hpbGQuaGlkZGVue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXYtaXRlbS1zZWxlY3RpbWFnZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuZGl2LWl0ZW0tc2VsZWN0aW1hZ2UtbGFiZWx7XHJcbiAgICAgICAgd2lkdGg6IDEwOHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5kaXYtaXRlbS1zZWxlY3RpbWFnZS1jaGlwe1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMDhweDtcclxuICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbC1mbGlnaHR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWluc3VycmFuY2UtaW5mb3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pcC1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1c3RvbWVyLWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VzdG9tZXItaW5mb3tcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC5kaXYtY3VzdG9tZXItaW5mb3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xyXG5cclxuICAgICAgICAgICAgLmN1c3RvbWVyLWluZm97XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZy1wZW9wbGV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuY2xzLWl0ZW0tc2VsZWN0e1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6MDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGlsZC1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2wtbGVmdHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LWRvYntcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MTRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LXRleHQtcGF5bWVudHtcclxuICAgICAgICBwYWRkaW5nLXRvcDo2NHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtYWRkLWNoaWxke1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuaW1nLWFkZC1jaGlsZHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMTM2cHg7XHJcbiAgICAgICAgICAgIHRvcDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYWRkLWNoaWxke1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5pbnB1dC1ib2FyZGluZy1wYXNze1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLm0tdG9wLTI0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1ub3Rle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzRmNGY0ZlxyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtdXBsb2FkLWltYWdle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LWltZy1ib2FyZGluZy1vbmx5e1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMjZweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWNsb3NlLWJvYXJkaW5ncGFzcy1vbmx5e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDU4cHg7XHJcbiAgICAgICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWNsb3NlLWJvYXJkaW5ncGFzcy1tYW55e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWJvYXJkaW5ncGFzcy1vbmx5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEyNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWJvYXJkaW5ncGFzcy1tYW55IHtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XHJcbiAgICAgICAgLmRpdi1pbWctYm9hcmRpbmctb25seXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJkLWJhbmt7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC0tY29sb3ItY2hlY2tlZDojMjZiZWQ2O1xyXG5cclxuICAgIH1cclxuICAgIC5yZC1iYW5rIC5yYWRpby1pY29ue1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgIH1cclxuICAgIC5wLTh7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnN1cnJhbmNlLXBhZ2UtZm9vdGVye1xyXG5cclxuICAgIC5kaXYtYnV0dG9uLWZvb3RlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgLmJ1dHRvbjJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbjo6bmctZGVlcHtcclxuICAgIGlvbi1zZWxlY3QucmVxdWlyZWQtZmllbGR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNlNTI4MjIgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAvL3N0eWxlIGNobyBpb3NcclxuICAgIC5hY3Rpb24tc2hlZXQtY2FuY2VsLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk1MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogOTElO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLXNoZWV0LWluc3VycmFuY2UtZGV0YWlsIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG4iLCIuaW5zdXJyYW5jZS1oZWFkZXIgLmhlYWRlci10b29sYmFyIHtcbiAgbWluLWhlaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdXJyYW5jZS1oZWFkZXIgLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5zdXJyYW5jZS1oZWFkZXIgLmhlYWRlci1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDhweDtcbn1cbi5pbnN1cnJhbmNlLWhlYWRlciAuYXMtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmluc3VycmFuY2UtaGVhZGVyIC5kaXYtZ29iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB0b3A6IDhweDtcbn1cbi5pbnN1cnJhbmNlLWhlYWRlciAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAtN3B4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59XG5cbi5pbnN1cnJhbmNlLXBhZ2UgLnRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmluc3VycmFuY2UtcGFnZSAudGV4dC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC50ZXh0LW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLm10b3Age1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5tLXRvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5wLWxlZnQtMTUge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5tLWxlZnQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5tLTgge1xuICBtYXJnaW46IDhweCAwO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAubS10b3AtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAubGFiZWwtcmQge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLnJkLXNlbGVjdGVkIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC50ZXh0LXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmluc3VycmFuY2UtcGFnZSBociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5pb24taXRlbSB7XG4gIC0tbWluLWhlaWdodDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLnRleHQtaW5mbyB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5pb25jaGlwIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmxvYWRpbWcge1xuICBjb2xvcjogIzAwM2M3MTtcbiAgbWFyZ2luLWxlZnQ6IDE5cHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5jbHMtaW1hZ2UtcmVzcG9uc2Uge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1kYXRldGltZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmlucHV0LWRhdGV0aW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmlwLWV4cGVjdGVkZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICB0b3A6IDA7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5pcC1leHBlY3RlZHRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NXB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDEyOXB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuaXAtcmVhbHRpbWUge1xuICBsZWZ0OiAxMjNweCAhaW1wb3J0YW50O1xufVxuLmluc3VycmFuY2UtcGFnZSAuaXAtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5oci1tYXJnaW4ge1xuICBtYXJnaW46IDZweCAwO1xufVxuLmluc3VycmFuY2UtcGFnZSAubS10b3AtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAubS10b3AtMTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZml4LXdpZHRoLTEwMyB7XG4gIG1pbi13aWR0aDogMTAzcHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5wLXRvcC0zMiB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LWNoYW5nZWZsaWdodC1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzJweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLnJvdy1pdGVtLWNoaWxkLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLnJvdy1pdGVtLWNoaWxkLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5kaXYtaXRlbS1zZWxlY3RpbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1pdGVtLXNlbGVjdGltYWdlLWxhYmVsIHtcbiAgd2lkdGg6IDEwOHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5kaXYtaXRlbS1zZWxlY3RpbWFnZS1jaGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDhweDtcbiAgdG9wOiAtMTBweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmNhbmNlbC1mbGlnaHQge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LWluc3VycmFuY2UtaW5mbyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5kaXYtaW5zdXJyYW5jZS1pbmZvIC5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1pbnN1cnJhbmNlLWluZm8gLmlwLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1pbnN1cnJhbmNlLWluZm8gLmN1c3RvbWVyLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1pbnN1cnJhbmNlLWluZm8gLmN1c3RvbWVyLWluZm8ge1xuICBwYWRkaW5nLXRvcDogMTFweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1pbnN1cnJhbmNlLWluZm8gLmRpdi1jdXN0b21lci1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LWluc3VycmFuY2UtaW5mbyAuZGl2LWN1c3RvbWVyLWluZm8gLmN1c3RvbWVyLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMycHg7XG4gIHRvcDogMDtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5kaXYtaW5zdXJyYW5jZS1pbmZvIC5kaXYtY3VzdG9tZXItaW5mbyAuaW1nLXBlb3BsZSB7XG4gIHdpZHRoOiAxOHB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LWluc3VycmFuY2UtaW5mbyAuY2xzLWl0ZW0tc2VsZWN0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gIC0tcGFkZGluZy1ib3R0b206IDRweDtcbiAgLS1wYWRkaW5nLXRvcDogMnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LWluc3VycmFuY2UtaW5mbyAuY2hpbGQtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1pbnN1cnJhbmNlLWluZm8gLmNvbC1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyM3B4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LWluc3VycmFuY2UtaW5mbyAuZGl2LWRvYiB7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LXRleHQtcGF5bWVudCB7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LWFkZC1jaGlsZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1hZGQtY2hpbGQgLmltZy1hZGQtY2hpbGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMzZweDtcbiAgdG9wOiAxMnB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LWFkZC1jaGlsZCAudGV4dC1hZGQtY2hpbGQge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmluc3VycmFuY2UtcGFnZSAuaW5wdXQtYm9hcmRpbmctcGFzcyB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLm0tdG9wLTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLnRleHQtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5kaXYtdXBsb2FkLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi11cGxvYWQtaW1hZ2UgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LXVwbG9hZC1pbWFnZSAuZGl2LWltZy1ib2FyZGluZy1vbmx5IHtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tbGVmdDogMTI2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLmRpdi11cGxvYWQtaW1hZ2UgLmltZy1jbG9zZS1ib2FyZGluZ3Bhc3Mtb25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNThweDtcbiAgdG9wOiA0cHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5kaXYtdXBsb2FkLWltYWdlIC5pbWctY2xvc2UtYm9hcmRpbmdwYXNzLW1hbnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtMjRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LXVwbG9hZC1pbWFnZSAuaW1nLWJvYXJkaW5ncGFzcy1vbmx5IHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGxlZnQ6IDEyNnB4O1xufVxuLmluc3VycmFuY2UtcGFnZSAuZGl2LXVwbG9hZC1pbWFnZSAuaW1nLWJvYXJkaW5ncGFzcy1tYW55IHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB3aWR0aDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5pbnN1cnJhbmNlLXBhZ2UgLmRpdi1pbWctYm9hcmRpbmctb25seSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5pbnN1cnJhbmNlLXBhZ2UgLnJkLWJhbmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC0tY29sb3ItY2hlY2tlZDojMjZiZWQ2O1xufVxuLmluc3VycmFuY2UtcGFnZSAucmQtYmFuayAucmFkaW8taWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG4uaW5zdXJyYW5jZS1wYWdlIC5wLTgge1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmluc3VycmFuY2UtcGFnZS1mb290ZXIgLmRpdi1idXR0b24tZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmluc3VycmFuY2UtcGFnZS1mb290ZXIgLmRpdi1idXR0b24tZm9vdGVyIC5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG46Om5nLWRlZXAgaW9uLXNlbGVjdC5yZXF1aXJlZC1maWVsZCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1jYW5jZWwuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB3aWR0aDogOTElO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXQtY2FuY2VsLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0LWluc3VycmFuY2UtZGV0YWlsIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/insurrancedetail/insurrancedetail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/insurrancedetail/insurrancedetail.page.ts ***!
  \***********************************************************/
/*! exports provided: InsurrancedetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurrancedetailPage", function() { return InsurrancedetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
















let InsurrancedetailPage = class InsurrancedetailPage {
    constructor(imagePicker, camera, file, navCtrl, gf, modalCtrl, zone, storage, activityService, toastrCtrl, httpClient, sanitizer, router, loadingCtrl, alertCtrl) {
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.file = file;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.storage = storage;
        this.activityService = activityService;
        this.toastrCtrl = toastrCtrl;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.imageResponse = [];
        this.imageResponsepost = [];
        this.ischeck = true;
        this.childlist = [];
        this.countchild = 0;
        this.listBank = [
            { id: 29, name: "Ngân hàng TMCP Đại Chúng Việt Nam (PVcomBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-00.png' },
            { id: 1, name: "Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)", imgurl: './assets/ic_bankonepay/Bank-Icons-01.jpg' },
            { id: 10, name: "Ngân hàng TMCP Hàng Hải Việt Nam (Maritime Bank)", imgurl: './assets/ic_bankonepay/Bank-Icons-02.jpg' },
            { id: 3, name: "Ngân hàng TMCP Sài Gòn – Hà Nội (SHB)", imgurl: './assets/ic_bankonepay/Bank-Icons-03.jpg' },
            { id: 3, name: "Ngân hàng TMCP Tiên Phong (TPBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-04.png' },
            { id: 11, name: "Ngân hàng TMCP Xuất Nhập khẩu Việt Nam (Eximbank)", imgurl: './assets/ic_bankonepay/Bank-Icons-05.jpg' },
            { id: 20, name: "Ngân hàng TMCP Đông Nam Á (SeABank)", imgurl: './assets/ic_bankonepay/Bank-Icons-06.jpg' },
            { id: 7, name: "Ngân hàng TMCP Phát triển TPHCM (HDBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-07.jpg' },
            { id: 6, name: "Ngân hàng TMCP Đông Á (DongABank)", imgurl: './assets/ic_bankonepay/Bank-Icons-08.jpg' },
            { id: 16, name: "Ngân hàng TMCP Sài Gòn Thương Tín (SacomBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-09.jpg' },
            { id: 18, name: "Ngân hàng Thương mại TNHH một thành viên Đại Dương (OceanBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-10.jpg' },
            { id: 8, name: "Ngân hàng TMCP Quân Đội (MB)", imgurl: './assets/ic_bankonepay/Bank-Icons-11.jpg' },
            { id: 25, name: "Ngân hàng TMCP Sài Gòn (SCB)", imgurl: './assets/ic_bankonepay/Bank-Icons-12.jpg' },
            { id: 15, name: "Ngân hàng TMCP An Bình (ABBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-13.jpg' },
            { id: 14, name: "Ngân hàng TMCP Việt Nam Thịnh Vượng (VPBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-14.jpg' },
            { id: 5, name: "Ngân hàng TMCP Quốc Tế Việt Nam (VIB)", imgurl: './assets/ic_bankonepay/Bank-Icons-15.jpg' },
            { id: 4, name: "Ngân hàng TMCP Công Thương Việt Nam (VietInBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-16.jpg' },
            { id: 22, name: "Ngân hàng TMCP Bắc Á (Bac A Bank)", imgurl: './assets/ic_bankonepay/Bank-Icons-17.jpg' },
            { id: 19, name: "Ngân hàng Đầu tư và Phát triển Việt Nam (BIDV)", imgurl: './assets/ic_bankonepay/Bank-Icons-18.jpg' },
            { id: 17, name: "Ngân hàng TMCP Nam Á (Nam A Bank)", imgurl: './assets/ic_bankonepay/Bank-Icons-19.jpg' },
            { id: 9, name: "Ngân hàng TMCP Việt Á (Viet A Bank)", imgurl: './assets/ic_bankonepay/Bank-Icons-20.jpg' },
            { id: 23, name: "Ngân hàng TMCP Quốc Dân (NCB)", imgurl: './assets/ic_bankonepay/Bank-Icons-21.jpg' },
            { id: 2, name: "Ngân hàng TMCP Kỹ Thương Việt Nam (TeachcomBank)", imgurl: './assets/ic_bankonepay/Bank-Icons-22.jpg' },
            { id: 28, name: "Ngân hàng TMCP Việt Nam Thương Tín (DongABank)", imgurl: './assets/ic_bankonepay/bank_28.png' },
            { id: 21, name: "Union Pay", imgurl: './assets/ic_bankonepay/bank_21.png' },
            { id: 30, name: "Ngân hàng TMCP Bản Việt (DongABank)", imgurl: './assets/ic_bankonepay/bank_30.png' },
        ];
        this.child1Id = '';
        this.child1Name = '';
        this.child2Id = '';
        this.child2Name = '';
        this.child1Relation = '';
        this.child2Relation = '';
        this.child1Dob = '';
        this.child2Dob = '';
        this.child3Dob = '';
        this.child4Dob = '';
        this.child5Dob = '';
        this.child3Name = '';
        this.child4Name = '';
        this.child5Name = '';
        this.child3Id = '';
        this.child4Id = '';
        this.child5Id = '';
        this.originDepart1 = null;
        this.realDepart1 = null;
        this.formData = new FormData();
        this.dataform = [];
        this.dataformCMND = [];
        this.dataformGKS = [];
        this.child1ImageResponseGKS = [];
        this.child1ImageResponse = [];
        this.child2ImageResponseGKS = [];
        this.child2ImageResponse = [];
        this.child3ImageResponseGKS = [];
        this.child3ImageResponse = [];
        this.child4ImageResponseGKS = [];
        this.child4ImageResponse = [];
        this.child5ImageResponseGKS = [];
        this.child5ImageResponse = [];
        this.child1ImageResponseOther = [];
        this.child2ImageResponseOther = [];
        this.child3ImageResponseOther = [];
        this.child4ImageResponseOther = [];
        this.child5ImageResponseOther = [];
        this.child1dataform = [];
        this.child1dataformGKS = [];
        this.child2dataform = [];
        this.child2dataformGKS = [];
        this.child3dataform = [];
        this.child3dataformGKS = [];
        this.child4dataform = [];
        this.child4dataformGKS = [];
        this.child5dataform = [];
        this.child5dataformGKS = [];
        this.child1dataformOther = [];
        this.child2dataformOther = [];
        this.child3dataformOther = [];
        this.child4dataformOther = [];
        this.child5dataformOther = [];
        this.checkChangeFlight = false;
        this.showTransferInfo = false;
        this.showReceiveInfo = false;
        this.storage.get('infocus').then(infocus => {
            if (infocus) {
                this.phone = infocus.phone;
            }
        });
        this.storage.get('email').then(email => {
            if (email) {
                this.email = email;
            }
        });
    }
    ngOnInit() {
        this.activityService.currentArticle.pipe().subscribe(data => {
            this.clearRequiredField();
            if (this.ischeck) {
                this.showTransferInfo = true;
                this.showReceiveInfo = false;
            }
            else {
                this.showReceiveInfo = true;
                this.showTransferInfo = false;
            }
        });
    }
    goback() {
        this.navCtrl.back();
    }
    ionViewWillEnter() {
        var se = this;
        se.clearValue();
        var data = se.gf.getParams('insurrenceDetail');
        se.childlist = data.childlist;
        se.isChildren = data.ischild;
        se.item = data.item;
        se.data = data;
        se.type = data.type;
        se.flightNumberDisplay = data.flightNumber;
        if (se.childlist && se.childlist.length > 0) {
            se.countchild = 0;
        }
        if (se.isChildren) {
            se.child1Relation = "Con";
        }
        se.expecteddate = data.trip.bookingsComboData && data.trip.bookingsComboData.length > 0 ? ((se.type == 1 || se.type == 3) ? data.trip.bookingsComboData[0].departureDate : data.trip.bookingsComboData[1].departureDate) : '';
        se.expectedtime = data.trip.bookingsComboData && data.trip.bookingsComboData.length > 0 ? ((se.type == 1 || se.type == 3) ? data.trip.bookingsComboData[0].departureTime : data.trip.bookingsComboData[1].departureTime) : '';
        let et = se.expectedtime.replace(':', '') * 1;
        let defaulttimeadd = 200;
        let timeadd = et + defaulttimeadd;
        let newtimestring = '';
        if (timeadd < 1200) {
            newtimestring = '0' + timeadd;
        }
        else if (timeadd > 2400) {
            let timesub = timeadd - 2400;
            if (timesub < 100) {
                newtimestring = '00' + timesub;
            }
            else {
                newtimestring = '0' + timesub;
            }
        }
        else {
            newtimestring = '' + timeadd;
        }
        let firststr = newtimestring.substring(0, 2), endstr = newtimestring.substring(2, 4);
        newtimestring = firststr + ':' + endstr;
        console.log(newtimestring);
        se.realtime = '00:00';
        if (newtimestring) {
            se.realtime = newtimestring;
        }
        se.realdate = data.trip.bookingsComboData && data.trip.bookingsComboData.length > 0 ? ((se.type == 1 || se.type == 3) ? data.trip.bookingsComboData[0].departureDate : data.trip.bookingsComboData[1].departureDate) : '';
        se.departCodeDisplay = data.trip.bookingsComboData && data.trip.bookingsComboData.length > 0 ? data.trip.bookingsComboData[0].departCode + ' → ' + data.trip.bookingsComboData[0].arrivalCode : '';
        se.arrivalCodeDisplay = data.trip.bookingsComboData && data.trip.bookingsComboData.length > 0 ? data.trip.bookingsComboData[1].departCode + ' → ' + data.trip.bookingsComboData[1].arrivalCode : '';
        se.bankAccountName = se.item.customer_name;
    }
    ionViewWillLeave() {
    }
    changeFlightTime(event) {
        var se = this;
        if (event && event.detail.value) {
            if (event.detail.value.indexOf('T') != -1) {
                se.realtime = event.detail.value.split('T')[1].substring(0, 5);
            }
            else {
                se.realtime = event.detail.value;
            }
            se.checkInputDateTime();
        }
    }
    checkInputDateTime() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this, valid = true;
            return new Promise((resolve, reject) => {
                if (se.type == 3 || se.type == 4) {
                    resolve(true);
                }
                else if (se.realdate && se.realtime) {
                    var arrrealdate = se.realdate.split('-'), realdate = new Date(arrrealdate[2], arrrealdate[1] * 1 - 1, arrrealdate[0]), arrexpecteddate = se.expecteddate.split('-'), expecteddate = new Date(arrexpecteddate[2], arrexpecteddate[1] * 1 - 1, arrexpecteddate[0]);
                    if (moment__WEBPACK_IMPORTED_MODULE_9__(realdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(expecteddate)) == 0) {
                        if (se.realtime.replace(':', '') * 1 - se.expectedtime.replace(':', '') < 200) {
                            valid = false;
                            se.showToastr('Quý khách chỉ nhận được bảo hiểm khi chuyến bay khởi hành trễ từ 2 tiếng. Vui lòng kiểm tra lại giờ bay.');
                            return;
                        }
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_9__(realdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(expecteddate)) < 0) {
                        valid = false;
                        se.showToastr('Giờ bay thực tế không thể nhỏ hơn giờ bay dự kiến. Vui lòng kiểm tra lại giờ bay.');
                        return;
                    }
                    resolve(valid);
                }
                else {
                    se.showToastr('Chưa nhập giờ bay thực tế. Vui lòng kiểm tra lại.');
                    resolve(false);
                }
            });
        });
    }
    getImages(value, type, index) {
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
                if (type == 1) {
                    if (value == 1) {
                        imageFiles.forEach(file => {
                            se.dataform.push({ file: file, filename: file.name });
                        });
                    }
                    else if (value == 2) {
                        imageFiles.forEach(file => {
                            se.dataformCMND.push({ file: file, filename: file.name });
                        });
                    }
                    else if (value == 3) {
                        imageFiles.forEach(file => {
                            se.dataformGKS.push({ file: file, filename: file.name });
                        });
                    }
                }
                else {
                    if (value == 1) {
                        if (index == 1) {
                            imageFiles.forEach(file => {
                                se.child1dataform.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 2) {
                            imageFiles.forEach(file => {
                                se.child2dataform.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 3) {
                            imageFiles.forEach(file => {
                                se.child3dataform.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 4) {
                            imageFiles.forEach(file => {
                                se.child4dataform.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 5) {
                            imageFiles.forEach(file => {
                                se.child5dataform.push({ file: file, filename: file.name });
                            });
                        }
                    }
                    else if (value == 2) {
                        if (index == 1) {
                            imageFiles.forEach(file => {
                                se.child1dataformGKS.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 2) {
                            imageFiles.forEach(file => {
                                se.child2dataformGKS.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 3) {
                            imageFiles.forEach(file => {
                                se.child3dataformGKS.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 4) {
                            imageFiles.forEach(file => {
                                se.child4dataformGKS.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 5) {
                            imageFiles.forEach(file => {
                                se.child5dataformGKS.push({ file: file, filename: file.name });
                            });
                        }
                    }
                    else if (value == 3) {
                        if (index == 1) {
                            imageFiles.forEach(file => {
                                se.child1dataformOther.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 2) {
                            imageFiles.forEach(file => {
                                se.child2dataformOther.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 3) {
                            imageFiles.forEach(file => {
                                se.child3dataformOther.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 4) {
                            imageFiles.forEach(file => {
                                se.child4dataformOther.push({ file: file, filename: file.name });
                            });
                        }
                        else if (index == 5) {
                            imageFiles.forEach(file => {
                                se.child5dataformOther.push({ file: file, filename: file.name });
                            });
                        }
                    }
                }
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
                        if (type == 1) {
                            if (value == 1) {
                                se.imageResponse.push(item);
                            }
                            else if (value == 2) {
                                se.imageResponseCMND.push(item);
                            }
                            else if (value == 3) {
                                se.imageResponseGKS.push(item);
                            }
                        }
                        else {
                            if (value == 1) {
                                if (index == 1) {
                                    se.child1ImageResponse.push(item);
                                }
                                else if (index == 2) {
                                    se.child2ImageResponse.push(item);
                                }
                                else if (index == 3) {
                                    se.child3ImageResponse.push(item);
                                }
                                else if (index == 4) {
                                    se.child4ImageResponse.push(item);
                                }
                                else if (index == 5) {
                                    se.child5ImageResponse.push(item);
                                }
                            }
                            else if (value == 2) {
                                if (index == 1) {
                                    se.child1ImageResponseGKS.push(item);
                                }
                                else if (index == 2) {
                                    se.child2ImageResponseGKS.push(item);
                                }
                                else if (index == 3) {
                                    se.child3ImageResponseGKS.push(item);
                                }
                                else if (index == 4) {
                                    se.child4ImageResponseGKS.push(item);
                                }
                                else if (index == 5) {
                                    se.child5ImageResponseGKS.push(item);
                                }
                            }
                            else if (value == 3) {
                                if (index == 1) {
                                    se.child1ImageResponseOther.push(item);
                                }
                                else if (index == 2) {
                                    se.child2ImageResponseOther.push(item);
                                }
                                else if (index == 3) {
                                    se.child3ImageResponseOther.push(item);
                                }
                                else if (index == 4) {
                                    se.child4ImageResponseOther.push(item);
                                }
                                else if (index == 5) {
                                    se.child5ImageResponseOther.push(item);
                                }
                            }
                        }
                    });
                }
            }), (err) => {
                alert(err);
            });
        });
    }
    clearRequiredField() {
        var se = this;
        let el = document.getElementById('ipbanktransferselected');
        if (el) {
            el.firstElementChild.classList.remove('required-field');
        }
        let el1 = document.getElementById('ipbankreceiveselected');
        if (el1) {
            el1.firstElementChild.classList.remove('required-field');
        }
    }
    next() {
        var se = this;
        se.clearRequiredField();
        se.validateInput().then((valid) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (valid) {
                let alert = yield se.alertCtrl.create({
                    message: "Bạn chắc chắn muốn hoàn thành gửi yêu cầu bảo hiểm?",
                    buttons: [
                        {
                            text: 'Để sau',
                            handler: () => {
                                return;
                            }
                        },
                        {
                            text: 'Gửi',
                            role: 'OK',
                            handler: () => {
                                se.submitCathay();
                            }
                        }
                    ]
                });
                alert.present();
            }
        }));
    }
    submitCathay() {
        var se = this;
        let dataflight = se.data.trip.bookingsComboData;
        let flightInfo1 = dataflight[0].flightNumner + ' | ' + dataflight[0].flightFrom + ' → ' + dataflight[0].flightTo + ' | ' + dataflight[0].airlineName;
        let flightInfo2 = dataflight[1].flightNumner + ' | ' + dataflight[1].flightFrom + ' → ' + dataflight[1].flightTo + ' | ' + dataflight[1].airlineName;
        let flightDelayInfo1 = se.flightNumber + ' | ' + dataflight[0].flightFrom + ' → ' + dataflight[0].flightTo + ' | ' + dataflight[0].airlineName;
        let flightDelayInfo2 = se.flightNumber + ' | ' + dataflight[1].flightFrom + ' → ' + dataflight[1].flightTo + ' | ' + dataflight[1].airlineName;
        let origin1Str = 'Khởi hành ' + dataflight[0].departureTime + ', ' + dataflight[0].departureDate + ' | ' + flightInfo1;
        let origin2Str = 'Khởi hành ' + dataflight[1].departureTime + ', ' + dataflight[1].departureDate + ' | ' + flightInfo2;
        let real1Str = (se.type == 1 || se.type == 3) ? 'Khởi hành ' + se.realtime + ', ' + se.realdate + ' | ' + (se.checkChangeFlight ? flightDelayInfo1 : flightInfo1) : '';
        let real2Str = '';
        if (dataflight[1]) {
            real2Str = (se.type == 2 || se.type == 4) ? 'Khởi hành ' + se.realtime + ', ' + se.realdate + ' | ' + (se.checkChangeFlight ? flightDelayInfo2 : flightInfo1) : '';
        }
        if (se.type == 1 || se.type == 3) {
            origin2Str = '';
            real2Str = '';
        }
        else if (se.type == 2) {
            origin1Str = '';
            real1Str = '';
        }
        else if (se.type == 4) {
            origin1Str = origin2Str;
            real1Str = '';
            origin2Str = '';
        }
        var form = new form_data__WEBPACK_IMPORTED_MODULE_13__();
        if (se.dataform && se.dataform.length > 0) {
            se.dataform.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.dataformCMND && se.dataformCMND.length > 0) {
            se.dataformCMND.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.dataformGKS && se.dataformGKS.length > 0) {
            se.dataformGKS.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child1dataform && se.child1dataform.length > 0) {
            se.child1dataform.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child2dataform && se.child2dataform.length > 0) {
            se.child2dataform.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child3dataform && se.child3dataform.length > 0) {
            se.child3dataform.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child4dataform && se.child4dataform.length > 0) {
            se.child4dataform.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child5dataform && se.child5dataform.length > 0) {
            se.child5dataform.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child1dataformGKS && se.child1dataformGKS.length > 0) {
            se.child1dataformGKS.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child2dataformGKS && se.child2dataformGKS.length > 0) {
            se.child2dataformGKS.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child3dataformGKS && se.child3dataformGKS.length > 0) {
            se.child3dataformGKS.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child4dataformGKS && se.child4dataformGKS.length > 0) {
            se.child4dataformGKS.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child5dataformGKS && se.child5dataformGKS.length > 0) {
            se.child5dataformGKS.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child1dataformOther && se.child1dataformOther.length > 0) {
            se.child1dataformOther.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child2dataformOther && se.child2dataformOther.length > 0) {
            se.child2dataformOther.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child3dataformOther && se.child3dataformOther.length > 0) {
            se.child3dataformOther.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child4dataformOther && se.child4dataformOther.length > 0) {
            se.child4dataformOther.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        if (se.child5dataformOther && se.child5dataformOther.length > 0) {
            se.child5dataformOther.forEach(element => {
                form.append('files[]', element.file, element.filename);
            });
        }
        se.listchildclaimed = [];
        if (se.child1Name && se.child1ImageResponse.length > 0) {
            se.listchildclaimed.push({ code: se.child1Id, flightNumber: se.checkChangeFlight ? se.flightNumber : se.data.flightNumber });
        }
        if (se.child2Name && se.child2ImageResponse.length > 0) {
            se.listchildclaimed.push({ code: se.child2Id, flightNumber: se.checkChangeFlight ? se.flightNumber : se.data.flightNumber });
        }
        if (se.child3Name && se.child3ImageResponse.length > 0) {
            se.listchildclaimed.push({ code: se.child3Id, flightNumber: se.checkChangeFlight ? se.flightNumber : se.data.flightNumber });
        }
        if (se.child4Name && se.child4ImageResponse.length > 0) {
            se.listchildclaimed.push({ code: se.child4Id, flightNumber: se.checkChangeFlight ? se.flightNumber : se.data.flightNumber });
        }
        if (se.child5Name && se.child5ImageResponse.length > 0) {
            se.listchildclaimed.push({ code: se.child5Id, flightNumber: se.checkChangeFlight ? se.flightNumber : se.data.flightNumber });
        }
        var formObj = {
            id: se.item.insurance_code,
            cusId: se.isChildren ? se.identityno : se.item.customer_id,
            cusName: se.isChildren ? se.name : se.item.customer_name,
            cusBirth: se.item.customer_dob,
            cusPhone: se.phone,
            cusEmail: se.email,
            child1Id: se.isChildren ? se.item.customer_id : se.child1Id,
            child1Name: se.isChildren ? se.item.customer_name : se.child1Name,
            child1Birth: se.isChildren ? se.item.customer_dob : se.child1Dob,
            child1Relation: se.child1Relation,
            child2Id: se.child2Id,
            child2Name: se.child2Name,
            child2Birth: se.child2Dob,
            child2Relation: se.child2Relation,
            bankName: se.activityService.bank.name,
            accName: se.inputAccountName ? se.inputAccountName.value : '',
            accNumber: se.inputAccountNumber ? se.inputAccountNumber.value : '',
            subBank: se.inputTransferBranch ? se.inputTransferBranch.value : se.inputReceiveBranch.value,
            province: se.province,
            originDepart1: se.type == 1 ? origin1Str : origin2Str,
            originDepart2: '',
            realDepart1: se.type == 1 ? real1Str : real2Str,
            realDepart2: real2Str,
            isCancel: (se.type == 3 || se.type == 4) ? true : false,
            bookingId: se.data.trip.booking_id,
            originFlightNumber: se.checkChangeFlight ? se.data.flightNumber : "",
            isChildrenClaimForm: se.isChildren ? true : false
        };
        let obj = JSON.stringify(formObj);
        form.append("data", obj);
        if (form) {
            se.presentLoading();
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Authorization': text })
                    };
                    let urlApi = _providers_constants__WEBPACK_IMPORTED_MODULE_11__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/ClaimCathay';
                    se.httpClient.post(urlApi, form, options).subscribe((res) => {
                        if (res.result) {
                            console.log(se.data.flightNumber);
                            let objparam = { id: se.data.trip.booking_id, code: se.item.insurance_code, flightNumber: se.checkChangeFlight ? se.flightNumber : se.data.flightNumber, listchildclaimed: se.listchildclaimed, flightNumberOriginal: se.checkChangeFlight ? se.data.flightNumber : "" };
                            se.gf.setParams(objparam, 'insurranceClaimed');
                            se.router.navigateByUrl("/insurrancedone");
                            se.activityService.insurranceBookingId = se.data.trip.booking_id;
                            se.activityService.objClaimed = objparam;
                            se.clearValue();
                        }
                        else {
                            se.showToastr(res.msg);
                        }
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                    });
                }
                else {
                    se.showWarning('Bạn cần đăng nhập để thực hiện chức năng này.');
                }
            });
        }
    }
    test() {
        var se = this;
        let objparam = { id: se.item.booking_id, code: se.item.insurance_code };
        se.gf.setParams(objparam, 'insurranceClaimed');
        se.router.navigateByUrl("/insurrancedone");
    }
    itemrd() {
        this.ischeck = true;
        this.activityService.bank = null;
        this.showTransferInfo = true;
        this.showReceiveInfo = false;
    }
    itemrdinbank() {
        this.ischeck = false;
        this.activityService.bank = null;
        this.showReceiveInfo = true;
        this.showTransferInfo = false;
    }
    closecalendar() {
        this.modalCtrl.dismiss();
    }
    openPickupCalendar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var arrdate = this.expecteddate.split('-');
            let fromdate = new Date(arrdate[2], arrdate[1] * 1 - 1, arrdate[0]);
            const options = {
                pickMode: 'single',
                title: 'Chọn ngày',
                closeLabel: '',
                doneLabel: '',
                monthFormat: 'MM / YYYY',
                defaultScrollTo: fromdate,
                defaultDate: fromdate,
                weekStart: 1,
            };
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModal"],
                animated: false,
                cssClass: 'hotel-calendar-custom',
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                jquery__WEBPACK_IMPORTED_MODULE_8__('.days-btn').click(e => this.clickedElement(e));
                jquery__WEBPACK_IMPORTED_MODULE_8__('.hotel-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
                jquery__WEBPACK_IMPORTED_MODULE_8__('.hotel-calendar-custom .header-img-close').click((e => this.closecalendar()));
                let divmonth = jquery__WEBPACK_IMPORTED_MODULE_8__('.month-box');
                if (divmonth && divmonth.length > 0) {
                    for (let index = 0; index < divmonth.length; index++) {
                        const em = divmonth[index];
                        jquery__WEBPACK_IMPORTED_MODULE_8__('#' + em.id).addClass('cls-animation-calendar');
                    }
                }
            });
            var se = this;
            const event = yield this.myCalendar.onDidDismiss();
            const date = event.data;
            if (event.data) {
                se.zone.run(() => {
                });
            }
        });
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            var obj = e.currentTarget;
            if (obj) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonth;
                    tday = jquery__WEBPACK_IMPORTED_MODULE_8__(obj)[0].textContent;
                    objTextMonth = jquery__WEBPACK_IMPORTED_MODULE_8__('.on-selected').closest('.month-box').children()[0].textContent;
                    if (objTextMonth && objTextMonth.length > 0) {
                        monthstartdate = objTextMonth.split('/')[0].trim();
                        yearstartdate = objTextMonth.split('/')[1].trim();
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, tday);
                        setTimeout(() => {
                            se.modalCtrl.dismiss();
                        }, 100);
                        se.zone.run(() => {
                            se.realdate = moment__WEBPACK_IMPORTED_MODULE_9__(fromdate).format('DD-MM-YYYY');
                        });
                    }
                }
            }
        });
    }
    addChildInfo() {
        var se = this;
        se.countchild += 1;
        jquery__WEBPACK_IMPORTED_MODULE_8__('.item-child-' + se.countchild).parent().removeClass('hidden').addClass('show');
        if (se.countchild == 1) {
            se.child1Relation = "Con";
        }
        else if (se.countchild == 2) {
            se.child2Relation = "Con";
        }
        else if (se.countchild == 3) {
            se.child3Relation = "Con";
        }
        else if (se.countchild == 4) {
            se.child4Relation = "Con";
        }
        else if (se.countchild == 5) {
            se.child5Relation = "Con";
        }
    }
    validateInput() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this, valid = true;
            return new Promise((resolve, reject) => {
                se.checkInputDateTime().then((isValid) => {
                    if (isValid) {
                        if (se.checkChangeFlight && !se.flightNumber) {
                            se.showToastr('Xin vui lòng nhập mã chuyến bay.');
                            se.inputFlightNumber.setFocus();
                            valid = false;
                            return;
                        }
                        if (se.isChildren) {
                            if (!se.name) {
                                se.showToastr('Xin vui lòng nhập họ tên.');
                                se.inputName.setFocus();
                                valid = false;
                                return;
                            }
                            else if (!se.identityno) {
                                se.showToastr('Xin vui lòng nhập số chứng minh nhân dân/hộ chiếu.');
                                se.inputCMND.setFocus();
                                valid = false;
                                return;
                            }
                        }
                        if (!se.phonenumber(se.phone)) {
                            se.showToastr('Xin vui lòng nhập điện thoại.');
                            se.inputPhone.setFocus();
                            valid = false;
                            return;
                        }
                        else if (!se.validateEmail(se.email)) {
                            se.showToastr('Xin vui lòng nhập email.');
                            se.inputEmail.setFocus();
                            valid = false;
                            return;
                        }
                        else if (!se.activityService.bank) {
                            se.showToastr('Xin vui lòng chọn ngân hàng chuyển khoản.');
                            valid = false;
                            if (se.ischeck) {
                                let el = document.getElementById('ipbanktransferselected');
                                if (el) {
                                    el.firstElementChild.classList.add('required-field');
                                }
                            }
                            else {
                                let el = document.getElementById('ipbankreceiveselected');
                                if (el) {
                                    el.firstElementChild.classList.add('required-field');
                                }
                            }
                            return;
                        }
                        else if (se.ischeck) {
                            if (!se.bankTransferBranch) {
                                se.showToastr('Xin vui lòng nhập chi nhánh ngân hàng.');
                                se.inputTransferBranch.setFocus();
                                valid = false;
                                return;
                            }
                            if (!se.bankAccountName) {
                                se.showToastr('Xin vui lòng nhập tên chủ tài khoản.');
                                se.inputAccountName.setFocus();
                                valid = false;
                                return;
                            }
                            if (!se.bankAccountNumber) {
                                se.showToastr('Xin vui lòng nhập số tài khoản.');
                                se.inputAccountNumber.setFocus();
                                valid = false;
                                return;
                            }
                        }
                        else if (!se.ischeck) {
                            if (!se.bankReceiveBranch) {
                                se.showToastr('Xin vui lòng nhập chi nhánh ngân hàng.');
                                se.inputReceiveBranch.setFocus();
                                valid = false;
                                return;
                            }
                            else if (!se.province) {
                                se.showToastr('Xin vui lòng nhập tỉnh/ thành.');
                                se.inputProvince.setFocus();
                                valid = false;
                                return;
                            }
                        }
                        if (!se.imageResponse || se.imageResponse.length == 0) {
                            se.showToastr('Xin vui lòng cung cấp vé máy bay.');
                            valid = false;
                            return;
                        }
                        else if (!se.imageResponseCMND || se.imageResponseCMND.length == 0) {
                            se.showToastr('Xin vui lòng cung cấp chứng minh nhân dân.');
                            valid = false;
                            return;
                        }
                        else if (se.isChildren && se.imageResponseGKS.length == 0) {
                            se.showToastr('Xin vui lòng cung cấp giấy ủy quyền.');
                            valid = false;
                            return;
                        }
                        if (se.childlist.length > 0 && se.countchild > 0) {
                            let arrcheck = [se.child1Name, se.child2Name, se.child3Name, se.child4Name, se.child5Name];
                            if (se.child1Name && arrcheck.filter((n) => n == se.child1Name).length > 1) {
                                se.showToastr('Trẻ em đang trùng tên. Xin vui lòng kiểm tra lại');
                                valid = false;
                                return;
                            }
                            else if (se.child1Name && se.child1ImageResponse.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp vé máy bay cho trẻ 1.');
                                valid = false;
                                return;
                            }
                            else if (se.child1Name && se.child1ImageResponseGKS.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy khai sinh cho trẻ 1.');
                                valid = false;
                                return;
                            }
                            else if (se.child1Name && se.child1Relation == 'Khác' && se.child1ImageResponseOther.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy tờ khác cho trẻ 1.');
                                valid = false;
                                return;
                            }
                            else if (se.child2Name && arrcheck.filter((n) => n == se.child2Name).length > 1) {
                                se.showToastr('Trẻ em đang trùng tên. Xin vui lòng kiểm tra lại');
                                valid = false;
                                return;
                            }
                            else if (se.child2Name && se.child2ImageResponse.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp vé máy bay cho trẻ 2.');
                                valid = false;
                                return;
                            }
                            else if (se.child2Name && se.child2ImageResponseGKS.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy khai sinh cho trẻ 2.');
                                valid = false;
                                return;
                            }
                            else if (se.child2Name && se.child2Relation == 'Khác' && se.child2ImageResponseOther.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy tờ khác cho trẻ 2.');
                                valid = false;
                                return;
                            }
                            else if (se.child3Name && arrcheck.filter((n) => n == se.child3Name).length > 1) {
                                se.showToastr('Trẻ em đang trùng tên. Xin vui lòng kiểm tra lại');
                                valid = false;
                                return;
                            }
                            else if (se.child3Name && se.child3ImageResponse.length == 0) {
                                se.showToastr('Xin vui lòng chọn vé máy bay cho trẻ 3.');
                                valid = false;
                                return;
                            }
                            else if (se.child3Name && se.child3ImageResponseGKS.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy khai sinh cho trẻ 3.');
                                valid = false;
                                return;
                            }
                            else if (se.child3Name && se.child3Relation == 'Khác' && se.child3ImageResponseOther.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy tờ khác cho trẻ 3.');
                                valid = false;
                                return;
                            }
                            else if (se.child4Name && arrcheck.filter((n) => n == se.child4Name).length > 1) {
                                se.showToastr('Trẻ em đang trùng tên. Xin vui lòng kiểm tra lại');
                                valid = false;
                                return;
                            }
                            else if (se.child4Name && se.child4ImageResponse.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp vé máy bay cho trẻ 4.');
                                valid = false;
                                return;
                            }
                            else if (se.child4Name && se.child4ImageResponseGKS.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy khai sinh cho trẻ 4.');
                                valid = false;
                                return;
                            }
                            else if (se.child4Name && se.child4Relation == 'Khác' && se.child4ImageResponseOther.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy tờ khác cho trẻ 4.');
                                valid = false;
                                return;
                            }
                            else if (se.child5Name && arrcheck.filter((n) => n == se.child5Name).length > 1) {
                                se.showToastr('Trẻ em đang trùng tên. Xin vui lòng kiểm tra lại');
                                valid = false;
                                return;
                            }
                            else if (se.child5Name && se.child5ImageResponse.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp vé máy bay cho trẻ 5.');
                                valid = false;
                                return;
                            }
                            else if (se.child5Name && se.child5ImageResponseGKS.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy khai sinh cho trẻ 5.');
                                valid = false;
                                return;
                            }
                            else if (se.child5Name && se.child5Relation == 'Khác' && se.child5ImageResponseOther.length == 0) {
                                se.showToastr('Xin vui lòng cung cấp giấy tờ khác cho trẻ 5.');
                                valid = false;
                                return;
                            }
                        }
                        resolve(valid);
                    }
                    else {
                        resolve(false);
                    }
                });
            });
        });
    }
    phonenumber(inputtxt) {
        var n = Number(inputtxt);
        if (n) {
            var test1 = inputtxt.length;
            if (inputtxt) {
                if (test1 == 10) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    showToastr(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const toast = yield se.toastrCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top',
            });
            toast.present();
        });
    }
    selectedChildren(event, index) {
        var se = this;
        if (event.detail) {
            if (index == 0) {
                se.child1Id = event.detail.value.split('|')[0];
                se.child1Name = event.detail.value.split('|')[1];
                se.child1Dob = event.detail.value.split('|')[2];
            }
            else if (index == 1) {
                se.child2Id = event.detail.value.split('|')[0];
                se.child2Name = event.detail.value.split('|')[1];
                se.child2Dob = event.detail.value.split('|')[2];
            }
            else if (index == 2) {
                se.child3Id = event.detail.value.split('|')[0];
                se.child3Name = event.detail.value.split('|')[1];
                se.child3Dob = event.detail.value.split('|')[2];
            }
            else if (index == 3) {
                se.child4Id = event.detail.value.split('|')[0];
                se.child4Name = event.detail.value.split('|')[1];
                se.child4Dob = event.detail.value.split('|')[2];
            }
            else if (index == 4) {
                se.child5Id = event.detail.value.split('|')[0];
                se.child5Name = event.detail.value.split('|')[1];
                se.child5Dob = event.detail.value.split('|')[2];
            }
        }
        console.log(event);
    }
    selectedRelation(ev, index) {
        var se = this;
        let idx = index + 1;
        if (idx == 1) {
            se.child1Relation = ev.detail.value;
        }
        if (idx == 2) {
            se.child2Relation = ev.detail.value;
        }
        if (idx == 3) {
            se.child3Relation = ev.detail.value;
        }
        if (idx == 4) {
            se.child4Relation = ev.detail.value;
        }
        if (idx == 5) {
            se.child5Relation = ev.detail.value;
        }
    }
    clearImg(value, idx) {
        this.zone.run(() => {
            if (value == 1) {
                if (idx != undefined) {
                    this.imageResponse.splice(idx, 1);
                    this.dataform.splice(idx, 1);
                }
                else {
                    this.imageResponse = [];
                    this.dataform = [];
                }
            }
            if (value == 2) {
                if (idx != undefined) {
                    this.imageResponseCMND.splice(idx, 1);
                    this.dataformCMND.splice(idx, 1);
                }
                else {
                    this.imageResponseCMND = [];
                    this.dataformCMND = [];
                }
            }
            if (value == 3) {
                if (idx != undefined) {
                    this.imageResponseGKS.splice(idx, 1);
                    this.dataformGKS.splice(idx, 1);
                }
                else {
                    this.imageResponseGKS = [];
                    this.dataformGKS = [];
                }
            }
        });
    }
    clearImgChild(value, childindex, idx) {
        this.zone.run(() => {
            if (value == 1) {
                if (idx != undefined) {
                    if (childindex == 1) {
                        this.child1ImageResponse.splice(idx, 1);
                        this.child1dataform.splice(idx, 1);
                    }
                    else if (childindex == 2) {
                        this.child2ImageResponse.splice(idx, 1);
                        this.child2dataform.splice(idx, 1);
                    }
                    else if (childindex == 3) {
                        this.child3ImageResponse.splice(idx, 1);
                        this.child3dataform.splice(idx, 1);
                    }
                    else if (childindex == 4) {
                        this.child4ImageResponse.splice(idx, 1);
                        this.child4dataform.splice(idx, 1);
                    }
                    else if (childindex == 5) {
                        this.child5ImageResponse.splice(idx, 1);
                        this.child5dataform.splice(idx, 1);
                    }
                }
                else {
                    if (childindex == 1) {
                        this.child1ImageResponse = [];
                        this.child1dataform = [];
                    }
                    else if (childindex == 2) {
                        this.child2ImageResponse = [];
                        this.child2dataform = [];
                    }
                    else if (childindex == 3) {
                        this.child3ImageResponse = [];
                        this.child3dataform = [];
                    }
                    else if (childindex == 4) {
                        this.child4ImageResponse = [];
                        this.child4dataform = [];
                    }
                    else if (childindex == 5) {
                        this.child5ImageResponse = [];
                        this.child5dataform = [];
                    }
                }
            }
            if (value == 2) {
                if (idx != undefined) {
                    if (childindex == 1) {
                        this.child1ImageResponseGKS.splice(idx, 1);
                        this.child1dataformGKS.splice(idx, 1);
                    }
                    else if (childindex == 2) {
                        this.child2ImageResponseGKS.splice(idx, 1);
                        this.child2dataformGKS.splice(idx, 1);
                    }
                    else if (childindex == 3) {
                        this.child3ImageResponseGKS.splice(idx, 1);
                        this.child3dataformGKS.splice(idx, 1);
                    }
                    else if (childindex == 4) {
                        this.child4ImageResponseGKS.splice(idx, 1);
                        this.child4dataformGKS.splice(idx, 1);
                    }
                    else if (childindex == 5) {
                        this.child5ImageResponseGKS.splice(idx, 1);
                        this.child5dataformGKS.splice(idx, 1);
                    }
                }
                else {
                    if (childindex == 1) {
                        this.child1ImageResponseGKS = [];
                        this.child1dataformGKS = [];
                    }
                    else if (childindex == 2) {
                        this.child2ImageResponseGKS = [];
                        this.child2dataformGKS = [];
                    }
                    else if (childindex == 3) {
                        this.child3ImageResponseGKS = [];
                        this.child3dataformGKS = [];
                    }
                    else if (childindex == 4) {
                        this.child4ImageResponseGKS = [];
                        this.child4dataformGKS = [];
                    }
                    else if (childindex == 5) {
                        this.child5ImageResponseGKS = [];
                        this.child5dataformGKS = [];
                    }
                }
            }
            if (value == 3) {
                if (idx != undefined) {
                    if (childindex == 1) {
                        this.child1ImageResponseOther.splice(idx, 1);
                        this.child1dataformOther.splice(idx, 1);
                    }
                    else if (childindex == 2) {
                        this.child2ImageResponseOther.splice(idx, 1);
                        this.child2dataformOther.splice(idx, 1);
                    }
                    else if (childindex == 3) {
                        this.child3ImageResponseOther.splice(idx, 1);
                        this.child3dataformOther.splice(idx, 1);
                    }
                    else if (childindex == 4) {
                        this.child4ImageResponseOther.splice(idx, 1);
                        this.child4dataformOther.splice(idx, 1);
                    }
                    else if (childindex == 5) {
                        this.child5ImageResponseOther.splice(idx, 1);
                        this.child5dataformOther.splice(idx, 1);
                    }
                }
                else {
                    if (childindex == 1) {
                        this.child1ImageResponseOther = [];
                        this.child1dataformOther = [];
                    }
                    else if (childindex == 2) {
                        this.child2ImageResponseOther = [];
                        this.child2dataformOther = [];
                    }
                    else if (childindex == 3) {
                        this.child3ImageResponseOther = [];
                        this.child3dataformOther = [];
                    }
                    else if (childindex == 4) {
                        this.child4ImageResponseOther = [];
                        this.child4dataformOther = [];
                    }
                    else if (childindex == 5) {
                        this.child5ImageResponseOther = [];
                        this.child5dataformOther = [];
                    }
                }
            }
        });
    }
    uploadImage(event, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (!value) {
                return;
            }
            if (value == 1) {
                se.dataform = [];
                se.imageResponse = [];
            }
            else if (value == 2) {
                se.dataformCMND = [];
                se.imageResponseCMND = [];
            }
            else if (value == 3) {
                se.dataformGKS = [];
                se.imageResponseGKS = [];
            }
            for (let i = 0; i < event.target.files.length; i++) {
                var file = event.target.files[i], filename = file.name;
                if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        if (this.result) {
                            if (value == 1) {
                                var item = { img: this.result, filename: filename };
                                se.imageResponse.push(item);
                            }
                            else if (value == 2) {
                                var item = { img: this.result, filename: filename };
                                se.imageResponseCMND.push(item);
                            }
                            else if (value == 3) {
                                var item = { img: this.result, filename: filename };
                                se.imageResponseGKS.push(item);
                            }
                        }
                    };
                    if (file) {
                        reader.readAsDataURL(file);
                        let item = { file: file, filename: filename };
                        if (value == 1) {
                            se.dataform.push(item);
                        }
                        else if (value == 2) {
                            se.dataformCMND.push(item);
                        }
                        else if (value == 3) {
                            se.dataformGKS.push(item);
                        }
                    }
                }
            }
            ;
        });
    }
    uploadImageChild(event, value, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (!value) {
                return;
            }
            if (value == 1) {
                if (index == 1) {
                    se.child1dataform = [];
                    se.child1ImageResponse = [];
                }
                else if (index == 2) {
                    se.child2dataform = [];
                    se.child2ImageResponse = [];
                }
                else if (index == 3) {
                    se.child3dataform = [];
                    se.child3ImageResponse = [];
                }
                else if (index == 4) {
                    se.child4dataform = [];
                    se.child4ImageResponse = [];
                }
                else if (index == 5) {
                    se.child5dataform = [];
                    se.child5ImageResponse = [];
                }
            }
            else if (value == 2) {
                if (index == 1) {
                    se.child1dataformGKS = [];
                    se.child1ImageResponseGKS = [];
                }
                else if (index == 2) {
                    se.child2dataformGKS = [];
                    se.child2ImageResponseGKS = [];
                }
                else if (index == 3) {
                    se.child3dataformGKS = [];
                    se.child3ImageResponseGKS = [];
                }
                else if (index == 4) {
                    se.child4dataformGKS = [];
                    se.child4ImageResponseGKS = [];
                }
                else if (index == 5) {
                    se.child5dataformGKS = [];
                    se.child5ImageResponseGKS = [];
                }
            }
            for (let i = 0; i < event.target.files.length; i++) {
                var file = event.target.files[i], filename = file.name;
                if (/\.(jpe?g|png|gif|pdf)$/i.test(file.name)) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        if (this.result) {
                            var item = { img: this.result, filename: filename };
                            if (value == 1) {
                                if (index == 1) {
                                    se.child1ImageResponse.push(item);
                                }
                                else if (index == 2) {
                                    se.child2ImageResponse.push(item);
                                }
                                else if (index == 3) {
                                    se.child3ImageResponse.push(item);
                                }
                                else if (index == 4) {
                                    se.child4ImageResponse.push(item);
                                }
                                else if (index == 5) {
                                    se.child5ImageResponse.push(item);
                                }
                            }
                            else if (value == 2) {
                                if (index == 1) {
                                    se.child1ImageResponseGKS.push(item);
                                }
                                else if (index == 2) {
                                    se.child2ImageResponseGKS.push(item);
                                }
                                else if (index == 3) {
                                    se.child3ImageResponseGKS.push(item);
                                }
                                else if (index == 4) {
                                    se.child4ImageResponseGKS.push(item);
                                }
                                else if (index == 5) {
                                    se.child5ImageResponseGKS.push(item);
                                }
                            }
                        }
                    };
                    if (file) {
                        reader.readAsDataURL(file);
                        let item = { file: file, filename: filename };
                        if (value == 1) {
                            if (index == 1) {
                                se.child1dataform.push(item);
                            }
                            else if (index == 2) {
                                se.child2dataform.push(item);
                            }
                            else if (index == 3) {
                                se.child3dataform.push(item);
                            }
                            else if (index == 4) {
                                se.child4dataform.push(item);
                            }
                            else if (index == 5) {
                                se.child5dataform.push(item);
                            }
                        }
                        else if (value == 2) {
                            if (index == 1) {
                                se.child1dataformGKS.push(item);
                            }
                            else if (index == 2) {
                                se.child2dataformGKS.push(item);
                            }
                            else if (index == 3) {
                                se.child3dataformGKS.push(item);
                            }
                            else if (index == 4) {
                                se.child4dataformGKS.push(item);
                            }
                            else if (index == 5) {
                                se.child5dataformGKS.push(item);
                            }
                        }
                    }
                }
            }
            ;
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                duration: 60000
            });
            this.loader.present();
        });
    }
    clearValue() {
        var se = this;
        se.realdate = "";
        se.realtime = "";
        se.bankTransferBranch = "";
        se.bankAccountName = "";
        se.bankAccountNumber = "";
        se.bankReceiveBranch = "";
        se.province = "";
        se.ischeck = true;
        se.checkChangeFlight = false;
        se.flightNumber = "";
        if (se.activityService.bank) {
            se.activityService.bank.name = null;
        }
        var rd = document.getElementsByTagName('ion-radio');
        if (rd && rd.length > 0) {
            for (let index = 0; index < rd.length; index++) {
                const element = rd[index];
                element.classList.remove('radio-checked');
            }
        }
        se.showReceiveInfo = false;
        se.showTransferInfo = false;
        se.imageResponse = [];
        se.imageResponseCMND = [];
        se.imageResponseGKS = [];
        se.dataform = [];
        se.dataformCMND = [];
        se.dataformGKS = [];
        se.child1ImageResponseGKS = [];
        se.child1ImageResponse = [];
        se.child1ImageResponseOther = [];
        se.child2ImageResponseGKS = [];
        se.child2ImageResponse = [];
        se.child2ImageResponseOther = [];
        se.child3ImageResponseGKS = [];
        se.child3ImageResponse = [];
        se.child3ImageResponseOther = [];
        se.child4ImageResponseGKS = [];
        se.child4ImageResponse = [];
        se.child4ImageResponseOther = [];
        se.child5ImageResponseGKS = [];
        se.child5ImageResponse = [];
        se.child5ImageResponseOther = [];
        se.child1dataform = [];
        se.child1dataformGKS = [];
        se.child1dataformOther = [];
        se.child2dataform = [];
        se.child2dataformGKS = [];
        se.child2dataformOther = [];
        se.child3dataform = [];
        se.child3dataformGKS = [];
        se.child3dataformOther = [];
        se.child4dataform = [];
        se.child4dataformGKS = [];
        se.child4dataformOther = [];
        se.child5dataform = [];
        se.child5dataformGKS = [];
        se.child5dataformOther = [];
    }
    showWarning(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let alert = yield this.alertCtrl.create({
                message: msg,
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            return;
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('blogtripdefault');
                            this.router.navigateByUrl('/login');
                        }
                    },
                ]
            });
            alert.present();
        });
    }
    changeFlight() {
        this.checkChangeFlight = !this.checkChangeFlight;
    }
    inputAdultName(event) {
        var se = this;
        if (event.detail) {
            se.bankAccountName = event.detail.currentTarget.value;
        }
    }
    inputBankAccountName(event) {
        var se = this;
        if (event.detail) {
            se.name = event.detail.currentTarget.value;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipTransferBranch'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputTransferBranch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipAccountName'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputAccountName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipAccountNumber'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputAccountNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipReceiveBranch'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputReceiveBranch", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipPhone'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputPhone", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipEmail'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputEmail", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipProvince'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputProvince", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipFlightNumber'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputFlightNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipName'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipCMND'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InsurrancedetailPage.prototype, "inputCMND", void 0);
InsurrancedetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-insurrancedetail',
        template: __webpack_require__(/*! ./insurrancedetail.page.html */ "./src/app/insurrancedetail/insurrancedetail.page.html"),
        styles: [__webpack_require__(/*! ./insurrancedetail.page.scss */ "./src/app/insurrancedetail/insurrancedetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__["File"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"],
        _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], InsurrancedetailPage);



/***/ })

}]);
//# sourceMappingURL=insurrancedetail-insurrancedetail-module.js.map