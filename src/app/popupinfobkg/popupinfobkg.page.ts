import { SearchHotel, ValueGlobal } from './../providers/book-service';
import { ModalController, NavController,ToastController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';
import * as moment from "moment";
import * as $ from 'jquery';
import {
  CalendarModal,
  CalendarModalOptions,
  CalendarOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
import { GlobalFunction } from '../providers/globalfunction';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-popupinfobkg',
  templateUrl: './popupinfobkg.page.html',
  styleUrls: ['./popupinfobkg.page.scss'],
})
export class PopupinfobkgPage implements OnInit {
  cindisplay;coutdisplay;cinthu;coutthu;cofdate=0;cotdate=0;adult=2;child=0;roomnumber=1;
  cin;cout;datecin;datecout;
  public myCalendar: any;
  _daysConfig: DayConfig[] = [];
  nightCount: any=0;
  allowclickcalendar: boolean = true;
  changedate: boolean;
  constructor(public modalCtrl: ModalController, public zone: NgZone,public searchhotel:SearchHotel,public valueGlobal:ValueGlobal,public navCtrl:NavController,
    public gf: GlobalFunction,
    private storage: Storage, private toastCtrl: ToastController) {
   }
  ngOnInit() {

  }
  ionViewWillEnter() {
    this.allowclickcalendar = true;
    if(this.valueGlobal.listlunar){
      for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
        this._daysConfig.push({
          date: this.valueGlobal.listlunar[j].date,
          subTitle: this.valueGlobal.listlunar[j].name,
          cssClass: 'lunarcalendar'
        })
      }
    }
    
    if (this.searchhotel.adult) {
      this.adult = this.searchhotel.adult;
    }
    if (this.searchhotel.child != null) {
      this.child = this.searchhotel.child;
    }
    if (this.searchhotel.child == 0) {
      this.child = this.searchhotel.child;
    }
    if (this.searchhotel.roomnumber) {
      this.roomnumber = this.searchhotel.roomnumber;
    }
    //check ngày tháng
    if (this.searchhotel.CheckInDate) {
      this.cin = this.gf.getCinIsoDate(this.searchhotel.CheckInDate);
      this.cout = this.gf.getCinIsoDate(this.searchhotel.CheckOutDate);

      this.datecin = new Date(this.gf.getCinIsoDate(this.searchhotel.CheckInDate));
      this.datecout = new Date(this.gf.getCinIsoDate(this.searchhotel.CheckOutDate));
      this.cindisplay = moment(this.datecin).format('DD-MM');
      this.coutdisplay = moment(this.datecout).format('DD-MM');
    } else {
      this.cin = new Date(this.gf.getCinIsoDate(new Date()));
      var rescin = this.cin.setTime(this.cin.getTime() + (7 * 24 * 60 * 60 * 1000));
      var datein = new Date(this.gf.getCinIsoDate(rescin));
      this.cin = moment(datein).format('YYYY-MM-DD');
      this.cindisplay = moment(datein).format('DD-MM');
      this.datecin = new Date(rescin);

      this.cout = new Date(this.gf.getCinIsoDate(new Date()));
      var res = this.cout.setTime(this.cout.getTime() + (8 * 24 * 60 * 60 * 1000));
      var date = new Date(this.gf.getCinIsoDate(res));
      this.cout = moment(date).format('YYYY-MM-DD');
      this.coutdisplay = moment(date).format('DD-MM');
      this.datecout = new Date(res);
    }
    this.nightCount = moment(this.datecout).diff( moment(this.datecin), 'days');
    this.bindlunar();
  }
  async closeModal()
  {
    this.valueGlobal.notRefreshDetail = !this.changedate; 
    this.navCtrl.back();
  }
  closecalendar(){
    this.modalCtrl.dismiss();
  }

  async openPickupCalendar() {
    //this.navCtrl.navigateForward('/pickup-calendar/true');
    if(!this.allowclickcalendar){
      return;
    }
    this.allowclickcalendar = false;
    let fromdate = new Date(this.cin);
    let todate = new Date(this.cout);
    let _daysConfig: DayConfig[] = [];
 
    if(this.valueGlobal.dayhot && this.valueGlobal.dayhot.length>0){
     for (let j = 0; j < this.valueGlobal.dayhot.length; j++) {
       _daysConfig.push({
         date: this.valueGlobal.dayhot[j],
         cssClass: 'dayhot'
       })
     }
    }
    if(this.valueGlobal.notSuggestDaily){
      for (let j = 0; j < this.valueGlobal.notSuggestDaily.length; j++) {
        _daysConfig.push({
          date: this.valueGlobal.notSuggestDaily[j],
          cssClass: 'strikethrough'
        })
      }
     }

     if(this.valueGlobal.listlunar){
      for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
        _daysConfig.push({
          date: this.valueGlobal.listlunar[j].date,
          subTitle: moment(this.valueGlobal.listlunar[j].date).format('DD')+':' +this.valueGlobal.listlunar[j].name,
          cssClass:'lunarcalendar'
        })
      }
     }
     
    let Year=new Date(this.gf.getCinIsoDate(new Date())).getFullYear()
    let Month=new Date(this.gf.getCinIsoDate(new Date())).getMonth()
    let Day=new Date(this.gf.getCinIsoDate(new Date())).getDate()
    const options: CalendarModalOptions = {
      pickMode: 'range',
      title: 'Chọn ngày',
      monthFormat: 'MM / YYYY',
      weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
      weekStart: 1,
      closeLabel: '',
      doneLabel: '',
      step: 0,
      defaultScrollTo: fromdate,
      defaultDateRange: { from: fromdate, to: todate },
      daysConfig: _daysConfig,
      to: new Date(Year+1, Month, Day),
    };

    this.myCalendar = await this.modalCtrl.create({
      component: CalendarModal,
      animated: true,
      cssClass: 'hotel-calendar-custom',
      componentProps: { options }
    });

    this.myCalendar.present().then(() => {
      this.allowclickcalendar = true;
      $('.days-btn').click(e => this.clickedElement(e));
      if(se.valueGlobal.dayhot.length>0){
        let divmonth = $('.month-box');
        if(divmonth && divmonth.length >0){
          for (let index = 0; index < divmonth.length; index++) {
             const em = divmonth[index];
            //   let divsmall = $('#'+em.id+' dayhot');
            //   if(divsmall && divsmall.length >0){
                $('#'+em.id).append("<div class='div-month-text-small'></div>")
                $('#'+em.id+' .div-month-text-small').append("<div class='div-hot-price' style='margin-left: 0px !important'><img class='img-hot-price' src='./assets/imgs/ic_fire.svg'/>  Giai đoạn giá siêu hot</div>");
              // }
          }
        }
      }
     
   
      $('.hotel-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
        //add event close header
        $('.hotel-calendar-custom .header-img-close').click((e => this.closecalendar()));

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
    });
    // $(".days-btn").last().on('click',function(){
    //   debugger
    // })
    var se = this;
    const event: any = await this.myCalendar.onDidDismiss();
    const date = event.data;
    if(event){
      se.allowclickcalendar = true;
    }
    if (event.data) {
      const from: CalendarResult = date.from;
      const to: CalendarResult = date.to;
      se.cin = moment(this.gf.getCinIsoDate(from.dateObj)).format('YYYY-MM-DD');
      se.cout = moment(this.gf.getCinIsoDate(to.dateObj)).format('YYYY-MM-DD');
      se.zone.run(() => {
        se.searchhotel.CheckInDate = se.cin;
        se.searchhotel.CheckOutDate = se.cout;
        se.datecin = new Date(this.gf.getCinIsoDate(se.cin));
        se.datecout = new Date(this.gf.getCinIsoDate(se.cout));
        se.cindisplay = moment(se.datecin).format('DD-MM-YYYY');
        se.coutdisplay = moment(se.datecout).format('DD-MM-YYYY');
        se.cindisplay = moment(se.datecin).format('DD-MM-YYYY');
        se.coutdisplay = moment(se.datecout).format('DD-MM-YYYY');
        se.gf.setCacheSearchHotelInfo({checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber});
        se.getDayName(se.datecin, se.datecout);
      })
    }
  }
  async clickedElement(e: any) {
    var obj: any = e.currentTarget;
    if ($(obj.parentNode).hasClass('endSelection') || $(obj.parentNode).hasClass('startSelection')) {
      if (this.modalCtrl) {
        this.changedate = true;
        let fday: any;
        let tday: any;
        var monthenddate: any;
        var yearenddate: any;
        var monthstartdate: any;
        var yearstartdate: any;
        var objTextMonthEndDate: any;
        var objTextMonthStartDate: any;
        this.cofdate = 0;
        this.cotdate = 0;
        this.cinthu = "";
        this.coutthu = "";
        if ($(obj.parentNode).hasClass('endSelection')) {
          // fday = $('.on-selected')[0].textContent;
          // tday = $(obj)[0].textContent;
          if ( $('.days-btn.lunarcalendar.on-selected > p')[0]) {
            fday= $('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
          } else {
            fday = $('.on-selected')[0].textContent;
          }
          if ($('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
            tday = $('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText; 
          } else {
            tday = $(obj)[0].textContent;
          }
          objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent;
          objTextMonthEndDate = $(obj).closest('.month-box').children()[0].textContent;
        } else {
          if ($('.days-btn.lunarcalendar.on-selected > p')[0]) {
            fday =$('.days-btn.lunarcalendar.on-selected > p')[0].innerText
          }
          else{
            fday = $(obj)[0].textContent;
          }
          if ($('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
            tday = $('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
          }
          else{
            tday = $('.endSelection').children('.days-btn')[0].textContent;
          }
          objTextMonthStartDate = $(obj).closest('.month-box').children()[0].textContent;
          objTextMonthEndDate = $('.endSelection').closest('.month-box').children()[0].textContent;
        }


        if (objTextMonthEndDate && objTextMonthEndDate.length > 0 && objTextMonthStartDate && objTextMonthStartDate.length > 0) {
          monthstartdate = objTextMonthStartDate.split('/')[0];
          yearstartdate = objTextMonthStartDate.split('/')[1];
          monthenddate = objTextMonthEndDate.split('/')[0];
          yearenddate = objTextMonthEndDate.split('/')[1];
          var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
          var todate = new Date(yearenddate, monthenddate - 1, tday);
          if (fromdate && todate && moment(todate).diff(fromdate, 'days') > 0) {
            if (moment(todate).diff(fromdate, "days") > 30) {
              this.presentToastwarming('Ngày nhận và trả phòng phải trong vòng 30 ngày');
              return;
            }
            var se = this;
            setTimeout(() => {
              se.modalCtrl.dismiss();
            }, 100)

            se.cin = moment(se.gf.getCinIsoDate(fromdate)).format('YYYY-MM-DD');
            se.cout = moment(se.gf.getCinIsoDate(todate)).format('YYYY-MM-DD');
            se.zone.run(() => {
              se.searchhotel.CheckInDate = se.cin;
              se.searchhotel.CheckOutDate = se.cout;
              se.datecin = new Date(se.gf.getCinIsoDate(se.cin));
              se.datecout = new Date(se.gf.getCinIsoDate(se.cout));
              se.cindisplay = moment(se.datecin).format('DD-MM');
              se.coutdisplay = moment(se.datecout).format('DD-MM');
              se.cindisplay = moment(se.datecin).format('DD-MM');
              se.coutdisplay = moment(se.datecout).format('DD-MM');
              se.nightCount = moment(se.datecout).diff( moment(se.datecin), 'days');
              //xử lý âm lịch
              se.bindlunar();
              se.getDayName(se.datecin, se.datecout);
            });
            se.gf.setCacheSearchHotelInfo({checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber});
            se.storage.set('hasChangeDate', true);
          }
        }
      }
    }
  }
  openmnu() {
    this.searchhotel.CheckInDate = this.cin;
    this.searchhotel.CheckOutDate = this.cout;
    // this.modalCtrl.dismiss();
    this.navCtrl.navigateForward('/occupancy');
  }
  search()
  {
    this.searchhotel.publicChangeInfoHotelList(1);
    if(this.searchhotel.changeInfoFromPage == 'hotellist'){
      this.navCtrl.navigateBack('/hotellist/true');
    }else {
      this.navCtrl.back();
    }
    
  }
  bindlunar() {
    var se = this;
    if(se.valueGlobal.listlunar){
      for (let i = 0; i < se.valueGlobal.listlunar.length; i++) {
        var checkdate = moment(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
        if (checkdate==se.cin) {
          se.cofdate = 1;
          if (se.valueGlobal.listlunar[i].isNameDisplay==1) {
            var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
            if (ischecklunar) {
              se.cinthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
            }
            else
            {
              se.cinthu = se.valueGlobal.listlunar[i].name
            }
          }
        }
        else{
          this.getDayName(this.datecin, this.datecout);
        }
        if (checkdate==se.cout) {
          se.cotdate = 1;
          if (se.valueGlobal.listlunar[i].isNameDisplay==1) {
            var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
            if (ischecklunar) {
              se.coutthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
            }
            else
            {
              se.coutthu = se.valueGlobal.listlunar[i].name
            }
          }
        }
        else{
          this.getDayName(this.datecin, this.datecout);
        }
      }
    }else{
      this.getDayName(this.datecin, this.datecout);
    }
    
  }
  getDayName(datecin, datecout) {
    if (!this.cinthu) {
      this.cinthu = moment(datecin).format('dddd');
      switch (this.cinthu) {
        case "Monday":
          this.cinthu = "Thứ 2"
          break;
        case "Tuesday":
          this.cinthu = "Thứ 3"
          break;
        case "Wednesday":
          this.cinthu = "Thứ 4"
          break;
        case "Thursday":
          this.cinthu = "Thứ 5"
          break;
        case "Friday":
          this.cinthu = "Thứ 6"
          break;
        case "Saturday":
          this.cinthu = "Thứ 7"
          break;
        default:
          this.cinthu = "Chủ nhật"
          break;
      }
    }
    if (!this.coutthu) {
      this.coutthu = moment(datecout).format('dddd');
      switch (this.coutthu) {
        case "Monday":
          this.coutthu = "Thứ 2"
          break;
        case "Tuesday":
          this.coutthu = "Thứ 3"
          break;
        case "Wednesday":
          this.coutthu = "Thứ 4"
          break;
        case "Thursday":
          this.coutthu = "Thứ 5"
          break;
        case "Friday":
          this.coutthu = "Thứ 6"
          break;
        case "Saturday":
          this.coutthu = "Thứ 7"
          break;
        default:
          this.coutthu = "Chủ nhật"
          break;
      }
    }
  }
  checklunar(s) {
    return s.indexOf('Mùng') >= 0;
  }
  async presentToastwarming(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }
}
