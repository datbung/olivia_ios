import { Component, ViewChildren, QueryList, NgZone } from '@angular/core';
import { Platform, IonRouterOutlet, ModalController, PopoverController, ActionSheetController, ToastController, NavController, AlertController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { SearchHotel,Booking, ValueGlobal } from'./providers/book-service';
import { GlobalFunction } from'./providers/globalfunction';
import { Storage } from '@ionic/storage';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { CodePush,SyncStatus,InstallMode } from '@ionic-native/code-push/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { foodService } from './providers/foodService';
import { FoodfilterPage } from './foodfilter/foodfilter.page';
import { OverlayEventDetail } from '@ionic/core';
import * as moment from 'moment';
import { LoginPage } from './login/login';
import { Nav } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';

import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { flightService } from './providers/flightService';
import {tourService} from './providers/tourService';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { C } from './providers/constants';
//import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  hascachecart: boolean = false;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  @ViewChild(Nav) navChild:Nav;
  countcart: any;
  enableCountFilter: number;
  allowShowCart: boolean=true;
  deviceid: any;
  appversion: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private toast: ToastController,
    private navCtrl: NavController,
    public searchhotel: SearchHotel,
    public gf: GlobalFunction,
    public booking: Booking,
    private storage: Storage,
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    public valueGlobal: ValueGlobal,
    private fcm: FirebaseMessaging,
    private codePush: CodePush,
    private alertCtrl: AlertController,
    private appVersion: AppVersion,
    public foodService: foodService,
    private zone: NgZone,
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,private deeplinks: Deeplinks,
    private safariViewController: SafariViewController,
    public _flightService: flightService,
    public tourService: tourService,
    private fb: Facebook
  ) {
    this.initializeApp();
    // this.storage.remove('listblogtripdefault');
    // this.storage.remove('listblogdefault');
    // this.storage.remove('listtopdealdefault');
    // this.storage.remove('regionnamesuggest');
    // this.storage.remove('deviceToken');
    // this.storage.remove('listexeperienceregion');
    this.valueGlobal.countNotifi = 0;
    this.storage.get('deviceToken').then((devicetoken) => {
      this.deviceid = devicetoken;
    });
    this.appVersion.getVersionNumber().then(version => {
      this.appversion = version;
    });
  }

  ionViewDidEnter() {
    const preloadArea: HTMLElement = document.getElementById('preload');
    preloadArea.appendChild(document.createElement('ion-header'));
    preloadArea.appendChild(document.createElement('ion-toolbar'));
    preloadArea.appendChild(document.createElement('ion-buttons'));
    preloadArea.appendChild(document.createElement('ion-content'));
    preloadArea.appendChild(document.createElement('ion-footer'));
    preloadArea.appendChild(document.createElement('ion-slides'));
    preloadArea.appendChild(document.createElement('ion-row'));
    preloadArea.appendChild(document.createElement('ion-col'));
    preloadArea.appendChild(document.createElement('ion-label'));
    preloadArea.appendChild(document.createElement('ion-badge'));
    preloadArea.appendChild(document.createElement('ion-grid'));
    preloadArea.appendChild(document.createElement('ion-list'));
    preloadArea.appendChild(document.createElement('ion-item-group'));
    preloadArea.appendChild(document.createElement('ion-item'));
    preloadArea.appendChild(document.createElement('ion-radio'));
    preloadArea.appendChild(document.createElement('ion-icon'));
    preloadArea.appendChild(document.createElement('ion-note'));
    preloadArea.appendChild(document.createElement('ion-skeleton-text'));
    this.storage.get("listItemsCart").then((data)=>{
      if(data && data.length >0){
        data.forEach(element => {
          if(!this.gf.checkItemInCurrentPeriod(element)){
            this.gf.removeItemInArray(data, element);
          }
        });

        setTimeout(()=>{
          
          this.zone.run(()=>{
            this.countcart = data.length;
            this.foodService.countcart = data.length;
            this.hascachecart = true;
            this.foodService.listItemsCart = [...data];
            this.gf.setCacheCart();
          })
        },100)

        
      }
    })
    
  }

  ngOnInit(){
    
    this.foodService.itemCartChange.pipe().subscribe(data => {
      this.zone.run(()=>{
        this.countcart =data;
      })
    })

    this.foodService.itemCountFilter.pipe().subscribe(data => {
      if(data == 1){
        this.zone.run(()=>{
          this.enableCountFilter = 1;
        })
      }else{
        this.zone.run(()=>{
          this.enableCountFilter = 0;
        })
      }
    })

    this.foodService.itemActiveFoodTab.pipe().subscribe(data => {
      if(data == 1){
        this.zone.run(()=>{
          this.allowShowCart = true;
        })
      }else{
        this.zone.run(()=>{
          this.allowShowCart = false;
        })
      }
    })
  }

  askTrackingPermission() :Promise<any>{
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova') && this.platform.is('ios')) {

        if (window.cordova) {
          console.log('trying to request permission ');
          window.cordova.exec(win, fail, 'idfa', "requestPermission", []);
        }
      }

      function win(res) {
        
        resolve(true);
      }
      function fail(res) {
        console.log('fail ' + JSON.stringify(res));
        resolve(false);
      }
    })
  }

  readTrackingPermission() :Promise<any>{
    return new Promise((resolve, reject) => {
      if (this.platform.is('cordova') && this.platform.is('ios')) {

        if (window.cordova) {
          window.cordova.exec(win, fail, 'idfa', "getInfo", []);
        }
      }

      function win(res) {
        console.log('success  ' + JSON.stringify(res));
        resolve(true);
      }
      function fail(res) {
        console.log('fail ' + JSON.stringify(res));
        resolve(false);
      }
    })
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      try {
        this.fb.setAdvertiserTrackingEnabled(true);

        const idfaPlugin = (cordova.plugins as any).idfa;
        
        idfaPlugin.getInfo()
            .then(info => {
                if (!info.trackingLimited) {
                    return info.idfa || info.aaid;
                } else if (info.trackingPermission === idfaPlugin.TRACKING_PERMISSION_NOT_DETERMINED) {
                    return idfaPlugin.requestPermission().then(result => {
                        if (result === idfaPlugin.TRACKING_PERMISSION_AUTHORIZED) {
                            return idfaPlugin.getInfo().then(info => {
                                return info.idfa || info.aaid;
                            });
                        }
                    });
                }
            })
            .then(idfaOrAaid => {
                if (idfaOrAaid) {
                    console.log(idfaOrAaid);
                }
            });
        } catch (error) {
        
      }

      this.codePush.notifyApplicationReady().then(()=>{
        this.codePush.checkForUpdate().then((data)=>{
          if(data){
            this.codePush.sync({ installMode: InstallMode.ON_NEXT_RESUME, minimumBackgroundDuration: 60 * 2 }, this.codePushStatusDidChange).subscribe((syncStatus) => {

            });
             this.valueGlobal.updatedLastestVersion = true;
          }
        })
      })

      this.deeplinks.routeWithNavController(this.navCtrl, {
        '/login': LoginPage
      }).subscribe(match => {
          let objlink = match.$link;
          if(objlink.path == "/homeflight"){
            this._flightService.itemFlightCache.ischeckpayment= 1;
          }
          else if(objlink.path == "/myapp"){
            
          }
          else if(objlink.path.indexOf("hoteldetail") != -1){
            let arrurl = objlink.path.split('/');
            let id = arrurl[arrurl.length-1];
            this.navCtrl.navigateForward('/hoteldetail/'+id);
          }
          else if(objlink.path.indexOf("tourdetail") != -1){
            let arrurl = objlink.path.split('/');
            let id = arrurl[arrurl.length-1];
            this.tourService.tourDetailId = id;
            this.tourService.backPage = 'hometour';
            this.navCtrl.navigateForward('/tourdetail');
          }
          else if(objlink.path.indexOf("flightpage") != -1 || objlink.path.indexOf("home-flight") != -1 ){
            this._flightService.itemTabFlightActive.emit(true);
            this.valueGlobal.backValue = "homeflight";
            this.navCtrl.navigateForward('/tabs/tab1');
          }
          else if(objlink.path.indexOf("tour") != -1){
            this.navCtrl.navigateForward('/hometour');
          }
          else if(objlink.path.indexOf("home-food") != -1 || objlink.path.indexOf("homefood") != -1){
            this.navCtrl.navigateForward('/homefood');
          }
          else if(objlink.path.indexOf("foodpaymentdone")!= -1){
            this.navCtrl.navigateForward(objlink.path);
          } 
          else{
            this.navCtrl.navigateForward('/tabs/tab1');
          }
          //console.log('Successfully matched route', JSON.stringify(match));
        }, nomatch => {
          //console.error('Got a deeplink that didn\'t match', nomatch);
      });
      
      //test 
      //this.valueGlobal.updatedLastestVersion = true;
      //Dynamiclink
      this.firebaseDynamicLinks.onDynamicLink().subscribe((res:any)=>{
        if(res && res.deepLink){
          var arrLink = res.deepLink.split('?');
          if(arrLink && arrLink.length >1){
            var id = arrLink[1];
            this.navCtrl.navigateForward('/hoteldetail/'+ id);
          }
        }
      })

    });
  }

  onPackageDownloaded (localPackage) {
      // Install regular updates after someone navigates away from the app for more than 2 minutes
      // Install mandatory updates after someone restarts the app
      localPackage.install(this.onInstallSuccess(), this.onError(), { installMode: InstallMode.ON_NEXT_RESUME, minimumBackgroundDuration: 120, mandatoryInstallMode: InstallMode.ON_NEXT_RESTART });
  };

  onUpdateCheck = function (remotePackage) {
      if (!remotePackage) {
          console.log("The application is up to date.");
      } else {
          // The hash of each previously reverted package is stored for later use.
          // This way, we avoid going into an infinite bad update/revert loop.
          if (!remotePackage.failedInstall) {
              console.log("A CodePush update is available. Package hash: " + remotePackage.packageHash);
              remotePackage.download(this.onPackageDownloaded(), this.onError());
          } else {
              console.log("The available update was attempted before and failed.");
          }
      }
  };

  onError = function () {
    console.log("An error occurred. ");
  };

  onInstallSuccess = function () {
    console.log("Installation succeeded.");
  };

  async showToastWarning(){
    var se = this;
    this.appVersion.getVersionNumber().then( async(version) => {
      let alert = await se.toast.create({
        message: 'Ứng dụng đã được cập nhật lên phiên bản mới nhất '+ version
      })
      alert.present();
    })
  }

  async showAlertUpdate(msg){
    var se = this;
    let alert = await this.alertCtrl.create({
      message: msg,
      cssClass: "cls-alert-showmore",
      backdropDismiss: false,
      buttons: [
      {
        text: 'Cập nhật',
        role: 'OK',
        handler: () => {
          se.codePush.sync().subscribe((syncStatus) => { 
            switch (syncStatus) {
              case SyncStatus.DOWNLOADING_PACKAGE:
                  this.gf.showLoadingMessage("Đang tải...");
                  break;
              case SyncStatus.INSTALLING_UPDATE:
                  this.gf.hideLoadingMessage();
                  break;
          }
          });
          const downloadProgress = (progress) => { 
            console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); 
          }
          se.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));
        }
      }
    ]
  });
  alert.present();
  }

  async showFilter(){
    this.gf.hideStatusBar();
    
    const modal: HTMLIonModalElement =
    await this.modalCtrl.create({
      component: FoodfilterPage,
      componentProps: {
        aParameter: true,
      }
    });
  modal.present();

  modal.onDidDismiss().then((data: OverlayEventDetail) => {
    this.foodService.menuFooterClick.emit(1);
  })
  }

  showCart(){
    // if(this.foodService.listItemsCart.length ==0 && !this.hascachecart){
    //   this.presentToastWarning('Bạn chưa có bữa trưa nào với iVIVU trong giỏ hàng');
    //   return;
    // }
    this.gf.hideStatusBar();
    this.foodService.fromPage = "homefood";
    this.navCtrl.navigateForward('/foodbill');
  }

  async presentToastWarning(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      cssClass: 'cls-warning-orderfoodempty',
      
    });

    toast.present();
  }

  codePushStatusDidChange = (status: any) => {
    let objError = {
      page: "appComponent",
      func: "codePushStatusDidChange",
      message: 'Auto Update Failed',
      content: JSON.stringify({ deviceId:  this.deviceid, appVersion: this.appversion}),
      type: "warning",
      param: ''
    };
    try {
      switch (status) {
        case SyncStatus.UPDATE_IGNORED:
          C.writeErrorLog(objError,'UPDATE_IGNORED');
          break;
          case SyncStatus.ERROR:
            C.writeErrorLog(objError,'ERROR');
            break;
      }
    } catch (err) {
      C.writeErrorLog(objError,'UNKNOW');
    }
  };

}
