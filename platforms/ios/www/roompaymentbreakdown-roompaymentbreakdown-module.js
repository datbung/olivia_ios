(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roompaymentbreakdown-roompaymentbreakdown-module"],{

/***/ "./src/app/roompaymentbreakdown/roompaymentbreakdown.html":
/*!****************************************************************!*\
  !*** ./src/app/roompaymentbreakdown/roompaymentbreakdown.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentbreakdownPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\">\n        <div style=\"position: absolute;height: 48px;width: 48px;\"  (click)=\"goback()\">\n          <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\">\n          </ion-icon> -->\n          <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-8px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n\n        <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Chi Tiết Thanh\n            Toán</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content padding>\n    <!-- \n  <ion-list no-lines>\n    <ion-item style=\"margin-left: -10px\">\n      <ion-thumbnail item-start>\n        <img style=\"width: 100px;height: 100px;object-fit: cover\" src={{imgroom}}>\n      </ion-thumbnail>\n      <div style=\"margin-bottom:45px\">\n        <h2 class=\"text-name\" text-wrap>{{Name}}\n\n        </h2>\n        <p class=\"text\">{{roomnumber}} phòng</p>\n      </div>\n      <p text-wrap>\n        <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n      </p>\n     \n \n    </ion-item>\n   \n  </ion-list> -->\n    <ion-row>\n      <ion-col size=\"4\">\n          <div class=\"div-wrapimg\">\n              <img style=\"width: 100px;height: 100px;object-fit: cover;border-radius: 5px;\" src={{imgroom}}>\n          </div>\n      </ion-col>\n  \n    <ion-col size=\"8\" style=\"padding:3px\" class=\"col-description-roomdetailreview\">\n      <div style=\"margin-left: 3px\">\n        <h2 class=\"text-name\" text-wrap>{{Name}}\n        </h2>\n        <p class=\"text\">{{roomnumber}} phòng</p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div style=\"margin-left: -15px\">\n      <ion-item>\n        <ion-label style=\"font-size: 14px\">Giá 1 phòng/đêm</ion-label>\n        <p class=\"total-price\"   slot=\"end\">\n          {{PriceAvgMinPriceStr}}đ\n        </p>\n      </ion-item>\n    </div>\n\n    <div style=\"margin-left: -15px\">\n      <ion-item>\n        <ion-label style=\"font-size: 14px\">Giá phòng x {{roomnumber}}| {{dur}} đêm</ion-label>\n        <p class=\"total-price\"  slot=\"end\">\n          {{PriceAvgPlusOTAStr}}đ\n        </p>\n      </ion-item>\n      <ion-item  *ngFor=\"let msg of arr\">\n          <ion-label style=\"font-size: 14px;white-space: normal\">{{msg.text}}</ion-label>\n          <p  slot=\"end\" class=\"total-price\">\n            {{msg.price}}đ\n          </p>\n        </ion-item>\n    </div>\n   <hr>\n    <div style=\"margin-left: -15px\">\n      <ion-item style=\"--border-style: none\">\n        <ion-label style=\"font-size: 14px\">Tổng cộng</ion-label>\n        <p class=\"total-price1\"  slot=\"end\">\n          {{total}}đ\n        </p>\n      </ion-item>\n    </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/roompaymentbreakdown/roompaymentbreakdown.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/roompaymentbreakdown/roompaymentbreakdown.module.ts ***!
  \*********************************************************************/
/*! exports provided: RoompaymentbreakdownPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentbreakdownPageModule", function() { return RoompaymentbreakdownPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roompaymentbreakdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roompaymentbreakdown */ "./src/app/roompaymentbreakdown/roompaymentbreakdown.ts");






let RoompaymentbreakdownPageModule = class RoompaymentbreakdownPageModule {
};
RoompaymentbreakdownPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roompaymentbreakdown__WEBPACK_IMPORTED_MODULE_5__["RoompaymentbreakdownPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roompaymentbreakdown__WEBPACK_IMPORTED_MODULE_5__["RoompaymentbreakdownPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RoompaymentbreakdownPageModule);



/***/ }),

/***/ "./src/app/roompaymentbreakdown/roompaymentbreakdown.scss":
/*!****************************************************************!*\
  !*** ./src/app/roompaymentbreakdown/roompaymentbreakdown.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: 500;\n  font-size: 18px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text {\n  font-size: 12px;\n}\n.total-price {\n  font-size: 14px;\n  font-weight: bold;\n}\n.total-price1 {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roomdetailreview {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.div-wrapimg {\n  position: relative;\n  height: 110px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL3Jvb21wYXltZW50YnJlYWtkb3duL3Jvb21wYXltZW50YnJlYWtkb3duLnNjc3MiLCJzcmMvYXBwL3Jvb21wYXltZW50YnJlYWtkb3duL3Jvb21wYXltZW50YnJlYWtkb3duLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFRSxnQkFBQTtFQUNBLGVBQUE7QUNETjtBREVNO0VBRUUsY0FBQTtBQ0RSO0FESUk7RUFDSSxlQUFBO0FDRFI7QURHSTtFQUVFLGVBQUE7RUFDQSxpQkFBQTtBQ0ROO0FESUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRE47QURJSTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VDRE47QUFDRjtBREdJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3Jvb21wYXltZW50YnJlYWtkb3duL3Jvb21wYXltZW50YnJlYWtkb3duLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGV4dC1uYW1lXG4gICAge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIC50ZXh0LWdyZWVuXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XG4gICAgICB9XG4gICAgfVxuICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC50b3RhbC1wcmljZXtcblxuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICB9XG4gICAgLnRvdGFsLXByaWNlMXtcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6Mjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAgICAgLmNvbC1kZXNjcmlwdGlvbi1yb29tZGV0YWlscmV2aWV3e1xuICAgICAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuZGl2LXdyYXBpbWcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OjExMHB4O1xuICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG5cbiIsIi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4udGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udG90YWwtcHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG90YWwtcHJpY2UxIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbWRldGFpbHJldmlldyB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/roompaymentbreakdown/roompaymentbreakdown.ts":
/*!**************************************************************!*\
  !*** ./src/app/roompaymentbreakdown/roompaymentbreakdown.ts ***!
  \**************************************************************/
/*! exports provided: RoompaymentbreakdownPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentbreakdownPage", function() { return RoompaymentbreakdownPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");







let RoompaymentbreakdownPage = class RoompaymentbreakdownPage {
    constructor(platform, activatedRoute, navCtrl, searchHotel, Roomif, gf) {
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.searchHotel = searchHotel;
        this.Roomif = Roomif;
        this.gf = gf;
        this.arr = [];
        this.room = this.Roomif.arrroom;
        this.dur = this.activatedRoute.snapshot.paramMap.get('dur');
        this.roomnumber = this.activatedRoute.snapshot.paramMap.get('roomnumber');
        this.roomtype = this.Roomif.roomtype;
        this.total = this.roomtype.PriceAvgPlusTAStr;
        this.imgroom = this.Roomif.imgRoom;
        var str = this.imgroom;
        if (str) {
            var res = str.substr(0, 4);
            if (res != "http") {
                this.imgroom = 'https:' + this.imgroom;
            }
        }
        else {
            this.imgroom = 'https://cdn1.ivivu.com/img/noimage.jpg';
        }
        this.Name = this.room[0].ClassName;
        this.breakfast = this.roomtype.Name;
        this.ExtraBedAndGalaDinerList = this.roomtype.ExtraBedAndGalaDinerList;
        if (this.ExtraBedAndGalaDinerList.length > 0) {
            this.phuthu = this.ExtraBedAndGalaDinerList[0].NameDisplay;
            this.PriceAvgMinPriceStr = this.roomtype.PriceAvgDefaultTA;
            this.PriceAvgPlusOTAStr = this.PriceAvgMinPriceStr * this.dur * this.roomnumber;
            this.PriceAvgMinPriceStr = this.PriceAvgMinPriceStr.toLocaleString();
            this.PriceAvgPlusOTAStr = this.PriceAvgPlusOTAStr.toLocaleString();
            for (var i = 0; i < this.ExtraBedAndGalaDinerList.length; i++) {
                var price = "";
                if (this.ExtraBedAndGalaDinerList[i].ChargeType == "Per Night" || this.ExtraBedAndGalaDinerList[i].ChargeType == "Per Bed" || this.ExtraBedAndGalaDinerList[i].ChargeType == "Per Meal WithoutNo") {
                    price += (this.ExtraBedAndGalaDinerList[i].Quantity.value * this.ExtraBedAndGalaDinerList[i].PriceOTA * this.dur).toLocaleString();
                    var item = { text: this.ExtraBedAndGalaDinerList[i].NameDisplay, price: price };
                }
                else {
                    price += this.ExtraBedAndGalaDinerList[i].Quantity.value * this.ExtraBedAndGalaDinerList[i].PriceOTA;
                }
                this.arr.push(item);
            }
        }
        else {
            this.PriceAvgMinPriceStr = this.roomtype.PriceAvgMinPriceStr;
            this.PriceAvgPlusOTAStr = Number(this.roomtype.PriceAvgPlusTAStr) * this.roomnumber;
            this.PriceAvgPlusOTAStr = this.roomtype.PriceAvgPlusTAStr.toLocaleString();
        }
        gf.googleAnalytion('roompaymentbreakdown', 'load', '');
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
};
RoompaymentbreakdownPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roompaymentbreakdown',
        template: __webpack_require__(/*! ./roompaymentbreakdown.html */ "./src/app/roompaymentbreakdown/roompaymentbreakdown.html"),
        styles: [__webpack_require__(/*! ./roompaymentbreakdown.scss */ "./src/app/roompaymentbreakdown/roompaymentbreakdown.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"]])
], RoompaymentbreakdownPage);



/***/ })

}]);
//# sourceMappingURL=roompaymentbreakdown-roompaymentbreakdown-module.js.map