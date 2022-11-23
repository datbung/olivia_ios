(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripbookingdetail-mytripbookingdetail-module"],{

/***/ "./src/app/mytripbookingdetail/mytripbookingdetail.html":
/*!**************************************************************!*\
  !*** ./src/app/mytripbookingdetail/mytripbookingdetail.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n  <div>\n      <div class=\"card-background-page\">\n          <ion-slides (ionSlideDidChange)=\"slidechange()\" #mySlider>\n            <ion-slide *ngFor=\"let slide of slideData\">\n              <img style=\"height: auto;width: 100%; min-height: 197px;\" [src]=\"slide.LinkImage\" />\n              <div id=\"grad1\">\n              </div>\n              <ion-badge style=\"margin-bottom: 10px\" class=\"badgescss\">{{coutslide}}/{{lengthslide}}</ion-badge>\n            </ion-slide>\n          </ion-slides>\n          <div class=\"div-go-back\" (click)=\"goback()\">\n              <img class=\"img-back\" src=\"./assets/imgs/ios-arrow-round-back-white.svg\" (click)=\"goback()\">\n           </div>\n          <!-- <ion-icon (click)=\"goback()\" style=\"font-size: 2.7em\" name=\"ios-arrow-round-back-white\" class=\"card-title\">\n          </ion-icon> -->\n         \n          <!-- <div class=\"img-heart\" (click)=\"likeItem()\"><img *ngIf=\"!itemlike\"  src=\"./assets/imgs/heart-empty.svg\" >\n            <ion-icon *ngIf=\"itemlike\" name=\"heart\" color=\"danger\"  (click)=\"unlikeItem()\"></ion-icon></div>\n          <div class=\"img-share\" (click)=\"share()\"><img  src=\"./assets/imgs/ic_share.svg\" ></div> -->\n        </div>\n        <div *ngIf=\"loaddatadone\">\n        <div *ngFor=\"let hotelroom of hotelRoomClasses; let i = index\" class=\"hotel-room-detail-content\">\n            <h2 class=\"room-class-name\">{{roomname}}</h2>\n            <!-- Số khách -->\n            <ion-row>\n              <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                <img class=\"icon-detail-fix\" src=\"./assets/iocnsearch/ic_people.svg\">\n              </ion-col>\n              <ion-col class=\"p-top-8\">\n                <span class=\"text-room-class-description\">{{hotelroom.Rooms[0].TotalRooms}} phòng|{{adult}} người lớn|{{child}} trẻ em</span>\n              </ion-col>\n            </ion-row>\n            \n            <ion-row *ngIf=\"hotelroom.Rooms[0].RoomInfomations.BedSummaryDisplaysMobile\">\n                <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                    <img class=\"icon-detail-fix\" src=\"./assets/ic_hoteldetail/ic_bed.svg\">\n                </ion-col>\n                <ion-col>\n                    <ion-label class=\"text-hotel-description\">{{ hotelroom.Rooms[0].RoomInfomations.BedSummaryDisplaysMobile }}</ion-label>\n                </ion-col>\n                <!-- <ion-col style=\"padding:0\">\n                <div class=\"div-bedroom-display\" >\n                    <ion-row >\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                            <img class=\"icon-detail-fix\" src=\"./assets/ic_hoteldetail/ic_bed.svg\">\n                        </ion-col>\n                        <ion-col>\n                            <ion-label class=\"text-hotel-description\">{{ hotelroom.Rooms[0].RoomInfomations.BedSummaryDisplaysMobile }}</ion-label>\n                        </ion-col>\n                    </ion-row>\n                </div>\n                </ion-col> -->\n            </ion-row>\n            <hr style=\"margin: 8px 0px 8px 5px;\">\n            <div>\n                \n                <!-- Hướng -->\n                <ion-row>\n                    <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                    <img class=\"icon-detail-fix\" src=\"./assets/ic_hoteldetail/ic_view.svg\">\n                    </ion-col>\n                    <ion-col class=\"p-top-8\">\n                    Hướng {{hotelroom.Rooms[0].RoomInfomations.Direction}}\n                    </ion-col>\n                </ion-row>\n                <!-- Phòng cửa sổ -->\n                <ion-row *ngIf=\"hotelroom && hotelroom.Rooms[0].RoomInfomations.WindowOpen\">\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                        <img class=\"icon-detail-fix\" src=\"./assets/ic_hoteldetail/ic_view.svg\">\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        Phòng cửa sổ mở\n                        </ion-col>\n                </ion-row>\n                <!-- Diện tích -->\n                <ion-row>\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                        <img class=\"icon-detail-fix\" src=\"./assets/ic_facility/ic_hotel.svg\">\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        {{hotelroom.Rooms[0].RoomInfomations.Acreage}}m2\n                        </ion-col>\n                    </ion-row>\n              <!-- Không hút thuốc -->\n                <ion-row *ngIf=\"!hotelroom.Rooms[0].RoomInfomations.AllowSmoke\">\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                        <img class=\"icon-detail-fix\" src=\"./assets/ic_facility/ic_nonsmoking.svg\">\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        Phòng không hút thuốc\n                        </ion-col>\n                </ion-row>\n                <!-- Ban công -->\n                <ion-row *ngIf=\"hotelroom.Rooms[0].RoomInfomations.Balcony\">\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                        <img class=\"icon-detail-fix\" src=\"./assets/ic_facility/ic_balcone.svg\">\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        Ban công\n                        </ion-col>\n                </ion-row>\n                <!-- Bồn tắm & vòi sen-->\n                <ion-row *ngIf=\"hotelroom.Rooms[0].RoomInfomations.BathTub && hotelroom.Rooms[0].RoomInfomations.Shower\">\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                        <img class=\"icon-detail-fix\" src=\"./assets/ic_facility/ic_shower.svg\">\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        Bồn tắm & vòi hoa sen\n                        </ion-col>\n                </ion-row>\n                <!-- Bồn tắm -->\n                <ion-row *ngIf=\"hotelroom.Rooms[0].RoomInfomations.BathTub && !hotelroom.Rooms[0].RoomInfomations.Shower\">\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                        <img class=\"icon-detail-fix\" src=\"./assets/ic_facility/ic_bathtub.svg\">\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        Bồn tắm\n                        </ion-col>\n                </ion-row>\n                <!-- Vòi sen -->\n                <ion-row *ngIf=\"!hotelroom.Rooms[0].RoomInfomations.BathTub && hotelroom.Rooms[0].RoomInfomations.Shower\">\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                        <img class=\"icon-detail-fix\" src=\"./assets/ic_facility/ic_shower.svg\">\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        Vòi hoa sen\n                        </ion-col>\n                </ion-row>\n                <!-- Bể bơi -->\n                <ion-row *ngIf=\"hotelroom.Rooms[0] && hotelroom.Rooms[0].RoomInfomations.Pools\">\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                        <img class=\"icon-detail-fix\" src=\"./assets/ic_facility/ic_pool.svg\">\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        Bể bơi\n                        </ion-col>\n                </ion-row>\n                <!-- Facilitys -->\n                <!-- <ion-row *ngFor=\"let fac of objectRoom.Rooms[0].RoomInfomations.Facilitys\">\n                        <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                            <ion-icon  class=\"icon-detail-check\" name=\"checkmark\"></ion-icon>\n                        </ion-col>\n                        <ion-col class=\"p-top-8\">\n                        {{fac.Name}}\n                        </ion-col>\n                </ion-row> -->\n            </div>\n            <hr style=\"margin: 8px 0px 4px 5px;\">\n             <!-- Vùng hiển thị facility, mealtype, penalty -->\n             <div class=\"mealtype-item\" *ngFor=\"let mealtype of hotelroom.MealTypeRates; let idx = index\">\n                <div class=\"p-left-8 div-mealtype\" *ngIf=\"idx==0\">\n                    <ion-row >\n                        <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_food_green.svg\">\n                        <ion-label *ngIf=\"mealPlan\" class=\"text-hotel-description cls-green\">{{mealPlan}}</ion-label>\n                        <!-- <ion-label *ngIf=\"inclusion\" class=\"text-hotel-description cls-green\" [innerHTML]=\"inclusion\"></ion-label> -->\n                        <ion-label *ngIf=\"inclusion\" class=\"text-hotel-description cls-green\" >{{inclusion}}</ion-label>\n                        <!-- <ion-label *ngIf=\"mealtype.Name != null && mealtype.Notes.length==0\" class=\"text-hotel-description cls-green\">{{mealtype.Name}}</ion-label> -->\n                        <!-- <ion-label *ngIf=\"mealtype.Name != null && mealtype.Notes.length!=0 && mealtype.Notes[0].length == mealtype.Name.length\" class=\"text-hotel-description cls-green\">{{mealtype.Notes.join(', ')}}</ion-label>\n                        <ion-label *ngIf=\"mealtype.Name != null && mealtype.Notes.length!=0 && mealtype.Notes[0].length != mealtype.Name.length\" class=\"text-hotel-description cls-green\">{{mealtype.Name}}, {{mealtype.Notes.join(', ')}}</ion-label> -->\n                    </ion-row>\n                    <ion-row *ngFor=\"let fac of hotelroom.Rooms[0].RoomInfomations.Facilitys\" >\n                      <ion-row  *ngIf=\"mealtype.PromotionInclusions.length == 0\" class=\"p-top-4\">\n                        <img *ngIf=\"fac.Name.indexOf('Đưa đón') == -1 && fac.Name.indexOf('Wifi') == -1\" class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                                <img *ngIf=\"fac.Name.indexOf('Wifi') != -1\" class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_wifi.svg\">\n                                <img *ngIf=\"fac.Name.indexOf('Đưa đón') != -1\" class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_bus_green.svg\">\n                        <ion-label class=\"text-hotel-description cls-green\">{{ fac.Name }}</ion-label>\n                      </ion-row>\n                    </ion-row>\n                    <!-- Promotion include -->\n                    <!-- <ion-row *ngFor=\"let promo of mealtype.PromotionInclusions\">\n                      <ion-row  *ngIf=\"hotelroom.Rooms[0].RoomInfomations.Facilitys.length != 0 && hotelroom.Rooms[0].RoomInfomations.Facilitys != 0\"  class=\"p-top-4\">\n                        <img *ngIf=\"promo.indexOf('Đưa đón') == -1 && promo.indexOf('Wifi') == -1\" class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                                <img *ngIf=\"promo.indexOf('Wifi') != -1\" class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_wifi.svg\">\n                                <img *ngIf=\"promo.indexOf('Đưa đón') != -1\" class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_bus_green.svg\">\n                        <ion-label class=\"text-hotel-description cls-green\">{{promo}}</ion-label>\n                      </ion-row>\n                    </ion-row> -->\n                    <ion-row>\n                      <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_fee_green.svg\">\n                      <ion-label class=\"text-hotel-description cls-green\">Đã bao gồm thuế phí</ion-label>\n                    </ion-row>\n                    <!-- <ion-row class=\"penal-detail\" *ngIf='mealtype.Penaltys[0] && !mealtype.Penaltys[0].IsPenaltyFree && hotelroom.Rooms[0].Penaltys[0]'>\n                        <img *ngIf=\"mealtype.Penaltys[0].PenaltyDescription.length <=70\" class=\"icon-detail-check-green-fix\" src=\"./assets/ic_hoteldetail/uc_nonrefund_green.svg\">\n                        <img *ngIf=\"mealtype.Penaltys[0].PenaltyDescription.length > 70\" class=\"icon-detail-check-green-fix\" src=\"./assets/ic_hoteldetail/ic_info.svg\">\n                          <span *ngIf=\"mealtype.Penaltys[0].PenaltyDescription.length <=70\" class=\"penalty-text\" [innerHTML]=\"mealtype.Penaltys[0].PenaltyDescription\"></span>\n                          <button *ngIf=\"!mealtype.Penaltys[0].IsPenaltyFree && mealtype.Penaltys[0].PenaltyDescription.length > 70\" class=\"penalty-text link-penalty\" (click)=\"penaltySelected(hotelRoomClasses.length*i+1)\">Chính sách hủy phòng</button>\n                          <div class=\"penalty-active arrow\" [class.active]=\"penaltyItemSelected==hotelRoomClasses.length*i+1\" *ngIf=\"penaltyItemSelected==hotelRoomClasses.length*i+1\">\n                              <span *ngFor=\"let pen of mealtype.Penaltys; let k = index\" [innerHTML]=\"pen.PenaltyDescription\" [ngClass]=\"mealtype.Penaltys.length > 1 && k==mealtype.Penaltys.length-1 ? 'none-p-top' : ''\"></span>\n           \n                          </div>\n                    </ion-row>\n                    <ion-row class=\"penal-detail\" *ngIf='mealtype.Penaltys[0] && mealtype.Penaltys[0].IsPenaltyFree && hotelroom.Rooms[0].Penaltys[0]'>\n                        <img class=\"icon-detail-check-green-fix\" src=\"./assets/ic_hoteldetail/ic_info.svg\">\n                          <button class=\"penalty-text link-penalty\" (click)=\"penaltySelected(hotelRoomClasses.length*i+1)\">Hủy miễn phí trước ngày {{mealtype.Penaltys[0].PenaltyShortDateStr}}</button>\n                          <div class=\"penalty-active arrow\" [class.active]=\"penaltyItemSelected==hotelRoomClasses.length*i+1\" *ngIf=\"penaltyItemSelected==hotelRoomClasses.length*i+1\">\n                              <span *ngFor=\"let pen of mealtype.Penaltys; let k = index\" [innerHTML]=\"pen.PenaltyDescription\" [ngClass]=\"mealtype.Penaltys.length > 1 && k==mealtype.Penaltys.length-1 ? 'none-p-top' : ''\"></span>\n                          </div>\n                    </ion-row> -->\n                  </div>\n                </div>\n        <hr style=\"margin: 0px 0px 8px 5px;\">\n        <!-- Chính sách hủy phòng -->\n        <ion-row (click)=\"openRoomCancel(hotelroom.MealTypeRates[0])\">\n          <ion-col><label class=\"cls-title\">Chính sách hủy phòng</label></ion-col>\n          <ion-col size=\"1\" class=\"icon-arrow-right\">\n            <ion-icon item-end name=\"ios-arrow-round-forward\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        </div>\n      </div>\n        <div *ngIf=\"!loaddatadone\" style=\"padding:16px\">\n          <div class=\"div-sk-detail\">\n              <ion-row class=\"row-item-hoteldetail-sk\">\n                  <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:32px;height: 24px;\"></ion-skeleton-text>\n              </ion-row>\n              <ion-row class=\"row-item-description-sk\">\n                  <ion-skeleton-text animated style=\"width: 80%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n              </ion-row>\n              <ion-row>\n                  <ion-skeleton-text animated style=\"width: 25%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n              </ion-row>\n              <ion-row><ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:32px;height: 16px;\"></ion-skeleton-text></ion-row>\n                  <ion-row><ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-row>\n                  <ion-row><ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-row>\n                  <ion-row><ion-skeleton-text animated style=\"width: 25%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-row>\n                  <ion-row><ion-skeleton-text animated style=\"width: 25%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-row>\n                  <ion-row><ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-row>\n                  <ion-row><ion-skeleton-text animated style=\"width: 30%;margin: 0;margin-top:32px;height: 16px;\"></ion-skeleton-text></ion-row>\n                  <ion-row><ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-row>\n                  <ion-row><ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-row>\n          </div>\n        </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mytripbookingdetail/mytripbookingdetail.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mytripbookingdetail/mytripbookingdetail.module.ts ***!
  \*******************************************************************/
/*! exports provided: MytripBookingDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripBookingDetailPageModule", function() { return MytripBookingDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mytripbookingdetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripbookingdetail */ "./src/app/mytripbookingdetail/mytripbookingdetail.ts");







let MytripBookingDetailPageModule = class MytripBookingDetailPageModule {
};
MytripBookingDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _mytripbookingdetail__WEBPACK_IMPORTED_MODULE_6__["MytripBookingDetailPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _mytripbookingdetail__WEBPACK_IMPORTED_MODULE_6__["MytripBookingDetailPage"]
                }
            ])
        ],
    })
], MytripBookingDetailPageModule);



/***/ }),

/***/ "./src/app/mytripbookingdetail/mytripbookingdetail.scss":
/*!**************************************************************!*\
  !*** ./src/app/mytripbookingdetail/mytripbookingdetail.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-background-page {\n  width: 100%;\n  height: 197px;\n  overflow: hidden;\n}\n\n.card-background-page ion-slide {\n  position: relative;\n  text-align: center;\n  min-height: 206px;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 3%;\n  left: 10px;\n  color: #ffffff;\n  z-index: 10;\n}\n\n.div-go-back {\n  z-index: 100;\n  position: absolute;\n  top: env(safe-area-inset-top);\n  left: 10px;\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n}\n\n.badgescss {\n  position: absolute;\n  color: #ffffff;\n  z-index: 10;\n  margin-left: 84%;\n  bottom: 16%;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  font-weight: 100;\n  display: block;\n  padding: 4px 8px;\n  font-size: 14px;\n  border-radius: 10px;\n}\n\n.img-back {\n  height: 28px;\n  padding: 0px;\n  margin-top: 24px;\n  margin-left: 6px;\n  background: rgba(104, 104, 104, 0.75);\n  border-radius: 36px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.div-mealtype {\n  text-align: left;\n  padding: 4px 0px 4px 5px;\n  line-height: 22px;\n}\n\n.icon-detail-green-fix {\n  width: 14px;\n  height: 16px;\n  color: #219653;\n  position: absolute;\n}\n\n.icon-detail-check-green-fix {\n  font-size: 15px;\n  width: 14px;\n  height: 14px;\n  color: #219653;\n}\n\n.cls-green {\n  color: #219653;\n  font-size: 14px;\n  font-weight: normal;\n  opacity: 0.85;\n  padding-left: 24px;\n  line-height: 16px;\n}\n\n.text-hotel-title {\n  font-weight: bold;\n  padding: 8px 0px 2px 0px;\n}\n\n.text-hotel-description {\n  white-space: inherit;\n  text-align: left;\n}\n\n.penal-detail:last-child {\n  padding-bottom: 12px;\n  padding-top: 4px;\n}\n\n.penalty-text {\n  font-size: 14px;\n  font-weight: normal;\n  opacity: 0.85;\n  padding-left: 8px;\n}\n\n.link-penalty {\n  padding-left: 14px;\n  text-decoration: none;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #40A6F2;\n}\n\n.penalty-active {\n  padding: 8px 8px 8px 20px;\n  color: #ffffff;\n  background-color: #275A87;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.penalty-active-description {\n  font-size: 14px;\n  font-weight: normal;\n  padding: 16px;\n  background-color: #275A87;\n}\n\n.icon-arrow-right {\n  text-align: right;\n  font-size: 24px;\n  padding: 0;\n}\n\n.cls-title {\n  font-size: 16px;\n}\n\nspan.penalty-text > p {\n  margin: -2px 0px 0px 5px;\n}\n\n.hotel-room-detail-content {\n  padding: 0px 16px 0px 11px;\n  font-size: 14px;\n  padding-bottom: 30px;\n}\n\n.room-class-name {\n  padding-top: 16px;\n  padding-left: 5px;\n}\n\n.icon-detail-fix {\n  width: 18px;\n  opacity: 0.6;\n}\n\n.p-top-8 {\n  padding-top: 8px;\n}\n\n.label-md {\n  margin: 0;\n}\n\n.row-title {\n  padding: 10px 0px;\n}\n\n.room-class-icon {\n  opacity: 0.6;\n  text-align: right;\n}\n\n.p-left-28 {\n  padding-left: 28px;\n}\n\n.btn-cancel {\n  width: 90%;\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  border-color: #F79221;\n  height: 48px;\n}\n\n.div-bedroom-display ion-row:last-child span {\n  display: none;\n}\n\n.text-or {\n  padding-top: 8px;\n}\n\n.text-hotel-description {\n  overflow: auto;\n  text-overflow: inherit;\n  white-space: normal;\n}\n\n.row-item-hoteldetail-sk {\n  padding-top: 32px;\n}\n\n.col-img-hoteldetail-sk {\n  padding: 0;\n}\n\n.p-top-4 {\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9teXRyaXBib29raW5nZGV0YWlsL215dHJpcGJvb2tpbmdkZXRhaWwuc2NzcyIsInNyYy9hcHAvbXl0cmlwYm9va2luZ2RldGFpbC9teXRyaXBib29raW5nZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQVI7O0FESU87RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURHUTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0RWOztBREtJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRlY7O0FEZ0JJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDYlI7O0FEZVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDWlo7O0FEY1E7RUFDSSxjQUFBO0FDWFo7O0FEYUk7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUNWUjs7QURZSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDVFI7O0FEV0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDUlI7O0FEVUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNQUjs7QURTSTtFQUNJLGlCQUFBO0VBQ0Esd0JBQUE7QUNOUjs7QURRSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUNMUjs7QURPSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUNKUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0hSOztBREtNO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBRElNO0VBQ00seUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRFo7O0FER1E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNBWjs7QURFUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDWjs7QURDUTtFQUNJLGVBQUE7QUNFWjs7QURBUTtFQUNJLHdCQUFBO0FDR1o7O0FEQUk7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0dSOztBREFJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0dSOztBRERJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNJUjs7QURESTtFQUNJLGdCQUFBO0FDSVI7O0FERkk7RUFDSSxTQUFBO0FDS1I7O0FESEk7RUFDSSxpQkFBQTtBQ01SOztBREpJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDT1I7O0FETEk7RUFDSSxrQkFBQTtBQ1FSOztBRE5JO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNTUjs7QURQSTtFQUNJLGFBQUE7QUNVUjs7QURSSTtFQUNJLGdCQUFBO0FDV1I7O0FEVEk7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ1lSOztBRFJBO0VBQ0ksaUJBQUE7QUNXSjs7QURUQTtFQUNJLFVBQUE7QUNZSjs7QURWQTtFQUNJLGdCQUFBO0FDYUoiLCJmaWxlIjoic3JjL2FwcC9teXRyaXBib29raW5nZGV0YWlsL215dHJpcGJvb2tpbmdkZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE5N3B4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gICAgICAgaW9uLXNsaWRle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMjA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDMlO1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgei1pbmRleDogMTA7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGl2LWdvLWJhY2t7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICB9XG4gICAgLy8gLmJhZGdlc2NzcyB7XG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gICAgIHotaW5kZXg6IDEwO1xuICAgIC8vICAgICBtYXJnaW4tbGVmdDogODQlO1xuICAgIC8vICAgICBtYXJnaW4tdG9wOiAtMTAlO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgLy8gICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIC8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vICAgICBmb250LXdlaWdodDogMTAwO1xuICAgIC8vICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyB9XG4gICAgLmJhZGdlc2NzcyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICBtYXJnaW4tbGVmdDogODQlO1xuICAgICAgICBib3R0b206IDE2JTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLWJhY2t7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxMDQsIDEwNCwgMC43NSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zd2lwZXItc2xpZGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIC5kaXYtbWVhbHR5cGV7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweCAwcHggNHB4IDVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgfVxuICAgIC5pY29uLWRldGFpbC1ncmVlbi1maXh7XG4gICAgICAgIHdpZHRoOjE0cHg7XG4gICAgICAgIGhlaWdodDoxNnB4O1xuICAgICAgICBjb2xvcjojMjE5NjUzO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC5pY29uLWRldGFpbC1jaGVjay1ncmVlbi1maXh7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgd2lkdGg6MTRweDtcbiAgICAgICAgaGVpZ2h0OjE0cHg7XG4gICAgICAgIGNvbG9yOiMyMTk2NTM7XG4gICAgfVxuICAgIC5jbHMtZ3JlZW57XG4gICAgICAgIGNvbG9yOiMyMTk2NTM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB9XG4gICAgLnRleHQtaG90ZWwtdGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDJweCAwcHg7XG4gICAgfVxuICAgIC50ZXh0LWhvdGVsLWRlc2NyaXB0aW9ue1xuICAgICAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLnBlbmFsLWRldGFpbDpsYXN0LWNoaWxke1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICB9XG4gICAgLnBlbmFsdHktdGV4dHtcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICAgICAgb3BhY2l0eTowLjg1O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDsgXG4gICAgICB9XG4gICAgICAubGluay1wZW5hbHR5e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6ICM0MEE2RjI7XG4gICAgICB9XG4gICAgICAucGVuYWx0eS1hY3RpdmV7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAyMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1QTg3O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgIH0gXG4gICAgICAgIC5wZW5hbHR5LWFjdGl2ZS1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzVBODc7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24tYXJyb3ctcmlnaHR7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNscy10aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFuLnBlbmFsdHktdGV4dCA+IHB7XG4gICAgICAgICAgICBtYXJnaW46IC0ycHggMHB4IDBweCA1cHg7XG4gICAgICAgIH1cbiAgICAvLy8vcGjhuqduIHN0eWxlIGzhuqV5IHThu6sgcm9vbS1kZXRhaWxcbiAgICAuaG90ZWwtcm9vbS1kZXRhaWwtY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHggMHB4IDExcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgICAucm9vbS1jbGFzcy1uYW1le1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIC5pY29uLWRldGFpbC1maXh7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuICAgIFxuICAgIC5wLXRvcC04e1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cbiAgICAubGFiZWwtbWQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5yb3ctdGl0bGV7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIH1cbiAgICAucm9vbS1jbGFzcy1pY29ue1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAucC1sZWZ0LTI4e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgfVxuICAgIC5idG4tY2FuY2Vse1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBib3JkZXI6bm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgIH1cbiAgICAuZGl2LWJlZHJvb20tZGlzcGxheSBpb24tcm93Omxhc3QtY2hpbGQgc3BhbntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnRleHQtb3J7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxuICAgIC50ZXh0LWhvdGVsLWRlc2NyaXB0aW9ue1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vU3R5bGUgc2tlbGV0b25cbi5yb3ctaXRlbS1ob3RlbGRldGFpbC1za3tcbiAgICBwYWRkaW5nLXRvcDozMnB4O1xufVxuLmNvbC1pbWctaG90ZWxkZXRhaWwtc2t7XG4gICAgcGFkZGluZzogMDtcbn1cbi5wLXRvcC00e1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG59IiwiLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTk3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSBpb24tc2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMjA2cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmNhcmQtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMyU7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLmRpdi1nby1iYWNrIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmJhZGdlc2NzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tbGVmdDogODQlO1xuICBib3R0b206IDE2JTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltZy1iYWNrIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTA0LCAxMDQsIDEwNCwgMC43NSk7XG4gIGJvcmRlci1yYWRpdXM6IDM2cHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRpdi1tZWFsdHlwZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDRweCAwcHggNHB4IDVweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5pY29uLWRldGFpbC1ncmVlbi1maXgge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzIxOTY1MztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaWNvbi1kZXRhaWwtY2hlY2stZ3JlZW4tZml4IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzIxOTY1Mztcbn1cblxuLmNscy1ncmVlbiB7XG4gIGNvbG9yOiAjMjE5NjUzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG9wYWNpdHk6IDAuODU7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi50ZXh0LWhvdGVsLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDhweCAwcHggMnB4IDBweDtcbn1cblxuLnRleHQtaG90ZWwtZGVzY3JpcHRpb24ge1xuICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBlbmFsLWRldGFpbDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5wZW5hbHR5LXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG9wYWNpdHk6IDAuODU7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ubGluay1wZW5hbHR5IHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjNDBBNkYyO1xufVxuXG4ucGVuYWx0eS1hY3RpdmUge1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCAyMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NUE4NztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5wZW5hbHR5LWFjdGl2ZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NUE4Nztcbn1cblxuLmljb24tYXJyb3ctcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2xzLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zcGFuLnBlbmFsdHktdGV4dCA+IHAge1xuICBtYXJnaW46IC0ycHggMHB4IDBweCA1cHg7XG59XG5cbi5ob3RlbC1yb29tLWRldGFpbC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDE2cHggMHB4IDExcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5yb29tLWNsYXNzLW5hbWUge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5pY29uLWRldGFpbC1maXgge1xuICB3aWR0aDogMThweDtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4ucC10b3AtOCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJvdy10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4ucm9vbS1jbGFzcy1pY29uIHtcbiAgb3BhY2l0eTogMC42O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnAtbGVmdC0yOCB7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmRpdi1iZWRyb29tLWRpc3BsYXkgaW9uLXJvdzpsYXN0LWNoaWxkIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGV4dC1vciB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi50ZXh0LWhvdGVsLWRlc2NyaXB0aW9uIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5yb3ctaXRlbS1ob3RlbGRldGFpbC1zayB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4uY29sLWltZy1ob3RlbGRldGFpbC1zayB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wLXRvcC00IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mytripbookingdetail/mytripbookingdetail.ts":
/*!************************************************************!*\
  !*** ./src/app/mytripbookingdetail/mytripbookingdetail.ts ***!
  \************************************************************/
/*! exports provided: MytripBookingDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripBookingDetailPage", function() { return MytripBookingDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");












let MytripBookingDetailPage = class MytripBookingDetailPage {
    constructor(platform, navCtrl, gf, router, bookCombo, zone, modalCtrl, searchhotel, storage, _mytripservice, _flightService, valueGlobal) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.router = router;
        this.bookCombo = bookCombo;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.searchhotel = searchhotel;
        this.storage = storage;
        this._mytripservice = _mytripservice;
        this._flightService = _flightService;
        this.valueGlobal = valueGlobal;
        this.jsonroom1 = [];
        this.hotelRooms = [];
        this.hotelRoomClasses = [];
        this.hotelMealTypes = [];
        this.hotelroom = [];
        this.slideData = [];
        this.lengthslide = 0;
        this.coutslide = 1;
        this.loaddatadone = false;
        this.HotelIdIntenal = 0;
        this.HotelId = 0;
        this.checkIn = '';
        this.checkOut = '';
        this.mytrip = null;
        this.roomNumber = 1;
        this.adult = 2;
        this.child = 0;
        this.cityId = 0;
        this.roomId = 0;
        this.penaltyItemSelected = -1;
        this.currentTripIndex = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        let obj = this.gf.getParams('mytripbookingdetail');
        if (obj.trip) {
            this.loaddatadone = false;
            this.mytrip = obj.trip;
            let objTrip = obj.trip;
            this.currentTripIndex = obj.currentTrip;
            this.HotelId = objTrip.hotel_id;
            this.checkIn = moment__WEBPACK_IMPORTED_MODULE_5__(objTrip.checkInDate).format('YYYY-MM-DD');
            this.checkOut = moment__WEBPACK_IMPORTED_MODULE_5__(objTrip.checkOutDate).format('YYYY-MM-DD');
            this.roomNumber = objTrip.room_count;
            this.roomId = objTrip.room_id;
            this.mealPlan = objTrip.meal_plan;
            this.inclusion = objTrip.inclusion;
            if (this.inclusion && this.inclusion.indexOf('↵')) {
                this.inclusion = this.inclusion.replace('↵', '<br>');
            }
            if (objTrip.extra_guest_info) {
                this.adult = objTrip.extra_guest_info.split('|')[0].trim();
                this.child = objTrip.extra_guest_info.split('|')[1].trim();
            }
        }
        this.handleSplashScreen();
        this.storage.get('mytripbookingdetail_' + this.HotelId).then((data) => {
            if (data) {
                this.zone.run(() => {
                    var jsondata = data;
                    this.storage.set('mytripbookingdetail_' + this.HotelId, jsondata);
                    this.cityId = jsondata.CityId;
                    this.HotelIdIntenal = jsondata.Id;
                    if (jsondata.HotelImages.length > 0) {
                        this.slideData = jsondata.HotelImages;
                        for (let index = 0; index < this.slideData.length; index++) {
                            if (this.slideData[index].LinkImage.indexOf("https") == -1) {
                                this.slideData[index].LinkImage = 'https:' + this.slideData[index].LinkImage;
                            }
                        }
                    }
                    else {
                        var item;
                        if (jsondata.Avatar.indexOf("https") == -1) {
                            item = { LinkImage: 'https:' + jsondata.Avatar };
                        }
                        else {
                            item = { LinkImage: jsondata.Avatar };
                        }
                        this.slideData.push(item);
                    }
                    this.lengthslide = this.slideData.length;
                }, 10);
                this.storage.get('mytripbookingdetail_' + this.HotelIdIntenal + "_" + this.checkIn + "_" + this.checkOut).then((dataroom) => {
                    if (dataroom) {
                        if (dataroom.Hotels) {
                            this.hotelname = dataroom.Hotels[0].HotelName;
                            this.hotelRooms = [];
                            this.hotelRoomClasses = [];
                            this.hotelRooms = dataroom.Hotels[0];
                            dataroom.Hotels[0].RoomClasses.forEach((element, index) => {
                                if (element.Rooms[0].RoomID == this.roomId) {
                                    this.hotelRoomClasses.push(element);
                                    this.roomname = element.ClassName;
                                    this.loaddatadone = true;
                                }
                            });
                        }
                        else {
                            this.loaddatadone = true;
                            this.hotelRoomClasses = [];
                        }
                    }
                    else {
                        this.getdataroom();
                    }
                });
            }
            else {
                this.getdata();
            }
        });
        this.gf.googleAnalytion('mytripbookingdetail', 'load', '');
    }
    getdataroom() {
        var self = this;
        var options;
        var form = {
            CheckInDate: self.checkIn,
            CheckOutDate: self.checkOut,
            CityID: self.cityId,
            CountryID: 'VN',
            HotelID: self.HotelIdIntenal,
            IsLeadingPrice: '1',
            IsPackageRate: 'false',
            NationalityID: '82',
            ReferenceClient: '',
            RoomNumber: self.roomNumber,
            'RoomsRequest[0].RoomIndex': '1',
            Supplier: 'IVIVU',
            dataKey: '',
            'RoomsRequest[0][Adults][value]': self.adult,
            'RoomsRequest[0][Child][value]': self.child,
            GetVinHms: 1,
            GetSMD: 1,
            IsFenced: true,
            IsB2B: true,
            IsSeri: true
        };
        options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelSearchReqContractAppV2',
            timeout: 10000, maxAttempts: 3, retryDelay: 10000,
            headers: {},
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "mytripbookingdetail",
                    func: "getdataroom",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "mytripbookingdetail";
                error.func = "getdataroom";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
            }
            ;
            self.zone.run(() => {
                self.jsonroom1 = JSON.parse(body);
                if (self.jsonroom1) {
                    var result = JSON.parse(body);
                    if (result.Hotels) {
                        self.storage.set('mytripbookingdetail_' + self.HotelIdIntenal + "_" + self.checkIn + "_" + self.checkOut, result);
                        self.hotelname = result.Hotels[0].HotelName;
                        self.hotelRooms = [];
                        self.hotelRoomClasses = [];
                        self.hotelRooms = result.Hotels[0];
                        result.Hotels[0].RoomClasses.forEach((element, index) => {
                            if (element.Rooms[0].RoomID == self.roomId) {
                                self.hotelRoomClasses.push(element);
                                self.roomname = element.ClassName;
                                self.loaddatadone = true;
                            }
                        });
                    }
                    else {
                        self.loaddatadone = true;
                        self.hotelRoomClasses = [];
                    }
                }
                else {
                    self.loaddatadone = true;
                    self.hotelRoomClasses = [];
                }
            }, 100);
        });
    }
    getdata() {
        var self = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + "/mhoteldetail/" + self.HotelId,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "mytripbookingdetail",
                    func: "getdata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "mytripbookingdetail";
                error.func = "getdata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
            }
            ;
            self.zone.run(() => {
                var jsondata = JSON.parse(body);
                self.storage.set('mytripbookingdetail_' + self.HotelId, jsondata);
                self.cityId = jsondata.CityId;
                self.HotelIdIntenal = jsondata.Id;
                if (jsondata.HotelImages.length > 0) {
                    self.slideData = jsondata.HotelImages;
                    for (let index = 0; index < self.slideData.length; index++) {
                        self.slideData[index].LinkImage = 'https:' + self.slideData[index].LinkImage;
                    }
                }
                else {
                    var item = { LinkImage: 'https:' + jsondata.Avatar };
                    self.slideData.push(item);
                }
                self.lengthslide = self.slideData.length;
                self.getdataroom();
            }, 10);
        });
    }
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }
    }
    handleSplashScreen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.platform.ready();
            }
            catch (error) {
                if (error) {
                    error.page = "mytripbookingdetail";
                    error.func = "handleSplashScreen";
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, null);
                }
                ;
            }
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.style.opacity = '0';
                setTimeout(() => { splash.remove(); }, 300);
            }
        });
    }
    slidechange() {
        this.slider.getActiveIndex().then((currentIndex) => {
            this.hotelimg = this.slideData[currentIndex].LinkImage;
            this.coutslide = currentIndex + 1;
        });
    }
    goback() {
        if (this._mytripservice.backroute) {
            if (this._mytripservice.rootPage == "homeflight") {
                this._flightService.itemTabFlightActive.emit(true);
                this._flightService.itemMenuFlightClick.emit(2);
                this.valueGlobal.backValue = "homeflight";
                this.navCtrl.navigateBack('/tabs/tab1', { animated: true });
                this._mytripservice.backfrompage = "";
            }
            else {
                this.navCtrl.navigateBack("/tabs/tab3");
            }
        }
        else {
            this.navCtrl.navigateBack('/mytripdetail');
            this._mytripservice.backfrompage = "mytripbookingdetail";
        }
    }
    openRoomCancel(roominfo) {
        roominfo.showFromMytrip = true;
        this.gf.setParams(roominfo, 'roomInfo');
        this.searchhotel.backPage = "mytripbookingdetail";
        this.navCtrl.navigateForward('/roomcancel');
    }
    penaltySelected(index) {
        if (this.penaltyItemSelected >= 0) {
            this.penaltyItemSelected = -1;
        }
        else {
            this.penaltyItemSelected = index;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], MytripBookingDetailPage.prototype, "slider", void 0);
MytripBookingDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytripbookingdetail',
        template: __webpack_require__(/*! ./mytripbookingdetail.html */ "./src/app/mytripbookingdetail/mytripbookingdetail.html"),
        styles: [__webpack_require__(/*! ./mytripbookingdetail.scss */ "./src/app/mytripbookingdetail/mytripbookingdetail.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_10__["MytripService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_11__["flightService"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"]])
], MytripBookingDetailPage);



/***/ }),

/***/ "./src/app/providers/mytrip-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/mytrip-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MytripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripService", function() { return MytripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MytripService = class MytripService {
    constructor() {
        this.mylistOrders = [];
        this.orderPageState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemEnableHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalHistoryFoodCountText = "";
    }
};
MytripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MytripService);



/***/ })

}]);
//# sourceMappingURL=mytripbookingdetail-mytripbookingdetail-module.js.map