import { NavController, Platform,AlertController } from '@ionic/angular';
import { SearchHotel, ValueGlobal } from './../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import { flightService } from './../providers/flightService';
import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { GlobalFunction } from '../providers/globalfunction';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
@Component({
  selector: 'app-flightpaymentdonepayoo',
  templateUrl: './flightpaymentdonepayoo.page.html',
  styleUrls: ['./flightpaymentdonepayoo.page.scss'],
})
export class FlightpaymentdonepayooPage implements OnInit {
  event;
  total;_email;code;stt;startdate;enddate;PeriodPaymentDate;qrimg;
  PeriodPaymentHour;BillingCode
  isDinner: any=false;checkreview
  constructor(private activatedRoute: ActivatedRoute,public storage: Storage,public _flightService:flightService, 
    private navCtrl:NavController, public searchhotel: SearchHotel, private zone: NgZone,private safariViewController: SafariViewController,
    public valueGlobal: ValueGlobal,
    public gf: GlobalFunction,
    private fb: Facebook,
    private _platform: Platform,
    private _calendar: Calendar,public alertCtrl: AlertController, private launchReview: LaunchReview) { 
    this.total=this._flightService.itemFlightCache.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this._email = this._flightService.itemFlightCache.email;
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
    this.code = this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode :this.activatedRoute.snapshot.paramMap.get('code');
    this.startdate = moment(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
    this.enddate = moment(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
    this.stt = this._flightService.itemFlightCache.ischeckpayment;
    if (this.stt=='0') {
      this.BillingCode=this._flightService.itemFlightCache.BillingCode;
      this.qrimg=this._flightService.itemFlightCache.qrimg;
    }
    if(this._flightService.itemFlightCache.pnr.periodPaymentDate){
      this.PeriodPaymentDate=moment(this._flightService.itemFlightCache.pnr.periodPaymentDate).format('DD/MM/YYYY');
      this.PeriodPaymentHour=moment(this._flightService.itemFlightCache.pnr.periodPaymentDate).format('HH:mm');
    }
    
    
  }

  ionViewWillEnter(){
    let se = this;
    if( se._flightService.itemFlightCache.roundTrip){
      se.gf.googleAnalytionCustom('purchase', { items: [ 
        { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber},
        { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.returnCode, destination: se._flightService.itemFlightCache.departCode, flight_number: se._flightService.itemFlightCache.returnFlight.flightNumber}
      ] , value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
    }else{
      se.gf.googleAnalytionCustom('purchase', { items: [ { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber}] , value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
    }

    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'flight'  ,'fb_content_id': 'flightpaymentdonepayoo','fb_num_items': 1, 'fb_value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0) ,  'fb_currency': 'VND' ,
    'origin_airport' : se._flightService.itemFlightCache.departFlight.fromPlaceCode ,
    'destination_airport': se._flightService.itemFlightCache.departFlight.toPlaceCode,
    'departing_departure_date': se._flightService.itemFlightCache.checkInDate ,'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate,'num_adults': se._flightService.itemFlightCache.adult,'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0,'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant :0,
    'value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0) ,  'currency': 'VND' }, se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToFloat(se._flightService.itemFlightCache.totalPrice) : 0);
 
    let flightItem = se._flightService.itemFlightCache;
  }

  addToCalendar(){
    let se = this;
    if(se._platform.is("cordova")){
      let itemflight = this._flightService.itemFlightCache;
      
      se.checkExistCalendarName(itemflight, true);
      if(itemflight.roundTrip){
        setTimeout(()=> {
          se.checkExistCalendarName(itemflight, false);
        },300)
        
      }
    }

    // setTimeout(() => {
    //   se._flightService.itemMenuFlightClick.emit(2);
    //   se.next();
    // },500)
    
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
      strmess+= " | ";
      objjson.forEach((elementAncillary, indexanci) => {
        strmess += ( elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + ( elementAncillary.Type == "Baggage" ? elementAncillary.Value+ 'kg' : elementAncillary.Value ) + (indexanci != objjson.length -1 ? " | " : '');
      });
    }
  }
  //chuyến về
  if(!isdepart && elementA.ancillaryReturnJson){
    let objjson = JSON.parse(elementA.ancillaryReturnJson);
    if(objjson && objjson.length >0){
      strmess+= " | ";
      objjson.forEach((elementAncillary, indexanci) => {
        strmess += ( elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + ( elementAncillary.Type == "Baggage" ? elementAncillary.Value+ 'kg' : elementAncillary.Value ) + (indexanci != objjson.length -1 ? " | " : '');
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
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của "+ itemflight.childs.map((c)=> {return c.name}).join(', ')+".";
}else{
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân."
}

      calOptions.firstReminderMinutes = 120; 
      calOptions.calendarName = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " +(isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment(itemflight.returnFlight.departTime).format('DD/MM/YYYY') );
      calOptions.calendarId = 1; 
      let event = { 
        title: (isdepart ? itemflight.departCity : itemflight.returnCity) + "  ✈  " +(isdepart ? itemflight.returnCity : itemflight.departCity) + " ("+(isdepart ? itemflight.departFlight.flightNumber : itemflight.returnFlight.flightNumber) +")", 
        location: (isdepart ? itemflight.departAirport : itemflight.returnAirport), 
        message: strmess, 
        startDate: (isdepart ? itemflight.departFlight.departTime : itemflight.returnFlight.departTime) , 
        endDate: (isdepart ? itemflight.departFlight.landingTime : itemflight.returnFlight.landingTime), 
        calOptions 
      };
      
      se._calendar.hasReadWritePermission().then((allow) => {
        // let sdate = new Date( new Date(event.startDate).getTime() + (new Date(event.startDate).getTimezoneOffset() * 60 * 1000)),
        //     edate = new Date(new Date(event.endDate).getTime() + (new Date(event.endDate).getTimezoneOffset() * 60 * 1000));
        let sdate = new Date(event.startDate),
        edate = new Date(event.endDate);
        if(allow){  
          if(createOrModify){//true - tạo mới
            se.gf.showLoadingwithtimeout();
            se._calendar.createEventWithOptions( event.title, event.location, event.message, sdate, edate, event.calOptions).then(()=>{
              if( (itemflight.roundTrip && !isdepart) || !itemflight.roundTrip ){
                se.zone.run(()=>{
                  se.gf.hideLoading();
                  se._flightService.itemFlightCache = {};
                      
                  se._flightService.itemMenuFlightClick.emit(2);
                  se.next();
                })
                
                  se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(()=>{
                  });
              }
              
            });
          }else{
            se._flightService.itemFlightCache = {};
            se._flightService.itemMenuFlightClick.emit(2);
            se.next();
          }
        }else{
          se._calendar.requestReadWritePermission().then(()=>{
           
            if(createOrModify){//true - tạo mới
              se.gf.showLoadingwithtimeout();
              se._calendar.createEventWithOptions( event.title, event.location, event.message, sdate, edate, event.calOptions).then(()=>{
                if( (itemflight.roundTrip && !isdepart) || !itemflight.roundTrip ){
                  se.zone.run(()=>{
                    se.gf.hideLoading();
                    se._flightService.itemFlightCache = {};
                        
                        se._flightService.itemMenuFlightClick.emit(2);
                        se.next();
                  })
                  
                    se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(()=>{
                    });
                }
              });
            }else{
              se._flightService.itemFlightCache = {};
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
    this.storage.get('objectflightpaymentbank').then((data)=>{
      if(data){
          let arrobject = JSON.parse(data);
          if(arrobject && arrobject.length >0){
              let objexists = arrobject.filter((item) => {
                return item.resNo == itemflight.pnr.resNo;
              }) 

              if(objexists && objexists.length >0){
                //sửa event
                se.createCalendar(itemflight, isdepart, false)
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
    this.gf.hideLoading();
    this._flightService.itemFlightCache = {};
    this._flightService.itemTabFlightActive.emit(true);
    this.valueGlobal.backValue = "homeflight";
    if (this.checkreview==0) {
      this.showConfirm();
    }
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  openWebpage() {
    var url="https://payoo.vn/mapv2/public/index.php?verify=true";
    this.safariViewController.isAvailable()
    .then((available: boolean) => {
      if (available) {
        this.safariViewController.show({
          url: url,
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#23BFD8'
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') 
            {
            }
            
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    })
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
