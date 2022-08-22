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
  listTourCode = ['tailor-tour-ivivu','tour-nuoc-ngoai-cao-cap','trai-nghiem-dia-phuong','cung-duong-dong-tay-bac'];
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
      this.loaddatadone = false;
      if(this.tourService.itemShowList && this.tourService.itemShowList.Code && this.listTourCode.indexOf(this.tourService.itemShowList.Code) == -1){
        this.loadTourListByRegionCode(this.tourService.itemShowList.Code);
      }
      else if(this.tourService.itemShowList && this.tourService.itemShowList.groupListId){
        this.loadTourListByListId(this.tourService.itemShowList.groupListId);
      }
      else if(this.tourService.itemSearchDestination){
        if(this.tourService.itemSearchDestination && this.tourService.itemSearchDestination.RegionId){
          this.loadTourListDestination(this.tourService.itemSearchDestination.RegionId);
        }
        if(this.tourService.itemSearchDestination && this.tourService.itemSearchDestination.Id){
          this.loadTourListByListId(this.tourService.itemSearchDestination.Id);
        }
        else{
          this.getTourListIdByRegion().then((listId)=> {
            this.loadTourListByListId(listId)
          })
        }
        
        
      }

      if(this.searchhotel.CheckInDate){
        this.cindisplayhr = moment(this.searchhotel.CheckInDate).format('DD/MM');
      }

      if(this.tourService.itemShowList && this.tourService.itemShowList.Name){
        this.name = this.tourService.itemShowList.Name;
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
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/SearchTourDestination?tourTopicId='+id;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'tourlist', 'loadTourList').then((data) => {
      let res = JSON.parse(data);
      console.log(res.Response);
      se.slideData = res.Response;
      if(se.slideData && se.slideData.length >0){
        se.name = se.slideData[0].Destination;
      }
      se.slideData.forEach(element => {
        element.TopSale = se.tourService.listTopSale.map((item) => item.Id == element.Id ? item.TotalQuest : 0 );
        //console.log(element.TopSale);
        if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
          element.AvartarLink = 'https:'+element.AvartarLink;
        }
      });
      se.loaddatadone = true;
    })
  }

  loadTourListDestination(id) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/SearchTourDestination?destinationId='+id;
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
      se.slideData.forEach(element => {
        element.TopSale = se.tourService.listTopSale.map((item) => item.Id == element.Id ? item.TotalQuest : 0 );
        if(element.TourTimeName && element.TourTimeName.split(' ').length ==4){
          let arr = element.TourTimeName.split(' ');
          element.sortTourTime = arr[0]*1 + arr[2]*1;
        }else{
          element.sortTourTime = 0;
        }

        if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
          element.AvartarLink = 'https:'+element.AvartarLink;
        }
      });
      se.loaddatadone = true;
    })
  }

  loadTourListByListId(listId) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/SearchTourDestination?lsIdTour='+listId;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    se.gf.RequestApi('GET', url, headers, null, 'tourlist', 'loadTourListByListId').then((data) => {
      let res = JSON.parse(data);
      console.log(res.Response);
      se.slideData = res.Response;
      // if(se.slideData && se.slideData.length >0){
      //   se.name = se.slideData[0].Destination;
      // }
      se.slideData.forEach(element => {
        element.TopSale = se.tourService.listTopSale.map((item) => item.Id == element.Id ? item.TotalQuest : 0 );
        if(element.TourTimeName && element.TourTimeName.split(' ').length ==4){
          let arr = element.TourTimeName.split(' ');
          element.sortTourTime = arr[0]*1 + arr[2]*1;
        }else{
          element.sortTourTime = 0;
        }
        if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
          element.AvartarLink = 'https:'+element.AvartarLink;
        }
      });
      se.loaddatadone = true;
    })
  }

  loadTourListByRegionCode(code) {
    let se = this;
    let url = C.urls.baseUrl.urlMobile+`/tour/api/TourApi/SearchTourWithoutRegion?keyword=${code}&size=100&sizeLimit=45`;
    se.gf.RequestApi('GET', url, null, null, 'tourlist', 'loadTourListByRegionCode').then((data) => {
      let res = JSON.parse(data);
      se.slideData = res;
      if(se.slideData && se.slideData.length >0){
        //se.name = se.slideData[0].Destination;
      }
      se.slideData.forEach(element => {
        element.TopSale = se.tourService.listTopSale.map((item) => item.Id == element.Id ? item.TotalQuest : 0 );
        if(element.TourTimeName && element.TourTimeName.split(' ').length ==4){
          let arr = element.TourTimeName.split(' ');
          element.sortTourTime = arr[0]*1 + arr[2]*1;
        }else{
          element.sortTourTime = 0;
        }
        if(element.AvartarLink && element.AvartarLink.indexOf('http') == -1){
          element.AvartarLink = 'https:'+element.AvartarLink;
        }
      });
      se.loaddatadone = true;
    })
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

  executeSort(property) {
    let se = this;
    se.zone.run(() => se.slideData.sort(function (a, b) {
      let direction = -1;
      let col = '';
      if(property == "ivivu"){
        col = 'Id';
      }
      col = (property == "ivivu") ? 'Id' : (property == "duration" ? "sortTourTime" : 'Name');

      if(property == 'ivivu'){
        return a[col] - b[col];
      }
      else if(property == 'duration'){
        return b[col] - a[col];
      }
      else{
        return b[col].localeCompare(a[col]);
      }
      if (a[col] * 1 < b[col] * 1) {
        //return property == 'duration' ? 1 * direction : -1 * direction;
        return 1 * direction;
      }
      else if (a[col] * 1 > b[col] * 1) {
        //return property != 'duration' ? -1 * direction : 1 * direction;
        return -1 * direction;
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
    this.navCtrl.navigateBack('/app/tabs/tab1');
  }

  itemclickht(item){
    this.tourService.tourDetailId = item.Id;
    this.tourService.backPage = 'tourlist';
    this.navCtrl.navigateForward('/tourdetail');
  }
}
