import { ModalController } from '@ionic/angular';
import { ValueGlobal, Bookcombo } from './../providers/book-service';
import { Component, OnInit, NgZone } from '@angular/core';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import * as request from 'requestretry';
import { flightService } from './../providers/flightService';
@Component({
  selector: 'app-adddiscount',
  templateUrl: './adddiscount.page.html',
  styleUrls: ['./adddiscount.page.scss'],
})
export class AdddiscountPage implements OnInit {
  ;discountpromo;msg;ischecktext=3;ischeckerror=0;ischeckbtnpromo = false;promocode;
  constructor(public _flightService: flightService,public zone: NgZone,public valueGlobal:ValueGlobal, public modalCtrl: ModalController,private bookCombo:Bookcombo) { 
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
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/data/validpromocode',
        headers:
        {
          'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: { code: se.promocode, totalAmount: this._flightService.itemFlightCache.totalPrice?this._flightService.itemFlightCache.totalPrice:se.valueGlobal.PriceAvgPlusTAStr.toString().replace(/\./g, '').replace(/\,/g, ''),comboDetailId: this.bookCombo.ComboId },
        json: true
      };
  
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        se.zone.run(() => {
          var json = body;
          if (json.error==0) {
            se.discountpromo=json.data.discount;
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
