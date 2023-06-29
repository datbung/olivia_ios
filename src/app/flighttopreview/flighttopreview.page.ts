import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { C } from '../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { ImageLoaderService } from 'ionic-image-loader';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ValueGlobal, SearchHotel } from '../providers/book-service';
import { DayConfig, CalendarModalOptions, CalendarResult, CalendarModal } from 'ion2-calendar';
import {flightService} from '../providers/flightService';
import * as request from 'requestretry';

@Component({
  selector: 'app-flighttopreview',
  templateUrl: './flighttopreview.page.html',
  styleUrls: ['./flighttopreview.page.scss'],
})
export class FlightTopReviewPage {
    listflighttopreview: any= [];
    avgPoint: any;
    numOfReview: any;

    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private imageLoader: ImageLoaderService,
        public storage: Storage,
        private actionsheetCtrl: ActionSheetController,
        public valueGlobal: ValueGlobal,
        public _flightService: flightService) { 
            this.loadDataFlightTopReviews();
        }
    
        ngOnInit(){
            
        }

        loadDataFlightTopReviews(){
            let url = C.urls.baseUrl.urlFlight + "gate/apiv1/GetReviewFlights?pageIndex=1&pageSize=6";
            this.gf.RequestApi("GET", url, {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
                }, {}, "homeflight", "GetSlideHome").then((data) =>{
                  if(data && data.reviews){
                      data.reviews.forEach(element => {
                        element.reviewDateDisplay = moment(element.reviewDate).format("DD/MM/YYYY");
                        
                      });

                    this.valueGlobal.flightAvgPoint = data.avgPoint.toFixed(1);
                    this.avgPoint = data.avgPoint.toFixed(1);
                    this.numOfReview = data.total;
                    this.listflighttopreview = data.reviews;
                  }
                })
        }

        showReviewList(){
            this.navCtrl.navigateForward('/flighttopreviewlist');
        }
}