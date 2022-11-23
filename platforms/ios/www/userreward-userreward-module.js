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

module.exports = ".header-title {\n  padding-top: 12px;\n  text-align: center;\n  font-size: 20px;\n  right: 6%;\n  font-weight: bold;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.userreward-content {\n  padding: 16px 16px 16px 16px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 50px;\n  width: 50px;\n  overflow: hidden;\n  border-radius: 25px;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  width: 50px;\n}\n\n.user-name {\n  font-weight: 500;\n  margin-top: 10px;\n}\n\n.user-point {\n  font-size: 12px;\n  color: #26bed6;\n}\n\n.div-wrapimg-reward {\n  position: relative;\n  height: 156px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.item-reward-img {\n  height: 100%;\n  margin-left: -18%;\n  max-width: 150%;\n}\n\n.col-left {\n  padding-right: 8px;\n  border-right: solid 1px rgba(0, 0, 0, 0.08);\n}\n\n.col-right {\n  padding-left: 8px;\n}\n\n.div-span-0, .div-span-2, .div-span-4 {\n  height: 24px;\n  margin-right: 8px;\n  padding-top: 4px;\n}\n\n.div-span-1, .div-span-3, .div-span-5 {\n  height: 24px;\n  margin-left: 8px;\n  padding-top: 4px;\n}\n\n.btn-reward {\n  border-color: #bdbdbd;\n  color: #bdbdbd;\n  background: #ffffff;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-reward:hover {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.div-button-reward {\n  padding-top: 16px;\n}\n\n.div-item-reward {\n  width: 50%;\n}\n\n.reward-title {\n  font-weight: 500;\n  padding-top: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.reward-pp {\n  padding-top: 4px;\n  font-size: 11px;\n  color: #4f4f4f;\n}\n\n.item-reward-point {\n  text-align: right;\n  padding: 0;\n  color: #26bed6;\n}\n\n.item-reward-price {\n  text-align: left;\n  padding: 0;\n}\n\n.div-span-item-reward {\n  height: 4px;\n  background-color: #26bed6;\n  margin-top: 8px;\n  border-radius: 5px;\n}\n\n.userreward-content .row-item-reward > div.div-item-reward:lastchild div.col-left {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC91c2VycmV3YXJkL3VzZXJyZXdhcmQuc2NzcyIsInNyYy9hcHAvdXNlcnJld2FyZC91c2VycmV3YXJkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0FSOztBREVJO0VBQ0ksZ0JBQUE7QUNDUjs7QURDSTtFQUNJLDRCQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dSOztBRERJO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNJUjs7QURGSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLUjs7QURISTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDTVI7O0FESkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDT1I7O0FETEk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDUVI7O0FETkk7RUFDSSxrQkFBQTtFQUNBLDJDQUFBO0FDU1I7O0FEUEk7RUFDSSxpQkFBQTtBQ1VSOztBRFJJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNXUjs7QURUSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWVI7O0FEVkk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNhUjs7QURWSTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNhUjs7QURYSTtFQUNJLGlCQUFBO0FDY1I7O0FEWkk7RUFDSSxVQUFBO0FDZVI7O0FEYkk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDZ0JSOztBRGRJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2lCUjs7QURmSTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNrQlI7O0FEaEJJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FDbUJSOztBRGpCSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ29CUjs7QURqQkk7RUFDSSxZQUFBO0FDb0JSIiwiZmlsZSI6InNyYy9hcHAvdXNlcnJld2FyZC91c2VycmV3YXJkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICByaWdodDogNiU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWFycm93e1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDExcHg7XHJcbiAgICB9XHJcbiAgICAudXNlcnJld2FyZC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXdyYXBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLmltZy11c2VyLWF2YXRhciB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgIH1cclxuICAgIC51c2VyLW5hbWV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXItcG9pbnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgfVxyXG4gICAgLmRpdi13cmFwaW1nLXJld2FyZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTU2cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1yZXdhcmQtaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE4JTtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MCU7XHJcbiAgICB9XHJcbiAgICAuY29sLWxlZnR7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICB9XHJcbiAgICAuY29sLXJpZ2h0e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1zcGFuLTAsLmRpdi1zcGFuLTIsLmRpdi1zcGFuLTR7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXNwYW4tMSwuZGl2LXNwYW4tMywuZGl2LXNwYW4tNXtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1yZXdhcmR7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tcmV3YXJkOmhvdmVye1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmRpdi1idXR0b24tcmV3YXJke1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1pdGVtLXJld2FyZHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnJld2FyZC10aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLnJld2FyZC1wcHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgIH1cclxuICAgIC5pdGVtLXJld2FyZC1wb2ludHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tcmV3YXJkLXByaWNle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5kaXYtc3Bhbi1pdGVtLXJld2FyZHtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXJyZXdhcmQtY29udGVudCAucm93LWl0ZW0tcmV3YXJkID4gZGl2LmRpdi1pdGVtLXJld2FyZDpsYXN0Y2hpbGQgZGl2LmNvbC1sZWZ0e1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgfVxyXG4iLCIuaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICByaWdodDogNiU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyLWFycm93IHtcbiAgbWFyZ2luOiAzcHggMTFweDtcbn1cblxuLnVzZXJyZXdhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmltZy11c2VyLWF2YXRhciB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICB3aWR0aDogNTBweDtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi51c2VyLXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLmRpdi13cmFwaW1nLXJld2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXRlbS1yZXdhcmQtaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTE4JTtcbiAgbWF4LXdpZHRoOiAxNTAlO1xufVxuXG4uY29sLWxlZnQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi5jb2wtcmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmRpdi1zcGFuLTAsIC5kaXYtc3Bhbi0yLCAuZGl2LXNwYW4tNCB7XG4gIGhlaWdodDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5kaXYtc3Bhbi0xLCAuZGl2LXNwYW4tMywgLmRpdi1zcGFuLTUge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5idG4tcmV3YXJkIHtcbiAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xuICBjb2xvcjogI2JkYmRiZDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuLXJld2FyZDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmRpdi1idXR0b24tcmV3YXJkIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5kaXYtaXRlbS1yZXdhcmQge1xuICB3aWR0aDogNTAlO1xufVxuXG4ucmV3YXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5yZXdhcmQtcHAge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuXG4uaXRlbS1yZXdhcmQtcG9pbnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi5pdGVtLXJld2FyZC1wcmljZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kaXYtc3Bhbi1pdGVtLXJld2FyZCB7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnVzZXJyZXdhcmQtY29udGVudCAucm93LWl0ZW0tcmV3YXJkID4gZGl2LmRpdi1pdGVtLXJld2FyZDpsYXN0Y2hpbGQgZGl2LmNvbC1sZWZ0IHtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */"

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