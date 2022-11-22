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

module.exports = ".header-title {\n  text-align: center;\n  font-size: 20px;\n  right: 6%;\n  align-self: center;\n}\n\n.title-header {\n  text-align: center;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n}\n\n.room-cancel-content {\n  padding: 16px 16px 16px 16px;\n}\n\n.p-top-8 {\n  padding-top: 8px;\n}\n\n.btn-cancel {\n  width: 90%;\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  border-color: #F79221;\n}\n\n.room-cancel-name {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 8px 0px;\n}\n\n.room-cancel-fee-price {\n  color: #e52822;\n  text-align: right;\n  padding-right: 0px;\n}\n\n.room-cancel-fee-title {\n  padding-left: 0px;\n}\n\nlabel.penalty-active-description > p {\n  margin: 4px 0px;\n}\n\n.penalty-active-description {\n  color: #e52822;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yb29tY2FuY2VsL3Jvb21jYW5jZWwuc2NzcyIsInNyYy9hcHAvcm9vbWNhbmNlbC9yb29tY2FuY2VsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRVY7O0FEQ0k7RUFDSSw0QkFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7QUNHUjs7QURESTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNJUjs7QURGSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDS1I7O0FESEk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ01SOztBREpJO0VBQ0ksaUJBQUE7QUNPUjs7QURMSTtFQUNJLGVBQUE7QUNRUjs7QUROSTtFQUNJLGNBQUE7QUNTUiIsImZpbGUiOiJzcmMvYXBwL3Jvb21jYW5jZWwvcm9vbWNhbmNlbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAuaGVhZGVyLWljb257XHJcbiAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLnJvb20tY2FuY2VsLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC04e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNhbmNlbHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGJvcmRlcjpub25lO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgfVxyXG4gICAgLnJvb20tY2FuY2VsLW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XHJcbiAgICB9XHJcbiAgICAucm9vbS1jYW5jZWwtZmVlLXByaWNle1xyXG4gICAgICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5yb29tLWNhbmNlbC1mZWUtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICBsYWJlbC5wZW5hbHR5LWFjdGl2ZS1kZXNjcmlwdGlvbiA+IHB7XHJcbiAgICAgICAgbWFyZ2luOiA0cHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnBlbmFsdHktYWN0aXZlLWRlc2NyaXB0aW9ue1xyXG4gICAgICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgfVxyXG4iLCIuaGVhZGVyLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHJpZ2h0OiA2JTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udGl0bGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWljb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ucm9vbS1jYW5jZWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7XG59XG5cbi5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG59XG5cbi5yb29tLWNhbmNlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4IDBweDtcbn1cblxuLnJvb20tY2FuY2VsLWZlZS1wcmljZSB7XG4gIGNvbG9yOiAjZTUyODIyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4ucm9vbS1jYW5jZWwtZmVlLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmxhYmVsLnBlbmFsdHktYWN0aXZlLWRlc2NyaXB0aW9uID4gcCB7XG4gIG1hcmdpbjogNHB4IDBweDtcbn1cblxuLnBlbmFsdHktYWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICNlNTI4MjI7XG59Il19 */"

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