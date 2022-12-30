import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
import { GlobalFunction } from '../../providers/globalfunction';
import * as $ from 'jquery';
import { C } from './../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { ImageLoaderService } from 'ionic-image-loader';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ValueGlobal, SearchHotel } from '../../providers/book-service';
import { DayConfig, CalendarModalOptions, CalendarResult, CalendarModal } from 'ion2-calendar';
import {flightService} from './../../providers/flightService';
import * as request from 'requestretry';

@Component({
  selector: 'app-flightinternationalsearchfilter',
  templateUrl: './flightinternationalsearchfilter.page.html',
  styleUrls: ['./flightinternationalsearchfilter.page.scss'],
})
export class FlightInternationalSearchfilterPage implements OnInit {

  loadpricedone = false;
  items: any[];
  itemsfull: any[];
  minpricedisplay = "1 triệu";
  maxpricedisplay = "200 triệu";
  priceobject: any = { lower: 0, upper: 200 };

  minoverlaydisplay = "1 giờ";
  maxoverlaydisplay = "50 giờ";
  overlayobject: any = { lower: 0, upper: 50 };
  minoverlayvalue: any="0";
  maxoverlayvalue: any="50";

  countFilter = 0;
  listAirlines: any=[];
  minvalue: any="0";
  maxvalue: any="200";

  hasfilter: boolean;
  airlineSelected = [];
  listStops: any;
  isCheckAll: boolean = false;
  pinvalue: any;
  pinoverlayvalue: any;
  count0Stops = 0;
  count1Stops: number=0;
  count2Stops: number=0;

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
      console.log(this._flightService.listAllFlightInternational);
      if(this._flightService.listAirlinesFilter) {
        this.listAirlines = this._flightService.listAirlinesFilter;

        this.listAirlines.forEach(elementAirline => {
          let listFlightByAirline =[];
          if(!this._flightService.itemFlightCache.roundTrip){
            listFlightByAirline = this._flightService.listAllFlightInternational.filter((item) => {return elementAirline.name == item.departFlights[0].airline});
          }else{
            listFlightByAirline = this._flightService.listAllFlightInternational.filter((item) => {return elementAirline.name == item.departFlights[0].airline || elementAirline.name == item.returnFlights[0].airline});
          }
         
          elementAirline.minPrice = Math.min(...listFlightByAirline.map(o => o.fare.price));
          
        });

        setTimeout(()=>{
          this.zone.run(() => this.listAirlines.sort(function (a, b) {
            return a.minPrice - b.minPrice;
          }))
        })
      }
      if(this._flightService.listStops){
        this.listStops = this._flightService.listStops;
      }
      
        this.zone.run(()=>{
         
          
            let maxValue = Math.round(Math.max(...this._flightService.listAllFlightInternational.map(o => o.fare.price), 0)/1000000);
            let minValue = Math.round(Math.min(...this._flightService.listAllFlightInternational.map(o => o.fare.price))/1000000);

            if(_flightService.objectFilterInternational && _flightService.objectFilterInternational.maxprice ){
             this.pinvalue = _flightService.objectFilterInternational.maxprice;
            }else {
              this.pinvalue = maxValue;
            }

           

            let maxOverlayValue = Math.round(Math.max(...this._flightService.listAllFlightInternational.map(o => o.fare.maxDepartTime),...this._flightService.listAllFlightInternational.map(o => o.fare.maxReturnTime))/60);
            let minOverlayValue = Math.round(Math.min(...this._flightService.listAllFlightInternational.map(o => o.fare.minDepartTime),...this._flightService.listAllFlightInternational.map(o => o.fare.minReturnTime))/60);
            if(_flightService.objectFilterInternational && _flightService.objectFilterInternational.maxoverlay ){
              this.pinoverlayvalue = _flightService.objectFilterInternational.maxoverlay;
             }else {
               this.pinoverlayvalue = maxOverlayValue;
             }
            // console.log(minOverlayValue);
            // console.log(maxOverlayValue);

            this.minvalue = minValue.toString();
            this.maxvalue = maxValue.toString();

            this.minoverlayvalue = minOverlayValue.toString();
            this.maxoverlayvalue = maxOverlayValue.toString();

            //debugger;
            //this.priceobject = { lower: this.minvalue.toString(), upper: this.maxvalue.toString() };
            this.minpricedisplay = this.gf.convertNumberToString(minValue) + " triệu"; 
            this.maxpricedisplay = this.gf.convertNumberToString(maxValue) + " triệu";

            this.minoverlaydisplay = this.gf.convertNumberToString(minOverlayValue) + " giờ"; 
            this.maxoverlaydisplay = this.gf.convertNumberToString(maxOverlayValue) + " giờ";

             this.isCheckAll = this._flightService.objectFilterInternational ? this._flightService.objectFilterInternational.isCheckAll : false;
           
            if(_flightService.objectFilterInternational && _flightService.objectFilterInternational.airlineSelected && _flightService.objectFilterInternational.airlineSelected.length >0 ){
                setTimeout(()=> {
                  _flightService.objectFilterInternational.airlineSelected.forEach(item => {
                    $('#'+item)[0].checked = true;
                  });
                },500)
            }

            if(_flightService.objectFilterInternational && _flightService.objectFilterInternational.isCheckAll) {
              setTimeout(()=> {
                $('#chkAll')[0].checked = true;
              },500)
            }

            this.count1Stops = 0;
            this.count2Stops = this._flightService.listAllFlightInternational.length;
            if(this._flightService.listAllFlightInternational && this._flightService.listAllFlightInternational.length >0){
              this._flightService.listAllFlightInternational.forEach(element => {
                if(this._flightService.itemFlightCache.roundTrip) {
                  if( (element.departFlights[0] && element.departFlights[0].stops <=1) && (element.returnFlights[0] && element.returnFlights[0].stops <=1) && !(element.departFlights[0] && element.returnFlights[0] && element.departFlights[0].stops ==0 && element.returnFlights[0].stops ==0 )){
                    this.count1Stops +=1;
                  } 
                  if((element.departFlights[0] && element.departFlights[0].stops ==0) && (element.returnFlights[0] && element.returnFlights[0].stops ==0)){
                    this.count0Stops +=1;
                  }
                }else {
                  if( (element.departFlights[0] && element.departFlights[0].stops ==1)){
                    this.count1Stops +=1;
                  } 
                  if((element.departFlights[0] && element.departFlights[0].stops ==0)){
                    this.count0Stops +=1;
                  }
                }
                  
                  
              });
            }
          
      })
      

      // this.zone.run(()=>{
          
      //     let maxValue = Math.max(...this._flightService.listAllFlightInternational.map(o => o.totalPrice), 0);
      //     let minValue = Math.min(...this._flightService.listAllFlightInternational.map(o => o.totalPrice));
      //     this.minvalue = minValue.toString();
      //     this.maxvalue = maxValue.toString();
      // })
    }

    ngOnInit(){

    }

    close(){
      this.modalCtrl.dismiss();
    }

    changeprice(value) {
        //this.minpricedisplay = this.gf.convertNumberToString(this.priceobject.lower) + " triệu"; 
        //this.maxpricedisplay = this.gf.convertNumberToString(this.priceobject.upper) + " triệu";
      console.log(value.detail.value);
      //this.filterItem();
      if(value.detail.value){
        this._flightService.objectFilterInternational = this._flightService.objectFilterInternational || {};
        this._flightService.objectFilterInternational.minprice = this.minvalue;
        this._flightService.objectFilterInternational.maxprice = value.detail.value;
        //this._flightService.publicItemFlightInternationalFilter(this._flightService.objectFilterInternational);
      }
      
    }

    changeoverlay(value) {
      if(value.detail.value){
        this._flightService.objectFilterInternational = this._flightService.objectFilterInternational || {};
        this._flightService.objectFilterInternational.minoverlay = this.minvalue;
        this._flightService.objectFilterInternational.maxoverlay = value.detail.value;
        //this._flightService.publicItemFlightInternationalFilter(this._flightService.objectFilterInternational);
      }
    //this.filterItem();
    }


    clearFilter(){
        $("#chkAll")[0].checked = false
        this._flightService.objectFilterInternational = {};
        this._flightService.objectFilterInternational.stopSelected = -1;
        this._flightService.objectFilterInternational.airlineSelected = [];
          let listcheckboxs = $('.chkAirline');
          for (let index = 0; index < listcheckboxs.length; index++) {
            const element = listcheckboxs[index];
            element.checked = false;
          }
          
        let maxValue = Math.round(Math.max(...this._flightService.listAllFlightInternational.map(o => o.fare.price), 0)/1000000);
            this.pinvalue = maxValue;
            let maxOverlayValue = Math.round(Math.max(...this._flightService.listAllFlightInternational.map(o => o.fare.maxDepartTime),...this._flightService.listAllFlightInternational.map(o => o.fare.maxReturnTime))/60);
            this.pinoverlayvalue = maxOverlayValue;
          
        this._flightService.listflightInternationalFilter = this._flightService.listAllFlightInternational;
        //this._flightService.publicItemFlightInternationalFilter(1);
    }

    checkAll(value) {
        this.isCheckAll = !this.isCheckAll;
        this._flightService.objectFilterInternational.isCheckAll = this.isCheckAll;
        //this.preventDefault()
        if(value.detail.checked){
          this._flightService.objectFilterInternational.airlineSelected = [];
          let listcheckboxs = $('.chkAirline');
          for (let index = 0; index < listcheckboxs.length; index++) {
            const element = listcheckboxs[index];
            element.checked = false;
          }
        }
        //this._flightService.publicItemFlightInternationalFilter(1);
    }

    checkItem(type, item, value) {
      if(type ==2) {
        if(!this._flightService.objectFilterInternational){
          this._flightService.objectFilterInternational = {};
        }
        if(!this._flightService.objectFilterInternational.airlineSelected){
          this._flightService.objectFilterInternational.airlineSelected = [];
        }
        item.checked = !item.checked;
        if(value.detail.checked){
          this.zone.run(()=>{
            this.isCheckAll = false;
            this._flightService.objectFilterInternational.isCheckAll = false;
            $("#chkAll")[0].checked = false
          })
        }
        
        if(this._flightService.objectFilterInternational.airlineSelected && (this._flightService.objectFilterInternational.airlineSelected.length == 0 || this._flightService.objectFilterInternational.airlineSelected.indexOf(item.value) == -1)){
            this._flightService.objectFilterInternational.airlineSelected.push(item.value);
          }
          if(!value.detail.checked){
            this.gf.removeItem(this._flightService.objectFilterInternational.airlineSelected, item.value);
          }
      }else if(type ==1) {
        if(!this._flightService.objectFilterInternational){
          this._flightService.objectFilterInternational = {};
        }
        item.stopEventDefault;
        this._flightService.objectFilterInternational.stopSelected = -1;
        if(item.detail.checked){
          this._flightService.objectFilterInternational.stopSelected = value;
        }
      }

      //this._flightService.publicItemFlightInternationalFilter(1);
    }

    ionViewWillLeave(){
      this._flightService.publicItemFlightInternationalFilter(1);
    }

    filter(){
      this.modalCtrl.dismiss();
    }
}