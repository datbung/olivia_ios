import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
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
import {FlightpricedetailPage} from './../flightpricedetail/flightpricedetail.page';
import { FlightsearchairportPage } from '../flightsearchairport/flightsearchairport.page';
import { FlightselectpaxPage } from '../flightselectpax/flightselectpax.page';
import { FlightselecttimepriorityPage } from '../flightselecttimepriority/flightselecttimepriority.page';
import { CustomAnimations } from '../providers/CustomAnimations';

@Component({
  selector: 'app-flightchangeinfo',
  templateUrl: './flightchangeinfo.page.html',
  styleUrls: ['./flightchangeinfo.page.scss'],
})

export class FlightchangeinfoPage implements OnInit {
    flighttype: string='twoway';
    departCode: any;
    departCity: any;
    departAirport: any;
    returnCode: any;
    returnCity: any;
    returnAirport: any;
    cin: any;
    cout: any;
    adult: any;
    child: any;
    infant: any;
    arrchild: any=[];
    cindisplaymonth: any;
    coutdisplaymonth: any;
    cindisplay: string;
    coutdisplay: string;
    cinthu: any;
    cinthushort: any;
    coutthu: any;
    coutthushort: any;
    datecin: any;
    datecout: any;
    cofdate: number=0;
    cotdate: number=0;
    myCalendar: HTMLIonModalElement;
  showlowestprice: boolean = false;
  countdaydisplay: number = 0;
  checkInDisplayMonth: string;
  checkOutDisplayMonth: string;
  roundtriptext:string ="khứ hồi/khách";
  timedepartpriorityconfig: any;
  timereturnpriorityconfig: any;
  allowclickcalendar: any = true;

    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private imageLoader: ImageLoaderService,
        public storage: Storage,
        private actionsheetCtrl: ActionSheetController,
        public valueGlobal: ValueGlobal,
        public searchhotel: SearchHotel,
        public _flightService: flightService) { 
                if(this._flightService.itemFlightCache){
                  let data = this._flightService.itemFlightCache;
                  this.flighttype = data.roundTrip ? 'twoway' : 'oneway';
                  if(!data.roundTrip){
                    $('.sc-ion-modal-ios-h.modal-flight-change-info').removeClass('twoway');
                  }else{
                    $('.sc-ion-modal-ios-h.modal-flight-change-info').addClass('twoway');
                  }
                  this.departCode = data.departCode;
                  this.departCity = data.departCity;
                  this.departAirport = data.departAirport;
  
                  this.returnCode = data.returnCode;
                  this.returnCity = data.returnCity;
                  this.returnAirport = data.returnAirport;
                  this.cin = data.checkInDate;
                  this.cout = data.checkOutDate;
                  this.getDayName(this.cin, this.cout);
                  this.adult = data.adult;
                  this.child = data.child;
                  this.infant = data.infant ? data.infant : 0;
                  this.arrchild = data.arrchild;
  
                  this.cindisplaymonth = moment(this.cin).format("DD") + " tháng " + moment(this.cin).format("MM") + ", " + moment(this.cin).format("YYYY");
                  this.coutdisplaymonth = moment(this.cout).format("DD") + " tháng " + moment(this.cout).format("MM") + ", " + moment(this.cout).format("YYYY");
  
                  this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
                  this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");


                  this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
                  this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");
                  this.bindlunar();
                  storage.get('timedepartpriorityconfig').then((data) => {
                    if(data){
                      this.zone.run(() => {
                        this.timedepartpriorityconfig = data;
                      })
                       
                    }
                  })
            
                  storage.get('timereturnpriorityconfig').then((data) => {
                      if(data){
                        this.zone.run(() => {
                          this.timereturnpriorityconfig = data;
                        })
                      }
                  })
                }
        }

        ngOnInit(){
            var se = this;
            se._flightService.itemFlightChangePax.pipe().subscribe(data => {
                if(data ==1){
                    se.reloadInfo();
                }
            })

            se._flightService.itemFlightChangeLocation.pipe().subscribe(data => {
              if(data){
                  se.changeLocationInfo(data,se._flightService.searchDepartCode ? true : false);
              }
            })
        }

        close(){
          this.search();
            //this.modalCtrl.dismiss();
        }

        search(){
            var se = this;
            if(se.departCode && se.returnCode && se.departCode === se.returnCode){
              se.gf.showToastWarning('Điểm khởi hành không được trùng với điểm đến. Vui lòng kiểm tra lại.');
              return;
            }
            
            se._flightService.objSearch = {
                departCode: se.departCode,
                arrivalCode: se.returnCode,
                departDate: se.cin,
                returnDate: se.cout,
                adult: se.adult,
                child: se.child ? se.child : 0,
                infant: se.infant ? se.infant : 0,
                title:  se.departCity +" → " + se.returnCity,
                dayDisplay: se.cinthu + ", " +moment(se.cin).format("DD") + " thg " +moment(se.cin).format("M"),
                subtitle :  " · " + (se.adult + se.child + (se.infant ? se.infant : 0) ) + " khách"+ " · " + (se.flighttype=="twoway" ? ' Khứ hồi' : ' Một chiều'),
                titleReturn: se.returnCity +" → " + se.departCity,
                dayReturnDisplay: se.coutthu + ", " +moment(se.cout).format("DD") + " thg " + moment(se.cout).format("M") ,
                subtitleReturn : " · " + (se.adult + se.child + (se.infant ? se.infant : 0)) + " khách"+ " · " + (se.flighttype=="twoway" ? ' Khứ hồi' : ' Một chiều'),
                // itemSameCity: se.itemSameCity,
                // itemDepartSameCity: se.itemDepartSameCity,
                // itemReturnSameCity: se.itemReturnSameCity,
                departCity: se.departCity,
                returnCity: se.returnCity,
                roundTrip : (se.flighttype=="twoway") ? true : false,
                timeDepartPriority: se.timedepartpriorityconfig,
                timeReturnPriority: se.timereturnpriorityconfig,
            }
    
            se._flightService.itemFlightCache.roundTrip = (se.flighttype=="twoway") ? true : false;
            se._flightService.itemFlightCache.checkInDate = se.cin;
            se._flightService.itemFlightCache.checkOutDate = se.cout;
            se._flightService.itemFlightCache.checkInDisplayMonth = se.cindisplaymonth;
            se._flightService.itemFlightCache.checkOutDisplayMonth = se.coutdisplaymonth;
            se._flightService.itemFlightCache.adult = se.adult;
            se._flightService.itemFlightCache.child = se.child;
            se._flightService.itemFlightCache.infant = se.infant;
            se._flightService.itemFlightCache.pax = se.adult + (se.child ? se.child :0)+ (se.infant ? se.infant : 0);
            se._flightService.itemFlightCache.arrchild = se.arrchild;
            se._flightService.itemFlightCache.departCity = se.departCity;
            se._flightService.itemFlightCache.departCode = se.departCode;
            se._flightService.itemFlightCache.departAirport = se.departAirport;
            se._flightService.itemFlightCache.returnCity = se.returnCity;
            se._flightService.itemFlightCache.returnCode = se.returnCode;
            se._flightService.itemFlightCache.returnAirport = se.returnAirport;
            se._flightService.itemFlightCache.step = 1;
            se._flightService.itemFlightCache.departTimeDisplay = se.cinthu + ", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
            se._flightService.itemFlightCache.returnTimeDisplay = se.coutthu + ", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");
    
            se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + se.cinthu + ", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
            se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + se.coutthu + ", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");
    
            se._flightService.itemFlightCache.departPaymentTitleDisplay = se.cinthushort + ", " + moment(se.cin).format("DD-MM")+ " · " + se.departCode + " → " +se.returnCode+ " · ";
            se._flightService.itemFlightCache.returnPaymentTitleDisplay = se.coutthushort + ", " + moment(se.cout).format("DD-MM")+ " · "+ se.returnCode + " → " +se.departCode+ " · ";

            se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(se.cin).dayname +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
            se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(se.cout).dayname +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");
            
            se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
            se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");


            se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;
            // if(se.itemSameCity){
            //   se._flightService.itemFlightCache.itemSameCity = se.itemSameCity;
            //   se._flightService.itemFlightCache.itemDepartSameCity = se.itemDepartSameCity;
            //   se._flightService.itemFlightCache.itemReturnSameCity = se.itemReturnSameCity;
            // }
    
            se.storage.get("itemFlightCache").then((data)=>{
              if(data){
                se.storage.remove("itemFlightCache").then(()=>{
                  se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                })
              }else{
                se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
              }
            })

            se.modalCtrl.dismiss(true);
        }

        getDayName(datecin, datecout) {
            if (!this.cinthu || !this.cinthushort) {
              this.cinthu = moment(datecin).format('dddd');
              switch (this.cinthu) {
                case "Monday":
                  this.cinthu = "Thứ 2";
                  this.cinthushort="T2";
                  break;
                case "Tuesday":
                  this.cinthu = "Thứ 3";
                  this.cinthushort="T3";
                  break;
                case "Wednesday":
                  this.cinthu = "Thứ 4";
                  this.cinthushort="T4";
                  break;
                case "Thursday":
                  this.cinthu = "Thứ 5";
                  this.cinthushort="T5";
                  break;
                case "Friday":
                  this.cinthu = "Thứ 6";
                  this.cinthushort="T6";
                  break;
                case "Saturday":
                  this.cinthu = "Thứ 7";
                  this.cinthushort="T7";
                  break;
                default:
                  this.cinthu = "Chủ nhật";
                  this.cinthushort="CN";
                  break;
              }
            }
            if (!this.coutthu || !this.coutthushort) {
              this.coutthu = moment(datecout).format('dddd');
              switch (this.coutthu) {
                case "Monday":
                  this.coutthu = "Thứ 2";
                  this.coutthushort="T2";
                  break;
                case "Tuesday":
                  this.coutthu = "Thứ 3";
                  this.coutthushort="T3";
                  break;
                case "Wednesday":
                  this.coutthu = "Thứ 4";
                  this.coutthushort="T4";
                  break;
                case "Thursday":
                  this.coutthu = "Thứ 5";
                  this.coutthushort="T5";
                  break;
                case "Friday":
                  this.coutthu = "Thứ 6";
                  this.coutthushort="T6";
                  break;
                case "Saturday":
                  this.coutthu = "Thứ 7";
                  this.coutthushort="T7";
                  break;
                default:
                  this.coutthu = "Chủ nhật";
                  this.coutthushort="CN";
                  break;
              }
            }
          }

          reloadInfoOneway(isoneway){
            if(isoneway){
              this.cout = this.cin;
              $('.sc-ion-modal-ios-h.modal-flight-change-info').removeClass('twoway');
            }else{
              this.cout = moment(this.cin).add(2,'days').format("YYYY-MM-DD");
              $('.sc-ion-modal-ios-h.modal-flight-change-info').addClass('twoway');
            }
  
            this._flightService.objSearch.departDate = this.cin;
            this._flightService.objSearch.returnDate = this.cout;

            this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
            this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");
  
            this.cindisplaymonth = moment(this.cin).format("DD") + " tháng " + moment(this.cin).format("MM") + ", " + moment(this.cin).format("YYYY");
            this.coutdisplaymonth = moment(this.cout).format("DD") + " tháng " + moment(this.cout).format("MM") + ", " + moment(this.cout).format("YYYY");
            this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
            this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");


            this.cinthu = moment(this.cin).format('dddd');
            switch (this.cinthu) {
              case "Monday":
                this.cinthu = "Thứ 2";
                this.cinthushort="T2";
                break;
              case "Tuesday":
                this.cinthu = "Thứ 3";
                this.cinthushort="T3";
                break;
              case "Wednesday":
                this.cinthu = "Thứ 4";
                this.cinthushort="T4";
                break;
              case "Thursday":
                this.cinthu = "Thứ 5";
                this.cinthushort="T5";
                break;
              case "Friday":
                this.cinthu = "Thứ 6";
                this.cinthushort="T6";
                break;
              case "Saturday":
                this.cinthu = "Thứ 7";
                this.cinthushort="T7";
                break;
              default:
                this.cinthu = "Chủ nhật";
                this.cinthushort="CN";
                
                break;
            }
            this.coutthu = moment(this.cout).format('dddd');
            switch (this.coutthu) {
              case "Monday":
                this.coutthu = "Thứ 2";
                this.coutthushort="T2";
                break;
              case "Tuesday":
                this.coutthu = "Thứ 3";
                this.coutthushort="T3";
                break;
              case "Wednesday":
                this.coutthu = "Thứ 4";
                this.coutthushort="T4";
                break;
              case "Thursday":
                this.coutthu = "Thứ 5";
                this.coutthushort="T5";
                break;
              case "Friday":
                this.coutthu = "Thứ 6";
                this.coutthushort="T6";
                break;
              case "Saturday":
                this.coutthu = "Thứ 7";
                this.coutthushort="T7";
                break;
              default:
                this.coutthu = "Chủ nhật";
                this.coutthushort="CN";
                break;
            }
            this.bindlunar();
          }

          radioCheck(value){
            var itemListDeparture = document.getElementsByClassName('list-flighttype');
            var itemRadioDeparture = document.getElementsByClassName('rd-departure');
            if(value==1){
                itemListDeparture[0].setAttribute('aria-activedescendant',"rb-1-0");
                this.flighttype="twoway";
                $(".div-oneway").removeClass("rd-active");
                $(".div-twoway").addClass("rd-active");
                this.reloadInfoOneway(false);
                this.roundtriptext = "khứ hồi/khách";
                this._flightService.itemFlightCache.roundTrip = true;
            }else if(value==2){
                itemListDeparture[0].setAttribute('aria-activedescendant',"rb-1-1");
                this.flighttype="oneway";
                $(".div-twoway").removeClass("rd-active");
                $(".div-oneway").addClass("rd-active");
                this.reloadInfoOneway(true);
                this.roundtriptext = "một chiều/khách";
                this._flightService.itemFlightCache.roundTrip = false;
            }
            this._flightService.publicItemFlightReloadInfo(1);
            }

        async searchFlight(index){
            this.valueGlobal.backValue ="flightchangeinfo";
            this._flightService.searchDepartCode = index == 1 ? true : false;
            //this.navCtrl.navigateForward("/flightsearchairport");
                const modal: HTMLIonModalElement =
                await this.modalCtrl.create({
                  component: FlightsearchairportPage,
                });
              modal.present();
            
              modal.onDidDismiss().then((data: OverlayEventDetail) => {
                    if(data && data.data){
                        
                    }
                  })
        }

     async choicePax() {
        this.gf.hideStatusBar();
        this.valueGlobal.backValue = "flightchangeinfo";
        const modal: HTMLIonModalElement =
                await this.modalCtrl.create({
                  component: FlightselectpaxPage,
                });
              modal.present();
            
              modal.onDidDismiss().then((data: OverlayEventDetail) => {
                    if(data && data.data){
        
                    }
                  })
      }
        /**
   * Hàm bắt sự kiện click chọn ngày trên lịch bằng jquery
   * @param e biến event
   */
  async clickedElement(e: any) {
    var obj: any = e.currentTarget;
    if ( (this.flighttype=="twoway" && ($(obj.parentNode).hasClass("endSelection") || $(obj.parentNode).hasClass("startSelection"))) || (this.flighttype=="oneway" && $(obj).hasClass('on-selected'))  ) {
      if (this.modalCtrl) {
        let fday: any;
        let tday: any;
        var monthenddate: any;
        var yearenddate: any;
        var monthstartdate: any;
        var yearstartdate: any;
        var objTextMonthEndDate: any;
        var objTextMonthStartDate: any;

        this.cofdate = 0;
        this.cotdate = 0;
        this.cinthu = "";
        this.coutthu = "";
        if(this.flighttype=="twoway"){
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
          monthstartdate = objTextMonthStartDate.trim().split(" ")[0];
          yearstartdate = objTextMonthStartDate.trim().split(" ")[1];
          monthenddate = objTextMonthEndDate.trim().split(" ")[0];
          yearenddate = objTextMonthEndDate.trim().split(" ")[1];
          var fromdate = this.gf.getCinIsoDate(new Date(yearstartdate, monthstartdate - 1, fday));
          var todate = this.gf.getCinIsoDate(new Date(yearenddate, monthenddate - 1, tday));
          let diffday =moment(todate).diff(fromdate, "days");
          this.countdaydisplay = diffday +1;

          let difftodate = moment(fromdate).diff(moment(this.gf.getCinIsoDate(new Date())).format("YYYY-MM-DD"), 'days');
          // if(difftodate <1){
          //   let d = moment(fromdate);
          //   this.gf.showToastWarning('Ngày khởi hành phải lớn hơn ' + d.format('DD') + ' thg ' + d.format('MM') + '. Vui lòng chọn lại!');
          // }
          var se = this;
          //let allowseach = se.flighttype=="twoway" ? (diffday > 0 ? true : false) : (diffday >=0 ? true : false);
          let allowseach = diffday >=0 ? true : false;
          if (fromdate && todate && allowseach) {
            setTimeout(() => {
              se.modalCtrl.dismiss();
            }, 300);

            se.cin = moment(fromdate).format("YYYY-MM-DD");
            se.cout = moment(todate).format("YYYY-MM-DD");
            se.zone.run(() => {
              //se.datecin = this.gf.getCinIsoDate(se.cin);
              //se.datecout = this.gf.getCinIsoDate(se.cout);
              se.cindisplay = moment(se.cin).format("DD-MM-YYYY");
              se.coutdisplay = moment(se.cout).format("DD-MM-YYYY");
              se.cindisplaymonth = moment(se.cin).format("DD") + " tháng " + moment(se.cin).format("MM") + ", " + moment(this.cin).format("YYYY");
              se.coutdisplaymonth = moment(se.cout).format("DD") + " tháng " + moment(se.cout).format("MM") + ", " + moment(this.cout).format("YYYY");

              se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
              se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");

              se._flightService.objSearch.departDate = se.cin;
              se._flightService.objSearch.returnDate = se.cout;
              se._flightService.itemFlightCache.checkInDate = se.cin;
              se._flightService.itemFlightCache.checkOutDate = se.cout;
              se.getDayName(se.cin, se.cout);
              se.storage.get("itemFlightCache").then((data)=>{
                if(data){
                  se.storage.remove("itemFlightCache").then(()=>{
                    se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                  })
                }else{
                  se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                }
              })
              //xử lý âm lịch
              se.bindlunar();
            });
          }
        }
      }
    }
  }

    async openPickupCalendar() {
        this.gf.hideStatusBar();
        if(!this.allowclickcalendar){
          return;
        }
        this.allowclickcalendar = false;
        let fromdate = new Date(this.gf.getCinIsoDate(moment(this.cin).format('YYYY-MM-DD')));
        let todate = new Date(this.gf.getCinIsoDate(moment(this.cout).format('YYYY-MM-DD')));

        let key = "listHotDealCalendar_"+this.departCode+"_"+this.returnCode+"_"+this.adult+ ( this.child ? "_" + this.child : "")+ ( this.infant ? "_" + this.infant : "");
        this.storage.get(key).then((data)=>{
          if(!data){
            this.loadCalendarPrice();
          }
        })
        
        let countday = moment(todate).diff(moment(fromdate),'days');
        this.countdaydisplay = (this.flighttype == "twoway") ? (countday +1) : 1;
        let fd = this.gf.getCinIsoDate(new Date(moment(this.cout).year(), moment(this.cout).month() +1, 1));
        let ed = this.gf.getCinIsoDate(new Date(moment(moment(fd).subtract(1, 'days')).format('YYYY-MM-DD')));
        //let monthed = todate.getMonth();
        let cindayofweek = this.gf.getDayOfWeek(this.cin).daynameshort;
        let cindaydisplay = moment(this.cin).format('DD');
        let cinmonthdisplay = 'Thg ' + moment(this.cin).format('M');

        let coutdayofweek = this.gf.getDayOfWeek(this.cout).daynameshort;
        let coutdaydisplay = moment(this.cout).format('DD');
        let coutmonthdisplay = 'Thg ' + moment(this.cout).format('M');
        
        let tetConfig = ['29 Tết','30 Tết','Mùng 1','Mùng 2','Mùng 3','Mùng 4','Mùng 5','Mùng 6','Mùng 7','Mùng 8','Mùng 9','Mùng 10',];
        let _daysConfig: DayConfig[] = [];
        for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
        _daysConfig.push({
            date: this.valueGlobal.listlunar[j].date,
            subTitle: this.valueGlobal.listlunar[j].name,
            //subTitle: tetConfig.indexOf(this.valueGlobal.listlunar[j].name) != -1 ? this.valueGlobal.listlunar[j].name + ':  '+ this.valueGlobal.listlunar[j].description : moment(this.valueGlobal.listlunar[j].date).format('D') + ' thg '+ moment(this.valueGlobal.listlunar[j].date).format('M') + ':  '+ this.valueGlobal.listlunar[j].description,
            cssClass: 'lunarcalendar'
        })
        }
        var options:CalendarModalOptions;
        if(this.flighttype == "twoway"){
          options  = {
            pickMode: "range",
            title: "Chọn ngày",
            monthFormat: " M YYYY",
            weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekStart: 1,
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
            monthFormat: " M YYYY",
            weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekStart: 1,
            closeLabel: "",
            doneLabel: "",
            step: 0,
            defaultScrollTo: fromdate,
            defaultDate: fromdate,
            daysConfig: _daysConfig
            };
        }
        

        this.myCalendar = await this.modalCtrl.create({
        component: CalendarModal,
        cssClass: 'flight-calendar-custom',
        animated: true,
        componentProps: { options },
        enterAnimation: CustomAnimations.iosCustomCalendarEnterAnimation,
        });
       
        this.myCalendar.present().then(() => {
          this.allowclickcalendar = true;
        //$(".days-btn").click(e => this.clickedElement(e));
        
          setTimeout(()=>{
              //custom style lịch giá
              $('.flight-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
              // if(this.countdaydisplay >0){
              //   $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${ this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'>${this.countdaydisplay} ngày <img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
              // }else{
              //   $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${ this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'><img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
              // }
              if(this.flighttype == "twoway"){
                $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div > <div class='text-date-normal'>Bay đi</div> <div class='d-flex'> <div class='f-36'>${cindaydisplay}</div> <div class='text-date-normal v-align-center'> <div class='p-top-3'>${cindayofweek}</div> <div>${cinmonthdisplay}</div> </div> </div> </div> <div class='d-flex div-img-arrow'> <img class='img-arrow' src='./assets/ic_flight/icon_arrow_calendar.svg'> </div> <div ><div class='text-date-normal'>Bay về</div> <div class='d-flex' *ngIf='flighttype=='twoway'> <div class='f-36'>${coutdaydisplay}</div> <div class='text-date-normal v-align-center'> <div class='p-top-3'>${coutdayofweek}</div> <div>${coutmonthdisplay}</div> </div> </div> </div></div>`);
              }else{
                $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div > <div class='text-date-normal'>Bay đi</div> <div class='d-flex'> <div class='f-36'>${cindaydisplay}</div> <div class='text-date-normal v-align-center'> <div class='p-top-3'>${cindayofweek}</div> <div>${cinmonthdisplay}</div> </div> </div> </div> <div class='d-flex div-img-arrow'> <ion-icon class='ico-arrow' name="remove"></ion-icon> </div> <div class='text-date-normal div-cout-oneway'>Bay về</div> </div>`);
              }
              //add div show giá thấp nhất
              if(this.showlowestprice){
                $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' (ionChange)="showLowestPrice($event)" [(ngModel)]="showlowestprice" checked></ion-toggle></div> </div>`);
              }else{
                $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' [(ngModel)]="showlowestprice"></ion-toggle></div> </div>`);
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
              // let divmonth = $('.month-box');
              // if(divmonth && divmonth.length >0){
              //   for (let index = 0; index < divmonth.length; index++) {
              //     const em = divmonth[index];
              //       let divsmall = $('#'+em.id+' small');
              //       if(divsmall && divsmall.length >0){
              //         $('#'+em.id).append("<div class='div-month-text-small'></div>");
              //         for (let i = 0; i < divsmall.length; i++) {
              //           const es = divsmall[i];
              //           let arres = es.innerHTML.split(':');
              //           $('#'+em.id+' .div-month-text-small').append("<div class='div-border-small sm-"+em.id+'-'+i+"'></div>");
              //           if(arres && arres.length >1){
              //             es.innerHTML = "<span class='text-red'>"+arres[0]+"</span>"+"<span>"+arres[1]+"</span>";
              //           }
              //           $('.sm-'+em.id+'-'+i).append(es);
              //         }
              //       }
              //   }
              // }

              let key = "listHotDealCalendar_"+this.departCode+"_"+this.returnCode+"_"+this.adult+ ( this.child ? "_" + this.child : "")+ ( this.infant ? "_" + this.infant : "");
            this.storage.get(key).then((data)=>{
              if(data){
                if(this.flighttype == "twoway"){//2 chiều
                  this.renderCalenderPrice(1, data.departs, data.arrivals);
                }else{//1 chiều
                  this.renderCalenderPrice(2, data.departs, null);
                }
              }
            })
            this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
            
          },10)

          
        });
        var se = this;
        const event: any = await this.myCalendar.onDidDismiss();
        const date = event.data;
        if (event.data) {
        const from: CalendarResult = date.from;
        const to: CalendarResult = date.to;
        se.cin = moment(from.dateObj).format("YYYY-MM-DD");
        se.cout = moment(to.dateObj).format("YYYY-MM-DD");
        se.zone.run(() => {
            se.datecin = this.gf.getCinIsoDate(new Date(se.cin));
            se.datecout = this.gf.getCinIsoDate(new Date(se.cout));
            se.cindisplay = moment(se.datecin).format("DD-MM-YYYY");
            se.coutdisplay = moment(se.datecout).format("DD-MM-YYYY");
            se.cindisplaymonth = moment(se.datecin).format("DD") + " tháng " + moment(se.cin).format("MM") + ", " + moment(this.cin).format("YYYY");
            se.coutdisplaymonth = moment(se.datecout).format("DD") + " tháng " + moment(se.cout).format("MM") + ", " + moment(this.cout).format("YYYY");
            se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
            se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");
            se.getDayName(se.datecin, se.datecout);
            
        });
        }
    }

    handleExpandDiv(id){
      var el = $('.div-button-expand-'+id).siblings().last();
      
      if(el.hasClass('div-month-text-small')){
        if(el.hasClass('visible-span')){
          el.removeClass('visible-span');
          el.addClass('hide-span');
          let arr = $('.div-button-expand-'+id).children();
          for (let j = 0; j < arr.length; j++) {
            let item = $(arr[j]);
            if(item.hasClass('img-expand-down')){
              item.removeClass('img-disabled');
            }else if(item.hasClass('img-expand-up')){
              item.addClass('img-disabled');
            }

            
          }
        }else{
          el.removeClass('hide-span');
          el.addClass('visible-span');
          
          let arr = $('.div-button-expand-'+id).children();
          for (let j = 0; j < arr.length; j++) {
            let item = $(arr[j]);
            if(item.hasClass('img-expand-down')){
              item.addClass('img-disabled');
            }else if(item.hasClass('img-expand-up')){
              item.removeClass('img-disabled');
            }
          }
        }
      }
    }

    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }

    bindlunar() {
        var se = this;
        se.cofdate =0;
        se.cotdate=0;
        if(se.valueGlobal.listlunar){
            for (let i = 0; i < se.valueGlobal.listlunar.length; i++) {
                var checkdate = moment(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
                if (checkdate==se.cin) {
                    se.cofdate = 1;
                    if (se.valueGlobal.listlunar[i].isNameDisplay==1) {
                    var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                    if (ischecklunar) {
                        se.cinthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                    }
                    else
                    {
                        se.cinthu = se.valueGlobal.listlunar[i].name;
                    }
                    }
                }
                else{
                    this.getDayName(this.datecin, this.datecout);
                }
                if (checkdate==se.cout) {
                    se.cotdate = 1;
                    if (se.valueGlobal.listlunar[i].isNameDisplay==1) {
                    var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                    if (ischecklunar) {
                        se.coutthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                    }
                    else
                    {
                        se.coutthu = se.valueGlobal.listlunar[i].name;
                    }
                    }
                }
                else{
                    this.getDayName(this.datecin, this.datecout);
                }
                }
        }
        
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

      changeLocationInfo(data, isdepart){
        var se = this;
        if(isdepart){
          if(!data.SameCity){
            se.departCode = data.code;
            se.departCity = data.city;
            se.departAirport = data.airport;
            //se.itemSameCity = false;
            se._flightService.itemFlightCache.itemSameCity = false;
            se._flightService.itemFlightCache.itemDepartSameCity = null;
            se._flightService.itemFlightCache.itemReturnSameCity = null;
          }
          else{
            //se.itemDepartSameCity = data;
            se.departCity = data.city;
            se.departAirport = data.country;
            se._flightService.itemFlightCache.itemSameCity = true;
            //se.itemSameCity = true;
            se.departCode ="";
          }
        }else{
          if(!data.SameCity){
            se.returnCode = data.code;
            se.returnCity = data.city;
            se.returnAirport = data.airport;
            //se.itemSameCity = false;
            se._flightService.itemFlightCache.itemSameCity = false;
            se._flightService.itemFlightCache.itemDepartSameCity = null;
            se._flightService.itemFlightCache.itemReturnSameCity = null;
          }else{
            //se.itemReturnSameCity = data;
            se.returnCity = data.city;
            se.returnAirport = data.country;
            se._flightService.itemFlightCache.itemSameCity = true;
            //se.itemSameCity = true;
            se.returnCode = "";
          }
          
        }
    }

    reloadInfo(){
        if(this._flightService.objSearch.departDate){
            this.cin = this.gf.getCinIsoDate(this._flightService.objSearch.departDate);
        }else{
            this.cin = this.gf.getCinIsoDate(new Date());
        }
        if(this._flightService.objSearch.returnDate){
            this.cout = this._flightService.objSearch.returnDate;
        }else{
            this.cout = moment(this.gf.getCinIsoDate(new Date())).add(1,'days');
        }
        if(this._flightService.itemFlightCache.adult){
            this.adult = this._flightService.itemFlightCache.adult;
        }
        if(this._flightService.itemFlightCache.arrchild){
          this.arrchild = this._flightService.itemFlightCache.arrchild;
        }
          
        if(this._flightService.itemFlightCache.child){
          //this.infant=0;
            this.child = this._flightService.itemFlightCache.child;
            if (this._flightService.itemFlightCache.arrchild) {
                for (let i = 0; i < this._flightService.itemFlightCache.arrchild.length; i++) {
                    let itemchild:any = this._flightService.itemFlightCache.arrchild[i];
                  if(itemchild.numage >=12){
                    if(this.child >1){
                        this.child--;
                        this.adult++;
                    }else{
                        this.child = 0;
                        this.adult++;
                    }
                    
                  }
                }
              }
        }else{
          this.child =0;
        }
        if(this._flightService.itemFlightCache.child==0 && this._flightService.itemFlightCache.arrchild.length==0 ){
          this._flightService.itemFlightCache.infant=0;
        }
        this.infant = this._flightService.itemFlightCache.infant;

        this._flightService.itemFlightCache.adult = this.adult;
        this._flightService.itemFlightCache.child = this.child;
        this._flightService.itemFlightCache.infant = this.infant;
        this._flightService.itemFlightCache.pax = this.adult + (this.child ? this.child :0)+ (this.infant ? this.infant : 0);
        this._flightService.itemFlightCache.arrchild = this.arrchild;
        
        this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
        this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");

        this.cindisplaymonth = moment(this.cin).format("DD") + " tháng " + moment(this.cin).format("MM") + ", " + moment(this.cin).format("YYYY");
        this.coutdisplaymonth = moment(this.cout).format("DD") + " tháng " + moment(this.cout).format("MM") + ", " + moment(this.cout).format("YYYY");

        this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
        this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");


        this.storage.get("itemFlightCache").then((data)=>{
          if(data){
            this.storage.remove("itemFlightCache").then(()=>{
              this.storage.set("itemFlightCache", JSON.stringify(this._flightService.itemFlightCache));
            })
          }else{
            this.storage.set("itemFlightCache", JSON.stringify(this._flightService.itemFlightCache));
          }
        })
        this.bindlunar();
    }

    switchDepart(){
      var se = this;
      let dc:any = document.getElementsByClassName('div-departcode')[0];
      let rc:any = document.getElementsByClassName('div-returncode')[0];
     
      // $('.div-departcode').removeClass('switch-visible').addClass('switch-disable');
      // $('.div-returncode').removeClass('switch-disable').addClass('switch-visible');
      
      let tempdepartcity = se.returnCity;
      let tempdepartcode = se.returnCode;
      let tempdepartairport = se.returnAirport;

      se.returnCity = se.departCity;
      se.returnCode = se.departCode;
      se.returnAirport = se.departAirport;
    
      se._flightService.itemFlightCache.returnCity = se.returnCity;
      se._flightService.itemFlightCache.returnCode = se.returnCode;
      se._flightService.itemFlightCache.returnAirport = se.returnAirport;

      se.departCity = tempdepartcity;
      se.departCode = tempdepartcode;
      se.departAirport = tempdepartairport;

      se._flightService.itemFlightCache.departCity = se.departCity;
      se._flightService.itemFlightCache.departCode = se.departCode;
      se._flightService.itemFlightCache.departAirport = se.departAirport;
      // $('.div-departcode').removeClass('switch-disable').addClass('switch-visible');
      // $('.div-returncode').removeClass('switch-visible').addClass('switch-disable');
    }

    closecalendar(){
      this.search();
      //this.modalCtrl.dismiss();
      
    }

    showLowestPrice(event){
      setTimeout(()=>{
        this.showlowestprice = event.target.checked;
        this._flightService.itemFlightCache.showCalendarLowestPrice = this.showlowestprice;
        if(this.departCode && this.returnCode){
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
      if(this.departCode && this.returnCode){
        let url = C.urls.baseUrl.urlFlight + "gate/apiv1/GetHotDealCalendar?fromplace="+this.departCode+"&toplace="+this.returnCode+"&getincache=false";
        this.gf.RequestApi("GET", url, {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8'
          }, {}, "homeflight", "showCalendarPrice").then((data) =>{
            if(data){
              let key = "listHotDealCalendar_"+this.departCode+"_"+this.returnCode+"_"+this.adult+ ( this.child ? "_" + this.child : "")+ ( this.infant ? "_" + this.infant : "");
              this.storage.set(key, data);
              if(data && data.departs && data.departs.length >0){

                if(this.flighttype == "twoway"){//2 chiều
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
      try {
        if($('.month-box').length >0){
          let diffday =moment(this.cout).diff(this.cin, "days");
          for (let index = 0; index < $('.month-box').length; index++) {
            const elementMonth = $('.month-box')[index];
            let objtextmonth = elementMonth.children[0].textContent.replace('Tháng ','');
            let monthstartdate:any = objtextmonth.trim().split(" ")[0];
            let yearstartdate:any = objtextmonth.trim().split(" ")[1];
            let textmonth = moment(this.gf.getCinIsoDate(new Date(yearstartdate, monthstartdate - 1, 1))).format('YYYY-MM');
            
            if(objtextmonth && objtextmonth.length >0){
              let listdepartinmonth = departs.filter((item) => { return moment(item.departTime).format('YYYY-MM') == textmonth});
              let listreturninmonth:any;
              let listreturnallmonth:any;
                if(this.flighttype == "twoway"){
                  listreturninmonth = arrivals.filter((item) => { return moment(item.departTime).format('YYYY-MM') == textmonth});
                  listreturnallmonth = [...arrivals];
                }
              
              let listdayinmonth = elementMonth.children[1].children[0].children[0].children;
              if(listdayinmonth && listdayinmonth.length >0){
                  for (let j = 0; j < listdayinmonth.length; j++) {
                    const elementday = listdayinmonth[j];
                    if(elementday && elementday.textContent){
                      //let fday:any = elementday.textContent;
                      let fday:any = elementday.children[0].children[0].textContent;
                      let fromdate = moment(this.gf.getCinIsoDate(new Date(yearstartdate, monthstartdate - 1, fday))).format('YYYY-MM-DD');
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
                            let itemtodate = listreturnallmonth.filter((d)=>{ return moment(d.departTime).format('YYYY-MM-DD') == todate });
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
                                $(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled normal-price'>${totalprice}</span>`);
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
                                $(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled normal-price'>${totalprice}</span>`);
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

    async showFlightPriority(){
      var se = this;
   
      
      const modal: HTMLIonModalElement =
      await se.modalCtrl.create({
        component: FlightselecttimepriorityPage,
      });
      modal.present();

      modal.onDidDismiss().then((data: OverlayEventDetail) => {
        if(data && data.data){
          if(se._flightService.objSearch){
            se._flightService.objSearch.timeDepartPriority = data.data.timeDepartPriority;
            se._flightService.objSearch.timeReturnPriority = data.data.timeReturnPriority;
            se.timedepartpriorityconfig = data.data.timeDepartPriority;
            se.timereturnpriorityconfig = data.data.timeReturnPriority;
          }
        }
      })
    }

    changeRoundTrip(ev){

      this.reloadInfoOneway(!ev.currentTarget.checked);
      this.flighttype= ev.currentTarget.checked ? "twoway" : "oneway";
      
    }

}