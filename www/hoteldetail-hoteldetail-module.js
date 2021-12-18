(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hoteldetail-hoteldetail-module"],{

/***/ "./src/app/hoteldetail/hoteldetail.html":
/*!**********************************************!*\
  !*** ./src/app/hoteldetail/hoteldetail.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"cls-header float-arrow-disabled\" >\n  <ion-toolbar class=\"cls-toolbar\">\n      <ion-row>\n        <ion-col size=\"1\">\n            <div style=\"position: absolute\" (click)=\"goback()\">\n                <img style=\"height: 48px; padding: 8px;margin-top: -3px;margin-left:-14px\"\n                  src=\"./assets/imgs/ios-arrow-round-back.svg\">\n              </div>\n        </ion-col>\n        <ion-col size=\"9\" style=\"text-align: center;\">\n          <div class=\"div-hotelname\" (click)=\"changeinfo()\">\n            <div class=\"text-hotelname\">\n                <label class=\"text-title\" style=\"font-size: 15px;\">{{hotelname}}</label>\n            </div>\n            <div><label class=\"text-hr\">{{cindisplayhr}} - {{coutdisplayhr}} | {{guest}} khách</label></div>\n          </div>\n        </ion-col>\n        <ion-col size=\"2\">\n            <div *ngIf=\"!itemlike\" class=\"img-heart\" style=\"top: 3%;left: 30%;\" (click)=\"likeItem()\">\n                <img style=\"padding-top:12px;width: 18px;\" src=\"./assets/imgs/heart-empty-black.svg\">\n              </div>\n              <div *ngIf=\"itemlike\" class=\"img-heart\" style=\"top: 3%;left: 30%;\" (click)=\"unlikeItem()\">\n                <ion-icon style=\"padding-top:10px\" name=\"heart\" color=\"danger\"></ion-icon>\n              </div>\n              <div  class=\"img-sharehd\" (click)=\"share()\"><img style=\"padding-top:10px;width: 18px\"\n                src=\"./assets/imgs/ic_share_black.svg\"></div>\n          </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content #scrollArea (ionScroll)=\"scrollFunction($event)\" [scrollEvents]=\"true\" *ngIf=\"showpopup==true&&ischeck==true\">\n\n \n  <div *ngIf=\"showpopup==true&&ischeck==true\">\n     \n    <div class=\"card-background-page\">\n       \n      <ion-slides (ionSlideDidChange)=\"test()\" [options]=\"slideOpts\" #mySlider class=\"slide-image-hotel\">\n        \n        <ion-slide *ngFor=\"let slide of slideData\">\n          <!-- <img-loader style=\"height: auto;width: 100%\" [src]=\"slide.LinkImage\" useImg fallbackAsPlaceholder=\"./assets/imgs/demopic.svg\"></img-loader> -->\n          <img [src]=\"slide.LinkImage\" style=\"height: auto;width: 100%\" class=\"preview\" alt=\"image\"/>\n          <div *ngIf=\"slide.CaptionImg\" class=\"div-img-caption-grad\"></div>\n          <div *ngIf=\"slide.CaptionImg\" class=\"div-img-caption\">{{slide.CaptionImg}}</div>\n        </ion-slide>\n      </ion-slides>\n      \n        <div class=\"badgescss\">\n          <span>{{coutslide}}/{{lengthslide}}</span>\n        </div>\n\n        <div class=\"div-go-back\" (click)=\"goback()\">\n          <img class=\"img-back\" src=\"./assets/imgs/ios-arrow-round-back-white.svg\" (click)=\"goback()\">\n          <div class=\"div-img-background div-goback-background\"></div>\n      </div>\n\n      <div class=\"img-heart\" *ngIf=\"!itemlike\"  (click)=\"likeItem()\">\n          <div class=\"div-img-background div-heart-background\"></div>\n          <img class=\"image-heart\" src=\"./assets/imgs/ic_heart_w.svg\">\n        </div>\n        <div class=\"img-heart\" *ngIf=\"itemlike\" (click)=\"unlikeItem()\">\n            <div class=\"div-img-background div-heart-background\"></div>\n            <img class=\"image-heart\" src=\"./assets/imgs/ic_heart_red.svg\">\n        </div>\n\n        <div class=\"img-share\" (click)=\"share()\">\n          <div class=\"div-img-background div-share-background\"></div>\n          <img class=\"image-share\" src=\"./assets/imgs/ic_share_w.svg\">\n            \n        </div>\n    </div>\n    <div class=\"hoteldetail-point\">\n      <div>\n        <h2 class=\"text-name\" text-wrap>{{name}}\n        </h2>\n        \n      </div>\n      <div style=\"padding-bottom: 4px\"><img *ngIf=\"json\" src={{json}}></div>\n      <div class=\"hotel-detail-note\">\n        <ion-row *ngIf=\"AvgPoint>9 && AvgPoint<=10 && numHotelReviews >0\" class=\"cls-row-review\" >\n          <ion-col style=\"padding:0px\">\n            <ion-badge ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n            <p class=\"cls-reviewpoint label-badge\"  >Tuyệt vời\n            </p>\n            <ion-note item-end style=\"margin-right: -15px;margin-top: 0;\" (click)=\"btnseemore()\">\n              <button  ion-button icon-only clear class=\"btn-review\">\n                {{numHotelReviews}} Đánh giá\n                <ion-icon style=\"right: -4px;position: absolute;top: -1px;font-size: 24px;\" name=\"ios-arrow-round-forward\"></ion-icon>\n              </button>\n            </ion-note>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"AvgPoint>8 && AvgPoint<=9 && numHotelReviews >0\" >\n          <ion-col style=\"padding:0px\">\n            <ion-badge ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n            <p class=\"cls-reviewpoint label-badge\" >Rất tốt\n            </p>\n            <ion-note item-end style=\"margin-right: -15px;margin-top: 0;\" (click)=\"btnseemore()\">\n              <button  ion-button icon-only clear class=\"btn-review\">\n                {{numHotelReviews}} Đánh giá\n                <ion-icon style=\"right: -4px;position: absolute;top: -1px;font-size: 24px;\" name=\"ios-arrow-round-forward\"></ion-icon>\n              </button>\n            </ion-note>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"AvgPoint>7 && AvgPoint<=8 && numHotelReviews >0\" >\n          <ion-col style=\"padding:0px\">\n            <ion-badge ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n            <p class=\"cls-reviewpoint label-badge\" >Khá tốt\n            </p>\n            <ion-note item-end style=\"margin-right: -15px;margin-top: 0;\" (click)=\"btnseemore()\">\n              <button  ion-button icon-only clear class=\"btn-review\">\n                {{numHotelReviews}} Đánh giá\n                <ion-icon style=\"right: -4px;position: absolute;top: -1px;font-size: 24px;\" name=\"ios-arrow-round-forward\"></ion-icon>\n              </button>\n            </ion-note>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"AvgPoint>5 && AvgPoint<=7 && numHotelReviews >0\" >\n          <ion-col style=\"padding:0px\">\n            <ion-badge ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n            <p class=\"cls-reviewpoint label-badge\" >Tạm được\n            </p>\n            <ion-note item-end style=\"margin-right: -15px;margin-top: 0;\" (click)=\"btnseemore()\">\n              <button  ion-button icon-only clear class=\"btn-review\">\n                {{numHotelReviews}} Đánh giá\n                <ion-icon style=\"right: -4px;position: absolute;top: -1px;font-size: 24px;\" name=\"ios-arrow-round-forward\"></ion-icon>\n              </button>\n            </ion-note>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"AvgPoint<=5 && numHotelReviews >0\" >\n          <ion-col style=\"padding:0px\">\n            <ion-badge ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n            <p class=\"cls-reviewpoint label-badge\" >Không tốt\n            </p>\n            <ion-note item-end style=\"margin-right: -15px;margin-top: 0;\" (click)=\"btnseemore()\">\n              <button  ion-button icon-only clear class=\"btn-review\">\n                {{numHotelReviews}} Đánh giá\n                <ion-icon style=\"right: -4px;position: absolute;top: -1px;font-size: 24px;\" name=\"ios-arrow-round-forward\"></ion-icon>\n              </button>\n            </ion-note>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"cls-row-viewtopsale\" *ngIf=\"topsale24Total > 2\">\n          <ion-col style=\"padding-left: 0px;\">\n            <button ion-button round class=\"btn-topsale\">Đang bán chạy</button>\n            <ion-label class=\"text-topsale\">Đã bán {{ topsale24Total }} phòng trong 24h qua</ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <!-- <hr style=\"margin-top: -16px\"> -->\n    <div *ngIf=\"topsale24Total <= 2\" style=\"margin-top: 0px\" class=\"row-border-cin\"></div>\n  </div>\n  \n  <div *ngIf=\"showpopup==true && linkGoogleMap\" #map id=\"map\"  class=\"div-map\">\n    <iframe width=\"100%\"\n      height=\"100\"\n      frameborder=\"0\"\n      scrolling=\"no\"\n      marginheight=\"0\"\n      marginwidth=\"0\"\n      [src]=\"linkGoogleMap\">\n  </iframe>\n  \n  </div>\n  <div *ngIf=\"showpopup==true&&ischeck==true\">\n    <div style=\"margin-left: 15px;margin-top: 10px; margin-bottom:10px\">\n      \n      <img src=\"./assets/ic_facility/Group.svg\">\n      <label style=\"color: #4f4f4f;font-size: 14px;\">\n        {{Address}}\n      </label>\n    </div>\n    <div class=\"div-cinout\">\n      <div class=\"row-cin-cout\">\n        <ion-grid class=\"cls-gridcinout\">\n          <ion-row style=\"font-size:12px\">\n            <ion-col size=\"4\" style=\"padding:0\" (click)=\"changeDate()\">\n              <ion-label style=\"font-weight: 300\" stacked>Nhận phòng</ion-label>\n            </ion-col>\n            <ion-col size=\"3.5\" style=\"padding:0\" (click)=\"changeDate()\">\n              <ion-label style=\"font-weight: 300\" stacked>Trả phòng</ion-label>\n            </ion-col>\n            <ion-col size=\"3\" style=\"padding:0\" (click)=\"openmnu()\">\n              <ion-label class=\"label-guest\" style=\"font-weight: 300;padding-left: 10px;\" stacked>Khách</ion-label>\n            </ion-col>\n            <ion-col size=\"1.5\" style=\"padding:0\" (click)=\"openmnu()\">\n              <ion-label class=\"label-room\" style=\"font-weight: 300\" stacked>Phòng</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"p-top-4\">\n            <ion-col size=\"3.5\" style=\"padding:0\" (click)=\"changeDate()\">\n              <ion-label class=\"text-cin\" style=\"padding: 0px;color: #26bed6;font-weight: bold;font-size: 15px\" stacked>\n                {{cindisplay}}</ion-label>\n            </ion-col>\n            <ion-col size=\"0.5\" style=\"padding: 0;\">\n              <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n            </ion-col>\n            <ion-col size=\"3.5\" style=\"padding:0\" (click)=\"changeDate()\">\n              <ion-label class=\"text-cout\" style=\"padding: 0px;color: #26bed6;font-weight: bold;font-size: 15px\" stacked>\n                {{coutdisplay}}</ion-label>\n            </ion-col>\n            <ion-col size=\"0.5\" style=\"padding: 0;margin-left: -3px;\">\n              <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n            </ion-col>\n            <ion-col size=\"2\" style=\"padding:0\" (click)=\"openmnu()\">\n              <ion-label class=\"text-guest\"\n                style=\"margin:1px;color: #26bed6;font-weight: bold;font-size: 15px;margin-top: 8px;\">{{guest}}</ion-label>\n            </ion-col>\n            <ion-col size=\"0.5\" style=\"padding: 0;\">\n              <ion-label style=\"margin-top: 32px;color: #666666;text-align: center\">|</ion-label>\n            </ion-col>\n            <ion-col size=\"1\" style=\"padding:0\" (click)=\"openmnu()\">\n              <ion-label class=\"text-input-room\"\n                style=\"margin:1px;color: #26bed6;font-weight: bold;font-size: 15px;margin-top: 8px;\">{{room}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n    <!-- Vùng hiển thị combo -->\n      <div *ngIf=\"ischeckcombo\" class=\"div-combo\">\n        <div no-lines class=\"margin-0\">\n          <ion-row >\n           \n            <ion-col class=\"col-title-combo\">\n                <ion-label class=\"text-hotel-label text-white-space\">{{titlecombo}} | <span class=\"title-combo-price\">{{combopriceontitle}} VND/<span *ngIf=\"PriceFor==1\">Khách</span><span *ngIf=\"PriceFor==0\">Phòng</span></span></ion-label>\n            </ion-col>\n          </ion-row>\n          <div no-lines class=\"padding-lr-16\">\n              <ion-row class=\"border-bottom\"></ion-row>\n            <div class=\"div-combo-title\">\n              <label class=\"cls-combo-title\">Combo bao gồm</label>\n            </div>\n            <div>\n              <label class=\"cls-combo-description\" text-wrap [innerHTML]=\"Description\">\n            </label>\n            </div>\n            <ion-row class=\"border-bottom\"></ion-row>\n\n            <div *ngIf=\"SpecialNote\">\n              <div class=\"div-combo-title\">\n                <label class=\"cls-combo-title\">Ghi chú đặc biệt</label>\n              </div>\n              <div>\n                <label class=\"cls-combo-description\" text-wrap [innerHTML]=\"SpecialNote\">\n                </label>\n              </div>\n          </div>\n            <!-- Bảo hiểm -->\n            <div>\n              <div *ngIf=\"!hasInsurrance else IncludeInsurranceFee\" >\n                <div *ngIf=\"InsurranceFee\" class=\"div-insurrance-info\">\n                  <div class=\"div-logo-cathay\"> \n                    <ion-checkbox class=\"check-insurrance-fee\" color=\"primary\" [(ngModel)]=\"checkInsurranceFee\"></ion-checkbox>\n                    <img class=\"logo-insurance\" src=\"./assets/logo/logo_1.svg\">\n                  </div>\n                  <div class=\"div-info-cathay\">\n                    <label>Vi vu nghỉ dưỡng, thoải mái tận hưởng. Bảo hiểm du lịch và chuyến bay lên đến 100 triệu</label>\n                  </div>\n                  <div class=\"div-cathay-fee\">\n                    <label>+ {{InsurranceFee}}<span class=\"sub-price\">đ</span></label>\n                  </div>\n                </div>\n              </div>\n              <ng-template #IncludeInsurranceFee>\n                <div class=\"div-insurrance-info\">\n                  <div class=\"div-logo-cathay\"> \n                    <img class=\"logo-insurance\" src=\"./assets/logo/logo_1.svg\">\n                  </div>\n                  <div class=\"div-info-cathay\">\n                    <label>Vi vu nghỉ dưỡng, thoải mái tận hưởng. Bảo hiểm du lịch và chuyến bay lên đến 100 triệu</label>\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n\n            <div *ngIf=\"notecombo\" style=\"padding: 5px 0px 5px 0px\">\n              <label class=\"cls-combo-title\">Điều kiện áp dụng</label>\n            </div>\n            <div *ngIf=\"notecombo\">\n              <label class=\"cls-combo-description\" style=\"margin: 2px 0; \" text-wrap [innerHTML]=\"notecombo\">\n              </label>\n            </div>\n            <div *ngIf=\"comboDetailList.length >0\" class=\"div-combo-list\">\n              <div *ngFor=\"let combolist of comboDetailList; let idxcombolist = index\">\n                <ion-row><ion-label class=\"text-combo-city\">Khởi hành từ <span >{{combolist.departureName}}</span></ion-label></ion-row>\n                <div>\n                  <ion-row style=\"padding-top: 2px;\" *ngFor=\"let day of combolist.details; let idxcombolistdetail = index\">\n                    <ion-col size=\"7\" class=\"combo-departure-date\">{{ day.stayFromStr }} <span>→</span> {{ day.stayToStr }}</ion-col>\n                    <ion-col size=\"5\" style=\"padding-right: 6px;\" class=\"text-right\" [ngClass]=\"combolist.detailMinPrice == day.id ? 'text-combo-min-price': 'text-combo-price'\">{{ day.priceDisplay }}<span class=\"sub-price\">đ</span></ion-col>\n                    <ion-row class=\"row-line\" *ngIf=\"combolist.details.length >1\">\n                      <ion-col style=\"padding:0\">\n                      <div [ngClass]=\"combolist.detailMinPrice == day.id ? 'placepoint-19' : 'placepoint-16'\">\n                      </div>\n                      <div  [ngClass]=\"idxcombolistdetail == combolist.details.length -1 ? 'placeline h-14' : 'placeline h-34' \">\n                      </div >\n                    </ion-col>\n                  </ion-row>\n                  </ion-row>\n                </div>\n                <div *ngIf=\"combolist.salePriceUserFlight\">\n                    <ion-row *ngFor=\"let salePriceFlight of combolist.salePriceUserFlight\" class=\"sale-price-flight\">\n                        <img src=\"./assets/imgs/flash.svg\">\n                        <label class=\"text-flash\" style=\"padding-left: 5px\">{{salePriceFlight}}</label>\n                      </ion-row>\n                </div>\n                \n                <ion-row style=\"padding-top: 2px\" *ngIf=\"combolist.hasCalendar\">\n                  <ion-col class=\"text-departure\" style=\"padding-right: 0;padding-left: 0;font-size: 14px\" [ngClass]=\"idxcombolist ==0 ? 'p-bottom-16': '' \"><a (click)=\"showDepartureCalendar(combolist)\">Xem lịch khởi hành</a></ion-col>\n                </ion-row>\n              </div>\n            </div>\n            <div class=\"div-split-fsale\" *ngIf=\" loadpricecombodone && comboDetailList.length ==0 && !warningMaxPax && !flashSaleEndDate && !warningCombofs\"></div>\n            <div>\n              <!-- <ion-row\n                *ngIf=\"loginuser && loadpricecombodone && comboDetailList.length ==0 && !warningMaxPax && !flashSaleEndDate\">\n                <ion-col size=\"6\" class=\"text-pax\"><span>{{adults}} người lớn | {{child}} trẻ em</span></ion-col>\n                <ion-col size=\"6\" class=\"text-right text-combo-room-price\">{{comboprice}}<span class=\"text-d\">đ</span>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"loginuser && comboDetailList.length ==0 && warningMaxPax\">\n                <ion-col style=\"    padding: 0 16px;color: #ff9500;\"><span>{{warningMaxPax}}</span></ion-col>\n              </ion-row> -->\n              <ion-row  *ngIf=\" loadpricecombodone && comboDetailList.length ==0 && !warningMaxPax && !flashSaleEndDate && !warningCombofs\">\n                <ion-col  *ngIf=\"!warningCombofsIP\" size=\"7\" class=\"text-pax\">\n                  <div> <ion-label>{{adults}} người lớn | {{child}} trẻ em</ion-label></div>\n                  <div>\n                    <ion-label class=\"text-price-fsale\">{{comboprice}}<span\n                      class=\"text-price-unit\">đ</span>\n                  </ion-label>\n                  </div>\n                  <div class=\"textroomCombo\">\n                    {{roomCombo}}\n                    </div>\n                </ion-col>\n                <ion-col *ngIf=\"warningCombofsIP\" size=\"7\" style=\"color: #ff9500;\">\n                  <span>{{warningCombofsIP}}</span> \n                 \n                </ion-col>\n                <ion-col size=\"5\" class=\"ion-col-fsale\">\n                  <button \n                  ion-button round outline class=\"button btn-book-fsale\"   *ngIf=\"fs && !flashSaleEndDate && loadcomplete && (!ischeckBOD && checkBODdone)&& comboDetailList.length==0&&ischeckcbfs\" (click)=\"requestCombo(5,null,0)\">Đặt Combo</button>\n                  <button \n                  ion-button round outline class=\"button btn-book-fsale\"   *ngIf=\"fs && !flashSaleEndDate && loadcomplete && (!ischeckBOD && checkBODdone)&& comboDetailList.length==0&&!ischeckcbfs\" (click)=\"requestCombo(4,null,0)\">Yêu cầu đặt</button>\n                </ion-col>\n                <!-- <ion-col size=\"6\" class=\"text-right text-combo-room-price\">{{comboprice}}<span class=\"text-d\">đ</span>\n                </ion-col> -->\n              </ion-row>\n              <ion-row *ngIf=\"loginuser && comboDetailList.length ==0 && warningMaxPax && !flashSaleEndDate\">\n                <ion-col class=\"flashsale-enddate-warning\"><span>{{warningMaxPax}}</span></ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"!loginuser && comboDetailList.length ==0 && warningMaxPax && !flashSaleEndDate\">\n                <ion-col class=\"flashsale-enddate-warning\"><span>{{warningMaxPax}}</span></ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"comboDetailList.length ==0 && !warningMaxPax && !flashSaleEndDate && warningCombofs && !flashSaleEndDate\">\n                <ion-col class=\"flashsale-enddate-warning\"><span>{{warningCombofs}}</span></ion-col>\n              </ion-row>\n              <!-- Text warning khi quá hạn flashsale -->\n              <ion-row *ngIf=\" fs && flashSaleEndDate\">\n                <ion-col><label class=\"flashsale-enddate-warning\">Combo chỉ áp dụng đến ngày {{flashSaleEndDate}}</label>\n                </ion-col>\n              </ion-row>\n              <!-- Text warning BOD -->\n              <ion-row *ngIf=\"ischeckBOD && checkBODdone\" >\n                <ion-col><label class=\"flashsale-enddate-warning\">Phòng cuối cùng trong giai đoạn này vừa đặt xong</label>\n                </ion-col>\n              </ion-row>\n              <!-- Combo flashsale -->\n              <ion-row *ngIf=\"fs && flashSaleEndDate&& (ischeckBOD && checkBODdone)&&!ischeckcbfs\"  class=\"button-combo\">\n                <button ion-button round outline class=\"button btn-book\" (click)=\"changeDate()\">Đổi ngày đi</button>\n              </ion-row>\n             \n              <!-- <ion-row *ngIf=\"fs && !flashSaleEndDate && loadcomplete && (!ischeckBOD && checkBODdone)&& comboDetailList.length==0&&ischeckcbfs\"\n              class=\"button-combo\">\n             <button ion-button round outline class=\"button btn-book\" (click)=\"requestCombo(5,null,0)\">Đặt combo</button>\n           </ion-row> -->\n        \n           <!-- <ion-row\n           *ngIf=\"fs && !flashSaleEndDate && !loadpricecombodone && loadcomplete && (!ischeckBOD && checkBODdone)&& comboDetailList.length==0&&!ischeckcbfs\"\n           class=\"button-combo\">\n           <button ion-button round outline class=\"button btn-book\" (click)=\"requestCombo(4,null,0)\">Gửi yêu cầu</button>\n         </ion-row> -->\n            <!-- Combo vxr --> \n           <ion-row *ngIf=\"ischeckcbcarhide\"\n              class=\"button-combo\">\n             <button ion-button round outline class=\"button btn-book\" *ngIf=\"ischeckcbcar\"  (click)=\"requestCombo(2,null,0)\">Đặt combo</button>\n             <button ion-button round outline class=\"button btn-book\"  *ngIf=\"!ischeckcbcar && loadcomplete && !ischeckBOD && checkBODdone\"  (click)=\"requestCombo(4,null,0)\">Gửi yêu cầu</button>\n           </ion-row>\n              <!-- combo vmb -->\n              <ion-row\n                *ngIf=\"fc && (!loginuser ||!usermail || !allowbookcombofc || (guest >9 && hotelRoomClasses.length >0) ) && loadcomplete && (!ischeckBOD && checkBODdone)\"\n                 class=\"button-combo\">\n                <button ion-button round outline class=\"button btn-book\" (click)=\"sendRequestCombo()\">Gửi yêu cầu</button>\n              </ion-row>\n              <!-- Trường hợp combo ko có phòng => gửi yc -->\n              <ion-row\n                *ngIf=\"fc && loadcomplete && loginuser && allowbookcombofc && hotelRoomClasses.length == 0 && (!ischeckBOD && checkBODdone )\"\n                 class=\"button-combo\">\n                <button ion-button round outline class=\"button btn-book\" (click)=\"sendRequestCombo()\">Gửi yêu cầu</button>\n              </ion-row>\n  \n              <ion-row\n                *ngIf=\"fc && loadcomplete && loginuser && usermail && allowbookcombofc && hotelRoomClasses.length > 0 && (!ischeckBOD && checkBODdone) && guest <=9\"\n                 class=\"button-combo\">\n                <button ion-button round outline class=\"button btn-book\" (click)=\"requestCombo(1,null,0)\">Đặt Combo</button>\n              </ion-row>\n            </div>\n            <!-- Combo khác -->\n            <ion-row *ngIf=\"nm && loadcomplete&&(!ischeckBOD && checkBODdone)\">\n                <button ion-button round outline class=\"button btn-book\" (click)=\"requestCombo(3,null,0)\">Gửi yêu cầu</button>\n            </ion-row>\n          \n          </div>\n        </div>\n      </div>\n      <!-- End Vùng hiển thị combo -->\n      <!-- Vùng trả góp -->\n      <div class=\"div-installment\" *ngIf=\"hotelRoomClasses.length >0 && loadcomplete\">\n        <div class=\"installment-content\">\n          <div class=\"text-installment\">\n            <ion-label>Trả góp cho đơn hàng qua thẻ tín dụng Visa, Mastercard, JCB chỉ từ {{installmentPriceStr}}<span\n                class=\"installment-detail\" (click)=\"showInstallmentDetail()\">Xem chi tiết <img\n                  src=\"./assets/imgs/vector.svg\"></span></ion-label>\n          </div>\n        </div>\n      </div>\n      <!-- Vùng hiển thị detail room -->\n        <div *ngIf=\"hotelRoomClasses.length >0 && loadcomplete\">\n          <div class=\"hotel-detail-content\">\n            <div class=\"hotel-detail-room-class\">\n              <div>\n                <div class=\"card-background-detailpage\">\n                  <ion-item-group *ngFor=\"let hotelroom of hotelRoomClasses; let itemindex = index\"\n                    [myScrollVanish]=\"scrollArea\">\n                    <ion-row class=\"item-room-first-child\" style=\"padding:3px 3px 7px 3px;\">\n                      <ion-col size=\"4\">\n                        <div class=\"div-wrapimg\">\n                          <img\n                            *ngIf=\"hotelroom.Rooms[0].Images.indexOf('noimage') != -1 || hotelroom.Rooms[0].Images.indexOf('http') != -1\"\n                            src=\"{{hotelroom.Rooms[0].Images}}\" class=\"img-room-detail preview\">\n                          <img\n                            *ngIf=\"hotelroom.Rooms[0].Images.indexOf('noimage') == -1 && hotelroom.Rooms[0].Images.indexOf('http') == -1\"\n                            src=\"https:{{hotelroom.Rooms[0].Images}}\" class=\"img-room-detail preview\">\n                        <!-- <img-loader *ngIf=\"hotelroom.Rooms[0].Images.indexOf('noimage') != -1 || hotelroom.Rooms[0].Images.indexOf('http') != -1\" [src]=\"hotelroom.Rooms[0].Images\" useImg class=\"img-loader\" fallbackAsPlaceholder=\"./assets/imgs/demopic.svg\"></img-loader>\n                        <img-loader *ngIf=\"hotelroom.Rooms[0].Images.indexOf('noimage') == -1 && hotelroom.Rooms[0].Images.indexOf('http') == -1\" [src]=\"hotelroom.Rooms[0].Images\" useImg class=\"img-loader\" fallbackAsPlaceholder=\"./assets/imgs/demopic.svg\"></img-loader> -->\n                        </div>\n                      </ion-col>\n                      <ion-col size=\"8\" class=\"item-room-description-hoteldetail\" style=\"padding:3px\">\n                        <div class=\"text-left room-description-hoteldetail-right\"\n                          [ngClass]=\"hotelroom.ClassName.length > 27 ? 'lh-12' : '' \">\n                          <h2 [ngClass]=\"HotelID == '377554' ? 'room-class-name font-size-16' : 'room-class-name' \">{{hotelroom.ClassName}}</h2>\n                          <ion-row>\n                            <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                              <img class=\"icon-detail-fix\" src=\"./assets/iocnsearch/ic_people.svg\">\n                            </ion-col>\n                            <ion-col class=\"no-padding p-top-10\">\n                              <span\n                                *ngIf=\"hotelroom.Rooms[0].MaxAdults != hotelroom.Rooms[0].IncludeAdults && hotelroom.Rooms[0].MaxChils >0\"\n                                class=\"text-room-class-description\">{{hotelroom.Rooms[0].MaxAdults}} người lớn |\n                                {{hotelroom.Rooms[0].IncludeAdults}} người lớn & {{hotelroom.Rooms[0].MaxChils}} trẻ\n                                em</span>\n                              <span\n                                *ngIf=\"hotelroom.Rooms[0].MaxAdults == hotelroom.Rooms[0].IncludeAdults && hotelroom.Rooms[0].MaxPax >= hotelroom.Rooms[0].MaxAdults && hotelroom.Rooms[0].MaxChils >0\"\n                                class=\"text-room-class-description\">{{hotelroom.Rooms[0].MaxAdults}} người lớn &\n                                {{hotelroom.Rooms[0].MaxPax - hotelroom.Rooms[0].MaxAdults}} trẻ em</span>\n                              <span\n                                *ngIf=\"hotelroom.Rooms[0].MaxAdults == hotelroom.Rooms[0].IncludeAdults && (hotelroom.Rooms[0].MaxPax < hotelroom.Rooms[0].MaxAdults || hotelroom.Rooms[0].MaxChils ==0)\"\n                                class=\"text-room-class-description\">Phòng tối đa {{hotelroom.Rooms[0].MaxPax}} khách</span>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row\n                            *ngIf=\"hotelroom.Rooms[0].RoomInfomations && hotelroom.Rooms[0].RoomInfomations.BedSummaryDisplaysMobile && hotelroom.Rooms[0].RoomInfomations.BedSummaryDisplaysMobile.length >0\">\n                            <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                              <img class=\"icon-detail-fix\" src=\"./assets/ic_hoteldetail/ic_bed.svg\">\n                            </ion-col>\n                            <ion-col class=\"no-padding col-width-90-percent\">\n                              <div *ngFor=\"let bed of hotelroom.Rooms[0].RoomInfomations.BedSummaryDisplaysMobile\"\n                                class=\"text-room-class-description\" [ngClass]=\"bed.length > 40 ? 'hidden-text': ''\">{{bed}}\n                              </div>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row\n                          *ngIf=\"!hotelroom.Rooms[0].RoomInfomations.BedSummaryDisplaysMobile && hotelroom.Rooms[0].BedTypes.length >0\">\n                          <ion-col size=\"1\" class=\"no-padding room-class-icon\">\n                            <img class=\"icon-detail-fix\" src=\"./assets/ic_hoteldetail/ic_bed.svg\">\n                          </ion-col>\n                          <ion-col class=\"no-padding col-width-90-percent\">\n                            <div *ngFor=\"let bed of hotelroom.Rooms[0].BedTypes\"\n                              class=\"text-room-class-description\">{{bed.description}}\n                            </div>\n                          </ion-col>\n                        </ion-row>\n                          <ion-row class=\"row-see-detail\" (click)=\"showRoomDetail(hotelroom)\">\n                            <span class=\"text-see-detail\">Xem chi tiết</span>\n                          </ion-row>\n                        </div>\n                      </ion-col>\n                    </ion-row>\n                    <!-- Vùng hiển thị facility, mealtype, penalty -->\n                    <div class=\"mealtype-item group-{{itemindex}}\">\n                      <div class=\"div-mealtype\"\n                        *ngFor=\"let mealtype of hotelroom.MealTypeRates; let gidx = index; let j = index\">\n                        <div\n                          [ngClass]=\"mealtype.displayMealType && (itemindex==0 && gidx==0) ? 'cls-firstmealtype-border p-left-8 cls-fix-visible' : (mealtype.displayMealType ? 'cls-fix-visible p-left-8': 'cls-hidden p-left-8') \">\n                          <div *ngIf=\"mealtype.displayMealType && (itemindex==0 && gidx==0)\" class=\"div-best\">\n                            <ion-label class=\"text-best\">\n                              Đề xuất tốt nhất\n                            </ion-label>\n                          </div>\n                          <ion-row  style=\"width:100%;align-items: center;padding-top: 4px\"\n                          *ngIf=\"mealtype.BedTypes && mealtype.BedTypes.length >=0\">\n                            <div class=\"div-flex\" *ngFor=\"let bed of mealtype.BedTypes\">\n                              <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_bed.svg\">\n                              <div class=\"margin-left-8\" >\n                                  <ion-label\n                                      class=\"penalty-text padding-0\">{{bed.description}}\n                                  </ion-label>\n                              </div>\n                            </div>\n                          \n                        </ion-row>\n\n                        <ion-row style=\"width:100%;align-items: center;padding-top: 4px\">\n                          <img *ngIf=\"mealtype.Name || mealtype.Notes.length > 0\" class=\"icon-detail-green-fix\"\n                            src=\"./assets/ic_hoteldetail/ic_food_green.svg\">\n                          <ion-label *ngIf=\"mealtype.Name != null && mealtype.Notes.length==0\"\n                            class=\"text-hotel-description cls-green\">{{mealtype.Name}}</ion-label>\n                          <ion-label\n                            *ngIf=\"mealtype.Name != null && mealtype.Notes.length!=0 && mealtype.Notes[0].length == mealtype.Name.length\"\n                            class=\"text-hotel-description cls-green\">{{mealtype.Notes.join(', ')}}</ion-label>\n                          <ion-label\n                            *ngIf=\"mealtype.Name != null && mealtype.Notes.length!=0 && mealtype.Notes[0].length != mealtype.Name.length\"\n                            class=\"text-hotel-description cls-green\">{{mealtype.Name}}, {{mealtype.Notes.join(', ')}}\n                          </ion-label>\n                        </ion-row>\n\n                        <!-- Extrabed -->\n                      <ion-row style=\"width:100%;padding-top: 4px\" *ngIf=\"mealtype.ExtraBedNoteAdult\">\n                        <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                        <ion-label class=\"text-hotel-description cls-green\">{{mealtype.ExtraBedNoteAdult}}</ion-label>\n                      </ion-row>\n                      <ion-row style=\"width:100%;padding-top: 4px\" *ngIf=\"mealtype.ExtraBedNoteChild\">\n                        <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                        <ion-label class=\"text-hotel-description cls-green\">{{mealtype.ExtraBedNoteChild}}</ion-label>\n                      </ion-row>\n                      <!-- CompulsoryNote -->\n                        <ion-row style=\"width:100%;padding-top: 4px\"\n                          *ngIf=\"mealtype.CompulsoryNote\">\n                          <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                          <ion-label class=\"text-hotel-description cls-green\">{{mealtype.CompulsoryNote}}</ion-label>\n                        </ion-row>\n\n                        <ion-row style=\"width:100%;padding-top: 4px\"\n                        *ngIf=\"mealtype.CompulsoryAdultWithoutNoNote\">\n                        <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                        <ion-label class=\"text-hotel-description cls-green\">{{mealtype.CompulsoryAdultWithoutNoNote}}</ion-label>\n                      </ion-row>\n\n                      <ion-row style=\"width:100%;padding-top: 4px\"\n                        *ngIf=\"mealtype.CompulsoryChildWithoutNoNote\">\n                        <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                        <ion-label class=\"text-hotel-description cls-green\">{{mealtype.CompulsoryChildWithoutNoNote}}</ion-label>\n                      </ion-row>\n\n                      <!-- Promotion include -->\n                      <ion-row style=\"width:100%;align-items: center\"\n                        *ngFor=\"let promo of mealtype.PromotionInclusions\">\n                        <ion-row style=\"width:100%;padding-top: 4px\"\n                          *ngIf=\"hotelroom.Rooms[0].RoomInfomations.Facilitys.length != 0 && hotelroom.Rooms[0].RoomInfomations.Facilitys != 0 && (promo.indexOf('giường') == -1 || (promo.indexOf('giường') != -1 && !(mealtype.BedTypes && mealtype.BedTypes.length >=0 ) ) )\">\n                          <img *ngIf=\"promo.indexOf('Đưa đón') == -1 && promo.indexOf('Wifi') == -1\"\n                            class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                          <img *ngIf=\"promo.indexOf('Wifi') != -1\" class=\"icon-detail-green-fix\"\n                            src=\"./assets/ic_hoteldetail/ic_wifi.svg\">\n                          <img *ngIf=\"promo.indexOf('Đưa đón') != -1\" class=\"icon-detail-green-fix\"\n                            src=\"./assets/ic_hoteldetail/ic_bus_green.svg\">\n                          <ion-label class=\"text-hotel-description cls-green\">{{promo}}</ion-label>\n                        </ion-row>\n                      </ion-row>\n\n                      <ion-row style=\"width:100%;align-items: center\"\n                      *ngFor=\"let promo of mealtype.PromotionInclusions\">\n                      <ion-row style=\"width:100%;padding-top: 4px\"\n                        *ngIf=\"hotelroom.Rooms[0].RoomInfomations.Facilitys.length == 0 && hotelroom.Rooms[0].RoomInfomations.Facilitys == 0  && (promo.indexOf('giường') == -1 || (promo.indexOf('giường') != -1 && !(mealtype.BedTypes && mealtype.BedTypes.length >=0 ) ) )\">\n                        <img *ngIf=\"promo.indexOf('Đưa đón') == -1 && promo.indexOf('Wifi') == -1\"\n                          class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                        <img *ngIf=\"promo.indexOf('Wifi') != -1\" class=\"icon-detail-green-fix\"\n                          src=\"./assets/ic_hoteldetail/ic_wifi.svg\">\n                        <img *ngIf=\"promo.indexOf('Đưa đón') != -1\" class=\"icon-detail-green-fix\"\n                          src=\"./assets/ic_hoteldetail/ic_bus_green.svg\">\n                        <ion-label class=\"text-hotel-description cls-green\">{{promo}}</ion-label>\n                      </ion-row>\n                    </ion-row>\n\n                  \n\n                      <!-- Facilitys -->\n                      <ion-row style=\"width:100%;align-items: center;\"\n                        *ngFor=\"let fac of hotelroom.Rooms[0].RoomInfomations.Facilitys\">\n                        <ion-row style=\"width:100%;padding-top: 4px\" *ngIf=\"!mealtype.PromotionInclusions || (mealtype.PromotionInclusions && mealtype.PromotionInclusions.length <= 3)\">\n                          <img *ngIf=\"fac.Name.indexOf('Đưa đón') == -1 && fac.Name.indexOf('Wifi') == -1\"\n                            class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                          <img *ngIf=\"fac.Name.indexOf('Wifi') != -1\" class=\"icon-detail-green-fix\"\n                            src=\"./assets/ic_hoteldetail/ic_wifi.svg\">\n                          <img *ngIf=\"fac.Name.indexOf('Đưa đón') != -1\" class=\"icon-detail-green-fix\"\n                            src=\"./assets/ic_hoteldetail/ic_bus_green.svg\">\n                          <ion-label class=\"text-hotel-description cls-green\">{{ fac.Name }}</ion-label>\n                        </ion-row>\n                      </ion-row>\n                      \n                          <!-- <ion-row style=\"width:100%;align-items: center;padding-top: 4px\">\n                            <img *ngIf=\"mealtype.Name || mealtype.Notes.length > 0\" class=\"icon-detail-green-fix\"\n                              src=\"./assets/ic_hoteldetail/ic_food_green.svg\">\n                            <ion-label *ngIf=\"mealtype.Name != null && mealtype.Notes.length==0\"\n                              class=\"text-hotel-description cls-green\">{{mealtype.Name}}</ion-label>\n                            <ion-label\n                              *ngIf=\"mealtype.Name != null && mealtype.Notes.length!=0 && mealtype.Notes[0].length == mealtype.Name.length\"\n                              class=\"text-hotel-description cls-green\">{{mealtype.Notes.join(', ')}}</ion-label>\n                            <ion-label\n                              *ngIf=\"mealtype.Name != null && mealtype.Notes.length!=0 && mealtype.Notes[0].length != mealtype.Name.length\"\n                              class=\"text-hotel-description cls-green\">{{mealtype.Name}}, {{mealtype.Notes.join(', ')}}\n                            </ion-label>\n                          </ion-row>\n                          <ion-row style=\"width:100%;align-items: center;\"\n                            *ngFor=\"let fac of hotelroom.Rooms[0].RoomInfomations.Facilitys\">\n                            <ion-row style=\"width:100%;padding-top: 4px\" *ngIf=\"mealtype.PromotionInclusions.length == 0\">\n                              <img *ngIf=\"fac.Name.indexOf('Đưa đón') == -1 && fac.Name.indexOf('Wifi') == -1\"\n                                class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                              <img *ngIf=\"fac.Name.indexOf('Wifi') != -1\" class=\"icon-detail-green-fix\"\n                                src=\"./assets/ic_hoteldetail/ic_wifi.svg\">\n                              <img *ngIf=\"fac.Name.indexOf('Đưa đón') != -1\" class=\"icon-detail-green-fix\"\n                                src=\"./assets/ic_hoteldetail/ic_bus_green.svg\">\n                              <ion-label class=\"text-hotel-description cls-green\">{{ fac.Name }}</ion-label>\n                            </ion-row>\n                          </ion-row>\n                          <ion-row style=\"width:100%;align-items: center\"\n                            *ngFor=\"let promo of mealtype.PromotionInclusions\">\n                            <ion-row style=\"width:100%;padding-top: 4px\"\n                              *ngIf=\"hotelroom.Rooms[0].RoomInfomations.Facilitys.length != 0 && hotelroom.Rooms[0].RoomInfomations.Facilitys != 0\">\n                              <img *ngIf=\"promo.indexOf('Đưa đón') == -1 && promo.indexOf('Wifi') == -1\"\n                                class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                              <img *ngIf=\"promo.indexOf('Wifi') != -1\" class=\"icon-detail-green-fix\"\n                                src=\"./assets/ic_hoteldetail/ic_wifi.svg\">\n                              <img *ngIf=\"promo.indexOf('Đưa đón') != -1\" class=\"icon-detail-green-fix\"\n                                src=\"./assets/ic_hoteldetail/ic_bus_green.svg\">\n                              <ion-label class=\"text-hotel-description cls-green\">{{promo}}</ion-label>\n                            </ion-row>\n                            <ion-row style=\"width:100%;padding-top: 4px\"\n                              *ngIf=\"hotelroom.Rooms[0].RoomInfomations.Facilitys.length == 0 && hotelroom.Rooms[0].RoomInfomations.Facilitys == 0\">\n                              <img *ngIf=\"promo.indexOf('Đưa đón') == -1 && promo.indexOf('Wifi') == -1\"\n                                class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_check_green.svg\">\n                              <img *ngIf=\"promo.indexOf('Wifi') != -1\" class=\"icon-detail-green-fix\"\n                                src=\"./assets/ic_hoteldetail/ic_wifi.svg\">\n                              <img *ngIf=\"promo.indexOf('Đưa đón') != -1\" class=\"icon-detail-green-fix\"\n                                src=\"./assets/ic_hoteldetail/ic_bus_green.svg\">\n                              <ion-label class=\"text-hotel-description cls-green\">{{promo}}</ion-label>\n                            </ion-row>\n                          </ion-row> -->\n\n\n                          <ion-row *ngIf=\"!ExcludeVAT\" style=\"width:100%;align-items: center;padding-top: 4px\">\n                            <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_fee_green.svg\">\n                            <ion-label class=\"text-hotel-description cls-green\">Đã bao gồm thuế phí</ion-label>\n                          </ion-row>\n                          <ion-row *ngIf=\"ExcludeVAT\" style=\"width:100%;align-items: center;padding-top: 4px\">\n                            <img class=\"icon-detail-green-fix\" src=\"./assets/ic_hoteldetail/ic_fee_green.svg\">\n                            <ion-label class=\"text-hotel-description cls-green\">Chưa bao gồm thuế & phí</ion-label>\n                          </ion-row>\n                          <ion-row class=\"penal-detail\"\n                            *ngIf='mealtype.Penaltys && mealtype.Penaltys[0] && !mealtype.Penaltys[0].IsPenaltyFree && hotelroom.Rooms[0].Penaltys[0]'>\n                            <img\n                              *ngIf=\"mealtype.Penaltys && mealtype.Penaltys[0].PenaltyDescription && mealtype.Penaltys[0].PenaltyDescription.length <=70\"\n                              class=\"icon-detail-check-green-fix\"  src=\"./assets/ic_hoteldetail/uc_nonrefund_green.svg\">\n                            <img\n                              *ngIf=\"mealtype.Penaltys && mealtype.Penaltys[0].PenaltyDescription && mealtype.Penaltys[0].PenaltyDescription.length > 70\"\n                              class=\"icon-detail-check-green-fix\" src=\"./assets/ic_hoteldetail/ic_info.svg\">\n                            <span\n                              *ngIf=\"mealtype.Penaltys && mealtype.Penaltys[0].PenaltyDescription && mealtype.Penaltys[0].PenaltyDescription.length <=70\"\n                              class=\"penalty-text\"\n                              [innerHTML]=\"mealtype.Penaltys && mealtype.Penaltys[0].PenaltyDescription.replace('p>','ion-label>')\"></span>\n                            <div style=\"margin-top: -4px;\" (click)=\"penaltySelected(hotelRoomClasses.length*itemindex+j+1)\">\n                              <button\n                                *ngIf=\"!mealtype.Penaltys[0].IsPenaltyFree && mealtype.Penaltys[0].PenaltyDescription && mealtype.Penaltys[0].PenaltyDescription.length > 70\"\n                                class=\"penalty-text link-penalty\">Chính sách hủy phòng</button>\n                            </div>\n    \n                            <div class=\"penalty-active arrow\"\n                              [class.active]=\"penaltyItemSelected==hotelRoomClasses.length*itemindex+j+1\"\n                              *ngIf=\"penaltyItemSelected==hotelRoomClasses.length*itemindex+j+1\">\n                              <ion-label *ngFor=\"let pen of mealtype.Penaltys; let k = index\"\n                                class=\"penalty-active-description\"\n                                [innerHTML]=\"pen.PenaltyDescription.replace('p>','ion-label>')\"\n                                [ngClass]=\"mealtype.Penaltys.length > 1 && k==mealtype.Penaltys.length-1 ? 'none-p-top' : ''\">\n                              </ion-label>\n                            </div>\n                          </ion-row>\n                          <ion-row style=\"width:100%\" class=\"penal-detail\"\n                            *ngIf='mealtype.Penaltys && mealtype.Penaltys[0] && mealtype.Penaltys[0].IsPenaltyFree && hotelroom.Rooms[0].Penaltys[0]'>\n                            <img class=\"icon-detail-check-green-fix\" src=\"./assets/ic_hoteldetail/ic_info.svg\">\n                            <div style=\"margin-top: -4px;\" (click)=\"penaltySelected(hotelRoomClasses.length*itemindex+j+1)\">\n                              <button class=\"penalty-text link-penalty\">Hủy miễn phí trước ngày\n                                {{mealtype.Penaltys[0].PenaltyShortDateStr}}</button>\n                            </div>\n                            <div class=\"penalty-active arrow\"\n                              [class.active]=\"penaltyItemSelected==hotelRoomClasses.length*itemindex+j+1\"\n                              *ngIf=\"penaltyItemSelected==hotelRoomClasses.length*itemindex+j+1\">\n                              <ion-label *ngFor=\"let pen of mealtype.Penaltys; let k = index\"\n                                class=\"penalty-active-description\"\n                                [innerHTML]=\"pen.PenaltyDescription.replace('p>','ion-label>')\"\n                                [ngClass]=\"mealtype.Penaltys.length > 1 && k==mealtype.Penaltys.length-1 ? 'none-p-top' : ''\">\n                              </ion-label>\n                            </div>\n                          </ion-row>\n\n                          <ion-row *ngIf=\"(loginuser || mealtype.IsshowpricesOTA) && mealtype.PromotionNote\"\n                            class=\"text-promotion-note\">\n                            <div class=\"div-promotion-note\">\n                              <span class=\"icon-text-promotion\">\n                                <img style=\"width:14px\" src=\"./assets/imgs/gift2.svg\">\n                              </span>\n                              <span>{{mealtype.PromotionNote}}</span>\n                            </div>\n                          </ion-row>\n                          <ion-grid class=\"cls-ion-grid\">\n                            <ion-row >\n                              <ion-col size=\"8\">\n                                <ion-row\n                                  *ngIf=\"hotelRooms.SummaryFilter && (loginuser || mealtype.IsshowpricesOTA) && !hotelroom.MSG\"\n                                  class=\"text-room-description\">\n                                  <ion-col style=\"padding:0\">\n                                    <ion-label style=\"margin:0px\">{{hotelRooms.SummaryFilter}}</ion-label>\n                                  </ion-col>\n    \n                                </ion-row>\n                                <ion-row *ngIf=\"hotelroom.MSG\" class=\"text-room-description\">\n                                  <ion-col style=\"padding:0\">\n                                    <ion-label style=\"margin:0px\">Giá cơ bản dành cho {{hotelroom.Rooms[0].IncludeAdults}}\n                                      người\n                                      lớn</ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              \n                                <!-- Hiển thị default giá lớn nhất trong cùng group bữa ăn -->\n                                <ion-row *ngIf=\"(loginuser || mealtype.IsshowpricesOTA)\">\n                                  <ion-col\n                                    [ngClass]=\"((loginuser || mealtype.IsshowpricesOTA) && mealtype.AvailableNo >0 && mealtype.Status=='AL')? 'text-room-price-no-bottom':'text-room-price' \">\n                                    <ion-label class=\"text-price\">{{mealtype.PriceAvgPlusTAStr}}<span\n                                        class=\"text-price-unit\">đ</span>\n                                      <span class=\"text-room-price-ota\"\n                                        *ngIf=\"(loginuser || mealtype.IsshowpricesOTA) && mealtype.PriceAvgPlusTA != mealtype.PriceAvgPlusOTA && mealtype.PriceAvgPlusOTA > mealtype.PriceAvgPlusTA\">\n                                        {{mealtype.PriceAvgPlusOTAStr}}đ</span>\n                                      <span class=\"text-room-price-ota\"\n                                        *ngIf=\"(loginuser || mealtype.IsshowpricesOTA) && mealtype.PriceAvgPlusTA == mealtype.PriceAvgPlusOTA && mealtype.PriceAvgPlusOTA <= mealtype.PriceAvgPlusTA && mealtype.displayLastPriceAvgPlusOTA && mealtype.displayLastPriceAvgPlusOTAStr != mealtype.PriceAvgPlusOTAStr\">\n                                        {{mealtype.displayLastPriceAvgPlusOTAStr}}đ</span>\n                                    </ion-label>\n    \n                                  </ion-col>\n    \n                                </ion-row>\n                              </ion-col>\n                              <ion-col size=\"4\">\n                                <ion-row *ngIf=\"mealtype.Status!='AL' && (loginuser || mealtype.IsshowpricesOTA) && !mealtype.MSG.toString()\" class=\"text-room-description\">\n                                  <ion-col style=\"padding:0\">\n                                    <ion-label class=\"cls-textconfirm\">Xác nhận trong 60’</ion-label>\n                                  </ion-col>\n                                </ion-row>\n                                <ion-row *ngIf=\"mealtype.Status=='AL' && (loginuser || mealtype.IsshowpricesOTA)\" class=\"text-room-description\">\n                                  <ion-col style=\"padding:0\">\n                                   \n                                    <ion-label class=\"cls-textconfirm\"> <span><img class=\"img-flash\" src=\"./assets/imgs/flash_confirm.svg\">\n                                    </span>Xác nhận ngay</ion-label>\n                                  </ion-col>\n                                </ion-row>\n                                <div class=\"div-btnbook\"\n                                  *ngIf=\"(loginuser || mealtype.IsshowpricesOTA) && !mealtype.MSG.toString() && mealtype.Status=='AL'&&hotelroom.RoomType!='villa'\"\n                                  >\n                                  <button \n                                    (click)=\"book(hotelroom.Rooms[0].RoomID,mealtype,j,hotelroom.ClassName,itemindex)\"\n                                    ion-button round outline class=\"button btn-book-outline\">Đặt {{room}} phòng</button>\n                                </div>\n                                <div class=\"div-btnbook\"\n                                *ngIf=\"(loginuser || mealtype.IsshowpricesOTA) && !mealtype.MSG.toString() && mealtype.Status=='AL' &&hotelroom.RoomType=='villa'\"\n                                >\n                                <button \n                                  (click)=\"book(hotelroom.Rooms[0].RoomID,mealtype,j,hotelroom.ClassName,itemindex)\"\n                                  ion-button round outline class=\"button btn-book-outline\">Đặt {{room}} villa</button>\n                              </div>\n                                <div class=\"div-btnbook\"\n                                  *ngIf=\"(loginuser || mealtype.IsshowpricesOTA) && !mealtype.MSG.toString() && mealtype.Status!='AL'\"\n                                 >\n                                  <button \n                                    (click)=\"book(hotelroom.Rooms[0].RoomID,mealtype,j,hotelroom.ClassName,itemindex)\"\n                                    ion-button round outline class=\"button btn-book-outline\">Yêu cầu đặt</button>\n                                </div>\n                              </ion-col>\n                            </ion-row>\n                          </ion-grid>\n                          <div  [ngClass]=\"(mealtype.displayMealType && (itemindex==0 && gidx==0)) ? '' : 'div-border-bottom'\"></div>\n                        \n                          <ion-row *ngIf=\"(loginuser || mealtype.IsshowpricesOTA) && hotelroom.MSG\">\n                            <ion-col style=\"text-align: right\">\n                              <ion-label style=\"color:#F79321;white-space: normal;padding-bottom: 16px;padding-right: 8px\">\n                                {{ hotelroom.MSG.toString().trim()}}</ion-label>\n                            </ion-col>\n                          </ion-row>\n                         \n                          <!-- Thêm trường hợp số trẻ em quá số lượng cho phép -->\n                          <ion-row *ngIf=\"(loginuser || mealtype.IsshowpricesOTA) && !hotelroom.MSG && mealtype.MSG\">\n                            <ion-col style=\"text-align: right\">\n                              <ion-label style=\"color:#F79321;white-space: normal;padding-bottom: 16px;padding-right: 8px\">\n                                {{ mealtype.MSG.toString().trim()}}</ion-label>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row *ngIf=\"!loginuser && !mealtype.IsshowpricesOTA\" class=\"text-register\"\n                            (click)=\"goToLogin()\">\n                            <div style=\"margin:0px;line-height: 24px;width:100%;border: none;\">\n                              <span class=\"icon-text-register\">\n                                <img src=\"./assets/imgs/ic_email.svg\">\n                              </span>\n                              <span style=\"font-size:22px;font-weight: bold\">Đăng nhập</span> để xem giá phòng</div>\n                          </ion-row>\n                        </div>\n                      </div>\n                      <div class=\"cls-seemoreroomdetail div-show-{{itemindex}}\" (click)=\"seemoreroomdetail(1, itemindex )\"\n                        *ngIf=\"!(mealtypegrouplist && mealtypegrouplist.indexOf(itemindex) != -1) && hotelroom.countMealType > 0\">\n                        Xem thêm {{ hotelroom.countMealType }} lựa chọn <img class=\"img-seemoreroom\"\n                          src=\"./assets/imgs/ic_down.svg\">\n                      </div>\n                      <div class=\"cls-hiddenroomdetail div-hide-{{itemindex}}\" (click)=\"seemoreroomdetail(2, itemindex)\"\n                        *ngIf=\"mealtypegrouplist && mealtypegrouplist.indexOf(itemindex) != -1 && hotelroom.countMealType > 0\">\n                        Ẩn {{ hotelroom.countMealType }} lựa chọn <img class=\"img-seemoreroom\"\n                          src=\"./assets/imgs/ic_up.svg\">\n                      </div>\n                    </div>\n                    <div class=\"div-split-group\"></div>\n                  </ion-item-group>\n                </div>\n    \n              </div>\n            </div>\n          </div>\n        </div>\n      <div *ngIf=\"!loadcomplete && hotelRoomClasses && hotelRoomClasses.length == 0\" class=\"div-pending-load-data\">\n        <!-- <img src=\"./assets/placeholder/group_review.svg\"> -->\n        <div *ngFor=\"let i of itemsSk\" padding>\n          <div class=\"div-sk-detail\">\n              <ion-row class=\"row-item-hoteldetail-sk\">\n                  <ion-col size=\"4\" class=\"col-img-hoteldetail-sk\" >\n                      <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px;margin:0\"></ion-skeleton-text>\n                  </ion-col>\n                  <ion-col size=\"8\" class=\"col-description-hoteldetail-sk\" style=\"line-height: 16px;padding-top: 0\">\n                      <ion-skeleton-text animated style=\"width: 50%;margin: 0;height: 16px;\"></ion-skeleton-text>\n                      <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                      <ion-skeleton-text animated style=\"width: 75%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n                      <ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                  </ion-col>\n              </ion-row>\n              <ion-row class=\"row-item-description-sk\">\n                  <ion-skeleton-text animated style=\"width: 104px;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width: 83%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width: 67%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"8.5\" style=\"padding: 0\"></ion-col>\n                <ion-col size=\"3.5\" style=\"padding: 0\"><ion-skeleton-text animated style=\"margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col size=\"6.3\" style=\"padding: 0\"></ion-col>\n                  <ion-col size=\"5.7\" style=\"padding: 0\"><ion-skeleton-text animated style=\"margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text></ion-col>\n                </ion-row>\n              <ion-row class=\"row-item-button-sk\">\n                  <ion-skeleton-text animated style=\"width: 100%;margin: 0;height: 48px;border-radius: 6px;margin-top:16px\"></ion-skeleton-text>\n              </ion-row>\n          </div>\n      </div>\n      </div>\n      <div *ngIf=\"loadcomplete && hotelRoomClasses && hotelRoomClasses.length == 0\" class=\"div-empty-room\">\n          <ion-row *ngIf=\"emptyroom\">\n            <ion-col><div class=\"empty-room\"><img src=\"./assets/empty/ic_outofroom.png\"></div></ion-col>\n          </ion-row>\n          <ion-row>\n            <label *ngIf=\"emptyroom else notmatchroom\" class=\"label-empty-room\">Xin lỗi, không còn phòng trống trong khoảng thời gian này</label>\n            <ng-template #notmatchroom><label class=\"label-empty-room\">Rấc tiếc, iVIVU không tìm thấy phòng thoả yêu cầu của bạn. Vui lòng chọn lại số lượng phòng!</label></ng-template>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"btn-empty-left\"><button ion-button round outline class=\"button btn-change-hotel\" (click)=\"changeHotel()\">Đổi khách sạn</button></ion-col>\n            <ion-col class=\"btn-empty-right\"><button ion-button round outline class=\"button btn-change-date\" (click)=\"changeDate()\">Đổi ngày</button></ion-col>\n          </ion-row>\n      </div>\n      <!-- End Vùng Detail Room -->\n\n    <div class=\"list-item-end\">\n      <div class=\"div-row-first-item-end\" (click)=\"FacilitiesPage()\">\n        <label>\n          Tiện ích\n        </label>\n        <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"item-end\"></ion-icon>\n      </div>\n      <div class=\"div-row-item-end\" (click)=\"DescriptionPage()\">\n        <label>\n          Thông tin khách sạn\n        </label>\n        <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"item-end\"></ion-icon>\n      </div>\n      <div class=\"div-row-item-end\" (click)=\"PolicyPage()\">\n        <label>\n          Chính sách khách sạn\n        </label>\n        <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"item-end\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"div-split\"></div>\n    \n    <div class=\"cls-ml16\" *ngIf=\"numHotelReviews>0\">\n      <label class=\"text-titlereview\">\n        Đánh giá của khách hàng\n      </label>\n      <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint>9 && AvgPoint<=10 && numHotelReviews >0\">\n        <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n        <div class=\"cls-ml6\">\n            <div  class=\"text-point\">Tuyệt vời</div>\n            <div class=\"num-review\">\n                {{numHotelReviews}} đánh giá\n            </div>\n        </div>\n      </div>\n      \n      <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint>8 && AvgPoint<=9 && numHotelReviews >0\">\n        <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n        <div class=\"cls-ml6\">\n            <div  class=\"text-point\">Rất tốt</div>\n            <div class=\"num-review\">\n                {{numHotelReviews}} đánh giá\n            </div>\n        </div>\n      </div>\n      <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint>7 && AvgPoint<=8 && numHotelReviews >0\">\n        <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n        <div class=\"cls-ml6\">\n            <div  class=\"text-point\">Khá tốt</div>\n            <div class=\"num-review\">\n                {{numHotelReviews}} đánh giá\n            </div>\n        </div>\n      </div>\n      <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint>5 && AvgPoint<=7 && numHotelReviews >0\">\n        <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n        <div class=\"cls-ml6\">\n            <div  class=\"text-point\">Tạm được</div>\n            <div class=\"num-review\">\n                {{numHotelReviews}} đánh giá\n            </div>\n        </div>\n      </div>\n      <div class=\"div-review lh-normal\"  *ngIf=\"AvgPoint<=5 && numHotelReviews >0\">\n        <ion-badge class=\"cls-ionbadge\" ion-badge-border-radius>{{AvgPoint}}</ion-badge>\n        <div class=\"cls-ml\">\n            <div  class=\"text-point\">Không tốt</div>\n            <div class=\"num-review\">\n                {{numHotelReviews}} đánh giá\n            </div>\n        </div>\n      </div>\n      <div  *ngIf=\"arrimgreview.length>0\" class=\"innerreview1\" style=\"overflow-x: auto\">\n        <div *ngFor=\"let review of arrimgreview;let i = index\" style=\"position: relative;\">\n      \n          <img class=\"img2\" *ngIf=\"review && review.imageUrl\"\n            src={{review.imageUrl}} />\n            <div *ngIf=\"i>1\"  class=\"cls-divback\"></div>\n              <div *ngIf=\"i>1\" (click)=\"seemoreimgrv()\" class=\"text-seemore\">\n                Xem thêm {{countimgrv}} hình\n              </div>\n              \n        </div>\n      </div>\n      <div class=\"div-recent-review\">\n        <label class=\"text-recent-review\">\n          Đánh giá gần đây\n        </label>\n      </div>\n      <div [ngClass]=\" idx ==0 ? 'div-hotelreview mt16' : 'div-hotelreview mt25'\"  *ngFor=\"let msg of arrHotelReviews; let idx = index\">\n        <div *ngIf=\"msg.ReviewPoint>9 && msg.ReviewPoint<=10 && numHotelReviews >0\" class=\"pos-relative\">\n          <div class=\"div-review\">\n            <ion-badge class=\"cls-ionbadgerw\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n            <div class=\"cls-ml8\">Tuyệt vời\n            </div>\n          </div>\n          <div *ngIf=\"msg.ReviewPoint>8 && msg.ReviewPoint<=9 && numHotelReviews >0\">\n            <div class=\"div-review\">\n              <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n              <div class=\"cls-ml8\">Rất tốt\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"msg.ReviewPoint>7 && msg.ReviewPoint<=8 && numHotelReviews >0\">\n            <div class=\"div-review\">\n              <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n              <div class=\"cls-ml8\">Khá tốt\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"msg.ReviewPoint>5 && msg.ReviewPoint<=7 && numHotelReviews >0\">\n            <div class=\"div-review\">\n              <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n              <div class=\"cls-ml8\">Tạm được\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"msg.ReviewPoint<=5 && numHotelReviews >0\">\n            <div class=\"div-review\">\n              <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.ReviewPoint}}</ion-badge>\n              <div class=\"cls-ml8\">Không tốt\n              </div>\n            </div>\n          </div>\n            <div class=\"cls-textreview\">\n            <label  text-wrap>\n              {{msg.BestFeature}}\n            </label>\n            </div>\n            <div *ngIf=\"msg.ReviewImages.length>0\" class=\"innerreview\" style=\"overflow-x: auto\">\n              <div *ngFor=\"let review of msg.ReviewImages;let i = index\" style=\"position: relative;\">\n                <img (click)=\"imgreview(msg.ReviewImages,i,msg.CustomerName,msg.DateStayed)\" class=\"img1\"\n                  src={{review.ImageUrl}} />\n              </div>\n       \n          </div>\n          <div class=\"date-review\">\n            <div><label class=\"text-date-reviews\" text-wrap>{{msg.DateStayed}}</label></div>\n            <div><label class=\"text-date-reviews\" text-wrap>{{msg.CustomerName}}</label></div>\n             \n            </div>\n          </div>\n        \n      </div>\n      \n      <!-- <hr *ngIf=\"numHotelReviews>3\" style=\"margin-top: 0px; margin-left: 16px;\"> -->\n    </div>\n    <div *ngIf=\"numHotelReviews>3\" align=\"center\" class=\"div-seedetail\">\n      <button ion-button clear class=\"text-seedetails\" (click)=\"btnseemore()\">Xem {{numHotelReviews}} đánh giá <img src=\"./assets/imgs/vector.svg\"></button>\n    </div>\n    <div class=\"div-split\"></div>\n\n    <div *ngIf=\"HotelRelated && HotelRelated.length >0\" style=\"padding: 16px 16px 0px 16px;\">\n      <label style=\"font-weight: bold;font-size: 18px\">\n        Khách sạn tương tự\n      </label>\n    </div>\n    <div>\n      <div>\n        <div style=\"overflow: auto;height: auto;\" class=\"div-hotel-related\">\n          <div *ngFor=\"let msg of HotelRelated; let i = index\">\n            <div class=\"row-item-hotelrelate\">\n              <!-- left image region-->\n              <div class=\"col-img-hotelrelate\">\n                  <img  class=\"img-radius\" src={{msg.Avatar}} style=\"position:relative\" (click)=\"itemHotelRelated(msg.Id)\">\n                 \n                  <div *ngIf=\"msg.PromotionDescriptionSubstring\" class=\"hotel-related-img transbox_0\">\n                      {{msg.PromotionDescriptionSubstring}}\n                    </div>\n              </div>\n              <!-- right content region -->\n              <div class=\"col-description-hotelrelate\">\n                  <div  class=\"fix-height-104\">\n                      <div (click)=\"itemHotelRelated(msg.Id)\" >\n                      <h2 class=\"text-name\" >{{msg.Name}}\n                      </h2>\n                      <p>\n                          <img *ngIf=\"msg.Rating!=0\" src={{msg.Rating}}>\n                      </p>\n                      <p *ngIf=\"msg.SubLocation\" class=\"text\">\n                        <img style=\"height:10px\" src=\"./assets/ic_hoteldetail/group.svg\">\n                        <label style=\"color: #4f4f4f;margin-left: 5px\"> {{msg.SubLocation}}\n                        </label>\n                      </p>\n                      <div *ngIf=\"msg.AvgPoint>0\">\n                        <ion-row *ngIf=\"msg.AvgPoint>9 && msg.AvgPoint<=10\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Tuyệt vời\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>8 && msg.AvgPoint<=9\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Rất tốt\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>7 && msg.AvgPoint<=8\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Khá tốt\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint>5 && msg.AvgPoint<=7\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Tạm được\n                          </p>\n                        </ion-row>\n                        <ion-row *ngIf=\"msg.AvgPoint<=5\" class=\"m-top-5\">\n                          <ion-badge class=\"cls-badge\" ion-badge-border-radius>{{msg.AvgPoint}}</ion-badge>\n                          <p class=\"label-badge\">Không tốt\n                          </p>\n                        </ion-row>\n                    </div>\n                  </div>\n                    <div class=\"m-top-10\">\n                      <div *ngFor=\"let itemstyle of msg.StyleTag; let idx = index\">\n                          <div *ngIf=\"idx < 2\" class=\"sp-item-style\">{{itemstyle.Name}}</div>\n                      </div>\n                      \n                    </div>\n                    <!-- last row -->\n                    <div class=\"last-row\">\n                        <div *ngIf=\"loginuser\" >\n                          <div *ngIf=\"msg.DealType\"   [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                              <div style=\"font-weight: bold\">\n                                <div *ngIf=\"msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype\">\n                                  <img src=\"./assets/ic_combo.svg\">\n                                  <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                </div>\n                                <div *ngIf=\"!msg.DealPrice\" class=\"text-combo\"  text-left class=\"p-top-dealtype-6\">\n                                    <img src=\"./assets/ic_combo.svg\">\n                                    <label class=\"cls-lineheight\">{{msg.DealType}}</label>\n                                  </div>\n                                <div  *ngIf=\"msg.DealPrice\" text-right class=\" price\">\n                                  <label *ngIf=\"msg.DealPrice!=0\" class=\"label-dealprice\">{{ msg.DealPrice }} đ</label>\n                                </div>\n                                <div  *ngIf=\"!msg.DealPrice\" text-right class=\"price\" style=\"top:4px\">\n                                  <ion-icon class=\"ico-gift\" name=\"gift\"></ion-icon>\n                                  <label *ngIf=\"!msg.DealPrice\" class=\"label-nondealprice\">Giá ưu đãi!</label>\n                                </div>\n                              </div>\n                            </div>\n                            <div *ngIf=\"!msg.DealType\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\">\n                              <div text-right *ngIf=\"msg.MinPriceOTAStr && msg.MinPriceTAStr && msg.MinPriceOTAStr!=msg.MinPriceTAStr && msg.MinPriceTAStr!=0 && msg.MinPriceOTAStr<msg.MinPriceTAStr && loginuser\" class=\"label-minpriceTA\">{{msg.MinPriceTAStr}} đ</div>\n                              <div >\n                                <div col-7 text-left class=\"p-top-minprice\">\n                                  <label >{{msg.RoomNameSubString}}</label>\n                                </div>\n                                <div col-5 text-right class=\"p-top-10 price\">\n                                  <div>\n                                      <label *ngIf=\"msg.MinPriceOTAStr\" class=\"label-minprice\">{{msg.MinPriceOTAStr}} đ</label>\n                                      <label *ngIf=\"!msg.MinPriceOTAStr\" class=\"label-minprice\">Hết phòng</label>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                            <div *ngIf=\"!loginuser\"  [ngClass]=\"msg.AvgPoint==0? 'p-top-18' : ''\" (click)=\"goToLogin()\">\n                                <div *ngIf=\"msg.DealType\">\n                                    <div>\n                                        <div>\n                                            <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                        </div>\n                                      </div>\n                                </div>\n                              <div *ngIf=\"!msg.DealType\">\n                                <div>\n                                    <span class=\"label-price-login t-bold\">Giá ưu đãi!</span><span class=\"label-price-login text-login\"> Đăng nhập để xem</span>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      \n                    </div>\n              </div>\n            </div>\n            <p class=\"h-line\"></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    \n  </div>\n  <div *ngIf=\"showpopup==false\">\n    <div style=\"margin-left: -15px\">\n      <ion-list>\n        <ion-item>\n          <ion-row style=\"width: 100%\">\n            <ion-col size=\"8\" text-left>\n              <p style=\"color: #26bed6;padding: 5px\">\n                <label style=\"font-weight: bold;padding-left: 4px;\">{{adults1}}</label>\n                <label style=\"color: #000000;padding-left: 4px;\">người lớn</label>\n                <p>\n            </ion-col>\n            <ion-col size=\"2\" text-center>\n              <div align=\"left\">\n                <img *ngIf=\"ischeckadults==true\" (click)=\"minusadults()\" src=\"./assets/ic_facility/ic_minus.png\">\n                <img *ngIf=\"ischeckadults==false\" (click)=\"minusadults()\"\n                  src=\"./assets/ic_facility/ic_minus_disable.png\">\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" text-right>\n              <img (click)=\"plusadults()\" src=\"./assets/ic_facility/ic_add.png\">\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row style=\"width:100%\">\n            <ion-col size=\"8\" text-left>\n              <p style=\"color: #26bed6;padding: 5px 5px\">\n                <label style=\"font-weight: bold;padding-left: 4px;\">{{child1}}</label>\n                <label style=\"color: #000000;padding-left: 4px;\">trẻ em</label>\n                <p>\n            </ion-col>\n            <ion-col size=\"2\" text-center>\n              <div align=\"left\">\n                <img *ngIf=\"ischeckchild==true\" (click)=\"minuschild()\" src=\"./assets/ic_facility/ic_minus.png\">\n                <img *ngIf=\"ischeckchild==false\" (click)=\"minuschild()\" src=\"./assets/ic_facility/ic_minus_disable.png\">\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" text-right>\n              <img (click)=\"pluschild()\" src=\"./assets/ic_facility/ic_add.png\">\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item>\n          <ion-row style=\"width:100%\">\n            <ion-col size=\"8\" text-left>\n              <p style=\"color: #26bed6;padding: 5px 5px\">\n                <label style=\"font-weight: bold;padding-left: 4px;\">{{room1}}</label>\n                <label style=\"color: #000000;padding-left: 4px;\">phòng</label>\n                <p>\n            </ion-col>\n            <ion-col size=\"2\" text-center>\n              <div align=\"left\">\n                <img *ngIf=\"ischeckroom==true\" (click)=\"minusroom()\" src=\"./assets/ic_facility/ic_minus.png\">\n                <img *ngIf=\"ischeckroom==false\" (click)=\"minusroom()\" src=\"./assets/ic_facility/ic_minus_disable.png\">\n              </div>\n            </ion-col>\n            <ion-col size=\"2\" text-right>\n              <img (click)=\"plusroom()\" src=\"./assets/ic_facility/ic_add.png\">\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div style=\"margin-left: 16px\">\n      <label style=\"font-size: 14px;font-weight: bold\">\n        Tuổi trẻ em\n      </label>\n      <ion-list *ngFor=\"let msg of arrchild2\">\n        <ion-item style=\"margin-left: -15px\">\n          <ion-label>{{msg.text}}</ion-label>\n          <ion-select style=\"color: #26bed6\" [(ngModel)]=\"msg.numage\" interface=\"action-sheet\">\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"<1\"><1</ion-select-option> \n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"1\">1</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"2\">2</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"3\">3</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"4\">4</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"5\">5</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"6\">6</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"7\">7</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"8\">8</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"9\">9</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"10\">10</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"11\">11</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"12\">12</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"13\">13</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"14\">14</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"15\">15</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"16\">16</ion-select-option>\n            <ion-select-option (ionSelect)=\"selectclick($event,msg.text)\" value=\"17\">17</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-content *ngIf=\"ischeck==false\">\n  <div>\n      <div class=\"div-sk-image\">\n          <ion-skeleton-text  animated style=\"width:100%;height:197px\"></ion-skeleton-text>\n      </div>\n      <div padding >\n          <div class=\"div-sk-text-title\">\n              <ion-skeleton-text  animated style=\"width:100%;margin: 0;height: 16px;\"></ion-skeleton-text>\n              <ion-skeleton-text  animated style=\"width:75%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n              <ion-skeleton-text  animated style=\"width:50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n          </div>\n          <div class=\"div-sk-detail\" *ngFor=\"let i of itemsSk\">\n              <ion-row class=\"row-item-hoteldetail-sk\">\n                  <ion-col size=\"4\" class=\"col-img-hoteldetail-sk\" >\n                      <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px;margin:0\"></ion-skeleton-text>\n                  </ion-col>\n                  <ion-col size=\"8\" class=\"col-description-hoteldetail-sk\" style=\"line-height: 16px;padding-top: 0\">\n                      <ion-skeleton-text animated style=\"width: 50%;margin: 0;height: 16px;\"></ion-skeleton-text>\n                      <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                      <ion-skeleton-text animated style=\"width: 75%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n                      <ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                  </ion-col>\n              </ion-row>\n              <ion-row class=\"row-item-description-sk\">\n                  <ion-skeleton-text animated style=\"width: 104px;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width: 83%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width: 67%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"8.5\" style=\"padding: 0\"></ion-col>\n                <ion-col size=\"3.5\" style=\"padding: 0\"><ion-skeleton-text animated style=\"margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text></ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col size=\"6.3\" style=\"padding: 0\"></ion-col>\n                  <ion-col size=\"5.7\" style=\"padding: 0\"><ion-skeleton-text animated style=\"margin: 0;margin-top:8px;height: 16px;\"></ion-skeleton-text></ion-col>\n                </ion-row>\n              <ion-row class=\"row-item-button-sk\">\n                  <ion-skeleton-text animated style=\"width: 100%;margin: 0;height: 48px;border-radius: 6px;margin-top:16px\"></ion-skeleton-text>\n              </ion-row>\n          </div>\n      </div>\n      \n    </div>\n</ion-content>\n\n<ion-footer>\n  <div *ngIf=\"isShown&&showpopup==true\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"scrollToTop()\" ion-button round outline class=\"button button2\">Book a room</button>\n  </div>\n  <div *ngIf=\"showpopup==false\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"done()\" ion-button round outline class=\"button button2\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/hoteldetail/hoteldetail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/hoteldetail/hoteldetail.module.ts ***!
  \***************************************************/
/*! exports provided: HotelDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailPageModule", function() { return HotelDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hoteldetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hoteldetail */ "./src/app/hoteldetail/hoteldetail.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");








let HotelDetailPageModule = class HotelDetailPageModule {
};
HotelDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _hoteldetail__WEBPACK_IMPORTED_MODULE_6__["HotelDetailPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_7__["IonicImageLoader"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _hoteldetail__WEBPACK_IMPORTED_MODULE_6__["HotelDetailPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HotelDetailPageModule);



/***/ }),

/***/ "./src/app/hoteldetail/hoteldetail.scss":
/*!**********************************************!*\
  !*** ./src/app/hoteldetail/hoteldetail.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-hoteldetail {\n  margin-top: calc(0px - env(safe-area-inset-top));\n}\n\n.innerreview {\n  height: 100%;\n  margin-top: 3px;\n  margin-left: -5px;\n}\n\n.innerreview div {\n  display: table-cell;\n}\n\n.innerreview1 {\n  height: 100%;\n  margin-top: 16px;\n  margin-left: -8px;\n}\n\n.innerreview1 div {\n  display: table-cell;\n}\n\nion-header.cls-header {\n  padding-top: 0;\n}\n\nion-header.cls-header .div-hotelname {\n  align-self: center;\n  max-width: 254px;\n  margin: 0 24px;\n}\n\nion-header.cls-header .text-hotelname {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.img1 {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  width: 104px;\n  height: 104px;\n  margin-left: 5px;\n  border-radius: 5px;\n}\n\n.img2 {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 104px;\n  height: 104px;\n  margin-left: 8px;\n  border-radius: 4px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.text-title-header {\n  text-align: center;\n  font-weight: bold;\n  font-size: 18px;\n  align-self: center;\n  margin-top: 6px;\n  margin-left: 36px;\n}\n\n.button-header {\n  width: 48px;\n  text-align: right;\n  height: 48px;\n  align-self: center;\n  align-items: center;\n  font-size: 1em;\n  margin-top: 10px;\n}\n\n.text-name {\n  font-weight: 600;\n  font-size: 18px;\n  margin: 0;\n  padding: 18px 6px 0px 0px;\n  white-space: initial;\n}\n\n.text-name .text-green {\n  color: #26bed6;\n}\n\n#map_canvas {\n  height: 150px;\n  width: 92%;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  width: 90%;\n  font-size: 12px;\n}\n\n.button5 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  width: 100%;\n  font-size: 12px;\n  margin-left: -8px;\n}\n\n.div-seedetail {\n  margin: 16px 0;\n}\n\n.text-seedetails {\n  color: #26bed6;\n  text-transform: none;\n  font-size: 14px;\n  background: no-repeat;\n  letter-spacing: -0.4px;\n}\n\n.button2 {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  width: 90%;\n  font-size: 18px;\n  margin: 10px 0px !important;\n}\n\n.button6 {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  width: 90%;\n  font-size: 12px;\n  margin-left: -8px;\n  margin-bottom: 10px;\n}\n\n.item-md p {\n  color: #fff;\n}\n\n.image-card {\n  display: initial !important;\n  width: 6%;\n}\n\n.image-card1 {\n  display: initial !important;\n  width: 3%;\n}\n\n.div-border {\n  background-color: #26bed6;\n  height: 3px;\n  margin-left: -16px;\n  width: 200%;\n}\n\nhr {\n  margin-left: 6px;\n  margin-right: 16px;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 120px;\n  height: 120px;\n}\n\n.list-md > .item-block:last-child .item-inner {\n  border-bottom: 1px solid #dedede;\n}\n\n.button.click {\n  background: #26bed6;\n  border-color: #26bed6;\n  color: #ffffff;\n  width: 156px;\n  height: 44px;\n}\n\n.button.none {\n  border-color: #26bed6;\n  color: #26bed6;\n  width: 156px;\n  height: 44px;\n}\n\n.button7 {\n  border-color: #ff9500;\n  background-color: #ff9500;\n  color: #ffffff;\n  width: 100%;\n  height: 44px;\n  font-weight: bold;\n}\n\n.label-md, .label-ios {\n  margin: 8px 0px 8px 0;\n}\n\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n\n.card-background-page {\n  width: 100%;\n  height: 202px;\n  overflow: hidden;\n}\n\n.card-background-page ion-slide {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 3%;\n  left: 10px;\n  color: #ffffff;\n  z-index: 10;\n  width: 48px;\n  height: 48px;\n  font-size: 2.7em;\n}\n\n.card-background-page .div-go-back {\n  z-index: 100;\n  position: absolute;\n  top: calc(env(safe-area-inset-top) - 0px);\n  left: 14px;\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n}\n\n.card-background-page .img-absolute {\n  position: absolute;\n}\n\n.card-background-page .img-back {\n  height: 48px;\n  padding: 8px;\n  margin-left: -8px;\n  z-index: 11;\n  position: absolute;\n}\n\n.card-background-page .div-img-background {\n  background-color: #222222;\n  opacity: 0.5;\n  position: absolute;\n  border-radius: 24px;\n}\n\n.card-background-page .div-goback-background {\n  margin-left: -8px;\n  height: 28px;\n  width: 28px;\n  top: 10px;\n  left: 10px;\n}\n\n.card-background-page .img-heart {\n  position: absolute;\n  top: calc(env(safe-area-inset-top) - 14px);\n  z-index: 11;\n  font-size: 20px;\n  width: 48px;\n  height: 48px;\n  margin-top: calc(env(safe-area-inset-top) -14px);\n  right: 48px;\n  text-align: center;\n}\n\n.card-background-page .img-heart .image-heart {\n  padding-top: 15px;\n  width: 18px;\n  position: absolute;\n  left: 9px;\n}\n\n.card-background-page .img-share {\n  position: absolute;\n  top: calc(env(safe-area-inset-top) - 14px);\n  color: #ffffff;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  margin-top: calc(env(safe-area-inset-top) -14px);\n  right: 0px;\n  text-align: center;\n}\n\n.card-background-page .img-share .image-share {\n  padding-top: 13px;\n  width: 18px;\n  z-index: 10;\n  position: absolute;\n  right: 17px;\n}\n\n.card-background-page .div-share-background {\n  height: 28px;\n  width: 28px;\n  top: 25px;\n  right: 25px;\n}\n\n.card-background-page .div-heart-background {\n  height: 28px;\n  width: 28px;\n  top: 25px;\n  right: 16px;\n}\n\n.card-background-page .div-like-count {\n  position: absolute;\n  top: 15px;\n  z-index: 10;\n  font-size: 16px;\n  width: 15px;\n  right: 40px;\n  text-align: right;\n  color: #fff;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n\n.card-background-page .div-img-caption-grad {\n  position: absolute;\n  color: #ffffff;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 18px;\n  opacity: 0.5;\n  height: 26px;\n  width: 70%;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 2px;\n  margin-left: 12%;\n  padding: 2px 0px;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.card-background-page .div-img-caption {\n  position: absolute;\n  text-align: center;\n  bottom: 16px;\n  height: 24px;\n  color: #ffffff;\n  width: 70%;\n  font-size: 14px;\n  padding: 0 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  z-index: 11;\n  margin-left: 12%;\n}\n\n.badgescss {\n  position: absolute;\n  color: #ffffff;\n  z-index: 10;\n  bottom: 9px;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  font-weight: 100;\n  display: block;\n  padding: 4px 8px;\n  font-size: 14px;\n  border-radius: 10px;\n  right: 16px;\n}\n\n.img-heart {\n  position: absolute;\n  top: env(safe-area-inset-top);\n  left: 87%;\n  z-index: 10;\n  font-size: 20px;\n  width: 48px;\n  height: 48px;\n}\n\n.img-share {\n  position: absolute;\n  top: env(safe-area-inset-top);\n  left: 76%;\n  color: #ffffff;\n  z-index: 10;\n  width: 48px;\n  height: 48px;\n}\n\n.text-pax {\n  padding: 6px 0px;\n}\n\n#grad1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 30%;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n  /* Standard syntax (must be last) */\n  z-index: 10;\n}\n\ndiv.solid {\n  border-style: solid;\n  border-color: #26bed6;\n  border-width: 2px;\n}\n\n.img-radius {\n  border-radius: 5px;\n}\n\n.div-combo {\n  background-color: #feedc7;\n  color: #333333;\n}\n\n.div-combo .margin-0 {\n  margin: 0;\n}\n\n.div-combo .col-title-combo {\n  padding: 0;\n  margin-top: 8px;\n  margin-left: 16px;\n}\n\n.div-combo .col-title-combo .title-combo-price {\n  color: #ff9500;\n}\n\n.div-combo .padding-lr-16 {\n  padding: 0 16px;\n}\n\n.div-combo .padding-lr-16 .div-combo-title {\n  padding: 15px 0px 5px 0px;\n}\n\n.div-combo .item-md {\n  background-color: #003c71;\n  color: #ffffff;\n}\n\n.div-combo .item-ios {\n  background-color: #003c71;\n  color: #ffffff;\n}\n\n.div-combo .div-insurrance-info {\n  background-color: #FEF2D8;\n  border-radius: 4px;\n  height: 89px;\n  position: relative;\n  margin-top: 10px;\n}\n\n.div-combo .div-logo-cathay {\n  padding-top: 17px;\n}\n\n.div-combo .div-info-cathay {\n  position: absolute;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #333333;\n  padding-right: 8px;\n  top: 8px;\n  left: 96px;\n}\n\n.div-combo .logo-insurance {\n  width: 56px;\n  height: 34px;\n  margin-left: 32px;\n}\n\n.div-combo .div-cathay-fee {\n  position: absolute;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: -0.4px;\n  color: #333333;\n  bottom: 8px;\n  right: 8px;\n}\n\n.div-combo .check-insurrance-fee {\n  margin-left: 8px;\n  margin-top: 8px;\n  position: absolute;\n}\n\n.div-combo .margin-16 {\n  margin: 16px 0;\n}\n\n.cls-label {\n  color: #4f4f4f;\n}\n\n.cls-text {\n  font-size: 16px;\n  color: #26bed6;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 4px;\n}\n\n.cls-border-right {\n  border-right: solid 1px #cdcdcd;\n  width: 97%;\n}\n\n.cls-border-guest {\n  border-right: solid 1px #cdcdcd;\n  width: 115%;\n}\n\n.div-check-in {\n  padding: 0px 11px;\n  border-top: solid 1px #cdcdcd;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.hotel-description-1 {\n  padding: 8px 16px;\n  background-color: #003c71;\n  color: #ffffff;\n}\n\n.text-hotel-label {\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n}\n\n.text-white-space {\n  white-space: inherit;\n  padding-top: 8px;\n}\n\n.p-top-6 {\n  padding-top: 6px;\n}\n\n.p-top-4 {\n  padding-top: 4px;\n}\n\n.p-left-22 {\n  padding-top: 4px;\n  padding-left: 22px;\n  height: 21px;\n}\n\n.border-bottom {\n  border-top: solid 0.5px;\n  opacity: 0.4;\n  padding: 0px;\n  margin-top: 10px;\n}\n\n.text-hotel-title {\n  font-weight: bold;\n  padding: 8px 0px 2px 0px;\n}\n\n.text-hotel-description {\n  padding-left: 8px;\n  font-weight: lighter;\n  white-space: inherit;\n  text-align: left;\n  width: 90%;\n}\n\n.text-hotel-price {\n  padding: 16px 0px;\n  font-size: 24px;\n  font-weight: bold;\n  text-align: right;\n  margin: 0px;\n}\n\n.icon-combo {\n  width: 22px;\n  height: 22px;\n  margin-left: 16px;\n  top: 11px;\n  position: absolute;\n}\n\n.icon-detail-fix {\n  width: 13px;\n  height: 23px;\n}\n\n.btn-book {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-weight: 500 !important;\n  font-size: 17px !important;\n  font-weight: normal;\n  margin: 8px 0px 16px 0px;\n}\n\n.btn-book-outline {\n  border: solid 1px #f59233;\n  color: #ffffff;\n  background: #f59233;\n  width: 104px;\n  height: 32px !important;\n  font-size: 15px !important;\n  margin: 0;\n  padding: 0;\n  letter-spacing: -0.4px;\n}\n\n.hotel-detail-content {\n  background-color: #f2f2f2;\n  padding: 16px 8px 2px 8px;\n}\n\n.hotel-detail-room-class {\n  background-color: #ffffff;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.card-background-detailpage {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-detailpage .ion-thumbnail {\n  line-height: 0.5 !important;\n  height: 104px;\n}\n\n.card-background-detailpage .text-room-class-description {\n  white-space: normal;\n  -webkit-columns: #222222;\n     -moz-columns: #222222;\n          columns: #222222;\n  font-size: 14px;\n}\n\n.card-background-detailpage .hidden-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.card-background-detailpage .col-width-90-percent {\n  width: 90%;\n}\n\n.card-background-detailpage .item-md {\n  padding: 0;\n}\n\n.card-background-detailpage .label-md, .card-background-detailpage .label-ios {\n  margin: 0;\n  line-height: 16px;\n}\n\n.card-background-detailpage .no-padding {\n  padding: 0;\n}\n\n.card-background-detailpage .room-class-icon {\n  max-width: 15px;\n}\n\n.card-background-detailpage .room-class-name {\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 18px;\n  white-space: normal;\n  letter-spacing: -0.61px;\n  -webkit-line-clamp: 2;\n  height: auto;\n  display: -webkit-box;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-background-detailpage .item-inner {\n  border-bottom: none !important;\n}\n\n.card-background-detailpage .p-left-4 {\n  padding: 4px 0px 0px 4px;\n}\n\n.card-background-detailpage .item-md ion-thumbnail[item-start] {\n  margin: 2px 10px 0px 6px;\n}\n\n.card-background-detailpage .text-see-detail {\n  color: #26bed6;\n  font-size: 14px;\n}\n\n.card-background-detailpage h2 {\n  margin: 0;\n  text-align: left;\n}\n\n.card-background-detailpage .text-left {\n  text-align: left;\n}\n\n.card-background-detailpage .img-room-detail {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 110px;\n  height: 110px;\n}\n\np {\n  margin: 0;\n}\n\n.penal-detail {\n  align-items: center;\n  padding-top: 4px;\n  margin-bottom: 15px;\n}\n\n.penal-detail:last-child {\n  padding-bottom: 12px;\n}\n\n.div-mealtype {\n  text-align: left;\n}\n\n.icon-detail-green-fix {\n  width: 12px;\n  height: 16px;\n  color: #219653;\n}\n\n.icon-detail-check-green-fix {\n  font-size: 15px;\n  width: 12px;\n  height: 14px;\n  color: #219653;\n}\n\n.cls-green {\n  color: #219653;\n  font-size: 12px;\n  font-weight: normal;\n  opacity: 0.85;\n}\n\n.grid {\n  padding: 2px !important;\n}\n\n.p-left-8 {\n  padding-left: 8px;\n  padding-top: 16px;\n}\n\n.text-room-description {\n  color: #828282;\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n\n.text-room-description-p-top-32 {\n  color: #828282;\n  padding: 32px 8px 0px 0px;\n  text-align: right;\n  font-size: 12px;\n}\n\n.text-room-price {\n  color: #26bed6;\n  margin-left: -5px;\n  font-weight: bold;\n}\n\n.text-room-price-no-bottom {\n  color: #26bed6;\n  margin-left: -5px;\n  font-weight: bold;\n}\n\n.text-combo-city {\n  padding-bottom: 7px;\n  font-weight: bold;\n  font-size: 14px;\n  color: #333333;\n  letter-spacing: -0.4px;\n}\n\n.text-combo-price {\n  font-weight: bold;\n  font-size: 14px;\n  font-family: Helvetica;\n  align-self: center;\n}\n\n.text-combo-min-price {\n  font-size: 18px;\n  font-weight: bold;\n  color: #ff9500;\n  padding-right: 0;\n  font-family: Helvetica;\n  align-self: center;\n}\n\n.text-combo-room-price {\n  font-size: 18px;\n  font-weight: bold;\n  color: #ff9500;\n  padding: 5px 0px;\n  padding-right: 8px;\n}\n\n.text-d {\n  font-size: 14px;\n  position: absolute;\n  padding-top: 1px;\n  padding-left: 2px;\n}\n\n.text-room-price-ota {\n  color: #828282;\n  font-size: 12px;\n  text-decoration: line-through;\n  margin-left: 5px;\n}\n\n.text-register {\n  color: #26bed6;\n  padding: 16px 8px 12px 0px;\n  text-align: right;\n}\n\n.icon-text-register {\n  padding: 2px 6px 0px 0px;\n  vertical-align: sub;\n}\n\n.text-promotion-note {\n  font-size: 12px;\n  color: #E52822;\n}\n\n.icon-text-promotion {\n  width: 14px;\n  padding-right: 4px;\n}\n\n.div-promotion-note {\n  width: 100%;\n  border: none !important;\n}\n\n.div-split {\n  background-color: #f2f2f2;\n  height: 6px;\n}\n\n.div-split-group {\n  background-color: #f2f2f2;\n  height: 14px;\n}\n\n.button-md {\n  margin: 0;\n}\n\n.sub-price {\n  font-size: 11px;\n  position: absolute;\n  top: 0px;\n}\n\n.div-combo-list {\n  padding: 0px;\n  padding-top: 14px;\n}\n\n.div-combo-list .text-combo-price .sub-price {\n  font-size: 11px;\n  position: absolute;\n  top: 4px;\n}\n\n.div-combo-list .text-combo-min-price .sub-price {\n  font-size: 12px;\n  position: absolute;\n  top: 4px;\n}\n\n.div-combo-list .placeline {\n  content: \"\";\n  position: absolute;\n  width: 1px;\n  top: -22px;\n  border-left: solid 1px #ec971f;\n  left: 6px;\n}\n\n.div-combo-list .placepoint-19 {\n  position: absolute;\n  top: -19px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  left: 4px;\n  background: #ec971f;\n}\n\n.div-combo-list .placepoint-16 {\n  position: absolute;\n  top: -15px;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  left: 4px;\n  background: #ec971f;\n}\n\n.div-combo-list .row-line {\n  width: 100%;\n  height: auto;\n}\n\n.div-combo-list .h-14 {\n  height: 14px;\n}\n\n.div-combo-list .h-34 {\n  height: 34px;\n}\n\n.item-room-first-child {\n  padding: 3px;\n}\n\n.card-background-detailpage ion-item-group:first-child .item-room-first-child {\n  padding: 3px;\n}\n\n.cls-firstmealtype-border {\n  border: solid 2px #26ced6;\n  padding-top: 22px;\n}\n\n.p-bottom-4 {\n  padding: 0px 8px 4px 0px !important;\n}\n\n.img-radius {\n  border-radius: 5px;\n  height: 104px;\n}\n\n.list-md {\n  margin: 0;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 16px;\n}\n\n.list-item-end.list.list-md {\n  margin-right: 16px;\n}\n\n.list-item-end.list.list-md .item-inner {\n  padding-right: 0px !important;\n}\n\n.relate-hotel-description .label-md, .label-ios {\n  padding: 0;\n}\n\n.card-background-page {\n  position: relative;\n  text-align: center;\n  /*css cho ios*/\n  /*css cho ios*/\n  /*css cho android*/\n  /*css cho android*/\n}\n\n.card-background-page .ion-thumbnail {\n  line-height: 0.5 !important;\n}\n\n.card-background-page .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  padding-left: 8px;\n  padding-top: 3px;\n}\n\n.card-background-page .item-block {\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  width: auto;\n  padding: 5px 0;\n}\n\n.card-background-page .item-ios .transbox {\n  display: block;\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 16px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 21px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 16px 3px 5px;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .list-md .item-block .item-inner {\n  border-bottom: 0px !important;\n}\n\n.card-background-page .item-ios {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-ios ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-ios.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .item-md .transbox {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 21px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox1 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 12px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md .transbox2 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 13px;\n  padding: 4px 12px 3px 5px;\n}\n\n.card-background-page .item-md.item-block .item-inner {\n  border-bottom: none;\n}\n\n.card-background-page .item-md {\n  border-radius: 0;\n  position: relative;\n  font-size: 1.7rem;\n  color: #222222;\n  background-color: #fff;\n  transition: background-color 200ms linear;\n  margin: 0 11px;\n  border-bottom: 0.5px solid #bdbdbd;\n}\n\n.card-background-page .item-md ion-thumbnail[item-start] {\n  margin: 8px 8px 8px 0;\n}\n\n.card-background-page .item-md .item-inner {\n  padding-right: 0px;\n}\n\n.card-background-page .label-md, .card-background-page .label-ios {\n  margin: 11px 0px 11px 0;\n}\n\n.card-background-page .label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.card-background-page .label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 16px;\n}\n\n.card-background-page .label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n}\n\n.card-background-page .p-top-minprice {\n  top: 12px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.card-background-page .p-top-8 {\n  top: 8px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.card-background-page .p-notop {\n  top: -5px;\n}\n\n.card-background-page .p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.card-background-page .p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.card-background-page .price.col {\n  padding: 5px 0px 5px 5px;\n}\n\n.card-background-page .img-radius {\n  border-radius: 5px;\n  height: 104px;\n  margin-left: 11px;\n}\n\n.card-background-page .hotel-related-description {\n  text-align: left;\n  padding-left: 7px;\n  padding-right: 16px;\n}\n\n.card-background-page .hotel-related-img {\n  position: relative;\n  height: 104px;\n  width: 110px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.card-background-page .hotel-related-img .transbox_0 {\n  position: absolute;\n  width: 110px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n  margin-left: 11px;\n}\n\n.card-background-page .text-name {\n  font-weight: bold;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.card-background-page h2 {\n  margin: 0;\n}\n\n.card-background-page .h-line {\n  border-bottom: solid 1px rgba(0, 0, 0, 0.08);\n  margin: 16px 16px;\n}\n\n.card-background-page .p-top-16 {\n  padding-top: 16px;\n}\n\n.card-background-page .p-bottom-0 {\n  padding-bottom: 0 !important;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 110px;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\nimg {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n}\n\n.penalty-active {\n  padding: 10px 8px 0px 0px;\n  color: #ffffff;\n}\n\n.penalty-active-description {\n  font-size: 14px;\n  font-weight: normal;\n  padding: 16px;\n  background-color: #275A87;\n  white-space: normal;\n  border-radius: 6px;\n}\n\n.vcolor-info {\n  color: #26bed6;\n}\n\n.arrow::before {\n  content: \"\";\n  position: absolute;\n  left: calc(28% - 10px);\n  background: #275A87;\n  width: 18px;\n  height: 8px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.penalty-text {\n  font-size: 12px;\n  font-weight: normal;\n  opacity: 0.85;\n  padding-left: 8px;\n}\n\n.link-penalty {\n  padding-left: 8px;\n  text-decoration: none;\n  background-color: #ffffff;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #40A6F2;\n}\n\n.penalty-active-description.none-p-top {\n  padding-top: 0;\n}\n\n.div-empty-room {\n  text-align: center;\n}\n\n.empty-room {\n  text-align: center;\n}\n\n.label-empty-room {\n  font-size: 14px;\n  color: #bdbdbd;\n  padding: 20px 56px;\n}\n\n.btn-change-hotel, .btn-change-date {\n  border: solid 1px #f79221 !important;\n  color: #f79221;\n  background: #fff;\n  width: 100%;\n  height: 48px;\n  text-transform: none !important;\n  font-size: 17px !important;\n  font-weight: normal;\n}\n\n.btn-empty-left {\n  padding: 0px 8px 20px 16px;\n}\n\n.btn-empty-right {\n  padding: 0px 0px 20px 0px;\n  margin-right: 16px;\n}\n\n.text-decoration {\n  text-decoration: underline;\n}\n\n.flashsale-enddate-warning {\n  color: #f79221;\n  font-weight: bold;\n  text-align: center;\n}\n\n.item-ios p {\n  color: #ffffff;\n}\n\n.text-topsale {\n  color: #e52822;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n  font-weight: 300;\n  padding-left: 5px;\n}\n\n.btn-topsale {\n  color: #ffffff;\n  background-color: #e52822;\n  border-radius: 4px;\n  font-weight: bold;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n  padding: 4px 10px;\n  height: 23px;\n}\n\n.cls-row-review {\n  padding: 12px 0px 10px 0px;\n}\n\n.cls-row-viewtopsale {\n  border-bottom: solid 1px rgba(204, 204, 204, 0.4);\n  border-top: solid 1px rgba(204, 204, 204, 0.4);\n  padding: 3px 0;\n  margin-top: 8px;\n}\n\n.cls-reviewpoint {\n  padding-left: 40px;\n  top: 2px;\n  font-size: 14px;\n  width: 150px;\n  max-width: 150px;\n  position: absolute;\n}\n\n.hotel-detail-note .badge-ios {\n  border-radius: 10px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #26bde6;\n}\n\n.hotel-related-description .badge-ios {\n  border-radius: 10px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #26bde6;\n}\n\n.div-border-bottom {\n  border-bottom: solid 1px #cdcdcd;\n  margin-right: 8px;\n  opacity: 0.5;\n}\n\n.mealtype-item .div-mealtype:last-child .div-border-bottom {\n  border-bottom: none;\n}\n\n.list-ios > .item-block:last-child, .list-ios > .item-wrapper:last-child .item-block {\n  border-bottom: none !important;\n}\n\n.list-ios > .item-block:last-child .item-inner, .list-ios > .item-wrapper:last-child .item-block .item-inner {\n  border-bottom: 0;\n  border-bottom: 0.55px solid #c8c7cc;\n}\n\n.cls-combo-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: #333333;\n  letter-spacing: -0.4px;\n}\n\n.cls-combo-description {\n  color: #333333;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n}\n\n.text-departure {\n  text-align: right;\n  color: #003c71;\n  font-weight: bold;\n  letter-spacing: -0.4px;\n}\n\n.combo-departure-date {\n  padding-left: 18px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #333333;\n  font-weight: 300;\n}\n\na {\n  color: #003c71;\n}\n\n.sale-price-flight {\n  padding-top: 8px;\n}\n\n.icon-flash {\n  color: #ffffff;\n  background-color: #ec971f;\n  border-radius: 25px;\n  width: 12px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.text-flash {\n  color: #333333;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n\n.button-ios {\n  margin-top: 0px;\n}\n\n.item-ios [item-right], .item-ios [item-end] {\n  margin: 0;\n}\n\n.div-map {\n  margin: 0 16px 0px 16px;\n  margin-top: 10px;\n}\n\n.ion-md-close {\n  font-size: 2em !important;\n}\n\n.ion-ios-close {\n  font-size: 2em !important;\n}\n\n.div-go-back {\n  z-index: 100;\n  position: absolute;\n  top: env(safe-area-inset-top);\n  left: -5px;\n  color: #ffffff;\n  width: 56px;\n  height: 56px;\n}\n\n.img-arrow-float {\n  height: 56px;\n  padding: 12px;\n  margin-left: -12px;\n  margin-top: calc(env(safe-area-inset-top) - 20px);\n}\n\n.div-go-back-float {\n  z-index: 100;\n  position: absolute;\n  top: calc(env(safe-area-inset-top) +12px);\n  left: 10px;\n  color: #ffffff;\n  width: 56px;\n  margin-top: 8px;\n  height: calc(44px + env(safe-area-inset-top));\n}\n\n.div-float-arrow {\n  position: absolute;\n  z-index: 12;\n  width: 100%;\n  background-color: white;\n  color: #222222;\n  padding-left: 16px;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s, opacity 0.2s linear;\n}\n\n.float-arrow-enabled {\n  visibility: visible;\n  transition: visibility 0.2s, opacity 0.2s linear;\n  opacity: 1;\n  height: calc(36px + env(safe-area-inset-top));\n}\n\n.float-arrow-disabled {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s, opacity 0.2s linear;\n  z-index: 0;\n  height: 0px;\n}\n\n.div-statusbar-float-detail {\n  position: absolute;\n  z-index: 12;\n  width: 100%;\n  background-color: white;\n  color: #222222;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s, opacity 0.2s linear;\n}\n\n.div-statusbar-float-detail-enabled {\n  visibility: visible;\n  transition: visibility 0.2s, opacity 0.2s linear;\n  opacity: 1;\n  height: env(safe-area-inset-top);\n}\n\n.div-statusbar-float-detail-disabled {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s, opacity 0.2s linear;\n  z-index: 0;\n}\n\n.label-price-login {\n  color: #26bed6;\n  cursor: pointer;\n}\n\n@media (min-width: 287px) and (max-width: 359px) {\n  .hotel-related-description {\n    max-width: 205px;\n    left: 12px;\n  }\n\n  .p-top-10 {\n    white-space: nowrap;\n    padding-left: 0;\n  }\n\n  .p-top-8 {\n    top: 8px;\n    font-size: 14px;\n    font-weight: bold;\n    padding: 5px 0px;\n  }\n}\n\n@media (min-width: 280px) and (max-width: 300px) {\n  .text-cin, .text-cout, .text-input-room {\n    font-size: 14px !important;\n    white-space: nowrap;\n  }\n\n  .text-guest {\n    font-size: 14px !important;\n    white-space: nowrap;\n    margin-left: -5px !important;\n  }\n\n  .label-room {\n    white-space: nowrap;\n  }\n\n  .label-guest {\n    padding-left: 2px !important;\n  }\n}\n\n.list-item-end {\n  padding: 0 16px;\n  font-size: 14px;\n}\n\n.item-end {\n  font-size: 24px;\n  color: #828282;\n  right: 11px;\n  color: #828282;\n  position: absolute;\n}\n\n.border-bottom-item-end {\n  border-bottom: solid 1px #ccc !important;\n  margin: 4px 16px 8px 5px;\n}\n\n.div-row-item-end {\n  padding: 16px 0;\n}\n\n.div-row-first-item-end {\n  padding: 21px 0 16px 0;\n}\n\nion-slide {\n  justify-content: normal;\n}\n\n.hoteldetail-point {\n  padding: 0 16px;\n}\n\n:host {\n  --ion-color-primary:#26bed6;\n}\n\nion-badge {\n  width: 36px;\n  height: 20px;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  background: #a0c245;\n}\n\n.row-border-cin {\n  border-top: solid 0.5px #ccc;\n  opacity: 0.4;\n  margin: 0px 16px 8px 16px;\n  padding-bottom: 10px;\n}\n\n@media (min-width: 400px) and (max-width: 600px) {\n  .card-background-page {\n    width: 100%;\n    height: 225px;\n    overflow: hidden;\n  }\n}\n\n::ng-deep .action-sheets-basic-page .action-sheet-title.sc-ion-action-sheet-md {\n  font-size: 18px;\n  color: black;\n  font-weight: bold;\n}\n\n::ng-deep .action-sheets-basic-page .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n\n::ng-deep .action-sheets-basic-page .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n}\n\n::ng-deep .action-sheets-basic-page .action-sheet-title.sc-ion-action-sheet-ios {\n  text-align: left;\n  font-size: 18px;\n  color: #222222;\n  font-weight: bold;\n}\n\n::ng-deep .action-sheets-basic-page .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: left;\n}\n\n::ng-deep .action-sheets-basic-page .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  color: #828282;\n  height: 60px;\n  text-align: left;\n}\n\n::ng-deep .action-sheets-basic-page .action-sheet-button-inner.sc-ion-action-sheet-md {\n  justify-content: flex-start;\n  border-top: solid 1px #ccc;\n}\n\n::ng-deep .action-sheets-basic-page .action-sheet-title.sc-ion-action-sheet-md {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n::ng-deep .cls-reviewpoint {\n  padding-left: 40px;\n  top: 2px;\n  font-size: 14px;\n  width: 150px;\n  max-width: 150px;\n  position: absolute;\n}\n\n::ng-deep .img-loader img {\n  width: 110px;\n  height: 110px;\n}\n\n.cls-seemoreroomdetail {\n  text-align: center;\n  font-size: 14px;\n  color: #26bed6;\n  letter-spacing: -0.4px;\n  padding: 16px;\n}\n\n.cls-hiddenroomdetail {\n  text-align: center;\n  font-size: 14px;\n  color: #26bed6;\n  letter-spacing: -0.4px;\n  padding: 16px 16px 16px 16px;\n}\n\n.cls-fix-visible {\n  display: block;\n  position: relative;\n}\n\n.div-mealtype .cls-visible {\n  display: block;\n  -webkit-animation: showNav 500ms ease-in-out both;\n          animation: showNav 500ms ease-in-out both;\n}\n\n.cls-hidden {\n  transition: opacity 1s ease-out;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n  padding: 0;\n  -webkit-animation: hideNav 500ms ease-in-out both;\n          animation: hideNav 500ms ease-in-out both;\n}\n\n@-webkit-keyframes showNav {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes showNav {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes hideNav {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes hideNav {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.img-seemoreroom {\n  margin-left: 4px;\n  height: 9px;\n}\n\n.p-bottom-16 {\n  padding-bottom: 16px;\n}\n\n.row-item-hoteldetail-sk {\n  padding-top: 32px;\n}\n\n.col-img-hoteldetail-sk {\n  padding: 0;\n}\n\n.text-review {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.text-review-point {\n  color: #26bed6;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  padding-right: 11px;\n}\n\n.cls-label-split {\n  margin-top: 32px;\n  color: #ccc;\n  text-align: center;\n  opacity: 0.4;\n}\n\n.div-hotel-related .row-item-hotelrelate {\n  margin: 16px;\n  height: 104px;\n}\n\n.div-hotel-related .col-img-hotelrelate {\n  height: 104px;\n  position: absolute;\n}\n\n.div-hotel-related .img-radius {\n  position: relative;\n  border-radius: 5px;\n  width: 104px !important;\n  height: 104px !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.div-hotel-related .hotel-related-img.transbox_0 {\n  position: absolute;\n  width: 104px;\n  border-radius: 0px 0px 5px 5px;\n  background-color: rgba(240, 172, 46, 0.8);\n  font-size: 10px;\n  color: #ffffff;\n  white-space: normal;\n  bottom: 0;\n  padding: 4px 12px 3px 4px;\n}\n\n.div-hotel-related .col-description-hotelrelate {\n  position: relative;\n  margin-top: 13px;\n  left: 112px;\n  width: 72%;\n}\n\n.div-hotel-related .fix-height-104 {\n  height: 104px;\n}\n\n.div-hotel-related .text-name {\n  font-weight: bold;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-line-clamp: 1 !important;\n  display: -webkit-box !important;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical !important;\n  max-height: 17px;\n  text-align: left;\n  letter-spacing: -0.4px;\n  max-width: 95%;\n  padding: 0;\n}\n\n.div-hotel-related .m-top-5 {\n  margin-top: 5px;\n}\n\n.div-hotel-related .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n  line-height: 18px;\n  letter-spacing: -0.34px;\n  margin-top: 2px;\n}\n\n.div-hotel-related .sp-item-style {\n  padding: 3px 5px;\n  border: solid 0.5px #26bed6;\n  font-size: 10px;\n  color: #26bed6;\n  background: #ffffff;\n  margin-right: 8px;\n  border-radius: 2px;\n}\n\n.div-hotel-related .last-row {\n  position: absolute;\n  bottom: 0;\n  line-height: 10px;\n  width: 100%;\n  padding-right: 16px;\n}\n\n.div-hotel-related .cls-lineheight {\n  line-height: 14px;\n}\n\n.div-hotel-related .text-combo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.div-hotel-related .p-top-dealtype {\n  top: 9px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n  max-width: 56%;\n}\n\n.div-hotel-related .p-top-dealtype-6 {\n  top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n  color: #e52822;\n}\n\n.div-hotel-related .label-minprice {\n  color: #26bed6;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 18px;\n}\n\n.div-hotel-related .label-minpriceTA {\n  font-size: 12px;\n  text-decoration: line-through;\n  color: #828282;\n  position: absolute;\n  right: 5px;\n}\n\n.div-hotel-related .label-dealprice {\n  color: #e52822;\n  font-weight: bold;\n  bottom: 0;\n  right: 0;\n  font-size: 18px;\n  letter-spacing: -0.51px;\n  line-height: 18px;\n}\n\n.div-hotel-related .text-nameroom {\n  width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.div-hotel-related .p-top-minprice {\n  font-size: 12px;\n  position: absolute;\n  bottom: 0;\n}\n\n.div-hotel-related .t-bold {\n  font-weight: bold;\n}\n\n.div-hotel-related .text-login {\n  font-size: 13px;\n}\n\n.div-hotel-related .h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.div-hotel-related p {\n  margin: 0;\n  text-align: left;\n  line-height: 16px;\n}\n\n.div-hotel-related .text {\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-top: 4px;\n  letter-spacing: -0.34px;\n}\n\n.img-sharehd {\n  position: absolute;\n  top: 7%;\n  left: 0%;\n}\n\n.text-change {\n  font-size: 12px;\n  color: #26bed6;\n  text-decoration: underline;\n}\n\n.text-hr {\n  font-size: 11px;\n  color: #222222;\n}\n\n.cls-toolbar {\n  box-shadow: 0px 0px 2px 0px #bdbdbd;\n  padding-top: env(safe-area-inset-top) !important;\n}\n\n.lh-normal {\n  line-height: inherit !important;\n}\n\n.div-review {\n  display: flex;\n  margin-top: 11px;\n  line-height: 30px;\n}\n\n.text-point {\n  color: #26bed6;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.num-review {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n\n.cls-ionbadge {\n  width: 49px;\n  height: 32px;\n  border-radius: 6px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  padding: 6px 0px 6px 0px;\n  background: #a0c245;\n}\n\n.cls-ml16 {\n  margin-left: 16px;\n  margin-top: 16px;\n}\n\n.cls-ml16 .div-recent-review {\n  padding: 24px 0px 0px 0px;\n}\n\n.cls-ml16 .text-recent-review {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 20px;\n}\n\n.cls-ml6 {\n  margin-left: 6px;\n}\n\n.cls-ml8 {\n  margin-left: 8px;\n  align-self: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n\n.text-titlereview {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.cls-ionbadgerw {\n  width: 43px;\n  height: 24px;\n  border-radius: 6px;\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: -0.51px;\n  align-self: center;\n  background: #a0c245;\n}\n\n.mt25 {\n  margin-top: 25px;\n}\n\n.mt16 {\n  margin-top: 16px;\n}\n\n.div-cinout {\n  height: 68px;\n  background-color: #f2f2f2;\n  padding: 20px 8px 8px 8px;\n}\n\n.cls-gridcinout {\n  margin-top: -12px;\n  padding: 8px;\n}\n\n.text-seemore {\n  position: absolute;\n  top: 35px;\n  left: 30px;\n  width: 66px;\n  height: 32px;\n  font-family: Helvetica;\n  font-size: 12px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.52;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n\n.cls-divback {\n  position: absolute;\n  top: 0px;\n  left: 9px;\n  width: 104px;\n  height: 104px;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n}\n\n.row-cin-cout {\n  height: 52px;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n\n.text-date-reviews {\n  color: #828282;\n  font-size: 12px;\n  font-weight: 200;\n  padding-right: 16px;\n  letter-spacing: -0.34px;\n}\n\n.cls-textreview {\n  margin-top: 6px;\n  letter-spacing: -0.4px;\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: left;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  margin-right: 16px;\n}\n\n.div-hotelreview .pos-relative {\n  position: relative;\n}\n\n.div-hotelreview .date-review {\n  position: absolute;\n  top: 0;\n  right: 0;\n  line-height: 12px;\n  text-align: right;\n}\n\n.text-price {\n  line-height: 27px;\n  font-size: 26px;\n  letter-spacing: -0.92px;\n}\n\n.text-price-unit {\n  line-height: 18px;\n  font-size: 14px;\n  letter-spacing: -0.36px;\n}\n\n.cls-ion-grid {\n  margin-left: -10px;\n}\n\n.cls-ion-col {\n  align-self: flex-end;\n}\n\n.cls-textconfirm {\n  text-align: right;\n  font-size: 12px;\n  color: #222222;\n}\n\n.cls-ionrow-price {\n  margin-left: -5px;\n}\n\n.text-best {\n  line-height: 18px;\n  font-size: 14px;\n  letter-spacing: -0.36px;\n  color: #ffffff;\n}\n\n.div-best {\n  position: absolute;\n  background-color: #26bed6;\n  right: 0%;\n  top: 0%;\n  z-index: 999;\n  text-align: center;\n  padding: 3px 5px 2px 8px;\n  border-radius: 0 0 0 4px;\n}\n\n.div-btnbook {\n  text-align: right;\n}\n\n.img-flash {\n  width: 4px;\n  height: 8px;\n  margin-right: 2px;\n}\n\n.div-installment {\n  background-color: #f2f2f2;\n  padding: 16px 8px 0px 8px;\n}\n\n.div-installment .installment-content {\n  background: #eaf0e7;\n  border-left: solid 3px #326f0f;\n}\n\n.div-installment .installment-content .text-installment {\n  padding: 7px 0px 6px 12px;\n  color: #326f0f;\n  letter-spacing: -0.6px;\n  font-size: 14px;\n}\n\n.div-installment .installment-content .text-installment-detail {\n  padding: 0px 24px 6px 12px;\n  color: #326f0f;\n}\n\n.div-installment .installment-content .installment-detail {\n  color: #26bed6;\n  padding: 16px 4px;\n}\n\n.btn-review {\n  color: #26bed6;\n  font-size: 14px;\n  float: right;\n  padding-right: 24px;\n  background: none;\n  padding-top: 4px;\n  height: 20px;\n}\n\n.margin-left-8 {\n  margin-left: 8px;\n}\n\n.padding-0 {\n  padding-left: 0px !important;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.font-size-16 {\n  font-size: 16px !important;\n}\n\na.progressive {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  outline: none;\n}\n\na.progressive:not(.replace) {\n  cursor: default;\n}\n\na.progressive img {\n  display: block;\n  width: 100%;\n  max-width: none;\n  height: auto;\n  border: 0 none;\n}\n\na.progressive img.preview {\n  -webkit-filter: blur(2vw);\n          filter: blur(2vw);\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n\nimg.preview {\n  -webkit-filter: blur(2vw);\n          filter: blur(2vw);\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n}\n\na.progressive img.reveal {\n  position: absolute;\n  left: 0;\n  top: 0;\n  will-change: transform, opacity;\n  -webkit-animation: reveal 1s ease-out;\n          animation: reveal 1s ease-out;\n}\n\nimg.reveal {\n  position: absolute;\n  left: 0;\n  top: 0;\n  will-change: transform, opacity;\n  -webkit-animation: reveal 1s ease-out;\n          animation: reveal 1s ease-out;\n}\n\n@-webkit-keyframes reveal {\n  0% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes reveal {\n  0% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.text-price-fsale {\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 28px;\n}\n\n.btn-book-fsale {\n  border: solid 1px #f59233;\n  color: #ffffff;\n  background: #f59233;\n  width: 104px;\n  text-transform: none;\n  font-size: 15px !important;\n  font-weight: normal;\n  padding: 0;\n  height: 42px !important;\n}\n\n.ion-col-fsale {\n  align-self: center;\n  text-align: right;\n}\n\n.div-split-fsale {\n  height: 4px;\n  opacity: 0.3;\n  background-color: white;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-top: 12px;\n  margin-bottom: 16px;\n}\n\n.textroomCombo {\n  color: #ff9500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvaG90ZWxkZXRhaWwvaG90ZWxkZXRhaWwuc2NzcyIsInNyYy9hcHAvaG90ZWxkZXRhaWwvaG90ZWxkZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGdEQUFBO0FDQ1I7O0FERUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ0k7RUFDRSxtQkFBQTtBQ0NOOztBREVFO0VBQ0UsWUFBQTtFQUlBLGdCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURGSTtFQUNFLG1CQUFBO0FDSU47O0FEQ0U7RUFDRSxjQUFBO0FDRUo7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VSOztBRENJO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FERUU7RUFDRSwrQkFBQTtLQUFBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QUNFTjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QURESTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSVI7O0FERkk7RUFFRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFLQSxvQkFBQTtBQ0FOOztBREpNO0VBRUUsY0FBQTtBQ0tSOztBREFJO0VBQ0ksYUFBQTtFQUNBLFVBQUE7QUNHUjs7QURESTtF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QTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQ3NDSjs7QURwQ0E7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0FDc0NKOztBRHBDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3VDSjs7QURyQ0E7RUFDSSxjQUFBO0VBQ0MsZ0JBQUE7RUFDRCx1QkFBQTtFQUNBLG1CQUFBO0FDd0NKIiwiZmlsZSI6InNyYy9hcHAvaG90ZWxkZXRhaWwvaG90ZWxkZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAuaGVhZGVyLWhvdGVsZGV0YWlse1xuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDBweCAtIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XG4gICAgfVxuXG4gICAgLmlubmVycmV2aWV3e1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgLy9tYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgZGl2e1xuICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICAgIH1cbiAgfVxuICAuaW5uZXJyZXZpZXcxe1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXZ7XG4gICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gICAgfVxuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIH1cbiAgaW9uLWhlYWRlci5jbHMtaGVhZGVye1xuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgLmRpdi1ob3RlbG5hbWV7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgbWF4LXdpZHRoOiAyNTRweDtcbiAgICAgICAgbWFyZ2luOiAwIDI0cHg7XG4gICAgfVxuXG4gICAgLnRleHQtaG90ZWxuYW1le1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gIH1cbiAgLmltZzEge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGhlaWdodDogMTA0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcbn1cbi5pbWcyIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweFxufVxuICAgIC50ZXh0LXRpdGxlXG4gICAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICAgIC50ZXh0LXRpdGxlLWhlYWRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuICAgIC5idXR0b24taGVhZGVye1xuICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLnRleHQtbmFtZVxuICAgIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAxOHB4IDZweCAwcHggMHB4O1xuICAgICAgLnRleHQtZ3JlZW5cbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcbiAgICAgIH1cbiAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgIH1cblxuICAgICNtYXBfY2FudmFzIHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDkyJTtcbiAgICB9XG4gICAgLmJ1dHRvbjRcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIFxuICAgIH1cbiAgICAuYnV0dG9uNVxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgICBcbiAgICB9XG4gICAgLmRpdi1zZWVkZXRhaWx7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAvL3BhZGRpbmc6IDEwcHggMDtcbiAgICB9XG4gICAgLnRleHQtc2VlZGV0YWlsc3tcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuXG4gICAgfVxuICAgIC5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgICB9IFxuICAgIC5idXR0b242XG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH0gXG4gICAgLml0ZW0tbWQgcFxuICAgIHtcbiAgICAgICAgY29sb3I6ICNmZmZcbiAgICB9XG4gICAgLmltYWdlLWNhcmR7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDYlXG4gICAgICB9XG4gICAgLmltYWdlLWNhcmQxe1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAzJVxuICAgIH1cbiAgICAuZGl2LWJvcmRlclxuICAgIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgIHdpZHRoOiAyMDAlO1xuICAgIH1cbiAgICBociB7IFxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfSBcbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIH1cbiAgICAubGlzdC1tZCA+IC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgLml0ZW0taW5uZXJ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xuICAgIH1cbiAgICAuYnV0dG9uLmNsaWNrXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB3aWR0aDogMTU2cHg7XG4gICAgICAgIGhlaWdodDogNDRweFxuXG4gICAgfVxuICAgIC5idXR0b24ubm9uZVxuICAgIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgd2lkdGg6IDE1NnB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHhcblxuICAgIH1cbiAgICAuYnV0dG9uN1xuICAgIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5sYWJlbC1tZCwubGFiZWwtaW9zIHtcbiAgICAgICAgbWFyZ2luOiA4cHggMHB4IDhweCAwO1xuICAgIH1cbiAgICAuYmFkZ2UtbWQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAvLyAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgaGVpZ2h0OiAxOTdweDtcbiAgICAvLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB9XG5cbiAgICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyMDJweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgIGlvbi1zbGlkZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtdGl0bGUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDMlO1xuICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMi43ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8vLy8vLy8vXG4gICAgICAgICAgLmRpdi1nby1iYWNre1xuICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApIC0gMHB4KTtcbiAgICAgICAgICAgICAgbGVmdDogMTRweDtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgICAuaW1nLWFic29sdXRle1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIC5pbWctYmFja3tcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIC8vbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLSAwcHgpO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWltZy1iYWNrZ3JvdW5ke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1nb2JhY2stYmFja2dyb3VuZHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbWctaGVhcnR7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApIC0gMTRweCk7XG4gICAgICAgICAgICB6LWluZGV4OiAxMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLTE0cHgpO1xuICAgICAgICAgICAgcmlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5pbWFnZS1oZWFydHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA5cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nLXNoYXJle1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIDE0cHgpO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB6LWluZGV4OiAxMTtcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLTE0cHgpO1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgLmltYWdlLXNoYXJle1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgIFxuICAgICAgICAuZGl2LXNoYXJlLWJhY2tncm91bmR7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtaGVhcnQtYmFja2dyb3VuZHtcbiAgICAgICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1saWtlLWNvdW50e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi1pbWctY2FwdGlvbi1ncmFke1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICBib3R0b206IDE4cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEyJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaXYtaW1nLWNhcHRpb257XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTIlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgXG4gICAgICAgIC8vICAgLnNsaWRlLWltYWdlLWhvdGVse1xuICAgICAgICAvLyAgICAgICBoZWlnaHQ6IDIwMnB4O1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLy8vLy8vL1xuICAgICAgICB9XG4gICAgICAgIC5iYWRnZXNjc3Mge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICAvL21hcmdpbi1sZWZ0OiA4MyU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiA5cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgLmltZy1oZWFydHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgICAgICAgICAgICAgbGVmdDogODclO1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nLXNoYXJle1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgICAgICAgICBsZWZ0OiA3NiU7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH0gICBcbiAgICAgICAgLnRleHQtcGF4e1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDBweDtcbiAgICAgICAgfVxuICAgIFxuICAgICNncmFkMSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzAlOyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTsgLyogU3RhbmRhcmQgc3ludGF4IChtdXN0IGJlIGxhc3QpICovXG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgICBkaXYuc29saWQge2JvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgfVxuICAgIC5pbWctcmFkaXVzXG4gICAge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC8vIC5kaXYtY29tYm8gLml0ZW0tbWR7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNjNzE7XG4gICAgLy8gICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8vIH1cbiAgICAvLyAuZGl2LWNvbWJvIC5pdGVtLWlvc3tcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2M3MTtcbiAgICAvLyAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gfVxuICAgIC5kaXYtY29tYm97XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWVkYzc7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuXG4gICAgICAgIC5tYXJnaW4tMHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuY29sLXRpdGxlLWNvbWJve1xuICAgICAgICAgICAgcGFkZGluZzowO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICAgICAgICAgIC50aXRsZS1jb21iby1wcmljZXtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmY5NTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5wYWRkaW5nLWxyLTE2e1xuICAgICAgICAgICAgcGFkZGluZzowIDE2cHg7XG5cbiAgICAgICAgICAgIC5kaXYtY29tYm8tdGl0bGV7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwcHggNXB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1tZHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNjNzE7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1pb3N7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYzcxO1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1pbnN1cnJhbmNlLWluZm97XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGMkQ4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4OXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWxvZ28tY2F0aGF5e1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE3cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1pbmZvLWNhdGhheXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgICAgbGVmdDogOTZweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nby1pbnN1cmFuY2V7XG4gICAgICAgICAgICB3aWR0aDogNTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtY2F0aGF5LWZlZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgYm90dG9tOjhweDtcbiAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrLWluc3VycmFuY2UtZmVle1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICAubWFyZ2luLTE2e1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLmNscy1sYWJlbHtcbiAgICAgICAgY29sb3I6IzRmNGY0ZjtcbiAgICAgICAgXG4gICAgfVxuICAgIC5jbHMtdGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5jbHMtYm9yZGVyLXJpZ2h0e1xuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xuICAgICAgICB3aWR0aDogOTclO1xuICAgIH1cbiAgICAuY2xzLWJvcmRlci1ndWVzdHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICAgICAgd2lkdGg6IDExNSU7XG4gICAgfVxuICAgIC5kaXYtY2hlY2staW57XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMXB4O1xuICAgICAgICBib3JkZXItdG9wOnNvbGlkIDFweCAjY2RjZGNkO1xuICAgIH1cbiAgICAudGV4dC1yaWdodHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5ob3RlbC1kZXNjcmlwdGlvbi0xe1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDAzYzcxO1xuICAgICAgICBjb2xvcjojZmZmZmZmO1xuICAgIH1cbiAgICAudGV4dC1ob3RlbC1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgIH1cbiAgICAudGV4dC13aGl0ZS1zcGFjZXtcbiAgICAgICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgICB9XG4gICAgLnAtdG9wLTZ7XG4gICAgICAgIHBhZGRpbmctdG9wOjZweDtcbiAgICB9XG4gICAgLnAtdG9wLTR7XG4gICAgICAgIHBhZGRpbmctdG9wOjRweDtcbiAgICB9XG4gICAgLnAtbGVmdC0yMntcbiAgICAgICAgcGFkZGluZy10b3A6NHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gICAgICAgIGhlaWdodDogMjFweDtcbiAgICB9XG4gICAgLmJvcmRlci1ib3R0b217XG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLnRleHQtaG90ZWwtdGl0bGV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDJweCAwcHg7XG4gICAgfVxuICAgIC50ZXh0LWhvdGVsLWRlc2NyaXB0aW9ue1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICAudGV4dC1ob3RlbC1wcmljZXtcbiAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLmljb24tY29tYm97XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB0b3A6IDExcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmljb24tZGV0YWlsLWZpeHtcbiAgICAgICAgd2lkdGg6MTNweDtcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgIH1cbiAgICAuYnRuLWJvb2tcbiAgICB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBtYXJnaW46IDhweCAwcHggMTZweCAwcHg7XG4gICAgfVxuICAgIC5idG4tYm9vay1vdXRsaW5le1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1OTIzMztcbiAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICBoZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB9XG4gICAgLmhvdGVsLWRldGFpbC1jb250ZW50e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4IDJweCA4cHg7XG4gICAgfVxuICAgIC5ob3RlbC1kZXRhaWwtcm9vbS1jbGFzc3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICB9XG5cbiAgICAuY2FyZC1iYWNrZ3JvdW5kLWRldGFpbHBhZ2Uge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuaW9uLXRodW1ibmFpbHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtcm9vbS1jbGFzcy1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgICAgICBjb2x1bW5zOiAjMjIyMjIyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oaWRkZW4tdGV4dHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbC13aWR0aC05MC1wZXJjZW50e1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1tZHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLW1kLC5sYWJlbC1pb3Mge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiAxMTJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5uby1wYWRkaW5ne1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAucm9vbS1jbGFzcy1pY29ue1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5yb29tLWNsYXNzLW5hbWV7XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42MXB4O1xuXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtLWlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAucC1sZWZ0LTR7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMHB4IDBweCA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gICAgICAgICAgICBtYXJnaW46IDJweCAxMHB4IDBweCA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtc2VlLWRldGFpbHtcbiAgICAgICAgICAgIGNvbG9yOiMyNmJlZDY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLmxoLTEye1xuICAgICAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgLy8gfVxuICAgICAgICBoMntcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtbGVmdHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5pbWctcm9vbS1kZXRhaWx7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgICAgfVxuICAgIH1cbiAgICBwe1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5wZW5hbC1kZXRhaWx7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC5wZW5hbC1kZXRhaWw6bGFzdC1jaGlsZHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIC5kaXYtbWVhbHR5cGV7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIFxuICAgIC5pY29uLWRldGFpbC1ncmVlbi1maXh7XG4gICAgICAgIHdpZHRoOjEycHg7XG4gICAgICAgIGhlaWdodDoxNnB4O1xuICAgICAgICBjb2xvcjojMjE5NjUzO1xuICAgIH1cbiAgICAuaWNvbi1kZXRhaWwtY2hlY2stZ3JlZW4tZml4e1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHdpZHRoOjEycHg7XG4gICAgICAgIGhlaWdodDoxNHB4O1xuICAgICAgICBjb2xvcjojMjE5NjUzO1xuICAgIH1cbiAgICAuY2xzLWdyZWVue1xuICAgICAgICBjb2xvcjojMjE5NjUzO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIG9wYWNpdHk6IDAuODU7XG4gICAgfVxuICAgIC5ncmlke1xuICAgICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnAtbGVmdC04e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6MTZweDtcbiAgICB9XG4gICAgLnRleHQtcm9vbS1kZXNjcmlwdGlvbntcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgfVxuICAgIC50ZXh0LXJvb20tZGVzY3JpcHRpb24tcC10b3AtMzJ7XG4gICAgICAgIGNvbG9yOiM4MjgyODI7XG4gICAgICAgIHBhZGRpbmc6IDMycHggOHB4IDBweCAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC50ZXh0LXJvb20tcHJpY2V7XG4gICAgICAgIGNvbG9yOiMyNmJlZDY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnRleHQtcm9vbS1wcmljZS1uby1ib3R0b217XG4gICAgICAgIGNvbG9yOiMyNmJlZDY7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnRleHQtY29tYm8tY2l0eXtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfVxuICAgIC50ZXh0LWNvbWJvLXByaWNle1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIC50ZXh0LWNvbWJvLW1pbi1wcmljZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gICAgLnRleHQtY29tYm8tcm9vbS1wcmljZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG4gICAgLnRleHQtZHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIH1cbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcbiAgICAgICAgY29sb3I6IzgyODI4MjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLnRleHQtcmVnaXN0ZXJ7XG4gICAgICAgIGNvbG9yOiMyNmJlZDY7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4IDEycHggMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodFxuICAgIH1cbiAgICAuaWNvbi10ZXh0LXJlZ2lzdGVye1xuICAgICAgICBwYWRkaW5nOiAycHggNnB4IDBweCAwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gICAgfVxuICAgIC50ZXh0LXByb21vdGlvbi1ub3Rle1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjRTUyODIyO1xuICAgIH1cbiAgICAuaWNvbi10ZXh0LXByb21vdGlvbntcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgLmRpdi1wcm9tb3Rpb24tbm90ZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGl2LXNwbGl0e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICB9XG4gICAgLmRpdi1zcGxpdC1ncm91cHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uLW1ke1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5zdWItcHJpY2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgLmRpdi1jb21iby1saXN0e1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuXG4gICAgICAgIC50ZXh0LWNvbWJvLXByaWNlIC5zdWItcHJpY2V7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LWNvbWJvLW1pbi1wcmljZSAuc3ViLXByaWNle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYWNlbGluZVxuICAgICAgICB7ICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2VjOTcxZjtcbiAgICAgICAgICAgICAgICBsZWZ0OiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAucGxhY2Vwb2ludC0xOXtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOi0xOXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjOTcxZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnBsYWNlcG9pbnQtMTZ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDotMTVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgICAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYzk3MWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93LWxpbmV7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmgtMTR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmgtMzR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICAuaXRlbS1yb29tLWZpcnN0LWNoaWxke1xuICAgICAgICBwYWRkaW5nOjNweDtcbiAgICB9XG5cbiAgICAuY2FyZC1iYWNrZ3JvdW5kLWRldGFpbHBhZ2UgaW9uLWl0ZW0tZ3JvdXA6Zmlyc3QtY2hpbGQgLml0ZW0tcm9vbS1maXJzdC1jaGlsZHtcbiAgICAgICAgcGFkZGluZzozcHg7XG4gICAgICAgIC8vIGJvcmRlci10b3A6IHNvbGlkIDFweCAjMjZjZWQ2O1xuICAgICAgICAvLyBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjMjZjZWQ2O1xuICAgICAgICAvLyBib3JkZXItbGVmdDogc29saWQgMXB4ICMyNmNlZDY7XG4gICAgfVxuICAgIC8vIC5jYXJkLWJhY2tncm91bmQtZGV0YWlscGFnZSBpb24taXRlbS1ncm91cDpmaXJzdC1jaGlsZCAubWVhbHR5cGUtaXRlbTpmaXJzdC1jaGlsZCBkaXY6Zmlyc3QtY2hpbGR7XG4gICAgLy8gICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICMyNmNlZDY7XG4gICAgLy8gICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggIzI2Y2VkNjtcbiAgICAvLyAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMyNmJkZTY7XG4gICAgLy8gfVxuICAgIC5jbHMtZmlyc3RtZWFsdHlwZS1ib3JkZXJ7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICMyNmNlZDY7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgIH1cbiAgICBcbiAgICAucC1ib3R0b20tNHtcbiAgICAgICAgcGFkZGluZzowcHggOHB4IDRweCAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltZy1yYWRpdXNcbiAgICB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICB9XG4gICAgLmxpc3QtbWR7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIC5saXN0LWl0ZW0tZW5kLmxpc3QubGlzdC1tZHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICAubGlzdC1pdGVtLWVuZC5saXN0Lmxpc3QtbWQgLml0ZW0taW5uZXJ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucmVsYXRlLWhvdGVsLWRlc2NyaXB0aW9uIC5sYWJlbC1tZCwubGFiZWwtaW9ze1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBTdHlsZSBmb3IgaG90ZWwgcmVsYXRlXG4gICAgLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcblxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIFxuICAgICAgXG4gIFxuICAgIC5pb24tdGh1bWJuYWlse1xuICAgICAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAubGFiZWwtYmFkZ2V7XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICB9XG4gIFxuICAgIC5pdGVtLWJsb2Nre1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDQuNHJlbTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICB9XG4gICAgLypjc3MgY2hvIGlvcyovXG4gICAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuICAgIC5pdGVtLWlvcyAudHJhbnNib3ggeyBcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgLy9sZWZ0OiAxNnB4O1xuICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBib3R0b206IDE2cHg7XG4gICAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuICB9XG4gIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4gIC5pdGVtLWlvcyAudHJhbnNib3gxIHsgXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvL2xlZnQ6IDE2cHg7XG4gICAgICB3aWR0aDogMTA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIGJvdHRvbToyMXB4O1xuICAgICAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbiAgICB9XG4gICAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIEtow7RuZyBjw7MgcmF0aW5nXG4gICAgLml0ZW0taW9zIC50cmFuc2JveDIgeyBcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8vbGVmdDogMTZweDtcbiAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgYm90dG9tOjEzcHg7XG4gICAgICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xuICAgIH1cbiAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaXRlbS1pb3Mge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgICAgbWFyZ2luOjAgMTFweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgfVxuICBcbiAgICAuaXRlbS1pb3MgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gICAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gICAgfVxuICBcbiAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgfVxuICAgIC5sYWJlbC1pb3Mge1xuICAgICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4gICAgfVxuICAgIC8qY3NzIGNobyBpb3MqL1xuICBcbiAgICAvKmNzcyBjaG8gYW5kcm9pZCovXG4gICAgLy9TdHlsZSBjaG8gY2xhc3MgcHJvbW90aW9uIGPDsyByYXRpbmcgJiBsb2NhdGlvblxuICAgIC5pdGVtLW1kIC50cmFuc2JveCB7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgYm90dG9tOjIxcHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4gICAgfVxuICAgIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIGxvY2F0aW9uXG4gICAgLml0ZW0tbWQgLnRyYW5zYm94MSB7IFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgLy9sZWZ0OiAxNnB4O1xuICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBib3R0b206MTJweDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG4gICAgfVxuICAgIC8vU3R5bGUgY2hvIGNsYXNzIHByb21vdGlvbiBLaMO0bmcgY8OzIHJhdGluZ1xuICAgIC5pdGVtLW1kIC50cmFuc2JveDIgeyBcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8vbGVmdDogMTZweDtcbiAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgYm90dG9tOjEzcHg7XG4gICAgICBwYWRkaW5nOiA0cHggMTJweCAzcHggNXB4O1xuICAgIH1cblxuICAgIFxuICBcbiAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICBcbiAgICAuaXRlbS1tZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gICAgICBtYXJnaW46MCAxMXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgI2JkYmRiZDtcbiAgICB9XG4gICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbFtpdGVtLXN0YXJ0XSB7XG4gICAgICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG4gICAgfVxuICAgIC5pdGVtLW1kIC5pdGVtLWlubmVyIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB9XG4gICAgLmxhYmVsLW1kLC5sYWJlbC1pb3Mge1xuICAgICAgbWFyZ2luOiAxMXB4IDBweCAxMXB4IDA7XG4gICAgfVxuICAgIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgICAubGFiZWwtbWlucHJpY2V7XG4gICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAubGFiZWwtbWlucHJpY2VUQXtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTZweDtcbiAgICB9XG4gICAgLmxhYmVsLWRlYWxwcmljZXtcbiAgICAgIGNvbG9yOiAjZTUyODIyO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICB9XG4gICAgLnAtdG9wLW1pbnByaWNle1xuICAgICAgdG9wOjEycHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgICAucC10b3AtOHtcbiAgICAgIHRvcDo4cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnAtbm90b3B7XG4gICAgICAgIHRvcDotNXB4O1xuICAgIH1cbiAgICAucC10b3AtZGVhbHR5cGV7XG4gICAgICB0b3A6OXB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGNvbG9yOiAjZTUyODIyO1xuICAgIH1cbiAgICAucC10b3AtZGVhbHR5cGUtNntcbiAgICAgIHRvcDo1cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgY29sb3I6ICNlNTI4MjI7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5wcmljZS5jb2x7XG4gICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCA1cHg7XG4gICAgfVxuXG4gICAgLmltZy1yYWRpdXMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICAgIH1cbiAgICAuaG90ZWwtcmVsYXRlZC1kZXNjcmlwdGlvbntcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIC5ob3RlbC1yZWxhdGVkLWltZ3tcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6MTA0cHg7XG4gICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuaG90ZWwtcmVsYXRlZC1pbWcgLnRyYW5zYm94XzAgeyBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gICAgfVxuICAgIC50ZXh0LW5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgaDJ7XG4gICAgICAgIG1hcmdpbjowO1xuICAgIH1cbiAgICAuaC1saW5le1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDE2cHg7XG4gICAgfVxuICAgIC8vIC5oLWxpbmU6bGFzdC1jaGlsZHtcbiAgICAvLyAgICAgYm9yZGVyOm5vbmU7XG4gICAgLy8gfVxuICAgIC5wLXRvcC0xNntcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5wLWJvdHRvbS0we1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAvLy8vLy8vLy9cbiAgLmRpdi13cmFwaW1nIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6MTEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICAgIH1cbiAgLnBlbmFsdHktYWN0aXZle1xuICAgIHBhZGRpbmc6IDEwcHggOHB4IDBweCAwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgXG4gICAgfSBcbiAgICAucGVuYWx0eS1hY3RpdmUtZGVzY3JpcHRpb257XG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzVBODc7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICB9XG4gICAgLnZjb2xvci1pbmZve1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICB9XG4gICBcbiAgICAuYXJyb3c6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IGNhbGMoMjglIC0gMTBweCk7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNzVBODc7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgIC5wZW5hbHR5LXRleHR7XG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgIG9wYWNpdHk6MC44NTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7IFxuICAgICAgfVxuICAgICAgLmxpbmstcGVuYWx0eXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6ICM0MEE2RjI7XG4gICAgICB9XG4gICAgICAucGVuYWx0eS1hY3RpdmUtZGVzY3JpcHRpb24ubm9uZS1wLXRvcHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDowO1xuICAgICAgfVxuICAgICAgLmRpdi1lbXB0eS1yb29te1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5lbXB0eS1yb29te1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5sYWJlbC1lbXB0eS1yb29te1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDU2cHg7XG4gICAgfVxuICAgIC5idG4tY2hhbmdlLWhvdGVsLC5idG4tY2hhbmdlLWRhdGV7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICNmNzkyMjE7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgICAuYnRuLWVtcHR5LWxlZnR7XG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHggMjBweCAxNnB4O1xuICAgIH1cbiAgICAuYnRuLWVtcHR5LXJpZ2h0e1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIC50ZXh0LWRlY29yYXRpb257XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgICAuZmxhc2hzYWxlLWVuZGRhdGUtd2FybmluZ3tcbiAgICAgICAgY29sb3I6ICNmNzkyMjE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pdGVtLWlvcyBwe1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAudGV4dC10b3BzYWxle1xuICAgICAgICBjb2xvcjogI2U1MjgyMjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLmJ0bi10b3BzYWxle1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGhlaWdodDogMjNweDtcbiAgICB9XG4gICAgLmNscy1yb3ctcmV2aWV3e1xuICAgICAgICAvL2JvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYmRiZGJkO1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweCAxMHB4IDBweDtcbiAgICB9XG4gICAgLmNscy1yb3ctdmlld3RvcHNhbGV7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNCk7XG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuNCk7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICAgIC5jbHMtcmV2aWV3cG9pbnR7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC5ob3RlbC1kZXRhaWwtbm90ZSAuYmFkZ2UtaW9ze1xuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJkZTY7XG4gICAgfVxuICAgIC5ob3RlbC1yZWxhdGVkLWRlc2NyaXB0aW9uIC5iYWRnZS1pb3N7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmRlNjtcbiAgICB9XG4gICAgLmRpdi1ib3JkZXItYm90dG9te1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gICAgLm1lYWx0eXBlLWl0ZW0gLmRpdi1tZWFsdHlwZTpsYXN0LWNoaWxkIC5kaXYtYm9yZGVyLWJvdHRvbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gICAgLy8gLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIGlvbi1pdGVtLWdyb3VwOmZpcnN0LWNoaWxkIC5tZWFsdHlwZS1pdGVtIGRpdjpmaXJzdC1jaGlsZCAuZGl2LWJvcmRlci1ib3R0b217XG4gICAgLy8gICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgLy8gfVxuICAgIC5saXN0LWlvcyA+IC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQsIC5saXN0LWlvcyA+IC5pdGVtLXdyYXBwZXI6bGFzdC1jaGlsZCAuaXRlbS1ibG9jayB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAubGlzdC1pb3MgPiAuaXRlbS1ibG9jazpsYXN0LWNoaWxkIC5pdGVtLWlubmVyLCAubGlzdC1pb3MgPiAuaXRlbS13cmFwcGVyOmxhc3QtY2hpbGQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgI2M4YzdjYztcbiAgICB9XG4gICAgLmNscy1jb21iby10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfVxuICAgIC5jbHMtY29tYm8tZGVzY3JpcHRpb257XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnRleHQtZGVwYXJ0dXJle1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XG4gICAgICAgIC8vdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIH1cbiAgICAuY29tYm8tZGVwYXJ0dXJlLWRhdGV7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAvL2ZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XG4gICAgICB9XG4gICAgICAuc2FsZS1wcmljZS1mbGlnaHR7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICB9XG4gICAgICAuaWNvbi1mbGFzaHtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzk3MWY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWZsYXNoe1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuICAgICAgICAuYnV0dG9uLWlvcyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLWlvcyBbaXRlbS1yaWdodF0sIC5pdGVtLWlvcyBbaXRlbS1lbmRdIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuZGl2LW1hcHtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHggMHB4IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5pb24tbWQtY2xvc2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5pb24taW9zLWNsb3Nle1xuICAgICAgICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGl2LWdvLWJhY2t7XG4gICAgICAgIHotaW5kZXg6IDEwMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgd2lkdGg6IDU2cHg7XG4gICAgICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgIH1cbiAgICAuaW1nLWFycm93LWZsb2F0e1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLSAyMHB4KTtcbiAgICB9XG4gICAgLmRpdi1nby1iYWNrLWZsb2F0e1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsxMnB4KTtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6OHB4O1xuICAgICAgICAgIGhlaWdodDogY2FsYyg0NHB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcbiAgICB9XG4gICAgLmRpdi1mbG9hdC1hcnJvd3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgLy9tYXJnaW4tdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgfVxuICAgIFxuICAgIC5mbG9hdC1hcnJvdy1lbmFibGVke1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGhlaWdodDogY2FsYygzNnB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcbiAgICB9XG4gICAgLmZsb2F0LWFycm93LWRpc2FibGVke1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgfVxuICAgIC8vL3N0YXR1c2JhciBmbG9hdFxuICAgIC5kaXYtc3RhdHVzYmFyLWZsb2F0LWRldGFpbHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxMjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gICAgfVxuICAgIC5kaXYtc3RhdHVzYmFyLWZsb2F0LWRldGFpbC1lbmFibGVke1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIH1cbiAgICAuZGl2LXN0YXR1c2Jhci1mbG9hdC1kZXRhaWwtZGlzYWJsZWR7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAubGFiZWwtcHJpY2UtbG9naW57XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6Mjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAgICAgICAuaG90ZWwtcmVsYXRlZC1kZXNjcmlwdGlvbntcbiAgICAgICAgICAgIG1heC13aWR0aDogMjA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5wLXRvcC0xMHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAvLyAuaXRlbS1yb29tLWRlc2NyaXB0aW9uLWhvdGVsZGV0YWlse1xuICAgICAgICAvLyAgICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICAgICAgLy8gICAgIGxlZnQ6IDE0cHg7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLnAtdG9wLTgge1xuICAgICAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6MjgwcHgpIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xuICAgICAgICAudGV4dC1jaW4sIC50ZXh0LWNvdXQsLnRleHQtaW5wdXQtcm9vbXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1ndWVzdHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLXJvb217XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1ndWVzdHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmxpc3QtaXRlbS1lbmR7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgLml0ZW0tZW5ke1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICByaWdodDogMTFweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cbiAgICAgIC5ib3JkZXItYm90dG9tLWl0ZW0tZW5ke1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYyAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDRweCAxNnB4IDhweCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LXJvdy1pdGVtLWVuZHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXJvdy1maXJzdC1pdGVtLWVuZHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIxcHggMCAxNnB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tc2xpZGV7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICAuaG90ZWxkZXRhaWwtcG9pbnR7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3R7XG4gICAgICAgICAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG4gICAgICAgIH1cbiAgICAgICAgICBpb24tYmFkZ2V7XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTBjMjQ1O1xuICAgICAgICAgIH1cbiAgICAgICAgIC5yb3ctYm9yZGVyLWNpbntcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNjY2M7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAxNnB4IDhweCAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICB9XG5cblxuICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6NDAwcHgpIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XG4gICAgICAgICAgICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjI1cHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH1cblxuICAgICAgICAgXG5cbiAgICAgICAgOjpuZy1kZWVwe1xuICAgICAgICAgICAgLmFjdGlvbi1zaGVldHMtYmFzaWMtcGFnZSAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc3R5bGUgY2hvIGlvc1xuICAgICAgICAgICAgLmFjdGlvbi1zaGVldHMtYmFzaWMtcGFnZSAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGlvbi1zaGVldHMtYmFzaWMtcGFnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aW9uLXNoZWV0cy1iYXNpYy1wYWdlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aW9uLXNoZWV0cy1iYXNpYy1wYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3Rpb24tc2hlZXRzLWJhc2ljLXBhZ2UgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYWN0aW9uLXNoZWV0cy1iYXNpYy1wYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3Rpb24tc2hlZXRzLWJhc2ljLXBhZ2UgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuY2xzLXJldmlld3BvaW50e1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW1nLWxvYWRlcntcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9TdHlsZSBkZXRhaWwgbmV3XG4gICAgICAgLmNscy1zZWVtb3Jlcm9vbWRldGFpbHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiMyNmJlZDY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICB9XG4gICAgICAgLmNscy1oaWRkZW5yb29tZGV0YWlse1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IzI2YmVkNjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4OyBcbiAgICAgICB9XG4gICAgICAgLmNscy1maXgtdmlzaWJsZXtcbiAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICB9XG4gICAgICAgLmRpdi1tZWFsdHlwZSAuY2xzLXZpc2libGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvd05hdiA1MDBtcyBlYXNlLWluLW91dCBib3RoO1xuICAgICAgIH1cbiAgICAgICAuY2xzLWhpZGRlbntcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAwOyBcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBoaWRlTmF2IDUwMG1zIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHNob3dOYXYge1xuICAgICAgICAgICAgZnJvbSB7b3BhY2l0eTogMDt9XG4gICAgICAgICAgICB0byB7b3BhY2l0eTogMTt9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBoaWRlTmF2IHtcbiAgICAgICAgICAgIGZyb20ge29wYWNpdHk6IDE7fVxuICAgICAgICAgICAgdG8ge29wYWNpdHk6IDA7fVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWctc2VlbW9yZXJvb217XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgICAgfVxuLnAtYm90dG9tLTE2e1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4vL1N0eWxlIHNrZWxldG9uXG4ucm93LWl0ZW0taG90ZWxkZXRhaWwtc2t7XG4gICAgcGFkZGluZy10b3A6MzJweDtcbn1cbi5jb2wtaW1nLWhvdGVsZGV0YWlsLXNre1xuICAgIHBhZGRpbmc6IDA7XG59XG4udGV4dC1yZXZpZXd7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIH1cbiAgLnRleHQtcmV2aWV3LXBvaW50e1xuICAgIGNvbG9yOiMyNmJlZDY7XG4gICAgZm9udC1zaXplOiAxOHB4OyBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OjExcHg7XG4gIH1cbiAgLmNscy1sYWJlbC1zcGxpdHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O2NvbG9yOiAjY2NjO3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cblxuICAvLy8vc3R5bGUgaG90ZWwgcmVsYXRlXG4uZGl2LWhvdGVsLXJlbGF0ZWRcbntcbiAgICAucm93LWl0ZW0taG90ZWxyZWxhdGV7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5jb2wtaW1nLWhvdGVscmVsYXRle1xuICAgICAgICAvL2hlaWdodDogMTA5cHg7XG4gICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cbiAgICAgIC5pbWctcmFkaXVzXG4gICAgICB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiAxMDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgfVxuICAgICAgLmhvdGVsLXJlbGF0ZWQtaW1nLnRyYW5zYm94XzAgeyBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbiAgICAgIH1cbiAgICAgIC5jb2wtZGVzY3JpcHRpb24taG90ZWxyZWxhdGV7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgbGVmdDogMTEycHg7XG4gICAgICAgIHdpZHRoOiA3MiU7XG4gICAgICB9XG4gICAgICAuZml4LWhlaWdodC0xMDR7XG4gICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1uYW1lXG4gICAgICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDEgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3ggIWltcG9ydGFudDtcbiAgICAgICAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqLyAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIG1heC13aWR0aDogOTUlO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgLm0tdG9wLTV7XG4gICAgICAgIG1hcmdpbi10b3A6NXB4O1xuICAgICAgfVxuICAgICAgLmxhYmVsLWJhZGdle1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgfVxuICAgICAgLnNwLWl0ZW0tc3R5bGV7XG4gICAgICAgIHBhZGRpbmc6M3B4IDVweDtcbiAgICAgICAgYm9yZGVyOnNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB9XG4gICAgICAubGFzdC1yb3d7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOjA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgIH1cbiAgICAgIC5jbHMtbGluZWhlaWdodHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1jb21ib1xuICAgIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6ICNlNTI4MjI7XG4gICAgfVxuICAgIC5wLXRvcC1kZWFsdHlwZXtcbiAgICAgICAgdG9wOjlweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6ICNlNTI4MjI7XG4gICAgICAgIG1heC13aWR0aDogNTYlO1xuICAgICAgfVxuICAgICAgLnAtdG9wLWRlYWx0eXBlLTZ7XG4gICAgICAgIHRvcDo1cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGNvbG9yOiAjZTUyODIyO1xuICAgICAgfVxuICAgICAgLmxhYmVsLW1pbnByaWNle1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuICAgICAgLmxhYmVsLW1pbnByaWNlVEF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgICAubGFiZWwtZGVhbHByaWNle1xuICAgICAgICBjb2xvcjogI2U1MjgyMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtbmFtZXJvb21cbiAgICB7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgXG4gICAgfSBcbiAgICAucC10b3AtbWlucHJpY2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgICAudC1ib2xke1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLnRleHQtbG9naW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIC5oLWxpbmV7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuICAgICAgcHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBtYXJnaW4tdG9wOjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICB9XG59XG4uaW1nLXNoYXJlaGR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNyU7XG4gICAgbGVmdDogMCU7XG59XG4udGV4dC1jaGFuZ2VcbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4udGV4dC1oclxue1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmNscy10b29sYmFyXG57XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4ICNiZGJkYmQ7XG4gICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAhaW1wb3J0YW50O1xufVxuLmxoLW5vcm1hbHtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuLmRpdi1yZXZpZXd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnRleHQtcG9pbnR7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubnVtLXJldmlldyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uY2xzLWlvbmJhZGdlXG57XG4gICAgd2lkdGg6IDQ5cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDZweCAwcHggNnB4IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjYTBjMjQ1O1xufVxuLmNscy1tbDE2XG57XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcblxuICAgIC5kaXYtcmVjZW50LXJldmlld3tcbiAgICAgICAgcGFkZGluZzogMjRweCAwcHggMHB4IDBweDtcbiAgICB9XG4gICAgLnRleHQtcmVjZW50LXJldmlld3tcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG59XG4uY2xzLW1sNlxue1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG4uY2xzLW1sOFxue1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLnRleHQtdGl0bGVyZXZpZXdcbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHhcbn1cblxuLmNscy1pb25iYWRnZXJ3XG57XG4gICAgd2lkdGg6IDQzcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNhMGMyNDU7XG59XG4ubXQyNVxue1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubXQxNntcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmRpdi1jaW5vdXRcbntcbiAgICBoZWlnaHQ6IDY4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBwYWRkaW5nOiAyMHB4IDhweCA4cHggOHB4O1xufVxuLmNscy1ncmlkY2lub3V0XG57XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgcGFkZGluZzogOHB4O1xufVxuLnRleHQtc2VlbW9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzVweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHdpZHRoOiA2NnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jbHMtZGl2YmFja1xue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiA5cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIGhlaWdodDogMTA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5yb3ctY2luLWNvdXR7XG4gICAgaGVpZ2h0OiA1MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuIH1cbiAudGV4dC1kYXRlLXJldmlld3Mge1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY2xzLXRleHRyZXZpZXd7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5kaXYtaG90ZWxyZXZpZXd7XG4gICAgLnBvcy1yZWxhdGl2ZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuICAgICAgLmRhdGUtcmV2aWV3e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICBcbn1cbi50ZXh0LXByaWNlXG57XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC45MnB4O1xufVxuLnRleHQtcHJpY2UtdW5pdFxue1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbn1cbi5jbHMtaW9uLWdyaWRcbntcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG4uY2xzLWlvbi1jb2xcbntcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5jbHMtdGV4dGNvbmZpcm1cbntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMyMjIyMjI7XG59XG4uY2xzLWlvbnJvdy1wcmljZVxue1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuLnRleHQtYmVzdFxue1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kaXYtYmVzdFxue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIHJpZ2h0OiAwJTtcbiAgICB0b3A6IDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDVweCAycHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbn1cbi5kaXYtYnRuYm9va1xue1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmltZy1mbGFzaFxue1xuICAgIHdpZHRoOiA0cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uZGl2LWluc3RhbGxtZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgcGFkZGluZzogMTZweCA4cHggMHB4IDhweDtcblxuICAgIC5pbnN0YWxsbWVudC1jb250ZW50e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWFmMGU3O1xuICAgICAgICBib3JkZXItbGVmdDogc29saWQgM3B4ICMzMjZmMGY7XG5cbiAgICAgICAgLnRleHQtaW5zdGFsbG1lbnR7XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMHB4IDZweCAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMjZmMGY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWluc3RhbGxtZW50LWRldGFpbHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4IDZweCAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMjZmMGY7XG4gICAgICAgIH1cbiAgICAgICAgLmluc3RhbGxtZW50LWRldGFpbHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCA0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4uYnRuLXJldmlld1xue1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO3BhZGRpbmctdG9wOiA0cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuLm1hcmdpbi1sZWZ0LTh7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5wYWRkaW5nLTB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5kaXYtZmxleFxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9udC1zaXplLTE2e1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuXG4vL3N0eWxlIGltYWdlXG5hLnByb2dyZXNzaXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgYS5wcm9ncmVzc2l2ZTpub3QoLnJlcGxhY2UpIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgYS5wcm9ncmVzc2l2ZSBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gIH1cbiAgYS5wcm9ncmVzc2l2ZSBpbWcucHJldmlldyB7XG4gICAgZmlsdGVyOiBibHVyKDJ2dyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuICBpbWcucHJldmlldyB7XG4gICAgZmlsdGVyOiBibHVyKDJ2dyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuICBhLnByb2dyZXNzaXZlIGltZy5yZXZlYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIGFuaW1hdGlvbjogcmV2ZWFsIDFzIGVhc2Utb3V0O1xuICB9XG4gIGltZy5yZXZlYWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuICAgIGFuaW1hdGlvbjogcmV2ZWFsIDFzIGVhc2Utb3V0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHJldmVhbCB7XG4gICAgMCUge3RyYW5zZm9ybTogc2NhbGUoMS4wNSk7IG9wYWNpdHk6IDA7fVxuICAgIDEwMCUge3RyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7fVxuICB9XG4gIC50ZXh0LXByaWNlLWZzYWxlXG57XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyOHB4O1xufVxuLmJ0bi1ib29rLWZzYWxle1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogI2Y1OTIzMztcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNDJweCAhaW1wb3J0YW50O1xufVxuLmlvbi1jb2wtZnNhbGVcbntcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LXNwbGl0LWZzYWxle1xuICAgIGhlaWdodDogNHB4O1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4udGV4dHJvb21Db21ib3tcbiAgICBjb2xvcjojZmY5NTAwO1xuICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4gIC8vLy8vLyIsIi5oZWFkZXItaG90ZWxkZXRhaWwge1xuICBtYXJnaW4tdG9wOiBjYWxjKDBweCAtIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSk7XG59XG5cbi5pbm5lcnJldmlldyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbi5pbm5lcnJldmlldyBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXJyZXZpZXcxIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi5pbm5lcnJldmlldzEgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuaW9uLWhlYWRlci5jbHMtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5pb24taGVhZGVyLmNscy1oZWFkZXIgLmRpdi1ob3RlbG5hbWUge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1heC13aWR0aDogMjU0cHg7XG4gIG1hcmdpbjogMCAyNHB4O1xufVxuaW9uLWhlYWRlci5jbHMtaGVhZGVyIC50ZXh0LWhvdGVsbmFtZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaW1nMSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW1nMiB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4udGV4dC10aXRsZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cblxuLmJ1dHRvbi1oZWFkZXIge1xuICB3aWR0aDogNDhweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGhlaWdodDogNDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxOHB4IDZweCAwcHggMHB4O1xuICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuI21hcF9jYW52YXMge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogOTIlO1xufVxuXG4uYnV0dG9uNCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ1dHRvbjUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cblxuLmRpdi1zZWVkZXRhaWwge1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLnRleHQtc2VlZGV0YWlscyB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b242IHtcbiAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW0tbWQgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgd2lkdGg6IDYlO1xufVxuXG4uaW1hZ2UtY2FyZDEge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzJTtcbn1cblxuLmRpdi1ib3JkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICB3aWR0aDogMjAwJTtcbn1cblxuaHIge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5saXN0LW1kID4gLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVkZWRlO1xufVxuXG4uYnV0dG9uLmNsaWNrIHtcbiAgYmFja2dyb3VuZDogIzI2YmVkNjtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDE1NnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5idXR0b24ubm9uZSB7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHdpZHRoOiAxNTZweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4uYnV0dG9uNyB7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGFiZWwtbWQsIC5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDhweCAwcHggOHB4IDA7XG59XG5cbi5iYWRnZS1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1zbGlkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMlO1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMi43ZW07XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmRpdi1nby1iYWNrIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLSAwcHgpO1xuICBsZWZ0OiAxNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW1nLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWctYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgei1pbmRleDogMTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuZGl2LWltZy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgb3BhY2l0eTogMC41O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmRpdi1nb2JhY2stYmFja2dyb3VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZy1oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtIDE0cHgpO1xuICB6LWluZGV4OiAxMTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtMTRweCk7XG4gIHJpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmltZy1oZWFydCAuaW1hZ2UtaGVhcnQge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgd2lkdGg6IDE4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWctc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLSAxNHB4KTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAtMTRweCk7XG4gIHJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaW1nLXNoYXJlIC5pbWFnZS1zaGFyZSB7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICB3aWR0aDogMThweDtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE3cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmRpdi1zaGFyZS1iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgdG9wOiAyNXB4O1xuICByaWdodDogMjVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuZGl2LWhlYXJ0LWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xuICB0b3A6IDI1cHg7XG4gIHJpZ2h0OiAxNnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5kaXYtbGlrZS1jb3VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICB6LWluZGV4OiAxMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTVweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuZGl2LWltZy1jYXB0aW9uLWdyYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiAxOHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGhlaWdodDogMjZweDtcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMiU7XG4gIHBhZGRpbmc6IDJweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuZGl2LWltZy1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDcwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB6LWluZGV4OiAxMTtcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcbn1cblxuLmJhZGdlc2NzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDlweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICBsZWZ0OiA4NyU7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5pbWctc2hhcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICBsZWZ0OiA3NiU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtcGF4IHtcbiAgcGFkZGluZzogNnB4IDBweDtcbn1cblxuI2dyYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbiAgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIC8qIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAqL1xuICB6LWluZGV4OiAxMDtcbn1cblxuZGl2LnNvbGlkIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLmltZy1yYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5kaXYtY29tYm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZGM3O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kaXYtY29tYm8gLm1hcmdpbi0wIHtcbiAgbWFyZ2luOiAwO1xufVxuLmRpdi1jb21ibyAuY29sLXRpdGxlLWNvbWJvIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5kaXYtY29tYm8gLmNvbC10aXRsZS1jb21ibyAudGl0bGUtY29tYm8tcHJpY2Uge1xuICBjb2xvcjogI2ZmOTUwMDtcbn1cbi5kaXYtY29tYm8gLnBhZGRpbmctbHItMTYge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4uZGl2LWNvbWJvIC5wYWRkaW5nLWxyLTE2IC5kaXYtY29tYm8tdGl0bGUge1xuICBwYWRkaW5nOiAxNXB4IDBweCA1cHggMHB4O1xufVxuLmRpdi1jb21ibyAuaXRlbS1tZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNjNzE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmRpdi1jb21ibyAuaXRlbS1pb3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYzcxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kaXYtY29tYm8gLmRpdi1pbnN1cnJhbmNlLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGMkQ4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogODlweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRpdi1jb21ibyAuZGl2LWxvZ28tY2F0aGF5IHtcbiAgcGFkZGluZy10b3A6IDE3cHg7XG59XG4uZGl2LWNvbWJvIC5kaXYtaW5mby1jYXRoYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDk2cHg7XG59XG4uZGl2LWNvbWJvIC5sb2dvLWluc3VyYW5jZSB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuLmRpdi1jb21ibyAuZGl2LWNhdGhheS1mZWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBib3R0b206IDhweDtcbiAgcmlnaHQ6IDhweDtcbn1cbi5kaXYtY29tYm8gLmNoZWNrLWluc3VycmFuY2UtZmVlIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGl2LWNvbWJvIC5tYXJnaW4tMTYge1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLmNscy1sYWJlbCB7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuXG4uY2xzLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY2xzLWJvcmRlci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4ICNjZGNkY2Q7XG4gIHdpZHRoOiA5NyU7XG59XG5cbi5jbHMtYm9yZGVyLWd1ZXN0IHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgd2lkdGg6IDExNSU7XG59XG5cbi5kaXYtY2hlY2staW4ge1xuICBwYWRkaW5nOiAwcHggMTFweDtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNjZGNkY2Q7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5ob3RlbC1kZXNjcmlwdGlvbi0xIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDNjNzE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGV4dC1ob3RlbC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xufVxuXG4udGV4dC13aGl0ZS1zcGFjZSB7XG4gIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4ucC10b3AtNiB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi5wLXRvcC00IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnAtbGVmdC0yMiB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMjJweDtcbiAgaGVpZ2h0OiAyMXB4O1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRleHQtaG90ZWwtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4IDBweCAycHggMHB4O1xufVxuXG4udGV4dC1ob3RlbC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi50ZXh0LWhvdGVsLXByaWNlIHtcbiAgcGFkZGluZzogMTZweCAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmljb24tY29tYm8ge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdG9wOiAxMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pY29uLWRldGFpbC1maXgge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAyM3B4O1xufVxuXG4uYnRuLWJvb2sge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiA4cHggMHB4IDE2cHggMHB4O1xufVxuXG4uYnRuLWJvb2stb3V0bGluZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uaG90ZWwtZGV0YWlsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxNnB4IDhweCAycHggOHB4O1xufVxuXG4uaG90ZWwtZGV0YWlsLXJvb20tY2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLWRldGFpbHBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWJhY2tncm91bmQtZGV0YWlscGFnZSAuaW9uLXRodW1ibmFpbCB7XG4gIGxpbmUtaGVpZ2h0OiAwLjUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtZGV0YWlscGFnZSAudGV4dC1yb29tLWNsYXNzLWRlc2NyaXB0aW9uIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sdW1uczogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5oaWRkZW4tdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5jb2wtd2lkdGgtOTAtcGVyY2VudCB7XG4gIHdpZHRoOiA5MCU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLWRldGFpbHBhZ2UgLml0ZW0tbWQge1xuICBwYWRkaW5nOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5sYWJlbC1tZCwgLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5sYWJlbC1pb3Mge1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cbi5jYXJkLWJhY2tncm91bmQtZGV0YWlscGFnZSAucm9vbS1jbGFzcy1pY29uIHtcbiAgbWF4LXdpZHRoOiAxNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5yb29tLWNsYXNzLW5hbWUge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjYxcHg7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5wLWxlZnQtNCB7XG4gIHBhZGRpbmc6IDRweCAwcHggMHB4IDRweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtZGV0YWlscGFnZSAuaXRlbS1tZCBpb24tdGh1bWJuYWlsW2l0ZW0tc3RhcnRdIHtcbiAgbWFyZ2luOiAycHggMTBweCAwcHggNnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC50ZXh0LXNlZS1kZXRhaWwge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIGgyIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1kZXRhaWxwYWdlIC5pbWctcm9vbS1kZXRhaWwge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucGVuYWwtZGV0YWlsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnBlbmFsLWRldGFpbDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5kaXYtbWVhbHR5cGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaWNvbi1kZXRhaWwtZ3JlZW4tZml4IHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTZweDtcbiAgY29sb3I6ICMyMTk2NTM7XG59XG5cbi5pY29uLWRldGFpbC1jaGVjay1ncmVlbi1maXgge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjMjE5NjUzO1xufVxuXG4uY2xzLWdyZWVuIHtcbiAgY29sb3I6ICMyMTk2NTM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgb3BhY2l0eTogMC44NTtcbn1cblxuLmdyaWQge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbn1cblxuLnAtbGVmdC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4udGV4dC1yb29tLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG5cbi50ZXh0LXJvb20tZGVzY3JpcHRpb24tcC10b3AtMzIge1xuICBjb2xvcjogIzgyODI4MjtcbiAgcGFkZGluZzogMzJweCA4cHggMHB4IDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utbm8tYm90dG9tIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtY29tYm8tY2l0eSB7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4udGV4dC1jb21iby1wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRleHQtY29tYm8tbWluLXByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRleHQtY29tYm8tcm9vbS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBwYWRkaW5nOiA1cHggMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbi50ZXh0LWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0LXJlZ2lzdGVyIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHBhZGRpbmc6IDE2cHggOHB4IDEycHggMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmljb24tdGV4dC1yZWdpc3RlciB7XG4gIHBhZGRpbmc6IDJweCA2cHggMHB4IDBweDtcbiAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn1cblxuLnRleHQtcHJvbW90aW9uLW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRTUyODIyO1xufVxuXG4uaWNvbi10ZXh0LXByb21vdGlvbiB7XG4gIHdpZHRoOiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5kaXYtcHJvbW90aW9uLW5vdGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtc3BsaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBoZWlnaHQ6IDZweDtcbn1cblxuLmRpdi1zcGxpdC1ncm91cCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGhlaWdodDogMTRweDtcbn1cblxuLmJ1dHRvbi1tZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN1Yi1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbn1cblxuLmRpdi1jb21iby1saXN0IHtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbn1cbi5kaXYtY29tYm8tbGlzdCAudGV4dC1jb21iby1wcmljZSAuc3ViLXByaWNlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xufVxuLmRpdi1jb21iby1saXN0IC50ZXh0LWNvbWJvLW1pbi1wcmljZSAuc3ViLXByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xufVxuLmRpdi1jb21iby1saXN0IC5wbGFjZWxpbmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIHRvcDogLTIycHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2VjOTcxZjtcbiAgbGVmdDogNnB4O1xufVxuLmRpdi1jb21iby1saXN0IC5wbGFjZXBvaW50LTE5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xOXB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsZWZ0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICNlYzk3MWY7XG59XG4uZGl2LWNvbWJvLWxpc3QgLnBsYWNlcG9pbnQtMTYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxlZnQ6IDRweDtcbiAgYmFja2dyb3VuZDogI2VjOTcxZjtcbn1cbi5kaXYtY29tYm8tbGlzdCAucm93LWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmRpdi1jb21iby1saXN0IC5oLTE0IHtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuLmRpdi1jb21iby1saXN0IC5oLTM0IHtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uaXRlbS1yb29tLWZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLWRldGFpbHBhZ2UgaW9uLWl0ZW0tZ3JvdXA6Zmlyc3QtY2hpbGQgLml0ZW0tcm9vbS1maXJzdC1jaGlsZCB7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmNscy1maXJzdG1lYWx0eXBlLWJvcmRlciB7XG4gIGJvcmRlcjogc29saWQgMnB4ICMyNmNlZDY7XG4gIHBhZGRpbmctdG9wOiAyMnB4O1xufVxuXG4ucC1ib3R0b20tNCB7XG4gIHBhZGRpbmc6IDBweCA4cHggNHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaW1nLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmxpc3QtbWQge1xuICBtYXJnaW46IDA7XG59XG5cbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4ubGlzdC1pdGVtLWVuZC5saXN0Lmxpc3QtbWQge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5saXN0LWl0ZW0tZW5kLmxpc3QubGlzdC1tZCAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVsYXRlLWhvdGVsLWRlc2NyaXB0aW9uIC5sYWJlbC1tZCwgLmxhYmVsLWlvcyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKmNzcyBjaG8gaW9zKi9cbiAgLypjc3MgY2hvIGlvcyovXG4gIC8qY3NzIGNobyBhbmRyb2lkKi9cbiAgLypjc3MgY2hvIGFuZHJvaWQqL1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pb24tdGh1bWJuYWlsIHtcbiAgbGluZS1oZWlnaHQ6IDAuNSAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1iYWRnZSB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWJsb2NrIHtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiA0LjRyZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNXB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIC50cmFuc2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMTcyLCA0NiwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiA0cHggMTZweCAzcHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyAudHJhbnNib3gxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMjFweDtcbiAgcGFkZGluZzogNHB4IDE2cHggM3B4IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaXRlbS1pb3MgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxNnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgbGluZWFyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgbWFyZ2luOiAwIDExcHg7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICNiZGJkYmQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWlvcyB7XG4gIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIC50cmFuc2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDIxcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLnRyYW5zYm94MiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAxNzIsIDQ2LCAwLjgpO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3R0b206IDEzcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGxpbmVhcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBsaW5lYXI7XG4gIG1hcmdpbjogMCAxMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjYmRiZGJkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pdGVtLW1kIGlvbi10aHVtYm5haWxbaXRlbS1zdGFydF0ge1xuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLml0ZW0tbWQgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLW1kLCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWlvcyB7XG4gIG1hcmdpbjogMTFweCAwcHggMTFweCAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1taW5wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5sYWJlbC1taW5wcmljZVRBIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmxhYmVsLWRlYWxwcmljZSB7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAucC10b3AtbWlucHJpY2Uge1xuICB0b3A6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAucC10b3AtOCB7XG4gIHRvcDogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5wLW5vdG9wIHtcbiAgdG9wOiAtNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5wLXRvcC1kZWFsdHlwZSB7XG4gIHRvcDogOXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAucC10b3AtZGVhbHR5cGUtNiB7XG4gIHRvcDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAucHJpY2UuY29sIHtcbiAgcGFkZGluZzogNXB4IDBweCA1cHggNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5pbWctcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBtYXJnaW4tbGVmdDogMTFweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuaG90ZWwtcmVsYXRlZC1kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5ob3RlbC1yZWxhdGVkLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgd2lkdGg6IDExMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLmhvdGVsLXJlbGF0ZWQtaW1nIC50cmFuc2JveF8wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5oLWxpbmUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgbWFyZ2luOiAxNnB4IDE2cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnAtYm90dG9tLTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmltZyB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xufVxuXG4ucGVuYWx0eS1hY3RpdmUge1xuICBwYWRkaW5nOiAxMHB4IDhweCAwcHggMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnBlbmFsdHktYWN0aXZlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1QTg3O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi52Y29sb3ItaW5mbyB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uYXJyb3c6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYygyOCUgLSAxMHB4KTtcbiAgYmFja2dyb3VuZDogIzI3NUE4NztcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogOHB4O1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4ucGVuYWx0eS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBvcGFjaXR5OiAwLjg1O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmxpbmstcGVuYWx0eSB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjNDBBNkYyO1xufVxuXG4ucGVuYWx0eS1hY3RpdmUtZGVzY3JpcHRpb24ubm9uZS1wLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uZGl2LWVtcHR5LXJvb20ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbXB0eS1yb29tIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGFiZWwtZW1wdHktcm9vbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIHBhZGRpbmc6IDIwcHggNTZweDtcbn1cblxuLmJ0bi1jaGFuZ2UtaG90ZWwsIC5idG4tY2hhbmdlLWRhdGUge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjc5MjIxO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0bi1lbXB0eS1sZWZ0IHtcbiAgcGFkZGluZzogMHB4IDhweCAyMHB4IDE2cHg7XG59XG5cbi5idG4tZW1wdHktcmlnaHQge1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHggMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi50ZXh0LWRlY29yYXRpb24ge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZsYXNoc2FsZS1lbmRkYXRlLXdhcm5pbmcge1xuICBjb2xvcjogI2Y3OTIyMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0taW9zIHAge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRleHQtdG9wc2FsZSB7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uYnRuLXRvcHNhbGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGhlaWdodDogMjNweDtcbn1cblxuLmNscy1yb3ctcmV2aWV3IHtcbiAgcGFkZGluZzogMTJweCAwcHggMTBweCAwcHg7XG59XG5cbi5jbHMtcm93LXZpZXd0b3BzYWxlIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC40KTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMjA0LCAyMDQsIDIwNCwgMC40KTtcbiAgcGFkZGluZzogM3B4IDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmNscy1yZXZpZXdwb2ludCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ob3RlbC1kZXRhaWwtbm90ZSAuYmFkZ2UtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmRlNjtcbn1cblxuLmhvdGVsLXJlbGF0ZWQtZGVzY3JpcHRpb24gLmJhZGdlLWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJkZTY7XG59XG5cbi5kaXYtYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubWVhbHR5cGUtaXRlbSAuZGl2LW1lYWx0eXBlOmxhc3QtY2hpbGQgLmRpdi1ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmxpc3QtaW9zID4gLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCwgLmxpc3QtaW9zID4gLml0ZW0td3JhcHBlcjpsYXN0LWNoaWxkIC5pdGVtLWJsb2NrIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1pb3MgPiAuaXRlbS1ibG9jazpsYXN0LWNoaWxkIC5pdGVtLWlubmVyLCAubGlzdC1pb3MgPiAuaXRlbS13cmFwcGVyOmxhc3QtY2hpbGQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgI2M4YzdjYztcbn1cblxuLmNscy1jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uY2xzLWNvbWJvLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRleHQtZGVwYXJ0dXJlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMDAzYzcxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS1kYXRlIHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5hIHtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5zYWxlLXByaWNlLWZsaWdodCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5pY29uLWZsYXNoIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzk3MWY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHdpZHRoOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtZmxhc2gge1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uYnV0dG9uLWlvcyB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLml0ZW0taW9zIFtpdGVtLXJpZ2h0XSwgLml0ZW0taW9zIFtpdGVtLWVuZF0ge1xuICBtYXJnaW46IDA7XG59XG5cbi5kaXYtbWFwIHtcbiAgbWFyZ2luOiAwIDE2cHggMHB4IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pb24tbWQtY2xvc2Uge1xuICBmb250LXNpemU6IDJlbSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWlvcy1jbG9zZSB7XG4gIGZvbnQtc2l6ZTogMmVtICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtZ28tYmFjayB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgbGVmdDogLTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG5cbi5pbWctYXJyb3ctZmxvYXQge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgLSAyMHB4KTtcbn1cblxuLmRpdi1nby1iYWNrLWZsb2F0IHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKzEycHgpO1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDU2cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgaGVpZ2h0OiBjYWxjKDQ0cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpO1xufVxuXG4uZGl2LWZsb2F0LWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuLmZsb2F0LWFycm93LWVuYWJsZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogY2FsYygzNnB4ICsgZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKTtcbn1cblxuLmZsb2F0LWFycm93LWRpc2FibGVkIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gIHotaW5kZXg6IDA7XG4gIGhlaWdodDogMHB4O1xufVxuXG4uZGl2LXN0YXR1c2Jhci1mbG9hdC1kZXRhaWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEyO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuLmRpdi1zdGF0dXNiYXItZmxvYXQtZGV0YWlsLWVuYWJsZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xufVxuXG4uZGl2LXN0YXR1c2Jhci1mbG9hdC1kZXRhaWwtZGlzYWJsZWQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbiAgei1pbmRleDogMDtcbn1cblxuLmxhYmVsLXByaWNlLWxvZ2luIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmhvdGVsLXJlbGF0ZWQtZGVzY3JpcHRpb24ge1xuICAgIG1heC13aWR0aDogMjA1cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxuXG4gIC5wLXRvcC0xMCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICAucC10b3AtOCB7XG4gICAgdG9wOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyODBweCkgYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC50ZXh0LWNpbiwgLnRleHQtY291dCwgLnRleHQtaW5wdXQtcm9vbSB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC50ZXh0LWd1ZXN0IHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubGFiZWwtcm9vbSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC5sYWJlbC1ndWVzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAycHggIWltcG9ydGFudDtcbiAgfVxufVxuLmxpc3QtaXRlbS1lbmQge1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLml0ZW0tZW5kIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgcmlnaHQ6IDExcHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ib3JkZXItYm90dG9tLWl0ZW0tZW5kIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2MgIWltcG9ydGFudDtcbiAgbWFyZ2luOiA0cHggMTZweCA4cHggNXB4O1xufVxuXG4uZGl2LXJvdy1pdGVtLWVuZCB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbn1cblxuLmRpdi1yb3ctZmlyc3QtaXRlbS1lbmQge1xuICBwYWRkaW5nOiAyMXB4IDAgMTZweCAwO1xufVxuXG5pb24tc2xpZGUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbn1cblxuLmhvdGVsZGV0YWlsLXBvaW50IHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG46aG9zdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbn1cblxuaW9uLWJhZGdlIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjYTBjMjQ1O1xufVxuXG4ucm93LWJvcmRlci1jaW4ge1xuICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjY2NjO1xuICBvcGFjaXR5OiAwLjQ7XG4gIG1hcmdpbjogMHB4IDE2cHggOHB4IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWJhc2ljLXBhZ2UgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWJhc2ljLXBhZ2UgLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWJhc2ljLXBhZ2UgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWJhc2ljLXBhZ2UgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWJhc2ljLXBhZ2UgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtYmFzaWMtcGFnZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1iYXNpYy1wYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjY2NjO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWJhc2ljLXBhZ2UgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuY2xzLXJldmlld3BvaW50IHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICB0b3A6IDJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbjo6bmctZGVlcCAuaW1nLWxvYWRlciBpbWcge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG59XG5cbi5jbHMtc2VlbW9yZXJvb21kZXRhaWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jbHMtaGlkZGVucm9vbWRldGFpbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcbn1cblxuLmNscy1maXgtdmlzaWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXYtbWVhbHR5cGUgLmNscy12aXNpYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogc2hvd05hdiA1MDBtcyBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uY2xzLWhpZGRlbiB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQ7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgYW5pbWF0aW9uOiBoaWRlTmF2IDUwMG1zIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbkBrZXlmcmFtZXMgc2hvd05hdiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGlkZU5hdiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5pbWctc2VlbW9yZXJvb20ge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBoZWlnaHQ6IDlweDtcbn1cblxuLnAtYm90dG9tLTE2IHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5yb3ctaXRlbS1ob3RlbGRldGFpbC1zayB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4uY29sLWltZy1ob3RlbGRldGFpbC1zayB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50ZXh0LXJldmlldyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLnRleHQtcmV2aWV3LXBvaW50IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMXB4O1xufVxuXG4uY2xzLWxhYmVsLXNwbGl0IHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgY29sb3I6ICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uZGl2LWhvdGVsLXJlbGF0ZWQgLnJvdy1pdGVtLWhvdGVscmVsYXRlIHtcbiAgbWFyZ2luOiAxNnB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuLmRpdi1ob3RlbC1yZWxhdGVkIC5jb2wtaW1nLWhvdGVscmVsYXRlIHtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRpdi1ob3RlbC1yZWxhdGVkIC5pbWctcmFkaXVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwNHB4ICFpbXBvcnRhbnQ7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmRpdi1ob3RlbC1yZWxhdGVkIC5ob3RlbC1yZWxhdGVkLWltZy50cmFuc2JveF8wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDE3MiwgNDYsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogNHB4IDEycHggM3B4IDRweDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAuY29sLWRlc2NyaXB0aW9uLWhvdGVscmVsYXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBsZWZ0OiAxMTJweDtcbiAgd2lkdGg6IDcyJTtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAuZml4LWhlaWdodC0xMDQge1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuLmRpdi1ob3RlbC1yZWxhdGVkIC50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAxICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94ICFpbXBvcnRhbnQ7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXgtd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAubS10b3AtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAubGFiZWwtYmFkZ2Uge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAuc3AtaXRlbS1zdHlsZSB7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAubGFzdC1yb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLmRpdi1ob3RlbC1yZWxhdGVkIC5jbHMtbGluZWhlaWdodCB7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuLmRpdi1ob3RlbC1yZWxhdGVkIC50ZXh0LWNvbWJvIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG4uZGl2LWhvdGVsLXJlbGF0ZWQgLnAtdG9wLWRlYWx0eXBlIHtcbiAgdG9wOiA5cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBtYXgtd2lkdGg6IDU2JTtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAucC10b3AtZGVhbHR5cGUtNiB7XG4gIHRvcDogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogI2U1MjgyMjtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAubGFiZWwtbWlucHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLmRpdi1ob3RlbC1yZWxhdGVkIC5sYWJlbC1taW5wcmljZVRBIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAubGFiZWwtZGVhbHByaWNlIHtcbiAgY29sb3I6ICNlNTI4MjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAudGV4dC1uYW1lcm9vbSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAucC10b3AtbWlucHJpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuLmRpdi1ob3RlbC1yZWxhdGVkIC50LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAudGV4dC1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5kaXYtaG90ZWwtcmVsYXRlZCAuaC1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZGl2LWhvdGVsLXJlbGF0ZWQgcCB7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4uZGl2LWhvdGVsLXJlbGF0ZWQgLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uaW1nLXNoYXJlaGQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNyU7XG4gIGxlZnQ6IDAlO1xufVxuXG4udGV4dC1jaGFuZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRleHQtaHIge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uY2xzLXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggI2JkYmRiZDtcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSAhaW1wb3J0YW50O1xufVxuXG4ubGgtbm9ybWFsIHtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLmRpdi1yZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLnRleHQtcG9pbnQge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubnVtLXJldmlldyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5jbHMtaW9uYmFkZ2Uge1xuICB3aWR0aDogNDlweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCAwcHggNnB4IDBweDtcbiAgYmFja2dyb3VuZDogI2EwYzI0NTtcbn1cblxuLmNscy1tbDE2IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uY2xzLW1sMTYgLmRpdi1yZWNlbnQtcmV2aWV3IHtcbiAgcGFkZGluZzogMjRweCAwcHggMHB4IDBweDtcbn1cbi5jbHMtbWwxNiAudGV4dC1yZWNlbnQtcmV2aWV3IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmNscy1tbDYge1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uY2xzLW1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4udGV4dC10aXRsZXJldmlldyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbHMtaW9uYmFkZ2VydyB7XG4gIHdpZHRoOiA0M3B4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2EwYzI0NTtcbn1cblxuLm10MjUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubXQxNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5kaXYtY2lub3V0IHtcbiAgaGVpZ2h0OiA2OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAyMHB4IDhweCA4cHggOHB4O1xufVxuXG4uY2xzLWdyaWRjaW5vdXQge1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4udGV4dC1zZWVtb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1cHg7XG4gIGxlZnQ6IDMwcHg7XG4gIHdpZHRoOiA2NnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjUyO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNscy1kaXZiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogOXB4O1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucm93LWNpbi1jb3V0IHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi50ZXh0LWRhdGUtcmV2aWV3cyB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uY2xzLXRleHRyZXZpZXcge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5kaXYtaG90ZWxyZXZpZXcgLnBvcy1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtaG90ZWxyZXZpZXcgLmRhdGUtcmV2aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LXByaWNlIHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjkycHg7XG59XG5cbi50ZXh0LXByaWNlLXVuaXQge1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbn1cblxuLmNscy1pb24tZ3JpZCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLmNscy1pb24tY29sIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5jbHMtdGV4dGNvbmZpcm0ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmNscy1pb25yb3ctcHJpY2Uge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLnRleHQtYmVzdCB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmRpdi1iZXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICByaWdodDogMCU7XG4gIHRvcDogMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcHggNXB4IDJweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDRweDtcbn1cblxuLmRpdi1idG5ib29rIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pbWctZmxhc2gge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbi5kaXYtaW5zdGFsbG1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxNnB4IDhweCAwcHggOHB4O1xufVxuLmRpdi1pbnN0YWxsbWVudCAuaW5zdGFsbG1lbnQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNlYWYwZTc7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggIzMyNmYwZjtcbn1cbi5kaXYtaW5zdGFsbG1lbnQgLmluc3RhbGxtZW50LWNvbnRlbnQgLnRleHQtaW5zdGFsbG1lbnQge1xuICBwYWRkaW5nOiA3cHggMHB4IDZweCAxMnB4O1xuICBjb2xvcjogIzMyNmYwZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRpdi1pbnN0YWxsbWVudCAuaW5zdGFsbG1lbnQtY29udGVudCAudGV4dC1pbnN0YWxsbWVudC1kZXRhaWwge1xuICBwYWRkaW5nOiAwcHggMjRweCA2cHggMTJweDtcbiAgY29sb3I6ICMzMjZmMGY7XG59XG4uZGl2LWluc3RhbGxtZW50IC5pbnN0YWxsbWVudC1jb250ZW50IC5pbnN0YWxsbWVudC1kZXRhaWwge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcGFkZGluZzogMTZweCA0cHg7XG59XG5cbi5idG4tcmV2aWV3IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5tYXJnaW4tbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnBhZGRpbmctMCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5mb250LXNpemUtMTYge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuYS5wcm9ncmVzc2l2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmEucHJvZ3Jlc3NpdmU6bm90KC5yZXBsYWNlKSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuYS5wcm9ncmVzc2l2ZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXI6IDAgbm9uZTtcbn1cblxuYS5wcm9ncmVzc2l2ZSBpbWcucHJldmlldyB7XG4gIGZpbHRlcjogYmx1cigydncpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG5pbWcucHJldmlldyB7XG4gIGZpbHRlcjogYmx1cigydncpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG5hLnByb2dyZXNzaXZlIGltZy5yZXZlYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgYW5pbWF0aW9uOiByZXZlYWwgMXMgZWFzZS1vdXQ7XG59XG5cbmltZy5yZXZlYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcbiAgYW5pbWF0aW9uOiByZXZlYWwgMXMgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgcmV2ZWFsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi50ZXh0LXByaWNlLWZzYWxlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5idG4tYm9vay1mc2FsZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICB3aWR0aDogMTA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sLWZzYWxlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRpdi1zcGxpdC1mc2FsZSB7XG4gIGhlaWdodDogNHB4O1xuICBvcGFjaXR5OiAwLjM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50ZXh0cm9vbUNvbWJvIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/hoteldetail/hoteldetail.ts":
/*!********************************************!*\
  !*** ./src/app/hoteldetail/hoteldetail.ts ***!
  \********************************************/
/*! exports provided: HotelDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelDetailPage", function() { return HotelDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _requestcombo1_requestcombo1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../requestcombo1/requestcombo1 */ "./src/app/requestcombo1/requestcombo1.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _requestcombo_requestcombo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../requestcombo/requestcombo */ "./src/app/requestcombo/requestcombo.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _departurecalendar_departurecalendar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../departurecalendar/departurecalendar */ "./src/app/departurecalendar/departurecalendar.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_occupancy_occupancy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/occupancy/occupancy */ "./src/app/occupancy/occupancy.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _hotelreviewsimage_hotelreviewsimage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./../hotelreviewsimage/hotelreviewsimage */ "./src/app/hotelreviewsimage/hotelreviewsimage.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");






























let HotelDetailPage = class HotelDetailPage {
    constructor(toastCtrl, alertCtrl, zone, modalCtrl, navCtrl, http, loadingCtrl, Roomif, renderer, booking, storage, authService, platform, bookCombo, value, searchhotel, valueGlobal, socialSharing, gf, sanitizer, router, actionsheetCtrl, safariViewController, network, networkProvider, activeRoute, activityService, splashScreen, fb, _mytripservice, _flightService) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.Roomif = Roomif;
        this.renderer = renderer;
        this.booking = booking;
        this.storage = storage;
        this.authService = authService;
        this.platform = platform;
        this.bookCombo = bookCombo;
        this.value = value;
        this.searchhotel = searchhotel;
        this.valueGlobal = valueGlobal;
        this.socialSharing = socialSharing;
        this.gf = gf;
        this.sanitizer = sanitizer;
        this.router = router;
        this.actionsheetCtrl = actionsheetCtrl;
        this.safariViewController = safariViewController;
        this.network = network;
        this.networkProvider = networkProvider;
        this.activeRoute = activeRoute;
        this.activityService = activityService;
        this.splashScreen = splashScreen;
        this.fb = fb;
        this._mytripservice = _mytripservice;
        this._flightService = _flightService;
        this.HotelIDLike = "";
        this.slideData = [];
        this.jsonroom = [];
        this.isAvgPoint = true;
        this.guest = 2;
        this.room1 = 1;
        this.room = 1;
        this.fcbcar = false;
        this.valueComboDetail = [];
        this.arrroom = [];
        this.isShown = false;
        this.isbtnseemore = true;
        this.isShow = false;
        this.arrHotelReviews = [];
        this.isheader = false;
        this.isheader1 = true;
        this.child1 = 0;
        this.child = 0;
        this.adults1 = 2;
        this.adults = 2;
        this.arrchild = [];
        this.arrchild1 = [];
        this.arrchild2 = [];
        this.HotelID = "377594";
        this.ischeckMaxAdults = true;
        this.ischeckbtnreset = false;
        this.ischeckbtn = true;
        this.showpopup = true;
        this.ischeckadults = true;
        this.ischeckchild = false;
        this.ischeckroom = false;
        this.ischeck = false;
        this.countimgrv = 0;
        this.flag = 0;
        this.num = 0;
        this.cocombo = 0;
        this.coutslide = 1;
        this.checkcombocar = 0;
        this.comboDetailList = [];
        this.hotelDetail = [];
        this.hotelRoomClasses = [];
        this.hotelRooms = [];
        this.loginuser = null;
        this.dataListLike = [];
        this.itemlike = false;
        this.ListHotelRelatedPrice = [];
        this.sendRequest = true;
        this.hasComboRoom = false;
        this.changedate = false;
        this.combopriceontitle = null;
        this.penaltyItemSelected = -1;
        this.hotelAvatar = null;
        this.regionId = null;
        this.fs = false;
        this.fc = false;
        this.nm = false;
        this.loadcomplete = false;
        this.showroominfo = false;
        this.loadpricecombodone = false;
        this.warningMaxPax = '';
        this.warningCombofs = '';
        this.warningCombofsIP = '';
        this.dateRegex = /^\/Date\((d|-|.*)\)[\/|\\]$/;
        this.loadmapdone = false;
        this.isexit = false;
        this.usermail = '';
        this.hidden = false;
        this.hotelcode = '';
        this.ischeckcbcar = false;
        this.ischeckcbcarhide = false;
        this.slideOpts = {
            zoom: false,
            loop: true,
            preloadImages: true,
            lazy: true
        };
        this.allowbookcombofc = true;
        this.ischeckBOD = false;
        this.checkBODdone = false;
        this.topsale24Total = 0;
        this.seemoreroomdetaillist = [];
        this.mealtypegrouplist = [];
        this.itemsSk = [1, 2];
        this.allowbookcombofx = true;
        this.includeInsurrance = 1;
        this.InsurranceFee = "";
        this.objroomfsale = [];
        this.ListRoomClasses = [];
        this.arrimgreview = [];
        this.countAllImageReviews = 0;
        this.installmentPriceStr = "";
        this.allowclickcalendar = true;
        this.emptyroom = false;
        this.roomCombo = '';
        this.scrollFunction = (event) => {
            try {
                this.zone.run(() => {
                    if (this.penaltyItemSelected != -1) {
                        this.penaltyItemSelected = -1;
                    }
                });
                let el = document.getElementsByClassName('div-float-arrow');
                let elheader = document.getElementsByClassName('cls-header');
                if (event.detail.currentY > 505) {
                    elheader[0].classList.add('float-arrow-enabled');
                    elheader[0].classList.remove('float-arrow-disabled');
                }
                else {
                    elheader[0].classList.add('float-arrow-disabled');
                    elheader[0].classList.remove('float-arrow-enabled');
                }
                if (event.detail.currentY > 1630) {
                }
                let elbar = document.getElementsByClassName('div-statusbar-float-detail');
                if (elbar.length > 0) {
                    if (event.detail.scrollTop > 100) {
                        elbar[0].classList.add('div-statusbar-float-detail-enabled');
                        elbar[0].classList.remove('div-statusbar-float-detail-disabled');
                    }
                    else {
                        elbar[0].classList.remove('div-statusbar-float-detail-enabled');
                        elbar[0].classList.add('div-statusbar-float-detail-disabled');
                    }
                }
            }
            catch (error) {
                error.page = "hoteldetail";
                error.func = "scrollFunction";
                error.param = "";
                _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, null);
            }
        };
        this.loaddata();
        this.valueGlobal.notRefreshDetail = false;
        this.platform.resume.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.zone.run(() => {
                this.loaddata();
            });
        }));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            yield se.onEnter();
            se.subscription = se.router.events.subscribe((event) => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_17__["NavigationEnd"] && (event.url === '/hoteldetail/' + se.HotelID)) {
                    se.onEnter();
                }
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_17__["NavigationEnd"] && (event.url == '/app/tabs/hoteldetail' || event.url == '/')) {
                    if (se.searchhotel.rootPage == 'likepage') {
                        se.gf.setActivatedTab(2);
                    }
                    else if (se.searchhotel.rootPage == 'combolist' || se.searchhotel.rootPage == 'MyTrip') {
                        se.gf.setActivatedTab(3);
                    }
                    else {
                        se.gf.setActivatedTab(1);
                    }
                }
            });
        });
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.storage.get('auth_token').then(auth_token => {
                se.loginuser = auth_token;
            });
            se.storage.get('email').then(email => {
                se.usermail = email;
            });
            if (se.searchhotel.rootPage == 'login') {
                if (se.HotelIDLike) {
                    se.likeItem();
                }
                else {
                    se.updateLikeStatus();
                }
                se.valueGlobal.notRefreshDetail = false;
                se.loaddata();
            }
            if (se.valueGlobal.backValue == 'popupinfobkg') {
                se.hotelRoomClasses = [];
                se.loadcomplete = false;
                se.valueGlobal.backValue = '';
                se.valueGlobal.notRefreshDetail = false;
                se.emptyroom = false;
                se.loaddata();
            }
            if (se.valueGlobal.backValue == 'flightcombo'
                && ((se.searchhotel.CheckInDate && new Date(se.cin).toLocaleDateString() != new Date(se.searchhotel.CheckInDate).toLocaleDateString())
                    || se.searchhotel.CheckOutDate && new Date(se.cout).toLocaleDateString() != new Date(se.searchhotel.CheckOutDate).toLocaleDateString()
                    || se.searchhotel.adult != se.adults || se.searchhotel.child != se.child)) {
                se.loaddata();
                se.valueGlobal.backValue = '';
                se.valueGlobal.notRefreshDetail = false;
            }
            if (se.searchhotel.rootPage == 'likepage') {
                se.gf.setActivatedTab(2);
            }
            else if (se.searchhotel.rootPage == 'combolist' || se.searchhotel.rootPage == 'MyTrip') {
                se.gf.setActivatedTab(3);
            }
            else {
                se.gf.setActivatedTab(1);
            }
            se.splashScreen.hide();
        });
    }
    loaddata() {
        this.storage.get('auth_token').then(auth_token => {
            this.loginuser = auth_token;
        });
        if (this.searchhotel.isRefreshDetail) {
            this.HotelID = this.searchhotel.hotelID ? this.searchhotel.hotelID : (this.searchhotel.gbitem ? this.searchhotel.gbitem.hotelId : this.searchhotel.hotelID);
        }
        else {
            if (this.searchhotel.rootPage == "listpage" || this.searchhotel.rootPage == "topdeal" || this.searchhotel.rootPage == "listmood" || this.searchhotel.rootPage == "likepage" || this.searchhotel.backPage == "roompaymentselect" || this.searchhotel.backPage == "roompaymentselect-ean" || this.searchhotel.rootPage == "MyTrip" || this.searchhotel.rootPage == "combolist" || this.searchhotel.rootPage == "topdeallist") {
                this.HotelID = this.searchhotel.hotelID;
            }
            else if (this.searchhotel.rootPage == "mainpage") {
                this.HotelID = (this.searchhotel.gbitem ? this.searchhotel.gbitem.hotelId : this.searchhotel.hotelID);
            }
            else if (this.activeRoute.snapshot.paramMap.get('id')) {
                this.HotelID = this.activeRoute.snapshot.paramMap.get('id');
            }
        }
        this.checkBODdone = false;
        this.hasComboRoom = false;
        this.location = this.bookCombo.location;
        if (this.searchhotel && this.searchhotel.CheckInDate) {
            if (this.searchhotel.adult) {
                this.guest = this.searchhotel.adult + (this.searchhotel.child ? this.searchhotel.child : 0);
                this.adults = this.searchhotel.adult;
            }
            if (this.searchhotel.child == 0) {
                this.child = 0;
            }
            else {
                this.child = this.searchhotel.child;
            }
            if (this.searchhotel.roomnumber) {
                this.room = this.searchhotel.roomnumber;
            }
            this.arrchild = [];
            if (this.searchhotel.arrchild) {
                this.arrchild = this.searchhotel.arrchild;
            }
            this.totalAdult = this.adults;
            for (let i = 0; i < this.arrchild.length; i++) {
                if (this.arrchild[i].numage >= 4) {
                    this.totalAdult++;
                }
            }
            if (this.searchhotel.CheckInDate && moment__WEBPACK_IMPORTED_MODULE_4__(this.searchhotel.CheckInDate).diff(moment__WEBPACK_IMPORTED_MODULE_4__(moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD')), 'days') >= 0) {
                this.cin = this.searchhotel.CheckInDate;
                this.cout = this.searchhotel.CheckOutDate;
                this.datecin = new Date(this.searchhotel.CheckInDate);
                this.datecout = new Date(this.searchhotel.CheckOutDate);
                this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecin).format('DD-MM-YYYY');
                this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecout).format('DD-MM-YYYY');
                this.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecin).format('DD/MM');
                this.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecout).format('DD/MM');
                this.bookCombo.CheckInDate = this.searchhotel.CheckInDate;
                this.bookCombo.CheckOutDate = this.searchhotel.CheckOutDate;
            }
            else {
                this.cin = new Date();
                var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
                var datein = new Date(rescin);
                this.cin = moment__WEBPACK_IMPORTED_MODULE_4__(datein).format('YYYY-MM-DD');
                this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(datein).format('DD-MM-YYYY');
                this.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(datein).format('DD/MM');
                this.datecin = new Date(rescin);
                this.cout = new Date();
                var res = this.cout.setTime(this.cout.getTime() + (2 * 24 * 60 * 60 * 1000));
                var date = new Date(res);
                this.cout = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('YYYY-MM-DD');
                this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('DD-MM-YYYY');
                this.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('DD/MM');
                this.datecout = new Date(res);
                this.searchhotel.CheckInDate = this.cin;
                this.searchhotel.CheckOutDate = this.cout;
            }
        }
        else {
            this.storage.get('cacheSearchHotelInfo').then((data) => {
                if (data && data.checkInDate && moment__WEBPACK_IMPORTED_MODULE_4__(data.checkInDate).diff(moment__WEBPACK_IMPORTED_MODULE_4__(moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD')), 'days') >= 0) {
                    if (data.adult) {
                        this.guest = data.adult + (data.child ? data.child : 0);
                        this.adults = data.adult;
                    }
                    if (data.child == 0) {
                        this.child = 0;
                    }
                    else {
                        this.child = data.child;
                    }
                    if (data.roomNumber) {
                        this.room = data.roomNumber;
                    }
                    this.arrchild = [];
                    if (data.childAge) {
                        this.arrchild = data.childAge;
                    }
                    this.totalAdult = this.adults;
                    for (let i = 0; i < this.arrchild.length; i++) {
                        if (this.arrchild[i].numage >= 4) {
                            this.totalAdult++;
                        }
                    }
                    this.cin = data.checkInDate;
                    this.cout = data.checkOutDate;
                    this.datecin = new Date(data.checkInDate);
                    this.datecout = new Date(data.checkOutDate);
                    this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecin).format('DD-MM-YYYY');
                    this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecout).format('DD-MM-YYYY');
                    this.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecin).format('DD/MM');
                    this.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(this.datecout).format('DD/MM');
                    this.bookCombo.CheckInDate = data.checkInDate;
                    this.bookCombo.CheckOutDate = data.checkOutDate;
                }
                else {
                    this.cin = new Date();
                    var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
                    var datein = new Date(rescin);
                    this.cin = moment__WEBPACK_IMPORTED_MODULE_4__(datein).format('YYYY-MM-DD');
                    this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(datein).format('DD-MM-YYYY');
                    this.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(datein).format('DD/MM');
                    this.datecin = new Date(rescin);
                    this.cout = new Date();
                    var res = this.cout.setTime(this.cout.getTime() + (2 * 24 * 60 * 60 * 1000));
                    var date = new Date(res);
                    this.cout = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('YYYY-MM-DD');
                    this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('DD-MM-YYYY');
                    this.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('DD/MM');
                    this.datecout = new Date(res);
                    this.searchhotel.CheckInDate = this.cin;
                    this.searchhotel.CheckOutDate = this.cout;
                }
            });
        }
        this.gf.setCacheSearchHotelInfo({ checkInDate: this.searchhotel.CheckInDate, checkOutDate: this.searchhotel.CheckOutDate, adult: this.searchhotel.adult, child: this.searchhotel.child, childAge: this.searchhotel.arrchild, roomNumber: this.searchhotel.roomnumber });
        var date1 = new Date(this.cin);
        var date2 = new Date(this.cout);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        this.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
        this.loadTopSale24h(null);
        if (!this.valueGlobal.notRefreshDetail) {
            this.presentLoading();
        }
        this.loadHotelImageReviews();
    }
    loadTopSale24h(id) {
        var se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/TopSale24hByHotel?hotelId=' + (id ? id : se.HotelID);
        var options = {
            method: 'GET',
            url: url,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U',
            },
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
            if (error) {
                error.page = "hoteldetail";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
            }
            if (response.statusCode == 200) {
                var res = JSON.parse(body);
                se.topsale24Total = res.total;
            }
        });
    }
    hidetopbar() {
        var se = this;
        let el = document.getElementsByClassName('div-statusbar-float');
        el[0].classList.remove('float-statusbar-enabled');
        el[0].classList.add('float-statusbar-disabled');
    }
    ionViewWillEnter() {
        var se = this;
        se.hidetopbar();
        if (!se.valueGlobal.notRefreshDetail) {
            se.zone.run(() => {
                se.loadpricecombodone = false;
                se.loadcomplete = false;
                se.emptyroom = false;
                se.hotelRoomClasses = [];
                se.flashSaleEndDate = null;
                se.allowbookcombofc = true;
                se.searchhotel.ischeckBOD = false;
                se.ischeckBOD = false;
                se.checkBODdone = false;
            });
            se.loaddata();
        }
        se.storage.get('email').then(email => {
            se.usermail = email;
        });
        if ((se.searchhotel.CheckInDate && moment__WEBPACK_IMPORTED_MODULE_4__(new Date(se.cin)).format('DD-MM-YYYY') != moment__WEBPACK_IMPORTED_MODULE_4__(new Date(se.searchhotel.CheckInDate)).format('DD-MM-YYYY'))
            || se.searchhotel.CheckOutDate && moment__WEBPACK_IMPORTED_MODULE_4__(new Date(se.cout)).format('DD-MM-YYYY') != moment__WEBPACK_IMPORTED_MODULE_4__(new Date(se.searchhotel.CheckOutDate)).format('DD-MM-YYYY')) {
            se.zone.run(() => {
                se.loadpricecombodone = false;
                se.loadcomplete = false;
                se.emptyroom = false;
                se.hotelRoomClasses = [];
                se.flashSaleEndDate = null;
                se.allowbookcombofc = true;
                se.searchhotel.ischeckBOD = false;
                se.ischeckBOD = false;
                se.checkBODdone = false;
                se.cin = se.searchhotel.CheckInDate;
                se.cout = se.searchhotel.CheckOutDate;
                se.datecin = new Date(se.searchhotel.CheckInDate);
                se.datecout = new Date(se.searchhotel.CheckOutDate);
                se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM-YYYY');
                se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM-YYYY');
                se.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD/MM');
                se.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD/MM');
                se.bookCombo.CheckInDate = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('YYYY-MM-DD');
                se.bookCombo.CheckOutDate = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('YYYY-MM-DD');
                se.changedate = true;
                se.hasComboRoom = false;
                se.comboprice = se.combopriceontitle;
                se.showpopup = true;
                se.ischeck = true;
                se.guest = se.adults + se.child;
                var date1 = new Date(this.cin);
                var date2 = new Date(this.cout);
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                this.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                if (se.comboid) {
                    se.getDetailCombo(se.comboid);
                }
                se.getdataroom();
            });
        }
        else if (se.fc && !se.ischeckBOD && !se.checkBODdone && se.comboDetail && se.comboid) {
            se.getDetailCombo(se.comboid);
        }
    }
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }
    }
    closeModal() {
        var se = this;
        se.zone.run(() => {
            se.ischeck = true;
            se.showpopup = true;
            se.loadcomplete = true;
        });
    }
    openmnu() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.loadcomplete) {
                this.presentToastwarming('Giá đang được cập nhật, xin vui lòng đợi trong giây lát!');
                return;
            }
            this.zone.run(() => {
                this.loadpricecombodone = false;
                this.loadcomplete = false;
                this.hotelRoomClasses = [];
                this.flashSaleEndDate = null;
                this.allowbookcombofc = true;
                this.allowbookcombofx = true;
                this.searchhotel.ischeckBOD = false;
                this.ischeckBOD = false;
                this.checkBODdone = false;
                this.emptyroom = true;
            });
            this.searchhotel.ChildAgeTo = this.ChildAgeTo;
            this.hotelRoomClasses = [];
            const modal = yield this.modalCtrl.create({
                component: src_app_occupancy_occupancy__WEBPACK_IMPORTED_MODULE_18__["OccupancyPage"],
            });
            this.allowbookcombofc = true;
            this.allowbookcombofx = true;
            this.gf.setParams(true, 'requestcombo');
            modal.present();
            modal.onDidDismiss().then((data) => {
                var se = this;
                se.zone.run(() => {
                    se.hotelRoomClasses = [];
                    se.emptyroom = false;
                    se.loadpricecombodone = false;
                    se.loadcomplete = false;
                    se.isheader = false;
                    se.isShown = false;
                    if (se.searchhotel.adult) {
                        se.guest = se.searchhotel.adult + se.searchhotel.child;
                        se.child = se.searchhotel.child;
                        se.adults = se.searchhotel.adult;
                        se.child = se.searchhotel.child;
                    }
                    else {
                        se.guest = se.adults1 + se.child1;
                        se.child = se.child1;
                    }
                    if (se.guest)
                        if (se.searchhotel.roomnumber || se.room) {
                            se.room = se.searchhotel.roomnumber ? se.searchhotel.roomnumber : se.room;
                            se.room1 = se.room;
                        }
                        else {
                            se.room == se.room1;
                        }
                    se.arrchild = [];
                    if (se.searchhotel.arrchild && se.searchhotel.arrchild.length > 0) {
                        for (let i = 0; i < se.searchhotel.arrchild.length; i++) {
                            se.arrchild.push(se.searchhotel.arrchild[i]);
                        }
                    }
                    se.totalAdult = se.adults;
                    for (let i = 0; i < se.arrchild.length; i++) {
                        if (se.arrchild[i].numage >= 4) {
                            se.totalAdult++;
                        }
                    }
                    if (se.comboid) {
                        se.getDetailCombo(se.comboid);
                    }
                    se.checkPriceHotelDetail().then((check) => {
                        if (check) {
                            se.getdataroom();
                        }
                        else {
                            se.hotelRoomClasses = [];
                            se.emptyroom = true;
                            se.ischeckoutofroom = false;
                            se.loadcomplete = true;
                            se.ischeck = true;
                            se.allowbookcombofc = false;
                            se.allowbookcombofx = false;
                        }
                    });
                });
                se.searchhotel.changeInfoHotelList.emit(1);
            });
        });
    }
    done() {
        var se = this;
        se.room = se.room1;
        se.adults = se.adults1;
        se.child = se.child1;
        se.arrchild = [];
        for (let i = 0; i < se.arrchild2.length; i++) {
            se.arrchild.push(se.arrchild2[i]);
        }
        se.searchhotel.adult = se.adults;
        se.searchhotel.child = se.child;
        se.searchhotel.roomnumber = se.room;
        se.searchhotel.arrchild = se.arrchild;
        se.zone.run(() => {
            se.ischeck = false;
            se.showpopup = true;
            se.isheader = false;
            se.guest = se.adults + se.child;
            se.scrollToTopwithvalue1();
        });
    }
    loadMap() {
        let posMaceio = { lat: this.Latitude, lng: this.Longitude };
        this.mapGoogle = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 12,
            center: posMaceio,
            mapTypeId: 'roadmap'
        });
        this.mapGoogle.setCenter(posMaceio);
        var latLng = new google.maps.LatLng(this.Latitude, this.Longitude);
        var marker = new google.maps.Marker({
            position: latLng,
            map: this.mapGoogle,
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(this.mapGoogle, marker);
        });
    }
    doInfinite(infiniteScroll) {
        this.isShown = true;
        infiniteScroll.complete();
    }
    scrollToTop() {
        this.content.scrollToTop(500);
    }
    scrollToTopwithvalue() {
        this.zone.run(() => {
            this.isShown = false;
            this.content.scrollToTop(50);
            this.isheader = false;
        });
    }
    scrollToTopwithvalue1() {
        this.zone.run(() => {
            this.isShown = false;
            this.content.scrollToTop(50);
            this.isheader = false;
            this.presentLoading();
        });
    }
    scrollToTop1() {
        this.zone.run(() => {
            this.isShown = false;
            this.content.scrollToTop(50);
            this.isheader = false;
        });
    }
    strip_html_tags(str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }
    presentLoading() {
        var se = this;
        se.storage.get('hoteldetail_' + se.HotelID + "_" + se.cindisplay + "_" + se.coutdisplay).then((data) => {
            if (data) {
                se.loadHotelDetail(data, false);
                Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                    se.getdataRefresh();
                }, 1000 * 60);
            }
            else {
                se.getdata(false);
            }
        });
    }
    loadHotelImageReviews() {
        var se = this;
        if (se.HotelID) {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetHotelImageReviews?hotelid=' + se.HotelID;
            se.gf.RequestApi('GET', url, {}, {}, 'hoteldetail', 'GetHotelImageReviews').then((data) => {
                if (data.data) {
                    se.zone.run(() => data.data.sort(function (a, b) {
                        let direction = -1;
                        if (a["id"] * 1 > b["id"] * 1) {
                            return 1 * direction;
                        }
                        else {
                            return -1 * direction;
                        }
                    }));
                    Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                        se.storage.set('hotelimagereviews_' + se.HotelID, data.data);
                        se.pushAllImageReviews(data.data);
                    }, 300);
                }
            });
        }
    }
    pushAllImageReviews(data) {
        var se = this;
        se.arrimgreview = [];
        for (let i = 0; i < 3; i++) {
            se.arrimgreview.push(data[i]);
        }
        if (data.length > 3) {
            se.countimgrv = data.length - 3;
        }
    }
    getdataRefresh() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.zone.run(() => {
                se.getdata(true);
            });
        });
    }
    getdata(isloaddata) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlPost + "/mhoteldetail/" + this.HotelID;
            var se = this;
            var options = {
                method: 'POST',
                url: url,
                timeout: 180000, maxAttempts: 5, retryDelay: 2000,
            };
            requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "hoteldetail",
                        func: "loaddata",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "hoteldetail";
                    error.func = "loaddata";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                }
                if (response.statusCode == 200) {
                    let jsondata = JSON.parse(body);
                    se.hotelcode = jsondata.Code;
                    se.storage.get('hoteldetail_' + se.HotelID + "_" + se.cindisplay + "_" + se.coutdisplay).then((data) => {
                        if (data) {
                            se.storage.remove('hoteldetail_' + se.HotelID + "_" + se.cindisplay + "_" + se.coutdisplay).then((s) => {
                                se.storage.set('hoteldetail_' + se.HotelID + "_" + se.cindisplay + "_" + se.coutdisplay, jsondata);
                            });
                        }
                        else {
                            se.storage.set('hoteldetail_' + se.HotelID + "_" + se.cindisplay + "_" + se.coutdisplay, jsondata);
                        }
                    });
                    se.loadHotelDetail(jsondata, isloaddata);
                    if (!isloaddata) {
                        se.objectsearch = { 'fb_content_type': 'hotel', 'fb_content_id': jsondata.Code,
                            'city': jsondata.Province ? jsondata.Province : se.searchhotel.OriginalCity, 'region': jsondata.District, 'country': 'Viet Nam', 'checkin_date': se.searchhotel.CheckInDate, 'checkout_date ': se.searchhotel.CheckOutDate, 'num_adults': se.searchhotel.adult, 'num_children': (se.searchhotel.child ? se.searchhotel.child : 0) };
                    }
                }
                else {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                }
            });
        });
    }
    loadHotelDetail(jsondata, isloaddata) {
        var se = this;
        se.hotelcode = jsondata.Code;
        se.ChildAgeTo = jsondata.ChildAgeTo;
        if (jsondata.Combos) {
            se.valueGlobal.titlecombo = jsondata.Combos.MiniTitle;
        }
        se.gf.googleAnalytion('hoteldetail', 'Search', jsondata.Code + '|' + se.cin + '|' + se.cout);
        se.updateLikeStatus();
        se.objDetail = jsondata;
        se.hotelDetail = [];
        se.hotelDetail.push(jsondata);
        se.hotelDetail = se.hotelDetail[0];
        se.hotelname = jsondata.Name;
        se.hotelurl = "https://www.ivivu.com" + jsondata.Url;
        let link = "https://maps.google.com/maps?q=" + se.hotelname + "&hl=es;z=16&amp&output=embed";
        se.linkGoogleMap = se.sanitizer.bypassSecurityTrustResourceUrl(link);
        se.hotelAvatar = (jsondata.Avatar.toLocaleString().trim().indexOf("http") != -1) ? jsondata.Avatar : 'https:' + jsondata.Avatar;
        se.regionId = jsondata.RegionId;
        se.bookCombo.HotelLink = se.hotelurl;
        se.bookCombo.Avatar = se.hotelAvatar;
        se.bookCombo.RegionId = se.regionId;
        se.bookCombo.HotelName = se.hotelname;
        se.bookCombo.Hotelid = se.HotelID;
        se.booking.CheckinTime = jsondata.CheckinTime;
        se.booking.CheckoutTime = jsondata.CheckoutTime;
        se.id1 = { id: se.HotelID };
        if (!isloaddata) {
            if (jsondata.HotelImages.length > 0 && (!se.slideData || se.slideData.length == 0)) {
                se.slideData = jsondata.HotelImages;
            }
            else {
                var item = { LinkImage: jsondata.Avatar };
                se.slideData.push(item);
            }
        }
        if (!isloaddata) {
            for (let index = 0; index < se.slideData.length; index++) {
                if (index == 0) {
                    se.imgHotel = (se.slideData[index].LinkImage.toLocaleString().trim().indexOf("http") != -1) ? se.slideData[index].LinkImage : 'https:' + se.slideData[index].LinkImage;
                }
                se.slideData[index].LinkImage = (se.slideData[index].LinkImage.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + se.slideData[index].LinkImage : se.slideData[index].LinkImage;
            }
            se.ischeck = true;
        }
        se.lengthslide = se.slideData.length;
        se.name = jsondata.Name;
        se.json = jsondata.Rating;
        se.AvgPoint = jsondata.AvgPoint;
        if (se.AvgPoint && se.AvgPoint.toString().length == 1) {
            se.AvgPoint = se.AvgPoint + ".0";
        }
        se.Latitude = jsondata.Latitude;
        se.Longitude = jsondata.Longitude;
        se.Address = jsondata.Address;
        se.ExcludeVAT = jsondata.ExcludeVAT;
        se.ischeckcombo = false;
        if ((se.content && isloaddata) || (se.content && se.searchhotel.isRefreshDetail)) {
            se.content.scrollToTop(300);
            if (se.searchhotel.isRefreshDetail) {
                se.searchhotel.isRefreshDetail = false;
            }
        }
        if (jsondata.Combos) {
            se.sendRequest = false;
            se.ischeckcombo = true;
        }
        if (jsondata.ComboPromtion || jsondata.Combos) {
            se.nm = (jsondata.ComboPromtion && jsondata.ComboPromtion.Description && jsondata.ComboPromtion.Title);
            se.sendRequest = false;
            se.cocombo = 1;
            se.titlecombo = jsondata.ComboPromtion && jsondata.ComboPromtion.Title ? jsondata.ComboPromtion.Title : (jsondata.Combos ? jsondata.Combos.Title : '');
            se.notecombo = jsondata.ComboPromtion && jsondata.ComboPromtion.Note ? (jsondata.ComboPromtion.Note || '') : (jsondata.Combos ? jsondata.Combos.Note : '');
            se.combopriceontitle = jsondata.ComboPromtion && jsondata.ComboPromtion.Description ? jsondata.ComboPromtion.Price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : (jsondata.Combos ? jsondata.Combos.Price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : '');
            se.comboprice = jsondata.ComboPromtion && jsondata.ComboPromtion.Description ? jsondata.ComboPromtion.Price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : (jsondata.Combos ? jsondata.Combos.Price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : '');
            if (jsondata.Combos) {
                se.PriceFor = jsondata.Combos.PriceFor;
                se.SpecialNote = jsondata.Combos.SpecialNote ? jsondata.Combos.SpecialNote.replace(/\r\n/g, "") : "";
            }
            se.Description = jsondata.ComboPromtion && jsondata.ComboPromtion.Description ? jsondata.ComboPromtion.Description.replace(/\r\n/g, "<br/>") : (jsondata.Combos ? jsondata.Combos.Description.replace(/\r\n/g, "<br/>") : '');
            se.Description = se.Description.replace("Trọn gói bao gồm:", "");
            se.Description = se.Description.replace(/#r/g, "");
            se.Description = se.Description.replace(/r#/g, "");
            se.Description = se.Description.replace(/#m/g, "");
            se.Description = se.Description.replace(/m#/g, "");
            se.Description = se.Description.replace(/#n/g, "");
            se.Description = se.Description.replace(/n#/g, "");
            se.ischeckcombo = true;
            se.ComboDayNum = jsondata.Combos ? jsondata.Combos.ComboDayNum : 1;
            se.bookCombo.tolocation = jsondata.Combos ? jsondata.Combos.ArrivalCode : '';
            se.valueComboDetail = [];
            if (jsondata.ComboPromtion && jsondata.ComboPromtion.Id) {
                se.comboid = jsondata.ComboPromtion.Id;
            }
            if (jsondata.Combos && jsondata.Combos.ComboDetail) {
                se.comboid = jsondata.Combos.Id;
                se.getDetailCombo(jsondata.Combos.Id);
            }
        }
        if ((jsondata.ComboPromtion && !jsondata.ComboPromtion.Description && !jsondata.Combos) || (!jsondata.ComboPromtion && jsondata.Combos && !jsondata.Combos.Description)) {
            se.ischeckcombo = false;
        }
        se.HotelReviews = jsondata.HotelReviews;
        se.HotelRelated = jsondata.HotelRelated;
        for (let index = 0; index < se.HotelRelated.length; index++) {
            if (se.HotelRelated[index].Avatar) {
                se.HotelRelated[index].Avatar = (se.HotelRelated[index].Avatar.toLocaleString().trim().indexOf("http") != -1) ? se.HotelRelated[index].Avatar : 'https:' + se.HotelRelated[index].Avatar;
            }
            else {
                se.HotelRelated[index].Avatar = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-104x110.png";
            }
            switch (se.HotelRelated[index].Rating) {
                case 50:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_5.svg";
                    break;
                case 45:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_4.5.svg";
                    break;
                case 40:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_4.svg";
                    break;
                case 35:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_3.5.svg";
                    break;
                case 30:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_3.svg";
                    break;
                case 25:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_2.5.svg";
                    break;
                case 20:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_2.svg";
                    break;
                case 15:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_1.5.svg";
                    break;
                case 10:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_1.svg";
                    break;
                case 5:
                    se.HotelRelated[index].Rating = "./assets/star/ic_star_0.5.svg";
                    break;
                default:
                    break;
            }
            se.booking.RatingHotel = se.HotelRelated[index].Rating;
            if (se.HotelRelated[index].SubLocation && se.HotelRelated[index].SubLocation.indexOf(',') != -1) {
                se.HotelRelated[index].SubLocation = se.HotelRelated[index].SubLocation.substring(0, se.HotelRelated[index].SubLocation.length - 1);
            }
        }
        se.getPriceHotelRelated();
        se.numHotelReviews = jsondata.NumOfReview;
        se.arrHotelReviews = [];
        if (se.numHotelReviews > 0) {
            if (se.numHotelReviews < 3) {
                se.HotelReviews[0].DateStayed = moment__WEBPACK_IMPORTED_MODULE_4__(se.HotelReviews[0].DateStayed).format('DD-MM-YYYY');
                se.arrHotelReviews.push(se.HotelReviews[0]);
            }
            else {
                for (let index = 0; index < 3; index++) {
                    if (moment__WEBPACK_IMPORTED_MODULE_4__(se.HotelReviews[index].DateStayed).format('DD-MM-YYYY') != "Invalid date") {
                        se.HotelReviews[index].DateStayed = moment__WEBPACK_IMPORTED_MODULE_4__(se.HotelReviews[index].DateStayed).format('DD-MM-YYYY');
                    }
                    else {
                        se.HotelReviews[index].DateStayed = se.HotelReviews[index].DateStayed;
                    }
                    se.HotelReviews[index].ReviewPoint = Math.round(se.HotelReviews[index].ReviewPoint * 100) / 100;
                    se.arrHotelReviews.push(se.HotelReviews[index]);
                }
            }
        }
        switch (se.json) {
            case 50:
                se.json = "./assets/star/ic_star_5.svg";
                break;
            case 45:
                se.json = "./assets/star/ic_star_4.5.svg";
                break;
            case 40:
                se.json = "./assets/star/ic_star_4.svg";
                break;
            case 35:
                se.json = "./assets/star/ic_star_3.5.svg";
                break;
            case 30:
                se.json = "./assets/star/ic_star_3.svg";
                break;
            case 25:
                se.json = "./assets/star/ic_star_2.5.svg";
                break;
            case 20:
                se.json = "./assets/star/ic_star_2.svg";
                break;
            case 15:
                se.json = "./assets/star/ic_star_1.5.svg";
                break;
            case 10:
                se.json = "./assets/star/ic_star_1.svg";
                break;
            case 5:
                se.json = "./assets/star/ic_star_0.5.svg";
                break;
            default:
                break;
        }
        if (se.slideData && se.slideData.length > 0) {
            se.ischeck = true;
            se.clearBlurEffect();
            se.zone.run(() => se.slideData.sort(function (a, b) {
                return a['SortOrder'] - b['SortOrder'];
            }));
        }
        ;
        if (se.loader) {
            se.loader.dismiss();
        }
        if (!isloaddata) {
            se.checkPriceHotelDetail().then((check) => {
                if (check) {
                    se.getdataroom();
                    se.zone.run(() => {
                        if (jsondata.Combos) {
                            se.fc = jsondata.Combos.ComboType == "Vé Máy Bay";
                            se.fs = jsondata.Combos.ComboType == "Flash Sale";
                            se.fcbcar = jsondata.Combos.ComboType == "Combo Xe";
                        }
                        else {
                            se.fs = false;
                            se.fc = false;
                        }
                    }, 100);
                }
                else {
                    se.hotelRoomClasses = [];
                    se.emptyroom = true;
                    se.ischeckoutofroom = false;
                    se.loadcomplete = true;
                    se.ischeck = true;
                    se.allowbookcombofc = false;
                    se.allowbookcombofx = false;
                }
            });
        }
        Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
            se.clearBlurEffect();
        }, 500);
    }
    checkPriceHotelDetail() {
        var se = this;
        var result = true;
        return new Promise((resolve, reject) => {
            var options;
            var form = {
                CheckInDate: se.cin,
                CheckOutDate: se.cout,
                CityID: '',
                CountryID: '',
                HotelID: se.HotelID,
                IsLeadingPrice: '1',
                IsPackageRate: 'false',
                NationalityID: '82',
                ReferenceClient: '',
                RoomNumber: se.room,
                'RoomsRequest[0].RoomIndex': '1',
                Supplier: 'IVIVU',
                dataKey: '',
                'RoomsRequest[0][Adults][value]': se.adults ? se.adults : "2",
                'RoomsRequest[0][Child][value]': se.child ? se.child : "0",
                IsFenced: se.loginuser ? true : false,
                GetVinHms: 1,
                GetSMD: 1
            };
            if (se.searchhotel.arrchild) {
                for (var i = 0; i < se.searchhotel.arrchild.length; i++) {
                    form["RoomsRequest[0][AgeChilds][" + i + "][value]"] = +se.searchhotel.arrchild[i].numage;
                }
            }
            options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelSearchReqContractAppV2',
                timeout: 180000, maxAttempts: 5, retryDelay: 2000,
                async: true,
                headers: {},
                form
            };
            requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "hoteldetail",
                        func: "checkPriceHotelDetail",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                    result = false;
                }
                if (error) {
                    error.page = "hoteldetail";
                    error.func = "checkPriceHotelDetail";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                    result = false;
                }
                ;
                let jsonhtprice1 = JSON.parse(body);
                let key = se.HotelID.toString() + "_" + se.cin.toString() + "_" + se.cout.toString() + "_" + se.adults.toString() + "_" + (se.child ? se.child.toString() : "0");
                se.activityService.HotelSearchReqContract = { id: key, value: JSON.parse(body) };
                if (jsonhtprice1.Hotels) {
                    result = true;
                }
                else {
                    result = false;
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                }
                resolve(result);
            });
        });
    }
    getPriceHotelRelated() {
        var se = this;
        let listhotels = "";
        let listhotelIdInternal = "";
        for (let i = 0; i < se.HotelRelated.length; i++) {
            if (i == se.HotelRelated.length - 1) {
                listhotels = listhotels + se.HotelRelated[i].Id;
                listhotelIdInternal = listhotelIdInternal + se.HotelRelated[i].Id;
            }
            else {
                listhotels = listhotels + se.HotelRelated[i].Id + ",";
                listhotelIdInternal = listhotelIdInternal + se.HotelRelated[i].Id + ",";
            }
        }
        var options;
        var form = {
            RoomNumber: '1',
            IsLeadingPrice: '',
            ReferenceClient: '',
            Supplier: 'IVIVU',
            CheckInDate: se.searchhotel.CheckInDate ? se.searchhotel.CheckInDate : se.cin,
            CheckOutDate: se.searchhotel.CheckOutDate ? se.searchhotel.CheckOutDate : se.cout,
            CountryID: '',
            CityID: '',
            NationalityID: '',
            'RoomsRequest[0][RoomIndex]': '0',
            'RoomsRequest[0][Adults][value]': se.searchhotel.adult ? se.searchhotel.adult : se.adults,
            'RoomsRequest[0][Child][value]': se.searchhotel.child ? se.searchhotel.child : se.child,
            StatusMethod: '2',
            'CityCode': se.authService.region,
            CountryCode: 'VN',
            NoCache: 'false',
            SearchType: '2',
            HotelIds: listhotels,
            HotelIdInternal: listhotelIdInternal
        };
        if (this.searchhotel.arrchild) {
            for (var i = 0; i < this.searchhotel.arrchild.length; i++) {
                form["RoomsRequest[0][AgeChilds][" + i + "][value]"] = +this.searchhotel.arrchild[i].numage;
            }
        }
        options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelsSearchPriceAjax',
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
            headers: {},
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "hoteldetail",
                    func: "getPriceHotelRelated",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "hoteldetail";
                error.func = "getPriceHotelRelated";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            se.zone.run(() => {
                se.ListHotelRelatedPrice = [];
                let jsonhtprice1 = JSON.parse(body);
                if (jsonhtprice1.HotelListResponse) {
                    jsonhtprice1 = jsonhtprice1.HotelListResponse.HotelList.HotelSummary;
                    for (var i = 0; i < jsonhtprice1.length; i++) {
                        se.ListHotelRelatedPrice.push(jsonhtprice1[i]);
                    }
                    Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                        se.zone.run(() => se.fillDataPrice());
                    }, 300);
                }
            });
        });
    }
    fillDataPrice() {
        for (let index = 0; index < this.HotelRelated.length; index++) {
            for (let i = 0; i < this.ListHotelRelatedPrice.length; i++) {
                if (this.HotelRelated[index] && this.HotelRelated[index].Id == this.ListHotelRelatedPrice[i].HotelId) {
                    this.HotelRelated[index].MinPriceOTAStr = this.ListHotelRelatedPrice[i].MinPriceOTAStr;
                    this.HotelRelated[index].MinPriceTAStr = this.ListHotelRelatedPrice[i].MinPriceTAStr;
                    this.HotelRelated[index].RoomNameSubString = this.ListHotelRelatedPrice[i].RoomNameSubString;
                    this.HotelRelated[index].PromotionDescription = this.ListHotelRelatedPrice[i].PromotionDescription;
                    this.HotelRelated[index].PromotionDescriptionSubstring = this.ListHotelRelatedPrice[i].PromotionDescriptionSubstring;
                }
            }
        }
    }
    checkExistsItem(id) {
        var co = 0;
        if (id) {
            for (let i = 0; i < this.HotelRelated.length; i++) {
                if (id == this.HotelRelated[i].HotelId) {
                    co = 1;
                    break;
                }
            }
        }
        return co;
    }
    convertWCFStringDate(strDate) {
        var matched = this.dateRegex.exec(strDate);
        if (matched) {
            var parts = matched[1].split(/[-+,.]/);
            return new Date(parts[0] ? +parts[0] : 0 - +parts[1]);
        }
    }
    getDetailCombo(comboid) {
        var se = this;
        se.ischeckcbcarhide = false;
        var optionscombo = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/ComboDetailList?comboId=' + (comboid ? comboid : se.comboid) + '&checkin=' + moment__WEBPACK_IMPORTED_MODULE_4__(this.cin).format('DD-MM-YYYY') + '&checkout=' + moment__WEBPACK_IMPORTED_MODULE_4__(this.cout).format('DD-MM-YYYY'),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U',
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_3__(optionscombo, function (error, response, body) {
            if (!error) {
                var obj = JSON.parse(body);
                se.warningCombofs = '';
                se.warningCombofsIP = '';
                se.searchhotel.destinationCity = obj.arrivalName;
                if (obj.comboDetail) {
                    se.bookCombo.transportDepartTime = obj.comboDetail.transportDepartTime;
                    se.bookCombo.transportReturnTime = obj.comboDetail.transportReturnTime;
                    se.combopriceontitle = obj.comboDetail.totalPriceSale ? obj.comboDetail.totalPriceSale.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : obj.comboDetail.price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                }
                else {
                    se.allowbookcombofc = false;
                    se.allowbookcombofx = false;
                }
                var item = obj.comboDetail;
                var itemList = obj.list;
                se.comboDetail = obj;
                se.dateofcombo = se.comboDetail.dateOfCombo;
                se.hasInsurrance = item ? item.isInsurance : false;
                se.zone.run(() => {
                    se.changedate = false;
                    se.comboDetailList = [];
                    if (item) {
                        se.fc = (item.comboType == "1");
                        se.fs = (item.comboType == "2");
                        se.fcbcar = item.comboType == "3";
                        se.nm = (item.comboType == null);
                        if (se.fs && item.availableTo) {
                            let dateEnd = new Date(item.availableTo.toLocaleString());
                            let y = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckInDate).format('YYYY'), m = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckInDate).format('MM'), d = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckInDate).format('DD');
                            let dateNow = new Date(y * 1, m * 1 - 1, d * 1);
                            if (moment__WEBPACK_IMPORTED_MODULE_4__(dateNow).diff(moment__WEBPACK_IMPORTED_MODULE_4__(dateEnd), 'days') > 0) {
                                se.flashSaleEndDate = moment__WEBPACK_IMPORTED_MODULE_4__(dateEnd).format('DD.MM.YYYY');
                            }
                        }
                        if (se.fc && (item.availableTo || se.comboDetail.endDate)) {
                            var diffday = 1;
                            if (se.comboDetail && se.comboDetail.endDate) {
                                var arr = se.comboDetail.endDate.split('-');
                                var newdate = new Date(arr[2], arr[1] - 1, arr[0]);
                                var d = moment__WEBPACK_IMPORTED_MODULE_4__(newdate).format('YYYY-MM-DD');
                                se.comboDetailEndDate = d;
                                se.allowbookcombofc = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_4__(d), 'days') > 1 ? false : true;
                                se.allowbookcombofx = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_4__(d), 'days') > 1 ? false : true;
                            }
                        }
                        if (se.fcbcar && se.comboDetail) {
                            se.bookCombo.ComboRoomPrice = se.comboDetail.comboDetail.totalPriceSale;
                        }
                        if (item.roomId && item.price) {
                            se.checkPriceHotelDetail().then((check) => {
                                if (check) {
                                    se.ischeckoutofroom = true;
                                    se.getdataroom();
                                }
                                else {
                                    se.hotelRoomClasses = [];
                                    se.emptyroom = true;
                                    se.ischeckoutofroom = false;
                                    se.loadcomplete = true;
                                    se.ischeck = true;
                                    se.allowbookcombofc = false;
                                    se.allowbookcombofx = false;
                                }
                            });
                            se.zone.run(() => {
                                Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                                    if (se.loadcomplete) {
                                        if (se.jsonroom1 && se.jsonroom1.length > 0) {
                                            se.jsonroom1.forEach(element => {
                                                element.MealTypeRates.forEach(elementMealtype => {
                                                    if (elementMealtype.RoomId == item.roomId && elementMealtype.IsFlashSale) {
                                                        se.hasComboRoom = true;
                                                        se.bookCombo.Hotelid = se.HotelID;
                                                        se.bookCombo.roomid = elementMealtype.RoomId;
                                                        se.bookCombo.roomNb = se.searchhotel.roomnumber;
                                                        se.bookCombo.Adults = se.searchhotel.adult;
                                                        se.bookCombo.Child = se.searchhotel.child;
                                                        se.bookCombo.ChildAge = se.searchhotel.arrchild;
                                                        se.bookCombo.ComboRoomPrice = elementMealtype.PriceAvgPlusTAStr;
                                                        se.comboprice = elementMealtype.PriceAvgPlusTAStr;
                                                        if (se.loginuser) {
                                                            se.loadpricecombodone = true;
                                                        }
                                                        else {
                                                            se.loadpricecombodone = false;
                                                        }
                                                        se.warningMaxPax = elementMealtype.MSG;
                                                    }
                                                });
                                            });
                                        }
                                    }
                                    else {
                                        Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                                            if (se.loadcomplete) {
                                                if (se.jsonroom1 && se.jsonroom1.length > 0) {
                                                    se.jsonroom1.forEach(element => {
                                                        element.MealTypeRates.forEach(elementMealtype => {
                                                            if (elementMealtype.RoomId == item.roomId && elementMealtype.IsFlashSale) {
                                                                se.hasComboRoom = true;
                                                                se.bookCombo.Hotelid = se.HotelID;
                                                                se.bookCombo.roomid = elementMealtype.RoomId;
                                                                se.bookCombo.roomNb = se.searchhotel.roomnumber;
                                                                se.bookCombo.Adults = se.searchhotel.adult;
                                                                se.bookCombo.Child = se.searchhotel.child;
                                                                se.bookCombo.ChildAge = se.searchhotel.arrchild;
                                                                se.bookCombo.ComboRoomPrice = elementMealtype.PriceAvgPlusTAStr;
                                                                se.comboprice = elementMealtype.PriceAvgPlusTAStr;
                                                                if (se.loginuser) {
                                                                    se.loadpricecombodone = true;
                                                                }
                                                                else {
                                                                    se.loadpricecombodone = false;
                                                                }
                                                                se.warningMaxPax = elementMealtype.MSG;
                                                            }
                                                        });
                                                    });
                                                }
                                            }
                                        }, 3000);
                                    }
                                }, 3000);
                            });
                        }
                        se.changedate = false;
                    }
                    else {
                        se.allowbookcombofc = false;
                        se.allowbookcombofx = false;
                    }
                    if (itemList) {
                        itemList.forEach(item => {
                            if (item.details && item.details.length > 0) {
                                item.details.forEach((itemdetail) => {
                                    itemdetail.priceDisplay = itemdetail.totalPriceSale.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, ".");
                                });
                            }
                            se.comboDetailList.push(item);
                        });
                    }
                });
            }
            else if (error) {
                error.page = "hoteldetail";
                error.func = "getDetailCombo";
                error.param = JSON.stringify(optionscombo);
                _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            if (response.statusCode != 200) {
                var objError = {
                    page: "hoteldetail",
                    func: "getDetailCombo",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(optionscombo)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
            }
            se.searchhotel.roomID = se.RoomID;
            if ((item && item.roomId) || se.searchhotel.hotelID) {
                se.getBOD((item && item.roomId) ? item.roomId : '');
            }
            else {
                se.zone.run(() => {
                    se.checkBODdone = true;
                });
            }
            se.getInsurranceFee(comboid).then((data) => {
                if (data.data) {
                    se.objInsurranceFee = data.data;
                    if (data.data.priceTaTotal > 0) {
                        se.InsurranceFee = data.data.priceTaTotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
                    }
                    else {
                        se.InsurranceFee = "";
                    }
                }
            });
        });
    }
    getInsurranceFee(comboid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let days = moment__WEBPACK_IMPORTED_MODULE_4__(this.cout).diff(moment__WEBPACK_IMPORTED_MODULE_4__(this.cin), 'days') + 1;
            return new Promise((resolve, reject) => {
                var optionscombo = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/ComboServiceFee?comboId=' + (comboid ? comboid : se.comboid) + '&days=' + days + '&pax=' + (se.adults + se.child),
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                        apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U',
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_3__(optionscombo, function (error, response, body) {
                    if (!error) {
                        var result = JSON.parse(body);
                        resolve(result);
                    }
                });
            });
        });
    }
    btnseemore() {
        this.HotelreviewsPage();
    }
    seedetail(id) {
        var self = this;
        this.arrroom = [];
        var coroom;
        for (let i = 0; i < self.jsonroom.length; i++) {
            if (id == self.jsonroom[i].value.Rooms[0].RoomID) {
                this.arrroom.push(self.jsonroom[i].value);
                coroom = self.jsonroom[i].co;
                break;
            }
        }
        var date1 = new Date(this.cin);
        var date2 = new Date(this.cout);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        this.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
        var value = { Address: this.Address, Name: this.name, imghotel: this.imgHotel, cin: this.cin, cout: this.cout, dur: this.duration, room: this.arrroom, adults: this.adults, child: this.child, roomnumber: this.roomvalue, coroom: coroom, texttitle: this.text };
        this.navCtrl.navigateForward('/RoomdetailPage/' + JSON.stringify(value));
    }
    selectclick(event, text) {
        for (let i = 0; i < this.arrchild.length; i++) {
            if (this.arrchild[i].text == text) {
                this.arrchild[i].numage = event;
                break;
            }
        }
    }
    selectclickcin() {
        this.cout = new Date(this.cin);
        var datecin = new Date(this.cin);
        this.cincombo = moment__WEBPACK_IMPORTED_MODULE_4__(datecin).format('YYYYMMDD');
        var res = this.cout.setTime(this.cout.getTime() + (1 * 24 * 60 * 60 * 1000));
        var date = new Date(res);
        this.cout = moment__WEBPACK_IMPORTED_MODULE_4__(date).format('YYYY-MM-DD');
        if (this.room && this.guest) {
            this.ischeck = false;
            this.presentLoading();
        }
    }
    selectclickout() {
        var datecin = Date.parse(this.cin);
        var datecout = Date.parse(this.cout);
        if (datecin >= datecout) {
            this.presentToastwarming('Ngày check in không lớn hơn hoặc bằng ngày check out');
        }
        else {
            if (this.room && this.guest) {
                this.ischeck = false;
                this.presentLoading();
            }
        }
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
    getdataroom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var self = this;
            var se = this;
            var options;
            let key = se.HotelID.toString() + "_" + se.cin.toString() + "_" + se.cout.toString() + "_" + se.adults.toString() + "_" + (se.child ? se.child.toString() : "0");
            var form = {
                CheckInDate: self.cin,
                CheckOutDate: self.cout,
                CityID: '',
                CountryID: '',
                HotelID: self.HotelID,
                IsLeadingPrice: '1',
                IsPackageRate: 'false',
                NationalityID: '82',
                ReferenceClient: '',
                RoomNumber: self.room,
                'RoomsRequest[0].RoomIndex': '1',
                Supplier: 'IVIVU',
                dataKey: '',
                'RoomsRequest[0][Adults][value]': self.adults ? self.adults : "2",
                'RoomsRequest[0][Child][value]': self.child ? self.child : "0",
                IsFenced: self.loginuser ? true : false,
                GetVinHms: 1,
                GetSMD: 1
            };
            if (self.searchhotel.arrchild) {
                self.arrchild1 = [];
                for (var i = 0; i < self.searchhotel.arrchild.length; i++) {
                    form["RoomsRequest[0][AgeChilds][" + i + "][value]"] = +self.searchhotel.arrchild[i].numage;
                    self.arrchild1.push(self.searchhotel.arrchild[i].numage);
                }
            }
            self.formParam = form;
            if (se.activityService.HotelSearchReqContract && key == se.activityService.HotelSearchReqContract.id) {
                let result = se.activityService.HotelSearchReqContract.value;
                se.excuteLoadHotelRoom(result);
            }
            else {
                options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelSearchReqContractAppV2',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {},
                    form
                };
                requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hoteldetail",
                            func: "getdataroom",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hoteldetail";
                        error.func = "getdataroom";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                    }
                    ;
                    var result = JSON.parse(body);
                    se.excuteLoadHotelRoom(result);
                });
            }
        });
    }
    excuteLoadHotelRoom(data) {
        var self = this, se = this;
        self.zone.run(() => {
            if (self.loader) {
                self.loader.dismiss();
            }
            self.loadcomplete = true;
            self.ischeck = true;
            self.jsonroom = [];
            self.jsonroom2 = data;
            var result = data;
            if (result.Hotels) {
                self.emptyroom = false;
                self.hotelRooms = [];
                self.hotelRoomClasses = [];
                self.hotelMealTypes = [];
                self.hotelMealTypesHidden = [];
                self.hotelRooms = result.Hotels[0];
                result.Hotels[0].RoomClasses.forEach((element, index) => {
                    var groupMealType = 0;
                    var indexMealTypeHidden = 0;
                    element.hotelMealTypes = [];
                    element.hotelMealTypesHidden = [];
                    if (!element.Rooms[0].Images || element.Rooms[0].Images.indexOf('noimage') != -1) {
                        element.Rooms[0].Images = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x110.jpg";
                    }
                    else if (element.Rooms[0].Images.indexOf('220x125') != -1) {
                        let urlimage = element.Rooms[0].Images.substring(0, element.Rooms[0].Images.lastIndexOf('-') + 1);
                        let idexofdot = element.Rooms[0].Images.lastIndexOf('.');
                        let tail = element.Rooms[0].Images.substring(idexofdot, element.Rooms[0].Images.length);
                        element.Rooms[0].Images = urlimage + "110x110" + tail;
                    }
                    element.Rooms[0].Images = (element.Rooms[0].Images.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + element.Rooms[0].Images : element.Rooms[0].Images;
                    for (let i = 0; i < element.MealTypeRates.length; i++) {
                        var PriceAvgPlusTA = element.MealTypeRates[i].PriceAvgPlusTotalTA;
                        PriceAvgPlusTA = PriceAvgPlusTA / 100000;
                        PriceAvgPlusTA = Math.floor(PriceAvgPlusTA);
                        element.MealTypeRates[i].point = PriceAvgPlusTA;
                        if (element.hotelMealTypes.length == 0) {
                            groupMealType = groupMealType + 1;
                            element.MealTypeRates[i].displayMealType = true;
                            element.MealTypeRates[i].groupMealType = index;
                            element.hotelMealTypes.push(element.MealTypeRates[i]);
                        }
                        else {
                            var mealTypeName = element.MealTypeRates[i].Name;
                            if (element.MealTypeRates[i].Notes && element.MealTypeRates[i].Notes.length > 0) {
                                mealTypeName = element.MealTypeRates[i].Name + ", " + element.MealTypeRates[i].Notes.join(', ');
                            }
                            if (element.hotelMealTypes.filter(item => item.Notes && item.Notes.length > 0 ? (item.Name + ", " + item.Notes.join(', ') == mealTypeName && (item.Supplier != 'HBED' || (item.Supplier == 'HBED' && item.Penaltys && item.Penaltys.length > 0))) : item.Name == mealTypeName && (item.Supplier != 'HBED' || (item.Supplier == 'HBED' && item.Penaltys && item.Penaltys.length > 0))).length == 0) {
                                groupMealType = groupMealType + 1;
                                element.MealTypeRates[i].displayMealType = true;
                                element.MealTypeRates[i].groupMealType = index;
                                element.hotelMealTypes.push(element.MealTypeRates[i]);
                            }
                            else {
                                element.MealTypeRates[i].groupMealType = index;
                                indexMealTypeHidden = indexMealTypeHidden + 1;
                                element.MealTypeRates[i].displayMealType = false;
                                if (indexMealTypeHidden == element.MealTypeRates.length - 1) {
                                    element.MealTypeRates[i].displaySecondItem = true;
                                }
                                element.hotelMealTypesHidden.push(element.MealTypeRates[i]);
                            }
                        }
                    }
                    element.countMealType = 0;
                    for (let m = 0; m < element.hotelMealTypes.length; m++) {
                        let mealTypeName = element.hotelMealTypes[m].Name;
                        if (element.hotelMealTypes[m].Notes && element.hotelMealTypes[m].Notes.length > 0) {
                            mealTypeName = element.hotelMealTypes[m].Name + ", " + element.hotelMealTypes[m].Notes.join(', ');
                        }
                        let count = element.MealTypeRates.filter(item => item.Notes && item.Notes.length > 0 ? (item.Name + ", " + item.Notes.join(', ') == mealTypeName && (item.Supplier != 'HBED' || (item.Supplier == 'HBED' && item.Penaltys && item.Penaltys.length > 0))) : item.Name == mealTypeName && (item.Supplier != 'HBED' || (item.Supplier == 'HBED' && item.Penaltys && item.Penaltys.length > 0))).length;
                        element.hotelMealTypes[m].countMealType = count - 1;
                        if (element.hotelMealTypes.length <= 1) {
                            var el = element.hotelMealTypesHidden.filter(item => item.displaySecondItem);
                            if (el && el.length > 0) {
                                el[0].displayMealType = true;
                                element.hotelMealTypes[m].countMealType = count - 2;
                            }
                        }
                        else {
                            let lastElementMealTypeGroup = element.MealTypeRates.filter(item => item.Notes && item.Notes.length > 0 ? (item.Name + ", " + item.Notes.join(', ') == mealTypeName) : item.Name == mealTypeName);
                            let objMap = lastElementMealTypeGroup[lastElementMealTypeGroup.length - 1];
                            if (objMap) {
                                lastElementMealTypeGroup[0].displayLastPriceAvgPlusOTA = true;
                                lastElementMealTypeGroup[0].displayLastPriceAvgPlusOTAStr = objMap.PriceAvgPlusOTAStr;
                            }
                        }
                    }
                    element.countMealType = 0;
                    for (let m = 0; m < element.hotelMealTypes.length; m++) {
                        element.countMealType += element.hotelMealTypes[m].countMealType;
                    }
                    self.hotelRoomClasses.push(element);
                    if (self.hotelRoomClasses && self.hotelRoomClasses.length > 0) {
                        self.clearBlurEffect();
                    }
                });
            }
            else {
                self.hotelRoomClasses = [];
                self.emptyroom = true;
            }
        });
        se.resetShowHidePanel();
        if (se.fcbcar) {
            se.ischeckcbcarhide = true;
            se.allowbookcombofx = true;
        }
        if (se.loginuser) {
            if (se.hotelRoomClasses.length > 0 && se.comboDetail) {
                if (se.comboDetail.comboDetail) {
                    se.checkRoomDefaultMaxPax(se.comboDetail.comboDetail.roomId, se.hotelRoomClasses).then((check) => {
                        if (se.loadcomplete && !se.ischeckBOD && se.comboDetailList.length > 0 && se.hotelRoomClasses.length > 0 && se.totalAdult <= 6 && se.hotelRoomClasses.length > 0 && se.fcbcar && se.allowbookcombofx && check) {
                            se.ischeckcbcar = true;
                        }
                        else {
                            se.ischeckcbcar = false;
                        }
                    });
                }
                else {
                    se.ischeckcbcar = false;
                }
            }
            if (se.fcbcar) {
                se.ischeckcbcarhide = true;
                if (se.loginuser) {
                    if (se.hotelRoomClasses.length > 0 && se.comboDetail) {
                        if (se.comboDetail.comboDetail) {
                            se.checkRoomDefaultMaxPax(se.comboDetail.comboDetail.roomId, se.hotelRoomClasses).then((check) => {
                                if (se.loadcomplete && (!se.ischeckBOD) && se.comboDetailList.length > 0 && se.hotelRoomClasses.length > 0 && se.totalAdult <= 6 && se.hotelRoomClasses.length > 0 && se.fcbcar && se.allowbookcombofx && check && se.usermail) {
                                    se.ischeckcbcar = true;
                                }
                                else {
                                    se.ischeckcbcar = false;
                                }
                            });
                        }
                        else {
                            se.ischeckcbcar = false;
                        }
                    }
                    else {
                        se.ischeckcbcar = false;
                    }
                }
                else {
                    se.ischeckcbcar = false;
                }
            }
        }
        if (se.fs) {
            se.ListRoomClasses = [];
            for (let i = 0; i < se.hotelRoomClasses.length; i++) {
                if (se.hotelRoomClasses[i].Rooms[0].RoomID == se.comboDetail.comboDetail.roomId) {
                    se.ListRoomClasses.push(se.hotelRoomClasses[i]);
                    break;
                }
            }
            se.roomCombo = '';
            se.ischeckcbfs = false;
            se.checkRoomDefaultFsale(se.comboDetail.comboDetail.roomId, se.ListRoomClasses).then((check) => {
                if (check) {
                    if (se.objroomfsale[0].Status == 'AL') {
                        se.ischeckcbfs = true;
                    }
                    else {
                        if (se.objroomfsale[0].Status == 'IP') {
                            se.warningCombofsIP = 'Giai đoạn không áp dụng. Quý khách vui lòng chọn ngày khác.';
                        }
                        if (se.warningCombofsIP) {
                            let cocheckCombofs = false;
                            for (let i = 0; i < se.hotelRoomClasses.length; i++) {
                                if (se.hotelRoomClasses[i].IsFlashSale) {
                                    for (let j = 0; j < se.hotelRoomClasses[i].MealTypeRates.length; j++) {
                                        if (se.hotelRoomClasses[i].MealTypeRates[j].Code == se.comboDetail.comboDetail.mealTypeNote) {
                                            var jMealTypeRates = j;
                                            se.warningCombofsIP = '';
                                            break;
                                        }
                                    }
                                    se.comboprice = se.hotelRoomClasses[i].MealTypeRates[jMealTypeRates].PriceAvgPlusTAStr;
                                    se.roomCombo = se.hotelRoomClasses[i].ClassName;
                                    if (se.hotelRoomClasses[i].Status == 'IP') {
                                        se.warningCombofsIP = 'Giai đoạn không áp dụng. Quý khách vui lòng chọn ngày khác.';
                                    }
                                    cocheckCombofs = true;
                                    break;
                                }
                            }
                            if (!cocheckCombofs) {
                                se.warningCombofs = 'Giai đoạn không áp dụng. Quý khách vui lòng chọn ngày khác.';
                            }
                        }
                    }
                }
                else {
                    let cocheckCombofs = false;
                    for (let i = 0; i < se.hotelRoomClasses.length; i++) {
                        if (se.hotelRoomClasses[i].IsFlashSale) {
                            for (let j = 0; j < se.hotelRoomClasses[i].MealTypeRates.length; j++) {
                                if (se.hotelRoomClasses[i].MealTypeRates[j].Code == se.comboDetail.comboDetail.mealTypeNote) {
                                    var jMealTypeRates = j;
                                    break;
                                }
                            }
                            se.comboprice = se.hotelRoomClasses[i].MealTypeRates[jMealTypeRates].PriceAvgPlusTAStr;
                            se.roomCombo = se.hotelRoomClasses[i].ClassName;
                            if (se.hotelRoomClasses[i].Status == 'IP') {
                                se.warningCombofsIP = 'Giai đoạn không áp dụng. Quý khách vui lòng chọn ngày khác.';
                                se.ischeckcbfs = false;
                            }
                            cocheckCombofs = true;
                            break;
                        }
                    }
                    if (!cocheckCombofs) {
                        se.warningCombofs = 'Giai đoạn không áp dụng. Quý khách vui lòng chọn ngày khác.';
                    }
                }
                se.loadpricecombodone = true;
            });
        }
        if (se.hotelRoomClasses && se.hotelRoomClasses.length > 0) {
            let priceinstallment = Math.round(se.hotelRoomClasses[0].MealTypeRates[0].PriceAvgPlusTotalTA * 1 / 12 * 1.05);
            se.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.') + "đ/tháng";
            se.activityService.installmentPriceStr = se.installmentPriceStr;
        }
    }
    checkRoomDefaultFsale(roomId, roomClass) {
        var res = true;
        return new Promise((resolve, reject) => {
            this.objroomfsale = [];
            var objmap;
            roomClass.forEach((el) => {
                objmap = el.MealTypeRates.filter((Meal) => {
                    return Meal.RoomId == roomId && Meal.IsFlashSale == true && (Meal.Supplier == 'Internal' || Meal.Supplier == 'VINPEARL') && Meal.PromotionNote != '';
                });
            });
            res = (objmap && objmap.length > 0);
            if (res) {
                if (objmap.length > 1) {
                    for (let i = 0; i < objmap.length; i++) {
                        if (objmap[i].Code == this.comboDetail.comboDetail.mealTypeNote) {
                            this.objroomfsale.push(objmap[i]);
                            break;
                        }
                    }
                }
                else {
                    this.objroomfsale = objmap;
                }
                this.comboprice = this.objroomfsale[0].PriceAvgPlusTAStr;
                this.roomCombo = this.objroomfsale[0].RoomName;
            }
            resolve(res);
        });
    }
    checkRoomDefaultMaxPax(roomId, roomClass) {
        var se = this, res = true, listresult = [];
        return new Promise((resolve, reject) => {
            roomClass.forEach((el) => {
                var objmap = el.Rooms.filter((room) => {
                    return room.RoomID == roomId && !el.MSG;
                });
                if (objmap && objmap.length > 0) {
                    listresult.push(objmap);
                }
            });
            res = (listresult && listresult.length > 0);
            resolve(res);
        });
    }
    DescriptionPage() {
        this.valueGlobal.notRefreshDetail = true;
        this.navCtrl.navigateForward('/hoteldescription/' + this.HotelID + '/' + this.hotelname);
    }
    HotelreviewsPage() {
        this.valueGlobal.notRefreshDetail = true;
        this.navCtrl.navigateForward('/hotelreviews/' + this.HotelID + '/' + this.hotelname);
    }
    FacilitiesPage() {
        this.valueGlobal.notRefreshDetail = true;
        this.navCtrl.navigateForward('/facilities/' + this.HotelID + '/' + this.hotelname);
    }
    PolicyPage() {
        this.valueGlobal.notRefreshDetail = true;
        this.navCtrl.navigateForward('/policy/' + this.HotelID + '/' + this.hotelname);
    }
    presentAlertbook() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alertController = document.querySelector('ion-alert-controller');
            yield alertController.componentOnReady();
            let alert = yield this.alertCtrl.create({
                message: 'Phòng cuối cùng vừa được đặt. Quý khách vui lòng chọn ngày khác.',
                buttons: ['Ok']
            });
            alert.present();
        });
    }
    book(id, MealTypeRates, indexme, roomName, indexroom) {
        var self = this;
        this.valueGlobal.notRefreshDetail = true;
        this.roomvalue = MealTypeRates.TotalRoom;
        this.arrroom = [];
        for (let i = 0; i < self.hotelRoomClasses.length; i++) {
            if (id == self.hotelRoomClasses[i].Rooms[0].RoomID && MealTypeRates.TotalRoom == self.hotelRoomClasses[i].TotalRoom) {
                this.arrroom.push(self.hotelRoomClasses[i]);
                this.indexroom = i;
                break;
            }
        }
        var date1 = new Date(this.cin);
        var date2 = new Date(this.cout);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        this.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
        this.storage.get('email').then(email => {
            if (email) {
                this.booking.CEmail = email;
            }
            this.booking.CheckInDate = this.cin;
            this.booking.CheckOutDate = this.cout,
                this.booking.roomNb = this.room,
                this.booking.Adults = this.adults,
                this.booking.Child = this.child,
                this.booking.CName = '',
                this.booking.cost = MealTypeRates.PriceAvgPlusTAStr,
                this.booking.indexroom = this.indexroom,
                this.booking.indexmealtype = indexme,
                this.booking.HotelId = this.HotelID,
                this.Roomif.RoomId = id,
                this.booking.HotelName = self.name,
                this.booking.RoomName = roomName,
                this.Roomif.Address = this.Address,
                this.Roomif.dur = this.duration,
                this.Roomif.arrroom = this.arrroom,
                this.Roomif.roomnumber = MealTypeRates.TotalRoom,
                this.Roomif.roomtype = MealTypeRates,
                this.Roomif.jsonroom = this.jsonroom2.Hotels[0],
                this.Roomif.imgHotel = this.imgHotel;
            this.Roomif.objMealType = MealTypeRates;
            this.Roomif.HotelRoomHBedReservationRequest = JSON.stringify(this.arrroom[0].HotelRoomHBedReservationRequest);
            this.Roomif.arrrbed = [];
            this.Roomif.imgRoom = this.arrroom[0].Rooms[0].ImagesMaxWidth320;
            this.searchhotel.adult = this.adults;
            this.searchhotel.child = this.child;
            this.searchhotel.roomnumber = MealTypeRates.TotalRoom;
            this.searchhotel.CheckInDate = this.cin;
            this.searchhotel.CheckOutDate = this.cout;
            this.booking.code = this.hotelcode;
            this.bookCombo.ComboTitle = "";
            this.bookCombo.ComboId = null;
            self.Roomif.textcancel = "";
            self.Roomif.ExcludeVAT = self.ExcludeVAT;
            if (this.arrroom[0].MealTypeRates[indexme].Supplier == 'Internal') {
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
                    qs: {
                        token: '3b760e5dcf038878925b5613c32615ea3',
                        hotelcode: this.booking.HotelId,
                        roomcode: this.Roomif.RoomId,
                        checkin: this.booking.CheckInDate,
                        checkout: this.booking.CheckOutDate,
                        totalroom: this.Roomif.roomnumber
                    },
                    headers: {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hoteldetail",
                            func: "book",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hoteldetail";
                        error.func = "book";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    ;
                    var Hotelid = { id: self.HotelID };
                    var rs = JSON.parse(body);
                    if (rs.Msg == "AL") {
                        self.Roomif.payment = rs.Msg;
                        self.Roomif.roomcancelhbed = 0;
                        self.Roomif.ischeckpayment = true;
                        self.navCtrl.navigateForward('/roomdetailreview');
                    }
                    else if (rs.Msg == "RQ") {
                        self.Roomif.payment = rs.Msg;
                        self.Roomif.roomcancelhbed = 0;
                        self.Roomif.ischeckpayment = false;
                        self.navCtrl.navigateForward('/roomdetailreview');
                    }
                    else {
                        self.presentAlertbook();
                    }
                });
            }
            else if (MealTypeRates.Supplier == 'HBED') {
                if (MealTypeRates.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                    self.checkhbed(MealTypeRates);
                }
                else {
                    if (MealTypeRates.Penaltys.length > 0) {
                        self.Roomif.payment = self.arrroom[0].MealTypeRates[indexme].Penaltys[0].IsPenaltyFree;
                        self.Roomif.ischeckpayment = true;
                        self.Roomif.roomcancelhbed = 1;
                        self.navCtrl.navigateForward('/roomdetailreview');
                    }
                    else {
                        self.checkhbed(MealTypeRates);
                    }
                }
            }
            else if (MealTypeRates.Supplier == 'VINPEARL' || MealTypeRates.Supplier == 'SMD') {
                self.Roomif.payment = "AL";
                self.Roomif.roomcancelhbed = 0;
                self.Roomif.ischeckpayment = true;
                self.navCtrl.navigateForward('/roomdetailreview');
            }
            else {
                this.Roomif.arrrbed = this.arrroom[0].MealTypeRates[indexme].BedTypes;
                self.Roomif.payment = this.arrroom[0].MealTypeRates[indexme].Penaltys[0].IsPenaltyFree;
                self.Roomif.ischeckpayment = true;
                self.Roomif.roomcancelhbed = 0;
                self.navCtrl.navigateForward('/roomdetailreview');
            }
        });
    }
    checkhbed(MealTypeRates) {
        var self = this;
        var form = {
            GrossProfitOnline: MealTypeRates.HotelRoomHBedReservationRequest.GrossProfitOnline,
            rooms: MealTypeRates.HotelRoomHBedReservationRequest.rooms,
            rateCommentId: MealTypeRates.HotelRoomHBedReservationRequest.rateCommentId
        };
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlContracting + '/api/contracting/GetRateCommonHbedAjax',
            headers: {},
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            var json = JSON.parse(body);
            if (json.cancelPolicy) {
                self.Roomif.payment = json.cancelPolicy[0].IsPenaltyFree;
                self.Roomif.ischeckpayment = true;
                var Penalty_Datetemp = json.cancelPolicy[0].Penalty_Date;
                var Penalty_Date1 = new Date(Penalty_Datetemp);
                var Penalty_Date = Penalty_Date1.setTime(Penalty_Date1.getTime() - (1 * 24 * 60 * 60 * 1000));
                var Penalty_Date2 = moment__WEBPACK_IMPORTED_MODULE_4__(Penalty_Date).format('DD-MM-YYYY');
                var thu = moment__WEBPACK_IMPORTED_MODULE_4__(Penalty_Date).format('dddd');
                switch (thu) {
                    case "Monday":
                        thu = "Thứ 2";
                        break;
                    case "Tuesday":
                        thu = "Thứ 3";
                        break;
                    case "Wednesday":
                        thu = "Thứ 4";
                        break;
                    case "Thursday":
                        thu = "Thứ 5";
                        break;
                    case "Friday":
                        thu = "Thứ 6";
                        break;
                    case "Saturday":
                        thu = "Thứ 7";
                        break;
                    default:
                        thu = "Chủ nhật";
                        break;
                }
                var a = json.cancelPolicy[0].Penalty_Val_OTA;
                var money = Math.ceil(a / 100) * 100;
                var money1 = money.toLocaleString();
                var text = "Sau 12:00 PM ngày " + thu + ", " + Penalty_Date2 + " sẽ bị tính phí là: " + money1 + " VND";
                self.Roomif.objMealType = MealTypeRates;
                self.Roomif.textcancel = text;
                self.Roomif.roomcancelhbed = 0;
                self.navCtrl.navigateForward('/roomdetailreview');
            }
            else {
                alert("Đã hết phòng, vui lòng chọn lại phòng khác!");
            }
            console.log(body);
        });
    }
    bookcombo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.get('email').then(email => {
                if (email) {
                    this.bookCombo.Email = email;
                    this.bookCombo.Address = this.Address;
                }
            });
            this.gf.googleAnalytion('hoteldetail', 'bookcombo', '');
        });
    }
    btnclick() {
        this.ischeckbtn = false;
        this.ischeckbtnreset = true;
        this.navCtrl.back();
    }
    btnclick1() {
        this.ischeckbtn = true;
        this.ischeckbtnreset = false;
    }
    goback() {
        this.isexit = true;
        this.searchhotel.isRefreshDetail = false;
        this.searchhotel.showPopup = false;
        if (this.searchhotel.rootPage == "mainpage" || this.searchhotel.rootPage == "topdeal") {
            this.navCtrl.navigateBack('/app/tabs/tab1');
        }
        else {
            if (this.searchhotel.rootPage == "listpage") {
                this.navCtrl.navigateRoot('/hotellist/false');
            }
            else if (this.searchhotel.rootPage == "likepage") {
                this.navCtrl.navigateBack('/tabs/tab2');
            }
            else if (this.searchhotel.rootPage == "MyTrip") {
                if (this._mytripservice.rootPage == "homeflight") {
                    this._flightService.itemTabFlightActive.emit(true);
                    this._flightService.itemMenuFlightClick.emit(2);
                    this.valueGlobal.backValue = "homeflight";
                    this.navCtrl.navigateBack('/tabs/tab1', { animated: true });
                    this._mytripservice.backfrompage = "";
                }
                else if (this._mytripservice.rootPage == 'homehotel') {
                    this.navCtrl.navigateBack('app/tabs/tab3');
                }
                else {
                    this.navCtrl.navigateForward('/homefood');
                }
            }
            else if (this.searchhotel.rootPage == "combolist") {
                this.navCtrl.navigateBack('app/tabs/combolist');
            }
            else if (this.searchhotel.rootPage == "topdeallist") {
                this.navCtrl.navigateBack('/topdeallist');
            }
            else if (this.searchhotel.rootPage == "listmood") {
                let hotellistmoodparams = this.gf.getParams('hotellistmood');
                if (hotellistmoodparams) {
                    this.navCtrl.navigateBack('/hotellistmood/' + hotellistmoodparams.moodid + '/' + hotellistmoodparams.title);
                }
                else {
                    this.navCtrl.back();
                }
            }
            else {
                this.navCtrl.navigateBack('/app/tabs/tab1');
            }
        }
    }
    itemHotelRelated(id) {
        var se = this;
        se.flag = 1;
        se.isheader1 = true;
        se.presentLoadingRelated(100);
        se.zone.run(() => {
            se.HotelID = id;
            se.searchhotel.isRefreshDetail = true;
            se.searchhotel.hotelID = id;
            se.presentLoading();
            se.loadTopSale24h(id);
            let el = document.getElementsByClassName('div-float-arrow');
            if (el.length > 0) {
                el[0].classList.remove('float-arrow-enabled');
                el[0].classList.add('float-arrow-disabled');
            }
        });
        se.gf.googleAnalytion('hoteldetail', 'hotelrelatedclick', '');
    }
    plusadults() {
        this.adults1++;
        if (this.adults1 == 1) {
            this.ischeckadults = false;
        }
        else {
            this.ischeckadults = true;
        }
    }
    minusadults() {
        if (this.adults1 > 1) {
            this.adults1--;
        }
        if (this.adults1 == 1) {
            this.ischeckadults = false;
        }
        else {
            this.ischeckadults = true;
        }
    }
    pluschild() {
        this.child1++;
        var arr = { text: 'Trẻ em' + ' ' + this.child1, numage: "7" };
        this.arrchild2.push(arr);
        if (this.child1 == 0) {
            this.ischeckchild = false;
        }
        else {
            this.ischeckchild = true;
        }
    }
    minuschild() {
        if (this.child1 > 0) {
            this.child1--;
            this.arrchild2.splice(this.arrchild2.length - 1, 1);
        }
        if (this.child1 == 0) {
            this.ischeckchild = false;
        }
        else {
            this.ischeckchild = true;
        }
    }
    minusroom() {
        if (this.room1 > 1) {
            this.room1--;
        }
        if (this.room1 == 1) {
            this.ischeckroom = false;
        }
        else {
            this.ischeckroom = true;
        }
    }
    plusroom() {
        this.room1++;
        if (this.room1 == 1) {
            this.ischeckroom = false;
        }
        else {
            this.ischeckroom = true;
        }
    }
    presentAlert(msg, PenaltyDateParseStr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: 'Yêu cầu hủy/thay đổi phòng nhận được từ: ' + msg + '',
                buttons: ['Ok']
            });
            alert.present();
        });
    }
    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        var R = 6371;
        var dLat = this.deg2rad(lat2 - lat1);
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    test() {
        this.slider.getActiveIndex().then(index => {
            this.hotelimg = this.slideData[index].LinkImage;
            this.coutslide = index + 1;
        });
        let elements = document.querySelectorAll(".grad1");
        if (elements != null) {
        }
    }
    openPickupCalendar() {
        this.zone.run(() => {
            this.loadcomplete = false;
            this.hotelRoomClasses = [];
        });
        this.searchhotel.CheckInDate = this.cin;
        this.searchhotel.CheckOutDate = this.cout;
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
    share() {
        this.socialSharing.share(null, null, null, this.hotelurl).then(() => {
        }).catch(() => {
        });
    }
    updateLikeStatus() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetFavouriteHotelByUser',
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
                            page: "hoteldetail",
                            func: "updateLikeStatus",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hoteldetail";
                        error.func = "updateLikeStatus";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                se.dataListLike = JSON.parse(body);
                                let like = false;
                                if (se.dataListLike.length > 0) {
                                    like = se.checkItemLiked(se.HotelID) == 1 ? true : false;
                                }
                                se.itemlike = like;
                            });
                        }
                        else {
                        }
                    }
                });
            }
            else {
                se.itemlike = false;
            }
        });
    }
    checkItemLiked(id) {
        var co = 0;
        id = parseInt(id);
        if (id) {
            for (let i = 0; i < this.dataListLike.length; i++) {
                if (this.dataListLike.indexOf(id) != -1) {
                    co = 1;
                    break;
                }
            }
        }
        return co;
    }
    likeItem() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/AddFavouriteHotel',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'postman-token': '9fd84263-7323-0848-1711-8022616e1815',
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: { hotelId: se.HotelID },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hoteldetail",
                            func: "likeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hoteldetail";
                        error.func = "likeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                    }
                    ;
                    se.HotelIDLike = '';
                    se.zone.run(() => {
                        Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                            se.itemlike = true;
                        }, 10);
                    });
                });
            }
            else {
                se.HotelIDLike = se.HotelID;
                se.navCtrl.navigateForward('/login');
            }
        });
        se.gf.googleAnalytion('hoteldetail', 'likeitem', '');
    }
    unlikeItem() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RemoveFavouriteHotelByUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'postman-token': 'a19ecc0a-cb83-4dd9-3fd5-71062937a931',
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: { hotelId: se.HotelID },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "hoteldetail",
                            func: "likeItem",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "hoteldetail";
                        error.func = "unlikeItem";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                    }
                    ;
                    se.zone.run(() => {
                        Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                            se.itemlike = false;
                        }, 10);
                    });
                });
            }
            else {
                se.navCtrl.navigateForward('/login');
            }
        });
        se.gf.googleAnalytion('hoteldetail', 'unlikeitem', '');
    }
    showRoomDetail(obj) {
        let param = {
            hoteldetail: obj
        };
        this.gf.setParams({ objroom: obj, jsonroom: this.jsonroom2.Hotels[0], imgHotel: this.imgHotel, address: this.Address }, 'hotelroomdetail');
        this.valueGlobal.notRefreshDetail = true;
        this.navCtrl.navigateForward('/hotelroomdetail/' + this.HotelID);
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if (jquery__WEBPACK_IMPORTED_MODULE_21__(obj.parentNode).hasClass('endSelection') || jquery__WEBPACK_IMPORTED_MODULE_21__(obj.parentNode).hasClass('startSelection')) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    if (jquery__WEBPACK_IMPORTED_MODULE_21__(obj.parentNode).hasClass('endSelection')) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_21__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_21__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_21__('.on-selected')[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_21__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_21__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_21__(obj)[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_21__('.on-selected').closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_21__(obj).closest('.month-box').children()[0].textContent;
                    }
                    else {
                        if (jquery__WEBPACK_IMPORTED_MODULE_21__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_21__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_21__(obj)[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_21__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_21__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_21__('.endSelection').children('.days-btn')[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_21__(obj).closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_21__('.endSelection').closest('.month-box').children()[0].textContent;
                    }
                    if (objTextMonthEndDate && objTextMonthEndDate.length > 0 && objTextMonthStartDate && objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.split('/')[0];
                        yearstartdate = objTextMonthStartDate.split('/')[1];
                        monthenddate = objTextMonthEndDate.split('/')[0];
                        yearenddate = objTextMonthEndDate.split('/')[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        if (fromdate && todate && moment__WEBPACK_IMPORTED_MODULE_4__(todate).diff(fromdate, 'days') > 0) {
                            Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                                this.modalCtrl.dismiss();
                            }, 300);
                            var se = this;
                            se.searchhotel.CheckInDate = moment__WEBPACK_IMPORTED_MODULE_4__(fromdate).format('YYYY-MM-DD');
                            se.searchhotel.CheckOutDate = moment__WEBPACK_IMPORTED_MODULE_4__(todate).format('YYYY-MM-DD');
                            se.bookCombo.CheckInDate = se.searchhotel.CheckInDate;
                            se.bookCombo.CheckOutDate = se.searchhotel.CheckOutDate;
                            se.zone.run(() => {
                                if (se.searchhotel.CheckInDate && se.searchhotel.CheckOutDate) {
                                    se.cin = se.searchhotel.CheckInDate;
                                    se.cout = se.searchhotel.CheckOutDate;
                                    se.datecin = new Date(se.searchhotel.CheckInDate);
                                    se.datecout = new Date(se.searchhotel.CheckOutDate);
                                    se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM-YYYY');
                                    se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM-YYYY');
                                    se.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD/MM');
                                    se.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD/MM');
                                    se.loadcomplete = false;
                                    var date1 = new Date(se.cin);
                                    var date2 = new Date(se.cout);
                                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                                    se.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                                }
                                se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
                                se.storage.set('hasChangeDate', true);
                                se.changedate = true;
                                se.hasComboRoom = false;
                                se.comboprice = se.combopriceontitle;
                                se.showpopup = true;
                                se.ischeck = true;
                                se.guest = se.adults + se.child;
                                se.hotelRoomClasses = [];
                                se.loadcomplete = false;
                                se.emptyroom = false;
                                if (se.comboid) {
                                    se.getDetailCombo(se.comboid);
                                }
                                se.checkPriceHotelDetail().then((check) => {
                                    if (check) {
                                        se.getdataroom();
                                    }
                                    else {
                                        se.hotelRoomClasses = [];
                                        se.emptyroom = true;
                                        se.ischeckoutofroom = false;
                                        se.loadcomplete = true;
                                        se.ischeck = true;
                                        se.allowbookcombofc = false;
                                        se.allowbookcombofx = false;
                                    }
                                });
                            });
                            se.searchhotel.changeInfoHotelList.emit(1);
                        }
                    }
                }
            }
        });
    }
    changeDate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.loadcomplete) {
                this.presentToastwarming('Giá đang được cập nhật, xin vui lòng đợi trong giây lát!');
                return;
            }
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            this.zone.run(() => {
                this.loadpricecombodone = false;
                this.loadcomplete = false;
                this.hotelRoomClasses = [];
                this.emptyroom = false;
                this.flashSaleEndDate = null;
                this.allowbookcombofc = true;
                this.allowbookcombofx = true;
                this.searchhotel.ischeckBOD = false;
                this.ischeckBOD = false;
                this.checkBODdone = false;
                this.valueGlobal.notRefreshDetail = false;
                this.warningMaxPax = '';
            });
            let fromdate = new Date(this.searchhotel.CheckInDate ? this.searchhotel.CheckInDate : this.cin);
            let todate = new Date(this.searchhotel.CheckOutDate ? this.searchhotel.CheckOutDate : this.cout);
            let _daysConfig = [];
            if (this.valueGlobal.listlunar) {
                for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
                    _daysConfig.push({
                        date: this.valueGlobal.listlunar[j].date,
                        subTitle: this.valueGlobal.listlunar[j].name,
                        cssClass: 'lunarcalendar'
                    });
                }
            }
            const options = {
                pickMode: 'range',
                title: 'Chọn ngày',
                monthFormat: 'MM / YYYY',
                weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
                closeLabel: 'Thoát',
                doneLabel: '',
                step: 0,
                defaultScrollTo: fromdate,
                defaultDateRange: { from: fromdate, to: todate },
                daysConfig: _daysConfig
            };
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_12__["CalendarModal"],
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                se.allowclickcalendar = true;
                jquery__WEBPACK_IMPORTED_MODULE_21__('.days-btn').click(e => this.clickedElement(e));
            });
            let se = this;
            const event = yield this.myCalendar.onDidDismiss();
            if (event) {
                se.allowclickcalendar = true;
            }
            if (event.data) {
                const date = event.data;
                const from = date.from;
                const to = date.to;
                se.searchhotel.CheckInDate = moment__WEBPACK_IMPORTED_MODULE_4__(from.dateObj).format('YYYY-MM-DD');
                se.searchhotel.CheckOutDate = moment__WEBPACK_IMPORTED_MODULE_4__(to.dateObj).format('YYYY-MM-DD');
                se.bookCombo.CheckInDate = se.searchhotel.CheckInDate;
                se.bookCombo.CheckOutDate = se.searchhotel.CheckOutDate;
            }
            se.zone.run(() => {
                if (se.searchhotel.CheckInDate && se.searchhotel.CheckOutDate) {
                    se.cin = se.searchhotel.CheckInDate;
                    se.cout = se.searchhotel.CheckOutDate;
                    se.datecin = new Date(se.searchhotel.CheckInDate);
                    se.datecout = new Date(se.searchhotel.CheckOutDate);
                    se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM-YYYY');
                    se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM-YYYY');
                    se.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD/MM');
                    se.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD/MM');
                    var date1 = new Date(se.cin);
                    var date2 = new Date(se.cout);
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    se.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                }
                se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
                se.changedate = true;
                se.hasComboRoom = false;
                se.comboprice = se.combopriceontitle;
                se.showpopup = true;
                se.ischeck = true;
                se.guest = se.adults + (se.child ? se.child : 0);
                if (se.comboid) {
                    se.getDetailCombo(se.comboid);
                }
                se.getdata(false);
            });
            se.gf.googleAnalytion('hoteldetail', 'changedate', '');
        });
    }
    changeHotel() {
        this.goback();
    }
    checkComboPrice() {
        this.getDetailCombo(null);
    }
    penaltySelected(index) {
        if (this.penaltyItemSelected >= 0) {
            this.penaltyItemSelected = -1;
        }
        else {
            this.penaltyItemSelected = index;
        }
    }
    goToLogin() {
        this.storage.get('auth_token').then(auth_token => {
            if (!auth_token) {
                this.valueGlobal.logingoback = '/hoteldetail/' + this.HotelID;
                this.valueGlobal.backValue = 'carcombo';
                this.navCtrl.navigateForward('/login');
            }
        });
    }
    requestCombo(value, combolist, input) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.valueGlobal.notRefreshDetail = true;
            this.searchhotel.showPopup = true;
            this.bookCombo.HotelCode = this.hotelcode;
            let titlecomboshort = '';
            if (this.titlecombo && this.titlecombo.length > 0) {
                let arr = this.titlecombo.split('+');
                if (arr.length > 1) {
                    let arr1 = arr[0].split(' ');
                    if (arr1.length > 1) {
                        titlecomboshort += arr1[1];
                        titlecomboshort += "+Vé máy bay";
                    }
                    else {
                        titlecomboshort += arr1[0];
                        titlecomboshort += "+Vé máy bay";
                    }
                }
                else {
                    titlecomboshort = this.titlecombo;
                }
                this.bookCombo.titleComboShort = titlecomboshort;
            }
            this.bookCombo.Address = this.Address;
            this.bookCombo.ComboId = this.comboid;
            if (value == 1) {
                this.bookCombo.isFlightCombo = true;
                this.bookCombo.isFlashSale = false;
                this.bookCombo.isNormalCombo = false;
            }
            if (value == 2) {
                this.bookCombo.isFlashSale = true;
                this.bookCombo.isFlightCombo = false;
                this.bookCombo.isNormalCombo = false;
            }
            if (value == 3) {
                this.bookCombo.isNormalCombo = true;
                this.bookCombo.isFlashSale = false;
                this.bookCombo.isFlightCombo = false;
            }
            if (value == 4) {
                this.bookCombo.isFlashSale = true;
                this.bookCombo.isFlightCombo = false;
                this.bookCombo.isNormalCombo = false;
            }
            if (value == 5) {
                this.bookCombo.isFlashSale = true;
                this.bookCombo.isFlightCombo = false;
                this.bookCombo.isNormalCombo = false;
            }
            var diffday = 1;
            var diffdaystart = 1;
            if (this.comboDetail && this.comboDetail.comboDetail && this.comboDetail.comboDetail.stayTo) {
                diffday = moment__WEBPACK_IMPORTED_MODULE_4__(this.searchhotel.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_4__(this.comboDetail.comboDetail.stayTo), 'days');
            }
            if (this.comboDetail && this.comboDetail.comboDetail && this.comboDetail.comboDetail.stayFrom) {
                diffdaystart = moment__WEBPACK_IMPORTED_MODULE_4__(this.searchhotel.CheckInDate).diff(moment__WEBPACK_IMPORTED_MODULE_4__(this.comboDetail.comboDetail.stayFrom), 'days');
            }
            if (value == 1 && this.usermail && (diffday > 1 || diffdaystart < 0)) {
                this.presentToastwarming('Combo bắt đầu từ ' + moment__WEBPACK_IMPORTED_MODULE_4__(this.comboDetail.comboDetail.stayFrom).format('DD-MM-YYYY') + ' đến ' + moment__WEBPACK_IMPORTED_MODULE_4__(this.comboDetail.comboDetail.stayTo).format('DD-MM-YYYY') + ', Xin vui lòng chọn lại ngày khởi hành.');
                return;
            }
            else if (value == 1 && this.usermail && (diffday <= 1) && (diffdaystart >= 0)) {
                if (this.ischeckBOD) {
                    return;
                }
                if (this.arrchild1.length > 4) {
                    this.presentToastwarming('Số trẻ em không được lớn hơn số người lớn. Vui lòng chọn lại.');
                    return;
                }
                if (input == 0) {
                    if (this.comboDetail.list.length == 2) {
                        let actionSheet = yield this.actionsheetCtrl.create({
                            cssClass: 'action-sheets-basic-page',
                            header: 'Quý khách khởi hành từ đâu?',
                            buttons: [
                                {
                                    text: this.comboDetail.list[0].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[0].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[0]);
                                    }
                                },
                                {
                                    text: this.comboDetail.list[1].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[1].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[1]);
                                    }
                                },
                            ]
                        });
                        actionSheet.present();
                    }
                    else if (this.comboDetail.list.length == 4) {
                        let actionSheet = yield this.actionsheetCtrl.create({
                            cssClass: 'action-sheets-basic-page',
                            header: 'Quý khách khởi hành từ đâu?',
                            buttons: [
                                {
                                    text: this.comboDetail.list[0].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[0].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[0]);
                                    }
                                },
                                {
                                    text: this.comboDetail.list[1].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[1].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[1]);
                                    }
                                },
                                {
                                    text: this.comboDetail.list[2].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[2].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[2]);
                                    }
                                },
                                {
                                    text: this.comboDetail.list[3].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[3].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[3]);
                                    }
                                },
                            ]
                        });
                        actionSheet.present();
                    }
                    else if (this.comboDetail.list.length == 3) {
                        let actionSheet = yield this.actionsheetCtrl.create({
                            cssClass: 'action-sheets-basic-page',
                            header: 'Quý khách khởi hành từ đâu?',
                            buttons: [
                                {
                                    text: this.comboDetail.list[0].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[0].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[0]);
                                    }
                                },
                                {
                                    text: this.comboDetail.list[1].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[1].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[1]);
                                    }
                                },
                                {
                                    text: this.comboDetail.list[2].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[2].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[2]);
                                    }
                                },
                            ]
                        });
                        actionSheet.present();
                    }
                    else if (this.comboDetail.list.length == 1) {
                        let actionSheet = yield this.actionsheetCtrl.create({
                            cssClass: 'action-sheets-basic-page',
                            header: 'Quý khách khởi hành từ đâu?',
                            buttons: [
                                {
                                    text: this.comboDetail.list[0].departureName,
                                    handler: () => {
                                        this.searchhotel.searchCityName = this.comboDetail.list[0].departureName;
                                        this.choiceFlightDeparture(this.comboDetail.list[0]);
                                    }
                                }
                            ]
                        });
                        actionSheet.present();
                    }
                    else {
                        this.choiceFlightDeparture(this.comboDetail);
                    }
                }
                else {
                    this.choiceFlightDeparture(combolist);
                }
            }
            else if (value == 4) {
                this.searchhotel.roomnumber = this.searchhotel.roomnumber ? this.searchhotel.roomnumber : this.room;
                this.valueGlobal.checksendcb = false;
                const modal = yield this.modalCtrl.create({
                    component: _requestcombo1_requestcombo1__WEBPACK_IMPORTED_MODULE_1__["RequestCombo1Page"],
                    componentProps: {
                        aParameter: true,
                    }
                });
                modal.present();
                modal.onDidDismiss().then((data) => {
                    var se = this;
                    if ((se.valueGlobal.checksendcb)) {
                        se.zone.run(() => {
                            se.cin = se.searchhotel.CheckInDate ? se.searchhotel.CheckInDate : se.cin;
                            se.cout = se.searchhotel.CheckOutDate ? se.searchhotel.CheckOutDate : se.cout;
                            se.datecin = new Date(se.searchhotel.CheckInDate ? se.searchhotel.CheckInDate : se.cin);
                            se.datecout = new Date(se.searchhotel.CheckOutDate ? se.searchhotel.CheckOutDate : se.cout);
                            se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM-YYYY');
                            se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM-YYYY');
                            se.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD/MM');
                            se.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD/MM');
                            se.changedate = true;
                            se.hasComboRoom = false;
                            se.comboprice = se.combopriceontitle;
                            se.showpopup = true;
                            se.ischeck = true;
                            se.loadcomplete = false;
                            se.hotelRoomClasses = [];
                            se.emptyroom = false;
                            se.guest = se.searchhotel.adult + se.searchhotel.child;
                            se.room = se.searchhotel.roomnumber;
                            se.child = se.searchhotel.child;
                            se.adults = se.searchhotel.adult;
                            var date1 = new Date(se.cin);
                            var date2 = new Date(se.cout);
                            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                            se.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                            if (this.searchhotel.adult) {
                                this.guest = this.searchhotel.adult + this.searchhotel.child;
                                this.adults = this.searchhotel.adult;
                            }
                            if (this.searchhotel.child == 0) {
                                this.child = 0;
                            }
                            else {
                                this.child = this.searchhotel.child;
                            }
                            if (this.searchhotel.roomnumber) {
                                this.room = this.searchhotel.roomnumber;
                            }
                            this.arrchild = [];
                            if (this.searchhotel.arrchild) {
                                this.arrchild = this.searchhotel.arrchild;
                            }
                            this.totalAdult = this.adults;
                            for (let i = 0; i < this.arrchild.length; i++) {
                                if (this.arrchild[i].numage >= 4) {
                                    this.totalAdult++;
                                }
                            }
                            if (se.comboid) {
                                se.getDetailCombo(se.comboid);
                            }
                            se.checkPriceHotelDetail().then((check) => {
                                if (check) {
                                    se.getdataroom();
                                }
                                else {
                                    se.hotelRoomClasses = [];
                                    se.emptyroom = true;
                                    se.ischeckoutofroom = false;
                                    se.loadcomplete = true;
                                    se.ischeck = true;
                                    se.allowbookcombofc = false;
                                    se.allowbookcombofx = false;
                                }
                            });
                        });
                    }
                    else {
                        if (se.searchhotel.adult) {
                            se.guest = se.searchhotel.adult + se.searchhotel.child;
                        }
                        if (se.searchhotel.roomnumber) {
                            se.room = se.searchhotel.roomnumber;
                        }
                        if (se.searchhotel.CheckInDate) {
                            se.loadcomplete = true;
                            var date1 = new Date(se.searchhotel.CheckInDate);
                            var date2 = new Date(se.searchhotel.CheckOutDate);
                            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                            se.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        }
                    }
                });
            }
            else if (value == 2) {
                var self = this;
                var strroomname = "";
                this.arrroom = [];
                var objMealTypeRates;
                for (let i = 0; i < self.hotelRoomClasses.length; i++) {
                    if (this.comboDetail.roomId == self.hotelRoomClasses[i].Rooms[0].RoomID) {
                        self.arrroom.push(self.hotelRoomClasses[i]);
                        self.indexroom = i;
                        objMealTypeRates = self.hotelRoomClasses[i].MealTypeRates;
                        strroomname = self.hotelRoomClasses[i].ClassName;
                        break;
                    }
                }
                if (self.arrroom.length == 0 && self.hotelRoomClasses.length > 0) {
                    self.arrroom.push(self.hotelRoomClasses[0]);
                    self.indexroom = 0;
                    objMealTypeRates = self.hotelRoomClasses[0].MealTypeRates;
                    strroomname = self.hotelRoomClasses[0].ClassName;
                }
                if (objMealTypeRates) {
                    var date1 = new Date(this.searchhotel.CheckInDate);
                    var date2 = new Date(this.searchhotel.CheckOutDate);
                    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                    this.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    if (this.dateofcombo > this.duration + 1) {
                        var datein = new Date(this.cin);
                        var rescin = datein.setTime(datein.getTime() + (this.dateofcombo - 1) * 24 * 60 * 60 * 1000);
                        this.cout = moment__WEBPACK_IMPORTED_MODULE_4__(rescin).format('YYYY-MM-DD');
                    }
                    this.booking.CheckInDate = this.cin;
                    this.booking.CheckOutDate = this.cout;
                    this.booking.roomNb = objMealTypeRates[0].TotalRoom;
                    this.booking.Adults = this.adults;
                    this.booking.Child = this.child;
                    this.booking.CName = '';
                    this.booking.CEmail = this.usermail;
                    this.booking.indexroom = this.indexroom;
                    this.booking.ChildAge = this.arrchild1;
                    this.booking.HotelId = this.HotelID;
                    this.Roomif.RoomId = this.bookCombo.roomid;
                    this.booking.HotelName = this.name;
                    this.booking.RoomName = strroomname;
                    this.Roomif.Address = this.Address;
                    this.Roomif.dur = this.duration;
                    this.Roomif.arrroom = this.arrroom;
                    this.Roomif.roomtype = this.comboDetail.mealTypeName;
                    this.Roomif.jsonroom = this.jsonroom2.Hotels[0];
                    this.Roomif.imgHotel = this.imgHotel;
                    this.Roomif.arrrbed = [];
                    this.Roomif.objMealType = objMealTypeRates[0];
                    this.searchhotel.adult = this.adults;
                    this.searchhotel.child = this.child;
                    this.searchhotel.roomnumber = this.room;
                    this.searchhotel.CheckInDate = this.cin;
                    this.searchhotel.CheckOutDate = this.cout;
                    this.bookCombo.ComboDetail = this.comboDetail;
                    this.bookCombo.ComboTitle = this.titlecombo;
                    this.bookCombo.MealTypeName = this.comboDetail.mealTypeName;
                    this.bookCombo.MealTypeCode = this.comboDetail.mealTypeCode;
                    this.formParam.RoomNumber = this.room;
                    this.formParam.CheckOutDate = this.cout;
                    this.bookCombo.FormParam = this.formParam;
                    this.bookCombo.ObjectHotelDetail = this.objDetail;
                    this.bookCombo.ComboRoomPrice = this.comboDetail.comboDetail.totalPriceSale;
                    this.bookCombo.objComboDetail = this.comboDetail;
                    var options = {
                        method: 'GET',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
                        qs: {
                            token: '3b760e5dcf038878925b5613c32615ea3',
                            hotelcode: this.booking.HotelId,
                            roomcode: this.bookCombo.ComboDetail.comboDetail.roomId,
                            checkin: this.booking.CheckInDate,
                            checkout: this.booking.CheckOutDate,
                            totalroom: this.room
                        },
                        headers: {}
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
                        var rs = JSON.parse(body);
                        if (rs.Msg == "AL") {
                            self.Roomif.payment = rs.Msg;
                            self.Roomif.ischeckpayment = true;
                        }
                        else if (rs.Msg == "RQ") {
                            self.Roomif.payment = rs.Msg;
                            self.Roomif.ischeckpayment = false;
                        }
                        self.GetUserInfo();
                        self.navCtrl.navigateForward('/combocarnew');
                    });
                }
                else {
                    self.navCtrl.navigateForward('/combocarnew');
                }
            }
            else if (value == 5) {
                var self = this;
                var MealTypeRates = this.objroomfsale[0];
                var id = self.comboDetail.comboDetail.roomId;
                this.roomvalue = MealTypeRates.TotalRoom;
                this.arrroom = [];
                for (let i = 0; i < self.hotelRoomClasses.length; i++) {
                    if (id == self.hotelRoomClasses[i].Rooms[0].RoomID) {
                        this.arrroom.push(self.hotelRoomClasses[i]);
                        this.indexroom = i;
                        break;
                    }
                }
                for (let i = 0; i < this.arrroom[0].MealTypeRates.length; i++) {
                    var Meal = this.arrroom[0].MealTypeRates[i];
                    if (Meal.IsFlashSale == true && (Meal.Supplier == 'Internal' || Meal.Supplier == 'VINPEARL') && Meal.PromotionNote != '') {
                        this.indexmeal = i;
                        break;
                    }
                }
                var date1 = new Date(self.cin);
                var date2 = new Date(self.cout);
                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                self.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                self.booking.CheckInDate = self.cin;
                self.booking.CheckOutDate = self.cout,
                    self.booking.roomNb = self.room,
                    self.booking.Adults = self.adults,
                    self.booking.Child = self.child,
                    self.booking.CName = '',
                    self.booking.CEmail = self.usermail,
                    self.booking.cost = MealTypeRates.PriceAvgPlusTAStr,
                    self.booking.indexroom = self.indexroom,
                    self.booking.indexmealtype = this.indexmeal,
                    self.booking.HotelId = self.HotelID,
                    self.Roomif.RoomId = id,
                    self.booking.HotelName = self.name,
                    self.booking.RoomName = "roomName",
                    self.Roomif.Address = self.Address,
                    self.Roomif.dur = self.duration,
                    self.Roomif.arrroom = self.arrroom,
                    self.Roomif.roomnumber = MealTypeRates.TotalRoom,
                    self.Roomif.roomtype = MealTypeRates,
                    self.Roomif.jsonroom = self.jsonroom2.Hotels[0],
                    self.Roomif.imgHotel = self.imgHotel;
                self.Roomif.objMealType = MealTypeRates;
                self.Roomif.HotelRoomHBedReservationRequest = JSON.stringify(self.arrroom[0].HotelRoomHBedReservationRequest);
                self.Roomif.arrrbed = [];
                self.Roomif.imgRoom = self.arrroom[0].Rooms[0].ImagesMaxWidth320;
                self.searchhotel.adult = self.adults;
                self.searchhotel.child = self.child;
                self.searchhotel.roomnumber = self.room;
                self.searchhotel.CheckInDate = self.cin;
                self.searchhotel.CheckOutDate = self.cout;
                self.booking.code = self.hotelcode;
                self.Roomif.payment = "AL";
                self.Roomif.ischeckpayment = true;
                self.Roomif.roomcancelhbed = 1;
                self.bookCombo.ComboTitle = self.titlecombo;
                self.bookCombo.ComboId = self.comboid ? self.comboid : null;
                self.navCtrl.navigateForward('/roomdetailreview');
            }
            else if (value == 5 && !this.usermail) {
            }
        });
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
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
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_13__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
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
    presentWarning(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                buttons: ['Ok']
            });
            alert.present();
        });
    }
    sendRequestCombo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.bookCombo.Address = this.Address;
            this.bookCombo.ComboId = this.comboid ? this.comboid : null;
            this.bookCombo.isFlightCombo = true;
            this.bookCombo.isFlashSale = false;
            this.bookCombo.isNormalCombo = false;
            this.bookCombo.ComboDetail = this.comboDetail;
            let obj = this.hotelDetail;
            this.bookCombo.HotelCode = this.hotelcode;
            let titlecomboshort = '';
            if (this.titlecombo && this.titlecombo.length > 0) {
                let arr = this.titlecombo.split('+');
                if (arr.length > 1) {
                    let arr1 = arr[0].split(' ');
                    if (arr1.length > 1) {
                        titlecomboshort += arr1[1];
                        titlecomboshort += "+Vé máy bay";
                    }
                    else {
                        titlecomboshort += arr1[0];
                        titlecomboshort += "+Vé máy bay";
                    }
                }
                else {
                    titlecomboshort = this.titlecombo;
                }
                this.bookCombo.tileComboShort = titlecomboshort;
            }
            if (!this.ischeckBOD) {
                const modal = yield this.modalCtrl.create({
                    component: _requestcombo_requestcombo__WEBPACK_IMPORTED_MODULE_11__["RequestComboPage"]
                });
                modal.present();
                modal.onDidDismiss().then((data) => {
                    var se = this;
                    if ((se.searchhotel.CheckInDate && new Date(se.cin).toLocaleDateString() != new Date(se.searchhotel.CheckInDate).toLocaleDateString())
                        || (se.searchhotel.CheckOutDate && new Date(se.cout).toLocaleDateString() != new Date(se.searchhotel.CheckOutDate).toLocaleDateString())
                        || se.searchhotel.adult != se.adults || se.searchhotel.child != se.child) {
                        se.zone.run(() => {
                            se.cin = se.searchhotel.CheckInDate;
                            se.cout = se.searchhotel.CheckOutDate;
                            se.datecin = new Date(se.searchhotel.CheckInDate);
                            se.datecout = new Date(se.searchhotel.CheckOutDate);
                            se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD-MM-YYYY');
                            se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD-MM-YYYY');
                            se.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecin).format('DD/MM');
                            se.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.datecout).format('DD/MM');
                            if (se.searchhotel.child) {
                                se.child = se.searchhotel.child;
                            }
                            se.changedate = true;
                            se.hasComboRoom = false;
                            se.comboprice = se.combopriceontitle;
                            se.showpopup = true;
                            se.ischeck = true;
                            se.loadcomplete = false;
                            se.emptyroom = false;
                            se.hotelRoomClasses = [];
                            se.guest = se.searchhotel.adult + se.searchhotel.child;
                            se.room = se.searchhotel.roomnumber ? se.searchhotel.roomnumber : se.room;
                            se.child = se.searchhotel.child;
                            se.adults = se.searchhotel.adult;
                            if (se.searchhotel.CheckInDate) {
                                var date1 = new Date(se.searchhotel.CheckInDate);
                                var date2 = new Date(se.searchhotel.CheckOutDate);
                                var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                                se.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                            }
                            if (se.comboid) {
                                se.getDetailCombo(se.comboid);
                            }
                            se.checkPriceHotelDetail().then((check) => {
                                if (check) {
                                    se.getdataroom();
                                }
                                else {
                                    se.hotelRoomClasses = [];
                                    se.emptyroom = true;
                                    se.ischeckoutofroom = false;
                                    se.loadcomplete = true;
                                    se.ischeck = true;
                                    se.allowbookcombofc = false;
                                    se.allowbookcombofx = false;
                                }
                            });
                        });
                    }
                    else {
                        if (se.searchhotel.adult) {
                            se.guest = se.searchhotel.adult + se.searchhotel.child;
                            se.adults = se.searchhotel.adult;
                        }
                        if (se.searchhotel.roomnumber) {
                            se.room = se.searchhotel.roomnumber;
                        }
                        if (se.searchhotel.CheckInDate) {
                            se.loadcomplete = true;
                            var date1 = new Date(se.searchhotel.CheckInDate);
                            var date2 = new Date(se.searchhotel.CheckOutDate);
                            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                            se.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
                        }
                    }
                });
            }
        });
    }
    choiceFlightDeparture(combodetail) {
        let se = this;
        var date1 = new Date(se.searchhotel.CheckInDate);
        var date2 = new Date(se.searchhotel.CheckOutDate);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        se.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (se.dateofcombo > se.duration + 1) {
            se.showConfirmAutoAddDayCombo(se.dateofcombo - 1, combodetail);
        }
        else {
            se.continueBookCombo(combodetail);
        }
    }
    showConfirmAutoAddDayCombo(day, combodetail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create(({
                message: 'Combo yêu cầu đặt ít nhất ' + day + ' đêm, quý khách muốn tiếp tục?',
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Tiếp tục',
                        role: 'OK',
                        handler: () => {
                            this.continueBookCombo(combodetail);
                        }
                    }
                ]
            }));
            alert.present();
        });
    }
    continueBookCombo(combodetail) {
        var se = this, self = this;
        self.arrroom = [];
        var objMealTypeRates;
        var strroomname = "";
        for (let i = 0; i < self.hotelRoomClasses.length; i++) {
            if (this.comboDetail.comboDetail.roomId == self.hotelRoomClasses[i].Rooms[0].RoomID) {
                self.arrroom.push(self.hotelRoomClasses[i]);
                self.indexroom = i;
                objMealTypeRates = self.hotelRoomClasses[i].MealTypeRates;
                strroomname = self.hotelRoomClasses[i].ClassName;
                break;
            }
        }
        if (self.arrroom.length == 0 && self.hotelRoomClasses.length > 0) {
            self.arrroom.push(self.hotelRoomClasses[0]);
            self.indexroom = 0;
            objMealTypeRates = self.hotelRoomClasses[0].MealTypeRates;
            strroomname = self.hotelRoomClasses[0].ClassName;
        }
        self.roomvalue = objMealTypeRates[0].TotalRoom;
        if (se.loginuser && se.dateofcombo > se.duration + 1) {
            var datein = new Date(se.cin);
            var rescin = datein.setTime(datein.getTime() + (se.dateofcombo - 1) * 24 * 60 * 60 * 1000);
            if (se.comboDetailEndDate && moment__WEBPACK_IMPORTED_MODULE_4__(rescin).diff(moment__WEBPACK_IMPORTED_MODULE_4__(se.comboDetailEndDate), 'days') > 1) {
                se.presentToastwarming('Combo chỉ áp dụng đến ngày ' + moment__WEBPACK_IMPORTED_MODULE_4__(se.comboDetailEndDate).format('DD-MM-YYYY') + '.Vui lòng chọn ngày khác.');
                return;
            }
            se.cout = moment__WEBPACK_IMPORTED_MODULE_4__(rescin).format('YYYY-MM-DD');
            se.searchhotel.CheckInDate = se.cin;
            se.searchhotel.CheckOutDate = se.cout;
            se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckInDate).format('DD-MM-YYYY');
            se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckOutDate).format('DD-MM-YYYY');
            se.cindisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckInDate).format('DD/MM');
            se.coutdisplayhr = moment__WEBPACK_IMPORTED_MODULE_4__(se.searchhotel.CheckOutDate).format('DD/MM');
        }
        se.booking.CheckInDate = se.cin;
        se.booking.CheckOutDate = se.cout;
        se.searchhotel.CheckInDate = se.cin;
        se.searchhotel.CheckOutDate = se.cout;
        se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
        se.storage.set('hasChangeDate', true);
        se.getdata(false);
        self.booking.roomNb = objMealTypeRates[0].TotalRoom,
            self.booking.Adults = self.adults,
            self.booking.Child = self.child,
            self.booking.CName = '',
            self.booking.CEmail = self.usermail,
            self.booking.cost = combodetail.details[0].totalPriceSale,
            self.booking.indexroom = self.indexroom,
            self.booking.ChildAge = self.arrchild1,
            self.booking.HotelId = self.HotelID,
            self.Roomif.RoomId = self.bookCombo.roomid,
            self.booking.HotelName = self.name,
            self.booking.RoomName = strroomname,
            self.Roomif.Address = self.Address,
            self.Roomif.dur = self.duration,
            self.Roomif.arrroom = self.arrroom,
            self.Roomif.roomnumber = objMealTypeRates[0].TotalRoom,
            self.Roomif.roomtype = self.comboDetail.mealTypeName,
            self.Roomif.jsonroom = self.jsonroom2.Hotels[0],
            self.Roomif.imgHotel = self.imgHotel;
        self.Roomif.arrrbed = [];
        self.Roomif.imgRoom = self.arrroom[0].Rooms[0].ImagesMaxWidth320;
        self.searchhotel.adult = self.adults;
        self.searchhotel.child = self.child;
        self.searchhotel.roomnumber = self.room;
        self.searchhotel.CheckInDate = self.cin;
        self.searchhotel.CheckOutDate = self.cout;
        self.bookCombo.ComboDetail = combodetail;
        self.bookCombo.arrivalCode = self.comboDetail.arrivalCode;
        self.bookCombo.ComboTitle = self.titlecombo;
        self.bookCombo.MealTypeName = self.comboDetail.mealTypeName;
        self.bookCombo.MealTypeCode = self.comboDetail.mealTypeCode;
        self.formParam.CheckOutDate = self.cout;
        self.bookCombo.FormParam = self.formParam;
        self.bookCombo.HotelCode = self.hotelcode;
        self.bookCombo.arrPassengers = [];
        self.bookCombo.arrlugage = [];
        self.bookCombo.hasInsurrance = self.hasInsurrance ? true : false;
        self.bookCombo.checkInsurranceFee = self.checkInsurranceFee;
        self.bookCombo.objInsurranceFee = self.objInsurranceFee;
        self.bookCombo.objComboDetail = self.comboDetail;
        self.bookCombo.MealTypeIndex = null;
        self.navCtrl.navigateForward('/flightcomboreviews');
    }
    showRoomInfo() {
        this.showroominfo = !this.showroominfo;
    }
    showDepartureCalendar(combolist) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (!se.loadcomplete) {
                se.presentToastwarming('Giá đang được cập nhật, xin vui lòng đợi trong giây lát!');
                return;
            }
            se.loadcomplete = false;
            se.searchhotel.hotelID = se.HotelID;
            se.searchhotel.roomID = se.RoomID;
            se.searchhotel.ischeckBOD = se.ischeckBOD;
            const modal = yield se.modalCtrl.create({
                component: _departurecalendar_departurecalendar__WEBPACK_IMPORTED_MODULE_16__["DepartureCalendarPage"]
            });
            se.gf.setParams({ comboId: se.comboid, fromPlace: combolist.departureCode, comboStartDate: se.comboDetail.startDate, comboEndDate: se.comboDetail.endDate }, 'departure');
            yield modal.present();
            modal.onDidDismiss().then((data) => {
                if (!data.data !== null) {
                    se.platform.ready().then(() => {
                        se.platform.backButton.subscribe(() => {
                            se.goback();
                        });
                    });
                    if (!data.data) {
                        se.valueGlobal.notRefreshDetail = false;
                        se.ischeckBOD = se.searchhotel.ischeckBOD;
                        se.bookCombo.Address = se.Address;
                        se.bookCombo.ComboId = se.comboid;
                        se.presentLoadingRelated(3000);
                        se.loaddata();
                        Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
                            let val = 1;
                            if (se.fc) {
                                se.bookCombo.isFlightCombo = true;
                                se.bookCombo.isFlashSale = false;
                                se.bookCombo.isNormalCombo = false;
                                val = 1;
                                se.requestCombo(val, combolist, 1);
                            }
                            if (se.fs) {
                                se.bookCombo.isFlashSale = true;
                                se.bookCombo.isFlightCombo = false;
                                se.bookCombo.isNormalCombo = false;
                                se.requestCombo(val, combolist, 2);
                                val = 2;
                            }
                            if (se.nm) {
                                se.bookCombo.isNormalCombo = true;
                                se.bookCombo.isFlashSale = false;
                                se.bookCombo.isFlightCombo = false;
                                se.requestCombo(val, combolist, 3);
                                val = 3;
                            }
                        }, 3500);
                    }
                    else {
                        se.loadcomplete = true;
                    }
                }
                else {
                    se.loadcomplete = true;
                }
                se.gf.googleAnalytion('hoteldetail', 'showdepaturecalendar', se.nm);
            });
        });
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.",
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
                            this.storage.remove('blogtripdefault');
                            this.navCtrl.navigateForward('/');
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
                            this.storage.remove('blogtripdefault');
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    presentLoadingDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    presentLoadingNew() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                duration: 250
            });
            loader.present();
        });
    }
    presentLoadingRelated(time) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                message: "",
                duration: time
            });
            loader.present();
        });
    }
    presentLoadingnotime() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                message: "",
            });
            this.loader.present();
        });
    }
    openWebpage(url) {
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: true,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#ff0000'
                })
                    .subscribe((result) => {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed')
                        console.log('Closed');
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    getBOD(roomid) {
        var se = this;
        this.ischeckBOD = false;
        var options = {
            method: 'GET',
            url: 'https://gate.ivivu.com/get-blackout-date',
            qs: { hotelId: se.HotelID ? se.HotelID : se.searchhotel.hotelID, roomId: roomid },
            headers: {
                'postman-token': '86c67bdc-5fcd-0240-5549-f3ea2b31faf8',
                'cache-control': 'no-cache'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_3__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            var BOD = JSON.parse(body);
            var arrBOD = BOD.BlackOutDates;
            if (arrBOD) {
                if (arrBOD.length > 0) {
                    var checkcintemp = new Date(se.cin);
                    var checkdatecout = new Date(se.cout);
                    var checkcin = moment__WEBPACK_IMPORTED_MODULE_4__(checkcintemp).format('YYYYMMDD');
                    var checkcout = moment__WEBPACK_IMPORTED_MODULE_4__(checkdatecout).format('YYYYMMDD');
                    for (let i = 0; i < arrBOD.length; i++) {
                        var checkBODtemp = new Date(arrBOD[i]);
                        var checkBOD = moment__WEBPACK_IMPORTED_MODULE_4__(checkBODtemp).format('YYYYMMDD');
                        if (checkcin <= checkBOD && checkBOD < checkcout) {
                            se.ischeckBOD = true;
                            break;
                        }
                    }
                }
            }
            se.checkBODdone = true;
        });
    }
    ionViewWillLeave() {
        this.searchhotel.isRefreshDetail = false;
    }
    seemoreroomdetail(value, groupId, mealtypegroupId) {
        var se = this;
        if (value == 1) {
            se.checkAddAndRemoveItem(1, groupId);
            var objmealtypes = jquery__WEBPACK_IMPORTED_MODULE_21__('.group-' + groupId + ' .cls-hidden');
            if (objmealtypes && objmealtypes.length > 0) {
                for (let i = 0; i < objmealtypes.length; i++) {
                    jquery__WEBPACK_IMPORTED_MODULE_21__(objmealtypes[i]).removeClass('cls-hidden').addClass('cls-visible');
                }
            }
            se.crollToTopGroup(1, groupId);
        }
        else {
            se.checkAddAndRemoveItem(2, groupId);
            var objmealtypes = jquery__WEBPACK_IMPORTED_MODULE_21__('.group-' + groupId + ' .cls-visible');
            if (objmealtypes && objmealtypes.length > 0) {
                for (let i = 0; i < objmealtypes.length; i++) {
                    jquery__WEBPACK_IMPORTED_MODULE_21__(objmealtypes[i]).removeClass('cls-visible').addClass('cls-hidden');
                }
            }
            se.crollToTopGroup(2, groupId);
        }
    }
    checkAddAndRemoveItem(type, groupId) {
        var se = this;
        if (type == 1) {
            if (se.mealtypegrouplist && se.mealtypegrouplist.length > 0) {
                if (!se.gf.checkExistsIndex(se.mealtypegrouplist, groupId)) {
                    se.mealtypegrouplist.push(groupId);
                }
            }
            else {
                se.mealtypegrouplist.push(groupId);
            }
        }
        else {
            se.gf.removeItem(se.mealtypegrouplist, groupId);
        }
    }
    crollToTopGroup(value, groupId) {
        Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
            var objHeight = value == 2 ? jquery__WEBPACK_IMPORTED_MODULE_21__('.div-show-' + groupId) : jquery__WEBPACK_IMPORTED_MODULE_21__('.div-hide-' + groupId);
            if (objHeight && objHeight.length > 0) {
                var h = 0;
                if (groupId == 0) {
                    h = objHeight.offsetParent()[0].offsetTop - 50;
                }
                else {
                    let idx = groupId - 1;
                    var groupHeight = 0;
                    for (let i = 0; i < groupId; i++) {
                        groupHeight += jquery__WEBPACK_IMPORTED_MODULE_21__('.group-' + i).parent()[0].offsetHeight;
                    }
                    h = objHeight.offsetParent()[0].offsetTop - 50 + groupHeight;
                }
                if (this.content) {
                    this.content.scrollToPoint(0, h, 500);
                }
            }
        }, 100);
    }
    imgreview(arrimgreview, indeximgreview, CustomerName, DateStayed) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.searchhotel.arrimgreview = arrimgreview;
            this.searchhotel.indexreviewimg = indeximgreview;
            this.searchhotel.cusnamereview = CustomerName;
            this.searchhotel.datereview = DateStayed;
            const modal = yield this.modalCtrl.create({
                component: _hotelreviewsimage_hotelreviewsimage__WEBPACK_IMPORTED_MODULE_24__["HotelreviewsimagePage"],
            });
            modal.present();
        });
    }
    changeinfo() {
        if (!this.loadcomplete) {
            this.presentToastwarming('Giá đang được cập nhật, xin vui lòng đợi trong giây lát!');
            return;
        }
        this.valueGlobal.backValue = 'popupinfobkg';
        this.searchhotel.ChildAgeTo = this.ChildAgeTo;
        this.navCtrl.navigateForward('/popupinfobkg');
    }
    seemoreimgrv() {
        this.searchhotel.hotelID = this.HotelID;
        this.searchhotel.hotelName = this.hotelname;
        this.valueGlobal.notRefreshDetail = true;
        this.navCtrl.navigateForward('/cusimgreview');
    }
    showInstallmentDetail() {
        var se = this;
        se.valueGlobal.notRefreshDetail = true;
        se.navCtrl.navigateForward('/installmentdetail');
    }
    resetShowHidePanel() {
        var se = this;
        for (let index = 0; index < se.hotelRoomClasses.length; index++) {
            se.checkAddAndRemoveItem(2, index);
            var objmealtypes = jquery__WEBPACK_IMPORTED_MODULE_21__('.group-' + index + ' .cls-visible');
            if (objmealtypes && objmealtypes.length > 0) {
                for (let i = 0; i < objmealtypes.length; i++) {
                    jquery__WEBPACK_IMPORTED_MODULE_21__(objmealtypes[i]).removeClass('cls-visible').addClass('cls-hidden');
                }
            }
        }
    }
    clearBlurEffect() {
        Object(timers__WEBPACK_IMPORTED_MODULE_20__["setTimeout"])(() => {
            jquery__WEBPACK_IMPORTED_MODULE_21__('img.preview').removeClass('preview');
        }, 500);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])('myScrollVanish'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HotelDetailPage.prototype, "scrollArea", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('scrollArea'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], HotelDetailPage.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('mySlider'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"])
], HotelDetailPage.prototype, "slider", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('map'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
], HotelDetailPage.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"])
], HotelDetailPage.prototype, "routerOutlets", void 0);
HotelDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-hoteldetail',
        template: __webpack_require__(/*! ./hoteldetail.html */ "./src/app/hoteldetail/hoteldetail.html"),
        styles: [__webpack_require__(/*! ./hoteldetail.scss */ "./src/app/hoteldetail/hoteldetail.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Bookcombo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_10__["SocialSharing"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_14__["GlobalFunction"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_19__["SafariViewController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_22__["Network"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_23__["NetworkProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_17__["ActivatedRoute"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_14__["ActivityService"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_25__["SplashScreen"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_26__["Facebook"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_27__["MytripService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_28__["flightService"]])
], HotelDetailPage);



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
//# sourceMappingURL=hoteldetail-hoteldetail-module.js.map