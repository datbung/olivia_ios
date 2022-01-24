import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, IonContent, AlertController, PickerController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { C } from './../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { ImageLoaderService } from 'ionic-image-loader';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ValueGlobal, SearchHotel } from '../providers/book-service';
import { DayConfig, CalendarModalOptions, CalendarResult, CalendarModal } from 'ion2-calendar';
import {flightService} from './../providers/flightService';
import * as request from 'requestretry';
import {FlightsearchfilterPage} from '../flightsearchfilter/flightsearchfilter.page';
import {FlightdetailPage } from '../flightdetail/flightdetail.page';
import { FlightchangeinfoPage } from '../flightchangeinfo/flightchangeinfo.page';
import { transition } from '@angular/animations';
import { FlightquickbackPage } from '../flightquickback/flightquickback.page';
import { CustomAnimations } from '../providers/CustomAnimations';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { FlightselecttimepriorityPage } from '../flightselecttimepriority/flightselecttimepriority.page';

@Component({
  selector: 'app-flightsearchresult',
  templateUrl: './flightsearchresult.page.html',
  styleUrls: ['./flightsearchresult.page.scss'],
})
export class FlightsearchresultPage implements OnInit {
  @ViewChild('scrollArea') content: IonContent;
  loadpricedone = false;
  listDepart: any;
  listReturn: any;
  departfi: any[];
  returnfi: any[];
  title ="";
  subtitle = "";
  bestpricedepart: any[];
  otherpricedepart: any[];
  sortairline: boolean = true;
  column: any;
  step = 2;
  bestpricereturn: any[];
  otherpricereturn: any[];
  buttonVASelected: boolean;
  airlinename: boolean;
  arrFilterAirline: any=[];
  buttonVJSelected: boolean;
  buttonJSSelected: boolean;
  buttonBASelected: boolean;
  listdepartflightdisplay: any[];
  listreturnflightdisplay: any[];
  buttonMinPriceSelected: any;
  buttonMinTimeSelected: boolean;
  buttonMaxTimeSelected: boolean;
  buttonMinTimeDepartSelected: boolean;
  buttonMaxTimeDepartSelected: boolean;
  buttonMinTimeReturnSelected: boolean;
  buttonMaxTimeReturnSelected: boolean;
  titlereturn: any;
  subtitlereturn: any;
  count: number=0;
  stoprequest: boolean=false;
  listDepartConditions = [];
  listReturnConditions = [];
  enableFlightFilter:any;
  enableFlightFilterReturn:any;
  canselect = true;
  listDepartAirlines: any=[];
  listReturnAirlines: any=[];
  listDepartNoFilter: any=[];
  listReturnNoFilter: any=[];
  listDepartFilter: any;
  listReturnFilter: any;
  listDepartTimeRange: any=[];
  listDepartLandingTimeRange: any=[];
  listReturnTimeRange: any=[];
  listReturnLandingTimeRange: any=[];
  listDepartTicketClass: any=[];
  ecoTicketClassName ="Phổ thông";
  bussinessTicketClassName ="Thương gia";
  firstTicketClassName ="Hạng nhất";
  promoTicketClassName ="Tiết kiệm";
  flexTicketClassName ="Linh hoạt";
  listReturnTicketClass: any=[];
  listDepartStops:any=[];
  listReturnStops:any=[];
  departFlight: any;
  loadsk = [1,2,3];

  listDepartAirlinesReturn: any=[];
  listReturnAirlinesReturn: any=[];
  listDepartNoFilterReturn: any=[];
  listReturnNoFilterReturn: any=[];
  listDepartFilterReturn: any;
  listReturnFilterReturn: any;
  listDepartTimeRangeReturn: any=[];
  listDepartLandingTimeRangeReturn: any=[];
  listReturnTimeRangeReturn: any=[];
  listReturnLandingTimeRangeReturn: any=[];
  listDepartTicketClassReturn: any=[];
  listReturnTicketClassReturn: any=[];
  listDepartStopsReturn:any=[];
  listReturnStopsReturn:any=[];
  myCalendar: HTMLIonModalElement;
  progressbarloading = 0.5;
  progressbarbuffer = 0.75;
  intervalFlightTicket: any;
  intervalProgressbar: any;
  auth_token: any;
  jti: any = '';
  allowSearch: boolean=true;
  allowSearchReturn: boolean=true;
  buttoniVIVUSelected: boolean=true;
  textsort: string= "iVIVU đề xuất";
  showlowestprice: boolean = false;
  countdaydisplay: number = 0;
  checkInDisplayMonth: string;
  checkOutDisplayMonth: string;
  roundtriptext:string ="khứ hồi/khách";
  timedepartpriorityconfig: any;
  timereturnpriorityconfig: any;
  listDepartFacility = [];
  listReturnFacility = [];
  allowclickcalendar: boolean = true;
  
  VJSaverTicket = ['E1_Eco','A_Eco'];

  constructor(private navCtrl: NavController, private gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private imageLoader: ImageLoaderService,
    public storage: Storage,
    private actionsheetCtrl: ActionSheetController,
    public valueGlobal: ValueGlobal,
    public searchhotel: SearchHotel,
    public _flightService: flightService,
    private alertCtrl: AlertController,
    private pickerCtrl : PickerController,
    private fb: Facebook) { 
      this.step =2;
      clearInterval(this.intervalFlightTicket);
      if(_flightService.objSearch){
        let obj= _flightService.objSearch;
        let key="";
        
        storage.get('timedepartpriorityconfig').then((data) => {
          if(data){
              this.timedepartpriorityconfig = data;
              obj.timeDepartPriority = data;
          }
        })
  
        storage.get('timereturnpriorityconfig').then((data) => {
            if(data){
                this.timereturnpriorityconfig = data;
                obj.timeReturnPriority = data;
            }
        })
        
        if(!obj.itemSameCity){
          key ='listflight_' + obj.departDate + '_' + obj.returnDate + '_' + obj.departCode + '_' + obj.arrivalCode + '_' + obj.adult + '_' + obj.child + '_' + obj.infant;
          storage.get(key).then((data)=>{
            if(data){
              //this.loadcachedata(data);
              this.loadFlightData(obj, false);
            }else{
              this.loadFlightData(obj, false);
            }
          })
        }else{
          key ='listflight_' + obj.departDate + '_' + obj.returnDate + '_' + obj.departCity + '_' + obj.returnCity + '_' + obj.adult + '_' + obj.child + '_' + obj.infant;
          storage.get(key).then((data)=>{
            if(data){
              let objsamecity = obj.itemDepartSameCity ? obj.itemDepartSameCity : obj.itemReturnSameCity;
              //this.loadmultidata(data);
            }else{
              if(!obj.itemSameCity){
                this.loadFlightData(obj, false);
              }else{
                let objsamecity = obj.itemDepartSameCity ? obj.itemDepartSameCity : obj.itemReturnSameCity;
                this.loadFlightDataSameCity(obj, objsamecity);
              }
              
            }
          })
        }
        
        
        
        this.title = obj.title;
        this.subtitle = obj.subtitle;
        this.titlereturn = obj.titleReturn;
        this.subtitlereturn = obj.subtitleReturn;
      }

      this.storage.get('flightfilterobject').then((data)=>{
        if(data){
          this._flightService.objectFilter = data;
        }
      })
      
      this.storage.get('jti').then(jti => {
        if (jti) {
          this.jti = jti;
        }
      })

      // this.fb.login(['public_profile', 'user_friends', 'email'])
      //   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
      //   .catch(e => console.log('Error logging into Facebook', e));


      //this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
      this.gf.googleAnalytionCustom('Searched', {'Origination City' : _flightService.itemFlightCache.departCity ,
       'Destination City': _flightService.itemFlightCache.returnCity,
       'Departure Date': _flightService.itemFlightCache.checkInDate ,'Return Date': _flightService.itemFlightCache.checkOutDate,'Number of Passengers': _flightService.itemFlightCache.pax})
      let se = this;
      se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_SEARCHED, {'fb_content_type': 'flight', 'fb_content_id': se._flightService.itemFlightCache.departCode +"_"+se._flightService.itemFlightCache.returnCode,
      'origin_airport' : se._flightService.itemFlightCache.departCode  ,
      'destination_airport': se._flightService.itemFlightCache.returnCode,
      'departing_departure_date': se._flightService.itemFlightCache.checkInDate ,'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate,'num_adults': se._flightService.itemFlightCache.adult,'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0,'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0, 'fb_value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0) , 'fb_currency': "VND",
      'value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0) , 'currency': "VND"   }, se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToFloat(se._flightService.itemFlightCache.totalPrice) : 0);

      let flightItem = se._flightService.itemFlightCache;
    }

  ngOnInit() {
    this.zone.run(()=>{
        this.stoprequest = false;
      setTimeout(()=>{
        this.stoprequest = true;
        this.loadpricedone = true;
      }, 50 * 1000);
    })
    
    this._flightService.itemFlightFilterChange.pipe().subscribe((data) => {
        if(data){
          this.zone.run(()=>{
            this.enableFlightFilter = 1;
          })
        }else{
          this.zone.run(()=>{
            this.enableFlightFilter = 0;
          })
        }
    })

    this._flightService.itemFlightFilterChangeReturn.pipe().subscribe((data) => {
      if(data){
        this.zone.run(()=>{
          this.enableFlightFilterReturn = 1;
        })
      }else{
        this.zone.run(()=>{
          this.enableFlightFilterReturn = 0;
        })
      }
    })

    this._flightService.itemChangeTicketFlight.pipe().subscribe((data) => {
      if(data){
        let obj= this._flightService.objSearch;
        this.step = this._flightService.itemFlightCache.step;
        this.zone.run(()=>{
          this.resetValue();
        })
        this.loadFlightData(obj, true);
      }
    })
  }

  goback(){
    this.stoprequest = true;
    if(this.step ==3){
      this.zone.run(()=>{
        this.step = 2;
        this._flightService.itemFlightCache.step = 2;
        this._flightService.itemFlightCache.departFlight = null;
        this._flightService.itemFlightCache.returnFlight = null;
        if(this._flightService.objectFilter){
          this.filterItem();
        }
      })
    }else{
      this._flightService.itemTabFlightActive.emit(true);
      this._flightService.itemFlightReloadInfo.emit(1);
      this.valueGlobal.backValue = "homeflight";
      //this.clearFilter();
      this.navCtrl.navigateBack('/tabs/tab1');
    }
    
  }
  checkRoundTripInDay(item) : Promise<any>{
    var se = this, res = false;
     return new Promise((resolve, reject) => {
       let departTime = moment(se._flightService.itemFlightCache.departFlight.landingTime);
       let departTimeReturn = moment(item.departTime);
       //Giờ cất cánh chuyến về phải lớn hơn giờ cất cánh chuyến đi ít nhất 3h
        if(se._flightService.itemFlightCache.departFlight && item && departTimeReturn.diff(departTime, 'minutes') < 180 ){
            resolve(true);
        }
        resolve(false);
     })
  }

  async showAlert(msg){
    var se = this;
    let alert = await this.alertCtrl.create({
      message: msg,
      cssClass: "cls-alert-searchresult",
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

  select(type,item){
    var se = this;

    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_VIEWED_CONTENT, {'fb_content_type': 'flight', 'fb_content_id': item.fromPlaceCode +"_"+item.toPlaceCode +"_"+item.flightNumber,
      'origin_airport' : item.fromPlaceCode  ,
      'fb_destination_airport': item.toPlaceCode,
      'departing_departure_date': se._flightService.itemFlightCache.checkInDate ,'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate,'num_adults': se._flightService.itemFlightCache.adult,'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0,'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0, 'fb_value': item.totalPrice , 'fb_currency': "VND" ,'value': item.totalPrice , 'currency': "VND" ,
     }, se.gf.convertNumberToFloat(item.totalPrice) );

      let flightItem = se._flightService.itemFlightCache;

    if(type ==1 ){
      item.departTimeDisplayFull = se._flightService.itemFlightCache.checkInDisplay;

      se._flightService.itemFlightCache.departFlight = item; 
      se.departFlight = item;
      
      if(se._flightService.objSearch.roundTrip){
        se._flightService.itemFlightCache.step = 3;
        if(se._flightService.objectFilter){
          se.filterItem();
        }
        se.zone.run(()=>{
          se.step = 3;
          se.content.scrollToTop(300);
        })
       
      }else{
        se._flightService.itemFlightCache.returnFlight = null;
        if(se.canselect){
          se.choiceTicket(type, item);
        }
        se._flightService.itemFlightCache.hasChoiceLuggage = false;
        se._flightService.itemFlightCache.departLuggage = [];
        se._flightService.itemFlightCache.returnLuggage = [];
      }
    }else{
      
      //Nếu đi và về cùng ngày thì check thêm dk giờ về phải lớn hơn giờ đi 3h
      if(se._flightService.objSearch.roundTrip)
      {
        se.checkRoundTripInDay(item).then((data) => {
          if(data){
              se.showAlert('Để thuận tiện, bạn nên chọn chuyến bay về có giờ khởi hành cách thời điểm chuyến bay đi hạ cánh ít nhất 3 tiếng');
              return;
          }else{
            item.returnTimeDisplayFull = se._flightService.itemFlightCache.returnTimeDisplay;
            se._flightService.itemFlightCache.returnFlight = se._flightService.objSearch.roundTrip ? item : null; 
            if(se.canselect){
              se.choiceTicket(type, item);
            }
            se._flightService.itemFlightCache.hasChoiceLuggage = false;
            se._flightService.itemFlightCache.departLuggage = [];
            se._flightService.itemFlightCache.returnLuggage = [];
          }
        })
      }else{
        se._flightService.itemFlightCache.returnFlight = se._flightService.objSearch.roundTrip ? item : null; 
        if(se.canselect){
          se.choiceTicket(type, item);
        }
        se._flightService.itemFlightCache.hasChoiceLuggage = false;
        se._flightService.itemFlightCache.departLuggage = [];
        se._flightService.itemFlightCache.returnLuggage = [];
      }
      
    }
    
  }

  choiceTicket(type, item){
    var se = this;
    se.gf.showLoading();
    
    se.selectTicket().then((data)=>{
      se.canselect = true;
      se.gf.hideLoading();
      if(data && data.id){
        se._flightService.itemFlightCache.dataBooking = data.detail;
        
          se._flightService.itemFlightCache.reservationId = data.id;
          se._flightService.itemFlightCache.step = 3;
          

          se.storage.get("itemFlightCache").then((data)=>{
            if(data){
              se.storage.remove("itemFlightCache").then(()=>{
                se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
              })
            }else{
              se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
            }
          })
          se._flightService.itemFlightReloadInfo.emit(1);

          se._flightService.itemFlightCache.departSeatChoice = [];
          se._flightService.itemFlightCache.returnSeatChoice = [];
          se._flightService.itemFlightCache.listdepartseatselected="";
          se._flightService.itemFlightCache.listreturnseatselected ="";
          se._flightService.itemFlightCache.departSeatChoiceAmout = 0;
          se._flightService.itemFlightCache.returnSeatChoiceAmout = 0;
          se.clearServiceInfo();
          
          se.getSummaryBooking(data).then((dataBooking)=>{
            if(dataBooking && dataBooking.hotelIds){

              se.getHotelCity(dataBooking.hotelIds).then((dataHotelCity:any) => {
                if(dataHotelCity && dataHotelCity.List){

                  if(dataBooking && dataBooking.rateKey){

                    se.getHotelCityPrice(dataBooking.rateKey).then((dataHotelCityPrice:any) => {
                        if(dataHotelCityPrice && dataHotelCityPrice.HotelListResponse && dataHotelCityPrice.HotelListResponse.HotelList && dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary && dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary.length >0){
                          let arrHotelPrice = [], arrHotelDetail = [], arrHotel = [];
                          
                          se.mapHotelInfo(dataHotelCity,dataHotelCityPrice,arrHotelPrice,arrHotelDetail, arrHotel).then((data)=>{
                            se._flightService.itemFlightCache.itemsFlightCityHotel = [...data];
                            se._flightService.itemCheckHotelCity.emit([...data]);
                          })
                          
                        }else{
                          se._flightService.itemCheckHotelCity.emit(0);
                        }
                    })
                  }
                }else{
                  se._flightService.itemCheckHotelCity.emit(0);
                }
                
              })
            }else{
              se._flightService.itemCheckHotelCity.emit(0);
            }
            se.gf.hideLoading();
            //se.navCtrl.navigateForward('/flightaddservice');
          })

          se.navCtrl.navigateForward('/flightaddservice');
          se.stoprequest = true;
      }else{
        //se.gf.showToastWarning('Vé máy bay bạn chọn hiện không còn. Vui lòng chọn lại!');
        se.showAlertRefreshPrice('Vé máy bay bạn chọn hiện không còn. Vui lòng chọn lại!');
      }
    })
  }

  mapHotelInfo(dataHotelCity,dataHotelCityPrice, arrHotelPrice, arrHotelDetail, arrHotel):Promise<any>{
    return new Promise((resolve, reject) => {
        for (let index = 0; index < dataHotelCity.List.length; index++) {
          const elementHotel = dataHotelCity.List[index];
         

            let objhoteldetailmap = dataHotelCityPrice.HotelDetailData.filter((itemdetail) => {return itemdetail.HotelID == elementHotel.HotelId});
            if(objhoteldetailmap && objhoteldetailmap.length >0){
              elementHotel.hotelDetail = objhoteldetailmap[0];

              let objhotelmap = dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary.filter((item) => {return item.HotelId == elementHotel.HotelId});
              if(objhotelmap && objhotelmap.length >0){
                elementHotel.dataPrice = objhotelmap[0];
                arrHotel.push(elementHotel);
              }
            }
            
          }
          resolve(arrHotel);
    })
  }

  getHotelCity(ids){
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlGet + "/hotelslist?hotelids="+ids+"&page=1&pageSize=15",
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "flightsearchresult";
          error.func = "hotelslist";
          error.param = JSON.stringify(options);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          resolve(result);
        }
      })
    })
  }

  getHotelCityPrice(key){
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlContracting + "/api/contracting/HotelSearchReqContractMultiHotel",
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        body: JSON.stringify({cacheKey: key}),
        headers: {
          //"Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8'
        }
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "flightsearchresult";
          error.func = "HotelSearchReqContractMultiHotel";
          error.param = JSON.stringify(options);
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          resolve(result);
        }
      })
    })
  }

  getSummaryBooking(data) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+data.resNo+"?"+new Date().getTime()+"&stepBooking=service",
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

  clearServiceInfo(){
    this._flightService.itemFlightCache.jsonSeats = null;
    this._flightService.itemFlightCache.listdepartseatselected = "";
    this._flightService.itemFlightCache.listreturnseatselected = "";
    this._flightService.itemFlightCache.departLuggage = [];
    this._flightService.itemFlightCache.returnLuggage = [];
    this._flightService.itemFlightCache.hasChoiceLuggage = false;
    this._flightService.itemFlightCache.listSeatNormal = [];
    this._flightService.itemFlightCache.listReturnSeatNormal = [];
    this._flightService.itemFlightCache.departConditionInfo = null;
    this._flightService.itemFlightCache.returnConditionInfo = null;
    this._flightService.itemFlightCache.departSeatChoiceAmout = 0;
    this._flightService.itemFlightCache.returnSeatChoiceAmout = 0;
    this._flightService.itemFlightCache.isnewmodelseat = false;
    this._flightService.itemFlightCache.isnewmodelreturnseat = false;
    this._flightService.itemFlightCache.DICHUNGParam = null;
    this._flightService.itemFlightCache.departDCPlace=null;
    this._flightService.itemFlightCache.returnDCPlace=null;
    this._flightService.itemFlightCache.isblocktextDepart=false;
    this._flightService.itemFlightCache.isblocktextReturn=false;
    this._flightService.itemFlightCache.promotionCode="";
    this._flightService.itemFlightCache.discount=0;
    this._flightService.itemFlightCache.hasvoucher = false;
  }

  async showAlertRefreshPrice(msg){
    var se = this;
    let alert = await this.alertCtrl.create({
      message: msg,
      header: 'Giá đã được cập nhật',
      cssClass: "cls-alert-refreshPrice",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          se.zone.run(()=>{
            se.resetValue();
          })
          se.loadFlightData(se._flightService.objSearch, true);
          clearInterval(se.intervalFlightTicket);
          if(se.actionsheetCtrl){
            se.actionsheetCtrl.dismiss();
          }
          if(se.modalCtrl){
            se.modalCtrl.dismiss();
          }
          if(se.pickerCtrl){
            se.pickerCtrl.dismiss();
          }
          se.navCtrl.navigateBack('/flightsearchresult');
          alert.dismiss();
        }
      }
    ]
  });
  alert.present();
  }

  selectTicket() :Promise<any>{
    var se = this;
    se.canselect = false;
    return new Promise((resolve, reject) => {
        let obj = se._flightService.objSearch;
        let objdepart = se._flightService.itemFlightCache.departFlight;
        let objreturn = obj.roundTrip ? se._flightService.itemFlightCache.returnFlight : null;
        let flighttype = obj.roundTrip ? 2 : 1;
        let selectFlightURL ="";
        if(obj.roundTrip){
          selectFlightURL = C.urls.baseUrl.urlFlight +'gate/apiv1/InitBooking?token=Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09&from='+ obj.departCode +'&to='+obj.arrivalCode+'&departdate='+ obj.departDate +'&returndate='+ obj.returnDate +'&adult='+ obj.adult+'&child='+ obj.child+'&infant='+ obj.infant+'&flighttype='+flighttype;
          selectFlightURL +='&departFlightId='+objdepart.id+'&returnFlightId='+objreturn.id+'&departTicketType='+objdepart.ticketType+'&returnTicketType=' +objreturn.ticketType+'&Source=6&memberId=' +se.jti;
        }else{
          selectFlightURL = C.urls.baseUrl.urlFlight +'gate/apiv1/InitBooking?token=Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09&from='+ obj.departCode +'&to='+obj.arrivalCode+'&departdate='+ obj.departDate +'&returndate='+ obj.returnDate +'&adult='+ obj.adult+'&child='+ obj.child+'&infant='+ obj.infant+'&flighttype='+flighttype;
          selectFlightURL +='&departFlightId='+objdepart.id+"&returnFlightId=''&departTicketType="+objdepart.ticketType+"&returnTicketType=''"+'&Source=6&memberId=' +se.jti;
        }
         

        var options = {
          method: 'POST',
          url: selectFlightURL,
          timeout: 180000, maxAttempts: 5, retryDelay: 20000,
          headers: {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
          }
        };
        request(options, function (error, response, body) {
          let objError = {
            page: "flightsearchresult",
            func: "selectTicket",
            message: response.statusMessage,
            content: response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
          if (error) {
            error.page = "flightsearchresult";
            error.func = "selectTicket";
            error.param = JSON.stringify(options);
            C.writeErrorLog(objError,response);
          }
          if (response.statusCode == 200) {
            let jsondata = JSON.parse(body);
            if(jsondata.error){
                resolve(false);
            }else{
                resolve(jsondata);
            }
            
          }
        })
    })
    
  }

  clearFilter(){
    this._flightService.objectFilter = {};
    this._flightService.objectFilter.departTimeRange = [];
    this._flightService.objectFilter.returnTimeRange = [];
    this._flightService.objectFilter.airlineSelected = [];
    this._flightService.objectFilter.classSelected = [];
    this._flightService.objectFilter.stopSelected = [];
    this._flightService.objectFilter.facilitySelected = [];
    this._flightService.objectFilter.minprice = 0;
    this._flightService.objectFilter.maxprice = 15000000;

    this._flightService.objectFilterReturn = {};
    this._flightService.objectFilterReturn.departTimeRangeReturn = [];
    this._flightService.objectFilterReturn.returnTimeRangeReturn = [];
    this._flightService.objectFilterReturn.airlineSelectedReturn = [];
    this._flightService.objectFilterReturn.classSelectedReturn = [];
    this._flightService.objectFilterReturn.stopSelectedReturn = [];
    this._flightService.objectFilterReturn.facilitySelectedReturn = [];
    this._flightService.objectFilterReturn.minpriceReturn = 0;
    this._flightService.objectFilterReturn.maxpriceReturn = 15000000;
  }

  clearSearchFilter(){
    this._flightService.objectFilter = {};
    this._flightService.objectFilter.departTimeRange = [];
    this._flightService.objectFilter.returnTimeRange = [];
    this._flightService.objectFilter.airlineSelected = [];
    this._flightService.objectFilter.classSelected = [];
    this._flightService.objectFilter.stopSelected = [];
    this._flightService.objectFilter.facilitySelected = [];
    this._flightService.objectFilter.minprice = 0;
    this._flightService.objectFilter.maxprice = 15000000;

    this._flightService.objectFilterReturn = {};
    this._flightService.objectFilterReturn.departTimeRangeReturn = [];
    this._flightService.objectFilterReturn.returnTimeRangeReturn = [];
    this._flightService.objectFilterReturn.airlineSelectedReturn = [];
    this._flightService.objectFilterReturn.classSelectedReturn = [];
    this._flightService.objectFilterReturn.stopSelectedReturn = [];
    this._flightService.objectFilterReturn.facilitySelectedReturn = [];
    this._flightService.objectFilterReturn.minpriceReturn = 0;
    this._flightService.objectFilterReturn.maxpriceReturn = 15000000;

    if(this.step == 2){
      let listdepart = this._flightService.listAllFlightDepart;
      this.bestpricedepart = [...listdepart].splice(0,3);
      this.otherpricedepart = [...listdepart].splice(3,listdepart.length);
      if(this.enableFlightFilter){
        this.listDepartFilter = [...listdepart];
      }
      this._flightService.itemFlightFilterChange.emit(0);
    }else{
      let listreturn = this._flightService.listAllFlightReturn;
      this.bestpricereturn = [...listreturn].splice(0,3);
      this.otherpricereturn = [...listreturn].splice(3,listreturn.length);
      if(this.enableFlightFilterReturn){
        this.listReturnFilter = [...listreturn];
      }
      this._flightService.itemFlightFilterChangeReturn.emit(0);
      
    }
    if(this.sortairline && !this.buttoniVIVUSelected){
      this.excuteSort();
    }
    this.storage.remove('flightfilterobject');
  }

  checkLoadCacheData(obj, hascache): Promise<any>{
    var se = this;
    se.stoprequest = true;
    return new Promise((resolve, reject) => {
      let objjson = 
      {
        "requestFrom": {
          "fromPlace": obj.departCode,
          "toPlace": obj.arrivalCode,
          "departDate": moment(new Date(moment(obj.departDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "returnDate": moment(new Date(moment(obj.departDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "adult": obj.adult,
          "child": obj.child,
          "infant": obj.infant ? obj.infant : 0,
          "timeIndayRecomment": obj.timeDepartPriority ? obj.timeDepartPriority : "09:00",
          "version": "2.0",
          "roundTrip": obj.roundTrip
        },
        "requestTo": {
          "fromPlace": obj.arrivalCode,
          "toPlace": obj.departCode,
          "departDate": moment(new Date(moment(obj.returnDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "returnDate": moment(new Date(moment(obj.returnDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "adult": obj.adult,
          "child": obj.child,
          "infant": obj.infant ? obj.infant : 0,
          "timeIndayRecomment": obj.timeReturnPriority ? obj.timeReturnPriority : "15:00",
          "version": "2.0",
          "roundTrip": obj.roundTrip
        },
        "roundTrip": obj.roundTrip,
        "noCache": true
        //"noCache": se._flightService.bookingSuccess ? true : (hascache ? hascache : false)
      }
      
      var options = {
        'method': 'POST',
        'url': C.urls.baseUrl.urlFlight +'gate/apiv1/GetSessionFlight',
        //'url': 'https://55786b74.ngrok.io/gate/apiv1/GetSessionFlight',
        'headers': {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8'
          },
        body: JSON.stringify(objjson)
      
      };
      request(options, function (error, response, body) { 
        if (error) throw new Error(error);
        if(body){
          //console.log(body);
          resolve(JSON.parse(body));
        }
      });

    })
  }

  loadFlightCacheDataByAirline(obj,type){
    var se = this;
    if(type == "depart"){
      se.allowSearch = false;
    }else{
      se.allowSearchReturn = false;
    }
    let urlfindflightincache = type == "depart" ? C.urls.baseUrl.urlFlight + "gate/apiv1/GetFlightDepart" : C.urls.baseUrl.urlFlight + "gate/apiv1/GetFlightReturn";
    //let urlfindflightincache = type == "depart" ? "http://localhost:30304/gate/apiv1/GetFlightDepart" : "http://localhost:30304/gate/apiv1/GetFlightReturn";
    let objbody = {
          "fromPlace": type =='depart' ?  obj.departCode : obj.arrivalCode,
          "toPlace": type =='depart' ? obj.arrivalCode : obj.departCode,
          "departDate": type =='depart' ? moment(new Date(moment(obj.departDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS") : moment(new Date(moment(obj.returnDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "returnDate": type =='depart' ? moment(new Date(moment(obj.departDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS") : moment(new Date(moment(obj.returnDate).format("YYYY-MM-DD"))).format("YYYY-MM-DDTHH:mm:ss.SSS"),
          "adult": obj.adult,
          "child": obj.child,
          "infant": obj.infant ? obj.infant : 0,
          "sources": obj.source,
          "timeIndayRecomment": type == "depart" ? (obj.timeDepartPriority ? obj.timeDepartPriority : "09:00") : obj.timeReturnPriority ? obj.timeReturnPriority : "15:00",
          "version": "2.0",
          "roundTrip": obj.roundTrip
    };

      var options = {
        method: "POST",
        url: urlfindflightincache,
        body: JSON.stringify(objbody),
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8'
        }
      }

      request(options, function (error, response, body) {
        let objError = {
                  page: "flightsearchresult",
                  func: "findflightincache",
                  message: response.statusMessage,
                  content: response.body,
                  type: "warning",
                  param: JSON.stringify(options)
            };
          if (error) {
            error.page = "flightsearchresult";
            error.func = "findflightincache";
            error.param = JSON.stringify(options);
            C.writeErrorLog(objError,response);
          }
          else{
            let result = JSON.parse(body);
            if(type == "depart"){
              se.allowSearch = true;
            }else{
              se.allowSearchReturn = true;
            }
            if(result){
              //console.log(result.sources);
              if(result.data && result.data.length >0){
                result.data.forEach(element => {
                  se.loadmultidata(element.flights, type);
                  se.loadConditions(element.conditions, type);
                });
                
              }
             
              if (!result.stop && !se.stoprequest && type=='depart' && se.allowSearch) {
              
                obj.source = result.sources;
                setTimeout(()=>{
                  se.zone.run(()=>{
                    obj.source = result.sources;
                  })
                  se.loadFlightCacheDataByAirline(obj, 'depart');
                },1000)
                obj.countretry++;
              }
  
              else if (!result.stop && !se.stoprequest && type=='return' && se.allowSearchReturn) {
                obj.source = result.sources;
                setTimeout(()=>{
                  se.zone.run(()=>{
                    obj.source = result.sources;
                  })
                  se.loadFlightCacheDataByAirline(obj, 'return');
                },1000)
                obj.countretry++;
              }
            }
          }
          
          
        })

  }

  loadConditions(conditions, type){
    var se = this;
    
    if(type == 'depart'){
        if(se.listDepartConditions && se.listDepartConditions.length >0){
            se.listDepartConditions = [...se.listDepartConditions,...conditions];
        }else{
          se.listDepartConditions = [...conditions];
        }
    }else{
      if(se.listReturnConditions && se.listReturnConditions.length >0){
        se.listReturnConditions = [...se.listReturnConditions,...conditions];
      }else{
        se.listReturnConditions = [...conditions];
      }
    }
  }
  

  loadFlightData(obj, hascache){
    var se = this;
    setTimeout(() => {
      se.zone.run(()=>{
          se.progressbarloading += 0.05;
          se.progressbarbuffer += 0.05;
      })
      
    }, 500);

    se.intervalProgressbar = setInterval(() => {
      se.zone.run(()=>{
        se.progressbarloading += 0.02;
        se.progressbarbuffer += 0.02;
      })
    }, 1000)

    setTimeout(()=>{
      this.stoprequest = true;
      this.loadpricedone = true;
    }, 50 * 1000);

    se.checkLoadCacheData(obj,hascache).then(data => {
      if(data){
        obj.countretry =0;
        obj.source = data;
        se.listDepartConditions = [];
        se.listReturnConditions = [];
        se.stoprequest = false;
          se.loadFlightCacheDataByAirline({...obj}, 'depart');
          setTimeout(()=>{
            se.loadFlightCacheDataByAirline({...obj}, 'return');
          },1000)
          
      }
    })

    //clear cache cityhotel
    se._flightService.itemFlightCache.itemsFlightCityHotel = [];
    se._flightService.itemFlightCache.HotelCityMealtypeSelected = null;
    se._flightService.itemFlightCache.objHotelCitySelected = null;
  }

  loadFlightDataSameCity(obj, objsamecity){
    var se = this;
    se.count =0;
    objsamecity.Items.forEach(element => {
      se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlMobile + "/get-flight-for-olivia?apiToken=3b760e5dcf038878925b5613c32615ea3&departDate=" + moment(obj.departDate).format("YYYY-MM-DD") + '&returnDate=' + moment(obj.returnDate).format("YYYY-MM-DD") + '&departCode=' + (obj.itemDepartSameCity ? element.Code : obj.departCode) + '&arrivalCode=' + (obj.itemReturnSameCity ? element.Code: obj.arrivalCode) + '&adult=' + obj.adult + '&child=' + obj.child + '&infant=' + obj.infant + '&FlagInt=false',
            timeout: 180000, maxAttempts: 5, retryDelay: 20000,
            headers: {
              apiToken: '3b760e5dcf038878925b5613c32615ea3',
            }
          };
          request(options, function (error, response, body) {
            //se.loadpricedone = true;
            let objError = {
              page: "flightsearchresult",
              func: "getdata",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            if (error) {
              error.page = "flightsearchresult";
              error.func = "loaddata";
              error.param = JSON.stringify(options);
              C.writeErrorLog(objError,response);
            }
            if (response.statusCode == 200) {
              let jsondata = JSON.parse(body);
              // se.storage.set('listflight_' + obj.departDate + '_' + obj.returnDate + '_' + obj.departCode + '_' + obj.arrivalCode + '_' + obj.adult + '_' + obj.child + '_' + obj.infant, jsondata);
              // se.loadcachedata(jsondata);

             // se.loadmultidata(jsondata);
             
            }
          })
        }
      })
      
    });
    
  }

  loadmultidata(data, type){
    var se = this;
    let jsondata = data;
    //se.loadpricedone = true;
    se.zone.run(() => {
      se.count++;
      if(type == 'depart'){
          if(!se.listDepart || (se.listDepart && se.listDepart.length == 0) ){
            se.listDepart = jsondata;
            //se.listDepartNoFilter = jsondata;
          }
          else{
            if(se.listDepart && se.listDepart.length >0){
              se.listDepart = [...se.listDepart,...jsondata];
              //se.listDepartNoFilter = [...se.listDepart,...jsondata];
            }
          }
      }

      if(type == 'return'){
        if(!se.listReturn || ( se.listReturn && se.listReturn.length == 0) ){
          se.listReturn = jsondata;
          //se.listReturnNoFilter = jsondata;
        }
        else{
          if(se.listReturn && se.listReturn.length >0){
            se.listReturn = [...se.listReturn,...jsondata];
            //se.listReturnNoFilter = [...se.listReturn,...jsondata];
          }
        }
    }
  

      if(se.listDepart && se.listDepart.length >0){
        se.listDepart.forEach(element => {
          let priceFlightAdult = 0;
          let priceFlightChild = 0;
          let priceFlightInfant = 0;
          
          element.timeDisplay = moment(element.departTime).format("HH:mm") + " - " + moment(element.landingTime).format("HH:mm");
          let hours:any = Math.floor(element.flightDuration/60);
          let minutes:any = element.flightDuration*1 - (hours*60);
          if(hours < 10){
            hours = hours != 0?  "0"+hours : "0";
          }
          if(minutes < 10){
            minutes = "0"+minutes;
          }
          element.departTimeDisplay = moment(element.departTime).format("HH:mm");
          element.landingTimeDisplay = moment(element.landingTime).format("HH:mm");
          element.flightTimeDisplay = hours+"h"+minutes;
          element.flightTimeDetailDisplay = hours+"h"+minutes+"m";
          if(element.details[0].from.length > 3){
            element.from = element.details[0].from.split(',')[1].trim();
          }else{
            element.from = element.details[0].from;
          }
          if(element.details[0].to.length > 3){
            element.to = element.details[0].to.split(',')[1].trim();
          }else{
            element.to = element.details[0].to;
          }
         

          element.priceSummaries.forEach(e => {
            if (e.passengerType == 0) {
              priceFlightAdult += e.price;
            }
            if (e.passengerType == 1) {
              priceFlightChild += e.price;
            }
            if (e.passengerType == 2) {
              priceFlightInfant += e.price;
            }
          });
          //check hãng bay trong list
          element.priceorder = element.priceAvg;
          if(element.airlineCode.indexOf("VietnamAirlines") != -1){
            //element.priceorder = element.totalPrice * 0.75;
              if(se.listDepartAirlines.length ==0 || !se.gf.checkExistsItemInArray(se.listDepartAirlines, "VietnamAirlines","filtername")){
                se.listDepartAirlines.push("VietnamAirlines");
              }
          }else if(element.airlineCode.indexOf("BambooAirways") != -1 ){
            //element.priceorder = element.totalPrice * 0.8;
              if(se.listDepartAirlines.length ==0 || !se.gf.checkExistsItemInArray(se.listDepartAirlines, "BambooAirways","filtername")){
                se.listDepartAirlines.push("BambooAirways");
              }
          }
          else if(element.airlineCode.indexOf("VietJetAir") != -1 ){
            //element.priceorder = element.totalPrice;
            if(se.listDepartAirlines.length ==0 || !se.gf.checkExistsItemInArray(se.listDepartAirlines, "VietJetAir","filtername")){
              se.listDepartAirlines.push("VietJetAir");
            }
          }
          else if(element.airlineCode.indexOf("JetStar") != -1 ){
            //element.priceorder = element.totalPrice;
            if(se.listDepartAirlines.length ==0 || !se.gf.checkExistsItemInArray(se.listDepartAirlines, "JetStar","filtername")){
                  se.listDepartAirlines.push("JetStar");
                }
            }
            //check khoảng thời gian cất cánh
            let time = moment(element.departTime).format("HH:mm:ss");
            let timerange = time ? se.gf.convertStringToNumber(time) : -1;
           
                if(timerange >= 0 && timerange <= 60000 && se.listDepartTimeRange.indexOf(1) == -1){
                  se.listDepartTimeRange.push(1);
                }
                else if(timerange >= 60000 && timerange <= 120000 && se.listDepartTimeRange.indexOf(2) == -1){
                  se.listDepartTimeRange.push(2);
                }
                else if(timerange >= 120000 && timerange <= 180000 && se.listDepartTimeRange.indexOf(3) == -1){
                  se.listDepartTimeRange.push(3);
                }
                else if(timerange >= 180000 && timerange <= 240000 && se.listDepartTimeRange.indexOf(4) == -1){
                  se.listDepartTimeRange.push(4);
                }

                let timeReturn = moment(element.landingTime).format("HH:mm:ss");
                let timeRangeReturn = time ? se.gf.convertStringToNumber(timeReturn) : -1;
                if(timeRangeReturn >= 0 && timeRangeReturn <= 60000 && se.listDepartLandingTimeRange.indexOf(1) == -1){
                  se.listDepartLandingTimeRange.push(1);
                }
                else if(timeRangeReturn >= 60000 && timeRangeReturn <= 120000 && se.listDepartLandingTimeRange.indexOf(2) == -1){
                  se.listDepartLandingTimeRange.push(2);
                }
                else if(timeRangeReturn >= 120000 && timeRangeReturn <= 180000 && se.listDepartLandingTimeRange.indexOf(3) == -1){
                  se.listDepartLandingTimeRange.push(3);
                }
                else if(timeRangeReturn >= 180000 && timeRangeReturn <= 240000 && se.listDepartLandingTimeRange.indexOf(4) == -1){
                  se.listDepartLandingTimeRange.push(4);
                }
                //check hạng vé
                // if(element.ticketClass == se.ecoTicketClassName && se.listDepartTicketClass.indexOf(1) == -1){
                //   se.listDepartTicketClass.push(1);
                // }
                // else if(element.ticketClass == se.bussinessTicketClassName && se.listDepartTicketClass.indexOf(2) == -1){
                //   se.listDepartTicketClass.push(2);
                // }
                // else if(element.ticketClass == se.flexTicketClassName && se.listDepartTicketClass.indexOf(3) == -1){
                //   se.listDepartTicketClass.push(3);
                // }
                // else if(element.ticketClass == se.promoTicketClassName && se.listDepartTicketClass.indexOf(4) == -1){
                //   se.listDepartTicketClass.push(4);
                // }
                if( ( (element.ticketClass == se.ecoTicketClassName  && element.airlineCode != 'VietJetAir') || (element.airlineCode == 'VietJetAir' && element.ticketType == "Eco" && se.VJSaverTicket.indexOf(element.details[0].ticketType) == -1 ) ) && se.listDepartTicketClass.indexOf(1) == -1){
                  se.listDepartTicketClass.push(1);
                }
                else if(element.ticketClass == se.bussinessTicketClassName && se.listDepartTicketClass.indexOf(2) == -1){
                  se.listDepartTicketClass.push(2);
                }
                else if(( (element.ticketClass == se.flexTicketClassName && element.airlineCode != 'VietJetAir') || (element.airlineCode != 'VietJetAir' && element.ticketType == se.flexTicketClassName && se.VJSaverTicket.indexOf(element.details[0].ticketType) == -1) ) && se.listDepartTicketClass.indexOf(3) == -1){
                  se.listDepartTicketClass.push(3);
                }
                else if((element.ticketClass == se.promoTicketClassName || (element.airlineCode== 'VietJetAir' && element.ticketType == "Eco" && se.VJSaverTicket.indexOf(element.details[0].ticketType) != -1) ) && se.listDepartTicketClass.indexOf(4) == -1){
                  se.listDepartTicketClass.push(4);
                }
                //check điểm dừng
                if(element.stops == 0 && se.listDepartStops.indexOf(1) == -1){
                  se.listDepartStops.push(1);
                }
                else if(element.stops == 1 && se.listDepartStops.indexOf(2) == -1){
                  se.listDepartStops.push(2);
                }
                else if(element.stops == 2 && se.listDepartStops.indexOf(3) == -1){
                  se.listDepartStops.push(3);
                }
                else if(element.stops == 3 && se.listDepartStops.indexOf(4) == -1){
                  se.listDepartStops.push(4);
                }
          
                //check tiện ích
                if(element.ticketCondition && element.ticketCondition.isTicketRefund && se.listDepartFacility.indexOf(1) == -1){
                  se.listDepartFacility.push(1);
                }
                else if(element.promotions && element.promotions.length >0 && se.listDepartFacility.indexOf(2) == -1){
                  se.listDepartFacility.push(2);
                }
                else if(element.ticketCondition &&  element.ticketCondition.luggageSigned && se.listDepartFacility.indexOf(3) == -1 ){
                  se.listDepartFacility.push(3);
                }
                else if(element.ticketCondition && element.ticketCondition.priorityCI && se.listDepartFacility.indexOf(4) == -1){
                  se.listDepartFacility.push(4);
                }
          
          
          element.priceAdult = priceFlightAdult;
          element.priceChild = priceFlightChild;
          element.priceInfant = priceFlightInfant;

          element.priceDisplay = se.gf.convertNumberToString(element.totalPrice)+ " đ";
          if(!element.priceBeforeDiscount && element.totalDiscount){
            element.priceBeforeDiscount = element.totalPrice + element.totalDiscount;
            element.priceBeforeDiscount = se.gf.convertNumberToString(element.priceBeforeDiscount);
          }

          let ar_time = element.departTime.toString().split('T')[1];
          let Hour = ar_time.toString().split(':')[0];
          let Minute = ar_time.toString().split(':')[1];
          let kq = Hour * 60 + Number(Minute);
          element.rangeTime = kq;

          if(element.operatedBy && element.urlLogo.indexOf('content/img') ==-1 ){
            element.urlLogo = "https://www.ivivu.com/ve-may-bay/content/img/brands/w100/" +element.urlLogo;
          }
        });

            se._flightService.itemFlightCache.listDepartAirlines = se.listDepartAirlines;
            se._flightService.itemFlightCache.listDepartTimeRange = se.listDepartTimeRange;
            se._flightService.itemFlightCache.listDepartLandingTimeRange = se.listDepartLandingTimeRange;
            se._flightService.itemFlightCache.listDepartTicketClass = se.listDepartTicketClass;
            se._flightService.itemFlightCache.listDepartStops = se.listDepartStops;
            se._flightService.itemFlightCache.listDepartFacility = se.listDepartFacility;
            
          se.sortFlights('priceorder', se.listDepart);
          //se.checkvalueDepart(se.listDepart);
     
      }
      
      if(se.listReturn && se.listReturn.length >0){
        se.listReturn.forEach(element => {

          element.timeDisplay = moment(element.departTime).format("HH:mm") + " - " + moment(element.landingTime).format("HH:mm");
          let hours:any = Math.floor(element.flightDuration/60);
          let minutes:any = element.flightDuration*1 - (hours*60);
          if(hours < 10){
            hours = hours != 0?  "0"+hours : "0";
          }
          if(minutes < 10){
            minutes = "0"+minutes;
          }

          element.departTimeDisplay = moment(element.departTime).format("HH:mm");
          element.landingTimeDisplay = moment(element.landingTime).format("HH:mm");
          element.flightTimeDisplay = hours+"h"+minutes;
          element.flightTimeDetailDisplay = hours+"h"+minutes+"m";
          if(element.details[0].from.length > 3){
            element.from = element.details[0].from.split(',')[1].trim();
          }else{
            element.from = element.details[0].from;
          }

          if(element.details[0].to.length > 3){
            element.to = element.details[0].to.split(',')[1].trim();
          }else{
            element.to = element.details[0].to;
          }

          let priceFlightAdult = 0;
          let priceFlightChild = 0;
          let priceFlightInfant = 0;

          element.priceSummaries.forEach(e => {
            if (e.passengerType == 0) {
              priceFlightAdult += e.price;
            }
            if (e.passengerType == 1) {
              priceFlightChild += e.price;
            }
            if (e.passengerType == 2) {
              priceFlightInfant += e.price;
            }
          });
          //25/12/2020: Sửa lại lấy đúng giá giảm (sau khi trừ giá bán default)
          element.priceorder = element.priceAvg;
          if(element.airlineCode.indexOf("VietnamAirlines") != -1){
            //element.priceorder = element.totalPrice * 0.75;
            if(se.listReturnAirlinesReturn.length ==0 || !se.gf.checkExistsItemInArray(se.listReturnAirlinesReturn, "VietnamAirlines","filtername")){
              se.listReturnAirlinesReturn.push("VietnamAirlines");
            }
          }else if(element.airlineCode.indexOf("BambooAirways") != -1 ){
            //element.priceorder = element.totalPrice * 0.8;
            if(se.listReturnAirlinesReturn.length ==0 || !se.gf.checkExistsItemInArray(se.listReturnAirlinesReturn, "BambooAirways","filtername")){
              se.listReturnAirlinesReturn.push("BambooAirways");
            }
          }
          else if(element.airlineCode.indexOf("VietJetAir") != -1 ){
            //element.priceorder = element.totalPrice;
            if(se.listReturnAirlinesReturn.length ==0 || !se.gf.checkExistsItemInArray(se.listReturnAirlinesReturn, "VietJetAir","filtername")){
                  se.listReturnAirlinesReturn.push("VietJetAir");
              }
          }
          else if(element.airlineCode.indexOf("JetStar") != -1 ){
            //element.priceorder = element.totalPrice;
            if(se.listReturnAirlinesReturn.length ==0 || !se.gf.checkExistsItemInArray(se.listReturnAirlinesReturn, "JetStar","filtername")){
                se.listReturnAirlinesReturn.push("JetStar");
            }
          }

         //check khoảng thời gian cất cánh
         let time = moment(element.departTime).format("HH:mm:ss");
         let timerange = time ? se.gf.convertStringToNumber(time) : -1;

        if(timerange >= 0 && timerange <= 60000 && se.listReturnTimeRangeReturn.indexOf(1) == -1){
          se.listReturnTimeRangeReturn.push(1);
        }
        else if(timerange >= 60000 && timerange <= 120000 && se.listReturnTimeRangeReturn.indexOf(2) == -1){
          se.listReturnTimeRangeReturn.push(2);
        }
        else if(timerange >= 120000 && timerange <= 180000 && se.listReturnTimeRangeReturn.indexOf(3) == -1){
          se.listReturnTimeRangeReturn.push(3);
        }
        else if(timerange >= 180000 && timerange <= 240000 && se.listReturnTimeRangeReturn.indexOf(4) == -1){
          se.listReturnTimeRangeReturn.push(4);
        }

        let timeReturn = moment(element.landingTime).format("HH:mm:ss");
        let timeRangeReturn = time ? se.gf.convertStringToNumber(timeReturn) : -1;
        if(timeRangeReturn >= 0 && timeRangeReturn <= 60000 && se.listReturnLandingTimeRangeReturn.indexOf(1) == -1){
          se.listReturnLandingTimeRangeReturn.push(1);
        }
        else if(timeRangeReturn >= 60000 && timeRangeReturn <= 120000 && se.listReturnLandingTimeRangeReturn.indexOf(2) == -1){
          se.listReturnLandingTimeRangeReturn.push(2);
        }
        else if(timeRangeReturn >= 120000 && timeRangeReturn <= 180000 && se.listReturnLandingTimeRangeReturn.indexOf(3) == -1){
          se.listReturnLandingTimeRangeReturn.push(3);
        }
        else if(timeRangeReturn >= 180000 && timeRangeReturn <= 240000 && se.listReturnLandingTimeRangeReturn.indexOf(4) == -1){
          se.listReturnLandingTimeRangeReturn.push(4);
        }
        //check hạng vé
        // if(element.ticketClass == se.ecoTicketClassName && se.listReturnTicketClassReturn.indexOf(1) == -1){
        //   se.listReturnTicketClassReturn.push(1);
        // }
        // else if(element.ticketClass == se.bussinessTicketClassName && se.listReturnTicketClassReturn.indexOf(2) == -1){
        //   se.listReturnTicketClassReturn.push(2);
        // }
        // else if(element.ticketClass == se.flexTicketClassName && se.listReturnTicketClassReturn.indexOf(3) == -1){
        //   se.listReturnTicketClassReturn.push(3);
        // }
        // else if(element.ticketClass == se.promoTicketClassName && se.listReturnTicketClassReturn.indexOf(3) == -1){
        //   se.listReturnTicketClassReturn.push(4);
        // }
        if(( (element.ticketClass == se.ecoTicketClassName  && element.airlineCode != 'VietJetAir') || (element.airlineCode == 'VietJetAir' && element.ticketType == "Eco" && se.VJSaverTicket.indexOf(element.details[0].ticketType) == -1 ) ) && se.listReturnTicketClassReturn.indexOf(1) == -1){
          se.listReturnTicketClassReturn.push(1);
        }
        else if(element.ticketClass == se.bussinessTicketClassName && se.listReturnTicketClassReturn.indexOf(2) == -1){
          se.listReturnTicketClassReturn.push(2);
        }
        else if(( (element.ticketClass == se.flexTicketClassName && element.airlineCode != 'VietJetAir') || (element.airlineCode != 'VietJetAir' && element.ticketClass == se.flexTicketClassName && se.VJSaverTicket.indexOf(element.details[0].ticketType) == -1) ) && se.listReturnTicketClassReturn.indexOf(3) == -1){
          se.listReturnTicketClassReturn.push(3);
        }
        else if( element.ticketClass == se.promoTicketClassName || (element.airlineCode== 'VietJetAir' && element.ticketType == "Eco" && se.VJSaverTicket.indexOf(element.details[0].ticketType) != -1) && se.listReturnTicketClassReturn.indexOf(4) == -1 ){
          se.listReturnTicketClassReturn.push(4);
        }
        //check điểm dừng
        if(element.stops == 0 && se.listReturnStopsReturn.indexOf(1) == -1){
          se.listReturnStopsReturn.push(1);
        }
        else if(element.stops == 1 && se.listReturnStopsReturn.indexOf(2) == -1){
          se.listReturnStopsReturn.push(2);
        }
        else if(element.stops == 2 && se.listReturnStopsReturn.indexOf(3) == -1){
          se.listReturnStopsReturn.push(3);
        }
        else if(element.stops == 3 && se.listReturnStopsReturn.indexOf(4) == -1){
          se.listReturnStopsReturn.push(4);
        }

        //check tiện ích
        if(element.ticketCondition && element.ticketCondition.isTicketRefund && se.listReturnFacility.indexOf(1) == -1){
          se.listReturnFacility.push(1);
        }
        else if(element.promotions && element.promotions.length >0 && se.listReturnFacility.indexOf(2) == -1){
          se.listReturnFacility.push(2);
        }
        else if(element.ticketCondition && element.ticketCondition.luggageSigned && se.listReturnFacility.indexOf(3) == -1 ){
          se.listReturnFacility.push(3);
        }
        else if(element.ticketCondition && element.ticketCondition.priorityCI && se.listReturnFacility.indexOf(4) == -1){
          se.listReturnFacility.push(4);
        }
            
          element.priceAdult = priceFlightAdult;
          element.priceChild = priceFlightChild;
          element.priceInfant = priceFlightInfant;

          element.priceDisplay = se.gf.convertNumberToString(element.totalPrice)+ " đ";
          if(!element.priceBeforeDiscount && element.totalDiscount){
            element.priceBeforeDiscount = element.totalPrice + element.totalDiscount;
            element.priceBeforeDiscount = se.gf.convertNumberToString(element.priceBeforeDiscount);
          }

          let ar_time = element.departTime.toString().split('T')[1];
          let Hour = ar_time.toString().split(':')[0];
          let Minute = ar_time.toString().split(':')[1];
          let kq = Hour * 60 + Number(Minute);
          element.rangeTimeReturn = kq;

          if(element.operatedBy && element.urlLogo.indexOf('content/img') ==-1 ){
            element.urlLogo = "https://www.ivivu.com/ve-may-bay/content/img/brands/w100/" +element.urlLogo;
          }
        });
        
          se._flightService.itemFlightCache.listReturnAirlinesReturn = se.listReturnAirlinesReturn;
          se._flightService.itemFlightCache.listReturnTimeRangeReturn = se.listReturnTimeRangeReturn;
          se._flightService.itemFlightCache.listReturnLandingTimeRangeReturn = se.listReturnLandingTimeRangeReturn;
          se._flightService.itemFlightCache.listReturnTicketClassReturn = se.listReturnTicketClassReturn;
          se._flightService.itemFlightCache.listReturnStopsReturn = se.listReturnStopsReturn;
          se._flightService.itemFlightCache.listReturnFacility = se.listReturnFacility;
          
          se.sortFlights('priceorder', se.listReturn);
          //se.checkReturnList(se.listReturn);
        
      }
      //console.log(se.listDepart);
      if(se.listDepart && se.listDepart.length >0){
        se.listDepartNoFilter = [...se.listDepart];
      }
      
      if(se.listReturn && se.listReturn.length >0){
        se.listReturnNoFilter = [...se.listReturn];
      }

        if(se._flightService.objectFilter &&
          (se._flightService.objectFilter.minprice*1 != 0
          || se._flightService.objectFilter.maxprice*1 != 15000000
          || se._flightService.objectFilter.departTimeRange.length >0
          || se._flightService.objectFilter.returnTimeRange.length >0
          || se._flightService.objectFilter.airlineSelected.length >0
          || se._flightService.objectFilter.classSelected.length >0
          || se._flightService.objectFilter.stopSelected.length >0
          || se._flightService.objectFilter.facilitySelected.length >0
          )){
          
          se.filterItem().then(()=>{

              setTimeout(()=>{
                if((se.listDepart && se.listDepart.length == 0) || (se.listReturn && se.listReturn.length == 0)){
      
                }else{
                  // if(se.listDepartFilter && se.listDepartFilter.length > 0) {
                  //   se.bestpricedepart = [...se.listDepartFilter].splice(0,3);
                  //   se.otherpricedepart = [...se.listDepartFilter].splice(3,se.listDepartFilter.length);
                  // }
                
                  // if(se.listReturnFilter && se.listReturnFilter.length > 0){
                  //   se.bestpricereturn = [...se.listReturnFilter].splice(0,3);
                  //   se.otherpricereturn = [...se.listReturnFilter].splice(3,se.listReturnFilter.length);
                  // }
                  if(se.listDepartFilter && se.listDepartFilter.length > 0) {
                    se.bestpricedepart = se.listDepartFilter.length >=2 ? [...se.listDepartFilter].splice(0,2) : [...se.listDepartFilter];
                    if(se.listDepartFilter.length > 2){
                      let listotherpricedepart = [...se.listDepartFilter].splice(2,se.listDepartFilter.length);
                      //listotherpricedepart = se.sortFlightsByPrice(listotherpricedepart);
                      se.sortFlightsByPrice(listotherpricedepart).then((data)=>{
                        se.bestpricedepart = [...se.bestpricedepart, data.splice(0,1)[0]];
                        let listotherpricedepartmustreorder = [...data];
                        se.sortFlights("priceorder", listotherpricedepartmustreorder);
                        se.otherpricedepart = [...listotherpricedepartmustreorder];
                      })
                    }else{
                      se.otherpricedepart = [];
                    }
                  }
                
                  if(se.listReturnFilter && se.listReturnFilter.length > 0){
                    se.bestpricereturn = se.listReturnFilter.length >=2 ? [...se.listReturnFilter].splice(0,2) : [...se.listReturnFilter];
                    if(se.listReturnFilter.length >2){
                      let listotherpricereturn = [...se.listReturnFilter].splice(2,se.listReturnFilter.length);
                      //listotherpricereturn = se.sortFlightsByPrice(listotherpricereturn);
                      se.sortFlightsByPrice(listotherpricereturn).then((data)=>{
                        se.bestpricereturn = [...se.bestpricereturn, data.splice(0,1)[0]];
    
                        let listotherpricereturnmustreorder = [...data];
                        se.sortFlights("priceorder", listotherpricereturnmustreorder);
    
                        se.otherpricereturn = [...listotherpricereturnmustreorder];
                      })
                    }else{
                      se.otherpricereturn = [];
                    }
                    
                  }

                  setTimeout(()=>{
                    if(se.listDepartFilter && se.listDepartFilter.length >0)
                    {
                      se.loadpricedone = true;
                    }
                    
                      se.zone.run(()=>{
                        se.progressbarloading = 1;
                        se.progressbarbuffer = 1;
                      })
                      
                  },100)
                    
                }
              },50)
      
            
            if(se.count >=1){
             
              setTimeout(()=>{
              
                // if(se.listDepartFilter && se.listDepartFilter.length > 0) {
                //   se.bestpricedepart = [...se.listDepartFilter].splice(0,3);
                //   se.otherpricedepart = [...se.listDepartFilter].splice(3,se.listDepartFilter.length);
                // }
      
                // if(se.listReturnFilter && se.listReturnFilter.length > 0){
                //   se.bestpricereturn = [...se.listReturnFilter].splice(0,3);
                //   se.otherpricereturn = [...se.listReturnFilter].splice(3,se.listReturnFilter.length);
                // }
                if(se.listDepartFilter && se.listDepartFilter.length > 0) {
                  se.bestpricedepart = se.listDepartFilter.length >=2 ? [...se.listDepartFilter].splice(0,2) : [...se.listDepartFilter];
                  if(se.listDepartFilter.length > 2){
                    let listotherpricedepart = [...se.listDepartFilter].splice(2,se.listDepartFilter.length);
                    //listotherpricedepart = se.sortFlightsByPrice(listotherpricedepart);
                    se.sortFlightsByPrice(listotherpricedepart).then((data)=>{
                      se.bestpricedepart = [...se.bestpricedepart, data.splice(0,1)[0]];
                      let listotherpricedepartmustreorder = [...data];
                      se.sortFlights("priceorder", listotherpricedepartmustreorder);
                      se.otherpricedepart = [...listotherpricedepartmustreorder];
                    })
                  }else{
                    se.otherpricedepart = [];
                  }
                }
              
                if(se.listReturnFilter && se.listReturnFilter.length > 0){
                  se.bestpricereturn = se.listReturnFilter.length >=2 ? [...se.listReturnFilter].splice(0,2) : [...se.listReturnFilter];
                  if(se.listReturnFilter.length >2){
                    let listotherpricereturn = [...se.listReturnFilter].splice(2,se.listReturnFilter.length);
                    //listotherpricereturn = se.sortFlightsByPrice(listotherpricereturn);
                    se.sortFlightsByPrice(listotherpricereturn).then((data)=>{
                      se.bestpricereturn = [...se.bestpricereturn, listotherpricereturn.splice(0,1)[0]];

                      let listotherpricereturnmustreorder = [...listotherpricereturn];
                      se.sortFlights("priceorder", listotherpricereturnmustreorder);

                      se.otherpricereturn = [...listotherpricereturnmustreorder];
                    })
                  }else{
                    se.otherpricereturn = [];
                  }
                  
                }

                if(se.listDepartFilter && se.listDepartFilter.length >0)
                    {
                      se.loadpricedone = true;
                      se.zone.run(()=>{
                        se.progressbarloading = 1;
                        se.progressbarbuffer = 1;
                      })
                    }
              },150)
              
            }

          
          });
        }else{
            
              setTimeout(()=>{
                if((se.listDepart && se.listDepart.length == 0) || (se.listReturn && se.listReturn.length == 0)){
      
                }else{
                //   if(se.listDepart && se.listDepart.length > 0) {
                    
                //     se.bestpricedepart = [...se.listDepart].splice(0,3);
                //     se.otherpricedepart = [...se.listDepart].splice(3,se.listDepart.length);
                  
                //   }
                //  // console.log(se.listReturnFilter);
                //   if(se.listReturn && se.listReturn.length > 0){
                //     se.bestpricereturn = [...se.listReturn].splice(0,3);
                //     se.otherpricereturn = [...se.listReturn].splice(3,se.listReturn.length);
                //   }
                if(se.listDepart && se.listDepart.length > 0) {
                  se.bestpricedepart = se.listDepart.length >=2 ?  [...se.listDepart].splice(0,2) : [...se.listDepart];
                  if(se.listDepart.length > 2){
                    let listotherpricedepart = [...se.listDepart].splice(2,se.listDepart.length);
                    //listotherpricedepart = se.sortFlightsByPrice(listotherpricedepart);
                    se.sortFlightsByPrice(listotherpricedepart).then((data)=>{
                      se.bestpricedepart = [...se.bestpricedepart, data.splice(0,1)[0]];
    
                      let listotherpricedepartmustreorder = [...listotherpricedepart];
                      se.sortFlights("priceorder", listotherpricedepartmustreorder);
    
                      se.otherpricedepart = [...listotherpricedepartmustreorder];
                    })
                  }else{
                    se.otherpricedepart = [];
                  }
                  
                }
              
                if(se.listReturn && se.listReturn.length > 0){
                  se.bestpricereturn = se.listReturn.length >=2 ? [...se.listReturn].splice(0,2) : [...se.listReturn];
                  if(se.listReturn.length > 2){
                    let listotherpricereturn = [...se.listReturn].splice(2,se.listReturn.length);
                    //listotherpricereturn = se.sortFlightsByPrice(listotherpricereturn);
                    se.sortFlightsByPrice(listotherpricereturn).then((data)=>{
                      se.bestpricereturn = [...se.bestpricereturn, data.splice(0,1)[0]];

                      let listotherpricereturnmustreorder = [...data];
                      se.sortFlights("priceorder", listotherpricereturnmustreorder);

                      se.otherpricereturn = [...listotherpricereturnmustreorder];
                    })
                  }else{
                    se.otherpricereturn = []
                  }
                }
                  
                  if(se.listDepart && se.listDepart.length >0)
                  {
                    se.loadpricedone = true;
                  }
                    se.zone.run(()=>{
                      se.progressbarloading = 1;
                      se.progressbarbuffer = 1;
                    })
                }
              }, 50);
         
        if(se.count >=1){
          // se.sortFlightsByPriceOrder(se.listDepart);
          // se.sortFlightsByPriceOrder(se.listReturn);
          
            setTimeout(()=>{
            
              // if(se.listDepart && se.listDepart.length > 0) {
              //   se.bestpricedepart = [...se.listDepart].splice(0,3);
              //   se.otherpricedepart = [...se.listDepart].splice(3,se.listDepart.length);
              // }
    
              // if(se.listReturn && se.listReturn.length > 0){
              //   se.bestpricereturn = [...se.listReturn].splice(0,3);
              //   se.otherpricereturn = [...se.listReturn].splice(3,se.listReturn.length);
              // }

              if(se.listDepart && se.listDepart.length > 0) {
                se.bestpricedepart = se.listDepart.length >=2 ? [...se.listDepart].splice(0,2) : [...se.listDepart];
                let listotherpricedepart = [...se.listDepart].splice(2,se.listDepart.length);
                //listotherpricedepart = se.sortFlightsByPrice(listotherpricedepart);
                se.sortFlightsByPrice(listotherpricedepart).then((data)=>{
                  se.bestpricedepart = [...se.bestpricedepart, data.splice(0,1)[0]];

                  let listotherpricedepartmustreorder = [...data];
                  se.sortFlights("priceorder", listotherpricedepartmustreorder);

                  se.otherpricedepart = [...listotherpricedepartmustreorder];
                })
              }
            
              if(se.listReturn && se.listReturn.length > 0){
                se.bestpricereturn = [...se.listReturn].splice(0,2);

                let listotherpricereturn = se.listReturn.length >=2 ? [...se.listReturn].splice(2,se.listReturn.length) : [...se.listReturn];
                //listotherpricereturn = se.sortFlightsByPrice(listotherpricereturn);
                se.sortFlightsByPrice(listotherpricereturn).then((data)=>{
                  se.bestpricereturn = [...se.bestpricereturn, data.splice(0,1)[0]];

                  let listotherpricereturnmustreorder = [...data];
                  se.sortFlights("priceorder", listotherpricereturnmustreorder);

                  se.otherpricereturn = [...listotherpricereturnmustreorder];
                })
              }
            },150)
            
            if(se.listDepart && se.listDepart.length >0)
                    {
                      se.loadpricedone = true;
                    }
          }
        }
        
     
    })
  }

  sort(property, listsort) {
    var se = this;
    if (listsort && listsort.flights.length > 0) {
      se.zone.run(() => listsort.flights.sort(function (a, b) {
        let direction = -1;
        if (property == "priceorder") {
          if (a[property] * 1 < b[property] * 1) {
            return 1 * direction;
          }
          else if (a[property] * 1 > b[property] * 1) {
            return -1 * direction;
          }
          //chiều đi
          else if (a[property] * 1 == b[property] * 1 && a["rangeTime"] && b["rangeTime"]) {
            if(a["rangeTime"] >= 600 && a["rangeTime"] <=720){
              return 1 * direction;
            }
            else if(b["rangeTime"] >= 600 && b["rangeTime"] <=720){
              return -1 * direction;
            }
            else{
              return 1 * direction;
            }
          }
          //chiều về
          else if (a[property] * 1 == b[property] * 1 && a["rangeTimeReturn"] && b["rangeTimeReturn"]) {
            if(a["rangeTimeReturn"] >= 840 && a["rangeTimeReturn"] <=1020){
              return 1 * direction;
            }
            else if(b["rangeTimeReturn"] >= 840 && b["rangeTimeReturn"] <=1020){
              return -1 * direction;
            }
            else{
              return 1 * direction;
            }
          }
        }
      }));
    }
  };

  sortFlights(property, listsort) {
    var se = this;
    if (listsort && listsort.length > 0) {
      se.zone.run(() => listsort.sort(function (a, b) {
        let direction = -1;
        if (property == "priceorder") {
          if (a[property] * 1 < b[property] * 1) {
            return 1 * direction;
          }
          else if (a[property] * 1 > b[property] * 1) {
            return -1 * direction;
          }
          // //chiều đi
          // else if (a[property] * 1 == b[property] * 1 && a["rangeTime"] && b["rangeTime"]) {
          //   if(a["rangeTime"] >= 600 && a["rangeTime"] <=720){
          //     return 1 * direction;
          //   }
          //   else if(b["rangeTime"] >= 600 && b["rangeTime"] <=720){
          //     return -1 * direction;
          //   }
          //   else{
          //     return 1 * direction;
          //   }
          // }
          // //chiều về
          // else if (a[property] * 1 == b[property] * 1 && a["rangeTimeReturn"] && b["rangeTimeReturn"]) {
          //   if(a["rangeTimeReturn"] >= 840 && a["rangeTimeReturn"] <=1020){
          //     return 1 * direction;
          //   }
          //   else if(b["rangeTimeReturn"] >= 840 && b["rangeTimeReturn"] <=1020){
          //     return -1 * direction;
          //   }
          //   else{
          //     return 1 * direction;
          //   }
          // }
        }
      }));
    }
  };

  sortFlightsByPriceOrder(listsort){
    var se = this;
    if (listsort && listsort.length > 0) {
      se.zone.run(() => listsort.sort(function (a, b) {
        let direction = -1;
            if(a['priceorder'] == b['priceorder']){
              if (a['sortpriceorder'] * 1 < b['sortpriceorder'] * 1) {
                return 1 * direction;
              }
              else if (a['sortpriceorder'] * 1 > b['sortpriceorder'] * 1) {
                return -1 * direction;
              }
            }
        })
      )
    }
  }

  sortFlightsByPrice(listsort) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) =>{
      if (listsort && listsort.length > 0) {
        se.zone.run(() => listsort.sort(function (a, b) {
          let direction = -1;
              if(a['totalPrice'] == b['totalPrice']){
                if (a['sortpriceorder'] * 1 < b['sortpriceorder'] * 1) {
                  return 1 * direction;
                }
                else if (a['sortpriceorder'] * 1 > b['sortpriceorder'] * 1) {
                  return -1 * direction;
                }
              }else{
                return a['totalPrice']*1 - b['totalPrice']*1;
              }
          })
        )
      }
      resolve(listsort);
    })
    
  }

  sortFlightsByTime(listsort, type){
    var se = this;
    let columntime = type == 1 ? 'rangeTime' : 'rangeTimeReturn';
    if (listsort && listsort.length > 0) {
      se.zone.run(() => listsort.sort(function (a, b) {
        let direction = -1;
            if(a['priceorder'] == b['priceorder']){
              if (a[columntime] * 1 < b[columntime] * 1) {
                return 1 * direction;
              }
              else if (a[columntime] * 1 > b[columntime] * 1) {
                return -1 * direction;
              }
            }
        })
      )
    }
  }

  //Hàm check VMB giá thấp nhất trong khung giờ chấp nhận được
  checkvalueDepart(list) {
    if(list && list.length >0){
      var Hour; var Minute; var kq;
      var good = [];
      var medium = [];
      var other = [];
      
        for (let i = 0; i < list.length; i++) {
          let ar_time = list[i].departTime.toString().split('T')[1];
          Hour = ar_time.toString().split(':')[0];
          Minute = ar_time.toString().split(':')[1];
          kq = Hour * 60 + Number(Minute);
          list[i].rangeTime = kq;
  
          if (kq >= 360 && kq <= 840) {//lấy khung giờ ưu tiên 6h - 14h
            // if (kq >= 480 && kq <= 660) {
            //   list[i].sortpriceorder = 1;
            //   good.push(list[i]);
            // }
            // else {
            //   list[i].sortpriceorder = 2;
            //   medium.push(list[i]);
              
            // }
            list[i].sortpriceorder = 1;
            good.push(list[i]);
          }
          else {
            list[i].sortpriceorder = 3;
            other.push(list[i]);
          }
        }
        // if(medium && medium.length >0 && good && good.length >0){
        //   if(good[0].priceorder <= medium[0].priceorder ){
        //     this.departfi =  [...good,...medium,...other];
        //   }else{
        //     if (medium.length > 0) {
        //       this.departfi =  [...medium,...good,...other];
        //     }else{
        //      if(good.length>0)
        //       {
        //         this.departfi =  [...good,...medium,...other];
        //       }
        //       else{
        //         this.departfi =  other;
        //       }
        //     }
        //   }
        // }else {
        //   if (medium.length > 0) {
        //     this.departfi =  [...medium,...good,...other];
        //   }else{
        //    if(good.length>0)
        //     {
        //       this.departfi = [...good,...medium,...other];
        //     }
        //     else{
        //       this.departfi =  [...other];
        //     }
        //   }
        // }
        
        // if(this.departfi.length ==0){
        //   this.departfi =  other;
        // }
        if(good.length>0)
        {
          this.sortFlightsByTime(good,1);
          let otherlist = [...good.splice(3,good.length),...other];
          //this.sortFlightsByTime(otherlist,1);
          this.sortFlights('priceorder', otherlist);
          this.listDepart = [...good.splice(0,3),...otherlist];
        }
        else{
          this.sortFlightsByTime(other,1);
          this.listDepart =  [...other];
        }
        
        if(this.listDepart.length ==0){
          this.listDepart =  other;
        }

    }
    return [...this.listDepart];
  }

  checkReturnList(list){
    if(list && list.length >0){
      var Hour; var Minute; var kq;
      var good = [];
      var medium = [];
      var other = [];
        for (let i = 0; i < list.length; i++) {
          // var dateTime = new Date(list[i].departTime);
          // Hour = moment(dateTime).format("HH");
          // Minute = moment(dateTime).format("mm");
          let ar_time = list[i].departTime.toString().split('T')[1];
          Hour = ar_time.toString().split(':')[0];
          Minute = ar_time.toString().split(':')[1];
          kq = Hour * 60 + Number(Minute);
  
          if (kq >= 600 && kq < 1200) {
            // if (kq >= 840 && kq <= 1020) {
            //   list[i].sortpriceorder = 1;
            //   good.push(list[i]);
            // }
            // else {
            //   list[i].sortpriceorder = 2;
            //   medium.push(list[i]);
            // }
            list[i].sortpriceorder = 1;
              good.push(list[i]);
          }
          else {
            list[i].sortpriceorder = 3;
            other.push(list[i]);
          }
        }
        // if(medium && medium.length >0 && good && good.length >0){
        //   if(good[0].priceorder <= medium[0].priceorder ){
        //     this.returnfi =  [...good,...medium,...other];
        //   }else{
        //     if (medium.length > 0) {
        //       this.returnfi =  [...medium,...good,...other];
        //     }else{
        //      if(good.length>0)
        //       {
        //         this.returnfi =  [...good,...medium,...other];
        //       }
        //       else{
        //         this.returnfi =  other;
        //       }
        //     }
        //   }
        // }else {
        //   if (medium.length > 0) {
        //     this.returnfi =  [...medium,...good,...other];
        //   }else{
        //    if(good.length>0)
        //     {
        //       this.returnfi = [...good,...medium,...other];
        //     }
        //     else{
        //       this.returnfi =  [...other];
        //     }
        //   }
        // }
        
        // if(this.returnfi.length ==0){
        //   this.returnfi = other;
        // }

        if(good.length>0)
            {
              this.sortFlightsByTime(good,2);
              let otherlist = [...good.splice(3,good.length),...other];
              //this.sortFlightsByTime(otherlist,1);
              this.sortFlights('priceorder', otherlist);
              this.listReturn = [...good.splice(0,3),...otherlist];
            }
            else{
              this.sortFlightsByTime(other,2);
              this.listReturn =  [...other];
        }
        
        if(this.listReturn.length ==0){
          this.listReturn = other;
        }
    }
    return [...this.listReturn];
  }

  sortAirline(type){
    this.sortairline = (this.buttonMinPriceSelected || this.buttonMinTimeDepartSelected || this.buttonMaxTimeDepartSelected || this.buttonMinTimeReturnSelected || this.buttonMaxTimeReturnSelected || this.buttoniVIVUSelected);
    this.sortByAirline(type);
  }

  /**Hàm sort list khách sạn theo giá, điểm trung bình 
     * PDANH 23/01/2018
     */
    sortByAirline(property) {
        var se = this;
        se.column = property;
        if(se.enableFlightFilter){
          if(se._flightService.listflightDepartFilter && se._flightService.listflightDepartFilter.length >0){
            se.zone.run(() => se._flightService.listflightDepartFilter.sort(function (a, b) {
              let direction = -1;
              if(property == "priceup"){
                let col = 'totalPrice';
                if (a[col] * 1 < b[col] * 1) {
                  return 1 * direction;
                }
                else if (a[col] * 1 > b[col] * 1) {
                  return -1 * direction;
                }
              }else{
                let direction = (property == "sortByTimeDepartEarly" || property =="sortByTimeLandingEarly") ? -1 : 1;
                let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                if (a[columnname] < b[columnname]) {
                  return 1 * direction;
                }
                else if (a[columnname] > b[columnname]) {
                  return -1 * direction;
                }
              }
            }));

            if(se.listDepartFilter && se.listDepartFilter.length >0){
              se.zone.run(() => se.listDepartFilter.sort(function (a, b) {
                let direction = -1;
                if(property == "priceup"){
                  let col = 'totalPrice';
                  if (a[col] * 1 < b[col] * 1) {
                    return 1 * direction;
                  }
                  else if (a[col] * 1 > b[col] * 1) {
                    return -1 * direction;
                  }
                }else{
                  let direction = (property == "sortByTimeDepartEarly" || property =="sortByTimeLandingEarly") ? -1 : 1;
                  let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                  if (a[columnname] < b[columnname]) {
                    return 1 * direction;
                  }
                  else if (a[columnname] > b[columnname]) {
                    return -1 * direction;
                  }
                }
              }));
            }

          }
          else{
            se.listDepartFilter = [];
          }
          

        }else{
          if(se.listDepart && se.listDepart.length >0 && property){
            se.zone.run(() => se.listDepart.sort(function (a, b) {
              let direction = -1;
              if(property == "priceup"){
                let col = 'totalPrice';
                if (a[col] * 1 < b[col] * 1) {
                  return 1 * direction;
                }
                else if (a[col] * 1 > b[col] * 1) {
                  return -1 * direction;
                }
              }else{
                let direction = (property == "sortByTimeDepartEarly" || property =="sortByTimeLandingEarly") ? -1 : 1;
                let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                if (a[columnname] < b[columnname]) {
                  return 1 * direction;
                }
                else if (a[columnname] > b[columnname]) {
                  return -1 * direction;
                }
              }
            }));
          }
        }
      
        if(se.enableFlightFilterReturn){
          if(se._flightService.listflightReturnFilter && se._flightService.listflightReturnFilter.length >0){
            se.zone.run(() => se._flightService.listflightReturnFilter.sort(function (a, b) {
              let direction = -1;
              if(property == "priceup"){
                let col = 'totalPrice';
                if (a[col] * 1 < b[col] * 1) {
                  return 1 * direction;
                }
                else if (a[col] * 1 > b[col] * 1) {
                  return -1 * direction;
                }
              }else{
                let direction = (property == "sortByTimeDepartEarly" || property =="sortByTimeLandingEarly") ? -1 : 1;
                //let columnname = "sortByTime";
                let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                if (a[columnname] < b[columnname]) {
                  return 1 * direction;
                }
                else if (a[columnname] > b[columnname]) {
                  return -1 * direction;
                }
              }
            }));

            if(se.listReturnFilter && se.listReturnFilter.length >0){
              se.zone.run(() => se.listReturnFilter.sort(function (a, b) {
                let direction = -1;
                if(property == "priceup"){
                  let col = 'totalPrice';
                  if (a[col] * 1 < b[col] * 1) {
                    return 1 * direction;
                  }
                  else if (a[col] * 1 > b[col] * 1) {
                    return -1 * direction;
                  }
                }else{
                  let direction = (property == "sortByTimeDepartEarly" || property =="sortByTimeLandingEarly") ? -1 : 1;
                  //let columnname = "sortByTime";
                  let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                  if (a[columnname] < b[columnname]) {
                    return 1 * direction;
                  }
                  else if (a[columnname] > b[columnname]) {
                    return -1 * direction;
                  }
                }
              }));
            }
          }else{
            se.listReturnFilter =[];
          }

          
        }else{
          if(se.listReturn && se.listReturn.length >0 && property){
            se.zone.run(() => se.listReturn.sort(function (a, b) {
              let direction = -1;
              if(property == "priceup"){
                let col = 'totalPrice';
                if (a[col] * 1 < b[col] * 1) {
                  return 1 * direction;
                }
                else if (a[col] * 1 > b[col] * 1) {
                  return -1 * direction;
                }
              }else{
                let direction = (property == "sortByTimeDepartEarly" || property =="sortByTimeLandingEarly") ? -1 : 1;
                //let columnname = "sortByTime";
                let columnname = property == "sortByTimeDepartEarly" ? 'departTime' : 'landingTime';
                if (a[columnname] < b[columnname]) {
                  return 1 * direction;
                }
                else if (a[columnname] > b[columnname]) {
                  return -1 * direction;
                }
              }
            }));
          }
        }
      
        

        setTimeout(()=>{
          if(se.enableFlightFilter){
            // se.bestpricedepart = [...se._flightService.listflightDepartFilter].splice(0,3);
            // se.otherpricedepart = [...se._flightService.listflightDepartFilter].splice(3,se._flightService.listflightDepartFilter.length);
            if(se._flightService.listflightDepartFilter && se._flightService.listflightDepartFilter.length >0){
              se.listDepartFilter = [...se._flightService.listflightDepartFilter];
            }
            
          }else{
            // se.bestpricedepart = [...se.listDepart].splice(0,3);
            // se.otherpricedepart = [...se.listDepart].splice(3,se.listDepart.length);
            if(se.listDepart && se.listDepart.length >0){
              se.listDepart = [...se.listDepart];
            }
            
          }

          if(se.enableFlightFilterReturn){
            if(se._flightService.listflightReturnFilter && se._flightService.listflightReturnFilter.length >0){
              // se.bestpricereturn = [...se._flightService.listflightReturnFilter].splice(0,3);
              // se.otherpricereturn = [...se._flightService.listflightReturnFilter].splice(3,se._flightService.listflightReturnFilter.length);
              if(se._flightService.listflightReturnFilter && se._flightService.listflightReturnFilter.length >0){
                se.listReturnFilter = [...se._flightService.listflightReturnFilter];
              }
              
            }
          }else{
            // if(se.listReturn && se.listReturn.length >0){
            //   se.bestpricereturn = [...se.listReturn].splice(0,3);
            //   se.otherpricereturn = [...se.listReturn].splice(3,se.listReturn.length);
            // }
            if(se.listReturn && se.listReturn.length >0){
              se.listReturn = [...se.listReturn];
            }
            
          }
          
        },200)
        

      };


      async openSortFlight(){
        if(!this.loadpricedone){
          this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
          return;
        }
        let actionSheet = await this.actionsheetCtrl.create({
          cssClass: 'action-sheets-flightsearchresult-sort',
          buttons: [
            {
              text: "iVIVU đề xuất",
              cssClass:"btn-iVIVU cls-border-bottom",
              handler: () => {
                this.buttoniVIVUSelected = !this.buttoniVIVUSelected;
                this.textsort = this.buttoniVIVUSelected ? "iVIVU đề xuất" : "";
                this.buttoniVIVUSelected ? $(".btn-minprice > span").addClass('selected') : $(".btn-minprice > span").removeClass('selected');

                this.buttonMinPriceSelected = false;
                this.buttonMinTimeDepartSelected = false;
                this.buttonMaxTimeDepartSelected = false;
                this.buttonMinTimeReturnSelected = false;
                this.buttonMaxTimeReturnSelected = false;

                if(this.buttonMinPriceSelected){
                  this.buttonMinPriceSelected = !this.buttonMinPriceSelected;
                  this.sortAirline("priceup");
                }
                else if(this.buttonMinTimeDepartSelected){
                  this.buttonMinTimeDepartSelected = !this.buttonMinTimeDepartSelected;
                  this.sortAirline("sortByTimeDepartEarly");
                }
                else if(this.buttonMaxTimeDepartSelected){
                  this.buttonMaxTimeDepartSelected = !this.buttonMaxTimeDepartSelected;
                  this.sortAirline("sortByTimeDepartLately");
                }
                else if(this.buttonMinTimeReturnSelected){
                  this.buttonMinTimeReturnSelected = !this.buttonMinTimeReturnSelected;
                  this.sortAirline("sortByTimeLandingEarly");
                }
                else if(this.buttonMaxTimeDepartSelected){
                  this.buttonMaxTimeDepartSelected = !this.buttonMaxTimeDepartSelected;
                  this.sortAirline("sortByTimeLandingLately");
                }

                this.sortairline = this.buttoniVIVUSelected;
                if(this.enableFlightFilter || this.enableFlightFilterReturn){
                  this.filterFlight();
                }
              }
            },
            {
              text: "Giá thấp nhất",
              cssClass:"btn-minprice cls-border-bottom",
              handler: () => {
                this.buttonMinPriceSelected = !this.buttonMinPriceSelected;
                this.textsort = this.buttonMinPriceSelected ? "Giá thấp nhất" : "";
                this.buttonMinPriceSelected ? $(".btn-minprice > span").addClass('selected') : $(".btn-minprice > span").removeClass('selected');

                this.buttonMinTimeDepartSelected = false;
                this.buttonMaxTimeDepartSelected = false;
                this.buttonMinTimeReturnSelected = false;
                this.buttonMaxTimeReturnSelected = false;
                this.buttoniVIVUSelected = !this.buttonMinPriceSelected;
                this.sortAirline("priceup");
              }
            },
            {
              text: "Cất cánh sớm nhất",
              cssClass:"btn-mintimedepart cls-border-bottom",
              handler: () => {
                this.buttonMinTimeDepartSelected = !this.buttonMinTimeDepartSelected;
                this.textsort = this.buttonMinTimeDepartSelected ? "Cất cánh sớm nhất" : "";
                this.buttonMinTimeDepartSelected ? $(".btn-mintimedepart > span").addClass('selected') : $(".btn-mintimedepart > span").removeClass('selected');

                this.buttonMinPriceSelected = false;
                this.buttonMaxTimeDepartSelected = false;
                this.buttonMinTimeReturnSelected = false;
                this.buttonMaxTimeReturnSelected = false;
                this.buttoniVIVUSelected = !this.buttonMinTimeDepartSelected;
                this.sortAirline("sortByTimeDepartEarly");
              }
            },
            {
              text: "Cất cánh muộn nhất",
              cssClass:"btn-maxtimedepart cls-border-bottom",
              handler: () => {
                this.buttonMaxTimeDepartSelected = !this.buttonMaxTimeDepartSelected;
                this.textsort = this.buttonMaxTimeDepartSelected ? "Cất cánh muộn nhất" : "";
                this.buttonMaxTimeDepartSelected ? $(".btn-JetStar > span").addClass('selected') : $(".btn-JetStar > span").removeClass('selected');
                
                this.buttonMinPriceSelected = false;
                this.buttonMinTimeDepartSelected = false;
                this.buttonMinTimeReturnSelected = false;
                this.buttonMaxTimeReturnSelected = false;
                this.buttoniVIVUSelected = !this.buttonMaxTimeDepartSelected;
                this.sortAirline("sortByTimeDepartLately");
              }
            },
            {
              text: "Hạ cánh sớm nhất",
              cssClass:"btn-mintimereturn cls-border-bottom",
              handler: () => {
                this.buttonMinTimeReturnSelected = !this.buttonMinTimeReturnSelected;
                this.textsort = this.buttonMinTimeReturnSelected ? "Hạ cánh sớm nhất" : "";
                this.buttonMinTimeReturnSelected ? $(".btn-mintimereturn > span").addClass('selected') : $(".btn-mintimereturn > span").removeClass('selected');

                this.buttonMinPriceSelected = false;
                this.buttonMinTimeDepartSelected = false;
                this.buttonMaxTimeDepartSelected = false;
                this.buttonMaxTimeReturnSelected = false;
                this.buttoniVIVUSelected = !this.buttonMinTimeReturnSelected;
                this.sortAirline("sortByTimeLandingEarly");
              }
            },
            {
              text: "Hạ cánh muộn nhất",
              cssClass:"btn-maxtimereturn cls-border-bottom",
              handler: () => {
                this.buttonMaxTimeReturnSelected = !this.buttonMaxTimeReturnSelected;
                this.textsort = this.buttonMaxTimeReturnSelected ? "Hạ cánh muộn nhất" : "";
                this.buttonMaxTimeReturnSelected ? $(".btn-maxtimereturn > span").addClass('selected') : $(".btn-maxtimereturn > span").removeClass('selected');

                this.buttonMinPriceSelected = false;
                this.buttonMinTimeDepartSelected = false;
                this.buttonMaxTimeDepartSelected = false;
                this.buttonMinTimeReturnSelected = false;
                this.buttoniVIVUSelected = !this.buttonMaxTimeReturnSelected;
                this.sortAirline("sortByTimeLandingLately");
              }
            },
            // {
            //   text: "Xác nhận",
            //   cssClass:"btn-filter",
            //   handler: () => {
            //       this.filterAirline(this.arrFilterAirline);
            //   }
            // },
          ],
    
        });
       
        this.buttonMinPriceSelected ? $(".btn-minprice > span").addClass('selected') : $(".btn-minprice > span").removeClass('selected');
        this.buttonMinTimeDepartSelected ? $(".btn-mintimedepart > span").addClass('selected') : $(".btn-mintimedepart > span").removeClass('selected');
        this.buttonMaxTimeDepartSelected ? $(".btn-maxtimedepart > span").addClass('selected') : $(".btn-maxtimedepart > span").removeClass('selected');
        this.buttonMinTimeReturnSelected ? $(".btn-mintimereturn > span").addClass('selected') : $(".btn-mintimereturn > span").removeClass('selected');
        this.buttonMaxTimeReturnSelected ? $(".btn-maxtimereturn > span").addClass('selected') : $(".btn-maxtimereturn > span").removeClass('selected');
        this.buttoniVIVUSelected ? $(".btn-iVIVU > span").addClass('selected') : $(".btn-iVIVU > span").removeClass('selected');
        this.sortairline = this.buttoniVIVUSelected ? this.buttoniVIVUSelected : this.sortairline;
        
        actionSheet.present();
      
      }
    
        /**Hàm lọc lại chuyến bay
         * PDANH 24/04/2018
         */
        filterAirline(arrAirline){
          var se = this;
          if(arrAirline && arrAirline.length >0){
              //let arrAirline = event.detail.value;
              let strAirline = "";
              arrAirline.forEach(element => {
                strAirline += (strAirline != "")? (","+element) : element;
              });
              
              se.listdepartflightdisplay = [];
              se.listreturnflightdisplay = [];

              se.zone.run(()=>{
                se.departfi.forEach(f => {
                  if(strAirline.indexOf(f.airlineCode) != -1){
                    se.listdepartflightdisplay.push(f);
                  }
                });

                se.returnfi.forEach(f => {
                  if(strAirline.indexOf(f.airlineCode) != -1){
                    se.listreturnflightdisplay.push(f);
                  }
                });

                se.bestpricedepart = [...se.listdepartflightdisplay].splice(0,3);
                se.otherpricedepart = [...se.listdepartflightdisplay].splice(3,se.departfi.length);

                se.bestpricereturn = [...se.listreturnflightdisplay].splice(0,3);
                se.otherpricereturn = [...se.listreturnflightdisplay].splice(3,se.returnfi.length);
              })
            }else{
              se.listdepartflightdisplay = [];
              se.zone.run(()=>{
                se.departfi.forEach(f => {
                    se.listdepartflightdisplay.push(f);
                });

                se.returnfi.forEach(f => {
                    se.listreturnflightdisplay.push(f);
                });

                se.bestpricedepart = [...se.listdepartflightdisplay].splice(0,3);
                se.otherpricedepart = [...se.listdepartflightdisplay].splice(3,se.departfi.length);

                se.bestpricereturn = [...se.listreturnflightdisplay].splice(0,3);
                se.otherpricereturn = [...se.listreturnflightdisplay].splice(3,se.returnfi.length);
              })
            }
            if(se.column){
              se.sortByAirline(se.column);
            }
          }

      async openFilterFlight(){
        if(!this.loadpricedone){
          this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
          return;
        }
        this._flightService.itemFlightCache.step = this.step;
            this._flightService.listAllFlightDepart = this.listDepartNoFilter;
            if(this.listReturnNoFilter && this.listReturnNoFilter.length >0){
              this._flightService.listAllFlightReturn = this.listReturnNoFilter;
              this._flightService.listAllFlight = [...this.listDepartNoFilter,...this.listReturnNoFilter];
            }else{
              this._flightService.listAllFlight = [...this.listDepartNoFilter];
            }
            
           
            const modal: HTMLIonModalElement =
            await this.modalCtrl.create({
              component: FlightsearchfilterPage,
              componentProps: {
                aParameter: true,
              }
            });
          modal.present();
        
          modal.onDidDismiss().then((data: OverlayEventDetail) => {
            if(data && data.data){
              if(this._flightService.objectFilter){
                this.storage.get('flightfilterobject').then((data) => {
                  if(data){
                    this.storage.remove('flightfilterobject').then(()=>{
                      this.storage.set('flightfilterobject', this._flightService.objectFilter);
                    })
                  }else{
                    this.storage.set('flightfilterobject', this._flightService.objectFilter);
                  }
                })
                
                this.filterFlight();
              }else{

                if(this._flightService.objSearch){
                  // let obj= this._flightService.objSearch;
                  // let key ='listflight_' + obj.departDate + '_' + obj.returnDate + '_' + obj.departCode + '_' + obj.arrivalCode + '_' + obj.adult + '_' + obj.child + '_' + obj.infant;
                  // this.storage.get(key).then((data)=>{
                  //   if(data){
                  //     this.loadmultidata(data);
                  //   }else{
                  //     this.resetValue();
                  //     this.loadFlightData(obj, true);
                  //   }
                  // })
                  let obj= this._flightService.objSearch;
                  this.resetValue();
                  this.loadFlightData(obj, true);
                  this.title = obj.title;
                  this.subtitle = obj.subtitle;
                }
              
              }
            }
          })
      }

      excuteSort(){
        var se = this;
        let type = '';
            if(se.buttonMinPriceSelected){
                type = "priceup";
            }else if(se.buttonMinTimeDepartSelected){
                type ='sortByTimeDepartEarly';
            }else if(se.buttonMaxTimeDepartSelected){
                  type ='sortByTimeDepartLately';
            }else if(se.buttonMinTimeReturnSelected){
                type ='sortByTimeLandingEarly';
            }else if(se.buttonMaxTimeReturnSelected){
              type ='sortByTimeLandingLately';
            }
            se.sortByAirline(type);
      }

      filterFlight(){
        var se = this;
        var se = this;
        if(se.step == 2){
          let listdepart = se._flightService.listflightDepartFilter;
          //if(se.enableFlightFilter){
            if(listdepart && listdepart.length >0){
              se.sortFlights('priceorder', listdepart);
              // if( !se._flightService.objectFilter.departTimeRange || (se._flightService.objectFilter.departTimeRange && se._flightService.objectFilter.departTimeRange.length ==0 ) ){
              //   listdepart = se.checkvalueDepart(listdepart);
              // }
                
                if(se.sortairline){
                  se.checkSortFlight();
                }
              if(se.sortairline && !se.buttoniVIVUSelected){
                se.listDepartFilter = listdepart;
                se.excuteSort();
                
              }
              //else{
                // se.bestpricedepart = [...listdepart].splice(0,3);
                // se.otherpricedepart = [...listdepart].splice(3,listdepart.length);
                
              //}

              if(listdepart && listdepart.length > 0) {
                se.bestpricedepart = listdepart.length >=2 ?  [...listdepart].splice(0,2) : [...listdepart];
                if(listdepart.length >2){
                  let listotherpricedepart = [...listdepart].splice(2,listdepart.length);
                  se.sortFlightsByPrice(listotherpricedepart).then((data)=>{
                    se.bestpricedepart = [...se.bestpricedepart, data.splice(0,1)[0]];

                    let listotherpricedepartmustreorder = [...data];
                    se.sortFlights("priceorder", listotherpricedepartmustreorder);
    
                    se.otherpricedepart = [...listotherpricedepartmustreorder];
                  });
                  
  
                  
                }else{
                  se.otherpricedepart = [];
                }
                
              }

            }else{
              if(se.sortairline && !se.buttoniVIVUSelected){
                se.listDepartFilter = [];
              }else{
                se.bestpricedepart =[];
                se.otherpricedepart = [];
              }

            }
            
          //setTimeout(()=>{
            
            
          //},100)
        }else{
          let listreturn = se._flightService.listflightReturnFilter;
          if(listreturn && listreturn.length >0){
            //if(se.enableFlightFilterReturn){
              se.sortFlights('price', listreturn);
              // if(!se._flightService.objectFilter.returnTimeRange || (se._flightService.objectFilter.returnTimeRange && se._flightService.objectFilter.returnTimeRange.length ==0) ){
              //   listreturn = se.checkReturnList(listreturn);
              // }
              
              if(se.sortairline){
                se.checkSortFlight();
              }
            if(se.sortairline && !se.buttoniVIVUSelected){
              se.listReturnFilter = listreturn;
              se.excuteSort();
            }
            //else{
              // se.bestpricereturn = [...listreturn].splice(0,3);
              // se.otherpricereturn = [...listreturn].splice(3,listreturn.length);
            //}

            if(listreturn && listreturn.length > 0){
              se.bestpricereturn = listreturn.length >=2 ?  [...listreturn].splice(0,2) : [...listreturn];
              if(listreturn.length >2){
                let listotherpricereturn = [...listreturn].splice(2,listreturn.length);
                //listotherpricereturn = se.sortFlightsByPrice(listotherpricereturn);
                se.sortFlightsByPrice(listotherpricereturn).then((data)=>{
                se.bestpricereturn = [...se.bestpricereturn, data.splice(0,1)[0]];
  
                let listotherpricereturnmustreorder = [...data];
                se.sortFlights("priceorder", listotherpricereturnmustreorder);
  
                se.otherpricereturn = [...listotherpricereturnmustreorder];
                })
              }else{
                se.otherpricereturn = [];
              }
              
            }

          }else{
            if(se.sortairline && !se.buttoniVIVUSelected){
              se.listReturnFilter = [];
            }else{
              se.bestpricereturn =[];
              se.otherpricereturn = [];
            }
          }
        }
      }

      checkSortFlight(){
        if(this.buttonMinPriceSelected){
          this.sortAirline("priceup");
        }
        else if(this.buttonMinTimeDepartSelected){
          this.sortAirline("sortByTimeDepartEarly");
        }
        else if(this.buttonMaxTimeDepartSelected){
          this.sortAirline("sortByTimeDepartLately");
        }
        else if(this.buttonMinTimeReturnSelected){
          this.sortAirline("sortByTimeLandingEarly");
        }
        else if(this.buttonMaxTimeDepartSelected){
          this.sortAirline("sortByTimeLandingLately");
        }
      }

      filterByListFlight(list, type){
        var se = this;
        var listFilter =[];
        if(type == 'depart'){
          let filterPrice = list;
          if(se._flightService.objectFilter && se._flightService.objectFilter.minprice && se._flightService.objectFilter.maxprice){
            filterPrice = list.filter((filterpriceitem) => {
              return filterpriceitem.totalPrice *1 >= se._flightService.objectFilter.minprice *1 && filterpriceitem.totalPrice *1 <= se._flightService.objectFilter.maxprice *1;
            })
          }
         
          listFilter = [...filterPrice];
  
            if( se._flightService.objectFilter.departTimeRange && se._flightService.objectFilter.departTimeRange.length >0){//Lọc theo giờ cất cánh
                let filterDepart = listFilter.filter((filterdepartitem) => {
                  let time = moment(filterdepartitem.departTime).format("HH:mm:ss");
                  let timerange = time ? se.gf.convertStringToNumber(time) : -1;
  
                  let strFilter;
                  if(se._flightService.objectFilter.departTimeRange.indexOf(1) != -1){
                    strFilter = timerange >= 0 && timerange <= 60000;
                  }
                  if(se._flightService.objectFilter.departTimeRange.indexOf(2) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 60000 && timerange <= 120000) : timerange >= 60000 && timerange <= 120000;
                  }
                  if(se._flightService.objectFilter.departTimeRange.indexOf(3) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 120000 && timerange <= 180000) : timerange >= 120000 && timerange <= 180000 ;
                  }
                  if(se._flightService.objectFilter.departTimeRange.indexOf(4) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 180000 && timerange <= 240000) : timerange >= 180000 && timerange <= 240000;
                  }
                  
                  return strFilter;
                })
                listFilter = [...filterDepart];
            }
  
          if( se._flightService.objectFilter.returnTimeRange && se._flightService.objectFilter.returnTimeRange.length >0){//Lọc theo giờ hạ cánh
              let filterReturn = listFilter.filter((filterreturnitem) => {
                let time = moment(filterreturnitem.landingTime).format("HH:mm:ss");
                let timerange = time ? se.gf.convertStringToNumber(time) : -1;
  
                let strFilter;
                  if(se._flightService.objectFilter.returnTimeRange.indexOf(1) != -1){
                    strFilter = timerange >= 0 && timerange <= 60000;
                  }
                  if(se._flightService.objectFilter.returnTimeRange.indexOf(2) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 60000 && timerange <= 120000) : timerange >= 60000 && timerange <= 120000;
                  }
                  if(se._flightService.objectFilter.returnTimeRange.indexOf(3) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 120000 && timerange <= 180000) : timerange >= 120000 && timerange <= 180000 ;
                  }
                  if(se._flightService.objectFilter.returnTimeRange.indexOf(4) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 180000 && timerange <= 240000) : timerange >= 180000 && timerange <= 240000;
                  }
                  
                  return strFilter;
              })
              listFilter = [...filterReturn];
          }
  
            if(se._flightService.objectFilter.airlineSelected && se._flightService.objectFilter.airlineSelected.length >0){
              let filterAirline = listFilter.filter((filterairlineitem) => {
                let str;
                if(type == 'depart'){
                  if(se._flightService.objectFilter.airlineSelected.indexOf(1) != -1 && se.listDepartAirlines.indexOf("VietnamAirlines") != -1){
                    str = filterairlineitem.airlineCode == "VietnamAirlines";
                  }
                  if(se._flightService.objectFilter.airlineSelected.indexOf(2) != -1 && se.listDepartAirlines.indexOf("BambooAirways") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "BambooAirways") : filterairlineitem.airlineCode == "BambooAirways";
                  }
                  if(se._flightService.objectFilter.airlineSelected.indexOf(3) != -1  && se.listDepartAirlines.indexOf("JetStar") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "JetStar") : filterairlineitem.airlineCode == "JetStar" ;
                  }
                  if(se._flightService.objectFilter.airlineSelected.indexOf(4) != -1  && se.listDepartAirlines.indexOf("VietJetAir") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "VietJetAir") : filterairlineitem.airlineCode == "VietJetAir";
                  }
                  if(se._flightService.objectFilter.airlineSelected.indexOf(5) != -1  && se.listDepartAirlines.indexOf("AirAsia") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "AirAsia") : filterairlineitem.airlineCode == "AirAsia" ;
                  }
                }else{
                  if(se._flightService.objectFilter.airlineSelected.indexOf(1) != -1 && se.listReturnAirlines.indexOf("VietnamAirlines") != -1){
                    str = filterairlineitem.airlineCode == "VietnamAirlines";
                  }
                  if(se._flightService.objectFilter.airlineSelected.indexOf(2) != -1 && se.listReturnAirlines.indexOf("BambooAirways") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "BambooAirways") : filterairlineitem.airlineCode == "BambooAirways";
                  }
                  if(se._flightService.objectFilter.airlineSelected.indexOf(3) != -1  && se.listReturnAirlines.indexOf("JetStar") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "JetStar") : filterairlineitem.airlineCode == "JetStar" ;
                  }
                  if(se._flightService.objectFilter.airlineSelected.indexOf(4) != -1  && se.listReturnAirlines.indexOf("VietJetAir") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "VietJetAir") : filterairlineitem.airlineCode == "VietJetAir";
                  }
                  if(se._flightService.objectFilter.airlineSelected.indexOf(5) != -1  && se.listReturnAirlines.indexOf("AirAsia") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "AirAsia") : filterairlineitem.airlineCode == "AirAsia" ;
                  }
                }
                
                return str;
              })
              listFilter = [...filterAirline];
            }
  
            if( se._flightService.objectFilter.classSelected && se._flightService.objectFilter.classSelected.length >0){
              let filterclass = listFilter.filter((filterclassitem) => {
                let str;
                // if(se._flightService.objectFilter.classSelected.indexOf(1) != -1){
                //   str = filterclassitem.ticketClass == "Phổ thông";
                // }
                // if(se._flightService.objectFilter.classSelected.indexOf(2) != -1){
                //   str = str ? (str || filterclassitem.ticketClass == "Thương gia") : filterclassitem.ticketClass == "Thương gia";
                // }
                // if(se._flightService.objectFilter.classSelected.indexOf(3) != -1){
                //   str = str ? (str || filterclassitem.ticketClass == "Hạng nhất") : filterclassitem.ticketClass == "Hạng nhất" ;
                // }
                if(se._flightService.objectFilter.classSelected.indexOf(1) != -1){
                  str = ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Phổ thông") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1));
                }
                if(se._flightService.objectFilter.classSelected.indexOf(2) != -1){
                  str = str ? (str || filterclassitem.ticketClass == "Thương gia") : filterclassitem.ticketClass == "Thương gia";
                }
                if(se._flightService.objectFilter.classSelected.indexOf(3) != -1){
                  str = str ? (str || ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Linh hoạt") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Deluxe" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1))) : ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Linh hoạt") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Deluxe" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1)) ;
                }
                if(se._flightService.objectFilter.classSelected.indexOf(4) != -1){
                  
                  str = str ? (str || ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Tiết kiệm") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) != -1))) : ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Tiết kiệm") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) != -1)) ;
                }
                return str;
              })
             
              listFilter = [...filterclass];
            }
  
            if( se._flightService.objectFilter.stopSelected && se._flightService.objectFilter.stopSelected.length >0){
              let filterclass = listFilter.filter((filterstopitem) => {
                let stop = filterstopitem.stops*1 +1;
                return se._flightService.objectFilter.stopSelected.indexOf(stop) != -1 ? true : false ;
              })
              listFilter = [...filterclass];
            }

            if( se._flightService.objectFilter.facilitySelected && se._flightService.objectFilter.facilitySelected.length >0){
              let filterfac = listFilter.filter((filterfacility) => {
                let str;
                if(filterfacility.ticketCondition){
                    if(se._flightService.objectFilter.facilitySelected.indexOf(1) != -1){
                      str = filterfacility.ticketCondition.isTicketRefund;
                    }
                    if(se._flightService.objectFilter.facilitySelected.indexOf(2) != -1){
                      str = str ? ( str || (filterfacility.promotions && filterfacility.promotions.length >0)) : (filterfacility.promotions && filterfacility.promotions.length >0);
                    }
                    if(se._flightService.objectFilter.facilitySelected.indexOf(3) != -1){
                      str = str ? ( str || (filterfacility.ticketCondition.baggageHanded || filterfacility.ticketCondition.luggageSigned )) : (filterfacility.ticketCondition.baggageHanded || filterfacility.ticketCondition.luggageSigned );
                    }
                    if(se._flightService.objectFilter.facilitySelected.indexOf(4) != -1){
                      str = str ? ( str || (filterfacility.ticketCondition && filterfacility.ticketCondition.priorityCI)) : (filterfacility.ticketCondition && filterfacility.ticketCondition.priorityCI);
                    }
                }
                
                return str ;
              })
              listFilter = [...filterfac];
            }
  
            list = listFilter;
        }
        //Chiều về
        else {
          let filterPrice = list;
          if(se._flightService.objectFilterReturn && se._flightService.objectFilterReturn.minprice && se._flightService.objectFilterReturn.maxprice){
            filterPrice = list.filter((filterpriceitem) => {
              return filterpriceitem.totalPrice *1 >= se._flightService.objectFilterReturn.minprice *1 && filterpriceitem.totalPrice *1 <= se._flightService.objectFilterReturn.maxprice *1;
            })
          }
          listFilter = [...filterPrice];
  
            if( se._flightService.objectFilterReturn.departTimeRangeReturn && se._flightService.objectFilterReturn.departTimeRangeReturn.length >0){//Lọc theo giờ cất cánh
                let filterDepart = listFilter.filter((filterdepartitem) => {
                  let time = moment(filterdepartitem.departTime).format("HH:mm:ss");
                  let timerange = time ? se.gf.convertStringToNumber(time) : -1;
  
                  let strFilter;
                  if(se._flightService.objectFilterReturn.departTimeRangeReturn.indexOf(1) != -1){
                    strFilter = timerange >= 0 && timerange <= 60000;
                  }
                  if(se._flightService.objectFilterReturn.departTimeRangeReturn.indexOf(2) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 60000 && timerange <= 120000) : timerange >= 60000 && timerange <= 120000;
                  }
                  if(se._flightService.objectFilterReturn.departTimeRangeReturn.indexOf(3) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 120000 && timerange <= 180000) : timerange >= 120000 && timerange <= 180000 ;
                  }
                  if(se._flightService.objectFilterReturn.departTimeRangeReturn.indexOf(4) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 180000 && timerange <= 240000) : timerange >= 180000 && timerange <= 240000;
                  }
                  
                  return strFilter;
                })
                listFilter = [...filterDepart];
            }
  
          if( se._flightService.objectFilterReturn.returnTimeRangeReturn && se._flightService.objectFilterReturn.returnTimeRangeReturn.length >0){//Lọc theo giờ hạ cánh
              let filterReturn = listFilter.filter((filterreturnitem) => {
                let time = moment(filterreturnitem.landingTime).format("HH:mm:ss");
                let timerange = time ? se.gf.convertStringToNumber(time) : -1;
  
                let strFilter;
                  if(se._flightService.objectFilterReturn.returnTimeRangeReturn.indexOf(1) != -1){
                    strFilter = timerange >= 0 && timerange <= 60000;
                  }
                  if(se._flightService.objectFilterReturn.returnTimeRangeReturn.indexOf(2) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 60000 && timerange <= 120000) : timerange >= 60000 && timerange <= 120000;
                  }
                  if(se._flightService.objectFilterReturn.returnTimeRangeReturn.indexOf(3) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 120000 && timerange <= 180000) : timerange >= 120000 && timerange <= 180000 ;
                  }
                  if(se._flightService.objectFilterReturn.returnTimeRangeReturn.indexOf(4) != -1){
                    strFilter = strFilter ? (strFilter || timerange >= 180000 && timerange <= 240000) : timerange >= 180000 && timerange <= 240000;
                  }
                  
                  return strFilter;
              })
              listFilter = [...filterReturn];
          }
  
            if(se._flightService.objectFilterReturn.airlineSelectedReturn && se._flightService.objectFilterReturn.airlineSelectedReturn.length >0){
              let filterAirline = listFilter.filter((filterairlineitem) => {
                let str;
                if(type == 'depart'){
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(1) != -1 && se.listDepartAirlines.indexOf("VietnamAirlines") != -1){
                    str = filterairlineitem.airlineCode == "VietnamAirlines";
                  }
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(2) != -1 && se.listDepartAirlines.indexOf("BambooAirways") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "BambooAirways") : filterairlineitem.airlineCode == "BambooAirways";
                  }
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(3) != -1  && se.listDepartAirlines.indexOf("JetStar") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "JetStar") : filterairlineitem.airlineCode == "JetStar" ;
                  }
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(4) != -1  && se.listDepartAirlines.indexOf("VietJetAir") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "VietJetAir") : filterairlineitem.airlineCode == "VietJetAir";
                  }
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(5) != -1  && se.listDepartAirlines.indexOf("AirAsia") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "AirAsia") : filterairlineitem.airlineCode == "AirAsia" ;
                  }
                }else{
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(1) != -1 && se.listReturnAirlinesReturn.indexOf("VietnamAirlines") != -1){
                    str = filterairlineitem.airlineCode == "VietnamAirlines";
                  }
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(2) != -1 && se.listReturnAirlinesReturn.indexOf("BambooAirways") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "BambooAirways") : filterairlineitem.airlineCode == "BambooAirways";
                  }
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(3) != -1  && se.listReturnAirlinesReturn.indexOf("JetStar") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "JetStar") : filterairlineitem.airlineCode == "JetStar" ;
                  }
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(4) != -1  && se.listReturnAirlinesReturn.indexOf("VietJetAir") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "VietJetAir") : filterairlineitem.airlineCode == "VietJetAir";
                  }
                  if(se._flightService.objectFilterReturn.airlineSelectedReturn.indexOf(5) != -1  && se.listReturnAirlinesReturn.indexOf("AirAsia") != -1){
                    str = str ? (str || filterairlineitem.airlineCode == "AirAsia") : filterairlineitem.airlineCode == "AirAsia" ;
                  }
                }
                
                return str;
              })
              listFilter = [...filterAirline];
            }
  
            if( se._flightService.objectFilterReturn.classSelectedReturn && se._flightService.objectFilterReturn.classSelectedReturn.length >0){
              let filterclass = listFilter.filter((filterclassitem) => {
                let str;
                // if(se._flightService.objectFilterReturn.classSelectedReturn.indexOf(1) != -1){
                //   str = filterclassitem.ticketClass == "Phổ thông";
                // }
                // if(se._flightService.objectFilterReturn.classSelectedReturn.indexOf(2) != -1){
                //   str = str ? (str || filterclassitem.ticketClass == "Thương gia") : filterclassitem.ticketClass == "Thương gia";
                // }
                // if(se._flightService.objectFilterReturn.classSelectedReturn.indexOf(3) != -1){
                //   str = str ? (str || filterclassitem.ticketClass == "Hạng nhất") : filterclassitem.ticketClass == "Hạng nhất" ;
                // }
                if(se._flightService.objectFilterReturn.classSelectedReturn.indexOf(1) != -1){
                  str = ( (filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Phổ thông") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1) );
                }
                if(se._flightService.objectFilterReturn.classSelectedReturn.indexOf(2) != -1){
                  str = str ? (str || filterclassitem.ticketClass == "Thương gia") : filterclassitem.ticketClass == "Thương gia";
                }
                if(se._flightService.objectFilterReturn.classSelectedReturn.indexOf(3) != -1){
                  str = str ? (str || ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Linh hoạt") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Deluxe" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1))) : ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Linh hoạt") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Deluxe" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) == -1)) ;
                }
                if(se._flightService.objectFilterReturn.classSelectedReturn.indexOf(4) != -1){
                  
                  str = str ? (str || ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Tiết kiệm") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) != -1))) : ((filterclassitem.airlineCode != 'VietJetAir' && filterclassitem.ticketClass == "Tiết kiệm") || (filterclassitem.airlineCode == 'VietJetAir' && filterclassitem.ticketType == "Eco" && se.VJSaverTicket.indexOf(filterclassitem.details[0].ticketType) != -1)) ;
                }
                return str;
              })
             
              listFilter = [...filterclass];
            }
  
            if( se._flightService.objectFilterReturn.stopSelectedReturn && se._flightService.objectFilterReturn.stopSelectedReturn.length >0){
              let filterclass = listFilter.filter((filterstopitem) => {
                let stop = filterstopitem.stops*1 +1;
                return se._flightService.objectFilterReturn.stopSelectedReturn.indexOf(stop) != -1 ? true : false ;
              })
              listFilter = [...filterclass];
            }

            if( se._flightService.objectFilterReturn.facilitySelectedReturn && se._flightService.objectFilterReturn.facilitySelectedReturn.length >0){
              let filterfac = listFilter.filter((filterfacility) => {
                let str;
                if(filterfacility.ticketCondition){
                    if(se._flightService.objectFilterReturn.facilitySelectedReturn.indexOf(1) != -1){
                      str = filterfacility.ticketCondition.isTicketRefund;
                    }
                    if(se._flightService.objectFilterReturn.facilitySelectedReturn.indexOf(2) != -1){
                      str = str ? ( str || (filterfacility.promotions && filterfacility.promotions.length >0)) : (filterfacility.promotions && filterfacility.promotions.length >0);
                    }
                    if(se._flightService.objectFilterReturn.facilitySelectedReturn.indexOf(3) != -1){
                      str = str ? ( str || (filterfacility.ticketCondition.baggageHanded || filterfacility.ticketCondition.luggageSigned )) : (filterfacility.ticketCondition.baggageHanded || filterfacility.ticketCondition.luggageSigned );
                    }
                    if(se._flightService.objectFilterReturn.facilitySelectedReturn.indexOf(4) != -1){
                      str = str ? ( str || (filterfacility.ticketCondition && filterfacility.ticketCondition.priorityCI)) : (filterfacility.ticketCondition && filterfacility.ticketCondition.priorityCI);
                    }
                }
                
                return str ;
              })
              listFilter = [...filterfac];
            }
  
            list = listFilter;
        }
          
            
          return list;
      }
  
      filterItem() :Promise<any>{
        var se = this;
        return new Promise((resolve, reject) => {
          if( (se.listDepart && se.listDepart.length >0) || (se.listReturn && se.listReturn.length >0) ){
            const totalItemBeforeFilter = (se.listDepart ? se.listDepart.length : 0) + (se.listReturn ? se.listReturn.length : 0);
            const totalItemDepartBeforeFilter = (se.listDepart ? se.listDepart.length : 0);
            const totalItemReturnBeforeFilter = (se.listReturn ? se.listReturn.length : 0);
            se.zone.run(()=>{
            if(se._flightService.objectFilter &&
              (se._flightService.objectFilter.minprice*1 != 0
              || se._flightService.objectFilter.maxprice*1 != 15000000
              || se._flightService.objectFilter.departTimeRange.length >0
              || se._flightService.objectFilter.returnTimeRange.length >0
              || se._flightService.objectFilter.airlineSelected.length >0
              || se._flightService.objectFilter.classSelected.length >0
              || se._flightService.objectFilter.stopSelected.length >0
              || se._flightService.objectFilter.facilitySelected.length >0)
              ){
              if(se.listDepart && se.listDepart.length >0){
                se.listDepartFilter = se.filterByListFlight([...se.listDepart], 'depart');
              }
            }else{
              se.listDepartFilter =se.listDepart;
            }
            
            if(se._flightService.objectFilterReturn &&
              (se._flightService.objectFilterReturn.minprice*1 != 0
              || se._flightService.objectFilterReturn.maxprice*1 != 15000000
              || se._flightService.objectFilterReturn.departTimeRange.length >0
              || se._flightService.objectFilterReturn.returnTimeRange.length >0
              || se._flightService.objectFilterReturn.airlineSelected.length >0
              || se._flightService.objectFilterReturn.classSelected.length >0
              || se._flightService.objectFilterReturn.stopSelected.length >0
              || se._flightService.objectFilterReturn.facilitySelected.length >0
              )){
              if(se.listReturn && se.listReturn.length >0){
                se.listReturnFilter = se.filterByListFlight([...se.listReturn], 'return');
               }
            }else{
              se.listReturnFilter =se.listReturn;
            }

             //se.loadpricedone = true;
             let totalItemAfterFilter = (se.listDepartFilter ? se.listDepartFilter.length : 0) + (se.listReturnFilter ? se.listReturnFilter.length : 0);
             let totalItemDepartAfterFilter = (se.listDepartFilter ? se.listDepartFilter.length : 0);
             let totalItemReturnAfterFilter = (se.listReturnFilter ? se.listReturnFilter.length : 0);

             if(se.step == 2){
                se.enableFlightFilter = (totalItemDepartAfterFilter != totalItemDepartBeforeFilter) ? 1 : 0;
             }else{
                se.enableFlightFilterReturn = (totalItemReturnAfterFilter != totalItemReturnBeforeFilter) ? 1 : 0;
             }
               
             })
            
           }

           resolve(true);
        })
       
      }

      async showFlightDetail(item, type){
        var se = this;
        se._flightService.itemFlightCache.step = this.step;
        if(!se.loadpricedone){
          se.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
          return;
        }
        se._flightService.itemFlightCache.itemFlight = item;
        const modal: HTMLIonModalElement =
        await se.modalCtrl.create({
          component: FlightdetailPage,
        });
        modal.present();

        modal.onDidDismiss().then((data: OverlayEventDetail) => {
          if(data && data.data){
            se.select(type,item);
          }
        })
      }

    async showChangeInfo(){
      var se = this;
      if(!se.loadpricedone){
        se.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
        return;
      }
         
      setTimeout(()=>{
        se._flightService.itemAllFlightCount.emit(( this.listDepart ? this.listDepart.length: 0) + (this.listReturn ? this.listReturn.length : 0));
      },350)
        const modal: HTMLIonModalElement =
        await se.modalCtrl.create({
          component: FlightchangeinfoPage,
          componentProps: {
            aParameter: true,
          },
          showBackdrop: true,
          backdropDismiss: true,
          cssClass: "modal-flight-change-info",
          enterAnimation: CustomAnimations.iosCustomEnterAnimation,
          leaveAnimation: CustomAnimations.iosCustomLeaveAnimation,
        });
      modal.present();
    
      modal.onDidDismiss().then((data: OverlayEventDetail) => {
            if(data && data.data){
              let obj = se._flightService.objSearch;
              
                se.resetValue();
                se.title = obj.title;
                se.subtitle = obj.subtitle;
                se.titlereturn = obj.titleReturn;
                se.subtitlereturn = obj.subtitleReturn;
                se.storage.get('flightfilterobject').then((data)=>{
                  if(data){
                    se._flightService.objectFilter = data;
                  }
                })
                se.loadFlightData(obj, true);
                
            }
          })
      }

      resetValue(){
        var se = this;
        se.zone.run(()=>{
          se.loadpricedone = false;
          se.listDepart = [];
          se.listReturn = [];
          se.departfi = [];
          se.returnfi = [];
          se.title ="";
          se.subtitle = "";
          se.bestpricedepart = [];
          se.otherpricedepart = [];
          se.sortairline = false;
          se.step = 2;
          se.bestpricereturn = [];
          se.otherpricereturn = [];
          se.buttonVASelected = false;
          se.airlinename=false;
          se.arrFilterAirline = [];
          se.buttonVJSelected = false;
          se.buttonJSSelected = false;
          se.buttonBASelected = false;
          se.listdepartflightdisplay = [];
          se.listreturnflightdisplay = [];
          se.buttonMinPriceSelected = false;
          se.buttonMinTimeSelected = false;
          se.buttonMaxTimeSelected = false;
          se.buttonMinTimeDepartSelected = false;
          se.buttonMaxTimeDepartSelected = false;
          se.buttonMinTimeReturnSelected = false;
          se.buttonMaxTimeReturnSelected = false;
          se.titlereturn = "";
          se.subtitlereturn = "";
          se.count=0;
          se.stoprequest=false;
          se.listDepartConditions = [];
          se.listReturnConditions = [];
          se.enableFlightFilter = false;
          se.canselect = true;
          se.listDepartAirlines=[];
          se.listReturnAirlines=[];
          se.listDepartNoFilter=[];
          se.listReturnNoFilter=[];
          se.listDepartFilter = [];
          se.listReturnFilter = [];
          se.listDepartTimeRange=[];
          se.listDepartLandingTimeRange=[];
          se.listReturnTimeRange=[];
          se.listReturnLandingTimeRange=[];
          se.listDepartTicketClass=[];
          se.ecoTicketClassName = "Phổ thông";
          se.bussinessTicketClassName ="Thương gia";
          se.firstTicketClassName ="Hạng nhất";
          se.listReturnTicketClass =[];
          se.listDepartStops=[];
          se.listReturnStops=[];
          se.listDepartFacility = [];
          se.listReturnFacility = [];
          se.departFlight=null;
          se._flightService.itemFlightCache.itemFlight = null;
          se._flightService.itemFlightCache.departFlight = null;
          se._flightService.itemFlightCache.returnFlight = null;
          se._flightService.itemFlightCache.step = 2;

          if(se._flightService && se._flightService.objSearch){
            let obj = se._flightService.objSearch;
            se.title = obj.title;
            se.subtitle = obj.subtitle;
            se.titlereturn = obj.titleReturn;
            se.subtitlereturn = obj.subtitleReturn;
          }
        
          
          se.buttoniVIVUSelected = true;
          se.sortairline = true;
         
        })
        
      }

      async showQuickBack(){
        const modal: HTMLIonModalElement =
        await this.modalCtrl.create({
          component: FlightquickbackPage,
          componentProps: {
            aParameter: true,
          },
          showBackdrop: true,
          backdropDismiss: true,
          enterAnimation: CustomAnimations.iosCustomEnterAnimation,
          leaveAnimation: CustomAnimations.iosCustomLeaveAnimation,
          cssClass: "modal-flight-quick-back",
        });
      modal.present();
      }


       /**
   * Hàm bắt sự kiện click chọn ngày trên lịch bằng jquery
   * @param e biến event
   */
  async clickedElement(e: any) {
    var obj: any = e.currentTarget;
    if ( (this._flightService.itemFlightCache.roundTrip && ($(obj.parentNode).hasClass("endSelection") || $(obj.parentNode).hasClass("startSelection"))) || (!this._flightService.itemFlightCache.roundTrip && $(obj).hasClass('on-selected'))  ) {
      if (this.modalCtrl) {
        let fday: any;
        let tday: any;
        var monthenddate: any;
        var yearenddate: any;
        var monthstartdate: any;
        var yearstartdate: any;
        var objTextMonthEndDate: any;
        var objTextMonthStartDate: any;

        let objsearch = this._flightService.objSearch;
        if(objsearch.roundTrip){
          this.roundtriptext = "khứ hồi/khách";
          if ($(obj.parentNode).hasClass('endSelection')) {
            if ( $('.days-btn.lunarcalendar.on-selected > p')[0]) {
              fday= $('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
            } else {
              fday = $('.on-selected > p')[0].textContent;
            }
            if ($('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
              tday = $('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText; 
            } else {
              //tday = $(obj)[0].textContent;
              tday = $('.days.endSelection .days-btn > p')[0].innerText;
            }
            objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ','');
            objTextMonthEndDate = $(obj).closest('.month-box').children()[0].textContent.replace('Tháng ','');
          } else {
            if ($('.days-btn.lunarcalendar.on-selected > p')[0]) {
              fday =$('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
            }
            else{
              //fday = $(obj)[0].textContent;
              fday = $(obj)[0].children[0].textContent
            }
            if ($('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
              tday = $('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
            }
            else{
              //tday = $('.endSelection').children('.days-btn')[0].textContent;
              tday = $('.days.endSelection .days-btn > p')[0].innerText;
            }
            objTextMonthStartDate = $(obj).closest('.month-box').children()[0].textContent.replace('Tháng ','');
            objTextMonthEndDate = $('.endSelection').closest('.month-box').children()[0].textContent.replace('Tháng ','');
          }
        }else{
          this.roundtriptext = "một chiều/khách";
            if ( $('.days-btn.lunarcalendar.on-selected > p')[0]) {
              fday= $('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
            } else {
              //fday = $('.on-selected')[0].textContent;
              fday = $('.on-selected > p')[0].textContent;
            }
            tday = fday;
            objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ','');
            objTextMonthEndDate = objTextMonthStartDate;
        }

        if (
          objTextMonthEndDate &&
          objTextMonthEndDate.length > 0 &&
          objTextMonthStartDate &&
          objTextMonthStartDate.length > 0
        ) {
          monthstartdate = objTextMonthStartDate.trim().split(",")[0];
          yearstartdate = objTextMonthStartDate.trim().split(",")[1];
          monthenddate = objTextMonthEndDate.trim().split(",")[0];
          yearenddate = objTextMonthEndDate.trim().split(",")[1];

          var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
          var todate = new Date(yearenddate, monthenddate - 1, tday);
          let diffday =moment(todate).diff(fromdate, "days");
          this.countdaydisplay = diffday +1;
          
          var se = this;
          let allowseach = (diffday >=0 ? true : false);
          if (fromdate && todate && allowseach) {
            setTimeout(() => {
              se.modalCtrl.dismiss({from: fromdate, to: todate});
            }, 300);

          }
        }
      }
    }
  }

  async showChangeDate() {
    this.gf.hideStatusBar();
    if(!this.allowclickcalendar){
      return;
    }
    this.allowclickcalendar = false;
    let fromdate = new Date(this._flightService.itemFlightCache.checkInDate);
    let todate = new Date(this._flightService.itemFlightCache.checkOutDate);

    this.checkInDisplayMonth = this.getDayOfWeek(fromdate).dayname +", " + moment(fromdate).format("DD") + " thg " + moment(fromdate).format("MM");
    this.checkOutDisplayMonth = this.getDayOfWeek(todate).dayname +", " + moment(todate).format("DD") + " thg " + moment(todate).format("MM");

    let key = "listHotDealCalendar_"+this._flightService.objSearch.departCode+"_"+this._flightService.objSearch.returnCode;
    this.storage.get(key).then((data)=>{
      if(!data){
        this.loadCalendarPrice();
      }
    })

    let countday = moment(todate).diff(moment(fromdate),'days');
    this.countdaydisplay = this._flightService.itemFlightCache.roundTrip ? (countday +1) : 1;

    let _daysConfig: DayConfig[] = [];
    for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
    _daysConfig.push({
        date: this.valueGlobal.listlunar[j].date,
        subTitle: moment(this.valueGlobal.listlunar[j].date).format("DD/MM") + ': ' +this.valueGlobal.listlunar[j].name,
        cssClass: 'lunarcalendar'
    })
    }
    var options:CalendarModalOptions;
    if(this._flightService.itemFlightCache.roundTrip){
      options  = {
        pickMode: "range",
        title: "Chọn ngày",
        monthFormat: " M, YYYY",
        weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        closeLabel: "",
        doneLabel: "",
        step: 0,
        defaultScrollTo: fromdate,
        defaultDateRange: { from: fromdate, to: todate },
        daysConfig: _daysConfig
        };
    }else{
      options  = {
        pickMode: "single",
        title: "Chọn ngày",
        monthFormat: " M, YYYY",
        weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        closeLabel: "",
        doneLabel: "",
        step: 0,
        defaultScrollTo: fromdate,
        defaultDate: fromdate,
        //defaultDateRange: { from: fromdate, to: todate },
        daysConfig: _daysConfig
        };
    }

    this.myCalendar = await this.modalCtrl.create({
    component: CalendarModal,
    cssClass: 'flight-calendar-custom',
    animated: true,
    componentProps: { options }
    });

    this.myCalendar.present().then(() => {
      this.allowclickcalendar = true;
        let key = "listHotDealCalendar_"+this._flightService.itemFlightCache.departCode+"_"+this._flightService.itemFlightCache.returnCode;
        this.storage.get(key).then((data)=>{
          if(data){
            if(this._flightService.itemFlightCache.roundTrip){//2 chiều
              this.renderCalenderPrice(1, data.departs, data.arrivals);
            }else{//1 chiều
              this.renderCalenderPrice(2, data.departs, null);
            }
          }
        })
        this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
        setTimeout(()=>{
            //custom style lịch giá
            $('.flight-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=end]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_close.svg' ></div>");
            if(this.countdaydisplay >0){
              $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${ this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'>${this.countdaydisplay} ngày <img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
            }else{
              $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${ this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'><img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
            }
            if(this._flightService.itemFlightCache.roundTrip){
              $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${ this.checkInDisplayMonth } </div></div> <div class='div-width-100'><div class='text-date-normal p-l-8'>Ngày về</div> <div class='text-flight-datetime p-l-8 border-left' *ngIf='flighttype=='twoway''>${ this.checkOutDisplayMonth } </div></div></div>`);
            }else{
              $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${ this.checkInDisplayMonth } </div></div> </div>`);
            }
            //add div show giá thấp nhất
            if(this.showlowestprice){
              $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' [(ngModel)]="showlowestprice" checked></ion-toggle></div> </div>`);
            }else{
              $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' [(ngModel)]="showlowestprice" ></ion-toggle></div> </div>`);
            }
            
            //add event cho button show price
            //$('.button-show-lowest-price').click(e => this.showLowestPrice(e));
            var container = document.querySelector(".button-show-lowest-price");

              container.addEventListener("touchend", (e)=>{
                  this.showLowestPrice(e);
              }, false);
            //custom title month
            if($('.flight-calendar-custom .month-box .month-title').length >0) {
              for (let index = 0; index < $('.flight-calendar-custom .month-box .month-title').length; index++) {
                const elementMonthTitle = $('.flight-calendar-custom .month-box .month-title')[index];
                elementMonthTitle.textContent = 'Tháng' + elementMonthTitle.textContent;
              }
            }
            
            //add event close header
            $('.flight-calendar-custom .header-img-close').click((e => this.closecalendar()));
            //
            $(".days-btn").click(e => this.clickedElement(e));

            if(this.showlowestprice){
              $('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
            }else{
              $('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
            }
            if($('.div-calendar-cincout')){
              $('.div-calendar-cincout').click(e => this.showCalendarCinCout());
            }
            
            //Custom ngày lễ
            let divmonth = $('.month-box');
            if(divmonth && divmonth.length >0){
              for (let index = 0; index < divmonth.length; index++) {
                const em = divmonth[index];
                  let divsmall = $('#'+em.id+' small');
                  if(divsmall && divsmall.length >0){
                    $('#'+em.id).append("<div class='div-month-text-small'></div>")
                    for (let i = 0; i < divsmall.length; i++) {
                      const es = divsmall[i];
                      $('#'+em.id+' .div-month-text-small').append("<div class='sm-"+em.id+'-'+i+"'></div>");
                      $('.sm-'+em.id+'-'+i).append(es);
                    }
                  }
              }
            }

        },10)
        //$(".days-btn").click(e => this.clickedElement(e));
        });
        var se = this;
        const event: any = await this.myCalendar.onDidDismiss();
        const date = event.data;
        if (event.data) {
        const from: CalendarResult = date.from;
        const to: CalendarResult = date.to;
        let objday:any = se.getDayOfWeek(from);
        let objdayreturn:any = se.getDayOfWeek(to);
        let obj = se._flightService.objSearch;
        se.zone.run(() => {
            se._flightService.itemFlightCache.checkInDate = date.from;
            se._flightService.itemFlightCache.checkOutDate = date.to;
            
            se._flightService.itemFlightCache.checkInDisplayMonth = moment(date.from).format("DD") + " thg " + moment(date.from).format("MM") ;
            se._flightService.itemFlightCache.checkOutDisplayMonth = moment(date.to).format("DD") + " thg " + moment(date.to).format("MM") ;

            se._flightService.itemFlightCache.departTimeDisplay = objday.dayname + ", " + moment(date.from).format("DD.MM");
            se._flightService.itemFlightCache.returnTimeDisplay = objdayreturn.dayname + ", " + moment(date.to).format("DD.MM");

            se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + objday.dayname + ", " + moment(date.from).format("DD-MM-YYYY");
            se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + objdayreturn.dayname + ", " + moment(date.to).format("DD-MM-YYYY");

            se._flightService.itemFlightCache.departPaymentTitleDisplay = objday.daynameshort + ", " + moment(date.from).format("DD-MM")+ " · " + se._flightService.itemFlightCache.departCode + " - " + se._flightService.itemFlightCache.returnCode + " · ";
            se._flightService.itemFlightCache.returnPaymentTitleDisplay = objdayreturn.daynameshort + ", " + moment(date.to).format("DD-MM")+ " · "+ se._flightService.itemFlightCache.returnCode + " - " + se._flightService.itemFlightCache.departCode + " · ";
            
            se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(date.from).dayname +", " + moment(date.from).format("DD") + " thg " + moment(date.from).format("MM");
            se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(date.to).dayname +", " + moment(date.to).format("DD") + " thg " + moment(date.to).format("MM");

            se._flightService.itemFlightCache.checkInDisplaysort = se.getDayOfWeek(date.from).daynameshort +", " + moment(date.from).format("DD") + " thg " + moment(date.from).format("MM");
            se._flightService.itemFlightCache.checkOutDisplaysort = se.getDayOfWeek(date.to).daynameshort +", " + moment(date.to).format("DD") + " thg " + moment(date.to).format("MM");

            se.checkInDisplayMonth = se.getDayOfWeek(date.from).dayname +", " + moment(date.from).format("DD") + " thg " + moment(date.from).format("MM");
            se.checkOutDisplayMonth = se.getDayOfWeek(date.to).dayname +", " + moment(date.to).format("DD") + " thg " + moment(date.to).format("MM");

            se.storage.get("itemFlightCache").then((data)=>{
              if(data){
                se.storage.remove("itemFlightCache").then(()=>{
                  se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                })
    
              }else{
                se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
              }
            })
           
          
          obj.subtitle = objday.dayname + ", " + moment(date.from).format("DD-M-YYYY") + " · " + (se._flightService.itemFlightCache.adult + se._flightService.itemFlightCache.child + (se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0) ) + " khách";
          obj.subtitlereturn = objdayreturn.dayname + ", " + moment(date.to).format("DD-M-YYYY") + " · " + (se._flightService.itemFlightCache.adult + se._flightService.itemFlightCache.child + (se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0) ) + " khách";

          obj.departDate = date.from;
          obj.returnDate = date.to;
          })
          
        
          se.resetValue();
          se.loadFlightData(obj, true);
        }
    }

    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }

      getDayOfWeek(date) {
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

      doRefresh(event){
        if(!this.loadpricedone){
          this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
          return;
        }
        let obj= this._flightService.objSearch;
        this.zone.run(()=>{
          this.resetValue();
        })
       
        this.loadFlightData(obj, true);
       
      }

     public scrollSearchFlight = (event: any) => {
        var se = this;
          let el = document.getElementsByClassName('div-other-choice-title');
          let el1 = document.getElementsByClassName('div-depart-flight-choice');
          if(el.length >0){
            //console.log(event.detail.scrollTop)
           
              if(event.detail.scrollTop > 448){
                if(se.step ==2){
                  if(!el[0].classList.contains("float-enabled")){
                    el[0].classList.add('float-enabled');
                  }
                }else{
                  if(!el[0].classList.contains("float-enabled")){
                    el[0].classList.add('float-enabled');
                    el[0].classList.add('top-124');
                  }
                }
                
              }else{
                el[0].classList.remove('float-enabled');
                el[0].classList.remove('top-124');
              }
          }
      }

      closecalendar(){
        this.modalCtrl.dismiss();
        
      }
  
      showLowestPrice(event){
        setTimeout(()=>{
          let obj= this._flightService.objSearch;
          this.showlowestprice = event.target.checked;
          if(obj.departCode && obj.arrivalCode){
            if(this.showlowestprice){
              $('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
            }else{
              $('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
            }
          }else{
            this.gf.showToastWarning('Vui lòng chọn điểm khởi hành và điểm đến trước khi xem lịch giá rẻ.');
          }
        },100)
      }
  
      loadCalendarPrice(){
        let obj= this._flightService.objSearch;
        if(obj.departCode && obj.arrivalCode){
          let url = C.urls.baseUrl.urlFlight + "gate/apiv1/GetHotDealCalendar?fromplace="+obj.departCode+"&toplace="+obj.arrivalCode+"&getincache=false";
          this.gf.RequestApi("GET", url, {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
            }, {}, "homeflight", "showCalendarPrice").then((data) =>{
              if(data){
                let key = "listHotDealCalendar_"+obj.departCode+"_"+obj.arrivalCode;
                this.storage.set(key, data);
                if(data && data.departs && data.departs.length >0){
  
                  if(obj.roundTrip){//2 chiều
                      this.renderCalenderPrice(1, data.departs, data.arrivals);
                  }else{//1 chiều
                    this.renderCalenderPrice(2, data.departs, null);
                  }
                }
              }
            })
        }
      }
  
      renderCalenderPrice(type, departs, arrivals){
        var se = this;
        let obj= se._flightService.objSearch;
        try {
          if($('.month-box').length >0){
            let diffday =moment(obj.returnDate).diff(obj.departDate, "days");
            for (let index = 0; index < $('.month-box').length; index++) {
              const elementMonth = $('.month-box')[index];
              let objtextmonth = elementMonth.children[0].textContent.replace('Tháng ','');
              let monthstartdate:any = objtextmonth.trim().split(",")[0];
              let yearstartdate:any = objtextmonth.trim().split(",")[1];
              let textmonth = moment(new Date(yearstartdate, monthstartdate - 1, 1)).format('YYYY-MM');
              
              if(objtextmonth && objtextmonth.length >0){
                let listdepartinmonth = departs.filter((item) => { return moment(item.departTime).format('YYYY-MM') == textmonth});
                let listreturninmonth:any;
                if(obj.roundTrip){
                  listreturninmonth = arrivals.filter((item) => { return moment(item.departTime).format('YYYY-MM') == textmonth});
                }
                
                let listdayinmonth = elementMonth.children[1].children[0].children[0].children;
                if(listdayinmonth && listdayinmonth.length >0){
                    for (let j = 0; j < listdayinmonth.length; j++) {
                      const elementday = listdayinmonth[j];
                      if(elementday && elementday.textContent){
                        let fday:any = elementday.textContent;
                        let fromdate = moment(new Date(yearstartdate, monthstartdate - 1, fday)).format('YYYY-MM-DD');
                        let todate = moment(fromdate).add(diffday ,'days').format('YYYY-MM-DD');
                        if(fromdate){
                            if(type ==1){
                              let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                              let minreturnvalue = Math.min(...listreturninmonth.map(o => o.price));
                              let minvalue = mindepartvalue + minreturnvalue;
  
                              let pricefromdate =0;
                              let itemfromdate = listdepartinmonth.filter((d)=>{ return moment(d.departTime).format('YYYY-MM-DD') == fromdate });
                              if(itemfromdate && itemfromdate.length >0){
                                pricefromdate = itemfromdate[0].price;
                              }
                              let pricetodate =0;
                              let itemtodate = listreturninmonth.filter((d)=>{ return moment(d.departTime).format('YYYY-MM-DD') == todate });
                              if(itemtodate && itemtodate.length >0){
                                pricetodate = itemtodate[0].price;
                              }
                              
                              if(pricefromdate && pricetodate){
                                let totalpriceitem = pricefromdate + pricetodate;
                                let totalprice = (totalpriceitem)/1000 >= 1000 ? se.gf.convertNumberToString( Math.round(totalpriceitem/1000)) : Math.round((totalpriceitem/1000));
                                totalprice = totalprice +"K";
                                //giá min
                                if(minvalue == totalpriceitem){
                                  $(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled min-price'>${totalprice}</span>`);
                                }else{
                                  $(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled'>${totalprice}</span>`);
                                }
                                
                              }
                            }else{
                              let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                              let minvalue = mindepartvalue;
  
                              let pricefromdate =0;
                              let itemfromdate = listdepartinmonth.filter((d)=>{ return moment(d.departTime).format('YYYY-MM-DD') == fromdate });
                              if(itemfromdate && itemfromdate.length >0){
                                pricefromdate = itemfromdate[0].price;
                              }
  
                              let totalprice = pricefromdate/1000 >= 1000 ? se.gf.convertNumberToString( Math.round(pricefromdate / 1000)) : Math.round(pricefromdate / 1000);
                                totalprice = totalprice +"K";
                              if(pricefromdate){
  
                                //giá min
                                if(minvalue == pricefromdate){
                                  $(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled min-price'>${totalprice}</span>`);
                                }else{
                                  $(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled'>${totalprice}</span>`);
                                }
                                
                              }
                            }
                        }
                      }
                      
                    }
                }
                
              }
            }
            if(this.showlowestprice){
              $('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
            }else{
              $('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
            }
          }
        } catch (error) {
          console.log('Lỗi jquery khi show lịch giá rẻ: '+ error);
        }
        
        
      }
  
      showCalendarCinCout(){
        var se = this;
          if($('.div-show-calendar-cincout').hasClass('calendar-visible')){
            $('.div-show-calendar-cincout').removeClass('calendar-visible').addClass('calendar-disabled');
          }else{
            $('.div-show-calendar-cincout').removeClass('calendar-disabled').addClass('calendar-visible');
          }
      }

    async showPromo(item){
        let actionSheet = await this.actionsheetCtrl.create({
          cssClass: item.promotions[0].promotionContent.length >= 380 ? 'action-sheets-flight-promo height-194' : 'action-sheets-flight-promo',
          header: item.promotions[0].promotionNote,
          animated: false,
          mode: 'md',
          buttons: [
            {
              text: item.promotions[0].promotionContent
            }
          ],
          });
        
          actionSheet.present();
          $('.action-sheets-flight-promo').append("<div class='div-close-promo'><img src='./assets/ic_close_w.svg'></div>");

          $('.div-close-promo').click(()=>{
            actionSheet.dismiss();
            $('.div-close-promo')[0].style.display = 'none';
            
          })
      }

      async openFlightSelectTimePriority(){
        var se = this;
        if(!se.loadpricedone){
          se.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
          return;
        }
        setTimeout(()=>{
          se._flightService.itemAllFlightCount.emit(this.listDepart.length + this.listReturn.length);
        },350)
        
        const modal: HTMLIonModalElement =
        await se.modalCtrl.create({
          component: FlightselecttimepriorityPage,
        });
        modal.present();

        modal.onDidDismiss().then((data: OverlayEventDetail) => {
          if(data && data.data){
            let obj = this._flightService.objSearch;
            
            if(obj){
              obj.timeDepartPriority = data.data.timeDepartPriority;
              obj.timeReturnPriority = data.data.timeReturnPriority;
              this.zone.run(()=>{
                this.resetValue();
              })
             
              this.loadFlightData(obj, true);
              //obj.timeDepartPriority ? obj.timeDepartPriority : "") : obj.timeReturnPriority ? obj.timeReturnPriority
            }
          }
        })
    }
}
