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
  itemDetail1:any = {
    Name: 'Vé VinWonder Phú Quốc',
    AvgPoint: 9.1,
    totalReview: 54,
    TopSale: 8,
    TitleOverview: 'Điểm nổi bật',
    Overview: `Khám phá VinWonders Phú Quốc, công viên giải trí hiện đại, lớn nhất Việt Nam với hơn 100 trò chơi hấp dẫn và các màn trình diễn đặc sắc
    Thiên đường công viên nước hàng đầu với 2 đường trượt nước và bể tạo sóng khổng lồ mang đến những trải nghiệm khác biệt... 
    `,
    PackageServices: [
      {
        Name: 'Vé vào cổng: VinWonders',
        Description: 'Vé vào cổng Vinwonders + Xe bus theo lịch cố định + Tặng voucher ẩm thực',
        Price: 800000,
        PriceShow: '800.000',
        PriceAdultAvg: 800000,
        PriceChildAvg: 400000,
        AllotmentDateDisplay: '09 - 02 - 2023',
        Includes: `
        <span class="header-title">Bao gồm</span><br>
        - Vào cửa các điểm tham quan<br>
        - Trung chuyển khứ hồi từ VinWonders Phú Quốc đến các trạm bus. Xe buýt là dịch vụ miễn phí được cung cấp bởi Vinpearl và chỉ đón theo giờ và địa điểm trong <br>
        - Tặng voucher ẩm thực khi mua vé vào cửa tiêu chuẩn Vinwonders,áp dụng từ 07/01/2022 đến 31/03/2022 (giá trị voucher: 200.000 VND/ Người lớn, 100.000 VND/Trẻ em hoặc Người cao tuổi).Lưu ý : Không áp dụng tặng voucher ẩm thực từ ngày 01/02/2022 đến 06/02/2022. Vui lòng đổi voucher ẩm thực tại cổng Vinwonders.<br>
        <span class="header-title">Không bao gồm</span><br>
        - Chi phí cá nhân khác<br>
        <span class="header-title">Điều kiện</span><br>
        -  Trẻ em có chiều cao từ 99cm trở xuống có thể vào miễn phí<br>`,
        Policies:
        `
        <span class="header-title">Xác nhận</span><br>
        - Xác nhận ngay tức thời. Nếu bạn không nhận được email xác nhận đơn hàng, hãy liên hệ với chúng tôi<br>
        <span class="header-title">Chính sách huỷ</span><br>
        - Sẽ không được hoàn tiền trong trường hợp khách không gửi yêu cầu hoàn tiền trước giờ đóng cửa vào ngày đã chọn<br>
        - Không thể đổi ngày sử dụng sau khi đã mua<br>
        - Bạn sẽ được hoàn tiền đầy đủ khi huỷ ít nhất 24 giờ trước khi voucher được sử dụng<br>
        `,
        UserGuide:
        `
        <span class="header-title">Thời hạn sử dụng</span><br>
        -  Voucher chỉ có giá trị trong ngày giờ được chỉ định<br>
        - Sử dụng voucher vào ngày đã chọn<br>
        <span class="header-title">Giờ hoạt động</span><br>
        - VinWonders Phú Quốc<br>
        - Thứ Hai-Chủ Nhật: 09:00-19:30<br>
        - Lượt vào cổng cuối: 1 giờ trước giờ đóng cửa<br>
        - Nhớ lấy hướng dẫn tham quan và lịch trình diễn tại VinWonders Phú Quốc ở cổng vào hoặc tham khảo<br>
        <span class="header-title">Lịch biểu diễn</span><br>
        - Once<br>
        - Thời lượng: 20 phút<br>
        - Thứ Hai-Chủ Nhật: 19:00<br>
        <span class="header-title">Mô tả các loại voucher</span><br>
        - Xuất trình voucher in sẵn hoặc voucher trên điện thoại<br>
        - Voucher sẽ được gửi qua email hay bạn có thể tìm thấy voucher tại mục "Đơn hàng" trên ứng dụng Klook của bạn<br>
        <span class="header-title">Cách đổi</span><br>
        - Xuất trình voucher của bạn và đổi lấy vé cứng<br>
        - Đối với vé người cao tuổi, vui lòng xuất trình CMND bản gốc hoặc hộ chiếu cùng với voucher cho nhân viên tại quầy vé.<br>
        `,
        Image: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-safari-phu-quoc-29--800x450.jpg'
      },
      {
        Name: 'Combo 1: VinWonders + Safari',
        Description: 'Vé vào cổng Vinwonders + Xe bus theo lịch cố định + Tặng voucher ẩm thực',
        Price: 1200000,
        PriceShow: '1.200.000',
        PriceAdultAvg: 1200000,
        PriceChildAvg: 600000,
        AllotmentDateDisplay: '09 - 02 - 2023'
      },
      {
        Name: 'Combo 2: VinWonders + Bảo tàng gấu',
        Description: 'Vé vào cổng Vinwonders + Xe bus theo lịch cố định + Tặng voucher ẩm thực',
        Price: 1200000,
        PriceShow: '1.200.000',
        PriceAdultAvg: 1200000,
        PriceChildAvg: 600000,
        AllotmentDateDisplay: '09 - 02 - 2023'
      },
      {
        Name: 'Combo 1: VinWonders + Safari + Sunworld Hòn Thơm',
        Description: 'Vé vào cổng Vinwonders + Xe bus theo lịch cố định + Tặng voucher ẩm thực',
        Price: 1630000,
        PriceShow: '1.630.000',
        PriceAdultAvg: 1630000,
        PriceChildAvg: 815000,
        AllotmentDateDisplay: '09 - 02 - 2023'
      },
    ],
    ImagesSlide: [
      'https://cdn2.ivivu.com/2021/05/19/14/ivivu-hon-gam-ghi-phu-quoc-450x265.gif',
      'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-safari-phu-quoc-29--800x450.jpg',
      'https://cdn2.ivivu.com/2020/02/17/16/ivivu-safari-phu-quoc.gif',
      'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-land-phu-quoc-lazy-river-800x450.jpg',

    ]
  };
  tourReviews:any = [
    {
      ReviewPoint: 10,
      CustomerName: 'Tam Sinh Tam Thế',
      DateStayed: '05-05-2022',
      BestFeature: 'Giá Tour đúng với chất lượng chuyến đi. Rất thích. Sẽ ủng hộ iVIVU'
    },
    {
      ReviewPoint: 9.5,
      CustomerName: 'Tiểu Mị',
      DateStayed: '04-05-2022',
      BestFeature: 'Hướng dẫn viên rất tốt nhưng em rất tiếc. Đồ ăn ngon, phòng ở đẹp, ngồi máy bay lâu nên hơi mệt.'
    },
    {
      ReviewPoint: 9.2,
      CustomerName: 'Bích Dao',
      DateStayed: '01-05-2022',
      BestFeature: 'Trải nghiệm tuyệt vời'
    },
  ];

  itemSlide = [
    {
        AvartarLink: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-land-phu-quoc-lazy-river-800x450.jpg',
        PromotionTitle: 'Vé bán chạy',
        Name: 'Vé VinWonders Nha Trang',
        AvgPoint: 9.1,
        NumOfReview: 54,
        MinPrice: 350000,
        Notes: [
            { Description: '• Hoàn hủy miễn phí 24h'},
            { Description: '• Xác nhận tức thời'},
            { Description: '• Miễn phí trẻ em cao dưới 99cm'}
        ]
    },
    {
        AvartarLink: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-safari-phu-quoc-29--800x450.jpg',
        PromotionTitle: 'Vé bán chạy',
        Name: 'Vé VinWonders Phú Quốc',
        AvgPoint: 9.2,
        NumOfReview: 109,
        MinPrice: 300000,
        Notes: [
            { Description: '• Hoàn hủy miễn phí 24h'},
            { Description: '• Xác nhận tức thời'},
            { Description: '• Miễn phí trẻ em cao dưới 99cm'}
        ]
    },
    {
        AvartarLink: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-safari-phu-quoc-29--800x450.jpg',
        PromotionTitle: 'Vé bán chạy',
        Name: 'Vé VinWonders Hội An',
        AvgPoint: 9.4,
        NumOfReview: 68,
        MinPrice: 250000,
        Notes: [
            { Description: '• Hoàn hủy miễn phí 24h'},
            { Description: '• Xác nhận tức thời'},
            { Description: '• Miễn phí trẻ em cao dưới 99cm'}
        ]
    },
];
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private storage: Storage,
        public tourService: tourService,
        public searchHotel: SearchHotel,
        private youtube: YoutubeVideoPlayer,
        private domSanitizer: DomSanitizer,
        public ticketService: ticketService,) {
            if(ticketService.itemTicketDetail){
              let url = C.urls.baseUrl.urlTicket+'/api/Detail/GetExperienceDetail/'+(ticketService.itemTicketDetail.id ||1);
              let headers = {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
              };
              this.gf.RequestApi('GET', url, headers, null, 'hometicketslide', 'getAllExperiences').then((data) => {
                let res = JSON.parse(data);
                console.log(res.data);

                this.loadslidedone = true;
                this.AvgPoint = res.data.experience.avgPoint;
                this.totalReview = res.data.experience.numOfReview;

                this.itemDetail = res.data.experience;
                this.itemDetail.TitleOverview = this.itemDetail1.TitleOverview;
                this.itemDetail.Overview = this.itemDetail1.Overview;
                this.itemDetail.experiencePackages = this.itemDetail1.PackageServices;
                this.itemDetail.ImagesSlide = [res.data.experience.avartarLink,...this.itemDetail1.ImagesSlide];
                this.itemDetail.TopSale = this.itemDetail1.TopSale;

              })
            }
           
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
            this.navCtrl.navigateBack('/tourlist');
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

      showDepartureCalendar (itemdeparture){
        if(!this.loaddeparturedone){
          this.gf.showToastWarning('Đang tải dữ liệu, vui lòng chờ trong giây lát!');
          return;
        }
        if(itemdeparture){
          this.tourService.itemDepartureCalendar = itemdeparture;
          this.tourService.hasDeparture = true;
        }
        if(!this.tourService.departuresItemList || this.tourService.departuresItemList.length == 0){
          return;
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
        this.searchHotel.tourDetailName = this.itemDetail.Name;
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
    }