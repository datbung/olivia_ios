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
  totalPrice: number;
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
  dateDisplay
  index: number;
  checkinDate:any
  arrSkus: any;
  reCheckToken: any;
  indexSku: any = 0;
  totalRate: any;
  adult: number = 1;
  child: number = 0;
  elder: number = 0;
  constructor(public platform: Platform,public navCtrl: NavController, public zone: NgZone, public searchhotel: SearchHotel, public authService: AuthService, private http: HttpClientModule, public events:Events,
    public gf: GlobalFunction,public modalCtrl: ModalController, private pickerController: PickerController,private storage: Storage,
    public tourService: tourService,
    public valueGlobal: ValueGlobal,
    public ticketService: ticketService) {
      
      if(ticketService.itemTicketService){
        this.hasDeparture = true;
       
        this.loaddeparturedone = true;
        this.itemTicketService = this.ticketService.itemTicketService;
        
      }
      else{
        this.hasDeparture = false;
      }

        var timestamp=new Date();
        var res = timestamp.setTime(timestamp.getTime() + 1 * 24 * 60 * 60 * 1000);
        var date = new Date(res);
        var Tomorrow = moment(date).format("YYYYMMDD");
        

        if (this.searchhotel.ischeckDate) {
          this.dateDisplay=moment(this.searchhotel.CheckInDate).format('DD/MM');
          this.checkinDate=moment(this.searchhotel.CheckInDate).format('YYYY/MM/DD');
          this.ticketService.itemTicketService.AllotmentDateDisplay = moment(this.searchhotel.CheckInDate).format('DD-MM-YYYY');
         
        }else{
          var datenow=new Date();
          var res = timestamp.setTime(timestamp.getTime() + 180 * 24 * 60 * 60 * 1000);
          var date = new Date(res);
          var Tomorrow = moment(date).format("DD/MM");

          this.dateDisplay=moment(datenow).format('DD/MM') + ' - ' + Tomorrow;
          this.checkinDate=moment(datenow).format('YYYY/MM/DD');
          this.ticketService.itemTicketService.AllotmentDateDisplay = moment(datenow).format('DD-MM-YYYY');
        
        }
      this.index=0;
      this.GetDailyRatePackages();
      this.GetUserInfo();
    }
  
  ngOnInit() {
    
  }


  calculatePrice() {
    let se = this;
    if (this.itemTicketService && this.itemTicketService.skus) {
      // let totalPrice = this.itemTicketService.skus.rateAdult * this.searchhotel.adult + this.itemTicketService.skus.rateChild * this.searchhotel.child  + this.itemTicketService.skus.rateSenior * this.searchhotel.elder;
      this.zone.run(()=>{
        //this.pointbkg = Math.floor(totalPrice/100000).toFixed(0);
        this.totalPrice = this.itemTicketService.skus.totalRate;
      })
    }
   
  }

  goback() {
    this.navCtrl.pop();
  }

  book(){
    if(this.arrSkus && this.arrSkus.length==0){
      return;
    }
    this.gf.showLoading();
    this.RecheckRateBooking()
  }

  addPax(type){
    // if(!this.tourService.departuresItemList || this.tourService.departuresItemList.length == 0){
    //   return;
    // }
    // if(!this.hasDeparture){
    //   return;
    // }
    if (this.arrSkus.length>0) {
      if(type == 1){
        this.adult++;
      }else if (type == 2){
        this.child++;
      }else if (type == 3){
        this.elder++;
      }
      this.GetDailyRatePackages();
    }

  }
  removePax(type){
    // if(!this.tourService.departuresItemList || this.tourService.departuresItemList.length == 0){
    //   return;
    // }
    // if(!this.hasDeparture){
    //   return;
    // }
    if (this.arrSkus.length>0) {
      if(type == 1){
        if(this.adult==0){
          this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
          return;
        }
        if (this.child==0 && this.elder==0 && this.adult==1) {
          this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
          return;
        }
        this.adult--;
        this.GetDailyRatePackages();
       
      }else if (type == 2){
        if(this.child==0){
          this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
          return;
        }
        if (this.adult==0 && this.elder==0 && this.child==1) {
          this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
          return;
        }
        this.child--;
        this.GetDailyRatePackages();
      }else if (type == 3){
        if(this.elder<=0){
          this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
          return;
        }
        if (this.adult==0 && this.child==0 && this.elder==1) {
          this.gf.showToastWarning('Số lượng khách không hợp lệ. Vui lòng kiểm tra lại.');
          return;
        }
        this.elder--;
        this.GetDailyRatePackages();
      }
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
    let fromdate;
    if (this.searchhotel.ischeckDate) {
      fromdate = new Date(this.searchhotel.CheckInDate);
    }else{
      fromdate = new Date();
    }

    // let todate = new Date(this.searchhotel.CheckOutDate);
    let _daysConfig: DayConfig[] = [];
    // if(this.itemTicketService.dailyRatePkgs && this.itemTicketService.dailyRatePkgs.length >0) {
    //   for (let j = 0; j < this.itemTicketService.dailyRatePkgs.length; j++) {
    //     let lunarhasdeparture =  (this.valueGlobal.listlunar && this.valueGlobal.listlunar.length >0) ? this.valueGlobal.listlunar.filter((itemlunar)=>{return moment(itemlunar.date).format('YYYY-MM-DD') == this.itemTicketService.dailyRatePkgs[j].daily}) : '';
    //     //console.log(this.valueGlobal.listlunar[j]);
    //     //debugger
    //     _daysConfig.push({
    //       date: this.itemTicketService.dailyRatePkgs[j].daily,
    //       disable: false,
    //       cssClass: '',
    //       // subTitle: lunarhasdeparture && lunarhasdeparture.length >0 ? moment(lunarhasdeparture[0].date).format("DD/MM") + ': ' +lunarhasdeparture[0].name : '',
    //     })
    //   }
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
        title: "Chọn ngày",
        monthFormat: "MM YYYY",
        weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        weekStart: 1,
        closeLabel: "",
        doneLabel: "",
        step: 0,
        defaultScrollTo: fromdate,
        defaultDate: fromdate,
        daysConfig: _daysConfig,
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

        // $('.ticket-calendar-custom ion-calendar-modal').append(`<div class='div-tour-text-departure'>Ngày màu xanh lá có lịch khởi hành</div>`);

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
            se.checkinDate=moment(event.data.from).format('YYYY/MM/DD');
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
              se.searchhotel.CheckInDate = moment(fromdate).format('YYYY-MM-DD');
              se.ticketService.itemTicketService.AllotmentDateDisplay = moment(fromdate).format('DD-MM-YYYY');
              se.checkinDate=moment(fromdate).format('YYYY/MM/DD');
              // se.itemTicketService.AllotmentDateDisplay = moment(fromdate).format('DD-MM-YYYY');
              se.dateDisplay= moment(fromdate).format('DD-MM');
              // for (let i = 0; i < this.itemTicketService.dailyRatePkgs.length; i++) {
              //   const element = this.itemTicketService.dailyRatePkgs[i];
              //   element.action=false;
              //   if (element.daily==se.searchhotel.CheckInDate) {
              //     this.index=i;
              //     element.action=true;
              //   }
              // }
              this.searchhotel.ischeckDate=true;
              se.GetDailyRatePackages();
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
    this.GetDailyRatePackages();
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
   funcdate(item){

    this.checkactionDate(item);
    this.searchhotel.ischeckDate=true;
    // this.calculatePrice();
    this.GetDailyRatePackages();


   }
  checkactionDate(item) {
    this.checkinDate=moment(item.daily).format('YYYY/MM/DD');
    this.dateDisplay=moment(item.daily).format('DD/MM');
    this.searchhotel.CheckInDate = moment(item.daily).format('YYYY-MM-DD');
    // for (let i = 0; i < this.itemTicketService.dailyRatePkgs.length; i++) {
    //   const element = this.itemTicketService.dailyRatePkgs[i];
    //   element.action = false;
    //   if (element.daily == item.daily) {
    //     this.index = i;
    //     element.action = true;
    //   }
    // }
  }
   funcsku(item){
    for (let i = 0; i < this.arrSkus.length; i++) {
      const element = this.arrSkus[i];
      element.action=false;
      if (element.skuId==item.skuId) {
        this.reCheckToken=item.reCheckToken;
        this.indexSku=i;
        element.action=true;
      }
    }
    this.GetDailyRatePackages();
   }
   RecheckRateBooking(){
    let object={
      adults: this.adult,
      childs: this.child,
      seniors: this.elder,
      token: this.reCheckToken,
      tokenBooking:this.itemTicketService.skus.bookingToken,
      checkin: this.checkinDate,
      totalRate: this.itemTicketService.skus.totalRate
    }
    let headers=
    {
      'content-type': 'application/json'
    }
    this.gf.RequestApi('POST', C.urls.baseUrl.urlTicket + '/api/Booking/RecheckRateBooking', headers, object, 'ticketservice', 'RecheckRateBooking').then((data: any) => {
      if (data && data.success) {
        data.data.source=6;
        this.InitBooking(data.data);
      }
    });
   }
   GetDailyRatePackages(){
    let obj ={
      pkgId: this.ticketService.itemTicketService.id,
      checkin: this.checkinDate,
      adults: this.adult,
      childs: this.child,
      seniors: this.elder,
      // supplier: this.ticketService.experience.supplier
    }
    let headers=
    {
      'content-type': 'application/json'
    }
    this.gf.RequestApi('POST', C.urls.baseUrl.urlTicket + '/api/Detail/GetDailyRatePackages', headers, obj, 'ticketservice', 'GetDailyRatePackages').then((data: any) => {
      if (data && data.success) {
        // this.RecheckRateBooking(data.data);
        this.arrSkus=data.data.skus;
        if (this.arrSkus && this.arrSkus.length>0) {
          this.arrSkus[this.indexSku].action=true;
          this.reCheckToken= this.arrSkus[this.indexSku].reCheckToken;
          this.itemTicketService.skus=this.arrSkus[this.indexSku];
          if (!this.itemTicketService.skus.allowAdult && this.itemTicketService.skus.allowChild) {
            this.adult = 0;
            this.child = 1;
          }
          this.calculatePrice();
        }

      }else{
        alert('Lỗi request api')
      }
    })
  }
  InitBooking(object){
    let headers=
    {
      'content-type': 'application/json'
    }
    this.gf.RequestApi('POST', C.urls.baseUrl.urlTicket + '/api/Booking/InitBooking/'+this.ticketService.itemTicketService.id, headers, object, 'ticketservice', 'InitBooking').then((data: any) => {
      if (data && data.success) {
        this.ticketService.itemTicketService.objbooking=data.data;
        this.ticketService.hasAllotment = this.hasAllotment;
        this.ticketService.paymentType = 1;
        this.ticketService.totalPriceNum=this.totalPrice;
        this.ticketService.indexDetail=this.index;
        this.ticketService.skus=this.arrSkus[this.indexSku];
        this.gf.hideLoading();
        this.ticketService.adult=this.adult;
        this.ticketService.child=this.child;
        this.ticketService.elder=this.elder;
        this.navCtrl.navigateForward('/ticketadddetails');
      }
    })
  }
}
