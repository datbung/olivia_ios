import { SearchHotel, ValueGlobal } from '../../providers/book-service';
import { Component, NgZone,OnInit } from '@angular/core';
import { NavController, Events, Platform, ModalController, PickerController } from '@ionic/angular';
import * as request from 'request';
import { AuthService } from '../../providers/auth-service';
import { HttpClientModule } from '@angular/common/http';
import { C } from '../../providers/constants';
import { GlobalFunction } from '../../providers/globalfunction';
import { tourService } from 'src/app/providers/tourService';
import * as moment from 'moment';
import * as $ from 'jquery';
import { CalendarModal, CalendarModalOptions, DayConfig } from 'ion2-calendar';
import { Storage } from '@ionic/storage';
import { ticketService } from 'src/app/providers/ticketService';
/**
 * Generated class for the SearchHotelFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ticketservice',
  templateUrl: 'ticketservice.page.html',
  styleUrls: ['ticketservice.page.scss'],
})
export class TicketServicePage implements OnInit{
  totalPriceStr: number;
  hasAllotment: boolean = true;
  itemDepartureCalendar: any;
  myCalendar: HTMLIonModalElement;
  allowclickcalendar: boolean=true;
  MsgError: any;
  hasDeparture:boolean=false;
  infant = '<1';
  point: number=0;
  pointbkg = '';
  loaddeparturedone: boolean = false;
  itemTicketService: any;
  constructor(public platform: Platform,public navCtrl: NavController, public zone: NgZone, public searchhotel: SearchHotel, public authService: AuthService, private http: HttpClientModule, public events:Events,
    public gf: GlobalFunction,public modalCtrl: ModalController, private pickerController: PickerController,private storage: Storage,
    public tourService: tourService,
    public valueGlobal: ValueGlobal,
    public ticketService: ticketService,) {
      if(!searchhotel.adult){
        searchhotel.adult = 2;
      }
      if(!searchhotel.child){
        searchhotel.child = 0;
      }
      if(ticketService.itemTicketService){
        this.hasDeparture = true;
       
        this.loaddeparturedone = true;
        this.itemTicketService = this.ticketService.itemTicketService;
      }
      else{
        this.hasDeparture = false;
      }
       this.calculatePrice(0);
       this.GetUserInfo();
    }
  
  ngOnInit() {
    
  }

  checkTourAllotment(_date) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      let body = { "TourId": se.tourService.tourDetailId,
      "date": moment(_date).format('YYYY-MM-DD'),
      "adult": se.searchhotel.adult,
      "child": se.searchhotel.child ? se.searchhotel.child :0,
      "childAges": se.searchhotel.child ? se.searchhotel.arrchild.map(c=>c.numage).join(',') : ""
      };
        //let urlApi = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/CheckAllotmentPreBooking';
        let headers = {
          apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
          apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
        };
        se.gf.RequestApi('GET', C.urls.baseUrl.urlMobile+`/tour/api/TourApi/GetMercuriusTourPrice?TourId=${se.tourService.tourDetailId}&date=${moment(_date).format('YYYY-MM-DD')}&adult=${se.searchhotel.adult}&child=${se.searchhotel.child ? se.searchhotel.child :0}&childAges=${se.searchhotel.child ? se.searchhotel.arrchild.map(c=>c.numage).join(',') : ""}`, headers, body, 'tourdeparturecalendar', 'GetMercuriusTourPrice').then((data)=>{
            if(data.Status != 'Error' && data.Status != 'ER' && data.Status != 'False'){
              this.itemDepartureCalendar = data.Response.TourRate;
             
              this.zone.run(()=>{
                if(this.itemDepartureCalendar.RateChildAvg){
                  this.itemDepartureCalendar.PriceChildAvg = this.itemDepartureCalendar.RateChildAvg;
                  this.itemDepartureCalendar.PriceChildAvgStr = this.gf.convertNumberToString(this.itemDepartureCalendar.RateChildAvg.toFixed(0));
                  this.itemDepartureCalendar.PriceAdultAvgStr = this.gf.convertNumberToString(this.itemDepartureCalendar.RateAdultAvg.toFixed(0));
                  this.tourService.itemDepartureCalendar = this.itemDepartureCalendar;
                }
                this.hasAllotment = this.itemDepartureCalendar.Status == 'AL';
                this.tourService.hasAllotment = this.itemDepartureCalendar.Status == 'AL';
              })
              
              resolve(true);
            }else{
              this.MsgError = data.Response.MSG;
              this.zone.run(()=>{
                this.hasAllotment = false;
                this.tourService.hasAllotment = false;
              })
              resolve(false);
            }
            
        })
    })
    
  }

  calculatePrice(isShowWarning) {
    let se = this;
    let totalPrice = this.itemTicketService.PriceAdultAvg * this.searchhotel.adult + this.itemTicketService.PriceChildAvg * this.searchhotel.child;
          this.zone.run(()=>{
            //this.pointbkg = Math.floor(totalPrice/100000).toFixed(0);
            this.totalPriceStr = this.gf.convertNumberToString(totalPrice);
          })
    // if(this.itemDepartureCalendar){
    //   let _date = this.itemDepartureCalendar.DepartureDate || this.itemDepartureCalendar.AllotmentDate;
    //   se.searchhotel.CheckInDate =  moment(_date).format('YYYY-MM-DD');
    //   this.checkTourAllotment(_date).then((check)=>{
    //     if(check){
    //       this.tourService.itemDepartureCalendar = this.itemDepartureCalendar;
    //       let totalPrice = this.itemDepartureCalendar.TotalRate;
    //       this.zone.run(()=>{
    //         this.pointbkg = Math.floor(totalPrice/100000).toFixed(0);
    //         this.totalPriceStr = this.gf.convertNumberToString(totalPrice);
    //         this.tourService.totalPrice = totalPrice;
    //         this.tourService.totalPriceStr = this.totalPriceStr;
           
    //         if(!se.tourService.itemDepartureCalendar){
    //           let itemmap = se.tourService.departuresItemList.filter(i => i.DepartureDate == moment(_date).format('YYYY-MM-DD'));
    //           if(itemmap && itemmap.length >0){
    //            se.tourService.itemDepartureCalendar = itemmap[0];
    //            se.tourService.hasDeparture = true;
    //            se.tourService.DepartureDate = itemmap[0].DepartureDate;
               
    //           }
    //         }else {
    //           this.itemDepartureCalendar.AllotmentDateDisplay = moment(_date).format('DD-MM-YYYY');
    //           this.tourService.itemDepartureCalendar.AllotmentDateDisplay = moment(_date).format('DD-MM-YYYY');

    //         }
    //         if(this.itemDepartureCalendar.RateChildAvg){
    //           this.itemDepartureCalendar.PriceChildAvg = this.itemDepartureCalendar.RateChildAvg;
    //           this.itemDepartureCalendar.PriceChildAvgStr = this.gf.convertNumberToString(this.itemDepartureCalendar.RateChildAvg.toFixed(0));
    //         }
    //         if(this.itemDepartureCalendar.RateAdultAvg) {
    //           this.itemDepartureCalendar.PriceAdultAvgStr = this.gf.convertNumberToString(this.itemDepartureCalendar.RateAdultAvg.toFixed(0));
    //         }
            

    //       })
    //     }else if(this.tourService.itemDepartureCalendar){
    //       let totalPrice = ((this.tourService.itemDepartureCalendar.RateAdultAvg || (this.tourService.itemDepartureCalendar.PriceAdultAvg ||0)) * this.searchhotel.adult || 0) + ((this.tourService.itemDepartureCalendar.RateChildAvg ||0) * this.searchhotel.child || 0)
    //       this.zone.run(()=>{
    //         this.pointbkg = Math.floor(totalPrice/100000).toFixed(0);
    //         this.totalPriceStr = this.gf.convertNumberToString(totalPrice);
    //         this.tourService.totalPrice = totalPrice;
    //         this.tourService.totalPriceStr = this.totalPriceStr;
    //         this.itemDepartureCalendar.AllotmentDateDisplay = moment(_date).format('DD-MM-YYYY');
    //         this.tourService.itemDepartureCalendar.AllotmentDateDisplay = moment(_date).format('DD-MM-YYYY');

    //         if(this.itemDepartureCalendar.RateChildAvg){
    //           this.itemDepartureCalendar.PriceChildAvg = this.itemDepartureCalendar.RateChildAvg;
    //           this.itemDepartureCalendar.PriceChildAvgStr = this.gf.convertNumberToString(this.itemDepartureCalendar.RateChildAvg.toFixed(0));
    //         }
    //         if(this.itemDepartureCalendar.RateAdultAvg) {
    //           this.itemDepartureCalendar.PriceAdultAvgStr = this.gf.convertNumberToString(this.itemDepartureCalendar.RateAdultAvg.toFixed(0));
    //         }
    //       })
    //       if(isShowWarning){
    //         se.gf.showAlertMessageOnly(se.MsgError);
    //       }
    //       //
    //     }
    //   });
    // }else{
    //   if(this.tourService.itemDepartureCalendar){
    //     let totalPrice = ((this.tourService.itemDepartureCalendar.RateAdultAvg || (this.tourService.itemDepartureCalendar.PriceAdultAvg ||0)) * this.searchhotel.adult || 0) + ((this.tourService.itemDepartureCalendar.RateChildAvg ||0) * this.searchhotel.child || 0)
    //     this.zone.run(()=>{
    //       this.pointbkg = Math.floor(totalPrice/100000).toFixed(0);
    //       this.totalPriceStr = this.gf.convertNumberToString(totalPrice);
    //       this.tourService.totalPrice = totalPrice;
    //       this.tourService.totalPriceStr = this.totalPriceStr;
    //     })
    //   }else{
    //     this.zone.run(()=>{
    //       this.pointbkg = '';
    //       this.totalPriceStr = 0;
    //       this.tourService.totalPrice = 0;
    //       this.tourService.totalPriceStr = 0;
    //     })
    //   }
      
    // }
    
  }

  goback() {
    //this.tourService.publicScrollToDepartureDiv(1);
    this.navCtrl.pop();
  }

  book(){
    // if(!this.tourService.departuresItemList || this.tourService.departuresItemList.length == 0){
    //   return;
    // }
    // if(!this.hasDeparture){
    //   return;
    // }
    for (let i = 0; i < this.searchhotel.arrchild.length; i++) {
      const element = this.searchhotel.arrchild[i];
      if(!element.text)
      {
        this.gf.showAlertMessageOnly('Vui lòng chọn tuổi trẻ em');
        return;
      }
    }
    this.tourService.hasAllotment = this.hasAllotment;
    this.tourService.paymentType = 1;
    this.navCtrl.navigateForward('/ticketadddetails');
  }

  addPax(type){
    if(!this.tourService.departuresItemList || this.tourService.departuresItemList.length == 0){
      return;
    }
    if(!this.hasDeparture){
      return;
    }
    if(type == 1){
      this.searchhotel.adult++;
    }else{
      this.searchhotel.child++;
      let arr = { text: 'Trẻ em' + ' ' + this.searchhotel.child, numage: "7" }
      this.searchhotel.arrchild.push(arr);
    }
    this.calculatePrice(1);
  }
  removePax(type){
    if(!this.tourService.departuresItemList || this.tourService.departuresItemList.length == 0){
      return;
    }
    if(!this.hasDeparture){
      return;
    }
    if(type == 1){
      if(this.searchhotel.adult<=1){
        this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
        return;
      }
      this.searchhotel.adult--;
      this.calculatePrice(1);
     
    }else{
      if(this.searchhotel.child<=0){
        this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
        return;
      }
      this.searchhotel.child--;
      this.searchhotel.arrchild.splice(this.searchhotel.arrchild.length - 1, 1);
      this.calculatePrice(1);
    }
  }
  async openPickupCalendar(){
    let se = this;
    if(!this.ticketService.itemTicketService){
      return;
    }
    
    se.allowclickcalendar = false;
    let Year=new Date().getFullYear();
    let Month=new Date().getMonth();
    let Day=new Date().getDate();
    let fromdate = new Date(this.searchhotel.CheckInDate);
    let todate = new Date(this.searchhotel.CheckOutDate);
    let _daysConfig: DayConfig[] = [];
    // if(this.tourService.departures && this.tourService.departures.length >0) {
    //   for (let j = 0; j < this.tourService.departures.length; j++) {
    //     let lunarhasdeparture =  (this.valueGlobal.listlunar && this.valueGlobal.listlunar.length >0) ? this.valueGlobal.listlunar.filter((itemlunar)=>{return moment(itemlunar.date).format('YYYY-MM-DD') == moment(this.tourService.departures[j]).format('YYYY-MM-DD') }) : '';
    //     //console.log(this.valueGlobal.listlunar[j]);
    //     //debugger
    //     _daysConfig.push({
    //       date: this.tourService.departures[j],
    //       disable: false,
    //       cssClass: 'days-allotment',
    //       subTitle: lunarhasdeparture && lunarhasdeparture.length >0 ? moment(lunarhasdeparture[0].date).format("DD/MM") + ': ' +lunarhasdeparture[0].name : '',
    //     })
    //   }

    //   let minDeparture = this.tourService.departures[0];
    //   var minmonth = moment(minDeparture).format('MM');
    //   var maxDeparture = this.tourService.departures[this.tourService.departures.length-1];
    //   var maxmonth = moment(maxDeparture).format('MM');
    // }

    // for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
    //   _daysConfig.push({
    //     date: this.valueGlobal.listlunar[j].date,
    //     subTitle: moment(this.valueGlobal.listlunar[j].date).format("DD/MM") + ': ' +this.valueGlobal.listlunar[j].name,
    //     cssClass: 'lunarcalendar'
    //  })
    // }
    //debugger
      const options: CalendarModalOptions = {
        pickMode: "single",
        title: "Chọn ngày khởi hành",
        monthFormat: "MM YYYY",
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
        cssClass: 'ticket-calendar-custom',
      });
      this.myCalendar.present().then(() => {
        se.allowclickcalendar = true;
        $(".days-btn").click(e => this.clickedElement(e));
       
        $('.ticket-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/imgs/icon_back.svg' ></div>");
        //add event close header
        $('.ticket-calendar-custom .header-img-close').click((e => this.closecalendar()));

        // $('.tour-calendar-custom ion-calendar-modal').append(`<div class='div-tour-text-departure'>Ngày màu xanh lá có lịch khởi hành</div>`);

        let divmonthtitle =  $('.month-title');
        if(divmonthtitle && divmonthtitle.length >0){
          for (let index = 0; index < divmonthtitle.length; index++) {
            $(divmonthtitle[index])[0].innerHTML = 'Tháng ' + $(divmonthtitle[index])[0].innerHTML;
          }
        }

        //Custom ngày lễ
        let divmonth = $('.month-box');
        if(divmonth && divmonth.length >0){
          for (let index = 0; index < divmonth.length; index++) {
            const em = divmonth[index];
            $('#'+em.id).addClass('cls-animation-calendar');
              // let divsmall = $('#'+em.id+' small');
              // if(divsmall && divsmall.length >0){
              //   $('#'+em.id).append("<div class='div-month-text-small'></div>");
                
              //   for (let i = 0; i < divsmall.length; i++) {
              //     const es = divsmall[i];
              //     let arres = es.innerHTML.split(':');
              //     $('#'+em.id+' .div-month-text-small').append("<div class='div-border-small sm-"+em.id+'-'+i+"'></div>");
              //     if(arres && arres.length >1){
              //       es.innerHTML = "<span class='text-red'>"+arres[0]+"</span>: "+"<span class='text-black'>"+arres[1]+"</span>";
              //     }
              //     $('.sm-'+em.id+'-'+i).append(es);
              //   }
              // }
          }
        }
      });

      const event: any = await this.myCalendar.onDidDismiss();
      const date = event.data;
      if (event.data) {
         se.zone.run(() => {
           se.searchhotel.CheckInDate = moment(event.data.from).format('YYYY-MM-DD');
           se.searchhotel.datecin = new Date(event.data.from);
           se.searchhotel.cindisplay = moment(se.searchhotel.datecin).format("DD-MM-YYYY");
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
              se.ticketService.itemTicketService.AllotmentDateDisplay = moment(fromdate).format('DD-MM-YYYY');
              se.itemTicketService.AllotmentDateDisplay = moment(fromdate).format('DD-MM-YYYY');
              // se.checkTourAllotment(fromdate).then((check)=>{
              //     se.loaddeparturedone = true;
              //     if(check){
              //       let totalPrice = se.itemDepartureCalendar.TotalRate;
              //         se.zone.run(()=>{
              //           se.searchhotel.CheckInDate = moment(fromdate).format("YYYY-MM-DD");
              //           se.searchhotel.cindisplay = moment(fromdate).format("DD-MM-YYYY");
              //           se.searchhotel.CheckOutDate = moment(todate).format("YYYY-MM-DD");

              //           se.totalPriceStr = se.gf.convertNumberToString(totalPrice);
              //           se.tourService.totalPrice = totalPrice;
              //           se.tourService.totalPriceStr = se.totalPriceStr;
              //           se.itemDepartureCalendar.AllotmentDateDisplay = moment(fromdate).format('DD-MM-YYYY');
              //             let itemmap = se.tourService.departuresItemList.filter(i => i.DepartureDate == moment(fromdate).format('YYYY-MM-DD'));
              //             if(itemmap && itemmap.length >0){
              //               se.tourService.itemDepartureCalendar = itemmap[0];
              //               se.tourService.hasDeparture = true;
              //               se.tourService.DepartureDate = itemmap[0].DepartureDate;
                           
              //                 se.tourService.itemDepartureCalendar.PriceChildAvg = se.itemDepartureCalendar.RateChildAvg;
              //                 se.tourService.itemDepartureCalendar.RateChildAvg = se.itemDepartureCalendar.RateChildAvg;
              //               if(se.itemDepartureCalendar.RateChildAvg){
              //                 se.tourService.itemDepartureCalendar.PriceChildAvgStr = se.gf.convertNumberToString(se.itemDepartureCalendar.RateChildAvg.toFixed(0));
              //               }
                            
              //               se.tourService.itemDepartureCalendar.TotalRate = se.itemDepartureCalendar.TotalRate;
                            
              //             }
              //       })
              //     }
              //     else{
              //       se.itemDepartureCalendar.AllotmentDateDisplay = moment(fromdate).format('DD-MM-YYYY');
              //       se.tourService.DepartureDate =  moment(fromdate).format('YYYY-MM-DD');
              //       se.tourService.itemDepartureCalendar.AllotmentDateDisplay = moment(fromdate).format('DD-MM-YYYY');
              //       se.gf.showAlertMessageOnly(se.MsgError);
                  
              //     }
                  
               
              //  })
            }
          }
        }
      }
    }
  closecalendar(){
    this.modalCtrl.dismiss();
  }
  async selectAge(textchild){
    var se =this;
   
    var columnOptions =['<1','1','2','3','4','5','6','7','8','9','10','11'];

    const picker = await this.pickerController.create({
      columns: this.getColumns(1, 11, columnOptions, textchild),
      cssClass: 'action-sheets-select-age',
      buttons: [
        {
          text: textchild,
          cssClass: 'picker-header',
          handler: (value) => {
           
           return false;
          }
        }
      ],
    });

    if($('.picker-wrapper.sc-ion-picker-ios') && $('.picker-wrapper.sc-ion-picker-ios').length >0){
      $('.picker-wrapper.sc-ion-picker-ios').append('<div class="div-button"><button (click)="getPickerValue()" ion-button round outline class="button button-done">Xong</button></div>');
    }else if($('.picker-wrapper.sc-ion-picker-md') && $('.picker-wrapper.sc-ion-picker-md').length >0){
      $('.picker-wrapper.sc-ion-picker-md').append('<div class="div-button"><button (click)="getPickerValue()" ion-button round outline class="button button-done">Xong</button></div>');
    }
    
    $('.action-sheets-select-age .button-done').on('click', ()=>{
      let value = $('.picker-opt.picker-opt-selected')[0].innerText;
      se.selectclick(value, textchild);
      picker.dismiss();
    })
    await picker.present();
  }

  selectclick(event, text) {
    for (let i = 0; i < this.searchhotel.arrchild.length; i++) {
      if (this.searchhotel.arrchild[i].text == text) {
        this.searchhotel.arrchild[i].numage = (event == "<1" ? 0 : event);
        break;
      }

    }
    this.calculatePrice(1);
  }

  getColumns(numColumns, numOptions, columnOptions, textchild) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: textchild,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }

    return columns;
  }

  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i <= numOptions; i++) {
      options.push({
        text: columnOptions[i],
        value: i
      })
    }

    return options;
  }
  requestBook(){
    let se = this;
    if(!se.hasDeparture){
      return;
    }
    if(!this.tourService.departuresItemList || this.tourService.departuresItemList.length == 0){
      return;
    }
    for (let i = 0; i < se.searchhotel.arrchild.length; i++) {
      const element = se.searchhotel.arrchild[i];
      if(!element.text)
      {
        se.gf.showAlertMessageOnly('Vui lòng chọn tuổi trẻ em');
        return;
      }
    }
    se.tourService.hasAllotment = se.hasAllotment;
    se.tourService.paymentType = 2;
    se.navCtrl.navigateForward('/touradddetails');
  }
  requestQuote() {
    let se = this;
    if(!this.tourService.departuresItemList || this.tourService.departuresItemList.length == 0){
      return;
    }
    for (let i = 0; i < se.searchhotel.arrchild.length; i++) {
      const element = se.searchhotel.arrchild[i];
      if(!element.text)
      {
        se.gf.showAlertMessageOnly('Vui lòng chọn tuổi trẻ em');
        return;
      }
    }
    se.tourService.hasAllotment = se.hasAllotment;
    se.tourService.paymentType = 3;
    se.navCtrl.navigateForward('/touradddetails');
    
  }

  GetUserInfo() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "roomdetailreview";
            error.func = "GetUserInfo";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } 
          else if (response.statusCode == 401) {
            se.storage.get('jti').then((memberid) => {
                se.storage.get('deviceToken').then((devicetoken) => {
                    se.gf.refreshToken(memberid, devicetoken).then((token) => {
                        se.storage.remove('auth_token').then(() => {
                            se.storage.set('auth_token', token);
                        })
                        setTimeout(() => {
                            se.GetUserInfo();
                        }, 300)
                    });

                })
            })
          }
          else {
            if (body) {
              var data = JSON.parse(body);
              se.zone.run(() => {
                
                if (data.point) {
                  se.point = data.point * 1000;
                }
              })
            }

          }
        });
      }
    })
  }

  showTicketServiceDetail(itemService) {
    if(itemService){
      this.tourService.itemTicketService = itemService;
      this.navCtrl.navigateForward('/ticketservicedetail');
    }
   }
}
