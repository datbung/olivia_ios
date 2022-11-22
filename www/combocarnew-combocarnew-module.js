(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combocarnew-combocarnew-module"],{

/***/ "./src/app/combocarnew/combocarnew.module.ts":
/*!***************************************************!*\
  !*** ./src/app/combocarnew/combocarnew.module.ts ***!
  \***************************************************/
/*! exports provided: CombocarnewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombocarnewPageModule", function() { return CombocarnewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _combocarnew_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combocarnew.page */ "./src/app/combocarnew/combocarnew.page.ts");
/* harmony import */ var _voucher_voucherslidecarcombo_voucherslidecarcombo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../voucher/voucherslidecarcombo/voucherslidecarcombo.module */ "./src/app/voucher/voucherslidecarcombo/voucherslidecarcombo.module.ts");








const routes = [
    {
        path: '',
        component: _combocarnew_page__WEBPACK_IMPORTED_MODULE_6__["CombocarnewPage"]
    }
];
let CombocarnewPageModule = class CombocarnewPageModule {
};
CombocarnewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _voucher_voucherslidecarcombo_voucherslidecarcombo_module__WEBPACK_IMPORTED_MODULE_7__["VoucherSlideCarComboPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_combocarnew_page__WEBPACK_IMPORTED_MODULE_6__["CombocarnewPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], CombocarnewPageModule);



/***/ }),

/***/ "./src/app/combocarnew/combocarnew.page.html":
/*!***************************************************!*\
  !*** ./src/app/combocarnew/combocarnew.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-row>\n    <ion-col size=\"2\" class=\"header-text header-icon\" (click)=\"goback()\">\n      <img style=\"height: 48px; padding: 8px;\" src=\"./assets/imgs/ios-arrow-round-back.svg\">\n    </ion-col>\n    <ion-col size=\"8\" class=\"header-text\">\n      <ion-title class=\"text-title\">\n        Kiểm tra\n      </ion-title>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <div class=\"content-carcombo\">\n    <div class=\"col-step\">\n      <img class=\"img-step\" src=\"./assets/step/step_1.svg\">\n    </div>\n\n    <div class=\"div-title\">\n      <ion-label class=\"combo-title\">{{titlecombo}} |</ion-label>\n      <ion-label class=\"combo-sub-title\"> {{titlecomboprice}} VND/Khách</ion-label>\n    </div>\n\n    <div class=\"carcombo-hotel\">\n      <div class=\"img-hotel\">\n        <img class=\"img-hotel-avatar\" *ngIf=\"Avatar\" [src]=\"Avatar\" />\n        <img class=\"img-hotel-avatar\" *ngIf=\"!Avatar\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\" />\n      </div>\n\n      <div class=\"info-hotel\">\n        <!-- Tên -->\n        <div class=\"name-hotel f-bold\">\n          <ion-label>{{Name}}</ion-label>\n        </div>\n        <!-- Địa chỉ -->\n        <div class=\"div-address p-top-13\">\n          <!-- img-local -->\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/iocnsearch/ic_location.svg\">\n          </div>\n          <!-- address -->\n          <div class=\"text-address text-thin\">\n            <ion-label>{{Address}}</ion-label>\n          </div>\n          \n        </div>\n        <div *ngIf=\"bookCombo.isshuttlebus.length>0\" class=\"div-address p-top-13\">\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/ic_review/ic_bus.svg\">\n          </div>\n             <div (click)=\"nextShuttlebus()\" class=\"text-address text-thin color-blue\">\n              <ion-label>Lịch trình Shuttle Bus</ion-label>\n            </div>\n        </div>\n     \n          \n        \n      </div>\n    </div>\n    <div class=\"div-split sp-info-hotel\"></div>\n\n    <!-- Checkin, checkout -->\n    <div class=\"div-cin-cout\" (click)=\"changeDateInfo()\">\n      <ion-row>\n        <!-- cin -->\n        <ion-col size=\"3.6\" class=\"no-padding\">\n          <div class=\"div-label-small\">Nhận phòng</div>\n          <div class=\"div-date\">{{cinshow}}</div>\n        </ion-col>\n        <!-- cout -->\n        <ion-col class=\"no-padding align-center\">\n          <div class=\"div-label-small\">Trả phòng</div>\n          <div class=\"div-date\">{{coutshow}}</div>\n        </ion-col>\n        <!-- duration -->\n        <ion-col size=\"3.4\" class=\"no-padding align-center\">\n          <div class=\"div-label-small\">Số đêm</div>\n          <div class=\"div-date-cout\">{{duration}} đêm</div>\n        </ion-col>\n      </ion-row>\n      <div class=\"div-split sp-ci-co\" *ngIf=\"!loadpricedone\"></div>\n    </div>\n    <div class=\"carcombo-departure\" *ngIf=\"PriceAvgPlusTAStr\"  class=\"divheight\" style=\"position: relative;margin-top: 15px;\">\n      <label class=\"text-location\">\n        Đi từ {{fromPlace}}\n      </label>\n      <div>\n        <div class=\"placepoint\">\n        </div>\n        <div class=\"placeline\">\n        </div>\n        <div class=\"placepoint\" style=\"top: 73%\">\n        </div>\n      </div>\n      <ion-row style=\"margin-left: -5px\">\n         \n        <ion-col size=\"8\">\n            <ion-label class=\"text-infocar\" style=\"font-size: 14px\">{{departVehicleStr}}</ion-label>\n          <div >\n              <ion-label class=\"text-infocar\">{{departDateTimeStr}}</ion-label>\n              <div class=\"placediv\" style=\"min-height: 36px;\">\n                <span class=\"combo-departure-time\"> {{departTimeStrd}} </span>\n                <span (click)=\"showmsg(pickup_pointsdepartd)\" style=\"font-size: 14px;\">{{pickup_pointsdepartd}}</span>\n                <div>\n                  <ion-label (click)=\"showmsg(addressdepartd)\" class=\"text-infocar\">{{addressdepartd}}</ion-label>\n                </div>\n         \n              </div>\n              <div class=\"placediv\" style=\"margin-left: 10px;\" style=\"min-height: 36px;\">\n                <span class=\"combo-departure-time\"> {{departTimeStrt}} </span>\n                <span style=\"font-size: 14px;\" (click)=\"showmsg(pickup_pointsdepartt)\">{{pickup_pointsdepartt}}</span>\n                <div >\n                  <ion-label (click)=\"showmsg(addressdepartt)\" class=\"text-infocar\">{{addressdepartt}}</ion-label>\n                </div>\n              </div>\n              <div *ngIf=\"pickup_pointsdep.length>1||drop_off_points_at_arrivedep.length>1\">\n                <ion-label class=\"text-change\" (click)=\"changeplace(0)\">Đổi điểm đón/trả</ion-label>\n              </div>\n          </div>\n       \n\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"departTicketSaleshow!=0\" style=\"align-self: center\">\n          <div *ngIf=\"checkdiscountdepart&&departTicketSaleshow!=0\" class=\"combo-flight-price\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-down\">Giảm <span\n                class=\"flight-price\">{{departTicketSaleshow}}</span></span>\n          </div>\n          <div *ngIf=\"!checkdiscountdepart\" class=\"combo-flight-price-label-up\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-up\">Phụ thu <span\n                class=\"flight-price\">{{departTicketSaleshow}}</span></span>\n          </div>\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(0)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"departTicketSaleshow==0\" style=\"align-self: center\">\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(0)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"carcombo-departure\" *ngIf=\"PriceAvgPlusTAStr\" class=\"divheight\"  style=\"position: relative\">\n        <div>\n            <div class=\"placepoint\" style=\"top:33%\">\n            </div>\n            <div class=\"placeline\" style=\"top: 37%;height: 23%;\">\n            </div>\n            <div class=\"placepoint\" style=\"top: 60%\">\n            </div>\n          </div>\n      <ion-row style=\"margin-left: -5px;margin-top: 10px\">\n         \n        <ion-col size=\"8\">\n            <ion-label class=\"text-infocar\" style=\"font-size: 14px\">{{returnVehicleStr}}</ion-label>\n            <div >\n          <ion-label class=\"text-infocar\">{{returnDateTimeStr}}</ion-label>\n          <div class=\"placediv\" style=\"min-height: 36px;\">\n            <span class=\"combo-departure-time\">{{returnTimeStrd}} </span>\n            <span style=\"font-size: 14px;\"  (click)=\"showmsg(pickup_pointsreturnd)\">{{pickup_pointsreturnd}}</span>\n            <div>\n              <ion-label class=\"text-infocar\" (click)=\"showmsg(addressreturnd)\">{{addressreturnd}}</ion-label>\n            </div>\n          </div>\n          <div class=\"placediv\" style=\"min-height: 36px;\">\n            <span class=\"combo-departure-time\">{{returnTimeStrt}} </span>\n            <span style=\"font-size: 14px;\" (click)=\"showmsg(pickup_pointsreturnt)\">{{pickup_pointsreturnt}}</span>\n            <div>\n                <ion-label class=\"text-infocar\" (click)=\"showmsg(addressreturnt)\">{{addressreturnt}}</ion-label>\n              </div>\n          </div>\n          <div  *ngIf=\"pickup_pointsret.length>1||drop_off_points_at_arriveret.length>1\">\n            <ion-label class=\"text-change\" (click)=\"changeplace(1)\">Đổi điểm đón/trả</ion-label>\n          </div>\n        </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"returnTicketSaleshow!=0\" style=\"align-self: center\">\n      \n          <div *ngIf=\"checkdiscountreturn\" class=\"combo-flight-price\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-down\">Giảm <span\n                class=\"flight-price\">{{returnTicketSaleshow}}</span></span>\n          </div>\n          <div *ngIf=\"!checkdiscountreturn\" class=\"combo-flight-price-label-up\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px;\">\n            <span class=\"combo-flight-price-label-up\">Phụ thu <span\n                class=\"flight-price\">{{returnTicketSaleshow}}</span></span>\n          </div>\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(1)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"returnTicketSaleshow==0\" style=\"align-self: center\">\n\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(1)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr&&!loadpricedone\" style=\"height: 100px\">\n      <ion-col style=\"text-align: center;align-self: center\">\n        <ion-spinner style=\"height: 84px\" name=\"bubbles\" class=\"spinner-bubbles hydrated\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr&&!loadpricedone\">\n      <ion-col style=\"text-align: center;align-self: center;color: #828282\">\n        <label>Đang tìm vé xe tốt nhất. Xin quý khách vui lòng đợi trong giây lát!</label>\n      </ion-col>\n    </ion-row>\n    <div class=\"div-split sp-ci-co\"></div>\n    <!-- Thông tin phòng -->\n    <div *ngIf=\"PriceAvgPlusTAStr\" class=\"room-info\">\n      <div class=\"div-flex\">\n        <label class=\"combo-title text-room\">\n          {{nameroom}}\n        </label>\n        <label *ngIf=\"PriceAvgPlusTAStr\" class=\"text-p line-blue\">\n          <span (click)=\"upgradeRoom()\" class=\"margin-right-5\">Đổi</span> <img src=\"./assets/imgs/vector.svg\">\n        </label>\n      </div>\n      <div class=\"text-regular p-top-8\" text-wrap>\n        <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{roomnumber}} phòng | {{adulsdisplay}} người\n        lớn |\n        {{childrendisplay}} trẻ em {{textage}}\n      </div>\n      <!-- <div class=\"text-regular p-top-15\">\n        <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n      </div> -->\n      <div class=\"div-flex\">\n        <p class=\"text-p text-width-190\" text-wrap>\n          <img src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n        </p>\n        <!-- <p *ngIf=\"PriceAvgPlusTAStr\" class=\"text-p line-blue\">\n          <span (click)=\"upgradeRoom()\" class=\"margin-right-5\">Đổi</span> <img src=\"./assets/imgs/vector.svg\">\n        </p> -->\n      </div>\n      <div *ngIf=\"PriceAvgPlusTAStr\" class=\"div-address\">\n        <div class=\"div-location\">\n          <img class=\"img-location\" src=\"./assets/iconaccount/info.svg\">\n        </div>\n        <div class=\"text-address text-thin color-blue\">\n          <ion-label  *ngIf=\"statusRoom=='AL'\" >Xác nhận ngay</ion-label>\n          <ion-label  *ngIf=\"statusRoom!='AL'\" >Xác nhận trong 60 phút</ion-label>\n        </div>\n      </div>\n     \n      <hr class=\"cls-hr\">\n    </div>\n<!-- chính sách hủy combo -->\n<div *ngIf=\"PriceAvgPlusTAStr\" (click)=\"showPenalty()\">\n  <ion-row>\n    <label class=\"depart-title\">\n        Chính sách hủy combo\n    </label>\n  </ion-row>\n  <hr class=\"cls-hr\">\n</div>\n\n    <div *ngIf=\"point>0 && PriceAvgPlusTAStr&& loadcarspricedone\" class=\"div-voucher\">\n      <div class=\"div-flex\">\n          <div class=\"div-icon\"><img class=\"icon-point\" src=\"./assets/ic_voucher/ivvpoint_tealish.svg\"/></div>\n          <div class=\"div-text-center\">\n            <div class=\"width-150\">Sử dụng iVIVU point</div>\n            <div class=\"width-100 text-point text-right\">-{{gf.convertNumberToString(point)}}đ</div>\n          </div>\n          <div class=\"div-button\"><ion-toggle style=\"margin-top: -4px;\" class=\"toggle-promo\" (ionChange)=\"edit()\" [(ngModel)]=\"ischeck\"></ion-toggle></div>\n      </div>\n      <div class=\"div-line\"></div>\n      <div class=\"div-flex\" (click)=\"showdiscount()\" *ngIf=\"!promocode\">\n        <div class=\"div-icon\"><img class=\"icon-point\" src=\"./assets/ic_voucher/ticket_tealish.svg\"/></div>\n        <div class=\"div-text-center \">\n          <div class=\"width-100\">Nhập mã giảm giá <span class=\"text-sub\">(iVIVU Voucher, MGift..)</span></div>\n        </div>\n        <div class=\"div-button width-10\"><img src=\"./assets/ic_ordersupport/next.svg\"></div>\n      </div>\n      <div class=\"div-voucher-apply\" *ngIf=\"promocode\" (click)=\"showdiscount()\">\n        <div class=\"width-200\">\n          <span class=\"text-normal\">Ưu đãi (</span>\n          <!-- <span class=\"text-code\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed \">{{_voucherService.selectVoucher.code}}</span> -->\n          <span class=\"text-code\" *ngIf=\"promocode\">{{promocode}}</span>\n          <span class=\"text-normal\">)</span> \n        </div>\n        <!-- <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed \">{{gf.convertNumberToString(_voucherService.selectVoucher.rewardsItem.price)}}đ</div> -->\n        <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"promocode\">{{gf.convertNumberToString(discountpromo)}}đ</div>\n      </div>\n      <ion-row> \n        <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n        <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n      </ion-row>\n      <hr class=\"cls-hr\" *ngIf=\"!_voucherService.hasVoucher\">\n      <app-voucherslidecarcombo *ngIf=\"loadcarspricedone\"></app-voucherslidecarcombo>\n\n      <div *ngIf=\"ischeck||ischeckbtnpromo&& loadcarspricedone\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"no-padding\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\" class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" class=\"no-padding\" (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"!ischeck&&!ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{PriceAvgPlusTAStr}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n<!-- \n      <div *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed\">\n        <div *ngIf=\"!ischeck && !ischeckbtnpromo\" >\n          <p class=\"text-room-price-ota\">\n            {{ gf.convertNumberToString(gf.convertStringToNumber(PriceAvgPlusTAStr) + _voucherService.selectVoucher.rewardsItem.price) }}đ\n          </p>\n        </div>\n      </div> -->\n    </div>\n\n    <div *ngIf=\"(point<=0||!point)&&PriceAvgPlusTAStr\">\n      <div class=\"div-aplly-voucher\">\n          <!-- <ion-row (click)=\"showdiscount()\">\n                  <label *ngIf=\"!promocode\" class=\"depart-title\" >iVIVU Voucher | Mobile Gift</label>\n                  <label *ngIf=\"promocode\" class=\"depart-title\" >{{textpromotion}}</label>\n          </ion-row>\n          <ion-row> \n              <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n              <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n          </ion-row> -->\n          <div class=\"div-flex align-center\" (click)=\"showdiscount()\" *ngIf=\"!promocode\">\n            <div class=\"div-icon\"><img class=\"icon-point\" src=\"./assets/ic_voucher/ticket_tealish.svg\"/></div>\n            <div class=\"div-text-center\">\n              <div class=\"width-100\">Nhập mã giảm giá <span class=\"text-sub\">(iVIVU Voucher, MGift..)</span></div>\n            </div>\n            <div class=\"div-button width-10\"><img src=\"./assets/ic_ordersupport/next.svg\"></div>\n          </div>\n          <div class=\"div-voucher-apply\" *ngIf=\"promocode\" (click)=\"showdiscount()\">\n            <div class=\"width-200\">\n              <span class=\"text-normal\">Ưu đãi (</span>\n              <!-- <span class=\"text-code\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed \">{{_voucherService.selectVoucher.code}}</span> -->\n              <span class=\"text-code\" *ngIf=\"promocode\">{{promocode}}</span>\n              <span class=\"text-normal\">)</span> \n            </div>\n            <!-- <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed \">{{gf.convertNumberToString(_voucherService.selectVoucher.rewardsItem.price)}}đ</div> -->\n            <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"discountpromo\">{{gf.convertNumberToString(discountpromo)}}đ</div>\n          </div>\n          <ion-row> \n            <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n            <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n          </ion-row>\n  </div>\n      <div class=\"div-split-panel\" *ngIf=\"!_voucherService.hasVoucher\"></div>\n      <app-voucherslidecarcombo></app-voucherslidecarcombo>\n\n      <div *ngIf=\"!ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n            <!-- <p *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed\" class=\"text-room-price-ota\">\n              {{ gf.convertNumberToString(gf.convertStringToNumber(PriceAvgPlusTAStr) + _voucherService.selectVoucher.rewardsItem.price) }}đ\n            </p> -->\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf=\"ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n            </p>\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div class=\"div-split-panel\" *ngIf=\"!loadpricedone\"></div>\n    <div *ngIf=\"PriceAvgPlusTAStr\">\n      <ion-row *ngIf=\"PriceAvgPlusTAStr\">\n        <ion-col style=\"padding:5px 0\">\n          <label class=\"text-thin-italic\">*iVIVU không đảm bảo giá vé này cho đến khi bạn\n            hoàn tất thanh toán và mã ghế ngồi được xác nhận!</label>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr && loadpricedone\">\n      <div class=\"row-suggest\">\n        <div ><span class=\"text-suggest color-red\">Giai đoạn hết giá.</span> <span style=\"margin-left: 5px;\"  (click)=\"changeDateInfo()\" class=\"text-suggest color-blue text-underline\">Quý khách vui lòng chọn ngày khác</span></div> \n       </div>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer>\n  <div *ngIf=\"PriceAvgPlusTAStr\" class=\"div-footer\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button-footer\">Xác nhận</button>\n  </div>\n  <div *ngIf=\"!PriceAvgPlusTAStr && loadpricedone\" class=\"div-footer\"\n    style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"sendRequestCombo()\" ion-button round outline class=\"button button-footer\">Gửi yêu cầu</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/combocarnew/combocarnew.page.scss":
/*!***************************************************!*\
  !*** ./src/app/combocarnew/combocarnew.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.text-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0;\n}\n.header-text {\n  text-align: center;\n  align-self: center;\n}\n.content-carcombo {\n  padding: 16px;\n}\n.content-carcombo .no-padding {\n  padding: 0;\n}\n.content-carcombo .align-center {\n  text-align: center;\n}\n.content-carcombo .text-regular {\n  font-size: 14px;\n  -moz-columns: #222222;\n       columns: #222222;\n}\n.content-carcombo .text-thin {\n  font-size: 14px;\n  line-height: 18.9px;\n  letter-spacing: -0.4px;\n  color: #4f4f4f;\n}\n.content-carcombo .text-thin-italic {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.content-carcombo .text-name {\n  margin-top: 17px;\n  margin-bottom: 0;\n}\n.content-carcombo .text-tax-include {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  margin-top: 2px;\n  margin-bottom: 0;\n}\n.content-carcombo .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.content-carcombo .p-top-16 {\n  padding-top: 15px;\n}\n.content-carcombo .p-top-15 {\n  padding-top: 15px;\n}\n.content-carcombo .p-top-8 {\n  padding-top: 8px;\n}\n.content-carcombo .p-top-6 {\n  padding-top: 6px;\n}\n.content-carcombo .p-top-2 {\n  padding-top: 2px;\n}\n.content-carcombo .f-bold {\n  font-weight: bold;\n}\n.content-carcombo .col-step {\n  line-height: 11px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n.content-carcombo .col-step img {\n  height: 16px;\n}\n.content-carcombo .div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222222;\n}\n.content-carcombo .div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.content-carcombo .carcombo-hotel {\n  position: relative;\n  height: 104px;\n  padding-top: 15px;\n}\n.content-carcombo .carcombo-hotel .img-hotel-avatar {\n  min-width: 104px;\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n  float: left;\n  position: absolute;\n}\n.content-carcombo .carcombo-hotel .info-hotel {\n  position: relative;\n  padding-left: 112px;\n}\n.content-carcombo .carcombo-hotel .name-hotel {\n  font-size: 14px;\n  -moz-columns: #222222;\n       columns: #222222;\n}\n.content-carcombo .div-address .div-location {\n  position: absolute;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n.content-carcombo .div-address .img-location {\n  height: 15px;\n}\n.content-carcombo .div-address .text-address {\n  position: relative;\n  line-height: 16px;\n  padding-left: 16px;\n}\n.content-carcombo .div-split {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n}\n.content-carcombo .sp-info-hotel {\n  margin: 16.5px 0px 12px 0px;\n  padding-top: 16.5px;\n}\n.content-carcombo .sp-ci-co {\n  margin: 6.5px 0px 9px 0px;\n}\n.content-carcombo .sp-room-info {\n  margin: 7.5px 0px 16px 0px;\n}\n.content-carcombo .sp-room-penalty {\n  margin: 16px 0px 0px 0px;\n}\n.content-carcombo .div-date {\n  border-right: solid 1px #cdcdcd;\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 4px;\n  padding-top: 0;\n  letter-spacing: -0.4px;\n}\n.content-carcombo .div-label-small {\n  font-size: 12px;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n.content-carcombo .div-date-cout {\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 4px;\n  padding-top: 0;\n}\n.content-carcombo .p-right-4 {\n  padding-right: 4px;\n}\n.content-carcombo .div-right-float-price {\n  font-size: 14px;\n  color: #003c71;\n  font-weight: normal;\n  float: right;\n  padding-right: 4px;\n}\n.content-carcombo .div-relative {\n  position: relative;\n  padding-top: 4px;\n}\n.content-carcombo .div-relative .button-float-right {\n  position: absolute;\n  top: 4px;\n  right: 0;\n}\n.content-carcombo .label-price-discount {\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.content-carcombo .room-info {\n  padding-top: 8px;\n}\n.content-carcombo .btn-change {\n  border-radius: 4px !important;\n  border: solid 1px #ec971f;\n  color: #ec971f;\n  font-size: 14px !important;\n  background: #ffffff;\n  height: 30px !important;\n  width: 88px;\n  margin: 0;\n}\n.content-carcombo .btn-apply {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.content-carcombo .total-price {\n  text-align: right;\n  font-size: 24px;\n  color: #26bed6;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n.content-carcombo .div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.content-carcombo .div-footer {\n  background-color: #ffffff;\n  text-align: center;\n}\n.div-footer .button-footer {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 91%;\n  height: 44px;\n  margin: 12px 16px 9px 16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.text-change {\n  font-weight: 300;\n  color: #26bed6;\n  font-size: 14px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 12px;\n  color: #ec971f;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin-top: -20px;\n}\n.btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n}\n.placeline {\n  content: \"\";\n  position: absolute;\n  height: 24%;\n  width: 1px;\n  top: 50%;\n  border: dotted 1px #bdbdbd;\n  left: 3px;\n}\n.placepoint {\n  position: absolute;\n  top: 46%;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #CCCCCC;\n}\n.placediv {\n  margin-left: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (min-width: 320px) and (min-height: 360px) {\n  .divheight {\n    height: 140px;\n  }\n}\n@media (min-width: 360px) and (min-height: 375px) {\n  .divheight {\n    height: 140px;\n  }\n}\n@media (min-width: 375px) and (min-height: 384px) {\n  .divheight {\n    height: 155px;\n  }\n}\n@media (min-width: 384px) and (min-height: 412px) {\n  .divheight {\n    height: 160px;\n  }\n}\n@media (min-width: 412px) and (min-height: 480px) {\n  .divheight {\n    height: 155px;\n  }\n}\n@media (min-width: 412) and (min-height: 876px) {\n  .divheight {\n    height: 160px;\n  }\n}\n::ng-deep .rcls-alert-carcombo .cls-alert-flightcomboreview {\n  align-items: center !important;\n  --max-width: 280px;\n  text-align: center;\n}\n::ng-deep .cls-alert-carcombo .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n::ng-deep .cls-alert-carcombo .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block;\n}\n::ng-deep .sc-ion-alert-ios-h.cls-alert-carcombo {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  width: 100% !important;\n  display: block !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios.alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n.text-point {\n  font-size: 14px;\n  color: #222222;\n}\n.num-point {\n  font-size: 12px;\n  color: #828282;\n}\n.text-điscount {\n  font-size: 14px;\n}\n.cls-col {\n  align-self: center;\n}\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n}\n.cls-mt10 {\n  margin-top: -10px;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 7px;\n  background-color: #f2f2f2 !important;\n}\n.cls-ml5 {\n  margin-left: 5px;\n}\n.text-promotion {\n  font-size: 14px;\n  color: #828282;\n}\n.div-voucher .div-flex {\n  display: flex;\n}\n.div-voucher .div-flex .div-first {\n  width: 160px;\n}\n.div-voucher .div-flex .div-first .div-checkpoint {\n  display: flex;\n}\n.div-voucher .div-flex .div-first .check-point {\n  margin-top: 10px;\n  width: 12px;\n  height: 12px;\n}\n.div-voucher .div-flex .div-first .cls-ml8 {\n  margin-left: 8px;\n}\n.div-voucher .div-flex .div-first .div-disabled {\n  opacity: 0.5;\n}\n.div-voucher .div-flex .div-col-split {\n  width: 1px;\n  border-left: solid 0.5px #bdbdbd;\n  margin: 8px 0;\n}\n.div-voucher .div-flex .text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-voucher .div-flex .num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.div-voucher .div-flex .div-promotion {\n  margin-left: 8px;\n  align-self: center;\n}\n.cls-mt10 {\n  margin-top: 10px;\n}\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  padding: 8px 0;\n  font-weight: 300;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.text-width-190 {\n  width: 190px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap !important;\n}\n.margin-right-5 {\n  margin-right: 5px;\n}\n.line-blue {\n  color: #26bed6;\n  right: 16px;\n  position: absolute;\n  margin-top: 5px;\n}\n.div-flex {\n  display: flex;\n}\n.text-suggest {\n  line-height: 1.4;\n  font-size: 14px;\n}\n.row-suggest {\n  border-radius: 4px;\n  background-color: #feeec7;\n  padding: 12px 8px 8px 8px;\n}\n.mt-3 {\n  margin-top: 3px;\n}\n.color-red {\n  color: #e52822;\n}\n.color-blue {\n  color: #2f80ed;\n}\n.text-weight-suggest {\n  font-weight: bold;\n}\n.text-underline {\n  text-decoration: underline;\n}\n.text-room {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 290px;\n}\n.color-blue {\n  color: #26bed6 !important;\n}\n.m-width-280 {\n  min-width: 280px;\n}\n.text-right {\n  text-align: right;\n}\n.width-10 {\n  width: 10% !important;\n}\n.width-100 {\n  width: 100%;\n}\n.width-150 {\n  width: 150%;\n}\n.div-icon {\n  display: flex;\n  align-items: center;\n  width: 16px;\n}\n.div-text-center {\n  margin-right: 5px;\n  padding-left: 5px;\n  width: 85%;\n  display: flex;\n  font-size: 14px;\n  text-align: left;\n  color: #3f3b3b;\n}\n.div-text-center .text-sub {\n  color: #868998;\n}\n.div-text-center .text-point {\n  font-size: 14px;\n  font-weight: 500;\n  text-align: right;\n  color: #868998;\n}\n.div-button {\n  text-align: right;\n  width: 15%;\n  height: 24px;\n}\n.div-button ion-toggle.toggle-icon.toggle-inner {\n  width: 24px;\n}\n.div-line {\n  margin: 14px 0 18px 0;\n  border-bottom: solid 1px #f2f2f2;\n}\n.div-voucher-apply {\n  display: flex;\n  margin: 14px 0 6px 0;\n}\n.div-voucher-apply .width-100 {\n  width: 100%;\n}\n.div-voucher-apply .width-200 {\n  width: 200%;\n}\n.div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.div-voucher-apply .text-code {\n  font-size: 14px;\n  color: #f79321;\n}\n.div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.div-voucher-apply .text-strike {\n  text-decoration: line-through;\n  text-align: right;\n}\n.div-voucher-apply .text-right {\n  text-align: right;\n}\n.div-aplly-voucher .align-center {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tYm9jYXJuZXcvY29tYm9jYXJuZXcucGFnZS5zY3NzIiwiL1VzZXJzL2l0ZGV2L0RvY3VtZW50cy9EZXZlbG9wL09saXZpYV9pT1Mvb2xpdmlhX2lvcyBob3RmaXggMi45LjcgdG91ci9zcmMvYXBwL2NvbWJvY2FybmV3L2NvbWJvY2FybmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FERUo7QUNBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QURHRjtBQ0FBO0VBQ0ksYUFBQTtBREdKO0FDREk7RUFDSSxVQUFBO0FER1I7QUNESTtFQUNJLGtCQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBREdSO0FDREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QURHUjtBQ0RJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBREdSO0FDREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtBREdSO0FDREk7RUFDSSxnQkFBQTtBREdSO0FDREk7RUFDSSxnQkFBQTtBREdSO0FDREk7RUFDSSxnQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURHUjtBQ0RRO0VBQ0ksWUFBQTtBREdaO0FDRVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEQVo7QUNFUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURBWjtBQ0lJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QURGUjtBQ0lRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBREZaO0FDSVE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FERlo7QUNPUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FETFo7QUNVTTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRFJWO0FDVU07RUFDSSxZQUFBO0FEUlY7QUNVTTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRFJWO0FDV0k7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7QURUUjtBQ1dJO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtBRFRSO0FDV0k7RUFDSSx5QkFBQTtBRFRSO0FDV0k7RUFDSSwwQkFBQTtBRFRSO0FDV0k7RUFDSSx3QkFBQTtBRFRSO0FDWUk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FEVlI7QUNZSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QURWUjtBQ1lJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEVlI7QUNZSTtFQUNJLGtCQUFBO0FEVlI7QUNZSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURWUjtBQ1lJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBRFZSO0FDWVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FEVlo7QUNnQkk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURkUjtBQ2lCSTtFQUNJLGdCQUFBO0FEZlI7QUNpQkk7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FEZlI7QUNpQkk7RUFFSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBRGhCUjtBQ2tCSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FEaEJSO0FDbUJJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEakJSO0FDbUJJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBRGpCUjtBQ3NCSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBRHBCUjtBQ3VCQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBRHJCSjtBQ3VCQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURyQko7QUN1QkE7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEckJKO0FDdUJBO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QURwQk47QUNzQkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRG5CSjtBQ3FCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRGxCSjtBQ29CRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEakJKO0FDbUJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBRUEsaUJBQUE7QURqQko7QUNtQkE7RUFFSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRGpCSjtBQ21CQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBRGhCSjtBQ2tCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRGZKO0FDaUJBO0VBRUksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QURmSjtBQ21CSTtFQUZKO0lBR1EsYUFBQTtFRGZOO0FBQ0Y7QUNnQkk7RUFMSjtJQU1RLGFBQUE7RURiTjtBQUNGO0FDY0k7RUFSSjtJQVNRLGFBQUE7RURYTjtBQUNGO0FDWUk7RUFYSjtJQVlRLGFBQUE7RURUTjtBQUNGO0FDVUk7RUFkSjtJQWVRLGFBQUE7RURQTjtBQUNGO0FDUUk7RUFqQko7SUFrQlEsYUFBQTtFRExOO0FBQ0Y7QUNRSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRExSO0FDUUk7RUFDTSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0dBQUEsZ0NBQUE7T0FBQSw0QkFBQTtBRFBWO0FDVU07RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBRFJSO0FDVU07RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QURSUjtBQ1VNO0VBQ00sY0FBQTtBRFJaO0FDVVE7RUFDSSxzREFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBRFJaO0FDV1E7RUFDSTtJQUNFLGtCQUFBO0VEVFo7QUFDRjtBQ1dNO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBRFRSO0FDV007RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRFRSO0FDV007RUFDRSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRFRSO0FDWU07RUFDRTtJQUNFLGtCQUFBO0VEVlI7QUFDRjtBQ2NJO0VBRUYsZUFBQTtFQUNBLGNBQUE7QURaRjtBQ2NBO0VBRUUsZUFBQTtFQUNBLGNBQUE7QURaRjtBQ2NBO0VBRUUsZUFBQTtBRFpGO0FDY0E7RUFFRSxrQkFBQTtBRFpGO0FDY0E7RUFFRSwrQkFBQTtBRFpGO0FDY0E7RUFFRSxpQkFBQTtBRFpGO0FDY0E7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FEWkY7QUNjQTtFQUVFLGdCQUFBO0FEWkY7QUNjQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0FEWkY7QUNlSTtFQUNFLGFBQUE7QURaTjtBQ2NNO0VBQ0ksWUFBQTtBRFpWO0FDY1U7RUFDRSxhQUFBO0FEWlo7QUNnQlU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FEZFo7QUNnQlU7RUFFRSxnQkFBQTtBRGZaO0FDaUJVO0VBQ0UsWUFBQTtBRGZaO0FDbUJNO0VBQ0UsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBRGpCUjtBQ29CTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURsQlI7QUNvQk07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEbEJSO0FDcUJNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBRG5CUjtBQ3dCRTtFQUNJLGdCQUFBO0FEckJOO0FDdUJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURwQko7QUNzQkU7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBRG5CSjtBQ3FCRTtFQUNFLFlBQUE7QURsQko7QUNvQkE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FEbEJGO0FDb0JBO0VBQ0ksaUJBQUE7QURqQko7QUNtQkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRGhCSjtBQ2tCRTtFQUNFLGFBQUE7QURmSjtBQ2lCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBRGRKO0FDaUJFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FEZEo7QUNnQkU7RUFDRSxlQUFBO0FEYko7QUNlRTtFQUNHLGNBQUE7QURaTDtBQ2NFO0VBQ0UsY0FBQTtBRFhKO0FDYUU7RUFDRSxpQkFBQTtBRFZKO0FDWUU7RUFDRSwwQkFBQTtBRFRKO0FDV0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEUkY7QUNVQTtFQUNFLHlCQUFBO0FEUEY7QUNXQTtFQUNFLGdCQUFBO0FEUkY7QUNVQTtFQUNFLGlCQUFBO0FEUEY7QUNTQTtFQUNFLHFCQUFBO0FETkY7QUNRQTtFQUNFLFdBQUE7QURMRjtBQ09BO0VBQ0UsV0FBQTtBREpGO0FDT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FESkY7QUNPQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURKRjtBQ01FO0VBQ0UsY0FBQTtBREpKO0FDT0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURMSjtBQ1VBO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRFBGO0FDU0U7RUFDRSxXQUFBO0FEUEo7QUNXQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7QURSRjtBQ1lBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FEVEY7QUNXRTtFQUNFLFdBQUE7QURUSjtBQ1dFO0VBQ0UsV0FBQTtBRFRKO0FDWUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRFZKO0FDWUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRFZKO0FDYUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBRFhKO0FDY0U7RUFDRSw2QkFBQTtFQUNDLGlCQUFBO0FEWkw7QUNlRTtFQUNFLGlCQUFBO0FEYko7QUNpQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QURkSiIsImZpbGUiOiJzcmMvYXBwL2NvbWJvY2FybmV3L2NvbWJvY2FybmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWNhcmNvbWJvIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2x1bW5zOiAjMjIyMjIyO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRleHQtdGhpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4LjlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC10aGluLWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC50ZXh0LXRheC1pbmNsdWRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGVudC1jYXJjb21ibyAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5wLXRvcC0xNSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTYge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTIge1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmYtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmNvbC1zdGVwIHtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1jYXJjb21ibyAuY29sLXN0ZXAgaW1nIHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtdGl0bGUgLmNvbWJvLXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmNhcmNvbWJvLWhvdGVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwNHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW1nLWhvdGVsLWF2YXRhciB7XG4gIG1pbi13aWR0aDogMTA0cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMTJweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAubmFtZS1ob3RlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sdW1uczogIzIyMjIyMjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtYWRkcmVzcyAuZGl2LWxvY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtYWRkcmVzcyAuaW1nLWxvY2F0aW9uIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1hZGRyZXNzIC50ZXh0LWFkZHJlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LXNwbGl0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1pbmZvLWhvdGVsIHtcbiAgbWFyZ2luOiAxNi41cHggMHB4IDEycHggMHB4O1xuICBwYWRkaW5nLXRvcDogMTYuNXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnNwLWNpLWNvIHtcbiAgbWFyZ2luOiA2LjVweCAwcHggOXB4IDBweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1yb29tLWluZm8ge1xuICBtYXJnaW46IDcuNXB4IDBweCAxNnB4IDBweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1yb29tLXBlbmFsdHkge1xuICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LWRhdGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtbGFiZWwtc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtZGF0ZS1jb3V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAucC1yaWdodC00IHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1yaWdodC1mbG9hdC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtcmVsYXRpdmUgLmJ1dHRvbi1mbG9hdC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmxhYmVsLXByaWNlLWRpc2NvdW50IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAucm9vbS1pbmZvIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5idG4tY2hhbmdlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlYzk3MWY7XG4gIGNvbG9yOiAjZWM5NzFmO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OHB4O1xuICBtYXJnaW46IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAuYnRuLWFwcGx5IHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRvdGFsLXByaWNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXYtZm9vdGVyIC5idXR0b24tZm9vdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkxJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW46IDEycHggMTZweCA5cHggMTZweDtcbn1cblxuLnRleHQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1pbmZvY2FyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtY2hhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmJ0bm5vbmVzdWNjZXNzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzQ0N2EwMDtcbiAgY29sb3I6ICM0NDdhMDA7XG59XG5cbi5wbGFjZWxpbmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjQlO1xuICB3aWR0aDogMXB4O1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyOiBkb3R0ZWQgMXB4ICNiZGJkYmQ7XG4gIGxlZnQ6IDNweDtcbn1cblxuLnBsYWNlcG9pbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDYlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xufVxuXG4ucGxhY2VkaXYge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtaW4taGVpZ2h0OiAzNjBweCkge1xuICAuZGl2aGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWluLWhlaWdodDogMzc1cHgpIHtcbiAgLmRpdmhlaWdodCB7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM4NHB4KSB7XG4gIC5kaXZoZWlnaHQge1xuICAgIGhlaWdodDogMTU1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzODRweCkgYW5kIChtaW4taGVpZ2h0OiA0MTJweCkge1xuICAuZGl2aGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWluLWhlaWdodDogNDgwcHgpIHtcbiAgLmRpdmhlaWdodCB7XG4gICAgaGVpZ2h0OiAxNTVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMikgYW5kIChtaW4taGVpZ2h0OiA4NzZweCkge1xuICAuZGl2aGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAucmNscy1hbGVydC1jYXJjb21ibyAuY2xzLWFsZXJ0LWZsaWdodGNvbWJvcmV2aWV3IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1hbGVydC1pb3MtaC5jbHMtYWxlcnQtY2FyY29tYm8ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KSB7XG4gIDo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3MuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuXG4udGV4dC1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5udW0tcG9pbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4udGV4dC3EkWlzY291bnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jbHMtY29sIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuXG4uY2xzLW10MTAge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmNscy1ociB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cblxuLmNscy1tbDUge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udGV4dC1wcm9tb3Rpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCB7XG4gIHdpZHRoOiAxNjBweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuZGl2LWNoZWNrcG9pbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5jaGVjay1wb2ludCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmNscy1tbDgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5kaXYtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtY29sLXNwbGl0IHtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC50ZXh0LXBvaW50IHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLm51bS1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtcHJvbW90aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2xzLW10MTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGVwYXJ0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbnAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4udGV4dC13aWR0aC0xOTAge1xuICB3aWR0aDogMTkwcHg7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4ubWFyZ2luLXJpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxpbmUtYmx1ZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICByaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZXh0LXN1Z2dlc3Qge1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yb3ctc3VnZ2VzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWVjNztcbiAgcGFkZGluZzogMTJweCA4cHggOHB4IDhweDtcbn1cblxuLm10LTMge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmNvbG9yLWJsdWUge1xuICBjb2xvcjogIzJmODBlZDtcbn1cblxuLnRleHQtd2VpZ2h0LXN1Z2dlc3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi50ZXh0LXJvb20ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDI5MHB4O1xufVxuXG4uY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5tLXdpZHRoLTI4MCB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi53aWR0aC0xMCB7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbn1cblxuLndpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2lkdGgtMTUwIHtcbiAgd2lkdGg6IDE1MCU7XG59XG5cbi5kaXYtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4uZGl2LXRleHQtY2VudGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICB3aWR0aDogODUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjM2YzYjNiO1xufVxuLmRpdi10ZXh0LWNlbnRlciAudGV4dC1zdWIge1xuICBjb2xvcjogIzg2ODk5ODtcbn1cbi5kaXYtdGV4dC1jZW50ZXIgLnRleHQtcG9pbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzg2ODk5ODtcbn1cblxuLmRpdi1idXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmRpdi1idXR0b24gaW9uLXRvZ2dsZS50b2dnbGUtaWNvbi50b2dnbGUtaW5uZXIge1xuICB3aWR0aDogMjRweDtcbn1cblxuLmRpdi1saW5lIHtcbiAgbWFyZ2luOiAxNHB4IDAgMThweCAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2YyZjJmMjtcbn1cblxuLmRpdi12b3VjaGVyLWFwcGx5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNHB4IDAgNnB4IDA7XG59XG4uZGl2LXZvdWNoZXItYXBwbHkgLndpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC53aWR0aC0yMDAge1xuICB3aWR0aDogMjAwJTtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM2YzYjNiO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LWNvZGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZjc5MzIxO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzZjNiM2I7XG59XG4uZGl2LXZvdWNoZXItYXBwbHkgLnRleHQtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5kaXYtYXBsbHktdm91Y2hlciAuYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCIudGV4dC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaGVhZGVyLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtY2FyY29tYm97XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LXJlZ3VsYXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbHVtbnM6ICMyMjIyMjI7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aGlue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTguOXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgY29sb3I6IzRmNGY0ZjtcclxuICAgIH1cclxuICAgIC50ZXh0LXRoaW4taXRhbGlje1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1uYW1le1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGF4LWluY2x1ZGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xNXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC04e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5mLWJvbGR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY29sLXN0ZXB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi10aXRsZXtcclxuICAgICAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tYm8tc3ViLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1OTIzMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJjb21iby1ob3RlbHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgLmltZy1ob3RlbC1hdmF0YXJ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTA0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm8taG90ZWx7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMTJweDtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUtaG90ZWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBjb2x1bW5zOiAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYtYWRkcmVzc3tcclxuXHJcbiAgICAgIC5kaXYtbG9jYXRpb257XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1sb2NhdGlvbntcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1hZGRyZXNze1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgICAuZGl2LXNwbGl0e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICAgIC5zcC1pbmZvLWhvdGVse1xyXG4gICAgICAgIG1hcmdpbjogMTYuNXB4IDBweCAxMnB4IDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTYuNXB4O1xyXG4gICAgfVxyXG4gICAgLnNwLWNpLWNve1xyXG4gICAgICAgIG1hcmdpbjogNi41cHggMHB4IDlweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Atcm9vbS1pbmZve1xyXG4gICAgICAgIG1hcmdpbjogNy41cHggMHB4IDE2cHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnNwLXJvb20tcGVuYWx0eXtcclxuICAgICAgICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1kYXRlIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIH1cclxuICAgIC5kaXYtbGFiZWwtc21hbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1kYXRlLWNvdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAucC1yaWdodC00e1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIC5kaXYtcmlnaHQtZmxvYXQtcHJpY2V7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIC5kaXYtcmVsYXRpdmV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcblxyXG4gICAgICAgIC5idXR0b24tZmxvYXQtcmlnaHR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGFiZWwtcHJpY2UtZGlzY291bnR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHhcclxuICAgIH1cclxuXHJcbiAgICAucm9vbS1pbmZve1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNoYW5nZXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWM5NzFmO1xyXG4gICAgICAgIGNvbG9yOiAjZWM5NzFmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hcHBseVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50b3RhbC1wcmljZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5kaXYtc3BsaXQtcGFuZWx7XHJcbiAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1mb290ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5kaXYtZm9vdGVye1xyXG4gICAgLmJ1dHRvbi1mb290ZXJcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTElO1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBtYXJnaW46IDEycHggMTZweCA5cHggMTZweDtcclxuICAgIH1cclxufVxyXG4udGV4dC1sb2NhdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi50ZXh0LWluZm9jYXJcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuLnRleHQtY2hhbmdlXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG59XHJcbi5jb21iby1kZXBhcnR1cmUtdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgfVxyXG4gIC5mbGlnaHQtcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZWM5NzFmO1xyXG4gIH1cclxuICAudGV4dC1yb29tLXByaWNlLW90YXtcclxuICAgIGNvbG9yOiM4MjgyODI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgLy9tYXJnaW46IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG4uYnRubm9uZXN1Y2Nlc3Ncclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xyXG4gICAgY29sb3I6ICM0NDdhMDA7XHJcbn1cclxuLnBsYWNlbGluZVxyXG57ICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMjQlO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgYm9yZGVyOiBkb3R0ZWQgMXB4ICNiZGJkYmQ7XHJcbiAgICBsZWZ0OiAzcHg7XHJcbn1cclxuLnBsYWNlcG9pbnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ2JTtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XHJcbn1cclxuLnBsYWNlZGl2XHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uZGl2aGVpZ2h0XHJcbntcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM2MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjM2MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM3NXB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtaW4taGVpZ2h0OiAzODRweCkge1xyXG4gICAgICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWluLWhlaWdodCA6IDQxMnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtaW4taGVpZ2h0OiA0ODBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTU1cHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDEyKSBhbmQgKG1pbi1oZWlnaHQ6IDg3NnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgLnJjbHMtYWxlcnQtY2FyY29tYm8gIC5jbHMtYWxlcnQtZmxpZ2h0Y29tYm9yZXZpZXcge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC13aWR0aDogMjgwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5zYy1pb24tYWxlcnQtaW9zLWgge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAgIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1jYXJjb21ibyAge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAgICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCl7XHJcbiAgICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuICAgIC50ZXh0LXBvaW50XHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuLm51bS1wb2ludFxyXG57XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcbi50ZXh0LcSRaXNjb3VudFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jbHMtY29sXHJcbntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmlvbi1pdGVtXHJcbntcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG59XHJcbi5jbHMtbXQxMFxyXG57XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmNscy1oclxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG59XHJcbi5jbHMtbWw1XHJcbntcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi50ZXh0LXByb21vdGlvblxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcbi5kaXYtdm91Y2hlcntcclxuICAgIC5kaXYtZmxleHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICBcclxuICAgICAgLmRpdi1maXJzdHtcclxuICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICBcclxuICAgICAgICAgIC5kaXYtY2hlY2twb2ludHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2stcG9pbnR7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2xzLW1sOFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpdi1kaXNhYmxlZHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5kaXYtY29sLXNwbGl0e1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnRleHQtcG9pbnR7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIH1cclxuICAgICAgLm51bS1wb2ludCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRpdi1wcm9tb3Rpb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG4gIC5jbHMtbXQxMHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLmRlcGFydC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gIH1cclxuICAudGV4dC13aWR0aC0xOTB7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgfVxyXG4udGV4dC1wXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcclxufVxyXG4ubWFyZ2luLXJpZ2h0LTV7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICB9XHJcbiAgLmxpbmUtYmx1ZXtcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHhcclxuICB9XHJcbiAgLmRpdi1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLnRleHQtc3VnZ2VzdHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3ctc3VnZ2VzdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWVlYzc7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDhweCA4cHggOHB4O1xyXG4gIH1cclxuICAubXQtM3tcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbiAgLmNvbG9yLXJlZHtcclxuICAgICBjb2xvcjogI2U1MjgyMjtcclxuICB9XHJcbiAgLmNvbG9yLWJsdWV7XHJcbiAgICBjb2xvcjogIzJmODBlZDtcclxuICB9XHJcbiAgLnRleHQtd2VpZ2h0LXN1Z2dlc3R7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLnRleHQtdW5kZXJsaW5le1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnRleHQtcm9vbXtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDI5MHB4O1xyXG59XHJcbi5jb2xvci1ibHVle1xyXG4gIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnRcclxufVxyXG5cclxuXHJcbi5tLXdpZHRoLTI4MHtcclxuICBtaW4td2lkdGg6IDI4MHB4O1xyXG59XHJcbi50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ud2lkdGgtMTAge1xyXG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG4ud2lkdGgtMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ud2lkdGgtMTUwIHtcclxuICB3aWR0aDogMTUwJTtcclxufVxyXG5cclxuLmRpdi1pY29ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTZweDtcclxuICBcclxufVxyXG4uZGl2LXRleHQtY2VudGVye1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzNmM2IzYjtcclxuXHJcbiAgLnRleHQtc3ViIHtcclxuICAgIGNvbG9yOiAjODY4OTk4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtcG9pbnQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM4Njg5OTg7XHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcbi5kaXYtYnV0dG9ue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG5cclxuICBpb24tdG9nZ2xlLnRvZ2dsZS1pY29uLnRvZ2dsZS1pbm5lciB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICB9XHJcbiAgXHJcbn1cclxuLmRpdi1saW5lIHtcclxuICBtYXJnaW46IDE0cHggMCAxOHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNmMmYyZjI7XHJcbn1cclxuXHJcblxyXG4uZGl2LXZvdWNoZXItYXBwbHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxNHB4IDAgNnB4IDA7XHJcblxyXG4gIC53aWR0aC0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC53aWR0aC0yMDAge1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ub3JtYWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzZjNiM2I7XHJcbiAgfVxyXG4gIC50ZXh0LWNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmNzkzMjE7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ub3JtYWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzZjNiM2I7XHJcbiAgfVxyXG5cclxuICAudGV4dC1zdHJpa2Uge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuLmRpdi1hcGxseS12b3VjaGVyIHtcclxuICAuYWxpZ24tY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/combocarnew/combocarnew.page.ts":
/*!*************************************************!*\
  !*** ./src/app/combocarnew/combocarnew.page.ts ***!
  \*************************************************/
/*! exports provided: CombocarnewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombocarnewPage", function() { return CombocarnewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _combocarchangeplace_combocarchangeplace_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../combocarchangeplace/combocarchangeplace.page */ "./src/app/combocarchangeplace/combocarchangeplace.page.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _requestcombo1_requestcombo1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../requestcombo1/requestcombo1 */ "./src/app/requestcombo1/requestcombo1.ts");
/* harmony import */ var _cardeparture_cardeparture_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../cardeparture/cardeparture.page */ "./src/app/cardeparture/cardeparture.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../adddiscount/adddiscount.page */ "./src/app/adddiscount/adddiscount.page.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");


















let CombocarnewPage = class CombocarnewPage {
    constructor(storage, zone, valueGlobal, navCtrl, actionSheetCtrl, gf, bookCombo, booking, Roomif, searchhotel, alertCtrl, networkProvider, modalCtrl, loadingCtrl, activityService, toastCtrl, _voucherService) {
        this.storage = storage;
        this.zone = zone;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.gf = gf;
        this.bookCombo = bookCombo;
        this.booking = booking;
        this.Roomif = Roomif;
        this.searchhotel = searchhotel;
        this.alertCtrl = alertCtrl;
        this.networkProvider = networkProvider;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.activityService = activityService;
        this.toastCtrl = toastCtrl;
        this._voucherService = _voucherService;
        this.children = 0;
        this.totalInfant = 0;
        this.textage = "";
        this.textagepost = "";
        this.paxtitle = "";
        this.fromPlace = 'Hồ Chí Minh';
        this.listDepartTransfers = [];
        this.listReturnTransfers = [];
        this.listkeys = [];
        this.loadpricedone = false;
        this.pricedepart = 0;
        this.pricereturn = 0;
        this.AdultCombo = 0;
        this.adultCombo = 2;
        this.totalAdultExtrabed = 0;
        this.ChildOtherFeeTotal = 0;
        this.ChildOtherFee = 0;
        this.AdultOtherFee = 0;
        this.roomPriceSale = 0;
        this.PriceDiffUnit = 0;
        this.adultFlightNumber = 0;
        this.indexdep = 0;
        this.indexret = 0;
        this.JsonSurchargeFee = {
            RoomDifferenceFee: 0,
            AdultUnit: 0,
            TransportPriceSale: 0,
            DepartTicketDifferenceFee: 0,
            ReturnTicketDifferenceFee: 0,
            ExtraTicketDifferenceFee: 0,
            AllExtraTicketDifference: {},
            BaggageDepart: 0,
            BaggageReturn: 0,
            SurchargeWeekendFee: 0,
            SurchargeFee: [],
            TotalAll: 0,
            ComboData: {},
            AllExtraPointsFee: {}
        };
        this.ischeck = false;
        this.ischeckpoint = false;
        this.ischecktext = 0;
        this.ischeckerror = 0;
        this.ischeckbtnpromo = false;
        this.ischeckpromo = false;
        this.loadcarspricedone = false;
        this.pickup_pointsdep = [];
        this.drop_off_points_at_arrivedep = [];
        this.pickup_pointsret = [];
        this.drop_off_points_at_arriveret = [];
        this.isConnected = true;
        this.textpromotion = "iVIVU Voucher | Mobile Gift";
        this._daysConfig = [];
        this.allowclickcalendar = true;
        this.totalPriceDep = 0;
        this.totalPriceRet = 0;
        this.storage.get('username').then(name => {
            if (name !== null) {
                this.username = name;
            }
        });
        this.storage.get('email').then(e => {
            if (e !== null) {
                this.email = e;
            }
        });
        if (this.booking.ChildAge) {
            this.booking.ChildAge.forEach(element => {
                if (element == "<1" || Number(element) < 2) {
                    this.infant += 1;
                }
            });
        }
        this.Avatar = Roomif.imgHotel;
        this.Name = booking.HotelName;
        this.Address = Roomif.Address;
        this.cin = booking.CheckInDate;
        this.cout = booking.CheckOutDate;
        this.duration = moment__WEBPACK_IMPORTED_MODULE_11__(this.cout).diff(moment__WEBPACK_IMPORTED_MODULE_11__(this.cin), 'days');
        this.TotalNight = this.duration;
        this.dur = Roomif.dur;
        this.roomnumber = this.searchhotel.roomnumber;
        this.adults = booking.Adults;
        this.totalAdult = booking.Adults;
        this.children = booking.Child;
        this.totalChild = booking.Child;
        this.roomtype = Roomif.roomtype;
        this.jsonroom = Roomif.jsonroom;
        this.room = Roomif.arrroom;
        var chuoicin = this.cin.split('-');
        var chuoicout = this.cout.split('-');
        this.cinshow = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
        this.coutshow = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
        this.nameroom = this.room[0].ClassName;
        this.breakfast = (this.bookCombo.MealTypeCode == 'CUS' ? 'Ăn 3 bữa' : this.bookCombo.MealTypeName);
        this.titlecombo = this.bookCombo.ComboTitle;
        this.titlecomboprice = this.bookCombo.ComboRoomPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.totalInfant = this.infant;
        this.totalChild = this.children - this.infant;
        this.arrchild = this.searchhotel.arrchild;
        this.childrendisplay = this.children;
        this.adulsdisplay = this.booking.Adults;
        this.fromPlace = this.bookCombo.ComboDetail.comboDetail.departurePlace;
        this.comboId = this.bookCombo.ComboDetail.comboDetail.comboId;
        this.roomcboId = this.bookCombo.ComboDetail.comboDetail.roomId;
        this.departTicketSale = this.bookCombo.ComboDetail.comboDetail.departTicketSale;
        this.returnTicketSale = this.bookCombo.ComboDetail.comboDetail.returnTicketSale;
        this.roomPriceSale = this.bookCombo.ComboDetail.comboDetail.roomPriceSale;
        if (this.arrchild) {
            for (let i = 0; i < this.arrchild.length; i++) {
                if (i == this.arrchild.length - 1) {
                    this.textage = this.textage + this.arrchild[i].numage;
                    this.textagepost = this.textagepost + this.arrchild[i].numage;
                }
                else {
                    this.textage = this.textage + this.arrchild[i].numage + ",";
                    this.textagepost = this.textagepost + this.arrchild[i].numage + ",";
                }
                if (this.arrchild[i].numage >= 4) {
                    this.totalAdult++;
                }
            }
            if (this.textage) {
                this.textage = "(" + this.textage + ")";
            }
        }
        if (this.adulsdisplay > 0) {
            this.paxtitle += this.adulsdisplay + ' người lớn';
        }
        if (this.childrendisplay > 0) {
            this.paxtitle += ', ' + this.childrendisplay + ' trẻ em';
        }
        var se = this;
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
            this.getHotelContractPrice(this.bookCombo.FormParam);
        }
        else {
            this.isConnected = false;
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        }
        this.loadLunar();
    }
    loadLunar() {
        var se = this;
        if (se.valueGlobal.listlunar && se.valueGlobal.listlunar.length > 0) {
            se.cofdate = 0;
            se.cotdate = 0;
            se.bindlunar();
        }
    }
    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }
    bindlunar() {
        var se = this;
        if (!se.valueGlobal.listlunar) {
            return;
        }
        for (let i = 0; i < se.valueGlobal.listlunar.length; i++) {
            var checkdate = moment__WEBPACK_IMPORTED_MODULE_11__(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
            if (checkdate == se.cin) {
                se.cofdate = 1;
                if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                    var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                    if (ischecklunar) {
                        se.cinthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                    }
                    else {
                        se.cinthu = se.valueGlobal.listlunar[i].name;
                    }
                }
            }
            else {
                se.getDayName(se.cin, se.cout);
            }
            if (checkdate == se.cout) {
                se.cotdate = 1;
                if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                    var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                    if (ischecklunar) {
                        se.coutthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                    }
                    else {
                        se.coutthu = se.valueGlobal.listlunar[i].name;
                    }
                }
            }
            else {
                se.getDayName(se.cin, se.cout);
            }
        }
    }
    getDayName(datecin, datecout) {
        if (!this.cinthu) {
            this.cinthu = moment__WEBPACK_IMPORTED_MODULE_11__(datecin).format('dddd');
            switch (this.cinthu) {
                case "Monday":
                    this.cinthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.cinthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.cinthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.cinthu = "Thứ 5";
                    break;
                case "Friday":
                    this.cinthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.cinthu = "Thứ 7";
                    break;
                default:
                    this.cinthu = "Chủ nhật";
                    break;
            }
        }
        if (!this.coutthu) {
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_11__(datecout).format('dddd');
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    break;
            }
        }
    }
    ngOnInit() {
        this.intervalID = setInterval(() => {
            if (this.listkeys.length > 0) {
                this.listkeys.forEach(key => {
                    this.storage.remove(key);
                });
            }
        }, 60000 * 15);
        this.bookCombo.upgradeRoomChange.pipe().subscribe((dataRoomChange) => {
            if (dataRoomChange) {
                this.updateRoomChange(dataRoomChange);
            }
        });
        this._voucherService.getCarComboObservable().subscribe((itemVoucher) => {
            if (itemVoucher) {
                if (this.promocode && this.promocode != itemVoucher.code && !this.itemVoucherCarCombo) {
                    this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
                    this.gf.showAlertMessageOnly(`Mã voucher ${this.promocode} đang được sử dụng. Quý khách vui lòng kiểm tra lại.`);
                    return;
                }
                this.zone.run(() => {
                    if (itemVoucher.claimed) {
                        this._voucherService.selectVoucher = itemVoucher;
                        this.itemVoucherCarCombo = itemVoucher;
                        this.promocode = itemVoucher.code;
                        this.discountpromo = itemVoucher.rewardsItem.price;
                        this.bookCombo.promoCode = itemVoucher.code;
                        this.bookCombo.discountpromo = this.discountpromo;
                        this.ischeckbtnpromo = true;
                        this.ischeckpromo = true;
                    }
                    else {
                        this._voucherService.selectVoucher = null;
                        this.itemVoucherCarCombo = null;
                        this.promocode = "";
                        this.discountpromo = 0;
                        this.bookCombo.promoCode = "";
                        this.bookCombo.discountpromo = 0;
                        this.ischeckbtnpromo = false;
                        this.ischeckpromo = false;
                    }
                    this.edit();
                });
                this.modalCtrl.dismiss();
            }
        });
        this._voucherService.getObservableClearVoucherAfterPaymentDone().subscribe((check) => {
            if (check) {
                this._voucherService.selectVoucher = null;
                this.itemVoucherCarCombo = null;
                this.promocode = "";
                this.discountpromo = 0;
                this.bookCombo.promoCode = "";
                this.bookCombo.discountpromo = 0;
                this.ischeckbtnpromo = false;
                this.ischeckpromo = false;
            }
        });
    }
    getHotelContractPrice(data) {
        var se = this;
        if (data) {
            data.IsPackageRateInternal = true;
            data.IsPackageRate = true;
            data.GetVinHms = 1;
            data.GetSMD = 1;
            data.IsB2B = true;
            var form = data;
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelSearchReqContractAppV2',
                timeout: 10000, maxAttempts: 3, retryDelay: 10000,
                headers: {},
                form
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "carcombo",
                        func: "getHotelContractPrice",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "carcombo";
                    error.func = "getHotelContractPrice";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                }
                ;
                se.zone.run(() => {
                    var result = JSON.parse(body);
                    if (result.Hotels) {
                        se.jsonroom = result.Hotels[0].RoomClasses;
                        var element = se.checkElement(se.jsonroom);
                        if (element) {
                            se.nameroom = element.ClassName;
                            se.PriceAvgPlusTA = element.MealTypeRates[0].PriceAvgPlusTotalTA;
                            se.elementMealtype = element.MealTypeRates[0];
                            se.roomnumber = se.elementMealtype.TotalRoom;
                            se.TravPaxPrices = element.MealTypeRates[0].PriceAvgPlusNet * se.roomnumber * se.TotalNight;
                            se.AdultCombo = element.Rooms[0].IncludeAdults * se.elementMealtype.TotalRoom;
                            se.AdultCombo = se.AdultCombo > se.totalAdult ? se.totalAdult : se.AdultCombo;
                            se.bookCombo.mealTypeRates = se.elementMealtype;
                            se.statusRoom = element.MealTypeRates[0].Status;
                            se.calculateDiffPriceUnit();
                            se.getTransferData(true);
                            se.getBOD(element.MealTypeRates[0].RoomId);
                        }
                        else {
                            se.jsonroom = result.Hotels[0].RoomClassesRecomments;
                            var element = se.checkElement(se.jsonroom);
                            if (element) {
                                se.nameroom = element.ClassName;
                                se.PriceAvgPlusTA = element.MealTypeRates[0].PriceAvgPlusTotalTA;
                                se.elementMealtype = element.MealTypeRates[0];
                                se.roomnumber = se.elementMealtype.TotalRoom;
                                se.TravPaxPrices = element.MealTypeRates[0].PriceAvgPlusNet * se.roomnumber * se.TotalNight;
                                se.AdultCombo = element.Rooms[0].IncludeAdults * se.elementMealtype.TotalRoom;
                                se.AdultCombo = se.AdultCombo > se.totalAdult ? se.totalAdult : se.AdultCombo;
                                se.statusRoom = element.MealTypeRates[0].Status;
                                se.bookCombo.mealTypeRates = se.elementMealtype;
                                se.calculateDiffPriceUnit();
                                se.getTransferData(true);
                                se.getBOD(element.MealTypeRates[0].RoomId);
                            }
                            else {
                                se.departDateTimeStr = "không có vé";
                                se.msgwrn = "Hiện tại không có phòng thoả điều kiện của quy khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                                se.loadpricedone = true;
                            }
                        }
                    }
                    else {
                        se.departDateTimeStr = "không có vé";
                        se.msgwrn = "Hiện tại không có phòng thoả điều kiện của quy khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                        se.loadpricedone = true;
                    }
                });
            });
        }
    }
    checkElement(object) {
        var el = null;
        var se = this;
        object.forEach(element => {
            if (element && element.MealTypeRates[0].RoomId == this.roomcboId && !element.MSGCode) {
                el = element;
            }
        });
        if (!el) {
            var arr = object.filter(function (e) { return !e.MSGCode; });
            if (arr && arr.length > 0) {
                el = arr[0];
            }
        }
        return el;
    }
    goback() {
        this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
        this._voucherService.selectVoucher = null;
        this.bookCombo.idpointdepd = '';
        this.bookCombo.idpointdept = '';
        this.bookCombo.idpointretd = '';
        this.bookCombo.idpointrett = '';
        this.valueGlobal.backValue = 'carcombo';
        this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
    }
    loadTransferInfo(departTransfer, returnTransfer, indexdep, indexret) {
        var se = this;
        if (departTransfer && departTransfer.length > 0) {
            this.departObject = departTransfer[indexdep];
            let de_date = this.departObject.route.departure_date;
            se.departDateTimeStr = 'Đi ' + se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(de_date).format('DD-MM-YYYY');
            se.departVehicleStr = this.departObject.company.name;
            this.departTicketSaleshow = this.departObject.route.schedules[0].fare.price - this.departTicketSale;
            this.pricedepart = this.departObject.route.schedules[0].fare.price;
            se.daydeparttitle = se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(de_date).format('DD-MM-YYYY');
            if (this.departTicketSaleshow <= 0) {
                this.checkdiscountdepart = true;
                this.departTicketSaleshow = Math.abs(this.departTicketSaleshow);
            }
            else {
                this.checkdiscountdepart = false;
            }
            this.departTicketSaleshow = this.departTicketSaleshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        }
        if (returnTransfer && returnTransfer.length > 0) {
            this.returnObject = returnTransfer[indexret];
            let re_date = this.returnObject.route.departure_date;
            se.returnDateTimeStr = 'Về ' + se.getDayOfWeek(re_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(re_date).format('DD-MM-YYYY');
            se.returnVehicleStr = this.returnObject.company.name;
            this.returnTicketSaleshow = this.returnObject.route.schedules[0].fare.price - this.returnTicketSale;
            se.dayreturntitle = se.getDayOfWeek(re_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(re_date).format('DD-MM-YYYY');
            this.pricereturn = this.returnObject.route.schedules[0].fare.price;
            if (this.returnTicketSaleshow <= 0) {
                this.checkdiscountreturn = true;
                this.returnTicketSaleshow = Math.abs(this.returnTicketSaleshow);
            }
            else {
                this.checkdiscountreturn = false;
            }
            this.returnTicketSaleshow = this.returnTicketSaleshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            this.PriceAvgPlusTAStr = 0;
            this.postcardetaildepart(0);
        }
    }
    funccheckpoint() {
        var se = this;
        if (se.point > 0) {
            se.Pricepoint = this.total - se.point;
            se.Pricepointshow = se.Pricepoint.toLocaleString();
            if (se.Pricepoint <= 0) {
                se.ischeckpoint = true;
                se.Pricepointshow = 0;
            }
            else {
                se.ischeckpoint = false;
            }
        }
        if (se.ischeckbtnpromo) {
            var total = se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '');
            if (se.ischeck) {
                total = se.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
            }
            se.Pricepointshow = total - se.discountpromo;
            if (se.Pricepointshow > 0) {
                se.Pricepointshow = se.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                se.ischeckbtnpromo = true;
                se.ischeckpromo = true;
            }
            else {
                se.Pricepointshow = 0;
            }
            se.ischecktext = 0;
            se.ischeckerror = 0;
        }
        se.checkVoucherClaimed();
    }
    getTransferData(isDepart) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (se.comboId) {
                if (isDepart) {
                    se.fromId = se.bookCombo.ComboDetail.comboDetail.departureCode;
                    se.toId = se.bookCombo.ComboDetail.arrivalCode;
                    var url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/get-transfer-data?cid=' + se.comboId + '&from=' + se.fromId + '&to=' + se.toId + '&date=' + se.cin + '&an=' + se.adults + '&cn=' + se.children + '&cas=' + se.textagepost;
                    se.gf.RequestApi('GET', url, {}, {}, 'carcombo', 'get-transfer-data').then((data) => {
                        if (data.data && data.data.length > 0) {
                            var listDeparttemp = data.data;
                            se.listDepartTransfers = [];
                            for (let i = 0; i < listDeparttemp.length; i++) {
                                if (listDeparttemp[i].route.schedules[0].available_seats >= se.totalAdult) {
                                    listDeparttemp[i].priceorder = listDeparttemp[i].route.schedules[0].fare.price;
                                    listDeparttemp[i].sortByTime = listDeparttemp[i].route.pickup_time;
                                    se.listDepartTransfers.push(listDeparttemp[i]);
                                }
                            }
                            this.sort("sortByTimeDepartEarly", 1);
                            this.sort("priceup", 1);
                            se.getBestTransfer(1);
                            se.getTransferData(false);
                        }
                        else {
                            se.loadpricedone = true;
                            se.departDateTimeStr = "không có vé";
                            se.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                        }
                    });
                }
                else {
                    se.fromId = se.bookCombo.ComboDetail.comboDetail.departureCode;
                    se.toId = se.bookCombo.ComboDetail.arrivalCode;
                    var url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/get-transfer-data?cid=' + se.comboId + '&from=' + se.toId + '&to=' + se.fromId + '&date=' + se.cout + '&an=' + se.adults + '&cn=' + se.children + '&cas=' + se.textagepost;
                    se.gf.RequestApi('GET', url, {}, {}, 'carcombo', 'get-transfer-data').then((data) => {
                        if (data.data && data.data.length > 0) {
                            var listReturntemp = data.data;
                            se.listReturnTransfers = [];
                            for (let i = 0; i < listReturntemp.length; i++) {
                                if (listReturntemp[i].route.schedules[0].available_seats >= se.totalAdult) {
                                    listReturntemp[i].priceorder = listReturntemp[i].route.schedules[0].fare.price;
                                    listReturntemp[i].sortByTime = listReturntemp[i].route.pickup_time;
                                    se.listReturnTransfers.push(listReturntemp[i]);
                                }
                            }
                            this.sort("sortByTimeDepartEarly", 0);
                            this.sort("priceup", 0);
                            se.getBestTransfer(0);
                            this.loadTransferInfo(this.departTime, this.returnTime, 0, 0);
                        }
                        else {
                            se.loadpricedone = true;
                            se.departDateTimeStr = "không có vé";
                            se.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                        }
                    });
                }
            }
        });
    }
    getBestTransfer(isDepart) {
        var home = [];
        var away = [];
        var other = [];
        var list;
        if (isDepart == 1) {
            list = this.listDepartTransfers;
        }
        else {
            list = this.listReturnTransfers;
        }
        for (let i = 0; i < list.length; i++) {
            var Hour;
            var Minute;
            var kq;
            var time = list[i].route.pickup_time;
            Hour = time.toString().split(':')[0];
            Minute = time.toString().split(':')[1];
            kq = Hour * 60 + Number(Minute);
            if (isDepart == 1) {
                if (kq >= 480 && kq <= 840) {
                    if (list[i].sort_order != 999) {
                        home.push(list[i]);
                    }
                    else {
                        away.push(list[i]);
                    }
                }
                other.push(list[i]);
            }
            else {
                if (kq >= 600 && kq <= 1080) {
                    if (list[i].sort_order != 999) {
                        home.push(list[i]);
                    }
                    else {
                        away.push(list[i]);
                    }
                }
                other.push(list[i]);
            }
        }
        if (isDepart == 1) {
            if (home.length > 0) {
                this.departTime = home;
            }
            else if (away.length > 0) {
                this.departTime = away;
            }
            else if (other.length > 0) {
                this.departTime = other;
            }
        }
        else {
            if (home.length > 0) {
                this.returnTime = home;
            }
            else if (away.length > 0) {
                this.returnTime = away;
            }
            else if (other.length > 0) {
                this.returnTime = other;
            }
        }
    }
    getDayOfWeek(date) {
        let coutthu = moment__WEBPACK_IMPORTED_MODULE_11__(date).format('dddd');
        switch (coutthu) {
            case "Monday":
                coutthu = "Thứ 2";
                break;
            case "Tuesday":
                coutthu = "Thứ 3";
                break;
            case "Wednesday":
                coutthu = "Thứ 4";
                break;
            case "Thursday":
                coutthu = "Thứ 5";
                break;
            case "Friday":
                coutthu = "Thứ 6";
                break;
            case "Saturday":
                coutthu = "Thứ 7";
                break;
            default:
                coutthu = "Chủ nhật";
                break;
        }
        return coutthu;
    }
    next() {
        if (this.elementMealtype.Supplier == 'SERI' && this.elementMealtype.HotelCheckDetailTokenInternal) {
            this.gf.checkAllotmentSeri(this.booking.HotelId, this.elementMealtype.RoomId, this.booking.CheckInDate, this.booking.CheckOutDate, this.roomnumber, 'SERI', this.elementMealtype.HotelCheckDetailTokenInternal).then((allow) => {
                if (allow) {
                    this.continueBook();
                }
                else {
                    this.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
                }
            });
        }
        else {
            this.continueBook();
        }
    }
    continueBook() {
        var self = this;
        if (this.point > 0) {
            if (this.ischeck) {
                this.Roomif.ischeckpoint = this.ischeck;
            }
            else {
                this.Roomif.ischeckpoint = this.ischeck;
                this.Roomif.point = null;
            }
        }
        self.valueGlobal.backValue = '';
        self.Roomif.nameroom = self.nameroom;
        self.bookCombo.departObjectCar = self.departObject;
        self.bookCombo.returnObjectCar = self.returnObject;
        self.Commission = (self.elementMealtype.PriceAvgPlusOTA * self.roomnumber * self.TotalNight) - (self.elementMealtype.PriceAvgPlusNet * self.roomnumber * self.TotalNight);
        self.MathGaladinnerAdExtrabed();
        self.JsonSurchargeFee.DepartTicketDifferenceFee = (self.departTicketSale - self.pricedepart) * (-1) * self.totalAdult;
        self.JsonSurchargeFee.ReturnTicketDifferenceFee = (self.returnTicketSale - self.pricereturn) * (-1) * self.totalAdult;
        self.JsonSurchargeFee.TotalAll = self.total;
        self.JsonSurchargeFee.ComboData = {
            ComboId: self.bookCombo.ComboId,
            MealTypeCode: self.bookCombo.MealTypeCode,
            AdultCombo: self.adultCombo
        };
        var pointprice = 0;
        var total = self.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '');
        if (self.ischeck) {
            pointprice = self.point;
            if (self.ischeckpoint) {
                pointprice = self.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '');
            }
            total = self.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
        }
        self.bookCombo.totalPriceBeforeApplyVoucher = total;
        if (self.ischeckbtnpromo) {
            self.bookCombo.ischeckbtnpromo = self.ischeckbtnpromo;
            self.bookCombo.discountpromo = self.discountpromo;
            self.Roomif.promocode = self.promocode;
            self.bookCombo.totalprice = self.Pricepointshow;
        }
        else {
            self.bookCombo.ischeckbtnpromo = self.ischeckbtnpromo;
            self.bookCombo.discountpromo = 0;
            self.promocode = "";
            self.Roomif.promocode = self.promocode;
            self.bookCombo.totalprice = total;
        }
        var departPickup = {
            "Name": self.pickup_pointsdepartd,
            "Fee": self.surchargedepd * this.totalAdult,
            "Type": self.surcharge_typedepd,
        };
        var departDropoff = {
            "Name": self.pickup_pointsdepartt,
            "Fee": self.surchargedept * this.totalAdult,
            "Type": self.surcharge_typedept,
        };
        var returnPickup = {
            "Name": self.pickup_pointsreturnd,
            "Fee": self.surchargeretd * this.totalAdult,
            "Type": self.surcharge_typeretd,
        };
        var returnDropoff = {
            "Name": self.pickup_pointsreturnt,
            "Fee": self.surchargerett * this.totalAdult,
            "Type": self.surcharge_typerett,
        };
        var objtest = {};
        if (self.surchargedepd > 0) {
            objtest.departPickup = departPickup;
        }
        if (self.surchargedept > 0) {
            objtest.departDropoff = departDropoff;
        }
        if (self.surchargeretd > 0) {
            objtest.returnPickup = returnPickup;
        }
        if (self.surchargerett > 0) {
            objtest.returnDropoff = returnDropoff;
        }
        self.JsonSurchargeFee.AllExtraPointsFee = objtest;
        self.storage.get('jti').then(jti => {
            if (jti) {
                var priceseatdep = 1000000;
                var priceseatret = 1000000;
                let totalseatsdep = self.totalAdult;
                let totalseatsret = self.totalAdult;
                if (self.seat_group_english_dep == 'DOUBLE') {
                    var numberseat = Math.round(self.totalAdult / 2);
                    var diff_feedep = self.diff_feedep / self.totalAdult;
                    priceseatdep = (diff_feedep + self.pricedepart) * numberseat;
                    totalseatsdep = numberseat;
                }
                else {
                    priceseatdep = (self.pricedepart * self.totalAdult) + self.diff_feedep;
                }
                if (self.seat_group_english_ret == 'DOUBLE') {
                    var numberseat = Math.round(self.totalAdult / 2);
                    var diff_feeret = self.diff_feeret / self.totalAdult;
                    priceseatret = (diff_feeret + self.pricereturn) * numberseat;
                    totalseatsret = numberseat;
                }
                else {
                    priceseatret = (self.pricereturn * self.totalAdult) + self.diff_feeret;
                }
                self.totalPriceDep = priceseatdep + (self.surchargedepd + self.surchargedept) * self.totalAdult;
                self.totalPriceRet = priceseatret + (self.surchargeretd + self.surchargerett) * self.totalAdult;
                var objectCar = {
                    TransferBooking: {
                        fromPlaceCode: self.bookCombo.ComboDetail.comboDetail.departureCode,
                        toPlaceCode: self.bookCombo.ComboDetail.arrivalCode,
                        fromPlaceName: self.bookCombo.ComboDetail.comboDetail.departurePlace,
                        toPlaceName: self.bookCombo.ComboDetail.arrivalName,
                        adult: self.adults,
                        child: self.children,
                        infant: self.totalInfant,
                        departTransfer: {
                            CompanyCode: self.departObject.company.id,
                            CompanyName: self.departObject.company.name,
                            TransferNumber: self.departObject.route.schedules[0].trip_code,
                            VehicleType: self.departObject.route.schedules[0].vehicle_type,
                            RouteNumber: self.departObject.route.id,
                            PickupPlaceCode: self.id_pickup_pointsdepartd,
                            PickupPlaceName: self.pickup_pointsdepartd,
                            DropoffPlaceCode: self.id_pickup_pointsdepartt,
                            DropoffPlaceName: self.pickup_pointsdepartt,
                            DepartDate: self.departObject.route.pickup_date,
                            DepartTime: self.departTimeStrd,
                            ArrivalDate: self.departObject.route.arrival_date,
                            ArrivalTime: self.departTimeStrt,
                            Duration: self.departObject.route.duration,
                            FareOrigins: self.departObject.route.schedules[0].fare.price,
                            FareNet: self.departObject.route.schedules[0].fare.price,
                            TotalPrice: self.totalPriceDep,
                            CancelPolicy: self.transferdetaildepart.data.policyData.join('\r\n')
                        },
                        returnTransfer: {
                            CompanyCode: self.returnObject.company.id,
                            CompanyName: self.returnObject.company.name,
                            TransferNumber: self.returnObject.route.schedules[0].trip_code,
                            VehicleType: self.returnObject.route.schedules[0].vehicle_type,
                            RouteNumber: self.returnObject.route.id,
                            PickupPlaceCode: self.id_pickup_pointsreturnd,
                            PickupPlaceName: self.pickup_pointsreturnd,
                            DropoffPlaceCode: self.id_pickup_pointsreturnt,
                            DropoffPlaceName: self.pickup_pointsreturnt,
                            DepartDate: self.returnObject.route.pickup_date,
                            DepartTime: self.returnTimeStrd,
                            ArrivalDate: self.returnObject.route.arrival_date,
                            ArrivalTime: self.returnTimeStrt,
                            Duration: self.returnObject.route.duration,
                            FareOrigins: self.returnObject.route.schedules[0].fare.price,
                            FareNet: self.returnObject.route.schedules[0].fare.price,
                            TotalPrice: self.totalPriceRet,
                            CancelPolicy: self.transferdetailreturn.data.policyData.join('\r\n')
                        },
                        passengerInfo: {
                            FirstName: "",
                            LastName: "",
                            Email: "",
                            MobileNumber: ""
                        }
                    },
                    HotelBooking: {
                        NoteForSupp: self.elementMealtype.NoteForSupplier,
                        HotelId: self.booking.HotelId.toString(),
                        CheckIn: moment__WEBPACK_IMPORTED_MODULE_11__(self.booking.CheckInDate).format('YYYY-MM-DD'),
                        CheckOut: moment__WEBPACK_IMPORTED_MODULE_11__(self.booking.CheckOutDate).format('YYYY-MM-DD'),
                        TotalRoom: self.roomnumber,
                        TotalPrices: total,
                        RoomStatus: self.elementMealtype.Status,
                        BreakfastInclude: self.bookCombo.MealTypeCode,
                        BreakfastIncludeName: self.bookCombo.MealTypeName,
                        PaymentMethod: "2",
                        CName: self.username,
                        CEmail: self.email,
                        CAddress: "",
                        CPhone: "",
                        CTitle: "Mr",
                        LeadingName: "",
                        LeadingEmail: "",
                        LeadingPhone: "",
                        LeadingNationality: "",
                        IsInvoice: 0,
                        Note: "",
                        BookingStatus: "0",
                        Adult: self.adults,
                        AdultCombo: self.adultCombo,
                        Child: self.children,
                        TravPaxPrices: self.TravPaxPrices,
                        Office: "",
                        FromPlaceCode: self.bookCombo.ComboDetail.departureCode,
                        RoomName: self.elementMealtype.RoomName,
                        RoomPrices: self.elementMealtype.PriceAvgPlusTA,
                        RoomId: self.elementMealtype.RoomId,
                        MealTypeNote: (self.elementMealtype.PromotionInclusions.length > 0 ? self.elementMealtype.PromotionInclusions.join(' \r\n') : "") + (self.elementMealtype.Notes != null && self.elementMealtype.Notes.length > 0 ? self.elementMealtype.Notes.join('\r\n,') : ""),
                        PromotionNote: self.elementMealtype.PromotionNote,
                        PersonIncharge: "",
                        DiscountAmount: "0",
                        SupplierRef: null,
                        ChildAges: self.booking.ChildAge,
                        PenaltyDescription: null,
                        CompName: "",
                        CompAddress: "",
                        CompTaxCode: "",
                        JsonSurchargeFee: JSON.stringify(self.JsonSurchargeFee),
                        Commission: self.Commission,
                        Source: '6',
                        Supplier: (self.elementMealtype.IsHoliday ? "Holiday" : (self.elementMealtype.IsVoucher ? "Voucher" : self.elementMealtype.Supplier)),
                        MemberId: jti,
                        UsePointPrice: pointprice,
                        promotionCode: self.promocode,
                        SupplierName: self.elementMealtype.Supplier,
                        HotelCheckDetailTokenVinHms: self.elementMealtype.HotelCheckDetailTokenVinHms ? self.elementMealtype.HotelCheckDetailTokenVinHms : "",
                        HotelCheckPriceTokenSMD: self.elementMealtype.HotelCheckPriceTokenSMD ? self.elementMealtype.HotelCheckPriceTokenSMD : "",
                        HotelCheckDetailTokenInternal: self.elementMealtype.Supplier == 'SERI' && self.elementMealtype.HotelCheckDetailTokenInternal ? self.elementMealtype.HotelCheckDetailTokenInternal : "",
                    },
                };
                self.bookCombo.totalAdult = self.totalAdult;
                self.bookCombo.pricedep = priceseatdep;
                self.bookCombo.priceret = priceseatret;
                self.bookCombo.totalseatsdep = totalseatsdep;
                self.bookCombo.totalseatsret = totalseatsret;
                self.gf.setParams(objectCar, 'carscombo');
                if (self.elementMealtype.Supplier == 'Internal') {
                    self.checkAllotment();
                }
                else {
                    self.Roomif.payment = "RQ";
                    self.Roomif.ischeckpayment = false;
                }
                self.navCtrl.navigateForward("comboadddetails");
            }
        });
    }
    postcardetaildepartload(value) {
        var self = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/get-transfer-detail',
            qs: { trip_code: this.departObject.route.schedules[0].trip_code },
            headers: {
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
                Host: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile,
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.17.1'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            self.transferdetaildepart = JSON.parse(body);
            self.zone.run(() => {
                if (self.transferdetaildepart.data.pickup_points.length > 0) {
                    self.departTimeStrd = self.transferdetaildepart.data.pickup_points[0].pickup_time;
                    self.pickup_pointsdepartd = self.transferdetaildepart.data.pickup_points[0].name;
                    self.id_pickup_pointsdepartd = self.transferdetaildepart.data.pickup_points[0].id;
                    self.addressdepartd = self.transferdetaildepart.data.pickup_points[0].address;
                    self.pickup_pointsdep = self.transferdetaildepart.data.pickup_points;
                    self.surchargedepd = self.transferdetaildepart.data.pickup_points[0].surcharge;
                    self.surcharge_typedepd = self.transferdetaildepart.data.pickup_points[0].surcharge_type;
                }
                else {
                    self.loadpricedone = true;
                    self.departDateTimeStr = "không có vé";
                    self.PriceAvgPlusTAStr = 0;
                    self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                    return;
                }
                if (self.transferdetaildepart.data.drop_off_points_at_arrive.length > 0) {
                    self.departTimeStrt = self.transferdetaildepart.data.drop_off_points_at_arrive[0].dropoff_time;
                    self.id_pickup_pointsdepartt = self.transferdetaildepart.data.drop_off_points_at_arrive[0].id;
                    self.pickup_pointsdepartt = self.transferdetaildepart.data.drop_off_points_at_arrive[0].name;
                    self.addressdepartt = self.transferdetaildepart.data.drop_off_points_at_arrive[0].address;
                    self.drop_off_points_at_arrivedep = self.transferdetaildepart.data.drop_off_points_at_arrive;
                    self.surchargedept = self.transferdetaildepart.data.drop_off_points_at_arrive[0].surcharge;
                    self.surcharge_typedept = self.transferdetaildepart.data.drop_off_points_at_arrive[0].surcharge_type;
                }
                else {
                    self.loadpricedone = true;
                    self.departDateTimeStr = "không có vé";
                    self.PriceAvgPlusTAStr = 0;
                    self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                    return;
                }
                self.bookCombo.arrplacedeptcd = [];
                self.bookCombo.arrplacedeptct = [];
                self.bookCombo.arrplacedepd = [];
                self.bookCombo.arrplacedept = [];
                if (self.transferdetaildepart.data.transfer_points.length > 0) {
                    self.bookCombo.arrplacedeptcd = self.transferdetaildepart.data.transfer_points;
                }
                if (self.transferdetaildepart.data.transfer_points_at_arrive.length > 0) {
                    self.bookCombo.arrplacedeptct = self.transferdetaildepart.data.transfer_points_at_arrive;
                }
                self.bookCombo.arrplacedepd = self.pickup_pointsdep;
                self.bookCombo.arrplacedept = self.drop_off_points_at_arrivedep;
                var priceseatdep = 1000000;
                var priceseatret = 1000000;
                if (self.seat_group_english_dep == 'DOUBLE') {
                    var numberseat = Math.round(self.totalAdult / 2);
                    var diff_feedep = self.diff_feedep / self.totalAdult;
                    priceseatdep = (diff_feedep + self.pricedepart) * numberseat;
                }
                else {
                    priceseatdep = (self.pricedepart * self.totalAdult) + self.diff_feedep;
                }
                if (self.seat_group_english_ret == 'DOUBLE') {
                    var numberseat = Math.round(self.totalAdult / 2);
                    var diff_feeret = self.diff_feeret / self.totalAdult;
                    priceseatret = (diff_feeret + self.pricereturn) * numberseat;
                }
                else {
                    priceseatret = (self.pricereturn * self.totalAdult) + self.diff_feeret;
                }
                self.PriceAvgPlusTAStr = self.PriceAvgPlusTA + priceseatdep + priceseatret + (self.surchargedepd + self.surchargedept + self.surchargeretd + self.surchargerett) * self.totalAdult;
                self.total = self.PriceAvgPlusTAStr;
                self.PriceAvgPlusTAStr = self.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                if (value == 0) {
                    self.funccheckpoint();
                }
                else {
                    self.edit();
                }
            });
        });
    }
    postcardetaildepart(value) {
        var self = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/get-transfer-detail',
            qs: { trip_code: this.departObject.route.schedules[0].trip_code },
            headers: {
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
                Host: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile,
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.17.1'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            var transferdetaildep = JSON.parse(body);
            self.zone.run(() => {
                if (transferdetaildep.data.total_available_seats >= self.totalAdult) {
                    self.transferdetaildepart = JSON.parse(body);
                    if (self.transferdetaildepart.data.pickup_points.length > 0) {
                        self.departTimeStrd = self.transferdetaildepart.data.pickup_points[0].pickup_time;
                        self.pickup_pointsdepartd = self.transferdetaildepart.data.pickup_points[0].name;
                        self.id_pickup_pointsdepartd = self.transferdetaildepart.data.pickup_points[0].id;
                        self.addressdepartd = self.transferdetaildepart.data.pickup_points[0].address;
                        self.pickup_pointsdep = self.transferdetaildepart.data.pickup_points;
                        self.surchargedepd = self.transferdetaildepart.data.pickup_points[0].surcharge;
                        self.surcharge_typedepd = self.transferdetaildepart.data.pickup_points[0].surcharge_type;
                    }
                    else {
                        self.loadpricedone = true;
                        self.departDateTimeStr = "không có vé";
                        self.PriceAvgPlusTAStr = 0;
                        self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                        return;
                    }
                    if (self.transferdetaildepart.data.drop_off_points_at_arrive.length > 0) {
                        self.departTimeStrt = self.transferdetaildepart.data.drop_off_points_at_arrive[0].dropoff_time;
                        self.id_pickup_pointsdepartt = self.transferdetaildepart.data.drop_off_points_at_arrive[0].id;
                        self.pickup_pointsdepartt = self.transferdetaildepart.data.drop_off_points_at_arrive[0].name;
                        self.addressdepartt = self.transferdetaildepart.data.drop_off_points_at_arrive[0].address;
                        self.drop_off_points_at_arrivedep = self.transferdetaildepart.data.drop_off_points_at_arrive;
                        self.surchargedept = self.transferdetaildepart.data.drop_off_points_at_arrive[0].surcharge;
                        self.surcharge_typedept = self.transferdetaildepart.data.drop_off_points_at_arrive[0].surcharge_type;
                    }
                    else {
                        self.loadpricedone = true;
                        self.departDateTimeStr = "không có vé";
                        self.PriceAvgPlusTAStr = 0;
                        self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                        return;
                    }
                    self.bookCombo.arrplacedeptcd = [];
                    self.bookCombo.arrplacedeptct = [];
                    self.bookCombo.arrplacedepd = [];
                    self.bookCombo.arrplacedept = [];
                    self.bookCombo.arrplacedepd = self.pickup_pointsdep;
                    self.bookCombo.arrplacedept = self.drop_off_points_at_arrivedep;
                    if (self.transferdetaildepart.data.transfer_points.length > 0) {
                        self.bookCombo.arrplacedeptcd = self.transferdetaildepart.data.transfer_points;
                    }
                    if (self.transferdetaildepart.data.transfer_points_at_arrive.length > 0) {
                        self.bookCombo.arrplacedeptct = self.transferdetaildepart.data.transfer_points_at_arrive;
                    }
                    self.postcardetailreturn(value);
                }
                else {
                    self.indexdep++;
                    if (self.indexdep < self.departTime.length) {
                        self.loadTransferInfo(self.departTime, self.returnTime, self.indexdep, self.indexret);
                    }
                    else {
                        self.loadpricedone = true;
                        self.departDateTimeStr = "không có vé";
                        self.PriceAvgPlusTAStr = 0;
                        self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                    }
                }
            });
        });
    }
    MathGaladinnerAdExtrabed() {
        var se = this;
        if (se.elementMealtype == undefined)
            return false;
        se.totalExtraBedAndGalaDinerListTA = 0;
        se.JsonSurchargeFee.SurchargeFee = [];
        if (se.elementMealtype.ExtraBedAndGalaDinerList.length > 0) {
            for (var i = 0; i < se.elementMealtype.ExtraBedAndGalaDinerList.length; i++) {
                if (se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeType == "Per Night" || se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeType == "Per Bed" || se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeType == "Per Meal WithoutNo") {
                    se.totalExtraBedAndGalaDinerListTA += se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA * se.TotalNight;
                    var priceItem2 = { Code: se.elementMealtype.ExtraBedAndGalaDinerList[i].Code, type: 'room', PassengerType: (se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeOn == 'Per Adult' ? 0 : 1), PriceType: 0, Text: se.elementMealtype.ExtraBedAndGalaDinerList[i].NameDisplay, Quantity: se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value, Price: (se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA * se.TotalNight), PriceFormat: (se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA * se.TotalNight).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
                    se.JsonSurchargeFee.SurchargeFee.push(priceItem2);
                }
                else {
                    se.totalExtraBedAndGalaDinerListTA += se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA;
                    var priceItem2 = { Code: se.elementMealtype.ExtraBedAndGalaDinerList[i].Code, type: 'room', PassengerType: (se.elementMealtype.ExtraBedAndGalaDinerList[i].ChargeOn == 'Per Adult' ? 0 : 1), PriceType: 0, Text: se.elementMealtype.ExtraBedAndGalaDinerList[i].NameDisplay, Quantity: se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value, Price: (se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA), PriceFormat: (se.elementMealtype.ExtraBedAndGalaDinerList[i].Quantity.value * se.elementMealtype.ExtraBedAndGalaDinerList[i].PriceOTA).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
                    se.JsonSurchargeFee.SurchargeFee.push(priceItem2);
                }
            }
        }
        se.AdultOtherFee = 0;
        se.elementMealtype.ExtraBedAndGalaDinerList.forEach(e => {
            if (e.ChargeOn == 'Per Adult' && e.Code != 'EXBA') {
                se.AdultOtherFee += e.PriceOTA;
            }
        });
        se.ChildOtherFee = 0;
        se.elementMealtype.ExtraBedAndGalaDinerList.forEach(e => {
            if (e.ChargeOn == 'Per Child' && e.Code != 'CWE' && e.Code != 'EXBC') {
                se.ChildOtherFee += e.PriceOTA;
            }
        });
        se.ChildOtherFeeTotal = 0;
        se.elementMealtype.ExtraBedAndGalaDinerList.forEach(e => {
            if (e.ChargeOn == 'Per Child' && e.Code != 'CWE' && e.Code != 'EXBC') {
                se.ChildOtherFeeTotal += e.PriceOTA * e.Quantity.value;
            }
        });
        se.AdultOtherFee = se.AdultOtherFee * (se.jsonroom[0].Rooms[0].IncludeAdults * se.roomnumber) / se.AdultCombo;
        se.PriceDiffUnit = se.AdultOtherFee + ((se.elementMealtype.PriceAvgDefaultTA * se.roomnumber) * se.TotalNight / se.AdultCombo) - se.roomPriceSale;
        se.JsonSurchargeFee.AdultUnit = se.PriceDiffUnit;
        se.JsonSurchargeFee.RoomDifferenceFee = se.PriceDiffUnit * se.AdultCombo + (se.totalAdult - se.AdultCombo) * se.AdultOtherFee + se.ChildOtherFeeTotal;
    }
    postcardetailreturnload(value) {
        var self = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/get-transfer-detail',
            qs: { trip_code: this.returnObject.route.schedules[0].trip_code },
            headers: {
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
                Host: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile,
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.17.1'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            self.transferdetailreturn = JSON.parse(body);
            self.zone.run(() => {
                self.bookCombo.arrplaceretd = [];
                self.bookCombo.arrplacerett = [];
                if (self.transferdetailreturn.data.pickup_points.length > 0) {
                    self.returnTimeStrd = self.transferdetailreturn.data.pickup_points[0].pickup_time;
                    self.id_pickup_pointsreturnd = self.transferdetailreturn.data.pickup_points[0].id;
                    self.pickup_pointsreturnd = self.transferdetailreturn.data.pickup_points[0].name;
                    self.addressreturnd = self.transferdetailreturn.data.pickup_points[0].address;
                    self.pickup_pointsret = self.transferdetailreturn.data.pickup_points;
                    self.bookCombo.arrplaceretd = self.transferdetailreturn.data.pickup_points;
                    self.surchargeretd = self.transferdetailreturn.data.pickup_points[0].surcharge;
                    self.surcharge_typeretd = self.transferdetailreturn.data.pickup_points[0].surcharge_type;
                }
                else {
                    self.loadpricedone = true;
                    self.departDateTimeStr = "không có vé";
                    self.PriceAvgPlusTAStr = 0;
                    self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                    return;
                }
                if (self.transferdetailreturn.data.drop_off_points_at_arrive.length > 0) {
                    self.returnTimeStrt = self.transferdetailreturn.data.drop_off_points_at_arrive[0].dropoff_time;
                    self.id_pickup_pointsreturnt = self.transferdetailreturn.data.drop_off_points_at_arrive[0].id;
                    self.pickup_pointsreturnt = self.transferdetailreturn.data.drop_off_points_at_arrive[0].name;
                    self.addressreturnt = self.transferdetailreturn.data.drop_off_points_at_arrive[0].address;
                    self.drop_off_points_at_arriveret = self.transferdetailreturn.data.drop_off_points_at_arrive;
                    self.bookCombo.arrplacerett = self.transferdetailreturn.data.drop_off_points_at_arrive;
                    self.surchargerett = self.transferdetailreturn.data.drop_off_points_at_arrive[0].surcharge;
                    self.surcharge_typerett = self.transferdetailreturn.data.drop_off_points_at_arrive[0].surcharge_type;
                }
                else {
                    self.loadpricedone = true;
                    self.departDateTimeStr = "không có vé";
                    self.PriceAvgPlusTAStr = 0;
                    self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                    return;
                }
                self.bookCombo.arrplacedeptcd = [];
                self.bookCombo.arrplacedeptct = [];
                if (self.transferdetaildepart.data.transfer_points.length > 0) {
                    self.bookCombo.arrplacedeptcd = self.transferdetaildepart.data.transfer_points;
                }
                if (self.transferdetaildepart.data.transfer_points_at_arrive.length > 0) {
                    self.bookCombo.arrplacedeptct = self.transferdetaildepart.data.transfer_points_at_arrive;
                }
                var priceseatdep = 1000000;
                var priceseatret = 1000000;
                if (self.seat_group_english_dep == 'DOUBLE') {
                    var numberseat = Math.round(self.totalAdult / 2);
                    var diff_feedep = self.diff_feedep / self.totalAdult;
                    priceseatdep = (diff_feedep + self.pricedepart) * numberseat;
                }
                else {
                    priceseatdep = (self.pricedepart * self.totalAdult) + self.diff_feedep;
                }
                if (self.seat_group_english_ret == 'DOUBLE') {
                    var numberseat = Math.round(self.totalAdult / 2);
                    var diff_feeret = self.diff_feeret / self.totalAdult;
                    priceseatret = (diff_feeret + self.pricereturn) * numberseat;
                }
                else {
                    priceseatret = (self.pricereturn * self.totalAdult) + self.diff_feeret;
                }
                self.PriceAvgPlusTAStr = self.PriceAvgPlusTA + priceseatdep + priceseatret + (self.surchargedepd + self.surchargedept + self.surchargeretd + self.surchargerett) * self.totalAdult;
                self.total = self.PriceAvgPlusTAStr;
                self.PriceAvgPlusTAStr = self.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                self.loadcarspricedone = true;
                if (self.loader) {
                    self.loader.dismiss();
                }
                if (value == 0) {
                    self.funccheckpoint();
                }
                else {
                    self.edit();
                }
            });
        });
    }
    postcardetailreturn(value) {
        var self = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/get-transfer-detail',
            qs: { trip_code: this.returnObject.route.schedules[0].trip_code },
            headers: {
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
                Host: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile,
                'Cache-Control': 'no-cache',
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            var transferdetailret = JSON.parse(body);
            if (transferdetailret.data.total_available_seats >= self.totalAdult) {
                self.zone.run(() => {
                    self.transferdetailreturn = JSON.parse(body);
                    self.bookCombo.arrplaceretd = [];
                    self.bookCombo.arrplacerett = [];
                    if (self.transferdetailreturn.data.pickup_points.length > 0) {
                        self.returnTimeStrd = self.transferdetailreturn.data.pickup_points[0].pickup_time;
                        self.id_pickup_pointsreturnd = self.transferdetailreturn.data.pickup_points[0].id;
                        self.pickup_pointsreturnd = self.transferdetailreturn.data.pickup_points[0].name;
                        self.addressreturnd = self.transferdetailreturn.data.pickup_points[0].address;
                        self.pickup_pointsret = self.transferdetailreturn.data.pickup_points;
                        self.surchargeretd = self.transferdetailreturn.data.pickup_points[0].surcharge;
                        self.bookCombo.arrplaceretd = self.transferdetailreturn.data.pickup_points;
                    }
                    else {
                        self.loadpricedone = true;
                        self.departDateTimeStr = "không có vé";
                        self.PriceAvgPlusTAStr = 0;
                        self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                        return;
                    }
                    if (self.transferdetailreturn.data.drop_off_points_at_arrive.length) {
                        self.returnTimeStrt = self.transferdetailreturn.data.drop_off_points_at_arrive[0].dropoff_time;
                        self.id_pickup_pointsreturnt = self.transferdetailreturn.data.drop_off_points_at_arrive[0].id;
                        self.pickup_pointsreturnt = self.transferdetailreturn.data.drop_off_points_at_arrive[0].name;
                        self.addressreturnt = self.transferdetailreturn.data.drop_off_points_at_arrive[0].address;
                        self.drop_off_points_at_arriveret = self.transferdetailreturn.data.drop_off_points_at_arrive;
                        self.bookCombo.arrplacerett = self.transferdetailreturn.data.drop_off_points_at_arrive;
                        self.surchargerett = self.transferdetailreturn.data.drop_off_points_at_arrive[0].surcharge;
                        self.surcharge_typerett = self.transferdetailreturn.data.drop_off_points_at_arrive[0].surcharge_type;
                    }
                    else {
                        self.loadpricedone = true;
                        self.departDateTimeStr = "không có vé";
                        self.PriceAvgPlusTAStr = 0;
                        self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                        return;
                    }
                    self.bookCombo.arrplacerettcd = [];
                    self.bookCombo.arrplacerettct = [];
                    if (self.transferdetaildepart.data.transfer_points.length > 0) {
                        self.bookCombo.arrplacerettcd = self.transferdetailreturn.data.transfer_points;
                    }
                    if (self.transferdetaildepart.data.transfer_points_at_arrive.length > 0) {
                        self.bookCombo.arrplacerettct = self.transferdetailreturn.data.transfer_points_at_arrive;
                    }
                    self.getavailableseats(value);
                });
            }
            else {
                self.indexret++;
                if (self.indexret < self.returnTime.length) {
                    self.loadTransferInfo(self.departTime, self.returnTime, self.indexdep, self.indexret);
                }
                else {
                    self.loadpricedone = true;
                    self.departDateTimeStr = "không có vé";
                    self.PriceAvgPlusTAStr = 0;
                    self.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                }
            }
        });
    }
    getavailableseats(value) {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/get-available-seats',
            headers: {
                apikey: 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
                apisecret: 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
            },
            body: {
                departParams: {
                    trip_code: this.departObject.route.schedules[0].trip_code,
                    total_seats: this.totalAdult,
                    total_price: this.departObject.route.schedules[0].fare.price * se.totalAdult,
                },
                returnParams: {
                    trip_code: this.returnObject.route.schedules[0].trip_code,
                    total_seats: this.totalAdult,
                    total_price: this.returnObject.route.schedules[0].fare.price * se.totalAdult,
                },
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            se.zone.run(() => {
                if (body.status == 1 || body.status == 3) {
                    se.diff_feedep = body.data[0].diff_fee;
                    se.diff_feeret = body.data[1].diff_fee;
                    se.seat_group_english_dep = body.data[0].list_seats[0].seat_group_english;
                    se.seat_group_english_ret = body.data[1].list_seats[0].seat_group_english;
                    var priceseatdep = 1000000;
                    var priceseatret = 1000000;
                    if (se.seat_group_english_dep == 'DOUBLE') {
                        var numberseat = Math.round(se.totalAdult / 2);
                        var diff_feedep = se.diff_feedep / se.totalAdult;
                        priceseatdep = (diff_feedep + se.pricedepart) * numberseat;
                    }
                    else {
                        priceseatdep = (se.pricedepart * se.totalAdult) + se.diff_feedep;
                    }
                    if (se.seat_group_english_ret == 'DOUBLE') {
                        var numberseat = Math.round(se.totalAdult / 2);
                        var diff_feeret = se.diff_feeret / se.totalAdult;
                        priceseatret = (diff_feeret + se.pricereturn) * numberseat;
                    }
                    else {
                        priceseatret = (se.pricereturn * se.totalAdult) + se.diff_feeret;
                    }
                    se.PriceAvgPlusTAStr = (se.PriceAvgPlusTA + priceseatdep + priceseatret) + (se.surchargedepd + se.surchargedept + se.surchargeretd + se.surchargerett) * se.totalAdult;
                    se.total = se.PriceAvgPlusTAStr;
                    se.PriceAvgPlusTAStr = se.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    se.loadcarspricedone = true;
                    se.checkVoucherClaimed();
                    if (value == 0) {
                        se.funccheckpoint();
                    }
                    else {
                        se.edit();
                    }
                }
                else {
                    se.indexdep++;
                    se.indexret++;
                    if (se.indexdep < se.departTime.length && se.indexret < se.returnTime.length) {
                        se.loadTransferInfo(se.departTime, se.returnTime, se.indexdep, se.indexret);
                    }
                    else {
                        se.loadpricedone = true;
                        se.departDateTimeStr = "không có vé";
                        se.msgwrn = "Hiện tại không có vé xe thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                    }
                }
            });
        });
    }
    showPenalty() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: "Giá rẻ (không hoàn tiền)",
                message: "Đây là giá đặc biệt thấp hơn giá thông thường, không thể hủy hoặc thay đổi. Trong trường hợp không thể sử dụng combo sẽ không hoàn lại tiền. <p style='text-align:center;font-style:italic;margin-bottom:0'>Nếu bạn đã có kế hoạch chắc chắn thì hãy chớp lấy cơ hội này.</p>",
                cssClass: "cls-alert-carcombo",
                buttons: [{
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showListCar(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            this.gf.setParams({ listdepart: this.listDepartTransfers, listreturn: this.listReturnTransfers, totalAdult: this.totalAdult, title: index == 0 ? this.daydeparttitle : this.dayreturntitle, isdepart: index == 0 ? true : false }, 'listcar');
            const modal = yield this.modalCtrl.create({
                component: _cardeparture_cardeparture_page__WEBPACK_IMPORTED_MODULE_4__["CardeparturePage"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    se.zone.run(() => {
                        if (data.data.isdepart) {
                            this.bookCombo.idpointdepd = '';
                            this.bookCombo.idpointdept = '';
                            this.diff_feedep = data.data.diff_fee;
                            se.current = data.data.cars;
                            se.seat_group_english_dep = data.data.seat_group_english;
                            se.loadData(se.current, data.data.isdepart);
                        }
                        else {
                            this.bookCombo.idpointretd = '';
                            this.bookCombo.idpointrett = '';
                            this.diff_feeret = data.data.diff_fee;
                            se.current = data.data.cars;
                            se.seat_group_english_ret = data.data.seat_group_english;
                            se.loadData(se.current, data.data.isdepart);
                        }
                        if (data.data.loader) {
                            data.data.loader.dismiss();
                        }
                    });
                }
            });
        });
    }
    loadData(Transfer, ischeck) {
        var se = this;
        this.loadpricedone = false;
        if (ischeck) {
            if (Transfer && Transfer.length > 0) {
                this.departObject = Transfer[0];
                let de_date = this.departObject.route.departure_date;
                se.departDateTimeStr = 'Đi ' + se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(de_date).format('DD-MM-YYYY');
                se.departTimeStrd = this.departObject.route.pickup_time;
                se.departTimeStrt = this.departObject.route.arrival_time;
                se.departVehicleStr = this.departObject.company.name;
                this.departTicketSaleshow = this.departObject.route.schedules[0].fare.price - this.departTicketSale;
                se.daydeparttitle = se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(de_date).format('DD-MM-YYYY');
                this.pricedepart = this.departObject.route.schedules[0].fare.price;
                if (this.departTicketSaleshow <= 0) {
                    this.checkdiscountdepart = true;
                    this.departTicketSaleshow = Math.abs(this.departTicketSaleshow);
                }
                else {
                    this.checkdiscountdepart = false;
                }
                this.departTicketSaleshow = this.departTicketSaleshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                this.PriceAvgPlusTAStr = 0;
                this.postcardetaildepartload(1);
            }
        }
        else {
            if (Transfer && Transfer.length > 0) {
                this.returnObject = Transfer[0];
                let re_date = this.returnObject.route.departure_date;
                se.returnDateTimeStr = 'Về ' + se.getDayOfWeek(re_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_11__(re_date).format('DD-MM-YYYY');
                se.returnTimeStrd = this.returnObject.route.pickup_time;
                se.returnTimeStrt = this.returnObject.route.arrival_time;
                se.returnVehicleStr = this.returnObject.company.name;
                this.returnTicketSaleshow = this.returnObject.route.schedules[0].fare.price - this.returnTicketSale;
                this.pricereturn = this.returnObject.route.schedules[0].fare.price;
                if (this.returnTicketSaleshow <= 0) {
                    this.checkdiscountreturn = true;
                    this.returnTicketSaleshow = Math.abs(this.returnTicketSaleshow);
                }
                else {
                    this.checkdiscountreturn = false;
                }
                this.returnTicketSaleshow = this.returnTicketSaleshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                this.PriceAvgPlusTAStr = 0;
                this.postcardetailreturnload(1);
            }
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                message: "",
            });
            this.loader.present();
        });
    }
    textchange() {
        this.ischeckbtnpromo = false;
        this.discountpromo = 0;
        this.ischeckerror = 0;
        this.msg = "";
        if (this.ischeck) {
            if (this.ischeckpoint) {
                this.Pricepointshow = 0;
            }
            else {
                this.price = this.point.toLocaleString();
                var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                this.Pricepoint = tempprice - this.point;
                this.Pricepointshow = this.Pricepoint.toLocaleString();
            }
        }
    }
    click() {
        this.ischecktext = 3;
    }
    promofunc() {
        var se = this;
        if (se.promocode) {
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/data/validpromocode',
                headers: {
                    'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: { code: se.promocode, totalAmount: se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, ''), comboDetailId: this.bookCombo.ComboId },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                se.zone.run(() => {
                    var json = body;
                    if (json.error == 0) {
                        var total = se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '');
                        if (se.ischeck) {
                            total = se.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
                        }
                        se.discountpromo = json.data.orginDiscount ? json.data.orginDiscount : json.data.discount;
                        se.Pricepointshow = total - se.discountpromo;
                        if (se.Pricepointshow > 0) {
                            se.Pricepointshow = se.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                            se.ischeckbtnpromo = true;
                            se.ischeckpromo = true;
                        }
                        else {
                            se.ischeckbtnpromo = true;
                            se.Pricepointshow = 0;
                        }
                        se.msg = json.msg;
                        se.ischecktext = 0;
                        se.ischeckerror = 0;
                    }
                    else if (json.error == 1) {
                        se.ischeckbtnpromo = false;
                        se.msg = json.msg;
                        se.discountpromo = 0;
                        se.ischecktext = 1;
                        se.ischeckerror = 1;
                    }
                    else if (json.error == 2) {
                        se.ischeckbtnpromo = false;
                        se.msg = json.msg;
                        se.discountpromo = 0;
                        se.ischecktext = 2;
                        se.ischeckerror = 1;
                    }
                    else if (json.error == 3) {
                        se.ischeckbtnpromo = false;
                        se.msg = json.msg;
                        se.discountpromo = 0;
                        se.ischecktext = 2;
                        se.ischeckerror = 1;
                    }
                    else {
                        se.ischeckbtnpromo = false;
                        se.msg = json.msg;
                        se.discountpromo = 0;
                        se.ischecktext = 2;
                        se.ischeckerror = 1;
                    }
                });
            });
        }
    }
    edit() {
        this.zone.run(() => {
            if (this.ischeck) {
                if (this.ischeckpoint) {
                    this.Pricepointshow = 0;
                }
                else {
                    if (this.ischeckpromo) {
                        this.price = this.point.toLocaleString();
                        var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                        this.Pricepoint = tempprice - this.point - this.discountpromo;
                        if (this.Pricepoint <= 0) {
                            this.Pricepoint = 0;
                        }
                        this.Pricepointshow = this.Pricepoint.toLocaleString();
                        this.bookCombo.totalprice = this.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    }
                    else {
                        this.price = this.point.toLocaleString();
                        var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                        this.Pricepoint = tempprice - this.point;
                        if (this.Pricepoint <= 0) {
                            this.Pricepoint = 0;
                        }
                        this.Pricepointshow = this.Pricepoint.toLocaleString();
                        this.bookCombo.totalprice = this.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    }
                }
            }
            else {
                if (this.ischeckpromo) {
                    this.PriceAvgPlusTAStr = this.total.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                    this.Pricepointshow = tempprice - this.discountpromo;
                    if (this.Pricepointshow <= 0) {
                        this.Pricepointshow = 0;
                    }
                    this.Pricepointshow = this.Pricepointshow.toLocaleString();
                }
                else {
                    this.PriceAvgPlusTAStr = this.total.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    this.bookCombo.totalprice = this.PriceAvgPlusTAStr;
                }
            }
            if (this.loader) {
                this.loader.dismiss();
            }
        });
        this.loadcarspricedone = true;
        this.checkVoucherClaimed();
    }
    ionViewWillEnter() {
        if (this.valueGlobal.backValue != 'combocarpaymentbreakdown') {
            this.point = 0;
            this.ischeck = false;
            this.Roomif.point = null;
            this.price = 0;
            this.textpromotion = "iVIVU Voucher | Mobile Gift";
            this.promocode = "";
            this.ischeckbtnpromo = false;
            this.ischeckpromo = false;
            this.msg = "";
            this._voucherService.selectVoucher = null;
            this.itemVoucherCarCombo = null;
            this.discountpromo = 0;
            this.bookCombo.promoCode = "";
            this.bookCombo.discountpromo = 0;
            this.GetUserInfo();
        }
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                if (data.point) {
                                    if (data.point > 0) {
                                        se.Roomif.point = data.point;
                                        se.point = data.point * 1000;
                                        se.price = se.point.toLocaleString();
                                    }
                                }
                                se.storage.remove('point');
                                se.storage.set('point', data.point);
                            });
                        }
                    }
                });
            }
        });
    }
    sendRequestCombo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.bookCombo.Address = this.Address;
            this.bookCombo.isFlightCombo = false;
            this.bookCombo.isFlashSale = true;
            this.bookCombo.isNormalCombo = false;
            const modal = yield this.modalCtrl.create({
                component: _requestcombo1_requestcombo1__WEBPACK_IMPORTED_MODULE_3__["RequestCombo1Page"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.valueGlobal.backValue = 'carcombo';
                this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
            });
        });
    }
    changeplace(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var self = this;
            this.bookCombo.isDepart = value;
            const modal = yield this.modalCtrl.create({
                component: _combocarchangeplace_combocarchangeplace_page__WEBPACK_IMPORTED_MODULE_1__["CombocarchangeplacePage"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                self.zone.run(() => {
                    if (data.data) {
                        if (data.data.isdepart == '0') {
                            if (data.data.placed.length > 0) {
                                self.departTimeStrd = data.data.placed[0].pickup_time;
                                self.pickup_pointsdepartd = data.data.placed[0].name;
                                self.id_pickup_pointsdepartd = data.data.placed[0].id;
                                self.addressdepartd = data.data.placed[0].address;
                                self.bookCombo.idpointdepd = self.id_pickup_pointsdepartd;
                                self.surchargedepd = data.data.placed[0].surcharge;
                                self.surcharge_typedepd = data.data.placed[0].surcharge_type;
                            }
                            if (data.data.placet.length > 0) {
                                self.id_pickup_pointsdepartt = data.data.placet[0].id;
                                self.pickup_pointsdepartt = data.data.placet[0].name;
                                self.addressdepartt = data.data.placet[0].address;
                                self.departTimeStrt = data.data.placet[0].dropoff_time;
                                self.bookCombo.idpointdept = self.id_pickup_pointsdepartt;
                                self.surchargedept = data.data.placet[0].surcharge;
                                self.surcharge_typedept = data.data.placet[0].surcharge_type;
                            }
                        }
                        else {
                            if (data.data.placed.length > 0) {
                                self.returnTimeStrd = data.data.placed[0].pickup_time;
                                self.pickup_pointsreturnd = data.data.placed[0].name;
                                self.id_pickup_pointsreturnd = data.data.placed[0].id;
                                self.addressreturnd = data.data.placed[0].address;
                                self.bookCombo.idpointretd = self.id_pickup_pointsreturnd;
                                self.surchargeretd = data.data.placed[0].surcharge;
                                self.surcharge_typeretd = data.data.placed[0].surcharge_type;
                            }
                            if (data.data.placet.length > 0) {
                                self.id_pickup_pointsreturnt = data.data.placet[0].id;
                                self.pickup_pointsreturnt = data.data.placet[0].name;
                                self.addressreturnt = data.data.placet[0].address;
                                self.returnTimeStrt = data.data.placet[0].dropoff_time;
                                self.bookCombo.idpointrett = self.id_pickup_pointsreturnt;
                                self.surchargerett = data.data.placet[0].surcharge;
                                self.surcharge_typerett = data.data.placet[0].surcharge_type;
                            }
                        }
                        self.PriceAvgPlusTAStr = 0;
                        self.PriceAvgPlusTAStr = (self.PriceAvgPlusTA + self.pricedepart * self.totalAdult + self.pricereturn * self.totalAdult) + self.diff_feedep + self.diff_feeret + (self.surchargedepd + self.surchargedept + self.surchargeretd + self.surchargerett) * self.totalAdult;
                        self.total = self.PriceAvgPlusTAStr;
                        self.PriceAvgPlusTAStr = self.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    }
                });
            });
        });
    }
    showmsg(msg) {
        alert(msg);
    }
    showdiscount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.ischeck) {
                jquery__WEBPACK_IMPORTED_MODULE_14__('.div-point').removeClass('div-disabled');
                this.valueGlobal.PriceAvgPlusTAStr = this.PriceAvgPlusTAStr;
                this.textpromotion = "iVIVU Voucher | Mobile Gift";
                this.promocode = "";
                this.discountpromo = 0;
                this.ischeckbtnpromo = false;
                this.ischeckpromo = false;
                this.itemVoucherCarCombo = null;
                this.bookCombo.promoCode = "";
                this.bookCombo.discountpromo = 0;
                this.msg = "";
                this._voucherService.openFrom = 'combocarnew';
                const modal = yield this.modalCtrl.create({
                    component: _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_13__["AdddiscountPage"],
                });
                modal.present();
                if (this._voucherService.selectVoucher && this._voucherService.selectVoucher.claimed) {
                    this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                    this._voucherService.selectVoucher = null;
                }
                this.edit();
                modal.onDidDismiss().then((data) => {
                    if (data.data) {
                        this.zone.run(() => {
                            if (data.data.promocode) {
                                jquery__WEBPACK_IMPORTED_MODULE_14__('.div-point').addClass('div-disabled');
                                this.promocode = data.data.promocode;
                                this.textpromotion = data.data.promocode;
                                this.promofunc();
                            }
                        });
                    }
                });
            }
        });
    }
    showComboDetail() {
        var se = this;
        var obj = { objectDetail: se };
    }
    closecalendar() {
        this.modalCtrl.dismiss();
    }
    presentToastwarming(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top',
            });
            toast.present();
        });
    }
    changeDateInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (!this.PriceAvgPlusTAStr && !this.loadpricedone) {
                se.presentToastwarming('Đang tìm vé xe tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
                return;
            }
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            let arr = se.cinshow.split('-');
            let arr1 = se.coutshow.split('-');
            let newdatecin = new Date(arr[2], arr[1] - 1, arr[0]);
            let newdatecout = new Date(arr1[2], arr1[1] - 1, arr1[0]);
            let fromdate = new Date(moment__WEBPACK_IMPORTED_MODULE_11__(newdatecin).format('YYYY-MM-DD'));
            let todate = new Date(moment__WEBPACK_IMPORTED_MODULE_11__(newdatecout).format('YYYY-MM-DD'));
            if (this.valueGlobal.notSuggestDailyCB) {
                for (let j = 0; j < this.valueGlobal.notSuggestDailyCB.length; j++) {
                    this._daysConfig.push({
                        date: this.valueGlobal.notSuggestDailyCB[j],
                        cssClass: 'strikethrough'
                    });
                }
            }
            if (this.arrBOD && this.arrBOD.length > 0) {
                for (let j = 0; j < this.arrBOD.length; j++) {
                    this._daysConfig.push({
                        date: this.arrBOD[j],
                        cssClass: 'strikethroughCB'
                    });
                }
            }
            if (se.valueGlobal.listlunar) {
                for (let j = 0; j < se.valueGlobal.listlunar.length; j++) {
                    se._daysConfig.push({
                        date: se.valueGlobal.listlunar[j].date,
                        subTitle: se.valueGlobal.listlunar[j].name,
                        cssClass: 'lunarcalendar'
                    });
                }
            }
            let Year = new Date().getFullYear();
            let Month = new Date().getMonth();
            let Day = new Date().getDate();
            const options = {
                pickMode: 'range',
                title: 'Chọn ngày',
                monthFormat: 'MM / YYYY',
                weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                weekStart: 1,
                closeLabel: '',
                doneLabel: '',
                step: 0,
                defaultScrollTo: fromdate,
                defaultDateRange: { from: fromdate, to: todate },
                daysConfig: se._daysConfig,
                to: new Date(Year + 1, Month, Day),
            };
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModal"],
                animated: true,
                cssClass: 'hotel-calendar-custom',
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                this.allowclickcalendar = true;
                jquery__WEBPACK_IMPORTED_MODULE_14__('.days-btn').click(e => this.clickedElement(e));
                jquery__WEBPACK_IMPORTED_MODULE_14__('.hotel-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
                jquery__WEBPACK_IMPORTED_MODULE_14__('.hotel-calendar-custom .header-img-close').click((e => this.closecalendar()));
                let divmonth = jquery__WEBPACK_IMPORTED_MODULE_14__('.month-box');
                if (divmonth && divmonth.length > 0) {
                    for (let index = 0; index < divmonth.length; index++) {
                        const em = divmonth[index];
                        jquery__WEBPACK_IMPORTED_MODULE_14__('#' + em.id).addClass('cls-animation-calendar');
                    }
                }
            });
            const event = yield this.myCalendar.onDidDismiss();
            if (event) {
                se.allowclickcalendar = true;
            }
        });
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if (jquery__WEBPACK_IMPORTED_MODULE_14__(obj.parentNode).hasClass('endSelection') || jquery__WEBPACK_IMPORTED_MODULE_14__(obj.parentNode).hasClass('startSelection')) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    if (jquery__WEBPACK_IMPORTED_MODULE_14__(obj.parentNode).hasClass('endSelection')) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_14__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_14__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_14__('.on-selected')[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_14__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_14__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_14__(obj)[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_14__('.on-selected').closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_14__(obj).closest('.month-box').children()[0].textContent;
                    }
                    else {
                        if (jquery__WEBPACK_IMPORTED_MODULE_14__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_14__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_14__(obj)[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_14__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_14__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_14__('.endSelection').children('.days-btn')[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_14__(obj).closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_14__('.endSelection').closest('.month-box').children()[0].textContent;
                    }
                    if (objTextMonthEndDate && objTextMonthEndDate.length > 0 && objTextMonthStartDate && objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.split('/')[0];
                        yearstartdate = objTextMonthStartDate.split('/')[1];
                        monthenddate = objTextMonthEndDate.split('/')[0];
                        yearenddate = objTextMonthEndDate.split('/')[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        if (fromdate && todate && moment__WEBPACK_IMPORTED_MODULE_11__(todate).diff(fromdate, 'days') > 0) {
                            if (moment__WEBPACK_IMPORTED_MODULE_11__(todate).diff(fromdate, "days") > 30) {
                                this.presentToastwarming('Ngày nhận và trả phòng phải trong vòng 30 ngày');
                                return;
                            }
                            var se = this;
                            se.booking.CheckInDate = moment__WEBPACK_IMPORTED_MODULE_11__(fromdate).format('YYYY-MM-DD');
                            se.booking.CheckOutDate = moment__WEBPACK_IMPORTED_MODULE_11__(todate).format('YYYY-MM-DD');
                            se.cinshow = moment__WEBPACK_IMPORTED_MODULE_11__(fromdate).format('DD-MM-YYYY');
                            se.coutshow = moment__WEBPACK_IMPORTED_MODULE_11__(todate).format('DD-MM-YYYY');
                            se.cin = moment__WEBPACK_IMPORTED_MODULE_11__(fromdate).format('YYYY-MM-DD');
                            se.cout = moment__WEBPACK_IMPORTED_MODULE_11__(todate).format('YYYY-MM-DD');
                            se.searchhotel.CheckInDate = se.booking.CheckInDate;
                            se.searchhotel.CheckOutDate = se.booking.CheckOutDate;
                            se.bookCombo.FormParam.CheckInDate = se.booking.CheckInDate;
                            se.bookCombo.FormParam.CheckOutDate = se.booking.CheckOutDate;
                            se.duration = moment__WEBPACK_IMPORTED_MODULE_11__(todate).diff(moment__WEBPACK_IMPORTED_MODULE_11__(fromdate), 'days');
                            se.TotalNight = se.duration;
                            se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
                            se.storage.set('hasChangeDate', true);
                            se.checkComboAfterChangedate();
                            setTimeout(() => {
                                se.modalCtrl.dismiss();
                            }, 100);
                            se.searchhotel.changeInfoHotelList.emit(1);
                        }
                    }
                }
            }
        });
    }
    checkComboDuration(combodetail) {
        var se = this;
        return new Promise((resolve, reject) => {
            if (combodetail && combodetail.endDate) {
                var arr = combodetail.endDate.split('-');
                var newdate = new Date(arr[2], arr[1] - 1, arr[0]);
                var d = moment__WEBPACK_IMPORTED_MODULE_11__(newdate).format('YYYY-MM-DD');
                resolve(moment__WEBPACK_IMPORTED_MODULE_11__(se.searchhotel.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_11__(d), 'days') > 0 ? false : true);
            }
            else {
                resolve(true);
            }
        });
    }
    checkComboAfterChangedate() {
        var se = this;
        se.PriceAvgPlusTAStr = 0;
        se.loadpricedone = false;
        se.checkComboDuration(se.bookCombo.objComboDetail).then((valid) => {
            if (valid) {
                se.checkBOD(se.bookCombo.objComboDetail.comboDetail.roomId).then((checkbod) => {
                    if (checkbod) {
                        se.getHotelContractPrice(se.bookCombo.FormParam);
                    }
                    else {
                        se.msgwrn = "Hiện tại không có phòng thoả điều kiện của quy khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                        se.loadpricedone = true;
                    }
                });
            }
            else {
                se.msgwrn = "Hiện tại không có phòng thoả điều kiện của quy khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                se.loadpricedone = true;
            }
        });
    }
    checkBOD(roomid) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlGate + '/get-blackout-date',
                qs: { hotelId: se.booking.HotelId ? se.booking.HotelId : se.searchhotel.hotelID, roomId: roomid },
                headers: {
                    'postman-token': '86c67bdc-5fcd-0240-5549-f3ea2b31faf8',
                    'cache-control': 'no-cache'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (error) {
                    resolve(true);
                    throw new Error(error);
                }
                ;
                var BOD = JSON.parse(body);
                var arrBOD = BOD.BlackOutDates;
                if (arrBOD.length > 0) {
                    var checkcintemp = new Date(se.cin);
                    var checkdatecout = new Date(se.cout);
                    var checkcin = moment__WEBPACK_IMPORTED_MODULE_11__(checkcintemp).format('YYYYMMDD');
                    var checkcout = moment__WEBPACK_IMPORTED_MODULE_11__(checkdatecout).format('YYYYMMDD');
                    for (let i = 0; i < arrBOD.length; i++) {
                        var checkBODtemp = new Date(arrBOD[i]);
                        var checkBOD = moment__WEBPACK_IMPORTED_MODULE_11__(checkBODtemp).format('YYYYMMDD');
                        if (checkcin <= checkBOD && checkBOD < checkcout) {
                            resolve(false);
                            break;
                        }
                    }
                }
                resolve(true);
            });
        });
    }
    checkAllotment() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
            qs: {
                token: '3b760e5dcf038878925b5613c32615ea3',
                hotelcode: se.booking.HotelId,
                roomcode: se.bookCombo.ComboDetail.comboDetail.roomId,
                checkin: se.booking.CheckInDate,
                checkout: se.booking.CheckOutDate,
                totalroom: se.roomnumber
            },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            var rs = JSON.parse(body);
            if (rs.Msg == "AL") {
                se.Roomif.payment = rs.Msg;
                se.Roomif.ischeckpayment = true;
            }
            else if (rs.Msg == "RQ") {
                se.Roomif.payment = rs.Msg;
                se.Roomif.ischeckpayment = false;
            }
        });
    }
    upgradeRoom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.activityService.objFlightComboUpgrade = {};
            se.activityService.objFlightComboUpgrade.Rooms = se.jsonroom;
            se.activityService.objFlightComboUpgrade.CurrentRoom = se.elementMealtype;
            se.activityService.objFlightComboUpgrade.roomPriceSale = se.roomPriceSale;
            se.activityService.objFlightComboUpgrade.address = se.Address;
            se.valueGlobal.backValue = "flightcomboupgraderoom";
            se.navCtrl.navigateForward('/flightcomboupgraderoom/1');
        });
    }
    calculateDiffPriceUnit() {
        var se = this;
        if (se.jsonroom && se.jsonroom.length > 0) {
            se.jsonroom.forEach(room => {
                room.MealTypeRates.forEach(element => {
                    let adultOtherFee = 0;
                    element.ExtraBedAndGalaDinerList.forEach(e => {
                        if (e.ChargeOn == 'Per Adult' && e.Code != 'EXBA') {
                            adultOtherFee += e.PriceOTA;
                        }
                    });
                    let childOtherFee = 0;
                    element.ExtraBedAndGalaDinerList.forEach(e => {
                        if (e.ChargeOn == 'Per Child' && e.Code != 'CWE' && e.Code != 'EXBC') {
                            childOtherFee += e.PriceOTA;
                        }
                    });
                    let childOtherFeeTotal = 0;
                    element.ExtraBedAndGalaDinerList.forEach(e => {
                        if (e.ChargeOn == 'Per Child' && e.Code != 'CWE' && e.Code != 'EXBC') {
                            childOtherFeeTotal += e.PriceOTA * e.Quantity.value;
                        }
                    });
                    let adultCombo = room.Rooms[0].IncludeAdults * element.TotalRoom;
                    adultCombo = adultCombo > se.totalAdult ? se.totalAdult : adultCombo;
                    adultOtherFee = adultOtherFee * (room.Rooms[0].IncludeAdults * se.roomnumber) / adultCombo;
                    element.PriceDiffUnit = adultOtherFee + ((element.PriceAvgDefaultTA * se.roomnumber) * se.TotalNight / adultCombo) - se.roomPriceSale;
                    element.PriceDiffUnit = Math.round(element.PriceDiffUnit);
                });
            });
        }
    }
    updateRoomChange(data) {
        var se = this;
        if (data) {
            se.zone.run(() => {
                let itemroom = data.itemroom;
                let itemmealtype = data.itemmealtype;
                se.index = data.index;
                se.RoomType = itemroom.RoomType;
                se.Roomif.payment = itemmealtype.Status;
                se.bookCombo.ComboDetail.comboDetail.roomId = itemroom.Rooms[0].RoomID;
                se.bookCombo.mealTypeRates = itemmealtype;
                if (itemmealtype.Name != null && itemmealtype.Notes.length == 0) {
                    se.breakfast = itemmealtype.Name;
                }
                else if (itemmealtype.Name != null && itemmealtype.Notes.length != 0 && itemmealtype.Notes[0].length == itemmealtype.Name.length) {
                    se.breakfast = itemmealtype.Notes.join(', ');
                    itemmealtype.Name = itemmealtype.Notes.join(', ');
                }
                else if (itemmealtype.Name != null && itemmealtype.Notes.length != 0 && itemmealtype.Notes[0].length != itemmealtype.Name.length) {
                    se.breakfast = itemmealtype.Name + ", " + itemmealtype.Notes.join(', ');
                    itemmealtype.Name = itemmealtype.Name + ", " + itemmealtype.Notes.join(', ');
                }
                se.elementMealtype = itemmealtype;
                se.bookCombo.MealTypeName = se.breakfast;
                se.statusRoom = itemmealtype.Status;
                se.Roomif.arrroom = [];
                se.Roomif.arrroom.push(itemroom);
                if (itemroom && itemmealtype) {
                    se.callSummaryPriceAfterUpgradeRoom(itemroom, itemmealtype);
                }
            });
        }
    }
    callSummaryPriceAfterUpgradeRoom(itemroom, itemmealtype) {
        var se = this;
        if (itemroom && !itemroom.MSGCode) {
            se.TravPaxPrices = itemmealtype.PriceAvgPlusNet * se.roomnumber * se.TotalNight;
            se.roomclass = itemroom;
            se.nameroom = itemroom.ClassName;
            se.elementMealtype = itemmealtype;
            se.AdultCombo = itemroom.Rooms[0].IncludeAdults * se.elementMealtype.TotalRoom;
            se.AdultCombo = se.AdultCombo > se.totalAdult ? se.totalAdult : se.AdultCombo;
            se.totalAdultExtrabed = se.totalAdult - se.AdultCombo;
            se.total = se.total - se.PriceAvgPlusTA;
            se.PriceAvgPlusTA = itemroom.MealTypeRates[0].PriceAvgPlusTotalTA;
            se.total = se.total + se.PriceAvgPlusTA;
            se.PriceAvgPlusTAStr = se.total;
            se.PriceAvgPlusTAStr = se.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        }
    }
    sort(property, stt) {
        var se = this;
        se.column = property;
        if (stt == 1) {
            se.zone.run(() => se.listDepartTransfers.sort(function (a, b) {
                let direction = -1;
                if (property == "priceup") {
                    let col = 'priceorder';
                    if (a[col] * 1 < b[col] * 1) {
                        return 1 * direction;
                    }
                    else if (a[col] * 1 > b[col] * 1) {
                        return -1 * direction;
                    }
                }
                else {
                    let direction = (property == "sortByTimeDepartEarly" || property == "sortByTimeLandingEarly") ? -1 : 1;
                    let columnname = "sortByTime";
                    if (a[columnname] < b[columnname]) {
                        return 1 * direction;
                    }
                    else if (a[columnname] > b[columnname]) {
                        return -1 * direction;
                    }
                }
            }));
        }
        else {
            se.zone.run(() => se.listReturnTransfers.sort(function (a, b) {
                let direction = -1;
                if (property == "priceup") {
                    let col = 'priceorder';
                    if (a[col] * 1 < b[col] * 1) {
                        return 1 * direction;
                    }
                    else if (a[col] * 1 > b[col] * 1) {
                        return -1 * direction;
                    }
                }
                else {
                    let direction = (property == "sortByTimeDepartEarly" || property == "sortByTimeLandingEarly") ? -1 : 1;
                    let columnname = "sortByTime";
                    if (a[columnname] < b[columnname]) {
                        return 1 * direction;
                    }
                    else if (a[columnname] > b[columnname]) {
                        return -1 * direction;
                    }
                }
            }));
        }
    }
    getBOD(roomid) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlGate + '/get-blackout-date',
            qs: { hotelId: this.booking.HotelId, roomId: roomid },
            headers: {
                'postman-token': '86c67bdc-5fcd-0240-5549-f3ea2b31faf8',
                'cache-control': 'no-cache'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            var BOD = JSON.parse(body);
            se.arrBOD = BOD.BlackOutDates;
            if (se.arrBOD) {
                if (se.arrBOD.length > 0) {
                    console.log(se.arrBOD.length);
                }
            }
        });
    }
    nextShuttlebus() {
        this.navCtrl.navigateForward("/shuttlebusnote");
    }
    checkVoucherClaimed() {
        setTimeout(() => {
            if (this.itemVoucherCarCombo && this.itemVoucherCarCombo.claimed) {
                this._voucherService.vouchers.forEach((element) => {
                    if (element.id == this.itemVoucherCarCombo.id) {
                        element.claimed = true;
                    }
                });
            }
        }, 1000);
    }
};
CombocarnewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-combocarnew',
        template: __webpack_require__(/*! ./combocarnew.page.html */ "./src/app/combocarnew/combocarnew.page.html"),
        styles: [__webpack_require__(/*! ./combocarnew.page.scss */ "./src/app/combocarnew/combocarnew.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__["GlobalFunction"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Bookcombo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["AlertController"], _network_provider_service__WEBPACK_IMPORTED_MODULE_12__["NetworkProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_16__["voucherService"]])
], CombocarnewPage);



/***/ })

}]);
//# sourceMappingURL=combocarnew-combocarnew-module.js.map