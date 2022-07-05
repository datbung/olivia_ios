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

<<<<<<< HEAD
module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\" *ngIf=\"activeStep == 1 else step2title\">Thông tin hành khách</div>\n            <ng-template #step2title>\n                <div class=\"div-title\">Thông tin liên lạc</div>\n            </ng-template>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n  <ion-content >\n    <div class=\"content-flightadddetails\">\n        <div *ngIf=\"activeStep == 1 else stepUserInfo\">\n            <div class=\"div-img-step\">\n                <img class=\"img-step\" src=\"./assets/ic_flight/step_2.svg\">\n            </div>\n    \n            <div class=\"div-title m-bottom-12\">Thông tin hành khách</div>\n    \n            <div *ngIf=\"adults && adults.length >0\">\n                <div *ngFor=\"let itemAdult of adults; let idxa = index\">\n                    <div  class=\"div-sub-title d-flex\">\n                            <div class=\"div-width-300\">Người lớn {{itemAdult.id}}</div>\n                            <div class=\"div-width-100 text-right\" *ngIf=\"itemAdult.genderdisplay && itemAdult.name\" (click)= \"editPaxInfo(itemAdult, 1)\">Xóa</div>\n                            \n                    </div>\n                    <div class=\"d-flex\">\n                        <div [ngClass]=\"(itemAdult.errorGender || itemAdult.errorInfo) ? 'div-left cls-error' : 'div-left'\" (click)=\"selectAdultGender(itemAdult)\" (blur)=\"checkInput(itemAdult, 1, true)\">\n                            <div [ngClass]=\"!itemAdult.genderdisplay ?  'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\n                                Danh xưng\n                            </div>\n                            <div class= 'text-gender' *ngIf=\"itemAdult.genderdisplay\">{{itemAdult.genderdisplay}}</div>\n                            <div [ngClass]=\"(itemAdult.errorGender || itemAdult.errorInfo)? 'div-icon-down cls-error' : 'div-icon-down'\">\n                                <img *ngIf=\"!(itemAdult.errorGender || itemAdult.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\n                                <img *ngIf=\"(itemAdult.errorGender || itemAdult.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\n                            </div>\n                        </div>\n                        <div [ngClass]=\"(itemAdult.errorName || itemAdult.errorSubName || itemAdult.errorInfo) ? 'div-right cls-error' : 'div-right'\">\n                                <ion-label [ngClass]=\"!itemAdult.name ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\" >Họ và tên đầy đủ</ion-label>\n                                <ion-input class=\"cls-input-custom\" type=\"text\" (ionChange)=textchangehoten(itemAdult) [(ngModel)]=\"itemAdult.name\" (ionInput)=\"inputFocus(itemAdult, $event, 2)\" (ionBlur)=\"inputLostFocus(itemAdult, true)\"  (ionFocus)=\"inputOnFocus(itemAdult, 2)\" required></ion-input>\n                            \n                            \n                        </div>\n                    </div>\n                    <div *ngIf=\"_flightService.itemFlightCache.priceCathay>0 && !isExtenal\" class=\"d-flex m-top-8 \">\n\n                        <div class=\"div-left no-border\"></div>\n                       \n                            <div class=\"div-right\">\n                                <div [ngClass]=\"(itemAdult.errorDateofbirth || (!itemAdult.dateofbirth && itemAdult.errorInfo)) ? 'div-width-100 cls-error ' : 'div-width-100 border-bottom' \">\n                                    <ion-label [ngClass]=\"!itemAdult.dateofbirth ? 'sub-label m-bottom-6' : 'sub-label m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                    <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\"  class=\"cls-iondatetime\"\n                                        [(ngModel)]=\"itemAdult.dateofbirth\" (ionBlur)=\"checkInput(itemAdult, 3, true)\" required></ion-datetime>\n                                </div>\n                                \n                                </div>\n        \n                    </div>\n                    <div class=\"p-top-6\">\n                        <ion-label class=\"text-sub\">Điền đầy đủ Họ tên như trên giấy tờ tùy thân dùng để thực hiện chuyến bay</ion-label>\n                    </div>\n\n                    <div *ngIf=\"isExtenal && showLotusPoint\">\n                        <div class=\"d-flex p-relative m-top-16 h-45 \">\n                            <div [ngClass]=\"(itemAdult.errorDateofbirth || (!itemAdult.dateofbirth && itemAdult.errorInfo)) ? 'div-width-100 cls-error' : 'div-width-100' \">\n                                <ion-label [ngClass]=\"!itemAdult.dateofbirth ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemAdult.dateofbirth ? 'cls-datetofbirth' : 'cls-datetofbirth m-top-16'\"\n                                    [(ngModel)]=\"itemAdult.dateofbirth\" (ionBlur)=\"checkInput(itemAdult, 3, true)\" required></ion-datetime>\n                            </div>\n\n                            <div [ngClass]=\"(itemAdult.errorCountry || (!itemAdult.errorCountry && itemAdult.errorInfo)) ? 'div-width-100 m-left-8 border-bottom cls-error' : 'div-width-100 m-left-8 border-bottom'\" >\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemAdult.country ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc tịch\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom\" [(ngModel)]=\"itemAdult.country\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getCountry($event, itemAdult)\" (ionBlur)=\"checkInput(itemAdult, 4, true)\" (ionFocus)=\"inputOnFocus(itemAdult, 4)\"></ion-searchbar>\n                                </div>\n                              \n                                <div [ngClass]=\"(itemAdult.errorCountry || itemAdult.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6' \" (click)=\"getCountry('dropdownicon', itemAdult)\">\n                                    <img *ngIf=\"!itemAdult.errorCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemAdult.errorCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemAdult.showSelectCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itemcountry of listcountry\" (click)=\"selectCountry(itemAdult, itemcountry)\">{{ itemcountry.name }}</ion-item>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div [ngClass]=\"(itemAdult.errorPassport || (!itemAdult.passport && itemAdult.errorInfo)) ? 'p-relative m-top-8 cls-error' : 'p-relative m-top-8'\">\n                            <ion-label [ngClass]=\"!itemAdult.passport ? 'sub-label label-passport' : 'sub-label label-passport cls-passport-transition'\" >Số hộ chiếu</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" [(ngModel)]=\"itemAdult.passport\" (ionBlur)=\"checkInput(itemAdult, 5, true)\" (ionFocus)=\"inputOnFocus(itemAdult, 5)\" required></ion-input>\n                            \n                        </div>\n\n                        <div class='d-flex p-relative m-top-16 h-45'>\n                            <div [ngClass]=\"(itemAdult.errorPassportCountry || (!itemAdult.passportCountry && itemAdult.errorInfo)) ? 'div-width-100 p-relative border-bottom  w-100 cls-error' : 'div-width-100 p-relative border-bottom w-100'\">\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemAdult.passportCountry ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc gia cấp\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom cls-passportcountry\" [(ngModel)]=\"itemAdult.passportCountry\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getPassportCountry($event, itemAdult)\" (ionBlur)=\"checkInput(itemAdult, 6, true)\"  (ionFocus)=\"inputOnFocus(itemAdult, 6)\"></ion-searchbar>\n                                </div>\n\n                                <div [ngClass]=\"(itemAdult.errorPassportCountry || itemAdult.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6' \"   (click)=\"getPassportCountry('dropdownicon', itemAdult)\">\n                                    <img *ngIf=\"!itemAdult.errorPassportCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemAdult.errorPassportCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemAdult.showSelectPassportCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itempassportcountry of listpassportcountry\" (click)=\"selectPassportCountry(itemAdult, itempassportcountry)\" >{{ itempassportcountry.name }}</ion-item>\n                                </div>\n                            </div>\n\n                            <div [ngClass]=\"(itemAdult.errorPassportExpireDate || (!itemAdult.passportExpireDate && itemAdult.errorInfo))? 'div-width-100 m-left-8 cls-error' : 'div-width-100 m-left-8'\">\n                                <ion-label [ngClass]=\"!itemAdult.passportExpireDate ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Ngày hết hạn</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxepdate\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemAdult.passportExpireDate ? 'cls-datetofbirth w-200' : 'cls-datetofbirth m-top-16 w-200'\"\n                                    [(ngModel)]=\"itemAdult.passportExpireDate\" (ionBlur)=\"checkInput(itemAdult, 7, true)\" required></ion-datetime>\n                            </div>\n                        </div>\n                    </div>\n\n                  \n                    <div *ngIf=\"showLotusPoint && !itemAdult.airlineMemberCode\" class=\"text-lotus-point\" (click)=\"openLotusPointSave(itemAdult)\">Nhập thẻ bông sen vàng <img class=\"img-vector\" src=\"./assets/imgs/vector.svg\" /></div>\n                    <div *ngIf=\"showLotusPoint && itemAdult.airlineMemberCode\" class=\"text-lotus-code\" (click)=\"openLotusPointSave(itemAdult)\">Thẻ bông sen vàng: {{ itemAdult.airlineMemberCode }}</div>\n\n                    <!-- show error -->\n                    <div class=\"div-showerror m-top-16\" *ngIf=\"!inputtext\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"itemAdult.textErrorInfo\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorInfo }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorGender\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorGender }}\n                            </div>\n                        </div>\n                        \n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemAdult.textErrorInfo && itemAdult.textErrorName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.name && !itemAdult.textErrorName && itemAdult.textErrorSubName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorSubName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorDateofbirth\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorDateofbirth }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassport\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassport }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassportCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassportCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassportExpireDate\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassportExpireDate }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"div-split\"></div>\n                </div>\n            </div>\n           \n    \n            <div *ngIf=\"childs && childs.length >0\">\n                <div *ngFor=\"let itemChild of childs; let idxc = index\">\n                    <div class=\"d-flex\">\n                        <div class=\"div-width-300\">\n                                <div class=\"div-sub-title \" *ngIf=\"!itemChild.isInfant else divinfant\">Trẻ em {{itemChild.id}} <span class=\"sub-label f-12\">(Từ 2 - Dưới 12 tuổi)</span></div>\n                                <ng-template #divinfant>\n                                    <div class=\"div-sub-title m-bottom-6\">Em bé {{itemChild.iddisplay}} <span class=\"sub-label f-12\">(Dưới 2 tuổi)</span></div>\n                                </ng-template>\n                        </div>\n                        <div class=\"div-width-100 text-right\" *ngIf=\"itemChild.genderdisplay && itemChild.name && itemChild.dateofbirth\" (click)= \"editPaxInfo(itemChild, 2)\">Xóa</div>\n                    </div>\n                  \n                    <div class=\" d-flex \">\n                        <div [ngClass]=\"(itemChild.errorGender || itemChild.errorInfo)? 'div-left cls-error' : 'div-left '\" (click)=\"selectGender(itemChild)\" (blur)=\"checkInput(itemChild, 1, false)\">\n                            <div [ngClass]=\"!itemChild.genderdisplay ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\n                                <ion-label class=\"sub-label\">Danh xưng</ion-label>\n                            </div>\n                            <div class=\"text-gender\" *ngIf=\"itemChild.genderdisplay\" >{{itemChild.genderdisplay}}</div>\n                            <div [ngClass]=\"(itemChild.errorGender || itemChild.errorInfo)? 'div-icon-down cls-error' : 'div-icon-down'\">\n                                <img *ngIf=\"!(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\n                                <img *ngIf=\"(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\n                            </div>\n                        </div>\n                        <div [ngClass]=\"(itemChild.errorName || itemChild.errorSubName || itemChild.errorInfo) ? 'div-right cls-error' : 'div-right'\">\n                            <ion-label [ngClass]=\"!itemChild.name ? 'sub-label m-top-10 label-absolute'  : 'sub-label m-top-10 label-absolute cls-gender-transition'\" >Họ và tên đầy đủ</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" (ionChange)=textchangehoten(itemChild) [(ngModel)]=\"itemChild.name\" (ionInput)=\"inputFocus(itemChild, $event)\" (ionBlur)=\"inputLostFocus(itemChild, false)\" (ionFocus)=\"inputOnFocus(itemChild, 2)\" required></ion-input>\n                        \n                        \n                    </div>\n                    </div>\n\n                    <div class=\"p-top-6\">\n                        <ion-label class=\"text-sub\">Điền đầy đủ Họ tên như trên giấy tờ tùy thân dùng để thực hiện chuyến bay</ion-label>\n                    </div>\n                    <div *ngIf=\"!(isExtenal && showLotusPoint)\" class=\" d-flex m-top-8 \">\n                        <div class=\"div-left no-border\"></div>\n                        <div [ngClass]=\"(itemChild.errorDateofbirth || (itemChild.errorInfo && !itemChild.dateofbirth) )? 'div-right cls-error' : 'div-right' \">\n                                <ion-label class=\"sub-label m-bottom-6\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" class=\"cls-iondatetime\" \n                                    [(ngModel)]=\"itemChild.dateofbirth\" (ionChange)=\"checkInput(itemChild, 3, false)\" required></ion-datetime>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"isExtenal && showLotusPoint\">\n                        <div class=\"d-flex p-relative m-top-16 h-45\">\n                            <div [ngClass]=\"(itemChild.errorDateofbirth || (itemChild.errorInfo && !itemChild.dateofbirth) )? 'div-width-100 cls-error' : 'div-width-100' \">\n                                <ion-label [ngClass]=\"!itemChild.dateofbirth ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemChild.dateofbirth ? 'cls-datetofbirth' : 'cls-datetofbirth m-top-16'\"\n                                    [(ngModel)]=\"itemChild.dateofbirth\" (ionChange)=\"checkInput(itemChild, 3, false)\" required></ion-datetime>\n                            </div>\n\n                            <div [ngClass]=\"(itemChild.errorCountry || (itemChild.errorInfo && !itemChild.country)) ? 'div-width-100 m-left-8 border-bottom cls-error' : 'div-width-100 m-left-8 border-bottom'\" >\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemChild.country ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc tịch\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom\" [(ngModel)]=\"itemChild.country\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getCountry($event, itemChild)\" (ionBlur)=\"checkInput(itemChild, 4, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 4)\"></ion-searchbar>\n                                </div>\n                              \n                                <div [ngClass]=\"(itemChild.errorCountry || itemChild.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6'\" (click)=\"getCountry('dropdownicon', itemChild)\">\n                                    <img *ngIf=\"!itemChild.errorCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemChild.errorCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemChild.showSelectCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itemcountry of listcountry\" (click)=\"selectCountry(itemChild, itemcountry)\">{{ itemcountry.name }}</ion-item>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div [ngClass]=\"(itemChild.errorPassport || (itemChild.errorInfo && !itemChild.passport)) ? 'p-relative m-top-8 cls-error' : 'p-relative m-top-8'\">\n                            <ion-label [ngClass]=\"!itemChild.passport ? 'sub-label label-passport' : 'sub-label label-passport cls-passport-transition'\" >Số hộ chiếu</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" [(ngModel)]=\"itemChild.passport\" (ionBlur)=\"checkInput(itemChild, 5, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 5)\" required></ion-input>\n                            \n                        </div>\n\n                        <div class=\"d-flex p-relative m-top-16 h-45\">\n                            <div [ngClass]=\"(itemChild.errorPassportCountry || (itemChild.errorInfo && !itemChild.passportCountry)) ? 'div-width-100 p-relative border-bottom  w-100 cls-error' : 'div-width-100 p-relative border-bottom  w-100'\">\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemChild.passportCountry ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc gia cấp\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom cls-passportcountry\" [(ngModel)]=\"itemChild.passportCountry\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getPassportCountry($event, itemChild)\" (ionBlur)=\"checkInput(itemChild, 6, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 6)\"></ion-searchbar>\n                                </div>\n\n                                <div [ngClass]=\"(itemChild.errorPassportCountry || itemChild.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6'\"  (click)=\"getPassportCountry('dropdownicon', itemChild)\">\n                                    <img *ngIf=\"!itemChild.errorPassportCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemChild.errorPassportCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemChild.showSelectPassportCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itempassportcountry of listpassportcountry\" (click)=\"selectPassportCountry(itemChild, itempassportcountry)\">{{ itempassportcountry.name }}</ion-item>\n                                </div>\n                            </div>\n\n                            <div [ngClass]=\"(itemChild.errorPassportExpireDate || (itemChild.errorInfo && !itemChild.passportExpireDate))? 'div-width-100 m-left-8 cls-error' : 'div-width-100 m-left-8'\">\n                                <ion-label [ngClass]=\"!itemChild.passportExpireDate ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Ngày hết hạn</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxepdate\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemChild.passportExpireDate ? 'cls-datetofbirth w-200' : 'cls-datetofbirth m-top-16 w-200'\"\n                                    [(ngModel)]=\"itemChild.passportExpireDate\" (ionBlur)=\"checkInput(itemChild, 7, false)\" required></ion-datetime>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- show error -->\n                    <div class=\"div-showerror m-top-16\"  *ngIf=\"!inputtext\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"itemChild.textErrorInfo\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorInfo }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorGender\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorGender }}\n                            </div>\n                        </div>\n                        \n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemChild.textErrorInfo && itemChild.textErrorName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.name && !itemChild.textErrorName && itemChild.textErrorSubName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorSubName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemChild.textErrorInfo && itemChild.textErrorDateofbirth\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorDateofbirth }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassport\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassport }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassportCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassportCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassportExpireDate\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassportExpireDate }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"div-split\"></div>\n                </div>\n            </div>\n        </div>\n        <ng-template #stepUserInfo>\n            <div class=\"div-login m-bottom-16\" *ngIf=\"!loginuser\" (click)=\"goToLogin()\">\n                Đã có tài khoản? <span class=\"text-login\">Đăng nhập ngay</span>\n            </div>\n\n            <div class=\"div-user-info\">\n                    <div  [ngClass]=\" ( (hasinput && !hoten) || hoteninvalid || subnameinvalid)? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Họ tên</ion-label>\n                            <ion-input [(ngModel)]=\"hoten\" type=\"text\"  (ionBlur)=\"inputLostFocus(null)\" (ionInput)=\"inputFocus(null, $event)\" (ionFocus)=\"inputOnFocus(null, 9)\"></ion-input>\n                        </ion-item>\n                    </div>\n                    \n                    <div [ngClass]=\"((hasinput && !sodienthoai) || sodienthoaiinvalid) ? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Số điện thoại</ion-label>\n                            <ion-input [(ngModel)]=\"sodienthoai\" maxlength=11 required  (ionBlur)=\"checkInputUserInfo(2)\" (ionFocus)=\"inputOnFocus(null, 10)\"></ion-input>\n                        </ion-item>\n                    </div>\n    \n                    <div [ngClass]=\"((hasinput && !email) || emailinvalid) ? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Email</ion-label>\n                            <ion-input [(ngModel)]=\"email\" type=\"email\" (ionBlur)=\"checkInputUserInfo(3)\" (ionFocus)=\"inputOnFocus(null, 11)\"></ion-input>\n                        </ion-item>\n                    </div>\n                    \n                    <div class=\"div-showerror m-bottom-12\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"hasinput && !hoten\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập họ tên.\n                            </div>\n                        </div>\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hoten && hoteninvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Họ tên không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hoten && subnameinvalid\">\n                            <div class=\"div-icon-error width-40\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                              Không nằm trong danh sách họ phổ biến. Vui lòng kiểm tra lại!\n                            </div>\n                          </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hasinput && !sodienthoai\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập số điện thoại.\n                            </div>\n                        </div>\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"sodienthoai && sodienthoaiinvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Số điện thoại không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hasinput && !email\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập email.\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"email && emailinvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Định dạng địa chỉ email không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div class=\"div-vat\">\n                <div class=\"d-flex\">\n                    <ion-checkbox (ionChange)=\"(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\" style=\"width: 20px; height: 20px\"></ion-checkbox>\n                    <ion-label class=\"label-input\" style=\"margin: 3px 10px\">Xuất hóa đơn điện tử</ion-label>\n                </div>\n\n                <div *ngIf=\"ischeck\">\n                    <div *ngIf=\"ischeck\">\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Tên công ty</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Địa chỉ</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Mã số thuế</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div style=\"margin-left: 5px\">\n                            <ion-checkbox (ionChange)=\"showNameMail($event)\" style=\"width: 20px; height: 20px\" [checked]=\"ishideNameMail\"  color=\"secondary\"></ion-checkbox>\n                            <ion-label class=\"label-input\" style=\"margin: 0px 10px;\">Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n                          </div>\n                          <div *ngIf=\"!ishideNameMail\">\n                            <ion-col size=\"12\">\n                              <ion-item style=\"--padding-start: 0px\">\n                                <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Họ tên</ion-label>\n                                <ion-input class=\"cls-input-custom\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n                              </ion-item>\n                            </ion-col>\n                            <ion-col size=\"12\">\n                              <ion-item style=\"--padding-start: 0px\">\n                                <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Email nhận HĐ</ion-label>\n                                <ion-input class=\"cls-input-custom\"  [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n                              </ion-item>\n                            </ion-col>\n                          </div>\n                    </div>\n                  </div>\n            </div>\n        </ng-template>\n        \n        \n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class='div-close-paxhint' *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\" (click)=\"hidePaxHint()\"><img src='./assets/ic_close_b.svg'></div>\n    <div class=\"div-footer d-flex-footer\">\n        \n        <!-- <ng-template #showpaxhint> -->\n            <div class=\"div-pax-hint\" *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\">\n                    <div *ngFor=\"let itempax of listpaxhint\" class=\"d-flex m-bottom-16\" (click)=\"selectPaxHint(itempax)\">\n                        <div class=\"icon-pax\">\n                                <img src=\"./assets/ic_flight/icon-pax.svg\">\n                        </div>\n                        <div class=\"text-pax-hint\">\n                            {{itempax.name}}\n                        </div>\n                    </div>\n                    \n            </div>\n        <!-- </ng-template> -->\n\n        <div class=\"d-flex div-width-100\">\n            <div class=\"div-total\" (click)=\"showPriceDetail()\">\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ adult }} người lớn, {{ child }} trẻ em\n                </div>\n                <div class=\"text-total\" >{{totalPriceDisplay}}đ\n                  <sup>\n                    <img src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                 </div>\n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Xác nhận</button>\n              </div>\n        </div>\n    </div>\n  </ion-footer>"
=======
module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\" *ngIf=\"activeStep == 1 else step2title\">Thông tin hành khách</div>\n            <ng-template #step2title>\n                <div class=\"div-title\">Thông tin liên lạc</div>\n            </ng-template>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n  <ion-content >\n    <div class=\"content-flightadddetails\">\n        <div *ngIf=\"activeStep == 1 else stepUserInfo\">\n            <div class=\"div-img-step\">\n                <img class=\"img-step\" src=\"./assets/ic_flight/step_2.svg\">\n            </div>\n    \n            <div class=\"div-title m-bottom-12\">Thông tin hành khách</div>\n    \n            <div *ngIf=\"adults && adults.length >0\">\n                <div *ngFor=\"let itemAdult of adults; let idxa = index\">\n                    <div  class=\"div-sub-title d-flex\">\n                            <div class=\"div-width-300\">Người lớn {{itemAdult.id}}</div>\n                            <div class=\"div-width-100 text-right\" *ngIf=\"itemAdult.genderdisplay && itemAdult.name\" (click)= \"editPaxInfo(itemAdult, 1)\">Xóa</div>\n                            \n                    </div>\n                    <div class=\"d-flex\">\n                        <div [ngClass]=\"(itemAdult.errorGender || itemAdult.errorInfo) ? 'div-left cls-error' : 'div-left'\" (click)=\"selectAdultGender(itemAdult)\" (blur)=\"checkInput(itemAdult, 1, true)\">\n                            <div [ngClass]=\"!itemAdult.genderdisplay ?  'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\n                                Danh xưng\n                            </div>\n                            <div class= 'text-gender' *ngIf=\"itemAdult.genderdisplay\">{{itemAdult.genderdisplay}}</div>\n                            <div [ngClass]=\"(itemAdult.errorGender || itemAdult.errorInfo)? 'div-icon-down cls-error' : 'div-icon-down'\">\n                                <img *ngIf=\"!(itemAdult.errorGender || itemAdult.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\n                                <img *ngIf=\"(itemAdult.errorGender || itemAdult.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\n                            </div>\n                        </div>\n                        <div [ngClass]=\"(itemAdult.errorName || itemAdult.errorSubName || itemAdult.errorInfo) ? 'div-right cls-error' : 'div-right'\">\n                                <ion-label [ngClass]=\"!itemAdult.name ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\" >Họ và tên đầy đủ</ion-label>\n                                <ion-input class=\"cls-input-custom\" type=\"text\" (ionChange)=textchangehoten(itemAdult) [(ngModel)]=\"itemAdult.name\" (ionInput)=\"inputFocus(itemAdult, $event, 2)\" (ionBlur)=\"inputLostFocus(itemAdult, true)\"  (ionFocus)=\"inputOnFocus(itemAdult, 2)\" required></ion-input>\n                            \n                            \n                        </div>\n                    </div>\n                    <div *ngIf=\"_flightService.itemFlightCache.priceCathay>0 && !isExtenal\" class=\"d-flex m-top-8 \">\n\n                        <div class=\"div-left no-border\"></div>\n                       \n                            <div class=\"div-right\">\n                                <div [ngClass]=\"(itemAdult.errorDateofbirth || (!itemAdult.dateofbirth && itemAdult.errorInfo)) ? 'div-width-100 cls-error ' : 'div-width-100 border-bottom' \">\n                                    <ion-label [ngClass]=\"!itemAdult.dateofbirth ? 'sub-label m-bottom-6' : 'sub-label m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                    <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\"  class=\"cls-iondatetime\"\n                                        [(ngModel)]=\"itemAdult.dateofbirth\" (ionBlur)=\"checkInput(itemAdult, 3, true)\" required></ion-datetime>\n                                </div>\n                                \n                                </div>\n        \n                    </div>\n                    <div *ngIf=\"isExtenal && showLotusPoint\">\n                        <div class=\"d-flex p-relative m-top-16 h-45 \">\n                            <div [ngClass]=\"(itemAdult.errorDateofbirth || (!itemAdult.dateofbirth && itemAdult.errorInfo)) ? 'div-width-100 cls-error' : 'div-width-100' \">\n                                <ion-label [ngClass]=\"!itemAdult.dateofbirth ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemAdult.dateofbirth ? 'cls-datetofbirth' : 'cls-datetofbirth m-top-16'\"\n                                    [(ngModel)]=\"itemAdult.dateofbirth\" (ionBlur)=\"checkInput(itemAdult, 3, true)\" required></ion-datetime>\n                            </div>\n\n                            <div [ngClass]=\"(itemAdult.errorCountry || (!itemAdult.errorCountry && itemAdult.errorInfo)) ? 'div-width-100 m-left-8 border-bottom cls-error' : 'div-width-100 m-left-8 border-bottom'\" >\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemAdult.country ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc tịch\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom\" [(ngModel)]=\"itemAdult.country\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getCountry($event, itemAdult)\" (ionBlur)=\"checkInput(itemAdult, 4, true)\" (ionFocus)=\"inputOnFocus(itemAdult, 4)\"></ion-searchbar>\n                                </div>\n                              \n                                <div [ngClass]=\"(itemAdult.errorCountry || itemAdult.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6' \" (click)=\"getCountry('dropdownicon', itemAdult)\">\n                                    <img *ngIf=\"!itemAdult.errorCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemAdult.errorCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemAdult.showSelectCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itemcountry of listcountry\" (click)=\"selectCountry(itemAdult, itemcountry)\">{{ itemcountry.name }}</ion-item>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div [ngClass]=\"(itemAdult.errorPassport || (!itemAdult.passport && itemAdult.errorInfo)) ? 'p-relative m-top-8 cls-error' : 'p-relative m-top-8'\">\n                            <ion-label [ngClass]=\"!itemAdult.passport ? 'sub-label label-passport' : 'sub-label label-passport cls-passport-transition'\" >Số hộ chiếu</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" [(ngModel)]=\"itemAdult.passport\" (ionBlur)=\"checkInput(itemAdult, 5, true)\" (ionFocus)=\"inputOnFocus(itemAdult, 5)\" required></ion-input>\n                            \n                        </div>\n\n                        <div class='d-flex p-relative m-top-16 h-45'>\n                            <div [ngClass]=\"(itemAdult.errorPassportCountry || (!itemAdult.passportCountry && itemAdult.errorInfo)) ? 'div-width-100 p-relative border-bottom m-top-24 w-100 cls-error' : 'div-width-100 p-relative border-bottom m-top-24 w-100'\">\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemAdult.passportCountry ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc gia cấp\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom cls-passportcountry\" [(ngModel)]=\"itemAdult.passportCountry\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getPassportCountry($event, itemAdult)\" (ionBlur)=\"checkInput(itemAdult, 6, true)\"  (ionFocus)=\"inputOnFocus(itemAdult, 6)\"></ion-searchbar>\n                                </div>\n\n                                <div [ngClass]=\"(itemAdult.errorPassportCountry || itemAdult.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6' \"   (click)=\"getPassportCountry('dropdownicon', itemAdult)\">\n                                    <img *ngIf=\"!itemAdult.errorPassportCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemAdult.errorPassportCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemAdult.showSelectPassportCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itempassportcountry of listpassportcountry\" (click)=\"selectPassportCountry(itemAdult, itempassportcountry)\" >{{ itempassportcountry.name }}</ion-item>\n                                </div>\n                            </div>\n\n                            <div [ngClass]=\"(itemAdult.errorPassportExpireDate || (!itemAdult.passportExpireDate && itemAdult.errorInfo))? 'div-width-100 m-left-8 cls-error' : 'div-width-100 m-left-8'\">\n                                <ion-label [ngClass]=\"!itemAdult.passportExpireDate ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Ngày hết hạn</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemAdult.mindob\" [max]=\"itemAdult.maxepdate\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemAdult.passportExpireDate ? 'cls-datetofbirth w-200' : 'cls-datetofbirth m-top-16 w-200'\"\n                                    [(ngModel)]=\"itemAdult.passportExpireDate\" (ionBlur)=\"checkInput(itemAdult, 7, true)\" required></ion-datetime>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"p-top-6\">\n                        <ion-label class=\"text-sub\">Điền đầy đủ Họ tên như trên giấy tờ tùy thân dùng để thực hiện chuyến bay</ion-label>\n                    </div>\n\n                    <div *ngIf=\"showLotusPoint && !itemAdult.airlineMemberCode\" class=\"text-lotus-point\" (click)=\"openLotusPointSave(itemAdult)\">Nhập thẻ bông sen vàng <img class=\"img-vector\" src=\"./assets/imgs/vector.svg\" /></div>\n                    <div *ngIf=\"showLotusPoint && itemAdult.airlineMemberCode\" class=\"text-lotus-code\" (click)=\"openLotusPointSave(itemAdult)\">Thẻ bông sen vàng: {{ itemAdult.airlineMemberCode }}</div>\n\n                    <!-- show error -->\n                    <div class=\"div-showerror m-top-16\" *ngIf=\"!inputtext\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"itemAdult.textErrorInfo\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorInfo }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorGender\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorGender }}\n                            </div>\n                        </div>\n                        \n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemAdult.textErrorInfo && itemAdult.textErrorName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.name && !itemAdult.textErrorName && itemAdult.textErrorSubName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorSubName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorDateofbirth\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorDateofbirth }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassport\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassport }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassportCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassportCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemAdult.textErrorPassportExpireDate\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemAdult.textErrorPassportExpireDate }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"div-split\"></div>\n                </div>\n            </div>\n           \n    \n            <div *ngIf=\"childs && childs.length >0\">\n                <div *ngFor=\"let itemChild of childs; let idxc = index\">\n                    <div class=\"d-flex\">\n                        <div class=\"div-width-300\">\n                                <div class=\"div-sub-title \" *ngIf=\"!itemChild.isInfant else divinfant\">Trẻ em {{itemChild.id}} <span class=\"sub-label f-12\">(Từ 2 - Dưới 12 tuổi)</span></div>\n                                <ng-template #divinfant>\n                                    <div class=\"div-sub-title m-bottom-6\">Em bé {{itemChild.iddisplay}} <span class=\"sub-label f-12\">(Dưới 2 tuổi)</span></div>\n                                </ng-template>\n                        </div>\n                        <div class=\"div-width-100 text-right\" *ngIf=\"itemChild.genderdisplay && itemChild.name && itemChild.dateofbirth\" (click)= \"editPaxInfo(itemChild, 2)\">Xóa</div>\n                    </div>\n                  \n                    <div class=\" d-flex \">\n                        <div [ngClass]=\"(itemChild.errorGender || itemChild.errorInfo)? 'div-left cls-error' : 'div-left '\" (click)=\"selectGender(itemChild)\" (blur)=\"checkInput(itemChild, 1, false)\">\n                            <div [ngClass]=\"!itemChild.genderdisplay ? 'sub-label m-top-10 label-absolute' : 'sub-label m-top-10 label-absolute cls-gender-transition'\">\n                                <ion-label class=\"sub-label\">Danh xưng</ion-label>\n                            </div>\n                            <div class=\"text-gender\" *ngIf=\"itemChild.genderdisplay\" >{{itemChild.genderdisplay}}</div>\n                            <div [ngClass]=\"(itemChild.errorGender || itemChild.errorInfo)? 'div-icon-down cls-error' : 'div-icon-down'\">\n                                <img *ngIf=\"!(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_b.svg\">\n                                <img *ngIf=\"(itemChild.errorGender || itemChild.errorInfo)\" src=\"./assets/imgs/ic_down_red.svg\">\n                            </div>\n                        </div>\n                        <div [ngClass]=\"(itemChild.errorName || itemChild.errorSubName || itemChild.errorInfo) ? 'div-right cls-error' : 'div-right'\">\n                            <ion-label [ngClass]=\"!itemChild.name ? 'sub-label m-top-10 label-absolute'  : 'sub-label m-top-10 label-absolute cls-gender-transition'\" >Họ và tên đầy đủ</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" (ionChange)=textchangehoten(itemChild) [(ngModel)]=\"itemChild.name\" (ionInput)=\"inputFocus(itemChild, $event)\" (ionBlur)=\"inputLostFocus(itemChild, false)\" (ionFocus)=\"inputOnFocus(itemChild, 2)\" required></ion-input>\n                        \n                        \n                    </div>\n                    </div>\n\n                    <div class=\"p-top-6\">\n                        <ion-label class=\"text-sub\">Điền đầy đủ Họ tên như trên giấy tờ tùy thân dùng để thực hiện chuyến bay</ion-label>\n                    </div>\n                    <div *ngIf=\"!(isExtenal && showLotusPoint)\" class=\" d-flex m-top-8 \">\n                        <div class=\"div-left no-border\"></div>\n                        <div [ngClass]=\"(itemChild.errorDateofbirth || (itemChild.errorInfo && !itemChild.dateofbirth) )? 'div-right cls-error' : 'div-right' \">\n                                <ion-label class=\"sub-label m-bottom-6\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" class=\"cls-iondatetime\" \n                                    [(ngModel)]=\"itemChild.dateofbirth\" (ionChange)=\"checkInput(itemChild, 3, false)\" required></ion-datetime>\n                        </div>\n                    </div>\n\n                    <div *ngIf=\"isExtenal && showLotusPoint\">\n                        <div class=\"d-flex p-relative m-top-16 h-45\">\n                            <div [ngClass]=\"(itemChild.errorDateofbirth || (itemChild.errorInfo && !itemChild.dateofbirth) )? 'div-width-100 cls-error' : 'div-width-100' \">\n                                <ion-label [ngClass]=\"!itemChild.dateofbirth ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Sinh ngày</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxbod\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemChild.dateofbirth ? 'cls-datetofbirth' : 'cls-datetofbirth m-top-16'\"\n                                    [(ngModel)]=\"itemChild.dateofbirth\" (ionChange)=\"checkInput(itemChild, 3, false)\" required></ion-datetime>\n                            </div>\n\n                            <div [ngClass]=\"(itemChild.errorCountry || (itemChild.errorInfo && !itemChild.country)) ? 'div-width-100 m-left-8 border-bottom cls-error' : 'div-width-100 m-left-8 border-bottom'\" >\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemChild.country ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc tịch\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom\" [(ngModel)]=\"itemChild.country\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getCountry($event, itemChild)\" (ionBlur)=\"checkInput(itemChild, 4, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 4)\"></ion-searchbar>\n                                </div>\n                              \n                                <div [ngClass]=\"(itemChild.errorCountry || itemChild.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6'\" (click)=\"getCountry('dropdownicon', itemChild)\">\n                                    <img *ngIf=\"!itemChild.errorCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemChild.errorCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemChild.showSelectCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itemcountry of listcountry\" (click)=\"selectCountry(itemChild, itemcountry)\">{{ itemcountry.name }}</ion-item>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div [ngClass]=\"(itemChild.errorPassport || (itemChild.errorInfo && !itemChild.passport)) ? 'p-relative m-top-8 cls-error' : 'p-relative m-top-8'\">\n                            <ion-label [ngClass]=\"!itemChild.passport ? 'sub-label label-passport' : 'sub-label label-passport cls-passport-transition'\" >Số hộ chiếu</ion-label>\n                            <ion-input class=\"cls-input-custom\" type=\"text\" [(ngModel)]=\"itemChild.passport\" (ionBlur)=\"checkInput(itemChild, 5, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 5)\" required></ion-input>\n                            \n                        </div>\n\n                        <div class=\"d-flex p-relative m-top-16 h-45\">\n                            <div [ngClass]=\"(itemChild.errorPassportCountry || (itemChild.errorInfo && !itemChild.passportCountry)) ? 'div-width-100 p-relative border-bottom m-top-24 w-100 cls-error' : 'div-width-100 p-relative border-bottom m-top-24 w-100'\">\n                                <div class=\"sub-label label-country\">\n                                    <div [ngClass]=\" !itemChild.passportCountry ? 'p-absolute cls-country' :'p-absolute cls-country-transition'\">\n                                        Quốc gia cấp\n                                    </div>\n                                    <ion-searchbar class=\"cls-input-country-custom cls-passportcountry\" [(ngModel)]=\"itemChild.passportCountry\" searchIcon=\"false\" cancelIcon=\"false\" #input id=\"input\" style=\"padding: 0;\" autocomplete=\"on\" autocorrect=\"true\" debounce=\"10\" placeholder=\"\" (ionInput)=\"getPassportCountry($event, itemChild)\" (ionBlur)=\"checkInput(itemChild, 6, false)\"  (ionFocus)=\"inputOnFocus(itemChild, 6)\"></ion-searchbar>\n                                </div>\n\n                                <div [ngClass]=\"(itemChild.errorPassportCountry || itemChild.errorInfo)? 'div-icon-down bottom-6 cls-error' : 'div-icon-down bottom-6'\"  (click)=\"getPassportCountry('dropdownicon', itemChild)\">\n                                    <img *ngIf=\"!itemChild.errorPassportCountry\" src=\"./assets/imgs/ic_down_b.svg\">\n                                    <img *ngIf=\"itemChild.errorPassportCountry\" src=\"./assets/imgs/ic_down_red.svg\">\n                                </div>\n\n                                <div *ngIf=\"itemChild.showSelectPassportCountry\" class=\"cls-selection-country\">\n                                    <ion-item class=\"item-country\" *ngFor=\"let itempassportcountry of listpassportcountry\" (click)=\"selectPassportCountry(itemChild, itempassportcountry)\">{{ itempassportcountry.name }}</ion-item>\n                                </div>\n                            </div>\n\n                            <div [ngClass]=\"(itemChild.errorPassportExpireDate || (itemChild.errorInfo && !itemChild.passportExpireDate))? 'div-width-100 m-left-8 cls-error' : 'div-width-100 m-left-8'\">\n                                <ion-label [ngClass]=\"!itemChild.passportExpireDate ? 'sub-label label-dob m-bottom-6' : 'sub-label label-dob m-bottom-6 top-dob-24'\" position=\"floating\">Ngày hết hạn</ion-label>\n                                <ion-datetime cancelText=\"Thoát\" doneText=\"Hoàn thành\" [min]=\"itemChild.mindob\" [max]=\"itemChild.maxepdate\" displayFormat=\"DD-MM-YYYY\" pickerFormat=\"DD MM YYYY\" [ngClass]=\"!itemChild.passportExpireDate ? 'cls-datetofbirth w-200' : 'cls-datetofbirth m-top-16 w-200'\"\n                                    [(ngModel)]=\"itemChild.passportExpireDate\" (ionBlur)=\"checkInput(itemChild, 7, false)\" required></ion-datetime>\n                            </div>\n                        </div>\n                    </div>\n\n                    <!-- show error -->\n                    <div class=\"div-showerror m-top-16\"  *ngIf=\"!inputtext\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"itemChild.textErrorInfo\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorInfo }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorGender\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorGender }}\n                            </div>\n                        </div>\n                        \n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemChild.textErrorInfo && itemChild.textErrorName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.name && !itemChild.textErrorName && itemChild.textErrorSubName\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorSubName }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"!itemChild.textErrorInfo && itemChild.textErrorDateofbirth\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorDateofbirth }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassport\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassport }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassportCountry\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassportCountry }}\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"itemChild.textErrorPassportExpireDate\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                {{ itemChild.textErrorPassportExpireDate }}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"div-split\"></div>\n                </div>\n            </div>\n        </div>\n        <ng-template #stepUserInfo>\n            <div class=\"div-login m-bottom-16\" *ngIf=\"!loginuser\" (click)=\"goToLogin()\">\n                Đã có tài khoản? <span class=\"text-login\">Đăng nhập ngay</span>\n            </div>\n\n            <div class=\"div-user-info\">\n                    <div  [ngClass]=\" ( (hasinput && !hoten) || hoteninvalid || subnameinvalid)? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Họ tên</ion-label>\n                            <ion-input [(ngModel)]=\"hoten\" type=\"text\"  (ionBlur)=\"inputLostFocus(null)\" (ionInput)=\"inputFocus(null, $event)\" (ionFocus)=\"inputOnFocus(null, 9)\"></ion-input>\n                        </ion-item>\n                    </div>\n                    \n                    <div [ngClass]=\"((hasinput && !sodienthoai) || sodienthoaiinvalid) ? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Số điện thoại</ion-label>\n                            <ion-input [(ngModel)]=\"sodienthoai\" maxlength=11 required  (ionBlur)=\"checkInputUserInfo(2)\" (ionFocus)=\"inputOnFocus(null, 10)\"></ion-input>\n                        </ion-item>\n                    </div>\n    \n                    <div [ngClass]=\"((hasinput && !email) || emailinvalid) ? 'm-bottom-12 cls-error': 'm-bottom-12' \">\n                        <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Email</ion-label>\n                            <ion-input [(ngModel)]=\"email\" type=\"email\" (ionBlur)=\"checkInputUserInfo(3)\" (ionFocus)=\"inputOnFocus(null, 11)\"></ion-input>\n                        </ion-item>\n                    </div>\n                    \n                    <div class=\"div-showerror m-bottom-12\">\n                        <div class=\"d-flex cls-error\" *ngIf=\"hasinput && !hoten\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập họ tên.\n                            </div>\n                        </div>\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hoten && hoteninvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Họ tên không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hoten && subnameinvalid\">\n                            <div class=\"div-icon-error width-40\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                              Không nằm trong danh sách họ phổ biến. Vui lòng kiểm tra lại!\n                            </div>\n                          </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hasinput && !sodienthoai\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập số điện thoại.\n                            </div>\n                        </div>\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"sodienthoai && sodienthoaiinvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Số điện thoại không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"hasinput && !email\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Vui lòng nhập email.\n                            </div>\n                        </div>\n\n                        <div class=\"d-flex cls-error m-top-8\" *ngIf=\"email && emailinvalid\">\n                            <div class=\"div-icon-error\">\n                                <img class=\"img-error\" src=\"./assets/ic_flight/icon_warning.svg\" >\n                            </div>\n                            <div class=\"div-text-error m-left-28\">\n                                Định dạng địa chỉ email không hợp lệ. Vui lòng kiểm tra lại!\n                            </div>\n                        </div>\n                    </div>\n            </div>\n\n            <div class=\"div-vat\">\n                <div class=\"d-flex\">\n                    <ion-checkbox (ionChange)=\"(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\" style=\"width: 20px; height: 20px\"></ion-checkbox>\n                    <ion-label class=\"label-input\" style=\"margin: 3px 10px\">Xuất hóa đơn điện tử</ion-label>\n                </div>\n\n                <div *ngIf=\"ischeck\">\n                    <div *ngIf=\"ischeck\">\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Tên công ty</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Địa chỉ</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div class=\"m-bottom-12\">\n                          <ion-item style=\"padding-inline-start: 0;padding-inline-end: 0;--padding-start: 0\">\n                            <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Mã số thuế</ion-label>\n                            <ion-input class=\"cls-input-custom\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n                          </ion-item>\n                        </div>\n                        <div style=\"margin-left: 5px\">\n                            <ion-checkbox (ionChange)=\"showNameMail($event)\" style=\"width: 20px; height: 20px\" [checked]=\"ishideNameMail\"  color=\"secondary\"></ion-checkbox>\n                            <ion-label class=\"label-input\" style=\"margin: 0px 10px;\">Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n                          </div>\n                          <div *ngIf=\"!ishideNameMail\">\n                            <ion-col size=\"12\">\n                              <ion-item style=\"--padding-start: 0px\">\n                                <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Họ tên</ion-label>\n                                <ion-input class=\"cls-input-custom\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n                              </ion-item>\n                            </ion-col>\n                            <ion-col size=\"12\">\n                              <ion-item style=\"--padding-start: 0px\">\n                                <ion-label class=\"sub-label m-bottom-6 f-13\" position=\"floating\">Email nhận HĐ</ion-label>\n                                <ion-input class=\"cls-input-custom\"  [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n                              </ion-item>\n                            </ion-col>\n                          </div>\n                    </div>\n                  </div>\n            </div>\n        </ng-template>\n        \n        \n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class='div-close-paxhint' *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\" (click)=\"hidePaxHint()\"><img src='./assets/ic_close_b.svg'></div>\n    <div class=\"div-footer d-flex-footer\">\n        \n        <!-- <ng-template #showpaxhint> -->\n            <div class=\"div-pax-hint\" *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\">\n                    <div *ngFor=\"let itempax of listpaxhint\" class=\"d-flex m-bottom-16\" (click)=\"selectPaxHint(itempax)\">\n                        <div class=\"icon-pax\">\n                                <img src=\"./assets/ic_flight/icon-pax.svg\">\n                        </div>\n                        <div class=\"text-pax-hint\">\n                            {{itempax.name}}\n                        </div>\n                    </div>\n                    \n            </div>\n        <!-- </ng-template> -->\n\n        <div class=\"d-flex div-width-100\">\n            <div class=\"div-total\" (click)=\"showPriceDetail()\">\n                <div class=\"d-flex-footer text-sub-total\">\n                  {{ adult }} người lớn, {{ child }} trẻ em\n                </div>\n                <div class=\"text-total\" >{{totalPriceDisplay}}đ\n                  <sup>\n                    <img src=\"./assets/ic_green/ic_info.svg\">\n                  </sup>\n                 </div>\n              </div>\n              <div class=\"div-button\">\n                <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Xác nhận</button>\n              </div>\n        </div>\n    </div>\n  </ion-footer>"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/flightadddetails/flightadddetails.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/flightadddetails/flightadddetails.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 11px !important;\n}\n\n.content-flightadddetails {\n  padding: 16px;\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.content-flightadddetails .div-img-step {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.content-flightadddetails .div-title {\n  line-height: 22px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.content-flightadddetails .div-sub-title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n}\n\n.content-flightadddetails .div-left {\n  width: 120px;\n  margin-right: 16px;\n  border-bottom: solid 0.2px #cdcdcd;\n  position: relative;\n}\n\n.content-flightadddetails .sub-label {\n  font-size: 10px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.content-flightadddetails .f-12 {\n  font-size: 12px !important;\n}\n\n.content-flightadddetails .label-absolute {\n  position: absolute;\n  top: 22px;\n}\n\n.content-flightadddetails .label-country {\n  position: absolute;\n  top: 14px;\n  z-index: 2;\n  width: 50%;\n}\n\n.content-flightadddetails .m-left-8 {\n  margin-left: 8px;\n}\n\n.content-flightadddetails .m-left-28 {\n  margin-left: 28px;\n}\n\n.content-flightadddetails .bottom-6 {\n  bottom: 6px !important;\n}\n\n.content-flightadddetails .bottom-4 {\n  bottom: 4px !important;\n}\n\n.content-flightadddetails .h-45 {\n  height: 45px;\n}\n\n.content-flightadddetails .top-27 {\n  top: 27px !important;\n}\n\n.content-flightadddetails .border-bottom {\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.content-flightadddetails .label-passport {\n  position: absolute;\n  top: 9px;\n}\n\n.content-flightadddetails .label-passportcountry {\n  position: absolute;\n  top: 24px;\n}\n\n.content-flightadddetails .label-passportdate {\n  position: absolute;\n  top: 18px;\n}\n\n.content-flightadddetails .cls-passport-transition {\n  top: -12px;\n  transition: top 0.1s ease-out;\n}\n\n.content-flightadddetails .cls-country {\n  top: 9px;\n  z-index: -1;\n}\n\n.content-flightadddetails .cls-country-transition {\n  top: -11px;\n}\n\n.content-flightadddetails .cls-gender-transition {\n  top: 0px;\n  transition: top 0.1s ease-out;\n}\n\n.content-flightadddetails .cls-selection-country {\n  position: absolute;\n  height: 180px;\n  width: 100%;\n  overflow-y: scroll;\n  background: #fff;\n  z-index: 99;\n  margin-top: 36px;\n}\n\n.content-flightadddetails .cls-selection-country .item-country {\n  font-size: 12px;\n  height: 36px;\n  border-bottom: none !important;\n}\n\n.content-flightadddetails .cls-input-country-custom {\n  padding: 0;\n  border-bottom: none;\n  position: absolute;\n  margin-top: -14px;\n  background: transparent;\n  z-index: -1;\n  width: 90%;\n}\n\n.content-flightadddetails .cls-input-country-custom .searchbar-input.sc-ion-searchbar-ios {\n  background: transparent;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.content-flightadddetails .p-absolute {\n  position: absolute;\n}\n\n.content-flightadddetails .w-100 {\n  width: 100% !important;\n}\n\n.content-flightadddetails .w-200 {\n  width: 200% !important;\n}\n\n.content-flightadddetails .label-dob {\n  position: absolute;\n  top: -4px;\n}\n\n.content-flightadddetails .div-right {\n  width: 100%;\n  position: relative;\n}\n\n.content-flightadddetails .div-split {\n  height: 8px;\n  background-color: #f2f2f2;\n  margin: 16px -16px;\n}\n\n.content-flightadddetails .div-login {\n  padding: 10px 16px;\n  background: rgba(242, 242, 242, 0.5);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  margin: 0 -16px;\n  margin-top: -16px;\n  margin-bottom: 16px;\n}\n\n.content-flightadddetails .div-login .text-login {\n  color: #26bed6;\n}\n\n.content-flightadddetails .img-vector {\n  position: absolute;\n  margin-left: 8px;\n  margin-top: 6px;\n}\n\n.content-flightadddetails .text-lotus-point {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #26bed6;\n  margin-top: 8px;\n  margin-bottom: -8px;\n}\n\n.content-flightadddetails .text-lotus-code {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  margin-top: 8px;\n  margin-bottom: -8px;\n}\n\n.content-flightadddetails .text-gender {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.34px;\n  margin-top: 27px;\n}\n\n.content-flightadddetails .text-bold {\n  font-weight: 600 !important;\n}\n\n.content-flightadddetails .div-icon-down {\n  position: absolute;\n  right: 0;\n  bottom: 3px;\n}\n\n.content-flightadddetails .cls-datetofbirth {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n  margin-top: 27px;\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.content-flightadddetails .p-relative {\n  position: relative;\n}\n\n.content-flightadddetails .top-dob-24 {\n  top: -24px !important;\n}\n\n.content-flightadddetails .m-top-16 {\n  margin-top: 16px !important;\n}\n\n.content-flightadddetails .cls-iondatetime {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n  margin-top: 4px;\n  border-bottom: solid 0.2px #cdcdcd;\n  padding-top: 16px;\n  margin-top: -16px;\n}\n\n.content-flightadddetails .text-sub {\n  font-size: 12px;\n  text-align: left;\n  color: #828282;\n}\n\n.cls-error {\n  color: #e52822 !important;\n  font-size: 14px;\n}\n\n.cls-error ion-input {\n  color: #e52822 !important;\n}\n\n.cls-error ion-datetime {\n  color: #e52822 !important;\n}\n\n.cls-error ion-searchbar {\n  color: #e52822 !important;\n}\n\n.cls-error ion-item {\n  --border-color: #e52822 !important;\n}\n\n.cls-error .cls-input-custom {\n  border-bottom: 0.2px solid #e52822;\n}\n\n.cls-error .cls-iondatetime, .cls-error .cls-datetofbirth, .cls-error .border-bottom {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.border-bottom.cls-error {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.div-left.cls-error {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.div-showerror .div-icon-error {\n  position: absolute;\n}\n\n.div-showerror .div-text-error {\n  padding-top: 2px;\n}\n\n.cls-input-custom {\n  margin-top: 21px;\n  border-bottom: 0.2px solid #cdcdcd;\n}\n\n.no-border {\n  border-bottom: none !important;\n}\n\n.div-border-bottom {\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.cls-passportcountry {\n  width: 190% !important;\n}\n\n.f-13 {\n  font-size: 13px !important;\n}\n\n.div-vat {\n  margin-top: 20px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.div-width-300 {\n  width: 300%;\n}\n\n.text-right {\n  text-align: right;\n  color: #26bed6;\n  font-weight: 300;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n  display: flex;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n\n.d-flex-footer {\n  width: 100%;\n  height: auto;\n}\n\n.d-flex-footer .div-pax-hint {\n  padding: 16px 16px 0 16px;\n  width: 100%;\n  height: 128px;\n  overflow: scroll;\n  border-bottom: solid 2px #f2f2f2;\n}\n\n.d-flex-footer .div-pax-hint .icon-pax {\n  margin-right: 12px;\n}\n\n.d-flex-footer .div-pax-hint .text-pax-hint {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n::ng-deep .cls-input-custom .native-input.sc-ion-input-ios {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n}\n\n::ng-deep .text-bold .sc-ion-action-sheet-md {\n  font-weight: 600 !important;\n}\n\n::ng-deep .action-sheets-flightselectgender .action-sheet-title.sc-ion-action-sheet-md {\n  font-weight: bold;\n  color: #000;\n}\n\n::ng-deep .loading-wrapper.sc-ion-loading-ios {\n  -webkit-padding-start: 20px;\n  padding-inline-start: 20px;\n  -webkit-padding-end: 20px;\n  padding-inline-end: 20px;\n}\n\n::ng-deep .cls-input-country-custom .searchbar-input.sc-ion-searchbar-ios {\n  background: transparent;\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n  -webkit-padding-end: 0 !important;\n          padding-inline-end: 0 !important;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n::ng-deep .cls-input-country-custom.cls-passportcountry .searchbar-input.sc-ion-searchbar-ios {\n  max-width: 95%;\n}\n\n::ng-deep .item-country ion-item {\n  border-bottom: none;\n  --inner-border-width: 0 0 0px 0;\n}\n\n::ng-deep .sc-ion-action-sheet-md-h.sc-ion-action-sheet-md-s.md.action-sheets-flightselectgender {\n  position: absolute;\n}\n\n.div-close-paxhint {\n  right: -6px;\n  position: absolute;\n  z-index: 14;\n  top: 0;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n  text-align: center;\n}\n\n.p-top-6 {\n  padding-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0YWRkZGV0YWlscy9mbGlnaHRhZGRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0YWRkZGV0YWlscy9mbGlnaHRhZGRkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FERUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNEUjs7QURJSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUNGUjs7QURJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGUjs7QURJSTtFQUNJLDBCQUFBO0FDRlI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNGUjs7QURJSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLFVBQUE7RUFDQSxVQUFBO0FDSFI7O0FES0k7RUFDSSxnQkFBQTtBQ0hSOztBREtJO0VBQ0ksaUJBQUE7QUNIUjs7QURLSTtFQUNJLHNCQUFBO0FDSFI7O0FES0k7RUFDSSxzQkFBQTtBQ0hSOztBREtJO0VBQ0ksWUFBQTtBQ0hSOztBREtJO0VBQ0ksb0JBQUE7QUNIUjs7QURLSTtFQUNJLGtDQUFBO0FDSFI7O0FES0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNIUjs7QURLSTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtBQ0pSOztBRE1JO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDSlI7O0FETUk7RUFDSSxVQUFBO0VBQ0EsNkJBQUE7QUNKUjs7QURNSTtFQUNJLFFBQUE7RUFDQSxXQUFBO0FDSlI7O0FETUk7RUFDSSxVQUFBO0FDSlI7O0FEUUk7RUFDSSxRQUFBO0VBQ0EsNkJBQUE7QUNOUjs7QURTSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDUFI7O0FEU1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FDUFo7O0FEVUk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1JSOztBRFVRO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUlo7O0FEV0k7RUFDSSxrQkFBQTtBQ1RSOztBRFdJO0VBQ0ksc0JBQUE7QUNUUjs7QURZSTtFQUNJLHNCQUFBO0FDVlI7O0FEWUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNWUjs7QURZSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ1ZSOztBRGFJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNYUjs7QURjSTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNaUjs7QURlUTtFQUNJLGNBQUE7QUNiWjs7QURnQkk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ2RSOztBRGdCSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2RSOztBRGdCSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ2RSOztBRGdCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNkUjs7QURnQkk7RUFDSSwyQkFBQTtBQ2RSOztBRGdCSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNkUjs7QURpQkk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQ0FBQTtBQ2hCUjs7QURvQkk7RUFDSSxrQkFBQTtBQ2xCUjs7QURvQkk7RUFDSSxxQkFBQTtBQ2xCUjs7QURvQkk7RUFDSSwyQkFBQTtBQ2xCUjs7QURxQkk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFBa0IsaUJBQUE7QUNsQjFCOztBRHFCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNuQlI7O0FEc0JBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FDbkJKOztBRHlCSTtFQUNJLHlCQUFBO0FDdkJSOztBRDBCSTtFQUNJLHlCQUFBO0FDeEJSOztBRDJCSTtFQUNJLHlCQUFBO0FDekJSOztBRDJCSTtFQUNJLGtDQUFBO0FDekJSOztBRDRCSTtFQUNJLGtDQUFBO0FDMUJSOztBRDZCSTtFQUNJLDZDQUFBO0FDM0JSOztBRDhCQTtFQUNJLDZDQUFBO0FDM0JKOztBRDZCQTtFQUNJLDZDQUFBO0FDMUJKOztBRDhCSTtFQUNJLGtCQUFBO0FDM0JSOztBRDZCSTtFQUNJLGdCQUFBO0FDM0JSOztBRDhCQTtFQUNJLGdCQUFBO0VBQ0Esa0NBQUE7QUMzQko7O0FENkJBO0VBQ0ksOEJBQUE7QUMxQko7O0FENEJBO0VBQ0ksa0NBQUE7QUN6Qko7O0FEMkJBO0VBQ0ksc0JBQUE7QUN4Qko7O0FEMEJBO0VBQ0ksMEJBQUE7QUN2Qko7O0FEeUJBO0VBQ0ksZ0JBQUE7QUN0Qko7O0FEd0JBO0VBQ0ksZUFBQTtBQ3JCSjs7QUR1QkE7RUFDSSxXQUFBO0FDcEJKOztBRHNCQTtFQUNJLFdBQUE7QUNuQko7O0FEcUJBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNsQko7O0FEb0JJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDbEJSOztBRG9CUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNsQlo7O0FEcUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNuQlo7O0FEdUJJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDckJSOztBRHdCSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDdkJSOztBRDJCQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDekJKOztBRDJCSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUVBLGdDQUFBO0FDMUJSOztBRDRCUTtFQUNJLGtCQUFBO0FDMUJaOztBRDZCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQzNCWjs7QURpQ0k7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDOUJSOztBRGlDSTtFQUNJLDJCQUFBO0FDL0JSOztBRGtDSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ2hDUjs7QURzQ0k7RUFDSSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ3BDUjs7QUR1Q0k7RUFDSSx1QkFBQTtFQUNBLG1DQUFBO1VBQUEsa0NBQUE7RUFDQSxpQ0FBQTtVQUFBLGdDQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RDUjs7QUR5Q0k7RUFDSSxjQUFBO0FDdkNSOztBRDBDSTtFQUNJLG1CQUFBO0VBQ0EsK0JBQUE7QUN4Q1I7O0FENENJO0VBQ0ksa0JBQUE7QUMxQ1I7O0FEOENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQzNDSjs7QUQ4Q0U7RUFDRSxnQkFBQTtBQzNDSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGFkZGRldGFpbHMvZmxpZ2h0YWRkZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWhlYWRlci10aXRsZXtcbiAgICBwYWRkaW5nLXRvcDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxze1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG5cbiAgICBcbiAgICAuZGl2LWltZy1zdGVwe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLmRpdi10aXRsZXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAuZGl2LXN1Yi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICB9XG5cbiAgICAuZGl2LWxlZnR7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5zdWItbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuICAgIC5mLTEye1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxhYmVsLWFic29sdXRle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjJweDtcbiAgICB9XG4gICAgLmxhYmVsLWNvdW50cnl7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxNHB4O1xuXG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5tLWxlZnQtOHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9IFxuICAgIC5tLWxlZnQtMjh7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIH0gXG4gICAgLmJvdHRvbS02e1xuICAgICAgICBib3R0b206IDZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYm90dG9tLTR7XG4gICAgICAgIGJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5oLTQ1e1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuICAgIC50b3AtMjd7XG4gICAgICAgIHRvcDogMjdweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYm9yZGVyLWJvdHRvbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbiAgICB9XG4gICAgLmxhYmVsLXBhc3Nwb3J0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDlweDtcbiAgICB9XG4gICAgLmxhYmVsLXBhc3Nwb3J0Y291bnRyeXtcbiAgICAgICAgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyNHB4O1xuICAgIH1cbiAgICAubGFiZWwtcGFzc3BvcnRkYXRle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMThweDtcbiAgICB9XG4gICAgLmNscy1wYXNzcG9ydC10cmFuc2l0aW9ue1xuICAgICAgICB0b3A6IC0xMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcbiAgICB9XG4gICAgLmNscy1jb3VudHJ5e1xuICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgIC5jbHMtY291bnRyeS10cmFuc2l0aW9ue1xuICAgICAgICB0b3A6IC0xMXB4O1xuICAgICAgICAvL3RyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5jbHMtZ2VuZGVyLXRyYW5zaXRpb257XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAuY2xzLXNlbGVjdGlvbi1jb3VudHJ5e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xuXG4gICAgICAgIC5pdGVtLWNvdW50cnl7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNscy1pbnB1dC1jb3VudHJ5LWN1c3RvbXtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB3aWR0aDogOTAlO1xuXG4gICAgICAgIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wLWFic29sdXRle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIC53LTEwMHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudy0yMDB7XG4gICAgICAgIHdpZHRoOiAyMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sYWJlbC1kb2J7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtNHB4O1xuICAgIH1cbiAgICAuZGl2LXJpZ2h0e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5kaXYtc3BsaXR7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBtYXJnaW46IDE2cHggLTE2cHg7XG4gICAgfVxuXG4gICAgLmRpdi1sb2dpbntcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuXG4gICAgICAgIC50ZXh0LWxvZ2lue1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmltZy12ZWN0b3J7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIH1cbiAgICAudGV4dC1sb3R1cy1wb2ludHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgfVxuICAgIC50ZXh0LWxvdHVzLWNvZGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgIH1cbiAgICAudGV4dC1nZW5kZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI3cHg7XG4gICAgfVxuICAgIC50ZXh0LWJvbGR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRpdi1pY29uLWRvd257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogM3B4O1xuICAgIH1cblxuICAgIC5jbHMtZGF0ZXRvZmJpcnRoe1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAvL21hcmdpbi10b3A6IDRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjdweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgIH1cbiAgICAucC1yZWxhdGl2ZXtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAudG9wLWRvYi0yNHtcbiAgICAgICAgdG9wOiAtMjRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubS10b3AtMTZ7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2xzLWlvbmRhdGV0aW1le1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O21hcmdpbi10b3A6IC0xNnB4O1xuICAgIH1cblxuICAgIC50ZXh0LXN1YntcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG59XG4uY2xzLWVycm9ye1xuICAgIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgLy8gaW9uLWxhYmVsLCAudGV4dC1nZW5kZXIge1xuICAgIC8vICAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICAgIC8vIH1cblxuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tZGF0ZXRpbWV7XG4gICAgICAgIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLXNlYXJjaGJhcntcbiAgICAgICAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuY2xzLWlucHV0LWN1c3RvbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMjtcbiAgICB9XG5cbiAgICAuY2xzLWlvbmRhdGV0aW1lLCAuY2xzLWRhdGV0b2ZiaXJ0aCwgLmJvcmRlci1ib3R0b217XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcbiAgICB9XG59XG4uYm9yZGVyLWJvdHRvbS5jbHMtZXJyb3J7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuLmRpdi1sZWZ0LmNscy1lcnJvcntcbiAgICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtc2hvd2Vycm9ye1xuICAgIC5kaXYtaWNvbi1lcnJvcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAuZGl2LXRleHQtZXJyb3J7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgfVxufVxuLmNscy1pbnB1dC1jdXN0b217XG4gICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCByZ2IoMjA1LCAyMDUsIDIwNSk7XG59XG4ubm8tYm9yZGVye1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5kaXYtYm9yZGVyLWJvdHRvbXtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xufVxuLmNscy1wYXNzcG9ydGNvdW50cnl7XG4gICAgd2lkdGg6IDE5MCUgIWltcG9ydGFudDtcbn1cbi5mLTEze1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuLmRpdi12YXR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tLXRvcC0xMHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uZGl2LXdpZHRoLTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtd2lkdGgtMzAwe1xuICAgIHdpZHRoOiAzMDAlO1xufVxuLnRleHQtcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmRpdi1mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcblxuICAgIC5kaXYtdG90YWx7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICAgICAgLnRleHQtc3ViLXRvdGFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgIH0gXG59XG5cbi5kLWZsZXgtZm9vdGVye1xuICAgIC8vZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICAuZGl2LXBheC1oaW50e1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxNnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMjhweDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2YyZjJmMjtcbiAgICAgICAvLyBtYXJnaW46IDE2cHggLTE2cHg7XG4gICAgICAgIC5pY29uLXBheHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LXBheC1oaW50e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuOjpuZy1kZWVwe1xuICAgIC5jbHMtaW5wdXQtY3VzdG9tIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvc3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAudGV4dC1ib2xkIC5zYy1pb24tYWN0aW9uLXNoZWV0LW1ke1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VsZWN0Z2VuZGVyIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgIH1cbiAgICAvLyAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VsZWN0Z2VuZGVye1xuICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLy8gfVxuXG4gICAgLmxvYWRpbmctd3JhcHBlci5zYy1pb24tbG9hZGluZy1pb3N7XG4gICAgICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XG4gICAgICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMjBweDtcbiAgICB9XG5cbiAgICAuY2xzLWlucHV0LWNvdW50cnktY3VzdG9tIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3N7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDAgIWltcG9ydGFudDtcblxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5jbHMtaW5wdXQtY291bnRyeS1jdXN0b20uY2xzLXBhc3Nwb3J0Y291bnRyeSAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICB9XG5cbiAgICAuaXRlbS1jb3VudHJ5IGlvbi1pdGVte1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAgIH1cblxuXG4gICAgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtaC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLXMubWQuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG59XG5cbi5kaXYtY2xvc2UtcGF4aGludHtcbiAgICByaWdodDogLTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTQ7XG4gICAgdG9wOiAtMDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAucC10b3AtNntcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMge1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtaW1nLXN0ZXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtdGl0bGUge1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtbGVmdCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5zdWItbGFiZWwge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZi0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubGFiZWwtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjJweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmxhYmVsLWNvdW50cnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDUwJTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLm0tbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLm0tbGVmdC0yOCB7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuYm90dG9tLTYge1xuICBib3R0b206IDZweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuYm90dG9tLTQge1xuICBib3R0b206IDRweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuaC00NSB7XG4gIGhlaWdodDogNDVweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnRvcC0yNyB7XG4gIHRvcDogMjdweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5sYWJlbC1wYXNzcG9ydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5sYWJlbC1wYXNzcG9ydGNvdW50cnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmxhYmVsLXBhc3Nwb3J0ZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLXBhc3Nwb3J0LXRyYW5zaXRpb24ge1xuICB0b3A6IC0xMnB4O1xuICB0cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1jb3VudHJ5IHtcbiAgdG9wOiA5cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLWNvdW50cnktdHJhbnNpdGlvbiB7XG4gIHRvcDogLTExcHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtZ2VuZGVyLXRyYW5zaXRpb24ge1xuICB0b3A6IDBweDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtc2VsZWN0aW9uLWNvdW50cnkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tdG9wOiAzNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLXNlbGVjdGlvbi1jb3VudHJ5IC5pdGVtLWNvdW50cnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLWlucHV0LWNvdW50cnktY3VzdG9tIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogOTAlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLWlucHV0LWNvdW50cnktY3VzdG9tIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5wLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudy0xMDAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudy0yMDAge1xuICB3aWR0aDogMjAwJSAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubGFiZWwtZG9iIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtcmlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LXNwbGl0IHtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi1sb2dpbiB7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbjogMCAtMTZweDtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtbG9naW4gLnRleHQtbG9naW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmltZy12ZWN0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnRleHQtbG90dXMtcG9pbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnRleHQtbG90dXMtY29kZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudGV4dC1nZW5kZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBtYXJnaW4tdG9wOiAyN3B4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LWljb24tZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogM3B4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLWRhdGV0b2ZiaXJ0aCB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5wLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudG9wLWRvYi0yNCB7XG4gIHRvcDogLTI0cHggIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLm0tdG9wLTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLWlvbmRhdGV0aW1lIHtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC50ZXh0LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5jbHMtZXJyb3Ige1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2xzLWVycm9yIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG4uY2xzLWVycm9yIGlvbi1kYXRldGltZSB7XG4gIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG4uY2xzLWVycm9yIGlvbi1zZWFyY2hiYXIge1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuLmNscy1lcnJvciBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG4uY2xzLWVycm9yIC5jbHMtaW5wdXQtY3VzdG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMjtcbn1cbi5jbHMtZXJyb3IgLmNscy1pb25kYXRldGltZSwgLmNscy1lcnJvciAuY2xzLWRhdGV0b2ZiaXJ0aCwgLmNscy1lcnJvciAuYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20uY2xzLWVycm9yIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWxlZnQuY2xzLWVycm9yIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXNob3dlcnJvciAuZGl2LWljb24tZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGl2LXNob3dlcnJvciAuZGl2LXRleHQtZXJyb3Ige1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4uY2xzLWlucHV0LWN1c3RvbSB7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNjZGNkY2Q7XG59XG5cbi5uby1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG59XG5cbi5jbHMtcGFzc3BvcnRjb3VudHJ5IHtcbiAgd2lkdGg6IDE5MCUgIWltcG9ydGFudDtcbn1cblxuLmYtMTMge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmRpdi12YXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubS10b3AtMTAge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXYtd2lkdGgtMzAwIHtcbiAgd2lkdGg6IDMwMCU7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCB7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXN1Yi10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWZvb3RlciAuZGl2LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn1cblxuLmQtZmxleC1mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmQtZmxleC1mb290ZXIgLmRpdi1wYXgtaGludCB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAwIDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyOHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2YyZjJmMjtcbn1cbi5kLWZsZXgtZm9vdGVyIC5kaXYtcGF4LWhpbnQgLmljb24tcGF4IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmQtZmxleC1mb290ZXIgLmRpdi1wYXgtaGludCAudGV4dC1wYXgtaGludCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbjo6bmctZGVlcCAuY2xzLWlucHV0LWN1c3RvbSAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3Mge1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC50ZXh0LWJvbGQgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VsZWN0Z2VuZGVyIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzAwMDtcbn1cbjo6bmctZGVlcCAubG9hZGluZy13cmFwcGVyLnNjLWlvbi1sb2FkaW5nLWlvcyB7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogMjBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDIwcHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDIwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMjBweDtcbn1cbjo6bmctZGVlcCAuY2xzLWlucHV0LWNvdW50cnktY3VzdG9tIC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46Om5nLWRlZXAgLmNscy1pbnB1dC1jb3VudHJ5LWN1c3RvbS5jbHMtcGFzc3BvcnRjb3VudHJ5IC5zZWFyY2hiYXItaW5wdXQuc2MtaW9uLXNlYXJjaGJhci1pb3Mge1xuICBtYXgtd2lkdGg6IDk1JTtcbn1cbjo6bmctZGVlcCAuaXRlbS1jb3VudHJ5IGlvbi1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtcy5tZC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlbGVjdGdlbmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmRpdi1jbG9zZS1wYXhoaW50IHtcbiAgcmlnaHQ6IC02cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucC10b3AtNiB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59Il19 */"
=======
module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 11px !important;\n}\n\n.content-flightadddetails {\n  padding: 16px;\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.content-flightadddetails .div-img-step {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.content-flightadddetails .div-title {\n  line-height: 22px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.content-flightadddetails .div-sub-title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 17px;\n}\n\n.content-flightadddetails .div-left {\n  width: 120px;\n  margin-right: 16px;\n  border-bottom: solid 0.2px #cdcdcd;\n  position: relative;\n}\n\n.content-flightadddetails .sub-label {\n  font-size: 10px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.content-flightadddetails .f-12 {\n  font-size: 12px !important;\n}\n\n.content-flightadddetails .label-absolute {\n  position: absolute;\n  top: 22px;\n}\n\n.content-flightadddetails .label-country {\n  position: absolute;\n  top: 14px;\n  z-index: 2;\n  width: 50%;\n}\n\n.content-flightadddetails .m-left-8 {\n  margin-left: 8px;\n}\n\n.content-flightadddetails .m-left-28 {\n  margin-left: 28px;\n}\n\n.content-flightadddetails .bottom-6 {\n  bottom: 6px !important;\n}\n\n.content-flightadddetails .bottom-4 {\n  bottom: 4px !important;\n}\n\n.content-flightadddetails .h-45 {\n  height: 45px;\n}\n\n.content-flightadddetails .top-27 {\n  top: 27px !important;\n}\n\n.content-flightadddetails .border-bottom {\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.content-flightadddetails .label-passport {\n  position: absolute;\n  top: 9px;\n}\n\n.content-flightadddetails .label-passportcountry {\n  position: absolute;\n  top: 24px;\n}\n\n.content-flightadddetails .label-passportdate {\n  position: absolute;\n  top: 18px;\n}\n\n.content-flightadddetails .cls-passport-transition {\n  top: -12px;\n  transition: top 0.1s ease-out;\n}\n\n.content-flightadddetails .cls-country {\n  top: 9px;\n  z-index: -1;\n}\n\n.content-flightadddetails .cls-country-transition {\n  top: -11px;\n}\n\n.content-flightadddetails .cls-gender-transition {\n  top: 0px;\n  transition: top 0.1s ease-out;\n}\n\n.content-flightadddetails .cls-selection-country {\n  position: absolute;\n  height: 180px;\n  width: 100%;\n  overflow-y: scroll;\n  background: #fff;\n  z-index: 99;\n  margin-top: 36px;\n}\n\n.content-flightadddetails .cls-selection-country .item-country {\n  font-size: 12px;\n  height: 36px;\n  border-bottom: none !important;\n}\n\n.content-flightadddetails .cls-input-country-custom {\n  padding: 0;\n  border-bottom: none;\n  position: absolute;\n  margin-top: -14px;\n  background: transparent;\n  z-index: -1;\n  width: 90%;\n}\n\n.content-flightadddetails .cls-input-country-custom .searchbar-input.sc-ion-searchbar-ios {\n  background: transparent;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n}\n\n.content-flightadddetails .p-absolute {\n  position: absolute;\n}\n\n.content-flightadddetails .w-100 {\n  width: 100% !important;\n}\n\n.content-flightadddetails .w-200 {\n  width: 200% !important;\n}\n\n.content-flightadddetails .label-dob {\n  position: absolute;\n  top: -4px;\n}\n\n.content-flightadddetails .div-right {\n  width: 100%;\n  position: relative;\n}\n\n.content-flightadddetails .div-split {\n  height: 8px;\n  background-color: #f2f2f2;\n  margin: 16px -16px;\n}\n\n.content-flightadddetails .div-login {\n  padding: 10px 16px;\n  background: rgba(242, 242, 242, 0.5);\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  margin: 0 -16px;\n  margin-top: -16px;\n  margin-bottom: 16px;\n}\n\n.content-flightadddetails .div-login .text-login {\n  color: #26bed6;\n}\n\n.content-flightadddetails .img-vector {\n  position: absolute;\n  margin-left: 8px;\n  margin-top: 6px;\n}\n\n.content-flightadddetails .text-lotus-point {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #26bed6;\n  margin-top: 8px;\n  margin-bottom: -8px;\n}\n\n.content-flightadddetails .text-lotus-code {\n  font-size: 12px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  margin-top: 8px;\n  margin-bottom: -8px;\n}\n\n.content-flightadddetails .text-gender {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.34px;\n  margin-top: 27px;\n}\n\n.content-flightadddetails .text-bold {\n  font-weight: 600 !important;\n}\n\n.content-flightadddetails .div-icon-down {\n  position: absolute;\n  right: 0;\n  bottom: 3px;\n}\n\n.content-flightadddetails .cls-datetofbirth {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n  margin-top: 27px;\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.content-flightadddetails .p-relative {\n  position: relative;\n}\n\n.content-flightadddetails .top-dob-24 {\n  top: -24px !important;\n}\n\n.content-flightadddetails .m-top-16 {\n  margin-top: 16px !important;\n}\n\n.content-flightadddetails .cls-iondatetime {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n  margin-top: 4px;\n  border-bottom: solid 0.2px #cdcdcd;\n  padding-top: 16px;\n  margin-top: -16px;\n}\n\n.content-flightadddetails .text-sub {\n  font-size: 12px;\n  text-align: left;\n  color: #828282;\n}\n\n.cls-error {\n  color: #e52822 !important;\n  font-size: 14px;\n}\n\n.cls-error ion-input {\n  color: #e52822 !important;\n}\n\n.cls-error ion-datetime {\n  color: #e52822 !important;\n}\n\n.cls-error ion-searchbar {\n  color: #e52822 !important;\n}\n\n.cls-error ion-item {\n  --border-color: #e52822 !important;\n}\n\n.cls-error .cls-input-custom {\n  border-bottom: 0.2px solid #e52822;\n}\n\n.cls-error .cls-iondatetime, .cls-error .cls-datetofbirth, .cls-error .border-bottom {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.border-bottom.cls-error {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.div-left.cls-error {\n  border-bottom: 0.2px solid #e52822 !important;\n}\n\n.div-showerror .div-icon-error {\n  position: absolute;\n}\n\n.div-showerror .div-text-error {\n  padding-top: 2px;\n}\n\n.cls-input-custom {\n  margin-top: 21px;\n  border-bottom: 0.2px solid #cdcdcd;\n}\n\n.no-border {\n  border-bottom: none !important;\n}\n\n.div-border-bottom {\n  border-bottom: solid 0.2px #cdcdcd;\n}\n\n.cls-passportcountry {\n  width: 190% !important;\n}\n\n.f-13 {\n  font-size: 13px !important;\n}\n\n.div-vat {\n  margin-top: 20px;\n}\n\n.m-top-10 {\n  margin-top: 6px;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.div-width-300 {\n  width: 300%;\n}\n\n.text-right {\n  text-align: right;\n  color: #26bed6;\n  font-weight: 300;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n  display: flex;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n\n.d-flex-footer {\n  width: 100%;\n  height: auto;\n}\n\n.d-flex-footer .div-pax-hint {\n  padding: 16px 16px 0 16px;\n  width: 100%;\n  height: 128px;\n  overflow: scroll;\n  border-bottom: solid 2px #f2f2f2;\n}\n\n.d-flex-footer .div-pax-hint .icon-pax {\n  margin-right: 12px;\n}\n\n.d-flex-footer .div-pax-hint .text-pax-hint {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n::ng-deep .cls-input-custom .native-input.sc-ion-input-ios {\n  padding: 0;\n  line-height: 28px;\n  font-size: 14px;\n}\n\n::ng-deep .text-bold .sc-ion-action-sheet-md {\n  font-weight: 600 !important;\n}\n\n::ng-deep .action-sheets-flightselectgender .action-sheet-title.sc-ion-action-sheet-md {\n  font-weight: bold;\n  color: #000;\n}\n\n::ng-deep .loading-wrapper.sc-ion-loading-ios {\n  -webkit-padding-start: 20px;\n  padding-inline-start: 20px;\n  -webkit-padding-end: 20px;\n  padding-inline-end: 20px;\n}\n\n::ng-deep .cls-input-country-custom .searchbar-input.sc-ion-searchbar-ios {\n  background: transparent;\n  -webkit-padding-start: 0 !important;\n          padding-inline-start: 0 !important;\n  -webkit-padding-end: 0 !important;\n          padding-inline-end: 0 !important;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n::ng-deep .cls-input-country-custom.cls-passportcountry .searchbar-input.sc-ion-searchbar-ios {\n  max-width: 95%;\n}\n\n::ng-deep .item-country ion-item {\n  border-bottom: none;\n  --inner-border-width: 0 0 0px 0;\n}\n\n::ng-deep .sc-ion-action-sheet-md-h.sc-ion-action-sheet-md-s.md.action-sheets-flightselectgender {\n  position: absolute;\n}\n\n.div-close-paxhint {\n  right: -6px;\n  position: absolute;\n  z-index: 14;\n  top: 0;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n  text-align: center;\n}\n\n.p-top-6 {\n  padding-top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGFkZGRldGFpbHMvZmxpZ2h0YWRkZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGFkZGRldGFpbHMvZmxpZ2h0YWRkZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKOztBRENBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NSOztBREVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRFI7O0FESUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FDRlI7O0FESUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRlI7O0FESUk7RUFDSSwwQkFBQTtBQ0ZSOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDRlI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxVQUFBO0VBQ0EsVUFBQTtBQ0hSOztBREtJO0VBQ0ksZ0JBQUE7QUNIUjs7QURLSTtFQUNJLGlCQUFBO0FDSFI7O0FES0k7RUFDSSxzQkFBQTtBQ0hSOztBREtJO0VBQ0ksc0JBQUE7QUNIUjs7QURLSTtFQUNJLFlBQUE7QUNIUjs7QURLSTtFQUNJLG9CQUFBO0FDSFI7O0FES0k7RUFDSSxrQ0FBQTtBQ0hSOztBREtJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDSFI7O0FES0k7RUFFSSxrQkFBQTtFQUNBLFNBQUE7QUNKUjs7QURNSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0pSOztBRE1JO0VBQ0ksVUFBQTtFQUNBLDZCQUFBO0FDSlI7O0FETUk7RUFDSSxRQUFBO0VBQ0EsV0FBQTtBQ0pSOztBRE1JO0VBQ0ksVUFBQTtBQ0pSOztBRFFJO0VBQ0ksUUFBQTtFQUNBLDZCQUFBO0FDTlI7O0FEU0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1BSOztBRFNRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ1BaOztBRFVJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNSUjs7QURVUTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1JaOztBRFdJO0VBQ0ksa0JBQUE7QUNUUjs7QURXSTtFQUNJLHNCQUFBO0FDVFI7O0FEWUk7RUFDSSxzQkFBQTtBQ1ZSOztBRFlJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDVlI7O0FEWUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNWUjs7QURhSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDWFI7O0FEY0k7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDWlI7O0FEZVE7RUFDSSxjQUFBO0FDYlo7O0FEZ0JJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNkUjs7QURnQkk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNkUjs7QURnQkk7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNkUjs7QURnQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksMkJBQUE7QUNkUjs7QURnQkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDZFI7O0FEaUJJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0NBQUE7QUNoQlI7O0FEb0JJO0VBQ0ksa0JBQUE7QUNsQlI7O0FEb0JJO0VBQ0kscUJBQUE7QUNsQlI7O0FEb0JJO0VBQ0ksMkJBQUE7QUNsQlI7O0FEcUJJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQWtCLGlCQUFBO0FDbEIxQjs7QURxQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDbkJSOztBRHNCQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQ25CSjs7QUR5Qkk7RUFDSSx5QkFBQTtBQ3ZCUjs7QUQwQkk7RUFDSSx5QkFBQTtBQ3hCUjs7QUQyQkk7RUFDSSx5QkFBQTtBQ3pCUjs7QUQyQkk7RUFDSSxrQ0FBQTtBQ3pCUjs7QUQ0Qkk7RUFDSSxrQ0FBQTtBQzFCUjs7QUQ2Qkk7RUFDSSw2Q0FBQTtBQzNCUjs7QUQ4QkE7RUFDSSw2Q0FBQTtBQzNCSjs7QUQ2QkE7RUFDSSw2Q0FBQTtBQzFCSjs7QUQ4Qkk7RUFDSSxrQkFBQTtBQzNCUjs7QUQ2Qkk7RUFDSSxnQkFBQTtBQzNCUjs7QUQ4QkE7RUFDSSxnQkFBQTtFQUNBLGtDQUFBO0FDM0JKOztBRDZCQTtFQUNJLDhCQUFBO0FDMUJKOztBRDRCQTtFQUNJLGtDQUFBO0FDekJKOztBRDJCQTtFQUNJLHNCQUFBO0FDeEJKOztBRDBCQTtFQUNJLDBCQUFBO0FDdkJKOztBRHlCQTtFQUNJLGdCQUFBO0FDdEJKOztBRHdCQTtFQUNJLGVBQUE7QUNyQko7O0FEdUJBO0VBQ0ksV0FBQTtBQ3BCSjs7QURzQkE7RUFDSSxXQUFBO0FDbkJKOztBRHFCQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDbEJKOztBRHFCQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDbEJKOztBRG9CSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ2xCUjs7QURvQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDbEJaOztBRHFCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDbkJaOztBRHVCSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ3JCUjs7QUR3Qkk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ3ZCUjs7QUQyQkE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ3pCSjs7QUQyQkk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQ0FBQTtBQzFCUjs7QUQ0QlE7RUFDSSxrQkFBQTtBQzFCWjs7QUQ2QlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUMzQlo7O0FEaUNJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQzlCUjs7QURpQ0k7RUFDSSwyQkFBQTtBQy9CUjs7QURrQ0k7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNoQ1I7O0FEc0NJO0VBQ0ksMkJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNwQ1I7O0FEdUNJO0VBQ0ksdUJBQUE7RUFDQSxtQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsaUNBQUE7VUFBQSxnQ0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0Q1I7O0FEeUNJO0VBQ0ksY0FBQTtBQ3ZDUjs7QUQwQ0k7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0FDeENSOztBRDRDSTtFQUNJLGtCQUFBO0FDMUNSOztBRDhDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUMzQ0o7O0FEOENFO0VBQ0UsZ0JBQUE7QUMzQ0oiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRhZGRkZXRhaWxzL2ZsaWdodGFkZGRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1oZWFkZXItdGl0bGV7XG4gICAgcGFkZGluZy10b3A6IDExcHggIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlsc3tcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuXG4gICAgXG4gICAgLmRpdi1pbWctc3RlcHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC5kaXYtdGl0bGV7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmRpdi1zdWItdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgfVxuXG4gICAgLmRpdi1sZWZ0e1xuICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAuc3ViLWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cbiAgICAuZi0xMntcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5sYWJlbC1hYnNvbHV0ZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDIycHg7XG4gICAgfVxuICAgIC5sYWJlbC1jb3VudHJ5e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTRweDtcblxuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAubS1sZWZ0LTh7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfSBcbiAgICAubS1sZWZ0LTI4e1xuICAgICAgICBtYXJnaW4tbGVmdDogMjhweDtcbiAgICB9IFxuICAgIC5ib3R0b20tNntcbiAgICAgICAgYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJvdHRvbS00e1xuICAgICAgICBib3R0b206IDRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaC00NXtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIH1cbiAgICAudG9wLTI3e1xuICAgICAgICB0b3A6IDI3cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJvcmRlci1ib3R0b217XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG4gICAgfVxuICAgIC5sYWJlbC1wYXNzcG9ydCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgfVxuICAgIC5sYWJlbC1wYXNzcG9ydGNvdW50cnl7XG4gICAgICAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjRweDtcbiAgICB9XG4gICAgLmxhYmVsLXBhc3Nwb3J0ZGF0ZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE4cHg7XG4gICAgfVxuICAgIC5jbHMtcGFzc3BvcnQtdHJhbnNpdGlvbntcbiAgICAgICAgdG9wOiAtMTJweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQ7XG4gICAgfVxuICAgIC5jbHMtY291bnRyeXtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgICAuY2xzLWNvdW50cnktdHJhbnNpdGlvbntcbiAgICAgICAgdG9wOiAtMTFweDtcbiAgICAgICAgLy90cmFuc2l0aW9uOiB0b3AgMC4xcyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAuY2xzLWdlbmRlci10cmFuc2l0aW9ue1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgLmNscy1zZWxlY3Rpb24tY291bnRyeXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzZweDtcblxuICAgICAgICAuaXRlbS1jb3VudHJ5e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jbHMtaW5wdXQtY291bnRyeS1jdXN0b217XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgd2lkdGg6IDkwJTtcblxuICAgICAgICAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucC1hYnNvbHV0ZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICAudy0xMDB7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnctMjAwe1xuICAgICAgICB3aWR0aDogMjAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGFiZWwtZG9ie1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTRweDtcbiAgICB9XG4gICAgLmRpdi1yaWdodHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuZGl2LXNwbGl0e1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuICAgIH1cblxuICAgIC5kaXYtbG9naW57XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjUpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIG1hcmdpbjogMCAtMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cblxuICAgICAgICAudGV4dC1sb2dpbntcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbWctdmVjdG9ye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICB9XG4gICAgLnRleHQtbG90dXMtcG9pbnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xuICAgIH1cbiAgICAudGV4dC1sb3R1cy1jb2Rle1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLThweDtcbiAgICB9XG4gICAgLnRleHQtZ2VuZGVye1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyN3B4O1xuICAgIH1cbiAgICAudGV4dC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXYtaWNvbi1kb3due1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDNweDtcbiAgICB9XG5cbiAgICAuY2xzLWRhdGV0b2ZiaXJ0aHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgLy9tYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDI3cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuMnB4ICNjZGNkY2Q7XG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICB9XG4gICAgLnAtcmVsYXRpdmV7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnRvcC1kb2ItMjR7XG4gICAgICAgIHRvcDogLTI0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm0tdG9wLTE2e1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNscy1pb25kYXRldGltZXtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDttYXJnaW4tdG9wOiAtMTZweDtcbiAgICB9XG5cbiAgICAudGV4dC1zdWJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxufVxuLmNscy1lcnJvcntcbiAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIC8vIGlvbi1sYWJlbCwgLnRleHQtZ2VuZGVyIHtcbiAgICAvLyAgICAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbiAgICAvLyB9XG5cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgaW9uLWRhdGV0aW1le1xuICAgICAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGlvbi1zZWFyY2hiYXJ7XG4gICAgICAgIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLmNscy1pbnB1dC1jdXN0b217XG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjI7XG4gICAgfVxuXG4gICAgLmNscy1pb25kYXRldGltZSwgLmNscy1kYXRldG9mYmlydGgsIC5ib3JkZXItYm90dG9te1xuICAgICAgICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLmJvcmRlci1ib3R0b20uY2xzLWVycm9ye1xuICAgIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcbn1cbi5kaXYtbGVmdC5jbHMtZXJyb3J7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXNob3dlcnJvcntcbiAgICAuZGl2LWljb24tZXJyb3J7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgLmRpdi10ZXh0LWVycm9ye1xuICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIH1cbn1cbi5jbHMtaW5wdXQtY3VzdG9te1xuICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4ycHggc29saWQgcmdiKDIwNSwgMjA1LCAyMDUpO1xufVxuLm5vLWJvcmRlcntcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4uZGl2LWJvcmRlci1ib3R0b217XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbn1cbi5jbHMtcGFzc3BvcnRjb3VudHJ5e1xuICAgIHdpZHRoOiAxOTAlICFpbXBvcnRhbnQ7XG59XG4uZi0xM3tcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cbi5kaXYtdmF0e1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubS10b3AtMTB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmRpdi13aWR0aC0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LXdpZHRoLTMwMHtcbiAgICB3aWR0aDogMzAwJTtcbn1cbi50ZXh0LXJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5kaXYtZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAuZGl2LXRvdGFse1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG4gICAgICAgIC50ZXh0LXN1Yi10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICB9IFxufVxuXG4uZC1mbGV4LWZvb3RlcntcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuXG4gICAgLmRpdi1wYXgtaGludHtcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDAgMTZweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTI4cHg7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmMmYyZjI7XG4gICAgICAgLy8gbWFyZ2luOiAxNnB4IC0xNnB4O1xuICAgICAgICAuaWNvbi1wYXh7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1wYXgtaGludHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcHtcbiAgICAuY2xzLWlucHV0LWN1c3RvbSAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1pb3N7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLnRleHQtYm9sZCAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlbGVjdGdlbmRlciAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG4gICAgLy8gLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtaC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlbGVjdGdlbmRlcntcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC8vIH1cblxuICAgIC5sb2FkaW5nLXdyYXBwZXIuc2MtaW9uLWxvYWRpbmctaW9ze1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmNscy1pbnB1dC1jb3VudHJ5LWN1c3RvbSAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9ze1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG5cbiAgICAuY2xzLWlucHV0LWNvdW50cnktY3VzdG9tLmNscy1wYXNzcG9ydGNvdW50cnkgLnNlYXJjaGJhci1pbnB1dC5zYy1pb24tc2VhcmNoYmFyLWlvc3tcbiAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgfVxuXG4gICAgLml0ZW0tY291bnRyeSBpb24taXRlbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICB9XG5cblxuICAgIC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLWguc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1zLm1kLmFjdGlvbi1zaGVldHMtZmxpZ2h0c2VsZWN0Z2VuZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxufVxuXG4uZGl2LWNsb3NlLXBheGhpbnR7XG4gICAgcmlnaHQ6IC02cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE0O1xuICAgIHRvcDogLTA7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnAtdG9wLTZ7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIHtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LWltZy1zdGVwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LXRpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi1zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LWxlZnQge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuc3ViLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmYtMTIge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmxhYmVsLWFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIycHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5sYWJlbC1jb3VudHJ5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA1MCU7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5tLWxlZnQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5tLWxlZnQtMjgge1xuICBtYXJnaW4tbGVmdDogMjhweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmJvdHRvbS02IHtcbiAgYm90dG9tOiA2cHggIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmJvdHRvbS00IHtcbiAgYm90dG9tOiA0cHggIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmgtNDUge1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC50b3AtMjcge1xuICB0b3A6IDI3cHggIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubGFiZWwtcGFzc3BvcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOXB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAubGFiZWwtcGFzc3BvcnRjb3VudHJ5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5sYWJlbC1wYXNzcG9ydGRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1wYXNzcG9ydC10cmFuc2l0aW9uIHtcbiAgdG9wOiAtMTJweDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMXMgZWFzZS1vdXQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5jbHMtY291bnRyeSB7XG4gIHRvcDogOXB4O1xuICB6LWluZGV4OiAtMTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1jb3VudHJ5LXRyYW5zaXRpb24ge1xuICB0b3A6IC0xMXB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLWdlbmRlci10cmFuc2l0aW9uIHtcbiAgdG9wOiAwcHg7XG4gIHRyYW5zaXRpb246IHRvcCAwLjFzIGVhc2Utb3V0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuY2xzLXNlbGVjdGlvbi1jb3VudHJ5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiA5OTtcbiAgbWFyZ2luLXRvcDogMzZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1zZWxlY3Rpb24tY291bnRyeSAuaXRlbS1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1pbnB1dC1jb3VudHJ5LWN1c3RvbSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IDkwJTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1pbnB1dC1jb3VudHJ5LWN1c3RvbSAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAucC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnctMTAwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnctMjAwIHtcbiAgd2lkdGg6IDIwMCUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmxhYmVsLWRvYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LXJpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW46IDE2cHggLTE2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5kaXYtbG9naW4ge1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC41KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDAgLTE2cHg7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAuZGl2LWxvZ2luIC50ZXh0LWxvZ2luIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5pbWctdmVjdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC50ZXh0LWxvdHVzLXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC50ZXh0LWxvdHVzLWNvZGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnRleHQtZ2VuZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgbWFyZ2luLXRvcDogMjdweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmRpdi1pY29uLWRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDNweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1kYXRldG9mYmlydGgge1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAucC1yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLnRvcC1kb2ItMjQge1xuICB0b3A6IC0yNHB4ICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRkZXRhaWxzIC5tLXRvcC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGRldGFpbHMgLmNscy1pb25kYXRldGltZSB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4ycHggI2NkY2RjZDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIG1hcmdpbi10b3A6IC0xNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkZGV0YWlscyAudGV4dC1zdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uY2xzLWVycm9yIHtcbiAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNscy1lcnJvciBpb24taW5wdXQge1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuLmNscy1lcnJvciBpb24tZGF0ZXRpbWUge1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuLmNscy1lcnJvciBpb24tc2VhcmNoYmFyIHtcbiAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbn1cbi5jbHMtZXJyb3IgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuLmNscy1lcnJvciAuY2xzLWlucHV0LWN1c3RvbSB7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjI7XG59XG4uY2xzLWVycm9yIC5jbHMtaW9uZGF0ZXRpbWUsIC5jbHMtZXJyb3IgLmNscy1kYXRldG9mYmlydGgsIC5jbHMtZXJyb3IgLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZTUyODIyICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLmNscy1lcnJvciB7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcbn1cblxuLmRpdi1sZWZ0LmNscy1lcnJvciB7XG4gIGJvcmRlci1ib3R0b206IDAuMnB4IHNvbGlkICNlNTI4MjIgIWltcG9ydGFudDtcbn1cblxuLmRpdi1zaG93ZXJyb3IgLmRpdi1pY29uLWVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRpdi1zaG93ZXJyb3IgLmRpdi10ZXh0LWVycm9yIHtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmNscy1pbnB1dC1jdXN0b20ge1xuICBtYXJnaW4tdG9wOiAyMXB4O1xuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjY2RjZGNkO1xufVxuXG4ubm8tYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjJweCAjY2RjZGNkO1xufVxuXG4uY2xzLXBhc3Nwb3J0Y291bnRyeSB7XG4gIHdpZHRoOiAxOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5mLTEzIHtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtdmF0IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm0tdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4uZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LXdpZHRoLTMwMCB7XG4gIHdpZHRoOiAzMDAlO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwge1xuICB3aWR0aDogMjEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC1zdWItdG90YWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpdi1mb290ZXIgLmRpdi1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgtZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5kLWZsZXgtZm9vdGVyIC5kaXYtcGF4LWhpbnQge1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmMmYyZjI7XG59XG4uZC1mbGV4LWZvb3RlciAuZGl2LXBheC1oaW50IC5pY29uLXBheCB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5kLWZsZXgtZm9vdGVyIC5kaXYtcGF4LWhpbnQgLnRleHQtcGF4LWhpbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG46Om5nLWRlZXAgLmNscy1pbnB1dC1jdXN0b20gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtaW9zIHtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAudGV4dC1ib2xkIC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZsaWdodHNlbGVjdGdlbmRlciAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDA7XG59XG46Om5nLWRlZXAgLmxvYWRpbmctd3JhcHBlci5zYy1pb24tbG9hZGluZy1pb3Mge1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAyMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDIwcHg7XG59XG46Om5nLWRlZXAgLmNscy1pbnB1dC1jb3VudHJ5LWN1c3RvbSAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuOjpuZy1kZWVwIC5jbHMtaW5wdXQtY291bnRyeS1jdXN0b20uY2xzLXBhc3Nwb3J0Y291bnRyeSAuc2VhcmNoYmFyLWlucHV0LnNjLWlvbi1zZWFyY2hiYXItaW9zIHtcbiAgbWF4LXdpZHRoOiA5NSU7XG59XG46Om5nLWRlZXAgLml0ZW0tY291bnRyeSBpb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtaC5zYy1pb24tYWN0aW9uLXNoZWV0LW1kLXMubWQuYWN0aW9uLXNoZWV0cy1mbGlnaHRzZWxlY3RnZW5kZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kaXYtY2xvc2UtcGF4aGludCB7XG4gIHJpZ2h0OiAtNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE0O1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnAtdG9wLTYge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufSJdfQ== */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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
                    itema.gender = (se.gender == 1 || se.gender.toLowerCase().indexOf('Ông') || se.gender.toLowerCase().indexOf('Nam')) ? 1 : 2;
                    itema.genderdisplay = (se.gender == 1 || se.gender.toLowerCase().indexOf('ông') != -1 || se.gender.toLowerCase().indexOf('nam') != -1) ? 'Ông' : 'Bà';
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
            }, 100);
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
                se.gf.hideLoading();
                se._flightService.itemFlightCache.pnr = data;
                if (se._flightService.itemFlightCache.totalPrice == 0) {
                    se._flightService.itemFlightCache.ischeckpayment = 1;
                    se.navCtrl.navigateForward('flightpaymentdone/' + (se._flightService.itemFlightCache.pnr.bookingCode ? se._flightService.itemFlightCache.pnr.bookingCode : se._flightService.itemFlightCache.pnr.resNo) + '/' + moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD') + '/' + moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD'));
                }
                else {
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
                    "ancillaryJson": (objAncilary.length > 0 ? JSON.stringify(objAncilary) : ""),
                    "ancillaryReturnJson": (objAncilaryReturn.length > 0 ? JSON.stringify(objAncilaryReturn) : "")
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
                    "ancillaryJson": (objAncilary.length > 0 ? JSON.stringify(objAncilary) : ""),
                    "ancillaryReturnJson": (objAncilaryReturn.length > 0 ? JSON.stringify(objAncilaryReturn) : "")
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
                        se.updatePassengerInfo().then((data) => {
                            if (!data.error) {
                                se.gf.hideLoading();
                                se._flightService.itemFlightCache.pnr = data;
                                if (se._flightService.itemFlightCache.totalPrice == 0) {
                                    se._flightService.itemFlightCache.ischeckpayment = 1;
                                    se.navCtrl.navigateForward('flightpaymentdone/' + (se._flightService.itemFlightCache.pnr.bookingCode ? se._flightService.itemFlightCache.pnr.bookingCode : se._flightService.itemFlightCache.pnr.resNo) + '/' + moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD') + '/' + moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD'));
                                }
                                else {
                                    se.navCtrl.navigateForward('/flightpaymentselect');
                                }
                            }
                            else {
                                se.gf.showToastWarning(data.error);
                                se.gf.hideLoading();
                            }
                        });
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



/***/ }),

/***/ "./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <ion-content class=\"flight-booking-detail-content\">\n        <div class=\"p-16\">\n          \n            <div class=\"text-name\">Kiểm tra thông tin trước khi giữ vé</div>\n            <div class=\"div-pax\">\n                \n\n                <div *ngFor=\"let item of bookingFlight.adults\">\n                    <div class=\"d-flex m-bottom-10\">\n                        <div class=\"pax-gender\">{{item.genderdisplay}}</div>\n                        <div class=\"pax-name cls-error\">{{item.name}}</div>\n                    </div>\n                </div>\n\n                <div *ngFor=\"let itemchild of bookingFlight.childs\">\n                    <div class=\"d-flex m-bottom-10\">\n                        <div class=\"pax-gender\">{{itemchild.genderdisplay}}</div>\n                        <div class=\"pax-name cls-error\">{{itemchild.name}} <span class=\"pax-dob\">({{itemchild.dateofbirthdisplay}})</span></div>\n                        \n                    </div>\n                </div>\n                \n            </div>\n            <div class=\"div-split\"></div>\n\n            <!-- Chiều đi -->\n            <div class=\"div-depart\">\n                <div class=\"m-top-10 text-cin\">\n                    {{checkInDisplay}}\n                </div>\n    \n                <div class=\"m-top-12 d-flex\">\n                    <div class=\"div-width-400 d-flex\">\n                        <div class=\"div-logo\">\n                            <img class=\"img-logo logo-vj\" *ngIf=\"bookingFlight.departFlight.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                            <img class=\"img-logo\" *ngIf=\"bookingFlight.departFlight.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                            <img class=\"img-logo logo-vna\" *ngIf=\"bookingFlight.departFlight.airlineCode == 'VietnamAirlines' && !bookingFlight.departFlight.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                            <!-- <img class=\"img-logo\" *ngIf=\"bookingFlight.departFlight.airlineCode == 'VietnamAirlines' && bookingFlight.departFlight.operatedBy\" src=\"./assets/ic_airticket/ic_pacific.png\"> -->\n                            <img class=\"img-logo\" *ngIf=\"bookingFlight.departFlight.operatedBy && bookingFlight.departFlight.urlLogo\" [src]=\"bookingFlight.departFlight.urlLogo\">\n                            <img class=\"img-logo\" *ngIf=\"bookingFlight.departFlight.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                        </div>\n                        \n                        <div class=\"text-airlinecode\">{{ bookingFlight.departFlight.airlineCode }}</div>\n                    </div>\n                    <div class=\"div-width-100\">\n                        <div class=\"div-airlineclass\">{{ bookingFlight.departFlight.ticketClass }}</div>\n                    </div>    \n                </div>\n    \n                <div class=\"d-flex m-top-16 text-time\">\n                    <div class=\"div-width-400 d-flex\">\n                        <div class=\"d-flex div-width-100\">\n                            <div class=\"div-width-100  cls-error\">\n                                {{ bookingFlight.departFlight.departTimeDisplay }}\n                                <img class=\"img-flight\" src=\"./assets/ic_flight/icon_flight_right.svg\">\n                            </div>\n                            \n                            <div class=\"div-width-100 \">{{ bookingFlight.departFlight.landingTimeDisplay }}</div>\n                        </div>\n                    </div>\n                    <div class=\"div-width-100\">{{ bookingFlight.departFlight.flightTimeDisplay }}p</div>\n                </div>\n    \n                <div class=\"d-flex text-code\">\n                    <div class=\"div-width-400 d-flex \">\n                        <div class=\"div-width-100 d-flex text-bold\">\n                            <div class=\"div-width-100 \">{{ bookingFlight.departCity }} ({{ bookingFlight.departCode }})</div>\n                            <div class=\"div-width-100 \">\n                                {{ bookingFlight.returnCity }} ({{ bookingFlight.returnCode }})\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"div-width-100\" *ngIf=\"(bookingFlight.departFlight.stops == 0) else divtransit\">Bay thẳng</div>\n                    <ng-template #divtransit>\n                        <div class=\"div-width-100\" >Chặng dừng</div>\n                    </ng-template>\n                </div>\n            </div>\n\n            <!-- Chiều về -->\n            <div class=\"div-depart m-top-32\" *ngIf=\"bookingFlight.returnFlight\">\n                <div class=\"m-top-10 text-cin\">\n                    {{checkOutDisplay}}\n                </div>\n    \n                <div class=\"m-top-12 d-flex\">\n                    <div class=\"div-width-400 d-flex\">\n                        <div class=\"div-logo\">\n                            <img class=\"img-logo logo-vj\" *ngIf=\"bookingFlight.returnFlight.airlineCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                            <img class=\"img-logo\" *ngIf=\"bookingFlight.returnFlight.airlineCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                            <img class=\"img-logo logo-vna\" *ngIf=\"bookingFlight.returnFlight.airlineCode == 'VietnamAirlines' && !bookingFlight.returnFlight.operatedBy\"src=\"./assets/ic_airticket/logo_vna.png\">\n                            <img class=\"img-logo\" *ngIf=\"bookingFlight.returnFlight.operatedBy && bookingFlight.returnFlight.urlLogo\" [src]=\"bookingFlight.returnFlight.urlLogo\">\n                            <img class=\"img-logo\" *ngIf=\"bookingFlight.returnFlight.airlineCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                        </div>\n                        \n                        <div class=\"text-airlinecode\">{{ bookingFlight.returnFlight.airlineCode }}</div>\n                    </div>\n                    <div class=\"div-width-100\">\n                        <div class=\"div-airlineclass\">{{ bookingFlight.returnFlight.ticketClass }}</div>\n                    </div>    \n                </div>\n    \n            \n                <div class=\"d-flex m-top-16 text-time\">\n                    <div class=\"div-width-400 d-flex\">\n                        <div class=\"d-flex div-width-100\">\n                            <div class=\"div-width-100  cls-error\">\n                                {{ bookingFlight.returnFlight.departTimeDisplay }}\n                                <img class=\"img-flight\" src=\"./assets/ic_flight/icon_flight_right.svg\">\n                            </div>\n                            \n                            <div class=\"div-width-100 \">{{ bookingFlight.returnFlight.landingTimeDisplay }}</div>\n                        </div>\n                    </div>\n                    <div class=\"div-width-100\">{{ bookingFlight.returnFlight.flightTimeDisplay }}p</div>\n                </div>\n    \n                <div class=\"d-flex text-code\">\n                    <div class=\"div-width-400 d-flex\">\n                        <div class=\"div-width-100 d-flex text-bold\">\n                            <div class=\"div-width-100 \">{{ bookingFlight.returnCity }} ({{ bookingFlight.returnCode }})</div>\n                            <div class=\"div-width-100 \">\n                                {{ bookingFlight.departCity }} ({{ bookingFlight.departCode }})\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"div-width-100\" *ngIf=\"(bookingFlight.returnFlight.stops == 0) else divtransit\">Bay thẳng</div>\n                    <ng-template #divtransit>\n                        <div class=\"div-width-100\" >Chặng dừng</div>\n                    </ng-template>\n                </div>\n    \n            </div>\n\n        </div>\n    </ion-content>\n    <ion-footer padding>\n        <div class=\"text-confirm\">Thông tin đặt chỗ đã chính xác?</div>\n        <div class=\"div-button-payment-done\">\n            <button (click)=\"gotopayment()\" ion-button round outline class=\"button button1\">Đúng, tiến hành thanh toán</button>\n            <button (click)=\"edit()\" ion-button round outline class=\"button button2 m-top-8\">Chỉnh sửa lại</button>\n        </div>\n    </ion-footer>"

/***/ }),

/***/ "./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".flight-booking-detail-content .p-16 {\n  padding: 16px;\n}\n.flight-booking-detail-content .d-flex {\n  display: flex;\n}\n.flight-booking-detail-content .m-bottom-10 {\n  margin-bottom: 10px;\n}\n.flight-booking-detail-content .div-split {\n  margin: 16px -16px;\n  background-color: #f2f2f2;\n  height: 4px;\n}\n.flight-booking-detail-content .div-split-1 {\n  border-bottom: solid 0.5px rgba(205, 205, 205, 0.5);\n  margin: 16px 0;\n}\n.flight-booking-detail-content .div-width-400 {\n  width: 400%;\n}\n.flight-booking-detail-content .div-width-100 {\n  width: 100%;\n}\n.flight-booking-detail-content .div-width-150 {\n  width: 150%;\n}\n.flight-booking-detail-content .div-pax {\n  padding-top: 20px;\n}\n.flight-booking-detail-content .text-name {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #222222;\n}\n.flight-booking-detail-content .text-phone {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.flight-booking-detail-content .pax-title {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #828282;\n  margin-bottom: 8px;\n}\n.flight-booking-detail-content .pax-gender {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n  width: 50px;\n}\n.flight-booking-detail-content .pax-name {\n  font-size: 16px;\n  color: #333333;\n}\n.flight-booking-detail-content .cls-error {\n  color: #e52822 !important;\n  font-weight: bold !important;\n}\n.flight-booking-detail-content .cls-error .pax-dob {\n  color: #e52822 !important;\n  font-weight: bold !important;\n}\n.flight-booking-detail-content .div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n.flight-booking-detail-content .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n.flight-booking-detail-content .div-width-600 {\n  width: 600%;\n}\n.flight-booking-detail-content .div-width-60 {\n  width: 60%;\n}\n.flight-booking-detail-content .text-right {\n  text-align: right;\n}\n.flight-booking-detail-content .text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.flight-booking-detail-content .text-flight-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n.flight-booking-detail-content .v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.flight-booking-detail-content .img-oneway {\n  width: 12px !important;\n  margin-left: 12px;\n}\n.flight-booking-detail-content .text-cin {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #4f4f4f;\n  margin-bottom: 12px;\n}\n.flight-booking-detail-content .div-logo {\n  margin-right: 8px;\n}\n.flight-booking-detail-content .div-logo .img-logo {\n  height: 18px;\n}\n.flight-booking-detail-content .div-icon-flight {\n  margin-left: 32px;\n  margin-right: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.flight-booking-detail-content .img-flight {\n  width: 14px;\n  margin-left: 15%;\n  position: absolute;\n  margin-top: 4px;\n}\n.flight-booking-detail-content .div-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 4px;\n  margin-top: -2px;\n}\n.flight-booking-detail-content .text-airlinecode {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #333333;\n}\n.flight-booking-detail-content .div-airlineclass {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.flight-booking-detail-content .text-time {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n.flight-booking-detail-content .text-confirm {\n  margin-bottom: 8px;\n  font-size: 14px;\n  text-align: left;\n  color: #333333;\n}\n.flight-booking-detail-content .text-code {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #333333;\n}\n.flight-booking-detail-content .div-flight-condition {\n  margin: 0 -16px;\n  padding: 10px 16px;\n  background: #f2f2f2;\n}\n.flight-booking-detail-content .img-info {\n  width: 14px;\n  height: 14px;\n}\n.flight-booking-detail-content .div-text-refund {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #828282;\n}\n.flight-booking-detail-content .div-text-changeflight {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #9fc43a;\n}\n.flight-booking-detail-content .div-flight-condition {\n  margin-top: 16px;\n}\n.flight-booking-detail-content .not-allow {\n  color: #828282 !important;\n}\n.flight-booking-detail-content .pax-dob {\n  color: #828282;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n}\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border-color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 100%;\n  font-size: 18px !important;\n  padding: 0;\n  margin-top: 8px;\n  height: 40px !important;\n}\n.button1 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  font-size: 18px !important;\n  height: 40px !important;\n}\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n.div-button-payment-done .m-top-8 {\n  margin-top: 8 !important;\n}\n.text-confirm {\n  margin-bottom: 8px;\n  font-size: 14px;\n  text-align: left;\n  color: #333333;\n}\n.text-bold {\n  font-weight: bold;\n}\n::ng-deep .sc-ion-modal-ios-h.cls-modal-confirmbookingdetail {\n  --width: 90%;\n  --height: 92%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0Y29uZmlybWJvb2tpbmdkZXRhaWwvZmxpZ2h0Y29uZmlybWJvb2tpbmdkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb25maXJtYm9va2luZ2RldGFpbC9mbGlnaHRjb25maXJtYm9va2luZ2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxhQUFBO0FDRlI7QURJSTtFQUNJLGFBQUE7QUNGUjtBRElJO0VBQ0ksbUJBQUE7QUNGUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNIUjtBREtJO0VBQ0ksbURBQUE7RUFDQSxjQUFBO0FDSFI7QURLSTtFQUNJLFdBQUE7QUNIUjtBREtJO0VBQ0ksV0FBQTtBQ0hSO0FES0k7RUFDSSxXQUFBO0FDSFI7QURNSTtFQUNJLGlCQUFBO0FDSlI7QURNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDSlI7QURPSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTFI7QURRSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNOUjtBRFNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDUFI7QURVSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDUlI7QURVSTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNSUjtBRFVRO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ1JaO0FEWUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNWUjtBRFlRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDVlY7QURhTTtFQUNFLFdBQUE7QUNYUjtBRGFNO0VBQ0UsVUFBQTtBQ1hSO0FEYU07RUFDRSxpQkFBQTtBQ1hSO0FEYU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1hSO0FEY007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1pSO0FEY007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ1pSO0FEZU07RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDYlI7QURnQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDZFI7QURpQkk7RUFDSSxpQkFBQTtBQ2ZSO0FEZ0JRO0VBQ0ksWUFBQTtBQ2RaO0FEaUJJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDZlI7QURvQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNsQlI7QURxQkk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNuQlI7QURzQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ3BCUjtBRHVCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDckJSO0FEd0JJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDdEJSO0FEeUJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDdkJSO0FEMEJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDeEJSO0FEMkJJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUN6QlI7QUQ0Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzFCUjtBRDZCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDM0JSO0FEOEJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUM1QlI7QUQrQkk7RUFDSSxnQkFBQTtBQzdCUjtBRCtCSTtFQUNJLHlCQUFBO0FDN0JSO0FEK0JJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDN0JSO0FEbUNBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNqQ0o7QURtQ0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUNqQ0o7QURtQ0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FDakNKO0FEbUNJO0VBQ0ksd0JBQUE7QUNqQ1I7QURtQ0k7RUFDSSx3QkFBQTtBQ2pDUjtBRG9DQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2pDSjtBRG1DQTtFQUNJLGlCQUFBO0FDaENKO0FEbUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNoQ1IiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRjb25maXJtYm9va2luZ2RldGFpbC9mbGlnaHRjb25maXJtYm9va2luZ2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50e1xuICAgIC5wLTE2e1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgICAuZC1mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAubS1ib3R0b20tMTB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLmRpdi1zcGxpdHtcbiAgICAgICAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICB9XG4gICAgLmRpdi1zcGxpdC0xe1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCByZ2JhKDIwNSwyMDUsMjA1LCAwLjUpO1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICB9XG4gICAgLmRpdi13aWR0aC00MDB7XG4gICAgICAgIHdpZHRoOiA0MDAlO1xuICAgIH1cbiAgICAuZGl2LXdpZHRoLTEwMHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kaXYtd2lkdGgtMTUwe1xuICAgICAgICB3aWR0aDogMTUwJTtcbiAgICB9XG5cbiAgICAuZGl2LXBheHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuICAgIC50ZXh0LW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cblxuICAgIC50ZXh0LXBob25le1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgIC5wYXgtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuXG4gICAgLnBheC1nZW5kZXJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgIC5wYXgtbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICB9XG4gICAgLmNscy1lcnJvcntcbiAgICAgICAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcblxuICAgICAgICAucGF4LWRvYntcbiAgICAgICAgICAgIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1mbGlnaHQtaW5vdXR7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxOHB4O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgICAgICAuaW1nLWZsaWdodC1pbm91dHtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZGl2LXdpZHRoLTYwMHtcbiAgICAgICAgd2lkdGg6IDYwMCU7XG4gICAgICB9XG4gICAgICAuZGl2LXdpZHRoLTYwe1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgICAgLnRleHQtcmlnaHR7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLnRleHQtZmxpZ2h0LWRhdGV0aW1le1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuXG4gICAgICAudGV4dC1mbGlnaHQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuICAgICAgLnYtYWxpZ24tY2VudGVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgIFxuICAgICAgLmltZy1vbmV3YXl7XG4gICAgICAgIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgfVxuXG4gICAgLnRleHQtY2lue1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAuZGl2LWxvZ297XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAuaW1nLWxvZ297XG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdi1pY29uLWZsaWdodHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmltZy1mbGlnaHR7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTUlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbiAgICAuZGl2LWljb257XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICB9XG5cbiAgICAudGV4dC1haXJsaW5lY29kZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuXG4gICAgLmRpdi1haXJsaW5lY2xhc3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG5cbiAgICAudGV4dC10aW1le1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICB9XG5cbiAgICAudGV4dC1jb25maXJte1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuXG4gICAgLnRleHQtY29kZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cblxuICAgIC5kaXYtZmxpZ2h0LWNvbmRpdGlvbntcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgfVxuXG4gICAgLmltZy1pbmZve1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgIH1cblxuICAgIC5kaXYtdGV4dC1yZWZ1bmR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuXG4gICAgLmRpdi10ZXh0LWNoYW5nZWZsaWdodHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzlmYzQzYTtcbiAgICB9XG5cbiAgICAuZGl2LWZsaWdodC1jb25kaXRpb257XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5ub3QtYWxsb3d7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wYXgtZG9ie1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIH1cblxuICAgXG59XG5cbi5idXR0b24yXG57XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogI2ZmOTUwMDtcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cbi5idXR0b24xXG57XG4gICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLm0tdG9wLTB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm0tdG9wLTh7XG4gICAgICAgIG1hcmdpbi10b3A6IDggIWltcG9ydGFudDtcbiAgICB9XG59XG4udGV4dC1jb25maXJte1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogIzMzMzMzMztcbn1cbi50ZXh0LWJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46Om5nLWRlZXB7XG4gICAgLnNjLWlvbi1tb2RhbC1pb3MtaC5jbHMtbW9kYWwtY29uZmlybWJvb2tpbmdkZXRhaWwge1xuICAgICAgICAtLXdpZHRoOiA5MCU7XG4gICAgICAgIC0taGVpZ2h0OiA5MiU7XG4gICAgfVxufSIsIi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAucC0xNiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLm0tYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LXNwbGl0IHtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBoZWlnaHQ6IDRweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LXNwbGl0LTEge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCByZ2JhKDIwNSwgMjA1LCAyMDUsIDAuNSk7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtd2lkdGgtNDAwIHtcbiAgd2lkdGg6IDQwMCU7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LXdpZHRoLTE1MCB7XG4gIHdpZHRoOiAxNTAlO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtcGF4IHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnRleHQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC50ZXh0LXBob25lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAucGF4LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAucGF4LWdlbmRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5wYXgtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmNscy1lcnJvciB7XG4gIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmNscy1lcnJvciAucGF4LWRvYiB7XG4gIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi1mbGlnaHQtaW5vdXQge1xuICBwYWRkaW5nOiAwcHggMThweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtZmxpZ2h0LWlub3V0IC5pbWctZmxpZ2h0LWlub3V0IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC0ycHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi13aWR0aC02MDAge1xuICB3aWR0aDogNjAwJTtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LXdpZHRoLTYwIHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC50ZXh0LWZsaWdodC1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnRleHQtZmxpZ2h0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnYtYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmltZy1vbmV3YXkge1xuICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAudGV4dC1jaW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LWxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LWxvZ28gLmltZy1sb2dvIHtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtaWNvbi1mbGlnaHQge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuaW1nLWZsaWdodCB7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnRleHQtYWlybGluZWNvZGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LWFpcmxpbmVjbGFzcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAudGV4dC10aW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnRleHQtY29uZmlybSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAudGV4dC1jb2RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtZmxpZ2h0LWNvbmRpdGlvbiB7XG4gIG1hcmdpbjogMCAtMTZweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5pbWctaW5mbyB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi10ZXh0LXJlZnVuZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi10ZXh0LWNoYW5nZWZsaWdodCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICM5ZmM0M2E7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi1mbGlnaHQtY29uZGl0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAubm90LWFsbG93IHtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAucGF4LWRvYiB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uMSB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1idXR0b24tcGF5bWVudC1kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRpdi1idXR0b24tcGF5bWVudC1kb25lIC5tLXRvcC0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLmRpdi1idXR0b24tcGF5bWVudC1kb25lIC5tLXRvcC04IHtcbiAgbWFyZ2luLXRvcDogOCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1jb25maXJtIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAuc2MtaW9uLW1vZGFsLWlvcy1oLmNscy1tb2RhbC1jb25maXJtYm9va2luZ2RldGFpbCB7XG4gIC0td2lkdGg6IDkwJTtcbiAgLS1oZWlnaHQ6IDkyJTtcbn0iXX0= */"
=======
module.exports = ".flight-booking-detail-content .p-16 {\n  padding: 16px;\n}\n.flight-booking-detail-content .d-flex {\n  display: flex;\n}\n.flight-booking-detail-content .m-bottom-10 {\n  margin-bottom: 10px;\n}\n.flight-booking-detail-content .div-split {\n  margin: 16px -16px;\n  background-color: #f2f2f2;\n  height: 4px;\n}\n.flight-booking-detail-content .div-split-1 {\n  border-bottom: solid 0.5px rgba(205, 205, 205, 0.5);\n  margin: 16px 0;\n}\n.flight-booking-detail-content .div-width-400 {\n  width: 400%;\n}\n.flight-booking-detail-content .div-width-100 {\n  width: 100%;\n}\n.flight-booking-detail-content .div-width-150 {\n  width: 150%;\n}\n.flight-booking-detail-content .div-pax {\n  padding-top: 20px;\n}\n.flight-booking-detail-content .text-name {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #222222;\n}\n.flight-booking-detail-content .text-phone {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.flight-booking-detail-content .pax-title {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #828282;\n  margin-bottom: 8px;\n}\n.flight-booking-detail-content .pax-gender {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n  width: 50px;\n}\n.flight-booking-detail-content .pax-name {\n  font-size: 16px;\n  color: #333333;\n}\n.flight-booking-detail-content .cls-error {\n  color: #e52822 !important;\n  font-weight: bold !important;\n}\n.flight-booking-detail-content .cls-error .pax-dob {\n  color: #e52822 !important;\n  font-weight: bold !important;\n}\n.flight-booking-detail-content .div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n.flight-booking-detail-content .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n.flight-booking-detail-content .div-width-600 {\n  width: 600%;\n}\n.flight-booking-detail-content .div-width-60 {\n  width: 60%;\n}\n.flight-booking-detail-content .text-right {\n  text-align: right;\n}\n.flight-booking-detail-content .text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.flight-booking-detail-content .text-flight-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n.flight-booking-detail-content .v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.flight-booking-detail-content .img-oneway {\n  width: 12px !important;\n  margin-left: 12px;\n}\n.flight-booking-detail-content .text-cin {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #4f4f4f;\n  margin-bottom: 12px;\n}\n.flight-booking-detail-content .div-logo {\n  margin-right: 8px;\n}\n.flight-booking-detail-content .div-logo .img-logo {\n  height: 18px;\n}\n.flight-booking-detail-content .div-icon-flight {\n  margin-left: 32px;\n  margin-right: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.flight-booking-detail-content .img-flight {\n  width: 14px;\n  margin-left: 15%;\n  position: absolute;\n  margin-top: 4px;\n}\n.flight-booking-detail-content .div-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 4px;\n  margin-top: -2px;\n}\n.flight-booking-detail-content .text-airlinecode {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #333333;\n}\n.flight-booking-detail-content .div-airlineclass {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.flight-booking-detail-content .text-time {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n.flight-booking-detail-content .text-confirm {\n  margin-bottom: 8px;\n  font-size: 14px;\n  text-align: left;\n  color: #333333;\n}\n.flight-booking-detail-content .text-code {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #333333;\n}\n.flight-booking-detail-content .div-flight-condition {\n  margin: 0 -16px;\n  padding: 10px 16px;\n  background: #f2f2f2;\n}\n.flight-booking-detail-content .img-info {\n  width: 14px;\n  height: 14px;\n}\n.flight-booking-detail-content .div-text-refund {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #828282;\n}\n.flight-booking-detail-content .div-text-changeflight {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #9fc43a;\n}\n.flight-booking-detail-content .div-flight-condition {\n  margin-top: 16px;\n}\n.flight-booking-detail-content .not-allow {\n  color: #828282 !important;\n}\n.flight-booking-detail-content .pax-dob {\n  color: #828282;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n}\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border-color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 100%;\n  font-size: 18px !important;\n  padding: 0;\n  margin-top: 8px;\n  height: 40px !important;\n}\n.button1 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  font-size: 18px !important;\n  height: 40px !important;\n}\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n.div-button-payment-done .m-top-8 {\n  margin-top: 8 !important;\n}\n.text-confirm {\n  margin-bottom: 8px;\n  font-size: 14px;\n  text-align: left;\n  color: #333333;\n}\n.text-bold {\n  font-weight: bold;\n}\n::ng-deep .sc-ion-modal-ios-h.cls-modal-confirmbookingdetail {\n  --width: 90%;\n  --height: 92%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGNvbmZpcm1ib29raW5nZGV0YWlsL2ZsaWdodGNvbmZpcm1ib29raW5nZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0Y29uZmlybWJvb2tpbmdkZXRhaWwvZmxpZ2h0Y29uZmlybWJvb2tpbmdkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksYUFBQTtBQ0ZSO0FESUk7RUFDSSxhQUFBO0FDRlI7QURJSTtFQUNJLG1CQUFBO0FDRlI7QURLSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDSFI7QURLSTtFQUNJLG1EQUFBO0VBQ0EsY0FBQTtBQ0hSO0FES0k7RUFDSSxXQUFBO0FDSFI7QURLSTtFQUNJLFdBQUE7QUNIUjtBREtJO0VBQ0ksV0FBQTtBQ0hSO0FETUk7RUFDSSxpQkFBQTtBQ0pSO0FETUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0pSO0FET0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0xSO0FEUUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTlI7QURTSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1BSO0FEVUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1JSO0FEVUk7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDUlI7QURVUTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNSWjtBRFlJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDVlI7QURZUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ1ZWO0FEYU07RUFDRSxXQUFBO0FDWFI7QURhTTtFQUNFLFVBQUE7QUNYUjtBRGFNO0VBQ0UsaUJBQUE7QUNYUjtBRGFNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNYUjtBRGNNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNaUjtBRGNNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNaUjtBRGVNO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ2JSO0FEZ0JJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2RSO0FEaUJJO0VBQ0ksaUJBQUE7QUNmUjtBRGdCUTtFQUNJLFlBQUE7QUNkWjtBRGlCSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ2ZSO0FEb0JJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDbEJSO0FEcUJJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDbkJSO0FEc0JJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNwQlI7QUR1Qkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ3JCUjtBRHdCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ3RCUjtBRHlCSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3ZCUjtBRDBCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ3hCUjtBRDJCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDekJSO0FENEJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUMxQlI7QUQ2Qkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQzNCUjtBRDhCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDNUJSO0FEK0JJO0VBQ0ksZ0JBQUE7QUM3QlI7QUQrQkk7RUFDSSx5QkFBQTtBQzdCUjtBRCtCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQzdCUjtBRG1DQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDakNKO0FEbUNBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FDakNKO0FEbUNBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQ2pDSjtBRG1DSTtFQUNJLHdCQUFBO0FDakNSO0FEbUNJO0VBQ0ksd0JBQUE7QUNqQ1I7QURvQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNqQ0o7QURtQ0E7RUFDSSxpQkFBQTtBQ2hDSjtBRG1DSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDaENSIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29uZmlybWJvb2tpbmdkZXRhaWwvZmxpZ2h0Y29uZmlybWJvb2tpbmdkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudHtcbiAgICAucC0xNntcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG4gICAgLmQtZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLm0tYm90dG9tLTEwe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5kaXYtc3BsaXR7XG4gICAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5kaXYtc3BsaXQtMXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggcmdiYSgyMDUsMjA1LDIwNSwgMC41KTtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgfVxuICAgIC5kaXYtd2lkdGgtNDAwe1xuICAgICAgICB3aWR0aDogNDAwJTtcbiAgICB9XG4gICAgLmRpdi13aWR0aC0xMDB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuZGl2LXdpZHRoLTE1MHtcbiAgICAgICAgd2lkdGg6IDE1MCU7XG4gICAgfVxuXG4gICAgLmRpdi1wYXh7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cbiAgICAudGV4dC1uYW1le1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG5cbiAgICAudGV4dC1waG9uZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICAucGF4LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC5wYXgtZ2VuZGVye1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICB9XG5cbiAgICAucGF4LW5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuICAgIC5jbHMtZXJyb3J7XG4gICAgICAgIGNvbG9yOiAjZTUyODIyICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLnBheC1kb2J7XG4gICAgICAgICAgICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtZmxpZ2h0LWlub3V0e1xuICAgICAgICBwYWRkaW5nOiAwcHggMThweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgICAgICAgLmltZy1mbGlnaHQtaW5vdXR7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRpdi13aWR0aC02MDB7XG4gICAgICAgIHdpZHRoOiA2MDAlO1xuICAgICAgfVxuICAgICAgLmRpdi13aWR0aC02MHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIH1cbiAgICAgIC50ZXh0LXJpZ2h0e1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWZsaWdodC1kYXRldGltZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cblxuICAgICAgLnRleHQtZmxpZ2h0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cbiAgICAgIC52LWFsaWduLWNlbnRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICBcbiAgICAgIC5pbWctb25ld2F5e1xuICAgICAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgIH1cblxuICAgIC50ZXh0LWNpbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgLmRpdi1sb2dve1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgLmltZy1sb2dve1xuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kaXYtaWNvbi1mbGlnaHR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIC5pbWctZmxpZ2h0e1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxuXG4gICAgLmRpdi1pY29ue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuXG4gICAgLnRleHQtYWlybGluZWNvZGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cblxuICAgIC5kaXYtYWlybGluZWNsYXNze1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuXG4gICAgLnRleHQtdGltZXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuXG4gICAgLnRleHQtY29uZmlybXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cblxuICAgIC50ZXh0LWNvZGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICB9XG5cbiAgICAuZGl2LWZsaWdodC1jb25kaXRpb257XG4gICAgICAgIG1hcmdpbjogMCAtMTZweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIH1cblxuICAgIC5pbWctaW5mb3tcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICB9XG5cbiAgICAuZGl2LXRleHQtcmVmdW5ke1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cblxuICAgIC5kaXYtdGV4dC1jaGFuZ2VmbGlnaHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICM5ZmM0M2E7XG4gICAgfVxuXG4gICAgLmRpdi1mbGlnaHQtY29uZGl0aW9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgICAubm90LWFsbG93e1xuICAgICAgICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucGF4LWRvYntcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB9XG5cbiAgIFxufVxuXG4uYnV0dG9uMlxue1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICNmZjk1MDA7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9uMVxue1xuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuLmRpdi1idXR0b24tcGF5bWVudC1kb25le1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5tLXRvcC0we1xuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5tLXRvcC04e1xuICAgICAgICBtYXJnaW4tdG9wOiA4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuLnRleHQtY29uZmlybXtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG4udGV4dC1ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOjpuZy1kZWVwe1xuICAgIC5zYy1pb24tbW9kYWwtaW9zLWguY2xzLW1vZGFsLWNvbmZpcm1ib29raW5nZGV0YWlsIHtcbiAgICAgICAgLS13aWR0aDogOTAlO1xuICAgICAgICAtLWhlaWdodDogOTIlO1xuICAgIH1cbn0iLCIuZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnAtMTYge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5tLWJvdHRvbS0xMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi1zcGxpdCB7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgaGVpZ2h0OiA0cHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi1zcGxpdC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggcmdiYSgyMDUsIDIwNSwgMjA1LCAwLjUpO1xuICBtYXJnaW46IDE2cHggMDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LXdpZHRoLTQwMCB7XG4gIHdpZHRoOiA0MDAlO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi13aWR0aC0xNTAge1xuICB3aWR0aDogMTUwJTtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LXBheCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC50ZXh0LW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAudGV4dC1waG9uZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnBheC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnBheC1nZW5kZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICB3aWR0aDogNTBweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAucGF4LW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5jbHMtZXJyb3Ige1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5jbHMtZXJyb3IgLnBheC1kb2Ige1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtZmxpZ2h0LWlub3V0IHtcbiAgcGFkZGluZzogMHB4IDE4cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LWZsaWdodC1pbm91dCAuaW1nLWZsaWdodC1pbm91dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMnB4O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtd2lkdGgtNjAwIHtcbiAgd2lkdGg6IDYwMCU7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi13aWR0aC02MCB7XG4gIHdpZHRoOiA2MCU7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAudGV4dC1mbGlnaHQtZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC50ZXh0LWZsaWdodC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC52LWFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5pbWctb25ld2F5IHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnRleHQtY2luIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi1sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi1sb2dvIC5pbWctbG9nbyB7XG4gIGhlaWdodDogMThweDtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LWljb24tZmxpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmltZy1mbGlnaHQge1xuICB3aWR0aDogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC50ZXh0LWFpcmxpbmVjb2RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLmRpdi1haXJsaW5lY2xhc3Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnRleHQtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC50ZXh0LWNvbmZpcm0ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnRleHQtY29kZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuZGl2LWZsaWdodC1jb25kaXRpb24ge1xuICBtYXJnaW46IDAgLTE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi5mbGlnaHQtYm9va2luZy1kZXRhaWwtY29udGVudCAuaW1nLWluZm8ge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtdGV4dC1yZWZ1bmQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtdGV4dC1jaGFuZ2VmbGlnaHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjOWZjNDNhO1xufVxuLmZsaWdodC1ib29raW5nLWRldGFpbC1jb250ZW50IC5kaXYtZmxpZ2h0LWNvbmRpdGlvbiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLm5vdC1hbGxvdyB7XG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LWJvb2tpbmctZGV0YWlsLWNvbnRlbnQgLnBheC1kb2Ige1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbjEge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSAubS10b3AtMCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSAubS10b3AtOCB7XG4gIG1hcmdpbi10b3A6IDggIWltcG9ydGFudDtcbn1cblxuLnRleHQtY29uZmlybSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG46Om5nLWRlZXAgLnNjLWlvbi1tb2RhbC1pb3MtaC5jbHMtbW9kYWwtY29uZmlybWJvb2tpbmdkZXRhaWwge1xuICAtLXdpZHRoOiA5MCU7XG4gIC0taGVpZ2h0OiA5MiU7XG59Il19 */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.ts ***!
  \*******************************************************************************/
/*! exports provided: flightConfirmBookingDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightConfirmBookingDetailPage", function() { return flightConfirmBookingDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");








let flightConfirmBookingDetailPage = class flightConfirmBookingDetailPage {
    constructor(activatedRoute, _flightService, navCtrl, searchhotel, storage, zone, valueGlobal, modalCtrl) {
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.navCtrl = navCtrl;
        this.searchhotel = searchhotel;
        this.storage = storage;
        this.zone = zone;
        this.valueGlobal = valueGlobal;
        this.modalCtrl = modalCtrl;
        this.allowchangeflight = true;
        this.bookingFlight = this._flightService.itemFlightCache;
        this.checkInDisplay = this.bookingFlight.checkInDisplay + ", " + moment__WEBPACK_IMPORTED_MODULE_4__(this.bookingFlight.departFlight.departTime).format("YYYY");
        if (this.bookingFlight && this.bookingFlight.returnFlight) {
            this.checkOutDisplay = this.bookingFlight.checkOutDisplay + ", " + moment__WEBPACK_IMPORTED_MODULE_4__(this.bookingFlight.returnFlight.departTime).format("YYYY");
        }
        if (this._flightService.itemFlightCache.dataBooking && this._flightService.itemFlightCache.dataBooking.departCondition) {
            this.departConditionInfo = this._flightService.itemFlightCache.dataBooking.departCondition;
        }
        if (this._flightService.itemFlightCache.dataBooking && this._flightService.itemFlightCache.dataBooking.returnCondition) {
            this.returnConditionInfo = this._flightService.itemFlightCache.dataBooking.returnCondition;
        }
        if (this._flightService.itemFlightCache.childs && this._flightService.itemFlightCache.childs.length > 0) {
            this._flightService.itemFlightCache.childs.forEach(element => {
                element.dateofbirthdisplay = moment__WEBPACK_IMPORTED_MODULE_4__(element.dateofbirth).format("D") + ' thg ' + moment__WEBPACK_IMPORTED_MODULE_4__(element.dateofbirth).format("M") + ", " + moment__WEBPACK_IMPORTED_MODULE_4__(element.dateofbirth).format("YYYY");
            });
        }
    }
    ngOnInit() {
    }
    close() {
        this.modalCtrl.dismiss();
    }
    gotopayment() {
        this.modalCtrl.dismiss({ confirm: true });
    }
    edit() {
        this.modalCtrl.dismiss();
    }
};
flightConfirmBookingDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-flightconfirmbookingdetail',
        template: __webpack_require__(/*! ./flightconfirmbookingdetail.page.html */ "./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.html"),
        styles: [__webpack_require__(/*! ./flightconfirmbookingdetail.page.scss */ "./src/app/flightconfirmbookingdetail/flightconfirmbookingdetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_7__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], flightConfirmBookingDetailPage);



/***/ })

}]);
//# sourceMappingURL=flightadddetails-flightadddetails-module.js.map