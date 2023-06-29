import { Component, NgZone, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { Storage } from '@ionic/storage';
import { ValueGlobal, SearchHotel } from '../providers/book-service';
import {flightService} from '../providers/flightService';
import { tourService } from '../providers/tourService';
import { C } from '../providers/constants';
import * as moment from 'moment';
import { HotelreviewsimagePage } from '../hotelreviewsimage/hotelreviewsimage';


@Component({
  selector: 'app-flighttopreviewlist',
  templateUrl: './flighttopreviewlist.page.html',
  styleUrls: ['./flighttopreviewlist.page.scss'],
})

export class FlightTopReviewListPage implements OnInit {
  currentVersion: string;
  avgPoint: any;
  numOfReview: any;
  listflighttopreview: any=[];
  page: any=1;
  pageSize: any=20;
  numOfReviewRemain: number;
  listImages=[];
  
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        public storage: Storage,
        public valueGlobal: ValueGlobal,
        public searchhotel: SearchHotel,
        public _flightService: flightService,
        public tourService: tourService,
        private zone: NgZone,
        public searchHotel: SearchHotel,
        private modalCtrl: ModalController) { 
         this.loadDataFlightTopReviews();
              this.loadImageTopReviews();
        }

        ionViewWillEnter(){
          this._flightService.typeFlightUsefulShow = 2;
        }

        ngOnInit(){
            var se = this;
        }

        close(){
          this._flightService.typeFlightUsefulShow = 1;
            this.navCtrl.back();
        }
        
        loadDataFlightTopReviews(){
          let url = C.urls.baseUrl.urlFlight + `gate/apiv1/GetReviewFlights?pageIndex=${this.page}&pageSize=${this.pageSize}`;
          this.gf.RequestApi("GET", url, {
              "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
              'Content-Type': 'application/json; charset=utf-8'
              }, {}, "homeflight", "GetSlideHome").then((data) =>{
                if(data && data.reviews){
                    data.reviews.forEach(element => {
                      element.reviewDateDisplay = moment(element.reviewDate).format("DD/MM/YYYY");
                      
                    });
                    // this.zone.run(() => data.reviews.sort(function (a, b) {
                    //   return a.bestFeature ? -1 : (b.bestFeature ? -1 : 1);
                    // }))

                  this.valueGlobal.flightAvgPoint = data.avgPoint.toFixed(1);
                  this.avgPoint = data.avgPoint.toFixed(1);
                  this.numOfReview = data.total;
                  if(this.listflighttopreview && this.listflighttopreview.length ==0){
                    this.listflighttopreview = data.reviews;
                  }else{
                    this.listflighttopreview = [...this.listflighttopreview,...data.reviews];
                  }

                  this.numOfReviewRemain = this.numOfReview - this.listflighttopreview.length;
                  this.gf.hideLoading();
                }
              })
      }

      loadImageTopReviews(){
        let url = C.urls.baseUrl.urlFlight + `gate/apiv1/GetReviewFlights?pageIndex=${this.page}&pageSize=1000`;
        this.gf.RequestApi("GET", url, {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
            }, {}, "homeflight", "GetSlideHome").then((data) =>{
              if(data && data.reviews && data.reviews.length >0){
                  let _images = data.reviews.map(r => 
                    { 
                      let arr = [];
                  
                      return r.images && r.images.length >0 ? r.images : [];
                    }
                    )

                if(_images && _images.length >0){
                  this.listImages = Array.prototype.concat.apply([], _images);
                }
                
               console.log(this.listImages);
              }
            })
    }
      showMoreReview(){
        this.page +=1;
        this.gf.showLoading();
        this.loadDataFlightTopReviews();
      }

      async imgreview(arrimgreview, indeximgreview,CustomerName,DateStayed,type) {
        //if(arrimgreview && arrimgreview.length >4){
          this.searchHotel.arrimgreview = arrimgreview;
          this.searchHotel.indexreviewimg = indeximgreview;
          this.searchHotel.openFromTopReviewList = true;
          if(type==1){
            this.searchHotel.reviewName = CustomerName;
            this.searchHotel.cusnamereview = '';
            this.searchHotel.datereview = '';
          }else {
            this.searchHotel.cusnamereview = CustomerName;
            this.searchHotel.datereview = DateStayed;
            this.searchHotel.reviewName = '';
          }
          const modal: HTMLIonModalElement =
            await this.modalCtrl.create({
              component: HotelreviewsimagePage,
            });
          modal.present();
        //}
       
      }
        
}