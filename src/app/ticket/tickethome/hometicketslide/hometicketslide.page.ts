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
  slideData = [
    {
        Name: 'Vé vui chơi hot',
        Abbreviation: 'Vé vui chơi đang bán chạy',
        Notes: '',
        TicketGroupDetail: [
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
        ]
    },
    {
        Name: 'Hẹn hò lý tưởng',
        Abbreviation: 'Nơi hẹn hò của các cặp đôi',
        Notes: '',
        TicketGroupDetail: [
            {
                AvartarLink: 'https://cdn1.ivivu.com/iVivu/2020/12/14/17/img-9613-800x450.jpg',
                PromotionTitle: 'Vé bán chạy',
                Name: 'Vé VinWonders Nha Trang',
                AvgPoint: 9.1,
                NumOfReview: 54,
                MinPrice: 200000,
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
                MinPrice: 200000,
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
        ]
    },
    {
        Name: 'Dành cho gia đình',
        Abbreviation: 'Gia đình có con nhỏ',
        Notes: '',
        TicketGroupDetail: [
            {
                AvartarLink: 'https://cdn1.ivivu.com/iVivu/2019/09/12/16/vinpearl-safari-phu-quoc-29--800x450.jpg',
                PromotionTitle: 'Vé bán chạy',
                Name: 'Vé Vinpearl Safari Phú Quốc',
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
                Name: 'Vé Vinpearl Safari Nam Hội An',
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
        ]
    },
  ];
  
  slidePopular = [];
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
      console.log(res.data);
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

  getPopularLocation() {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/GetPopularLocation';
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometouritemslide', 'GetPopularLocation').then((data) => {
      let res = JSON.parse(data);
      console.log(res.Response);
      se.slidePopular = res.Response;
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
      this.ticketService.itemSearchTicket.emit(0);
      this.navCtrl.navigateForward('/ticketlist/0');
    }
  }
}
