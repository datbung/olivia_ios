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

module.exports = "  <div class=\"homeflight-footer\">\r\n        <div class=\"div-menu-footer\">\r\n          <div class=\"div-button-menu\" (click)=\"menuFlightClick(1)\">\r\n            <ion-icon [ngClass]=\"menuindex ==1 ? 'icon-flight-menu activated' : 'icon-flight-menu'\" name=\"home\"></ion-icon>\r\n            <div [ngClass]=\"menuindex ==1 ? 'text-menu activated' : 'text-menu'\">Trang chủ</div>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFlightClick(2)\">\r\n              <ion-icon [ngClass]=\"menuindex ==2 ? 'icon-flight-menu activated' : 'icon-flight-menu'\" name=\"paper-plane\"></ion-icon>\r\n              <div [ngClass]=\"menuindex ==2 ? 'text-menu activated' : 'text-menu'\">Đơn hàng</div>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFlightClick(3)\">\r\n              <ion-icon [ngClass]=\"menuindex ==3 ? 'icon-flight-menu activated' : 'icon-flight-menu'\" name=\"text\"></ion-icon>\r\n              <div [ngClass]=\"menuindex ==3 ? 'text-menu activated' : 'text-menu'\">Thông báo</div>\r\n              <ion-badge *ngIf=\"countflight\" color=\"danger\">{{countflight}}</ion-badge>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFlightClick(4)\">\r\n              <ion-icon [ngClass]=\"menuindex ==4 ? 'icon-flight-menu activated' : 'icon-flight-menu'\" name=\"contact\"></ion-icon>\r\n              <div [ngClass]=\"menuindex ==4 ? 'text-menu activated' : 'text-menu'\">Tài khoản</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    "

/***/ }),

/***/ "./src/app/flightmenufooter/flightmenufooter.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/flightmenufooter/flightmenufooter.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeflight-footer {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  z-index: 999;\n  background: #fff;\n  width: 100%;\n  box-shadow: 2px 4px 5px 3px #ccc;\n}\n.homeflight-footer .div-menu-footer {\n  display: flex;\n  justify-content: space-between;\n}\n.homeflight-footer .div-menu-footer .div-button-menu {\n  display: flex;\n  flex-direction: column;\n  width: 72px;\n  height: 56px;\n}\n.homeflight-footer .div-menu-footer .div-button-menu .text-menu {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 500;\n  letter-spacing: -0.8px;\n  line-height: 20px;\n  margin-top: -12px;\n  text-align: center;\n}\n.homeflight-footer .div-menu-footer .div-button-menu .icon-menu {\n  width: 44px;\n  height: 44px;\n  margin-top: -2px;\n  margin-left: 14px;\n}\n.homeflight-footer .activated {\n  color: #26bed6 !important;\n  opacity: 1 !important;\n}\n.homeflight-footer .icon-flight-menu {\n  color: #828282;\n  opacity: 0.7;\n  width: 24px;\n  height: 24px;\n  padding: 9px;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodG1lbnVmb290ZXIvZmxpZ2h0bWVudWZvb3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodG1lbnVmb290ZXIvZmxpZ2h0bWVudWZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBR0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDREo7QURHSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RaO0FER1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEaEI7QURJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0ZoQjtBRE1JO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQ0pSO0FET0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRtZW51Zm9vdGVyL2ZsaWdodG1lbnVmb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVmbGlnaHQtZm9vdGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8vcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy9ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDNweCAjY2NjO1xyXG5cclxuICAgIC5kaXYtbWVudS1mb290ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICAgICAgICAuZGl2LWJ1dHRvbi1tZW51e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogNzJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC50ZXh0LW1lbnV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5pY29uLW1lbnV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmF0ZWR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24tZmxpZ2h0LW1lbnV7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn0iLCIuaG9tZWZsaWdodC1mb290ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggM3B4ICNjY2M7XG59XG4uaG9tZWZsaWdodC1mb290ZXIgLmRpdi1tZW51LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ob21lZmxpZ2h0LWZvb3RlciAuZGl2LW1lbnUtZm9vdGVyIC5kaXYtYnV0dG9uLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuLmhvbWVmbGlnaHQtZm9vdGVyIC5kaXYtbWVudS1mb290ZXIgLmRpdi1idXR0b24tbWVudSAudGV4dC1tZW51IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZWZsaWdodC1mb290ZXIgLmRpdi1tZW51LWZvb3RlciAuZGl2LWJ1dHRvbi1tZW51IC5pY29uLW1lbnUge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi5ob21lZmxpZ2h0LWZvb3RlciAuYWN0aXZhdGVkIHtcbiAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLmhvbWVmbGlnaHQtZm9vdGVyIC5pY29uLWZsaWdodC1tZW51IHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG9wYWNpdHk6IDAuNztcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogOXB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */"

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






let FlightMenuFooterPage = class FlightMenuFooterPage {
    constructor(navCtrl, gf, _flightService, modalCtrl, toastCtrl, zone) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this._flightService = _flightService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
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

module.exports = "<ion-tabs>\n\n  <ion-tab-bar class=\"tabbar\" slot=\"bottom\">\n    <ion-tab-button class=\"tab-button\" tab=\"tab1\">\n      <ion-icon class=\"icon-tab\" name=\"home\"></ion-icon>\n      <ion-label>Trang chủ</ion-label>\n    </ion-tab-button>\n    <div class=\"div-split\"></div>\n    <ion-tab-button class=\"tab-button\" tab=\"tab2\">\n      <ion-icon class=\"icon-tab\" name=\"heart\"></ion-icon>\n      <ion-label>Yêu thích</ion-label>\n    </ion-tab-button>\n    <div class=\"div-split\"></div>\n    <ion-tab-button class=\"tab-button\" tab=\"tab3\">\n      <ion-icon class=\"icon-tab\" name=\"paper-plane\"></ion-icon>\n      <ion-label>Đơn hàng</ion-label>\n    </ion-tab-button>\n    <div class=\"div-split\"></div>\n    <ion-tab-button class=\"tab-button\" tab=\"tab4\">\n      <ion-icon class=\"icon-tab\" name=\"text\"></ion-icon>\n      <ion-label>Hộp thư</ion-label>\n      <ion-badge *ngIf=\"countmessage\" color=\"danger\">{{countmessage}}</ion-badge>\n    </ion-tab-button>\n    <div class=\"div-split\"></div>\n    <ion-tab-button class=\"tab-button\" tab=\"tab5\">\n      <ion-icon class=\"icon-tab\" name=\"contact\"></ion-icon>\n      <ion-label>Tài khoản</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n  <!-- <app-foodmenufooter></app-foodmenufooter> -->\n  <app-flightmenufooter></app-flightmenufooter>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabbar {\n  background: #f8f8f8;\n  padding: 0;\n  border: none;\n  height: 56px;\n  box-shadow: 2px 4px 5px 3px #dedede;\n}\n\n.icon-tab {\n  height: 24px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-group.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 8px 0px #828282;\n  border-radius: 10px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-container.sc-ion-action-sheet-ios {\n  justify-content: flex-start;\n  margin-top: calc(env(safe-area-inset-top) * 2 - 14px);\n  -webkit-padding-start: 8px;\n  padding-inline-start: 8px;\n  -webkit-padding-end: 8px;\n  padding-inline-end: 8px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-title.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  background-position: unset;\n  text-align: left;\n  font-weight: bold;\n  color: #222222;\n  padding-top: 10px;\n  padding-bottom: 0px;\n  padding-left: 44px;\n  font-size: 14px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  color: #222222;\n  font-size: 14px;\n}\n\n::ng-deep .ic_bus2 .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_home .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_paper .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_message .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-group.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 8px 0px #828282;\n  border-radius: 10px !important;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 60px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n  margin: 0;\n  width: 100%;\n}\n\n::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 44px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n\n::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 80px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n\n::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 90px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 18px;\n  display: initial;\n}\n\n@media (min-width: 250px) and (max-width: 329px) {\n  ::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 72px;\n  }\n  ::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 44px;\n  }\n  ::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 80px;\n  }\n  ::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 102px;\n  }\n}\n\n::ng-deep .ion-page {\n  overflow-y: scroll;\n}\n\n::ng-deep .ic_bus2 .toast-container::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_home .toast-container::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_paper .toast-container::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\n::ng-deep .ic_message .toast-container::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n\nion-tab-button {\n  font-weight: normal;\n  color: rgba(60, 60, 60, 0.7);\n  padding: 0;\n}\n\n.tabbar .tab-button[aria-selected=true] {\n  color: #26bed6;\n  padding: 0;\n}\n\n.tab-button a {\n  margin: 0;\n}\n\n.tab-button {\n  min-width: 82px;\n  --padding-end: 0;\n  --padding-start: 0;\n}\n\n@media (min-width: 278px) and (max-width: 319px) {\n  .tab-button {\n    --padding-end: 0;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: -0.5px;\n    min-width: 56px;\n  }\n}\n\n@media (min-width: 320px) and (max-width: 339px) {\n  .tab-button {\n    --padding-end: 0;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: -0.5px;\n    min-width: 60px;\n  }\n}\n\n@media (min-width: 340px) and (max-width: 359px) {\n  .tab-button {\n    --padding-end: 0;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: -0.5px;\n    min-width: 64px;\n  }\n}\n\n@media (min-width: 360px) and (max-width: 399px) {\n  .tab-button {\n    --padding-end: 0;\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: -0.9px;\n    min-width: 72px;\n  }\n}\n\n.div-split {\n  width: 0px;\n  height: 100%;\n  background-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUlBLG1DQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0FDQUo7O0FESUk7RUFDRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7QUNETjs7QURHSTtFQUNFLDJCQUFBO0VBQ0EscURBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ0ROOztBRElJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZOOztBRElJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNGTjs7QURJSTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDRk47O0FESUk7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBREtJO0VBQ0UsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNITjs7QURLSTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDSE47O0FES0k7RUFDRSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsOEJBQUE7QUNITjs7QURNSTtFQUNFLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ00sV0FBQTtBQ0paOztBRE9JO0VBQ0UsMkJBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDRixtQkFBQTtBQ0xKOztBRFFJO0VBQ0UsMkJBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0YsMEJBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNJO0VBQ0UsMkJBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQ1BOOztBRFNJO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1BOOztBRFVJO0VBQ0U7SUFDRSxnQkFBQTtFQ1JOO0VEV0k7SUFDRSxnQkFBQTtFQ1ROO0VEWUk7SUFDRSxnQkFBQTtFQ1ZOO0VEYUk7SUFDRSxpQkFBQTtFQ1hOO0FBQ0Y7O0FEYUk7RUFDSSxrQkFBQTtBQ1hSOztBRGlCSTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDZk47O0FEaUJJO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNmTjs7QURrQkk7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ2hCTjs7QURrQkk7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ2hCTjs7QURvQkU7RUFDRSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQ2pCSjs7QURvQkU7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ2pCSjs7QURxQkk7RUFDSSxTQUFBO0FDbEJSOztBRHFCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbEJSOztBRG9CSTtFQUNFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUNqQlI7QUFDRjs7QURtQkk7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxlQUFBO0VDakJWO0FBQ0Y7O0FEbUJNO0VBQ0U7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtFQ2pCVjtBQUNGOztBRG1CTTtFQUNFO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7RUNqQlY7QUFDRjs7QURtQk07RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDbEJSIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNTZweDtcclxuXHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICAgIDJweCA0cHggNXB4IDNweCAjZGVkZWRlO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNHB4IDVweCAzcHggI2RlZGVkZTtcclxuICAgIGJveC1zaGFkb3c6ICAgICAgICAgMnB4IDRweCA1cHggM3B4ICNkZWRlZGU7XHJcbiAgfVxyXG5cclxuICAuaWNvbi10YWJ7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXB7XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMHB4ICM4MjgyODI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkqMiAtIDE0cHggKTtcclxuICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA4cHg7XHJcbiAgICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDhweDtcclxuICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB1bnNldDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0NHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuaWNfYnVzMiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmV7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX2J1czIuc3ZnJyk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICAgIH1cclxuICAgIC5pY19ob21lIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfaG9tZS5zdmcnKTtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gICAgICAvL3RvcDoxM3B4O1xyXG4gICAgfVxyXG4gICAgLmljX3BhcGVyIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnJyk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICAgIH1cclxuICAgIC5pY19tZXNzYWdlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfbWVzc2FnZS5zdmcnKTtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDBweCAjODI4MjgyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOjEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDo2MHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xyXG4gICAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtaW4taGVpZ2h0OjQ0cHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcclxuICAgICAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZml4aGVpZ2h0LTgwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtaW4taGVpZ2h0OjgwcHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWluLWhlaWdodDo5MHB4O1xyXG4gICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xyXG4gICAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgIH1cclxuICBcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAyNTBweCkgYW5kIChtYXgtd2lkdGg6IDMyOXB4KSB7XHJcbiAgICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICBtaW4taGVpZ2h0OjcycHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmZpeGhlaWdodC00NCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICBtaW4taGVpZ2h0OjQ0cHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICBtaW4taGVpZ2h0OjgwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICBtaW4taGVpZ2h0OjEwMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW9uLXBhZ2V7XHJcbiAgICAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vLy8vL25ldyBzdHlsZVxyXG5cclxuICAgIC5pY19idXMyIC50b2FzdC1jb250YWluZXI6OmJlZm9yZXtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfYnVzMi5zdmcnKTtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gICAgfVxyXG4gICAgLmljX2hvbWUgLnRvYXN0LWNvbnRhaW5lcjo6YmVmb3Jle1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19ob21lLnN2ZycpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgICAgIC8vdG9wOjEzcHg7XHJcbiAgICB9XHJcbiAgICAuaWNfcGFwZXIgLnRvYXN0LWNvbnRhaW5lcjo6YmVmb3Jle1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19wYXBlci5zdmcnKTtcclxuICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gICAgfVxyXG4gICAgLmljX21lc3NhZ2UgLnRvYXN0LWNvbnRhaW5lcjo6YmVmb3Jle1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19tZXNzYWdlLnN2ZycpO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgaW9uLXRhYi1idXR0b24ge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIDAuNyk7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLnRhYmJhciAudGFiLWJ1dHRvblthcmlhLXNlbGVjdGVkPXRydWVdIHtcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAudGFiLWJ1dHRvbiBhe1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAudGFiLWJ1dHRvbntcclxuICAgICAgICBtaW4td2lkdGg6IDgycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMjc4cHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCkge1xyXG4gICAgICAudGFiLWJ1dHRvbntcclxuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogNTZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzM5cHgpIHtcclxuICAgICAgICAudGFiLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzNDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XHJcbiAgICAgICAgLnRhYi1idXR0b257XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2NHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xyXG4gICAgICAgIC50YWItYnV0dG9ue1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC45cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNzJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRpdi1zcGxpdHtcclxuICAgICAgICAvL3BhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBcclxuIiwiLnRhYmJhciB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA1NnB4O1xuICAtbW96LWJveC1zaGFkb3c6IDJweCA0cHggNXB4IDNweCAjZGVkZWRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCA0cHggNXB4IDNweCAjZGVkZWRlO1xuICBib3gtc2hhZG93OiAycHggNHB4IDVweCAzcHggI2RlZGVkZTtcbn1cblxuLmljb24tdGFiIHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAwcHggIzgyODI4MjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICogMiAtIDE0cHgpO1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogOHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHVuc2V0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5pY19idXMyIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19idXMyLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX2hvbWUgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX2hvbWUuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfcGFwZXIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX3BhcGVyLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX21lc3NhZ2UgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX21lc3NhZ2Uuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IDBweCAjODI4MjgyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNjBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNDRweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjo6bmctZGVlcCAuZml4aGVpZ2h0LTgwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogODBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjo6bmctZGVlcCAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogOTBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBpbml0aWFsO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogMzI5cHgpIHtcbiAgOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgbWluLWhlaWdodDogNzJweDtcbiAgfVxuICA6Om5nLWRlZXAgLmZpeGhlaWdodC00NCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgbWluLWhlaWdodDogNDRweDtcbiAgfVxuICA6Om5nLWRlZXAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgbWluLWhlaWdodDogODBweDtcbiAgfVxuICA6Om5nLWRlZXAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gICAgbWluLWhlaWdodDogMTAycHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuaW9uLXBhZ2Uge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG46Om5nLWRlZXAgLmljX2J1czIgLnRvYXN0LWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX2J1czIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfaG9tZSAudG9hc3QtY29udGFpbmVyOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfaG9tZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5pY19wYXBlciAudG9hc3QtY29udGFpbmVyOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfbWVzc2FnZSAudG9hc3QtY29udGFpbmVyOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfbWVzc2FnZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG5pb24tdGFiLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIDAuNyk7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50YWJiYXIgLnRhYi1idXR0b25bYXJpYS1zZWxlY3RlZD10cnVlXSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGFiLWJ1dHRvbiBhIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGFiLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogODJweDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjc4cHgpIGFuZCAobWF4LXdpZHRoOiAzMTlweCkge1xuICAudGFiLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIG1pbi13aWR0aDogNTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogMzM5cHgpIHtcbiAgLnRhYi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1lbmQ6IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNDBweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC50YWItYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gICAgbWluLXdpZHRoOiA2NHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzOTlweCkge1xuICAudGFiLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuOXB4O1xuICAgIG1pbi13aWR0aDogNzJweDtcbiAgfVxufVxuLmRpdi1zcGxpdCB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn0iXX0= */"

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





















let TabsPage = class TabsPage {
    constructor(platform, router, activeRoute, modalCtrl, searchhotel, navCtrl, gf, booking, storage, zone, valueGlobal, badge, fcm, fcmNative, toastCrl, actionSheetCtrl, networkProvider, appVersion, market, _flightService, activityService) {
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
                    this.fcmNative.onTokenRefresh().subscribe(token => {
                        this.storage.get('auth_token').then(auth_token => {
                            if (token) {
                                this.storage.set('deviceToken', token);
                                this.gf.pushTokenAndMemberID(auth_token, token, this.appversion);
                            }
                        });
                    });
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
                                console.log(data);
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
                this.navCtrl.navigateForward(data.dataLink);
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
                se.navCtrl.navigateForward(data.dataLink);
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetNotificationByUser?pageIndex=1&pageSize=50',
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
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["ActivityService"]])
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map