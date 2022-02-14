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

  loadpricedone = false;
  items: any = [];
  itemsfull: any = [];
  itemsHasSameCity: any=[];
  isdepart:any;

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
        if(!data){
          this.loadLocation();
        }else{
          console.log(data);
          this.zone.run(()=>{
            data = data.filter((item) =>{ return item.code != 'FDF'});
            data.sort((a,b)=>{ return (a.country == "Việt Nam" && b.country != "Việt Nam" )  ? -1 : 1})
            this.itemsfull = [...data];
            for (let index = 0; index < 25; index++) {
              const element = data[index];
              this.items.push(element)
            }
            
            this.itemsfull.forEach(element => {
              element.show = true;
              if(this._flightService.searchDepartCode){
                if(this._flightService.itemFlightCache.returnCode){
                  element.show = element.code != this._flightService.itemFlightCache.returnCode;
                }
              }else{
                if(this._flightService.itemFlightCache.departCode){
                  element.show = element.code != this._flightService.itemFlightCache.departCode;
                }
              }
              
            });
        })
        }
      })
    }

    ngOnInit(){

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
              error.page = "searchhotel";
              error.func = "getItems";
              error.param =  JSON.stringify(options);
              C.writeErrorLog(error,response);
              throw new Error(error)
            };
            let result = JSON.parse(body);
            if(result && result.length >0){
              result = result.filter((item) =>{ return item.country == "Việt Nam" && item.code != 'FDF'});
                se.zone.run(()=>{
                    se.items = [...result];
                    se.itemsfull = [...result];
                    se.items.forEach(element => {
                      element.show = true;
                    });
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
        const val = se.gf.convertFontVNI(ev.detail.value).toLowerCase();
        if(se.itemsfull && se.itemsfull.length >0){
          let filteritems = se.itemsfull.filter((element) => { return se.gf.convertFontVNI(element.name).toLowerCase().indexOf(val) != -1 || se.gf.convertFontVNI(element.code).toLowerCase().indexOf(val) != -1 || se.gf.convertFontVNI(element.city).toLowerCase().indexOf(val) != -1 || se.gf.convertFontVNI(element.airport).toLowerCase().indexOf(val) != -1});
            se.zone.run(()=>{
              if(filteritems && filteritems.length >0){
                // se.itemsHasSameCity = [];
                // let samecityitem = filteritems.filter((v,i,a)=>a.findIndex(t=>(t.city !== v.city)) );

                // if(samecityitem && samecityitem.length >1){
                //   let uniqueinsamecity =  samecityitem.filter((v,i,a)=>a.findIndex(t=>(t.city === v.city)) === i );
                //   console.log(uniqueinsamecity);
                //   if(uniqueinsamecity && uniqueinsamecity.length >0){
                //     uniqueinsamecity.forEach((uitem)=>{
                //       let arr = samecityitem.filter((arritem) => { return arritem.city == uitem.city});
                //       se.itemsHasSameCity.push({city: uitem.city, country: uitem.country, Items: arr, sameCity: true});
                //     })
                //   }
                //   console.log(se.itemsHasSameCity);
                // }
               
                //let uniqueitem = filteritems.filter((v,i,a)=>a.findIndex(t=>(t.city === v.city)));
                //se.items = [...se.itemsHasSameCity,...uniqueitem];
                //console.log(dupitem);
                se.items = [...filteritems];
              }
              //console.log(filteritems)
              //se.items = filteritems;
            })
        }
      }else{
        se.zone.run(()=>{
          for (let index = 0; index < 25; index++) {
            const element = se.itemsfull[index];
            if(element){
              element.show = true;
              se.items.push(element);
            }
            
          }
        })
      }
    }

    itemclick(item){
      var se = this;
      if(se._flightService.searchDepartCode){
        se._flightService.itemFlightCache.departCode = item.code;
        se._flightService.itemFlightCache.departCity = item.city;
        se._flightService.itemFlightCache.departAirport = item.airport;
        se._flightService.itemFlightCache.itemDepartLocation = item;
        se._flightService.itemFlightCache.isExtenal = item.country != "Việt Nam" ? true : false;
      }else{
        se._flightService.itemFlightCache.returnCode = item.code;
        se._flightService.itemFlightCache.returnCity = item.city;
        se._flightService.itemFlightCache.returnAirport = item.airport;
        se._flightService.itemFlightCache.itemReturnLocation = item;
        se._flightService.itemFlightCache.isExtenal = item.country != "Việt Nam" ? true : false;
      }
      se._flightService.itemFlightChangeLocation.emit(item);
      if(se.valueGlobal.backValue == "flightchangeinfo"){
        se.modalCtrl.dismiss();
      }else{
          se.navCtrl.back();
      }
    }
}