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

module.exports = "page-userreviews .header-title {\n  padding-top: 12px;\n  text-align: center;\n  font-size: 20px;\n  right: 6%;\n  font-weight: 500;\n  font-weight: bold;\n}\npage-userreviews .title-header {\n  text-align: center;\n}\npage-userreviews .header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n  text-align: center;\n}\npage-userreviews .header-arrow {\n  margin: 3px 11px;\n}\npage-userreviews .userreviews-content {\n  padding: 16px 16px 16px 16px;\n}\npage-userreviews .label-hotel-name {\n  font-size: 14px;\n  font-weight: bold;\n}\npage-userreviews .div-img-empty {\n  text-align: center;\n}\npage-userreviews .text-reviews-empty {\n  text-align: center;\n  color: #bdbdbd;\n}\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3VzZXJyZXZpZXdzL3VzZXJyZXZpZXdzLnNjc3MiLCJzcmMvYXBwL3VzZXJyZXZpZXdzL3VzZXJyZXZpZXdzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHSTtFQUNNLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RWO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FER0k7RUFDSSw0QkFBQTtBQ0RSO0FER0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDRFI7QURNSTtFQUNFLDhCQUFBO0FDSE47QURLSTtFQUNJLDhGQUFBO0VBQ0EsNkJBQUE7RUFFQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7R0FBQSxnQ0FBQTtPQUFBLDRCQUFBO0FDSlI7QURPSTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDTE47QURPSTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtBQ0xOO0FET0k7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDTE47QURPSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0xOO0FET0k7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUNMTjtBRE9JO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvdXNlcnJldmlld3MvdXNlcnJldmlld3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtdXNlcnJldmlld3N7XHJcbiAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAuaGVhZGVyLWljb257XHJcbiAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWFycm93e1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDExcHg7XHJcbiAgICB9XHJcbiAgICAudXNlcnJldmlld3MtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLWhvdGVsLW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmRpdi1pbWctZW1wdHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcmV2aWV3cy1lbXB0eXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgIC5zYy1pb24tYWxlcnQtaW9zLWgge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICBcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcclxuICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIH0iLCJwYWdlLXVzZXJyZXZpZXdzIC5oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHJpZ2h0OiA2JTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5wYWdlLXVzZXJyZXZpZXdzIC50aXRsZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5wYWdlLXVzZXJyZXZpZXdzIC5oZWFkZXItaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnBhZ2UtdXNlcnJldmlld3MgLmhlYWRlci1hcnJvdyB7XG4gIG1hcmdpbjogM3B4IDExcHg7XG59XG5wYWdlLXVzZXJyZXZpZXdzIC51c2VycmV2aWV3cy1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcbn1cbnBhZ2UtdXNlcnJldmlld3MgLmxhYmVsLWhvdGVsLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxucGFnZS11c2VycmV2aWV3cyAuZGl2LWltZy1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbnBhZ2UtdXNlcnJldmlld3MgLnRleHQtcmV2aWV3cy1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufSJdfQ== */"

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