import { ModalController } from '@ionic/angular';
import { ValueGlobal, Bookcombo, Booking, RoomInfo, SearchHotel } from './../providers/book-service';
import { Component, OnInit, NgZone } from '@angular/core';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import * as request from 'requestretry';
import { flightService } from './../providers/flightService';
import { voucherService } from '../providers/voucherService';
import { tourService } from '../providers/tourService';
import { Storage } from '@ionic/storage';
import { ticketService } from '../providers/ticketService';
@Component({
  selector: 'app-adddiscount',
  templateUrl: './adddiscount.page.html',
  styleUrls: ['./adddiscount.page.scss'],
})
export class AdddiscountPage implements OnInit {
  loginuser: any;
  listPromoCode: any = [];
  error:any;
  kmcode: any='';
  ;discountpromo;msg;ischecktext=3;ischeckerror=0;ischeckbtnpromo = false;promocode;
  constructor(public _flightService: flightService,public zone: NgZone,public valueGlobal:ValueGlobal, public modalCtrl: ModalController,private bookCombo:Bookcombo,
    public _voucherService: voucherService,
    public _tourService: tourService,
    public booking: Booking,
    public Roomif: RoomInfo,
    public searchHotel: SearchHotel,
    public tourService: tourService,
    public gf: GlobalFunction,
    private storage: Storage,public ticketService: ticketService) { 
      this._voucherService.listPromoCode = [];
      this._voucherService.listObjectPromoCode = [];
      this._voucherService.totalDiscountPromoCode = 0;
      this.kmcode = '';
      
      this.storage.get('auth_token').then(auth_token => {
        this.loginuser = auth_token;
       });
  }

  ngOnInit() {
  }
  closeModal()
  {
    this.modalCtrl.dismiss();
  }
  click()
  {
    this.ischecktext=3
  }

  applyVoucher(){
    if(this.promocode){
      this._voucherService.listPromoCode = [];
      this._voucherService.totalDiscountPromoCode = 0;
      this.kmcode = '';

      let arrcode = this.promocode.split(',');
      for (let index = 0; index < arrcode.length; index++) {
        let code = arrcode[index];
        this.promofunc(code).then((error)=>{
          if(index == arrcode.length -1 && !this.error){
            this.modalCtrl.dismiss({promocode: this.kmcode ||''});
          }
        })
        
      }
      
      
    }else{
      this.modalCtrl.dismiss();
    }
  }
  promofunc(code):Promise<any> {
    var se = this;
    return new Promise((resolve, reject) => {
      if (code) {
        let coupondata:any;
        let _bookingCode = '';
        if(se._voucherService.openFrom == 'flightaddservice' ){
          coupondata = { flight: {
            "tickets": this._flightService.itemFlightCache.roundTrip ? [
              {
                "flightNumber": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.flightNumber : se._flightService.itemFlightCache.itemFlightInternationalDepart.flightNumber ,
                        "airLineCode": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.airlineCode : se._flightService.itemFlightCache.itemFlightInternationalDepart.airline.replace(' ',''),
                        "departTime": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.departTime : se._flightService.itemFlightCache.itemFlightInternationalDepart.departTime,
                        "landingTime": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.landingTime : se._flightService.itemFlightCache.itemFlightInternationalDepart.landingTime,
                        "flightDuration": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.flightDuration : se._flightService.itemFlightCache.itemFlightInternationalDepart.flightDuration,
                        "fromPlaceCode": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.fromPlaceCode : se._flightService.itemFlightCache.itemFlightInternationalDepart.fromPlaceCode,
                        "toPlaceCode": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.toPlaceCode : se._flightService.itemFlightCache.itemFlightInternationalDepart.toPlaceCode,
                        "stops": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.stops : se._flightService.itemFlightCache.itemFlightInternationalDepart.stops,
                        "ticketClass": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.ticketClass : se._flightService.itemFlightCache.itemFlightInternationalDepart.ticketClass,
                        "fareBasis": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.fareBasis : se._flightService.itemFlightCache.itemFlightInternationalDepart.ticketClass,
                        "jsonObject": ""
              },
              {
                "flightNumber": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.flightNumber : se._flightService.itemFlightCache.itemFlightInternationalReturn.flightNumber,
                        "airLineCode": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.airlineCode : se._flightService.itemFlightCache.itemFlightInternationalReturn.airline.replace(' ',''),
                        "departTime": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.departTime : se._flightService.itemFlightCache.itemFlightInternationalReturn.departTime,
                        "landingTime": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.landingTime : se._flightService.itemFlightCache.itemFlightInternationalReturn.landingTime,
                        "flightDuration": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.flightDuration : se._flightService.itemFlightCache.itemFlightInternationalReturn.flightDuration,
                        "fromPlaceCode": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.fromPlaceCode : se._flightService.itemFlightCache.itemFlightInternationalReturn.fromPlaceCode,
                        "toPlaceCode": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.toPlaceCode : se._flightService.itemFlightCache.itemFlightInternationalReturn.toPlaceCode,
                        "stops": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.stops : se._flightService.itemFlightCache.itemFlightInternationalReturn.stops,
                        "ticketClass": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.ticketClass : se._flightService.itemFlightCache.itemFlightInternationalReturn.ticketClass,
                        "fareBasis": !se._flightService.itemFlightCache.isInternationalFlight ?se._flightService.itemFlightCache.returnFlight.fareBasis : se._flightService.itemFlightCache.itemFlightInternationalReturn.ticketClass,
                        "jsonObject": ""
              }
            ] : 
            [
              {
                "flightNumber": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.flightNumber : se._flightService.itemFlightCache.itemFlightInternationalDepart.flightNumber ,
                        "airLineCode": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.airlineCode : se._flightService.itemFlightCache.itemFlightInternationalDepart.airline.replace(' ',''),
                        "departTime": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.departTime : se._flightService.itemFlightCache.itemFlightInternationalDepart.departTime,
                        "landingTime": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.landingTime : se._flightService.itemFlightCache.itemFlightInternationalDepart.landingTime,
                        "flightDuration": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.flightDuration : se._flightService.itemFlightCache.itemFlightInternationalDepart.flightDuration,
                        "fromPlaceCode": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.fromPlaceCode : se._flightService.itemFlightCache.itemFlightInternationalDepart.fromPlaceCode,
                        "toPlaceCode": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.toPlaceCode : se._flightService.itemFlightCache.itemFlightInternationalDepart.toPlaceCode,
                        "stops": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.stops : se._flightService.itemFlightCache.itemFlightInternationalDepart.stops,
                        "ticketClass": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.ticketClass : se._flightService.itemFlightCache.itemFlightInternationalDepart.ticketClass,
                        "fareBasis": !se._flightService.itemFlightCache.isInternationalFlight ? se._flightService.itemFlightCache.departFlight.fareBasis : se._flightService.itemFlightCache.itemFlightInternationalDepart.ticketClass,
                        "jsonObject": ""
              }
            ],
            "totalAdult": se._flightService.itemFlightCache.adult,
            "totalChild": se._flightService.itemFlightCache.child,
            "totalInfant": se._flightService.itemFlightCache.infant
          ,
        } };
        _bookingCode = 'VMB';
        }  else if(se._voucherService.openFrom == 'touradddetails'){
          coupondata = {
            "tour": {
              "tourId": se.tourService.itemDetail.tourDetailId,
              "totalAdult": se.searchHotel.adult,
              "totalChild": se.searchHotel.child,
              "jsonObject": "",
              "checkIn": se.searchHotel.CheckInDate,
              "checkOut": se.searchHotel.CheckOutDate
            }
          };
          _bookingCode = 'TOUR';
        }
        else if(se._voucherService.openFrom == 'ticketadddetails'){
          coupondata = {
            "vvc": {
              "experienceId": se.ticketService.itemTicketDetail.experienceId,
              "supplier": se.ticketService.bookingInfo.booking.supplierCode
            }
          };
          _bookingCode = this.ticketService.itemTicketService.objbooking.bookingCode;
        }
         else{
          coupondata = {
            "hotel": {
              "hotelId": this.booking.HotelId,
              "roomName": this.booking.RoomName,
              "totalRoom": this.Roomif.roomnumber,
              "totalAdult": this.booking.Adults,
              "totalChild": this.booking.Child,
              "jsonObject": "",
              "checkIn": this.searchHotel.CheckInDate,
              "checkOut": this.searchHotel.CheckOutDate
            }
          };
          _bookingCode = 'HOTEL';
        }
        var options;
        if(se._voucherService.openFrom == 'ticketadddetails')
        {
          options = {
            method: 'POST',
            url: C.urls.baseUrl.urlMobile + '/api/data/validpromocode',
            headers:
            {
              'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
              'cache-control': 'no-cache',
              'content-type': 'application/json'
            },
            body: { bookingCode: _bookingCode ,code: code, totalAmount: this.ticketService.totalPriceNum,
            couponData: coupondata},
            json: true
          };
        }else{
          options = {
            method: 'POST',
            url: C.urls.baseUrl.urlMobile + '/api/data/validpromocode',
            headers:
            {
              'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
              'cache-control': 'no-cache',
              'content-type': 'application/json'
            },
            body: { bookingCode: _bookingCode ,code: code, totalAmount: se._voucherService.openFrom == 'touradddetails' ? se._tourService.totalPrice :( !se._voucherService.isFlightPage? se.valueGlobal.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') : (se._flightService.itemFlightCache.totalPrice || (se._flightService.itemFlightInternational ?se._flightService.itemFlightInternational.totalPrice :0))), comboDetailId: se.bookCombo.ComboId,
            couponData: coupondata},
            json: true
          };
        }
     
    
        request(options, function (error, response, body) {
          if (error) throw new Error(error);
          se.zone.run(() => {
            var json = body;
            if (json.error==0) {
              se.discountpromo=json.data.orginDiscount ? json.data.orginDiscount : json.data.discount;
              se.msg=json.msg;
              se.ischecktext=0;
              se.ischeckerror=0;
              if(json.data.type == 2 && !se.gf.checkExistsItemInArray(se._voucherService.listPromoCode, code, 'code') && !se._voucherService.voucherSelected.some(v => v.type != 2)){
                se._voucherService.listPromoCode.push(code);
                se._voucherService.totalDiscountPromoCode += json.data.orginDiscount ? json.data.orginDiscount : json.data.discount;
                se._voucherService.listObjectPromoCode.push({code: code, name: json.data.program || '', title: json.msg, price: json.data.orginDiscount ? json.data.orginDiscount : json.data.discount});
                se.error = 0;
              }
              else if(se._voucherService.voucherSelected && se._voucherService.voucherSelected.length >0 && se._voucherService.voucherSelected.some(v => v.type != json.data.type)){
                se.error = 1;
                se.ischeckerror=1;
                se.msg = "Chỉ hỗ trợ áp dụng nhiều voucher tiền mặt trên một đơn hàng, Coupon và Voucher khuyến mãi chỉ áp dụng một";
              }
              else if(json.data.type != 2 && (se._voucherService.voucherSelected && se._voucherService.voucherSelected.length ==0)){
                se.kmcode = code;
                se.error = 0;
              }else {
                se.error = 0;
              }
              //
              console.log(se._voucherService.listPromoCode);
              console.log(se._voucherService.totalDiscountPromoCode);
              //se.modalCtrl.dismiss({promocode:se.promocode});
            }
            else if(json.error==1)
            {
              se.ischeckbtnpromo = false;
              se.msg=json.msg;
              se.discountpromo=0;
              se.ischecktext=1;
              se.ischeckerror=1;
              if(se.gf.checkExistsItemInArray(se._voucherService.listPromoCode, code, 'code')){
                se.gf.removeItemInArray(se._voucherService.listPromoCode, code);
              }
              se.error = json.error;
            }
            else if(json.error==2)
            {
              se.ischeckbtnpromo = false;
              se.msg=json.msg;
              se.discountpromo=0;
              se.ischecktext=2;
              se.ischeckerror=1;
              if(se.gf.checkExistsItemInArray(se._voucherService.listPromoCode, code, 'code')){
                se.gf.removeItemInArray(se._voucherService.listPromoCode, code);
              }
              se.error = json.error;
            }
            else if(json.error==3)
            {
              se.ischeckbtnpromo = false;
              se.msg=json.msg;
              se.discountpromo=0;
              se.ischecktext=2;
              se.ischeckerror=1;
              if(se.gf.checkExistsItemInArray(se._voucherService.listPromoCode, code, 'code')){
                se.gf.removeItemInArray(se._voucherService.listPromoCode, code);
              }
              se.error = json.error;
            }
            else
            {
              se.ischeckbtnpromo = false;
              se.msg=json.msg;
              se.discountpromo=0;
              se.ischecktext=2;
              se.ischeckerror=1;
              if(se.gf.checkExistsItemInArray(se._voucherService.listPromoCode, code, 'code')){
                se.gf.removeItemInArray(se._voucherService.listPromoCode, code);
              }
              se.error = json.error;
            }

            resolve(this.error);
          })
        });
      }else{
        se.modalCtrl.dismiss();
      }
    })
    
  }
  textchange() {
    this.ischeckbtnpromo = false;
    this.discountpromo=0;
    this.ischeckerror=0;
    this.msg="";
    this.ischecktext=3
  }
  confirm(){
    this.modalCtrl.dismiss();
  }
}
