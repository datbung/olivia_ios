import { Component,NgZone ,OnInit, EventEmitter, Input} from '@angular/core';
import { Platform, NavController, AlertController,  ToastController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as request from 'requestretry';
import { C } from './../../providers/constants';
import { Bookcombo, ValueGlobal } from '../../providers/book-service';
import { GlobalFunction } from './../../providers/globalfunction';
import { VoucherDetailPage } from '../voucherdetail/voucherdetail.page';
import { voucherService } from 'src/app/providers/voucherService';
import * as moment from 'moment';
import { flightService } from 'src/app/providers/flightService';

@Component({
  selector: 'app-voucherslide',
  templateUrl: 'voucherslide.page.html',
  styleUrls: ['voucherslide.page.scss'],
})

export class VoucherSlidePage implements OnInit{
  @Input() item:any;
    userRewardData:any;
    userInfoData:any;
    CityName: string;
    CountryCode: string;
    public isShowConfirm = false;
    public intervalID;
    vouchers = [];
  msgApplyFor: any;
    constructor(public platform: Platform,public navCtrl: NavController,public toastCtrl: ToastController,
        public zone: NgZone,public storage: Storage,public alertCtrl: AlertController,public modalCtrl: ModalController,public valueGlobal: ValueGlobal,
        public gf: GlobalFunction,
        public _voucherService: voucherService,
        public _flightService: flightService,
        public bookCombo: Bookcombo){
          storage.get('auth_token').then(auth_token => {
            if (auth_token) {
              //this.loadVoucher(auth_token);
              this.loadVoucherClaimed(auth_token);
            }else{
              this.loadUserInfo();
            }
          })
    }

    ngOnInit(){
      this._voucherService.rollbackSelectedVoucher.pipe().subscribe((itemRollback) => {
        if(itemRollback){
          for (let index = 0; index < this.vouchers.length; index++) {
            const element = this.vouchers[index];
            if(element.id == itemRollback.id){
              element.claimed = false;
            }
            
          }
        }
      })
    }

    ngAfterContentInit(){
      
    }

    goback(){
        this.navCtrl.back();
    }

    loadUserInfo(){
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                method: 'GET',
                url: C.urls.baseUrl.urlMobile +'/api/Dashboard/GetUserInfo',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers:
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
                };
                request(options, function (error, response, body) {
                    if(response.statusCode != 200){
                        var objError ={
                            page: "userreward",
                            func: "loadUserInfo",
                            message : response.statusMessage,
                            content : response.body,
                            type: "warning",
                            param:  JSON.stringify(options)
                          };
                        C.writeErrorLog(objError,response);
                      }
                if (error) {
                    error.page = "userreward";
                    error.func = "loadUserInfo";
                    error.param =  JSON.stringify(options);
                    C.writeErrorLog(error,response);
                    throw new Error(error)
                }else{
                    if(body){
                        var data = JSON.parse(body);
                        se.zone.run(()=>{
                            se.userInfoData = data;
                        });
                        //se.storage.set('userInfoData', data);
                    }else{
                        if(se.isShowConfirm) return;
                        //se.showConfirm();
                        se.isShowConfirm = true;
                    }
                    
                }
                
                });
            }
        })
    }

    // async showVoucherDetail(voucher){
    //         var se = this;
    //         se._voucherService.itemVoucher = voucher;
    //           const modal: HTMLIonModalElement =
    //           await se.modalCtrl.create({
    //             component: VoucherDetailPage,
    //             showBackdrop: true,
    //             backdropDismiss: true,
                
    //             cssClass: "modal-voucher-detail"
    //           });
    //         modal.present();
    // }

    voucherSelect(voucher){
      if(voucher.rewardsItem.price <= 0){
        this.showVoucherDetail(voucher);
      }else{
        if(voucher.applyFor && voucher.applyFor != 'flight'){
          this.gf.showAlertMessageOnly(`Mã giảm giá chỉ áp dụng cho đơn hàng ${ voucher.applyFor == 'hotel' ? 'khách sạn' : 'tour'}. Quý khách vui lòng chọn lại mã khác!`);
          return;
        } else{
          this.checkVoucherActive(voucher).then((check) => {
            if(!check){
              if(this.msgApplyFor){
                this.gf.showAlertMessageOnly(this.msgApplyFor);
              } else {
                this.gf.showAlertMessageOnly('Mã voucher không còn hiệu lực. Vui lòng chọn mã voucher khác!');
              }
              
              return;
            }else{
                  for (let index = 0; index < this._voucherService.vouchers.length; index++) {
                    const element = this._voucherService.vouchers[index];
                    if(element.id != voucher.id){
                      element.claimed = false;
                    }
                    
                  }
                  voucher.claimed = !voucher.claimed;
                  console.log(this.item);
                  //this._voucherService.itemSelectVoucher.emit(voucher);
                  this._voucherService.publicVoucherClicked(voucher);
              }
            })
        }
      }
    }

    checkVoucherActive(itemVoucher): Promise<any> {
      return new Promise((resolve, reject) => {
          var se = this;
          if (itemVoucher.code) {
            var options = {
              method: 'POST',
              url: C.urls.baseUrl.urlMobile + '/api/data/validpromocode',
              headers:
              {
                'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
                'cache-control': 'no-cache',
                'content-type': 'application/json'
              },
              body: { bookingCode: '' ,code: itemVoucher.code, totalAmount: itemVoucher.rewardsItem.price, comboDetailId: 0,
              couponData: itemVoucher.applyFor && itemVoucher.applyFor == 'flight' ? {
                  "tickets": this._flightService.itemFlightCache.roundTrip ? [
                    {
                      "flightNumber": se._flightService.itemFlightCache.departFlight.flightNumber ,
                      "airLineCode": se._flightService.itemFlightCache.departFlight.airLineCode,
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
                      "airLineCode": se._flightService.itemFlightCache.returnFlight.airLineCode,
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
                      "airLineCode": se._flightService.itemFlightCache.departFlight.airLineCode,
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
              } : '' },
              json: true
            };
      
            request(options, function (error, response, body) {
              if (error) throw new Error(error);
                var json = body;
                if (json.error == 0) {
                  resolve(true);
                }
                else{
                  if(json.msg && itemVoucher.applyFor && itemVoucher.applyFor == 'flight'){
                    se.msgApplyFor = json.msg;
                  }
                  resolve(false);
                }
            });
          }
      })
    }
    
    async showVoucherDetail(voucher){
      var se = this;
      se._voucherService.itemVoucher = voucher;
        const modal: HTMLIonModalElement =
        await se.modalCtrl.create({
          component: VoucherDetailPage,
          showBackdrop: true,
          backdropDismiss: true,
          
          cssClass: "modal-voucher-detail"
        });
      modal.present();
}

    loadVoucher(auth_token){
      let url = `${C.urls.baseUrl.urlMobile}/api/dashboard/GetRewardItems`;
      let text = "Bearer " + auth_token;
      let  headers =
      {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          authorization: text
      }
      this.gf.RequestApi('GET', url, headers, {}, 'myvoucher', 'loadVoucher').then((data)=> {
        console.log(data);
        if(data && data.length >0){
          data.forEach(element => {
            element.validdateDisplay = moment(element.to).format('DD-MM-YYYY');
          });
          this.vouchers = [...data];
          this.zone.run(()=>{
            this._voucherService.hasVoucher = true;
          })
        }
        
        //this.vouchersClaimed = data;
        //this.loadvoucherdone = true;
      })
    }

    loadVoucherClaimed(auth_token){
      let url = `${C.urls.baseUrl.urlMobile}/api/dashboard/GetVoucherClaimed`;
      let text = "Bearer " + auth_token;
      let  headers =
      {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          authorization: text
      }
      console.log(headers);
      this.gf.RequestApi('GET', url, headers, {}, 'myvoucher', 'loadVoucher').then((data)=> {
        //console.log(data);
        //this.vouchersClaimed = data;
        if(data && data.length >0){
          data.forEach(element => {
            element.validdateDisplay = moment(element.to).format('DD-MM-YYYY');
          });
          this.vouchers = [...data];
          this._voucherService.vouchers = [...data];
          this.zone.run(()=>{
            this._voucherService.hasVoucher = this._voucherService.vouchers.some(v => v.isActive);
          })
        }else if(data.error == 401){
          this.storage.get('jti').then((memberid) => {
            this.storage.get('deviceToken').then((devicetoken) => {
              this.gf.refreshToken(memberid, devicetoken).then((token) => {
                setTimeout(() => {
                  this.storage.remove('auth_token').then(()=>{
                    this.storage.set('auth_token', token);
                  })
                  this.loadVoucherClaimed(token);
                }, 100)
              });

            })
          })
        }
       
      })
    }
}