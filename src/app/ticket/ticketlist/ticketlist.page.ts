import { Bookcombo, ValueGlobal, SearchHotel, Booking } from '../../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, ModalController, Events, AlertController, Platform, LoadingController, ActionSheetController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-service';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from '../../providers/constants';
import { GlobalFunction } from '../../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FCM } from "@ionic-native/fcm/ngx";
import * as $ from 'jquery';
//import { TourListFilterPage } from '../tourlistfilter/tourlistfilter.page';
import { OverlayEventDetail } from '@ionic/core';
import { CalendarModal, CalendarModalOptions, DayConfig } from 'ion2-calendar';
import { ticketService } from 'src/app/providers/ticketService';
import { TicketfilterPage } from '../ticketfilter/ticketfilter.page';

@Component({
  selector: 'app-ticketlist',
  templateUrl: 'ticketlist.page.html',
  styleUrls: ['ticketlist.page.scss'],
})
export class TicketListPage implements OnInit {

  _infiniteScroll;
  memberid: any;
  datecin: Date;
  datecout: Date;
  cindisplayhr = '09/09';
  fromPlace = 'Hồ Chí Minh';
  loaddatadone = false;
  isConnected = true;
  name: string;
  loginuser: any;
  buttoniVIVUSelected: boolean = true;
  buttonTourDuration: boolean;
  buttonTourName: boolean;
  arrslk = [1, 2, 3, 4, 5, 6];
  listTourCode = ['tailor-tour-ivivu', 'tour-nuoc-ngoai-cao-cap', 'cung-duong-dong-tay-bac'];
  allowclickcalendar: boolean = true;
  myCalendar: HTMLIonModalElement;
  status: any;
  buttonPriceMinToMax: boolean = false;
  buttonPriceMaxToMin: boolean = false;
  countFilter: any;
  constructor(public platform: Platform, public navCtrl: NavController, public zone: NgZone, public authService: AuthService, public bookcombo: Bookcombo, public value: ValueGlobal, public searchhotel: SearchHotel,
    public modalCtrl: ModalController, public events: Events, private router: Router, public booking: Booking, public loadingCtrl: LoadingController,
    public storage: Storage, public valueGlobal: ValueGlobal, public alertCtrl: AlertController, public gf: GlobalFunction,
    public activeRoute: ActivatedRoute,
    private fcm: FCM,
    private actionsheetCtrl: ActionSheetController,
    public ticketService: ticketService) {
    this.name = 'Vé vui chơi hot';
    this.fromPlace = this.ticketService.itemSearchDepature && this.ticketService.itemSearchDepature.Destination || 'Hồ Chí Minh';
    //this.value.logingoback = "ComboListPage";
    storage.get('auth_token').then(auth_token => {
      this.loginuser = auth_token;
    });
    storage.get('jti').then((uid: any) => {
      this.memberid = uid;
    })

    this.loadData();
    this.gf.hideStatusBar();
  }
  ionViewWillEnter() {
    if (this.searchhotel.CheckInDate) {
      this.cindisplayhr = moment(this.searchhotel.CheckInDate).format('DD/MM');
    }
  }

  loadData() {
    this.loaddatadone = false;
    // setTimeout(()=>{
    //   this.loaddatadone = true;
    // },500)
  }

  public async ngOnInit() {
    this.status = this.activeRoute.snapshot.paramMap.get('stt');
    if (this.status == 0) {
      if (this.ticketService.itemTicketTopic && this.ticketService.itemTicketTopic.topicId) {
        // this.loadTicketList(this.ticketService.itemTicketTopic.topicId, 0);
        this.name = this.ticketService.itemTicketTopic.topicName
        this.gf.SearchKeyword().then((data) => {
          if (data) {
            this.loaddatadone = true;
          }
        })
      }

    } else {
      // if (this.ticketService.itemSearchDestination && this.ticketService.itemSearchDestination.id) {
      //   this.loadTicketList(this.ticketService.itemSearchDestination.id, 1);
      // }else if (this.ticketService.itemShowList && this.ticketService.itemShowList.id){
      //   this.loadTicketList(this.ticketService.itemShowList.id, 1);
      // }
      this.name =  this.ticketService.itemShowList.name;
      this.gf.SearchKeyword().then((data) => {
        if (data) {
          this.loaddatadone = true;
        }
      })
    }


  }

  loadTicketList(id, stt) {
    let se = this;
    let url = C.urls.baseUrl.urlTicket + '/api/Category/GetExperiencesByRequest';
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    let body = {
      keyWord: "",
      regionId: null,
      topicId: 0
    }
    if (stt == 0) {
      body.topicId = id;
    } else {
      body.regionId = id;
    }

    se.gf.RequestApi('POST', url, headers, body, 'ticketlist', 'GetExperiencesByRequest').then((data) => {
      let res = data;
      se.zone.run(() => {
        if (stt==0) {
          se.name = res.data[0].topicName;
          se.ticketService.slideData = res.data[0].experienceHomeModels;
          
        }else{
          se.name = res.data[0].regionName;
          res.data.forEach(element => {
            for (let index = 0; index < element.experienceHomeModels.length; index++) {
              se.ticketService.slideData.push(element.experienceHomeModels[index]);
            }
           
          });
          console.log(se.ticketService.slideData);
          // se.ticketService.slideData = res.data[0].experienceHomeModels;
         
        }
        for (let index = 0; index < se.ticketService.slideData.length; index++) {
          const element = se.ticketService.slideData[index];
          se.convertAvgPoint(element);
        }
 
      })

    })
  }


  convertAvgPoint(element) {
    if (element.avgPoint && (element.avgPoint.toString().length == 1 || element.avgPoint == 6 || element.avgPoint == 9 || element.avgPoint == 8 || element.avgPoint == 7)) {
      element.avgPoint = element.avgPoint + ".0";
    }
  }


  getRegionIdByRegionCode(code): Promise<any> {
    let se = this;
    return new Promise((resolve, reject) => {
      let url = C.urls.baseUrl.urlMobile + `/tour/api/TourApi/GetRegionByDestination?destination=${code}`;
      se.gf.RequestApi('GET', url, null, null, 'tourlist', 'getRegionIdByRegionCode').then((data) => {
        let res = JSON.parse(data);
        if (res.Response && res.Response.Id) {
          resolve(res.Response.Id);
        }
        else {
          resolve('');
        }
      })
    })
  }



  sortTour(sortType: number) {
    let se = this;
    if (sortType == 1)//ivivu
    {
      this.gf.SearchKeyword().then((data) => {
        if (data) {
          this.loaddatadone = true;
        }
      })
    }
    if (sortType == 2) {
      se.executeSort('priceMinToMax')
    }
    if (sortType == 3) {
      se.executeSort('priceMaxToMin')
    }
  }

  executeSort(property) {
    let se = this;
    se.zone.run(() => se.ticketService.slideData.sort(function (a, b) {
      let col = '';
      if (property == "ivivu") {
        col = 'sortOrder';
      } else {
        col = 'publicPrice';
      }
      if (property == 'ivivu') {
        return b[col] - a[col];
      }
      else if (property == 'priceMinToMax') {
        return a[col] - b[col];
      }
      else if (property == 'priceMaxToMin') {
        return b[col] - a[col];
      }

    }));
  }

  async openFilterTour() {
    // const modal: HTMLIonModalElement =
    //   await this.modalCtrl.create({
    //     component: TourListFilterPage,
    //     componentProps: {
    //       aParameter: true,
    //     }
    //   });
    // modal.present();
    // modal.onDidDismiss().then((data: OverlayEventDetail) => {
    //   if (!data.data) {
    //     this.zone.run(() => {

    //     })
    //   }
    // })

  }

  goback() {
    this.ticketService.itemSearchDestination = "";
    this.ticketService.itemShowList = "";
    this.navCtrl.navigateBack('/app/tabs/tab1');
  }

  itemclickht(item) {
    this.ticketService.backPage = 'ticketlist';
    this.ticketService.itemTicketDetail = item;
    this.navCtrl.navigateForward('/ticketdetail');
  }
  closecalendar() {
    this.modalCtrl.dismiss();
  }

  /**
  * Hàm bắt sự kiện click chọn ngày trên lịch bằng jquery
  * @param e biến event
  */
  async clickedElement(e: any) {
    var obj: any = e.currentTarget;
    if ($(obj).hasClass('on-selected')) {
      if (this.modalCtrl) {
        let fday: any;
        let tday: any;
        var monthenddate: any;
        var yearenddate: any;
        var monthstartdate: any;
        var yearstartdate: any;
        var objTextMonthEndDate: any;
        var objTextMonthStartDate: any;
        if ($('.days-btn.lunarcalendar.on-selected > p')[0]) {
          fday = $('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
          tday = fday;
          objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
          objTextMonthEndDate = objTextMonthStartDate;
        } else {
          fday = $('.on-selected > p')[0].textContent;
          tday = fday;
          objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
          objTextMonthEndDate = objTextMonthStartDate;
        }
        if (
          objTextMonthEndDate &&
          objTextMonthEndDate.length > 0 &&
          objTextMonthStartDate &&
          objTextMonthStartDate.length > 0
        ) {
          monthstartdate = objTextMonthStartDate.split(" ")[0];
          yearstartdate = objTextMonthStartDate.split(" ")[1];
          monthenddate = objTextMonthEndDate.split(" ")[0];
          yearenddate = objTextMonthEndDate.split(" ")[1];
          var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
          var todate = new Date(yearenddate, monthenddate - 1, tday * 1 + 1);
          if (fromdate && todate && moment(todate).diff(fromdate, "days") >= 0) {
            var se = this;
            setTimeout(() => {
              se.modalCtrl.dismiss();
            }, 300);
            se.zone.run(() => {
              se.searchhotel.CheckInDate = moment(fromdate).format('YYYY-MM-DD');
              se.searchhotel.datecin = fromdate;
              se.searchhotel.cindisplay = moment(se.searchhotel.datecin).format("DD-MM-YYYY");
            })
            se.loadData();

          }
        }
      }
    }
  }
  async openSort() {
    // if(!this.loadpricedone){
    //   this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
    //   return;
    // }
    let actionSheet = await this.actionsheetCtrl.create({
      cssClass: 'action-sheets-tourlist-sort',
      buttons: [
        {
          text: "iVIVU đề xuất",
          cssClass: "btn-iVIVU cls-border-bottom",
          handler: () => {
            this.buttoniVIVUSelected = true
            this.buttoniVIVUSelected ? $(".btn-iVIVU > span").addClass('selected') : $(".btn-iVIVU > span").removeClass('selected');

            this.buttonPriceMinToMax = false;
            this.buttonPriceMaxToMin = false;
            if (this.buttoniVIVUSelected) {
              this.sortTour(1);
            }
          }
        },
        {
          text: "Giá từ thấp tới cao",
          cssClass: "btn-priceMin cls-border-bottom",
          handler: () => {
            this.buttonPriceMinToMax = true;
            this.buttonPriceMinToMax ? $(".btn-priceMin > span").addClass('selected') : $(".btn-priceMin > span").removeClass('selected');

            this.buttoniVIVUSelected = false;
            this.buttonPriceMaxToMin = false;
            if (this.buttonPriceMinToMax) {
              this.sortTour(2);
            }
          }
        },
        {
          text: "Giá từ cao tới thấp",
          cssClass: "btn-priceMax cls-border-bottom",
          handler: () => {
            this.buttonPriceMaxToMin = true;
            this.buttonPriceMaxToMin ? $(".btn-priceMax > span").addClass('selected') : $(".btn-priceMax > span").removeClass('selected');

            this.buttoniVIVUSelected = false;
            this.buttonPriceMinToMax = false;
            if (this.buttonPriceMaxToMin) {
              this.sortTour(3);
            }
          }
        }

      ]

    });

    this.buttonPriceMinToMax ? $(".btn-priceMin > span").addClass('selected') : $(".btn-priceMin > span").removeClass('selected');
    this.buttonPriceMaxToMin ? $(".btn-priceMax > span").addClass('selected') : $(".btn-priceMax > span").removeClass('selected');
    this.buttoniVIVUSelected ? $(".btn-iVIVU > span").addClass('selected') : $(".btn-iVIVU > span").removeClass('selected');
    actionSheet.present();

  }
  async openFilter() {
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: TicketfilterPage,
        componentProps: {
          aParameter: true,
        }
      });
    modal.present();

    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      if (data && data.data.hasfilter) {
        // let objTemp = this.ticketService.ticketFilter.topics.filter(item => item.checked);
        // this.countFilter = objTemp.length;
        // if (objTemp && objTemp.length > 0) {
        //   this.ticketService.slideData = this.ticketService.arrTicketList.filter(f => this.ticketService.ticketFilter.topics.some(item => item.checked && f.topicCode == item.code));
        // }
        // else{
        //   this.ticketService.slideData = this.ticketService.arrTicketList;
        // }
        this.gf.SearchKeyword().then((data) => {
          if (data) {
            this.loaddatadone = true;
          }
        })
      }
    })
  }
  reFilter(){
    this.openFilter();
  }
}
