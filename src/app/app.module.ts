import { HotellistmoodfilterPageModule } from './hotellistmoodfilter/hotellistmoodfilter.module';
import { FlightcombobookingdetailPageModule } from './flightcombobookingdetail/flightcombobookingdetail.module';
import { CombocarchangeplacePageModule } from './combocarchangeplace/combocarchangeplace.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HotelreviewsimagePageModule } from './hotelreviewsimage/hotelreviewsimage.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Validators, FormBuilder, FormControl,FormGroup, FormsModule,ReactiveFormsModule  } from '@angular/forms';


import { Platform,IonContent } from '@ionic/angular';
import { Component, NgZone, Input, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController,ToastController,LoadingController } from '@ionic/angular';
import * as request from 'requestretry';
import * as moment from 'moment';

import { DateTime } from 'ionic-angular';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './providers/auth-service';
import { SearchHotel, ValueGlobal,Bookcombo,RoomInfo, DeviceLocation } from './providers/book-service';
import { ComboPrice} from './providers/comboPrice';
import { C } from './providers/constants';
import { GlobalFunction, ActivityService } from './providers/globalfunction';
import { DepartureCalendarPageModule} from './departurecalendar/departurecalendar.module';
import { PickupCalendarPageModule} from './pickup-calendar/pickup-calendar.module';
import { RequestComboPageModule} from './requestcombo/requestcombo.module';
import { RequestCombo1PageModule} from './requestcombo1/requestcombo1.module';
import { OccupancyPageModule} from './occupancy/occupancy.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { Http } from '@angular/http';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { FlightDeparturePageModule } from './flightdeparture/flightdeparture.module';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { SearchHotelFilterPageModule } from './search-hotel-filter/search-hotel-filter.module';
import { SearchHotelFilterAndSortPageModule } from './search-hotel-filter-and-sort/search-hotel-filter-and-sort.module';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Network } from '@ionic-native/network/ngx';
import { NetworkProvider } from './network-provider.service';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { File } from '@ionic-native/file/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { CuspointsPageModule} from './cuspoints/cuspoints.module';
import { UserTravelHobbyPageModule } from './usertravelhobby/usertravelhobby.module';
import { Badge } from '@ionic-native/badge/ngx';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
import { UserFeedBackPageModule } from './userfeedback/userfeedback.module';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
//import { ExperienceDetailPageModule } from './experiencedetail/experiencedetail.module';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { ExperienceFilterPageModule } from './experiencefilter/experiencefilter.module';
import { BlogPageModule } from './blog/blog.module';
import { BlogModalPageModule } from './blogmodal/blogmodal.module';
import { SearchBlogModalPageModule } from './searchblogmodal/searchblogmodal.module';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { Market } from '@ionic-native/market/ngx';
import { CardeparturePageModule } from './cardeparture/cardeparture.module';
import { ConfirmotpPageModule } from './confirmotp/confirmotp.module';
import { InsurrancepopoverPageModule } from './insurrancepopover/insurrancepopover.module';
import { InsurrancehistorypopoverPageModule } from './insurrancehistorypopover/insurrancehistorypopover.module';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { InAppReview } from '@ionic-native/in-app-review/ngx';
import { AdddiscountPageModule } from './adddiscount/adddiscount.module';
import { FlightcomboupgraderoomPageModule } from './flightcomboupgraderoom/flightcomboupgraderoom.module';
import { HotelRoomDetailPageModule } from './hotelroomdetail/hotelroomdetail.module';
import { CodePush } from '@ionic-native/code-push/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { FoodfilterPageModule } from './foodfilter/foodfilter.module';
import {FoodorderPageModule} from './foodorder/foodorder.module';
import { FoodplaceotherPageModule } from './foodplaceother/foodplaceother.module';
import { foodInfo } from './providers/book-service';
import { IonicImageLoader } from 'ionic-image-loader';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FoodreviewdetailPageModule } from './foodreviewdetail/foodreviewdetail.module';
import {FoodDinnerOrderPageModule} from './fooddinnerorder/fooddinnerorder.module'
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { FlightchangeinfoPageModule} from './flightchangeinfo/flightchangeinfo.module';
import { FlightsearchairportPageModule} from './flightsearchairport/flightsearchairport.module';
import { FlightselectpaxPageModule } from './flightselectpax/flightselectpax.module';
import { FlightBookingDetailsPageModule } from './flightbookingdetails/flightbookingdetails.module';
import { FlightquickbackPageModule } from './flightquickback/flightquickback.module';
import {FlightsearchfilterPageModule} from './flightsearchfilter/flightsearchfilter.module';
import {FlightpricedetailPageModule} from './flightpricedetail/flightpricedetail.modulte';
import {FlightdetailPageModule} from './flightdetail/flightdetail.module';
import { TopdealfilterPageModule } from './topdealfilter/topdealfilter.module';
import { ConfirmemailPageModule } from './confirmemail/confirmemail.module';
import { FlightpointsavePageModule } from './flightpointsave/flightpointsave.module';

import { SignInWithApple } from '@ionic-native/sign-in-with-apple/ngx';
import {FlightselecttimepriorityPageModule} from './flightselecttimepriority/flightselecttimepriority.module';
import { Calendar } from '@ionic-native/calendar/ngx';
import { IDFAService } from './providers/IDFATrackingService.service';
import { FlightdcpickaddressinputPageModule } from './flightdcpickaddressinput/flightdcpickaddressinput.module';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from  '@ionic-native/file-opener/ngx';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ConfirmemailaccountPageModule } from './confirmemailaccount/confirmemailaccount.module';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, LazyLoadImageModule,HttpClientModule,IonicModule.forRoot(),IonicStorageModule.forRoot(), IonicImageLoader.forRoot(),
    AppRoutingModule,
    DepartureCalendarPageModule,
    PickupCalendarPageModule,
    RequestComboPageModule,
    RequestCombo1PageModule,
    FlightDeparturePageModule,
    SearchHotelFilterPageModule,
    SearchHotelFilterAndSortPageModule,
    OccupancyPageModule,
    CuspointsPageModule,
    HotelreviewsimagePageModule,
    UserTravelHobbyPageModule,
    UserFeedBackPageModule,
    //ExperienceDetailPageModule,
    //ExperienceFilterPageModule,
    IonBottomDrawerModule,
    BlogPageModule,
    BlogModalPageModule,
    SearchBlogModalPageModule,
    CardeparturePageModule,
    ConfirmotpPageModule,
    CombocarchangeplacePageModule,
    InsurrancepopoverPageModule,
    InsurrancehistorypopoverPageModule,
    AdddiscountPageModule,
    FlightcomboupgraderoomPageModule,
    HotelRoomDetailPageModule,
    FoodfilterPageModule,
    FoodorderPageModule,
    FoodplaceotherPageModule,
    FoodreviewdetailPageModule,
    FoodDinnerOrderPageModule,
    FlightsearchfilterPageModule,
    FlightpricedetailPageModule,
    FlightdetailPageModule,
    FlightchangeinfoPageModule,
    FlightsearchairportPageModule,
    FlightselectpaxPageModule,
    FlightBookingDetailsPageModule,
    FlightquickbackPageModule,
    TopdealfilterPageModule,
    ConfirmemailPageModule,
    FlightpointsavePageModule,
    FlightcombobookingdetailPageModule,
    FlightselecttimepriorityPageModule,
    HotellistmoodfilterPageModule,
    FlightdcpickaddressinputPageModule,
    ConfirmemailaccountPageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    SearchHotel,
    ValueGlobal,
    Bookcombo,
    RoomInfo,
    ComboPrice,
    GlobalFunction,
    ActivityService,
    C,
    FormsModule, ReactiveFormsModule ,
    HttpClientModule ,
    HttpClient,
    LoadingController,
    FirebaseAnalytics,
    Platform,
    ToastController,FormBuilder,Http,
    IonContent,
    SocialSharing,
    Facebook,
    GooglePlus,
    Camera,
    Keyboard,
    SafariViewController,
    CallNumber,
    Network,
    NetworkProvider,
    LaunchReview,
    File,
    Crop,
    FCM,
    AppVersion,
    FirebaseMessaging,
    Badge,
    FirebaseDynamicLinks,
    ImagePicker,
    //Geolocation,
    OpenNativeSettings,
    Market,
    DeviceLocation,
    NativePageTransitions,
    InAppReview,
    CodePush,
    Clipboard,
    foodInfo,
    WebView,
    Deeplinks,
    BackgroundMode,
    SignInWithApple,
    Calendar,
    IDFAService,
    FileTransfer,
    File,
    FileOpener,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
