import { Injectable, EventEmitter } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { Platform, AlertController, ToastController, NavController, LoadingController } from '@ionic/angular';
import { C } from '../providers/constants';
import * as $ from 'jquery';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { ValueGlobal,SearchHotel } from './book-service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { File as IonicFileService, FileEntry, IFile } from '@ionic-native/file/ngx';
import { NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { foodService } from './foodService';
import * as moment from 'moment';
import { flightService } from './flightService';
import * as clone from 'clone';

import jwt_decode from 'jwt-decode';
import { FCM } from '@ionic-native/fcm/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

@Injectable({
    providedIn: 'root'  // <- ADD THIS
})
export class GlobalFunction{
  private listCarParams : any;
  private listObjcars : any;
    private DepartureParams :any;
    private showpickupdatefromdetail = false;
    private HotelRoomDetail: any;
    private exchangeGiftParams: any;
    private mytripBookingDetailParams: any;
    private roomInfoParams: any;
    private hotelNotesParams: any;
    private hotelExpsNotesParams: any;
    private showOccupancyFromRequestcombo: boolean = false;
    private hotelListMoodParams:any;
    private listFlightParams:any;
    private flightComboParams:any;
    private hotellistmoodselectedParams:any;
    private seemoreblogParams: any;
    private resetBlogTripsParams: any;
  notifiBookingCodeParams: any;
  userAvatarParams: any;
  tripFeedBackParams: any;
  selectedTab3Params: any;
  notifiSwitchObjParams: any;
  experiencesearchParams: any;
  experienceItemParams: any;
  experienceFilter_regionIdParams: any;
  experiencesearchTagsIdParams: any;
  listDistanceNearByParams: any;
  listSearch_ExperienceDetailParams: any;
  experienceFilter_regionCodeParams: any;
  listsearchblogParams: any;
  blogidParams: any;
  itemslugParams: any;
  searchblogtextParams: any;
  experienceLocationParams: any;
  insurrenceDetailParams: any;
  insurranceClaimedParams: any;
  insurrenceHistoryParams: any;
  objinfofly: any;
  isOnline: any;
  public reload = true;
  loader: Promise<HTMLIonLoadingElement>;
  private allowCheckHoldTicket: boolean = true;
  intervalHoldTicket: NodeJS.Timeout;

    constructor(public platform: Platform,public fba: FirebaseAnalytics, public alertCtrl: AlertController,public toastCtrl: ToastController,
      public storage: Storage,
      public navCtrl: NavController,
      public valueGlobal: ValueGlobal,
      public appVersion: AppVersion,
      private ionicFileService: IonicFileService,
      public _foodService: foodService,
      public loadCtrl: LoadingController,
      public _flightService: flightService,
      private fb: Facebook,
      private fcm: FCM,private searchhotel: SearchHotel){

    }
    
    public googleAnalytion(viewName,action,options ){
        if(C.ENV == "prod" || C.ENV == "release"){
            this.platform.ready().then(() => {
              if(action != "screen_view"){
                this.fba.logEvent(action, { 'hitType': 'event', 'eventCategory': viewName , 'eventLabel': options})
                .then((res: any) => {console.log(res);})
                .catch((error: any) => console.error(error));
              }else{
                //this.fba.logEvent(action, { 'hitType': 'event', 'firebase_screen_class': viewName , 'firebase_screen_name': viewName})
                //.then((res: any) => {console.log(res);})
                //.catch((error: any) => console.error(error));
                this.fba.setCurrentScreen(viewName);
              }
              
        })
      }
    }
    
    public googleAnalytionCustom(action,params, type? ){
      if(C.ENV == "prod" || C.ENV == "release"){
          this.platform.ready().then(() => {
              this.fba.logEvent(action, params)
              .then((res: any) => {console.log(res);})
              .catch((error: any) => console.error(error));
      })
    }
  }

    /**
     * Hàm show cảnh báo chung
     * @param header header của warning
     * @param msg nội dung warning
     * @param textButtonOK text hiển thị button ok
     */
    public async showWarning(header,msg,textButtonOK){
      //if(!this.alertCtrl){
        let alert = await this.toastCtrl.create({
        //   header: header,
        //   message: msg,
        //   buttons: [{
        //     text: textButtonOK,
        //     role: 'OK',
        //     handler: () => {
        //     }
        //   }
        // ]
        message: msg,
        position: "top",
        header: header,
        duration: 3000
      });
      alert.present();
      //}
    }

    public setParams(params,type) {
      if(type == 'departure'){
        this.DepartureParams = params;
      }
      if(type == 'showpickupdatefromdetail'){
        this.showpickupdatefromdetail = params;
      }
      if(type=='hotelroomdetail'){
        this.HotelRoomDetail = params;
      }
      if(type=='exchangegift'){
        this.exchangeGiftParams = params;
      }
      if(type=='mytripbookingdetail'){
        this.mytripBookingDetailParams = params;
      }
      if(type=='roomInfo'){
        this.roomInfoParams = params;
      }
      if(type=='hotelnotes'){
        this.hotelNotesParams = params;
      }
      if(type=='hotelexpsnotes'){
        this.hotelExpsNotesParams = params;
      }
      if(type=='requestcombo'){
        this.showOccupancyFromRequestcombo = params;
      }
      if(type=='hotellistmood'){
        this.hotelListMoodParams = params;
      }
      if(type=='hotellistmoodselected'){
        this.hotellistmoodselectedParams = params;
      }
      if(type=='listflight'){
        this.listFlightParams = params;
      }
      if(type=='flightcombo'){
        this.flightComboParams = params;
      }
      if(type=='seemoreblog'){
        this.seemoreblogParams = params;
      }
      if(type=='resetBlogTrips'){
        this.resetBlogTripsParams = params;
      }
      if(type=='notifiBookingCode'){
        this.notifiBookingCodeParams = params;
      }
      if(type =='userAvatar'){
        this.userAvatarParams = params;
      }
      if(type == 'tripFeedBack'){
        this.tripFeedBackParams = params;
      }
      if(type == 'selectedTab3'){
        this.selectedTab3Params = params;
      }
      if(type =='notifiSwitchObj'){
        this.notifiSwitchObjParams = params;
      }
      if(type=='experiencesearch'){
        this.experiencesearchParams = params;
    }
    if(type=='experienceItem'){
        this.experienceItemParams = params;
    }
    if(type=='experienceFilter_regionId'){
        this.experienceFilter_regionIdParams = params;
    }
    if(type=='experienceFilter_regionCode'){
      this.experienceFilter_regionCodeParams = params;
    }
    if(type=='experiencesearchTagsId'){
        this.experiencesearchTagsIdParams = params;
    }
    if(type=='listDistanceNearBy'){
        this.listDistanceNearByParams = params;
    }
    if(type=='listSearch_ExperienceDetail'){
        this.listSearch_ExperienceDetailParams = params;
    }
    if(type=='listsearchblog'){
      this.listsearchblogParams = params;
    }
    if(type=='blogid'){
      this.blogidParams = params;
    }
    if(type=='itemslug'){
      this.itemslugParams = params;
    }
    if(type=='searchblogtext'){
      this.searchblogtextParams = params;
    }
    if(type=='searchblogmodaltext'){
      this.searchblogtextParams = params;
    }
    if(type == 'experienceLocation'){
      this.experienceLocationParams = params;
    }
    if (type == 'listcar') {
      this.listCarParams = params;
  }
  if (type == 'carscombo') {
      this.listObjcars = params;
  }
   
        if(type=='insurrenceDetail'){
            this.insurrenceDetailParams = params;
        }
        if(type=='insurranceClaimed'){
            this.insurranceClaimedParams = params;
        }
        if(type=='insurrenceHistory'){
            this.insurrenceHistoryParams = params;
        }
        if(type=='objinfofly'){
          this.objinfofly = params;
      }
    }
  
    public getParams(type) {
      if(type == 'departure'){
        return this.DepartureParams;
      }
      if(type == 'showpickupdatefromdetail'){
        return this.showpickupdatefromdetail;
      }
      if(type=='hotelroomdetail'){
        return this.HotelRoomDetail;
      }
      if(type=='exchangegift'){
        return this.exchangeGiftParams;
      }
      if(type=='mytripbookingdetail'){
        return this.mytripBookingDetailParams;
      }
      if(type=='roomInfo'){
        return this.roomInfoParams;
      }
      if(type=='hotelnotes'){
        return this.hotelNotesParams;
      }
      if(type=='hotelexpsnotes'){
        return this.hotelExpsNotesParams;
      }
      if(type=='requestcombo'){
        return this.showOccupancyFromRequestcombo;
      }
      if(type=='hotellistmood'){
        return this.hotelListMoodParams;
      }
      if(type=='hotellistmoodselected'){
        return this.hotellistmoodselectedParams;
      }
      if(type=='listflight'){
        return this.listFlightParams;
      }
      if(type=='flightcombo'){
        return this.flightComboParams;
      }
      if(type=='seemoreblog'){
        return this.seemoreblogParams;
      }
      if(type=='resetBlogTrips'){
        return this.resetBlogTripsParams;
      }
      if(type=='notifiBookingCode'){
        return this.notifiBookingCodeParams;
      }
      if(type =='userAvatar'){
        return this.userAvatarParams;
      }
      if(type == 'tripFeedBack'){
        return this.tripFeedBackParams;
      }
      if(type == 'selectedTab3'){
        return this.selectedTab3Params;
      }
      if(type =='notifiSwitchObj'){
        return this.notifiSwitchObjParams;
      }
      if(type=='experiencesearch'){
        return this.experiencesearchParams;
      }
      if(type=='experienceItem'){
        return this.experienceItemParams;
      }
      if(type=='experienceFilter_regionId'){
        return this.experienceFilter_regionIdParams;
      }
      if(type=='experienceFilter_regionCode'){
        return this.experienceFilter_regionCodeParams;
      }
      if(type=='experiencesearchTagsId'){
        return this.experiencesearchTagsIdParams;
      }
      if(type=='listDistanceNearBy'){
        return this.listDistanceNearByParams;
      }
      if(type=='listSearch_ExperienceDetail'){
        return this.listSearch_ExperienceDetailParams;
      }
      if(type=='listsearchblog'){
        return this.listsearchblogParams;
      }
      if(type=='blogid'){
        return this.blogidParams;
      }
      if(type=='itemslug'){
        return this.itemslugParams;
      }
      if(type=='searchblogtext'){
        return this.searchblogtextParams;
      }
      if(type=='searchblogmodaltext'){
        return this.searchblogtextParams;
      }
      if(type == 'experienceLocation'){
        return this.experienceLocationParams;
      }
      if (type == 'listcar') {
      return this.listCarParams;
      }
      if (type == 'carscombo') {
          return this.listObjcars;
      }
      if(type=='insurrenceDetail'){
        return this.insurrenceDetailParams;
      }
      if(type=='insurranceClaimed'){
        return this.insurranceClaimedParams;
      }
      if(type=='insurrenceHistory'){
        return this.insurrenceHistoryParams;
      }
      if(type=='objinfofly'){
        return this.objinfofly;
      }
    }
    //lấy hình thức thanh toán
    public getbank(method) {
      var textbank, bankName, bankBranch, accountNumber,urlimgbank,url;
      switch (method) {
        case 41:
          textbank = "ACBbank";
          bankName = "Ngân hàng TMCP Á Châu (ACB)";
          bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
          accountNumber = "190862589";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/2.acb.png";
          url = 'https://online.acb.com.vn/acbib';
          break;
        case 42:
          textbank = "Vietcombank";
          bankName = "Ngân TMCP Ngoại Thương Việt Nam (VCB)";
          bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
          accountNumber = "007 1000 895 230";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/1.vietcombank.png";
          url = 'https://www.vietcombank.com.vn/IBanking2020';
          break;
        case 45:
          textbank = "Vietinbank";
          bankName = "Ngân hàng TMCP Công thương Việt Nam VietinBank";
          bankBranch = "Chi Nhánh 03, Tp.HCM";
          accountNumber = "1110 0014 2852";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/3.viettinbank.png";
          url = 'https://ebanking.vietinbank.vn/rcas';
          break;
        case 44:
          textbank = "Techcombank";
          bankName = "NH TMCP Kỹ Thương Việt Nam (Techcombank)";
          bankBranch = "Chi nhánh Trần Quang Diệu, Tp.HCM";
          accountNumber = "19128840912016";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/4.techcombank.png";
          url = 'https://ib.techcombank.com.vn/servlet/BrowserServlet';
          break;
        case 43:
          textbank = "Dongabank";
          bankName = "NH TMCP Đông Á (DongABank)";
          bankBranch = "Chi nhánh Lê Văn Sỹ, Tp.HCM";
          accountNumber = "0139 9166 0002";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/5.dongabank.png";
          url = 'https://ebanking.dongabank.com.vn/khcn/';
          break;
        case 47:
          textbank = "Agribank";
          bankName = "Ngân hàng Agribank";
          bankBranch = "Chi Nhánh 03, Tp.HCM";
          accountNumber = "160 2201 361 086";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/6.agribank.png";
          url = 'https://ibank.agribank.com.vn/ibank';
          break;
        case 48:
          textbank = "BIDV";
          bankName = "NH TM CP Đầu Tư và Phát Triển Việt Nam (BIDV)";
          bankBranch = "Chi Nhánh 02, Tp.HCM";
          accountNumber = "130 1000 147 4890";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/7.bidv.png";
          url = 'https://www.bidv.vn:81/iportalweb/iRetail@1';
          break;
        case 46:
          textbank = "Sacombank";
          bankName = "Ngân Hàng TMCP Sài Gòn Thương Tín (Sacombank)";
          bankBranch = "Chi nhánh Cao Thắng, Tp.HCM";
          accountNumber = "060 0952 73354";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/8.sacombank.png";
          url = 'https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
          break;
        case 50:
          textbank = "HDBank";
          bankName = "Ngân hàng HDBANK";
          bankBranch = "Chi nhánh Sài gòn";
          accountNumber = "052704070018649";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/hdb-icon.png";
          url = 'https://ebanking.hdbank.vn/ipc/vi/';
          break;
        case 49:
          textbank = "SCB";
          bankName = "Ngân Hàng Sài Gòn (SCB)";
          bankBranch = "Chi nhánh Phú Đông";
          accountNumber = "023 0109 7937 00001";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/scb-icon.png";
          url = 'https://ebanking.scb.com.vn/?module=login';
          break;
        case 53:
          textbank = "OCB";
          bankName = "Ngân hàng Phương Đông (OCB)";
          bankBranch = "Chợ Lớn, TP.HCM";
          accountNumber = "001 7101 6190 02045";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/ocb-logo.png";
          url = 'https://omni.ocb.com.vn/frontend-web/app/auth.html#/login';
          break;
        default:
          textbank = "ACBbank";
          bankName = "Ngân hàng TMCP Á Châu (ACB)";
          bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
          accountNumber = "190862589";
          urlimgbank = "https://res.ivivu.com/payment/img/banklogo/2.acb.png";
          url = 'https://online.acb.com.vn/acbib';
        break;
      }
      return { textbank: textbank, bankName: bankName,bankBranch: bankBranch, accountNumber: accountNumber,urlimgbank:urlimgbank,url:url }
    }
    public getDayOfWeek(date) {
      let d = moment(date).format('dddd');
       let dayname ='', daynameshort ='';
       switch (d) {
         case "Monday":
           dayname = "Thứ 2";
           daynameshort="T2";
           break;
         case "Tuesday":
           dayname = "Thứ 3";
           daynameshort="T3";
           break;
         case "Wednesday":
           dayname = "Thứ 4";
           daynameshort="T4";
           break;
         case "Thursday":
           dayname = "Thứ 5";
           daynameshort="T5";
           break;
         case "Friday":
           dayname = "Thứ 6";
           daynameshort="T6";
           break;
         case "Saturday":
           dayname = "Thứ 7";
           daynameshort="T7";
           break;
         default:
           dayname = "Chủ nhật";
           daynameshort="CN";
           break;
       }
     return { dayname: dayname,daynameshort: daynameshort  }
   }

    public checkExistsIndex(array,idx){
      return array.find((item) => {
         return item == idx;
      })
    }

    checkExistsItemInArray(arrays: any, item: any, type: any) {
      var res = false;
      if(type){
        if (type == 'trip') {
          res = arrays.some(r => r.id == item.id);
        }
        if (type == 'order') {
          res = arrays.some(r => r.booking_id == item.booking_id);
        }
        if(type == 'experiencesearch' || 'blog'){
          res = arrays.some(r => r.id == item.id);
        }
        if(type=='filtername'){
          res = arrays.some(r => r == item);
        }
        
        if(type == 'cathay'){
          res = arrays.some(r => r.insurance_code == item.insurance_code);
        }
      }
      else{
        res = arrays.some(r => r.id == item.id);
      }
      
      return res;
    }

    public removeItemInArrayByName(array,item){
      array.forEach( (arrayItem, index) => {
        if(arrayItem.name == item.name) array.splice(index,1);
      });
    }
  
    public removeItem(array,itemcheck){
      array.forEach( (item, index) => {
        if(item == itemcheck) array.splice(index,1);
      });
   }

   public removeItemInArray(array,item){
    array.forEach( (arrayItem, index) => {
      if(arrayItem.id == item.id) array.splice(index,1);
    });
 }

   public async showToastWarning(msg){
    let alert = await this.toastCtrl.create(({
      message: msg,
      duration: 3000,
      position: "top"
    }))
    alert.present();
  }

  public async showMessageWarning(msg){
    let alert = await this.alertCtrl.create(({
      message: msg,
    }))
    alert.present();
  }

  public setActivatedTab(tabIndex){
    var objTab = document.querySelectorAll('ion-tab-bar');
    if(objTab && objTab.length >0){
      var tab = objTab[objTab.length-1];
      if(tab){
        setTimeout(() => {
          //$(tab.children.item( (tabIndex-1)*2 )).addClass('tab-selected');
          //$(tab.children.item( (tabIndex-1)*2 )).attr('aria-selected','true');
          $(tab.children.item( (tabIndex-1)*2 )).attr('aria-selected','true').siblings().attr('aria-selected','false');
        }, 500);
          
      }
    }
   }

   /**
    * Đẩy token + memberid lưu xuống db
    * @param devicetoken key token của device
    * @param authentoken key id member user
    */
   pushTokenAndMemberID(authentoken, devicetoken, appversion){
    var se = this;
    console.log(devicetoken);
    var options ;
    if (authentoken) {
      var text = "Bearer " + authentoken;
       options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/PushTokenOfUser',
      timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      headers:
      {
          'cache-control': 'no-cache',
          'content-type': 'application/json-patch+json',
          authorization: text
      },
      body: { tokenId: devicetoken, appVersion: appversion.replace(/\./g, ''),source:6 },
      json: true
    };
   
    }else{
      options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/PushTokenUser',
      timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      headers:
      {
          'cache-control': 'no-cache',
          'content-type': 'application/json-patch+json',
      },
      body: { tokenId: devicetoken, appVersion: appversion.replace(/\./g, ''),source:6 },
      json: true
    };

    }
    request(options, function (error, response, body) {
      if (error) {
          error.page = "login";
          error.func = "pushTokenAndMemberID";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error,response);
      }else if(body){
          var obj = JSON.parse(body);
         
      }
  })   
    
  }

  DeleteTokenOfUser(deviceToken, userToken, appversion) {
    var se = this;
    if (userToken) {
        var text = "Bearer " + userToken;
        var options = {
            method: 'POST',
            url: C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/DeleteNotificationTokenOfUser',
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json-patch+json',
                authorization: text
            },
            body: {
                tokenId: deviceToken,
                appVersion: appversion ? appversion.replace(/\./g, '') : ''
            },
            json: true
        };
        request(options, function (error, response, body) {
            if (error) {
                error.page = "logout";
                error.func = "DeleteNotificationTokenOfUser";
                error.param = JSON.stringify(options);
                C.writeErrorLog(error,response);
            }
        })
    }
}

public getAppVersion() {
  this.appVersion.getVersionNumber().then(version => {
      return version.replace(/\./g, '');
  })
}

  /**
  * Hàm gọi api chung
  * @param methodFunc phương thức GET/POST
  * @param strUrl Chuỗi api
  * @param headerObj object header nếu có
  * @param bodyObj object body nếu có
  * @param pageName Tên page gọi api
  * @param funcName Tên fucntion gọi api
  */
  async RequestApi(methodFunc, strUrl, headerObj, bodyObj, pageName, funcName): Promise<any> {
    var se = this; 
    return new Promise(
        (resolve, reject) => {
          var options;
          if(headerObj && bodyObj ){
            options = {
              method: methodFunc,
              url: strUrl,
              headers: headerObj,
              body: bodyObj,
              json: true,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000
            }
          }
          
          if(headerObj && !bodyObj){
            options = {
              method: methodFunc,
              url: strUrl,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000,
              headers: headerObj
            }
          }

          if(!headerObj && !bodyObj){
            options = {
              method: methodFunc,
              url: strUrl,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000,
            }
          }

            request(options, function (error, response, body) {
                if (response.statusCode != 200) {
                  if(headerObj && headerObj.authorization && response.statusCode == 401){//Token hết hạn
                    //se.showConfirm("Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.");
                      se.storage.get('jti').then((memberid) => {
                        se.storage.get('deviceToken').then((devicetoken) => {
                          se.refreshToken(memberid, devicetoken).then((token) =>{
                            let text = "Bearer " + token;
                            let headers =
                                {
                                    'cache-control': 'no-cache',
                                    'content-type': 'application/json',
                                    authorization: text
                                }
                
                            setTimeout(()=>{
                              se.RequestApi(methodFunc, strUrl, headers, bodyObj, pageName, funcName);
                            },300)
                          });
          
                        })
                      })
                  }else{
                      var objError = {
                          page: pageName,
                          func: funcName,
                          message: response.statusMessage,
                          content: response.body,
                          type: "warning",
                          param: JSON.stringify(options)
                      };
                      C.writeErrorLog(objError,response);
                  }
                }
                if (error) {
                    error.page = pageName;
                    error.func = funcName;
                    error.param = JSON.stringify(options);
                    C.writeErrorLog(objError,response);
                }
                if (response && response.statusCode == 200) {
                  if(body && body.data){
                    resolve(body);
                  } 
                  else if(body && body.tags || body.length >=0 || body.listRegion || body.childRegions || body.subRegions || body.post || body.status == 0 || (body.arrivals && body.arrivals.length >=0) || (body.departs && body.departs.length >=0)){
                      resolve(body);
                  }
                  else if(body && body.msg){
                    resolve(body.msg);
                  }
                  else if(body && body.success){
                    resolve(body.success);
                  }
                  else if(body && body.response){
                    resolve(body.response);
                  }
                  else if(body && body.constructor == Object){
                    resolve(body);
                  }
                  else{
                      resolve(JSON.parse(body));
                  }
                }
                else if (response && response.statusCode == 401){
                  resolve({error: 401});
                }
                else{
                  resolve([]);
                }

            })
        }
    )
  }

  async checkAcceptBizCredit(methodFunc, strUrl, headerObj, bodyObj, pageName, funcName): Promise<any> {
      var se = this;
      return new Promise(
        (resolve, reject) => {
          var options;
          if(headerObj && bodyObj ){
            options = {
              method: methodFunc,
              url: strUrl,
              headers: headerObj,
              body: bodyObj,
              json: true,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000
            }
          }
          
          if(headerObj && !bodyObj){
            options = {
              method: methodFunc,
              url: strUrl,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000,
              headers: headerObj
            }
          }

          if(!headerObj && !bodyObj){
            options = {
              method: methodFunc,
              url: strUrl,
              timeout: 180000,
              maxAttempts: 5,
              retryDelay: 2000,
            }
          }

            request(options, function (error, response, body) {
                if (response.statusCode != 200) {
                  if(headerObj && headerObj.authorization && response.statusCode == 401){//Token hết hạn
                    //se.showConfirm("Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.");
                  }else{
                      var objError = {
                          page: pageName,
                          func: funcName,
                          message: response.statusMessage,
                          content: response.body,
                          type: "warning",
                          param: JSON.stringify(options)
                      };
                      C.writeErrorLog(objError,response);
                  }
                }
                if (error) {
                    error.page = pageName;
                    error.func = funcName;
                    error.param = JSON.stringify(options);
                    C.writeErrorLog(objError,response);
                }
                if (response && response.statusCode == 200) {
                  if(body){
                    resolve(body);
                  } 
                }else{
                  resolve([]);
                }

            })
        }
    )
  
  }

  hideStatusBar(){
    var se = this;
    let el = document.getElementsByClassName('div-statusbar-float');
      el[0].classList.remove('float-statusbar-enabled');
      el[0].classList.add('float-statusbar-disabled');
  }
//Tạo booking food
public CreateBooking(objbook): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlFood+'/api/FOBooking/CreateBooking',
      'headers': {
        'Content-Type': 'application/json',
        'token': '584f470f-7a45-4793-a136-0084fadea81c'
      },
      body: JSON.stringify(objbook)
    
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
  
}
 //Gửi yêu cầu food
 public sendRequest(objbook): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlERPFood+'api/erp/Email/getEmail_Request',
      'headers': {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objbook)
    
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
  
}
public Updatefoodpaytype(bookingCode,paymentMethod): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': C.urls.baseUrl.urlContracting+'/update-food-paytype?token=3b760e5dcf038878925b5613c32615ea3&bookingCode='+bookingCode+'&paymentMethod='+paymentMethod+'',
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(true);
    });
    
  })
  
  
}

async checkAllowPayment(bookingCode): Promise<any>{
  let url =C.urls.baseUrl.urlFlight+"/gate/apiv1/checkAllowPayment/"+bookingCode;
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
      }
    };
   request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(JSON.parse(response.body));
    });
  })
}
   //Liên kết payoo
   public CreatePayoo(url): Promise<any>{
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': url,
        'headers': {
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        //console.log(JSON.parse(response.body));
        resolve(JSON.parse(response.body));
      });
    })
  }
    //Check payoo
public Checkpayment(url): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
        'Cookie': 'ASP.NET_SessionId=1zuyjhynxivxfmups4llel5v',
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8'
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
} 

public CheckpaymentFood(url): Promise<any>{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
} 

//GeTokensOfMember
public GeTokensOfMember(jti): Promise<any>{
{
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlMobile+'/api/Dashboard/GeTokensOfMember?memberid='+jti+'',
      'headers': {
        'apikey': 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
        'apisecret': 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      resolve(response.body);
    });
  })
 
}
}
//check hạn thanh toán
public CheckPaymentDate(booking): Promise<any>{
  let url=C.urls.baseUrl.urlContracting+'/booking-crm?bookingcode='+booking+'';
  return new Promise((resolve, reject) => {
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      //response.body=JSON.parse(response.body);
      resolve(response.body);
    });
  })
}
async showAlertCancelPayment(){
  var se = this;
  let alert = await this.alertCtrl.create({
    message: 'Giao dịch đã được hủy. Quý khách vui lòng quay lại trang tìm kiếm!',
    cssClass: "cls-alert-cancelpayment",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
        se.goToSearchFlight();
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}

async showAlertErrorMessage(){
  var se = this;
  let alert = await this.alertCtrl.create({
    message: 'Rất tiếc đã có lỗi xảy ra. Quý khách vui lòng quay lại trang tìm kiếm!',
    cssClass: "cls-alert-cancelpayment",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
        se.goToSearchFlight();
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}

async showAlertMessage(msg,title){
  var se = this;
  let alert = await this.alertCtrl.create({
    header: title,
    message: msg,
    cssClass: "cls-alert-message",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}
async showAlertMessageOnly(msg){
  var se = this;
  let alert = await this.alertCtrl.create({
    header: '',
    message: msg,
    cssClass: "cls-alert-message",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}

  public getNetworkStatus() {
    return this.isOnline;
  }
  public setNetworkStatus(value) {
      this.isOnline = value;
  }

  public async showConfirm(msg){
    let alert = await this.alertCtrl.create({
      message: msg,
      cssClass: 'cls-global-confirm',
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
          this.storage.remove('blogtripdefault');
          this.storage.remove('infocus');
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
          this.storage.remove('blogtripdefault');
          //this.valueGlobal.logingoback = "MainPage";
          this.navCtrl.navigateForward('/login');
        }
        }
      ]
    });
    alert.present();
  }

  public clearActivatedTab() {
    var objTab = document.querySelectorAll('ion-tab-bar');
    if (objTab && objTab.length > 0) {
        objTab.forEach(element => {
            if (element) {
                //clear current activcetab
                for(let i= 1; i <=5; i++){
                    $(element.children.item((i - 1) * 2)).attr('aria-selected', 'false');
                }
            }
        });
    }
}

  // public hiddenHeader(){
  //   let headerelement = document.getElementsByTagName('ion-header');
  //   if(headerelement && headerelement.length >0){
  //     setTimeout(()=>{
  //       headerelement[0].classList.add('float-statusbar-disabled');
  //     },150)
  //   }
  // }
  public showHeader(){
    let headerelement = document.getElementsByTagName('ion-header');
    if(headerelement && headerelement.length >0){
      setTimeout(()=>{
        headerelement[0].classList.remove('float-statusbar-disabled');
      },150)
    }
  }
  //Liên kết url
  public CreateUrl(url): Promise<any>{
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'POST',
        'url': url,
        'headers': {
          'Cookie': 'ASP.NET_SessionId=1zuyjhynxivxfmups4llel5v'
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        resolve(response.body);
      });
    })
  }
   //check phòng Internal
   public checkroomInternal(HotelId,RoomId,CheckInDate,CheckOutDate,roomnumber)
   {
     return new Promise((resolve, reject) => {
       var options = {
         method: 'GET',
         url: C.urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
         qs:
         {
           token: '3b760e5dcf038878925b5613c32615ea3',
           hotelcode: HotelId,
           roomcode: RoomId,
           checkin: CheckInDate,
           checkout: CheckOutDate,
           totalroom: roomnumber
         },
         headers:
           {}
       };
       request(options, function (error, response, body) {
         if (response.statusCode != 200) {
           var objError = {
             page: "globalfunction",
             func: "checkroomInternal",
             message: response.statusMessage,
             content: response.body,
             type: "warning",
             param: JSON.stringify(options)
           };
           C.writeErrorLog(objError, response);
         }
         if (error) {
           error.page = "globalfunction";
           error.func = "checkroomInternal";
           error.param = JSON.stringify(options);
           C.writeErrorLog(error, response);
           throw new Error(error)
         };
         var rs = JSON.parse(body);
         resolve(rs.Msg);
       });
     })
   }
   //check phòng EAN
   checkroomEAN(bookingCode){
     return new Promise((resolve, reject) => {
       var options = {
         'method': 'GET',
         'url': C.urls.baseUrl.urlContracting+'/api/toolsapi/PrecheckRoomAvailableEAN?token=3b760e5dcf038878925b5613c32615ea3&bookingCode='+bookingCode+'',
         'headers': {
         }
       };
       request(options, function (error, response) {
         if (error) throw new Error(error);
         var rs = JSON.parse(response.body);
         resolve(rs.error);
       });
     });
    
   }
   //Các hình thức thanh toán
   funcpaymentMethod(paymentMethod): string {

     switch (paymentMethod) {
       case "visa":
         paymentMethod = "0"
         break;
       case "payoo_store":
         paymentMethod = "3"
         break;
       case "payoo_qr":
         paymentMethod = "0"
         break;
       case "momo":
         paymentMethod = "10"
         break;
     }
     return paymentMethod;
   }
    //thêm phần đi chung
    public getDirection(Origin_Placeid,Destination_Placeid,Time,IsDeparture): Promise<any>{
      {
        return new Promise((resolve, reject) => {
          var IsInternational;
          if (this._flightService.itemFlightCache.dataBooking.fromPlace.internal==0||this._flightService.itemFlightCache.dataBooking.toPlace.internal==0) {
            IsInternational=true;
          }else{
            IsInternational=false;
          }
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetDirection?Origin_Placeid=' + Origin_Placeid + '&Destination_Placeid=' + Destination_Placeid + '&Time=' + Time + '&IsDeparture='+IsDeparture+ '&IsInternational='+IsInternational,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
            }
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "hotellike";
              error.func = "getblog";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
              throw new Error(error)
            }
            var body = JSON.parse(body);
            resolve(body);
          });
        })
       
      }
    }
    public GetListProduct(bookingTime, startPlace, endPlace, slot, productType, provider, sort,routeName): Promise<any>{
      {
        return new Promise((resolve, reject) => {
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetListProducts?reservationNo='+this._flightService.itemFlightCache.dataBooking.reservationNo+'&routeName='+routeName+'&bookingTime=' + bookingTime + '&startPlace=' + startPlace + '&endPlace=' + endPlace + '&slot=' + slot + '&productType=' + productType + '&provider=' + provider + '&sort=' + sort,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
            }
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "hotellike";
              error.func = "getblog";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
              throw new Error(error)
            }
            var Product = JSON.parse(body);
            resolve(Product);
          });
        })
       
      }
    }
    round(number, precision) {
      var factor = Math.pow(10, precision);
      var tempNumber = number * factor;
      var roundedTempNumber = Math.round(tempNumber);
      return roundedTempNumber / factor;
    }
    numberToCurrency(number: number, thousands: string) {
      var includefee = false
      if (number == undefined)
          return 'undefined';
      let fee = 0;
      if (includefee) {
          fee = 20000;
      }
      var parts = this.round(number + fee, 0).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
      return parts.join(thousands);
  }
  checkUnicodeCharactor(input) {
        if(input.indexOf('à') != -1 || input.indexOf('á') != -1 || input.indexOf('ạ') != -1 || input.indexOf('ả') != -1 || input.indexOf('ã') != -1 || input.indexOf('â') != -1 || input.indexOf('ầ') != -1 || input.indexOf('ấ') != -1 || input.indexOf('ậ') != -1 || input.indexOf('ẩ') != -1 || input.indexOf('ẫ') != -1 || input.indexOf('ă') != -1 || input.indexOf('ằ') != -1 || input.indexOf('ắ') != -1 || input.indexOf('ặ') != -1 || input.indexOf('ẳ') != -1 || input.indexOf('ẵ') != -1 
        || input.indexOf('è') != -1 || input.indexOf('é') != -1 || input.indexOf('ẹ') != -1 || input.indexOf('ẻ') != -1 || input.indexOf('ẽ') != -1 || input.indexOf('ê') != -1 || input.indexOf('ề') != -1 || input.indexOf('ế') != -1 || input.indexOf('ệ') != -1 || input.indexOf('ể') != -1 || input.indexOf('ễ') != -1
        || input.indexOf('ì') != -1 || input.indexOf('í') != -1 || input.indexOf('ị') != -1 || input.indexOf('ỉ') != -1 || input.indexOf('ĩ') != -1
        || input.indexOf('ò') != -1 || input.indexOf('ó') != -1 || input.indexOf('ọ') != -1 || input.indexOf('ỏ') != -1 || input.indexOf('õ') != -1 || input.indexOf('ô') != -1 || input.indexOf('ồ') != -1 || input.indexOf('ố') != -1 || input.indexOf('ộ') != -1 || input.indexOf('ổ') != -1 || input.indexOf('ỗ') != -1 || input.indexOf('ơ') != -1 || input.indexOf('ờ') != -1 || input.indexOf('ớ') != -1 || input.indexOf('ợ') != -1 || input.indexOf('ở') != -1 || input.indexOf('ỡ') != -1
        || input.indexOf('ù') != -1 || input.indexOf('ú') != -1 || input.indexOf('ụ') != -1 || input.indexOf('ủ') != -1 || input.indexOf('ũ') != -1 || input.indexOf('ư') != -1 || input.indexOf('ừ') != -1 || input.indexOf('ứ') != -1 || input.indexOf('ự') != -1 || input.indexOf('ử') != -1 || input.indexOf('ữ') != -1
        || input.indexOf('ỳ') != -1 || input.indexOf('ý') != -1 || input.indexOf('ỵ') != -1 || input.indexOf('ỷ') != -1 || input.indexOf('ỹ') != -1
        || input.indexOf('đ') != -1 
        || input.indexOf('\u0300') != -1 || input.indexOf('\u0301') != -1 || input.indexOf('\u0303') != -1 || input.indexOf('\u0309') != -1 || input.indexOf('\u0323') != -1
        || input.indexOf('\u02C6') != -1 || input.indexOf('\u0306') != -1 || input.indexOf('\u031B') != -1
        )
        {
          return false;
        }
      
    return true;
  }

  convertUnicodeCharactor(input) {
    for(var i=0; i< input.length; i++) {
      input = input.replace('à','a').replace('À','A');
      input = input.replace('á','a').replace('Á','A');
      input = input.replace('ạ','a').replace('Ạ','A');
      input = input.replace('ả','a').replace('Ả','A');
      input = input.replace('ã','a').replace('Ã','A');
      input = input.replace('â','a').replace('Â','A');
      input = input.replace('ầ','a').replace('Ầ','A');
      input = input.replace('ấ','a').replace('Ấ','A');
      input = input.replace('ậ','a').replace('Ậ','A');
      input = input.replace('ẫ','a').replace('Ẫ','A');
      input = input.replace('ẩ','a').replace('Ẩ','A');
      input = input.replace('ă','a').replace('Ă','A');
      input = input.replace('ắ','a').replace('Ắ','A');
      input = input.replace('ằ','a').replace('Ằ','A');
      input = input.replace('ặ','a').replace('Ặ','A');
      input = input.replace('ẳ','a').replace('Ẳ','A');
      input = input.replace('ẵ','a').replace('Ẵ','A');

      input = input.replace('è','e').replace('È','E');
      input = input.replace('é','e').replace('É','E');
      input = input.replace('ẹ','e').replace('Ẹ','E');
      input = input.replace('ẻ','e').replace('Ẻ','E');
      input = input.replace('ẽ','e').replace('Ẽ','E');
      input = input.replace('ê','e').replace('Ê','E');
      input = input.replace('ề','e').replace('Ề','E');
      input = input.replace('ế','e').replace('Ế','E');
      input = input.replace('ệ','e').replace('Ệ','E');
      input = input.replace('ể','e').replace('Ể','E');
      input = input.replace('ễ','e').replace('Ễ','E');

      input = input.replace('ì','i').replace('Ì','I');
      input = input.replace('í','i').replace('Í','I');
      input = input.replace('ị','i').replace('Ị','I');
      input = input.replace('ỉ','i').replace('Ỉ','I');
      input = input.replace('ĩ','i').replace('Ĩ','I');

      input = input.replace('ò','o').replace('Ò','O');
      input = input.replace('ó','o').replace('Ó','O');
      input = input.replace('ọ','o').replace('Ọ','O');
      input = input.replace('ỏ','o').replace('Ỏ','O');
      input = input.replace('õ','o').replace('Õ','O');
      input = input.replace('ô','o').replace('Ô','O');
      input = input.replace('ồ','o').replace('Ồ','O');
      input = input.replace('ố','o').replace('Ố','O');
      input = input.replace('ộ','o').replace('Ộ','O');
      input = input.replace('ổ','o').replace('Ổ','O');
      input = input.replace('ỗ','o').replace('Ỗ','O');
      input = input.replace('ơ','o').replace('Ơ','O');
      input = input.replace('ờ','o').replace('Ờ','O');
      input = input.replace('ớ','o').replace('Ớ','O');
      input = input.replace('ợ','o').replace('Ợ','O');
      input = input.replace('ở','o').replace('Ở','O');
      input = input.replace('ỡ','o').replace('Ỡ','O');

      input = input.replace('ù','u').replace('Ù','U');
      input = input.replace('ú','u').replace('Ú','U');
      input = input.replace('ụ','u').replace('Ụ','U');
      input = input.replace('ủ','u').replace('Ủ','U');
      input = input.replace('ũ','u').replace('Ũ','U');
      input = input.replace('ư','u').replace('Ư','U');
      input = input.replace('ừ','u').replace('Ừ','U');
      input = input.replace('ứ','u').replace('Ứ','U');
      input = input.replace('ự','u').replace('Ự','U');
      input = input.replace('ử','u').replace('Ử','U');
      input = input.replace('ữ','u').replace('Ữ','U');

      input = input.replace('ỳ','y').replace('Ỳ','Y');
      input = input.replace('ý','y').replace('Ý','Y');
      input = input.replace('ỵ','y').replace('Ỵ','Y');
      input = input.replace('ỷ','y').replace('Ỷ','Y');
      input = input.replace('ỹ','y').replace('Ỹ','Y');

      input = input.replace('đ','d').replace('Đ','D');
      input = input.replace('\u0300','o');
      input = input.replace('\u0301','o');
      input = input.replace('\u0303','o');
      input = input.replace('\u0309','o');
      input = input.replace('\u0323','o');

      input = input.replace('\u02C6','o');
      input = input.replace('\u0323','o');
      input = input.replace('\u031B','o');
    }
   
    
  return input;
}

  async getMultipleFiles(filePaths: string[]): Promise<File[]> {
    // Get FileEntry array from the array of image paths
    const fileEntryPromises: Promise<FileEntry>[] = filePaths.map(filePath => {
      return this.ionicFileService.resolveLocalFilesystemUrl(filePath);
    }) as Promise<FileEntry>[];

    const fileEntries: FileEntry[] = await Promise.all(fileEntryPromises);

    // Get a File array from the FileEntry array. NOTE that while this looks like a regular File, it does
    // not have any actual data in it. Only after we use a FileReader will the File object contain the actual
    // file data
    const CordovaFilePromises: Promise<IFile>[] = fileEntries.map(fileEntry => {
      return this.convertFileEntryToCordovaFile(fileEntry);
    });

    const cordovaFiles: IFile[] = await Promise.all(CordovaFilePromises);

    // Use FileReader on each File object to read the actual file data into the file object
    const filePromises: Promise<File>[] = cordovaFiles.map(cordovaFile => {
      return this.convertCordovaFileToJavascriptFile(cordovaFile)
    });

    // When this resolves, it will return a list of File objects, just as if you had used the regular web
    // file input. These can then be appended to FormData and uploaded.
    return await Promise.all(filePromises);
  }

  async getSingleFile(filePath: string): Promise<File> {
    // Get FileEntry from image path
    const fileEntry: FileEntry = await this.ionicFileService.resolveLocalFilesystemUrl(filePath) as FileEntry;

    // Get File from FileEntry. Again note that this file does not contain the actual file data yet.
    const cordovaFile: IFile = await this.convertFileEntryToCordovaFile(fileEntry);

    // Use FileReader on each object to populate it with the true file contents.
    return this.convertCordovaFileToJavascriptFile(cordovaFile);
  }

  private convertFileEntryToCordovaFile(fileEntry: FileEntry): Promise<IFile> {
    return new Promise<IFile>((resolve, reject) => {
      fileEntry.file(resolve, reject);
    })
  }

  private convertCordovaFileToJavascriptFile(cordovaFile: IFile): Promise<File> {
    return new Promise<File>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.error) {
          reject(reader.error);
        } else {
          const blob: any = new Blob([reader.result], { type: cordovaFile.type });
          blob.lastModifiedDate = new Date();
          blob.name = cordovaFile.name;
          resolve(blob as File);
        }
      };
      reader.readAsArrayBuffer(cordovaFile);
    });

  }

  
    /**
   * Chuyển ký tự font VNi vd: â - a ...
   */
  convertFontVNI(obj){
    if(obj.indexOf('đ') != -1 || obj.indexOf('Đ') != -1){
      obj = obj.replace(/\đ/g,'d').replace(/\Đ/g,'D');
    }
    if(obj.indexOf('ă') != -1 || obj.indexOf('Ă') != -1){
      obj = obj.replace(/\ă/g,'a').replace(/\Ă/g,'A');
    }
    if(obj.indexOf('â') != -1 || obj.indexOf('Â') != -1){
      obj = obj.replace(/\â/g,'a').replace(/\Â/g,'A');
    }
    if(obj.indexOf('á') != -1 || obj.indexOf('Á') != -1){
      obj = obj.replace(/\á/g,'a').replace(/\Á/g,'A');
    }
    if(obj.indexOf('à') != -1 || obj.indexOf('À') != -1){
      obj = obj.replace(/\à/g,'a').replace(/\À/g,'A');
    }
    if(obj.indexOf('ấ') != -1 || obj.indexOf('Ấ') != -1){
      obj = obj.replace(/\ấ/g,'a').replace(/\Ấ/g,'A');
    }
    if(obj.indexOf('ầ') != -1 || obj.indexOf('Ầ') != -1){
      obj = obj.replace(/\ầ/g,'a').replace(/\Ầ/g,'A');
    }
    if(obj.indexOf('ẵ') != -1 || obj.indexOf('Ẵ') != -1){
      obj = obj.replace(/\ẵ/g,'a').replace(/\Ẵ/g,'A');
    }
    if(obj.indexOf('ặ') != -1 || obj.indexOf('Ặ') != -1){
      obj = obj.replace(/\ặ/g,'a').replace(/\Ặ/g,'A');
    }
    if(obj.indexOf('ậ') != -1 || obj.indexOf('Ậ') != -1){
      obj = obj.replace(/\ậ/g,'a').replace(/\Ậ/g,'A');
    }
    if(obj.indexOf('ạ') != -1 || obj.indexOf('Ạ') != -1){
      obj = obj.replace(/\ạ/g,'a').replace(/\Ạ/g,'A');
    }
    if(obj.indexOf('à') != -1 || obj.indexOf('À') != -1){
        obj = obj.replace(/\à/g,'a').replace(/\À/g,'A');
      }
      if(obj.indexOf('ả') != -1 || obj.indexOf('Ả') != -1){
        obj = obj.replace(/\ả/g,'a').replace(/\Ả/g,'A');
      }
      if(obj.indexOf('ẳ') != -1 || obj.indexOf('Ẳ') != -1){
        obj = obj.replace(/\ẳ/g,'a').replace(/\Ẳ/g,'A');
      }
      if(obj.indexOf('ẩ') != -1 || obj.indexOf('Ẩ') != -1){
        obj = obj.replace(/\ẩ/g,'a').replace(/\Ẩ/g,'A');
      }
      if(obj.indexOf('ã') != -1 || obj.indexOf('Ã') != -1){
        obj = obj.replace(/\ã/g,'a').replace(/\Ã/g,'A');
      }
      if(obj.indexOf('ẵ') != -1 || obj.indexOf('Ẵ') != -1){
        obj = obj.replace(/\ẵ/g,'a').replace(/\Ẵ/g,'A');
      }
      if(obj.indexOf('ẫ') != -1 || obj.indexOf('Ẫ') != -1){
        obj = obj.replace(/\ẫ/g,'a').replace(/\Ẫ/g,'A');
      }

    if(obj.indexOf('ê') != -1 || obj.indexOf('Ê') != -1){
            obj = obj.replace(/\ê/g,'e').replace(/\Ê/g,'E');
          }
          if(obj.indexOf('é') != -1 || obj.indexOf('É') != -1){
            obj = obj.replace(/\é/g,'e').replace(/\É/g,'E');
          }
          if(obj.indexOf('è') != -1 || obj.indexOf('È') != -1){
            obj = obj.replace(/\è/g,'e').replace(/\È/g,'E');
          }
          if(obj.indexOf('ẻ') != -1 || obj.indexOf('Ẻ') != -1){
            obj = obj.replace(/\ẻ/g,'e').replace(/\Ẻ/g,'E');
          }
          if(obj.indexOf('ẽ') != -1 || obj.indexOf('Ẽ') != -1){
            obj = obj.replace(/\ẽ/g,'e').replace(/\Ẽ/g,'E');
          }
          if(obj.indexOf('ẹ') != -1 || obj.indexOf('Ẹ') != -1){
            obj = obj.replace(/\ẹ/g,'e').replace(/\Ẹ/g,'E');
          }
          if(obj.indexOf('ệ') != -1 || obj.indexOf('Ệ') != -1){
            obj = obj.replace(/\ệ/g,'e').replace(/\Ệ/g,'E');
          }
          if(obj.indexOf('ễ') != -1 || obj.indexOf('Ễ') != -1){
            obj = obj.replace(/\ễ/g,'e').replace(/\Ễ/g,'E');
          }
          if(obj.indexOf('ẹ') != -1 || obj.indexOf('Ẹ') != -1){
            obj = obj.replace(/\ẹ/g,'e').replace(/\Ẹ/g,'E');
          }
          if(obj.indexOf('ế') != -1 || obj.indexOf('Ế') != -1){
            obj = obj.replace(/\ế/g,'e').replace(/\Ế/g,'E');
          }
          if(obj.indexOf('ể') != -1 || obj.indexOf('Ể') != -1){
            obj = obj.replace(/\ể/g,'e').replace(/\Ể/g,'E');
          }
          if(obj.indexOf('ề') != -1 || obj.indexOf('Ề') != -1){
            obj = obj.replace(/\ề/g,'e').replace(/\Ề/g,'E');
          }
      
          if(obj.indexOf('ô') != -1 || obj.indexOf('Ô') != -1){
            obj = obj.replace(/\ô/g,'o').replace(/\Ô/g,'O');
          }
          if(obj.indexOf('ồ') != -1 || obj.indexOf('Ồ') != -1){
            obj = obj.replace(/\ồ/g,'o').replace(/\Ồ/g,'O');
          }
          if(obj.indexOf('ố') != -1 || obj.indexOf('Ố') != -1){
            obj = obj.replace(/\ố/g,'o').replace(/\Ố/g,'O');
          }
          if(obj.indexOf('ổ') != -1 || obj.indexOf('Ổ') != -1){
            obj = obj.replace(/\ổ/g,'o').replace(/\Ổ/g,'O');
          }
          if(obj.indexOf('ộ') != -1 || obj.indexOf('Ộ') != -1){
            obj = obj.replace(/\ộ/g,'o').replace(/\Ộ/g,'O');
          }
          if(obj.indexOf('ỗ') != -1 || obj.indexOf('Ỗ') != -1){
            obj = obj.replace(/\ỗ/g,'o').replace(/\Ỗ/g,'O');
          }
          if(obj.indexOf('ọ') != -1 || obj.indexOf('Ọ') != -1){
            obj = obj.replace(/\ọ/g,'o').replace(/\Ọ/g,'O');
          }
          if(obj.indexOf('ò') != -1 || obj.indexOf('Ò') != -1){
            obj = obj.replace(/\ò/g,'o').replace(/\Ò/g,'O');
          }
          if(obj.indexOf('ỏ') != -1 || obj.indexOf('Ỏ') != -1){
            obj = obj.replace(/\ỏ/g,'o').replace(/\Ỏ/g,'O');
          }
          if(obj.indexOf('õ') != -1 || obj.indexOf('Õ') != -1){
            obj = obj.replace(/\õ/g,'o').replace(/\Õ/g,'O');
          }
          if(obj.indexOf('ơ') != -1 || obj.indexOf('Ơ') != -1){
            obj = obj.replace(/\ơ/g,'o').replace(/\Ơ/g,'O');
          }
          if(obj.indexOf('ờ') != -1 || obj.indexOf('Ờ') != -1){
            obj = obj.replace(/\ờ/g,'o').replace(/\Ờ/g,'O');
          }
          if(obj.indexOf('ớ') != -1 || obj.indexOf('Ớ') != -1){
            obj = obj.replace(/\ớ/g,'o').replace(/\Ớ/g,'O');
          }
          if(obj.indexOf('ở') != -1 || obj.indexOf('Ở') != -1){
            obj = obj.replace(/\ở/g,'o').replace(/\Ở/g,'O');
          }
          if(obj.indexOf('ợ') != -1 || obj.indexOf('Ợ') != -1){
            obj = obj.replace(/\ợ/g,'o').replace(/\Ợ/g,'O');
          }
          if(obj.indexOf('ỡ') != -1 || obj.indexOf('Ỡ') != -1){
            obj = obj.replace(/\ỡ/g,'o').replace(/\Ỡ/g,'O');
          }
      
          if(obj.indexOf('ú') != -1 || obj.indexOf('Ú') != -1){
            obj = obj.replace(/\ú/g,'u').replace(/\Ú/g,'U');
          }
          if(obj.indexOf('ù') != -1 || obj.indexOf('Ù') != -1){
            obj = obj.replace(/\ù/g,'u').replace(/\Ù/g,'U');
          }
          if(obj.indexOf('ủ') != -1 || obj.indexOf('Ủ') != -1){
            obj = obj.replace(/\ủ/g,'u').replace(/\Ủ/g,'U');
          }
          if(obj.indexOf('ũ') != -1 || obj.indexOf('Ũ') != -1){
            obj = obj.replace(/\ũ/g,'u').replace(/\Ũ/g,'U');
          }
          if(obj.indexOf('ụ') != -1 || obj.indexOf('Ụ') != -1){
            obj = obj.replace(/\ụ/g,'u').replace(/\Ụ/g,'U');
          }
          if(obj.indexOf('ư') != -1 || obj.indexOf('Ư') != -1){
            obj = obj.replace(/\ư/g,'u').replace(/\Ư/g,'U');
          }
          if(obj.indexOf('ừ') != -1 || obj.indexOf('Ừ') != -1){
            obj = obj.replace(/\ừ/g,'u').replace(/\Ừ/g,'U');
          }
          if(obj.indexOf('ứ') != -1 || obj.indexOf('Ứ') != -1){
            obj = obj.replace(/\ứ/g,'u').replace(/\Ứ/g,'U');
          }
          if(obj.indexOf('ử') != -1 || obj.indexOf('Ử') != -1){
            obj = obj.replace(/\ử/g,'u').replace(/\Ử/g,'U');
          }
          if(obj.indexOf('ự') != -1 || obj.indexOf('Ự') != -1){
            obj = obj.replace(/\ự/g,'u').replace(/\Ự/g,'U');
          }
          if(obj.indexOf('ữ') != -1 || obj.indexOf('Ữ') != -1){
            obj = obj.replace(/\ữ/g,'u').replace(/\Ữ/g,'U');
          }
      
          if(obj.indexOf('í') != -1 || obj.indexOf('Í') != -1){
            obj = obj.replace(/\í/g,'i').replace(/\Í/g,'I');
          }
          if(obj.indexOf('ì') != -1 || obj.indexOf('Ì') != -1){
            obj = obj.replace(/\ì/g,'i').replace(/\Ì/g,'I');
          }
          if(obj.indexOf('ỉ') != -1 || obj.indexOf('Ỉ') != -1){
            obj = obj.replace(/\ỉ/g,'i').replace(/\Ỉ/g,'I');
          }
          if(obj.indexOf('ĩ') != -1 || obj.indexOf('Ĩ') != -1){
            obj = obj.replace(/\ĩ/g,'i').replace(/\Ĩ/g,'I');
          }
          if(obj.indexOf('ị') != -1 || obj.indexOf('Ị') != -1){
            obj = obj.replace(/\ị/g,'i').replace(/\Ị/g,'I');
          }
    

    return obj;
  }

  /**
   * Hàm set hiệu ứng chuyển page
   * @param nativePageTransitions provider injection
   * @param direction hướng chuyển page vd: 'left', 'right'
   */
  public setNativeSlide(nativePageTransitions, direction){
    let options: NativeTransitionOptions = {
      direction: direction,
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 0
     }
  
    nativePageTransitions.fade(options);
  }


  public createTransactionCombo(HotelCode,FlightCode,DepartATCode,ReturnATCode): Promise<any>{
    return new Promise((resolve, reject) => {
      var options_1 = {
        method: 'POST',
        url: C.urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDCombo',
        headers:
        {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form:
        {
          HotelCode: HotelCode,
          FlightCode: FlightCode,
          DepartATCode: DepartATCode,
          ReturnATCode:ReturnATCode,
        }
      };
      request(options_1, function (error, response1, body) {
        if (response1.Error) {
          var error1 = {
            page: "flightcomboadddetails",
            func: "CreateTransactionIDCombo",
            message: response1.Error,
            content: response1.body,
            type: "warning",
            param: JSON.stringify(options_1)
          };
          C.writeErrorLog(error1, response1);
          resolve(false);
        } else {
          resolve(true);
        }
      })
    })
    
  }
//hold combo vmb
public holdflight(flyBookingCode,iddepart,idreturn): Promise<any>{
  return new Promise((resolve, reject) => {
  var options_2 = {
    'method': 'GET',
    'url': C.urls.baseUrl.urlMobile + '/get-pnr-flight?reservationNo=' + flyBookingCode + '&cacheDepartId=' + iddepart + '&cacheReturnId=' + idreturn + '',
    'headers': {
    }
  };
  request(options_2, function (error2, response2) {
    if (error2) throw new Error(error2);
    var obj = JSON.parse(response2.body);
    var depcode = "";
    var retcode = "";
    if (obj.length > 0) {
      var objAll = obj.filter((item) => { return item.name == "All" });
      var objDepart = obj.filter((item) => { return item.name == "Depart" });
      var objReturn = obj.filter((item) => { return item.name == "Return" });
      //Giữ vé được cả 2 chiều
      if (objAll && objAll.length > 0) {
        depcode = objAll[0].value;
        retcode = objAll[0].value;
      }
      //Giữ vé được chiều đi
      if (objDepart && objDepart.length > 0) {
        depcode = objDepart[0].value;
      }
      //Giữ vé được chiều đi
      if (objReturn && objReturn.length > 0) {
        retcode = objReturn[0].value;
      }
    }
    var objfly={depcode:depcode,retcode:retcode};
    resolve(objfly);
  });
  })
  
}
  convertNumberToString(input){
    let output =  input.toLocaleString().replace(/\,/g,'').replace(/\./g,'').toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g,'.');
    return output;
  }

  convertStringToNumber(input){
    let output =  input ? input.toLocaleString().replace(/\,/g,'').replace(/\./g,'').replace(/\:/g,'')*1 : 0;
    return output;
  }

  convertNumberToDouble(input){
    let ip = input ? input.toLocaleString().replace(/\,/g,'').replace(/\./g,'').replace(/\:/g,'')*1 : 0;
    let output =  Number(ip);
    return output;
  }

  convertNumberToFloat(input){
    let ip:any = input ? input.toLocaleString().replace(/\,/g,'').replace(/\./g,'').replace(/\:/g,'')*1 : 0;
    return ip;
  }

  checkItemInCurrentPeriod(item):Promise<any>{
    var se = this;
    var curdate = moment(new Date());
    return new Promise((resolve, reject) => {
      this.getCurrentPeriod().then((period)=>{
        //Khác giai đoạn menu hoặc ngày đặt qua ngày thứ 7 thì xóa cache giỏ hàng
        if( (moment(item.focomboPeriod.startDate).format('YYYY-MM-DD') != moment(period.periodStartDateNextWeek).format('YYYY-MM-DD') && moment(item.focomboPeriod.startDate).diff(moment(period.periodStartDate), 'minutes') != 0 &&  moment(item.focomboPeriod.endDate).diff(moment(period.periodEndDate), 'minutes') != 0)
        || curdate.diff(moment(item.focomboPeriod.endDate)) >=0){
          resolve(false);
        }else{
          resolve(true);
        }
      })
    })
  }

  checkData(data): Promise<any>{
    return new Promise((resolve, reject) => {
      var i =0;
      data.forEach(element => {
        this.checkItemInCurrentPeriod(element).then((check)=>{
          if(!check){
            this.removeItemInArray(data, element);
          }
          if(i == data.length-1){
            resolve(data);
          }
          i++;
        })
       
        
      })

      
    })
  }

  getCurrentPeriod(): Promise<any>{
    return new Promise((resolve, reject)=>{
      if(!this._foodService.periodStartDate && !this._foodService.periodEndDate){
        let newdate = moment(new Date()).format('YYYY-MM-DD');
        let url = C.urls.baseUrl.urlFood +"/api/FODetail/GetDetailByCategoryId?id=16&date="+newdate;
         this.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data)=>{
          if(data && data.focomboPeriod){
            this._foodService.periodStartDate = moment(data.focomboPeriod.startDate).add(-7,'days').format('YYYY-MM-DD');
            this._foodService.periodEndDate = moment(data.focomboPeriod.endDate).add(-7,'days').format('YYYY-MM-DD');
            this._foodService.periodStartDateNextWeek = moment(data.focomboPeriod.startDate).format('YYYY-MM-DD');
            this._foodService.periodEndDateNextWeek = moment(data.focomboPeriod.endDate).format('YYYY-MM-DD');
            resolve({ periodStartDate: moment(data.focomboPeriod.startDate).add(-7,'days').format('YYYY-MM-DD'), periodEndDate: moment(data.focomboPeriod.endDate).add(-7,'days').format('YYYY-MM-DD'), periodStartDateNextWeek: moment(data.focomboPeriod.startDate).format('YYYY-MM-DD'), periodEndDateNextWeek: moment(data.focomboPeriod.endDate).format('YYYY-MM-DD') });
          }else{
            let d = moment(new Date()).format('dddd');
            let fd = moment(new Date()).format('YYYY-MM-DD');
            let ed = moment(new Date()).add(4, 'days').format('YYYY-MM-DD');
            switch (d) {
              case "Tuesday":
                fd = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(3, 'days').format('YYYY-MM-DD');
                break;
              case "Wednesday":
                fd = moment(new Date()).add(-2, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(2, 'days').format('YYYY-MM-DD');
                break;
              case "Thursday":
                fd = moment(new Date()).add(-3, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(1, 'days').format('YYYY-MM-DD');
                break;
              case "Friday":
                fd = moment(new Date()).add(-4, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(0, 'days').format('YYYY-MM-DD');
                break;
              case "Saturday":
                fd = moment(new Date()).add(-5, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
                break;
              case "Sunday":
                fd = moment(new Date()).add(-6, 'days').format('YYYY-MM-DD');
                ed = moment(new Date()).add(-2, 'days').format('YYYY-MM-DD');
                break;
            }
              this._foodService.periodStartDate = fd;
              this._foodService.periodEndDate = ed;
              this._foodService.periodStartDateNextWeek = moment(fd).add(7, 'days').format('YYYY-MM-DD');
              this._foodService.periodEndDateNextWeek = moment(ed).add(7, 'days').format('YYYY-MM-DD');
            resolve({periodStartDate: fd, periodEndDate: ed, periodStartDateNextWeek: moment(fd).add(7,'days').format('YYYY-MM-DD'), periodEndDateNextWeek: moment(ed).add(7,'days').format('YYYY-MM-DD')})
          }
         })
      }else{
        resolve ({ periodStartDate: this._foodService.periodStartDate, periodEndDate: this._foodService.periodEndDate, periodStartDateNextWeek: moment(this._foodService.periodStartDateNextWeek), periodEndDateNextWeek: moment(this._foodService.periodEndDateNextWeek) });
      }
    })
    
   
  }

  setCacheCart(){
    this.storage.get("listItemsCart").then((data)=>{
      if(data){
        this.storage.remove("listItemsCart").then(()=>{
          this.storage.set("listItemsCart", this._foodService.listItemsCart);
        })
      }else{
        this.storage.set("listItemsCart", this._foodService.listItemsCart);
      }
    })
  }

  async showLoadingwithtimeout(){
    this.loader = this.loadCtrl.create({
       message: "",
       duration: 3000
     });
 
     (await this.loader).present();
   }

  async showLoading(){
   this.loader = this.loadCtrl.create({
      message: ""
    });

    (await this.loader).present();
  }

  async showLoadingWithMsg(msg){
    this.loader = this.loadCtrl.create({
       message: msg
     });
 
     (await this.loader).present();
   }

  async hideLoading(){
    if(this.loader){
      (await (this.loader)).dismiss();
    }
     
   }

   async showLoadingMessage(msg){
    this.loader = this.loadCtrl.create({
       message: msg
     });
 
     (await this.loader).present();
   }
 
   async hideLoadingMessage(){
      (await (this.loader)).dismiss();
    }

    /**
     * pdanh 82-02-2022: Đổi luồng do api build-link đã gọi luôn hàm giữ vé nên không dùng hàm này để check giữ VMB nữa
     * @param data 
     * @param paymentMethod 
     * @param bankId 
     * @param BanksTranfer 
     * @returns 
     */
    updatePaymentMethod(data, paymentMethod, bankId, BanksTranfer):Promise<any>{
      let param = {
      "paymentMethod": paymentMethod,
      "userToken": "",
      "bankId": bankId,
      "bankTransfer": BanksTranfer
    };
    return new Promise((resolve, reject) => {
      // var options = {
      //   method: 'POST',
      //   url: C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentSave/"+data.reservationId,
      //   timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      //   headers: {
      //     "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
      //     'Content-Type': 'application/json; charset=utf-8',
      //   },
      //   body: JSON.stringify(param)
      // };
      // request(options, function (error, response, body) {
      //   if (error) {
      //     error.page = "globalfunction";
      //     error.func = "updatePaymentMethod";
      //     error.param = JSON.stringify(options);
      //   }
      //   if (response.statusCode == 200) {
      //     let result = JSON.parse(body);
      //     if(!result.error){
      //       resolve(result);
      //     }else{
      //       resolve(false);
      //     }
      //   }
      // })
      resolve({isHoldSuccess: true});
    })
  }
  //thanh toán lại
  updatePaymentMethodNew(bookingCode, paymentMethod, bankId, BanksTranfer):Promise<any>{
  //   let param = {
  //   "paymentMethod": paymentMethod,
  //   "userToken": "",
  //   "bankId": bankId,
  //   "bankTransfer": BanksTranfer
  // };
   return new Promise((resolve, reject) => {
  //   var options = {
  //     method: 'POST',
  //     url: C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentSave/"+bookingCode,
  //     timeout: 180000, maxAttempts: 5, retryDelay: 20000,
  //     headers: {
  //       "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
  //       'Content-Type': 'application/json; charset=utf-8',
  //     },
  //     body: JSON.stringify(param)
  //   };
  //   request(options, function (error, response, body) {
  //     if (error) {
  //       error.page = "globalfunction";
  //       error.func = "updatePaymentMethod";
  //       error.param = JSON.stringify(options);
  //     }
  //     if (response.statusCode == 200) {
  //       let result = JSON.parse(body);
  //       if(!result.error){
  //         resolve(result);
  //       }else{
  //         resolve(false);
  //       }
  //     }
  //   })
    resolve({isHoldSuccess: true});
   })
  
}
  checkHoldTicket(data){
    var se = this, res = false;
    let url = C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+data.pnr.resNo;
    return new Promise((resolve, reject) => {
      //se.intervalHoldTicket = setInterval(() => {
        
        se.callCheckHoldTicket(url, data).then((check) => {
          if (!check && se.allowCheckHoldTicket) {
              res = false;
              setTimeout(() => {
                se.checkHoldTicket(data);
              }, 3000);
          }else{
            resolve(check);
          }
        })
      
      //}, 1000 * 3);

      setTimeout(() => {
        //clearInterval(se.intervalHoldTicket);
        se.allowCheckHoldTicket = false;
        // se.callCheckHoldTicket(url, data).then((check) => {
        //   resolve(check);
        // })
      }, 1000 * 15);
    })
   
  }

  getSummaryBooking(data) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+data.pnr.resNo,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "flightpaymentselect";
          error.func = "getSummaryBooking";
          error.param = JSON.stringify(options);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          resolve(result);
        }
      })
    })
  }
  
//giữ vé combo vmb
holdTicketCombo(flyBookingCode,iddepart,idreturn): Promise<any>{
  var se = this;
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/HoldPnr?reservationNo="+flyBookingCode+"&token=3b760e5dcf038878925b5613c32615ea3&cacheDepartId="+iddepart+"&cacheReturnId="+ idreturn,//GET /gate/apiv1/HoldPnr
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      if (error) {
        error.page = "globalfunction";
        error.func = "holdTicket";
        error.param = JSON.stringify(options);
      }
      if (response.statusCode == 200) {
        var obj = JSON.parse(response.body);
        var depcode = "";
        var retcode = "";
        if (obj.length > 0) {
          var objAll = obj.filter((item) => { return item.name == "All" });
          var objDepart = obj.filter((item) => { return item.name == "Depart" });
          var objReturn = obj.filter((item) => { return item.name == "Return" });
          //Giữ vé được cả 2 chiều
          if (objAll && objAll.length > 0) {
            depcode = objAll[0].value;
            retcode = objAll[0].value;
          }
          //Giữ vé được chiều đi
          if (objDepart && objDepart.length > 0) {
            depcode = objDepart[0].value;
          }
          //Giữ vé được chiều đi
          if (objReturn && objReturn.length > 0) {
            retcode = objReturn[0].value;
          }
        }
        var objfly={depcode:depcode,retcode:retcode};
        resolve(objfly);
      }
    })
  })
 
}
  callCheckHoldTicket(url, data){
    var res = false;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+data.pnr.resNo,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "globalfunction";
          error.func = "updatePaymentMethod";
          error.param = JSON.stringify(options);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          if(data.ischeckpayment == 0)//trả sau
          {
              if(result.isRoundTrip){//khứ hồi
                if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode != "T__" && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode != "T__"){
                  resolve(true);
                }else{
                  resolve(false);
                }
              }else{
                if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode != "T__"){
                  resolve(true);
                }else{
                  resolve(false);
                }
              }
          }else{//trả trước
  
            if(result.isRoundTrip){//khứ hồi
              //Có mã giữ chỗ và trạng thái đã xuất vé cả 2 chiều thì trả về true - hoàn thành
              if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode != "T__" && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode != "T__"
              && result.departFlight.status == 4 && result.returnFlight.status == 4){
                resolve(true);
              }else{
                resolve(false);
              }
            }else{//Có mã giữ chỗ và trạng thái đã xuất vé thì trả về true - hoàn thành
              if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode != "T__" && result.departFlight.status == 4){
                resolve(true);
              }else{
                resolve(false);
              }
            }
          }
        }
      })
     
      
    })
  }

  holdTicket(data){
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/HoldPnr?reservationNo="+data.pnr.resNo+"&token=3b760e5dcf038878925b5613c32615ea3&cacheDepartId="+data.departFlight.id+"&cacheReturnId="+ (data.returnFlight ? data.returnFlight.id : ""),//GET /gate/apiv1/HoldPnr
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      if (error) {
        error.page = "globalfunction";
        error.func = "holdTicket";
        error.param = JSON.stringify(options);
      }
      if (response.statusCode == 200) {
        console.log('hold ticket success!')
        //gọi api tạo transaction rớt xuống crm
        se.createFlightTransaction(data);
      }
    })
  }

  issueTicket(data){
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/IssueTicket?reservationNo="+data.pnr.resNo+"&token=3b760e5dcf038878925b5613c32651dus",
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      if (error) {
        error.page = "globalfunction";
        error.func = "issueTicket";
        error.param = JSON.stringify(options);
      }
      if (response.statusCode == 200) {
          //gọi api tạo transaction rớt xuống crm
          se.createFlightTransaction(data);
      }
    })
  }

  createFlightTransaction(data){
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/EndTranaction?resNo="+(data.pnr.bookingCode ? data.pnr.bookingCode :data.pnr.resNo)+"&sercureKey=3b760e5dcf038878925b5613c32651dus",
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      let objError = {
        page: "globalfunction",
        func: "createFlightTransaction",
        message: response.statusMessage,
        content: response.body,
        type: "warning",
        param: JSON.stringify(options)
      };
      if (error) {
        error.page = "globalfunction";
        error.func = "createFlightTransaction";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError,response);
      }
      if (response.statusCode == 200) {
         console.log('success');
      }
    })
  }

  createFlightTransactionCombo(resNo){
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlFlight + "gate/apiv1/EndTranaction?resNo="+resNo+"&sercureKey=3b760e5dcf038878925b5613c32651dus",
      timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      headers: {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    request(options, function (error, response, body) {
      let objError = {
        page: "globalfunction",
        func: "createFlightTransaction",
        message: response.statusMessage,
        content: response.body,
        type: "warning",
        param: JSON.stringify(options)
      };
      if (error) {
        error.page = "globalfunction";
        error.func = "createFlightTransaction";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError,response);
      }
      if (response.statusCode == 200) {
         console.log('success');
      }
    })
  }

  checkTicketAvaiable(data) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "gate/apiv1/CheckAvailable?resid="+data.reservationId,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        let objError = {
          page: "globalfunction",
          func: "checkTicketAvaiable",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        if (error) {
          error.page = "globalfunction";
          error.func = "checkTicketAvaiable";
          error.param = JSON.stringify(options);
          C.writeErrorLog(objError,response);
        }
        if (response.statusCode == 200) {
          resolve(body);
        }else{
          resolve(false)
        }
      })
    })
    
  }

  async showAlertOutOfTicket(itemFlight, type){
    var se = this;
    let msg ='';
    if(itemFlight.errorHoldTicket == 1){
        msg = 'Chuyến bay '+itemFlight.departFlight.airlineCode + ' từ ' + itemFlight.departCity + ' đi ' + itemFlight.returnCity + ' vào ' + itemFlight.checkInDisplay + ' lúc ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
    }
    else if(itemFlight.errorHoldTicket == 2){
        msg = 'Chuyến bay '+itemFlight.returnFlight.airlineCode + ' từ ' + itemFlight.returnCity + ' đi ' + itemFlight.departCity + ' vào ' + itemFlight.checkOutDisplay + ' lúc ' + moment(itemFlight.returnFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.returnFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
    }
    else{
        msg = 'Các chuyến bay đã chọn không giữ được vé. Vui lòng chọn chuyến bay khác!';
    }
    //let msg = 'Chuyến bay '+itemFlight.departFlight.airlineCode + ' từ ' + itemFlight.departCity + ' đi ' + itemFlight.returnCity + ' vào ' + itemFlight.checkInDisplay + ' lúc ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
    let alert = await se.alertCtrl.create({
      message: msg,
      header: type == 1 ? 'Rất tiếc, vé máy bay đã hết' : 'Rất tiếc, vé không giữ được',
      cssClass: "cls-alert-refreshPrice",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          se.goToSearchFlight();
        }
      }
    ]
  });
  alert.present();
  }

  async showAlertOutOfTicketFromMytrip(itemFlight, type){
    var se = this;
    let msg ='';
    if(itemFlight.errorHoldTicket == 1){
        msg = 'Chuyến bay '+itemFlight.departFlight.airlineCode + ' từ ' + itemFlight.departCity + ' đi ' + itemFlight.returnCity + ' vào ' + itemFlight.checkInDisplay + ' lúc ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
    }
    else if(itemFlight.errorHoldTicket == 2){
        msg = 'Chuyến bay '+itemFlight.returnFlight.airlineCode + ' từ ' + itemFlight.returnCity + ' đi ' + itemFlight.departCity + ' vào ' + itemFlight.checkOutDisplay + ' lúc ' + moment(itemFlight.returnFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.returnFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
    }
    else{
        msg = 'Các chuyến bay đã chọn không giữ được vé. Vui lòng chọn chuyến bay khác!';
    }
    //let msg = 'Chuyến bay '+itemFlight.departFlight.airlineCode + ' từ ' + itemFlight.departCity + ' đi ' + itemFlight.returnCity + ' vào ' + itemFlight.checkInDisplay + ' lúc ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
    let alert = await se.alertCtrl.create({
      message: msg,
      header: type == 1 ? 'Rất tiếc, vé máy bay đã hết' : 'Rất tiếc, vé không giữ được',
      cssClass: "cls-alert-refreshPrice",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          se._flightService.itemTabFlightActive.emit(true);
          se.valueGlobal.backValue = "homeflight";
          se._flightService.itemMenuFlightClick.emit(2);
          se.navCtrl.navigateBack('/tabs/tab1');
        }
      }
    ]
  });
  alert.present();
  }

  async showAlertPaymentFail(){
    var se = this;
    let msg = 'Đã có lỗi xảy ra. Vui lòng thử lại sau!';
    let alert = await this.alertCtrl.create({
      message: msg,
      header: 'Rất tiếc, thanh toán không thành công',
      cssClass: "cls-alert-refreshPrice",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          this._flightService.itemTabFlightActive.emit(true);
          this.valueGlobal.backValue = 'homeflight';
          this._flightService.itemMenuFlightClick.emit(2);
          this.navCtrl.navigateBack('/tabs/tab1');
        }
      }
    ]
  });
  alert.present();
  }

  goToSearchFlight(){
    this._flightService.itemFlightCache.step = 2;
    this._flightService.itemChangeTicketFlight.emit(1);
    this.navCtrl.navigateBack('/flightsearchresult');
  }

  deepClone<T>(value): T{
    return clone<T>(value);
  }

 findDuplicateElements<T, V>(array: T[], property: string, value: V): T[] {
    let foundElements: T[] = [];
    for(var i: number = 0, len: number = array.length; i < len; i++) {
        if(array[i][property] === value) {
            foundElements.push(array[i]);
        }
    }
    return foundElements;
}

refreshToken(mmemberid, devicetoken): Promise<any> {
  var se = this;
  return new Promise((resolve, reject) => {
    if(devicetoken){
      se.loginwithdevicetoken(mmemberid, devicetoken).then((token)=>{
        resolve(token);
      });
    }else{
      se.fcm.getToken().then((newtoken)=>{
        se.loginwithdevicetoken(mmemberid, newtoken).then((token)=>{
          resolve(token);
        });
      })
    }
    
  })
      
}

  loginwithdevicetoken(memberid,token): Promise<any>{
      var se = this;
      return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/Account/Login',
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers:
        {
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body:
        {
          emailOrPhone: "",
          password: "",
          rememberMe: true,
          memberId: memberid,
          deviceToken: token
        },
        json: true
      };
  
      request(options, function (error, response, body) {
        if (error) {
          error.page = "loginusername";
          error.func = "logintk";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error,response);
        };
       
        if (response.statusCode != 200) {
          var objError = {
            page: "globalfunction",
            func: "refreshToken",
            message: response.statusMessage,
            content: response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
          C.writeErrorLog(objError,response);
        }
        if (error) {
          error.page = "globalFunction";
          error.func = "refreshToken";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error,response);
        } else {
           // var result=JSON.parse(body);
        if (body && body.auth_token) {
          var decoded = jwt_decode(body.auth_token);
            if (decoded) {
              se.storage.remove('auth_token').then(()=>{
                se.storage.set("auth_token", body.auth_token);
              })
  
            }
            resolve(body.auth_token);
          }
        }
      })
    })
  }

  getNationList(){
    return [ 
      {name: 'Việt Nam', code: 'VN'}, 
      {name: 'Afghanistan', code: 'AF'}, 
      {name: 'Åland Islands', code: 'AX'}, 
      {name: 'Albania', code: 'AL'}, 
      {name: 'Algeria', code: 'DZ'}, 
      {name: 'American Samoa', code: 'AS'}, 
      {name: 'AndorrA', code: 'AD'}, 
      {name: 'Angola', code: 'AO'}, 
      {name: 'Anguilla', code: 'AI'}, 
      {name: 'Antarctica', code: 'AQ'}, 
      {name: 'Antigua and Barbuda', code: 'AG'}, 
      {name: 'Argentina', code: 'AR'}, 
      {name: 'Armenia', code: 'AM'}, 
      {name: 'Aruba', code: 'AW'}, 
      {name: 'Australia', code: 'AU'}, 
      {name: 'Austria', code: 'AT'}, 
      {name: 'Azerbaijan', code: 'AZ'}, 
      {name: 'Bahamas', code: 'BS'}, 
      {name: 'Bahrain', code: 'BH'}, 
      {name: 'Bangladesh', code: 'BD'}, 
      {name: 'Barbados', code: 'BB'}, 
      {name: 'Belarus', code: 'BY'}, 
      {name: 'Belgium', code: 'BE'}, 
      {name: 'Belize', code: 'BZ'}, 
      {name: 'Benin', code: 'BJ'}, 
      {name: 'Bermuda', code: 'BM'}, 
      {name: 'Bhutan', code: 'BT'}, 
      {name: 'Bolivia', code: 'BO'}, 
      {name: 'Bosnia and Herzegovina', code: 'BA'}, 
      {name: 'Botswana', code: 'BW'}, 
      {name: 'Bouvet Island', code: 'BV'}, 
      {name: 'Brazil', code: 'BR'}, 
      {name: 'British Indian Ocean Territory', code: 'IO'}, 
      {name: 'Brunei Darussalam', code: 'BN'}, 
      {name: 'Bulgaria', code: 'BG'}, 
      {name: 'Burkina Faso', code: 'BF'}, 
      {name: 'Burundi', code: 'BI'}, 
      {name: 'Cambodia', code: 'KH'}, 
      {name: 'Cameroon', code: 'CM'}, 
      {name: 'Canada', code: 'CA'}, 
      {name: 'Cape Verde', code: 'CV'}, 
      {name: 'Cayman Islands', code: 'KY'}, 
      {name: 'Central African Republic', code: 'CF'}, 
      {name: 'Chad', code: 'TD'}, 
      {name: 'Chile', code: 'CL'}, 
      {name: 'China', code: 'CN'}, 
      {name: 'Christmas Island', code: 'CX'}, 
      {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
      {name: 'Colombia', code: 'CO'}, 
      {name: 'Comoros', code: 'KM'}, 
      {name: 'Congo', code: 'CG'}, 
      {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
      {name: 'Cook Islands', code: 'CK'}, 
      {name: 'Costa Rica', code: 'CR'}, 
      {name: 'Cote D\'Ivoire', code: 'CI'}, 
      {name: 'Croatia', code: 'HR'}, 
      {name: 'Cuba', code: 'CU'}, 
      {name: 'Cyprus', code: 'CY'}, 
      {name: 'Czech Republic', code: 'CZ'}, 
      {name: 'Denmark', code: 'DK'}, 
      {name: 'Djibouti', code: 'DJ'}, 
      {name: 'Dominica', code: 'DM'}, 
      {name: 'Dominican Republic', code: 'DO'}, 
      {name: 'Ecuador', code: 'EC'}, 
      {name: 'Egypt', code: 'EG'}, 
      {name: 'El Salvador', code: 'SV'}, 
      {name: 'Equatorial Guinea', code: 'GQ'}, 
      {name: 'Eritrea', code: 'ER'}, 
      {name: 'Estonia', code: 'EE'}, 
      {name: 'Ethiopia', code: 'ET'}, 
      {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
      {name: 'Faroe Islands', code: 'FO'}, 
      {name: 'Fiji', code: 'FJ'}, 
      {name: 'Finland', code: 'FI'}, 
      {name: 'France', code: 'FR'}, 
      {name: 'French Guiana', code: 'GF'}, 
      {name: 'French Polynesia', code: 'PF'}, 
      {name: 'French Southern Territories', code: 'TF'}, 
      {name: 'Gabon', code: 'GA'}, 
      {name: 'Gambia', code: 'GM'}, 
      {name: 'Georgia', code: 'GE'}, 
      {name: 'Germany', code: 'DE'}, 
      {name: 'Ghana', code: 'GH'}, 
      {name: 'Gibraltar', code: 'GI'}, 
      {name: 'Greece', code: 'GR'}, 
      {name: 'Greenland', code: 'GL'}, 
      {name: 'Grenada', code: 'GD'}, 
      {name: 'Guadeloupe', code: 'GP'}, 
      {name: 'Guam', code: 'GU'}, 
      {name: 'Guatemala', code: 'GT'}, 
      {name: 'Guernsey', code: 'GG'}, 
      {name: 'Guinea', code: 'GN'}, 
      {name: 'Guinea-Bissau', code: 'GW'}, 
      {name: 'Guyana', code: 'GY'}, 
      {name: 'Haiti', code: 'HT'}, 
      {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
      {name: 'Holy See (Vatican City State)', code: 'VA'}, 
      {name: 'Honduras', code: 'HN'}, 
      {name: 'Hong Kong', code: 'HK'}, 
      {name: 'Hungary', code: 'HU'}, 
      {name: 'Iceland', code: 'IS'}, 
      {name: 'India', code: 'IN'}, 
      {name: 'Indonesia', code: 'ID'}, 
      {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
      {name: 'Iraq', code: 'IQ'}, 
      {name: 'Ireland', code: 'IE'}, 
      {name: 'Isle of Man', code: 'IM'}, 
      {name: 'Israel', code: 'IL'}, 
      {name: 'Italy', code: 'IT'}, 
      {name: 'Jamaica', code: 'JM'}, 
      {name: 'Japan', code: 'JP'}, 
      {name: 'Jersey', code: 'JE'}, 
      {name: 'Jordan', code: 'JO'}, 
      {name: 'Kazakhstan', code: 'KZ'}, 
      {name: 'Kenya', code: 'KE'}, 
      {name: 'Kiribati', code: 'KI'}, 
      {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
      {name: 'Korea, Republic of', code: 'KR'}, 
      {name: 'Kuwait', code: 'KW'}, 
      {name: 'Kyrgyzstan', code: 'KG'}, 
      {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
      {name: 'Latvia', code: 'LV'}, 
      {name: 'Lebanon', code: 'LB'}, 
      {name: 'Lesotho', code: 'LS'}, 
      {name: 'Liberia', code: 'LR'}, 
      {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
      {name: 'Liechtenstein', code: 'LI'}, 
      {name: 'Lithuania', code: 'LT'}, 
      {name: 'Luxembourg', code: 'LU'}, 
      {name: 'Macao', code: 'MO'}, 
      {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
      {name: 'Madagascar', code: 'MG'}, 
      {name: 'Malawi', code: 'MW'}, 
      {name: 'Malaysia', code: 'MY'}, 
      {name: 'Maldives', code: 'MV'}, 
      {name: 'Mali', code: 'ML'}, 
      {name: 'Malta', code: 'MT'}, 
      {name: 'Marshall Islands', code: 'MH'}, 
      {name: 'Martinique', code: 'MQ'}, 
      {name: 'Mauritania', code: 'MR'}, 
      {name: 'Mauritius', code: 'MU'}, 
      {name: 'Mayotte', code: 'YT'}, 
      {name: 'Mexico', code: 'MX'}, 
      {name: 'Micronesia, Federated States of', code: 'FM'}, 
      {name: 'Moldova, Republic of', code: 'MD'}, 
      {name: 'Monaco', code: 'MC'}, 
      {name: 'Mongolia', code: 'MN'}, 
      {name: 'Montserrat', code: 'MS'}, 
      {name: 'Morocco', code: 'MA'}, 
      {name: 'Mozambique', code: 'MZ'}, 
      {name: 'Myanmar', code: 'MM'}, 
      {name: 'Namibia', code: 'NA'}, 
      {name: 'Nauru', code: 'NR'}, 
      {name: 'Nepal', code: 'NP'}, 
      {name: 'Netherlands', code: 'NL'}, 
      {name: 'Netherlands Antilles', code: 'AN'}, 
      {name: 'New Caledonia', code: 'NC'}, 
      {name: 'New Zealand', code: 'NZ'}, 
      {name: 'Nicaragua', code: 'NI'}, 
      {name: 'Niger', code: 'NE'}, 
      {name: 'Nigeria', code: 'NG'}, 
      {name: 'Niue', code: 'NU'}, 
      {name: 'Norfolk Island', code: 'NF'}, 
      {name: 'Northern Mariana Islands', code: 'MP'}, 
      {name: 'Norway', code: 'NO'}, 
      {name: 'Oman', code: 'OM'}, 
      {name: 'Pakistan', code: 'PK'}, 
      {name: 'Palau', code: 'PW'}, 
      {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
      {name: 'Panama', code: 'PA'}, 
      {name: 'Papua New Guinea', code: 'PG'}, 
      {name: 'Paraguay', code: 'PY'}, 
      {name: 'Peru', code: 'PE'}, 
      {name: 'Philippines', code: 'PH'}, 
      {name: 'Pitcairn', code: 'PN'}, 
      {name: 'Poland', code: 'PL'}, 
      {name: 'Portugal', code: 'PT'}, 
      {name: 'Puerto Rico', code: 'PR'}, 
      {name: 'Qatar', code: 'QA'}, 
      {name: 'Reunion', code: 'RE'}, 
      {name: 'Romania', code: 'RO'}, 
      {name: 'Russian Federation', code: 'RU'}, 
      {name: 'RWANDA', code: 'RW'}, 
      {name: 'Saint Helena', code: 'SH'}, 
      {name: 'Saint Kitts and Nevis', code: 'KN'}, 
      {name: 'Saint Lucia', code: 'LC'}, 
      {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
      {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
      {name: 'Samoa', code: 'WS'}, 
      {name: 'San Marino', code: 'SM'}, 
      {name: 'Sao Tome and Principe', code: 'ST'}, 
      {name: 'Saudi Arabia', code: 'SA'}, 
      {name: 'Senegal', code: 'SN'}, 
      {name: 'Serbia and Montenegro', code: 'CS'}, 
      {name: 'Seychelles', code: 'SC'}, 
      {name: 'Sierra Leone', code: 'SL'}, 
      {name: 'Singapore', code: 'SG'}, 
      {name: 'Slovakia', code: 'SK'}, 
      {name: 'Slovenia', code: 'SI'}, 
      {name: 'Solomon Islands', code: 'SB'}, 
      {name: 'Somalia', code: 'SO'}, 
      {name: 'South Africa', code: 'ZA'}, 
      {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
      {name: 'Spain', code: 'ES'}, 
      {name: 'Sri Lanka', code: 'LK'}, 
      {name: 'Sudan', code: 'SD'}, 
      {name: 'Suriname', code: 'SR'}, 
      {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
      {name: 'Swaziland', code: 'SZ'}, 
      {name: 'Sweden', code: 'SE'}, 
      {name: 'Switzerland', code: 'CH'}, 
      {name: 'Syrian Arab Republic', code: 'SY'}, 
      {name: 'Taiwan, Province of China', code: 'TW'}, 
      {name: 'Tajikistan', code: 'TJ'}, 
      {name: 'Tanzania, United Republic of', code: 'TZ'}, 
      {name: 'Thailand', code: 'TH'}, 
      {name: 'Timor-Leste', code: 'TL'}, 
      {name: 'Togo', code: 'TG'}, 
      {name: 'Tokelau', code: 'TK'}, 
      {name: 'Tonga', code: 'TO'}, 
      {name: 'Trinidad and Tobago', code: 'TT'}, 
      {name: 'Tunisia', code: 'TN'}, 
      {name: 'Turkey', code: 'TR'}, 
      {name: 'Turkmenistan', code: 'TM'}, 
      {name: 'Turks and Caicos Islands', code: 'TC'}, 
      {name: 'Tuvalu', code: 'TV'}, 
      {name: 'Uganda', code: 'UG'}, 
      {name: 'Ukraine', code: 'UA'}, 
      {name: 'United Arab Emirates', code: 'AE'}, 
      {name: 'United Kingdom', code: 'GB'}, 
      {name: 'United States', code: 'US'}, 
      {name: 'United States Minor Outlying Islands', code: 'UM'}, 
      {name: 'Uruguay', code: 'UY'}, 
      {name: 'Uzbekistan', code: 'UZ'}, 
      {name: 'Vanuatu', code: 'VU'}, 
      {name: 'Venezuela', code: 'VE'}, 
      
      {name: 'Virgin Islands, British', code: 'VG'}, 
      {name: 'Virgin Islands, U.S.', code: 'VI'}, 
      {name: 'Wallis and Futuna', code: 'WF'}, 
      {name: 'Western Sahara', code: 'EH'}, 
      {name: 'Yemen', code: 'YE'}, 
      {name: 'Zambia', code: 'ZM'}, 
      {name: 'Zimbabwe', code: 'ZW'} 
    ]
  }

  getListSubName(){
    return [
      {id: 1, value: ['Nguyễn','nguyễn'], rawValue: ['Nguyen', 'nguyen'], mapSuggestValue: ['nguen', 'ngyen','ngen','nhuyen','nhuen','nhyen','ng','nh','nguyem', 'nguyenx','nguyeen','nguyeenx']}, 
      {id: 2, value: ['Trần','trần'], rawValue: ['Tran', 'tran'], mapSuggestValue: ['tr', 'tra', 'tan', 'ta', 'tn', 'tranf']}, 
      {id: 3, value: ['Lê','lê'], rawValue: ['Le', 'le'], mapSuggestValue: ['lế', 'lề', 'lệ', 'lễ', 'lể']}, 
      {id: 4, value: ['Phạm','phạm'], rawValue: ['Pham', 'pham'], mapSuggestValue: ['ph','pam','phm','phamj']}, 
      {id: 5, value: ['Hoàng','hoàng'], rawValue: ['Hoang', 'hoang'], mapSuggestValue: ['ho','hoa','hoan','hoam','hoag','hang','hoamg','hamg','hoangf']}, 
      {id: 6, value: ['Huỳnh','huỳnh'], rawValue: ['Huynh', 'huynh'],mapSuggestValue: ['hu','huy','huyn','hynh','hunh','huyng','hunh','huynhf'] }, 
      {id: 7, value: ['Phan','phan'], rawValue: ['Phan', 'phan'], mapSuggestValue: ['ph','pan','phn','pham','pam']}, 
      {id: 8, value: ['Vũ', 'vũ'], rawValue: ['Vu', 'vu'], mapSuggestValue: ['vú','vụ','vủ','vù','vux']}, 
      {id: 9, value: ['Võ','võ'], rawValue: ['Vo','vo'], mapSuggestValue: ['vọ','vó','vỏ','vò','vox']}, 
      {id: 10, value: ['Đặng', 'đặng'], rawValue: ['Dang', 'dang'], mapSuggestValue: ['da', 'dan', 'dawng','dawngj','ddawng','ddawngj']}, 
      {id: 11, value: ['Bùi','bùi'], rawValue: ['Bui', 'bui'], mapSuggestValue: ['bu','bui','bụi','búi','bủi','bũi','buif']}, 
      {id: 12, value: ['Đỗ', 'đỗ'], rawValue: ['Do','do'], mapSuggestValue: ['ddoox', 'ddoo','ddỗ', 'đoỗ', 'dỗ', 'đõ']},
      {id: 13, value: ['Hồ', 'hồ'], rawValue: ['Ho', 'ho'], mapSuggestValue: ['hố', 'hổ', 'hộ', 'hỗ', 'hoof', 'hoo']}, 
      {id: 14, value: ['Ngô', 'ngô'], rawValue: ['Ngo', 'ngo'], mapSuggestValue: ['nho', 'ngoo', 'ngộ', 'ngồ', 'ngố', 'ngỗ', 'ngổ']}, 
      {id: 15, value: ['Dương', 'dương'], rawValue: ['Duong', 'duong'], mapSuggestValue: ['du', 'duo', 'duon', 'dung', 'dong', 'duơng', 'dưong', 'duwong', 'duwowng', 'duowng']},
      {id: 16, value: ['Lý', 'lý'], rawValue: ['Ly', 'ly'], mapSuggestValue: ['lỳ', 'lỷ', 'lỵ', 'lỹ', 'lys']},
      {id: 17, value: ['Lò', 'lò'], rawValue: ['Lo','lo'], mapSuggestValue: ['ló', 'lọ', 'lỏ', 'lõ', 'lof']}, 
      {id: 18, value: ['Lường', 'lường'], rawValue: ['Luong', 'luong'], mapSuggestValue: ['lu', 'luo', 'luon', 'long', 'luwơngf', 'luowngf', 'lườn','lươgf']}, 
      {id: 19, value: ['Quàng', 'quàng'], rawValue: ['Quang', 'quang'], mapSuggestValue: ['quangf', 'quanfg', 'quan', 'qàng', 'qangf']}, 
      {id: 20, value: ['Tòng', 'tòng'], rawValue: ['Tong','tong'], mapSuggestValue: ['tòn', 'tng', 'tongf', 'tonfg', 'tóng', 'tỏng','tọng', 'tõng']},
      {id: 21, value: ['Cà', 'cà'], rawValue: ['Ca','ca'], mapSuggestValue: ['cá', 'cả', 'cạ', 'cã', 'caf']}, 
      {id: 22, value: ['Lỡo', 'lỡo'], rawValue: ['Loo','loo'], mapSuggestValue: ['lỗ', 'lơxo', 'loox', 'lỏo']}, 
      {id: 23, value: ['Mè', 'mè'], rawValue: ['Me','me'], mapSuggestValue: ['mé', 'mẹ', 'mẻ', 'mẽ', 'mef']}, 
      {id: 24, value: ['Lù', 'lù'], rawValue: ['Lu', 'lu'], mapSuggestValue: ['lụ', 'lủ', 'lũ', 'lú', 'luf', 'lừ']},
      {id: 25, value: ['Lềm', 'lềm'], rawValue: ['Lem', 'lem'], mapSuggestValue: ['lếm', 'lểm', 'lệm', 'lễm', 'lèm', 'lêfm', 'leemf']}, 
      {id: 26, value: ['Ngần', 'ngần'], rawValue: ['Ngan','ngan'], mapSuggestValue: ['ngấn', 'ngận', 'ngẩn', 'ngẩn', 'ngânf', 'ngaanf', 'nganaf']}, 
      {id: 27, value: ['Nông', 'nông'], rawValue: ['Nong', 'nong'], mapSuggestValue: ['nô', 'nôn', 'noong']}, 
      {id: 28, value: ['Bạc', 'bạc'], rawValue: ['Bac','bac'], mapSuggestValue: ['bác', 'bàc', 'bacj']},
      {id: 29, value: ['Bế', 'bế'], rawValue: ['Be','be'], mapSuggestValue: ['bề', 'bể', 'bệ', 'bễ', 'bee', 'beế', 'bees']}, 
      {id: 30, value: ['Bua', 'bua'], rawValue: ['Bua', 'bua'], mapSuggestValue: ['bu', 'búa', 'bùa', 'bủa', 'bụa', 'bũa']}, 
      {id: 31, value: ['Bun', 'bun'], rawValue: ['Bun', 'bun'], mapSuggestValue: ['bún', 'bùn', 'bủn', 'bụn', 'bũn', 'bum']}, 
      {id: 32, value: ['Cà', 'cà'], rawValue: ['Ca', 'ca'], mapSuggestValue: ['cá', 'cả', 'cạ', 'cã', 'caf']},
      {id: 33, value: ['Cầm', 'cầm'], rawValue: ['Cam', 'cam'], mapSuggestValue: ['cầ', 'cần', 'cẩm', 'cậm', 'cẫm', 'cấm', 'caàm', 'caamf', 'câmf']}, 
      {id: 34, value: ['Chẩu', 'chẩu'], rawValue: ['Chau', 'chau'], mapSuggestValue: ['chẩ', 'chảu', 'chaảu', 'chaaur', 'chẫu', 'chậu', 'chấu', 'chầu']}, 
      {id: 35, value: ['Chiêu', 'chiêu'], rawValue: ['Chieu', 'chieu'], mapSuggestValue: ['chieu', 'chiê', 'cheeu', 'chieeu', 'chêu']}, 
      {id: 36, value: ['Đèo', 'đèo'], rawValue: ['Deo', 'deo'], mapSuggestValue: ['đeo', 'đéo', 'đẻo', 'đẹo', 'đẽo', 'ddeof', 'ddèo']},
      {id: 37, value: ['Điêu', 'điêu'], rawValue: ['Dieu', 'dieu'], mapSuggestValue: ['điê', 'đieu', 'diêu', 'ddiêu', 'ddieeu']}, 
      {id: 38, value: ['Khằm', 'khẳm'], rawValue: ['Kham', 'kham'], mapSuggestValue: ['khẳ', 'khẳn', 'khẩm', 'kẳm', 'khamwr', 'khănr']}, 
      {id: 39, value: ['Leo', 'leo'], rawValue: ['Leo','leo'], mapSuggestValue: ['le', 'lo', 'lao', 'lro', 'lêo']}, 
      {id: 40, value: ['Lềm', 'lềm'], rawValue: ['Lem','lem'], mapSuggestValue: ['lền', 'lề', 'lêm', 'lếm', 'lểm', 'lệm', 'lễm', 'leemf', 'lêmf', 'lèm', 'lênf']},
  
      {id: 41, value: ['Lô', 'lô'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['loo', 'lộ', 'lổ', 'lồ', 'lố']},
      {id: 42, value: ['La', 'la'], rawValue: ['La','la'], mapSuggestValue: ['là', 'lạ', 'lả', 'lá']}, 
      {id: 43, value: ['Lộc', 'lộc'], rawValue: ['Loc', 'loc'], mapSuggestValue: ['lộ', 'lọc', 'loọc', 'loocj']}, 
      {id: 44, value: ['Lự', 'lự'], rawValue: ['Lu', 'lu'], mapSuggestValue: ['lứ', 'lử', 'lu', 'lụ', 'luw', 'luwj', 'lựu']},
      {id: 45, value: ['Lừ', 'lừ'], rawValue: ['Lu','lu'], mapSuggestValue: ['lứ', 'lử', 'lu', 'lù', 'luf', 'luwf', 'lừu']}, 
  
      //Lường, Mang, Mè, Nam, Nông, Ngần, Ngu, Nho, Nhọt, Panh, Pha, Phia, Quàng, Sầm, Tụ, Tày, Tao, Tạo, Tòng, Vang, Vì, Sa (hay Xa), Xin
      {id: 46, value: ['Lường','lường'], rawValue: ['Luong', 'luong'], mapSuggestValue: ['lươg', 'lươn', 'lươngf','lừng','luwowngf','lướng']}, 
      {id: 47, value: ['Mang','mang'], rawValue: ['Mang', 'mang'], mapSuggestValue: ['ma', 'man', 'mag', 'mng']}, 
      {id: 48, value: ['Mè', 'mè'], rawValue: ['Me','me'], mapSuggestValue: ['mef', 'mẻ', 'mẹ', 'mé','mẽ']},
      {id: 49, value: ['Nam', 'nam'], rawValue: ['Nam', 'nam'], mapSuggestValue: ['na', 'nm', 'nan', 'mam']}, 
      {id: 50, value: ['Ngu', 'ngu'], rawValue: ['Ngu', 'ngu'], mapSuggestValue: ['nu', 'mgu','nhu']}, 
      {id: 51, value: ['Nho', 'nho'], rawValue: ['Nho','nho'], mapSuggestValue: ['no', 'mho']}, 
      {id: 52, value: ['Nhọt', 'nhọt'], rawValue: ['Nhot', 'nhot'], mapSuggestValue: ['nhọ', 'nht', 'nhoj', 'nhotj', 'nhojt', 'mhot','Mhọt', 'ngọt']},
      {id: 53, value: ['Panh', 'panh'], rawValue: ['Panh', 'panh'], mapSuggestValue: ['pan', 'panh', 'pamh', 'pang', 'phanh']}, 
      {id: 54, value: ['Pha', 'pha'], rawValue: ['Pha', 'pha'], mapSuggestValue: ['pa', 'ph']}, 
      {id: 55, value: ['Phia', 'phia'], rawValue:  ['Phia', 'phia'], mapSuggestValue: ['phi', 'pia', 'ph']}, 
      {id: 56, value: ['Quàng', 'quàng'], rawValue: ['Quang', 'quang'], mapSuggestValue: ['qu', 'qua', 'quan', 'quanfg', 'quangf', 'quanh', 'qang','quan', 'quamg']},
      {id: 57, value: ['Sầm', 'sầm'], rawValue: ['Sam','sam'], mapSuggestValue: ['sa', 'sm', 'saamf', 'sama', 'san']}, 
      {id: 58, value: ['Tụ', 'tụ'], rawValue: ['Tu', 'tu'], mapSuggestValue: ['tuj', 'tù', 'tú', 'tủ', 'tũ']}, 
      {id: 59, value: ['Tày','tày'], rawValue: ['Tay','tay'], mapSuggestValue: ['tà', 'tỳ', 'tayf', 'tài', 'táy','ày', 'yày','rày']}, 
      {id: 60, value: ['Tao', 'tao'], rawValue:  ['Tao', 'tao'],mapSuggestValue: ['ta', 'to', 'ta0', 'tào', 'táo', 'tảo', 'tão'] },
      {id: 61, value: ['Tạo', 'tạo'], rawValue: ['Tao', 'tao'], mapSuggestValue: ['tạ0', 'taoj', 'tajo', 'tọ']}, 
      {id: 62, value: ['Tòng', 'tòng'], rawValue: ['Tong', 'tong'], mapSuggestValue: ['tòn', 'tng', 'tonfg', 'tongf', 'tóng', 'tỏng', 'tọng', 'tõng', 'tòmg', 'tonhf', 'tònh']}, 
      {id: 63, value: ['Vang', 'vang'], rawValue: ['Vang', 'vang'], mapSuggestValue: ['van', 'vng', 'vamg', 'vanh']}, 
      {id: 64, value: ['Vì', 'vì'], rawValue: ['Vi', 'vi'], mapSuggestValue: ['ví', 'vỉ', 'vị', 'vĩ', 'vỳ', 'vyf', 'vif']},
      {id: 65, value: ['Sa', 'sa'], rawValue: ['Sa', 'sa'], mapSuggestValue: ['sas', 'sá', 'sạ', 'sã', 'sà', 'sả']}, 
      {id: 66, value: ['Xa', 'xa'], rawValue: ['Xa', 'xa'], mapSuggestValue: ['xax', 'xá', 'xạ', 'xã', 'xà', 'xả']}, 
      {id: 67, value: ['Xin', 'xin'], rawValue: ['Xin', 'xin'], mapSuggestValue: ['xim', 'xi', 'xịn', 'xĩn', 'xìn', 'xỉn', 'sin']}, 
      
      {id: 68, value: ['Hà', 'hà'], rawValue: ['Ha', 'ha'], mapSuggestValue: ['ga', 'hả', 'há', 'hạ', 'hã', 'haf','hầ', 'hằ']},
      {id: 69, value: ['An', 'an'], rawValue: ['An', 'an'], mapSuggestValue: ['am', 'án', 'àn', 'ãn', 'ản']},
      {id: 70, value: ['Anh', 'anh'], rawValue: ['Anh', 'anh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 71, value: ['Ao', 'ao'], rawValue: ['Ao', 'ao'], mapSuggestValue: ['a0', 'áo', 'ào', 'ão', 'ảo', 'ăo', 'âo']},
      {id: 72, value: ['Ánh', 'ánh'], rawValue: ['Anh', 'anh'], mapSuggestValue: ['ành', 'ãnh', 'ảnh', 'ạnh', 'ámh', 'asnh', 'anhs']},
      {id: 73, value: ['Ân', 'ân'], rawValue: ['An', 'an'], mapSuggestValue: ['ăn', 'âm', 'ấn', 'ần', 'ẩn', 'ận', 'ẫn', 'aan', 'aam']},
      {id: 74, value: ['Âu Dương', 'âu dương'], rawValue: ['Au Duong', 'au duong'], mapSuggestValue: ['aau duwowng', 'âu rương', 'âu giương', 'âu zương', 'au dương', 'âu dươnh', 'âu duơng', 'âu dưong']},
      {id: 75, value: ['Ấu', 'ấu'], rawValue: ['Au', 'au'], mapSuggestValue: ['ắu', 'ăú', 'ầu', 'ẩu', 'ẫu', 'ậu', 'aáu', 'aaus']},
      {id: 76, value: ['Bá', 'bá'], rawValue: ['Ba', 'ba'], mapSuggestValue: ['ba', 'bà', 'bả', 'bã', 'bạ', 'bas']},
      {id: 77, value: ['Bạc', 'bạc'], rawValue: ['Bac', 'bac'], mapSuggestValue: ['bác', 'bàc', 'bacj', 'bãc', 'bảc', 'bặc', 'bậc']},
      {id: 78, value: ['Bạch', 'bạch'], rawValue: ['Bach', 'bach'], mapSuggestValue: ['bacg', 'bách', 'bajch', 'bachj']},
      {id: 79, value: ['Bàn', 'bàn'], rawValue: ['Ban', 'ban'], mapSuggestValue: ['bàm', 'bà', 'bạn', 'bãn', 'bản', 'bán', 'banf', 'bafn']},
      {id: 80, value: ['Bàng', 'bàng'], rawValue: ['Bang', 'bang'], mapSuggestValue: ['bamgf', 'báng', 'bảng', 'bãng', 'bạng', 'bành', 'bangf', 'bafng', 'bàmg']},
      {id: 81, value: ['Bành', 'bành'], rawValue: ['Banh', 'banh'], mapSuggestValue: ['bamh', 'bánh', 'bảnh', 'bãnh', 'bạnh', 'bàng', 'banhf', 'bafnh', 'bàmh']},
      {id: 82, value: ['Bảo', 'bảo'], rawValue: ['Bao', 'bao'], mapSuggestValue: ['bả0', 'bả', 'baro', 'báo', 'bào', 'bạo', 'bão', 'bẩo', 'bẳo']},
  
      {id: 83, value: ['Bế', 'bế'], rawValue: ['Be', 'be'], mapSuggestValue: ['be', 'bê', 'bề', 'bể', 'bệ', 'bễ', 'bão', 'bẩo', 'bẳo']},
      {id: 84, value: ['Bì', 'bì'], rawValue: ['Bi', 'bi'], mapSuggestValue: ['b', 'bí', 'bĩ', 'bỉ', 'bị']},
      {id: 85, value: ['Biện', 'biện'], rawValue: ['Bien', 'bien'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 86, value: ['Bình', 'bình'], rawValue: ['Binh', 'binh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 87, value: ['Bồ', 'bồ'], rawValue: ['Bo', 'bo'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 88, value: ['Bung', 'bung'], rawValue: ['Bung', 'bung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 89, value: ['Chriêng', 'chriêng'], rawValue: ['Chrieng', 'chrieng'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 90, value: ['Ca', 'ca'], rawValue: ['Ca', 'ca'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 91, value: ['Cái', 'cái'], rawValue: ['Cai', 'cai'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 92, value: ['Cai', 'cai'], rawValue: ['Cai', 'cai'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 93, value: ['Cam', 'cam'], rawValue: ['Cam', 'cam'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 94, value: ['Cảnh', 'cảnh'], rawValue: ['Canh', 'canh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 95, value: ['Cao', 'cao'], rawValue: ['Cao', 'cao'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 96, value: ['Cáp', 'cáp'], rawValue: ['Cap', 'cap'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 97, value: ['Cát', 'cát'], rawValue: ['Cat', 'cat'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 98, value: ['Cầm', 'cầm'], rawValue: ['Cam', 'cam'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 99, value: ['Cấn', 'cấn'], rawValue: ['Can', 'can'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 100, value: ['Chế', 'chế'], rawValue: ['Che', 'che'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},

      {id: 101, value: ['Chiêm', 'chiêm'], rawValue: ['Chiem', 'chiem'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 102, value: ['Chu', 'chu'], rawValue: ['Chu', 'chu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 103, value: ['Châu', 'châu'], rawValue: ['Chau', 'chau'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 104, value: ['Chung', 'chung'], rawValue: ['Chung', 'chung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 105, value: ['Chúng', 'chúng'], rawValue: ['Chung', 'chung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 106, value: ['Chương', 'chương'], rawValue: ['Chuong', 'chuong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 107, value: ['Chử', 'chử'], rawValue: ['Chu', 'chu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 108, value: ['Cồ', 'cồ'], rawValue: ['Co', 'co'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 109, value: ['Cổ', 'cổ'], rawValue: ['Co', 'co'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 110, value: ['Công', 'công'], rawValue: ['Cong', 'cong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 111, value: ['Cống', 'cống'], rawValue: ['Cong', 'cong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 112, value: ['Cung', 'cung'], rawValue: ['Cung', 'cung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 113, value: ['Cù', 'cù'], rawValue: ['Cu', 'cu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 114, value: ['Cự', 'cự'], rawValue: ['Cu', 'cu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 115, value: ['Dã', 'dã'], rawValue: ['Da', 'da'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 116, value: ['DAnh', 'danh'], rawValue: ['DAnh', 'danh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 117, value: ['Diêm', 'diêm'], rawValue: ['Diem', 'diem'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 118, value: ['Diệp', 'diệp'], rawValue: ['Diep', 'diep'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 119, value: ['Doãn', 'doãn'], rawValue: ['Doan', 'doan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 120, value: ['Duy', 'duy'], rawValue: ['Duy', 'duy'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 121, value: ['Dư', 'dư'], rawValue: ['Du', 'du'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 122, value: ['Đái', 'đái'], rawValue: ['Dai', 'dai'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 123, value: ['Điều', 'điều'], rawValue: ['Dieu', 'dieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 124, value: ['Đan', 'đan'], rawValue: ['Dan', 'dan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 125, value: ['Đàm', 'đàm'], rawValue: ['Dam', 'dam'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 126, value: ['Đào', 'đào'], rawValue: ['Dao', 'dao'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 127, value: ['Đầu', 'đầu'], rawValue: ['Dau', 'dau'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      
      {id: 128, value: ['Đậu', 'đậu'], rawValue: ['Dau', 'dau'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 129, value: ['Đèo', 'đèo'], rawValue: ['Deo', 'deo'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 130, value: ['Điền', 'điền'], rawValue: ['Dien', 'dien'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 131, value: ['Đinh', 'đinh'], rawValue: ['Dinh', 'dinh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 132, value: ['Điêu', 'điêu'], rawValue: ['Dieu', 'dieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 133, value: ['Đoàn', 'đoàn'], rawValue: ['Doan', 'doan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 134, value: ['Đoạn', 'đoạn'], rawValue: ['Doan', 'doan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 135, value: ['Đôn', 'đôn'], rawValue: ['Don', 'don'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 136, value: ['Đống', 'đống'], rawValue: ['Dong', 'dong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 137, value: ['Đồ', 'đồ'], rawValue: ['Do', 'do'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 138, value: ['Đồng', 'đồng'], rawValue: ['Dong', 'dong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 139, value: ['Đổng', 'đổng'], rawValue: ['Dong', 'dong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 140, value: ['Đới', 'đới'], rawValue: ['Doi', 'doi'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 141, value: ['Đương', 'đương'], rawValue: ['Duong', 'duong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 142, value: ['Đường', 'đường'], rawValue: ['Duong', 'duong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 143, value: ['Đức', 'đức'], rawValue: ['Duc', 'duc'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 144, value: ['Đăng', 'đăng'], rawValue: ['Dang', 'dang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']}, 
      {id: 145, value: ['Giả', 'giả'], rawValue: ['Gia', 'gia'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 146, value: ['Giao', 'giao'], rawValue: ['Giao', 'giao'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 147, value: ['Giang', 'giang'], rawValue: ['Giang', 'giang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 147, value: ['Giàng', 'giàng'], rawValue: ['Giang', 'giang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 149, value: ['Giáp', 'giáp'], rawValue: ['Giap', 'giap'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 150, value: ["H'", "h'"], rawValue: ["H'", "h'"], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 151, value: ["H'ma", "h'ma"], rawValue: ["H'ma", "h'ma"], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 152, value: ["H'nia", "h'nia"], rawValue: ["H'nia", "h'nia"], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 153, value: ['Hầu', 'hầu'], rawValue: ['Hau', 'hau'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 154, value: ['Hà', 'hà'], rawValue: ['Ha', 'ha'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 155, value: ['Hạ', 'hạ'], rawValue: ['Ha', 'ha'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 156, value: ['Hàn', 'hàn'], rawValue: ['Han', 'han'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 157, value: ['Hán', 'hán'], rawValue: ['Han', 'han'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 158, value: ['Hề', 'hề'], rawValue: ['He', 'he'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 159, value: ['Hi', 'hi'], rawValue: ['Hi', 'hi'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 160, value: ['Hình', 'hình'], rawValue: ['Hinh', 'hinh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 161, value: ['Hoa', 'hoa'], rawValue: ['Hoa', 'hoa'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 162, value: ['Hồng', 'hồng'], rawValue: ['Hong', 'hong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 163, value: ['Hùng', 'hùng'], rawValue: ['Hung', 'hung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 164, value: ['Hứa', 'hứa'], rawValue: ['Hua', 'hua'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 165, value: ['Hướng', 'hướng'], rawValue: ['Huong', 'huong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 166, value: ['Kông', 'kông'], rawValue: ['Kong', 'kong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 167, value: ['Kiểu', 'kiểu'], rawValue: ['Kieu', 'kieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 168, value: ['Kha', 'kha'], rawValue: ['Kha', 'kha'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 169, value: ['Khà', 'khà'], rawValue: ['Kha', 'kha'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 170, value: ['Khương', 'khương'], rawValue: ['Khuong', 'khuong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 171, value: ['Khâu', 'khâu'], rawValue: ['Khau', 'khau'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 172, value: ['Khiếu', 'khiếu'], rawValue: ['Khieu', 'khieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 173, value: ['Khoa', 'khoa'], rawValue: ['Khoa', 'khoa'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 174, value: ['Khổng', 'khổng'], rawValue: ['Khong', 'khong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 175, value: ['Khu', 'khu'], rawValue: ['Khu', 'khu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 176, value: ['Khuất', 'khuat'], rawValue: ['Khuat', 'khuat'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 177, value: ['Khúc', 'khúc'], rawValue: ['Khuc', 'khuc'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 178, value: ['Kiều', 'kiều'], rawValue: ['Kieu', 'kieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 179, value: ['Kim', 'kim'], rawValue: ['Kim', 'kim'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 180, value: ['Khai', 'khai'], rawValue: ['Khai', 'khai'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 181, value: ['Lyly', 'lyly'], rawValue: ['Lyly', 'lyly'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 182, value: ['La', 'la'], rawValue: ['La', 'la'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 183, value: ['Lã', 'lã'], rawValue: ['La', 'la'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 184, value: ['Lãnh', 'lãnh'], rawValue: ['Lanh', 'lanh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 185, value: ['Lạc', 'lạc'], rawValue: ['Lac', 'lac'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 186, value: ['Lại', 'lại'], rawValue: ['Lai', 'lai'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 187, value: ['Lăng', 'lăng'], rawValue: ['Lang', 'lang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 188, value: ['Lâm', 'lâm'], rawValue: ['Lam', 'lam'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 189, value: ['Lèng', 'lèng'], rawValue: ['Leng', 'leng'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 190, value: ['Lều', 'lều'], rawValue: ['Leu', 'leu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 191, value: ['Liên', 'liên'], rawValue: ['Lien', 'lien'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 192, value: ['Liêu', 'liêu'], rawValue: ['Lieu', 'lieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 193, value: ['Liễu', 'liễu'], rawValue: ['Lieu', 'lieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 194, value: ['Lò', 'lò'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 195, value: ['Lô', 'lô'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 196, value: ['Lỗ', 'lỗ'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 197, value: ['Lộ', 'Lộ'], rawValue: ['Lo', 'lo'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 198, value: ['Luyện', 'Luyện'], rawValue: ['Luyen', 'luyen'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 199, value: ['Lục', 'lục'], rawValue: ['Luc', 'luc'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 200, value: ['Lư', 'lư'], rawValue: ['Lu', 'lu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 201, value: ['Lữ', 'lữ'], rawValue: ['Lu', 'lu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 202, value: ['Lương', 'lương'], rawValue: ['Luong', 'luong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 203, value: ['Lưu', 'lưu'], rawValue: ['Luu', 'luu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 204, value: ['Lý', 'lý'], rawValue: ['Ly', 'ly'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 205, value: ['Mùa', 'mùa'], rawValue: ['Mua', 'mua'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 206, value: ['Ma', 'ma'], rawValue: ['Ma', 'ma'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 207, value: ['Mai', 'mai'], rawValue: ['Mai', 'mai'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 208, value: ['Mang', 'mang'], rawValue: ['Mang', 'mang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 209, value: ['Mã', 'mã'], rawValue: ['Ma', 'ma'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 210, value: ['Mạc', 'mạc'], rawValue: ['Mac', 'mac'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 211, value: ['Mạch', 'mạch'], rawValue: ['Mach', 'mach'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 212, value: ['Mạnh', 'mạnh'], rawValue: ['Manh', 'manh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 213, value: ['Mâu', 'mâu'], rawValue: ['Mau', 'mau'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 214, value: ['Mầu', 'mầu'], rawValue: ['Mau', 'mau'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 215, value: ['Màu', 'màu'], rawValue: ['Mau', 'mau'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 216, value: ['Mẫn', 'mẫn'], rawValue: ['Man', 'man'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 217, value: ['Mộc', 'mộc'], rawValue: ['Moc', 'moc'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 218, value: ['Mục', 'mục'], rawValue: ['Muc', 'muc'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 219, value: ['Nhan', 'nhan'], rawValue: ['Nhan', 'nhan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 220, value: ['Ninh', 'ninh'], rawValue: ['Ninh', 'ninh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 221, value: ['Nhâm', 'nhâm'], rawValue: ['Nham', 'nham'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 222, value: ['Ngân', 'ngân'], rawValue: ['Ngan', 'ngan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 223, value: ['Nghiêm', 'nghiêm'], rawValue: ['Nghiem', 'nghiem'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 224, value: ['Nghị', 'nghị'], rawValue: ['Nghi', 'nghi'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 225, value: ['Ngọ', 'ngọ'], rawValue: ['Ngo', 'ngo'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 226, value: ['Ngọc', 'ngọc'], rawValue: ['Ngoc', 'ngoc'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 227, value: ['Ngũ', 'ngũ'], rawValue: ['Ngu', 'ngu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 228, value: ['Ngụy', 'ngụy'], rawValue: ['Nguy', 'nguy'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 229, value: ['Nhữ', 'nhữ'], rawValue: ['Nhu', 'nhu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 230, value: ['Nông', 'nông'], rawValue: ['Nong', 'nong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 231, value: ['Ong', 'ong'], rawValue: ['Ong', 'ong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 232, value: ['Ông', 'ông'], rawValue: ['Ong', 'ong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 233, value: ['Phi', 'phi'], rawValue: ['Phi', 'phi'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 234, value: ['Phí', 'phí'], rawValue: ['Phi', 'phi'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 235, value: ['Phó', 'phó'], rawValue: ['Pho', 'pho'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 236, value: ['Phù', 'phù'], rawValue: ['Phu', 'phu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 237, value: ['Phú', 'phú'], rawValue: ['Phu', 'phu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 238, value: ['Phùng', 'phùng'], rawValue: ['Phung', 'phung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 239, value: ['Phương', 'phương'], rawValue: ['Phuong', 'phuong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 240, value: ['Quản', 'quản'], rawValue: ['Quan', 'quan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 241, value: ['Quàng', 'quàng'], rawValue: ['Quang', 'quang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 242, value: ['Quách', 'quách'], rawValue: ['Quach', 'quach'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 243, value: ['Sái', 'sái'], rawValue: ['Sai', 'sai'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 244, value: ['Sầm', 'sầm'], rawValue: ['Sam', 'sam'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 245, value: ['Sơn', 'sơn'], rawValue: ['Son', 'son'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 246, value: ['Sử', 'sử'], rawValue: ['Su', 'su'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 247, value: ['Sùng', 'sùng'], rawValue: ['Sung', 'sung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 248, value: ['Tán', 'tán'], rawValue: ['Tan', 'tan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 249, value: ['Tào', 'tào'], rawValue: ['Tao', 'tao'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 250, value: ['Tạ', 'tạ'], rawValue: ['Ta', 'ta'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 251, value: ['Tăng', 'tăng'], rawValue: ['Tang', 'tang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 252, value: ['Tấn', 'tấn'], rawValue: ['Tan', 'tan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 253, value: ['Tề', 'tề'], rawValue: ['Te', 'te'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 254, value: ['Thang', 'thang'], rawValue: ['Thang', 'thang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 255, value: ['Thái', 'thái'], rawValue: ['Thai', 'thai'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 256, value: ['Thành', 'thành'], rawValue: ['Thanh', 'thanh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 257, value: ['Thào', 'thào'], rawValue: ['Thao', 'thao'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 258, value: ['Thach', 'thạch'], rawValue: ['Thach', 'thach'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 259, value: ['Thân', 'thân'], rawValue: ['Than', 'than'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 260, value: ['Thẩm', 'thẩm'], rawValue: ['Tham', 'tham'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 261, value: ['Thập', 'thập'], rawValue: ['Thap', 'thap'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 262, value: ['Thế', 'thế'], rawValue: ['The', 'the'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 263, value: ['Thi', 'thi'], rawValue: ['Thi', 'thi'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 264, value: ['Thiều', 'thiều'], rawValue: ['Thieu', 'thieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 265, value: ['Thịnh', 'thịnh'], rawValue: ['Thinh', 'thinh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 266, value: ['Thoa', 'thoa'], rawValue: ['Thoa', 'thoa'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 267, value: ['Thôi', 'thôi'], rawValue: ['Thoi', 'thoi'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 268, value: ['Thục', 'thục'], rawValue: ['Thuc', 'thuc'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 269, value: ['Tiêu', 'tiêu'], rawValue: ['Tieu', 'tieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 270, value: ['Tiếp', 'tiếp'], rawValue: ['Tiep', 'tiep'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 271, value: ['Tinh', 'tinh'], rawValue: ['Tinh', 'tinh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 272, value: ['Tòng', 'tòng'], rawValue: ['Tong', 'tong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 273, value: ['Tô', 'tô'], rawValue: ['To', 'to'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 274, value: ['Tôn', 'tôn'], rawValue: ['Ton', 'ton'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 275, value: ['Tôn Thất', 'tôn thất'], rawValue: ['Ton That', 'ton that'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 276, value: ['Tông', 'tông'], rawValue: ['Tong', 'tong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 277, value: ['Tống', 'tống'], rawValue: ['Tong', 'tong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 278, value: ['Trang', 'trang'], rawValue: ['Trang', 'trang'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 279, value: ['Trác', 'trác'], rawValue: ['Trac', 'trac'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 280, value: ['Trà', 'trà'], rawValue: ['Tra', 'tra'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 281, value: ['Tri', 'Tri'], rawValue: ['Tri', 'Tri'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 282, value: ['Triệu', 'triệu'], rawValue: ['Trieu', 'trieu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 283, value: ['Trình', 'trình'], rawValue: ['Trinh', 'trinh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 284, value: ['Trịnh', 'trịnh'], rawValue: ['Trinh', 'trinh'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 285, value: ['Trưng', 'trưng'], rawValue: ['Trung', 'trung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 286, value: ['Trương', 'trương'], rawValue: ['Truong', 'truong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 287, value: ['Tuấn', 'tuấn'], rawValue: ['Tuan', 'tuan'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 288, value: ['Từ', 'từ'], rawValue: ['Tu', 'tu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 289, value: ['Ty', 'ty'], rawValue: ['Ty', 'ty'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 290, value: ['Uông', 'uông'], rawValue: ['Uong', 'uong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 291, value: ['Ung', 'ung'], rawValue: ['Ung', 'ung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 292, value: ['Ưng', 'Ưng'], rawValue: ['Ung', 'ung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 293, value: ['Ứng', 'ứng'], rawValue: ['Ung', 'ung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 294, value: ['Vạn', 'vạn'], rawValue: ['Van', 'van'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 295, value: ['Văn', 'văn'], rawValue: ['Van', 'van'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 296, value: ['Vi', 'vi'], rawValue: ['Vi', 'vi'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 297, value: ['Viêm', 'viêm'], rawValue: ['Viem', 'viem'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 298, value: ['Viên', 'viên'], rawValue: ['Vien', 'vien'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 299, value: ['Vương', 'vương'], rawValue: ['Vuong', 'vuong'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 300, value: ['Vưu', 'vưu'], rawValue: ['Vuu', 'vuu'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 301, value: ['Xa', 'xa'], rawValue: ['Xa', 'xa'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 302, value: ['Xung', 'xung'], rawValue: ['Xung', 'xung'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      {id: 303, value: ['Yên', 'yên'], rawValue: ['Yen', 'yen'], mapSuggestValue: ['amh', 'ành', 'ãnh', 'ảnh', 'ang', 'ăn', 'ănh', 'ăng']},
      
      // An
      ]
  }

  checkEmailInvalidFormat(input){
    let strcheck = input;
            if(input.indexOf('@') != -1){
              strcheck = input.split('@')[1];
            }
    let arr = ['mail.com', 'gail.com', 'gmil.com', 'gmal.com', 'gmai.com', 'gmail.con', 'ggmail.com', 'gmmail.com', 'gmâil.com', 'gmaail.com', 'gmaiil.com', 'gmaill.com','ail.com','gil.com','gma.com','il.com','gi.com','gm.com',
    'ahoo.com', 'yhoo.com','yaoo.com', 'yaho.com', 'yah.com','yahoo.con','yahô.com','yo.com','ya.com','ya.com','oo.com',
    'ahoo.com.vn', 'yhoo.com.vn','yaoo.com.vn', 'yaho.com.vn', 'yah.com.vn','yahoo.con.vn','yahô.com.vn','yo.com.vn','ya.com.vn','ya.com.vn','oo.com.vn',
    'otmail.com','htmail.com', 'homail.com','hotail.com','hotmil.com','hotmal.com','hotmai.com','hotnail.com', 'hotmail.con','hmail.com','mail.com','hail.com','hoil.com','hotl.com','hotm.com','hot.com','ho.com','tmail.com',
    'cloud.com','iloud.com','icoud.com','iclud.com','iclod.com','iclou.com','icloud.con','loud.com','icoud.com','icld.com','iclo.com','oud.com','iud.com','icd.com','icl.com','ic.com','cl.com','lo.com','ou.com','ud.com']
    return arr.indexOf(strcheck) != -1;
  }

  checkPhoneInValidFormat(input){
    let arrBeginNumber = ['086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039', //viettel
                          '088', '091', '094', '083', '084', '085', '081', '082', //vinaphone
                          '092', '056', '058', //vietnammobile
                          '089', '090', '093', '070', '079', '077', '076', '078', //mobilephonephone
                          '099', '059', //gmobile
                          '087',
                          '071', '072', '073', '074', '075', //add them
                          '030', '031',
                          '020', '021', '022', '023', '024', '025', '026', '027', '028', '029'
                          ];
    //let beginnum = input.substring(0, 3);
    //return arrBeginNumber.indexOf(beginnum) == -1;
    if(input && input*1 && input.length ==10 && input.startsWith('0'))
    {
        return false;
    }
    else if(input && input*1 && input.length ==11 && input.startsWith('84'))
    {
        return false;
    }
    else {
      return true;
    }
  }

  updatePaymentMethodForCombo(bookingCode, paymentType){
    var options = {
      'method': 'POST',
      'url': C.urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + bookingCode + '&paymentMethod=' + paymentType + '',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
    })
  }
  getCathayByKey(key: string) : Promise<any>{
    return new Promise((resolve, reject) => {
      var options = {
        'method': 'GET',
        'url':C.urls.baseUrl.urlMobile+"/api/dashboard/GetCathayByKey?key=" + key,
        'headers': {
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        resolve(response.body);
      });
    })
  }

  setCacheSearchHotelInfo(objSearch){
    this.storage.get('cacheSearchHotelInfo').then((data) => {
      if(data){
          this.storage.remove('cacheSearchHotelInfo').then(()=>{
            this.storage.set('cacheSearchHotelInfo', objSearch);
          })
      }else{
        this.storage.set('cacheSearchHotelInfo', objSearch);
      }
    })
  }
  // lưu cache search
  setCacheSearch(objSearch,stt): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage.get('arrHistory').then((data) => {
        var co=0;
        var objkey=objSearch.id+"_"+objSearch.CheckInDate+"_"+objSearch.CheckOutDate+"_"+objSearch.adult+"_"+objSearch.child;
        if(data ){
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (objkey==element.objkey) {
              // data.splice(i, 1);
              co=1;
            }
          }
        }
        if(co==0){
          this.searchhotel.objRecent=objSearch;

          if( !objSearch.imageUrl){
            if(objSearch.isType==0 ){
              this.getHoteldetail(objSearch.id).then((obj) => {
                if(obj){
                  objSearch.imageUrl=obj;
                }
                if(data && data.length>2){
                  data.splice(0, 1);
                  objSearch.objkey=objkey;
                  data.push(objSearch) 
                  this.storage.set('arrHistory', data);
                  
                }else{
                  if(!data){
                    data=[];
                  }
                  objSearch.objkey=objkey;
                  data.push(objSearch);
                  this.storage.set('arrHistory', data);
                }
              })
            }else{
              this.storage.get('listtopregions').then(dataregion => {
                if(dataregion){
                  var el = dataregion.filter(item => item.regionId==objSearch.id);
                  if(el && el.length >0){
                    if(el[0].image){
                      objSearch.imageUrl= (el[0].image.toLocaleString().trim().indexOf("http") == -1) ? 'https:' +el[0].image: el[0].image;
                    }
                  }else{
                    objSearch.imageUrl='https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x110.jpg'
                  }
                  if(data && data.length>2){
                    data.splice(0, 1);
                    objSearch.objkey=objkey;
                    data.push(objSearch) 
                    this.storage.set('arrHistory', data);
                  }else{
                    if(!data){
                      data=[];
                    }
                    objSearch.objkey=objkey;
                    data.push(objSearch);
                    this.storage.set('arrHistory', data);
                  }
                }
                
              })
            }
          }else{
            if(data && data.length>2){
              data.splice(0, 1);
              objSearch.objkey=objkey;
              data.push(objSearch) 
              this.storage.set('arrHistory', data);
            }else{
              if(!data){
                data=[];
              }
              objSearch.objkey=objkey;
              data.push(objSearch);
              this.storage.set('arrHistory', data);
            }
          }
        }
       
       
        resolve(true);
      })
     
    })
   
  }
  getHoteldetail(id): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = C.urls.baseUrl.urlPost + "/mhoteldetail/" +id;
        var se = this;
        var options = {
          method: 'POST',
          url: url,
          timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "hoteldetail",
              func: "loaddata",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "hoteldetail";
            error.func = "loaddata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(objError, response);
          }
          if (response.statusCode == 200) {
            let jsondata = JSON.parse(body);
            if(jsondata.Avatar){
              jsondata.Avatar = (jsondata.Avatar.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + jsondata.Avatar : jsondata.Avatar;
            }
            resolve(jsondata.Avatar);
          }
          
        })
     
    })
   
  }
  checkLogout(): Promise<any> {
    var se=this;
    return new Promise((resolve, reject) => {
      se.storage.get('jti').then((memberid) => {
        if(memberid){
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + '/api/Dashboard/CheckUserActive?memberId='+memberid,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
             
            }
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "roomdetailreview";
              error.func = "GetUserInfo";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
            } else {
              if (body) {
                var data = JSON.parse(body);
                if (data.status==1) {
                  resolve(true);
                }else if(data.status==-1){
                  resolve(false);
                }
              }
    
            }
          });
        }
      
       
    })
    })
   
  }

  getIsoDate(cin, cout){
    let _darr:any = moment(cin).format('YYYY-MM-DD hh:mm:ss').split(' '),
    _darrday =  _darr[0].split('-'),
    _darrhour =  _darr[1].split(':');
    let _darr_return:any = moment(cout).format('YYYY-MM-DD hh:mm:ss').split(' '),
    _darrday_return =  _darr_return[0].split('-'),
    _darrhour_return =  _darr_return[1].split(':');
    let _d =new Date(Date.UTC(_darrday[0], _darrday[1] -1, _darrday[2], _darrhour[0], _darrhour[1], _darrhour[2])), final = (_d.getTime() + Math.abs((_d.getTimezoneOffset()))*2 );
    let _dReturn = new Date(Date.UTC(_darrday_return[0], _darrday_return[1] -1, _darrday_return[2], _darrhour_return[0], _darrhour_return[1], _darrhour_return[2])), final_return = (_dReturn.getTime() + Math.abs((_dReturn.getTimezoneOffset()))*2);
    let _isoDate = new Date(final).toISOString().replace('Z','');
    let _isoDate_return = new Date(final_return).toISOString().replace('Z','');
    return { cin: _isoDate, cout: _isoDate_return};
  }

  getCinIsoDate(cin){
    let _darr:any = moment(cin).format('YYYY-MM-DD hh:mm:ss').split(' '),
    _darrday =  _darr[0].split('-'),
    _darrhour =  _darr[1].split(':');
    let _d =new Date(Date.UTC(_darrday[0], _darrday[1] -1, _darrday[2], _darrhour[0], _darrhour[1], _darrhour[2])), final = (_d.getTime() + Math.abs((_d.getTimezoneOffset()))*2 );
    let _isoDate = new Date(final).toISOString().replace('Z','');
    return _isoDate;
  }

  checkAllotmentSeri(hotelId, roomId, cin, cout, roomNumber, supplier, token) :Promise<any> {
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
        qs:
        {
          token: '3b760e5dcf038878925b5613c32615ea3',
          hotelcode: hotelId,
          roomcode: roomId,
          checkin: cin,
          checkout: cout,
          totalroom: roomNumber,
          supplier: supplier,
          bookingRequestXml: token
        },
        headers:
          {}
      };
      request(options, function (error, response, body) {
        if (response.statusCode != 200) {
          var objError = {
            page: "hoteldetail",
            func: "book",
            message: response.statusMessage,
            content: response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
          C.writeErrorLog(objError, response);
        }
        if (error) {
          error.page = "hoteldetail";
          error.func = "book";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error, response);
          throw new Error(error)
        };
        var rs = JSON.parse(body);
        resolve(rs.Msg == "AL");
      });
    })
    
  }

  removeString(input){
    input = input.replace('MASTER','').replace('MSTR','').replace('MISS','').replace('MR','').replace('MRS','').replace('MS','');
    input = input.replace('master','').replace('mstr','').replace('miss','').replace('mr','').replace('mrs','').replace('ms','');
    input = input.replace('Master','').replace('Mstr','').replace('Miss','').replace('Mr','').replace('Mrs','').replace('Ms','');
    return input.toLowerCase().trim();
  }
}


export class ActivityService {
  currentArticle = new EventEmitter();
  
  public bank: any;
  public child: any;
  public insurranceBookingId:any;
  objClaimed: any;
  tab3Loaded: any;
  listExperienceSearch: any[];
  listTopDeal:any = [];
  HotelSearchReqContract: any;
  firstloadhotelist: any;
  objFlightComboUpgrade: any;
  objBankInStallment: any;
  installmentPaymentSuccess: boolean=false;
  installmentPaymentErrorCode: string;
  objPaymentMytrip: any;
  objCathayMytrip: any;
  objFlightComboPaymentBreakDown: any;
  objCarComboPaymentBreakDown: any;
  installmentPriceStr: string;
  backValue: string;
  objRequestAddLuggage: { bookingCode: any; totalPrice: number; totalPriceDisplay: any; departWeight: any; returnWeight: any; objectDepartLuggage: any; objectReturnLuggage: any; };
  itemRefreshDeletionAccount=new EventEmitter();
  //abortSearch: boolean;
}