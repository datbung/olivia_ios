import { Bookcombo, ValueGlobal, SearchHotel, Booking } from './../../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, ModalController, Events,AlertController,Platform,LoadingController, ActionSheetController } from '@ionic/angular';
import { AuthService } from '../../providers/auth-service';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from './../../providers/constants';
import { GlobalFunction } from './../../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';
import * as moment from 'moment';
import { FCM } from "@ionic-native/fcm/ngx";
import { tourService } from '../../providers/tourService';
import * as $ from 'jquery';
import { TourListFilterPage } from '../tourlistfilter/tourlistfilter.page';
import { OverlayEventDetail } from '@ionic/core';
import { CalendarModal, CalendarModalOptions, DayConfig } from 'ion2-calendar';

@Component({
  selector: 'app-tourlist',
  templateUrl: 'tourlist.page.html',
  styleUrls: ['tourlist.page.scss'],
})
export class TourListPage implements OnInit{
 
  _infiniteScroll;
    memberid: any;
  datecin: Date;
  datecout: Date;
  cindisplayhr = '09/09';
  fromPlace = 'Hồ Chí Minh';
  slideData:any = [];
  
  loaddatadone = false;
  isConnected=true;
  name: string;
  loginuser: any;
  buttoniVIVUSelected: boolean= true;
  buttonTourDuration: boolean;
  buttonTourName: boolean;
  arrslk = [1,2,3,4,5,6];
  listTourCode = ['tailor-tour-ivivu','tour-nuoc-ngoai-cao-cap','cung-duong-dong-tay-bac'];
  allowclickcalendar: boolean = true;
  myCalendar: HTMLIonModalElement;
  arrTour: any;
  arrTourNoPrice: any[];
  constructor(public platform: Platform, public navCtrl: NavController, public zone: NgZone, public authService: AuthService, public bookcombo: Bookcombo, public value: ValueGlobal, public searchhotel: SearchHotel, 
    public modalCtrl: ModalController,  public events: Events, private router: Router,public booking: Booking,public loadingCtrl: LoadingController,
    public storage: Storage,public valueGlobal:ValueGlobal,public alertCtrl: AlertController,public gf: GlobalFunction,
    public activeRoute : ActivatedRoute,
    private fcm: FCM,
    private actionsheetCtrl: ActionSheetController,
    public tourService: tourService) {
    //this.name = 'Phú Quốc';
    this.fromPlace = this.tourService.itemSearchDepature && this.tourService.itemSearchDepature.Destination || 'Hồ Chí Minh';
    //this.value.logingoback = "ComboListPage";
      storage.get('auth_token').then(auth_token => {
        this.loginuser = auth_token;
      });
      storage.get('jti').then((uid:any)=>{
        this.memberid = uid;
      })
     
      this.loadData();
      this.gf.hideStatusBar();
      
  }
  ionViewWillEnter(){
    if(this.searchhotel.CheckInDate){
      this.cindisplayhr = moment(this.gf.getCinIsoDate(this.searchhotel.CheckInDate)).format('DD/MM');
    }
    this.hidetopbar();
  }
  
  loadData() {
    this.loaddatadone = false;
    if(this.tourService.itemShowList && this.tourService.itemShowList.tourTopicId){
      this.loadTourList(this.tourService.itemShowList.tourTopicId);
    }
    else if(this.tourService.itemShowList && this.tourService.itemShowList.groupListId){
      this.loadTourListByListId(this.tourService.itemShowList.groupListId);
    }
    else if(this.tourService.itemSearchDestination){
      if(this.tourService.itemSearchDestination && this.tourService.itemSearchDestination.TourCode && this.tourService.itemSearchDestination.NameCode){
        if(this.tourService.itemSearchDestination.Name){
          this.name = this.tourService.itemSearchDestination.Name;
        }
        this.loadTourListByDestinationId(this.tourService.itemSearchDestination.NameCode);
      }
      else if(this.tourService.itemSearchDestination && this.tourService.itemSearchDestination.RegionCode){
        if(this.tourService.itemSearchDestination.Name){
          this.name = this.tourService.itemSearchDestination.Name;
        }
        this.loadTourListByDestinationId(this.tourService.itemSearchDestination.RegionCode);
      }
      else{
        this.getTourListIdByRegion().then((listId)=> {
          this.loadTourListByListId(listId)
        })
      }
    }
    else if(this.tourService.itemShowList && this.tourService.itemShowList.Code){
      this.loadTourListByDestinationId(this.tourService.itemShowList.Code);
    }

    if(this.searchhotel.CheckInDate){
      this.cindisplayhr = moment(this.gf.getCinIsoDate(this.searchhotel.CheckInDate)).format('DD/MM');
    }

    if(this.tourService.itemShowList && this.tourService.itemShowList.Name){
      this.name = this.tourService.itemShowList.Name;
    }
    else if(this.tourService.itemSearchDestination){
      this.name = this.tourService.itemSearchDestination.RegionName;
    }

    if(this.tourService.itemDeparture){
      this.fromPlace = this.tourService.itemDeparture.Name;
    }
  }
  
  public async ngOnInit(){
    var se = this;
    se.tourService.getObservableFilterTour().subscribe((itemfilter) => {
      if(itemfilter && (itemfilter.code || itemfilter.Code)){
        this.loadTourListByRegionCode(itemfilter.code || itemfilter.Code);
        this.name =itemfilter.name || itemfilter.Name;
      }
    })
  }

  loadTourList(id) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/SearchTourDestination?tourTopicId='+id+`&departuredId=${((this.tourService.itemSearchDepature && this.tourService.itemSearchDepature.Id) ? this.tourService.itemSearchDepature.Id : 37)}`;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'tourlist', 'loadTourList').then((data) => {
      let res = JSON.parse(data);
      console.log(res.Response);
      se.slideData = res.Response;
      if(se.slideData && se.slideData.length >0){
        se.slideData.forEach(element => {
          let itemmap = this.tourService.listTopSale.filter((item) => item.Id == element.Id && item.TotalQuest >0 );
          if(itemmap && itemmap.length >0){
            element.TopSale = itemmap[0].TotalPax;
          }
          if(element.TourTimeName && element.TourTimeName.split(' ').length ==4){
            let arr = element.TourTimeName.split(' ');
            element.sortTourTime = arr[0]*1 + arr[2]*1;
          }else{
            element.sortTourTime = 0;
          }
  
          if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
            element.AvartarLink = 'https:'+element.AvartarLink;
          }
          se.convertAvgPoint(element);
        });
  
        se.mapingPriceTour();
      }else{
        se.loaddatadone = true;
      }
      
    })
  }


  mapingPriceTour() {
    let se = this;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    if(se.slideData && se.slideData.length >0){
      let listIds = se.slideData.map(item => item.Id).join(',');
      se.gf.RequestApiWithQueryString('GET', C.urls.baseUrl.urlMobile+'/tour/api/TourApi/GetMercuriusPriceByTourIds', headers,{TourIds: listIds, date: moment(this.searchhotel.CheckInDate).format('YYYY-MM-DD')}, 'tourList', 'GetMercuriusPriceByTourIds').then((data)=>{
        if(data && data.Status == "Success" && data.Response && data.Response.length >0){
          this.arrTour=[];
          this.arrTourNoPrice=[];
          for (let index = 0; index < se.slideData.length; index++) {
            const element = se.slideData[index];
   
            data.Response.forEach((p)=> {
              if( p.Contract && p.Contract[0] && p.Contract[0].PriceAdult && p.Code == "TO"+element.Id){
                element.PriceAdult = p.Contract[0].PriceAdult;
                if(p.Contract[0].PriceAdult < element.MinPrice) {
                  element.priceShow = se.gf.convertNumberToString(p.Contract[0].PriceAdult);
                }else {
                  element.priceShow = se.gf.convertNumberToString(element.MinPrice);
                }
                element.DepartureTime= moment(p.Contract[0].DepartureTime[0]).format("DD-MM-YYYY") ;
                element.sortByTime= p.Contract[0].DepartureTime[0];
                this.arrTour.push(element);
              }
            })
          }
          se.slideData.forEach(element => {
            if (!element.priceShow) {
              this.arrTourNoPrice.push(element);
            }
          });
          this.sortTimeTour() ;
          se.loaddatadone = true;
        }else {
          se.loaddatadone = true;
        }
      })
  
    }

    
  }

  loadTourListDestination(id) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/SearchTourDestination?tourTopicId='+id+`&departuredId=${((this.tourService.itemSearchDepature && this.tourService.itemSearchDepature.Id) ? this.tourService.itemSearchDepature.Id : 37)}`;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'tourlist', 'loadTourList').then((data) => {
      let res = JSON.parse(data);
      console.log(res.Response);
      se.slideData = res.Response;
      if(se.slideData && se.slideData.length >0){
        //se.name = se.slideData[0].Destination;
      }
      else{
        se.loaddatadone = true;
      }
      se.slideData.forEach(element => {
        let itemmap = this.tourService.listTopSale.filter((item) => item.Id == element.Id );
        if(itemmap && itemmap.length >0){
          element.TopSale = itemmap[0].TotalPax;
        }
        if(element.TourTimeName && element.TourTimeName.split(' ').length ==4){
          let arr = element.TourTimeName.split(' ');
          element.sortTourTime = arr[0]*1 + arr[2]*1;
        }else{
          element.sortTourTime = 0;
        }

        if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
          element.AvartarLink = 'https:'+element.AvartarLink;
        }
        se.convertAvgPoint(element);
      });
      se.mapingPriceTour();
    })
  }

  loadTourListByListId(listId) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/SearchTourDestination?lsIdTour='+listId+`&departuredId=${((this.tourService.itemSearchDepature && this.tourService.itemSearchDepature.Id) ? this.tourService.itemSearchDepature.Id : 37)}`;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'tourlist', 'loadTourListByListId').then((data) => {
      let res = JSON.parse(data);
      se.slideData = res.Response;
      // if(se.slideData && se.slideData.length >0){
      //   se.name = se.slideData[0].Destination;
      // }
      if(se.slideData && se.slideData.length ==0){
        se.loaddatadone = true;
      }
      se.slideData.forEach(element => {
        let itemmap = this.tourService.listTopSale.filter((item) => item.Id == element.Id );
        if(itemmap && itemmap.length >0){
          element.TopSale = itemmap[0].TotalPax;
        }
        if(element.TourTimeName && element.TourTimeName.split(' ').length ==4){
          let arr = element.TourTimeName.split(' ');
          element.sortTourTime = arr[0]*1 + arr[2]*1;
        }else{
          element.sortTourTime = 0;
        }
        if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
          element.AvartarLink = 'https:'+element.AvartarLink;
        }
        se.convertAvgPoint(element);
      });
      se.mapingPriceTour();
    })
  }

  loadTourListByRegionCode(code) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+`/tour/api/TourApi/SearchTourWithoutRegion?keyword=${code}&size=100&sizeLimit=45`;
    se.gf.RequestApi('GET', url, null, null, 'tourlist', 'loadTourListByRegionCode').then((data) => {
      let res = JSON.parse(data);
      se.slideData = res;
      if(se.slideData && se.slideData.length ==0){
        se.loaddatadone = true;
      }
      if(se.slideData && se.slideData.length >0){
        //se.name = se.slideData[0].RegionName;
      }
      se.slideData.forEach(element => {
        let itemmap = this.tourService.listTopSale.filter((item) => item.Id == element.Id );
        if(itemmap && itemmap.length >0){
          element.TopSale = itemmap[0].TotalPax;
        }
        //element.TopSale = se.tourService.listTopSale.map((item) => item.Id == element.Id ? item.TotalQuest : 0 );
        if(element.TourTimeName && element.TourTimeName.split(' ').length ==4){
          let arr = element.TourTimeName.split(' ');
          element.sortTourTime = arr[0]*1 + arr[2]*1;
        }else{
          element.sortTourTime = 0;
        }
        if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
          element.AvartarLink = 'https:'+element.AvartarLink;
        }
        se.convertAvgPoint(element);
      });
      se.mapingPriceTour();
    })
  }

  convertAvgPoint(element){
    if(element.AvgPoint && (element.AvgPoint.toString().length == 1 || element.AvgPoint === 10)){
      element.AvgPoint = element.AvgPoint +".0";
    }
  }

  getTourListIdByRegion() :Promise<any>{
    let se = this;
    return new Promise((resolve, reject) => {
      let url = C.urls.baseUrl.urlMobile+`/tour/api/TourApi/SearchTourWithoutRegion?keyword=${this.tourService.itemSearchDestination.RegionCode}&size=100&sizeLimit=45`;
      se.gf.RequestApi('GET', url, null, null, 'tourlist', 'getTourListIdByRegion').then((data) => {
        let res = JSON.parse(data);
        console.log(res);
     
        if(res && res.length >0){
          resolve(res.map((item)=> item.Id).join(','))
        }
        else {
          resolve('');
        }
      })
    })
    
  }

  getRegionIdByRegionCode(code) :Promise<any>{
    let se = this;
    return new Promise((resolve, reject) => {
      let url = C.urls.baseUrl.urlMobile+`/tour/api/TourApi/GetRegionByDestination?destination=${code}`;
      se.gf.RequestApi('GET', url, null, null, 'tourlist', 'getRegionIdByRegionCode').then((data) => {
        let res = JSON.parse(data);
        if(res.Response && res.Response.Id){
          resolve(res.Response.Id);
        }
        else {
          resolve('');
        }
      })
    })
  }

  loadTourListByDestinationId(code) {
    let se = this;
    se.getRegionIdByRegionCode(code).then((desId)=>{
      let url = C.urls.baseUrl.urlMobile+`/tour/api/TourApi/SearchTourDestination?departuredId=${((this.tourService.itemSearchDepature && this.tourService.itemSearchDepature.Id) ? this.tourService.itemSearchDepature.Id : 37)}&destinationId=${desId}`;
      let headers = {
        apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
        apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
      };
      se.gf.RequestApi('GET', url, headers, null, 'tourlist', 'loadTourList').then((data) => {
        let res = JSON.parse(data);
        console.log(res.Response);
        se.slideData = res.Response;
        if(se.slideData && se.slideData.length ==0){
          se.loaddatadone = true;
        }
        se.slideData.forEach(element => {
          let itemmap = this.tourService.listTopSale.filter((item) => item.Id == element.Id );
          if(itemmap && itemmap.length >0){
            element.TopSale = itemmap[0].TotalPax;
          }
          if(element.TourTimeName && element.TourTimeName.split(' ').length ==4){
            let arr = element.TourTimeName.split(' ');
            element.sortTourTime = arr[0]*1 + arr[2]*1;
          }else{
            element.sortTourTime = 0;
          }
  
          if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
            element.AvartarLink = 'https:'+element.AvartarLink;
          }
          se.convertAvgPoint(element);
        });
        se.mapingPriceTour();
      })
    });
    
  }

  async openSortTour(){
    // if(!this.loadpricedone){
    //   this.gf.showToastWarning('Đang tìm vé máy bay tốt nhất. Xin quý khách vui lòng đợi trong giây lát!');
    //   return;
    // }
    let actionSheet = await this.actionsheetCtrl.create({
      cssClass: 'action-sheets-tourlist-sort',
      buttons: [
        {
          text: "iVIVU đề xuất",
          cssClass:"btn-iVIVU cls-border-bottom",
          handler: () => {
            this.buttoniVIVUSelected = !this.buttoniVIVUSelected;
            this.buttoniVIVUSelected ? $(".btn-iVIVU > span").addClass('selected') : $(".btn-iVIVU > span").removeClass('selected');

            this.buttonTourDuration = false;
            this.buttonTourName = false;

            if(this.buttoniVIVUSelected){
              this.sortTour(1);
            }
          }
        },
        {
          text: "Thời lượng Tour",
          cssClass:"btn-duration cls-border-bottom",
          handler: () => {
            this.buttonTourDuration = !this.buttonTourDuration;
            this.buttonTourDuration ? $(".btn-duration > span").addClass('selected') : $(".btn-duration > span").removeClass('selected');

            this.buttonTourName = false;
            this.buttoniVIVUSelected = !this.buttonTourDuration;

            if(this.buttonTourDuration){
              this.sortTour(2);
            }
          }
        },
        {
          text: "Tên Tour",
          cssClass:"btn-name cls-border-bottom",
          handler: () => {
            this.buttonTourName = !this.buttonTourName;
            //this.textsort = this.buttonTourName ? "Cất cánh sớm nhất" : "";
            this.buttonTourName ? $(".btn-name > span").addClass('selected') : $(".btn-name > span").removeClass('selected');

            this.buttonTourDuration = false;
            this.buttoniVIVUSelected = !this.buttonTourName;
            if(this.buttonTourName){
              this.sortTour(3);
            }
          }
        }]

    });
   
    this.buttonTourDuration ? $(".btn-duration > span").addClass('selected') : $(".btn-duration > span").removeClass('selected');
    this.buttonTourName ? $(".btn-name > span").addClass('selected') : $(".btn-name > span").removeClass('selected');
    this.buttoniVIVUSelected ? $(".btn-iVIVU > span").addClass('selected') : $(".btn-iVIVU > span").removeClass('selected');
    
    actionSheet.present();
  
  }

  sortTour(sortType: number) {
    let se = this;
    if(sortType == 1)//ivivu
    {
      se.executeSort('ivivu') 
    }
    if(sortType == 2)//duration
    {
      se.executeSort('duration') 
    }
    if(sortType == 3)//ivivu
    {
      se.executeSort('name') 
    }
  }
  sortTimeTour(){
    var se = this
      let direction = -1;
      var daycin= moment(se.searchhotel.CheckInDate).format("YYYY-MM-DDT00:00:00")
     
      this.slideData=[];
      this.arrTour.forEach(element => {
        if (element.sortByTime>=daycin) {
          this.slideData.push(element);
        }
      });
       this.zone.run(() => this.slideData.sort(function (a, b) {
        let columnname = "sortByTime"
        if (a[columnname] < b[columnname]) {
          return 1 * direction;
        }
        else if (a[columnname] > b[columnname]) {
          return -1 * direction;
        }
      }))
      this.arrTour.forEach(element => {
        if (element.sortByTime<daycin) {
          this.slideData.push(element);
        }
      });
   
      this.arrTourNoPrice.forEach(element => {
        this.slideData.push(element);
      });
  }
 
  executeSort(property) {
    let se = this;
    se.zone.run(() => se.slideData.sort(function (a, b) {
      let direction = -1;
      let col = '';
      if(property == "ivivu"){
        col = 'Id';
      }
      col = (property == "ivivu") ? 'Id' : (property == "duration" ? "sortTourTime" : 'Name');
      if (property=='sortByTime') {
        col = 'sortByTime';
      }
      if(property == 'ivivu'){
        return a[col] - b[col];
      }
      else if(property == 'duration'){
        return b[col] - a[col];
      }
      else{
        return b[col].localeCompare(a[col]);
      }
    }));
  }

  async openFilterTour() {
      const modal: HTMLIonModalElement =
        await this.modalCtrl.create({
          component: TourListFilterPage,
          componentProps: {
            aParameter: true,
          }
        });
      modal.present();
      modal.onDidDismiss().then((data: OverlayEventDetail) => {
        if (!data.data) {
          this.zone.run(() => {
           
          })
        }
      })
    
  }

  goback(){
    this.tourService.itemSearchDestination = "";
    this.tourService.itemShowList = "";
    this.navCtrl.navigateBack('/app/tabs/tab1');
  }

  itemclickht(item){
    this.tourService.tourDetailId = item.Id;
    this.tourService.backPage = 'tourlist';
    this.navCtrl.navigateForward('/tourdetail');
  }
  closecalendar(){
    this.modalCtrl.dismiss();
  }
  async changeInfo(){
    let se = this;
    if(!se.allowclickcalendar){
      return;
    }
    
    se.allowclickcalendar = false;
    let fromdate = new Date(se.gf.getCinIsoDate(se.searchhotel.CheckInDate));
    let todate = new Date(se.gf.getCinIsoDate(se.searchhotel.CheckOutDate));
    let _daysConfig: DayConfig[] = [];
    if(se.tourService.departures && se.tourService.departures.length >0) {
      for (let j = 0; j < se.tourService.departures.length; j++) {
        _daysConfig.push({
          date: se.tourService.departures[j],
          disable: false
        })
      }
    }
    if(this.valueGlobal.listlunar && this.valueGlobal.listlunar.length >0){
      for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
        _daysConfig.push({
          date: this.valueGlobal.listlunar[j].date,
          subTitle: moment(this.valueGlobal.listlunar[j].date).format("DD/MM") + ': ' +this.valueGlobal.listlunar[j].name,
          cssClass: 'lunarcalendar'
       })
      }
    }
    
    let Year=new Date().getFullYear();
    let Month=new Date().getMonth();
    let Day=new Date().getDate();
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
        daysConfig: _daysConfig,
        to: new Date(Year+1, Month, Day),
      };
  
      se.myCalendar = await se.modalCtrl.create({
        component: CalendarModal,
        animated: true,
        componentProps: { options },
        cssClass: 'tour-calendar-custom',
      });
      se.myCalendar.present().then(() => {
        se.allowclickcalendar = true;
        $(".days-btn").click(e => se.clickedElement(e));

        $('.tour-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=start]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/imgs/icon_back.svg' ></div>");
        //add event close header
        $('.tour-calendar-custom .header-img-close').click((e => se.closecalendar()));

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

      const event: any = await se.myCalendar.onDidDismiss();
      const date = event.data;
      if (event.data) {
         se.zone.run(() => {
           se.searchhotel.CheckInDate = moment(se.gf.getCinIsoDate(event.data.from)).format('YYYY-MM-DD');
           se.searchhotel.datecin = new Date(se.gf.getCinIsoDate(event.data.from));
           se.searchhotel.cindisplay = moment(se.gf.getCinIsoDate(se.searchhotel.datecin)).format("DD-MM-YYYY");
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
              se.zone.run(() => {
                se.searchhotel.CheckInDate = moment(se.gf.getCinIsoDate(fromdate)).format('YYYY-MM-DD');
                se.searchhotel.datecin = se.gf.getCinIsoDate(fromdate);
                se.searchhotel.cindisplay = moment(se.gf.getCinIsoDate(se.searchhotel.datecin)).format("DD-MM-YYYY");
              })
              se.loadData();
              
            }
          }
        }
      }
    }
    hidetopbar(){
      let el = document.getElementsByClassName('div-statusbar-float');
        el[0].classList.remove('float-statusbar-enabled');
        el[0].classList.add('float-statusbar-disabled');
    }
}
