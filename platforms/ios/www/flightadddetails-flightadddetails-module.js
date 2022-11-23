(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightadddetails-flightadddetails-module"],{

/***/ "./src/app/flightadddetails/flightadddetails.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/flightadddetails/flightadddetails.module.ts ***!
  \*************************************************************/
/*! exports provided: FlightadddetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightadddetailsPageModule", function() { return FlightadddetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightadddetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightadddetails.page */ "./src/app/flightadddetails/flightadddetails.page.ts");







let FlightadddetailsPageModule = class FlightadddetailsPageModule {
};
FlightadddetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _flightadddetails_page__WEBPACK_IMPORTED_MODULE_6__["FlightadddetailsPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _flightadddetails_page__WEBPACK_IMPORTED_MODULE_6__["FlightadddetailsPage"]
                }]),
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightadddetailsPageModule);



/***/ }),

/***/ "./src/app/flightadddetails/flightadddetails.page.html":
/*!*************************************************************!*\
  !*** ./src/app/flightadddetails/flightadddetails.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\" *ngIf=\"activeStep == 1 else step2title\">Thông tin hành khách</div>\n            <ng-template #step2title>\n                <div class=\"div-title\">Thông tin liên lạc</div>\n            </ng-template>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n  <ion-content >\n    <div class=\"content-flightadddetails\">\n        <div *ngIf=\"activeStep == 1 else stepUserInfo\">\n            <div class=\"div-img-step\">\n                <img class=\"img-step\" src=\"./assets/ic_flight/step_2.svg\">\n            </div>\n    \n            <div class=\"div-title m-bottom-12\">Thông tin hành khách</div>\n    \n            <div *ngIf=\"adults && adults.length >0\">\n                <div *ngFor=\"let itemAdult of adults; let idxa = index\">\n                    <div  class=\"div-sub-title d-flex\">\n                            <div class=\"div-width-300\">Người lớn {{itemAdult.id}}</div>\n                            <div class=\"div-width-100 text-right\" *ngIf=\"itemAdult.genderdisplay && itemAdult.name\" (click)= \"editPaxInfo(itemAdult, 1)\">Xóa</div>\n                            \n                    </div>\n                    <div class=\"d-flex\">\n                        <div [ngClass]=\"(itemAdult.errorGender || itemAdult.errorInfo) ? 'div-left cls-error' : 'div-left'\" (click)=\"selectAdultGender(itemAdult)\" (blur)=\"checkInput(itemAdult, 1, true)\">\n                            <div [ngClass]=\"!itemAdult.genderdisplay ?  'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\n                                Danh xưng\n                            </div>\n                            <div class= 'text-gender' *ngIf=\"itemAdult.genderdisplay\">{{itemAdult.genderdisplay}}</div>\n                            <div [ngClass]=\"(itemAdult.errorGender || itemAdult.errorInfo)? 'div-icon-down cls-error' : 'div-icon-down'\">\n                                <img *ngIf=\"!(itemAdult.errorGender || itemAdult.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\n                                <img *ngIf=\"(itemAdult.errorGender || itemAdult.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\n                            </div>\n                        </div>\n                        <div [ngClass]=\"(itemAdult.errorName || itemAdult.errorSubName || itemAdult.errorInfo) ? 'div-right cls-error' : 'div-right'\">\n                                <ion-label [ngClass]=\"!itemAdult.name ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\" >Họ và tên đầy đủ</ion-label>\n                                <ion-input class=\"cls-input-custom\" type=\"text\" (ionChange)=textchangehoten(itemAdult) [(ngModel)]=\"itemAdult.name\" (ionInput)=\"inputFocus(itemAdult, $event, 2)\" (ionBlur)=\"inputLostFocus(itemAdult, true)\"  (ionFocus)=\"inputOnFocus(itemAdult, 2)\" required></ion-input>\n                            \n                            \n                        </div>\n                    </div>\n                    <div *ngIf=\"_flightService.itemFlightCache.priceCathay>0 && !isExtenal\" class=\"d-flex m-top-8 \">\n\n                        <div class=\"div-left no-border\"></div>\n                       \n                            <div class=\"div-right\">\n                                <div [ngClass]=\"(itemAdult.errorDateofbirth || (!itemAdult.dateofbirth && itemAdult.errorInfo)) ? 'div-width-100 cls-error ' : 'div-width-100 border-bottom' \">\n                                    <ion-label [ngClass]=\"!itemAdult.dateofbirth ? 'sub-label m-bottom-6' : 'sub-label m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                    <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\"  class=\"cls-iondatetime\"\n                                        [(ngModel)]=\"itemAdult.dateofbirth\" (ionBlur)=\"checkInput(itemAdult, 3, true)\" required></ion-datetime>\n                                </div>\n                                \n                                </div>\n        \n                    </div>\n                    <div class=\"p-top-6\">\n                        <ion-label class=\"text-sub\">Điền đầy đủ Họ tên như trên giấy tờ tùy thân dùng để thực hiện chuyến bay</ion-label>\n                    </div>\n\n                    <div *ngIf=\"isExtenal && showLotusPoint\">\n                        <div class=\"d-flex p-relative m-top-16 h-45 \">\n                            <div [ngClass]=\"(itemAdult.errorDateofbirth || (!itemAdult.dateofbirth && itemAdult.errorInfo)) ? 'div-width-100 cls-error' : 'div-width-100' \">\n                                <ion-label [ngClass]=\"!itemAdult.dateofbirth ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemAdult.dateofbirth ? 'cls-datetofbirth' : 'cls-datetofbirth m-top-16'\"\n                                    [(ngModel)]=\"itemAdult.dateofbirth\" (ionBlur)=\"checkInput(itemAdult, 3, true)\" required></ion-datetime>\n                            </div>\n\n                            <div [ngClass]=\"(itemAdult.errorCountry || (!itemAdult.errorCountry && itemAdult.errorInfo)) ? 'div-width-100 m-left-8 border-bottom cls-error' : 'div-width-100 m-left-8 border-bottom'\" >\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemAdult.country ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc tịch\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom\" [(ngModel)]=\"itemAdult.country\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getCountry($event, itemAdult)\" (ionBlur)=\"checkInput(itemAdult, 4, true)\" (ionFocus)=\"inputOnFocus(itemAdult, 4)\"></ion-searchbar>\n                                </div>\n                              \n                                <div [ngClass]=\"(itemAdult.errorCountry || itemAdult.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6' \" (click)=\"getCountry('dropdownicon', itemAdult)\">\n                                    <img *ngIf=\"!itemAdult.errorCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemAdult.errorCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemAdult.showSelectCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itemcountry of listcountry\" (click)=\"selectCountry(itemAdult, itemcountry)\">{{ itemcountry.name }}</ion-item>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div [ngClass]=\"(itemAdult.errorPassport || (!itemAdult.passport && itemAdult.errorInfo)) ? 'p-relative m-top-8 cls-error' : 'p-relative m-top-8'\">\n                            <ion-label [ngClass]=\"!itemAdult.passport ? 'sub-label label-passport' : 'sub-label label-passport cls-passport-transition'\" >Số hộ chiếu</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" [(ngModel)]=\"itemAdult.passport\" (ionBlur)=\"checkInput(itemAdult, 5, true)\" (ionFocus)=\"inputOnFocus(itemAdult, 5)\" required></ion-input>\n                            \n                        </div>\n\n                        <div class='d-flex p-relative m-top-16 h-45'>\n                            <div [ngClass]=\"(itemAdult.errorPassportCountry || (!itemAdult.passportCountry && itemAdult.errorInfo)) ? 'div-width-100 p-relative border-bottom  w-100 cls-error' : 'div-width-100 p-relative border-bottom w-100'\">\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemAdult.passportCountry ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc gia cấp\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom cls-passportcountry\" [(ngModel)]=\"itemAdult.passportCountry\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getPassportCountry($event, itemAdult)\" (ionBlur)=\"checkInput(itemAdult, 6, true)\"  (ionFocus)=\"inputOnFocus(itemAdult, 6)\"></ion-searchbar>\n                                </div>\n\n                                <div [ngClass]=\"(itemAdult.errorPassportCountry || itemAdult.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6' \"   (click)=\"getPassportCountry('dropdownicon', itemAdult)\">\n                                    <img *ngIf=\"!itemAdult.errorPassportCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemAdult.errorPassportCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemAdult.showSelectPassportCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itempassportcountry of listpassportcountry\" (click)=\"selectPassportCountry(itemAdult, itempassportcountry)\" >{{ itempassportcountry.name }}</ion-item>\n                                </div>\n                            </div>\n\n                            <div [ngClass]=\"(itemAdult.errorPassportExpireDate || (!itemAdult.passportExpireDate && itemAdult.errorInfo))? 'div-width-100 m-left-8 cls-error' : 'div-width-100 m-left-8'\">\n                                <ion-label [ngClass]=\"!itemAdult.passportExpireDate ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Ngày hết hạn</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxepdate\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemAdult.passportExpireDate ? 'cls-datetofbirth w-200' : 'cls-datetofbirth m-top-16 w-200'\"\n                                    [(ngModel)]=\"itemAdult.passportExpireDate\" (ionBlur)=\"checkInput(itemAdult, 7, true)\" required></ion-datetime>\n                            </div>\n                        </div>\n                    </div>\n\n                  \n                    <div *ngIf=\"showLotusPoint && !itemAdult.airlineMemberCode\" class=\"text-lotus-point\" (click)=\"openLotusPointSave(itemAdult)\">Nhập thẻ bông sen vàng <img class=\"img-vector\" src=\"./assets/imgs/vector.svg\" /></div>\n                    <div *ngIf=\"showLotusPoint && itemAdult.airlineMemberCode\" class=\"text-lotus-code\" (click)=\"openLotusPointSave(itemAdult)\">Thẻ bông sen vàng: {{ itemAdult.airlineMemberCode }}</div>\n\n                    <!-- show error -->\n                    <div class=\"div-showerror m-top-16\" *ngIf=\"!inputtext\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"itemAdult.textErrorInfo\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorInfo }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorGender\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorGender }}\n                            </div>\n                        </div>\n                        \n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemAdult.textErrorInfo && itemAdult.textErrorName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.name && !itemAdult.textErrorName && itemAdult.textErrorSubName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorSubName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorDateofbirth\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorDateofbirth }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassport\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassport }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassportCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassportCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassportExpireDate\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassportExpireDate }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"div-split\"></div>\n                </div>\n            </div>\n           \n    \n            <div *ngIf=\"childs && childs.length >0\">\n                <div *ngFor=\"let itemChild of childs; let idxc = index\">\n                    <div class=\"d-flex\">\n                        <div class=\"div-width-300\">\n                                <div class=\"div-sub-title \" *ngIf=\"!itemChild.isInfant else divinfant\">Trẻ em {{itemChild.id}} <span class=\"sub-label f-12\">(Từ 2 - Dưới 12 tuổi)</span></div>\n                                <ng-template #divinfant>\n                                    <div class=\"div-sub-title m-bottom-6\">Em bé {{itemChild.iddisplay}} <span class=\"sub-label f-12\">(Dưới 2 tuổi)</span></div>\n                                </ng-template>\n                        </div>\n                        <div class=\"div-width-100 text-right\" *ngIf=\"itemChild.genderdisplay && itemChild.name && itemChild.dateofbirth\" (click)= \"editPaxInfo(itemChild, 2)\">Xóa</div>\n                    </div>\n                  \n                    <div class=\" d-flex \">\n                        <div [ngClass]=\"(itemChild.errorGender || itemChild.errorInfo)? 'div-left cls-error' : 'div-left '\" (click)=\"selectGender(itemChild)\" (blur)=\"checkInput(itemChild, 1, false)\">\n                            <div [ngClass]=\"!itemChild.genderdisplay ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\n                                <ion-label class=\"sub-label\">Danh xưng</ion-label>\n                            </div>\n                            <div class=\"text-gender\" *ngIf=\"itemChild.genderdisplay\" >{{itemChild.genderdisplay}}</div>\n                            <div [ngClass]=\"(itemChild.errorGender || itemChild.errorInfo)? 'div-icon-down cls-error' : 'div-icon-down'\">\n                                <img *ngIf=\"!(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\n                                <img *ngIf=\"(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\n                            </div>\n                        </div>\n                        <div [ngClass]=\"(itemChild.errorName || itemChild.errorSubName || itemChild.errorInfo) ? 'div-right cls-error' : 'div-right'\">\n                            <ion-label [ngClass]=\"!itemChild.name ? 'sub-label m-top-10 label-absolute'  : 'sub-label m-top-10 label-absolute cls-gender-transition'\" >Họ và tên đầy đủ</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" (ionChange)=textchangehoten(itemChild) [(ngModel)]=\"itemChild.name\" (ionInput)=\"inputFocus(itemChild, $event)\" (ionBlur)=\"inputLostFocus(itemChild, false)\" (ionFocus)=\"inputOnFocus(itemChild, 2)\" required></ion-input>\n                        \n                        \n                    </div>\n                    </div>\n\n                    <div class=\"p-top-6\">\n                        <ion-label class=\"text-sub\">Điền đầy đủ Họ tên như trên giấy tờ tùy thân dùng để thực hiện chuyến bay</ion-label>\n                    </div>\n                    <div *ngIf=\"!(isExtenal && showLotusPoint)\" class=\" d-flex m-top-8 \">\n                        <div class=\"div-left no-border\"></div>\n                        <div [ngClass]=\"(itemChild.errorDateofbirth || (itemChild.errorInfo && !itemChild.dateofbirth) )? 'div-right cls-error' : 'div-right' \">\n                                <ion-label class=\"sub-label m-bottom-6\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" class=\"cls-iondatetime\" \n                                    [(ngModel)]=\"itemChild.dateofbirth\" (ionChange)=\"checkInput(itemChild, 3, false)\" required></ion-datetime>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"isExtenal && showLotusPoint\">\n                        <div class=\"d-flex p-relative m-top-16 h-45\">\n                            <div [ngClass]=\"(itemChild.errorDateofbirth || (itemChild.errorInfo && !itemChild.dateofbirth) )? 'div-width-100 cls-error' : 'div-width-100' \">\n                                <ion-label [ngClass]=\"!itemChild.dateofbirth ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemChild.dateofbirth ? 'cls-datetofbirth' : 'cls-datetofbirth m-top-16'\"\n                                    [(ngModel)]=\"itemChild.dateofbirth\" (ionChange)=\"checkInput(itemChild, 3, false)\" required></ion-datetime>\n                            </div>\n\n                            <div [ngClass]=\"(itemChild.errorCountry || (itemChild.errorInfo && !itemChild.country)) ? 'div-width-100 m-left-8 border-bottom cls-error' : 'div-width-100 m-left-8 border-bottom'\" >\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemChild.country ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc tịch\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom\" [(ngModel)]=\"itemChild.country\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getCountry($event, itemChild)\" (ionBlur)=\"checkInput(itemChild, 4, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 4)\"></ion-searchbar>\n                                </div>\n                              \n                                <div [ngClass]=\"(itemChild.errorCountry || itemChild.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6'\" (click)=\"getCountry('dropdownicon', itemChild)\">\n                                    <img *ngIf=\"!itemChild.errorCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemChild.errorCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemChild.showSelectCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itemcountry of listcountry\" (click)=\"selectCountry(itemChild, itemcountry)\">{{ itemcountry.name }}</ion-item>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div [ngClass]=\"(itemChild.errorPassport || (itemChild.errorInfo && !itemChild.passport)) ? 'p-relative m-top-8 cls-error' : 'p-relative m-top-8'\">\n                            <ion-label [ngClass]=\"!itemChild.passport ? 'sub-label label-passport' : 'sub-label label-passport cls-passport-transition'\" >Số hộ chiếu</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" [(ngModel)]=\"itemChild.passport\" (ionBlur)=\"checkInput(itemChild, 5, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 5)\" required></ion-input>\n                            \n                        </div>\n\n                        <div class=\"d-flex p-relative m-top-16 h-45\">\n                            <div [ngClass]=\"(itemChild.errorPassportCountry || (itemChild.errorInfo && !itemChild.passportCountry)) ? 'div-width-100 p-relative border-bottom  w-100 cls-error' : 'div-width-100 p-relative border-bottom  w-100'\">\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemChild.passportCountry ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc gia cấp\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom cls-passportcountry\" [(ngModel)]=\"itemChild.passportCountry\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getPassportCountry($event, itemChild)\" (ionBlur)=\"checkInput(itemChild, 6, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 6)\"></ion-searchbar>\n                                </div>\n\n                                <div [ngClass]=\"(itemChild.errorPassportCountry || itemChild.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6'\"  (click)=\"getPassportCountry('dropdownicon', itemChild)\">\n                                    <img *ngIf=\"!itemChild.errorPassportCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemChild.errorPassportCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemChild.showSelectPassportCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itempassportcountry of listpassportcountry\" (click)=\"selectPassportCountry(itemChild, itempassportcountry)\">{{ itempassportcountry.name }}</ion-item>\n                                </div>\n                            </div>\n\n                            <div [ngClass]=\"(itemChild.errorPassportExpireDate || (itemChild.errorInfo && !itemChild.passportExpireDate))? 'div-width-100 m-left-8 cls-error' : 'div-width-100 m-left-8'\">\n                                <ion-label [ngClass]=\"!itemChild.passportExpireDate ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Ngày hết hạn</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxepdate\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemChild.passportExpireDate ? 'cls-datetofbirth w-200' : 'cls-datetofbirth m-top-16 w-200'\"\n                                    [(ngModel)]=\"itemChild.passportExpireDate\" (ionBlur)=\"checkInput(itemChild, 7, false)\" required></ion-datetime>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- show error -->\n                    <div class=\"div-showerror m-top-16\"  *ngIf=\"!inputtext\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"itemChild.textErrorInfo\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorInfo }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorGender\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorGender }}\n                            </div>\n                        </div>\n                        \n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemChild.textErrorInfo && itemChild.textErrorName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.name && !itemChild.textErrorName && itemChild.textErrorSubName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorSubName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemChild.textErrorInfo && itemChild.textErrorDateofbirth\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorDateofbirth }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassport\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassport }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassportCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassportCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassportExpireDate\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassportExpireDate }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"div-split\"></div>\n                </div>\n            </div>\n        </div>\n        <ng-template #stepUserInfo>\n            <div class=\"div-login m-bottom-16\" *ngIf=\"!loginuser\" (click)=\"goToLogin()\">\n                Đã có tài khoản? <span class=\"text-login\">Đăng nhập ngay</span>\n            </div>\n\n            <div class=\"div-user-info\">\n                    <div  [ngClass]=\" ( (hasinput && !hoten) || hoteninvalid || subnameinvalid)? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"stacked\">Họ tên</ion-label>\n                            <ion-input [(ngModel)]=\"hoten\" type=\"text\"  (ionBlur)=\"inputLostFocus(null)\" (ionInput)=\"inputFocus(null, $event)\" (ionFocus)=\"inputOnFocus(null, 9)\"></ion-input>\n                        </ion-item>\n                    </div>\n                    \n                    <div [ngClass]=\"((hasinput && !sodienthoai) || sodienthoaiinvalid) ? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"stacked\">Số điện thoại</ion-label>\n                            <ion-input [(ngModel)]=\"sodienthoai\" maxlength=11 required  (ionBlur)=\"checkInputUserInfo(2)\" (ionFocus)=\"inputOnFocus(null, 10)\"></ion-input>\n                        </ion-item>\n                    </div>\n    \n                    <div [ngClass]=\"((hasinput && !email) || emailinvalid) ? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"stacked\">Email</ion-label>\n                            <ion-input [(ngModel)]=\"email\" type=\"email\" (ionBlur)=\"checkInputUserInfo(3)\" (ionFocus)=\"inputOnFocus(null, 11)\"></ion-input>\n                        </ion-item>\n                    </div>\n                    \n                    <div class=\"div-showerror m-bottom-12\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"hasinput && !hoten\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập họ tên.\n                            </div>\n                        </div>\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hoten && hoteninvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Họ tên không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hoten && subnameinvalid\">\n                            <div class=\"div-icon-error width-40\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                              Không nằm trong danh sách họ phổ biến. Vui lòng kiểm tra lại!\n                            </div>\n                          </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hasinput && !sodienthoai\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập số điện thoại.\n                            </div>\n                        </div>\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"sodienthoai && sodienthoaiinvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Số điện thoại không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hasinput && !email\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập email.\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"email && emailinvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Định dạng địa chỉ email không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div class=\"div-vat\">\n                <div class=\"d-flex\">\n                    <ion-checkbox (ionChange)=\"(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\" style=\"width: 20px; height: 20px\"></ion-checkbox>\n                    <ion-label class=\"label-input\" style=\"margin: 3px 10px\">Xuất hóa đơn điện tử</ion-label>\n                </div>\n\n                <div *ngIf=\"ischeck\">\n                    <div *ngIf=\"ischeck\">\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"stacked\">Tên công ty</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"stacked\">Địa chỉ</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"stacked\">Mã số thuế</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div style=\"margin-left: 5px\">\n                            <ion-checkbox (ionChange)=\"showNameMail($event)\" style=\"width: 20px; height: 20px\" [checked]=\"ishideNameMail\"  color=\"secondary\"></ion-checkbox>\n                            <ion-label class=\"label-input\" style=\"margin: 0px 10px;\">Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n                          </div>\n                          <div *ngIf=\"!ishideNameMail\">\n                            <ion-col size=\"12\">\n                              <ion-item style=\"--padding-start: 0px\">\n                                <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"stacked\">Họ tên</ion-label>\n                                <ion-input class=\"cls-input-custom\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n                              </ion-item>\n                            </ion-col>\n                            <ion-col size=\"12\">\n                              <ion-item style=\"--padding-start: 0px\">\n                                <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"stacked\">Email nhận HĐ</ion-label>\n                                <ion-input class=\"cls-input-custom\"  [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n                              </ion-item>\n                            </ion-col>\n                          </div>\n                    </div>\n                  </div>\n            </div>\n        </ng-template>\n        \n        \n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class='div-close-paxhint' *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\" (click)=\"hidePaxHint()\"><img src='./assets/ic_close_b.svg'></div>\n    <div class=\"div-footer d-flex-footer\">\n        \n        <!-- <ng-template #showpaxhint> -->\n            <div class=\"div-pax-hint\" *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\">\n                    <div *ngFor=\"let itempax of listpaxhint\" class=\"d-flex m-bottom-16\" (click)=\"selectPaxHint(itempax)\">\n                        <div class=\"icon-pax\">\n                                <img src=\"./assets/ic_flight/icon-pax.svg\">\n                        </div>\n                        <div class=\"text-pax-hint\">\n                            {{itempax.name}}\n                        </div>\n                    </div>\n                    \n            </div>\n        <!-- </ng-template> -->\n\n        <div class=\"d-flex div-width-100\">\n            <div class=\"div-total\" (click)=\"showPriceDetail()\">\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ adult }} người lớn, {{ child }} trẻ em\n                </div>\n                <div class=\"text-total\" >{{totalPriceDisplay}}đ\n                  <sup>\n                    <img src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                 </div>\n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Xác nhận</button>\n              </div>\n        </div>\n    </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/flightadddetails/flightadddetails.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/flightadddetails/flightadddetails.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 11px !important;\n}\n\n.content-flightadddetails {\n  padding: 16px;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.content-flightadddetails .div-img-step {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.content-flightadddetails .div-title {\n  line-height: 22px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.content-flightadddetails .div-sub-title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n}\n\n.content-flightadddetails .div-left {\n  width: 120px;\n  margin-right: 16px;\n  border-bottom: solid 0.2px #cdcdcd;\n  position: relative;\n}\n\n.content-flightadddetails .sub-label {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.content-flightadddetails .f-12 {\n  font-size: 12px !important;\n}\n\n.content-flightadddetails .label-absolute {\n  position: absolute;\n  top: 22px;\n}\n\n.content-flightadddetails .label-country {\n  position: absolute;\n  top: 14px;\n  z-index: 2;\n  width: 50%;\n}\n\n.content-flightadddetails .m-left-8 {\n  margin-left: 8px;\n}\n\n.content-flightadddetails .m-left-28 {\n  margin-left: 28px;\n}\n\n.content-flightadddetails .bottom-6 {\n  bottom: 6px !important;\n}\n\n.content-flightadddetails .bottom-4 {\n  bottom: 4px !important;\n}\n\n.content-flightadddetails .h-45 {\n  height: 45px;\n}\n\n.content-flightadddetails .top-27 {\n  top: 27px !important;\n}\n\n.content-flightadddetails .border-bottom {\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.content-flightadddetails .label-passport {\n  position: absolute;\n  top: 9px;\n}\n\n.content-flightadddetails .label-passportcountry {\n  position: absolute;\n  top: 24px;\n}\n\n.content-flightadddetails .label-passportdate {\n  position: absolute;\n  top: 18px;\n}\n\n.content-flightadddetails .cls-passport-transition {\n  top: -12px;\n  transition: top 0.1s ease-out;\n}\n\n.content-flightadddetails .cls-country {\n  top: 9px;\n  z-index: -1;\n}\n\n.content-flightadddetails .cls-country-transition {\n  top: -11px;\n}\n\n.content-flightadddetails .cls-gender-transition {\n  top: 0px;\n  transition: top 0.1s ease-out;\n}\n\n.content-flightadddetails .cls-selection-country {\n  position: absolute;\n  height: 180px;\n  width: 100%;\n  overflow-y: scroll;\n  background: #fff;\n  z-index: 99;\n  margin-top: 36px;\n}\n\n.content-flightadddetails .cls-selection-country .item-country {\n  font-size: 12px;\n  height: 36px;\n  border-bottom: none !important;\n}\n\n.content-flightadddetails .cls-input-country-custom {\n  padding: 0;\n  border-bottom: none;\n  position: absolute;\n  margin-top: -14px;\n  background: transparent;\n  z-index: -1;\n  width: 90%;\n}\n\n.content-flightadddetails .cls-input-country-custom .searchbar-input.sc-ion-searchbar-ios {\n  background: transparent;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.content-flightadddetails .p-absolute {\n  position: absolute;\n}\n\n.content-flightadddetails .w-100 {\n  width: 100% !important;\n}\n\n.content-flightadddetails .w-200 {\n  width: 200% !important;\n}\n\n.content-flightadddetails .label-dob {\n  position: absolute;\n  top: -4px;\n}\n\n.content-flightadddetails .div-right {\n  width: 100%;\n  position: relative;\n}\n\n.content-flightadddetails .div-split {\n  height: 8px;\n  background-color: #f2f2f2;\n  margin: 16px -16px;\n}\n\n.content-flightadddetails .div-login {\n  padding: 10px 16px;\n  background: rgba(242, 242, 242, 0.5);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  margin: 0 -16px;\n  margin-top: -16px;\n  margin-bottom: 16px;\n}\n\n.content-flightadddetails .div-login .text-login {\n  color: #26bed6;\n}\n\n.content-flightadddetails .img-vector {\n  position: absolute;\n  margin-left: 8px;\n  margin-top: 6px;\n}\n\n.content-flightadddetails .text-lotus-point {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #26bed6;\n  margin-top: 8px;\n  margin-bottom: -8px;\n}\n\n.content-flightadddetails .text-lotus-code {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  margin-top: 8px;\n  margin-bottom: -8px;\n}\n\n.content-flightadddetails .text-gender {\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.34px;\n  margin-top: 27px;\n}\n\n.content-flightadddetails .text-bold {\n  font-weight: 600 !important;\n}\n\n.content-flightadddetails .div-icon-down {\n  position: absolute;\n  right: 0;\n  bottom: 3px;\n}\n\n.content-flightadddetails .cls-datetofbirth {\n  padding: 0;\n  line-height: 28px;\n  font-size: 16px;\n  margin-top: 27px;\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.content-flightadddetails .p-relative {\n  position: relative;\n}\n\n.content-flightadddetails .top-dob-24 {\n  top: -24px !important;\n}\n\n.content-flightadddetails .m-top-16 {\n  margin-top: 16px !important;\n}\n\n.content-flightadddetails .cls-iondatetime {\n  padding: 0;\n  line-height: 28px;\n  font-size: 16px;\n  margin-top: 4px;\n  border-bottom: solid 0.2px #cdcdcd;\n  padding-top: 16px;\n  margin-top: -16px;\n}\n\n.content-flightadddetails .text-sub {\n  font-size: 12px;\n  text-align: left;\n  color: #828282;\n}\n\n.cls-error {\n  color: #e52822 !important;\n  font-size: 14px;\n}\n\n.cls-error ion-input {\n  color: #e52822 !important;\n}\n\n.cls-error ion-datetime {\n  color: #e52822 !important;\n}\n\n.cls-error ion-searchbar {\n  color: #e52822 !important;\n}\n\n.cls-error ion-item {\n  --border-color: #e52822 !important;\n}\n\n.cls-error .cls-input-custom {\n  border-bottom: 0.2px solid #e52822;\n}\n\n.cls-error .cls-iondatetime, .cls-error .cls-datetofbirth, .cls-error .border-bottom {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.border-bottom.cls-error {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.div-left.cls-error {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.div-showerror .div-icon-error {\n  position: absolute;\n}\n\n.div-showerror .div-text-error {\n  padding-top: 2px;\n}\n\n.cls-input-custom {\n  margin-top: 21px;\n  border-bottom: 0.2px solid #cdcdcd;\n}\n\n.no-border {\n  border-bottom: none !important;\n}\n\n.div-border-bottom {\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.cls-passportcountry {\n  width: 190% !important;\n}\n\n.f-13 {\n  font-size: 13px !important;\n}\n\n.div-vat {\n  margin-top: 20px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.div-width-300 {\n  width: 300%;\n}\n\n.text-right {\n  text-align: right;\n  color: #26bed6;\n  font-weight: 300;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n  display: flex;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n\n.d-flex-footer {\n  width: 100%;\n  height: auto;\n}\n\n.d-flex-footer .div-pax-hint {\n  padding: 16px 16px 0 16px;\n  width: 100%;\n  height: 128px;\n  overflow: scroll;\n  border-bottom: solid 2px #f2f2f2;\n}\n\n.d-flex-footer .div-pax-hint .icon-pax {\n  margin-right: 12px;\n}\n\n.d-flex-footer .div-pax-hint .text-pax-hint {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n::ng-deep .cls-input-custom .native-input.sc-ion-input-ios {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n}\n\n::ng-deep .text-bold .sc-ion-action-sheet-md {\n  font-weight: 600 !important;\n}\n\n::ng-deep .action-sheets-flightselectgender .action-sheet-title.sc-ion-action-sheet-md {\n  font-weight: bold;\n  color: #000;\n}\n\n::ng-deep .loading-wrapper.sc-ion-loading-ios {\n  -webkit-padding-start: 20px;\n  padding-inline-start: 20px;\n  -webkit-padding-end: 20px;\n  padding-inline-end: 20px;\n}\n\n::ng-deep .cls-input-country-custom .searchbar-input.sc-ion-searchbar-ios {\n  background: transparent;\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n  -webkit-padding-end: 0 !important;\n          padding-inline-end: 0 !important;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n::ng-deep .cls-input-country-custom.cls-passportcountry .searchbar-input.sc-ion-searchbar-ios {\n  max-width: 95%;\n}\n\n::ng-deep .item-country ion-item {\n  border-bottom: none;\n  --inner-border-width: 0 0 0px 0;\n}\n\n::ng-deep .sc-ion-action-sheet-md-h.sc-ion-action-sheet-md-s.md.action-sheets-flightselectgender {\n  position: absolute;\n}\n\n.div-close-paxhint {\n  right: -6px;\n  position: absolute;\n  z-index: 14;\n  top: 0;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n  text-align: center;\n}\n\n.p-top-6 {\n  padding-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRhZGRkZXRhaWxzL2ZsaWdodGFkZGRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRhZGRkZXRhaWxzL2ZsaWdodGFkZGRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURFSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RSOztBRElJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBRElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBRElJO0VBQ0ksMEJBQUE7QUNGUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZSOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBRUEsVUFBQTtFQUNBLFVBQUE7QUNIUjs7QURLSTtFQUNJLGdCQUFBO0FDSFI7O0FES0k7RUFDSSxpQkFBQTtBQ0hSOztBREtJO0VBQ0ksc0JBQUE7QUNIUjs7QURLSTtFQUNJLHNCQUFBO0FDSFI7O0FES0k7RUFDSSxZQUFBO0FDSFI7O0FES0k7RUFDSSxvQkFBQTtBQ0hSOztBREtJO0VBQ0ksa0NBQUE7QUNIUjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0hSOztBREtJO0VBRUksa0JBQUE7RUFDQSxTQUFBO0FDSlI7O0FETUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNKUjs7QURNSTtFQUNJLFVBQUE7RUFDQSw2QkFBQTtBQ0pSOztBRE1JO0VBQ0ksUUFBQTtFQUNBLFdBQUE7QUNKUjs7QURNSTtFQUNJLFVBQUE7QUNKUjs7QURRSTtFQUNJLFFBQUE7RUFDQSw2QkFBQTtBQ05SOztBRFNJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNQUjs7QURTUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNQWjs7QURVSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDUlI7O0FEVVE7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNSWjs7QURXSTtFQUNJLGtCQUFBO0FDVFI7O0FEV0k7RUFDSSxzQkFBQTtBQ1RSOztBRFlJO0VBQ0ksc0JBQUE7QUNWUjs7QURZSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ1ZSOztBRFlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDVlI7O0FEYUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ1hSOztBRGNJO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1pSOztBRGVRO0VBQ0ksY0FBQTtBQ2JaOztBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ2RSOztBRGdCSTtFQUNJLDJCQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ2RSOztBRGlCSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGtDQUFBO0FDaEJSOztBRG9CSTtFQUNJLGtCQUFBO0FDbEJSOztBRG9CSTtFQUNJLHFCQUFBO0FDbEJSOztBRG9CSTtFQUNJLDJCQUFBO0FDbEJSOztBRHFCSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUFrQixpQkFBQTtBQ2xCMUI7O0FEcUJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ25CUjs7QURzQkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNuQko7O0FEeUJJO0VBQ0kseUJBQUE7QUN2QlI7O0FEMEJJO0VBQ0kseUJBQUE7QUN4QlI7O0FEMkJJO0VBQ0kseUJBQUE7QUN6QlI7O0FEMkJJO0VBQ0ksa0NBQUE7QUN6QlI7O0FENEJJO0VBQ0ksa0NBQUE7QUMxQlI7O0FENkJJO0VBQ0ksNkNBQUE7QUMzQlI7O0FEOEJBO0VBQ0ksNkNBQUE7QUMzQko7O0FENkJBO0VBQ0ksNkNBQUE7QUMxQko7O0FEOEJJO0VBQ0ksa0JBQUE7QUMzQlI7O0FENkJJO0VBQ0ksZ0JBQUE7QUMzQlI7O0FEOEJBO0VBQ0ksZ0JBQUE7RUFDQSxrQ0FBQTtBQzNCSjs7QUQ2QkE7RUFDSSw4QkFBQTtBQzFCSjs7QUQ0QkE7RUFDSSxrQ0FBQTtBQ3pCSjs7QUQyQkE7RUFDSSxzQkFBQTtBQ3hCSjs7QUQwQkE7RUFDSSwwQkFBQTtBQ3ZCSjs7QUR5QkE7RUFDSSxnQkFBQTtBQ3RCSjs7QUR3QkE7RUFDSSxlQUFBO0FDckJKOztBRHVCQTtFQUNJLFdBQUE7QUNwQko7O0FEc0JBO0VBQ0ksV0FBQTtBQ25CSjs7QURxQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2xCSjs7QURvQkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNsQlI7O0FEb0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2xCWjs7QURxQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ25CWjs7QUR1Qkk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNyQlI7O0FEd0JJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUN2QlI7O0FEMkJBO0VBRUksV0FBQTtFQUNBLFlBQUE7QUN6Qko7O0FEMkJJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0NBQUE7QUMxQlI7O0FENEJRO0VBQ0ksa0JBQUE7QUMxQlo7O0FENkJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDM0JaOztBRGlDSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUM5QlI7O0FEaUNJO0VBQ0ksMkJBQUE7QUMvQlI7O0FEa0NJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDaENSOztBRHNDSTtFQUNJLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDcENSOztBRHVDSTtFQUNJLHVCQUFBO0VBQ0EsbUNBQUE7VUFBQSxrQ0FBQTtFQUNBLGlDQUFBO1VBQUEsZ0NBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdENSOztBRHlDSTtFQUNJLGNBQUE7QUN2Q1I7O0FEMENJO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtBQ3hDUjs7QUQ0Q0k7RUFDSSxrQkFBQTtBQzFDUjs7QUQ4Q0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDM0NKOztBRDhDRTtFQUNFLGdCQUFBO0FDM0NKIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0YWRkZGV0YWlscy9mbGlnaHRhZGRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtaGVhZGVyLXRpdGxle1xuICAgIHBhZGRpbmctdG9wOiAxMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHN7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcblxuICAgIFxuICAgIC5kaXYtaW1nLXN0ZXB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAuZGl2LXRpdGxle1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5kaXYtc3ViLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIH1cblxuICAgIC5kaXYtbGVmdHtcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnN1Yi1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG4gICAgLmYtMTJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGFiZWwtYWJzb2x1dGV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMnB4O1xuICAgIH1cbiAgICAubGFiZWwtY291bnRyeXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE0cHg7XG5cbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLm0tbGVmdC04e1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH0gXG4gICAgLm0tbGVmdC0yOHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgfSBcbiAgICAuYm90dG9tLTZ7XG4gICAgICAgIGJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5ib3R0b20tNHtcbiAgICAgICAgYm90dG9tOiA0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmgtNDV7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG4gICAgLnRvcC0yN3tcbiAgICAgICAgdG9wOiAyN3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5ib3JkZXItYm90dG9te1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xuICAgIH1cbiAgICAubGFiZWwtcGFzc3BvcnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOXB4O1xuICAgIH1cbiAgICAubGFiZWwtcGFzc3BvcnRjb3VudHJ5e1xuICAgICAgICBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDI0cHg7XG4gICAgfVxuICAgIC5sYWJlbC1wYXNzcG9ydGRhdGV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxOHB4O1xuICAgIH1cbiAgICAuY2xzLXBhc3Nwb3J0LXRyYW5zaXRpb257XG4gICAgICAgIHRvcDogLTEycHg7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0O1xuICAgIH1cbiAgICAuY2xzLWNvdW50cnl7XG4gICAgICAgIHRvcDogOXB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG4gICAgLmNscy1jb3VudHJ5LXRyYW5zaXRpb257XG4gICAgICAgIHRvcDogLTExcHg7XG4gICAgICAgIC8vdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgLmNscy1nZW5kZXItdHJhbnNpdGlvbntcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5jbHMtc2VsZWN0aW9uLWNvdW50cnl7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XG5cbiAgICAgICAgLml0ZW0tY291bnRyeXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2xzLWlucHV0LWNvdW50cnktY3VzdG9te1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHdpZHRoOiA5MCU7XG5cbiAgICAgICAgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnAtYWJzb2x1dGV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLnctMTAwe1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC53LTIwMHtcbiAgICAgICAgd2lkdGg6IDIwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxhYmVsLWRvYntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC00cHg7XG4gICAgfVxuICAgIC5kaXYtcmlnaHR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmRpdi1zcGxpdHtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcbiAgICB9XG5cbiAgICAuZGl2LWxvZ2lue1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC41KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBtYXJnaW46IDAgLTE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG5cbiAgICAgICAgLnRleHQtbG9naW57XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW1nLXZlY3RvcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuICAgIC50ZXh0LWxvdHVzLXBvaW50e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICB9XG4gICAgLnRleHQtbG90dXMtY29kZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgfVxuICAgIC50ZXh0LWdlbmRlcntcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjdweDtcbiAgICB9XG4gICAgLnRleHQtYm9sZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGl2LWljb24tZG93bntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAzcHg7XG4gICAgfVxuXG4gICAgLmNscy1kYXRldG9mYmlydGh7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIC8vbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyN3B4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xuICAgICAgICAvLyBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgfVxuICAgIC5wLXJlbGF0aXZle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC50b3AtZG9iLTI0e1xuICAgICAgICB0b3A6IC0yNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tLXRvcC0xNntcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jbHMtaW9uZGF0ZXRpbWV7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7bWFyZ2luLXRvcDogLTE2cHg7XG4gICAgfVxuXG4gICAgLnRleHQtc3Vie1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cbn1cbi5jbHMtZXJyb3J7XG4gICAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAvLyBpb24tbGFiZWwsIC50ZXh0LWdlbmRlciB7XG4gICAgLy8gICAgIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgLy8gfVxuXG4gICAgaW9uLWlucHV0e1xuICAgICAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1kYXRldGltZXtcbiAgICAgICAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tc2VhcmNoYmFye1xuICAgICAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC5jbHMtaW5wdXQtY3VzdG9te1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyO1xuICAgIH1cblxuICAgIC5jbHMtaW9uZGF0ZXRpbWUsIC5jbHMtZGF0ZXRvZmJpcnRoLCAuYm9yZGVyLWJvdHRvbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMiAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5ib3JkZXItYm90dG9tLmNscy1lcnJvcntcbiAgICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG4uZGl2LWxlZnQuY2xzLWVycm9ye1xuICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcbn1cblxuLmRpdi1zaG93ZXJyb3J7XG4gICAgLmRpdi1pY29uLWVycm9ye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC5kaXYtdGV4dC1lcnJvcntcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICB9XG59XG4uY2xzLWlucHV0LWN1c3RvbXtcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkIHJnYigyMDUsIDIwNSwgMjA1KTtcbn1cbi5uby1ib3JkZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmRpdi1ib3JkZXItYm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG59XG4uY2xzLXBhc3Nwb3J0Y291bnRyeXtcbiAgICB3aWR0aDogMTkwJSAhaW1wb3J0YW50O1xufVxuLmYtMTN7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXZhdHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm0tdG9wLTEwe1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5kaXYtd2lkdGgtMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRpdi13aWR0aC0zMDB7XG4gICAgd2lkdGg6IDMwMCU7XG59XG4udGV4dC1yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZGl2LWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgLmRpdi10b3RhbHtcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgICAgICAudGV4dC1zdWItdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LXRvdGFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1idXR0b257XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmJ1dHRvblxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgfSBcbn1cblxuLmQtZmxleC1mb290ZXJ7XG4gICAgLy9kaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcblxuICAgIC5kaXYtcGF4LWhpbnR7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEyOHB4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZjJmMmYyO1xuICAgICAgIC8vIG1hcmdpbjogMTZweCAtMTZweDtcbiAgICAgICAgLmljb24tcGF4e1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtcGF4LWhpbnR7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG46Om5nLWRlZXB7XG4gICAgLmNscy1pbnB1dC1jdXN0b20gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9ze1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWJvbGQgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXIgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIC8vIC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLWguYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXJ7XG4gICAgLy8gICAgIG1hcmdpbi1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAvLyB9XG5cbiAgICAubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLWlvc3tcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMjBweDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMjBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAyMHB4O1xuICAgIH1cblxuICAgIC5jbHMtaW5wdXQtY291bnRyeS1jdXN0b20gLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMCAhaW1wb3J0YW50O1xuXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLmNscy1pbnB1dC1jb3VudHJ5LWN1c3RvbS5jbHMtcGFzc3BvcnRjb3VudHJ5IC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4gICAgICAgIG1heC13aWR0aDogOTUlO1xuICAgIH1cblxuICAgIC5pdGVtLWNvdW50cnkgaW9uLWl0ZW17XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgfVxuXG5cbiAgICAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtcy5tZC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlbGVjdGdlbmRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cbn1cblxuLmRpdi1jbG9zZS1wYXhoaW50e1xuICAgIHJpZ2h0OiAtNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxNDtcbiAgICB0b3A6IC0wO1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wLXRvcC02e1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG59IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDExcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi1pbWctc3RlcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi1sZWZ0IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnN1Yi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5mLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5sYWJlbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubGFiZWwtY291bnRyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogNTAlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubS1sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubS1sZWZ0LTI4IHtcbiAgbWFyZ2luLWxlZnQ6IDI4cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5ib3R0b20tNiB7XG4gIGJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5ib3R0b20tNCB7XG4gIGJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5oLTQ1IHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudG9wLTI3IHtcbiAgdG9wOiAyN3B4ICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmxhYmVsLXBhc3Nwb3J0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDlweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmxhYmVsLXBhc3Nwb3J0Y291bnRyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubGFiZWwtcGFzc3BvcnRkYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtcGFzc3BvcnQtdHJhbnNpdGlvbiB7XG4gIHRvcDogLTEycHg7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLWNvdW50cnkge1xuICB0b3A6IDlweDtcbiAgei1pbmRleDogLTE7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtY291bnRyeS10cmFuc2l0aW9uIHtcbiAgdG9wOiAtMTFweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1nZW5kZXItdHJhbnNpdGlvbiB7XG4gIHRvcDogMHB4O1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1zZWxlY3Rpb24tY291bnRyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgei1pbmRleDogOTk7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtc2VsZWN0aW9uLWNvdW50cnkgLml0ZW0tY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtaW5wdXQtY291bnRyeS1jdXN0b20ge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA5MCU7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtaW5wdXQtY291bnRyeS1jdXN0b20gLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnAtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC53LTEwMCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC53LTIwMCB7XG4gIHdpZHRoOiAyMDAlICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5sYWJlbC1kb2Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi1yaWdodCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LWxvZ2luIHtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAwIC0xNnB4O1xuICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi1sb2dpbiAudGV4dC1sb2dpbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuaW1nLXZlY3RvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudGV4dC1sb3R1cy1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudGV4dC1sb3R1cy1jb2RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC50ZXh0LWdlbmRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtaWNvbi1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAzcHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtZGF0ZXRvZmJpcnRoIHtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMjdweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnAtcmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC50b3AtZG9iLTI0IHtcbiAgdG9wOiAtMjRweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubS10b3AtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtaW9uZGF0ZXRpbWUge1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmNscy1lcnJvciB7XG4gIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jbHMtZXJyb3IgaW9uLWlucHV0IHtcbiAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbn1cbi5jbHMtZXJyb3IgaW9uLWRhdGV0aW1lIHtcbiAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbn1cbi5jbHMtZXJyb3IgaW9uLXNlYXJjaGJhciB7XG4gIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG4uY2xzLWVycm9yIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbn1cbi5jbHMtZXJyb3IgLmNscy1pbnB1dC1jdXN0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyO1xufVxuLmNscy1lcnJvciAuY2xzLWlvbmRhdGV0aW1lLCAuY2xzLWVycm9yIC5jbHMtZGF0ZXRvZmJpcnRoLCAuY2xzLWVycm9yIC5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS5jbHMtZXJyb3Ige1xuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtbGVmdC5jbHMtZXJyb3Ige1xuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtc2hvd2Vycm9yIC5kaXYtaWNvbi1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5kaXYtc2hvd2Vycm9yIC5kaXYtdGV4dC1lcnJvciB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5jbHMtaW5wdXQtY3VzdG9tIHtcbiAgbWFyZ2luLXRvcDogMjFweDtcbiAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2NkY2RjZDtcbn1cblxuLm5vLWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRpdi1ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbn1cblxuLmNscy1wYXNzcG9ydGNvdW50cnkge1xuICB3aWR0aDogMTkwJSAhaW1wb3J0YW50O1xufVxuXG4uZi0xMyB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXZhdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tLXRvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi13aWR0aC0zMDAge1xuICB3aWR0aDogMzAwJTtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIHtcbiAgd2lkdGg6IDIxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtc3ViLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4LWZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uZC1mbGV4LWZvb3RlciAuZGl2LXBheC1oaW50IHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI4cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZjJmMmYyO1xufVxuLmQtZmxleC1mb290ZXIgLmRpdi1wYXgtaGludCAuaWNvbi1wYXgge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4uZC1mbGV4LWZvb3RlciAuZGl2LXBheC1oaW50IC50ZXh0LXBheC1oaW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuOjpuZy1kZWVwIC5jbHMtaW5wdXQtY3VzdG9tIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvcyB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLnRleHQtYm9sZCAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXIgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMDAwO1xufVxuOjpuZy1kZWVwIC5sb2FkaW5nLXdyYXBwZXIuc2MtaW9uLWxvYWRpbmctaW9zIHtcbiAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMjBweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMjBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAyMHB4O1xufVxuOjpuZy1kZWVwIC5jbHMtaW5wdXQtY291bnRyeS1jdXN0b20gLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDAgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjo6bmctZGVlcCAuY2xzLWlucHV0LWNvdW50cnktY3VzdG9tLmNscy1wYXNzcG9ydGNvdW50cnkgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvcyB7XG4gIG1heC13aWR0aDogOTUlO1xufVxuOjpuZy1kZWVwIC5pdGVtLWNvdW50cnkgaW9uLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuOjpuZy1kZWVwIC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLWguc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1zLm1kLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VsZWN0Z2VuZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWNsb3NlLXBheGhpbnQge1xuICByaWdodDogLTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxNDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wLXRvcC02IHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightadddetails/flightadddetails.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/flightadddetails/flightadddetails.page.ts ***!
  \***********************************************************/
/*! exports provided: FlightadddetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightadddetailsPage", function() { return FlightadddetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _flightpricedetail_flightpricedetail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../flightpricedetail/flightpricedetail.page */ "./src/app/flightpricedetail/flightpricedetail.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _flightpointsave_flightpointsave_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../flightpointsave/flightpointsave.page */ "./src/app/flightpointsave/flightpointsave.page.ts");
/* harmony import */ var _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../confirmemail/confirmemail.page */ "./src/app/confirmemail/confirmemail.page.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _flightconfirmbookingdetail_flightconfirmbookingdetail_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../flightconfirmbookingdetail/flightconfirmbookingdetail.page */ "./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.ts");


















let FlightadddetailsPage = class FlightadddetailsPage {
    constructor(platform, navCtrl, modalCtrl, valueGlobal, searchhotel, gf, actionsheetCtrl, pickerController, zone, _flightService, formBuilder, _keyboard, storage, alertCtrl, fb) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.valueGlobal = valueGlobal;
        this.searchhotel = searchhotel;
        this.gf = gf;
        this.actionsheetCtrl = actionsheetCtrl;
        this.pickerController = pickerController;
        this.zone = zone;
        this._flightService = _flightService;
        this.formBuilder = formBuilder;
        this._keyboard = _keyboard;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.adults = [];
        this.childs = [];
        this.maxAgeOfChild = 2020;
        this.activeStep = 1;
        this.hoten = '';
        this.sodienthoai = '';
        this.email = '';
        this.ischeckedit = true;
        this.showLotusPoint = false;
        this.flightcodesave = "";
        this.inputtext = false;
        this.checkchangeemail = false;
        this.isExtenal = false;
        this.showSelectCountry = false;
        this.listcountry = [];
        this.listcountryFull = [];
        this.showSelectPassportCountry = false;
        this.listpassportcountry = [];
        this.hasinput = false;
        this.ishideNameMail = true;
        this.listPaxSuggestByMemberId = [];
        if (this._flightService.itemFlightCache) {
            this.listcountry = this.gf.getNationList();
            this.listcountryFull = [...this.listcountry];
            this.isExtenal = this._flightService.itemFlightCache.isExtenal;
            this.showLotusPoint = ((this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode.indexOf('VietnamAirlines') != -1) || (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airlineCode.indexOf('VietnamAirlines') != -1)) ? true : false;
            this._flightService.itemFlightCache.showLotusPoint = this.showLotusPoint;
            this.maxbod = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD');
            let infant = this._flightService.itemFlightCache.infant > 0 ? this._flightService.itemFlightCache.infant : 0;
            this.adult = this._flightService.itemFlightCache.adult;
            this.child = this._flightService.itemFlightCache.child * 1 + infant * 1;
            this.totalPriceDisplay = this._flightService.itemFlightCache.totalPriceDisplay;
            this.maxAgeOfChild = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY').toString();
            let mindob = '2007', maxdob = '2020';
            let amindob = '1900', amaxdob = new Date().getFullYear() - 12, maxepdate = 2100;
            let departdate = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.checkOutDate);
            for (let index = 0; index < this._flightService.itemFlightCache.adult; index++) {
                this.adults.push({ id: index + 1, name: '', subName: '', gender: 1, genderdisplay: '', airlineMemberCode: '', dateofbirth: '', mindob: amindob, maxdob: amaxdob, isChild: false, country: '', passport: '', passportCountry: '', passportExpireDate: '', maxepdate: maxepdate,
                    errorName: false });
            }
            if (this._flightService.itemFlightCache.child > 0) {
                this.zone.run(() => {
                    maxdob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-2, 'years')).add(-1, 'days')).format('YYYY-MM-DD');
                    mindob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-12, 'years').add(1, 'days')).format('YYYY-MM-DD');
                    for (let index = 0; index < this._flightService.itemFlightCache.child; index++) {
                        this.childs.push({ id: index + 1, name: '', subName: '', dateofbirth: '', gender: 1, genderdisplay: '', isInfant: false, mindob: mindob, maxdob: maxdob, isChild: true, country: '', passport: '', passportCountry: '', passportExpireDate: '', maxepdate: maxepdate });
                    }
                });
            }
            if (this._flightService.itemFlightCache.infant > 0) {
                this.zone.run(() => {
                    maxdob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-14, 'days')).format('YYYY-MM-DD');
                    mindob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-2, 'years')).add(1, 'days')).format('YYYY-MM-DD');
                    for (let index = 0; index < this._flightService.itemFlightCache.infant; index++) {
                        this.childs.push({ id: (this._flightService.itemFlightCache.child > 0 ? this._flightService.itemFlightCache.child : index) + 1, iddisplay: index + 1, name: '', subName: '', dateofbirth: '', gender: 1, genderdisplay: '', isInfant: true, mindob: mindob, maxdob: maxdob, isChild: true, country: '', passport: '', passportCountry: '', passportExpireDate: '', maxepdate: maxepdate });
                    }
                });
            }
            this.loadUserInfo();
            this.checkAndRebindPaxInfo();
            let se = this;
            let item = se._flightService.itemFlightCache;
            se.gf.googleAnalytionCustom('add_to_cart', { item_category: 'flight', start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate, origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, value: se._flightService.itemFlightCache.totalPrice, currency: "VND" });
            se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, { 'fb_content_type': 'flight', 'fb_content_id': item.fromPlaceCode + "_" + item.toPlaceCode + "_" + item.flightNumber, 'fb_value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0), 'fb_currency': 'VND',
                'origin_airport': se._flightService.itemFlightCache.departCode,
                'destination_airport': se._flightService.itemFlightCache.returnCode,
                'departing_departure_date': se._flightService.itemFlightCache.checkInDate, 'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate, 'num_adults': se._flightService.itemFlightCache.adult, 'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0, 'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0,
                'value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0), 'currency': 'VND' }, se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToFloat(se._flightService.itemFlightCache.totalPrice) : 0);
        }
    }
    keyEvent(e) {
        var se = this;
        let code = e.keyCode || e.which;
        if (code === 13) {
            if (se._keyboard && se._keyboard.isVisible) {
                setTimeout(() => {
                    se.checkValidInput().then((valid) => {
                        if (valid) {
                            let itempax = [...se.adults];
                            if (se.childs && se.childs.length > 0) {
                                itempax = [...itempax, ...se.childs];
                            }
                            se.checkDuplicateItem(itempax).then((itemcheck) => {
                                if (itemcheck && itemcheck.length > 0) {
                                    se._flightService.itemFlightCache.duplicateItem = itemcheck;
                                    se.showAlertDuplicateName();
                                    return;
                                }
                                else {
                                    se.checkValidName(itempax).then((itemcheckname) => {
                                        if (itemcheckname) {
                                            se.showAlertInvalidName(itemcheckname);
                                            return;
                                        }
                                        else {
                                            se.checkValidFirstNameAndSubName(itempax).then((itemname) => {
                                                if (itemname) {
                                                    se.showAlertInvalidFirtNameAndLastName(itemname);
                                                    return;
                                                }
                                                else {
                                                    se.checkValidDuplicateFirstNameAndSubName(itempax).then((itemdup) => {
                                                        if (itemdup) {
                                                            se.showAlertDuplicateFirtNameAndLastName(itemdup);
                                                            return;
                                                        }
                                                        else {
                                                            se.checkInValidSubNameBeforeNextStep(itempax).then((iteminvalid) => {
                                                                if (!iteminvalid) {
                                                                    se.gonextstep();
                                                                }
                                                                else {
                                                                    se.showAlertInvalidSubName(iteminvalid);
                                                                    return;
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            se._keyboard.hide();
                            se.inputtext = false;
                        }
                    });
                }, 50);
            }
        }
    }
    ngOnInit() {
        var se = this;
        se._flightService.itemFlightLogin.pipe().subscribe((data) => {
            if (data) {
                setTimeout(() => {
                    se.loadUserInfo();
                }, 300);
            }
        });
    }
    checkAndRebindPaxInfo() {
        var se = this;
        se.storage.get('paxdetailInfo').then((data) => {
            if (data) {
                se.zone.run(() => {
                    if (data.adults && data.adults.length > 0) {
                        for (let index = 0; index < this.adults.length; index++) {
                            const element = this.adults[index];
                            const elementcache = data.adults[index];
                            if (elementcache) {
                                element.id = elementcache.id;
                                element.name = elementcache.name;
                                element.subName = elementcache.subName;
                                element.gender = elementcache.gender;
                                element.genderdisplay = elementcache.genderdisplay;
                                element.airlineMemberCode = elementcache.airlineMemberCode;
                                element.dateofbirth = elementcache.dateofbirth;
                                if (se.isExtenal && se.showLotusPoint) {
                                    element.dateofbirth = elementcache.dateofbirth;
                                    element.country = elementcache.country;
                                    element.passport = elementcache.passport;
                                    element.passportCountry = elementcache.passportCountry;
                                    element.passportExpireDate = elementcache.passportExpireDate;
                                }
                                if (element.gender) {
                                    this.checkInput(element, 1, true);
                                }
                                if (element.name) {
                                    this.checkInput(element, 2, true);
                                }
                                if (this.isExtenal && this.showLotusPoint) {
                                    if (element.dateofbirth) {
                                        this.checkInput(element, 3, true);
                                    }
                                    if (element.country) {
                                        this.checkInput(element, 4, true);
                                    }
                                    if (element.passport) {
                                        this.checkInput(element, 5, true);
                                    }
                                    if (element.passportCountry) {
                                        this.checkInput(element, 6, true);
                                    }
                                    if (element.passportExpireDate) {
                                        this.checkInput(element, 7, true);
                                    }
                                }
                            }
                        }
                    }
                    let mindob = '2007', maxdob = '2020';
                    let departdate = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.checkInDate);
                    if (data.childs && data.childs.length > 0) {
                        for (let index = 0; index < this.childs.length; index++) {
                            const element = this.childs[index];
                            const elementcache = data.childs[index];
                            if (elementcache) {
                                element.id = elementcache.id;
                                element.name = elementcache.name;
                                element.subName = elementcache.subName;
                                element.gender = elementcache.gender;
                                element.genderdisplay = elementcache.genderdisplay;
                                element.dateofbirth = elementcache.dateofbirth;
                                if (se.isExtenal && se.showLotusPoint) {
                                    element.country = elementcache.country;
                                    element.passport = elementcache.passport;
                                    element.passportCountry = elementcache.passportCountry;
                                    element.passportExpireDate = elementcache.passportExpireDate;
                                }
                                this.zone.run(() => {
                                    if (!element.isInfant) {
                                        maxdob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-2, 'years')).add(-1, 'days')).format('YYYY-MM-DD');
                                        mindob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-12, 'years')).format('YYYY-MM-DD');
                                    }
                                    else {
                                        maxdob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-14, 'days')).format('YYYY-MM-DD');
                                        mindob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-2, 'years')).add(1, 'days')).format('YYYY-MM-DD');
                                    }
                                    element.mindob = mindob;
                                    element.maxdob = maxdob;
                                });
                                if (element.gender) {
                                    this.checkInput(element, 1, false);
                                }
                                if (element.name) {
                                    this.checkInput(element, 2, false);
                                }
                                if (element.dateofbirth) {
                                    this.checkInput(element, 3, false);
                                }
                                if (this.isExtenal && this.showLotusPoint) {
                                    if (element.country) {
                                        this.checkInput(element, 4, false);
                                    }
                                    if (element.passport) {
                                        this.checkInput(element, 5, false);
                                    }
                                    if (element.passportCountry) {
                                        this.checkInput(element, 6, false);
                                    }
                                    if (element.passportExpireDate) {
                                        this.checkInput(element, 7, false);
                                    }
                                }
                            }
                        }
                    }
                });
            }
        });
    }
    changegender(event, item) {
        if (event.detail.value) {
            item.gender = event.detail.value == "Ông" ? 1 : (event.detail.value == "Bà" ? 2 : (event.detail.value == "Bé trai" ? 1 : 2));
            item.genderdisplay = event.detail.value;
        }
    }
    setAdultProperty() {
        var se = this;
        if (se.adults && se.adults.length > 0) {
            let itema = se.adults[0];
            if (!itema.name) {
                itema.name = se.hoten ? se.hoten : (se.email ? se.email : '');
                if (se.gender) {
                    itema.gender = (se.gender == 1 || se.gender.toLowerCase().indexOf('Ông') != -1 || se.gender.toLowerCase().indexOf('Nam') != -1 || se.gender.toLowerCase().indexOf('m') != -1) ? 1 : 2;
                    itema.genderdisplay = (se.gender == 1 || se.gender.toLowerCase().indexOf('ông') != -1 || se.gender.toLowerCase().indexOf('nam') != -1 || se.gender.toLowerCase().indexOf('m') != -1) ? 'Ông' : 'Bà';
                }
            }
        }
    }
    loadUserInfo() {
        var se = this;
        se.zone.run(() => {
            se.storage.get('jti').then(jti => {
                if (jti) {
                    se.jti = jti;
                    se.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetListName?memberid=' + jti, {}, {}, 'flightadddetails', 'GetListName').then((data) => {
                        if (data && data.length > 0) {
                            this.maxAgeOfChild = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY').toString();
                            let mindob = '2007', maxdob = '2020';
                            let amindob = '1900', amaxdob = new Date().getFullYear() - 12, maxepdate = 2100;
                            let departdate = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.checkInDate);
                            for (let index = 0; index < data.length; index++) {
                                const element = data[index];
                                let checkAdult = true;
                                if (element.dateOfBirth) {
                                    checkAdult = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).diff(element.dateOfBirth, 'months') > 144;
                                }
                                if (checkAdult) {
                                    let item = { id: index + 1, name: element.fullName, subName: '', gender: element.gender ? element.gender : 1,
                                        genderdisplay: element.gender == 1 ? 'Ông' : 'Bà',
                                        airlineMemberCode: element.airlineMemberCode && this.showLotusPoint ? element.airlineMemberCode : '',
                                        airlineCardCode: element.airlineCardCode && this.showLotusPoint ? element.airlineCardCode : '',
                                        dateofbirth: element.dateOfBirth ? element.dateOfBirth : '', mindob: amindob, maxdob: amaxdob, isChild: false,
                                        maxepdate: maxepdate,
                                        country: '',
                                        passport: '',
                                        passportCountry: '',
                                        passportExpireDate: '', errorName: false };
                                    if (se.isExtenal) {
                                        item = { id: index + 1, name: element.fullName, subName: '', gender: element.gender ? element.gender : 1,
                                            genderdisplay: element.gender == 1 ? 'Ông' : 'Bà',
                                            airlineMemberCode: element.airlineMemberCode && this.showLotusPoint ? element.airlineMemberCode : '',
                                            airlineCardCode: element.airlineCardCode && this.showLotusPoint ? element.airlineCardCode : '',
                                            dateofbirth: element.dateOfBirth ? element.dateOfBirth : '', mindob: amindob, maxdob: amaxdob, isChild: false,
                                            maxepdate: maxepdate,
                                            country: element.nationality ? element.nationality : '',
                                            passport: element.passportNumber ? element.passportNumber : '',
                                            passportCountry: element.passportIssueCountry ? element.passportIssueCountry : '',
                                            passportExpireDate: element.passportExpired ? element.passportExpired : '', errorName: false };
                                    }
                                    let isexist = se.listPaxSuggestByMemberId.some(r => r.name == element.name);
                                    if (!isexist) {
                                        se.listPaxSuggestByMemberId.push(item);
                                    }
                                }
                                else {
                                    let isInfant = moment__WEBPACK_IMPORTED_MODULE_7__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(element.dateOfBirth), 'month') < 24;
                                    if (isInfant) {
                                        maxdob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-14, 'days')).format('YYYY-MM-DD');
                                        mindob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-2, 'years')).add(1, 'days')).format('YYYY-MM-DD');
                                    }
                                    else {
                                        maxdob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-2, 'years')).add(-1, 'days')).format('YYYY-MM-DD');
                                        mindob = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(departdate).add(-12, 'years')).format('YYYY-MM-DD');
                                    }
                                    let itemchild = { id: index + 1, name: element.fullName, subName: '', gender: element.gender ? element.gender : 1,
                                        genderdisplay: element.gender == 1 ? 'Bé trai' : 'Bé gái',
                                        airlineMemberCode: element.airlineMemberCode && this.showLotusPoint ? element.airlineMemberCode : '',
                                        airlineCardCode: element.airlineCardCode && this.showLotusPoint ? element.airlineCardCode : '',
                                        dateofbirth: element.dateOfBirth ? element.dateOfBirth : '', mindob: mindob, maxdob: maxdob, isChild: true, isInfant: isInfant,
                                        country: '',
                                        passport: '',
                                        passportCountry: '',
                                        passportExpireDate: '',
                                        maxepdate: maxepdate,
                                        errorName: false };
                                    if (se.isExtenal) {
                                        itemchild = { id: index + 1, name: element.fullName, subName: '', gender: element.gender ? element.gender : 1,
                                            genderdisplay: element.gender == 1 ? 'Bé trai' : 'Bé gái',
                                            airlineMemberCode: element.airlineMemberCode && this.showLotusPoint ? element.airlineMemberCode : '',
                                            airlineCardCode: element.airlineCardCode && this.showLotusPoint ? element.airlineCardCode : '',
                                            dateofbirth: element.dateOfBirth ? element.dateOfBirth : '', mindob: mindob, maxdob: maxdob, isChild: true, isInfant: isInfant,
                                            country: element.nationality ? element.nationality : '',
                                            passport: element.passportNumber ? element.passportNumber : '',
                                            passportCountry: element.passportIssueCountry ? element.passportIssueCountry : '',
                                            passportExpireDate: element.passportExpired ? element.passportExpired : '',
                                            maxepdate: maxepdate,
                                            errorName: false };
                                    }
                                    let isexist = se.listPaxSuggestByMemberId.some(r => r.name == element.name);
                                    if (!isexist) {
                                        se.listPaxSuggestByMemberId.push(itemchild);
                                    }
                                }
                            }
                        }
                    });
                }
            });
            if (!se.hoten) {
                if (se._flightService.itemFlightCache.hotenstep2) {
                    se.hoten = se._flightService.itemFlightCache.hotenstep2;
                }
                else {
                    se.storage.get('username').then(username => {
                        se.hoten = username;
                    });
                    se.storage.get('infocus').then(infocus => {
                        if (infocus) {
                            if (infocus.ho && infocus.ten) {
                                se.hoten = infocus.ho + ' ' + infocus.ten;
                            }
                            else {
                                if (infocus.ho) {
                                    se.hoten = infocus.ho;
                                }
                                else if (infocus.ten) {
                                    se.hoten = infocus.ten;
                                }
                                else {
                                    se.hoten = '';
                                }
                            }
                            if (infocus.phone) {
                                se.sodienthoai = infocus.phone;
                                se.ischeckedit = false;
                            }
                            if (infocus.gender) {
                                se.gender = infocus.gender;
                            }
                        }
                        else {
                            se.ischeckedit = false;
                        }
                    });
                }
            }
            if (se._flightService.itemFlightCache.sodienthoaistep2) {
                se.sodienthoai = se._flightService.itemFlightCache.sodienthoaistep2;
            }
            else {
                se.storage.get('infocus').then(infocus => {
                    if (infocus) {
                        if (infocus.phone) {
                            se.sodienthoai = infocus.phone;
                            se.ischeckedit = false;
                        }
                    }
                    else {
                        se.ischeckedit = false;
                    }
                });
            }
            if (se._flightService.itemFlightCache.emailstep2) {
                se.email = se._flightService.itemFlightCache.emailstep2;
            }
            else {
                se.storage.get('email').then(email => {
                    if (email) {
                        se.email = email;
                    }
                });
            }
            setTimeout(() => {
                se.setAdultProperty();
            }, 200);
            se.storage.get('auth_token').then(auth_token => {
                se.loginuser = auth_token;
            });
            se.GetUserInfo();
        });
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.ischeck = false;
                                var corpInfomations = data.corpInfomations[0];
                                if (corpInfomations) {
                                    se.companyname = corpInfomations.legalName;
                                    se.address = corpInfomations.address;
                                    se.tax = corpInfomations.taxCode;
                                    se._flightService.itemFlightCache.companyname = corpInfomations.legalName;
                                    se._flightService.itemFlightCache.address = corpInfomations.address;
                                    se._flightService.itemFlightCache.tax = corpInfomations.taxCode;
                                    se.ischeck = true;
                                }
                                else {
                                    se.storage.get('orderflight').then(order => {
                                        if (order) {
                                            se.companyname = order.companyname;
                                            se.address = order.address;
                                            se.tax = order.tax;
                                            se.addressorder = order.addressorder;
                                            se.hotenhddt = order.hotenhddt;
                                            se.emailhddt = order.emailhddt;
                                            se.ishideNameMail = order.ishideNameMail;
                                            se._flightService.itemFlightCache.companyname = order.companyname;
                                            se._flightService.itemFlightCache.address = order.address;
                                            se._flightService.itemFlightCache.tax = order.tax;
                                            se.ischeck = true;
                                        }
                                        else {
                                            se.ischeck = false;
                                            se._flightService.itemFlightCache.companyname = '';
                                            se._flightService.itemFlightCache.address = '';
                                            se._flightService.itemFlightCache.tax = '';
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            se.storage.get('orderflight').then(order => {
                                if (order) {
                                    se.companyname = order.companyname;
                                    se.address = order.address;
                                    se.tax = order.tax;
                                    se.addressorder = order.addressorder;
                                    se.hotenhddt = order.hotenhddt;
                                    se.emailhddt = order.emailhddt;
                                    se.ishideNameMail = order.ishideNameMail;
                                    se._flightService.itemFlightCache.companyname = order.companyname;
                                    se._flightService.itemFlightCache.address = order.address;
                                    se._flightService.itemFlightCache.tax = order.tax;
                                    se.ischeck = true;
                                }
                                else {
                                    se.ischeck = false;
                                    se._flightService.itemFlightCache.companyname = '';
                                    se._flightService.itemFlightCache.address = '';
                                    se._flightService.itemFlightCache.tax = '';
                                }
                            });
                        }
                    }
                });
            }
        });
    }
    goback() {
        if (this.activeStep == 1) {
            this.resetLuggage();
            this.navCtrl.navigateBack('/flightaddservice');
        }
        else {
            this._flightService.itemFlightCache.hotenstep2 = this.hoten;
            this._flightService.itemFlightCache.sodienthoaistep2 = this.sodienthoai;
            this._flightService.itemFlightCache.emailstep2 = this.email;
            this.activeStep = 1;
        }
    }
    resetLuggage() {
        let data = this._flightService.itemFlightCache;
        if (data.departFlight.airLineLuggage && data.departFlight.airLineLuggage > 0) {
            data.departFlight.airLineLuggage.forEach((item) => {
                item.checkquantity = 0;
            });
        }
        if (data.returnFlight && data.returnFlight.airLineLuggage && data.returnFlight.airLineLuggage.length > 0) {
            data.returnFlight.airLineLuggage.forEach((item) => {
                item.checkquantity = 0;
            });
        }
        if (data.departLuggage && data.departLuggage.length > 0) {
            data.departLuggage.forEach((item) => {
                item.checkquantity = 0;
            });
        }
        if (data.returnLuggage && data.returnLuggage.length > 0) {
            data.returnLuggage.forEach((item) => {
                item.checkquantity = 0;
            });
        }
    }
    textchangehoten(item) {
    }
    showPriceDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _flightpricedetail_flightpricedetail_page__WEBPACK_IMPORTED_MODULE_8__["FlightpricedetailPage"],
            });
            modal.present();
        });
    }
    checkValidInput() {
        var se = this;
        return new Promise((resolve, reject) => {
            if (se.adults && se.adults.length > 0) {
                for (let index = 0; index < se.adults.length; index++) {
                    const elementAdult = se.adults[index];
                    elementAdult.errorName = false;
                    elementAdult.errorGender = false;
                    elementAdult.errorDateofbirth = false;
                    elementAdult.errorCountry = false;
                    elementAdult.errorPassport = false;
                    elementAdult.errorPassportCountry = false;
                    elementAdult.errorPassportExpireDate = false;
                    elementAdult.errorInfo = false;
                    elementAdult.textErrorGender = '';
                    elementAdult.textErrorName = '';
                    elementAdult.textErrorDateofbirth = '';
                    elementAdult.textErrorCountry = '';
                    elementAdult.textErrorPassport = '';
                    elementAdult.textErrorPassportCountry = '';
                    elementAdult.textErrorPassportExpireDate = '';
                    elementAdult.textErrorInfo = '';
                    if (!elementAdult.genderdisplay && !elementAdult.name) {
                        elementAdult.errorInfo = !elementAdult.errorInfo;
                        elementAdult.textErrorInfo = "Vui lòng nhập thông tin Người lớn " + (index + 1);
                        resolve(false);
                    }
                    if (!elementAdult.genderdisplay) {
                        elementAdult.errorGender = !elementAdult.errorGender;
                        elementAdult.textErrorGender = "Vui lòng nhập danh xưng Người lớn " + (index + 1);
                        resolve(false);
                    }
                    else if (!elementAdult.name) {
                        elementAdult.errorName = !elementAdult.errorName;
                        elementAdult.textErrorName = "Vui lòng nhập họ tên Người lớn " + (index + 1);
                        resolve(false);
                    }
                    else if (elementAdult.name) {
                        if (!se.hasWhiteSpace(elementAdult.name.trim()) || !se.validateNameNotContainNumber(elementAdult.name.trim()) || !se.validateNameNotContainExceptionChar(elementAdult.name.trim())) {
                            elementAdult.errorName = !elementAdult.errorName;
                            elementAdult.textErrorName = "Họ và tên Người lớn " + (index + 1) + " không hợp lệ. Vui lòng kiểm tra lại!";
                            resolve(false);
                        }
                        else if (se.isExtenal && se.showLotusPoint) {
                            if (!elementAdult.dateofbirth) {
                                elementAdult.errorDateofbirth = true;
                                elementAdult.textErrorDateofbirth = "Vui lòng nhập ngày sinh Người lớn " + (elementAdult.id);
                                resolve(false);
                            }
                            else if (elementAdult.dateofbirth) {
                                let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).diff(elementAdult.dateofbirth, 'months');
                                if (diffdate < 144) {
                                    elementAdult.errorDateofbirth = true;
                                    elementAdult.textErrorDateofbirth = "Vui lòng nhập ngày sinh Người lớn " + (elementAdult.id) + " trên 12 tuổi";
                                    resolve(false);
                                }
                                else if (!elementAdult.country) {
                                    elementAdult.errorCountry = true;
                                    elementAdult.textErrorCountry = "Vui lòng nhập quốc tịch Người lớn " + (elementAdult.id);
                                    resolve(false);
                                }
                                else if (!elementAdult.passport) {
                                    elementAdult.errorPassport = true;
                                    elementAdult.textErrorPassport = "Vui lòng nhập hộ chiếu Người lớn " + (elementAdult.id);
                                    resolve(false);
                                }
                                else if (elementAdult.passport) {
                                    if (!se.validatePassport(elementAdult.passport)) {
                                        elementAdult.errorPassport = true;
                                        elementAdult.textErrorPassport = "Vui lòng nhập hộ chiếu Người lớn không chứa ký tự đặc biệt";
                                        resolve(false);
                                    }
                                    else if (!elementAdult.passportCountry) {
                                        elementAdult.errorPassportCountry = true;
                                        elementAdult.textErrorPassportCountry = "Vui lòng nhập quốc gia cấp Người lớn " + (elementAdult.id);
                                        resolve(false);
                                    }
                                    else if (!elementAdult.passportExpireDate) {
                                        elementAdult.errorPassportExpireDate = true;
                                        elementAdult.textErrorPassportExpireDate = "Vui lòng nhập ngày hết hạn Người lớn " + (elementAdult.id);
                                        resolve(false);
                                    }
                                    else if (elementAdult.passportExpireDate) {
                                        let departdate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                                        let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(elementAdult.passportExpireDate).format('YYYY-MM-DD')).diff(moment__WEBPACK_IMPORTED_MODULE_7__(departdate), 'days');
                                        if (diffdate < 0) {
                                            elementAdult.errorPassportExpireDate = true;
                                            elementAdult.textErrorPassportExpireDate = "Hộ chiếu Người lớn " + (elementAdult.id) + " đã hết hạn";
                                            resolve(false);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (se.childs && se.childs.length > 0) {
                for (let index = 0; index < se.childs.length; index++) {
                    const elementChild = se.childs[index];
                    elementChild.errorName = false;
                    elementChild.errorGender = false;
                    elementChild.errorDateofbirth = false;
                    elementChild.errorCountry = false;
                    elementChild.errorPassport = false;
                    elementChild.errorPassportCountry = false;
                    elementChild.errorPassportExpireDate = false;
                    elementChild.errorInfo = false;
                    elementChild.textErrorGender = '';
                    elementChild.textErrorName = '';
                    elementChild.textErrorDateofbirth = '';
                    elementChild.textErrorCountry = '';
                    elementChild.textErrorPassport = '';
                    elementChild.textErrorPassportCountry = '';
                    elementChild.textErrorPassportExpireDate = '';
                    elementChild.textErrorInfo = '';
                    let departdate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                    if (!elementChild.genderdisplay && !elementChild.name) {
                        resolve(false);
                    }
                    if (!elementChild.isInfant) {
                        if (!elementChild.genderdisplay) {
                            resolve(false);
                        }
                        else if (!elementChild.name) {
                            resolve(false);
                        }
                        else if (elementChild.name) {
                            if (!se.hasWhiteSpace(elementChild.name.trim()) || !se.validateNameNotContainNumber(elementChild.name.trim()) || !se.validateNameNotContainExceptionChar(elementChild.name.trim())) {
                                resolve(false);
                            }
                            if (!elementChild.dateofbirth) {
                                resolve(false);
                            }
                            let departdatestring = moment__WEBPACK_IMPORTED_MODULE_7__(departdate).format('DD-MM-YYYY');
                            if (!elementChild.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.dateofbirth), 'months') < 24) {
                                resolve(false);
                            }
                            if (!elementChild.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.dateofbirth), 'months') >= 144) {
                                resolve(false);
                            }
                        }
                    }
                    else {
                        let idx = elementChild.iddisplay;
                        let departdatestring = moment__WEBPACK_IMPORTED_MODULE_7__(departdate).format('DD-MM-YYYY');
                        if (!elementChild.genderdisplay) {
                            resolve(false);
                        }
                        else if (!elementChild.name) {
                            resolve(false);
                            return;
                        }
                        else if (elementChild.name) {
                            var checktext = se.hasWhiteSpace(elementChild.name.trim());
                            if (!checktext || !se.validateNameNotContainNumber(elementChild.name) || !se.validateNameNotContainExceptionChar(elementChild.name)) {
                                resolve(false);
                            }
                        }
                        if (!elementChild.dateofbirth) {
                            resolve(false);
                        }
                        if (elementChild.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.dateofbirth), 'days') < 14) {
                            resolve(false);
                        }
                        if (elementChild.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(departdate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.dateofbirth), 'months') >= 24) {
                            resolve(false);
                        }
                    }
                    if (se.isExtenal && se.showLotusPoint) {
                        if (!elementChild.dateofbirth) {
                            resolve(false);
                        }
                        else if (!elementChild.country) {
                            resolve(false);
                        }
                        else if (!elementChild.passport) {
                            resolve(false);
                        }
                        else if (elementChild.passport) {
                            if (!se.validatePassport(elementChild.passport)) {
                                resolve(false);
                            }
                            else if (!elementChild.passportCountry) {
                                resolve(false);
                            }
                            else if (!elementChild.passportExpireDate) {
                                resolve(false);
                            }
                            else if (elementChild.passportExpireDate) {
                                let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.passportExpireDate).format('YYYY-MM-DD')).diff(moment__WEBPACK_IMPORTED_MODULE_7__(departdate), 'days');
                                if (diffdate < 0) {
                                    resolve(false);
                                }
                            }
                        }
                    }
                }
            }
            resolve(true);
        });
    }
    confirm() {
        var se = this;
        se.checkchangeemail = false;
        se.hasinput = false;
        if (se.activeStep == 1) {
            if (se.adults && se.adults.length > 0) {
                for (let index = 0; index < se.adults.length; index++) {
                    const elementAdult = se.adults[index];
                    elementAdult.errorName = false;
                    elementAdult.errorGender = false;
                    elementAdult.errorDateofbirth = false;
                    elementAdult.errorCountry = false;
                    elementAdult.errorPassport = false;
                    elementAdult.errorPassportCountry = false;
                    elementAdult.errorPassportExpireDate = false;
                    elementAdult.errorInfo = false;
                    elementAdult.textErrorGender = '';
                    elementAdult.textErrorName = '';
                    elementAdult.textErrorDateofbirth = '';
                    elementAdult.textErrorCountry = '';
                    elementAdult.textErrorPassport = '';
                    elementAdult.textErrorPassportCountry = '';
                    elementAdult.textErrorPassportExpireDate = '';
                    elementAdult.textErrorInfo = '';
                    if (!elementAdult.genderdisplay && !elementAdult.name) {
                        elementAdult.errorInfo = !elementAdult.errorInfo;
                        elementAdult.textErrorInfo = "Vui lòng nhập thông tin Người lớn " + (index + 1);
                        return;
                    }
                    if (!elementAdult.genderdisplay) {
                        elementAdult.errorGender = !elementAdult.errorGender;
                        elementAdult.textErrorGender = "Vui lòng nhập danh xưng Người lớn " + (index + 1);
                        return;
                    }
                    else if (!elementAdult.name) {
                        elementAdult.errorName = !elementAdult.errorName;
                        elementAdult.textErrorName = "Vui lòng nhập họ tên Người lớn " + (index + 1);
                        return;
                    }
                    else if (elementAdult.name) {
                        if (!se.hasWhiteSpace(elementAdult.name.trim()) || !se.validateNameNotContainNumber(elementAdult.name.trim()) || !se.validateNameNotContainExceptionChar(elementAdult.name.trim())) {
                            elementAdult.errorName = !elementAdult.errorName;
                            elementAdult.textErrorName = "Họ và tên Người lớn " + (index + 1) + " không hợp lệ. Vui lòng kiểm tra lại!";
                            return;
                        }
                        else if (se.isExtenal && se.showLotusPoint) {
                            if (!elementAdult.dateofbirth) {
                                elementAdult.errorDateofbirth = true;
                                elementAdult.textErrorDateofbirth = "Vui lòng nhập ngày sinh Người lớn " + (elementAdult.id);
                                return;
                            }
                            else if (elementAdult.dateofbirth) {
                                let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).diff(elementAdult.dateofbirth, 'months');
                                if (diffdate < 144) {
                                    elementAdult.errorDateofbirth = true;
                                    elementAdult.textErrorDateofbirth = "Vui lòng nhập ngày sinh Người lớn " + (elementAdult.id) + " trên 12 tuổi";
                                    return;
                                }
                                else if (!elementAdult.country) {
                                    elementAdult.errorCountry = true;
                                    elementAdult.textErrorCountry = "Vui lòng nhập quốc tịch Người lớn " + (elementAdult.id);
                                    return;
                                }
                                else if (!elementAdult.passport) {
                                    elementAdult.errorPassport = true;
                                    elementAdult.textErrorPassport = "Vui lòng nhập hộ chiếu Người lớn " + (elementAdult.id);
                                    return;
                                }
                                else if (elementAdult.passport) {
                                    if (!se.validatePassport(elementAdult.passport)) {
                                        elementAdult.errorPassport = true;
                                        elementAdult.textErrorPassport = "Vui lòng nhập hộ chiếu Người lớn không chứa ký tự đặc biệt";
                                        return;
                                    }
                                    else if (!elementAdult.passportCountry) {
                                        elementAdult.errorPassportCountry = true;
                                        elementAdult.textErrorPassportCountry = "Vui lòng nhập quốc gia cấp Người lớn " + (elementAdult.id);
                                        return;
                                    }
                                    else if (!elementAdult.passportExpireDate) {
                                        elementAdult.errorPassportExpireDate = true;
                                        elementAdult.textErrorPassportExpireDate = "Vui lòng nhập ngày hết hạn Người lớn " + (elementAdult.id);
                                        return;
                                    }
                                    else if (elementAdult.passportExpireDate) {
                                        let returndate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                                        let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(elementAdult.passportExpireDate).format('YYYY-MM-DD')).diff(moment__WEBPACK_IMPORTED_MODULE_7__(returndate), 'days');
                                        if (diffdate < 0) {
                                            elementAdult.errorPassportExpireDate = true;
                                            elementAdult.textErrorPassportExpireDate = "Hộ chiếu Người lớn " + (elementAdult.id) + " đã hết hạn";
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                        else if (se._flightService.itemFlightCache.priceCathay > 0 && !se.isExtenal) {
                            if (!elementAdult.dateofbirth) {
                                elementAdult.errorDateofbirth = true;
                                elementAdult.textErrorDateofbirth = "Vui lòng nhập ngày sinh Người lớn " + (elementAdult.id);
                                return;
                            }
                            else {
                                let returndate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                                let dateofbirth = moment__WEBPACK_IMPORTED_MODULE_7__(elementAdult.dateofbirth).format('YYYY-MM-DD');
                                let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(dateofbirth, 'months');
                                if (diffdate < 144) {
                                    elementAdult.errorDateofbirth = true;
                                    elementAdult.textErrorDateofbirth = "Vui lòng nhập ngày sinh Người lớn " + (elementAdult.id) + " trên 12 tuổi";
                                    return;
                                }
                            }
                        }
                    }
                }
            }
            if (se.childs && se.childs.length > 0) {
                for (let index = 0; index < se.childs.length; index++) {
                    const elementChild = se.childs[index];
                    elementChild.errorName = false;
                    elementChild.errorGender = false;
                    elementChild.errorDateofbirth = false;
                    elementChild.errorCountry = false;
                    elementChild.errorPassport = false;
                    elementChild.errorPassportCountry = false;
                    elementChild.errorPassportExpireDate = false;
                    elementChild.errorInfo = false;
                    elementChild.textErrorGender = '';
                    elementChild.textErrorName = '';
                    elementChild.textErrorDateofbirth = '';
                    elementChild.textErrorCountry = '';
                    elementChild.textErrorPassport = '';
                    elementChild.textErrorPassportCountry = '';
                    elementChild.textErrorPassportExpireDate = '';
                    elementChild.textErrorInfo = '';
                    let departdatenew = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
                    let returndate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                    if (!elementChild.genderdisplay && !elementChild.name) {
                        elementChild.errorInfo = !elementChild.errorInfo;
                        elementChild.textErrorInfo = "Vui lòng nhập thông tin " + (!elementChild.isInfant ? "Trẻ em" : "Em bé") + " " + (!elementChild.isInfant ? elementChild.id : elementChild.iddisplay);
                        return;
                    }
                    if (!elementChild.isInfant) {
                        if (!elementChild.genderdisplay) {
                            elementChild.errorGender = true;
                            elementChild.textErrorGender = "Vui lòng nhập danh xưng Trẻ em " + (elementChild.id);
                            return;
                        }
                        else if (!elementChild.name) {
                            elementChild.errorName = true;
                            elementChild.textErrorName = "Vui lòng nhập họ tên Trẻ em " + (elementChild.id);
                            return;
                        }
                        else if (elementChild.name) {
                            if (!se.hasWhiteSpace(elementChild.name.trim()) || !se.validateNameNotContainNumber(elementChild.name.trim()) || !se.validateNameNotContainExceptionChar(elementChild.name.trim())) {
                                elementChild.errorName = !elementChild.errorName;
                                elementChild.textErrorName = "Họ và tên Trẻ em " + elementChild.id + " không hợp lệ. Vui lòng kiểm tra lại!";
                                return;
                            }
                            if (!elementChild.dateofbirth) {
                                elementChild.errorDateofbirth = true;
                                elementChild.textErrorDateofbirth = "Vui lòng nhập ngày sinh Trẻ em " + (elementChild.id);
                                return;
                            }
                            let returndatestring = moment__WEBPACK_IMPORTED_MODULE_7__(returndate).format('DD-MM-YYYY');
                            let departdatestringnew = moment__WEBPACK_IMPORTED_MODULE_7__(departdatenew).format('DD-MM-YYYY');
                            if (!elementChild.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.dateofbirth).format('YYYY-MM-DD'), 'months') < 24) {
                                elementChild.errorDateofbirth = true;
                                elementChild.textErrorDateofbirth = "Vui lòng nhập ngày sinh Trẻ em " + (elementChild.id) + " lớn hơn hoặc bằng 2 tuổi so với ngày về " + returndatestring;
                                return;
                            }
                            if (!elementChild.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.dateofbirth).format('YYYY-MM-DD'), 'months') >= 144) {
                                elementChild.errorDateofbirth = true;
                                elementChild.textErrorDateofbirth = "Vui lòng nhập ngày sinh Trẻ em " + (elementChild.id) + " không được lớn hơn 12 tuổi so với ngày về " + returndatestring;
                                return;
                            }
                        }
                    }
                    else {
                        let idx = elementChild.iddisplay;
                        let returndatestring = moment__WEBPACK_IMPORTED_MODULE_7__(returndate).format('DD-MM-YYYY');
                        if (!elementChild.genderdisplay) {
                            elementChild.errorGender = true;
                            elementChild.textErrorGender = "Vui lòng nhập danh xưng Em bé " + idx;
                            return;
                        }
                        else if (!elementChild.name) {
                            elementChild.errorName = true;
                            elementChild.textErrorName = "Vui lòng nhập họ tên Em bé " + idx;
                            return;
                        }
                        else if (elementChild.name) {
                            if (!se.hasWhiteSpace(elementChild.name.trim()) || !se.validateNameNotContainNumber(elementChild.name.trim()) || !se.validateNameNotContainExceptionChar(elementChild.name.trim())) {
                                elementChild.errorName = !elementChild.errorName;
                                elementChild.textErrorName = "Họ và tên Em bé " + idx + " không hợp lệ. Vui lòng kiểm tra lại!";
                                return;
                            }
                        }
                        if (!elementChild.dateofbirth) {
                            elementChild.errorDateofbirth = true;
                            elementChild.textErrorDateofbirth = "Vui lòng nhập ngày sinh Em bé " + idx;
                            return;
                        }
                        if (elementChild.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.dateofbirth).format('YYYY-MM-DD'), 'days') < 14) {
                            elementChild.errorDateofbirth = true;
                            elementChild.textErrorDateofbirth = "Vui lòng nhập ngày sinh Em bé " + idx + " lớn hơn 14 ngày tuổi so với ngày về " + returndatestring;
                            return;
                        }
                        if (elementChild.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.dateofbirth).format('YYYY-MM-DD'), 'months') >= 24) {
                            elementChild.errorDateofbirth = true;
                            elementChild.textErrorDateofbirth = "Vui lòng nhập ngày sinh Em bé " + idx + " không được lớn hơn 2 tuổi so với ngày về " + returndatestring;
                            return;
                        }
                    }
                    if (se.isExtenal && se.showLotusPoint) {
                        if (!elementChild.dateofbirth) {
                            elementChild.errorDateofbirth = true;
                            elementChild.textErrorDateofbirth = "Vui lòng nhập ngày sinh " + (!elementChild.isInfant ? "Trẻ em " : "Em bé ") + (!elementChild.isInfant ? elementChild.id : elementChild.iddisplay);
                            return;
                        }
                        else if (!elementChild.country) {
                            elementChild.errorCountry = true;
                            elementChild.textErrorCountry = "Vui lòng nhập quốc tịch " + (!elementChild.isInfant ? "Trẻ em " : "Em bé ") + (!elementChild.isInfant ? elementChild.id : elementChild.iddisplay);
                            return;
                        }
                        else if (!elementChild.passport) {
                            elementChild.errorPassport = true;
                            elementChild.textErrorPassport = "Vui lòng nhập hộ chiếu " + (!elementChild.isInfant ? "Trẻ em " : "Em bé ") + (!elementChild.isInfant ? elementChild.id : elementChild.iddisplay);
                            return;
                        }
                        else if (elementChild.passport) {
                            if (!se.validatePassport(elementChild.passport)) {
                                elementChild.errorPassport = true;
                                elementChild.textErrorPassport = "Vui lòng nhập hộ chiếu " + (!elementChild.isInfant ? "Trẻ em " : "Em bé ") + (!elementChild.isInfant ? elementChild.id : elementChild.iddisplay) + " không chứa ký tự đặc biệt";
                                return;
                            }
                            else if (!elementChild.passportCountry) {
                                elementChild.errorPassportCountry = true;
                                elementChild.textErrorPassportCountry = "Vui lòng nhập quốc gia cấp " + (!elementChild.isInfant ? "Trẻ em " : "Em bé ") + (!elementChild.isInfant ? elementChild.id : elementChild.iddisplay);
                                return;
                            }
                            else if (!elementChild.passportExpireDate) {
                                elementChild.errorPassportExpireDate = true;
                                elementChild.textErrorPassportExpireDate = "Vui lòng nhập ngày hết hạn " + (!elementChild.isInfant ? "Trẻ em " : "Em bé ") + (!elementChild.isInfant ? elementChild.id : elementChild.iddisplay);
                                return;
                            }
                            else if (elementChild.passportExpireDate) {
                                let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(elementChild.passportExpireDate).format('YYYY-MM-DD')).diff(moment__WEBPACK_IMPORTED_MODULE_7__(returndate).format('YYYY-MM-DD'), 'days');
                                if (diffdate < 0) {
                                    elementChild.errorPassportExpireDate = true;
                                    elementChild.textErrorPassportExpireDate = "Hộ chiếu " + (!elementChild.isInfant ? "Trẻ em " : "Em bé ") + (!elementChild.isInfant ? elementChild.id : elementChild.iddisplay) + " đã hết hạn";
                                    return;
                                }
                            }
                        }
                    }
                }
            }
            let itempax = [...se.adults];
            if (se.childs && se.childs.length > 0) {
                itempax = [...itempax, ...se.childs];
            }
            se.checkDuplicateItem(itempax).then((itemcheck) => {
                if (itemcheck && itemcheck.length > 0) {
                    se._flightService.itemFlightCache.duplicateItem = itemcheck;
                    se.showAlertDuplicateName();
                    return;
                }
                else {
                    se.checkValidName(itempax).then((itemcheckname) => {
                        if (itemcheckname) {
                            se.showAlertInvalidName(itemcheckname);
                            return;
                        }
                        else {
                            se.checkValidFirstNameAndSubName(itempax).then((itemname) => {
                                if (itemname) {
                                    se.showAlertInvalidFirtNameAndLastName(itemname);
                                    return;
                                }
                                else {
                                    se.checkValidDuplicateFirstNameAndSubName(itempax).then((itemdup) => {
                                        if (itemdup) {
                                            se.showAlertDuplicateFirtNameAndLastName(itemdup);
                                            return;
                                        }
                                        else {
                                            se.checkInValidSubNameBeforeNextStep(itempax).then((iteminvalid) => {
                                                if (!iteminvalid) {
                                                    se.gonextstep();
                                                }
                                                else {
                                                    se.showAlertInvalidSubName(iteminvalid);
                                                    return;
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
        else {
            se.emailinvalid = false;
            se.hoteninvalid = false;
            se.sodienthoaiinvalid = false;
            se.hasinput = true;
            if (!se.hoten) {
                return;
            }
            else if (se.hoten) {
                var checktext = se.hasWhiteSpace(se.hoten.trim());
                if (!checktext || !se.validateNameNotContainNumber(se.hoten) || !se.validateNameNotContainExceptionChar(se.hoten)) {
                    se.hoteninvalid = true;
                    return;
                }
            }
            if (!se.sodienthoai) {
                return;
            }
            else if (se.sodienthoai && se.gf.checkPhoneInValidFormat(se.sodienthoai)) {
                se.sodienthoaiinvalid = true;
                return;
            }
            if (!se.email) {
                return;
            }
            else if (se.email && (!se.validateEmail(se.email) || !se.gf.checkUnicodeCharactor(se.email) || se.gf.checkEmailInvalidFormat(se.email))) {
                se.emailinvalid = true;
                return;
            }
            if (se.ischeck) {
                if (se.companyname && se.address && se.tax) {
                    se.Invoice = true;
                    if (!se.ishideNameMail) {
                        if (se.emailhddt && se.hotenhddt) {
                            if (!se.validateEmail(se.emailhddt) || !se.gf.checkUnicodeCharactor(se.emailhddt)) {
                                se.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                                return;
                            }
                            else {
                                se.addressorder = se.emailhddt;
                            }
                        }
                        else {
                            alert("Xin vui lòng nhập đầy đủ thông tin xuất hóa đơn");
                            return;
                        }
                    }
                    else {
                        se.hotenhddt = se.hoten;
                        se.addressorder = se.email;
                    }
                    se._flightService.itemFlightCache.Invoice = true;
                    se.storage.set("InvoiceFlight", true);
                    var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder, ishideNameMail: this.ishideNameMail, hotenhddt: this.hotenhddt, emailhddt: this.emailhddt };
                    se.storage.set("orderflight", order1);
                }
                else {
                    se.gf.showToastWarning("Xin vui lòng nhập đầy đủ thông tin xuất hóa đơn");
                    return false;
                }
            }
            else {
                se.Invoice = false;
                se._flightService.itemFlightCache.Invoice = false;
                se.storage.set("InvoiceFlight", false);
                se.companyname = "";
                se.address = "";
                se.tax = "";
            }
            if (se.email) {
                var checkappleemail = (se.email.includes("appleid") || se.email.includes('vivumember.info'));
                if (checkappleemail) {
                    se.checkchangeemail = true;
                    se.showConfirmEmail();
                }
            }
            se.storage.set('email', se.email);
            se._flightService.itemFlightCache.phone = se.sodienthoai;
            se._flightService.itemFlightCache.email = se.email;
            se._flightService.itemFlightCache.hoten = se.hoten;
            if (se.ischeck) {
                se._flightService.itemFlightCache.companyname = se.companyname;
                se._flightService.itemFlightCache.address = se.address;
                se._flightService.itemFlightCache.tax = se.tax;
            }
            if (se._flightService.itemFlightCache.backtochoiceseat) {
                se.showAlertChoiceSeat();
            }
            else {
                if (!se.checkchangeemail) {
                    se.gotopaymentpage();
                }
            }
        }
    }
    confirmBeforeGoToPaymentPage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let alert = yield this.modalCtrl.create({
                component: _flightconfirmbookingdetail_flightconfirmbookingdetail_page__WEBPACK_IMPORTED_MODULE_16__["flightConfirmBookingDetailPage"],
                cssClass: "cls-modal-confirmbookingdetail",
                animated: true,
            });
            alert.present();
            const event = yield alert.onDidDismiss();
            const date = event.data;
            if (event.data) {
                se.gotopaymentpage();
            }
        });
    }
    checkInputUserInfo(type) {
        var se = this;
        se.hasinput = true;
        if (type == 1) {
            if (!se.hoten || !se.validateNameNotContainNumber(se.hoten) || !se.hasWhiteSpace(se.hoten)) {
                se.hoteninvalid = true;
            }
            else {
                se.hoteninvalid = false;
            }
            se.checkValidSubName(se.hoten).then((check) => {
                if (!check) {
                    se.subnameinvalid = true;
                }
                else {
                    se.subnameinvalid = false;
                }
            });
        }
        if (type == 2) {
            if (se.gf.checkPhoneInValidFormat(se.sodienthoai)) {
                se.sodienthoaiinvalid = true;
            }
            else {
                se.sodienthoaiinvalid = false;
            }
        }
        if (type == 3) {
            let strcheck = se.email;
            if (se.email.indexOf('@') != -1) {
                strcheck = se.email.split('@')[1];
            }
            if (se.gf.checkEmailInvalidFormat(strcheck) || !se.validateEmail(se.email) || !se.gf.checkUnicodeCharactor(se.email)) {
                se.emailinvalid = true;
            }
            else {
                se.emailinvalid = false;
            }
        }
    }
    checkInput(inputcheck, type, isadult, event) {
        var se = this;
        if (isadult) {
            if (type == 1) {
                if (!inputcheck.genderdisplay && !inputcheck.name) {
                    inputcheck.errorInfo = true;
                    inputcheck.textErrorInfo = "Vui lòng nhập thông tin Người lớn " + (inputcheck.id);
                    return;
                }
                else {
                    inputcheck.errorInfo = false;
                    inputcheck.textErrorInfo = "";
                }
                if (!inputcheck.genderdisplay) {
                    inputcheck.errorGender = true;
                    inputcheck.textErrorGender = "Vui lòng nhập danh xưng Người lớn " + (inputcheck.id);
                    return;
                }
                else {
                    inputcheck.errorGender = false;
                    inputcheck.textErrorGender = "";
                    inputcheck.errorInfo = false;
                    inputcheck.textErrorInfo = "";
                }
            }
            if (type == 2) {
                if (!inputcheck.name) {
                    inputcheck.errorName = true;
                    inputcheck.textErrorName = "Vui lòng nhập họ tên Người lớn " + (inputcheck.id);
                    return;
                }
                else if (inputcheck.name) {
                    if (!se.hasWhiteSpace(inputcheck.name.trim()) || !se.validateNameNotContainNumber(inputcheck.name.trim()) || !se.validateNameNotContainExceptionChar(inputcheck.name.trim())) {
                        inputcheck.errorName = true;
                        inputcheck.textErrorName = "Họ và tên Người lớn " + (inputcheck.id) + " không hợp lệ. Vui lòng kiểm tra lại!";
                        return;
                    }
                    else {
                        inputcheck.errorName = false;
                        inputcheck.textErrorName = "";
                        inputcheck.errorInfo = false;
                        inputcheck.textErrorInfo = "";
                    }
                    se.checkValidSubName(inputcheck.name).then((datacheck) => {
                        if (!datacheck) {
                            inputcheck.errorSubName = true;
                            inputcheck.textErrorSubName = "Không nằm trong danh sách họ phổ biến. Vui lòng kiểm tra lại!";
                        }
                        else {
                            inputcheck.errorSubName = false;
                            inputcheck.textErrorSubName = "";
                        }
                    });
                }
            }
            if (se.isExtenal && se.showLotusPoint) {
                if (type == 3) {
                    if (!inputcheck.dateofbirth) {
                        inputcheck.errorDateofbirth = true;
                        inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Người lớn " + (inputcheck.id);
                        return;
                    }
                    else {
                        inputcheck.errorDateofbirth = false;
                        inputcheck.textErrorDateofbirth = "";
                    }
                    if (inputcheck.dateofbirth) {
                        let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).diff(inputcheck.dateofbirth, 'months');
                        if (diffdate < 144) {
                            inputcheck.errorDateofbirth = true;
                            inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Người lớn " + (inputcheck.id) + " trên 12 tuổi";
                            return;
                        }
                    }
                }
                if (type == 4) {
                    if (!inputcheck.country) {
                        inputcheck.errorCountry = true;
                        inputcheck.showSelectCountry = false;
                        inputcheck.textErrorCountry = "Vui lòng nhập quốc tịch Người lớn " + (inputcheck.id);
                        return;
                    }
                    else {
                        inputcheck.errorCountry = false;
                        inputcheck.textErrorCountry = "";
                    }
                }
                if (type == 5) {
                    if (!inputcheck.passport) {
                        inputcheck.errorPassport = true;
                        inputcheck.textErrorPassport = "Vui lòng nhập hộ chiếu Người lớn " + (inputcheck.id);
                        return;
                    }
                    else {
                        if (!se.validatePassport(inputcheck.passport)) {
                            inputcheck.errorPassport = true;
                            inputcheck.textErrorPassport = "Vui lòng nhập hộ chiếu Người lớn không chứa ký tự đặc biệt";
                            return;
                        }
                        else {
                            inputcheck.errorPassport = false;
                            inputcheck.textErrorPassport = "";
                        }
                    }
                }
                if (type == 6) {
                    if (!inputcheck.passportCountry) {
                        inputcheck.errorPassportCountry = true;
                        inputcheck.showSelectPassportCountry = false;
                        inputcheck.textErrorPassportCountry = "Vui lòng nhập quốc gia cấp Người lớn " + (inputcheck.id);
                        return;
                    }
                    else {
                        inputcheck.errorPassportCountry = false;
                        inputcheck.textErrorPassportCountry = "";
                    }
                }
                if (type == 7) {
                    if (!inputcheck.passportExpireDate) {
                        inputcheck.errorPassportExpireDate = true;
                        inputcheck.textErrorPassportExpireDate = "Vui lòng nhập ngày hết hạn Người lớn " + (inputcheck.id);
                        return;
                    }
                    else {
                        let departdate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                        let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.passportExpireDate).format('YYYY-MM-DD')).diff(moment__WEBPACK_IMPORTED_MODULE_7__(departdate), 'days');
                        if (diffdate < 0) {
                            inputcheck.errorPassportExpireDate = true;
                            inputcheck.textErrorPassportExpireDate = "Hộ chiếu Người lớn " + (inputcheck.id) + " đã hết hạn";
                            return;
                        }
                        else {
                            inputcheck.errorPassportExpireDate = false;
                            inputcheck.textErrorPassportExpireDate = "";
                        }
                    }
                }
            }
        }
        else {
            if (type == 1) {
                if (!inputcheck.genderdisplay && !inputcheck.name) {
                    inputcheck.errorInfo = !inputcheck.errorInfo;
                    inputcheck.textErrorInfo = "Vui lòng nhập thông tin " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                    return;
                }
                else {
                    inputcheck.errorInfo = false;
                    inputcheck.textErrorInfo = "";
                }
                if (!inputcheck.genderdisplay) {
                    inputcheck.errorGender = !inputcheck.errorGender;
                    inputcheck.textErrorGender = "Vui lòng nhập danh xưng " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                    return;
                }
                else {
                    inputcheck.errorGender = false;
                    inputcheck.textErrorGender = "";
                }
            }
            if (type == 2) {
                if (!inputcheck.name) {
                    inputcheck.errorName = true;
                    inputcheck.textErrorName = "Vui lòng nhập họ tên " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                    return;
                }
                else if (inputcheck.name) {
                    if (!se.hasWhiteSpace(inputcheck.name.trim()) || !se.validateNameNotContainNumber(inputcheck.name.trim()) || !se.validateNameNotContainExceptionChar(inputcheck.name.trim())) {
                        inputcheck.errorName = true;
                        inputcheck.textErrorName = "Họ và tên " + (!inputcheck.isInfant ? "Trẻ em " : "Em bé ") + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " không hợp lệ. Vui lòng kiểm tra lại!";
                        return;
                    }
                    else {
                        inputcheck.errorName = false;
                        inputcheck.textErrorName = "";
                        inputcheck.errorInfo = false;
                        inputcheck.textErrorInfo = "";
                    }
                    se.checkValidSubName(inputcheck.name).then((datacheck) => {
                        if (!datacheck) {
                            inputcheck.errorSubName = true;
                            inputcheck.textErrorSubName = "Không nằm trong danh sách họ phổ biến. Vui lòng kiểm tra lại!";
                        }
                        else {
                            inputcheck.errorSubName = false;
                            inputcheck.textErrorSubName = "";
                        }
                    });
                }
            }
            if (type == 3) {
                if (!inputcheck.dateofbirth) {
                    inputcheck.errorDateofbirth = true;
                    inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                    return;
                }
                else {
                    inputcheck.errorDateofbirth = false;
                    inputcheck.textErrorDateofbirth = "";
                }
                if (inputcheck.dateofbirth) {
                    let returndate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                    let returndatestring = moment__WEBPACK_IMPORTED_MODULE_7__(returndate).format('DD-MM-YYYY');
                    if (!inputcheck.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.dateofbirth).format('YYYY-MM-DD'), 'months') < 24) {
                        inputcheck.errorDateofbirth = !inputcheck.errorDateofbirth;
                        inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Trẻ em " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " lớn hơn hoặc bằng 2 tuổi so với ngày về " + returndatestring;
                        return;
                    }
                    else {
                        inputcheck.errorDateofbirth = false;
                        inputcheck.textErrorDateofbirth = "";
                    }
                    if (!inputcheck.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.dateofbirth).format('YYYY-MM-DD'), 'months') >= 144) {
                        inputcheck.errorDateofbirth = !inputcheck.errorDateofbirth;
                        inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Trẻ em " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " không được lớn hơn 12 tuổi so với ngày về " + returndatestring;
                        return;
                    }
                    else {
                        inputcheck.errorDateofbirth = false;
                        inputcheck.textErrorDateofbirth = "";
                    }
                    if (inputcheck.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.dateofbirth).format('YYYY-MM-DD'), 'days') < 14) {
                        inputcheck.errorDateofbirth = !inputcheck.errorDateofbirth;
                        inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Em bé " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " lớn hơn 14 ngày tuổi so với ngày về " + returndatestring;
                        return;
                    }
                    else {
                        inputcheck.errorDateofbirth = false;
                        inputcheck.textErrorDateofbirth = "";
                    }
                    if (inputcheck.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.dateofbirth), 'months') >= 24) {
                        inputcheck.errorDateofbirth = !inputcheck.errorDateofbirth;
                        inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Em bé " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " không được lớn hơn 2 tuổi so với ngày về " + returndatestring;
                        return;
                    }
                    else {
                        inputcheck.errorDateofbirth = false;
                        inputcheck.textErrorDateofbirth = "";
                    }
                }
            }
            if (se.isExtenal && se.showLotusPoint) {
                if (type == 3) {
                    if (!inputcheck.dateofbirth) {
                        inputcheck.errorDateofbirth = true;
                        inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                        return;
                    }
                    else {
                        inputcheck.errorDateofbirth = false;
                        inputcheck.textErrorDateofbirth = "";
                    }
                    if (inputcheck.dateofbirth) {
                        let returndate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                        let returndatestring = moment__WEBPACK_IMPORTED_MODULE_7__(returndate).format('DD-MM-YYYY');
                        if (!inputcheck.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.dateofbirth).format('YYYY-MM-DD'), 'months') < 24) {
                            inputcheck.errorDateofbirth = !inputcheck.errorDateofbirth;
                            inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Trẻ em " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " lớn hơn hoặc bằng 2 tuổi so với ngày về " + returndatestring;
                            return;
                        }
                        else {
                            inputcheck.errorDateofbirth = false;
                            inputcheck.textErrorDateofbirth = "";
                        }
                        if (!inputcheck.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.dateofbirth).format('YYYY-MM-DD'), 'months') >= 144) {
                            inputcheck.errorDateofbirth = !inputcheck.errorDateofbirth;
                            inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Trẻ em " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " không được lớn hơn 12 tuổi so với ngày về " + returndatestring;
                            return;
                        }
                        else {
                            inputcheck.errorDateofbirth = false;
                            inputcheck.textErrorDateofbirth = "";
                        }
                        if (inputcheck.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.dateofbirth).format('YYYY-MM-DD'), 'days') < 14) {
                            inputcheck.errorDateofbirth = !inputcheck.errorDateofbirth;
                            inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Em bé " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " lớn hơn 14 ngày tuổi so với ngày về " + returndatestring;
                            return;
                        }
                        else {
                            inputcheck.errorDateofbirth = false;
                            inputcheck.textErrorDateofbirth = "";
                        }
                        if (inputcheck.isInfant && moment__WEBPACK_IMPORTED_MODULE_7__(returndate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.dateofbirth).format('YYYY-MM-DD'), 'months') >= 24) {
                            inputcheck.errorDateofbirth = !inputcheck.errorDateofbirth;
                            inputcheck.textErrorDateofbirth = "Vui lòng nhập ngày sinh Em bé " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " không được lớn hơn 2 tuổi so với ngày về " + returndatestring;
                            return;
                        }
                        else {
                            inputcheck.errorDateofbirth = false;
                            inputcheck.textErrorDateofbirth = "";
                        }
                    }
                }
                if (type == 4) {
                    if (!inputcheck.country) {
                        inputcheck.errorCountry = true;
                        inputcheck.showSelectCountry = false;
                        inputcheck.textErrorCountry = "Vui lòng nhập quốc tịch " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                        return;
                    }
                    else {
                        inputcheck.errorCountry = false;
                        inputcheck.textErrorCountry = "";
                    }
                }
                if (type == 5) {
                    if (!inputcheck.passport) {
                        inputcheck.errorPassport = true;
                        inputcheck.textErrorPassport = "Vui lòng nhập hộ chiếu " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                        return;
                    }
                    else {
                        if (!se.validatePassport(inputcheck.passport)) {
                            inputcheck.errorPassport = true;
                            inputcheck.textErrorPassport = "Vui lòng nhập hộ chiếu " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " không chứa ký tự đặc biệt";
                            return;
                        }
                        else {
                            inputcheck.errorPassport = false;
                            inputcheck.textErrorPassport = "";
                        }
                    }
                }
                if (type == 6) {
                    if (!inputcheck.passportCountry) {
                        inputcheck.errorPassportCountry = true;
                        inputcheck.showSelectPassportCountry = false;
                        inputcheck.textErrorPassportCountry = "Vui lòng nhập quốc gia cấp " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                        return;
                    }
                    else {
                        inputcheck.errorPassportCountry = false;
                        inputcheck.textErrorPassportCountry = "";
                    }
                }
                if (type == 7) {
                    if (!inputcheck.passportExpireDate) {
                        inputcheck.errorPassportExpireDate = true;
                        inputcheck.textErrorPassportExpireDate = "Vui lòng nhập ngày hết hạn " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay);
                        return;
                    }
                    else {
                        let departdate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                        let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(inputcheck.passportExpireDate).format('YYYY-MM-DD')).diff(moment__WEBPACK_IMPORTED_MODULE_7__(departdate), 'days');
                        if (diffdate < 0) {
                            inputcheck.errorPassportExpireDate = true;
                            inputcheck.textErrorPassportExpireDate = "Hộ chiếu " + (!inputcheck.isInfant ? "Trẻ em" : "Em bé") + " " + (!inputcheck.isInfant ? inputcheck.id : inputcheck.iddisplay) + " đã hết hạn";
                            return;
                        }
                        else {
                            inputcheck.errorPassportExpireDate = false;
                            inputcheck.textErrorPassportExpireDate = "";
                        }
                    }
                }
            }
        }
    }
    gonextstep() {
        var se = this;
        se.inputtext = false;
        se.activeStep = 2;
        se._flightService.itemFlightCache.adults = se.adults;
        se._flightService.itemFlightCache.childs = se.childs;
        if (!se.loginuser) {
            let ad = se.adults[0];
            se.hoten = ad.name;
        }
        se.storage.get('paxdetailInfo').then((data) => {
            if (data) {
                se.storage.remove('paxdetailInfo').then(() => {
                    se.storage.set('paxdetailInfo', { adults: se.adults, childs: se.childs });
                });
            }
            else {
                se.storage.set('paxdetailInfo', { adults: se.adults, childs: se.childs });
            }
        });
        se.storage.get('listpaxcache').then((data) => {
            if (data) {
                let datapax = [...data];
                let arraycheck = [...this.adults, ...this.childs];
                for (let index = 0; index < arraycheck.length; index++) {
                    const elementpax = arraycheck[index];
                    let isexist = data.some(r => r.name == elementpax.name);
                    if (!isexist) {
                        datapax.push(elementpax);
                    }
                }
                se.storage.remove('listpaxcache').then(() => {
                    se.storage.set('listpaxcache', datapax);
                });
            }
            else {
                let arraypax = [...this.adults, ...this.childs];
                se.storage.set('listpaxcache', arraypax);
            }
        });
    }
    showAlertDuplicateName() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            var arrdup = this._flightService.itemFlightCache.duplicateItem;
            let strmsg = '';
            arrdup.forEach(element => {
                for (let index = 0; index < element.list.length; index++) {
                    const itemlist = element.list[index];
                    if (index == 0) {
                        strmsg += 'Tên ' + (itemlist.isChild ? (!itemlist.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ') + (itemlist.isInfant ? itemlist.iddisplay : itemlist.id) + ' và ';
                    }
                    else {
                        strmsg += (itemlist.isChild ? (!itemlist.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ') + (itemlist.isInfant ? itemlist.iddisplay : itemlist.id) + (index < element.list.length - 1 ? ' và ' : '');
                    }
                }
                strmsg += " <span class='cls-error'>" + element.list[0].name + '</span> trùng nhau.';
            });
            strmsg += ' Có khả năng quý khách đã nhập nhầm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            let alert = yield this.alertCtrl.create({
                header: 'Tên hành khách trùng nhau',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.gonextstep();
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            se._flightService.itemFlightCache.duplicateName = null;
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertInvalidName(iteminvalid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = '';
            if (iteminvalid.length < 2) {
                let element = iteminvalid[0];
                strmsg = 'Tên ' + (element.isChild ? (!element.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ') + (element.isInfant ? element.iddisplay : element.id) + " <span class='cls-error'>" + element.name + '</span> chỉ có 2 chữ. Có khả năng quý khách đã nhập thiếu tên đệm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            }
            else {
                for (let index = 0; index < iteminvalid.length; index++) {
                    const element = iteminvalid[index];
                    strmsg += 'Tên ' + (element.isChild ? (!element.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ') + (element.isInfant ? element.iddisplay : element.id) + " <span class='cls-error'>" + element.name + '</span>' + (index < iteminvalid.length - 1 ? ', ' : ' ');
                }
                strmsg += " chỉ có 2 chữ. Có khả năng quý khách đã nhập thiếu tên đệm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.";
            }
            let alert = yield this.alertCtrl.create({
                header: 'Họ tên hành khách chỉ có 2 chữ',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.gonextstep();
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            se._flightService.itemFlightCache.duplicateName = null;
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertInvalidFirstName(iteminvalid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = 'Tên ' + (iteminvalid.isChild ? (!iteminvalid.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ') + iteminvalid.id + " <span class='cls-error'>" + iteminvalid.name + '</span> chỉ có 2 chữ. Có khả năng quý khách đã nhập thiếu tên đệm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            let alert = yield this.alertCtrl.create({
                header: 'Họ tên hành khách chỉ có 2 chữ',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.gonextstep();
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            se._flightService.itemFlightCache.duplicateName = null;
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertInvalidSubName(iteminvalid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = 'Họ của ' + (iteminvalid.isChild ? (!iteminvalid.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ') + iteminvalid.id + " <span class='cls-error'>" + iteminvalid.name + '</span> không nằm trong danh sách họ phổ biến. Có khả năng quý khách đã nhập sai.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            let alert = yield this.alertCtrl.create({
                header: 'Họ không nằm trong danh sách họ phổ biến',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.gonextstep();
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertInvalidFirtNameAndLastName(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = '';
            if (item.length < 2) {
                let element = item[0];
                strmsg += 'Tên ' + (element.isChild ? (!element.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ');
                strmsg += " <span class='cls-error'>" + element.name + '</span>';
            }
            else {
                for (let index = 0; index < item.length; index++) {
                    const element = item[index];
                    strmsg += 'Tên ' + (element.isChild ? (!element.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ') + " <span class='cls-error'>" + element.name + '</span>' + (index < item.length - 1 ? ', ' : ' ');
                }
            }
            strmsg += " chứa nhiều hơn 4 chữ cái. Có khả năng quý khách đã nhập nhầm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.";
            let alert = yield this.alertCtrl.create({
                header: 'Tên nhiều hơn 4 chữ cái',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.gonextstep();
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertDuplicateFirtNameAndLastName(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let strmsg = '';
            strmsg += 'Tên ' + (item.isChild ? (!item.isInfant ? 'Trẻ em ' : 'Em bé ') : 'Người lớn ');
            strmsg += " <span class='cls-error'>" + item.name + '</span> chứa nhiều hơn 1 chữ cái trùng nhau.';
            strmsg += ' Có khả năng quý khách đã nhập nhầm.</br>Nếu quý khách đã nhập đúng họ tên, vui lòng tiếp tục thanh toán.';
            let alert = yield this.alertCtrl.create({
                header: 'Chữ cái trùng nhau',
                message: strmsg,
                cssClass: "cls-alert-duplicatename",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Thanh toán',
                        role: 'OK',
                        cssClass: 'button-payment',
                        handler: () => {
                            alert.dismiss();
                            se.gonextstep();
                        }
                    },
                    {
                        text: 'Nhập lại họ tên',
                        role: 'Cancel',
                        cssClass: 'button-reinput',
                        handler: () => {
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    checkInValidSubNameBeforeNextStep(listpax) {
        var se = this, res = false;
        return new Promise((resolve, reject) => {
            listpax.filter((itempax) => {
                let itemValueInvalid = se.gf.getListSubName().filter((sn) => { return sn.value.indexOf(itempax.name.split(' ')[0].toLowerCase()) != -1; });
                let itemRawValueInvalid = se.gf.getListSubName().filter((sn) => { return sn.rawValue.indexOf(itempax.name.split(' ')[0].toLowerCase()) != -1; });
                if (itemValueInvalid.length == 0 && itemRawValueInvalid.length == 0) {
                    res = itempax;
                }
            });
            resolve(res);
        });
    }
    checkDuplicateItem(listpax) {
        var se = this, res = false;
        return new Promise((resolve, reject) => {
            resolve(se.getArrayDuplicate(listpax));
        });
    }
    getArrayDuplicate(listpax) {
        let arrres = [];
        return new Promise((resolve, reject) => {
            for (let index = 0; index < listpax.length; index++) {
                const element = listpax[index];
                let itemdup = listpax.filter((i, indexp) => i.name.trimEnd().trimStart().toLowerCase() == element.name.trimEnd().trimStart().toLowerCase() && i.indexp != index);
                if (itemdup && itemdup.length > 1) {
                    let arrdup = listpax.filter((i) => i.name.trimEnd().trimStart().toLowerCase() == itemdup[0].name.trimEnd().trimStart().toLowerCase());
                    if (arrres.length == 0) {
                        arrres.push({ list: [...arrdup] });
                    }
                    else {
                        let checkvalid = true;
                        for (let index = 0; index < arrres.length; index++) {
                            const element = arrres[index];
                            if (this.checkExistsItemInArray(element.list, arrdup[0])) {
                                checkvalid = false;
                            }
                        }
                        if (checkvalid) {
                            arrres.push({ list: [...arrdup] });
                        }
                    }
                }
            }
            resolve(arrres);
        });
    }
    checkExistsItemInArray(arrays, item) {
        var res = false;
        res = arrays.some(r => r.name == item.name);
        return res;
    }
    checkValidName(listpax) {
        var se = this, res = false, arrItem = [];
        return new Promise((resolve, reject) => {
            for (let index = 0; index < listpax.length; index++) {
                const element = listpax[index];
                let iteminvalid = listpax.filter((item) => { return item.byPassCheckRegularName ? false : item.name.trimEnd().trimStart().split(' ').length < 3; });
                if (iteminvalid && iteminvalid.length > 0) {
                    resolve(iteminvalid);
                }
            }
            resolve(res);
        });
    }
    checkValidSubName(subname) {
        var se = this, res = false;
        return new Promise((resolve, reject) => {
            let iteminvalid = se.gf.getListSubName().filter((sn) => { return ((sn.value.indexOf(subname.split(' ')[0].toLowerCase()) != -1) || (sn.rawValue.indexOf(subname.split(' ')[0].toLowerCase()) != -1)); });
            if (iteminvalid && iteminvalid.length > 0) {
                resolve(iteminvalid[0]);
            }
            resolve(res);
        });
    }
    checkValidFirstNameAndSubName(listpax) {
        var se = this, res = false, arrItem = [];
        return new Promise((resolve, reject) => {
            for (let index = 0; index < listpax.length; index++) {
                const element = listpax[index];
                let iteminvalid = listpax.filter((item) => { return item.name.trim().split(' ').length >= 5; });
                if (iteminvalid && iteminvalid.length > 0) {
                    resolve(iteminvalid);
                }
            }
            resolve(res);
        });
    }
    checkValidDuplicateFirstNameAndSubName(listpax) {
        var se = this, res = false, arrItem = [];
        return new Promise((resolve, reject) => {
            for (let index = 0; index < listpax.length; index++) {
                const element = listpax[index];
                let arrname = se.gf.convertFontVNI(element.name).trim().split(' ');
                if (arrname && arrname.length > 1) {
                    let samename = arrname.filter((v, i, a) => a.findIndex(t => (t === v)) !== i);
                    if (samename && samename.length > 0) {
                        resolve(element);
                    }
                }
            }
            resolve(res);
        });
    }
    gotopaymentpage() {
        var se = this;
        se._flightService.itemFlightCache.backtochoiceseat = false;
        se.updatePassengerInfo().then((data) => {
            if (!data.error) {
                se._flightService.itemFlightCache.pnr = data;
                if (se._flightService.itemFlightCache.totalPrice == 0) {
                    let itemcache = se._flightService.itemFlightCache;
                    itemcache.ischeckpayment = 0;
                    this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                        if (check) {
                            var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + (itemcache.pnr.bookingCode ? itemcache.pnr.bookingCode : itemcache.pnr.resNo) + '&memberId=' + se.jti + '&rememberToken=&buyerPhone=' + itemcache.phone + '&version=2';
                            se.gf.CreatePayoo(url).then((data) => {
                                se.gf.hideLoading();
                                if (data.success) {
                                    se._flightService.itemFlightCache.ischeckpayment = 1;
                                    se.navCtrl.navigateForward('flightpaymentdone/' + (se._flightService.itemFlightCache.pnr.bookingCode ? se._flightService.itemFlightCache.pnr.bookingCode : se._flightService.itemFlightCache.pnr.resNo) + '/' + moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD') + '/' + moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD'));
                                }
                                else {
                                    se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                                    se.gf.hideLoading();
                                }
                            });
                        }
                        else {
                            se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                            se.gf.hideLoading();
                        }
                    });
                }
                else {
                    se.gf.hideLoading();
                    se.navCtrl.navigateForward('/flightpaymentselect');
                }
            }
            else {
                se.gf.showToastWarning(data.error);
                se.gf.hideLoading();
            }
        });
    }
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }
    validateNameNotContainNumber(name) {
        var re = /^([^0-9]*)$/;
        return re.test(String(name).toLowerCase());
    }
    validateNameNotContainExceptionChar(name) {
        let re = /^(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0621-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971\u0972\u097B-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC\u0EDD\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8B\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19A9\u19C1-\u19C7\u1A00-\u1A16\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u2094\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C6F\u2C71-\u2C7D\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FC3\uA000-\uA48C\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA65F\uA662-\uA66E\uA67F-\uA697\uA717-\uA71F\uA722-\uA788\uA78B\uA78C\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA90A-\uA925\uA930-\uA946\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1E\uDF30-\uDF4A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F\uDD00-\uDD15\uDD20-\uDD39\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33]|\uD808[\uDC00-\uDF6E]|\uD809[\uDC00-\uDC62]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD87E[\uDC00-\uDE1D])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u0523\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0621-\u065E\u0660-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0901-\u0939\u093C-\u094D\u0950-\u0954\u0958-\u0963\u0966-\u096F\u0971\u0972\u097B-\u097F\u0981-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D28\u0D2A-\u0D39\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC\u0EDD\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F8B\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u1099\u10A0-\u10C5\u10D0-\u10FA\u10FC\u1100-\u1159\u115F-\u11A2\u11A8-\u11F9\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u1676\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u1900-\u191C\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19A9\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BAA\u1BAE-\u1BB9\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1D00-\u1DE6\u1DFE-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u2094\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2C6F\u2C71-\u2C7D\u2C80-\u2CE4\u2D00-\u2D25\u2D30-\u2D65\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31B7\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FC3\uA000-\uA48C\uA500-\uA60C\uA610-\uA62B\uA640-\uA65F\uA662-\uA66F\uA67C\uA67D\uA67F-\uA697\uA717-\uA71F\uA722-\uA788\uA78B\uA78C\uA7FB-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA900-\uA92D\uA930-\uA953\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAC00-\uD7A3\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1E\uDF30-\uDF4A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F\uDD00-\uDD15\uDD20-\uDD39\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F]|\uD808[\uDC00-\uDF6E]|\uD809[\uDC00-\uDC62]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF])*$/;
        let str = name.toLowerCase().replace(/ /g, '');
        return re.test(String(str));
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validatePassport(passport) {
        var re = /^([a-zA-Z0-9]*)$/;
        return re.test(String(passport).toLowerCase());
    }
    phonevalid(inputtxt) {
        if (inputtxt) {
            var n = Number(inputtxt);
            if (n) {
                var test1 = inputtxt.length;
                if (inputtxt) {
                    if (test1 == 10) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    goToLogin() {
        this.storage.get('auth_token').then(auth_token => {
            if (!auth_token) {
                this.valueGlobal.backValue = "";
                this.valueGlobal.logingoback = 'flightadddetails';
                this.navCtrl.navigateForward('/login');
            }
        });
    }
    splitFullName(strHoten, ho, ten) {
        let textfullname = strHoten.trim().split(' ');
        let name = '';
        if (textfullname.length > 2) {
            for (let i = 1; i < textfullname.length; i++) {
                if (i == 1) {
                    name += textfullname[i];
                }
                else {
                    name += ' ' + textfullname[i];
                }
            }
            ho = textfullname[0];
            ten = name;
        }
        else if (textfullname.length > 1) {
            ho = textfullname[0];
            ten = textfullname[1];
        }
        else if (textfullname.length == 1) {
            ho = textfullname[0];
            ten = "";
        }
        return { firstname: ho, lastname: ten };
    }
    updatePassengerInfo() {
        var se = this;
        se.gf.showLoadingWithMsg('Đang tiến hành giữ vé');
        try {
            let data = se._flightService.itemFlightCache;
            var ho = '', ten = '';
            let objhoten = se.splitFullName(se.adults[0].name, ho, ten);
            ho = objhoten.firstname;
            ten = objhoten.lastname;
            data.ho = ho;
            data.ten = ten;
            data.phone = se.sodienthoai;
            data.email = se.email;
            data.hoten = se.hoten;
            let listpassenger = [];
            let departluggage = [], returnluggage = [], departAirlineCode = data.departFlight.airlineCode, returnAirlineCode = data.returnFlight ? data.returnFlight.airlineCode : "";
            if (data.departFlight && data.departFlight.airLineLuggage && data.departFlight.airLineLuggage.length > 0) {
                const dl = data.departFlight.airLineLuggage.filter((item) => { return item.quantity > 0; });
                if (dl && dl.length > 0) {
                    dl.forEach(element => {
                        element.quantitycheck = element.quantity;
                        departluggage.push(element);
                    });
                }
            }
            if (data.departLuggage && data.departLuggage.length > 0) {
                const dl = data.departLuggage.filter((item) => { return item.quantity > 0; });
                if (dl && dl.length > 0) {
                    dl.forEach(element => {
                        element.quantitycheck = element.quantity;
                        departluggage.push(element);
                    });
                }
            }
            if (data.returnFlight && data.returnFlight.airLineLuggage && data.returnFlight.airLineLuggage.length > 0) {
                const rl = data.returnFlight.airLineLuggage.filter((item) => { return item.quantity > 0; });
                if (rl && rl.length > 0) {
                    rl.forEach(element => {
                        element.quantitycheck = element.quantity;
                        returnluggage.push(element);
                    });
                }
            }
            if (data.returnLuggage && data.returnLuggage.length > 0) {
                const rl = data.returnLuggage.filter((item) => { return item.quantity > 0; });
                if (rl && rl.length > 0) {
                    rl.forEach(element => {
                        element.quantitycheck = element.quantity;
                        returnluggage.push(element);
                    });
                }
            }
            for (let index = 0; index < se.adults.length; index++) {
                const element = se.adults[index];
                var ho1 = '', ten1 = '';
                let objhoten1 = se.splitFullName(element.name, ho1, ten1);
                ho1 = objhoten1.firstname;
                ten1 = objhoten1.lastname;
                let objAncilary = [], objAncilaryReturn = [];
                let departluggageweight = 0, returnluggageweight = 0;
                if (departluggage && departluggage.length > 0) {
                    let objLuggage;
                    if (departluggage && departluggage.length == 1) {
                        if (departluggage[0].quantitycheck > 0) {
                            if (departAirlineCode == "JetStar") {
                                objLuggage = {
                                    Name: departluggage[0].title,
                                    Type: "Baggage",
                                    Value: departluggage[0].weight,
                                    price: departluggage[0].amount,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            else if (departAirlineCode == "VietnamAirlines") {
                                let obj = JSON.parse(departluggage[0].purchaseKey);
                                obj.NameId = "1.1";
                                objLuggage = {
                                    Name: departluggage[0].title,
                                    Type: "Baggage",
                                    Key: JSON.stringify(obj),
                                    Value: departluggage[0].weight,
                                    price: departluggage[0].amount,
                                    netPrice: departluggage[0].netPrice,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            else {
                                objLuggage = {
                                    Name: departluggage[0].title,
                                    Type: "Baggage",
                                    Key: departluggage[0].purchaseKey,
                                    Value: departluggage[0].weight,
                                    price: departluggage[0].amount,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            if (index == 0) {
                                objAncilary.push(objLuggage);
                                departluggageweight = departluggage[0].weight;
                            }
                            else if (departluggage[0].quantitycheck >= 1) {
                                objAncilary.push(objLuggage);
                                departluggageweight = departluggage[0].weight;
                            }
                            departluggage[0].quantitycheck--;
                        }
                    }
                    else if (departluggage && departluggage.length > 1) {
                        var dl1;
                        if (index > 0 && departluggage[index - 1] && departluggage[index - 1].quantitycheck > 0) {
                            dl1 = departluggage[index - 1];
                        }
                        else {
                            dl1 = departluggage[index];
                        }
                        if (dl1) {
                            if (departAirlineCode == "JetStar") {
                                objLuggage = {
                                    Name: dl1.title,
                                    Type: "Baggage",
                                    Value: dl1.weight,
                                    price: dl1.amount,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            else if (departAirlineCode == "VietnamAirlines") {
                                let obj = JSON.parse(dl1.purchaseKey);
                                obj.NameId = "1.1";
                                objLuggage = {
                                    Name: dl1.title,
                                    Type: "Baggage",
                                    Key: JSON.stringify(obj),
                                    Value: dl1.weight,
                                    price: dl1.amount,
                                    netPrice: dl1.netPrice,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            else {
                                objLuggage = {
                                    Name: dl1.title,
                                    Type: "Baggage",
                                    Key: dl1.purchaseKey,
                                    Value: dl1.weight,
                                    price: dl1.amount,
                                    flightNumber: data.departFlight.flightNumber
                                };
                            }
                            objAncilary.push(objLuggage);
                            departluggageweight = dl1.weight;
                            dl1.quantitycheck--;
                        }
                    }
                }
                if (returnluggage && returnluggage.length > 0) {
                    let objReturnLuggage1;
                    if (returnluggage && returnluggage.length == 1 && returnluggage[0].quantitycheck > 0) {
                        if (returnAirlineCode && returnAirlineCode == "JetStar") {
                            objReturnLuggage1 = {
                                Name: returnluggage[0].title,
                                Type: "Baggage",
                                Value: returnluggage[0].weight,
                                price: returnluggage[0].amount,
                                flightNumber: data.returnFlight.flightNumber
                            };
                        }
                        else if (returnAirlineCode == "VietnamAirlines") {
                            let obj = JSON.parse(returnluggage[0].purchaseKey);
                            obj.NameId = "1.1";
                            objReturnLuggage1 = {
                                Name: returnluggage[0].title,
                                Type: "Baggage",
                                Key: JSON.stringify(obj),
                                Value: returnluggage[0].weight,
                                price: returnluggage[0].amount,
                                netPrice: returnluggage[0].netPrice,
                                flightNumber: data.returnFlight.flightNumber
                            };
                        }
                        else {
                            objReturnLuggage1 = {
                                Name: returnluggage[0].title,
                                Type: "Baggage",
                                Key: returnluggage[0].purchaseKey,
                                Value: returnluggage[0].weight,
                                price: returnluggage[0].amount,
                                flightNumber: data.returnFlight.flightNumber
                            };
                        }
                        if (index == 0) {
                            objAncilaryReturn.push(objReturnLuggage1);
                            returnluggageweight = returnluggage[0].weight;
                        }
                        else if (returnluggage[0].quantitycheck >= 1) {
                            objAncilaryReturn.push(objReturnLuggage1);
                            returnluggageweight = returnluggage[0].weight;
                        }
                        returnluggage[0].quantitycheck--;
                    }
                    else if (returnluggage && returnluggage.length > 1) {
                        var rl1;
                        if (index > 0 && returnluggage[index - 1] && returnluggage[index - 1].quantitycheck > 0) {
                            rl1 = returnluggage[index - 1];
                        }
                        else {
                            rl1 = returnluggage[index];
                        }
                        if (rl1) {
                            if (returnAirlineCode && returnAirlineCode == "JetStar") {
                                objReturnLuggage1 = {
                                    Name: rl1.title,
                                    Type: "Baggage",
                                    Value: rl1.weight,
                                    price: rl1.amount,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            else if (returnAirlineCode == "VietnamAirlines") {
                                let obj = JSON.parse(rl1.purchaseKey);
                                obj.NameId = "1.1";
                                objReturnLuggage1 = {
                                    Name: rl1.title,
                                    Type: "Baggage",
                                    Key: JSON.stringify(obj),
                                    Value: rl1.weight,
                                    price: rl1.amount,
                                    netPrice: rl1.netPrice,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            else {
                                objReturnLuggage1 = {
                                    Name: rl1.title,
                                    Type: "Baggage",
                                    Key: rl1.purchaseKey,
                                    Value: rl1.weight,
                                    price: rl1.amount,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            objAncilaryReturn.push(objReturnLuggage1);
                            returnluggageweight = rl1.weight;
                            rl1.quantitycheck--;
                        }
                    }
                }
                let objSeat;
                if (data.departSeatChoice && data.departSeatChoice.length > 0) {
                    if (data.departSeatChoice.length == 1 && !data.departSeatChoice[0].choosed) {
                        let seat = data.departSeatChoice[0];
                        let stop = data.departFlight.stops;
                        if (departAirlineCode == 'VietnamAirlines') {
                            let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                            objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: index + 1 };
                        }
                        else {
                            objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.netPrice ? seat.netPrice : seat.amount, PaxIndex: index + 1 };
                        }
                        objAncilary.push(objSeat);
                        data.departSeatChoice[0].choosed = true;
                    }
                    else {
                        let seat = data.departSeatChoice[index];
                        if (seat) {
                            let stop = data.departFlight.stops;
                            if (departAirlineCode == 'VietnamAirlines') {
                                let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                                objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: index + 1 };
                            }
                            else {
                                objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.netPrice ? seat.netPrice : seat.amount, PaxIndex: index + 1 };
                            }
                            objAncilary.push(objSeat);
                            data.departSeatChoice[index].choosed = true;
                        }
                    }
                }
                let objSeatReturn;
                if (data.returnSeatChoice && data.returnSeatChoice.length > 0) {
                    if (data.returnSeatChoice.length == 1 && !data.returnSeatChoice[0].choosed) {
                        let seatreturn = data.returnSeatChoice[0];
                        let stopreturn = data.returnFlight.stops;
                        if (returnAirlineCode == 'VietnamAirlines') {
                            let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                            objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: index + 1 };
                        }
                        else {
                            objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.netPrice ? seatreturn.netPrice : seatreturn.amount, PaxIndex: index + 1 };
                        }
                        objAncilaryReturn.push(objSeatReturn);
                        data.returnSeatChoice[0].choosed = true;
                    }
                    else {
                        let seatreturn = data.returnSeatChoice[index];
                        if (seatreturn) {
                            let stopreturn = data.returnFlight.stops;
                            if (returnAirlineCode == 'VietnamAirlines') {
                                let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                                objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: index + 1 };
                            }
                            else {
                                objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.netPrice ? seatreturn.netPrice : seatreturn.amount, PaxIndex: index + 1 };
                            }
                            objAncilaryReturn.push(objSeatReturn);
                            data.returnSeatChoice[index].choosed = true;
                        }
                    }
                }
                let objTransfer;
                if (this._flightService.itemFlightCache.DICHUNGParam && this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo) {
                    objTransfer = { Type: "Transfer", price: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo, netPrice: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo, title: "1" };
                    if (index == 0) {
                        objAncilary.push(objTransfer);
                    }
                }
                if (this._flightService.itemFlightCache.DICHUNGParam && this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn) {
                    objTransfer = { Type: "Transfer", price: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn, netPrice: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn, title: "1" };
                    if (index == 0) {
                        objAncilaryReturn.push(objTransfer);
                    }
                }
                element.ancillaryJson = (objAncilary.length > 0 ? JSON.stringify(objAncilary) : "");
                element.ancillaryReturnJson = (objAncilaryReturn.length > 0 ? JSON.stringify(objAncilaryReturn) : "");
                console.log(element.ancillaryJson);
                console.log(element.ancillaryReturnJson);
                listpassenger.push({
                    "passengerType": 0,
                    "gender": element.gender,
                    "firstName": ten1,
                    "lastName": ho1,
                    "mobileNumber": "",
                    "baggage": departluggageweight,
                    "returnBaggage": returnluggageweight,
                    "birthDay": element.dateofbirth,
                    "email": "",
                    "passportNumber": (se.showLotusPoint && se.isExtenal) ? element.passport : "",
                    "passportExpired": (se.showLotusPoint && se.isExtenal) ? element.passportExpireDate : "",
                    "nationality": (se.showLotusPoint && se.isExtenal) ? element.country : "",
                    "destinationCity": "",
                    "destinationPostal": "",
                    "destinationStreet": "",
                    "passportIssueCountry": (se.showLotusPoint && se.isExtenal) ? element.passportCountry : "",
                    "airlineMemberCode": (se.showLotusPoint && element.airlineMemberCode) ? element.airlineMemberCode : "",
                    "departMealPlan": "",
                    "returnMealPlan": "",
                    "adultIndex": index,
                    "ancillaryJson": element.ancillaryJson,
                    "ancillaryReturnJson": element.ancillaryReturnJson
                });
            }
            let adultIndex = 0;
            for (let index = 0; index < se.childs.length; index++) {
                const element = se.childs[index];
                let objAncilary = [], objAncilaryReturn = [];
                let departluggageweight = 0, returnluggageweight = 0;
                departluggage = departluggage.filter((item) => { return item.quantitycheck > 0; });
                returnluggage = returnluggage.filter((item) => { return item.quantitycheck > 0; });
                if (!element.isInfant) {
                    if (departluggage && departluggage.length > 0) {
                        let objLuggage;
                        if (departluggage && departluggage.length == 1) {
                            if (departluggage[0].quantitycheck > 0) {
                                if (departAirlineCode == "JetStar") {
                                    objLuggage = {
                                        Name: departluggage[0].title,
                                        Type: "Baggage",
                                        Value: departluggage[0].weight,
                                        price: departluggage[0].amount,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                else if (departAirlineCode == "VietnamAirlines") {
                                    let obj = JSON.parse(departluggage[0].purchaseKey);
                                    obj.NameId = "1.1";
                                    objLuggage = {
                                        Name: departluggage[0].title,
                                        Type: "Baggage",
                                        Key: JSON.stringify(obj),
                                        Value: departluggage[0].weight,
                                        price: departluggage[0].amount,
                                        netPrice: departluggage[0].netPrice,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                else {
                                    objLuggage = {
                                        Name: departluggage[0].title,
                                        Type: "Baggage",
                                        Key: departluggage[0].purchaseKey,
                                        Value: departluggage[0].weight,
                                        price: departluggage[0].amount,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                if (index == 0) {
                                    objAncilary.push(objLuggage);
                                    departluggageweight = departluggage[0].weight;
                                }
                                else if (departluggage[0].quantitycheck >= 1) {
                                    objAncilary.push(objLuggage);
                                    departluggageweight = departluggage[0].weight;
                                }
                                departluggage[0].quantitycheck--;
                            }
                        }
                        else if (departluggage && departluggage.length > 1) {
                            var dlc;
                            if (index > 0 && departluggage[index - 1] && departluggage[index - 1].quantitycheck > 0) {
                                dlc = departluggage[index - 1];
                            }
                            else {
                                dlc = departluggage[index];
                            }
                            if (dlc) {
                                if (departAirlineCode == "JetStar") {
                                    objLuggage = {
                                        Name: dlc.title,
                                        Type: "Baggage",
                                        Value: dlc.weight,
                                        price: dlc.amount,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                else if (departAirlineCode == "VietnamAirlines") {
                                    let obj = JSON.parse(dlc.purchaseKey);
                                    obj.NameId = "1.1";
                                    objLuggage = {
                                        Name: dlc.title,
                                        Type: "Baggage",
                                        Key: JSON.stringify(obj),
                                        Value: dlc.weight,
                                        price: dlc.amount,
                                        netPrice: dlc.netPrice,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                else {
                                    objLuggage = {
                                        Name: dlc.title,
                                        Type: "Baggage",
                                        Key: dlc.purchaseKey,
                                        Value: dlc.weight,
                                        price: dlc.amount,
                                        flightNumber: data.departFlight.flightNumber
                                    };
                                }
                                objAncilary.push(objLuggage);
                                departluggageweight = dlc.weight;
                                dlc.quantitycheck--;
                            }
                        }
                    }
                    if (returnluggage && returnluggage.length > 0) {
                        let objReturnLuggage1;
                        if (returnluggage && returnluggage.length == 1 && returnluggage[0].quantitycheck > 0) {
                            if (returnAirlineCode && returnAirlineCode == "JetStar") {
                                objReturnLuggage1 = {
                                    Name: returnluggage[0].title,
                                    Type: "Baggage",
                                    Value: returnluggage[0].weight,
                                    price: returnluggage[0].amount,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            else if (returnAirlineCode == "VietnamAirlines") {
                                let obj = JSON.parse(returnluggage[0].purchaseKey);
                                obj.NameId = "1.1";
                                objReturnLuggage1 = {
                                    Name: returnluggage[0].title,
                                    Type: "Baggage",
                                    Key: JSON.stringify(obj),
                                    Value: returnluggage[0].weight,
                                    price: returnluggage[0].amount,
                                    netPrice: returnluggage[0].netPrice,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            else {
                                objReturnLuggage1 = {
                                    Name: returnluggage[0].title,
                                    Type: "Baggage",
                                    Key: returnluggage[0].purchaseKey,
                                    Value: returnluggage[0].weight,
                                    price: returnluggage[0].amount,
                                    flightNumber: data.returnFlight.flightNumber
                                };
                            }
                            if (index == 0) {
                                objAncilaryReturn.push(objReturnLuggage1);
                                returnluggageweight = returnluggage[0].weight;
                            }
                            else if (returnluggage[0].quantitycheck >= 1) {
                                objAncilaryReturn.push(objReturnLuggage1);
                                returnluggageweight = returnluggage[0].weight;
                            }
                            returnluggage[0].quantitycheck--;
                        }
                        else if (returnluggage && returnluggage.length > 1) {
                            var rlc;
                            if (index > 0 && returnluggage[index - 1] && returnluggage[index - 1].quantitycheck > 0) {
                                rlc = returnluggage[index - 1];
                            }
                            else {
                                rlc = returnluggage[index];
                            }
                            if (rlc) {
                                if (returnAirlineCode && returnAirlineCode == "JetStar") {
                                    objReturnLuggage1 = {
                                        Name: rlc.title,
                                        Type: "Baggage",
                                        Value: rlc.weight,
                                        price: rlc.amount,
                                        flightNumber: data.returnFlight.flightNumber
                                    };
                                }
                                else if (returnAirlineCode == "VietnamAirlines") {
                                    let obj = JSON.parse(rlc.purchaseKey);
                                    obj.NameId = "1.1";
                                    objReturnLuggage1 = {
                                        Name: rlc.title,
                                        Type: "Baggage",
                                        Key: JSON.stringify(obj),
                                        Value: rlc.weight,
                                        price: rlc.amount,
                                        netPrice: rlc.netPrice,
                                        flightNumber: data.returnFlight.flightNumber
                                    };
                                }
                                else {
                                    objReturnLuggage1 = {
                                        Name: rlc.title,
                                        Type: "Baggage",
                                        Key: rlc.purchaseKey,
                                        Value: rlc.weight,
                                        price: rlc.amount,
                                        flightNumber: data.returnFlight.flightNumber
                                    };
                                }
                                objAncilaryReturn.push(objReturnLuggage1);
                                returnluggageweight = rlc.weight;
                                rlc.quantitycheck--;
                            }
                        }
                    }
                }
                var ho1 = '', ten1 = '';
                let objhoten1 = se.splitFullName(element.name, ho1, ten1);
                ho1 = objhoten1.firstname;
                ten1 = objhoten1.lastname;
                let indexseat = index + se.adults.length;
                if (!element.isInfant) {
                    let objSeat;
                    if (data.departSeatChoice && data.departSeatChoice.length > 0) {
                        if (data.departSeatChoice.length == 1) {
                            if (data.departSeatChoice[indexseat] && !data.departSeatChoice[indexseat].choosed) {
                                let seat = data.departSeatChoice[indexseat];
                                let stop = data.departFlight.stops;
                                if (departAirlineCode == 'VietnamAirlines') {
                                    let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                                    objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: indexseat + 1 };
                                }
                                else {
                                    objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.netPrice ? seat.netPrice : seat.amount, PaxIndex: indexseat + 1 };
                                }
                                objAncilary.push(objSeat);
                            }
                        }
                        else {
                            if (data.departSeatChoice[indexseat] && !data.departSeatChoice[indexseat].choosed) {
                                let seat = data.departSeatChoice[indexseat];
                                if (seat) {
                                    let stop = data.departFlight.stops;
                                    if (departAirlineCode == 'VietnamAirlines') {
                                        let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                                        objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: indexseat + 1 };
                                    }
                                    else {
                                        objSeat = { Name: "Chỗ ngồi " + seat.name, Type: "Seat", Key: seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >= 1 ? 2 : 1), price: seat.amount, netPrice: seat.netPrice ? seat.netPrice : seat.amount, PaxIndex: indexseat + 1 };
                                    }
                                    objAncilary.push(objSeat);
                                }
                            }
                        }
                    }
                    let objSeatReturn;
                    if (data.returnSeatChoice && data.returnSeatChoice.length > 0) {
                        if (data.returnSeatChoice.length == 1) {
                            if (data.returnSeatChoice[indexseat] && !data.returnSeatChoice[indexseat].choosed) {
                                let seatreturn = data.returnSeatChoice[indexseat];
                                let stopreturn = data.returnFlight.stops;
                                if (returnAirlineCode == 'VietnamAirlines') {
                                    let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                                    objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: indexseat + 1 };
                                }
                                else {
                                    objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.netPrice ? seatreturn.netPrice : seatreturn.amount, PaxIndex: indexseat + 1 };
                                }
                                objAncilaryReturn.push(objSeatReturn);
                            }
                        }
                        else {
                            if (data.returnSeatChoice[indexseat] && !data.returnSeatChoice[indexseat].choosed) {
                                let seatreturn = data.returnSeatChoice[indexseat];
                                if (seatreturn) {
                                    let stopreturn = data.returnFlight.stops;
                                    if (returnAirlineCode == 'VietnamAirlines') {
                                        let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                                        objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: indexseat + 1 };
                                    }
                                    else {
                                        objSeatReturn = { Name: "Chỗ ngồi " + seatreturn.name, Type: "Seat", Key: seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode) ? 2 : 1, segment: (stopreturn >= 1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.netPrice ? seatreturn.netPrice : seatreturn.amount, PaxIndex: indexseat + 1 };
                                    }
                                    objAncilaryReturn.push(objSeatReturn);
                                }
                            }
                        }
                    }
                }
                if (element.isInfant) {
                    adultIndex++;
                }
                element.ancillaryJson = (objAncilary.length > 0 ? JSON.stringify(objAncilary) : "");
                element.ancillaryReturnJson = (objAncilaryReturn.length > 0 ? JSON.stringify(objAncilaryReturn) : "");
                listpassenger.push({
                    "passengerType": element.isInfant ? 2 : 1,
                    "gender": element.gender,
                    "firstName": ten1,
                    "lastName": ho1,
                    "mobileNumber": "",
                    "baggage": departluggageweight ? departluggageweight : "",
                    "returnBaggage": returnluggageweight ? returnluggageweight : "",
                    "birthDay": element.dateofbirth,
                    "email": "",
                    "passportNumber": (se.showLotusPoint && se.isExtenal) ? element.passport : "",
                    "passportExpired": (se.showLotusPoint && se.isExtenal) ? element.passportExpireDate : "",
                    "nationality": (se.showLotusPoint && se.isExtenal) ? element.country : "",
                    "destinationCity": "",
                    "destinationPostal": "",
                    "destinationStreet": "",
                    "passportIssueCountry": (se.showLotusPoint && se.isExtenal) ? element.passportCountry : "",
                    "airlineMemberCode": "",
                    "departMealPlan": "",
                    "returnMealPlan": "",
                    "adultIndex": element.isInfant ? adultIndex - 1 : 0,
                    "ancillaryJson": element.ancillaryJson,
                    "ancillaryReturnJson": element.ancillaryReturnJson
                });
            }
            let firstnamecontact = '', lastnamecontact = '';
            let objcontact = se.splitFullName(se.hoten, firstnamecontact, lastnamecontact);
            firstnamecontact = objcontact.firstname;
            lastnamecontact = objcontact.lastname;
            data.ho = firstnamecontact;
            data.ten = lastnamecontact;
            var bookingJsonData;
            if (this._flightService.itemFlightCache.DICHUNGParam) {
                this._flightService.itemFlightCache.DICHUNGParam.User = { email: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.emailDC, phone: se.sodienthoai, fullName: data.ho + " " + data.ten };
                listpassenger[0].DICHUNGParam = this._flightService.itemFlightCache.DICHUNGParam;
                var AirTicketObj = [];
                let AirTicketItem = { PromotionNote: "", AirlineName: "" };
                let JsonItem = JSON.stringify(listpassenger[0].DICHUNGParam);
                AirTicketItem.PromotionNote = JsonItem;
                AirTicketItem.AirlineName = "APIDICHUNG";
                AirTicketObj.push(AirTicketItem);
                let Json = JSON.stringify(AirTicketObj);
                bookingJsonData = Json;
            }
            return new Promise((resolve, reject) => {
                let objPass;
                objPass = {
                    "contact": {
                        "gender": "1",
                        "firstName": lastnamecontact,
                        "lastName": firstnamecontact,
                        "mobileNumber": se.sodienthoai,
                        "email": se.email,
                        "address": "",
                        "phoneNumber": se.sodienthoai,
                        "hasvoucher": se._flightService.itemFlightCache.promotionCode ? true : false,
                    },
                    "passengers": listpassenger,
                    "userToken": "",
                    "noteCorp": "",
                    "compName": se.companyname,
                    "compAddress": se.address,
                    "compTaxCode": se.tax,
                    "compContactEmail": se.addressorder,
                    "compContactName": se.hotenhddt,
                    "isInvoice": se.Invoice,
                    "isHoldTicket": true,
                    "departFlightId": data.departFlight ? data.departFlight.id : "",
                    "returnFlightId": data.returnFlight ? data.returnFlight.id : "",
                    "memberId": se.jti ? se.jti : "",
                    "hotelAddon": se._flightService.itemFlightCache.objHotelCitySelected ? se._flightService.itemFlightCache.objHotelCitySelected : "",
                    "bookingJsonData": bookingJsonData,
                    "voucher": { voucherCode: se._flightService.itemFlightCache.promotionCode ? se._flightService.itemFlightCache.promotionCode : "" },
                    "InsuranceType": se._flightService.itemFlightCache.InsuranceType
                };
                if (se._flightService.itemFlightCache.pnr && se._flightService.itemFlightCache.pnr.resNo && se._flightService.itemFlightCache.hasvoucher && se._flightService.itemFlightCache.promotionCode) {
                    objPass.voucher = {};
                    objPass.voucher.keepCurrentVoucher = true;
                    objPass.voucher.voucherCode = se._flightService.itemFlightCache.promotionCode ? se._flightService.itemFlightCache.promotionCode : "";
                }
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PassengerSave/" + data.reservationId,
                    timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                    headers: {
                        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify(objPass)
                };
                se.options = options;
                console.log(options);
                requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                    let objError = {
                        page: "flightadddetails",
                        func: "updatePassengerInfo",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    if (error) {
                        error.page = "flightadddetails";
                        error.func = "updatePassengerInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
                        se.gf.hideLoading();
                        resolve({ error: true });
                    }
                    if (response.statusCode == 200) {
                        let result = JSON.parse(body);
                        console.log(result);
                        resolve(result);
                    }
                    else {
                        se.gf.hideLoading();
                        resolve({ error: true });
                    }
                });
            });
        }
        catch (e) {
            se.gf.hideLoading();
            let result = e.message;
            console.log(result);
            let objError = {
                page: "flightadddetails",
                func: "updatePassengerInfo",
                message: "exception",
                content: result,
                type: "warning",
                param: JSON.stringify(se.options)
            };
            _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, result);
            se.gf.showAlertErrorMessage();
        }
    }
    selectGender(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: 'action-sheets-flightselectgender',
                mode: 'md',
                header: 'Danh xưng',
                buttons: [
                    {
                        text: "Bé trai",
                        cssClass: item.genderdisplay == "Bé trai" ? 'text-bold' : '',
                        handler: () => {
                            item.genderdisplay = 'Bé trai';
                            item.gender = 1;
                        }
                    },
                    {
                        text: "Bé gái",
                        cssClass: item.genderdisplay == "Bé gái" ? 'text-bold' : '',
                        handler: () => {
                            item.genderdisplay = 'Bé gái';
                            item.gender = 2;
                        }
                    }
                ],
            });
            actionSheet.present();
            actionSheet.onDidDismiss().then((data) => {
                this.checkInput(item, 1, false);
            });
        });
    }
    selectAdultGender(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: 'action-sheets-flightselectgender',
                mode: 'md',
                header: 'Danh xưng',
                buttons: [
                    {
                        text: "Ông",
                        cssClass: item.genderdisplay == "Ông" ? 'text-bold' : '',
                        handler: () => {
                            item.genderdisplay = 'Ông';
                            item.gender = 1;
                        }
                    },
                    {
                        text: "Bà",
                        cssClass: item.genderdisplay == "Bà" ? 'text-bold' : '',
                        handler: () => {
                            item.genderdisplay = 'Bà';
                            item.gender = 2;
                        }
                    }
                ],
            });
            actionSheet.present();
            actionSheet.onDidDismiss().then((data) => {
                this.checkInput(item, 1, true);
            });
        });
    }
    editPaxInfo(item, idx) {
        var se = this;
        item.byPassCheckRegularName = false;
        if (item && idx == 1) {
            item.genderdisplay = '';
            item.name = '';
            item.airlineMemberCode = '';
            item.errorGender = true;
            item.errorName = true;
            item.dateofbirth = '';
            item.textErrorInfo = "Vui lòng nhập thông tin Người lớn " + item.id;
            if (se.isExtenal) {
                item.dateofbirth = '';
                item.country = '';
                item.passport = '';
                item.passportCountry = '';
                item.passportExpireDate = '';
                item.errorDateofbirth = true;
                item.errorCountry = true;
                item.errorPassport = true;
                item.errorPassportCountry = true;
                item.errorPassportExpireDate = true;
            }
        }
        else if (item && idx == 2) {
            item.genderdisplay = '';
            item.name = '';
            item.dateofbirth = '';
            item.errorGender = true;
            item.errorName = true;
            item.errorDateofbirth = true;
            item.textErrorInfo = "Vui lòng nhập thông tin " + (!item.isInfant ? "Trẻ em" : "Em bé") + " " + (!item.isInfant ? item.id : item.iddisplay);
            if (se.isExtenal) {
                item.dateofbirth = '';
                item.country = '';
                item.passport = '';
                item.passportCountry = '';
                item.passportExpireDate = '';
                item.errorDateofbirth = true;
                item.errorCountry = true;
                item.errorPassport = true;
                item.errorPassportCountry = true;
                item.errorPassportExpireDate = true;
            }
        }
    }
    openLotusPointSave(itemAdult) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se._flightService.itemFlightCache.airlineMemberCode = itemAdult.airlineMemberCode;
            const modal = yield this.modalCtrl.create({
                component: _flightpointsave_flightpointsave_page__WEBPACK_IMPORTED_MODULE_12__["FlightpointsavePage"]
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data && data.data.code) {
                    itemAdult.airlineMemberCode = data.data.code;
                }
            });
        });
    }
    inputOnFocus(item, type) {
        var se = this;
        if (se.activeStep == 2 && se.hasinput) {
            se.hasinput = false;
        }
        se.clearError(item, type);
        if ((type == 2 && !item.name) || (type == 9 && !se.hoten)) {
            if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                se.inputtext = true;
                if (type == 2) {
                    se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                }
                else {
                    se.createHintPaxNameStep2(item, se.listPaxSuggestByMemberId);
                }
            }
            else {
                se.storage.get('listpaxcache').then((data) => {
                    if (data) {
                        se.inputtext = true;
                        if (type == 2) {
                            se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                        }
                        else {
                            se.createHintPaxNameStep2(item, se.listPaxSuggestByMemberId);
                        }
                    }
                });
            }
        }
    }
    inputFocus(item, event) {
        var se = this;
        if (!se.inputtext) {
            if (item && !item.hidePaxHint) {
                if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                    se.inputtext = true;
                    se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                }
                else {
                    se.storage.get('listpaxcache').then((data) => {
                        if (data) {
                            se.inputtext = true;
                            se.createHintPaxName(item, data);
                        }
                    });
                }
            }
            else if (!se.hidepaxhint && se.activeStep == 2) {
                if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                    se.inputtext = true;
                    se.createHintPaxNameStep2(item, se.listPaxSuggestByMemberId);
                }
            }
        }
        else if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
            if (se.activeStep == 1) {
                se.inputtext = true;
                se.updateHintPaxName(item, se.gf.convertFontVNI(event.target.value), se.listPaxSuggestByMemberId);
            }
            else {
                se.inputtext = true;
                se.updateHintPaxNameStep2(item, se.gf.convertFontVNI(event.target.value), se.listPaxSuggestByMemberId);
            }
        }
    }
    updateHintPaxName(item, value, listpaxhint) {
        var se = this;
        let arraypax = [];
        se.listpaxhint = [];
        if (item) {
            se.currentSelectPax = item;
            for (let index = 0; index < listpaxhint.length; index++) {
                const element = listpaxhint[index];
                if (!item.isChild && !element.isChild && element.name && value && se.gf.convertFontVNI(element.name).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                    if (!item.genderdisplay || (item.gender && item.gender == element.gender)) {
                        arraypax.push(element);
                    }
                }
                else if (item.isChild && element.name && value && element.isChild && se.gf.convertFontVNI(element.name).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                    if (!item.genderdisplay || (item.gender && item.gender == element.gender)) {
                        arraypax.push(element);
                    }
                }
            }
        }
        se.listpaxhint = [...arraypax];
    }
    createHintPaxName(item, listpaxhint) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let arraypax = [];
            if (item) {
                se.currentSelectPax = item;
                for (let index = 0; index < listpaxhint.length; index++) {
                    const element = listpaxhint[index];
                    if (!item.isChild && !element.isChild) {
                        if (!item.genderdisplay || (item.gender && item.gender == element.gender)) {
                            arraypax.push(element);
                        }
                    }
                    else if (item.isChild && element.isChild) {
                        if (!item.genderdisplay || (item.gender && item.gender == element.gender)) {
                            arraypax.push(element);
                        }
                    }
                }
            }
            se.listpaxhint = [...arraypax];
        });
    }
    createHintPaxNameStep2(item, listpaxhint) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let arraypax = [];
            for (let index = 0; index < listpaxhint.length; index++) {
                const element = listpaxhint[index];
                if (!element.isChild) {
                    arraypax.push(element);
                }
            }
            se.listpaxhint = [...arraypax];
        });
    }
    updateHintPaxNameStep2(item, value, listpaxhint) {
        var se = this;
        let arraypax = [];
        for (let index = 0; index < listpaxhint.length; index++) {
            const element = listpaxhint[index];
            if (value && element.name && !element.isChild && se.gf.convertFontVNI(element.name).toLowerCase().indexOf(value.toLowerCase()) != -1) {
                arraypax.push(element);
            }
        }
        se.listpaxhint = [...arraypax];
    }
    selectPaxHint(paxhint) {
        var se = this;
        se.inputtext = false;
        if (se.currentSelectPax && se.activeStep == 1) {
            se.currentSelectPax.name = paxhint.name;
            se.currentSelectPax.gender = paxhint.gender;
            se.currentSelectPax.genderdisplay = paxhint.genderdisplay;
            se.currentSelectPax.errorGender = false;
            se.currentSelectPax.errorInfo = false;
            se.currentSelectPax.textErrorInfo = '';
            se.currentSelectPax.airlineMemberCode = paxhint.airlineMemberCode ? paxhint.airlineMemberCode : se.currentSelectPax.airlineMemberCode;
            if (paxhint.dateofbirth) {
                se.currentSelectPax.dateofbirth = paxhint.dateofbirth ? paxhint.dateofbirth : se.currentSelectPax.dateofbirth;
                se.currentSelectPax.errorDateofbirth = false;
                se.currentSelectPax.textErrorDateofbirth = '';
            }
            if (se.isExtenal) {
                se.currentSelectPax.country = paxhint.country ? paxhint.country : se.currentSelectPax.country;
                se.currentSelectPax.passport = paxhint.passport ? paxhint.passport : se.currentSelectPax.passport;
                se.currentSelectPax.passportCountry = paxhint.passportCountry ? paxhint.passportCountry : se.currentSelectPax.passportCountry;
                se.currentSelectPax.passportExpireDate = paxhint.passportExpireDate ? paxhint.passportExpireDate : se.currentSelectPax.passportExpireDate;
                se.currentSelectPax.errorDateofbirth = false;
                se.currentSelectPax.errorCountry = false;
                se.currentSelectPax.errorPassport = false;
                se.currentSelectPax.errorPassportCountry = false;
                se.currentSelectPax.errorPassportExpireDate = false;
                se.currentSelectPax.textErrorDateofbirth = '';
                se.currentSelectPax.textErrorPassport = '';
                se.currentSelectPax.textErrorPassportCountry = '';
                se.currentSelectPax.textErrorPassportExpireDate = '';
            }
            se.currentSelectPax.textErrorInfo = '';
            se.currentSelectPax.textErrorGender = '';
            se.currentSelectPax.textErrorName = '';
            se.currentSelectPax.textErrorCountry = '';
            se.currentSelectPax.byPassCheckRegularName = true;
        }
        else {
            se.hoten = paxhint.name ? paxhint.name : se.hoten;
            se.sodienthoai = paxhint.phoneNumber ? paxhint.phoneNumber : se.sodienthoai;
            se._flightService.itemFlightCache.hotenstep2 = se.hoten;
            se._flightService.itemFlightCache.sodienthoaistep2 = se.sodienthoai;
            se._flightService.itemFlightCache.emailstep2 = se.email;
        }
    }
    inputLostFocus(item, isadult) {
        var se = this;
        setTimeout(() => {
            se.inputtext = false;
            if (se.activeStep == 1) {
                se.checkInput(item, 2, isadult);
            }
            else {
                se.checkInputUserInfo(1);
            }
            if (se.hidepaxhint) {
                item.hidePaxHint = true;
                se.hidepaxhint = false;
            }
        }, 400);
    }
    showConfirmEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Đổi email',
                        role: 'OK',
                        handler: () => {
                            this.showChangeEmail();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showChangeEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const modal = yield this.modalCtrl.create({
                component: _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_13__["ConfirmemailPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data && data.data.email) {
                    if (data.data.email) {
                        se.storage.remove("email");
                        se.storage.set("email", data.data.email);
                        se.storage.set("saveemail", data.data.email);
                        se.email = data.data.email;
                        se.gotopaymentpage();
                    }
                }
            });
        });
    }
    getSummaryBooking(data) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.pnr.resNo,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_11__(options, function (error, response, body) {
                if (error) {
                    error.page = "flightpaymentselect";
                    error.func = "getSummaryBooking";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
            });
        });
    }
    showAlertChoiceSeat() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let msg = 'Vui lòng chọn lại ghế ngồi!';
            let alert = yield se.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-choiceseat",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            se._flightService.itemFlightCache.backtochoiceseat = true;
                            se._flightService.itemFlightReChoiceSeat.emit(1);
                            se.navCtrl.navigateBack('flightaddservice');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    gobackpage() {
        this._flightService.itemFlightCache.hotenstep2 = this.hoten;
        this._flightService.itemFlightCache.sodienthoaistep2 = this.sodienthoai;
        this._flightService.itemFlightCache.emailstep2 = this.email;
        this.navCtrl.navigateBack('flightadddetails');
    }
    gotoaddservicepage() {
        this.showAlertChoiceSeat();
    }
    selectCountry(item, itemcountry) {
        var se = this;
        se.zone.run(() => {
            item.country = itemcountry.name;
            item.showSelectCountry = false;
            item.hasselectcountry = true;
            item.errorCountry = false;
            item.textErrorCountry = "";
        });
    }
    getCountry(ev, item) {
        var se = this;
        se.zone.run(() => {
            if (ev != 'dropdownicon') {
                item.showSelectCountry = true;
            }
            else {
                item.showSelectCountry = !item.showSelectCountry;
                if (!item.showSelectCountry && !item.country) {
                    item.errorCountry = true;
                }
            }
        });
        if (ev != 'dropdownicon' && ev.detail && ev.detail.data) {
            se.textCountrySearch = ev.detail.data;
            const val = ev.detail.data.toLowerCase();
            let filteritems = se.listcountryFull.filter((element) => { return se.gf.convertFontVNI(element.name.toLowerCase()).indexOf(val) != -1; });
            se.zone.run(() => {
                if (filteritems && filteritems.length > 0) {
                    se.listcountry = [...filteritems];
                }
            });
            item.errorCountry = false;
        }
        else {
            se.textCountrySearch = "";
            se.zone.run(() => {
                se.listcountry = [...se.listcountryFull];
            });
        }
    }
    blurCountry(item) {
        setTimeout(() => {
            this.zone.run(() => {
                item.showSelectCountry = false;
            });
        }, 100);
    }
    selectPassportCountry(item, itemcountry) {
        var se = this;
        se.zone.run(() => {
            item.passportCountry = itemcountry.name;
            item.showSelectPassportCountry = false;
            item.errorPassportCountry = false;
            item.textErrorPassportCountry = "";
        });
    }
    getPassportCountry(ev, item) {
        var se = this;
        se.zone.run(() => {
            if (ev != 'dropdownicon') {
                item.showSelectPassportCountry = true;
            }
            else {
                item.showSelectPassportCountry = !item.showSelectPassportCountry;
                if (!item.showSelectPassportCountry && !item.passportCountry) {
                    item.errorPassportCountry = true;
                }
            }
        });
        if (ev != 'dropdownicon' && ev.detail && ev.detail.data) {
            se.textPassportCountrySearch = ev.detail.data;
            const val = ev.detail.data.toLowerCase();
            let filteritems = se.listcountryFull.filter((element) => { return se.gf.convertFontVNI(element.name.toLowerCase()).indexOf(val) != -1; });
            se.zone.run(() => {
                if (filteritems && filteritems.length > 0) {
                    se.listpassportcountry = [...filteritems];
                }
            });
        }
        else {
            se.textPassportCountrySearch = "";
            se.zone.run(() => {
                se.listpassportcountry = [...se.listcountryFull];
            });
        }
    }
    blurPassportCountry(item) {
        setTimeout(() => {
            this.zone.run(() => {
                item.showSelectPassportCountry = false;
            });
        }, 100);
    }
    showNameMail(ev) {
        this.ishideNameMail = ev.detail.checked;
    }
    hidePaxHint() {
        this.hidepaxhint = true;
    }
    clearError(item, typeInput) {
        var se = this;
        if (typeInput == 1) {
            item.errorGender = false;
            item.textErrorGender = '';
        }
        if (typeInput == 2) {
            item.errorName = false;
            item.errorSubName = false;
            item.textErrorName = '';
            item.textErrorSubName = '';
            item.errorInfo = false;
            item.textErrorInfo = '';
        }
        if (typeInput == 3) {
            item.errorDateofbirth = false;
            item.textErrorDateofbirth = '';
        }
        if (typeInput == 4) {
            item.errorCountry = false;
            item.textErrorCountry = '';
        }
        if (typeInput == 5) {
            item.errorPassport = false;
            item.textErrorPassport = '';
        }
        if (typeInput == 6) {
            item.errorPassportCountry = false;
            item.textErrorPassportCountry = '';
        }
        if (typeInput == 7) {
            item.errorPassportExpireDate = false;
            item.textErrorPassportExpireDate = '';
        }
        if (typeInput == 9) {
            se.hoteninvalid = false;
            se.subnameinvalid = false;
        }
        if (typeInput == 10) {
            se.sodienthoaiinvalid = false;
        }
        if (typeInput == 11) {
            se.emailinvalid = false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], FlightadddetailsPage.prototype, "keyEvent", null);
FlightadddetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightadddetails',
        template: __webpack_require__(/*! ./flightadddetails.page.html */ "./src/app/flightadddetails/flightadddetails.page.html"),
        styles: [__webpack_require__(/*! ./flightadddetails.page.scss */ "./src/app/flightadddetails/flightadddetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_14__["Keyboard"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_15__["Facebook"]])
], FlightadddetailsPage);



/***/ })

}]);
//# sourceMappingURL=flightadddetails-flightadddetails-module.js.map