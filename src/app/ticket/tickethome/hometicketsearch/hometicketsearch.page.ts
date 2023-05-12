import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform } from '@ionic/angular';
import { GlobalFunction } from './../../../providers/globalfunction';
import $ from 'jquery';
import { C } from './../../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import * as request from 'requestretry';
import { SearchHotel, ValueGlobal } from 'src/app/providers/book-service';
import { CalendarModal, CalendarModalOptions, DayConfig } from 'ion2-calendar';
import { ticketService } from 'src/app/providers/ticketService';

@Component({
  selector: 'app-hometicketsearch',
  templateUrl: './hometicketsearch.page.html',
  styleUrls: ['./hometicketsearch.page.scss'],
})
export class HomeTicketSearchPage implements OnInit {
  @Input('itemSearch') itemSearch;
  cofdate= 0;
  itemSearchDepature: any;
  itemHot: any;
  myCalendar: HTMLIonModalElement;
  allowclickcalendar: boolean=true;
  constructor(private navCtrl: NavController, private gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    public storage: Storage,
    private actionsheetCtrl: ActionSheetController,
    private platform: Platform,
    public searchhotel: SearchHotel,
    public ticketService: ticketService) {
  }

  ngOnInit(){
    // this.ticketService.getObservableSearchTicketRegion().subscribe((data) => {
    //   if(data){
    //     this.itemSearch = data;
    //   }
    // });
    this.ticketService.itemSearchTicket.subscribe((data) => {
      if(data){
        this.zone.run(()=> {
          this.itemSearch = this.ticketService.input;
          this.storage.get('listSearchTicket').then((data) => {
            if(data && data.length >0) {
              if(data.length < 3) {
                data = data.push(this.ticketService.input);
                this.storage.remove('listSearchTicket').then(()=> {
                  this.storage.set('listSearchTicket',data);
                })
              }else {
                data = [...data.splice(0, 1)];
                data = data.push(this.ticketService.input);
                this.storage.remove('listSearchTicket').then(()=> {
                  this.storage.set('listSearchTicket',data);
                })
              }
            }else{
              let list = [];
              list.push(this.ticketService.input);
              this.storage.set('listSearchTicket',list);
            }
          })
        })
      }
    })

    // this.ticketService.itemSearchDeparture.subscribe((data) => {
    //   if(data){
    //     this.zone.run(()=> {
    //       this.itemSearchDepature = this.ticketService.itemDeparture;
    //       this.ticketService.itemSearchDepature = this.ticketService.itemDeparture;
    //     })
    //   }
    // })
    //this.getTicketBanners();
  }

  getTicketBanners() {
    let se = this;
    let url = C.urls.baseUrl.urlTicket+'/api/Home/GetAllBanners';
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'hometicketsearch', 'GetAllBanners').then((data) => {
      let res = JSON.parse(data);
      //se.slideData = res.data;
      console.log(res.data);
    })
  }

  change() {
    this.navCtrl.navigateForward('/ticketsearch');
  }

  search(){
    if(!this.itemSearch){
      this.gf.showToastWarning('Vui lòng chọn điểm đến!');
      return;
    }
    if(this.itemSearch && this.itemSearch.id && this.itemSearch.code && this.itemSearch.stt==1){
      this.ticketService.ticketDetailId = this.itemSearch.id;
      this.ticketService.backPage = 'hometicket';
      this.navCtrl.navigateForward('/ticketdetail');
    }else {
      this.ticketService.itemSearchDestination = this.itemSearch;
      this.ticketService.itemShowList = null;
      this.navCtrl.navigateForward('/ticketlist');
    }
    
  }

  opendeparture() {
    this.navCtrl.navigateForward('/searchdeparture');
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
          if ( $('.days-btn.lunarcalendar.on-selected > p')[0]) {
            fday= $('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
            tday = fday;
            objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ','');
            objTextMonthEndDate = objTextMonthStartDate;
          } else {
            fday = $('.on-selected > p')[0].textContent;
            tday = fday;
            objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ','');
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
            var todate = new Date(yearenddate, monthenddate - 1, tday*1 +1);
            if (fromdate && todate && moment(todate).diff(fromdate, "days") >= 0) {
              var se = this;
              setTimeout(() => {
                se.modalCtrl.dismiss();
              }, 300);
  
            
              se.zone.run(() => {
                se.searchhotel.CheckInDate = moment(fromdate).format("YYYY-MM-DD");
                se.searchhotel.cindisplay = moment(fromdate).format("DD-MM-YYYY");
                se.searchhotel.CheckOutDate = moment(todate).format("YYYY-MM-DD");
              });
              
            }
          }
        }
      }
    }
  closecalendar(){
    this.modalCtrl.dismiss();
  }
  getCinCoutDayName() {
    if (this.searchhotel.datecin) {
      this.searchhotel.cinthu = moment(this.searchhotel.datecin).format("dddd");
      switch (this.searchhotel.cinthu) {
        case "Monday":
          this.searchhotel.cinthu = "Thứ 2";
          break;
        case "Tuesday":
          this.searchhotel.cinthu = "Thứ 3";
          break;
        case "Wednesday":
          this.searchhotel.cinthu = "Thứ 4";
          break;
        case "Thursday":
          this.searchhotel.cinthu = "Thứ 5";
          break;
        case "Friday":
          this.searchhotel.cinthu = "Thứ 6";
          break;
        case "Saturday":
          this.searchhotel.cinthu = "Thứ 7";
          break;
        default:
          this.searchhotel.cinthu = "Chủ nhật";
          break;
      }
    }
  }
}
