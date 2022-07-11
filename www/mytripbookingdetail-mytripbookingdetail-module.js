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

<<<<<<< HEAD
module.exports = ".card-background-page {\n  width: 100%;\n  height: 197px;\n  overflow: hidden;\n}\n\n.card-background-page ion-slide {\n  position: relative;\n  text-align: center;\n  min-height: 206px;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 3%;\n  left: 10px;\n  color: #ffffff;\n  z-index: 10;\n}\n\n.div-go-back {\n  z-index: 100;\n  position: absolute;\n  top: env(safe-area-inset-top);\n  left: 10px;\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n}\n\n.badgescss {\n  position: absolute;\n  color: #ffffff;\n  z-index: 10;\n  margin-left: 84%;\n  bottom: 16%;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  font-weight: 100;\n  display: block;\n  padding: 4px 8px;\n  font-size: 14px;\n  border-radius: 10px;\n}\n\n.img-back {\n  height: 28px;\n  padding: 0px;\n  margin-top: 24px;\n  margin-left: 6px;\n  background: rgba(104, 104, 104, 0.75);\n  border-radius: 36px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.div-mealtype {\n  text-align: left;\n  padding: 4px 0px 4px 5px;\n  line-height: 22px;\n}\n\n.icon-detail-green-fix {\n  width: 14px;\n  height: 16px;\n  color: #219653;\n  position: absolute;\n}\n\n.icon-detail-check-green-fix {\n  font-size: 15px;\n  width: 14px;\n  height: 14px;\n  color: #219653;\n}\n\n.cls-green {\n  color: #219653;\n  font-size: 14px;\n  font-weight: normal;\n  opacity: 0.85;\n  padding-left: 24px;\n  line-height: 16px;\n}\n\n.text-hotel-title {\n  font-weight: bold;\n  padding: 8px 0px 2px 0px;\n}\n\n.text-hotel-description {\n  white-space: inherit;\n  text-align: left;\n}\n\n.penal-detail:last-child {\n  padding-bottom: 12px;\n  padding-top: 4px;\n}\n\n.penalty-text {\n  font-size: 14px;\n  font-weight: normal;\n  opacity: 0.85;\n  padding-left: 8px;\n}\n\n.link-penalty {\n  padding-left: 14px;\n  text-decoration: none;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #40A6F2;\n}\n\n.penalty-active {\n  padding: 8px 8px 8px 20px;\n  color: #ffffff;\n  background-color: #275A87;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.penalty-active-description {\n  font-size: 14px;\n  font-weight: normal;\n  padding: 16px;\n  background-color: #275A87;\n}\n\n.icon-arrow-right {\n  text-align: right;\n  font-size: 24px;\n  padding: 0;\n}\n\n.cls-title {\n  font-size: 16px;\n}\n\nspan.penalty-text > p {\n  margin: -2px 0px 0px 5px;\n}\n\n.hotel-room-detail-content {\n  padding: 0px 16px 0px 11px;\n  font-size: 14px;\n  padding-bottom: 30px;\n}\n\n.room-class-name {\n  padding-top: 16px;\n  padding-left: 5px;\n}\n\n.icon-detail-fix {\n  width: 18px;\n  opacity: 0.6;\n}\n\n.p-top-8 {\n  padding-top: 8px;\n}\n\n.label-md {\n  margin: 0;\n}\n\n.row-title {\n  padding: 10px 0px;\n}\n\n.room-class-icon {\n  opacity: 0.6;\n  text-align: right;\n}\n\n.p-left-28 {\n  padding-left: 28px;\n}\n\n.btn-cancel {\n  width: 90%;\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  border-color: #F79221;\n  height: 48px;\n}\n\n.div-bedroom-display ion-row:last-child span {\n  display: none;\n}\n\n.text-or {\n  padding-top: 8px;\n}\n\n.text-hotel-description {\n  overflow: auto;\n  text-overflow: inherit;\n  white-space: normal;\n}\n\n.row-item-hoteldetail-sk {\n  padding-top: 32px;\n}\n\n.col-img-hoteldetail-sk {\n  padding: 0;\n}\n\n.p-top-4 {\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvbXl0cmlwYm9va2luZ2RldGFpbC9teXRyaXBib29raW5nZGV0YWlsLnNjc3MiLCJzcmMvYXBwL215dHJpcGJvb2tpbmdkZXRhaWwvbXl0cmlwYm9va2luZ2RldGFpbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0FSOztBRElPO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRFI7O0FER1E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNEVjs7QURLSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZWOztBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2JSOztBRGVRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQ1paOztBRGNRO0VBQ0ksY0FBQTtBQ1haOztBRGFJO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDVlI7O0FEWUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1RSOztBRFdJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1JSOztBRFVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDUFI7O0FEU0k7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0FDTlI7O0FEUUk7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FDTFI7O0FET0k7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0FDSlI7O0FETUk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNIUjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNGUjs7QURJTTtFQUNNLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RaOztBREdRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDQVo7O0FERVE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQ1o7O0FEQ1E7RUFDSSxlQUFBO0FDRVo7O0FEQVE7RUFDSSx3QkFBQTtBQ0daOztBREFJO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNHUjs7QURBSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSVI7O0FEREk7RUFDSSxnQkFBQTtBQ0lSOztBREZJO0VBQ0ksU0FBQTtBQ0tSOztBREhJO0VBQ0ksaUJBQUE7QUNNUjs7QURKSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ09SOztBRExJO0VBQ0ksa0JBQUE7QUNRUjs7QUROSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDU1I7O0FEUEk7RUFDSSxhQUFBO0FDVVI7O0FEUkk7RUFDSSxnQkFBQTtBQ1dSOztBRFRJO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNZUjs7QURSQTtFQUNJLGlCQUFBO0FDV0o7O0FEVEE7RUFDSSxVQUFBO0FDWUo7O0FEVkE7RUFDSSxnQkFBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvbXl0cmlwYm9va2luZ2RldGFpbC9teXRyaXBib29raW5nZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxOTdweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAzJTtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHotaW5kZXg6IDEwO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdi1nby1iYWNre1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgfVxuICAgIC8vIC5iYWRnZXNjc3Mge1xuICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vICAgICB6LWluZGV4OiAxMDtcbiAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDg0JTtcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogLTEwJTtcbiAgICAvLyAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIC8vICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAvLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAvLyAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gfVxuICAgIC5iYWRnZXNjc3Mge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDg0JTtcbiAgICAgICAgYm90dG9tOiAxNiU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1iYWNre1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTA0LCAxMDQsIDAuNzUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgICAgICAgfVxuICAgICAgICAuc3dpcGVyLXNsaWRle1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAuZGl2LW1lYWx0eXBle1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHggMHB4IDRweCA1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIH1cbiAgICAuaWNvbi1kZXRhaWwtZ3JlZW4tZml4e1xuICAgICAgICB3aWR0aDoxNHB4O1xuICAgICAgICBoZWlnaHQ6MTZweDtcbiAgICAgICAgY29sb3I6IzIxOTY1MztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuaWNvbi1kZXRhaWwtY2hlY2stZ3JlZW4tZml4e1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHdpZHRoOjE0cHg7XG4gICAgICAgIGhlaWdodDoxNHB4O1xuICAgICAgICBjb2xvcjojMjE5NjUzO1xuICAgIH1cbiAgICAuY2xzLWdyZWVue1xuICAgICAgICBjb2xvcjojMjE5NjUzO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG9wYWNpdHk6IDAuODU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIC50ZXh0LWhvdGVsLXRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweCAycHggMHB4O1xuICAgIH1cbiAgICAudGV4dC1ob3RlbC1kZXNjcmlwdGlvbntcbiAgICAgICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5wZW5hbC1kZXRhaWw6bGFzdC1jaGlsZHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgfVxuICAgIC5wZW5hbHR5LXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgIG9wYWNpdHk6MC44NTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7IFxuICAgICAgfVxuICAgICAgLmxpbmstcGVuYWx0eXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGNvbG9yOiAjNDBBNkYyO1xuICAgICAgfVxuICAgICAgLnBlbmFsdHktYWN0aXZle1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NUE4NztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICB9IFxuICAgICAgICAucGVuYWx0eS1hY3RpdmUtZGVzY3JpcHRpb257XG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1QTg3O1xuICAgICAgICB9XG4gICAgICAgIC5pY29uLWFycm93LXJpZ2h0e1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jbHMtdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5wZW5hbHR5LXRleHQgPiBwe1xuICAgICAgICAgICAgbWFyZ2luOiAtMnB4IDBweCAwcHggNXB4O1xuICAgICAgICB9XG4gICAgLy8vL3Bo4bqnbiBzdHlsZSBs4bqleSB04burIHJvb20tZGV0YWlsXG4gICAgLmhvdGVsLXJvb20tZGV0YWlsLWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4IDBweCAxMXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICBcbiAgICB9XG4gICAgLnJvb20tY2xhc3MtbmFtZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIH1cbiAgICAuaWNvbi1kZXRhaWwtZml4e1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgIH1cbiAgICBcbiAgICAucC10b3AtOHtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICB9XG4gICAgLmxhYmVsLW1kIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAucm93LXRpdGxle1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICB9XG4gICAgLnJvb20tY2xhc3MtaWNvbntcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgLnAtbGVmdC0yOHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgIH1cbiAgICAuYnRuLWNhbmNlbHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICB9XG4gICAgLmRpdi1iZWRyb29tLWRpc3BsYXkgaW9uLXJvdzpsYXN0LWNoaWxkIHNwYW57XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC50ZXh0LW9ye1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cbiAgICAudGV4dC1ob3RlbC1kZXNjcmlwdGlvbntcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vL1N0eWxlIHNrZWxldG9uXG4ucm93LWl0ZW0taG90ZWxkZXRhaWwtc2t7XG4gICAgcGFkZGluZy10b3A6MzJweDtcbn1cbi5jb2wtaW1nLWhvdGVsZGV0YWlsLXNre1xuICAgIHBhZGRpbmc6IDA7XG59XG4ucC10b3AtNHtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufSIsIi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE5N3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLXNsaWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDIwNnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMlO1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMTA7XG59XG5cbi5kaXYtZ28tYmFjayB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5iYWRnZXNjc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxMDtcbiAgbWFyZ2luLWxlZnQ6IDg0JTtcbiAgYm90dG9tOiAxNiU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pbWctYmFjayB7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNCwgMTA0LCAxMDQsIDAuNzUpO1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kaXYtbWVhbHR5cGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA0cHggMHB4IDRweCA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4uaWNvbi1kZXRhaWwtZ3JlZW4tZml4IHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTZweDtcbiAgY29sb3I6ICMyMTk2NTM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmljb24tZGV0YWlsLWNoZWNrLWdyZWVuLWZpeCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgY29sb3I6ICMyMTk2NTM7XG59XG5cbi5jbHMtZ3JlZW4ge1xuICBjb2xvcjogIzIxOTY1MztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBvcGFjaXR5OiAwLjg1O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4udGV4dC1ob3RlbC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiA4cHggMHB4IDJweCAwcHg7XG59XG5cbi50ZXh0LWhvdGVsLWRlc2NyaXB0aW9uIHtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wZW5hbC1kZXRhaWw6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4ucGVuYWx0eS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBvcGFjaXR5OiAwLjg1O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmxpbmstcGVuYWx0eSB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzQwQTZGMjtcbn1cblxuLnBlbmFsdHktYWN0aXZlIHtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzVBODc7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucGVuYWx0eS1hY3RpdmUtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzVBODc7XG59XG5cbi5pY29uLWFycm93LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNscy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc3Bhbi5wZW5hbHR5LXRleHQgPiBwIHtcbiAgbWFyZ2luOiAtMnB4IDBweCAwcHggNXB4O1xufVxuXG4uaG90ZWwtcm9vbS1kZXRhaWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAxNnB4IDBweCAxMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4ucm9vbS1jbGFzcy1uYW1lIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uaWNvbi1kZXRhaWwtZml4IHtcbiAgd2lkdGg6IDE4cHg7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ubGFiZWwtbWQge1xuICBtYXJnaW46IDA7XG59XG5cbi5yb3ctdGl0bGUge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLnJvb20tY2xhc3MtaWNvbiB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5wLWxlZnQtMjgge1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgd2lkdGg6IDkwJTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5kaXYtYmVkcm9vbS1kaXNwbGF5IGlvbi1yb3c6bGFzdC1jaGlsZCBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRleHQtb3Ige1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4udGV4dC1ob3RlbC1kZXNjcmlwdGlvbiB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4ucm93LWl0ZW0taG90ZWxkZXRhaWwtc2sge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLmNvbC1pbWctaG90ZWxkZXRhaWwtc2sge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucC10b3AtNCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59Il19 */"
=======
module.exports = ".card-background-page {\n  width: 100%;\n  height: 197px;\n  overflow: hidden;\n}\n\n.card-background-page ion-slide {\n  position: relative;\n  text-align: center;\n  min-height: 206px;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 3%;\n  left: 10px;\n  color: #ffffff;\n  z-index: 10;\n}\n\n.div-go-back {\n  z-index: 100;\n  position: absolute;\n  top: env(safe-area-inset-top);\n  left: 10px;\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n}\n\n.badgescss {\n  position: absolute;\n  color: #ffffff;\n  z-index: 10;\n  margin-left: 84%;\n  bottom: 16%;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  font-weight: 100;\n  display: block;\n  padding: 4px 8px;\n  font-size: 14px;\n  border-radius: 10px;\n}\n\n.img-back {\n  height: 28px;\n  padding: 0px;\n  margin-top: 24px;\n  margin-left: 6px;\n  background: rgba(104, 104, 104, 0.75);\n  border-radius: 36px;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.div-mealtype {\n  text-align: left;\n  padding: 4px 0px 4px 5px;\n  line-height: 22px;\n}\n\n.icon-detail-green-fix {\n  width: 14px;\n  height: 16px;\n  color: #219653;\n  position: absolute;\n}\n\n.icon-detail-check-green-fix {\n  font-size: 15px;\n  width: 14px;\n  height: 14px;\n  color: #219653;\n}\n\n.cls-green {\n  color: #219653;\n  font-size: 14px;\n  font-weight: normal;\n  opacity: 0.85;\n  padding-left: 24px;\n  line-height: 16px;\n}\n\n.text-hotel-title {\n  font-weight: bold;\n  padding: 8px 0px 2px 0px;\n}\n\n.text-hotel-description {\n  white-space: inherit;\n  text-align: left;\n}\n\n.penal-detail:last-child {\n  padding-bottom: 12px;\n  padding-top: 4px;\n}\n\n.penalty-text {\n  font-size: 14px;\n  font-weight: normal;\n  opacity: 0.85;\n  padding-left: 8px;\n}\n\n.link-penalty {\n  padding-left: 14px;\n  text-decoration: none;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #40A6F2;\n}\n\n.penalty-active {\n  padding: 8px 8px 8px 20px;\n  color: #ffffff;\n  background-color: #275A87;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.penalty-active-description {\n  font-size: 14px;\n  font-weight: normal;\n  padding: 16px;\n  background-color: #275A87;\n}\n\n.icon-arrow-right {\n  text-align: right;\n  font-size: 24px;\n  padding: 0;\n}\n\n.cls-title {\n  font-size: 16px;\n}\n\nspan.penalty-text > p {\n  margin: -2px 0px 0px 5px;\n}\n\n.hotel-room-detail-content {\n  padding: 0px 16px 0px 11px;\n  font-size: 14px;\n  padding-bottom: 30px;\n}\n\n.room-class-name {\n  padding-top: 16px;\n  padding-left: 5px;\n}\n\n.icon-detail-fix {\n  width: 18px;\n  opacity: 0.6;\n}\n\n.p-top-8 {\n  padding-top: 8px;\n}\n\n.label-md {\n  margin: 0;\n}\n\n.row-title {\n  padding: 10px 0px;\n}\n\n.room-class-icon {\n  opacity: 0.6;\n  text-align: right;\n}\n\n.p-left-28 {\n  padding-left: 28px;\n}\n\n.btn-cancel {\n  width: 90%;\n  border: none;\n  color: #ffffff;\n  background-color: #F79221;\n  border-color: #F79221;\n  height: 48px;\n}\n\n.div-bedroom-display ion-row:last-child span {\n  display: none;\n}\n\n.text-or {\n  padding-top: 8px;\n}\n\n.text-hotel-description {\n  overflow: auto;\n  text-overflow: inherit;\n  white-space: normal;\n}\n\n.row-item-hoteldetail-sk {\n  padding-top: 32px;\n}\n\n.col-img-hoteldetail-sk {\n  padding: 0;\n}\n\n.p-top-4 {\n  padding-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL215dHJpcGJvb2tpbmdkZXRhaWwvbXl0cmlwYm9va2luZ2RldGFpbC5zY3NzIiwic3JjL2FwcC9teXRyaXBib29raW5nZGV0YWlsL215dHJpcGJvb2tpbmdkZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURJTztFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RSOztBREdRO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRFY7O0FES0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNGVjs7QURnQkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNiUjs7QURlUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUNaWjs7QURjUTtFQUNJLGNBQUE7QUNYWjs7QURhSTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ1ZSOztBRFlJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNUUjs7QURXSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNSUjs7QURVSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BSOztBRFNJO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtBQ05SOztBRFFJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ0xSOztBRE9JO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ0pSOztBRE1JO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDSFI7O0FES007RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDRlI7O0FESU07RUFDTSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNEWjs7QURHUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0FaOztBREVRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0NaOztBRENRO0VBQ0ksZUFBQTtBQ0VaOztBREFRO0VBQ0ksd0JBQUE7QUNHWjs7QURBSTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDR1I7O0FEQUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDR1I7O0FEREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0lSOztBRERJO0VBQ0ksZ0JBQUE7QUNJUjs7QURGSTtFQUNJLFNBQUE7QUNLUjs7QURISTtFQUNJLGlCQUFBO0FDTVI7O0FESkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNPUjs7QURMSTtFQUNJLGtCQUFBO0FDUVI7O0FETkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ1NSOztBRFBJO0VBQ0ksYUFBQTtBQ1VSOztBRFJJO0VBQ0ksZ0JBQUE7QUNXUjs7QURUSTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDWVI7O0FEUkE7RUFDSSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksVUFBQTtBQ1lKOztBRFZBO0VBQ0ksZ0JBQUE7QUNhSiIsImZpbGUiOiJzcmMvYXBwL215dHJpcGJvb2tpbmdkZXRhaWwvbXl0cmlwYm9va2luZ2RldGFpbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTk3cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICAgICBpb24tc2xpZGV7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDZweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC10aXRsZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMyU7XG4gICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC5kaXYtZ28tYmFja3tcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgIH1cbiAgICAvLyAuYmFkZ2VzY3NzIHtcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvLyAgICAgei1pbmRleDogMTA7XG4gICAgLy8gICAgIG1hcmdpbi1sZWZ0OiA4NCU7XG4gICAgLy8gICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAvLyAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIH1cbiAgICAuYmFkZ2VzY3NzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4NCU7XG4gICAgICAgIGJvdHRvbTogMTYlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWctYmFja3tcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDEwNCwgMTA0LCAwLjc1KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN3aXBlci1zbGlkZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgLmRpdi1tZWFsdHlwZXtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4IDBweCA0cHggNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICB9XG4gICAgLmljb24tZGV0YWlsLWdyZWVuLWZpeHtcbiAgICAgICAgd2lkdGg6MTRweDtcbiAgICAgICAgaGVpZ2h0OjE2cHg7XG4gICAgICAgIGNvbG9yOiMyMTk2NTM7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmljb24tZGV0YWlsLWNoZWNrLWdyZWVuLWZpeHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB3aWR0aDoxNHB4O1xuICAgICAgICBoZWlnaHQ6MTRweDtcbiAgICAgICAgY29sb3I6IzIxOTY1MztcbiAgICB9XG4gICAgLmNscy1ncmVlbntcbiAgICAgICAgY29sb3I6IzIxOTY1MztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICAudGV4dC1ob3RlbC10aXRsZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHggMnB4IDBweDtcbiAgICB9XG4gICAgLnRleHQtaG90ZWwtZGVzY3JpcHRpb257XG4gICAgICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAucGVuYWwtZGV0YWlsOmxhc3QtY2hpbGR7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIH1cbiAgICAucGVuYWx0eS10ZXh0e1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICBvcGFjaXR5OjAuODU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4OyBcbiAgICAgIH1cbiAgICAgIC5saW5rLXBlbmFsdHl7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjb2xvcjogIzQwQTZGMjtcbiAgICAgIH1cbiAgICAgIC5wZW5hbHR5LWFjdGl2ZXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzVBODc7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbiAgICAgICAgfSBcbiAgICAgICAgLnBlbmFsdHktYWN0aXZlLWRlc2NyaXB0aW9ue1xuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3NUE4NztcbiAgICAgICAgfVxuICAgICAgICAuaWNvbi1hcnJvdy1yaWdodHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2xzLXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ucGVuYWx0eS10ZXh0ID4gcHtcbiAgICAgICAgICAgIG1hcmdpbjogLTJweCAwcHggMHB4IDVweDtcbiAgICAgICAgfVxuICAgIC8vLy9waOG6p24gc3R5bGUgbOG6pXkgdOG7qyByb29tLWRldGFpbFxuICAgIC5ob3RlbC1yb29tLWRldGFpbC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweCAwcHggMTFweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5yb29tLWNsYXNzLW5hbWV7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLmljb24tZGV0YWlsLWZpeHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICB9XG4gICAgXG4gICAgLnAtdG9wLTh7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxuICAgIC5sYWJlbC1tZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnJvdy10aXRsZXtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgfVxuICAgIC5yb29tLWNsYXNzLWljb257XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5wLWxlZnQtMjh7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICB9XG4gICAgLmJ0bi1jYW5jZWx7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgfVxuICAgIC5kaXYtYmVkcm9vbS1kaXNwbGF5IGlvbi1yb3c6bGFzdC1jaGlsZCBzcGFue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAudGV4dC1vcntcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICB9XG4gICAgLnRleHQtaG90ZWwtZGVzY3JpcHRpb257XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9TdHlsZSBza2VsZXRvblxuLnJvdy1pdGVtLWhvdGVsZGV0YWlsLXNre1xuICAgIHBhZGRpbmctdG9wOjMycHg7XG59XG4uY29sLWltZy1ob3RlbGRldGFpbC1za3tcbiAgICBwYWRkaW5nOiAwO1xufVxuLnAtdG9wLTR7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn0iLCIuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMDZweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzJTtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uZGl2LWdvLWJhY2sge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uYmFkZ2VzY3NzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMTA7XG4gIG1hcmdpbi1sZWZ0OiA4NCU7XG4gIGJvdHRvbTogMTYlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogMTAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW1nLWJhY2sge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDQsIDEwNCwgMTA0LCAwLjc1KTtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbn1cblxuLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGl2LW1lYWx0eXBlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNHB4IDBweCA0cHggNXB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLmljb24tZGV0YWlsLWdyZWVuLWZpeCB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjMjE5NjUzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pY29uLWRldGFpbC1jaGVjay1ncmVlbi1maXgge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjMjE5NjUzO1xufVxuXG4uY2xzLWdyZWVuIHtcbiAgY29sb3I6ICMyMTk2NTM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgb3BhY2l0eTogMC44NTtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cblxuLnRleHQtaG90ZWwtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4IDBweCAycHggMHB4O1xufVxuXG4udGV4dC1ob3RlbC1kZXNjcmlwdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGVuYWwtZGV0YWlsOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnBlbmFsdHktdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgb3BhY2l0eTogMC44NTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5saW5rLXBlbmFsdHkge1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICM0MEE2RjI7XG59XG5cbi5wZW5hbHR5LWFjdGl2ZSB7XG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1QTg3O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnBlbmFsdHktYWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1QTg3O1xufVxuXG4uaWNvbi1hcnJvdy1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jbHMtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnNwYW4ucGVuYWx0eS10ZXh0ID4gcCB7XG4gIG1hcmdpbjogLTJweCAwcHggMHB4IDVweDtcbn1cblxuLmhvdGVsLXJvb20tZGV0YWlsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggMTZweCAwcHggMTFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnJvb20tY2xhc3MtbmFtZSB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmljb24tZGV0YWlsLWZpeCB7XG4gIHdpZHRoOiAxOHB4O1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucm93LXRpdGxlIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5yb29tLWNsYXNzLWljb24ge1xuICBvcGFjaXR5OiAwLjY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucC1sZWZ0LTI4IHtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIHdpZHRoOiA5MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uZGl2LWJlZHJvb20tZGlzcGxheSBpb24tcm93Omxhc3QtY2hpbGQgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZXh0LW9yIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnRleHQtaG90ZWwtZGVzY3JpcHRpb24ge1xuICBvdmVyZmxvdzogYXV0bztcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnJvdy1pdGVtLWhvdGVsZGV0YWlsLXNrIHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi5jb2wtaW1nLWhvdGVsZGV0YWlsLXNrIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnAtdG9wLTQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xufSJdfQ== */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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