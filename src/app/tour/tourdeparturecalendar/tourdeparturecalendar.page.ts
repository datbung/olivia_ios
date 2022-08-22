import { SearchHotel } from '../../providers/book-service';
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
/**
 * Generated class for the SearchHotelFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tourdeparturecalendar',
  templateUrl: 'tourdeparturecalendar.page.html',
  styleUrls: ['tourdeparturecalendar.page.scss'],
})
export class TourDepartureCalendarPage implements OnInit{
  totalPriceStr: number;
  hasAllotment: boolean = false;
  itemDepartureCalendar: any;
  myCalendar: HTMLIonModalElement;
  allowclickcalendar: boolean=true;
  MsgError: any;
  hasDeparture:boolean=false;
  constructor(public platform: Platform,public navCtrl: NavController, public zone: NgZone, public searchhotel: SearchHotel, public authService: AuthService, private http: HttpClientModule, public events:Events,
    public gf: GlobalFunction,public modalCtrl: ModalController, private pickerController: PickerController,
    public tourService: tourService) {
      if(!searchhotel.adult){
        searchhotel.adult = 2;
      }
      if(!searchhotel.child){
        searchhotel.child = 0;
      }
      if(tourService.itemDepartureCalendar){
        this.hasDeparture = true;
        this.itemDepartureCalendar = tourService.itemDepartureCalendar;
      }
      else{
        this.hasDeparture = false;
      }
       this.calculatePrice();
    }
  
  ngOnInit() {
    
  }

  checkTourAllotment(_date) : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      let body = { "TourId": se.tourService.tourDetailId,
      "StartDate": moment(_date).format('YYYY-MM-DD'),
      "AdultNo": se.searchhotel.adult,
      "ChildNo": se.searchhotel.child ? se.searchhotel.child :0,
      "ChildAges": se.searchhotel.child ? se.searchhotel.arrchild.map(c=>c.numage).join(',') : ""
      };
        let urlApi = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/CheckAllotmentPreBooking';
        let headers = {
          apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
          apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
        };
        se.gf.RequestApi('POST', C.urls.baseUrl.urlMobile+'/tour/api/TourApi/CheckAllotmentPreBooking', headers, body, 'touradddetails', 'CheckAllotmentPreBooking').then((data)=>{
            if(data.Status != 'Error' && data.Status != 'False'){
              this.itemDepartureCalendar = data.Response.TourRate;
              this.hasAllotment = true;
              resolve(true);
            }else{
              this.MsgError = data.Msg;
              this.hasAllotment = false;
              resolve(false);
            }
            
        })
    })
    
  }

  calculatePrice() {
    let se = this;
    if(this.itemDepartureCalendar){
      this.checkTourAllotment(this.itemDepartureCalendar.DepartureDate).then((check)=>{
        if(check){
          let totalPrice = this.itemDepartureCalendar.TotalRate;
          this.zone.run(()=>{
            this.totalPriceStr = this.gf.convertNumberToString(totalPrice);
            this.tourService.totalPrice = totalPrice;
            this.tourService.totalPriceStr = this.totalPriceStr;

            let itemmap = se.tourService.departuresItemList.filter(i => i.DepartureDate == moment(this.itemDepartureCalendar.DepartureDate).format('YYYY-MM-DD'));
                    if(itemmap && itemmap.length >0){
                     se.tourService.itemDepartureCalendar = itemmap[0];
                     se.tourService.hasDeparture = true;
                     se.tourService.DepartureDate = itemmap[0].DepartureDate;
                    }
          })
        }else if(this.tourService.itemDepartureCalendar){
          let totalPrice = ((this.tourService.itemDepartureCalendar.PriceAdultAvg || 0) * this.searchhotel.adult || 0) + ((this.tourService.itemDepartureCalendar.PriceChildAvg ||0) * this.searchhotel.child || 0)
          this.zone.run(()=>{
            this.totalPriceStr = this.gf.convertNumberToString(totalPrice);
            this.tourService.totalPrice = totalPrice;
            this.tourService.totalPriceStr = this.totalPriceStr;
          })
          se.gf.showAlertMessageOnly(se.MsgError);
        }
      });
    }else{
      let totalPrice = ((this.tourService.itemDepartureCalendar.PriceAdultAvg || 0) * this.searchhotel.adult || 0) + ((this.tourService.itemDepartureCalendar.PriceChildAvg ||0) * this.searchhotel.child || 0)
      this.zone.run(()=>{
        this.totalPriceStr = this.gf.convertNumberToString(totalPrice);
        this.tourService.totalPrice = totalPrice;
        this.tourService.totalPriceStr = this.totalPriceStr;
      })
    }
    
  }

  goback() {
    this.navCtrl.pop();
  }

  book(){
    if(!this.hasDeparture){
      return;
    }
    for (let i = 0; i < this.searchhotel.arrchild.length; i++) {
      const element = this.searchhotel.arrchild[i];
      if(!element.numage)
      {
        this.gf.showAlertMessageOnly('Vui lòng chọn tuổi trẻ em');
        return;
      }
    }
    this.tourService.hasAllotment = this.hasAllotment;
    this.tourService.paymentType = 1;
    this.navCtrl.navigateForward('/touradddetails');
  }

  addPax(type){
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
    this.calculatePrice();
  }
  removePax(type){
    if(!this.hasDeparture){
      return;
    }
    if(type == 1){
      if(this.searchhotel.adult<=1){
        this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
        return;
      }
      this.searchhotel.adult--;
      this.calculatePrice();
     
    }else{
      if(this.searchhotel.child<=0){
        this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
        return;
      }
      this.searchhotel.child--;
      this.searchhotel.arrchild.splice(this.searchhotel.arrchild.length - 1, 1);
      this.calculatePrice();
    }
  }
  async openPickupCalendar(){
    let se = this;
    if(!se.hasDeparture){
      return;
    }
    if(!se.allowclickcalendar){
      return;
    }
    
    se.allowclickcalendar = false;
    let Year=new Date().getFullYear();
    let Month=new Date().getMonth();
    let Day=new Date().getDate();
    let fromdate = new Date(this.searchhotel.CheckInDate);
    let todate = new Date(this.searchhotel.CheckOutDate);
    let _daysConfig: DayConfig[] = [];
    if(this.tourService.departures && this.tourService.departures.length >0) {
      for (let j = 0; j < this.tourService.departures.length; j++) {
        _daysConfig.push({
          date: this.tourService.departures[j],
          disable: false
        })
      }
    }
    
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
        defaultDateRange: { from: fromdate, to: todate },
        daysConfig: _daysConfig,
        to: new Date(),
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
  
              se.checkTourAllotment(fromdate).then((check)=>{
                se.zone.run(() => {
                  if(check){
                    // let itemmap = se.tourService.departuresItemList.filter(i => i.DepartureDate == moment(fromdate).format('YYYY-MM-DD'));
                    // if(itemmap && itemmap.length >0){
                    //  se.tourService.itemDepartureCalendar = itemmap[0];
                    //  se.tourService.hasDeparture = true;
                    //  se.tourService.DepartureDate = itemmap[0].DepartureDate;
                    // }
                    // se.zone.run(() => {
                    //   se.searchhotel.CheckInDate = moment(fromdate).format("YYYY-MM-DD");
                    //   se.searchhotel.cindisplay = moment(fromdate).format("DD-MM-YYYY");
                    //   se.searchhotel.CheckOutDate = moment(todate).format("YYYY-MM-DD");
                    // });

                    let totalPrice = this.itemDepartureCalendar.TotalRate;
                    this.zone.run(()=>{
                      se.searchhotel.CheckInDate = moment(fromdate).format("YYYY-MM-DD");
                      se.searchhotel.cindisplay = moment(fromdate).format("DD-MM-YYYY");
                      se.searchhotel.CheckOutDate = moment(todate).format("YYYY-MM-DD");

                      this.totalPriceStr = this.gf.convertNumberToString(totalPrice);
                      this.tourService.totalPrice = totalPrice;
                      this.tourService.totalPriceStr = this.totalPriceStr;
          
                      let itemmap = se.tourService.departuresItemList.filter(i => i.DepartureDate == moment(fromdate).format('YYYY-MM-DD'));
                              if(itemmap && itemmap.length >0){
                               se.tourService.itemDepartureCalendar = itemmap[0];
                               se.tourService.hasDeparture = true;
                               se.tourService.DepartureDate = itemmap[0].DepartureDate;
                              }
                    })
                  }else{
                    se.gf.showAlertMessageOnly(se.MsgError);
                  }
                  
                })
               })
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
   
    var columnOptions =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

    const picker = await this.pickerController.create({
      columns: this.getColumns(1, 16, columnOptions, textchild),
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

    $('.picker-wrapper.sc-ion-picker-md').append('<div class="div-button"><button (click)="getPickerValue()" ion-button round outline class="button button-done">Xong</button></div>');
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
        this.searchhotel.arrchild[i].numage = event;
        break;
      }

    }
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
    for (let i = 0; i < numOptions; i++) {
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
    for (let i = 0; i < se.searchhotel.arrchild.length; i++) {
      const element = se.searchhotel.arrchild[i];
      if(!element.numage)
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
    for (let i = 0; i < se.searchhotel.arrchild.length; i++) {
      const element = se.searchhotel.arrchild[i];
      if(!element.numage)
      {
        se.gf.showAlertMessageOnly('Vui lòng chọn tuổi trẻ em');
        return;
      }
    }
    se.tourService.hasAllotment = se.hasAllotment;
    se.tourService.paymentType = 3;
    se.navCtrl.navigateForward('/touradddetails');
    
  }
}
