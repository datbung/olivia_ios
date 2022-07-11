(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hotelnotes-hotelnotes-module"],{

/***/ "./src/app/hotelnotes/hotelnotes.html":
/*!********************************************!*\
  !*** ./src/app/hotelnotes/hotelnotes.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-row>\r\n        <ion-col style=\"text-align: center;height: 56px;\">\r\n            <div style=\"align-self: center\" >\r\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\r\n                <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-8px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n              </div>\r\n            <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thông tin cần ghi nhớ</label></div>\r\n            </div>\r\n        </ion-col>\r\n        </ion-row>\r\n    </ion-header>\r\n    \r\n    <ion-content >\r\n        <div class=\"hotel-notes-content\">\r\n            <div *ngFor=\"let note of listNotes\">\r\n                <div class=\"note-title\" >{{note.title}}</div>\r\n                <div class=\"note-description\" [innerHTML]=\"note.description\"></div>\r\n            </div>\r\n        </div>\r\n    </ion-content>"

/***/ }),

/***/ "./src/app/hotelnotes/hotelnotes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/hotelnotes/hotelnotes.module.ts ***!
  \*************************************************/
/*! exports provided: HotelNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelNotesPageModule", function() { return HotelNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hotelnotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotelnotes */ "./src/app/hotelnotes/hotelnotes.ts");







let HotelNotesPageModule = class HotelNotesPageModule {
};
HotelNotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hotelnotes__WEBPACK_IMPORTED_MODULE_6__["HotelNotesPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _hotelnotes__WEBPACK_IMPORTED_MODULE_6__["HotelNotesPage"]
                }
            ])
        ],
    })
], HotelNotesPageModule);



/***/ }),

/***/ "./src/app/hotelnotes/hotelnotes.scss":
/*!********************************************!*\
  !*** ./src/app/hotelnotes/hotelnotes.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".header-title {\n  align-self: center;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n  text-align: center;\n}\n\n.hotel-notes-content {\n  padding: 16px;\n}\n\n.note-title {\n  font-weight: 500;\n  padding: 4px 0;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvaG90ZWxub3Rlcy9ob3RlbG5vdGVzLnNjc3MiLCJzcmMvYXBwL2hvdGVsbm90ZXMvaG90ZWxub3Rlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNBUjs7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksYUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDR1I7O0FEREk7RUFDSSxTQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC9ob3RlbG5vdGVzL2hvdGVsbm90ZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICByaWdodDogNiU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWljb257XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAgIC5ob3RlbC1ub3Rlcy1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAubm90ZS10aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW46MDtcclxuICAgIH1cclxuIiwiLmhlYWRlci10aXRsZSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICByaWdodDogNiU7XG59XG5cbi5oZWFkZXItaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvdGVsLW5vdGVzLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubm90ZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"
=======
module.exports = ".header-title {\n  align-self: center;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n  text-align: center;\n}\n\n.hotel-notes-content {\n  padding: 16px;\n}\n\n.note-title {\n  font-weight: 500;\n  padding: 4px 0;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2hvdGVsbm90ZXMvaG90ZWxub3Rlcy5zY3NzIiwic3JjL2FwcC9ob3RlbG5vdGVzL2hvdGVsbm90ZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDQVI7O0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDSTtFQUNJLGFBQUE7QUNFUjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0dSOztBRERJO0VBQ0ksU0FBQTtBQ0lSIiwiZmlsZSI6InNyYy9hcHAvaG90ZWxub3Rlcy9ob3RlbG5vdGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1pY29ue1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgICAuaG90ZWwtbm90ZXMtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm5vdGUtdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICB9XHJcbiIsIi5oZWFkZXItdGl0bGUge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcmlnaHQ6IDYlO1xufVxuXG4uaGVhZGVyLWljb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob3RlbC1ub3Rlcy1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLm5vdGUtdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/hotelnotes/hotelnotes.ts":
/*!******************************************!*\
  !*** ./src/app/hotelnotes/hotelnotes.ts ***!
  \******************************************/
/*! exports provided: HotelNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelNotesPage", function() { return HotelNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");




let HotelNotesPage = class HotelNotesPage {
    constructor(platform, navCtrl, gf) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.listNotes = [];
        let params = this.gf.getParams('hotelnotes');
        this.loadNotes(params);
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.back();
            });
        });
        this.gf.googleAnalytion('hotelnotes', 'load', '');
    }
    loadNotes(lstNotes) {
        lstNotes.forEach(element => {
            this.listNotes.push(element);
        });
    }
    goback() {
        this.navCtrl.back();
    }
};
HotelNotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hotelnotes',
        template: __webpack_require__(/*! ./hotelnotes.html */ "./src/app/hotelnotes/hotelnotes.html"),
        styles: [__webpack_require__(/*! ./hotelnotes.scss */ "./src/app/hotelnotes/hotelnotes.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"]])
], HotelNotesPage);



/***/ })

}]);
//# sourceMappingURL=hotelnotes-hotelnotes-module.js.map