import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { C } from './../providers/constants';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ValueGlobal, SearchHotel } from '../providers/book-service';
import {flightService} from './../providers/flightService';
import * as request from 'requestretry';

@Component({
  selector: 'app-flightuseful',
  templateUrl: './flightuseful.page.html',
  styleUrls: ['./flightuseful.page.scss'],
})
export class FlightusefulPage {
    //@ViewChild('divuseful') content ion
    item: any;
    listUseful: any;
    itemclick: any;

    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private zone: NgZone,
        public storage: Storage,
        public valueGlobal: ValueGlobal,
        public _flightService: flightService) { 
            this.loadDataFlightUseful();
        }

        ngOnInit(){

        }

        loadDataFlightUseful(){
            let url = C.urls.baseUrl.urlFlight + "gate/apiv1/GetUsefulHome";
            this.gf.RequestApi("GET", url, {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
                }, {}, "homeflight", "GetUsefulHome").then((data) =>{
                  if(data){
                        this.listUseful = data;                      
                  }
                })
        }

        itemClick(item){
            if(this.itemclick && this.itemclick.id == item.id){
                this.itemclick = item;
            }else{
                this.itemclick = item;

                for (let index = 0; index < this.listUseful.length; index++) {
                    const element = this.listUseful[index];
                    element.clicked = false;
                }

                
            }
            
            if(item.clicked){
                item.clicked = false;
            }else{
                item.clicked = true;
                setTimeout(()=>{
                    this._flightService.itemUseFulClick.emit(parseInt($("#"+item.id)[0].offsetTop) - 70);
                },10)
            }
           
        }
}