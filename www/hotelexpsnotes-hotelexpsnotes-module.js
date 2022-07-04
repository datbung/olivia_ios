(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hotelexpsnotes-hotelexpsnotes-module"],{

/***/ "./src/app/hotelexpsnotes/hotelexpsnotes.html":
/*!****************************************************!*\
  !*** ./src/app/hotelexpsnotes/hotelexpsnotes.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    \r\n    <ion-row>\r\n        <ion-col style=\"text-align: center;height: 56px;\">\r\n            <div style=\"align-self: center\" >\r\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\r\n                <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n              </div>\r\n            <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Ăn gì - Chơi gì</label></div>\r\n            </div>\r\n        </ion-col>\r\n        </ion-row>\r\n    </ion-header>\r\n    \r\n    <ion-content >\r\n        <div class=\"hotel-exps-notes-content\">\r\n            <div *ngFor=\"let note of listExpsNotes\">\r\n                <div class=\"note-title\" >Dưới đây là những món ăn và địa điểm bạn nhất định phải thử nếu có dịp ghé qua {{ provinceName }}</div>\r\n                <div class=\"note-description\" [innerHTML]=\"note.description\"></div>\r\n            </div>\r\n        </div>\r\n    </ion-content>"

/***/ }),

/***/ "./src/app/hotelexpsnotes/hotelexpsnotes.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/hotelexpsnotes/hotelexpsnotes.module.ts ***!
  \*********************************************************/
/*! exports provided: HotelExpsNotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelExpsNotesPageModule", function() { return HotelExpsNotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hotelexpsnotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotelexpsnotes */ "./src/app/hotelexpsnotes/hotelexpsnotes.ts");







let HotelExpsNotesPageModule = class HotelExpsNotesPageModule {
};
HotelExpsNotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hotelexpsnotes__WEBPACK_IMPORTED_MODULE_6__["HotelExpsNotesPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _hotelexpsnotes__WEBPACK_IMPORTED_MODULE_6__["HotelExpsNotesPage"]
                }
            ])
        ],
    })
], HotelExpsNotesPageModule);



/***/ }),

/***/ "./src/app/hotelexpsnotes/hotelexpsnotes.scss":
/*!****************************************************!*\
  !*** ./src/app/hotelexpsnotes/hotelexpsnotes.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.hotel-exps-notes-content {\n  padding: 16px;\n}\n\n.note-title {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvaG90ZWxleHBzbm90ZXMvaG90ZWxleHBzbm90ZXMuc2NzcyIsInNyYy9hcHAvaG90ZWxleHBzbm90ZXMvaG90ZWxleHBzbm90ZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDQVI7O0FERUk7RUFDSSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksYUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2hvdGVsZXhwc25vdGVzL2hvdGVsZXhwc25vdGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICByaWdodDogNiU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWFycm93e1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaG90ZWwtZXhwcy1ub3Rlcy1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAubm90ZS10aXRsZXtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4iLCIuaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcmlnaHQ6IDYlO1xufVxuXG4uaGVhZGVyLWFycm93IHtcbiAgbWFyZ2luOiAzcHggMTFweDtcbn1cblxuLmhvdGVsLWV4cHMtbm90ZXMtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5ub3RlLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/hotelexpsnotes/hotelexpsnotes.ts":
/*!**************************************************!*\
  !*** ./src/app/hotelexpsnotes/hotelexpsnotes.ts ***!
  \**************************************************/
/*! exports provided: HotelExpsNotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelExpsNotesPage", function() { return HotelExpsNotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");




let HotelExpsNotesPage = class HotelExpsNotesPage {
    constructor(platform, navCtrl, gf) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.listExpsNotes = [];
        this.provinceName = "";
        let params = this.gf.getParams('hotelexpsnotes');
        if (params) {
            this.provinceName = params.provinceName;
            this.loadNotes(params.notes);
        }
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.back();
            });
        });
        gf.googleAnalytion('hotelexpsnote', 'load', '');
    }
    ngOnInit() {
    }
    loadNotes(lstExpsNotes) {
        lstExpsNotes.forEach(element => {
            this.listExpsNotes.push(element);
        });
    }
    goback() {
        this.navCtrl.back();
    }
};
HotelExpsNotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hotelexpsnotes',
        template: __webpack_require__(/*! ./hotelexpsnotes.html */ "./src/app/hotelexpsnotes/hotelexpsnotes.html"),
        styles: [__webpack_require__(/*! ./hotelexpsnotes.scss */ "./src/app/hotelexpsnotes/hotelexpsnotes.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"]])
], HotelExpsNotesPage);



/***/ })

}]);
//# sourceMappingURL=hotelexpsnotes-hotelexpsnotes-module.js.map