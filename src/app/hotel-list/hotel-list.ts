import { Bookcombo, ValueGlobal, SearchHotel, Booking } from './../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, ModalController, Events,AlertController,Platform,LoadingController } from '@ionic/angular';
import { AuthService } from '../providers/auth-service';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from './../providers/constants';
import { GlobalFunction, ActivityService } from './../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NavigationEnd, Router } from '@angular/router';
import { SearchHotelFilterAndSortPage } from '../search-hotel-filter-and-sort/search-hotel-filter-and-sort';
import { OverlayEventDetail } from '@ionic/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import * as moment from "moment";
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-hotel-list',
  templateUrl: 'hotel-list.html',
  styleUrls: ['hotel-list.scss'],
})
export class HotelListPage implements OnInit{
  public id;hotelId
  public json = []; public json1 = [];
  public dataList;
  public dataListLike = [];
  public itemsSkeleton = [1,2,3,4,5];
  public name;
  public code;

  ishide = false;
  nodata = false;
  num = 0;
  length;
  len = 30;
  co = 0;
  listhotels = "";
  listhotelIdInternal = "";
  hasfilter = false;
  hasfilteragain = false;
  hassortfilter = false;
  jsonhtprice = []; cin; cout; jsontemp; jsonhtprice1; minprice; maxprice;
  listHotelPrice = [];
  page = 1;
  totalData = 0;
  totalPage = 0;
  perPage = 10;
  listSort = [];
  sortOnly = true;
  // Declare local variable sortorder
  direction: number;
  isDesc: boolean = false;
  column: string = 'MinPriceOTAStr';
  liked = false;
  loginuser = null;
  public loadpricedone = false;
  private subscription: Subscription;
  _infiniteScroll;
  memberid: any;cindisplayhr = "14/04"; coutdisplayhr = "16/04"; guest = 2; datecin; datecout;ischeckAL=false;
  MaxPrice=0;
  MinPrice=10000000;
  constructor(public platform: Platform, public navCtrl: NavController, public zone: NgZone, public authService: AuthService, public bookcombo: Bookcombo, public value: ValueGlobal, public searchhotel: SearchHotel, 
    public modalCtrl: ModalController,  public events: Events, private router: Router,public booking: Booking,public loadingCtrl: LoadingController,
    public storage: Storage,public valueGlobal:ValueGlobal,public alertCtrl: AlertController,public gf: GlobalFunction,
    public activeRoute : ActivatedRoute,
    private fcm: FCM,
    private nativePageTransitions: NativePageTransitions,
    public activityService: ActivityService,
    private fb: Facebook) {
    this.name = searchhotel.gbmsg ?  (searchhotel.gbmsg.regionName ? searchhotel.gbmsg.regionName : searchhotel.gbmsg.regionName) : authService.region;
    if(this.searchhotel.isRecent==1){
      this.name =authService.region;
    }
    this.ischeckAL=this.searchhotel.ischeckAL;
    this.searchhotel.location="";
    this.searchhotel.hasSortHotelList =  this.searchhotel.chuoi  ||this.searchhotel.facsearch || this.searchhotel.tagIds || this.searchhotel.classIds || this.searchhotel.tagIds || this.searchhotel.ischeckAL; 
      this.loadpricedone = false;
        setTimeout(() => {
          this.loaddata(authService, searchhotel, 0);
          this.activityService.firstloadhotelist = true;
        },500);
      
      // this.fb.logEvent('Searched', {'Origination City' : searchhotel.OriginalCity ?searchhotel.OriginalCity: '',
      //  'Destination City': searchhotel.gbmsg ?  (searchhotel.gbmsg.regionName ? searchhotel.gbmsg.regionName : searchhotel.gbmsg.regionName) : authService.region,
      //  'Departure Date': searchhotel.CheckInDate ,'Return Date': searchhotel.CheckOutDate,'Number of Passengers': searchhotel.adult + (searchhotel.child ? searchhotel.child : 0)})
  }

  public async ngOnInit(){
    var se = this;
    await se.onEnter();
    se.subscription = se.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && (event.url ==='searchhotelfilterandsort' || event.url ==='searchhotelfilterandsort' || event.url ==='searchhotelfilteragain' || event.url ==='/hotellist/true' || event.url === '/app/tabs/hotellist/true') ) {
            se.onEnter();
        }
      });

     se.searchhotel.changeInfoHotelList.pipe().subscribe((data)=>{
       if(data){
        var item: any ={};
        item.adult=this.searchhotel.adult;
        item.child=this.searchhotel.child;
        item.arrchild= this.searchhotel.arrchild;
        item.roomnumber= this.searchhotel.roomnumber;
        item.imageUrl = this.searchhotel.objRecent.imageUrl;
        var checkInDate=new Date(this.gf.getCinIsoDate(this.searchhotel.CheckInDate));
        var checkOutDate=new Date(this.gf.getCinIsoDate(this.searchhotel.CheckOutDate));
        item.CheckInDate=this.searchhotel.CheckInDate
        item.CheckOutDate=this.searchhotel.CheckOutDate;
        item.checkInDate=moment(checkInDate).format('DD')+ ' '+ 'tháng' + ' ' +  moment(checkInDate).format('MM') +', ' +moment(checkInDate).format('YYYY')
        item.checkOutDate=moment(checkOutDate).format('DD')+ ' '+ 'tháng' + ' ' +  moment(checkOutDate).format('MM') +', ' +moment(checkOutDate).format('YYYY')
        item.id=this.searchhotel.objRecent.id;
        item.name=this.searchhotel.objRecent.name;
        item.isType=this.searchhotel.objRecent.isType;
        this.datecin = new Date(this.gf.getCinIsoDate(this.searchhotel.CheckInDate));
        this.datecout = new Date(this.gf.getCinIsoDate(this.searchhotel.CheckOutDate));
        this.cindisplayhr = moment(this.datecin).format('DD/MM');
        this.coutdisplayhr = moment(this.datecout).format('DD/MM');
        this.guest = this.searchhotel.child + this.searchhotel.adult;
        this.gf.setCacheSearch(item,1);
         se.doRefresh();
       }
     })
    }

    public ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

  async handleSplashScreen(): Promise<void> {
    try {
      // wait for App to finish loading
      await this.platform.ready()
    } catch (error) {
      console.error('Platform initialization bug')
    }
    const splash = document.getElementById('splash-screen');
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => { splash.remove() }, 300);
    }

  }
  private loaddata(authService, searchhotel, isloadmore) {
    if(!isloadmore){
      this.ishide = false;
    }
    
    var id = searchhotel.gbmsg ?  (searchhotel.gbmsg.regionId ? searchhotel.gbmsg.regionId : searchhotel.gbmsg.regionId) : authService.regionid;
    if(this.searchhotel.isRecent==1){
      id= authService.regionid;
      this.name =this.authService.region;
      
    }
    var strurl = C.urls.baseUrl.urlGet + '/hotelslist?regionId=' + id + '&page=' + this.page + '&pageSize=60&version=2' + (this.memberid ? '&memberid='+this.memberid : '');
    if (searchhotel.chuoi) {
      if (searchhotel.minprice) {
        this.minprice = searchhotel.minprice
        this.maxprice = searchhotel.maxprice
        strurl += '&minprice=' + this.minprice;
        strurl += '&maxprice=' + this.maxprice;
      }else{
        this.minprice = null;
        this.maxprice = null;
      }
      if (searchhotel.review > 0) {
        strurl += '&reviewpoint=' + searchhotel.review;
      }
      if (searchhotel.star.length > 0) {
        for (let j = 0; j < this.searchhotel.star.length; j++) {
          if (j == 0) {
            strurl += '&stars=' + this.searchhotel.star[j] * 10;
          } else {
            strurl += ',' + this.searchhotel.star[j] * 10;
          }
        }
      }
    }
    this.hassortfilter = false;
    //Truyền thêm param search theo
    //Khu vực
    if (searchhotel.location) {
      strurl += "&location=" + searchhotel.location;
      this.searchhotel.arrlocalcheck= searchhotel.location.split(',');
      this.hassortfilter = true;
    }
    //Tiện ích
    if (searchhotel.facsearch) {
      strurl += "&facsearch=" + searchhotel.facsearch;
      this.searchhotel.arrfacilitycheck = searchhotel.facsearch.split(',');
      this.hassortfilter = true;
    }
    //Phong cách
    if (searchhotel.tagIds) {
      strurl += "&tagIds=" + searchhotel.tagIds;
      this.searchhotel.arrstylecheck = searchhotel.tagIds.split(',');
      this.hassortfilter = true;
    }
    //Loại hình nơi ở
    if (searchhotel.classIds) {
      strurl += "&classIds=" + searchhotel.classIds;
      this.searchhotel.arrhoteltypecheck = searchhotel.classIds.split(',');
      this.hassortfilter = true;
    }
    this.loadpricedone = false;
   
    var se = this;
    
    var options = {
      method: 'GET',
      url: strurl,
      timeout: 180000, maxAttempts: 5, retryDelay: 2000,
    };
    request(options, function (error, response, body) {
      if(response.statusCode != 200){
        var objError ={
            page: "hotellist",
            func: "loaddata",
            message : response.statusMessage,
            content : response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
        C.writeErrorLog(objError,response);
      }
      if (error) {
        error.page="hotellist";
        error.func="loaddata";
        error.param = JSON.stringify(options);
        C.writeErrorLog(objError,response);
      }
      if(response.statusCode== 200){
    //   }
    // }
  
    // this.http.GET(strurl)
    //   .toPromise()
    //   .then(data => {
      
      var lst = JSON.parse(body);

        se.totalData = lst.Total;
        se.totalPage = se.totalData / 10;
        if (searchhotel.chuoi) {
          se.jsontemp = lst;
          /**Sửa phần combine điều kiện search
           * PDANH 05/01/2018
           */
          if (searchhotel.minprice) {
            //PDANH 09/01/2018: Fix lỗi không lấy được minprice,maxprice do lỗi định dạng thập phân ','
            se.minprice = searchhotel.minprice
            se.maxprice = searchhotel.maxprice
            se.hasfilter = true;
          }
          if (searchhotel.review > 0 || searchhotel.star.length > 0) {
            se.hasfilter = true;
          }

          if (!se.dataList) {
            se.dataList = [];
          }
          for (let i = 0; i < lst.List.length; i++) {
            let item = lst.List[i];
            //if (item.MinPrice || item.DealType || item.MaxPrice) {
              if (searchhotel.minprice) {
                if (item.MinPrice && se.minprice * 1 < se.clearSubFix(item.MinPrice) * 1 && se.clearSubFix(item.MinPrice) * 1 < se.maxprice * 1) {
                  se.dataList.push(item);
                }
                else if (item.MaxPrice && se.minprice * 1 < se.clearSubFix(item.MaxPrice) * 1 && se.clearSubFix(item.MaxPrice) * 1 < se.maxprice * 1) {
                  se.dataList.push(item);
                }
              } else {
                se.dataList.push(item);
              }
            //}
          }
          
          se.listhotels = "";
          se.listhotelIdInternal = "";
          for (let i = 0; i < lst.List.length; i++) {
            if (i == lst.List.length - 1) {
              if (lst.List[i].EANCode != "") {
                se.listhotels = se.listhotels + lst.List[i].EANCode;
              }
              se.listhotelIdInternal = se.listhotelIdInternal + lst.List[i].HotelId;

            } else {
              if (lst.List[i].EANCode != "") {
                se.listhotels = se.listhotels + lst.List[i].EANCode + ",";
              }
              se.listhotelIdInternal = se.listhotelIdInternal + lst.List[i].HotelId + ",";
            }
          }
          se.pushdata(0, se.dataList.length, isloadmore);
          //se.getHotelprice(isloadmore);
        }
        else {
          se.hasfilter = false;
          se.listhotels = "";
          se.listhotelIdInternal = "";

          var lst = JSON.parse(body);
          if (!se.dataList) {
            se.dataList = [];
          }
          for (let i = 0; i < lst.List.length; i++) {
            let item = lst.List[i];
            //if (item.MinPrice || item.DealType || item.MaxPrice) {
              se.dataList.push(item);
            //}
          }
          //se.dataList = lst.List;
          
          se.length = se.dataList.length;
          for (let i = 0; i < lst.List.length; i++) {
            if (i == lst.List.length - 1) {
              if (lst.List[i].EANCode != "") {
                se.listhotels = se.listhotels + lst.List[i].EANCode;
              }
              se.listhotelIdInternal = se.listhotelIdInternal + lst.List[i].HotelId;

            } else {
              if (lst.List[i].EANCode != "") {
                se.listhotels = se.listhotels + lst.List[i].EANCode + ",";
              }
              se.listhotelIdInternal = se.listhotelIdInternal + lst.List[i].HotelId + ",";
            }
          }
          if(se.listhotels.lastIndexOf(',') == se.listhotels.length-1){
            se.listhotels = se.listhotels.substring(0, se.listhotels.length-2);
          }
          se.pushdata(0, se.dataList.length, isloadmore);
          //se.getHotelprice(isloadmore);
        }
      }
      else if(response.statusCode == 400 ){
        error.page = "hotel-list";
        error.func = "loaddata";
        error.status = response.statusCode;
        error.param = JSON.stringify(options);
        C.writeErrorLog(error,response);
      }
    })

    se.gf.googleAnalytion(se.searchhotel.gbmsg ?  (se.searchhotel.gbmsg.regionCode ? se.searchhotel.gbmsg.regionCode : se.searchhotel.gbmsg.regionCode) : se.authService.regioncode,'screen_view',{})
  }
  /**Hàm sort list khách sạn theo giá, điểm trung bình 
     * PDANH 23/01/2018
     */
  sort(property) {
    this.column = property;
    var s = this;
    //setTimeout(() => {
    this.zone.run(() => this.json1.sort(function (a, b) {
      if (property == "MinPriceOTAStr") {
        let direction = s.isDesc ? 1 : -1;
        if (a["DealType"] || b["DealType"]) {
          if (a["DealPrice"] && b["DealPrice"] && a["DealPrice"] != 0 && s.clearSubFix(b["DealPrice"]) * 1 != 0 && s.clearSubFix(a["DealPrice"]) * 1 < s.clearSubFix(b["DealPrice"]) * 1) {
            return -1 * direction;
          } else if (a["DealPrice"] && b["DealPrice"] && a["DealPrice"] != 0 && s.clearSubFix(b["DealPrice"]) * 1 != 0 && s.clearSubFix(a["DealPrice"]) * 1 > s.clearSubFix(b["DealPrice"]) * 1) {
            return 1 * direction;
          }
        }
        else {
          if (a[property] && b[property]) {
            if (s.clearSubFix(a[property]) * 1 < s.clearSubFix(b[property]) * 1) {
              return -2 * direction;
            }
            else if (s.clearSubFix(a[property]) * 1 > s.clearSubFix(b[property]) * 1) {
              return 2 * direction;
            }
            else {
              return -3 * direction;
            }
          }
        }

      } else {
        let direction = -1;
        if (s.clearSubFix(a[property]) * 1 < s.clearSubFix(b[property]) * 1) {
          return -1 * direction;
        }
        else if (s.clearSubFix(a[property]) * 1 > s.clearSubFix(b[property]) * 1) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      }

    }));
    //}, 100);
  };
  /**Xóa ký tự định dạng số tiền VD: .,VNDđ
       * PDANH 23/01/2018
       */
  clearSubFix(value) {
    let re1 = /\./gi;
    let re2 = /\,/gi;
    let re3 = /\đ/gi;
    //return value.toLocaleString().replace("VND","").replace("đ","").replace(".","").replace(",","").trim();
    return value ? value.toLocaleString().replace(re1, '').replace(re2, '').replace("đ", '').replace("VND", '').trim() : 0;
  }

  /*
   * Hàm check sao khách sạn
   * @param item khách sạn cần check
   */
  checkHotelStar(item) {
    let res = false;
    for (let j = 0; j < this.searchhotel.star.length; j++) {
      if (this.searchhotel.star[j] * 10 == item.Rating) {
        var co = this.checkvalue(item.HotelId);
        if (co == 0) {
          res = true;
        }
      }
    }
    return res;
  }
  /*
   * Hàm check giá khách sạn
   * @param item khách sạn cần check
   */
  checkMinPrice(item) {
    let res = false;
    if (item) {
      if (item.DealType) {
        if (this.minprice * 1 <= item.DealPrice && item.DealPrice <= this.maxprice * 1) {
          var co = this.checkvalue(item.HotelId);
          if (co == 0) {
            res = true;
          }
        }
      }
      else {
        var co = this.checkvalue(item.HotelId);
        if (co == 0) {
          res = true;
        }
      }
    }

    return res;
  }

  checkvalue(id) {
    var co = 0;
    if (id) {
      for (let i = 0; i < this.json.length; i++) {
        if (id == this.json[i].HotelId) {
          co = 1;
          break;
        }
      }
    }

    return co;
  }
  /*
   * Hàm check item khách sạn đã tồn tại trong list json1 hay chưa: 1 = đã có; 0 - chưa có
   * @param item khách sạn cần check
   */
  checkExistsItem(id) {
    var co = 0;
    if (id) {
      for (let i = 0; i < this.json1.length; i++) {
        if (id == this.json1[i].HotelId) {
          co = 1;
          break;
        }
      }
    }

    return co;
  }

  checkExistsPriceItem(id) {
    var co = 0;
    var se = this;
    if (id) {
      for (let i = 0; i < se.listHotelPrice.length; i++) {
        if (id == se.listHotelPrice[i].GroupId) {
          co = 1;
          break;
        }
      }
    }

    return co;
  }

  checkItemLiked(id) {
    var co = 0;
    if (id) {
      for (let i = 0; i < this.dataListLike.length; i++) {
        if (this.dataListLike.indexOf(id) != -1) {
          co = 1;
          break;
        }
      }
    }

    return co;
  }

  getHotelprice(isloadmore) {
    var se = this;
    var options;

    var form = {
      HotelID: 0,
      RoomNumber: se.searchhotel.roomnumber ? se.searchhotel.roomnumber : 1,
      IsLeadingPrice: 1,
      ReferenceClient: '',
      Supplier: 'IVIVU',
      CheckInDate: moment(se.searchhotel.CheckInDate).format('YYYY-MM-DD'),
      CheckOutDate: moment(se.searchhotel.CheckOutDate).format('YYYY-MM-DD'),
      CountryID: '',
      CityID: '',
      NationalityID: 82,
      'RoomsRequest[0][RoomIndex]': '1',
      'RoomsRequest[0][Adults][label]': se.searchhotel.adult,
      'RoomsRequest[0][Adults][value]': se.searchhotel.adult,
      'RoomsRequest[0][Child][label]': se.searchhotel.child,
      'RoomsRequest[0][Child][value]': se.searchhotel.child,
      IsPackageRate: false,
      IsPackageRateInternal: false,
      vipCode: '',
      IsFenced: false,
      GetVinHms: 1,
      GetSMD: 1,
      IsB2B: true,
      IsSeri: true,
      HotelIdInternal: se.listhotelIdInternal,
      StatusMethod: 2,
      CityCode: se.authService.region,
      CountryCode: '',
      EANHotelID: 0,
      HotelIds: se.listhotels,
      NoCache: 'false',
      SearchType: 2,
      IsAgoda: true,
      IsOccWithBed: true,
    }
    if (this.searchhotel.arrchild) {
      for (var i = 0; i < this.searchhotel.arrchild.length; i++) {
        form["RoomsRequest[0][AgeChilds][" + i + "][value]"] = + this.searchhotel.arrchild[i].numage;
      }
    }

    options = {
      method: 'POST',
      //url: 'https://betapay.ivivu.com/api/contracting/HotelsSearchPriceAjax',
      url: C.urls.baseUrl.urlContracting +'/api/contracting/HotelsSearchPriceAjax',
      timeout: 180000, maxAttempts: 5, retryDelay: 2000,
      headers:
        {},
      form
    };
    request(options, function (error, response, body) {
      if (error) {
        error.page= "hotellist";
        error.func= "getHotelprice";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error,response);
      };
      if(response.statusCode != 200){
        var objError ={
            page: "hotellist",
            func: "getHotelprice",
            message : response.statusMessage,
            content : response.body,
            type: "warning",
            param: JSON.stringify(options)
          };
        C.writeErrorLog(objError,response);
      }
      se.zone.run(() => {
        if(se.page == 1){
          se.jsonhtprice = [];
          se.listHotelPrice=[];
        } 
        
        se.jsonhtprice1 = JSON.parse(body);
        if (se.jsonhtprice1.HotelListResponse) {
          se.jsonhtprice1 = se.jsonhtprice1.HotelListResponse.HotelList.HotelSummary;
          for (var i = 0; i < se.jsonhtprice1.length; i++) {
            let itemprice = se.jsonhtprice1[i];
            if (se.ischeckAL) {
              if(itemprice.availableNo!=0){
                se.listHotelPrice.push(itemprice);
              }
            } else {
              se.listHotelPrice.push(itemprice);
            }
            
            //Add vào list ks có giá
            if (se.searchhotel.minprice) {
              if (se.minprice < itemprice.lowRateOta && itemprice.lowRateOta < se.maxprice) {
                se.jsonhtprice.push(itemprice);
              }
            } else {
              se.jsonhtprice.push(itemprice);
            }
          }

         
          //Bind giá vào list ks đã search
            se.fillDataPrice().then((data)=>{
              if(se.json1 && se.json1.length > 0){
                data.forEach(element => {
                  if(!se.checkExistsItemInArray(se.json1, element, '')){
                    se.json1.push(element);
                  }
                });
              }else{
                se.json1 = data;
              }
              
              //Check lại phòng có giá hay ko
              setTimeout(() => {
                se.zone.run(()=>{
                  se.json1.forEach(element => {
                    
                    // if(!se.checkExistsPriceItem(element.HotelId)){
                    //   element.MinPriceOTAStr = "";
                    // }
                    //Check lại có nằm trong khoảng giá lọc không, nếu ko thì remove khỏi list
                    if(se.minprice && (!se.checkItemPrice(se.jsonhtprice, element)) 
                    && !(se.minprice*1 < se.clearSubFix(element.MinPriceTAStr)*1 && se.clearSubFix(element.MinPriceTAStr)*1 < se.maxprice*1) ){
                      se.removeItemPrice(se.json1, element);
                    }
                  })
                  //Loại những item có giá nằm ngoài khoảng minprice, maxprice
                  se.json1.forEach(element =>{
                    var itemPriceCheck:any = se.jsonhtprice.filter((item:any)=>{ return item.HotelId == element.HotelId});
                    if (se.minprice && !(se.minprice*1 < se.clearSubFix(element.MinPriceTAStr ? element.MinPriceTAStr : element.MinPrice0TAStr)*1 && se.clearSubFix(element.MinPriceTAStr ? element.MinPriceTAStr : element.MinPrice0TAStr)*1 < se.maxprice*1) ){
                      se.removeItemPrice(se.json1, element);
                    }
                  
                    if(se.minprice && itemPriceCheck && itemPriceCheck.length >0
                      && (se.minprice*1 < se.clearSubFix(element.MinPriceTAStr ? element.MinPriceTAStr : element.MinPrice0TAStr)*1 && se.clearSubFix(element.MinPriceTAStr ? element.MinPriceTAStr : element.MinPrice0TAStr)*1 < se.maxprice*1)
                      && !(se.minprice < itemPriceCheck[0].lowRateOta && itemPriceCheck[0].lowRateOta < se.maxprice)){
                        se.removeItemPrice(se.json1, element);
                    }
                  })
                  /////////
                })
                //if(se.json1.length >=5){
                  se.ishide = true;
                  se.loadpricedone = true;
                  se.nodata = se.json1.length == 0;
                //}
                if(se.json1.length >0 && se.json1.length < 6 && se.page * 5 < se.totalData){
                  se.page += 1;
                  se.loaddata(se.authService, se.searchhotel, false);
                }
                
              },200);
            })

          //Lâu quá ko có dữ liệu thì cho hiện
          setTimeout(() => {
              se.ishide = true;
              se.loadpricedone = true;
          },1200)
          

        } else {
          //if (!isloadmore) {
            se.ishide = true;
            se.nodata = se.json1.length == 0;
            se.json1.forEach(element => {
              if(!element.HasCheckPrice){
                element.HasCheckPrice = true;
                element.MinPriceOTAStr = 0;
                element.MinPriceTAStr = 0;
              }
              
            })
          //}
          se.loadpricedone = true;
        }
        setTimeout(() => {
          if (se.json1.length >0 && se.json1.length < 6 && se.page * 5 < se.totalData) {
            se.page += 1;
            se.loaddata(se.authService, se.searchhotel, false);
          } else {
            se.nodata = se.json1.length == 0;
            //se.executeSort();
          }
        }, 10);
        //se.nodata=true;
        if (se.ischeckAL) {
            setTimeout(() => {
            for (let i = 0; i < se.json1.length; i++) {
              const element = se.json1[i];
              if (se.ischeckAL) {
                if (element.MinPriceOTAStr && element.HasCheckPrice) {
                  se.nodata=false;
                  break;
                }
              } else {
                se.nodata=false;
                break;
              }
            }
              let itemsprice = se.json1.some(item => item.MinPriceOTAStr && item.HasCheckPrice);
              se.nodata = !itemsprice;
              if(se.nodata)
              {
                se.json1=[];
              }
          },1200)
        }
       
      })
    })

  }

  checkExistsItemInArray(arrays: any, item: any, type: any) {
    var res = false;
    res = arrays.some(r => r.HotelId == item.HotelId);
    return res;
  }

  public checkItemPrice(array,item){
    return array.find((itemPrice) => {
       return item.HotelId == itemPrice.HotelId;
    })
  }

  public removeItemPrice(array,itemcheck){
    array.forEach( (item, index) => {
      if(item.HotelId == itemcheck.HotelId) array.splice(index,1);
    });
 }

  /**Thực hiện sort theo giá, điểm trung bình
       * PDANH 23/01/2018
       */
  executeSort() {
    //sort
    if (this.searchhotel.sortOrder) {
      if (this.searchhotel.sortOrder == "1") {
        this.isDesc = true;
        this.sort("MinPriceOTAStr");
      } if (this.searchhotel.sortOrder == "2") {
        this.isDesc = false;
        this.sort("MinPriceOTAStr");
      } if (this.searchhotel.sortOrder == "3") {
        this.isDesc = true;
        this.sort("AvgPoint");
      }
    }
  }
  /**Bind lại giá nếu có giá OTA
     * PDANH 23/01/2018
     */
  fillDataPrice():Promise<any> {
    var se = this;
    return new Promise((resolve, reject) =>{
      se.zone.run(()=>{
          for (let index = 0; index < se.json1.length; index++) {
            if(se.json1[index].HasCheckPrice) continue;
            se.json1[index].HasCheckPrice = true;
            for (let i = 0; i < se.listHotelPrice.length; i++) {
              //Chỉ bind lại giá cho hotel, combo bỏ qua
             
                if (se.json1[index] && se.json1[index].HotelId == se.listHotelPrice[i].GroupId) {
                  se.json1[index].MinPriceOTAStr = se.listHotelPrice[i].MinPriceOTAStr;
                  se.json1[index].MinPriceTAStr = se.listHotelPrice[i].MinPriceTAStr;
                  se.json1[index].RoomNameSubString = se.listHotelPrice[i].RoomNameSubString.replace('...','');
                  se.json1[index].supplier = se.listHotelPrice[i].supplier;
                  se.json1[index].PromotionDescription = se.listHotelPrice[i].PromotionDescription;
                  se.json1[index].PromotionDescriptionSubstring = se.listHotelPrice[i].PromotionDescriptionSubstring;
                  se.json1[index].hasPrice = true;
                }
              
             
            }
        }
    
        //var arrid = se.listHotelPrice.map(x => x.HotelId);
        let arrid = se.json1.filter((item) => {return item.hasPrice }).map(x => x.HotelId);

        if(arrid && arrid.length >0){
          //var arr = se.json1.filter((item) => {return item.name});
          var arr = se.json1.filter((item) => {return arrid.indexOf(item.HotelId) == -1 });
          if(arr && arr.length>0){
            arr.forEach(element => {
              if(element.DealType){
                element.DealPrice = 0;
              }else{
                element.MinPriceOTAStr = 0;
              }
              
            });
          }
        }
        if (se.ischeckAL) {
          let jsontemp= se.json1;
          let json2 = []
          
          for (let i = 0; i < jsontemp.length; i++) {
            const element = jsontemp[i];
            if(element.DealType) {
              if (element.DealPrice && element.HasCheckPrice && element.MinPriceOTAStr) {
                json2.push(element);
              }
            }
            else{
              if (element.HasCheckPrice && element.MinPriceOTAStr) {
                json2.push(element);
              }
            }
            
          }
          resolve(json2);
        }else{
          resolve(se.json1);
        }
      })
      
    })
    
  }
  /**Sửa lại bind data
     * PDANH 23/01/2018
     */
  public pushdata(num, len, isloadmore) {
    /**Sửa phần combine điều kiện search
     * PDANH 05/01/2018
     */
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          //url: 'https://beta-olivia.ivivu.com/mobile/OliviaApis/GetFavouriteHotelByUser',
          url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/GetFavouriteHotelByUser',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if(response.statusCode != 200){
            var objError ={
                page: "hotel-list",
                func: "pushdata",
                message : response.statusMessage,
                content : response.body,
                type: "warning",
                param: JSON.stringify(options)
              };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "hotel-list";
            error.func = "pushdata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
            throw new Error(error)
          }
          else{
            if(body){
              se.zone.run(() => {
                se.dataListLike = JSON.parse(body);
                se.executePushData().then(()=>{
                  se.getHotelprice(isloadmore);
                })
              });
            }else{
              //se.showConfirm();
            }
            
          }
          
        });
      } else {
        se.executePushData().then(()=>{
          se.getHotelprice(isloadmore);
        })
      }
    });

  }

  async executePushData():Promise<any> {
    var se = this;
    return new Promise((resolve, reject) => {
      if (!se.dataList) {
        se.dataList = [];
      }
      
      for (let index = 0; index < se.dataList.length; index++) {
        let itemlike = false;
        //Kiểm tra có trong list like không
        if (se.dataListLike.length > 0) {
          itemlike = se.checkItemLiked(se.dataList[index].HotelId) == 1 ? true : false;
        }
        //Kiểm tra trong list đã có rồi thì bỏ qua ko add vào nữa
        var co = se.checkExistsItem(se.dataList[index].HotelId);
        if (co == 1) {
          continue;
        }
        if (se.dataList[index].Avatar) {
          //if(se.dataList[index].Avatar.toLocaleString().trim().indexOf("travelapi") == -1){
                se.dataList[index].Avatar = (se.dataList[index].Avatar.toLocaleString().trim().indexOf("http") != -1) ? se.dataList[index].Avatar : 'https:' + se.dataList[index].Avatar;
                // if(se.dataList[index].Avatar.indexOf('374') != -1){
                //   se.dataList[index].Avatar = se.dataList[index].Avatar.replace('374','104').replace('280','123');
                // }
            //  } 
          }
          else {
                se.dataList[index].Avatar = "https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png";
              }
          
  
        if (se.dataList[index].DealType) {
          if (se.dataList[index].DealPrice) {
            se.dataList[index].DealPrice = se.dataList[index].DealPrice;
          }
  
        }
        switch (se.dataList[index].Rating) {
          case 50:
            se.dataList[index].Rating = "./assets/star/ic_star_5.svg";
            break;
          case 45:
            se.dataList[index].Rating = "./assets/star/ic_star_4.5.svg";
            break;
          case 40:
            se.dataList[index].Rating = "./assets/star/ic_star_4.svg";
            break;
          case 35:
            se.dataList[index].Rating = "./assets/star/ic_star_3.5.svg";
            break;
          case 30:
            se.dataList[index].Rating = "./assets/star/ic_star_3.svg";
            break;
          case 25:
            se.dataList[index].Rating = "./assets/star/ic_star_2.5.svg";
            break;
          case 20:
            se.dataList[index].Rating = "./assets/star/ic_star_2.svg";
            break;
          case 15:
            se.dataList[index].Rating = "./assets/star/ic_star_1.5.svg";
            break;
          case 10:
            se.dataList[index].Rating = "./assets/star/ic_star_1.svg";
            break;
          case 5:
            se.dataList[index].Rating = "./assets/star/ic_star_0.5.svg";
            break;
          default:
            break;
        }
        var item;
        if (se.dataList[index].DealType) {
  
          if (se.dataList[index].Address) {
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice ? se.dataList[index].DealPrice : se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: se.dataList[index].Address, Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, Liked: itemlike,HasCheckPrice: false,StyleTag: se.dataList[index].StyleTag,Facilities: se.dataList[index].Facilities, IsShowPrice: se.dataList[index].IsShowPrice };
          } else {
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, DealPrice: se.dataList[index].DealPrice? se.dataList[index].DealPrice: se.dataList[index].DealPrice, DealType: se.dataList[index].DealTypeSubstring, SubLocation: '', Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, Liked: itemlike,HasCheckPrice: false ,StyleTag: se.dataList[index].StyleTag,Facilities: se.dataList[index].Facilities, IsShowPrice: se.dataList[index].IsShowPrice};
          }
        }
        else {
          if (se.dataList[index].Address) {
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, SubLocation: se.dataList[index].Address, Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : "", PromotionDescriptionSubstring: "", MinPriceTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : "", Liked: itemlike,HasCheckPrice: false ,StyleTag: se.dataList[index].StyleTag,Facilities: se.dataList[index].Facilities, IsShowPrice: se.dataList[index].IsShowPrice};
          } else {
            item = { Avatar: se.dataList[index].Avatar, Name: se.dataList[index].HotelName, AvgPoint: se.dataList[index].Point, SubLocation: '', Rating: se.dataList[index].Rating, HotelId: se.dataList[index].HotelId, RoomNameSubString: "", MinPriceOTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : "", PromotionDescriptionSubstring: "", MinPriceTAStr: se.dataList[index].MinPrice ? se.dataList[index].MinPrice.toLocaleString().replace("VND", "").trim() : "", Liked: itemlike,HasCheckPrice: false ,StyleTag: se.dataList[index].StyleTag,Facilities: se.dataList[index].Facilities, IsShowPrice: se.dataList[index].IsShowPrice};
          }
        }
        if(item.AvgPoint == "10.0"){
          item.AvgPoint = "10";
        }
        se.json1.push(item);
        se.nodata = false;
      }
      if(se._infiniteScroll){
        //setTimeout(() => {
          se._infiniteScroll.target.complete();
        //}, 500);
      }
      se.storage.get('auth_token').then(auth_token => {
        if (!auth_token) {
          for (let i = 0; i < se.json1.length; i++) {
            se.json1[i].Like=false;
            
          }
        }
        })
        //setTimeout(() => {
          se.ishide = true;
        //},200);
      //se.ishide = true;
      return resolve(se.json1);
    })
    
  }

  seemap() {
    var id1 = { name: this.name, code: this.code };
    //this.navCtrl.push('MapPage', id1);
   // this.app.getActiveNav().push('MapPage');
  }
  filter() {
    var id1 = { name: this.name, code: this.code };
    //this.navCtrl.push('SearchPage', id1);
    this.router.navigateByUrl('/searchhotel');
  }
  async presentLoadingnavi() {
    var loader = await this.loadingCtrl.create({
      message: "",
      duration: 10
    });
    loader.present();
  }
  itemSelected(msg) {
    //if (this.loginuser) {
      //this.presentLoadingnavi();
      this.searchhotel.hotelID = msg.HotelId;
      this.value.flag = 1;
      this.value.arrhotellist = this.json1;
      //this.navCtrl.push('HoteldetailPage', id1);
      this.searchhotel.rootPage = "listpage";
      this.booking.HotelId = null;
      this.valueGlobal.logingoback='/hoteldetail/'+msg.HotelId;
      var item: any ={};
      item.adult=this.searchhotel.adult;
      item.child=this.searchhotel.child;
      item.arrchild= this.searchhotel.arrchild;
      item.roomnumber= this.searchhotel.roomnumber;
      if(msg.Avatar){
        item.Avatar = (msg.Avatar.toLocaleString().trim().indexOf("http") == -1) ? 'https:' + msg.Avatar : msg.Avatar;
      }
      else{
        item.Avatar='https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x110.jpg';
      }
      var checkInDate=new Date(this.gf.getCinIsoDate(this.searchhotel.CheckInDate));
      var checkOutDate=new Date(this.gf.getCinIsoDate(this.searchhotel.CheckOutDate));
      item.CheckInDate=this.searchhotel.CheckInDate
      item.CheckOutDate=this.searchhotel.CheckOutDate;
      item.checkInDate=moment(checkInDate).format('DD')+ ' '+ 'tháng' + ' ' +  moment(checkInDate).format('MM') +', ' +moment(checkInDate).format('YYYY')
      item.checkOutDate=moment(checkOutDate).format('DD')+ ' '+ 'tháng' + ' ' +  moment(checkOutDate).format('MM') +', ' +moment(checkOutDate).format('YYYY')
      item.id=msg.HotelId;
      item.name=msg.Name;
      item.isType=0;
      this.gf.setCacheSearch(item,0);
      //this.router.navigateByUrl('/hoteldetail/'+id);
      setTimeout(()=>{
        //this.router.navigateByUrl('/app/tabs/hoteldetail/'+id);
        this.navCtrl.navigateForward('/hoteldetail/'+  msg.HotelId);
      },10)
      
    //}
  }
  doInfinite(infiniteScroll) {
    this.zone.run(() => {
      if (this.ishide == true) {
        if (this.co == 0 ) {
          this.page = this.page + 1;
          this.loaddata(this.authService, this.searchhotel, 1);
          this._infiniteScroll = infiniteScroll;
        }
        else {
          infiniteScroll.target.complete();
        }
      }
      else {
        infiniteScroll.target.complete();
      }
    })


  }
  async ionViewDidEnter() {
    var se = this;
    // await se.onEnter();

    // se.subscription = se.router.events.subscribe((event) => {
    //     if (event instanceof NavigationEnd && (event.url ==='searchhotelfilterandsort' || event.url ==='searchhotelfilteragain' || event.url ==='/hotellist/true' || event.url === '/app/tabs/hotellist/true') ) {
    //         se.onEnter();
    //         setTimeout(() => {
    //           se.onEnter();
    //         },500);
    //     }else if(event instanceof NavigationEnd && event.url ==='/hotellist/false'){
    //       se.loadUserDataLike();
    //     }
    //   });
      //se.onEnter();
    }

    public async onEnter(): Promise<void> {
      this.datecin = new Date(this.gf.getCinIsoDate(this.searchhotel.CheckInDate));
      this.datecout = new Date(this.gf.getCinIsoDate(this.searchhotel.CheckOutDate));
      this.cindisplayhr = moment(this.datecin).format('DD/MM');
      this.coutdisplayhr = moment(this.datecout).format('DD/MM');
      this.guest = this.searchhotel.child + this.searchhotel.adult;
      this.storage.get('auth_token').then(auth_token => {
        this.loginuser = auth_token;
      });
      this.storage.get('jti').then((uid:any)=>{
        this.memberid = uid;
      })
      //this.loadingCtrl.dismiss(null,null, '99');
          // do your on enter page stuff here
      this.hasfilteragain =this.activeRoute.snapshot.paramMap.get('filteragain') == "true" ? true : false;
      if(this.hasfilteragain){
        this.ishide = false;
          this.nodata = false;
          this.json1 = [];
          this.dataList = [];
          this.listHotelPrice = [];
          this.page = 1;
          this.name = this.searchhotel.gbmsg ?  (this.searchhotel.gbmsg.regionName ? this.searchhotel.gbmsg.regionName : this.searchhotel.gbmsg.regionName) : this.authService.region;
          this.loaddata(this.authService,this.searchhotel,1);
          if (this.hotelId && this.loginuser) {
            this.likeItem(this.hotelId);
          }
          this.hasfilteragain= false;
      }
      this.rebuildFilter();
      //Set activetab theo form cha
      this.gf.setActivatedTab(1);
   
  }

  rebuildFilter(){
    //Khu vực
    if (this.searchhotel.location) {
      this.searchhotel.arrlocalcheck= this.searchhotel.location.split(',');
      this.hassortfilter = true;
    }
    //Tiện ích
    if (this.searchhotel.facsearch) {
      this.searchhotel.arrfacilitycheck = this.searchhotel.facsearch.split(',');
      this.hassortfilter = true;
    }
    //Phong cách
    if (this.searchhotel.tagIds) {
      this.searchhotel.arrstylecheck = this.searchhotel.tagIds.split(',');
      this.hassortfilter = true;
    }
    //Loại hình nơi ở
    if (this.searchhotel.classIds) {
      this.searchhotel.arrhoteltypecheck = this.searchhotel.classIds.split(',');
      this.hassortfilter = true;
    }
    if(this.searchhotel.minprice){
      this.minprice = this.searchhotel.minprice.replace(/\./g, '').replace(/\,/g, '');
      this.maxprice = this.searchhotel.maxprice.replace(/\./g, '').replace(/\,/g, '');
    }else{
      this.minprice = null;
      this.maxprice = null;
    }
  }
  ionViewWillLeave(){
    this.searchhotel.arrlocalcheck = [];
  }
  goback(){
    //this.gf.setNativeSlide(this.nativePageTransitions, 'right');
    //this.gf.hiddenHeader();
    this.navCtrl.navigateBack('/app/tabs/tab1');
    //this.searchhotel.arrlocalcheck = [];
  }
  
  filterAgain() {
    this.router.navigateByUrl('/searchhotelfilteragain');
  }
  clearFilter() {
    //set về default
    //this.presentLoadingnavi();
    this.zone.run(()=>{
      this.searchhotel.minprice = null;
      this.searchhotel.maxprice = null;
      this.searchhotel.star = [];
      this.searchhotel.review = 0;
      this.searchhotel.chuoi = "";
      this.searchhotel.recent = null;
      this.loadpricedone = false;
      this.nodata = false;
      this.json1 = [];
      this.dataList = [];
      this.page = 1;
      this.searchhotel.ischeckAL=false;
      this.ischeckAL=false;
      this.loaddata(this.authService,this.searchhotel,0);
      this.hasfilteragain= false;

      this.clearSortAndFilter();
    })
  }

  searchAgain() {
    this.router.navigateByUrl('/');
  }
  async presentModal() {
    const modal: HTMLIonModalElement =
        await this.modalCtrl.create({
          component: SearchHotelFilterAndSortPage,
          componentProps: {
            aParameter: true,
          }
        });
      modal.present();
      modal.onDidDismiss().then((data: OverlayEventDetail) => {
        if(data.data == 'close' ){
          return;
        }
        this.zone.run(() => {
         this.ishide = false;
          this.loadpricedone = false;
          this.nodata = false;
          this.json1 = [];
          this.dataList = [];
          this.page = 1;
          this.ischeckAL=this.searchhotel.ischeckAL;
          this.name = this.searchhotel.gbmsg ?  (this.searchhotel.gbmsg.regionName ? this.searchhotel.gbmsg.regionName : this.searchhotel.gbmsg.regionName) : this.authService.region;
          this.loaddata(this.authService,this.searchhotel,0);
          this.hasfilteragain= false;
        })
     
      })
  }
  /*** show trang filterandsort
   * PDANH  29/01/2018
   */
  showFilterAndSort() {
    console.log(this.json1);
    this.presentModal();
    if(this.searchhotel.gbitem){
      if(this.searchhotel.gbitem.regionName){
        this.authService.region = this.searchhotel.gbitem.regionName;
      }
      if(this.searchhotel.gbitem.regionId){
        this.authService.regionid = this.searchhotel.gbitem.regionId;
      }
      if(this.searchhotel.gbitem.regionCode){
        this.authService.regioncode = this.searchhotel.gbitem.regionCode;
      }
    }
   
    // for (let i = 0; i < this.json1.length; i++) {
    //   const element = this.json1[i];
    //   if (element.DealPrice!=0 && element.HasCheckPrice &&  element.DealPrice>=this.MaxPrice) {
    //     this.MaxPrice=element.DealPrice;
    //   }
    //   if (element.DealPrice!=0 && element.HasCheckPrice &&  element.DealPrice<=this.MinPrice) {
    //     this.MinPrice=element.DealPrice;
    //   }
    //   if (!element.DealPrice && element.MinPriceOTAStr && element.HasCheckPrice &&  Number(element.MinPriceOTAStr.replace(/\./g, '').replace(/\,/g, ''))<=this.MinPrice) {
    //     this.MinPrice=element.MinPriceOTAStr.replace(/\./g, '').replace(/\,/g, '');
    //   }
    //   if (!element.DealPrice && element.MinPriceOTAStr && element.HasCheckPrice &&   Number(element.MinPriceOTAStr.replace(/\./g, '').replace(/\,/g, ''))>=this.MaxPrice) {
    //     this.MaxPrice=element.MinPriceOTAStr.replace(/\./g, '').replace(/\,/g, '');
    //   }

    // }
    // this.searchhotel.structureLower=this.MinPrice;
    // this.searchhotel.structureUpper=this.MaxPrice;
  }
  /*** Về trang login
   * PDANH  29/01/2018
   */
  goToLogin() {
    this.valueGlobal.logingoback = "/hotellist/true";
    this.navCtrl.navigateForward('/login');
  }
  /*** Set like item
   * PDANH  29/01/2018
   */
  likeItem(id) {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/AddFavouriteHotel',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            authorization: text
          },
          body: { hotelId: id },
          json: true
        };

        request(options, function (error, response, body) {
          if(response.statusCode != 200){
            var objError ={
                page: "hotel-list",
                func: "likeItem",
                message : response.statusMessage,
                content : response.body,
                type: "warning",
                param: JSON.stringify(options)
              };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page="hotel-list";
            error.func="likeItem";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          };
          se.hotelId='';
          if (se.json1.length > 0) {
            se.zone.run(() => se.setItemLikeStatus(id));
          }

        });
      }
      else {
        this.hotelId=id;
        //se.valueGlobal.logingoback='TabPage';
        this.router.navigateByUrl('/login');
      }
    });

  }
  /*** Set unlike item
   * PDANH  29/01/2018
   */
  unlikeItem(id) {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/RemoveFavouriteHotelByUser',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            authorization: text
          },
          body: { hotelId: id },
          json: true
        };

        request(options, function (error, response, body) {
          if(response.statusCode != 200){
            var objError ={
                page: "hotel-list",
                func: "unlikeItem",
                message : response.statusMessage,
                content : response.body,
                type: "warning",
                param: JSON.stringify(options)
              };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page="hotel-list";
            error.func="unlikeItem";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          };
          if (se.json1.length > 0) {
            se.zone.run(() => se.setItemLikeStatus(id));
          }
          console.log(body);
        });
      }
      else {
        this.router.navigateByUrl('/login');
      }
    });
  }
  /*** Set like/unlike item
   * PDANH  29/01/2018
   */
  setItemLikeStatus(id) {
    this.json1.forEach(el => {
      if (el.HotelId == id) {
        el.Liked = !el.Liked;
      }
    });
  }
  /*** Gọi lại api lấy list like để refresh lại trạng thái like
   * PDANH  31/01/2018
   */
  ionViewWillEnter(){
  
  }
  goToLogout(){
    this.storage.get('auth_token').then(id_token => {
      if (id_token !== null) {
        this.storage.remove('auth_token');
        this.storage.remove('mail');
        this.storage.remove('username');
        this.storage.remove('jti');
          this.storage.remove('userInfoData');
          this.storage.remove('userRewardData');
          this.storage.remove('point');
          this.storage.remove('listblogtripdefault');
          //Xóa token device khi logout
          this.fcm.getToken().then(token => {
          this.gf.DeleteTokenOfUser(token, id_token, this.gf.getAppVersion());
          });
        this.router.navigateByUrl('/login');
      }
    });
  }
  /*** Set lại trạng thái like
   * PDANH  31/01/2018
   */
  reloadDataLike(){
    var se = this;
    if(se.json1 && se.json1.length >0){
      se.json1.forEach(item => {
        //Nếu item đang like và list like trả về ko có id của item đang xét thì untick like
        if(item.Liked && se.dataListLike.indexOf(item.HotelId) == -1){
          item.Liked = !item.Liked;
        }
      });
    }
  }
  /*** Hàm set lại điều kiện sort and filter
   * PDANH 11/02/2018
   */
  sortAndFilterAgain(){
    this.presentModal();
    if(this.searchhotel.gbitem){
      if(this.searchhotel.gbitem.regionName){
        this.authService.region = this.searchhotel.gbitem.regionName;
      }
      if(this.searchhotel.gbitem.regionId){
        this.authService.regionid = this.searchhotel.gbitem.regionId;
      }
      if(this.searchhotel.gbitem.regionCode){
        this.authService.regioncode = this.searchhotel.gbitem.regionCode;
      }
    }
  }
  /*** Set clear điều kiện sort and filter
   * PDANH 11/02/2018
   */
  clearSortAndFilter(){
    this.zone.run(()=>{
    this.searchhotel.meal1check = false;
    this.searchhotel.meal2check = false;
    this.searchhotel.meal3check = false;
    this.searchhotel.local0check = false;
    this.searchhotel.local1check = false;
    this.searchhotel.local2check = false;
    this.searchhotel.local3check = false;
    this.searchhotel.local4check = false;
    this.searchhotel.local5check = false;
    this.searchhotel.local6check = false;
    this.searchhotel.local7check = false;
    this.searchhotel.local8check = false;
    this.searchhotel.local9check = false;
    this.searchhotel.local10check = false;
    this.searchhotel.local11check = false;
    this.searchhotel.local12check = false;
    this.searchhotel.local13check = false;
    this.searchhotel.local14check = false;
    this.searchhotel.local15check = false;
    this.searchhotel.local16check = false;
    this.searchhotel.local17check = false;
    this.searchhotel.local18check = false;
    this.searchhotel.local19check = false;
    this.searchhotel.facility0check = false;
    this.searchhotel.facility1check = false;
    this.searchhotel.facility2check = false;
    this.searchhotel.facility3check = false;
    this.searchhotel.facility4check = false;
    this.searchhotel.facility5check = false;
    this.searchhotel.facility6check = false;
    this.searchhotel.facility7check = false;
    this.searchhotel.facility8check = false;
    this.searchhotel.facility9check = false;
    this.searchhotel.style0check = false;
    this.searchhotel.style1check = false;
    this.searchhotel.style2check = false;
    this.searchhotel.style3check = false;
    this.searchhotel.style4check = false;
    this.searchhotel.style5check = false;
    this.searchhotel.style6check = false;
    this.searchhotel.style7check = false;
    this.searchhotel.style8check = false;
    this.searchhotel.style9check = false;
    this.searchhotel.hoteltype0check = false;
    this.searchhotel.hoteltype1check = false;
    this.searchhotel.hoteltype2check = false;
    this.searchhotel.hoteltype3check = false;
    this.searchhotel.hoteltype4check = false;
    this.searchhotel.hoteltype5check = false;
    this.searchhotel.hoteltype6check = false;
    this.searchhotel.hoteltype7check = false;
    this.searchhotel.hoteltype8check = false;
    this.searchhotel.hoteltype9check = false;
    this.searchhotel.sortOrder = null;
    this.searchhotel.location = null;
    this.searchhotel.facsearch = null;
    this.searchhotel.tagIds = null;
    this.searchhotel.classIds = null; 

    this.searchhotel.star = [];
      this.searchhotel.minprice = null;
      this.searchhotel.maxprice = null;
      this.searchhotel.review = null;
      this.searchhotel.location = "";
      this.searchhotel.facsearch = "";
      this.searchhotel.tagIds = "";
      this.searchhotel.classIds = "";

      this.searchhotel.arrfacilitycheck = [];
      this.searchhotel.arrhoteltypecheck = [];
      this.searchhotel.arrlocalcheck = [];
      this.searchhotel.arrstylecheck = [];
      this.searchhotel.arrtrademarkcheck = [];
      this.searchhotel.hasSortHotelList = "";
  })
    //this.router.navigateByUrl('/hotellist/true');
    //this.router.navigateByUrl(['/app/tabs/hotellist/true']);
    this.zone.run(()=>{
      this.searchhotel.minprice = null;
      this.searchhotel.maxprice = null;
      this.searchhotel.star = [];
      this.searchhotel.review = 0;
      this.searchhotel.chuoi = "";
      this.searchhotel.recent = null;
      this.loadpricedone = false;
      this.nodata = false;
      this.json1 = [];
      this.dataList = [];
      this.page = 1;
      this.searchhotel.ischeckAL = false;
      this.ischeckAL = false;
      this.loaddata(this.authService,this.searchhotel,0);
      this.hasfilteragain= false;
    })
  }

  async showConfirm(){
      const alertController = document.querySelector('ion-alert-controller');
      await alertController.componentOnReady();

      const alert = await alertController.create({ 
        message: "Phiên đăng nhập hết hạn. Nhấn OK để về trang đăng nhập hoặc nhấn Cancel để về màn hình chính.",
        buttons: [
        {
          text: 'Để sau',
          handler: () => {
            this.storage.remove('auth_token');
            this.storage.remove('email');
            this.storage.remove('username');
            this.storage.remove('jti');
            this.storage.remove('userInfoData');
            this.storage.remove('userRewardData');
            this.storage.remove('point');
            this.storage.remove('listblogtripdefault');
            this.navCtrl.navigateBack('/tabs/tab1');
          }
        },
        {
          text: 'Đăng nhập',
          role: 'OK',
          handler: () => {
            this.storage.remove('auth_token');
            this.storage.remove('email');
            this.storage.remove('username');
            this.storage.remove('jti');
            this.storage.remove('userInfoData');
            this.storage.remove('userRewardData');
            this.storage.remove('point');
            this.storage.remove('listblogtripdefault');
            this.router.navigateByUrl('/login');
          }
        }
      ]
    });
    alert.present();
  }
  changeinfo() {
    this.searchhotel.changeInfoFromPage = 'hotellist';
    this.valueGlobal.dayhot=[];
    this.valueGlobal.notSuggestDaily=[];
    this.valueGlobal.notSuggestDailyCB=[];
    this.navCtrl.navigateForward('/popupinfobkg');
  }

  doRefresh(){
    this.loadpricedone = false;
      this.nodata = false;
      this.json1 = [];
      this.dataList = [];
      this.listHotelPrice = [];
      this.page = 1;
      this.searchhotel.ischeckAL=false;
      this.ischeckAL=false;
      this.loaddata(this.authService,this.searchhotel,0);
  }

  loadUserDataLike() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/GetFavouriteHotelByUser',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if(response.statusCode != 200){
            var objError ={
                page: "hotel-list",
                func: "pushdata",
                message : response.statusMessage,
                content : response.body,
                type: "warning",
                param: JSON.stringify(options)
              };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "hotel-list";
            error.func = "pushdata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
            throw new Error(error)
          }
          else{
            if(body){
              se.zone.run(() => {
                se.dataListLike = JSON.parse(body);
                se.reloadDataLike();
              });
            }else{
              //se.showConfirm();
            }
            
          }
          
        });
      }
    });
  }
  
}
