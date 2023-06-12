import { Component, NgZone, OnInit } from '@angular/core';
import { NavController,LoadingController,AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { C } from '../../providers/constants';
import {  ActivityService, GlobalFunction} from '../../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import { MytripService } from 'src/app/providers/mytrip-service.service';
import * as moment from 'moment';
import { CalendarModal, CalendarModalOptions, CalendarResult, DayConfig } from 'ion2-calendar';
import { flightService } from 'src/app/providers/flightService';
import { ValueGlobal } from 'src/app/providers/book-service';
import * as $ from 'jquery';
import { sep } from 'path';

@Component({
  selector: 'app-orderrequestchangeflight',
  templateUrl: './orderrequestchangeflight.page.html',
  styleUrls: ['./orderrequestchangeflight.page.scss'],
})
export class OrderRequestChangeFlightPage implements OnInit {
  listSupport: any[];
  allowBuyMoreLuggage: any= true;
    itemdepart: any;
    itemreturn: any;
    trip: any;
  myCalendar: any;
  allowclickcalendar: any=true;
  showlowestprice: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, 
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public activityService: ActivityService , 
    private activatedRoute: ActivatedRoute,
    public _mytripservice: MytripService,
    private zone: NgZone,
    public gf: GlobalFunction,
    public _flightService: flightService,
    public valueGlobal: ValueGlobal,
    private modalCtrl: ModalController) { 
        this.trip = this.activityService.objPaymentMytrip.trip;
        this.itemdepart = this.activityService.objPaymentMytrip.trip.itemdepart;
        this.itemreturn = this.activityService.objPaymentMytrip.trip.itemreturn;
        if(this.itemdepart){
          this.itemdepart.allowChangeFlight = this.trip.departChangeDepartTime;
          if(this.itemdepart.allowChangeFlight) {
            this.itemdepart.allowChangeFlight = this.trip.itemdepart.checkDepartValidTime;
            if(this.itemdepart.allowChangeFlight){
              this.itemdepart.allowChangeFlight = !(this.itemdepart.passengers && this.itemdepart.passengers.some((p) => { return (!p.isInfant && ((p.giaTienHanhLy != '0' && p.hanhLy != '0kg') || (p.seatNumber && p.seatPrice)) )}) );
            }
          }
        }
        if(this.itemreturn){
          this.itemreturn.allowChangeFlight = this.trip.returnChangeDepartTime;
          if(this.itemreturn.allowChangeFlight) {
            this.itemreturn.allowChangeFlight = this.trip.itemreturn.checkReturnValidTime;
          }
          if(this.itemreturn.allowChangeFlight){
            this.itemreturn.allowChangeFlight = !(this.itemreturn.passengers && this.itemreturn.passengers.some((p) => { return (!p.isInfant && ((p.giaTienHanhLy != '0' && p.hanhLy != '0kg') || (p.seatNumber && p.seatPrice)) )}) );
          }
        }
        this.trip.adult =0;
        this.trip.child =0;
        this.trip.infant =0;
        this.trip.bookingsComboData[0].passengers.forEach((elementlug, index) => {
          let yearold = 18;
          if (elementlug.dob) {
            let arr = [];
            if (elementlug.dob && elementlug.dob.indexOf('/') != -1) {
              arr = elementlug.dob.split('/');
            }
            else if (elementlug.dob && elementlug.dob.indexOf('-') != -1) {
              arr = elementlug.dob.split('-');
            }

            if (arr.length > 0) {
              let newdob = new Date(Number(arr[2]), Number(arr[1] - 1), Number(arr[0]));
              yearold = moment(this.trip.checkInDate).diff(moment(newdob), 'years');
            }

            elementlug.isAdult = yearold > 12 ? true : false;
            if (elementlug.isAdult) {
              this.trip.adult += 1;
            } else {
              if (!this.trip.textChildDisplay) {
                this.trip.textChildDisplay = "(";
              }
              if (yearold < 2) {
                this.trip.infant += 1;
               
              } else {
                this.trip.child += 1;
              }
            }

          }else {
            this.trip.adult += 1;
          }

        });
  }

  ngOnInit() {

  }

  goback() {
  
    this.navCtrl.navigateBack('/orderrequestsupport');
  }

  clickChangeFlight(type){
    let url ='';
    if((type == 1 && !this.itemdepart.allowChangeFlight) || (type ==2 && !this.itemreturn.allowChangeFlight)){
      return;
    }else if(type ==3 && (!this.itemdepart.allowChangeFlight || !this.itemreturn.allowChangeFlight)){
      return;
    }
    this.showChangeDate();
    this.activityService.typeChangeFlight = type;
    //this.navCtrl.navigateForward('/orderrequestsearchflight');
    
   
    
  }

  async showAlertChangeDate(msg){
    var se = this;
    let alert = await this.alertCtrl.create({
      message: msg,
      cssClass: "cls-alert-searchresult",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          se.navCtrl.navigateForward('/orderrequestsearchflight');
          alert.dismiss();
        }
      },
      {
        text: 'Hủy',
        role: 'Cancel',
        handler: () => {
          alert.dismiss();
        }
      }
    ]
  });
  alert.present();
  }

  async showChangeDate() {
    this.gf.hideStatusBar();
    if(!this.allowclickcalendar){
      return;
    }
    this.allowclickcalendar = false;
    let fromdate = new Date(this._flightService.itemFlightCache.checkInDate || this.trip.checkInDate);
    let todate = new Date(this._flightService.itemFlightCache.checkOutDate || this.trip.checkOutDate);

    
    let _daysConfig: DayConfig[] = [];
    if(this.valueGlobal.listlunar){
      for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
        _daysConfig.push({
            date: this.valueGlobal.listlunar[j].date,
            subTitle: moment(this.valueGlobal.listlunar[j].date).format("DD/MM") + ': ' +this.valueGlobal.listlunar[j].name,
            cssClass: 'lunarcalendar'
        })
        }
    }
    
    var options:CalendarModalOptions;
    options  = {
      pickMode: "single",
      title: "Chọn ngày",
      monthFormat: " M, YYYY",
      weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      weekStart: 1,
      closeLabel: "",
      doneLabel: "",
      step: 0,
      defaultScrollTo: fromdate,
      defaultDate: fromdate,
      daysConfig: _daysConfig
      };

    let cindayofweek = this.gf.getDayOfWeek(fromdate).daynameshort;
    let cindaydisplay = moment(fromdate).format('DD');
    let cinmonthdisplay = 'Thg ' + moment(fromdate).format('M');

    let coutdayofweek = this.gf.getDayOfWeek(todate).daynameshort;
    let coutdaydisplay = moment(todate).format('DD');
    let coutmonthdisplay = 'Thg ' + moment(todate).format('M');


    this.myCalendar = await this.modalCtrl.create({
    component: CalendarModal,
    cssClass: 'flight-calendar-custom',
    animated: true,
    componentProps: { options }
    });

    this.myCalendar.present().then(() => {
      this.allowclickcalendar = true;
        this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
        setTimeout(()=>{
            //custom style lịch giá
           
            $('.flight-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
         
            if(this.trip.itemreturn){
              $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div > <div class='text-date-normal'>Bay đi</div> <div class='d-flex'> <div class='f-36'>${cindaydisplay}</div> <div class='text-date-normal v-align-center'> <div class='p-top-3'>${cindayofweek}</div> <div>${cinmonthdisplay}</div> </div> </div> </div> <div class='d-flex div-img-arrow'> <img class='img-arrow' src='./assets/ic_flight/icon_arrow_calendar.svg'> </div> <div ><div class='text-date-normal'>Bay về</div> <div class='d-flex' *ngIf='flighttype=='twoway'> <div class='f-36'>${coutdaydisplay}</div> <div class='text-date-normal v-align-center'> <div class='p-top-3'>${coutdayofweek}</div> <div>${coutmonthdisplay}</div> </div> </div> </div></div>`);
            }else{
              $('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div > <div class='text-date-normal'>Bay đi</div> <div class='d-flex'> <div class='f-36'>${cindaydisplay}</div> <div class='text-date-normal v-align-center'> <div class='p-top-3'>${cindayofweek}</div> <div>${cinmonthdisplay}</div> </div> </div> </div> <div class='d-flex div-img-arrow'> <ion-icon class='ico-arrow' name="remove"></ion-icon> </div> <div class='text-date-normal div-cout-oneway'>Bay về</div> </div>`);
            }
            //add div show giá thấp nhất
            if(this.showlowestprice){
              $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' (ionChange)="showLowestPrice($event)" [(ngModel)]="showlowestprice" checked></ion-toggle></div> </div>`);
            }else{
              $('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' [(ngModel)]="showlowestprice"></ion-toggle></div> </div>`);
            }
            //custom title month
            if($('.flight-calendar-custom .month-box .month-title').length >0) {
              for (let index = 0; index < $('.flight-calendar-custom .month-box .month-title').length; index++) {
                const elementMonthTitle = $('.flight-calendar-custom .month-box .month-title')[index];
                elementMonthTitle.textContent = 'Tháng' + elementMonthTitle.textContent;
              }
            }
            
            //add event close header
            $('.flight-calendar-custom .header-img-close').click((e => this.closecalendar()));
            //
            $(".days-btn").click(e => this.clickedElement(e));

            if(this.showlowestprice){
              $('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
            }else{
              $('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
            }
            // if($('.div-calendar-cincout')){
            //   $('.div-calendar-cincout').click(e => this.showCalendarCinCout());
            // }
            
            //Custom ngày lễ
            let divmonth = $('.month-box');
            if(divmonth && divmonth.length >0){
              for (let index = 0; index < divmonth.length; index++) {
                const em = divmonth[index];
                $('#'+em.id).addClass('cls-animation-calendar');
                  let divsmall = $('#'+em.id+' small');
                  if(divsmall && divsmall.length >0){
                    $('#'+em.id).append("<div class='div-month-text-small'></div>");
                    
                    for (let i = 0; i < divsmall.length; i++) {
                      const es = divsmall[i];
                      let arres = es.innerHTML.split(':');
                      $('#'+em.id+' .div-month-text-small').append("<div class='div-border-small sm-"+em.id+'-'+i+"'></div>");
                      if(arres && arres.length >1){
                        es.innerHTML = "<span class='text-red'>"+arres[0]+"</span>: "+"<span class='text-black'>"+arres[1]+"</span>";
                      }
                      $('.sm-'+em.id+'-'+i).append(es);
                    }
                  }
              }
            }

        },10)
        //$(".days-btn").click(e => this.clickedElement(e));
        });
     
    }

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
              }
              tday = fday;
              objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ','');
              objTextMonthEndDate = objTextMonthStartDate;
  
          if (
            objTextMonthEndDate &&
            objTextMonthEndDate.length > 0 &&
            objTextMonthStartDate &&
            objTextMonthStartDate.length > 0
          ) {
            monthstartdate = objTextMonthStartDate.trim().split(",")[0];
            yearstartdate = objTextMonthStartDate.trim().split(",")[1];
            monthenddate = objTextMonthEndDate.trim().split(",")[0];
            yearenddate = objTextMonthEndDate.trim().split(",")[1];
  
            var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
            var todate = new Date(yearenddate, monthenddate - 1, tday);
            let diffday =moment(todate).diff(fromdate, "days");
            var se = this;
            let allowseach = (diffday >=0 ? true : false);
            if (fromdate && todate && allowseach) {
              se._flightService.itemFlightCache.checkInDate = moment(fromdate).format('YYYY-MM-DD');
              se._flightService.itemFlightCache.checkOutDate = moment(todate).format('YYYY-MM-DD');
              setTimeout(() => {
                se.modalCtrl.dismiss({from: fromdate, to: todate});
                se.showAlertChangeDate(`Chuyến bay mới đổi qua ngày ${this.activityService.typeChangeFlight ==1 ? moment(fromdate).format('DD-MM-YYYY') : moment(todate).format('DD-MM-YYYY')}. Quý khách muốn tiếp tục?`);
              }, 300);
  
            }
          }
        }
      }
    }
    closecalendar(){
      this.modalCtrl.dismiss();
      
    }
}