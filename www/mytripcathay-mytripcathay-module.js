(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripcathay-mytripcathay-module"],{

/***/ "./src/app/mytripcathay/mytripcathay.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mytripcathay/mytripcathay.module.ts ***!
  \*****************************************************/
/*! exports provided: MytripcathayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripcathayPageModule", function() { return MytripcathayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytripcathay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripcathay.page */ "./src/app/mytripcathay/mytripcathay.page.ts");







const routes = [
    {
        path: '',
        component: _mytripcathay_page__WEBPACK_IMPORTED_MODULE_6__["MytripcathayPage"]
    }
];
let MytripcathayPageModule = class MytripcathayPageModule {
};
MytripcathayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytripcathay_page__WEBPACK_IMPORTED_MODULE_6__["MytripcathayPage"]]
    })
], MytripcathayPageModule);



/***/ }),

/***/ "./src/app/mytripcathay/mytripcathay.page.html":
/*!*****************************************************!*\
  !*** ./src/app/mytripcathay/mytripcathay.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\">\n        <div style=\"position: absolute;height: 48px;width: 48px;\" (click)=\"goback()\">\n          <!-- <ion-icon (click)=\"goback()\" color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n          <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-8px\"\n            src=\"./assets/imgs/ios-arrow-round-back.svg\">\n        </div>\n\n        <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Yêu cầu bảo\n            hiểm</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div-cathay\">\n    <div class=\"div-big\">\n      <div class=\"div-bkg\">\n        <span class=\"text-bkg-title\">Mã đơn hàng:</span><span class=\"text-bkg\"> {{booking_id}}</span>\n      </div>\n  \n      <div style=\"display: flex;\">\n        <div style=\"width:20%\">\n          <img class=\"logo-insurance\" src=\"./assets/logo/logo_1.svg\">\n        </div>\n        <div>\n          <div class=\"text-name\">\n            {{customerName}}\n          </div>\n          <div *ngIf=\"noLoginObj\" class=\"text-code-in\">\n            {{noLoginObj.insurObj.adultList[0].insurance_code}}\n          </div>\n        </div>\n  \n      </div>\n      <div class=\"text-request margin-top-20\">\n        Yêu cầu bảo hiểm\n      </div>\n      <div *ngIf=\"noLoginObj\">\n        <div *ngFor=\"let flight of noLoginObj.insurObj.adultList[0].flightObj; let i=index\"  [hidden]=\"!flight.flightNumner || !flight.departureDate\">\n          <div *ngIf=\"i==0 && flight.airlineCode\">\n            <div  class=\"text-code-in margin-top-8\">\n              {{flight.flightFrom}} -  {{flight.flightTo}}  | {{ replaceDate(flight.departureDate) }}  |  {{ flight.flightNumner }}\n            </div>\n            <div *ngIf=\"!isClaim(noLoginObj.insurObj.adultList[0].claimedFlights, flight.flightNumner) && checkClaimTime(flight)\" class=\"text-code-in margin-top-9\">\n             <span class=\"text-green\" (click)=\"claimCathay(noLoginObj.insurObj.adultList[0].insurance_code,flight.flightNumner,noLoginObj.insurObj.adultList[0],1)\">Trễ chuyến</span>  |  <span (click)=\"claimCathay(noLoginObj.insurObj.adultList[0].insurance_code,flight.flightNumner,noLoginObj.insurObj.adultList[0],3)\" class=\"text-green\">Hủy chuyến</span>\n            </div>\n            <div *ngIf=\"isClaim(noLoginObj.insurObj.adultList[0].claimedFlights, flight.flightNumner) && checkClaimTime(flight)\" class=\"text-code-in margin-top-9\">\n              <span >Đã yêu cầu bảo hiểm</span>\n             </div>\n          </div>\n          <div *ngIf=\"i!=0 && flight.airlineCode\">\n            <div  class=\"text-code-in margin-top-8\">\n              {{flight.flightFrom}} -  {{flight.flightTo}}  | {{ replaceDate(flight.departureDate) }}  |  {{ flight.flightNumner }}\n            </div>\n            <div *ngIf=\"!isClaim(noLoginObj.insurObj.adultList[0].claimedFlights, flight.flightNumner) && checkClaimTime(flight)\" class=\"text-code-in margin-top-9\">\n             <span class=\"text-green\" (click)=\"claimCathay(noLoginObj.insurObj.adultList[0].insurance_code,flight.flightNumner,noLoginObj.insurObj.adultList[0],2)\">Trễ chuyến</span>  |  <span (click)=\"claimCathay(noLoginObj.insurObj.adultList[0].insurance_code,flight.flightNumner,noLoginObj.insurObj.adultList[0],4)\" class=\"text-green\">Hủy chuyến</span>\n            </div>\n            <div *ngIf=\"isClaim(noLoginObj.insurObj.adultList[0].claimedFlights, flight.flightNumner) && checkClaimTime(flight)\" class=\"text-code-in margin-top-9\">\n              <span >Đã yêu cầu bảo hiểm</span>\n             </div>\n          </div>\n          <div *ngIf=\"!checkClaimTime(flight) && flight.airlineCode\" class=\"text-hotfare\">\n            <span>*Yêu cầu bồi thường được thực hiện vào ngày chuyến bay khởi hành</span>\n           </div>\n        </div>\n      </div>\n    </div>\n    </div>\n    \n\n</ion-content>"

/***/ }),

/***/ "./src/app/mytripcathay/mytripcathay.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/mytripcathay/mytripcathay.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-bkg-title {\n  font-size: 14px;\n  font-weight: 100;\n  color: #333;\n}\n\n.text-bkg {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #333;\n}\n\n.text-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n\n.text-code-in {\n  font-size: 14px;\n  color: #333;\n}\n\n.div-cathay {\n  background-color: #fff;\n  border-radius: 4px;\n  margin: 9px 8px 0px 8px;\n}\n\nion-content {\n  --ion-background-color: #f2f2f2;\n}\n\n.div-bkg {\n  padding: 0px 0px 32px 0px;\n}\n\n.div-big {\n  padding: 16px 0px 26px 8px;\n}\n\n.logo-insurance {\n  width: 56px;\n  height: 37px;\n}\n\n.text-request {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n  color: #868998;\n}\n\n.text-green {\n  font-size: 14px;\n  color: #00c1de;\n}\n\n.margin-top-20 {\n  margin-top: 20px;\n}\n\n.margin-top-9 {\n  margin-top: 9px;\n}\n\n.margin-top-8 {\n  margin-top: 8px;\n}\n\n.text-hotfare {\n  color: #828282;\n  font-size: 11px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvbXl0cmlwY2F0aGF5L215dHJpcGNhdGhheS5wYWdlLnNjc3MiLCJzcmMvYXBwL215dHJpcGNhdGhheS9teXRyaXBjYXRoYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNGLGdCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FDR0o7O0FEREE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNJSjs7QURGQTtFQUNJLCtCQUFBO0FDS0o7O0FESEE7RUFDSSx5QkFBQTtBQ01KOztBREpBO0VBQ0ksMEJBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDUUo7O0FETkE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0VBQ0YsY0FBQTtBQ1VGOztBRFJBO0VBQ0ksZ0JBQUE7QUNXSjs7QURUQTtFQUNJLGVBQUE7QUNZSjs7QURWQTtFQUNJLGVBQUE7QUNhSjs7QURYQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNjSiIsImZpbGUiOiJzcmMvYXBwL215dHJpcGNhdGhheS9teXRyaXBjYXRoYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGV4dC1ia2ctdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzMzMztcbn1cbi50ZXh0LWJrZ3tcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIGNvbG9yOiAjMzMzO1xufVxuLnRleHQtbmFtZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuLnRleHQtY29kZS1pbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG4uZGl2LWNhdGhheXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDlweCA4cHggMHB4IDhweDtcbn1cbmlvbi1jb250ZW50e1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4uZGl2LWJrZ3tcbiAgICBwYWRkaW5nOiAwcHggMHB4IDMycHggMHB4XG59XG4uZGl2LWJpZ3tcbiAgICBwYWRkaW5nOiAxNnB4IDBweCAyNnB4IDhweFxufVxuLmxvZ28taW5zdXJhbmNle1xuICAgIHdpZHRoOiA1NnB4O1xuICAgIGhlaWdodDogMzdweDtcbn1cbi50ZXh0LXJlcXVlc3R7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIGNvbG9yOiAjODY4OTk4O1xufVxuLnRleHQtZ3JlZW57XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwYzFkZTtcbn1cbi5tYXJnaW4tdG9wLTIwe1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFyZ2luLXRvcC05e1xuICAgIG1hcmdpbi10b3A6IDlweDtcbn1cbi5tYXJnaW4tdG9wLTh7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnRleHQtaG90ZmFyZXtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH0iLCIudGV4dC1ia2ctdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4udGV4dC1ia2cge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLnRleHQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi50ZXh0LWNvZGUtaW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZGl2LWNhdGhheSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA5cHggOHB4IDBweCA4cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmRpdi1ia2cge1xuICBwYWRkaW5nOiAwcHggMHB4IDMycHggMHB4O1xufVxuXG4uZGl2LWJpZyB7XG4gIHBhZGRpbmc6IDE2cHggMHB4IDI2cHggOHB4O1xufVxuXG4ubG9nby1pbnN1cmFuY2Uge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiAzN3B4O1xufVxuXG4udGV4dC1yZXF1ZXN0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4Njg5OTg7XG59XG5cbi50ZXh0LWdyZWVuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwYzFkZTtcbn1cblxuLm1hcmdpbi10b3AtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWFyZ2luLXRvcC05IHtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG4ubWFyZ2luLXRvcC04IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4udGV4dC1ob3RmYXJlIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */"

/***/ }),

/***/ "./src/app/mytripcathay/mytripcathay.page.ts":
/*!***************************************************!*\
  !*** ./src/app/mytripcathay/mytripcathay.page.ts ***!
  \***************************************************/
/*! exports provided: MytripcathayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripcathayPage", function() { return MytripcathayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let MytripcathayPage = class MytripcathayPage {
    constructor(gf, activatedRoute, loadingCtrl, activityService, navCtrl, router) {
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.loadingCtrl = loadingCtrl;
        this.activityService = activityService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.booking_id = "";
        this.customerName = "";
        this.childList = [];
        this.childListCathay = [];
    }
    ngOnInit() {
        this.booking_id = this.activatedRoute.snapshot.paramMap.get('bookingid');
        this.customerName = this.activityService.objCathayMytrip.name;
        this.trip = this.activityService.objCathayMytrip.trip;
        this.getCathay();
    }
    goback() {
        this.navCtrl.back();
    }
    getCathay() {
        this.presentLoading();
        this.gf.getCathayByKey(this.booking_id).then((data) => {
            this.loader.dismiss();
            var json = JSON.parse(data);
            if (json.result) {
                this.noLoginObj = json;
                if (this.noLoginObj &&
                    this.noLoginObj.insurObj &&
                    this.noLoginObj.insurObj.adultList.length > 0) {
                    this.noLoginObj.insurObj.adultList =
                        this.noLoginObj.insurObj.adultList.filter((x) => x.customer_name.toLowerCase().trim().includes(this.customerName.toLowerCase().trim()));
                    var childList = this.noLoginObj.insurObj.childList;
                    if (childList.length > 0) {
                        childList.forEach(element => {
                            element.birth = element.customer_dob;
                            element.id = element.insurance_code;
                            element.name = element.customer_name;
                            this.childList.push(element);
                        });
                    }
                }
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    checkClaimTime(flightObj) {
        if (!flightObj || !flightObj.departureDate || !flightObj.departureTime)
            return false;
        if (flightObj.departureDate.indexOf("/")) {
            flightObj.departureDate = flightObj.departureDate.replace(/\//g, "-");
        }
        let now = new Date();
        let flightDT = this.parseDatetime(flightObj.departureDate, flightObj.departureTime);
        let hours = (now - flightDT) / 36e5;
        return hours >= -24 && hours <= 720 ? true : false;
    }
    parseDatetime(date, time) {
        let dateObj = date.split("-");
        let dtStr = dateObj[1] + "/" + dateObj[0] + "/" + dateObj[2] + " " + time;
        return new Date(dtStr);
    }
    isClaim(flights, flightNumner) {
        if (!flights)
            return false;
        else {
            if (flightNumner && flights.includes(flightNumner.replace(' ', '')))
                return true;
            else
                return false;
        }
    }
    replaceDate(dateStr) {
        if (dateStr)
            return dateStr.replace(/-/g, "/");
        else
            return "";
    }
    claimCathay(insurId, flightNumner, item, isCancel) {
        this.childListCathay = [];
        if (insurId.includes("|")) {
            if (flightNumner && flightNumner != "") {
                let insSeparate = insurId.split(",");
                this.insurance_ = insSeparate.find((x) => x.includes(flightNumner));
            }
        }
        let chuoi = this.insurance_.split("|");
        this.insurance_ = chuoi[0];
        item.insurance_code = this.insurance_;
        item.customer_id = item.customer_cmnd;
        if (this.childList.length > 0) {
            this.childList.forEach(element => {
                if (!this.isClaim(element.claimedFlights, flightNumner)) {
                    if (element.insurance_code.indexOf(",")) {
                        let insSeparate = element.insurance_code.split(",");
                        let id = insSeparate.find((x) => x.includes(flightNumner));
                        let chuoi = id.split("|");
                        element.id = chuoi[0];
                    }
                    else {
                        let id = element.insurance_code.find((x) => x.includes(flightNumner));
                        let chuoi = id.split("|");
                        element.id = chuoi[0];
                    }
                    this.childListCathay.push(element);
                }
            });
        }
        console.log(this.insurance_);
        this.gf.setParams({ childlist: this.childListCathay, item: item, trip: this.trip, type: isCancel, flightNumber: flightNumner, ischild: false }, 'insurrenceDetail');
        this.router.navigateByUrl("/insurrancedetail");
    }
};
MytripcathayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytripcathay',
        template: __webpack_require__(/*! ./mytripcathay.page.html */ "./src/app/mytripcathay/mytripcathay.page.html"),
        styles: [__webpack_require__(/*! ./mytripcathay.page.scss */ "./src/app/mytripcathay/mytripcathay.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MytripcathayPage);



/***/ })

}]);
//# sourceMappingURL=mytripcathay-mytripcathay-module.js.map