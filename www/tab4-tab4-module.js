(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"],{

/***/ "./src/app/tab4/tab4.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/*! exports provided: Tab4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function() { return Tab4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab4.page */ "./src/app/tab4/tab4.page.ts");







const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]
    }
];
let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
    })
], Tab4PageModule);



/***/ }),

/***/ "./src/app/tab4/tab4.page.html":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the InboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <!-- <ion-toolbar> -->\n        <ion-row style=\"height: 56px;\">\n          <ion-title style=\"text-align: center;font-size: 20px;font-weight: bold\">Thông báo</ion-title>\n        </ion-row>\n      <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content style=\"background-color: #ffffff\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content\n        pullingIcon=\"none\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"\"></ion-refresher-content>\n</ion-refresher>\n  <!-- <div *ngIf=\"hasloadRQdata && listRequestTrips.length ==0\" class=\"trip-empty\"> -->\n    <div class=\"inbox-content-empty\" *ngIf=\"items.length == 0 && loaddatadone\">\n        <div class=\"img-inbox-empty\">\n            <img class=\"img-empty\" src=\"./assets/empty/trip_empty.svg\">\n        </div>\n        <div class=\"text-trip-empty\">\n          <label>Hiện chưa có thư mới nào.</label>\n        </div>\n    </div>\n    <div class=\"inbox-content\" *ngIf=\"!loaddatadone\">\n      <ion-row *ngFor=\"let item of itemskeleton\">\n          <ion-row class=\"cls-border-bottom\" style=\"width:100%\">\n                  <ion-item style=\"--padding-start:0;--background: transparent;--border-style:none;--padding-end:0;width:100%\">\n                    <ion-row style=\"width:100%\">\n                        <ion-col size=\"1.2\" style=\"padding: 0\">\n                            <div>\n                              <ion-skeleton-text animated style=\"width:100%;margin-top: 6px;height: 24px;width:24px;border-radius:24px\"></ion-skeleton-text>\n                            </div>\n                          </ion-col>\n                          <ion-col size=\"10.8\" style=\"padding: 0\">\n                            <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                            <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                            <div><ion-skeleton-text animated style=\"width:25%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                        </ion-col>\n                    </ion-row>\n                  </ion-item>\n        </ion-row>\n      </ion-row>\n    </div>\n    \n    <div class=\"inbox-content\" *ngIf=\"items && items.length > 0 && loaddatadone\">\n        <ion-row *ngFor=\"let item of items\" [ngClass]=\"items && items.length > 0 && !item.status ? 'item-unread' : '' \">\n          <div *ngIf=\"!item.deleted\" style=\"width:100%\">\n            <ion-row class=\"cls-border-bottom\">\n              <ion-item-sliding>\n                    <ion-item style=\"--padding-start:0;--background: transparent;--border-style:none;--padding-end:0\"  (click)=\"updateStatusMessage(item)\">\n                      <ion-row style=\"width:100%\">\n                          <ion-col size=\"1.2\" style=\"padding: 0\">\n                              <div>\n                                <img style=\"margin-top: 6px;\" name=\"home\" src=\"./assets/imgs/ic_home.svg\" *ngIf=\"  item.notifyAction == 'approve' || item.notifyAction == 'cancel' || item.notifyAction == 'sharereviewofhotel' || item.notifyAction== 'waitingconfirmtopayment' || item.notifyAction == 'paymented' || item.notifyAction == 'bookingbegoingroom' \" >\n                                <img style=\"margin-top: 6px;\" name=\"bus\" src=\"./assets/imgs/ic_bus2.svg\" *ngIf=\"item.notifyType == 'bookingbegoingcombotransfer'\" >\n                                <img style=\"margin-top: 6px;\" name=\"message\" src=\"./assets/imgs/ic_message.svg\" *ngIf=\"item.notifyType == 'blog'\" >\n                                <img style=\"margin-top: 6px;\" name=\"paper\" src=\"./assets/imgs/ic_paper.svg\" *ngIf=\"item.notifyAction == 'bookingbegoingcombofly' || item.notifyAction == 'flychangeinfo'\" >\n                                <img style=\"margin-top: 6px;\" name=\"message\" src=\"./assets/imgs/update.svg\" *ngIf=\"item.notifyType == 'updateNewVersion'\" >\n                              </div>\n                            </ion-col>\n                            <ion-col size=\"10.8\" style=\"padding: 0\">\n                              <div><ion-label class=\"inbox-title\">{{item.title}}</ion-label></div>\n                              <div><ion-label [ngClass]=\"!item.status ? 'inbox-message hidden-text' : 'inbox-message readed-text' \">{{item.message}}</ion-label></div>\n                              <div><ion-label class=\"inbox-date\">{{item.date}}</ion-label></div>\n                          </ion-col>\n                      </ion-row>\n                    </ion-item>\n                    <ion-item-options side=\"end\">\n                      <ion-item-option style=\"margin-right:8px;background-color:#4c8dff\" (click)=\"updateStatusMessage(item)\">\n                        Xem\n                      </ion-item-option>\n                      <ion-item-option color=\"danger\" (click)=\"deleteNotifi(item)\">\n                        Xóa\n                      </ion-item-option>\n                      \n                    </ion-item-options>\n              </ion-item-sliding>\n          </ion-row>\n          </div>\n        </ion-row>\n    </div>\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"!loadend\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <!-- <div class=\"button-trip-empty\">\n        <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"goback()\">Khám phá ngay</button>\n    </div> -->\n    \n  <!-- </div> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab4/tab4.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  padding: 12px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.text-trip-empty {\n  text-align: center;\n  color: #bdbdbd;\n}\n\n.img-inbox-empty {\n  padding-top: 20%;\n}\n\n.cls-icon {\n  background-color: #003c71;\n  border-radius: 20px;\n  width: 24px;\n  height: 24px;\n  text-align: center;\n}\n\n.cls-row-content {\n  padding: 0px 16px 16px 16px;\n}\n\n.inbox-content-empty {\n  padding: 16px;\n}\n\n.cls-border-bottom {\n  padding: 12px 0px;\n  margin: 0 16px;\n  border-bottom: solid 1px rgba(201, 201, 201, 0.5);\n}\n\n.inbox-title {\n  font-size: 14px;\n  font-weight: bold;\n  white-space: normal;\n}\n\n.inbox-message {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: -0.4px;\n}\n\n.inbox-date {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.item-unread {\n  background-color: rgba(0, 60, 113, 0.1);\n}\n\n.inbox-content:first-child {\n  padding-top: 4px;\n}\n\n.readed-text {\n  white-space: normal;\n}\n\nng-deep .hidden-text {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 310px;\n}\n\nng-deep .readed-text {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBTTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0dSOztBRERJO0VBQ0UsZ0JBQUE7QUNJTjs7QURERTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkU7RUFDRSwyQkFBQTtBQ0tKOztBREhFO0VBQ0UsYUFBQTtBQ01KOztBREpBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ1FGOztBRExBO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1FGOztBRExBO0VBQ0UsdUNBQUE7QUNRRjs7QURMQTtFQUNFLGdCQUFBO0FDUUY7O0FETkE7RUFDRSxtQkFBQTtBQ1NGOztBRExFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRExFO0VBQ0UsbUJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3RhYjQvdGFiNC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRpdGxle1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4gICAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICAgIH0gIFxuICAgICAgLnRleHQtdHJpcC1lbXB0eXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICB9XG4gICAgLmltZy1pbmJveC1lbXB0eXtcbiAgICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gICAgfVxuXG4gIC5jbHMtaWNvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYzcxO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2xzLXJvdy1jb250ZW50e1xuICAgIHBhZGRpbmc6IDBweCAxNnB4IDE2cHggMTZweDtcbiAgfVxuICAuaW5ib3gtY29udGVudC1lbXB0eXtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4uY2xzLWJvcmRlci1ib3R0b217XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBtYXJnaW46IDAgMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjAxLCAyMDEsIDIwMSwgMC41KTtcbn1cbi5pbmJveC10aXRsZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmluYm94LW1lc3NhZ2V7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi5pbmJveC1kYXRle1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLml0ZW0tdW5yZWFke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYwLCAxMTMsIDAuMSk7XG59XG5cbi5pbmJveC1jb250ZW50OmZpcnN0LWNoaWxke1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLnJlYWRlZC10ZXh0e1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5uZy1kZWVwe1xuICAuaGlkZGVuLXRleHR7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdpZHRoOiAzMTBweDtcbiAgfVxuXG4gIC5yZWFkZWQtdGV4dHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG59IiwiLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLnRleHQtdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5pbWctaW5ib3gtZW1wdHkge1xuICBwYWRkaW5nLXRvcDogMjAlO1xufVxuXG4uY2xzLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYzcxO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jbHMtcm93LWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggMTZweCAxNnB4IDE2cHg7XG59XG5cbi5pbmJveC1jb250ZW50LWVtcHR5IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmNscy1ib3JkZXItYm90dG9tIHtcbiAgcGFkZGluZzogMTJweCAwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufVxuXG4uaW5ib3gtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uaW5ib3gtbWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi5pbmJveC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5pdGVtLXVucmVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNjAsIDExMywgMC4xKTtcbn1cblxuLmluYm94LWNvbnRlbnQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4ucmVhZGVkLXRleHQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG5uZy1kZWVwIC5oaWRkZW4tdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMzEwcHg7XG59XG5uZy1kZWVwIC5yZWFkZWQtdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab4/tab4.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/*! exports provided: Tab4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab4Page", function() { return Tab4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");











let Tab4Page = class Tab4Page {
    constructor(platform, navCtrl, gf, storage, zone, toastCtrl, valueGlobal, networkProvider, router, alertCtrl, modalCtrl, activityService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.storage = storage;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.valueGlobal = valueGlobal;
        this.networkProvider = networkProvider;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.activityService = activityService;
        this.items = [];
        this.itemskeleton = [1, 2, 3, 4, 5, 6, 7, 8];
        this.phone = '';
        this.email = '';
        this.loaddatadone = false;
        this.pageIndex = 1;
        this.pageSize = 50;
        this.loadend = false;
        gf.googleAnalytion('inbox', 'load', '');
        this.storage.get('phone').then(data => {
            if (data) {
                this.phone = data;
            }
        });
        this.storage.get('email').then(e => {
            if (e) {
                this.email = e;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        var se = this;
        if (document.querySelector(".tabbar")) {
            document.querySelector(".tabbar")['style'].display = 'flex';
        }
        se.storage.get('listUserNotification').then((data) => {
            if (data) {
                se.loadDataNotify(data);
            }
            else {
                se.loadUserNotification();
            }
        });
    }
    handleSplashScreen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.platform.ready();
            }
            catch (error) {
                if (error) {
                    error.page = "inbox";
                    error.func = "handleSplashScreen";
                    _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, null);
                    throw new Error(error);
                }
                ;
            }
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.style.opacity = '0';
                setTimeout(() => { splash.remove(); }, 300);
            }
        });
    }
    loadUserNotification() {
        var se = this;
        if (!this.networkProvider.isOnline()) {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            return;
        }
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetNotificationByUser?pageIndex=' + se.pageIndex + '&pageSize=' + se.pageSize,
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body && body != "[]") {
                            var data = JSON.parse(body);
                            se.loadDataNotify(data);
                        }
                        else {
                            se.zone.run(() => {
                                se.loadend = true;
                                se.loaddatadone = true;
                                if (se.pageIndex == 1) {
                                    se.items = [];
                                    se.valueGlobal.countNotifi = 0;
                                }
                            });
                        }
                    }
                });
            }
            else {
                se.zone.run(() => {
                    se.loaddatadone = true;
                    se.items = [];
                    se.valueGlobal.countNotifi = 0;
                });
            }
        });
    }
    loadDataNotify(data) {
        var se = this;
        se.zone.run(() => {
            data.forEach(element => {
                if (element.notifyType != "fly" && element.notifyAction != "flychangeinfo") {
                    let arrdate = moment__WEBPACK_IMPORTED_MODULE_7__(element.created).format('DD/MM/YYYY/HH/mm').split('/');
                    let d = new Date(Number(arrdate[2]), Number(arrdate[1]) - 1, Number(arrdate[0]), Number(arrdate[3]), Number(arrdate[4]));
                    let today = new Date();
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(today).diff(d, 'hours') <= 24) {
                        let diffhours = moment__WEBPACK_IMPORTED_MODULE_7__(today).diff(d, 'hours');
                        element.date = moment__WEBPACK_IMPORTED_MODULE_7__(today).diff(d, 'hours') + " giờ trước";
                        if (diffhours == 0) {
                            element.date = moment__WEBPACK_IMPORTED_MODULE_7__(today).diff(d, 'minutes') + " phút trước";
                        }
                    }
                    else {
                        element.date = moment__WEBPACK_IMPORTED_MODULE_7__(element.created).format('DD/MM/YYYY');
                    }
                    element.deleted = false;
                    if (se.items.length > 0) {
                        if (!se.gf.checkExistsItemInArray(se.items, element, 'trip')) {
                            se.items.push(element);
                        }
                    }
                    else {
                        se.items.push(element);
                    }
                }
            });
            if (se.valueGlobal.updatedLastestVersion) {
                se.addUpdateLasterVersionNotify();
                se.valueGlobal.updatedLastestVersion = false;
            }
            let countNoti = se.items.filter(item => { return !item.status; }).length;
            se.valueGlobal.countNotifi = countNoti;
            se.sortNotifi();
            se.loaddatadone = true;
        });
    }
    addUpdateLasterVersionNotify() {
        var se = this;
        let itemNew = {
            id: 999999,
            title: "Cập nhật ứng dụng",
            message: "Đã cập nhật liên phiên bản mới nhất của iVIVU.com",
            status: 0,
            notifyType: "updateNewVersion",
            notifyAction: "",
            memberId: "",
            user: null,
            flag: "1",
            created: new Date(),
            modifyDate: new Date(),
            modifyBy: "admin",
            createBy: "admin",
            deleted: false,
            date: "1 phút trước"
        };
        se.items.push(itemNew);
    }
    sortNotifi() {
        var se = this;
        if (se.items && se.items.length > 0) {
            se.zone.run(() => se.items.sort(function (a, b) {
                let direction = -1;
                if (moment__WEBPACK_IMPORTED_MODULE_7__(a['created']).diff(moment__WEBPACK_IMPORTED_MODULE_7__(b['created']), 'minutes') < 0) {
                    return -1 * direction;
                }
                else {
                    return 1 * direction;
                }
            }));
        }
    }
    ;
    updateStatusMessage(item) {
        var se = this;
        se.items.forEach(element => {
            if (element.id == item.id) {
                se.zone.run(() => {
                    if (!element.status) {
                        element.status = 1;
                        se.valueGlobal.countNotifi--;
                        se.callUpdateStatus(element);
                    }
                });
            }
        });
        if (item && item.bookingCode && item.notifyAction != "cancel") {
            if (item.notifyAction == "sharereviewofhotel") {
                se.navCtrl.navigateForward(['/app/tabs/tab3']);
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                se.gf.setParams(2, 'selectedTab3');
            }
            else if (item.notifyType == "blog" && item.notifyAction == "blogofmytrip") {
                se.valueGlobal.backValue = "tab4";
                se.navCtrl.navigateForward("/blog/" + item.bookingCode);
            }
            else if (item.notifyType == "fly" && item.notifyAction == "flychangeinfo") {
                se.navCtrl.navigateForward(['/app/tabs/tab3']);
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                se.gf.setParams(item.switchObj, 'notifiSwitchObj');
            }
            else {
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                this.mapBookingAndPayment(item.bookingCode);
            }
        }
        else {
            se.presentToastNotifi(item.message);
        }
    }
    callUpdateStatus(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/UpdateStatusNotificationOfUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: {
                        "id": item.id,
                        "phoneNumber": this.phone,
                        "email": this.email,
                        "memberId": auth_token,
                        "switchTypeOf": item.switchTypeOf,
                        "switchAction": item.switchAction,
                        "switchObj": item.switchObj,
                        "title": item.title,
                        "message": item.message,
                        "status": 1
                    },
                    json: true,
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                });
            }
        });
    }
    deleteNotifi(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/DeleteNotificationOfUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: {
                        "id": item.id,
                        "phoneNumber": this.phone,
                        "email": this.email,
                        "memberId": auth_token,
                        "switchTypeOf": item.switchTypeOf,
                        "switchAction": item.switchAction,
                        "switchObj": item.switchObj,
                        "title": item.title,
                        "message": item.message,
                        "status": 1
                    },
                    json: true,
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else if (body && body.success) {
                        se.zone.run(() => {
                            item.deleted = true;
                        });
                    }
                });
            }
        });
    }
    presentToastNotifi(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top',
            });
            toast.present();
        });
    }
    doRefresh(event) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.loadUserNotification();
            }
        });
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    showConfirm(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.valueGlobal.countNotifi = 0;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateBack('/');
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
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.valueGlobal.countNotifi = 0;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    doInfinite(infiniteScroll) {
        this.zone.run(() => {
            this.pageIndex += 1;
            this.loadUserNotification();
            infiniteScroll.target.complete();
        });
    }
    mapBookingAndPayment(BookingCode) {
        let se = this;
        if (BookingCode) {
            se.getdatamytrip().then((data) => {
                se.gf.hideLoading();
                var idxMap = data.map((item, index) => {
                    return item.booking_id == BookingCode;
                });
                var itemMap = data.filter((item) => { return item.booking_id == BookingCode; });
                if (itemMap && itemMap.length > 0) {
                    let idx = idxMap.findIndex((el) => { return el == true; });
                    if (itemMap[0].payment_status == 1 || itemMap[0].payment_status == 5) {
                        se.gf.setParams(BookingCode, 'notifiBookingCode');
                        se.navCtrl.navigateForward(['/app/tabs/tab3']);
                    }
                    else {
                        se.paymentselect(itemMap[0], idx);
                    }
                }
            });
        }
    }
    getdatamytrip() {
        var se = this;
        se.gf.showLoading();
        return new Promise((resolve, reject) => {
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        method: 'GET',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=false&pageIndex=1&pageSize=25',
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json-patch+json',
                            authorization: text
                        }
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                        if (error) {
                            error.page = "mytrips";
                            error.func = "getdata";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                        }
                        else {
                            if (body) {
                                se.zone.run(() => {
                                    let lstTrips = JSON.parse(body);
                                    resolve(lstTrips.trips);
                                });
                            }
                        }
                    });
                }
            });
        });
    }
    paymentselect(trip, tripidx) {
        var se = this;
        if (trip.amount_after_tax) {
            trip.priceShow = trip.amount_after_tax.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        }
        se.activityService.objPaymentMytrip = { returnPage: 'mytrip', tripindex: tripidx, paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };
        if (trip.booking_type == 'COMBO_FLIGHT') {
            if (trip.pay_method != 51) {
                se.navCtrl.navigateForward("/mytripaymentflightcombo/0");
            }
            else {
                se.navCtrl.navigateForward("/mytripaymentflightcombo/1");
            }
        }
        else if (trip.booking_type == 'COMBO_VXR') {
            if (trip.pay_method != 51) {
                se.navCtrl.navigateForward("/mytripaymentcarcombo/0");
            }
            else {
                se.navCtrl.navigateForward("/mytripaymentcarcombo/1");
            }
        }
        else {
            if (trip.pay_method != 51) {
                se.navCtrl.navigateForward("/mytripaymentselect/0");
            }
            else {
                se.navCtrl.navigateForward("/mytripaymentselect/1");
            }
        }
    }
};
Tab4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab4',
        template: __webpack_require__(/*! ./tab4.page.html */ "./src/app/tab4/tab4.page.html"),
        styles: [__webpack_require__(/*! ./tab4.page.scss */ "./src/app/tab4/tab4.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_10__["NetworkProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["ActivityService"]])
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=tab4-tab4-module.js.map