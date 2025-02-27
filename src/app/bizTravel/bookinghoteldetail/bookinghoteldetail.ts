import { Component, NgZone,ViewChild,OnInit } from '@angular/core';
import { Platform, NavController, IonSlides, ModalController } from '@ionic/angular';
import { Bookcombo, SearchHotel, ValueGlobal } from '../../providers/book-service';
import * as request from 'requestretry';
import * as moment from 'moment';
import { C } from './../../providers/constants';
import { GlobalFunction } from './../../providers/globalfunction';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { MytripService } from '../../providers/mytrip-service.service';
import { flightService } from '../../providers/flightService';
import { BizTravelService } from 'src/app/providers/bizTravelService';
/**
 * Generated class for the MytripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-bookinghoteldetail',
  templateUrl: 'bookinghoteldetail.html',
  styleUrls: ['bookinghoteldetail.scss'],
})
export class BookingHotelDetailPage implements OnInit{
  @ViewChild('mySlider') slider: IonSlides;
  jsonroom1 = [];
  hotelRooms = [];
  hotelRoomClasses= [];
  hotelMealTypes = [];
  hotelroom = [];
  slideData = [];
  lengthslide = 0;
  coutslide = 1;
  hotelimg;
  hotelname;
  roomname;
  loaddatadone = false;
  public HotelIdIntenal = 0;
  public HotelId=0;
  public checkIn = '';
  public checkOut = '';
  public mytrip = null;
  public roomNumber = 1;
  public adult = 2;
  public child = 0;
  public cityId = 0;
  public roomId = 0;
  public penaltyItemSelected = -1;
  currentTripIndex=0;
  mealPlan: any;
  inclusion: any;
  constructor(public platform: Platform,public navCtrl: NavController, public gf: GlobalFunction,private router: Router,
    public bookCombo: Bookcombo,public zone: NgZone,public modalCtrl: ModalController,private searchhotel: SearchHotel,
    private storage: Storage,
    public _mytripservice: MytripService,
    public _flightService: flightService,
    public valueGlobal: ValueGlobal,
    public bizTravelService: BizTravelService) {
      
  }

  ngOnInit(){

  }

  ionViewWillEnter(){
    let obj = this.bizTravelService.objBookinghoteldetail;
      if(obj.trip){
        this.loaddatadone= false;
        this.mytrip = obj.trip;
        let objTrip = obj.trip;
        this.currentTripIndex = obj.currentTrip;
        this.HotelId = objTrip.hotel_id;
        this.checkIn = moment(objTrip.checkInDate).format('YYYY-MM-DD');
        this.checkOut = moment(objTrip.checkOutDate).format('YYYY-MM-DD');
        this.roomNumber = objTrip.room_count;
        this.roomId = objTrip.room_id;
        this.mealPlan = objTrip.meal_plan;
        this.inclusion = objTrip.inclusion;
        if(this.inclusion && this.inclusion.indexOf('↵')){
          this.inclusion = this.inclusion.replace('↵','<br>')
        }
        if(objTrip.extra_guest_info){
          this.adult = objTrip.extra_guest_info.split('|')[0].trim();
          this.child = objTrip.extra_guest_info.split('|')[1].trim();
        }
      }
    this.handleSplashScreen();
    this.storage.get('bookinghoteldetail_'+this.HotelId).then((data)=>{
      if(data){
        this.zone.run(() => {
          var jsondata = data;
          this.storage.set('bookinghoteldetail_'+this.HotelId,jsondata);
          this.cityId = jsondata.CityId;
          this.HotelIdIntenal = jsondata.Id;
          if (jsondata.HotelImages.length > 0) {
            this.slideData = jsondata.HotelImages;
            for (let index = 0; index < this.slideData.length; index++) {
              if(this.slideData[index].LinkImage.indexOf("https") == -1){
                this.slideData[index].LinkImage = 'https:' + this.slideData[index].LinkImage;
              }
              
            }
          }
          else {
            var item;
            if(jsondata.Avatar.indexOf("https") == -1){
              item = { LinkImage: 'https:' + jsondata.Avatar }
            }else{
              item = { LinkImage: jsondata.Avatar }
            }
            //var item = { LinkImage: 'https:' + jsondata.Avatar }
            this.slideData.push(item);
          }
          this.lengthslide = this.slideData.length;
        },10)

      this.storage.get('bookinghoteldetail_'+this.HotelIdIntenal+"_"+this.checkIn +"_"+this.checkOut).then((dataroom)=>{
        if(dataroom){
          if(dataroom.Hotels){
            this.hotelname = dataroom.Hotels[0].HotelName;
            this.hotelRooms = [];
            this.hotelRoomClasses = [];
            this.hotelRooms = dataroom.Hotels[0];
            dataroom.Hotels[0].RoomClasses.forEach((element,index) => {
              if(element.Rooms[0].RoomID == this.roomId){
                this.hotelRoomClasses.push(element);
                this.roomname = element.ClassName;
                this.loaddatadone = true;
              }
                
              });
          }else{
            this.loaddatadone = true;
            this.hotelRoomClasses = [];
          }
        }else{
          this.getdataroom();
        }
      })
      }else{
        this.getdata();
      }
    })
    
    //google analytic
    this.gf.googleAnalytion('mytripbookingdetail','load','');
  }

  /***
   * Hàm load thông tin phòng
   */
  getdataroom() {
    var self = this;
    var options;
    var form = {
      CheckInDate: self.checkIn,
      CheckOutDate: self.checkOut,
      CityID: self.cityId,
      CountryID: 'VN',
      HotelID: self.HotelIdIntenal,
      IsLeadingPrice: '1',
      IsPackageRate: 'false',
      NationalityID: '82',
      ReferenceClient: '',
      RoomNumber: self.roomNumber,
      'RoomsRequest[0].RoomIndex': '1',
      Supplier: 'IVIVU',
      dataKey: '',
      'RoomsRequest[0][Adults][value]': self.adult,
      'RoomsRequest[0][Child][value]': self.child,
      GetVinHms: 1,
      GetSMD: 1,
      IsFenced: true,
      IsB2B: true
    };
    options = {
      method: 'POST',
      url:  C.urls.baseUrl.urlContracting +'/api/contracting/HotelSearchReqContractAppV2',
      timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      headers:
        {},
      form
    };

    request(options, function (error, response, body) {
      if(response.statusCode != 200){
        var objError ={
            page: "mytripbookingdetail",
            func: "getdataroom",
            message : response.statusMessage,
            content : response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
        C.writeErrorLog(objError,response);
      }
      if (error) {
        error.page = "mytripbookingdetail";
        error.func = "getdataroom";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error,response);
      };
      self.zone.run(() => {
        self.jsonroom1 = JSON.parse(body);
        if (self.jsonroom1) {
           //Load roomdetail
           var result = JSON.parse(body);
          if(result.Hotels){
            self.storage.set('bookinghoteldetail_'+self.HotelIdIntenal+"_"+self.checkIn +"_"+self.checkOut,result);
            self.hotelname = result.Hotels[0].HotelName;
            self.hotelRooms = [];
            self.hotelRoomClasses = [];
            self.hotelRooms = result.Hotels[0];
            result.Hotels[0].RoomClasses.forEach((element,index) => {
              if(element.Rooms[0].RoomID == self.roomId){
                self.hotelRoomClasses.push(element);
                self.roomname = element.ClassName;
                self.loaddatadone = true;
              }
                
              });
            //self.hotelroom = self.hotelRoomClasses[0];
            //self.mealtype.push(self.hotelroom.MealtypeRates)
            
          }else{
            self.loaddatadone = true;
            self.hotelRoomClasses = [];
          }
        }
        else {
          self.loaddatadone = true;
          self.hotelRoomClasses = [];
        }
      },100);
    })

  }

  getdata() {
    var self = this;
      var options = {
        method: 'POST',
        url:  C.urls.baseUrl.urlPost + "/mhoteldetail/" + self.HotelId,
        timeout: 180000, maxAttempts: 5, retryDelay: 2000,
      };
  
      request(options, function (error, response, body) {
        if(response.statusCode != 200){
          var objError ={
              page: "mytripbookingdetail",
              func: "getdata",
              message : response.statusMessage,
              content : response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
          C.writeErrorLog(objError,response);
        }
        if (error) {
          error.page = "mytripbookingdetail";
          error.func = "getdata";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error,response);
        };
        self.zone.run(() => {
          var jsondata = JSON.parse(body);
          self.storage.set('bookinghoteldetail_'+self.HotelId,jsondata);
          self.cityId = jsondata.CityId;
          self.HotelIdIntenal = jsondata.Id;
          if (jsondata.HotelImages.length > 0) {
            self.slideData = jsondata.HotelImages;
            for (let index = 0; index < self.slideData.length; index++) {
              self.slideData[index].LinkImage = 'https:' + self.slideData[index].LinkImage;
            }
          }
          else {
            var item = { LinkImage: 'https:' + jsondata.Avatar }
            self.slideData.push(item);
          }
          self.lengthslide = self.slideData.length;
          self.getdataroom();
        },10)
      })
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
  
      if (elements != null) {
        Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
        });
      }
  }

  async handleSplashScreen(): Promise<void> {
    try {
      // wait for App to finish loading
      await this.platform.ready()
    } catch (error) {
      if (error) {
        error.page = "mytripbookingdetail";
        error.func = "handleSplashScreen";
        C.writeErrorLog(error,null);
      };
    }
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => { splash.remove() }, 300);
    }

  }
  slidechange(){
    this.slider.getActiveIndex().then((currentIndex)=>{
      this.hotelimg = this.slideData[currentIndex].LinkImage;
      this.coutslide = currentIndex + 1;
    });
  }

  goback() {
    if(this._mytripservice.backroute){
        if(this._mytripservice.rootPage == "homeflight"){
          this._flightService.itemTabFlightActive.emit(true);
          this._flightService.itemMenuFlightClick.emit(2);
          this.valueGlobal.backValue = "homeflight";
          this.navCtrl.navigateBack('/tabs/tab1', {animated: true});
          this._mytripservice.backfrompage= "";
        }else{
          this.navCtrl.navigateBack("/tabs/tab3");
        }
      }else{
        this.navCtrl.navigateBack('/bookingdetail');
        this._mytripservice.backfrompage = "bookinghoteldetail";
      }
    
  }

  openRoomCancel(roominfo){
    // let modal = this.modalCtrl.create('RoomCancelPage',{roomInfo: roominfo});
    // modal.present();
    roominfo.showFromMytrip = true;
    this.gf.setParams(roominfo,'roomInfo')
    this.searchhotel.backPage ="mytripbookingdetail";
    this.navCtrl.navigateForward('/roomcancel');
  }
  /*** Ẩn hiện popup chính sách phạt
   * PDANH  18/02/2018
   */
  penaltySelected(index) {
    if (this.penaltyItemSelected >= 0) {
      this.penaltyItemSelected = -1;
    } else {
      this.penaltyItemSelected = index;
    }
  }
}
