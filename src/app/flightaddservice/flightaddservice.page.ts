import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, AlertController } from '@ionic/angular';
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
import { FlightquickbackPage } from '../flightquickback/flightquickback.page';
import { CustomAnimations } from '../providers/CustomAnimations';
import { DomSanitizer } from '@angular/platform-browser';
import { AdddiscountPage } from './../adddiscount/adddiscount.page';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { voucherService } from '../providers/voucherService';
import { HTMLIonOverlayElement } from '@ionic/core';
import { FlightInfoInternationalPage } from '../flightinternational/flightinfointernationnal/flightinfointernational.page';
import { FlightdetailPage } from '../flightdetail/flightdetail.page';

@Component({
  selector: 'app-flightaddservice',
  templateUrl: './flightaddservice.page.html',
  styleUrls: ['./flightaddservice.page.scss'],
})
export class FlightaddservicePage implements OnInit {
    departdisplay: any;
    returndisplay: any;
    departtimedisplay: any;
    returntimedisplay: any;
    departFlight: any;
    returnFlight: any;
    departtime_depart: string;
    landingtime_depart: string;
    departtime_return: string;
    landingtime_return: string;
    departlocationdisplay: string;
    returnlocationdisplay: string;
    hasdepartluggage: boolean = false;
    hasreturnluggage: boolean = false;
    showbuttonluggage: boolean=true;
    departLuggage: any=[];
    returnLuggage: any=[];
    listdepartseatselected: any="";
    listreturnseatselected: any="";
    adult:any;
    child:any;
    totalPriceDisplay:any;
    allowchoiceseat = false;
    roundtrip: any=true;
    departCondition: any;
    chkchangeflight= true;
    returnCondition: any;
    departConditionInfo: any;
    returnConditionInfo: any;
    hadchoiceluggage = false;
    hasdepartseat: boolean = false;
    hasreturnseat: boolean = false;
    options: {};
  checkseat: boolean = false;
  ischeckVN=true;
  itemsFlightCityHotel: any=[];
  itemsFlightCityHotelDetail: any=[];
  loader: any;
  hoteldetaildata: any;
  listDiChung: any = "";
  isDiChung=false;
  loadHotelCityDone: boolean = false;
  discountpromo=0; msg;
  promocode="";
  ischeckerror = 0; 
  promotionCode="";
  priceCathay = 0;
  isCathay: any;
  alert: any;
  isExtenal: any;
  ischeckShowDC=0;
  dateShowCathay = '2023-09-02';
  isShowPromoCathay: boolean = false;
  itemVoucher: any;
  checkEmptyHotelCity: boolean;
  jti: any;
  listVouchersApply=[];
  strPromoCode: string = '';
  totaldiscountpromo = 0;
  isApiDirect: any;
  departCodeDisplay= '';
  returnCodeDisplay='';
  departDateDisplay: string;
  returnDateDisplay: string;
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
    private sanitizer: DomSanitizer,
    private safariViewController: SafariViewController,
    public _voucherService: voucherService) { 
        if(this._flightService.itemFlightCache){
          this._flightService.itemFlightCache.departAirlineMemberCode = '';
          this._flightService.itemFlightCache.returnAirlineMemberCode = '';
            this.roundtrip = this._flightService.itemFlightCache.roundTrip;
            this.adult = this._flightService.itemFlightCache.adult;
            this.child = this._flightService.itemFlightCache.child*1 + (this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0)*1;
            //this.totalPriceDisplay = this.gf.convertNumberToString(this._flightService.itemFlightCache.departFlight.totalPrice + this._flightService.itemFlightCache.returnFlight.totalPrice);
          this.isApiDirect = this._flightService.itemFlightCache.isApiDirect;
            if(this._flightService.itemFlightCache.isApiDirect){
              this.departdisplay = this._flightService.objSearch.departCity;
              this.returndisplay = this._flightService.objSearch.returnCity;
              this.departCodeDisplay = this._flightService.objSearch.departCode;
              this.returnCodeDisplay = this._flightService.objSearch.arrivalCode;
            }else{
              this.departdisplay = this._flightService.itemFlightCache.departCity;
              this.returndisplay = this._flightService.itemFlightCache.returnCity;
            }

            
            
           
            this.departFlight = this._flightService.itemFlightCache.departFlight;
            this.returnFlight = this._flightService.itemFlightCache.returnFlight;
            if(this.departFlight){
                this.departtime_depart = moment(this.departFlight.departTime).format("HH:mm");
                this.landingtime_depart = moment(this.departFlight.landingTime).format("HH:mm");
                this.departlocationdisplay= this._flightService.itemFlightCache.departCode + " · " + this.departFlight.flightTimeDetailDisplay + " · " +this._flightService.itemFlightCache.returnCode;

            }
            if(this.returnFlight){
                this.departtime_return = moment(this.returnFlight.departTime).format("HH:mm");
                this.landingtime_return = moment(this.returnFlight.landingTime).format("HH:mm");
                this.returnlocationdisplay= this._flightService.itemFlightCache.returnCode + " · " + this.returnFlight.flightTimeDetailDisplay + " · " +this._flightService.itemFlightCache.departCode;

                this.returntimedisplay = this._flightService.itemFlightCache.returnTimeDisplay +", "+ moment(this.returnFlight.departTime).format("YYYY");
            }

            this.departDateDisplay = this.gf.getDayOfWeek(this._flightService.itemFlightCache.checkInDate).dayname + ", " + moment(this._flightService.itemFlightCache.checkInDate).format("DD") + " tháng " +moment(this._flightService.itemFlightCache.checkInDate).format("MM");
            if(this.returnFlight){
              this.returnDateDisplay = this.gf.getDayOfWeek(this._flightService.itemFlightCache.checkOutDate).dayname + ", " + moment(this._flightService.itemFlightCache.checkOutDate).format("DD")+ " tháng " +moment(this._flightService.itemFlightCache.checkOutDate).format("MM");
            }

            this.isExtenal=_flightService.itemFlightCache.isExtenal;
            //get price cathay
            this._flightService.itemFlightCache.priceCathay =0;
            this.getpriceCathay();
            this.getCheckAirportDiChung();
                if(this.departFlight && this.departFlight.ticketCondition){
                    this.departConditionInfo = this.departFlight.ticketCondition;
                }
                else{
                    this.getDetailTicket(this.departFlight).then((data) => {
                        if(data && data.ticketCondition){
                            this.departConditionInfo = data.ticketCondition;
                        }
                      })
                }
                if(this.returnFlight && this.returnFlight.ticketCondition){
                    this.returnConditionInfo = this.returnFlight.ticketCondition;
                }
                else{
                    if(this.returnFlight){
                        this.getDetailTicket(this.returnFlight).then((data) => {
                            if(data && data.ticketCondition){
                                this.returnConditionInfo = data.ticketCondition;
                            }
                          })
                    }
                    
                }
            //hotelcity
            this.getSummaryBooking(this._flightService.itemFlightCache.dataTicket).then((dataBooking)=>{
              if(dataBooking && dataBooking.hotelIds){
  
                this.getHotelCity(dataBooking.hotelIds).then((dataHotelCity:any) => {
                  if(dataHotelCity && dataHotelCity.List){
  
                    if(dataBooking && dataBooking.rateKey){
  
                      this.getHotelCityPrice(dataBooking.rateKey).then((dataHotelCityPrice:any) => {
                          if(dataHotelCityPrice && dataHotelCityPrice.HotelListResponse && dataHotelCityPrice.HotelListResponse.HotelList && dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary && dataHotelCityPrice.HotelListResponse.HotelList.HotelSummary.length >0){
                            let arrHotelPrice = [], arrHotelDetail = [], arrHotel = [];
                            
                            this.mapHotelInfo(dataHotelCity,dataHotelCityPrice,arrHotelPrice,arrHotelDetail, arrHotel).then((data)=>{
                              this._flightService.itemFlightCache.itemsFlightCityHotel = [...data];
                              //this._flightService.itemCheckHotelCity.emit([...data]);
                              this.loadHotelCity([...data]);
                            })
                            
                          }else{
                            this.loadHotelCityDone = true;
                          }
                      })
                    }
                  }else{
                    this.loadHotelCityDone = true;
                  }
                  
                })
              }else{
                this.loadHotelCityDone = true;
              }
              this.gf.hideLoading();
            })    

          
            this.checkLuggage();

            if(this._flightService.itemFlightCache.listdepartseatselected){
                this.listdepartseatselected = this._flightService.itemFlightCache.listdepartseatselected;
            }

            if(this._flightService.itemFlightCache.listreturnseatselected){
                this.listreturnseatselected = this._flightService.itemFlightCache.listreturnseatselected;
            }
            if (this._flightService.itemFlightCache.DICHUNGParam) {
              this.listDiChung = this._flightService.itemFlightCache.DICHUNGParam;
            }
            this.totalPriceAll(0);
            if(!(this._flightService.itemFlightCache.jsonSeats && ((this._flightService.itemFlightCache.jsonSeats.departSeats && this._flightService.itemFlightCache.jsonSeats.departSeats.length >0) || (this._flightService.itemFlightCache.jsonSeats.returnSeats && this._flightService.itemFlightCache.jsonSeats.returnSeats.length >0) )) ){
                    this.getSeatMap(this._flightService.itemFlightCache.reservationId);
            }else{
                this.allowchoiceseat = true;
            }
            //Chưa chọn hành lý
            if(this._flightService.objSearch.roundTrip && !this._flightService.itemFlightCache.hasChoiceLuggage){
                if( (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airLineLuggage.length ==0 
                    && this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airLineLuggage.length ==0 )
                    || ( (!this._flightService.itemFlightCache.departLuggage || (this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length ==0) )
                    && (!this._flightService.itemFlightCache.returnLuggage || (this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length ==0)) ) )
                    {
                    if(this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "BambooAirways"){
                        this.getLuggage(this._flightService.itemFlightCache.reservationId,"BB",true).then((check) => {
                            if(check){
                                this.callCheckLuggage();
                            }
                        })
                    }
                    else if(this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airlineCode == "BambooAirways"){
                        this.getLuggage(this._flightService.itemFlightCache.reservationId,"BB",false).then((check) => {
                            if(check){
                                this.callCheckLuggage();
                            }
                        })
                    }
    
                    
                    //tạm thời chưa lấy dc VNA && jetstar
                    // if(this._flightService.itemFlightCache.departFlight.airlineCode == "VietnamAirlines" || this._flightService.itemFlightCache.departFlight.airlineCode == "JetStar"){
                    //     this.showbuttonluggage = true;
                    //     this.checkLuggage();
                    // }

                    if(this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "VietJetAir"){
                        this.getLuggage(this._flightService.itemFlightCache.reservationId,"VJ",true).then((check) => {
                            if(check){
                                this.callCheckLuggage();
                            }
                        })
                    }
    
                    else if(this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airlineCode == "VietJetAir"){
                        this.getLuggage(this._flightService.itemFlightCache.reservationId,"VJ",false).then((check) => {
                            if(check){
                                if(this.returnLuggage && this.returnLuggage.length >0 && this.checkLuggageZeroAmount(this.returnLuggage)){
                                    setTimeout(()=>{
                                        //set default hành lý không đồng
                                        let itemdefault = this.checkLuggageZeroAmount(this.returnLuggage);
                                        itemdefault.quantity = (this._flightService.itemFlightCache.adult*1 + this._flightService.itemFlightCache.child*1);//set theo số pax
                                        this._flightService.itemFlightCache.hasChoiceLuggage = true;
                                        this.showbuttonluggage = true;
                                        this.checkLuggageZero(2);
                                    },350)
                                }
                            }
                        })
                    }
                     // thêm VNA
          if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "VietnamAirlines") {
            this.ischeckVN=false;
            this.getLuggage(this._flightService.itemFlightCache.reservationId, "VN", true).then((check) => {
              if (check) {
                this.callCheckLuggage();
              }
            })
          }
          if (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airlineCode == "VietnamAirlines") {
            this.ischeckVN=false;
            if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode != "VietnamAirlines") {
              this.getLuggage(this._flightService.itemFlightCache.reservationId, "VN", false).then((check) => {
               
                if (check) {
                  this.callCheckLuggage();
                }
              })
            }
            else {
              this.getLuggageVN(this._flightService.itemFlightCache.reservationId, "VN", false).then((check) => {
                if (check) {
                  this.callCheckLuggage();
                }
              })
            }

          }
                }
            }else{
                if(this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airLineLuggage.length ==0 && this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length ==0){
                    if(this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "BambooAirways"){
                        this.getLuggage(this._flightService.itemFlightCache.reservationId,"BB",true);
                    }
                    else if(this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "VietJetAir"){
                        this.getLuggage(this._flightService.itemFlightCache.reservationId,"VJ",true).then((check) => {
                            if(check){
                                this.callCheckLuggage();
                            }
                        })
                    }
                     // thêm VNA
                    else if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airlineCode == "VietnamAirlines") {
                      this.getLuggage(this._flightService.itemFlightCache.reservationId, "VN", true);
                    }
                    // else{
                    //     this.showbuttonluggage = true;
                    //     this.checkLuggage();
                    // }
                }
                //Có chọn hành lý chiều đi hoặc chiều về
                else if(this._flightService.itemFlightCache.hasChoiceLuggage && ((this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length > 0) || (this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length > 0) ) ){
                    this.showbuttonluggage = !this._flightService.itemFlightCache.hasChoiceLuggage;
                }
            }
            
          this.isShowPromoCathay = moment(this.dateShowCathay).diff(moment(moment(new Date()).format('YYYY-MM-DD'))) >= 0;
          this.storage.get('jti').then(jti => {
            if (jti) {
              this.jti = jti;
              }
            })
        }
    }

    ngOnInit(){
        this._flightService.itemFlightLuggagePriceChange.pipe().subscribe((data)=>{
            if(data){
                this._flightService.itemFlightCache.hasChoiceLuggage = true;
                this.totalPriceAll(0);
            }
        })

        this._flightService.itemFlightSeatPriceChange.pipe().subscribe((data)=>{
            if(data){
                this.totalPriceAll(0);
            }
        })

        // this._voucherService.getVoucherRefreshList().subscribe(async (itemVoucher)=> {
        //   if(itemVoucher){
        //     this.strPromoCode = '';
        //     this.totaldiscountpromo = 0;
        //     this.buildStringPromoCode();
        //     this.totalPriceAll(0);
        //   }
        // })

        this._flightService.itemFlightReChoiceSeat.pipe().subscribe((data)=>{
            if(data){
                this.allowchoiceseat = false;
                this.checkseat = true;
                // this.promocode="";
                // this.promotionCode="";
                // this.discountpromo=0;
                // this.msg=""
                // this.totalPriceAll(0);
                this.loadHotelCityDone = true;
                this.clearSeatChoice();
                this.getSeatMap(this._flightService.itemFlightCache.reservationId);
            }
        })

        this._flightService.itemResetCheckSeat.pipe().subscribe((data)=>{ 
          if(data){
          this.checkseat = false;
          }
      })

      this._flightService.itemCheckHotelCity.pipe().subscribe((data)=>{
        if(data){
          this.loadHotelCity(data);
        }else{
          this.loadHotelCityDone = true;
        }
          
      })
  
      this._flightService.itemHotelCityChange.pipe().subscribe((data)=>{
        if(data){
          this.checkChangeRoom(data);
        }
      })
      this._flightService.itemTranferChange.pipe().subscribe((data) => {
        if (data) {
          
          this.totalPriceAll(0);
        }
      })
      this._flightService.itemHotelCityAddHotel.pipe().subscribe((data:any)=>{
        if(data.id && data.value){
          this.clearOtherSelectedItem(data.id).then((check)=>{
            if(check){
              if(this.checkEmptyHotelCity && this._flightService.itemFlightCache.pnr && this._flightService.itemFlightCache.pnr.resNo && this._flightService.itemFlightCache.itemsFlightCityHotel && this._flightService.itemFlightCache.itemsFlightCityHotel.length >0)
              {
                this.checkEmptyHotelCity = false;
              }
              this.AddHotelCity(data.id);
            }
          })
          
        }else{
          if(this._flightService.itemFlightCache.pnr && this._flightService.itemFlightCache.pnr.resNo && this._flightService.itemFlightCache.itemsFlightCityHotel && this._flightService.itemFlightCache.itemsFlightCityHotel.length >0)
          {
            this.checkEmptyHotelCity = true;
          }
          if(this._flightService.itemFlightCache.objHotelCitySelected && data.id == this._flightService.itemFlightCache.objHotelCitySelected.HotelId){
            this._flightService.itemFlightCache.objHotelCitySelected = null;
          }
          this.totalPriceAll(0);
        }
      })

      this._flightService.itemHotelCityAddHotelFromDetail.pipe().subscribe((data:any)=>{
        if(data.id && data.value){
          this.AddSelectedItem(data.id).then((check)=>{
            if(check){
              this.AddHotelCity(data.id);
            }
          })
        }
      })
      this._voucherService.getVoucherUsedObservable().subscribe(async (itemVoucher)=> {
        if(itemVoucher){
          this.showAlertVoucherUsed();
        }
      })

       this._voucherService.getObservable().subscribe(async (itemVoucher)=> {
        if(itemVoucher){
          if(this.promocode && this.promocode != itemVoucher.code && !this.itemVoucher){
            this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
            this.gf.showAlertMessageOnly(`Chỉ hỗ trợ áp dụng nhiều voucher tiền mặt trên một đơn hàng, Coupon và Voucher khuyến mãi chỉ áp dụng một`);
            return;
          }

         

          //this._voucherService.selectVoucher = itemVoucher;
          this.zone.run(()=>{
            if(itemVoucher.claimed){
              this.itemVoucher = itemVoucher;
              this.promocode = itemVoucher.code;
              this.promotionCode = itemVoucher.code;
              this.discountpromo = itemVoucher.rewardsItem.price;
              // if(!this.gf.checkExistsItemInArray(this.listVouchersApply, itemVoucher, 'voucher')){
              //   this.listVouchersApply.push(itemVoucher);
              // }
             this.buildStringPromoCode();
              
            }else{
              this.itemVoucher = null;
              this.promocode = "";
              this.promotionCode = "";
              this.discountpromo = 0;
              // if(this.gf.checkExistsItemInArray(this.listVouchersApply, itemVoucher, 'voucher')){
              //   this.gf.removeItemInArray(this.listVouchersApply, itemVoucher);
              // }
              this.buildStringPromoCode();

              if(this._voucherService.voucherSelected && this._voucherService.voucherSelected.length ==0 && this._voucherService.listPromoCode && this._voucherService.listPromoCode.length ==0){
                this.strPromoCode = '';
                this.totaldiscountpromo = 0;
              }
            }
            this.totalPriceAll(0);
          })
          // const element = await this.modalCtrl.getTop();
          //   if (element) {
          //     element.dismiss();
          //   }
          //this.modalCtrl.dismiss();
        }
      })

      this._voucherService.getObservableClearVoucherAfterPaymentDone().subscribe((check)=> {
        if(check){
          this.itemVoucher = null;
          this.promocode = "";
          this.promotionCode = "";
          this.discountpromo = 0;
          this.strPromoCode = "";
          this.totaldiscountpromo=0;
          this._flightService.itemFlightCache.hasvoucher = false;
          this._flightService.itemFlightCache.listVouchersAlreadyApply = [];
          this._voucherService.totalDiscountPromoCode =0;
          this._voucherService.listPromoCode =[];
          this._voucherService.voucherSelected = [];
          this._voucherService.flightPromoCode = "";
          this._voucherService.flightTotalDiscount=0;
          this.totalPriceAll(0);
        }
      })
    }

    async showdiscount(){
      this.promocode="";
      this.promotionCode = "";
      this.discountpromo =0;
      this.itemVoucher = null;
      this._voucherService.isFlightPage = true;
      this.msg="";
      this._voucherService.openFrom = 'flightaddservice';
      const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: AdddiscountPage,
      });
      modal.present();
       if(this._voucherService.selectVoucher && this._voucherService.selectVoucher.claimed){
         this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
         this._voucherService.selectVoucher = null;
       }
       this._voucherService.listPromoCode = [];
       this.buildStringPromoCode();
      this.totalPriceAll(0);
      modal.onDidDismiss().then((data: OverlayEventDetail) => {
        //case multi voucher tiền mặt
        if(this._voucherService.listPromoCode && this._voucherService.listPromoCode.length >0){
          if(this.strPromoCode){
            this.strPromoCode += ', '+this._voucherService.listPromoCode.join(', ');
            this.totaldiscountpromo += this._voucherService.totalDiscountPromoCode;
          }else{
            this.strPromoCode = this._voucherService.listPromoCode.join(', ');
            this.totaldiscountpromo = this._voucherService.totalDiscountPromoCode;
          }
         
          this.totalPriceAll(0);
        }else if (data.data) {//case voucher km
          let vc = data.data;
          let databkg = this._flightService.itemFlightCache.dataSummaryBooking;
          let itemflightcache = this._flightService.itemFlightCache;

          if(vc.applyFor && vc.applyFor != 'flight'){
            this.gf.showAlertMessageOnly(`Mã giảm giá chỉ áp dụng cho đơn hàng ${ vc.applyFor == 'flight' ? 'vé máy bay' : 'khách sạn'}. Quý khách vui lòng chọn lại mã khác!`);
            this._voucherService.rollbackSelectedVoucher.emit(vc);
            return;
          }
         
          else if(databkg && itemflightcache.promotionCode && itemflightcache.pnr && itemflightcache.pnr.resNo && itemflightcache.promotionCode != data.data.promocode){
            //this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
            this.showAlertPromoCode();
            return;
          }
          else {
            this._voucherService.isFlightPage = false;
            this.zone.run(() => {
              if (data.data.promocode) {
                $('.div-point').addClass('div-disabled');
                this.promocode=data.data.promocode;
                //this.textpromotion=data.data.promocode;
                this.promofunc(data.data);
              }
            })
          }
        }
      })
    }

    clearSeatChoice(){
        this.listdepartseatselected = '';
        this.listreturnseatselected = '';
        this._flightService.itemFlightCache.departSeatChoice = [];
        this._flightService.itemFlightCache.returnSeatChoice = [];
        this._flightService.itemFlightCache.listdepartseatselected = '';
        this._flightService.itemFlightCache.listreturnseatselected = '';
        this._flightService.itemFlightCache.departSeatChoiceAmout = 0;
        this._flightService.itemFlightCache.returnSeatChoiceAmout = 0;
        this._flightService.itemFlightCache.listSeatNormal.forEach(element => {
          if(element.itemsLeft && element.itemsLeft.length >0){
            element.itemsLeft.forEach(elementLeft => {
              if(elementLeft.booked){
                elementLeft.booked = false;
              } 
            });
          }
          if(element.elementRight && element.elementRight.length >0){
            element.itemsRight.forEach(elementRight => {
              if(elementRight.booked){
                elementRight.booked = false;
              } 
            });
          }
        });
        // this._flightService.itemFlightCache.listSeatNormal = [];
        // this._flightService.itemFlightCache.listReturnSeatNormal = [];
        this.totalPriceAll(0);
    }


    callCheckLuggage(){
        if(this.departLuggage && this.departLuggage.length >0 && this.checkLuggageZeroAmount(this.departLuggage)){
            setTimeout(()=>{
                //set default hành lý không đồng
                let itemdefault = this.checkLuggageZeroAmount(this.departLuggage);
                itemdefault.quantity = (this._flightService.itemFlightCache.adult*1 + this._flightService.itemFlightCache.child*1);//set theo số pax
                this._flightService.itemFlightCache.hasChoiceLuggage = true;
                this.showbuttonluggage = true;
                this.checkLuggageZero(1);
            },350)
                
        }

        if(this.returnLuggage && this.returnLuggage.length >0 && this.checkLuggageZeroAmount(this.returnLuggage)){
            setTimeout(()=>{
                //set default hành lý không đồng
                let itemdefault = this.checkLuggageZeroAmount(this.returnLuggage);
                itemdefault.quantity = (this._flightService.itemFlightCache.adult*1 + this._flightService.itemFlightCache.child*1);//set theo số pax
                this._flightService.itemFlightCache.hasChoiceLuggage = true;
                this.showbuttonluggage = true;
                this.checkLuggageZero(2);
            },350)
                
        }
    }

    checkLuggage(){
        if(this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.airLineLuggage && this._flightService.itemFlightCache.departFlight.airLineLuggage.length>0){
            this.departLuggage = this._flightService.itemFlightCache.departFlight.airLineLuggage;
            let chocieDepartLuggage = this.departLuggage.filter(element => {
                return element.quantity;
            });
            if(chocieDepartLuggage && chocieDepartLuggage.length>0){
                this.zone.run(()=>{
                    this.hasdepartluggage = true;
                    this.showbuttonluggage = false;
                })
            }else{
                this.zone.run(()=>{
                    this.hasdepartluggage = false;
                    this.showbuttonluggage = true;
                })
            }
        }
        if(this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.airLineLuggage && this._flightService.itemFlightCache.returnFlight.airLineLuggage.length>0){
            this.returnLuggage = this._flightService.itemFlightCache.returnFlight.airLineLuggage;
            let chocieReturnLuggage = this.returnLuggage.filter(element => {
                return element.quantity;
            });
            if(chocieReturnLuggage && chocieReturnLuggage.length>0){
                this.zone.run(()=>{
                    this.hasreturnluggage = true;
                    this.showbuttonluggage = false;
                })
            }else{
                this.zone.run(()=>{
                    this.hasreturnluggage = false;
                    this.showbuttonluggage = true;
                })
            }
        }
        //check nếu load ancilary
        if(this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length>0){
            this.departLuggage = this._flightService.itemFlightCache.departLuggage;
            let chocieDepartLuggage = this.departLuggage.filter(element => {
                return element.quantity;
            });
            if(chocieDepartLuggage && chocieDepartLuggage.length>0){
                this.zone.run(()=>{
                    this.hasdepartluggage = true;
                    this.showbuttonluggage = false;
                })
            }else{
                this.zone.run(()=>{
                    this.hasdepartluggage = false;
                    this.showbuttonluggage = true;
                })
            }
        }
        if(this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length>0){
            this.returnLuggage = this._flightService.itemFlightCache.returnLuggage;
            let chocieReturnLuggage = this.returnLuggage.filter(element => {
                return element.quantity;
            });
            if(chocieReturnLuggage && chocieReturnLuggage.length>0){
                this.zone.run(()=>{
                    this.hasreturnluggage = true;
                    this.showbuttonluggage = false;
                })
            }else{
                this.zone.run(()=>{
                    this.hasreturnluggage = false;
                    this.showbuttonluggage = true;
                })
            }
        }
    }

    checkLuggageZero(type){
        //check nếu load ancilary
        if(type == 1 && this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length>0){
            this.departLuggage = this._flightService.itemFlightCache.departLuggage;
            let chocieDepartLuggage = this.departLuggage.filter(element => {
                return element.quantity;
            });
            if(chocieDepartLuggage && chocieDepartLuggage.length>0){
                this.zone.run(()=>{
                    this.hasdepartluggage = true;
                    this.showbuttonluggage = false;
                })
            }else{
                this.zone.run(()=>{
                    this.hasdepartluggage = false;
                    this.showbuttonluggage = true;
                })
            }
        }
        else if(type == 2 && this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length>0){
            this.returnLuggage = this._flightService.itemFlightCache.returnLuggage;
            let chocieReturnLuggage = this.returnLuggage.filter(element => {
                return element.quantity;
            });
            if(chocieReturnLuggage && chocieReturnLuggage.length>0){
                this.zone.run(()=>{
                    this.hasreturnluggage = true;
                    this.showbuttonluggage = false;
                })
            }else{
                this.zone.run(()=>{
                    this.hasreturnluggage = false;
                    this.showbuttonluggage = true;
                })
            }
        }
    }
    getpriceCathay() {
      var se = this;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile+'/api/Dashboard/GetPriceCathay?roundtrip='+this.roundtrip+'&pax='+this._flightService.itemFlightCache.pax+'',
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
            C.writeErrorLog(objError, response);
          }
          if (response.statusCode == 200) {
            let jsondata = JSON.parse(body);
            se.priceCathay=jsondata.priceCathay;
            se._flightService.itemFlightCache.InsuranceType=0;
            se._flightService.itemFlightCache.priceCathay=0;
            // console.log(jsondata.priceCathay);
          }
      })
    }
    getLuggage(id,code, isdepart) : Promise<any>{
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: C.urls.baseUrl.urlFlight + "gate/apiv1/ancillaryOptions?token=3b760e5dcf038878925b5613c32615ea3&reservationId="+id+"&airline="+code,
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
                  se.zone.run(()=>{
                    
                    
                        if(isdepart){
                            if(jsondata.baggage && jsondata.baggage && jsondata.baggage.length >0 && se._flightService.itemFlightCache.departFlight){
                                se._flightService.itemFlightCache.departLuggage = jsondata.baggage.length >0 ? jsondata.baggage : [];
                                se.departLuggage = se._flightService.itemFlightCache.departLuggage;
                            }
                            if(jsondata.baggageReturn && jsondata.baggageReturn.length >0 && se._flightService.itemFlightCache.returnFlight){
                                se._flightService.itemFlightCache.returnLuggage = jsondata.baggageReturn.length >0 ? jsondata.baggageReturn : [];
                                se.returnLuggage = se._flightService.itemFlightCache.returnLuggage;
                            }
                        }else{
                            if(jsondata.baggage && jsondata.baggage && jsondata.baggage.length >0 && se._flightService.itemFlightCache.returnFlight){
                                se._flightService.itemFlightCache.returnLuggage = jsondata.baggage.length >0 ? jsondata.baggage : [];
                                se.returnLuggage = se._flightService.itemFlightCache.returnLuggage;
                            }
                        }
                        if (code=='VN') {
                          se.ischeckVN=true;
                        }
                        se.showbuttonluggage = true;   
                        resolve(true);
                  })
                  
                }else{
                  if (code=='VN') {
                    se.ischeckVN=true;
                  }
                    resolve(false);
                }
            })
        })
        
    }
    getLuggageVN(id, code, isdepart): Promise<any> {
      var se = this;
      return new Promise((resolve, reject) => {
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlFlight + "gate/apiv1/ancillaryOptions?token=3b760e5dcf038878925b5613c32615ea3&reservationId=" + id + "&airline=" + code + "&type=return",
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
            C.writeErrorLog(objError, response);
          }
          if (response.statusCode == 200) {
            let jsondata = JSON.parse(body);
            se.zone.run(() => {
              if (isdepart) {
                if (jsondata.baggage && jsondata.baggage && jsondata.baggage.length > 0 && se._flightService.itemFlightCache.departFlight) {
                  se._flightService.itemFlightCache.departLuggage = jsondata.baggage.length > 0 ? jsondata.baggage : [];
                  se.departLuggage = se._flightService.itemFlightCache.departLuggage;
                }
                if (jsondata.baggageReturn && jsondata.baggageReturn.length > 0 && se._flightService.itemFlightCache.returnFlight) {
                  se._flightService.itemFlightCache.returnLuggage = jsondata.baggageReturn.length > 0 ? jsondata.baggageReturn : [];
                  se.returnLuggage = se._flightService.itemFlightCache.returnLuggage;
                }
              } else {
                if (jsondata.baggage && jsondata.baggage && jsondata.baggage.length > 0 && se._flightService.itemFlightCache.returnFlight) {
                  se._flightService.itemFlightCache.returnLuggage = jsondata.baggage.length > 0 ? jsondata.baggage : [];
                  se.returnLuggage = se._flightService.itemFlightCache.returnLuggage;
                }
               
              }
              if (code=='VN') {
                se.ischeckVN=true;
              }
              se.showbuttonluggage = true;
              resolve(true);
            })
  
          } else {
            if (code=='VN') {
              se.ischeckVN=true;
            }
            resolve(false);
          }
        })
      })
    }
    checkLuggageZeroAmount(list){
        let items = list.filter((item) => { return item.amount == 0 && item.weight >0 });
        return items && items.length >0 ? items[0] : false;
    }

    
    totalPriceAll(mealtype){
        this.zone.run(()=>{

            this.checkLuggage();
            if(this._flightService.itemFlightCache && this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.totalPrice)
            {
              let totalprice:any = this._flightService.itemFlightCache.departFlight.totalPrice + (this._flightService.itemFlightCache.returnFlight ? this._flightService.itemFlightCache.returnFlight.totalPrice : 0);
              let departluggageprice=0, returnluggageprice=0;
              departluggageprice = this._flightService.itemFlightCache.departFlight.airLineLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);
              //hành lý chiều đi load ancilary
              if(this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length >0){
                  departluggageprice += this._flightService.itemFlightCache.departLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);
              }
              returnluggageprice = this._flightService.itemFlightCache.returnFlight ? this._flightService.itemFlightCache.returnFlight.airLineLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0) : 0;
              //hành lý chiều về load ancilary
              if(this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length >0){
                  returnluggageprice += this._flightService.itemFlightCache.returnLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);
              }
              if(departluggageprice >0){
                  this.hasdepartluggage = true;
                  this.showbuttonluggage = false;
                  totalprice += departluggageprice;
              }
  
              if(returnluggageprice >0){
                  this.hasreturnluggage = true;
                  this.showbuttonluggage = false;
                  totalprice += returnluggageprice;
              }
  
              if(this._flightService.itemFlightCache.departSeatChoiceAmout){
                  totalprice += this._flightService.itemFlightCache.departSeatChoiceAmout;
  
              }
  
              if(this._flightService.itemFlightCache.returnSeatChoiceAmout){
                  totalprice += this._flightService.itemFlightCache.returnSeatChoiceAmout;
              }
              if (this._flightService.itemFlightCache.DICHUNGParam) {
                totalprice += this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo;
                totalprice += this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn;
              }
              if((this._voucherService.voucherSelected && this._voucherService.voucherSelected.length >0) || (this._voucherService.listPromoCode && this._voucherService.listPromoCode.length >0)){
                if(this._voucherService.voucherSelected && this._voucherService.voucherSelected.length >0){
                  let totaldiscount = this._voucherService.voucherSelected.map(item => item.rewardsItem).reduce((total,b)=>{ return total + b.price; }, 0);
                  totalprice = totalprice - totaldiscount;
                }
                if(this._voucherService.listPromoCode && this._voucherService.listPromoCode.length >0){
                  totalprice = totalprice - this._voucherService.totalDiscountPromoCode;
                }
              }else if(this.promotionCode && this.discountpromo>0){
                totalprice= totalprice-this.discountpromo;
              }
              
              if(this.isCathay){
                totalprice=totalprice+this.priceCathay;
              }
              this.listdepartseatselected = this._flightService.itemFlightCache.listdepartseatselected;
              if(this._flightService.itemFlightCache.listdepartseatselected){
                  this.hasdepartseat = true;
              }
  
          
              this.listreturnseatselected = this._flightService.itemFlightCache.listreturnseatselected;
              if(this._flightService.itemFlightCache.listreturnseatselected){
                  this.hasreturnseat = true;
              }

              this.listDiChung = this._flightService.itemFlightCache.DICHUNGParam;
              if (this._flightService.itemFlightCache.DICHUNGParam) {
                this.isDiChung = true;
              }
              //Add hotelcity price
              if(mealtype){
                totalprice+= mealtype.PriceAvgPlusOTA;
              }else if(this._flightService.itemFlightCache.HotelCityMealtypeSelected && this._flightService.itemFlightCache.itemsFlightCityHotel.length >0){
                //check lại xem có mealtype nào đang chọn không
                let check = false;
                for (let index = 0; index < this._flightService.itemFlightCache.itemsFlightCityHotel.length; index++) {
                  const element = this._flightService.itemFlightCache.itemsFlightCityHotel[index];
                  if(element.checkaddhotel){
                    check = true;
                  }
                  
                }
                if(check){
                  totalprice+= this._flightService.itemFlightCache.HotelCityMealtypeSelected.PriceAvgPlusOTA;
                }
                
              }
              
               //thêm luồng voucher heniken
              // if(this._voucherService.selectVoucher && this._voucherService.selectVoucher.claimed){
              //   this._flightService.itemFlightCache.totalPriceBeforeApplyVoucher = totalprice;
              //   totalprice = totalprice - this._voucherService.selectVoucher.rewardsItem.price;
              // }
              if((this._voucherService.voucherSelected && this._voucherService.voucherSelected.length >0) || (this._voucherService.listPromoCode && this._voucherService.listPromoCode.length >0)){
                if(this._voucherService.voucherSelected && this._voucherService.voucherSelected.length >0){
                  let totaldiscount = this._voucherService.voucherSelected.map(item => item.rewardsItem).reduce((total,b)=>{ return total + b.price; }, 0);
                  this._flightService.itemFlightCache.totalPriceBeforeApplyVoucher = totalprice + totaldiscount;
                }
                if(this._voucherService.listPromoCode && this._voucherService.listPromoCode.length >0){
                  this._flightService.itemFlightCache.totalPriceBeforeApplyVoucher = totalprice + this._voucherService.totalDiscountPromoCode;
                }
              }else if(this.promotionCode && this.discountpromo>0){
                this._flightService.itemFlightCache.totalPriceBeforeApplyVoucher = totalprice + this.discountpromo;
              }
              if(totalprice*1 <0){
                totalprice = 0;
              }
              this.totalPriceDisplay = this.gf.convertNumberToString(totalprice);
              if(!this.totalPriceDisplay){
                this.totalPriceDisplay = '0';
              }
              this._flightService.itemFlightCache.totalPrice = totalprice;
              this._flightService.itemFlightCache.totalPriceDisplay = this.totalPriceDisplay;
              
            }
            
          })
    }


    getSeatMap(id){
        var se = this;
        if((se._flightService.itemFlightCache.departFlight && se._flightService.itemFlightCache.departFlight.stops) || (se._flightService.itemFlightCache.returnFlight && se._flightService.itemFlightCache.returnFlight.stops)){
          se.allowchoiceseat = false;
        }else{
          let departairlines = se._flightService.itemFlightCache.departFlight.airline.replace(' ','');
          let returnairlines = se._flightService.itemFlightCache.returnFlight ? se._flightService.itemFlightCache.returnFlight.airline.replace(' ','') : "";
          if(departairlines == returnairlines || !se._flightService.objSearch.roundTrip){
              let urlSeatMap = C.urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId="+id+"&airline="+departairlines;
              se.getSeatMaps(urlSeatMap, departairlines, 3);
          }else{
              let urlSeatMapDepart = C.urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId="+id+"&airline="+departairlines;
              se.getSeatMaps(urlSeatMapDepart, departairlines, 1);
              let urlSeatMapReturn = C.urls.baseUrl.urlFlight + "gate/apiv1/GetSeatMaps?reservationId="+id+"&airline="+returnairlines;
              se.getSeatMaps(urlSeatMapReturn, returnairlines, 2);
          }
        }
       
        
    }

    getSeatMaps(url, airlineCode, indexdepart){
        var se = this;
        var options = {
            method: 'GET',
            url: url,
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
              //console.log(jsondata);
              se._flightService.itemFlightCache.jsonSeats = jsondata;
              //Tạo object chọn ghế cho bamboo
              if(airlineCode == "BambooAirways"){
                if(jsondata.departSeats && jsondata.departSeats.length >0){
                    se.hasdepartseat = true;
                    se.allowchoiceseat = true;
                    let data = jsondata.departSeats[0];
                    let listSeatNameLeft = [],listSeatNameRight=[],listSeatNormal=[];
                    let listrows= [];
                    let listSeatName = data.deckDetails.cabinDetails.internalSeatConfigurationList;
                    if(data && data.deckDetails && data.deckDetails.cabinDetails){
                        se._flightService.itemFlightCache.departSeats = data;
                       
                      if(data.deckDetails.cabinDetails.compartmentDetails && data.deckDetails.cabinDetails.compartmentDetails.length >0){
                         
                          
                          if(data.smtCode.indexOf('787') != -1){
                            for (let index = 0; index < data.deckDetails.cabinDetails.compartmentDetails.length; index++) {
                                let elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[index];

                                let compartmentdetail = elementCompartmentDetails;
                                for (let index = 0; index < compartmentdetail.rows.length; index++) {
                                    let itemLeft =[], itemRight =[],itemnormal=[], rowseat = compartmentdetail.rows[index];
                                
                                      for (let index = 0; index < elementCompartmentDetails.seatConfigurationMap.length; index++) {
                                          if(elementCompartmentDetails.seatConfigurationMap[index] == -1){
                                              let fakeitem = {name: 'noname', type: -1, show: false};
                                              itemnormal.push(fakeitem);
                                          }else{
                                              let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                              const element = rowseat.seatOptions[idx];
                                              element.show = true;
                                              element.amount = element.seatAssignMentFee.amount;
                                              element.netPrice = element.seatAssignMentFee.netPrice;
                                              element.name = element.seatNumber;
                                              element.type =1;
                                              
                                              if(element.seatQualifiers.seatFront){//ghế phía trước
                                                  element.type = 2;
                                              }
                                              if(element.seatQualifiers.emergencyExit){//ghế gần cửa exit
                                                  element.type = 3;
                                              }
                                              //   if(element.seatQualifiers.limitedRecline){//ghế đặc biệt
                                              //       element.type = 4;
                                              //   }
                                              if(element.controlAttribute != "Available"){//ghế đã chọn
                                                  if(!element.seatQualifiers.emergencyExit){
                                                      element.type = 5;
                                                  }
                                              }
                                              itemnormal.push(element);
                                            }
                                          }
                                          let itemnm = {itemsNormal: itemnormal, row: rowseat.rowIndex};
                                          listrows.push(itemnm);
                                  }
                               
                                }
                           
                            }
                          
                          else{
                            for (let index = 0; index < data.deckDetails.cabinDetails.compartmentDetails.length; index++) {
                                const elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[index];
                                
                            let seatdetail = elementCompartmentDetails.seatConfigurationList;
                            let listSeatName = elementCompartmentDetails.internalSeatConfigurationList;
                            let dataSeat = elementCompartmentDetails.seatDetails;
                            let numofcolumnleft = Math.floor(elementCompartmentDetails.seatConfigurationMap.length/2), numofcolumnright = Math.ceil(elementCompartmentDetails.seatConfigurationMap.length/2);
                            let firstleftidx = elementCompartmentDetails.seatConfigurationMap[0];
                            let endrightidx = elementCompartmentDetails.seatConfigurationMap[elementCompartmentDetails.seatConfigurationMap.length -1];
                            
                            if(listSeatName && listSeatName.length >0){
                               
                                for (let index = 0; index < numofcolumnleft; index++) {
                                    const element = listSeatName[index];
                                    listSeatNameLeft.push(element);
                                }
                                for (let index = numofcolumnright; index < listSeatName.length; index++) {
                                    const element = listSeatName[index];
                                    listSeatNameRight.push(element);
                                }
                            }
    
                            let compartmentdetail = elementCompartmentDetails;
                                for (let index = 0; index < compartmentdetail.rows.length; index++) {
                                    let itemLeft =[], itemRight =[],itemnormal, rowseat = compartmentdetail.rows[index];
                                
                                      for (let index = 0; index < numofcolumnleft; index++) {
                                          if(elementCompartmentDetails.seatConfigurationMap[index] == -1){
                                              let fakeitem = {name: 'noname', type: -1, show: false};
                                              itemLeft.push(fakeitem);
                                          }else{
                                              let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                              const element = rowseat.seatOptions[idx];
                                              element.show = true;
                                              element.amount = element.seatAssignMentFee.amount;
                                              element.netPrice = element.seatAssignMentFee.netPrice;
                                              element.name = element.seatNumber;
                                              element.type =1;
                                              
                                              if(element.seatQualifiers.seatFront){//ghế phía trước
                                                  element.type = 2;
                                              }
                                              if(element.seatQualifiers.emergencyExit){//ghế gần cửa exit
                                                  element.type = 3;
                                              }
                                              //   if(element.seatQualifiers.limitedRecline){//ghế đặc biệt
                                              //       element.type = 4;
                                              //   }
                                              if(element.controlAttribute != "Available"){//ghế đã chọn
                                                  if(!element.seatQualifiers.emergencyExit){
                                                      element.type = 5;
                                                  }
                                              }
                                              itemLeft.push(element);
                                              }
                                          }
                                    for (let index = numofcolumnright; index < elementCompartmentDetails.seatConfigurationMap.length; index++) {
                                      if(elementCompartmentDetails.seatConfigurationMap[index] == -1){
                                          let fakeitem = {name: 'noname', type: -1, show: false};
                                          itemRight.push(fakeitem);
                                      }else{
                                          let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                        const element = rowseat.seatOptions[idx];
                                        element.show = true;
                                        element.amount = element.seatAssignMentFee.amount;
                                        element.netPrice = element.seatAssignMentFee.netPrice;
                                        element.name = element.seatNumber;
                                        element.type =1;
                                        
                                        if(element.seatQualifiers.seatFront){//ghế phía trước
                                            element.type = 2;
                                        }
                                        if(element.seatQualifiers.emergencyExit){//ghế gần cửa exit
                                            element.type = 3;
                                        }
                                      //   if(element.seatQualifiers.limitedRecline){//ghế đặc biệt
                                      //       element.type = 4;
                                      //   }
                                        if(element.controlAttribute != "Available"){//ghế đã chọn
                                            if(!element.seatQualifiers.emergencyExit){
                                                element.type = 5;
                                            }
                                        }
                                        itemRight.push(element);
                                    }
                                  }
                                  //   if(endrightidx == -1){
                                  //     let fakeitem = {name: 'noname', type: -1, show: false};
                                  //     itemRight.push(fakeitem);
                                  //     }
                                    itemnormal = {itemsLeft: itemLeft, itemsRight: itemRight, row: rowseat.rowIndex};
    
                                    listSeatNormal.push(itemnormal);
                                }
                            }
                          }
                          
  
                          
                      }
                    }
                    
                    if(indexdepart == 1 || indexdepart == 3){
                        if(data.smtCode.indexOf('787') != -1){
                            se._flightService.itemFlightCache.listSeatName = listSeatName;
                                se._flightService.itemFlightCache.listSeatNormal = listrows;
                                se._flightService.itemFlightCache.isnewmodelseat = true;
                        }else{
                            se._flightService.itemFlightCache.isnewmodelseat = false;
                            se._flightService.itemFlightCache.listSeatNameLeft = listSeatNameLeft;
                            se._flightService.itemFlightCache.listSeatNameRight = listSeatNameRight;
                            se._flightService.itemFlightCache.listSeatNormal = listSeatNormal;
                        }
                    }
                    
                }else{
                    se.hasdepartseat = false;
                }
  
                  if(jsondata.returnSeats && jsondata.returnSeats.length >0){
                    se.hasreturnseat = true;
                    se.allowchoiceseat = true;
                      let data = jsondata.returnSeats[0];
                      let listReturnSeatNameLeft = [],listReturnSeatNameRight=[],listReturnSeatNormal=[];
                      let listrows= [];
                        let listSeatName = data.deckDetails.cabinDetails.internalSeatConfigurationList;
                      if(data && data.deckDetails && data.deckDetails.cabinDetails){
                        se._flightService.itemFlightCache.returnSeats = data;
                          if(data.deckDetails.cabinDetails.compartmentDetails && data.deckDetails.cabinDetails.compartmentDetails.length >0){
                            let elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[0];

                            if(data.smtCode.indexOf('787') != -1){
                                
                                for (let index = 0; index < data.deckDetails.cabinDetails.compartmentDetails.length; index++) {
                                    let elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[index];
    
                                    let compartmentdetail = elementCompartmentDetails;
                                    for (let index = 0; index < compartmentdetail.rows.length; index++) {
                                        let itemLeft =[], itemRight =[],itemnormal=[], rowseat = compartmentdetail.rows[index];
                                    
                                          for (let index = 0; index < elementCompartmentDetails.seatConfigurationMap.length; index++) {
                                              if(elementCompartmentDetails.seatConfigurationMap[index] == -1){
                                                  let fakeitem = {name: 'noname', type: -1, show: false};
                                                  itemnormal.push(fakeitem);
                                              }else{
                                                  let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                                  const element = rowseat.seatOptions[idx];
                                                  element.show = true;
                                                  element.amount = element.seatAssignMentFee.amount;
                                                  element.netPrice = element.seatAssignMentFee.netPrice;
                                                  element.name = element.seatNumber;
                                                  element.type =1;
                                                  
                                                  if(element.seatQualifiers.seatFront){//ghế phía trước
                                                      element.type = 2;
                                                  }
                                                  if(element.seatQualifiers.emergencyExit){//ghế gần cửa exit
                                                      element.type = 3;
                                                  }
                                                  //   if(element.seatQualifiers.limitedRecline){//ghế đặc biệt
                                                  //       element.type = 4;
                                                  //   }
                                                  if(element.controlAttribute != "Available"){//ghế đã chọn
                                                      if(!element.seatQualifiers.emergencyExit){
                                                          element.type = 5;
                                                      }
                                                  }
                                                  itemnormal.push(element);
                                                }
                                              }
                                              let itemnm = {itemsNormal: itemnormal, row: rowseat.rowIndex};
                                              listrows.push(itemnm);
                                      }
                                   
                                    }
                                }
                              else{
                              for (let index = 0; index < data.deckDetails.cabinDetails.compartmentDetails.length; index++) {
                                  const elementCompartmentDetails = data.deckDetails.cabinDetails.compartmentDetails[index];
                                  
                              let seatdetail = elementCompartmentDetails.seatConfigurationList;
                              let listSeatName = elementCompartmentDetails.internalSeatConfigurationList;
                              let dataSeat = elementCompartmentDetails.seatDetails;
                              let numofcolumnleft = Math.floor(elementCompartmentDetails.seatConfigurationMap.length/2), numofcolumnright = Math.ceil(elementCompartmentDetails.seatConfigurationMap.length/2);
                              let firstleftidx = elementCompartmentDetails.seatConfigurationMap[0];
                              let endrightidx = elementCompartmentDetails.seatConfigurationMap[elementCompartmentDetails.seatConfigurationMap.length -1];

                              if(listSeatName && listSeatName.length >0){
                                 
                                  for (let index = 0; index < numofcolumnleft; index++) {
                                      const element = listSeatName[index];
                                      listReturnSeatNameLeft.push(element);
                                  }
                                  for (let index = numofcolumnright; index < listSeatName.length; index++) {
                                      const element = listSeatName[index];
                                      listReturnSeatNameRight.push(element);
                                  }
                              }
  
                              let compartmentdetail = elementCompartmentDetails;
                                  for (let index = 0; index < compartmentdetail.rows.length; index++) {
                                      let itemLeft =[], itemRight =[],itemnormal, rowseat = compartmentdetail.rows[index];
                                   
                                      for (let index = 0; index < numofcolumnleft; index++) {
                                        if(elementCompartmentDetails.seatConfigurationMap[index] == -1){
                                            let fakeitem = {name: 'noname', type: -1, show: false};
                                            itemLeft.push(fakeitem);
                                        }else{
                                            let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                            const element = rowseat.seatOptions[idx];
                                            element.show = true;
                                            
                                            element.amount = element.seatAssignMentFee.amount;
                                                element.name = element.seatNumber;
                                                element.type =1;
                                                if(element.seatQualifiers.seatFront){//ghế phía trước
                                                    element.type = 2;
                                                }
                                                if(element.seatQualifiers.emergencyExit){//ghế gần cửa exit
                                                    element.type = 3;
                                                }
                                                //   if(element.seatQualifiers.limitedRecline){//ghế đặc biệt
                                                //       element.type = 4;
                                                //   }
                                                if(element.controlAttribute != "Available"){//ghế đã chọn
                                                    if(!element.seatQualifiers.emergencyExit){
                                                        element.type = 5;
                                                    }
                                                }
                                                itemLeft.push(element);
                                        }
                                          
                                      }
                                      for (let index = numofcolumnright; index < elementCompartmentDetails.seatConfigurationMap.length; index++) {
                                        if(elementCompartmentDetails.seatConfigurationMap[index] == -1){
                                            let fakeitem = {name: 'noname', type: -1, show: false};
                                            itemRight.push(fakeitem);
                                        }else{
                                        let idx = elementCompartmentDetails.seatConfigurationMap[index];
                                          const element = rowseat.seatOptions[idx];
                                          element.show = true;
                                          
                                          element.amount = element.seatAssignMentFee.amount;
                                          element.netPrice = element.seatAssignMentFee.netPrice;
                                          element.name = element.seatNumber;
                                          element.type =1;
                                          if(element.seatQualifiers.seatFront){//ghế phía trước
                                              element.type = 2;
                                          }
                                          if(element.seatQualifiers.emergencyExit){//ghế gần cửa exit
                                              element.type = 3;
                                          }
                                        //   if(element.seatQualifiers.limitedRecline){//ghế đặc biệt
                                        //       element.type = 4;
                                        //   }
                                          if(element.controlAttribute != "Available"){//ghế đã chọn
                                              if(!element.seatQualifiers.emergencyExit){
                                                  element.type = 5;
                                              }
                                          }
                                          if(element.seatQualifiers.emergencyExit){
                                            element.type = 5;
                                        }
                                          itemRight.push(element);
                                        }
                                      }
                                    //   if(endrightidx == -1){
                                    //     let fakeitem = {name: 'noname', type: -1, show: false};
                                    //     itemRight.push(fakeitem);
                                    // }
                                      itemnormal = {itemsLeft: itemLeft, itemsRight: itemRight, row: rowseat.rowIndex};
  
                                      listReturnSeatNormal.push(itemnormal);
                                  }
                              }
                            }
                              
                          }
                      }
                      
                      
                      
                      if(indexdepart == 2 || indexdepart == 3){
                            if(data.smtCode.indexOf('787') != -1){
                                se._flightService.itemFlightCache.listReturnSeatName = listSeatName;
                                se._flightService.itemFlightCache.listReturnSeatNormal = listrows;
                                se._flightService.itemFlightCache.isnewmodelreturnseat = true;
                            }
                            else{
                                se._flightService.itemFlightCache.isnewmodelreturnseat = false;
                                se._flightService.itemFlightCache.listReturnSeatNameLeft = listReturnSeatNameLeft;
                                se._flightService.itemFlightCache.listReturnSeatNameRight = listReturnSeatNameRight;
                                se._flightService.itemFlightCache.listReturnSeatNormal = listReturnSeatNormal;
                            }
                        
                        }
                  }
                  else{
                    se.hasreturnseat = false;
                  }
              }
              // thêm VNA
        else if (airlineCode == "VietnamAirlines") {
          if (jsondata.departSeats && jsondata.departSeats.length > 0) {
            se.hasdepartseat = true;
            se.allowchoiceseat = true;

            

            let data = jsondata.departSeats[0];
            let listSeatNameLeft = [], listSeatNameRight = [], listSeatNormal = [], itemLeft = [], itemRight = [], itemnormal;
            let itemfirstrow = data.cabin.row[0];
            let numofcolumnleft = itemfirstrow.seat.length / 2, numofcolumnright = itemfirstrow.seat.length / 2;
            let listrows = [];
            let listSeatName = [];
            for (let index = 0; index < data.cabin.column.length; index++) {
              let colname = data.cabin.column[index].column1;
              listSeatName.push(colname);
            }

            if (data.equipment.indexOf('787') != -1|| data.equipment.indexOf('350') != -1) {
              for (let index = 0; index < data.cabin.row.length; index++) {
                let cabinRows = data.cabin.row[index];

                let cabinRowDetail = cabinRows;
                  let itemLeft = [], itemRight = [], itemnormal = [], rowseat = cabinRowDetail.seat;
                  if(rowseat && rowseat.length ==0){
                    continue;
                  }
                  for (let index = 0; index < data.cabin.column.length; index++) {
                    
                    if (index == 3 || index == 6) {
                      if(!(data.equipment.indexOf('350') != -1 && data.cabin.column.length == 4)){
                        let fakeitem = { name: 'noname', type: -1, show: false };
                        itemnormal.push(fakeitem);
                      }
                      
                    } 
                    //else {
                      const element = cabinRowDetail.seat[index];
                      if(!element){
                        continue;
                      }
                      element.show = true;
                      element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                      element.name = cabinRowDetail.rowNumber + element.number;
                      element.type = 1;
                      element.row = cabinRowDetail.rowNumber;
                      if (se.checkSeatTypeVNA(element.facilities) == 'front') {//ghế phía trước
                        element.type = 2;
                      }
                      if (element.exitRowInd == 'true') {//ghế gần cửa exit
                        element.type = 3;
                      }
                      if (element.occupiedInd == 'true') {//ghế hạn chế
                        element.type = 6;
                      }
                      if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {//ghế đã chọn
                        element.type = 5;
                      }
                      itemnormal.push(element);
                    //}
                  }
                  let itemnm = { itemsNormal: itemnormal, row: cabinRowDetail.rowNumber };
                  listrows.push(itemnm);

              }

            }else{
              for (let index = 0; index < numofcolumnleft; index++) {
                let seatname = itemfirstrow.seat[index].number;
                listSeatNameLeft.push(seatname);
              }
              for (let index = numofcolumnleft; index < itemfirstrow.seat.length; index++) {
                let seatname = itemfirstrow.seat[index].number;
                listSeatNameRight.push(seatname);
              }
              data.cabin.row.sort((a, b) => {
                a.rowNumber < b.rowNumber ? -1 : 1;
              })
              for (let index = 0; index < data.cabin.row.length; index++) {
                let itemLeft = [], itemRight = [], itemnormal;
                const elementRow = data.cabin.row[index];
                if (elementRow.seat.length == 4) {
                  let fakeitem = { name: 'noname', type: -1, show: false };
                  itemLeft.push(fakeitem);
                }
                numofcolumnleft = elementRow.seat.length / 2;
                numofcolumnright = elementRow.seat.length / 2;
  
                for (let index = 0; index < numofcolumnleft; index++) {
                  const element = elementRow.seat[index];
                  element.show = true;
                  element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                  element.name = elementRow.rowNumber + element.number;
                  element.type = 1;
                  if (se.checkSeatTypeVNA(element.facilities) == 'front') {//ghế phía trước
                    element.type = 2;
                  }
                  if (element.exitRowInd == 'true') {//ghế gần cửa exit
                    element.type = 3;
                  }
                  if (element.occupiedInd == 'true') {//ghế hạn chế
                    element.type = 6;
                  }
                  if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {//ghế đã chọn
                    element.type = 5;
                  }
                  itemLeft.push(element);
                }
                for (let index = numofcolumnright; index < elementRow.seat.length; index++) {
                  const element = elementRow.seat[index];
                  if(!element){
                    continue;
                  }
                  element.show = true;
                  element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                  element.name = elementRow.rowNumber + element.number;
                  element.type = 1;
                  if (se.checkSeatTypeVNA(element.facilities) == 'front') {//ghế phía trước
                    element.type = 2;
                  }
                  if (element.exitRowInd == 'true') {//ghế gần cửa exit
                    element.type = 3;
                  }
                  if (element.occupiedInd == 'true') {//ghế hạn chế
                    element.type = 6;
                  }
                  if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {//ghế đã chọn
                    element.type = 5;
                  }
  
                  itemRight.push(element);
                }
                if (elementRow.seat.length == 4 && itemRight.length == 2) {
                  let fakeitem = { name: 'noname', type: -1, show: false };
                  itemRight.push(fakeitem);
                }
  
                itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: elementRow.rowNumber };
                listSeatNormal.push(itemnormal);
              }
            }

            if (indexdepart == 1 || indexdepart == 3) {
              if (data.equipment.indexOf('787') != -1|| data.equipment.indexOf('350') != -1) {
                se._flightService.itemFlightCache.listSeatName = listSeatName;
                se._flightService.itemFlightCache.listSeatNormal = listrows;
                se._flightService.itemFlightCache.isnewmodelseat = true;
              } else {
                se._flightService.itemFlightCache.isnewmodelseat = false;
                se._flightService.itemFlightCache.listSeatNameLeft = listSeatNameLeft;
                se._flightService.itemFlightCache.listSeatNameRight = listSeatNameRight;
                se._flightService.itemFlightCache.listSeatNormal = listSeatNormal;
              }
  
            }
          } else {
            se.hasdepartseat = false;
          }

          if (jsondata.returnSeats && jsondata.returnSeats.length > 0) {
            se.hasreturnseat = true;
            se.allowchoiceseat = true;
            let data = jsondata.returnSeats[0];
            let listReturnSeatNameLeft = [], listReturnSeatNameRight = [], listReturnSeatNormal = [], itemnormal;

            let itemfirstrow = data.cabin.row[0];
            let numofcolumnleft = itemfirstrow.seat.length / 2, numofcolumnright = itemfirstrow.seat.length / 2;

            let listrows = [];
            let listSeatName = [];

            if (data.equipment.indexOf('787') != -1|| data.equipment.indexOf('350') != -1) {

              for (let index = 0; index < data.cabin.column.length; index++) {
                let colname = data.cabin.column[index].column1;
                listSeatName.push(colname);
              }

              for (let index = 0; index < data.cabin.row.length; index++) {
                let cabinRows = data.cabin.row[index];

                let cabinRowDetail = cabinRows;
                  let itemLeft = [], itemRight = [], itemnormal = [], rowseat = cabinRowDetail.seat;
                  if(rowseat && rowseat.length ==0){
                    continue;
                  }
                  for (let index = 0; index < data.cabin.column.length; index++) {
                    if (index == 3 || index == 6) {
                      if(!(data.equipment.indexOf('350') != -1 && data.cabin.column.length == 4)){
                        let fakeitem = { name: 'noname', type: -1, show: false };
                        itemnormal.push(fakeitem);
                      }
                    } 
                    //else {
                      const element = cabinRowDetail.seat[index];
                      if(!element){
                        continue;
                      }
                      element.show = true;
                      element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                      element.name = cabinRowDetail.rowNumber + element.number;
                      element.type = 1;
                      element.row = cabinRowDetail.rowNumber;
                      if (se.checkSeatTypeVNA(element.facilities) == 'front') {//ghế phía trước
                        element.type = 2;
                      }
                      if (element.exitRowInd == 'true') {//ghế gần cửa exit
                        element.type = 3;
                      }
                      if (element.occupiedInd == 'true') {//ghế hạn chế
                        element.type = 6;
                      }
                      if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {//ghế đã chọn
                        element.type = 5;
                      }
                      itemnormal.push(element);
                    //}
                  }
                  let itemnm = { itemsNormal: itemnormal, row: cabinRowDetail.rowNumber };
                  listrows.push(itemnm);

              }

            }
            else{
              for (let index = 0; index < numofcolumnleft; index++) {
                let seatname = itemfirstrow.seat[index].number;
                listReturnSeatNameLeft.push(seatname);
              }
              for (let index = numofcolumnleft; index < itemfirstrow.seat.length; index++) {
                let seatname = itemfirstrow.seat[index].number;
                listReturnSeatNameRight.push(seatname);
              }
              data.cabin.row.sort((a, b) => {
                a.rowNumber < b.rowNumber ? -1 : 1;
              })
              for (let index = 0; index < data.cabin.row.length; index++) {
                let itemLeft = [], itemRight = [], itemnormal;
                const elementRow = data.cabin.row[index];
                if(elementRow.seat && elementRow.seat.length ==0){
                  continue;
                }
                if (elementRow.seat.length == 4) {
                  let fakeitem = { name: 'noname', type: -1, show: false };
                  itemLeft.push(fakeitem);
                }
                numofcolumnleft = elementRow.seat.length / 2;
                numofcolumnright = elementRow.seat.length / 2;
                for (let index = 0; index < numofcolumnleft; index++) {
                  const element = elementRow.seat[index];
                  element.show = true;
                  element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                  element.name = elementRow.rowNumber + element.number;
                  element.type = 1;
                  if (se.checkSeatTypeVNA(element.facilities) == 'front') {//ghế phía trước
                    element.type = 2;
                  }
                  if (element.exitRowInd == 'true') {//ghế gần cửa exit
                    element.type = 3;
                  }
                  if (element.occupiedInd == 'true') {//ghế hạn chế
                    element.type = 6;
                  }
                  if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {//ghế đã chọn
  
                    element.type = 5;
  
                  }
                  itemLeft.push(element);
                }
                for (let index = numofcolumnright; index < elementRow.seat.length; index++) {
                  const element = elementRow.seat[index];
                  if(!element){
                    continue;
                  }
                  element.show = true;
                  element.amount = element.offer && element.offer.price && element.offer.price.totalAmount ? Number(element.offer.price.totalAmount.text) : 0;
                  element.name = elementRow.rowNumber + element.number;
                  element.type = 1;
                  if (se.checkSeatTypeVNA(element.facilities) == 'front') {//ghế phía trước
                    element.type = 2;
                  }
                  if (element.exitRowInd == 'true') {//ghế gần cửa exit
                    element.type = 3;
                  }
                  if (element.occupiedInd == 'true') {//ghế hạn chế
                    element.type = 6;
                  }
                  if ((element.occupiedInd == 'true' || element.premiumInd == 'true' || element.exitRowInd == 'true' || element.inoperativeInd == 'true')) {//ghế đã chọn
  
                    element.type = 5;
  
                  }
  
                  itemRight.push(element);
                }
                if (elementRow.seat.length == 4 && itemRight.length == 2) {
                  let fakeitem = { name: 'noname', type: -1, show: false };
                  itemRight.push(fakeitem);
                }
  
                itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: elementRow.rowNumber };
                listReturnSeatNormal.push(itemnormal);
              }
            }
            
            if (indexdepart == 2 || indexdepart == 3) {
              if (data.equipment.indexOf('787') != -1|| data.equipment.indexOf('350') != -1) {
                se._flightService.itemFlightCache.listReturnSeatName = listSeatName;
                se._flightService.itemFlightCache.listReturnSeatNormal = listrows;
                se._flightService.itemFlightCache.isnewmodelreturnseat = true;
              } else {
                se._flightService.itemFlightCache.listReturnSeatNameLeft = listReturnSeatNameLeft;
                se._flightService.itemFlightCache.listReturnSeatNameRight = listReturnSeatNameRight;
                se._flightService.itemFlightCache.listReturnSeatNormal = listReturnSeatNormal;
              }
            }

          } else {
            se.hasreturnseat = false;
          }
        }
              //Tạo object chọn ghế cho vietjetair
              //Tạo object chọn ghế cho vietjetair
        else {

          if (jsondata.departSeats && jsondata.departSeats.length > 0) {
            se.hasdepartseat = true;
            se.allowchoiceseat = true;
            let data = jsondata.departSeats[0];
            let listSeatNameLeft = [], listSeatNameRight = [], listSeatNormal = [], itemLeft = [], itemRight = [], itemnormal;
            let itemfirstrow = data.rows[0];
            let numofcolumnleft = itemfirstrow.seatOptions.length / 2, numofcolumnright = itemfirstrow.seatOptions.length / 2;

            let maxseatlen = Math.max(...data.rows.map((item) => {return item.seatOptions.length}));

            let listrows = [];
            let listSeatName = [];
            //case máy bay thân rộng Airbus330
            if (maxseatlen == 9) {
              for (let index = 0; index < data.rows.length; index++) {
                let itemnormal = [];
                const elementRow = data.rows[index];
                listSeatName =  ['A','B','C','-1','D','F','G','-1','H','J','K'];
                for (let indexCol = 0; indexCol < listSeatName.length; indexCol++) {
                  const elementSeatName = listSeatName[indexCol];
                  let elementseat = elementRow.seatOptions.filter(c => c.seatMapCell.seatIdentifier == elementSeatName);
                  if(elementseat && elementseat.length >0){
                      let element = elementseat[0];
                      element.show = true;
                      element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                      element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                      element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                      element.type = 1;
                      if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {//ghế phía trước
                        element.type = 2;
                      }
                      if (element.seatMapCell.seatQualifiers.emergencyExit) {//ghế gần cửa exit
                        element.type = 3;
                      }
                      if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {//ghế hạn chế
                        element.type = 6;
                      }
                      if (!element.selectionValidity.available) {//ghế đã chọn
                        if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                          element.type = 5;
                        }
                      }
                      itemnormal.push(element);
                  }else{
                    let fakeitem = { name: 'noname', type: -2, show: false };
                    itemnormal.push(fakeitem);
                  }
                }
                
                  let itemnm = { itemsNormal: itemnormal, row: elementRow.rowNumber };
                  listrows.push(itemnm);
              }

            }
            else{

              for (let index = 0; index < numofcolumnleft; index++) {
                let seatname = itemfirstrow.seatOptions[index].seatMapCell.seatIdentifier;
                listSeatNameLeft.push(seatname);
              }
              for (let index = numofcolumnleft; index < itemfirstrow.seatOptions.length; index++) {
                let seatname = itemfirstrow.seatOptions[index].seatMapCell.seatIdentifier;
                listSeatNameRight.push(seatname);
              }
              data.rows.sort((a, b) => {
                a.rowNumber < b.rowNumber ? -1 : 1;
              })
              for (let index = 0; index < data.rows.length; index++) {
                let itemLeft = [], itemRight = [], itemnormal;
                const elementRow = data.rows[index];
                if (elementRow.seatOptions.length == 4) {
                  let fakeitem = { name: 'noname', type: -1, show: false };
                  itemLeft.push(fakeitem);
                }
                numofcolumnleft = elementRow.seatOptions.length / 2;
                numofcolumnright = elementRow.seatOptions.length / 2;
  
                for (let index = 0; index < numofcolumnleft; index++) {
                  const element = elementRow.seatOptions[index];
  
                  element.show = true;
                  element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                  element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                  element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                  element.type = 1;
                  if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {//ghế phía trước
                    element.type = 2;
                  }
                  if (element.seatMapCell.seatQualifiers.emergencyExit) {//ghế gần cửa exit
                    element.type = 3;
                  }
                  if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {//ghế hạn chế
                    element.type = 6;
                  }
                  if (!element.selectionValidity.available) {//ghế đã chọn
                    if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                      element.type = 5;
                    }
                  }
                  itemLeft.push(element);
                }
                for (let index = numofcolumnright; index < elementRow.seatOptions.length; index++) {
                  const element = elementRow.seatOptions[index];
                  element.show = true;
                  element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                  element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                  element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                  element.type = 1;
                  if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {//ghế phía trước
                    element.type = 2;
                  }
                  if (element.seatMapCell.seatQualifiers.emergencyExit) {//ghế gần cửa exit
                    element.type = 3;
                  }
                  if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                    element.type = 6;
                  }
                  if (!element.selectionValidity.available) {//ghế đã chọn
                    if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                      element.type = 5;
                    }
                  }
  
                  itemRight.push(element);
                }
                if (elementRow.seatOptions.length == 4 && itemRight.length == 2) {
                  let fakeitem = { name: 'noname', type: -1, show: false };
                  itemRight.push(fakeitem);
                }
  
                itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: elementRow.rowNumber };
                listSeatNormal.push(itemnormal);
              }
            }


            if (indexdepart == 1 || indexdepart == 3) {
              if (maxseatlen == 9) {
                se._flightService.itemFlightCache.listSeatName = listSeatName;
                se._flightService.itemFlightCache.listSeatNormal = listrows;
                se._flightService.itemFlightCache.isnewmodelseat = true;
              } else {
                se._flightService.itemFlightCache.listSeatNameLeft = listSeatNameLeft;
                se._flightService.itemFlightCache.listSeatNameRight = listSeatNameRight;
                se._flightService.itemFlightCache.listSeatNormal = listSeatNormal;
              }

              
            }
          } else {
            se.hasdepartseat = false;
          }

          if (jsondata.returnSeats && jsondata.returnSeats.length > 0) {
            se.hasreturnseat = true;
            se.allowchoiceseat = true;
            let data = jsondata.returnSeats[0];
            let listReturnSeatNameLeft = [], listReturnSeatNameRight = [], listReturnSeatNormal = [], itemnormal;
            let listSeatNameLeft = [], listSeatNameRight = [], listSeatNormal = [], itemLeft = [], itemRight = [];
            let itemfirstrow = data.rows[0];
            let numofcolumnleft = itemfirstrow.seatOptions.length / 2, numofcolumnright = itemfirstrow.seatOptions.length / 2;

            let maxseatlen = Math.max(...data.rows.map((item) => {return item.seatOptions.length}));
            let listrows = [];
            let listSeatName = [];
            //case máy bay thân rộng Airbus330
            if (maxseatlen == 9) {
              for (let index = 0; index < data.rows.length; index++) {
                let itemnormal = [];
                const elementRow = data.rows[index];
                listSeatName =  ['A','B','C','-1','D','F','G','-1','H','J','K'];
                for (let indexCol = 0; indexCol < listSeatName.length; indexCol++) {
                  const elementSeatName = listSeatName[indexCol];
                  let elementseat = elementRow.seatOptions.filter(c => c.seatMapCell.seatIdentifier == elementSeatName);
                  if(elementseat && elementseat.length >0){
                      let element = elementseat[0];
                      element.show = true;
                      element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                      element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                      element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                      element.type = 1;
                      if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {//ghế phía trước
                        element.type = 2;
                      }
                      if (element.seatMapCell.seatQualifiers.emergencyExit) {//ghế gần cửa exit
                        element.type = 3;
                      }
                      if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {//ghế hạn chế
                        element.type = 6;
                      }
                      if (!element.selectionValidity.available) {//ghế đã chọn
                        if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                          element.type = 5;
                        }
                      }
                      itemnormal.push(element);
                  }else{
                    let fakeitem = { name: 'noname', type: -2, show: false };
                    itemnormal.push(fakeitem);
                  }
                }
                  
                  let itemnm = { itemsNormal: itemnormal, row: elementRow.rowNumber };
                  listrows.push(itemnm);
              }

            }
            else{

            for (let index = 0; index < numofcolumnleft; index++) {
              let seatname = itemfirstrow.seatOptions[index].seatMapCell.seatIdentifier;
              listReturnSeatNameLeft.push(seatname);
            }
            for (let index = numofcolumnleft; index < itemfirstrow.seatOptions.length; index++) {
              let seatname = itemfirstrow.seatOptions[index].seatMapCell.seatIdentifier;
              listReturnSeatNameRight.push(seatname);
            }
            data.rows.sort((a, b) => {
              a.rowNumber < b.rowNumber ? -1 : 1;
            })
            for (let index = 0; index < data.rows.length; index++) {
              let itemLeft = [], itemRight = [], itemnormal;
              const elementRow = data.rows[index];
              if (elementRow.seatOptions.length == 4) {
                let fakeitem = { name: 'noname', type: -1, show: false };
                itemLeft.push(fakeitem);
              }
              numofcolumnleft = elementRow.seatOptions.length / 2;
              numofcolumnright = elementRow.seatOptions.length / 2;
              for (let index = 0; index < numofcolumnleft; index++) {
                const element = elementRow.seatOptions[index];
                element.show = true;
                element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                element.type = 1;
                if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {//ghế phía trước
                  element.type = 2;
                }
                if (element.seatMapCell.seatQualifiers.emergencyExit) {//ghế gần cửa exit
                  element.type = 3;
                }
                if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                  element.type = 6;
                }
                if (!element.selectionValidity.available) {//ghế đã chọn
                  if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                    element.type = 5;
                  }
                }

                itemLeft.push(element);
              }
              for (let index = numofcolumnright; index < elementRow.seatOptions.length; index++) {
                const element = elementRow.seatOptions[index];
                element.show = true;
                element.amount = element.seatCharges[0].currencyAmounts[0].totalAmount;
                element.netPrice = element.seatCharges[0].currencyAmounts[0].netPrice ? element.seatCharges[0].currencyAmounts[0].netPrice : element.seatCharges[0].currencyAmounts[0].totalAmount;
                element.name = element.seatMapCell.rowIdentifier + element.seatMapCell.seatIdentifier;
                element.type = 1;
                if (element.seatMapCell.seatQualifiers.seatFront || element.seatMapCell.seatQualifiers.bulkheadFront) {//ghế phía trước
                  element.type = 2;
                }
                if (element.seatMapCell.seatQualifiers.emergencyExit) {//ghế gần cửa exit
                  element.type = 3;
                }
                if (element.seatMapCell.rowIdentifier <= 3 && !element.selectionValidity.available) {
                  element.type = 6;
                }
                if (!element.selectionValidity.available) {//ghế đã chọn
                  if (!element.seatMapCell.seatQualifiers.emergencyExit) {
                    element.type = 5;
                  }
                }

                itemRight.push(element);
              }
              if (elementRow.seatOptions.length == 4 && itemRight.length == 2) {
                let fakeitem = { name: 'noname', type: -1, show: false };
                itemRight.push(fakeitem);
              }

              itemnormal = { itemsLeft: itemLeft, itemsRight: itemRight, row: elementRow.rowNumber };
              listReturnSeatNormal.push(itemnormal);
            }

          }
            if (indexdepart == 2 || indexdepart == 3) {
              if (maxseatlen == 9) {
                se._flightService.itemFlightCache.listReturnSeatName = listSeatName;
                se._flightService.itemFlightCache.listReturnSeatNormal = listrows;
                se._flightService.itemFlightCache.isnewmodelreturnseat = true;
              } else {
                se._flightService.itemFlightCache.listReturnSeatNameLeft = listReturnSeatNameLeft;
                se._flightService.itemFlightCache.listReturnSeatNameRight = listReturnSeatNameRight;
                se._flightService.itemFlightCache.listReturnSeatNormal = listReturnSeatNormal;
              }

              // se._flightService.itemFlightCache.listReturnSeatNameLeft = listReturnSeatNameLeft;
              // se._flightService.itemFlightCache.listReturnSeatNameRight = listReturnSeatNameRight;
              // se._flightService.itemFlightCache.listReturnSeatNormal = listReturnSeatNormal;
            }

          } else {
            se.hasreturnseat = false;
          }

        }
              
            }
          })
    }

    goback(){
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
        this.hasdepartluggage = false;
        this.hasreturnluggage = false;
        this.showbuttonluggage = true;
        this.hasreturnseat = true;
        this.hasdepartseat = true;
        this._flightService.itemFlightCache.isnewmodelseat = false;
        this._flightService.itemFlightCache.isnewmodelreturnseat = false;
        this._flightService.itemFlightCache.backtochoiceseat = false;
        this._flightService.itemFlightCache.hasvoucher = false;
        this._flightService.itemFlightCache.listVouchersAlreadyApply = [];
        this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
        this._voucherService.selectVoucher = null;
        this.checkEmptyHotelCity = false;
        this.itemVoucher = null;
        this.promocode = "";
        this.promotionCode = "";
        this.discountpromo = 0;
        this.strPromoCode = '';
        this.totaldiscountpromo = 0;
        this._flightService.itemFlightCache.promotionCode = "";
        this._flightService.itemFlightCache.discount = 0;
        this._flightService.itemFlightCache.discountpromo = 0;
        this._voucherService.voucherSelected = [];
        this._voucherService.listPromoCode = "";
        this._voucherService.listObjectPromoCode = [];
        this._voucherService.totalDiscountPromoCode = 0;
        this._voucherService.flightPromoCode = "";
        this._voucherService.flightTotalDiscount=0;

        if(this._flightService.itemFlightCache.isApiDirect){
          this.navCtrl.navigateBack('/flightsearchresultinternational');
        }else{
          this.navCtrl.navigateBack('/flightsearchresult');
        }
    }

    buyLuggage(){
        this.navCtrl.navigateForward('/flightaddluggage');
    }

    buySeat(){
        this.navCtrl.navigateForward('/flightaddseat');
    }

    addMeal(){
        this.navCtrl.navigateForward('/flightaddmeal');
    }

    async showPriceDetail(){
      // this._flightService.itemFlightCache.promotionCode=this.promotionCode;
      // this._flightService.itemFlightCache.discount=this.discountpromo;
      this._flightService.itemFlightCache.promotionCode=this.strPromoCode;
      this._flightService.itemFlightCache.discount=this.totaldiscountpromo;
        const modal: HTMLIonModalElement =
        await this.modalCtrl.create({
          component: FlightpricedetailPage,
        });
      modal.present();
    }

    async showAlertVoucherUsed() {
      var se = this;
      const overlays = document.querySelectorAll('ion-alert, ion-modal');
      const overlaysArr = Array.from(overlays) as HTMLIonOverlayElement[];
      let msg = `Mã voucher ${se._flightService.itemFlightCache.hasvoucher} đang dùng cho đơn hàng ${se._flightService.itemFlightCache.pnr.resNo}. Vui lòng chọn lại vé nếu quý khách muốn tiếp tục thay đổi`;
      this.alert = await se.alertCtrl.create({
        message: msg,
        cssClass: "cls-alert-choiceseat",
        backdropDismiss: false,
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            handler: () => {
              overlaysArr.forEach(o => o.dismiss());
              this.goback();
            }
          },
          {
            text: 'Hủy',
            role: 'Cancel',
            handler: () => {
              this.promocode = "";
              this.promotionCode = "";
              this.discountpromo = 0;
              this.strPromoCode = '';
              this.totaldiscountpromo = 0;
              this._flightService.itemFlightCache.promotionCode = "";
              this._flightService.itemFlightCache.discount = 0;
              this._flightService.itemFlightCache.discountpromo = 0;
              this._voucherService.voucherSelected = [];
              this._voucherService.listPromoCode = "";
              this._voucherService.listObjectPromoCode = [];
              this._voucherService.totalDiscountPromoCode = 0;
              overlaysArr.forEach(o => o.dismiss());
            }
          }
        ]
      });
      this.alert.present();
    }

    async showAlertPromoCode() {
      var se = this;
      const overlays = document.querySelectorAll('ion-alert, ion-modal');
      const overlaysArr = Array.from(overlays) as HTMLIonOverlayElement[];
      let msg = `Mã voucher ${se._flightService.itemFlightCache.hasvoucher} đang dùng cho đơn hàng ${se._flightService.itemFlightCache.pnr.resNo}. Vui lòng chọn lại vé nếu quý khách muốn tiếp tục thay đổi`;
      this.alert = await se.alertCtrl.create({
        message: msg,
        cssClass: "cls-alert-choiceseat",
        backdropDismiss: false,
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            handler: () => {
              overlaysArr.forEach(o => o.dismiss());
              this.goback();
            }
          },
          {
            text: 'Hủy',
            role: 'Cancel',
            handler: () => {
              this.promocode = "";
              this.promotionCode = "";
              this.discountpromo = 0;
              this.strPromoCode = '';
              this.totaldiscountpromo = 0;
              this._flightService.itemFlightCache.promotionCode = "";
              this._flightService.itemFlightCache.discount = 0;
              this._flightService.itemFlightCache.discountpromo = 0;
              this._voucherService.voucherSelected = [];
              this._voucherService.listPromoCode = "";
              this._voucherService.listObjectPromoCode = [];
              this._voucherService.totalDiscountPromoCode = 0;
              this._voucherService.flightPromoCode ="";
              this._voucherService.flightTotalDiscount=0;
              se.totalPriceAll(0);
              overlaysArr.forEach(o => o.dismiss());
            }
          }
        ]
      });
      this.alert.present();
    }

    confirm(){
      var se = this;
      if(!(se.loadHotelCityDone || (se._flightService.itemFlightCache.itemsFlightCityHotel && se._flightService.itemFlightCache.itemsFlightCityHotel.length >0))){
        se.gf.showToastWarning('Đang tải dữ liệu. Xin vui lòng đợi trong giây lát!')
        return;
      }
      
      if(se.checkEmptyHotelCity){
        se.showAlertChoiceHotelCity();
        return;
      }
       //thêm luồng voucher heniken
       //if(se._voucherService.selectVoucher && se._voucherService.selectVoucher.claimed){
      if((se._voucherService.voucherSelected && se._voucherService.voucherSelected.length >0) || se._voucherService.listPromoCode){
        se._flightService.itemFlightCache.promotionCode = se.strPromoCode;
        se._flightService.itemFlightCache.discount = se.totaldiscountpromo;
        //se._flightService.itemFlightCache.promotionCode=se._voucherService.selectVoucher.code;
        //se._flightService.itemFlightCache.discount=se._voucherService.selectVoucher.rewardsItem.price;
      }else{
        se._flightService.itemFlightCache.promotionCode=se.promotionCode;
        se._flightService.itemFlightCache.discount=se.discountpromo;
      }

        if(se._flightService.itemFlightCache.backtochoiceseat){
          if(!se.checkseat){
            se.showAlertChoiceSeat();
          }else{
            se._flightService.itemFlightCache.backtochoiceseat = false;
            se.updatePassengerInfo().then((data)=>{
              if(!data.error){
                se._flightService.itemFlightCache.pnr = data;
                //se.navCtrl.navigateForward('/flightpaymentselect');
                if(se._flightService.itemFlightCache.totalPrice==0)
                          {
                            let itemcache = se._flightService.itemFlightCache;
                            itemcache.ischeckpayment = 0;
                            this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
                              if(check){
                                var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + (itemcache.pnr.bookingCode ?itemcache.pnr.bookingCode:  itemcache.pnr.resNo) + '&memberId=' + se.jti + '&rememberToken=&buyerPhone=' + itemcache.phone+'&version=2';
                                            se.gf.CreatePayoo(url).then((data) => {
                                              se.gf.hideLoading();
                                            if(data.success){
                                              se._flightService.itemFlightCache.ischeckpayment= 1;
                                                  se.navCtrl.navigateForward('flightpaymentdone/'+(se._flightService.itemFlightCache.pnr.bookingCode ?se._flightService.itemFlightCache.pnr.bookingCode:  se._flightService.itemFlightCache.pnr.resNo)+'/'+moment(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD')+'/'+moment(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD'));
                                                }else{
                                                  se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                                                  se.gf.hideLoading();
                                                }
                                          })
                                  }
                                  else{
                                    se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                                    se.gf.hideLoading();
                                  }
                            })
                          }
                          else{
                            se.gf.hideLoading();
                            se.navCtrl.navigateForward('/flightpaymentselect');
                          }
              }else{
                se.gf.showToastWarning(data.error);
                se.gf.hideLoading();
              }
            })
          }
          
        }else{
            se.navCtrl.navigateForward('/flightadddetails');
        }
    }

    async showAlertChoiceSeat(){
      var se = this;
      let msg ='Vui lòng chọn lại ghế ngồi!';
      let alert = await se.alertCtrl.create({
        message: msg,
        cssClass: "cls-alert-choiceseat",
        backdropDismiss: false,
        buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            this.allowchoiceseat = false;
            this.checkseat = true;
            // this.promocode="";
            // this.promotionCode="";
            // this.discountpromo=0;
            // this.msg=""
            //this.totalPriceAll(0);
            this.clearSeatChoice();
            this.getSeatMap(this._flightService.itemFlightCache.reservationId);
          }
        }
      ]
    });
    alert.present();
    }

    

  async showCondition(){
      var se = this;
      // if(se._flightService.itemFlightCache.isApiDirect){
      //   this._flightService.itemFlightInternationalInfo = itemFlight;
      //   this._flightService.itemFlightInternational = item;
      //   this._flightService.indexFlightInternational = index;
    
      //   let itemd = item.departFlights.filter((id)=>{return id.ischeck});
      //   let itemr = item.returnFlights.filter((ir)=>{return ir.ischeck});
      //   if(itemd && itemd.length >0 && itemr && itemr.length >0){
      //     this._flightService.itemFlightCache.itemFlightInternationalDepart = itemd[0];
      //     this._flightService.itemFlightCache.itemFlightInternationalReturn = itemr[0];
      //   } else if (itemd && itemd.length >0){
      //     this._flightService.itemFlightCache.itemFlightInternationalDepart = itemd[0];
      //   }
      
      // const modal: HTMLIonModalElement =
      //   await this.modalCtrl.create({
      //     component: FlightInfoInternationalPage,
      //   });
      //   modal.present();
      // }
      //else{
        if(se._flightService.itemFlightCache.backtochoiceseat && se.checkseat){
          se._flightService.itemFlightCache.backtochoiceseat = false;
        }
        se.navCtrl.navigateForward('/flightcondition');
      //}
      
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

      checkChange(){
          this.chkchangeflight = true;
      }

      getDetailTicket(item) : Promise<any>{
        var se = this;
        return new Promise((resolve, reject) => {
          if(item){
            var options = {
              method: 'GET',
              url: C.urls.baseUrl.urlFlight + "gate/apiv1/GetDetailTicketAirBus?airlineCode="+item.airlineCode +"&ticketType="+item.ticketType+"&airbusCode="+item.aircraft+"&flightNumber="+item.flightNumber+"&fromPlace="+(item.fromPlaceCode ? item.fromPlaceCode : item.from)+"&toPlace="+(item.toPlaceCode ? item.toPlaceCode : item.to)+"&departDate="+moment(item.departTime).format("MM-DD-YYYY")+"&bookingDate="+moment(new Date()).format("MM-DD-YYYY"),
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
                let result = JSON.parse(body);
                resolve(result);
                
            }
          })
          }else{
            resolve(false);
          }
          
        })
        
    }

    updatePassengerInfo() : Promise<any>{
        var se = this;
        se.gf.showLoadingWithMsg('Đang tiến hành giữ vé');
        try{
          let data = se._flightService.itemFlightCache;

          var ho ='', ten ='';
          let objhoten = se.splitFullName(data.adults[0].name, ho, ten);
          ho = objhoten.firstname;
          ten = objhoten.lastname;
        
          
          let listpassenger = [];
              //let data = se._flightService.itemFlightCache;
               let departluggage=[],returnluggage=[],
                departAirlineCode = data.departFlight.airlineCode, returnAirlineCode = data.returnFlight ? data.returnFlight.airlineCode : "";
                
                //Hành lý đi trả về từ api tìm vé
                if(data.departFlight && data.departFlight.airLineLuggage && data.departFlight.airLineLuggage.length >0){
                  const dl = data.departFlight.airLineLuggage.filter((item) => { return item.quantity >0});
                  if(dl && dl.length >0){
                    dl.forEach(element => {
                      element.quantitycheck = element.quantity;
                      departluggage.push(element)
                    });
                    //departluggage = [...dl];
                  }
                  
                }
                //Hành lý đi trả về từ api load hành lý
                if(data.departLuggage && data.departLuggage.length >0){
                  const dl = data.departLuggage.filter((item) => { return item.quantity >0});
                  if(dl && dl.length >0){
                    dl.forEach(element => {
                      element.quantitycheck = element.quantity;
                      departluggage.push(element)
                    });
                    //departluggage = [...dl];
                  }
                }
                //Hành lý về trả về từ api tìm vé
                if(data.returnFlight && data.returnFlight.airLineLuggage && data.returnFlight.airLineLuggage.length >0){
                  const rl = data.returnFlight.airLineLuggage.filter((item) => { return item.quantity >0});
                  if(rl && rl.length >0){
                    //returnluggage = [...rl]
                    rl.forEach(element => {
                      element.quantitycheck = element.quantity;
                      returnluggage.push(element)
                    });
                  }
                  
                }
                //Hành lý về trả về từ api load hành lý
                if(data.returnLuggage && data.returnLuggage.length >0){
                  const rl = data.returnLuggage.filter((item) => { return item.quantity >0});
                  if(rl && rl.length >0){
                    //returnluggage = [...rl]
                    rl.forEach(element => {
                      element.quantitycheck = element.quantity;
                      returnluggage.push(element)
                    });
                  }
                }


              for (let index = 0; index < data.adults.length; index++) {
                const element = data.adults[index];
                //tên
                var ho1 ='', ten1='';
                let objhoten1 = se.splitFullName(element.name, ho1, ten1);
                ho1 = objhoten1.firstname;
                ten1 = objhoten1.lastname;
                //hành lý
                let objAncilary =[],objAncilaryReturn =[] ;
                let departluggageweight = 0, returnluggageweight = 0;
                if(departluggage && departluggage.length >0){
                  let objLuggage;
                  if(departluggage && departluggage.length == 1){
                    if(departluggage[0].quantitycheck >0){
                        if(departAirlineCode == "JetStar"){
                              objLuggage = {
                                Name: departluggage[0].title, 
                                Type: "Baggage", 
                                Value: departluggage[0].weight,
                                price: departluggage[0].amount,
                                flightNumber: data.departFlight.flightNumber
                              }
                            }
                            else if(departAirlineCode == "VietnamAirlines"){
                              let obj = JSON.parse(departluggage[0].purchaseKey);
                              obj.NameId = "1.1";
                              objLuggage = {
                                Name: departluggage[0].title, 
                                Type: "Baggage", 
                                Key: JSON.stringify(obj),
                                Value: departluggage[0].weight,
                                price: departluggage[0].amount,
                                netPrice:departluggage[0].netPrice,
                                flightNumber: data.departFlight.flightNumber
                              }
                            }
                            else{
                              objLuggage = {
                                Name: departluggage[0].title, 
                                Type: "Baggage", 
                                Key: departluggage[0].purchaseKey,
                                Value: departluggage[0].weight,
                                price: departluggage[0].amount,
                                flightNumber: data.departFlight.flightNumber
                              }
                          }

                      //Chọn 1 kiện thì gán vào người thứ 1
                      if(index == 0){
                        objAncilary.push(objLuggage);
                        departluggageweight = departluggage[0].weight;
                      }
                      //Chọn 2 kiện cùng số kg thì tách ra chia cho 2 người
                      else if(departluggage[0].quantitycheck >= 1){
                        objAncilary.push(objLuggage);
                        departluggageweight = departluggage[0].weight;
                      }
                      departluggage[0].quantitycheck--;
                    }


                  }
                  else if(departluggage && departluggage.length > 1){
                      var dl1;
                      if(index >0 && departluggage[index-1] && departluggage[index-1].quantitycheck >0){
                        dl1 = departluggage[index-1];
                      }else{
                        dl1 = departluggage[index];
                      }
                      if(dl1){
                        if(departAirlineCode == "JetStar"){
                          objLuggage = {
                            Name: dl1.title, 
                            Type: "Baggage", 
                            Value: dl1.weight,
                            price: dl1.amount,
                            flightNumber: data.departFlight.flightNumber
                          }
                        }
                        else if(departAirlineCode == "VietnamAirlines")
                            {
                              let obj = JSON.parse(dl1.purchaseKey);
                                  obj.NameId = "1.1";
                              objLuggage = {
                                Name: dl1.title, 
                                Type: "Baggage", 
                                Key: JSON.stringify(obj),
                                Value: dl1.weight,
                                price: dl1.amount,
                                netPrice: dl1.netPrice,
                                flightNumber: data.departFlight.flightNumber
                              }
                            }
                        else{
                          objLuggage = {
                            Name: dl1.title, 
                            Type: "Baggage", 
                            Key: dl1.purchaseKey,
                            Value: dl1.weight,
                            price: dl1.amount,
                            flightNumber: data.departFlight.flightNumber
                          }
                        }
                        objAncilary.push(objLuggage);
                        departluggageweight = dl1.weight;
                        dl1.quantitycheck--;
                      }
                      
                    }
                       
                }

                if(returnluggage && returnluggage.length >0){
                    let objReturnLuggage1;
                    if(returnluggage && returnluggage.length ==1 && returnluggage[0].quantitycheck >0){
                      if(returnAirlineCode && returnAirlineCode == "JetStar"){
                        objReturnLuggage1 = {
                          Name: returnluggage[0].title, 
                          Type: "Baggage", 
                          Value: returnluggage[0].weight,
                          price: returnluggage[0].amount,
                          flightNumber: data.returnFlight.flightNumber
                        }
                      }
                      else if(returnAirlineCode == "VietnamAirlines")
                      {
                                let obj = JSON.parse(returnluggage[0].purchaseKey);
                                    obj.NameId = "1.1";
                                objReturnLuggage1 = {
                                  Name: returnluggage[0].title, 
                                  Type: "Baggage", 
                                  Key: JSON.stringify(obj),
                                  Value: returnluggage[0].weight,
                                  price: returnluggage[0].amount,
                                  netPrice:returnluggage[0].netPrice,
                                  flightNumber: data.returnFlight.flightNumber
                                }
                      }
                      else{
                        objReturnLuggage1 = {
                          Name: returnluggage[0].title, 
                          Type: "Baggage", 
                          Key: returnluggage[0].purchaseKey,
                          Value: returnluggage[0].weight,
                          price: returnluggage[0].amount,
                          flightNumber: data.returnFlight.flightNumber
                        }
                      }
                      
                      
                      if(index == 0){
                        objAncilaryReturn.push(objReturnLuggage1);
                          returnluggageweight = returnluggage[0].weight;
                      }
                      else if(returnluggage[0].quantitycheck >= 1){
                        objAncilaryReturn.push(objReturnLuggage1);
                        returnluggageweight = returnluggage[0].weight;
                      }

                      returnluggage[0].quantitycheck--;
                    }
                    else if(returnluggage && returnluggage.length > 1){
                      var rl1;
                      if(index >0 && returnluggage[index-1] && returnluggage[index-1].quantitycheck >0){
                        rl1 = returnluggage[index-1];
                      }else{
                        rl1 = returnluggage[index];
                      }
                      if(rl1){
                        if(returnAirlineCode && returnAirlineCode == "JetStar"){
                          objReturnLuggage1 = {
                            Name: rl1.title, 
                            Type: "Baggage", 
                            Value: rl1.weight,
                            price: rl1.amount,
                            flightNumber: data.returnFlight.flightNumber
                          }
                        }
                        else if(returnAirlineCode == "VietnamAirlines")
                            {
                              let obj = JSON.parse(rl1.purchaseKey);
                                  obj.NameId = "1.1";
                              objReturnLuggage1 = {
                                Name: rl1.title, 
                                Type: "Baggage", 
                                Key: JSON.stringify(obj),
                                Value: rl1.weight,
                                price: rl1.amount,
                                netPrice:rl1.netPrice,
                                flightNumber: data.returnFlight.flightNumber
                              }
                            }
                        else{
                          objReturnLuggage1 = {
                            Name: rl1.title, 
                            Type: "Baggage", 
                            Key: rl1.purchaseKey,
                            Value: rl1.weight,
                            price: rl1.amount,
                            flightNumber: data.returnFlight.flightNumber
                          }
                        }
                        
                        objAncilaryReturn.push(objReturnLuggage1);
                        returnluggageweight = rl1.weight;
                        rl1.quantitycheck--;
                      }
                      
                    }
                }

                    //chỗ ngồi
                    //Vietjet lấy key theo selectionKey; Bamboo lấy key theo seatNumber
                    let objSeat;
                    if(data.departSeatChoice && data.departSeatChoice.length >0){
                      if(data.departSeatChoice.length ==1 && !data.departSeatChoice[0].choosed){
                        let seat = data.departSeatChoice[0];
                        let stop = data.departFlight.stops;
                        if (departAirlineCode=='VietnamAirlines') {
                            let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                            objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key:  JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: index+1 };
                        }
                        else{
                          objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key:  seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, PaxIndex: index+1 };
                        }
                       
                        objAncilary.push(objSeat);
                        data.departSeatChoice[0].choosed = true;
                      }else{
                        let seat = data.departSeatChoice[index];
                        if(seat){
                          let stop = data.departFlight.stops;
                          if (departAirlineCode=='VietnamAirlines') {
                            let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                            objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key:  JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: index+1 };
                        }
                        else{
                          objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key:  seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, PaxIndex: index+1 };
                        }
                          //objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key:  seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, PaxIndex: index+1 };
                          objAncilary.push(objSeat);
                          data.departSeatChoice[index].choosed = true;
                        }
                        
                      }
                      
                    }
  
                    let objSeatReturn;
                    if(data.returnSeatChoice && data.returnSeatChoice.length >0){
                      if(data.returnSeatChoice.length ==1 && !data.returnSeatChoice[0].choosed){
                        let seatreturn = data.returnSeatChoice[0];
                        let stopreturn = data.returnFlight.stops;
                        if (returnAirlineCode=='VietnamAirlines') {
                            let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                            objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: index+1 };
                          
                        }
                        else{
                          objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  seatreturn.selectionKey? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, PaxIndex: index+1 };
                        }
                       
                        objAncilaryReturn.push(objSeatReturn);
                        data.returnSeatChoice[0].choosed = true;
                      }else{
                        let seatreturn = data.returnSeatChoice[index];
                        if(seatreturn){
                          let stopreturn = data.returnFlight.stops;
                          if (returnAirlineCode=='VietnamAirlines') {
                              let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                              objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  JSON.stringify(objKey), Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: index+1 };
                          }
                          else{
                            objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  seatreturn.selectionKey? seatreturn.selectionKey : seatreturn.seatNumber, Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, PaxIndex: index+1 };
                          }
                          // objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  seatreturn.selectionKey? seatreturn.selectionKey : seatreturn.seatNumber , Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, PaxIndex: index+1 };
                          objAncilaryReturn.push(objSeatReturn);
                          data.returnSeatChoice[index].choosed = true;
                        }
                        
                      }
                      
                    }
                   //Đi chung
                   let objTransfer;
                   if (this._flightService.itemFlightCache.DICHUNGParam && this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo) {
                     
                     objTransfer={Type:"Transfer",price: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo,netPrice:this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo,title:"1"}
                     if(index == 0){
                        objAncilary.push(objTransfer);
                     }
                     
                   }
                   if (this._flightService.itemFlightCache.DICHUNGParam && this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn) {
                     objTransfer={Type:"Transfer",price: this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn,netPrice:this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn,title:"1"}
                     if(index == 0){
                        objAncilaryReturn.push(objTransfer);
                     }
                   }
                   element.ancillaryJson = (objAncilary.length >0 ? JSON.stringify(objAncilary): "");
                    element.ancillaryReturnJson = (objAncilaryReturn.length >0 ? JSON.stringify(objAncilaryReturn): "");
                    console.log(element.ancillaryJson);
                    console.log(element.ancillaryReturnJson);
              listpassenger.push({
                "passengerType": 0,
                "gender": element.gender,
                "firstName": ten1,
                "lastName": ho1,
                "mobileNumber": "",
                "baggage": departluggageweight,
                "returnBaggage": returnluggageweight,
                "birthDay": "",
                "email": "",
                "passportNumber": "",
                "passportExpired": "", 
                "nationality": "",
                "destinationCity": "",
                "destinationPostal": "",
                "destinationStreet": "",
                "passportIssueCountry": "",
                "airlineMemberCode": (data.showLotusPoint && element.airlineMemberCode) ? element.airlineMemberCode : "", 
                "departMealPlan": "", 
                "returnMealPlan": "",  
                "adultIndex": index, 
                "ancillaryJson": element.ancillaryJson,
                "ancillaryReturnJson": element.ancillaryReturnJson
              })
          }

          let adultindex = 0;
          //trẻ em 
          for (let index = 0; index < data.childs.length; index++) {
            const element = data.childs[index];
            
            //hành lý
            let objAncilary =[],objAncilaryReturn =[] ;
            let departluggageweight = 0, returnluggageweight = 0;

            departluggage = departluggage.filter((item) => { return item.quantitycheck >0});
            returnluggage = returnluggage.filter((item) => { return item.quantitycheck >0});

            if(!element.isInfant){
                if(departluggage && departluggage.length >0){
                  let objLuggage;
                  if(departluggage && departluggage.length == 1){
                    if(departluggage[0].quantitycheck >0){
                        if(departAirlineCode == "JetStar"){
                              objLuggage = {
                                Name: departluggage[0].title, 
                                Type: "Baggage", 
                                Value: departluggage[0].weight,
                                price: departluggage[0].amount,
                                flightNumber: data.departFlight.flightNumber
                              }
                              
                            }
                            else if(departAirlineCode == "VietnamAirlines"){
                              let obj = JSON.parse(departluggage[0].purchaseKey);
                              obj.NameId = "1.1";
                              objLuggage = {
                                Name: departluggage[0].title, 
                                Type: "Baggage", 
                                Key: JSON.stringify(obj),
                                Value: departluggage[0].weight,
                                price: departluggage[0].amount,
                                netPrice:departluggage[0].netPrice,
                                flightNumber: data.departFlight.flightNumber
                              }
                            }
                            else{
                              objLuggage = {
                                Name: departluggage[0].title, 
                                Type: "Baggage", 
                                Key: departluggage[0].purchaseKey,
                                Value: departluggage[0].weight,
                                price: departluggage[0].amount,
                                flightNumber: data.departFlight.flightNumber
                              }
                          }

                      //Chọn 1 kiện thì gán vào người thứ 1
                      if(index == 0){
                        objAncilary.push(objLuggage);
                        departluggageweight = departluggage[0].weight;
                      }
                      //Chọn 2 kiện cùng số kg thì tách ra chia cho 2 người
                      else if(departluggage[0].quantitycheck >= 1){
                        objAncilary.push(objLuggage);
                        departluggageweight = departluggage[0].weight;
                      }
                      departluggage[0].quantitycheck--;
                    }


                  }
                  else if(departluggage && departluggage.length > 1){
                      var dlc;
                      if(index >0 && departluggage[index-1] && departluggage[index-1].quantitycheck >0){
                        dlc = departluggage[index-1];
                      }else{
                        dlc = departluggage[index];
                      }
                      if(dlc){
                        if(departAirlineCode == "JetStar"){
                          objLuggage = {
                            Name: dlc.title, 
                            Type: "Baggage", 
                            Value: dlc.weight,
                            price: dlc.amount,
                            flightNumber: data.departFlight.flightNumber
                          }
                        }
                        else if(departAirlineCode == "VietnamAirlines"){
                          let obj = JSON.parse(dlc.purchaseKey);
                          obj.NameId = "1.1";
                          objLuggage = {
                            Name: dlc.title, 
                            Type: "Baggage", 
                            Key: JSON.stringify(obj),
                            Value: dlc.weight,
                            price: dlc.amount,
                            netPrice:dlc.netPrice,
                            flightNumber: data.departFlight.flightNumber
                          }
                        }
                        else{
                          objLuggage = {
                            Name: dlc.title, 
                            Type: "Baggage", 
                            Key: dlc.purchaseKey,
                            Value: dlc.weight,
                            price: dlc.amount,
                            flightNumber: data.departFlight.flightNumber
                          }
                        }
                        objAncilary.push(objLuggage);
                        departluggageweight = dlc.weight;
                        dlc.quantitycheck--;
                      }
                      
                    }
                      
                }

                if(returnluggage && returnluggage.length >0){
                    let objReturnLuggage1;
                    if(returnluggage && returnluggage.length ==1 && returnluggage[0].quantitycheck >0){
                      if(returnAirlineCode && returnAirlineCode == "JetStar"){
                        objReturnLuggage1 = {
                          Name: returnluggage[0].title, 
                          Type: "Baggage", 
                          Value: returnluggage[0].weight,
                          price: returnluggage[0].amount,
                          flightNumber: data.returnFlight.flightNumber
                        }
                      }
                      else if(returnAirlineCode == "VietnamAirlines")
                      {
                        let obj = JSON.parse(returnluggage[0].purchaseKey);
                            obj.NameId = "1.1";
                        objReturnLuggage1 = {
                          Name: returnluggage[0].title, 
                          Type: "Baggage", 
                          Key: JSON.stringify(obj),
                          Value: returnluggage[0].weight,
                          price: returnluggage[0].amount,
                          netPrice:returnluggage[0].netPrice,
                          flightNumber: data.returnFlight.flightNumber
                        }
                      }
                      else{
                        objReturnLuggage1 = {
                          Name: returnluggage[0].title, 
                          Type: "Baggage", 
                          Key: returnluggage[0].purchaseKey,
                          Value: returnluggage[0].weight,
                          price: returnluggage[0].amount,
                          flightNumber: data.returnFlight.flightNumber
                        }
                      }
                      
                      
                      if(index == 0){
                        objAncilaryReturn.push(objReturnLuggage1);
                          returnluggageweight = returnluggage[0].weight;
                      }
                      else if(returnluggage[0].quantitycheck >= 1){
                        objAncilaryReturn.push(objReturnLuggage1);
                        returnluggageweight = returnluggage[0].weight;
                      }

                      returnluggage[0].quantitycheck--;
                    }
                    else if(returnluggage && returnluggage.length > 1){
                      var rlc;
                      if(index >0 && returnluggage[index-1] && returnluggage[index-1].quantitycheck >0){
                        rlc = returnluggage[index-1];
                      }else{
                        rlc = returnluggage[index];
                      }
                      if(rlc){
                        if(returnAirlineCode && returnAirlineCode == "JetStar"){
                          objReturnLuggage1 = {
                            Name: rlc.title, 
                            Type: "Baggage", 
                            Value: rlc.weight,
                            price: rlc.amount,
                            flightNumber: data.returnFlight.flightNumber
                          }
                        }
                        else if(returnAirlineCode == "VietnamAirlines")
                        {
                          let obj = JSON.parse(rlc.purchaseKey);
                              obj.NameId = "1.1";
                          objReturnLuggage1 = {
                            Name: rlc.title, 
                            Type: "Baggage", 
                            Key: JSON.stringify(obj),
                            Value: rlc.weight,
                            price: rlc.amount,
                            netPrice:rlc.netPrice,
                            flightNumber: data.returnFlight.flightNumber
                          }
                        }
                        else{
                          objReturnLuggage1 = {
                            Name: rlc.title, 
                            Type: "Baggage", 
                            Key: rlc.purchaseKey,
                            Value: rlc.weight,
                            price: rlc.amount,
                            flightNumber: data.returnFlight.flightNumber
                          }
                        }
                        
                        objAncilaryReturn.push(objReturnLuggage1);
                        returnluggageweight = rlc.weight;
                        rlc.quantitycheck--;
                      }
                      
                    }
                }
            }
           
            //tên
            var ho1 ='', ten1='';
            let objhoten1 = se.splitFullName(element.name, ho1, ten1);
            ho1 = objhoten1.firstname;
            ten1 = objhoten1.lastname;
            //let objAncilary =[],objAncilaryReturn =[] ;
            let indexseat = index + data.adults.length;
            if(!element.isInfant){
              //chỗ ngồi
              let objSeat;
              if(data.departSeatChoice && data.departSeatChoice.length >0){
                if(data.departSeatChoice.length ==1){
                  if(data.departSeatChoice[indexseat] && !data.departSeatChoice[indexseat].choosed){
                    let seat = data.departSeatChoice[indexseat];
                    let stop = data.departFlight.stops;

                    if (departAirlineCode=='VietnamAirlines') {
                      let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                      objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key: JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: indexseat+1 };
                    }else{
                      objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key:  seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, PaxIndex: indexseat+1 };
                    }
                    objAncilary.push(objSeat);
                  }
                  
                }else{
                  if(data.departSeatChoice[indexseat] && !data.departSeatChoice[indexseat].choosed){
                    let seat = data.departSeatChoice[indexseat];
                    if(seat){
                      let stop = data.departFlight.stops;
                      if (departAirlineCode=='VietnamAirlines') {
                        let objKey = { NameId: "1.1", SeatNumber: seat.name, Price: seat.amount };
                        objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key:  JSON.stringify(objKey), Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, netPrice: seat.amount, PaxIndex: indexseat+1 };
                      }else{
                        objSeat = {Name: "Chỗ ngồi " + seat.name, Type : "Seat", Key:  seat.selectionKey ? seat.selectionKey : seat.seatNumber, Value: seat.name, journey: 1, segment: (stop >=1 ? 2 : 1), price: seat.amount, PaxIndex: indexseat+1 };
                      }
                      
                      objAncilary.push(objSeat);
                    }
                    
                  }
                }
                
              }

              let objSeatReturn;
              if(data.returnSeatChoice && data.returnSeatChoice.length >0){
                if(data.returnSeatChoice.length ==1){
                  if(data.returnSeatChoice[indexseat] && !data.returnSeatChoice[indexseat].choosed){
                      let seatreturn = data.returnSeatChoice[indexseat];
                      let stopreturn = data.returnFlight.stops;
                      
                      if (returnAirlineCode=='VietnamAirlines') {
                        let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                        objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  JSON.stringify(objKey) , Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: indexseat+1 };
                      }
                      else{
                        objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber , Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, PaxIndex: indexseat+1 };
                      }
                      objAncilaryReturn.push(objSeatReturn);
                    }
                }else{
                  if(data.returnSeatChoice[indexseat] && !data.returnSeatChoice[indexseat].choosed){
                    let seatreturn = data.returnSeatChoice[indexseat];
                    if(seatreturn){
                      let stopreturn = data.returnFlight.stops;
                      if (returnAirlineCode=='VietnamAirlines') {
                        let objKey = { NameId: "1.1", SeatNumber: seatreturn.name, Price: seatreturn.amount };
                        objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  JSON.stringify(objKey) , Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, netPrice: seatreturn.amount, PaxIndex: indexseat+1 };
                      }else{
                        objSeatReturn = {Name: "Chỗ ngồi " + seatreturn.name, Type : "Seat", Key:  seatreturn.selectionKey ? seatreturn.selectionKey : seatreturn.seatNumber , Value: seatreturn.name, journey: (data.departFlight.airlineCode == data.returnFlight.airlineCode)? 2 : 1, segment: (stopreturn >=1 ? 2 : 1), price: seatreturn.amount, PaxIndex: indexseat+1 };
                      }
                      
                      objAncilaryReturn.push(objSeatReturn);
                    }
                      
                    }
                }
                
              }
            }
            element.ancillaryJson = (objAncilary.length >0 ? JSON.stringify(objAncilary): "");
            element.ancillaryReturnJson = (objAncilaryReturn.length >0 ? JSON.stringify(objAncilaryReturn): "");
            
            //let adultindex = element.isInfant ? (element.iddisplay*1 - 1) : 0;
            if(element.isInfant){
              adultindex++;
            }
              listpassenger.push({
                "passengerType": element.isInfant ? 2 : 1,
                "gender": element.gender,
                "firstName": ten1,
                "lastName": ho1,
                "mobileNumber": "",
                "baggage": departluggageweight ? departluggageweight : "",
                "returnBaggage": returnluggageweight ? returnluggageweight : "",
                "birthDay": element.dateofbirth,
                "email": "",
                "passportNumber": "",
                "passportExpired": "", 
                "nationality": "",
                "destinationCity": "",
                "destinationPostal": "",
                "destinationStreet": "",
                "passportIssueCountry": "",
                "airlineMemberCode": "", 
                "departMealPlan": "", 
                "returnMealPlan": "",  
                "adultIndex": element.isInfant ? adultindex -1 : 0, 
                "ancillaryJson": element.ancillaryJson,
                "ancillaryReturnJson": element.ancillaryReturnJson
              })
          }

          let firstnamecontact = '', lastnamecontact = '';
          let objcontact = se.splitFullName(data.hoten ? data.hoten : data.adults[0].name, firstnamecontact, lastnamecontact);
          firstnamecontact = objcontact.firstname;
          lastnamecontact = objcontact.lastname;
          data.ho = firstnamecontact;
          data.ten = lastnamecontact;

          var bookingJsonData;
               //thêm param đi chung vào list đầu tiên
              if (this._flightService.itemFlightCache.DICHUNGParam) {
                this._flightService.itemFlightCache.DICHUNGParam.User={email:C.urls.baseUrl.emailDC,phone:data.phone,fullName:data.ho+" "+data.ten};
                listpassenger[0].DICHUNGParam = this._flightService.itemFlightCache.DICHUNGParam;
                var AirTicketObj=[];
                let AirTicketItem= {PromotionNote:"",AirlineName:""};
                let JsonItem = JSON.stringify(listpassenger[0].DICHUNGParam);
                AirTicketItem.PromotionNote = JsonItem;
                AirTicketItem.AirlineName = "APIDICHUNG";
                AirTicketObj.push(AirTicketItem);
                let Json = JSON.stringify(AirTicketObj);
                bookingJsonData = Json;
              }
              let voucherSelectedMap = this._voucherService.voucherSelected.map(v => {
                let newitem = {};
                newitem["voucherCode"] = v.code;
                newitem["voucherName"] = v.rewardsItem.title;
                newitem["voucherType"] = v.applyFor || v.rewardsItem.rewardsType;
                newitem["voucherDiscount"] = v.rewardsItem.price;
                newitem["keepCurrentVoucher"] = this._flightService.itemFlightCache.listVouchersAlreadyApply && this._flightService.itemFlightCache.listVouchersAlreadyApply.length >0 ? this._flightService.itemFlightCache.listVouchersAlreadyApply.some(item => item.code == v.code) :false;
                return newitem;
              });
              let promoSelectedMap = this._voucherService.listObjectPromoCode.map(v => {
                let newitem = {};
                newitem["voucherCode"] = v.code;
                newitem["voucherName"] = v.name;
                newitem["voucherType"] = 2;
                newitem["voucherDiscount"] = v.price;
                newitem["keepCurrentVoucher"] = this._flightService.itemFlightCache.listVouchersAlreadyApply && this._flightService.itemFlightCache.listVouchersAlreadyApply.length >0 ? this._flightService.itemFlightCache.listVouchersAlreadyApply.some(item => item.code == v.code) :false;
                return newitem;
              });

              let checkpromocode = this._voucherService.voucherSelected && this._voucherService.voucherSelected.length ==0 && this._voucherService.listObjectPromoCode && this._voucherService.listObjectPromoCode.length ==0;
              let arrpromocode = se._voucherService.flightPromoCode ? [{"voucherCode": se._voucherService.flightPromoCode, "voucherName": se._voucherService.flightPromoCode,"voucherType": 1,"voucherDiscount": se._voucherService.flightTotalDiscount,"keepCurrentVoucher": false  }] : [];

          return new Promise((resolve, reject) => {
            let objPass
               objPass = {
                "contact": {
                  "gender": "1",
                  "firstName": lastnamecontact,
                  "lastName": firstnamecontact ,
                  "mobileNumber": data.phone,
                  "email": data.email,
                  "address": "",
                  "phoneNumber": data.phone,
                },
                "passengers": listpassenger,
                "userToken": "",
                "noteCorp": "",
                "compName": data.companyname,
                "compAddress": data.address,
                "compTaxCode": data.tax,
                "receiverAddress": "",
                "isInvoice": data.Invoice,
                "isHoldTicket": false,//tạm thời chưa giữ chỗ
                "departFlightId": data.departFlight ? data.departFlight.id : "",
                "returnFlightId": data.returnFlight ? data.returnFlight.id : "",
                //"voucher":{ voucherCode: se._flightService.itemFlightCache.promotionCode ? se._flightService.itemFlightCache.promotionCode:"" },
                "vouchers" : !checkpromocode ? [...voucherSelectedMap,...promoSelectedMap] : arrpromocode,
                "hotelAddon" : se._flightService.itemFlightCache.objHotelCitySelected ? se._flightService.itemFlightCache.objHotelCitySelected : "" ,//truyền thêm hotelcity nếu chọn
                "bookingJsonData":bookingJsonData,//đi chung
                "InsuranceType":se._flightService.itemFlightCache.InsuranceType,
                "isCheckinOnline": se._flightService.itemFlightCache.isCheckinOnline
              }
              
              if(this._voucherService.voucherSelected && this._voucherService.voucherSelected.length ==0 && this._voucherService.listObjectPromoCode && this._voucherService.listObjectPromoCode.length ==0){
                if(se._flightService.itemFlightCache.pnr && se._flightService.itemFlightCache.pnr.resNo && se._flightService.itemFlightCache.promotionCode)
                {
                  objPass.voucher={};
                  objPass.voucher.keepCurrentVoucher=true;
                  objPass.voucher.voucherCode = se._flightService.itemFlightCache.promotionCode ? se._flightService.itemFlightCache.promotionCode:"";
                }
              }
              var options = {
                method: 'POST',
                url: C.urls.baseUrl.urlFlight + "gate/apiv1/PassengerSave/"+data.reservationId,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                  "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                  'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(objPass)
              };
              se.options = options;
              console.log(options)
              request(options, function (error, response, body) {
                let objError = {
                  page: "flightaddservice",
                  func: "updatePassengerInfo",
                  message: response.statusMessage,
                  content: response.body,
                  type: "warning",
                  param: JSON.stringify(options)
                };
                if (error) {
                  error.page = "flightaddservice";
                  error.func = "updatePassengerInfo";
                  error.param = JSON.stringify(options);
                  C.writeErrorLog(objError,response);
                }
                if (response.statusCode == 200) {
                  let result = JSON.parse(body);
                  console.log(result);
                  resolve(result);
                }
              })

          })
        }
        catch(e){
          se.gf.hideLoading();
          let result = (e as Error).message;
          console.log(result)
          let objError = {
            page: "flightaddservice",
            func: "updatePassengerInfo",
            message: "exception",
            content: result,
            type: "warning",
            param: JSON.stringify(se.options)
          };
          C.writeErrorLog(objError,result);
          se.gf.showAlertErrorMessage();
        }
        
      }

      splitFullName(strHoten, ho, ten){
        let textfullname = strHoten.split(' ');
          let name = '';
          if (textfullname.length > 2) {
            for (let i = 1; i < textfullname.length; i++) {
              if (i == 1) {
                name += textfullname[i];
              } else {
                name += ' ' + textfullname[i];
              }
            }
            ho = textfullname[0];
            ten = name;
          } else if (textfullname.length > 1) {
            ho = textfullname[0];
            ten =  textfullname[1];
          }
          else if (textfullname.length == 1) {
            ho = textfullname[0];
            ten = "";
          }
          return {firstname: ho, lastname: ten};
      }
      checkSeatTypeVNA(facs) {
        let fac = facs.filter(item => item.detail == 'FrontOfCabin').length;
        if (fac > 0) {
          return 'front';
        }
      }


      loadHotelCity(data){
        var se = this;
        se.zone.run(()=>{
          se.loadHotelCityDone = (data && data.length >0) ? false : true;
          se._flightService.itemFlightCache.itemsFlightCityHotel = data;
          se._flightService.itemFlightCache.itemsFlightCityHotel.forEach(item => {
            if(item && item.Rating){
              switch (item.Rating) {
                case 50:
                  item.RatingStar = "../../assets/star/ic_star_5.svg";
                  break;
                case 45:
                  item.RatingStar = "../../assets/star/ic_star_4.5.svg";
                  break;
                case 40:
                  item.RatingStar = "../../assets/star/ic_star_4.svg";
                  break;
                case 35:
                  item.RatingStar = "../../assets/star/ic_star_3.5.svg";
                  break;
                case 30:
                  item.RatingStar = "../../assets/star/ic_star_3.svg";
                  break;
                case 25:
                  item.RatingStar = "../../assets/star/ic_star_2.5.svg";
                  break;
                case 20:
                  item.RatingStar = "../../assets/star/ic_star_2.svg";
                  break;
                case 15:
                  item.RatingStar = "../../assets/star/ic_star_1.5.svg";
                  break;
                case 10:
                  item.RatingStar = "../../assets/star/ic_star_1.svg";
                  break;
                case 5:
                  item.RatingStar = "../../assets/star/ic_star_0.5.svg";
                  break;
                default:
                  break;
              }
            }
    
            let link = "https://maps.google.com/maps?q=" + item.HotelName + "&hl=es;z=14&amp&output=embed";
            item.linkGoogleMap = se.sanitizer.bypassSecurityTrustResourceUrl(link);
            if(item.Avatar && item.Avatar.indexOf('http')==-1){
              item.Avatar = 'https:' +item.Avatar;
            }
            if(item.dataPrice && item.hotelDetail){
              item.hotelDetail.RoomClasses[0].selected = true;
              //item.hotelDetail.RoomClasses[0].roomClassSelected = item.hotelDetail.RoomClasses[0];
              //item.hotelDetail.RoomClasses[0].roomClassSelected.mealtypeSelected = item.hotelDetail.RoomClasses[0].MealTypeRates[0];
    
              item.PaxAndRoomInfo = item.hotelDetail.SummaryFilter+ ", " + item.hotelDetail.RoomClasses[0].TotalRoom+ " · " + item.dataPrice.mealName;
              item.roomName = item.dataPrice.roomName;
              item.priceDiff = (item.dataPrice.lowRateOta * item.hotelDetail.TotalNight) - item.hotelDetail.RoomClasses[0].MealTypeRates[0].PriceAvgPlusOTA;
              item.priceOriginal = item.dataPrice.lowRateOta * item.hotelDetail.TotalNight;
              item.priceOriginalDisplay = se.gf.convertNumberToString(item.priceOriginal);
              item.pricePromo = se.gf.convertNumberToString(item.hotelDetail.RoomClasses[0].MealTypeRates[0].PriceAvgPlusOTA);
              item.priceTotal = item.hotelDetail.RoomClasses[0].MealTypeRates[0].PriceAvgPlusOTA;
              item.SummaryFilter = item.hotelDetail.SummaryFilter;
    
              item.hotelDetail.RoomClasses.forEach(roomClass => {
                roomClass.MealTypeRates[0].PriceDiffUpgradeDisplay = se.gf.convertNumberToString(roomClass.MealTypeRates[0].PriceAvgPlusOTA);
                // let pdiff =  roomClass.MealTypeRates[0].PriceAvgPlusOTA - item.priceOriginal;
                // if(pdiff >0){
                //   roomClass.MealTypeRates[0].PriceDiffUpgrade = pdiff;
                //   roomClass.MealTypeRates[0].PriceDiffUpgradeDisplay = se.gf.convertNumberToString(pdiff);
                // }
              });
            }
    
            
    
          });
    
          se.zone.run(() => se._flightService.itemFlightCache.itemsFlightCityHotel.sort(function(a,b){
              if(a.dataPrice && b.dataPrice){
                return a.dataPrice.lowRate - b.dataPrice.lowRate;
              }
            })
          )
          
          se.loadHotelCityDone = true;
        })
    
        
        
       
        
        let itemhoteldetail = se._flightService.itemFlightCache.itemsFlightCityHotel[0];
        this._flightService.itemFlightCache.objectHotelCity = itemhoteldetail.hotelDetail.RoomClasses[0];
        se.loadDataHotelDetail(itemhoteldetail);
    
      }
    
      loadDataHotelDetail(item){
          let url = C.urls.baseUrl.urlPost + "/mhoteldetail/" + item.HotelId;
          var se = this;
          var options = {
            method: 'POST',
            url: url,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
          };
          request(options, function (error, response, body) {
            if (response.statusCode != 200) {
              var objError = {
                page: "hoteldetail",
                func: "loaddata",
                message: response.statusMessage,
                content: response.body,
                type: "warning",
                param: JSON.stringify(options)
              };
              C.writeErrorLog(objError, response);
            }
            if (error) {
              error.page = "hoteldetail";
              error.func = "loaddata";
              error.param = JSON.stringify(options);
              C.writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
              let jsondata = JSON.parse(body);
              item.defaultHotelData = jsondata;
              //se.searchhotel.itemHotelCityDetail.emit(jsondata);
            }
          })
      
      }
      
      checkChangeRoom(data: any) {
        let se = this;
        if(data && se.searchhotel.hotelCityId){
          let objchangeroom = se._flightService.itemFlightCache.itemsFlightCityHotel.filter((item) => {return item.HotelId == se.searchhotel.hotelCityId});
          if(objchangeroom && objchangeroom.length>0){
              objchangeroom[0].hotelDetail.RoomClasses.forEach(element => {
                  if(element.ClassID == data.ClassID){
                    element.selected = true;
                    element.MealTypeRates[0].selected = true;
                    se._flightService.itemFlightCache.HotelCityMealtypeSelected = element.MealTypeRates[0];
                    //element.roomClassSelected = element;
                    //element.roomClassSelected.mealtypeSelected = element.MealTypeRates[0];
                    se.zone.run(()=>{
                      objchangeroom[0].priceDiff = (objchangeroom[0].dataPrice.lowRateOta * objchangeroom[0].hotelDetail.TotalNight) - element.MealTypeRates[0].PriceAvgPlusOTA;
                      objchangeroom[0].pricePromo = se.gf.convertNumberToString(element.MealTypeRates[0].PriceAvgPlusOTA);
                      objchangeroom[0].priceTotal = element.MealTypeRates[0].PriceAvgPlusOTA;
                    })
                   
                    se.AddHotelCity(objchangeroom[0].HotelId);
                  }else{
                    element.selected = false;
                    //element.MealTypeRates[0].selected = false;
                  }
              });
    
             
              
          }
        }
      }
    
      
      AddHotelCity(id) {
          let se = this;
          let objHotelCity = se._flightService.itemFlightCache.itemsFlightCityHotel.filter((item) => {return item.HotelId == id});
          if(objHotelCity && objHotelCity.length>0){
            let el = objHotelCity[0].hotelDetail.RoomClasses.filter((r) => {return r.selected});
            if(el && el.length >0){
              let room = el[0];
              let mealtype = room.MealTypeRates[0];
              if(mealtype){
                let objHotelCitySelected = {
                  source: '6',
                  HotelId: objHotelCity[0].HotelId,
                  TotalRoom: room.TotalRoom,
                  TotalPrices: mealtype.PriceAvgPlusOTA,
                  RoomStatus: mealtype.Status,
                  BreakfastInclude: mealtype.Code,
                  BreakfastIncludeName: mealtype.Name,
                  PaymentMethod: "",
                  BookingStatus: "",
                  TravPaxPrices: mealtype.PriceAvgPlusNet,
                  Office: "",
                  RoomName: mealtype.RoomName,
                  RoomPrices: mealtype.PriceAvgPlusOTA,
                  RoomId:mealtype.RoomId,
                  MealTypeNote: mealtype.PromotionInclusions && mealtype.PromotionInclusions.length >0 ? mealtype.PromotionInclusions.join(',') : '',
                  PromotionNote: mealtype.PromotionNote,
                  HotelCheckDetailTokenVinHms: mealtype.HotelCheckDetailTokenVinHms,
                  HotelCheckPriceTokenSMD: mealtype.HotelCheckPriceTokenSMD,
                  HotelCheckDetailTokenInternal: mealtype.Supplier == 'SERI' && mealtype.HotelCheckDetailTokenInternal ? mealtype.HotelCheckDetailTokenInternal : "",
                  Supplier: mealtype.IsHoliday ? "Holiday" : mealtype.Supplier,
                  AllomentBreak: mealtype.AllomentBreak,
                  IsPromotionAllotment: mealtype.IsPromotionAllotment,
                  NoteForSupp: mealtype.NoteForSupplier,
                  Avatar: objHotelCity[0].Avatar,
                  HotelName: objHotelCity[0].HotelName,
                  RatingStar: objHotelCity[0].RatingStar,
                  SummaryFilter: objHotelCity[0].SummaryFilter,
                  RoomPriceStr: mealtype.PriceAvgPlusOTAStr,
                  Address:objHotelCity[0].Address,
                  Location:objHotelCity[0].Lat+','+objHotelCity[0].Lon
                }
                se._flightService.itemFlightCache.returnDCPlace=null;
                se._flightService.itemFlightCache.objHotelCitySelected = objHotelCitySelected;
                se._flightService.itemFlightCache.HotelCityMealtypeSelected = mealtype;
                se.totalPriceAll(mealtype);
              }
                
            }
            
          }
      }
      /**
       * Xóa những Hotelcity không được check chọn trước khi chọn lại (trường hợp chọn lại hotelcity khác)
       */
      clearOtherSelectedItem(id):Promise<boolean>{
        return new Promise((resolve, reject) => {
          for (let index = 0; index < this._flightService.itemFlightCache.itemsFlightCityHotel.length; index++) {
            const element = this._flightService.itemFlightCache.itemsFlightCityHotel[index];
            if(element.HotelId != id){
              element.checkaddhotel = false;
            }
            if(index == this._flightService.itemFlightCache.itemsFlightCityHotel.length-1){
              resolve(true);
            }
          }
        })
      }

      /**
       * Xóa những Hotelcity không được check chọn trước khi chọn lại (trường hợp chọn lại hotelcity khác)
       */
       AddSelectedItem(id):Promise<boolean>{
        return new Promise((resolve, reject) => {
          for (let index = 0; index < this._flightService.itemFlightCache.itemsFlightCityHotel.length; index++) {
            const element = this._flightService.itemFlightCache.itemsFlightCityHotel[index];
            if(element.HotelId == id){
              element.checkaddhotel = true;
            }else{
              element.checkaddhotel = false;
            }
            if(index == this._flightService.itemFlightCache.itemsFlightCityHotel.length-1){
              resolve(true);
            }
          }
        })
      }

      /**
       * Kiểm tra lại có check chọn hotelcity thì add vào object
       */
      checkHotelCityBeforeAddDetail(){
        var se = this;
        let objHotelCity = se._flightService.itemFlightCache.itemsFlightCityHotel.filter((hc)=> {return hc.checkaddhotel});
        if(objHotelCity && objHotelCity.length >0){
            se.AddHotelCity(objHotelCity[0].HotelId);
        }
      }
      //thêm đưa đón
  addDichung(stt){
    if(stt==0){
      this._flightService.itemTranferChange.emit(true);
      this._flightService.itemFlightCache.departDCPlace=null;
      this._flightService.itemFlightCache.returnDCPlace=null;
      this.navCtrl.navigateForward('/flightdcpickaddress');
    }
    else{
      this.navCtrl.navigateBack('/flightdcdetail/'+this._flightService.itemFlightCache.isblocktextDepart+'/'+this._flightService.itemFlightCache.isblocktextReturn);
    }
  }
  
  promofunc(vc) {
    var se = this;
    if (se.promocode) {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/data/validpromocode',
        headers:
        {
          'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: {bookingCode: 'VMB' ,code: se.promocode, totalAmount: se._flightService.itemFlightCache.totalPrice, comboDetailId: 0, couponData: (vc.applyFor && vc.applyFor == 'flight' || se._voucherService.openFrom == 'flightaddservice') ?  { flight: {
            "tickets": this._flightService.itemFlightCache.roundTrip ? [
              {
                "flightNumber": se._flightService.itemFlightCache.departFlight.flightNumber ,
                "airLineCode": se._flightService.itemFlightCache.departFlight.airlineCode,
                "departTime": se._flightService.itemFlightCache.departFlight.departTime,
                "landingTime": se._flightService.itemFlightCache.departFlight.landingTime,
                "flightDuration": se._flightService.itemFlightCache.departFlight.flightDuration,
                "fromPlaceCode": se._flightService.itemFlightCache.departFlight.fromPlaceCode,
                "toPlaceCode": se._flightService.itemFlightCache.departFlight.toPlaceCode,
                "stops": se._flightService.itemFlightCache.departFlight.stops,
                "ticketClass": se._flightService.itemFlightCache.departFlight.ticketClass,
                "fareBasis": se._flightService.itemFlightCache.departFlight.fareBasis,
                "jsonObject": ""
              },
              {
                "flightNumber": se._flightService.itemFlightCache.returnFlight.flightNumber ,
                "airLineCode": se._flightService.itemFlightCache.returnFlight.airlineCode,
                "departTime": se._flightService.itemFlightCache.returnFlight.departTime,
                "landingTime": se._flightService.itemFlightCache.returnFlight.landingTime,
                "flightDuration": se._flightService.itemFlightCache.returnFlight.flightDuration,
                "fromPlaceCode": se._flightService.itemFlightCache.returnFlight.fromPlaceCode,
                "toPlaceCode": se._flightService.itemFlightCache.returnFlight.toPlaceCode,
                "stops": se._flightService.itemFlightCache.returnFlight.stops,
                "ticketClass": se._flightService.itemFlightCache.returnFlight.ticketClass,
                "fareBasis": se._flightService.itemFlightCache.returnFlight.fareBasis,
                "jsonObject": ""
              }
            ] : 
            [
              {
                "flightNumber": se._flightService.itemFlightCache.departFlight.flightNumber ,
                "airLineCode": se._flightService.itemFlightCache.departFlight.airlineCode,
                "departTime": se._flightService.itemFlightCache.departFlight.departTime,
                "landingTime": se._flightService.itemFlightCache.departFlight.landingTime,
                "flightDuration": se._flightService.itemFlightCache.departFlight.flightDuration,
                "fromPlaceCode": se._flightService.itemFlightCache.departFlight.fromPlaceCode,
                "toPlaceCode": se._flightService.itemFlightCache.departFlight.toPlaceCode,
                "stops": se._flightService.itemFlightCache.departFlight.stops,
                "ticketClass": se._flightService.itemFlightCache.departFlight.ticketClass,
                "fareBasis": se._flightService.itemFlightCache.departFlight.fareBasis,
                "jsonObject": ""
              }
            ],
            "totalAdult": se._flightService.itemFlightCache.adult,
            "totalChild": se._flightService.itemFlightCache.child,
            "totalInfant": se._flightService.itemFlightCache.infant
          ,
        } }: '' },
        json: true
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        se.zone.run(() => {
          var json = body;
          se.promotionCode="";
          // se.ischeck=false;
          if (json.error == 0) {
            se.msg = json.msg;
            se.ischeckerror = 0;
            se.discountpromo = json.data.orginDiscount ? json.data.orginDiscount : json.data.discount;
            se.promotionCode=se.promocode;

            se.strPromoCode = se.promocode;
            se.totaldiscountpromo = json.data.orginDiscount ? json.data.orginDiscount : json.data.discount;
            se._voucherService.flightPromoCode = se.strPromoCode;
            se._voucherService.flightTotalDiscount = se.totaldiscountpromo;
            se.totalPriceAll(0);
          }
          else if (json.error == 1) {
            se.msg = json.msg;
            se.discountpromo = 0;
            se.ischeckerror = 1;

            se.strPromoCode = '';
            se.totaldiscountpromo = 0;
          }
          else if (json.error == 2) {
            se.msg = json.msg;
            se.discountpromo = 0;
            se.ischeckerror = 1;
            se.strPromoCode = '';
            se.totaldiscountpromo = 0;
          }
          else if (json.error == 3) {
            se.msg = json.msg;
            se.discountpromo = 0;
  
            se.ischeckerror = 1;
            se.strPromoCode = '';
            se.totaldiscountpromo = 0;
          }
          else {
            se.msg = json.msg;
            se.discountpromo = 0;
            se.ischeckerror = 1;
            se.strPromoCode = '';
            se.totaldiscountpromo = 0;
          }
        })
      });
    }
  }
  textchange() {
    this.discountpromo=0;
    this.ischeckerror=0;
    this.msg="";
    this.promotionCode="";
    this.totalPriceAll(0);
  }
  async showinfoCathay(){
    this.alert = await this.alertCtrl.create({
     header:'Bảo hiểm trễ chuyến',
     message: 'Gói Bảo hiểm trễ chuyến được thiết kế để bảo vệ cho những chi phí chuyến bay phát sinh giúp bạn và gia đình yên tâm trên mọi hành trình, giảm bớt những rủi ro. <u >Xem quy chế</u>',
     buttons: [
       {
         text: 'OK',
         cssClass:"btn-ok",
         handler: () => {
           
         }
       }
     ]
   });
   const utag = document.querySelector('u');
   if (utag) {
     utag.setAttribute('style', 'color: #00c1de;');
     utag.addEventListener("click", (e)=>{
       this.noteCathay();
   });
   }
   this.alert.present();
 }
 noteCathay(){
   this.navCtrl.navigateForward('/insurrancenote');
 }
 toggleCathay(ev){
   this.isCathay=ev.detail.checked;
   if (this.isCathay) {
     this._flightService.itemFlightCache.priceCathay = this.priceCathay;
     if(this.roundtrip){
       this._flightService.itemFlightCache.InsuranceType = 3;
     }
     else{
       this._flightService.itemFlightCache.InsuranceType = 2;
     }
   }else{
     this._flightService.itemFlightCache.InsuranceType=0;
     this._flightService.itemFlightCache.priceCathay = 0;
   }
   this.totalPriceAll(0);
 }
 checkAddCathayTime() {
   let now: any = new Date();
   let flightDT: any = this.parseDatetime(
     moment(this.departFlight.departTime).format("DD-MM-YYYY"),
     this.departFlight.departTimeDisplay
   );
   let hours = (flightDT-now) / 36e5;
   return hours > 6 ? true : false;
 }
 parseDatetime(date: string, time: string) {
   let dateObj = date.split("-");
   let dtStr = dateObj[1] + "/" + dateObj[0] + "/" + dateObj[2] + " " + time;
   return new Date(dtStr);
 }
 getCheckAirportDiChung() {
  var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlMobile+'/api/Dashboard/CheckAirportDiChung?airportCode_First='+this._flightService.itemFlightCache.departCode+'&airportCode_Second='+this._flightService.itemFlightCache.returnCode+'&internal_AirporFirst='+se._flightService.itemFlightCache.dataBooking.fromPlace.internal+
      '&internal_AirporSecond='+se._flightService.itemFlightCache.dataBooking.toPlace.internal+'&firstDepartTime='+this.departFlight.departTime+'&secondDepartTime='+(this.returnFlight ? this.returnFlight.departTime : ''),
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
        C.writeErrorLog(objError, response);
      }
      if (response.statusCode == 200) {
        let jsondata = JSON.parse(body);
        se._flightService.itemFlightCache.isAirportFirst=jsondata.data.isAirportFirst;
        se._flightService.itemFlightCache.isAirportSecond=jsondata.data.isAirportSecond;
      }
  })
}

openLinkPromoCathay() {
  this.safariViewController.isAvailable()
    .then((available: boolean) => {
        if (available) {
          this.safariViewController.show({
            url: 'https://rd.zapps.vn/detail/3888313238733373810?id=0089ad8733c2da9c83d3&pageId=3888313238733373810',
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
      }else {
        resolve(false);
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
      }else {
        resolve(false);
      }
    })
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

async showAlertChoiceHotelCity(){
  var se = this;
  let msg ='Không thể tạo lại đơn hàng cũ.Vui lòng chọn lại vé khác!';
  let alert = await se.alertCtrl.create({
    message: msg,
    cssClass: "cls-alert-choiceseat",
    backdropDismiss: false,
    buttons: [
    {
      text: 'OK',
      role: 'OK',
      handler: () => {
       this.goback();
      }
    },
    {
      text: 'Huỷ',
      role: 'Cancel',
      handler: () => {
        alert.dismiss();
      }
    }
  ]
});
alert.present();
}

buildStringPromoCode(){
  
  if(this._voucherService.voucherSelected && this._voucherService.voucherSelected.length >0){
    this.strPromoCode = this._voucherService.voucherSelected.map(item => item.code).join(', ');
    this.totaldiscountpromo = this._voucherService.voucherSelected.map(item => item.rewardsItem).reduce((total,b)=>{ return total + b.price; }, 0);
  }else{
    this.strPromoCode = '';
    this.totaldiscountpromo = 0;
  }

  if(this._voucherService.listPromoCode && this._voucherService.listPromoCode.length >0){
    if(this.strPromoCode){
      this.strPromoCode += ', '+this._voucherService.listPromoCode.join(', ');
    }else{
      this.strPromoCode += this._voucherService.listPromoCode.join(', ');
    }
      
      this.totaldiscountpromo += this._voucherService.totalDiscountPromoCode;
  }

  this._voucherService.flightPromoCode = this.strPromoCode;
  this._voucherService.flightTotalDiscount = this.totaldiscountpromo;
}

  async showFlightInfo(isdepart) {
    this._flightService.itemFlightInternationalInfo = isdepart ? this._flightService.itemFlightCache.departFlight : this._flightService.itemFlightCache.returnFlight;
    this._flightService.indexFlightInternational = 0;
    let item = this._flightService.itemFlightInternational;
   
      let itemd = item.departFlights.filter((id)=>{return id.ischeck});
      let itemr = item.returnFlights.filter((ir)=>{return ir.ischeck});
      if(itemd && itemd.length >0 && itemr && itemr.length >0){
        this._flightService.itemFlightCache.itemFlightInternationalDepart = itemd[0];
        this._flightService.itemFlightCache.itemFlightInternationalReturn = itemr[0];
      } else if (itemd && itemd.length >0){
        this._flightService.itemFlightCache.itemFlightInternationalDepart = itemd[0];
      }
    
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FlightInfoInternationalPage,
      });
      modal.present();
  }

  async showFlightDetail(item, isdepart){
    var se = this;
    if(se.isApiDirect){
      se.showFlightInfo(isdepart);
    }else{
      se._flightService.itemFlightCache.itemFlight = item;
      se._flightService.showFlightDetailFrom = 'flightaddservice';
      const modal: HTMLIonModalElement =
      await se.modalCtrl.create({
        component: FlightdetailPage,
      });
      modal.present();
    }
   
  }
}