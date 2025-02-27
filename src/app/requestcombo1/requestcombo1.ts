import { Component,NgZone, Renderer,OnInit } from '@angular/core';
import { ModalController, Platform, AlertController, ToastController, NavController, Events } from '@ionic/angular';
import { SearchHotel, ValueGlobal, Bookcombo } from '../providers/book-service';
import * as moment from 'moment';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import {PickupCalendarPage} from '../pickup-calendar/pickup-calendar';
import {OccupancyPage} from '../occupancy/occupancy';
import { OverlayEventDetail } from '@ionic/core';
import * as $ from 'jquery';

import {
  CalendarModal,
  CalendarModalOptions,
  CalendarOptions,
  DayConfig,
  CalendarResult
} from 'ion2-calendar';
import { ConfirmemailPage } from '../confirmemail/confirmemail.page';
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-requestcombo1',
  templateUrl: 'requestcombo1.html',
  styleUrls: ['requestcombo1.scss'],
})

export class RequestCombo1Page implements OnInit{
  public datecin: Date;
  public datecout: Date;
  public cindisplay; cin; cout; adult = 2; child = 0;
  public customerName = '';
  public mobile = '';
  public usermail = '';
  public location = 'SGN';
  public mobilevalidate = true;
  public emailvalidate = true;
  public isFlashSaleCombo = false;
  arrtransportDepartTime;arrtransportReturnTime;transportDepartTime;transportReturnTime;ischeck
  myCalendar: any;
  checkchangeemail=false;
  allowclickcalendar: boolean = true;
  inputtext: boolean = false;
  listPaxSuggestByMemberId= [];
  listpaxhint: any = [];
  hidepaxhint: boolean = false;
  currentSelectPax: any;
    constructor(public toastCtrl: ToastController,private alertCtrl: AlertController, public zone: NgZone, public modalCtrl: ModalController,
      public storage: Storage, public platform: Platform, public bookCombo: Bookcombo, public value: ValueGlobal, 
      public searchhotel: SearchHotel, public valueGlobal: ValueGlobal,private renderer:Renderer,public navCtrl: NavController,
      public gf: GlobalFunction,
      private fb: Facebook) {
    }

    ngOnInit(){
      var se = this;
      if (se.bookCombo.transportDepartTime) {
        se.arrtransportDepartTime=se.bookCombo.transportDepartTime.split('|');
        se.arrtransportReturnTime=se.bookCombo.transportReturnTime.split('|');
        se.transportDepartTime=se.arrtransportDepartTime[0];
        se.transportReturnTime=se.arrtransportReturnTime[0];
        this.ischeck=true;
      }
      else
      {
        this.ischeck=false;
      }
      se.storage.get('email').then(email => {
       se.usermail = email;
      });
      se.storage.get('username').then(name => {
       se.customerName = name;
      });
      se.storage.get('infocus').then(infocus => {
        if(infocus){
          se.mobile = infocus.phone;
        }
       })
     if (se.searchhotel.adult) {
       se.adult = se.searchhotel.adult;
     }
     if (se.searchhotel.child) {
       se.child = se.searchhotel.child;
     }
    if (se.searchhotel.CheckInDate) {
       se.cin = se.searchhotel.CheckInDate;
       se.datecin = new Date(se.searchhotel.CheckInDate);
       se.cindisplay = moment(se.datecin).format('DD-MM-YYYY');
       se.cin = moment(se.datecin).format('YYYY-MM-DD');
       se.datecout = new Date(se.searchhotel.CheckOutDate);
       se.cout = moment(se.datecout).format('YYYY-MM-DD');
     } else {
       se.cin = new Date();
       var rescin = se.cin.setTime(se.cin.getTime() + (24 * 60 * 60 * 1000));
       var datein = new Date(rescin);
       se.cin = moment(datein).format('YYYY-MM-DD');
       se.cindisplay = moment(datein).format('DD-MM-YYYY');
       se.datecin = new Date(rescin);
     }
     se.isFlashSaleCombo = se.bookCombo.isFlashSale;
     //Xử lý nút back của dt
     se.platform.ready().then(() => {
      se.platform.backButton.subscribe(() => {
        // code that is executed when the user pressed the back button
        se.navCtrl.back();
      })
     })
     //google analytic
     se.gf.googleAnalytionCustom('add_to_cart',{item_category:'requestcombo' , item_name: se.bookCombo.HotelName, item_id: se.bookCombo.HotelCode, start_date: se.cin, end_date: se.cout, value: (se.bookCombo && se.bookCombo.ComboRoomPrice) ? Number(se.bookCombo.ComboRoomPrice.toString().replace(/\./g, '').replace(/\,/g, '')) : '' ,currency: "VND"});

    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, {'fb_content_type': 'hotel'  ,'fb_content_id': se.bookCombo.HotelCode,'fb_num_items': 1, 'fb_value': se.gf.convertNumberToDouble(se.bookCombo.ComboRoomPrice) ,  'fb_currency': 'VND' , 
    'checkin_date': se.searchhotel.CheckInDate ,'checkout_date ': se.searchhotel.CheckOutDate,'num_adults': se.searchhotel.adult,'num_children': (se.searchhotel.child ? se.searchhotel.child : 0),
    'value': se.gf.convertNumberToDouble(se.bookCombo.ComboRoomPrice) ,  'currency': 'VND'  }, se.gf.convertNumberToFloat(se.bookCombo.ComboRoomPrice) );
    
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile+'/api/Dashboard/GetListNameHotel?memberid='+jti, {},{}, 'flightadddetails', 'GetListName').then((data)=>{
          if(data && data.length >0){
            this.listPaxSuggestByMemberId = [...data];
          }
        })
      }
    })
  }

    ionViewDidLoad(){
     
    }

    async handleSplashScreen(): Promise<void> {
      try {
        // wait for App to finish loading
        await this.platform.ready()
      } catch (error) {
        if (error) {
          C.writeErrorLog(error,null);
          throw new Error(error)
        };
      }
      const splash = document.getElementById('splash-screen');
      if (splash) {
        splash.style.opacity = '0';
        setTimeout(() => { splash.remove() }, 300);
      }
  
    }
    dismiss(){
      this.modalCtrl.dismiss();
    }
    
    sendRequest() {
      this.checkchangeemail=false;
      if(this.customerName && this.customerName != ""){
         //validate mail
         if(!this.validateEmail(this.usermail) || !this.usermail || !this.gf.checkUnicodeCharactor(this.usermail)){
          this.presentToastEmail();
          return;
        }
        else if (this.usermail) {
          var checkappleemail=(this.usermail.includes("appleid") || this.usermail.includes('vivumember.info'));
          if (checkappleemail) {
            this.checkchangeemail=true;
            this.showConfirmEmail();
          }
        }
        if (!this.checkchangeemail) {
          this.postapi();
        }
      }else{
        //Set lại focus cho input
        this.setInputFocus("cusName");
      }
      //google analytic
      this.gf.googleAnalytion('requestcombo','sendrequest','');
    }
    postapi()
    {
      //Gửi yêu cầu
      //Validate số điện thoại
      var se = this;
      if(this.mobile.length >0 && !this.filterPhone(this.mobile)){
        this.mobilevalidate = false;
        this.presentToast('Số điện thoại không hợp lệ. Vui lòng nhập lại.');
        this.setInputFocus("cusMobile");
        return;
      }else if(this.filterPhone(this.mobile)){
        this.mobilevalidate= true;
      }
      //Validate email
      if(!this.filterEmail(this.usermail)){
        this.emailvalidate = false;
        this.setInputFocus("cusEmail");
        return;
      }else if(this.filterEmail(this.usermail)){
        this.emailvalidate = true;
      }
     
      var transportDepartTime;
      var transportReturnTime;
      if (this.transportDepartTime) {
        transportDepartTime=this.transportDepartTime.trim();
      }
      if (this.transportReturnTime) {
        transportReturnTime=this.transportReturnTime.trim();
      }
      var options;
      var form = "";
      var urlstr = "";
      if(this.bookCombo.isFlashSale){
        form = JSON.stringify({
          HotelId: this.bookCombo.Hotelid,
          HotelName: this.bookCombo.HotelName,
          RegionId: this.bookCombo.RegionId,
          RegionName: "",
          CheckIn: this.cin,
          CheckOut: this.cout,
          CustomerName: this.customerName,
          Email: this.usermail,
          Phone: this.mobile,
          RequestOther: "",
          Avatar: this.bookCombo.Avatar,
          Address: this.bookCombo.Address,
          Adult: this.searchhotel.adult,
          child:this.searchhotel.child,
          ChildAgeStr: "",
          Troom: this.bookCombo.roomNb,
          UrlBookBack: "",
          HotelLink: this.bookCombo.HotelLink,
          RoomData: null,
          Markup: "0",
          Username: 'kmudivivu',
          employeeKey: '',
          TPDepartTime:transportDepartTime,
          TPReturnTime:transportReturnTime,
          Source: 6,
          });
          urlstr = C.urls.baseUrl.urlContracting + '/gui-yeu-cau-gia-vexe-deal';
      }
      // options = {
      // method: 'POST',
      // url: urlstr,
      // timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      // headers:{'content-type':  'application/x-www-form-urlencoded; charset=UTF-8'},
      // form
      // };
      options = {
        'method': 'POST',
        'url': urlstr,
        'headers': {
          'Content-Type': 'application/json'
        },
        body: form
      };
      request(options, function (error, response, body) {
        if(response.statusCode != 200){
          var objError ={
              page: "requestcombo",
              func: "sendRequest",
              message : response.statusMessage,
              content : response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
          C.writeErrorLog(objError,response);
        }
        if (error) {
          error.page="requestcombo";
          error.func="sendRequest";
          error.param= JSON.stringify(options);
          C.writeErrorLog(error,response);
        }else{
          var data = JSON.parse(body);
          if(data.success){
              se.gf.googleAnalytionCustom('purchase',{items: [{ item_category:'requestcombo' , item_name: se.bookCombo.HotelName, item_id: se.bookCombo.HotelCode, start_date: se.cin, end_date: se.cout,origin: se.location, destination: se.bookCombo.ComboDetail ? se.bookCombo.ComboDetail.arrivalCode : '' }], value: se.gf.convertNumberToDouble(se.bookCombo.ComboRoomPrice) ,currency: "VND"});

              se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'hotel'  ,'fb_content_id': se.bookCombo.HotelCode,'fb_num_items': 1, 'fb_value': se.gf.convertNumberToDouble(se.bookCombo.ComboRoomPrice) ,  'fb_currency': 'VND' , 
              'checkin_date': se.searchhotel.CheckInDate ,'checkout_date ': se.searchhotel.CheckOutDate,'num_adults': se.searchhotel.adult,'num_children': (se.searchhotel.child ? se.searchhotel.child : 0),
              'value': se.gf.convertNumberToDouble(se.bookCombo.ComboRoomPrice) ,  'currency': 'VND'  }, se.gf.convertNumberToFloat(se.bookCombo.ComboRoomPrice) );

              se.presentAlert('Gửi yêu cầu thành công','Báo giá sẽ được gửi tới email của quý khách.');
              //se.gf.googleAnalytion('requestcombo','ecommerce_purchase',se.bookCombo.tileComboShort+'|'+se.bookCombo.HotelCode+'|'+se.cin+'|'+se.cout+'|'+se.adult+'|'+se.child +'|'+ se.searchhotel.roomnumber);
              setTimeout(()=> {
                se.modalCtrl.dismiss();
              },200);
           
          }else{
            se.presentAlert('Gửi yêu cầu không thành công','Vui lòng kiểm tra lại thông tin trước khi gửi.')
          }
          
        }
        
      })
    }
    setInputFocus(name){
      const element = document.getElementById(name);
      this.renderer.invokeElementMethod(element, 'focus', []);
    }

    async openmnu() {
        this.gf.setParams(true,'requestcombo');
        const modal: HTMLIonModalElement =
           await this.modalCtrl.create({
              component: OccupancyPage
        })
        modal.present();
        var se = this;
        modal.onDidDismiss().then((data: OverlayEventDetail) => {
          let self = this;
          self.zone.run(()=>{
            if (self.searchhotel.adult) {
              self.adult = self.searchhotel.adult;
            }
            if (self.searchhotel.child) {
              self.child = self.searchhotel.child;
            }
          })
        })
    }

    async clickedElement(e: any) {
      var obj:any = e.currentTarget;
      if($(obj.parentNode).hasClass('endSelection') || $(obj.parentNode).hasClass('startSelection')){
        if(this.modalCtrl){
          let fday:any;
          let tday:any;
          var monthenddate:any;
          var yearenddate:any;
          var monthstartdate:any;
          var yearstartdate:any;
          var objTextMonthEndDate: any;
          var objTextMonthStartDate: any;
          var se = this;
          if($(obj.parentNode).hasClass('endSelection')){
            fday= $('.on-selected')[0].textContent;
            tday= $(obj)[0].textContent;

            objTextMonthStartDate = $('.on-selected').closest('.month-box').children()[0].textContent;
            objTextMonthEndDate = $(obj).closest('.month-box').children()[0].textContent;
          }else{
            fday = $(obj)[0].textContent;
            tday = $('.endSelection').children('.days-btn')[0].textContent;

            objTextMonthStartDate = $(obj).closest('.month-box').children()[0].textContent;
            objTextMonthEndDate = $('.endSelection').closest('.month-box').children()[0].textContent;
          }
          
          
          if(objTextMonthEndDate && objTextMonthEndDate.length >0 && objTextMonthStartDate && objTextMonthStartDate.length >0){
            monthstartdate = objTextMonthStartDate.split('/')[0];
            yearstartdate = objTextMonthStartDate.split('/')[1];
            monthenddate = objTextMonthEndDate.split('/')[0];
            yearenddate = objTextMonthEndDate.split('/')[1];
            var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
            var todate = new Date(yearenddate, monthenddate - 1, tday);
            if(fromdate && todate && moment(todate).diff(fromdate,'days') > 0){
              if (moment(todate).diff(fromdate, "days") > 30) {
                this.presentToastwarming('Ngày nhận và trả phòng phải trong vòng 30 ngày');
                return;
              }
              setTimeout(()=>{
                se.modalCtrl.dismiss();
              },50)
                se.searchhotel.CheckInDate = moment(fromdate).format('YYYY-MM-DD');
                se.searchhotel.CheckOutDate = moment(todate).format('YYYY-MM-DD');
                se.bookCombo.CheckInDate = moment(fromdate).format('YYYY-MM-DD');
                se.bookCombo.CheckOutDate = moment(todate).format('YYYY-MM-DD');
                se.zone.run(()=>{
                  se.cin = se.searchhotel.CheckInDate;
                  se.cout = se.searchhotel.CheckOutDate;
                  se.datecin = new Date(se.searchhotel.CheckInDate);
                  se.datecout = new Date(se.searchhotel.CheckOutDate);
                  se.cindisplay = moment(se.datecin).format('DD-MM-YYYY');
                })
                se.gf.setCacheSearchHotelInfo({checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber});
                return true;
            }
            
            
          }
        }
      }
    }
    closecalendar(){
      this.modalCtrl.dismiss();
    }

    async openPickupCalendar() {
      if(!this.allowclickcalendar){
        return;
      }
      this.allowclickcalendar = false;
        let fromdate = new Date();
        let todate = new Date();
      if(this.bookCombo.CheckInDate && this.bookCombo.CheckOutDate){
        fromdate = new Date(this.bookCombo.CheckInDate);
        todate = new Date(this.bookCombo.CheckOutDate);
      }else{
        fromdate = new Date(this.searchhotel.CheckInDate);
        todate = new Date(this.searchhotel.CheckOutDate);
      }
      
      const options: CalendarModalOptions = {
        pickMode: 'range',
        title: 'Chọn ngày',
        monthFormat: 'DD/MM/YYYY', 
        weekdays:['CN','T2','T3','T4','T5','T6','T7'],
        weekStart: 1,
        closeLabel:'',
        doneLabel: '',
        defaultDateRange: {from: fromdate, to: todate}
      };
  
      this.myCalendar = await this.modalCtrl.create({
        component: CalendarModal,
        cssClass: 'hotel-calendar-custom',
        componentProps: { options }
      });
  
      this.myCalendar.present().then(()=>{
        this.allowclickcalendar = true;
        $('.days-btn').click(e => this.clickedElement(e));

        $('.hotel-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_flight/icon_back.svg' ></div>");
        //add event close header
        $('.hotel-calendar-custom .header-img-close').click((e => this.closecalendar()));
      });
      let se = this;
      const event: any = await this.myCalendar.onDidDismiss();
      if(event){
        se.allowclickcalendar = true;
      }
      if(event.data){
        const date = event.data;
        const from: CalendarResult = date.from;
        const to: CalendarResult = date.to;
        se.searchhotel.CheckInDate = moment(from.dateObj).format('YYYY-MM-DD');
        se.searchhotel.CheckOutDate = moment(to.dateObj).format('YYYY-MM-DD');
        se.bookCombo.CheckInDate = moment(fromdate).format('YYYY-MM-DD');
        se.bookCombo.CheckOutDate = moment(todate).format('YYYY-MM-DD');
      }
      se.zone.run(()=>{
        se.cin = se.searchhotel.CheckInDate;
        se.cout = se.searchhotel.CheckOutDate;
        se.datecin = new Date(se.searchhotel.CheckInDate);
        se.datecout = new Date(se.searchhotel.CheckOutDate);
        se.cindisplay = moment(se.datecin).format('DD-MM-YYYY');
      })
      se.gf.setCacheSearchHotelInfo({checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber});
      return true;
    }

    clearClonePage(pagename) {
      //Xóa clone do push page
      let elements = [];
      elements = Array.from(document.querySelectorAll(pagename));
      if (elements != null && elements.length > 0) {
        elements.forEach(el => {
  
          if(el && el != null){
          //if (el != null && el.length > 0) {
            el.remove();
          }
        });
      }
    }

    async presentAlert(title,msg) {
      const alert = await this.alertCtrl.create({
        message: msg,
        buttons: ['OK'],
        cssClass: 'request-combo-css'
      });
  
      await alert.present();
    }

    // presentToastwarming(msg) {
    //   const toast = this.toastCtrl.create({
    //     message: msg,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // }
    /***
     * Xử lý change value radio khi click vào label
     * PDANH 26/02/2019
     */
    radioCheck(value){
      var itemListDeparture = document.getElementsByClassName('list-departure');
      var itemRadioDeparture = document.getElementsByClassName('rd-departure');
      //var itemRadioButton = document.getElementsByClassName('radio-icon')
      if(value==1){
        itemListDeparture[0].setAttribute('aria-activedescendant',"rb-1-0");
        // itemRadioButton[0].classList.add('radio-checked');
        // itemRadioButton[1].classList.remove('radio-checked');
        // itemRadioButton[0].nextElementSibling.setAttribute('aria-checked','true');
        // itemRadioButton[1].nextElementSibling.setAttribute('aria-checked','false');
        this.location = "SGN";
      }else{
        itemListDeparture[0].setAttribute('aria-activedescendant',"rb-1-1");
        // itemRadioButton[1].classList.add('radio-checked');
        // itemRadioButton[0].classList.remove('radio-checked');
        // itemRadioButton[1].nextElementSibling.setAttribute('aria-checked','true');
        // itemRadioButton[0].nextElementSibling.setAttribute('aria-checked','false');
        this.location = "HN";
      }
    }
    /***
     * Gọi tổng đài hỗ trợ
     * PDANH 26/02/2019
     */
    async makeCallSupport(value){
      try {
        let tel = "19001870";
        if(value == 1){
          tel = "19002045";
        }else if(value==2){
          tel = "19001870";
        }
        else{
          tel = "19002087";
        }
        setTimeout(() => {
          window.open(`tel:${tel}`, '_system');
        },100);
      }
      catch (error) {
        if (error) {
          error.page="requestcombo";
          error.func="makeCallSupport";
          C.writeErrorLog(error,null);
          throw new Error(error)
        };
      }
      //google analytic
      this.gf.googleAnalytion('requestcombo','callsupport','');
    }

    filterPhone(phone){
      var pattern = new RegExp("0[9|8|1|7|3|5]([0-9]|\s|-|\.){8,12}");
      return pattern.test(phone);
    }

    filterEmail(email) {
      var regex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
      return regex.test(email);
    }
    selectclickdepart(events)
    {
      this.zone.run(() => {
        this.transportDepartTime=events.detail.value;
      })
    
    }
    selectclickreturn(events)
    {
      this.zone.run(() => {
        this.transportReturnTime=events.detail.value;
      })
    
    }
    async presentToast(msg) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
    public async showConfirmEmail(){
      let alert = await this.alertCtrl.create({
        message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
        cssClass: "cls-alert-showmore",
        buttons: [
          {
          text: 'Đổi email',
          role: 'OK',
          handler: () => {
            this.showChangeEmail();
          }
        }
      ]
    });
    alert.present();
  }

  async showChangeEmail(){
    var se = this;
    const modal: HTMLIonModalElement =
            await this.modalCtrl.create({
              component: ConfirmemailPage,
              componentProps: {
                aParameter: true,
              }
            });
          modal.present();
        
          modal.onDidDismiss().then((data: OverlayEventDetail) => {
            if(data && data.data && data.data.email){
              if(data.data.email){
                se.storage.remove("email");
                se.storage.set("email", data.data.email);
                se.storage.set("saveemail", data.data.email);
                se.usermail = data.data.email;

                se.postapi();
              }
            }
            
           
          })
  }


  async presentToastEmail() {
    let toast = await this.toastCtrl.create({
      message: "Thông tin email không hợp lệ. Vui lòng nhập lại.",
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  updateHintPaxName(value, listpaxhint){
    var se = this;
      let arraypax =[];
      se.listpaxhint = [];
        for (let index = 0; index < listpaxhint.length; index++) {
          const element = listpaxhint[index];
          if(element.fullName &&value && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1 ){
            arraypax.push(element);
          }
          
        }
     
      se.listpaxhint = [...arraypax];
  }

  inputFocus(event){
    var se = this;
    se.zone.run(()=>{
      if(!se.inputtext){
        if(se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length >0){
          se.inputtext = true;
          se.createHintPaxName(null, se.listPaxSuggestByMemberId);
        }
      }else{
        se.inputtext = true;
        se.updateHintPaxName(event.target.value, se.listPaxSuggestByMemberId)
      }
    })
    
    
  }

  inputLostFocus(item){
    var se = this;
      setTimeout(()=>{
        se.zone.run(()=>{
          se.inputtext = false;

          if(se.hidepaxhint){
            item.hidePaxHint = true;
            se.hidepaxhint = false;
          }
        })
        
      }, 400)
    
  }

  async createHintPaxName(item, listpaxhint){
    var se = this;
    se.listpaxhint = [...listpaxhint];
  }

  selectPaxHint(paxhint){
    var se = this;
    se.zone.run(()=>{
      if(paxhint){
        
          se.customerName = paxhint.fullName ? paxhint.fullName :se.customerName;
          se.mobile = paxhint.phoneNumber ? paxhint.phoneNumber : se.mobile;
        
      }
    })
    
  }
  hidePaxHint(){
    this.hidepaxhint = true;
  }

  inputOnFocus(item, type){
            var se = this;
            
            //se.clearError(item, type);
            if(type == 9 && !se.customerName){

              if(se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length >0){
                se.inputtext = true;
                se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                
              }else{
                se.storage.get('listpaxcache').then((data)=>{
                      if(data){
                          se.inputtext = true;
                          se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                      }
                    })
              }
            }
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