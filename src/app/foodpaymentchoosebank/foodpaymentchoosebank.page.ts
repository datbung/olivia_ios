import { foodService } from './../providers/foodService';
import { Bookcombo, foodInfo } from './../providers/book-service';
import { Booking, RoomInfo, SearchHotel } from '../providers/book-service';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';

import { GlobalFunction } from '../providers/globalfunction';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@Component({
  selector: 'app-foodpaymentchoosebank',
  templateUrl: './foodpaymentchoosebank.page.html',
  styleUrls: ['./foodpaymentchoosebank.page.scss'],
})
export class FoodpaymentchoosebankPage implements OnInit {

  ischeck; timestamp; public ischeckbox; jti
  Avatar; Name; Address; cin; cout; dur; room; nameroom; jsonroom; ischecktext = true
  roomnumber; adults; children; breakfast; PriceAvgPlusTAStr; priceshow
  imgroom; roomtype; indexme; indexroom; cin1; cout1; checkpayment; book; id; pricetemp; hotelid
  public loader: any; startDate; endDate; arrbankrmb=[];
  auth_token: any = ''; bookingCode = ""; isckb = false; TokenId;bankid=""
  currentItem: any;
  intervalID: any;
  iabrowser: any;
  isremember=true;isdisable=false;
  ischeckedDK=true;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public booking: Booking, 
    public Roomif: RoomInfo, public storage: Storage, public zone: NgZone, public searchhotel: SearchHotel,private safariViewController: SafariViewController,
    public loadingCtrl: LoadingController,public foodService:foodService, public platform: Platform, public gf: GlobalFunction,public bookCombo:Bookcombo,
    ) {
      this.priceshow = this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
    })
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.GeTokensOfMember();
      }
    })
  }
  next() {
    this.TokenId="";
    this.bankid="";
    this.arrbankrmb.forEach(element => {
      if (element.checked) {
        this.TokenId=element.id;
        this.bankid=element.vpc_Card;
      }
    });
    if (this.TokenId) {
      this.presentLoading();
      if (this.bookingCode) {
        this.CreateUrlOnePay(this.bankid);
      } else {
        this.CreateBooking(this.bankid);
      } 
    }
    else{
      if (this.id) {
        this.presentLoading();
        if (this.bookingCode) {
          this.CreateUrlOnePay(this.id);
        } else {
          this.CreateBooking(this.id);
        } 
      } else {
        this.presentToast();
      }
    }
  }
  openWebpage(url: string) {
    var se = this;
    this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {
        this.safariViewController.show({
          url: url,
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#23BFD8',
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') 
            {
              se.checkBooking().then((data) => {
                if (data) {
                  se.foodService.ischeckpayment = '1';
                  se.storage.set("payment", "atm");
                  se.safariViewController.hide();
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
  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: "Xin chọn 1 ngân hàng",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  clickitem(id) {
    this.zone.run(() => {
      this.id = id;
      this.TokenId="";
      this.isdisable=false;
      this.arrbankrmb.forEach(element => {
        element.checked =false;
      });
    })
  }

  edit() {
    this.zone.run(() => {
      if (this.ischeck) {
        this.ischecktext = true;
      } else {
        this.ischecktext = false;
      }
    })
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  goback() {
    this.navCtrl.navigateBack('foodpaymentselect');
  }
  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  CreateUrlOnePay(bankid) {
    var se = this;
    var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=atm&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + se.TokenId + '&rememberToken='+se.isremember+'&callbackUrl='+C.urls.baseUrl.urlPayment+'/Home/BlankFoodOpenPay';
    se.gf.CreatePayoo(url).then(datapayoo => {
      //datapayoo = JSON.parse(datapayoo);
      se.openWebpage(datapayoo.returnUrl);
      se.setinterval();
    })
  }

  setinterval()
  {
    var se = this;
    if (se.loader) {
      se.loader.dismiss();
    }
    clearInterval(se.intervalID);
    se.intervalID = setInterval(() => {
      se.zone.run(()=>{
        se.checkBooking().then((data) => {
          if (data) {
            se.foodService.ischeckpayment = '1';
            se.storage.set("payment", "atm");
            clearInterval(se.intervalID);
            window.close();
            se.safariViewController.hide();
            se.navCtrl.navigateForward('foodpaymentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
          }
        })
      })
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(se.intervalID);
    }, 60000 * 15);
  }
  
  GeTokensOfMember() {
    var se = this;
    se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
      if (dataTokens) {
        dataTokens = JSON.parse(dataTokens);
        if (dataTokens.tokens.length > 0) {
          for (let i = 0; i < dataTokens.tokens.length; i++) {
            if (dataTokens.tokens[i].vpc_Card != 'VC' && dataTokens.tokens[i].vpc_Card != 'MC' && dataTokens.tokens[i].vpc_Card != 'JC' && dataTokens.tokens[i].vpc_Card != 'AE') {
              // this.TokenId = dataTokens.tokens[i].id;
              var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
              vpc_CardNum = vpc_CardNum[1];
              var name_Bank=this.getnameBank(dataTokens.tokens[i].vpc_Card);
              var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank:name_Bank,checked:false,vpc_Card:dataTokens.tokens[i].vpc_Card};
              this.arrbankrmb.push(item);
            }
          }
          if ( this.arrbankrmb.length>0) {
            this.arrbankrmb[0].checked=true;
            this.isdisable=true;
            this.TokenId= this.arrbankrmb[0].id;
          }
          // item = { id: '999', imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[0].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank:name_Bank,checked:false};
          // this.arrbankrmb.push(item);
        }
      
      }
    })
  }
  getnameBank(text) {
    var cardStr="";
    switch (text) {
      case "970436":
        cardStr = "VietcomBank";
        break;
      case "970412":
        cardStr = "VRBank";
        break;
      case "970407":
        cardStr = "TechcomBank";
        break;
      case "970423":
        cardStr = "TienPhongBank";
        break;
      case "970415":
        cardStr = "ViettinBank";
        break;
      case "970441":
        cardStr = "VIB";
        break;
      case "970406":
        cardStr = "DongABank";
        break;
      case "970437":
        cardStr = "HDBank";
        break;
      case "970422":
        cardStr = "MB";
        break;
      case "970427":
        cardStr = "VietABank";
        break;
      case "970426":
        cardStr = "MaritimeBank";
        break;
      case "970431":
        cardStr = "EximBank";
        break;
      case "970443":
        cardStr = "SHB";
        break;
      case "970432":
        cardStr = "VPBank";
        break;
      case "970425":
        cardStr = "AnBinhBank";
        break;
      case "970403":
        cardStr = "SacomBank";
        break;
      case "970428":
        cardStr = "NamABank";
        break;
      case "970414":
        cardStr = "OceanBank";
        break;
      case "970418":
        cardStr = "BIDV";
        break;
      case "970440":
        cardStr = "SeaBank";
        break;
      case "970409":
        cardStr = "BacABank";
        break;
      case "970419":
        cardStr = "NaviBank";
        break;
      case "970405":
        cardStr = "AgriBank";
        break;
      case "970429":
        cardStr = "SaigonBank";
        break;
      case "970454":
        cardStr = "VietCapital";
        break;
      default:
        break;
    }
    return cardStr;
  }
  checkacc(item,ev)
  {
    this.zone.run(() => {
      
    })
  
    var se = this;
    if(ev.target.checked){
      se.arrbankrmb.forEach(element => {
        element.checked = false;
      });
      item.checked = true;
      this.isdisable=true;
      this.isremember=true;
    }
    else{
      item.checked = false;
      ev.target.checked = false;
      ev.target.classList.remove("radio-checked");
    }
  }
  CreateBooking(bankid)
  {
    var se=this;
    se.gf.CreateBooking(se.foodService.objBooking).then(data => {
      data = JSON.parse(data);
      if (data.status == 1) {
        se.bookingCode = data.response.bookingCode;
        se.startDate = data.response.startDate;
        se.endDate = data.response.endDate;
        se.gf.Updatefoodpaytype(se.bookingCode, 1).then(datatype => {
          if (datatype) {
            se.CreateUrlOnePay(bankid);
          }
        })
      }
    })
  }
  checkBooking(): Promise<any> {
    var se = this;
    return new Promise((resolve, rejec
    ) => {
      //wait 5s
      setTimeout(() => {
        var options = {
          'method': 'GET',
          'url': C.urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + se.bookingCode + '',
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
      }, 10000)

    })
  }
  rememberCard(){
    this.isremember=!this.isremember
  }
  checkDk(){
    
    this.ischeckedDK=!this.ischeckedDK;
  }
  openWebpageDK(url: string) {
    this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {
        this.safariViewController.show({
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
}
