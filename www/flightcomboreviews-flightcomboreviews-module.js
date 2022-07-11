(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcomboreviews-flightcomboreviews-module"],{

/***/ "./src/app/flightcomboreviews/flightcomboreviews.html":
/*!************************************************************!*\
  !*** ./src/app/flightcomboreviews/flightcomboreviews.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-row>\r\n    <ion-col style=\"text-align: center;height: 56px;z-index: 999;\">\r\n      <div style=\"align-self: center\" >\r\n        <div style=\"position: absolute;height: 48px;width: 48px;\" (click)=\"goback()\">\r\n            <img class=\"header-img-oneline\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n        </div>\r\n        \r\n        <div class=\"div-title\"><label class=\"text-title\">{{titlecombo}}</label></div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-header>\r\n<ion-content padding class=\"flight-combo-reviews-page\">\r\n  <div class=\"div-cinout\">\r\n    <div class=\"row-cin-cout\">\r\n      <ion-grid class=\"cls-gridcinout\">\r\n        <ion-row>\r\n          <ion-col size=\"4\" style=\"padding:0\" (click)=\"changeDateInfo()\">\r\n            <ion-label class=\"text-cinout\" stacked>{{cindisplay}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"4\" style=\"padding:0\" (click)=\"changeDateInfo()\">\r\n            <ion-label class=\"text-cinout\" stacked>{{coutdisplay}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"padding:0\">\r\n            <ion-label class=\"text-cinout\" stacked>{{adultsdisplay}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"padding:0\">\r\n            <ion-label class=\"text-cinout\" stacked>{{childrendisplay}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <ion-row class=\"p-top-4\" style=\"height: 10px; margin-top: -7px;\">\r\n          <ion-col size=\"3\" style=\"padding:0\">\r\n          \r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"padding:0\">\r\n            <img  src=\"./assets/ic_facility/ic_arrow.svg\">\r\n          </ion-col>\r\n       \r\n\r\n          <ion-col size=\"3\" style=\"padding:0\">\r\n           \r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"padding:0\">\r\n           \r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" style=\"padding:0\">\r\n           \r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"p-top-4\">\r\n          <ion-col size=\"4\" style=\"padding:0\" (click)=\"changeDateInfo()\">\r\n            <p class=\"text-info-guest text-p-info\" stacked>{{cinthudisplay}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"4\" style=\"padding:0\" (click)=\"changeDateInfo()\">\r\n            <p class=\"text-info-guest text-p-info\" stacked>{{coutthudisplay}}</p>\r\n          </ion-col>\r\n          <ion-col size=\"2\" style=\"padding:0\">\r\n            <p class=\"text-info-guest text-p-info\">người lớn\r\n            </p>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" style=\"padding:0\">\r\n            <p class=\"text-info-guest text-p-info\">trẻ em {{textage}}\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <div class=\"div-hotel-info\">\r\n      <div class=\"div-wrapimg\">\r\n        <img [ngClass]=\"bookCombo.isshuttlebus.length>0 ? 'img-hotel-avatar-123' : 'img-hotel-avatar'\" src={{Avatar}}>\r\n      </div>\r\n      <div class=\"div-hotel-name\">\r\n        <div class=\"div-hotel-name-1\">\r\n          <ion-label class=\"text-hotel-name\" style=\"margin-top: 0;padding-bottom: 8px;font-size:14px;font-weight:bold\"\r\n            text-wrap>{{Name}}<span class=\"img-rating\">\r\n              <img *ngIf=\"Rating!=0\" src={{Rating}}>\r\n            </span>\r\n          </ion-label>\r\n\r\n        </div>\r\n        <div>\r\n          <div *ngIf=\"bookCombo.isshuttlebus.length>0\" class=\"div-flex\" text-wrap>\r\n            <div  text-wrap>\r\n              <img src=\"./assets/ic_review/ic_bus.svg\">\r\n            </div>\r\n            <div (click)=\"nextShuttlebus()\" class=\"text-p text-width-190 margin-left-3 color-blue\" text-wrap>\r\n              <span >Lịch trình Shuttle Bus</span>\r\n            </div>\r\n        \r\n          </div>\r\n          <div class=\"div-flex margin-top-3\" text-wrap>\r\n            <div  text-wrap>\r\n              <img src=\"./assets/ic_review/ic_bed.svg\">\r\n            </div>\r\n            <div class=\"text-p text-width-190 margin-left-3\" text-wrap>\r\n              <span >{{roomnumber}} {{RoomType}} | {{nameroom}}</span>\r\n            </div>\r\n        \r\n          </div>\r\n          <div class=\"div-flex margin-top-3\">\r\n            <span class=\"text-p text-width-190\" text-wrap>\r\n              <img src=\"./assets/ic_review/ic_food.svg\"> {{breakfast}}\r\n            </span>\r\n           \r\n          </div>\r\n          <div *ngIf=\"PriceAvgPlusTAStr && loadflightpricedone\" class=\"div-flex margin-top-3\" style=\"margin-left: -2px;\" text-wrap>\r\n            <div  text-wrap>\r\n              <img src=\"./assets/iconaccount/info.svg\">\r\n            </div>\r\n            <div  class=\"text-p text-width-190 margin-left-3 color-blue\" text-wrap>\r\n              <span *ngIf=\"statusRoom=='AL'\" >Xác nhận ngay</span>\r\n              <span *ngIf=\"statusRoom!='AL'\" >Xác nhận trong 60 phút</span>\r\n            </div>\r\n            <span  style=\"right: 0px;\" class=\"text-change mtt-2\">\r\n              <span (click)=\"upgradeRoom()\" class=\"margin-right-5\">Đổi</span> <img src=\"./assets/imgs/vector.svg\">\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr class=\"cls-hr\" style=\"margin-top:22px\">\r\n  <div>\r\n    <ion-row *ngIf=\"!loadflightpricedone\" style=\"height: 100px\">\r\n      <ion-col style=\"text-align: center;align-self: center\">\r\n        <ion-spinner style=\"height: 84px\" name=\"bubbles\" class=\"spinner-bubbles hydrated\"></ion-spinner>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"!loadflightpricedone\">\r\n      <ion-col style=\"text-align: center;align-self: center;color: #828282\">\r\n        <label>Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!</label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div *ngIf=\"PriceAvgPlusTAStr\">\r\n    <div class=\"m-top-16 m-bottom-16\" *ngIf=\"loadflightpricedone\">\r\n      <div class=\"div-flex\">\r\n        <label class=\"div-flight-label\">\r\n          {{de_departdatestr}}\r\n        </label>\r\n        <label *ngIf=\"de_departpriceincrease\" class=\"div-flight-label text-charge\">\r\n          Phụ thu vé\r\n        </label>\r\n        <label  *ngIf=\"!de_departpriceincrease\" class=\"div-flight-label text-charge\">\r\n          Giảm giá vé\r\n        </label>\r\n      </div>\r\n      <div class=\"div-flight-time div-flex\">\r\n        <div class=\"div-time div-flex\">\r\n          <div class=\"depart-time\">{{de_departtime}}</div>\r\n          <img class=\"flight-img-arrow\" src=\"./assets/imgs/ic_arrow_right.svg\">\r\n          <div class=\"landing-time\">{{re_departtime}}</div>\r\n        </div>\r\n        <div class=\"div-time text-charge font-size-14 mt-2\" *ngIf=\"!de_departpriceincrease\">\r\n          <div>- {{de_flightpricetitle}}<span class=\"div-flight-label\"> đ</span></div>\r\n        </div>\r\n        <div class=\"div-time text-charge font-size-14 mt-2\" *ngIf=\"de_departpriceincrease\">\r\n          <div>+ {{de_flightpricetitle}} <span class=\"div-flight-label\"> đ</span></div>\r\n        </div>\r\n  \r\n      </div>\r\n      <div class=\"div-flight-label letter-spacing\">\r\n        {{departlocationdisplay}}\r\n      </div>\r\n  \r\n      <div [ngClass]=\"idx==0 ? 'div-logo div-flex mt-6' : 'div-none' \"  *ngFor=\"let com of listDeparture; let idx = index\" >\r\n        <img class=\"img-logo\" *ngIf=\"idx==0 && com.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\r\n        <img class=\"img-logo\" *ngIf=\"idx==0 && com.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\r\n        <img class=\"img-logo logo-vna\" *ngIf=\"idx==0 && com.airlineCode == 'VietnamAirlines' && !com.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\r\n        <img class=\"img-logo logo-vna\" *ngIf=\"idx==0 && com.operatedBy && com.urlLogo\" [src]=\"com.urlLogo\">\r\n        <img class=\"img-logo\" *ngIf=\"idx==0 && com.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\r\n        <div class=\"div-flight-name margin-left-5\" *ngIf=\"idx==0\">{{com.airlineCode}}</div> \r\n        <span *ngIf=\"idx==0\" class=\"div-flight-ticket margin-left-5  margin-right-5\"> · </span>  <div class=\"div-flight-ticket\"  *ngIf=\"idx==0\">{{com.ticketClass}}</div>\r\n        <div  *ngIf=\"idx==0\" (click)=\"showListFlight(idx)\" class=\"text-change mtt-2\">Đổi<img class=\"margin-left-5\" src=\"./assets/imgs/vector.svg\">\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"operatedBydep\" class=\"text-operatedBy\">{{operatedBydep}}</div>\r\n      <hr class=\"m-top-15 m-bottom-16\">\r\n      <div class=\"div-flex\">\r\n        <label class=\"div-flight-label\">\r\n          {{ar_departdatestr}}\r\n        </label>\r\n        <label *ngIf=\"ar_departpriceincrease\" class=\"div-flight-label text-charge\">\r\n          Phụ thu vé\r\n        </label>\r\n        <label *ngIf=\"!ar_departpriceincrease\" class=\"div-flight-label text-charge\">\r\n          Giảm giá vé\r\n        </label>\r\n      </div>\r\n      <div class=\"div-flight-time div-flex\">\r\n        <div class=\"div-time div-flex\">\r\n          <div class=\"depart-time\">{{ar_departtime}}</div>\r\n          <img class=\"flight-img-arrow\" src=\"./assets/imgs/ic_arrow_right.svg\">\r\n          <div class=\"landing-time\">{{ar_returntime}}</div>\r\n        </div>\r\n        <div class=\"div-time text-charge font-size-14 mt-2\" *ngIf=\"!ar_departpriceincrease\">\r\n          <div>- {{ar_flightpricetitle}}<span class=\"div-flight-label\"> đ</span></div>\r\n        </div>\r\n        <div class=\"div-time text-charge font-size-14 mt-2\" *ngIf=\"ar_departpriceincrease\">\r\n          <div>+ {{ar_flightpricetitle}} <span class=\"div-flight-label\"> đ</span></div>\r\n        </div>\r\n  \r\n      </div>\r\n      <div class=\"div-flight-label letter-spacing\">\r\n        {{returnlocationdisplay}}\r\n      </div>\r\n  \r\n      <div [ngClass]=\"idx==1 ? 'div-logo div-flex mt-6' : 'div-none' \"   *ngFor=\"let com of listDeparture; let idx = index\" >\r\n        <img class=\"img-logo\" *ngIf=\"idx==1 && com.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\r\n        <img class=\"img-logo\" *ngIf=\"idx==1 && com.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\r\n        <img class=\"img-logo logo-vna\" *ngIf=\"idx==1 && com.airlineCode == 'VietnamAirlines' && !com.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\r\n        <img class=\"img-logo logo-vna\" *ngIf=\"idx==1 && com.operatedBy && com.urlLogo\" [src]=\"com.urlLogo\">\r\n        <img class=\"img-logo\" *ngIf=\"idx==1 && com.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\r\n        <div class=\"div-flight-name margin-left-5\" *ngIf=\"idx==1\">{{com.airlineCode}}</div> <span class=\"div-flight-ticket margin-left-5  margin-right-5\"> · </span>  <div class=\"div-flight-ticket\"  *ngIf=\"idx==1\">{{com.ticketClass}}</div>\r\n        <div *ngIf=\"idx==1\" (click)=\"showListFlight(idx)\" class=\"text-change mtt-2\">Đổi<img class=\"margin-left-5\" src=\"./assets/imgs/vector.svg\">\r\n        </div>\r\n     \r\n      </div>\r\n      <div *ngIf=\"operatedByret\" class=\"text-operatedBy\">{{operatedByret}}</div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n  <hr class=\"cls-hr\">\r\n  <!-- chính sách hủy combo -->\r\n  <div *ngIf=\"PriceAvgPlusTAStr && loadflightpricedone\">\r\n    <ion-item style=\"--inner-border-width: 0 0 0px 0;margin-left: -15px !important\">\r\n      <label class=\"depart-title\">\r\n        Thông tin hành lý ký gửi\r\n      </label>\r\n      <div (click)=\"buyLuggage()\">\r\n        <span class=\"text-luggage margin-left-8\">Đi: {{totaldepluggage}} kg.</span>\r\n        <span class=\"text-luggage margin-left-8\">Về: {{totalretluggage}} kg.</span>\r\n       </div>\r\n      <ion-icon class=\"cls-icon-img\" slot=\"end\" name=\"ios-arrow-round-forward\"  (click)=\"buyLuggage()\"></ion-icon>\r\n    </ion-item>\r\n    <hr class=\"cls-hr\">\r\n  </div>\r\n  <div *ngIf=\"PriceAvgPlusTAStr && loadflightpricedone\" (click)=\"showPenalty()\">\r\n    <ion-item style=\"--inner-border-width: 0 0 0px 0;margin-left: -15px !important\">\r\n      <label class=\"depart-title\">\r\n        Chính sách hủy combo\r\n      </label>\r\n      <ion-icon class=\"cls-icon-img\" slot=\"end\" name=\"ios-arrow-round-forward\"></ion-icon>\r\n    </ion-item>\r\n    <hr class=\"cls-hr\">\r\n  </div>\r\n    <div *ngIf=\"point>0 && PriceAvgPlusTAStr&& loadflightpricedone\" class=\"div-voucher\">\r\n      <div class=\"div-flex\">\r\n        <div class=\"div-first\">\r\n          <div *ngIf=\"!ischeckpoint\" class=\"div-checkpoint\">\r\n              <ion-checkbox class=\"check-point\" mode=\"md\" (ionChange)=\"edit()\" [disabled]=\"ischeckbtnpromo==true?'true':false\" checked=\"false\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\r\n              <div class=\"div-point cls-ml8\">\r\n                <div  class=\"text-point\">Dùng {{pointshow}} điểm</div>\r\n                <div class=\"num-point\">\r\n                (-{{price}}đ)\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <div *ngIf=\"ischeckpoint\" class=\"div-checkpoint\">\r\n              <ion-checkbox class=\"check-point\" mode=\"md\" (ionChange)=\"edit()\" checked=\"false\" [disabled]=\"ischeckbtnpromo==true?'true':false\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\r\n              <div class=\"div-point cls-ml8\">\r\n                <div  class=\"text-point\">Dùng {{pointshow}} điểm</div>\r\n                <div class=\"num-point\">\r\n                (-{{PriceAvgPlusTAStr}}đ)\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <div  class=\"div-col-split\">\r\n        </div>\r\n         \r\n        <div *ngIf=\"!ischeck\" class=\"div-promotion\">\r\n        <ion-label (click)=\"showdiscount()\" class=\"text-point\">{{textpromotion}}</ion-label>\r\n        </div>\r\n        <div *ngIf=\"ischeck\" class=\"div-promotion\">\r\n          <ion-label class=\"text-promotion\">Nhập mã giảm giá</ion-label>\r\n          </div>\r\n      </div>\r\n      <hr class=\"cls-hr\" >\r\n    <div *ngIf=\"ischeck||ischeckbtnpromo&& loadflightpricedone\" >\r\n        <ion-row>\r\n          <ion-col size=\"5.8\" style=\"padding: 0;\">\r\n            <div>\r\n              <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{ adultsdisplay}} người lớn ,\r\n      {{childrendisplay}} trẻ em</h2>\r\n              <p  class=\"text-fee\">Giá đã bao gồm thuế & phí</p>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6.2\" style=\"padding: 0;\" (click)=\"showComboDetail()\">\r\n            <p  class=\"total-price\" style=\"text-align: right\">\r\n              {{Pricepointshow}}đ\r\n              <sup>\r\n                <img src=\"./assets/ic_green/ic_info.svg\">\r\n              </sup>\r\n            </p>\r\n           \r\n            <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\r\n              {{PriceAvgPlusTAStr}}đ\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <div *ngIf=\"!ischeck&&!ischeckbtnpromo\" >\r\n          <ion-row>\r\n            <ion-col size=\"5.8\" style=\"padding: 0;\">\r\n              <div>\r\n                <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{ adultsdisplay}} người lớn ,\r\n      {{childrendisplay}} trẻ em</h2>\r\n                <p  class=\"text-fee\">Giá đã bao gồm thuế & phí</p>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"6.2\" style=\"padding: 0;\" (click)=\"showComboDetail()\">\r\n              <p  class=\"total-price\" style=\"text-align: right\">\r\n                  {{PriceAvgPlusTAStr}}đ\r\n                  <sup>\r\n                    <img src=\"./assets/ic_green/ic_info.svg\">\r\n                  </sup>\r\n                </p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n    </div>\r\n  \r\n    <div *ngIf=\"(point<=0||!point)&&PriceAvgPlusTAStr\">\r\n        <div>\r\n              \r\n                  <ion-row (click)=\"showdiscount()\">\r\n                          <label *ngIf=\"!promocode\" class=\"depart-title\" >Nhập mã giảm giá</label>\r\n                          <label *ngIf=\"promocode\" class=\"depart-title\" >{{textpromotion}}</label>\r\n                        \r\n                  </ion-row>\r\n                  <ion-row> \r\n                      <ion-label *ngIf=\"ischeckerror==1\" style=\"color: rgb(229, 40, 34);font-size: 12px\">{{msg}}</ion-label>\r\n                      <ion-label *ngIf=\"ischeckerror==0\" style=\"color:#828282;font-size: 12px\">{{msg}}</ion-label>\r\n                  </ion-row>\r\n          </div>\r\n          <hr class=\"cls-hr\">\r\n          <div *ngIf=\"!ischeckbtnpromo\">\r\n              <ion-row>\r\n                  <ion-col size=\"5.8\" style=\"padding: 0;\">\r\n                    <div>\r\n                      <div>\r\n                        <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{ adultsdisplay}} người lớn ,\r\n                {{childrendisplay}} trẻ em</h2>\r\n                        <p  class=\"text-fee\">Giá đã bao gồm thuế & phí</p>\r\n                      </div>\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col size=\"6.2\" style=\"padding: 0;\" (click)=\"showComboDetail()\">\r\n                    <p class=\"total-price\" style=\"text-align: right\">\r\n                      {{PriceAvgPlusTAStr}}đ\r\n                      <sup>\r\n                        <img src=\"./assets/ic_green/ic_info.svg\">\r\n                      </sup>\r\n                    </p>\r\n                  </ion-col>\r\n                </ion-row>\r\n          </div>\r\n         \r\n          <div *ngIf=\"ischeckbtnpromo\" >\r\n              <ion-row>\r\n                <ion-col size=\"5.8\" style=\"padding: 0;\">\r\n                  <div>\r\n                    <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">{{ adultsdisplay}} người lớn ,\r\n      {{childrendisplay}} trẻ em</h2>\r\n                    <p class=\"text-fee\">Giá đã bao gồm thuế & phí</p>\r\n                  </div>\r\n                </ion-col>\r\n                <ion-col size=\"6.2\" style=\"padding: 0;\" (click)=\"showComboDetail()\">\r\n                  <p  class=\"total-price\" style=\"text-align: right\">\r\n                    {{Pricepointshow}}đ\r\n                    <sup>\r\n                      <img src=\"./assets/ic_green/ic_info.svg\">\r\n                    </sup>\r\n                  </p>\r\n                \r\n                  <p *ngIf=\"Pricepointshow!=0\" class=\"text-room-price-ota\">\r\n                    {{PriceAvgPlusTAStr}}đ\r\n                  </p>\r\n                </ion-col>\r\n              </ion-row>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\" PriceAvgPlusTAStr\">\r\n     \r\n      <ion-row>\r\n        <ion-col class=\"no-padding\" *ngIf=\"showInsurranceText\">\r\n          <label class=\"text-note\">*Bảo hiểm du lịch và chuyến bay không áp dụng cho khách hàng dưới 6 tuần tuổi và trên 80 tuổi</label>\r\n      </ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"PriceAvgPlusTAStr\">\r\n        <ion-col style=\"padding:5px 0\">\r\n          <label class=\"text-note\">*Tổng giá không được đảm bảo cho đến khi quý khách xuất vé.</label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n    <!-- <ion-row *ngIf=\"!PriceAvgPlusTAStr&&loadpricedone\">\r\n        <ion-col style=\"padding:5px 0\">\r\n          <label class=\"text-note\">Hiện tại không có phòng thoả điều kiện của quý khách, xin vui lòng gửi yêu cầu bên dưới để được nhân viên tư vấn chi tiết!</label>\r\n        </ion-col>\r\n      </ion-row> -->\r\n      <div *ngIf=\"!PriceAvgPlusTAStr&&loadpricedone&&loadflightpricedone\">\r\n        <div class=\"row-suggest\">\r\n          <div *ngIf=\"!msgEmptyFlight else emptyflight\"><span class=\"text-suggest color-red\">Giai đoạn hết giá.</span> <span style=\"margin-left: 5px;\"  (click)=\"changeDateInfo()\" class=\"text-suggest color-blue text-underline\">Quý khách vui lòng chọn ngày khác</span></div> \r\n          <ng-template #emptyflight>\r\n            <div (click)=\"changeDateInfo()\" ><span class=\"text-suggest color-red\">{{msgEmptyFlight}}</span> <span style=\"margin-left: 5px;\"  class=\"text-suggest color-blue text-underline\">Quý khách vui lòng chọn ngày khác!</span></div> \r\n          </ng-template>\r\n          <!-- <div *ngIf=\"valueGlobal.promotionPackage.length>0\" class=\"text-suggest mt-3\"> <span>Ngày còn phòng từ </span><span class=\"text-weight-suggest\"> {{valueGlobal.promotionPackage}}</span> </div>  \r\n                   <div *ngIf=\"valueGlobal.promotionPackage.length==0\" (click)=\"changeHotel()\" class=\"text-suggest color-blue text-underline\">Xem qua các chỗ nghỉ tương tự khác </div>  -->\r\n         </div>\r\n      </div>\r\n</ion-content>\r\n<ion-footer >\r\n  <div style=\"background-color: #ffffff; text-align: center\">\r\n    <ion-row *ngIf=\"PriceAvgPlusTAStr\">\r\n      <ion-col><button (click)=\"next(1)\" ion-button round outline class=\"button button2\" [ngClass]=\"!loadflightpricedone ? 'cls-blur' : ''\">Thông tin hành khách\r\n        <span><img src=\"./assets/imgs/ic_next.svg\"></span></button></ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"!PriceAvgPlusTAStr && loadflightpricedone\">\r\n        <ion-col style=\"padding:0\"><button (click)=\"sendRequestCombo()\" ion-button round outline class=\"button button2\">Gửi yêu cầu</button></ion-col>\r\n      </ion-row>\r\n      <ion-row *ngIf=\"!PriceAvgPlusTAStr && !loadflightpricedone && loadpricedone\">\r\n        <ion-col style=\"padding: 0\"><button (click)=\"sendRequestCombo()\" ion-button round outline class=\"button button2\">Gửi yêu cầu</button>\r\n        </ion-col>\r\n      </ion-row>\r\n  </div>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcomboreviews/flightcomboreviews.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flightcomboreviews/flightcomboreviews.module.ts ***!
  \*****************************************************************/
/*! exports provided: FlightComboReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComboReviewsPageModule", function() { return FlightComboReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _flightcomboreviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcomboreviews */ "./src/app/flightcomboreviews/flightcomboreviews.ts");







let FlightComboReviewsPageModule = class FlightComboReviewsPageModule {
};
FlightComboReviewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _flightcomboreviews__WEBPACK_IMPORTED_MODULE_6__["FlightComboReviewsPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _flightcomboreviews__WEBPACK_IMPORTED_MODULE_6__["FlightComboReviewsPage"]
                }
            ])
        ],
    })
], FlightComboReviewsPageModule);



/***/ }),

/***/ "./src/app/flightcomboreviews/flightcomboreviews.scss":
/*!************************************************************!*\
  !*** ./src/app/flightcomboreviews/flightcomboreviews.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "@charset \"UTF-8\";\n.flight-combo-reviews-page .no-padding {\n  padding: 0;\n}\n.flight-combo-reviews-page .text-center {\n  text-align: center;\n}\n.flight-combo-reviews-page .text-info {\n  font-size: 14px;\n  color: #828282;\n  font-style: italic;\n}\n.flight-combo-reviews-page .text-name {\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.6px;\n  margin-bottom: 0;\n}\n.flight-combo-reviews-page .text-name .text-green {\n  color: #26bed6;\n}\n.flight-combo-reviews-page .text-fee {\n  margin: 2px 0px 5px 0px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n}\n.flight-combo-reviews-page .text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.flight-combo-reviews-page .image-card {\n  display: initial !important;\n  padding-right: 9px;\n}\n.flight-combo-reviews-page .total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin-bottom: 0;\n  margin-top: 15px;\n}\n.flight-combo-reviews-page .m-bottom-0 {\n  margin-bottom: 0;\n}\n.flight-combo-reviews-page .text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  margin-top: 12px;\n  margin-bottom: 8px;\n}\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  padding: 8px 0;\n  font-weight: 300;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: 0px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\nhr {\n  background-color: #ccc;\n}\n.div-flight-label {\n  font-size: 12px;\n  color: #4f4f4f;\n  padding-bottom: 4px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 12px;\n  color: #003c71;\n}\n.combo-flight-price-label-up {\n  font-size: 12px;\n  color: #ec971f;\n}\n.flight-price {\n  font-size: 14px;\n  font-weight: bold;\n}\n.combo-info {\n  padding-left: 8px;\n}\n.combo-info .p-top-6 {\n  padding-top: 6px;\n}\n.col-padding-left {\n  border-left: solid 1px #ccc;\n  padding-left: 8px !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-padding-left {\n    border-left: solid 1px #ccc;\n    padding-left: 4px !important;\n  }\n\n  .combo-flight-price-label-up {\n    font-size: 13px;\n    color: #ec971f;\n  }\n\n  .flight-price {\n    font-size: 13px;\n    font-weight: bold;\n    letter-spacing: -0.6px;\n  }\n\n  .combo-info {\n    padding-left: 2px;\n  }\n\n  .col-description-roomdetailreview {\n    left: 6px;\n  }\n}\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 32;\n  height: 32;\n}\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  -webkit-transform-origin: 32px 32px;\n          transform-origin: 32px 32px;\n}\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #26bed6;\n  margin: -3px 0 0 -3px;\n}\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n@-webkit-keyframes lds-roller {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes lds-roller {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@media (min-width: 287px) and (max-width: 375px) {\n  .flight-price {\n    font-size: 12px;\n    letter-spacing: -0.6px;\n  }\n}\n::ng-deep .cls-alert-flightcomboreview {\n  align-items: center !important;\n  --max-width: 280px;\n  text-align: center;\n}\n::ng-deep .cls-alert-carcombo .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n::ng-deep .cls-alert-carcombo .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block;\n}\n::ng-deep .sc-ion-alert-ios-h.cls-alert-carcombo {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .cls-alert-carcombo .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  width: 100% !important;\n  display: block !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios.alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .action-sheets-flight-departure .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block;\n}\n::ng-deep .sc-ion-alert-ios-h.action-sheets-flight-departure {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .action-sheets-flight-departure .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .action-sheets-flight-departure .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-button-group.sc-ion-alert-ios button:first-child {\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  width: 100% !important;\n  display: block !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .action-sheets-flight-departure .alert-wrapper.sc-ion-alert-ios.alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n}\n::ng-deep .ion-page {\n  overflow-y: hidden;\n}\n::ng-deep .alert-button.sc-ion-alert-md {\n  width: 100% !important;\n}\n.click {\n  color: #447a00;\n}\n.none {\n  color: black;\n}\n.error {\n  color: #e52822;\n}\n.btnnone {\n  color: #F79221;\n  width: 90px;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.btnupgrade {\n  color: #F79221;\n  width: 110px;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.btnapply {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.cls-blur {\n  opacity: 0.3;\n}\n.div-hotel-info {\n  position: relative;\n  height: 128px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.div-hotel-info .div-wrapimg {\n  position: absolute;\n  width: 104px;\n  height: 104px;\n}\n.div-hotel-info .div-wrapimg .img-hotel-avatar-123 {\n  height: 123px;\n  border-radius: 6px;\n}\n.div-hotel-info .div-wrapimg .img-hotel-avatar {\n  height: 104px;\n  border-radius: 6px;\n}\n.div-hotel-info .div-hotel-name {\n  padding-left: 112px;\n  position: relative;\n}\n.div-hotel-info .p-top-15 {\n  padding-top: 15px;\n}\n.div-hotel-info .text-hotel-name {\n  line-height: 18px;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-height: 36px;\n  -webkit-line-clamp: 2;\n  height: auto;\n  display: -webkit-box;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.div-hotel-info .text-address {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  margin: 0;\n}\n.div-hotel-info .text-address .img-location {\n  padding-right: 3px;\n}\n.room-info {\n  position: relative;\n}\n.room-info .div-text-name {\n  max-width: 62%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.room-info .text-pax {\n  color: #222222;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.room-info .div-button-upgrade {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #26bed6;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n.room-info .div-button-upgrade .img-change-room {\n  padding-left: 4px;\n}\n.text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n}\n.num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.text-điscount {\n  font-size: 14px;\n}\n.cls-col {\n  align-self: center;\n}\n.cls-mt10 {\n  margin-top: -10px;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 7px;\n  background-color: #f2f2f2 !important;\n}\n.cls-ml5 {\n  margin-left: 5px;\n}\n.text-promotion {\n  font-size: 14px;\n  color: #828282;\n}\n.div-voucher {\n  margin-top: 10px;\n}\n.div-voucher .div-flex {\n  display: flex;\n}\n.div-voucher .div-flex .div-first {\n  width: 160px;\n}\n.div-voucher .div-flex .div-first .div-checkpoint {\n  display: flex;\n}\n.div-voucher .div-flex .div-first .check-point {\n  margin-top: 5px;\n  width: 18px;\n  height: 18px;\n}\n.div-voucher .div-flex .div-first .cls-ml8 {\n  margin-left: 8px;\n}\n.div-voucher .div-flex .div-first .div-disabled {\n  opacity: 0.5;\n}\n.div-voucher .div-flex .div-col-split {\n  width: 1px;\n  border-left: solid 0.5px #bdbdbd;\n  margin: 8px 0;\n}\n.div-voucher .div-flex .text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-voucher .div-flex .num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.div-voucher .div-flex .div-promotion {\n  margin-left: 8px;\n  align-self: center;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.div-cinout {\n  height: 68px;\n  background-color: #f2f2f2;\n  padding: 20px 8px 8px 8px;\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: -15px;\n}\n.cls-gridcinout {\n  margin-top: -12px;\n  padding: 8px;\n}\n.row-cin-cout {\n  height: 52px;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n.text-cinout {\n  padding: 0px;\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 15px;\n}\n.text-info-guest {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #4f4f4f;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.text-title {\n  font-size: 18px;\n  font-weight: bold;\n  margin-left: 30px;\n}\n.img-arrow {\n  position: absolute;\n  margin-left: 90px;\n}\n.img-rating {\n  margin-left: 5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap !important;\n}\n.text-width-190 {\n  width: 190px;\n}\n.text-p-info {\n  white-space: nowrap;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 3px;\n}\n.image-card {\n  display: initial !important;\n}\n.div-flex {\n  display: flex;\n}\n.line-blue {\n  color: #26bed6;\n  right: 0px;\n  position: absolute;\n}\n.margin-right-5 {\n  margin-right: 5px;\n}\n.div-hotel-name-1 {\n  min-height: 45px;\n}\n.text-charge {\n  right: 17px;\n  position: absolute;\n}\n.div-flight-time .div-time {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n.div-flight-time .div-location {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  text-align: center;\n}\n.div-flight-time .flight-img-arrow {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.div-flight-time .font-size-14 {\n  font-size: 14px;\n}\n.div-flight-time .mt-2 {\n  margin-top: 2px;\n}\n.letter-spacing {\n  letter-spacing: 1.7px;\n}\n.font-size-14 {\n  font-size: 14px;\n}\n.font-size-12 {\n  font-size: 12px;\n}\n.div-logo {\n  height: 18px;\n}\n.div-logo .img-logo {\n  height: 15px;\n}\n.div-flight-name {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.36px;\n  color: #333333;\n}\n.div-flight-ticket {\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  font-size: 12px;\n}\n.margin-left-5 {\n  margin-left: 5px;\n}\n.margin-left-3 {\n  margin-left: 3px;\n}\n.text-change {\n  color: #26bed6;\n  right: 17px;\n  position: absolute;\n  font-size: 14px;\n  line-height: 1.67;\n}\n.div-none {\n  display: none;\n}\n.m-top-15 {\n  margin-top: 15.5px;\n}\n.m-bottom-16 {\n  margin-bottom: 16px;\n}\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n  margin-left: -15px !important;\n}\n.cls-icon-img {\n  position: absolute;\n  right: -12px;\n  top: 0px;\n}\n.mt-6 {\n  margin-top: 6px;\n}\n.mtt-2 {\n  margin-top: -2px;\n}\n.text-operatedBy {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  position: relative;\n  margin-top: 4px;\n}\n.text-luggage {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n}\n.margin-left-8 {\n  margin-left: 8px;\n}\n.text-suggest {\n  line-height: 1.4;\n  font-size: 14px;\n}\n.row-suggest {\n  border-radius: 4px;\n  background-color: #feeec7;\n  padding: 12px 8px 8px 8px;\n}\n.mt-3 {\n  margin-top: 3px;\n}\n.color-red {\n  color: #e52822;\n}\n.color-blue {\n  color: #2f80ed;\n}\n.text-weight-suggest {\n  font-weight: bold;\n}\n.text-underline {\n  text-decoration: underline;\n}\n.div-title {\n  padding-top: 11px;\n  font-size: 20px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.margin-top-3 {\n  margin-top: 3px;\n}\n.color-blue {\n  color: #26bed6;\n}\n.text-cfr {\n  color: #26bed6;\n  font-size: 12px;\n  background-color: #f2f2f2 !important;\n  width: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0Y29tYm9yZXZpZXdzL2ZsaWdodGNvbWJvcmV2aWV3cy5zY3NzIiwiL1VzZXJzL2l0ZGV2L0RvY3VtZW50cy9EZXZlbG9wL09saXZpYV9pT1Mvb2xpdmlhX2lvcyBob3RmaXggMi45Ljcvc3JjL2FwcC9mbGlnaHRjb21ib3Jldmlld3MvZmxpZ2h0Y29tYm9yZXZpZXdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR1Y7RUFDRSxVQUFBO0FERFI7QUNHTTtFQUNFLGtCQUFBO0FERFI7QUNHTTtFQUNFLGVBQUE7RUFBZSxjQUFBO0VBQWMsa0JBQUE7QURDckM7QUNFTTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QURETjtBQ0VNO0VBRUUsY0FBQTtBRERSO0FDSU07RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QURGUjtBQ0lNO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBREhWO0FDS007RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FESFI7QUNLTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURIUjtBQ0tNO0VBQ0UsZ0JBQUE7QURIUjtBQ0tNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FESFI7QUNPSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FETFI7QUNRSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FETE47QUNPSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FESk47QUNNSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FESE47QUNLSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJB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O0FES0Y7QUNIQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FETUY7QUNKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBRE9GO0FDTEE7RUFDRSxnQkFBQTtBRFFGO0FDTkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QURTRjtBQ05BO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FEU0Y7QUNQQTtFQUNFLGVBQUE7QURVRjtBQ1JBO0VBQ0csY0FBQTtBRFdIO0FDVEE7RUFDRSxjQUFBO0FEWUY7QUNWQTtFQUNFLGlCQUFBO0FEYUY7QUNYQTtFQUNFLDBCQUFBO0FEY0Y7QUNaQTtFQUNFLGlCQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEZUo7QUNiQTtFQUNFLGVBQUE7QURnQkY7QUNkQTtFQUNFLGNBQUE7QURpQkY7QUNmQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0FEa0JGIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29tYm9yZXZpZXdzL2ZsaWdodGNvbWJvcmV2aWV3cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmZsaWdodC1jb21iby1yZXZpZXdzLXBhZ2UgLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuLmZsaWdodC1jb21iby1yZXZpZXdzLXBhZ2UgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodC1jb21iby1yZXZpZXdzLXBhZ2UgLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlIC50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZmxpZ2h0LWNvbWJvLXJldmlld3MtcGFnZSAudGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uZmxpZ2h0LWNvbWJvLXJldmlld3MtcGFnZSAudGV4dC1mZWUge1xuICBtYXJnaW46IDJweCAwcHggNXB4IDBweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uZmxpZ2h0LWNvbWJvLXJldmlld3MtcGFnZSAudGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZsaWdodC1jb21iby1yZXZpZXdzLXBhZ2UgLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDlweDtcbn1cbi5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlIC50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlIC5tLWJvdHRvbS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlIC50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZGVwYXJ0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xufVxuXG4udGV4dC1yb29tLXByaWNlLW90YSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmRpdi1mbGlnaHQtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2VjOTcxZjtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1pbmZvIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uY29tYm8taW5mbyAucC10b3AtNiB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbi5jb2wtcGFkZGluZy1sZWZ0IHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjY2NjO1xuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLXBhZGRpbmctbGVmdCB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjY2NjO1xuICAgIHBhZGRpbmctbGVmdDogNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNlYzk3MWY7XG4gIH1cblxuICAuZmxpZ2h0LXByaWNlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgfVxuXG4gIC5jb21iby1pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgfVxuXG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbWRldGFpbHJldmlldyB7XG4gICAgbGVmdDogNnB4O1xuICB9XG59XG4ubGRzLXJvbGxlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzI7XG4gIGhlaWdodDogMzI7XG59XG5cbi5sZHMtcm9sbGVyIGRpdiB7XG4gIGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyNmJlZDY7XG4gIG1hcmdpbjogLTNweCAwIDAgLTNweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogNTBweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIHRvcDogNTRweDtcbiAgbGVmdDogNDVweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gIHRvcDogNTdweDtcbiAgbGVmdDogMzlweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gIHRvcDogNThweDtcbiAgbGVmdDogMzJweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgdG9wOiA1N3B4O1xuICBsZWZ0OiAyNXB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgdG9wOiA1NHB4O1xuICBsZWZ0OiAxOXB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAxNHB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xufVxuXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgdG9wOiA0NXB4O1xuICBsZWZ0OiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLmZsaWdodC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWZsaWdodGNvbWJvcmV2aWV3IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1hbGVydC1pb3MtaC5jbHMtYWxlcnQtY2FyY29tYm8ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcy5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI5MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOjpuZy1kZWVwIC5zYy1pb24tYWxlcnQtaW9zLWguYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KSB7XG4gIDo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KSB7XG4gIDo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3MuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5idG5ub25lc3VjY2VzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICM0NDdhMDA7XG59XG46Om5nLWRlZXAgLmlvbi1wYWdlIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmNsaWNrIHtcbiAgY29sb3I6ICM0NDdhMDA7XG59XG5cbi5ub25lIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmJ0bm5vbmUge1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG51cGdyYWRlIHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiAxMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcGx5IHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY2xzLWJsdXIge1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5kaXYtaG90ZWwtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLmRpdi1ob3RlbC1pbmZvIC5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuLmRpdi1ob3RlbC1pbmZvIC5kaXYtd3JhcGltZyAuaW1nLWhvdGVsLWF2YXRhci0xMjMge1xuICBoZWlnaHQ6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uZGl2LWhvdGVsLWluZm8gLmRpdi13cmFwaW1nIC5pbWctaG90ZWwtYXZhdGFyIHtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmRpdi1ob3RlbC1pbmZvIC5kaXYtaG90ZWwtbmFtZSB7XG4gIHBhZGRpbmctbGVmdDogMTEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtaG90ZWwtaW5mbyAucC10b3AtMTUge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5kaXYtaG90ZWwtaW5mbyAudGV4dC1ob3RlbC1uYW1lIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC1oZWlnaHQ6IDM2cHg7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogYXV0b3ByZWZpeGVyOiBpZ25vcmUgbmV4dCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuLmRpdi1ob3RlbC1pbmZvIC50ZXh0LWFkZHJlc3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDA7XG59XG4uZGl2LWhvdGVsLWluZm8gLnRleHQtYWRkcmVzcyAuaW1nLWxvY2F0aW9uIHtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xufVxuXG4ucm9vbS1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJvb20taW5mbyAuZGl2LXRleHQtbmFtZSB7XG4gIG1heC13aWR0aDogNjIlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5yb29tLWluZm8gLnRleHQtcGF4IHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5yb29tLWluZm8gLmRpdi1idXR0b24tdXBncmFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5yb29tLWluZm8gLmRpdi1idXR0b24tdXBncmFkZSAuaW1nLWNoYW5nZS1yb29tIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi50ZXh0LXBvaW50IHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLm51bS1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50ZXh0LcSRaXNjb3VudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNscy1jb2wge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jbHMtbXQxMCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG4uY2xzLW1sNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0LXByb21vdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtdm91Y2hlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCB7XG4gIHdpZHRoOiAxNjBweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuZGl2LWNoZWNrcG9pbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5jaGVjay1wb2ludCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuY2xzLW1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmRpdi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1jb2wtc3BsaXQge1xuICB3aWR0aDogMXB4O1xuICBib3JkZXItbGVmdDogc29saWQgMC41cHggI2JkYmRiZDtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLnRleHQtcG9pbnQge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAubnVtLXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1wcm9tb3Rpb24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbnAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4uZGl2LWNpbm91dCB7XG4gIGhlaWdodDogNjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMjBweCA4cHggOHB4IDhweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuLmNscy1ncmlkY2lub3V0IHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnJvdy1jaW4tY291dCB7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGV4dC1jaW5vdXQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udGV4dC1pbmZvLWd1ZXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uaW1nLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogOTBweDtcbn1cblxuLmltZy1yYXRpbmcge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLnRleHQtd2lkdGgtMTkwIHtcbiAgd2lkdGg6IDE5MHB4O1xufVxuXG4udGV4dC1wLWluZm8ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5pbWFnZS1jYXJkIHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGluZS1ibHVlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm1hcmdpbi1yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXYtaG90ZWwtbmFtZS0xIHtcbiAgbWluLWhlaWdodDogNDVweDtcbn1cblxuLnRleHQtY2hhcmdlIHtcbiAgcmlnaHQ6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmRpdi1mbGlnaHQtdGltZSAuZGl2LXRpbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kaXYtZmxpZ2h0LXRpbWUgLmRpdi1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi1mbGlnaHQtdGltZSAuZmxpZ2h0LWltZy1hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uZGl2LWZsaWdodC10aW1lIC5mb250LXNpemUtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGl2LWZsaWdodC10aW1lIC5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubGV0dGVyLXNwYWNpbmcge1xuICBsZXR0ZXItc3BhY2luZzogMS43cHg7XG59XG5cbi5mb250LXNpemUtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb250LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kaXYtbG9nbyB7XG4gIGhlaWdodDogMThweDtcbn1cbi5kaXYtbG9nbyAuaW1nLWxvZ28ge1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5kaXYtZmxpZ2h0LW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmRpdi1mbGlnaHQtdGlja2V0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWFyZ2luLWxlZnQtNSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tYXJnaW4tbGVmdC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnRleHQtY2hhbmdlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHJpZ2h0OiAxN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG59XG5cbi5kaXYtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tLXRvcC0xNSB7XG4gIG1hcmdpbi10b3A6IDE1LjVweDtcbn1cblxuLm0tYm90dG9tLTE2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbHMtaWNvbi1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTJweDtcbiAgdG9wOiAwcHg7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubXR0LTIge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4udGV4dC1vcGVyYXRlZEJ5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnRleHQtbHVnZ2FnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4ubWFyZ2luLWxlZnQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi50ZXh0LXN1Z2dlc3Qge1xuICBsaW5lLWhlaWdodDogMS40O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yb3ctc3VnZ2VzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWVjNztcbiAgcGFkZGluZzogMTJweCA4cHggOHB4IDhweDtcbn1cblxuLm10LTMge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5jb2xvci1yZWQge1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmNvbG9yLWJsdWUge1xuICBjb2xvcjogIzJmODBlZDtcbn1cblxuLnRleHQtd2VpZ2h0LXN1Z2dlc3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQtdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5kaXYtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5tYXJnaW4tdG9wLTMge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5jb2xvci1ibHVlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LWNmciB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDg1cHg7XG59IiwiXHJcbiAgICAuZmxpZ2h0LWNvbWJvLXJldmlld3MtcGFnZVxyXG4gICAge1xyXG4gICAgICAubm8tcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtaW5mb3tcclxuICAgICAgICBmb250LXNpemU6MTRweDtjb2xvcjojODI4MjgyO2ZvbnQtc3R5bGU6IGl0YWxpY1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1uYW1lXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTowO1xyXG4gICAgICAudGV4dC1ncmVlblxyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAudGV4dC1mZWV7XHJcbiAgICAgICAgbWFyZ2luOiAycHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWRhdGVcclxuICAgICAge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHhcclxuICAgICAgfVxyXG4gICAgICAuaW1hZ2UtY2FyZHtcclxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogOXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50b3RhbC1wcmljZXtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm0tYm90dG9tLTB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1ub3Rle1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xyXG4gICAgICAgIGNvbG9yOiM4MjgyODI7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kZXBhcnQtdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgIH1cclxuICAgIC5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtcm9vbS1wcmljZS1vdGF7XHJcbiAgICAgIGNvbG9yOiM4MjgyODI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIH0gIFxyXG4gIFxyXG5oclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG4uZGl2LWZsaWdodC1sYWJlbHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgcGFkZGluZy1ib3R0b206IDRweDtcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG59XHJcblxyXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMDAzYzcxO1xyXG59XHJcblxyXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwe1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2VjOTcxZjtcclxufVxyXG4uZmxpZ2h0LXByaWNle1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvbWJvLWluZm97XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gIC5wLXRvcC02e1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb2wtcGFkZGluZy1sZWZ0e1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2NjYztcclxuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XHJcbiAgLmNvbC1wYWRkaW5nLWxlZnR7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4ICNjY2M7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZWM5NzFmO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICB9XHJcbiAgLmNvbWJvLWluZm8ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbiAgfVxyXG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbWRldGFpbHJldmlld3tcclxuICAgIGxlZnQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vIExvYWRlciBjc3NcclxuXHJcbi5sZHMtcm9sbGVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMjtcclxuICBoZWlnaHQ6IDMyO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdiB7XHJcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDZweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzI2YmVkNjtcclxuICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xyXG4gIHRvcDogNTBweDtcclxuICBsZWZ0OiA1MHB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxuICB0b3A6IDU0cHg7XHJcbiAgbGVmdDogNDVweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XHJcbiAgdG9wOiA1N3B4O1xyXG4gIGxlZnQ6IDM5cHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xyXG4gIHRvcDogNThweDtcclxuICBsZWZ0OiAzMnB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xyXG4gIHRvcDogNTdweDtcclxuICBsZWZ0OiAyNXB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcclxuICB0b3A6IDU0cHg7XHJcbiAgbGVmdDogMTlweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIGxlZnQ6IDE0cHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xyXG4gIHRvcDogNDVweDtcclxuICBsZWZ0OiAxMHB4O1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6Mjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gIC5mbGlnaHQtcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vL1xyXG46Om5nLWRlZXAge1xyXG4gXHJcbiAgLmNscy1hbGVydC1mbGlnaHRjb21ib3JldmlldyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgLS1tYXgtd2lkdGg6IDI4MHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG5cclxuICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgIFxyXG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcclxuICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLnNjLWlvbi1hbGVydC1pb3MtaC5jbHMtYWxlcnQtY2FyY29tYm8gIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIEBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KXtcclxuICAgICAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCl7XHJcbiAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcy5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy9cclxuICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgIFxyXG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcclxuICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KXtcclxuICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8vL1xyXG4gICAgLmJ0bm5vbmVzdWNjZXNzXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzQ0N2EwMDtcclxuICAgXHJcbiAgfVxyXG4gIC5pb24tcGFnZXtcclxuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLy9T4butYSBs4buXaSBidXR0b24gb2tcclxuICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5jbGlja1xyXG57XHJcbiAgY29sb3I6ICM0NDdhMDBcclxufVxyXG4ubm9uZVxyXG57XHJcbiAgY29sb3I6IGJsYWNrXHJcbn1cclxuLmVycm9yXHJcbntcclxuICBjb2xvcjpyZ2IoMjI5LCA0MCwgMzQpO1xyXG59XHJcbi5idG5ub25lXHJcbntcclxuICAgIGNvbG9yOiAjRjc5MjIxO1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4uYnRudXBncmFkZXtcclxuICBjb2xvcjogI0Y3OTIyMTtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG5hcHBseVxyXG57XHJcbiAgICBjb2xvcjogI0Y3OTIyMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICAuY2xzLWJsdXJ7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG5cclxuICAuZGl2LWhvdGVsLWluZm97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAuZGl2LXdyYXBpbWd7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwNHB4O1xyXG5cclxuICAgICAgLmltZy1ob3RlbC1hdmF0YXItMTIze1xyXG4gICAgICAgIGhlaWdodDogMTIzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctaG90ZWwtYXZhdGFye1xyXG4gICAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1ob3RlbC1uYW1le1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDExMnB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnAtdG9wLTE1e1xyXG4gICAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtaG90ZWwtbmFtZXtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDo1MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcblxyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgbWF4LWhlaWdodDogMzZweDtcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICB9XHJcbiAgICAudGV4dC1hZGRyZXNze1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAuaW1nLWxvY2F0aW9ue1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvb20taW5mb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAuZGl2LXRleHQtbmFtZXtcclxuICAgICAgICAgIG1heC13aWR0aDogNjIlOyBcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC50ZXh0LXBheHtcclxuICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWJ1dHRvbi11cGdyYWRle1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcblxyXG4gICAgICAuaW1nLWNoYW5nZS1yb29te1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LXBvaW50e1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuICAubnVtLXBvaW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbi50ZXh0LcSRaXNjb3VudFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jbHMtY29sXHJcbntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmNscy1tdDEwXHJcbntcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4uY2xzLWhyXHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBoZWlnaHQ6IDdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNscy1tbDVcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLnRleHQtcHJvbW90aW9uXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuLmRpdi12b3VjaGVye1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLmRpdi1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuZGl2LWZpcnN0e1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuXHJcbiAgICAgICAgLmRpdi1jaGVja3BvaW50e1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNoZWNrLXBvaW50e1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbHMtbWw4XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1kaXNhYmxlZHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1jb2wtc3BsaXR7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjVweCAjYmRiZGJkO1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGV4dC1wb2ludHtcclxuICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICAgIC5udW0tcG9pbnQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtcHJvbW90aW9ue1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbnAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4uZGl2LWNpbm91dFxyXG57XHJcbiAgaGVpZ2h0OiA2OHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogMjBweCA4cHggOHB4IDhweDtcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4uY2xzLWdyaWRjaW5vdXRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLnJvdy1jaW4tY291dHtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnRleHQtY2lub3V0e1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBjb2xvcjogIzI2YmVkNjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHhcclxufVxyXG4udGV4dC1pbmZvLWd1ZXN0XHJcbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi50ZXh0LXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uaW1nLWFycm93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogOTBweDtcclxufVxyXG4uaW1nLXJhdGluZ3tcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi50ZXh0LXBcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXdpZHRoLTE5MHtcclxuICB3aWR0aDogMTkwcHg7XHJcbn1cclxuLnRleHQtcC1pbmZve1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4uaW1hZ2UtY2FyZHtcclxuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpdi1mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmxpbmUtYmx1ZXtcclxuICBjb2xvcjogIzI2YmVkNjtcclxuICByaWdodDogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ubWFyZ2luLXJpZ2h0LTV7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmRpdi1ob3RlbC1uYW1lLTF7XHJcbiAgbWluLWhlaWdodDogNDVweDtcclxufVxyXG4udGV4dC1jaGFyZ2V7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5kaXYtZmxpZ2h0LXRpbWV7XHJcblxyXG4gIC5kaXYtdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICB9XHJcbiAgLmRpdi1sb2NhdGlvbntcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS42NztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5mbGlnaHQtaW1nLWFycm93e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5mb250LXNpemUtMTR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIC5tdC0ye1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG4ubGV0dGVyLXNwYWNpbmd7XHJcbiAgbGV0dGVyLXNwYWNpbmc6MS43cHhcclxufVxyXG4uZm9udC1zaXplLTE0e1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZm9udC1zaXplLTEye1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZGl2LWxvZ297XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG5cclxuICAuaW1nLWxvZ297XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICB9XHJcbn1cclxuLmRpdi1mbGlnaHQtbmFtZXtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5kaXYtZmxpZ2h0LXRpY2tldFxyXG57XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS42NztcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTVcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTNcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuLnRleHQtY2hhbmdle1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG4gIHJpZ2h0OiAxN3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbn1cclxuLmRpdi1ub25lXHJcbntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tLXRvcC0xNXtcclxuICBtYXJnaW4tdG9wOiAxNS41cHg7XHJcbn1cclxuLm0tYm90dG9tLTE2e1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmlvbi1pdGVtXHJcbntcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jbHMtaWNvbi1pbWdcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTEycHg7XHJcbiAgdG9wOjBweDtcclxufVxyXG4ubXQtNntcclxuICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuLm10dC0ye1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuLnRleHQtb3BlcmF0ZWRCeXtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS42NztcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcbi50ZXh0LWx1Z2dhZ2V7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMyNmJlZDY7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTh7XHJcbiAgbWFyZ2luLWxlZnQ6OHB4O1xyXG59XHJcbi50ZXh0LXN1Z2dlc3R7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5yb3ctc3VnZ2VzdHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWVjNztcclxuICBwYWRkaW5nOiAxMnB4IDhweCA4cHggOHB4O1xyXG59XHJcbi5tdC0ze1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4uY29sb3ItcmVke1xyXG4gICBjb2xvcjogI2U1MjgyMjtcclxufVxyXG4uY29sb3ItYmx1ZXtcclxuICBjb2xvcjogIzJmODBlZDtcclxufVxyXG4udGV4dC13ZWlnaHQtc3VnZ2VzdHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGV4dC11bmRlcmxpbmV7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmRpdi10aXRsZXtcclxuICBwYWRkaW5nLXRvcDogMTFweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ubWFyZ2luLXRvcC0ze1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4uY29sb3ItYmx1ZXtcclxuICBjb2xvcjogIzI2YmVkNlxyXG59XHJcbi50ZXh0LWNmcntcclxuICBjb2xvcjogIzI2YmVkNjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA4NXB4O1xyXG59XHJcbiJdfQ== */"
=======
module.exports = "@charset \"UTF-8\";\n.flight-combo-reviews-page .no-padding {\n  padding: 0;\n}\n.flight-combo-reviews-page .text-center {\n  text-align: center;\n}\n.flight-combo-reviews-page .text-info {\n  font-size: 14px;\n  color: #828282;\n  font-style: italic;\n}\n.flight-combo-reviews-page .text-name {\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.6px;\n  margin-bottom: 0;\n}\n.flight-combo-reviews-page .text-name .text-green {\n  color: #26bed6;\n}\n.flight-combo-reviews-page .text-fee {\n  margin: 2px 0px 5px 0px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n}\n.flight-combo-reviews-page .text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.flight-combo-reviews-page .image-card {\n  display: initial !important;\n  padding-right: 9px;\n}\n.flight-combo-reviews-page .total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin-bottom: 0;\n  margin-top: 15px;\n}\n.flight-combo-reviews-page .m-bottom-0 {\n  margin-bottom: 0;\n}\n.flight-combo-reviews-page .text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  margin-top: 12px;\n  margin-bottom: 8px;\n}\n.depart-title {\n  font-size: 14px;\n  color: #222222;\n  padding: 8px 0;\n  font-weight: 300;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: 0px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\nhr {\n  background-color: #ccc;\n}\n.div-flight-label {\n  font-size: 12px;\n  color: #4f4f4f;\n  padding-bottom: 4px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 12px;\n  color: #003c71;\n}\n.combo-flight-price-label-up {\n  font-size: 12px;\n  color: #ec971f;\n}\n.flight-price {\n  font-size: 14px;\n  font-weight: bold;\n}\n.combo-info {\n  padding-left: 8px;\n}\n.combo-info .p-top-6 {\n  padding-top: 6px;\n}\n.col-padding-left {\n  border-left: solid 1px #ccc;\n  padding-left: 8px !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-padding-left {\n    border-left: solid 1px #ccc;\n    padding-left: 4px !important;\n  }\n\n  .combo-flight-price-label-up {\n    font-size: 13px;\n    color: #ec971f;\n  }\n\n  .flight-price {\n    font-size: 13px;\n    font-weight: bold;\n    letter-spacing: -0.6px;\n  }\n\n  .combo-info {\n    padding-left: 2px;\n  }\n\n  .col-description-roomdetailreview {\n    left: 6px;\n  }\n}\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 32;\n  height: 32;\n}\n.lds-roller div {\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #26bed6;\n  margin: -3px 0 0 -3px;\n}\n.lds-roller div:nth-child(1) {\n  animation-delay: -0.036s;\n}\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n.lds-roller div:nth-child(2) {\n  animation-delay: -0.072s;\n}\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n.lds-roller div:nth-child(3) {\n  animation-delay: -0.108s;\n}\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n.lds-roller div:nth-child(4) {\n  animation-delay: -0.144s;\n}\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n.lds-roller div:nth-child(5) {\n  animation-delay: -0.18s;\n}\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n.lds-roller div:nth-child(6) {\n  animation-delay: -0.216s;\n}\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n.lds-roller div:nth-child(7) {\n  animation-delay: -0.252s;\n}\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n.lds-roller div:nth-child(8) {\n  animation-delay: -0.288s;\n}\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (min-width: 287px) and (max-width: 375px) {\n  .flight-price {\n    font-size: 12px;\n    letter-spacing: -0.6px;\n  }\n}\n::ng-deep .cls-alert-flightcomboreview {\n  align-items: center !important;\n  --max-width: 280px;\n  text-align: center;\n}\n::ng-deep .cls-alert-carcombo .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n::ng-deep .cls-alert-carcombo .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block;\n}\n::ng-deep .sc-ion-alert-ios-h.cls-alert-carcombo {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .cls-alert-carcombo .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n::ng-deep .cls-alert-carcombo .alert-button-group.sc-ion-alert-ios button:first-child {\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  width: 100% !important;\n  display: block !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-carcombo .alert-wrapper.sc-ion-alert-ios.alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .action-sheets-flight-departure .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: block;\n}\n::ng-deep .sc-ion-alert-ios-h.action-sheets-flight-departure {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .action-sheets-flight-departure .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .action-sheets-flight-departure .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 17px !important;\n  overflow: hidden !important;\n}\n::ng-deep .action-sheets-flight-departure .alert-button-group.sc-ion-alert-ios button:first-child {\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  width: 100% !important;\n  display: block !important;\n}\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .action-sheets-flight-departure .alert-wrapper.sc-ion-alert-ios.alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n::ng-deep .btnnonesuccess {\n  width: 100%;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n  border: solid 1px #447a00;\n}\n::ng-deep .ion-page {\n  overflow-y: hidden;\n}\n::ng-deep .alert-button.sc-ion-alert-md {\n  width: 100% !important;\n}\n.click {\n  color: #447a00;\n}\n.none {\n  color: black;\n}\n.error {\n  color: #e52822;\n}\n.btnnone {\n  color: #F79221;\n  width: 90px;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.btnupgrade {\n  color: #F79221;\n  width: 110px;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.btnapply {\n  color: #F79221;\n  width: 100%;\n  border: 1px solid;\n  background-color: white;\n  font-size: 14px !important;\n  margin: 0;\n  height: 30px !important;\n}\n.cls-blur {\n  opacity: 0.3;\n}\n.div-hotel-info {\n  position: relative;\n  height: 128px;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.div-hotel-info .div-wrapimg {\n  position: absolute;\n  width: 104px;\n  height: 104px;\n}\n.div-hotel-info .div-wrapimg .img-hotel-avatar-123 {\n  height: 123px;\n  border-radius: 6px;\n}\n.div-hotel-info .div-wrapimg .img-hotel-avatar {\n  height: 104px;\n  border-radius: 6px;\n}\n.div-hotel-info .div-hotel-name {\n  padding-left: 112px;\n  position: relative;\n}\n.div-hotel-info .p-top-15 {\n  padding-top: 15px;\n}\n.div-hotel-info .text-hotel-name {\n  line-height: 18px;\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: -0.4px;\n}\n.div-hotel-info .text-address {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  margin: 0;\n}\n.div-hotel-info .text-address .img-location {\n  padding-right: 3px;\n}\n.room-info {\n  position: relative;\n}\n.room-info .div-text-name {\n  max-width: 62%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.room-info .text-pax {\n  color: #222222;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.room-info .div-button-upgrade {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #26bed6;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n.room-info .div-button-upgrade .img-change-room {\n  padding-left: 4px;\n}\n.text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n}\n.num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.text-điscount {\n  font-size: 14px;\n}\n.cls-col {\n  align-self: center;\n}\n.cls-mt10 {\n  margin-top: -10px;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 7px;\n  background-color: #f2f2f2 !important;\n}\n.cls-ml5 {\n  margin-left: 5px;\n}\n.text-promotion {\n  font-size: 14px;\n  color: #828282;\n}\n.div-voucher {\n  margin-top: 10px;\n}\n.div-voucher .div-flex {\n  display: flex;\n}\n.div-voucher .div-flex .div-first {\n  width: 160px;\n}\n.div-voucher .div-flex .div-first .div-checkpoint {\n  display: flex;\n}\n.div-voucher .div-flex .div-first .check-point {\n  margin-top: 5px;\n  width: 18px;\n  height: 18px;\n}\n.div-voucher .div-flex .div-first .cls-ml8 {\n  margin-left: 8px;\n}\n.div-voucher .div-flex .div-first .div-disabled {\n  opacity: 0.5;\n}\n.div-voucher .div-flex .div-col-split {\n  width: 1px;\n  border-left: solid 0.5px #bdbdbd;\n  margin: 8px 0;\n}\n.div-voucher .div-flex .text-point {\n  color: #222222;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-voucher .div-flex .num-point {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 300;\n}\n.div-voucher .div-flex .div-promotion {\n  margin-left: 8px;\n  align-self: center;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.div-cinout {\n  height: 68px;\n  background-color: #f2f2f2;\n  padding: 20px 8px 8px 8px;\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-top: -15px;\n}\n.cls-gridcinout {\n  margin-top: -12px;\n  padding: 8px;\n}\n.row-cin-cout {\n  height: 52px;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n.text-cinout {\n  padding: 0px;\n  color: #26bed6;\n  font-weight: bold;\n  font-size: 15px;\n}\n.text-info-guest {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #4f4f4f;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.text-title {\n  font-size: 18px;\n  font-weight: bold;\n  margin-left: 30px;\n}\n.img-arrow {\n  position: absolute;\n  margin-left: 90px;\n}\n.img-rating {\n  margin-left: 5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap !important;\n}\n.text-width-190 {\n  width: 190px;\n}\n.text-p-info {\n  white-space: nowrap;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 3px;\n}\n.image-card {\n  display: initial !important;\n}\n.div-flex {\n  display: flex;\n}\n.line-blue {\n  color: #26bed6;\n  right: 0px;\n  position: absolute;\n}\n.margin-right-5 {\n  margin-right: 5px;\n}\n.div-hotel-name-1 {\n  min-height: 45px;\n}\n.text-charge {\n  right: 17px;\n  position: absolute;\n}\n.div-flight-time .div-time {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n.div-flight-time .div-location {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  text-align: center;\n}\n.div-flight-time .flight-img-arrow {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.div-flight-time .font-size-14 {\n  font-size: 14px;\n}\n.div-flight-time .mt-2 {\n  margin-top: 2px;\n}\n.letter-spacing {\n  letter-spacing: 1.7px;\n}\n.font-size-14 {\n  font-size: 14px;\n}\n.font-size-12 {\n  font-size: 12px;\n}\n.div-logo {\n  height: 18px;\n}\n.div-logo .img-logo {\n  height: 15px;\n}\n.div-flight-name {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.36px;\n  color: #333333;\n}\n.div-flight-ticket {\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  font-size: 12px;\n}\n.margin-left-5 {\n  margin-left: 5px;\n}\n.margin-left-3 {\n  margin-left: 3px;\n}\n.text-change {\n  color: #26bed6;\n  right: 17px;\n  position: absolute;\n  font-size: 14px;\n  line-height: 1.67;\n}\n.div-none {\n  display: none;\n}\n.m-top-15 {\n  margin-top: 15.5px;\n}\n.m-bottom-16 {\n  margin-bottom: 16px;\n}\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n  margin-left: -15px !important;\n}\n.cls-icon-img {\n  position: absolute;\n  right: -12px;\n  top: 0px;\n}\n.mt-6 {\n  margin-top: 6px;\n}\n.mtt-2 {\n  margin-top: -2px;\n}\n.text-operatedBy {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  position: relative;\n  margin-top: 4px;\n}\n.text-luggage {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n}\n.margin-left-8 {\n  margin-left: 8px;\n}\n.text-suggest {\n  line-height: 1.4;\n  font-size: 14px;\n}\n.row-suggest {\n  border-radius: 4px;\n  background-color: #feeec7;\n  padding: 12px 8px 8px 8px;\n}\n.mt-3 {\n  margin-top: 3px;\n}\n.color-red {\n  color: #e52822;\n}\n.color-blue {\n  color: #2f80ed;\n}\n.text-weight-suggest {\n  font-weight: bold;\n}\n.text-underline {\n  text-decoration: underline;\n}\n.div-title {\n  padding-top: 11px;\n  font-size: 20px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.margin-top-3 {\n  margin-top: 3px;\n}\n.color-blue {\n  color: #26bed6;\n}\n.text-cfr {\n  color: #26bed6;\n  font-size: 12px;\n  background-color: #f2f2f2 !important;\n  width: 85px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0Y29tYm9yZXZpZXdzL2ZsaWdodGNvbWJvcmV2aWV3cy5zY3NzIiwiL1VzZXJzL2Rldi1pdml2dS9Eb2N1bWVudHMvRGV2ZWxvcC9vbGl2aWFfaW9zL3NyYy9hcHAvZmxpZ2h0Y29tYm9yZXZpZXdzL2ZsaWdodGNvbWJvcmV2aWV3cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0dWO0VBQ0UsVUFBQTtBRERSO0FDR007RUFDRSxrQkFBQTtBRERSO0FDR007RUFDRSxlQUFBO0VBQWUsY0FBQTtFQUFjLGtCQUFBO0FEQ3JDO0FDRU07RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FERE47QUNFTTtFQUVFLGNBQUE7QUREUjtBQ0lNO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FERlI7QUNJTTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURIVjtBQ0tNO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBREhSO0FDS007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FESFI7QUNLTTtFQUNFLGdCQUFBO0FESFI7QUNLTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBREhSO0FDT0k7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRExSO0FDUUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRExOO0FDT0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBREpOO0FDTUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBREhOO0FDS0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZ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WkE7RUFDRSxpQkFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRGVKO0FDYkE7RUFDRSxlQUFBO0FEZ0JGO0FDZEE7RUFDRSxjQUFBO0FEaUJGO0FDZkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBRGtCRiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGNvbWJvcmV2aWV3cy9mbGlnaHRjb21ib3Jldmlld3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlIC5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cbi5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlIC50ZXh0LWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZmxpZ2h0LWNvbWJvLXJldmlld3MtcGFnZSAudGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmZsaWdodC1jb21iby1yZXZpZXdzLXBhZ2UgLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuLmZsaWdodC1jb21iby1yZXZpZXdzLXBhZ2UgLnRleHQtZmVlIHtcbiAgbWFyZ2luOiAycHggMHB4IDVweCAwcHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZsaWdodC1jb21iby1yZXZpZXdzLXBhZ2UgLnRleHQtZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlIC5pbWFnZS1jYXJkIHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG59XG4uZmxpZ2h0LWNvbWJvLXJldmlld3MtcGFnZSAudG90YWwtcHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZmxpZ2h0LWNvbWJvLXJldmlld3MtcGFnZSAubS1ib3R0b20tMCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZmxpZ2h0LWNvbWJvLXJldmlld3MtcGFnZSAudGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLmJ1dHRvbjIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRlcGFydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5kaXYtZmxpZ2h0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8taW5mbyB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmNvbWJvLWluZm8gLnAtdG9wLTYge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4uY29sLXBhZGRpbmctbGVmdCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2NjYztcbiAgcGFkZGluZy1sZWZ0OiA4cHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1wYWRkaW5nLWxlZnQge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2NjYztcbiAgICBwYWRkaW5nLWxlZnQ6IDRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjZWM5NzFmO1xuICB9XG5cbiAgLmZsaWdodC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gIH1cblxuICAuY29tYm8taW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIH1cblxuICAuY29sLWRlc2NyaXB0aW9uLXJvb21kZXRhaWxyZXZpZXcge1xuICAgIGxlZnQ6IDZweDtcbiAgfVxufVxuLmxkcy1yb2xsZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMyO1xuICBoZWlnaHQ6IDMyO1xufVxuXG4ubGRzLXJvbGxlciBkaXYge1xuICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICB0b3A6IDU0cHg7XG4gIGxlZnQ6IDQ1cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICB0b3A6IDU3cHg7XG4gIGxlZnQ6IDM5cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICB0b3A6IDU4cHg7XG4gIGxlZnQ6IDMycHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIHRvcDogNTdweDtcbiAgbGVmdDogMjVweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gIHRvcDogNTRweDtcbiAgbGVmdDogMTlweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogMTRweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gIHRvcDogNDVweDtcbiAgbGVmdDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyODdweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5mbGlnaHQtcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xuICB9XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1mbGlnaHRjb21ib3JldmlldyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI5MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOjpuZy1kZWVwIC5zYy1pb24tYWxlcnQtaW9zLWguY2xzLWFsZXJ0LWNhcmNvbWJvIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KSB7XG4gIDo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KSB7XG4gIDo6bmctZGVlcCAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3MuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFsZXJ0LWlvcy1oLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCkge1xuICA6Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCkge1xuICA6Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuYnRubm9uZXN1Y2Nlc3Mge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xufVxuOjpuZy1kZWVwIC5pb24tcGFnZSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jbGljayB7XG4gIGNvbG9yOiAjNDQ3YTAwO1xufVxuXG4ubm9uZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNlNTI4MjI7XG59XG5cbi5idG5ub25lIHtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiA5MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRudXBncmFkZSB7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICB3aWR0aDogMTEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHBseSB7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmNscy1ibHVyIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uZGl2LWhvdGVsLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTI4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbi5kaXYtaG90ZWwtaW5mbyAuZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cbi5kaXYtaG90ZWwtaW5mbyAuZGl2LXdyYXBpbWcgLmltZy1ob3RlbC1hdmF0YXItMTIzIHtcbiAgaGVpZ2h0OiAxMjNweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmRpdi1ob3RlbC1pbmZvIC5kaXYtd3JhcGltZyAuaW1nLWhvdGVsLWF2YXRhciB7XG4gIGhlaWdodDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5kaXYtaG90ZWwtaW5mbyAuZGl2LWhvdGVsLW5hbWUge1xuICBwYWRkaW5nLWxlZnQ6IDExMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWhvdGVsLWluZm8gLnAtdG9wLTE1IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uZGl2LWhvdGVsLWluZm8gLnRleHQtaG90ZWwtbmFtZSB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LWhvdGVsLWluZm8gLnRleHQtYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5kaXYtaG90ZWwtaW5mbyAudGV4dC1hZGRyZXNzIC5pbWctbG9jYXRpb24ge1xuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG59XG5cbi5yb29tLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucm9vbS1pbmZvIC5kaXYtdGV4dC1uYW1lIHtcbiAgbWF4LXdpZHRoOiA2MiU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnJvb20taW5mbyAudGV4dC1wYXgge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnJvb20taW5mbyAuZGl2LWJ1dHRvbi11cGdyYWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLnJvb20taW5mbyAuZGl2LWJ1dHRvbi11cGdyYWRlIC5pbWctY2hhbmdlLXJvb20ge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLnRleHQtcG9pbnQge1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubnVtLXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRleHQtxJFpc2NvdW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2xzLWNvbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmNscy1tdDEwIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5jbHMtaHIge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbi5jbHMtbWw1IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnRleHQtcHJvbW90aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi12b3VjaGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IHtcbiAgd2lkdGg6IDE2MHB4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5kaXYtY2hlY2twb2ludCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5kaXYtZmlyc3QgLmNoZWNrLXBvaW50IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWZpcnN0IC5jbHMtbWw4IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5kaXYtdm91Y2hlciAuZGl2LWZsZXggLmRpdi1maXJzdCAuZGl2LWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LWNvbC1zcGxpdCB7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBtYXJnaW46IDhweCAwO1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAudGV4dC1wb2ludCB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LXZvdWNoZXIgLmRpdi1mbGV4IC5udW0tcG9pbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi12b3VjaGVyIC5kaXYtZmxleCAuZGl2LXByb21vdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5kaXYtY2lub3V0IHtcbiAgaGVpZ2h0OiA2OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAyMHB4IDhweCA4cHggOHB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uY2xzLWdyaWRjaW5vdXQge1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ucm93LWNpbi1jb3V0IHtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi50ZXh0LWNpbm91dCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50ZXh0LWluZm8tZ3Vlc3Qge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5pbWctYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuXG4uaW1nLXJhdGluZyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC13aWR0aC0xOTAge1xuICB3aWR0aDogMTkwcHg7XG59XG5cbi50ZXh0LXAtaW5mbyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5saW5lLWJsdWUge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcmlnaHQ6IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubWFyZ2luLXJpZ2h0LTUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpdi1ob3RlbC1uYW1lLTEge1xuICBtaW4taGVpZ2h0OiA0NXB4O1xufVxuXG4udGV4dC1jaGFyZ2Uge1xuICByaWdodDogMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWZsaWdodC10aW1lIC5kaXYtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmRpdi1mbGlnaHQtdGltZSAuZGl2LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LWZsaWdodC10aW1lIC5mbGlnaHQtaW1nLWFycm93IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5kaXYtZmxpZ2h0LXRpbWUgLmZvbnQtc2l6ZS0xNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kaXYtZmxpZ2h0LXRpbWUgLm10LTIge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5sZXR0ZXItc3BhY2luZyB7XG4gIGxldHRlci1zcGFjaW5nOiAxLjdweDtcbn1cblxuLmZvbnQtc2l6ZS0xNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvbnQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1sb2dvIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLmRpdi1sb2dvIC5pbWctbG9nbyB7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLmRpdi1mbGlnaHQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uZGl2LWZsaWdodC10aWNrZXQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXJnaW4tbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm1hcmdpbi1sZWZ0LTMge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4udGV4dC1jaGFuZ2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcmlnaHQ6IDE3cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS42Nztcbn1cblxuLmRpdi1ub25lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm0tdG9wLTE1IHtcbiAgbWFyZ2luLXRvcDogMTUuNXB4O1xufVxuXG4ubS1ib3R0b20tMTYge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICBtYXJnaW4tbGVmdDogLTE1cHggIWltcG9ydGFudDtcbn1cblxuLmNscy1pY29uLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xMnB4O1xuICB0b3A6IDBweDtcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5tdHQtMiB7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi50ZXh0LW9wZXJhdGVkQnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4udGV4dC1sdWdnYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi5tYXJnaW4tbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnRleHQtc3VnZ2VzdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJvdy1zdWdnZXN0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xuICBwYWRkaW5nOiAxMnB4IDhweCA4cHggOHB4O1xufVxuXG4ubXQtMyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMmY4MGVkO1xufVxuXG4udGV4dC13ZWlnaHQtc3VnZ2VzdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC11bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmRpdi10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1hcmdpbi10b3AtMyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLmNvbG9yLWJsdWUge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtY2ZyIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xuICB3aWR0aDogODVweDtcbn0iLCJcclxuICAgIC5mbGlnaHQtY29tYm8tcmV2aWV3cy1wYWdlXHJcbiAgICB7XHJcbiAgICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1pbmZve1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O2NvbG9yOiM4MjgyODI7Zm9udC1zdHlsZTogaXRhbGljXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0LW5hbWVcclxuICAgIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgICAgIC50ZXh0LWdyZWVuXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgIC50ZXh0LWZlZXtcclxuICAgICAgICBtYXJnaW46IDJweCAwcHggNXB4IDBweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtZGF0ZVxyXG4gICAgICB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgICB9XHJcbiAgICAgIC5pbWFnZS1jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRvdGFsLXByaWNle1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgfVxyXG4gICAgICAubS1ib3R0b20tMHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LW5vdGV7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgICAgY29sb3I6IzgyODI4MjtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlcGFydC10aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcclxuICAgICAgY29sb3I6IzgyODI4MjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICAudG9vbGJhci10aXRsZS1tZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgfSAgXHJcbiAgXHJcbmhyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi5kaXYtZmxpZ2h0LWxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcbi5jb21iby1kZXBhcnR1cmUtdGltZXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMwMDNjNzE7XHJcbn1cclxuXHJcbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjZWM5NzFmO1xyXG59XHJcbi5mbGlnaHQtcHJpY2V7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY29tYm8taW5mb3tcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHJcbiAgLnAtdG9wLTZ7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbC1wYWRkaW5nLWxlZnR7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAjY2NjO1xyXG4gIHBhZGRpbmctbGVmdDogOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcclxuICAuY29sLXBhZGRpbmctbGVmdHtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggI2NjYztcclxuICAgIHBhZGRpbmctbGVmdDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNlYzk3MWY7XHJcbiAgfVxyXG4gIC5mbGlnaHQtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gIH1cclxuICAuY29tYm8taW5mbyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICB9XHJcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tZGV0YWlscmV2aWV3e1xyXG4gICAgbGVmdDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8vLy8vLy8vLy8gTG9hZGVyIGNzc1xyXG5cclxuLmxkcy1yb2xsZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMyO1xyXG4gIGhlaWdodDogMzI7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2IHtcclxuICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xyXG4gIG1hcmdpbjogLTNweCAwIDAgLTNweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xyXG4gIHRvcDogNTRweDtcclxuICBsZWZ0OiA0NXB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcclxuICB0b3A6IDU3cHg7XHJcbiAgbGVmdDogMzlweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XHJcbiAgdG9wOiA1OHB4O1xyXG4gIGxlZnQ6IDMycHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XHJcbiAgdG9wOiA1N3B4O1xyXG4gIGxlZnQ6IDI1cHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xyXG4gIHRvcDogNTRweDtcclxuICBsZWZ0OiAxOXB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcclxuICB0b3A6IDUwcHg7XHJcbiAgbGVmdDogMTRweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XHJcbiAgdG9wOiA0NXB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLmZsaWdodC1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLy8vLy8vLy8vXHJcbjo6bmctZGVlcCB7XHJcbiBcclxuICAuY2xzLWFsZXJ0LWZsaWdodGNvbWJvcmV2aWV3IHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAtLW1heC13aWR0aDogMjgwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gICAgLmNscy1hbGVydC1jYXJjb21ibyAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgLS1tYXgtd2lkdGg6IDI5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1jYXJjb21ibyAge1xyXG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLCNmZmYpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtY2FyY29tYm8gLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LWNhcmNvbWJvIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KXtcclxuICAgICAgLmNscy1hbGVydC1jYXJjb21ibyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLy8vL1xyXG4gICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgLS1tYXgtd2lkdGg6IDI5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIC5zYy1pb24tYWxlcnQtaW9zLWguYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlICB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCl7XHJcbiAgICAgICAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0LWRlcGFydHVyZSAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcclxuICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodC1kZXBhcnR1cmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHQtZGVwYXJ0dXJlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3MuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vXHJcbiAgICAuYnRubm9uZXN1Y2Nlc3Ncclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNDQ3YTAwO1xyXG4gICBcclxuICB9XHJcbiAgLmlvbi1wYWdle1xyXG4gICAgb3ZlcmZsb3cteTpoaWRkZW47XHJcbiAgfVxyXG5cclxuICAvL1Phu61hIGzhu5dpIGJ1dHRvbiBva1xyXG4gIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1ke1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmNsaWNrXHJcbntcclxuICBjb2xvcjogIzQ0N2EwMFxyXG59XHJcbi5ub25lXHJcbntcclxuICBjb2xvcjogYmxhY2tcclxufVxyXG4uZXJyb3Jcclxue1xyXG4gIGNvbG9yOnJnYigyMjksIDQwLCAzNCk7XHJcbn1cclxuLmJ0bm5vbmVcclxue1xyXG4gICAgY29sb3I6ICNGNzkyMjE7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5idG51cGdyYWRle1xyXG4gIGNvbG9yOiAjRjc5MjIxO1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bmFwcGx5XHJcbntcclxuICAgIGNvbG9yOiAjRjc5MjIxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4gIC5jbHMtYmx1cntcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcblxyXG4gIC5kaXYtaG90ZWwtaW5mb3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG5cclxuICAgIC5kaXYtd3JhcGltZ3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgIGhlaWdodDogMTA0cHg7XHJcblxyXG4gICAgICAuaW1nLWhvdGVsLWF2YXRhci0xMjN7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1ob3RlbC1hdmF0YXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWhvdGVsLW5hbWV7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTEycHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAucC10b3AtMTV7XHJcbiAgICAgIHBhZGRpbmctdG9wOjE1cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1ob3RlbC1uYW1le1xyXG4gICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIH1cclxuICAgIC50ZXh0LWFkZHJlc3N7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgIC5pbWctbG9jYXRpb257XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm9vbS1pbmZve1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5kaXYtdGV4dC1uYW1le1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA2MiU7IFxyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcGF4e1xyXG4gICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtYnV0dG9uLXVwZ3JhZGV7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuXHJcbiAgICAgIC5pbWctY2hhbmdlLXJvb217XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtcG9pbnR7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5udW0tcG9pbnQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuLnRleHQtxJFpc2NvdW50XHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNscy1jb2xcclxue1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uY2xzLW10MTBcclxue1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5jbHMtaHJcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gIGhlaWdodDogN3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG4uY2xzLW1sNVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4udGV4dC1wcm9tb3Rpb25cclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG4uZGl2LXZvdWNoZXJ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAuZGl2LWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5kaXYtZmlyc3R7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG5cclxuICAgICAgICAuZGl2LWNoZWNrcG9pbnR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2hlY2stcG9pbnR7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNscy1tbDhcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LWRpc2FibGVke1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWNvbC1zcGxpdHtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XHJcbiAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50ZXh0LXBvaW50e1xyXG4gICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgLm51bS1wb2ludCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1wcm9tb3Rpb257XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxucCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG59XHJcbi5kaXYtY2lub3V0XHJcbntcclxuICBoZWlnaHQ6IDY4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAyMHB4IDhweCA4cHggOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcbi5jbHMtZ3JpZGNpbm91dFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG4ucm93LWNpbi1jb3V0e1xyXG4gIGhlaWdodDogNTJweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4udGV4dC1jaW5vdXR7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTVweFxyXG59XHJcbi50ZXh0LWluZm8tZ3Vlc3Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLnRleHQtdGl0bGV7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5pbWctYXJyb3d7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG59XHJcbi5pbWctcmF0aW5ne1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLnRleHQtcFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtd2lkdGgtMTkwe1xyXG4gIHdpZHRoOiAxOTBweDtcclxufVxyXG4udGV4dC1wLWluZm97XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5pbWFnZS1jYXJke1xyXG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxufVxyXG4uZGl2LWZsZXh7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubGluZS1ibHVle1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5tYXJnaW4tcmlnaHQtNXtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uZGl2LWhvdGVsLW5hbWUtMXtcclxuICBtaW4taGVpZ2h0OiA0NXB4O1xyXG59XHJcbi50ZXh0LWNoYXJnZXtcclxuICByaWdodDogMTdweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmRpdi1mbGlnaHQtdGltZXtcclxuXHJcbiAgLmRpdi10aW1le1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gIH1cclxuICAuZGl2LWxvY2F0aW9ue1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmZsaWdodC1pbWctYXJyb3d7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICB9XHJcbiAgLmZvbnQtc2l6ZS0xNHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLm10LTJ7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG59XHJcbi5sZXR0ZXItc3BhY2luZ3tcclxuICBsZXR0ZXItc3BhY2luZzoxLjdweFxyXG59XHJcbi5mb250LXNpemUtMTR7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5mb250LXNpemUtMTJ7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5kaXYtbG9nb3tcclxuICBoZWlnaHQ6IDE4cHg7XHJcblxyXG4gIC5pbWctbG9nb3tcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gIH1cclxufVxyXG4uZGl2LWZsaWdodC1uYW1le1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLmRpdi1mbGlnaHQtdGlja2V0XHJcbntcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubWFyZ2luLWxlZnQtNVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4ubWFyZ2luLWxlZnQtM1xyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4udGV4dC1jaGFuZ2V7XHJcbiAgY29sb3I6ICMyNmJlZDY7XHJcbiAgcmlnaHQ6IDE3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS42NztcclxufVxyXG4uZGl2LW5vbmVcclxue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm0tdG9wLTE1e1xyXG4gIG1hcmdpbi10b3A6IDE1LjVweDtcclxufVxyXG4ubS1ib3R0b20tMTZ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4uaW9uLWl0ZW1cclxue1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNscy1pY29uLWltZ1xyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMTJweDtcclxuICB0b3A6MHB4O1xyXG59XHJcbi5tdC02e1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ubXR0LTJ7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG4udGV4dC1vcGVyYXRlZEJ5e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuLnRleHQtbHVnZ2FnZXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzI2YmVkNjtcclxufVxyXG4ubWFyZ2luLWxlZnQtOHtcclxuICBtYXJnaW4tbGVmdDo4cHg7XHJcbn1cclxuLnRleHQtc3VnZ2VzdHtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnJvdy1zdWdnZXN0e1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xyXG4gIHBhZGRpbmc6IDEycHggOHB4IDhweCA4cHg7XHJcbn1cclxuLm10LTN7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5jb2xvci1yZWR7XHJcbiAgIGNvbG9yOiAjZTUyODIyO1xyXG59XHJcbi5jb2xvci1ibHVle1xyXG4gIGNvbG9yOiAjMmY4MGVkO1xyXG59XHJcbi50ZXh0LXdlaWdodC1zdWdnZXN0e1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50ZXh0LXVuZGVybGluZXtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4uZGl2LXRpdGxle1xyXG4gIHBhZGRpbmctdG9wOiAxMXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5tYXJnaW4tdG9wLTN7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcbi5jb2xvci1ibHVle1xyXG4gIGNvbG9yOiAjMjZiZWQ2XHJcbn1cclxuLnRleHQtY2Zye1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbn1cclxuIl19 */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/flightcomboreviews/flightcomboreviews.ts":
/*!**********************************************************!*\
  !*** ./src/app/flightcomboreviews/flightcomboreviews.ts ***!
  \**********************************************************/
/*! exports provided: FlightComboReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightComboReviewsPage", function() { return FlightComboReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _flightdeparture_flightdeparture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flightdeparture/flightdeparture */ "./src/app/flightdeparture/flightdeparture.ts");
/* harmony import */ var _requestcombo_requestcombo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../requestcombo/requestcombo */ "./src/app/requestcombo/requestcombo.ts");
/* harmony import */ var _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../adddiscount/adddiscount.page */ "./src/app/adddiscount/adddiscount.page.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");















let FlightComboReviewsPage = class FlightComboReviewsPage {
    constructor(platform, valueGlobal, navCtrl, Roomif, zone, loadingCtrl, booking, storage, alertCtrl, value, modalCtrl, gf, bookCombo, searchhotel, activityService, toastCtrl, fb) {
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.booking = booking;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.value = value;
        this.modalCtrl = modalCtrl;
        this.gf = gf;
        this.bookCombo = bookCombo;
        this.searchhotel = searchhotel;
        this.activityService = activityService;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.textage = "";
        this.PriceAvgPlusTAStr = 0;
        this.ischeckpoint = false;
        this.ischeck = false;
        this.listDeparture = [];
        this.de_departpriceincrease = false;
        this.de_returnpriceincrease = false;
        this.ar_departpriceincrease = false;
        this.ar_returnpriceincrease = false;
        this.loadflightpricedone = false;
        this.paxtitle = '';
        this.loadpricedone = false;
        this.adultCombo = 2;
        this.adultUnit = 0;
        this.commissionAdult = 0;
        this.adultUnitExb = 0;
        this.childUnit = 0;
        this.infantUnit = 0;
        this.departTicketSale = 0;
        this.returnTicketSale = 0;
        this.transportPriceSale = 0;
        this.transportPriceNet = 0;
        this.transportPriceSaleForChild = 0;
        this.transportPriceNetForChild = 0;
        this.totalPriceSale = 0;
        this.totalSurchargeWeekendFee = 0;
        this.totalTransportPriceSale = 0;
        this.TotalPriceCombo = 0;
        this.totalAirLineLuggage = 0;
        this.totalPriceForEXBA = 0;
        this.totalPriceForChildCWE = 0;
        this.totalPriceForChildEXBC = 0;
        this.totalPriceInfant = 0;
        this.totalPriceForOtherFee = 0;
        this.totalGetSubPriceForAdultExtrabed = 0;
        this.totalGetSubPriceForChild = 0;
        this.totalQuantityChildCWEAndEXBC = 0;
        this.totalQuantityFlightForChildAndInfant = 0;
        this.totalQuantityFlightForChild = 0;
        this.totalPriceChild = 0;
        this.ChildOtherFeeTotal = 0;
        this.ChildOtherFee = 0;
        this.totalChild = 0;
        this.totalAdult = 0;
        this.totalInfant = 0;
        this.totalFlightDepart = 0;
        this.totalFlightReturn = 0;
        this.commissionFlight = 0;
        this.commissionDepart = 0;
        this.Commission = 0;
        this.AdultCombo = 0;
        this.totalAdultExtrabed = 0;
        this.totalExtraBedAndGalaDinerListTA = 0;
        this.AdultOtherFee = 0;
        this.roomPriceSale = 0;
        this.TotalNight = 0;
        this.PriceDiffUnit = 0;
        this.adultFlightNumber = 0;
        this.JsonSurchargeFee = {
            RoomDifferenceFee: 0,
            AdultUnit: 0,
            DepartTicketDifferenceFee: 0,
            TransportPriceSale: 0,
            ReturnTicketDifferenceFee: 0,
            BaggageDepart: 0,
            BaggageReturn: 0,
            SurchargeWeekendFee: 0,
            SurchargeFee: [],
            TotalAll: 0,
            ComboData: {}
        };
        this.ComboPriceDiff = {
            RoomDiff: { AdultUnit: 0, ChildUnit: 0, Total: 0 },
            DepartFlightDiff: { AdultUnit: 0, AdultUnitExb: 0, ChildUnit: 0, InfantUnit: 0, Total: 0, CommissionAdult: 0 },
            ReturnFlightDiff: { AdultUnit: 0, AdultUnitExb: 0, ChildUnit: 0, InfantUnit: 0, Total: 0, CommissionAdult: 0 },
        };
        this.infant = 0;
        this.listkeys = [];
        this.fromPlace = "";
        this.toPlace = "";
        this.departfi = [];
        this.returnfi = [];
        this.loaddatafromcache = false;
        this.ischecktext = 3;
        this.ischeckerror = 0;
        this.ischeckbtnpromo = false;
        this.textpromotion = "Nhập mã giảm giá";
        this._daysConfig = [];
        this.stoprequest = false;
        this.allowSearch = true;
        this.allowSearchReturn = true;
        this.operatedBydep = "";
        this.operatedByret = "";
        this.ischecklugage = false;
        this.ischangefly = true;
        this.departLuggage = [];
        this.returnLuggage = [];
        this.totaldepluggage = 0;
        this.totalretluggage = 0;
        this.ischeckBOD = false;
        this.allowclickcalendar = true;
        this.ischeckwaitlug = false;
        this.msgEmptyFlight = '';
        setTimeout(() => {
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
            this.booking.ChildAge.forEach(element => {
                if (element == "<1" || Number(element) < 2) {
                    this.infant += 1;
                }
            });
            this.arrchild = this.searchhotel.arrchild;
            this.Rating = this.booking.RatingHotel;
            this.Avatar = Roomif.imgHotel;
            this.Name = booking.HotelName;
            this.Address = Roomif.Address;
            this.cin = booking.CheckInDate;
            this.cout = booking.CheckOutDate;
            this.cinthudisplay = this.getDayOfWeek(this.cin);
            this.coutthudisplay = this.getDayOfWeek(this.cout);
            this.duration = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).diff(moment__WEBPACK_IMPORTED_MODULE_8__(this.cin), 'days');
            var cintemp = new Date(this.cin);
            this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(cintemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_8__(cintemp).format('MM');
            var couttemp = new Date(this.cout);
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(couttemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_8__(couttemp).format('MM');
            this.TotalNight = this.duration;
            this.dur = this.duration;
            this.roomnumber = Roomif.roomnumber;
            this.adults = booking.Adults;
            this.totalAdult = booking.Adults;
            if (booking.Child) {
                this.children = booking.Child;
            }
            else {
                this.children = 0;
            }
            this.totalChild = booking.Child;
            this.roomtype = Roomif.roomtype;
            this.jsonroom = Roomif.jsonroom;
            this.room = Roomif.arrroom;
            var chuoicin = this.cin.split('-');
            var chuoicout = this.cout.split('-');
            this.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
            this.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
            this.nameroom = this.room[0].ClassName;
            this.breakfast = this.bookCombo.MealTypeName;
            this.value.flagreview = 1;
            this.titlecombo = this.bookCombo.ComboTitle;
            this.hotelcode = this.bookCombo.HotelCode;
            this.objInsurranceFee = this.bookCombo.objInsurranceFee;
            this.hasInsurrance = this.bookCombo.hasInsurrance;
            this.showInsurranceText = this.hasInsurrance ? this.hasInsurrance : (this.bookCombo.checkInsurranceFee ? true : false);
            this.titlecombo = this.valueGlobal.titlecombo;
            this.bookCombo.tileComboShort = this.titlecombo;
            var cb;
            if (this.bookCombo.ComboDetail.details.length == 1) {
                cb = this.bookCombo.ComboDetail.details[0];
                this.bookcombodetail = cb;
            }
            else {
                this.bookCombo.ComboDetail.details.forEach(element => {
                    let df = moment__WEBPACK_IMPORTED_MODULE_8__(element.stayFrom).format('YYYY-MM-DD');
                    let dt = moment__WEBPACK_IMPORTED_MODULE_8__(element.stayTo).format('YYYY-MM-DD');
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckInDate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(df), 'days') >= 0 && moment__WEBPACK_IMPORTED_MODULE_8__(dt).diff(moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckInDate), 'days') >= 0
                        && moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(df), 'days') >= 0 && moment__WEBPACK_IMPORTED_MODULE_8__(dt).diff(moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckOutDate), 'days') >= 0) {
                        cb = element;
                        this.bookcombodetail = element;
                    }
                });
                if (!cb) {
                    cb = this.bookCombo.ComboDetail.details[0];
                    this.bookcombodetail = cb;
                }
            }
            this.totalPriceSale = cb.totalPriceSale;
            this.departTicketSale = cb.departTicketSale;
            this.returnTicketSale = cb.returnTicketSale;
            this.basepricesale = cb.totalPriceSale - cb.departTicketSale - cb.returnTicketSale;
            this.roomPriceSale = this.basepricesale;
            this.totalInfant = this.infant;
            this.totalChild = this.children - this.infant;
            this.childrendisplay = this.children;
            this.adultsdisplay = this.booking.Adults;
            if (this.arrchild) {
                for (let i = 0; i < this.arrchild.length; i++) {
                    if (i == this.arrchild.length - 1) {
                        this.textage = this.textage + this.arrchild[i].numage;
                    }
                    else {
                        this.textage = this.textage + this.arrchild[i].numage + ",";
                    }
                    if (this.arrchild[i].numage >= 12) {
                        this.children--;
                        this.totalChild--;
                        this.adults++;
                        this.totalAdult++;
                    }
                }
                if (this.textage) {
                    this.textage = "(" + this.textage + ")";
                }
            }
            if (this.adultsdisplay > 0) {
                this.paxtitle += this.adultsdisplay + ' người lớn';
            }
            if (this.childrendisplay > 0) {
                this.paxtitle += ', ' + this.childrendisplay + ' trẻ em';
            }
            this.getHotelContractPrice(this.bookCombo.FormParam);
            this.storage.get('point').then(point => {
                if (point) {
                    if (point > 0) {
                        this.pointshow = point;
                        this.Roomif.point = point;
                        this.point = point * 1000;
                        this.price = this.point.toLocaleString();
                    }
                    else {
                        this.point = 0;
                    }
                }
                else {
                    this.point = 0;
                }
            });
        }, 350);
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
            var checkdate = moment__WEBPACK_IMPORTED_MODULE_8__(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
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
            this.cinthu = moment__WEBPACK_IMPORTED_MODULE_8__(datecin).format('dddd');
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
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_8__(datecout).format('dddd');
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
    ionViewDidEnter() {
        var se = this;
        if (se.valueGlobal.backValue == "flightcomboinfoluggage" || se.valueGlobal.backValue == "flightcomboupgraderoom") {
            se.valueGlobal.backValue = "";
        }
        else {
            if (se.valueGlobal.backValue != "flightcombopaymentbreakdown") {
                se.ischangefly = true;
                se.bookCombo.Luggage = 0;
                se.ischeck = false;
                se.GetUserInfo();
                se.loadflightpricedone = false;
                se.listDepart = [];
                se.listReturn = [];
                if (se.bookCombo.MealTypeIndex) {
                    se.index = se.bookCombo.MealTypeIndex;
                }
                setTimeout(() => {
                    se.loadFlightDataNew(true);
                }, 400);
            }
            else {
                se.valueGlobal.backValue = "";
            }
        }
    }
    ngOnInit() {
        var se = this;
        this.bookCombo.itemFlightLuggagePriceChange.pipe().subscribe((data) => {
            if (data) {
                var objectFlight = this.gf.getParams('flightcombo');
                if (this.departConditionInfo && this.departConditionInfo.luggageSigned && this.departConditionInfo.luggageSigned.length <= 4) {
                    this.totaldepluggage = Number(this.departConditionInfo.luggageSigned);
                }
                else {
                    this.totaldepluggage = 0;
                }
                if (this.returnConditionInfo && this.returnConditionInfo.luggageSigned && this.returnConditionInfo.luggageSigned.length <= 4) {
                    this.totalretluggage = Number(this.returnConditionInfo.luggageSigned);
                }
                else {
                    this.totalretluggage = 0;
                }
                this.edit();
                var totaldepartluggage = 0;
                var totalreturnluggage = 0;
                for (let index = 0; index < objectFlight.airLineLuggageDepart.length; index++) {
                    const element = objectFlight.airLineLuggageDepart[index];
                    if (element.quantity > 0) {
                        totaldepartluggage = Number(totaldepartluggage) + Number((element.quantity * element.Weight));
                    }
                }
                this.totaldepluggage = Number(this.totaldepluggage) + Number(totaldepartluggage);
                for (let index = 0; index < objectFlight.airLineLuggageReturn.length; index++) {
                    const element = objectFlight.airLineLuggageReturn[index];
                    if (element.quantity > 0) {
                        totalreturnluggage = Number(totalreturnluggage) + Number((element.quantity * element.Weight));
                    }
                }
                this.totalretluggage = Number(this.totalretluggage) + Number(totalreturnluggage);
            }
        });
        se.bookCombo.upgradeRoomChange.pipe().subscribe((dataRoomChange) => {
            if (dataRoomChange) {
                se.updateRoomChange(dataRoomChange);
            }
        });
    }
    updateRoomChange(data) {
        var se = this;
        if (data) {
            se.zone.run(() => {
                let itemroom = data.itemroom;
                let itemmealtype = data.itemmealtype;
                se.index = data.index;
                se.RoomType = itemroom.RoomType;
                se.roomnumber = itemmealtype.TotalRoom;
                se.statusRoom = itemmealtype.Status;
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
                se.bookCombo.mealTypeRates = itemmealtype;
                se.bookCombo.MealTypeName = se.breakfast;
                se.Roomif.arrroom = [];
                se.Roomif.arrroom.push(itemroom);
                if (itemroom && itemmealtype) {
                    se.callSummaryPriceAfterUpgradeRoom(itemroom, itemmealtype);
                }
            });
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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
                        se.point = 0;
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                if (data.point) {
                                    if (data.point > 0) {
                                        se.pointshow = data.point;
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
    sort(property, listsort) {
        var se = this;
        if (listsort && listsort.length > 0) {
            se.zone.run(() => listsort.sort(function (a, b) {
                let direction = -1;
                if (property == "priceorder") {
                    if (a[property] * 1 < b[property] * 1) {
                        return 1 * direction;
                    }
                    else if (a[property] * 1 > b[property] * 1) {
                        return -1 * direction;
                    }
                    else if (a[property] * 1 == b[property] * 1 && a["rangeTime"] && b["rangeTime"]) {
                        if (a["rangeTime"] >= 600 && a["rangeTime"] <= 720) {
                            return 1 * direction;
                        }
                        else if (b["rangeTime"] >= 600 && b["rangeTime"] <= 720) {
                            return -1 * direction;
                        }
                        else {
                            return 1 * direction;
                        }
                    }
                    else if (a[property] * 1 == b[property] * 1 && a["rangeTimeReturn"] && b["rangeTimeReturn"]) {
                        if (a["rangeTimeReturn"] >= 840 && a["rangeTimeReturn"] <= 1020) {
                            return 1 * direction;
                        }
                        else if (b["rangeTimeReturn"] >= 840 && b["rangeTimeReturn"] <= 1020) {
                            return -1 * direction;
                        }
                        else {
                            return 1 * direction;
                        }
                    }
                }
            }));
        }
    }
    ;
    getHotelContractPrice(data) {
        var se = this;
        return new Promise((resolve, reject) => {
            if (data) {
                data.IsPackageRateInternal = true;
                data.IsPackageRate = true;
                data.GetVinHms = 1;
                data.GetSMD = 1;
                data.IsB2B = true;
                data.IsSeri = true;
                var form = data;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/api/contracting/HotelSearchReqContractAppV2',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {},
                    form
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "flightcomboreviews",
                            func: "getHotelContractPrice",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "flightcomboreviews";
                        error.func = "getHotelContractPrice";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    ;
                    se.zone.run(() => {
                        var result = JSON.parse(body);
                        if (result.Hotels) {
                            se.jsonroom = result.Hotels[0].RoomClasses;
                            let cbp = se.bookcombodetail;
                            var element = se.checkElement(se.jsonroom);
                            if (element) {
                                var index = 0;
                                for (let i = 0; i < element.MealTypeRates.length; i++) {
                                    if (element.MealTypeRates[i].Code == se.bookCombo.MealTypeCode) {
                                        index = i;
                                        break;
                                    }
                                }
                                se.nameroom = element.ClassName;
                                se.RoomType = element.RoomType;
                                se.roomnumber = element.TotalRoom;
                                se.index = index;
                                se.calculateDiffPriceUnit();
                                se.callSummaryPrice(element, index);
                                se.arrBOD = se.valueGlobal.notSuggestDaily;
                            }
                            else {
                                se.jsonroom = result.Hotels[0].RoomClassesRecomments;
                                let cbp = se.bookcombodetail;
                                var element = se.checkElement(se.jsonroom);
                                se.elementRooom = element;
                                if (element) {
                                    var index = 0;
                                    for (let i = 0; i < element.MealTypeRates.length; i++) {
                                        if (element.MealTypeRates[i].Code == se.bookCombo.MealTypeCode) {
                                            index = i;
                                            break;
                                        }
                                    }
                                    if (element) {
                                        se.nameroom = element.ClassName;
                                        se.roomnumber = element.TotalRoom;
                                        se.RoomType = element.RoomType;
                                        se.index = index;
<<<<<<< HEAD
                                        se.bookCombo.mealTypeRates = element;
=======
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61
                                        se.calculateDiffPriceUnit();
                                        se.callSummaryPrice(element, index);
                                        se.getBOD(element.MealTypeRates[0].RoomId);
                                    }
                                    else {
                                        se.loadpricedone = true;
                                    }
                                    resolve(true);
                                }
                                else {
                                    se.loadpricedone = true;
                                    se.loadflightpricedone = true;
                                    se.PriceAvgPlusTAStr = 0;
                                    se.TotalPrice = 0;
                                    resolve(false);
                                }
                            }
                            resolve(true);
                        }
                        else {
                            se.loadpricedone = true;
                            se.PriceAvgPlusTAStr = 0;
                            se.loadflightpricedone = true;
                            resolve(false);
                        }
                    });
                });
            }
        });
    }
    checkElement(object) {
        var el = null;
        var se = this;
        object.forEach(element => {
            if (element && element.MealTypeRates[0].RoomId == se.bookcombodetail.roomId && !element.MSGCode) {
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
    callSummaryPrice(element, index) {
        var se = this;
        if (element && !element.MSGCode) {
            se.TravPaxPrices = element.MealTypeRates[index].PriceAvgPlusNet * se.roomnumber * se.TotalNight;
            se.roomclass = element;
            se.bookCombo.mealTypeRates = element.MealTypeRates[index];
            se.elementMealtype = element.MealTypeRates[index];
            se.breakfast = element.MealTypeRates[index].Name;
            se.statusRoom = element.MealTypeRates[index].Status;
            this.index = index;
            se.AdultCombo = element.Rooms[0].IncludeAdults * se.elementMealtype.TotalRoom;
            se.AdultCombo = se.AdultCombo > se.totalAdult ? se.totalAdult : se.AdultCombo;
            se.transportPriceSale = se.transportPriceSale * (se.totalAdult - se.AdultCombo);
            se.transportPriceNet = se.transportPriceNet * (se.totalAdult - se.AdultCombo);
            se.TotalPriceCombo = se.totalPriceSale * se.AdultCombo;
            se.totalAdultExtrabed = se.totalAdult - se.AdultCombo;
            se.MathGaladinnerAdExtrabed();
            if (se.currentDepartFlight != undefined) {
                se.SaveFlightDepartSelected();
            }
            if (se.currentDepartFlight != undefined) {
                se.SaveFlightReturnSelected();
            }
            se.MathPriceAll();
        }
    }
    getFlightPriceSale(departFlight, returnFlight) {
        var se = this;
        var flightprice = 0;
        if (departFlight && departFlight.priceSummaries) {
            flightprice += departFlight.totalPrice;
            se.daydeparttitle = se.getDayOfWeek(new Date(departFlight.departTime)) + ', ' + moment__WEBPACK_IMPORTED_MODULE_8__(new Date(departFlight.departTime)).format('DD-MM-YYYY');
        }
        if (returnFlight && returnFlight.priceSummaries) {
            flightprice += returnFlight.totalPrice;
            se.dayreturntitle = se.getDayOfWeek(new Date(returnFlight.departTime)) + ', ' + moment__WEBPACK_IMPORTED_MODULE_8__(new Date(returnFlight.departTime)).format('DD-MM-YYYY');
        }
        if (!departFlight && !returnFlight) {
            let cb = se.bookcombodetail;
            flightprice = (cb.departTicketSale + cb.returnTicketSale) * se.adults;
        }
        return flightprice;
    }
    goback() {
        this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
    }
    loadFlightDataNew(hascache) {
        var se = this;
        setTimeout(() => {
            se.stoprequest = true;
            se.loadpricedone = true;
            if (se.listDepart.length == 0 || se.listReturn.length == 0) {
                se.PriceAvgPlusTAStr = 0;
                se.loadflightpricedone = true;
                se.ischeckwaitlug = true;
                se.msgEmptyFlight = se.listDepart.length == 0 && se.listReturn.length == 0 ? 'Vé máy bay không có.' : (se.listDepart.length == 0 ? 'Vé máy bay chiều đi không có.' : 'Vé máy bay chiều về không có.');
            }
        }, 50 * 1000);
        se.checkLoadCacheData(hascache).then(data => {
            if (data) {
                se.stoprequest = false;
                se.loadFlightCacheDataByAirline(data, 'depart');
                se.loadFlightCacheDataByAirline(data, 'return');
            }
        });
    }
    checkLoadCacheData(hascache) {
        var se = this;
        se.stoprequest = true;
        return new Promise((resolve, reject) => {
            let objjson = {
                "requestFrom": {
                    "fromPlace": se.bookCombo.ComboDetail.departureCode,
                    "toPlace": se.bookCombo.arrivalCode,
                    "departDate": moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckInDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    "returnDate": moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckInDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    "adult": se.adults,
                    "child": (se.children - se.infant),
                    "infant": se.infant,
                    "version": "2.0",
                    "roundTrip": true
                },
                "requestTo": {
                    "fromPlace": se.bookCombo.arrivalCode,
                    "toPlace": se.bookCombo.ComboDetail.departureCode,
                    "departDate": moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckOutDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    "returnDate": moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckOutDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                    "adult": se.adults,
                    "child": (se.children - se.infant),
                    "infant": se.infant,
                    "version": "2.0",
                    "roundTrip": true
                },
                "roundTrip": true,
<<<<<<< HEAD
                "noCache": true,
                'tcincharge': "89311",
=======
                "noCache": true
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61
            };
            var options = {
                'method': 'POST',
                'url': _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + 'gate/apiv1/GetSessionFlight',
                'headers': {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(objjson)
            };
            requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                if (body) {
                    resolve(JSON.parse(body));
                }
            });
        });
    }
    loadFlightCacheDataByAirline(source, type) {
        var se = this;
        if (type == "depart") {
            se.allowSearch = false;
        }
        else {
            se.allowSearchReturn = false;
        }
        let urlfindflightincache = type == "depart" ? _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetFlightDepart" : _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetFlightReturn";
        let objbody = {
            "fromPlace": type == 'depart' ? se.bookCombo.ComboDetail.departureCode : se.bookCombo.arrivalCode,
            "toPlace": type == 'depart' ? se.bookCombo.arrivalCode : se.bookCombo.ComboDetail.departureCode,
            "departDate": type == 'depart' ? moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckInDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS") : moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckOutDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
            "returnDate": type == 'depart' ? moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckInDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS") : moment__WEBPACK_IMPORTED_MODULE_8__(new Date(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckOutDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
            "adult": se.adults,
            "child": (se.children - se.infant),
            "infant": se.infant,
            "sources": source,
            "version": "2.0",
            "roundTrip": true
        };
        var options = {
            method: "POST",
            url: urlfindflightincache,
            body: JSON.stringify(objbody),
            headers: {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
            let objError = {
                page: "flightsearchresult",
                func: "findflightincache",
                message: response.statusMessage,
                content: response.body,
                type: "warning",
                param: JSON.stringify(options)
            };
            if (error) {
                error.page = "flightsearchresult";
                error.func = "findflightincache";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            else {
                let result = JSON.parse(body);
                if (type == "depart") {
                    se.allowSearch = true;
                }
                else {
                    se.allowSearchReturn = true;
                }
                if (result) {
                    if (result.data && result.data.length > 0) {
                        result.data.forEach(element => {
                            var arrfly = [];
                            for (let i = 0; i < element.flights.length; i++) {
                                if (element.flights[i].stops == 0) {
                                    arrfly.push(element.flights[i]);
                                }
                            }
                            se.loadmultidata(arrfly, type);
                        });
                    }
                    if (!result.stop && !se.stoprequest && type == 'depart' && se.allowSearch) {
                        setTimeout(() => {
                            se.zone.run(() => {
                                source = result.sources;
                            });
                            se.loadFlightCacheDataByAirline(source, 'depart');
                        }, 1500);
                    }
                    else if (!result.stop && !se.stoprequest && type == 'return' && se.allowSearchReturn) {
                        source = result.sources;
                        setTimeout(() => {
                            se.zone.run(() => {
                                source = result.sources;
                            });
                            se.loadFlightCacheDataByAirline(source, 'return');
                        }, 1500);
                    }
                }
            }
        });
    }
    loadmultidata(data, type) {
        var se = this;
        let jsondata = data;
        se.ischeckwaitlug = false;
        se.zone.run(() => {
            if (type == 'depart') {
                if (!se.listDepart || (se.listDepart && se.listDepart.length == 0)) {
                    se.listDepart = jsondata;
                }
                else {
                    if (se.listDepart && se.listDepart.length > 0) {
                        se.listDepart = [...se.listDepart, ...jsondata];
                    }
                }
            }
            if (type == 'return') {
                if (!se.listReturn || (se.listReturn && se.listReturn.length == 0)) {
                    se.listReturn = jsondata;
                }
                else {
                    if (se.listReturn && se.listReturn.length > 0) {
                        se.listReturn = [...se.listReturn, ...jsondata];
                    }
                }
            }
            se.getdata();
        });
    }
    getdata() {
        var se = this;
        se.loadpricedone = true;
        se.zone.run(() => {
            if (se.listDepart && se.listDepart.length > 0) {
                se.listDepart.forEach(element => {
                    var priceFlightAdult = 0;
                    element.priceSummaries.forEach(e => {
                        if (e.passengerType == 0) {
                            priceFlightAdult += e.price;
                        }
                    });
                    element.priceorder = priceFlightAdult - se.departTicketSale;
                    if (element.airlineCode == "VietnamAirlines") {
                        element.priceorder = element.priceorder * 0.75;
                    }
                    else if (element.airlineCode == "BambooAirways") {
                        element.priceorder = element.priceorder * 0.8;
                    }
                    let ar_time = element.departTime.toString().split('T')[1];
                    let Hour = ar_time.toString().split(':')[0];
                    let Minute = ar_time.toString().split(':')[1];
                    let kq = Hour * 60 + Number(Minute);
                    element.rangeTime = kq;
                });
                se.sort('priceorder', se.listDepart);
                se.checkvalue(se.listDepart, 0);
                se.currentDepartFlight = se.departfi;
            }
            if (se.listReturn && se.listReturn.length > 0) {
                se.listReturn.forEach(element => {
                    var priceFlightAdult = 0;
                    element.priceSummaries.forEach(e => {
                        if (e.passengerType == 0) {
                            priceFlightAdult += e.price;
                        }
                    });
                    element.priceorder = priceFlightAdult - se.returnTicketSale;
                    if (element.airlineCode == "VietnamAirlines") {
                        element.priceorder = element.priceorder * 0.75;
                    }
                    else if (element.airlineCode == "BambooAirways") {
                        element.priceorder = element.priceorder * 0.8;
                    }
                });
                se.sort('priceorder', se.listReturn);
                se.checkvalue(se.listReturn, 1);
                se.currentReturnFlight = se.returnfi;
            }
            se.loadFlightData(se.departfi, se.returnfi);
        });
    }
    checkvalue(list, stt) {
        var Hour;
        var Minute;
        var kq;
        var good = [];
        var medium = [];
        var other = [];
        if (stt == 0) {
            for (let i = 0; i < list.length; i++) {
                let ar_time = list[i].departTime.toString().split('T')[1];
                Hour = ar_time.toString().split(':')[0];
                Minute = ar_time.toString().split(':')[1];
                kq = Hour * 60 + Number(Minute);
                list[i].rangeTime = kq;
                if (kq >= 360 && kq <= 960) {
                    if (kq >= 480 && kq <= 660) {
                        good.push(list[i]);
                    }
                    else {
                        medium.push(list[i]);
                    }
                }
                else {
                    other.push(list[i]);
                }
            }
            if (medium && medium.length > 0 && good && good.length > 0) {
                if (good[0].priceorder <= medium[0].priceorder) {
                    this.departfi = good;
                }
                else {
                    if (medium.length > 0) {
                        this.departfi = medium;
                    }
                    else {
                        if (good.length > 0) {
                            this.departfi = good;
                        }
                    }
                }
            }
            else {
                if (medium.length > 0) {
                    this.departfi = medium;
                }
                else {
                    if (good.length > 0) {
                        this.departfi = good;
                    }
                }
            }
            if (this.departfi && this.departfi.length == 0) {
                this.departfi = other;
            }
        }
        else {
            for (let i = 0; i < list.length; i++) {
                let ar_time = list[i].departTime.toString().split('T')[1];
                Hour = ar_time.toString().split(':')[0];
                Minute = ar_time.toString().split(':')[1];
                kq = Hour * 60 + Number(Minute);
                if (kq >= 600 && kq < 1440) {
                    if (kq >= 840 && kq <= 1020) {
                        good.push(list[i]);
                    }
                    else {
                        medium.push(list[i]);
                    }
                }
                else {
                    other.push(list[i]);
                }
            }
            if (medium.length > 0) {
                this.returnfi = medium;
            }
            else {
                if (good.length > 0) {
                    this.returnfi = good;
                }
            }
            if (this.returnfi.length == 0) {
                this.returnfi = other;
            }
        }
    }
    checkReturnList(list) {
        var Hour;
        var Minute;
        var kq;
        var good = [];
        var medium = [];
        var other = [];
        for (let i = 0; i < list.flights.length; i++) {
            let ar_time = list.flights[i].departTime.toString().split('T')[1];
            Hour = ar_time.toString().split(':')[0];
            Minute = ar_time.toString().split(':')[1];
            kq = Hour * 60 + Number(Minute);
            if (kq >= 600 && kq < 1440) {
                if (kq >= 840 && kq <= 1020) {
                    good.push(list.flights[i]);
                }
                else {
                    medium.push(list.flights[i]);
                }
            }
            else {
                other.push(list.flights[i]);
            }
        }
        if (medium && medium.length > 0 && good && good.length > 0) {
            if (good[0].priceorder <= medium[0].priceorder) {
                this.returnfi = good;
            }
            else {
                if (medium.length > 0) {
                    this.returnfi = medium;
                }
                else {
                    if (good.length > 0) {
                        this.returnfi = good;
                    }
                }
            }
        }
        else {
            if (medium.length > 0) {
                this.returnfi = medium;
            }
            else {
                if (good.length > 0) {
                    this.returnfi = good;
                }
            }
        }
        if (this.returnfi.length == 0) {
            this.returnfi = other;
        }
    }
    loadFlightData(departFlight, returnFlight) {
        var se = this;
        se.listDeparture = [];
        if (departFlight && departFlight.length > 0) {
            se.listDeparture.push(departFlight[0]);
            let de_date = new Date(departFlight[0].departTime);
            let de_date_landing = new Date(departFlight[0].landingTime);
            let de_hour = moment__WEBPACK_IMPORTED_MODULE_8__(de_date).format("HH");
            let de_minute = moment__WEBPACK_IMPORTED_MODULE_8__(de_date).format("mm");
            let de_hour_landing = moment__WEBPACK_IMPORTED_MODULE_8__(de_date_landing).format("HH");
            let de_minute_landing = moment__WEBPACK_IMPORTED_MODULE_8__(de_date_landing).format("mm");
            if (departFlight[0].departTime.toString().indexOf('T')) {
                de_date = new Date(departFlight[0].departTime.toString().split('T')[0]);
                de_date_landing = new Date(departFlight[0].landingTime.toString().split('T')[0]);
                let de_time = departFlight[0].departTime.toString().split('T')[1];
                de_hour = de_time.toString().split(':')[0];
                de_minute = de_time.toString().split(':')[1];
                let ar_time_landing = departFlight[0].landingTime.toString().split('T')[1];
                de_hour_landing = ar_time_landing.toString().split(':')[0];
                de_minute_landing = ar_time_landing.toString().split(':')[1];
            }
            se.de_departtime = de_hour + ':' + de_minute;
            se.re_departtime = de_hour_landing + ':' + de_minute_landing;
            se.bookCombo.departTimeStr = de_hour + ':' + de_minute + ' → ' + de_hour_landing + ':' + de_minute_landing;
            se.de_departdatestr = se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_8__(de_date).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_8__(de_date).format('MM');
            se.bookCombo.de_departdatestr = "Đi " + se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_8__(de_date).format('DD-MM-YYYY');
            se.daydeparttitle = se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_8__(de_date).format('DD-MM-YYYY');
            se.operatedBydep = departFlight[0].operatedBy;
            let hours = Math.floor(departFlight[0].flightDuration / 60);
            let minutes = departFlight[0].flightDuration * 1 - (hours * 60);
            if (hours < 10) {
                hours = hours != 0 ? "0" + hours : "0";
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            departFlight[0].departTimeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(departFlight[0].departTime).format("HH:mm");
            departFlight[0].landingTimeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(departFlight[0].landingTime).format("HH:mm");
            departFlight[0].flightTimeDisplay = hours + "h" + minutes;
            departFlight[0].flightTimeDetailDisplay = hours + "h" + minutes + "m";
            se.departlocationdisplay = departFlight[0].fromPlaceCode + "   ·   " + departFlight[0].flightTimeDetailDisplay + "   ·   " + departFlight[0].toPlaceCode;
            if (departFlight[0].operatedBy && departFlight[0].urlLogo.indexOf('content/img') == -1) {
                departFlight[0].urlLogo = "https://www.ivivu.com/ve-may-bay/content/img/brands/w100/" + departFlight[0].urlLogo;
            }
            let priceFlightAdult = 0;
            departFlight[0].priceSummaries.forEach(e => {
                if (e.passengerType == 0) {
                    priceFlightAdult += e.price;
                }
            });
            if (se.bookcombodetail.departTicketSale > priceFlightAdult) {
                let pricesdepartstr = se.bookcombodetail.departTicketSale - priceFlightAdult;
                se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') - pricesdepartstr;
                se.de_departpriceincrease = false;
            }
            if (se.bookcombodetail.departTicketSale <= priceFlightAdult) {
                let pricesdepartstr = priceFlightAdult - se.bookcombodetail.departTicketSale;
                se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') + pricesdepartstr;
                se.de_departpriceincrease = true;
            }
            se.JsonSurchargeFee.DepartTicketDifferenceFee = priceFlightAdult - se.bookcombodetail.departTicketSale;
            if (departFlight[0].ticketCondition) {
                se.departConditionInfo = departFlight[0].ticketCondition;
                if (se.departConditionInfo && se.departConditionInfo.luggageSigned && se.departConditionInfo.luggageSigned.length <= 4) {
                    se.totaldepluggage = se.departConditionInfo.luggageSigned;
                }
                else {
                    se.totaldepluggage = 0;
                }
            }
        }
        if (returnFlight && returnFlight.length > 0) {
            let itemReturnFlight = returnFlight[0];
            if (departFlight[0] && departFlight[0].id.indexOf('__seri') != -1) {
                let itemr = returnFlight.filter((itemreturn) => { return itemreturn.id.indexOf('__seri') != -1 && itemreturn.availId == departFlight[0].availId; });
                if (itemr && itemr.length > 0) {
                    itemReturnFlight = itemr[0];
                }
            }
            se.listDeparture.push(itemReturnFlight);
            let ar_date = new Date(returnFlight[0].departTime);
            let ar_date_landing = new Date(returnFlight[0].landingTime);
            let ar_hour = moment__WEBPACK_IMPORTED_MODULE_8__(ar_date).format("HH");
            let ar_minute = moment__WEBPACK_IMPORTED_MODULE_8__(ar_date).format("mm");
            let ar_hour_landing = moment__WEBPACK_IMPORTED_MODULE_8__(ar_date_landing).format("HH");
            let ar_minute_landing = moment__WEBPACK_IMPORTED_MODULE_8__(ar_date_landing).format("mm");
            if (returnFlight[0].departTime.toString().indexOf('T')) {
                ar_date = new Date(returnFlight[0].departTime.toString().split('T')[0]);
                ar_date_landing = new Date(returnFlight[0].landingTime.toString().split('T')[0]);
                let ar_time = returnFlight[0].departTime.toString().split('T')[1];
                ar_hour = ar_time.toString().split(':')[0];
                ar_minute = ar_time.toString().split(':')[1];
                let ar_time_landing = returnFlight[0].landingTime.toString().split('T')[1];
                ar_hour_landing = ar_time_landing.toString().split(':')[0];
                ar_minute_landing = ar_time_landing.toString().split(':')[1];
            }
            se.ar_departtime = ar_hour + ':' + ar_minute;
            se.ar_returntime = ar_hour_landing + ':' + ar_minute_landing;
            se.bookCombo.returnTimeStr = ar_hour + ':' + ar_minute + ' → ' + ar_hour_landing + ':' + ar_minute_landing;
            se.ar_departdatestr = se.getDayOfWeek(ar_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_8__(ar_date).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_8__(ar_date).format('MM'),
                se.bookCombo.ar_departdatestr = "Về " + se.getDayOfWeek(ar_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_8__(ar_date).format('DD-MM-YYYY');
            se.dayreturntitle = se.getDayOfWeek(ar_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_8__(ar_date).format('DD-MM-YYYY');
            let hours = Math.floor(returnFlight[0].flightDuration / 60);
            let minutes = returnFlight[0].flightDuration * 1 - (hours * 60);
            if (hours < 10) {
                hours = hours != 0 ? "0" + hours : "0";
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            returnFlight[0].departTimeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(returnFlight[0].departTime).format("HH:mm");
            returnFlight[0].landingTimeDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(returnFlight[0].landingTime).format("HH:mm");
            returnFlight[0].flightTimeDisplay = hours + "h" + minutes;
            returnFlight[0].flightTimeDetailDisplay = hours + "h" + minutes + "m";
            se.returnlocationdisplay = returnFlight[0].fromPlaceCode + "   ·   " + returnFlight[0].flightTimeDetailDisplay + "   ·   " + returnFlight[0].toPlaceCode;
            se.operatedByret = returnFlight[0].operatedBy;
            if (returnFlight[0].operatedBy && returnFlight[0].urlLogo.indexOf('content/img') == -1) {
                returnFlight[0].urlLogo = "https://www.ivivu.com/ve-may-bay/content/img/brands/w100/" + returnFlight[0].urlLogo;
            }
            let priceFlightAdult = 0;
            returnFlight[0].priceSummaries.forEach(e => {
                if (e.passengerType == 0) {
                    priceFlightAdult += e.price;
                }
            });
            if (se.bookcombodetail.returnTicketSale > priceFlightAdult) {
                let pricesreturnstr = se.bookcombodetail.returnTicketSale - priceFlightAdult;
                se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') - pricesreturnstr;
                se.ar_departpriceincrease = false;
            }
            if (se.bookcombodetail.returnTicketSale <= priceFlightAdult) {
                let pricesreturnstr = priceFlightAdult - se.bookcombodetail.returnTicketSale;
                se.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') + pricesreturnstr;
                se.ar_departpriceincrease = true;
            }
            se.JsonSurchargeFee.ReturnTicketDifferenceFee = priceFlightAdult - se.bookcombodetail.returnTicketSale;
            if (returnFlight[0].ticketCondition) {
                se.returnConditionInfo = returnFlight[0].ticketCondition;
                if (se.returnConditionInfo && se.returnConditionInfo.luggageSigned && se.returnConditionInfo.luggageSigned.length <= 4) {
                    se.totalretluggage = se.returnConditionInfo.luggageSigned;
                }
                else {
                    se.totalretluggage = 0;
                }
            }
        }
        if (se.currentDepartFlight) {
            se.flightdeparttitle = 'Từ ' + se.currentDepartFlight[0].fromPlace + ' đi ' + se.currentDepartFlight[0].toPlace;
            se.fromPlace = se.currentDepartFlight[0].fromPlace;
            se.toPlace = se.currentDepartFlight[0].toPlace;
            se.callSummaryPrice(se.roomclass, se.index);
        }
        setTimeout(() => {
            se.ischeckwaitlug = true;
        }, 10 * 1000);
        setTimeout(() => {
            se.loadflightpricedone = true;
        }, 4000);
<<<<<<< HEAD
    }
    checkMapSeriFlight() {
        var se = this, res = true;
        if (se.currentDepartFlight[0] && se.currentReturnFlight[0]) {
            res = (se.currentDepartFlight[0].id.indexOf('__seri') == -1 && se.currentReturnFlight[0].id.indexOf('__seri') == -1)
                || (se.currentDepartFlight[0].id.indexOf('__seri') != -1 && se.currentReturnFlight[0].id.indexOf('__seri') != -1
                    && se.currentDepartFlight[0].availId == se.currentReturnFlight[0].availId);
        }
        return res;
=======
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61
    }
    getDayOfWeek(date) {
        let coutthu = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('dddd');
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
    changeDate() {
    }
    next(value) {
        if (!this.currentDepartFlight || !this.currentReturnFlight) {
            if (!this.currentDepartFlight) {
                this.gf.showToastWarning('Không lấy được thông tin chuyến bay đi, mong quý khách thông cảm! Vui lòng chọn lại lịch bay.');
            }
            else {
                this.gf.showToastWarning('Không lấy được thông tin chuyến bay về, mong quý khách thông cảm! Vui lòng chọn lại lịch bay.');
            }
            this.zone.run(() => {
                this.PriceAvgPlusTAStr = 0;
                this.TotalPrice = 0;
            });
            return;
        }
        if (!this.checkMapSeriFlight()) {
            this.gf.showToastWarning('Một chặng bay đang chọn hạng vé Seri, vui lòng chọn vé Seri cho chặng bay còn lại');
            return;
        }
        if (this.elementMealtype.Supplier == 'SERI' && this.elementMealtype.HotelCheckDetailTokenInternal) {
            this.gf.checkAllotmentSeri(this.booking.HotelId, this.elementMealtype.RoomId, this.booking.CheckInDate, this.booking.CheckOutDate, this.roomnumber, 'SERI', this.elementMealtype.HotelCheckDetailTokenInternal).then((allow) => {
                if (allow) {
                    this.continueBook(value);
                }
                else {
                    this.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
                }
            });
        }
        else {
            this.continueBook(value);
        }
    }
    continueBook(value) {
        var pointprice = 0;
        var total = this.TotalPrice;
        if (this.ischeck) {
            pointprice = this.point;
            if (this.ischeckpoint) {
                pointprice = this.TotalPrice;
            }
            total = this.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
        }
        if (this.ischeckbtnpromo) {
            total = this.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
            this.bookCombo.ischeckbtnpromo = this.ischeckbtnpromo;
            this.bookCombo.discountpromo = this.discountpromo;
        }
        else {
            this.bookCombo.ischeckbtnpromo = this.ischeckbtnpromo;
            this.bookCombo.discountpromo = 0;
            this.promocode = "";
        }
        total = Number(total).toFixed(0);
        var officestr = "";
        if (this.bookCombo.ComboDetail.departureCode) {
            officestr = this.bookCombo.ComboDetail.departureCode == "SGN" ? "HCM" : (this.bookCombo.ComboDetail.departureCode == "HAN" ? "HN" : (this.bookCombo.ComboDetail.departureCode == "VCA" ? "CT" : ""));
        }
        this.storage.get('jti').then(jti => {
            if (jti) {
                if (value == 1) {
                    if (this.ischangefly) {
                        this.JsonSurchargeFee.ComboData = {
                            ComboId: this.bookCombo.ComboId,
                            MealTypeCode: this.bookCombo.MealTypeCode,
                            AdultCombo: this.adultCombo
                        };
                        this.gf.googleAnalytionCustom('add_to_cart', { item_category: 'flightcombo', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: this.cin, end_date: this.cout, origin: this.bookCombo.ComboDetail.departureCode, destination: this.bookCombo.arrivalCode, value: Number(this.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '')), currency: "VND" });
                        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, { 'fb_content_type': 'hotel', 'fb_content_id': this.bookCombo.HotelCode, 'fb_num_items': 1, 'fb_value': this.gf.convertNumberToDouble(this.PriceAvgPlusTAStr), 'fb_currency': 'VND',
                            'checkin_date': this.cin, 'checkout_date ': this.cout, 'num_adults': this.searchhotel.adult, 'num_children': (this.searchhotel.child ? this.searchhotel.child : 0), 'value': this.gf.convertNumberToDouble(this.PriceAvgPlusTAStr), 'currency': 'VND' }, this.gf.convertNumberToFloat(this.PriceAvgPlusTAStr));
                        this.bookCombo.iddepart = this.currentDepartFlight[0].id;
                        this.bookCombo.idreturn = this.currentReturnFlight[0].id;
                        this.bookCombo.MealTypeName = this.breakfast;
                        this.bookCombo.MealTypeIndex = this.index;
                        let objflight = {
                            FlightBooking: {
                                departFlightId: this.currentDepartFlight[0].id,
                                returnFlightId: this.currentReturnFlight[0].id,
                                fromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                                toPlaceCode: this.bookCombo.arrivalCode,
                                flightType: "2",
                                adult: this.adults,
                                child: this.children - this.infant,
                                infant: this.infant,
                                departFlight: {
                                    AirlineCode: this.currentDepartFlight[0].details[0].airlineCode,
                                    FlightNumber: this.currentDepartFlight[0].details[0].flightNumber,
                                    DepartTime: this.currentDepartFlight[0].details[0].departTime,
                                    FareBasis: this.currentDepartFlight[0].fareBasis,
                                    FlightDuration: this.currentDepartFlight[0].details[0].flightDuration,
                                    LandingTime: this.currentDepartFlight[0].details[0].landingTime,
                                    Stops: 0,
                                    TicketType: this.currentDepartFlight[0].ticketType,
                                    PriceSummaries: this.currentDepartFlight[0].priceSummaries,
                                },
                                returnFlight: {
                                    AirlineCode: this.currentReturnFlight[0].details[0].airlineCode,
                                    FlightNumber: this.currentReturnFlight[0].details[0].flightNumber,
                                    DepartTime: this.currentReturnFlight[0].details[0].departTime,
                                    FareBasis: this.currentReturnFlight[0].fareBasis,
                                    FlightDuration: this.currentReturnFlight[0].details[0].flightDuration,
                                    LandingTime: this.currentReturnFlight[0].details[0].landingTime,
                                    Stops: 0,
                                    TicketType: this.currentReturnFlight[0].ticketType,
                                    PriceSummaries: this.currentReturnFlight[0].priceSummaries,
                                }
                            },
                            HotelBooking: {
                                NoteForSupp: this.elementMealtype.NoteForSupplier,
                                HotelId: this.booking.HotelId.toString(),
                                CheckIn: moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckInDate).format('YYYY-MM-DD'),
                                CheckOut: moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckOutDate).format('YYYY-MM-DD'),
                                TotalRoom: this.roomnumber,
                                TotalPrices: total,
                                RoomStatus: this.elementMealtype.Status,
                                BreakfastInclude: this.elementMealtype.Code,
                                BreakfastIncludeName: this.elementMealtype.Name,
                                PaymentMethod: "2",
                                CName: this.username,
                                CEmail: this.email,
                                CAddress: "",
                                CPhone: "",
                                CTitle: "",
                                LeadingName: "",
                                LeadingEmail: "",
                                LeadingPhone: "",
                                LeadingNationality: "",
                                IsInvoice: 0,
                                Note: "",
                                BookingStatus: "0",
                                Adult: this.adults,
                                AdultCombo: this.adultCombo,
                                Child: this.children,
                                TravPaxPrices: this.TravPaxPrices,
                                Office: officestr,
                                FromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                                RoomName: this.elementMealtype.RoomName,
                                RoomPrices: this.elementMealtype.PriceAvgPlusTA,
                                RoomId: this.elementMealtype.RoomId,
                                MealTypeNote: (this.elementMealtype.PromotionInclusions.length > 0 ? this.elementMealtype.PromotionInclusions.join(' \r\n') : "") + (this.elementMealtype.Notes != null && this.elementMealtype.Notes.length > 0 ? this.elementMealtype.Notes.join('\r\n,') : ""),
                                PromotionNote: this.elementMealtype.PromotionNote,
                                PersonIncharge: "",
                                DiscountAmount: "0",
                                SupplierRef: null,
                                ChildAges: this.booking.ChildAge,
                                PenaltyDescription: null,
                                CompName: "",
                                CompAddress: "",
                                CompTaxCode: "",
                                CompanyContactEmail: "",
                                CompanyContactName: "",
                                JsonSurchargeFee: JSON.stringify(this.JsonSurchargeFee),
                                Commission: this.Commission,
                                Source: '6',
                                Supplier: (this.elementMealtype.IsHoliday ? "Holiday" : (this.elementMealtype.IsVoucher ? "Voucher" : this.elementMealtype.Supplier)),
                                MemberId: jti,
                                UsePointPrice: pointprice,
                                promotionCode: this.promocode,
                                AllomentBreak: this.elementMealtype.AllomentBreak,
                                IsPromotionAllotment: this.elementMealtype.IsPromotionAllotment,
                                Insurance: this.hasInsurrance ? this.hasInsurrance : (this.bookCombo.checkInsurranceFee ? true : false),
                                SurchargeFee: this.objInsurranceFee ? JSON.stringify({
                                    type: "Insurance",
                                    PassengerType: 0,
                                    PriceType: 1,
                                    Text: this.objInsurranceFee.name,
                                    Quantity: this.adults + this.children,
                                    Price: this.hasInsurrance ? 0 : this.objInsurranceFee.priceNetTotal,
                                    PriceFormat: this.objInsurranceFee.priceNetTotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
                                    "$$hashKey": "object:473"
                                }) : 0,
                                SupplierName: this.elementMealtype.Supplier,
                                HotelCheckDetailTokenVinHms: this.elementMealtype.HotelCheckDetailTokenVinHms ? this.elementMealtype.HotelCheckDetailTokenVinHms : "",
                                HotelCheckPriceTokenSMD: this.elementMealtype.HotelCheckPriceTokenSMD ? this.elementMealtype.HotelCheckPriceTokenSMD : "",
                                HotelCheckDetailTokenInternal: this.elementMealtype.Supplier == 'SERI' && this.elementMealtype.HotelCheckDetailTokenInternal ? this.elementMealtype.HotelCheckDetailTokenInternal : ""
                            },
                            airLineLuggageDepart: [],
                            airLineLuggageReturn: [],
                            ResId: ""
                        };
                        this.gf.setParams(objflight, 'flightcombo');
                        this.initFlightBooking(objflight).then((checklug) => {
                            var se = this;
                            this.activityService.objFlightComboPaymentBreakDown = { objDetail: se };
                            this.ischangefly = false;
                            var objinfofly = {
                                de_departdatestr: se.de_departdatestr,
                                de_departtime: se.de_departtime,
                                re_departtime: se.re_departtime,
                                departlocationdisplay: se.departlocationdisplay,
                                listDeparture: se.listDeparture,
                                ar_departdatestr: se.ar_departdatestr,
                                ar_departtime: se.ar_departtime,
                                ar_returntime: se.ar_returntime,
                                returnlocationdisplay: se.returnlocationdisplay,
                                operatedBydep: se.operatedBydep,
                                operatedByret: se.operatedByret
                            };
                            this.gf.setParams(objinfofly, 'objinfofly');
                            this.navCtrl.navigateForward('/flightcomboadddetails');
                        });
                    }
                    else {
                        var objinfofly = {
                            de_departdatestr: this.de_departdatestr,
                            de_departtime: this.de_departtime,
                            re_departtime: this.re_departtime,
                            departlocationdisplay: this.departlocationdisplay,
                            listDeparture: this.listDeparture,
                            ar_departdatestr: this.ar_departdatestr,
                            ar_departtime: this.ar_departtime,
                            ar_returntime: this.ar_returntime,
                            returnlocationdisplay: this.returnlocationdisplay,
                            operatedBydep: this.operatedBydep,
                            operatedByret: this.operatedByret
                        };
                        this.gf.setParams(objinfofly, 'objinfofly');
                        objectFlight = this.gf.getParams('flightcombo');
                        var objhotel = {
                            NoteForSupp: this.elementMealtype.NoteForSupplier,
                            HotelId: this.booking.HotelId.toString(),
                            CheckIn: moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckInDate).format('YYYY-MM-DD'),
                            CheckOut: moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckOutDate).format('YYYY-MM-DD'),
                            TotalRoom: this.roomnumber,
                            TotalPrices: total,
                            RoomStatus: this.elementMealtype.Status,
                            BreakfastInclude: this.elementMealtype.Code,
                            BreakfastIncludeName: this.elementMealtype.Name,
                            PaymentMethod: "2",
                            CName: this.username,
                            CEmail: this.email,
                            CAddress: "",
                            CPhone: "",
                            CTitle: "",
                            LeadingName: "",
                            LeadingEmail: "",
                            LeadingPhone: "",
                            LeadingNationality: "",
                            IsInvoice: 0,
                            Note: "",
                            BookingStatus: "0",
                            Adult: this.adults,
                            AdultCombo: this.adultCombo,
                            Child: this.children,
                            TravPaxPrices: this.TravPaxPrices,
                            Office: officestr,
                            FromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                            RoomName: this.elementMealtype.RoomName,
                            RoomPrices: this.elementMealtype.PriceAvgPlusTA,
                            RoomId: this.elementMealtype.RoomId,
                            MealTypeNote: (this.elementMealtype.PromotionInclusions.length > 0 ? this.elementMealtype.PromotionInclusions.join(' \r\n') : "") + (this.elementMealtype.Notes != null && this.elementMealtype.Notes.length > 0 ? this.elementMealtype.Notes.join('\r\n,') : ""),
                            PromotionNote: this.elementMealtype.PromotionNote,
                            PersonIncharge: "",
                            DiscountAmount: "0",
                            SupplierRef: null,
                            ChildAges: this.booking.ChildAge,
                            PenaltyDescription: null,
                            CompName: "",
                            CompAddress: "",
                            CompTaxCode: "",
                            JsonSurchargeFee: JSON.stringify(this.JsonSurchargeFee),
                            Commission: this.Commission,
                            Source: '6',
                            Supplier: (this.elementMealtype.IsHoliday ? "Holiday" : (this.elementMealtype.IsVoucher ? "Voucher" : this.elementMealtype.Supplier)),
                            MemberId: jti,
                            UsePointPrice: pointprice,
                            promotionCode: this.promocode,
                            AllomentBreak: this.elementMealtype.AllomentBreak,
                            IsPromotionAllotment: this.elementMealtype.IsPromotionAllotment,
                            Insurance: this.hasInsurrance ? this.hasInsurrance : (this.bookCombo.checkInsurranceFee ? true : false),
                            SurchargeFee: this.objInsurranceFee ? JSON.stringify({
                                type: "Insurance",
                                PassengerType: 0,
                                PriceType: 1,
                                Text: this.objInsurranceFee.name,
                                Quantity: this.adults + this.children,
                                Price: this.hasInsurrance ? 0 : this.objInsurranceFee.priceNetTotal,
                                PriceFormat: this.objInsurranceFee.priceNetTotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
                                "$$hashKey": "object:473"
                            }) : 0,
                            SupplierName: this.elementMealtype.Supplier,
                            HotelCheckDetailTokenVinHms: this.elementMealtype.HotelCheckDetailTokenVinHms ? this.elementMealtype.HotelCheckDetailTokenVinHms : "",
                            HotelCheckPriceTokenSMD: this.elementMealtype.HotelCheckPriceTokenSMD ? this.elementMealtype.HotelCheckPriceTokenSMD : "",
                            HotelCheckDetailTokenInternal: this.elementMealtype.Supplier == 'SERI' && this.elementMealtype.HotelCheckDetailTokenInternal ? this.elementMealtype.HotelCheckDetailTokenInternal : ""
                        };
                        objectFlight.HotelBooking = objhotel;
                        this.gf.setParams(objectFlight, 'flightcombo');
                        this.navCtrl.navigateForward('/flightcomboadddetails');
                    }
                }
                else {
                    this.valueGlobal.backValue = 'flightcomboinfoluggage';
                    if (this.ischangefly) {
                        this.JsonSurchargeFee.ComboData = {
                            ComboId: this.bookCombo.ComboId,
                            MealTypeCode: this.bookCombo.MealTypeCode,
                            AdultCombo: this.adultCombo
                        };
                        var objectFlight = {
                            FlightBooking: {
                                fromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                                toPlaceCode: this.bookCombo.arrivalCode,
                                flightType: "2",
                                adult: this.adults,
                                child: this.children - this.infant,
                                infant: this.infant,
                                departFlight: {
                                    AirlineCode: this.currentDepartFlight[0].details[0].airlineCode,
                                    FlightNumber: this.currentDepartFlight[0].details[0].flightNumber,
                                    DepartTime: this.currentDepartFlight[0].details[0].departTime,
                                    FareBasis: this.currentDepartFlight[0].fareBasis,
                                    FlightDuration: this.currentDepartFlight[0].details[0].flightDuration,
                                    LandingTime: this.currentDepartFlight[0].details[0].landingTime,
                                    Stops: 0,
                                    TicketType: this.currentDepartFlight[0].ticketType,
                                    PriceSummaries: this.currentDepartFlight[0].priceSummaries
                                },
                                returnFlight: {
                                    AirlineCode: this.currentReturnFlight[0].details[0].airlineCode,
                                    FlightNumber: this.currentReturnFlight[0].details[0].flightNumber,
                                    DepartTime: this.currentReturnFlight[0].details[0].departTime,
                                    FareBasis: this.currentReturnFlight[0].fareBasis,
                                    FlightDuration: this.currentReturnFlight[0].details[0].flightDuration,
                                    LandingTime: this.currentReturnFlight[0].details[0].landingTime,
                                    Stops: 0,
                                    TicketType: this.currentReturnFlight[0].ticketType,
                                    PriceSummaries: this.currentReturnFlight[0].priceSummaries
                                }
                            },
                            HotelBooking: {
                                NoteForSupp: this.elementMealtype.NoteForSupplier,
                                HotelId: this.booking.HotelId.toString(),
                                CheckIn: moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckInDate).format('YYYY-MM-DD'),
                                CheckOut: moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckOutDate).format('YYYY-MM-DD'),
                                TotalRoom: this.roomnumber,
                                TotalPrices: total,
                                RoomStatus: this.elementMealtype.Status,
                                BreakfastInclude: this.elementMealtype.Code,
                                BreakfastIncludeName: this.elementMealtype.Name,
                                PaymentMethod: "2",
                                CName: this.username,
                                CEmail: this.email,
                                CAddress: "",
                                CPhone: "",
                                CTitle: "",
                                LeadingName: "",
                                LeadingEmail: "",
                                LeadingPhone: "",
                                LeadingNationality: "",
                                IsInvoice: 0,
                                Note: "",
                                BookingStatus: "0",
                                Adult: this.adults,
                                AdultCombo: this.adultCombo,
                                Child: this.children,
                                TravPaxPrices: this.TravPaxPrices,
                                Office: officestr,
                                FromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                                RoomName: this.elementMealtype.RoomName,
                                RoomPrices: this.elementMealtype.PriceAvgPlusTA,
                                RoomId: this.elementMealtype.RoomId,
                                MealTypeNote: (this.elementMealtype.PromotionInclusions.length > 0 ? this.elementMealtype.PromotionInclusions.join(' \r\n') : "") + (this.elementMealtype.Notes != null && this.elementMealtype.Notes.length > 0 ? this.elementMealtype.Notes.join('\r\n,') : ""),
                                PromotionNote: this.elementMealtype.PromotionNote,
                                PersonIncharge: "",
                                DiscountAmount: "0",
                                SupplierRef: null,
                                ChildAges: this.booking.ChildAge,
                                PenaltyDescription: null,
                                CompName: "",
                                CompAddress: "",
                                CompTaxCode: "",
                                JsonSurchargeFee: JSON.stringify(this.JsonSurchargeFee),
                                Commission: this.Commission,
                                Source: '6',
                                Supplier: (this.elementMealtype.IsHoliday ? "Holiday" : (this.elementMealtype.IsVoucher ? "Voucher" : this.elementMealtype.Supplier)),
                                MemberId: jti,
                                UsePointPrice: pointprice,
                                promotionCode: this.promocode,
                                AllomentBreak: this.elementMealtype.AllomentBreak,
                                IsPromotionAllotment: this.elementMealtype.IsPromotionAllotment,
                                Insurance: this.hasInsurrance ? this.hasInsurrance : (this.bookCombo.checkInsurranceFee ? true : false),
                                SurchargeFee: this.objInsurranceFee ? JSON.stringify({
                                    type: "Insurance",
                                    PassengerType: 0,
                                    PriceType: 1,
                                    Text: this.objInsurranceFee.name,
                                    Quantity: this.adults + this.children,
                                    Price: this.hasInsurrance ? 0 : this.objInsurranceFee.priceNetTotal,
                                    PriceFormat: this.objInsurranceFee.priceNetTotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),
                                    "$$hashKey": "object:473"
                                }) : 0,
                                SupplierName: this.elementMealtype.Supplier,
                                HotelCheckDetailTokenVinHms: this.elementMealtype.HotelCheckDetailTokenVinHms ? this.elementMealtype.HotelCheckDetailTokenVinHms : "",
                                HotelCheckPriceTokenSMD: this.elementMealtype.HotelCheckPriceTokenSMD ? this.elementMealtype.HotelCheckPriceTokenSMD : "",
                                HotelCheckDetailTokenInternal: this.elementMealtype.Supplier == 'SERI' && this.elementMealtype.HotelCheckDetailTokenInternal ? this.elementMealtype.HotelCheckDetailTokenInternal : ""
                            },
                            airLineLuggageDepart: [],
                            airLineLuggageReturn: [],
                            ResId: ""
                        };
                        this.gf.setParams(objectFlight, 'flightcombo');
                        this.gf.googleAnalytionCustom('add_to_cart', { item_category: 'flightcombo', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: this.cin, end_date: this.cout, origin: this.bookCombo.ComboDetail.departureCode, destination: this.bookCombo.arrivalCode, value: Number(this.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '')), currency: "VND" });
                        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, { 'fb_content_type': 'hotel', 'fb_content_id': this.bookCombo.HotelCode, 'fb_num_items': 1, 'fb_value': this.gf.convertNumberToDouble(this.PriceAvgPlusTAStr), 'fb_currency': 'VND',
                            'checkin_date': this.cin, 'checkout_date ': this.cout, 'num_adults': this.searchhotel.adult, 'num_children': (this.searchhotel.child ? this.searchhotel.child : 0), 'value': this.gf.convertNumberToDouble(this.PriceAvgPlusTAStr), 'currency': 'VND' }, this.gf.convertNumberToFloat(this.PriceAvgPlusTAStr));
                        this.bookCombo.iddepart = this.currentDepartFlight[0].id;
                        this.bookCombo.idreturn = this.currentReturnFlight[0].id;
                        this.bookCombo.MealTypeName = this.breakfast;
                        this.bookCombo.MealTypeIndex = this.index;
                        let objflight = {
                            FlightBooking: {
                                departFlightId: this.currentDepartFlight[0].id,
                                returnFlightId: this.currentReturnFlight[0].id,
                                fromPlaceCode: this.bookCombo.ComboDetail.departureCode,
                                toPlaceCode: this.bookCombo.arrivalCode,
                                flightType: "2",
                                adult: this.adults,
                                child: this.children - this.infant,
                                infant: this.infant,
                                departFlight: {
                                    AirlineCode: this.currentDepartFlight[0].details[0].airlineCode,
                                    FlightNumber: this.currentDepartFlight[0].details[0].flightNumber,
                                    DepartTime: this.currentDepartFlight[0].details[0].departTime,
                                    FareBasis: this.currentDepartFlight[0].fareBasis,
                                    FlightDuration: this.currentDepartFlight[0].details[0].flightDuration,
                                    LandingTime: this.currentDepartFlight[0].details[0].landingTime,
                                    Stops: 0,
                                    TicketType: this.currentDepartFlight[0].ticketType,
                                    PriceSummaries: this.currentDepartFlight[0].priceSummaries,
                                },
                                returnFlight: {
                                    AirlineCode: this.currentReturnFlight[0].details[0].airlineCode,
                                    FlightNumber: this.currentReturnFlight[0].details[0].flightNumber,
                                    DepartTime: this.currentReturnFlight[0].details[0].departTime,
                                    FareBasis: this.currentReturnFlight[0].fareBasis,
                                    FlightDuration: this.currentReturnFlight[0].details[0].flightDuration,
                                    LandingTime: this.currentReturnFlight[0].details[0].landingTime,
                                    Stops: 0,
                                    TicketType: this.currentReturnFlight[0].ticketType,
                                    PriceSummaries: this.currentReturnFlight[0].priceSummaries,
                                }
                            }
                        };
                        this.initFlightBooking(objflight).then((checklug) => {
                            this.ischangefly = false;
                            this.bookCombo.departConditionInfo = this.departConditionInfo;
                            this.bookCombo.returnConditionInfo = this.returnConditionInfo;
                            this.navCtrl.navigateForward('/flightcomboinfoluggage');
                        });
                    }
                    else {
                        this.navCtrl.navigateForward('/flightcomboinfoluggage');
                    }
                }
            }
        });
    }
    initFlightBooking(objFlight) {
        var se = this;
        se.presentLoading();
        return new Promise((resolve, reject) => {
            objFlight.InitFlight = true;
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboBooking',
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"
                },
                "data": jquery__WEBPACK_IMPORTED_MODULE_12__["param"](objFlight)
            };
            jquery__WEBPACK_IMPORTED_MODULE_12__["ajax"](settings).done(function (response) {
                if (se.loader) {
                    se.loader.dismiss();
                }
                if (response.Error) {
                    var error = {
                        page: "flightcomboadddetails",
                        func: "CreateComboBooking",
                        message: response.Error,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(settings)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    resolve(false);
                }
                else {
                    var res = response;
                    if (res.flyBookingId) {
                        let objflight = se.gf.getParams('flightcombo');
                        objflight.ResId = res.flyBookingId;
                        objflight.airLineLuggageDepart = (res.ancillary && res.ancillary.Baggage) ? res.ancillary.Baggage : [];
                        objflight.airLineLuggageReturn = (res.ancillaryReturn && res.ancillaryReturn.Baggage) ? res.ancillaryReturn.Baggage : [];
                        se.gf.setParams(objflight, 'flightcombo');
                    }
                    resolve(true);
                }
            });
        });
    }
    changedate() {
        this.navCtrl.navigateForward('/hoteldetail/' + this.booking.HotelId);
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    showListFlight(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.gf.setParams({ listdepart: se.listDepart, listreturn: se.listReturn, title: index == 0 ? se.daydeparttitle : se.dayreturntitle, isdepart: index == 0 ? true : false, flightdeparttitle: se.flightdeparttitle }, 'listflight');
            const modal = yield this.modalCtrl.create({
                component: _flightdeparture_flightdeparture__WEBPACK_IMPORTED_MODULE_9__["FlightDeparturePage"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    se.zone.run(() => {
                        se.ischangefly = true;
                        se.bookCombo.Luggage = 0;
                        let objDepart = se.listDepart;
                        let objReturn = se.listReturn;
                        if (!se.currentDepartFlight) {
                            se.currentDepartFlight = objDepart;
                        }
                        if (!se.currentReturnFlight) {
                            se.currentReturnFlight = objReturn;
                        }
                        if (data.data.isdepart) {
                            se.currentDepartFlight = data.data.flights.flights;
                            se.loadFlightData(se.currentDepartFlight, se.currentReturnFlight);
                        }
                        else {
                            se.currentReturnFlight = data.data.flights.flights;
                            se.loadFlightData(se.currentDepartFlight, se.currentReturnFlight);
                        }
                    });
                }
            });
        });
    }
    MathPriceAll() {
        var se = this;
        var surchargePlus = se.JsonSurchargeFee.SurchargeFee.reduce(function (acc, val) { return acc + val.Price; }, 0);
        let adultFlightNumber = se.adults;
        se.JsonSurchargeFee.TransportPriceSale = se.transportPriceSale + se.transportPriceSaleForChild;
        se.totalTransportPriceSale = se.JsonSurchargeFee.TransportPriceSale;
        se.totalSurchargeWeekendFee = 0;
        se.JsonSurchargeFee.TotalAll = se.TotalPriceCombo +
            se.JsonSurchargeFee.RoomDifferenceFee
            + se.JsonSurchargeFee.DepartTicketDifferenceFee
            + se.JsonSurchargeFee.ReturnTicketDifferenceFee
            + se.totalSurchargeWeekendFee
            + se.totalTransportPriceSale
            + surchargePlus
            + se.totalAirLineLuggage;
        let GetSubPriceForAdultExtrabed = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.PassengerType == 0 && (e.Code == 'EXBA' || e.type == 'flightDepart' || e.type == 'flightReturn'); });
        se.totalPriceForEXBA = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code == 'EXBA'; }).reduce(function (acc, val) { return acc + val.Price / val.Quantity; }, 0);
        let GetSubPriceForChild = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return (e.PassengerType == 1 || e.PassengerType == 2) && (e.Code == 'CWE' || e.Code == 'EXBC' || e.type == 'flightDepart' || e.type == 'flightReturn'); });
        se.totalPriceForChildCWE = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code == 'CWE'; }).reduce(function (acc, val) { return acc + val.Price / val.Quantity; }, 0);
        se.totalPriceForChildEXBC = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code == 'EXBC'; }).reduce(function (acc, val) { return acc + val.Price / val.Quantity; }, 0);
        se.totalPriceInfant = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.PassengerType == 2; }).reduce(function (acc, val) { return acc + val.Price; }, 0);
        let GetSubPriceForOtherFee = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code != 'EXBA' && e.Code != 'CWE' && e.Code != 'EXBC' && e.type != 'flightDepart' && e.type != 'flightReturn'; });
        se.totalPriceForOtherFee = GetSubPriceForOtherFee.reduce(function (acc, val) { return acc + val.Price; }, 0);
        se.JsonSurchargeFee.TotalAll = se.JsonSurchargeFee.TotalAll - se.totalPriceForOtherFee;
        se.JsonSurchargeFee.AdultUnit = se.ComboPriceDiff.RoomDiff.AdultUnit;
        se.totalGetSubPriceForAdultExtrabed = GetSubPriceForAdultExtrabed.reduce(function (acc, val) { return acc + val.Price; }, 0);
        se.totalGetSubPriceForChild = GetSubPriceForChild.reduce(function (acc, val) { return acc + val.Price; }, 0);
        se.totalQuantityChildCWEAndEXBC = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.Code == 'CWE' || e.Code == 'EXBC'; }).reduce(function (acc, val) { return acc + val.Quantity; }, 0);
        se.totalQuantityFlightForChildAndInfant = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return (e.PassengerType == 1 || e.PassengerType == 2) && (e.type == 'flightDepart' || e.type == 'flightReturn'); }).reduce(function (acc, val) { return acc + val.Quantity; }, 0) / 2;
        se.totalQuantityFlightForChild = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return (e.PassengerType == 1) && (e.type == 'flightDepart' || e.type == 'flightReturn'); }).reduce(function (acc, val) { return acc + val.Quantity; }, 0) / 2 - adultFlightNumber;
        se.totalPriceChild = 0;
        if (se.totalPriceForChildCWE > 0 && se.totalPriceForChildEXBC > 0) {
            se.totalPriceChild == 0;
        }
        else if (se.totalQuantityChildCWEAndEXBC < (se.totalQuantityFlightForChildAndInfant) && se.currentDepartFlight != undefined && se.currentReturnFlight != undefined) {
            se.totalPriceChild = (se.totalQuantityFlightForChild - se.totalQuantityChildCWEAndEXBC) * (se.ComboPriceDiff.DepartFlightDiff.ChildUnit + se.ComboPriceDiff.ReturnFlightDiff.ChildUnit) + (se.ChildOtherFeeTotal - se.ChildOtherFee * se.totalQuantityChildCWEAndEXBC);
        }
        if (adultFlightNumber > 0) {
            se.totalPriceChild += (se.ComboPriceDiff.DepartFlightDiff.AdultUnitExb + se.ComboPriceDiff.ReturnFlightDiff.AdultUnitExb) * adultFlightNumber;
        }
        if (se.totalChild > 0) {
            se.ComboPriceDiff.RoomDiff.ChildUnit = se.totalGetSubPriceForChild / se.totalChild;
        }
        se.totalFlightDepart = se.currentDepartFlight == undefined ? 0 : se.currentDepartFlight[0].priceSummaries.reduce(function (acc, val) { return acc + val.total; }, 0);
        se.totalFlightReturn = se.currentReturnFlight == undefined ? 0 : se.currentReturnFlight[0].priceSummaries.reduce(function (acc, val) { return acc + val.total; }, 0);
        se.commissionFlight = se.ComboPriceDiff.DepartFlightDiff.CommissionAdult * se.AdultCombo + se.ComboPriceDiff.ReturnFlightDiff.CommissionAdult * se.AdultCombo;
        se.commissionDepart = se.ComboPriceDiff.DepartFlightDiff.CommissionAdult * se.AdultCombo;
        if (se.commissionFlight < 0) {
            se.commissionFlight = 0;
        }
        se.Commission = (se.elementMealtype == undefined ? 0 : se.JsonSurchargeFee.TotalAll - (se.totalFlightDepart + se.totalFlightReturn + (se.transportPriceNet * se.totalAdult + se.transportPriceNetForChild * (se.totalInfant + se.totalChild) + se.elementMealtype.PriceAvgPlusNet * se.elementMealtype.TotalRoom * se.TotalNight) + se.JsonSurchargeFee.BaggageDepart + se.JsonSurchargeFee.BaggageReturn));
        if (!se.bookCombo.Luggage) {
            se.bookCombo.Luggage = 0;
        }
        let pricetotal = Math.ceil(se.JsonSurchargeFee.TotalAll) + se.bookCombo.Luggage;
        if (!se.hasInsurrance && se.bookCombo.checkInsurranceFee) {
            pricetotal += se.objInsurranceFee.priceTaTotal;
        }
        se.PriceAvgPlusTAStr = pricetotal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        se.TotalPrice = pricetotal;
        var tempprice = se.TotalPrice;
        if (se.point > 0) {
            se.Pricepoint = tempprice - se.point;
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
        se.bookCombo.totalprice = se.Pricepointshow ? se.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") : se.PriceAvgPlusTAStr;
        se.bookCombo.pricePointShow = se.Pricepointshow;
        se.bookCombo.PriceAvgPlusTAStr = se.PriceAvgPlusTAStr;
        se.bookCombo.point = se.point;
        if ((!se.departfi || !se.returnfi) && se.loaddatafromcache) {
            se.zone.run(() => {
                se.PriceAvgPlusTAStr = 0;
                se.loadpricedone = true;
                se.loadflightpricedone = true;
            });
        }
    }
    edit() {
        this.zone.run(() => {
            if (!this.bookCombo.Luggage) {
                this.bookCombo.Luggage = 0;
            }
            var pricetotal = this.JsonSurchargeFee.TotalAll + this.bookCombo.Luggage;
            if (!this.hasInsurrance && this.bookCombo.checkInsurranceFee) {
                pricetotal += this.objInsurranceFee.priceTaTotal;
                this.PriceAvgPlusTAStr = pricetotal;
            }
            this.TotalPrice = pricetotal;
            if (this.ischeck) {
                if (this.ischeckpoint) {
                    this.Pricepointshow = 0;
                }
                else {
                    if (this.ischeckpromo) {
                        this.price = this.point.toLocaleString();
                        var tempprice = this.TotalPrice;
                        this.Pricepoint = tempprice - this.point - this.discountpromo;
                        this.Pricepointshow = this.Pricepoint.toLocaleString();
                        this.bookCombo.totalprice = this.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    }
                    else {
                        this.price = this.point.toLocaleString();
                        var tempprice = this.TotalPrice;
                        this.Pricepoint = tempprice - this.point;
                        this.Pricepointshow = this.Pricepoint.toLocaleString();
                        this.PriceAvgPlusTAStr = this.TotalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                        this.bookCombo.totalprice = this.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    }
                }
            }
            else {
                if (this.ischeckpromo) {
                    this.PriceAvgPlusTAStr = this.TotalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    var tempprice = this.TotalPrice;
                    this.Pricepointshow = tempprice - this.discountpromo;
                    this.Pricepointshow = this.Pricepointshow.toLocaleString();
                }
                else {
                    this.PriceAvgPlusTAStr = this.TotalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    this.bookCombo.totalprice = this.TotalPrice;
                }
            }
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
        se.AdultOtherFee = se.AdultOtherFee * (se.roomclass.Rooms[0].IncludeAdults * se.roomnumber) / se.AdultCombo;
        se.PriceDiffUnit = se.AdultOtherFee + ((se.elementMealtype.PriceAvgDefaultTA * se.roomnumber) * se.TotalNight / se.AdultCombo) - se.roomPriceSale;
        se.ComboPriceDiff.RoomDiff.Total = se.elementMealtype.PriceAvgPlusTotalTA - (se.roomPriceSale * se.AdultCombo);
        se.ComboPriceDiff.RoomDiff.AdultUnit = se.PriceDiffUnit;
        se.JsonSurchargeFee.RoomDifferenceFee = se.PriceDiffUnit * se.AdultCombo + (se.totalAdult - se.AdultCombo) * se.AdultOtherFee + se.ChildOtherFeeTotal;
    }
    SaveFlightDepartSelected() {
        var se = this;
        if (!se.currentDepartFlight)
            return;
        se.JsonSurchargeFee.SurchargeFee = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.type != 'flightDepart'; });
        var priceFlightAdult = 0;
        se.currentDepartFlight[0].priceSummaries.forEach(e => {
            if (e.passengerType == 0) {
                priceFlightAdult += e.price;
            }
        });
        se.ComboPriceDiff.DepartFlightDiff.AdultUnit = priceFlightAdult - se.departTicketSale;
        var tempDiff = se.ComboPriceDiff.DepartFlightDiff.AdultUnit;
        se.ComboPriceDiff.DepartFlightDiff.CommissionAdult = Math.ceil((se.ComboPriceDiff.DepartFlightDiff.AdultUnit < 0 ? Math.abs(se.ComboPriceDiff.DepartFlightDiff.AdultUnit * 0.3) : -tempDiff) / 1000) * 1000;
        se.de_flightpricetitle = Math.ceil((se.ComboPriceDiff.DepartFlightDiff.AdultUnit < 0 ? Math.abs(se.ComboPriceDiff.DepartFlightDiff.AdultUnit * 0.7) : tempDiff) / 1000) * 1000;
        se.de_flightpricetitle = se.de_flightpricetitle.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ';
        se.de_departpriceincrease = tempDiff > 0 ? true : false;
        se.ComboPriceDiff.DepartFlightDiff.AdultUnit = se.ComboPriceDiff.DepartFlightDiff.AdultUnit + (se.ComboPriceDiff.DepartFlightDiff.CommissionAdult > 0 ? se.ComboPriceDiff.DepartFlightDiff.CommissionAdult : 0);
        se.ComboPriceDiff.DepartFlightDiff.AdultUnitExb = 0;
        se.currentDepartFlight[0].priceSummaries.forEach(e => {
            if (e.passengerType == 0) {
                se.ComboPriceDiff.DepartFlightDiff.AdultUnitExb += e.price;
            }
        });
        se.ComboPriceDiff.DepartFlightDiff.ChildUnit = 0;
        if (se.totalChild > 0) {
            se.ComboPriceDiff.DepartFlightDiff.ChildUnit = 0;
            se.currentDepartFlight[0].priceSummaries.forEach(e => {
                if (e.passengerType == 1) {
                    se.ComboPriceDiff.DepartFlightDiff.ChildUnit += e.price;
                }
            });
        }
        se.ComboPriceDiff.DepartFlightDiff.InfantUnit = 0;
        if (se.totalInfant > 0) {
            se.currentDepartFlight[0].priceSummaries.forEach(e => {
                if (e.passengerType == 2) {
                    se.ComboPriceDiff.DepartFlightDiff.InfantUnit += e.price;
                }
            });
        }
        se.JsonSurchargeFee.DepartTicketDifferenceFee = se.ComboPriceDiff.DepartFlightDiff.AdultUnit * se.AdultCombo;
        if (se.totalChild > 0) {
            var priceItem = { type: 'flightDepart', PassengerType: 1, Quantity: (se.totalChild), PriceType: 1, Text: 'Vé máy bay chiều đi', Price: (se.ComboPriceDiff.DepartFlightDiff.ChildUnit * (se.totalChild)), PriceFormat: (se.ComboPriceDiff.DepartFlightDiff.ChildUnit * (se.totalChild)).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
            se.JsonSurchargeFee.SurchargeFee.push(priceItem);
        }
        if (se.totalInfant > 0) {
            var priceItem = { type: 'flightDepart', PassengerType: 2, Quantity: (se.totalInfant), PriceType: 1, Text: 'Vé máy bay chiều đi', Price: (se.ComboPriceDiff.DepartFlightDiff.InfantUnit * se.totalInfant), PriceFormat: (se.ComboPriceDiff.DepartFlightDiff.InfantUnit * se.totalInfant).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
            se.JsonSurchargeFee.SurchargeFee.push(priceItem);
        }
        if (se.totalAdultExtrabed > 0 && se.adultFlightNumber == 0) {
            var priceItem = { type: 'flightDepart', PassengerType: 0, Quantity: se.totalAdultExtrabed, PriceType: 1, Text: 'Vé máy bay chiều đi', Price: priceFlightAdult * se.totalAdultExtrabed, PriceFormat: (priceFlightAdult * se.totalAdultExtrabed).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
            se.JsonSurchargeFee.SurchargeFee.push(priceItem);
        }
        else if (se.adultFlightNumber > 0) {
            if (se.totalAdultExtrabed > 0) {
                var priceItem = { type: 'flightDepart', PassengerType: 0, Quantity: se.totalAdultExtrabed, PriceType: 1, Text: 'Vé máy bay chiều đi', Price: priceFlightAdult * se.totalAdultExtrabed, PriceFormat: (priceFlightAdult * se.totalAdultExtrabed).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
                se.JsonSurchargeFee.SurchargeFee.push(priceItem);
            }
            var priceItem1 = { type: 'flightDepart', PassengerType: 1, childAsAdult: true, Quantity: se.adultFlightNumber, PriceType: 1, Text: 'Vé máy bay chiều đi', Price: (priceFlightAdult * se.adultFlightNumber), PriceFormat: (priceFlightAdult * se.adultFlightNumber).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
            se.JsonSurchargeFee.SurchargeFee.push(priceItem1);
        }
        se.MathPriceAll();
    }
    SaveFlightReturnSelected() {
        var se = this;
        if (!se.currentReturnFlight)
            return;
        se.JsonSurchargeFee.SurchargeFee = se.JsonSurchargeFee.SurchargeFee.filter(function (e) { return e.type != 'flightReturn'; });
        var priceFlightAdult = 0;
        se.currentReturnFlight[0].priceSummaries.forEach(e => {
            if (e.passengerType == 0) {
                priceFlightAdult += e.price;
            }
        });
        se.ComboPriceDiff.ReturnFlightDiff.AdultUnit = priceFlightAdult - se.returnTicketSale;
        var tempDiff = se.ComboPriceDiff.ReturnFlightDiff.AdultUnit;
        se.ComboPriceDiff.ReturnFlightDiff.CommissionAdult = Math.ceil((se.ComboPriceDiff.ReturnFlightDiff.AdultUnit < 0 ? Math.abs(se.ComboPriceDiff.ReturnFlightDiff.AdultUnit * 0.3) : -tempDiff) / 1000) * 1000;
        se.ar_flightpricetitle = Math.ceil((se.ComboPriceDiff.ReturnFlightDiff.AdultUnit < 0 ? Math.abs(se.ComboPriceDiff.ReturnFlightDiff.AdultUnit * 0.7) : tempDiff) / 1000) * 1000;
        se.ar_flightpricetitle = se.ar_flightpricetitle.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + 'đ';
        se.ar_returnpriceincrease = tempDiff > 0 ? true : false;
        se.ComboPriceDiff.ReturnFlightDiff.AdultUnit = se.ComboPriceDiff.ReturnFlightDiff.AdultUnit + (se.ComboPriceDiff.ReturnFlightDiff.CommissionAdult > 0 ? se.ComboPriceDiff.ReturnFlightDiff.CommissionAdult : 0);
        se.ComboPriceDiff.ReturnFlightDiff.AdultUnitExb = 0;
        se.currentReturnFlight[0].priceSummaries.forEach(e => {
            if (e.passengerType == 0) {
                se.ComboPriceDiff.ReturnFlightDiff.AdultUnitExb += e.price;
            }
        });
        se.ComboPriceDiff.ReturnFlightDiff.ChildUnit = 0;
        if (se.totalChild > 0) {
            se.ComboPriceDiff.ReturnFlightDiff.ChildUnit = 0;
            se.currentReturnFlight[0].priceSummaries.forEach(e => {
                if (e.passengerType == 1) {
                    se.ComboPriceDiff.ReturnFlightDiff.ChildUnit += e.price;
                }
            });
        }
        se.ComboPriceDiff.ReturnFlightDiff.InfantUnit = 0;
        if (se.totalInfant > 0) {
            se.currentReturnFlight[0].priceSummaries.forEach(e => {
                if (e.passengerType == 2) {
                    se.ComboPriceDiff.ReturnFlightDiff.InfantUnit += e.price;
                }
            });
        }
        se.JsonSurchargeFee.ReturnTicketDifferenceFee = se.ComboPriceDiff.ReturnFlightDiff.AdultUnit * se.AdultCombo;
        if (se.totalChild > 0) {
            var priceItem = { type: 'flightReturn', PassengerType: 1, Quantity: (se.totalChild), PriceType: 1, Text: 'Vé máy bay chiều về', Price: (se.ComboPriceDiff.ReturnFlightDiff.ChildUnit * (se.totalChild)), PriceFormat: (se.ComboPriceDiff.ReturnFlightDiff.ChildUnit * (se.totalChild)).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
            se.JsonSurchargeFee.SurchargeFee.push(priceItem);
        }
        if (se.totalInfant > 0) {
            var priceItem = { type: 'flightReturn', PassengerType: 2, Quantity: (se.totalInfant), PriceType: 1, Text: 'Vé máy bay chiều về', Price: (se.ComboPriceDiff.ReturnFlightDiff.InfantUnit * se.totalInfant), PriceFormat: (se.ComboPriceDiff.ReturnFlightDiff.InfantUnit * se.totalInfant).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
            se.JsonSurchargeFee.SurchargeFee.push(priceItem);
        }
        if (se.totalAdultExtrabed > 0 && se.adultFlightNumber == 0) {
            var priceItem = { type: 'flightReturn', PassengerType: 0, Quantity: se.totalAdultExtrabed, PriceType: 1, Text: 'Vé máy bay chiều về', Price: priceFlightAdult * se.totalAdultExtrabed, PriceFormat: (priceFlightAdult * se.totalAdultExtrabed).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
            se.JsonSurchargeFee.SurchargeFee.push(priceItem);
        }
        else if (se.adultFlightNumber > 0) {
            if (se.totalAdultExtrabed > 0) {
                var priceItem = { type: 'flightReturn', PassengerType: 0, Quantity: se.totalAdultExtrabed, PriceType: 1, Text: 'Vé máy bay chiều về', Price: priceFlightAdult * se.totalAdultExtrabed, PriceFormat: (priceFlightAdult * se.totalAdultExtrabed).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
                se.JsonSurchargeFee.SurchargeFee.push(priceItem);
            }
            var priceItem1 = { type: 'flightReturn', PassengerType: 1, childAsAdult: true, Quantity: se.adultFlightNumber, PriceType: 1, Text: 'Vé máy bay chiều về', Price: (priceFlightAdult * se.adultFlightNumber), PriceFormat: (priceFlightAdult * se.adultFlightNumber).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") };
            se.JsonSurchargeFee.SurchargeFee.push(priceItem1);
        }
        se.MathPriceAll();
    }
    showPenalty() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: "Giá rẻ (không hoàn tiền)",
                message: "Đây là giá đặc biệt thấp hơn giá thông thường, không thể hủy hoặc thay đổi. Trong trường hợp không thể sử dụng combo sẽ không hoàn lại tiền. <p style='text-align:center !important;font-style:italic;margin-bottom:0'>Nếu bạn đã có kế hoạch chắc chắn thì hãy chớp lấy cơ hội này.</p>",
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
    sendRequestCombo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.bookCombo.Address = this.Address;
            this.bookCombo.ComboId = this.bookcombodetail.comboId;
            this.bookCombo.isFlightCombo = true;
            this.bookCombo.isFlashSale = false;
            this.bookCombo.isNormalCombo = false;
            const modal = yield this.modalCtrl.create({
                component: _requestcombo_requestcombo__WEBPACK_IMPORTED_MODULE_10__["RequestComboPage"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.valueGlobal.backValue = 'flightcombo';
                this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
            });
        });
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
    }
    showdiscount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.ischeck) {
                jquery__WEBPACK_IMPORTED_MODULE_12__('.div-point').removeClass('div-disabled');
                this.valueGlobal.PriceAvgPlusTAStr = this.PriceAvgPlusTAStr;
                this.textpromotion = "Nhập mã giảm giá";
                this.promocode = "";
                this.ischeckbtnpromo = false;
                this.ischeckpromo = false;
                this.msg = "";
                const modal = yield this.modalCtrl.create({
                    component: _adddiscount_adddiscount_page__WEBPACK_IMPORTED_MODULE_11__["AdddiscountPage"],
                });
                modal.present();
                modal.onDidDismiss().then((data) => {
                    if (data.data) {
                        this.zone.run(() => {
                            if (data.data.promocode) {
                                jquery__WEBPACK_IMPORTED_MODULE_12__('.div-point').addClass('div-disabled');
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
    upgradeRoom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.activityService.objFlightComboUpgrade = {};
            se.activityService.objFlightComboUpgrade.Rooms = se.jsonroom;
            se.activityService.objFlightComboUpgrade.CurrentRoom = se.elementMealtype;
            se.activityService.objFlightComboUpgrade.roomPriceSale = se.roomPriceSale;
            se.activityService.objFlightComboUpgrade.address = se.Address;
            se.valueGlobal.backValue = "flightcomboupgraderoom";
            se.navCtrl.navigateForward('/flightcomboupgraderoom/0');
        });
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
            se.transportPriceSale = se.transportPriceSale * (se.totalAdult - se.AdultCombo);
            se.transportPriceNet = se.transportPriceNet * (se.totalAdult - se.AdultCombo);
            se.TotalPriceCombo = se.totalPriceSale * se.AdultCombo;
            se.totalAdultExtrabed = se.totalAdult - se.AdultCombo;
            se.MathGaladinnerAdExtrabed();
            if (se.currentDepartFlight != undefined) {
                se.SaveFlightDepartSelected();
            }
            if (se.currentDepartFlight != undefined) {
                se.SaveFlightReturnSelected();
            }
            se.MathPriceAll();
        }
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
    closecalendar() {
        this.modalCtrl.dismiss();
    }
    changeDateInfo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (!this.loadflightpricedone) {
                this.presentToastwarming('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
                return;
            }
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            this.msgEmptyFlight = '';
            let arr = se.cin.split('-');
            let arr1 = se.cout.split('-');
            let newdatecin = new Date(arr[2], arr[1] - 1, arr[0]);
            let newdatecout = new Date(arr1[2], arr1[1] - 1, arr1[0]);
            let fromdate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(newdatecin).format('YYYY-MM-DD'));
            let todate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(newdatecout).format('YYYY-MM-DD'));
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
                        cssClass: 'strikethrough'
                    });
                }
            }
            if (this.valueGlobal.listlunar) {
                for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
                    this._daysConfig.push({
                        date: this.valueGlobal.listlunar[j].date,
                        subTitle: this.valueGlobal.listlunar[j].name,
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
                daysConfig: this._daysConfig,
                to: new Date(Year + 1, Month, Day),
            };
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModal"],
                animated: true,
                cssClass: 'hotel-calendar-custom',
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                this.allowclickcalendar = true;
                jquery__WEBPACK_IMPORTED_MODULE_12__('.days-btn').click(e => this.clickedElement(e));
                jquery__WEBPACK_IMPORTED_MODULE_12__('.hotel-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
                jquery__WEBPACK_IMPORTED_MODULE_12__('.hotel-calendar-custom .header-img-close').click((e => this.closecalendar()));
            });
        });
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if (jquery__WEBPACK_IMPORTED_MODULE_12__(obj.parentNode).hasClass('endSelection') || jquery__WEBPACK_IMPORTED_MODULE_12__(obj.parentNode).hasClass('startSelection')) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    if (jquery__WEBPACK_IMPORTED_MODULE_12__(obj.parentNode).hasClass('endSelection')) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_12__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_12__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_12__('.on-selected')[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_12__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_12__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_12__(obj)[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_12__('.on-selected').closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_12__(obj).closest('.month-box').children()[0].textContent;
                    }
                    else {
                        if (jquery__WEBPACK_IMPORTED_MODULE_12__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_12__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_12__(obj)[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_12__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_12__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_12__('.endSelection').children('.days-btn')[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_12__(obj).closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_12__('.endSelection').closest('.month-box').children()[0].textContent;
                    }
                    if (objTextMonthEndDate && objTextMonthEndDate.length > 0 && objTextMonthStartDate && objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.split('/')[0];
                        yearstartdate = objTextMonthStartDate.split('/')[1];
                        monthenddate = objTextMonthEndDate.split('/')[0];
                        yearenddate = objTextMonthEndDate.split('/')[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        let arr_ed = this.bookCombo.objComboDetail.endDate.split('-');
                        let ed = new Date(arr_ed[2], arr_ed[1] - 1, arr_ed[0]);
                        if (moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).diff(ed, 'days') > 0) {
                            this.presentToastwarming('Combo chỉ áp dụng trong khoảng ' + this.bookCombo.objComboDetail.startDate + ' đến ' + this.bookCombo.objComboDetail.endDate + '. Vui lòng chọn lại.');
                            return;
                        }
                        if (fromdate && todate && moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(fromdate, 'days') > 0) {
                            if (moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(fromdate, "days") > 30) {
                                this.presentToastwarming('Ngày nhận và trả phòng phải trong vòng 30 ngày');
                                return;
                            }
                            var se = this;
                            se.PriceAvgPlusTAStr = 0;
                            se.loadflightpricedone = false;
                            let _duration = moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(fromdate), 'days');
                            if (_duration == 1) {
                                se.booking.CheckInDate = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format('YYYY-MM-DD');
                                se.booking.CheckOutDate = (moment__WEBPACK_IMPORTED_MODULE_8__(todate).add('days', 1)).format('YYYY-MM-DD');
                                se.cin = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format('DD-MM-YYYY');
                                se.cout = (moment__WEBPACK_IMPORTED_MODULE_8__(todate).add('days', 1)).format('DD-MM-YYYY');
                            }
                            else {
                                se.booking.CheckInDate = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format('YYYY-MM-DD');
                                se.booking.CheckOutDate = moment__WEBPACK_IMPORTED_MODULE_8__(todate).format('YYYY-MM-DD');
                                se.cin = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format('DD-MM-YYYY');
                                se.cout = moment__WEBPACK_IMPORTED_MODULE_8__(todate).format('DD-MM-YYYY');
                            }
                            se.searchhotel.CheckInDate = se.booking.CheckInDate;
                            se.searchhotel.CheckOutDate = se.booking.CheckOutDate;
                            se.bookCombo.FormParam.CheckInDate = se.booking.CheckInDate;
                            se.bookCombo.FormParam.CheckOutDate = se.booking.CheckOutDate;
                            se.bookCombo.CheckInDate = se.booking.CheckInDate;
                            se.bookCombo.CheckOutDate = se.booking.CheckOutDate;
                            se.duration = moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.booking.CheckInDate), 'days');
                            se.dur = se.duration;
                            se.TotalNight = se.duration;
                            var cintemp = new Date(se.searchhotel.CheckInDate);
                            se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(cintemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_8__(cintemp).format('MM');
                            var couttemp = new Date(se.searchhotel.CheckOutDate);
                            se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(couttemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_8__(couttemp).format('MM');
                            se.cinthudisplay = se.getDayOfWeek(se.searchhotel.CheckInDate);
                            se.coutthudisplay = se.getDayOfWeek(se.searchhotel.CheckOutDate);
                            se.ischangefly = true;
                            se.bookCombo.Luggage = 0;
                            se.getDayName(se.cin, se.cout);
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
                var d = moment__WEBPACK_IMPORTED_MODULE_8__(newdate).format('YYYY-MM-DD');
                resolve(moment__WEBPACK_IMPORTED_MODULE_8__(se.searchhotel.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(d), 'days') > 1 ? false : true);
            }
            else {
                resolve(true);
            }
        });
    }
    checkComboAfterChangedate() {
        var se = this;
        var cb;
        se.loadComboData(cb);
        this.roomPriceSale = this.basepricesale;
        se.checkComboDuration(se.bookCombo.objComboDetail).then((valid) => {
            if (valid) {
                se.checkBOD(se.bookCombo.objComboDetail.comboDetail.roomId).then((checkbod) => {
                    if (checkbod) {
                        if (se.bookCombo.checkInsurranceFee) {
                            se.getInsurranceFee(se.bookCombo.ComboId).then((data) => {
                                se.objInsurranceFee = data.data;
                            });
                        }
                        se.getHotelContractPrice(se.bookCombo.FormParam).then((data) => {
                            if (data) {
                                se.listDepart = [];
                                se.listReturn = [];
                                se.loadpricedone = false;
                                se.loadflightpricedone = false;
                                se.loadFlightDataNew(false);
                            }
                        });
                    }
                    else {
                        se.loadpricedone = true;
                        se.loadflightpricedone = true;
                        se.PriceAvgPlusTAStr = 0;
                    }
                });
            }
            else {
                se.loadpricedone = true;
                se.loadflightpricedone = true;
                se.PriceAvgPlusTAStr = 0;
            }
        });
    }
    loadComboData(cb) {
        if (this.bookCombo.ComboDetail.details.length == 1) {
            cb = this.bookCombo.ComboDetail.details[0];
            this.bookcombodetail = cb;
        }
        else {
            this.bookCombo.ComboDetail.details.forEach(element => {
                let df = moment__WEBPACK_IMPORTED_MODULE_8__(element.stayFrom).format('YYYY-MM-DD');
                let dt = moment__WEBPACK_IMPORTED_MODULE_8__(element.stayTo).format('YYYY-MM-DD');
                if (moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckInDate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(df), 'days') >= 0 && moment__WEBPACK_IMPORTED_MODULE_8__(dt).diff(moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckInDate), 'days') >= 0
                    && moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckOutDate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(df), 'days') >= 0 && moment__WEBPACK_IMPORTED_MODULE_8__(dt).diff(moment__WEBPACK_IMPORTED_MODULE_8__(this.booking.CheckOutDate), 'days') >= 0) {
                    cb = element;
                    this.bookcombodetail = element;
                }
            });
            if (!cb) {
                cb = this.bookCombo.ComboDetail.details[0];
                this.bookcombodetail = cb;
            }
        }
        this.totalPriceSale = cb.totalPriceSale;
        this.departTicketSale = cb.departTicketSale;
        this.returnTicketSale = cb.returnTicketSale;
        this.basepricesale = cb.totalPriceSale - cb.departTicketSale - cb.returnTicketSale;
    }
    checkBOD(roomid) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlGate + '/get-blackout-date',
                qs: { hotelId: se.booking.HotelId ? se.booking.HotelId : se.searchhotel.hotelID, roomId: roomid },
                headers: {
                    'postman-token': '86c67bdc-5fcd-0240-5549-f3ea2b31faf8',
                    'cache-control': 'no-cache'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                if (error) {
                    resolve(true);
                    throw new Error(error);
                }
                ;
                var BOD = JSON.parse(body);
                var arrBOD = BOD.BlackOutDates;
                if (arrBOD.length > 0) {
                    var checkcintemp = new Date(se.booking.CheckInDate);
                    var checkdatecout = new Date(se.booking.CheckOutDate);
                    var checkcin = moment__WEBPACK_IMPORTED_MODULE_8__(checkcintemp).format('YYYYMMDD');
                    var checkcout = moment__WEBPACK_IMPORTED_MODULE_8__(checkdatecout).format('YYYYMMDD');
                    for (let i = 0; i < arrBOD.length; i++) {
                        var checkBODtemp = new Date(arrBOD[i]);
                        var checkBOD = moment__WEBPACK_IMPORTED_MODULE_8__(checkBODtemp).format('YYYYMMDD');
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
    showComboDetail() {
        var se = this;
        se.valueGlobal.backValue = 'flightcombopaymentbreakdown';
        if (!se.bookCombo.Luggage) {
            se.bookCombo.Luggage = 0;
        }
        se.activityService.objFlightComboPaymentBreakDown = { objDetail: se };
        se.navCtrl.navigateForward("/flightcombopaymentbreakdown");
    }
    getInsurranceFee(comboid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            return new Promise((resolve, reject) => {
                var optionscombo = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/ComboServiceFee?comboId=' + (comboid ? comboid : se.bookCombo.ComboId) + '&days=' + (se.dur * 1 + 1) + '&pax=' + (se.adults + se.children),
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                        apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U',
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(optionscombo, function (error, response, body) {
                    if (!error) {
                        var result = JSON.parse(body);
                        resolve(result);
                    }
                });
            });
        });
    }
    buyLuggage() {
        this.next(2);
    }
    getBOD(roomid) {
        var se = this;
        this.ischeckBOD = false;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlGate + '/get-blackout-date',
            qs: { hotelId: this.booking.HotelId, roomId: roomid },
            headers: {
                'postman-token': '86c67bdc-5fcd-0240-5549-f3ea2b31faf8',
                'cache-control': 'no-cache'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            var BOD = JSON.parse(body);
            se.arrBOD = BOD.BlackOutDates;
        });
    }
    nextShuttlebus() {
        this.navCtrl.navigateForward("/shuttlebusnote");
    }
};
FlightComboReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightcomboreviews',
        template: __webpack_require__(/*! ./flightcomboreviews.html */ "./src/app/flightcomboreviews/flightcomboreviews.html"),
        styles: [__webpack_require__(/*! ./flightcomboreviews.scss */ "./src/app/flightcomboreviews/flightcomboreviews.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_14__["Facebook"]])
], FlightComboReviewsPage);



/***/ })

}]);
//# sourceMappingURL=flightcomboreviews-flightcomboreviews-module.js.map