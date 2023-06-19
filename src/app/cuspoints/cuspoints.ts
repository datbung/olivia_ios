import { Component, NgZone,OnInit } from '@angular/core';
import { NavController, AlertController, Platform, LoadingController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import * as request from 'requestretry';
import { C } from './../providers/constants';
import { GlobalFunction } from './../providers/globalfunction';
import { ValueGlobal } from '../providers/book-service';
import { forEach } from '@angular/router/src/utils/collection';
import * as moment from 'moment';
/**
 * Generated class for the CuspointsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-cuspoints',
  templateUrl: 'cuspoints.html',
  styleUrls: ['cuspoints.scss'],
})
export class CuspointsPage implements OnInit{
  point;actionHistory;  isShowConfirm = false;
  loader:any;
  expPointNextYear: any;
  expPointNowYear: any;
  currentYear: any;
  currentNextYear: any;
  constructor(public platform: Platform,public navCtrl: NavController, public storage: Storage,public loadingCtrl: LoadingController,private modalCtrl: ModalController,
    public alertCtrl: AlertController,public zone: NgZone,private gf: GlobalFunction, public valueGlobal: ValueGlobal) {
      this.presentLoading();
      this.GetUserInfo();
    //google analytic
    gf.googleAnalytion('cuspoints','load','');
  }

  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
      message: ""
    });
    this.loader.present();
  }

  ngOnInit(){

  }
  goback(){
    this.navCtrl.back();
    // this.navCtrl.dismiss();
  }

  ionViewWillEnter(){
 
 
  }

  getPoint() {
    var se=this;
    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetActionHistory',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'content-type': 'application/json',
            authorization: text
          }
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page= "cuspoints";
            error.func= "getPoint";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          }
          else{
            if(body){
              var item=JSON.parse(body);
              se.zone.run(()=>{
                se.actionHistory=item.actionHistory;
                se.actionHistory.forEach(element => {
                  if (element.actionName=="Đặt phòng khách sạn") {
                    element.contentNote="";
                    var note=element.note.split('|');
                    element.date= note[note.length-1];
                    for (let i = 0; i < note.length -1 ; i++) {
                      if (i==note.length -2) {
                        element.contentNote=element.contentNote+note[i]
                      }else{
                        element.contentNote=element.contentNote+note[i] + '|'
                      }
                    }
                  }else{
                    element.contentNote="";
                    var note=element.note.split('|');
                    element.date= note[0];
                    for (let i = 1; i < note.length ; i++) {
                      if (i==note.length - 1) {
                        element.contentNote=element.contentNote+note[i]
                      }else{
                        element.contentNote=element.contentNote+note[i] + '|'
                      }
                    }
                  }
                });
              })
              if(se.loader){
                se.loader.dismiss();
              }
            }else{
              if(response.statusCode == 400 || response.statusCode == 401){
                // if(se.isShowConfirm) return;
                // se.showConfirm("Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.");

              }else{
                se.actionHistory = [];
              }

            }
          }
          if(response.statusCode != 200){
            var objError ={
                page: "cuspoints",
                func: "getPoint",
                message : response.statusMessage,
                content : response.body,
                type: "warning",
                param: JSON.stringify(options)
              };
            C.writeErrorLog(objError,response);
          }
        
         // console.log(body);
        });
      }
    });
  }
  public async showConfirm(msg){
    let alert = await this.alertCtrl.create({
      message: msg,
      buttons: [
      {
        text: 'Để sau',
        handler: () => {
          this.storage.remove('auth_token');
          this.storage.remove('email');
          this.storage.remove('username');
          this.storage.remove('jti');
          this.storage.remove('point');
          this.zone.run(()=>{
            this.point = 0;
            this.valueGlobal.countNotifi = 0;
            })
          
          this.storage.remove('userInfoData');
          this.storage.remove('userRewardData');
          this.storage.remove('listblogtripdefault');
         
          if(this.modalCtrl){
            this.modalCtrl.dismiss();
          }
          this.navCtrl.navigateRoot('/')
        }
      },
      {
        text: 'Đăng nhập',
        role: 'OK',
        handler: () => {
          this.storage.remove('auth_token');
          this.storage.remove('email');
          this.storage.remove('username');
          this.storage.remove('jti');
          this.storage.remove('userInfoData');
          this.storage.remove('userRewardData');
          this.storage.remove('point');
          this.storage.remove('listblogtripdefault');
          this.zone.run(()=>{
            this.point = 0;
            this.valueGlobal.countNotifi = 0;
            })
          if(this.modalCtrl){
            this.modalCtrl.dismiss();
          }
          this.navCtrl.navigateForward('/login');
        }
      }
    ]
  });
  alert.present();
  }
  GetUserInfo() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
            var text = "Bearer " + auth_token;
            var options = {
                method: 'GET',
                url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                timeout: 10000,
                maxAttempts: 5,
                retryDelay: 2000,
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
            };
            request(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roomdetailreview",
                        func: "GetUserInfo",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    C.writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roomdetailreview";
                    error.func = "GetUserInfo";
                    error.param = JSON.stringify(options);
                    C.writeErrorLog(error, response);
                } else if (response.statusCode == 401) {
                    
                } else {
                    if (body) {
                        var data = JSON.parse(body);
                        se.expPointNowYear=data.expPointNowYear;
                          if (se.expPointNowYear > 0) {
                            var year = new Date(new Date().setFullYear(new Date().getFullYear()))
                            se.currentYear =  "31"+"-"+"12"+"-"+moment(year).format('YYYY');
                          }
                          se.expPointNextYear=data.expPointNextYear;
                          if (se.expPointNextYear > 0) {
              
                            var yearnew = moment(year).add(1, 'year').format('YYYY');
                            se.currentNextYear =  "31"+"-"+"12"+"-"+yearnew;

                          }
                        se.getPoint();
                    }

                }
            });
        }
    })
}
}
