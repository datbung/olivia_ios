import { GlobalFunction } from './../../providers/globalfunction';
import { NavController, Platform ,ModalController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';
import * as request from 'requestretry';
import { C } from '../../providers/constants';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { flightService } from '../../providers/flightService';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { ValueGlobal } from './../../providers/book-service';
import { FlightquickbackPage } from '../../flightquickback/flightquickback.page';
import { CustomAnimations } from '../../providers/CustomAnimations';
import { Storage } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar/ngx';
@Component({
  selector: 'app-flightinternationalpaymentpayoo',
  templateUrl: './flightinternationalpaymentpayoo.page.html',
  styleUrls: ['./flightinternationalpaymentpayoo.page.scss'],
})
export class FlightInternationalPaymentPayooPage implements OnInit {

  bookingCode;stt;text;qrimg;BillingCode;total;PeriodPaymentDate;textHours
  intervalID: any;
  allowCheck: any = true;
  allowCheckHoldTicket: boolean = true;_email
  constructor(private navCtrl:NavController, public gf: GlobalFunction,
    private activatedRoute: ActivatedRoute,private _flightService: flightService,private safariViewController: SafariViewController,
    private backgroundmode: BackgroundMode,
    private platform: Platform, public valueGlobal: ValueGlobal,private modalCtrl: ModalController,
    private storage: Storage,
    private _platform: Platform,
    private _calendar: Calendar,
    private zone: NgZone) { 

      this.platform.ready().then(()=>{
        this.backgroundmode.on('activate').subscribe(()=>{
            console.log('background mode enabled');
            this.callCheckPayment();
        })
        this.backgroundmode.enable();
      })

      // this.getSummaryBooking(this._flightService.itemFlightCache).then((databkg:any) => {
      //   this._flightService.itemFlightCache.dataSummaryBooking = databkg;
      // })    
    }

  ngOnInit() {
    this.bookingCode = this.activatedRoute.snapshot.paramMap.get('code');
    this.stt= this.activatedRoute.snapshot.paramMap.get('stt');
    this._email = this._flightService.itemFlightCache.email;
    if (this.stt==0) {
      this.BillingCode=this._flightService.itemFlightCache.BillingCode;
    }
    else
    {
      this.qrimg=this._flightService.itemFlightCache.qrimg;
      this.intervalID = setInterval(() => {
            clearInterval(this.intervalID);
            //this.checkqrcode();
            this.callCheckPayment();
      }, 1000 * 5);

      setTimeout(() => {

        clearInterval(this.intervalID);

      }, 60000 * 9.1);
    }
    this.total=this._flightService.itemFlightInternational.fare.price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.textHours = moment(this._flightService.itemFlightCache.periodPaymentDate).format("HH:mm");
    this.PeriodPaymentDate = this._flightService.itemFlightCache.periodPaymentDate ? this.gf.getDayOfWeek(this._flightService.itemFlightCache.periodPaymentDate).dayname + ", " + moment(this._flightService.itemFlightCache.periodPaymentDate).format("DD") + " thg " + moment(this._flightService.itemFlightCache.periodPaymentDate).format("MM") : "";
  }
  goback()
  {
    if (this.stt==1) {
      clearInterval(this.intervalID);
    }
    this.allowCheck = false;
    this.navCtrl.back();
  }
  next()
  {
    var se = this;
    if (se.stt == 0) {
      se.gf.hideLoading();
      se.clearItemCache();
      se._flightService.itemTabFlightActive.emit(true);
      se.valueGlobal.backValue = "homeflight";
      //se._flightService.itemFlightMytripRefresh.emit(true);
      se._flightService.bookingCodePayment = se.bookingCode;
      se._flightService.bookingSuccess = true;
      se.navCtrl.navigateBack('/tabs/tab1');
    }
    else {
      
      clearInterval(this.intervalID);
      se.checkqrcode();
      se.allowCheck = false;
      //se.callCheckPayment();
    }
  }

  checkqrcode()
  {
    var se=this;
    var options = {
      'method': 'GET',
      'url': C.urls.baseUrl.urlFlight+'/gate/apiv1/PaymentCheck?id='+ (se._flightService.itemFlightCache.reservationId ? se._flightService.itemFlightCache.reservationId : se.bookingCode),
      'headers': {
        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8'
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      var rs=JSON.parse(response.body);
      let startDate = moment(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
      let endDate = moment(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
      if (rs.ipnCall == "CALLED_OK") {
         
        clearInterval(this.intervalID);
        se._flightService.itemFlightCache.ischeckpayment= 1;
        se.gf.hideLoading();
        //se.safariViewController.hide();
        clearInterval(se.intervalID);
        se.navCtrl.navigateForward('flightinternationalpaymentdone/'+se.bookingCode+'/'+startDate+'/'+endDate);
      }
      else if(rs.ipnCall == "CALLED_FAIL" && rs.errorCode == '99')//hủy
      {
        se.gf.hideLoading();
        //se.safariViewController.hide();
        clearInterval(se.intervalID);
        se.navCtrl.navigateForward('/flightinternationalpaymenterror');
      }
      else if(rs.ipnCall == "CALLED_TIMEOUT" && rs.errorCode == '253')//case timeout
      {
        se.gf.hideLoading();
        //se.safariViewController.hide();
        clearInterval(se.intervalID);
        se._flightService.paymentError = rs;
        se.navCtrl.navigateForward('/flightinternationalpaymenttimeout');
      }
      else if(rs.ipnCall == "CALLED_FAIL" && rs.errorCode != '99')//hủy
                  {
                    se.gf.hideLoading();
                    //se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se._flightService.paymentError = rs;
                    se.navCtrl.navigateForward('/flightinternationalpaymenttimeout');
                  }
        else{
          se.allowCheck = true;
          se.callCheckPayment();
        }
        
    });
  }

  callCheckPayment(){
    var se = this;
    if(se.allowCheck){
      se.checkPayment();
    }
      
  }

  checkPayment(){
    var se = this;
    
      let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+ (se._flightService.itemFlightCache.reservationId ? se._flightService.itemFlightCache.reservationId : se.bookingCode);
      se.gf.Checkpayment(url).then((data) => {
        var checkpay=JSON.parse(data);
        
        let startDate = moment(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
        let endDate = moment(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
        if (checkpay.ipnCall == "CALLED_OK") {
          
          clearInterval(this.intervalID);
          se._flightService.itemFlightCache.ischeckpayment= 1;
          se.gf.hideLoading();
          //se.safariViewController.hide();
          clearInterval(se.intervalID);
          se.backgroundmode.disable();
          se.navCtrl.navigateForward('flightinternationalpaymentdone/'+se.bookingCode+'/'+startDate+'/'+endDate);
        }
        else if(checkpay.ipnCall == "CALLED_TIMEOUT" || checkpay.ipnCall == "CALLED_FAIL")
        {
          se.gf.hideLoading();
          //se.safariViewController.hide();
          clearInterval(se.intervalID);
          se._flightService.paymentError = checkpay;
          se.navCtrl.navigateForward('/flightinternationalpaymenttimeout');
        }
        else{
          setTimeout(()=>{
            se.callCheckPayment();
          },1000)
        }
      })
    
  }

  openWebpagePayoo() {
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
  clearItemCache() {
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
  async showQuickBack() {
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

if(itemflight.childs && itemflight.childs.length >0){
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của "+ itemflight.childs.map((c)=> {return c.name}).join(', ')+".";
}else{
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân."
}

      calOptions.firstReminderMinutes = 120; 
      calOptions.calendarName = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " +(isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment(itemflight.returnFlight.departTime).format('DD/MM/YYYY') );
      calOptions.calendarId = 1; 
      let event = { title: (isdepart ? itemflight.departCity : itemflight.returnCity) + "  ✈  " +(isdepart ? itemflight.returnCity : itemflight.departCity) + " ("+(isdepart ? itemflight.departFlight.flightNumber : itemflight.returnFlight.flightNumber) +")",
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
}
