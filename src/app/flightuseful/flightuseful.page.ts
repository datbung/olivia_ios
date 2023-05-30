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
    item: any;
    listUseful: any;
    itemclick: any;
    type: any;
    arrLinkImage = [
        "https://res.ivivu.com/flight/inbound/images/home/qa1.svg",
        //"https://res.ivivu.com/flight/inbound/images/home/qa17_Covid19.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa2.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa3.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa4.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa5.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa6.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa7.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa8.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa9.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa10.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa11.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa12.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa13.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa14.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa15.svg",
        "https://res.ivivu.com/flight/inbound/images/home/qa16.svg",

    ]

    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private zone: NgZone,
        public storage: Storage,
        public valueGlobal: ValueGlobal,
        public _flightService: flightService) { 
            this.loadDataFlightUseful();
            setTimeout(()=>{
                this.zone.run(()=>{
                    this.type = $('app-flightuseful').attr('type')*1;
                })
            },300)
            
        }

        ngOnInit(){

        }

        loadDataFlightUseful(){
            //let url = C.urls.baseUrl.urlFlight + "https://api-flight.ivivu.com/gate/apiv1/GetUsefulHome";
            let url = "https://api-flight.ivivu.com/gate/apiv1/GetUsefulHome";
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

        showusefuldetail(){
            this.navCtrl.navigateForward('/flightusefuldetail');
        }
}