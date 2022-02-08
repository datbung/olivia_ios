(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userreward-userreward-module"],{

/***/ "./src/app/userreward/userreward.html":
/*!********************************************!*\
  !*** ./src/app/userreward/userreward.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-row>\r\n        <ion-col col-1 class=\"header-arrow\" (click)=\"goback()\" >\r\n            <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n        </ion-col>\r\n        <ion-col class=\"header-title\"><label>Ưu đãi cho bạn</label>\r\n        </ion-col>\r\n    </ion-row>\r\n    </ion-header>\r\n    \r\n    <ion-content >\r\n        <div class=\"userreward-content\">\r\n            <ion-row *ngIf=\"userInfoData\">\r\n                    <ion-col col-2>\r\n                        <div class=\"div-wrapimg\"><img class=\"img-user-avatar\" src=\"{{userInfoData.avatar}}\"></div>\r\n                    </ion-col>\r\n                    <ion-col col-10 class=\"weather-img\">\r\n                        <div class=\"user-name\">{{userInfoData.fullname}}</div>\r\n                        <div class=\"user-point\">{{userInfoData.point}} point →</div>\r\n                    </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"row-item-reward\" >\r\n                <div *ngFor=\"let item of userRewardData; let idx = index\" class=\"div-item-reward\">\r\n                    <div [ngClass]=\"idx%2? 'col-right' : 'col-left'\">\r\n                        <div class=\"div-wrapimg-reward\"><img class=\"item-reward-img\" src=\"{{item.avatar}}\"></div>\r\n                        <div class=\"reward-title\">{{item.title}}</div>\r\n                        <div class=\"reward-pp\">\r\n                            <ion-row>\r\n                                <ion-col col-7 class=\"item-reward-price\">Trị giá {{item.price| number:\"1.0\"}}đ</ion-col>\r\n                                <ion-col col-5 class=\"item-reward-point\">{{item.unitPoint| number:\"1.0\"}} điểm</ion-col>\r\n                            </ion-row>\r\n                        </div>\r\n                        <div class=\"div-span-item-reward\"></div>\r\n                        <!-- <div class=\"div-button-reward\"><button ion-button round outline class=\"button btn-reward\" [ngClass]=\"reward.isHover ? 'hover' : ''\" #reward (mouseover)=\"reward.isHover = true\" (mouseout)=\"reward.isHover = false\">Đổi quà</button></div> -->\r\n                        <div class=\"div-button-reward\"><button ion-button round outline class=\"button btn-reward\" (click)=\"exchangeGift(item)\" >Đổi quà</button></div>\r\n                    </div>\r\n                    <div class=\"div-span-{{idx}}\"><hr></div>\r\n                </div>\r\n                \r\n            </ion-row>\r\n        </div>\r\n    </ion-content>"

/***/ }),

/***/ "./src/app/userreward/userreward.module.ts":
/*!*************************************************!*\
  !*** ./src/app/userreward/userreward.module.ts ***!
  \*************************************************/
/*! exports provided: UserRewardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRewardPageModule", function() { return UserRewardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userreward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userreward */ "./src/app/userreward/userreward.ts");







let UserRewardPageModule = class UserRewardPageModule {
};
UserRewardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _userreward__WEBPACK_IMPORTED_MODULE_6__["UserRewardPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _userreward__WEBPACK_IMPORTED_MODULE_6__["UserRewardPage"]
                }]),
        ],
    })
], UserRewardPageModule);



/***/ }),

/***/ "./src/app/userreward/userreward.scss":
/*!********************************************!*\
  !*** ./src/app/userreward/userreward.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  padding-top: 12px;\n  text-align: center;\n  font-size: 20px;\n  right: 6%;\n  font-weight: bold;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.userreward-content {\n  padding: 16px 16px 16px 16px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  overflow: hidden;\n  border-radius: 25px;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  width: 50px;\n}\n\n.user-name {\n  font-weight: 500;\n  margin-top: 10px;\n}\n\n.user-point {\n  font-size: 12px;\n  color: #26bed6;\n}\n\n.div-wrapimg-reward {\n  position: relative;\n  height: 156px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.item-reward-img {\n  height: 100%;\n  margin-left: -18%;\n  max-width: 150%;\n}\n\n.col-left {\n  padding-right: 8px;\n  border-right: solid 1px rgba(0, 0, 0, 0.08);\n}\n\n.col-right {\n  padding-left: 8px;\n}\n\n.div-span-0, .div-span-2, .div-span-4 {\n  height: 24px;\n  margin-right: 8px;\n  padding-top: 4px;\n}\n\n.div-span-1, .div-span-3, .div-span-5 {\n  height: 24px;\n  margin-left: 8px;\n  padding-top: 4px;\n}\n\n.btn-reward {\n  border-color: #bdbdbd;\n  color: #bdbdbd;\n  background: #ffffff;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-reward:hover {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.div-button-reward {\n  padding-top: 16px;\n}\n\n.div-item-reward {\n  width: 50%;\n}\n\n.reward-title {\n  font-weight: 500;\n  padding-top: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.reward-pp {\n  padding-top: 4px;\n  font-size: 11px;\n  color: #4f4f4f;\n}\n\n.item-reward-point {\n  text-align: right;\n  padding: 0;\n  color: #26bed6;\n}\n\n.item-reward-price {\n  text-align: left;\n  padding: 0;\n}\n\n.div-span-item-reward {\n  height: 4px;\n  background-color: #26bed6;\n  margin-top: 8px;\n  border-radius: 5px;\n}\n\n.userreward-content .row-item-reward > div.div-item-reward:lastchild div.col-left {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3VzZXJyZXdhcmQvdXNlcnJld2FyZC5zY3NzIiwic3JjL2FwcC91c2VycmV3YXJkL3VzZXJyZXdhcmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDQVI7O0FERUk7RUFDSSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksNEJBQUE7QUNFUjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR1I7O0FEREk7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0lSOztBREZJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0tSOztBREhJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNNUjs7QURKSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNPUjs7QURMSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNRUjs7QUROSTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7QUNTUjs7QURQSTtFQUNJLGlCQUFBO0FDVVI7O0FEUkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1dSOztBRFRJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNZUjs7QURWSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2FSOztBRFZJO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2FSOztBRFhJO0VBQ0ksaUJBQUE7QUNjUjs7QURaSTtFQUNJLFVBQUE7QUNlUjs7QURiSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNnQlI7O0FEZEk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDaUJSOztBRGZJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ2tCUjs7QURoQkk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUNtQlI7O0FEakJJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDb0JSOztBRGpCSTtFQUNJLFlBQUE7QUNvQlIiLCJmaWxlIjoic3JjL2FwcC91c2VycmV3YXJkL3VzZXJyZXdhcmQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA2JTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItYXJyb3d7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggMTFweDtcclxuICAgIH1cclxuICAgIC51c2VycmV3YXJkLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcclxuICAgIH1cclxuICAgIC5kaXYtd3JhcGltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLXVzZXItYXZhdGFyIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItbmFtZXtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1wb2ludHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAuZGl2LXdyYXBpbWctcmV3YXJkIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTZweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICAgIC5pdGVtLXJld2FyZC1pbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTglO1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwJTtcclxuICAgIH1cclxuICAgIC5jb2wtbGVmdHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIH1cclxuICAgIC5jb2wtcmlnaHR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXNwYW4tMCwuZGl2LXNwYW4tMiwuZGl2LXNwYW4tNHtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5kaXYtc3Bhbi0xLC5kaXYtc3Bhbi0zLC5kaXYtc3Bhbi01e1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXJld2FyZHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1yZXdhcmQ6aG92ZXJ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuZGl2LWJ1dHRvbi1yZXdhcmR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWl0ZW0tcmV3YXJke1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICAucmV3YXJkLXRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAucmV3YXJkLXBwe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tcmV3YXJkLXBvaW50e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1yZXdhcmQtcHJpY2V7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmRpdi1zcGFuLWl0ZW0tcmV3YXJke1xyXG4gICAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAudXNlcnJld2FyZC1jb250ZW50IC5yb3ctaXRlbS1yZXdhcmQgPiBkaXYuZGl2LWl0ZW0tcmV3YXJkOmxhc3RjaGlsZCBkaXYuY29sLWxlZnR7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICB9XHJcbiIsIi5oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHJpZ2h0OiA2JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXItYXJyb3cge1xuICBtYXJnaW46IDNweCAxMXB4O1xufVxuXG4udXNlcnJld2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcbn1cblxuLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uaW1nLXVzZXItYXZhdGFyIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4udXNlci1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnVzZXItcG9pbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uZGl2LXdyYXBpbWctcmV3YXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE1NnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLXJld2FyZC1pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTglO1xuICBtYXgtd2lkdGg6IDE1MCU7XG59XG5cbi5jb2wtbGVmdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLmNvbC1yaWdodCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uZGl2LXNwYW4tMCwgLmRpdi1zcGFuLTIsIC5kaXYtc3Bhbi00IHtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmRpdi1zcGFuLTEsIC5kaXYtc3Bhbi0zLCAuZGl2LXNwYW4tNSB7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmJ0bi1yZXdhcmQge1xuICBib3JkZXItY29sb3I6ICNiZGJkYmQ7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB3aWR0aDogOTglO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4tcmV3YXJkOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZGl2LWJ1dHRvbi1yZXdhcmQge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLmRpdi1pdGVtLXJld2FyZCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5yZXdhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnJld2FyZC1wcCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG5cbi5pdGVtLXJld2FyZC1wb2ludCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLml0ZW0tcmV3YXJkLXByaWNlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRpdi1zcGFuLWl0ZW0tcmV3YXJkIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udXNlcnJld2FyZC1jb250ZW50IC5yb3ctaXRlbS1yZXdhcmQgPiBkaXYuZGl2LWl0ZW0tcmV3YXJkOmxhc3RjaGlsZCBkaXYuY29sLWxlZnQge1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/userreward/userreward.ts":
/*!******************************************!*\
  !*** ./src/app/userreward/userreward.ts ***!
  \******************************************/
/*! exports provided: UserRewardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRewardPage", function() { return UserRewardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");








let UserRewardPage = class UserRewardPage {
    constructor(platform, navCtrl, toastCtrl, zone, storage, alertCtrl, modalCtrl, valueGlobal, gf) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.valueGlobal = valueGlobal;
        this.gf = gf;
        this.isShowConfirm = false;
        let self = this;
        self.loadUserInfo();
        self.fetuserRewardData();
        self.storage.get('userRewardData').then((data) => {
            if (data) {
                self.userRewardData = data;
            }
            else {
                self.fetuserRewardData();
            }
        });
        gf.googleAnalytion('userreward', 'load', '');
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.GetUserInfo();
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roomdetailreview",
                            func: "GetUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                se.loadUserInfo();
                            });
                        }
                    }
                });
            }
        });
    }
    ionViewWillLeave() {
        this.zone.run(() => {
            clearInterval(this.intervalID);
        });
    }
    loadUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userreward",
                            func: "loadUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userreward";
                        error.func = "loadUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.userInfoData = data;
                            });
                        }
                        else {
                            if (se.isShowConfirm)
                                return;
                            se.isShowConfirm = true;
                        }
                    }
                });
            }
        });
    }
    fetuserRewardData() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetRewardItems',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userreward",
                            func: "fetuserRewardData",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userreward";
                        error.func = "fetuserRewardData";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.userRewardData = data;
                            });
                            se.storage.set('userRewardData', data);
                        }
                        else {
                            if (se.isShowConfirm)
                                return;
                            se.isShowConfirm = true;
                        }
                    }
                });
            }
        });
    }
    goback() {
        var self = this;
        self.navCtrl.back();
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.",
                buttons: [{
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.navCtrl.navigateForward('/login');
                        }
                    },
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    exchangeGift(item) {
        var se = this;
        if (se.userInfoData) {
            if (se.userInfoData.point >= item.unitPoint) {
                this.gf.setParams({ record: item, userinfo: se.userInfoData }, 'exchangegift');
                this.navCtrl.navigateBack('/exchangegift');
            }
            else {
                se.presentToast('Rất tiếc, quý khách chưa đủ điểm để đổi quà tặng này!');
            }
        }
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                            se.loadUserInfo();
                        });
                    }
                });
            }
        });
    }
};
UserRewardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userreward',
        template: __webpack_require__(/*! ./userreward.html */ "./src/app/userreward/userreward.html"),
        styles: [__webpack_require__(/*! ./userreward.scss */ "./src/app/userreward/userreward.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["ValueGlobal"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"]])
], UserRewardPage);



/***/ })

}]);
//# sourceMappingURL=userreward-userreward-module.js.map