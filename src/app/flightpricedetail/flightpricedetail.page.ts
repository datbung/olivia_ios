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

@Component({
  selector: 'app-flightpricedetail',
  templateUrl: './flightpricedetail.page.html',
  styleUrls: ['./flightpricedetail.page.scss'],
})
export class FlightpricedetailPage implements OnInit {

  loadpricedone = false;
  items: any[];
  itemsfull: any[];
  itemsHasSameCity: any=[];
  departInfoDisplay: any;
  returnInfoDisplay: any;
  adult: any;
  child: any;
  adultPriceDepartDisplay: any;
  childPriceDepartDisplay: any;
  adultPriceReturnDisplay: any;
  childPriceReturnDisplay: any;
  listdepartseatselected: any;
  listreturnseatselected: any;
  totaldepartpriceseat: any="";
  totalreturnpriceseat: any="";
  departFlight: any;
  returnFlight: any;
  departLuggage: any;
  returnLuggage: any;
  totalpricedisplay: any;
  departluggageprice: any=0;
  returnluggageprice: any=0;
  totalpriceluggage: any=0;
  infantPriceDepartDisplay: any=0;
  infantPriceReturnDisplay: any=0;
  infant: any;
  departSeatChoice: any;
  returnSeatChoice: any;
  itemHotelCity: any;
  checkInDisplay: string;
  checkOutDisplay: string;
  textPax: string;
  departPriceDC=0;
  returnPriceDC=0;
  promotionCode="";
  discount=0;
  priceCathay: any;
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
          this.departFlight = this._flightService.itemFlightCache.departFlight;
          this.returnFlight = this._flightService.itemFlightCache.returnFlight;
          this.departInfoDisplay =this._flightService.itemFlightCache.departInfoDisplay +", "+ moment(this._flightService.itemFlightCache.departFlight.departTime).format("YYYY");
          this.returnInfoDisplay = this.returnFlight ? (this._flightService.itemFlightCache.returnInfoDisplay +", "+ moment(this._flightService.itemFlightCache.returnFlight.departTime).format("YYYY")) : "";
          this.departInfoDisplay =this._flightService.itemFlightCache.departInfoDisplay +", "+ moment(this._flightService.itemFlightCache.departFlight.departTime).format("YYYY");
          this.returnInfoDisplay = this.returnFlight ? (this._flightService.itemFlightCache.returnInfoDisplay +", "+ moment(this._flightService.itemFlightCache.returnFlight.departTime).format("YYYY")) : "";
          this.adult = this._flightService.itemFlightCache.adult;
          this.child = this._flightService.itemFlightCache.child;
          this.infant = this._flightService.itemFlightCache.infant;
          if(this.departFlight){
            this.adultPriceDepartDisplay = this.gf.convertNumberToString(this.departFlight.priceAdult);
            this.childPriceDepartDisplay = this.gf.convertNumberToString(this.departFlight.priceChild);
            this.infantPriceDepartDisplay = this.gf.convertNumberToString(this.departFlight.priceInfant);
          }
          
          if(this.returnFlight){
            this.adultPriceReturnDisplay = this.gf.convertNumberToString(this.returnFlight.priceAdult);
            this.childPriceReturnDisplay = this.gf.convertNumberToString(this.returnFlight.priceChild);
            this.infantPriceReturnDisplay = this.gf.convertNumberToString(this.returnFlight.priceInfant);
          }


          this.listdepartseatselected = this._flightService.itemFlightCache.listdepartseatselected;
          this.listreturnseatselected = this._flightService.itemFlightCache.listreturnseatselected;
          //đưa đón sân bay
          if (this._flightService.itemFlightCache.DICHUNGParam) {
            if (this._flightService.itemFlightCache.roundTrip) {
              this.departPriceDC = this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo;
              this.returnPriceDC = this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn;
            } else {
              this.departPriceDC = this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo+this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn;
            }
           
          }
         
          if(this._flightService.itemFlightCache.departSeatChoiceAmout){
            this.totaldepartpriceseat = this.gf.convertNumberToString(this._flightService.itemFlightCache.departSeatChoiceAmout);
          }
          if(this._flightService.itemFlightCache.returnSeatChoiceAmout){
            this.totalreturnpriceseat = this.gf.convertNumberToString(this._flightService.itemFlightCache.returnSeatChoiceAmout);
          }

          this.departLuggage = this._flightService.itemFlightCache.departFlight.airLineLuggage;
          // if(this.departLuggage && this.departLuggage.length >0){
          //     this.departLuggage.forEach(element => {
          //       element.amountDisplay = this.gf.convertNumberToString(element.amount * element.quantity);
          //     });
          // }
          if( (!this.departLuggage || this.departLuggage.length ==0) && this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length >0){
            this.departLuggage =  this._flightService.itemFlightCache.departLuggage;
          }

          if(this.departLuggage && this.departLuggage.length >0){
            this.departLuggage.forEach(element => {
              element.amountDisplay = this.gf.convertNumberToString(element.amount * element.quantity);
            });
        }

          this.departluggageprice = this.departLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);

          if(this.returnFlight){
            this.returnLuggage = this._flightService.itemFlightCache.returnFlight.airLineLuggage;

            if( (!this.returnLuggage || this.returnLuggage.length ==0) && this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length >0){
              this.returnLuggage =  this._flightService.itemFlightCache.returnLuggage;
            }

              if(this.returnLuggage && this.returnLuggage.length >0){
                this.returnLuggage.forEach(element => {
                  element.amountDisplay = this.gf.convertNumberToString(element.amount * element.quantity);
                });
            }
            this.returnluggageprice = this.returnLuggage.reduce((total,b)=>{ return total + (b.quantity * b.amount); }, 0);
          }
          
          this.departSeatChoice = this._flightService.itemFlightCache.departSeatChoice;
          this.returnSeatChoice = this._flightService.itemFlightCache.returnSeatChoice;
          if(this.departSeatChoice && this.departSeatChoice.length >0){
            this.departSeatChoice.forEach(element => {
                element.amountDisplay = this.gf.convertNumberToString(element.amount);
            });
          }
          if(this.returnSeatChoice && this.returnSeatChoice.length >0){
            this.returnSeatChoice.forEach(element => {
                element.amountDisplay = this.gf.convertNumberToString(element.amount);
            });
          }

          let totalprice = this.departFlight.totalPrice + (this.returnFlight ? this.returnFlight.totalPrice : 0);
          if(this.departluggageprice >0){
            totalprice += this.departluggageprice;
            this.totalpriceluggage += this.departluggageprice;
          }

          if(this.returnluggageprice >0){
            totalprice += this.returnluggageprice;
            this.totalpriceluggage += this.returnluggageprice;
          }

          if(this._flightService.itemFlightCache.departSeatChoiceAmout){
            totalprice += this._flightService.itemFlightCache.departSeatChoiceAmout;
          }

          if(this._flightService.itemFlightCache.returnSeatChoiceAmout){
            totalprice += this._flightService.itemFlightCache.returnSeatChoiceAmout;
          }

          if(this._flightService.itemFlightCache.objHotelCitySelected){
            this.itemHotelCity = this._flightService.itemFlightCache.objHotelCitySelected;
            let dtime, rtime ;
            dtime =this._flightService.itemFlightCache.checkInDate;
            this.checkInDisplay = this.gf.getDayOfWeek(dtime).dayname + ", " + moment(dtime).format("DD/MM/YYYY");
            rtime = this._flightService.itemFlightCache.checkOutDate;
            this.checkOutDisplay = this.gf.getDayOfWeek(rtime).dayname + ", " + moment(rtime).format("DD/MM/YYYY");
            this.textPax = this.itemHotelCity.SummaryFilter + " x"+this.itemHotelCity.TotalRoom+ " phòng";
            
            totalprice += this._flightService.itemFlightCache.objHotelCitySelected.RoomPrices;
          }
          if (this._flightService.itemFlightCache.DICHUNGParam) {
            totalprice += this._flightService.itemFlightCache.DICHUNGParam.TotalPriceGo;
            totalprice += this._flightService.itemFlightCache.DICHUNGParam.TotalPriceReturn;
          }
           //thêm voucher
           if(this._flightService.itemFlightCache.promotionCode && this._flightService.itemFlightCache.discount > 0 )
           {
             this.promotionCode=this._flightService.itemFlightCache.promotionCode;
             this.discount=this._flightService.itemFlightCache.discount;
             totalprice=totalprice-this.discount;
           }
            //thêm cathay
            if(this._flightService.itemFlightCache.InsuranceType && this._flightService.itemFlightCache.priceCathay)
            {
              this.priceCathay=this._flightService.itemFlightCache.priceCathay;
              totalprice=totalprice+this._flightService.itemFlightCache.priceCathay;
            }
          this.totalpricedisplay = this.gf.convertNumberToString(totalprice);
        }
    }

    ngOnInit(){

    }

    close(){
        this.modalCtrl.dismiss();
    }
}