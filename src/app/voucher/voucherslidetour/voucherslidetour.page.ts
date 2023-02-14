import { Component,NgZone ,OnInit, EventEmitter, Input} from '@angular/core';
import { Platform, NavController, AlertController,  ToastController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as request from 'requestretry';
import { C } from './../../providers/constants';
import { Bookcombo, SearchHotel, ValueGlobal } from '../../providers/book-service';
import { GlobalFunction } from './../../providers/globalfunction';
import { VoucherDetailPage } from '../voucherdetail/voucherdetail.page';
import { voucherService } from 'src/app/providers/voucherService';
import * as moment from 'moment';
import { tourService } from 'src/app/providers/tourService';

@Component({
  selector: 'app-voucherslidetour',
  templateUrl: 'voucherslidetour.page.html',
  styleUrls: ['voucherslidetour.page.scss'],
})

export class VoucherSlideTourPage implements OnInit{
  @Input() item:any;
    userRewardData:any;
    userInfoData:any;
    CityName: string;
    CountryCode: string;
    public isShowConfirm = false;
    public intervalID;
    vouchers = [];
    constructor(public platform: Platform,public navCtrl: NavController,public toastCtrl: ToastController,
        public zone: NgZone,public storage: Storage,public alertCtrl: AlertController,public modalCtrl: ModalController,public valueGlobal: ValueGlobal,
        public gf: GlobalFunction,
        public _voucherService: voucherService,
        public bookCombo: Bookcombo,
        public tourService: tourService,
        public searchHotel: SearchHotel){
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

    voucherSelect(voucher){
      if(voucher.rewardsItem.price <= 0){
        this.showVoucherDetail(voucher);
      }else{
        if(voucher.applyFor && voucher.applyFor != 'tour'){
          this.gf.showAlertMessageOnly(`Mã giảm giá chỉ áp dụng cho đơn hàng ${ voucher.applyFor == 'flight' ? 'vé máy bay' : 'khách sạn'}. Quý khách vui lòng chọn lại mã khác!`);
          return;
        } else{
          this.checkVoucherActive(voucher).then((check) => {
            if(!check){
              this.gf.showAlertMessageOnly('Mã voucher không còn hiệu lực. Vui lòng chọn mã voucher khác!');
              return;
            }else{
              for (let index = 0; index < this._voucherService.vouchers.length; index++) {
                const element = this._voucherService.vouchers[index];
                if(element.id != voucher.id){
                  element.claimed = false;
                }
                
              }
              this.zone.run(()=>{
                voucher.claimed = !voucher.claimed;
              })
              this._voucherService.publicVoucherTourClicked(voucher);
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
              body: { code: itemVoucher.code, totalAmount: itemVoucher.rewardsItem.price, comboDetailId: this.bookCombo.ComboId },
              json: true
            };
      
            request(options, function (error, response, body) {
              if (error) throw new Error(error);
                var json = body;
                if (json.error == 0) {
                  resolve(true);
                }
                else{
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
            this._voucherService.hasVoucher = this._voucherService.vouchers.some(v => v.isActive);
          })
        }
        
        //this.vouchersClaimed = data;
        //this.loadvoucherdone = true;
      })
    }

    loadVoucherClaimed(auth_token){
      let se = this;
      let url = `${C.urls.baseUrl.urlMobile}/api/dashboard/GetVoucherClaimed`;
      let text = "Bearer " + auth_token;
      let  headers =
      {
          'cache-control': 'no-cache',
          'content-type': 'application/json',
          authorization: text
      };
      let body = {
        bookingCode: 'tour' ,codes: [], totalAmount: 0, comboDetailId: 0,
        couponData: {
          "tour": {
            "tourId": se.tourService.itemDetail.tourDetailId,
            "totalAdult": se.searchHotel.adult,
            "totalChild": se.searchHotel.child,
            "jsonObject": "",
            "checkIn": se.searchHotel.CheckInDate,
            "checkOut": se.searchHotel.CheckOutDate
          }
        },
      }
      //console.log(headers);
      this.gf.RequestApi('POST', url, headers, body, 'myvoucher', 'loadVoucher').then((data)=> {
        //console.log(data);
        //this.vouchersClaimed = data;
        if(data && data.length >0){
          data.forEach(element => {
            element.validdateDisplay = moment(element.to).format('DD-MM-YYYY');
          });
          //this.vouchers = [...data];
          //this._voucherService.vouchers = [...data];
          this.zone.run(()=>{
            let voucheractive = data.filter((i)=> {return i.isActive});
            let voucherdeactive = data.filter((i)=> {return !i.isActive});
            this.vouchers = [...voucheractive, ...voucherdeactive];
            this._voucherService.vouchers = [...voucheractive, ...voucherdeactive];
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