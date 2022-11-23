(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchhotel-searchhotel-module"],{

/***/ "./src/app/searchhotel/searchhotel.html":
/*!**********************************************!*\
  !*** ./src/app/searchhotel/searchhotel.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar class=\"new-background\">\n    <div class=\"img-back\" (click)=\"goback()\">\n      <img \n        src=\"./assets/imgs/icon_back.svg\">\n    </div>\n    <div class=\"div-search\">\n      <ion-input  #ipSearchHotel [(ngModel)]=\"inputText\" (ionChange)=\"getItems($event)\" [ngClass]=\"inputText ? 'cls-input-search-text' : 'cls-input-search'\" placeholder=\"Nhập tên khách sạn,thành phố...\"></ion-input>\n    </div>\n    <div *ngIf=\"inputText\"  class=\"img-close\" >\n      <img (click)=\"clearText()\"\n        src=\"./assets/imgs/icon_close.svg\">\n    </div>\n  </ion-toolbar>\n  </ion-header>\n<ion-content padding style=\"--keyboard-offset: 50px !important\">\n  \n  <div *ngIf=\"!ischecklist\">\n    <div class=\"div-popular\">\n      <ion-label class=\"text-popular\">\n       Phổ biến\n      </ion-label>\n      \n    </div>\n    <div style=\"margin-top:28px\">\n      <div  *ngFor=\"let msg of json; let i = index\">\n        <ion-row class=\"cls-row\" (click)=\"nextPopular(msg,i)\">\n          <ion-col size=\"12\" text-left>\n            <ion-label >\n              <ion-label>\n                <p class=\"text-region\"> {{msg.regionName}}</p>\n                <p class=\"text-region-1\">{{msg.province}}, {{msg.country}}</p>\n              \n              </ion-label>\n            </ion-label>\n           \n          </ion-col>\n        </ion-row>\n        <div class=\"div-split\">\n\n        </div>\n      </div>\n\n    </div>\n   \n  </div>\n  \n    <!-- <form action =\".\">\n      <ion-searchbar #input class=\"searchhotel-bar\" style=\"padding-inline-start: 11px;padding-inline-end: 11px;\" searchIcon=\"false\" id=\"input\" style=\"padding: 0;padding-bottom: 15px;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"300\" placeholder=\"Nhập tên khách sạn,thành phố,khu vực...\" (ionChange)=\"getItems($event)\" ></ion-searchbar>\n    </form> -->\n  <div>\n    <div *ngIf=\"ischecklist\">\n      <div (click)=\"itemclick(item)\" *ngFor=\"let item of items\">\n        <ion-row class=\"cls-row-width\">\n          <ion-col text-left style=\"padding:16px 0px\">\n            <ion-label *ngIf=\"item.hotelName\" class=\"label-item-search\">\n              <img src=\"./assets/ic_facility/ic_hotel.svg\"> {{ item.hotelName }}\n            </ion-label>\n            <ion-label *ngIf=\"item.regionName\" class=\"label-item-search\">\n              <img src=\"./assets/ic_facility/Group.svg\"> {{ item.regionName }}\n            </ion-label>\n          </ion-col>\n          <ion-col *ngIf=\"item.regionName\" text-right style=\"padding:16px 0px\">\n            <ion-label style=\"color: #26bed6\">\n              {{item.totalHotels}} khách sạn\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n  </div>\n  <div style=\"margin-top: 20px\">\n      <label *ngIf=\"ischecktext\">Không tìm thấy kết quả tìm kiếm.Vui lòng nhập lại!</label>\n  </div>\n\n\n</ion-content>"

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

module.exports = ".inputtext {\n  height: 48px;\n  color: #757575;\n  width: 100%;\n  display: block;\n  padding: 12px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #8f8f8f;\n  border-radius: 5px;\n}\n\ndiv.solid {\n  border-style: solid;\n  border-color: #bdbdbd;\n  border-width: 1px;\n  height: 44px;\n  border-radius: 5px;\n}\n\n.button5 {\n  background: #26bed6;\n  color: #ffffff;\n  border-color: #26bed6;\n  width: 100%;\n  font-size: 12px;\n  height: 48px;\n}\n\n.list-header-md {\n  padding-left: 0px;\n  margin-bottom: 0px;\n  min-height: 0px;\n  border-top: 0px solid #dedede;\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #222222;\n}\n\n.item-md {\n  padding-left: 0px;\n}\n\nion-icon {\n  display: inline-block;\n  font-size: 2em;\n  margin-right: 5px;\n}\n\n.searchbar-md {\n  background: inherit;\n  padding: 0px;\n}\n\n.searchbar-md .searchbar-input {\n  padding: 6px 55px;\n  border-radius: 5px;\n  background-position: left 8px center;\n  height: auto;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 3rem;\n  color: #141414;\n  background-color: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.list-md {\n  margin: 0;\n}\n\n.cls-row-width {\n  width: 100%;\n}\n\n.title-item-search {\n  padding: 16px 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.label-item-search {\n  padding: 8px 0px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\nlabel {\n  padding: 18px 0px;\n}\n\ninput:focus {\n  border: 1px solid #003C71;\n  color: #757575;\n}\n\n::ng-deep .searchbar-input.sc-ion-searchbar-md {\n  -webkit-padding-start: 11px;\n          padding-inline-start: 11px;\n  -webkit-padding-end: 11px;\n          padding-inline-end: 11px;\n}\n\n::ng-deep .searchbar-input-container.sc-ion-searchbar-ios {\n  height: 48px;\n}\n\n.cls-input-search {\n  margin-top: 5px;\n  margin-left: 13px;\n  text-align: left;\n}\n\n.cls-input-search-text {\n  margin-top: 5px;\n  margin-left: 13px;\n  text-align: left;\n  width: 85%;\n}\n\n.div-search {\n  border: solid 0.5px #bdbdbd;\n  border-radius: 6px;\n  height: 48px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #333333;\n  background: #ffffff;\n  margin: 4px 20px 4px 49px;\n}\n\n.new-background {\n  --background: #26bed6;\n}\n\n.img-back {\n  position: absolute;\n  top: 3%;\n  color: #ffffff;\n  margin-top: 6px;\n}\n\n.img-close {\n  position: absolute;\n  top: 3%;\n  color: #ffffff;\n  margin-top: 6px;\n  right: 20px;\n}\n\n.div-popular {\n  background-color: #f2f2f2;\n  margin: -16px;\n  height: 41px;\n}\n\n.text-popular {\n  padding: 13px 0px 11px 16px;\n  position: absolute;\n}\n\n.text-region {\n  font-weight: 600;\n  color: #333;\n}\n\n.text-region-1 {\n  color: #828282;\n  font-size: 12px;\n}\n\n.div-split {\n  height: 1px;\n  background-color: #f2f2f2;\n}\n\n.cls-row {\n  margin-left: -5px;\n  margin-top: 12px;\n  margin-bottom: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9zZWFyY2hob3RlbC9zZWFyY2hob3RlbC5zY3NzIiwic3JjL2FwcC9zZWFyY2hob3RlbC9zZWFyY2hob3RlbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDSTtFQUFXLG1CQUFBO0VBQ1AscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNHUjs7QURESTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0lSOztBREZJO0VBQ0ksaUJBQUE7QUNLUjs7QURISTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTVI7O0FESkk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNPUjs7QURMSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFFQSwrR0FBQTtBQ1FSOztBRE5JO0VBQ0ksU0FBQTtBQ1NSOztBREVJO0VBQ0ksV0FBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFUjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR1I7O0FEREk7RUFDSSxpQkFBQTtBQ0lSOztBREZJO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDS1I7O0FERFE7RUFDSSwyQkFBQTtVQUFBLDBCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtBQ0laOztBREZRO0VBRUksWUFBQTtBQ0daOztBREFJO0VBQ0ksZUFBQTtFQUNELGlCQUFBO0VBQ0EsZ0JBQUE7QUNHUDs7QURESTtFQUNJLGVBQUE7RUFDRCxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0lQOztBREZJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0tSOztBREhJO0VBQ0kscUJBQUE7QUNNUjs7QURKSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDT1I7O0FETEk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNRUjs7QUROSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNTUjs7QURQSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7QUNVUjs7QURSSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ1dSOztBRFJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNXUjs7QURUSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ1lSOztBRFZJO0VBQ0csaUJBQUE7RUFDQSxnQkFBQTtFQUNDLG1CQUFBO0FDYVIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hob3RlbC9zZWFyY2hob3RlbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5pbnB1dHRleHR7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTJweCAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGY4ZjhmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIGRpdi5zb2xpZCB7Ym9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5idXR0b241XG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgfVxuICAgIC5saXN0LWhlYWRlci1tZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMHB4IHNvbGlkICNkZWRlZGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuICAgIC5pdGVtLW1kIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjVweFxuICAgIH1cbiAgICAuc2VhcmNoYmFyLW1kIHtcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAuc2VhcmNoYmFyLW1kIC5zZWFyY2hiYXItaW5wdXQge1xuICAgICAgICBwYWRkaW5nOiA2cHggNTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDhweCBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICAgICAgICBjb2xvcjogIzE0MTQxNDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG4gICAgLmxpc3QtbWQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC8vIC5pdGVtLW1kIHAge1xuICAgIC8vICAgICBtYXJnaW46IDAgMCAycHg7XG4gICAgLy8gICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgIC8vICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgLy8gICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgLy8gICAgIGNvbG9yOiAjNjY2O1xuICAgIC8vICAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICAgIC8vIH1cbiAgICAuY2xzLXJvdy13aWR0aHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC50aXRsZS1pdGVtLXNlYXJjaHtcbiAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfSAgICAgICAgXG4gICAgLmxhYmVsLWl0ZW0tc2VhcmNoe1xuICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgcGFkZGluZzogMThweCAwcHg7XG4gICAgfVxuICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwM0M3MTtcbiAgICAgICAgY29sb3I6ICM3NTc1NzUgIDtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXB7XG4gICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1tZHtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxMXB4O1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWFyY2hiYXItaW5wdXQtY29udGFpbmVyLnNjLWlvbi1zZWFyY2hiYXItaW9zXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2xzLWlucHV0LXNlYXJjaHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5jbHMtaW5wdXQtc2VhcmNoLXRleHR7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcbiAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuICAgIC5kaXYtc2VhcmNoe1xuICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBtYXJnaW46IDRweCAyMHB4IDRweCA0OXB4O1xuICAgIH1cbiAgICAubmV3LWJhY2tncm91bmR7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzI2YmVkNjtcbiAgICB9XG4gICAgLmltZy1iYWNre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMyU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICAgIC5pbWctY2xvc2V7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzJTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5kaXYtcG9wdWxhcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luOiAtMTZweDtcbiAgICAgICAgaGVpZ2h0OiA0MXB4O1xuICAgIH1cbiAgICAudGV4dC1wb3B1bGFye1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDBweCAxMXB4IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLnRleHQtcmVnaW9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzMzMztcblxuICAgIH1cbiAgICAudGV4dC1yZWdpb24tMXtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmRpdi1zcGxpdHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgfVxuICAgIC5jbHMtcm93e1xuICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgIG1hcmdpbi10b3A6IDEycHg7IFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMXB4OyBcbiAgICB9IiwiLmlucHV0dGV4dCB7XG4gIGhlaWdodDogNDhweDtcbiAgY29sb3I6ICM3NTc1NzU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTJweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGY4ZjhmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmRpdi5zb2xpZCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYnV0dG9uNSB7XG4gIGJhY2tncm91bmQ6ICMyNmJlZDY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmxpc3QtaGVhZGVyLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZGVkZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLml0ZW0tbWQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnNlYXJjaGJhci1tZCB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNlYXJjaGJhci1tZCAuc2VhcmNoYmFyLWlucHV0IHtcbiAgcGFkZGluZzogNnB4IDU1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCA4cHggY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgY29sb3I6ICMxNDE0MTQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5saXN0LW1kIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2xzLXJvdy13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGl0bGUtaXRlbS1zZWFyY2gge1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxhYmVsLWl0ZW0tc2VhcmNoIHtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5sYWJlbCB7XG4gIHBhZGRpbmc6IDE4cHggMHB4O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDNDNzE7XG4gIGNvbG9yOiAjNzU3NTc1O1xufVxuXG46Om5nLWRlZXAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLW1kIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDExcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTFweDtcbn1cbjo6bmctZGVlcCAuc2VhcmNoYmFyLWlucHV0LWNvbnRhaW5lci5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmNscy1pbnB1dC1zZWFyY2gge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2xzLWlucHV0LXNlYXJjaC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDg1JTtcbn1cblxuLmRpdi1zZWFyY2gge1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW46IDRweCAyMHB4IDRweCA0OXB4O1xufVxuXG4ubmV3LWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6ICMyNmJlZDY7XG59XG5cbi5pbWctYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmltZy1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5kaXYtcG9wdWxhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIG1hcmdpbjogLTE2cHg7XG4gIGhlaWdodDogNDFweDtcbn1cblxuLnRleHQtcG9wdWxhciB7XG4gIHBhZGRpbmc6IDEzcHggMHB4IDExcHggMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udGV4dC1yZWdpb24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRleHQtcmVnaW9uLTEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGl2LXNwbGl0IHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5jbHMtcm93IHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59Il19 */"

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
        if (msg.regionName) {
            this.searchHotel.input = msg.regionName;
        }
        else {
            this.searchHotel.input = msg.hotelName;
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
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlGate + '/search/searchhotel',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                qs: { keyword: val },
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
                            se.items = [];
                            lstitems.forEach(element => {
                                se.items.push(element);
                            });
                        }
                    }
                    else {
                        se.items = [];
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