import { Bookcombo } from './../providers/book-service';
import { RoomInfo } from '../providers/book-service';
import { GlobalFunction } from './../providers/globalfunction';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as request from 'requestretry';
import { C } from '../providers/constants';
@Component({
  selector: 'app-combocarpaymentpayoo',
  templateUrl: './combocarpaymentpayoo.page.html',
  styleUrls: ['./combocarpaymentpayoo.page.scss'],
})
export class CombocarpaymentpayooPage implements OnInit {
  bookingCode;stt;text;qrimg;BillingCode;PeriodPaymentDate
  intervalID: NodeJS.Timeout;priceshow;PriceAvgPlusTAStr;roomtype;sttbooking;listcars
  constructor(private navCtrl:NavController, public gf: GlobalFunction,
    private activatedRoute: ActivatedRoute,private Roomif:RoomInfo,private bookCombo:Bookcombo) { }

  ngOnInit() {
    this.bookingCode = this.activatedRoute.snapshot.paramMap.get('code');
    this.stt= this.activatedRoute.snapshot.paramMap.get('stt');
    this.sttbooking= this.activatedRoute.snapshot.paramMap.get('sttbooking');
    this.roomtype = this.Roomif.roomtype;
    this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
    this.listcars = this.gf.getParams('carscombo');
    this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.PeriodPaymentDate = this.Roomif.PeriodPaymentDate;
    if (this.stt=='0') {
      this.BillingCode=this.Roomif.BillingCode;
    }
    else
    {
      this.qrimg=this.Roomif.qrimg;
      this.intervalID = setInterval(() => {
        this.checkBooking(0);
      }, 1000 * 1);
      setTimeout(() => {
        clearInterval(this.intervalID);
      }, 60000 * 15);
    }
  }
  goback()
  {
    if (this.stt=='1') {
      clearInterval(this.intervalID);
    }
    if (this.bookingCode && this.Roomif.point) {
      this.navCtrl.navigateForward('/combocarnew');
    } else {
      this.navCtrl.back();
    }
  
  }
  next()
  {
    var se=this;
    clearInterval(this.intervalID);
    if (this.stt=='0') {
      se.Roomif.priceshowtt = se.priceshow;
      se.navCtrl.navigateForward('/combodone/'+se.bookingCode);
      //se.CreateComboTransferBooking(1);
    }
    else
    {
      se.checkBooking(1);
    }

  }
  checkBooking(value) {
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlPost + '/mCheckBooking',
      qs: { code: se.bookingCode },
      headers:
      {
      }
    };
    request(options, function (error, response, body) {
      if (response.statusCode != 200) {
        var objError = {
          page: "roompaymentselect",
          func: "openWebpage",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          para: JSON.stringify(options)
        };
        C.writeErrorLog(objError, response);
      }
      if (error) {
        error.page = "roompaymentselect";
        error.func = "openWebpage";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
      };
      if (body) {
        var rs = JSON.parse(body);
        if (rs.StatusBooking == 3) {
          var id = rs.BookingCode;
          var total = se.priceshow;
          se.Roomif.priceshowtt = se.priceshow;
          clearInterval(se.intervalID);
          //se.CreateComboTransferBooking(0);
          se.navCtrl.navigateForward('/combodoneprepay/' + id + '/' + total + '/0');
        }
        // else{
        //   if (value==1) {
        //     //se.CreateComboTransferBooking(1);
        //     se.navCtrl.navigateForward('/combodone/'+se.bookingCode);
        //   }
        // }
      }
      else {
        error.page = "roompaymentselect";
        error.func = "openWebpage";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
        alert("Đã có sự cố xảy ra, vui lòng thử lại!");
      }
    });
  }
  CreateComboTransferBooking(value) {
    var se = this;
    var form = this.listcars;
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlContracting+'/api/ToolsAPI/CreateComboTransferBooking',
      headers:
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form
    };
    request(options, function (error, response, body) {
      var obj = JSON.parse(body);
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlContracting+'/api/ToolsAPI/CreateTransactionIDComboTransfer',
        headers:
          {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        form:
        {
          BookingCode: obj.Code,
          DepartATCode: obj.TransferReserveCode.DepartReserveCode,
          ReturnATCode: obj.TransferReserveCode.ReturnReserveCode,
          FromPlaceCode: se.listcars.TransferBooking.fromPlaceCode
        }
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var json=JSON.parse(body);
        if (json.Error==0) {
          if (value==0) {
            se.navCtrl.navigateForward('/combodoneprepay/' + se.bookingCode + '/' + se.priceshow + '/0');
          } else {
            se.navCtrl.navigateForward('/combodone/'+obj.Code);
          }
          
        }
      });
    })
   

  }
}

