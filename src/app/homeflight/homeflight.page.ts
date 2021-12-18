import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform } from '@ionic/angular';
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
import { AppVersion } from '@ionic-native/app-version/ngx';
import { NetworkProvider } from '../network-provider.service';
import { BizTravelService } from '../providers/bizTravelService';

@Component({
    selector: 'app-homeflight',
    templateUrl: './homeflight.page.html',
    styleUrls: ['./homeflight.page.scss'],
  })
  export class HomeflightPage {
    cindisplay = '25-05-2020';
    coutdisplay = '27-05-2020';
    cinthu = "Thứ 3";
    coutthu = "Thứ 5";
    cotdate = 0;
    cofdate=0;
    adult=1;
    child=0;
    infant=0;
    public flighttype= "twoway";
    myCalendar: any;
    cin: any;
    cout: any;
    datecin: any;
    datecout: any;
    cindisplaymonth: string;
    coutdisplaymonth: string;
    departCity ="";
    departCode="";
    departAirport="";
    returnCity ="";
    returnCode="";
    returnAirport="";
    myflight: any={};
  itemSameCity:any;
  itemDepartSameCity: any;
  itemReturnSameCity: any;
  arrchild: any;
  cinthushort: string="";
  coutthushort: string="";
  listflighttopdeal: any=[];
  flightTabActive:any =1;
  isConnected: any=true;
  roundtriptext="khứ hồi/khách";
  countday: number;
  countdaydisplay :number =0;
  monthtext: string="Tháng";
  showlowestprice = false;
  checkInDisplayMonth: string;
  checkOutDisplayMonth: string;
  listtrips: any;
  memberid: any;
  isExtenal: any;
  allowclickcalendar: boolean = true;
  isNotice=false;
  isBizAccount: boolean;
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
        public appVersion: AppVersion,
        public networkProvider: NetworkProvider,
        private platform: Platform,
        public bizTravelService: BizTravelService) {
          this.getShowNotice();
          this.storage.get('jti').then(jti => {
            if (jti) {
              this.memberid = jti;
            }
          })
          this.networkProvider.getNetworkStatus().subscribe((connected: boolean) => {
            this.isConnected = connected;
          })

          this.platform.resume.subscribe(async()=>{
            this.networkProvider.getNetworkStatus().subscribe((connected: boolean) => {
              this.isConnected = connected;
            })
          })
          this.storage.remove("listAirport");
          this.storage.get("listAirport").then((data)=>{
            if(!data){
              this.loadLocation();
            }else{
              this._flightService.listAirport = data;
            }
          })
            
            this.storage.get("itemFlightCache").then((data)=>{
              if(data){
                data = JSON.parse(data);
                this._flightService.itemFlightCache = data;
                if(data.roundTrip != undefined){
                  this.flighttype = data.roundTrip ? 'twoway' : 'oneway';
                }
                
                this.myflight = {...data};
                this.departCode = data.departCode;
                this.departCity = data.departCity;
                this.departAirport = data.departAirport;

                this.returnCode = data.returnCode;
                this.returnCity = data.returnCity;
                this.returnAirport = data.returnAirport;
                let diffday = moment(data.checkInDate).diff(new Date(), 'days');
                if(diffday <= 0){
                  this.cin = moment(new Date()).add(7, 'days');
                  this.cout = this.flighttype == "twoway" ? moment(this.cin).add(2, 'days') : this.cin;
                }else{
                  this.cin = data.checkInDate;
                  this.cout = data.checkOutDate;
                }
                
                this.getDayName(this.cin, this.cout);
                this.adult = data.adult;
                this.child = data.child;
                this.infant = data.infant ? data.infant : 0;
                this.arrchild = data.arrchild;

                this.cindisplaymonth =  moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM") ;
                this.coutdisplaymonth =  moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");

                this.myflight.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
                this.myflight.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");

                this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
                this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");

                this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
                this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");

                this.isExtenal = data.isExtenal;

                if(data.itemSameCity){
                  this.itemSameCity = data.itemSameCity,
                  this.itemDepartSameCity= data.itemDepartSameCity,
                  this.itemReturnSameCity= data.itemReturnSameCity,
                  this.departCity= data.departCity,
                  this.returnCity= data.returnCity
                }

              }else{
                this.reloadInfo();
              }
            })

            this.storage.get('flighttopdeal').then((data) => {
              if(data){
                  this.loadcachetopdeal(data);
              }else{
                  this.loadflighttopdeal();
              }
            })
            
            setTimeout(()=>{
              this.loadflighttopdeal();
            }, 60 * 1000);

            this.loadCalendarPrice();

            this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
            if(this.departCode && this.returnCode){
              if(this.showlowestprice){
                $('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
              }else{
                $('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
              }
            }

            this.loadUserInfo();
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

            se._flightService.itemMenuFlightClick.pipe().subscribe(data => {
                se.zone.run(()=>{
                  se.flightTabActive = data;
                  if(data == 1){
                    $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
                  }
                  else {
                    if(data == 2){
                      se.loadUserInfo();
                    }
                    $(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                  }
                })
                
              })

              se._flightService.itemFlightReloadInfo.pipe().subscribe(data => {
                if(data ==1){
                    se.reloadInfoFlight();
                }
            })

            se._flightService.itemTabFlightFocus.pipe().subscribe(data => {
              if(data){
                  se.bindlunar();
              }
          })

          se._flightService.itemCheckTabActive.pipe().subscribe((data)=>{
            if(se.flightTabActive != 1){
              $(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
              $(".div-wraper-home").removeClass("cls-visible").addClass("cls-disabled");
              $(".cls-notice").removeClass("cls-visible").addClass("cls-disabled");
            }else{
              $(".cls-notice").removeClass("cls-disabled").addClass("cls-visible");
              $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
              $(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
            }
          })

          se.bizTravelService.accountBizTravelChange.pipe().subscribe((check)=> {
            if(check == 1){
              se.loadUserInfo();
            }else if(check == 2){
              se.isBizAccount = false;
            }
          })
        }

        /**
     * Load thông tin user
     */
   loadUserInfo() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
            var text = "Bearer " + auth_token;
            var options = {
                method: 'GET',
                url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers:
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
            };
            request(options, function (error, response, body) {
                if (response.statusCode == 200) {
                  if (body) {
                    var data = JSON.parse(body);
                    se.storage.remove('userInfoData');
                    se.storage.set('userInfoData', data);

                    if(data.bizAccount){
                      se.bizTravelService.bizAccount = data.bizAccount;
                      se.bizTravelService.isCompany = true;
                      se.isBizAccount = true;
                    }else{
                      se.bizTravelService.bizAccount = null;
                      se.bizTravelService.isCompany = false;
                      se.isBizAccount = false;
                    }
                    
                 }
                }else{
                  se.isBizAccount = false;
                }
               
            });
        } 
    })
}

        loadLocation(){
          var se = this;
          //let urlPath = "https://www.ivivu.com/ve-may-bay/data/allplace.json";
          //let urlPath = "https://beta-air.ivivu.com/data/allplace.json";
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
                error.page = "homeflight";
                error.func = "loadlocation";
                error.param =  JSON.stringify(options);
                C.writeErrorLog(error,response);
                throw new Error(error)
              };
              let result = JSON.parse(body);
              if(result && result.length >0){
                //result = result.filter((item) =>{ return item.country == "Việt Nam"});
                se.storage.set("listAirport", result);
                se._flightService.listAirport = result;
              }
          })
      }

        changeLocationInfo(data, isdepart){
            var se = this;
            if(isdepart){
              if(!data.SameCity){
                se.departCode = data.code;
                se.departCity = data.city;
                se.departAirport = data.airport;
                se.itemSameCity = false;
                se._flightService.itemFlightCache.itemSameCity = false;
                se._flightService.itemFlightCache.itemDepartSameCity = null;
                se._flightService.itemFlightCache.itemReturnSameCity = null;
              }
              else{
                se.itemDepartSameCity = data;
                se.departCity = data.city;
                se.departAirport = data.country;
                se._flightService.itemFlightCache.itemSameCity = true;
                se.itemSameCity = true;
                se.departCode ="";
              }
            }else{
              if(!data.SameCity){
                se.returnCode = data.code;
                se.returnCity = data.city;
                se.returnAirport = data.airport;
                se.itemSameCity = false;
                se._flightService.itemFlightCache.itemSameCity = false;
                se._flightService.itemFlightCache.itemDepartSameCity = null;
                se._flightService.itemFlightCache.itemReturnSameCity = null;
              }else{
                se.itemReturnSameCity = data;
                se.returnCity = data.city;
                se.returnAirport = data.country;
                se._flightService.itemFlightCache.itemSameCity = true;
                se.itemSameCity = true;
                se.returnCode = "";
              }
              
            }
            se.isExtenal = data.country != "Việt Nam" ? true : false;
            se._flightService.itemFlightCache.isExtenal = data.country != "Việt Nam" ? true : false;
        }

        reloadInfoFlight(){
          if(this._flightService.itemFlightCache){
            if(this._flightService.itemFlightCache.checkInDate){
              this.cin = this._flightService.itemFlightCache.checkInDate;
            }else{
                this.cin = moment(new Date()).add(7,'days');
            }
            if(this._flightService.itemFlightCache.checkOutDate){
                this.cout = this._flightService.itemFlightCache.checkOutDate;
            }else{
                this.cout = moment(new Date()).add(9,'days');
            }
            this.cinthu = this.getDayOfWeek(this.cin).dayname;
            this.coutthu = this.getDayOfWeek(this.cout).dayname;

            this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
            this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");

            this.cindisplaymonth = moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
            this.coutdisplaymonth = moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");

            this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
            this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");
            
            if(this._flightService.itemFlightCache){
              this.departCity = this._flightService.itemFlightCache.departCity;
              this.returnCity = this._flightService.itemFlightCache.returnCity;
              this.departCode = this._flightService.itemFlightCache.departCode;
              this.returnCode = this._flightService.itemFlightCache.returnCode;
              this.departAirport = this.getAirpot(this.departCode);
              this.returnAirport = this.getAirpot(this.returnCode);
              this.myflight.departCity = this._flightService.itemFlightCache.departCity;
              this.myflight.returnCity = this._flightService.itemFlightCache.returnCity;
              this.myflight.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
              this.myflight.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");
              this.myflight.roundTrip = this._flightService.itemFlightCache.roundTrip;
              this.myflight.isExtenal = this._flightService.itemFlightCache.isExtenal;
              this.flighttype = this._flightService.itemFlightCache.roundTrip ? 'twoway' : 'oneway';
            }
            
            }
        }

        reloadInfo(){
           
            if(!this.cin){
              this.cin = moment(new Date()).add(7,'days');
              this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
              this.cindisplaymonth = moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
              this.cinthu = this.getDayOfWeek(this.cin).dayname;
            }
            if(!this.cout){
              this.cout = moment(new Date()).add(9,'days');
              this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");
              this.coutdisplaymonth = moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");
              this.coutthu = this.getDayOfWeek(this.cout).dayname;
            }
            this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
            this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");

            if(this._flightService.itemFlightCache && this._flightService.itemFlightCache.adult){
                this.adult = this._flightService.itemFlightCache.adult;
            }
            if(this._flightService.itemFlightCache && this._flightService.itemFlightCache.arrchild){
              this.arrchild = this._flightService.itemFlightCache.arrchild;
            }
              
            if(this._flightService.itemFlightCache && this._flightService.itemFlightCache.child && this._flightService.itemFlightCache.arrchild){
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
            if(this._flightService.itemFlightCache && this._flightService.itemFlightCache.child==0 && this._flightService.itemFlightCache.arrchild && this._flightService.itemFlightCache.arrchild.length==0 ){
              this._flightService.itemFlightCache.infant=0;
            }
            this.infant = this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0;

            this._flightService.itemFlightCache.adult = this.adult;
            this._flightService.itemFlightCache.child = this.child;
            this._flightService.itemFlightCache.infant = this.infant ? this.infant : 0;
            this._flightService.itemFlightCache.pax = this.adult + (this.child ? this.child :0)+ (this.infant ? this.infant : 0);
            this._flightService.itemFlightCache.arrchild = this.arrchild;
            
          
            this.storage.get("itemFlightCache").then((data)=>{
              if(data){
                this.storage.remove("itemFlightCache").then(()=>{
                  this.storage.set("itemFlightCache", JSON.stringify(this._flightService.itemFlightCache));
                })
              }else{
                this.storage.set("itemFlightCache", JSON.stringify(this._flightService.itemFlightCache));
              }
            })
        }

        reloadInfoOneway(isoneway){
          if(isoneway){
            this.cout = this.cin;
          }else{
            this.cout = moment(this.cin).add(2,'days');
          }

         
          this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
          this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");

          this.cindisplaymonth = moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
          this.coutdisplaymonth = moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");

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
            }else if(value==2){
                itemListDeparture[0].setAttribute('aria-activedescendant',"rb-1-1");
                this.flighttype="oneway";
                $(".div-twoway").removeClass("rd-active");
                $(".div-oneway").addClass("rd-active");
                this.reloadInfoOneway(true);
            }
        }

        searchFlight(index){
          if(!this.isConnected){
            this.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
            return;
          }
          this.valueGlobal.backValue ="homeflight";
          this._flightService.searchDepartCode = index == 1 ? true : false;
          this.navCtrl.navigateForward("/flightsearchairport");
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
          monthstartdate = objTextMonthStartDate.trim().split(",")[0];
          yearstartdate = objTextMonthStartDate.trim().split(",")[1];
          monthenddate = objTextMonthEndDate.trim().split(",")[0];
          yearenddate = objTextMonthEndDate.trim().split(",")[1];
          var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
          var todate = new Date(yearenddate, monthenddate - 1, tday);
          let diffday =moment(todate).diff(fromdate, "days");
          this.countday = diffday;
          this.countdaydisplay = this.countday +1;
         
          var se = this;
          let allowseach = (diffday >=0) ? true : false;
          if (fromdate && todate && allowseach) {
            setTimeout(() => {
              se.modalCtrl.dismiss();
            }, 300);

            se.cin = moment(fromdate).format("YYYY-MM-DD");
            se.cout = se.flighttype=="twoway" ? moment(todate).format("YYYY-MM-DD") : moment(fromdate).format("YYYY-MM-DD");
            se.zone.run(() => {
             
              se.datecin = new Date(se.cin);
              se.datecout = new Date(se.cout);
              se.cindisplay = moment(se.datecin).format("DD-MM-YYYY");
              se.coutdisplay = moment(se.datecout).format("DD-MM-YYYY");
              se.cindisplaymonth = moment(se.datecin).format("DD") + " thg " + moment(se.cin).format("MM");
              se.coutdisplaymonth = moment(se.datecout).format("DD") + " thg " + moment(se.cout).format("MM");
              se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
                se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");
              
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
        let fromdate = new Date(moment(this.cin).format('YYYY-MM-DD'));
        let todate = new Date(moment(this.cout).format('YYYY-MM-DD'));
        let key = "listHotDealCalendar_"+this.departCode+"_"+this.returnCode;
        this.storage.get(key).then((data)=>{
          if(!data || (data.arrivals.length == 0 && data.departs.length ==0) ){
            this.loadCalendarPrice();
          }
        })
        
        this.countday = moment(todate).diff(moment(fromdate),'days');
        this.countdaydisplay = (this.flighttype == "twoway") ? (this.countday +1) : 1;
        let _daysConfig: DayConfig[] = [];
        for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
        _daysConfig.push({
            date: this.valueGlobal.listlunar[j].date,
            subTitle: moment(this.valueGlobal.listlunar[j].date).format("DD/MM") + ': ' +this.valueGlobal.listlunar[j].name,
            cssClass: 'lunarcalendar'
        })
        }
        var options:CalendarModalOptions;
        if(this.flighttype == "twoway"){
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
          let key = "listHotDealCalendar_"+this.departCode+"_"+this.returnCode;
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
          setTimeout(()=>{
              //custom style lịch giá
              $('.flight-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=end]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_close.svg' ></div>");
              if(this.countdaydisplay >0){
                $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${ this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'>${this.countdaydisplay} ngày <img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
              }else{
                $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${ this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'><img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
              }
              if(this.flighttype == "twoway"){
                $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${ this.checkInDisplayMonth } </div></div> <div class='div-width-100'><div class='text-date-normal p-l-8'>Ngày về</div> <div class='text-flight-datetime p-l-8 border-left' *ngIf='flighttype=='twoway''>${ this.checkOutDisplayMonth } </div></div></div>`);
              }else{
                $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${ this.checkInDisplayMonth } </div></div> </div>`);
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
        });
        var se = this;
        const event: any = await this.myCalendar.onDidDismiss();
        const date = event.data;
        if (event.data) {
        const from: CalendarResult = date.from;
        const to: CalendarResult = date.to;
        se.cin = moment(from.dateObj).format("YYYY-MM-DD");
        //se.cout = moment(to.dateObj).format("YYYY-MM-DD");
        se.cout = se.flighttype=="twoway" ? moment(to.dateObj).format("YYYY-MM-DD") : moment(from.dateObj).format("YYYY-MM-DD");
        se.zone.run(() => {
            // se.searchhotel.CheckInDate = se.cin;
            // se.searchhotel.CheckOutDate = se.cout;
            se.datecin = new Date(se.cin);
            se.datecout = new Date(se.cout);
            se.cindisplay = moment(se.datecin).format("DD-MM-YYYY");
            se.coutdisplay = moment(se.datecout).format("DD-MM-YYYY");
            se.cindisplaymonth = moment(se.datecin).format("DD") + " thg " + moment(se.cin).format("MM");
            se.coutdisplaymonth = moment(se.datecout).format("DD") + " thg " + moment(se.cout).format("MM");
            se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
                se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");

            se.getDayName(se.datecin, se.datecout);
        });
        }
    }


    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }

    bindlunar() {
        var se = this;
        se.cofdate = 0;
        se.cotdate = 0;
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
                        se.cinthu = se.valueGlobal.listlunar[i].name
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
                        se.coutthu = se.valueGlobal.listlunar[i].name
                    }
                    }
                }
                else{
                    this.getDayName(this.datecin, this.datecout);
                }
                }
        }
        
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

      choicePax() {
        this.gf.hideStatusBar();
        
        if(this.adult){
          this._flightService.itemFlightCache.adult = this.adult;
        }
        if(this.child){
          this._flightService.itemFlightCache.child = this.child;
        }
        if(this.infant){
          this._flightService.itemFlightCache.infant = this.infant;
        }
        if (this.arrchild) {
          this._flightService.itemFlightCache.arrchild = this.arrchild;
        }
        this.gf.setParams(false, "requestcombo");
        this.navCtrl.navigateForward("/flightselectpax");
      }

      checkValidDate() {
        return moment(this.cin).diff(new Date(), 'days') <0 ? false : true;
      }

      search(){
        var se = this;
        se._flightService.itemFlightCache = {};
        se._flightService.objectFilter = {};
        se._flightService.objectFilterReturn = {};
        se._flightService.itemFlightCache.departFlight = null;
        se._flightService.itemFlightCache.returnFlight = null;
        se._flightService.itemFlightCache.itemFlight = null;
        se.storage.remove('flightfilterobject');
        if(!se.departCode || !se.returnCode){
          se.gf.showToastWarning('Vui lòng chọn chiều đi, chiều về.');
          return;
        }
        if(se.departCode && se.returnCode && se.departCode === se.returnCode){
          se.gf.showToastWarning('Điểm khởi hành không được trùng với điểm đến. Vui lòng kiểm tra lại.');
          return;
        }
        if(!se.checkValidDate()){
          se.gf.showToastWarning('Ngày khởi hành không được nhỏ hơn ngày hiện tại.');
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
            title: "Đi " + se.departCity +" - " + se.returnCity,
            subtitle : se.cinthu + ", " + moment(se.cin).format("DD-M-YYYY") + " · " + (se.adult + se.child + (se.infant ? se.infant : 0) ) + " khách",
            titleReturn: "Về " + se.returnCity +" - " + se.departCity,
            subtitleReturn : se.coutthu + ", " + moment(se.cout).format("DD-M-YYYY") + " · " + (se.adult + se.child + (se.infant ? se.infant : 0)) + " khách",
            itemSameCity: se.itemSameCity,
            itemDepartSameCity: se.itemDepartSameCity,
            itemReturnSameCity: se.itemReturnSameCity,
            departCity: se.departCity,
            returnCity: se.returnCity,
            roundTrip : (se.flighttype=="twoway") ? true : false
        }

        se._flightService.itemFlightCache.roundTrip = (se.flighttype=="twoway") ? true : false;
        se._flightService.itemFlightCache.checkInDate = se.cin;
        se._flightService.itemFlightCache.checkOutDate = se.cout;
        se._flightService.itemFlightCache.checkInDisplayMonth = se.cindisplaymonth;
        se._flightService.itemFlightCache.checkOutDisplayMonth = se.coutdisplaymonth;
        se._flightService.itemFlightCache.adult = se.adult;
        se._flightService.itemFlightCache.child = se.child;
        se._flightService.itemFlightCache.infant = se.infant ? se.infant : 0;
        se._flightService.itemFlightCache.pax = se.adult + (se.child ? se.child :0)+ (se.infant ? se.infant : 0);
        se._flightService.itemFlightCache.arrchild = se.arrchild;
        se._flightService.itemFlightCache.departCity = se.departCity;
        se._flightService.itemFlightCache.departCode = se.departCode;
        se._flightService.itemFlightCache.departAirport = se.departAirport;
        se._flightService.itemFlightCache.returnCity = se.returnCity;
        se._flightService.itemFlightCache.returnCode = se.returnCode;
        se._flightService.itemFlightCache.returnAirport = se.returnAirport;
        se._flightService.itemFlightCache.step = 1;
        se._flightService.itemFlightCache.isExtenal = se.isExtenal;
      
        se._flightService.itemFlightCache.departTimeDisplay = se.cinthu + ", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
          se._flightService.itemFlightCache.returnTimeDisplay = se.coutthu + ", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");
  
          se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + se.cinthu + ", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
          se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + se.coutthu + ", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");

        se._flightService.itemFlightCache.departPaymentTitleDisplay = se.cinthushort + ", " + moment(se.cin).format("DD-MM")+ " · " + se.departCode + " - " +se.returnCode+ " · ";
        se._flightService.itemFlightCache.returnPaymentTitleDisplay = se.coutthushort + ", " + moment(se.cout).format("DD-MM")+ " · "+ se.returnCode + " - " +se.departCode+ " · ";

        se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(se.cin).dayname +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
        se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(se.cout).dayname +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");

        se._flightService.itemFlightCache.checkInDisplaysort = se.getDayOfWeek(se.cin).daynameshort +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
        se._flightService.itemFlightCache.checkOutDisplaysort = se.getDayOfWeek(se.cout).daynameshort +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");
        se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;
        if(se.itemSameCity){
          se._flightService.itemFlightCache.itemSameCity = se.itemSameCity;
          se._flightService.itemFlightCache.itemDepartSameCity = se.itemDepartSameCity;
          se._flightService.itemFlightCache.itemReturnSameCity = se.itemReturnSameCity;
        }

        se.storage.get("itemFlightCache").then((data)=>{
          if(data){
            se.storage.remove("itemFlightCache").then(()=>{
              se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
            })

          }else{
            se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
          }
        })
      



        se.navCtrl.navigateForward("/flightsearchresult");
       
      }

      showMyFlight(){
        var se = this;
        if(!se.isConnected){
          se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
          return;
        }
        se.storage.get("itemFlightCache").then((data)=>{
          data = JSON.parse(data);
          if(data.objSearch){
            let diffday = moment(data.checkInDate).diff(new Date(), 'days');
            if(diffday < 0){
              se.gf.showToastWarning('Ngày khởi hành không được nhỏ hơn ngày hiện tại. Vui lòng chọn lại!');
              return;
            }
            se._flightService.itemFlightCache= data;
            se._flightService.objSearch = data.objSearch;
            se.navCtrl.navigateForward("/flightsearchresult");
          }
          
        })
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

      loadflighttopdeal(){
        var se = this;
        let urlPath = C.urls.baseUrl.urlFlight + "gate/apiv1/GetHotDeal" + ( se.memberid ? "?memberid="+se.memberid : "");
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
                error.page = "homeflight";
                error.func = "loadflighttopdeal";
                error.param =  JSON.stringify(options);
                C.writeErrorLog(error,response);
                throw new Error(error)
              };
              let result = JSON.parse(body);
              if(result && result.length >0){
                
                  se.storage.get('flighttopdeal').then((data)=>{
                    if(data){
                      se.storage.remove('flighttopdeal').then(()=>{
                        se.storage.set("flighttopdeal", result);
                        se.loadcachetopdeal(data);
                      })
                    }else{
                      se.storage.set("flighttopdeal", result);
                      se.loadcachetopdeal(result);
                    }
                  })
                  
              }
          })
      }

      loadcachetopdeal(data){
        var se = this;
        se.zone.run(() => data.sort(function (a, b) {
          let direction = -1;
            if (a['price'] * 1 < b['price'] * 1) {
              return 1 * direction;
            }
            else if (a['price'] * 1 > b['price'] * 1) {
              return -1 * direction;
            }
          }))

        data.forEach(element => {
          element.roundTrip = false;
          if(element.depart){
            element.fromPlaceName =  element.depart.fromPlaceName;
            element.toPlaceNameDisplay = element.depart.toPlaceName.split(',')[0];
            element.dateDisplay = moment(element.depart.departTime).format('DD.MM');
            element.dateDepartDisplay = se.getDayOfWeek(element.depart.departTime).dayname + ", " + moment(element.depart.departTime).format('DD') + ' thg '+moment(element.depart.departTime).format('MM');
          }
          if(element.return){
            element.dateDisplay += " - " + moment(element.return.departTime).format('DD.MM');
            element.dateReturnDisplay = se.getDayOfWeek(element.return.departTime).dayname + ", " + moment(element.return.departTime).format('DD') + ' thg '+ moment(element.return.departTime).format('MM');
            element.roundTrip = true;
          }
          
          element.priceDisplay = se.gf.convertNumberToString(element.price);
        });
       
          se.listflighttopdeal = data;
         // console.log(data);
        //  se.loadflighttrips().then((data)=>{
        //   if(data && data.tripFuture.length >0){
        //       se.filterFlightTopDealByTrips(data.tripFuture);
        //   }
        //   });
      }

      select(item){
          var se = this;
          if(!se.isConnected){
            se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
            return;
          }
          se._flightService.objectFilter = {};
          se._flightService.itemFlightCache.departFlight = null;
          se._flightService.itemFlightCache.returnFlight = null;
          se._flightService.itemFlightCache.itemFlight = null;
          se.storage.remove('flightfilterobject');
          let objday:any = se.getDayOfWeek(item.depart.departTime);
          let objdayreturn:any = se.getDayOfWeek(item.return.departTime);
          se._flightService.objSearch = {
              departCode: item.depart.fromPlace,
              arrivalCode: item.return.fromPlace,
              departDate: item.depart.departTime,
              returnDate: item.return.departTime,
              adult: se.adult ? se.adult : 1,
              child: se.child ? se.child : 0,
              infant: se.infant ? se.infant : 0,
              title: "Đi " + item.fromPlaceName +" - " + item.toPlaceNameDisplay,
              subtitle : objday.dayname + ", " + moment(item.depart.departTime).format("DD-M-YYYY") + " · " + ((se.adult ? se.adult : 1) + (se.child ? se.child : 0) + (se.infant ? se.infant : 0) ) + " khách",
              titleReturn: "Về " + item.toPlaceNameDisplay +" - " + item.fromPlaceName,
              subtitleReturn : objdayreturn.dayname + ", " + moment(item.return.departTime).format("DD-M-YYYY") + " · " + 1 + " khách",
              itemSameCity: null,
              itemDepartSameCity: "",
              itemReturnSameCity: "",
              departCity: item.fromPlaceName,
              returnCity: item.toPlaceNameDisplay,
              roundTrip :item.roundTrip
          }
  
          se._flightService.itemFlightCache.roundTrip = item.roundTrip;
          se._flightService.itemFlightCache.checkInDate = item.depart.departTime;
          se._flightService.itemFlightCache.checkOutDate = item.return.departTime;
          se._flightService.itemFlightCache.checkInDisplayMonth = moment(item.depart.departTime).format("DD") + " thg " + moment(item.depart.departTime).format("MM") ;
          se._flightService.itemFlightCache.checkOutDisplayMonth = moment(item.return.departTime).format("DD") + " thg " + moment(item.return.departTime).format("MM") ;
          se._flightService.itemFlightCache.adult = se.adult ? se.adult : 1;
          se._flightService.itemFlightCache.child = se.child ? se.child : 0;
          se._flightService.itemFlightCache.infant = se.infant ? se.infant : 0;
          se._flightService.itemFlightCache.pax = se._flightService.itemFlightCache.adult*1 + se._flightService.itemFlightCache.child*1 +  se._flightService.itemFlightCache.infant*1 ;
          se._flightService.itemFlightCache.arrchild = se.arrchild ? se.arrchild : [];
          se._flightService.itemFlightCache.departCity = item.fromPlaceName;
          se._flightService.itemFlightCache.departCode = item.depart.fromPlace;
          se._flightService.itemFlightCache.departAirport = "";
          se._flightService.itemFlightCache.returnCity = item.toPlaceNameDisplay;
          se._flightService.itemFlightCache.returnCode = item.return.fromPlace;
          se._flightService.itemFlightCache.returnAirport = "";
          se._flightService.itemFlightCache.step = 1;
          se._flightService.itemFlightCache.departTimeDisplay = objday.dayname + ", " + moment(item.depart.departTime).format("DD") + " thg " + moment(item.depart.departTime).format("MM");
          se._flightService.itemFlightCache.returnTimeDisplay = objdayreturn.dayname + ", " + moment(item.return.departTime).format("DD") + " thg " + moment(item.return.departTime).format("MM");
  
          se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + objday.dayname + ", " + moment(item.depart.departTime).format("DD") + " thg " + moment(item.depart.departTime).format("MM");
          se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + objdayreturn.dayname + ", " + moment(item.return.departTime).format("DD") + " thg " + moment(item.return.departTime).format("MM");
  
          se._flightService.itemFlightCache.departPaymentTitleDisplay = objday.daynameshort + ", " + moment(item.depart.departTime).format("DD-MM")+ " · " + item.depart.fromPlace + " - " +item.return.fromPlace+ " · ";
          se._flightService.itemFlightCache.returnPaymentTitleDisplay = objdayreturn.daynameshort + ", " + moment(item.return.departTime).format("DD-MM")+ " · "+ item.return.fromPlace + " - " +item.depart.fromPlace+ " · ";

          se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(item.depart.departTime).dayname +", " + moment(item.depart.departTime).format("DD") + " thg " + moment(item.depart.departTime).format("MM");
          se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(item.return.departTime).dayname +", " + moment(item.return.departTime).format("DD") + " thg " + moment(item.return.departTime).format("MM");

          se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;  
  
          se.navCtrl.navigateForward("/flightsearchresult");
         
        }
        

        getAirpot(code){
          let name = '';
          let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code});
          return itemairport && itemairport.length >0 ? itemairport[0].airport : '';
           // switch (code) {
          //   case "SGN":
          //     name = "Sân bay Quốc tế Tân Sơn Nhất";
          //     break;
          //   case "PQC":
          //     name = "Sân bay Quốc tế Phú Quốc";
          //     break;
          //   case "DAD":
          //     name = "Sân bay Quốc tế Đà Nẵng";
          //     break;
          //   case "HAN":
          //     name = "Sân bay Quốc tế Nội Bài";
          //     break;
          //   case "VCA":
          //       name = "Sân bay Quốc tế Cần Thơ";
          //     break;
          //   case "CXR":
          //       name = "Sân bay Quốc tế Cam Ranh";
          //     break;
          //   case "VII":
          //     name = "Sân bay Quốc tế Vinh – Nghệ An";
          //     break;
          //   case "HUI":
          //     name = "Sân bay Quốc tế Phú Bài – Huế";
          //     break;
          //   case "VCL":
          //     name = "Sân bay Chu Lai Quảng Nam";
          //     break;
          //   case "VCS":
          //     name = "Sân bay Côn Đảo";
          //     break;
          //   case "BMV":
          //     name = "Sân bay Buôn Ma Thuột";
          //     break;
          //   case "THD":
          //     name = "Sân bay Thọ Xuân – Thanh Hóa";
          //     break;
          // }
          return name;
        }
      
        getRegionByCode(code){
          let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code});
          return itemairport && itemairport.length >0 ? itemairport[0].city : '';
          // let name = '';
          // switch (code) {
          //   case "SGN":
          //     name = "TP HCM";
          //     break;
          //   case "PQC":
          //     name = "Phú Quốc";
          //     break;
          //   case "DAD":
          //     name = "Đà Nẵng";
          //     break;
          //   case "HAN":
          //     name = "Hà Nội";
          //     break;
          //   case "VCA":
          //       name = "Cần Thơ";
          //     break;
          //   case "CXR":
          //       name = "Cam Ranh";
          //     break;
          //   case "VII":
          //       name = "Vinh – Nghệ An";
          //     break;
          //   case "HUI":
          //     name = "Huế";
          //     break;
          //   case "VCL":
          //     name = "Quảng Nam";
          //     break;
          //   case "VCS":
          //     name = "Bà Rịa-Vũng Tàu";
          //     break;
          //   case "BMV":
          //     name = "Đắk Lắk";
          //     break;
          //   case "THD":
          //     name = "Thanh Hóa";
          //     break;
          // }
          // return name;
        }

        closecalendar(){
          this.modalCtrl.dismiss();
          
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
          }, 100)
          
          
        }

        loadCalendarPrice(){
          if(this.departCode && this.returnCode){
            let url = C.urls.baseUrl.urlFlight + "gate/apiv1/GetHotDealCalendar?fromplace="+this.departCode+"&toplace="+this.returnCode+"&getincache=false";
            this.gf.RequestApi("GET", url, {
              "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
              'Content-Type': 'application/json; charset=utf-8'
              }, {}, "homeflight", "showCalendarPrice").then((data) =>{
                if(data){
                  let key = "listHotDealCalendar_"+this.departCode+"_"+this.returnCode;
                 
                  if(data && data.departs && data.departs.length >0){
                    this.storage.set(key, data);
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
                let monthstartdate:any = objtextmonth.trim().split(",")[0];
                let yearstartdate:any = objtextmonth.trim().split(",")[1];
                let textmonth = moment(new Date(yearstartdate, monthstartdate - 1, 1)).format('YYYY-MM');
                
                if(objtextmonth && objtextmonth.length >0){
                  let listdepartinmonth = departs.filter((item) => { return moment(item.departTime).format('YYYY-MM') == textmonth});
                  let listreturninmonth:any;
                  if(this.flighttype == "twoway"){
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

        loadflighttrips():Promise<any> {
          return new Promise((resolve, reject) => {
              this.storage.get('listmytrips').then(data => {
                if(data){
                  resolve(data);
                }else{
                  this.getdata().then((data) => {
                    resolve(data);
                  });
                }
              })
            })
        }

        getdata() :Promise<any> {
          var se = this;
          return new Promise((resolve, reject) => {
            se.storage.get('auth_token').then(auth_token => {
              if (auth_token ) {
                var text = "Bearer " + auth_token ;
                var options = {
                  method: 'GET',
                  //url: C.urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
                  url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=false&pageIndex=1&pageSize=25',
                  headers:
                  {
                    'accept': 'application/json',
                    'content-type': 'application/json-patch+json',
                    authorization: text
                  }
                };
                request(options, function (error, response, body) {
                  if (error) {
                    error.page = "mytrips";
                    error.func = "getdata";
                    error.param = JSON.stringify(options);
                    C.writeErrorLog(error,response);
                  } else {
                    if (body) {
                      se.zone.run(() => {
                        let lstTrips = JSON.parse(body);
                        se.storage.get('listmytrips').then(data => {
                          if(data){
                            se.storage.remove('listmytrips').then(()=>{
                              se.storage.set('listmytrips', lstTrips);
                            })
                          }else{
                            se.storage.set('listmytrips', lstTrips);
                          }
                        })

                        resolve(lstTrips);
                      });
                    } 
                  }
        
                });
              } else{
                resolve([]);
              }
            });
          })
          
        }

        filterFlightTopDealByTrips(data){
          var se = this;
            data = data.filter((datatrip) => { return datatrip.booking_id.indexOf('FLY') != -1 || datatrip.booking_id.indexOf('VMB') != -1 || datatrip.booking_type == 'FLY' || datatrip.booking_type == 'VMB'});
            if(data && data.length >0){
               let listdepartcode = data.map((itemfilter) => {return itemfilter.bookingsComboData[0].departCode });
               if(listdepartcode && listdepartcode.length >0){
                 let res = listdepartcode.some(r => r == se.departCode);

                 if(!res){
                  listdepartcode.push(se.departCode);
                 }
                 const uniqueCode = [...new Set( listdepartcode.map(obj => obj)) ];
                  if(uniqueCode && uniqueCode.length >0 ){
                    se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { 
                      let res = uniqueCode.some( code => code == itemdhd.depart.fromPlace);
                      return res;
                      });
                  }

               }else{
                if(se.departCode){
                  se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { return itemdhd.depart.fromPlace === se.departCode });
                }
               }
            }else{
              if(se.departCode){
                se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { return itemdhd.depart.fromPlace === se.departCode });
              }
            }
        }
        getShowNotice() {
          var se = this;
          var options = {
            'method': 'GET',
            'url': C.urls.baseUrl.urlMobile + '/mobile/OliviaApis/getCovidNotify',
            'headers': {
            }
          };
          request(options, function (error, response) {
            if (error) throw new Error(error);
            var data = JSON.parse(response.body);
            se.isNotice=data.show;
          });
        }
  }