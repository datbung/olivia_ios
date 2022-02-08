(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripuppayment-mytripuppayment-module"],{

/***/ "./src/app/mytripuppayment/mytripuppayment.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/mytripuppayment/mytripuppayment.module.ts ***!
  \***********************************************************/
/*! exports provided: MytripuppaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripuppaymentPageModule", function() { return MytripuppaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytripuppayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripuppayment.page */ "./src/app/mytripuppayment/mytripuppayment.page.ts");







const routes = [
    {
        path: '',
        component: _mytripuppayment_page__WEBPACK_IMPORTED_MODULE_6__["MytripuppaymentPage"]
    }
];
let MytripuppaymentPageModule = class MytripuppaymentPageModule {
};
MytripuppaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytripuppayment_page__WEBPACK_IMPORTED_MODULE_6__["MytripuppaymentPage"]]
    })
], MytripuppaymentPageModule);



/***/ }),

/***/ "./src/app/mytripuppayment/mytripuppayment.page.html":
/*!***********************************************************!*\
  !*** ./src/app/mytripuppayment/mytripuppayment.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center;height: 48px;\">\n          <div style=\"align-self: center\" >\n            <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n                <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n            <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label >Thanh toán</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<div class=\"text-title\">\n  Xác thực thanh toán\n</div>\n<div class=\"text margin-top-8\">\n  Sau khi nhận được biên nhận chuyển khoản, iVIVU sẽ  xác thực thanh toán qua hình thức Chuyển khoản ngân hàng của Quý khách. Tiến trình này có thể mất từ 5-30 phút.\n</div>\n\n<div class=\"margin-top-8\" (click)=\"upimage()\">\n  <ion-card class=\"card-img\">\n          <img *ngIf=\"croppedImagepath\" class=\"img-empty\" [src]=\"croppedImagepath\">\n          <img *ngIf=\"!croppedImagepath\"  class=\"img-empty\" src=\"./assets/empty/empty.jpeg\">\n  </ion-card>\n</div>\n</ion-content>\n<ion-footer >\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Gửi biên lai & hoàn tất</button>\n  </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/mytripuppayment/mytripuppayment.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/mytripuppayment/mytripuppayment.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n}\n\n.text {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.margin-top-8 {\n  margin-top: 8px;\n}\n\nimg-payment {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n  object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  height: 100%;\n  width: 110px;\n  margin: 0 auto;\n  padding: 2px;\n  border: none;\n}\n\n.card-img {\n  box-shadow: none !important;\n  margin-left: 0px;\n  margin-top: 0px;\n  border-radius: 0px;\n}\n\n.img-empty {\n  width: 160px;\n  height: 146px;\n}\n\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL215dHJpcHVwcGF5bWVudC9teXRyaXB1cHBheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9teXRyaXB1cHBheW1lbnQvbXl0cmlwdXBwYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ01KOztBREpBO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvbXl0cmlwdXBwYXltZW50L215dHJpcHVwcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC10aXRsZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICBjb2xvcjogIzIyMjIyMjtcbn1cbi50ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cbi5tYXJnaW4tdG9wLTh7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuaW1nLXBheW1lbnR7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIG1heC13aWR0aDogaW5pdGlhbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5jYXJkLWltZ3tcbiAgICBib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uaW1nLWVtcHR5e1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICBoZWlnaHQ6IDE0NnB4O1xufVxuLmJ1dHRvbjJcbntcbiAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogNDhweDtcblxufVxuIiwiLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1hcmdpbi10b3AtOCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuaW1nLXBheW1lbnQge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIC1vLW9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmltZy1lbXB0eSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNDZweDtcbn1cblxuLmJ1dHRvbjIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/mytripuppayment/mytripuppayment.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/mytripuppayment/mytripuppayment.page.ts ***!
  \*********************************************************/
/*! exports provided: MytripuppaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripuppaymentPage", function() { return MytripuppaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");







let MytripuppaymentPage = class MytripuppaymentPage {
    constructor(navCtrl, camera, file, crop, zone, gf) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.file = file;
        this.crop = crop;
        this.zone = zone;
        this.gf = gf;
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    upimage() {
        this.captureImageGallery();
    }
    captureImageGallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const options = {
                quality: 76,
                sourceType: se.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: se.camera.DestinationType.FILE_URI,
                encodingType: se.camera.EncodingType.JPEG,
                mediaType: se.camera.MediaType.PICTURE,
                saveToPhotoAlbum: true,
                correctOrientation: true,
            };
            se.camera.getPicture(options).then((imageData) => {
                let filename, path;
                se.base64Image = imageData;
                path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                let index = filename.indexOf('?');
                if (index > -1) {
                    filename = filename.substring(0, index);
                }
                se.croppedImagefilename = filename;
                se.cropImage(imageData);
            });
        });
    }
    cropImage(imgPath) {
        this.crop.crop(imgPath, { quality: 100 })
            .then(newPath => {
            this.showCroppedImage(newPath.split('?')[0]);
        }, error => {
            throw error;
        });
    }
    showCroppedImage(ImagePath) {
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        var splitType = imageName.split('.');
        var imageType = splitType[splitType.length - 1];
        var se = this;
        se.fileType = imageType;
        se.file.readAsDataURL(filePath, imageName).then(base64 => {
            se.zone.run(() => {
                se.croppedImagepath = base64;
            });
            const contentType = 'image/' + imageType;
            let b64 = base64.split(',')[1];
        });
    }
    next() {
    }
};
MytripuppaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytripuppayment',
        template: __webpack_require__(/*! ./mytripuppayment.page.html */ "./src/app/mytripuppayment/mytripuppayment.page.html"),
        styles: [__webpack_require__(/*! ./mytripuppayment.page.scss */ "./src/app/mytripuppayment/mytripuppayment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__["File"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_4__["Crop"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"]])
], MytripuppaymentPage);



/***/ })

}]);
//# sourceMappingURL=mytripuppayment-mytripuppayment-module.js.map