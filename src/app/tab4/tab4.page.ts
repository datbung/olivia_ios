import { Component, OnInit,NgZone } from '@angular/core';
import { NavController,Platform, ToastController, AlertController, ModalController } from '@ionic/angular';
import { C } from './../providers/constants';
import { ActivityService, GlobalFunction } from './../providers/globalfunction';
import { Storage } from '@ionic/storage';
import * as request from 'requestretry';
import * as moment from 'moment';
import { ValueGlobal,SearchHotel } from '../providers/book-service';
import { Router } from '@angular/router';
import { NetworkProvider } from '../network-provider.service';
import { flightService } from '../providers/flightService';
import { tourService } from '../providers/tourService';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { UserFeedBackPage } from '../userfeedback/userfeedback';
import { OverlayEventDetail } from '@ionic/core';
/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit{
  // items= [
  //   {id:1, title: 'Cập nhật trạng thái booking', message: 'iVIVU đã kiểm tra tình trạng phòng của Booking IVIVU123456 tại Swiss-Belresort Tuyền Lâm - Đà Lạt và đã gửi thông tin thanh toán cho Quý khách.',date: '1 giờ trước', status: 0},
  //   {id:2, title: 'Chia sẻ nhận xét về khách sạn', message: 'Quý khách hãy đánh giá khách sạn Imperial Vũng Tàu để nhận đến 10 điểm tích luỹ và giúp mọi người hiểu hơn về khách sạn nhé!',date: '12/10/2018', status: 1},
  //   {id:3, title: 'Chuẩn bị khởi hành đi Imperial Vũng Tàu', message: 'Xe sẽ khởi hành đi Imperial Vũng Tàu tại số 1 Lê Duẩn, Q1 - Cổng Thảo Cầm Viên lúc 10 giờ. Quý khách vui lòng có mặt tại điểm đón trước 20 phút',date: '10/10/2018', status: 1},
  //   {id:4, title: '6 điểm check-in giải nhiệt nắng hè đẹp tựa trời Tây ở Vũng Tàu', message: 'Những ngày đầu hè nắng nóng, bạn hãy tìm cho mình điểm đến giải nhiệt hiệu quả. Vũng Tàu là một trong những gợi ý phù hợp dành cho bạn.',date: '10/10/2018', status: 1},
  //   {id:5, title: 'Thay đổi thông tin chuyến bay', message: 'Booking IVIVU888888 có số hiệu chuyến bay BL678 thay đỗi sang (Số hiệu chuyến bay BL888, 10 giờ, thứ 6, ngày 02, tháng 07)',date: '01/10/2018', status: 1},

  // ]
  public items = [];
  itemskeleton = [1,2,3,4,5,6,7,8]
  public phone = '';
  public email = '';
  loaddatadone: boolean= false;
  pageIndex: any = 1;
  pageSize: any = 50;
  loadend = false;
  isAll=true;isProduct=false;isOrder=false;isOther=false;
  objnotication: any;
  textnotifyType="";
  countNoti: number;
  listStatus: any;
  itembookings = [];
  loginuser=true;
  constructor(public platform: Platform,public navCtrl: NavController,public gf: GlobalFunction,
    private storage: Storage,
    private zone: NgZone,
    public toastCtrl: ToastController,
    public valueGlobal: ValueGlobal,
    public networkProvider: NetworkProvider,public router: Router,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public activityService: ActivityService, public _flightService: flightService,
    public tourService: tourService,public searchhotel: SearchHotel,    private fcm: FirebaseMessaging) {
    //google analytic
    gf.googleAnalytion('inbox','load','');
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
  }

  ngOnInit(){

  }

  ionViewWillEnter() {
    var se = this;
    if(document.querySelector(".tabbar")){
      document.querySelector(".tabbar")['style'].display = 'flex';
    }
      se.loadUserNotificationStatus();

    
    //19/07/2019: Load thông tin notification
    //this.loadUserNotification();
    // se.storage.get('auth_token').then(auth_token => {
    //   if (auth_token) {
    //     se.storage.get('listUserNotification').then((data)=> {
    //       if(data){
    //        se.loadDataNotify(data);
    //       }else{
    //         se.loadUserNotification();
    //       }
    //     })
    //   }else{
    //     se.items = [];
    //     se.loaddatadone = true;
    //   }
    // })
    
    // se.storage.get('listUserNotification').then((data)=> {
    //   if(data){
    //     se.loadDataNotify(data);
    //   }else{
       
    //   }
    // })
  }
  loadUserNotificationStatus() {
    var se = this;
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        se.loginuser=true;
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
      }else{
        se.zone.run(()=>{
          se.loginuser=false;
          se.loadend = true;
          se.loaddatadone = true;
          if(se.pageIndex == 1){
            se.items = [];
            se.valueGlobal.countNotifi=0;
          }
        })
      }
    })
  }
  loadUserNotificationBooking() {
    var se = this;

    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
          var text = "Bearer " + auth_token;
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/GetNotificationByUserOrderIVV?pageIndex='+se.pageIndex +'&pageSize=' + se.pageSize,
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
                  se.loadDataNotify(data,'booking');

                }else{
                  se.zone.run(()=>{
                    se.loadend = true;
                    se.loaddatadone = true;
                    if(se.pageIndex == 1){
                      se.itembookings = [];
                    }
                  })
                }
            }
            });
      }else{
        se.zone.run(()=>{
          se.loadend = true;
          se.loaddatadone = true;
          if(se.pageIndex == 1){
            se.items = [];
            se.valueGlobal.countNotifi=0;
          }
        })
      }
    })
  }

  async handleSplashScreen(): Promise<void> {
    try {
      // wait for App to finish loading
      await this.platform.ready()
    } catch (error) {
      if (error) {
        error.page = "inbox";
        error.func = "handleSplashScreen";
        C.writeErrorLog(error,null);
        throw new Error(error)
      };
    }
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => { splash.remove() }, 300);
    }

  }

  /**
     * Load thông báo của user
     */
    loadUserNotification(){
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
              url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/GetNotificationByUserIVV?pageIndex='+se.pageIndex +'&pageSize=' + se.pageSize,
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
                    se.loadDataNotify(data,'');

                  }else{
                    se.zone.run(()=>{
                      se.loadend = true;
                      se.loaddatadone = true;
                      if(se.pageIndex == 1){
                        se.items = [];

                      }
                    })
                  }
                  se.loadUserNotificationBooking();
              }
              });
        }else{
          se.zone.run(()=>{
            se.loadend = true;
            se.loaddatadone = true;
            if(se.pageIndex == 1){
              se.items = [];
              se.valueGlobal.countNotifi=0;
            }
          })
        }
      })
             
          
         
      
  }

  loadDataNotify(data,stt){
    var se = this;
    se.zone.run(()=>{
      if (!stt) {
        data.forEach(element =>{
          // if(element.notifyType != "fly" && element.notifyAction != "flychangeinfo"){
            let arrdate = moment(element.created).format('DD/MM/YYYY/HH/mm').split('/');
            let d = new Date(Number(arrdate[2]), Number(arrdate[1])-1, Number(arrdate[0]),Number(arrdate[3]),Number(arrdate[4]));
            let today = new Date();
            if( moment(today).diff(d, 'hours') <= 24){
              let diffhours = moment(today).diff(d, 'hours');
              element.date = moment(today).diff(d, 'hours') + " giờ trước";
              if(diffhours == 0){
                element.date = moment(today).diff(d, 'minutes') + " phút trước";
              }
              
            }else{
              element.date = moment(element.created).format('DD/MM/YYYY');
            }
            element.deleted = false;
            if (element.memberId=='alluser') {
              element.status=0;
              if (this.listStatus && this.listStatus.length>0) {
                if(se.checkItemInArray(element.id)){
                  element.status=1
                }
              }
            }
           
          
            if(se.items.length >0){
              if(!se.gf.checkExistsItemInArray(se.items,element,'trip')){
                se.items.push(element)
              }
            }else{
              se.items.push(element);
            }
          
        });
      }
      else{
        data.forEach(element =>{
          // if(element.notifyType != "fly" && element.notifyAction != "flychangeinfo"){
            let arrdate = moment(element.created).format('DD/MM/YYYY/HH/mm').split('/');
            let d = new Date(Number(arrdate[2]), Number(arrdate[1])-1, Number(arrdate[0]),Number(arrdate[3]),Number(arrdate[4]));
            let today = new Date();
            if( moment(today).diff(d, 'hours') <= 24){
              let diffhours = moment(today).diff(d, 'hours');
              element.date = moment(today).diff(d, 'hours') + " giờ trước";
              if(diffhours == 0){
                element.date = moment(today).diff(d, 'minutes') + " phút trước";
              }
              
            }else{
              element.date = moment(element.created).format('DD/MM/YYYY');
            }
            element.deleted = false;
            if (element.memberId=='alluser') {
              element.status=0;
              if (this.listStatus && this.listStatus.length>0) {
                if(se.checkItemInArray(element.id)){
                  element.status=1
                }
              }
            }
           
          
            if(se.itembookings.length >0){
              if(!se.gf.checkExistsItemInArray(se.itembookings,element,'trip')){
                se.itembookings.push(element)
              }
            }else{
              se.itembookings.push(element);
            }
          // }
        });
      }

      // if(se.valueGlobal.updatedLastestVersion){
      //   se.addUpdateLasterVersionNotify();
      //   se.valueGlobal.updatedLastestVersion = false;
      // }

      // let countNoti = se.items.filter(item=>{ return item.status == 1 }).length;
      
      // se.valueGlobal.countNotifi = countNoti;
      se.sortNotifi(stt);
      se.loaddatadone = true;
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
  addUpdateLasterVersionNotify(){
    var se = this;
    let itemNew = {
      id: 999999,
      title: "Cập nhật ứng dụng",
      message: "Đã cập nhật liên phiên bản mới nhất của iVIVU.com",
      status: 0,
      notifyType: "updateNewVersion",
      notifyAction: "",
      memberId: "",
      user: null,
      flag: "1",
      created: new Date(),
      modifyDate: new Date(),
      modifyBy: "admin",
      createBy: "admin",
      deleted: false,
      date: "1 phút trước"
    }
    se.items.push(itemNew);
  }
  /**
   * Thực hiện sort theo date
   */
  sortNotifi(stt) {
    var se = this;
    if (!stt) {
      if (se.items && se.items.length > 0) {
        se.zone.run(() => se.items.sort(function (a, b) {
          let direction = -1;
            if (moment(a['created']).diff(moment(b['created']), 'minutes') <0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
        }));
      }
    }else{
      if (se.itembookings && se.itembookings.length > 0) {
        se.zone.run(() => se.itembookings.sort(function (a, b) {
          let direction = -1;
            if (moment(a['created']).diff(moment(b['created']), 'minutes') <0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
        }));
      }
    }
    
  }
  /**
   * Hàm set lại trạng thái thông báo
   */
  updateStatusMessage(item){
    var se = this;
    se.items.forEach(element => {
      if(element.id == item.id){
        se.zone.run(()=>{
          if(element.status == 0){
            element.status = 1;
            
            //update status xuống db
            se.valueGlobal.countNotifi--;
            se.fcm.setBadge(se.valueGlobal.countNotifi);
            if (element.memberId=='alluser') {
              se.callUpdateStatusProduct(element);
            }else{
              se.callUpdateStatus(element);
            }
            
          }
          if (se.searchhotel.gbitem) {
            se.searchhotel.gbitem.hotelId="";
          }
          if (se.searchhotel.rootPage) {
            se.searchhotel.rootPage="";
          }
          if (element.dataLink) {
            if(element.dataLink.indexOf('tourdetail') != -1){
                let arr = element.dataLink.replace('/','').split('/');
                if(arr && arr.length ==2){
                  this.tourService.tourDetailId = arr[1];
                  this.tourService.backPage = 'hometour';
                  this.navCtrl.navigateForward('/tourdetail');
                }
              } else {
                se.navCtrl.navigateForward(element.dataLink);
              }
          }
          else{
            if (element.memberId=='alluser') {
               if(element.bookingCode.indexOf('tourdetail') != -1){
                let arr = element.bookingCode.replace('/','').split('/');
                if(arr && arr.length ==2){
                  this.tourService.tourDetailId = arr[1];
                  this.tourService.backPage = 'hometour';
                  this.navCtrl.navigateForward('/tourdetail');
                }
              } else {
                if (element.bookingCode=='1') {
                  this._flightService.itemTabFlightActive.emit(true);
                  this.valueGlobal.backValue = "homeflight";
                  this.navCtrl.navigateForward('/tabs/tab1');
              }else{
                  se.navCtrl.navigateForward(element.bookingCode);
              }
              }
            }
        }
        })
      }
    });

    
    se.valueGlobal.notifyAction="";
    //chuyển qua tab mytrip
    if(item && item.bookingCode && item.notifyAction != "cancel"){
      if (item.notifyAction == "sharereviewofhotel") {
        se.checkBookingReview(item).then((result) => {
          if (result) {
            // se.navCtrl.navigateForward(['/app/tabs/tab3']);
            se.valueGlobal.notifyAction="sharereview"
            se.gf.setParams(item.bookingCode, 'notifiBookingCode');
            se.getdatamytripHis().then((data) => {
              se.gf.hideLoading();
              var idxMaphis = data.map((itemhis) => {
                return itemhis.booking_id ==item.bookingCode
              });
              if (idxMaphis && idxMaphis.length > 0) {
                var idxhis = idxMaphis.findIndex((el) => { return el == true });

                if (idxhis != -1) {
                  se.showUserFeedBackPage(data[idxhis]);
                
                } 
              }

            })
          }else{
            alert("Chuyến đi của quý khách đã được đánh giá");
          }
        })
      }
      else if(item.notifyType == "blog" && item.notifyAction == "blogofmytrip"){
        se.valueGlobal.backValue = "tab4";
        se.navCtrl.navigateForward("/blog/" + item.bookingCode);
      }
      else if(item.notifyType == "fly" && item.notifyAction == "flychangeinfo"){
        se.navCtrl.navigateForward(['/app/tabs/tab3']);
        se.gf.setParams(item.bookingCode,'notifiBookingCode');
        se.gf.setParams(item.switchObj,'notifiSwitchObj');
      }
      else if(item.notifyType == "alert"){
        se.presentToastNotifi(item.message);
      }
      else{
        if (item.memberId!='alluser') {
          se.gf.setParams(item.bookingCode,'notifiBookingCode');
          //se.navCtrl.navigateForward(['/app/tabs/tab3']);
          this.mapBookingAndPayment(item.bookingCode);
        }
     
      }
    }else{
      //show notifi
      if (!item.dataLink) {
        if (item.flyNotify=="1") {
          se._flightService.itemTabFlightActive.emit(true);
          se.valueGlobal.backValue = "homeflight";
          se.navCtrl.navigateForward('/tabs/tab1');
        }else{
          se.presentToastNotifi(item.message);
        }
      
      }
     
    }
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
                "phoneNumber": this.phone,
                "email": this.email,
                "memberId": auth_token,
                "switchTypeOf": item.switchTypeOf,
                "switchAction": item.switchAction,
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
              }
              });
          }
      })
  }
  callUpdateStatusProduct(item){
    var se = this;
      se.storage.get('auth_token').then(auth_token => {
          if (auth_token) {
              var text = "Bearer " + auth_token;
              var options = {
              method: 'POST',
              url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/UpdateStatusNotification',
              timeout: 10000, maxAttempts: 5, retryDelay: 2000,
              headers:
              {
                  'cache-control': 'no-cache',
                  'content-type': 'application/json',
                  authorization: text
              },
              body: {
                "Id": item.id
              },
              json: true,
              };
              request(options, function (error, response, body) {
              if (error) {
                  error.page = "inbox";
                  error.func = "loadUserNotification";
                  error.param =  JSON.stringify(options);
                  C.writeErrorLog(error,response);
              }
              });
          }
      })
  }
 /**
   * Hàm xóa thông báo
   */
  deleteNotifi(item){
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
            var text = "Bearer " + auth_token;
            var options = {
            method: 'POST',
            url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/DeleteNotificationOfUser',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                authorization: text
            },
            body: {
              "id": item.id,
              "phoneNumber": this.phone,
              "email": this.email,
              "memberId": auth_token,
              "switchTypeOf": item.switchTypeOf,
              "switchAction": item.switchAction,
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
            }else if(body && body.success){
              se.zone.run(()=>{
                item.deleted = true;     
              })
            }
            });
        }
    })
  }

   /**
   * Hàm show cảnh báo
   */
  async presentToastNotifi(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  doRefresh(event){
    var se = this;
    se.loadUserNotification();
     setTimeout(()=>{
      event.target.complete();
     }, 1000)
     
  }

  public async showConfirm(msg){
    let alert = await this.alertCtrl.create({
      message: msg,
      cssClass: "cls-alert-showmore",
      buttons: [
      {
        text: 'Để sau',
        handler: () => {
          this.storage.remove('auth_token');
          this.storage.remove('email');
          this.storage.remove('username');
          this.storage.remove('jti');
          this.storage.remove('userInfoData');
          this.storage.remove('userRewardData');
          this.storage.remove('point');
          this.storage.remove('infocus');
          this.zone.run(()=>{
            this.valueGlobal.countNotifi = 0;
          })
          if(this.modalCtrl){
            this.modalCtrl.dismiss();
          }
          this.navCtrl.navigateBack('/');
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
          this.storage.remove('infocus');
          this.zone.run(()=>{
            this.valueGlobal.countNotifi = 0;
          })
          //this.valueGlobal.logingoback = "MainPage";
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

  doInfinite(infiniteScroll) {
    this.zone.run(() => {
      this.pageIndex += 1;
      this.loadUserNotification();
      infiniteScroll.target.complete();
    })


  }

  mapBookingAndPayment(BookingCode: any) {
    let se = this;
    if(BookingCode){
      //Map số bkg trong listtrip để focus vào bkg được notifi
      se.getdatamytrip().then((data) => {
        se.gf.hideLoading();
        var idxMap = data.map( (item,index) =>{ 
          return item.booking_id == BookingCode;
        });
        var itemMap = data.filter((item) => { return item.booking_id == BookingCode });
        if(itemMap && itemMap.length>0){
          let idx = idxMap.findIndex((el)=>{ return el == true});
          //Đã thanh toán về mytrip
          if(itemMap[0].payment_status == 1 || itemMap[0].payment_status == 5){
            se.gf.setParams(BookingCode,'notifiBookingCode');
            se.navCtrl.navigateForward(['/app/tabs/tab3']);
          }else{//Chưa thanh toán về trang thanh toán
            if (itemMap[0].booking_type == 'VMB')  {
              se.gf.setParams(BookingCode,'notifiBookingCode');
              se.navCtrl.navigateForward(['/app/tabs/tab3']);
            }
            else{
              se.paymentselect(itemMap[0], idx);
            }
          
          }
          
        }else{
          se.getdatamytripHis().then((data) => {
            se.gf.hideLoading();
            se.valueGlobal.BookingCodeHis=BookingCode;
            se.valueGlobal.listhistory = data;
            se.gf.setParams(BookingCode,'notifiBookingCode');
            se.gf.setParams(3,'selectedTab3');
            se.navCtrl.navigateForward(['/app/tabs/tab3']);
          })
        }
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
            //url: C.urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
            url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=false&pageIndex=1&pageSize=100',
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
  getdatamytripHis(): Promise<any> {
    var se = this;
    se.gf.showLoading();
    return new Promise((resolve, reject) => {
      se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var options = {
            method: 'GET',
            //url: C.urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
            url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=true&pageIndex=1&pageSize=25',
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

  paymentselect(trip, tripidx)
  {
    var se= this;
    if(trip.amount_after_tax){
      trip.priceShow = trip.amount_after_tax
    }
    se.activityService.objPaymentMytrip = { returnPage : 'mytrip', tripindex: tripidx, paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };
    if (trip.booking_type == 'COMBO_FLIGHT') {
      if (trip.pay_method!=51) {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/1");
      }
    } else if (trip.booking_type == 'COMBO_VXR') {
      if (trip.pay_method!=51) {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/1");
      }
     
    }
    else if (trip.booking_type == 'VMB') {
      if (trip.pay_method!=51) {
        se.navCtrl.navigateForward("/mytripaymentflightselect/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentflightselect/1");
      }
     
    }
    else{
      if (trip.pay_method!=51) {
        se.navCtrl.navigateForward("/mytripaymentselect/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentselect/1");
      }
    
    }
   
  }
  funcAll(){
    this.isAll=true;
    this.isProduct=false;
    this.isOrder=false;
    this.isOther=false;
    this.textnotifyType="";
  }
  funcProduct(){
    this.isAll=false;
    this.isProduct=true;
    this.isOrder=false;
    this.isOther=false;
    this.textnotifyType="product";
    this.countNoti = this.items.filter(item=>{ return item.notifyType== this.textnotifyType}).length;

  }
  funcOrder(){
    this.isAll=false;
    this.isProduct=false;
    this.isOrder=true;
    this.isOther=false;
    this.textnotifyType="booking";
    this.countNoti = this.itembookings.filter(item=>{ return item.notifyType== this.textnotifyType}).length;
  }
  goToLogin() {
    this.storage.get('auth_token').then(auth_token => {
      if (!auth_token) {
        this.navCtrl.navigateForward('/login');
      }
    });
  }
  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }
  async checkBookingReview(trip): Promise<any> {
    var se = this;
    var result = false;
    return new Promise((resolve, reject) => {
      se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var headerobj =
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          }

          se.gf.RequestApi('GET', C.urls.baseUrl.urlSVC3 + 'review?BookingId=' + trip.bookingCode, null, null, 'MyTrip', 'CheckBookingReview').then((data: any) => {
            if (data) {
              //Trả về isSuccess = true => chưa review
              //Trả về false => đã review hoặc có lỗi
              data=JSON.parse(data);
              result = data.isSuccess && !data.isReview;
              resolve(result);
            }
          });
        }
      })
    })
  }
  async showUserFeedBackPage(trip) {
    var se = this;
    if (trip.booking_type=='VMB') {
      trip.isFlyBooking=true;
      let departFlight = trip.bookingsComboData.filter((f) => { return moment(f.departureDate).format('DD-MM-YYYY') == moment(trip.checkInDate).format('DD-MM-YYYY') && f.airlineCode });
      if (departFlight && departFlight.length > 0) {
        trip.itemdepart = departFlight[0];

      } else {
        trip.itemdepart = trip.bookingsComboData[0];

      }
      trip.flightFrom = trip.itemdepart.flightFrom;
      trip.flightTo = trip.itemdepart.flightTo;
     
      trip.checkInDisplay= se.gf.getDayOfWeek(trip.start_date).daynameshort + ", " + moment(trip.start_date).format('DD-MM-YYYY');
      trip.checkOutDisplay = se.gf.getDayOfWeek(trip.end_date).daynameshort + ", " + moment(trip.end_date).format('DD-MM-YYYY');
    }
  
    this.activityService.objPaymentMytrip = { returnPage: 'mytrip', tripindex: '', paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };
    se.gf.setParams(trip, 'tripFeedBack');
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: UserFeedBackPage,
        componentProps: {
          aParameter: true,
        }
      });
    modal.present();

    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      // se.navCtrl.back();

    })
  }
}
