import { SearchHotel, ValueGlobal } from './../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import * as moment from 'moment';
import { NavController, ModalController, Platform ,AlertController} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { flightService } from '../providers/flightService';
import { GlobalFunction } from '../providers/globalfunction';
import { FlightBookingDetailsPage } from '../flightbookingdetails/flightbookingdetails.page';
import { FlightquickbackPage } from '../flightquickback/flightquickback.page';
import { CustomAnimations } from '../providers/CustomAnimations';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
@Component({
  selector: 'app-flightpaymentdone',
  templateUrl: './flightpaymentdone.page.html',
  styleUrls: ['./flightpaymentdone.page.scss'],
})
export class FlightpaymentdonePage implements OnInit {
  event;
  code="";startdate;enddate;_email="";stt;total;text;isDinner
  bookingCode: any;
  bookingFlight: any;
  pacificVNA: string = "";
  pacificVNAReturn: string="";listDiChung: any = "";
  checkInDisplayDC: string;
  checkOutDisplayDC: string;checkreview
  constructor(private activatedRoute: ActivatedRoute,public _flightService: flightService,public alertCtrl: AlertController, private launchReview: LaunchReview,
    private navCtrl:NavController, public searchhotel: SearchHotel,public storage: Storage, private zone: NgZone,
    public valueGlobal: ValueGlobal,
    public gf: GlobalFunction,
    private modalCtrl: ModalController,
    private fb: Facebook,
    private _platform: Platform,
    private _calendar: Calendar) { 
      if(this._flightService.itemFlightCache && this._flightService.itemFlightCache.pnr){
        this.total = this._flightService.itemFlightCache.totalPrice;
        this._email = this._flightService.itemFlightCache.email;
        this.bookingCode =  this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
        this.bookingFlight = this._flightService.itemFlightCache;
      }
      this.storage.get('checkreview').then(checkreview => {
        if (checkreview==0) {
          this.checkreview=0;
        }else
        {
          this.checkreview=checkreview;
        }
      })
      
    }

 
  ngOnInit() {
    
  }

  async ionViewWillEnter(){
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.startdate = moment(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
    this.enddate = moment(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
    this.stt = this._flightService.itemFlightCache.ischeckpayment;

    let dataSummary = await se.gf.getSummaryBooking(se._flightService.itemFlightCache);
    console.log(dataSummary);
    let date = dataSummary.periodPaymentDate;
    if(date){
      this.text= moment(date).format("HH:mm") + " " + this.gf.getDayOfWeek(date).dayname +", "+ moment(date).format("DD") + " thg " + moment(date).format("MM");
    }

    if(this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.operatedBy){
      this.pacificVNA = this._flightService.itemFlightCache.departFlight.operatedBy;
    }

    if(this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.operatedBy){
      this.pacificVNAReturn = this._flightService.itemFlightCache.returnFlight.operatedBy;
    }
    var se = this;
    //se.gf.googleAnalytionCustom('ecommerce_purchase',{item_category:'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, value: se._flightService.itemFlightCache.totalPrice ,currency: "VND"});
    if( this._flightService.itemFlightCache.roundTrip){
      this.gf.googleAnalytionCustom('purchase', { items: [ 
        { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber},
        { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.returnCode, destination: se._flightService.itemFlightCache.departCode, flight_number: se._flightService.itemFlightCache.returnFlight.flightNumber}
      ] , value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
    }else{
      this.gf.googleAnalytionCustom('purchase', { items: [ { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber}] , value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
      }

      se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'flight'  ,'fb_content_id': 'flightpaymentdone','fb_num_items': 1, 'fb_value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0) ,  'fb_currency': 'VND' ,
            'origin_airport' : se._flightService.itemFlightCache.departFlight.fromPlaceCode  ,
            'destination_airport': se._flightService.itemFlightCache.departFlight.toPlaceCode,
            'departing_departure_date': se._flightService.itemFlightCache.checkInDate ,'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate,'num_adults': se._flightService.itemFlightCache.adult,'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0,'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant :0,
            'value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0) ,  'currency': 'VND'  }, 
            (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToFloat(se._flightService.itemFlightCache.totalPrice) : 0));
       
            let flightItem = se._flightService.itemFlightCache;
  }

  addToCalendar(){
    let se = this;
    if(se._platform.is("cordova")){
      let itemflight = se._flightService.itemFlightCache;
      
      se.checkExistCalendarName(itemflight, true);
      if(itemflight.roundTrip){
        setTimeout(()=> {
          se.checkExistCalendarName(itemflight, false);
        },300)
        
      }
    }
  }

  createCalendar(itemflight, isdepart, createOrModify){
      let se = this;
      let calOptions = se._calendar.getCalendarOptions();
      
      let strmess = `Mã đặt chỗ: `+ ( isdepart ? (itemflight.dataSummaryBooking && itemflight.dataSummaryBooking.departFlight ? itemflight.dataSummaryBooking.departFlight.atBookingCode : '') : (itemflight.dataSummaryBooking && itemflight.dataSummaryBooking.returnFlight ? itemflight.dataSummaryBooking.returnFlight.atBookingCode : '') ) +`
      
Giờ ra tàu bay: `+ (isdepart ? (moment(itemflight.departFlight.departTime).format("HH") + "h"+moment(itemflight.departFlight.departTime).format("mm") ) : (moment(itemflight.returnFlight.departTime).format("HH") + "h"+moment(itemflight.returnFlight.departTime).format("mm") ) ) +
`	
      
Hành khách:

`;
//Người lớn
itemflight.adults.forEach((elementA,index) => {
  if(index !=0){
    strmess+=`

`;
  }
  strmess+= index+1 + ". " + elementA.genderdisplay + " " + elementA.name;
  //chuyến đi
  if(isdepart && elementA.ancillaryJson){
    let objjson = JSON.parse(elementA.ancillaryJson);
    if(objjson && objjson.length >0){
     
      objjson.forEach((elementAncillary, indexanci) => {
        if (elementAncillary.Type != "Transfer") {
          strmess+= " | ";
          strmess += ( elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + ( elementAncillary.Type == "Baggage" ? elementAncillary.Value+ 'kg' : elementAncillary.Value ) + (indexanci != objjson.length -1 ? " | " : '');
        }
        
      });
    }
  }
  //chuyến về
  if(!isdepart && elementA.ancillaryReturnJson){
    let objjson = JSON.parse(elementA.ancillaryReturnJson);
    if(objjson && objjson.length >0){
    
      objjson.forEach((elementAncillary, indexanci) => {
        if (elementAncillary.Type != "Transfer") {
          strmess+= " | ";
          strmess += ( elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + ( elementAncillary.Type == "Baggage" ? elementAncillary.Value+ 'kg' : elementAncillary.Value ) + (indexanci != objjson.length -1 ? " | " : '');
        }
        
      });
    }
  }
});
//trẻ em
itemflight.childs.forEach((elementC,index) => {
    strmess+=`

`;
  strmess+= (index+1+ itemflight.adults.length) + ". " + elementC.genderdisplay + " " + elementC.name;
  if(isdepart && elementC.ancillaryJson){
    let objjson = JSON.parse(elementC.ancillaryJson);
    if(objjson && objjson.length >0){
      strmess+= " | ";
      objjson.forEach((elementAncillary, indexanci) => {
        strmess += ( elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + ( elementAncillary.Type == "Baggage" ? elementAncillary.Value+ 'kg' : elementAncillary.Value ) + (indexanci != objjson.length -1 ? " | " : '');
      });
    }
  }

  //chuyến về
  if(!isdepart && elementC.ancillaryReturnJson){
    let objjson = JSON.parse(elementC.ancillaryReturnJson);
    if(objjson && objjson.length >0){
      strmess+= " | ";
      objjson.forEach((elementAncillary, indexanci) => {
        strmess += ( elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + ( elementAncillary.Type == "Baggage" ? elementAncillary.Value+ 'kg' : elementAncillary.Value ) + (indexanci != objjson.length -1 ? " | " : '');
      });
    }
  }
});
strmess+=`

`;
//Check nếu có items ks thì add thêm thông tin ks
if(itemflight.objHotelCitySelected){
  strmess += `
Khách sạn:`  + itemflight.objHotelCitySelected.HotelName +`
  
Tên phòng: ` + itemflight.objHotelCitySelected.RoomName + `
    
Khách hàng: ` + itemflight.hoten;
  
strmess += `
    
`;
}

if(itemflight.childs && itemflight.childs.length >0){
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của "+ itemflight.childs.map((c)=> {return c.name}).join(', ') +".";
}else{
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân."
}
strmess+=`

`;
if (this._flightService.itemFlightCache.DICHUNGParam) {
  se.listDiChung=this._flightService.itemFlightCache.DICHUNGParam;
  this.checkInDisplayDC = this.bookingFlight.checkInDisplaysort
        if(this.bookingFlight && this.bookingFlight.returnFlight){
          this.checkOutDisplayDC = this.bookingFlight.checkOutDisplaysort
        }
  if (se._flightService.itemFlightCache.departCity && se.listDiChung.PhaseGo) {
    strmess += `Xe đưa đón tại ` +se._flightService.itemFlightCache.departCity +`
`+se.checkInDisplayDC+`     `+ se.listDiChung.PhaseGo.pickUpTime.text +`     Chiều đi`
  

}

if (se._flightService.itemFlightCache.departCity && se.listDiChung.PhaseGo_RoundTrip) {
  strmess+=`

`;
  strmess += `Xe đưa đón tại ` +se._flightService.itemFlightCache.departCity +`
`+se.checkOutDisplayDC+`     `+ se.listDiChung.PhaseGo_RoundTrip.pickUpTime.text +`     Chiều về`


}

if (se._flightService.itemFlightCache.returnCity && se.listDiChung.PhaseReturn) {
  strmess+=`

`;
  strmess += `Xe đưa đón tại ` +se._flightService.itemFlightCache.returnCity +`
`+se.checkInDisplayDC+`     `+ se.listDiChung.PhaseReturn.pickUpTime.text +`     Chiều đi`


}
if (se._flightService.itemFlightCache.returnCity && se.listDiChung.PhaseReturn_RoundTrip) {
  strmess+=`

`;
  strmess += `Xe đưa đón tại ` +se._flightService.itemFlightCache.returnCity +`
`+se.checkOutDisplayDC+`     `+ se.listDiChung.PhaseReturn_RoundTrip.pickUpTime.text +`     Chiều về`


}
  }
  
      calOptions.firstReminderMinutes = 120; 
      calOptions.calendarName = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " +(isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment(itemflight.returnFlight.departTime).format('DD/MM/YYYY') );
      calOptions.calendarId = null; 
      let event = { 
        title: (isdepart ? itemflight.departCity : itemflight.returnCity) + "  ✈  " +(isdepart ? itemflight.returnCity : itemflight.departCity) + " ("+(isdepart ? itemflight.departFlight.flightNumber : itemflight.returnFlight.flightNumber) +")", 
        location: (isdepart ? itemflight.departAirport : itemflight.returnAirport), 
        message: strmess, 
        startDate: (isdepart ? itemflight.departFlight.departTime : itemflight.returnFlight.departTime) , 
        endDate: (isdepart ? itemflight.departFlight.landingTime : itemflight.returnFlight.landingTime), 
        calOptions 
      };

      se._calendar.hasReadWritePermission().then((allow) => {
        // let sdate = new Date(new Date(event.startDate).getDate() + (new Date(event.startDate).getTimezoneOffset() * 60 * 1000)),
        //     edate = new Date(new Date(event.endDate).getDate() + (new Date(event.endDate).getTimezoneOffset() * 60 * 1000));
        let sdate = new Date(event.startDate),
        edate = new Date(event.endDate);
        if(allow){  
          if(createOrModify){//true - tạo mới
            se.gf.showLoadingwithtimeout();
            if(!se.checkExistCalendar(event.calOptions.calendarName)){
              se._calendar.createEventWithOptions( event.title, event.location, event.message, sdate, edate, event.calOptions).then(()=>{
                if( (itemflight.roundTrip && !isdepart) || !itemflight.roundTrip ){
                  se.zone.run(()=>{
                    se.gf.hideLoading();
                    se.clearItemCache();
                        
                    se._flightService.itemMenuFlightClick.emit(2);
                    se.next();
                  })
                  
                    se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(()=>{
                    });
                  
                }
                
              }).catch(()=>{
                se.gf.hideLoading();
              });
            }
            else{
              se.gf.showToastWarning("Đã có lịch hẹn tương tự! Vui lòng thử lại sau.");
              se.gf.hideLoading();
            }
          }else{
            se.clearItemCache();
            se._flightService.itemMenuFlightClick.emit(2);
            se.next();
          }
        }else{
          se._calendar.requestReadWritePermission().then(()=>{
           
            if(createOrModify){//true - tạo mới
              se.gf.showLoadingwithtimeout();
              if(!se.checkExistCalendar(event.calOptions.calendarName)){
                se._calendar.createEventWithOptions( event.title, event.location, event.message, sdate, edate, event.calOptions).then(()=>{
                  if( (itemflight.roundTrip && !isdepart) || !itemflight.roundTrip ){
                    se.zone.run(()=>{
                      se.gf.hideLoading();
                      se.clearItemCache();
                      
                      se._flightService.itemMenuFlightClick.emit(2);
                      se.next();
                    })
                  
                      se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(()=>{
                       
                      });
                  }
                }).catch(()=>{
                  se.gf.hideLoading();
                });
              }
              else{
                se.gf.showToastWarning("Đã có lịch hẹn tương tự! Vui lòng thử lại sau.");
                se.gf.hideLoading();
              }
            }else{
              se.clearItemCache();
              se._flightService.itemMenuFlightClick.emit(2);
              se.next();
            }
          })
        }
        
      })
  }

  checkExistCalendarName(itemflight, isdepart){
    let se = this;
    let calendarname = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " +(isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment(itemflight.returnFlight.departTime).format('DD/MM/YYYY') );
    se.storage.get('objectflightpaymentbank').then((data)=>{
      if(data){
          let arrobject = JSON.parse(data);
          if(arrobject && arrobject.length >0){
              let objexists = arrobject.filter((item) => {
                return item.resNo == itemflight.pnr.resNo;
              }) 

              if(objexists && objexists.length >0){
                //sửa event
                se.createCalendar(itemflight, isdepart, true)
              }else{
                se.createCalendar(itemflight, isdepart, true);
              }
          }
        }else{
          se.createCalendar(itemflight, isdepart, true);
        }
      })
  }

  next()
  {
    try {
      this.storage.get('objectflightpaymentbank').then((data)=>{
        if(data){
            let arrobject = JSON.parse(data);
            if(arrobject && arrobject.length >0){
              arrobject.push({ resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, totalPrice: this.total, itemFlightCache :this._flightService.itemFlightCache });
            }else{
              arrobject = [];
              arrobject.push({ resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, totalPrice: this.total, itemFlightCache :this._flightService.itemFlightCache });
            }
  
            this.storage.remove('objectflightpaymentbank').then(()=>{
              this.storage.set('objectflightpaymentbank', JSON.stringify(arrobject));
            })
        }else{
          let arr = [];
          arr.push({ resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, totalPrice: this.total, itemFlightCache :this._flightService.itemFlightCache });
          this.storage.set('objectflightpaymentbank', JSON.stringify(arr));
        }
        
      })
    } catch (error) {
      console.log('fail to set storage object')
    }
    this.gf.hideLoading();
    this._flightService.itemTabFlightActive.emit(true);
    this.valueGlobal.backValue = "homeflight";
    //this._flightService.itemFlightMytripRefresh.emit(true);
    this._flightService.itemMenuFlightClick.emit(2);
    this._flightService.bookingCodePayment = this.bookingCode;
    this._flightService.bookingSuccess = true;
    if (this.checkreview == 0) {
      this.showConfirm();
    }
    this.navCtrl.navigateBack('/tabs/tab1');
  }

  async showBooking(){
    var se = this;
    se.clearItemCache();
    se._flightService.itemTabFlightActive.emit(true);
    se._flightService.itemMenuFlightClick.emit(2);
    se._flightService.bookingCodePayment = this.bookingCode;
    se._flightService.bookingSuccess = true;
    se.valueGlobal.backValue = "flightmytrip";
     if (this.checkreview == 0) {
      this.showConfirm();
    }
    se.navCtrl.navigateBack('/tabs/tab1');
      //   const modal: HTMLIonModalElement =
      //   await se.modalCtrl.create({
      //     component: FlightBookingDetailsPage,
      //     componentProps: {
      //       aParameter: true,
      //     },
      //     showBackdrop: true,
      //     backdropDismiss: true,
          
      //     cssClass: "modal-flight-booking-detail"
      //   });
      // modal.present();
  }

  clearItemCache(){
    this._flightService.itemFlightCache = {};
    this._flightService.itemFlightCache.departLuggage = [];
    this._flightService.itemFlightCache.returnLuggage = [];
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
        this._flightService.itemFlightCache.isnewmodelseat = false;
        this._flightService.itemFlightCache.isnewmodelreturnseat = false;
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

  // async checkExistCalendar(name){
  //   let obj = await this._calendar.findAllEventsInNamedCalendar(name).then((success)=>{
  //     debugger
  //   })
  //   //return obj ? true : false;
  //   return false;
  // }
  checkExistCalendar(name){
    var se = this;
    //Cần check lại sau chỗ này
    try {
      se._calendar.findAllEventsInNamedCalendar(name);
    } catch (error) {
      console.log(error);
      return true;
    }
    return false;
  }
  public async showConfirm() {
    this.storage.set("checkreview", 1);
    let alert = await this.alertCtrl.create({
      header: 'Bạn thích iVIVU.com?',
      message: 'Đánh giá ứng dụng trên App Store',
      mode: "ios",
      cssClass: 'cls-reivewapp',
      buttons: [
        {
          text: 'Hủy',
          handler: () => {
          }
        },
        {
          text: 'Đánh giá',
          role: 'OK',
          handler: () => {
            this.launchReview.launch()
              .then(() => console.log('Successfully launched store app'));
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss().then((data) => {
    })
  }
}
