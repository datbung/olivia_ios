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
  slideData1 = [
    {
    'Id': 1,
    'ImageUrl': 'https://cdn2.ivivu.com/2022/03/08/16/ivivu-venice-y-360x225.gif',
    'TourName': 'Tour Châu Âu 11N10Đ: Trải Nghiệm Pháp - Thụy Sĩ - Ý',
    'TourDuration': ' 11 Ngày 10 Đêm',
    'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
    'TourPrice': 64900000,
    'TourPriceStr': '64.900.000',
    'TourPromo': 'Trả góp chỉ từ 5,679K/tháng'
    },
    {
      'Id': 2,
      'ImageUrl': 'https://cdn2.ivivu.com/2022/03/28/16/ivivu-vinh-marina-bay-singapore-360x225.gif',
      'TourName': 'Tour Malaysia 5N4Đ: Một Hành Trình Hai Quốc Gia Singapore - Malaysia',
      'TourDuration': ' 5 Ngày 4 Đêm',
      'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
      'TourPrice': 10990000,
      'TourPriceStr': '10.990.000',
      'TourPromo': 'Tour mới'
      },
      {
        'Id': 3,
        'ImageUrl': 'https://cdn2.ivivu.com/2022/05/13/10/ivivu-nami-island-360x225.gif',
        'TourName': 'Tour Hàn Quốc 5N4Đ: Seoul - Đảo Nami - Everland',
        'TourDuration': ' 5 Ngày 4 Đêm',
        'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
        'TourPrice': 12990000,
        'TourPriceStr': '12.990.000',
        'TourPriceOld': 13990000,
        'TourPromo': 'Tour bán chạy'
        },
        {
          'Id': 4,
          'ImageUrl': 'https://cdn2.ivivu.com/2022/03/28/17/ivivu-su-tu-singapore-360x225.gif',
          'TourName': 'Tour Singapore 3N2Đ: Khám Phá Đảo Quốc Sư Tử',
          'TourDuration': ' 3 Ngày 2 Đêm',
          'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
          'TourPrice': 8990000,
          'TourPriceStr': '8.990.000',
          'TourPromo': 'Tour bán chạy'
          }
    
  ];

  slideData2 = [
    {
    'Id': 1,
    'ImageUrl': 'https://cdn2.ivivu.com/2022/03/28/17/ivivu-singapore-360x225.gif',
    'TourName': 'Tour Malaysia 5N4Đ: Hành trình liên tuyến Singapore - Malaysia',
    'TourDuration': ' 5 Ngày 4 Đêm',
    'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
    'TourPrice': 9190000,
    'TourPriceStr': '9.190.000',
    'TourPromo': 'Miễn Visa',
    'AvgPoint': 9.1,
    'TotalComment': 34
    },
    {
      'Id': 2,
      'ImageUrl': 'https://cdn2.ivivu.com/2019/01/03/11/ivivu-phuket2-360x225.jpg',
      'TourName': 'Tour Thái Lan 4N3Đ: Đảo Thiên Đường PhuKet',
      'TourDuration': ' 4 Ngày 3 Đêm',
      'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
      'TourPrice': 8900000,
      'TourPriceStr': '8.900.000',
      'TourPromo': 'Tour bán chạy',
      'AvgPoint': 9.3,
      'TotalComment': 50
      },
      {
        'Id': 3,
        'ImageUrl': 'https://cdn2.ivivu.com/2020/02/24/15/ivivu-ho-ta-dung-tn-360x225.gif',
        'TourName': 'Tour Tây Nguyên 3N3Đ: Tà Đùng - Buôn Mê Thuột - Thác Dray Nu',
        'TourDuration': ' 3 Ngày 3 Đêm',
        'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
        'TourPrice': 2390000,
        'TourPriceStr': '2.390.000',
        'TourPriceOld': 299000,
        'TourPromo': 'Tour bán chạy',
        'AvgPoint': 9,
        'TotalComment': 25
        },
        {
          'Id': 4,
          'ImageUrl': 'https://cdn2.ivivu.com/2022/04/22/14/ivivu-cau-vang-da-nang-360x225.gif',
          'TourName': 'Tour Đà Nẵng 4N3Đ: Sài Gòn - Huế - Quảng Bình - Đà Nẵng',
          'TourDuration': ' 4 Ngày 3 Đêm',
          'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
          'TourPrice': 4690000,
          'TourPriceStr': '4.690.000',
          'TourPromo': '',
          'AvgPoint': 9,
          'TotalComment': 30
          }
    
  ];

  slideData3 = [
    {
    'Id': 1,
    'ImageUrl': 'https://cdn2.ivivu.com/2022/05/12/18/phong-nha-ke-bang-view-360x225.jpg',
    'TourName': 'Tour Đà Nẵng 4N3Đ: HCM - Đà Nẵng - Bà Nà - Hội An - Huế - Quảng Bình Bay VJ',
    'TourDuration': ' 4 Ngày 3 Đêm',
    'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
    'TourPrice': 5590000,
    'TourPriceStr': '5.590.000',
    'TourPromo': 'Miễn Visa',
    'AvgPoint': 10,
    'TotalComment': 5
    },
    {
      'Id': 2,
      'ImageUrl': 'https://cdn2.ivivu.com/2021/04/26/11/ivivu-ky-co-bia-360x225.gif',
      'TourName': 'Tour Quy Nhơn 3N4Đ: KDL Hầm Hô - Kỳ Co - Eo Gió - Chùa Ông Núi (Xe Lửa)',
      'TourDuration': ' 3 Ngày 4 Đêm',
      'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
      'TourPrice': 3650000,
      'TourPriceStr': '3.650.000',
      'TourPromo': 'Tour bán chạy',
      'AvgPoint': 9.3,
      'TotalComment': 14
      },
      {
        'Id': 3,
        'ImageUrl': 'https://cdn2.ivivu.com/2022/03/09/16/ivivu-bau-trang-phan-thiet-360x225.gif',
        'TourName': 'Tour Cao Cấp Phan Thiết 2N1D: Núi Tà Cú - Bàu Trắng - Đồi Cát Bay',
        'TourDuration': ' 2 Ngày 1 Đêm',
        'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
        'TourPrice': 2090000,
        'TourPriceStr': '2.090.000',
        'TourPriceOld': 299000,
        'TourPromo': 'Tour bán chạy',
        'AvgPoint': 10,
        'TotalComment': 9
        },
        {
          'Id': 4,
          'ImageUrl': 'https://cdn2.ivivu.com/2020/07/06/16/ivivu-outside-vmk-360x225.gif',
          'TourName': 'Tour du thuyền Victoria Mekong 3N2Đ: Khám phá Cần Thơ - Châu Đốc',
          'TourDuration': ' 3 Ngày 2 Đêm',
          'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
          'TourPrice': 12990000,
          'TourPriceStr': '12.990.000',
          'TourPromo': '',
          'AvgPoint': 10,
          'TotalComment': 25
          }
    
  ];
  
  slideData4 = [
    {
    'Id': 1,
    'ImageUrl': 'https://cdn2.ivivu.com/2021/05/13/11/ivivu-sunset-sanato-360x225.gif',
    'TourName': 'Tour Yoga Phú Quốc 3N2Đ: Vinwonders - Tập Thiền - Sunset Sanato',
    'TourDuration': ' 3 Ngày 2 Đêm',
    'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
    'TourPrice': 6590000,
    'TourPriceStr': '6.590.000',
    'TourPromo': 'VinWonders Thiền',
    'AvgPoint': 9.1,
    'TotalComment': 34
    },
    {
      'Id': 2,
      'ImageUrl': 'https://cdn2.ivivu.com/2022/02/09/11/ivivu-que-garden-360x225.gif',
      'TourName': 'Tour Yoga Đà Lạt 3N2Đ: Thiền Viện - Thác Cam Ly - Que Garden',
      'TourDuration': ' 3 Ngày 2 Đêm',
      'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
      'TourPrice': 3690000,
      'TourPriceStr': '3.690.000',
      'TourPromo': 'Tour bán chạy',
      'AvgPoint': 9.3,
      'TotalComment': 50
      },
      {
        'Id': 3,
        'ImageUrl': 'https://cdn2.ivivu.com/2022/01/27/15/ivivu-vic-mekong-lumiana-bia-360x225.gif',
        'TourName': 'Tour Du thuyền Victoria Mekong 3N2D: Mekong Wellness',
        'TourDuration': ' 3 Ngày 2 Đêm',
        'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
        'TourPrice': 14900000,
        'TourPriceStr': '14.900.000',
        'TourPriceOld': 299000,
        'TourPromo': 'Tour mới',
        'AvgPoint': 9,
        'TotalComment': 25
        },
        {
          'Id': 4,
          'ImageUrl': 'https://cdn2.ivivu.com/2021/12/14/16/ivivu-grand-world-phu-quoc-360x225.gif',
          'TourName': 'Tour Cao Cấp Phú Quốc 3N2Đ: Khám Phá Siêu Quần Thể Nghỉ Dưỡng',
          'TourDuration': ' 3 Ngày 2 Đêm',
          'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
          'TourPrice': 4490000,
          'TourPriceStr': '4.490.000',
          'TourPromo': '',
          'AvgPoint': 10,
          'TotalComment': 30
          }
    
  ];
  
  slideData5 = [
    {
    'Id': 1,
    'ImageUrl': 'https://cdn2.ivivu.com/2022/04/13/15/ivivu-dubai8-360x480.gif',
    'TourName': 'Dubai',
    'TourDuration': ' 5 Ngày 4 Đêm',
    'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
    'TourPrice': 9190000,
    'TourPriceStr': '9.190.000',
    'TourPromo': 'Miễn Visa',
    'AvgPoint': 9.1,
    'TotalComment': 34
    },
    {
      'Id': 2,
      'ImageUrl': 'https://cdn2.ivivu.com/2022/03/10/16/ivivu-ban-dao-son-tra-360x225.gif',
      'TourName': 'Đà nẵng',
      'TourDuration': ' 4 Ngày 3 Đêm',
      'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
      'TourPrice': 8900000,
      'TourPriceStr': '8.900.000',
      'TourPromo': 'Tour bán chạy',
      'AvgPoint': 9.3,
      'TotalComment': 50
      },
      {
        'Id': 3,
        'ImageUrl': 'https://cdn2.ivivu.com/2022/03/08/15/ivivu-du-lich-phap-eiffel-360x225.gif',
        'TourName': 'Châu Âu',
        'TourDuration': ' 3 Ngày 3 Đêm',
        'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
        'TourPrice': 2390000,
        'TourPriceStr': '2.390.000',
        'TourPriceOld': 299000,
        'TourPromo': 'Tour bán chạy',
        'AvgPoint': 9,
        'TotalComment': 25
        },
        {
          'Id': 4,
          'ImageUrl': 'https://cdn2.ivivu.com/2022/03/07/10/ivivu-thi-tran-dia-trung-hai-360x225.gif',
          'TourName': 'Phú Quốc',
          'TourDuration': ' 4 Ngày 3 Đêm',
          'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
          'TourPrice': 4690000,
          'TourPriceStr': '4.690.000',
          'TourPromo': '',
          'AvgPoint': 9,
          'TotalComment': 30
          }
          ,
        {
          'Id': 5,
          'ImageUrl': 'https://cdn2.ivivu.com/2020/06/24/13/ivivu-thac-ban-gioc-bia-360x225.gif',
          'TourName': 'Đông bắc',
          'TourDuration': ' 4 Ngày 3 Đêm',
          'TourTransport': [{'id': 1, 'name': 'Di chuyển bằng máy bay'}, {'id': 2, 'name': 'Di chuyển bằng Ô tô'}],
          'TourPrice': 4690000,
          'TourPriceStr': '4.690.000',
          'TourPromo': '',
          'AvgPoint': 9,
          'TotalComment': 30
          }
    
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
    public tourService: tourService) {
    //if(this.type == 1){
      //this.slideData = [...this.slideData1];
      this.getTourGroupFutures();
      this.getPopularLocation();
    //}
  }

  ngOnInit(){

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
      console.log(res.Response);
      se.slideData = res.Response;
      se.slideData.forEach(element => {
        if(element.TourGroupDetail && element.TourGroupDetail.length >0){
          element.groupListId = element.TourGroupDetail.map((item) => item.Id).join(',');
          element.TourGroupDetail.forEach(group => {
            if(group.AvartarLink && group.AvartarLink.indexOf('http') == -1){
              group.AvartarLink = 'https:'+group.AvartarLink;
            }
            if(group.TopPlace) {
              group.listTopPlace = group.TopPlace.split(',');
            }
          });
          se.tourService.listTourTopic = se.slideData;
        }
      });
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
    this.slideData = [...this.slideData,...this.slideData1];
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
