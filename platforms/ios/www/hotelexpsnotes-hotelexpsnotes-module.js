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

module.exports = ".header-title {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.hotel-exps-notes-content {\n  padding: 16px;\n}\n\n.note-title {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2hvdGVsZXhwc25vdGVzL2hvdGVsZXhwc25vdGVzLnNjc3MiLCJzcmMvYXBwL2hvdGVsZXhwc25vdGVzL2hvdGVsZXhwc25vdGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0FSOztBREVJO0VBQ0ksZ0JBQUE7QUNDUjs7QURDSTtFQUNJLGFBQUE7QUNFUjs7QURBSTtFQUNJLGdCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9ob3RlbGV4cHNub3Rlcy9ob3RlbGV4cHNub3Rlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1hcnJvd3tcclxuICAgICAgICBtYXJnaW46IDNweCAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmhvdGVsLWV4cHMtbm90ZXMtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm5vdGUtdGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuIiwiLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHJpZ2h0OiA2JTtcbn1cblxuLmhlYWRlci1hcnJvdyB7XG4gIG1hcmdpbjogM3B4IDExcHg7XG59XG5cbi5ob3RlbC1leHBzLW5vdGVzLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubm90ZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"

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