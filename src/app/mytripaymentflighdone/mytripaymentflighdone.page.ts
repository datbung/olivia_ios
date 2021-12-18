import { Component, OnInit,NgZone } from '@angular/core';
import { ActivityService } from './../providers/globalfunction';
import {  ValueGlobal } from './../providers/book-service';
import { NavController,Platform } from '@ionic/angular';
import * as moment from 'moment';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Storage } from '@ionic/storage';
import { flightService } from '../providers/flightService';
import { GlobalFunction } from '../providers/globalfunction';
import { C } from './../providers/constants';
import * as request from 'requestretry';
import { MytripService } from '../providers/mytrip-service.service';

@Component({
  selector: 'app-mytripaymentflighdone',
  templateUrl: './mytripaymentflighdone.page.html',
  styleUrls: ['./mytripaymentflighdone.page.scss'],
})
export class MytripaymentflighdonePage implements OnInit {
  totalpricedisplay;bookingCode;_email="";
  constructor(public valueGlobal: ValueGlobal,public activityService: ActivityService,private navCtrl:NavController,
    private _platform: Platform,
    private _calendar: Calendar,
    private _flightService: flightService,
    public gf: GlobalFunction,
    private zone: NgZone,
    public storage: Storage,
    public _mytripservice: MytripService) { 
    this.totalpricedisplay=this.activityService.objPaymentMytrip.trip.priceShow;
    this.bookingCode=this.activityService.objPaymentMytrip.trip.booking_id;
    this._email=this.activityService.objPaymentMytrip.trip.cus_email;

    //this.storage.remove("listAirport");
    this.storage.get("listAirport").then((data) => {
      if (!data) {
        this.loadLocation().then((data) => {
          this._flightService.listAirport = data;
        });
      } else {
        this._flightService.listAirport = data;
      }
    })
  }

  ngOnInit() {
  }

  addToCalendar(){
    let se = this;
    if(se._platform.is("cordova")){
      let itemflight = se.activityService.objPaymentMytrip.trip;
      itemflight.isRoundTrip = itemflight.bookingsComboData && itemflight.bookingsComboData.length >1 && itemflight.bookingsComboData[1].airlineCode ? true : false;
      //se.checkExistCalendarName(itemflight, true);
      se.createCalendar(itemflight, true, true);
      if(itemflight.isRoundTrip){
        setTimeout(()=> {
          //se.checkExistCalendarName(itemflight, false);
          se.createCalendar(itemflight, false, true);
        },300)
        
      }
    }
  }

  createCalendar(itemflight, isdepart, createOrModify){
      let se = this;
      let calOptions = se._calendar.getCalendarOptions();
      
      let strmess = `Mã đặt chỗ: `+ ( isdepart ? (itemflight.bookingsComboData[0] && itemflight.bookingsComboData[0].ticketCode ? itemflight.bookingsComboData[0].ticketCode : '') : (itemflight.bookingsComboData[1] && itemflight.bookingsComboData[1].ticketCode ? itemflight.bookingsComboData[1].ticketCode : '') ) +`
      
Giờ ra tàu bay: `+ (isdepart ? (itemflight.bookingsComboData[0].departureTime.replace(':','h') ) : (itemflight.bookingsComboData[1].departureTime.replace(':','h') ) ) +
`	
      
Hành khách:

`;

//chuyến về
if(!isdepart && itemflight.isRoundTrip){
  itemflight.bookingsComboData[1].passengers.forEach((elementA,index) => {
    if(index !=0){
      strmess+=`
  
  `;
  }
  strmess+= index+1 + ". " + elementA.gender + " " + elementA.name;
            if(elementA.hanhLy || elementA.seatNumber){
                if(elementA.hanhLy){
                  strmess+= " | ";
                  strmess += "Hành lý" + ": " + elementA.hanhLy;
                }
    
                if(elementA.seatNumber){
                  strmess+= " | ";
                  strmess +=  "Chỗ ngồi" + ": " + elementA.seatNumber;
                }
            }
  });
}else{
  itemflight.bookingsComboData[0].passengers.forEach((elementA,index) => {
    if(index !=0){
      strmess+=`
  
  `;
    }
    strmess+= index+1 + ". " + elementA.gender + " " + elementA.name;
    //chuyến đi
    if(isdepart){
      if(elementA.hanhLy || elementA.seatNumber){
        
        if(elementA.hanhLy){
          strmess+= " | ";
          strmess += "Hành lý" + ": " + elementA.hanhLy;
        }
  
        if(elementA.seatNumber){
          strmess+= " | ";
          strmess +=  "Chỗ ngồi" + ": " + elementA.seatNumber;
        }
      }
    }
  });
}
strmess+=`

`;
//Check nếu có items ks thì add thêm thông tin ks
if(itemflight.booking_type == "CB_FLY_HOTEL"){
  strmess += `
Khách sạn:`  + itemflight.hotel_name +`
  
Tên phòng: ` + itemflight.roomCountNameStr + `
    
Khách hàng: ` + itemflight.cus_name;
  
strmess += `
    
`;
}

itemflight.bookingsComboData[0].passengers.forEach(elementlug => {
  if(elementlug.dob){
    let arr = elementlug.dob.split('/');
    let newdob = new Date(arr[2], arr[1]-1, arr[0]);
    let yearold = moment(itemflight.checkInDate).diff(moment(newdob), 'years');
  
    elementlug.isAdult = yearold > 12 ? true : false;
  }else{
    elementlug.isAdult = true;
  }
});
let itemchild = itemflight.bookingsComboData[0].passengers.filter((item) => {return !item.isAdult})
if(itemchild && itemchild.length >0){
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của "+ itemflight.bookingsComboData[0].passengers.map((c)=> {return c.name}).join(', ') +".";
}else{
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân."
}
let dtime = itemflight.checkInDate, rtime = itemflight.checkOutDate;
let ddepaturetime = itemflight.checkInDate, darrivaltime = itemflight.checkInDate,
rdepaturetime = itemflight.checkInDate, rarrivaltime = itemflight.checkInDate;

if(itemflight.checkInDate && itemflight.checkInDate.indexOf('T') != -1){
    let arrdate = itemflight.checkInDate.split('T');
    ddepaturetime = arrdate[0] + "T"+ itemflight.bookingsComboData[0].departureTime +":00";
    darrivaltime = arrdate[0] + "T"+ itemflight.bookingsComboData[0].arrivalTime +":00";
}
if(!isdepart && itemflight.isRoundTrip && itemflight.checkOutDate && itemflight.checkOutDate.indexOf('T') != -1){
  let arrdate = itemflight.checkOutDate.split('T');
  rdepaturetime = arrdate[0] + "T"+ itemflight.bookingsComboData[1].departureTime +":00";
  rarrivaltime = arrdate[0] + "T"+ itemflight.bookingsComboData[1].arrivalTime +":00";
}

      calOptions.firstReminderMinutes = 120; 
      calOptions.calendarName = "Chuyến đi " + (isdepart ? itemflight.bookingsComboData[0].flightFrom : itemflight.bookingsComboData[0].flightTo ) + "  -  " +(isdepart ? itemflight.bookingsComboData[0].flightTo : itemflight.bookingsComboData[0].flightFrom) + ", " + (isdepart ? itemflight.bookingsComboData[0].departureDate: itemflight.bookingsComboData[1].departureDate );
      calOptions.calendarId = null; 
      let event = { 
        title: (isdepart ? itemflight.bookingsComboData[0].flightFrom : itemflight.bookingsComboData[0].flightTo) + "  ✈  " +(isdepart ? itemflight.bookingsComboData[0].flightTo : itemflight.bookingsComboData[0].flightFrom) + " ("+(isdepart ? itemflight.bookingsComboData[0].flightNumner : itemflight.bookingsComboData[1].flightNumner) +")", 
        location: (isdepart ? se.getAirportByCode(itemflight.bookingsComboData[0].departCode ) : se.getAirportByCode(itemflight.bookingsComboData[0].arrivalCode )), 
        message: strmess, 
        startDate: (isdepart ? ddepaturetime : rdepaturetime) , 
        endDate: (isdepart ? darrivaltime : rarrivaltime ), 
        calOptions 
      };

      se._calendar.hasReadWritePermission().then((allow) => {
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
                  
                      se._calendar.openCalendar(new Date(itemflight.checkInDate)).then(()=>{
                       
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
    let calendarname = "Chuyến đi " + (isdepart ? itemflight.bookingsComboData[0].flightFrom : itemflight.bookingsComboData[1].flightFrom) + "  -  " +(isdepart ? itemflight.bookingsComboData[0].flightTo : itemflight.bookingsComboData[1].flightTo) + ", " + (isdepart ? itemflight.bookingsComboData[0].departureDate : itemflight.bookingsComboData[1].departureDate );
    se.storage.get('objectflightpaymentbank').then((data)=>{
      if(data){
          let arrobject = JSON.parse(data);
          if(arrobject && arrobject.length >0){
              let objexists = arrobject.filter((item) => {
                return item.resNo == itemflight.booking_id;
              }) 

              // if(objexists && objexists.length >0){
              //   //sửa event
              //   se.createCalendar(itemflight, isdepart, false)
              // }else{
              //   se.createCalendar(itemflight, isdepart, true);
              // }
              se.createCalendar(itemflight, isdepart, true);
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
              arrobject.push({ resNo: this.bookingCode, checkInDate: this.activityService.objPaymentMytrip.trip.checkInDate, checkOutDate: this.activityService.objPaymentMytrip.trip.checkOutDate, totalPrice: this.totalpricedisplay, itemFlightCache :this.activityService.objPaymentMytrip.trip });
            }else{
              arrobject = [];
              arrobject.push({ resNo: this.bookingCode, checkInDate: this.activityService.objPaymentMytrip.trip.checkInDate, checkOutDate: this.activityService.objPaymentMytrip.trip.checkOutDate, totalPrice: this.totalpricedisplay, itemFlightCache :this.activityService.objPaymentMytrip.trip });
            }
  
            this.storage.remove('objectflightpaymentbank').then(()=>{
              this.storage.set('objectflightpaymentbank', JSON.stringify(arrobject));
            })
        }else{
          let arr = [];
          arr.push({ resNo: this.bookingCode, checkInDate: this.activityService.objPaymentMytrip.trip.checkInDate, checkOutDate: this.activityService.objPaymentMytrip.trip.checkOutDate, totalPrice: this.totalpricedisplay, itemFlightCache :this.activityService.objPaymentMytrip.trip });
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
    this._mytripservice.orderPageState.emit(1);
    this._flightService.bookingCodePayment = this.bookingCode;
    this._flightService.bookingSuccess = true;
   
    this.navCtrl.navigateBack('/tabs/tab1');
  }

  showQuickBack(){
    
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

  getAirportByCode(code){
    var se = this, res ="";
    if(se._flightService.listAirport && se._flightService.listAirport.length >0){
      let itemmap = se._flightService.listAirport.filter((item) => { return item.code == code});
      res = (itemmap && itemmap.length >0) ? itemmap[0].airport : ""; 
    }
    return res;
  }

  loadLocation() : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      if(se._flightService.listAirport && se._flightService.listAirport.length >1){
        resolve(se._flightService.listAirport);
      }else{
        let urlPath = C.urls.baseUrl.urlFlight + "gate/apiv1/AllPlace?token=3b760e5dcf038878925b5613c32615ea3ds";
        var options = {
          method: 'GET',
          url: urlPath,
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          'headers': {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
          },
        };
    
        request(options, function (error, response, body) {
          if (error) {
            error.page = "searchhotel";
            error.func = "getItems";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            resolve([]);
            throw new Error(error);
          };
          let result = JSON.parse(body);
          if (result && result.length > 0) {
            se.zone.run(() => {
              se._flightService.listAirport = [...result];
              resolve([...result]);
            })
    
          }else{
            resolve([]);
          }
        })
      }
    })
    
  }

  // async checkExistCalendar(name){
  //   let obj = await this._calendar.findAllEventsInNamedCalendar(name);
  //   return obj ? true : false;
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
}
