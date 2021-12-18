import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { foodService } from '../providers/foodService';
import { C } from './../providers/constants';
import { FoodfilterPage } from '../foodfilter/foodfilter.page';
import { OverlayEventDetail } from '@ionic/core';
import { ImageLoaderService } from 'ionic-image-loader';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { SearchHotel, ValueGlobal } from '../providers/book-service';
import { flightService } from '../providers/flightService';
import { MytripService } from '../providers/mytrip-service.service';
import { BizTravelService } from '../providers/bizTravelService';
import * as request from 'requestretry';

@Component({
  selector: 'app-homefood',
  templateUrl: './homefood.page.html',
  styleUrls: ['./homefood.page.scss'],
})
export class HomefoodPage implements OnInit {
  @Input("countcart") countcart:any;
  @ViewChild('myFoodSlider') sliderfood: IonSlides;
  @ViewChild('myFoodSliderDinner') sliderfooddinner: IonSlides;
  slideOpts = {
    zoom: false
  };
  foods = [];
  itemViBacClick = false;
  itemViTrungClick = false;
  itemViNamClick = false;
  itemViBaMienClick = false;
  itemThanhDamClick = false;
  itemDamDaClick = false;
  item199Click = false;
  item299Click = false;
  item399Click = false;

  foodbeforefilter = [];
  datafilter: any= [];
  menuindex: any=1;
  hascachecart: boolean = false;
  installmentPriceStr = "123.000";
  weekmenutitle: string;
  weekmenutitle1: string;
  listMenu199: any[];
  listMenu299: any[];
  listMenu399: any[];
  timeexpired: string;
  activeFoodTab: any=1;
  diners: any=[];
  nextweekmenutitle: string;
  nextweekmenutitle1: string;
  activeWeek: boolean=false;
  weekmenutitle2: string;
  nextweekmenutitle2: string;
  foodsnextweek: any;
  foodnextweekbeforefilter: any[];
  datafilternextweek: any[];
  dinersnextweek: any;
  activeWeekDinner: boolean=true;
  itemCollectionClick: boolean;
  isBizAccount: boolean;
  constructor(private navCtrl: NavController, private gf: GlobalFunction,
    public foodService: foodService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private imageLoader: ImageLoaderService,
    public storage: Storage,
    private actionsheetCtrl: ActionSheetController,
    public searchhotel: SearchHotel,
    public valueGlobal: ValueGlobal,
    public flightService: flightService,
    public _mytripservice: MytripService,
    public bizTravelService: BizTravelService) {
    this.activeFoodTab =1;
    this.activeWeek = true;
    this.activeWeekDinner = true;
    this.loaddata();
    setTimeout(()=>{
      this.storage.get("listItemsCart").then((data)=>{
        if(data && data.length >0){
          this.gf.checkData(data).then((result) => {
            this.zone.run(()=>{
             
              this.countcart = result.length;
              this.foodService.countcart = result.length;
              this.hascachecart = true;
              this.foodService.listItemsCart = [...result];
              this.foodService.itemCartChange.emit(this.foodService.countcart);
              this.gf.setCacheCart();
            })
          })
        }
      })
    },350)

    setInterval(()=>{
      this.zone.run(()=>{
        this.countcart = this.foodService.listItemsCart.length;
      })
    },300)
    this.loadUserInfo();
   }

   loaddata(){
    //  this.storage.get('activeFoodTab').then((idx) => {
    //    if(idx != undefined){
    //     this.setActiveFoodTab(idx);
    //    }else{
    //     this.setActiveFoodTab(2);
    //    }
    //  })
     this.gf.getCurrentPeriod().then((data)=>{
      this.loadcategoryhome(0);
      this.loadcategoryhome(1);
      //this.getCategoryHomePageDinner(0);
      //this.getCategoryHomePageDinner(1);
      this.zone.run(()=>{
        this.weekmenutitle = "Tuần này ";
        this.weekmenutitle1 = moment(this.foodService.periodStartDate).format("DD.MM") ;
        this.weekmenutitle2 = moment(this.foodService.periodEndDate).format("DD.MM");

        this.nextweekmenutitle = "Tuần sau ";
        this.nextweekmenutitle1 = moment(this.foodService.periodStartDateNextWeek).format("DD.MM");
        this.nextweekmenutitle2 = moment(this.foodService.periodEndDateNextWeek).format("DD.MM");

        var dcin = new Date(this.foodService.periodStartDate);
        var res = dcin.setTime(dcin.getTime() + (-1 * 24 * 60 * 60 * 1000));
        var dexpired = new Date(res);
        this.timeexpired = "Đặt đến 12h Chủ nhật " + moment(dexpired).format("DD.MM");
      })
    })

    
    //this.sliderfooddinner.slideTo(2);
    let priceinstallment = Math.round(3000000 / 12 * 1.05);
    this.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');

    
   }

   ngOnInit(){
    this.foodService.menuFooterClick.pipe().subscribe(data => {
        if(data == 1){
          this.itemViBacClick = this.foodService.objectFilter.itemViBacClick;
        this.itemViTrungClick = this.foodService.objectFilter.itemViTrungClick;
        this.itemViNamClick = this.foodService.objectFilter.itemViNamClick;
        this.itemViBaMienClick = this.foodService.objectFilter.itemViBaMienClick;
        this.itemThanhDamClick = this.foodService.objectFilter.itemThanhDamClick;
        this.itemDamDaClick = this.foodService.objectFilter.itemDamDaClick;
        this.item199Click = this.foodService.objectFilter.item199Click;
        this.item299Click = this.foodService.objectFilter.item299Click;
        this.item399Click = this.foodService.objectFilter.item399Click;
        this.itemFilterClickNotChangeValue(1);
        this.itemFilterClickNotChangeValue(2);
        this.itemFilterClickNotChangeValue(3);
        this.itemFilterClickNotChangeValue(4);
        this.itemFilterClickNotChangeValue(5);
        this.itemFilterClickNotChangeValue(6);
        this.itemFilterClickNotChangeValue(7);
        this.itemFilterClickNotChangeValue(8);
        this.itemFilterClickNotChangeValue(9);
        }
    })
    this.foodService.itemCartChange.pipe().subscribe(data => {
      this.zone.run(()=>{
        this.countcart =data;
      })
      
    })

    this.foodService.itemActiveFoodTab.pipe().subscribe(data => {
      // this.activeFoodTab = data;
      // this.setActiveTabNotEmit(data);
      // this.storage.get('activeFoodTab').then((idx) => {
      //   if(idx != undefined){
      //    this.setActiveFoodTab(idx);
      //   }else{
      //    this.setActiveFoodTab(2);
      //   }
      // })
    })

    this.bizTravelService.accountBizTravelChange.pipe().subscribe((check)=> {
      if(check == 1){
        this.loadUserInfo();
      }else if(check == 2){
        this.isBizAccount = false;
      }
    })
  }

   /**
     * Load thông tin user
     */
    loadUserInfo() {
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
                  if (response.statusCode == 200) {
                    if (body) {
                      var data = JSON.parse(body);
                      se.storage.remove('userInfoData');
                      se.storage.set('userInfoData', data);
  
                      if(data.bizAccount){
                        se.bizTravelService.bizAccount = data.bizAccount;
                        se.bizTravelService.isCompany = true;
                        se.isBizAccount = true;
                      }else{
                        se.bizTravelService.bizAccount = null;
                        se.bizTravelService.isCompany = false;
                        se.isBizAccount = false;
                      }
                      
                   }
                  }else{
                    se.isBizAccount = false;
                  }
                 
              });
          } 
      })
    }

  goback(){
    //this.searchhotel.itemTabHotel.emit(1);
    if(this._mytripservice.backfrompage == "order"){
      this._mytripservice.backfrompage = "";
      //this.navCtrl.navigateBack('/app/tabs/tab3');
      if(this._mytripservice.rootPage == "homeflight"){
        this.valueGlobal.backValue = "homeflight";
          this._mytripservice.orderPageState.emit(1);
          this.flightService.itemTabFlightActive.emit(true);
          setTimeout(()=> {
            this.flightService.itemMenuFlightClick.emit(2);
          },200)
          this._mytripservice.backfrompage= "";
          this.navCtrl.navigateBack('/tabs/tab1');
      }else if(this._mytripservice.rootPage == 'homehotel'){
        this.navCtrl.navigateBack('app/tabs/tab3');
      }else{
        if(this.valueGlobal.backValue == "homeflight"){
          this.valueGlobal.backValue = "homeflight";
          this._mytripservice.orderPageState.emit(1);
          this.flightService.itemTabFlightActive.emit(true);
          setTimeout(()=> {
            this.flightService.itemMenuFlightClick.emit(2);
          },200)
          this._mytripservice.backfrompage= "";
          this.navCtrl.navigateBack('/tabs/tab1');
        }
        else if(this.valueGlobal.backValue == "homehotel"){
          this.valueGlobal.backValue = "homehotel";
          this.navCtrl.navigateBack('app/tabs/tab3');
        }
        else{
          this.valueGlobal.backValue = "homefood";
          $(".div-myorder").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
          $(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
          $(".homefoodheader").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
          $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
          $(".div-home").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            this.foodService.tabFoodIndex = 2;
            this.foodService.menuFooterClick.emit(2);
            this.foodService.itemActiveFoodTab.emit(2);
            this.navCtrl.navigateBack('/homefood');
        }
        
      }
    }else if(this._mytripservice.rootPage == "homehotel"){
      this.navCtrl.navigateBack('/tabs/tab1');
    }
    else{
      this._mytripservice.rootPage = "homeflight";
        this.flightService.itemCheckTabActive.emit(1);
        this.navCtrl.navigateBack('/tabs/tab1');
    }

   
    
    //this._mytripservice.rootPage = "";
  }

  ionViewWillEnter(){
    if(this.foodService && this.foodService.listItemsCart){
      this.countcart = this.foodService.listItemsCart.length;
    }
    
    //hiện menu footer food
    if(document.getElementsByClassName("homefood-footer").length >0){
      document.getElementsByClassName("homefood-footer")[0]['style'].display ='block';
    }
    //this.checkThu();
  }

  /**
   * 
   * @param type type = 0: nextweek; =1: currentweek
   */
   loadcategoryhome(type){
     var se = this;
     let url = C.urls.baseUrl.urlFood +"/api/FOHome/GetCategoryHomePage?currentWeek="+ type;
     se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data)=>{
       if(data && data.length >0){
         //data = data.filter((item)=> {return item.categoryTypeId != 0});
         se.foodService.listItemsFood = data;
         data.forEach(element => {
           //if(element.image.indexOf("↵") != -1){
            let tail1 = element.image.substring(element.image.length - 3, element.image.length);
          if(tail1 != "png" && tail1 != "jpg"){
             element.image = element.image.substring(0,element.image.length-2);
           }
          if(element.image.indexOf("640x480") == -1){
            let urlimage = element.image.substring(0, element.image.length - 4);
            let tail = element.image.substring(element.image.length - 4, element.image.length);
            element.image = urlimage + "-640x480" + tail;
              se.imageLoader.preload(element.image);
          }

          if(element.avgPoint >0){
            element.avgPoint = element.avgPoint.toFixed(1);
            if (element.avgPoint == 10.0) {
              element.avgPoint=10;
            }
          }
          
          se.getListMenuByTypePrice(data);
          element.priceDisplay = se.gf.convertNumberToString(element.price);
          if(!type){
            element.startDate = se.foodService.periodStartDateNextWeek ;
            element.endDate = se.foodService.periodEndDateNextWeek;
          }else{
            element.startDate = se.foodService.periodStartDate ;
            element.endDate = se.foodService.periodEndDate;
            
          }
          element.currentWeek = type;
         });

       }
       
       if(!type){
        se.foodsnextweek = data;
        se.sortfoodnextweek();
        se.foodnextweekbeforefilter = [...se.foodsnextweek];
        se.foodService.listItemsFoodNextweek = [...se.foodsnextweek];
        
       }else{
        se.foods = data;
        se.sortfood();
        se.foodbeforefilter = [...se.foods];
        se.foodService.listItemsFood = [...se.foods];
       
       }
       
       
     })
   }
   sortfood() {
    this.foods.sort(function (a, b) {
      var nameA = a.categoryTypeId // bỏ qua hoa thường
      var nameB = b.categoryTypeId // bỏ qua hoa thường
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // name trùng nhau
      return 0;
    });
  }
  sortfoodnextweek() {
    this.foodsnextweek.sort(function (a, b) {
      var nameA = a.categoryTypeId // bỏ qua hoa thường
      var nameB = b.categoryTypeId // bỏ qua hoa thường
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }

      // name trùng nhau
      return 0;
    });
  }
  /**
   * 
   * @param item item lunch
   * @param type type = 0: tuần này; type = 1: tuần sau
   */
  itemComboClick(item, type){
    var se = this;
    se.gf.hideStatusBar();
    
    se.foodService.itemFoodDetail = item;
    se.navCtrl.navigateForward('/foodcombodetail');
  }

  itemFilterClick(idx){
    var se = this;
    se.foodService.objectFilter = {};
    if(idx ==1){
      se.itemViBacClick = !se.itemViBacClick;
      
      if(se.itemViBacClick){
        $(".labelvibac").removeClass("selected").addClass('selected');
        $(".labelvitrung").removeClass("selected");
        $(".labelvinam").removeClass("selected");
        $(".labelcollection").removeClass("selected")
        if(se.itemViTrungClick){
          se.itemViTrungClick = !se.itemViTrungClick;
        }
        if(se.itemViNamClick){
          se.itemViNamClick = !se.itemViNamClick;
        }
        if(se.itemCollectionClick){
          se.itemCollectionClick = !se.itemCollectionClick;
        }
      }else{
        $(".labelvibac").removeClass("selected");
      }
     
    }
    if(idx == 2){
      se.itemViTrungClick = !se.itemViTrungClick;
      if(se.itemViTrungClick){
        $(".labelvitrung").removeClass("selected").addClass('selected');
        $(".labelvibac").removeClass("selected");
        $(".labelvinam").removeClass("selected");
        $(".labelcollection").removeClass("selected")
        if(se.itemViBacClick){
          se.itemViBacClick = !se.itemViBacClick;
        }
        if(se.itemViNamClick){
          se.itemViNamClick = !se.itemViNamClick;
        }
        if(se.itemCollectionClick){
          se.itemCollectionClick = !se.itemCollectionClick;
        }
      }else{
        $(".labelvitrung").removeClass("selected");
      }
    }
    if(idx == 3){
      se.itemViNamClick = !se.itemViNamClick;
      if(se.itemViNamClick){
        $(".labelvinam").removeClass("selected").addClass('selected');
        $(".labelvitrung").removeClass("selected");
        $(".labelvibac").removeClass("selected");
        $(".labelcollection").removeClass("selected")
        if(se.itemViTrungClick){
          se.itemViTrungClick = !se.itemViTrungClick;
        }
        if(se.itemViBacClick){
          se.itemViBacClick = !se.itemViBacClick;
        }
        if(se.itemCollectionClick){
          se.itemCollectionClick = !se.itemCollectionClick;
        }
      }else{
        $(".labelvinam").removeClass("selected");
      }
    }
    if(idx == -2){
      se.itemCollectionClick = !se.itemCollectionClick;
      if(se.itemCollectionClick){
        $(".labelcollection").removeClass("selected").addClass('selected');
        $(".labelvinam").removeClass("selected");
        $(".labelvitrung").removeClass("selected");
        $(".labelvibac").removeClass("selected");
        if(se.itemViTrungClick){
          se.itemViTrungClick = !se.itemViTrungClick;
        }
        if(se.itemViBacClick){
          se.itemViBacClick = !se.itemViBacClick;
        }
        if(se.itemViNamClick){
          se.itemViNamClick = !se.itemViNamClick;
        }
      }else{
        $(".labelcollection").removeClass("selected");
      }
    }
    // if(idx == 4){
    //   se.itemViBaMienClick = !se.itemViBaMienClick;
    //   if(se.itemViBaMienClick){
    //     $(".labelvi3mien").removeClass("selected").addClass('selected');
    //   }else{
    //     $(".labelvi3mien").removeClass("selected");
    //   }
    // }
    if(idx == 5){
      se.itemThanhDamClick = !se.itemThanhDamClick;
      if(se.itemThanhDamClick){
        $(".labelthanhdam").removeClass("selected").addClass('selected');
        $(".labeldamda").removeClass("selected");
        if(se.itemDamDaClick){
          se.itemDamDaClick = !se.itemDamDaClick;
        }
      }else{
        $(".labelthanhdam").removeClass("selected");
      }
    }
    if(idx == 6){
      se.itemDamDaClick = !se.itemDamDaClick;
      if(se.itemDamDaClick){
        $(".labeldamda").removeClass("selected").addClass('selected');
        $(".labelthanhdam").removeClass("selected");
        if(se.itemThanhDamClick){
          se.itemThanhDamClick = !se.itemThanhDamClick;
        }
      }else{
        $(".labeldamda").removeClass("selected");
      }
    }
    if(idx == 7){
      se.item199Click = !se.item199Click;
      if(se.item199Click){
        $(".label199").removeClass("selected").addClass('selected');
      }else{
        $(".label199").removeClass("selected");
      }
    }
    if(idx == 8){
      se.item299Click = !se.item299Click;
      if(se.item299Click){
        $(".label299").removeClass("selected").addClass('selected');
      }else{
        $(".label299").removeClass("selected");
      }
    }
    if(idx == 9){
      se.item399Click = !se.item399Click;
      if(se.item399Click){
        $(".label399").removeClass("selected").addClass('selected');
      }else{
        $(".label399").removeClass("selected");
      }
    }

    se.foodService.objectFilter ={};
    se.foodService.objectFilter= {
      itemViBacClick: se.itemViBacClick,
      itemViTrungClick: se.itemViTrungClick,
      itemViNamClick: se.itemViNamClick,
      itemViBaMienClick: se.itemViBaMienClick,
      itemThanhDamClick: se.itemThanhDamClick,
      itemDamDaClick: se.itemDamDaClick,
      item199Click: se.item199Click,
      item299Click: se.item299Click,
      item399Click: se.item399Click
    };

    se.filterItem();
  }

  itemFilterClickNotChangeValue(idx){
    var se = this;
    if(idx ==1){
      if(se.itemViBacClick){
        $(".labelvibac").removeClass("selected").addClass('selected');
      }else{
        $(".labelvibac").removeClass("selected");
      }
    }
    if(idx == 2){
      if(se.itemViTrungClick){
        $(".labelvitrung").removeClass("selected").addClass('selected');
      }else{
        $(".labelvitrung").removeClass("selected");
      }
    }
    if(idx == 3){
      if(se.itemViNamClick){
        $(".labelvinam").removeClass("selected").addClass('selected');
      }else{
        $(".labelvinam").removeClass("selected");
      }
    }
    if(idx ==-2){
      if(se.itemCollectionClick){
        $(".labelcollection").removeClass("selected").addClass('selected');
      }else{
        $(".labelcollection").removeClass("selected");
      }
    }
    if(idx == 5){
      if(se.itemThanhDamClick){
        $(".labelthanhdam").removeClass("selected").addClass('selected');
      }else{
        $(".labelthanhdam").removeClass("selected");
      }
    }
    if(idx == 6){
      if(se.itemDamDaClick){
        $(".labeldamda").removeClass("selected").addClass('selected');
      }else{
        $(".labeldamda").removeClass("selected");
      }
    }
    if(idx == 7){
      if(se.item199Click){
        $(".label199").removeClass("selected").addClass('selected');
      }else{
        $(".label199").removeClass("selected");
      }
    }
    if(idx == 8){
      if(se.item299Click){
        $(".label299").removeClass("selected").addClass('selected');
      }else{
        $(".label299").removeClass("selected");
      }
    }
    if(idx == 9){
      if(se.item399Click){
        $(".label399").removeClass("selected").addClass('selected');
      }else{
        $(".label399").removeClass("selected");
      }
    }

    se.filterItem();
  }

  filterItem(){
    var se = this;
    se.datafilter = se.foodbeforefilter;
    se.datafilternextweek = se.foodnextweekbeforefilter;
    var listfilter = [],
        listfilternextweek = [];
    if(se.itemViBacClick){
      se.datafilter = se.getItemFilter(1);
      se.datafilternextweek = se.getItemFilterNextWeek(1);
      if(se.datafilter && se.datafilter.length>0){
        listfilter = [...se.datafilter];
      }
      
      if(se.datafilternextweek && se.datafilternextweek.length>0){
        listfilternextweek = [...se.datafilternextweek];
      }
    }
    if(se.itemViTrungClick){
      se.datafilter = se.getItemFilter(2);
      se.datafilternextweek = se.getItemFilterNextWeek(2);
      if(se.datafilter && se.datafilter.length>0){
        if(listfilter.length>0){
          listfilter = [...listfilter,...se.datafilter];
        }else{
          listfilter = [...se.datafilter];
        }
        
        if(listfilternextweek.length>0){
          listfilternextweek = [...listfilternextweek,...se.datafilternextweek];
        }else{
          listfilternextweek = [...se.datafilternextweek];
        }
      }
    }
    if(se.itemViNamClick){
      se.datafilter = se.getItemFilter(3);
      se.datafilternextweek = se.getItemFilterNextWeek(3);
      if(se.datafilter && se.datafilter.length>0){
        if(listfilter.length>0){
          listfilter = [...listfilter,...se.datafilter];
        }else{
          listfilter = [...se.datafilter];
        }

        if(listfilternextweek.length>0){
          listfilternextweek = [...listfilternextweek,...se.datafilternextweek];
        }else{
          listfilternextweek = [...se.datafilternextweek];
        }
      }
    }
    if(se.itemViBaMienClick){
      se.datafilter = se.getItemFilter(4);
      se.datafilternextweek = se.getItemFilterNextWeek(4);
      if(se.datafilter && se.datafilter.length>0){
        if(listfilter.length>0){
          listfilter = [...listfilter,...se.datafilter];
        }else{
          listfilter = [...se.datafilter];
        }

        if(listfilternextweek.length>0){
          listfilternextweek = [...listfilternextweek,...se.datafilternextweek];
        }else{
          listfilternextweek = [...se.datafilternextweek];
        }
      }
    }
    if(se.itemCollectionClick){
      se.datafilter = se.getItemFilter(-2);
      se.datafilternextweek = se.getItemFilterNextWeek(-2);
      if(se.datafilter && se.datafilter.length>0){
        if(listfilter.length>0){
          listfilter = [...listfilter,...se.datafilter];
        }else{
          listfilter = [...se.datafilter];
        }

        if(listfilternextweek.length>0){
          listfilternextweek = [...listfilternextweek,...se.datafilternextweek];
        }else{
          listfilternextweek = [...se.datafilternextweek];
        }
      }
    }
    var listthanhdam =[],
        listdamda=[],
        listfiltercategory = [...listfilter],
        listthanhdamnextweek = [],
        listdamdanextweek=[],
        listfiltercategorynextweek = [...listfilternextweek];
    if(se.itemThanhDamClick){
      listthanhdam = se.getItemFilter(5,listfiltercategory);
      listthanhdamnextweek = se.getItemFilterNextWeek(5,listfiltercategorynextweek);
      if(listthanhdam && listthanhdam.length>0){
        listfilter = [...listthanhdam];
      }

      if(listthanhdamnextweek && listthanhdamnextweek.length>0){
        listfilternextweek = [...listthanhdamnextweek];
      }
    }
    if(se.itemDamDaClick){
      listdamda = se.getItemFilter(6,listfiltercategory);
      listdamdanextweek = se.getItemFilterNextWeek(6,listfiltercategorynextweek);
      if(listdamda && listdamda.length>0){
        if(listthanhdam.length >0){
          listfilter = [...listthanhdam,...listdamda];
        }else{
          listfilter = [...listdamda];
        }

        if(listthanhdamnextweek.length >0){
          listfilternextweek = [...listthanhdamnextweek,...listdamdanextweek];
        }else{
          listfilternextweek = [...listdamdanextweek];
        }
      }
    }
    var listfilterprice =[], 
    listfilterpricenextweek =[], 
    listfiltertypeprice =[...listfilter],
    listfiltertypepricenextweek =[...listfilternextweek],
    list199 =[],
    list299=[],
    list399=[],
    list199nextweek =[],
    list299nextweek=[],
    list399nextweek=[];
    if(se.item199Click){
      se.datafilter = se.getItemFilter(7,listfiltertypeprice);
      if(se.datafilter && se.datafilter.length>0){
          listfilter = [...se.datafilter];
          list199 = [...se.datafilter];
      }

      se.datafilternextweek = se.getItemFilterNextWeek(7,listfiltertypepricenextweek);
      if(se.datafilternextweek && se.datafilternextweek.length>0){
          listfilternextweek = [...se.datafilternextweek];
          list199nextweek = [...se.datafilternextweek];
      }
    }
    if(se.item299Click){
      se.datafilter = se.getItemFilter(8,listfiltertypeprice);
      if(se.datafilter && se.datafilter.length>0){
        list299 = [...se.datafilter];
        if(list199.length>0){
          listfilter = [...list199,...se.datafilter];
         
        }else{
          listfilter = [...se.datafilter];
        }
      }

      se.datafilternextweek = se.getItemFilterNextWeek(8,listfiltertypepricenextweek);
      if(se.datafilternextweek && se.datafilternextweek.length>0){
        list299nextweek = [...se.datafilternextweek];
        if(list299nextweek.length>0){
          listfilternextweek = [...list299nextweek,...se.datafilternextweek];
         
        }else{
          listfilternextweek = [...se.datafilternextweek];
        }
      }
    }
    if(se.item399Click){
      se.datafilter = se.getItemFilter(9,listfiltertypeprice);
      if(se.datafilter && se.datafilter.length>0){
        if(list199.length > 0){
          if(list299.length>0){
            listfilter = [...list199,...list299,...se.datafilter];
           
          }else{
            listfilter = [...list199,...se.datafilter];
          }
        }else{
          if(list299.length>0){
            listfilter = [...list299,...se.datafilter];
           
          }else{
            listfilter = [...se.datafilter];
          }
        }
        
      }

      se.datafilternextweek = se.getItemFilterNextWeek(9,listfiltertypepricenextweek);
      if(se.datafilternextweek && se.datafilternextweek.length>0){
        if(list199nextweek.length > 0){
          if(list299nextweek.length>0){
            listfilternextweek = [...list199nextweek,...list299nextweek,...se.datafilternextweek];
           
          }else{
            listfilternextweek = [...list199nextweek,...se.datafilternextweek];
          }
        }else{
          if(list299nextweek.length>0){
            listfilternextweek = [...list299nextweek,...se.datafilternextweek];
           
          }else{
            listfilternextweek = [...se.datafilternextweek];
          }
        }
        
      }
    }

    
    if(listfilter && listfilter.length >0){
      se.foods = listfilter;
      if(se.itemCollectionClick){
        se.foods.sort((a,b)=>{ return a.categoryTypeId < b.categoryTypeId ? -1 : 1});
      }
      
      se.foodService.itemCountFilter.emit(1);
    }else{
      se.foods = se.foodbeforefilter;
      se.foodService.itemCountFilter.emit(0);
    }

    if(listfilternextweek && listfilternextweek.length >0){
      se.foodsnextweek = listfilternextweek;
      if(se.itemCollectionClick){
        se.foodsnextweek.sort((a,b)=>{ return a.categoryTypeId < b.categoryTypeId ? -1 : 1});
      }
      se.foodService.itemCountFilter.emit(1);
    }else{
      se.foodsnextweek = se.foodnextweekbeforefilter;
      se.foodService.itemCountFilter.emit(0);
    }
   
  }

  getItemFilter(idx, listfilter?){
    var se = this;
    var listresult:any = [];
    var catid = -1;
    var groupid = -1;
    var typepriceid =-1;
    var list = [];
    if(idx == 1){
      catid = 1;
    }
    else if(idx == 2){
      catid = 2;
    }
    else if(idx == 3){
      catid = 3;
    }
    else if(idx == 4){
      catid = 0;
    }
    else if(idx == -2){
      catid = -2;
    }
    else if(idx == 5){
      groupid = 0;
    }
    else if(idx == 6){
      groupid = 1;
    }
    else if(idx == 7){
      typepriceid = 1;
    }
    else if(idx == 8){
      typepriceid = 2;
    }
    else if(idx == 9){
      typepriceid = 3;
    }

    if(idx <=4){
      if(idx != -2){
        list = se.foodbeforefilter.filter((el)=>{ return el.categoryTypeId == catid || el.categoryTypeId == 0});
      }else{
        list = se.foodbeforefilter.filter((el)=>{ return el.categoryTypeId == catid});
      }
      
    }else if(idx == 5 || idx == 6){
      if(listfilter && listfilter.length>0){
        list = listfilter.filter((el)=>{ return el.groupId == groupid});
      }else{
        list = se.foodbeforefilter.filter((el)=>{ return el.groupId == groupid});
      }
      
    }else{
      if(listfilter && listfilter.length>0){
        list = listfilter.filter((el)=>{return el.typePriceId == typepriceid});
      }else{
        list = se.foodbeforefilter.filter((el)=>{return el.typePriceId == typepriceid});
      }
    }
        
        if(list && list.length>0 ){
          if(listresult.length ==0){
            listresult.push(...list);
          }else {
            list.forEach(element => {
              if(!se.gf.checkExistsItemInArray(listresult, element, 'searchexperience')){
                listresult.push(element);
              }
            });
            
          }
          
        }
    return listresult;
  }

  getItemFilterNextWeek(idx, listfilter?){
    var se = this;
    var listresult:any = [];
    var catid = -1;
    var groupid = -1;
    var typepriceid =-1;
    var list = [];
    if(idx == 1){
      catid = 1;
    }
    else if(idx == 2){
      catid = 2;
    }
    else if(idx == 3){
      catid = 3;
    }
    else if(idx == 4){
      catid = 0;
    }
    else if(idx == -2){
      catid = -2;
    }
    else if(idx == 5){
      groupid = 0;
    }
    else if(idx == 6){
      groupid = 1;
    }
    else if(idx == 7){
      typepriceid = 1;
    }
    else if(idx == 8){
      typepriceid = 2;
    }
    else if(idx == 9){
      typepriceid = 3;
    }

    if(idx <=4){
      if(idx != -2){
        list = se.foodnextweekbeforefilter.filter((el)=>{ return el.categoryTypeId == catid || el.categoryTypeId == 0});
      }else{
        list = se.foodnextweekbeforefilter.filter((el)=>{ return el.categoryTypeId == catid});
      }
    }else if(idx == 5 || idx == 6){
      if(listfilter && listfilter.length>0){
        list = listfilter.filter((el)=>{ return el.groupId == groupid});
      }else{
        list = se.foodnextweekbeforefilter.filter((el)=>{ return el.groupId == groupid});
      }
      
    }else{
      if(listfilter && listfilter.length>0){
        list = listfilter.filter((el)=>{return el.typePriceId == typepriceid});
      }else{
        list = se.foodnextweekbeforefilter.filter((el)=>{return el.typePriceId == typepriceid});
      }
    }
        
        if(list && list.length>0 ){
          if(listresult.length ==0){
            listresult.push(...list);
          }else {
            list.forEach(element => {
              if(!se.gf.checkExistsItemInArray(listresult, element, 'searchexperience')){
                listresult.push(element);
              }
            });
            
          }
          
        }
    return listresult;
  }

  async showFilter(){
    this.gf.hideStatusBar();
    this.foodService.listItemsFood = this.foodbeforefilter;
    const modal: HTMLIonModalElement =
    await this.modalCtrl.create({
      component: FoodfilterPage,
      componentProps: {
        aParameter: true,
      }
    });
  modal.present();

  modal.onDidDismiss().then((data: OverlayEventDetail) => {
      this.itemViBacClick = this.foodService.objectFilter.itemViBacClick;
      this.itemViTrungClick = this.foodService.objectFilter.itemViTrungClick;
      this.itemViNamClick = this.foodService.objectFilter.itemViNamClick;
      this.itemCollectionClick = this.foodService.objectFilter.itemCollectionClick;
      this.itemViBaMienClick = this.foodService.objectFilter.itemViBaMienClick;
      this.itemThanhDamClick = this.foodService.objectFilter.itemThanhDamClick;
      this.itemDamDaClick = this.foodService.objectFilter.itemDamDaClick;
      this.item199Click = this.foodService.objectFilter.item199Click;
      this.item299Click = this.foodService.objectFilter.item299Click;
      this.item399Click = this.foodService.objectFilter.item399Click;
      this.itemFilterClickNotChangeValue(1);
      this.itemFilterClickNotChangeValue(2);
      this.itemFilterClickNotChangeValue(3);
      this.itemFilterClickNotChangeValue(-2);
      this.itemFilterClickNotChangeValue(4);
      this.itemFilterClickNotChangeValue(5);
      this.itemFilterClickNotChangeValue(6);
      this.itemFilterClickNotChangeValue(7);
      this.itemFilterClickNotChangeValue(8);
      this.itemFilterClickNotChangeValue(9);
   
  })
  }

  showCart(){
   
    this.foodService.fromPage = "homefood";
    this.gf.hideStatusBar();
    this.navCtrl.navigateForward('/foodbill');
  }

  async presentToastWarning(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  getListMenuByTypePrice(listmenu){
    var se = this;
    se.listMenu199 = [];
    se.listMenu299 = [];
    se.listMenu399 = [];

    listmenu.forEach(element => {
      if(element.typePriceId == 1){
        se.listMenu199.push(element);
      }
      else if(element.typePriceId == 2){
        se.listMenu299.push(element);
      }
      else if(element.typePriceId == 3){
        se.listMenu399.push(element);
      }
    });
    
  }

  showInstallmentDetail(){
    var se = this;
    se.navCtrl.navigateForward('/installmentdetail');
  }

  async filterClick(idx){
    var listButton = [];
    if(idx == 1){
     
      listButton = [
        {
          text: "Vị Bắc",
          cssClass:"btn-vibac cls-border-bottom",
          handler: () => {
            this.itemViBacClick = !this.itemViBacClick;
            this.itemViBacClick ? $(".btn-vibac > span").addClass('selected') : $(".btn-vibac > span").removeClass('selected');
            if(this.itemViTrungClick){
              this.itemViTrungClick = !this.itemViTrungClick;
            }
            if(this.itemViNamClick){
              this.itemViNamClick = !this.itemViNamClick;
            }
            if(this.itemCollectionClick){
              this.itemCollectionClick = !this.itemCollectionClick;
            }
            this.executeFilter();
          }
        },
        {
          text: "Vị Trung",
          cssClass:"btn-vitrung cls-border-bottom",
          handler: () => {
            this.itemViTrungClick = !this.itemViTrungClick;
            this.itemViTrungClick ? $(".btn-vitrung > span").addClass('selected') : $(".btn-vitrung > span").removeClass('selected');
            
            if(this.itemViBacClick){
              this.itemViBacClick = !this.itemViBacClick;
            }
            if(this.itemViNamClick){
              this.itemViNamClick = !this.itemViNamClick;
            }
            if(this.itemCollectionClick){
              this.itemCollectionClick = !this.itemCollectionClick;
            }
            this.executeFilter();
          }
        },
        {
          text: "Vị Nam",
          cssClass:"btn-vinam",
          handler: () => {
            this.itemViNamClick = !this.itemViNamClick;
            this.itemViNamClick ? $(".btn-vinam > span").addClass('selected') : $(".btn-vinam > span").removeClass('selected');
            
            if(this.itemViTrungClick){
              this.itemViTrungClick = !this.itemViTrungClick;
            }
            if(this.itemViBacClick){
              this.itemViBacClick = !this.itemViBacClick;
            }
            if(this.itemCollectionClick){
              this.itemCollectionClick = !this.itemCollectionClick;
            }
            this.executeFilter();
          }
        },
        {
          text: "Collection",
          cssClass:"btn-collection",
          handler: () => {
            this.itemCollectionClick = !this.itemCollectionClick;
            this.itemCollectionClick ? $(".btn-collection > span").addClass('selected') : $(".btn-collection > span").removeClass('selected');
            
            if(this.itemViTrungClick){
              this.itemViTrungClick = !this.itemViTrungClick;
            }
            if(this.itemViBacClick){
              this.itemViBacClick = !this.itemViBacClick;
            }
            if(this.itemViNamClick){
              this.itemViNamClick = !this.itemViNamClick;
            }
            this.executeFilter();
          }
        },
      ]
    }
    else if(idx == 2){
      listButton = [
        {
          text: "Thanh Đạm",
          cssClass:"btn-thanhdam cls-border-bottom",
          handler: () => {
            this.itemThanhDamClick = !this.itemThanhDamClick;
            this.itemThanhDamClick ? $(".btn-thanhdam > span").addClass('selected') : $(".btn-thanhdam > span").removeClass('selected');
            if(this.itemDamDaClick){
              this.itemDamDaClick = !this.itemDamDaClick;
            }
            this.executeFilter();
          }
        },
        {
          text: "Đậm Đà",
          cssClass:"btn-damda",
          handler: () => {
            this.itemDamDaClick = !this.itemDamDaClick;
            this.itemDamDaClick ? $(".btn-damda > span").addClass('selected') : $(".btn-damda > span").removeClass('selected');
            if(this.itemThanhDamClick){
              this.itemThanhDamClick = !this.itemThanhDamClick;
            }
            this.executeFilter();
          }
        }
      ]
    }
    else if(idx == 3){
     
      listButton = [
        {
          text: "225.000 đ/tuần",
          cssClass:"btn-199 cls-border-bottom",
          handler: () => {
            this.item199Click = !this.item199Click;
            this.item199Click ? $(".btn-199 > span").addClass('selected') : $(".btn-199 > span").removeClass('selected');
            if(this.item299Click){
              this.item299Click = !this.item299Click;
            }
            if(this.item399Click){
              this.item399Click = !this.item399Click;
            }
            this.executeFilter();
          }
        },
        {
          text: "325.000 đ/tuần",
          cssClass:"btn-299 cls-border-bottom",
          handler: () => {
            this.item299Click = !this.item299Click;
            this.item299Click ? $(".btn-299 > span").addClass('selected') : $(".btn-299 > span").removeClass('selected');
            if(this.item199Click){
              this.item199Click = !this.item199Click;
            }
            if(this.item399Click){
              this.item399Click = !this.item399Click;
            }
            this.executeFilter();
          }
        },
        {
          text: "425.000 đ/tuần",
          cssClass:"btn-399",
          handler: () => {
            this.item399Click = !this.item399Click;
            this.item399Click ? $(".btn-399 > span").addClass('selected') : $(".btn-399 > span").removeClass('selected');
            if(this.item199Click){
              this.item199Click = !this.item199Click;
            }
            if(this.item299Click){
              this.item299Click = !this.item299Click;
            }
            this.executeFilter();
          }
        }
      ]
    }
    let actionSheet = await this.actionsheetCtrl.create({
      cssClass: 'action-sheets-filter-food',
      buttons: listButton,
      header: idx ==1? 'Phong vị' : (idx ==2 ? 'Cách nấu' : 'Giá tiền')
    });

    this.itemViBacClick ? $(".btn-vibac > span").addClass('selected') : $(".btn-vibac > span").removeClass('selected');
    this.itemViTrungClick ? $(".btn-vitrung > span").addClass('selected') : $(".btn-vitrung > span").removeClass('selected');
    this.itemViNamClick ? $(".btn-vinam > span").addClass('selected') : $(".btn-vinam > span").removeClass('selected');
    this.itemCollectionClick ? $(".btn-collection > span").addClass('selected') : $(".btn-collection > span").removeClass('selected');
    this.itemThanhDamClick ? $(".btn-thanhdam > span").addClass('selected') : $(".btn-thanhdam > span").removeClass('selected');
    this.itemDamDaClick ? $(".btn-damda > span").addClass('selected') : $(".btn-damda > span").removeClass('selected');
    this.item199Click ? $(".btn-199 > span").addClass('selected') : $(".btn-199 > span").removeClass('selected');
    this.item299Click ? $(".btn-299 > span").addClass('selected') : $(".btn-299 > span").removeClass('selected');
    this.item399Click ? $(".btn-399 > span").addClass('selected') : $(".btn-399 > span").removeClass('selected');

    actionSheet.present().then(()=>{
      $(".action-sheets-filter-food .action-sheet-title").click(()=>{
        if($(".action-sheets-filter-food .action-sheet-title")[0].innerText == "Phong vị"){
          this.removeFilter(this.itemViBacClick ? 1 : (this.itemViTrungClick ? 2 : 3));
        }
        else if($(".action-sheets-filter-food .action-sheet-title")[0].innerText == "Cách nấu"){
          this.removeFilter(this.itemThanhDamClick ? 4 : 5);
        }
        else if($(".action-sheets-filter-food .action-sheet-title")[0].innerText == "Giá tiền"){
          this.removeFilter(this.item199Click ? 6 : (this.item299Click ? 7 : 8));
        }
        actionSheet.dismiss();
      })
    });
  }

  removeFilter(idx){
    var se = this;
    if(idx ==1){
      se.itemViBacClick = false;
    }
    else if(idx ==2){
      se.itemViTrungClick = false;
    }
    else if(idx ==3){
      se.itemViNamClick = false;
    }
    else if(idx ==-2){
      se.itemCollectionClick = false;
    }
    else if(idx ==4){
      se.itemThanhDamClick = false;
    }
    else if(idx ==5){
      se.itemDamDaClick = false;
    }
    else if(idx ==6){
      se.item199Click = false;
    }
    else if(idx ==7){
      se.item299Click = false;
    }
    else if(idx ==8){
      se.item399Click = false;
    }

    se.executeFilter();
  }

  executeFilter(){
    var se = this;
    se.foodService.objectFilter ={};
    se.foodService.objectFilter= {
      itemViBacClick: se.itemViBacClick,
      itemViTrungClick: se.itemViTrungClick,
      itemViNamClick: se.itemViNamClick,
      itemCollectionClick: se.itemCollectionClick,
      itemViBaMienClick: se.itemViBaMienClick,
      itemThanhDamClick: se.itemThanhDamClick,
      itemDamDaClick: se.itemDamDaClick,
      item199Click: se.item199Click,
      item299Click: se.item299Click,
      item399Click: se.item399Click
    };

    se.filterItem();
  }

  slidechange() {
    var se = this;
    se.sliderfood.getActiveIndex().then((currentIndex) => {
      se.activeWeek = currentIndex == 1 ? true : false;
      
    })
  }

  setActiveFoodTab(currentIndex) {
    //this.activeWeek = currentIndex == 1 ? false : true;
    this.activeFoodTab = currentIndex;
    this.setActiveTabNotEmit(currentIndex);
    this.storage.remove('activeFoodTab');
    this.storage.set('activeFoodTab', this.activeFoodTab);
    //this.foodService.itemActiveFoodTab.emit(currentIndex);
    //this.setActiveTabNotEmit(currentIndex);
  }

  setActiveTabNotEmit(currentIndex){
    if (currentIndex === 2) {//nguyên liệu bữa tối
      //$(".swiper-food").addClass("main-color");
      $('.div-diner').removeClass("sub-color");
      $('.div-diner').addClass("main-color");
      $('.div-lunch').addClass("sub-color");
      $('.active-mark-food').addClass("main-color");

      $('.div-diner').siblings().removeClass('focus');
      $('.div-diner').addClass('focus');
      $('.active-mark-food').removeClass('left-50').addClass('left-50');
      $(".div-content-diner").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
      $(".div-content-lunch").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
    } else {//bữa trưa
      this.foodService.isDinner = false;
      //$(".swiper-pagination").removeClass("main-color");
      $('.div-diner').removeClass("main-color");
      $('.div-lunch').removeClass("sub-color");
      $('.div-lunch').addClass("main-color");
      $('.active-mark-food').removeClass("main-color");
      $('.div-lunch').siblings().removeClass('focus');
      $('.div-lunch').addClass('focus');
      $('.active-mark-food').removeClass('left-50');
      $(".div-content-lunch").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
      $(".div-content-diner").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
    }
  }
  //check thứ show tuân theo thứ
  checkThu()
  {
    var ti = new Date();
    var thu=moment(ti).format('dddd');
    if (thu=='Thursday'||thu=='Friday'||thu=='Saturday'||thu=='Sunday') {
     this.activeWeek=true;
     this.activeWeekDinner=true;
     this.changeWeekDinner(1);
    }else
    {
      this.activeWeek=false;
      this.activeWeekDinner=false;
      this.changeWeekDinner(0);
    }
  }
  itemDinerClick(item){
    var se = this;
    se.gf.hideStatusBar();
    se.foodService.itemDinnerDetail = item;
    se.navCtrl.navigateForward('fooddinnerdetail');
  }

  getCategoryHomePageDinner(type){
    var se = this;
    let url = C.urls.baseUrl.urlFood +"/api/FOHome/GetCategoryHomePageDinner?"+ (!type ? "currentWeek = 0" : "currentWeek = 1");
    se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data)=>{
      if(data && data.length >0){
        //data = data.filter((item)=> {return item.categoryTypeId != 0});
        //se.foodService.listItemsFood = data;
        data.forEach(element => {
          element.description = element.description.replace("<p>","");
          element.description = element.description.replace("</p>","");
         if(element.image.indexOf("640x480") == -1){
           let urlimage = element.image.substring(0, element.image.length - 4);
           let tail = element.image.substring(element.image.length - 4, element.image.length);
           element.image = urlimage + "-640x480" + tail;
             se.imageLoader.preload(element.image);
         }
         if(element.avgPoint >0){
           if(element.avgPoint <10){
            element.avgPoint = element.avgPoint.toFixed(1);
           }
           
         }
         element.priceDisplay = se.gf.convertNumberToString(element.price);
         //se.getListMenuByTypePrice(data);
         if(!type){
          element.startDate = se.foodService.periodStartDate ;
          element.endDate = se.foodService.periodEndDate;
          }else{
            element.startDate = se.foodService.periodStartDateNextWeek ;
            element.endDate = se.foodService.periodEndDateNextWeek;
          }
         element.currentWeek = !type ? true : false;
        });

      }
     
      if(!type){
        se.diners = data;
      }else{
        se.dinersnextweek = data;
        se.foodService.listItemsDinnerNextWeek = data;
        // setTimeout(()=>{
        //   se.changeWeekDinner(1);
        // },300)
        
      }
      //this.checkThu();
      //se.sliderfooddinner.slideTo(2);
      //se.foodbeforefilter = [...se.foods];
    })
  }

  changeWeek(type){
    this.activeWeek = !this.activeWeek;
    //this.sliderfood.slideTo(!type ? 0 : 1);//type =0: thisweek else nextweek
  }

  changeWeekDinner(type){
    //this.activeWeekDinner = !this.activeWeekDinner;
    this.sliderfooddinner.slideTo(!type ? 0 : 1);//type =0: thisweek else nextweek
    // this.sliderfooddinner.getActiveIndex().then((currentIndex) => {
    //   this.activeWeekDinner = currentIndex == 1 ? true : false;
      
    // })
  }

  slidechangedinner(){
    var se = this;
    se.sliderfooddinner.getActiveIndex().then((currentIndex) => {
      se.activeWeekDinner = currentIndex == 1 ? true : false;
      
    })
  }
}
