import { error } from 'util';
import { Component, NgZone, OnInit } from '@angular/core';
import {  NavController, LoadingController,Platform } from '@ionic/angular';
import { Booking, RoomInfo } from '../providers/book-service';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { Bookcombo } from './../providers/book-service';
import { voucherService } from '../providers/voucherService';
@Component({
  selector: 'app-flightcombolive',
  templateUrl: './flightcombolive.page.html',
  styleUrls: ['./flightcombolive.page.scss'],
})
export class FlightcombolivePage implements OnInit {

  text;
  public loader:any;listcars;hoten;phone;totalAdult;email
  jti: any;
  constructor(public bookCombo: Bookcombo,public platform: Platform,public navCtrl: NavController, public Roomif: RoomInfo, public storage: Storage, public booking: Booking, public loadingCtrl: LoadingController,public gf: GlobalFunction, public zone: NgZone,
    public _voucherService: voucherService) {
    this.text = "<b>Văn phòng tại TP. Hồ Chí Minh:</b> Lầu 2, tòa nhà Saigon Prime, 107-109-111 Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh<br />Thời gian làm việc:<br /><ul><li>Thứ 2 - Thứ 7: từ 07h30 đến 21h00</li><li>Chủ Nhật: từ 07h30 đến 20h00</li></ul><br /><b>Văn phòng tại Hà Nội:</b> Lầu 9, 70-72 Bà Triệu, Quận Hoàn Kiếm<br />Thời gian làm việc:<br /><ul ><li>Thứ 2 - Thứ 6: từ 07h30 đến 17h30</li></ul>";
    this.listcars = this.gf.getParams('carscombo');
    this.hoten=this.Roomif.hoten;
      this.phone=this.Roomif.phone
      this.totalAdult = bookCombo.totalAdult;
    this.storage.get('email').then(e => {
      if (e !== null) {
        this.email = e;
      }
    })
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
      }
    })
    //google analytic
    gf.googleAnalytion('roompaymentlive','load','');
  }
  ngOnInit() {
  }
  next() {
    var se=this;
    this.presentLoading();
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode='+se.bookCombo.bookingcode+'&paymentMethod=51',
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      if(se.bookCombo.mealTypeRates.Supplier == 'SERI' && se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal){
        //Check allotment trước khi book
        se.gf.checkAllotmentSeri(
          se.booking.HotelId,
          se.bookCombo.mealTypeRates.RoomId,
          se.booking.CheckInDate,
          se.booking.CheckOutDate,
          se.bookCombo.mealTypeRates.TotalRoom,
          'SERI', se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal
          ).then((allow)=> {
            if(allow){
              se.gf.holdflight(se.bookCombo.FlightCode, se.bookCombo.iddepart, se.bookCombo.idreturn).then(datafly => {
                se.gf.createTransactionCombo(se.bookCombo.bookingcode, se.bookCombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                  if (data) {
                    if (se.loader) {
                      se.loader.dismiss();
                    }
                    if(se.jti){
                      var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + se.bookCombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode+ '&memberId=' + se.jti;
                      se.gf.CreatePayoo(url);
                    }
                    if(se._voucherService.selectVoucher){
                      se._voucherService.rollbackSelectedVoucher.emit(se._voucherService.selectVoucher);
                      se._voucherService.publicClearVoucherAfterPaymentDone(1);
                      setTimeout(()=> {
                      se._voucherService.selectVoucher = null;
                    },300)
                    }
                    se.gf.createFlightTransactionCombo(se.bookCombo.FlightCode);
                    if(se.Roomif.payment=='AL' && datafly.depcode && datafly.retcode){
                      se.navCtrl.navigateForward('/flightcombopaymentdone/AL');
                    }
                    else{
                      se.navCtrl.navigateForward('/flightcombopaymentdone/RQ');
                    }
                 
                  } else {
                    alert('Gặp sự cố, vui lòng thử lại')
                  }
                })
              })
            }else{
              if (se.loader) {
                se.loader.dismiss();
              }
              se.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
            }
          })
          }else{
            se.gf.holdflight(se.bookCombo.FlightCode, se.bookCombo.iddepart, se.bookCombo.idreturn).then(datafly => {
              se.gf.createTransactionCombo(se.bookCombo.bookingcode, se.bookCombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                if (data) {
                  if (se.loader) {
                    se.loader.dismiss();
                  }
                  if(se.jti){
                    var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + se.bookCombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode+ '&memberId=' + se.jti;
                    se.gf.CreatePayoo(url);
                  }
                  if(se._voucherService.selectVoucher){
                    se._voucherService.rollbackSelectedVoucher.emit(se._voucherService.selectVoucher);
                    se._voucherService.publicClearVoucherAfterPaymentDone(1);
                    setTimeout(()=> {
                      se._voucherService.selectVoucher = null;
                    },300)
                  }
                  se.gf.createFlightTransactionCombo(se.bookCombo.FlightCode);
                  if(se.Roomif.payment=='AL' && datafly.depcode && datafly.retcode){
                    se.navCtrl.navigateForward('/flightcombopaymentdone/AL');
                  }
                  else{
                    se.navCtrl.navigateForward('/flightcombopaymentdone/RQ');
                  }
               
                } else {
                  alert('Gặp sự cố, vui lòng thử lại')
                }
              })
            })
          }
        
    });
   

  }
  goback(){
    this.navCtrl.back();
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
}
