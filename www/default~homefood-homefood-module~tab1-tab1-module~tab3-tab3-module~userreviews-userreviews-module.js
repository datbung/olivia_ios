(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~homefood-homefood-module~tab1-tab1-module~tab3-tab3-module~userreviews-userreviews-module"],{

/***/ "./src/app/userreviews/userreviews.html":
/*!**********************************************!*\
  !*** ./src/app/userreviews/userreviews.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-row>\r\n    <ion-col style=\"text-align: center;height: 56px;\">\r\n        <div style=\"align-self: center\" >\r\n        <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\r\n            <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n          </div>\r\n        <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Nhận xét của tôi</label></div>\r\n        </div>\r\n    </ion-col>\r\n    </ion-row>\r\n</ion-header>\r\n<ion-content >\r\n    <div class=\"userreward-content\">\r\n        <div *ngIf=\"arrHotelReviews.length >0\" style=\"margin-top: 16px\">\r\n            <ion-list style=\"margin-left: 10px\" *ngFor=\"let  msg of arrHotelReviews\">\r\n              <ion-row>\r\n                <ion-col><label style=\"font-size: 14px;font-weight: bold;\">{{msg.hotelName}}</label></ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col text-left>\r\n                  <label style=\"color: #000;font-size:14px\" *ngIf=\"msg.reviewPoint>=9 && msg.reviewPoint<=10\">\r\n                    Tuyệt vời\r\n                  </label>\r\n                  <label style=\"color: #000;font-size:14px\" *ngIf=\"msg.reviewPoint>=7 && msg.reviewPoint<9\">\r\n                    Rất tốt\r\n                  </label>\r\n                  <label style=\"color: #000;font-size:14px\" *ngIf=\"msg.reviewPoint>=6 && msg.reviewPoint<7\">\r\n                    Tốt\r\n                  </label>\r\n                  <label style=\"color: #000;font-size:14px\" *ngIf=\"msg.reviewPoint<6\">\r\n                    Bình thường\r\n                  </label>\r\n                </ion-col>\r\n                <ion-col text-right>\r\n                  <label style=\"color:#26bed6;font-size: 18px;padding-right: 11px;\">\r\n                    {{msg.reviewPoint}}\r\n                  </label>\r\n                </ion-col>\r\n      \r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col text-left>\r\n                  <label style=\"margin:0;font-weight: 300;font-size: 14px;\" text-wrap>\r\n                    {{msg.bestFeature}}\r\n                  </label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"msg.images.length >0\">\r\n                <ion-col >\r\n                  <ion-slides (ionSlideDidChange)=\"slideChange()\" #mySlider>\r\n                    <!-- <div id=\"grad1\" class=\"grad1\">\r\n                      </div> -->\r\n                  <ion-slide *ngFor=\"let slide of msg.images\" style=\"width: 150px;\">\r\n                    <img style=\"height: auto;width: 100%;border-radius: 5px;width: 150px;\" [src]=\"slide.thumpUrl\" />\r\n                  </ion-slide>\r\n                  \r\n                </ion-slides>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col text-left>\r\n                  <label style=\"margin:0\" style=\"color: #828282;font-size: 12px;padding-right: 16px\" text-wrap>\r\n                  {{msg.dateStayed}}\r\n                  </label>\r\n                </ion-col>\r\n              </ion-row>\r\n              <hr style=\"margin: 8px 16px 0px 5px;\">\r\n            </ion-list>\r\n          </div>\r\n          <div *ngIf=\"loaddatadone && arrHotelReviews.length ==0\" style=\"margin-top: 16px;text-align: center\">\r\n              <div class=\"div-img-empty\">\r\n                <img class=\"img-empty\" src=\"./assets/empty/empty_reviews.svg\">\r\n              </div>\r\n              <div class=\"text-reviews-empty\">\r\n                <label style=\"color: #bdbdbd;\">Bạn chưa viết nhận xét trên iVIVU.</label>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</ion-content>  "

/***/ }),

/***/ "./src/app/userreviews/userreviews.scss":
/*!**********************************************!*\
  !*** ./src/app/userreviews/userreviews.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-userreviews .header-title {\n  padding-top: 12px;\n  text-align: center;\n  font-size: 20px;\n  right: 6%;\n  font-weight: 500;\n  font-weight: bold;\n}\npage-userreviews .title-header {\n  text-align: center;\n}\npage-userreviews .header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n  text-align: center;\n}\npage-userreviews .header-arrow {\n  margin: 3px 11px;\n}\npage-userreviews .userreviews-content {\n  padding: 16px 16px 16px 16px;\n}\npage-userreviews .label-hotel-name {\n  font-size: 14px;\n  font-weight: bold;\n}\npage-userreviews .div-img-empty {\n  text-align: center;\n}\npage-userreviews .text-reviews-empty {\n  text-align: center;\n  color: #bdbdbd;\n}\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC91c2VycmV2aWV3cy91c2VycmV2aWV3cy5zY3NzIiwic3JjL2FwcC91c2VycmV2aWV3cy91c2VycmV2aWV3cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FSO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FER0k7RUFDTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNEVjtBREdJO0VBQ0ksZ0JBQUE7QUNEUjtBREdJO0VBQ0ksNEJBQUE7QUNEUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0RSO0FETUk7RUFDRSw4QkFBQTtBQ0hOO0FES0k7RUFDSSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0dBQUEsZ0NBQUE7T0FBQSw0QkFBQTtBQ0pSO0FET0k7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0xOO0FET0k7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUNMTjtBRE9JO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ0xOO0FET0k7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNMTjtBRE9JO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FDTE47QURPSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3VzZXJyZXZpZXdzL3VzZXJyZXZpZXdzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXVzZXJyZXZpZXdze1xyXG4gICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHJpZ2h0OiA2JTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgLmhlYWRlci1pY29ue1xyXG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1hcnJvd3tcclxuICAgICAgICBtYXJnaW46IDNweCAxMXB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJyZXZpZXdzLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1ob3RlbC1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5kaXYtaW1nLWVtcHR5e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LXJldmlld3MtZW1wdHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAge1xyXG4gICAgLmNscy1hbGVydC1zaG93bW9yZSB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICB9IiwicGFnZS11c2VycmV2aWV3cyAuaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICByaWdodDogNiU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxucGFnZS11c2VycmV2aWV3cyAudGl0bGUtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxucGFnZS11c2VycmV2aWV3cyAuaGVhZGVyLWljb24ge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5wYWdlLXVzZXJyZXZpZXdzIC5oZWFkZXItYXJyb3cge1xuICBtYXJnaW46IDNweCAxMXB4O1xufVxucGFnZS11c2VycmV2aWV3cyAudXNlcnJldmlld3MtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7XG59XG5wYWdlLXVzZXJyZXZpZXdzIC5sYWJlbC1ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbnBhZ2UtdXNlcnJldmlld3MgLmRpdi1pbWctZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5wYWdlLXVzZXJyZXZpZXdzIC50ZXh0LXJldmlld3MtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuXG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/userreviews/userreviews.ts":
/*!********************************************!*\
  !*** ./src/app/userreviews/userreviews.ts ***!
  \********************************************/
/*! exports provided: UserReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReviewsPage", function() { return UserReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");








let UserReviewsPage = class UserReviewsPage {
    constructor(platform, navCtrl, toastCtrl, zone, storage, alertCtrl, modalCtrl, valueGlobal, gf) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.valueGlobal = valueGlobal;
        this.gf = gf;
        this.isShowConfirm = false;
        this.arrHotelReviews = [];
        this.numHotelReviews = 3;
        this.coutslide = 0;
        this.loaddatadone = false;
        this.loadUserReviews();
        gf.googleAnalytion('userreviews', 'load', '');
    }
    ngOnInit() {
    }
    loadUserReviews() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserReviews',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    se.loaddatadone = true;
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userreviews",
                            func: "loadUserReviews",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userreviews";
                        error.func = "loadUserReviews";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var result = JSON.parse(body);
                            se.arrHotelReviews = [];
                            if (result.data && result.data.length > 0) {
                                se.zone.run(() => {
                                    result.data.forEach(element => {
                                        if (element.images && element.images.length > 0) {
                                            element.images.forEach(img => {
                                                img.thumpUrl = img.thumpUrl.replace("84x84", "150x150");
                                            });
                                        }
                                        se.arrHotelReviews.push(element);
                                    });
                                });
                            }
                        }
                        else if (response.statusCode == 401) {
                        }
                    }
                });
            }
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
                            this.navCtrl.back();
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
                    }
                ]
            });
            alert.present();
            alert.onDidDismiss().then((data) => {
                this.storage.remove('auth_token');
                this.storage.remove('email');
                this.storage.remove('username');
                this.storage.remove('jti');
                this.storage.remove('userInfoData');
                this.storage.remove('userRewardData');
                this.storage.remove('point');
                this.navCtrl.navigateBack('/');
            });
        });
    }
    goback() {
        var self = this;
        this.navCtrl.back();
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
    slideChange() {
        this.slider.getActiveIndex().then((currentIndex) => {
            this.coutslide = currentIndex + 1;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], UserReviewsPage.prototype, "slider", void 0);
UserReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userreviews',
        template: __webpack_require__(/*! ./userreviews.html */ "./src/app/userreviews/userreviews.html"),
        styles: [__webpack_require__(/*! ./userreviews.scss */ "./src/app/userreviews/userreviews.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["ValueGlobal"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"]])
], UserReviewsPage);



/***/ })

}]);
//# sourceMappingURL=default~homefood-homefood-module~tab1-tab1-module~tab3-tab3-module~userreviews-userreviews-module.js.map