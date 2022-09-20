import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, Platform } from '@ionic/angular';
import { GlobalFunction } from './../../../../providers/globalfunction';
import $ from 'jquery';
import { C } from './../../../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import * as request from 'requestretry';
import { SearchHotel } from 'src/app/providers/book-service';
import { tourService } from 'src/app/providers/tourService';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
// import { SelectDateRangePage } from 'src/app/selectdaterange/selectdaterange.page';

@Component({
  selector: 'app-hometoursearch',
  templateUrl: './hometoursearch.page.html',
  styleUrls: ['./hometoursearch.page.scss'],
})
export class HomeTourSearchPage implements OnInit {
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
    public tourService: tourService) {
  }

  ngOnInit(){
    this.tourService.itemSearchTour.subscribe((data) => {
      if(data){
        this.zone.run(()=> {
          this.itemSearch = this.tourService.input;
          this.storage.get('listSearchTour').then((data) => {
            if(data && data.length >0) {
              if(data.length < 3) {
                data = data.push(this.tourService.input);
                this.storage.remove('listSearchTour').then(()=> {
                  this.storage.set('listSearchTour',data);
                })
              }else {
                data = [...data.splice(0, 1)];
                data = data.push(this.tourService.input);
                this.storage.remove('listSearchTour').then(()=> {
                  this.storage.set('listSearchTour',data);
                })
              }
            }else{
              let list = [];
              list.push(this.tourService.input);
              this.storage.set('listSearchTour',list);
            }
          })
        })
      }
    })

    this.tourService.itemSearchDeparture.subscribe((data) => {
      if(data){
        this.zone.run(()=> {
          this.itemSearchDepature = this.tourService.itemDeparture;
          this.tourService.itemSearchDepature = this.tourService.itemDeparture;
        })
      }
    })

  }

  change() {
    this.navCtrl.navigateForward('/searchregion');
  }

  search(){
    if(!this.itemSearch){
      this.gf.showToastWarning('Vui lòng chọn điểm đến!');
      return;
    }
    if(this.itemSearch && this.itemSearch.Id && this.itemSearch.TourCode){
      this.tourService.tourDetailId = this.itemSearch.Id;
      this.tourService.backPage = 'hometour';
      this.navCtrl.navigateForward('/tourdetail');
    }else {
      this.tourService.itemSearchDestination = this.itemSearch;
      this.tourService.itemShowList = null;
      this.navCtrl.navigateForward('/tourlist');
    }
    
  }

  opendeparture() {
    this.navCtrl.navigateForward('/searchdeparture');
  }

  async openPickupCalendar(){
    let se = this;
    if(!se.allowclickcalendar){
      return;
    }
    
    se.allowclickcalendar = false;
    let fromdate = new Date(this.searchhotel.CheckInDate);
    let todate = new Date(this.searchhotel.CheckOutDate);

    let Year=new Date().getFullYear();
    let Month=new Date().getMonth();
    let Day=new Date().getDate();
      const options: CalendarModalOptions = {
        pickMode: "single",
        title: "Chọn ngày",
        monthFormat: "MM / YYYY",
        weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        weekStart: 1,
        closeLabel: "",
        doneLabel: "",
        step: 0,
        defaultScrollTo: fromdate,
        defaultDate: fromdate,
        daysConfig: [],
        to: new Date(Year+1, Month, Day),
      };
  
      this.myCalendar = await this.modalCtrl.create({
        component: CalendarModal,
        animated: true,
        componentProps: { options },
        cssClass: 'hotel-calendar-custom',
      });
      this.myCalendar.present().then(() => {
        se.allowclickcalendar = true;
        $(".days-btn").click(e => this.clickedElement(e));

        $('.hotel-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
        //add event close header
        $('.hotel-calendar-custom .header-img-close').click((e => this.closecalendar()));
      });

      const event: any = await this.myCalendar.onDidDismiss();
      const date = event.data;
      if (event.data) {
         se.zone.run(() => {
           se.searchhotel.CheckInDate = moment(event.data.from).format('YYYY-MM-DD');
           se.searchhotel.datecin = new Date(event.data.from);
           se.searchhotel.cindisplay = moment(se.searchhotel.datecin).format("DD-MM-YYYY");
           se.getCinCoutDayName();
         })
      }
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
            monthstartdate = objTextMonthStartDate.split("/")[0];
            yearstartdate = objTextMonthStartDate.split("/")[1];
            monthenddate = objTextMonthEndDate.split("/")[0];
            yearenddate = objTextMonthEndDate.split("/")[1];
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
