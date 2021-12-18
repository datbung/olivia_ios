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

module.exports = ".header-title {\n  padding-top: 12px;\n  text-align: center;\n  font-size: 20px;\n  right: 6%;\n  font-weight: bold;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.userreward-content {\n  padding: 16px 16px 16px 16px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  overflow: hidden;\n  border-radius: 25px;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  width: 50px;\n}\n\n.user-name {\n  font-weight: 500;\n  margin-top: 10px;\n}\n\n.user-point {\n  font-size: 12px;\n  color: #26bed6;\n}\n\n.div-wrapimg-reward {\n  position: relative;\n  height: 156px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.item-reward-img {\n  height: 100%;\n  margin-left: -18%;\n  max-width: 150%;\n}\n\n.col-left {\n  padding-right: 8px;\n  border-right: solid 1px rgba(0, 0, 0, 0.08);\n}\n\n.col-right {\n  padding-left: 8px;\n}\n\n.div-span-0, .div-span-2, .div-span-4 {\n  height: 24px;\n  margin-right: 8px;\n  padding-top: 4px;\n}\n\n.div-span-1, .div-span-3, .div-span-5 {\n  height: 24px;\n  margin-left: 8px;\n  padding-top: 4px;\n}\n\n.btn-reward {\n  border-color: #bdbdbd;\n  color: #bdbdbd;\n  background: #ffffff;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-reward:hover {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.div-button-reward {\n  padding-top: 16px;\n}\n\n.div-item-reward {\n  width: 50%;\n}\n\n.reward-title {\n  font-weight: 500;\n  padding-top: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.reward-pp {\n  padding-top: 4px;\n  font-size: 11px;\n  color: #4f4f4f;\n}\n\n.item-reward-point {\n  text-align: right;\n  padding: 0;\n  color: #26bed6;\n}\n\n.item-reward-price {\n  text-align: left;\n  padding: 0;\n}\n\n.div-span-item-reward {\n  height: 4px;\n  background-color: #26bed6;\n  margin-top: 8px;\n  border-radius: 5px;\n}\n\n.userreward-content .row-item-reward > div.div-item-reward:lastchild div.col-left {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvdXNlcnJld2FyZC91c2VycmV3YXJkLnNjc3MiLCJzcmMvYXBwL3VzZXJyZXdhcmQvdXNlcnJld2FyZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFSTtFQUNJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSw0QkFBQTtBQ0VSOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURESTtFQUNJLE9BQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDSVI7O0FERkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDS1I7O0FESEk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ01SOztBREpJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ09SOztBRExJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ1FSOztBRE5JO0VBQ0ksa0JBQUE7RUFDQSwyQ0FBQTtBQ1NSOztBRFBJO0VBQ0ksaUJBQUE7QUNVUjs7QURSSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDV1I7O0FEVEk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1lSOztBRFZJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDYVI7O0FEVkk7RUFDSSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDYVI7O0FEWEk7RUFDSSxpQkFBQTtBQ2NSOztBRFpJO0VBQ0ksVUFBQTtBQ2VSOztBRGJJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2dCUjs7QURkSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNpQlI7O0FEZkk7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDa0JSOztBRGhCSTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ21CUjs7QURqQkk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNvQlI7O0FEakJJO0VBQ0ksWUFBQTtBQ29CUiIsImZpbGUiOiJzcmMvYXBwL3VzZXJyZXdhcmQvdXNlcnJld2FyZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1hcnJvd3tcclxuICAgICAgICBtYXJnaW46IDNweCAxMXB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJyZXdhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi13cmFwaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIH1cclxuICAgIC5pbWctdXNlci1hdmF0YXIge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAudXNlci1uYW1le1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC51c2VyLXBvaW50e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIH1cclxuICAgIC5kaXYtd3JhcGltZy1yZXdhcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE1NnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tcmV3YXJkLWltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xOCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNTAlO1xyXG4gICAgfVxyXG4gICAgLmNvbC1sZWZ0e1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgfVxyXG4gICAgLmNvbC1yaWdodHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5kaXYtc3Bhbi0wLC5kaXYtc3Bhbi0yLC5kaXYtc3Bhbi00e1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1zcGFuLTEsLmRpdi1zcGFuLTMsLmRpdi1zcGFuLTV7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5idG4tcmV3YXJke1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgICBjb2xvcjogI2JkYmRiZDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLXJld2FyZDpob3ZlcntcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5kaXYtYnV0dG9uLXJld2FyZHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIH1cclxuICAgIC5kaXYtaXRlbS1yZXdhcmR7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5yZXdhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC5yZXdhcmQtcHB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1yZXdhcmQtcG9pbnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIH1cclxuICAgIC5pdGVtLXJld2FyZC1wcmljZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuZGl2LXNwYW4taXRlbS1yZXdhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VycmV3YXJkLWNvbnRlbnQgLnJvdy1pdGVtLXJld2FyZCA+IGRpdi5kaXYtaXRlbS1yZXdhcmQ6bGFzdGNoaWxkIGRpdi5jb2wtbGVmdHtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgIH1cclxuIiwiLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcmlnaHQ6IDYlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlci1hcnJvdyB7XG4gIG1hcmdpbjogM3B4IDExcHg7XG59XG5cbi51c2VycmV3YXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5pbWctdXNlci1hdmF0YXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi51c2VyLW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udXNlci1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi5kaXYtd3JhcGltZy1yZXdhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTU2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLml0ZW0tcmV3YXJkLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xOCU7XG4gIG1heC13aWR0aDogMTUwJTtcbn1cblxuLmNvbC1sZWZ0IHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4uY29sLXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5kaXYtc3Bhbi0wLCAuZGl2LXNwYW4tMiwgLmRpdi1zcGFuLTQge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uZGl2LXNwYW4tMSwgLmRpdi1zcGFuLTMsIC5kaXYtc3Bhbi01IHtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uYnRuLXJld2FyZCB7XG4gIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0bi1yZXdhcmQ6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTglO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5kaXYtYnV0dG9uLXJld2FyZCB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4uZGl2LWl0ZW0tcmV3YXJkIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnJld2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucmV3YXJkLXBwIHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cblxuLml0ZW0tcmV3YXJkLXBvaW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uaXRlbS1yZXdhcmQtcHJpY2Uge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGl2LXNwYW4taXRlbS1yZXdhcmQge1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi51c2VycmV3YXJkLWNvbnRlbnQgLnJvdy1pdGVtLXJld2FyZCA+IGRpdi5kaXYtaXRlbS1yZXdhcmQ6bGFzdGNoaWxkIGRpdi5jb2wtbGVmdCB7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

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