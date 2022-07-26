import { Component, OnInit, NgZone } from '@angular/core';
import { SearchHotel, ValueGlobal } from './../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { NavController, ModalController, ToastController, Platform,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { flightService } from '../providers/flightService';
import { GlobalFunction } from '../providers/globalfunction';
import { FlightquickbackPage } from '../flightquickback/flightquickback.page';
import { CustomAnimations } from '../providers/CustomAnimations';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { RoomInfo } from '../providers/book-service';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { voucherService } from '../providers/voucherService';
@Component({
  selector: 'app-flightpaymentdonebank',
  templateUrl: './flightpaymentdonebank.page.html',
  styleUrls: ['./flightpaymentdonebank.page.scss'],
})
export class FlightpaymentdonebankPage implements OnInit {
  event;
  code = ""; startdate; enddate; _email = ""; stt = 0; total; text; isDinner
  bookingCode: any;
  bookingFlight: any;
  pacificVNA: string = "";
  pacificVNAReturn: string = ""; accountNumber = ""; textbank; bankName; paymentbank; url = ""; urlimgbank = "";
  listDiChung: any = "";
  checkInDisplayDC: string;
  checkOutDisplayDC: string;
  checkreview: number;
  constructor(private activatedRoute: ActivatedRoute, public _flightService: flightService,
    private navCtrl: NavController, public searchhotel: SearchHotel, public storage: Storage, private zone: NgZone,
    public valueGlobal: ValueGlobal,
    public gf: GlobalFunction, public Roomif: RoomInfo,
    private modalCtrl: ModalController, private toastCtrl: ToastController, public clipboard: Clipboard,private safariViewController: SafariViewController,
    private fb: Facebook,
    private _platform: Platform,
    private _calendar: Calendar,public alertCtrl: AlertController, private launchReview: LaunchReview,
    public _voucherService: voucherService) { 
      this.accountNumber = this.Roomif.accountNumber;
      this.textbank = this.Roomif.textbank;
      this.bankName = this.Roomif.bankName + " . " + this.Roomif.bankBranch;
      this.paymentbank = this.Roomif.paymentbank;
      this.total = this._flightService.itemFlightCache.totalPriceDisplay;
      this._email = this._flightService.itemFlightCache.email;
      this.bookingCode = this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
      this.bookingFlight = this._flightService.itemFlightCache;
      this.getbank();
      this.storage.get('checkreview').then(checkreview => {
        if (checkreview==0) {
          this.checkreview=0;
        }else
        {
          this.checkreview=checkreview;
        }
      })
      if(this._voucherService.selectVoucher){
        this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
        this._voucherService.selectVoucher = null;
      }
      this._voucherService.publicClearVoucherAfterPaymentDone(1);
      this._flightService.itemFlightCache.promotionCode = "";
        this._flightService.itemFlightCache.promocode = "";
        this._flightService.itemFlightCache.discount = 0;
    }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.startdate = moment(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
    this.enddate = moment(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
    this.stt = this._flightService.itemFlightCache.ischeckpayment;
    let dataSummary = await this.gf.getSummaryBooking(this._flightService.itemFlightCache);
    
    console.log(dataSummary);
    let date = dataSummary.periodPaymentDate;

    //let date = this._flightService.itemFlightCache.periodPaymentDate;
    if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.operatedBy) {
      this.pacificVNA = this._flightService.itemFlightCache.departFlight.operatedBy;
    }

    if (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.operatedBy) {
      this.pacificVNAReturn = this._flightService.itemFlightCache.returnFlight.operatedBy;
    }


    if (date) {
      this.text = moment(date).format("HH:mm") + " " + this.gf.getDayOfWeek(date).dayname + ", " + moment(date).format("DD") + " thg " + moment(date).format("MM");
    }
    var se = this;
    se.gf.googleAnalytionCustom('ecommerce_purchase', { item_category: 'flights', start_date: moment(se._flightService.itemFlightCache.checkInDate).format("YYYY-MM-DD"), end_date:moment(se._flightService.itemFlightCache.checkOutDate).format("YYYY-MM-DD") , item_name: se._flightService.itemFlightCache.departCode+'-'+se._flightService.itemFlightCache.returnCode, item_id: se._flightService.itemFlightCache.departCode, value: se._flightService.itemFlightCache.totalPrice, currency: "VND" });
    //se.gf.googleAnalytionCustom('ecommerce_purchase', { item_category: 'flight', start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate, origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, value: se._flightService.itemFlightCache.totalPrice, currency: "VND" });
    if( this._flightService.itemFlightCache.roundTrip){
      this.gf.googleAnalytionCustom('purchase', { items: [ 
        { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber},
        { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.returnCode, destination: se._flightService.itemFlightCache.departCode, flight_number: se._flightService.itemFlightCache.returnFlight.flightNumber}
      ] , value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
    }else{
      this.gf.googleAnalytionCustom('purchase', { items: [ { item_category: 'flight' , start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate,origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber}] , value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
    }

    // se.fb.logEvent('Purchase', {'Origination City' : se._flightService.itemFlightCache.departCity  ,
    //         'Destination City': se._flightService.itemFlightCache.returnCity,
    //         'Departure Date': se._flightService.itemFlightCache.checkInDate ,'Return Date': se._flightService.itemFlightCache.checkOutDate,'Number of Passengers': se._flightService.itemFlightCache.pax }, se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice));
         
    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'flight'  ,'fb_content_id': 'flightpaymentdonebank','fb_num_items': 1, 'fb_value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0) ,  'fb_currency': 'VND' ,
            'origin_airport' : se._flightService.itemFlightCache.departFlight.fromPlaceCode  ,
            'destination_airport': se._flightService.itemFlightCache.departFlight.toPlaceCode,
            'departing_departure_date': se._flightService.itemFlightCache.checkInDate ,'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate,'num_adults': se._flightService.itemFlightCache.adult,'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0,'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant :0,
            'value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0) ,  'currency': 'VND' }, se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToFloat(se._flightService.itemFlightCache.totalPrice) : 0);
         
            let flightItem = se._flightService.itemFlightCache;

  }

  addToCalendar(){
    let se = this;
    if(se._platform.is("cordova")){
      let itemflight = se._flightService.itemFlightCache;
      
      //se.checkExistCalendarName(itemflight, true);
      se.createCalendar(itemflight, true, true);
      if(itemflight.roundTrip){
        setTimeout(()=> {
          //se.checkExistCalendarName(itemflight, false);
          se.createCalendar(itemflight, false, true);
        },1000)
        
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
      strmess+= " | ";
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

strmess+=`

`;

if(itemflight.childs && itemflight.childs.length >0){
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của "+ itemflight.childs.map((c)=> {return c.name}).join(', ')+".";
}else{
  strmess+= "Quý khách nhớ mang theo giấy tờ tuỳ thân."
}

strmess += `
  
`;
}

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
        // let sdate = new Date( new Date(event.startDate).getTime() + (new Date(event.startDate).getTimezoneOffset() * 60 * 1000)),
        //     edate = new Date(new Date(event.endDate).getTime() + (new Date(event.endDate).getTimezoneOffset() * 60 * 1000));
        let sdate = new Date(event.startDate),
        edate = new Date(event.endDate);
        if(allow){  
          if(createOrModify){//true - tạo mới
            se.gf.showLoadingwithtimeout();
            if(!se.checkExistCalendar(event.calOptions.calendarName)){
              try {
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
              } catch (error) {
                console.log(error)
              }
              
            }else{
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
                })
                .catch(()=>{
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
  copyClipboard(type) {
    if (type == 1) {
      this.clipboard.copy(this.accountNumber);
    } else if (type == 2) {
      this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
    } else if (type == 3) {
      this.clipboard.copy(this.bookingCode);
    }
    else if (type == 4) {
      this.clipboard.copy(this.total);
    }
    this.presentToastr('Đã sao chép');
  }
  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  getbank() {
    switch (this.paymentbank) {
      case "41":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/2.acb.png";
        this.url = 'https://online.acb.com.vn/acbib';
        break;
      case "42":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/1.vietcombank.png";
        this.url = 'https://www.vietcombank.com.vn/IBanking2020';
        break;
      case "43":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/5.dongabank.png";
        this.url = 'https://ebanking.dongabank.com.vn/khcn/';
        break;
      case "44":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/4.techcombank.png";
        this.url = 'https://ib.techcombank.com.vn/servlet/BrowserServlet';
        break;
      case "45":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/3.viettinbank.png";
        this.url = 'https://ebanking.vietinbank.vn/rcas';
        break;
      case "46":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/8.sacombank.png";
        this.url = 'https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
        break;
      case "47":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/6.agribank.png";
        this.url = 'https://ibank.agribank.com.vn/ibank';
        break;
      case "48":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/7.bidv.png";
        this.url = 'https://www.bidv.vn:81/iportalweb/iRetail@1';
        break;
      case "49":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/scb-icon.png";
        this.url = 'https://ebanking.scb.com.vn/?module=login';
        break;
      case "50":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/hdb-icon.png";
        this.url = 'https://ebanking.hdbank.vn/ipc/vi/';
        break;
        case "53":
          this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/ocb-logo.png";
          this.url = 'https://omni.ocb.com.vn/frontend-web/app/auth.html#/login';
          break;
      default:
        break;
    }
  }
  openWebpage() {
    this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {
        this.safariViewController.show({
          url: this.url,
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
    }
  );

  }
  next() {
    this.gf.hideLoading();
    this.valueGlobal.backValue = "homeflight";
    this._flightService.bookingCodePayment = this.bookingCode;
    this._flightService.bookingSuccess = true;
    //this._flightService.itemFlightPaymentLater.push({ accountNumber: this.accountNumber,bankName: this.bankName,paymentBank: this.paymentbank, totalPrice: this.total,bookingCode: this.bookingCode, textbank: this.textbank, imgUrl: this.urlimgbank });
    this._flightService.itemTabFlightActive.emit(true);
    //this._flightService.itemFlightMytripRefresh.emit(true);
    try {
      this.storage.get('objectflightpaymentbank').then((data)=>{
        if(data){
            let arrobject = JSON.parse(data);
            if(arrobject && arrobject.length >0){
              arrobject.push({accountNumber: this.accountNumber,textbank: this.textbank, bankName: this.bankName, paymentBank: this.paymentbank, resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, urlimgbank: this.urlimgbank, totalPrice: this.total, text: this.text, itemFlightCache :this._flightService.itemFlightCache });
            }else{
              arrobject = [];
              arrobject.push({accountNumber: this.accountNumber,textbank: this.textbank, bankName: this.bankName, paymentBank: this.paymentbank, resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, urlimgbank: this.urlimgbank, totalPrice: this.total, text: this.text, itemFlightCache :this._flightService.itemFlightCache });
            }
  
            this.storage.remove('objectflightpaymentbank').then(()=>{
              this.storage.set('objectflightpaymentbank', JSON.stringify(arrobject));
            })
        }else{
          let arr = [];
          arr.push({accountNumber: this.accountNumber,textbank: this.textbank, bankName: this.bankName, paymentBank: this.paymentbank, resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, urlimgbank: this.urlimgbank, totalPrice: this.total, text: this.text, itemFlightCache :this._flightService.itemFlightCache });
          this.storage.set('objectflightpaymentbank', JSON.stringify(arr));
        }
        
      })
    } catch (error) {
      console.log('fail to set storage object')
    }
    if (this.checkreview == 0) {
      this.showConfirm();
    }
    this.navCtrl.navigateBack('/tabs/tab1');
    
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
