(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roomdetailreview-roomdetailreview-module"],{

/***/ "./src/app/roomdetailreview/roomdetailreview.html":
/*!********************************************************!*\
  !*** ./src/app/roomdetailreview/roomdetailreview.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomdetailreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row style=\"padding-top:11px\">\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\">\n        <div style=\"position: absolute;height: 48px;width: 48px;\" (click)=\"goback()\">\n          <img style=\"height: 48px; padding: 8px;margin-top:-4px;margin-left:-8px\"\n            src=\"./assets/imgs/ios-arrow-round-back.svg\">\n        </div>\n\n        <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Kiểm tra</label>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content padding>\n  <div *ngIf=\"loaddatadone else loadsk\">\n    <div *ngIf=\"ischeckpayment\" style=\"text-align: center\">\n      <img  src=\"./assets/step/step_1.svg\">\n  </div>\n  <div *ngIf=\"!ischeckpayment\" style=\"text-align: center\">\n    <img  src=\"./assets/step/fc_step_1.svg\">\n    </div>\n    <div *ngIf=\"titlecombo\" class=\"div-title\">\n      <ion-label class=\"combo-title\">{{titlecombo}}</ion-label>\n    </div>\n  <ion-row style=\"padding:14px 0\">\n    <ion-col size=\"4\" style=\"padding: 5px 0px;\">\n      <div class=\"div-wrapimg\">\n        <img style=\"border-radius: 5px;height: 100%\" src={{Avatar}}>\n      </div>\n    </ion-col>\n    <ion-col size=\"8\" style=\"padding:3px\" class=\"col-description-roomdetailreview\">\n      <div style=\"margin-left: 3px\">\n        <h2 class=\"text-name\" style=\"margin-top: 0\" text-wrap>{{Name}}\n        </h2>\n        <p class=\"text-address\" text-wrap>\n          <img src=\"./assets/ic_facility/Group.svg\"> {{Address}}\n        </p>\n        <p *ngIf=\"bookCombo.isshuttlebus.length>0 && titlecombo\" (click)=\"nextShuttlebus()\" style=\"color: #26bed6;font-size: 14px\">\n          <img class=\"image-card\" src=\"./assets/ic_review/ic_bus.svg\"> Lịch trình Shuttle Bus\n          <p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <hr>\n  <div>\n    <ion-grid style=\"padding:0\">\n      <ion-row style=\"font-size:12px\">\n        <ion-col size=\"5\" style=\"padding:0\">\n          <ion-label style=\"font-weight: 300;color: #4f4f4f\" stacked>Nhận phòng</ion-label>\n        </ion-col>\n        <ion-col size=\"5\" style=\"padding:0\">\n          <ion-label style=\"font-weight: 300;color: #4f4f4f\" stacked>Trả phòng</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0\">\n          <ion-label style=\"font-weight: 300;padding-left: 4px;color: #4f4f4f\" stacked>Số đêm</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4.5\" style=\"padding:0\">\n          <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px\" stacked>{{cin}}</ion-label>\n        </ion-col>\n        <ion-col size=\"0.5\" style=\"padding: 0;\">\n          <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"padding:0\">\n          <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px\" stacked>{{cout}}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"0.5\" style=\"padding: 0;margin-left: -3px;\">\n          <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0\">\n          <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px;margin-left: 10px\" stacked>{{dur}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <hr>\n  <div>\n    <div class=\"text-name-room\">\n      <label class=\"text-name\">\n        {{nameroom}}\n      </label>\n      <label *ngIf=\"bookCombo.ischeckShowupgrade\" class=\"text-p line-blue\">\n        <span (click)=\"upgradeRoom()\" class=\"margin-right-5\">Đổi</span> <img src=\"./assets/imgs/vector.svg\">\n      </label>\n    </div>\n   \n    <p style=\"color: #666;font-size: 14px\" text-wrap>\n      <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{roomnumber}} {{RoomType}} | {{adults}} người lớn |\n      {{children}} trẻ em {{textage}}\n      <p>\n        <p style=\"color: #666;font-size: 14px\">\n          <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n          <p>\n\n            <div *ngIf=\"PriceAvgPlusTAStr && bookCombo.ComboId\" class=\"div-address\">\n              <div class=\"div-location\">\n                <img class=\"img-location\" src=\"./assets/iconaccount/info.svg\">\n              </div>\n              <div class=\"text-address text-thin color-blue\">\n                <ion-label  *ngIf=\"statusRoom=='AL'\" >Xác nhận ngay</ion-label>\n                <ion-label  *ngIf=\"statusRoom!='AL'\" >Xác nhận trong 60 phút</ion-label>\n              </div>\n            </div>\n            <div class=\"div-TaxFee\" *ngIf=\"Roomif.DescriptionTaxFee && Roomif.DescriptionTaxFee.include.length>0\">\n              <div class=\"text-normal\" style=\"font-weight: bold\">\n                Giá đã bao gồm:\n              </div>\n              <div class=\"text-normal\" *ngFor=\"let item of Roomif.DescriptionTaxFee.include\">\n                {{item}}\n              </div>\n            </div>\n            <div class=\"div-TaxFee\" *ngIf=\"Roomif.DescriptionTaxFee && Roomif.DescriptionTaxFee.exclude.length>0\">\n              <div class=\"text-normal\" style=\"font-weight: bold\">\n                Không bao gồm (trả tại khách sạn):\n              </div>\n              <div class=\"text-normal\" *ngFor=\"let item of Roomif.DescriptionTaxFee.exclude\">\n                {{item}}\n              </div>\n            </div>\n  </div>\n  <hr  *ngIf=\"ischeckroom!='Internal'\"class=\"cls-hr\">\n   <div *ngIf=\"ischeckroom!='Internal'\">\n    <label (click)=\"openRoomCancel()\" class=\"depart-title\">\n      Chính sách hủy phòng\n    </label>\n  </div>\n  <hr class=\"cls-hr\">\n  <div *ngIf=\"point>0\" class=\"div-voucher\">\n    <div class=\"div-flex\" >\n     \n        <div class=\"div-icon\"><img class=\"icon-point\" src=\"./assets/ic_voucher/ivvpoint_tealish.svg\"/></div>\n        <div class=\"div-text-center\">\n          <div class=\"width-150\">Sử dụng iVIVU point</div>\n          <div class=\"width-100 text-point text-right\">-{{gf.convertNumberToString(point)}}đ</div>\n        </div>\n        <div class=\"div-button\"><ion-toggle style=\"margin-top: -4px;\" class=\"toggle-promo\" (ionChange)=\"edit()\" [(ngModel)]=\"ischeck\"></ion-toggle></div>\n    </div>\n  \n    <div class=\"div-line\"></div>\n    <div class=\"div-flex\" (click)=\"showdiscount()\" *ngIf=\"!promocode\">\n      <div class=\"div-icon\"><img class=\"icon-point\" src=\"./assets/ic_voucher/ticket_tealish.svg\"/></div>\n      <div class=\"div-text-center \">\n        <div class=\"width-100\">Nhập mã giảm giá <span class=\"text-sub\">(iVIVU Voucher, MGift..)</span></div>\n      </div>\n      <div class=\"div-button width-10\"><img src=\"./assets/ic_ordersupport/next.svg\"></div>\n    </div>\n    <div class=\"div-voucher-apply\" *ngIf=\"promocode\" (click)=\"showdiscount()\">\n      <div class=\"width-200\">\n        <span class=\"text-normal\">Ưu đãi (</span>\n        <span class=\"text-code\" *ngIf=\"promocode\">{{promocode}}</span>\n        <span class=\"text-normal\">)</span> \n      </div>\n      <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"promocode\">{{gf.convertNumberToString(discountpromo)}}đ</div>\n    </div>\n    <ion-row> \n      <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n      <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n    </ion-row>\n    <!-- <div *ngIf=\"promocode && !(_voucherService.selectVoucher && _voucherService.selectVoucher.claimed) \" class=\"div-promotion\">\n      <ion-label (click)=\"showdiscount()\" class=\"text-point\">{{textpromotion}}</ion-label>\n    </div> -->\n\n    <hr class=\"cls-hr\" *ngIf=\"!_voucherService.hasVoucher\">\n    <app-voucherslidehotel></app-voucherslidehotel>\n      <div *ngIf=\"ischeck||ischeckbtnpromo\" >\n        <ion-row>\n          <ion-col size=\"5\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n              <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\" style=\"padding: 0;\">\n            <p  class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n              <sup>\n                <img  src=\"./assets/ic_green/ic_info.svg\">\n              </sup>\n            </p>\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"!ischeck&&!ischeckbtnpromo\" >\n          <ion-row>\n            <ion-col size=\"5\" style=\"padding: 0;\">\n              <div>\n                <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n                <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n              </div>\n            </ion-col>\n            <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\" style=\"padding: 0;\">\n              <p  class=\"total-price\" style=\"text-align: right\">\n                  {{PriceAvgPlusTAStr}}đ\n                  <sup>\n                    <img  src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                </p>\n            </ion-col>\n          </ion-row>\n        </div>\n    </div>\n    <div *ngIf=\"point<=0||!point\">\n    <div class=\"div-flex align-center\" (click)=\"showdiscount()\" *ngIf=\"!promocode\">\n      <div class=\"div-icon\"><img class=\"icon-point\" src=\"./assets/ic_voucher/ticket_tealish.svg\"/></div>\n      <div class=\"div-text-center\">\n        <div class=\"width-100\">Nhập mã giảm giá <span class=\"text-sub\">(iVIVU Voucher, MGift..)</span></div>\n      </div>\n      <div class=\"div-button width-10\"><img src=\"./assets/ic_ordersupport/next.svg\"></div>\n    </div>\n    <div class=\"div-voucher-apply\" *ngIf=\"promocode\" (click)=\"showdiscount()\">\n      <div class=\"width-200\">\n        <span class=\"text-normal\">Ưu đãi (</span>\n        <!-- <span class=\"text-code\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed \">{{_voucherService.selectVoucher.code}}</span> -->\n        <span class=\"text-code\" *ngIf=\"promocode\">{{promocode}}</span>\n        <span class=\"text-normal\">)</span> \n      </div>\n      <!-- <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed \">{{gf.convertNumberToString(_voucherService.selectVoucher.rewardsItem.price)}}đ</div> -->\n      <div class=\"width-100 text-normal text-right p-r-5\" *ngIf=\"promocode\">{{gf.convertNumberToString(discountpromo)}}đ</div>\n    </div>\n    <ion-row> \n      <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n      <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n    </ion-row>\n  <hr class=\"cls-hr\" *ngIf=\"!_voucherService.hasVoucher\">\n  <app-voucherslidehotel></app-voucherslidehotel>\n      <div *ngIf=\"!ischeckbtnpromo\">\n          <ion-row>\n              <ion-col size=\"5\" style=\"padding: 0;\">\n                <div>\n                  <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n                  <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n                </div>\n              </ion-col>\n              <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\" style=\"padding: 0;\">\n                <p class=\"total-price\" style=\"text-align: right\">\n                  {{PriceAvgPlusTAStr}}đ\n                  <sup>\n                    <img  src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                </p>\n                <!-- <p *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed\" class=\"text-room-price-ota\">\n                  {{gf.convertNumberToString(roomtype.PriceAvgPlusTAStr)}}đ\n                </p> -->\n              </ion-col>\n            </ion-row>\n      </div>\n     \n      <div *ngIf=\"ischeckbtnpromo\" >\n          <ion-row>\n            <ion-col size=\"5\" style=\"padding: 0;\">\n              <div>\n                <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n                <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n              </div>\n            </ion-col>\n            <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\" style=\"padding: 0;\">\n              <p  class=\"total-price\" style=\"text-align: right\">\n                {{Pricepointshow}}đ\n                <sup>\n                  <img  src=\"./assets/ic_green/ic_info.svg\">\n                </sup>\n              </p>\n              <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n                {{gf.convertNumberToString(roomtype.PriceAvgPlusTAStr)}}đ\n              </p>\n            </ion-col>\n          </ion-row>\n        </div>\n    </div>\n    <div *ngIf=\"nameroomEAN || nameroomHBED || specialCheckInInstructions\">\n      <hr class=\"cls-hr\">\n      <div class=\"text-title-note m-bottom-8\">NOTES: </div>\n      <div class=\"text-note m-bottom-8\" *ngIf=\"nameroomEAN\">* {{nameroomEAN}}</div>\n      <div class=\"text-note m-bottom-8\" *ngIf=\"nameroomHBED\">*  {{nameroomHBED}}</div>\n      <div class=\"text-note m-bottom-8\" *ngIf=\"specialCheckInInstructions\">*  {{specialCheckInInstructions}}</div>\n    </div>\n    \n  </div>\n\n  <ng-template #loadsk>\n    <div class=\"div-sk-detail\">\n      <ion-row class=\"row-item-hoteldetail-sk\">\n          <ion-col size=\"4\" class=\"col-img-hoteldetail-sk\" >\n              <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px;margin:0\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\" class=\"col-description-hoteldetail-sk\" style=\"line-height: 16px;padding-top: 0\">\n              <ion-skeleton-text animated style=\"width: 50%;margin: 0;height: 16px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 75%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n          </ion-col>\n      </ion-row>\n      <ion-row class=\"row-item-description-sk\">\n          <ion-skeleton-text animated style=\"width: 104px;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 83%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 67%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8.5\" style=\"padding: 0\"></ion-col>\n        <ion-col size=\"3.5\" style=\"padding: 0\"><ion-skeleton-text animated style=\"margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"6.3\" style=\"padding: 0\"></ion-col>\n          <ion-col size=\"5.7\" style=\"padding: 0\"><ion-skeleton-text animated style=\"margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text></ion-col>\n        </ion-row>\n      <ion-row class=\"row-item-button-sk\">\n          <ion-skeleton-text animated style=\"width: 100%;margin: 0;height: 48px;border-radius: 6px;margin-top:16px\"></ion-skeleton-text>\n      </ion-row>\n  </div>\n  </ng-template>\n\n\n  \n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2 button-footer\">Xác nhận</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roomdetailreview/roomdetailreview.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/roomdetailreview/roomdetailreview.module.ts ***!
  \*************************************************************/
/*! exports provided: RoomdetailreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomdetailreviewPageModule", function() { return RoomdetailreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roomdetailreview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roomdetailreview */ "./src/app/roomdetailreview/roomdetailreview.ts");
/* harmony import */ var _voucher_voucherslidehotel_voucherslidehotel_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../voucher/voucherslidehotel/voucherslidehotel.module */ "./src/app/voucher/voucherslidehotel/voucherslidehotel.module.ts");








let RoomdetailreviewPageModule = class RoomdetailreviewPageModule {
};
RoomdetailreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roomdetailreview__WEBPACK_IMPORTED_MODULE_6__["RoomdetailreviewPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _voucher_voucherslidehotel_voucherslidehotel_module__WEBPACK_IMPORTED_MODULE_7__["VoucherSlideHotelPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roomdetailreview__WEBPACK_IMPORTED_MODULE_6__["RoomdetailreviewPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RoomdetailreviewPageModule);



/***/ }),

/***/ "./src/app/roomdetailreview/roomdetailreview.scss":
/*!********************************************************!*\
  !*** ./src/app/roomdetailreview/roomdetailreview.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.text-name {\n  font-weight: bold;\n  font-size: 18px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 110px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.btnnonesuccess {\n  width: 90px;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roomdetailreview {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.click {\n  color: #447a00;\n}\n.none {\n  color: black;\n}\n.error {\n  color: #e52822;\n}\n.btnnone {\n  color: #F79221;\n  width: 90px;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.text-point {\n  font-size: 14px;\n  color: #222222;\n}\n.num-point {\n  font-size: 12px;\n  color: #828282;\n}\n.text-điscount {\n  font-size: 14px;\n}\n.cls-col {\n  align-self: center;\n}\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n}\n.cls-mt10 {\n  margin-top: -10px;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 7px;\n  background-color: #f2f2f2 !important;\n}\n.col-img-hoteldetail-sk {\n  padding: 0;\n}\n.div-title {\n  margin-top: 10px;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222222;\n}\n.text-promotion {\n  font-size: 14px;\n  color: #828282;\n}\n.div-voucher .div-flex {\n  display: flex;\n  align-items: center;\n}\n.div-voucher .div-flex .div-first {\n  width: 160px;\n}\n.div-voucher .div-flex .div-first .div-checkpoint {\n  display: flex;\n}\n.div-voucher .div-flex .div-first .check-point {\n  margin-top: 10px;\n  width: 16px;\n  height: 16px;\n}\n.div-voucher .div-flex .div-first .cls-ml8 {\n  margin-left: 8px;\n}\n.div-voucher .div-flex .div-first .div-disabled {\n  opacity: 0.5;\n}\n.div-voucher .div-flex .div-col-split {\n  width: 1px;\n  border-left: solid 0.5px #bdbdbd;\n  margin: 8px 0;\n}\n.div-voucher .div-flex .text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n  margin-right: 5px;\n}\n.div-voucher .div-flex .num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.div-voucher .div-flex .div-promotion {\n  margin-left: 8px;\n  align-self: center;\n}\n.m-width-280 {\n  min-width: 280px;\n}\n.text-right {\n  text-align: right;\n}\n.width-10 {\n  width: 10% !important;\n}\n.width-100 {\n  width: 100%;\n}\n.width-200 {\n  width: 200%;\n}\n.width-150 {\n  width: 150%;\n}\n.div-icon {\n  display: flex;\n  align-items: center;\n  width: 16px;\n}\n.div-text-center {\n  margin-right: 5px;\n  padding-left: 5px;\n  width: 85%;\n  display: flex;\n  font-size: 14px;\n  text-align: left;\n  color: #3f3b3b;\n}\n.div-text-center .text-sub {\n  color: #868998;\n}\n.div-text-center .text-point {\n  font-size: 14px;\n  font-weight: 500;\n  text-align: right;\n  color: #868998;\n}\n.div-button {\n  text-align: right;\n  width: 15%;\n  height: 24px;\n}\n.div-button ion-toggle.toggle-icon.toggle-inner {\n  width: 24px;\n}\n.div-line {\n  margin: 14px 0 18px 0;\n  border-bottom: solid 1px #f2f2f2;\n}\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  padding: 8px 0;\n  font-weight: 300;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n  line-height: 1.5;\n}\n.text-title-note {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n  line-height: 1.5;\n}\n.m-bottom-8 {\n  margin-bottom: 8px;\n}\n.margin-right-5 {\n  margin-right: 5px;\n}\n.line-blue {\n  color: #26bed6;\n  right: 16px;\n  position: absolute;\n}\n.div-flex {\n  display: flex;\n}\n.text-name-room {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 300px;\n}\n.text-address {\n  font-size: 14px;\n  color: #4f4f4f;\n  white-space: nowrap !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.div-address .div-location {\n  position: absolute;\n  margin-top: 0;\n  margin-left: -1px;\n}\n.div-address .img-location {\n  height: 15px;\n}\n.div-address .text-address {\n  position: relative;\n  line-height: 16px;\n  padding-left: 16px;\n}\n.div-address .color-blue {\n  color: #26bed6 !important;\n}\n.div-voucher-apply {\n  display: flex;\n  margin: 14px 0 6px 0;\n}\n.div-voucher-apply .width-100 {\n  width: 100%;\n}\n.div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.div-voucher-apply .text-code {\n  font-size: 14px;\n  color: #f79321;\n}\n.div-voucher-apply .text-strike {\n  text-decoration: line-through;\n  text-align: right;\n}\n.div-voucher-apply .text-right {\n  text-align: right;\n}\n.align-center {\n  display: flex;\n  align-items: center;\n}\n.text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.div-TaxFee {\n  background-color: wheat;\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbWRldGFpbHJldmlldy9yb29tZGV0YWlscmV2aWV3LnNjc3MiLCIvVXNlcnMvaXRkZXYvRG9jdW1lbnRzL0RldmVsb3AvT2xpdmlhX2lPUy9vbGl2aWFfaW9zIGhvdGZpeCAyLjkuNyB0b3VyL3NyYy9hcHAvcm9vbWRldGFpbHJldmlldy9yb29tZGV0YWlscmV2aWV3LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ1o7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QURBTjtBQ0NNO0VBRUUsY0FBQTtBREFSO0FDR0k7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FERFI7QUNHSTtFQUNFLDJCQUFBO0FEQU47QUNFSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURDTjtBQ0NJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRENSO0FDRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRENOO0FDQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBREVOO0FDQUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QURHTjtBQ0RFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBRElKO0FDRkU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREtKO0FDSEE7RUFFRSxzQkFBQTtBREtGO0FDSEE7RUFFSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBREtKO0FDRkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFREtGO0FBQ0Y7QUNGQTtFQUVFLGNBQUE7QURHRjtBQ0RBO0VBRUUsWUFBQTtBREdGO0FDREE7RUFFRSxjQUFBO0FER0Y7QUNEQTtFQUVJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FER0o7QUNEQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0FER0Y7QUNEQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0FER0Y7QUNEQTtFQUVFLGVBQUE7QURHRjtBQ0RBO0VBRUUsa0JBQUE7QURHRjtBQ0RBO0VBRUUsK0JBQUE7QURHRjtBQ0RBO0VBRUUsaUJBQUE7QURHRjtBQ0RBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBREdGO0FDQUE7RUFDRSxVQUFBO0FER0Y7QUNEQTtFQUNFLGdCQUFBO0FESUY7QUNIRTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURLTjtBQ0ZBO0VBRUUsZUFBQTtFQUNBLGNBQUE7QURJRjtBQ0RFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FESUo7QUNGSTtFQUNJLFlBQUE7QURJUjtBQ0ZRO0VBQ0UsYUFBQTtBRElWO0FDQVE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FERVY7QUNBUTtFQUVFLGdCQUFBO0FEQ1Y7QUNDUTtFQUNFLFlBQUE7QURDVjtBQ0dJO0VBQ0UsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBREROO0FDSUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURGTjtBQ0lJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBREZOO0FDS0k7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FESE47QUNRQTtFQUNFLGdCQUFBO0FETEY7QUNPQTtFQUNFLGlCQUFBO0FESkY7QUNNQTtFQUNFLHFCQUFBO0FESEY7QUNLQTtFQUNFLFdBQUE7QURGRjtBQ0lBO0VBQ0UsV0FBQTtBRERGO0FDR0E7RUFDRSxXQUFBO0FEQUY7QUNHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURBRjtBQ0dBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBREFGO0FDRUU7RUFDRSxjQUFBO0FEQUo7QUNHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBRERKO0FDTUE7RUFDRSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FESEY7QUNLRTtFQUNFLFdBQUE7QURISjtBQ09BO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtBREpGO0FDTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBREhGO0FDS0E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBREZGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBREZGO0FDSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEREY7QUNJQTtFQUNFLGtCQUFBO0FEREY7QUNHQTtFQUNFLGlCQUFBO0FEQUY7QUNFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURDRjtBQ0NBO0VBQ0UsYUFBQTtBREVGO0FDQUE7RUFDRSxnQkFBQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FER0o7QUNEQTtFQUNFLGVBQUE7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FESUo7QUNDRTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FERU47QUNBRTtFQUNJLFlBQUE7QURFTjtBQ0FFO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FERU47QUNBRTtFQUNFLHlCQUFBO0FERUo7QUNHQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBREFGO0FDRUU7RUFDRSxXQUFBO0FEQUo7QUNHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEREo7QUNHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FEREo7QUNJRTtFQUNFLDZCQUFBO0VBQ0MsaUJBQUE7QURGTDtBQ0tFO0VBQ0UsaUJBQUE7QURISjtBQ09BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FESkY7QUNNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FESEY7QUNLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBREZGIiwiZmlsZSI6InNyYy9hcHAvcm9vbWRldGFpbHJldmlldy9yb29tZGV0YWlscmV2aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5idG5ub25lc3VjY2VzcyB7XG4gIHdpZHRoOiA5MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICM0NDdhMDA7XG4gIGNvbG9yOiAjNDQ3YTAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLXJvb21kZXRhaWxyZXZpZXcge1xuICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxufVxuLmNsaWNrIHtcbiAgY29sb3I6ICM0NDdhMDA7XG59XG5cbi5ub25lIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmJ0bm5vbmUge1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXBvaW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLm51bS1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi50ZXh0LcSRaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNscy1jb2wge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG5cbi5jbHMtbXQxMCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG4uY29sLWltZy1ob3RlbGRldGFpbC1zayB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLnRleHQtcHJvbW90aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3Qge1xuICB3aWR0aDogMTYwcHg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmRpdi1jaGVja3BvaW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuY2hlY2stcG9pbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5jbHMtbWw4IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuZGl2LWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWNvbC1zcGxpdCB7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBtYXJnaW46IDhweCAwO1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAudGV4dC1wb2ludCB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAubnVtLXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1wcm9tb3Rpb24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tLXdpZHRoLTI4MCB7XG4gIG1pbi13aWR0aDogMjgwcHg7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi53aWR0aC0xMCB7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbn1cblxuLndpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2lkdGgtMjAwIHtcbiAgd2lkdGg6IDIwMCU7XG59XG5cbi53aWR0aC0xNTAge1xuICB3aWR0aDogMTUwJTtcbn1cblxuLmRpdi1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbi5kaXYtdGV4dC1jZW50ZXIge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzZjNiM2I7XG59XG4uZGl2LXRleHQtY2VudGVyIC50ZXh0LXN1YiB7XG4gIGNvbG9yOiAjODY4OTk4O1xufVxuLmRpdi10ZXh0LWNlbnRlciAudGV4dC1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjODY4OTk4O1xufVxuXG4uZGl2LWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uZGl2LWJ1dHRvbiBpb24tdG9nZ2xlLnRvZ2dsZS1pY29uLnRvZ2dsZS1pbm5lciB7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4uZGl2LWxpbmUge1xuICBtYXJnaW46IDE0cHggMCAxOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjJmMmYyO1xufVxuXG4uZGVwYXJ0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbnAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4udGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnRleHQtdGl0bGUtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5tLWJvdHRvbS04IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ubWFyZ2luLXJpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxpbmUtYmx1ZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICByaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGV4dC1uYW1lLXJvb20ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4udGV4dC1hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdi1hZGRyZXNzIC5kaXYtbG9jYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLmRpdi1hZGRyZXNzIC5pbWctbG9jYXRpb24ge1xuICBoZWlnaHQ6IDE1cHg7XG59XG4uZGl2LWFkZHJlc3MgLnRleHQtYWRkcmVzcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5kaXYtYWRkcmVzcyAuY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtdm91Y2hlci1hcHBseSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTRweCAwIDZweCAwO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC53aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM2YzYjNiO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LWNvZGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZjc5MzIxO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LXN0cmlrZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRleHQtbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzNmM2IzYjtcbn1cblxuLmRpdi1UYXhGZWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbiAgcGFkZGluZzogOHB4O1xufSIsIlxuICAgIC50ZXh0LW5hbWVcbiAgICB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIC50ZXh0LWdyZWVuXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XG4gICAgICB9XG4gICAgfVxuICAgIC50ZXh0LWRhdGVcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgIH1cbiAgICAuaW1hZ2UtY2FyZHtcbiAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRvdGFsLXByaWNle1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogNDhweDtcblxuICAgIH1cbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgfVxuICAgIC5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xuICAgIH1cbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcbiAgICAgIGNvbG9yOiM4MjgyODI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIH0gIFxuICAuZGl2LXdyYXBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6MTEwcHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaHJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbi5idG5ub25lc3VjY2Vzc1xue1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xuICAgIGNvbG9yOiAjNDQ3YTAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbWRldGFpbHJldmlld3tcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cblxufVxuLmNsaWNrXG57XG4gIGNvbG9yOiAjNDQ3YTAwXG59XG4ubm9uZVxue1xuICBjb2xvcjogYmxhY2tcbn1cbi5lcnJvclxue1xuICBjb2xvcjpyZ2IoMjI5LCA0MCwgMzQpO1xufVxuLmJ0bm5vbmVcbntcbiAgICBjb2xvcjogI0Y3OTIyMTtcbiAgICB3aWR0aDogOTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4udGV4dC1wb2ludFxue1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLm51bS1wb2ludFxue1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLnRleHQtxJFpc2NvdW50XG57XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jbHMtY29sXG57XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5pb24taXRlbVxue1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuLmNscy1tdDEwXG57XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNscy1oclxue1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtaW1nLWhvdGVsZGV0YWlsLXNre1xuICBwYWRkaW5nOiAwO1xufVxuLmRpdi10aXRsZXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLmNvbWJvLXRpdGxle1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgfVxufVxuLnRleHQtcHJvbW90aW9uXG57XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LXZvdWNoZXJ7XG4gIC5kaXYtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuZGl2LWZpcnN0e1xuICAgICAgICB3aWR0aDogMTYwcHg7XG5cbiAgICAgICAgLmRpdi1jaGVja3BvaW50e1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAuY2hlY2stcG9pbnR7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNscy1tbDhcbiAgICAgICAge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1kaXNhYmxlZHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LWNvbC1zcGxpdHtcbiAgICAgIHdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItbGVmdDogc29saWQgMC41cHggI2JkYmRiZDtcbiAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgfVxuICAgIFxuICAgIC50ZXh0LXBvaW50e1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIC5udW0tcG9pbnQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cblxuICAgIC5kaXYtcHJvbW90aW9ue1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxufVxuLm0td2lkdGgtMjgwe1xuICBtaW4td2lkdGg6IDI4MHB4O1xufVxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi53aWR0aC0xMCB7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbn1cbi53aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi53aWR0aC0yMDAge1xuICB3aWR0aDogMjAwJTtcbn1cbi53aWR0aC0xNTAge1xuICB3aWR0aDogMTUwJTtcbn1cblxuLmRpdi1pY29ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTZweDtcbiAgXG59XG4uZGl2LXRleHQtY2VudGVye1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA4NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzZjNiM2I7XG5cbiAgLnRleHQtc3ViIHtcbiAgICBjb2xvcjogIzg2ODk5ODtcbiAgfVxuXG4gIC50ZXh0LXBvaW50IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogIzg2ODk5ODtcbiAgfVxuIFxufVxuXG4uZGl2LWJ1dHRvbntcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMjRweDtcblxuICBpb24tdG9nZ2xlLnRvZ2dsZS1pY29uLnRvZ2dsZS1pbm5lciB7XG4gICAgd2lkdGg6IDI0cHg7XG4gIH1cbiAgXG59XG4uZGl2LWxpbmUge1xuICBtYXJnaW46IDE0cHggMCAxOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZjJmMmYyO1xufVxuLmRlcGFydC10aXRsZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLnRleHQtbm90ZXtcbiAgZm9udC1zaXplOjEycHg7XG4gIGNvbG9yOiM4MjgyODI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4udGV4dC10aXRsZS1ub3Rle1xuICBmb250LXNpemU6MTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5tLWJvdHRvbS04e1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ubWFyZ2luLXJpZ2h0LTV7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmxpbmUtYmx1ZXtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGl2LWZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGV4dC1uYW1lLXJvb217XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMzAwcHg7XG59XG4udGV4dC1hZGRyZXNze1xuICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kaXYtYWRkcmVzc3tcblxuICAuZGl2LWxvY2F0aW9ue1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG4gIC5pbWctbG9jYXRpb257XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gIH1cbiAgLnRleHQtYWRkcmVzc3tcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB9XG4gIC5jb2xvci1ibHVle1xuICAgIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnRcbiAgfVxuICBcbn1cblxuLmRpdi12b3VjaGVyLWFwcGx5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNHB4IDAgNnB4IDA7XG5cbiAgLndpZHRoLTEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAudGV4dC1ub3JtYWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzNmM2IzYjtcbiAgfVxuICAudGV4dC1jb2RlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmNzkzMjE7XG4gIH1cblxuICAudGV4dC1zdHJpa2Uge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXh0LW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzZjNiM2I7XG59XG4uZGl2LVRheEZlZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG4gIHBhZGRpbmc6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roomdetailreview/roomdetailreview.ts":
/*!******************************************************!*\
  !*** ./src/app/roomdetailreview/roomdetailreview.ts ***!
  \******************************************************/
/*! exports provided: RoomdetailreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomdetailreviewPage", function() { return RoomdetailreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../adddiscount/adddiscount.page */ "./src/app/adddiscount/adddiscount.page.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");













let RoomdetailreviewPage = class RoomdetailreviewPage {
    constructor(searchhotel, platform, valueGlobal, navCtrl, Roomif, zone, booking, bookCombo, storage, alertCtrl, value, modalCtrl, gf, loadingCtrl, fb, activityService, _voucherService) {
        this.searchhotel = searchhotel;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.zone = zone;
        this.booking = booking;
        this.bookCombo = bookCombo;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.value = value;
        this.modalCtrl = modalCtrl;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.activityService = activityService;
        this._voucherService = _voucherService;
        this.textage = "";
        this.ischeckbtnpromo = false;
        this.ischeckpoint = false;
        this.ischeck = false;
        this.ischecktext = 3;
        this.ischeckerror = 0;
        this.textpromotion = "iVIVU Voucher | Mobile Gift";
        this.loaddatadone = false;
        this.ischeckroom = "";
        this.RoomType = "";
        this.nameroomEAN = "";
        this.nameroomHBED = "";
        this.specialCheckInInstructions = "";
        this.ischeckpayment = Roomif.ischeckpayment;
        this.Avatar = Roomif.imgHotel;
        this.Name = booking.HotelName;
        this.Address = Roomif.Address;
        this.cin = booking.CheckInDate;
        this.cout = booking.CheckOutDate;
        this.dur = Roomif.dur;
        this.roomnumber = Roomif.roomnumber;
        this.adults = booking.Adults;
        this.children = booking.Child;
        this.roomtype = Roomif.roomtype;
        this.indexme = booking.indexmealtype;
        this.indexroom = booking.indexroom;
        this.jsonroom = Roomif.jsonroom;
        this.room = Roomif.arrroom;
        var chuoicin = this.cin.split('-');
        var chuoicout = this.cout.split('-');
        this.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
        this.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
        this.nameroom = this.room[0].ClassName;
        this.roomcancel = this.room[0].MealTypeRates[this.indexme];
        this.breakfast = this.room[0].MealTypeRates[this.indexme].Name;
        if (this.room[0].MealTypeRates[this.indexme].RoomName != this.room[0].ClassName) {
            this.nameroomEAN = this.room[0].MealTypeRates[this.indexme].RoomName;
        }
        this.specialCheckInInstructions = this.jsonroom.SpecialCheckInInstructions;
        if (this.Roomif.objMealType.Notes.length != 0 && this.Roomif.objMealType.Notes[0].length != this.Roomif.objMealType.Name.length) {
            if (this.breakfast) {
                this.breakfast += ", " + this.Roomif.objMealType.Notes[0];
            }
            else {
                this.breakfast = this.Roomif.objMealType.Notes[0];
            }
        }
        this.statusRoom = this.room[0].MealTypeRates[this.indexme].Status;
        this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
        this.value.flagreview = 1;
        this.titlecombo = this.bookCombo.ComboTitle;
        this.arrchild = this.searchhotel.arrchild;
        this.ischeckroom = this.room[0].MealTypeRates[this.indexme].Supplier;
        this.RoomType = this.room[0].RoomType;
        if (this.arrchild) {
            for (let i = 0; i < this.arrchild.length; i++) {
                if (i == this.arrchild.length - 1) {
                    this.textage = this.textage + this.arrchild[i].numage;
                }
                else {
                    this.textage = this.textage + this.arrchild[i].numage + ",";
                }
            }
            if (this.textage) {
                this.textage = "(" + this.textage + ")";
            }
        }
        this.loaddatadone = true;
        if (this.activityService.objFlightComboUpgrade) {
            this.elementMealtype = this.activityService.objFlightComboUpgrade.CurrentRoom;
            this.indexMealTypeRates = this.activityService.objFlightComboUpgrade.CurrentRoomIndex;
        }
    }
    ngOnInit() {
        this._voucherService.getHotelObservable().subscribe((itemVoucher) => {
            if (this._voucherService.itemSelectVoucherHotel.observers && this._voucherService.itemSelectVoucherHotel.observers.length > 1) {
                if (this._voucherService.itemSelectVoucherHotel.observers[1]) {
                    this._voucherService.itemSelectVoucherHotel.observers.pop();
                }
            }
            if (itemVoucher) {
                if (this.promocode && this.promocode != itemVoucher.code && !this.itemVoucherHotel) {
                    this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
                    this.gf.showAlertMessageOnly(`Mã voucher ${this.promocode} đang được sử dụng. Quý khách vui lòng kiểm tra lại.`);
                    return;
                }
                if (itemVoucher.claimed) {
                    this._voucherService.selectVoucher = itemVoucher;
                    this.itemVoucherHotel = itemVoucher;
                    this.promocode = itemVoucher.code;
                    this.discountpromo = itemVoucher.rewardsItem.price;
                    this.ischeckbtnpromo = true;
                    this.ischeckpromo = true;
                }
                else {
                    this._voucherService.selectVoucher = null;
                    this.itemVoucherHotel = null;
                    this.promocode = "";
                    this.discountpromo = 0;
                    this.ischeckbtnpromo = false;
                    this.ischeckpromo = false;
                }
                this.edit();
                this.modalCtrl.dismiss();
            }
        });
        this._voucherService.getObservableClearVoucherAfterPaymentDone().subscribe((check) => {
            if (check) {
                this._voucherService.selectVoucher = null;
                this.itemVoucherHotel = null;
                this.promocode = "";
                this.discountpromo = 0;
                this.ischeckbtnpromo = false;
                this.ischeckpromo = false;
                this.Roomif.promocode = "";
                this.Roomif.priceshow = "";
                this.edit();
            }
        });
    }
    roompaymentbreakdow() {
        var dur = this.dur;
        var roomnumber = this.roomnumber;
        this.searchhotel.backPage = "roomdetailreview";
        this.valueGlobal.backValue = 'roompaymentbreakdown';
        this.navCtrl.navigateForward('/roompaymentbreakdown/' + dur + '/' + roomnumber);
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loader = yield this.loadingCtrl.create({
                duration: 1500
            });
            loader.present();
        });
    }
    next() {
        this.Roomif.priceshow = "";
        this.Roomif.pricepoint = 0;
        this.Roomif.ischeckpoint = false;
        if (this.point > 0) {
            if (this.ischeck) {
                this.Roomif.ischeckpoint = this.ischeck;
                this.Roomif.priceshow = this.Pricepointshow;
                if (this.ischeckpoint) {
                    this.Roomif.pricepoint = this.roomtype.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                }
                else {
                    this.Roomif.pricepoint = this.point;
                }
            }
            else {
                this.Roomif.ischeckpoint = this.ischeck;
                this.Roomif.priceshow = this.PriceAvgPlusTAStr;
                this.Roomif.point = null;
            }
        }
        else {
            this.Roomif.priceshow = this.PriceAvgPlusTAStr;
        }
        if (this.ischeckbtnpromo) {
            this.Roomif.promocode = this.promocode;
            this.Roomif.priceshow = this.Pricepointshow;
        }
        else if (this._voucherService.selectVoucher && this._voucherService.selectVoucher.claimed) {
            this.Roomif.promocode = this._voucherService.selectVoucher.code;
            this.Roomif.priceshow = this.Pricepointshow;
        }
        else {
            this.Roomif.promocode = "";
            this.promocode = "";
        }
        this.valueGlobal.backValue = '';
        if (this.room[0].MealTypeRates[this.indexme].Supplier == 'Internal' || this.room[0].MealTypeRates[this.indexme].Supplier == 'B2B') {
            this.navCtrl.navigateForward('roomadddetails');
        }
        else {
            if (this.room[0].MealTypeRates[this.indexme].Supplier == 'EAN') {
                this.Roomif.ExcludeVAT = 1;
            }
            this.navCtrl.navigateForward('roomadddetails-ean');
        }
        this.gf.googleAnalytionCustom('add_to_cart', { item_category: 'roomdetail', item_name: this.booking.HotelName, item_id: this.booking.code, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate, value: Number(this.booking.cost.replace(/\./g, '').replace(/\,/g, '')), currency: 'VND' });
        let se = this;
        se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, { 'fb_content_type': 'hotel', 'fb_content_id': se.booking.code, 'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.booking.cost), 'fb_currency': 'VND',
            'checkin_date': se.searchhotel.CheckInDate, 'checkout_date ': se.searchhotel.CheckOutDate, 'num_adults': se.searchhotel.adult, 'num_children': (se.searchhotel.child ? se.searchhotel.child : 0),
            'value': se.gf.convertNumberToDouble(se.booking.cost), 'currency': 'VND' }, se.gf.convertNumberToFloat(se.booking.cost));
    }
    ionViewWillEnter() {
        if (this.valueGlobal.backValue != 'roompaymentbreakdown') {
            if (this.itemVoucherHotel) {
                this._voucherService.rollbackSelectedVoucher.emit(this.itemVoucherHotel);
            }
            this.point = 0;
            this.ischeck = false;
            this.Roomif.point = null;
            this.price = 0;
            this.textpromotion = "iVIVU Voucher | Mobile Gift";
            this.promocode = "";
            this.ischeckbtnpromo = false;
            this.ischeckpromo = false;
            this.msg = "";
            this.itemVoucherHotel = null;
        }
        this.bookCombo.upgradeRoomChange.pipe().subscribe((dataRoomChange) => {
            if (dataRoomChange) {
                this.updateRoomChange(dataRoomChange);
            }
        });
        this.GetUserInfo();
        this.edit();
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
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
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
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (response.statusCode == 400 || response.statusCode == 401) {
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_8___default()(au.auth_token);
                            se.storage.remove('point');
                            se.storage.set('point', decoded.point);
                            se.storage.get('point').then(point => {
                                if (point) {
                                    if (point > 0) {
                                        se.pointshow = point;
                                        se.Roomif.point = point;
                                        se.point = point * 1000;
                                        se.price = se.point.toLocaleString();
                                        var tempprice = se.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                                        se.Pricepoint = tempprice - se.point;
                                        if (se.Pricepoint <= 0) {
                                            se.ischeckpoint = true;
                                        }
                                    }
                                }
                                se.GetUserInfo();
                            });
                        });
                    }
                });
            }
        });
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.navCtrl.navigateBack('/');
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.navCtrl.navigateForward('/login');
                        }
                    },
                ]
            });
            alert.present();
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
    edit() {
        this.zone.run(() => {
            if (this.ischeck) {
                if (this.ischeckpoint) {
                    this.Pricepointshow = 0;
                }
                else {
                    if (this.ischeckpromo) {
                        this.price = this.point.toLocaleString();
                        var tempprice = this.roomtype.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                        this.Pricepoint = tempprice - this.point - this.discountpromo;
                        if (this.Pricepoint * 1 < 0) {
                            this.Pricepoint = 0;
                        }
                        this.Pricepointshow = this.Pricepoint.toLocaleString();
                    }
                    else {
                        this.price = this.point.toLocaleString();
                        var tempprice = this.roomtype.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                        this.Pricepoint = tempprice - this.point;
                        if (this.Pricepoint * 1 < 0) {
                            this.Pricepoint = 0;
                        }
                        this.Pricepointshow = this.Pricepoint.toLocaleString();
                        if (this.Pricepoint <= 0) {
                            this.ischeckpoint = true;
                            this.Pricepointshow = 0;
                        }
                    }
                }
            }
            else {
                if (this.ischeckpromo) {
                    var tempprice = this.roomtype.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                    this.Pricepointshow = tempprice - this.discountpromo;
                    if (this.Pricepointshow * 1 <= 0) {
                        this.Pricepointshow = 0;
                    }
                    this.Pricepointshow = this.Pricepointshow.toLocaleString();
                    this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
                }
                else {
                    this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
                }
            }
        });
    }
    goback() {
        this.promocode = "";
        this.discountpromo = 0;
        this.itemVoucherHotel = null;
        this.valueGlobal.backValue = '';
        this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
    }
    openRoomCancel() {
        this.gf.setParams(this.roomcancel, 'roomInfo');
        this.searchhotel.backPage = "roomdetailreview";
        this.navCtrl.navigateForward('/roomcancel');
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
                body: { code: se.promocode, totalAmount: se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, ''), comboDetailId: this.bookCombo.ComboId },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
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
    textchange() {
        this.ischeckbtnpromo = false;
        this.discountpromo = 0;
        this.ischeckerror = 0;
        this.msg = "";
        this.ischecktext = 3;
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
        this.msg = "";
    }
    showdiscount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            jquery__WEBPACK_IMPORTED_MODULE_10__('.div-point').removeClass('div-disabled');
            this.valueGlobal.PriceAvgPlusTAStr = this.PriceAvgPlusTAStr;
            this.textpromotion = "iVIVU Voucher | Mobile Gift";
            this.promocode = "";
            this.discountpromo = 0;
            this.ischeckbtnpromo = false;
            this.ischeckpromo = false;
            this.itemVoucherHotel = null;
            this._voucherService.openFrom = 'roomdetailreview';
            this.msg = "";
            const modal = yield this.modalCtrl.create({
                component: _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_9__["AdddiscountPage"],
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
                            jquery__WEBPACK_IMPORTED_MODULE_10__('.div-point').addClass('div-disabled');
                            this.promocode = data.data.promocode;
                            this.textpromotion = data.data.promocode;
                            this.promofunc();
                        }
                    });
                }
            });
        });
    }
    upgradeRoom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.activityService.objFlightComboUpgrade = {};
            se.activityService.objFlightComboUpgrade.CurrentRoom = se.elementMealtype;
            se.activityService.objFlightComboUpgrade.CurrentRoomIndex = se.indexMealTypeRates;
            se.valueGlobal.backValue = "hotelupgraderoom";
            se.valueGlobal.notRefreshDetail = true;
            se.navCtrl.navigateForward('/hotelupgraderoom');
        });
    }
    updateRoomChange(dataRoomChange) {
        var se = this;
        this.objroomfsale = [];
        se.PriceAvgPlusTAStr = dataRoomChange.itemroom.MealTypeRates[dataRoomChange.index].PriceAvgPlusTAStr;
        this.statusRoom = dataRoomChange.itemroom.MealTypeRates[dataRoomChange.index].Status;
        this.booking.indexmealtype = dataRoomChange.index;
        se.nameroom = dataRoomChange.itemroom.ClassName;
        se.bookCombo.roomNb = dataRoomChange.itemroom.TotalRoom;
        se.elementMealtype = dataRoomChange.itemroom.MealTypeRates[dataRoomChange.index];
        this.objroomfsale.push(dataRoomChange.itemroom.MealTypeRates[dataRoomChange.index]);
        if (se.objroomfsale[0].Status == 'RQ' || se.objroomfsale[0].Supplier == 'B2B') {
            se.Roomif.payment = "RQ";
        }
        else {
            se.Roomif.payment = "AL";
        }
        this.indexMealTypeRates = dataRoomChange.index;
        this.arrroomFS = [];
        this.arrroomFS.push(dataRoomChange.itemroom);
        this.Roomif.roomtype = this.objroomfsale[0];
        this.roomtype = this.objroomfsale[0];
        this.Roomif.HotelRoomHBedReservationRequest = JSON.stringify(this.arrroomFS[0].HotelRoomHBedReservationRequest);
        this.Roomif.arrroom = this.arrroomFS;
        this.Roomif.imgRoom = this.arrroomFS[0].Rooms[0].ImagesMaxWidth320;
    }
    nextShuttlebus() {
        this.navCtrl.navigateForward("/shuttlebusnote");
    }
};
RoomdetailreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roomdetailreview',
        template: __webpack_require__(/*! ./roomdetailreview.html */ "./src/app/roomdetailreview/roomdetailreview.html"),
        styles: [__webpack_require__(/*! ./roomdetailreview.scss */ "./src/app/roomdetailreview/roomdetailreview.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__["Facebook"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["ActivityService"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_12__["voucherService"]])
], RoomdetailreviewPage);



/***/ })

}]);
//# sourceMappingURL=roomdetailreview-roomdetailreview-module.js.map