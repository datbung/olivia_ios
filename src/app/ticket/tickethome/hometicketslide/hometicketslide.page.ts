import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform } from '@ionic/angular';
import { GlobalFunction } from '../../../providers/globalfunction';
import $ from 'jquery';
import { C } from '../../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import * as request from 'requestretry';
import { SearchHotel } from 'src/app/providers/book-service';
import { ticketService } from 'src/app/providers/ticketService';

@Component({
  selector: 'app-hometicketslide',
  templateUrl: './hometicketslide.page.html',
  styleUrls: ['./hometicketslide.page.scss'],
})
export class HomeTicketSlidePage implements OnInit {
  @Input() type:any;
  slideData = [];
  slidePopular : any;
  slidePopularVN: any;
  constructor(private navCtrl: NavController, private gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    public storage: Storage,
    private actionsheetCtrl: ActionSheetController,
    private platform: Platform,
    public searchhotel: SearchHotel,
    public ticketService: ticketService) {
      this.getAllExperiences();
      this.getPopularLocationVN();
      this.getPopularLocation();
  }

  ngOnInit(){
    this.ticketService.itemTicketTopic='';
  }

  getAllExperiences() {
    let se = this;
    let url = C.urls.baseUrl.urlTicket+'/api/Home/GetAllExperiences';
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometicketslide', 'getAllExperiences').then((data) => {
      let res = JSON.parse(data);
      se.slideData = res.data;
      for (let index = 0; index < se.slideData.length; index++) {
        for (let j = 0; j < se.slideData[index].experienceHomeModels.length; j++) {
          const elementVVC = se.slideData[index].experienceHomeModels[j];
          if(elementVVC.avgPoint && (elementVVC.avgPoint == 10  || elementVVC.avgPoint == 6  || elementVVC.avgPoint == 9  || elementVVC.avgPoint == 8  || elementVVC.avgPoint == 7)){
            elementVVC.avgPoint = elementVVC.avgPoint + ".0";
          }
        }
      }
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

  getPopularLocationVN() {
    let se = this;
    let url = C.urls.baseUrl.urlTicket+'/api/Home/GetRecommendDestination?position=2&vertical=4';
    let headers = {
      // apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      // apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometicketitemslide', 'GetRecommendDestination').then((data) => {
      let res = JSON.parse(data);
      se.slidePopularVN = res.data;

      if(se.slidePopularVN.vertical && se.slidePopularVN.vertical.avatarLink.indexOf('http') == -1){
          se.slidePopularVN.vertical[0].avatarLink = 'https:'+se.slidePopularVN.vertical[0].avatarLink;
      }

      se.slidePopularVN.horizontals.forEach(slide => {
        if(slide.avatarLink && slide.avatarLink.indexOf('http') == -1){
          slide.avatarLink = 'https:'+slide.avatarLink;
        }
      });
    })
  }
  getPopularLocation() {
    let se = this;
    let url = C.urls.baseUrl.urlTicket+'/api/Home/GetRecommendDestination?position=3&vertical=3';
    let headers = {
      // apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      // apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometicketitemslide', 'GetRecommendDestination').then((data) => {
      let res = JSON.parse(data);
      se.slidePopular = res.data;

      if(se.slidePopular.vertical && se.slidePopular.vertical.avatarLink.indexOf('http') == -1){
          se.slidePopular.vertical[0].avatarLink = 'https:'+se.slidePopular.vertical[0].avatarLink;
      }

      se.slidePopular.horizontals.forEach(slide => {
        if(slide.avatarLink && slide.avatarLink.indexOf('http') == -1){
          slide.avatarLink = 'https:'+slide.avatarLink;
        }
      });
    })
  }
  /**
   * Sự kiện loadmore khi scroll topdeal
   * @param event biến event
   */
   onScroll(event: any) {
    let scrolled = 0;
    let el: any = document.getElementsByClassName('slide2-scroll');
    if (el.length > 0) {
      scrolled = Math.round(el[0].scrollWidth - el[0].scrollLeft);
    }
    if (scrolled == el[0].offsetWidth || scrolled + 1 == el[0].offsetWidth) {
      setTimeout(() => {
        this.doInfinite();
      }, 500)
    }

  }
  doInfinite() {
    this.slideData = [...this.slideData];
  }

  showDetail(item){
    var se= this;
    se.ticketService.itemTicketDetail = item;
    se.ticketService.backPage = 'hometicket';
    se.navCtrl.navigateForward('/ticketdetail');
  }

  showTicketList(item){
    if(item){
      this.ticketService.itemTicketTopic = item;
      this.ticketService.searchType = 3;
      this.ticketService.isFilter = false;
      this.ticketService.typeFilters = [];
      this.ticketService.regionFilters = [];
      this.ticketService.topicfilters = [];
      this.ticketService.topicfilters.push(item.topicId);
      this.ticketService.inputText = "";
      this.ticketService.itemSearchTicket.emit(0);
      this.navCtrl.navigateForward('/ticketlist/0');
    }
  }
  showRegionList(item,stt){
    if(item){
      this.ticketService.itemTicketTopic = "";
      this.ticketService.itemShowList = item;
      this.ticketService.searchType = 2;
      this.ticketService.isFilter = false;
      this.ticketService.typeFilters = [];
      this.ticketService.regionFilters = [];
      this.ticketService.topicfilters = [];
      this.ticketService.inputText = "";
      if (stt==1) {
        this.getdata();
      }else{
        this.ticketService.regionFilters.push(item.id);
        this.navCtrl.navigateForward('/ticketlist/1');
      }
    }
  }
  getdata() {
    let url = C.urls.baseUrl.urlTicket + '/api/Category/GetInitsearchModel';
    this.gf.RequestApi('GET', url, null, null, 'hometicketslide', 'GetInitsearchModel').then((data) => {
      let res = JSON.parse(data);
      var objregion = res.data.regions.filter(item => item.id === this.ticketService.itemShowList.id);
      this.ticketService.regionFilters = [];
      objregion[0].childs.forEach(element => {
        this.ticketService.regionFilters.push(element.id);
      });
      this.navCtrl.navigateForward('/ticketlist/1');
    })
  }
}
