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
    public activityService: ActivityService) { }

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

        this.fcmNative.onNotification().subscribe( (data:any)=>{
          if(data.wasTapped){
            this.showNotification(data);
            //update lại trạng thái bkg
            this.loadNotificationAndUpdateState(data.BookingCode);
          } else {
            //console.log("Received in foreground");
            this.zone.run(()=>{
              this.countmessage++;
              this.valueGlobal.countNotifi++;
              this.badge.set(this.countmessage);
            })
            this.showActionSheetNoti(data);
          };
          
          this.fcmNative.onTokenRefresh().subscribe(token =>{
            //PDANH 19/07/2019: Push memberid & devicetoken
            this.storage.get('auth_token').then(auth_token =>{
              if(token){
                this.storage.set('deviceToken',token);
                this.gf.pushTokenAndMemberID(auth_token, token, this.appversion);
              }
            })
            
          })
        })

        

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
                        console.log(data);
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
        this.navCtrl.navigateForward(['/app/tabs/tab3']);
        this.gf.setParams(data.BookingCode,'notifiBookingCode');
        this.gf.setParams(2,'selectedTab3');
      }
      else if(data.NotifyType == "blog" && data.notifyAction == "blogofmytrip"){
        this.valueGlobal.backValue = "tab4";
        this.navCtrl.navigateForward("/blog/" + data.BookingCode);
      }
      else if(data.NotifyType == "fly" && data.notifyAction == "flychangeinfo"){
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
        this.gotoAppStore();
      }
      else if(data.activeTab){
        this.valueGlobal.backValue = "homeflight";
      }
      else if(data.dataLink){
        this.navCtrl.navigateForward(data.dataLink);
      }
      else if(data.flyNotify){
        this._flightService.itemTabFlightActive.emit(true);
        this.valueGlobal.backValue = "homeflight";
        this.navCtrl.navigateForward('/tabs/tab1');
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
      se.navCtrl.navigateForward(data.dataLink);
    }
    else if(data.flyNotify){
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
      this.loadUserNotification();
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
    this.loadUserNotification();
    
    var el = document.getElementsByClassName('tab-button');
    $('.tab-button').click(e => this.clickedElement(e));
    //Xử lý nút back của dt
    this.platform.ready().then(() => {

      setTimeout(()=>{
        this.fcmNative.onNotification().subscribe( (data:any)=>{
          if(data.wasTapped){
            this.showNotification(data);
            //update lại trạng thái bkg
            this.loadNotificationAndUpdateState(data.BookingCode);
          } else {
            //console.log("Received in foreground");
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
              url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/GetNotificationByUser?pageIndex=1&pageSize=50' ,
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
                        
                        se.zone.run(()=>{
                          let countNoti = data.filter(item=>{ return !item.status }).length;
                          if(se.valueGlobal.updatedLastestVersion){
                            countNoti ++;
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
      trip.priceShow = trip.amount_after_tax.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
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
          se.gf.setParams('','notifiBookingCode');//Chưa thanh toán thì không show detail trong mytrip
          se.paymentselect(item, idx);
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
}
