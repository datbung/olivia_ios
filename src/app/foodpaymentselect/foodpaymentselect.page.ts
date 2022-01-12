import { parse } from 'path';
import { foodService } from './../providers/foodService';
import { Bookcombo, foodInfo } from './../providers/book-service';
import { Booking, RoomInfo, SearchHotel } from '../providers/book-service';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';

import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
@Component({
  selector: 'app-foodpaymentselect',
  templateUrl: './foodpaymentselect.page.html',
  styleUrls: ['./foodpaymentselect.page.scss'],
})
export class FoodpaymentselectPage implements OnInit {
  priceshow; listmenu = []; arrmenu; ischeckvisa = false
  public loader: any; returnUrl; arrbankrmb = [];tokenid;
  bookingCode = ""; startDate; endDate; ischeckpay = true; jti;isbtn=false;
  intervalID: NodeJS.Timeout;
  isremember=true
  constructor(private navCtrl:NavController,private foodService:foodService
    ,public gf: GlobalFunction, public loadingCtrl: LoadingController
    ,public searchhotel:SearchHotel,private safariViewController: SafariViewController, public storage: Storage,
    private zone: NgZone) { 
    this.priceshow=this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.searchhotel.backPage='foodpaymentselect';
   
    this.arrmenu = this.foodService.listItemsCart;
    for (let i = 0; i < this.arrmenu.length; i++) {
      var chuoi="";
      if(this.arrmenu[i].startDate && this.arrmenu[i].endDate){
        chuoi += moment(this.arrmenu[i].startDate).format("DD.MM") + " → " + moment(this.arrmenu[i].endDate).format("DD.MM")
      }
      
      if (this.arrmenu[i].itemExtraOther&&this.arrmenu[i].itemExtraOther.length>0) {
        chuoi += ' · ';
        for (let j = 0; j < this.arrmenu[i].itemExtraOther.length; j++) {
          if (j==this.arrmenu[i].itemExtraOther.length-1) {
            if (this.arrmenu[i].itemExtraWater.length>0) {
              chuoi=chuoi+this.arrmenu[i].itemExtraOther[j].name+' · ';
            }
            else
            {
              chuoi=chuoi+this.arrmenu[i].itemExtraOther[j].name;
            }
          }
          else{
            chuoi=chuoi+this.arrmenu[i].itemExtraOther[j].name+' · ';
          }
        }
      }
      if (this.arrmenu[i].itemExtraWater&&this.arrmenu[i].itemExtraWater.length>0) {
        if(this.arrmenu[i].itemExtraOther&&this.arrmenu[i].itemExtraOther.length == 0){
          chuoi += ' · ';
        }
        
        for (let m = 0; m < this.arrmenu[i].itemExtraWater.length; m++) {
          if (m==this.arrmenu[i].itemExtraWater.length-1) {
            chuoi=chuoi+this.arrmenu[i].itemExtraWater[m].name;
          }
          else{
            chuoi=chuoi+this.arrmenu[i].itemExtraWater[m].name+' · ';
          }

        }
      }
      
      this.arrmenu[i].totalPrice = this.arrmenu[i].focategory.totalPriceItem;

      var item={quantity:this.arrmenu[i].quantity,name:this.arrmenu[i].focategory.name,chuoi:chuoi,totalPrice:this.arrmenu[i].totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),typePriceId:this.arrmenu[i].focategory.typePriceId}
      this.listmenu.push(item);
    }
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.GeTokensOfMember(0);
      }
    })
  }
  checkpayment()
  {
    var ti = new Date();
    var thu=moment(ti).format('dddd');
    var hours = moment(ti).format('HHmm');
    if (thu=='Friday') {
      if (parseInt(hours)>=2100) {
        this.ischeckpay=false;
      }
    }
    else if(thu=='Saturday'||thu=='Sunday')
    {
      this.ischeckpay=false;
    }
  }
  ngOnInit() {
  }
  goback()
  {
    this.navCtrl.navigateBack('foodadddetail');
  }
  foodpaymentbank()
  {
    this.navCtrl.navigateForward('foodpaymentbank');
  }
  foodpaymentatm()
  {
    this.navCtrl.navigateForward('foodpaymentchoosebank');
  }
  foodpaymentvisa() {
    this.GeTokensOfMember(1);
  }
  openWebpage(url: string) {
    var se = this;
    se.safariViewController.isAvailable()
    .then((available: boolean) => {
        if (available) {
          se.safariViewController.show({
            url: url,
            hidden: false,
            animated: false,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#23BFD8'
          })
          .subscribe((result: any) => {
              if(result.event === 'opened') console.log('Opened');
              else if(result.event === 'loaded') console.log('Loaded');
              else if(result.event === 'closed') 
              {     
                clearInterval(se.intervalID);
                se.presentLoading();
                 se.checkBooking().then((data) => {
                if (data) {
                  se.foodService.ischeckpayment = '1';
                  se.storage.set("payment", "visa");
                  se.navCtrl.navigateForward('foodpaymentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                }
              })
              }
              
            },
            (error: any) => console.error(error)
          );
  
        } else {
          // use fallback browser, example InAppBrowser
        }
      }
    );
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  foodpaymentpayoolive() {
    this.presentLoading();
    this.gf.CreateBooking(this.foodService.objBooking).then(data => {
      data = JSON.parse(data);
      if (data.status == 1) {
        this.gf.Updatefoodpaytype(this.bookingCode, 4).then(datatype => {
          if (datatype) {
            this.bookingCode = data.response.bookingCode;
            this.startDate = data.response.startDate;
            this.endDate = data.response.endDate;
            this.foodService.PeriodPaymentDate = data.response.periodPaymentDate;
            var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=payoo_store&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + data.response.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + ''
            this.gf.CreatePayoo(url).then(datapayoo => {
              datapayoo = JSON.parse(datapayoo);
              if (datapayoo.success) {
                this.foodService.BillingCode = datapayoo.payooStoreData.BillingCode;
                if (this.loader) {
                  this.loader.dismiss();
                }
                this.navCtrl.navigateForward('foodpaymentpayoo/' + data.response.bookingCode + '/0');
              }
            })
          }
        })
      }
    })
  }
  foodpaymentpayooqr() {
    this.presentLoading();
    this.gf.CreateBooking(this.foodService.objBooking).then(data => {
      data = JSON.parse(data);
      if (data.status == 1) {
        this.gf.Updatefoodpaytype(this.bookingCode, 5).then(datatype => {
          if (datatype) {
            this.bookingCode = data.response.bookingCode;
            this.startDate = data.response.startDate;
            this.endDate = data.response.endDate;
            this.foodService.PeriodPaymentDate = data.response.periodPaymentDate;
            var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=payoo_qr&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + data.response.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + ''
            this.gf.CreatePayoo(url).then(datapayoo => {
              datapayoo = JSON.parse(datapayoo);
              if (datapayoo.success) {
                this.foodService.qrimg = datapayoo.payooQrData.QRCodeUrl;
                if (this.loader) {
                  this.loader.dismiss();
                }
                this.navCtrl.navigateForward('foodpaymentpayoo/' + data.response.bookingCode + '/1');
                //console.log(datapayoo.payooStoreData.BillingCode);
              }
            })
          }
        })
      }
    })
  }
  GeTokensOfMember(stt) {
    var se = this;
    se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
      if (dataTokens) {
        dataTokens = JSON.parse(dataTokens);
        if (dataTokens.tokens.length > 0) {
          this.arrbankrmb=[];
          for (let i = 0; i < dataTokens.tokens.length; i++) {
            if (dataTokens.tokens[i].vpc_Card == 'VC' || dataTokens.tokens[i].vpc_Card == 'MC' || dataTokens.tokens[i].vpc_Card == 'JC' || dataTokens.tokens[i].vpc_Card == 'AE') {
              // this.TokenId = dataTokens.tokens[i].id;
              var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
              vpc_CardNum = vpc_CardNum[1];
              var cardname=this.getCardName(dataTokens.tokens[i].vpc_Card);
              var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: cardname, checked: false };
              this.arrbankrmb.push(item);
            }
          }
          if ( this.arrbankrmb.length>0) {
            this.arrbankrmb[0].checked=true;
            this.tokenid= this.arrbankrmb[0].id;
            this.isbtn=true;
            this.ischeckvisa=true
          }
        }
      }
      if (stt==1) {
        if (this.arrbankrmb.length > 0) {
          this.ischeckvisa = true;
        } else {
          this.presentLoading();
          if (this.bookingCode) {
            this.NoCreateBooking();
          } else {
            this.CreateBooking();
          }
        } 
      }
    })
  }
  next() {
    this.presentLoading();
    if (this.bookingCode) {
      this.NoCreateBooking();
    } else {
      this.CreateBooking();
    }
  }
  chooseacc(item)
  {
    this.tokenid=item.id;
    this.isbtn=true;
  }
  nochooseacc()
  {
    this.tokenid="";
    this.isbtn=true;
  }
  CreateBooking()
  {
    var se=this;
    se.gf.CreateBooking(se.foodService.objBooking).then(data => {
      data = JSON.parse(data);
      if (data.status == 1) {
        se.bookingCode = data.response.bookingCode;
        se.startDate = data.response.startDate;
        se.endDate = data.response.endDate;
        se.gf.Updatefoodpaytype(se.bookingCode, 2).then(datatype => {
          if (datatype) {
            var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=visa&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '&memberId=' + se.jti + '&TokenId='+this.tokenid+'&rememberToken='+se.isremember+'&callbackUrl='+C.urls.baseUrl.urlPayment+'/Home/BlankFoodOpenPay';
            //&callbackUrl=ivivuapp%3A%2F%2Fapp%2Ffoodpaymentdone%2F'+ se.bookingCode + '%2F' + se.startDate + '%2F' + se.endDate;
            this.gf.CreatePayoo(url).then(datapayoo => {
              datapayoo = JSON.parse(datapayoo);
              se.openWebpage(datapayoo.returnUrl);
              //se.setintervalvisa();
              //window.open(datapayoo.returnUrl, '_system');
              se.setintervalvisa();
            })
          }
        })
      }
    })
  }
  NoCreateBooking()
  {
    var se=this;
        var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=visa&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '&memberId=' + se.jti + '&TokenId='+this.tokenid+'&rememberToken='+se.isremember+'&callbackUrl='+C.urls.baseUrl.urlPayment+'/Home/BlankFoodOpenPay';
        //&callbackUrl=ivivuapp%3A%2F%2Fapp%2Ffoodpaymentdone%2F'+ se.bookingCode + '%2F' + se.startDate + '%2F' + se.endDate;
        this.gf.CreatePayoo(url).then(datapayoo => {
          datapayoo = JSON.parse(datapayoo);
          se.openWebpage(datapayoo.returnUrl);
          //se.setintervalvisa();
          //window.open(datapayoo.returnUrl, '_system');
          se.setintervalvisa();
        })
  }
  getCardName(text)
  {
    var cardStr="";
    switch (text) {
      case "MC":
        cardStr = "Mastercard";
        break;
    case "VC":
        cardStr = "Visacard";
        break;
    case "JC":
        cardStr = "JCBCard";
        break;
    case "AE":
        cardStr = "AECard";
    }
    return cardStr;
  }
  checkBooking(): Promise<any> {
    var se = this;
    return new Promise((resolve, reject) => {
      //wait 5s
    
        var options = {
          'method': 'GET',
          'url': C.urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + se.bookingCode + '',
          //'url' : C.urls.baseUrl.urlContracting + "/check-paymented?code="+se.bookingCode,
          'headers': {
          }
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          var rs = JSON.parse(response.body);
          if (rs.response.status == 3) {
            if (se.loader) {
              se.loader.dismiss();
            }
            resolve(true);
          }
          else {
            if (se.loader) {
              se.loader.dismiss();
            }
            resolve(false);
          }
        });

    })
  }
  foodpaymentmomo()
  {
    this.presentLoading();
    if (!this.bookingCode) {
      this.CreateBookingMomo();
    } else {
      this.NoCreateBookingMomo();
    }
  }
  CreateBookingMomo()
  {
    this.gf.CreateBooking(this.foodService.objBooking).then(data => {
      data = JSON.parse(data);
      if (data.status == 1) {
        this.gf.Updatefoodpaytype(this.bookingCode, 6).then(datatype => {
          if (datatype) {
            this.bookingCode = data.response.bookingCode;
            this.startDate = data.response.startDate;
            this.endDate = data.response.endDate;
            this.foodService.PeriodPaymentDate = data.response.periodPaymentDate;
            var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=momo&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + data.response.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone +'&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomefood';
            this.gf.CreatePayoo(url).then(datapayoo => {
              datapayoo = JSON.parse(datapayoo);
              if (datapayoo.success) {
                window.open(datapayoo.returnUrl.payUrl, '_system');
                this.zone.run(()=>{
                  this.setinterval();
                })
              }
            })
          }
        })
      }
    })
  }
  NoCreateBookingMomo()
  {
    var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=momo&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone +'&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomefood';
    this.gf.CreatePayoo(url).then(datapayoo => {
      datapayoo = JSON.parse(datapayoo);
      if (datapayoo.success) {
        window.open(datapayoo.returnUrl.payUrl, '_system');
        this.zone.run(()=>{
          this.setinterval();
        })
      }
    })
  }
  setinterval()
  {
    if (this.loader) {
      this.loader.dismiss();
    }
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => {
      //let url = C.urls.baseUrl.urlContracting + "/check-paymented?code="+this.bookingCode;
      let url = C.urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + this.bookingCode + '';
      this.zone.run(()=>{
        this.gf.CheckpaymentFood(url).then((data) => {
          var checkpay=data
          if (checkpay=="true") {
            clearInterval(this.intervalID);
            this.foodService.ischeckpayment='1';
            window.close();
            this.navCtrl.navigateForward('foodpaymentdonepayoo/'+this.bookingCode+'/'+this.startDate+'/'+this.endDate);
          }
        })
      })
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(this.intervalID);
    }, 60000);
  }

  setintervalvisa()
  {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => {
      this.zone.run(()=>{
        this.checkBooking().then((data) => {
          if (data) {
            this.foodService.ischeckpayment = '1';
            this.storage.set("payment", "visa");
            clearInterval(this.intervalID);
            this.safariViewController.hide();
            //window.close();
            this.navCtrl.navigateForward('foodpaymentdone/' + this.bookingCode + '/' + this.startDate + '/' + this.endDate);
          }
        })
      })
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(this.intervalID);
    }, 60000);
  }
  rememberCard(){
    this.isremember=!this.isremember
  }
}
