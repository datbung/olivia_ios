(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/flightmenufooter/flightmenufooter.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/flightmenufooter/flightmenufooter.module.ts ***!
  \*************************************************************/
/*! exports provided: FlightMenuFooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightMenuFooterPageModule", function() { return FlightMenuFooterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightmenufooter_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightmenufooter.page */ "./src/app/flightmenufooter/flightmenufooter.page.ts");






let FlightMenuFooterPageModule = class FlightMenuFooterPageModule {
};
FlightMenuFooterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flightmenufooter_page__WEBPACK_IMPORTED_MODULE_5__["FlightMenuFooterPage"]],
        exports: [_flightmenufooter_page__WEBPACK_IMPORTED_MODULE_5__["FlightMenuFooterPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightMenuFooterPageModule);



/***/ }),

/***/ "./src/app/flightmenufooter/flightmenufooter.page.html":
/*!*************************************************************!*\
  !*** ./src/app/flightmenufooter/flightmenufooter.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"homeflight-footer\">\r\n        <div class=\"div-menu-footer\">\r\n          <div class=\"div-button-menu\" (click)=\"menuFlightClick(1)\">\r\n            <ion-icon [ngClass]=\"menuindex ==1 ? 'icon-flight-menu activated' : 'icon-flight-menu'\" name=\"home\"></ion-icon>\r\n            <div [ngClass]=\"menuindex ==1 ? 'text-menu activated' : 'text-menu'\">Trang chủ</div>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFlightClick(2)\">\r\n              <ion-icon [ngClass]=\"menuindex ==2 ? 'icon-flight-menu activated' : 'icon-flight-menu'\" name=\"paper-plane\"></ion-icon>\r\n              <div [ngClass]=\"menuindex ==2 ? 'text-menu activated' : 'text-menu'\">Đơn hàng</div>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFlightClick(3)\">\r\n              <ion-icon [ngClass]=\"menuindex ==3 ? 'icon-flight-menu activated' : 'icon-flight-menu'\" name=\"text\"></ion-icon>\r\n              <div [ngClass]=\"menuindex ==3 ? 'text-menu activated' : 'text-menu'\">Thông báo</div>\r\n              <ion-badge class=\"cls-badge\" *ngIf=\"valueGlobal.countNotifi\" color=\"danger\">{{valueGlobal.countNotifi}}</ion-badge>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFlightClick(4)\">\r\n              <ion-icon [ngClass]=\"menuindex ==4 ? 'icon-flight-menu activated' : 'icon-flight-menu'\" name=\"contact\"></ion-icon>\r\n              <div [ngClass]=\"menuindex ==4 ? 'text-menu activated' : 'text-menu'\">Tài khoản</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    "

/***/ }),

/***/ "./src/app/flightmenufooter/flightmenufooter.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/flightmenufooter/flightmenufooter.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeflight-footer {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  z-index: 999;\n  background: #fff;\n  width: 100%;\n  box-shadow: 2px 4px 5px 3px #ccc;\n}\n.homeflight-footer .div-menu-footer {\n  display: flex;\n  justify-content: space-between;\n}\n.homeflight-footer .div-menu-footer .div-button-menu {\n  display: flex;\n  flex-direction: column;\n  width: 72px;\n  height: 56px;\n}\n.homeflight-footer .div-menu-footer .div-button-menu .text-menu {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 500;\n  letter-spacing: -0.8px;\n  line-height: 20px;\n  margin-top: -12px;\n  text-align: center;\n}\n.homeflight-footer .div-menu-footer .div-button-menu .icon-menu {\n  width: 44px;\n  height: 44px;\n  margin-top: -2px;\n  margin-left: 14px;\n}\n.homeflight-footer .activated {\n  color: #26bed6 !important;\n  opacity: 1 !important;\n}\n.homeflight-footer .icon-flight-menu {\n  color: #828282;\n  opacity: 0.7;\n  width: 24px;\n  height: 24px;\n  padding: 9px;\n  margin-left: 16px;\n}\n.cls-badge {\n  position: absolute;\n  margin-left: 43px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRtZW51Zm9vdGVyL2ZsaWdodG1lbnVmb290ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRtZW51Zm9vdGVyL2ZsaWdodG1lbnVmb290ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUdBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0RKO0FER0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNEUjtBREdRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNEWjtBREdZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRGhCO0FESVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGaEI7QURNSTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNKUjtBRE9JO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0xSO0FEUUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRtZW51Zm9vdGVyL2ZsaWdodG1lbnVmb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVmbGlnaHQtZm9vdGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8vcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy9ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDNweCAjY2NjO1xyXG5cclxuICAgIC5kaXYtbWVudS1mb290ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICAgICAgICAuZGl2LWJ1dHRvbi1tZW51e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogNzJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC50ZXh0LW1lbnV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5pY29uLW1lbnV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmF0ZWR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24tZmxpZ2h0LW1lbnV7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuLmNscy1iYWRnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0M3B4O1xyXG59IiwiLmhvbWVmbGlnaHQtZm9vdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDNweCAjY2NjO1xufVxuLmhvbWVmbGlnaHQtZm9vdGVyIC5kaXYtbWVudS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaG9tZWZsaWdodC1mb290ZXIgLmRpdi1tZW51LWZvb3RlciAuZGl2LWJ1dHRvbi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDcycHg7XG4gIGhlaWdodDogNTZweDtcbn1cbi5ob21lZmxpZ2h0LWZvb3RlciAuZGl2LW1lbnUtZm9vdGVyIC5kaXYtYnV0dG9uLW1lbnUgLnRleHQtbWVudSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvbWVmbGlnaHQtZm9vdGVyIC5kaXYtbWVudS1mb290ZXIgLmRpdi1idXR0b24tbWVudSAuaWNvbi1tZW51IHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4uaG9tZWZsaWdodC1mb290ZXIgLmFjdGl2YXRlZCB7XG4gIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5ob21lZmxpZ2h0LWZvb3RlciAuaWNvbi1mbGlnaHQtbWVudSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5jbHMtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA0M3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightmenufooter/flightmenufooter.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/flightmenufooter/flightmenufooter.page.ts ***!
  \***********************************************************/
/*! exports provided: FlightMenuFooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightMenuFooterPage", function() { return FlightMenuFooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");







let FlightMenuFooterPage = class FlightMenuFooterPage {
    constructor(navCtrl, gf, _flightService, modalCtrl, toastCtrl, zone, valueGlobal) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this._flightService = _flightService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.valueGlobal = valueGlobal;
        this.menuindex = 1;
        this.countflight = 0;
    }
    ngOnInit() {
        this._flightService.itemMenuFlightClick.pipe().subscribe(data => {
            this.zone.run(() => {
                this.menuindex = data;
                if (data == 1) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-visible").addClass("cls-disabled");
                }
            });
        });
    }
    menuFlightClick(menuindex) {
        var se = this;
        se.zone.run(() => {
            se.menuindex = menuindex;
            se._flightService.tabFlightIndex = menuindex;
            se._flightService.itemMenuFlightClick.emit(menuindex);
        });
        if (menuindex == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".cls-notice").removeClass("cls-disabled").addClass("cls-visible");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-visible").addClass("cls-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".cls-notice").removeClass("cls-visible").addClass("cls-disabled");
        }
    }
};
FlightMenuFooterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightmenufooter',
        template: __webpack_require__(/*! ./flightmenufooter.page.html */ "./src/app/flightmenufooter/flightmenufooter.page.html"),
        styles: [__webpack_require__(/*! ./flightmenufooter.page.scss */ "./src/app/flightmenufooter/flightmenufooter.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_5__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["ValueGlobal"]])
], FlightMenuFooterPage);



/***/ }),

/***/ "./src/app/tabs/tabs-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule',
                        data: { preload: true }
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab3/tab3.module#Tab3PageModule'
                    },
                ]
            },
            { path: 'combolist', loadChildren: '../combolist/combolist.module#ComboListPageModule', },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab2/tab2.module#Tab2PageModule'
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab4/tab4.module#Tab4PageModule'
                    }
                ]
            },
            {
                path: 'tab5',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab5/tab5.module#Tab5PageModule'
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    },
    {
        path: '/showmore',
        redirectTo: '/tabs/tab5',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/tabs/tabs-routing.module.ts");
/* harmony import */ var _hotel_list_hotel_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hotel-list/hotel-list.module */ "./src/app/hotel-list/hotel-list.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _foodmenufooter_foodmenufooter_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../foodmenufooter/foodmenufooter.module */ "./src/app/foodmenufooter/foodmenufooter.module.ts");
/* harmony import */ var _flightmenufooter_flightmenufooter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flightmenufooter/flightmenufooter.module */ "./src/app/flightmenufooter/flightmenufooter.module.ts");










const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]
    }
];
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _hotel_list_hotel_list_module__WEBPACK_IMPORTED_MODULE_6__["HotelListPageModule"],
            _foodmenufooter_foodmenufooter_module__WEBPACK_IMPORTED_MODULE_8__["FoodMenuFooterPageModule"],
            _flightmenufooter_flightmenufooter_module__WEBPACK_IMPORTED_MODULE_9__["FlightMenuFooterPageModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar class=\"tabbar\" slot=\"bottom\">\n    <ion-tab-button class=\"tab-button\" tab=\"tab1\">\n      <ion-icon class=\"icon-tab\" name=\"home\"></ion-icon>\n      <ion-label>Trang chủ</ion-label>\n    </ion-tab-button>\n    <div class=\"div-split\" *ngIf=\"valueGlobal.activeTab != 3\"></div>\n    <ion-tab-button class=\"tab-button\" tab=\"tab2\" *ngIf=\"valueGlobal.activeTab != 3\">\n      <ion-icon class=\"icon-tab\" name=\"heart\"></ion-icon>\n      <ion-label>Yêu thích</ion-label>\n    </ion-tab-button>\n    <div class=\"div-split\"></div>\n    <ion-tab-button class=\"tab-button\" tab=\"tab3\">\n      <ion-icon class=\"icon-tab\" name=\"paper-plane\"></ion-icon>\n      <ion-label>Đơn hàng</ion-label>\n    </ion-tab-button>\n    <div class=\"div-split\"></div>\n    <ion-tab-button class=\"tab-button\" tab=\"tab4\">\n      <ion-icon class=\"icon-tab\" name=\"text\"></ion-icon>\n      <ion-label>Thông báo</ion-label>\n      <ion-badge *ngIf=\"valueGlobal.countNotifi\" color=\"danger\">{{valueGlobal.countNotifi}}</ion-badge>\n    </ion-tab-button>\n    <div class=\"div-split\"></div>\n    <ion-tab-button class=\"tab-button\" tab=\"tab5\">\n      <ion-icon class=\"icon-tab\" name=\"contact\"></ion-icon>\n      <ion-label>Tài khoản</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n  <!-- <app-foodmenufooter></app-foodmenufooter> -->\n  <app-flightmenufooter></app-flightmenufooter>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabbar {\n  background: #f8f8f8;\n  padding: 0;\n  border: none;\n  height: 56px;\n  box-shadow: 2px 4px 5px 3px #dedede;\n}\n\n.icon-tab {\n  height: 24px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-group.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 8px 0px #828282;\n  border-radius: 10px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-container.sc-ion-action-sheet-ios {\n  justify-content: flex-start;\n  margin-top: calc(env(safe-area-inset-top) * 2 - 14px);\n  -webkit-padding-start: 8px;\n  padding-inline-start: 8px;\n  -webkit-padding-end: 8px;\n  padding-inline-end: 8px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-title.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  background-position: unset;\n  text-align: left;\n  font-weight: bold;\n  color: #222222;\n  padding-top: 10px;\n  padding-bottom: 0px;\n  padding-left: 44px;\n  font-size: 14px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  color: #222222;\n  font-size: 14px;\n}\n\n::ng-deep .ic_bus2 .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_home .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_paper .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_message .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-group.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 8px 0px #828282;\n  border-radius: 10px !important;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 60px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n  margin: 0;\n  width: 100%;\n}\n\n::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 44px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n\n::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 80px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n\n::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 90px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 18px;\n  display: initial;\n}\n\n@media (min-width: 250px) and (max-width: 329px) {\n  ::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 72px;\n  }\n  ::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 44px;\n  }\n  ::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 80px;\n  }\n  ::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 102px;\n  }\n}\n\n::ng-deep .ion-page {\n  overflow-y: scroll;\n}\n\n::ng-deep .ic_bus2 .toast-container::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_home .toast-container::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_paper .toast-container::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_message .toast-container::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\nion-tab-button {\n  font-weight: normal;\n  color: rgba(60, 60, 60, 0.7);\n  padding: 0;\n}\n\n.tabbar .tab-button[aria-selected=true] {\n  color: #26bed6;\n  padding: 0;\n}\n\n.tab-button a {\n  margin: 0;\n}\n\n.tab-button {\n  min-width: 82px;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n\n@media (min-width: 278px) and (max-width: 319px) {\n  .tab-button {\n    --padding-end: 0;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: -0.5px;\n    min-width: 56px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 339px) {\n  .tab-button {\n    --padding-end: 0;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: -0.5px;\n    min-width: 60px;\n  }\n}\n\n@media (min-width: 340px) and (max-width: 359px) {\n  .tab-button {\n    --padding-end: 0;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: -0.5px;\n    min-width: 64px;\n  }\n}\n\n@media (min-width: 360px) and (max-width: 399px) {\n  .tab-button {\n    --padding-end: 0;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: -0.9px;\n    min-width: 72px;\n  }\n}\n\n.div-split {\n  width: 0px;\n  height: 100%;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFJQSxtQ0FBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtBQ0FKOztBRElJO0VBQ0UseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0FDRE47O0FER0k7RUFDRSwyQkFBQTtFQUNBLHFEQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7QUNETjs7QURJSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGTjs7QURJSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDRk47O0FESUk7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBRElJO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNGTjs7QURLSTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDSE47O0FES0k7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0hOOztBREtJO0VBQ0UseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0FDSE47O0FETUk7RUFDRSwyQkFBQTtVQUFBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNNLFdBQUE7QUNKWjs7QURPSTtFQUNFLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0YsbUJBQUE7QUNMSjs7QURRSTtFQUNFLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNGLDBCQUFBO0VBQ0EsbUJBQUE7QUNOSjs7QURTSTtFQUNFLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNQTjs7QURTSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNQTjs7QURVSTtFQUNFO0lBQ0UsZ0JBQUE7RUNSTjtFRFdJO0lBQ0UsZ0JBQUE7RUNUTjtFRFlJO0lBQ0UsZ0JBQUE7RUNWTjtFRGFJO0lBQ0UsaUJBQUE7RUNYTjtBQUNGOztBRGFJO0VBQ0ksa0JBQUE7QUNYUjs7QURpQkk7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ2ZOOztBRGlCSTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDZk47O0FEa0JJO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNoQk47O0FEa0JJO0VBQ0UsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNoQk47O0FEb0JFO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNqQko7O0FEb0JFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNqQko7O0FEcUJJO0VBQ0ksU0FBQTtBQ2xCUjs7QURxQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2xCUjs7QURvQkk7RUFDRTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0VDakJSO0FBQ0Y7O0FEbUJJO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFQ2pCVjtBQUNGOztBRG1CTTtFQUNFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUNqQlY7QUFDRjs7QURtQk07RUFDRTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0VDakJWO0FBQ0Y7O0FEbUJNO0VBRUUsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ2xCUiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiYmFye1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcblxyXG4gICAgLW1vei1ib3gtc2hhZG93OiAgICAycHggNHB4IDVweCAzcHggI2RlZGVkZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDRweCA1cHggM3B4ICNkZWRlZGU7XHJcbiAgICBib3gtc2hhZG93OiAgICAgICAgIDJweCA0cHggNXB4IDNweCAjZGVkZWRlO1xyXG4gIH1cclxuXHJcbiAgLmljb24tdGFie1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwe1xyXG4gICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDBweCAjODI4MjgyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKjIgLSAxNHB4ICk7XHJcbiAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xyXG4gICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmljX2J1czIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19idXMyLnN2ZycpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgICB9XHJcbiAgICAuaWNfaG9tZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmV7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX2hvbWUuc3ZnJyk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICAgICAgLy90b3A6MTNweDtcclxuICAgIH1cclxuICAgIC5pY19wYXBlciAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmV7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX3BhcGVyLnN2ZycpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgICB9XHJcbiAgICAuaWNfbWVzc2FnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmV7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX21lc3NhZ2Uuc3ZnJyk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAwcHggIzgyODI4MjtcclxuICAgICAgYm9yZGVyLXJhZGl1czoxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1pbi1oZWlnaHQ6NjBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xyXG4gICAgICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZpeGhlaWdodC00NCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDo0NHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDo4MHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XHJcbiAgICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgIH1cclxuICBcclxuICAgIC5maXhoZWlnaHQtOTAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1pbi1oZWlnaHQ6OTBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xyXG4gICAgICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAzMjlweCkge1xyXG4gICAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgbWluLWhlaWdodDo3MnB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgbWluLWhlaWdodDo0NHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5maXhoZWlnaHQtODAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgbWluLWhlaWdodDo4MHB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5maXhoZWlnaHQtOTAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgbWluLWhlaWdodDoxMDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlvbi1wYWdle1xyXG4gICAgICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy8vLy9uZXcgc3R5bGVcclxuXHJcbiAgICAuaWNfYnVzMiAudG9hc3QtY29udGFpbmVyOjpiZWZvcmV7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX2J1czIuc3ZnJyk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICAgIH1cclxuICAgIC5pY19ob21lIC50b2FzdC1jb250YWluZXI6OmJlZm9yZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfaG9tZS5zdmcnKTtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gICAgICAvL3RvcDoxM3B4O1xyXG4gICAgfVxyXG4gICAgLmljX3BhcGVyIC50b2FzdC1jb250YWluZXI6OmJlZm9yZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnJyk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICAgIH1cclxuICAgIC5pY19tZXNzYWdlIC50b2FzdC1jb250YWluZXI6OmJlZm9yZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfbWVzc2FnZS5zdmcnKTtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gICAgfVxyXG59XHJcblxyXG4gIGlvbi10YWItYnV0dG9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAwLjcpO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC50YWJiYXIgLnRhYi1idXR0b25bYXJpYS1zZWxlY3RlZD10cnVlXSB7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnRhYi1idXR0b24gYXtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYi1idXR0b257XHJcbiAgICAgICAgbWluLXdpZHRoOiA4MnB4O1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDI3OHB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpIHtcclxuICAgICAgLnRhYi1idXR0b257XHJcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDU2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDMzOXB4KSB7XHJcbiAgICAgICAgLnRhYi1idXR0b257XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzQwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xyXG4gICAgICAgIC50YWItYnV0dG9ue1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNjRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcclxuICAgICAgICAudGFiLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDcycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kaXYtc3BsaXR7XHJcbiAgICAgICAgLy9wYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbiIsIi50YWJiYXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogNTZweDtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggNHB4IDVweCAzcHggI2RlZGVkZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNHB4IDVweCAzcHggI2RlZGVkZTtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggM3B4ICNkZWRlZGU7XG59XG5cbi5pY29uLXRhYiB7XG4gIGhlaWdodDogMjRweDtcbn1cblxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMHB4ICM4MjgyODI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAqIDIgLSAxNHB4KTtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDhweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiA4cHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB1bnNldDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA0NHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAuaWNfYnVzMiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfYnVzMi5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5pY19ob21lIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19ob21lLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX3BhcGVyIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19wYXBlci5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5pY19tZXNzYWdlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19tZXNzYWdlLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAwcHggIzgyODI4MjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLmZpeGhlaWdodC00NCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46Om5nLWRlZXAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46Om5nLWRlZXAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZGlzcGxheTogaW5pdGlhbDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyNTBweCkgYW5kIChtYXgtd2lkdGg6IDMyOXB4KSB7XG4gIDo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICAgIG1pbi1oZWlnaHQ6IDcycHg7XG4gIH1cbiAgOjpuZy1kZWVwIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIH1cbiAgOjpuZy1kZWVwIC5maXhoZWlnaHQtODAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIC5maXhoZWlnaHQtOTAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICAgIG1pbi1oZWlnaHQ6IDEwMnB4O1xuICB9XG59XG46Om5nLWRlZXAgLmlvbi1wYWdlIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuOjpuZy1kZWVwIC5pY19idXMyIC50b2FzdC1jb250YWluZXI6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19idXMyLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX2hvbWUgLnRvYXN0LWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX2hvbWUuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfcGFwZXIgLnRvYXN0LWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX3BhcGVyLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX21lc3NhZ2UgLnRvYXN0LWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX21lc3NhZ2Uuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAwLjcpO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGFiYmFyIC50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRhYi1idXR0b24gYSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRhYi1idXR0b24ge1xuICBtaW4td2lkdGg6IDgycHg7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI3OHB4KSBhbmQgKG1heC13aWR0aDogMzE5cHgpIHtcbiAgLnRhYi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICBtaW4td2lkdGg6IDU2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDMzOXB4KSB7XG4gIC50YWItYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgbWluLXdpZHRoOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzQwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAudGFiLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIG1pbi13aWR0aDogNjRweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLnRhYi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjlweDtcbiAgICBtaW4td2lkdGg6IDcycHg7XG4gIH1cbn1cbi5kaXYtc3BsaXQge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/firebase-messaging/ngx */ "./node_modules/@ionic-native/firebase-messaging/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/market/ngx */ "./node_modules/@ionic-native/market/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_tourService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../providers/tourService */ "./src/app/providers/tourService.ts");






















let TabsPage = class TabsPage {
    constructor(platform, router, activeRoute, modalCtrl, searchhotel, navCtrl, gf, booking, storage, zone, valueGlobal, badge, fcm, fcmNative, toastCrl, actionSheetCtrl, networkProvider, appVersion, market, _flightService, activityService, tourService) {
        this.platform = platform;
        this.router = router;
        this.activeRoute = activeRoute;
        this.modalCtrl = modalCtrl;
        this.searchhotel = searchhotel;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.booking = booking;
        this.storage = storage;
        this.zone = zone;
        this.valueGlobal = valueGlobal;
        this.badge = badge;
        this.fcm = fcm;
        this.fcmNative = fcmNative;
        this.toastCrl = toastCrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.networkProvider = networkProvider;
        this.appVersion = appVersion;
        this.market = market;
        this._flightService = _flightService;
        this.activityService = activityService;
        this.tourService = tourService;
    }
    ngOnInit() {
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
        this.storage.get('username').then(username => {
            if (username) {
                this.username = username;
            }
        });
        this.appVersion.getVersionNumber().then(version => {
            this.appversion = version;
        });
        try {
            this.platform.ready().then(() => {
                document.addEventListener("backbutton", () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (this.router.url.indexOf("tab1") != -1 || this.router.url.indexOf("login") != -1) {
                        const element = yield this.modalCtrl.getTop();
                        if (element) {
                            element.dismiss();
                        }
                        else {
                            navigator['app'].exitApp();
                        }
                    }
                    else {
                        if (this.router.url.indexOf("hotellist") != -1 || this.router.url.indexOf("searchhotel") != -1) {
                            this.navCtrl.navigateBack('/');
                        }
                        else if (this.router.url.indexOf("roompaymentdone") != -1) {
                            this.navCtrl.navigateBack('/');
                        }
                        else if (this.router.url.indexOf("roompaymentdoneean") != -1) {
                            this.navCtrl.navigateBack('/');
                        }
                        else if (this.router.url.indexOf("bloglist") != -1) {
                            this.navCtrl.navigateBack('/');
                        }
                        else if (this.router.url.indexOf("blog") != -1) {
                            if (this.searchhotel.backPage == "bloglist") {
                                this.navCtrl.navigateBack('bloglist');
                            }
                            else {
                                this.navCtrl.navigateBack('/');
                            }
                        }
                        else if (this.router.url.indexOf("hoteldetail") != -1) {
                            const element = yield this.modalCtrl.getTop();
                            if (element) {
                                element.dismiss();
                            }
                            else {
                                if (this.searchhotel.rootPage == "mainpage" || this.searchhotel.rootPage == "topdeal" || this.searchhotel.rootPage == "roompaymentselect-ean" || this.searchhotel.rootPage == "roomchoosebank") {
                                    this.navCtrl.navigateBack('/');
                                }
                                else if (this.searchhotel.rootPage == "likepage") {
                                    this.navCtrl.navigateBack(['/app/tabs/tab2']);
                                    return;
                                }
                                else {
                                    if (this.searchhotel.rootPage == "listpage") {
                                        this.navCtrl.navigateBack('/hotellist/false');
                                    }
                                    else if (this.searchhotel.rootPage == "listmood") {
                                        let hotellistmoodparams = this.gf.getParams('hotellistmood');
                                        if (hotellistmoodparams) {
                                            this.navCtrl.navigateForward('/hotellistmood/' + hotellistmoodparams.moodid + '/' + hotellistmoodparams.title);
                                        }
                                        else {
                                            this.navCtrl.back();
                                        }
                                    }
                                    else {
                                        console.log(this.searchhotel.rootPage + '_' + element ? 'true' : 'false');
                                        this.navCtrl.navigateBack('/');
                                    }
                                }
                            }
                        }
                        else if (this.router.url.indexOf("hotelreviews") != -1
                            || this.router.url.indexOf("hoteldescription") != -1
                            || this.router.url.indexOf("policy") != -1
                            || this.router.url.indexOf("facilities") != -1
                            || this.router.url.indexOf("hotelroomdetail") != -1
                            || this.router.url.indexOf("occupancy") != -1) {
                            this.navCtrl.back();
                        }
                        else if (this.router.url.indexOf("hotelreviews") != -1
                            || this.router.url.indexOf("hoteldescription") != -1
                            || this.router.url.indexOf("policy") != -1
                            || this.router.url.indexOf("facilities") != -1
                            || this.router.url.indexOf("hotelroomdetail") != -1
                            || this.router.url.indexOf("occupancy") != -1 || this.router.url.indexOf("login") != -1 || this.router.url.indexOf("loginusername") != -1 || this.router.url.indexOf("register") != -1) {
                            this.navCtrl.back();
                        }
                        else if (this.router.url.indexOf("mytripbookingdetail") != -1) {
                            this.navCtrl.navigateBack(['/app/tabs/tab3/']);
                        }
                        else if (this.router.url.indexOf("tripweather") != -1
                            || this.router.url.indexOf("hotelnotes") != -1
                            || this.router.url.indexOf("hotelexpsnotes") != -1
                            || this.router.url.indexOf("tripweather") != -1) {
                            this.navCtrl.back();
                        }
                        else if (this.router.url.indexOf("tab2") != -1
                            || this.router.url.indexOf("tab3") != -1
                            || this.router.url.indexOf("tab4") != -1
                            || this.router.url.indexOf("tab5") != -1) {
                            this.navCtrl.navigateBack('/');
                        }
                        else if (this.router.url.indexOf("roomadddetails") != -1) {
                            this.navCtrl.navigateBack('roomdetailreview');
                        }
                        else if (this.router.url.indexOf("tripweather") != -1
                            || this.router.url.indexOf("hotelnotes") != -1
                            || this.router.url.indexOf("hotelexpsnotes") != -1
                            || this.router.url.indexOf("tripweather") != -1) {
                            this.navCtrl.back();
                        }
                        else if (this.router.url.indexOf("tab2") != -1
                            || this.router.url.indexOf("tab3") != -1
                            || this.router.url.indexOf("tab4") != -1
                            || this.router.url.indexOf("tab5") != -1) {
                            this.navCtrl.navigateBack(['/app/tabs/tab1']);
                        }
                        else if (this.router.url.indexOf("roomadddetails") != -1) {
                            this.navCtrl.navigateBack('roomdetailreview');
                        }
                        else if (this.router.url.indexOf("userprofile") != -1
                            || this.router.url.indexOf("userreviews") != -1
                            || this.router.url.indexOf("userreward") != -1
                            || this.router.url.indexOf("cuspoints") != -1) {
                            this.navCtrl.navigateBack(['/app/tabs/tab5']);
                        }
                        else if (this.router.url.indexOf("roomadddetails-ean") != -1) {
                            this.navCtrl.navigateBack('roomdetailreview');
                        }
                        else if (this.router.url.indexOf("roompaymentselect") != -1) {
                            if (this.searchhotel.backPage == "roompaymentselect-ean") {
                                this.navCtrl.navigateBack('roomadddetails-ean');
                            }
                            else {
                                this.navCtrl.navigateBack('roomadddetails');
                            }
                        }
                        else if (this.router.url.indexOf("roompaymentlive") != -1) {
                            if (this.searchhotel.backPage == "roompaymentselect-ean") {
                                this.navCtrl.navigateBack('roompaymentselect-ean');
                            }
                            else {
                                this.navCtrl.navigateBack('roompaymentselect');
                            }
                        }
                        else if (this.router.url.indexOf("roompaymentbank") != -1) {
                            if (this.searchhotel.backPage == "roompaymentselect-ean") {
                                this.navCtrl.navigateBack('roompaymentselect-ean');
                            }
                            else {
                                this.navCtrl.navigateBack('roompaymentselect');
                            }
                        }
                        else if (this.router.url.indexOf("roompaymentatm") != -1) {
                            if (this.searchhotel.backPage == "roompaymentselect-ean") {
                                this.navCtrl.navigateBack('roompaymentselect-ean');
                            }
                            else {
                                this.navCtrl.navigateBack('roompaymentselect');
                            }
                        }
                        else if (this.router.url.indexOf("roomdetailreview") != -1) {
                            this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
                        }
                        else if (this.router.url.indexOf("onepay") != -1) {
                            this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
                        }
                        else if (this.router.url.indexOf('roomcancel')) {
                            if (this.searchhotel.backPage == "roomdetailreview") {
                                this.navCtrl.navigateBack('/roomdetailreview');
                            }
                            else if (this.searchhotel.backPage == "roompaymentselect") {
                                this.navCtrl.navigateBack('/roompaymentselect');
                            }
                            else if (this.searchhotel.backPage == "roompaymentselect-ean") {
                                this.navCtrl.navigateBack('/roompaymentselect-ean');
                            }
                            else if (this.searchhotel.backPage = "mytripbookingdetail") {
                                this.navCtrl.navigateBack('/mytripbookingdetail');
                            }
                        }
                        else if (this.router.url.indexOf("roompaymentbreakdow") != -1) {
                            if (this.searchhotel.backPage == "roomdetailreview") {
                                this.navCtrl.navigateBack('/roomdetailreview');
                            }
                            else if (this.searchhotel.backPage == "roompaymentselect") {
                                this.navCtrl.navigateBack('/roompaymentselect');
                            }
                            else if (this.searchhotel.backPage == "roompaymentselect-ean") {
                                this.navCtrl.navigateBack('/roompaymentselect-ean');
                            }
                        }
                        else if (this.router.url.indexOf("flightcomboreviews") != -1) {
                            const element = yield this.modalCtrl.getTop();
                            if (element) {
                                element.dismiss();
                            }
                            else {
                                this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
                            }
                        }
                        else if (this.router.url.indexOf("flightcomboadddetails") != -1) {
                            this.navCtrl.navigateBack('/flightcomboreviews');
                        }
                        else if (this.router.url.indexOf("flightcombopaymentdone") != -1) {
                            this.navCtrl.navigateBack('/');
                        }
                        else {
                            this.navCtrl.navigateBack('/');
                        }
                    }
                }));
                this.fcmNative.onNotification().subscribe((data) => {
                    if (data.wasTapped) {
                        this.showNotification(data);
                        this.loadNotificationAndUpdateState(data.BookingCode);
                    }
                    else {
                        this.zone.run(() => {
                            this.countmessage++;
                            this.valueGlobal.countNotifi++;
                            this.badge.set(this.countmessage);
                        });
                        this.showActionSheetNoti(data);
                    }
                    ;
                });
            });
        }
        catch (error) {
            error.page = "tabspage";
            error.func = "handleBackButton";
            error.param = this.router.url;
            _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, null);
        }
    }
    loadNotificationAndUpdateState(bookingCode) {
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetNotificationByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body && body != "[]") {
                            var data = JSON.parse(body);
                            if (data && data.length > 0) {
                                data.forEach(element => {
                                    if (element.bookingCode == bookingCode) {
                                        se.callUpdateStatus(element);
                                    }
                                });
                            }
                        }
                    }
                });
            }
        });
    }
    callUpdateStatus(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/UpdateStatusNotificationOfUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: {
                        "id": item.id,
                        "phoneNumber": se.phone,
                        "email": se.email,
                        "memberId": auth_token,
                        "switchTypeOf": item.NotifyType,
                        "switchAction": item.notifyAction,
                        "switchObj": item.switchObj,
                        "title": item.title,
                        "message": item.message,
                        "status": 1
                    },
                    json: true,
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        se.loadUserNotification();
                    }
                });
            }
        });
    }
    showNotification(data) {
        if (data && data.BookingCode && data.notifyAction != "cancel") {
            if (data.notifyAction == "sharereviewofhotel") {
                this.navCtrl.navigateForward(['/app/tabs/tab3']);
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                this.gf.setParams(2, 'selectedTab3');
            }
            else if (data.NotifyType == "blog" && data.notifyAction == "blogofmytrip") {
                this.valueGlobal.backValue = "tab4";
                this.navCtrl.navigateForward("/blog/" + data.BookingCode);
            }
            else if (data.NotifyType == "fly" && data.notifyAction == "flychangeinfo") {
                this.navCtrl.navigateForward(['/app/tabs/tab3']);
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                this.gf.setParams(data.switchObj, 'notifiSwitchObj');
            }
            else {
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                console.log(data.BookingCode);
                this.mapBookingAndPayment(data.BookingCode);
            }
        }
        else {
            if (data.updateNewVersion) {
                this.gotoAppStore();
            }
            else if (data.activeTab) {
                this.valueGlobal.backValue = "homeflight";
            }
            else if (data.dataLink) {
                if (data.dataLink.indexOf('tourdetail') != -1) {
                    let arr = data.dataLink.replace('/', '').split('/');
                    if (arr && arr.length == 2) {
                        this.loadTopSale(arr[1]);
                    }
                }
                else {
                    this.navCtrl.navigateForward(data.dataLink);
                }
            }
            else if (data.flyNotify) {
                this._flightService.itemTabFlightActive.emit(true);
                this.valueGlobal.backValue = "homeflight";
                this.navCtrl.navigateForward('/tabs/tab1');
            }
            else if (data.customParamNoti) {
                let msg = '';
                msg = data.message;
                if (msg.indexOf('@param1') != -1) {
                    msg = msg.replace('@param1', data.param1);
                }
                if (msg.indexOf('@param2') != -1) {
                    msg = msg.replace('@param2', data.param2);
                }
                if (msg.indexOf('@param3') != -1) {
                    msg = msg.replace('@param3', data.param3);
                }
                if (msg.indexOf('@param4') != -1) {
                    msg = msg.replace('@param4', data.param4);
                }
                if (msg.indexOf('@param5') != -1) {
                    msg = msg.replace('@param5', data.param5);
                }
                if (msg.indexOf('@param6') != -1) {
                    msg = msg.replace('@param6', data.param6);
                }
                if (msg.indexOf('@param7') != -1) {
                    msg = msg.replace('@param7', data.param7);
                }
                if (msg.indexOf('@param8') != -1) {
                    msg = msg.replace('@param8', data.param8);
                }
                if (msg.indexOf('@param9') != -1) {
                    msg = msg.replace('@param9', data.param9);
                }
                if (msg.indexOf('@param10') != -1) {
                    msg = msg.replace('@param10', data.param10);
                }
                if (msg.indexOf('Chúc') != -1) {
                    msg = msg.replace('Chúc Quý Khách Hàng', 'Chúc ' + this.username);
                }
                this.showToast(msg);
            }
            else {
                this.showToast(data.message);
            }
        }
        this.loadNotificationAndUpdateState(data.BookingCode);
    }
    showActionSheetNoti(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            var iconStr = 'ic_home';
            var subclass = '';
            if (data.NotifyType == 'bookingbegoingcombotransfer') {
                iconStr = 'ic_bus2';
            }
            else if (data.NotifyType == 'blog' || data.notifyAction == 'blogofmytrip') {
                iconStr = 'ic_message';
            }
            else if (data.notifyAction == 'bookingbegoingcombofly' || data.notifyAction == 'flychangeinfo') {
                iconStr = 'ic_paper';
            }
            if (data.notifyAction == 'cancel') {
                subclass = 'fixheight-90';
            }
            if (data.notifyAction == 'flychangeinfo' || data.notifyAction == 'blogofmytrip') {
                subclass = 'fixheight-44';
            }
            var msg = data.message;
            if (data.dataLink) {
                if (data.dataLink.indexOf('tourdetail') != -1) {
                    let arr = data.dataLink.replace('/', '').split('/');
                    if (arr && arr.length == 2) {
                        this.tourService.tourDetailId = arr[1];
                        this.tourService.backPage = 'hometour';
                        this.navCtrl.navigateForward('/tourdetail');
                    }
                }
                else {
                    se.navCtrl.navigateForward(data.dataLink);
                }
            }
            else if (data.flyNotify) {
                se._flightService.itemTabFlightActive.emit(true);
                se.valueGlobal.backValue = "homeflight";
                se.navCtrl.navigateForward('/tabs/tab1');
            }
            else if (data.activeTab) {
                se.valueGlobal.backValue = "homeflight";
            }
            else if (data.customParamNoti) {
                if (msg.indexOf('@param1') != -1) {
                    msg = msg.replace('@param1', data.param1);
                }
                if (msg.indexOf('@param2') != -1) {
                    msg = msg.replace('@param2', data.param2);
                }
                if (msg.indexOf('@param3') != -1) {
                    msg = msg.replace('@param3', data.param3);
                }
                if (msg.indexOf('@param4') != -1) {
                    msg = msg.replace('@param4', data.param4);
                }
                if (msg.indexOf('@param5') != -1) {
                    msg = msg.replace('@param5', data.param5);
                }
                if (msg.indexOf('@param6') != -1) {
                    msg = msg.replace('@param6', data.param6);
                }
                if (msg.indexOf('@param7') != -1) {
                    msg = msg.replace('@param7', data.param7);
                }
                if (msg.indexOf('@param8') != -1) {
                    msg = msg.replace('@param8', data.param8);
                }
                if (msg.indexOf('@param9') != -1) {
                    msg = msg.replace('@param9', data.param9);
                }
                if (msg.indexOf('@param10') != -1) {
                    msg = msg.replace('@param10', data.param10);
                }
                if (msg.indexOf('Chúc') != -1) {
                    msg = msg.replace('Chúc Quý Khách Hàng', 'Chúc ' + this.username);
                }
                subclass = 'fixheight-44';
                if (data.height) {
                    subclass = 'fixheight-' + data.height;
                }
            }
            if (data.notifyType == "alert") {
                se.presentToastNotifi(data.message);
            }
            else {
                let actionSheet = yield se.actionSheetCtrl.create({
                    cssClass: 'action-sheets-notification ' + iconStr + ' ' + subclass,
                    header: data.title,
                    animated: true,
                    backdropDismiss: true,
                    mode: 'ios',
                    buttons: [
                        {
                            text: msg,
                            handler: () => {
                                se.showNotification(data);
                            }
                        }
                    ]
                });
                actionSheet.present();
                setTimeout(() => {
                    actionSheet.dismiss();
                }, 5000);
            }
        });
    }
    presentToastNotifi(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCrl.create({
                message: msg,
                duration: 3000,
                position: 'top',
            });
            toast.present();
        });
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCrl.create({
                message: msg,
                position: 'top',
                duration: 5000
            });
            toast.present();
        });
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            var items = jquery__WEBPACK_IMPORTED_MODULE_7__(obj).siblings('ion-tab-button');
            if (items && items.length > 0) {
                for (let index = 0; index < items.length; index++) {
                    const element = items[index];
                    jquery__WEBPACK_IMPORTED_MODULE_7__(element).attr('aria-selected', 'false');
                }
            }
            if (obj.id != "tab-button-tab4") {
                this.loadUserNotification();
            }
            if (obj.id != "tab-button-tab1") {
                var se = this;
                let el = document.getElementsByClassName('div-statusbar-float');
                el[0].classList.remove('float-statusbar-enabled');
                el[0].classList.add('float-statusbar-disabled');
            }
        });
    }
    ionViewWillLeave() {
        clearInterval(this.intervalNoti);
    }
    ionViewWillEnter() {
        this.loadUserNotification();
        var el = document.getElementsByClassName('tab-button');
        jquery__WEBPACK_IMPORTED_MODULE_7__('.tab-button').click(e => this.clickedElement(e));
        this.platform.ready().then(() => {
            setTimeout(() => {
                this.fcmNative.onNotification().subscribe((data) => {
                    debugger;
                    if (data.wasTapped) {
                        this.showNotification(data);
                        this.loadNotificationAndUpdateState(data.BookingCode);
                    }
                    else {
                        this.zone.run(() => {
                            this.countmessage++;
                            this.valueGlobal.countNotifi++;
                            this.badge.set(this.countmessage);
                        });
                        this.showActionSheetNoti(data);
                    }
                    ;
                    this.fcmNative.onTokenRefresh().subscribe(token => {
                        this.storage.set('deviceToken', token);
                        this.storage.get('auth_token').then(auth_token => {
                            if (token) {
                                this.gf.pushTokenAndMemberID(auth_token, token, this.appversion);
                            }
                        });
                    });
                });
            }, 700);
            document.addEventListener("backbutton", () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (this.router.url.indexOf("tab1") != -1 || this.router.url.indexOf("login") != -1) {
                    const element = yield this.modalCtrl.getTop();
                    if (element) {
                        element.dismiss();
                    }
                    else {
                        navigator['app'].exitApp();
                    }
                }
                else {
                    if (this.router.url.indexOf("hotellist") != -1 || this.router.url.indexOf("searchhotel") != -1) {
                        this.searchhotel.arrlocalcheck = [];
                        this.navCtrl.navigateBack('/');
                    }
                    else if (this.router.url.indexOf("roompaymentdone") != -1) {
                        this.navCtrl.navigateBack('/');
                    }
                    else if (this.router.url.indexOf("roompaymentdoneean") != -1) {
                        this.navCtrl.navigateBack('/');
                    }
                    else if (this.router.url.indexOf("hoteldetail") != -1) {
                        const element = yield this.modalCtrl.getTop();
                        if (element) {
                            element.dismiss();
                        }
                        else {
                            if (this.searchhotel.rootPage == "mainpage" || this.searchhotel.rootPage == "topdeal") {
                                this.navCtrl.navigateBack('/');
                            }
                            else if (this.searchhotel.rootPage == "likepage") {
                                this.navCtrl.navigateBack(['/app/tabs/tab2/']);
                                return;
                            }
                            else if (this.searchhotel.rootPage == "MyTrip") {
                                this.navCtrl.navigateBack(['/app/tabs/tab3/']);
                            }
                            else {
                                if (this.searchhotel.rootPage == "listpage") {
                                    this.navCtrl.navigateBack('/hotellist/false');
                                }
                                else if (this.searchhotel.rootPage == "listmood") {
                                    let hotellistmoodparams = this.gf.getParams('hotellistmood');
                                    if (hotellistmoodparams) {
                                        this.navCtrl.navigateForward('/hotellistmood/' + hotellistmoodparams.moodid + '/' + hotellistmoodparams.title);
                                    }
                                    else {
                                        this.navCtrl.back();
                                    }
                                }
                                else {
                                    console.log(this.searchhotel.rootPage + '_' + element ? 'true' : 'false');
                                    this.navCtrl.navigateBack('/');
                                }
                            }
                        }
                    }
                    else if (this.router.url.indexOf("hotelreviews") != -1
                        || this.router.url.indexOf("hoteldescription") != -1
                        || this.router.url.indexOf("policy") != -1
                        || this.router.url.indexOf("facilities") != -1
                        || this.router.url.indexOf("hotelroomdetail") != -1
                        || this.router.url.indexOf("occupancy") != -1) {
                        this.navCtrl.back();
                    }
                    else if (this.router.url.indexOf("mytripbookingdetail") != -1) {
                        this.navCtrl.navigateBack(['/app/tabs/tab3/']);
                    }
                    else if (this.router.url.indexOf("tripweather") != -1
                        || this.router.url.indexOf("hotelnotes") != -1
                        || this.router.url.indexOf("hotelexpsnotes") != -1
                        || this.router.url.indexOf("tripweather") != -1) {
                        this.navCtrl.back();
                    }
                    else if (this.router.url.indexOf("tab2") != -1
                        || this.router.url.indexOf("tab3") != -1
                        || this.router.url.indexOf("tab4") != -1
                        || this.router.url.indexOf("tab5") != -1) {
                        this.navCtrl.navigateBack('/');
                    }
                    else if (this.router.url.indexOf("roomadddetails") != -1) {
                        this.navCtrl.navigateBack('roomdetailreview');
                    }
                    else if (this.router.url.indexOf("userprofile") != -1
                        || this.router.url.indexOf("userreviews") != -1
                        || this.router.url.indexOf("userreward") != -1
                        || this.router.url.indexOf("cuspoints") != -1) {
                        this.navCtrl.navigateBack(['/app/tabs/tab5/']);
                    }
                    else if (this.router.url.indexOf("roomadddetails-ean") != -1) {
                        this.navCtrl.navigateBack('roomdetailreview');
                    }
                    else if (this.router.url.indexOf("roompaymentselect") != -1) {
                        if (this.searchhotel.backPage == "roompaymentselect-ean") {
                            this.navCtrl.navigateBack('roomadddetails-ean');
                        }
                        else {
                            this.navCtrl.navigateBack('roomadddetails');
                        }
                    }
                    else if (this.router.url.indexOf("roompaymentlive") != -1) {
                        if (this.searchhotel.backPage == "roompaymentselect-ean") {
                            this.navCtrl.navigateBack('roompaymentselect-ean');
                        }
                        else {
                            this.navCtrl.navigateBack('roompaymentselect');
                        }
                    }
                    else if (this.router.url.indexOf("flightcomboreviews") != -1) {
                        const element = yield this.modalCtrl.getTop();
                        if (element) {
                            element.dismiss();
                        }
                        else {
                            this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
                        }
                    }
                    else if (this.router.url.indexOf("flightcomboadddetails") != -1) {
                        this.navCtrl.navigateBack('/flightcomboreviews');
                    }
                    else if (this.router.url.indexOf("flightcombopaymentdone") != -1) {
                        this.navCtrl.navigateBack('/');
                    }
                    else if (this.router.url.indexOf("roompaymentbank") != -1) {
                        if (this.searchhotel.backPage == "roompaymentselect-ean") {
                            this.navCtrl.navigateBack('roompaymentselect-ean');
                        }
                        else {
                            this.navCtrl.navigateBack('roompaymentselect');
                        }
                    }
                    else if (this.router.url.indexOf("roompaymentatm") != -1) {
                        if (this.searchhotel.backPage == "roompaymentselect-ean") {
                            this.navCtrl.navigateBack('roompaymentselect-ean');
                        }
                        else {
                            this.navCtrl.navigateBack('roompaymentselect');
                        }
                    }
                    else if (this.router.url.indexOf("roomdetailreview") != -1) {
                        this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
                    }
                    else if (this.router.url.indexOf("onepay") != -1) {
                        this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
                    }
                    else if (this.router.url.indexOf('roomcancel')) {
                        if (this.searchhotel.backPage == "roomdetailreview") {
                            this.navCtrl.navigateBack('/roomdetailreview');
                        }
                        else if (this.searchhotel.backPage == "roompaymentselect") {
                            this.navCtrl.navigateBack('/roompaymentselect');
                        }
                        else if (this.searchhotel.backPage == "roompaymentselect-ean") {
                            this.navCtrl.navigateBack('/roompaymentselect-ean');
                        }
                        else if (this.searchhotel.backPage = "mytripbookingdetail") {
                            this.navCtrl.navigateBack('/mytripbookingdetail');
                        }
                    }
                    else if (this.router.url.indexOf("roompaymentbreakdow") != -1) {
                        if (this.searchhotel.backPage == "roomdetailreview") {
                            this.navCtrl.navigateBack('/roomdetailreview');
                        }
                        else if (this.searchhotel.backPage == "roompaymentselect") {
                            this.navCtrl.navigateBack('/roompaymentselect');
                        }
                        else if (this.searchhotel.backPage == "roompaymentselect-ean") {
                            this.navCtrl.navigateBack('/roompaymentselect-ean');
                        }
                    }
                    else {
                        alert(this.router.url);
                        this.navCtrl.navigateBack('/');
                    }
                }
            }));
        });
    }
    loadUserNotification() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetNotificationByUserIVV?pageIndex=1&pageSize=50',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body && body != "[]") {
                            var data = JSON.parse(body);
                            if (data && data.length > 0) {
                                se.storage.get('listUserNotification').then((datanoti) => {
                                    if (datanoti) {
                                        se.storage.remove('listUserNotification').then(() => {
                                            se.storage.set('listUserNotification', data);
                                        });
                                    }
                                    else {
                                        se.storage.set('listUserNotification', data);
                                    }
                                });
                                se.zone.run(() => {
                                    let countNoti = data.filter(item => { return !item.status; }).length;
                                    if (se.valueGlobal.updatedLastestVersion) {
                                        countNoti++;
                                    }
                                    se.valueGlobal.countNotifi = countNoti;
                                    se.countmessage = se.valueGlobal.countNotifi;
                                    se.badge.set(countNoti);
                                    se.fcm.setBadge(countNoti);
                                });
                            }
                        }
                        else {
                            se.countmessage = 0;
                            se.badge.set(0);
                        }
                    }
                });
            }
            else {
                se.countmessage = 0;
                se.valueGlobal.countNotifi = 0;
                se.badge.set(0);
                se.fcm.setBadge(0);
            }
        });
    }
    gotoAppStore() {
        this.market.open('https://apps.apple.com/us/app/ivivu-com-k%E1%BB%B3-ngh%E1%BB%89-tuy%E1%BB%87t-v%E1%BB%9Di/id1464844301?uo=4');
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
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "tabpage";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var json = JSON.parse(body);
                        if (json.auth_token) {
                            se.storage.remove('auth_token');
                            se.storage.set("auth_token", json.auth_token);
                        }
                    }
                });
            }
        });
    }
    mapBookingAndPayment(BookingCode) {
        let se = this;
        if (BookingCode) {
            se.getdatamytrip().then((data) => {
                se.gf.hideLoading();
                var idxMap = data.map((item, index) => {
                    return item.booking_id == se.gf.getParams('notifiBookingCode');
                });
                var itemMap = data.filter((item) => { return item.booking_id == se.gf.getParams('notifiBookingCode'); });
                if (itemMap && itemMap.length > 0) {
                    let idx = idxMap.findIndex((el) => { return el == true; });
                    se.checkPayment(BookingCode, itemMap[0], idx);
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
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=false&pageIndex=1&pageSize=25',
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json-patch+json',
                            authorization: text
                        }
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                        if (error) {
                            error.page = "mytrips";
                            error.func = "getdata";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                        }
                        else if (response.statusCode == 401) {
                            se.storage.get('jti').then((memberid) => {
                                se.storage.get('deviceToken').then((devicetoken) => {
                                    se.gf.refreshToken(memberid, devicetoken).then((token) => {
                                        setTimeout(() => {
                                            se.getdatanewtoken(token, false);
                                        }, 100);
                                    });
                                });
                            });
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
    getdatanewtoken(token, ishistory) {
        var se = this;
        return new Promise((resolve, reject) => {
            if (token) {
                var text = "Bearer " + token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=' + ishistory + '&pageIndex=1&pageSize=25',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mytrips";
                        error.func = "getdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            if (body) {
                                se.zone.run(() => {
                                    let lstTrips = JSON.parse(body);
                                    resolve(lstTrips.trips);
                                });
                            }
                        }
                    }
                });
            }
        });
    }
    paymentselect(trip, tripidx) {
        var se = this;
        if (trip.amount_after_tax) {
            trip.priceShow = trip.amount_after_tax.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        }
        se.activityService.objPaymentMytrip = { returnPage: 'mytrip', tripindex: tripidx, paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };
        se.activityService.backValue = 'tab3';
        if (trip.booking_type == 'COMBO_FLIGHT') {
            if (!(trip.pay_method == 51 || trip.pay_method == 2 || trip.pay_method == 3)) {
                se.navCtrl.navigateForward("/mytripaymentflightcombo/0");
            }
            else {
                se.navCtrl.navigateForward("/mytripaymentflightcombo/1");
            }
        }
        else if (trip.booking_type == 'COMBO_VXR') {
            if (!(trip.pay_method == 51 || trip.pay_method == 2 || trip.pay_method == 3)) {
                se.navCtrl.navigateForward("/mytripaymentcarcombo/0");
            }
            else {
                se.navCtrl.navigateForward("/mytripaymentcarcombo/1");
            }
        }
        else {
            if (!(trip.pay_method == 51 || trip.pay_method == 2 || trip.pay_method == 3)) {
                se.navCtrl.navigateForward("/mytripaymentselect/0");
            }
            else {
                se.navCtrl.navigateForward("/mytripaymentselect/1");
            }
        }
        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writePaymentLog("notify", "paymentselect", "purchase", trip.HotelIdERP);
    }
    checkPayment(bookingCode, item, idx) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: bookingCode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roompaymentselect",
                    func: "openWebpage",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    para: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (rs.StatusBooking == 3) {
                    se.navCtrl.navigateForward(['/app/tabs/tab3']);
                }
                else {
                    se.gf.setParams('', 'notifiBookingCode');
                    se.paymentselect(item, idx);
                }
            }
            else {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    loadTopSale(Id) {
        let se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/tour/api/TourApi/GetAllBooking24h';
        let headers = {
            apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
            apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
        };
        se.gf.RequestApi('GET', url, headers, null, 'hometour', 'loadTopSale').then((data) => {
            let res = JSON.parse(data);
            console.log(res.Response);
            this.tourService.listTopSale = res.Response;
            se.tourService.tourDetailId = Id;
            se.tourService.backPage = 'hometour';
            se.navCtrl.navigateForward('/tourdetail');
        });
    }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"],
        _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_10__["Badge"],
        _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_11__["FirebaseMessaging"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__["FCM"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_13__["NetworkProvider"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_14__["AppVersion"],
        _ionic_native_market_ngx__WEBPACK_IMPORTED_MODULE_15__["Market"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_16__["flightService"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["ActivityService"],
        _providers_tourService__WEBPACK_IMPORTED_MODULE_17__["tourService"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map