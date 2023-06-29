import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { NavController, ModalController, ToastController, IonSlides, IonContent } from '@ionic/angular';
import { GlobalFunction } from '../../providers/globalfunction';
import $ from 'jquery';
import { C } from '../../providers/constants';
import { tourService } from '../../providers/tourService';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { SearchHotel } from 'src/app/providers/book-service';
import { HotelreviewsimagePage } from 'src/app/hotelreviewsimage/hotelreviewsimage';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { HotelreviewsvideoPage } from 'src/app/hotelreviewsvideo/hotelreviewsvideo';
import { ticketService } from '../../providers/ticketService';

@Component({
  selector: 'app-ticketdetail',
  templateUrl: './ticketdetail.page.html',
  styleUrls: ['./ticketdetail.page.scss'],
})

export class TicketDetailPage {
    @ViewChild('mySlider') slider: IonSlides;
    @ViewChild('slideTourTab') sliderTab: IonSlides;
    @ViewChild('headerScroll') headerScroll: IonContent;
    @ViewChild('scrollArea') scrollYArea: IonContent;
    slideOpts = {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 10,
        zoom: {
          toggle: false
        }
      };
        
    comboId = 1668;
    departureDate = "";
    coutslide: number = 1;
    listDepartureDate = [];
    listDepartureDatesdk = [1,2,3,4,5];
    tabTourRule: number=1;
  totalReview: any=0;
  AvgPoint: any=0;
  expanddivdepature = false;
  expanddivreview = false;
  loaddeparturedone: boolean;
  loadslidedone = false;
  youtubeId: any;
  listSlides: any =[];
  itemDetail:any;
  itemDetail1:any;
  experiencePackages: any;
  itemSlide:any;
  ticketReviews: any;
  isseemore: boolean = false;
  isseemorenotes: boolean = false;
  overview: any;
  notes: any;
 
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private storage: Storage,
        public tourService: tourService,
        public searchHotel: SearchHotel,
        private youtube: YoutubeVideoPlayer,
        private domSanitizer: DomSanitizer,
        public ticketService: ticketService) {
            this.loaddata();
           
        }
  private loaddata() {

      let url = C.urls.baseUrl.urlTicket + '/api/Detail/GetExperienceDetail/' + (this.ticketService.itemTicketDetail.experienceId || 1);
      let headers = {
        apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
        apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
      };
      this.gf.RequestApi('GET', url, headers, null, 'hometicketslide', 'getAllExperiences').then((data) => {
        let res = JSON.parse(data);
        this.ticketService.experience = res.data.experience;
        this.loadslidedone = true;
        this.AvgPoint = res.data.experience.avgPoint;
        this.totalReview = res.data.experience.numOfReview;

        this.itemDetail = res.data.experience;
        if (this.itemDetail.overview.length >= 1e3) {
          let $ =this.itemDetail.overview.trim().substr(0, 1e3).split(" ");
          $.pop(),
          $ = $.join(" ") + '...',
          this.overview  = $;
        }
        else{
          this.overview=this.itemDetail.overview;
        }
        if (this.itemDetail.notes)
        if (this.itemDetail.notes.length >= 2610) {
            let qn = this.itemDetail.notes.trim().substr(0, 2610).split(" ");
            var $;
            qn.pop(),
            qn = qn.join(" "),
            $ = this.isIncludeUnclosedElement(qn) ? ($ = qn.trim().substr(0, qn.lastIndexOf("<")).split(" ")).join(" ") + ' ...' : qn + ' ...',
            this.notes = $
        }else{
          this.notes =this.itemDetail.notes
        }
      
        this.experiencePackages = res.data.experiencePackages;
        // this.itemDetail.experienceImages = this.itemDetail.Image.split(', ');
        this.itemDetail.experienceImages.forEach(element => {
          if (element.imageLink.indexOf('http') == -1) {
            this.listSlides.push({ ImageUrl: 'https:' + element.imageLink });
          } else {
            this.listSlides.push({ ImageUrl: element.imageLink });
          }
        });
        let url = C.urls.baseUrl.urlTicket + '/api/Home/GetExperienceSameTopic/' + res.data.topic.id;
        let headers = {
          apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
          apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
        };
        this.gf.RequestApi('POST', url, headers, null, 'hometicketslide', 'GetExperienceSameTopic').then((data) => {
          let res = JSON.parse(data);
          this.itemSlide=[];
          if (res.data) {
            for (let i = 0; i < 3; i++) {
              const element = res.data[i];
              this.itemSlide.push(element);
            }
          }
         
          let url = C.urls.baseUrl.urlTicket + '/api/Detail/GetExperienceReviews?experienceCode=' + this.ticketService.itemTicketDetail.experienceId;
          let headers = {
          apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
          apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
          };
         this.gf.RequestApi('GET', url, headers, null, 'hometicketslide', 'GetExperienceSameTopic').then((data) => {
          let res = JSON.parse(data);
          this.ticketReviews = res.data.reviews;

        });

        });
        this.loaddeparturedone = true;

      });
    
  }
  isIncludeUnclosedElement($) {
    return !($.lastIndexOf("<") < $.lastIndexOf(">"))
  }
        ngOnInit() { 
          this.tourService.getObservableScrollToDepartureDiv().subscribe((data) => {
            if(data){
              this.changeItemHeader(3);
            }
          })
         
        }

        goback() {
          if(this.ticketService.backPage == 'hometicket'){
            this.navCtrl.pop();
            this.ticketService.backPage = '';
          }else{
            this.navCtrl.back();
            this.ticketService.backPage = '';
          }
          
        }

    /***
     * Next trên slide
     */
    slidechange() {
        this.slider.getActiveIndex().then(index => {
            this.coutslide = index + 1;
        });
    }

    getDayName(date) {
        let thu ='';
        thu = moment(date).format('dddd');
          switch (thu) {
            case "Monday":
              thu = "Thứ 2"
              break;
            case "Tuesday":
              thu = "Thứ 3"
              break;
            case "Wednesday":
              thu = "Thứ 4"
              break;
            case "Thursday":
              thu = "Thứ 5"
              break;
            case "Friday":
              thu = "Thứ 6"
              break;
            case "Saturday":
              thu = "Thứ 7"
              break;
            default:
              thu = "Chủ nhật"
              break;
          }
          return thu;
      }

      slidetabchange(){
        this.sliderTab.getActiveIndex().then(index => {
          this.tabTourRule = index+1;
        });
      }
    
      SelectTab(tabindex){
        this.zone.run(()=>{
          this.tabTourRule = tabindex;
          this.sliderTab.slideTo(tabindex-1);
        })
    }

    public scrollFunction = (event: any) => {
        try {
          let elheader = document.getElementsByClassName('cls-tourdetail-header');
          if (event.detail.currentY > 505) {
            elheader[0].classList.add('float-arrow-enabled');
            elheader[0].classList.remove('float-arrow-disabled');
            if (elheader[1]) {
              elheader[1].classList.add('float-arrow-enabled');
              elheader[1].classList.remove('float-arrow-disabled');
            }
          }
          else {
            elheader[0].classList.add('float-arrow-disabled');
            elheader[0].classList.remove('float-arrow-enabled');
            if (elheader[1]) {
              elheader[1].classList.add('float-arrow-disabled');
              elheader[1].classList.remove('float-arrow-enabled');
            }
          }
          let  elfooter = document.getElementsByClassName('div-tourdetail-footer');
          if (event.detail.currentY > 657 && event.detail.currentY < 1574) {
            elfooter[0].classList.add('float-arrow-disabled');
            elfooter[0].classList.remove('float-arrow-enabled');
            if (elfooter[1]) {
              elfooter[1].classList.add('float-arrow-disabled');
              elfooter[1].classList.remove('float-arrow-enabled');
            }
          }
          else {
            elfooter[0].classList.add('float-arrow-enabled');
            elfooter[0].classList.remove('float-arrow-disabled');
            if (elfooter[1]) {
              elfooter[1].classList.add('float-arrow-enabled');
              elfooter[1].classList.remove('float-arrow-disabled');
            }
          }
          // console.log(event.detail.currentY);
        } catch (error) {
          error.page = "hoteldetail";
          error.func = "scrollFunction";
          error.param = "";
          C.writeErrorLog(error, null);
        }
    
      }

      changeItemHeader(index) {
          var se = this;
          if(index) {
            $($('.item-tour-header')[index-1]).siblings().removeClass('item-header-actived');
            $($('.item-tour-header')[index-1]).addClass('item-header-actived');

             setTimeout(()=>{
              if(index != 7){
                document.getElementById('header'+index).scrollLeft = parseInt($("#header"+index)[0].offsetLeft.toString())
                $('#header'+index).animate({'scrollLeft': $('#header'+index).position().left + 220}, 500);
                //this.scrollYArea.scrollToPoint(0, $('#content'+index).position().top +50, 350);
                if($('#content'+index) && $('#content'+index).length >0){
                  document.getElementById('content'+index).scrollIntoView({ behavior: 'smooth', block: 'center'  });
                }
                
              }else{
                this.scrollToTopGroupReview(1)
              }
              
                if($('.div-item').hasClass('scroll-horizontal')){
                  this.changeStyleHeader();
                }
            },50)
          }
      }

      changeStyleHeader(){
        let se = this;
        if($('.div-item').hasClass('scroll-horizontal')){
          $('.div-item').removeClass('scroll-horizontal');
          //$('.item-tour-header').removeClass('item-scroll-horizontal');
        }else{
          $('.div-item').addClass('scroll-horizontal');
          //$('.item-tour-header').addClass('item-scroll-horizontal');
        }
      }

   

      async imgreview(arrimgreview, indeximgreview,CustomerName,DateStayed) {
        this.searchHotel.arrimgreview = arrimgreview;
        this.searchHotel.indexreviewimg = indeximgreview;
        this.searchHotel.cusnamereview = CustomerName;
        this.searchHotel.datereview = DateStayed;
        this.searchHotel.openFromTopReviewList = false;
        const modal: HTMLIonModalElement =
          await this.modalCtrl.create({
            component: HotelreviewsimagePage,
          });
        modal.present();
      }

      expandDeparture(value){
        if(value ==1){
          var divCollapse = $('.div-wrap-departure.div-collapse');
          if(divCollapse && divCollapse.length >0){
            divCollapse.removeClass('div-collapse').addClass('div-expand');
          }
          this.expanddivdepature = true;
          //this.scrollToTopGroup(1);
        }else{
          var divCollapse = $('.div-wrap-departure.div-expand');
          if(divCollapse && divCollapse.length >0){
            divCollapse.removeClass('div-expand').addClass('div-collapse');
          }

          this.expanddivdepature = false;
          this.scrollToTopGroup(2);
        }
        
      }

      expandReview(value){
        if(value ==1){
          var divCollapse = $('.div-item-review.div-collapse');
          if(divCollapse && divCollapse.length >0){
            divCollapse.removeClass('div-collapse').addClass('div-expand');
          }
          this.expanddivreview = true;
          this.scrollToTopGroupReview(1);
        }else{
          var divCollapse = $('.div-item-review.div-expand');
          if(divCollapse && divCollapse.length >0){
            divCollapse.removeClass('div-expand').addClass('div-collapse');
          }

          this.expanddivreview = false;
          this.scrollToTopGroupReview(2);
        }
      }


      scrollToTopGroup(value){
        //scroll to top of group
        setTimeout(()=>{
          var objHeight = value == 2 ? $('.div-departure') : $('.div-wrap-departure').last();
          if(objHeight && objHeight.length >0){
            var h = 0;
            h = value == 2 ? objHeight[0].offsetTop - 150 : objHeight[0].offsetTop - 50;
            if(this.scrollYArea){
              this.scrollYArea.scrollToPoint(0,h,500);
            }
            
          }
        },100)
      }

      scrollToTopGroupReview(value){
        //scroll to top of group
        setTimeout(()=>{
          var objHeight =  $('.div-review');
          if(objHeight && objHeight.length >0){
            var h = 0;
            h = value == 2 ? objHeight[0].offsetTop - 200 : objHeight[0].offsetTop - 50;
            if(this.scrollYArea){
              this.scrollYArea.scrollToPoint(0,h,500);
            }
            
          }
        },100)
      }

      scrollToPrice(value){
        //scroll to top of group
        setTimeout(()=>{
          var objHeight =  $('.text-headservice');
          if(objHeight && objHeight.length >0){
            var h = 0;
            h = value == 2 ? objHeight[0].offsetTop - 200 : objHeight[0].offsetTop - 50;
            if(this.scrollYArea){
              this.scrollYArea.scrollToPoint(0,h,657);
            }
            
          }
        },100)
      }
      ionViewWillEnter(){
        this.departureDate = moment(this.searchHotel.CheckInDate).format('DD/MM/YYYY');
        this.hidetopbar();
      }

      hidetopbar(){
        var se = this;
        let el = document.getElementsByClassName('div-statusbar-float');
          el[0].classList.remove('float-statusbar-enabled');
          el[0].classList.add('float-statusbar-disabled');
      }

      async showSlideImage(idx) {
        if(!this.listSlides || this.listSlides.length <2){
          return;
        }
        this.searchHotel.arrimgreview = this.listSlides;
        this.searchHotel.indexreviewimg = idx;
        this.searchHotel.cusnamereview = '';
        this.searchHotel.datereview = '';
        this.searchHotel.tourDetailName = this.itemDetail.name;
        this.searchHotel.openFromTopReviewList = false;
        const modal: HTMLIonModalElement =
          await this.modalCtrl.create({
            component: HotelreviewsimagePage,
          });
        modal.present();
     }
     async showFullScreen(){
      this.searchHotel.tourDetailName = this.itemDetail.Name;
      this.searchHotel.trustedVideoUrl = this.itemDetail.trustedVideoUrl;
      const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: HotelreviewsvideoPage,
      });
    modal.present();
     }

     showTicketServices(itemService){
        if(itemService){
          this.ticketService.itemTicketService = itemService;
          this.navCtrl.navigateForward('/ticketservice');
        }
     }

     showTicketServiceDetail(itemService) {
      if(itemService){
        this.ticketService.itemTicketService = itemService;
        this.navCtrl.navigateForward('/ticketservicedetail');
      }
     }
     showDetail(item){
      var se= this;
      this.ticketService.itemTicketDetail.experienceId = item.experienceId;
      se.ticketService.backPage = 'hometicket';
      se.itemDetail = {};
      se.itemDetail.name = item.experienceName;
      if(this.ticketService.itemTicketDetail.experienceId){
        this.loaddata();
      }
    }
    seemore(){
      this.isseemore=true;
    }
    seemorenotes(){
      this.isseemorenotes=true;
    }
    }