(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roomcancel-roomcancel-module"],{

/***/ "./src/app/roomcancel/roomcancel.html":
/*!********************************************!*\
  !*** ./src/app/roomcancel/roomcancel.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-row>\r\n        <ion-col style=\"text-align: center;height: 48px;\">\r\n          <div style=\"align-self: center\" >\r\n            <div style=\"position: absolute;height: 48px;width: 48px;\"  (click)=\"goback()\">\r\n                <!-- <ion-icon (click)=\"goback()\" color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\r\n                <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-8px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n            </div>\r\n            \r\n            <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Chính sách hủy phòng</label></div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-header>\r\n    <ion-content>\r\n          <div *ngIf=\"roomcancelhbed==1\">\r\n              <div class=\"room-cancel-content\">\r\n                  <div class=\"room-cancel-name\">{{ roomInfo.RoomName}}</div>\r\n                  <div class=\"room-cancel-fee\">\r\n                      <ion-row class=\"penal-detail\"\r\n                          *ngIf='roomInfo && roomInfo.Penaltys[0] && roomInfo.Penaltys[0].PenaltyShortDateStr && roomInfo.Penaltys[0].Penalty_Type != 2'>\r\n                          <label class=\"penalty-text link-penalty\">Hủy miễn phí trước ngày\r\n                              {{roomInfo.Penaltys[0].PenaltyShortDateStr}}</label>\r\n                      </ion-row>\r\n                      <ion-row>\r\n                          <div class=\"penalty-active arrow\">\r\n                              <label *ngFor=\"let pen of roomInfo.Penaltys; let k = index\"\r\n                                  class=\"penalty-active-description\" [innerHTML]=\"pen.PenaltyDescription\"></label>\r\n                          </div>\r\n                      </ion-row>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div *ngIf=\"roomcancelhbed==0\">\r\n              <div class=\"room-cancel-content\">\r\n                  <!-- <div class=\"room-cancel-title\">Bạn muốn hủy toàn bộ đặt phòng</div> -->\r\n                  <div class=\"room-cancel-name\">{{ roomInfo.RoomName}}</div>\r\n                  <div class=\"room-cancel-fee\">\r\n                      <ion-row class=\"penal-detail\">\r\n                          <label class=\"penalty-text link-penalty\" style=\"color: #e52822\">{{textcancel}}</label>\r\n                      </ion-row>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"room-cancel-content\" *ngIf=\"showFromMytrip\">\r\n              <div *ngIf=\"textcancel\">\r\n                <div class=\"room-cancel-name\">{{ roomInfo.RoomName}}</div>\r\n                <div class=\"room-cancel-fee\">\r\n                    <div class=\"penal-detail\">\r\n                        <label class=\"penalty-text link-penalty\">{{textcancel}}</label>\r\n                    </div>\r\n                    <div class=\"p-top-8\">\r\n                        <label class=\"penalty-text link-penalty\">*Phí quản trị 20.000 VND được áp dụng cho mỗi trường hợp\r\n                            thay đổi hoặc hủy phòng cộng với phí phạt theo chính sách thay đổi hoặc hủy đặt phòng của Khách\r\n                            sạn & chi phí phát sinh khác (nếu có).</label>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div *ngIf=\"!textcancel && PenaltyDescription\">\r\n                <div>\r\n                    <div class=\"room-cancel-name\">{{ roomInfo.RoomName}}</div>\r\n                    <div class=\"room-cancel-fee\">\r\n                        <ion-row class=\"penal-detail\"\r\n                            *ngIf='roomInfo && roomInfo.Penaltys[0] && roomInfo.Penaltys[0].PenaltyShortDateStr && roomInfo.Penaltys[0].Penalty_Type != 2'>\r\n                            <label class=\"penalty-text link-penalty\">Hủy miễn phí trước ngày\r\n                                {{roomInfo.Penaltys[0].PenaltyShortDateStr}}</label>\r\n                        </ion-row>\r\n                        <ion-row>\r\n                            <div class=\"penalty-active arrow\">\r\n                                <label *ngFor=\"let pen of roomInfo.Penaltys; let k = index\"\r\n                                    class=\"penalty-active-description\" [innerHTML]=\"pen.PenaltyDescription\"></label>\r\n                            </div>\r\n                        </ion-row>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n  </ion-content>\r\n    <!-- <ion-footer>\r\n        \r\n        <div style=\"background-color: #ffffff; text-align: center\">\r\n          <button (click)=\"cancel()\" ion-button round outline class=\"btn-cancel\">Hủy đặt phòng</button>\r\n        </div>\r\n    </ion-footer> -->"

/***/ }),

/***/ "./src/app/roomcancel/roomcancel.module.ts":
/*!*************************************************!*\
  !*** ./src/app/roomcancel/roomcancel.module.ts ***!
  \*************************************************/
/*! exports provided: RoomCancelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomCancelPageModule", function() { return RoomCancelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roomcancel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roomcancel */ "./src/app/roomcancel/roomcancel.ts");







let RoomCancelPageModule = class RoomCancelPageModule {
};
RoomCancelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roomcancel__WEBPACK_IMPORTED_MODULE_6__["RoomCancelPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
                    path: '',
                    component: _roomcancel__WEBPACK_IMPORTED_MODULE_6__["RoomCancelPage"]
                }]),
        ],
    })
], RoomCancelPageModule);



/***/ }),

/***/ "./src/app/roomcancel/roomcancel.scss":
/*!********************************************!*\
  !*** ./src/app/roomcancel/roomcancel.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  text-align: center;\n  font-size: 20px;\n  right: 6%;\n  align-self: center;\n}\n\n.title-header {\n  text-align: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n}\n\n.room-cancel-content {\n  padding: 16px 16px 16px 16px;\n}\n\n.p-top-8 {\n  padding-top: 8px;\n}\n\n.btn-cancel {\n  width: 90%;\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  border-color: #F79221;\n}\n\n.room-cancel-name {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 8px 0px;\n}\n\n.room-cancel-fee-price {\n  color: #e52822;\n  text-align: right;\n  padding-right: 0px;\n}\n\n.room-cancel-fee-title {\n  padding-left: 0px;\n}\n\nlabel.penalty-active-description > p {\n  margin: 4px 0px;\n}\n\n.penalty-active-description {\n  color: #e52822;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvcm9vbWNhbmNlbC9yb29tY2FuY2VsLnNjc3MiLCJzcmMvYXBwL3Jvb21jYW5jZWwvcm9vbWNhbmNlbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFDSSxrQkFBQTtBQ0NSOztBRENJO0VBQ00sV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0VWOztBRENJO0VBQ0ksNEJBQUE7QUNFUjs7QURBSTtFQUNJLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDSVI7O0FERkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0tSOztBREhJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNUjs7QURKSTtFQUNJLGlCQUFBO0FDT1I7O0FETEk7RUFDSSxlQUFBO0FDUVI7O0FETkk7RUFDSSxjQUFBO0FDU1IiLCJmaWxlIjoic3JjL2FwcC9yb29tY2FuY2VsL3Jvb21jYW5jZWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA2JTtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgLmhlYWRlci1pY29ue1xyXG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgIC5yb29tLWNhbmNlbC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtOHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jYW5jZWx7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcclxuICAgIH1cclxuICAgIC5yb29tLWNhbmNlbC1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnJvb20tY2FuY2VsLWZlZS1wcmljZXtcclxuICAgICAgICBjb2xvcjogI2U1MjgyMjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAucm9vbS1jYW5jZWwtZmVlLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgbGFiZWwucGVuYWx0eS1hY3RpdmUtZGVzY3JpcHRpb24gPiBwe1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDBweDtcclxuICAgIH1cclxuICAgIC5wZW5hbHR5LWFjdGl2ZS1kZXNjcmlwdGlvbntcclxuICAgICAgICBjb2xvcjogI2U1MjgyMjtcclxuICAgIH1cclxuIiwiLmhlYWRlci10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICByaWdodDogNiU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRpdGxlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnJvb20tY2FuY2VsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4O1xufVxuXG4ucC10b3AtOCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xufVxuXG4ucm9vbS1jYW5jZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG59XG5cbi5yb29tLWNhbmNlbC1mZWUtcHJpY2Uge1xuICBjb2xvcjogI2U1MjgyMjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLnJvb20tY2FuY2VsLWZlZS10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5sYWJlbC5wZW5hbHR5LWFjdGl2ZS1kZXNjcmlwdGlvbiA+IHAge1xuICBtYXJnaW46IDRweCAwcHg7XG59XG5cbi5wZW5hbHR5LWFjdGl2ZS1kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiAjZTUyODIyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/roomcancel/roomcancel.ts":
/*!******************************************!*\
  !*** ./src/app/roomcancel/roomcancel.ts ***!
  \******************************************/
/*! exports provided: RoomCancelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomCancelPage", function() { return RoomCancelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");





let RoomCancelPage = class RoomCancelPage {
    constructor(navCtrl, gf, Roomif) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.Roomif = Roomif;
        this.roomInfo = null;
        this.totalPrice = '';
        this.roomcancelhbed = this.Roomif.roomcancelhbed;
        this.textcancel = this.Roomif.textcancel;
        if (this.gf.getParams('roomInfo')) {
            this.roomInfo = gf.getParams('roomInfo');
            if (this.roomInfo.PenaltyDescription) {
                this.roomcancelhbed = true;
            }
            this.showFromMytrip = this.roomInfo.showFromMytrip;
            this.textcancel = this.roomInfo.textcancel;
            if (this.showFromMytrip && this.roomInfo.PenaltyDescription) {
                this.PenaltyDescription = this.roomInfo.PenaltyDescription ? this.roomInfo.PenaltyDescription.replace("<p>", "").replace("</p>", "") : "";
            }
        }
        gf.googleAnalytion('roomcancel', 'load', '');
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    cancel() {
        this.navCtrl.back();
    }
};
RoomCancelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roomcancel',
        template: __webpack_require__(/*! ./roomcancel.html */ "./src/app/roomcancel/roomcancel.html"),
        styles: [__webpack_require__(/*! ./roomcancel.scss */ "./src/app/roomcancel/roomcancel.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["RoomInfo"]])
], RoomCancelPage);



/***/ })

}]);
//# sourceMappingURL=roomcancel-roomcancel-module.js.map