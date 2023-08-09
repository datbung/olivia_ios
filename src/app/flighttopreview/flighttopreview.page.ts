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
  listflighttopreviewgroup: any;
  page=1;
  isloadmore: boolean;
  slidesk = [
    {name: 'slidesk1', arraySlideSK:[1,2,3]}
  ]

    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private imageLoader: ImageLoaderService,
        public storage: Storage,
        private actionsheetCtrl: ActionSheetController,
        public valueGlobal: ValueGlobal,
        public _flightService: flightService) { 
          this.page=1;
          this.loadDataFlightTopReviews();
        }
    
        ngOnInit(){
            
        }

        loadDataFlightTopReviews(){
            let url = C.urls.baseUrl.urlFlight + `gate/apiv1/GetReviewFlights?pageIndex=${this.page}&pageSize=102&nocache=true`;
            this.gf.RequestApi("GET", url, {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
                }, {}, "homeflight", "GetSlideHome").then((data) =>{
                  if(data && data.reviews){
                    
                    console.log(this._flightService.listTopReviews)
                      data.reviews.forEach(element => {
                        element.reviewDateDisplay = moment(element.reviewDate).format("DD/MM/YYYY");
                        
                      });
                   
                    //this.listflighttopreview = data.reviews.splice(0,6);
                    if(this.page ==1){
                      this._flightService.listTopReviews = {...data};
                      this.valueGlobal.flightAvgPoint = data.avgPoint.toFixed(1).replace(/\./g,',');
                      this.valueGlobal.flightNumOfReview = this.gf.convertNumberToString(data.total);
                      this.avgPoint = data.avgPoint.toFixed(1).replace(/\./g,',');
                      this.numOfReview = this.gf.convertNumberToString(data.total);
                      this.listflighttopreviewgroup = [];
                    }else{
                      let _reviews  = [...this._flightService.listTopReviews.reviews,...data.reviews];
                      this._flightService.listTopReviews = {...data};
                      this._flightService.listTopReviews.reviews = _reviews;
                    }
                    let _datareviews = [...data.reviews];
                    for (let index = 0; index < 34; index++) {
                      this.listflighttopreviewgroup.push({name: `group${index+1}`, listflighttopreview: _datareviews.splice(0,3)});
                      
                    }
                    
                    this.isloadmore = false;
                  }
                })
        }

        showReviewList(slide){
          if(slide && slide.replyMessage){
            this._flightService.itemReview = slide;
          }
            this.navCtrl.navigateForward('/flighttopreviewlist');
        }

        /**
         * Sự kiện loadmore khi scroll reviews
         * @param event biến event
         */
        onScrollReviews(event: any) {
          let scrolled = 0;
          let el: any = document.getElementsByClassName("div-content-review");
          if (el.length > 0) {
            scrolled = Math.round(el[0].scrollWidth - el[0].scrollLeft);
          }
          if (scrolled == el[0].offsetWidth || scrolled + 1 == el[0].offsetWidth) {
            setTimeout(() => {
              this.loadMoreReviews();
            }, 500);
          }
        }

        loadMoreReviews() {
          this.zone.run(() => {
              this.page = this.page + 1;
              this.isloadmore = true;
              this.loadDataFlightTopReviews();
          });
        }
       
}