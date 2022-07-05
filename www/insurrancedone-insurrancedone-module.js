(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insurrancedone-insurrancedone-module"],{

/***/ "./src/app/insurrancedone/insurrancedone.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/insurrancedone/insurrancedone.module.ts ***!
  \*********************************************************/
/*! exports provided: InsurrancedonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurrancedonePageModule", function() { return InsurrancedonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insurrancedone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurrancedone.page */ "./src/app/insurrancedone/insurrancedone.page.ts");







const routes = [
    {
        path: '',
        component: _insurrancedone_page__WEBPACK_IMPORTED_MODULE_6__["InsurrancedonePage"]
    }
];
let InsurrancedonePageModule = class InsurrancedonePageModule {
};
InsurrancedonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_insurrancedone_page__WEBPACK_IMPORTED_MODULE_6__["InsurrancedonePage"]]
    })
], InsurrancedonePageModule);



/***/ }),

/***/ "./src/app/insurrancedone/insurrancedone.page.html":
/*!*********************************************************!*\
  !*** ./src/app/insurrancedone/insurrancedone.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"insurrance-done-header\">\n  <ion-toolbar class=\"header-toolbar\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div class=\"header-title\"><label>Hoàn thành</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"insurrance-done-page\">\n    <div class=\"img-trip-empty\">\n        <img class=\"img-empty\" src=\"./assets/empty/trip_empty.svg\">\n      </div>\n      <div>\n        <div class=\"text-center p-top-16\">\n          <div><ion-label class=\"text-title\">Gửi yêu cầu bảo hiểm thành công!</ion-label></div>\n          <div class=\"p-top-8\">\n            <ion-label class=\"text\">\n              Quý khách đã hoàn tất gửi yêu cầu bồi thường Bảo hiểm đến Cathay. Vui lòng kiểm tra email để xem thêm chi tiết.\n            </ion-label>\n          </div>\n          \n        </div>\n      </div>\n</ion-content>\n<ion-footer class=\"insurrance-done-footer\">\n    <div class=\"text-center\">\n        <button (click)=\"next()\" ion-button round outline class=\"button2\">Hoàn thành</button>\n      </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/insurrancedone/insurrancedone.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/insurrancedone/insurrancedone.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".insurrance-done-header .header-toolbar {\n  min-height: 0px;\n  text-align: center;\n}\n.insurrance-done-header .header-title {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.insurrance-done-page .text {\n  font-size: 14px;\n}\n.insurrance-done-page .mtp {\n  margin-top: 10px;\n}\n.insurrance-done-page .img-trip-empty {\n  text-align: center;\n}\n.insurrance-done-page .img-empty {\n  padding-top: 20%;\n}\n.insurrance-done-page .text-center {\n  text-align: center;\n  color: #4f4f4f;\n}\n.insurrance-done-page .text-title {\n  font-size: 28px;\n  font-weight: bold;\n}\n.insurrance-done-page .p-top-8 {\n  padding-top: 8px;\n}\n.insurrance-done-page .p-top-16 {\n  padding-top: 16px;\n}\n.insurrance-done-footer {\n  text-align: center;\n  background: #ffffff;\n}\n.insurrance-done-footer .text-center {\n  background: #ffffff;\n  text-align: center;\n}\n.insurrance-done-footer .button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  font-size: 17px;\n  border-radius: 4px;\n}\n@media (min-width: 414px) and (max-width: 480px) {\n  :ng-deep .text-title {\n    font-size: 28px;\n    font-weight: bold;\n    margin: 0 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvaW5zdXJyYW5jZWRvbmUvaW5zdXJyYW5jZWRvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9pbnN1cnJhbmNlZG9uZS9pbnN1cnJhbmNlZG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQWdCLGtCQUFBO0FDQ3hCO0FEQ0k7RUFDSSxnQkFBQTtFQUFpQixlQUFBO0VBQWdCLGlCQUFBO0FDR3pDO0FER0k7RUFFSSxlQUFBO0FDRFI7QURHSTtFQUVJLGdCQUFBO0FDRlI7QURJSTtFQUNJLGtCQUFBO0FDRlI7QURJSTtFQUNJLGdCQUFBO0FDRlI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0hSO0FES0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNIUjtBREtJO0VBQ0ksZ0JBQUE7QUNIUjtBREtJO0VBQ0ksaUJBQUE7QUNIUjtBRE1BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0hKO0FESUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURJSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNIUjtBRFNJO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VDTlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2luc3VycmFuY2Vkb25lL2luc3VycmFuY2Vkb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN1cnJhbmNlLWRvbmUtaGVhZGVye1xyXG4gICAgLmhlYWRlci10b29sYmFye1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDBweDt0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtmb250LXNpemU6IDIwcHg7Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuLmluc3VycmFuY2UtZG9uZS1wYWdle1xyXG4gICAgXHJcblxyXG4gICAgLnRleHRcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubXRwXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5pbWctdHJpcC1lbXB0eXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaW1nLWVtcHR5e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAucC10b3AtOHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTE2e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcbi5pbnN1cnJhbmNlLWRvbmUtZm9vdGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbjpuZy1kZWVwe1xyXG4gICAgQG1lZGlhKG1pbi13aWR0aDo0MTRweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgLnRleHQtdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5pbnN1cnJhbmNlLWRvbmUtaGVhZGVyIC5oZWFkZXItdG9vbGJhciB7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3VycmFuY2UtZG9uZS1oZWFkZXIgLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnN1cnJhbmNlLWRvbmUtcGFnZSAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtcGFnZSAubXRwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtcGFnZSAuaW1nLXRyaXAtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdXJyYW5jZS1kb25lLXBhZ2UgLmltZy1lbXB0eSB7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG59XG4uaW5zdXJyYW5jZS1kb25lLXBhZ2UgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtcGFnZSAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW5zdXJyYW5jZS1kb25lLXBhZ2UgLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmluc3VycmFuY2UtZG9uZS1wYWdlIC5wLXRvcC0xNiB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4uaW5zdXJyYW5jZS1kb25lLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtZm9vdGVyIC50ZXh0LWNlbnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtZm9vdGVyIC5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgOm5nLWRlZXAgLnRleHQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDAgMjRweDtcbiAgfVxufSJdfQ== */"
=======
module.exports = ".insurrance-done-header .header-toolbar {\n  min-height: 0px;\n  text-align: center;\n}\n.insurrance-done-header .header-title {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.insurrance-done-page .text {\n  font-size: 14px;\n}\n.insurrance-done-page .mtp {\n  margin-top: 10px;\n}\n.insurrance-done-page .img-trip-empty {\n  text-align: center;\n}\n.insurrance-done-page .img-empty {\n  padding-top: 20%;\n}\n.insurrance-done-page .text-center {\n  text-align: center;\n  color: #4f4f4f;\n}\n.insurrance-done-page .text-title {\n  font-size: 28px;\n  font-weight: bold;\n}\n.insurrance-done-page .p-top-8 {\n  padding-top: 8px;\n}\n.insurrance-done-page .p-top-16 {\n  padding-top: 16px;\n}\n.insurrance-done-footer {\n  text-align: center;\n  background: #ffffff;\n}\n.insurrance-done-footer .text-center {\n  background: #ffffff;\n  text-align: center;\n}\n.insurrance-done-footer .button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  font-size: 17px;\n  border-radius: 4px;\n}\n@media (min-width: 414px) and (max-width: 480px) {\n  :ng-deep .text-title {\n    font-size: 28px;\n    font-weight: bold;\n    margin: 0 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2luc3VycmFuY2Vkb25lL2luc3VycmFuY2Vkb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5zdXJyYW5jZWRvbmUvaW5zdXJyYW5jZWRvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUFnQixrQkFBQTtBQ0N4QjtBRENJO0VBQ0ksZ0JBQUE7RUFBaUIsZUFBQTtFQUFnQixpQkFBQTtBQ0d6QztBREdJO0VBRUksZUFBQTtBQ0RSO0FER0k7RUFFSSxnQkFBQTtBQ0ZSO0FESUk7RUFDSSxrQkFBQTtBQ0ZSO0FESUk7RUFDSSxnQkFBQTtBQ0ZSO0FES0k7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNIUjtBREtJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDSFI7QURLSTtFQUNJLGdCQUFBO0FDSFI7QURLSTtFQUNJLGlCQUFBO0FDSFI7QURNQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRElJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FESUk7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSFI7QURTSTtFQUNJO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFQ05WO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9pbnN1cnJhbmNlZG9uZS9pbnN1cnJhbmNlZG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdXJyYW5jZS1kb25lLWhlYWRlcntcclxuICAgIC5oZWFkZXItdG9vbGJhcntcclxuICAgICAgICBtaW4taGVpZ2h0OiAwcHg7dGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7Zm9udC1zaXplOiAyMHB4O2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcbi5pbnN1cnJhbmNlLWRvbmUtcGFnZXtcclxuICAgIFxyXG5cclxuICAgIC50ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm10cFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLXRyaXAtZW1wdHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmltZy1lbXB0eXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTh7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIH1cclxufVxyXG4uaW5zdXJyYW5jZS1kb25lLWZvb3RlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG46bmctZGVlcHtcclxuICAgIEBtZWRpYShtaW4td2lkdGg6NDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgIC50ZXh0LXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuaW5zdXJyYW5jZS1kb25lLWhlYWRlciAuaGVhZGVyLXRvb2xiYXIge1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtaGVhZGVyIC5oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5zdXJyYW5jZS1kb25lLXBhZ2UgLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaW5zdXJyYW5jZS1kb25lLXBhZ2UgLm10cCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaW5zdXJyYW5jZS1kb25lLXBhZ2UgLmltZy10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3VycmFuY2UtZG9uZS1wYWdlIC5pbWctZW1wdHkge1xuICBwYWRkaW5nLXRvcDogMjAlO1xufVxuLmluc3VycmFuY2UtZG9uZS1wYWdlIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uaW5zdXJyYW5jZS1kb25lLXBhZ2UgLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmluc3VycmFuY2UtZG9uZS1wYWdlIC5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtcGFnZSAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLmluc3VycmFuY2UtZG9uZS1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uaW5zdXJyYW5jZS1kb25lLWZvb3RlciAudGV4dC1jZW50ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdXJyYW5jZS1kb25lLWZvb3RlciAuYnV0dG9uMiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIDpuZy1kZWVwIC50ZXh0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwIDI0cHg7XG4gIH1cbn0iXX0= */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/insurrancedone/insurrancedone.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/insurrancedone/insurrancedone.page.ts ***!
  \*******************************************************/
/*! exports provided: InsurrancedonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurrancedonePage", function() { return InsurrancedonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");








let InsurrancedonePage = class InsurrancedonePage {
    constructor(gf, modalCtrl, router, _mytripservice, _flightService, valueGlobal, navCtrl) {
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this._mytripservice = _mytripservice;
        this._flightService = _flightService;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.paramReturn = this.gf.getParams('insurranceClaimed');
    }
    ngOnInit() {
    }
    next() {
        let navigationExtras = {
            state: {
                param: this.paramReturn
            }
        };
        if (this._mytripservice.rootPage == "homeflight") {
            if (this.valueGlobal.backpageCathay == 'mytripdetail') {
                this.navCtrl.navigateForward('mytripdetail', { animated: true });
            }
            else {
                this.valueGlobal.backValue = "homeflight";
                this._mytripservice.orderPageState.emit(1);
                this._flightService.bookingSuccess = true;
                this._flightService.itemTabFlightActive.emit(true);
                setTimeout(() => {
                    this._flightService.itemMenuFlightClick.emit(2);
                }, 200);
                this.navCtrl.navigateBack('/tabs/tab1');
                this._mytripservice.backfrompage = "";
            }
        }
        else {
            if (this.valueGlobal.backpageCathay == 'mytripdetail') {
                this.navCtrl.navigateForward('mytripdetail', { animated: true });
            }
            else {
                this.router.navigateByUrl("/app/tabs/tab3?refresh=true", navigationExtras);
            }
        }
    }
};
InsurrancedonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insurrancedone',
        template: __webpack_require__(/*! ./insurrancedone.page.html */ "./src/app/insurrancedone/insurrancedone.page.html"),
        styles: [__webpack_require__(/*! ./insurrancedone.page.scss */ "./src/app/insurrancedone/insurrancedone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_5__["MytripService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_7__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], InsurrancedonePage);



/***/ }),

/***/ "./src/app/providers/mytrip-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/mytrip-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MytripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripService", function() { return MytripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MytripService = class MytripService {
    constructor() {
        this.mylistOrders = [];
        this.orderPageState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemEnableHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalHistoryFoodCountText = "";
    }
};
MytripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MytripService);



/***/ })

}]);
//# sourceMappingURL=insurrancedone-insurrancedone-module.js.map