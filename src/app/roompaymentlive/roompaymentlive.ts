import { Component, NgZone, OnInit } from '@angular/core';
import {  NavController, LoadingController,Platform, ToastController, AlertController } from '@ionic/angular';
import { Booking, RoomInfo,Bookcombo, SearchHotel } from '../providers/book-service';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction,ActivityService } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';
import { voucherService } from '../providers/voucherService';
/**
 * Generated class for the RoompaymentlivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-roompaymentlive',
  templateUrl: 'roompaymentlive.html',
  styleUrls: ['roompaymentlive.scss'],
})
export class RoompaymentlivePage implements OnInit{
  text; isenabled = true; ischeck; timestamp; paymentMethod;auth_token: any;
  jti: any;
; room; jsonroom;loader:any;stt;booking_type
  constructor(public activityService: ActivityService,public platform: Platform,public bookcombo:Bookcombo,public navCtrl: NavController, public Roomif: RoomInfo, public storage: Storage, public booking: Booking, public loadingCtrl: LoadingController,public gf: GlobalFunction, public zone: NgZone,private toastCtrl: ToastController,private activatedRoute: ActivatedRoute,
    public alertCtrl: AlertController,
    public _voucherService: voucherService,
    public searchhotel: SearchHotel) {
   
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
      }
    })
    //google analytic
    //gf.googleAnalytion('roompaymentlive','load','');
    this.gf.logEventFirebase('office',this.searchhotel, 'roompaymentlive', 'add_payment_info', 'Hotels');
  }
  ngOnInit() {
    this.stt= this.activatedRoute.snapshot.paramMap.get('stt');
    if (this.stt==0) {
      this.text = "<b>Văn phòng tại TP. Hồ Chí Minh:</b> Lầu 2, tòa nhà Saigon Prime, 107-109-111 Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh<br />Thời gian làm việc:<br /><ul><li>Thứ 2 - Thứ 7: từ 07h30 đến 21h00</li><li>Chủ Nhật: từ 07h30 đến 20h00</li></ul><br /><b>Văn phòng tại Hà Nội:</b> P.308, Tầng 3, Tòa nhà The One, số 2 Chương Dương Độ, Q.Chương Dương, Q.Hoàn Kiếm, Hà Nội<br />Thời gian làm việc:<br /><ul ><li>Thứ 2 - Thứ 6: từ 07h30 đến 17h30</li></ul>";
      this.room =this.Roomif.arrroom;
      this.jsonroom = this.Roomif.jsonroom;
    }
  }
  ionViewWillEnter(){
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
      })
  }
  next() {
    var se =this;
    if(se.Roomif.roomtype.Supplier == 'SERI'){
      se.gf.checkAllotmentSeri(
        se.booking.HotelId,
        se.Roomif.RoomId,
        se.booking.CheckInDate,
        se.booking.CheckOutDate,
        se.Roomif.roomnumber,
        'SERI', se.Roomif.roomtype.HotelCheckDetailTokenInternal
        ).then((allow)=> {
          if(allow){
            se.createBooking()
          }
          else{
            if (se.loader) {
              se.loader.dismiss();
            }
            se.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
          }
        })
    
    }else{
      se.createBooking();
    }

  }

  createBooking(){
    this.presentLoading();
    var se = this;
    se.jsonroom.RoomClasses=se.room;
    se.timestamp = Date.now();
      if (se.booking.CEmail) {
        var Invoice=0;
        if (se.Roomif.order) {
          Invoice=1;
        }
        let voucherSelectedMap = [],promoSelectedMap =[];
        if(this._voucherService.hotelPromoCode){
          voucherSelectedMap = this._voucherService.voucherSelected.map(v => {
            let newitem = {};
            newitem["voucherCode"] = v.code;
            newitem["voucherName"] = v.rewardsItem.title;
            newitem["voucherType"] = v.applyFor || v.rewardsItem.rewardsType;
            newitem["voucherDiscount"] = v.rewardsItem.price;
            newitem["keepCurrentVoucher"] = false;
            return newitem;
          });
          promoSelectedMap = this._voucherService.listObjectPromoCode.map(v => {
            let newitem = {};
            newitem["voucherCode"] = v.code;
            newitem["voucherName"] = v.name;
            newitem["voucherType"] = 2;
            newitem["voucherDiscount"] = v.price;
            newitem["keepCurrentVoucher"] = false;
            return newitem;
          });
        }
        let checkpromocode = this._voucherService.voucherSelected && this._voucherService.voucherSelected.length ==0 && this._voucherService.listObjectPromoCode && this._voucherService.listObjectPromoCode.length ==0;
        let arrpromocode = this.Roomif.promocode ?[{"voucherCode": this.Roomif.promocode, "voucherName": this.Roomif.promocode,"voucherType": 1,"voucherDiscount": this.Roomif.discountpromo ,"keepCurrentVoucher": false  }] : [];

        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlPost + '/mInsertBooking',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'content-type': 'application/json'
          },
          body:
          {
            RoomClassObj : se.jsonroom.RoomClasses[0].ListObjRoomClass,
            CName: se.Roomif.hoten,
            CEmail: se.booking.CEmail,
            CPhone: se.Roomif.phone,
            timestamp: se.timestamp,
            HotelID: se.booking.HotelId,
            paymentMethod: "51",
            note: se.Roomif.notetotal,
            source: '6',
            MemberToken: se.auth_token,
            CustomersStr: JSON.stringify(se.Roomif.arrcustomer),
            UsePointPrice:se.Roomif.pricepoint,
            NoteCorp:se.Roomif.order,
            Invoice:Invoice,
            UserPoints:se.Roomif.point,
            CheckInDate: se.jsonroom.CheckInDate,
            CheckOutDate: se.jsonroom.CheckOutDate,
            TotalNight: se.jsonroom.TotalNight,
            MealTypeIndex : se.booking.indexmealtype,
            CompanyName:se.Roomif.companyname,
            CompanyAddress:se.Roomif.address,
            CompanyTaxCode:se.Roomif.tax,
            BillingAddress :se.Roomif.addressorder,
            //promotionCode:se.Roomif.promocode,
            comboid:se.bookcombo.ComboId,
            PenaltyDescription:se.Roomif.textcancel,
            companycontactname: this.Roomif.nameOrder,
            vouchers : !checkpromocode ? [...voucherSelectedMap,...promoSelectedMap] : arrpromocode ,
          },
          json: true
        };
        request(options, function (error, response, body) {
          if(response.statusCode != 200){
            var objError ={
                page: "roompaymentlive",
                func: "next",
                message : response.statusMessage,
                content : response.body,
                type: "warning",
                param:  JSON.stringify(options)
              };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roompaymentlive";
            error.func = "next";
            error.param =  JSON.stringify(options);
            C.writeErrorLog(error,response);
          };
          if (body) {
            if (body.error == 0) {
              var code=body.code;
              var stt=body.bookingStatus;
              se.clearClonePage('page-roompaymentdone');
              se.loader.dismiss();
              //PDANH 22/03/2021 - Case trả sau của VIN gọi thêm hàn build link để đẩy xuống backend luồng VIN
              let mealtype = se.jsonroom.RoomClasses[0].MealTypeRates[se.booking.indexmealtype];
                  let totalprice = '';
                  if (se.Roomif.priceshow) {
                    totalprice= se.Roomif.priceshow;
                  }
                  else
                  {
                    totalprice=(se.Roomif.roomtype as any).PriceAvgPlusTAStr;
                  }
                  let url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + body.code + '&memberId=' + se.jti + '&buyerPhone=' + se.Roomif.phone;
                  se.gf.CreateUrl(url);
                  if(se._voucherService.selectVoucher){
                    se._voucherService.rollbackSelectedVoucher.emit(se._voucherService.selectVoucher);
                    se._voucherService.publicClearVoucherAfterPaymentDone(1);
                    setTimeout(()=> {
                      se._voucherService.selectVoucher = null;
                    },300)
                  }
                  if (se.Roomif.notetotal) {
                    se.gf.CreateSupportRequest(body.code,se.booking.CEmail,se.Roomif.hoten,se.Roomif.phone,se.Roomif.notetotal);
                  }
              se.navCtrl.navigateForward('/roompaymentdone/'+code+'/'+stt);
            }
            else{
              se.loader.dismiss();
              se.storage.get('jti').then((memberid) => {
                if(memberid){
                  se.storage.get('deviceToken').then((devicetoken) => {
                    if(devicetoken){
                      se.gf.refreshToken(memberid, devicetoken).then((token) =>{
                        setTimeout(()=>{
                          se.auth_token = token;
                        },100)
                      });
                    }else{
                      se.showAlertMessageOnly(body.Msg);
                    }
                  })
                }else{
                  se.gf.showAlertMessageOnly(body.Msg);
                }
                
              })
            }
          }
          else{
            error.page = "roompaymentlive";
            error.func = "next";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            se.loader.dismiss();
            alert("Đã có sự cố xảy ra, vui lòng thử lại!");
          }
          
        });

      }
      else{
        se.loader.dismiss();
        se.presentToastr('Email không hợp lệ. Vui lòng kiểm tra lại.');
      }
  }


  async showAlertMessageOnly(msg){
    let alert = await this.alertCtrl.create({
      header: '',
      message: 'Mã đăng nhập đã hết hạn, vui lòng đăng nhập lại!',
      cssClass: "cls-alert-message",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          this.navCtrl.navigateForward('/login');
          alert.dismiss();
        }
      }
      ]
    });
    alert.present();
  }
  
  refreshToken() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
        }
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "roompaymentdoneean",
              func: "refreshToken",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param:  JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roompaymentdoneean";
            error.func = "refreshToken";
            error.param =  JSON.stringify(options);
            C.writeErrorLog(error,response);
          } else {
            var au = JSON.parse(body);
            se.zone.run(() => {
              se.storage.remove('auth_token');
              se.storage.set('auth_token', au.auth_token);
              var decoded = jwt_decode(au.auth_token);
              se.storage.remove('point');
              se.storage.set('point', decoded.point);
            })
          }
        })
      }
    })
  }
  clearClonePage(pagename) {
    //Xóa clone do push page
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
  check() {
    if (this.ischeck) {
      this.isenabled = false;
    } else {
      this.isenabled = true;
    }
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  goback(){
    this.navCtrl.back();
  }

  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
}
