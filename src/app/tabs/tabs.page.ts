import { Booking, ValueGlobal } from './../providers/book-service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Platform, ToastController, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SearchHotel } from 'src/app/providers/book-service';
import { NavController } from '@ionic/angular';
import { C } from './../providers/constants';
import { ActivityService, GlobalFunction } from './../providers/globalfunction';
import * as $ from 'jquery';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { Badge } from '@ionic-native/badge/ngx';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { tap } from 'rxjs/operators';
import { FCM } from '@ionic-native/fcm/ngx';
import { NetworkProvider } from '../network-provider.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Market } from '@ionic-native/market/ngx';
import { flightService } from '../providers/flightService';
import * as moment from 'moment';
import {tourService} from '../providers/tourService';
import { resolve } from 'dns';
 
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  countmessage: number;
  intervalNoti: NodeJS.Timeout;
  phone: any;
  email: any;
  appversion: string;
  username: string;
  listStatus: any;

  constructor(public platform: Platform, private router: Router, private activeRoute: ActivatedRoute, private modalCtrl: ModalController,
    public searchhotel: SearchHotel, private navCtrl: NavController, public gf: GlobalFunction, public booking: Booking,
    private storage: Storage,
    private zone: NgZone,
    public valueGlobal: ValueGlobal,
    public badge: Badge,
    private fcm: FirebaseMessaging,
    private fcmNative: FCM,
    private toastCrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    public networkProvider: NetworkProvider,
    private appVersion: AppVersion,
    private market: Market,
    public _flightService: flightService,
    public activityService: ActivityService,
    public tourService: tourService) { }

  ngOnInit() {
    //get phone
    this.storage.get('phone').then(data =>{
      if(data){
        this.phone = data;
      }
    })
    //get email
    this.storage.get('email').then(e =>{
      if(e){
        this.email = e;
      }
    })
    //get email
    this.storage.get('username').then(username =>{
      if(username){
        this.username = username;
      }
    })
    //Lấy app version
    this.appVersion.getVersionNumber().then(version => {
      this.appversion=version;
    })
    //Xử lý nút back của dt
    try{
    this.platform.ready().then(() => {
      document.addEventListener("backbutton", async () => {
          if (this.router.url.indexOf("tab1") != -1 || this.router.url.indexOf("login") != -1) {
            const element = await this.modalCtrl.getTop();
            if (element) {
              element.dismiss();
            } else {
              navigator['app'].exitApp();
            }
          } else {
            if (this.router.url.indexOf("hotellist") != -1 || this.router.url.indexOf("searchhotel") != -1) {
              this.navCtrl.navigateBack('/');
              
            }
            else if (this.router.url.indexOf("roompaymentdone") != -1) {
              this.navCtrl.navigateBack('/');
              
            }
            else if (this.router.url.indexOf("roompaymentdoneean") != -1) {
              this.navCtrl.navigateBack('/');
              
            }
            else if(this.router.url.indexOf("bloglist") != -1){
              // this.navCtrl.navigateBack('/flightcomboreviews');
              this.navCtrl.navigateBack('/');
            }
            else if(this.router.url.indexOf("blog") != -1)
            {
              if (this.searchhotel.backPage=="bloglist") {
                this.navCtrl.navigateBack('bloglist');
              }
              else
              {
                this.navCtrl.navigateBack('/');
              }
            }
            else if (this.router.url.indexOf("hoteldetail") != -1) {
              const element = await this.modalCtrl.getTop();
              if (element) {
                element.dismiss();
              } else {
                if (this.searchhotel.rootPage == "mainpage" || this.searchhotel.rootPage == "topdeal"|| this.searchhotel.rootPage == "roompaymentselect-ean" || this.searchhotel.rootPage == "roomchoosebank") {
                  this.navCtrl.navigateBack('/');
                }
                else if(this.searchhotel.rootPage == "likepage"){
                  this.navCtrl.navigateBack(['/app/tabs/tab2']);
                  return;
                }
                else {
                  if (this.searchhotel.rootPage == "listpage") {
                    this.navCtrl.navigateBack('/hotellist/false');
                    //this.navCtrl.navigateForward(['/app/tabs/hotellist/false']);
                  } else if (this.searchhotel.rootPage == "listmood") {
                    let hotellistmoodparams = this.gf.getParams('hotellistmood')
                    if (hotellistmoodparams) {
                      this.navCtrl.navigateForward('/hotellistmood/' + hotellistmoodparams.moodid + '/' + hotellistmoodparams.title);
                      //this.navCtrl.navigateForward(['/app/tabs/hotellistmood/'+ hotellistmoodparams.moodid + '/' + hotellistmoodparams.title]);
                    } else {
                      this.navCtrl.back();
                    }
  
                  } else {
                    //console.log(this.searchhotel.rootPage +'_'+ element ? 'true' : 'false');
                    this.navCtrl.navigateBack('/');
                  }
                }
              }
            } else if (this.router.url.indexOf("hotelreviews") != -1
              || this.router.url.indexOf("hoteldescription") != -1
              || this.router.url.indexOf("policy") != -1
              || this.router.url.indexOf("facilities") != -1
              || this.router.url.indexOf("hotelroomdetail") != -1
              || this.router.url.indexOf("occupancy") != -1){
                this.navCtrl.back();
            }
           else if (this.router.url.indexOf("hotelreviews") != -1
            || this.router.url.indexOf("hoteldescription") != -1
            || this.router.url.indexOf("policy") != -1
            || this.router.url.indexOf("facilities") != -1
            || this.router.url.indexOf("hotelroomdetail") != -1
            || this.router.url.indexOf("occupancy") != -1|| this.router.url.indexOf("login") != -1|| this.router.url.indexOf("loginusername") != -1|| this.router.url.indexOf("register") != -1){
              this.navCtrl.back();
            
          }
          else if (this.router.url.indexOf("mytripbookingdetail") != -1){
            this.navCtrl.navigateBack(['/app/tabs/tab3/']);
            
          }
          else if (this.router.url.indexOf("tripweather") != -1
          || this.router.url.indexOf("hotelnotes") != -1
          || this.router.url.indexOf("hotelexpsnotes") != -1
          || this.router.url.indexOf("tripweather") != -1
          ) {
              this.navCtrl.back();
            
          }else if(this.router.url.indexOf("tab2") != -1
          || this.router.url.indexOf("tab3") != -1
          || this.router.url.indexOf("tab4") != -1
          || this.router.url.indexOf("tab5") != -1){
            this.navCtrl.navigateBack('/');
          }else if (this.router.url.indexOf("roomadddetails") != -1 ) {
              this.navCtrl.navigateBack('roomdetailreview');
              
            }
            else if (this.router.url.indexOf("tripweather") != -1
            || this.router.url.indexOf("hotelnotes") != -1
            || this.router.url.indexOf("hotelexpsnotes") != -1
            || this.router.url.indexOf("tripweather") != -1
            ) {
                this.navCtrl.back();
              
            }else if(this.router.url.indexOf("tab2") != -1
            || this.router.url.indexOf("tab3") != -1
            || this.router.url.indexOf("tab4") != -1
            || this.router.url.indexOf("tab5") != -1){
              this.navCtrl.navigateBack(['/app/tabs/tab1']);
            }else if (this.router.url.indexOf("roomadddetails") != -1 ) {
                this.navCtrl.navigateBack('roomdetailreview');
                
            }
            else if(this.router.url.indexOf("userprofile") != -1
            || this.router.url.indexOf("userreviews") != -1
            || this.router.url.indexOf("userreward") != -1
            || this.router.url.indexOf("cuspoints") != -1)
            {
              this.navCtrl.navigateBack(['/app/tabs/tab5']);
            }
            else if (this.router.url.indexOf("roomadddetails-ean") != -1 ) {
              this.navCtrl.navigateBack('roomdetailreview');
              
          }
            else if(this.router.url.indexOf("roompaymentselect") != -1)
            {
              if (this.searchhotel.backPage=="roompaymentselect-ean") {
                this.navCtrl.navigateBack('roomadddetails-ean');
                
              } else {
                this.navCtrl.navigateBack('roomadddetails');
                
              }
         
            }
            else if(this.router.url.indexOf("roompaymentlive") != -1)
            {
              if (this.searchhotel.backPage=="roompaymentselect-ean") {
                this.navCtrl.navigateBack('roompaymentselect-ean');
                
              } else {
                this.navCtrl.navigateBack('roompaymentselect');
                
              }
            }
  
            else if(this.router.url.indexOf("roompaymentbank") != -1)
            {
              if (this.searchhotel.backPage=="roompaymentselect-ean") {
                this.navCtrl.navigateBack('roompaymentselect-ean');
                
              } else {
                this.navCtrl.navigateBack('roompaymentselect');
                
              }
            }
  
            else if(this.router.url.indexOf("roompaymentatm") != -1)
            {
              if (this.searchhotel.backPage=="roompaymentselect-ean") {
                this.navCtrl.navigateBack('roompaymentselect-ean');
                
              } else {
                this.navCtrl.navigateBack('roompaymentselect');
                
              }
            }
            
            else if (this.router.url.indexOf("roomdetailreview") != -1) {
              this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
              //this.navCtrl.navigateForward(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
            }
            else if (this.router.url.indexOf("onepay") != -1) {
              this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
              //this.navCtrl.navigateForward(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
            }
            else if(this.router.url.indexOf('roomcancel')){
              if(this.searchhotel.backPage == "roomdetailreview"){
                this.navCtrl.navigateBack('/roomdetailreview');
                
              }else if(this.searchhotel.backPage == "roompaymentselect"){
                this.navCtrl.navigateBack('/roompaymentselect');
                
              }
              else if(this.searchhotel.backPage == "roompaymentselect-ean"){
                this.navCtrl.navigateBack('/roompaymentselect-ean');
                
              }else if(this.searchhotel.backPage ="mytripbookingdetail"){
                this.navCtrl.navigateBack('/mytripbookingdetail');
              }
            }
            else if(this.router.url.indexOf("roompaymentbreakdow") != -1){
              if(this.searchhotel.backPage == "roomdetailreview"){
                this.navCtrl.navigateBack('/roomdetailreview');
                
              }else if(this.searchhotel.backPage == "roompaymentselect"){
                this.navCtrl.navigateBack('/roompaymentselect');
                
              }
              else if(this.searchhotel.backPage == "roompaymentselect-ean"){
                this.navCtrl.navigateBack('/roompaymentselect-ean');
                
              }
            }
            else if(this.router.url.indexOf("flightcomboreviews") != -1){
              const element = await this.modalCtrl.getTop();
              if (element) {
                element.dismiss();
              } else {
              this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
              //this.navCtrl.navigateForward(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
              }
            }
            else if(this.router.url.indexOf("flightcomboadddetails") != -1){
              this.navCtrl.navigateBack('/flightcomboreviews');
            }
            else if(this.router.url.indexOf("flightcombopaymentdone") != -1){
              this.navCtrl.navigateBack('/');
            }
            else {
              this.navCtrl.navigateBack('/');
            }
          }
        })

        // this.fcmNative.onNotification().subscribe( (data:any)=>{
        //   if(data.wasTapped && !this.valueGlobal.wasTappedNoti){
        //     this.showNotification(data);
        //     this.valueGlobal.wasTappedNoti = true;
        //     //update lại trạng thái bkg
        //     this.loadNotificationAndUpdateState(data.BookingCode);
        //   } else {
        //     //console.log("Received in foreground");
        //     this.zone.run(()=>{
        //       this.countmessage++;
        //       this.valueGlobal.countNotifi++;
        //       this.badge.set(this.countmessage);
        //     })
        //     this.showActionSheetNoti(data);
        //   };

        //   // this.fcmNative.getToken().then(token => {
        //   //   this.storage.get('checktoken').then(checktoken => {
        //   //     if (!checktoken) {
        //   //       this.storage.set('checktoken',"1");
        //   //       //PDANH 19/07/2019: Push memberid & devicetoken
        //   //         this.gf.pushTokenAndMemberID("", token, this.appversion);
        //   //       }
        //   //   })
         
        //   // });
        //   // this.fcmNative.onTokenRefresh().subscribe(token =>{
        //   //   //PDANH 19/07/2019: Push memberid & devicetoken
        //   //   this.storage.get('auth_token').then(auth_token =>{
        //   //     if(token){
        //   //       this.storage.set('deviceToken',token);
        //   //       this.gf.pushTokenAndMemberID(auth_token, token, this.appversion);
        //   //     }
        //   //   })
            
        //   // })
        // })

        

      })
    }
    catch(error){
      error.page = "tabspage";
      error.func = "handleBackButton";
      error.param =  this.router.url;
      C.writeErrorLog(error,null);
    }

    
  }
    /**
     * Load thông báo của user
     */
    loadNotificationAndUpdateState(bookingCode){
      var se = this;
      
      if (!this.networkProvider.isOnline()) {
        this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        return;
      }
      se.storage.get('auth_token').then(auth_token => {
          if (auth_token) {
              var text = "Bearer " + auth_token;
              var options = {
              method: 'GET',
              url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/GetNotificationByUser',
              timeout: 10000, maxAttempts: 5, retryDelay: 2000,
              headers:
              {
                  'cache-control': 'no-cache',
                  'content-type': 'application/json',
                  authorization: text
              }
              };
              request(options, function (error, response, body) {
              if (error) {
                  error.page = "inbox";
                  error.func = "loadUserNotification";
                  error.param =  JSON.stringify(options);
                  C.writeErrorLog(error,response);
              }else{
                  if(body && body != "[]"){
                      var data = JSON.parse(body);
                      if(data && data.length >0){

                        data.forEach(element => {
                          if(element.bookingCode == bookingCode){
                                se.callUpdateStatus(element);
                          }
                        });
                      }
                  }
              }
              });
          }
      })
    }

    /**
     * Hàm update trạng thái đã đọc thông báo
     */
    callUpdateStatus(item){
      var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                method: 'POST',
                url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/UpdateStatusNotificationOfUser',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers:
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                },
                body: {
                  "id": item.id,
                  "phoneNumber": se.phone,
                  "email": se.email,
                  "memberId": auth_token,
                  "switchTypeOf": item.NotifyType,
                  "switchAction": item.notifyAction,
                  "switchObj": item.switchObj,
                  "title": item.title,
                  "message": item.message,
                  "status": 1
                },
                json: true,
                };
                request(options, function (error, response, body) {
                if (error) {
                    error.page = "inbox";
                    error.func = "loadUserNotification";
                    error.param =  JSON.stringify(options);
                    C.writeErrorLog(error,response);
                }else{
                  se.loadUserNotificationStatus();
                }

                });
            }
        })
    }
    loadUserNotificationStatus() {
      var se = this;
      se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
            var text = "Bearer " + auth_token;
            var options = {
              method: 'GET',
              url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/GetNotificationStatus',
              timeout: 10000, maxAttempts: 5, retryDelay: 2000,
              headers:
              {
                  'cache-control': 'no-cache',
                  'content-type': 'application/json',
                  authorization: text
              }
              };
              request(options, function (error, response, body) {
              if (error) {
                  error.page = "inbox";
                  error.func = "loadUserNotification";
                  error.param =  JSON.stringify(options);
                  C.writeErrorLog(error,response);
              }else{
                  if(body && body != "[]"){
                    se.listStatus = JSON.parse(body);
                  }
                  se.loadUserNotification();
              }
              });
        }
      })
    }
  showNotification(data){
    //chuyển qua tab mytrip
    if(data && data.BookingCode && data.notifyAction != "cancel"){
      if(data.notifyAction == "sharereviewofhotel"){
        // this.setNotification(data,"product");
        this.navCtrl.navigateForward(['/app/tabs/tab3']);
        this.gf.setParams(data.BookingCode,'notifiBookingCode');
        this.gf.setParams(2,'selectedTab3');
      }
      else if(data.NotifyType == "blog" && data.notifyAction == "blogofmytrip"){
        // this.setNotification(data,"product");
        this.valueGlobal.backValue = "tab4";
        this.navCtrl.navigateForward("/blog/" + data.BookingCode);
      }
      else if(data.NotifyType == "fly" && data.notifyAction == "flychangeinfo"){
        // this.setNotification(data,"product");
        this.navCtrl.navigateForward(['/app/tabs/tab3']);
        this.gf.setParams(data.BookingCode,'notifiBookingCode');
        this.gf.setParams(data.switchObj,'notifiSwitchObj');
      }
      else{
        this.gf.setParams(data.BookingCode,'notifiBookingCode');
        //this.navCtrl.navigateForward(['/app/tabs/tab3']);
        console.log(data.BookingCode);
        this.mapBookingAndPayment(data.BookingCode);
      }
    }else{
      //show notifi
      if(data.updateNewVersion){
        // this.setNotification(data,"product");
        this.gotoAppStore();
      }
      else if(data.activeTab){
        this.valueGlobal.backValue = "homeflight";
      }
      else if(data.dataLink){
        if(data.dataLink.indexOf('tourdetail') != -1){
          // this.setNotification(data,"product");
          let arr = data.dataLink.replace('/','').split('/');
          if(arr && arr.length ==2){
           this.loadTopSale(arr[1]);
          }
        
        }else {
          // this.setNotification(data,"product");
          this.navCtrl.navigateForward(data.dataLink);
        }
        
      }
      else if(data.flyNotify){
        if(data.flyNotify == '1'){
          this._flightService.itemTabFlightActive.emit(true);
          // this.setNotification(data,"product");
          this.valueGlobal.backValue = "homeflight";
          this.navCtrl.navigateForward('/tabs/tab1');
        }else{
          let _params = data.flyNotify.split('&');
          this.gotoFlightSearchPage(_params);
        }
        
      }
      else if (data.customParamNoti) {
        let msg ='';
        msg = data.message;
        if(msg.indexOf('@param1') != -1){
          msg =msg.replace('@param1', data.param1);
        }
        if(msg.indexOf('@param2') != -1){
          msg =msg.replace('@param2', data.param2);
        }
        if(msg.indexOf('@param3') != -1){
          msg =msg.replace('@param3', data.param3);
        }
        if(msg.indexOf('@param4') != -1){
          msg =msg.replace('@param4', data.param4);
        }
        if(msg.indexOf('@param5') != -1){
          msg =msg.replace('@param5', data.param5);
        }
        if(msg.indexOf('@param6') != -1){
          msg =msg.replace('@param6', data.param6);
        }
        if(msg.indexOf('@param7') != -1){
          msg =msg.replace('@param7', data.param7);
        }
        if(msg.indexOf('@param8') != -1){
          msg =msg.replace('@param8', data.param8);
        }
        if(msg.indexOf('@param9') != -1){
          msg =msg.replace('@param9', data.param9);
        }
        if(msg.indexOf('@param10') != -1){
          msg =msg.replace('@param10', data.param10);
        }
        if(msg.indexOf('Chúc') != -1){
          msg =msg.replace('Chúc Quý Khách Hàng', 'Chúc '+ this.username);
        }
        this.showToast(msg);
      }
      
      else{
        this.showToast(data.message);
      }
      
    }
    this.loadNotificationAndUpdateState(data.BookingCode)
  }
  

  async showActionSheetNoti(data){
    var se = this;
    var iconStr='ic_home';
    var subclass ='';
    if(data.NotifyType == 'bookingbegoingcombotransfer'){
      iconStr = 'ic_bus2';
    }else if(data.NotifyType == 'blog' || data.notifyAction == 'blogofmytrip')
    {
      // se.setNotification(data,"product");
      iconStr = 'ic_message';
    }
    else if(data.notifyAction == 'bookingbegoingcombofly' || data.notifyAction == 'flychangeinfo')
    {
      iconStr = 'ic_paper';
    }
    if(data.notifyAction == 'cancel'){
      subclass = 'fixheight-90';
    }

    if(data.notifyAction == 'flychangeinfo' || data.notifyAction == 'blogofmytrip'){
      subclass = 'fixheight-44';
    }
    var msg = data.message;
    if(data.dataLink){
      if(data.dataLink.indexOf('tourdetail') != -1){
        // this.setNotification(data,"product");
        let arr = data.dataLink.replace('/','').split('/');
        if(arr && arr.length ==2){
          this.tourService.tourDetailId = arr[1];
          this.tourService.backPage = 'hometour';
          this.navCtrl.navigateForward('/tourdetail');
        }
      } else {
        // se.setNotification(data,"product");
        se.navCtrl.navigateForward(data.dataLink);
      }
      
    }
    else if(data.flyNotify){
      // se.setNotification(data,"product");
      se._flightService.itemTabFlightActive.emit(true);
      se.valueGlobal.backValue = "homeflight";
      se.navCtrl.navigateForward('/tabs/tab1');
    }
    else if(data.activeTab){
      se.valueGlobal.backValue = "homeflight";
    }
    else if (data.customParamNoti) {
      if(msg.indexOf('@param1') != -1){
        msg = msg.replace('@param1', data.param1);
      }
      if(msg.indexOf('@param2') != -1){
        msg = msg.replace('@param2', data.param2);
      }
      if(msg.indexOf('@param3') != -1){
        msg = msg.replace('@param3', data.param3);
      }
      if(msg.indexOf('@param4') != -1){
        msg = msg.replace('@param4', data.param4);
      }
      if(msg.indexOf('@param5') != -1){
        msg = msg.replace('@param5', data.param5);
      }
      if(msg.indexOf('@param6') != -1){
        msg = msg.replace('@param6', data.param6);
      }
      if(msg.indexOf('@param7') != -1){
        msg = msg.replace('@param7', data.param7);
      }
      if(msg.indexOf('@param8') != -1){
        msg = msg.replace('@param8', data.param8);
      }
      if(msg.indexOf('@param9') != -1){
        msg = msg.replace('@param9', data.param9);
      }
      if(msg.indexOf('@param10') != -1){
        msg = msg.replace('@param10', data.param10);
      }
      if(msg.indexOf('Chúc') != -1){
        msg = msg.replace('Chúc Quý Khách Hàng', 'Chúc '+ this.username);
      }
      subclass = 'fixheight-44';
      if(data.height){
        subclass = 'fixheight-'+data.height;
      }
    }
    
    if(data.notifyType == "alert"){
      se.presentToastNotifi(data.message);
    }else{
      let actionSheet = await se.actionSheetCtrl.create({
        cssClass: 'action-sheets-notification '+iconStr + ' '+subclass,
        header: data.title,
        animated: true,
        backdropDismiss: true,
        mode: 'ios',
        buttons: [
          {
            text: msg,
            handler: () => {
              se.showNotification(data);
            }
          }
        ]
      });
      actionSheet.present();
      setTimeout(()=>{
          actionSheet.dismiss(); 
      },5000)
    }
    
  }

   /**
   * Hàm show cảnh báo
   */
    async presentToastNotifi(msg) {
      const toast = await this.toastCrl.create({
        message: msg,
        duration: 3000,
        position: 'top',
      });
      toast.present();
    }

  async showToast(msg){
    let toast = await this.toastCrl.create({
        message: msg,
        position: 'top',
        duration: 5000
    })

    toast.present();
  }

  async clickedElement(e: any) {
    var obj: any = e.currentTarget;
    var items = $(obj).siblings('ion-tab-button');
    if(items && items.length >0){
      for (let index = 0; index < items.length; index++) {
        const element = items[index];
        $(element).attr('aria-selected','false');
      }
    }
    //refresh lại count notifi
    if(obj.id != "tab-button-tab4"){
      this.loadUserNotificationStatus();
    }

    if(obj.id != "tab-button-tab1"){
      var se = this;
      let el = document.getElementsByClassName('div-statusbar-float');
        el[0].classList.remove('float-statusbar-enabled');
        el[0].classList.add('float-statusbar-disabled');
      }
  }

  ionViewWillLeave(){
    clearInterval(this.intervalNoti);
  }

  ionViewWillEnter(){
    this.loadUserNotificationStatus();
    
    var el = document.getElementsByClassName('tab-button');
    $('.tab-button').click(e => this.clickedElement(e));
    //Xử lý nút back của dt
    this.platform.ready().then(() => {

      setTimeout(()=>{
        this.fcmNative.onNotification().subscribe( (data:any)=>{
          if(data.wasTapped&& !this.valueGlobal.wasTappedNoti){
            this.valueGlobal.wasTappedNoti = true;
            this.showNotification(data);
            //update lại trạng thái bkg
            this.loadNotificationAndUpdateState(data.BookingCode);
          } else {
            //console.log("Received in foreground");
            this.valueGlobal.wasTappedNoti = false;
            this.zone.run(()=>{
              this.countmessage++;
              this.valueGlobal.countNotifi++;
              this.badge.set(this.countmessage);
            })
            this.showActionSheetNoti(data);
          };
          
          this.fcmNative.onTokenRefresh().subscribe(token =>{
            this.storage.set('deviceToken',token);
            //PDANH 19/07/2019: Push memberid & devicetoken
            this.storage.get('auth_token').then(auth_token =>{
              if(token){
                this.gf.pushTokenAndMemberID(auth_token, token, this.appversion);
              }
            })
            
          })
        })
      },700)

      document.addEventListener("backbutton", async () => {
        if (this.router.url.indexOf("tab1") != -1 || this.router.url.indexOf("login") != -1) {
          const element = await this.modalCtrl.getTop();
          if (element) {
            element.dismiss();
          } else {
            navigator['app'].exitApp();
          }
        } else {
          if (this.router.url.indexOf("hotellist") != -1 || this.router.url.indexOf("searchhotel") != -1) {
            this.searchhotel.arrlocalcheck = [];
            this.navCtrl.navigateBack('/');
            
          }
          else if (this.router.url.indexOf("roompaymentdone") != -1) {
            this.navCtrl.navigateBack('/');
            
          }
          else if (this.router.url.indexOf("roompaymentdoneean") != -1) {
            this.navCtrl.navigateBack('/');
            
          }
          else if (this.router.url.indexOf("hoteldetail") != -1) {
            
            const element = await this.modalCtrl.getTop();
            if (element) {
              element.dismiss();
            } else {
              if (this.searchhotel.rootPage == "mainpage" || this.searchhotel.rootPage == "topdeal") {
                this.navCtrl.navigateBack('/');
              }
              else if(this.searchhotel.rootPage == "likepage"){
                this.navCtrl.navigateBack(['/app/tabs/tab2/']);
                return;
              }
              else if(this.searchhotel.rootPage == "MyTrip"){
                this.navCtrl.navigateBack(['/app/tabs/tab3/']);
              }
              else {
                if (this.searchhotel.rootPage == "listpage") {
                  this.navCtrl.navigateBack('/hotellist/false');
                  //this.navCtrl.navigateForward(['/app/tabs/hotellist/true']);
                } else if (this.searchhotel.rootPage == "listmood") {
                  let hotellistmoodparams = this.gf.getParams('hotellistmood')
                  if (hotellistmoodparams) {
                    this.navCtrl.navigateForward('/hotellistmood/' + hotellistmoodparams.moodid + '/' + hotellistmoodparams.title);
                    //this.navCtrl.navigateForward(['/app/tabs/hotellistmood/'+ hotellistmoodparams.moodid + '/' + hotellistmoodparams.title]);
                  } else {
                    this.navCtrl.back();
                  }

                } else {
                  console.log(this.searchhotel.rootPage +'_'+ element ? 'true' : 'false');
                  this.navCtrl.navigateBack('/');
                }
              }
            }
          } else if (this.router.url.indexOf("hotelreviews") != -1
            || this.router.url.indexOf("hoteldescription") != -1
            || this.router.url.indexOf("policy") != -1
            || this.router.url.indexOf("facilities") != -1
            || this.router.url.indexOf("hotelroomdetail") != -1
            || this.router.url.indexOf("occupancy") != -1){
              this.navCtrl.back();
            
          }
          else if (this.router.url.indexOf("mytripbookingdetail") != -1){
            this.navCtrl.navigateBack(['/app/tabs/tab3/']);
          }
          else if (this.router.url.indexOf("tripweather") != -1
          || this.router.url.indexOf("hotelnotes") != -1
          || this.router.url.indexOf("hotelexpsnotes") != -1
          || this.router.url.indexOf("tripweather") != -1
          ) {
              this.navCtrl.back();
            
          }else if(this.router.url.indexOf("tab2") != -1
          || this.router.url.indexOf("tab3") != -1
          || this.router.url.indexOf("tab4") != -1
          || this.router.url.indexOf("tab5") != -1){
            this.navCtrl.navigateBack('/');
          }else if (this.router.url.indexOf("roomadddetails") != -1 ) {
              this.navCtrl.navigateBack('roomdetailreview');
          }
          else if(this.router.url.indexOf("userprofile") != -1
          || this.router.url.indexOf("userreviews") != -1
          || this.router.url.indexOf("userreward") != -1
          || this.router.url.indexOf("cuspoints") != -1)
          {
            this.navCtrl.navigateBack(['/app/tabs/tab5/']);
          }
          
          else if (this.router.url.indexOf("roomadddetails-ean") != -1 ) {
            this.navCtrl.navigateBack('roomdetailreview');
            
        }
          else if(this.router.url.indexOf("roompaymentselect") != -1)
          {
            if (this.searchhotel.backPage=="roompaymentselect-ean") {
              this.navCtrl.navigateBack('roomadddetails-ean');
              
            } else {
              this.navCtrl.navigateBack('roomadddetails');
              
            }
       
          }
          else if(this.router.url.indexOf("roompaymentlive") != -1)
          {
            if (this.searchhotel.backPage=="roompaymentselect-ean") {
              this.navCtrl.navigateBack('roompaymentselect-ean');
              
            } else {
              this.navCtrl.navigateBack('roompaymentselect');
              
            }
          }
          else if(this.router.url.indexOf("flightcomboreviews") != -1){
            const element = await this.modalCtrl.getTop();
            if (element) {
              element.dismiss();
            } else {
            this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
            //this.navCtrl.navigateForward(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
            }
          }
          else if(this.router.url.indexOf("flightcomboadddetails") != -1){
            this.navCtrl.navigateBack('/flightcomboreviews');
          }
          else if(this.router.url.indexOf("flightcombopaymentdone") != -1){
            this.navCtrl.navigateBack('/');
          }
          else if(this.router.url.indexOf("roompaymentbank") != -1)
          {
            if (this.searchhotel.backPage=="roompaymentselect-ean") {
              this.navCtrl.navigateBack('roompaymentselect-ean');
              
            } else {
              this.navCtrl.navigateBack('roompaymentselect');
              
            }
          }

          else if(this.router.url.indexOf("roompaymentatm") != -1)
          {
            if (this.searchhotel.backPage=="roompaymentselect-ean") {
              this.navCtrl.navigateBack('roompaymentselect-ean');
              
            } else {
              this.navCtrl.navigateBack('roompaymentselect');
              
            }
          }
          
          else if (this.router.url.indexOf("roomdetailreview") != -1) {
            this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
            //this.navCtrl.navigateForward(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
          }
          else if (this.router.url.indexOf("onepay") != -1) {
            this.navCtrl.navigateBack('/hoteldetail/' + this.booking.HotelId);
            //this.navCtrl.navigateForward(['/app/tabs/hoteldetail/'+this.booking.HotelId]);
          }
          else if(this.router.url.indexOf('roomcancel')){
            if(this.searchhotel.backPage == "roomdetailreview"){
              this.navCtrl.navigateBack('/roomdetailreview');
              
            }else if(this.searchhotel.backPage == "roompaymentselect"){
              this.navCtrl.navigateBack('/roompaymentselect');
              
            }
            else if(this.searchhotel.backPage == "roompaymentselect-ean"){
              this.navCtrl.navigateBack('/roompaymentselect-ean');
              
            }else if(this.searchhotel.backPage ="mytripbookingdetail"){
              this.navCtrl.navigateBack('/mytripbookingdetail');
            }
          }
          else if(this.router.url.indexOf("roompaymentbreakdow") != -1){
            if(this.searchhotel.backPage == "roomdetailreview"){
              this.navCtrl.navigateBack('/roomdetailreview');
              
            }else if(this.searchhotel.backPage == "roompaymentselect"){
              this.navCtrl.navigateBack('/roompaymentselect');
              
            }
            else if(this.searchhotel.backPage == "roompaymentselect-ean"){
              this.navCtrl.navigateBack('/roompaymentselect-ean');
              
            }
          }
          else {
            alert(this.router.url);
            this.navCtrl.navigateBack('/');
          }

        }
          
      })
    })
   //this.refreshToken();
  }

  /**
     * Load thông báo của user
     */
    loadUserNotification(){
      var se = this;
      se.storage.get('auth_token').then(auth_token => {
          if (auth_token) {
              var text = "Bearer " + auth_token;
              var options = {
              method: 'GET',
              url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/GetNotificationByUserIVV?pageIndex=1&pageSize=1500' ,
              timeout: 10000, maxAttempts: 5, retryDelay: 2000,
              headers:
              {
                  'cache-control': 'no-cache',
                  'content-type': 'application/json',
                  authorization: text
              }
              };
              request(options, function (error, response, body) {
              if (error) {
                  error.page = "inbox";
                  error.func = "loadUserNotification";
                  error.param =  JSON.stringify(options);
                  C.writeErrorLog(error,response);
              }else{
                  if(body && body != "[]"){
                      var data = JSON.parse(body);
                      if(data && data.length >0){
                        se.storage.get('listUserNotification').then((datanoti)=> {
                          if(datanoti){
                            se.storage.remove('listUserNotification').then(()=>{
                              se.storage.set('listUserNotification', data);
                            })
                          }else{
                            se.storage.set('listUserNotification', data);
                          }
                        })
                        
                        se.zone.run(async ()=>{
                          let timeCheckAll = await se.storage.get('timeCheckAll');
                          data.forEach(element =>{
                            if (element.memberId=='alluser') {
                              element.status=0;
                              if (se.listStatus && se.listStatus.length>0) {
                                  if(se.checkItemInArray(element.id)){
                                      element.status=1;
                                    }
                              }
                            }
                            if(timeCheckAll){
                              element.hascheckall = moment(timeCheckAll).diff(element.created, 'second') >0;
                            }
                          })
                          
                         
                          let countNoti = data.filter(item=>{ return item.status == 0 && !item.hascheckall }).length;
                          if(se.valueGlobal.updatedLastestVersion){
                            countNoti ++;
                          }
                          if(countNoti <0){
                            countNoti =0;
                          }
                          se.valueGlobal.countNotifi = countNoti;
                          se.countmessage = se.valueGlobal.countNotifi;
                          se.badge.set(countNoti);
                          se.fcm.setBadge(countNoti);
                        })
                      }
                  }else{
                    se.countmessage = 0;
                    se.badge.set(0);
                  }
              }
              });
          }else{
            se.countmessage = 0;
            se.valueGlobal.countNotifi = 0;
            se.badge.set(0);
            se.fcm.setBadge(0);
          }
      })
  }
  checkItemInArray(id){
    
    var co=false;
    for (let i = 0; i < this.listStatus.length; i++) {
      const element = this.listStatus[i];
      if (element==id) {
        co= true;
        break;
      }
    }
    return co;
  }
  gotoAppStore(){
    this.market.open('https://apps.apple.com/us/app/ivivu-com-k%E1%BB%B3-ngh%E1%BB%89-tuy%E1%BB%87t-v%E1%BB%9Di/id1464844301?uo=4');
  }

  refreshToken() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
        }
        request(options, function (error, response, body) {
          if (error) {
            error.page = "tabpage";
            error.func = "refreshToken";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          } else {
            var json=JSON.parse(body);
            if (json.auth_token) {
              se.storage.remove('auth_token');
              se.storage.set("auth_token", json.auth_token);
            }
          }
        })
      }
    })
  }


  mapBookingAndPayment(BookingCode: any) {
    let se = this;
    if(BookingCode){
      //Map số bkg trong listtrip để focus vào bkg được notifi
      se.getdatamytrip().then((data) => {
   
        se.gf.hideLoading();
       
        // setTimeout(()=>{
          var idxMap = data.map( (item,index) =>{ 
            return item.booking_id == se.gf.getParams('notifiBookingCode');
          });
          var itemMap = data.filter((item) => { return item.booking_id == se.gf.getParams('notifiBookingCode')});
          if(itemMap && itemMap.length>0){
            let idx = idxMap.findIndex((el)=>{ return el == true});
            //Đã thanh toán về mytrip
            // if(itemMap[0].payment_status == 1 || itemMap[0].payment_status == 5){
            //   se.navCtrl.navigateForward(['/app/tabs/tab3']);
            // }else{//Chưa thanh toán về trang thanh toán
            //   se.paymentselect(itemMap[0], idx);
            // }
            se.checkPayment(BookingCode,itemMap[0],idx);
          }
        // },500)
      })
      
    }
  }

  getdatamytrip(): Promise<any> {
    var se = this;
    se.gf.showLoading();
    return new Promise((resolve, reject) => {
      se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=false&pageIndex=1&pageSize=25',
            headers:
            {
              'accept': 'application/json',
              'content-type': 'application/json-patch+json',
              authorization: text
            }
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "mytrips";
              error.func = "getdata";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error,response);
            }
            else if (response.statusCode == 401) {
              se.storage.get('jti').then((memberid) => {
                se.storage.get('deviceToken').then((devicetoken) => {
                  se.gf.refreshToken(memberid, devicetoken).then((token) => {
                    setTimeout(() => {
                      se.getdatanewtoken(token, false);
                    }, 100)
                  });
  
                })
              })
            }
            else {
              if (body) {
                se.zone.run(() => {
                  let lstTrips = JSON.parse(body);
                   resolve(lstTrips.trips);
                });
              } 
            }
          });
        } 
      });
    })
    
  }

  getdatanewtoken(token, ishistory) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      if (token) {
        var text = "Bearer " + token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory='+ishistory+'&pageIndex=1&pageSize=25',
          headers:
          {
            'accept': 'application/json',
            'content-type': 'application/json-patch+json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "mytrips";
            error.func = "getdata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          }
  
          else {
            if (body) {
              if (body) {
                se.zone.run(() => {
                  let lstTrips = JSON.parse(body);
                   resolve(lstTrips.trips);
                });
              } 
            } 
  
          }
  
        });
      } 
    })
   
  }

  paymentselect(trip, tripidx)
  {
    var se= this;
    if(trip.amount_after_tax){
      trip.priceShow = trip.amount_after_tax;
    }
    se.activityService.objPaymentMytrip = { returnPage : 'mytrip', tripindex: tripidx, paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };
    se.activityService.backValue = 'tab3';
    if (trip.booking_type == 'COMBO_FLIGHT') {
      if (!(trip.pay_method==51||trip.pay_method==2||trip.pay_method==3)) {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/1");
      }
    } else if (trip.booking_type == 'COMBO_VXR') {
      if (!(trip.pay_method==51||trip.pay_method==2||trip.pay_method==3)) {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/1");
      }
     
    }else{
      if (!(trip.pay_method==51||trip.pay_method==2||trip.pay_method==3)) {
        se.navCtrl.navigateForward("/mytripaymentselect/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentselect/1");
      }
    
    }
    C.writePaymentLog("notify", "paymentselect", "purchase", trip.HotelIdERP);
  }
  checkPayment(bookingCode,item,idx){
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlPost + '/mCheckBooking',
      qs: { code: bookingCode },
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
          se.navCtrl.navigateForward(['/app/tabs/tab3']);
        }
        else
        {
          se.gf.setParams(bookingCode,'notifiBookingCode');    //Chưa thanh toán thì không show detail trong mytrip
          se.navCtrl.navigateForward(['/app/tabs/tab3']);
      
          // se.paymentselect(item, idx);
        }
      
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

  loadTopSale(Id) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/GetAllBooking24h';
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometour', 'loadTopSale').then((data) => {
      let res = JSON.parse(data);

      se.tourService.listTopSale = res.Response;
      se.tourService.tourDetailId = Id;
      se.tourService.backPage = 'hometour';
      se.navCtrl.navigateForward('/tourdetail');
      //se.slideData = res.Response;
      //se.loaddatadone = true;
    })
  }

  gotoFlightSearchPage(params){
    let se = this;
    se._flightService.itemFlightCache = {};
        se._flightService.objectFilter = {};
        se._flightService.objectFilterInternational = {};
        se._flightService.objectFilterReturn = {};
        se._flightService.itemFlightCache.departFlight = null;
        se._flightService.itemFlightCache.returnFlight = null;
        se._flightService.itemFlightCache.itemFlight = null;
        se.storage.remove('flightfilterobject');
       
        se.checkLoadLocation().then((dataLocation)=>{
          let placeFrom = dataLocation.filter((itemairport) => {return itemairport.code == params[0]});
          let placeTo = dataLocation.filter((itemairport) => {return itemairport.code == params[1]});
          if(placeFrom && placeFrom.length >0 && placeTo && placeTo.length >0){
            let departCode = placeFrom[0].code,
                returnCode = placeTo[0].code,
                cin = params[2],
                cout = params[3],
                cinthu = se.gf.getDayOfWeek(params[2]).dayname,
                coutthu = se.gf.getDayOfWeek(params[3]).dayname,
                cinthushort = se.gf.getDayOfWeek(params[2]).daynameshort,
                coutthushort = se.gf.getDayOfWeek(params[3]).daynameshort,
                departCity = placeFrom[0].city,
                returnCity = placeTo[0].city,
                departAirport = placeFrom[0].airport,
                returnAirport = placeTo[0].airport,
                adult = 1,
                child = 0,
                infant = 0,
                roundtrip = params[4];


            se._flightService.objSearch = {
              departCode: departCode,
              arrivalCode: returnCode,
              departDate: cin,
              returnDate: cout,
              adult: adult,
              child: child ? child : 0,
              infant: infant ? infant : 0,
              title: departCity +" → " + returnCity,
              dayDisplay: cinthu + ", " +moment(cin).format("DD") +  " thg " +moment(cin).format("M"),
              subtitle : " · " + (adult + child + (infant ? infant : 0) ) + " khách"+ " · " + (roundtrip ? ' Khứ hồi' : ' Một chiều'),
              titleReturn: returnCity +" → " + departCity,
              dayReturnDisplay: coutthu + ", " +moment(cout).format("DD") + " thg " + moment(cout).format("M") ,
              subtitleReturn :  " · " + (adult + child + (infant ? infant : 0)) + " khách"+ " · " + (roundtrip ? ' Khứ hồi' : ' Một chiều'),
              itemSameCity: '',
              itemDepartSameCity: '',
              itemReturnSameCity: '',
              departCity: departCity,
              returnCity: returnCity,
              roundTrip : roundtrip
            }

            se._flightService.itemFlightCache.roundTrip = roundtrip;
            se._flightService.itemFlightCache.checkInDate = cin;
            se._flightService.itemFlightCache.checkOutDate = cout;
            se._flightService.itemFlightCache.checkInDisplayMonth = moment(cin).format("DD") + " tháng " + moment(cin).format("MM") + ", " + moment(cin).format("YYYY");
            se._flightService.itemFlightCache.checkOutDisplayMonth = moment(cout).format("DD") + " tháng " + moment(cout).format("MM") + ", " + moment(cout).format("YYYY");
            se._flightService.itemFlightCache.adult = adult;
            se._flightService.itemFlightCache.child = child;
            se._flightService.itemFlightCache.infant = infant ? infant : 0;
            se._flightService.itemFlightCache.pax = adult + (child ? child :0)+ (infant ? infant : 0);
            se._flightService.itemFlightCache.arrchild = [];
            se._flightService.itemFlightCache.departCity = departCity;
            se._flightService.itemFlightCache.departCode = departCode;
            se._flightService.itemFlightCache.departAirport = departAirport;
            se._flightService.itemFlightCache.returnCity = returnCity;
            se._flightService.itemFlightCache.returnCode = returnCode;
            se._flightService.itemFlightCache.returnAirport = returnAirport;
            se._flightService.itemFlightCache.step = 1;
            
          
            se._flightService.itemFlightCache.departTimeDisplay = cinthu + ", " + moment(cin).format("DD") + " thg " + moment(cin).format("MM");
            se._flightService.itemFlightCache.returnTimeDisplay = coutthu + ", " + moment(cout).format("DD") + " thg " + moment(cout).format("MM");
    
            se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + cinthu + ", " + moment(cin).format("DD") + " thg " + moment(cin).format("MM");
            se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + coutthu + ", " + moment(cout).format("DD") + " thg " + moment(cout).format("MM");

            se._flightService.itemFlightCache.departPaymentTitleDisplay = cinthushort + ", " + moment(cin).format("DD-MM")+ " · " + departCode + " → " +returnCode+ " · ";
            se._flightService.itemFlightCache.returnPaymentTitleDisplay = coutthushort + ", " + moment(cout).format("DD-MM")+ " · "+ returnCode + " → " +departCode+ " · ";

            se._flightService.itemFlightCache.checkInDisplay = se.gf.getDayOfWeek(cin).dayname +", " + moment(cin).format("DD") + " thg " + moment(cin).format("MM");
            se._flightService.itemFlightCache.checkOutDisplay = se.gf.getDayOfWeek(cout).dayname +", " + moment(cout).format("DD") + " thg " + moment(cout).format("MM");

            se._flightService.itemFlightCache.checkInDisplaysort = se.gf.getDayOfWeek(cin).daynameshort +", " + moment(cin).format("DD") + " thg " + moment(cin).format("MM");
            se._flightService.itemFlightCache.checkOutDisplaysort = se.gf.getDayOfWeek(cout).daynameshort +", " + moment(cout).format("DD") + " thg " + moment(cout).format("MM");
            se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;
            
            se.storage.get("itemFlightCache").then((data)=>{
              if(data){
                se.storage.remove("itemFlightCache").then(()=>{
                  se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                })

              }else{
                se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
              }
            })
          
            if(se._flightService.listAirport && se._flightService.listAirport.length >0){
              let placeFrom = se._flightService.listAirport.filter((itemairport) => {return itemairport.code == departCode});
              let placeTo = se._flightService.listAirport.filter((itemairport) => {return itemairport.code == returnCode});
              if(placeFrom && placeFrom.length >0 && placeTo && placeTo.length >0){
                
                se._flightService.itemFlightCache.isExtenalDepart = !placeFrom[0].internal;
                se._flightService.itemFlightCache.isExtenalReturn = !placeTo[0].internal;
                se._flightService.itemFlightCache.isInternationalFlight = !placeFrom[0].internal || !placeTo[0].internal;
                if(se._flightService.itemFlightCache.isInternationalFlight){
                  se.navCtrl.navigateForward("/flightsearchresultinternational");
                }else{
                    se._flightService.itemFlightCache.isInternationalFlight = false;
                    se._flightService.itemFlightCache.isExtenalDepart = false;
                    se._flightService.itemFlightCache.isExtenalReturn = false;
                    se.navCtrl.navigateForward("/flightsearchresult");
                }
                
              }else {
                se._flightService.itemFlightCache.isInternationalFlight = false;
                se._flightService.itemFlightCache.isExtenalDepart = false;
                se._flightService.itemFlightCache.isExtenalReturn = false;
                se.navCtrl.navigateForward("/flightsearchresult");
              }
            }else{
              se._flightService.itemFlightCache.isInternationalFlight = false;
              se._flightService.itemFlightCache.isExtenalDepart = false;
              se._flightService.itemFlightCache.isExtenalReturn = false;
              se.navCtrl.navigateForward("/flightsearchresult");
            }
          }
          else{

          }
        })

        
  }

  loadLocation():Promise<any>{
    var se = this;
    return new Promise((resolve, reject)=>{
      let urlPath = C.urls.baseUrl.urlFlight + "gate/apiv1/AllPlace";
        var options = {
          method: 'GET',
          url: urlPath,
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          'headers': {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
            },
        };

        request(options, function (error, response, body) {
          if (error) {
            error.page = "homeflight";
            error.func = "loadlocation";
            error.param =  JSON.stringify(options);
            C.writeErrorLog(error,response);
            resolve([]);
            throw new Error(error);
          };
          let result = JSON.parse(body);
          if(result && result.data && result.data.length >0){
            se.storage.set("listAirport", result.data);
            se._flightService.listAirport = result.data;
            resolve(result.data);
          }else{
            resolve([]);
          }
      })
    })
  }

  checkLoadLocation():Promise<any>{
    var se = this;
    return new Promise((resolve, reject)=>{
      se.storage.get("listAirport").then((data)=>{
        if(!data){
          se.loadLocation().then((data)=>{
            resolve(data);
          });
        }else{
          resolve(se._flightService.listAirport = data);
        }
      })
    })
  }
}
