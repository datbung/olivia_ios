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
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_combocarnew_page__WEBPACK_IMPORTED_MODULE_6__["CombocarnewPage"]]
    })
], CombocarnewPageModule);



/***/ }),

/***/ "./src/app/combocarnew/combocarnew.page.html":
/*!***************************************************!*\
  !*** ./src/app/combocarnew/combocarnew.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<ion-header>\n  <ion-row>\n    <ion-col size=\"2\" class=\"header-text header-icon\" (click)=\"goback()\">\n      <img style=\"height: 48px; padding: 8px;\" src=\"./assets/imgs/ios-arrow-round-back.svg\">\n    </ion-col>\n    <ion-col size=\"8\" class=\"header-text\">\n      <ion-title class=\"text-title\">\n        Kiểm tra\n      </ion-title>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <div class=\"content-carcombo\">\n    <div class=\"col-step\">\n      <img class=\"img-step\" src=\"./assets/step/step_1.svg\">\n    </div>\n\n    <div class=\"div-title\">\n      <ion-label class=\"combo-title\">{{titlecombo}} |</ion-label>\n      <ion-label class=\"combo-sub-title\"> {{titlecomboprice}} VND/Khách</ion-label>\n    </div>\n\n    <div class=\"carcombo-hotel\">\n      <div class=\"img-hotel\">\n        <img class=\"img-hotel-avatar\" *ngIf=\"Avatar\" [src]=\"Avatar\" />\n        <img class=\"img-hotel-avatar\" *ngIf=\"!Avatar\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\" />\n      </div>\n\n      <div class=\"info-hotel\">\n        <!-- Tên -->\n        <div class=\"name-hotel f-bold\">\n          <ion-label>{{Name}}</ion-label>\n        </div>\n        <!-- Địa chỉ -->\n        <div class=\"div-address p-top-13\">\n          <!-- img-local -->\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/iocnsearch/ic_location.svg\">\n          </div>\n          <!-- address -->\n          <div class=\"text-address text-thin\">\n            <ion-label>{{Address}}</ion-label>\n          </div>\n          \n        </div>\n        <div *ngIf=\"bookCombo.isshuttlebus.length>0\" class=\"div-address p-top-13\">\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/ic_review/ic_bus.svg\">\n          </div>\n             <div (click)=\"nextShuttlebus()\" class=\"text-address text-thin color-blue\">\n              <ion-label>Lịch trình Shuttle Bus</ion-label>\n            </div>\n        </div>\n     \n          \n        \n      </div>\n    </div>\n    <div class=\"div-split sp-info-hotel\"></div>\n\n    <!-- Checkin, checkout -->\n    <div class=\"div-cin-cout\" (click)=\"changeDateInfo()\">\n      <ion-row>\n        <!-- cin -->\n        <ion-col size=\"3.6\" class=\"no-padding\">\n          <div class=\"div-label-small\">Nhận phòng</div>\n          <div class=\"div-date\">{{cinshow}}</div>\n        </ion-col>\n        <!-- cout -->\n        <ion-col class=\"no-padding align-center\">\n          <div class=\"div-label-small\">Trả phòng</div>\n          <div class=\"div-date\">{{coutshow}}</div>\n        </ion-col>\n        <!-- duration -->\n        <ion-col size=\"3.4\" class=\"no-padding align-center\">\n          <div class=\"div-label-small\">Số đêm</div>\n          <div class=\"div-date-cout\">{{duration}} đêm</div>\n        </ion-col>\n      </ion-row>\n      <div class=\"div-split sp-ci-co\" *ngIf=\"!loadpricedone\"></div>\n    </div>\n    <div class=\"carcombo-departure\" *ngIf=\"PriceAvgPlusTAStr\"  class=\"divheight\" style=\"position: relative;margin-top: 15px;\">\n      <label class=\"text-location\">\n        Đi từ {{fromPlace}}\n      </label>\n      <div>\n        <div class=\"placepoint\">\n        </div>\n        <div class=\"placeline\">\n        </div>\n        <div class=\"placepoint\" style=\"top: 73%\">\n        </div>\n      </div>\n      <!-- <div *ngIf=\"departTicketSaleshow!=0&&(pickup_pointsdep.length>1||drop_off_points_at_arrivedep.length>1)\">\n          <div class=\"placepoint\" style=\"top:35%\">\n          </div>\n          <div class=\"placeline\" style=\"top:41%;height: 21%;\">\n          </div>\n          <div class=\"placepoint\" style=\"top: 62%\">\n          </div>\n        </div>\n      <div *ngIf=\"departTicketSaleshow==0\">\n          <div class=\"placepoint\" style=\"top: 34%;\">\n          </div>\n          <div class=\"placeline\" style=\"top: 40%;height: 20%;\">\n          </div>\n          <div class=\"placepoint\" style=\"top:61%\">\n          </div>\n        </div> -->\n      <ion-row style=\"margin-left: -5px\">\n         \n        <ion-col size=\"8\">\n            <ion-label class=\"text-infocar\" style=\"font-size: 14px\">{{departVehicleStr}}</ion-label>\n          <div >\n              <ion-label class=\"text-infocar\">{{departDateTimeStr}}</ion-label>\n              <div class=\"placediv\" style=\"min-height: 36px;\">\n                <span class=\"combo-departure-time\"> {{departTimeStrd}} </span>\n                <span (click)=\"showmsg(pickup_pointsdepartd)\" style=\"font-size: 14px;\">{{pickup_pointsdepartd}}</span>\n                <div>\n                  <ion-label (click)=\"showmsg(addressdepartd)\" class=\"text-infocar\">{{addressdepartd}}</ion-label>\n                </div>\n         \n              </div>\n              <div class=\"placediv\" style=\"margin-left: 10px;\" style=\"min-height: 36px;\">\n                <span class=\"combo-departure-time\"> {{departTimeStrt}} </span>\n                <span style=\"font-size: 14px;\" (click)=\"showmsg(pickup_pointsdepartt)\">{{pickup_pointsdepartt}}</span>\n                <div >\n                  <ion-label (click)=\"showmsg(addressdepartt)\" class=\"text-infocar\">{{addressdepartt}}</ion-label>\n                </div>\n              </div>\n              <div *ngIf=\"pickup_pointsdep.length>1||drop_off_points_at_arrivedep.length>1\">\n                <ion-label class=\"text-change\" (click)=\"changeplace(0)\">Đổi điểm đón/trả</ion-label>\n              </div>\n          </div>\n       \n\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"departTicketSaleshow!=0\" style=\"align-self: center\">\n          <div *ngIf=\"checkdiscountdepart&&departTicketSaleshow!=0\" class=\"combo-flight-price\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-down\">Giảm <span\n                class=\"flight-price\">{{departTicketSaleshow}}</span></span>\n          </div>\n          <div *ngIf=\"!checkdiscountdepart\" class=\"combo-flight-price-label-up\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-up\">Phụ thu <span\n                class=\"flight-price\">{{departTicketSaleshow}}</span></span>\n          </div>\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(0)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"departTicketSaleshow==0\" style=\"align-self: center\">\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(0)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"carcombo-departure\" *ngIf=\"PriceAvgPlusTAStr\" class=\"divheight\"  style=\"position: relative\">\n        <div>\n            <div class=\"placepoint\" style=\"top:33%\">\n            </div>\n            <div class=\"placeline\" style=\"top: 37%;height: 23%;\">\n            </div>\n            <div class=\"placepoint\" style=\"top: 60%\">\n            </div>\n          </div>\n          <!-- <div *ngIf=\"returnTicketSaleshow!=0&&(pickup_pointsret.length>1||drop_off_points_at_arriveret.length>1)\">\n              <div class=\"placepoint\" style=\"top:26%\">\n              </div>\n              <div class=\"placeline\" style=\"top:33%;height: 21%;\">\n              </div>\n              <div class=\"placepoint\" style=\"top: 55%\">\n              </div>\n            </div>\n          <div *ngIf=\"returnTicketSaleshow==0&&pickup_pointsret.length==1&&drop_off_points_at_arriveret.length==1\">\n              <div class=\"placepoint\" style=\"top: 30%;\">\n              </div>\n              <div class=\"placeline\" style=\"top: 39%;height: 21%;\">\n              </div>\n              <div class=\"placepoint\" style=\"top:61%\">\n              </div>\n            </div>\n            <div *ngIf=\"returnTicketSaleshow==0&&(pickup_pointsret.length>1||drop_off_points_at_arriveret.length>1)\">\n              <div class=\"placepoint\" style=\"top: 27%;\">\n              </div>\n              <div class=\"placeline\" style=\"top: 34%;height: 20%;\">\n              </div>\n              <div class=\"placepoint\" style=\"top:55%\">\n              </div>\n            </div> -->\n      <ion-row style=\"margin-left: -5px;margin-top: 10px\">\n         \n        <ion-col size=\"8\">\n            <ion-label class=\"text-infocar\" style=\"font-size: 14px\">{{returnVehicleStr}}</ion-label>\n            <div >\n          <ion-label class=\"text-infocar\">{{returnDateTimeStr}}</ion-label>\n          <div class=\"placediv\" style=\"min-height: 36px;\">\n            <span class=\"combo-departure-time\">{{returnTimeStrd}} </span>\n            <span style=\"font-size: 14px;\"  (click)=\"showmsg(pickup_pointsreturnd)\">{{pickup_pointsreturnd}}</span>\n            <div>\n              <ion-label class=\"text-infocar\" (click)=\"showmsg(addressreturnd)\">{{addressreturnd}}</ion-label>\n            </div>\n          </div>\n          <div class=\"placediv\" style=\"min-height: 36px;\">\n            <span class=\"combo-departure-time\">{{returnTimeStrt}} </span>\n            <span style=\"font-size: 14px;\" (click)=\"showmsg(pickup_pointsreturnt)\">{{pickup_pointsreturnt}}</span>\n            <div>\n                <ion-label class=\"text-infocar\" (click)=\"showmsg(addressreturnt)\">{{addressreturnt}}</ion-label>\n              </div>\n          </div>\n          <div  *ngIf=\"pickup_pointsret.length>1||drop_off_points_at_arriveret.length>1\">\n            <ion-label class=\"text-change\" (click)=\"changeplace(1)\">Đổi điểm đón/trả</ion-label>\n          </div>\n        </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"returnTicketSaleshow!=0\" style=\"align-self: center\">\n      \n          <div *ngIf=\"checkdiscountreturn\" class=\"combo-flight-price\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-down\">Giảm <span\n                class=\"flight-price\">{{returnTicketSaleshow}}</span></span>\n          </div>\n          <div *ngIf=\"!checkdiscountreturn\" class=\"combo-flight-price-label-up\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px;\">\n            <span class=\"combo-flight-price-label-up\">Phụ thu <span\n                class=\"flight-price\">{{returnTicketSaleshow}}</span></span>\n          </div>\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(1)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"returnTicketSaleshow==0\" style=\"align-self: center\">\n\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(1)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- skeleton -->\n    <!-- <div class=\"carcombo-departure\" *ngIf=\"!PriceAvgPlusTAStr\">\n      <ion-row>\n        <ion-col size=\"3.6\" class=\"no-padding\">\n          <ion-skeleton-text animated style=\"width:100%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:75%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:50%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col class=\"no-padding align-center\">\n\n        </ion-col>\n\n        <ion-col size=\"3.4\" class=\"no-padding align-center\">\n          <ion-skeleton-text animated style=\"width:50%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:88px;margin-top: 4px;height: 30px;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </div> -->\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr&&!loadpricedone\" style=\"height: 100px\">\n      <ion-col style=\"text-align: center;align-self: center\">\n        <ion-spinner style=\"height: 84px\" name=\"bubbles\" class=\"spinner-bubbles hydrated\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr&&!loadpricedone\">\n      <ion-col style=\"text-align: center;align-self: center;color: #828282\">\n        <label>Đang tìm vé xe tốt nhất. Xin quý khách vui lòng đợi trong giây lát!</label>\n      </ion-col>\n    </ion-row>\n    <div class=\"div-split sp-ci-co\"></div>\n    <!-- Thông tin phòng -->\n    <div *ngIf=\"PriceAvgPlusTAStr\" class=\"room-info\">\n      <div class=\"div-flex\">\n        <label class=\"combo-title text-room\">\n          {{nameroom}}\n        </label>\n        <label *ngIf=\"PriceAvgPlusTAStr\" class=\"text-p line-blue\">\n          <span (click)=\"upgradeRoom()\" class=\"margin-right-5\">Đổi</span> <img src=\"./assets/imgs/vector.svg\">\n        </label>\n      </div>\n      <div class=\"text-regular p-top-8\" text-wrap>\n        <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{roomnumber}} phòng | {{adulsdisplay}} người\n        lớn |\n        {{childrendisplay}} trẻ em {{textage}}\n      </div>\n      <!-- <div class=\"text-regular p-top-15\">\n        <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n      </div> -->\n      <div class=\"div-flex\">\n        <p class=\"text-p text-width-190\" text-wrap>\n          <img src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n        </p>\n        <!-- <p *ngIf=\"PriceAvgPlusTAStr\" class=\"text-p line-blue\">\n          <span (click)=\"upgradeRoom()\" class=\"margin-right-5\">Đổi</span> <img src=\"./assets/imgs/vector.svg\">\n        </p> -->\n      </div>\n      <div *ngIf=\"PriceAvgPlusTAStr\" class=\"div-address\">\n        <div class=\"div-location\">\n          <img class=\"img-location\" src=\"./assets/iconaccount/info.svg\">\n        </div>\n        <div class=\"text-address text-thin color-blue\">\n          <ion-label  *ngIf=\"statusRoom=='AL'\" >Xác nhận ngay</ion-label>\n          <ion-label  *ngIf=\"statusRoom!='AL'\" >Xác nhận trong 60 phút</ion-label>\n        </div>\n      </div>\n     \n      <hr class=\"cls-hr\">\n    </div>\n<!-- chính sách hủy combo -->\n<div *ngIf=\"PriceAvgPlusTAStr\" (click)=\"showPenalty()\">\n  <ion-row>\n    <label class=\"depart-title\">\n        Chính sách hủy combo\n    </label>\n  </ion-row>\n  <hr class=\"cls-hr\">\n</div>\n\n    <div *ngIf=\"point>0 && PriceAvgPlusTAStr&& loadcarspricedone\" class=\"div-voucher\">\n      <div class=\"div-flex\">\n        <div class=\"div-first\">\n          <div *ngIf=\"!ischeckpoint\" class=\"div-checkpoint\">\n              <ion-checkbox class=\"check-point\" mode=\"md\" (ionChange)=\"edit()\" [disabled]=\"ischeckbtnpromo==true?'true':false\" checked=\"false\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n              <div class=\"div-point  cls-ml8\">\n                <div  class=\"text-point\">Dùng {{pointshow}} điểm</div>\n                <div class=\"num-point\">\n                (-{{price}}đ)\n                </div>\n              </div>\n          </div>\n          <div *ngIf=\"ischeckpoint\" class=\"div-checkpoint\">\n              <ion-checkbox class=\"check-point\" mode=\"md\" (ionChange)=\"edit()\" checked=\"false\" [disabled]=\"ischeckbtnpromo==true?'true':false\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n              <div class=\"div-point cls-ml8\">\n                <div  class=\"text-point\">Dùng {{pointshow}} điểm</div>\n                <div class=\"num-point\">\n                (-{{PriceAvgPlusTAStr}}đ)\n                </div>\n              </div>\n          </div>\n        </div>\n        <div  class=\"div-col-split\">\n        </div>\n         \n        <div *ngIf=\"!ischeck\" class=\"div-promotion\">\n        <ion-label (click)=\"showdiscount()\" class=\"text-point\">{{textpromotion}}</ion-label>\n        </div>\n        <div *ngIf=\"ischeck\" class=\"div-promotion\">\n          <ion-label class=\"text-promotion\">Nhập mã giảm giá</ion-label>\n          </div>\n      </div>\n      <hr class=\"cls-hr\">\n\n      <div *ngIf=\"ischeck||ischeckbtnpromo&& loadcarspricedone\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"no-padding\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\" class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" class=\"no-padding\" (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"!ischeck&&!ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{PriceAvgPlusTAStr}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div *ngIf=\"(point<=0||!point)&&PriceAvgPlusTAStr\">\n      <!-- <div style=\"margin-top: 10px\">\n        <label class=\"combo-title\">\n          Mã giảm giá\n        </label>\n        <ion-row>\n          <ion-col size=\"8\" class=\"no-padding\">\n            <ion-item style=\"--padding-start: 0px;font-size: 14px;\">\n              <ion-label style=\"color: #828282\" position=\"floating\">Nhập mã giảm giá</ion-label>\n              <ion-input (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\"\n                *ngIf=\"ischecktext==3\" class=\"none\"></ion-input>\n              <ion-input (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\"\n                *ngIf=\"ischecktext==1||ischecktext==2\" class=\"error\"></ion-input>\n              <ion-input (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\"\n                *ngIf=\"ischecktext==0\" class=\"click\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"4\" class=\"no-padding\" style=\"padding-right: 0;align-self: flex-end;\">\n            <div style=\"text-align: right\">\n              <button *ngIf=\"!ischeckbtnpromo\" (click)=\"promofunc()\" ion-button round outline\n                class=\"button btn-change btn-apply\">Áp dụng</button>\n              <button *ngIf=\"ischeckbtnpromo\" ion-button round outline class=\"button btnnonesuccess\"><span>\n                  <ion-icon name=\"checkmark\"></ion-icon>\n                </span></button></div>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n          <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n        </ion-row>\n      </div> -->\n      <div>\n        <!-- <label  class=\"text-name\">\n            Mã giảm giá\n          </label> -->\n          <ion-row (click)=\"showdiscount()\">\n                <!-- <ion-item class=\"cls-item-no-border\" style=\"--padding-start: 0px;\" lines=\"none\"> -->\n                  <label *ngIf=\"!promocode\" class=\"depart-title\" >Nhập mã giảm giá</label>\n                  <label *ngIf=\"promocode\" class=\"depart-title\" >{{textpromotion}}</label>\n                  <!-- <ion-input (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==3\" class=\"none\"  ></ion-input>\n                  <ion-input (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==1||ischecktext==2\" class=\"error\"  ></ion-input>\n                  <ion-input (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==0\" class=\"click\" ></ion-input> -->\n                <!-- </ion-item> -->\n              <!-- <ion-col size=\"4\"  style=\"padding-right:0; align-self: flex-end;\">\n                  <button style=\"margin-top: 35px\" *ngIf=\"!ischeckbtnpromo\" (click)=\"promofunc()\" ion-button round outline class=\"button btnapply\">Áp dụng</button>\n                  <button style=\"margin-top: 35px\" *ngIf=\"ischeckbtnpromo\"  ion-button round outline class=\"button btnnonesuccess\"><span>\n                      <ion-icon name=\"checkmark\"></ion-icon>\n                  </span></button>\n              </ion-col> -->\n          </ion-row>\n          <ion-row> \n              <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n              <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n          </ion-row>\n  </div>\n      <div class=\"div-split-panel\"></div>\n      <div *ngIf=\"!ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{PriceAvgPlusTAStr}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf=\"ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div class=\"div-split-panel\" *ngIf=\"!loadpricedone\"></div>\n    <!-- <ion-row>\n            <ion-col size=\"6\" style=\"padding: 0;\">\n              <div>\n                <h2 class=\"text-name\" style=\"font-size: 18px;font-weight: bold\" position=\"stacked\">{{adulsdisplay}} người lớn, {{childrendisplay}} trẻ em</h2>\n                <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\" style=\"padding: 0;\">\n              <p class=\"total-price\" style=\"text-align: right\" >\n                {{PriceAvgPlusTAStr}}đ\n                <sup>\n                  <img src=\"./assets/ic_green/ic_info.svg\">\n                </sup>\n              </p>\n            </ion-col>\n          </ion-row> -->\n    <div *ngIf=\"PriceAvgPlusTAStr\">\n      <ion-row *ngIf=\"PriceAvgPlusTAStr\">\n        <ion-col style=\"padding:5px 0\">\n          <label class=\"text-thin-italic\">*iVIVU không đảm bảo giá vé này cho đến khi bạn\n            hoàn tất thanh toán và mã ghế ngồi được xác nhận!</label>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr && loadpricedone\">\n      <!-- <ion-col style=\"padding:5px 0\">\n        <label style=\"font-size:14px;color:#828282;font-style: italic\">{{msgwrn}}</label>\n      </ion-col> -->\n      <div class=\"row-suggest\">\n        <div ><span class=\"text-suggest color-red\">Giai đoạn hết giá.</span> <span style=\"margin-left: 5px;\"  (click)=\"changeDateInfo()\" class=\"text-suggest color-blue text-underline\">Quý khách vui lòng chọn ngày khác</span></div> \n        <!-- <div *ngIf=\"valueGlobal.promotionPackage.length>0\" class=\"text-suggest mt-3\"> <span>Ngày còn phòng từ </span><span class=\"text-weight-suggest\"> {{valueGlobal.promotionPackage}}</span> </div>  \n                 <div *ngIf=\"valueGlobal.promotionPackage.length==0\" (click)=\"changeHotel()\" class=\"text-suggest color-blue text-underline\">Xem qua các chỗ nghỉ tương tự khác </div>  -->\n       </div>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer>\n  <div *ngIf=\"PriceAvgPlusTAStr\" class=\"div-footer\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button-footer\">Xác nhận</button>\n  </div>\n  <div *ngIf=\"!PriceAvgPlusTAStr && loadpricedone\" class=\"div-footer\"\n    style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"sendRequestCombo()\" ion-button round outline class=\"button button-footer\">Gửi yêu cầu</button>\n  </div>\n</ion-footer>"
=======
module.exports = "<ion-header>\n  <ion-row>\n    <ion-col size=\"2\" class=\"header-text header-icon\" (click)=\"goback()\">\n      <img style=\"height: 48px; padding: 8px;\" src=\"./assets/imgs/ios-arrow-round-back.svg\">\n    </ion-col>\n    <ion-col size=\"8\" class=\"header-text\">\n      <ion-title class=\"text-title\">\n        Kiểm tra\n      </ion-title>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <div class=\"content-carcombo\">\n    <div class=\"col-step\">\n      <img class=\"img-step\" src=\"./assets/step/step_1.svg\">\n    </div>\n\n    <div class=\"div-title\">\n      <ion-label class=\"combo-title\">{{titlecombo}} |</ion-label>\n      <ion-label class=\"combo-sub-title\"> {{titlecomboprice}} VND/Khách</ion-label>\n    </div>\n\n    <div class=\"carcombo-hotel\">\n      <div class=\"img-hotel\">\n        <img class=\"img-hotel-avatar\" *ngIf=\"Avatar\" [src]=\"Avatar\" />\n        <img class=\"img-hotel-avatar\" *ngIf=\"!Avatar\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\" />\n      </div>\n\n      <div class=\"info-hotel\">\n        <!-- Tên -->\n        <div class=\"name-hotel f-bold\">\n          <ion-label>{{Name}}</ion-label>\n        </div>\n        <!-- Địa chỉ -->\n        <div class=\"div-address p-top-13\">\n          <!-- img-local -->\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/iocnsearch/ic_location.svg\">\n          </div>\n          <!-- address -->\n          <div class=\"text-address text-thin\">\n            <ion-label>{{Address}}</ion-label>\n          </div>\n          \n        </div>\n        <div *ngIf=\"bookCombo.isshuttlebus.length>0\" class=\"div-address p-top-13\">\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/ic_hoteldetail/bus.svg\">\n          </div>\n             <div (click)=\"nextShuttlebus()\" class=\"text-address text-thin color-blue\">\n              <ion-label>Lịch trình Shuttle Bus</ion-label>\n            </div>\n        </div>\n     \n          \n        <div *ngIf=\"PriceAvgPlusTAStr\" class=\"div-address p-top-13\">\n          <div class=\"div-location\">\n            <img class=\"img-location\" src=\"./assets/iconaccount/info.svg\">\n          </div>\n             <div class=\"text-address text-thin color-blue\">\n              <ion-label  *ngIf=\"statusRoom=='AL'\" >Xác nhận ngay</ion-label>\n              <ion-label  *ngIf=\"statusRoom!='AL'\" >Xác nhận trong 60 phút</ion-label>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"div-split sp-info-hotel\"></div>\n\n    <!-- Checkin, checkout -->\n    <div class=\"div-cin-cout\" (click)=\"changeDateInfo()\">\n      <ion-row>\n        <!-- cin -->\n        <ion-col size=\"3.6\" class=\"no-padding\">\n          <div class=\"div-label-small\">Nhận phòng</div>\n          <div class=\"div-date\">{{cinshow}}</div>\n        </ion-col>\n        <!-- cout -->\n        <ion-col class=\"no-padding align-center\">\n          <div class=\"div-label-small\">Trả phòng</div>\n          <div class=\"div-date\">{{coutshow}}</div>\n        </ion-col>\n        <!-- duration -->\n        <ion-col size=\"3.4\" class=\"no-padding align-center\">\n          <div class=\"div-label-small\">Số đêm</div>\n          <div class=\"div-date-cout\">{{duration}} đêm</div>\n        </ion-col>\n      </ion-row>\n      <div class=\"div-split sp-ci-co\" *ngIf=\"!loadpricedone\"></div>\n    </div>\n    <div class=\"carcombo-departure\" *ngIf=\"PriceAvgPlusTAStr\"  class=\"divheight\" style=\"position: relative;margin-top: 15px;\">\n      <label class=\"text-location\">\n        Đi từ {{fromPlace}}\n      </label>\n      <div>\n        <div class=\"placepoint\">\n        </div>\n        <div class=\"placeline\">\n        </div>\n        <div class=\"placepoint\" style=\"top: 73%\">\n        </div>\n      </div>\n      <!-- <div *ngIf=\"departTicketSaleshow!=0&&(pickup_pointsdep.length>1||drop_off_points_at_arrivedep.length>1)\">\n          <div class=\"placepoint\" style=\"top:35%\">\n          </div>\n          <div class=\"placeline\" style=\"top:41%;height: 21%;\">\n          </div>\n          <div class=\"placepoint\" style=\"top: 62%\">\n          </div>\n        </div>\n      <div *ngIf=\"departTicketSaleshow==0\">\n          <div class=\"placepoint\" style=\"top: 34%;\">\n          </div>\n          <div class=\"placeline\" style=\"top: 40%;height: 20%;\">\n          </div>\n          <div class=\"placepoint\" style=\"top:61%\">\n          </div>\n        </div> -->\n      <ion-row style=\"margin-left: -5px\">\n         \n        <ion-col size=\"8\">\n            <ion-label class=\"text-infocar\" style=\"font-size: 14px\">{{departVehicleStr}}</ion-label>\n          <div >\n              <ion-label class=\"text-infocar\">{{departDateTimeStr}}</ion-label>\n              <div class=\"placediv\" style=\"min-height: 36px;\">\n                <span class=\"combo-departure-time\"> {{departTimeStrd}} </span>\n                <span (click)=\"showmsg(pickup_pointsdepartd)\" style=\"font-size: 14px;\">{{pickup_pointsdepartd}}</span>\n                <div>\n                  <ion-label (click)=\"showmsg(addressdepartd)\" class=\"text-infocar\">{{addressdepartd}}</ion-label>\n                </div>\n         \n              </div>\n              <div class=\"placediv\" style=\"margin-left: 10px;\" style=\"min-height: 36px;\">\n                <span class=\"combo-departure-time\"> {{departTimeStrt}} </span>\n                <span style=\"font-size: 14px;\" (click)=\"showmsg(pickup_pointsdepartt)\">{{pickup_pointsdepartt}}</span>\n                <div >\n                  <ion-label (click)=\"showmsg(addressdepartt)\" class=\"text-infocar\">{{addressdepartt}}</ion-label>\n                </div>\n              </div>\n              <div *ngIf=\"pickup_pointsdep.length>1||drop_off_points_at_arrivedep.length>1\">\n                <ion-label class=\"text-change\" (click)=\"changeplace(0)\">Đổi điểm đón/trả</ion-label>\n              </div>\n          </div>\n       \n\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"departTicketSaleshow!=0\" style=\"align-self: center\">\n          <div *ngIf=\"checkdiscountdepart&&departTicketSaleshow!=0\" class=\"combo-flight-price\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-down\">Giảm <span\n                class=\"flight-price\">{{departTicketSaleshow}}</span></span>\n          </div>\n          <div *ngIf=\"!checkdiscountdepart\" class=\"combo-flight-price-label-up\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-up\">Phụ thu <span\n                class=\"flight-price\">{{departTicketSaleshow}}</span></span>\n          </div>\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(0)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"departTicketSaleshow==0\" style=\"align-self: center\">\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(0)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"carcombo-departure\" *ngIf=\"PriceAvgPlusTAStr\" class=\"divheight\"  style=\"position: relative\">\n        <div>\n            <div class=\"placepoint\" style=\"top:33%\">\n            </div>\n            <div class=\"placeline\" style=\"top: 37%;height: 23%;\">\n            </div>\n            <div class=\"placepoint\" style=\"top: 60%\">\n            </div>\n          </div>\n          <!-- <div *ngIf=\"returnTicketSaleshow!=0&&(pickup_pointsret.length>1||drop_off_points_at_arriveret.length>1)\">\n              <div class=\"placepoint\" style=\"top:26%\">\n              </div>\n              <div class=\"placeline\" style=\"top:33%;height: 21%;\">\n              </div>\n              <div class=\"placepoint\" style=\"top: 55%\">\n              </div>\n            </div>\n          <div *ngIf=\"returnTicketSaleshow==0&&pickup_pointsret.length==1&&drop_off_points_at_arriveret.length==1\">\n              <div class=\"placepoint\" style=\"top: 30%;\">\n              </div>\n              <div class=\"placeline\" style=\"top: 39%;height: 21%;\">\n              </div>\n              <div class=\"placepoint\" style=\"top:61%\">\n              </div>\n            </div>\n            <div *ngIf=\"returnTicketSaleshow==0&&(pickup_pointsret.length>1||drop_off_points_at_arriveret.length>1)\">\n              <div class=\"placepoint\" style=\"top: 27%;\">\n              </div>\n              <div class=\"placeline\" style=\"top: 34%;height: 20%;\">\n              </div>\n              <div class=\"placepoint\" style=\"top:55%\">\n              </div>\n            </div> -->\n      <ion-row style=\"margin-left: -5px;margin-top: 10px\">\n         \n        <ion-col size=\"8\">\n            <ion-label class=\"text-infocar\" style=\"font-size: 14px\">{{returnVehicleStr}}</ion-label>\n            <div >\n          <ion-label class=\"text-infocar\">{{returnDateTimeStr}}</ion-label>\n          <div class=\"placediv\" style=\"min-height: 36px;\">\n            <span class=\"combo-departure-time\">{{returnTimeStrd}} </span>\n            <span style=\"font-size: 14px;\"  (click)=\"showmsg(pickup_pointsreturnd)\">{{pickup_pointsreturnd}}</span>\n            <div>\n              <ion-label class=\"text-infocar\" (click)=\"showmsg(addressreturnd)\">{{addressreturnd}}</ion-label>\n            </div>\n          </div>\n          <div class=\"placediv\" style=\"min-height: 36px;\">\n            <span class=\"combo-departure-time\">{{returnTimeStrt}} </span>\n            <span style=\"font-size: 14px;\" (click)=\"showmsg(pickup_pointsreturnt)\">{{pickup_pointsreturnt}}</span>\n            <div>\n                <ion-label class=\"text-infocar\" (click)=\"showmsg(addressreturnt)\">{{addressreturnt}}</ion-label>\n              </div>\n          </div>\n          <div  *ngIf=\"pickup_pointsret.length>1||drop_off_points_at_arriveret.length>1\">\n            <ion-label class=\"text-change\" (click)=\"changeplace(1)\">Đổi điểm đón/trả</ion-label>\n          </div>\n        </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"returnTicketSaleshow!=0\" style=\"align-self: center\">\n      \n          <div *ngIf=\"checkdiscountreturn\" class=\"combo-flight-price\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n            <span class=\"combo-flight-price-label-down\">Giảm <span\n                class=\"flight-price\">{{returnTicketSaleshow}}</span></span>\n          </div>\n          <div *ngIf=\"!checkdiscountreturn\" class=\"combo-flight-price-label-up\"\n            style=\"margin-bottom: 5px;text-align: right;height: 20px;\">\n            <span class=\"combo-flight-price-label-up\">Phụ thu <span\n                class=\"flight-price\">{{returnTicketSaleshow}}</span></span>\n          </div>\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(1)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n        <ion-col size=\"4\" *ngIf=\"returnTicketSaleshow==0\" style=\"align-self: center\">\n\n          <div class=\"button-float-right\" style=\"text-align: right\">\n            <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(1)\">Đổi giờ</button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- skeleton -->\n    <!-- <div class=\"carcombo-departure\" *ngIf=\"!PriceAvgPlusTAStr\">\n      <ion-row>\n        <ion-col size=\"3.6\" class=\"no-padding\">\n          <ion-skeleton-text animated style=\"width:100%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:75%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:50%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col class=\"no-padding align-center\">\n\n        </ion-col>\n\n        <ion-col size=\"3.4\" class=\"no-padding align-center\">\n          <ion-skeleton-text animated style=\"width:50%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:88px;margin-top: 4px;height: 30px;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </div> -->\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr&&!loadpricedone\" style=\"height: 100px\">\n      <ion-col style=\"text-align: center;align-self: center\">\n        <ion-spinner style=\"height: 84px\" name=\"bubbles\" class=\"spinner-bubbles hydrated\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr&&!loadpricedone\">\n      <ion-col style=\"text-align: center;align-self: center;color: #828282\">\n        <label>Đang tìm vé xe tốt nhất. Xin quý khách vui lòng đợi trong giây lát!</label>\n      </ion-col>\n    </ion-row>\n    <div class=\"div-split sp-ci-co\"></div>\n    <!-- Thông tin phòng -->\n    <div *ngIf=\"PriceAvgPlusTAStr\" class=\"room-info\">\n      <div class=\"div-flex\">\n        <label class=\"combo-title text-room\">\n          {{nameroom}}\n        </label>\n        <label *ngIf=\"PriceAvgPlusTAStr\" class=\"text-p line-blue\">\n          <span (click)=\"upgradeRoom()\" class=\"margin-right-5\">Đổi</span> <img src=\"./assets/imgs/vector.svg\">\n        </label>\n      </div>\n      <div class=\"text-regular p-top-8\" text-wrap>\n        <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{roomnumber}} phòng | {{adulsdisplay}} người\n        lớn |\n        {{childrendisplay}} trẻ em {{textage}}\n      </div>\n      <!-- <div class=\"text-regular p-top-15\">\n        <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n      </div> -->\n      <div class=\"div-flex\">\n        <p class=\"text-p text-width-190\" text-wrap>\n          <img src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n        </p>\n        <!-- <p *ngIf=\"PriceAvgPlusTAStr\" class=\"text-p line-blue\">\n          <span (click)=\"upgradeRoom()\" class=\"margin-right-5\">Đổi</span> <img src=\"./assets/imgs/vector.svg\">\n        </p> -->\n      </div>\n      <hr class=\"cls-hr\">\n    </div>\n<!-- chính sách hủy combo -->\n<div *ngIf=\"PriceAvgPlusTAStr\" (click)=\"showPenalty()\">\n  <ion-row>\n    <label class=\"depart-title\">\n        Chính sách hủy combo\n    </label>\n  </ion-row>\n  <hr class=\"cls-hr\">\n</div>\n\n    <div *ngIf=\"point>0 && PriceAvgPlusTAStr&& loadcarspricedone\" class=\"div-voucher\">\n      <div class=\"div-flex\">\n        <div class=\"div-first\">\n          <div *ngIf=\"!ischeckpoint\" class=\"div-checkpoint\">\n              <ion-checkbox class=\"check-point\" mode=\"md\" (ionChange)=\"edit()\" [disabled]=\"ischeckbtnpromo==true?'true':false\" checked=\"false\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n              <div class=\"div-point  cls-ml8\">\n                <div  class=\"text-point\">Dùng {{pointshow}} điểm</div>\n                <div class=\"num-point\">\n                (-{{price}}đ)\n                </div>\n              </div>\n          </div>\n          <div *ngIf=\"ischeckpoint\" class=\"div-checkpoint\">\n              <ion-checkbox class=\"check-point\" mode=\"md\" (ionChange)=\"edit()\" checked=\"false\" [disabled]=\"ischeckbtnpromo==true?'true':false\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n              <div class=\"div-point cls-ml8\">\n                <div  class=\"text-point\">Dùng {{pointshow}} điểm</div>\n                <div class=\"num-point\">\n                (-{{PriceAvgPlusTAStr}}đ)\n                </div>\n              </div>\n          </div>\n        </div>\n        <div  class=\"div-col-split\">\n        </div>\n         \n        <div *ngIf=\"!ischeck\" class=\"div-promotion\">\n        <ion-label (click)=\"showdiscount()\" class=\"text-point\">{{textpromotion}}</ion-label>\n        </div>\n        <div *ngIf=\"ischeck\" class=\"div-promotion\">\n          <ion-label class=\"text-promotion\">Nhập mã giảm giá</ion-label>\n          </div>\n      </div>\n      <hr class=\"cls-hr\">\n\n      <div *ngIf=\"ischeck||ischeckbtnpromo&& loadcarspricedone\">\n        <ion-row>\n          <ion-col size=\"6\" class=\"no-padding\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\" class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" class=\"no-padding\" (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"!ischeck&&!ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{PriceAvgPlusTAStr}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n    <div *ngIf=\"(point<=0||!point)&&PriceAvgPlusTAStr\">\n      <!-- <div style=\"margin-top: 10px\">\n        <label class=\"combo-title\">\n          Mã giảm giá\n        </label>\n        <ion-row>\n          <ion-col size=\"8\" class=\"no-padding\">\n            <ion-item style=\"--padding-start: 0px;font-size: 14px;\">\n              <ion-label style=\"color: #828282\" position=\"floating\">Nhập mã giảm giá</ion-label>\n              <ion-input (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\"\n                *ngIf=\"ischecktext==3\" class=\"none\"></ion-input>\n              <ion-input (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\"\n                *ngIf=\"ischecktext==1||ischecktext==2\" class=\"error\"></ion-input>\n              <ion-input (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\"\n                *ngIf=\"ischecktext==0\" class=\"click\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"4\" class=\"no-padding\" style=\"padding-right: 0;align-self: flex-end;\">\n            <div style=\"text-align: right\">\n              <button *ngIf=\"!ischeckbtnpromo\" (click)=\"promofunc()\" ion-button round outline\n                class=\"button btn-change btn-apply\">Áp dụng</button>\n              <button *ngIf=\"ischeckbtnpromo\" ion-button round outline class=\"button btnnonesuccess\"><span>\n                  <ion-icon name=\"checkmark\"></ion-icon>\n                </span></button></div>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n          <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n        </ion-row>\n      </div> -->\n      <div>\n        <!-- <label  class=\"text-name\">\n            Mã giảm giá\n          </label> -->\n          <ion-row (click)=\"showdiscount()\">\n                <!-- <ion-item class=\"cls-item-no-border\" style=\"--padding-start: 0px;\" lines=\"none\"> -->\n                  <label *ngIf=\"!promocode\" class=\"depart-title\" >Nhập mã giảm giá</label>\n                  <label *ngIf=\"promocode\" class=\"depart-title\" >{{textpromotion}}</label>\n                  <!-- <ion-input (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==3\" class=\"none\"  ></ion-input>\n                  <ion-input (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==1||ischecktext==2\" class=\"error\"  ></ion-input>\n                  <ion-input (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==0\" class=\"click\" ></ion-input> -->\n                <!-- </ion-item> -->\n              <!-- <ion-col size=\"4\"  style=\"padding-right:0; align-self: flex-end;\">\n                  <button style=\"margin-top: 35px\" *ngIf=\"!ischeckbtnpromo\" (click)=\"promofunc()\" ion-button round outline class=\"button btnapply\">Áp dụng</button>\n                  <button style=\"margin-top: 35px\" *ngIf=\"ischeckbtnpromo\"  ion-button round outline class=\"button btnnonesuccess\"><span>\n                      <ion-icon name=\"checkmark\"></ion-icon>\n                  </span></button>\n              </ion-col> -->\n          </ion-row>\n          <ion-row> \n              <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n              <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n          </ion-row>\n  </div>\n      <div class=\"div-split-panel\"></div>\n      <div *ngIf=\"!ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{PriceAvgPlusTAStr}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf=\"ischeckbtnpromo\">\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn\n                {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" style=\"padding: 0;\"  (click)=\"showComboDetail()\">\n            <p class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n              <!-- <sup>\n                <img src=\"./assets/ic_green/ic_info.svg\">\n              </sup> -->\n            </p>\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <div class=\"div-split-panel\" *ngIf=\"!loadpricedone\"></div>\n    <!-- <ion-row>\n            <ion-col size=\"6\" style=\"padding: 0;\">\n              <div>\n                <h2 class=\"text-name\" style=\"font-size: 18px;font-weight: bold\" position=\"stacked\">{{adulsdisplay}} người lớn, {{childrendisplay}} trẻ em</h2>\n                <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\" style=\"padding: 0;\">\n              <p class=\"total-price\" style=\"text-align: right\" >\n                {{PriceAvgPlusTAStr}}đ\n                <sup>\n                  <img src=\"./assets/ic_green/ic_info.svg\">\n                </sup>\n              </p>\n            </ion-col>\n          </ion-row> -->\n    <div *ngIf=\"PriceAvgPlusTAStr\">\n      <ion-row *ngIf=\"PriceAvgPlusTAStr\">\n        <ion-col style=\"padding:5px 0\">\n          <label class=\"text-thin-italic\">*iVIVU không đảm bảo giá vé này cho đến khi bạn\n            hoàn tất thanh toán và mã ghế ngồi được xác nhận!</label>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr && loadpricedone\">\n      <!-- <ion-col style=\"padding:5px 0\">\n        <label style=\"font-size:14px;color:#828282;font-style: italic\">{{msgwrn}}</label>\n      </ion-col> -->\n      <div class=\"row-suggest\">\n        <div ><span class=\"text-suggest color-red\">Giai đoạn hết giá.</span> <span style=\"margin-left: 5px;\"  (click)=\"changeDateInfo()\" class=\"text-suggest color-blue text-underline\">Quý khách vui lòng chọn ngày khác</span></div> \n        <!-- <div *ngIf=\"valueGlobal.promotionPackage.length>0\" class=\"text-suggest mt-3\"> <span>Ngày còn phòng từ </span><span class=\"text-weight-suggest\"> {{valueGlobal.promotionPackage}}</span> </div>  \n                 <div *ngIf=\"valueGlobal.promotionPackage.length==0\" (click)=\"changeHotel()\" class=\"text-suggest color-blue text-underline\">Xem qua các chỗ nghỉ tương tự khác </div>  -->\n       </div>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer>\n  <div *ngIf=\"PriceAvgPlusTAStr\" class=\"div-footer\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button-footer\">Xác nhận</button>\n  </div>\n  <div *ngIf=\"!PriceAvgPlusTAStr && loadpricedone\" class=\"div-footer\"\n    style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"sendRequestCombo()\" ion-button round outline class=\"button button-footer\">Gửi yêu cầu</button>\n  </div>\n</ion-footer>"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/combocarnew/combocarnew.page.scss":
/*!***************************************************!*\
  !*** ./src/app/combocarnew/combocarnew.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "@charset \"UTF-8\";\n.text-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0;\n}\n.header-text {\n  text-align: center;\n  align-self: center;\n}\n.content-carcombo {\n  padding: 16px;\n}\n.content-carcombo .no-padding {\n  padding: 0;\n}\n.content-carcombo .align-center {\n  text-align: center;\n}\n.content-carcombo .text-regular {\n  font-size: 14px;\n  -webkit-columns: #222222;\n     -moz-columns: #222222;\n          columns: #222222;\n}\n.content-carcombo .text-thin {\n  font-size: 14px;\n  line-height: 18.9px;\n  letter-spacing: -0.4px;\n  color: #4f4f4f;\n}\n.content-carcombo .text-thin-italic {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.content-carcombo .text-name {\n  margin-top: 17px;\n  margin-bottom: 0;\n}\n.content-carcombo .text-tax-include {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  margin-top: 2px;\n  margin-bottom: 0;\n}\n.content-carcombo .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.content-carcombo .p-top-16 {\n  padding-top: 15px;\n}\n.content-carcombo .p-top-15 {\n  padding-top: 15px;\n}\n.content-carcombo .p-top-8 {\n  padding-top: 8px;\n}\n.content-carcombo .p-top-6 {\n  padding-top: 6px;\n}\n.content-carcombo .p-top-2 {\n  padding-top: 2px;\n}\n.content-carcombo .f-bold {\n  font-weight: bold;\n}\n.content-carcombo .col-step {\n  line-height: 11px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n.content-carcombo .col-step img {\n  height: 16px;\n}\n.content-carcombo .div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222222;\n}\n.content-carcombo .div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.content-carcombo .carcombo-hotel {\n  position: relative;\n  height: 104px;\n  padding-top: 15px;\n}\n.content-carcombo .carcombo-hotel .img-hotel-avatar {\n  min-width: 104px;\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n  float: left;\n  position: absolute;\n}\n.content-carcombo .carcombo-hotel .info-hotel {\n  position: relative;\n  padding-left: 112px;\n}\n.content-carcombo .carcombo-hotel .name-hotel {\n  font-size: 14px;\n  -webkit-columns: #222222;\n     -moz-columns: #222222;\n          columns: #222222;\n}\n.content-carcombo .div-address .div-location {\n  position: absolute;\n  margin-top: -1px;\n  margin-left: -1px;\n}\n.content-carcombo .div-address .img-location {\n  height: 15px;\n}\n.content-carcombo .div-address .text-address {\n  position: relative;\n  line-height: 16px;\n  padding-left: 16px;\n}\n.content-carcombo .div-split {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n}\n.content-carcombo .sp-info-hotel {\n  margin: 16.5px 0px 12px 0px;\n  padding-top: 16.5px;\n}\n.content-carcombo .sp-ci-co {\n  margin: 6.5px 0px 9px 0px;\n}\n.content-carcombo .sp-room-info {\n  margin: 7.5px 0px 16px 0px;\n}\n.content-carcombo .sp-room-penalty {\n  margin: 16px 0px 0px 0px;\n}\n.content-carcombo .div-date {\n  border-right: solid 1px #cdcdcd;\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 4px;\n  padding-top: 0;\n  letter-spacing: -0.4px;\n}\n.content-carcombo .div-label-small {\n  font-size: 12px;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n.content-carcombo .div-date-cout {\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 4px;\n  padding-top: 0;\n}\n.content-carcombo .p-right-4 {\n  padding-right: 4px;\n}\n.content-carcombo .div-right-float-price {\n  font-size: 14px;\n  color: #003c71;\n  font-weight: normal;\n  float: right;\n  padding-right: 4px;\n}\n.content-carcombo .div-relative {\n  position: relative;\n  padding-top: 4px;\n}\n.content-carcombo .div-relative .button-float-right {\n  position: absolute;\n  top: 4px;\n  right: 0;\n}\n.content-carcombo .label-price-discount {\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.content-carcombo .room-info {\n  padding-top: 8px;\n}\n.content-carcombo .btn-change {\n  border-radius: 4px !important;\n  border: solid 1px #ec971f;\n  color: #ec971f;\n  font-size: 14px !important;\n  background: #ffffff;\n  height: 30px !important;\n  width: 88px;\n  margin: 0;\n}\n.content-carcombo .btn-apply {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.content-carcombo .total-price {\n  text-align: right;\n  font-size: 24px;\n  color: #26bed6;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n.content-carcombo .div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.content-carcombo .div-footer {\n  background-color: #ffffff;\n  text-align: center;\n}\n.div-footer .button-footer {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 91%;\n  height: 44px;\n  margin: 12px 16px 9px 16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.text-change {\n  font-weight: 300;\n  color: #26bed6;\n  font-size: 14px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 12px;\n  color: #ec971f;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n}\n.placeline {\n  content: \"\";\n  position: absolute;\n  height: 24%;\n  width: 1px;\n  top: 50%;\n  border: dotted 1px #bdbdbd;\n  left: 3px;\n}\n.placepoint {\n  position: absolute;\n  top: 46%;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #CCCCCC;\n}\n.placediv {\n  margin-left: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (min-width: 320px) and (min-height: 360px) {\n  .divheight {\n    height: 140px;\n  }\n}\n@media (min-width: 360px) and (min-height: 375px) {\n  .divheight {\n    height: 140px;\n  }\n}\n@media (min-width: 375px) and (min-height: 384px) {\n  .divheight {\n    height: 155px;\n  }\n}\n@media (min-width: 384px) and (min-height: 412px) {\n  .divheight {\n    height: 160px;\n  }\n}\n@media (min-width: 412px) and (min-height: 480px) {\n  .divheight {\n    height: 155px;\n  }\n}\n@media (min-width: 412) and (min-height: 876px) {\n  .divheight {\n    height: 160px;\n  }\n}\n::ng-deep .rcls-alert-carcombo .cls-alert-flightcomboreview {\n  align-items: center !important;\n  --max-width: 280px;\n  text-align: center;\n}\n::ng-deep .cls-alert-carcombo .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n::ng-deep .cls-alert-carcombo .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block;\n}\n::ng-deep .sc-ion-alert-ios-h.cls-alert-carcombo {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  width: 100% !important;\n  display: block !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios.alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n.text-point {\n  font-size: 14px;\n  color: #222222;\n}\n.num-point {\n  font-size: 12px;\n  color: #828282;\n}\n.text-điscount {\n  font-size: 14px;\n}\n.cls-col {\n  align-self: center;\n}\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n}\n.cls-mt10 {\n  margin-top: -10px;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 7px;\n  background-color: #f2f2f2 !important;\n}\n.cls-ml5 {\n  margin-left: 5px;\n}\n.text-promotion {\n  font-size: 14px;\n  color: #828282;\n}\n.div-voucher .div-flex {\n  display: flex;\n}\n.div-voucher .div-flex .div-first {\n  width: 160px;\n}\n.div-voucher .div-flex .div-first .div-checkpoint {\n  display: flex;\n}\n.div-voucher .div-flex .div-first .check-point {\n  margin-top: 10px;\n  width: 12px;\n  height: 12px;\n}\n.div-voucher .div-flex .div-first .cls-ml8 {\n  margin-left: 8px;\n}\n.div-voucher .div-flex .div-first .div-disabled {\n  opacity: 0.5;\n}\n.div-voucher .div-flex .div-col-split {\n  width: 1px;\n  border-left: solid 0.5px #bdbdbd;\n  margin: 8px 0;\n}\n.div-voucher .div-flex .text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-voucher .div-flex .num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.div-voucher .div-flex .div-promotion {\n  margin-left: 8px;\n  align-self: center;\n}\n.cls-mt10 {\n  margin-top: 10px;\n}\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  padding: 8px 0;\n  font-weight: 300;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.text-width-190 {\n  width: 190px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap !important;\n}\n.margin-right-5 {\n  margin-right: 5px;\n}\n.line-blue {\n  color: #26bed6;\n  right: 16px;\n  position: absolute;\n  margin-top: 5px;\n}\n.div-flex {\n  display: flex;\n}\n.text-suggest {\n  line-height: 1.4;\n  font-size: 14px;\n}\n.row-suggest {\n  border-radius: 4px;\n  background-color: #feeec7;\n  padding: 12px 8px 8px 8px;\n}\n.mt-3 {\n  margin-top: 3px;\n}\n.color-red {\n  color: #e52822;\n}\n.color-blue {\n  color: #2f80ed;\n}\n.text-weight-suggest {\n  font-weight: bold;\n}\n.text-underline {\n  text-decoration: underline;\n}\n.text-room {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 290px;\n}\n.color-blue {\n  color: #26bed6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tYm9jYXJuZXcvY29tYm9jYXJuZXcucGFnZS5zY3NzIiwiL1VzZXJzL2l0ZGV2L0RvY3VtZW50cy9EZXZlbG9wL09saXZpYV9pT1Mvb2xpdmlhX2lvcyBob3RmaXggMi45Ljcvc3JjL2FwcC9jb21ib2Nhcm5ldy9jb21ib2Nhcm5ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBREVKO0FDQUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FER0Y7QUNBQTtFQUNJLGFBQUE7QURHSjtBQ0RJO0VBQ0ksVUFBQTtBREdSO0FDREk7RUFDSSxrQkFBQTtBREdSO0FDREk7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBREdSO0FDREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QURHUjtBQ0RJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBREdSO0FDREk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtBREdSO0FDREk7RUFDSSxnQkFBQTtBREdSO0FDREk7RUFDSSxnQkFBQTtBREdSO0FDREk7RUFDSSxnQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtBREdSO0FDREk7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURHUjtBQ0RRO0VBQ0ksWUFBQTtBREdaO0FDRVE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FEQVo7QUNFUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURBWjtBQ0lJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QURGUjtBQ0lRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBREZaO0FDSVE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FERlo7QUNPUTtFQUNJLGVBQUE7RUFDQSx3QkFBQTtLQUFBLHFCQUFBO1VBQUEsZ0JBQUE7QURMWjtBQ1VNO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEUlY7QUNVTTtFQUNJLFlBQUE7QURSVjtBQ1VNO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEUlY7QUNXSTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtBRFRSO0FDV0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0FEVFI7QUNXSTtFQUNJLHlCQUFBO0FEVFI7QUNXSTtFQUNJLDBCQUFBO0FEVFI7QUNXSTtFQUNJLHdCQUFBO0FEVFI7QUNZSTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QURWUjtBQ1lJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRFZSO0FDWUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURWUjtBQ1lJO0VBQ0ksa0JBQUE7QURWUjtBQ1lJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRFZSO0FDWUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FEVlI7QUNZUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QURWWjtBQ2dCSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRGRSO0FDaUJJO0VBQ0ksZ0JBQUE7QURmUjtBQ2lCSTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QURmUjtBQ2lCSTtFQUVJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FEaEJSO0FDa0JJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QURoQlI7QUNtQkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURqQlI7QUNtQkk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FEakJSO0FDc0JJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FEcEJSO0FDdUJBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FEckJKO0FDdUJBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRHJCSjtBQ3VCQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURyQko7QUN1QkE7RUFDSSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRHBCTjtBQ3NCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEbkJKO0FDcUJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEbEJKO0FDb0JFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURqQko7QUNtQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURoQko7QUNrQkE7RUFFSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBRGhCSjtBQ2tCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBRGZKO0FDaUJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FEZEo7QUNnQkE7RUFFSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBRGRKO0FDa0JJO0VBRko7SUFHUSxhQUFBO0VEZE47QUFDRjtBQ2VJO0VBTEo7SUFNUSxhQUFBO0VEWk47QUFDRjtBQ2FJO0VBUko7SUFTUSxhQUFBO0VEVk47QUFDRjtBQ1dJO0VBWEo7SUFZUSxhQUFBO0VEUk47QUFDRjtBQ1NJO0VBZEo7SUFlUSxhQUFBO0VETk47QUFDRjtBQ09JO0VBakJKO0lBa0JRLGFBQUE7RURKTjtBQUNGO0FDT0k7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURKUjtBQ09JO0VBQ00sOEZBQUE7RUFDQSw2QkFBQTtFQUVBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtLQUFBLGlDQUFBO01BQUEsZ0NBQUE7VUFBQSw0QkFBQTtBRE5WO0FDU007RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBRFBSO0FDU007RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QURQUjtBQ1NNO0VBQ00sY0FBQTtBRFBaO0FDU1E7RUFDSSxzREFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBRFBaO0FDVVE7RUFDSTtJQUNFLGtCQUFBO0VEUlo7QUFDRjtBQ1VNO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBRFJSO0FDVU07RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRFJSO0FDVU07RUFDRSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRFJSO0FDV007RUFDRTtJQUNFLGtCQUFBO0VEVFI7QUFDRjtBQ2FJO0VBRUYsZUFBQTtFQUNBLGNBQUE7QURYRjtBQ2FBO0VBRUUsZUFBQTtFQUNBLGNBQUE7QURYRjtBQ2FBO0VBRUUsZUFBQTtBRFhGO0FDYUE7RUFFRSxrQkFBQTtBRFhGO0FDYUE7RUFFRSwrQkFBQTtBRFhGO0FDYUE7RUFFRSxpQkFBQTtBRFhGO0FDYUE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FEWEY7QUNhQTtFQUVFLGdCQUFBO0FEWEY7QUNhQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0FEWEY7QUNjSTtFQUNFLGFBQUE7QURYTjtBQ2FNO0VBQ0ksWUFBQTtBRFhWO0FDYVU7RUFDRSxhQUFBO0FEWFo7QUNlVTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURiWjtBQ2VVO0VBRUUsZ0JBQUE7QURkWjtBQ2dCVTtFQUNFLFlBQUE7QURkWjtBQ2tCTTtFQUNFLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QURoQlI7QUNtQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEakJSO0FDbUJNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRGpCUjtBQ29CTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QURsQlI7QUN1QkU7RUFDSSxnQkFBQTtBRHBCTjtBQ3NCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEbkJKO0FDcUJFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QURsQko7QUNvQkU7RUFDRSxZQUFBO0FEakJKO0FDbUJBO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBRGpCRjtBQ21CQTtFQUNJLGlCQUFBO0FEaEJKO0FDa0JFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURmSjtBQ2lCRTtFQUNFLGFBQUE7QURkSjtBQ2dCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBRGJKO0FDZ0JFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FEYko7QUNlRTtFQUNFLGVBQUE7QURaSjtBQ2NFO0VBQ0csY0FBQTtBRFhMO0FDYUU7RUFDRSxjQUFBO0FEVko7QUNZRTtFQUNFLGlCQUFBO0FEVEo7QUNXRTtFQUNFLDBCQUFBO0FEUko7QUNVQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURQRjtBQ1NBO0VBQ0UseUJBQUE7QURORiIsImZpbGUiOiJzcmMvYXBwL2NvbWJvY2FybmV3L2NvbWJvY2FybmV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWNhcmNvbWJvIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2x1bW5zOiAjMjIyMjIyO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRleHQtdGhpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4LjlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC10aGluLWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC50ZXh0LXRheC1pbmNsdWRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGVudC1jYXJjb21ibyAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5wLXRvcC0xNSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTYge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTIge1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmYtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmNvbC1zdGVwIHtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1jYXJjb21ibyAuY29sLXN0ZXAgaW1nIHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtdGl0bGUgLmNvbWJvLXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmNhcmNvbWJvLWhvdGVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwNHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW1nLWhvdGVsLWF2YXRhciB7XG4gIG1pbi13aWR0aDogMTA0cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMTJweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAubmFtZS1ob3RlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sdW1uczogIzIyMjIyMjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtYWRkcmVzcyAuZGl2LWxvY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtYWRkcmVzcyAuaW1nLWxvY2F0aW9uIHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1hZGRyZXNzIC50ZXh0LWFkZHJlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LXNwbGl0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1pbmZvLWhvdGVsIHtcbiAgbWFyZ2luOiAxNi41cHggMHB4IDEycHggMHB4O1xuICBwYWRkaW5nLXRvcDogMTYuNXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnNwLWNpLWNvIHtcbiAgbWFyZ2luOiA2LjVweCAwcHggOXB4IDBweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1yb29tLWluZm8ge1xuICBtYXJnaW46IDcuNXB4IDBweCAxNnB4IDBweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1yb29tLXBlbmFsdHkge1xuICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LWRhdGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtbGFiZWwtc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtZGF0ZS1jb3V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAucC1yaWdodC00IHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1yaWdodC1mbG9hdC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtcmVsYXRpdmUgLmJ1dHRvbi1mbG9hdC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmxhYmVsLXByaWNlLWRpc2NvdW50IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAucm9vbS1pbmZvIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5idG4tY2hhbmdlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlYzk3MWY7XG4gIGNvbG9yOiAjZWM5NzFmO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OHB4O1xuICBtYXJnaW46IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAuYnRuLWFwcGx5IHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRvdGFsLXByaWNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXYtZm9vdGVyIC5idXR0b24tZm9vdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkxJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW46IDEycHggMTZweCA5cHggMTZweDtcbn1cblxuLnRleHQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1pbmZvY2FyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtY2hhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uYnRubm9uZXN1Y2Nlc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xuICBjb2xvcjogIzQ0N2EwMDtcbn1cblxuLnBsYWNlbGluZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNCU7XG4gIHdpZHRoOiAxcHg7XG4gIHRvcDogNTAlO1xuICBib3JkZXI6IGRvdHRlZCAxcHggI2JkYmRiZDtcbiAgbGVmdDogM3B4O1xufVxuXG4ucGxhY2Vwb2ludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NiU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG59XG5cbi5wbGFjZWRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM2MHB4KSB7XG4gIC5kaXZoZWlnaHQge1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtaW4taGVpZ2h0OiAzNzVweCkge1xuICAuZGl2aGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogMzg0cHgpIHtcbiAgLmRpdmhlaWdodCB7XG4gICAgaGVpZ2h0OiAxNTVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQxMnB4KSB7XG4gIC5kaXZoZWlnaHQge1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtaW4taGVpZ2h0OiA0ODBweCkge1xuICAuZGl2aGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE1NXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDEyKSBhbmQgKG1pbi1oZWlnaHQ6IDg3NnB4KSB7XG4gIC5kaXZoZWlnaHQge1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5yY2xzLWFsZXJ0LWNhcmNvbWJvIC5jbHMtYWxlcnQtZmxpZ2h0Y29tYm9yZXZpZXcge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1jYXJjb21ibyB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCkge1xuICA6Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcy5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG5cbi50ZXh0LXBvaW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLm51bS1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi50ZXh0LcSRaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNscy1jb2wge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG5cbi5jbHMtbXQxMCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG4uY2xzLW1sNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0LXByb21vdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IHtcbiAgd2lkdGg6IDE2MHB4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5kaXYtY2hlY2twb2ludCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmNoZWNrLXBvaW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuY2xzLW1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmRpdi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1jb2wtc3BsaXQge1xuICB3aWR0aDogMXB4O1xuICBib3JkZXItbGVmdDogc29saWQgMC41cHggI2JkYmRiZDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLnRleHQtcG9pbnQge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAubnVtLXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1wcm9tb3Rpb24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jbHMtbXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kZXBhcnQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi50ZXh0LXdpZHRoLTE5MCB7XG4gIHdpZHRoOiAxOTBweDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tcmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubGluZS1ibHVlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRleHQtc3VnZ2VzdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJvdy1zdWdnZXN0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xuICBwYWRkaW5nOiAxMnB4IDhweCA4cHggOHB4O1xufVxuXG4ubXQtMyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMmY4MGVkO1xufVxuXG4udGV4dC13ZWlnaHQtc3VnZ2VzdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC11bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRleHQtcm9vbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMjkwcHg7XG59XG5cbi5jb2xvci1ibHVlIHtcbiAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbn0iLCIudGV4dC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaGVhZGVyLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtY2FyY29tYm97XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LXJlZ3VsYXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbHVtbnM6ICMyMjIyMjI7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aGlue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTguOXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgY29sb3I6IzRmNGY0ZjtcclxuICAgIH1cclxuICAgIC50ZXh0LXRoaW4taXRhbGlje1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1uYW1le1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGF4LWluY2x1ZGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xNXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC04e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5mLWJvbGR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY29sLXN0ZXB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi10aXRsZXtcclxuICAgICAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tYm8tc3ViLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1OTIzMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJjb21iby1ob3RlbHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgLmltZy1ob3RlbC1hdmF0YXJ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTA0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm8taG90ZWx7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMTJweDtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUtaG90ZWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBjb2x1bW5zOiAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYtYWRkcmVzc3tcclxuXHJcbiAgICAgIC5kaXYtbG9jYXRpb257XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1sb2NhdGlvbntcclxuICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1hZGRyZXNze1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgICAuZGl2LXNwbGl0e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICAgIC5zcC1pbmZvLWhvdGVse1xyXG4gICAgICAgIG1hcmdpbjogMTYuNXB4IDBweCAxMnB4IDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTYuNXB4O1xyXG4gICAgfVxyXG4gICAgLnNwLWNpLWNve1xyXG4gICAgICAgIG1hcmdpbjogNi41cHggMHB4IDlweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Atcm9vbS1pbmZve1xyXG4gICAgICAgIG1hcmdpbjogNy41cHggMHB4IDE2cHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnNwLXJvb20tcGVuYWx0eXtcclxuICAgICAgICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1kYXRlIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIH1cclxuICAgIC5kaXYtbGFiZWwtc21hbGx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1kYXRlLWNvdXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICB9XHJcbiAgICAucC1yaWdodC00e1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIC5kaXYtcmlnaHQtZmxvYXQtcHJpY2V7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICAgIC5kaXYtcmVsYXRpdmV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcblxyXG4gICAgICAgIC5idXR0b24tZmxvYXQtcmlnaHR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubGFiZWwtcHJpY2UtZGlzY291bnR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHhcclxuICAgIH1cclxuXHJcbiAgICAucm9vbS1pbmZve1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNoYW5nZXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWM5NzFmO1xyXG4gICAgICAgIGNvbG9yOiAjZWM5NzFmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hcHBseVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50b3RhbC1wcmljZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5kaXYtc3BsaXQtcGFuZWx7XHJcbiAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1mb290ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgIH1cclxuICAgIFxyXG59XHJcbi5kaXYtZm9vdGVye1xyXG4gICAgLmJ1dHRvbi1mb290ZXJcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTElO1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBtYXJnaW46IDEycHggMTZweCA5cHggMTZweDtcclxuICAgIH1cclxufVxyXG4udGV4dC1sb2NhdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi50ZXh0LWluZm9jYXJcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuLnRleHQtY2hhbmdlXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweFxyXG59XHJcbi5jb21iby1kZXBhcnR1cmUtdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgfVxyXG4gIC5mbGlnaHQtcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjZWM5NzFmO1xyXG4gIH1cclxuICAudGV4dC1yb29tLXByaWNlLW90YXtcclxuICAgIGNvbG9yOiM4MjgyODI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuLmJ0bm5vbmVzdWNjZXNzXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzQ0N2EwMDtcclxuICAgIGNvbG9yOiAjNDQ3YTAwO1xyXG59XHJcbi5wbGFjZWxpbmVcclxueyAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDI0JTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJvcmRlcjogZG90dGVkIDFweCAjYmRiZGJkO1xyXG4gICAgbGVmdDogM3B4O1xyXG59XHJcbi5wbGFjZXBvaW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0NiU7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG59XHJcbi5wbGFjZWRpdlxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmRpdmhlaWdodFxyXG57XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDozMjBweCkgYW5kIChtaW4taGVpZ2h0OiAzNjBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDozNjBweCkgYW5kIChtaW4taGVpZ2h0OiAzNzVweCkge1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogMzg0cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1pbi1oZWlnaHQgOiA0MTJweCkge1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWluLWhlaWdodDogNDgwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQxMikgYW5kIChtaW4taGVpZ2h0OiA4NzZweCkge1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICB9XHJcbn1cclxuOjpuZy1kZWVwIHtcclxuICAgIC5yY2xzLWFsZXJ0LWNhcmNvbWJvICAuY2xzLWFsZXJ0LWZsaWdodGNvbWJvcmV2aWV3IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNscy1hbGVydC1jYXJjb21ibyAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjLWlvbi1hbGVydC1pb3MtaC5jbHMtYWxlcnQtY2FyY29tYm8gIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KXtcclxuICAgICAgICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcy5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAudGV4dC1wb2ludFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbi5udW0tcG9pbnRcclxue1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG4udGV4dC3EkWlzY291bnRcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uY2xzLWNvbFxyXG57XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5pb24taXRlbVxyXG57XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxufVxyXG4uY2xzLW10MTBcclxue1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5jbHMtaHJcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG4uY2xzLW1sNVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4udGV4dC1wcm9tb3Rpb25cclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG4uZGl2LXZvdWNoZXJ7XHJcbiAgICAuZGl2LWZsZXh7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICAgIC5kaXYtZmlyc3R7XHJcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgXHJcbiAgICAgICAgICAuZGl2LWNoZWNrcG9pbnR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrLXBvaW50e1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNscy1tbDhcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXYtZGlzYWJsZWR7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZGl2LWNvbC1zcGxpdHtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjVweCAjYmRiZGJkO1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC50ZXh0LXBvaW50e1xyXG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5udW0tcG9pbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5kaXYtcHJvbW90aW9ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuICAuY2xzLW10MTB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5kZXBhcnQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICB9XHJcbiAgLnRleHQtd2lkdGgtMTkwe1xyXG4gICAgd2lkdGg6IDE5MHB4O1xyXG4gIH1cclxuLnRleHQtcFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hcmdpbi1yaWdodC01e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5saW5lLWJsdWV7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4XHJcbiAgfVxyXG4gIC5kaXYtZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC50ZXh0LXN1Z2dlc3R7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAucm93LXN1Z2dlc3R7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xyXG4gICAgcGFkZGluZzogMTJweCA4cHggOHB4IDhweDtcclxuICB9XHJcbiAgLm10LTN7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgfVxyXG4gIC5jb2xvci1yZWR7XHJcbiAgICAgY29sb3I6ICNlNTI4MjI7XHJcbiAgfVxyXG4gIC5jb2xvci1ibHVle1xyXG4gICAgY29sb3I6ICMyZjgwZWQ7XHJcbiAgfVxyXG4gIC50ZXh0LXdlaWdodC1zdWdnZXN0e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC50ZXh0LXVuZGVybGluZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi50ZXh0LXJvb217XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiAyOTBweDtcclxufVxyXG4uY29sb3ItYmx1ZXtcclxuICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50XHJcbn1cclxuIl19 */"
=======
module.exports = "@charset \"UTF-8\";\n.text-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0;\n}\n.header-text {\n  text-align: center;\n  align-self: center;\n}\n.content-carcombo {\n  padding: 16px;\n}\n.content-carcombo .no-padding {\n  padding: 0;\n}\n.content-carcombo .align-center {\n  text-align: center;\n}\n.content-carcombo .text-regular {\n  font-size: 14px;\n  -moz-columns: #222222;\n       columns: #222222;\n}\n.content-carcombo .text-thin {\n  font-size: 14px;\n  line-height: 18.9px;\n  letter-spacing: -0.4px;\n  color: #4f4f4f;\n}\n.content-carcombo .text-thin-italic {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.content-carcombo .text-name {\n  margin-top: 17px;\n  margin-bottom: 0;\n}\n.content-carcombo .text-tax-include {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  margin-top: 2px;\n  margin-bottom: 0;\n}\n.content-carcombo .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.content-carcombo .p-top-16 {\n  padding-top: 15px;\n}\n.content-carcombo .p-top-15 {\n  padding-top: 15px;\n}\n.content-carcombo .p-top-8 {\n  padding-top: 8px;\n}\n.content-carcombo .p-top-6 {\n  padding-top: 6px;\n}\n.content-carcombo .p-top-2 {\n  padding-top: 2px;\n}\n.content-carcombo .f-bold {\n  font-weight: bold;\n}\n.content-carcombo .col-step {\n  line-height: 11px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n.content-carcombo .col-step img {\n  height: 16px;\n}\n.content-carcombo .div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222222;\n}\n.content-carcombo .div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.content-carcombo .carcombo-hotel {\n  position: relative;\n  height: 104px;\n  padding-top: 15px;\n}\n.content-carcombo .carcombo-hotel .img-hotel-avatar {\n  min-width: 104px;\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n  float: left;\n  position: absolute;\n}\n.content-carcombo .carcombo-hotel .info-hotel {\n  position: relative;\n  padding-left: 112px;\n}\n.content-carcombo .carcombo-hotel .info-hotel .div-address {\n  padding-top: 13px;\n}\n.content-carcombo .carcombo-hotel .info-hotel .div-address .div-location {\n  position: absolute;\n  margin-top: -1px;\n}\n.content-carcombo .carcombo-hotel .info-hotel .div-address .img-location {\n  height: 12px;\n}\n.content-carcombo .carcombo-hotel .info-hotel .div-address .text-address {\n  position: relative;\n  line-height: 16px;\n  padding-left: 15px;\n}\n.content-carcombo .carcombo-hotel .name-hotel {\n  font-size: 14px;\n  -moz-columns: #222222;\n       columns: #222222;\n}\n.content-carcombo .div-split {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n}\n.content-carcombo .sp-info-hotel {\n  margin: 16.5px 0px 12px 0px;\n  padding-top: 16.5px;\n}\n.content-carcombo .sp-ci-co {\n  margin: 6.5px 0px 9px 0px;\n}\n.content-carcombo .sp-room-info {\n  margin: 7.5px 0px 16px 0px;\n}\n.content-carcombo .sp-room-penalty {\n  margin: 16px 0px 0px 0px;\n}\n.content-carcombo .div-date {\n  border-right: solid 1px #cdcdcd;\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 4px;\n  padding-top: 0;\n  letter-spacing: -0.4px;\n}\n.content-carcombo .div-label-small {\n  font-size: 12px;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n.content-carcombo .div-date-cout {\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 4px;\n  padding-top: 0;\n}\n.content-carcombo .p-right-4 {\n  padding-right: 4px;\n}\n.content-carcombo .div-right-float-price {\n  font-size: 14px;\n  color: #003c71;\n  font-weight: normal;\n  float: right;\n  padding-right: 4px;\n}\n.content-carcombo .div-relative {\n  position: relative;\n  padding-top: 4px;\n}\n.content-carcombo .div-relative .button-float-right {\n  position: absolute;\n  top: 4px;\n  right: 0;\n}\n.content-carcombo .label-price-discount {\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 14px;\n  margin-left: 5px;\n}\n.content-carcombo .room-info {\n  padding-top: 8px;\n}\n.content-carcombo .btn-change {\n  border-radius: 4px !important;\n  border: solid 1px #ec971f;\n  color: #ec971f;\n  font-size: 14px !important;\n  background: #ffffff;\n  height: 30px !important;\n  width: 88px;\n  margin: 0;\n}\n.content-carcombo .btn-apply {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.content-carcombo .total-price {\n  text-align: right;\n  font-size: 24px;\n  color: #26bed6;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n.content-carcombo .div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.content-carcombo .div-footer {\n  background-color: #ffffff;\n  text-align: center;\n}\n.div-footer .button-footer {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 91%;\n  height: 44px;\n  margin: 12px 16px 9px 16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.text-change {\n  font-weight: 300;\n  color: #26bed6;\n  font-size: 14px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 12px;\n  color: #ec971f;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n}\n.placeline {\n  content: \"\";\n  position: absolute;\n  height: 24%;\n  width: 1px;\n  top: 50%;\n  border: dotted 1px #bdbdbd;\n  left: 3px;\n}\n.placepoint {\n  position: absolute;\n  top: 46%;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #CCCCCC;\n}\n.placediv {\n  margin-left: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (min-width: 320px) and (min-height: 360px) {\n  .divheight {\n    height: 140px;\n  }\n}\n@media (min-width: 360px) and (min-height: 375px) {\n  .divheight {\n    height: 140px;\n  }\n}\n@media (min-width: 375px) and (min-height: 384px) {\n  .divheight {\n    height: 155px;\n  }\n}\n@media (min-width: 384px) and (min-height: 412px) {\n  .divheight {\n    height: 160px;\n  }\n}\n@media (min-width: 412px) and (min-height: 480px) {\n  .divheight {\n    height: 155px;\n  }\n}\n@media (min-width: 412) and (min-height: 876px) {\n  .divheight {\n    height: 160px;\n  }\n}\n::ng-deep .rcls-alert-carcombo .cls-alert-flightcomboreview {\n  align-items: center !important;\n  --max-width: 280px;\n  text-align: center;\n}\n::ng-deep .cls-alert-carcombo .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n::ng-deep .cls-alert-carcombo .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block;\n}\n::ng-deep .sc-ion-alert-ios-h.cls-alert-carcombo {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  width: 100% !important;\n  display: block !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios.alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n.text-point {\n  font-size: 14px;\n  color: #222222;\n}\n.num-point {\n  font-size: 12px;\n  color: #828282;\n}\n.text-điscount {\n  font-size: 14px;\n}\n.cls-col {\n  align-self: center;\n}\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n}\n.cls-mt10 {\n  margin-top: -10px;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 7px;\n  background-color: #f2f2f2 !important;\n}\n.cls-ml5 {\n  margin-left: 5px;\n}\n.text-promotion {\n  font-size: 14px;\n  color: #828282;\n}\n.div-voucher .div-flex {\n  display: flex;\n}\n.div-voucher .div-flex .div-first {\n  width: 160px;\n}\n.div-voucher .div-flex .div-first .div-checkpoint {\n  display: flex;\n}\n.div-voucher .div-flex .div-first .check-point {\n  margin-top: 10px;\n  width: 12px;\n  height: 12px;\n}\n.div-voucher .div-flex .div-first .cls-ml8 {\n  margin-left: 8px;\n}\n.div-voucher .div-flex .div-first .div-disabled {\n  opacity: 0.5;\n}\n.div-voucher .div-flex .div-col-split {\n  width: 1px;\n  border-left: solid 0.5px #bdbdbd;\n  margin: 8px 0;\n}\n.div-voucher .div-flex .text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-voucher .div-flex .num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.div-voucher .div-flex .div-promotion {\n  margin-left: 8px;\n  align-self: center;\n}\n.cls-mt10 {\n  margin-top: 10px;\n}\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  padding: 8px 0;\n  font-weight: 300;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.text-width-190 {\n  width: 190px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap !important;\n}\n.margin-right-5 {\n  margin-right: 5px;\n}\n.line-blue {\n  color: #26bed6;\n  right: 16px;\n  position: absolute;\n  margin-top: 5px;\n}\n.div-flex {\n  display: flex;\n}\n.text-suggest {\n  line-height: 1.4;\n  font-size: 14px;\n}\n.row-suggest {\n  border-radius: 4px;\n  background-color: #feeec7;\n  padding: 12px 8px 8px 8px;\n}\n.mt-3 {\n  margin-top: 3px;\n}\n.color-red {\n  color: #e52822;\n}\n.color-blue {\n  color: #2f80ed;\n}\n.text-weight-suggest {\n  font-weight: bold;\n}\n.text-underline {\n  text-decoration: underline;\n}\n.text-room {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 290px;\n}\n.color-blue {\n  color: #26bed6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tYm9jYXJuZXcvY29tYm9jYXJuZXcucGFnZS5zY3NzIiwiL1VzZXJzL2Rldi1pdml2dS9Eb2N1bWVudHMvRGV2ZWxvcC9vbGl2aWFfaW9zL3NyYy9hcHAvY29tYm9jYXJuZXcvY29tYm9jYXJuZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QURFSjtBQ0FBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBREdGO0FDQUE7RUFDSSxhQUFBO0FER0o7QUNESTtFQUNJLFVBQUE7QURHUjtBQ0RJO0VBQ0ksa0JBQUE7QURHUjtBQ0RJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7QURHUjtBQ0RJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBREdSO0FDREk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FER1I7QUNESTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURHUjtBQ0RJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FER1I7QUNESTtFQUNJLGlCQUFBO0FER1I7QUNESTtFQUNJLGlCQUFBO0FER1I7QUNESTtFQUNJLGdCQUFBO0FER1I7QUNESTtFQUNJLGdCQUFBO0FER1I7QUNESTtFQUNJLGdCQUFBO0FER1I7QUNESTtFQUNJLGlCQUFBO0FER1I7QUNESTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBREdSO0FDRFE7RUFDSSxZQUFBO0FER1o7QUNFUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURBWjtBQ0VRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREFaO0FDSUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBREZSO0FDSVE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FERlo7QUNJUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QURGWjtBQ0lZO0VBQ0ksaUJBQUE7QURGaEI7QUNJZ0I7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FERnBCO0FDSWdCO0VBQ0ksWUFBQTtBREZwQjtBQ0lnQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBREZwQjtBQ09RO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7QURMWjtBQ1FJO0VBQ0ksZ0NBQUE7RUFDQSxZQUFBO0FETlI7QUNRSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUROUjtBQ1FJO0VBQ0kseUJBQUE7QUROUjtBQ1FJO0VBQ0ksMEJBQUE7QUROUjtBQ1FJO0VBQ0ksd0JBQUE7QUROUjtBQ1NJO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRFBSO0FDU0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FEUFI7QUNTSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRFBSO0FDU0k7RUFDSSxrQkFBQTtBRFBSO0FDU0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEUFI7QUNTSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QURQUjtBQ1NRO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtBRFBaO0FDYUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURYUjtBQ2NJO0VBQ0ksZ0JBQUE7QURaUjtBQ2NJO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRFpSO0FDY0k7RUFFSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBRGJSO0FDZUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBRGJSO0FDZ0JJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEZFI7QUNnQkk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FEZFI7QUNtQkk7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QURqQlI7QUNvQkE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QURsQko7QUNvQkE7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEbEJKO0FDb0JBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGxCSjtBQ29CQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FEakJOO0FDbUJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QURoQko7QUNrQkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURmSjtBQ2lCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEZEo7QUNnQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURiSjtBQ2VBO0VBRUksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QURiSjtBQ2VBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0FEWko7QUNjQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBRFhKO0FDYUE7RUFFSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBRFhKO0FDZUk7RUFGSjtJQUdRLGFBQUE7RURYTjtBQUNGO0FDWUk7RUFMSjtJQU1RLGFBQUE7RURUTjtBQUNGO0FDVUk7RUFSSjtJQVNRLGFBQUE7RURQTjtBQUNGO0FDUUk7RUFYSjtJQVlRLGFBQUE7RURMTjtBQUNGO0FDTUk7RUFkSjtJQWVRLGFBQUE7RURITjtBQUNGO0FDSUk7RUFqQko7SUFrQlEsYUFBQTtFREROO0FBQ0Y7QUNJSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRERSO0FDSUk7RUFDTSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0dBQUEsZ0NBQUE7T0FBQSw0QkFBQTtBREhWO0FDTU07RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBREpSO0FDTU07RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QURKUjtBQ01NO0VBQ00sY0FBQTtBREpaO0FDTVE7RUFDSSxzREFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBREpaO0FDT1E7RUFDSTtJQUNFLGtCQUFBO0VETFo7QUFDRjtBQ09NO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBRExSO0FDT007RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRExSO0FDT007RUFDRSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRExSO0FDUU07RUFDRTtJQUNFLGtCQUFBO0VETlI7QUFDRjtBQ1VJO0VBRUYsZUFBQTtFQUNBLGNBQUE7QURSRjtBQ1VBO0VBRUUsZUFBQTtFQUNBLGNBQUE7QURSRjtBQ1VBO0VBRUUsZUFBQTtBRFJGO0FDVUE7RUFFRSxrQkFBQTtBRFJGO0FDVUE7RUFFRSwrQkFBQTtBRFJGO0FDVUE7RUFFRSxpQkFBQTtBRFJGO0FDVUE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FEUkY7QUNVQTtFQUVFLGdCQUFBO0FEUkY7QUNVQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0FEUkY7QUNXSTtFQUNFLGFBQUE7QURSTjtBQ1VNO0VBQ0ksWUFBQTtBRFJWO0FDVVU7RUFDRSxhQUFBO0FEUlo7QUNZVTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURWWjtBQ1lVO0VBRUUsZ0JBQUE7QURYWjtBQ2FVO0VBQ0UsWUFBQTtBRFhaO0FDZU07RUFDRSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FEYlI7QUNnQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEZFI7QUNnQk07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEZFI7QUNpQk07RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FEZlI7QUNvQkU7RUFDSSxnQkFBQTtBRGpCTjtBQ21CRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEaEJKO0FDa0JFO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QURmSjtBQ2lCRTtFQUNFLFlBQUE7QURkSjtBQ2dCQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QURkRjtBQ2dCQTtFQUNJLGlCQUFBO0FEYko7QUNlRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEWko7QUNjRTtFQUNFLGFBQUE7QURYSjtBQ2FFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FEVko7QUNhRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBRFZKO0FDWUU7RUFDRSxlQUFBO0FEVEo7QUNXRTtFQUNHLGNBQUE7QURSTDtBQ1VFO0VBQ0UsY0FBQTtBRFBKO0FDU0U7RUFDRSxpQkFBQTtBRE5KO0FDUUU7RUFDRSwwQkFBQTtBRExKO0FDT0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FESkY7QUNNQTtFQUNFLHlCQUFBO0FESEYiLCJmaWxlIjoic3JjL2FwcC9jb21ib2Nhcm5ldy9jb21ib2Nhcm5ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY29udGVudC1jYXJjb21ibyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAuYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRleHQtcmVndWxhciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sdW1uczogIzIyMjIyMjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC50ZXh0LXRoaW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOC45cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRleHQtdGhpbi1pdGFsaWMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRleHQtbmFtZSB7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC10YXgtaW5jbHVkZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAucC10b3AtMTUge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5wLXRvcC02IHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5wLXRvcC0yIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5mLWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jb2wtc3RlcCB7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmNvbC1zdGVwIGltZyB7XG4gIGhlaWdodDogMTZweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtdGl0bGUgLmNvbWJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LXRpdGxlIC5jb21iby1zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2Y1OTIzMztcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuY2FyY29tYm8taG90ZWwgLmltZy1ob3RlbC1hdmF0YXIge1xuICBtaW4td2lkdGg6IDEwNHB4O1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY29udGVudC1jYXJjb21ibyAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTEycHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwgLmRpdi1hZGRyZXNzIHtcbiAgcGFkZGluZy10b3A6IDEzcHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwgLmRpdi1hZGRyZXNzIC5kaXYtbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwgLmRpdi1hZGRyZXNzIC5pbWctbG9jYXRpb24ge1xuICBoZWlnaHQ6IDEycHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuY2FyY29tYm8taG90ZWwgLmluZm8taG90ZWwgLmRpdi1hZGRyZXNzIC50ZXh0LWFkZHJlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuY2FyY29tYm8taG90ZWwgLm5hbWUtaG90ZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbHVtbnM6ICMyMjIyMjI7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LXNwbGl0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1pbmZvLWhvdGVsIHtcbiAgbWFyZ2luOiAxNi41cHggMHB4IDEycHggMHB4O1xuICBwYWRkaW5nLXRvcDogMTYuNXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnNwLWNpLWNvIHtcbiAgbWFyZ2luOiA2LjVweCAwcHggOXB4IDBweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1yb29tLWluZm8ge1xuICBtYXJnaW46IDcuNXB4IDBweCAxNnB4IDBweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5zcC1yb29tLXBlbmFsdHkge1xuICBtYXJnaW46IDE2cHggMHB4IDBweCAwcHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LWRhdGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtbGFiZWwtc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtZGF0ZS1jb3V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAucC1yaWdodC00IHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1yaWdodC1mbG9hdC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtcmVsYXRpdmUgLmJ1dHRvbi1mbG9hdC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiAwO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmxhYmVsLXByaWNlLWRpc2NvdW50IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAucm9vbS1pbmZvIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5idG4tY2hhbmdlIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlYzk3MWY7XG4gIGNvbG9yOiAjZWM5NzFmO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4OHB4O1xuICBtYXJnaW46IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAuYnRuLWFwcGx5IHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRvdGFsLXByaWNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXYtZm9vdGVyIC5idXR0b24tZm9vdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkxJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW46IDEycHggMTZweCA5cHggMTZweDtcbn1cblxuLnRleHQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1pbmZvY2FyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtY2hhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4uYnRubm9uZXN1Y2Nlc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xuICBjb2xvcjogIzQ0N2EwMDtcbn1cblxuLnBsYWNlbGluZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNCU7XG4gIHdpZHRoOiAxcHg7XG4gIHRvcDogNTAlO1xuICBib3JkZXI6IGRvdHRlZCAxcHggI2JkYmRiZDtcbiAgbGVmdDogM3B4O1xufVxuXG4ucGxhY2Vwb2ludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NiU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG59XG5cbi5wbGFjZWRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM2MHB4KSB7XG4gIC5kaXZoZWlnaHQge1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtaW4taGVpZ2h0OiAzNzVweCkge1xuICAuZGl2aGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWluLWhlaWdodDogMzg0cHgpIHtcbiAgLmRpdmhlaWdodCB7XG4gICAgaGVpZ2h0OiAxNTVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQxMnB4KSB7XG4gIC5kaXZoZWlnaHQge1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtaW4taGVpZ2h0OiA0ODBweCkge1xuICAuZGl2aGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDE1NXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDEyKSBhbmQgKG1pbi1oZWlnaHQ6IDg3NnB4KSB7XG4gIC5kaXZoZWlnaHQge1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5yY2xzLWFsZXJ0LWNhcmNvbWJvIC5jbHMtYWxlcnQtZmxpZ2h0Y29tYm9yZXZpZXcge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1jYXJjb21ibyB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCkge1xuICA6Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcy5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG5cbi50ZXh0LXBvaW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLm51bS1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi50ZXh0LcSRaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNscy1jb2wge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG5cbi5jbHMtbXQxMCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG4uY2xzLW1sNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0LXByb21vdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IHtcbiAgd2lkdGg6IDE2MHB4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5kaXYtY2hlY2twb2ludCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmNoZWNrLXBvaW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuY2xzLW1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmRpdi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1jb2wtc3BsaXQge1xuICB3aWR0aDogMXB4O1xuICBib3JkZXItbGVmdDogc29saWQgMC41cHggI2JkYmRiZDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLnRleHQtcG9pbnQge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAubnVtLXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1wcm9tb3Rpb24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jbHMtbXQxMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5kZXBhcnQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi50ZXh0LXdpZHRoLTE5MCB7XG4gIHdpZHRoOiAxOTBweDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJnaW4tcmlnaHQtNSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubGluZS1ibHVlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRleHQtc3VnZ2VzdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJvdy1zdWdnZXN0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xuICBwYWRkaW5nOiAxMnB4IDhweCA4cHggOHB4O1xufVxuXG4ubXQtMyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMmY4MGVkO1xufVxuXG4udGV4dC13ZWlnaHQtc3VnZ2VzdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC11bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRleHQtcm9vbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMjkwcHg7XG59XG5cbi5jb2xvci1ibHVlIHtcbiAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbn0iLCIudGV4dC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaGVhZGVyLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbnQtY2FyY29tYm97XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LXJlZ3VsYXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbHVtbnM6ICMyMjIyMjI7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aGlue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTguOXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgY29sb3I6IzRmNGY0ZjtcclxuICAgIH1cclxuICAgIC50ZXh0LXRoaW4taXRhbGlje1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1uYW1le1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTdweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGF4LWluY2x1ZGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xNXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC04e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5mLWJvbGR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY29sLXN0ZXB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi10aXRsZXtcclxuICAgICAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tYm8tc3ViLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y1OTIzMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJjb21iby1ob3RlbHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgLmltZy1ob3RlbC1hdmF0YXJ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTA0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluZm8taG90ZWx7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMTJweDtcclxuXHJcbiAgICAgICAgICAgIC5kaXYtYWRkcmVzc3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOjEzcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRpdi1sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pbWctbG9jYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRleHQtYWRkcmVzc3tcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAubmFtZS1ob3RlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6ICMyMjIyMjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpdi1zcGxpdHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAuc3AtaW5mby1ob3RlbHtcclxuICAgICAgICBtYXJnaW46IDE2LjVweCAwcHggMTJweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2LjVweDtcclxuICAgIH1cclxuICAgIC5zcC1jaS1jb3tcclxuICAgICAgICBtYXJnaW46IDYuNXB4IDBweCA5cHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnNwLXJvb20taW5mb3tcclxuICAgICAgICBtYXJnaW46IDcuNXB4IDBweCAxNnB4IDBweDtcclxuICAgIH1cclxuICAgIC5zcC1yb29tLXBlbmFsdHl7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDBweCAwcHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtZGF0ZSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NkY2RjZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWxhYmVsLXNtYWxse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIH1cclxuICAgIC5kaXYtZGF0ZS1jb3V0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnAtcmlnaHQtNHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXJpZ2h0LWZsb2F0LXByaWNle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwM2M3MTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXJlbGF0aXZle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG5cclxuICAgICAgICAuYnV0dG9uLWZsb2F0LXJpZ2h0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxhYmVsLXByaWNlLWRpc2NvdW50e1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4XHJcbiAgICB9XHJcblxyXG4gICAgLnJvb20taW5mb3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jaGFuZ2V7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2VjOTcxZjtcclxuICAgICAgICBjb2xvcjogI2VjOTcxZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA4OHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5idG4tYXBwbHlcclxuICAgIHtcclxuICAgICAgICBjb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudG90YWwtcHJpY2V7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICAgIC8vIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXNwbGl0LXBhbmVse1xyXG4gICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICAgIH1cclxuICAgIC5kaXYtZm9vdGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4uZGl2LWZvb3RlcntcclxuICAgIC5idXR0b24tZm9vdGVyXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkxJTtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDE2cHggOXB4IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuLnRleHQtbG9jYXRpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4udGV4dC1pbmZvY2FyXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcbi50ZXh0LWNoYW5nZVxyXG57XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBmb250LXNpemU6IDE0cHhcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2VjOTcxZjtcclxuICB9XHJcbiAgLnRleHQtcm9vbS1wcmljZS1vdGF7XHJcbiAgICBjb2xvcjojODI4MjgyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5idG5ub25lc3VjY2Vzc1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICM0NDdhMDA7XHJcbiAgICBjb2xvcjogIzQ0N2EwMDtcclxufVxyXG4ucGxhY2VsaW5lXHJcbnsgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyNCU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBib3JkZXI6IGRvdHRlZCAxcHggI2JkYmRiZDtcclxuICAgIGxlZnQ6IDNweDtcclxufVxyXG4ucGxhY2Vwb2ludHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDYlO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcclxufVxyXG4ucGxhY2VkaXZcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5kaXZoZWlnaHRcclxue1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzIwcHgpIGFuZCAobWluLWhlaWdodDogMzYwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWluLWhlaWdodDogMzc1cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDM4NHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzODRweCkgYW5kIChtaW4taGVpZ2h0IDogNDEycHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDQ4MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTVweDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MTIpIGFuZCAobWluLWhlaWdodDogODc2cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgfVxyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgICAucmNscy1hbGVydC1jYXJjb21ibyAgLmNscy1hbGVydC1mbGlnaHRjb21ib3JldmlldyB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1tYXgtd2lkdGg6IDI5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zYy1pb24tYWxlcnQtaW9zLWguY2xzLWFsZXJ0LWNhcmNvbWJvICB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCl7XHJcbiAgICAgICAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KXtcclxuICAgICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3MuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnRleHQtcG9pbnRcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzIyMjIyMjtcclxufVxyXG4ubnVtLXBvaW50XHJcbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuLnRleHQtxJFpc2NvdW50XHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNscy1jb2xcclxue1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uaW9uLWl0ZW1cclxue1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbn1cclxuLmNscy1tdDEwXHJcbntcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4uY2xzLWhyXHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNscy1tbDVcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLnRleHQtcHJvbW90aW9uXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuLmRpdi12b3VjaGVye1xyXG4gICAgLmRpdi1mbGV4e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gICAgICAuZGl2LWZpcnN0e1xyXG4gICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gIFxyXG4gICAgICAgICAgLmRpdi1jaGVja3BvaW50e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVjay1wb2ludHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jbHMtbWw4XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGl2LWRpc2FibGVke1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmRpdi1jb2wtc3BsaXR7XHJcbiAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICBib3JkZXItbGVmdDogc29saWQgMC41cHggI2JkYmRiZDtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudGV4dC1wb2ludHtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgfVxyXG4gICAgICAubnVtLXBvaW50IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZGl2LXByb21vdGlvbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuICB9XHJcbiAgLmNscy1tdDEwe1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAuZGVwYXJ0LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbiAgfVxyXG4gIC50ZXh0LXdpZHRoLTE5MHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICB9XHJcbi50ZXh0LXBcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXJnaW4tcmlnaHQtNXtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAubGluZS1ibHVle1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweFxyXG4gIH1cclxuICAuZGl2LWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAudGV4dC1zdWdnZXN0e1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdy1zdWdnZXN0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWVjNztcclxuICAgIHBhZGRpbmc6IDEycHggOHB4IDhweCA4cHg7XHJcbiAgfVxyXG4gIC5tdC0ze1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuICAuY29sb3ItcmVke1xyXG4gICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gIH1cclxuICAuY29sb3ItYmx1ZXtcclxuICAgIGNvbG9yOiAjMmY4MGVkO1xyXG4gIH1cclxuICAudGV4dC13ZWlnaHQtc3VnZ2VzdHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAudGV4dC11bmRlcmxpbmV7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4udGV4dC1yb29te1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMjkwcHg7XHJcbn1cclxuLmNvbG9yLWJsdWV7XHJcbiAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudFxyXG59XHJcbiJdfQ== */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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

















let CombocarnewPage = class CombocarnewPage {
    constructor(storage, zone, valueGlobal, navCtrl, actionSheetCtrl, gf, bookCombo, booking, Roomif, searchhotel, alertCtrl, networkProvider, modalCtrl, loadingCtrl, activityService, toastCtrl) {
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
        this.textpromotion = "Nhập mã giảm giá";
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
<<<<<<< HEAD
                            se.bookCombo.mealTypeRates = se.elementMealtype;
=======
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61
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
        this.bookCombo.idpointdepd = '';
        this.bookCombo.idpointdept = '';
        this.bookCombo.idpointretd = '';
        this.bookCombo.idpointrett = '';
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
                        se.discountpromo = json.data.discount;
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
                        this.Pricepointshow = this.Pricepoint.toLocaleString();
                        this.bookCombo.totalprice = this.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    }
                    else {
                        this.price = this.point.toLocaleString();
                        var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                        this.Pricepoint = tempprice - this.point;
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
    }
    ionViewWillEnter() {
        this.point = 0;
        this.ischeck = false;
        this.Roomif.point = null;
        this.price = 0;
        this.textpromotion = "Nhập mã giảm giá";
        this.promocode = "";
        this.ischeckbtnpromo = false;
        this.ischeckpromo = false;
        this.msg = "";
        this.GetUserInfo();
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
                this.textpromotion = "Nhập mã giảm giá";
                this.promocode = "";
                this.ischeckbtnpromo = false;
                this.ischeckpromo = false;
                this.msg = "";
                const modal = yield this.modalCtrl.create({
                    component: _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_13__["AdddiscountPage"],
                });
                modal.present();
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
            for (let j = 0; j < se.valueGlobal.listlunar.length; j++) {
                se._daysConfig.push({
                    date: se.valueGlobal.listlunar[j].date,
                    subTitle: se.valueGlobal.listlunar[j].name,
                    cssClass: 'lunarcalendar'
                });
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ToastController"]])
], CombocarnewPage);



/***/ })

}]);
//# sourceMappingURL=combocarnew-combocarnew-module.js.map