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

module.exports = ".header-title {\n  align-self: center;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n  text-align: center;\n}\n\n.hotel-notes-content {\n  padding: 16px;\n}\n\n.note-title {\n  font-weight: 500;\n  padding: 4px 0;\n}\n\np {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9ob3RlbG5vdGVzL2hvdGVsbm90ZXMuc2NzcyIsInNyYy9hcHAvaG90ZWxub3Rlcy9ob3RlbG5vdGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0FSOztBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxhQUFBO0FDRVI7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNHUjs7QURESTtFQUNJLFNBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsbm90ZXMvaG90ZWxub3Rlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHJpZ2h0OiA2JTtcclxuICAgIH1cclxuICAgIC5oZWFkZXItaWNvbntcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICAgLmhvdGVsLW5vdGVzLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxuICAgIC5ub3RlLXRpdGxle1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICAgIG1hcmdpbjowO1xyXG4gICAgfVxyXG4iLCIuaGVhZGVyLXRpdGxlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHJpZ2h0OiA2JTtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaG90ZWwtbm90ZXMtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5ub3RlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59Il19 */"

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