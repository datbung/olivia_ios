import { Component,NgZone ,OnInit} from '@angular/core';
import { Platform, NavController, AlertController,  ToastController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as request from 'requestretry';
import { C } from './../../providers/constants';
import { ValueGlobal } from '../../providers/book-service';
import { GlobalFunction } from './../../providers/globalfunction';
import { VoucherDetailPage } from '../voucherdetail/voucherdetail.page';
import { voucherService } from 'src/app/providers/voucherService';
import * as moment from 'moment';

@Component({
  selector: 'app-myvoucher',
  templateUrl: 'myvoucher.page.html',
  styleUrls: ['myvoucher.page.scss'],
})

export class MyVoucherPage implements OnInit{
    userRewardData:any;
    userInfoData:any;
    CityName: string;
    CountryCode: string;
    public isShowConfirm = false;
    public intervalID;
    vouchers = [];
    loadsdk = [1,2,3,4,5];
  vouchersClaimed: any=[];
  loadvoucherdone = false;
    constructor(public platform: Platform,public navCtrl: NavController,public toastCtrl: ToastController,
        public zone: NgZone,public storage: Storage,public alertCtrl: AlertController,public modalCtrl: ModalController,public valueGlobal: ValueGlobal,
        public gf: GlobalFunction,
        public _voucherService: voucherService){
          storage.get('auth_token').then(auth_token => {
            if (auth_token) {
              //this.loadVoucher(auth_token);
              try {
                this.loadVoucherClaimed(auth_token);
              } 
              catch(exception) {
                this.loadvoucherdone = true;
              }
            }else{
              this.loadUserInfo();
            }
          })
    }

    ngOnInit(){

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
        this.vouchers = data;
        data.forEach(element => {
          element.validdateDisplay = moment(element.to).format('DD-MM-YYYY');
        });
        //this.vouchersClaimed = data;
        this.loadvoucherdone = true;
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
      this.gf.RequestApi('GET', url, headers, {}, 'myvoucher', 'loadVoucher').then((data)=> {
        console.log(data);
        if(data && data.length >0){
          data.forEach(element => {
            element.validdateDisplay = moment(element.to).format('DD-MM-YYYY');
            if(element.isActive){
              this.vouchers.push(element);
            }else{
              this.vouchersClaimed.push(element);
            }
          });
        }else{
          this.vouchers = [];
          this.vouchersClaimed = [];
        }
       
        this.loadvoucherdone = true;
      })
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
                      else if (response.statusCode == 401) {
                        se.storage.get('jti').then((memberid) => {
                          se.storage.get('deviceToken').then((devicetoken) => {
                            se.gf.refreshToken(memberid, devicetoken).then((token) => {
                              setTimeout(() => {
                                se.storage.remove('auth_token').then(()=>{
                                  se.storage.set('auth_token', token);
                                })
                                
                              }, 100)
                            });
            
                          })
                        })
                      }
                else if (error) {
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

}