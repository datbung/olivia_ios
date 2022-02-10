(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["popupinfobkg-popupinfobkg-module"],{

/***/ "./src/app/popupinfobkg/popupinfobkg.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/popupinfobkg/popupinfobkg.module.ts ***!
  \*****************************************************/
/*! exports provided: PopupinfobkgPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupinfobkgPageModule", function() { return PopupinfobkgPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popupinfobkg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popupinfobkg.page */ "./src/app/popupinfobkg/popupinfobkg.page.ts");







const routes = [
    {
        path: '',
        component: _popupinfobkg_page__WEBPACK_IMPORTED_MODULE_6__["PopupinfobkgPage"]
    }
];
let PopupinfobkgPageModule = class PopupinfobkgPageModule {
};
PopupinfobkgPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_popupinfobkg_page__WEBPACK_IMPORTED_MODULE_6__["PopupinfobkgPage"]]
    })
], PopupinfobkgPageModule);



/***/ }),

/***/ "./src/app/popupinfobkg/popupinfobkg.page.html":
/*!*****************************************************!*\
  !*** ./src/app/popupinfobkg/popupinfobkg.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header-infobkg\">\n  <ion-toolbar class=\"toolbar-infobkg\">\n        <ion-title class=\"title-infobkg\">Thông tin đặt phòng</ion-title>\n        <ion-buttons start class=\"cls-button\">\n          <button slot=\"primary\" routerDirection=\"root\" class=\"btn-close\" (click)=\"closeModal()\">\n            <img class=\"img-close\" src=\"./assets/ic_close.svg\" >\n          </button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"content-infobkg\">\n  <div>\n      <div class=\"cls-row\" (touchend)=\"openPickupCalendar()\">\n        <div class=\"div-img-left p-0\">\n            <img class=\"img-padding img-checkin\" src=\"./assets/imgs/icon_calender.svg\">\n        </div>\n\n        <div class=\"col-calendar\">\n          <div class=\"font-thu\"> \n            <label class=\"text-color text-cinthu\">Nhận phòng</label>\n          </div>\n          <div class=\"text-cin  m-top-5\">\n            <label class=\"text-cin-input\">{{cinthu}}, {{cindisplay}}</label>\n          </div>\n        </div>\n\n        <div class=\"number-night\">\n          <div class=\"div-night-count\">{{nightCount}}</div> <div class=\"div-icon-moon\"><img class=\"img-moon\" src=\"./assets/imgs/ic_moon.svg\"></div> \n        </div>\n\n        <div class=\"col-calendar\">\n          <div  class=\"font-thu\" >\n            <label class=\"text-color text-cinthu\">Trả phòng</label>\n          </div>\n          <div class=\"text-cout m-top-5\">\n            <label class=\"text-cout-input\">{{coutthu}}, {{coutdisplay}}</label>\n          </div>\n        </div>\n      </div>\n      <div  class=\"cls-row m-top-16\" (click)=\"openmnu()\">\n        <div class=\"div-img-right\">\n            <img class=\"img-padding img-people\" src=\"./assets/imgs/icon_people.svg\">\n        </div>\n        <div> \n          <div class=\"m-top-22\">\n            <label class=\"text-pax\"><span class=\"text-bold\">{{adult}}</span> người lớn · <span class=\"text-bold\">{{child}}</span> trẻ em · <span class=\"text-bold\">{{roomnumber}}</span> phòng</label>\n          </div>\n        </div>\n      </div>\n      <div>\n        <button ion-button round (click)=\"search()\" class=\"button btn-search\" clear>Tìm\n          kiếm</button>\n      </div>\n\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/popupinfobkg/popupinfobkg.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/popupinfobkg/popupinfobkg.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-infobkg .toolbar-infobkg {\n  height: 56px;\n  text-align: center;\n}\n.header-infobkg .title-infobkg {\n  font-weight: bold;\n  padding-top: 8px;\n}\n.header-infobkg .img-close {\n  max-width: 150%;\n}\n.header-infobkg .cls-button {\n  position: absolute;\n  right: -4px;\n  top: 0;\n}\n.header-infobkg .cls-button .btn-close {\n  background: #ffffff;\n}\n.content-infobkg .m-top-5 {\n  margin-top: 5px;\n}\n.content-infobkg .m-top-16 {\n  margin-top: 16px;\n}\n.content-infobkg .m-top-22 {\n  margin-top: 22px;\n}\n.content-infobkg .cls-row {\n  background: #ffffff;\n  height: 48px;\n  margin-top: 5px;\n  display: flex;\n  border-bottom: solid 0.5px #bdbdbd;\n}\n.content-infobkg .div-img-left {\n  width: 48px;\n  margin-left: -16px;\n}\n.content-infobkg .div-img-right {\n  margin-top: 8px;\n  margin-left: -16px;\n}\n.content-infobkg .col-calendar {\n  width: 140px;\n}\n.content-infobkg .col-calendar .font-thu {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n  margin-top: 5px;\n}\n.content-infobkg .col-calendar .text-cin-input, .content-infobkg .col-calendar .text-cout-input {\n  font-size: 15px;\n  font-weight: 600;\n  color: #222222;\n  letter-spacing: -0.69px;\n}\n.content-infobkg .col-calendar .text-pax {\n  font-weight: 300;\n  font-size: 16px;\n}\n.content-infobkg .text-bold {\n  font-weight: 600;\n}\n.content-infobkg .number-night {\n  width: 24px;\n  height: 16px;\n  background: #f2f2f2;\n  border-radius: 10px;\n  margin-top: 25px;\n  margin-right: 16px;\n  color: #828282;\n  font-size: 10px;\n  display: flex;\n}\n.content-infobkg .number-night .div-night-count {\n  margin: 2px 1px 3px 5px;\n}\n.content-infobkg .number-night .div-icon-moon {\n  margin-top: 4px;\n  margin-left: -2px;\n}\n.content-infobkg .number-night .text-pax {\n  letter-spacing: -0.4px;\n}\n.content-infobkg .btn-search {\n  border-radius: 4px;\n  background-color: #f59233;\n  font-size: 17px !important;\n  font-weight: bold;\n  color: #ffffff;\n  width: 100%;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL3BvcHVwaW5mb2JrZy9wb3B1cGluZm9ia2cucGFnZS5zY3NzIiwic3JjL2FwcC9wb3B1cGluZm9ia2cvcG9wdXBpbmZvYmtnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0FKO0FERUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURFRTtFQUNFLGVBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7RUFBbUIsV0FBQTtFQUFZLE1BQUE7QUNFbkM7QURESTtFQUNFLG1CQUFBO0FDR047QURHRTtFQUNFLGVBQUE7QUNBSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBREVFO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQ0ROO0FER0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNESjtBREdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FDREo7QURJRTtFQUNFLFlBQUE7QUNGSjtBRElJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FES0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNITjtBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDSk47QURRRTtFQUNFLGdCQUFBO0FDTko7QURTRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNQSjtBRFNJO0VBQ0UsdUJBQUE7QUNQTjtBRFNJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDUE47QURTSTtFQUNFLHNCQUFBO0FDUE47QURXRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvcG9wdXBpbmZvYmtnL3BvcHVwaW5mb2JrZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWluZm9ia2d7XG4gIC50b29sYmFyLWluZm9ia2d7XG4gICAgaGVpZ2h0OiA1NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICB9XG4gIC50aXRsZS1pbmZvYmtne1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gIH1cbiAgLmltZy1jbG9zZXtcbiAgICBtYXgtd2lkdGg6IDE1MCU7XG4gIH1cbiAgLmNscy1idXR0b257XG4gICAgcG9zaXRpb246IGFic29sdXRlO3JpZ2h0OiAtNHB4O3RvcDogMDtcbiAgICAuYnRuLWNsb3Nle1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cblxuLmNvbnRlbnQtaW5mb2JrZ3tcbiAgLm0tdG9wLTV7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5tLXRvcC0xNntcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIC5tLXRvcC0yMntcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICB9XG4gIC5jbHMtcm93XG4gIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2JkYmRiZDtcbiAgfVxuICAuZGl2LWltZy1sZWZ0e1xuICAgIHdpZHRoOjQ4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICB9XG4gIC5kaXYtaW1nLXJpZ2h0e1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIH1cblxuICAuY29sLWNhbGVuZGFye1xuICAgIHdpZHRoOiAxNDBweDtcblxuICAgIC5mb250LXRodXtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cblxuICAgIC50ZXh0LWNpbi1pbnB1dCwgLnRleHQtY291dC1pbnB1dHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgIH1cblxuICAgIC50ZXh0LXBheHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBcbiAgICB9XG4gIH1cbiAgLnRleHQtYm9sZHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLm51bWJlci1uaWdodHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmRpdi1uaWdodC1jb3VudHtcbiAgICAgIG1hcmdpbjogMnB4IDFweCAzcHggNXB4O1xuICAgIH1cbiAgICAuZGl2LWljb24tbW9vbntcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xuICAgIH1cbiAgICAudGV4dC1wYXh7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5idG4tc2VhcmNoe1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5MjMzO1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbn1cbiIsIi5oZWFkZXItaW5mb2JrZyAudG9vbGJhci1pbmZvYmtnIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZGVyLWluZm9ia2cgLnRpdGxlLWluZm9ia2cge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5oZWFkZXItaW5mb2JrZyAuaW1nLWNsb3NlIHtcbiAgbWF4LXdpZHRoOiAxNTAlO1xufVxuLmhlYWRlci1pbmZvYmtnIC5jbHMtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTRweDtcbiAgdG9wOiAwO1xufVxuLmhlYWRlci1pbmZvYmtnIC5jbHMtYnV0dG9uIC5idG4tY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY29udGVudC1pbmZvYmtnIC5tLXRvcC01IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNvbnRlbnQtaW5mb2JrZyAubS10b3AtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmNvbnRlbnQtaW5mb2JrZyAubS10b3AtMjIge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuLmNvbnRlbnQtaW5mb2JrZyAuY2xzLXJvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xufVxuLmNvbnRlbnQtaW5mb2JrZyAuZGl2LWltZy1sZWZ0IHtcbiAgd2lkdGg6IDQ4cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbi5jb250ZW50LWluZm9ia2cgLmRpdi1pbWctcmlnaHQge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbi5jb250ZW50LWluZm9ia2cgLmNvbC1jYWxlbmRhciB7XG4gIHdpZHRoOiAxNDBweDtcbn1cbi5jb250ZW50LWluZm9ia2cgLmNvbC1jYWxlbmRhciAuZm9udC10aHUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNvbnRlbnQtaW5mb2JrZyAuY29sLWNhbGVuZGFyIC50ZXh0LWNpbi1pbnB1dCwgLmNvbnRlbnQtaW5mb2JrZyAuY29sLWNhbGVuZGFyIC50ZXh0LWNvdXQtaW5wdXQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbn1cbi5jb250ZW50LWluZm9ia2cgLmNvbC1jYWxlbmRhciAudGV4dC1wYXgge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGVudC1pbmZvYmtnIC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbnRlbnQtaW5mb2JrZyAubnVtYmVyLW5pZ2h0IHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRlbnQtaW5mb2JrZyAubnVtYmVyLW5pZ2h0IC5kaXYtbmlnaHQtY291bnQge1xuICBtYXJnaW46IDJweCAxcHggM3B4IDVweDtcbn1cbi5jb250ZW50LWluZm9ia2cgLm51bWJlci1uaWdodCAuZGl2LWljb24tbW9vbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XG59XG4uY29udGVudC1pbmZvYmtnIC5udW1iZXItbmlnaHQgLnRleHQtcGF4IHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5jb250ZW50LWluZm9ia2cgLmJ0bi1zZWFyY2gge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTkyMzM7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/popupinfobkg/popupinfobkg.page.ts":
/*!***************************************************!*\
  !*** ./src/app/popupinfobkg/popupinfobkg.page.ts ***!
  \***************************************************/
/*! exports provided: PopupinfobkgPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupinfobkgPage", function() { return PopupinfobkgPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");









let PopupinfobkgPage = class PopupinfobkgPage {
    constructor(modalCtrl, zone, searchhotel, valueGlobal, navCtrl, gf, storage) {
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.storage = storage;
        this.cofdate = 0;
        this.cotdate = 0;
        this.adult = 2;
        this.child = 0;
        this.roomnumber = 1;
        this._daysConfig = [];
        this.nightCount = 0;
        this.allowclickcalendar = true;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (this.valueGlobal.listlunar) {
            for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
                this._daysConfig.push({
                    date: this.valueGlobal.listlunar[j].date,
                    subTitle: this.valueGlobal.listlunar[j].name,
                    cssClass: 'lunarcalendar'
                });
            }
        }
        if (this.searchhotel.adult) {
            this.adult = this.searchhotel.adult;
        }
        if (this.searchhotel.child != null) {
            this.child = this.searchhotel.child;
        }
        if (this.searchhotel.child == 0) {
            this.child = this.searchhotel.child;
        }
        if (this.searchhotel.roomnumber) {
            this.roomnumber = this.searchhotel.roomnumber;
        }
        if (this.searchhotel.CheckInDate) {
            this.cin = this.searchhotel.CheckInDate;
            this.cout = this.searchhotel.CheckOutDate;
            this.datecin = new Date(this.searchhotel.CheckInDate);
            this.datecout = new Date(this.searchhotel.CheckOutDate);
            this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecin).format('DD-MM');
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecout).format('DD-MM');
        }
        else {
            this.cin = new Date();
            var rescin = this.cin.setTime(this.cin.getTime() + (7 * 24 * 60 * 60 * 1000));
            var datein = new Date(rescin);
            this.cin = moment__WEBPACK_IMPORTED_MODULE_4__(datein).format('YYYY-MM-DD');
            this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(datein).format('DD-MM');
            this.datecin = new Date(rescin);
            this.cout = new Date();
            var res = this.cout.setTime(this.cout.getTime() + (8 * 24 * 60 * 60 * 1000));
            var date = new Date(res);
            this.cout = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('YYYY-MM-DD');
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('DD-MM');
            this.datecout = new Date(res);
        }
        this.nightCount = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecout).diff(moment__WEBPACK_IMPORTED_MODULE_4__(this.datecin), 'days');
        this.bindlunar();
    }
    closeModal() {
        this.navCtrl.back();
    }
    closecalendar() {
        this.modalCtrl.dismiss();
    }
    openPickupCalendar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            let fromdate = new Date(this.cin);
            let todate = new Date(this.cout);
            const options = {
                pickMode: 'range',
                title: 'Chọn ngày',
                monthFormat: 'MM / YYYY',
                weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                weekStart: 1,
                closeLabel: '',
                doneLabel: '',
                step: 0,
                defaultScrollTo: fromdate,
                defaultDateRange: { from: fromdate, to: todate },
                daysConfig: this._daysConfig,
            };
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModal"],
                animated: true,
                cssClass: 'hotel-calendar-custom',
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                this.allowclickcalendar = true;
                jquery__WEBPACK_IMPORTED_MODULE_5__('.days-btn').click(e => this.clickedElement(e));
                jquery__WEBPACK_IMPORTED_MODULE_5__('.hotel-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
                jquery__WEBPACK_IMPORTED_MODULE_5__('.hotel-calendar-custom .header-img-close').click((e => this.closecalendar()));
            });
            var se = this;
            const event = yield this.myCalendar.onDidDismiss();
            const date = event.data;
            if (event) {
                se.allowclickcalendar = true;
            }
            if (event.data) {
                const from = date.from;
                const to = date.to;
                se.cin = moment__WEBPACK_IMPORTED_MODULE_4__(from.dateObj).format('YYYY-MM-DD');
                se.cout = moment__WEBPACK_IMPORTED_MODULE_4__(to.dateObj).format('YYYY-MM-DD');
                se.zone.run(() => {
                    se.searchhotel.CheckInDate = se.cin;
                    se.searchhotel.CheckOutDate = se.cout;
                    se.datecin = new Date(se.cin);
                    se.datecout = new Date(se.cout);
                    se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM-YYYY');
                    se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM-YYYY');
                    se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM-YYYY');
                    se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM-YYYY');
                    se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
                    se.getDayName(se.datecin, se.datecout);
                });
            }
        });
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(obj.parentNode).hasClass('endSelection') || jquery__WEBPACK_IMPORTED_MODULE_5__(obj.parentNode).hasClass('startSelection')) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    this.cofdate = 0;
                    this.cotdate = 0;
                    this.cinthu = "";
                    this.coutthu = "";
                    if (jquery__WEBPACK_IMPORTED_MODULE_5__(obj.parentNode).hasClass('endSelection')) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_5__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_5__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_5__('.on-selected')[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_5__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_5__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_5__(obj)[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_5__('.on-selected').closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_5__(obj).closest('.month-box').children()[0].textContent;
                    }
                    else {
                        if (jquery__WEBPACK_IMPORTED_MODULE_5__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_5__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_5__(obj)[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_5__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_5__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_5__('.endSelection').children('.days-btn')[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_5__(obj).closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_5__('.endSelection').closest('.month-box').children()[0].textContent;
                    }
                    if (objTextMonthEndDate && objTextMonthEndDate.length > 0 && objTextMonthStartDate && objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.split('/')[0];
                        yearstartdate = objTextMonthStartDate.split('/')[1];
                        monthenddate = objTextMonthEndDate.split('/')[0];
                        yearenddate = objTextMonthEndDate.split('/')[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        if (fromdate && todate && moment__WEBPACK_IMPORTED_MODULE_4__(todate).diff(fromdate, 'days') > 0) {
                            var se = this;
                            setTimeout(() => {
                                se.modalCtrl.dismiss();
                            }, 100);
                            se.cin = moment__WEBPACK_IMPORTED_MODULE_4__(fromdate).format('YYYY-MM-DD');
                            se.cout = moment__WEBPACK_IMPORTED_MODULE_4__(todate).format('YYYY-MM-DD');
                            se.zone.run(() => {
                                se.searchhotel.CheckInDate = se.cin;
                                se.searchhotel.CheckOutDate = se.cout;
                                se.datecin = new Date(se.cin);
                                se.datecout = new Date(se.cout);
                                se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM');
                                se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM');
                                se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM');
                                se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM');
                                se.nightCount = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).diff(moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin), 'days');
                                this.bindlunar();
                            });
                            se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
                            se.storage.set('hasChangeDate', true);
                        }
                    }
                }
            }
        });
    }
    openmnu() {
        this.searchhotel.CheckInDate = this.cin;
        this.searchhotel.CheckOutDate = this.cout;
        this.navCtrl.navigateForward('/occupancy');
    }
    search() {
        this.searchhotel.changeInfoHotelList.emit(1);
        this.navCtrl.back();
    }
    bindlunar() {
        var se = this;
        if (se.valueGlobal.listlunar) {
            for (let i = 0; i < se.valueGlobal.listlunar.length; i++) {
                var checkdate = moment__WEBPACK_IMPORTED_MODULE_4__(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
                if (checkdate == se.cin) {
                    se.cofdate = 1;
                    if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                        var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                        if (ischecklunar) {
                            se.cinthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                        }
                        else {
                            se.cinthu = se.valueGlobal.listlunar[i].name;
                        }
                    }
                }
                else {
                    this.getDayName(this.datecin, this.datecout);
                }
                if (checkdate == se.cout) {
                    se.cotdate = 1;
                    if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                        var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                        if (ischecklunar) {
                            se.coutthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                        }
                        else {
                            se.coutthu = se.valueGlobal.listlunar[i].name;
                        }
                    }
                }
                else {
                    this.getDayName(this.datecin, this.datecout);
                }
            }
        }
        else {
            this.getDayName(this.datecin, this.datecout);
        }
    }
    getDayName(datecin, datecout) {
        if (!this.cinthu) {
            this.cinthu = moment__WEBPACK_IMPORTED_MODULE_4__(datecin).format('dddd');
            switch (this.cinthu) {
                case "Monday":
                    this.cinthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.cinthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.cinthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.cinthu = "Thứ 5";
                    break;
                case "Friday":
                    this.cinthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.cinthu = "Thứ 7";
                    break;
                default:
                    this.cinthu = "Chủ nhật";
                    break;
            }
        }
        if (!this.coutthu) {
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_4__(datecout).format('dddd');
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    break;
            }
        }
    }
    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }
};
PopupinfobkgPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-popupinfobkg',
        template: __webpack_require__(/*! ./popupinfobkg.page.html */ "./src/app/popupinfobkg/popupinfobkg.page.html"),
        styles: [__webpack_require__(/*! ./popupinfobkg.page.scss */ "./src/app/popupinfobkg/popupinfobkg.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]])
], PopupinfobkgPage);



/***/ })

}]);
//# sourceMappingURL=popupinfobkg-popupinfobkg-module.js.map