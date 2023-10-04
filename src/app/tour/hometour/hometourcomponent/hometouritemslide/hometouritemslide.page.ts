import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform } from '@ionic/angular';
import { GlobalFunction } from '../../../../providers/globalfunction';
import $ from 'jquery';
import { C } from '../../../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import * as request from 'requestretry';
import { SearchHotel } from 'src/app/providers/book-service';
import { tourService } from 'src/app/providers/tourService';

@Component({
  selector: 'app-hometouritemslide',
  templateUrl: './hometouritemslide.page.html',
  styleUrls: ['./hometouritemslide.page.scss'],
})
export class HomeTourItemSlidePage implements OnInit {
  @Input() type:any;
  slideData = [];
  
  slidePopular = [];
  constructor(private navCtrl: NavController, public gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    public storage: Storage,
    private actionsheetCtrl: ActionSheetController,
    private platform: Platform,
    public searchhotel: SearchHotel,
    public tourService: tourService) {
      if(!this.tourService.DataTourGroupFutures){
        this.getTourGroupFutures();
      }else{
        this.loadDataTourGroupFutures();
      }
      
      if(!this.tourService.DataSlidePopular){
        this.getPopularLocation();
      }else{
        this.loadDataPopularLocation();
      }
      
  }

  ngOnInit(){

  }
  loadDataTourGroupFutures(){
    let se = this;
    se.slideData = se.tourService.DataTourGroupFutures;
    se.sortTourOrder(se.slideData, 'SortOrder').then(()=>{
      se.slideData.forEach(element => {
        if(element.TourGroupDetail && element.TourGroupDetail.length >0){
          element.groupListId = element.TourGroupDetail.map((item) => item.Id).join(',');
          
          let arrSplit = element.Link.split('/');
          if(arrSplit && arrSplit.length >0){
            element.tourTopicId = arrSplit[arrSplit.length-1].replace('c','');
          }else{
            element.tourTopicId = element.TourGroupDetail[0].TourTopicId;
          }
          se.sortTourOrder(element.TourGroupDetail, 'SortOrder').then(()=>{
            element.TourGroupDetail.forEach(group => {
              if(group.AvartarLink && group.AvartarLink.indexOf('http') == -1){
                group.AvartarLink = 'https:'+group.AvartarLink;
              }
              if(group.TopPlace) {
                group.listTopPlace = group.TopPlace.split(',');
              }
              if(group.AvgPoint && (group.AvgPoint.toString().length == 1 || group.AvgPoint == 10)){
                group.AvgPoint = group.AvgPoint + ".0";
              }

              if(this.tourService.listTopSale && this.tourService.listTopSale.length >0){
                let itemmap = this.tourService.listTopSale.filter((item) => item.Id == group.Id );
                if(itemmap && itemmap.length >0 && itemmap[0].TotalPax){
                  group.TopSale = itemmap[0].TotalPax;
                  element.hasTopSale = true;
                }
              }
              
            });
          });
          se.tourService.listTourTopic = se.slideData;
        }
      });
    })
  }

  getTourGroupFutures() {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/getTourGroupFutures';
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometouritemslide', 'getTourGroupFutures').then((data) => {
      let res = JSON.parse(data);
      se.slideData = res.Response;
      se.tourService.DataTourGroupFutures = res.Response;
      se.sortTourOrder(se.slideData, 'SortOrder').then(()=>{
        se.slideData.forEach(element => {
          if(element.TourGroupDetail && element.TourGroupDetail.length >0){
            element.groupListId = element.TourGroupDetail.map((item) => item.Id).join(',');
            
            let arrSplit = element.Link.split('/');
            if(arrSplit && arrSplit.length >0){
              element.tourTopicId = arrSplit[arrSplit.length-1].replace('c','');
            }else{
              element.tourTopicId = element.TourGroupDetail[0].TourTopicId;
            }
            se.sortTourOrder(element.TourGroupDetail, 'SortOrder').then(()=>{
              element.TourGroupDetail.forEach(group => {
                if(group.AvartarLink && group.AvartarLink.indexOf('http') == -1){
                  group.AvartarLink = 'https:'+group.AvartarLink;
                }
                if(group.TopPlace) {
                  group.listTopPlace = group.TopPlace.split(',');
                }
                if(group.AvgPoint && (group.AvgPoint.toString().length == 1 || group.AvgPoint == 10)){
                  group.AvgPoint = group.AvgPoint + ".0";
                }

                if(this.tourService.listTopSale && this.tourService.listTopSale.length >0){
                  let itemmap = this.tourService.listTopSale.filter((item) => item.Id == group.Id );
                  if(itemmap && itemmap.length >0 && itemmap[0].TotalPax){
                    group.TopSale = itemmap[0].TotalPax;
                    element.hasTopSale = true;
                  }
                }
                
              });
            });
            se.tourService.listTourTopic = se.slideData;
          }
        });
      })
     
    })
  }

  sortTourOrder(listsort, columnName) : Promise<any> {
    return new Promise((resolve, reject) => {
      let se = this;
      if (listsort && listsort.length > 0) {
        se.zone.run(() => listsort.sort(function (a, b) {
          return a[columnName] < b[columnName] ? -1 : 1;
        }));

        resolve(true);
      }
    })
  }

  loadDataPopularLocation(){
    let se = this;
    se.slidePopular = se.tourService.DataSlidePopular;
      se.slidePopular.forEach(slide => {
        if(slide.AvatarLink && slide.AvatarLink.indexOf('http') == -1){
          slide.AvatarLink = 'https:'+slide.AvatarLink;
        }
      });
  }

  getPopularLocation() {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/GetPopularLocation';
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometouritemslide', 'GetPopularLocation').then((data) => {
      let res = JSON.parse(data);
      se.slidePopular = res.Response;
      se.tourService.DataSlidePopular = res.Response;
      se.slidePopular.forEach(slide => {
        if(slide.AvatarLink && slide.AvatarLink.indexOf('http') == -1){
          slide.AvatarLink = 'https:'+slide.AvatarLink;
        }
      });
    })
  }

  /**
   * Sự kiện loadmore khi scroll topdeal
   * @param event biến event
   */
   onScroll(event: any,itemSlide, idx) {

  }
  doInfinite() {
    this.slideData = [...this.slideData];
  }

  showDetail(item){
    var se= this;
    se.tourService.tourDetailId = item.Id;
    se.tourService.backPage = 'hometour';
    se.navCtrl.navigateForward('/tourdetail');
  }

  showTourList(item){
    if(item && item.Id){
      this.tourService.itemShowList = item;
      this.navCtrl.navigateForward('/tourlist');
    }
  }
}
