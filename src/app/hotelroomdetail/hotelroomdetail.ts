import { Component, NgZone, OnInit,ViewChild } from '@angular/core';
import { NavController, ModalController, Platform, LoadingController,IonSlides, IonContent } from '@ionic/angular';
import { C } from './../providers/constants';
import { GlobalFunction } from './../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { SearchHotel, Booking, RoomInfo, ValueGlobal } from '../providers/book-service';
import * as request from 'requestretry';
import * as $ from 'jquery';

@Component({
  selector: 'app-hotelroomdetail',
  templateUrl: 'hotelroomdetail.html',
  styleUrls: ['hotelroomdetail.scss'],
})

export class HotelRoomDetailPage implements OnInit {
  @ViewChild('mySlider') slider: IonSlides;
  @ViewChild('mySlider') container: IonContent;
  roomdetail = null;
  roomdetailarr = [];
  imgurl = null;
  public HotelID;
  penaltyItemSelected: number;
  loginuser: any;
  arrroom: any[];
  duration: any;
  indexroom: any;
  notAllowBook: boolean = false;
  slideData=[];
  nameRoom: any;
  countslide=1
  RoomDescription: any;
  ischeck: boolean = false;
  defaultImage = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-375x195.jpg";
  constructor(public platform: Platform, public modalCtrl: ModalController, public navCtrl: NavController,
    public gf: GlobalFunction, private activatedRoute: ActivatedRoute, public zone: NgZone, private storage: Storage,
    public searchhotel: SearchHotel,
    public booking: Booking,
    private loadingCtrl: LoadingController,
    public Roomif: RoomInfo,
    public valueGlobal: ValueGlobal) {
      
      this.zone.run(()=>{
        this.HotelID = this.activatedRoute.snapshot.paramMap.get('id');
        this.roomdetail = this.gf.getParams('hotelroomdetail').objroom;
        this.nameRoom=this.roomdetail.ClassName;
        this.slideData=this.roomdetail.Rooms[0].RoomInfomations.RoomImageList;
        if(!this.slideData){
          this.slideData=[];
        }
        this.RoomDescription=this.roomdetail.Rooms[0].RoomInfomations.RoomDescription;
        if (this.roomdetail && this.roomdetail.Rooms[0].ImagesMaxWidth500) {
         
          var str = this.roomdetail.Rooms[0].ImagesMaxWidth500;
          var res = str.substr(0, 4);
          if (res != "http") {
            this.imgurl="https:"+str;
          }
          else
          {
            this.imgurl=str;
          }
          
          if (str.indexOf('noimage') != -1) {
            this.imgurl = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-104x110.jpg";
          }
          if(this.slideData && this.slideData.length == 0){
            this.slideData.push({Url: this.imgurl});
          }
          this.imgurl = this.roomdetail.Rooms[0].ImagesMaxWidth500 ? "https:"+ this.roomdetail.Rooms[0].ImagesMaxWidth500 : 'https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png';
         
        }
        if(this.slideData && this.slideData.length >0 ){
          for (let i = 0; i < this.slideData.length; i++) {
            const element = this.slideData[i];
            element.Url = (element.Url.toLocaleString().trim().indexOf("http") != -1) ? element.Url : 'https:' + element.Url;
          }

    
          $('.cls-slide-room-detail-image').click(function(e){ debugger})
        }
      
      
        this.roomdetailarr = [];
        this.roomdetailarr.push(this.roomdetail);
        setTimeout(()=>{
          this.ischeck = true;
        },3000)
        // this.clearBlurEffect();
      })
     
    if(this.valueGlobal.backValue && this.valueGlobal.backValue == "flightcomboupgrade"){
      this.notAllowBook = true;
    }

  
    //google analytic
    gf.googleAnalytion('hotelroomdetail', 'load', '');

  }
  handlerButtonSlideClick(e){
    if (e.offsetX > e.target.offsetLeft) {
      // click on element
    }
    else{
      // click on ::before element
      debugger
    }
  
  }
  
  clearBlurEffect(){
    //$('img.preview').removeClass('preview').addClass('reveal');
    setTimeout(()=>{
      $('img.preview').removeClass('preview');
    },500)
    
  }

  ngOnInit() {

  }
  goback() {
    if(this.valueGlobal.backValue && this.valueGlobal.backValue == "flightcomboupgrade"){
      this.modalCtrl.dismiss();
    }else{
      this.valueGlobal.backValue = "";
      this.navCtrl.navigateBack('/hoteldetail/'+ this.HotelID);
    }
    
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
  /*** Về trang login
   * PDANH  18/02/2018
   */
  goToLogin() {
    this.storage.get('auth_token').then(auth_token => {
      if (!auth_token) {
        this.navCtrl.navigateForward('/login');
      }
    });
  }

  book(id, MealTypeRates, indexme, roomName, indexroom) {
    var self = this;
    self.presentLoadingNew();
    
    self.arrroom = [];
    let objjsonroom = self.gf.getParams('hotelroomdetail').jsonroom;
    for (let i = 0; i < objjsonroom.RoomClasses.length; i++) {
      if (id == objjsonroom.RoomClasses[i].Rooms[0].RoomID) {
        self.arrroom.push(objjsonroom.RoomClasses[i]);
        self.indexroom = i;
        break;
      }
    }
    
    //console.log(self.arrroom);
    var date1 = new Date(self.searchhotel.CheckInDate);
    var date2 = new Date(self.searchhotel.CheckOutDate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    self.duration = Math.ceil(timeDiff / (1000 * 3600 * 24));
    self.storage.get('email').then(email => {
      //if (email) {
        self.booking.CheckInDate = self.searchhotel.CheckInDate;
        self.booking.CheckOutDate = self.searchhotel.CheckOutDate,
          self.booking.roomNb = MealTypeRates.TotalRoom.toString() ? MealTypeRates.TotalRoom.toString() : self.searchhotel.roomnumber.toString(),
          self.booking.Adults = self.searchhotel.adult,
          self.booking.Child = self.searchhotel.child,
          self.booking.CName = '',
          self.booking.CEmail = email ?email : '',
          self.booking.cost = MealTypeRates.PriceAvgPlusTAStr,
          self.booking.indexroom = self.indexroom,
          self.booking.indexmealtype = indexme,
          self.booking.HotelId = self.HotelID,
          self.Roomif.RoomId = id,
          self.booking.HotelName = objjsonroom.HotelName,
          self.booking.RoomName = roomName,
          self.Roomif.Address = self.gf.getParams('hotelroomdetail').address,
          self.Roomif.dur = self.duration,
          self.Roomif.arrroom = self.arrroom,
          self.Roomif.roomnumber = MealTypeRates.TotalRoom.toString() ? MealTypeRates.TotalRoom.toString() : self.searchhotel.roomnumber.toString(),
          self.Roomif.roomtype = MealTypeRates,
          self.Roomif.jsonroom = objjsonroom,
          self.Roomif.imgHotel = self.gf.getParams('hotelroomdetail').imgHotel;
        self.Roomif.objMealType = MealTypeRates;
        self.Roomif.HotelRoomHBedReservationRequest = JSON.stringify(self.arrroom[0].HotelRoomHBedReservationRequest);
        self.Roomif.arrrbed = [];
        self.Roomif.imgRoom = self.arrroom[0].Rooms[0].ImagesMaxWidth320;
        self.booking.code = self.arrroom[0].Rooms[0].hotelcode;
        //if (self.arrroom[0].MealTypeRates[indexme].Supplier == 'Internal') {
        if (MealTypeRates.Supplier == 'Internal') {
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlContracting + '/api/toolsapi/CheckAllotment',
            qs:
            {
              token: '3b760e5dcf038878925b5613c32615ea3',
              hotelcode: self.booking.HotelId,
              roomcode: self.Roomif.RoomId,
              checkin: self.booking.CheckInDate,
              checkout: self.booking.CheckOutDate,
              totalroom: self.booking.roomNb
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
              C.writeErrorLog(objError,response);
            }
            if (error) {
              error.page = "hoteldetail";
              error.func = "book";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error,response);
              throw new Error(error)
            };
            var rs = JSON.parse(body);
            if (rs.Msg == "AL") {
              self.Roomif.payment = rs.Msg;
              // console.log(self.Roomif.payment);
              self.Roomif.ischeckpayment = true;
              self.valueGlobal.backValue = 'hotelroomdetail';
              self.navCtrl.navigateForward('roomdetailreview')
            } else if (rs.Msg == "RQ") {
              self.Roomif.payment = rs.Msg;
              // console.log(self.Roomif.payment);
              self.Roomif.ischeckpayment = false;
              self.valueGlobal.backValue = 'hotelroomdetail';
              self.navCtrl.navigateForward('roomdetailreview')
            }
          });
        }
        else if (MealTypeRates.Supplier == 'HBED') {
          if (MealTypeRates.Penaltys.length > 0) {
            self.Roomif.payment = self.arrroom[0].MealTypeRates[indexme].Penaltys[0].IsPenaltyFree;
            self.Roomif.ischeckpayment = true;
            self.navCtrl.navigateForward('roomdetailreview');
          }
          else {
            if (MealTypeRates.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
              self.checkhbed(MealTypeRates);
            }
          }
        }
        else {
          // console.log(self.arrroom[0].Rooms[0].Penaltys[0].IsPenaltyFree);
          self.Roomif.arrrbed = self.arrroom[0].MealTypeRates[indexme].BedTypes;
          self.Roomif.payment = self.arrroom[0].MealTypeRates[indexme].Penaltys[0].IsPenaltyFree;

          self.Roomif.ischeckpayment = true;
          self.valueGlobal.backValue = 'hotelroomdetail';
          self.navCtrl.navigateForward('roomdetailreview');
        }
    //  }
    })
  }

  async presentLoadingNew() {
    var loader = await this.loadingCtrl.create({
      duration: 1000,
    });
    loader.present();
  }

  checkhbed(MealTypeRates) {
    var self = this;
    var form = {
      GrossProfitOnline: MealTypeRates.HotelRoomHBedReservationRequest.GrossProfitOnline,
      rooms: MealTypeRates.HotelRoomHBedReservationRequest.rooms,
      rateCommentId: MealTypeRates.HotelRoomHBedReservationRequest.rateCommentId
    }
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlContracting + '/api/contracting/GetRateCommonHbedAjax',
      headers: {},
      form
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      var json = JSON.parse(body);
      if (json.cancelPolicy) {
        self.Roomif.payment = json.cancelPolicy[0].IsPenaltyFree;
        self.Roomif.ischeckpayment = true;
        // self.storage.set(MealTypeRates.HotelRoomHBedReservationRequest.rooms[0].rateKey,json.cancelPolicy[0].IsPenaltyFree);
        // self.listkeyhdbed.push(MealTypeRates.HotelRoomHBedReservationRequest.rooms[0].rateKey);
        self.navCtrl.navigateForward('roomdetailreview');
      }
      else {
        alert("Đã hết phòng, vui lòng chọn lại phòng khác!");
      }
    });
  }
  imgDetail(){
    if(this.slideData.length>1){
      this.navCtrl.navigateForward('roomimagedetail');
    }
  
  }
  nextslide()
  {
    if (this.countslide<this.slideData.length) {
      this.countslide= this.countslide+1;
      this.slider.slideTo(this.countslide-1);
    }

  }
  backslide()
  {
    if (this.countslide-1>0) {
      this.countslide= this.countslide-1;
      this.slider.slideTo(this.countslide-1);
    }

  }
  ionSlideDidChange()
  {
      this.slider.getActiveIndex().then(index => {
        this.countslide = index + 1;
      });
  }
}