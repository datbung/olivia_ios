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
  selector: 'app-flightsearchairport',
  templateUrl: './flightsearchairport.page.html',
  styleUrls: ['./flightsearchairport.page.scss'],
})
export class FlightsearchairportPage implements OnInit {
  @ViewChild('ipSearchAiport') ipSearchAiport ;
  loadpricedone = false;
  items: any = [];
  itemsfull: any = [];
  itemsHasSameCity: any=[];
  isdepart:any;
  listLastSearch = [];
  itemsRegular = [];
  itemsRegularInternational = [];
  itemsFilter: any = [];

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
       this.isdepart = this._flightService.searchDepartCode;
      this.storage.get("listAirport").then((data)=>{
        if(!data || (data && data.length == 0)){
          this.loadLocation();
        }else{

          this.zone.run(()=>{
            let datainbound = data.filter((item) =>{ return item.code != 'FDF' && item.country == C.urls.baseUrl.countryName});
            let dataoutbound = data.filter((item) =>{ return item.code != 'FDF' && item.country != C.urls.baseUrl.countryName});
            this.items = [...data];
            this.itemsfull = [...data];
            //this.itemsfull.sort((a,b)=>{ return (a.count - b.count)*-1 });
            // for (let index = 0; index < 25; index++) {
            //   const element = datainbound[index];
            //   this.items.push(element);
            //   if(index < 5){
            //     this.itemsRegular.push(element);
            //   }
             
            // }
            datainbound.sort((a,b)=>{ return (a.count - b.count)*-1 });
            for (let index = 0; index < 5; index++) {
              const element = datainbound[index];
              element.show = true;
              this.itemsRegular.push(element);
            }
            dataoutbound.sort((a,b)=>{ return (a.count - b.count)*-1 });
            for (let index = 0; index < 5; index++) {
              const element = dataoutbound[index];
              element.show = true;
              this.itemsRegularInternational.push(element);
            }
            
            this.itemsfull.forEach(element => {
              element.show = true;
             
              
            });

            //console.log(this.itemsRegular);
        })
        }
      })

      this.gf.getListLastSearchFlight().then((data)=>{
        this.listLastSearch = data;
        //console.log(this.listLastSearch);
      })
    }

    ngOnInit(){

    }

    ionViewDidEnter() {
      setTimeout(() => {
        this.ipSearchAiport.setFocus();
      }, 150);
    }

    loadLocation(){
        var se = this;
        //let urlPath = C.urls.baseUrl.urlFlight + "gate/apiv1/AllPlace?token=3b760e5dcf038878925b5613c32615ea3ds";
        let urlPath = C.urls.baseUrl.urlFlightInt + "api/FlightSearch/GetAllPlace";
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
              error.param =  JSON.stringify(options);
              C.writeErrorLog(error,response);
              throw new Error(error)
            };
            let result = JSON.parse(body);
            if(result && result.data && result.data.length >0){
              //result = result.filter((item) =>{ return item.country == "Việt Nam" && item.code != 'FDF'});
                se.zone.run(()=>{
                    se.items = [...result.data];
                    se.itemsfull = [...result.data];
                    //se.itemsfull.sort((a,b)=>{ return (a.count - b.count)*-1 });
                    se.items.forEach(element => {
                      element.show = true;
                    });
                    let datainbound = se.items.filter((item) =>{ return item.code != 'FDF' && item.country == C.urls.baseUrl.countryName});
                    let dataoutbound = se.items.filter((item) =>{ return item.code != 'FDF' && item.country != C.urls.baseUrl.countryName});
                    datainbound.sort((a,b)=>{ return (a.count - b.count)*-1 });
                    for (let index = 0; index < 5; index++) {
                      const element = datainbound[index];
                      element.show = true;
                      se.itemsRegular.push(element);
                    }
                    dataoutbound.sort((a,b)=>{ return (a.count - b.count)*-1 });
                    for (let index = 0; index < 5; index++) {
                      const element = dataoutbound[index];
                      element.show = true;
                      se.itemsRegularInternational.push(element);
                    }

                    // for (let index = 0; index < 5; index++) {
                    //   const element = se.items[index];
                    //   this.itemsRegular.push(element);
                    // }
                })
              
            }
        })
    }

    goback(){
      if(this.valueGlobal.backValue == "flightchangeinfo"){
        this.modalCtrl.dismiss();
      }else{
        $('.flightsearchairport-header').css('background', 'transparent');
        this.navCtrl.back();
      }
        
    }

    getItems(ev: any) {
      var se = this;
      if(ev.detail.value){
        const val = se.gf.convertUnicodeCharactor(ev.detail.value).toLowerCase();
        if(se.itemsfull && se.itemsfull.length >0){
          let filteritems = se.itemsfull.filter((element) => { return se.gf.convertUnicodeCharactor(element.name).toLowerCase().indexOf(val) != -1 || se.gf.convertUnicodeCharactor(element.airport).toLowerCase().indexOf(val) != -1});
            se.zone.run(()=>{
              
              se.itemsfull.sort((a,b)=>{ return ((a.order - b.order) > 0 ? 3 : -3) + ((a.internal - b.internal) > 0 ? -5 : 5 ) + ((a.count - b.count) >0 ? -1 : 1 ) });
              if(filteritems && filteritems.length >0){
                se.itemsFilter = [...filteritems];
              }
            })
        }
      }
      else{
        se.itemsFilter = [];
        // se.zone.run(()=>{
        //   for (let index = 0; index < 25; index++) {
        //     const element = se.itemsfull[index];
        //     if(element){
        //       element.show = true;
        //       se.itemsFilter.push(element);
        //     }
            
        //   }
        // })
      }
    }

    async itemclick(item){
      var se = this;
      if(se._flightService.searchDepartCode){
        se._flightService.itemFlightCache.departCode = item.code;
        se._flightService.itemFlightCache.departCity = item.city;
        se._flightService.itemFlightCache.departAirport = item.airport;
        se._flightService.itemFlightCache.itemDepartLocation = item;
        //se._flightService.itemFlightCache.isExtenal = item.country != "Việt Nam" ? true : false;
        //se._flightService.itemFlightCache.isExtenalDepart = item.country != "Việt Nam" ? true : false;
      }else{
        se._flightService.itemFlightCache.returnCode = item.code;
        se._flightService.itemFlightCache.returnCity = item.city;
        se._flightService.itemFlightCache.returnAirport = item.airport;
        se._flightService.itemFlightCache.itemReturnLocation = item;
        //se._flightService.itemFlightCache.isExtenal = item.country != "Việt Nam" ? true : false;
        //se._flightService.itemFlightCache.isExtenalReturn = item.country != "Việt Nam" ? true : false;
      }
      se.gf.createListLastSearchFlight(item);
      se._flightService.itemFlightChangeLocation.emit(item);
      if(se.valueGlobal.backValue == "flightchangeinfo"){
        se.modalCtrl.dismiss();
      }else{
          se.navCtrl.back();
      }
    }
}