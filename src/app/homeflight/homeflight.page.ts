import { Component, OnInit, ViewChild, HostListener, NgZone, Input, ElementRef } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform, IonContent } from '@ionic/angular';
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
import { CustomAnimations } from '../providers/CustomAnimations';
import { Lunar, BlockLunarDate } from 'lunar-calendar-ts-vi';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-homeflight',
    templateUrl: './homeflight.page.html',
    styleUrls: ['./homeflight.page.scss'],
  })
  export class HomeflightPage {
    @ViewChild('sliderInboundTab') sliderInboundTab: IonSlides;
    @ViewChild('sliderOutboundTab1') sliderOutboundTab1: IonSlides;
    @ViewChild('sliderOutboundTab2') sliderOutboundTab2: IonSlides;
    @ViewChild('sliderOutboundTab3') sliderOutboundTab3: IonSlides;
    @ViewChild('sliderOutboundTab4') sliderOutboundTab4: IonSlides;

    // @ViewChild('divslideroundtrip') slideroundtrip: ElementRef;
    // @ViewChild('divslideoneway') slideoneway: ElementRef;

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
  topSale: any;
  isExtenalDepart: boolean;
  isExtenalReturn: boolean;
  showLunarCalendar: any;
  listinternationalflighttopdeal=[];
  showmoreflight = false;
  showDivFlightTopDeal: any;
  tabInbound: number=1;
  slideOpts = {
    loop: false,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 10,
    zoom: {
      toggle: false
    },
  };
  loadinterflighttopdealdone: boolean=false;
  loadflighttopdealdone: boolean=false;
  listflighttopdealoneway: any=[];
  listflighttopdealroundtrip: any=[];
  roundTrip: any;
  hassomelistinteroneway: boolean;
  hassomelistintertwoway: boolean;

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
        public bizTravelService: BizTravelService,
        private http: HttpClient) {

          // this.content = content;
          // this.app = app;
          
          this.gettopSale();
          if(!this._flightService.listAllPlaceByArea){
            this.gf.getAllPlaceByArea().then((data) => {
              //console.log(data);
                this.zone.run(() => data.sort(function (a, b) {
                  return a.order - b.order;
                })
              )
              this._flightService.listAllPlaceByArea = data;
            });
          }
          
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
                let diffday = moment(this.gf.getCinIsoDate(data.checkInDate)).diff(this.gf.getCinIsoDate(new Date()), 'days');
                if(diffday < 0){
                  this.cin = moment(this.gf.getCinIsoDate(new Date())).add(7, 'days');
                  this.cout = this.flighttype == "twoway" ? moment(this.cin).add(2, 'days') : this.cin;
                }else{
                  if(this.gf.getCinIsoDate(data.checkInDate)){
                    this.cin = data.checkInDate;
                  }else{
                    this.cin = moment(this.gf.getCinIsoDate(new Date())).add(1, 'days');
                  }
                  
                  if(data.checkOutDate){
                    this.cout = data.checkOutDate;
                  }else{
                    this.cout = moment(this.gf.getCinIsoDate(new Date())).add(2, 'days');
                  }
                  
                }
                let _cin = this.gf.getCinIsoDate(this.cin);
                let _cout = this.gf.getCinIsoDate(this.cout);
                this.getDayName(_cin, _cout);
                this.adult = data.adult;
                this.child = data.child;
                this.infant = data.infant ? data.infant : 0;
                this.arrchild = data.arrchild;

                this.cindisplaymonth =  moment(_cin).format("DD") + " tháng " + moment(_cin).format("MM") + ", " + moment(_cin).format("YYYY");
                this.coutdisplaymonth =  moment(_cout).format("DD") + " tháng " + moment(_cout).format("MM") + ", " + moment(_cout).format("YYYY");

                this.myflight.checkInDisplayMonth = this.getDayOfWeek(_cin).dayname +", " + moment(_cin).format("DD") + " thg " + moment(_cin).format("MM");
                this.myflight.checkOutDisplayMonth = this.getDayOfWeek(_cout).dayname +", " + moment(_cout).format("DD") + " thg " + moment(_cout).format("MM");
                this.myflight.paxDisplay = ((data.adult ? `${data.adult} người lớn`: '') + (data.child ? `, ${data.child} trẻ em`: '') + (data.infant ? `, ${data.infant} em bé` : '') );

                this.checkInDisplayMonth = this.getDayOfWeek(_cin).dayname +", " + moment(_cin).format("DD") + " thg " + moment(_cin).format("MM");
                this.checkOutDisplayMonth = this.getDayOfWeek(_cout).dayname +", " + moment(_cout).format("DD") + " thg " + moment(_cout).format("MM");

                this.cindisplay = moment(_cin).format("DD-MM-YYYY");
                this.coutdisplay = moment(_cout).format("DD-MM-YYYY");

                this.isExtenal = data.isExtenal;
                this._flightService.itemFlightCache.isInternationalFlight = data.isInternationalFlight;
                if(typeof(data.isExtenalDepart) == 'undefined' && typeof(data.isExtenalReturn) == 'undefined'){
                  if(this._flightService.listAirport && this._flightService.listAirport.length >0){
                    let placeFrom = this._flightService.listAirport.filter((itemairport) => {return itemairport.code == data.departCode});
                    let placeTo = this._flightService.listAirport.filter((itemairport) => {return itemairport.code == data.returnCode});
                    if(placeFrom && placeFrom.length >0 && placeTo && placeTo.length >0){
                      this._flightService.itemFlightCache.isExtenalDepart = !placeFrom[0].internal;
                      this._flightService.itemFlightCache.isExtenalReturn = !placeTo[0].internal;
                      this._flightService.itemFlightCache.isInternationalFlight = !placeFrom[0].internal || !placeTo[0].internal;
                      this.isExtenalDepart = !placeFrom[0].internal;
                      this.isExtenalReturn = !placeTo[0].internal;
                    }else {
                      this._flightService.itemFlightCache.isInternationalFlight = false;
                      this._flightService.itemFlightCache.isExtenalDepart = false;
                      this._flightService.itemFlightCache.isExtenalReturn = false;
                      this.isExtenalDepart = false;
                      this.isExtenalReturn = false;
                    }
                  }else{

                    setTimeout(()=> {
                      if(this._flightService.listAirport && this._flightService.listAirport.length >0){
                        let placeFrom = this._flightService.listAirport.filter((itemairport) => {return itemairport.code == data.departCode});
                        let placeTo = this._flightService.listAirport.filter((itemairport) => {return itemairport.code == data.returnCode});
                        if(placeFrom && placeFrom.length >0 && placeTo && placeTo.length >0){
                          this._flightService.itemFlightCache.isExtenalDepart = !placeFrom[0].internal;
                          this._flightService.itemFlightCache.isExtenalReturn = !placeTo[0].internal;
                          this._flightService.itemFlightCache.isInternationalFlight = !placeFrom[0].internal || !placeTo[0].internal;
                          this.isExtenalDepart = !placeFrom[0].internal;
                          this.isExtenalReturn = !placeTo[0].internal;
                        }else {
                          this._flightService.itemFlightCache.isInternationalFlight = false;
                          this._flightService.itemFlightCache.isExtenalDepart = false;
                          this._flightService.itemFlightCache.isExtenalReturn = false;
                          this.isExtenalDepart = false;
                          this.isExtenalReturn = false;
                        }
                      }else{
                        this._flightService.itemFlightCache.isInternationalFlight = false;
                        this._flightService.itemFlightCache.isExtenalDepart = false;
                        this._flightService.itemFlightCache.isExtenalReturn = false;
                        this.isExtenalDepart = false;
                        this.isExtenalReturn = false;
                      }
                    }, 300)
                    
                  }
                }else{
                  this.isExtenalDepart = data.isExtenalDepart;
                  this.isExtenalReturn = data.isExtenalReturn;
                }
                
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
            
            setTimeout(()=>{
              if(!this._flightService.listHotDeal){
                this.loadflighttopdeal();
              }else{
                this.loadcachetopdeal(this._flightService.listHotDeal);
              }
              
            }, 1  * 1000);

            //5' refresh lại api lấy mới dữ liệu
            setTimeout(()=>{
              if(!this._flightService.listHotDeal){
                this.reloadflighttopdeal();
              }else{
                this.loadcachetopdeal(this._flightService.listHotDeal);
              }
            }, 1 * 60  * 1000);

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
            this.buildLinkQrCode();
        }

        buildLinkQrCode() {
          //let url = `https://cdn1.ivivu.com/newcdn/qr-payment?bankname=vietcombank&amount=200000&description=IVIVU1122`;
          
          
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

              se._flightService.getItemFlightReloadInfo().subscribe((data) => {
                if(data ==1){
                    se.reloadInfoFlight();
                }
            })

            se._flightService.itemTabFlightFocus.pipe().subscribe(data => {
              if(data){
                  se.bindlunar();
                  se.bindFlightTopDealFromCache();
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
          let urlPath = C.urls.baseUrl.urlFlight + "gate/apiv1/AllPlace";
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
              se.isExtenalDepart = data.internal != 1 ? true : false;
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
              se.isExtenalReturn = data.internal != 1 ? true : false;
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
            se.isExtenal = data.internal != 1 ? true : false;
            se._flightService.itemFlightCache.isExtenal = data.internal != 1 ? true : false;
            se._flightService.listPrices = [];
        }

        reloadInfoFlight(){
          if(this._flightService.objSearch){
            if(this._flightService.objSearch.departDate){
              this.cin = this._flightService.objSearch.departDate;
            }else{
              if(this._flightService.objSearch.checkInDisplayMonth){
                let _checkInDisplayMonth = this._flightService.objSearch.checkInDisplayMonth.replace(' tháng ',', ').replace(', ','-');
                _checkInDisplayMonth = _checkInDisplayMonth.replace(', ','-');
                _checkInDisplayMonth = _checkInDisplayMonth.replace(', ','-');
                let _darrday:any = _checkInDisplayMonth.split('-');
                let _d =new Date(Date.UTC(_darrday[2], _darrday[1] -1, _darrday[0], 0, 0, 0)), final = (_d.getTime() + Math.abs((_d.getTimezoneOffset()))*2 );
                this.cin  = new Date(final).toISOString().replace('Z','');
                this._flightService.objSearch.departDate = this.cin;
              }else{
                this.cin = this.gf.getCinIsoDate(moment(new Date()).add(7,'days'));
              }
              
            }
            if(this._flightService.objSearch.returnDate){
                this.cout = this.gf.getCinIsoDate(this._flightService.objSearch.returnDate);
            }else{
                this.cout = moment(this.gf.getCinIsoDate(new Date())).add(9,'days');
            }
            this.cinthu = this.getDayOfWeek(this.cin).dayname;
            this.coutthu = this.getDayOfWeek(this.cout).dayname;

            this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
            this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");

            this.cindisplaymonth = moment(this.cin).format("DD") + " tháng " + moment(this.cin).format("MM") + ", " + moment(this.cin).format("YYYY");
            this.coutdisplaymonth = moment(this.cout).format("DD") + " tháng " + moment(this.cout).format("MM") + ", " + moment(this.cout).format("YYYY");

            this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
            this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");
            
            if(this._flightService.objSearch){
              this.departCity = this._flightService.objSearch.departCity;
              this.returnCity = this._flightService.objSearch.returnCity;
              this.departCode = this._flightService.objSearch.departCode;
              this.returnCode = this._flightService.objSearch.arrivalCode;
              this.departAirport = this.getAirpot(this.departCode);
              this.returnAirport = this.getAirpot(this.returnCode);

              if(this._flightService.objSearch && this._flightService.objSearch.adult){
                this.adult = this._flightService.objSearch.adult;
              }
              if(this._flightService.objSearch && this._flightService.objSearch.arrchild){
                this.arrchild = this._flightService.objSearch.arrchild;
              }
                
              if(this._flightService.objSearch && this._flightService.objSearch.child && this._flightService.objSearch.arrchild){
                //this.infant=0;
                  this.child = this._flightService.objSearch.child;
                  if (this._flightService.objSearch.arrchild) {
                      for (let i = 0; i < this._flightService.objSearch.arrchild.length; i++) {
                          let itemchild:any = this._flightService.objSearch.arrchild[i];
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
              }
              else if(this._flightService.objSearch && this._flightService.objSearch.child){
                this.child = this._flightService.objSearch.child;
              }
              else{
                this.child =0;
              }
              if(this._flightService.objSearch && this._flightService.objSearch.child==0 && this._flightService.objSearch.arrchild && this._flightService.objSearch.arrchild.length==0 ){
                this._flightService.objSearch.infant=0;
              }
              this.infant = this._flightService.objSearch.infant ? this._flightService.objSearch.infant : 0;

              this._flightService.itemFlightCache.adult = this.adult;
              this._flightService.itemFlightCache.child = this.child;
              this._flightService.itemFlightCache.infant = this.infant ? this.infant : 0;
              this._flightService.itemFlightCache.pax = this.adult + (this.child ? this.child :0)+ (this.infant ? this.infant : 0);
              this._flightService.itemFlightCache.arrchild = this.arrchild;
              
              this.myflight.departCity = this._flightService.objSearch.departCity;
              this.myflight.returnCity = this._flightService.objSearch.returnCity;
              this.myflight.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname +", " + moment(this.cin).format("DD") + " thg " + moment(this.cin).format("MM");
              this.myflight.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname +", " + moment(this.cout).format("DD") + " thg " + moment(this.cout).format("MM");
              this.myflight.roundTrip = this._flightService.objSearch.roundTrip;
              this.myflight.isExtenal = this._flightService.objSearch.isExtenal;
              this.myflight.paxDisplay = ((this._flightService.objSearch.adult ? `${this._flightService.objSearch.adult} người lớn`: '') + (this._flightService.objSearch.child ? `, ${this._flightService.objSearch.child} trẻ em`: '') + (this._flightService.objSearch.infant ? `, ${this._flightService.objSearch.infant} em bé` : '') );
              this.flighttype = this._flightService.objSearch.roundTrip ? 'twoway' : 'oneway';
            }
          }
          else if(this._flightService.itemFlightCache){
            if(this._flightService.itemFlightCache.checkInDate){
              this.cin = this._flightService.itemFlightCache.checkInDate;
            }else{
              if(this._flightService.itemFlightCache.checkInDisplayMonth){
                let _checkInDisplayMonth = this._flightService.itemFlightCache.checkInDisplayMonth.replace(' tháng ',', ').replace(', ','-');
                _checkInDisplayMonth = _checkInDisplayMonth.replace(', ','-');
                _checkInDisplayMonth = _checkInDisplayMonth.replace(', ','-');
                let _darrday:any = _checkInDisplayMonth.split('-');
                let _d =new Date(Date.UTC(_darrday[2], _darrday[1] -1, _darrday[0], 0, 0, 0)), final = (_d.getTime() + Math.abs((_d.getTimezoneOffset()))*2 );
                this.cin  = new Date(final).toISOString().replace('Z','');
                this._flightService.itemFlightCache.checkInDate = this.cin;
              }else{
                this.cin = this.gf.getCinIsoDate(moment(new Date()).add(7,'days'));
              }
              
            }
            if(this._flightService.itemFlightCache.checkOutDate){
                this.cout = this.gf.getCinIsoDate(this._flightService.itemFlightCache.checkOutDate);
            }else{
                this.cout = moment(this.gf.getCinIsoDate(new Date())).add(9,'days');
            }
            this.cinthu = this.getDayOfWeek(this.cin).dayname;
            this.coutthu = this.getDayOfWeek(this.cout).dayname;

            this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
            this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");

            this.cindisplaymonth = moment(this.cin).format("DD") + " tháng " + moment(this.cin).format("MM") + ", " + moment(this.cin).format("YYYY");
            this.coutdisplaymonth = moment(this.cout).format("DD") + " tháng " + moment(this.cout).format("MM") + ", " + moment(this.cout).format("YYYY");

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
              this.myflight.paxDisplay = ((this._flightService.itemFlightCache.adult ? `${this._flightService.itemFlightCache.adult} người lớn`: '') + (this._flightService.itemFlightCache.child ? `, ${this._flightService.itemFlightCache.child} trẻ em`: '') + (this._flightService.itemFlightCache.infant ? `, ${this._flightService.itemFlightCache.infant} em bé` : '') );
              this.flighttype = this._flightService.itemFlightCache.roundTrip ? 'twoway' : 'oneway';
            }
            
            }
        }

        reloadInfo(){
           
            if(!this.cin){
              this.cin =  moment(this.gf.getCinIsoDate(new Date())).add(7,'days');
              this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
              this.cindisplaymonth = moment(this.cin).format("DD") + " tháng " + moment(this.cin).format("MM")+ ", " + moment(this.cin).format("YYYY");
              this.cinthu = this.getDayOfWeek(this.cin).dayname;
            }
            if(!this.cout){
              this.cout = moment(this.gf.getCinIsoDate(new Date())).add(9,'days');
              this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");
              this.coutdisplaymonth = moment(this.cout).format("DD") + " tháng " + moment(this.cout).format("MM") + ", " + moment(this.cout).format("YYYY");
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
            this.cout = this.gf.getCinIsoDate(this.cin);
          }else{
            this.cout = moment(this.gf.getCinIsoDate(this.cin)).add(2,'days').format("YYYY-MM-DD");
          }

         
          this.cindisplay = moment(this.cin).format("DD-MM-YYYY");
          this.coutdisplay = moment(this.cout).format("DD-MM-YYYY");

          this.cindisplaymonth = moment(this.cin).format("DD") + " tháng " + moment(this.cin).format("MM")+ ", " + moment(this.cin).format("YYYY");
          this.coutdisplaymonth = moment(this.cout).format("DD") + " tháng " + moment(this.cout).format("MM")+ ", " + moment(this.cout).format("YYYY");

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

        changeRoundTrip(ev){

          this.reloadInfoOneway(!ev.currentTarget.checked);

          if(this.listflighttopdeal && this.listflighttopdeal.length >0){
           this.showDivFlightTopDeal = this.listflighttopdeal.some(item => item.roundTrip == ev.currentTarget.checked);
          }
          this.zone.run(()=>{
            this.flighttype= ev.currentTarget.checked ? "twoway" : "oneway";
            this.roundTrip = ev.currentTarget.checked;
            this.tabInbound = 1;
            for (let index = 0; index < this.listinternationalflighttopdeal.length; index++) {
              const element = this.listinternationalflighttopdeal[index];
              element.tabInbound =1;
            }
            for (let index = 0; index < $('.div-wrap-dot').length; index++) {
              const element = $('.div-wrap-dot')[index];
              if(element && element.children && element.children.length >0)
                for (let index = 0; index < element.children.length; index++) {
                  const elementc = element.children[index];
                  if(index == 0){
                    elementc.addClass('selected');
                  }else{
                    elementc.removeClass('selected');
                  }
                  
                }
            }
            
          })
          
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
          monthstartdate = objTextMonthStartDate.trim().split(" ")[0];
          yearstartdate = objTextMonthStartDate.trim().split(" ")[1];
          monthenddate = objTextMonthEndDate.trim().split(" ")[0];
          yearenddate = objTextMonthEndDate.trim().split(" ")[1];
          var fromdate = this.gf.getCinIsoDate(new Date(yearstartdate, monthstartdate - 1, fday));
          var todate = this.gf.getCinIsoDate(new Date(yearenddate, monthenddate - 1, tday));
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
             
              //se.datecin = new Date(se.cin);
              //se.datecout = new Date(se.cout);
              se.cindisplay = moment(se.gf.getCinIsoDate(se.cin)).format("DD-MM-YYYY");
              se.coutdisplay = moment(se.gf.getCinIsoDate(se.cout)).format("DD-MM-YYYY");
              se.cindisplaymonth = moment(se.cin).format("DD") + " tháng " + moment(se.cin).format("MM")+ ", " + moment(this.cin).format("YYYY");
              se.coutdisplaymonth = moment(se.cout).format("DD") + " tháng " + moment(se.cout).format("MM") + ", " + moment(this.cout).format("YYYY");
              se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname +", " + moment(se.cin).format("DD") + " thg " + moment(se.cin).format("MM");
                se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname +", " + moment(se.cout).format("DD") + " thg " + moment(se.cout).format("MM");
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
        if(typeof(this.isExtenalDepart) != 'undefined' && typeof(this.isExtenalReturn) != 'undefined'){
          this._flightService.itemFlightCache.isInternationalFlight = (this.isExtenalDepart || this.isExtenalReturn);
        }
        this._flightService.keyLoadMorePrices = "";
        this.allowclickcalendar = false;
        let fromdate = this.gf.getCinIsoDate(moment(this.cin).format('YYYY-MM-DD'));
        let todate = this.gf.getCinIsoDate(moment(this.cout).format('YYYY-MM-DD'));
        let fd = this.gf.getCinIsoDate(moment(this.cout));
        let ed = this.gf.getCinIsoDate(moment(moment(fd).subtract(1, 'days')).format('YYYY-MM-DD'));
        //let monthed = new Date(todate).getMonth();
        let key = "listHotDealCalendar_"+this.departCode+"_"+this.returnCode+"_"+this.adult+ ( this.child ? "_" + this.child : "")+ ( this.infant ? "_" + this.infant : "");
        this.storage.get(key).then((data)=>{
          if(!data || (data.arrivals.length == 0 && data.departs.length ==0) ){
            this.loadCalendarPrice();
          }
        })
        let cindayofweek = this.gf.getDayOfWeek(this.gf.getCinIsoDate(this.cin)).daynameshort;
        let cindaydisplay = moment(this.gf.getCinIsoDate(this.cin)).format('DD');
        let cinmonthdisplay = 'Thg ' + moment(this.gf.getCinIsoDate(this.cin)).format('M');

        let coutdayofweek = this.gf.getDayOfWeek(this.gf.getCinIsoDate(this.cout)).daynameshort;
        let coutdaydisplay = moment(this.gf.getCinIsoDate(this.cout)).format('DD');
        let coutmonthdisplay = 'Thg ' + moment(this.gf.getCinIsoDate(this.cout)).format('M');
        
        this.countday = moment(todate).diff(moment(fromdate),'days');
        this.countdaydisplay = (this.flighttype == "twoway") ? (this.countday +1) : 1;
        let tetConfig = ['29 Tết','30 Tết','Mùng 1','Mùng 2','Mùng 3','Mùng 4','Mùng 5','Mùng 6','Mùng 7','Mùng 8','Mùng 9','Mùng 10',];
        let _daysConfig: DayConfig[] = [];
        for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
         
          const lunar: Lunar = new Lunar();
          let _day = this.valueGlobal.listlunar[j].date;
          lunar.getBlockLunarDate(_day);

          _daysConfig.push({
              date: this.valueGlobal.listlunar[j].date,
              subTitle: moment(this.valueGlobal.listlunar[j].date).format('DD')+':' +this.valueGlobal.listlunar[j].name +':' + (lunar.getBlockLunarDate(_day).lunarDate == 1 ? `${lunar.getBlockLunarDate(_day).lunarDate.toString()}/${lunar.getBlockLunarDate(_day).lunarMonth.toString()}`: lunar.getBlockLunarDate(_day).lunarDate.toString()),
              cssClass: 'lunarcalendar lunardate'
          })
        }
        for (let k = 0; k < 365; k++) {
          let addday = moment(new Date()).add(k, 'days').format('YYYY-MM-DD');
          const lunar: Lunar = new Lunar();
          lunar.getBlockLunarDate(addday);

          _daysConfig.push({
                date: addday as any,
                subTitle:  lunar.getBlockLunarDate(addday).lunarDate == 1 ? `${lunar.getBlockLunarDate(addday).lunarDate.toString()}/${lunar.getBlockLunarDate(addday).lunarMonth.toString()}`: lunar.getBlockLunarDate(addday).lunarDate.toString(),
                cssClass: 'lunardate'
              })
         
        }

        var options:CalendarModalOptions;
        if(this.flighttype == "twoway"){
          options  = {
            pickMode: "range",
            title: "Chọn ngày",
            monthFormat: " M YYYY",
            weekdays: ["CN","T2", "T3", "T4", "T5", "T6", "T7", ],
            weekStart: 1,
            closeLabel: "",
            doneLabel: "",
            step: 0,
            defaultScrollTo: moment(fromdate).toDate(),
            defaultDateRange: { from: fromdate, to: todate },
            daysConfig: _daysConfig
            };
        }else{
          options  = {
            pickMode: "single",
            title: "Chọn ngày",
            monthFormat: " M YYYY",
            weekdays: ["CN","T2", "T3", "T4", "T5", "T6", "T7", ],
            weekStart: 1,
            closeLabel: "",
            doneLabel: "",
            step: 0,
            defaultScrollTo: moment(fromdate).toDate(),
            defaultDate: fromdate,
            //defaultDateRange: { from: fromdate, to: todate },
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
               //add check lịch âm
               if(this.showLunarCalendar){
                $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lunar-calendar'> <div class='div-width-100 d-flex'> <div class='m-right-8 '><ion-checkbox (ionChange)="checkLunarCalendar($event)" [(ngModel)]="showLunarCalendar" color="secondary" checked style="width: 20px; height: 20px" class='chk-showlunar'></ion-checkbox></div> <div class='text-calendar p-top-3'>Thêm lịch âm</div> </div> </div>`);
              }else{
                $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lunar-calendar'> <div class='div-width-100 d-flex'> <div class='m-right-8 '><ion-checkbox (ionChange)="checkLunarCalendar($event)" [(ngModel)]="showLunarCalendar" color="secondary" style="width: 20px; height: 20px" class='chk-showlunar'></ion-checkbox></div> <div class='text-calendar p-top-3'>Thêm lịch âm</div> </div> </div>`);
              }
              //add div show giá thấp nhất
              if(this.showlowestprice){
                $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lunar-calendar p-bottom-14'> <div class='div-width-100 d-flex'> <div class='m-right-8 '><ion-checkbox (ionChange)="showLowestPrice($event)" [(ngModel)]="showlowestprice" color="secondary" checked style="width: 20px; height: 20px" class='button-show-lowest-price'></ion-checkbox></div> <div class='text-calendar p-top-3'>Xem giá ước tính thấp nhất</div> </div> </div>`);
              }else{
                $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lunar-calendar p-bottom-14'> <div class='div-width-100 d-flex'> <div class='m-right-8 '><ion-checkbox (ionChange)="showLowestPrice($event)" [(ngModel)]="showlowestprice" color="secondary" style="width: 20px; height: 20px" class='button-show-lowest-price'></ion-checkbox></div> <div class='text-calendar p-top-3'>Xem giá ước tính thấp nhất</div> </div> </div>`);
              }
              
              //add event cho button show price
              //$('.button-show-lowest-price').click(e => this.showLowestPrice(e));
              var container = document.querySelector(".button-show-lowest-price");

              container.addEventListener("touchend", (e)=>{
                  this.showLowestPrice(e);
              }, false);

              var container = document.querySelector(".chk-showlunar");

              container.addEventListener("touchend", (e)=>{
                  this.checkLunarCalendar(e);
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
              if(this.showLunarCalendar){
                $('.lunardate').addClass('date-lunar-visible');
              }else {
                $('.lunardate').removeClass('date-lunar-visible');
              }
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
                  $('#'+em.id).addClass('cls-animation-calendar');
                    //let divsmall = $('#'+em.id+' small');
                    let divsmall = $('#'+em.id).find('.lunarcalendar > small');
                    if(divsmall && divsmall.length >0){
                      $('#'+em.id).append("<div class='div-month-text-small'></div>");
                      
                      for (let i = 0; i < divsmall.length; i++) {
                        const es = divsmall[i];
                        let arres = es.innerHTML.split(':');
                        $('#'+em.id+' .div-month-text-small').append("<div class='div-border-small sm-"+em.id+'-'+i+"'></div>");
                       
                        if(arres && arres.length >1){
                          es.innerHTML = arres[2];
                        }
                        let newdiv = "<small><span class='text-red'>"+arres[0]+"</span>: "+"<span class='text-black'>"+arres[1]+"</span></small>";
                        $('.sm-'+em.id+'-'+i).append(newdiv);
                      }
                    }
                }
              }

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


            let se = this;
            if(se._flightService.itemFlightCache.isInternationalFlight){
              $(document).ready(function() {
                
                $('.flight-calendar-custom ion-calendar-modal ion-content')[0].id = 'flight-modal-custom-content-scroll';
               
                const scrollContent = document.getElementById('flight-modal-custom-content-scroll');
                let _daterange = moment(se.cout).diff(se.cin, 'days');
                
                
                scrollContent.addEventListener('ionScroll', (e:any) => {
                  let _m = Math.floor(e.detail.currentY/360);
                  let _month:any,_year:any;
                  setTimeout(()=> {
                    if(_m >0){
                      _month = moment(se.cin).add(_m, 'month').format('M');
                      _year = moment(se.cin).add(_m, 'month').format('YYYY');
                    }else if(_m <0){
                      _month = moment(se.cin).subtract(_m, 'month').format('M');
                      _year = moment(se.cin).subtract(_m, 'month').format('YYYY');
                    }
                    else if(_m ==0 && moment(se.cin).diff(new Date(), 'month') >0) {
                      //tháng checkin > ngày hiện tại && cuộn về đầu => load giá rẻ tháng đầu(m=0)
                      _month = moment(new Date()).format('M');
                      _year = moment(new Date()).format('YYYY');
                    }

                    if(_month && _year && se.departCode && se.returnCode){
                      let _fdate = new Date(_year, _month, 1, 0, 0,0);
                      let _tdate = new Date(_year, _month, 1 + _daterange, 0, 0,0);
                      let newkey = `${moment(_fdate).format('YYYY-MM-DD')}_${moment(_tdate).format('YYYY-MM-DD')}_${se.departCode}_${se.returnCode}`;
                      if(se._flightService.keyLoadMorePrices != newkey){
                        se.loadMorePricesByMonth(_fdate, _tdate, se.departCode, se.returnCode);
                      }
                      
                    }
                    
                  },10);

                  if(e.detail.currentY >= 3816){
                    let divmonth = $('.month-box');
                    if(divmonth && divmonth.length >0){
                      for (let index = 0; index < divmonth.length; index++) {
                        const em = divmonth[index];
                        if(!$('#'+em.id).hasClass('cls-animation-calendar')){
                          $('#'+em.id).addClass('cls-animation-calendar');
                        }
                        
                      }
                    }
                  }
                });
            })
            }
              
          },10)
        });
        // this.myCalendar
        var se = this;
        const event: any = await se.myCalendar.onDidDismiss();
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
            se.datecin = se.gf.getCinIsoDate(se.cin);
            se.datecout = se.gf.getCinIsoDate(se.cout);
            se.cindisplay = moment(se.datecin).format("DD-MM-YYYY");
            se.coutdisplay = moment(se.datecout).format("DD-MM-YYYY");
            se.cindisplaymonth = moment(se.datecin).format("DD") + " tháng " + moment(se.cin).format("MM") + ", " + moment(se.cin).format("YYYY");
            se.coutdisplaymonth = moment(se.datecout).format("DD") + " tháng " + moment(se.cout).format("MM") + ", " + moment(se.cout).format("YYYY");
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
                    se.getDayName(se.cin, se.cout);
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
                    se.getDayName(se.cin, se.cout);
                }
                }
        }
        
    }
    getDayName(datecin, datecout) {
        if (datecin) {
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
        if (datecout) {
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

      checkValidFromToDate() {
        return moment(this.cout).diff(this.cin, 'days') <0 ? false : true;
      }

      search(){
        var se = this;
        se._flightService.itemFlightCache = {};
        se._flightService.objectFilter = {};
        se._flightService.objectFilterInternational = {};
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
        if(se.flighttype == 'twoway' && !se.checkValidFromToDate()){
          se.gf.showToastWarning('Ngày về không được nhỏ hơn ngày đi.');
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
            title: se.departCity +" → " + se.returnCity,
            dayDisplay: se.cinthu + ", " +moment(se.cin).format("DD") +  " thg " +moment(se.cin).format("M"),
            subtitle : " · " + (se.adult + se.child + (se.infant ? se.infant : 0) ) + " khách"+ " · " + (se.flighttype=="twoway" ? ' Khứ hồi' : ' Một chiều'),
            titleReturn: se.returnCity +" → " + se.departCity,
            dayReturnDisplay: se.coutthu + ", " +moment(se.cout).format("DD") + " thg " + moment(se.cout).format("M") ,
            subtitleReturn :  " · " + (se.adult + se.child + (se.infant ? se.infant : 0)) + " khách"+ " · " + (se.flighttype=="twoway" ? ' Khứ hồi' : ' Một chiều'),
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

        se._flightService.itemFlightCache.departPaymentTitleDisplay = se.cinthushort + ", " + moment(se.cin).format("DD-MM")+ " · " + se.departCode + " → " +se.returnCode+ " · ";
        se._flightService.itemFlightCache.returnPaymentTitleDisplay = se.coutthushort + ", " + moment(se.cout).format("DD-MM")+ " · "+ se.returnCode + " → " +se.departCode+ " · ";

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
        //se._flightService.itemFlightCache.isExtenalDepart = se.isExtenalDepart;
       // se._flightService.itemFlightCache.isExtenalReturn = se.isExtenalReturn;

        

        //se._flightService.itemFlightCache.isInternationalFlight = (se.isExtenalDepart || se.isExtenalReturn);

        se.storage.get("itemFlightCache").then((data)=>{
          if(data){
            se.storage.remove("itemFlightCache").then(()=>{
              se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
            })

          }else{
            se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
          }
        })
        if(se._flightService.listAirport && se._flightService.listAirport.length >0){
          let placeFrom = se._flightService.listAirport.filter((itemairport) => {return itemairport.code == se.departCode});
          let placeTo = se._flightService.listAirport.filter((itemairport) => {return itemairport.code == se.returnCode});
          if(placeFrom && placeFrom.length >0 && placeTo && placeTo.length >0){
         
            se._flightService.itemFlightCache.isExtenalDepart = !placeFrom[0].internal;
                  se._flightService.itemFlightCache.isExtenalReturn = !placeTo[0].internal;
                  se._flightService.itemFlightCache.isInternationalFlight = !placeFrom[0].internal || !placeTo[0].internal;
                  se._flightService.itemFlightCache.fromCountryCode = placeFrom[0].countryCode;
                  se._flightService.itemFlightCache.toCountryCode = placeTo[0].countryCode;

                  if(se._flightService.itemFlightCache.isInternationalFlight){
                    se.navCtrl.navigateForward("/flightsearchresultinternational");
                  }else{
                      se._flightService.itemFlightCache.isInternationalFlight = false;
                      se._flightService.itemFlightCache.isExtenalDepart = false;
                      se._flightService.itemFlightCache.isExtenalReturn = false;
                      se.navCtrl.navigateForward("/flightsearchresult");
                  }
            
          }else {
            se._flightService.itemFlightCache.isInternationalFlight = false;
            se._flightService.itemFlightCache.isExtenalDepart = false;
            se._flightService.itemFlightCache.isExtenalReturn = false;
            se.navCtrl.navigateForward("/flightsearchresult");
          }
        }else{
          se._flightService.itemFlightCache.isInternationalFlight = false;
          se._flightService.itemFlightCache.isExtenalDepart = false;
          se._flightService.itemFlightCache.isExtenalReturn = false;
          se.navCtrl.navigateForward("/flightsearchresult");
        }
        
       
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
            se.myflight.paxDisplay = ((data.objSearch.adult ? `${data.objSearch.adult} người lớn`: '') + (data.objSearch.child ? `, ${data.objSearch.child} trẻ em`: '') + (data.objSearch.infant ? `, ${data.objSearch.infant} em bé` : '') );
            se._flightService.itemFlightCache.adult = se._flightService.objSearch.adult;
            se._flightService.itemFlightCache.child = se._flightService.objSearch.child;
            se._flightService.itemFlightCache.infant = se._flightService.objSearch.infant;
            se._flightService.itemFlightCache.arrchild = se._flightService.objSearch.arrchild;
            if(se._flightService.itemFlightCache.isInternationalFlight){
              se.navCtrl.navigateForward("/flightsearchresultinternational");
            } else {
              se._flightService.itemFlightCache.isExtenalDepart = false;
              se._flightService.itemFlightCache.isExtenalReturn = false;
              se._flightService.itemFlightCache.isInternationalFlight = false;
              se.navCtrl.navigateForward("/flightsearchresult");
            }
          }
          
        })
      }

      switchDepart(){
        var se = this;
        //let dc:any = document.getElementsByClassName('div-departcode')[0];
        //let rc:any = document.getElementsByClassName('div-returncode')[0];
       
        // $('.div-departcode').removeClass('switch-visible').addClass('switch-disable');
        // $('.div-returncode').removeClass('switch-disable').addClass('switch-visible');
        
        let tempdepartcity = se.returnCity;
        let tempdepartcode = se.returnCode;
        let tempdepartairport = se.returnAirport;

        se.zone.run(()=>{
       
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
            
        })
      
      }

      loadflighttopdeal(){
        var se = this;
        let urlPath = C.urls.baseUrl.urlFlight + "gate/apiv1/GetHotDeal" + ( se.memberid ? "?memberid="+(se.memberid||'')+"&version=2" : "?version=2");
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
                se._flightService.listHotDeal = result;
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

      reloadflighttopdeal(){
        var se = this;
        let urlPath = C.urls.baseUrl.urlFlight + "gate/apiv1/GetHotDeal" + ( se.memberid ? "?memberid="+(se.memberid||'')+"&version=2" : "?version=2");
          let headers = {
                  "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                  'Content-Type': 'application/json; charset=utf-8'
                  }
          this.gf.RequestApi('GET', urlPath, headers, {}, '', '').then((data)=>{
            se.storage.get('flighttopdeal').then((data)=>{
              if(data){
                se.storage.remove('flighttopdeal').then(()=>{
                  se.storage.set("flighttopdeal", data);
                  se.loadcachetopdeal(data);
                })
              }else{
                se.storage.set("flighttopdeal", data);
                se.loadcachetopdeal(data);
              }
            })
          })
      }

      bindFlightTopDealFromCache(){
        let se = this;
        se.storage.get('flighttopdeal').then((data)=>{
          if(data){
            se.loadcachetopdeal(data);
          }
        })
      }

      loadcachetopdeal(_data){
        var se = this;
        
        if(_data && _data.length >0 && _data[0] && _data[0].list){
          let data = [..._data];
          data.forEach(elementdata => {
            elementdata.list.forEach(element => {
              element.roundTrip = false;
              element.timesortorder = new Date(element.depart.departTime).getTime();
              if(element.depart){
                element.fromPlaceName =  element.depart.fromPlaceName;
                element.toPlaceNameDisplay = element.depart.toPlaceName;
                element.dateDisplay = moment(element.depart.departTime).format('DD.MM');
                element.dateDepartDisplay = se.getDayOfWeek(element.depart.departTime).dayname + ", " + moment(element.depart.departTime).format('DD') + ' thg '+moment(element.depart.departTime).format('MM');
              }
              if(element.return && element.return.fromPlaceName){
                element.dateDisplay += " - " + moment(element.return.departTime).format('DD.MM');
                element.dateReturnDisplay = se.getDayOfWeek(element.return.departTime).dayname + ", " + moment(element.return.departTime).format('DD') + ' thg '+ moment(element.return.departTime).format('MM');
                element.roundTrip = true;
              }
              
              element.priceDisplay = se.gf.convertNumberToString(element.price);
            });
          });
          se.listflighttopdeal = data[0].list;
          se.listflighttopdealoneway = se.listflighttopdeal.filter((item) => {return item.roundTrip = false});
          se.listflighttopdealroundtrip = se.listflighttopdeal.filter((item) => {return item.roundTrip = true});

          if(data.length >1){
            let __data = [..._data];
            se.listinternationalflighttopdeal = __data.splice(1,__data.length -1);
            se.showDivFlightTopDeal = se.listflighttopdeal.some(item => item.roundTrip == (this.flighttype == 'twoway'));
          }
          setTimeout(()=>{
            if(se.listinternationalflighttopdeal && se.listinternationalflighttopdeal.length >0 && se.listinternationalflighttopdeal[0] && se.listinternationalflighttopdeal[0].list){
              
                for (let index = 0; index < se.listinternationalflighttopdeal.length; index++) {
                    const element = se.listinternationalflighttopdeal[index];
                
                  element.tabInbound =1;
                  element.listoneway = element.list.filter((item) => {return item.return && !item.return.fromPlaceName });
                  element.listroundtrip = element.list.filter((item) => {return item.return && item.return.fromPlaceName});
                  if(element.listoneway && element.listoneway.length >0 ){
                    let slide1 = [];
                    let slide2 = [];
                    let slide3 = [];
                    let slide4 = [];
                    let slide5 = [];
                    let slide6 = [];
                    for (let index = 0; index < element.listoneway.length; index++) {
                      const elementList = element.listoneway[index];
                      if(index < 3){
                        slide1.push(elementList);
                      }
                      else if(index >= 3 && index < 6){
                        slide2.push(elementList);
                      }
                      else if(index >= 6 && index < 9){
                        slide3.push(elementList);
                      }
                      else if(index >= 9 && index < 12){
                        slide4.push(elementList);
                      }
                      else if(index >= 12 && index < 15){
                        slide5.push(elementList);
                      }
                      else if(index >= 15 && index < 18){
                        slide6.push(elementList);
                      }
                    }
                    if(!element.slide || (element.slide && element.slide.length == 0)){
                      element.slide = [];
                      if(slide1.length >0){
                        element.slide.push({name: 'slide1', list: slide1});
                      }
                      if(slide2.length >0){
                        element.slide.push({name: 'slide2', list: slide2});
                      }
                      if(slide3.length >0){
                        element.slide.push({name: 'slide3', list: slide3});
                      }
                      if(slide4.length >0){
                        element.slide.push({name: 'slide4', list: slide4});
                      }
                      if(slide5.length >0){
                        element.slide.push({name: 'slide5', list: slide5});
                      }
                      if(slide6.length >0){
                        element.slide.push({name: 'slide6', list: slide6});
                      }
                      
                    }
                   
                    element.listflighttopdealoneway = element.slide;
                  }


                  if(element.listroundtrip && element.listroundtrip.length >0){
                    let slide1 = [];
                    let slide2 = [];
                    let slide3 = [];
                    let slide4 = [];
                    let slide5 = [];
                    let slide6 = [];
                    for (let index = 0; index < element.listroundtrip.length; index++) {
                      const elementList = element.listroundtrip[index];
                      
                      if(index < 3){
                        slide1.push(elementList);
                      }
                      else if(index >= 3 && index < 6){
                        slide2.push(elementList);
                      }
                      else if(index >= 6 && index < 9){
                        slide3.push(elementList);
                      }
                      else if(index >= 9 && index < 12){
                        slide4.push(elementList);
                      }
                      else if(index >= 12 && index < 15){
                        slide5.push(elementList);
                      }
                      else if(index >= 15 && index < 18){
                        slide6.push(elementList);
                      }
                    }
                    
                    if(!element.slideroundtrip || (element.slideroundtrip && element.slideroundtrip.length == 0)){
                      element.slideroundtrip = [];
                      if(slide1.length >0){
                        element.slideroundtrip.push({name: 'slide1', list: slide1});
                      }
                      if(slide2.length >0){
                        element.slideroundtrip.push({name: 'slide2', list: slide2});
                      }
                      if(slide3.length >0){
                        element.slideroundtrip.push({name: 'slide3', list: slide3});
                      }
                      if(slide4.length >0){
                        element.slideroundtrip.push({name: 'slide4', list: slide4});
                      }
                      if(slide5.length >0){
                        element.slideroundtrip.push({name: 'slide5', list: slide5});
                      }
                      if(slide6.length >0){
                        element.slideroundtrip.push({name: 'slide6', list: slide6});
                      }
                    }

                    element.listflighttopdealroundtrip = element.slideroundtrip;
                  }
                  
                };
                //console.log(se.listinternationalflighttopdeal);
                setTimeout(()=>{
                  
                  se.hassomelistinteroneway = se.listinternationalflighttopdeal.some(l => l.listflighttopdealoneway) ;
                  se.hassomelistintertwoway = se.listinternationalflighttopdeal.some(l => l.listflighttopdealroundtrip) ;
                  se.loadinterflighttopdealdone = true;
                  se.loadflighttopdealdone = true;
                },100)
            }else{
              se.loadinterflighttopdealdone = true;
            }
            
            setTimeout(()=>{
              if(se.listflighttopdealoneway && se.listflighttopdealoneway.length >0 && (!se.listflighttopdealoneway.slide || (se.listflighttopdealoneway.slide && se.listflighttopdealoneway.slide.length == 0))){
                let slide1 = [];
                let slide2 = [];
                let slide3 = [];
                let slide4 = [];
                let slide5 = [];
                let slide6 = [];
                  for (let index = 0; index < se.listflighttopdealoneway.length; index++) {
                    const elementList = se.listflighttopdealoneway[index];
                    if(index < 3){
                      slide1.push(elementList);
                    }
                    else if(index >= 3 && index < 6){
                      slide2.push(elementList);
                    }
                    else if(index >= 6 && index < 9){
                      slide3.push(elementList);
                    }
                    else if(index >= 9 && index < 12){
                      slide4.push(elementList);
                    }
                    else if(index >= 12 && index < 15){
                      slide5.push(elementList);
                    }
                    else if(index >= 15 && index < 18){
                      slide6.push(elementList);
                    }
                  }
                  se.listflighttopdealoneway.slide = [];
                  if(slide1.length >0){
                    se.listflighttopdealoneway.slide.push({name: 'slide1', list: slide1});
                  }
                  if(slide2.length >0){
                    se.listflighttopdealoneway.slide.push({name: 'slide2', list: slide2});
                  }
                  if(slide3.length >0){
                    se.listflighttopdealoneway.slide.push({name: 'slide3', list: slide3});
                  }
                  if(slide4.length >0){
                    se.listflighttopdealoneway.slide.push({name: 'slide4', list: slide4});
                  }
                  if(slide5.length >0){
                    se.listflighttopdealoneway.slide.push({name: 'slide5', list: slide5});
                  }
                  if(slide6.length >0){
                    se.listflighttopdealoneway.slide.push({name: 'slide6', list: slide6});
                  }
               
              }
              
              if(se.listflighttopdealroundtrip && se.listflighttopdealroundtrip.length >0  && (!se.listflighttopdealroundtrip.slide || (se.listflighttopdealroundtrip.slide && se.listflighttopdealroundtrip.slide.length == 0))){
                let slideroundtrip1 = [];
                let slideroundtrip2 = [];
                let slideroundtrip3 = [];
                let slideroundtrip4 = [];
                let slideroundtrip5 = [];
                let slideroundtrip6 = [];
                for (let index = 0; index < se.listflighttopdealroundtrip.length; index++) {
                  const elementList = se.listflighttopdealroundtrip[index];
                  
                  if(index < 3){
                    slideroundtrip1.push(elementList);
                  }
                  else if(index >= 3 && index < 6){
                    slideroundtrip2.push(elementList);
                  }
                  else if(index >= 6 && index < 9){
                    slideroundtrip3.push(elementList);
                  }
                  else if(index >= 9 && index < 12){
                    slideroundtrip4.push(elementList);
                  }
                  else if(index >= 12 && index < 15){
                    slideroundtrip5.push(elementList);
                  }
                  else if(index >= 15 && index < 18){
                    slideroundtrip6.push(elementList);
                  }
                }
                se.listflighttopdealroundtrip.slide = [];
                if(slideroundtrip1.length >0){
                  se.listflighttopdealroundtrip.slide.push({name: 'slide1', list: slideroundtrip1, selected: true});
                }
                if(slideroundtrip2.length >0){
                  se.listflighttopdealroundtrip.slide.push({name: 'slide2', list: slideroundtrip2});
                }
                if(slideroundtrip3.length >0){
                  se.listflighttopdealroundtrip.slide.push({name: 'slide3', list: slideroundtrip3});
                }
                if(slideroundtrip4.length >0){
                  se.listflighttopdealroundtrip.slide.push({name: 'slide4', list: slideroundtrip4});
                }
                if(slideroundtrip5.length >0){
                  se.listflighttopdealroundtrip.slide.push({name: 'slide5', list: slideroundtrip5});
                }
                if(slideroundtrip6.length >0){
                  se.listflighttopdealroundtrip.slide.push({name: 'slide6', list: slideroundtrip6});
                }
                
              }
              
                //console.log(se.listflighttopdealoneway);
                //console.log(se.listflighttopdealroundtrip);
                se.loadflighttopdealdone = true;
            },50)
            
            //console.log(se.listinternationalflighttopdeal);
          },100)
          

        }else{
          _data.forEach(element => {
            element.roundTrip = false;
            if(element.depart){
              element.fromPlaceName =  element.depart.fromPlaceName;
              element.toPlaceNameDisplay = element.depart.toPlaceName.split(',')[0];
              element.dateDisplay = moment(element.depart.departTime).format('DD.MM');
              element.dateDepartDisplay = se.getDayOfWeek(element.depart.departTime).dayname + ", " + moment(element.depart.departTime).format('DD') + ' thg '+moment(element.depart.departTime).format('MM');
            }
            if(element.return && element.return.toPlace){
              element.dateDisplay += " - " + moment(element.return.departTime).format('DD.MM');
              element.dateReturnDisplay = se.getDayOfWeek(element.return.departTime).dayname + ", " + moment(element.return.departTime).format('DD') + ' thg '+ moment(element.return.departTime).format('MM');
              element.roundTrip = true;
            }
            
            element.priceDisplay = se.gf.convertNumberToString(element.price);
          });
          se.listflighttopdeal = _data.filter((item) => {return item.source == 'inbound'});
          se.listinternationalflighttopdeal = _data.filter((item) => {return item.source == 'outbound' && (!item.roundTrip || (item.roundTrip && item.return.price))});
        }
        

        setTimeout(()=>{
          se.loadflighttopdealdone = true;
          se.loadinterflighttopdealdone = true;
        },900)
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
              arrivalCode: item.roundTrip ? item.return.fromPlace : item.depart.toPlace,
              departDate: item.depart.departTime,
              returnDate: item.roundTrip ? item.return.departTime : item.depart.departTime,
              adult: se.adult ? se.adult : 1,
              child: se.child ? se.child : 0,
              infant: se.infant ? se.infant : 0,
              title: "Đi " + item.fromPlaceName +" → " + item.toPlaceNameDisplay,
              dayDisplay: objday.dayname + ", " +moment(item.depart.departTime).format("DD") +  " thg " +moment(item.depart.departTime).format("M"),
              subtitle : " · " + ((se.adult ? se.adult : 1) + (se.child ? se.child : 0) + (se.infant ? se.infant : 0) ) + " khách" + " · " + (item.depart && item.return && item.roundTrip ? ' Khứ hồi' : ' Một chiều'),
              titleReturn: "Về " + item.toPlaceNameDisplay +" → " + item.fromPlaceName,
              dayReturnDisplay: objdayreturn.dayname + ", " + moment(item.return.departTime).format("DD") + " thg " +moment(item.return.departTime).format("M"),
              subtitleReturn : " · " + ((se.adult ? se.adult : 1) + (se.child ? se.child : 0) + (se.infant ? se.infant : 0) ) + " khách" + " · " + (item.depart && item.return && item.roundTrip ? ' Khứ hồi' : ' Một chiều'),
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
          se._flightService.itemFlightCache.returnCode = item.return.fromPlace ? item.return.fromPlace : item.depart.toPlace;
          se._flightService.itemFlightCache.returnAirport = "";
          se._flightService.itemFlightCache.step = 1;
          se._flightService.itemFlightCache.departTimeDisplay = objday.dayname + ", " + moment(item.depart.departTime).format("DD") + " thg " + moment(item.depart.departTime).format("MM");
          se._flightService.itemFlightCache.returnTimeDisplay = objdayreturn.dayname + ", " + moment(item.return.departTime).format("DD") + " thg " + moment(item.return.departTime).format("MM");
  
          se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + objday.dayname + ", " + moment(item.depart.departTime).format("DD") + " thg " + moment(item.depart.departTime).format("MM");
          se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + objdayreturn.dayname + ", " + moment(item.return.departTime).format("DD") + " thg " + moment(item.return.departTime).format("MM");
  
          se._flightService.itemFlightCache.departPaymentTitleDisplay = objday.daynameshort + ", " + moment(item.depart.departTime).format("DD-MM")+ " · " + item.depart.fromPlace + " → " +item.return.fromPlace+ " · ";
          se._flightService.itemFlightCache.returnPaymentTitleDisplay = objdayreturn.daynameshort + ", " + moment(item.return.departTime).format("DD-MM")+ " · "+ item.return.fromPlace + " → " +item.depart.fromPlace+ " · ";

          se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(item.depart.departTime).dayname +", " + moment(item.depart.departTime).format("DD") + " thg " + moment(item.depart.departTime).format("MM");
          se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(item.return.departTime).dayname +", " + moment(item.return.departTime).format("DD") + " thg " + moment(item.return.departTime).format("MM");

          se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;  
  
         

          
          if(se._flightService.listAirport && se._flightService.listAirport.length >0){
            let placeFrom = se._flightService.listAirport.filter((itemairport) => {return itemairport.code == item.depart.fromPlace});
            let placeTo = se._flightService.listAirport.filter((itemairport) => {return itemairport.code == item.depart.toPlace});
            if(placeFrom && placeFrom.length >0 && placeTo && placeTo.length >0){
              
              se._flightService.itemFlightCache.isExtenalDepart = !placeFrom[0].internal;
              se._flightService.itemFlightCache.isExtenalReturn = !placeTo[0].internal;
              se._flightService.itemFlightCache.isInternationalFlight = !placeFrom[0].internal || !placeTo[0].internal;
              se._flightService.itemFlightCache.fromCountryCode = placeFrom[0].countryCode;
                  se._flightService.itemFlightCache.toCountryCode = placeTo[0].countryCode;

              if(se._flightService.itemFlightCache.isInternationalFlight){
                se.navCtrl.navigateForward("/flightsearchresultinternational");
              }else{
                  se._flightService.itemFlightCache.isInternationalFlight = false;
                  se._flightService.itemFlightCache.isExtenalDepart = false;
                  se._flightService.itemFlightCache.isExtenalReturn = false;
                  se.navCtrl.navigateForward("/flightsearchresult");
              }
              
            }else {
              se._flightService.itemFlightCache.isInternationalFlight = false;
              se._flightService.itemFlightCache.isExtenalDepart = false;
              se._flightService.itemFlightCache.isExtenalReturn = false;
              se.navCtrl.navigateForward("/flightsearchresult");
            }
          }else{
            se._flightService.itemFlightCache.isInternationalFlight = false;
            se._flightService.itemFlightCache.isExtenalDepart = false;
            se._flightService.itemFlightCache.isExtenalReturn = false;
            se.navCtrl.navigateForward("/flightsearchresult");
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
        }
        

        getAirpot(code){
          let name = '';
          let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code});
          return itemairport && itemairport.length >0 ? itemairport[0].airport : '';
          return name;
        }
      
        getRegionByCode(code){
          let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code});
          return itemairport && itemairport.length >0 ? itemairport[0].city : '';
        }

        closecalendar(){
          this.modalCtrl.dismiss();
          
        }

        

        loadCalendarPrice(){
            if(!this._flightService.itemFlightCache.isInternationalFlight){
              if(this.departCode && this.returnCode){
              let url = C.urls.baseUrl.urlFlight + "gate/apiv1/GetHotDealCalendar?fromplace="+this.departCode+"&toplace="+this.returnCode+"&getincache=false";
              this.gf.RequestApi("GET", url, {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
                }, {}, "homeflight", "showCalendarPrice").then((data) =>{
                  if(data){
                    let key = "listHotDealCalendar_"+this.departCode+"_"+this.returnCode+"_"+this.adult+ ( this.child ? "_" + this.child : "")+ ( this.infant ? "_" + this.infant : "");
                   
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
            }else{
              this._flightService.listPrices = [];
              let url = C.urls.baseUrl.urlFlightInt + 'api/FlightSearch/GetCalendarPrice';
              
              let body = {
                DepartDate: new Date(this.cin),
                FromPlaceCode: this.departCode,
                ReturnDate: this.flighttype == 'twoway' ? new Date(this.cout) :  "",
                ToPlaceCode: this.returnCode
              };
              this.gf.RequestApi("POST", url, {}, body, "homeflight", "GetCalendarPrice").then((data) =>{
                  if(data && data.success && data.data && data.data.calendarPriceItemDto && data.data.calendarPriceItemDto.length>0 ){
                    this._flightService.listPrices = [...data.data.calendarPriceItemDto];
                    this.renderInternationalCalenderPrice(this._flightService.listPrices);
                    //this.
                  }else {
                    this._flightService.listPrices = [];
                    //this.renderInternationalCalenderPrice([]);
                  }
                })
            }
            
          
        }

        loadMorePricesByMonth(fromdate, todate, departcode, returncode){
          this._flightService.keyLoadMorePrices = `${moment(fromdate).format('YYYY-MM-DD')}_${moment(todate).format('YYYY-MM-DD')}_${departcode}_${returncode}`;
          let url = C.urls.baseUrl.urlFlightInt + 'api/FlightSearch/GetCalendarPrice';
          let body = {
            DepartDate: this.gf.getCinIsoDate(fromdate),
            FromPlaceCode: departcode,
            ReturnDate: this.flighttype == 'twoway' ? this.gf.getCinIsoDate(todate) : "",
            ToPlaceCode: returncode
          };
          this.gf.RequestApi("POST", url, {}, body, "homeflight", "GetCalendarPrice").then((data) =>{
              if(data && data.success && data.data && data.data.calendarPriceItemDto && data.data.calendarPriceItemDto.length>0 ){
                if(this._flightService.listPrices && this._flightService.listPrices.length >0){
                  this._flightService.listPrices = [...this._flightService.listPrices,...data.data.calendarPriceItemDto];
                  this.renderInternationalCalenderPrice(this._flightService.listPrices);
                }else {
                  this._flightService.listPrices = [...data.data.calendarPriceItemDto];
                  this.renderInternationalCalenderPrice(this._flightService.listPrices);
                }
                
              }
            })
        }

        renderInternationalCalenderPrice(listPrices){
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
                  let listdepartinmonth = listPrices.filter((item) => { return moment(item.departDate).format('YYYY-MM') == textmonth});
                
                  let listdayinmonth = elementMonth.children[1].children[0].children[0].children;
                  if(listdayinmonth && listdayinmonth.length >0){
                      for (let j = 0; j < listdayinmonth.length; j++) {
                        const elementday = listdayinmonth[j];
                        if(elementday && elementday.textContent){
                          //let fday:any = elementday.textContent;
                          let fday:any = elementday.children[0].children[0].textContent;
                          let fromdate = moment(this.gf.getCinIsoDate(new Date(yearstartdate, monthstartdate - 1, fday))).format('YYYY-MM-DD');
                          let todate = moment(fromdate).add(diffday ,'days').format('YYYY-MM-DD');
                          if(fromdate && moment(fromdate).diff( moment(this.gf.getCinIsoDate(new Date())).format('YYYY-MM-DD'), 'days') >=0){
                             
                                let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                                let minvalue = mindepartvalue;

                                let pricefromdate =0;
                                let itemfromdate = listdepartinmonth.filter((d)=>{ return moment(d.departDate).format('YYYY-MM-DD') == fromdate });
                                if(itemfromdate && itemfromdate.length >0){
                                  pricefromdate = itemfromdate[0].price;
                                }

                                let totalprice = pricefromdate/1000000 >= 1 ? (pricefromdate/1000000).toFixed(1): Math.round(pricefromdate / 1000000);
                                if(pricefromdate/1000000 >= 1){
                                  totalprice = totalprice +" Trđ";
                                }else{
                                  totalprice = totalprice +" Nđ";
                                }
                                  
                                if(pricefromdate){

                                  //giá min
                                  if(minvalue == pricefromdate){
                                    $(elementday.children[0]).append(`<span class='price-calendar-text m-l--5 price-calendar-disabled min-price-international'>${totalprice}</span>`);
                                  }else{
                                    $(elementday.children[0]).append(`<span class='price-calendar-text m-l--5 price-calendar-disabled normal-price'>${totalprice}</span>`);
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
                          if(fromdate && moment(fromdate).diff( moment(this.gf.getCinIsoDate(new Date())).format('YYYY-MM-DD'), 'days') >=0){
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

               }else if(se.departCode){
                se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { return itemdhd.depart.fromPlace === se.departCode });
              }
            }else if(se.departCode){
              se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { return itemdhd.depart.fromPlace === se.departCode });
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
        gettopSale() {
          var se=this;
          var options = {
            method: "GET",
            url: C.urls.baseUrl.urlFlight +"/gate/apiv1/GetStopSaleToday",
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
            headers: {}
          };
          request(options, function(error, response, body) {
            if (response.statusCode != 200) {
              var objError = {
                page: "main",
                func: "getNewsBlog",
                message: response.statusMessage,
                content: response.body,
                param: JSON.stringify(options),
                type: "warning"
              };
              C.writeErrorLog(objError,response);
            }
            if (error) {
              error.page = "main";
              error.func = "getNewsBlog";
              (error.param = JSON.stringify(options)), C.writeErrorLog(error,response);
            }
            var res=JSON.parse(body);
            se.topSale=se.gf.convertNumberToString(res.total);
            //console.log(JSON.parse(body));
          });
        }

        showLowestPrice(event){
          setTimeout(()=>{
            this.showlowestprice = event.target.checked;
            this._flightService.itemFlightCache.showCalendarLowestPrice = this.showlowestprice;
            if(this.departCode && this.returnCode){
              if(this.showlowestprice){
                this.showLunarCalendar = !event.target.checked;
                this._flightService.itemFlightCache.showLunarCalendar = this.showLunarCalendar;
                $('.lunardate').removeClass('date-lunar-visible');
                $('.chk-showlunar')[0].checked = false;
                $('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');

              }else{
                $('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
              }
            }else{
              this.gf.showToastWarning('Vui lòng chọn điểm khởi hành và điểm đến trước khi xem lịch giá rẻ.');
            }
          }, 100)
        }

        checkLunarCalendar(event){
          setTimeout(()=>{
            this.showLunarCalendar = event.target.checked;
            this._flightService.itemFlightCache.showLunarCalendar = this.showLunarCalendar;
              if(this.showLunarCalendar){
                this.showlowestprice = !event.target.checked;
                this._flightService.itemFlightCache.showCalendarLowestPrice = this.showlowestprice;
                $('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                $('.button-show-lowest-price')[0].checked = false;
                $('.lunardate').addClass('date-lunar-visible');
              }else{
                $('.lunardate').removeClass('date-lunar-visible');
              }
          }, 100)
        }

        searchArea() {
          this.navCtrl.navigateForward('/flightsearcharea');
        }

        showMoreFlight(){
          if($('.div-wrap-flighttopdeal').hasClass('div-collapse')){
            this.showmoreflight = true;
            $('.div-wrap-flighttopdeal').removeClass('div-collapse').addClass('div-expand');
          }else{
            this.showmoreflight = false;
            $('.div-wrap-flighttopdeal').removeClass('div-expand').addClass('div-collapse');
            this._flightService.publicItemShowMoreFlightTopDeal('divshowmoreflight');
          }
          
        }

        showMoreFlightInternational(item,index){
          if(typeof(item.showmoreflight) == 'undefined'){
            item.showmoreflight = false;
          }
          item.showmoreflight = !item.showmoreflight;
          
          if($(`.div-wrap-flightinternationaltopdeal_${index}`).hasClass('div-collapse')){
            //this.showmoreflight = true;
            $(`.div-wrap-flightinternationaltopdeal_${index}`).removeClass('div-collapse').addClass('div-expand');
          }else{
            //this.showmoreflight = false;
            $(`.div-wrap-flightinternationaltopdeal_${index}`).removeClass('div-expand').addClass('div-collapse');
            this._flightService.publicItemShowMoreFlightTopDeal(`divshowmoreflight_${index}`);
          }
          
        }

        slidetabchange(type){
            this.sliderInboundTab.getActiveIndex().then(index => {
                this.tabInbound = index+1;
            });
        }

        slidetaboutboundchange(itemchange, index){
          let slider = index == 1? this.sliderOutboundTab1 : (index==2 ? this.sliderOutboundTab2 : (index==3 ? this.sliderOutboundTab3 : this.sliderOutboundTab4));
          slider.getActiveIndex().then(index => {
            itemchange.tabInbound = index+1;
          });
        }

        selectDot(idx,list){
          
          this.sliderInboundTab.slideTo(idx);
        }

        selectDotOutbound(itemchange, index, indextab){
          let slider = index == 1? this.sliderOutboundTab1 : (index==2 ? this.sliderOutboundTab2 : (index==3 ? this.sliderOutboundTab3 : this.sliderOutboundTab4));
          itemchange.tabInbound=indextab+1;
          slider.slideTo(indextab);
         
        }

        scrollToDivReview(){
          
          setTimeout(()=> {
            document.getElementById('divReviews').scrollIntoView({  block: "end", behavior: 'smooth' });
          },300)
        }

  }