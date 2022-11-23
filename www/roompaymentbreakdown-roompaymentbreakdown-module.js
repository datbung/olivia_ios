(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roompaymentbreakdown-roompaymentbreakdown-module"],{

/***/ "./src/app/roompaymentbreakdown/roompaymentbreakdown.html":
/*!****************************************************************!*\
  !*** ./src/app/roompaymentbreakdown/roompaymentbreakdown.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentbreakdownPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\">\n        <div style=\"position: absolute;height: 48px;width: 48px;\"  (click)=\"goback()\">\n          <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\">\n          </ion-icon> -->\n          <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-8px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n\n        <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Chi Tiết Thanh\n            Toán</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n\n<ion-content padding>\n    <!-- \n  <ion-list no-lines>\n    <ion-item style=\"margin-left: -10px\">\n      <ion-thumbnail item-start>\n        <img style=\"width: 100px;height: 100px;object-fit: cover\" src={{imgroom}}>\n      </ion-thumbnail>\n      <div style=\"margin-bottom:45px\">\n        <h2 class=\"text-name\" text-wrap>{{Name}}\n\n        </h2>\n        <p class=\"text\">{{roomnumber}} phòng</p>\n      </div>\n      <p text-wrap>\n        <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n      </p>\n     \n \n    </ion-item>\n   \n  </ion-list> -->\n    <ion-row>\n      <ion-col size=\"4\">\n          <div class=\"div-wrapimg\">\n              <img style=\"width: 100px;height: 100px;object-fit: cover;border-radius: 5px;\" src={{imgroom}}>\n          </div>\n      </ion-col>\n  \n    <ion-col size=\"8\" style=\"padding:3px\" class=\"col-description-roomdetailreview\">\n      <div style=\"margin-left: 3px\">\n        <h2 class=\"text-name\" text-wrap>{{Name}}\n        </h2>\n        <p class=\"text\">{{roomnumber}} phòng</p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div style=\"margin-left: -15px\">\n      <ion-item>\n        <ion-label style=\"font-size: 14px\">Giá 1 phòng/đêm</ion-label>\n        <p class=\"total-price\"   slot=\"end\">\n          {{PriceAvgMinPriceStr}}đ\n        </p>\n      </ion-item>\n    </div>\n\n    <div style=\"margin-left: -15px\">\n      <ion-item>\n        <ion-label style=\"font-size: 14px\">Giá phòng x {{roomnumber}}| {{dur}} đêm</ion-label>\n        <p class=\"total-price\"  slot=\"end\">\n          {{PriceAvgPlusOTAStr}}đ\n        </p>\n      </ion-item>\n      <ion-item  *ngFor=\"let msg of arr\">\n          <ion-label style=\"font-size: 14px;white-space: normal\">{{msg.text}}</ion-label>\n          <p  slot=\"end\" class=\"total-price\">\n            {{msg.price}}đ\n          </p>\n        </ion-item>\n    </div>\n   <hr>\n   <div class=\"div-voucher-apply\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed\">\n    <div class=\"width-200\"><span class=\"text-normal\">Ưu đãi (</span><span class=\"text-code\">{{_voucherService.selectVoucher.code}}</span><span class=\"text-normal\">)</span> </div>\n    <div class=\"width-100 text-normal text-right total-price\">{{gf.convertNumberToString(_voucherService.selectVoucher.rewardsItem.price)}}đ</div>\n  </div>\n    <div style=\"margin-left: -15px\">\n      <ion-item style=\"--border-style: none\">\n        <ion-label style=\"font-size: 14px\">Tổng cộng</ion-label>\n        <p class=\"total-price1\"  slot=\"end\"  *ngIf=\"!(_voucherService.selectVoucher && _voucherService.selectVoucher.claimed)\">\n          {{total}}đ\n        </p>\n        <p class=\"total-price1\"  slot=\"end\"  *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed\">\n          {{gf.convertNumberToString((totalPrice - _voucherService.selectVoucher.rewardsItem.price) >0 ? totalPrice - _voucherService.selectVoucher.rewardsItem.price : 0)}}đ\n        </p>\n      </ion-item>\n    </div>\n  </ion-content>"

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

module.exports = ".text-name {\n  font-weight: 500;\n  font-size: 18px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text {\n  font-size: 12px;\n}\n.total-price {\n  font-size: 14px;\n  font-weight: bold;\n}\n.total-price1 {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roomdetailreview {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.div-wrapimg {\n  position: relative;\n  height: 110px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n.div-voucher-apply {\n  display: flex;\n  margin: 14px 8px 12px 0;\n}\n.div-voucher-apply .width-100 {\n  width: 100%;\n}\n.div-voucher-apply .width-200 {\n  width: 200%;\n}\n.div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.div-voucher-apply .text-code {\n  font-size: 14px;\n  color: #f79321;\n}\n.div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.div-voucher-apply .text-strike {\n  text-decoration: line-through;\n  text-align: right;\n}\n.div-voucher-apply .text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yb29tcGF5bWVudGJyZWFrZG93bi9yb29tcGF5bWVudGJyZWFrZG93bi5zY3NzIiwic3JjL2FwcC9yb29tcGF5bWVudGJyZWFrZG93bi9yb29tcGF5bWVudGJyZWFrZG93bi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUVFLGNBQUE7QUNEUjtBRElJO0VBQ0ksZUFBQTtBQ0RSO0FER0k7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7QUNETjtBRElJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ROO0FESUk7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFQ0ROO0FBQ0Y7QURHSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRE47QURNRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0FDSE47QURNSTtFQUNFLFdBQUE7QUNKTjtBRE1JO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNKTjtBRE1JO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNKTjtBRE9JO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNMTjtBRFFJO0VBQ0UsNkJBQUE7RUFDQyxpQkFBQTtBQ05QO0FEUUk7RUFDRSxpQkFBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvcm9vbXBheW1lbnRicmVha2Rvd24vcm9vbXBheW1lbnRicmVha2Rvd24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC50ZXh0LW5hbWVcbiAgICB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgLnRleHQtZ3JlZW5cbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcbiAgICAgIH1cbiAgICB9XG4gICAgLnRleHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnRvdGFsLXByaWNle1xuXG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIH1cbiAgICAudG90YWwtcHJpY2Uxe1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gICAgICAuY29sLWRlc2NyaXB0aW9uLXJvb21kZXRhaWxyZXZpZXd7XG4gICAgICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgICAgIGxlZnQ6IDEycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5kaXYtd3JhcGltZyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6MTEwcHg7XG4gICAgICB3aWR0aDogMTA0cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cblxuXG4gIC5kaXYtdm91Y2hlci1hcHBseSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDE0cHggOHB4IDEycHggMDtcbiAgXG4gICAgLndpZHRoLTEwMCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIFxuICAgIC53aWR0aC0yMDAge1xuICAgICAgd2lkdGg6IDIwMCU7XG4gICAgfVxuICAgIC50ZXh0LW5vcm1hbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzNmM2IzYjtcbiAgICB9XG4gICAgLnRleHQtY29kZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogI2Y3OTMyMTtcbiAgICB9XG4gIFxuICAgIC50ZXh0LW5vcm1hbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzNmM2IzYjtcbiAgICB9XG4gIFxuICAgIC50ZXh0LXN0cmlrZSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgLnRleHQtcmlnaHQge1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICB9IiwiLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b3RhbC1wcmljZTEge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tZGV0YWlscmV2aWV3IHtcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbn1cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kaXYtdm91Y2hlci1hcHBseSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTRweCA4cHggMTJweCAwO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC53aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAud2lkdGgtMjAwIHtcbiAgd2lkdGg6IDIwMCU7XG59XG4uZGl2LXZvdWNoZXItYXBwbHkgLnRleHQtbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzNmM2IzYjtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1jb2RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y3OTMyMTtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM2YzYjNiO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LXN0cmlrZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

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
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");








let RoompaymentbreakdownPage = class RoompaymentbreakdownPage {
    constructor(platform, activatedRoute, navCtrl, searchHotel, Roomif, gf, _voucherService) {
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.searchHotel = searchHotel;
        this.Roomif = Roomif;
        this.gf = gf;
        this._voucherService = _voucherService;
        this.arr = [];
        this.room = this.Roomif.arrroom;
        this.dur = this.activatedRoute.snapshot.paramMap.get('dur');
        this.roomnumber = this.activatedRoute.snapshot.paramMap.get('roomnumber');
        this.roomtype = this.Roomif.roomtype;
        this.total = this.roomtype.PriceAvgPlusTAStr;
        this.totalPrice = this.gf.convertStringToNumber(this.roomtype.PriceAvgPlusTAStr);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_6__["voucherService"]])
], RoompaymentbreakdownPage);



/***/ })

}]);
//# sourceMappingURL=roompaymentbreakdown-roompaymentbreakdown-module.js.map