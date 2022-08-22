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

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.page.html',
  styleUrls: ['./tourdetail.page.scss'],
})

export class TourDetailPage {
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
      itemDetail:any;
        
    comboId = 1668;
    departureDate = "";
    coutslide: number = 1;
    listDepartureDate = [];
    listDepartureDatesdk = [1,2,3,4,5];
    tabTourRule: number=1;
  totalReview: any=0;
  AvgPoint: any=0;
  tourReviews: any=[];
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private storage: Storage,
        public tourService: tourService,
        public searchHotel: SearchHotel) {
            if(tourService.tourDetailId){
              let headers = {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
              };
              this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile+'/tour/api/TourApi/GetTourById?id='+tourService.tourDetailId, headers, {}, 'tourDetail', 'init').then((data)=>{
                if(data && data.Status == "Success" && data.Response){
                  this.itemDetail = data.Response;
                  if(this.itemDetail && this.itemDetail.Image){
                    
                    this.itemDetail.ImagesSlide = this.itemDetail.Image.split(', ');
                    let countstring = this.itemDetail.ProgramContent.match(/cdn2/g || []).length;
                    for (let index = 0; index < countstring; index++) {
                      this.itemDetail.ProgramContent = this.itemDetail.ProgramContent.replace('src="//cdn2','src="https://cdn2');
                    }

                    this.gf.RequestApiWithQueryString('GET', `https://www.ivivu.com/hotelrequest/morereviews?hotelSlug=${this.itemDetail.Code}&total=100&offset=0&mode=2&timespan=${new Date().getTime()}`, headers,{}, 'tourDetail', 'morereviews').then((data)=>{
                      if(data && data.reviews){
                        
                        if(data.reviews && data.reviews.length >0){
                          this.totalReview = data.loaded;
                          this.AvgPoint = (data.reviews.reduce((total,b) => {return total+ (b.ReviewPoint*1 || 0); },0)/data.loaded).toFixed(1);
                          this.tourReviews = data.reviews;
                        }
                      }
                    })
                  }
                }
              })
              this.gf.RequestApiWithQueryString('GET', C.urls.baseUrl.urlMobile+'/tour/api/TourApi/GetMercuriusPriceByTourIds', headers,{TourIds: tourService.tourDetailId, date: moment(this.searchHotel.CheckInDate).format('YYYY-MM-DD')}, 'tourDetail', 'GetMercuriusPriceByTourIds').then((data)=>{
                if(data && data.Status == "Success" && data.Response && data.Response != []){
                    let itemDefault =  data.Response[0];
                    if(itemDefault && itemDefault.Contract){
                      this.gf.RequestApiWithQueryString('GET', C.urls.baseUrl.urlMobile+'/tour/api/TourApi/GetMercuriusTourDetail', headers,{TourId: tourService.tourDetailId, date: moment(itemDefault.Contract[0].AllotmentDate).format('YYYY-MM-DD'), DefaultAdultForRate: itemDefault.DefaultAdultForRate }, 'tourDetail', 'GetMercuriusTourDetail').then((data1)=>{
                        if(data1 && data1.Status == "Success" && data1.Response && data1.Response.TourRate){
                       
                          if(data1.Response.StrListDepartures){
                            this.gf.RequestApiWithQueryString('GET', C.urls.baseUrl.urlMobile+'/tour/api/TourApi/MercuriusTourDeparture', headers, {TourId: tourService.tourDetailId,DepartureTime: data1.Response.StrListDepartures},'tourDetail','MercuriusTourDeparture').then((data2)=>{
                              if(data2 && data2.Status == 'Success'){
                                let lstDepartures = JSON.parse(data2.Response);
                                console.log(lstDepartures);

                                lstDepartures.forEach(element => {
                                  let _item = {
                                    AllotmentDateStr: `${this.getDayName(element.AllotmentDate)}, ${moment(element.AllotmentDate).format('DD/MM/YYYY')}`,
                                    PriceAdultAvgStr: this.gf.convertNumberToString(element.PriceAdultAvg),
                                    PriceChildAvgStr: element.PriceChildAvg ? this.gf.convertNumberToString(element.PriceChildAvg) : 0,
                                    IsMinPrice: Math.min(...lstDepartures.map(o => o.PriceAdultAvg)) == element.PriceAdultAvg && Math.min(...lstDepartures.map(o => o.PriceAdultAvg)) != Math.max(...lstDepartures.map(o => o.PriceAdultAvg)),
                                    AllotmentDateDisplay: moment(element.AllotmentDate).format('DD-MM-YYYY'),
                                    PriceAdultAvg: element.PriceAdultAvg,
                                    PriceChildAvg: element.PriceChildAvg || 0,
                                    DepartureDate: moment(element.AllotmentDate).format('YYYY-MM-DD')
                                  }
                                  this.listDepartureDate.push(_item);
                                });
                                this.tourService.departures = this.listDepartureDate.map(o => o.DepartureDate);
                                this.tourService.departuresItemList = this.listDepartureDate;

                                let itemdeparturemap = this.listDepartureDate.filter((itemd) => {return moment(itemd.DepartureDate).format('DD/MM/YYYY') == moment(this.searchHotel.CheckInDate).format('DD/MM/YYYY') });
                                if(itemdeparturemap && itemdeparturemap.length >0){
                                  this.departureDate = moment(this.searchHotel.CheckInDate).format('DD/MM/YYYY');
                                  this.tourService.DepartureDate = itemdeparturemap[0].DepartureDate;
                                  this.tourService.itemDepartureCalendar = itemdeparturemap[0];
                                }else{
                                  this.departureDate = moment(data1.Response.TourRate.AllotmentDate).format('DD/MM/YYYY');
                                  this.tourService.DepartureDate = this.listDepartureDate[0].DepartureDate;
                                  this.tourService.itemDepartureCalendar = this.listDepartureDate[0];
                                }
                              } else {
                                
                              }
                            })
                          }
                          
                          
                          
                         
                        }
                      })
                    }
                    
                  }else{
                    
                  }
                })

                
            }
           
        }
        ngOnInit() { }

        goback() {
          if(this.tourService.backPage == 'hometour'){
            this.navCtrl.pop();
            this.tourService.backPage = '';
          }else{
            this.navCtrl.navigateBack('/tourlist');
            this.tourService.backPage = '';
          }
          
        }
    getCalendarDeparture(comboId) {
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
              var text = "Bearer " + auth_token;
              var options = {
                method: 'POST',
                url:  C.urls.baseUrl.urlGet+'/du-lich/Ajax/loadCalendarDeparture',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                form: {"Tourid": comboId,"DepartureTime": this.departureDate},
                json: true,
                headers:
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
              };
        
              request(options, function (error, response, body) {
                if (response.statusCode != 200) {
                  var objError = {
                    page: "tourdetail",
                    func: "getCalendarDeparture",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                  };
                  C.writeErrorLog(objError, response);
                }
                if (error) {
                  error.page = "tourdetail";
                  error.func = "getCalendarDeparture";
                  error.param = JSON.stringify(options);
                  C.writeErrorLog(error, response);
                };
                let result = JSON.parse(body);
                console.log(result);
            });
            }
        })
        
        
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
            //   for (let index = 0; index < $('.item-tour-header').length; index++) {
            //       const element = $('.item-tour-header')[index];
            //       $(element).removeClass('item-header-actived');
            //   }
            $($('.item-tour-header')[index-1]).siblings().removeClass('item-header-actived');
            $($('.item-tour-header')[index-1]).addClass('item-header-actived');

             setTimeout(()=>{
                // $('html, body')[0].animate({
                //     scrollLeft: parseInt($("#header"+index)[0].offsetLeft.toString())
                // }, 500);

                document.getElementById('header'+index).scrollLeft = parseInt($("#header"+index)[0].offsetLeft.toString())
                $('#header'+index).animate({'scrollLeft': $('#header'+index).position().left + 120}, 500);
                //this.scrollYArea.scrollToPoint(0, $('#content'+index).position().top +50, 350);
                if($('#content'+index) && $('#content'+index).length >0){
                  $('.div-tourdetail-content').animate({ scrollTop : $('#content'+index).position().top +50 }, 350);
                  document.getElementById('content'+index).scrollIntoView({ behavior: 'smooth' });
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

      showDepartureCalendar (itemdeparture){
        if(!this.tourService.itemDepartureCalendar){
          this.gf.showToastWarning('Đang tải dữ liệu, vui lòng chờ trong giây lát!');
          return;
        }
        if(itemdeparture){
          this.tourService.itemDepartureCalendar = itemdeparture;
          this.tourService.hasDeparture = true;
        }
        
        this.tourService.itemDetail = this.itemDetail;
        this.navCtrl.navigateForward('/tourdeparturecalendar');
      }

      async imgreview(arrimgreview, indeximgreview,CustomerName,DateStayed) {
        this.searchHotel.arrimgreview = arrimgreview;
        this.searchHotel.indexreviewimg = indeximgreview;
        this.searchHotel.cusnamereview = CustomerName;
        this.searchHotel.datereview = DateStayed;
        const modal: HTMLIonModalElement =
          await this.modalCtrl.create({
            component: HotelreviewsimagePage,
          });
        modal.present();
      }
      
    }