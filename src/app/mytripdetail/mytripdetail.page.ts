import { Component, OnInit,NgZone } from '@angular/core';
import { ActivityService, GlobalFunction } from '../providers/globalfunction';
import { MytripService } from '../providers/mytrip-service.service';
import * as moment from 'moment';
import { ActionSheetController, IonRouterOutlet, NavController, ToastController ,AlertController,LoadingController} from '@ionic/angular';
import { NetworkProvider } from '../network-provider.service';
import { SearchHotel, ValueGlobal } from '../providers/book-service';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { flightService } from '../providers/flightService';
import { foodService } from '../providers/foodService';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { C } from '../providers/constants';
import * as $ from 'jquery';
import * as request from 'requestretry';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
@Component({
  selector: 'app-mytripdetail',
  templateUrl: './mytripdetail.page.html',
  styleUrls: ['./mytripdetail.page.scss'],
})
export class MytripdetailPage implements OnInit {
  trip: any;
  datecin: Date;
  datecout: Date;
  cindisplay: string;
  coutdisplay: string;
  options: NativeTransitionOptions = {
    direction: 'right',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
   }
   enableheader = false;
   listClaimed: any= [];
    arrchild: any[] = [];
    arrchildinsurrance: any[] = [];
    cincomboarrivaldisplay: any;
    cincomboarrivallocationdisplay: any;
    cincomboarrivalflightnumberdisplay: any;
    cincombodeparturedisplay: any;
    cincombodeparturelocationdisplay: any;
    cincombodepartureflightnumberdisplay: any;
    arrinsurrance= [];
    departCodeDisplay: string;
    arrivalCodeDisplay: string;
  cincombodeparture: string;
  cincomboarrival: string;
  noLoginObj: any;
  childList: any;
  loader: any;
  baggageHandedDepart;baggageHandedReturn;totalVMB=0;
  totalService: number;
  luggageSignedDepart: any;
  departConditionInfo: any;
  returnConditionInfo: any;
  luggageSignedReturn: any;
  isdkv=false;
  ishdnp=false;
  isptp=false;
  isttt=false;
  booking_json_data: any;
  ischeckStops=false;
  cin: any;
  cout: any;
  departAirport:any;
  returnAirport:any;
  totalDichung=0;
  coutDC: number;
  PromotionNote:any;
  constructor(public _mytripservice: MytripService,
    public gf: GlobalFunction,
    private navCtrl: NavController,
    public networkProvider: NetworkProvider,
    public searchhotel: SearchHotel,
    public valueGlobal: ValueGlobal,
    public activityService: ActivityService,
    private clipboard: Clipboard,
    private toastCtrl: ToastController,
    public _flightService: flightService,
    public _foodService: foodService,
    private nativePageTransitions: NativePageTransitions,
    private routerOutlet: IonRouterOutlet,
    private actionsheetCtrl: ActionSheetController,public alertCtrl: AlertController,public loadingCtrl: LoadingController,private safariViewController: SafariViewController,public zone: NgZone) {
      if(this._mytripservice.tripdetail){
        this.trip = this._mytripservice.tripdetail;

        this.enableheader = true;
    
        if (this.trip.isFlyBooking) {
          this.getDetailTicket(0).then((data) => {
            if (this.trip.textReturn && this.trip.bookingsComboData[1].airlineCode && this.trip.bookingsComboData[1].airlineName.toLowerCase().indexOf('cathay') == -1 && ['GO', 'RETURN', 'GOROUNDTRIP', 'RETURNROUNDTRIP'].indexOf(this.trip.bookingsComboData[1].trip_Code) == -1) {
              this.getDetailTicket(1).then((data) => {
                this.loadDetailInfo();
                this.getmhoteldetail();
              })
            }else{
              this.loadDetailInfo();
            }
          })
        }else{
          if(this.trip.booking_type == 'COMBO_FLIGHT'){
            this.departAirport=this.getAirportByCode(this.trip.bookingsComboData[0].departCode);
            this.returnAirport=this.getAirportByCode(this.trip.bookingsComboData[1].departCode);
            this.getDetailTicket(0).then((data) => {
              if (this.trip.bookingsComboData[1].airlineCode && this.trip.bookingsComboData[1].airlineName.toLowerCase().indexOf('cathay') == -1 && ['GO', 'RETURN', 'GOROUNDTRIP', 'RETURNROUNDTRIP'].indexOf(this.trip.bookingsComboData[1].trip_Code) == -1) {
                this.getDetailTicket(1).then((data) => {
                  this.loadDetailInfo();
                  this.getmhoteldetail();
                })
              }
            })
          }else{
            this.loadDetailInfo();
            this.getmhoteldetail();
          }
          
        }
        this.routerOutlet.swipeGesture = false;
      }
   }
  loadDetailInfo() {
    let se = this;
    se.datecin = new Date(this.trip.checkInDate ? this.trip.checkInDate : this.trip.start_date);
        se.datecout = new Date(this.trip.checkOutDate ? this.trip.checkOutDate : this.trip.end_date);
        se.cindisplay = se.gf.getDayOfWeek(se.datecin).dayname+ ", " + moment(se.datecin).format('DD') + "Thg " + moment(se.datecin).format('MM');
        se.coutdisplay = se.gf.getDayOfWeek(se.datecout).dayname+ ", " + moment(se.datecout).format('DD') + "Thg " + moment(se.datecout).format('MM');

        if(this.trip.bookingsComboData && this.trip.bookingsComboData.length >0){
          this.trip.bookingsComboData.forEach(element => {
              if(element.trip_Code == "GO" || element.trip_Code == "RETURN" || element.trip_Code == "GOROUNDTRIP" || element.trip_Code == "RETURNROUNDTRIP"){
                  
                  if(element.departureDate){
                    let newdate = element.departureDate.split('/');
                    if(newdate && newdate.length >1){
                      element.departureDateDisplay = newdate[0] + "." + newdate[1];
                    }
                    
                  }
                  
              }

              if (element.airlineName.toLowerCase().indexOf('cathay') != -1) {
                //Add bảo hiểm
                se.getCathayClaimInfo(se.trip.booking_id).then((data)=> {
                  
                var claimed;
                let objData = JSON.parse(data);
                if(objData.insurObj && objData.insurObj.adultList){
                  let dataCathay = objData.insurObj;
                 dataCathay.adultList.forEach(objAdult => {
                   if(!objAdult.claimedFlights ){
                    let itemAdult = { claimed: objAdult.claimedFlights, insurance_code: objAdult.insurance_code, customer_name: objAdult.customer_name, customer_id: objAdult.customer_cmnd, customer_address: '', customer_dob: objAdult.customer_dob};
                    se.arrinsurrance.push(itemAdult);
                   }else{
                    objAdult.flightObj.forEach((f) => {
                      var objmap = objAdult.claimedFlights.filter((cf) => f.flightNumner && cf == f.flightNumner.replace(' ',''));
                      if(objmap && objmap.length >0){
                        se.listClaimed.push({ flight_number: objmap[0], insurance_code: objAdult.insurance_code, bookingid: objAdult.booking_id });
                      }
                    });
                    var claimedDone;
                if (objData.flightObj[1].airlineCode) {
                  claimedDone = objAdult.claimedFlights.filter((cf, i, arr) => { return arr.indexOf(arr.find(t => t === cf)) === i }).length > 1;
                }
                else {
                  claimedDone = objAdult.claimedFlights.filter((cf, i, arr) => { return arr.indexOf(arr.find(t => t === cf)) === i }).length > 0;
                }
                    let itemAdult = { claimed: claimedDone, insurance_code: objAdult.insurance_code, customer_name: objAdult.customer_name, customer_id: objAdult.customer_cmnd, customer_address: '', customer_dob: objAdult.customer_dob };
                    se.arrinsurrance.push(itemAdult);
                   }
                  });
                    dataCathay.childList.forEach(objChild => {
                      if(!objChild.claimedFlights){
                        let itemChild = { claimed: objChild.claimedFlights, insurance_code: objChild.insurance_code, customer_name: objChild.customer_name, customer_id: objChild.customer_cmnd, customer_address: '', customer_dob: objChild.customer_dob, 
                        name: objChild.customer_name,id: objChild.insurance_code, birth: objChild.customer_dob};
                        se.arrchildinsurrance.push(itemChild);
                        se.arrchild.push(itemChild);
                      }else{
                        objChild.flightObj.forEach((f) => {
                          var objmap = objChild.claimedFlights.filter((cf) => f.flightNumner && cf == f.flightNumner.replace(' ',''));
                          if(objmap && objmap.length >0){
                            se.listClaimed.push({ flight_number: objmap[0], insurance_code: objChild.insurance_code, bookingid: objChild.booking_id });
                          }
                        });

                        var claimedDone
                if (objData.flightObj[1].airlineCode) {
                  claimedDone = objChild.claimedFlights.filter((cf, i, arr) => { return arr.indexOf(arr.find(t => t === cf)) === i }).length > 1;
                } else {
                  claimedDone = objChild.claimedFlights.filter((cf, i, arr) => { return arr.indexOf(arr.find(t => t === cf)) === i }).length > 0;
                }
                          let itemChild = {
                            claimed: claimedDone, insurance_code: objChild.insurance_code, customer_name: objChild.customer_name, customer_id: objChild.customer_cmnd, customer_address: '', customer_dob: objChild.customer_dob,
                            name: objChild.customer_name, id: objChild.insurance_code, birth: objChild.customer_dob
                          };
                            se.arrchildinsurrance.push(itemChild);
                            se.arrchild.push(itemChild);
                       }
                        //check cathay VMB
                    if (se.trip.itemdepart && se.arrinsurrance.length > 0) {
                      se.trip.itemdepart.passengers.forEach((item) => {
                        for (let i = 0; i < se.arrinsurrance.length; i++) {
                          if (item.name.toLowerCase().trim() == se.arrinsurrance[i].customer_name.toLowerCase().trim()) {
                            item.claimed = se.arrinsurrance[i].claimed;
                            break;
                          }
                        }
                      });
                    }
                    if (se.trip.itemdepart && se.arrchildinsurrance.length > 0) {
                      se.trip.itemdepart.passengers.forEach((item) => {
                        for (let i = 0; i < se.arrchildinsurrance.length; i++) {
                          if (item.name.toLowerCase().trim() == se.arrchildinsurrance[i].customer_name.toLowerCase().trim()) {
                            item.claimed = se.arrchildinsurrance[i].claimed;
                            break;
                          }
                        }
                      });
                    }
                    });
          
          
                let arrInfo = se.trip.flight_ticket_info.split("<br/>");
                if (arrInfo.length == 2) {
                  let arrFlightStart = arrInfo[0].split("|");
                  let arrFlightReturn = arrInfo[1].split("|");
                  se.cincombodeparturedisplay = arrFlightStart[0];
                  se.cincombodeparturelocationdisplay = arrFlightStart[1];
                  se.cincombodepartureflightnumberdisplay = arrFlightStart[2];
                  //se.cincombodepartureflightnumberdisplay = arrFlightStart[3];

          
                  se.cincomboarrivaldisplay = arrFlightReturn[0];
                  se.cincomboarrivallocationdisplay = arrFlightReturn[1];
                  se.cincomboarrivalflightnumberdisplay = arrFlightReturn[2];
                  //se.cincomboarrivalflightnumberdisplay = arrFlightReturn[3];
                }
                else if (arrInfo.length > 2) {
                  let arrFlightStart = arrInfo[0].split("|");
                  let arrFlightReturn = [];
                  if (arrInfo[1].indexOf('|') != -1) {
                    arrFlightReturn = arrInfo[1].split("|");
                  } else if (arrInfo[2].indexOf('|') != -1) {
                    arrFlightReturn = arrInfo[2].split("|");
                  }
                  se.cincombodeparturedisplay = arrFlightStart[0];
                  se.cincombodeparturelocationdisplay = arrFlightStart[1];
                  se.cincombodepartureflightnumberdisplay = arrFlightStart[2];
          
                  //se.cincombodepartureflightnumberdisplay = arrFlightStart[3];
          
                  se.cincomboarrivaldisplay = arrFlightReturn[0];
                  se.cincomboarrivallocationdisplay = arrFlightReturn[1];
                  se.cincomboarrivalflightnumberdisplay = arrFlightReturn[2];
                  //se.cincomboarrivalflightnumberdisplay = arrFlightReturn[3];
                }
                }
                
              })

              let arrcd = se.trip.bookingsComboData[0].departureDate.split('-');
              let nd = new Date(arrcd[2], arrcd[1] - 1, arrcd[0]);
              se.cincombodeparture = moment(nd).format('YYYY-MM-DD');

              if (se.trip.bookingsComboData && se.trip.bookingsComboData.length > 1) {
                se.departCodeDisplay = se.trip.bookingsComboData[0].departCode + ' → ' + se.trip.bookingsComboData[0].arrivalCode;
                if (se.trip.bookingsComboData.length > 1) {
                  se.arrivalCodeDisplay = se.trip.bookingsComboData[1].departCode + ' → ' + se.trip.bookingsComboData[1].arrivalCode;
                }

                if(!se.cincombodepartureflightnumberdisplay){
                  se.cincombodepartureflightnumberdisplay = se.trip.bookingsComboData[0].flightNumner;
                }

                if(!se.cincomboarrivalflightnumberdisplay){
                  se.cincomboarrivalflightnumberdisplay = se.trip.bookingsComboData[1].flightNumner;
                }

                if(se.trip.bookingsComboData[1] && se.trip.bookingsComboData[1].departCode){
                  let arrca = se.trip.bookingsComboData[1].departureDate.split('-');
                  let nd = new Date(arrca[2], arrca[1] - 1, arrca[0]);
                  se.cincomboarrival= moment(nd).format('YYYY-MM-DD');
                }
                
              }
              

            }
              
              
          });
        }
        this.totalVMB=0;
        se.totalService=0;
        //chặng dừng nếu có
        if (this.trip.booking_json_data) {
          let TotalPriceReturn=0;
          let TotalPriceGo=0;
          this.booking_json_data= JSON.parse(this.trip.booking_json_data);
          this.booking_json_data.forEach(item => {
            if (item.Passengers) {
              item.Passengers.forEach(element => {
                se.totalService=se.totalService + Number(element.GiaTienHanhLyTA)+Number(element.SeatPriceTA);
              });
            }
            if (item.PromotionNote) {
              this.PromotionNote=JSON.parse(item.PromotionNote);
               TotalPriceReturn=this.PromotionNote.TotalPriceReturn;
               TotalPriceGo=this.PromotionNote.TotalPriceGo;
            }
    
           if(item.Transits && item.Transits.length>1) {
            this.ischeckStops=true;
           }
          })
          if(this.ischeckStops){
            this.booking_json_data.forEach(item => {
              if(item.Transits) {
                for (let i = 0; i < item.Transits.length; i++) {
                  item.Transits[i].departAirport = this.getAirportByCode(item.Transits[i].FromPlaceCode);
                  item.Transits[i].returnAirport = this.getAirportByCode(item.Transits[i].ToPlaceCode);
                  item.Transits[i].DepartureTime =moment(item.Transits[i].DepartTime).format('HH:mm')
                  item.Transits[i].ArrivalTime =moment(item.Transits[i].LandingTime).format('HH:mm')
                  if(i>0){
                    var DepartureDate :any=this.parseDatetime(item.DepartureDate,item.Transits[i].DepartureTime)
                    var LandingTime:any=this.parseDatetime(item.DepartureDate,item.Transits[i-1].ArrivalTime)
                    let hours = (DepartureDate - LandingTime) / 36e5;
                    // item.Transits[i].hours =hours;
                    let layminutes:any = hours - (Math.floor(hours));
                    item.Transits[i].timeOverStop =  Math.floor(hours) + " tiếng " + (layminutes > 0 ? (+Math.round(layminutes*60) + " phút") : '') ;
                  }
                }
              
              }
             })

          }
                let coutDCdepart=0;
                let coutDCreturn=0;
                if (TotalPriceGo>0) {
                  coutDCdepart=2;
                }
                if (TotalPriceReturn>0) {
                  coutDCreturn=2;
                }
                se.coutDC=coutDCdepart+coutDCreturn;
                se.totalDichung=TotalPriceGo+TotalPriceReturn;
                se.totalVMB=se.trip.amount_after_tax-se.totalService-se.totalDichung+se.trip.promotionDiscountAmount;
        }
        
  }

  ngOnInit() {
   
  }

  goback(){
    this.enableheader = false;
    this._mytripservice.itemEnableHeader.emit(1);
    //this.nativePageTransitions.slide(this.options);
    if(this._mytripservice.backroute){
      //this.navCtrl.navigateBack(this._mytripservice.backroute, {animated: true});
      // this.navCtrl.back();
      this._mytripservice.backroute = "";
      this._mytripservice.backfrompage = "mytripdetail";
      
      if(this._mytripservice.rootPage == "homeflight"){
        this._flightService.itemTabFlightActive.emit(true);
        setTimeout(()=>{
          this._flightService.itemMenuFlightClick.emit(2);
        },200)
        
        this.valueGlobal.backValue = "homeflight";
        this.navCtrl.navigateBack('/tabs/tab1', {animated: true});
        this._mytripservice.backfrompage= "";
      }else if(this._mytripservice.rootPage == "homefood"){
        $(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            $(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            $(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            $(".homefoodheader").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
            $(".div-home").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
              this._foodService.tabFoodIndex = 2;
              this._foodService.menuFooterClick.emit(2);
              this._foodService.itemActiveFoodTab.emit(2);
        this.navCtrl.navigateBack('/homefood');
      }
      else{
        if(this.valueGlobal.backValue == "homeflight"){
          this._flightService.itemTabFlightActive.emit(true);
          setTimeout(()=>{
            this._flightService.itemMenuFlightClick.emit(2);
          },200)
          this.navCtrl.navigateBack('/tabs/tab1', {animated: true});
        }else if(this.valueGlobal.backValue == "homefood"){
          $(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            $(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            $(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            $(".homefoodheader").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
            $(".div-home").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
              this._foodService.tabFoodIndex = 2;
              this._foodService.menuFooterClick.emit(2);
              this._foodService.itemActiveFoodTab.emit(2);
        this.navCtrl.navigateBack('/homefood');
        }
        else{
          this.navCtrl.navigateBack('/app/tabs/tab3');
        }
        
      }
      
      
    }
    
    else if(this._mytripservice.rootPage == "homeflight"){
      if(this._mytripservice.backfrompage == "mytripdetail" || this._mytripservice.backfrompage == "mytripbookingdetail"){
        this._flightService.itemTabFlightActive.emit(true);
        setTimeout(()=>{
          this._flightService.itemMenuFlightClick.emit(2);
        },200)
        
        this.valueGlobal.backValue = "homeflight";
        this.navCtrl.navigateBack('/tabs/tab1', {animated: true});
        this._mytripservice.backfrompage= "";
      }else{
        this.navCtrl.navigateBack('/app/tabs/tab3');
      }
      
    }
    else if(this._mytripservice.rootPage == "homefood"){
      this._mytripservice.rootPage = "homefood";
      this.valueGlobal.backValue = "";
      this._foodService.menuFooterClick.emit(2);
      this.navCtrl.navigateForward('/homefood');
    }
    else{
      this.navCtrl.navigateBack('/app/tabs/tab3');
    }
    
  }

  openWeather(cityname) {
    this.navCtrl.navigateForward('/tripweather/' + cityname);
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'openweather/' + cityname);
  }

  openHotelNotes(notes) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    this.gf.setParams(notes, 'hotelnotes');
    this.navCtrl.navigateForward('/hotelnotes');
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'opentripnote');
  }

  openHotelExpsNotes(trip, notes, provincename) {
    var se = this;
    if (!se.networkProvider.isOnline()) {
      se.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    se.gf.setParams({ notes: notes, provincename: provincename }, 'hotelexpsnotes')
    //check location của ks
    if (trip.provinceName) {
      var regionCode = se.gf.convertFontVNI(trip.provinceName).replace(/ /g, '-');
      regionCode = regionCode.toLowerCase();
      regionCode = regionCode.replace('---', '-');
      regionCode = regionCode.replace('-province', '');
      regionCode = regionCode.replace('tinh-', '');
      regionCode = regionCode.replace('-district', '');

      se.searchhotel.inputExperienceItem = {};
      se.searchhotel.inputExperienceItem.regionCode = regionCode;
      se.searchhotel.inputExperienceRegionCode = regionCode;
      se.searchhotel.inputExperienceRegionName = trip.provinceName;
      se.searchhotel.inputExperienceText = trip.provinceName;
      se.searchhotel.inputExperienceItem.latitude = trip.Latitude;
      se.searchhotel.inputExperienceItem.longitude = trip.Longitude;
      se.valueGlobal.backValue = 'tab3';
      se.navCtrl.navigateForward('/experiencesearch');
    } else {
      se.navCtrl.navigateForward('/hotelexpsnotes');
    }
  }

  openBookingTrip(trip) {
    if (!this.networkProvider.isOnline()) {
      this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      return;
    }
    if (trip && !trip.isRequestTrip && !trip.isHistoryItem) {
      this.gf.setParams({ trip: trip, currentTrip: this._mytripservice.currentTrip }, 'mytripbookingdetail');
      this._mytripservice.backroute = "";
      this.navCtrl.navigateForward('/mytripbookingdetail');
      //google analytic
      this.gf.googleAnalytion('mytrips', 'Search', '/opentripdeail');
    }
  }

  paymentselect(trip,stt) {
    var se = this;
    se.activityService.objPaymentMytrip = { returnPage: 'mytrip', tripindex: se._mytripservice.currentTrip, paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };
    if (trip.booking_type == 'COMBO_FLIGHT') {
      if (stt==0) {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/0");
      }
      else{
        se.navCtrl.navigateForward("/mytripaymentflightcombo/1");
      }
      
    } else if (trip.booking_type == 'COMBO_VXR') {
      if (stt==0) {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/0");
      }
      else{
        se.navCtrl.navigateForward("/mytripaymentcarcombo/1");
      }
   
    } 
    else if(trip.isFlyBooking){
      if (stt==0) {
        se.navCtrl.navigateForward("/mytripaymentflightselect/0");
      }
      else{
        se.navCtrl.navigateForward("/mytripaymentflightselect/1");
      }
    
    }
    else {
      // stt 0:CKNH
      if (stt==0) {
        se.navCtrl.navigateForward("/mytripaymentselect/0");
      }
      else{
        se.navCtrl.navigateForward("/mytripaymentselect/1");
      }
    }

  }

  payment(trip) {
    var se = this;
    se.activityService.objPaymentMytrip = { returnPage: 'mytrip', tripindex: se._mytripservice.currentTrip, paymentStatus: 0, bookingid: trip.HotelIdERP, trip: trip };
    se.navCtrl.navigateForward("/roompaymentlive/1");
  }
  copyClipboard(text) {

    this.clipboard.copy(text);

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

  showPolicy(trip) {
    var se = this;
    if (trip.off_hotel_paypolicy) {
      let textstr = trip.off_hotel_paypolicy;
      this.gf.setParams({ showFromMytrip: true, textcancel: textstr, RoomName: trip.room_name }, 'roomInfo');
      this.searchhotel.backPage = "tab3";
      this.navCtrl.navigateForward('/roomcancel');
    }
  }
  showRules() {
    var se = this;
    this.navCtrl.navigateForward("/rules");
  }

  /***
         * Gọi tổng đài hỗ trợ
         * PDANH 26/02/2019
         */
   async makeCallSupport(phone) {
    try {
      setTimeout(() => {
        window.open(`tel:${phone}`, '_system');
      }, 10);
    }
    catch (error) {
    }
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'callsupport');
  }
  nextSupport(trip){
    // this.activityService.objPaymentMytrip = { trip: trip };
    // if (!trip.isRequestTrip && trip.isFlyBooking) {
    //   this.navCtrl.navigateForward('/ordersupport/1');
    // }else{
    //   this.navCtrl.navigateForward('/ordersupport/0');
    // }
    this.activityService.objPaymentMytrip = { trip: trip };
    if (!trip.isRequestTrip && trip.isFlyBooking) {
      this.navCtrl.navigateForward('/orderrequestsupport');
    } else {
      this.navCtrl.navigateForward('/ordersupport/0');
    }
  }
  requestCathay(name,trip,gender){
    if(gender.indexOf('Bé') == 0){
      this.getCathay(name);
      return;
    }
    this.activityService.objCathayMytrip = { name: name,trip: trip };
    this.valueGlobal.backpageCathay='mytripdetail';
    this.navCtrl.navigateForward('/mytripcathay/'+this.trip.booking_id);
   
  }

  checkExitClaim(listcheck, itemcheck, bkgid) {
    var se = this, res = false;
    res = listcheck.filter((item) => { return item.flight_number == itemcheck.flight_number && item.insurance_code == itemcheck.insurance_code && item.bookingid == bkgid }).length > 0 ? true : false;
    return res;
  }

  getCathayClaimInfo(bkgid): Promise<any>{
    return new Promise((resole, reject) => {
        let url = C.urls.baseUrl.urlMobile + '/api/Dashboard/GetCathayByKey?key='+bkgid;
        let header = {
          apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
          apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
        }
        this.gf.RequestApi('GET', url, header, null, 'MytripDetail', "getCathayClaimInfo").then((data)=>{
          if(data){
            resole(data);
          }else{
            resole(false);
          }
        })
    })
  }

  /**
       * Show popup claim bảo hiểm
       * @param trip thông tin chuyến đi
       * @param item thông tin bảo hiểm
       * @param type loại bảo hiểm (1 - trễ chiều đi; 2 - trễ chiều về; 3 - hủy chiều đi; 4 - hủy chiều về)
       * @param flightNumner số hiệu chuyến bay
       */
   async showInsuranceDetail(trip, item, type, flightNumber, ischild) {
    var se = this;
    if(ischild && !se.checkChildAge(item, (type == 1 || type == 3) ? true : false )){
      se.gf.showToastWarning('Trẻ em dưới 14 tuổi sẽ thực hiện yêu cầu bồi thường bảo hiểm theo người lớn đi cùng');
      return;
    }
    se.checkValidDate(trip, (type == 1 || type == 3) ? se.cincombodepartureflightnumberdisplay : se.cincomboarrivalflightnumberdisplay ).then((valid) => {
        if(valid){
          //se.gf.setParams({ trip: trip, currentTrip: se.currentTrip }, 'mytripbookingdetail');
          let listChild = [];
          //Lọc lại những item child chưa được claim
          se.arrchild.forEach(element => {
            let hadclaimed = false;
            if (se.listClaimed && se.listClaimed.length > 0) {
              hadclaimed = se.listClaimed.filter((el) => { return el.flight_number == flightNumber.replace(" ", "") && element.id == el.insurance_code && el.bookingid == trip.booking_id }).length > 0 ? true : false;
            }
            if (!hadclaimed) {
              listChild.push(element);
            }
          });

          if (ischild && listChild.length <= 1) {
            listChild = [];
          }

          se.gf.setParams({ childlist: listChild, item: item, trip: trip, type: type, flightNumber: flightNumber, ischild: ischild }, 'insurrenceDetail');
          se.valueGlobal.backpageCathay='mytripdetail';
          se.navCtrl.navigateForward("/insurrancedetail");
        }else{
          se.showWarning('Chuyến bay chưa khởi hành nên quý khách chưa thực hiện claim bảo hiểm!') 
        }
    })
   
  }
  async showWarning(msg) {
    var se = this;
    const toast = await se.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  checkValidDate(trip, flightNumber) : Promise<any>{
    return new Promise((resolve, reject) => {
      let d =  moment(new Date()).format('YYYY-MM-DD');
      let obj = trip.bookingsComboData.filter((f) => {
        let arr = f.departureDate.split('-');
        let newdate = new Date(arr[2], arr[1] - 1, arr[0]);
        let df = moment(newdate).format('YYYY-MM-DD');
        return f.flightNumner && f.flightNumner.replace(' ','') == flightNumber.replace(' ','') && moment(d).diff(df, 'days') >= 0 
      });
      console.log(obj);
      
      resolve(obj && obj.length >0);
    })
  }

  /**
       * Valid tuổi trẻ em claim riêng > 14 tuổi
       * @param child 
       * @returns 
       */
   checkChildAge(child, isdepart){
    let arr =child.birth.split('-');
    let newdate = new Date(arr[2], arr[1] - 1, arr[0]);
    let chilđob = moment(newdate).format('YYYY-MM-DD');
    console.log(moment(moment(isdepart ? this.cincombodeparture : this.cincomboarrival).format('YYYY-MM-DD')).diff(chilđob, 'days'));
    return moment(moment(isdepart ? this.cincombodeparture : this.cincomboarrival).format('YYYY-MM-DD')).diff(chilđob, 'days') > 5113
  }

  showInsurranceInfo() {
    var se = this;
    se.gf.setParams({ currentTrip: se.trip }, 'mytripbookingdetail');
    se.navCtrl.navigateForward('/insurrancenote');
  }

  /**
       * Show option chọn claim bảo hiểm
       * @param trip thông tin chuyến đi
       * @param item thông tin bảo hiểm
       */
   async showActionSheetInsurrance(trip, item, ischild) {
    var se = this;
    let claimedDepart = false, claimedReturn = false;
    if (se.listClaimed && se.listClaimed.length > 0) {
      let fnDepart = se.cincombodepartureflightnumberdisplay.replace(" ", ""),
        fnReturn = se.cincomboarrivalflightnumberdisplay.replace(" ", "");
      claimedDepart = se.listClaimed.filter((el) => { return el.flight_number == fnDepart && el.insurance_code == item.insurance_code }).length > 0 ? true : false;
      claimedReturn = se.listClaimed.filter((el) => { return el.flight_number == fnReturn && el.insurance_code == item.insurance_code }).length > 0 ? true : false;

    
    }

    let actionSheet = await se.actionsheetCtrl.create({
      cssClass: 'action-sheets-insurrance',
      buttons: [
        {
          text: "Trễ chuyến " + se.cincombodepartureflightnumberdisplay + "| " + se.departCodeDisplay,
          handler: () => {
            claimedDepart ? se.showWarning('Chuyến bay này đã được yêu cầu bảo hiểm. Xin vui lòng chọn lại.') : se.showInsuranceDetail(trip, item, 1, se.cincombodepartureflightnumberdisplay, ischild);
          },
          cssClass: claimedDepart ? 'has-claimed' : '',
        },
        {
          text: "Trễ chuyến " + se.cincomboarrivalflightnumberdisplay + "| " + se.arrivalCodeDisplay,
          handler: () => {
            claimedReturn ? se.showWarning('Chuyến bay này đã được yêu cầu bảo hiểm. Xin vui lòng chọn lại.') : se.showInsuranceDetail(trip, item, 2, se.cincomboarrivalflightnumberdisplay, ischild);
          },
          cssClass: claimedReturn ? 'has-claimed' : '',
        },
        {
          text: "Hủy chuyến " + se.cincombodepartureflightnumberdisplay + "| " + se.departCodeDisplay,
          handler: () => {
            claimedDepart ? se.showWarning('Chuyến bay này đã được yêu cầu bảo hiểm. Xin vui lòng chọn lại.') : se.showInsuranceDetail(trip, item, 3, se.cincombodepartureflightnumberdisplay, ischild);
          },
          cssClass: claimedDepart ? 'has-claimed' : '',
        },
        {
          text: "Hủy chuyến " + se.cincomboarrivalflightnumberdisplay + "| " + se.arrivalCodeDisplay,
          handler: () => {
            claimedReturn ? se.showWarning('Chuyến bay này đã được yêu cầu bảo hiểm. Xin vui lòng chọn lại.') : se.showInsuranceDetail(trip, item, 4, se.cincomboarrivalflightnumberdisplay, ischild);
          },
          cssClass: claimedReturn ? 'has-claimed' : '',
        },
      ]
    });
    actionSheet.present();
  }
  getCathay(cusname) {
    var co=0;
    this.presentLoading();
    this.gf.getCathayByKey(this.trip.booking_id).then((data) => {
      if(this.loader){
        this.loader.dismiss();
      }
      
      var json = JSON.parse(data);
      if (json.result) {
        this.noLoginObj = json;
        
        if (
          this.noLoginObj &&
          this.noLoginObj.insurObj &&
          this.noLoginObj.insurObj.adultList.length > 0
        ) {
            this.childList= this.noLoginObj.insurObj.childList;
            if (this.childList.length > 0) {
              let i = 1;
              this.childList.forEach(element => {
                element.birth = element.customer_dob;
                element.id = i;
                i++;
                element.name = element.customer_name;
                if (element.claiming_flights && element.customer_name.toLowerCase() == cusname.toLowerCase()) {
                  this.presentToastwarming('Trẻ em đã claim chuyến bay ' + element.claiming_flights + '');
                  co = 1;
                }
              });
  
            }
           
        }

      }
      if(co==0){
        this.presentToastwarming('Trẻ em dưới 14 tuổi sẽ thực hiện yêu cầu bồi thường bảo hiểm theo người lớn đi cùng');
      }
    })
   
    
  }
  async presentToastwarming(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  getDetailTicket(stt) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      if (stt==0) {
        var airlineCode=this.getairlineCode(stt);
        var ticketClass=this.trip.bookingsComboData[0].ticketClass;
      }else{
        var airlineCode=this.getairlineCode(stt);
        var ticketClass=this.trip.bookingsComboData[1].ticketClass;
      }
  
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "gate/apiv1/GetDetailTicketAirBus?airlineCode="+airlineCode +"&ticketType="+ticketClass,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
         
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
          let result = JSON.parse(body);
          if (stt==0) {
            se.baggageHandedDepart=result.ticketCondition.baggageHanded;
            se.luggageSignedDepart=result.ticketCondition.luggageSigned;
            se.departConditionInfo=result;
              se.trip.bookingsComboData[0].passengers.forEach(element => {
                element.hanhLyshow="";
                if (element.hanhLy && result.ticketCondition.luggageSigned) {
                  element.hanhLyshow=Number(element.hanhLy.toString().replace('kg', ''))+Number(result.ticketCondition.luggageSigned);
                }else{
                  if (element.hanhLy){
                    element.hanhLyshow=element.hanhLy;
                  }else{
                    element.hanhLyshow=result.ticketCondition.luggageSigned;
                  }
                 
                }
                if (element.hanhLyshow) {
                  element.hanhLyshow=element.hanhLyshow.toString().replace('kg', '');
                }
              });
            
          }else{
            se.baggageHandedReturn=result.ticketCondition.baggageHanded;
            se.luggageSignedReturn=result.ticketCondition.luggageSigned
            se.returnConditionInfo=result;
            se.trip.bookingsComboData[1].passengers.forEach(element => {
              element.hanhLyshow="";
              if (element.hanhLy && result.ticketCondition.luggageSigned) {
                element.hanhLyshow=Number(element.hanhLy.toString().replace('kg', ''))+Number(result.ticketCondition.luggageSigned);
              }else{
                if (element.hanhLy){
                  element.hanhLyshow=element.hanhLy;
                }else{
                  element.hanhLyshow=result.ticketCondition.luggageSigned;
                }
               
              }
              if (element.hanhLyshow) {
                element.hanhLyshow=element.hanhLyshow.toString().replace('kg', '');
              }
            });
          }
          resolve(result);
          
      }
    })
    })
  }
  getairlineCode(stt) {
    var airlineName="";
    if (this.trip.bookingsComboData) {
      if (stt==0) {
        if (this.trip.bookingsComboData[0].airlineName.indexOf('VIETJET') != -1) {
          airlineName="VietJetAir"
        }else if (this.trip.bookingsComboData[0].airlineName.indexOf('Vietnam Airlines') != -1  || this.trip.bookingsComboData[0].airlineName.indexOf('VIETNAM AIRLINES') != -1){
          airlineName="VietnamAirlines"
        }else{
          airlineName="BambooAirways"
        }
      }else{
        if (this.trip.bookingsComboData[1].airlineName.indexOf('VIETJET') != -1) {
          airlineName="VietJetAir"
        }else if (this.trip.bookingsComboData[1].airlineName.indexOf('Vietnam Airlines') != -1  || this.trip.bookingsComboData[1].airlineName.indexOf('VIETNAM AIRLINES') != -1){
          airlineName="VietnamAirlines"
        }else{
          airlineName="BambooAirways"
        }
      }
    }
   
    return airlineName;
  }
  dkv(){
    this.isdkv=!this.isdkv
  }
  policy(){
    this.ishdnp=!this.ishdnp;
  }
  phuthuP(){
    this.isptp=!this.isptp;
  }
  info(){
    this.isttt=!this.isttt;
  }
  openWebpage() {
    var url="https://www.ivivu.com/dieu-kien-dieu-khoan-hang-khong";
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

          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    })
  }
  parseDatetime(date: string, time: string) {
    let dateObj = date.split("/");
    let dtStr = dateObj[1] + "/" + dateObj[0] + "/" + dateObj[2] + " " + time;
    return new Date(dtStr);
  }
  getAirportByCode(code){
    var se = this, res ="";
    if(se._flightService.listAirport && se._flightService.listAirport.length >0){
      let itemmap = se._flightService.listAirport.filter((item) => { return item.code == code});
      res = (itemmap && itemmap.length >0) ? itemmap[0].airport : ""; 
    }
    return res;
  }
  getmhoteldetail() {
    var se=this;
    let url = C.urls.baseUrl.urlPost +"/mhoteldetail/"+this.trip.hotel_id;
    var options = {
      method: 'POST',
      url: url,
      timeout: 180000, maxAttempts: 5, retryDelay: 2000,
    };
    request(options, function (error, response, body) {
      if(response.statusCode != 200){
        var objError ={
            page: "policy",
            func: "getdata",
            message : response.statusMessage,
            content : response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
        C.writeErrorLog(objError,response);
      }
      if (error) {
        error.page="policy";
        error.func="loaddata";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError,response);
      }
      if(response.statusCode== 200){
        if (body) {
          let jsondata = JSON.parse(body);
          se.zone.run(()=>{
            se.cin = jsondata.CheckinTime;
            se.cout = jsondata.CheckoutTime;
          })
        }
       

      }
    })
  }
}
