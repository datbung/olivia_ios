import { ModalController } from '@ionic/angular';
import { ValueGlobal, Bookcombo, Booking, RoomInfo, SearchHotel } from './../providers/book-service';
import { Component, OnInit, NgZone } from '@angular/core';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import * as request from 'requestretry';
import { flightService } from './../providers/flightService';
import { voucherService } from '../providers/voucherService';
import { tourService } from '../providers/tourService';

@Component({
  selector: 'app-adddiscount',
  templateUrl: './adddiscount.page.html',
  styleUrls: ['./adddiscount.page.scss'],
})
export class AdddiscountPage implements OnInit {
  loginuser: any;
  ;discountpromo;msg;ischecktext=3;ischeckerror=0;ischeckbtnpromo = false;promocode;
  constructor(public _flightService: flightService,public zone: NgZone,public valueGlobal:ValueGlobal, public modalCtrl: ModalController,private bookCombo:Bookcombo,
    public _voucherService: voucherService,
    public _tourService: tourService,
    public booking: Booking,
    public Roomif: RoomInfo,
    public searchHotel: SearchHotel,
    public tourService: tourService) { 
  
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
  promofunc() {
    var se = this;
    if (se.promocode) {
      let coupondata:any;
      let _bookingCode = '';
      if(se._voucherService.openFrom == 'flightaddservice' ){
        coupondata = { flight: {
          "tickets": this._flightService.itemFlightCache.roundTrip ? [
            {
              "flightNumber": se._flightService.itemFlightCache.departFlight.flightNumber ,
              "airLineCode": se._flightService.itemFlightCache.departFlight.airlineCode,
              "departTime": se._flightService.itemFlightCache.departFlight.departTime,
              "landingTime": se._flightService.itemFlightCache.departFlight.landingTime,
              "flightDuration": se._flightService.itemFlightCache.departFlight.flightDuration,
              "fromPlaceCode": se._flightService.itemFlightCache.departFlight.fromPlaceCode,
              "toPlaceCode": se._flightService.itemFlightCache.departFlight.toPlaceCode,
              "stops": se._flightService.itemFlightCache.departFlight.stops,
              "ticketClass": se._flightService.itemFlightCache.departFlight.ticketClass,
              "fareBasis": se._flightService.itemFlightCache.departFlight.fareBasis,
              "jsonObject": ""
            },
            {
              "flightNumber": se._flightService.itemFlightCache.returnFlight.flightNumber ,
              "airLineCode": se._flightService.itemFlightCache.returnFlight.airlineCode,
              "departTime": se._flightService.itemFlightCache.returnFlight.departTime,
              "landingTime": se._flightService.itemFlightCache.returnFlight.landingTime,
              "flightDuration": se._flightService.itemFlightCache.returnFlight.flightDuration,
              "fromPlaceCode": se._flightService.itemFlightCache.returnFlight.fromPlaceCode,
              "toPlaceCode": se._flightService.itemFlightCache.returnFlight.toPlaceCode,
              "stops": se._flightService.itemFlightCache.returnFlight.stops,
              "ticketClass": se._flightService.itemFlightCache.returnFlight.ticketClass,
              "fareBasis": se._flightService.itemFlightCache.returnFlight.fareBasis,
              "jsonObject": ""
            }
          ] : 
          [
            {
              "flightNumber": se._flightService.itemFlightCache.departFlight.flightNumber ,
              "airLineCode": se._flightService.itemFlightCache.departFlight.airlineCode,
              "departTime": se._flightService.itemFlightCache.departFlight.departTime,
              "landingTime": se._flightService.itemFlightCache.departFlight.landingTime,
              "flightDuration": se._flightService.itemFlightCache.departFlight.flightDuration,
              "fromPlaceCode": se._flightService.itemFlightCache.departFlight.fromPlaceCode,
              "toPlaceCode": se._flightService.itemFlightCache.departFlight.toPlaceCode,
              "stops": se._flightService.itemFlightCache.departFlight.stops,
              "ticketClass": se._flightService.itemFlightCache.departFlight.ticketClass,
              "fareBasis": se._flightService.itemFlightCache.departFlight.fareBasis,
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
      } else{
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

      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/data/validpromocode',
        headers:
        {
          'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: { bookingCode: _bookingCode ,code: se.promocode, totalAmount: se._voucherService.openFrom == 'touradddetails' ? se._tourService.totalPrice :( !se._voucherService.isFlightPage? se.valueGlobal.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, '') : se._flightService.itemFlightCache.totalPrice), comboDetailId: se.bookCombo.ComboId,
        couponData: coupondata},
        json: true
      };
  
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        se.zone.run(() => {
          var json = body;
          if (json.error==0) {
            se.discountpromo=json.data.orginDiscount ? json.data.orginDiscount : json.data.discount;
            se.msg=json.msg;
            se.ischecktext=0;
            se.ischeckerror=0;
            se.modalCtrl.dismiss({promocode:se.promocode});
          }
          else if(json.error==1)
          {
            se.ischeckbtnpromo = false;
            se.msg=json.msg;
            se.discountpromo=0;
            se.ischecktext=1;
            se.ischeckerror=1;
          }
          else if(json.error==2)
          {
            se.ischeckbtnpromo = false;
            se.msg=json.msg;
            se.discountpromo=0;
            se.ischecktext=2;
            se.ischeckerror=1;
          }
          else if(json.error==3)
          {
            se.ischeckbtnpromo = false;
            se.msg=json.msg;
            se.discountpromo=0;
            se.ischecktext=2;
            se.ischeckerror=1;
          }
          else
          {
            se.ischeckbtnpromo = false;
            se.msg=json.msg;
            se.discountpromo=0;
            se.ischecktext=2;
            se.ischeckerror=1;
          }
        })
      });
    }
  }
  textchange() {
    this.ischeckbtnpromo = false;
    this.discountpromo=0;
    this.ischeckerror=0;
    this.msg="";
    this.ischecktext=3
  }

}
