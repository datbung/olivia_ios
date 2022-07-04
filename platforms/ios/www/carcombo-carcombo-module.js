(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carcombo-carcombo-module"],{

/***/ "./src/app/carcombo/carcombo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/carcombo/carcombo.module.ts ***!
  \*********************************************/
/*! exports provided: CarComboPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComboPageModule", function() { return CarComboPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _carcombo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carcombo.page */ "./src/app/carcombo/carcombo.page.ts");







let CarComboPageModule = class CarComboPageModule {
};
CarComboPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _carcombo_page__WEBPACK_IMPORTED_MODULE_6__["CarComboPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _carcombo_page__WEBPACK_IMPORTED_MODULE_6__["CarComboPage"]
                }
            ])
        ],
    })
], CarComboPageModule);



/***/ }),

/***/ "./src/app/carcombo/carcombo.page.html":
/*!*********************************************!*\
  !*** ./src/app/carcombo/carcombo.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-row>\n        <ion-col size=\"2\" class=\"header-text header-icon\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </ion-col>\n        <ion-col size=\"8\" class=\"header-text\">\n            <ion-title class=\"text-title\">\n                Kiểm tra\n            </ion-title>\n        </ion-col>\n    </ion-row>\n</ion-header>\n\n<ion-content >\n  <div class=\"content-carcombo\">\n    <div class=\"col-step\">\n        <img class=\"img-step\" src=\"./assets/step/step_1.svg\">\n    </div>\n          \n    <div class=\"div-title\">\n      <ion-label class=\"combo-title\">{{titlecombo}} |</ion-label>\n      <ion-label class=\"combo-sub-title\"> {{titlecomboprice}} VND/Khách</ion-label>\n    </div>\n\n    <div class=\"carcombo-hotel\">\n        <div class=\"img-hotel\">\n            <img class=\"img-hotel-avatar\" *ngIf=\"Avatar\" [src]=\"Avatar\" />\n            <img class=\"img-hotel-avatar\" *ngIf=\"!Avatar\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\" />\n        </div>\n\n        <div class=\"info-hotel\">\n          <!-- Tên -->\n          <div class=\"name-hotel f-bold\"><ion-label>{{Name}}</ion-label></div>\n          <!-- Địa chỉ -->\n          <div class=\"div-address p-top-13\">\n            <!-- img-local -->\n            <div class=\"div-location\">\n                <img class=\"img-location\"  src=\"./assets/iocnsearch/ic_location.svg\">\n            </div>\n            <!-- address -->\n            <div class=\"text-address text-thin\"><ion-label>{{Address}}</ion-label></div>\n          </div>\n         \n        </div>\n      </div>\n      <div class=\"div-split sp-info-hotel\"></div>\n\n      <!-- Checkin, checkout -->\n      <div class=\"div-cin-cout\">\n          <ion-row>\n            <!-- cin -->\n            <ion-col size=\"3.6\" class=\"no-padding\">\n                <div class=\"div-label-small\">Nhận phòng</div>\n                <div class=\"div-date\">{{cin}}</div>\n            </ion-col>\n            <!-- cout -->\n            <ion-col class=\"no-padding align-center\">\n                <div class=\"div-label-small\">Trả phòng</div>\n                <div class=\"div-date\">{{cout}}</div>\n            </ion-col>\n            <!-- duration -->\n            <ion-col size=\"3.4\" class=\"no-padding align-center\">\n                <div class=\"div-label-small\">Số đêm</div>\n                <div class=\"div-date-cout\">{{duration}} đêm</div>\n            </ion-col>\n          </ion-row>\n          <div class=\"div-split sp-ci-co\"></div>\n        </div>\n      <div class=\"carcombo-departure\" *ngIf=\"departDateTimeStr&&returnTimeStr\">\n        <label class=\"text-location\">\n          Đi từ {{fromPlace}}\n        </label>\n        <ion-row style=\"margin-left: -5px\">\n          <ion-col size=\"8\">\n            <ion-label class=\"text-infocar\">{{departDateTimeStr}}</ion-label>\n            <div class=\"combo-departure-time\">\n              <span>{{departTimeStr}}</span>\n            </div>\n            <ion-label class=\"text-infocar\" style=\"font-size: 14px\">{{departVehicleStr}}</ion-label>\n          </ion-col>\n          <ion-col size=\"4\" *ngIf=\"departTicketSaleshow!=0\" >\n            <div *ngIf=\"checkdiscountdepart&&departTicketSaleshow!=0\" class=\"combo-flight-price\" style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n              <span  class=\"combo-flight-price-label-down\">Giảm <span class=\"flight-price\">{{departTicketSaleshow}}</span></span>\n            </div>\n            <div *ngIf=\"!checkdiscountdepart\" class=\"combo-flight-price-label-up\" style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n                <span  class=\"combo-flight-price-label-up\">Phụ thu <span class=\"flight-price\">{{departTicketSaleshow}}</span></span>\n              </div>\n            <div class=\"button-float-right\" style=\"text-align: right\">\n              <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(0)\">Đổi giờ</button>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\" *ngIf=\"departTicketSaleshow==0\" style=\"align-self: flex-end\">\n            <div class=\"button-float-right\" style=\"text-align: right\">\n              <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(0)\">Đổi giờ</button>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"margin-left: -5px;margin-top: 10px\">\n          <ion-col size=\"8\">\n            <ion-label class=\"text-infocar\">{{returnDateTimeStr}}</ion-label>\n            <div class=\"combo-departure-time\">\n              <span>{{returnTimeStr}}</span>\n            </div>\n            <ion-label class=\"text-infocar\" style=\"font-size: 14px\">{{returnVehicleStr}}</ion-label>\n          </ion-col>\n          <ion-col size=\"4\"  *ngIf=\"returnTicketSaleshow!=0\">\n            <div *ngIf=\"checkdiscountreturn\" class=\"combo-flight-price\" style=\"margin-bottom: 5px;text-align: right;height: 20px\">\n              <span  class=\"combo-flight-price-label-down\">Giảm <span class=\"flight-price\">{{returnTicketSaleshow}}</span></span>\n            </div>\n            <div *ngIf=\"!checkdiscountreturn\" class=\"combo-flight-price-label-up\" style=\"margin-bottom: 5px;text-align: right;height: 20px;\">\n                <span  class=\"combo-flight-price-label-up\">Phụ thu <span class=\"flight-price\">{{returnTicketSaleshow}}</span></span>\n              </div>\n            <div class=\"button-float-right\" style=\"text-align: right\">\n              <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(1)\">Đổi giờ</button>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\"  *ngIf=\"returnTicketSaleshow==0\" style=\"align-self: flex-end\">\n           \n            <div class=\"button-float-right\" style=\"text-align: right\">\n              <button ion-button round outline class=\"button btn-change\" (click)=\"showListCar(1)\">Đổi giờ</button>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n     \n\n        <!-- skeleton -->\n        <div class=\"carcombo-departure\" *ngIf=\"!departDateTimeStr\">\n        <ion-row>\n           \n            <ion-col size=\"3.6\" class=\"no-padding\">\n                <ion-skeleton-text  animated style=\"width:100%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n                <ion-skeleton-text  animated style=\"width:75%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n                <ion-skeleton-text  animated style=\"width:50%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n            </ion-col>\n         \n            <ion-col class=\"no-padding align-center\">\n                \n            </ion-col>\n            \n            <ion-col size=\"3.4\" class=\"no-padding align-center\">\n                <ion-skeleton-text  animated style=\"width:50%;margin-top: 4px;height: 16px;\"></ion-skeleton-text>\n                <ion-skeleton-text  animated style=\"width:88px;margin-top: 4px;height: 30px;\"></ion-skeleton-text>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"div-split sp-ci-co\"></div>\n        <!-- Thông tin phòng -->\n  <div *ngIf=\"PriceAvgPlusTAStr\" class=\"room-info\">\n      <label class=\"combo-title\">\n        {{nameroom}}\n      </label>\n      <div class=\"text-regular p-top-8\" text-wrap>\n        <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{roomnumber}} phòng | {{adulsdisplay}} người\n        lớn |\n        {{childrendisplay}} trẻ em {{textage}}\n      </div>\n      <div class=\"text-regular p-top-15\">\n          <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n      </div>\n      <div class=\"div-split sp-room-info\"></div>\n    </div>\n    <!-- chính sách hủy combo -->\n    <div *ngIf=\"PriceAvgPlusTAStr\" (click)=\"showPenalty()\">\n      <ion-row>\n        <label class=\"text-regular\">\n          Chính sách hủy combo\n        </label>\n      </ion-row>\n      <div class=\"div-split sp-room-penalty\"></div>\n    </div>\n  \n    <div *ngIf=\"point>0 && PriceAvgPlusTAStr&& loadcarspricedone\">\n      <div *ngIf=\"!ischeckpoint&&!ischeckbtnpromo\" style=\"margin-left: -15px\">\n        <ion-item>\n          <ion-checkbox (ionChange)=\"edit()\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n          <ion-label class=\"label-price-discount\">Giảm thêm {{price}}đ khi sử dụng\n            điểm tích\n            luỹ</ion-label>\n        </ion-item>\n      </div>\n      <div *ngIf=\"ischeckpoint&&!ischeckbtnpromo\" style=\"margin-left: -15px\">\n        <ion-item>\n          <ion-checkbox (ionChange)=\"edit()\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n          <ion-label class=\"label-price-discount\">Miễn phí khi sử dụng điểm\n            tích lũy\n          </ion-label>\n        </ion-item>\n      </div>\n      <div *ngIf=\"!ischeck\" class=\"p-top-16\">\n          <label class=\"combo-title\">\n              Mã giảm giá\n            </label>\n            <ion-row style=\"margin-left: -5px;\">\n                <ion-col size=\"8\" >\n                  <ion-item style=\"--padding-start: 0px;font-size: 14px;\">\n                    <ion-label style=\"color: #828282;margin-top: 10px;\" position=\"floating\">Nhập mã giảm giá</ion-label>\n                    <ion-input (click)=\"click()\"  (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==3\" class=\"none\"  ></ion-input>\n                    <ion-input (click)=\"click()\"  (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==1||ischecktext==2\" class=\"error\"  ></ion-input>\n                    <ion-input  (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==0\" class=\"click\" ></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"4\" style=\"padding-right: 0;align-self: flex-end;\">\n                  <div style=\"text-align: right\">\n                      <button *ngIf=\"!ischeckbtnpromo\" (click)=\"promofunc()\" ion-button round outline class=\"button btn-apply\">Áp dụng</button>\n                      <button *ngIf=\"ischeckbtnpromo\"  ion-button round outline class=\"button btnnonesuccess\"><span>\n                          <ion-icon name=\"checkmark\"></ion-icon>\n                      </span></button>\n                  </div>\n                   \n                </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n              <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n            </ion-row>\n    </div>\n\n    <div class=\"div-split-panel\"></div>\n\n    <div *ngIf=\"ischeck||ischeckbtnpromo&& loadcarspricedone\" >\n        <ion-row>\n          <ion-col size=\"6\" class=\"no-padding\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn {{childrendisplay}} trẻ em</h2>\n              <p class=\"text-tax-include\" class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col size=\"6\" class=\"no-padding\">\n            <p  class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n              <sup>\n                <img  src=\"./assets/ic_green/ic_info.svg\">\n              </sup>\n            </p>\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"!ischeck&&!ischeckbtnpromo\" >\n          <ion-row>\n            <ion-col size=\"6\" style=\"padding: 0;\">\n              <div>\n                <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn {{childrendisplay}} trẻ em</h2>\n                <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n              </div>\n            </ion-col>\n            <ion-col size=\"6\" style=\"padding: 0;\">\n              <p  class=\"total-price\" style=\"text-align: right\">\n                  {{PriceAvgPlusTAStr}}đ\n                  <sup>\n                    <img src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                </p>\n            </ion-col>\n          </ion-row>\n        </div>\n    </div>\n  \n    <div *ngIf=\"(point<=0||!point)&&PriceAvgPlusTAStr\">\n        <div style=\"margin-top: 10px\">\n                <label class=\"combo-title\">\n                    Mã giảm giá\n                  </label>\n                  <ion-row>\n                      <ion-col size=\"8\" class=\"no-padding\">\n                        <ion-item style=\"--padding-start: 0px;font-size: 14px;\">\n                          <ion-label style=\"color: #828282\" position=\"floating\">Nhập mã giảm giá</ion-label>\n                          <ion-input (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==3\" class=\"none\"  ></ion-input>\n                          <ion-input (click)=\"click()\" (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==1||ischecktext==2\" class=\"error\"  ></ion-input>\n                          <ion-input (click)=\"click()\"  (ionChange)=\"textchange()\" [(ngModel)]=\"promocode\" type=\"text\" *ngIf=\"ischecktext==0\" class=\"click\" ></ion-input>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size=\"4\"  class=\"no-padding\" style=\"padding-right: 0;align-self: flex-end;\">\n                          <div style=\"text-align: right\">\n                              <button *ngIf=\"!ischeckbtnpromo\" (click)=\"promofunc()\" ion-button round outline class=\"button btn-change btn-apply\">Áp dụng</button>\n                              <button *ngIf=\"ischeckbtnpromo\"  ion-button round outline class=\"button btnnonesuccess\"><span>\n                                  <ion-icon name=\"checkmark\"></ion-icon>\n                              </span></button></div>\n                         \n                      </ion-col>\n                  </ion-row>\n                  <ion-row> \n                      <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n                      <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n                  </ion-row>\n          </div>\n          <div class=\"div-split-panel\"></div>\n          <div *ngIf=\"!ischeckbtnpromo\">\n              <ion-row>\n                  <ion-col size=\"6\" style=\"padding: 0;\">\n                    <div>\n                      <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn {{childrendisplay}} trẻ em</h2>\n                      <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"6\" style=\"padding: 0;\">\n                    <p class=\"total-price\" style=\"text-align: right\">\n                      {{PriceAvgPlusTAStr}}đ\n                      <sup>\n                        <img  src=\"./assets/ic_green/ic_info.svg\">\n                      </sup>\n                    </p>\n                  </ion-col>\n                </ion-row>\n          </div>\n         \n          <div *ngIf=\"ischeckbtnpromo\" >\n              <ion-row>\n                <ion-col size=\"6\" style=\"padding: 0;\">\n                  <div>\n                    <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{adulsdisplay}} người lớn {{childrendisplay}} trẻ em</h2>\n                    <p class=\"text-tax-include\">Giá đã bao gồm thuế & phí</p>\n                  </div>\n                </ion-col>\n                <ion-col size=\"6\" style=\"padding: 0;\">\n                  <p  class=\"total-price\" style=\"text-align: right\">\n                    {{Pricepointshow}}đ\n                    <sup>\n                      <img  src=\"./assets/ic_green/ic_info.svg\">\n                    </sup>\n                  </p>\n                  <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n                    {{PriceAvgPlusTAStr}}đ\n                  </p>\n                </ion-col>\n              </ion-row>\n            </div>\n        </div>\n        <div class=\"div-split-panel\" *ngIf=\"!loadpricedone\"></div>\n        \n    <div *ngIf=\"PriceAvgPlusTAStr\">\n      <ion-row *ngIf=\"PriceAvgPlusTAStr\">\n        <ion-col style=\"padding:5px 0\">\n          <label class=\"text-thin-italic\">*iVIVU không đảm bảo giá vé này cho đến khi bạn\n            hoàn tất thanh toán và mã ghế ngồi được xác nhận!</label>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr && loadpricedone\">\n      <ion-col style=\"padding:5px 0\">\n        <label style=\"font-size:14px;color:#828282;font-style: italic\">{{msgwrn}}</label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer>\n    <div class=\"div-footer\" *ngIf=\"PriceAvgPlusTAStr\" style=\"background-color: #ffffff; text-align: center\">\n      <button (click)=\"next()\" ion-button round outline class=\"button button-footer\">Xác nhận</button>\n    </div>\n    <div *ngIf=\"!PriceAvgPlusTAStr && loadpricedone\" class=\"div-footer\" style=\"background-color: #ffffff; text-align: center\">\n      <button (click)=\"sendRequestCombo()\" ion-button round outline class=\"button button-footer\">Gửi yêu cầu</button>\n    </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/carcombo/carcombo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/carcombo/carcombo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0;\n}\n\n.header-text {\n  text-align: center;\n  align-self: center;\n}\n\n::ng-deep .cls-alert-flightcomboreview {\n  align-items: center !important;\n  --max-width: 280px;\n  text-align: center;\n}\n\n::ng-deep .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block;\n}\n\n::ng-deep .sc-ion-alert-ios-h.cls-alert-carcombo {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n\n::ng-deep .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-carcombo .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  width: 100% !important;\n  display: block !important;\n}\n\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios.alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n\n.content-carcombo {\n  padding: 16px;\n}\n\n.content-carcombo .no-padding {\n  padding: 0;\n}\n\n.content-carcombo .align-center {\n  text-align: center;\n}\n\n.content-carcombo .text-regular {\n  font-size: 14px;\n  -moz-columns: #222222;\n       columns: #222222;\n}\n\n.content-carcombo .text-thin {\n  font-size: 14px;\n  line-height: 18.9px;\n  letter-spacing: -0.4px;\n  color: #4f4f4f;\n}\n\n.content-carcombo .text-thin-italic {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n\n.content-carcombo .text-name {\n  margin-top: 17px;\n  margin-bottom: 0;\n}\n\n.content-carcombo .text-tax-include {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  margin-top: 2px;\n  margin-bottom: 0;\n}\n\n.content-carcombo .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.content-carcombo .p-top-16 {\n  padding-top: 15px;\n}\n\n.content-carcombo .p-top-15 {\n  padding-top: 15px;\n}\n\n.content-carcombo .p-top-8 {\n  padding-top: 8px;\n}\n\n.content-carcombo .p-top-6 {\n  padding-top: 6px;\n}\n\n.content-carcombo .p-top-2 {\n  padding-top: 2px;\n}\n\n.content-carcombo .f-bold {\n  font-weight: bold;\n}\n\n.content-carcombo .col-step {\n  line-height: 11px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n\n.content-carcombo .col-step img {\n  height: 16px;\n}\n\n.content-carcombo .div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222222;\n}\n\n.content-carcombo .div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n\n.content-carcombo .carcombo-hotel {\n  position: relative;\n  height: 104px;\n  padding-top: 15px;\n}\n\n.content-carcombo .carcombo-hotel .img-hotel-avatar {\n  min-width: 104px;\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n  float: left;\n  position: absolute;\n}\n\n.content-carcombo .carcombo-hotel .info-hotel {\n  position: relative;\n  padding-left: 112px;\n}\n\n.content-carcombo .carcombo-hotel .info-hotel .div-address {\n  padding-top: 13px;\n}\n\n.content-carcombo .carcombo-hotel .info-hotel .div-address .div-location {\n  position: absolute;\n  margin-top: -2px;\n}\n\n.content-carcombo .carcombo-hotel .info-hotel .div-address .img-location {\n  height: 12px;\n}\n\n.content-carcombo .carcombo-hotel .info-hotel .div-address .text-address {\n  position: relative;\n  line-height: 16px;\n  padding-left: 12px;\n}\n\n.content-carcombo .carcombo-hotel .name-hotel {\n  font-size: 14px;\n  -moz-columns: #222222;\n       columns: #222222;\n}\n\n.content-carcombo .div-split {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n}\n\n.content-carcombo .sp-info-hotel {\n  margin: 16.5px 0px 12px 0px;\n  padding-top: 16.5px;\n}\n\n.content-carcombo .sp-ci-co {\n  margin: 6.5px 0px 9px 0px;\n}\n\n.content-carcombo .sp-room-info {\n  margin: 7.5px 0px 16px 0px;\n}\n\n.content-carcombo .sp-room-penalty {\n  margin: 16px 0px 0px 0px;\n}\n\n.content-carcombo .div-date {\n  border-right: solid 1px #cdcdcd;\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 4px;\n  padding-top: 0;\n  letter-spacing: -0.4px;\n}\n\n.content-carcombo .div-label-small {\n  font-size: 12px;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n\n.content-carcombo .div-date-cout {\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 8px;\n  padding-top: 0;\n}\n\n.content-carcombo .p-right-4 {\n  padding-right: 4px;\n}\n\n.content-carcombo .div-right-float-price {\n  font-size: 14px;\n  color: #003c71;\n  font-weight: normal;\n  float: right;\n  padding-right: 4px;\n}\n\n.content-carcombo .div-relative {\n  position: relative;\n  padding-top: 4px;\n}\n\n.content-carcombo .div-relative .button-float-right {\n  position: absolute;\n  top: 4px;\n  right: 0;\n}\n\n.content-carcombo .label-price-discount {\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.content-carcombo .room-info {\n  padding-top: 8px;\n}\n\n.content-carcombo .btn-change {\n  border-radius: 4px !important;\n  border: solid 1px #ec971f;\n  color: #ec971f;\n  font-size: 14px !important;\n  background: #ffffff;\n  height: 30px !important;\n  width: 88px;\n  margin: 0;\n}\n\n.content-carcombo .btn-apply {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n\n.content-carcombo .total-price {\n  text-align: right;\n  font-size: 24px;\n  color: #26bed6;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n\n.content-carcombo .div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.content-carcombo .div-footer {\n  background-color: #ffffff;\n  text-align: center;\n}\n\n.div-footer .button-footer {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 91%;\n  height: 44px;\n  margin: 12px 16px 9px 16px;\n}\n\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.combo-flight-price-label-up {\n  font-size: 12px;\n  color: #ec971f;\n}\n\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n\n.btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2NhcmNvbWJvL2NhcmNvbWJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FyY29tYm8vY2FyY29tYm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0VGOztBRENJO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRVI7O0FEQ0k7RUFDTSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0dBQUEsZ0NBQUE7T0FBQSw0QkFBQTtBQ0FWOztBREdNO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNEUjs7QURHTTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtBQ0RSOztBREdNO0VBQ00sY0FBQTtBQ0RaOztBREdRO0VBQ0ksc0RBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNEWjs7QURJUTtFQUNJO0lBQ0Usa0JBQUE7RUNGWjtBQUNGOztBRElNO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ0ZSOztBRElNO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0NBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNGUjs7QURJTTtFQUNFLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDRlI7O0FES007RUFDRTtJQUNFLGtCQUFBO0VDSFI7QUFDRjs7QURPQTtFQUNJLGFBQUE7QUNKSjs7QURNSTtFQUNJLFVBQUE7QUNKUjs7QURNSTtFQUNJLGtCQUFBO0FDSlI7O0FETUk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBQ0pSOztBRE1JO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDSlI7O0FETUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNKUjs7QURNSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0pSOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURNSTtFQUNJLGlCQUFBO0FDSlI7O0FETUk7RUFDSSxnQkFBQTtBQ0pSOztBRE1JO0VBQ0ksZ0JBQUE7QUNKUjs7QURNSTtFQUNJLGdCQUFBO0FDSlI7O0FETUk7RUFDSSxpQkFBQTtBQ0pSOztBRE1JO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDSlI7O0FETVE7RUFDSSxZQUFBO0FDSlo7O0FEU1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUFo7O0FEU1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUFo7O0FEV0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1RSOztBRFdRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1RaOztBRFdRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ1RaOztBRFdZO0VBQ0ksaUJBQUE7QUNUaEI7O0FEV2dCO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ1RwQjs7QURXZ0I7RUFDSSxZQUFBO0FDVHBCOztBRFdnQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1RwQjs7QURjUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0FDWlo7O0FEZUk7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7QUNiUjs7QURlSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7QUNiUjs7QURlSTtFQUNJLHlCQUFBO0FDYlI7O0FEZUk7RUFDSSwwQkFBQTtBQ2JSOztBRGVJO0VBQ0ksd0JBQUE7QUNiUjs7QURnQkk7RUFDSSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ2RSOztBRGdCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2RSOztBRGdCSTtFQUNJLGtCQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2RSOztBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNkUjs7QURnQlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDZFo7O0FEb0JJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbEJSOztBRHFCSTtFQUNJLGdCQUFBO0FDbkJSOztBRHFCSTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNuQlI7O0FEcUJJO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUNwQlI7O0FEc0JJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNwQlI7O0FEdUJJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDckJSOztBRHVCSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUNyQlI7O0FEMEJJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDeEJSOztBRDJCQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ3pCSjs7QUQyQkE7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDekJKOztBRDJCQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDeEJOOztBRDBCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDdkJKOztBRHlCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ3RCSjs7QUR3QkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ3JCSjs7QUR1QkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNwQko7O0FEc0JBO0VBRUksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNwQkoiLCJmaWxlIjoic3JjL2FwcC9jYXJjb21iby9jYXJjb21iby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uaGVhZGVyLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG46Om5nLWRlZXAge1xyXG4gICAgLmNscy1hbGVydC1mbGlnaHRjb21ib3JldmlldyB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LXdpZHRoOiAyODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zYy1pb24tYWxlcnQtaW9zLWgge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAgIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjLWlvbi1hbGVydC1pb3MtaC5jbHMtYWxlcnQtY2FyY29tYm8gIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KXtcclxuICAgICAgICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcy5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbi5jb250ZW50LWNhcmNvbWJve1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAubm8tcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmFsaWduLWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yZWd1bGFye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2x1bW5zOiAjMjIyMjIyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGhpbntcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4LjlweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGNvbG9yOiM0ZjRmNGY7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aGluLWl0YWxpY3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtbmFtZXtcclxuICAgICAgICBtYXJnaW4tdG9wOjE3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC50ZXh0LXRheC1pbmNsdWRle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5jb21iby10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMTZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMTV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtOHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0ye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICAuZi1ib2xke1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmNvbC1zdGVwe1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtdGl0bGV7XHJcbiAgICAgICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbWJvLXN1Yi10aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmNTkyMzM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2FyY29tYm8taG90ZWx7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgIC5pbWctaG90ZWwtYXZhdGFye1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmZvLWhvdGVse1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTEycHg7XHJcblxyXG4gICAgICAgICAgICAuZGl2LWFkZHJlc3N7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5kaXYtbG9jYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaW1nLWxvY2F0aW9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50ZXh0LWFkZHJlc3N7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUtaG90ZWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICBjb2x1bW5zOiAjMjIyMjIyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYtc3BsaXR7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG4gICAgLnNwLWluZm8taG90ZWx7XHJcbiAgICAgICAgbWFyZ2luOiAxNi41cHggMHB4IDEycHggMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNi41cHg7XHJcbiAgICB9XHJcbiAgICAuc3AtY2ktY297XHJcbiAgICAgICAgbWFyZ2luOiA2LjVweCAwcHggOXB4IDBweDtcclxuICAgIH1cclxuICAgIC5zcC1yb29tLWluZm97XHJcbiAgICAgICAgbWFyZ2luOiA3LjVweCAwcHggMTZweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuc3Atcm9vbS1wZW5hbHR5e1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAwcHggMHB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWRhdGUge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZGNkY2Q7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1sYWJlbC1zbWFsbHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWRhdGUtY291dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5wLXJpZ2h0LTR7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1yaWdodC1mbG9hdC1wcmljZXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1yZWxhdGl2ZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuXHJcbiAgICAgICAgLmJ1dHRvbi1mbG9hdC1yaWdodHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sYWJlbC1wcmljZS1kaXNjb3VudHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweFxyXG4gICAgfVxyXG5cclxuICAgIC5yb29tLWluZm97XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIH1cclxuICAgIC5idG4tY2hhbmdle1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlYzk3MWY7XHJcbiAgICAgICAgY29sb3I6ICNlYzk3MWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogODhweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuYnRuLWFwcGx5XHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXByaWNle1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgICAvLyBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1zcGxpdC1wYW5lbHtcclxuICAgICAgICBoZWlnaHQ6IDdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWZvb3RlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLmRpdi1mb290ZXJ7XHJcbiAgICAuYnV0dG9uLWZvb3RlclxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiA5MSU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTJweCAxNnB4IDlweCAxNnB4O1xyXG4gICAgfVxyXG59XHJcbi50ZXh0LWxvY2F0aW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuLnRleHQtaW5mb2NhclxyXG57XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2VjOTcxZjtcclxuICB9XHJcbiAgLnRleHQtcm9vbS1wcmljZS1vdGF7XHJcbiAgICBjb2xvcjojODI4MjgyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbi5idG5ub25lc3VjY2Vzc1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICM0NDdhMDA7XHJcbiAgICBjb2xvcjogIzQ0N2EwMDtcclxufSIsIi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWZsaWdodGNvbWJvcmV2aWV3IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI5MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1jYXJjb21ibyB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCkge1xuICA6Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcy5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG5cbi5jb250ZW50LWNhcmNvbWJvIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC1yZWd1bGFyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2x1bW5zOiAjMjIyMjIyO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnRleHQtdGhpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4LjlweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC10aGluLWl0YWxpYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAudGV4dC1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC50ZXh0LXRheC1pbmNsdWRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGVudC1jYXJjb21ibyAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5wLXRvcC0xNSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTYge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnAtdG9wLTIge1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmYtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmNvbC1zdGVwIHtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1jYXJjb21ibyAuY29sLXN0ZXAgaW1nIHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtdGl0bGUgLmNvbWJvLXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmNhcmNvbWJvLWhvdGVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwNHB4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW1nLWhvdGVsLWF2YXRhciB7XG4gIG1pbi13aWR0aDogMTA0cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxMTJweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3Mge1xuICBwYWRkaW5nLXRvcDogMTNweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3MgLmRpdi1sb2NhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3MgLmltZy1sb2NhdGlvbiB7XG4gIGhlaWdodDogMTJweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAuaW5mby1ob3RlbCAuZGl2LWFkZHJlc3MgLnRleHQtYWRkcmVzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5jYXJjb21iby1ob3RlbCAubmFtZS1ob3RlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sdW1uczogIzIyMjIyMjtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtc3BsaXQge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgb3BhY2l0eTogMC42O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnNwLWluZm8taG90ZWwge1xuICBtYXJnaW46IDE2LjVweCAwcHggMTJweCAwcHg7XG4gIHBhZGRpbmctdG9wOiAxNi41cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuc3AtY2ktY28ge1xuICBtYXJnaW46IDYuNXB4IDBweCA5cHggMHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnNwLXJvb20taW5mbyB7XG4gIG1hcmdpbjogNy41cHggMHB4IDE2cHggMHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLnNwLXJvb20tcGVuYWx0eSB7XG4gIG1hcmdpbjogMTZweCAwcHggMHB4IDBweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5kaXYtZGF0ZSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZGNkY2Q7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1sYWJlbC1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1kYXRlLWNvdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5wLXJpZ2h0LTQge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LXJpZ2h0LWZsb2F0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1yZWxhdGl2ZSAuYnV0dG9uLWZsb2F0LXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgcmlnaHQ6IDA7XG59XG4uY29udGVudC1jYXJjb21ibyAubGFiZWwtcHJpY2UtZGlzY291bnQge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5yb29tLWluZm8ge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmJ0bi1jaGFuZ2Uge1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VjOTcxZjtcbiAgY29sb3I6ICNlYzk3MWY7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDg4cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5jb250ZW50LWNhcmNvbWJvIC5idG4tYXBwbHkge1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1jYXJjb21ibyAudG90YWwtcHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xufVxuLmNvbnRlbnQtY2FyY29tYm8gLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG4uY29udGVudC1jYXJjb21ibyAuZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdi1mb290ZXIgLmJ1dHRvbi1mb290ZXIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTElO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbjogMTJweCAxNnB4IDlweCAxNnB4O1xufVxuXG4udGV4dC1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0LWluZm9jYXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2VjOTcxZjtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5idG5ub25lc3VjY2VzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICM0NDdhMDA7XG4gIGNvbG9yOiAjNDQ3YTAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/carcombo/carcombo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/carcombo/carcombo.page.ts ***!
  \*******************************************/
/*! exports provided: CarComboPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComboPage", function() { return CarComboPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cardeparture_cardeparture_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../cardeparture/cardeparture.page */ "./src/app/cardeparture/cardeparture.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _requestcombo1_requestcombo1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../requestcombo1/requestcombo1 */ "./src/app/requestcombo1/requestcombo1.ts");












let CarComboPage = class CarComboPage {
    constructor(storage, zone, valueGlobal, navCtrl, actionSheetCtrl, gf, bookCombo, booking, Roomif, searchhotel, alertCtrl, modalCtrl, loadingCtrl) {
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
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.children = 0;
        this.totalInfant = 0;
        this.textage = "";
        this.textagepost = "";
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
            ComboData: {}
        };
        this.ischeck = false;
        this.ischeckpoint = false;
        this.ischecktext = 0;
        this.ischeckerror = 0;
        this.ischeckbtnpromo = false;
        this.ischeckpromo = false;
        this.loadcarspricedone = false;
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
        this.storage.get('point').then(point => {
            if (point) {
                if (point > 0) {
                    this.Roomif.point = point;
                    this.point = point * 1000;
                    this.price = this.point.toLocaleString();
                }
            }
        });
        this.booking.ChildAge.forEach(element => {
            if (element == "<1" || Number(element) < 2) {
                this.infant += 1;
            }
        });
        this.Avatar = Roomif.imgHotel;
        this.Name = booking.HotelName;
        this.Address = Roomif.Address;
        this.cin = booking.CheckInDate;
        this.cout = booking.CheckOutDate;
        this.duration = moment__WEBPACK_IMPORTED_MODULE_9__(this.cout).diff(moment__WEBPACK_IMPORTED_MODULE_9__(this.cin), 'days');
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
        this.getHotelContractPrice(this.bookCombo.FormParam);
    }
    ngOnInit() {
        this.intervalID = setInterval(() => {
            if (this.listkeys.length > 0) {
                this.listkeys.forEach(key => {
                    this.storage.remove(key);
                });
            }
        }, 60000 * 15);
    }
    getHotelContractPrice(data) {
        var se = this;
        if (data) {
            data.IsPackageRateInternal = true;
            data.IsPackageRate = true;
            var form = data;
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelSearchReqContractAppV2',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers: {},
                form
            };
            requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "carcombo",
                        func: "getHotelContractPrice",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "carcombo";
                    error.func = "getHotelContractPrice";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
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
                            se.TravPaxPrices = element.MealTypeRates[0].PriceAvgPlusNet * se.roomnumber * se.TotalNight;
                            se.AdultCombo = element.Rooms[0].IncludeAdults * se.elementMealtype.TotalRoom;
                            se.AdultCombo = se.AdultCombo > se.totalAdult ? se.totalAdult : se.AdultCombo;
                            se.storage.get('listDepartTransfers_' + se.comboId + '_' + se.cin + '_' + se.adults + '_' + se.children + '_' + se.textagepost).then((data) => {
                                if (data) {
                                    se.listDepartTransfers = data.data;
                                    se.getBestTransfer(data, 1);
                                    se.storage.get('listReturnTransfers_' + se.comboId + '_' + se.cout + '_' + se.adults + '_' + se.children + '_' + se.textagepost).then((data) => {
                                        if (data) {
                                            se.listReturnTransfers = data.data;
                                            se.getBestTransfer(data, 0);
                                            se.loadTransferInfo(se.departTime, se.returnTime);
                                        }
                                        else {
                                            if (!se.listReturnTransfers || se.listReturnTransfers.length <= 0)
                                                se.getTransferData(false);
                                        }
                                    });
                                }
                                else {
                                    se.getTransferData(true);
                                }
                            });
                        }
                        else {
                            se.departDateTimeStr = "không có vé";
                            se.msgwrn = "Hiện tại không có phòng thoả điều kiện của quy khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!";
                            se.loadpricedone = true;
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
        this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
    }
    loadTransferInfo(departTransfer, returnTransfer) {
        var se = this;
        if (departTransfer && departTransfer.length > 0) {
            this.departObject = departTransfer[0];
            let de_date = this.departObject.route.departure_date;
            se.departDateTimeStr = 'Đi ' + se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(de_date).format('DD-MM-YYYY');
            se.departTimeStr = this.departObject.route.pickup_time + ' → ' + this.departObject.route.arrival_time;
            se.departVehicleStr = this.departObject.company.name;
            this.departTicketSaleshow = this.departObject.route.schedules[0].fare.price - this.departTicketSale;
            this.pricedepart = this.departObject.route.schedules[0].fare.price;
            se.daydeparttitle = se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(de_date).format('DD-MM-YYYY');
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
            this.returnObject = returnTransfer[0];
            let re_date = this.returnObject.route.departure_date;
            se.returnDateTimeStr = 'Về ' + se.getDayOfWeek(re_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(re_date).format('DD-MM-YYYY');
            se.returnTimeStr = this.returnObject.route.pickup_time + ' → ' + this.returnObject.route.arrival_time;
            se.returnVehicleStr = this.returnObject.company.name;
            this.returnTicketSaleshow = this.returnObject.route.schedules[0].fare.price - this.returnTicketSale;
            se.dayreturntitle = se.getDayOfWeek(re_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(re_date).format('DD-MM-YYYY');
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
            this.PriceAvgPlusTAStr = this.PriceAvgPlusTA + this.pricedepart * this.totalAdult + this.pricereturn * this.totalAdult;
            this.total = this.PriceAvgPlusTAStr;
            this.PriceAvgPlusTAStr = this.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        }
        this.funccheckpoint();
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
        se.loadcarspricedone = true;
    }
    getTransferData(isDepart) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (se.comboId) {
                if (isDepart) {
                    se.fromId = se.bookCombo.ComboDetail.comboDetail.departureCode;
                    se.toId = se.bookCombo.ComboDetail.arrivalCode;
                    var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/get-transfer-data?cid=' + se.comboId + '&from=' + se.fromId + '&to=' + se.toId + '&date=' + se.cin + '&an=' + se.adults + '&cn=' + se.children + '&cas=' + se.textagepost;
                    se.gf.RequestApi('GET', url, {}, {}, 'carcombo', 'get-transfer-data').then((data) => {
                        if (data.data.length > 0) {
                            var listDeparttemp = data.data;
                            for (let i = 0; i < listDeparttemp.length; i++) {
                                if (listDeparttemp[i].route.schedules[0].available_seats >= se.totalAdult) {
                                    se.listDepartTransfers.push(listDeparttemp[i]);
                                }
                            }
                            se.storage.set('listDepartTransfers_' + se.comboId + '_' + se.cin + '_' + se.adults + '_' + se.children + '_' + se.textagepost, data);
                            se.listkeys.push('listDepartTransfers_' + se.comboId + '_' + se.cin + '_' + se.adults + '_' + se.children + '_' + se.textagepost);
                            se.getBestTransfer(data, 1);
                            se.storage.get('listReturnTransfers_' + se.comboId + '_' + se.cout + '_' + se.adults + '_' + se.children + '_' + se.textagepost).then((data) => {
                                if (data) {
                                    se.listReturnTransfers = data.data;
                                    se.getBestTransfer(data, 0);
                                    se.loadTransferInfo(se.departTime, se.returnTime);
                                }
                                else {
                                    if (!se.listReturnTransfers || se.listReturnTransfers.length <= 0)
                                        se.getTransferData(false);
                                }
                            });
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
                    var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/get-transfer-data?cid=' + se.comboId + '&from=' + se.toId + '&to=' + se.fromId + '&date=' + se.cout + '&an=' + se.adults + '&cn=' + se.children + '&cas=' + se.textagepost;
                    se.gf.RequestApi('GET', url, {}, {}, 'carcombo', 'get-transfer-data').then((data) => {
                        if (data) {
                            var listReturntemp = data.data;
                            for (let i = 0; i < listReturntemp.length; i++) {
                                if (listReturntemp[i].route.schedules[0].available_seats >= se.totalAdult) {
                                    se.listReturnTransfers.push(listReturntemp[i]);
                                }
                            }
                            se.storage.set('listReturnTransfers_' + se.comboId + '_' + se.cout + '_' + se.adults + '_' + se.children + '_' + se.textagepost, data);
                            se.listkeys.push('listReturnTransfers_' + se.comboId + '_' + se.cout + '_' + se.adults + '_' + se.children + '_' + se.textagepost);
                            se.getBestTransfer(data, 0);
                            this.loadTransferInfo(this.departTime, this.returnTime);
                        }
                    });
                }
            }
        });
    }
    getBestTransfer(list, isDepart) {
        var home = [];
        var away = [];
        for (let i = 0; i < list.data.length; i++) {
            var Hour;
            var Minute;
            var kq;
            var time = list.data[i].route.pickup_time;
            Hour = time.toString().split(':')[0];
            Minute = time.toString().split(':')[1];
            kq = Hour * 60 + Number(Minute);
            if (isDepart == 1) {
                if (kq >= 480 && kq <= 840) {
                    if (list.data[i].sort_order != 999) {
                        home.push(list.data[i]);
                    }
                    else {
                        away.push(list.data[i]);
                    }
                }
            }
            else {
                if (kq >= 600 && kq <= 1080) {
                    if (list.data[i].sort_order != 999) {
                        home.push(list.data[i]);
                    }
                    else {
                        away.push(list.data[i]);
                    }
                }
            }
        }
        if (isDepart == 1) {
            if (home.length > 0) {
                this.departTime = home;
            }
            else {
                this.departTime = away;
            }
        }
        else {
            if (home.length > 0) {
                this.returnTime = home;
            }
            else {
                this.returnTime = away;
            }
        }
    }
    getDayOfWeek(date) {
        let coutthu = moment__WEBPACK_IMPORTED_MODULE_9__(date).format('dddd');
        switch (coutthu) {
            case "Monday":
                coutthu = "thứ 2";
                break;
            case "Tuesday":
                coutthu = "thứ 3";
                break;
            case "Wednesday":
                coutthu = "thứ 4";
                break;
            case "Thursday":
                coutthu = "thứ 5";
                break;
            case "Friday":
                coutthu = "thứ 6";
                break;
            case "Saturday":
                coutthu = "thứ 7";
                break;
            default:
                coutthu = "Chủ nhật";
                break;
        }
        return coutthu;
    }
    next() {
        this.presentLoading();
        if (this.point > 0) {
            if (this.ischeck) {
                this.Roomif.ischeckpoint = this.ischeck;
            }
            else {
                this.Roomif.ischeckpoint = this.ischeck;
                this.Roomif.point = null;
            }
        }
        this.postcardetaildepart();
    }
    postcardetaildepart() {
        var self = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/get-transfer-detail',
            qs: { trip_code: this.departObject.route.schedules[0].trip_code },
            headers: {
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
                Host: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile,
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.17.1'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            self.transferdetaildepart = JSON.parse(body);
            self.postcardetailreturn();
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
    postcardetailreturn() {
        var self = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/get-transfer-detail',
            qs: { trip_code: this.returnObject.route.schedules[0].trip_code },
            headers: {
                'cache-control': 'no-cache',
                Connection: 'keep-alive',
                'Accept-Encoding': 'gzip, deflate',
                Host: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile,
                'Cache-Control': 'no-cache',
                Accept: '*/*',
                'User-Agent': 'PostmanRuntime/7.17.1'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            self.transferdetailreturn = JSON.parse(body);
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
                total = self.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
                self.bookCombo.ischeckbtnpromo = self.ischeckbtnpromo;
                self.bookCombo.discountpromo = self.discountpromo;
                self.Roomif.promocode = self.promocode;
            }
            else {
                self.bookCombo.ischeckbtnpromo = self.ischeckbtnpromo;
                self.bookCombo.discountpromo = 0;
                self.promocode = "";
                self.Roomif.promocode = self.promocode;
            }
            self.storage.get('jti').then(jti => {
                if (jti) {
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
                                PickupPlaceCode: self.transferdetaildepart.data.pickup_points[0].id,
                                PickupPlaceName: self.transferdetaildepart.data.pickup_points[0].name,
                                DropoffPlaceCode: self.transferdetaildepart.data.drop_off_points_at_arrive[0].id,
                                DropoffPlaceName: self.transferdetaildepart.data.drop_off_points_at_arrive[0].name,
                                DepartDate: self.departObject.route.pickup_date,
                                DepartTime: self.departObject.route.pickup_time,
                                ArrivalDate: self.departObject.route.arrival_date,
                                ArrivalTime: self.departObject.route.arrival_time,
                                Duration: self.departObject.route.duration,
                                FareOrigins: self.departObject.route.schedules[0].fare.original,
                                FareNet: self.departObject.route.schedules[0].fare.price,
                                TotalPrice: self.pricedepart * self.totalAdult,
                                CancelPolicy: self.transferdetaildepart.data.policyData.join('\r\n')
                            },
                            returnTransfer: {
                                CompanyCode: self.returnObject.company.id,
                                CompanyName: self.returnObject.company.name,
                                TransferNumber: self.returnObject.route.schedules[0].trip_code,
                                VehicleType: self.returnObject.route.schedules[0].vehicle_type,
                                RouteNumber: self.returnObject.route.id,
                                PickupPlaceCode: self.transferdetailreturn.data.pickup_points[0].id,
                                PickupPlaceName: self.transferdetailreturn.data.pickup_points[0].name,
                                DropoffPlaceCode: self.transferdetailreturn.data.drop_off_points_at_arrive[0].id,
                                DropoffPlaceName: self.transferdetailreturn.data.drop_off_points_at_arrive[0].name,
                                DepartDate: self.returnObject.route.pickup_date,
                                DepartTime: self.returnObject.route.pickup_time,
                                ArrivalDate: self.returnObject.route.arrival_date,
                                ArrivalTime: self.returnObject.route.arrival_time,
                                Duration: self.returnObject.route.duration,
                                FareOrigins: self.returnObject.route.schedules[0].fare.original,
                                FareNet: self.returnObject.route.schedules[0].fare.price,
                                TotalPrice: self.pricereturn * self.totalAdult,
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
                            HotelId: self.booking.HotelId.toString(),
                            CheckIn: moment__WEBPACK_IMPORTED_MODULE_9__(self.booking.CheckInDate).format('YYYY-MM-DD'),
                            CheckOut: moment__WEBPACK_IMPORTED_MODULE_9__(self.booking.CheckOutDate).format('YYYY-MM-DD'),
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
                            promotionCode: self.promocode
                        },
                    };
                    self.bookCombo.totalAdult = self.totalAdult;
                    self.gf.setParams(objectCar, 'carscombo');
                    self.loader.dismiss();
                    self.navCtrl.navigateForward("comboadddetails");
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
            this.gf.setParams({ listdepart: this.listDepartTransfers, listreturn: this.listReturnTransfers, title: index == 0 ? this.daydeparttitle : this.dayreturntitle, isdepart: index == 0 ? true : false }, 'listcar');
            const modal = yield this.modalCtrl.create({
                component: _cardeparture_cardeparture_page__WEBPACK_IMPORTED_MODULE_1__["CardeparturePage"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    se.zone.run(() => {
                        if (data.data.isdepart) {
                            se.current = data.data.cars;
                            se.loadData(se.current, data.data.isdepart);
                        }
                        else {
                            se.current = data.data.cars;
                            se.loadData(se.current, data.data.isdepart);
                        }
                    });
                }
            });
        });
    }
    loadData(Transfer, ischeck) {
        var se = this;
        if (ischeck) {
            if (Transfer && Transfer.length > 0) {
                this.departObject = Transfer[0];
                let de_date = this.departObject.route.departure_date;
                se.departDateTimeStr = 'Đi ' + se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(de_date).format('DD-MM-YYYY');
                se.departTimeStr = this.departObject.route.pickup_time + ' → ' + this.departObject.route.arrival_time;
                se.departVehicleStr = this.departObject.company.name;
                this.departTicketSaleshow = this.departObject.route.schedules[0].fare.price - this.departTicketSale;
                se.daydeparttitle = se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(de_date).format('DD-MM-YYYY');
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
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTA + this.pricedepart * this.totalAdult + this.pricereturn * this.totalAdult;
                this.total = this.PriceAvgPlusTAStr;
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
        }
        else {
            if (Transfer && Transfer.length > 0) {
                this.returnObject = Transfer[0];
                let re_date = this.returnObject.route.departure_date;
                se.returnDateTimeStr = 'Về ' + se.getDayOfWeek(re_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(re_date).format('DD-MM-YYYY');
                se.returnTimeStr = this.returnObject.route.pickup_time + ' → ' + this.returnObject.route.arrival_time;
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
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTA + this.pricedepart * this.totalAdult + this.pricereturn * this.totalAdult;
                this.total = this.PriceAvgPlusTAStr;
                this.PriceAvgPlusTAStr = this.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            }
        }
        this.edit();
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
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
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/data/validpromocode',
                headers: {
                    'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: { code: se.promocode, totalAmount: se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
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
        });
    }
    ionViewDidEnter() {
        this.GetUserInfo();
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roomdetailreview",
                            func: "GetUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.storage.set("email", data.email);
                            se.storage.set("jti", data.memberId);
                            se.storage.set("username", data.fullname);
                            se.storage.set("phone", data.phone);
                            se.storage.set("point", data.point);
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
                component: _requestcombo1_requestcombo1__WEBPACK_IMPORTED_MODULE_10__["RequestCombo1Page"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.valueGlobal.backValue = 'carcombo';
                this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
            });
        });
    }
};
CarComboPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-carcombo',
        template: __webpack_require__(/*! ./carcombo.page.html */ "./src/app/carcombo/carcombo.page.html"),
        styles: [__webpack_require__(/*! ./carcombo.page.scss */ "./src/app/carcombo/carcombo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["Bookcombo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["RoomInfo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
], CarComboPage);



/***/ })

}]);
//# sourceMappingURL=carcombo-carcombo-module.js.map