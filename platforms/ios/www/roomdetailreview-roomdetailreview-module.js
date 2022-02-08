(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roomdetailreview-roomdetailreview-module"],{

/***/ "./src/app/roomdetailreview/roomdetailreview.html":
/*!********************************************************!*\
  !*** ./src/app/roomdetailreview/roomdetailreview.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomdetailreviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row style=\"padding-top:11px\">\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\">\n        <div style=\"position: absolute;height: 48px;width: 48px;\" (click)=\"goback()\">\n          <img style=\"height: 48px; padding: 8px;margin-top:-4px;margin-left:-8px\"\n            src=\"./assets/imgs/ios-arrow-round-back.svg\">\n        </div>\n\n        <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Kiểm tra</label>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content padding>\n  <div *ngIf=\"loaddatadone else loadsk\">\n    <div *ngIf=\"ischeckpayment\" style=\"text-align: center\">\n      <img  src=\"./assets/step/step_1.svg\">\n  </div>\n  <div *ngIf=\"!ischeckpayment\" style=\"text-align: center\">\n    <img  src=\"./assets/step/fc_step_1.svg\">\n    </div>\n    <div *ngIf=\"titlecombo\" class=\"div-title\">\n      <ion-label class=\"combo-title\">{{titlecombo}}</ion-label>\n    </div>\n  <ion-row style=\"padding:14px 0\">\n    <ion-col size=\"4\" style=\"padding: 5px 0px;\">\n      <div class=\"div-wrapimg\">\n        <img style=\"border-radius: 5px;height: 100%\" src={{Avatar}}>\n      </div>\n    </ion-col>\n    <ion-col size=\"8\" style=\"padding:3px\" class=\"col-description-roomdetailreview\">\n      <div style=\"margin-left: 3px\">\n        <h2 class=\"text-name\" style=\"margin-top: 0\" text-wrap>{{Name}}\n        </h2>\n        <p style=\"font-size: 14px;color: #4f4f4f\" text-wrap>\n          <img src=\"./assets/ic_facility/Group.svg\"> {{Address}}\n        </p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <hr>\n  <div>\n    <ion-grid style=\"padding:0\">\n      <ion-row style=\"font-size:12px\">\n        <ion-col size=\"5\" style=\"padding:0\">\n          <ion-label style=\"font-weight: 300;color: #4f4f4f\" stacked>Nhận phòng</ion-label>\n        </ion-col>\n        <ion-col size=\"5\" style=\"padding:0\">\n          <ion-label style=\"font-weight: 300;color: #4f4f4f\" stacked>Trả phòng</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0\">\n          <ion-label style=\"font-weight: 300;padding-left: 4px;color: #4f4f4f\" stacked>Số đêm</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"4.5\" style=\"padding:0\">\n          <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px\" stacked>{{cin}}</ion-label>\n        </ion-col>\n        <ion-col size=\"0.5\" style=\"padding: 0;\">\n          <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n        </ion-col>\n        <ion-col size=\"4.5\" style=\"padding:0\">\n          <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px\" stacked>{{cout}}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"0.5\" style=\"padding: 0;margin-left: -3px;\">\n          <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n        </ion-col>\n        <ion-col size=\"2\" style=\"padding:0\">\n          <ion-label style=\"padding: 0px;font-weight: bold;font-size: 14px;margin-left: 10px\" stacked>{{dur}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <hr>\n  <div>\n    <label class=\"text-name\">\n      {{nameroom}}\n    </label>\n    <p style=\"color: #666;font-size: 14px\" text-wrap>\n      <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{roomnumber}} {{RoomType}} | {{adults}} người lớn |\n      {{children}} trẻ em {{textage}}\n      <p>\n        <p style=\"color: #666;font-size: 14px\">\n          <img class=\"image-card\" *ngIf=\"breakfast\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}}\n          <p>\n  </div>\n  <hr  *ngIf=\"ischeckroom!='Internal'\"class=\"cls-hr\">\n   <div *ngIf=\"ischeckroom!='Internal'\">\n    <label (click)=\"openRoomCancel()\" class=\"depart-title\">\n      Chính sách hủy phòng\n    </label>\n  </div>\n  <hr class=\"cls-hr\">\n  <div *ngIf=\"point>0\" class=\"div-voucher\">\n    <div class=\"div-flex\">\n      <div class=\"div-first\">\n        <div *ngIf=\"!ischeckpoint\" class=\"div-checkpoint\">\n            <ion-checkbox class=\"check-point\" mode=\"md\" (ionChange)=\"edit()\" [disabled]=\"ischeckbtnpromo==true?'true':false\" checked=\"false\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n            <div class=\"div-point cls-ml8\">\n              <div  class=\"text-point\">Dùng {{pointshow}} điểm</div>\n              <div class=\"num-point\">\n              (-{{price}}đ)\n              </div>\n            </div>\n        </div>\n        <div *ngIf=\"ischeckpoint\" class=\"div-checkpoint\">\n            <ion-checkbox class=\"check-point\" mode=\"md\" (ionChange)=\"edit()\" checked=\"false\" [disabled]=\"ischeckbtnpromo==true?'true':false\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n            <div class=\"div-point cls-ml8\">\n              <div  class=\"text-point\">Dùng {{pointshow}} điểm</div>\n              <div class=\"num-point\">\n              (-{{PriceAvgPlusTAStr}}đ)\n              </div>\n            </div>\n        </div>\n      </div>\n      <div  class=\"div-col-split\">\n      </div>\n       \n      <div *ngIf=\"!ischeck\" class=\"div-promotion\">\n      <ion-label (click)=\"showdiscount()\" class=\"text-point\">{{textpromotion}}</ion-label>\n      </div>\n      <div *ngIf=\"ischeck\" class=\"div-promotion\">\n        <ion-label class=\"text-promotion\">Nhập mã giảm giá</ion-label>\n        </div>\n    </div>\n    <hr class=\"cls-hr\">\n      <div *ngIf=\"ischeck||ischeckbtnpromo\" >\n        <ion-row>\n          <ion-col size=\"5\" style=\"padding: 0;\">\n            <div>\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n              <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n            </div>\n          </ion-col>\n          <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\" style=\"padding: 0;\">\n            <p  class=\"total-price\" style=\"text-align: right\">\n              {{Pricepointshow}}đ\n              <sup>\n                <img  src=\"./assets/ic_green/ic_info.svg\">\n              </sup>\n            </p>\n            <!-- <p *ngIf=\"!ischeck\" class=\"total-price\" style=\"text-align: right\">\n              {{PriceAvgPlusTAStr}}đ\n              <sup>\n                <img (click)=\"roompaymentbreakdow()\" src=\"./assets/ic_green/ic_info.svg\">\n              </sup>\n            </p> -->\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n              {{PriceAvgPlusTAStr}}đ\n            </p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf=\"!ischeck&&!ischeckbtnpromo\" >\n          <ion-row>\n            <ion-col size=\"5\" style=\"padding: 0;\">\n              <div>\n                <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n                <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n              </div>\n            </ion-col>\n            <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\" style=\"padding: 0;\">\n              <p  class=\"total-price\" style=\"text-align: right\">\n                  {{PriceAvgPlusTAStr}}đ\n                  <sup>\n                    <img  src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                </p>\n            </ion-col>\n          </ion-row>\n        </div>\n    </div>\n    <div *ngIf=\"point<=0||!point\">\n      <div>\n          <ion-row (click)=\"showdiscount()\">\n                  <label *ngIf=\"!promocode\" class=\"depart-title\" >Nhập mã giảm giá</label>\n                  <label *ngIf=\"promocode\" class=\"depart-title\" >{{textpromotion}}</label>\n          </ion-row>\n          <ion-row> \n              <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\n              <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\n          </ion-row>\n  </div>\n  <hr class=\"cls-hr\">\n      <div *ngIf=\"!ischeckbtnpromo\">\n          <ion-row>\n              <ion-col size=\"5\" style=\"padding: 0;\">\n                <div>\n                  <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n                  <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n                </div>\n              </ion-col>\n              <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\" style=\"padding: 0;\">\n                <p class=\"total-price\" style=\"text-align: right\">\n                  {{PriceAvgPlusTAStr}}đ\n                  <sup>\n                    <img  src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                </p>\n              </ion-col>\n            </ion-row>\n      </div>\n     \n      <div *ngIf=\"ischeckbtnpromo\" >\n          <ion-row>\n            <ion-col size=\"5\" style=\"padding: 0;\">\n              <div>\n                <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n                <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n              </div>\n            </ion-col>\n            <ion-col (click)=\"roompaymentbreakdow()\" size=\"7\" style=\"padding: 0;\">\n              <p  class=\"total-price\" style=\"text-align: right\">\n                {{Pricepointshow}}đ\n                <sup>\n                  <img  src=\"./assets/ic_green/ic_info.svg\">\n                </sup>\n              </p>\n              <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\n                {{PriceAvgPlusTAStr}}đ\n              </p>\n            </ion-col>\n          </ion-row>\n        </div>\n    </div>\n    <div *ngIf=\"nameroomEAN || nameroomHBED || specialCheckInInstructions\">\n      <hr class=\"cls-hr\">\n      <div class=\"text-title-note m-bottom-8\">NOTES: </div>\n      <div class=\"text-note m-bottom-8\" *ngIf=\"nameroomEAN\">* {{nameroomEAN}}</div>\n      <div class=\"text-note m-bottom-8\" *ngIf=\"nameroomHBED\">*  {{nameroomHBED}}</div>\n      <div class=\"text-note m-bottom-8\" *ngIf=\"specialCheckInInstructions\">*  {{specialCheckInInstructions}}</div>\n    </div>\n    \n  </div>\n\n  <ng-template #loadsk>\n    <div class=\"div-sk-detail\">\n      <ion-row class=\"row-item-hoteldetail-sk\">\n          <ion-col size=\"4\" class=\"col-img-hoteldetail-sk\" >\n              <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px;margin:0\"></ion-skeleton-text>\n          </ion-col>\n          <ion-col size=\"8\" class=\"col-description-hoteldetail-sk\" style=\"line-height: 16px;padding-top: 0\">\n              <ion-skeleton-text animated style=\"width: 50%;margin: 0;height: 16px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 75%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n          </ion-col>\n      </ion-row>\n      <ion-row class=\"row-item-description-sk\">\n          <ion-skeleton-text animated style=\"width: 104px;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 83%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 67%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"8.5\" style=\"padding: 0\"></ion-col>\n        <ion-col size=\"3.5\" style=\"padding: 0\"><ion-skeleton-text animated style=\"margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"6.3\" style=\"padding: 0\"></ion-col>\n          <ion-col size=\"5.7\" style=\"padding: 0\"><ion-skeleton-text animated style=\"margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text></ion-col>\n        </ion-row>\n      <ion-row class=\"row-item-button-sk\">\n          <ion-skeleton-text animated style=\"width: 100%;margin: 0;height: 48px;border-radius: 6px;margin-top:16px\"></ion-skeleton-text>\n      </ion-row>\n  </div>\n  </ng-template>\n\n\n  \n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2 button-footer\">Xác nhận</button>\n  </div>\n</ion-footer>"

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

module.exports = "@charset \"UTF-8\";\n.text-name {\n  font-weight: bold;\n  font-size: 18px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 110px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.btnnonesuccess {\n  width: 90px;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n  color: #447a00;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roomdetailreview {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.click {\n  color: #447a00;\n}\n.none {\n  color: black;\n}\n.error {\n  color: #e52822;\n}\n.btnnone {\n  color: #F79221;\n  width: 90px;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.text-point {\n  font-size: 14px;\n  color: #222222;\n}\n.num-point {\n  font-size: 12px;\n  color: #828282;\n}\n.text-điscount {\n  font-size: 14px;\n}\n.cls-col {\n  align-self: center;\n}\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n}\n.cls-mt10 {\n  margin-top: -10px;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 7px;\n  background-color: #f2f2f2 !important;\n}\n.col-img-hoteldetail-sk {\n  padding: 0;\n}\n.div-title {\n  margin-top: 10px;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222222;\n}\n.text-promotion {\n  font-size: 14px;\n  color: #828282;\n}\n.div-voucher .div-flex {\n  display: flex;\n}\n.div-voucher .div-flex .div-first {\n  width: 160px;\n}\n.div-voucher .div-flex .div-first .div-checkpoint {\n  display: flex;\n}\n.div-voucher .div-flex .div-first .check-point {\n  margin-top: 10px;\n  width: 16px;\n  height: 16px;\n}\n.div-voucher .div-flex .div-first .cls-ml8 {\n  margin-left: 8px;\n}\n.div-voucher .div-flex .div-first .div-disabled {\n  opacity: 0.5;\n}\n.div-voucher .div-flex .div-col-split {\n  width: 1px;\n  border-left: solid 0.5px #bdbdbd;\n  margin: 8px 0;\n}\n.div-voucher .div-flex .text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-voucher .div-flex .num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.div-voucher .div-flex .div-promotion {\n  margin-left: 8px;\n  align-self: center;\n}\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  padding: 8px 0;\n  font-weight: 300;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n  line-height: 1.5;\n}\n.text-title-note {\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n  line-height: 1.5;\n}\n.m-bottom-8 {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbWRldGFpbHJldmlldy9yb29tZGV0YWlscmV2aWV3LnNjc3MiLCIvVXNlcnMvZGV2LWl2aXZ1L0RvY3VtZW50cy9EZXZlbG9wL29saXZpYV9pb3Mvc3JjL2FwcC9yb29tZGV0YWlscmV2aWV3L3Jvb21kZXRhaWxyZXZpZXcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDWjtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBREFOO0FDQ007RUFFRSxjQUFBO0FEQVI7QUNHSTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUREUjtBQ0dJO0VBQ0UsMkJBQUE7QURBTjtBQ0VJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRENOO0FDQ0k7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEQ1I7QUNFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FEQ047QUNDSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FERU47QUNBSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBREdOO0FDREU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FESUo7QUNGRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FES0o7QUNIQTtFQUVFLHNCQUFBO0FES0Y7QUNIQTtFQUVJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FES0o7QUNGQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VES0Y7QUFDRjtBQ0ZBO0VBRUUsY0FBQTtBREdGO0FDREE7RUFFRSxZQUFBO0FER0Y7QUNEQTtFQUVFLGNBQUE7QURHRjtBQ0RBO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QURHSjtBQ0RBO0VBRUUsZUFBQTtFQUNBLGNBQUE7QURHRjtBQ0RBO0VBRUUsZUFBQTtFQUNBLGNBQUE7QURHRjtBQ0RBO0VBRUUsZUFBQTtBREdGO0FDREE7RUFFRSxrQkFBQTtBREdGO0FDREE7RUFFRSwrQkFBQTtBREdGO0FDREE7RUFFRSxpQkFBQTtBREdGO0FDREE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FER0Y7QUNBQTtFQUNFLFVBQUE7QURHRjtBQ0RBO0VBQ0UsZ0JBQUE7QURJRjtBQ0hFO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREtOO0FDRkE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtBRElGO0FDREU7RUFDRSxhQUFBO0FESUo7QUNGSTtFQUNJLFlBQUE7QURJUjtBQ0ZRO0VBQ0UsYUFBQTtBRElWO0FDQVE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FERVY7QUNBUTtFQUVFLGdCQUFBO0FEQ1Y7QUNDUTtFQUNFLFlBQUE7QURDVjtBQ0dJO0VBQ0UsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBREROO0FDSUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FERk47QUNJSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURGTjtBQ0tJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBREhOO0FDT0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBREpGO0FDTUE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBREhGO0FDTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBREhGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FERkY7QUNLQTtFQUNFLGtCQUFBO0FERkYiLCJmaWxlIjoic3JjL2FwcC9yb29tZGV0YWlscmV2aWV3L3Jvb21kZXRhaWxyZXZpZXcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmJ0bm5vbmVzdWNjZXNzIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzQ0N2EwMDtcbiAgY29sb3I6ICM0NDdhMDA7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbWRldGFpbHJldmlldyB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4uY2xpY2sge1xuICBjb2xvcjogIzQ0N2EwMDtcbn1cblxuLm5vbmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uYnRubm9uZSB7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtcG9pbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4ubnVtLXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLnRleHQtxJFpc2NvdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2xzLWNvbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbn1cblxuLmNscy1tdDEwIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5jbHMtaHIge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtaW1nLWhvdGVsZGV0YWlsLXNrIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC1wcm9tb3Rpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCB7XG4gIHdpZHRoOiAxNjBweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuZGl2LWNoZWNrcG9pbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5jaGVjay1wb2ludCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmNscy1tbDgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5kaXYtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtY29sLXNwbGl0IHtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIG1hcmdpbjogOHB4IDA7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC50ZXh0LXBvaW50IHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLm51bS1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtcHJvbW90aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZGVwYXJ0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbnAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4udGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLnRleHQtdGl0bGUtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5tLWJvdHRvbS04IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufSIsIlxuICAgIC50ZXh0LW5hbWVcbiAgICB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIC50ZXh0LWdyZWVuXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XG4gICAgICB9XG4gICAgfVxuICAgIC50ZXh0LWRhdGVcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgIH1cbiAgICAuaW1hZ2UtY2FyZHtcbiAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRvdGFsLXByaWNle1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogNDhweDtcblxuICAgIH1cbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgfVxuICAgIC5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xuICAgIH1cbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcbiAgICAgIGNvbG9yOiM4MjgyODI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIH0gIFxuICAuZGl2LXdyYXBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6MTEwcHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaHJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbi5idG5ub25lc3VjY2Vzc1xue1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xuICAgIGNvbG9yOiAjNDQ3YTAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbWRldGFpbHJldmlld3tcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cblxufVxuLmNsaWNrXG57XG4gIGNvbG9yOiAjNDQ3YTAwXG59XG4ubm9uZVxue1xuICBjb2xvcjogYmxhY2tcbn1cbi5lcnJvclxue1xuICBjb2xvcjpyZ2IoMjI5LCA0MCwgMzQpO1xufVxuLmJ0bm5vbmVcbntcbiAgICBjb2xvcjogI0Y3OTIyMTtcbiAgICB3aWR0aDogOTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4udGV4dC1wb2ludFxue1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLm51bS1wb2ludFxue1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLnRleHQtxJFpc2NvdW50XG57XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jbHMtY29sXG57XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5pb24taXRlbVxue1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuLmNscy1tdDEwXG57XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNscy1oclxue1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtaW1nLWhvdGVsZGV0YWlsLXNre1xuICBwYWRkaW5nOiAwO1xufVxuLmRpdi10aXRsZXtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLmNvbWJvLXRpdGxle1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgfVxufVxuLnRleHQtcHJvbW90aW9uXG57XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LXZvdWNoZXJ7XG4gIC5kaXYtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmRpdi1maXJzdHtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuXG4gICAgICAgIC5kaXYtY2hlY2twb2ludHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrLXBvaW50e1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5jbHMtbWw4XG4gICAgICAgIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtZGlzYWJsZWR7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1jb2wtc3BsaXR7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cbiAgICBcbiAgICAudGV4dC1wb2ludHtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gICAgLm51bS1wb2ludCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuXG4gICAgLmRpdi1wcm9tb3Rpb257XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuLmRlcGFydC10aXRsZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLnRleHQtbm90ZXtcbiAgZm9udC1zaXplOjEycHg7XG4gIGNvbG9yOiM4MjgyODI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4udGV4dC10aXRsZS1ub3Rle1xuICBmb250LXNpemU6MTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5tLWJvdHRvbS04e1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il19 */"

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












let RoomdetailreviewPage = class RoomdetailreviewPage {
    constructor(searchhotel, platform, valueGlobal, navCtrl, Roomif, zone, booking, bookCombo, storage, alertCtrl, value, modalCtrl, gf, loadingCtrl, fb) {
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
        this.textage = "";
        this.ischeckbtnpromo = false;
        this.ischeckpoint = false;
        this.ischeck = false;
        this.ischecktext = 3;
        this.ischeckerror = 0;
        this.textpromotion = "Nhập mã giảm giá";
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
    }
    ngOnInit() {
    }
    roompaymentbreakdow() {
        var dur = this.dur;
        var roomnumber = this.roomnumber;
        this.searchhotel.backPage = "roomdetailreview";
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
        if (this.ischeckbtnpromo) {
            this.Roomif.promocode = this.promocode;
            this.Roomif.priceshow = this.Pricepointshow;
        }
        else {
            this.Roomif.promocode = "";
            this.promocode = "";
        }
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
                        var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                        this.Pricepoint = tempprice - this.point - this.discountpromo;
                        this.Pricepointshow = this.Pricepoint.toLocaleString();
                    }
                    else {
                        this.price = this.point.toLocaleString();
                        var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                        this.Pricepoint = tempprice - this.point;
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
                    var tempprice = this.PriceAvgPlusTAStr.replace(/\./g, '').replace(/\,/g, '');
                    this.Pricepointshow = tempprice - this.discountpromo;
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
            if (!this.ischeck) {
                jquery__WEBPACK_IMPORTED_MODULE_10__('.div-point').removeClass('div-disabled');
                this.valueGlobal.PriceAvgPlusTAStr = this.PriceAvgPlusTAStr;
                this.textpromotion = "Nhập mã giảm giá";
                this.promocode = "";
                this.ischeckbtnpromo = false;
                this.ischeckpromo = false;
                this.msg = "";
                const modal = yield this.modalCtrl.create({
                    component: _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_9__["AdddiscountPage"],
                });
                modal.present();
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
            }
        });
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
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__["Facebook"]])
], RoomdetailreviewPage);



/***/ })

}]);
//# sourceMappingURL=roomdetailreview-roomdetailreview-module.js.map