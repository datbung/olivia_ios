(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchhotel-searchhotel-module"],{

/***/ "./src/app/searchhotel/searchhotel.html":
/*!**********************************************!*\
  !*** ./src/app/searchhotel/searchhotel.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"new-background\">\n    <div class=\"img-back\" (click)=\"goback()\">\n      <img \n        src=\"./assets/imgs/icon_back.svg\">\n    </div>\n    <div class=\"div-search\">\n      <ion-input  #ipSearchHotel [(ngModel)]=\"inputText\" (ionChange)=\"getItems($event)\" [ngClass]=\"inputText ? 'cls-input-search-text' : 'cls-input-search'\" placeholder=\"Nhập tên khách sạn,thành phố...\"></ion-input>\n    </div>\n    <div *ngIf=\"inputText\"  class=\"img-close\" >\n      <img (click)=\"clearText()\"\n        src=\"./assets/imgs/icon_close.svg\">\n    </div>\n  </ion-toolbar>\n  </ion-header>\n<ion-content padding style=\"--keyboard-offset: 50px !important\">\n  \n  <div *ngIf=\"!ischecklist\">\n    <div class=\"div-popular\">\n      <ion-label class=\"text-popular\">\n       Phổ biến\n      </ion-label>\n      \n    </div>\n    <div style=\"margin-top:28px\">\n      <div  *ngFor=\"let msg of json; let i = index\">\n        <ion-row class=\"cls-row\" (click)=\"nextPopular(msg,i)\">\n          <ion-col size=\"12\" text-left>\n            <ion-label >\n              <ion-label>\n                <p class=\"text-region\"> {{msg.regionName}}</p>\n                <p class=\"text-region-1\">{{msg.province}}, {{msg.country}}</p>\n              \n              </ion-label>\n            </ion-label>\n           \n          </ion-col>\n        </ion-row>\n        <div class=\"div-split\">\n\n        </div>\n      </div>\n\n    </div>\n   \n  </div>\n  \n    <!-- <form action =\".\">\n      <ion-searchbar #input class=\"searchhotel-bar\" style=\"padding-inline-start: 11px;padding-inline-end: 11px;\" searchIcon=\"false\" id=\"input\" style=\"padding: 0;padding-bottom: 15px;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"300\" placeholder=\"Nhập tên khách sạn,thành phố,khu vực...\" (ionChange)=\"getItems($event)\" ></ion-searchbar>\n    </form> -->\n  <div>\n    <div *ngIf=\"ischecklist\">\n      <div (click)=\"itemclick(item)\" *ngFor=\"let item of items\">\n        <ion-row *ngIf=\"item.show\" class=\"cls-row-width\">\n          <ion-col text-left style=\"padding:16px 0px\">\n            <ion-label *ngIf=\"item.HotelName\" class=\"label-item-search\">\n              <img src=\"./assets/ic_facility/ic_hotel.svg\"> {{ item.HotelName }}\n            </ion-label>\n            <ion-label *ngIf=\"item.RegionName\" class=\"label-item-search\">\n              <img src=\"./assets/ic_facility/Group.svg\"> {{ item.RegionName }}\n            </ion-label>\n          </ion-col>\n          <ion-col *ngIf=\"item.RegionName\" text-right style=\"padding:16px 0px\">\n            <ion-label style=\"color: #26bed6\">\n              {{item.TotalHotels}} khách sạn\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n  </div>\n  <div style=\"margin-top: 20px\">\n      <label *ngIf=\"ischecktext\">Không tìm thấy kết quả tìm kiếm.Vui lòng nhập lại!</label>\n  </div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/searchhotel/searchhotel.module.ts":
/*!***************************************************!*\
  !*** ./src/app/searchhotel/searchhotel.module.ts ***!
  \***************************************************/
/*! exports provided: SearchHotelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHotelPageModule", function() { return SearchHotelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchhotel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchhotel */ "./src/app/searchhotel/searchhotel.ts");







let SearchHotelPageModule = class SearchHotelPageModule {
};
SearchHotelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _searchhotel__WEBPACK_IMPORTED_MODULE_6__["SearchHotelPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _searchhotel__WEBPACK_IMPORTED_MODULE_6__["SearchHotelPage"]
                }]),
        ],
    })
], SearchHotelPageModule);



/***/ }),

/***/ "./src/app/searchhotel/searchhotel.scss":
/*!**********************************************!*\
  !*** ./src/app/searchhotel/searchhotel.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".inputtext {\n  height: 48px;\n  color: #757575;\n  width: 100%;\n  display: block;\n  padding: 12px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #8f8f8f;\n  border-radius: 5px;\n}\n\ndiv.solid {\n  border-style: solid;\n  border-color: #bdbdbd;\n  border-width: 1px;\n  height: 44px;\n  border-radius: 5px;\n}\n\n.button5 {\n  background: #26bed6;\n  color: #ffffff;\n  border-color: #26bed6;\n  width: 100%;\n  font-size: 12px;\n  height: 48px;\n}\n\n.list-header-md {\n  padding-left: 0px;\n  margin-bottom: 0px;\n  min-height: 0px;\n  border-top: 0px solid #dedede;\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #222222;\n}\n\n.item-md {\n  padding-left: 0px;\n}\n\nion-icon {\n  display: inline-block;\n  font-size: 2em;\n  margin-right: 5px;\n}\n\n.searchbar-md {\n  background: inherit;\n  padding: 0px;\n}\n\n.searchbar-md .searchbar-input {\n  padding: 6px 55px;\n  border-radius: 5px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 3rem;\n  color: #141414;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.list-md {\n  margin: 0;\n}\n\n.cls-row-width {\n  width: 100%;\n}\n\n.title-item-search {\n  padding: 16px 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.label-item-search {\n  padding: 8px 0px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\nlabel {\n  padding: 18px 0px;\n}\n\ninput:focus {\n  border: 1px solid #003C71;\n  color: #757575;\n}\n\n::ng-deep .searchbar-input.sc-ion-searchbar-md {\n  -webkit-padding-start: 11px;\n          padding-inline-start: 11px;\n  -webkit-padding-end: 11px;\n          padding-inline-end: 11px;\n}\n\n::ng-deep .searchbar-input-container.sc-ion-searchbar-ios {\n  height: 48px;\n}\n\n.cls-input-search {\n  margin-top: 5px;\n  margin-left: 13px;\n  text-align: left;\n}\n\n.cls-input-search-text {\n  margin-top: 5px;\n  margin-left: 13px;\n  text-align: left;\n  width: 85%;\n}\n\n.div-search {\n  border: solid 0.5px #bdbdbd;\n  border-radius: 6px;\n  height: 48px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #333333;\n  background: #ffffff;\n  margin: 4px 20px 4px 49px;\n}\n\n.new-background {\n  --background: #26bed6;\n}\n\n.img-back {\n  position: absolute;\n  top: 3%;\n  color: #ffffff;\n  margin-top: 6px;\n}\n\n.img-close {\n  position: absolute;\n  top: 3%;\n  color: #ffffff;\n  margin-top: 6px;\n  right: 20px;\n}\n\n.div-popular {\n  background-color: #f2f2f2;\n  margin: -16px;\n  height: 41px;\n}\n\n.text-popular {\n  padding: 13px 0px 11px 16px;\n  position: absolute;\n}\n\n.text-region {\n  font-weight: 600;\n  color: #333;\n}\n\n.text-region-1 {\n  color: #828282;\n  font-size: 12px;\n}\n\n.div-split {\n  height: 1px;\n  background-color: #f2f2f2;\n}\n\n.cls-row {\n  margin-left: -5px;\n  margin-top: 12px;\n  margin-bottom: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvc2VhcmNoaG90ZWwvc2VhcmNoaG90ZWwuc2NzcyIsInNyYy9hcHAvc2VhcmNoaG90ZWwvc2VhcmNoaG90ZWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0k7RUFBVyxtQkFBQTtFQUNQLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURESTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDR1I7O0FEREk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJUjs7QURGSTtFQUNJLGlCQUFBO0FDS1I7O0FESEk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ01SOztBREpJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDT1I7O0FETEk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBRUEsK0dBQUE7QUNRUjs7QUROSTtFQUNJLFNBQUE7QUNTUjs7QURFSTtFQUNJLFdBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7QUNJUjs7QURGSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQ0tSOztBRERRO0VBQ0ksMkJBQUE7VUFBQSwwQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7QUNJWjs7QURGUTtFQUVJLFlBQUE7QUNHWjs7QURBSTtFQUNJLGVBQUE7RUFDRCxpQkFBQTtFQUNBLGdCQUFBO0FDR1A7O0FEREk7RUFDSSxlQUFBO0VBQ0QsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNJUDs7QURGSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNLUjs7QURISTtFQUNJLHFCQUFBO0FDTVI7O0FESkk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ09SOztBRExJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDUVI7O0FETkk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDU1I7O0FEUEk7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0FDVVI7O0FEUkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNXUjs7QURSSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDV1I7O0FEVEk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUNZUjs7QURWSTtFQUNHLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQyxtQkFBQTtBQ2FSIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoaG90ZWwvc2VhcmNoaG90ZWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuaW5wdXR0ZXh0e1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEycHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhmOGY4ZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICBkaXYuc29saWQge2JvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuYnV0dG9uNVxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzI2YmVkNjtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgIH1cbiAgICAubGlzdC1oZWFkZXItbWQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVkZWRlO1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cbiAgICAuaXRlbS1tZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDo1cHhcbiAgICB9XG4gICAgLnNlYXJjaGJhci1tZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLnNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLWlucHV0IHtcbiAgICAgICAgcGFkZGluZzogNnB4IDU1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA4cHggY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICAgICAgY29sb3I6ICMxNDE0MTQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuICAgIC5saXN0LW1kIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAvLyAuaXRlbS1tZCBwIHtcbiAgICAvLyAgICAgbWFyZ2luOiAwIDAgMnB4O1xuICAgIC8vICAgICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgICAvLyAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgLy8gICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIC8vICAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIC8vICAgICBjb2xvcjogIzY2NjtcbiAgICAvLyAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAvLyB9XG4gICAgLmNscy1yb3ctd2lkdGh7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAudGl0bGUtaXRlbS1zZWFyY2h7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH0gICAgICAgIFxuICAgIC5sYWJlbC1pdGVtLXNlYXJjaHtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMHB4O1xuICAgIH1cbiAgICBpbnB1dDpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDNDNzE7XG4gICAgICAgIGNvbG9yOiAjNzU3NTc1ICA7XG4gICAgfVxuXG4gICAgOjpuZy1kZWVwe1xuICAgICAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWR7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTFweDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTFweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLWlvc1xuICAgICAgICB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNscy1pbnB1dC1zZWFyY2h7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuY2xzLWlucHV0LXNlYXJjaC10ZXh0e1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICB3aWR0aDogODUlO1xuICAgIH1cbiAgICAuZGl2LXNlYXJjaHtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luOiA0cHggMjBweCA0cHggNDlweDtcbiAgICB9XG4gICAgLm5ldy1iYWNrZ3JvdW5ke1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMyNmJlZDY7XG4gICAgfVxuICAgIC5pbWctYmFja3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMlO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbiAgICAuaW1nLWNsb3Nle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMyU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuZGl2LXBvcHVsYXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIG1hcmdpbjogLTE2cHg7XG4gICAgICAgIGhlaWdodDogNDFweDtcbiAgICB9XG4gICAgLnRleHQtcG9wdWxhcntcbiAgICAgICAgcGFkZGluZzogMTNweCAwcHggMTFweCAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC50ZXh0LXJlZ2lvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG5cbiAgICB9XG4gICAgLnRleHQtcmVnaW9uLTF7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5kaXYtc3BsaXR7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIH1cbiAgICAuY2xzLXJvd3tcbiAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICBtYXJnaW4tdG9wOiAxMnB4OyBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDsgXG4gICAgfSIsIi5pbnB1dHRleHQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEycHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhmOGY4ZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5kaXYuc29saWQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNiZGJkYmQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmJ1dHRvbjUge1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5saXN0LWhlYWRlci1tZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWRlZGU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5pdGVtLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zZWFyY2hiYXItbWQge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zZWFyY2hiYXItbWQgLnNlYXJjaGJhci1pbnB1dCB7XG4gIHBhZGRpbmc6IDZweCA1NXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgOHB4IGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDNyZW07XG4gIGNvbG9yOiAjMTQxNDE0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubGlzdC1tZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNscy1yb3ctd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlLWl0ZW0tc2VhcmNoIHtcbiAgcGFkZGluZzogMTZweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sYWJlbC1pdGVtLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxubGFiZWwge1xuICBwYWRkaW5nOiAxOHB4IDBweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAzQzcxO1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuOjpuZy1kZWVwIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMXB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDExcHg7XG59XG46Om5nLWRlZXAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5jbHMtaW5wdXQtc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNscy1pbnB1dC1zZWFyY2gtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5kaXYtc2VhcmNoIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzMzMzMzMztcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luOiA0cHggMjBweCA0cHggNDlweDtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjZiZWQ2O1xufVxuXG4uaW1nLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMyU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5pbWctY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMyU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4uZGl2LXBvcHVsYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW46IC0xNnB4O1xuICBoZWlnaHQ6IDQxcHg7XG59XG5cbi50ZXh0LXBvcHVsYXIge1xuICBwYWRkaW5nOiAxM3B4IDBweCAxMXB4IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRleHQtcmVnaW9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi50ZXh0LXJlZ2lvbi0xIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4uY2xzLXJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufSJdfQ== */"
=======
module.exports = ".inputtext {\n  height: 48px;\n  color: #757575;\n  width: 100%;\n  display: block;\n  padding: 12px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #8f8f8f;\n  border-radius: 5px;\n}\n\ndiv.solid {\n  border-style: solid;\n  border-color: #bdbdbd;\n  border-width: 1px;\n  height: 44px;\n  border-radius: 5px;\n}\n\n.button5 {\n  background: #26bed6;\n  color: #ffffff;\n  border-color: #26bed6;\n  width: 100%;\n  font-size: 12px;\n  height: 48px;\n}\n\n.list-header-md {\n  padding-left: 0px;\n  margin-bottom: 0px;\n  min-height: 0px;\n  border-top: 0px solid #dedede;\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #222222;\n}\n\n.item-md {\n  padding-left: 0px;\n}\n\nion-icon {\n  display: inline-block;\n  font-size: 2em;\n  margin-right: 5px;\n}\n\n.searchbar-md {\n  background: inherit;\n  padding: 0px;\n}\n\n.searchbar-md .searchbar-input {\n  padding: 6px 55px;\n  border-radius: 5px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 3rem;\n  color: #141414;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.list-md {\n  margin: 0;\n}\n\n.cls-row-width {\n  width: 100%;\n}\n\n.title-item-search {\n  padding: 16px 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.label-item-search {\n  padding: 8px 0px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\nlabel {\n  padding: 18px 0px;\n}\n\ninput:focus {\n  border: 1px solid #003C71;\n  color: #757575;\n}\n\n::ng-deep .searchbar-input.sc-ion-searchbar-md {\n  -webkit-padding-start: 11px;\n          padding-inline-start: 11px;\n  -webkit-padding-end: 11px;\n          padding-inline-end: 11px;\n}\n\n::ng-deep .searchbar-input-container.sc-ion-searchbar-ios {\n  height: 48px;\n}\n\n.cls-input-search {\n  margin-top: 5px;\n  margin-left: 13px;\n  text-align: left;\n}\n\n.cls-input-search-text {\n  margin-top: 5px;\n  margin-left: 13px;\n  text-align: left;\n  width: 85%;\n}\n\n.div-search {\n  border: solid 0.5px #bdbdbd;\n  border-radius: 6px;\n  height: 48px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #333333;\n  background: #ffffff;\n  margin: 4px 20px 4px 49px;\n}\n\n.new-background {\n  --background: #26bed6;\n}\n\n.img-back {\n  position: absolute;\n  top: 3%;\n  color: #ffffff;\n  margin-top: 6px;\n}\n\n.img-close {\n  position: absolute;\n  top: 3%;\n  color: #ffffff;\n  margin-top: 6px;\n  right: 20px;\n}\n\n.div-popular {\n  background-color: #f2f2f2;\n  margin: -16px;\n  height: 41px;\n}\n\n.text-popular {\n  padding: 13px 0px 11px 16px;\n  position: absolute;\n}\n\n.text-region {\n  font-weight: 600;\n  color: #333;\n}\n\n.text-region-1 {\n  color: #828282;\n  font-size: 12px;\n}\n\n.div-split {\n  height: 1px;\n  background-color: #f2f2f2;\n}\n\n.cls-row {\n  margin-left: -5px;\n  margin-top: 12px;\n  margin-bottom: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3NlYXJjaGhvdGVsL3NlYXJjaGhvdGVsLnNjc3MiLCJzcmMvYXBwL3NlYXJjaGhvdGVsL3NlYXJjaGhvdGVsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQVcsbUJBQUE7RUFDUCxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR1I7O0FEREk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0dSOztBRERJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSVI7O0FERkk7RUFDSSxpQkFBQTtBQ0tSOztBREhJO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNNUjs7QURKSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ09SOztBRExJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUVBLCtHQUFBO0FDUVI7O0FETkk7RUFDSSxTQUFBO0FDU1I7O0FERUk7RUFDSSxXQUFBO0FDQ1I7O0FEQ0k7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VSOztBREFJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHUjs7QURESTtFQUNJLGlCQUFBO0FDSVI7O0FERkk7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNLUjs7QUREUTtFQUNJLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0FDSVo7O0FERlE7RUFFSSxZQUFBO0FDR1o7O0FEQUk7RUFDSSxlQUFBO0VBQ0QsaUJBQUE7RUFDQSxnQkFBQTtBQ0dQOztBRERJO0VBQ0ksZUFBQTtFQUNELGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDSVA7O0FERkk7RUFDSSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDS1I7O0FESEk7RUFDSSxxQkFBQTtBQ01SOztBREpJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNPUjs7QURMSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1FSOztBRE5JO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ1NSOztBRFBJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtBQ1VSOztBRFJJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDV1I7O0FEUkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1dSOztBRFRJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FDWVI7O0FEVkk7RUFDRyxpQkFBQTtFQUNBLGdCQUFBO0VBQ0MsbUJBQUE7QUNhUiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGhvdGVsL3NlYXJjaGhvdGVsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmlucHV0dGV4dHtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZjhmOGY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgZGl2LnNvbGlkIHtib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLmJ1dHRvbjVcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNmJlZDY7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICB9XG4gICAgLmxpc3QtaGVhZGVyLW1kIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMHB4O1xuICAgICAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZGVkZTtcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG4gICAgLml0ZW0tbWQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6NXB4XG4gICAgfVxuICAgIC5zZWFyY2hiYXItbWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5zZWFyY2hiYXItbWQgLnNlYXJjaGJhci1pbnB1dCB7XG4gICAgICAgIHBhZGRpbmc6IDZweCA1NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgOHB4IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XG4gICAgICAgIGNvbG9yOiAjMTQxNDE0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cbiAgICAubGlzdC1tZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLy8gLml0ZW0tbWQgcCB7XG4gICAgLy8gICAgIG1hcmdpbjogMCAwIDJweDtcbiAgICAvLyAgICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIC8vICAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICAvLyAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICAvLyAgICAgY29sb3I6ICM2NjY7XG4gICAgLy8gICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgLy8gfVxuICAgIC5jbHMtcm93LXdpZHRoe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnRpdGxlLWl0ZW0tc2VhcmNoe1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9ICAgICAgICBcbiAgICAubGFiZWwtaXRlbS1zZWFyY2h7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAxOHB4IDBweDtcbiAgICB9XG4gICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAzQzcxO1xuICAgICAgICBjb2xvcjogIzc1NzU3NSAgO1xuICAgIH1cblxuICAgIDo6bmctZGVlcHtcbiAgICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1ke1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDExcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDExcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaGJhci1pbnB1dC1jb250YWluZXIuc2MtaW9uLXNlYXJjaGJhci1pb3NcbiAgICAgICAge1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jbHMtaW5wdXQtc2VhcmNoe1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLmNscy1pbnB1dC1zZWFyY2gtdGV4dHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG4gICAgLmRpdi1zZWFyY2h7XG4gICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbjogNHB4IDIwcHggNHB4IDQ5cHg7XG4gICAgfVxuICAgIC5uZXctYmFja2dyb3VuZHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAuaW1nLWJhY2t7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzJTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG4gICAgLmltZy1jbG9zZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMlO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICByaWdodDogMjBweDtcbiAgICB9XG4gICAgLmRpdi1wb3B1bGFye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBtYXJnaW46IC0xNnB4O1xuICAgICAgICBoZWlnaHQ6IDQxcHg7XG4gICAgfVxuICAgIC50ZXh0LXBvcHVsYXJ7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMHB4IDExcHggMTZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAudGV4dC1yZWdpb257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgfVxuICAgIC50ZXh0LXJlZ2lvbi0xe1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuZGl2LXNwbGl0e1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICB9XG4gICAgLmNscy1yb3d7XG4gICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgICAgbWFyZ2luLXRvcDogMTJweDsgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDExcHg7IFxuICAgIH0iLCIuaW5wdXR0ZXh0IHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZjhmOGY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuZGl2LnNvbGlkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b241IHtcbiAgYmFja2dyb3VuZDogIzI2YmVkNjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4ubGlzdC1oZWFkZXItbWQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCAjZGVkZWRlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uaXRlbS1tZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uc2VhcmNoYmFyLW1kIHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc2VhcmNoYmFyLW1kIC5zZWFyY2hiYXItaW5wdXQge1xuICBwYWRkaW5nOiA2cHggNTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDhweCBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBjb2xvcjogIzE0MTQxNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmxpc3QtbWQge1xuICBtYXJnaW46IDA7XG59XG5cbi5jbHMtcm93LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZS1pdGVtLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGFiZWwtaXRlbS1zZWFyY2gge1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmxhYmVsIHtcbiAgcGFkZGluZzogMThweCAwcHg7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwM0M3MTtcbiAgY29sb3I6ICM3NTc1NzU7XG59XG5cbjo6bmctZGVlcCAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMTFweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMXB4O1xufVxuOjpuZy1kZWVwIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyLnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uY2xzLWlucHV0LXNlYXJjaCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jbHMtaW5wdXQtc2VhcmNoLXRleHQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogODUlO1xufVxuXG4uZGl2LXNlYXJjaCB7XG4gIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbjogNHB4IDIwcHggNHB4IDQ5cHg7XG59XG5cbi5uZXctYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogIzI2YmVkNjtcbn1cblxuLmltZy1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uaW1nLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICByaWdodDogMjBweDtcbn1cblxuLmRpdi1wb3B1bGFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luOiAtMTZweDtcbiAgaGVpZ2h0OiA0MXB4O1xufVxuXG4udGV4dC1wb3B1bGFyIHtcbiAgcGFkZGluZzogMTNweCAwcHggMTFweCAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50ZXh0LXJlZ2lvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udGV4dC1yZWdpb24tMSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmNscy1yb3cge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbn0iXX0= */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/searchhotel/searchhotel.ts":
/*!********************************************!*\
  !*** ./src/app/searchhotel/searchhotel.ts ***!
  \********************************************/
/*! exports provided: SearchHotelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHotelPage", function() { return SearchHotelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");











let SearchHotelPage = class SearchHotelPage {
    constructor(platform, navCtrl, authService, zone, searchHotel, gf, networkProvider, storage, keyboard) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.zone = zone;
        this.searchHotel = searchHotel;
        this.gf = gf;
        this.networkProvider = networkProvider;
        this.storage = storage;
        this.keyboard = keyboard;
        this.child1 = 0;
        this.child = 0;
        this.adults1 = 2;
        this.adults = 2;
        this.arrchild1 = [];
        this.arrchild = [];
        this.showpopup = false;
        this.ischeckadults = true;
        this.ischeckchild = false;
        this.ischeckroom = false;
        this.room1 = 1;
        this.room = 1;
        this.items = [];
        this.ischecklist = false;
        this.isenabled = true;
        this.co = 0;
        this.ischecktext = false;
        this.inputText = "";
        this.arrHistory = [];
        this.recent = this.searchHotel.recent;
        this.isConnected = this.networkProvider.isOnline();
        if (this.isConnected) {
            this.zone.run(() => {
                this.storage.get('listregion').then((data) => {
                    if (data) {
                        this.json = data;
                    }
                    else {
                        this.getdata();
                    }
                });
            });
        }
        else {
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        }
        this.searchHotel.local0check = false;
        this.searchHotel.local1check = false;
        this.searchHotel.local2check = false;
        this.searchHotel.local3check = false;
        this.searchHotel.local4check = false;
        this.searchHotel.local5check = false;
        this.searchHotel.local6check = false;
        this.searchHotel.local7check = false;
        this.searchHotel.local8check = false;
        this.searchHotel.local9check = false;
        this.searchHotel.local10check = false;
        this.searchHotel.local11check = false;
        this.searchHotel.local12check = false;
        this.searchHotel.local13check = false;
        this.searchHotel.local14check = false;
        this.searchHotel.local15check = false;
        this.searchHotel.local16check = false;
        this.searchHotel.local17check = false;
        this.searchHotel.local18check = false;
        this.searchHotel.local19check = false;
        this.searchHotel.location = "";
        this.gf.googleAnalytion('search-hotel', 'load', '');
        this.platform.ready().then(() => {
            document.addEventListener("backbutton", () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.navCtrl.navigateBack('/app/tabs/tab1');
            }));
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.myInput.setFocus();
        }, 150);
    }
    change() {
        this.showpopup = false;
        this.recent = this.searchHotel.recent;
    }
    getdata() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/Regions',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
            if (error) {
                error.page = "searchhotel";
                error.func = "getdata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            se.json = JSON.parse(body);
            se.storage.set('listregion', se.json);
        });
    }
    test() {
        this.setInter = setInterval(function () {
            document.getElementById("mytext").focus();
        }, 1500);
    }
    nextPopular(msg, i) {
        this.index = i;
        this.searchHotel.gbmsg = msg;
        this.searchHotel.input = msg.regionName;
        this.searchHotel.flag = 1;
        this.co = 1;
        this.searchHotel.recent = this.recent;
        this.searchHotel.itemSearchHotelHome.emit(1);
        this.navCtrl.navigateBack('/app/tabs/tab1');
    }
    nextRecent(msg) {
        this.searchHotel.gbmsg = msg;
        if (msg.regionName) {
            this.searchHotel.input = msg.regionName;
        }
        else {
            this.searchHotel.input = msg.hotelName;
        }
        this.searchHotel.flag = 2;
        this.co = 2;
        this.searchHotel.itemSearchHotelHome.emit(1);
        this.navCtrl.navigateBack('/app/tabs/tab1');
    }
    itemclick(msg) {
        this.searchHotel.gbitem = msg;
        if (msg.RegionName) {
            this.searchHotel.input = msg.RegionName;
        }
        else {
            this.searchHotel.input = msg.HotelName;
        }
        this.searchHotel.flag = 0;
        this.co = 0;
        this.searchHotel.itemSearchHotelHome.emit(1);
        this.navCtrl.navigateBack('/app/tabs/tab1');
    }
    getItems(ev) {
        var se = this;
        if (ev.detail.value) {
            const val = ev.detail.value;
            var options = {
                method: 'GET',
                url: 'https://www.ivivu.com/GListSuggestion',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                qs: { key: val },
                headers: {}
            };
            requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                if (error) {
                    error.page = "searchhotel";
                    error.func = "getItems";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    throw new Error(error);
                }
                ;
                se.zone.run(() => {
                    let lstitems = JSON.parse(body);
                    if (lstitems.length && lstitems.length > 0) {
                        se.ischecktext = false;
                        se.ischecklist = true;
                        if (se.items.length == 0) {
                            lstitems.forEach(element => {
                                element.show = true;
                                se.items.push(element);
                            });
                        }
                        else {
                            se.items.forEach(e => {
                                e.show = false;
                            });
                            lstitems.forEach(element => {
                                let check = se.items.filter((i) => { return i.id == element.id; });
                                if (check && check.length == 0) {
                                    element.show = true;
                                    se.items.push(element);
                                }
                                else {
                                    check[0].show = true;
                                }
                            });
                        }
                    }
                    else {
                        se.items.forEach(element => {
                            element.show = false;
                        });
                        se.ischecktext = true;
                        se.ischecklist = true;
                    }
                });
            });
        }
        else {
            se.ischecklist = false;
            se.ischecktext = false;
            se.items.forEach(element => {
                element.show = false;
            });
        }
    }
    search() {
        var se = this;
        this.searchHotel.backPage = "";
        if (this.co == 1) {
            this.authService.region = this.gbmsg.regionName;
            this.authService.regionid = this.gbmsg.regionId;
            this.authService.regioncode = this.gbmsg.regionCode;
            if (this.recent) {
                var cocheck = 0;
                for (let i = 0; i < this.recent.length; i++) {
                    if (this.recent[i].RegionId == this.gbmsg.regionId) {
                        cocheck = 1;
                        break;
                    }
                }
                if (cocheck == 0) {
                    var item1 = { type: "2", hotelId: "", hotelName: "", regionId: this.gbmsg.regionId, regionCode: this.gbmsg.regionCode, regionName: this.gbmsg.regionName, flag: "1", totalHotels: this.gbmsg.totalHotels };
                    se.searchHotel.recent = [];
                    if (this.recent.length > 1) {
                        se.searchHotel.recent.push(this.recent[1]);
                    }
                    else {
                        se.searchHotel.recent.push(this.recent[0]);
                    }
                    se.searchHotel.recent.push(item1);
                }
            }
            else {
                var item1 = { type: "2", hotelId: "", hotelName: "", regionId: this.gbmsg.regionId, regionCode: this.gbmsg.regionCode, regionName: this.gbmsg.regionName, flag: "1", totalHotels: this.gbmsg.totalHotels };
                se.searchHotel.recent = [];
                se.searchHotel.recent.push(item1);
            }
            this.navCtrl.navigateForward('/hotellist/false');
        }
        else if (this.co == 0) {
            if (this.gbitem.Type == 1) {
                var id1 = { root: "mainpage" };
                if (this.recent) {
                    for (let i = 0; i < this.recent.length; i++) {
                        if (this.recent[i].hotelId == id1) {
                            cocheck = 1;
                            break;
                        }
                    }
                    if (cocheck == 0) {
                        var item2 = { type: "1", hotelId: this.gbitem.hotelId, hotelName: this.gbitem.hotelName, regionId: "", regionCode: "", regionName: "", flag: "0", totalHotels: '' };
                        se.searchHotel.recent = [];
                        if (this.recent.length > 1) {
                            se.searchHotel.recent.push(this.recent[1]);
                        }
                        else {
                            se.searchHotel.recent.push(this.recent[0]);
                        }
                        this.searchHotel.recent.push(item2);
                    }
                }
                else {
                    var item2 = { type: "1", hotelId: this.gbitem.hotelId, hotelName: this.gbitem.hotelName, regionId: "", regionCode: "", regionName: "", flag: "0", totalHotels: '' };
                    se.searchHotel.recent = [];
                    this.searchHotel.recent.push(item2);
                }
                this.searchHotel.hotelID = this.gbitem.hotelId;
                this.searchHotel.rootPage = "mainpage";
                this.navCtrl.navigateForward('/hoteldetail/' + this.searchHotel.hotelID);
            }
            else {
                if (this.recent) {
                    for (let i = 0; i < this.recent.length; i++) {
                        if (this.recent[this.index].RegionId == this.gbitem.RegionId) {
                            cocheck = 1;
                            break;
                        }
                    }
                    if (cocheck == 0) {
                        var item3 = { type: "2", hotelId: "", hotelName: "", regionId: this.gbitem.regionId, regionCode: this.gbitem.regionCode, regionName: this.gbitem.regionName, flag: "0", totalHotels: this.gbitem.totalHotels };
                        se.searchHotel.recent = [];
                        if (this.recent.length > 1) {
                            se.searchHotel.recent.push(this.recent[1]);
                        }
                        else {
                            se.searchHotel.recent.push(this.recent[0]);
                        }
                        this.searchHotel.recent.push(item3);
                    }
                }
                else {
                    var item3 = { type: "2", hotelId: "", hotelName: "", regionId: this.gbitem.RegionId, regionCode: this.gbitem.regionCode, regionName: this.gbitem.regionName, flag: "0", totalHotels: this.gbitem.totalHotels };
                    se.searchHotel.recent = [];
                    this.searchHotel.recent.push(item3);
                }
                this.authService.region = this.gbitem.regionName;
                this.authService.regionid = this.gbitem.regionId;
                this.authService.regioncode = this.gbitem.regionCode;
                this.navCtrl.navigateForward('/hotellist/false');
            }
        }
        else if (this.co == 2) {
            if (this.gbmsg.Type == 1) {
                this.searchHotel.hotelID = this.gbitem.hotelId;
                this.searchHotel.rootPage = "mainpage";
                this.navCtrl.navigateForward('/hoteldetail/' + this.searchHotel.hotelID);
            }
            else {
                this.authService.region = this.gbmsg.regionName;
                this.authService.regionid = this.gbmsg.regionId;
                this.authService.regioncode = this.gbmsg.regionCode;
                this.navCtrl.navigateForward('/hotellist/false');
            }
        }
    }
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.navigateBack('/hotellist/false');
            });
        });
    }
    clearClonePage(pagename) {
        let elements = [];
        elements = Array.from(document.querySelectorAll(pagename));
        if (elements != null && elements.length > 0) {
            elements.forEach(el => {
                if (el != null && el.length > 0) {
                    el.remove();
                }
            });
        }
    }
    goback() {
        this.navCtrl.back();
    }
    clearText() {
        this.inputText = "";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipSearchHotel'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SearchHotelPage.prototype, "myInput", void 0);
SearchHotelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchhotel',
        template: __webpack_require__(/*! ./searchhotel.html */ "./src/app/searchhotel/searchhotel.html"),
        styles: [__webpack_require__(/*! ./searchhotel.scss */ "./src/app/searchhotel/searchhotel.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["SearchHotel"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _network_provider_service__WEBPACK_IMPORTED_MODULE_8__["NetworkProvider"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"]])
], SearchHotelPage);



/***/ })

}]);
//# sourceMappingURL=searchhotel-searchhotel-module.js.map